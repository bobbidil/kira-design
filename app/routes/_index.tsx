import {
  type MetaFunction,
  type LinksFunction,
  type LinkDescriptor,
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
  type HeadersFunction,
  data,
  redirect,
  useLoaderData,
} from "react-router";
import { createTransport } from "nodemailer";
import {
  isLocalResource,
  loadResource,
  loadResources,
  formIdFieldName,
  formBotFieldName,
  cachedFetch,
} from "@webstudio-is/sdk/runtime";
import {
  ReactSdkContext,
  PageSettingsMeta,
  PageSettingsTitle,
} from "@webstudio-is/react-sdk/runtime";
import {
  projectId,
  Page,
  siteName,
  favIconAsset,
  pageFontAssets,
  pageBackgroundImageAssets,
  breakpoints,
} from "../__generated__/_index";
import {
  getResources,
  getPageMeta,
  getRemixParams,
  contactEmail,
} from "../__generated__/_index.server";
import * as constants from "../constants.mjs";
import css from "../__generated__/index.css?url";
import { sitemap } from "../__generated__/$resources.sitemap.xml";

export const action = async ({
  request,
  context,
}: ActionFunctionArgs): Promise<
  { success: true } | { success: false; errors: string[] }
> => {
  try {
    const url = new URL(request.url);
    url.host = request.headers.get("x-forwarded-host") || request.headers.get("host") || "";

    // Clone request to avoid "Body is unusable" error if read multiple times
    const formData = await request.clone().formData();

    console.log("Form submission received");

    // Debug environment variables
    if (!process.env.MAIL_USER || !process.env.MAIL_APP_PASSWORD) {
      console.error("Missing email credentials in environment variables.");
    }

    const formDataObj = Object.fromEntries(formData);

    // Configure nodemailer
    const transporter = createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_APP_PASSWORD,
      },
    });

    // Verify connection configuration
    try {
      await transporter.verify();
      console.log("Nodemailer transporter verified.");
    } catch (verifyError) {
      console.error("Nodemailer verification failed:", verifyError);
      throw verifyError;
    }

    // Send email
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_APP_PASSWORD ? process.env.MAIL_USER : "kiradesignbusiness@gmail.com", // Fallback for safety
      subject: `New Form Submission: ${formDataObj.Name || "Kira Design"}`,
      text: `
        Name: ${formDataObj.Name}
        Email: ${formDataObj["Email Address"]}
        Project Details: ${formDataObj[" Project Details"]}
      `,
      html: `
        <h1>New Form Submission</h1>
        <p><strong>Name:</strong> ${formDataObj.Name}</p>
        <p><strong>Email:</strong> ${formDataObj["Email Address"]}</p>
        <p><strong>Project Details:</strong> ${formDataObj[" Project Details"]}</p>
      `,
    });

    console.log("Email sent successfully.");

    return { success: true };
  } catch (error) {
    console.error("Form submission error:", error);

    return {
      success: false,
      errors: [error instanceof Error ? error.message : "Unknown error"],
    };
  }
};

const customFetch: typeof fetch = (input, init) => {
  if (typeof input !== "string") {
    return cachedFetch(projectId, input, init);
  }

  if (isLocalResource(input, "sitemap.xml")) {
    const response = new Response(JSON.stringify(sitemap));
    response.headers.set("content-type", "application/json; charset=utf-8");
    return Promise.resolve(response);
  }

  if (isLocalResource(input, "current-date")) {
    const now = new Date();
    // Normalize to midnight UTC to prevent hydration mismatches
    const startOfDay = new Date(
      Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
    );
    const data = {
      iso: startOfDay.toISOString(),
      year: startOfDay.getUTCFullYear(),
      month: startOfDay.getUTCMonth() + 1, // 1-12 instead of 0-11
      day: startOfDay.getUTCDate(),
      timestamp: startOfDay.getTime(),
    };
    const response = new Response(JSON.stringify(data));
    response.headers.set("content-type", "application/json; charset=utf-8");
    return Promise.resolve(response);
  }

  return cachedFetch(projectId, input, init);
};

