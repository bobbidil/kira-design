/* eslint-disable */
/* This is a auto generated file for building the project */


import { Fragment, useState } from "react";
import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
import { Body as Body, Link as Link, RemixForm as RemixForm } from "@webstudio-is/sdk-components-react-router";
import { Image as Image, HtmlEmbed as HtmlEmbed, Input as Input, Textarea as Textarea } from "@webstudio-is/sdk-components-react";


export const projectId = "42d12f85-6e68-4c7f-b1cb-6625c1a526de";

export const lastPublished = "2025-12-09T10:30:09.590Z";

export const siteName = "Kira Design";

export const breakpoints = [{ "id": "Tt5uQsLO6VX8Wld3Fb0Uf" }, { "id": "UJ_jdvDCCaVutj9gRH_RL", "maxWidth": 991 }, { "id": "LHnGSfrmeiBjlbJG5sLom", "maxWidth": 767 }, { "id": "VsBkbLSLorock0elwza3l", "maxWidth": 479 }, { "id": "VLxk_AWaDSR0uenI-7KsQ", "minWidth": 1920 }];

export const favIconAsset: string | undefined =
  "KI_Porp_CRYrDRjI8FNf9DXSMaTcJ.png";

// Font assets on current page (can be preloaded)
export const pageFontAssets: string[] =
  []

export const pageBackgroundImageAssets: string[] =
  ["Transparent_KiraLogo_AZeyL00hbI01Apl6R_89t.png", "Top_Au-Decor_Rw2EQ9xx6K8CdI5xAjEIQ.png", "Portfolio_BG_UYuFLBVmvWrCxvKo28WJH.png", "KI_Translucent_G635deIrD1X3dTJQ_GtIQ.png", "Desktop_Aboutus_Shot_jhQctHVd9MrlRcR_LPDYq.png"]




export const CustomCode = () => {
  return (<></>);
}


