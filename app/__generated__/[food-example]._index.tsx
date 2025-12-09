/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Body as Body, Link as Link } from "@webstudio-is/sdk-components-react-router";
import { HtmlEmbed as HtmlEmbed, Image as Image, Fragment as Fragment_1, Slot as Slot } from "@webstudio-is/sdk-components-react";


      export const projectId = "42d12f85-6e68-4c7f-b1cb-6625c1a526de";

      export const lastPublished = "2025-12-09T10:30:09.590Z";

      export const siteName = "Kira Design";

      export const breakpoints = [{"id":"Tt5uQsLO6VX8Wld3Fb0Uf"},{"id":"UJ_jdvDCCaVutj9gRH_RL","maxWidth":991},{"id":"LHnGSfrmeiBjlbJG5sLom","maxWidth":767},{"id":"VsBkbLSLorock0elwza3l","maxWidth":479},{"id":"VLxk_AWaDSR0uenI-7KsQ","minWidth":1920}];

      export const favIconAsset: string | undefined =
        "KI_Porp_CRYrDRjI8FNf9DXSMaTcJ.png";

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        ["Epilogue-SemiBold_x8XJWLVz9jNylQHmdYmhf.ttf","Epilogue-BoldItalic_eVpA-XVQjXTpAZvX6OMd0.ttf","Epilogue-Medium_f6QaYSzyYpj0BWSppkBIR.ttf","Epilogue-Thin_WT_EPuTsmXXWRIY8lZvtJ.ttf","Epilogue-MediumItalic_DfH_5-k2Tg9BmXD7tC_GH.ttf","Epilogue-LightItalic_y0jKFYTOA6YXgQFDC6Lbr.ttf","Epilogue-Light_0ry4kURcvM6lKRWKFNYEY.ttf","Epilogue-Regular_J2vZbe11GTV-Er3TAvvXG.ttf","Epilogue-Bold_P70JJHNjd7G-2Xmmj_G3W.ttf","Epilogue-ExtraLightItalic_i9NI38S_XNaR6upRpOLW1.ttf","Epilogue-BlackItalic_4_MEebgmetQIbZySfvm9s.ttf","Epilogue-ExtraBold__nTetg-n9mDB31YrS0xph.ttf","Epilogue-SemiBoldItalic_BWAIHEqsWeoXmvx1qiVVy.ttf","Epilogue-ThinItalic_Qd0rJ08joOUOdn6qJtevn.ttf","Epilogue-ExtraLight_e4G6urNmJAlYS6JKt8Oga.ttf","Epilogue-Black_vpSfbx7E6WlVnwwJc4zuo.ttf","Epilogue-Italic_-uJdDDO9GMZRC5nb04c_z.ttf","Epilogue-ExtraBoldItalic_JSpwviEG_XoiboSkKtbeh.ttf"]

      export const pageBackgroundImageAssets: string[] =
        ["offerBG1_1_Mobile_ZJMFhyFx1n9XVtgdTN5Xj.png","offerBG1_2_HY5NU7451TsGdtOKzXE7Y.png","Final_Sell_K4RHIkRiiTl1JSde-e5tl.png","bannerBG1_1_tXgrF8-EMcahoFa00TZaE.jpg"]

      

      const Page = (_props: { system: any; }) => {
return <Body
className={`w-element`}>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<script>(function(factory){if(typeof define===\"function\"&&define.amd){define(factory)}else if(typeof module!==\"undefined\"&&module.exports){module.exports=factory()}else{window.enterView=factory.call(this)}})((()=>{const lib=({selector:selector,enter:enter=(()=>{}),exit:exit=(()=>{}),progress:progress=(()=>{}),offset:offset=0,once:once=false})=>{let raf=null;let ticking=false;let elements=[];let height=0;function setupRaf(){raf=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){return setTimeout(callback,1e3/60)}}function getOffsetHeight(){if(offset&&typeof offset===\"number\"){const fraction=Math.min(Math.max(0,offset),1);return height-fraction*height}return height}function updateHeight(){const cH=document.documentElement.clientHeight;const wH=window.innerHeight||0;height=Math.max(cH,wH)}function updateScroll(){ticking=false;const targetFromTop=getOffsetHeight();elements=elements.filter((el=>{const{top:top,bottom:bottom,height:height}=el.getBoundingClientRect();const entered=top<targetFromTop;const exited=bottom<targetFromTop;if(entered&&!el.__ev_entered){enter(el);el.__ev_progress=0;progress(el,el.__ev_progress);if(once)return false}else if(!entered&&el.__ev_entered){el.__ev_progress=0;progress(el,el.__ev_progress);exit(el)}if(entered&&!exited){const delta=(targetFromTop-top)/height;el.__ev_progress=Math.min(1,Math.max(0,delta));progress(el,el.__ev_progress)}if(entered&&exited&&el.__ev_progress!==1){el.__ev_progress=1;progress(el,el.__ev_progress)}el.__ev_entered=entered;return true}));if(!elements.length){window.removeEventListener(\"scroll\",onScroll,true);window.removeEventListener(\"resize\",onResize,true);window.removeEventListener(\"load\",onLoad,true)}}function onScroll(){if(!ticking){ticking=true;raf(updateScroll)}}function onResize(){updateHeight();updateScroll()}function onLoad(){updateHeight();updateScroll()}function selectionToArray(selection){const len=selection.length;const result=[];for(let i=0;i<len;i+=1){result.push(selection[i])}return result}function selectAll(selector,parent=document){if(typeof selector===\"string\"){return selectionToArray(parent.querySelectorAll(selector))}else if(selector instanceof NodeList){return selectionToArray(selector)}else if(selector instanceof Array){return selector}}function setupElements(){elements=selectAll(selector)}function setupEvents(){window.addEventListener(\"resize\",onResize,true);window.addEventListener(\"scroll\",onScroll,true);window.addEventListener(\"load\",onLoad,true);onResize()}function init(){if(!selector){console.error(\"must pass selector\");return false}setupElements();if(!elements||!elements.length){console.error(\"no els found\");return false}setupRaf();setupEvents();updateScroll()}init()};return lib}));</script>"}
executeScriptOnCanvas={true}
clientOnly={true}
className={`w-html-embed`} />
<HtmlEmbed
code={"<style>\n:root {\n  --ani-duration: var(--duration-default, .2s);\n  --ani-delay: 0s;\n  --ani-slide-offset: 20%;\n  --ani-zoom-in-scale: 1;\n  --ani-zoom-out-scale: .85;\n  --ani-flip-rotate: 30deg;\n  --ani-easing: var(--easing-default, ease);\n  --ani-fill-mode: forwards;\n}\n[data-ani]:not([data-ani-children]),[data-ani-children]:not([data-ani-progress])>*{animation-duration:var(--ani-duration);animation-delay:var(--ani-delay);animation-timing-function:var(--ani-easing);animation-fill-mode:var(--ani-fill-mode);opacity:0}[data-ani-progress]:not([data-ani-children]),[data-ani-children]:not([data-ani])>*{transition-property:opacity,transform;transition-duration:var(--ani-duration);transition-timing-function:var(--ani-easing);opacity:0}\n@keyframes fadeIn{from{opacity:0}\nto{opacity:1}}\n@keyframes fadeOut{from{opacity:1}\nto{opacity:0}}[data-ani-children][data-ani='fade']>.in,[data-ani='fade']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:fadeIn}[data-ani-children][data-ani='fade']>.out,[data-ani='fade']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:fadeOut}\n@keyframes slideIn{from{opacity:0;translate:var(--ani-slide-transform)}\nto{opacity:1;translate:none}}\n@keyframes slideOut{from{opacity:1;translate:none}\nto{opacity:0;translate:var(--ani-slide-transform)}}[data-ani-children][data-ani|='slide']>.in,[data-ani|='slide']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:slideIn}[data-ani-children][data-ani|='slide']>.out,[data-ani|='slide']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:slideOut}[data-ani='slide-up']{--ani-slide-transform:0 var(--ani-slide-offset)}[data-ani='slide-down']{--ani-slide-transform:0 calc(-1*var(--ani-slide-offset))}[data-ani='slide-left']{--ani-slide-transform:var(--ani-slide-offset)}[data-ani='slide-right']{--ani-slide-transform:calc(-1*var(--ani-slide-offset))}\n@keyframes zoomIn{from{opacity:0;scale:var(--ani-zoom-out-scale)}\nto{opacity:1;scale:1}}\n@keyframes zoomOut{from{opacity:1;scale:1}\nto{opacity:0;scale:var(--ani-zoom-in-scale)}}[data-ani-children][data-ani='zoom']>.in,[data-ani|='zoom']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:zoomIn}[data-ani-children][data-ani='zoom']>.out,[data-ani|='zoom']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:zoomOut}[data-ani-children][data-ani-progress='zoom']>*,[data-ani-progress='zoom']:not([data-ani-children]){transform:scale(var(--ani-zoom-out-scale))}\n@keyframes flipInY{from{rotate:y var(--ani-flip-rotate);perspective:2000px;opacity:0}\nto{rotate:y 0;opacity:1}}\n@keyframes flipOutY{from{rotate:y 0;opacity:1}\nto{perspective:2000px;rotate:y var(--ani-flip-rotate);opacity:0}}\n@keyframes flipInX{from{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}\nto{rotate:x 0;opacity:1}}\n@keyframes flipOutX{from{rotate:x 0;opacity:1}\nto{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}}[data-ani-children][data-ani='flip-y']>.in,[data-ani='flip-y']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInY}[data-ani-children][data-ani='flip-x']>.in,[data-ani='flip-x']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInX}[data-ani-children][data-ani='flip-y']>.out,[data-ani='flip-y']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutY}[data-ani-children][data-ani='flip-x']>.out,[data-ani='flip-x']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutX}\n@keyframes expandDown{from{height:0}\nto{height:var(--newHeight)}}\n@keyframes expandUp{from{height:var(--newHeight)}\nto{height:0}}[data-ani='expand'],[data-ani='expand'][data-state='open'],[data-ani='expand'].in{--newHeight:var(--custom-height,var(--radix-accordion-content-height,var(--radix-collapsible-content-height,100%)));overflow:hidden;opacity:1}[data-ani-children][data-ani='expand']>.in,[data-ani='expand']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation:expandDown var(--ani-duration)var(--ani-easing)}[data-ani-children][data-ani='expand']>.out,[data-ani='expand']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation:expandUp var(--ani-duration)var(--ani-easing)}\n@media(prefers-reduced-motion:reduce){[data-ani]:not([data-ani-children]),[data-ani-progress]:not([data-ani-children]),[data-ani-children]>*{opacity:1;transform:none;animation:none;rotate:none;scale:none;translate:none}}\n</style>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<script type=\"module\">\nconst config = {\n\tintersectionOffset: 0.2,\n\tintersectionOnce: true,\n\tprogressOffset: 0,\n\tprogressOnce: false,\n};\nfunction e({trigger:e,selector:r,offset:n,once:s}){const a=\"progress\"===e;return enterView({selector:r,enter:e=>!a&&t(e,\"in\",\"out\"),exit:e=>!a&&t(e,\"out\",\"in\"),progress:(e,t)=>a&&function(e,t){e.style.opacity=t,e.style.transform=function(e,t){const r=e.parentElement,n=r&&r.hasAttribute(\"data-ani-progress\")?r.getAttribute(\"data-ani-progress\"):e.getAttribute(\"data-ani-progress\"),s=parseFloat(getComputedStyle(e).getPropertyValue(\"--ani-slide-offset\"))||0,a=parseFloat(getComputedStyle(e).getPropertyValue(\"--ani-flip-rotate\"))||0,o=1-(1-t)*(1-parseFloat(getComputedStyle(e).getPropertyValue(\"--ani-zoom-out-scale\"))||1);switch(n){case\"slide-up\":return`translateY(${(1-t)*s}px)`;case\"slide-down\":return`translateY(-${(1-t)*s}px)`;case\"slide-left\":return`translateX(${(1-t)*s}px)`;case\"slide-right\":return`translateX(-${(1-t)*s}px)`;case\"flip-x\":return`rotateX(${(1-t)*a}deg)`;case\"flip-y\":return`rotateY(${(1-t)*a}deg)`;case\"zoom\":return`scale(${o})`;default:return\"none\"}}(e,t)}(e,t),offset:n,once:s})}function t(e,t,r){e.classList.add(t),e.classList.remove(r)}function r(e,t){const r=`[${e}]${t?'[data-ani-children=\"true\"] > *':':not([data-ani-children=\"true\"])'}`;return Array.from(document.querySelectorAll(r))}const n=[...r(\"data-ani\"),...r(\"data-ani\",!0)],s=[...r(\"data-ani-progress\"),...r(\"data-ani-progress\",!0)];n.length&&e({trigger:\"intersection\",selector:n,offset:config.intersectionOffset,once:config.intersectionOnce}),s.length&&e({trigger:\"progress\",selector:s,offset:config.progressOffset,once:config.progressOnce});\n</script>"}
executeScriptOnCanvas={true}
clientOnly={true}
className={`w-html-embed`} />
</Fragment_1>
</Slot>
<HtmlEmbed
code={"<style>\n/* Base Button Style */\n.hero-cta {\n  cursor: pointer;\n  \n  /* The Secret Sauce: Smooth Transition */\n  transition: all 0.25s ease-in-out;\n}\n\n/* Hover State */\n.hero-cta:hover {\n  background-color: #FC791A; /* Orange-Red for pop */\n  color: #ffffff; \n  border-color: #FC791A;\n}\n  .hero-cta-2 {\n  cursor: pointer;\n  \n  /* The Secret Sauce: Smooth Transition */\n  transition: all 0.25s ease-in-out;\n}\n\n/* Hover State */\n.hero-cta-2:hover {\n  background-color: #EB0029; /* Orange-Red for pop */\n  color: #ffffff; \n  border-color: #EB0029;\n}\n</style>"}
className={`w-html-embed citp4x1`} />
<header
className={`w-element cc52l67 c173o7cs ${"fresheat-header-section"}`}>
<HtmlEmbed
code={"<style>\r\n    /* --- Scoped Styles --- */\r\n    .fresheat-header-section {\r\n        font-family: 'Roboto', sans-serif;\r\n        width: 100%;\r\n        position: relative;\r\n        z-index: 999;\r\n    }\r\n\n    /* Container */\r\n    .fresheat-container-fluid {\r\n        width: 100%;\r\n        padding-right: 15px;\r\n        padding-left: 15px;\r\n        margin-right: auto;\r\n        margin-left: auto;\r\n    }\r\n    @media (min-width: 1200px) { .fresheat-container-fluid { padding: 0 50px; } }\r\n    @media (min-width: 1600px) { .fresheat-container-fluid { padding: 0 100px; } }\r\n\n    /* --- 1. Top Bar (Hidden on Mobile) --- */\r\n    .fresheat-top-bar {\r\n        background-color: #EB0029; /* var(--theme) */\r\n        color: #fff;\r\n        padding: 10px 0;\r\n        font-size: 14px;\r\n        display: block;\r\n    }\r\n    @media (max-width: 1199px) { .fresheat-top-bar { display: none; } }\r\n\n    .fresheat-top-flex {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n    }\r\n\n    .fresheat-top-social a {\r\n        color: #fff;\r\n        margin-left: 15px;\r\n        text-decoration: none;\r\n        transition: 0.3s;\r\n    }\r\n    .fresheat-top-social a:hover { color: #010F1C; }\r\n\n    /* --- 2. Main Navigation (Sticky) --- */\r\n    .fresheat-main-header {\r\n        background-color: #ffffff;\r\n        box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.06);\r\n        padding: 0;\r\n        position: sticky; /* Makes it sticky */\r\n        top: 0;\r\n        z-index: 1000;\r\n        transition: all 0.4s;\r\n    }\r\n\n    .fresheat-nav-flex {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        height: 90px;\r\n    }\r\n    @media (max-width: 991px) { .fresheat-nav-flex { height: 70px; } }\r\n\n    /* Logo */\r\n    .fresheat-logo img {\r\n        max-height: 50px;\r\n        width: auto;\r\n    }\r\n\n    /* Desktop Menu */\r\n    .fresheat-desktop-menu {\r\n        display: flex;\r\n        gap: 40px;\r\n        list-style: none;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    @media (max-width: 1199px) { .fresheat-desktop-menu { display: none; } }\r\n\n    .fresheat-desktop-menu li a {\r\n        color: #010F1C; /* var(--title) */\r\n        font-weight: 600;\r\n        font-size: 16px;\r\n        text-decoration: none;\r\n        text-transform: uppercase;\r\n        padding: 30px 0;\r\n        display: inline-block;\r\n        transition: 0.3s;\r\n        font-family: 'Epilogue', sans-serif;\r\n    }\r\n    .fresheat-desktop-menu li a:hover {\r\n        color: #EB0029; /* var(--theme) */\r\n    }\r\n    /* Dropdown Indicator */\r\n    .fresheat-desktop-menu li a span { font-size: 10px; margin-left: 5px; vertical-align: middle; }\r\n\n    /* Right Side Actions */\r\n    .fresheat-header-right {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 25px;\r\n    }\r\n\n    /* Search Icon */\r\n    .fresheat-search-btn {\r\n        font-size: 20px;\r\n        color: #5C6574;\r\n        cursor: pointer;\r\n    }\r\n\n    /* Cart Icon with Badge */\r\n    .fresheat-cart-btn {\r\n        position: relative;\r\n        font-size: 20px;\r\n        color: #5C6574;\r\n        text-decoration: none;\r\n    }\r\n    .fresheat-cart-badge {\r\n        position: absolute;\r\n        top: -8px;\r\n        right: -10px;\r\n        background-color: #FC791A;\r\n        color: #fff;\r\n        font-size: 10px;\r\n        width: 18px;\r\n        height: 18px;\r\n        border-radius: 50%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        font-weight: 700;\r\n    }\r\n\n    /* Order Button (Hidden on small mobile) */\r\n    .fresheat-header-btn {\r\n        padding: 12px 30px;\r\n        background-color: #EB0029;\r\n        color: #fff;\r\n        font-weight: 700;\r\n        text-transform: uppercase;\r\n        text-decoration: none;\r\n        font-size: 14px;\r\n        display: inline-block;\r\n    }\r\n    .fresheat-header-btn:hover { background-color: #FC791A; }\r\n    \r\n    @media (max-width: 575px) { .fresheat-header-btn { display: none; } }\r\n\n    /* Mobile Hamburger (Visible only on Mobile/Tablet) */\r\n    .fresheat-mobile-toggle {\r\n        display: none;\r\n        font-size: 24px;\r\n        color: #010F1C;\r\n        cursor: pointer;\r\n    }\r\n    @media (max-width: 1199px) { .fresheat-mobile-toggle { display: block; } }\r\n\n</style>"}
className={`w-html-embed`} />
<div
className={`w-element ${"fresheat-top-bar"}`}>
<div
className={`w-element ${"fresheat-container-fluid"}`}>
<div
className={`w-element ${"fresheat-top-flex"}`}>
<div
className={`w-element c1pm2okf ${"fresheat-top-info"}`}>
<span
className={`w-element`}>
{"🕒 09:00 am - 06:00 pm"}
</span>
{" "}
<span
className={`w-element c18sklhc`}>
{"📍 "}
</span>
{"Lorem Ipsum Street, Kuala Lumpur"}
</div>
</div>
</div>
</div>
<div
className={`w-element ${"fresheat-main-header"}`}>
<div
className={`w-element ${"fresheat-container-fluid"}`}>
<div
className={`w-element ${"fresheat-nav-flex"}`}>
<Image
src={"/assets/Untitled-1_d-9C-2Q43cHn_PdoBIxrK.png"}
width={225}
height={352}
alt={""}
className={`w-image`} />
</div>
</div>
</div>
</header>
<section
className={`w-element c1tuinma c1yly58e c1xjq1ia c1akemag c13k6c3z`}>
<HtmlEmbed
code={"<style>\r\n    /* Continuous floating animation for the main image */\r\n    @keyframes float-bob-y {\r\n        0% { transform: translateY(-20px); }\r\n        50% { transform: translateY(-10px); }\r\n        100% { transform: translateY(-20px); }\r\n    }\r\n\r\n    /* Entry animation for text elements (Move up and fade in) */\r\n    @keyframes fadeInUp {\r\n        0% {\r\n            opacity: 0;\r\n            transform: translateY(20px);\r\n        }\r\n        100% {\r\n            opacity: 1;\r\n            transform: translateY(0);\r\n        }\r\n    }\r\n\r\n    /* Simple fade in for background shapes */\r\n    @keyframes fadeIn {\r\n        0% { opacity: 0; }\r\n        100% { opacity: 1; }\r\n    }\r\n</style>"}
className={`w-html-embed`} />
<div
className={`w-element c1tuinma c11q4jxm c1ahxz4z c1j0zrcc c1fab7qa c1rr5xhr ci38l1c cw622cv cu62r76 c1bth54e c1772c22 cydfhya c1427hjd cjs4n12 cc52l67 cp88ou cq23j2p c9k8vdu c43zoph c1yr0cug cnxfsuu c17o7bbn ci01562 c1579w6s cvjufxs cvomlwy`}>
<div
className={`w-element cc3u05m cdu4fs4 c8y35os c1yly58e c14tih19 c1vh64la c1myoalz cliwean`} />
<div
className={`w-element c1yly58e cfgfdxk c1igd1z2 c1ibcse2 cfnhogp c1cx207d c1tuinma c1q3ou0e`}>
<div
className={`w-element c13hnv0z c1f4ne5u czfwn1m casm222 c3gwt6w c1rjhzug`}>
<div
className={`w-element c1gh83ky ctxdr62 cuw33np c1s8dc6k c1qr5y2b cfnhogp c1bf3ijt c1cx207d c1v01ody c1ya6tlo c9afwxw`}>
<div
className={`w-element c1fz5xt0 cc52l67 c173o7cs c2rsum c1p6in38 c1s2yqin c466xhk c3p5w50 ckjmnxf`}>
<span
className={`w-element c1k15m98 c28tchp c1pm2okf ciacb3l c1rfn6re cux85d8 cszx9a0 c5x7uo caefvhp cs6rgnq cyrcq71 c14i0hhs c1e9qx4v csxvmh1 ce2g153 c17r29n9 c15jxyhu c8nmy57 czxjt9l c1nh8o3q cez5zc2 cp3ndwh c1m12l2w`}>
<span
className={`w-element`}>
{"Food delivery service"}
</span>
</span>
<h1
className={`w-element cnddqm0 c1pm2okf c1rfn6re cszx9a0 c1ap3o23 c1m7rbx1 c26pi3w c1fz5xt0 cs6rgnq cyrcq71 c14i0hhs c1xagua3 csxvmh1 ce2g153 c17r29n9 c15jxyhu c8nmy57 czxjt9l c1nh8o3q cez5zc2 c1qfk1ax c1m12l2w`}>
{"The best taste in this city"}
</h1>
<p
className={`w-element chcqzwu c17gsc9i c1ffau78 c5tv212 c1cevn4q czu882a cp3ndwh c12os8yp c1q5epdw ctwbdys c1m12l2w`}>
{"Experience the finest culinary delights delivered straight to your door. Fresh ingredients, fast delivery, and unforgettable flavors."}
</p>
<Link
href={"#"}
className={`w-element c1r5jqda czfwn1m ckpdd6v c1juz4tw c11hualn c109qgub c1pd3kff cnddqm0 c13k6c3z c1r1wck9 cg75hi0 cszx9a0 c1k3gvey c15nks14 c1mym1zd c1uzl2a8 c1ldvdta c1u18adq c199reyu ch3dczi cazfscp cztrxzu c1msfzev c1tot74x c19zylim cs6rgnq cyrcq71 c14i0hhs ca2bkds csxvmh1 ce2g153 c17r29n9 c15jxyhu c8nmy57 czxjt9l c1nh8o3q cez5zc2 cxl2tlr c1002bib cow2a5d cf2mmu9 c1176r7o ${"hero-cta"}`}>
{"Order Now "}
<span
className={`w-element c9e22e0`}>
{"→"}
</span>
</Link>
</div>
</div>
<div
className={`w-element c1gh83ky ctxdr62 cuw33np c1s8dc6k c1qr5y2b cfnhogp c1bf3ijt c1cx207d c13hnv0z cg7uw93 cja7iut`}>
<div
className={`w-element c1tuinma`}>
<Image
src={"/assets/SpicyCrunch_dXjIleyLy78cQqNUPlMaP.webp"}
width={969}
height={1018}
alt={""}
className={`w-image c1s8dc6k cu13air c1j7k510 c4nhayx c6kst9x ctt85k4 ce2g153 cwtv6re c15jxyhu c1p0f603 czxjt9l c1nh8o3q cez5zc2 cr1bd65 c18pcol crk1mom c1vyari9 c1dlfrgw cdgvz13 c14vd38x c1avc07t c1g9o1l2 cejc2wf c1ozgfa1 c1ej1dn2 cdzvppq`} />
</div>
</div>
</div>
</div>
<Image
src={"/assets/timerShape1_1_FYkmuH7sDMP9rFjKdy95T.svg"}
width={101}
height={79}
alt={""}
className={`w-image cc3u05m c1knyje1 c1fhkiqi cf3f764 c1b2sk3k cs6rgnq cjjmbal c14i0hhs cg10cjx csxvmh1 ce2g153 c17r29n9 c15jxyhu cqpitf0 czxjt9l c1nh8o3q cez5zc2`} />
<Image
src={"/assets/ctaShape1_2_5icMxqFl7zNYEBF7Afsmd.png"}
width={115}
height={137}
alt={""}
className={`w-image cc3u05m c1jjqp0v cori5ta cf3f764 c1b2sk3k cs6rgnq cjjmbal c14i0hhs ch3ysby csxvmh1 ce2g153 c17r29n9 c15jxyhu cqpitf0 czxjt9l c1nh8o3q cez5zc2`} />
<Image
src={"/assets/bannerShape1_4_vNbOk3g4jIvlYkL_mBzd2.svg"}
width={160}
height={152}
alt={""}
className={`w-image cc3u05m cea5fbp c1oy1c35 cf3f764 c1b2sk3k cs6rgnq cjjmbal c14i0hhs c13dot88 csxvmh1 ce2g153 c17r29n9 c15jxyhu cqpitf0 czxjt9l c1nh8o3q cez5zc2`} />
</div>
</section>
<section
className={`w-element cofapl7 c19cq7j2 c1rr5xhr c1pm2okf c1xjq1ia c1akemag c1v2knc2`}>
<div
className={`w-element c1yly58e cfgfdxk c1igd1z2 c1ibcse2 cfnhogp c1cx207d`}>
<HtmlEmbed
code={"<style>\n      @keyframes scrape-float {\n  0%, 100% { \n    transform: scale(1); /* Original size (100%) */\n  }\n  50% { \n    transform: scale(1.05); /* Scales up to 110% of its size */\n  }\n}\n\n/* Apply the animation to the image */\n:where(.offer-food-img) {\n    /* ... other styles ... */\n    \n    /* Apply the animation */\n    animation: scrape-float 3s ease-in-out infinite;\n}\n</style>"}
className={`w-html-embed`} />
<div
className={`w-element c13hnv0z c1f4ne5u ces0zbv cflvley cg7uw93`}>
<div
className={`w-element c1gh83ky ctxdr62 c16ovp6c c1fjrhll c1no974m c13wmjpc c1j0zrcc c1wwtkez c1j17119 c1su3q1c cthsk7c csddijw cdb3kmh c1jb2gro c17mrp2r c13hnv0z cdj6zco c1tuinma cnnnmp6 cz18ify cazfscp cztrxzu c1msfzev c1tot74x c11tw450 c69dy50 cru1m34 c4n1ude`}>
<div
className={`w-element cc3u05m c6v0qf5 cvi2gta cf64hkh c1begxas ci38l1c c1ej1dn2 cc52l67 c69dy50 cq23j2p c1ey66of c1me9bzw`}>
<Image
src={"/assets/Meal_set_BmsrF_m2Yt64VcYTGFGlJ.png"}
width={1024}
height={1024}
alt={""}
className={`w-image c1yly58e c14tih19 cspupja cmxz94f ${"offer-food-img"}`} />
</div>
<div
className={`w-element cf3f764 c1tuinma cc52l67 c173o7cs c69dy50 cq23j2p`}>
<h6
className={`w-element c1c93po9 c85oky9 cg75hi0 cszx9a0 coa431f ca0blho cp3ndwh`}>
{"ON THIS WEEK"}
</h6>
<h3
className={`w-element cnddqm0 cgqy2xs cbghwcp cux85d8 coa431f cszx9a0 c1lunhl8 c1fhbpki c1pm2okf c6s4bs9 cru3x3b cp3ndwh c4mf00c`}>
{"Prime "}
{""}
<br />
{""}
{"COMBO SET"}
</h3>
<p
className={`w-element c28tchp c85oky9 cnixgtc c1fz5xt0 c13k6c3z c1qfk1ax`}>
{"Limited Time Offer"}
</p>
<Link
href={"#"}
className={`w-element c1r5jqda czfwn1m cg7uw93 cqg5r70 cdb3kmh c13gyd0r c17mrp2r c13euf9y cnddqm0 c1k3gvey c15nks14 c1mym1zd c13k6c3z cnixgtc c85oky9 cszx9a0 c1uzl2a8 c1ldvdta c1u18adq c199reyu c1t3hna7 cazfscp cztrxzu c1msfzev c1tot74x ${"hero-cta-2"}`}>
{"Order Now "}
<span
className={`w-element c9e22e0`}>
{"→"}
</span>
</Link>
</div>
</div>
<div
className={`w-element c1gh83ky ctxdr62 c16ovp6c c1fjrhll c1no974m c13wmjpc c1j0zrcc c1wwtkez c1j17119 c1su3q1c cthsk7c csddijw cdb3kmh c1jb2gro c17mrp2r c13hnv0z cdj6zco c1tuinma cnnnmp6 c11tw450 c69dy50 cru1m34 c4n1ude`}>
<div
className={`w-element cc3u05m c6v0qf5 cvi2gta cf64hkh c1begxas ci38l1c c1ej1dn2 cc52l67 c69dy50 cq23j2p c1ey66of c1me9bzw`}>
<Image
src={"/assets/Burger_l9old3PNDlq6AshKmEfW9.png"}
width={1024}
height={1024}
alt={""}
className={`w-image c1yly58e c14tih19 cspupja cmxz94f ${"offer-food-img"}`} />
</div>
<div
className={`w-element cf3f764 c1tuinma cc52l67 c173o7cs c69dy50 cq23j2p`}>
<h6
className={`w-element c1c93po9 c85oky9 cg75hi0 cszx9a0 coa431f ca0blho cp3ndwh`}>
{"Welcome Fresheat"}
</h6>
<h3
className={`w-element cnddqm0 cgqy2xs cbghwcp cux85d8 coa431f cszx9a0 c1lunhl8 c1fhbpki c6s4bs9 cru3x3b cp3ndwh c4mf00c`}>
{"TODAY's "}
{""}
<br />
{""}
{"SPECIAL FOOD"}
</h3>
<p
className={`w-element c28tchp c85oky9 cnixgtc c1fz5xt0 c13k6c3z c1qfk1ax`}>
{"Limited Time Offer"}
</p>
<Link
href={"#"}
className={`w-element c1r5jqda czfwn1m cg7uw93 cqg5r70 cdb3kmh c13gyd0r c17mrp2r c13euf9y cnddqm0 c1k3gvey c15nks14 c1mym1zd c13k6c3z cnixgtc c85oky9 cszx9a0 c1uzl2a8 c1ldvdta c1u18adq c199reyu c1t3hna7 cazfscp cztrxzu c1msfzev c1tot74x ${"hero-cta-2"}`}>
{"Order Now "}
<span
className={`w-element c9e22e0`}>
{"→"}
</span>
</Link>
</div>
</div>
<div
className={`w-element c1gh83ky ctxdr62 c16ovp6c c1fjrhll c1no974m c13wmjpc c1j0zrcc c1wwtkez c1j17119 c1su3q1c cthsk7c csddijw cdb3kmh c1jb2gro c17mrp2r c13hnv0z cdj6zco c1tuinma cnnnmp6 c11tw450 cav6vvj c69dy50 cru1m34 c4n1ude c11mkg2u ch5irq3 c1tjpby8 c4u2zfh cvi58pq catlwle c1ek9vgr`}>
<div
className={`w-element cc3u05m c6v0qf5 cvi2gta cf64hkh c1begxas ci38l1c c1ej1dn2 cc52l67 c1ey66of c1me9bzw`}>
<Image
src={"/assets/Chicken_Wrap_sPtgJQui_ZFE_ulZR35lE.jpg"}
width={1024}
height={1024}
alt={""}
className={`w-image c1yly58e c14tih19 cspupja cmxz94f ${"offer-food-img"}`} />
</div>
<div
className={`w-element cf3f764 c1tuinma cc52l67 c173o7cs c69dy50 cq23j2p`}>
<h6
className={`w-element c1c93po9 c85oky9 cg75hi0 cszx9a0 coa431f ca0blho cp3ndwh`}>
{"ON THIS WEEK"}
</h6>
<h3
className={`w-element cnddqm0 cgqy2xs cbghwcp cux85d8 coa431f cszx9a0 c1lunhl8 c1fhbpki c6s4bs9 cru3x3b cp3ndwh c4mf00c`}>
{"Special "}
{""}
<br />
{""}
{"CHICKEN WRAP"}
</h3>
<p
className={`w-element c28tchp c85oky9 cnixgtc c1fz5xt0 c13k6c3z c1qfk1ax`}>
{"Limited Time Offer"}
</p>
<Link
href={"#"}
className={`w-element c1r5jqda czfwn1m cg7uw93 cqg5r70 cdb3kmh c13gyd0r c17mrp2r c13euf9y cnddqm0 c1k3gvey c15nks14 c1mym1zd c13k6c3z cnixgtc c85oky9 cszx9a0 c1uzl2a8 c1ldvdta c1u18adq c199reyu c1t3hna7 cazfscp cztrxzu c1msfzev c1tot74x ${"hero-cta-2"}`}>
{"Order Now "}
<span
className={`w-element c9e22e0`}>
{"→"}
</span>
</Link>
</div>
</div>
</div>
</div>
</section>
<div
className={`w-element c1tg4poh ${"fresheat-best-food-section"}`}>
<Image
src={"/assets/Floating_Tomato_zGeOdnA4qRY1DDONAo-3d.png"}
width={350}
height={350}
alt={""}
className={`w-image cc3u05m c10aomkf c1gvy8sq c17cmhbe cu13air cfx7zqu c1vi4xag c1b2yiig c1igd1z2 c1mx206x cspupja c1egyx1w c17ee1xy c192xjjx ${""}`} />
<HtmlEmbed
code={"<style>\n    /* Scoped Styles to ensure Responsiveness */\n    .fresheat-best-food-section {\n        font-family: 'Roboto', sans-serif;\n        background-color: #F4F1EA; /* var(--bg2) */\n        padding: 120px 0;\n        position: relative;\n        overflow: hidden;\n    }\n\n    .fresheat-container {\n        width: 100%;\n        padding-right: 15px;\n        padding-left: 15px;\n        margin-right: auto;\n        margin-left: auto;\n    }\n\n    /* Responsive Container Widths */\n    @media (min-width: 576px) { .fresheat-container { max-width: 540px; } }\n    @media (min-width: 768px) { .fresheat-container { max-width: 720px; } }\n    @media (min-width: 992px) { .fresheat-container { max-width: 960px; } }\n    @media (min-width: 1200px) { .fresheat-container { max-width: 1140px; } }\n    @media (min-width: 1400px) { .fresheat-container { max-width: 1320px; } }\n\n    /* Title Area */\n    .fresheat-title-area {\n        text-align: center;\n        margin-bottom: 40px;\n    }\n    \n    .fresheat-sub-title {\n        color: #FC791A; /* var(--theme2) */\n        font-family: 'Epilogue', sans-serif;\n        font-size: 16px;\n        font-weight: 700;\n        text-transform: uppercase;\n        margin-bottom: 15px;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        gap: 10px;\n    }\n\n    .fresheat-title {\n        color: #0023F; /* var(--title) */\n        font-family: 'Epilogue', sans-serif;\n        font-size: 50px;\n        font-weight: 900;\n        line-height: 50px;\n        text-transform: uppercase;\n        margin: 0;\n    }\n\n    /* The Grid (Replacing the Slider for static editing) */\n    /* Existing CSS for .fresheat-food-grid */\n    .fresheat-food-grid {\n        display: grid;\n        grid-template-columns: 1fr; /* Mobile default */\n        gap: 30px;\n        margin-bottom: -40px; /* This is the default for desktop/larger screens */\n        padding-top: 140px;\n    }\n    \n    /* --- NEW MOBILE RULE --- */\n    /* Target screens up to 479px (the mobile breakpoint in your Webstudio) */\n    @media (max-width: 479px) {\n        .fresheat-food-grid {\n            padding-top: 30px;\n        }\n    }\n    @media (min-width: 768px) { \n        .fresheat-food-grid { grid-template-columns: repeat(2, 1fr); } \n    }\n    @media (min-width: 1200px) { \n        .fresheat-food-grid { grid-template-columns: repeat(4, 1fr); } \n    }\n\n    /* Card Styles (Exact replication of main.css) */\n    .fresheat-single-item {\n        padding: 24px 25px 30px;\n        border-radius: 16px;\n        background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, #FFF 63.33%);\n        text-align: center;\n        position: relative;\n        transition: all 0.4s ease-in-out;\n    }\n\n    .fresheat-item-thumb {\n        position: relative;\n        margin-top: -120px; /* The negative margin effect */\n        margin-bottom: 24px;\n        z-index: 2;\n    }\n\n    .fresheat-item-thumb img {\n        max-width: 100%;\n        height: auto;\n        position: relative;\n        z-index: 2;\n        filter: drop-shadow(0px 10px 20px rgba(0,0,0,0.1));\n    }\n\n    .fresheat-circle-shape {\n        position: absolute;\n        top: -5px;\n        left: 50%;\n        transform: translateX(-50%);\n        z-index: 1;\n        width: 100%;\n        max-width: 200px;\n    }\n\n    .fresheat-item-content h3 {\n        color: #010F1C;\n        font-family: 'Epilogue', sans-serif;\n        font-size: 20px;\n        font-weight: 700;\n        line-height: 1;\n        text-transform: capitalize;\n        margin-bottom: 15px;\n        cursor: pointer;\n    }\n\n    .fresheat-item-content .text {\n        color: #5C6574;\n        font-size: 16px;\n        margin-bottom: 16px;\n    }\n\n    .fresheat-item-content h6 {\n        color: #EB0029; /* var(--theme) */\n        font-family: 'Epilogue', sans-serif;\n        font-size: 18px;\n        font-weight: 700;\n        margin: 0;\n    }\n\n    /* Decorative Shapes */\n    .fresheat-shape-1 {\n        position: absolute;\n        bottom: 10px;\n        left: 0;\n        z-index: 1;\n        display: none;\n    }\n    .fresheat-shape-2 {\n        position: absolute;\n        top: 36px;\n        right: 44px;\n        z-index: 1;\n        display: none;\n    }\n    @media (min-width: 1400px) {\n        .fresheat-shape-1, .fresheat-shape-2 { display: block; }\n    }\n\n</style>"}
className={`w-html-embed cj6ctr8`} />
<Image
src={"/assets/burger-shape_Tau_Z-0wpmINz-Uau90zg.png"}
width={148}
height={160}
alt={""}
className={`w-image c1jft4g4 ${"fresheat-shape-1"}`} />
<Image
src={"/assets/chefeShape1_2_CCmjwagkREeZ57R6WKnd2.png"}
width={142}
height={90}
alt={""}
className={`w-image c1xiw48x ${"fresheat-shape-2"}`} />
<div
className={`w-element ${"fresheat-container"}`}>
<div
className={`w-element ${"fresheat-title-area"}`}>
<div
className={`w-element ${"fresheat-sub-title"}`}>
<Image
src={"/assets/Icon_5GT9EIvbwaKa498d_d60d.svg"}
width={40}
height={40}
alt={""}
className={`w-image`} />
<span
className={`w-element`}>
{" Best Food "}
</span>
<Image
src={"/assets/Icon_5GT9EIvbwaKa498d_d60d.svg"}
width={40}
height={40}
alt={""}
className={`w-image`} />
</div>
<h2
className={`w-element cfu3zra c1pm2okf c1d8m677 cszx9a0 csx4m8w ${"fresheat-title"}`}>
{"Popular "}
<span
className={`w-element c9cf5x2`}>
{"Food Items"}
</span>
</h2>
</div>
<div
className={`w-element ${"fresheat-food-grid"}`}>
<HtmlEmbed
code={"<style>\n    /* 1. Define the Spinning Motion */\n    @keyframes rotate-forever {\n        0% { \n            transform: rotate(0deg); \n        }\n        100% { \n            transform: rotate(360deg); /* Full circle rotation */\n        }\n    }\n\n    /* 2. Define the Reusable Spinning Class */\n    .spin-element {\n        /* Apply the animation: 4s duration, constant speed, infinite loop */\n        animation: rotate-forever 8s linear infinite; \n        \n        /* Ensure the spin happens around the image's center */\n        transform-origin: center center;\n        \n        /* Optional: Helps with performance */\n        will-change: transform; \n    }\n</style>"}
className={`w-html-embed`} />
<div
className={`w-element c13hnv0z czfwn1m cg7uw93 cdj6zco ${"fresheat-single-item"}`}>
<div
className={`w-element cqtcp12 c13hnv0z czfwn1m cg7uw93 ${"\n"}`}>
<Image
src={"/assets/Pizza_YcOql5yRwTxTNChhGkkq4.webp"}
width={1024}
height={1024}
alt={""}
className={`w-image`} />
<Image
src={"/assets/circleShape_NTvk77umJ2LArClRot1UG.png"}
width={200}
height={200}
alt={""}
className={`w-image cc3u05m czw4ond ceres5p ${"spin-element"}`} />
</div>
<div
className={`w-element ${"fresheat-item-content"}`}>
<h1
className={`w-element c1pm2okf csvtgnk cmxr8za cszx9a0`}>
{"Spicy Buffalo Chicken Pizza"}
</h1>
<div
className={`w-element ${"text"}`}>
{"Only"}
</div>
<h6
className={`w-element`}>
{"RM 35.00"}
</h6>
</div>
</div>
<div
className={`w-element c13hnv0z czfwn1m cg7uw93 cdj6zco ${"fresheat-single-item"}`}>
<div
className={`w-element cqtcp12 c13hnv0z czfwn1m cg7uw93 ${"\n"}`}>
<Image
src={"/assets/Krad_pao_9Sa8g07YO-w_v1hOWoUVz.webp"}
width={1024}
height={1024}
alt={""}
className={`w-image`} />
<Image
src={"/assets/circleShape_NTvk77umJ2LArClRot1UG.png"}
width={200}
height={200}
alt={""}
className={`w-image cc3u05m czw4ond ceres5p ${"spin-element"}`} />
</div>
<div
className={`w-element ${"fresheat-item-content"}`}>
<h1
className={`w-element c1pm2okf csvtgnk cszx9a0 cmxr8za`}>
{"Halal Pad "}
{""}
<br />
{""}
{"Kra pao"}
{""}
<br />
{""}
</h1>
<div
className={`w-element ${"text"}`}>
{"Only"}
</div>
<h6
className={`w-element`}>
{"RM 14.00"}
</h6>
</div>
</div>
<div
className={`w-element c13hnv0z czfwn1m cg7uw93 cdj6zco ${"fresheat-single-item"}`}>
<div
className={`w-element cqtcp12 c13hnv0z czfwn1m cg7uw93 ${"\n"}`}>
<Image
src={"/assets/chicken_rice_B4bhXNMla4rjvyArhZ_Y3.png"}
width={1024}
height={1024}
alt={""}
className={`w-image`} />
<Image
src={"/assets/circleShape_NTvk77umJ2LArClRot1UG.png"}
width={200}
height={200}
alt={""}
className={`w-image cc3u05m czw4ond ceres5p ${"spin-element"}`} />
</div>
<div
className={`w-element ${"fresheat-item-content"}`}>
<h1
className={`w-element c1pm2okf csvtgnk cszx9a0 cmxr8za`}>
{"Hainanese Chicken Rice"}
</h1>
<div
className={`w-element ${"text"}`}>
{"Only"}
</div>
<h6
className={`w-element`}>
{"RM 9.00"}
</h6>
</div>
</div>
<div
className={`w-element c13hnv0z czfwn1m cg7uw93 cdj6zco c1r1wck9 ${"fresheat-single-item"}`}>
<div
className={`w-element cqtcp12 c13hnv0z czfwn1m cg7uw93 ${"\n"}`}>
<Image
src={"/assets/Chicken_jockey_wfBo6g-TcV9DggDkBroOO.png"}
width={1024}
height={1024}
alt={""}
className={`w-image`} />
<Image
src={"/assets/circleShape_NTvk77umJ2LArClRot1UG.png"}
width={200}
height={200}
alt={""}
className={`w-image cc3u05m czw4ond ceres5p ${"spin-element"}`} />
</div>
<div
className={`w-element c1r1wck9 ${"fresheat-item-content"}`}>
<h1
className={`w-element c1pm2okf cmxr8za cszx9a0 csvtgnk`}>
{"Classic Fried chicken 7pcs"}
</h1>
<div
className={`w-element ${"text"}`}>
{"Only"}
</div>
<h6
className={`w-element`}>
{"RM 42.00"}
</h6>
</div>
</div>
</div>
</div>
</div>
<div
className={`w-element c13hnv0z c1ljn9ju c1gy5v3d c1i30lnr cmexp6j cr4fvt2 csfxzns c15lec2l cofapl7 c171udlu cpfmnbn cj9l1k0 c1c6hyn3 c173o7cs c1gg2al8 c1m5892x c1t2nhgt cp88ou c1gozthy c175gw0n c466xhk c4nawg3 cnaeph4 cvnlff8 ${"fresheat-about-section"}`}>
<HtmlEmbed
code={"<style>\n    /* --- Fresheat \"Skeleton\" Styles --- */\n    \n    /* 1. Section Setup (Visuals Only) */\n    :where(.fresheat-about-section) {\n        position: relative;\n        overflow: hidden;\n        /* REMOVED: Padding, Background-Color. Set these in Webstudio. */\n    }\n\n    /* 2. Layout Resets (Unlock Flex & Sizing) */\n    :where(.fresheat-container),\n    :where(.fresheat-about-wrapper),\n    :where(.fresheat-title-area) {\n        /* I removed ALL Display, Flex, Width, and Margin rules.\n           You must build the layout (Center, Row/Column) in Webstudio. */\n        position: relative;\n        z-index: 5;\n    }\n\n    /* 3. Typography (Unlock Colors & Fonts) */\n    :where(.fresheat-sub-title),\n    :where(.fresheat-title),\n    :where(.fresheat-text) {\n        /* I removed ALL specific Colors and Margins. */\n        font-family: 'Epilogue', sans-serif; /* Kept font as a default base */\n    }\n    \n    :where(.fresheat-title) {\n    }\n\n    /* 4. Button (Shape Only) */\n    :where(.fresheat-btn) {\n        display: inline-block;\n        /* Visual shape */\n        padding: 13px 25px; \n        border: none;\n        cursor: pointer;\n        transition: all 0.3s ease;\n        \n        /* Font defaults */\n        font-family: 'Roboto', sans-serif;\n        font-size: 14px;\n        text-transform: uppercase;\n        text-decoration: none;\n\n        /* REMOVED: Background-Color and Text-Color. \n           Set \"Background\" and \"Typography\" in Webstudio. */\n    }\n\n/* --- Floating Shapes & Animations --- */\n    \n    @keyframes rotate-infinite {\n        100% { transform: rotate(360deg); }\n    }\n\n    :where(.fresheat-shape) {\n        position: absolute;\n        z-index: 1;\n        pointer-events: none;\n        /* Ensure they are visible by default */\n        display: block; \n    }\n\n    /* FIX: Only hide shapes on Mobile Phones (< 768px) */\n    /* Previously it was 1399px, which hid them on tablets too */\n    @media (max-width: 768px) { \n        :where(.fresheat-shape) { display: none; } \n    }\n\n    /* Specific Shape Positioning */\n    :where(.shape-1) { top: 0; left: 0; }\n    :where(.shape-2) { top: 0; left: 334px; }\n    \n    :where(.shape-3) { \n        top: 95px; left: 187px; z-index: 2; \n        animation: rotate-infinite 20s linear infinite; \n    }\n    \n    :where(.shape-4) { top: 0; right: 0; }\n    :where(.shape-5) { bottom: 0; right: 334px; }\n    \n    :where(.shape-6) { \n        top: 95px; right: 187px; z-index: 2; \n        animation: rotate-infinite 20s linear infinite;\n    }\n</style>"}
className={`w-html-embed`} />
<Image
src={"/assets/aboutShape1_5_jjSqc_8Ndlelc0H3xZ7nr.png"}
width={173}
height={277}
alt={""}
className={`w-image c12w78hs c15thvcy cc3u05m c4ng7ru cj6ctr8 ${"fresheat-shape shape-2"}`} />
<Image
src={"/assets/aboutShape1_5_jjSqc_8Ndlelc0H3xZ7nr.png"}
width={173}
height={277}
alt={""}
className={`w-image cc3u05m cj6ctr8 cxpvxve ${"fresheat-shape shape-5"}`} />
<div
className={`w-element cw319tw c1jh2sh4 c1yfehq7 c3bogv1 c14tih19 c1ez9nzu c1pd5lmk c13hnv0z cdj6zco c1dduie c1aqzxuf c11ptxw3 cpfmnbn cj9l1k0 c1c6hyn3 cjikpcp cxsmtat c1vida81 c69dy50 c1gozthy c175gw0n cyhfpca c117aq07 c1wbnc3n crhthsc c1909fk3 c5w3e8b c1uwjcs2 cgu2lfb c1gtu4g3 c8vg7fj cndkst7 c1gjknmr c5onhs9 ca1afd7 cyhon7h ${"fresheat-container"}`}>
<div
className={`w-element c1yly58e c17r8qow c1s8dc6k cxzmlij c14tih19 c1ez9nzu c1pd5lmk c13hnv0z cdj6zco c1ljn9ju c1gy5v3d cfue7fk c11psw9i c1t4548c cogxuid c1kpa8e0 cow2a5d c1gtu4g3 c1c0x7dy cvw9fui c175gw0n c69dy50 cru1m34 cuihm0a cp3ndwh c15bsbam ${"fresheat-about-wrapper"}`}>
<div
className={`w-element c1yly58e c17r8qow c1s8dc6k c13hnv0z cdj6zco c1ljn9ju cg7uw93 ca8d5ey c1fikhfu cl607r8 c1vkj6z1 c109qgub c6mca0r c172a54s cmuen4e c2d2z8y cuihm0a c656bnl cj63gtg c69dy50 c1gozthy cf6nu9m c1xxakoe c1fpxi7x cow2a5d cf2mmu9 c1x5kcei cvw9fui ${"fresheat-title-area"}`}>
<div
className={`w-element cuihm0a c1f10svd cvyjdar c1ogmnza c15bsbam c175gw0n c69dy50 cq23j2p c1r6broh c1yly58e c13hnv0z czfwn1m cg7uw93 ${"fresheat-sub-title"}`}>
<span
className={`w-element c1f10svd cvyjdar`}>
{" About US "}
</span>
<Image
src={"/assets/Logo_ndqnCBMyt2ZEbNP_Yrd-1.png"}
width={407}
height={285}
alt={""}
className={`w-image camwsvz cjmdyd2 cspupja c163wlji`} />
</div>
<h2
className={`w-element c1yly58e c17r8qow c1s8dc6k c1fhkb2b cgsn69g c1h3yofk citp4x1 c12os8yp czu882a c99j39c c16gw1ad cjv2sc3 cj6ctr8 c1du98pi cxpvxve c1hz8abl ${"fresheat-title"}`}>
{"Variety of flavours"}
{""}
<br />
{""}
{"from Malay"}
{""}
<br />
{""}
{"cuisine"}
</h2>
<h1
className={`w-element c1k15m98 c1fsgqz8 cbghwcp c1fhkb2b c1pm2okf cszx9a0 cmxr8za cp6ro43 c1yly58e c17r8qow c8qpvct csx4m8w c1opxura co4torc czeeqob cvfaq9w c1nn7qpq c6s4bs9 c1ni90ww c14cmd0h c1jha0yl crl65b cpw73dk c37a1fe ctwbdys c1rgxldu cbkojqr ckmjbo7 c1483pb2 c1qx4sr3 cdw8yjh cu9z43j`}>
{"Variety of Flavours "}
{""}
<br />
{""}
{"from "}
<b
className={`w-element cbghwcp c1c93po9 c11s6xq6`}>
{"Malay Cuisine"}
</b>
{" "}
</h1>
<div
className={`w-element c13hnv0z cdj6zco cogfp7i c4fmdfu c1yly58e c17r8qow c1s8dc6k cpfmnbn c1yku8m2 cuib9ri crspql3 ctoys6u`}>
<p
className={`w-element c1yly58e c17r8qow c1s8dc6k c1fhkb2b cp6ro43 c17gsc9i cmxr8za c12os8yp cvogjwk c1ce6ibn c1rgxldu ${"fresheat-text"}`}>
<b
className={`w-element`}>
{"Lorem Ipsum"}
</b>
{" offers a wide selection of delicious meals, prepared fresh and with high quality to satisfy all food lovers without breaking the bank"}
</p>
<p
className={`w-element c1yly58e c17r8qow c1s8dc6k c1fhkb2b c1v0zej9 cp6ro43 c17gsc9i cmxr8za c12os8yp cvogjwk c1ce6ibn c1rgxldu ${"fresheat-text"}`}>
{"We blend the best variety of homemade flavours from Malaysian cooking into all our dishes, ensuring you get a taste that is both authentic and delightfully familiar every time you dine with us."}
</p>
</div>
</div>
<div
className={`w-element cc3u05m c1emqhd cvyq57w c1oiz9hq cyrlffz cmb2onj c2746zc c72xe58 c6ai3g7 c39qe9w czqr6q7 c5lom1r cq931jh c1002bib c1c1wzoq cn1m6d9 c12ye54t`}>
<Image
src={"/assets/Plate_Spin2_hlraTnEkKL0AX7-yU5WcI.png"}
width={774}
height={782}
alt={""}
className={`w-image c1yly58e c14tih19 cspupja c1nfpdi8 c4nhayx c6kst9x ctt85k4 ce2g153 cwtv6re c15jxyhu cp3k25f czxjt9l c1nh8o3q cez5zc2 cxwnc4b c1tuinma c13qtyfd`} />
</div>
<div
className={`w-element cc3u05m clv5sn2 c13puoxv c1oiz9hq cyrlffz cmb2onj c2746zc c72xe58 c39qe9w czqr6q7 c1fj4ibc c52ym6c c1002bib c1c1wzoq c1sj5zrj`}>
<Image
src={"/assets/Plate_Spin1_b_B4oMQBzbJvfX7ZRyZG7.png"}
width={774}
height={782}
alt={""}
className={`w-image c1yly58e c14tih19 cspupja c1nfpdi8 c4nhayx c6kst9x ctt85k4 cytsmaa cwtv6re c15jxyhu cp3k25f czxjt9l c1nh8o3q cez5zc2 c580cki c1tuinma c2746zc`} />
</div>
</div>
</div>
<div
className={`w-element cyjltn2 cplmjum c1u210ik c14tih19 c1ez9nzu c1pd5lmk c1fqr023 ca65v0h c1xjq1ia c1akemag cpfmnbn c1j4drbn cxbnr62 c84vfgg cj9l1k0 c1c6hyn3 c165v0jb c1w3rjqt cuihm0a c1phnzz8 c7r20v4 cyhfpca c117aq07 c1wbnc3n c15mq7zy c16plec8 czyk318 c1rl4vsp c1gnyyp6 c882b6k c2qmhr8 cr2mga3 c1oq18tz`}>
<Image
src={"/assets/AboutUs_1_OfkN0J4BsA7MGTWK4q5uz.png"}
width={2048}
height={2048}
alt={""}
className={`w-image c1g54ukh cqciqxm c14tih19 c1ez9nzu c1pd5lmk ce20j0k crur07v c1r02q6 c1avwuy5 c1mx206x cwjb0sv c19qsm92 c1uw4ubr clytzz6 c8qpvct c1qhkxgh c1jfu0ny c10zgate ck5disr c61aw5p`} />
</div>
</div>
<div
className={`w-element c12hs7jk cyy01d0 ${"scroller-wrapper"}`}>
<HtmlEmbed
code={"<style>\n    /* 1. THE FIX: Prevents the horizontal scrollbar from appearing on the main page */\n    body {\n        margin: 0;\n        padding: 0;\n        overflow-x: hidden; \n        font-family: sans-serif;\n    }\n\n    /* 2. Keyframe Definition for the scrolling effect */\n    @keyframes scroll-left {\n        /* Start position (0px translated) */\n        0% { transform: translateX(0); }\n        /* End position (moves exactly half the total content width) */\n        100% { transform: translateX(-50%); } \n    }\n    \n    /* Pause animation on hover (optional) */\n    .food-scroller:hover {\n        animation-play-state: paused !important;\n    }\n\n    /* Container for the scrolling content (the wrapper with overflow: hidden) */\n    .scroller-wrapper {\n        width: 100%; \n        overflow: hidden; /* This is essential for cropping the content */\n        background-color: #F4F1EA; /* var(--bg2) */ \n        padding: 40px 0;\n    }\n\n    /* The element being animated (must have width: max-content to calculate total content size) */\n    .food-scroller {\n        display: flex;\n        gap: 20px;\n        width: max-content; /* This makes the inner container larger than the screen */\n        animation: scroll-left 30s linear infinite; /* Adjust time for speed */\n        padding: 0 40px; /* Add padding to match the wrapper's vertical padding */\n    }\n    \n    /* Styling for the individual images */\n    .food-scroller img {\n        width: 200px; \n        height: 200px; \n        object-fit: cover; \n        border-radius: 12px; \n        flex-shrink: 0; /* Prevents images from shrinking */\n        transition: transform 0.3s ease;\n    }\n\n    /* Optional hover effect */\n    .food-scroller img:hover {\n        transform: scale(1.05);\n    }\n</style>"}
className={`w-html-embed`} />
<div
className={`w-element ${"food-scroller"}`}>
<Image
src={"/assets/Y2SGepwIjTj2MMtqrncUK_dOCB3PFBkd6fW0CqedPQI.png"}
width={300}
height={300}
alt={"Pizza"}
className={`w-image`} />
<Image
src={"/assets/photo-1546069901-ba9599a7e63c__NDng4aQ2z-CzD9mqaXheg.png"}
width={300}
height={300}
alt={""}
className={`w-image`} />
<Image
src={"/assets/PC3IlQb3NbjA1TiLR7lJ9_kbC-ZAcSP2cvsTm_CZahK.png"}
width={212}
height={300}
alt={"Eggs"}
className={`w-image`} />
<Image
src={"/assets/VvYAIkGSH0Qtvi_hCGjwS_jARxX5RX7zhb4ts_LCQCJ.png"}
width={300}
height={300}
alt={"Pancakes"}
className={`w-image`} />
<Image
src={"/assets/KVU7ykgho0fcJ-iTpJ4xS_gHuokentkF0ayzLpYEpiV.png"}
width={300}
height={300}
alt={"Cake"}
className={`w-image`} />
<Image
src={"/assets/h6Catt5zppzxSvoAUYz4-_wfoMV8veyHUWo8srApbWB.png"}
width={300}
height={300}
alt={"Toast"}
className={`w-image`} />
<Image
src={"/assets/sYtqjjNthisfcsdMuLAnM_TcufucsOOVjq-mh1CRAWs.png"}
width={300}
height={300}
alt={"Meatballs"}
className={`w-image`} />
<Image
src={"/assets/TJUkPVaSqjxrWuix9alw7_Mlmk_NLWEn1kvEPUr9jok.png"}
width={300}
height={300}
alt={"Pasta"}
className={`w-image`} />
<Image
src={"/assets/Y2SGepwIjTj2MMtqrncUK_dOCB3PFBkd6fW0CqedPQI.png"}
width={300}
height={300}
alt={"Pizza"}
className={`w-image`} />
<Image
src={"/assets/photo-1546069901-ba9599a7e63c__NDng4aQ2z-CzD9mqaXheg.png"}
width={300}
height={300}
alt={""}
className={`w-image`} />
<Image
src={"/assets/PC3IlQb3NbjA1TiLR7lJ9_kbC-ZAcSP2cvsTm_CZahK.png"}
width={212}
height={300}
alt={"Eggs"}
className={`w-image`} />
<Image
src={"/assets/Mgh7ZUBEoD948CWgg2xyU_37fvh8OUoPh8UNks09AJi.png"}
width={248}
height={300}
alt={"Pancakes"}
className={`w-image`} />
<Image
src={"/assets/MqvZCtVgbteCdmCy37LTK_HRL3zA31zGIpKziCE6bGj.png"}
width={240}
height={300}
alt={"Cake"}
className={`w-image`} />
<Image
src={"/assets/nGc2B43zZGH9s6MTN_HLD_HJkBVAJ_tdt2hXPAC9QKZ.png"}
width={232}
height={300}
alt={"Toast"}
className={`w-image`} />
<Image
src={"/assets/cbnhUfD29JAJS5Zr3fEyW_LnG1ETvwGY8C7Rs1_cYSq.png"}
width={199}
height={300}
alt={"Meatballs"}
className={`w-image`} />
<Image
src={"/assets/gdtTRWnjom_gLl3j2XHYK_zB3J9DppPRLGdIUsySqqw.png"}
width={300}
height={200}
alt={"Pasta"}
className={`w-image`} />
</div>
</div>
<div
className={`w-element c1xjq1ia c1akemag c1yly58e c1s8dc6k c13hnv0z c1bf3ijt ca8d5ey c1fikhfu cl607r8 cdj6zco c1ljn9ju cg7uw93 c11ptxw3 c17r8qow c1y4rrlz ca0lljk c1nn7qpq c1h6o1il cvou5ar c1s2yqin c466xhk cow2a5d cf2mmu9 czjc5g7 c1wl1xxy ${"fresheat-testimonial-section"}`}>
<HtmlEmbed
code={"<style>\n    /* --- Scoped Styles --- */\n    :where(.fresheat-testimonial-section) {\n        background-color: #181818; /* bg-color3 */\n        position: relative;\n        font-family: 'Roboto', sans-serif;\n        overflow: hidden;\n    }\n\n    /* Container */\n    :where(.fresheat-container) {\n        width: 100%;\n        position: relative;\n        z-index: 5;\n    }\n    @media (min-width: 576px) { :where(.fresheat-container) { max-width: 540px; } }\n    @media (min-width: 768px) { :where(.fresheat-container) { max-width: 720px; } }\n    @media (min-width: 992px) { :where(.fresheat-container) { max-width: 960px; } }\n    @media (min-width: 1200px) { :where(.fresheat-container) { max-width: 1140px; } }\n    @media (min-width: 1400px) { :where(.fresheat-container) { max-width: 1320px; } }\n\n    /* Grid/Flex Layout */\n    :where(.fresheat-testi-row) {\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        gap: 40px;\n    }\n    \n    /* --- REORDERING LOGIC (Mobile: Content Top, Image Bottom) --- */\n    @media (max-width: 1199px) {\n        /* On screens smaller than 1200px (where it becomes a stack) */\n        \n        :where(.fresheat-col-content) {\n            order: 1; /* Content comes First */\n        }\n        \n        :where(.fresheat-col-video) {\n            order: 2; /* Video/Image comes Second (Bottom) */\n        }\n    }\n    \n    /* Video Column */\n    :where(.fresheat-col-video) {\n        flex: 0 0 100%;\n        max-width: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        min-height: 300px;\n    }\n    @media (min-width: 1200px) { \n        :where(.fresheat-col-video) { flex: 0 0 41.66%; max-width: 41.66%; }\n    }\n\n    /* Content Column */\n    :where(.fresheat-col-content) {\n        flex: 0 0 100%;\n        max-width: 100%;\n    }\n    @media (min-width: 1200px) { \n        :where(.fresheat-col-content) { flex: 0 0 58.33%; max-width: 58.33%; }\n    }\n\n    /* Video Play Button with Ripple */\n    :where(.fresheat-play-btn) {\n        width: 100px;\n        height: 100px;\n        background-color: #EB0029;\n        border-radius: 50%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        position: relative;\n        cursor: pointer;\n        z-index: 2;\n        text-decoration: none;\n    }\n    :where(.fresheat-play-btn)::before, :where(.fresheat-play-btn)::after {\n        content: \"\";\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        width: 100px;\n        height: 100px;\n        border: 1px solid #fff;\n        border-radius: 50%;\n        transform: translate(-50%, -50%);\n        animation: rippleOne 2s infinite;\n    }\n    :where(.fresheat-play-btn)::after { animation-delay: 1s; }\n    :where(.fresheat-play-btn) span { color: white; font-size: 30px; margin-left: 5px; }\n\n    @keyframes rippleOne {\n        0% { width: 100px; height: 100px; opacity: 1; }\n        100% { width: 200px; height: 200px; opacity: 0; }\n    }\n\n    /* Title */\n    :where(.fresheat-sub-title) {\n        color: #FC791A;\n        font-family: 'Epilogue', sans-serif;\n        font-size: 16px;\n        font-weight: 700;\n        text-transform: uppercase;\n        margin-bottom: 15px;\n    }\n    :where(.fresheat-title) {\n        color: #ffffff;\n        font-family: 'Epilogue', sans-serif;\n        font-size: 40px;\n        font-weight: 900;\n        margin: 0 0 40px 0;\n        text-transform: capitalize;\n    }\n\n    /* Testimonial Card */\n    :where(.fresheat-testi-card) {\n        padding: 50px;\n        background: #ffffff;\n        border-radius: 16px;\n        border-top: 4px solid #FC791A;\n        box-shadow: 0px 4px 25px rgba(0,0,0,0.06);\n    }\n    @media (max-width: 575px) { :where(.fresheat-testi-card) { padding: 30px; } }\n\n    :where(.fresheat-testi-header) {\n        display: flex;\n        align-items: center;\n        gap: 20px;\n        margin-bottom: 22px;\n        position: relative;\n    }\n     \n    :where(.fresheat-profile-img) img {\n        width: 60px;\n        height: 60px;\n        border-radius: 50%;\n        object-fit: cover;\n    }\n\n    :where(.fresheat-profile-info) h6 {\n        color: #010F1C;\n        font-family: 'Epilogue', sans-serif;\n        font-size: 22px;\n        font-weight: 700;\n        margin: 0;\n    }\n    :where(.fresheat-profile-info) p {\n        color: #5C6574;\n        font-size: 16px;\n        margin: 0;\n    }\n    :where(.fresheat-quote-icon) {\n        margin-left: auto;\n        opacity: 0.5;\n    }\n\n    :where(.fresheat-testi-text) {\n        color: #5C6574;\n        font-size: 24px;\n        line-height: 38px;\n        font-weight: 400;\n        font-style: italic;\n    }\n    @media (max-width: 767px) { :where(.fresheat-testi-text) { font-size: 18px; line-height: 30px; } }\n\n    /* Navigation Arrows (Static for visual) */\n    :where(.fresheat-nav-arrows) {\n        display: flex;\n        gap: 20px;\n        margin-top: 30px;\n    }\n    :where(.fresheat-arrow) {\n        width: 50px;\n        height: 50px;\n        border: 1px solid #fff;\n        border-radius: 50%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        color: #fff;\n        cursor: pointer;\n        transition: 0.3s;\n    }\n    :where(.fresheat-arrow):hover { background: #FC791A; border-color: #FC791A; }\n    :where(.fresheat-arrow.active) { background: #EB0029; border-color: #EB0029; }\n\n    /* Shapes */\n    :where(.fresheat-bg-shape) { position: absolute; z-index: 1; pointer-events: none; }\n    :where(.shape-t1) { top: 0; left: 0; width: 800px;}\n    :where(.shape-t2) { top: 100px; right: 0; }\n\n    /* --- MARQUEE (Scrolling Text) --- */\n    :where(.fresheat-marquee-wrap) {\n        margin-top: 80px;\n        padding: 40px 0;\n        background: transparent;\n        overflow: hidden;\n        white-space: nowrap;\n        border-top: 1px solid rgba(255,255,255,0.1);\n        border-bottom: 1px solid rgba(255,255,255,0.1);\n    }\n     \n    :where(.fresheat-marquee-inner) {\n        display: inline-block;\n        animation: marqueeLeft 25s linear infinite;\n    }\n\n    :where(.fresheat-marquee-text) {\n        display: inline-block;\n        font-family: 'Epilogue', sans-serif;\n        font-size: 80px;\n        font-weight: 700;\n        text-transform: uppercase;\n        color: transparent;\n        -webkit-text-stroke: 1px rgba(255,255,255,0.2); /* Outline effect */\n        margin-right: 40px;\n    }\n     \n    /* Fill effect on some words */\n    :where(.fresheat-marquee-text.filled) {\n        color: transparent; \n        -webkit-text-stroke: 1px #FC791A;\n    }\n     \n    @media (max-width: 767px) { :where(.fresheat-marquee-text) { font-size: 40px; } }\n\n    @keyframes marqueeLeft {\n        0% { transform: translateX(0); }\n        100% { transform: translateX(-50%); }\n    }\n\n</style>"}
className={`w-html-embed`} />
<Image
src={"/assets/testimonialShape1_1_I2BzK1FNstdzOdFfIPc7G.png"}
width={224}
height={401}
alt={""}
className={`w-image cze8qxu cxpvxve cj6ctr8 ${"fresheat-bg-shape shape-t2"}`} />
<div
className={`w-element c1yly58e c13hnv0z cfsv9jl czfwn1m c1gy5v3d c17r8qow c1s8dc6k c14tih19 c1ez9nzu c1pd5lmk c1r489lz cglgujt cspupja c173o7cs cp88ou cru1m34 c1rjhzug`}>
<Image
src={"/assets/Fat_Guy_W6dEFySpXOdMINs9s_gPW.png"}
width={885}
height={747}
alt={""}
className={`w-image c1hz8abl c1w38b1b cxpvxve c15wi4k8 c13hnv0z c14tih19 cjmdyd2 czfwn1m cg7uw93 ce20j0k c1g4kvog c6op4a7 c1ez9nzu c1pd5lmk c11ptxw3 caf5hne c175gw0n c1yku8m2 cj6ctr8 cpfmnbn cj9l1k0 c1c6hyn3 cjs5jfs c1q7qx5v c173o7cs ${""}`} />
<div
className={`w-element c13hnv0z cdj6zco c1ljn9ju cg7uw93 c1guo88f cjmdyd2 c6op4a7 csfxzns c1cvbdtz c1mx206x c13qtyfd c14tih19 c1tuinma c1s2yqin ciwnz04 c1c0x7dy c8mdtak cyhfpca c117aq07 c1wbnc3n c7xbqez c1f10svd cvyjdar c1ogmnza c1enzond cq23j2p c1tybzh3 c1cc4guj cv1ic8u cpfmnbn cj9l1k0 c1c6hyn3 c1eyhhtf c17f3eav ${""}`}>
<div
className={`w-element c1yly58e c17r8qow c1s8dc6k c11ptxw3 crur07v c13hnv0z cdj6zco c1ljn9ju cg7uw93 cyhfpca c117aq07 c1wbnc3n c3utoqb c1x5kcei c1176r7o c1s31xxh cpfmnbn cj9l1k0 c1c6hyn3 cc52l67 c173o7cs cp88ou cq23j2p c6mca0r c172a54s cmuen4e c2d2z8y c1wvqgkp c1d8xom9 c1atxqt2 csanvud ${"fresheat-col-content"}`}>
<div
className={`w-element c1ph4guy ${"fresheat-sub-title"}`}>
<span
className={`w-element`}>
{" Testimonials "}
</span>
<Image
src={"/assets/Icon_5GT9EIvbwaKa498d_d60d.svg"}
width={407}
height={285}
alt={""}
className={`w-image crc72mq c1041set c11wjd4q c1aohput c1vocpp`} />
</div>
<h2
className={`w-element cnddqm0 c1pm2okf cbghwcp ccvps6n cs0onvz c1v0zej9 c1xs5614 c15xs9db c16czpts ces8tjq cr8y2fi ccbhvf0 c1nn7qpq cxx19kg ${""}`}>
{"Hear what our "}
{""}
<br />
{""}
{"Customers Say"}
</h2>
<Image
src={"/assets/Fat_Guy_W6dEFySpXOdMINs9s_gPW.png"}
width={885}
height={747}
alt={""}
className={`w-image cbkojqr cuib9ri crspql3 cm6loog c11psw9i cvr5dlr c1w38b1b c1ociwpr c3yehpu c19fv45i cjfajaj c14cmd0h cyhfpca c117aq07 c1wbnc3n c1gcsvan c1c0x7dy c1guo88f citp4x1 c14tih19 cjmdyd2 czfwn1m cg7uw93 cspupja c1sg6e8v c6op4a7 c1ez9nzu c1pd5lmk c1modrv c1cz3rpj c175gw0n c1yku8m2 c8qpvct cpfmnbn cj9l1k0 c1c6hyn3 cjs5jfs c1ozgfa1 c40n928 c1f10svd cvyjdar c1ogmnza ${""}`} />
<div
className={`w-element c1a3hlfw c1x9zj5i cd8nf5k cpfmnbn cj9l1k0 c1c6hyn3 cppz4f cyhfpca c117aq07 c1wbnc3n cuib9ri crspql3 cm6loog ${"fresheat-testi-card"}`}>
<div
className={`w-element ${"fresheat-testi-header"}`}>
<div
className={`w-element c14kaug6 c1mxsog5 c1hguf4e c7aep5m chz1dvc c1j6n6ik ${"fresheat-profile-img"}`}>
<Image
src={"/assets/Daniel_Firdaus__39m1L1EHkTW0ntMCwLPB.png"}
width={567}
height={567}
alt={""}
className={`w-image c1pd5lmk ce20j0k c17r8qow c1yly58e c14tih19 c1ez9nzu c1luy13d`} />
</div>
<div
className={`w-element ${"fresheat-profile-info"}`}>
<h6
className={`w-element`}>
{"Daniel Firdaus"}
</h6>
<p
className={`w-element`}>
{"Event Planner"}
</p>
</div>
<div
className={`w-element ${"fresheat-quote-icon"}`}>
<Image
src={"/assets/quote_CtsXzUvanJTiGUBaqwR2I.svg"}
width={50}
height={37}
alt={""}
className={`w-image c1k4lao2`} />
</div>
</div>
<p
className={`w-element ${"fresheat-testi-text"}`}>
{"“The burgers here tastes amazing, it’s almost like comfort food. The flavors are warm and familiar, the portion is generous, and it always hits the spot. Simple, hot, and unbelievably satisfying.”"}
</p>
</div>
<div
className={`w-element c1isah3z c1pvsodd c1725wv9 c1kw6smu co9y882 ${"fresheat-nav-arrows"}`}>
<div
className={`w-element ${"fresheat-arrow"}`}>
{"←"}
</div>
<div
className={`w-element ${"fresheat-arrow active"}`}>
{"→"}
</div>
</div>
</div>
</div>
</div>
<div
className={`w-element c1xjq1ia c1akemag c15wi4k8 c692hwx cqtcp12 ${"fresheat-marquee-wrap"}`}>
<div
className={`w-element c1xjq1ia c1akemag ${"fresheat-marquee-inner"}`}>
<span
className={`w-element ${"fresheat-marquee-text"}`}>
{"Chicken Pizza"}
</span>
{" "}
<span
className={`w-element ${"fresheat-marquee-text filled"}`}>
{"Grilled Chicken"}
</span>
{" "}
<span
className={`w-element ${"fresheat-marquee-text"}`}>
{"Burger"}
</span>
{" "}
<span
className={`w-element ${"fresheat-marquee-text filled"}`}>
{"Fresh Pasta"}
</span>
{" "}
<span
className={`w-element ${"fresheat-marquee-text"}`}>
{"Chicken Pizza"}
</span>
{" "}
<span
className={`w-element ${"fresheat-marquee-text filled"}`}>
{"Grilled Chicken"}
</span>
{" "}
<span
className={`w-element ${"fresheat-marquee-text"}`}>
{"Burger"}
</span>
{" "}
<span
className={`w-element ${"fresheat-marquee-text filled"}`}>
{"Fresh Pasta"}
</span>
</div>
</div>
</div>
<section
className={`w-element c1no974m c11ptxw3 cxzmlij c13k6c3z c1kdsazu c1xjq1ia c1akemag cw622cv c13hnv0z cdj6zco czfwn1m cg7uw93 cu62r76 c1bth54e clndhtc c1gkcscr ci6p695 c1s4k6qm c12coual ceq68xr cms2d1e cxz62lk cpfmnbn cj9l1k0 c1c6hyn3 c69dy50 cru1m34 c11qej4y c1wbnc3n cyhfpca c117aq07 c1c7xsto chuf7ws cv09l9w`}>
<div
className={`w-element clm9rjq c8wyveh cw622cv cc3u05m c1ewj42t cu9nseg ci38l1c c1xjq1ia c1akemag`}>
<HtmlEmbed
code={"<style>\r\n    @keyframes rotate-forever {\r\n        0% { transform: rotate(0deg); }\r\n        100% { transform: rotate(360deg); }\r\n    }\r\n</style>"}
className={`w-html-embed`} />
<div
className={`w-element cc3u05m c11e5fmx cek14cr c1oiz9hq cyrlffz cmb2onj c2746zc c72xe58 c39qe9w czqr6q7 civheh8 c8ju1cs c1002bib c1c1wzoq c27dxf1 c1bpfoie cb44xcn c1rren8a cnhutc3 c6eqh9t`}>
<Image
src={"/assets/Plate_Spin1_b_B4oMQBzbJvfX7ZRyZG7.png"}
width={774}
height={782}
alt={""}
className={`w-image c1yly58e c14tih19 cspupja c1nfpdi8 c4nhayx c6kst9x ctt85k4 cytsmaa cwtv6re c15jxyhu cp3k25f czxjt9l c1nh8o3q cez5zc2 cxwnc4b c1tuinma c2746zc`} />
</div>
<div
className={`w-element cc3u05m cq921hg cc8hu0y c1oiz9hq cyrlffz cmb2onj c2746zc c72xe58 c6ai3g7 c39qe9w czqr6q7 c1t2uip9 c605dbf c1002bib c1c1wzoq c1dquhjj cf2xpy9 cb44xcn c1rren8a csbq0sn c12oz3z7`}>
<Image
src={"/assets/Plate_Spin2_hlraTnEkKL0AX7-yU5WcI.png"}
width={774}
height={782}
alt={""}
className={`w-image c1yly58e c14tih19 cspupja c1nfpdi8 c4nhayx c6kst9x ctt85k4 ce2g153 cwtv6re c15jxyhu cp3k25f czxjt9l c1nh8o3q cez5zc2 cxwnc4b c1tuinma c13qtyfd`} />
</div>
</div>
<div
className={`w-element c1yly58e cfgfdxk c1igd1z2 c1ibcse2 cfnhogp c1cx207d c1q3ou0e c1c6hyn3 c1wvqgkp c8635h8 clytzz6 c3mn5oi cj9l1k0 c2d2z8y c9k8vdu cq5buk7 c1wbnc3n c117aq07 cgby5tr ciwnz04`}>
<div
className={`w-element c1gbjgq6 c26pi3w c1igd1z2 c161x6az c1ibcse2 c1c6hyn3 clytzz6 c8635h8 cpfmnbn cj9l1k0 c1cc4guj cv1ic8u c1wbnc3n cgby5tr ciwnz04`}>
<h4
className={`w-element c28tchp c1pm2okf c17gsc9i cg75hi0 cszx9a0 coa431f caefvhp cefnw6i cp8crrr`}>
{"Ready to Taste the Best?"}
</h4>
<h2
className={`w-element cnddqm0 c1pm2okf c1k1niie c1rfn6re c1yew5g c26pi3w c1kebnwa cszx9a0 ca1hjap cu44p6d`}>
{"Order Your Fresh Meal "}
<span
className={`w-element c1c93po9`}>
{"Now!"}
</span>
</h2>
<p
className={`w-element c1e55i6c c17gsc9i c1jriuzi c1fz5xt0 c4f8jzb c1pm2okf c12os8yp c5lhvgj cp7d4zg`}>
{"Don't wait! Experience the quality and speed of our casual dining experience from the comfort of your home. Click below to view our full menu and specials."}
</p>
<Link
href={"#menu"}
className={`w-element c1r5jqda czfwn1m cg7uw93 ckpdd6v c1qt8cx1 c11hualn cdma3wu c1pd3kff cnddqm0 c1k3gvey c15nks14 c1mym1zd c13k6c3z cg75hi0 c1r1wck9 cszx9a0 c1exrmam cercat7 csaev8m ctxezha ch3dczi cazfscp cztrxzu c1msfzev c1tot74x ca0blho c1ii3q8w ce4szih ${"hero-cta"}`}>
{"View Menu & Order "}
<span
className={`w-element c9e22e0`}>
{"→"}
</span>
</Link>
</div>
</div>
</section>
<footer
className={`w-element c1y4rrlz c1c6hyn3 cc52l67 c173o7cs c1tybzh3 c1wbnc3n cm6loog ${"fresheat-footer-section"}`}>
<HtmlEmbed
code={"<style>\n    /* --- Scoped Styles --- */\n    :where(.fresheat-footer-section) {\n        background-color: #010F1C; /* var(--title) */\n        color: #ffffff;\n        font-family: 'Roboto', sans-serif;\n        position: relative;\n        overflow: hidden;\n    }\n\n    /* Container */\n    :where(.fresheat-container) {\n        width: 100%;\n        padding-right: 15px;\n        padding-left: 15px;\n        margin-right: auto;\n        margin-left: auto;\n        position: relative;\n        z-index: 5;\n    }\n    @media (min-width: 576px) { :where(.fresheat-container) { max-width: 540px; } }\n    @media (min-width: 768px) { :where(.fresheat-container) { max-width: 720px; } }\n    @media (min-width: 992px) { :where(.fresheat-container) { max-width: 960px; } }\n    @media (min-width: 1200px) { :where(.fresheat-container) { max-width: 1140px; } }\n    @media (min-width: 1400px) { :where(.fresheat-container) { max-width: 1320px; } }\n\n    /* --- Top Contact Bar --- */\n    :where(.fresheat-footer-top) {\n        background-color: #FC791A; /* var(--theme2) */\n        padding: 50px;\n        border-radius: 20px;\n        margin-bottom: 60px;\n        position: relative;\n        top: -40px; /* Visual overlap effect */\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: space-between;\n        gap: 30px;\n    }\n    @media (max-width: 991px) { :where(.fresheat-footer-top) { padding: 30px; flex-direction: column; top: 0; margin-top: 50px;} }\n\n    :where(.fresheat-contact-box) {\n        display: flex;\n        align-items: center;\n        gap: 15px;\n    }\n    \n    :where(.fresheat-contact-icon) {\n        width: 40px;\n        height: 40px;\n        background: #fff;\n        color: #FC791A;\n        border-radius: 50%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 18px;\n    }\n\n    :where(.fresheat-contact-info) h6 {\n        margin: 0 0 5px 0;\n        font-size: 14px;\n        text-transform: capitalize;\n        font-weight: 500;\n    }\n    :where(.fresheat-contact-info) p {\n        margin: 0;\n        font-size: 18px;\n        font-weight: 700;\n        font-family: 'Epilogue', sans-serif;\n    }\n\n    /* --- Main Footer Widgets --- */\n    :where(.fresheat-footer-widgets) {\n        padding-bottom: 80px;\n        display: grid;\n        grid-template-columns: 1fr;\n        gap: 40px;\n    }\n    @media (min-width: 768px) { :where(.fresheat-footer-widgets) { grid-template-columns: repeat(2, 1fr); } }\n    @media (min-width: 1200px) { :where(.fresheat-footer-widgets) { grid-template-columns: repeat(4, 1fr); } }\n\n    /* Titles */\n    :where(.fresheat-widget-title) {\n        font-size: 24px;\n        font-weight: 700;\n        font-family: 'Epilogue', sans-serif;\n        margin-bottom: 25px;\n        position: relative;\n        padding-bottom: 15px;\n        text-transform: capitalize;\n    }\n    :where(.fresheat-widget-title)::after {\n        content: \"\";\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 30px;\n        height: 2px;\n        background-color: #EB0029; /* var(--theme) */\n    }\n\n    /* List Links */\n    :where(.fresheat-footer-list) {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n    }\n    :where(.fresheat-footer-list) li {\n        margin-bottom: 15px;\n    }\n    :where(.fresheat-footer-list) a {\n        color: #cccccc;\n        text-decoration: none;\n        transition: 0.3s;\n        display: flex;\n        align-items: center;\n        gap: 10px;\n    }\n    :where(.fresheat-footer-list) a:hover {\n        color: #EB0029;\n        padding-left: 5px;\n    }\n\n    /* Social Icons */\n    :where(.fresheat-social-links) {\n        display: flex;\n        gap: 10px;\n        margin-top: 20px;\n    }\n    :where(.fresheat-social-btn) {\n        width: 36px;\n        height: 36px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        color: #fff;\n        text-decoration: none;\n        transition: 0.3s;\n    }\n    :where(.fresheat-social-btn):hover {\n        background: #EB0029;\n        border-color: #EB0029;\n    }\n\n    /* Newsletter Form */\n    :where(.fresheat-footer-form) {\n        display: flex;\n        margin-top: 20px;\n        background: #fff;\n        border-radius: 5px;\n        padding: 5px;\n    }\n    :where(.fresheat-footer-input) {\n        border: none;\n        padding: 10px;\n        width: 100%;\n        outline: none;\n        color: #333;\n    }\n    :where(.fresheat-footer-submit) {\n        background: #FC791A;\n        border: none;\n        color: #fff;\n        padding: 0 15px;\n        border-radius: 4px;\n        cursor: pointer;\n    }\n\n    /* Copyright Bar */\n    :where(.fresheat-copyright) {\n        background-color: #EB0029; /* var(--theme) */\n        padding: 20px 0;\n        text-align: center;\n        font-size: 14px;\n    }\n    :where(.fresheat-copyright-flex) {\n        display: flex;\n        justify-content: space-between;\n        flex-wrap: wrap;\n    }\n    @media (max-width: 767px) { \n        :where(.fresheat-copyright-flex) { flex-direction: column; gap: 10px; text-align: center;} \n    }\n    :where(.fresheat-copyright) a { color: #fff; text-decoration: none; margin-left: 15px; }\n\n    /* Background Shapes */\n    :where(.fresheat-bg-shape) { position: absolute; z-index: 0; pointer-events: none; opacity: 100; }\n    :where(.shape-1) { bottom: 0; left: 0; }\n    :where(.shape-2) { top: 0; right: 0; }\n\n</style>"}
className={`w-html-embed`} />
<div
className={`w-element c13hnv0z cfsv9jl c14tih19 c1ez9nzu cbiha9i c1u0xart czfwn1m cg7uw93 cnopvw8 c1phe92h c1yly58e c1s8dc6k c1pd5lmk c17r8qow c11u8iym c173o7cs c2ckal1 c1oyd4d c466xhk c18f1wz5 cfrn3pi c1nm1s3c cf6nu9m c1kpa8e0 ${"fresheat-container"}`}>
<div
className={`w-element c13hnv0z cdj6zco c3yerh3 cjmnbcn c1nnk20i c1whc3ty cp88ou cru1m34`}>
<Image
src={"/assets/Logo_Text_W_vntPICypcnw5KugUDHskF.png"}
width={1157}
height={352}
alt={""}
className={`w-image cs0onvz ca8d5ey c1fikhfu cl607r8 c14blty cefnw6i ccvz5rj c1mqvi6w`} />
<div
className={`w-element c13hnv0z c1bf3ijt ${"fresheat-social-links"}`}>
<Link
href={"#"}
className={`w-element cjqgwbo c1im7wwy c1p4kqy c9e0rc6 cohs2az cl1oi6j chutxsd c1h2c135 c19w4rwi c14jxpjk cdt6kfx covlsxw c5lyuxc c1j48f85 cyl2gs3 c9zkwbi cmal8v c13hnv0z czfwn1m cg7uw93 cr08oho ${"fresheat-social-btn"}`}>
<Image
src={"/assets/Instagram_Icon_6ZAVI-6CBwbeBF9fxL4wU.webp"}
width={1200}
height={1200}
alt={""}
className={`w-image c1crzujv ca8d5ey cl607r8 c1fikhfu c1s11m1j c1ci15r2 ckswuo6 cpwshut c1us88he`} />
</Link>
<Link
href={"#"}
className={`w-element cjqgwbo c1im7wwy c1p4kqy c9e0rc6 cohs2az cl1oi6j chutxsd c1h2c135 c19w4rwi c14jxpjk cdt6kfx covlsxw c5lyuxc c1j48f85 cyl2gs3 c9zkwbi cmal8v c13hnv0z czfwn1m cg7uw93 cr08oho ${"fresheat-social-btn"}`}>
<Image
src={"/assets/FaceBook_Icon_vs68ly2s6cNSeTh03yHRC.webp"}
width={1200}
height={1200}
alt={""}
className={`w-image c1crzujv ca8d5ey cl607r8 c1fikhfu c1s11m1j c1us88he c1ci15r2 ckswuo6 cpwshut`} />
</Link>
<Link
href={"#"}
className={`w-element cjqgwbo c1im7wwy c1p4kqy c9e0rc6 cohs2az cl1oi6j chutxsd c1h2c135 c19w4rwi c14jxpjk cdt6kfx covlsxw c5lyuxc c1j48f85 cyl2gs3 c9zkwbi cmal8v c13hnv0z czfwn1m cg7uw93 cr08oho ${"fresheat-social-btn"}`}>
<Image
src={"/assets/X_Icon_9gr3igWpqvXyir7pZGvPb.png"}
width={320}
height={320}
alt={""}
className={`w-image c17jwku8 ca8d5ey cl607r8 c1fikhfu c11wjd4q c8o7zmw c1b46mis ch31p9m cppm2zy c1us88he`} />
</Link>
<Link
href={"#"}
className={`w-element cjqgwbo c1im7wwy c1p4kqy c9e0rc6 cohs2az cl1oi6j chutxsd c1h2c135 c19w4rwi c14jxpjk cdt6kfx covlsxw c5lyuxc c1j48f85 cyl2gs3 c9zkwbi cmal8v c13hnv0z czfwn1m cg7uw93 cr08oho ${"fresheat-social-btn"}`}>
<Image
src={"/assets/Youtube_Icon_WTpKZBS04inWK1hyvKj-_.webp"}
width={960}
height={673}
alt={""}
className={`w-image c1crzujv ca8d5ey cl607r8 c1fikhfu c1s11m1j c1ci15r2 ckswuo6 cpwshut c1us88he c1cs3jc0`} />
</Link>
</div>
</div>
<div
className={`w-element c1k57wtb c1ha3ch9 cw319tw c64dk3n cqnpr1z c13hnv0z cdj6zco c1ljn9ju c1gy5v3d c109qgub c1juz4tw c15raj1y ciea8de c1l0r18c cr3bkx6 ckywas8 ct8fc10 cyr5yyj cpfmnbn c1c6hyn3 c1cc4guj cv1ic8u co4vurl c1whc3ty c1nnk20i c1sxdzte cro104h c1t1wvie cirfj1w ${"fresheat-footer-top"}`}>
<div
className={`w-element ${"fresheat-contact-box"}`}>
<div
className={`w-element c6bi29g c1tg3iz5 cppm2zy cex24uz c1mfjbz8 c1xsybs1 c14xhif6 cqz8us7 c6hzr07 c17jwku8 c1041set c11wjd4q c1aohput c1vocpp crc72mq ${"fresheat-contact-icon"}`}>
<Image
src={"/assets/Address_PKDXiby2TqLDW_a_1znHo.png"}
width={512}
height={512}
alt={""}
className={`w-image c1crzujv c1i26zel c1djsscz cztpulk c1thnzb0 cspupja c1s11m1j`} />
</div>
<div
className={`w-element cbuomnx czu4lxl c1knrag8 c8mdtak c8abrlb cgkz1j0 c1va3ivy c11ter25 c1t7o0al c17yl5p9 ${"fresheat-contact-info"}`}>
<h6
className={`w-element c1lz7wn4 c1lpvuqs`}>
{"Address"}
</h6>
<p
className={`w-element c1mnwxt8 cpfmnbn c1ce6ibn cuib9ri crspql3 cm6loog c1j9whkr c17gsc9i`}>
{"6362 Lorem Ipsum Streets"}
</p>
</div>
</div>
<div
className={`w-element ${"fresheat-contact-box"}`}>
<div
className={`w-element c6bi29g c1tg3iz5 cppm2zy cex24uz c1mfjbz8 c1xsybs1 c14xhif6 cqz8us7 c6hzr07 c17jwku8 c1041set c11wjd4q c1aohput c1vocpp crc72mq ${"fresheat-contact-icon"}`}>
<Image
src={"/assets/Mail_hbYpwTfYxZbZd0zt6FMGV.png"}
width={512}
height={512}
alt={""}
className={`w-image ccirjws c1fvjjby cu13air cfx7zqu c1vi4xag cspupja c1dkhjsu c1h6zxid c1ev9yce c1fij3np`} />
</div>
<div
className={`w-element c8abrlb cgkz1j0 c1va3ivy czu4lxl c8mdtak cbuomnx c1knrag8 c1c2nini cv6t1k0 c8gjgif ${"fresheat-contact-info"}`}>
<h6
className={`w-element c1lz7wn4 c1lpvuqs`}>
{"Send Email"}
</h6>
<p
className={`w-element c1mnwxt8 cpfmnbn cj9l1k0 c1c6hyn3 c1j9whkr c1ce6ibn c17gsc9i`}>
{"loremipsum@example.com"}
</p>
</div>
</div>
<div
className={`w-element ${"fresheat-contact-box"}`}>
<div
className={`w-element c6bi29g c1tg3iz5 cppm2zy cex24uz c1mfjbz8 c1xsybs1 c14xhif6 cqz8us7 c6hzr07 c17jwku8 c1041set c11wjd4q c1aohput c1vocpp crc72mq ${"fresheat-contact-icon"}`}>
<Image
src={"/assets/Phone_UQ6jDzN8Wu-lKJUrujJrz.png"}
width={512}
height={512}
alt={""}
className={`w-image ccirjws c1fvjjby cu13air cfx7zqu c1vi4xag cspupja c1dkhjsu c1h6zxid c1ev9yce c1fij3np c1hquv9t c1cs3jc0 c16vtv4l`} />
</div>
<div
className={`w-element c8abrlb cgkz1j0 c1va3ivy czu4lxl c8mdtak cbuomnx c1knrag8 c11ter25 c1t7o0al c17yl5p9 ${"fresheat-contact-info"}`}>
<h6
className={`w-element c1lz7wn4 c1lpvuqs`}>
{"Emergency Call"}
</h6>
<p
className={`w-element c1mnwxt8 c1j9whkr c1ce6ibn c17gsc9i`}>
{"+81 3 479 xxxx"}
</p>
</div>
</div>
</div>
</div>
<div
className={`w-element cc52l67 c69dy50 cq23j2p c173o7cs ${"fresheat-copyright"}`}>
<div
className={`w-element ${"fresheat-container"}`}>
<div
className={`w-element ${"fresheat-copyright-flex"}`}>
<span
className={`w-element`}>
{"LOREM IPSUM"}
</span>
</div>
</div>
</div>
<Image
src={"/assets/footerShape1_1_te4lUnAtOVVHH1Xm3Xv10.png"}
width={161}
height={253}
alt={""}
className={`w-image c14tih19 cspupja cck8ll0 c1in9aqu c1ff0rza c1b88p6n ${"fresheat-bg-shape shape-1"}`} />
<Image
src={"/assets/footerShape1_4_m__MxdhpfJ5Tma6zWK7lB.png"}
width={212}
height={279}
alt={""}
className={`w-image c1mx206x cc3u05m c13hnv0z c1yly58e cxyvny4 czsub8w cspupja ctyqunn ${"fresheat-bg-shape shape-2"}`} />
</footer>
</Body>
}


      export { Page }
    