export const loader = async (arg: LoaderFunctionArgs) => {
  try {
    const url = new URL(arg.request.url);
    const host =
      arg.request.headers.get("x-forwarded-host") ||
      arg.request.headers.get("host") ||
      "";
    url.host = host;
    url.protocol = "https";

    const params = getRemixParams(arg.params);
    const system = {
      params,
      search: Object.fromEntries(url.searchParams),
      origin: url.origin,
      pathname: url.pathname,
    };

    const resources = await loadResources(
      customFetch,
      getResources({ system }).data
    );
    const pageMeta = getPageMeta({ system, resources });

    if (pageMeta.redirect) {
      const status =
        pageMeta.status === 301 || pageMeta.status === 302
          ? pageMeta.status
          : 302;
      throw redirect(pageMeta.redirect, status);
    }

    // typecheck
    arg.context.EXCLUDE_FROM_SEARCH satisfies boolean;

    if (arg.context.EXCLUDE_FROM_SEARCH) {
      pageMeta.excludePageFromSearch = arg.context.EXCLUDE_FROM_SEARCH;
    }

    return data(
      {
        host,
        url: url.href,
        system,
        resources,
        pageMeta,
      },
      // No way for current information to change, so add cache for 10 minutes
      // In case of CRM Data, this should be set to 0
      {
        status: pageMeta.status,
        headers: {
          "Cache-Control": "public, max-age=600",
        },
      }
    );
  } catch (e) {
    console.error("Loader Error in _index.tsx:", e);
    throw e;
  }
};

export const headers: HeadersFunction = () => {
  return {
    "Cache-Control": "public, max-age=0, must-revalidate",
  };
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const metas: ReturnType<MetaFunction> = [];
  if (data === undefined) {
    return metas;
  }

  const origin = `https://${data.host}`;

  if (siteName) {
    metas.push({
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteName,
        url: origin,
      },
    });
  }

  return metas;
};

export const links: LinksFunction = () => {
  const result: LinkDescriptor[] = [];

  result.push({
    rel: "stylesheet",
    href: css,
  });

  if (favIconAsset) {
    result.push({
      rel: "icon",
      href: constants.imageLoader({
        src: `${constants.assetBaseUrl}${favIconAsset}`,
        // width,height must be multiple of 48 https://developers.google.com/search/docs/appearance/favicon-in-search
        width: 144,
        height: 144,
        fit: "pad",
        quality: 100,
        format: "auto",
        // @ts-ignore
      }),
      type: undefined,
    });
  }

  for (const asset of pageFontAssets) {
    result.push({
      rel: "preload",
      href: `${constants.assetBaseUrl}${asset}`,
      as: "font",
      crossOrigin: "anonymous",
    });
  }

  for (const backgroundImageAsset of pageBackgroundImageAssets) {
    result.push({
      rel: "preload",
      href: `${constants.assetBaseUrl}${backgroundImageAsset}`,
      as: "image",
    });
  }

  return result;
};

const Outlet = () => {
  const { system, resources, url, pageMeta, host } =
    useLoaderData<typeof loader>();
  return (
    <ReactSdkContext.Provider
      value={{
        ...constants,
        resources,
        breakpoints,
        onError: console.error,
      }}
    >
      {/* Use the URL as the key to force scripts in HTML Embed to reload on dynamic pages */}
      <Page key={url} system={system} />
      <PageSettingsMeta
        url={url}
        pageMeta={pageMeta}
        host={host}
        siteName={siteName}
        imageLoader={constants.imageLoader}
        assetBaseUrl={constants.assetBaseUrl}
      />
      <PageSettingsTitle>{pageMeta.title}</PageSettingsTitle>
    </ReactSdkContext.Provider>
  );
};

export default Outlet;