const Page = (_props: { system: any; }) => {
  return <Body
    className={`w-element c1ja26z7 c4qvful`}>
    <HtmlEmbed
      code={"<style>\r\n    /* --- Scoped Styles --- */\r\n    :where(.scrape-faq-split) {\r\n        padding: 120px 0;\r\n        background-color: #04050F;\r\n        color: #fff;\r\n        font-family: 'Poppins', sans-serif;\r\n        position: relative;\r\n        overflow: hidden;\r\n        clip-path: polygon(0 50px, 100% 0, 100% 100%, 0 100%);\r\n        z-index: 5;\r\n    }\r\n\r\n    :where(.scrape-container) {\r\n        width: 100%;\r\n        max-width: 1000px;\r\n        padding: 0 15px;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    /* Title */\r\n    :where(.scrape-faq-header) { \r\n        margin-bottom: 60px; \r\n        text-align: center;\r\n    }\r\n    :where(.scrape-faq-header) h2 {\r\n        font-size: 3rem;\r\n        font-weight: 700;\r\n        margin: 0;\r\n        line-height: 1.1;\r\n        text-transform: uppercase;\r\n    }\r\n    :where(.scrape-faq-header) p {\r\n        color: rgba(255,255,255,0.5);\r\n        margin-top: 10px;\r\n        font-size: 1.1rem;\r\n    }\r\n\r\n    /* The Grid (2 Columns of Questions) */\r\n    :where(.scrape-accordion-grid) {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n        gap: 20px;\r\n    }\r\n\r\n    /* --- Accordion Item --- */\r\n    :where(.scrape-accordion-item) {\r\n        background-color: #141419;\r\n        border: 1px solid rgba(255,255,255,0.1);\r\n        border-radius: 4px;\r\n        overflow: hidden;\r\n        transition: all 0.3s ease;\r\n    }\r\n\r\n    /* Active State styling */\r\n    :where(.scrape-accordion-item.active) {\r\n        border-color: #fff;\r\n        background-color: #1a1a1a;\r\n    }\r\n\r\n    /* The Clickable Header */\r\n    :where(.scrape-accordion-btn) {\r\n        width: 100%;\r\n        padding: 25px;\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        cursor: pointer;\r\n        background: none;\r\n        border: none;\r\n        text-align: left;\r\n        color: #fff;\r\n    }\r\n\r\n    :where(.scrape-accordion-title) {\r\n        font-size: 1.1rem;\r\n        font-weight: 600;\r\n        margin: 0;\r\n        padding-right: 15px;\r\n    }\r\n\r\n    /* --- FIXED ARROW --- */\r\n    :where(.scrape-arrow) {\r\n        width: 24px;\r\n        height: 24px;\r\n        border: 1px solid rgba(255,255,255,0.3);\r\n        border-radius: 50%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        font-size: 12px;\r\n        transition: transform 0.3s ease, background 0.3s;\r\n        flex-shrink: 0;\r\n        color: #fff;\r\n    }\r\n\r\n    /* Animation: Rotate */\r\n    :where(.scrape-accordion-item.active) :where(.scrape-arrow) {\r\n        transform: rotate(180deg);\r\n        background-color: #fff;\r\n        color: #000;\r\n        border-color: #fff;\r\n    }\r\n\r\n    /* Body */\r\n    :where(.scrape-accordion-body) {\r\n        max-height: 0;\r\n        overflow: hidden;\r\n        transition: max-height 0.4s cubic-bezier(0, 1, 0, 1);\r\n        padding: 0 25px;\r\n    }\r\n\r\n    :where(.scrape-accordion-content) {\r\n        padding-bottom: 25px;\r\n        border-top: 1px solid rgba(255,255,255,0.1);\r\n        padding-top: 15px;\r\n        color: rgba(255,255,255,0.7);\r\n        font-size: 0.95rem;\r\n        line-height: 1.6;\r\n    }\r\n\r\n    /* --- EXPANDABLE GRID WRAPPER & BUTTON STYLES (NEW) --- */\r\n    :where(.scrape-accordion-grid-wrapper) {\r\n        /* Set initial visible height for 4-5 items */\r\n        max-height: 480px; \r\n        overflow: hidden;\r\n        position: relative; \r\n        transition: max-height 0.5s ease-out;\r\n    }\r\n\r\n    :where(.scrape-more-container) {\r\n        text-align: center;\r\n        padding-top: 30px;\r\n        padding-bottom: 20px;\r\n        margin-top: -100px; /* Overlap with the fading content */\r\n        position: relative;\r\n        /* Create a gradient fade effect over the cut-off content */\r\n        background: linear-gradient(180deg, rgba(4, 5, 15, 0) 0%, #04050F 50%); \r\n    }\r\n\r\n    :where(.scrape-more-btn) {\r\n        background-color: #1a1a1a;\r\n        color: #fff;\r\n        border: 1px solid rgba(255,255,255,0.3);\r\n        padding: 12px 30px;\r\n        border-radius: 4px;\r\n        cursor: pointer;\r\n        font-size: 1rem;\r\n        font-weight: 600;\r\n        transition: background-color 0.3s;\r\n    }\r\n    :where(.scrape-more-btn:hover) {\r\n        background-color: #2a2a2a;\r\n    }\r\n    /* Hide the fade container/button after the content has been expanded */\r\n    :where(.scrape-accordion-grid-wrapper.expanded) ~ :where(.scrape-more-container) {\r\n        display: none;\r\n    }\r\n\r\n    /* Responsive */\r\n    @media (max-width: 991px) {\r\n        :where(.scrape-faq-row) { flex-direction: column; }\r\n        :where(.scrape-faq-img-col) { display: none; }\r\n        :where(.scrape-faq-content-col) { flex: 0 0 100%; max-width: 100%; }\r\n        :where(.scrape-accordion-grid) { grid-template-columns: 1fr; }\r\n    }\r\n</style>"}
      className={`w-html-embed`} />
    <HtmlEmbed
      clientOnly={true}
      code={"<script>\r\n    function toggleScrapeAccordion(btn) {\r\n        const item = btn.closest('.scrape-accordion-item');\r\n        const body = item.querySelector('.scrape-accordion-body');\r\n        const isOpen = item.classList.contains('active');\r\n\r\n        // Optional: Close others (for single-open accordion)\r\n        document.querySelectorAll('.scrape-accordion-item').forEach(i => {\r\n            if (i !== item) {\r\n                i.classList.remove('active');\r\n                i.querySelector('.scrape-accordion-body').style.maxHeight = null;\r\n            }\r\n        });\r\n\r\n        if (!isOpen) {\r\n            item.classList.add('active');\r\n            // Set max-height to scrollHeight to enable smooth transition\r\n            body.style.maxHeight = body.scrollHeight + \"px\";\r\n        } else {\r\n             item.classList.remove('active');\r\n             body.style.maxHeight = null;\r\n        }\r\n    }\r\n\r\n    // NEW FUNCTION TO EXPAND THE SECTION\r\n    function expandFaq() {\r\n        const wrapper = document.getElementById('faq-wrapper');\r\n        const grid = wrapper.querySelector('.scrape-accordion-grid');\r\n\r\n        // Set the max-height to the full height of the grid content\r\n        wrapper.style.maxHeight = grid.scrollHeight + \"px\";\r\n        \r\n        // Add a class to transition the height and hide the 'More' button (via CSS)\r\n        wrapper.classList.add('expanded'); \r\n    }\r\n</script>"}
      className={`w-html-embed`} />
    <HtmlEmbed
      code={"<style>\n    /* 1. Import Readex Pro from Google Fonts */\n    @import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;300;400;500;600;700&display=swap');\n\n    /* 2. Set Global Defaults (Body Text) */\n    body {\n        font-family: 'Readex Pro', sans-serif; \n        color: #333; \n        line-height: 1.6;\n    }\n\n    /* 3. Set Global Headings to use the same font (or different weights) */\n    h1, h2, h3, h4, h5, h6 {\n        font-family: 'Readex Pro', sans-serif;\n        font-weight: 700; /* Bold for headings */\n    }\n\n    /* 4. Overrides */\n    .dark-theme {\n        color: #ffffff !important;\n    }\n    .dark-theme h1, .dark-theme h2, .dark-theme h3 {\n        color: #ffffff !important;\n    }\n</style>"}
      className={`w-html-embed`} />
    <div
      className={`w-element c1c6hyn3 cpfmnbn cc52l67 c173o7cs crwqqpa c57dgx6 c1qpg1yr c11iiaur c1abrof1 c1xp88to c1t4548c c1rjhzug cf6nu9m cdpbvj6 c1qkcw3z cpv0irv c1m2jkx8 c1d6hgsz ${"scrape-hero-wrapper"}`}>
      <HtmlEmbed
        code={"<style>\n    /* --- Scoped Styles --- */\n    :where(.scrape-hero-wrapper) {\n        font-family: 'Poppins', sans-serif;\n        position: relative;\n        overflow: hidden;\n        background-color: #fff;\n        color: #000;\n        width: 100%;\n    }\n\n    /* 1. Navigation */\n    :where(.scrape-nav) {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        padding: 20px 50px;\n        display: flex;\n        justify-content: space-between;\n        align-items: top;\n        z-index: 1000;\n        transition: background 0.3s;\n        /* Optional: Add background if you scroll, but transparent for hero */\n        background: linear-gradient(to bottom, rgba(0,0,0,0.8), transparent);\n    }\n    @media (max-width: 768px) { :where(.scrape-nav) { padding: 15px 20px; } }\n\n    :where(.scrape-brand) {\n        font-weight: 700;\n        font-size: 24px;\n        color: #fff;\n        text-decoration: none;\n        text-transform: uppercase;\n        letter-spacing: 2px;\n    }\n     \n    :where(.scrape-menu) {\n        display: flex;\n        gap: 30px;\n    }\n    @media (max-width: 991px) { :where(.scrape-menu) { display: none; } /* Hidden on mobile for this snippet */ }\n\n    :where(.scrape-menu) a {\n        color: rgba(255,255,255,0.7);\n        text-decoration: none;\n        font-size: 14px;\n        font-weight: 500;\n        text-transform: uppercase;\n        transition: 0.3s;\n    }\n    :where(.scrape-menu) a:hover, :where(.scrape-menu) a.active { color: #fff; }\n\n    /* 2. Hero Content */\n    :where(.scrape-hero) {\n        position: relative;\n        height: 100vh;\n        min-height: 600px;\n        display: flex;\n        align-items: top;\n        justify-content: center; /* Centered content */\n        z-index: 10;\n    }\n\n    :where(.scrape-hero-content) {\n        text-align: left;\n        max-width: 1140px;\n        width: 100%;\n        padding: 0 px;\n        margin-top: 0px; /* Offset for nav */\n    }\n\n    :where(.scrape-hero) h1 {\n        font-size: 4rem;\n        font-weight: 600;\n        line-height: 1em;\n        color: #fff;\n        margin-bottom: 0px;\n    }\n    @media (max-width: 768px) { :where(.scrape-hero) h1 { font-size: 3.5rem; } }\n\n    :where(.scrape-hero) h1 span { display: block; }\n    :where(.scrape-hero-highlight) {\n        text-decoration: underline;\n        text-decoration-color: rgba(255,255,255,0.5);\n    }\n\n    /* Check It Button */\n    :where(.scrape-check-btn) {\n        display: inline-flex;\n        align-items: center;\n        color: rgba(255,255,255,0.5);\n        font-size: 2.4rem;\n        font-weight: 700;\n        text-decoration: none;\n        transition: 0.3s;\n    }\n    :where(.scrape-check-btn):hover { color: #fff; }\n     \n    :where(.scrape-circle-icon) {\n        width: 40px;\n        height: 40px;\n        background: rgba(255,255,255,0.2);\n        border-radius: 50%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-right: 15px;\n        font-size: 1.6rem;\n        color: #fff;\n    }\n    /* Simple bounce animation */\n    :where(.scrape-circle-icon)::after {\n        content: \"↓\"; \n        animation: bounceArrow 2s infinite;\n    }\n\n    @keyframes bounceArrow {\n        0%, 20%, 50%, 80%, 100% {transform: translateY(0);}\n        40% {transform: translateY(5px);}\n        60% {transform: translateY(3px);}\n    }\n\n    /* 3. Skewed Background */\n    :where(.scrape-hero-bg) {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: -1;\n        overflow: hidden;\n        background-color: #04050F;\n    }\n\n    /* The Skew Effect via CSS Clip-Path (Cleaner than Skew Transform) */\n    :where(.scrape-hero-img) {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        opacity: 0.6;\n        /* This creates the diagonal cut at the bottom */\n        clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);\n        /* Optional scale to prevent white edges */\n        transform: scale(1.1); \n    }\n\n    body {\n      overflow-x: hidden; /* Forces the browser to cut off anything sticking out */\n      width: 100%;\n    }\n\n</style>"}
        className={`w-html-embed`} />
      <nav
        className={`w-element cc52l67 cp88ou cru1m34 ${"scrape-nav"}`}>
        <Image
          src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
          width={912}
          height={645}
          alt={""}
          className={`w-image ce3gse0 c1us88he c16bm43p cc52l67 cp88ou cru1m34 c175gw0n cuihm0a cucy3wj c5a1s1n c5t30pg c1347e26 cmq0zpk cee4vh0 c156h4fe c1577o7e cjmdyd2 c1mgtnas c6h2934 c1k9prv4 cef5bsr c1fouhpx`} />
        <div
          className={`w-element c1mdhnix c1qzq2dp citp4x1 chfrxyg c1ca2ky8 ${"mobile-toggle"}`}>
          {"☰"}
        </div>
      </nav>
      <div
        className={`w-element c1c6hyn3 cpfmnbn crwqqpa c1qpg1yr c57dgx6 c1jr0dp c6qod4o c1hvjtok c14o8l62 c1tl3su4 crgozq1 c15t8uul c12vjq33 c1ae1bcx cnvm9e0 c1s2yqin c466xhk cow2a5d cf2mmu9 cvw9fui ctaev0h c4f6nqy c1rej2xq cfmcse8 c1d6hgsz ckmmvsr c1v0wyye cuib9ri cm6loog crspql3 c11iiaur c1xp88to c1t4548c c1rjhzug cf6nu9m cdpbvj6 c1qkcw3z cjrj0ej c1uqzvli c1m2jkx8 cpv0irv c13hnv0z cdj6zco czfwn1m c1gy5v3d c1g5v4ce c1j0zrcc ${"scrape-hero"}`}>
        <div
          className={`w-element c1c6hyn3 cpfmnbn cj9l1k0 cb10tzi cc52l67 c1enzond cq23j2p c6mca0r cmuen4e c172a54s c1wnz5jp c46fw9y cvi58pq c1lxa8bp cspupja cbiha9i c1u0xart c1t4548c c55266w c1kpa8e0 cuib9ri crspql3 c9vhyo8 ctsfb7b c1d6l1ov c1h725l c187lgi2 c1r8ngi4 c1m89s47 c13f9e97 cieagxd c18pfdve c1l72t3e c1q2km2a ${"scrape-hero-bg"}`}>
          <div
            className={`w-element c3utoqb c1h4hubw c1jszpkq cyhfpca c117aq07 c1wbnc3n cij0ey4 c1bcm6da c1n205eh c19y6a92 cvms5fh c14bfv19 c1l9a540 c1ac3j37 ctekmf0 c1nfcjhd cc3u05m c13qtyfd c1yly58e c17r8qow c1s8dc6k c14tih19 c1ez9nzu c1pd5lmk`} />
          <Image
            src={"/assets/GirlPNG_Mob_5YV5AKouhqZnhUvZT9CoR.png"}
            width={1374}
            height={2048}
            alt={""}
            className={`w-image cjf06xu ci5esmj cc52l67 c1enzond cq23j2p c16gw1ad cjv2sc3 c1tc6i2l c1vcez6t cg7w4s8 cz8bp7h c6qod4o c1ewx9ts c1hvjtok c141tr5p co7m99q cesxvyb clqk2rs cc3vg36 cw29j6z c11mkg2u ch5irq3 c1tjpby8 catlwle c1s3ybx6 cspupja c1yly58e c14tih19 c1pd5lmk c1ez9nzu c1nmfuhj c1tuinma c1724pvy c1g5v4ce c1ahxz4z c1j0zrcc cb63i6p citp4x1 cy5p0vr c9zjoan c1hz8abl c1wsie1i cr4ek98 c5mrjxg c14cmd0h cwsk6us c8o010d ch2y329 c1o2324i c1mrdain c29elre c5vb4tu c1rej2xq c1qq2j5p cfmcse8 cysiffk c17o4tzu ${"\n"}`} />
          <Image
            src={"/assets/GirlPNG_JmZZGjQNJLTsUF3b2-fbA.png"}
            width={821}
            height={705}
            alt={""}
            className={`w-image cpfmnbn c1us88he cj6ctr8 c69dy50 c1gozthy c16gw1ad cjv2sc3 c46fw9y c1crfzcr cspupja c1yly58e c14tih19 c1pd5lmk c1ez9nzu c1nmfuhj c1tuinma c1724pvy cb63i6p c1g5v4ce c1ahxz4z c1j0zrcc cy5p0vr cobk2c4 ccraz3o c18nznb2 cjrj0ej c14a1di c1uqzvli c10dllog c1w38b1b c4w2fkl cp6rm1c cy16cgn cuib9ri c1rrvtvu cmvbim3 cxpvxve c1yu2g2t c1cekfp9 ch2y329 c1o2324i ${"\n"}`} />
        </div>
        <div
          className={`w-element c26kslk c13hnv0z cdj6zco c1ljn9ju c1gy5v3d c10i9n90 c1mx206x c11ptxw3 cbiha9i c1u0xart cj3kpsk ckbrtgm c1qd8pnd ctkj53y c5vco2n cbl64pw c1tl3su4 cv2syqt c15t8uul c4fr4ac c1dgsya chfrxyg c1ca2ky8 c1x0dxqi c1fmhmbj c1ldin8 c9589wo cw3zt4w csdhuhk c1oi2cuv c1c3q2sw cc52l67 c69dy50 cru1m34 c1wb9c7 c175gw0n c6mca0r c172a54s cmuen4e cx7rdre cv1ic8u cpfmnbn cj9l1k0 c1c6hyn3 c1x5kcei c15rz99y c1nnk20i c1s2yqin cow2a5d cf2mmu9 c14kd79r c1gb1kf7 c1edz3x2 c1iq0a70 c1byahcf c11dtjo0 c1nym7ce c1q4sc1w cu97z9h cfq46dv cakiyty c1r2brp5 c1ubv01r cogxuid c1xxakoe ${"scrape-hero-content"}`}>
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1p4vgme cxzmlij ciaon3h c13hnv0z cdj6zco c15wi4k8 c1uqbn44 c1k07e35 c1syakjj c1gx2quk c1vduly2 cofyfmo c5aoijt c170b1mz c1yztaor c1ri9c0b ckavz1d c1tl3su4 cv2syqt c15t8uul cnjk7l2 c1jsu91z cmai88s c1ms3d8b csdhuhk c146unly cfnjurw cupfqja c1tcj0gw c6s4bs9 c1rmga c1jha0yl c1g6uggu c1rgxldu c1hfqyt4 c1uyrzl3 c1jzlv1u`}>
            {"Proper design for "}
            <b
              className={`w-element c1x5vcdr c8qpvct c52mpqc c1i4rpd cqwq2d8`}>
              {"Your Business"}
            </b>
            {" "}
          </h1>
          <div
            className={`w-element cpfmnbn c1c6hyn3 cdzvppq c1r7sbjc c12os8yp c1gsrpot cja7iut c1astnqn cabfsi0 cfd6cku c1otk6x0 clahx5z c1gmefvw c1qrzc54 ciehs3x c15ogxu6 cndjrqr c1glqtw7`} />
          <p
            className={`w-element c1qzq2dp c7ewwm3 c1tps4zb cnddqm0 cnixgtc c1v0zej9 c1fhkb2b cyibha8 c1m96y5h cxzmlij cjruuff c1k07e35 c13hnv0z c10i9n90 czfwn1m c1gy5v3d c1pvsodd cw2xo8k cdj6zco c3kys42 c1d47yn1 c5aoijt c1iroi2x c1j1o2e9 c1q2km2a cv2syqt c15t8uul c1yztaor c1ri9c0b ckavz1d c11f8l23 c14ue73j cbfl9np cbtvhto czqbpj1 c1ms3d8b cw3zt4w cbl38e2 c1fmhmbj c1ldin8 c1nn7qpq c12os8yp c1f958qa c12ub8me c1wvqgkp c2d2z8y cpuh6ed c1e6umfb clixrp0 c1j9whkr c18w2p56 cssny6d c731nmu cjwiiz4 c15rz99y c1oub4v c1948mn4 c1d8xom9 cydck2g c1rmi4ju crn669s`}>
            {"Your business deserves to look proper online. We will deliver top quality, modern design to your standards. That is our mission."}
          </p>
        </div>
      </div>
    </div>
    <div
      className={`w-element ${"scrape-marquee-wrapper"}`}>
      <div
        className={`w-element ${"scrape-marquee-track"}`}>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
      </div>
    </div>
    <div
      className={`w-element c1i30lnr c15lec2l c1yly58e c1s8dc6k c17r8qow c1xjq1ia c1akemag c13hnv0z cfsv9jl c1dduie cg7uw93 cmexp6j c18b7drb coyhtzl c1xztitd c1c3f35s c1ja26z7 c1rjhzug c11iiaur c17v5yb3 c1abrof1 cf6nu9m c1xxakoe c1wbbdmw cb435lx c19e82ra c69dy50 cq23j2p c173o7cs co8ckbk cpho46m ${"ws-about-section"}`}>
      <Image
        src={"/assets/Bottom_AU_Decor_MZWVoe95GNRg1cPp6vHOi.png"}
        width={393}
        height={300}
        alt={""}
        className={`w-image cpfmnbn c6mca0r c172a54s cmuen4e c89km1 c1us88he c1tc6i2l cj9l1k0 c8qpvct c15180eh c197z3qo c1cc63p0 c11oxpvo cn9xesw cuihm0a c1avsdzn citp4x1 cj2lqdk c3utoqb c1h4hubw c1jszpkq c1nivxo6 c14cmd0h c13f9e97 csf4ng9 cyhfpca c117aq07 cij0ey4 c1fpxi7x clse284 c1hhcoo7 cr1bd65 czy3g3j cl4nv1k ci98hr7 cbkojqr cj2jzab c5onhs9 crspql3 ca1afd7 cyhon7h c1d6l1ov cdgvz13 c1ujccaq c9pvabp`} />
      <div
        className={`w-element c14tih19 c1pd5lmk c13hnv0z cdj6zco czfwn1m c1aqzxuf c1ez9nzu c1jh2sh4 c3bogv1 c1yfehq7 crgozq1 ccpnbl1 c55266w c1xxakoe c1mqcqzk c7a9rj5 c233vmp c9yawbf clsi59d cm6loog cjrj0ej cx3ll36 c656bnl cj63gtg c3bu3z0 c1uzv7ov c10ok871 c1vgbgll c1hbt6x1 c1f1ms6b cw5os1f c69sovp cxsmtat c1vida81 c175gw0n cuihm0a c1enzond cru1m34 cfp3zer c1yum3ze ckwt1as cvc4bdb c1kp535d clnnz7 cn3xzyg c1dw3jc4 c1p9xnms c9pw2om c1ulv44t cwmcrdx c10wtf2y csy84ic c13f9e97 cjlz1jr cpnp9y5 crzkrw2 cf2mmu9 czzp4at ${"ws-left-col"}`}>
        <div
          className={`w-element c14tih19 c1pd5lmk c13hnv0z cdj6zco czfwn1m c1gy5v3d c1qz0y26 c1oqvtlq ck0bxsr c10i9n90 csfxzns cadqo55 c1vwtsx7 c2f6k4z cfue7fk c1bwkj1n ckenryv c1ahxz4z c119y9gl c6lwivc cf6nu9m c1xxakoe cuib9ri crspql3 cm6loog cvr5dlr ca1afd7 c5onhs9 cyhon7h c11psw9i c14n7ilc cd7a0ao c1xkn11y c1f42ehf c19f45yq c16gw1ad cjv2sc3 c69dy50 c1gozthy c6mca0r c1c24u8p clfkzwh c172a54s cmuen4e cppz4f c154e9bz c215blf chbrrf3 c1gm4pwu cow2a5d cf2mmu9 c1c0x7dy cgby5tr ${"ws-content-inner"}`}>
          <h2
            className={`w-element c1k3gvey c1sf94nf cnixgtc c1yly58e c1kdsazu c1s8dc6k c1fhkb2b c161t3f8 c10i9n90 csfxzns crspql3 c1tu800j cs10yss cn9iw8e ckeud05 c1maac5q c1yynpfq cl6tb6j c1kcsb38 c7iu5xu czu882a c99j39c cj6ctr8 c1w5d8sg c5ri2ig ctwbdys c1lr50po couymbs ${"ws-heading"}`}>
            {"About us"}
          </h2>
          <h1
            className={`w-element czu882a csx4m8w c175gw0n c8qpvct c5lhvgj c177aeb2 cgbn6et cr4ek98 citp4x1`}>
            {"About Us"}
          </h1>
          <div
            className={`w-element cmy5b8t c1pzylyx c1yly58e c1s8dc6k c1v01ody c1ya6tlo c9afwxw c1kcsb38 c1t4548c cl1vi2f c1rjhzug cf6nu9m c1kpa8e0 c1gtjnme c66lvee cakiyty c1r2brp5 c1ubv01r cy9n6bf ct8fc10 c17f3eav ci28utw cpl2tyn c16gw1ad cjv2sc3 c1f10svd cvyjdar c1ogmnza cc52l67 c173o7cs cogm717 c13osye9 cj9l1k0 cpfmnbn c1c6hyn3 crzygna c1i4rpd cyhfpca c117aq07 c1wbnc3n c1nzxn8z cjwiiz4 c1t1wvie c2mz22r cz3s4a1 c12vjq33 c1vduly2`}>
            <p
              className={`w-element c126a354 cux85d8 c15snrv9 c1kcsb38 cuib9ri crspql3 cm6loog cydck2g c1483pb2 cyv10of c1mnwxt8 cdzvppq czu882a csx4m8w cxaoera c5ri2ig c2e14x4 ${"ws-text ws-text-bold"}`}>
              {"We are a web design team that specializes in creating "}
              <b
                className={`w-element`}>
                {"Landing pages"}
              </b>
              {" for local businesses. "}
            </p>
            <p
              className={`w-element c126a354 cux85d8 c15snrv9 c1kcsb38 cuib9ri crspql3 cm6loog cydck2g c1483pb2 cyv10of c1mnwxt8 c1q5epdw czu882a csx4m8w cxaoera c5ri2ig c2e14x4 ${"ws-text ws-text-bold"}`}>
              {"Our mission is to deliver "}
              <b
                className={`w-element`}>
                {"clean, modern, and professional designs"}
              </b>
              {", so that your landing page not only looks good but also "}
              <b
                className={`w-element`}>
                {"performs well for your type of business"}
              </b>
              {"."}
            </p>
            <p
              className={`w-element c126a354 cux85d8 c15snrv9 c1kcsb38 cuib9ri crspql3 cm6loog cydck2g cyv10of c1483pb2 c1mnwxt8 csx4m8w czu882a cxaoera c5ri2ig c2e14x4 ${"ws-text ws-text-bold"}`}>
              <b
                className={`w-element c12os8yp`}>
                {"Simple, proper, done right — "}
              </b>
              {"We’re here to build landing pages that "}
              <b
                className={`w-element`}>
                {"work for your business"}
              </b>
              {"."}
            </p>
          </div>
        </div>
      </div>
      <Image
        src={"/assets/Desktop_Aboutus_Shot_jhQctHVd9MrlRcR_LPDYq.png"}
        width={1958}
        height={1248}
        alt={""}
        className={`w-image c14eu79z cxbnr62 cb10tzi cb5p1z8 c84vfgg c8qpvct citp4x1`} />
      <div
        className={`w-element c14tih19 c1pd5lmk cyjltn2 c1u210ik c13hnv0z c1dduie cg7uw93 c1ez9nzu cspupja clm9rjq cbiha9i c1u0xart c1w38b1b cuib9ri cm6loog c1lijkdi c2ywpsy cv8ur1y crspql3 c1o4d8s6 cp6bxsh cjvu3p3 c1h725l c9pvabp cj6ctr8 c1p9xnms c9pw2om c1ulv44t cdghu2r czy3g3j ${"ws-right-col"}`}>
        <Image
          src={"/assets/Desktop_Aboutus_Shot_jhQctHVd9MrlRcR_LPDYq.png"}
          width={1958}
          height={1248}
          alt={""}
          className={`w-image c1guo88f c14tih19 c1pd5lmk cspupja c1sg6e8v c1ez9nzu c6op4a7 cjmdyd2 c1w38b1b cuib9ri crspql3 cm6loog cww9qqq cobk2c4 c1hz8abl ${"ws-mockup-img"}`} />
        <Image
          src={"/assets/Desktop_Aboutus_Shot_jhQctHVd9MrlRcR_LPDYq.png"}
          width={1958}
          height={1248}
          alt={""}
          className={`w-image cuib9ri crspql3 c5onhs9 ca1afd7 cyhon7h c1w38b1b cxkq3be c1hz8abl citp4x1`} />
      </div>
    </div>
    <section
      className={`w-element c12oly9f cou7u2m c160j245 ${"scrape-advantages-light"}`}>
      <HtmlEmbed
        code={"<style>\n    /* --- Scoped Styles --- */\n    :where(.scrape-advantages-light) {\n        padding: 140px 0;\n        background-color: #FBFAFF; /* Light Background */\n        color: #000;\n        font-family: 'Poppins', sans-serif;\n        position: relative;\n        overflow: hidden;\n        z-index: 5;\n        /* Scrape Diagonal Cut */\n        clip-path: polygon(0 0, 100% 0, 100% calc(100% - 50px), 0 100%);\n        margin-top: -50px;\n    }\n\n    :where(.scrape-container) {\n        width: 100%;\n        max-width: 1200px;\n        padding: 0 15px;\n        margin: 0 auto;\n    }\n\n    /* Title */\n    :where(.scrape-adv-header) {\n        text-align: center;\n        margin-bottom: 60px;\n        position: relative;\n        z-index: 2;\n    }\n    :where(.scrape-adv-header) h2 {\n        font-size: 3.5rem;\n        font-weight: 700;\n        margin: 0;\n        line-height: 1.1;\n        color: #000; /* Black Title */\n    }\n    :where(.scrape-adv-header) p {\n        font-size: 1.2rem;\n        color: rgba(0,0,0,0.6);\n        margin-top: 10px;\n        text-transform: uppercase;\n        letter-spacing: 2px;\n    }\n\n    /* Grid Layout */\n    :where(.scrape-adv-grid) {\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        gap: 30px;\n    }\n    @media (max-width: 991px) { :where(.scrape-adv-grid) { grid-template-columns: repeat(2, 1fr); } }\n    @media (max-width: 768px) { :where(.scrape-adv-grid) { grid-template-columns: 1fr; } }\n\n    /* --- The Card (Dark Initially) --- */\n    :where(.scrape-fill-card) {\n        position: relative;\n        display: block;\n        background-color: #291459; /* Dark Card */\n        border: 1px solid #04050F;\n        padding: 60px 40px;\n        overflow: hidden;\n        transition: all 0.3s;\n        /* Stack context */\n        isolation: isolate; \n    }\n\n    /* The \"Fill\" Background (Sweeps Up) */\n    :where(.scrape-fill-card)::before {\n        content: \"\";\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        height: 0%;\n        background-color: #fff; /* Fills White */\n        transition: height 0.4s cubic-bezier(0.25, 1, 0.5, 1);\n        z-index: -1;\n    }\n\n    /* Hover State */\n    :where(.scrape-fill-card):hover {\n        border-color: #04050F;\n        box-shadow: 0 20px 40px rgba(0,0,0,0.1); /* Shadow helps it pop on white bg */\n    }\n    :where(.scrape-fill-card):hover::before {\n        height: 100%; /* Fill up */\n    }\n\n    /* --- Content Styling --- */\n     \n    /* Floating Logo Badge */\n    :where(.scrape-float-logo) {\n        position: absolute;\n        top: 30px;\n        right: 30px;\n        width: 60px;\n        height: 60px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        z-index: 2;\n        animation: gentleFloat 4s ease-in-out infinite;\n        transition: 0.3s;\n    }\n     \n    :where(.scrape-float-logo) img {\n        width: 30px;\n        height: 30px;\n        object-fit: contain;\n        transition: 0.3s;\n        /* The filter below turns the image white */\n        filter: brightness(0) invert(1); \n    }\n\n    :where(.scrape-fill-card):hover :where(.scrape-float-logo) img {\n        filter: none;\n    }\n\n  \n/* 1. Default State: Image is forced White */\n    :where(.scrape-fill-icon) img {\n        width: 4rem;  /* Matches your old font-size */\n        height: 4rem; /* Keeps aspect ratio square */\n        object-fit: contain;\n        margin-bottom: 30px;\n        transition: 0.3s;\n        \n        /* Turn the colored image into white */\n        filter: brightness(0) invert(1);\n    }\n\n    /* 2. Hover State: Image returns to Original Color */\n    :where(.scrape-fill-card):hover :where(.scrape-fill-icon) img {\n        filter: none !important;\n    }\n\n    /* Text */\n    :where(.scrape-fill-title) {\n        font-size: 2rem;\n        font-weight: 700;\n        margin: 0 0 15px;\n        color: #fff; /* White Title */\n        text-transform: uppercase;\n        transition: color 0.3s;\n    }\n    :where(.scrape-fill-card):hover :where(.scrape-fill-title) { color: #000; } /* Turns Black */\n\n    :where(.scrape-fill-desc) {\n        font-size: 1.31rem;\n        line-height: 1.7;\n        color: rgba(255,255,255,0.6); /* Grey Text */\n        margin: 0;\n        transition: color 0.3s;\n    }\n    :where(.scrape-fill-card):hover :where(.scrape-fill-desc) { color: rgba(0,0,0,0.7); } /* Turns Dark Grey */\n\n\n    /* --- Animations --- */\n    @keyframes gentleFloat {\n        0%, 100% { transform: translateY(0); }\n        50% { transform: translateY(-10px); }\n    }\n\n    /* Staggered Entrance */\n    :where(.scrape-fill-card):nth-child(1) { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }\n    :where(.scrape-fill-card):nth-child(2) { animation: fadeInUp 0.8s ease-out 0.2s forwards; opacity: 0; }\n    :where(.scrape-fill-card):nth-child(3) { animation: fadeInUp 0.8s ease-out 0.4s forwards; opacity: 0; }\n\n    @keyframes fadeInUp {\n        from { opacity: 0; transform: translateY(30px); }\n        to { opacity: 1; transform: translateY(0); }\n    }\n\n</style>"}
        className={`w-html-embed`} />
      <div
        className={`w-element ${"scrape-container"}`}>
        <div
          className={`w-element ${"scrape-adv-header"}`}>
          <h2
            className={`w-element cnddqm0 cgbn6et`}>
            {"Why Choose Us?"}
          </h2>
          <p
            className={`w-element c77n4ro c65oich cuepn8w`}>
            {"Quality and modern design."}
          </p>
        </div>
        <div
          className={`w-element cc52l67 c173o7cs c1ya74qi c1a22471 cpfmnbn cj9l1k0 c1c6hyn3 ${"scrape-adv-grid"}`}>
          <div
            className={`w-element cb435lx c1b1wm7j cu6uim5 c15ckbhw c1ddjzeo cyrevdu c1d6k1zj c1veri52 c1s7kfcv c1uk8pqo c1s68vwc cm5fylg cyq66pf c5volmj c16ijol1 c90aniz c1qlb9j3 cj1wvag ${"scrape-fill-card"}`}>
            <div
              className={`w-element ${"scrape-float-logo"}`}>
              <Image
                src={"/assets/SmallLogo_E3MZb2eZUqGpwR083bhBz.png"}
                width={423}
                height={495}
                alt={""}
                className={`w-image c1yly58e c14tih19 c1pd5lmk c1ez9nzu c17r8qow`} />
            </div>
            <div
              className={`w-element ${"scrape-fill-icon"}`}>
              <Image
                src={"/assets/star_iCskgAuO_MaSnIrU3FmlT.png"}
                width={500}
                height={500}
                alt={""}
                className={`w-image`} />
            </div>
            <h3
              className={`w-element c65oich ck2urfs ${"scrape-fill-title"}`}>
              {"Premium Quality"}
            </h3>
            <p
              className={`w-element c1opop91 c65oich ${"scrape-fill-desc"}`}>
              {"Every image & visuals is "}
              <b
                className={`w-element`}>
                {"high quality & polished"}
              </b>
              {". So that your landing page presents "}
              <b
                className={`w-element`}>
                {"your business at its best "}
              </b>
              {"on all devices"}
            </p>
          </div>
          <div
            className={`w-element cu6uim5 cb435lx c1b1wm7j c15ckbhw c1ddjzeo cj1wvag c1uk8pqo c1s68vwc cm5fylg cyq66pf c5volmj c16ijol1 c90aniz c1qlb9j3 cyrevdu c1d6k1zj c1veri52 c1s7kfcv ${"scrape-fill-card"}`}>
            <div
              className={`w-element ${"scrape-float-logo"}`}>
              <Image
                src={"/assets/SmallLogo_E3MZb2eZUqGpwR083bhBz.png"}
                width={423}
                height={495}
                alt={""}
                className={`w-image c1yly58e c14tih19 c1pd5lmk c1ez9nzu c17r8qow`} />
            </div>
            <div
              className={`w-element ${"scrape-fill-icon"}`}>
              <Image
                src={"/assets/Delivery_(bigger)_cN_H29OTZt7hAiOKjfpUJ.png"}
                width={500}
                height={500}
                alt={""}
                className={`w-image`} />
            </div>
            <h3
              className={`w-element c65oich ck2urfs ${"scrape-fill-title"}`}>
              {"Fast"}
              {""}
              <br />
              {""}
              {"Delivery"}
            </h3>
            <p
              className={`w-element c1opop91 c65oich ${"scrape-fill-desc"}`}>
              {"We get your landing page "}
              <b
                className={`w-element`}>
                {"working in just 5 days"}
              </b>
              {". Fast and professional, with "}
              <b
                className={`w-element`}>
                {"no unnecessary delays"}
              </b>
              {"."}
            </p>
          </div>
          <div
            className={`w-element cb435lx c1b1wm7j cu6uim5 cbpmkmj c8ex3kl cmal8v c1uk8pqo c1s68vwc cm5fylg cyq66pf c5volmj c16ijol1 c90aniz c1qlb9j3 cyrevdu c1d6k1zj c1veri52 c1s7kfcv ${"scrape-fill-card"}`}>
            <div
              className={`w-element ${"scrape-float-logo"}`}>
              <Image
                src={"/assets/SmallLogo_E3MZb2eZUqGpwR083bhBz.png"}
                width={423}
                height={495}
                alt={""}
                className={`w-image c1yly58e c14tih19 c1pd5lmk c1ez9nzu c17r8qow`} />
            </div>
            <div
              className={`w-element ${"scrape-fill-icon"}`}>
              <Image
                src={"/assets/Satisfaction_YAztX34O_G00aSQOT-fZS.png"}
                width={500}
                height={500}
                alt={""}
                className={`w-image`} />
            </div>
            <h3
              className={`w-element c65oich ck2urfs ${"scrape-fill-title"}`}>
              {"SATISFACTION"}
              {""}
              <br />
              {""}
              {"GUARANTEE"}
            </h3>
            <p
              className={`w-element c1opop91 c65oich ${"scrape-fill-desc"}`}>
              {"Your landing page is "}
              <b
                className={`w-element`}>
                {"backed"}
              </b>
              {""}
              <br />
              {""}
              <b
                className={`w-element`}>
                {"By our 30 days of support."}
              </b>
              {""}
              <br />
              {""}
              {"Any bugs or design tweaks? We'll "}
              <b
                className={`w-element`}>
                {"fix them at no cost"}
              </b>
              {"."}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section
      className={`w-element c12hs7jk ${"scrape-works-section"}`}>
      <HtmlEmbed
        code={"<style>\n    /* --- Scoped Styles --- */\n    :where(.scrape-works-section) {\n        position: relative;\n        background-color: #04050F; /* Dark background for contrast */\n        color: #fff;\n        padding: 150px 0;\n        margin-top: -50px; /* Overlap previous section slightly */\n        z-index: 5;\n        /* The Diagonal Cut Effect */\n        clip-path: polygon(0 50px, 100% 0, 100% 100%, 0 calc(100% - 50px));\n    }\n\n    :where(.scrape-container) {\n        width: 100%;\n        max-width: 1140px;\n        padding: 0 15px;\n        margin: 0 auto;\n    }\n\n    /* Title */\n    :where(.scrape-works-title) {\n        margin-bottom: 60px;\n    }\n    :where(.scrape-works-title) h2 {\n        font-family: 'Poppins', sans-serif;\n        font-size: 3.6rem;\n        font-weight: 600;\n        margin: 0;\n        color: #fff;\n        position: relative;\n        display: inline-block;\n    }\n    :where(.scrape-works-title) h2::after {\n        content: \"\";\n        display: block;\n        width: 50px;\n        height: 3px;\n        background: #fff;\n        margin-top: 10px;\n    }\n\n    /* Gallery Grid (No Gaps) */\n :where(.scrape-gallery-grid) {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 0; /* Seamless grid */\n    /* Add these to center the content (images) within each grid cell */\n    justify-items: center; \n    align-items: center;\n}\n@media (max-width: 991px) { :where(.scrape-gallery-grid) { grid-template-columns: repeat(2, 1fr); } }\n@media (max-width: 576px) { :where(.scrape-gallery-grid) { grid-template-columns: 1fr; } }\n\n    /* Gallery Item */\n    :where(.scrape-gallery-item) {\n        position: relative;\n        height: 350px;\n        overflow: hidden;\n        display: block;\n        text-decoration: none;\n        cursor: pointer;\n    }\n\n    /* Background Image */\n    :where(.scrape-gallery-img) {\n        width: 100%;\n        height: 100%;\n        object-fit: contain;\n        transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);\n        opacity: 0.7;\n    }\n\n    /* Hover Content Overlay */\n    :where(.scrape-gallery-caption) {\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        padding: 30px;\n        z-index: 2;\n        background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);\n        transform: translateY(20px);\n        opacity: 0;\n        transition: all 0.4s ease;\n    }\n\n    :where(.scrape-gallery-caption) h5 {\n        font-family: 'Poppins', sans-serif;\n        font-size: 14px;\n        font-weight: 400;\n        text-transform: uppercase;\n        color: rgba(255,255,255,0.7);\n        margin: 0 0 5px;\n    }\n\n    :where(.scrape-gallery-caption) h3 {\n        font-family: 'Poppins', sans-serif;\n        font-size: 24px;\n        font-weight: 700;\n        color: #fff;\n        margin: 0;\n    }\n\n    /* Hover Effects */\n    :where(.scrape-gallery-item):hover :where(.scrape-gallery-img) {\n        transform: scale(1.1);\n        opacity: 0.4;\n    }\n    :where(.scrape-gallery-item):hover :where(.scrape-gallery-caption) {\n        transform: translateY(0);\n        opacity: 1;\n    }\n\n    /* Load More Button */\n    :where(.scrape-load-more) {\n        text-align: center;\n        margin-top: 60px;\n    }\n    :where(.scrape-btn-outline) {\n        display: inline-block;\n        padding: 15px 30px;\n        border: 2px solid #fff;\n        color: #fff;\n        text-transform: uppercase;\n        font-weight: 600;\n        text-decoration: none;\n        transition: 0.3s;\n    }\n    :where(.scrape-btn-outline):hover {\n        background: #8850BF;\n        color: #fff;\n        border: #8850BF;\n    }\n\n</style>"}
        className={`w-html-embed`} />
      <div
        className={`w-element ${"scrape-container"}`}>
        <div
          className={`w-element ${"scrape-works-title"}`}>
          <h2
            className={`w-element c1vw7qpq c1tcj0gw`}>
            {"Here's our Works"}
          </h2>
        </div>
      </div>
      <div
        className={`w-element ${"scrape-gallery-grid"}`}>
        <Link
          href={"/workshop-example"}
          target={"_self"}

          className={`w-element ${"scrape-gallery-item"}`}>
          <div
            className={`w-element ${"scrape-gallery-caption"}`}>
            <h5
              className={`w-element`}>
              {"VEHICLES"}
            </h5>
            <h3
              className={`w-element cupfqja`}>
              {"Automotive Workshop"}
            </h3>
          </div>
          <Image
            src={"/assets/workshop_thumbnail_prot_oqO2hrGsegbC3M8PBD2q0.png"}
            width={3044}
            height={1979}
            alt={""}
            className={`w-image ${"scrape-gallery-img"}`} />
        </Link>
        <Link
          href={"/beauty-example"}
          className={`w-element ${"scrape-gallery-item"}`}>
          <div
            className={`w-element ${"scrape-gallery-caption"}`}>
            <h5
              className={`w-element`}>
              {"PRODUCTS"}
            </h5>
            <h3
              className={`w-element cupfqja`}>
              {"Beauty Product"}
            </h3>
          </div>
          <Image
            src={"/assets/beauty_thumbnail_prot_arpb1rwDhLsYg211DljM2.png"}
            width={3044}
            height={1979}
            alt={""}
            className={`w-image ${"scrape-gallery-img"}`} />
        </Link>
        <Link
          href={"/course-example"}
          className={`w-element ${"scrape-gallery-item"}`}>
          <div
            className={`w-element ${"scrape-gallery-caption"}`}>
            <h5
              className={`w-element`}>
              {"COURSES"}
            </h5>
            <h3
              className={`w-element cupfqja`}>
              {"Video Editing Course"}
            </h3>
          </div>
          <Image
            src={"/assets/video_course_thumbnail_prot_8P_9les9mOyaY9f6edsP1.png"}
            width={3044}
            height={1979}
            alt={""}
            className={`w-image ${"scrape-gallery-img"}`} />
        </Link>
        <Link
          href={"/fitness-example"}
          className={`w-element ${"scrape-gallery-item"}`}>
          <div
            className={`w-element ${"scrape-gallery-caption"}`}>
            <h5
              className={`w-element`}>
              {"aPPLICATIONS"}
            </h5>
            <h3
              className={`w-element cupfqja`}>
              {"Fitness App"}
            </h3>
          </div>
          <Image
            src={"/assets/fitnessapp_thumbnail_prot_n66Ng4bLch4sObKK_Z5yl.png"}
            width={2435}
            height={1583}
            alt={""}
            className={`w-image ${"scrape-gallery-img"}`} />
        </Link>
        <Link
          href={"/food-example"}
          className={`w-element ${"scrape-gallery-item"}`}>
          <div
            className={`w-element ${"scrape-gallery-caption"}`}>
            <h5
              className={`w-element`}>
              {"F&B"}
            </h5>
            <h3
              className={`w-element cupfqja`}>
              {"Food"}
            </h3>
          </div>
          <Image
            src={"/assets/food_thumbnail_prot_NJ1z89xCqSdM74zpFJxQl.png"}
            width={2131}
            height={1385}
            alt={""}
            className={`w-image ${"scrape-gallery-img"}`} />
        </Link>
      </div>
    </section>
    <section
      className={`w-element c13qxvvl cpe849t cfdfy0g c125jnre c1qkgwvq clw2eve c1gzspnl c16hlq4g ${"scrape-timeline-section"}`}>
      <HtmlEmbed
        code={"<style>\n    /* --- Scoped Styles --- */\n    :where(.scrape-timeline-section) {\n        padding: 120px 0;\n        background-color: #FBFAFF;\n        color: #04050F;\n        font-family: 'Poppins', sans-serif;\n        position: relative;\n        overflow: hidden;\n        /* Signature Scrape Diagonal Cut */\n        clip-path: polygon(0 0, 100% 0, 100% calc(100% - 50px), 0 100%);\n        z-index: 5;\n        \n        /* --- 🎛️ SETTINGS --- */\n        --img-size: 250px; /* Size of the Icon/Image */\n    }\n\n    :where(.scrape-container) {\n        width: 100%;\n        max-width: 1140px;\n        padding: 0 15px;\n        margin: 0 auto;\n        /* Force Vertical Stacking to fix headline issue */\n        display: flex;\n        flex-direction: column; \n        align-items: center;\n    }\n\n    /* Title */\n    :where(.scrape-timeline-title) {\n        width: 100%;\n        margin-bottom: 100px;\n        text-align: center;\n        display: block; /* Ensure it takes full width */\n    }\n    :where(.scrape-timeline-title) h2 {\n        font-size: 3.6rem;\n        font-weight: 600;\n        margin: 0;\n        position: relative;\n        display: inline-block;\n    }\n    :where(.scrape-timeline-title) h2::after {\n        content: \"\";\n        display: block;\n        width: 50px;\n        height: 3px;\n        background: #000;\n        margin: 15px auto 0;\n    }\n\n    /* Wrapper */\n    :where(.scrape-timeline-wrapper) {\n        position: relative;\n        padding: 20px 0;\n        width: 100%;\n    }\n\n    /* Center Line */\n    :where(.scrape-timeline-line) {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 50%;\n        width: 2px;\n        background-color: rgba(0,0,0,0.1);\n        transform: translateX(-50%);\n        z-index: 0;\n    }\n\n    /* --- The Row (Flex Container) --- */\n    :where(.scrape-step-row) {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 100%;\n        margin-bottom: 100px;\n        position: relative;\n        z-index: 1;\n    }\n    :where(.scrape-step-row):last-child { margin-bottom: 0; }\n\n    /* --- Columns --- */\n    :where(.scrape-col-text) {\n        flex: 1; /* Takes up equal space */\n        padding: 0 40px;\n        position: relative;\n    }\n    \n    :where(.scrape-col-img) {\n        flex: 1; /* Takes up equal space */\n        padding: 0 40px;\n        display: flex;\n        align-items: center;\n    }\n\n    /* Text Styling */\n    :where(.scrape-step-text) h3 {\n        font-size: 2.4rem;\n        font-weight: 600;\n        margin: 0 0 15px 0;\n        text-transform: uppercase;\n        letter-spacing: 1px;\n    }\n    :where(.scrape-step-text) p {\n        font-size: 1.5rem;\n        line-height: 1.8;\n        color: rgba(0,0,0,0.65);\n        margin: 0;\n    }\n\n/* --- 🎈 NEW FLOATING ANIMATION --- */\n    @keyframes scrape-float {\n        0%, 100% { transform: translateY(0); }\n        50% { transform: translateY(-12px); } /* Moves up 12px */\n    }\n\n    /* Image Styling */\n    :where(.scrape-step-img) {\n        width: var(--img-size);\n        height: var(--img-size);\n        object-fit: cover;\n        padding: 5px;\n        transition: transform 0.3s;\n        \n        /* Apply the float: 5s duration makes it very chill */\n        animation: scrape-float 5s ease-in-out infinite;\n    }\n\n    /* Add delays so they don't all bob up and down at the exact same time.\n       This makes it look much more organic.\n    */\n    :where(.scrape-step-row):nth-child(1) :where(.scrape-step-img) { animation-delay: 0s; }\n    :where(.scrape-step-row):nth-child(2) :where(.scrape-step-img) { animation-delay: 1s; }\n    :where(.scrape-step-row):nth-child(3) :where(.scrape-step-img) { animation-delay: 2.5s; }\n    :where(.scrape-step-row):nth-child(4) :where(.scrape-step-img) { animation-delay: 1.5s; }\n\n    /* Hover Effect */\n    /* Note: When hovered, this scale overrides the float, essentially \"pausing\" the image for the user. */\n    :where(.scrape-step-row):hover :where(.scrape-step-img) { \n        transform: scale(1.1); \n    }\n\n    /* Center Marker */\n    :where(.scrape-center-marker) {\n        width: 10%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        position: relative;\n    }\n\n    :where(.scrape-step-number) {\n        background-color: #fff;\n        border: 2px solid #04050F;\n        border-radius: 50%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-weight: 700;\n        color: #04050F;\n        box-shadow: 0 0 0 15px #fff; /* White gap around line */\n        transition: all 0.3s ease;\n    }\n    \n    /* Hover Effect */\n    :where(.scrape-step-row):hover :where(.scrape-step-number) {\n        background-color: #8850BF;\n        border: #fff;\n        color: #fff;\n        transform: scale(1.1);\n    }\n\n    /* --- ZIG-ZAG LOGIC (The Fix) --- */\n    \n    /* ODD Rows (1, 3): [Text] - [01] - [Image] */\n    :where(.scrape-step-row):nth-child(odd) { \n        flex-direction: row; \n    }\n    :where(.scrape-step-row):nth-child(odd) :where(.scrape-col-text) { \n        text-align: right; \n    }\n    :where(.scrape-step-row):nth-child(odd) :where(.scrape-col-img) { \n        justify-content: flex-start; \n    }\n\n    /* EVEN Rows (2, 4): [Image] - [02] - [Text] */\n    :where(.scrape-step-row):nth-child(even) { \n        flex-direction: row-reverse; \n    }\n    :where(.scrape-step-row):nth-child(even) :where(.scrape-col-text) { \n        text-align: left; \n    }\n    :where(.scrape-step-row):nth-child(even) :where(.scrape-col-img) { \n        justify-content: flex-end; \n    }\n\n\n    /* --- PROGRESSIVE SIZING --- */\n    /* Step 1: Small */\n    :where(.scrape-step-row):nth-child(1) :where(.scrape-step-number) { width: 60px; height: 60px; font-size: 18px; }\n    /* Step 2: Medium */\n    :where(.scrape-step-row):nth-child(2) :where(.scrape-step-number) { width: 80px; height: 80px; font-size: 24px; }\n    /* Step 3: Large */\n    :where(.scrape-step-row):nth-child(3) :where(.scrape-step-number) { width: 100px; height: 100px; font-size: 30px; }\n    /* Step 4: Extra Large */\n    :where(.scrape-step-row):nth-child(4) :where(.scrape-step-number) { width: 120px; height: 120px; font-size: 40px; }\n    :where(.scrape-step-row):nth-child(5) :where(.scrape-step-number) { width: 140px; height: 140px; font-size: 45px; }\n    :where(.scrape-step-row):nth-child(6) :where(.scrape-step-number) { width: 160px; height: 160px; font-size: 50px; }\n\n    /* --- MOBILE RESPONSIVENESS (< 768px) --- */\n    @media (max-width: 768px) {\n        :where(.scrape-timeline-line) { left: 30px; }\n        \n        /* Force Column Stack */\n        :where(.scrape-step-row),\n        :where(.scrape-step-row):nth-child(even),\n        :where(.scrape-step-row):nth-child(odd) {\n            flex-direction: row; /* Always keep basic flex */\n            flex-wrap: wrap;     /* Allow wrapping */\n            justify-content: flex-start;\n            margin-bottom: 60px;\n        }\n\n        /* Marker Left */\n        :where(.scrape-center-marker) { width: auto; margin-left: 0; margin-right: 20px; order: 1; z-index: 2; }\n        \n        /* Text Next to Marker */\n        :where(.scrape-col-text),\n        :where(.scrape-step-row):nth-child(even) :where(.scrape-col-text),\n        :where(.scrape-step-row):nth-child(odd) :where(.scrape-col-text) {\n            order: 2;\n            width: calc(100% - 80px); /* Fill rest of width */\n            padding: 0;\n            text-align: left;\n        }\n\n        /* Image Below Text */\n        :where(.scrape-col-img),\n        :where(.scrape-step-row):nth-child(even) :where(.scrape-col-img),\n        :where(.scrape-step-row):nth-child(odd) :where(.scrape-col-img) {\n            order: 3;\n            width: 100%;\n            padding: 0 0 0 80px; /* Indent under text */\n            margin-top: 20px;\n            justify-content: flex-start;\n        }\n\n        /* Reset Sizes */\n        :where(.scrape-step-row):nth-child(n) :where(.scrape-step-number) { width: 60px !important; height: 60px !important; font-size: 18px !important; }\n        :where(.scrape-step-img) { width: 150px; height: 150px; }\n    }\n\n</style>"}
        className={`w-html-embed`} />
      <div
        className={`w-element ${"scrape-container"}`}>
        <div
          className={`w-element ${"scrape-timeline-title"}`}>
          <h2
            className={`w-element c1tcj0gw c1blc3he`}>
            {"Working Process"}
          </h2>
        </div>
        <div
          className={`w-element ${"scrape-timeline-wrapper"}`}>
          <div
            className={`w-element ${"scrape-timeline-line"}`} />
          <div
            className={`w-element ${"scrape-step-row"}`}>
            <div
              className={`w-element ${"scrape-col-text"}`}>
              <div
                className={`w-element ${"scrape-step-text"}`}>
                <h3
                  className={`w-element cd6g8kl czl8920`}>
                  {"Request & Offer"}
                </h3>
                <p
                  className={`w-element c1opop91 c65oich`}>
                  {"You send your landing page request, including any "}
                  <b
                    className={`w-element`}>
                    {"preferred assets"}
                  </b>
                  {" you wish to use (e.g., logos, images)."}
                </p>
              </div>
            </div>
            <div
              className={`w-element ${"scrape-center-marker"}`}>
              <div
                className={`w-element ${"scrape-step-number"}`}>
                {"01"}
              </div>
            </div>
            <div
              className={`w-element ${"scrape-col-img"}`}>
              <Image
                src={"/assets/Request_4P25M0k6Hv8EnVOMkJ4AQ.png"}
                width={500}
                height={500}
                alt={""}
                className={`w-image ${"scrape-step-img"}`} />
            </div>
          </div>
          <div
            className={`w-element ${"scrape-step-row"}`}>
            <div
              className={`w-element ${"scrape-col-text"}`}>
              <div
                className={`w-element ${"scrape-step-text"}`}>
                <h3
                  className={`w-element cd6g8kl czl8920`}>
                  <b
                    className={`w-element czl8920`}>
                    {"Template Selection"}
                  </b>
                </h3>
                <p
                  className={`w-element c1opop91 c65oich`}>
                  {"Based on your directions, we provide a selection of templates for you to choose from."}
                </p>
              </div>
            </div>
            <div
              className={`w-element ${"scrape-center-marker"}`}>
              <div
                className={`w-element c18oqwam crliwee cgnoy7i cr3x26p c17v5yb3 cjfajaj c1ftb5q6 c8zuv1e ${"scrape-step-number"}`}>
                {"02"}
              </div>
            </div>
            <div
              className={`w-element ${"scrape-col-img"}`}>
              <Image
                src={"/assets/Browse_6XLf0oTmGKENwE0cxv64P.png"}
                width={500}
                height={500}
                alt={""}
                className={`w-image ${"scrape-step-img"}`} />
            </div>
          </div>
          <div
            className={`w-element ${"scrape-step-row"}`}>
            <div
              className={`w-element ${"scrape-col-text"}`}>
              <div
                className={`w-element ${"scrape-step-text"}`}>
                <h3
                  className={`w-element cd6g8kl czl8920`}>
                  <b
                    className={`w-element czl8920`}>
                    {"Draft, Review & Revisions"}
                  </b>
                </h3>
                <p
                  className={`w-element c1opop91 c65oich`}>
                  {"We create the initial draft (sent as an image for review). We then implement revisions until the design is "}
                  <b
                    className={`w-element`}>
                    {"fully approved"}
                  </b>
                  {"."}
                </p>
              </div>
            </div>
            <div
              className={`w-element ${"scrape-center-marker"}`}>
              <div
                className={`w-element c8vo0jj c1m3ppcc ca2p9ke cwom1mb c17v5yb3 c1ftb5q6 c8zuv1e cjfajaj ${"scrape-step-number"}`}>
                {"03"}
              </div>
            </div>
            <div
              className={`w-element ${"scrape-col-img"}`}>
              <Image
                src={"/assets/Draft_w0o6XNqbWqAS8VfvAf0MX.png"}
                width={500}
                height={500}
                alt={""}
                className={`w-image ${"scrape-step-img"}`} />
            </div>
          </div>
          <div
            className={`w-element ${"scrape-step-row"}`}>
            <div
              className={`w-element ${"scrape-col-text"}`}>
              <div
                className={`w-element ${"scrape-step-text"}`}>
                <h3
                  className={`w-element cd6g8kl czl8920`}>
                  <b
                    className={`w-element`}>
                    {"Private Preview & Final Check"}
                  </b>
                </h3>
                <p
                  className={`w-element c1opop91 c65oich`}>
                  {"We host a live preview site for your final checks and any last-minute adjustments."}
                </p>
              </div>
            </div>
            <div
              className={`w-element ${"scrape-center-marker"}`}>
              <div
                className={`w-element c1xjpjy c1c9po8a c1s9hmeq c17v5yb3 c1ftb5q6 c8zuv1e cjfajaj ${"scrape-step-number"}`}>
                {"04"}
              </div>
            </div>
            <div
              className={`w-element ${"scrape-col-img"}`}>
              <Image
                src={"/assets/Check_dxm7RVFq7_PGboHu99GVX.png"}
                width={500}
                height={500}
                alt={""}
                className={`w-image ${"scrape-step-img"}`} />
            </div>
          </div>
          <div
            className={`w-element ${"scrape-step-row"}`}>
            <div
              className={`w-element ${"scrape-col-text"}`}>
              <div
                className={`w-element ${"scrape-step-text"}`}>
                <h3
                  className={`w-element cd6g8kl czl8920`}>
                  <b
                    className={`w-element`}>
                    {"Delivery & Hosting"}
                  </b>
                </h3>
                <p
                  className={`w-element c1opop91 c65oich`}>
                  {"Upon final approval, we deliver the completed landing page and assist you with the hosting setup."}
                </p>
              </div>
            </div>
            <div
              className={`w-element ${"scrape-center-marker"}`}>
              <div
                className={`w-element c18n6up2 cbegicb c1c5nq0f c1oktrdy c1ftb5q6 c17v5yb3 cjfajaj c8zuv1e ${"scrape-step-number"}`}>
                {"05"}
              </div>
            </div>
            <div
              className={`w-element ${"scrape-col-img"}`}>
              <Image
                src={"/assets/Delivery_zlzXGZn1hrJXmhd7LTfZT.png"}
                width={500}
                height={500}
                alt={""}
                className={`w-image ${"scrape-step-img"}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className={`w-element c1yly58e ca0y05i cdi1vp2 ${"scrape-faq-split"}`}>
      <HtmlEmbed
        code={"<style>\n    /* --- Scoped Styles --- */\n    :where(.scrape-faq-split) {\n        padding: 120px 0;\n        background-color: #04050F; /* Dark Theme */\n        color: #fff;\n        font-family: 'Poppins', sans-serif;\n        position: relative;\n        overflow: hidden;\n        /* Scrape Diagonal Cut (Bottom Only) */\n        clip-path: polygon(0 50px, 100% 0, 100% 100%, 0 100%);\n        z-index: 5;\n    }\n\n    :where(.scrape-container) {\n        width: 100%;\n        max-width: 1000px; /* Limit width for readability since image is gone */\n        padding: 0 15px;\n        margin: 0 auto;\n    }\n\n    /* Title */\n    :where(.scrape-faq-header) { \n        margin-bottom: 60px; \n        text-align: center;\n    }\n    :where(.scrape-faq-header h2) {\n        font-size: 3rem;\n        font-weight: 700;\n        margin: 0;\n        line-height: 1.1;\n        text-transform: uppercase;\n    }\n    :where(.scrape-faq-header) p {\n        color: rgba(255,255,255,0.5);\n        margin-top: 10px;\n        font-size: 1.1rem;\n    }\n\n    /* The Grid (2 Columns of Questions) */\n    :where(.scrape-accordion-grid) {\n        display: grid;\n        grid-template-columns: 1fr 1fr; /* 2 Columns */\n        gap: 20px;\n    }\n\n    /* --- Accordion Item --- */\n    :where(.scrape-accordion-item) {\n        background-color: #141419;\n        border: 1px solid rgba(255,255,255,0.1);\n        border-radius: 4px;\n        overflow: hidden;\n        transition: all 0.3s ease;\n    }\n    \n    /* Active State styling */\n    :where(.scrape-accordion-item.active) {\n        border-color: #fff;\n        background-color: #1a1a1a;\n    }\n\n    /* The Clickable Header */\n    :where(.scrape-accordion-btn) {\n        width: 100%;\n        padding: 25px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        cursor: pointer;\n        background: none;\n        border: none;\n        text-align: left;\n        color: #fff;\n    }\n\n    :where(.scrape-accordion-title) {\n        font-size: 1.1rem;\n        font-weight: 600;\n        margin: 0;\n        padding-right: 15px;\n    }\n\n    /* --- FIXED ARROW --- */\n    :where(.scrape-arrow) {\n        width: 24px;\n        height: 24px;\n        border: 1px solid rgba(255,255,255,0.3);\n        border-radius: 50%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 12px;\n        transition: transform 0.3s ease, background 0.3s;\n        flex-shrink: 0;\n        color: #fff;\n    }\n\n    /* Animation: Rotate */\n    :where(.scrape-accordion-item.active) :where(.scrape-arrow) {\n        transform: rotate(180deg);\n        background-color: #fff;\n        color: #000;\n        border-color: #fff;\n    }\n\n    /* Body */\n    :where(.scrape-accordion-body) {\n        max-height: 0;\n        overflow: hidden;\n        transition: max-height 0.4s cubic-bezier(0, 1, 0, 1);\n        padding: 0 25px;\n    }\n    \n    :where(.scrape-accordion-content) {\n        padding-bottom: 25px;\n        border-top: 1px solid rgba(255,255,255,0.1);\n        padding-top: 15px;\n        color: rgba(255,255,255,0.7);\n        font-size: 0.95rem;\n        line-height: 1.6;\n    }\n\n    /* Responsive */\n    @media (max-width: 991px) {\n        :where(.scrape-faq-row) { flex-direction: column; }\n        :where(.scrape-faq-img-col) { display: none; }\n        :where(.scrape-faq-content-col) { flex: 0 0 100%; max-width: 100%; }\n        :where(.scrape-accordion-grid) { grid-template-columns: 1fr; }\n    }\n</style>\n\n<script>\n    function toggleScrapeAccordion(btn) {\n        const item = btn.closest('.scrape-accordion-item');\n        const body = item.querySelector('.scrape-accordion-body');\n        const isOpen = item.classList.contains('active');\n\n        // Optional: Close others\n        document.querySelectorAll('.scrape-accordion-item').forEach(i => {\n            i.classList.remove('active');\n            i.querySelector('.scrape-accordion-body').style.maxHeight = null;\n        });\n\n        if (!isOpen) {\n            item.classList.add('active');\n            body.style.maxHeight = body.scrollHeight + \"px\";\n        }\n    }\n</script>"}
        className={`w-html-embed`} />
      <div
        className={`w-element c13hnv0z c1ljn9ju c1gy5v3d ${"scrape-container"}`}>
        <div
          className={`w-element ${"scrape-faq-row"}`}>
          <div
            className={`w-element ${"scrape-faq-content-col"}`}>
            <div
              className={`w-element ${"scrape-faq-header"}`}>
              <h2
                className={`w-element cnddqm0 c7tbmbf`}>
                {"FREQUENTLY ASKED QUESTIONS"}
              </h2>
              <p
                className={`w-element c77n4ro c65oich`}>
                {"Everything you need to know about working with us."}
              </p>
            </div>
            <div
              className={`w-element c11z5q76 ${"scrape-accordion-grid"}`}>
              <div
                className={`w-element ${"scrape-accordion-item"}`}>
                <div
                  onClick={(e) => (window as any).toggleScrapeAccordion(e.currentTarget)}
                  className={`w-element c14y1bup ${"scrape-accordion-btn"}`}>
                  <h3
                    className={`w-element ${"scrape-accordion-title"}`}>
                    {"What does the 30-day post-launch guarantee cover?"}
                  </h3>
                  <div
                    className={`w-element ${"scrape-arrow"}`}>
                    {"▼"}
                  </div>
                </div>
                <div
                  className={`w-element c14y1bup ${"scrape-accordion-body"}`}>
                  <div
                    className={`w-element ${"scrape-accordion-content"}`}>
                    <p
                      className={`w-element coa431f`}>
                      <b
                        className={`w-element cnddqm0`}>
                        {"A:"}
                      </b>
                      {" We cover technical issues, and minor final touches."}
                    </p>
                    <ul
                      className={`w-element cmy5b8t c1fz5xt0 c18mpfbp c1qya6gu c117n964`}>
                      <li
                        className={`w-element`}>
                        {" "}
                        <b
                          className={`w-element cnddqm0`}>
                          {"What is Included:"}
                        </b>
                        {" Immediate fixes for any bugs and errors we introduced. Plus"}
                        {""}
                        <br />
                        {""}
                        {"  a block of time for content tweaks (e.g. swapping a headline, image, or button color)"}
                      </li>
                      <li
                        className={`w-element`}>
                        {" "}
                        <b
                          className={`w-element cnddqm0`}>
                          {"What is Excluded:"}
                        </b>
                        {" New Feature requests, server/hosting issues, or bugs caused by"}
                        {""}
                        <br />
                        {""}
                        {"  client/third-party modifications to the code."}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className={`w-element c14y1bup ${"scrape-accordion-item"}`}>
                <div
                  onClick={(e) => (window as any).toggleScrapeAccordion(e.currentTarget)}
                  className={`w-element ${"scrape-accordion-btn"}`}>
                  <h3
                    className={`w-element ${"scrape-accordion-title"}`}>
                    {"What features are included?"}
                  </h3>
                  <div
                    className={`w-element ${"scrape-arrow"}`}>
                    {"▼"}
                  </div>
                </div>
                <div
                  className={`w-element c14y1bup ${"scrape-accordion-body"}`}>
                  <div
                    className={`w-element ${"scrape-accordion-content"}`}>
                    <p
                      className={`w-element coa431f`}>
                      <b
                        className={`w-element cnddqm0`}>
                        {"A:"}
                      </b>
                      {" Your page will be deployed within "}
                      <b
                        className={`w-element`}>
                        {"5 business days"}
                      </b>
                      {", contingent on two requirements."}
                    </p>
                    <ul
                      className={`w-element cmy5b8t c1fz5xt0 c18mpfbp c1qya6gu c117n964`}>
                      <li
                        className={`w-element`}>
                        {" "}
                        <b
                          className={`w-element cnddqm0`}>
                          {"Important Assets:"}
                        </b>
                        {" We need your core branding(logo, colors, font) at project kickoff"}
                      </li>
                      <li
                        className={`w-element`}>
                        {" "}
                        <b
                          className={`w-element cnddqm0`}>
                          {"Fast Feedback:"}
                        </b>
                        {" We require consolidated feedback on "}
                        <b
                          className={`w-element cnddqm0`}>
                          {"Step 3 Initial Design Draft"}
                        </b>
                        {" and "}
                        <b
                          className={`w-element cnddqm0`}>
                          {"Step 4 Private Preview & Final check"}
                        </b>
                        {" within 4 hours. Delays here will extend the timeline"}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className={`w-element ${"scrape-accordion-item"}`}>
                <div
                  onClick={(e) => (window as any).toggleScrapeAccordion(e.currentTarget)}
                  className={`w-element c14y1bup ${"scrape-accordion-btn"}`}>
                  <h3
                    className={`w-element ${"scrape-accordion-title"}`}>
                    {"How fast can I expect the final delivery?"}
                  </h3>
                  <div
                    className={`w-element ${"scrape-arrow"}`}>
                    {"▼"}
                  </div>
                </div>
                <div
                  className={`w-element c14y1bup ${"scrape-accordion-body"}`}>
                  <div
                    className={`w-element ${"scrape-accordion-content"}`}>
                    <p
                      className={`w-element coa431f`}>
                      <b
                        className={`w-element cnddqm0`}>
                        {"A:"}
                      </b>
                      {" We focus on high performance "}
                      <b
                        className={`w-element cnddqm0`}>
                        {"front-end"}
                      </b>
                      {" design"}
                    </p>
                    <ul
                      className={`w-element cmy5b8t c1fz5xt0 c18mpfbp c1qya6gu c117n964`}>
                      <li
                        className={`w-element`}>
                        {" "}
                        <b
                          className={`w-element cnddqm0`}>
                          {"Included:"}
                        </b>
                        {" Standard Lead capture forms (name, email/phone number), Media Embeds(Youtube/Vimeo), testimonials, social links, and basic UI animations."}
                      </li>
                      <li
                        className={`w-element`}>
                        {" "}
                        <b
                          className={`w-element cnddqm0`}>
                          {"Excluded:"}
                        </b>
                        {" Custom backend development (APIs, Databases, user logins/portals) or complex interactive tools (shopping carts, multiple pages)  "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className={`w-element ${"scrape-accordion-item"}`}>
                <div
                  onClick={(e) => (window as any).toggleScrapeAccordion(e.currentTarget)}
                  className={`w-element c14y1bup ${"scrape-accordion-btn"}`}>
                  <h3
                    className={`w-element ${"scrape-accordion-title"}`}>
                    {"What's the payment process?"}
                  </h3>
                  <div
                    className={`w-element ${"scrape-arrow"}`}>
                    {"▼"}
                  </div>
                </div>
                <div
                  className={`w-element c14y1bup ${"scrape-accordion-body"}`}>
                  <div
                    className={`w-element ${"scrape-accordion-content"}`}>
                    <p
                      className={`w-element coa431f`}>
                      <b
                        className={`w-element cnddqm0`}>
                        {"A:"}
                      </b>
                      {" Our standard package costs 450 MYR, excluding Hosting fees. a 50% (225 MYR) deposit is required to initiate the project, with the remaining 50% (225 MYR) payable upon completion."}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`w-element ${"scrape-accordion-item"}`}>
                <div
                  onClick={(e) => (window as any).toggleScrapeAccordion(e.currentTarget)}
                  className={`w-element c14y1bup ${"scrape-accordion-btn"}`}>
                  <h3
                    className={`w-element ${"scrape-accordion-title"}`}>
                    {"What happens If I can cancel the project"}
                  </h3>
                  <div
                    className={`w-element ${"scrape-arrow"}`}>
                    {"▼"}
                  </div>
                </div>
                <div
                  className={`w-element c14y1bup ${"scrape-accordion-body"}`}>
                  <div
                    className={`w-element ${"scrape-accordion-content"}`}>
                    <p
                      className={`w-element coa431f`}>
                      <b
                        className={`w-element`}>
                        {"A:"}
                      </b>
                      {" If the deposit has been paid and the project is cancelled after payment, "}
                      <b
                        className={`w-element`}>
                        {"the deposit is non-refundable"}
                      </b>
                      {", this is to ensure that the time and resources invested in preparing your project is accounted for."}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`w-element ${"scrape-accordion-item"}`}>
                <div
                  onClick={(e) => (window as any).toggleScrapeAccordion(e.currentTarget)}
                  className={`w-element c14y1bup ${"scrape-accordion-btn"}`}>
                  <h3
                    className={`w-element ${"scrape-accordion-title"}`}>
                    {"Do you handle Hosting?"}
                  </h3>
                  <div
                    className={`w-element ${"scrape-arrow"}`}>
                    <span
                      className={`w-element`}>
                      {"▼"}
                    </span>
                  </div>
                </div>
                <div
                  className={`w-element c14y1bup ${"scrape-accordion-body"}`}>
                  <div
                    className={`w-element ${"scrape-accordion-content"}`}>
                    <p
                      className={`w-element coa431f`}>
                      <b
                        className={`w-element`}>
                        {"A:"}
                      </b>
                      {" We do not provide hosting directly, but we handle the setup and configuration of hosting. "}
                      {""}
                      <br />
                      {""}
                      {"We recommend "}
                      <b
                        className={`w-element`}>
                        {"Hostinger "}
                      </b>
                      {"— It's widely used in Malaysia due to its affordability, and user-friendly control panel."}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`w-element ${"scrape-accordion-item"}`}>
                <div
                  onClick={(e) => (window as any).toggleScrapeAccordion(e.currentTarget)}
                  className={`w-element c14y1bup ${"scrape-accordion-btn"}`}>
                  <h3
                    className={`w-element ${"scrape-accordion-title"}`}>
                    <b
                      className={`w-element`}>
                      {"What If I need a custom domain?"}
                    </b>
                  </h3>
                  <div
                    className={`w-element ${"scrape-arrow"}`}>
                    <span
                      className={`w-element`}>
                      {"▼"}
                    </span>
                  </div>
                </div>
                <div
                  className={`w-element c14y1bup ${"scrape-accordion-body"}`}>
                  <div
                    className={`w-element ${"scrape-accordion-content"}`}>
                    <p
                      className={`w-element coa431f`}>
                      <b
                        className={`w-element`}>
                        {"A:"}
                      </b>
                      {" We can assist you with connecting your custom domain to your hosting account. The "}
                      <b
                        className={`w-element`}>
                        {"domain itself must be purchased separately by the client"}
                      </b>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`w-element ${"scrape-accordion-item"}`}>
                <div
                  onClick={(e) => (window as any).toggleScrapeAccordion(e.currentTarget)}
                  className={`w-element c14y1bup ${"scrape-accordion-btn"}`}>
                  <h3
                    className={`w-element ${"scrape-accordion-title"}`}>
                    <b
                      className={`w-element`}>
                      {"How do revisions work?"}
                    </b>
                  </h3>
                  <div
                    className={`w-element ${"scrape-arrow"}`}>
                    <span
                      className={`w-element`}>
                      {"▼"}
                    </span>
                  </div>
                </div>
                <div
                  className={`w-element c14y1bup ${"scrape-accordion-body"}`}>
                  <div
                    className={`w-element ${"scrape-accordion-content"}`}>
                    <p
                      className={`w-element coa431f`}>
                      {"A: We provide up to "}
                      <b
                        className={`w-element`}>
                        {"two revisions"}
                      </b>
                      {" for each of the two stages: "}
                      <b
                        className={`w-element`}>
                        {"Step 3 — Initial Draft"}
                      </b>
                      {" and "}
                      <b
                        className={`w-element`}>
                        {"Step 4 — Private Preview & Final Check"}
                      </b>
                      {"."}
                      {""}
                      <br />
                      {""}
                      {" Any additional revision requests may incur a fee of "}
                      <b
                        className={`w-element`}>
                        {"25 MYR per request"}
                      </b>
                      {"."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HtmlEmbed
        clientOnly={true}
        code={"<script>\r\n    (function() {\r\n        const accItems = document.querySelectorAll('.scrape-accordion-item');\r\n\n        accItems.forEach(item => {\r\n            const btn = item.querySelector('.scrape-accordion-btn');\r\n            const body = item.querySelector('.scrape-accordion-body');\r\n\n            btn.addEventListener('click', () => {\r\n                const isOpen = item.classList.contains('active');\r\n\n                // Optional: Close others\r\n                accItems.forEach(i => {\r\n                    i.classList.remove('active');\r\n                    i.querySelector('.scrape-accordion-body').style.maxHeight = null;\r\n                });\r\n\n                if (!isOpen) {\r\n                    item.classList.add('active');\r\n                    body.style.maxHeight = body.scrollHeight + \"px\";\r\n                }\r\n            });\r\n        });\r\n    })();\r\n</script>"}
        className={`w-html-embed`} />
    </section>
    <div
      className={`w-element ${"scrape-marquee-wrapper"}`}>
      <div
        className={`w-element ${"scrape-marquee-track"}`}>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
        <div
          className={`w-element c13hnv0z cfsv9jl cnopvw8 c1phe92h`}>
          <Image
            src={"/assets/KiraLogo_qDYoDuX2z_GRX-qXRpPEl.png"}
            width={912}
            height={645}
            alt={""}
            className={`w-image c1u21ibd c1ho8f8t cjmdyd2 c1ggo5ox cspupja c1guo88f c6op4a7`} />
          <h1
            className={`w-element c1fhkb2b c1v0zej9 c1exwz7t c13hnv0z czfwn1m cg7uw93 ck9gowe`}>
            {"✦"}
          </h1>
        </div>
      </div>
    </div>
    <section
      className={`w-element c1s2yqin c3yugbh c13hnv0z czfwn1m cg7uw93 c1yly58e c1s8dc6k ${"scrape-cleniq-fusion"}`}>
      <HtmlEmbed
        code={"<style>\n    /* --- Scrape Styling on Cleniq Layout --- */\n    .scrape-cleniq-fusion {\n        padding: 120px 0;\n        background-color: #04050F; /* Scrape Black */\n        color: #fff;\n        font-family: 'Poppins', sans-serif;\n        overflow: hidden;\n        position: relative;\n        z-index: 10;\n        /* Scrape Diagonal Top Cut */\n        clip-path: polygon(0 50px, 100% 0, 100% 100%, 0 100%);\n        margin-top: -50px; \n    }\n\n    .scrape-container {\n        max-width: 1140px;\n        margin: 0 auto;\n        padding: 0 15px;\n    }\n\n    .scrape-row {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        margin: 0 -15px;\n    }\n\n    /* 1. Image Column (Cleniq Structure) */\n    .scrape-col-img {\n        flex: 0 0 100%;\n        max-width: 100%;\n        padding: 0 15px;\n        margin-bottom: 50px;\n        position: relative;\n        z-index: 1;\n        /* Animation: Slide In ONLY (No Float) */\n        opacity: 0;\n        animation: cleniqSlideLeft 1s ease-out forwards;\n    }\n\n    @media (min-width: 992px) {\n        .scrape-col-img {\n            flex: 0 0 45%;\n            max-width: 45%;\n            margin-bottom: 0;\n        }\n    }\n\n    .scrape-person-img {\n        max-width: 100%;\n        height: auto;\n        /* REMOVED: animation: cleniqFloat ... */\n        /* The image is now static after sliding in */\n    }\n\n    /* 2. Form Column (Cleniq Structure) */\n    .scrape-col-form {\n        flex: 0 0 100%;\n        max-width: 100%;\n        padding: 0 15px;\n        /* Animation: Slide In From Right */\n        opacity: 0;\n        animation: cleniqSlideRight 1s ease-out 0.3s forwards;\n    }\n\n    @media (min-width: 992px) {\n        .scrape-col-form {\n            flex: 0 0 55%;\n            max-width: 55%;\n            padding-left: 50px;\n        }\n    }\n\n    /* Scrape Typography */\n    .scrape-subtitle {\n        color: rgba(255,255,255,0.5);\n        font-weight: 600;\n        text-transform: uppercase;\n        letter-spacing: 2px;\n        margin-bottom: 10px;\n        display: block;\n        font-size: 14px;\n    }\n\n    .scrape-title {\n        font-size: 40px;\n        font-weight: 700;\n        color: #fff;\n        margin-bottom: 30px;\n        line-height: 1.1;\n    }\n\n    /* Scrape Form Styling (Transparent & Sharp) */\n    .scrape-form-wrapper {\n        background: transparent; \n        padding: 0;\n    }\n\n    .scrape-input-group {\n        margin-bottom: 25px;\n    }\n\n    .scrape-input, .scrape-textarea {\n        width: 100%;\n        background: transparent;\n        border: 2px solid rgba(255,255,255,0.15);\n        padding: 15px 20px;\n        color: #04050F;\n        font-family: 'Poppins', sans-serif;\n        font-size: 1.4rem;\n        outline: none;\n        transition: 0.3s;\n        border-radius: 0px; /* Sharp Corners */\n    }\n    .scrape-input:focus, .scrape-textarea:focus {\n        border-color: #fff;\n        background: rgba(255,255,255,0.05);\n    }\n\n    .scrape-btn {\n        display: inline-block;\n        background-color: #04050F;\n        color: #FBFAFF;\n        padding: 18px 40px;\n        font-weight: 700;\n        text-transform: uppercase;\n        cursor: pointer;\n        transition: 0.3s;\n        font-size: 1.4rem;\n        letter-spacing: 1px;\n        border-radius: 0px; /* Sharp Corners */\n        border: 2px solid #FBFAFF;\n    }\n    .scrape-btn:hover {\n        background-color: #8850BF;\n        border: transparent;\n        color: #fff;\n        transform: translateY(-3px);\n    }\n\n    /* --- Animations --- */\n    \n    /* Only Background shapes float now */\n    @keyframes cleniqFloat {\n        0% { transform: translateY(0px); }\n        50% { transform: translateY(-15px); }\n        100% { transform: translateY(0px); }\n    }\n\n    @keyframes cleniqSlideLeft {\n        from { opacity: 0; transform: translateX(-50px); }\n        to { opacity: 1; transform: translateX(0); }\n    }\n    @keyframes cleniqSlideRight {\n        from { opacity: 0; transform: translateX(50px); }\n        to { opacity: 1; transform: translateX(0); }\n    }\n    \n    /* Background Shape */\n    .cleniq-bg-shape {\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        opacity: 0.1;\n        z-index: 0;\n        pointer-events: none;\n        /* Background floats, person stays still */\n        animation: cleniqFloat 4s ease-in-out infinite;\n    }\n\n</style>"}
        className={`w-html-embed`} />
      <Image
        src={"/assets/BW0wpuBED0IaZN4Z5ug_F_bl3v7Qh0Rvzsvx5lbQCtH.png"}
        width={300}
        height={300}
        alt={"Bg"}
        className={`w-image ${"cleniq-bg-shape"}`} />
      <div
        className={`w-element c1s2yqin c3yugbh c13hnv0z cfsv9jl czfwn1m cg7uw93 c1yly58e c1s8dc6k cf6nu9m c1kpa8e0 c1rjhzug ${"scrape-container"}`}>
        <div
          className={`w-element cc52l67 co85x58 cpfmnbn c1c6hyn3 c69dy50 cru1m34 c1c24u8p clfkzwh c1s2yqin c3yugbh c13hnv0z cfsv9jl czfwn1m cg7uw93 c1n6ixqo c5onhs9 cyhon7h cf6nu9m c1xxakoe ${"scrape-row"}`}>
          <div
            className={`w-element cuib9ri cm6loog c13io866 cdgvz13 co3ioay c1t4548c cf6nu9m c1kpa8e0 cpfmnbn c1c6hyn3 c1vrs7au c188p0p0 cyhfpca c1wbnc3n ${"scrape-col-img"}`}>
            <Image
              src={"/assets/Hello_CoefrtP0g8uNWin8ooRLD.png"}
              width={1256}
              height={2233}
              alt={""}
              className={`w-image cdgvz13 c1i0my11 c5onhs9 cyhon7h cxgspxe c1w0s69q c10ckhc3 caxwflb c1tbhns1 ${"scrape-person-img"}`} />
          </div>
          <div
            className={`w-element cpfmnbn c1c6hyn3 cuib9ri cm6loog ${"scrape-col-form"}`}>
            <span
              className={`w-element ${"scrape-subtitle"}`}>
              {"Get in Touch"}
            </span>
            <h2
              className={`w-element c1kdsazu ${"scrape-title"}`}>
              {"Ready to "}
              <b
                className={`w-element c10pp3qn`}>
                {"Start?"}
              </b>
            </h2>
            <div
              className={`w-element ${"scrape-form-wrapper"}`}>
              <RemixForm
                action={"/?index"}
                method={"post"}
                encType={"application/x-www-form-urlencoded"}
                className={`w-element`}>
                <div
                  className={`w-element c1ja26z7 c1exrmam cercat7 ctxezha csaev8m ${"scrape-input-group"}`}>
                  <Input
                    type={"text"}
                    placeholder={"Your Name"}
                    required={true}
                    name={"Name"}
                    className={`w-element ${"scrape-input"}`} />
                </div>
                <div
                  className={`w-element c1ja26z7 c1exrmam cercat7 ctxezha csaev8m ${"scrape-input-group"}`}>
                  <Input
                    type={"email"}
                    placeholder={"Email Address"}
                    required={true}
                    name={"Email Address"}
                    className={`w-element c1rukti3 c1exrmam cercat7 ctxezha csaev8m ${"scrape-input"}`} />
                </div>
                <div
                  className={`w-element c1ja26z7 c1exrmam cercat7 ctxezha csaev8m ${"scrape-input-group"}`}>
                  <Textarea
                    placeholder={"Project Details..."}
                    required={true}
                    rows={4}
                    name={" Project Details"}
                    className={`w-element ${"scrape-textarea"}`} />
                </div>
                <button
                  type={"submit"}
                  className={`w-element c1yly58e c1s8dc6k c16ppt9d cq1p7wy cmhne3d c17tk547 c12hs7jk c19w4rwi c14jxpjk cdt6kfx covlsxw ckariah c1ei5ksg c1left75 cdm47iq ${"scrape-btn"}`}>
                  {"Send Request"}
                </button>
              </RemixForm>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer
      className={`w-element c13hnv0z cfsv9jl c1ljn9ju cg7uw93 c1yly58e c1s8dc6k c1mx206x ${"scrape-footer-split"}`}>
      <HtmlEmbed
        code={"<style>\n    /* --- Scoped Styles --- */\n\n    /* NOTE: I removed 'display: flex' and 'width' settings.\n       Please set Layout (Flex/Grid) and Sizing inside Webstudio \n       so the visual controls work perfectly.\n    */\n\n    :where(.scrape-footer-split) {\n        background-color: #04050F; /* Scrape Dark */\n        color: rgba(255,255,255,0.5);\n        padding: 60px 0;\n        font-family: 'Poppins', sans-serif;\n        font-size: 1.4rem;\n        border-top: 1px solid rgba(255,255,255,0.1);\n        position: relative;\n        z-index: 10;\n    }\n\n    :where(.scrape-container) {\n        /* Set Max-Width and Margin Auto in Webstudio for best results */\n        max-width: px;\n        padding: 0 15px;\n        margin: 0 auto;\n    }\n\n    /* --- Left Side (Copyright & Legal) --- */\n    :where(.scrape-left-col) {\n        /* Set Display: Flex in Webstudio */\n        gap: 15px;\n    }\n\n    :where(.scrape-copyright) {\n        color: #fff;\n        font-weight: 600;\n        letter-spacing: 0.5px;\n    }\n\n    :where(.scrape-legal-links) {\n        /* Set Display: Flex in Webstudio */\n        gap: 20px;\n        font-size: 1.2rem;\n    }\n    :where(.scrape-legal-links) a {\n        color: rgba(255,255,255,0.4);\n        text-decoration: none;\n        transition: 0.3s;\n    }\n    :where(.scrape-legal-links) a:hover { color: #fff; text-decoration: underline; }\n\n\n    /* --- Right Side (Contacts) --- */\n    :where(.scrape-right-col) {\n        /* Set Display: Flex in Webstudio */\n        gap: 15px;\n    }\n\n    /* Buttons Row */\n    :where(.scrape-btn-row) {\n        /* Set Display: Flex in Webstudio */\n        gap: 15px;\n    }\n\n    /* Action Buttons (WhatsApp/Telegram) */\n    :where(.scrape-social-btn) {\n        /* Set Display: Inline-Flex in Webstudio */\n        align-items: center; /* Safe to keep as it only affects flex children */\n        gap: 8px;\n        padding: 10px 20px;\n        border: 1px solid rgba(255,255,255,0.3);\n        color: #fff;\n        text-decoration: none;\n        font-size: 1.2rem;\n        font-weight: 600;\n        text-transform: uppercase;\n        transition: all 0.3s ease;\n    }\n    :where(.scrape-social-btn):hover {\n        background-color: #8850BF;\n        color: #fff;\n        border-color: #8850BF;\n    }\n\n    /* SVG Icons */\n    :where(.scrape-icon-svg) {\n        width: 16px;\n        height: 16px;\n        fill: currentColor;\n    }\n\n    /* Phone Number (Below Buttons) */\n    :where(.scrape-phone-text) {\n        color: rgba(255,255,255,0.8);\n        text-decoration: none;\n        font-weight: 700;\n        font-size: 1.6rem;\n        letter-spacing: 1px;\n        transition: 0.3s;\n    }\n    :where(.scrape-phone-text):hover { color: #fff; }\n\n    /* REMOVED: Media Queries. \n       Since we removed the layout forcing, you can now \n       simply use Webstudio's mobile breakpoint view to \n       stack items vertically without fighting this code.\n    */\n\n</style>"}
        className={`w-html-embed`} />
      <div
        className={`w-element c13hnv0z cfsv9jl c1ljn9ju cg7uw93 cdgqdgy c1xlqmgj c115vfe1 c1vlmh1l c19wqofm c1ke0268 cw8n4uo c466xhk cyovx7q cf6nu9m c1kpa8e0 cja7iut cjfajaj c1pcxqqw cufhsjd ${"scrape-container"}`}>
        <div
          className={`w-element c13hnv0z c1ljn9ju cg7uw93 c15wi4k8 cdj6zco c14tih19 c1pd5lmk c1ez9nzu cxzmlij c11ptxw3 cpfmnbn cp88ou cru1m34 cyhfpca cogxuid c1xxakoe cv2syqt ccpnbl1 ${"scrape-left-col"}`}>
          <div
            className={`w-element c6s4bs9 c1rgxldu c13hnv0z czfwn1m cg7uw93 cq1lvyf cwn6ebr ${"scrape-copyright"}`}>
            <Image
              src={"/assets/KI_Porp_CRYrDRjI8FNf9DXSMaTcJ.png"}
              width={423}
              height={495}
              alt={""}
              className={`w-image c156h4fe c1577o7e c1guo88f cjmdyd2 cspupja cck8ll0 c1jxepkz`} />
            <span
              className={`w-element`}>
              {"Kira Design"}
            </span>
          </div>
          <div
            className={`w-element cc52l67 c173o7cs c1s2yqin c1pd9efl ca8d5ey cl607r8 c1fikhfu cxzmlij c13hnv0z ${"scrape-btn-row"}`}>
            <Link
              href={"https://www.wasap.my/60132937441"}
              target={"_blank"}
              className={`w-element c114gzb1 cv34y3r cc52l67 c69dy50 cq23j2p c14tih19 c1pd5lmk ${"scrape-social-btn"}`}>
              <svg
                viewBox={"0 0 24 24"}
                className={`w-element ${"scrape-icon-svg"}`}>
                <path
                  d={"M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zM12.05 20.21c-1.5 0-2.97-.39-4.27-1.14l-.3-.18-3.15.83.84-3.07-.2-.31c-.82-1.32-1.26-2.87-1.26-4.43 0-4.59 3.73-8.32 8.32-8.32 2.22 0 4.31.87 5.88 2.44a8.268 8.268 0 012.44 5.88c-.01 4.59-3.74 8.3-8.3 8.3zM16.6 14.3c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.66.81-.81.98-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.23.25-.39.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.25 1.05.4 1.41.52.61.19 1.16.16 1.6.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.07-.11-.24-.18-.48-.3z"}
                  className={`w-element`} />
              </svg>
              <span
                className={`w-element`}>
                {" WhatsApp"}
              </span>
            </Link>
            <Link
              href={"https://t.me/username"}
              target={"_blank"}
              className={`w-element c114gzb1 cc52l67 c69dy50 cq23j2p ${"scrape-social-btn"}`}>
              <svg
                viewBox={"0 0 24 24"}
                className={`w-element ${"scrape-icon-svg"}`}>
                <path
                  d={"M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.42l-1.99 9.36c-.15.66-.54.82-1.09.51l-3.03-2.23-1.46 1.41c-.16.16-.3.3-.61.3l.22-3.09 5.63-5.09c.25-.22-.05-.34-.38-.12l-6.95 4.37-2.99-.94c-.65-.2-.66-.65.14-.96l11.7-4.5c.54-.2 1.01.12.71 1.39z"}
                  className={`w-element`} />
              </svg>
              <span
                className={`w-element`}>
                {" Telegram"}
              </span>
            </Link>
          </div>
        </div>
        <div
          className={`w-element c15wi4k8 c13hnv0z c1ljn9ju cg7uw93 cdj6zco c14tih19 c1ez9nzu c510k99 c1pd5lmk cbiha9i c1u0xart cwn6ebr cq1lvyf cxzmlij cpfmnbn c1c6hyn3 cp88ou cq23j2p cyhfpca c1wbnc3n ${"scrape-right-col"}`}>
          <div
            className={`w-element c13hnv0z cfsv9jl cwn6ebr cq1lvyf czfwn1m c1gy5v3d`}>
            <Image
              src={"/assets/call_rmkVcbOh1FlnwOOxcTr8H.png"}
              width={500}
              height={500}
              alt={""}
              className={`w-image c1djsscz c1thnzb0 cspupja c1cn3oko co9x8yn c1blwtms cjq0xbn`} />
            <Link
              href={"tel:+15551234567"}
              className={`w-element c12os8yp cubaeor c1lyjppm ${"scrape-phone-text"}`}>
              {"+60 13-293-7441"}
            </Link>
          </div>
          <div
            className={`w-element c13hnv0z cfsv9jl cwn6ebr cq1lvyf czfwn1m c1gy5v3d`}>
            <Image
              src={"/assets/email_F5Kk90czQdIhQNdyEWZuP.png"}
              width={500}
              height={500}
              alt={""}
              className={`w-image crc72mq c1aohput c1cn3oko co9x8yn cspupja c1q7751g c1ev7e24`} />
            <Link
              href={"tel:+15551234567"}
              className={`w-element c12os8yp cubaeor c1lyjppm ${"scrape-phone-text"}`}>
              {"kiradesignbusiness@gmail.com"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
    <HtmlEmbed
      code={"<style>\n    /* --- Scrape Marquee Styles --- */\n    \n    /* 1. The Container (Hides the scrollbar) */\n    :where(.scrape-marquee-wrapper) {\n        width: 100%;\n        max-width: 100vw;\n        overflow: hidden;\n        background-color: #04050F;\n        padding: 60px 0;\n        border-top: 1px solid rgba(255,255,255,0.1);\n        border-bottom: 1px solid rgba(255,255,255,0.1);\n    }\n\n    /* 2. The Track (Moves the text) */\n    :where(.scrape-marquee-track) {\n        display: flex;\n        gap: 50px;\n        width: max-content; /* Forces it to be wide */\n        animation: scrape-scroll 20s linear infinite;\n    }\n    \n    /* Pause on Hover */\n    :where(.scrape-marquee-wrapper):hover :where(.scrape-marquee-track) {\n        animation-play-state: paused;\n    }\n\n    /* 3. The Text Styling (Brutalist Stroke) */\n    :where(.scrape-marquee-text) {\n        font-family: 'Poppins', sans-serif;\n        font-size: 4rem;\n        font-weight: 700;\n        text-transform: uppercase;\n        color: transparent;\n        -webkit-text-stroke: 1px rgba(255,255,255,0.3);\n        white-space: nowrap;\n        transition: 0.3s;\n        margin: 0; /* Remove default h2 margin */\n    }\n\n    /* Hover Fill Effect */\n    :where(.scrape-marquee-wrapper):hover :where(.scrape-marquee-text) {\n        color: #fff;\n        -webkit-text-stroke: 1px #fff;\n    }\n\n    /* 4. The Star Separator */\n    :where(.scrape-star) {\n        color: #fff;\n        -webkit-text-stroke: 0;\n        margin-left: 50px;\n    }\n\n    /* Animation */\n    @keyframes scrape-scroll {\n        from { transform: translateX(0); }\n        to { transform: translateX(-50%); }\n    }\n    \n    /* Mobile Adjustments */\n    @media (max-width: 768px) {\n        :where(.scrape-marquee-text) { font-size: 2.5rem; }\n        :where(.scrape-marquee-wrapper) { padding: 40px 0; }\n    }\n</style>"}
      className={`w-html-embed`} />
    <HtmlEmbed
      clientOnly={true}
      code={"<script>\n    function toggleScrapeAccordion(btn) {\n        const item = btn.closest('.scrape-accordion-item');\n        const body = item.querySelector('.scrape-accordion-body');\n        const isOpen = item.classList.contains('active');\n\n        // Optional: Close others\n        document.querySelectorAll('.scrape-accordion-item').forEach(i => {\n            i.classList.remove('active');\n            i.querySelector('.scrape-accordion-body').style.maxHeight = null;\n        });\n\n        if (!isOpen) {\n            item.classList.add('active');\n            body.style.maxHeight = body.scrollHeight + \"px\";\n        }\n    }\n</script>"}
      className={`w-html-embed`} />
  </Body>
}


export { Page }
