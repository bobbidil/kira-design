/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Fragment as Fragment_1, HtmlEmbed as HtmlEmbed, Slot as Slot, Image as Image, Box as Box } from "@webstudio-is/sdk-components-react";
import { Body as Body } from "@webstudio-is/sdk-components-react-router";


      export const projectId = "42d12f85-6e68-4c7f-b1cb-6625c1a526de";

      export const lastPublished = "2025-12-09T10:30:09.590Z";

      export const siteName = "Kira Design";

      export const breakpoints = [{"id":"Tt5uQsLO6VX8Wld3Fb0Uf"},{"id":"UJ_jdvDCCaVutj9gRH_RL","maxWidth":991},{"id":"LHnGSfrmeiBjlbJG5sLom","maxWidth":767},{"id":"VsBkbLSLorock0elwza3l","maxWidth":479},{"id":"VLxk_AWaDSR0uenI-7KsQ","minWidth":1920}];

      export const favIconAsset: string | undefined =
        "KI_Porp_CRYrDRjI8FNf9DXSMaTcJ.png";

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        ["LibreBaskerville-SemiBoldItalic_kwHq0kBmnyhhiRDsa8FQj.ttf","WixMadeforDisplay-SemiBold_peNYW0f80Pl0dHzNeE8JP.ttf","LibreBaskerville-MediumItalic_sGC3nBWq0tgxDUuGau5Og.ttf","WixMadeforDisplay-Medium_aaXRQgCjEILhT8B3OjoOu.ttf","LibreBaskerville-Medium_V2eGWNyZO6SLlYzyGRSIG.ttf","LibreBaskerville-Bold_JspR9w1TxOI8EfeACn0Fw.ttf","WixMadeforDisplay-Bold_VmoNimxX9F93EMm4SxG9T.ttf","WixMadeforDisplay-Regular_C68Kz-ZRwAMf80ij7KmZi.ttf","LibreBaskerville-BoldItalic_VT77D9g8eZSDdKcBKaVZK.ttf","LibreBaskerville-Italic_ENGC2cRjeK-UL-szX-82o.ttf","WixMadeforDisplay-VariableFont_wght_xTHMJBV5O7zj0XWR5GuPA.ttf","WixMadeforDisplay-ExtraBold_GEdBgaPu7Ism4OTNXYVzJ.ttf","LibreBaskerville-Regular_wRv7VxoFGtFmpyimoC5IQ.ttf","LibreBaskerville-SemiBold_WG7LRv3h2Sva0eKI_pbje.ttf"]

      export const pageBackgroundImageAssets: string[] =
        ["Advantage_Grad_zPVhkOuhdrPxIyga_7i8j.png","Hydrated_Cheek_1_rkDAHuvdmhDwqMFjqeKuU.png","WomanShot_9EgDn_otqmLcobRKAeBla.png","Bar_With_Leaf_Right_Scale_jae8_Z7BPHxJXIZzAxCXe.png","Company_logo_white_ojo4nBn2RmvBQEi25ai4t.png","Vector_(1)_hV1GB-VQMHfvAVCe-iPZg.png","UB_TextBG_omna5XyZp0qHgZ-jYmGuU.png","Top_UB_6EbM_N5dIQTiiVAdr1iEI.png","UB_TextBGR_PYWTdHE-7xsOHulMbqD3L.png","Subtract_(1)_(1)_H4oZxToCdi1QLrgeotnuY.png","Bot_UB_yrdfIYv5JZ8XjnUsh959K.png","Company_logo_white_4_Xw1lsh9_QawK-Gxst0rKt.png","Radiance_HNih_inM1hzzbZZdvz1UO.png","Aurora_Cut_Mob_2FAuQV5j9JAfYuJ0DSeu-.png","Vector2_WCNIPEAi2KNfL3cCGWtIq.png","Bar_With_Leaf_Scale_jVEqju3l_N0di0ZaAm-8C.png","Transparent_Logo_5pyKHWx5wOmkcbQoVIO49.png","Beauty_Mask_Logo__J-8R09X0BEIU3pC8TPkz.png","Aurora_Cut_1_3RrQ8gilPFb5Cy7X7GRh1.png","Transformed_mV4ODCqz4asVlGis9yI7w.png","Soothes_and_Calms_EuohvOcdhtPo9zKlczVdR.png","WomanShot_Desk_2_PQ-waNr7eFOPy0_5bKaRh.png","Final_Sell_-_Green_Vector_XzVDyfj86wwNVEci87QP5.png"]

      

      const Page = (_props: { system: any; }) => {
return <Body
className={`w-element`}>
<Slot>
<Fragment_1>
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
</Fragment_1>
</Slot>
<HtmlEmbed
code={"<style>\n  /* Base Button Style */\n.hero-cta {\n  \n  /* The Secret Sauce: Smooth Transition */\n  transition: all 0.25s ease-in-out;\n}\n\n/* Hover State */\n.hero-cta:hover {\n  background-color: #b7da79;\n  color: #ffffff; \n  border-color: #b7da79;\n  \n  /* Size change - Scales up by 5% */\n  transform: scale(1.05);\n}\n    /* Base Button Style */\n.hero-cta-2 {\n  \n  /* The Secret Sauce: Smooth Transition */\n  transition: all 0.25s ease-in-out;\n}\n\n/* Hover State */\n.hero-cta-2:hover {\n  background-color: #ffc9cf;\n  color: #ffffff; \n  border-color: #ffc9cf;\n  \n  /* Size change - Scales up by 5% */\n  transform: scale(1.05);\n}\n</style>"}
className={`w-html-embed`} />
<div
className={`w-element c1mrdp2v c1c6pc9m c1wcam6x c1s0h5jn c13d3ul5 c16lbv1s cc52l67 cuy570l c69dy50 cq23j2p c1c24u8p cjt2m6p c13osye9 ce3gse0 chj8ial cp3ndwh c6qod4o cnuvfzu c13hnv0z cfsv9jl czfwn1m cg7uw93 cw8osgr cwuskgu c1p4kqy cxmtpmv`}>
<Image
src={"/assets/Colored_Company_Mask_Logo_T31uiJos_EDKb02DQurDR.png"}
width={655}
height={655}
alt={""}
className={`w-image c1hubbwi cr0499d co9x8yn c156h4fe cex24uz c8h0cbu`} />
<h1
className={`w-element c5lhvgj c114gzb1 c3si0il c17jm1ja cnddqm0 c1isp9xc c142bi29 c1w625zh cfg5ylh c1uaz4pr c1bdcq2k c1pt7ru0 c78f6k5 c2ykpd5 cjrj0ej`}>
{"Lorem Ipsum"}
</h1>
</div>
<div
className={`w-element c838wox cesyt83 c1sdxxzv c197z3qo cpfmnbn c1c6hyn3 cj9l1k0 c2d2z8y c1wvqgkp c35hfq3 cc52l67 c173o7cs c1ckn62w crdedwm c13hnv0z cdj6zco c1ljn9ju c1gy5v3d c11ptxw3 c1jh5zhw c138eaie cqrw3tk c11igiq8 c1kl20pp c1xgktl7 cwmcrdx ctsdxrl csy84ic c13f9e97 cieagxd csympq8 ctefrfd`}>
<div
className={`w-element cpfmnbn c1c6hyn3 cj9l1k0 cv0xxs1 c2oqi4f cc52l67 c173o7cs c109gy6z cp88ou cru1m34 cogm717 c13osye9 cjs5jfs c1yly58e c17r8qow c1wicndj c13hnv0z cdj6zco c1kr74q3 c1xcug5e cnmc0x cwcvcbh c1pzylyx c1v0zej9 c4hslir c12v8cv9 c1dthkkc cjwiiz4 c15rz99y c15x5g9m ct8fc10 ckywas8`}>
<h1
data-ani={"slide-up"}
className={`w-element czu882a csx4m8w cjsxkwv cgbn6et cdzvppq c1v0zej9 c1exwz7t c1fhkb2b c16gjnq2 c1isp9xc c1i5fjmx ch2iecu c1llxcql c14dwnrk csvxk1e`}>
{"Radiant Skin "}
{""}
<br />
{""}
{"In 10 Minutes"}
</h1>
<h1
data-ani={"slide-up"}
className={`w-element czu882a csx4m8w cjsxkwv c1tcj0gw c1qcaaz2 cgv2a7w c1fhkb2b c1v0zej9 cnixgtc cv688ly cnqy3ha ca9gmel c1ap3o23 ch2iecu c807me2 c1v1udt8 c1f5kdxc`}>
{"Facemask Glows"}
{""}
<br />
{""}
{"In just one use"}
</h1>
</div>
<div
className={`w-element c1yly58e c17r8qow c1s8dc6k c1ae83n c178kq8k c1ahxz4z c1j0zrcc c1bdkmrq chxsv5j c1u9q28o c1r6uwig ctiod0x c197z3qo cvi58pq corj42r c1xaaejt`}>
<div
className={`w-element cpfmnbn c6095d9 c1c6hyn3 cc52l67 c69dy50 cru1m34 cr0mrr0 c1ny6la0 c6qod4o c16ppt9d cq1p7wy cmhne3d c17tk547 c1hbfi0g c158lg7o c1n822tz c1q0th6w c11xxi72 c1pzylyx c1yly58e c1s8dc6k c1yogp50 c2f6k4z c1pcci6l c15t31xx c1176r7o c1x2ybgk cgkr97t c11psw9i`}>
<button
data-ani={"slide-up"}
className={`w-element c5kiu11 cwj5rh1 c19v9gn4 c114g01e c442aik c8aj310 cuhbja c1mrdp2v c1c6pc9m c1wcam6x c1s0h5jn c7zq51m cupfqja c1ctc1yx cup7w90 c6s4bs9 cfej9c7 cpxdfrl ctuko7x c15i570i cc7rqbv c181ldc8 cj7om0q c1j1tjaf cw6dpjl cfu3zra cg75hi0 ca9gmel c16gjnq2 ch2iecu c1jwphfw ${"hero-cta"}`}>
{"Get Radiant"}
</button>
</div>
</div>
<Image
src={"/assets/WomanShot_Desk_NoLogo_Lkb0fmQnzlL8cJCccweFT.png"}
width={1451}
height={871}
alt={""}
data-ani={"fade"}
className={`w-image cc3u05m c1yly58e c14tih19 c1pd5lmk cliwean ce20j0k cu0lfas`} />
<Image
src={"/assets/Transparent_Logo_5pyKHWx5wOmkcbQoVIO49.png"}
width={451}
height={451}
alt={""}
data-ani={"fade"}
className={`w-image cc3u05m c19c274l c1bw5ft3 c1ng5y73 c1bci51o cspupja cu0lfas cjd3eu6 cj6ctr8`} />
</div>
<div
className={`w-element c17mmuyq c1mh2eu9 co8gdtw cv0xxs1 c2oqi4f cfej9c7 c109gy6z cc52l67 cicv1ox cvi58pq c197z3qo cvfyihh cp88ou cq23j2p c11mkg2u c1tjpby8 catlwle c1c1e8ka c13hnv0z c1ljn9ju c1aqzxuf c1wacgvb czjc07 cdgqdgy clj1wdb c1mtnr0r c1gkcscr ci6p695 c1s4k6qm cucijuc c1n7pdy5 cms2d1e c1yly58e c17r8qow c1s8dc6k c1jfmw9t cwpkxi canmp2q c6nggyu cq1ne6s cf277e7 c1d6l1ov c1h725l c4a94z8 c52dxk7 cogxuid c1kpa8e0 cbpdmji c1d118k3 c1o4d8s6 cp6bxsh cpibz08 cgu2lfb c1gtu4g3 c1nkx43i cwmcrdx c10wtf2y csy84ic c13f9e97 cieagxd csympq8 c14btmgp c1uqc5lh cwtneu8 c1wbnc3n cyhfpca c117aq07 c1c7xsto chuf7ws c7kqd54`}>
<div
className={`w-element cpfmnbn c1c6hyn3 cj9l1k0 c2d2z8y c1wvqgkp cc52l67 c173o7cs c1nn7qpq cp88ou cq23j2p c1fchr2y c18kidzz cjs5jfs cuihm0a c1yku8m2 c31wx3l c13hnv0z cdj6zco c1q3ou0e c1bcmaqh cyhfpca`}>
<h1
className={`w-element czu882a csx4m8w c6s4bs9 c7tbmbf cdzvppq c1ro4xdn c8qpvct cpfmnbn cxc65p0 cys3xvt c1isp9xc c1regzgk cw2h1uq cg75hi0 c16gjnq2 c1fhkb2b c1jx1py2 citp4x1 c14cmd0h ce20ie5 c1pxtt56 cbkojqr c9jghfh`}>
{"Nourish & Revive Core Benefits"}
</h1>
<h1
data-ani-progress={"slide-right"}
className={`w-element czu882a csx4m8w c6s4bs9 cvfaq9w cdzvppq c1ro4xdn cj6ctr8 c1isp9xc c1regzgk cw2h1uq cg75hi0 c16gjnq2 c1fhkb2b c1jx1py2 c11twq70 cxpvxve c9jghfh c1hz8abl`}>
{"Nourish &"}
{""}
<br />
{""}
{"Revive Core Benefits"}
</h1>
<div
data-ani-progress={"slide-left"}
className={`w-element cc52l67 c173o7cs cp88ou cru1m34 c13hnv0z cdj6zco c1ljn9ju cg7uw93 c1jx1py2 c16wugen c1pxtt56`}>
<h1
className={`w-element czu882a co554py cjsxkwv c1blc3he cdzvppq clytzz6 ca9gmel c1jovg0u cnixgtc cgqy2xs c1v0zej9 cvd99tj c1fc4xp3 ca39ezi c1pxtt56`}>
{"Skin-Loving Essentials"}
</h1>
<p
className={`w-element czu882a csx4m8w cp8crrr cyhpobn c1jsq5qe cpcobf2 c1jovg0u ca9gmel cnixgtc cud7ian c1usvwq3 ctxdr62 chxsv5j ch6pjrt c1lu53kv c1v0zej9 c1jx1py2 c15ytydr cjbumpi czl6y4 cfveewr c1esjq3u`}>
{"• Collagen for plumpness"}
{""}
<br />
{""}
{"• Rosemary for glow"}
{""}
<br />
{""}
{"• Lavender for calm"}
</p>
</div>
</div>
<Image
src={"/assets/Mask_group_wVVRz8uVpLaGG3akg6YBn.png"}
width={1574}
height={1398}
alt={""}
className={`w-image c14tih19 cfoet7 c1tuinma c1k15m98 c1rkmawk ckj7f4p c1k07e35 c1303ek3 c1usvwq3 ctxdr62 c6ai3g7 c1vi4xag c1xjq1ia c1akemag ce20j0k cbg7ur cxzmlij c1qr5y2b cqtcp12 c1hz45ru cxpvxve c17bjemb ceidssd cdgvz13 cfysxlz c1yiwyvv cvgmrne c1hz8abl cj6ctr8`} />
<Image
src={"/assets/Vector_(1)_hV1GB-VQMHfvAVCe-iPZg.png"}
width={2880}
height={1398}
alt={""}
className={`w-image c1wacgvb c1yly58e cc3u05m c1hh8vp4 c1gh83ky cu8h30b ctdr4oe c6ai3g7 cxnybdh c1s8dc6k c1xjq1ia c1akemag ce20j0k ci38l1c c1hz8abl`} />
</div>
<div
className={`w-element cc52l67 c173o7cs c69dy50 cru1m34 c2ckal1 c1oyd4d c14s2a9 cies9fq citp4x1 c1s2yqin cirfj1w c466xhk c3p141o c1u0dhsn c14btmgp cjt3g3g c1c7xsto chuf7ws c1hz8abl`}>
<div
className={`w-element cpfmnbn c1c6hyn3 cj9l1k0 cv0xxs1 c2oqi4f cc52l67 c173o7cs c109gy6z cp88ou cru1m34 cogm717 c13osye9 cjs5jfs co7h28o c1jtw9gj`}>
<h1
className={`w-element czu882a csx4m8w cjsxkwv c1oagunn cdzvppq c1isp9xc cwcojan crl65b ccubxy3 cpw73dk`}>
{"Unique Benefits"}
</h1>
<h1
className={`w-element czu882a csx4m8w cjsxkwv c1tcj0gw c1qcaaz2 cgv2a7w ca9gmel c1j9vgty c52dnt6 c1afxdyw c16kkn2`}>
{"Facemask Glows"}
{""}
<br />
{""}
{"In just one use"}
</h1>
</div>
<div
data-ani-progress={"slide-up"}
data-ani-children={"true"}
className={`w-element cc52l67 c173o7cs cso3ylr c174e8y0 cpfmnbn cj9l1k0 c1c6hyn3 c1s2yqin c466xhk c1fsr8ll cka6ys4`}>
<div
className={`w-element cpfmnbn c1c6hyn3 cc52l67 c1enzond cq23j2p c173o7cs c1cjjlbb c124ax7p c1s2yqin crzkrw2 c1qni67n`}>
<div
className={`w-element c1hohx2z cru0vrz c1f1ms6b cw5os1f c1mvqfwg c1o8zdrv cni027i c1orcbrq cc52l67 c173o7cs c1enzond cru1m34 c656bnl cj63gtg cdkobwg cf6lm31 c1prrfcc c1evshwg c1yum3ze cvc4bdb c15jaarb c1s2yqin c466xhk crzkrw2 c1qni67n chzs024 cfapy0d ctj7myy cawu9wm c1c7xsto chuf7ws c1exdfq4 cx0spjg`}>
<div
className={`w-element cpfmnbn c1c6hyn3 c1yd5bbn cwknp37 cvi58pq c197z3qo cc52l67 c1enzond c1gozthy c173o7cs cv0xxs1 ckyz5q1 c1w3bmdk c1ottgzp c1xtp7t6 cyhfpca c18pcol c1s2yqin crzkrw2 c1qni67n c466xhk cysiffk c1307liu c1ebcsy4 c1wbnc3n chbrrf3 c1gm4pwu cqnps9b c13f9e97 cieagxd c9h1cwy`}>
<h1
className={`w-element czu882a csx4m8w c13lp40e cc52l67 c69dy50 c1gozthy cpfmnbn c1c6hyn3 cj9l1k0 c2d2z8y cdkq5ln c1wvqgkp cjsxkwv c1isp9xc crl65b ctwbdys ccubxy3 c1n3cdma c1sk5qw c23rnz6 c1ugfnmm`}>
{"Instant Skin Hydration"}
</h1>
<hr
className={`w-element c13kea2h c1hbfi0g c158lg7o covlsxw c1n822tz c1f1ms6b c69sovp csx4m8w czu882a c1ivh7bt cup7w90 c8635h8 c175gw0n c99j39c c8qpvct c69dy50 cru1m34 c13d3ul5 c16lbv1s cuejh0i c4ng7ru c16gw1ad cjv2sc3 clytzz6 cuhbja cv971fu cnmtlhu c1qcaaz2 c141csc cxgl9ip ctwbdys crl65b cysiffk c1c7xsto chuf7ws ccg26ev c3np8wc cqpmlx3 c1r4nbbe cvfxkjz coe828v c8ho0y9 cie1oay c1yum3ze cvc4bdb cgby5tr ciwnz04 c1fpxi7x cu9pf0g c97g2qn c1byahcf`} />
</div>
<p
className={`w-element c1f1ms6b ctt2rau c11jvhdy ctanv61 c6u0e59 czu882a cjsxkwv c1nx7rlk c1ltdv62 c1d8qmpi c1wvqgkp csx4m8w c1i4rpd cc52l67 cp88ou cru1m34 ca9gmel co7h28o c137b1dt c1c0x7dy carpfwt cfjtwyc ciai0zp c1myb2ld c1s9gosp c1fue5bt c1s2yqin crzkrw2 c1qni67n`}>
{"Revitalizes and hydrates your — "}
{""}
<br />
{""}
{"skin immediately, quenching dryness & restoring softness"}
</p>
</div>
</div>
<div
className={`w-element cpfmnbn c1c6hyn3 cc52l67 cp88ou cq23j2p c173o7cs c1cjjlbb c124ax7p c1s2yqin cgu2lfb cf2mmu9`}>
<div
className={`w-element c1hohx2z cru0vrz c1f1ms6b cw5os1f c1mvqfwg c1o8zdrv cqk1ouq cejm84w cc52l67 c173o7cs cp88ou cru1m34 c656bnl cj63gtg c1fpkrbz c79d1p7 c1prrfcc c1evshwg c1yum3ze cvc4bdb c15jaarb c1s2yqin c466xhk cgu2lfb cf2mmu9 c1hg97e2 ctfmkqg cf5x93k c1nkrf7g c1c7xsto chuf7ws c1exdfq4 cx0spjg`}>
<div
className={`w-element cpfmnbn c1c6hyn3 c1yd5bbn c4r6rlx cvi58pq c197z3qo cc52l67 cp88ou c1gozthy c173o7cs ci28utw c2oqi4f c1w3bmdk c1ottgzp c1xaaejt cyhfpca c94u7o8 c1s2yqin cgu2lfb c1qni67n c466xhk cysiffk c1307liu c1ebcsy4 c1wbnc3n chbrrf3 c1gm4pwu cjlb84u c13f9e97 cieagxd ckp30c2`}>
<h1
className={`w-element czu882a csx4m8w c13lp40e cc52l67 c69dy50 cru1m34 cpfmnbn c1c6hyn3 cj9l1k0 c2d2z8y cdkq5ln c1wvqgkp c1isp9xc crl65b ctwbdys ccubxy3 c1n3cdma c1sk5qw c23rnz6 c1ugfnmm`}>
{"Skin glow revival"}
</h1>
<hr
className={`w-element c13kea2h c1hbfi0g c158lg7o covlsxw c1n822tz c1f1ms6b c69sovp csx4m8w czu882a c1ivh7bt cup7w90 c8635h8 c175gw0n c99j39c c8qpvct c69dy50 cru1m34 c13d3ul5 c16lbv1s cuejh0i c4ng7ru c16gw1ad cjv2sc3 clytzz6 cuhbja cv971fu cnmtlhu c1qcaaz2 c141csc cxgl9ip ctwbdys crl65b cysiffk c1c7xsto chuf7ws ccg26ev c3np8wc cqpmlx3 c1r4nbbe cvfxkjz coe828v c8ho0y9 cie1oay c1yum3ze cvc4bdb cgby5tr ciwnz04 c1fpxi7x cu9pf0g c97g2qn c1byahcf`} />
</div>
<p
className={`w-element c1f1ms6b ctt2rau c11jvhdy ci28utw c6u0e59 czu882a cjsxkwv c1nx7rlk c1ltdv62 c1d8qmpi c1wvqgkp csx4m8w c1owv3by cc52l67 cp88ou cru1m34 ca9gmel c1307liu c1176r7o c1c0x7dy carpfwt cfjtwyc ciai0zp c1myb2ld c1s9gosp`}>
{"Brightens and evens your skin, revealing a luminous, healthy-looking glow day by day"}
</p>
</div>
</div>
<div
className={`w-element cpfmnbn c1c6hyn3 cc52l67 c1enzond cq23j2p c173o7cs c1cjjlbb c124ax7p c1s2yqin crzkrw2 c1qni67n`}>
<div
className={`w-element c1hohx2z cru0vrz c1f1ms6b cw5os1f c1mvqfwg c1o8zdrv cni027i c1orcbrq cc52l67 c173o7cs c1enzond cru1m34 c656bnl cj63gtg cdkobwg cf6lm31 c1prrfcc c1evshwg c1yum3ze cvc4bdb c15jaarb c1s2yqin c466xhk crzkrw2 c1qni67n chzs024 cfapy0d ctj7myy cawu9wm c1c7xsto chuf7ws c1exdfq4 cx0spjg`}>
<div
className={`w-element cpfmnbn c1c6hyn3 c1yd5bbn cr1p91u cvi58pq c197z3qo cc52l67 c1enzond c1gozthy c173o7cs cv0xxs1 ckyz5q1 c1w3bmdk c1ottgzp c108abi7 cyhfpca c18pcol c1s2yqin crzkrw2 c1qni67n c466xhk cysiffk c1307liu c1ebcsy4 c1wbnc3n chbrrf3 c1gm4pwu c9ylrfa c13f9e97 cieagxd cha8a0f`}>
<h1
className={`w-element czu882a csx4m8w c13lp40e cc52l67 c69dy50 c1gozthy cpfmnbn c1c6hyn3 cj9l1k0 c2d2z8y cdkq5ln c1wvqgkp cjsxkwv c1isp9xc crl65b ctwbdys ccubxy3 c1n3cdma c1sk5qw c23rnz6 c1ugfnmm cyhfpca cro104h`}>
{"Soothes & Calms"}
</h1>
<hr
className={`w-element c13kea2h c1hbfi0g c158lg7o covlsxw c1n822tz c1f1ms6b c69sovp csx4m8w czu882a c1ivh7bt cup7w90 c8635h8 c175gw0n c99j39c c8qpvct c69dy50 cru1m34 c13d3ul5 c16lbv1s cuejh0i c4ng7ru c16gw1ad cjv2sc3 clytzz6 cuhbja cv971fu cnmtlhu c1qcaaz2 c141csc cxgl9ip ctwbdys crl65b cysiffk c1c7xsto chuf7ws ccg26ev c3np8wc cqpmlx3 c1r4nbbe cvfxkjz coe828v c8ho0y9 cie1oay c1yum3ze cvc4bdb cgby5tr ciwnz04 c1fpxi7x cu9pf0g c97g2qn c1byahcf`} />
</div>
<p
className={`w-element c1f1ms6b ctt2rau c11jvhdy ctanv61 c6u0e59 czu882a cjsxkwv c1nx7rlk c1ltdv62 c1d8qmpi c1wvqgkp csx4m8w c1i4rpd cc52l67 cp88ou cru1m34 ca9gmel co7h28o c137b1dt c1c0x7dy carpfwt cfjtwyc ciai0zp c1myb2ld c1s9gosp c1fue5bt c1s2yqin crzkrw2 c1qni67n`}>
{"Unwind yourself in a calming ritual"}
{""}
<br />
{""}
{"   drifting in pure peaceful relief,"}
{""}
<br />
{""}
{"         melting all the stress away"}
</p>
</div>
</div>
<div
className={`w-element cpfmnbn c1c6hyn3 cc52l67 cp88ou cq23j2p c173o7cs c1cjjlbb c124ax7p c1s2yqin cgu2lfb cf2mmu9`}>
<div
className={`w-element c1hohx2z cru0vrz c1f1ms6b cw5os1f c1mvqfwg c1o8zdrv cqk1ouq cejm84w cc52l67 c173o7cs cp88ou cru1m34 c656bnl cj63gtg c1fpkrbz c79d1p7 c1prrfcc c1evshwg c1yum3ze cvc4bdb c15jaarb c1s2yqin c466xhk cgu2lfb cf2mmu9 c1hg97e2 ctfmkqg cf5x93k c1nkrf7g c1c7xsto chuf7ws c1exdfq4 cx0spjg`}>
<div
className={`w-element cpfmnbn c1c6hyn3 c1yd5bbn c1acn5st cvi58pq c197z3qo cc52l67 cp88ou c1gozthy c173o7cs ci28utw c2oqi4f c1w3bmdk c1ottgzp czbjzpc cyhfpca c94u7o8 c1s2yqin cgu2lfb c1qni67n c466xhk cysiffk c1307liu c1ebcsy4 c1wbnc3n chbrrf3 c1gm4pwu c4laelf c13f9e97 cieagxd c7kqd54`}>
<h1
className={`w-element czu882a csx4m8w c13lp40e cc52l67 c69dy50 cru1m34 cpfmnbn c1c6hyn3 cj9l1k0 c2d2z8y cdkq5ln c1wvqgkp c1isp9xc crl65b ctwbdys ccubxy3 c1n3cdma c1sk5qw c23rnz6 c1ugfnmm`}>
{"Total Transformation"}
</h1>
<hr
className={`w-element c13kea2h c1hbfi0g c158lg7o covlsxw c1n822tz c1f1ms6b c69sovp csx4m8w czu882a c1ivh7bt cup7w90 c8635h8 c175gw0n c99j39c c8qpvct c69dy50 cru1m34 c13d3ul5 c16lbv1s cuejh0i c4ng7ru c16gw1ad cjv2sc3 clytzz6 cuhbja cv971fu cnmtlhu c1qcaaz2 c141csc cxgl9ip ctwbdys crl65b cysiffk c1c7xsto chuf7ws ccg26ev c3np8wc cqpmlx3 c1r4nbbe cvfxkjz coe828v c8ho0y9 cie1oay c1yum3ze cvc4bdb cgby5tr ciwnz04 c1fpxi7x cu9pf0g c97g2qn c1byahcf`} />
</div>
<p
className={`w-element c1f1ms6b ctt2rau c11jvhdy ci28utw c6u0e59 czu882a cjsxkwv c1nx7rlk c1ltdv62 c1d8qmpi c1wvqgkp csx4m8w c1owv3by cc52l67 cp88ou cru1m34 ca9gmel c1307liu c1176r7o c1c0x7dy carpfwt cfjtwyc ciai0zp c1myb2ld c1s9gosp`}>
{"From flat, tired, and lackluster skin to radiant and silky smoothness"}
{""}
<br />
{""}
{"— your skin transformed"}
</p>
</div>
</div>
</div>
</div>
<div
className={`w-element cj6ctr8 c173o7cs c69dy50 cru1m34 c2ckal1 c1oyd4d c14s2a9 cies9fq cqnr0l0 c5hkkz4 c1yruud0 c1a3q670 c17qlq4r c11btag9 c1r7f6v cf19arj c13hnv0z cdj6zco c516ezf c1h62ydg cljaiqa ceflqfl cxpvxve`}>
<div
className={`w-element cpfmnbn c1c6hyn3 cj9l1k0 cv0xxs1 c2oqi4f cc52l67 c173o7cs c109gy6z cp88ou cru1m34 cogm717 c13osye9 cjs5jfs c1yly58e c17r8qow c1wicndj c13hnv0z cdj6zco c1kr74q3 c1xcug5e cnmc0x cwcvcbh c1pzylyx c1v0zej9 c4hslir c12v8cv9 c1dthkkc cjwiiz4 c15rz99y c15x5g9m ct8fc10 ckywas8`}>
<h1
data-ani-progress={"slide-right"}
className={`w-element czu882a csx4m8w cjsxkwv cgbn6et cdzvppq c1v0zej9 c1exwz7t c1fhkb2b c16gjnq2 c1isp9xc c1i5fjmx c1llxcql c14dwnrk csvxk1e`}>
{"Unique Benefits"}
</h1>
<h1
data-ani-progress={"slide-left"}
className={`w-element czu882a csx4m8w cjsxkwv c1tcj0gw c1qcaaz2 cgv2a7w c1fhkb2b c1v0zej9 cnixgtc cv688ly cnqy3ha ca9gmel c1ap3o23 c1v1udt8 c1f5kdxc`}>
{"See and feel the benefits"}
{""}
<br />
{""}
{"that elevate your skin"}
</h1>
</div>
<div
data-ani-progress={"slide-up"}
ani-duration={"100"}
data-ani-children={"true"}
className={`w-element cc52l67 c173o7cs cso3ylr c174e8y0 cpfmnbn cj9l1k0 c1c6hyn3 csddijw c13hnv0z cdj6zco cu58ll8 c1nedezl`}>
<div
className={`w-element cpfmnbn c1c6hyn3 cc52l67 c1enzond cq23j2p c173o7cs c1cjjlbb c124ax7p c13hnv0z cfsv9jl czfwn1m c1gy5v3d c1jp7r3w cxzmlij c11ptxw3 c692hwx c1rsiv49 c1j0zrcc c1ahxz4z cvsygjm cuhw4v1 cja7iut c1yckbr3 c1h725l c1i59s8s`}>
<div
className={`w-element c13hnv0z c64dk3n cqnpr1z c1bw5ft3 c1vi4xag c1th6n7q czfwn1m c1gy5v3d c3ruxsi c1k07e35 c10i9n90 c18ecwd4 c1mk8azd cndkst7`}>
<div
className={`w-element c13hnv0z cdj6zco c1ljn9ju c1gy5v3d cogfp7i c4fmdfu`}>
<h1
className={`w-element czu882a csx4m8w c13lp40e cc52l67 c69dy50 cru1m34 cpfmnbn c1c6hyn3 cj9l1k0 cbpmkmj cdkq5ln c1fhkb2b c1v0zej9 c1fsgqz8 csfxzns c10i9n90 c1isp9xc c16gjnq2 c7vgqdq`}>
{"Instant "}
{""}
<br />
{""}
{"Skin Hydration"}
</h1>
<p
className={`w-element c1f1ms6b ctt2rau c11jvhdy c2d2z8y c6u0e59 czu882a c1rh6l5i c1nx7rlk c1ltdv62 c1d8qmpi cv1ic8u csx4m8w c1i4rpd cc52l67 cp88ou cru1m34 c1fhkb2b c1v0zej9 ca9gmel c10i9n90 cjnk495 ccoo17h clq08ci cud9kgk c291xqq`}>
{"Revitalizes and hydrates your — skin immediately, quenching dryness & restoring softness"}
</p>
</div>
</div>
<div
className={`w-element c1hohx2z cru0vrz c1f1ms6b cw5os1f c1mvqfwg c1o8zdrv c8lljpg ciur44f cc52l67 c173o7cs c1enzond cru1m34 c656bnl cj63gtg c1prrfcc cf6lm31 cdkobwg c13hnv0z cfsv9jl c6nmu6p ch1iqgg ccm8p60 czfwn1m c1gy5v3d c1xjq1ia c1akemag c21oodo c10j4ngl c1avdsmy c1clz0h7 csaev8m c1exrmam c1734urt c10i9n90 c1c798n5 c1gkcscr ci6p695 c1s4k6qm cf3n547 c1wzfo5k cms2d1e c1yjue4p c18ecwd4 c9xtqcr coi0kc2`} />
</div>
<div
className={`w-element cpfmnbn c1c6hyn3 cc52l67 c1enzond cq23j2p c173o7cs c1cjjlbb c124ax7p c13hnv0z cfsv9jl czfwn1m c1gy5v3d c1jp7r3w cxzmlij c11ptxw3 c692hwx c13cxsya c1j0zrcc c1ahxz4z c10i9n90 c10m9sg5 c1cmjsgq cja7iut c1d8xom9 c1h725l c180ymad c1x9w7n c13kb6zn`}>
<div
className={`w-element c1hohx2z cru0vrz c1f1ms6b cw5os1f c1mvqfwg c1o8zdrv c8lljpg ciur44f cc52l67 c173o7cs c1enzond cru1m34 c656bnl cj63gtg c1prrfcc cf6lm31 cdkobwg c13hnv0z cfsv9jl c6nmu6p ch1iqgg ccm8p60 czfwn1m c1gy5v3d c1xjq1ia c1akemag c21oodo c10j4ngl cercat7 ctxezha c1m0e51r c1w5jwb1 c1734urt c10i9n90 c1g9epqc c18ecwd4 ct8tq2e c8hgdr0 c1ovpd8p cnd156j`}>
<Image
src={"/assets/Radiance_HNih_inM1hzzbZZdvz1UO.png"}
width={842}
height={683}
alt={""}
className={`w-image c1pd5lmk c1yly58e c14tih19 cspupja c1xjq1ia c1akemag`} />
</div>
<div
className={`w-element c13hnv0z c64dk3n cqnpr1z c1bw5ft3 c1vi4xag c1th6n7q czfwn1m c1gy5v3d c3ruxsi c1k07e35 cwcvcbh c18ecwd4 c1mk8azd ct8fc10 c8vg7fj c1gjknmr cndkst7`}>
<div
className={`w-element c13hnv0z cdj6zco c1ljn9ju c1gy5v3d cogfp7i c4fmdfu`}>
<h1
className={`w-element czu882a csx4m8w c13lp40e cc52l67 c69dy50 cru1m34 cpfmnbn c1c6hyn3 cj9l1k0 cbpmkmj cdkq5ln c1fhkb2b c1v0zej9 c1fsgqz8 csfxzns c10i9n90 c1isp9xc c16gjnq2 c7vgqdq`}>
{"Skin Glow Revival"}
</h1>
<p
className={`w-element c1f1ms6b ctt2rau c11jvhdy c2d2z8y c6u0e59 czu882a c1rh6l5i c1nx7rlk c1ltdv62 c1d8qmpi cv1ic8u csx4m8w c1i4rpd cc52l67 cp88ou cru1m34 c1fhkb2b c1v0zej9 ca9gmel c10i9n90 cjnk495 ccoo17h clq08ci cud9kgk c291xqq`}>
{"Brightens and evens your skin, revealing a luminous, healthy-looking glow day by day"}
</p>
</div>
</div>
</div>
<div
className={`w-element cpfmnbn c1c6hyn3 cc52l67 c1enzond cq23j2p c173o7cs c1cjjlbb c124ax7p c13hnv0z cfsv9jl czfwn1m c1gy5v3d c1jp7r3w cxzmlij c11ptxw3 c692hwx c1rsiv49 c1j0zrcc c1ahxz4z cvsygjm cuhw4v1 cja7iut c1yckbr3 c1h725l c1i59s8s`}>
<div
className={`w-element c13hnv0z c64dk3n cqnpr1z c1bw5ft3 c1vi4xag c1th6n7q czfwn1m c1gy5v3d c3ruxsi c1k07e35 c10i9n90 c18ecwd4 c1mk8azd cndkst7`}>
<div
className={`w-element c13hnv0z cdj6zco c1ljn9ju c1gy5v3d cogfp7i c4fmdfu`}>
<h1
className={`w-element czu882a csx4m8w c13lp40e cc52l67 c69dy50 cru1m34 cpfmnbn c1c6hyn3 cj9l1k0 cbpmkmj cdkq5ln c1fhkb2b c1v0zej9 c1fsgqz8 csfxzns c10i9n90 c1isp9xc c16gjnq2 c7vgqdq`}>
{"Soothes & Calms"}
</h1>
<p
className={`w-element c1f1ms6b ctt2rau c11jvhdy c2d2z8y c6u0e59 czu882a c1rh6l5i c1nx7rlk c1ltdv62 c1d8qmpi cv1ic8u csx4m8w c1i4rpd cc52l67 cp88ou cru1m34 c1fhkb2b c1v0zej9 ca9gmel c10i9n90 cjnk495 ccoo17h clq08ci cud9kgk c291xqq`}>
{"Unwind yourself in a calming ritual, drifting in pure peaceful relief, melting all the stress away"}
</p>
</div>
</div>
<div
className={`w-element c1hohx2z cru0vrz c1f1ms6b cw5os1f c1mvqfwg c1o8zdrv c8lljpg ciur44f cc52l67 c173o7cs c1enzond cru1m34 c656bnl cj63gtg c1prrfcc cf6lm31 cdkobwg c13hnv0z cfsv9jl c6nmu6p ch1iqgg ccm8p60 czfwn1m c1gy5v3d c1xjq1ia c1akemag c21oodo c10j4ngl c1avdsmy c1clz0h7 csaev8m c1exrmam c1734urt c10i9n90 c1g9epqc c18ecwd4 c9xtqcr coi0kc2`}>
<Image
src={"/assets/Soothes_and_Calms_EuohvOcdhtPo9zKlczVdR.png"}
width={1248}
height={832}
alt={""}
className={`w-image c1pd5lmk c1yly58e c14tih19 ce20j0k c1xjq1ia c1akemag`} />
</div>
</div>
<div
className={`w-element cpfmnbn c1c6hyn3 cc52l67 c1enzond cq23j2p c173o7cs c1cjjlbb c124ax7p c13hnv0z cfsv9jl czfwn1m c1gy5v3d c1jp7r3w cxzmlij c11ptxw3 c692hwx c13cxsya c1j0zrcc c1ahxz4z c10i9n90 c10m9sg5 c1cmjsgq cja7iut c1d8xom9 c1h725l c180ymad c1x9w7n c13kb6zn`}>
<div
className={`w-element c1hohx2z cru0vrz c1f1ms6b cw5os1f c1mvqfwg c1o8zdrv c8lljpg ciur44f cc52l67 c173o7cs c1enzond cru1m34 c656bnl cj63gtg c1prrfcc cf6lm31 cdkobwg c13hnv0z cfsv9jl c6nmu6p ch1iqgg ccm8p60 czfwn1m c1gy5v3d c1xjq1ia c1akemag c21oodo c10j4ngl cercat7 ctxezha c1m0e51r c1w5jwb1 c1734urt c10i9n90 c198blwg c1gkcscr ci6p695 c1s4k6qm c12coual c1n7pdy5 cms2d1e c1ouux3n c18ecwd4 ct8tq2e c8hgdr0 c1ovpd8p cnd156j cp0zqdr`} />
<div
className={`w-element c13hnv0z c64dk3n cqnpr1z c1bw5ft3 c1vi4xag c1th6n7q czfwn1m c1gy5v3d c3ruxsi c1k07e35 cwcvcbh c18ecwd4 c1mk8azd ct8fc10 c8vg7fj c1gjknmr cndkst7`}>
<div
className={`w-element c13hnv0z cdj6zco c1ljn9ju c1gy5v3d cogfp7i c4fmdfu`}>
<h1
className={`w-element czu882a csx4m8w c13lp40e cc52l67 c69dy50 cru1m34 cpfmnbn c1c6hyn3 cj9l1k0 cbpmkmj cdkq5ln c1fhkb2b c1v0zej9 c1fsgqz8 csfxzns c10i9n90 c1isp9xc c16gjnq2 c7vgqdq`}>
{"Total Transformation"}
</h1>
<p
className={`w-element c1f1ms6b ctt2rau c11jvhdy c2d2z8y c6u0e59 czu882a c1rh6l5i c1nx7rlk c1ltdv62 c1d8qmpi cv1ic8u csx4m8w c1i4rpd cc52l67 cp88ou cru1m34 c1fhkb2b c1v0zej9 ca9gmel c10i9n90 cjnk495 ccoo17h clq08ci cud9kgk c291xqq`}>
{"From flat, tired, and lackluster skin to radiant and silky smoothness"}
{""}
<br />
{""}
{"— your skin transformed"}
</p>
</div>
</div>
</div>
</div>
</div>
<div
data-ani-progress={"slide-up"}
data-ani-children={"true"}
className={`w-element cv0xxs1 c2oqi4f cc52l67 c173o7cs c2ckal1 c1oyd4d c14s2a9 c1csiamu c154mk17 c656bnl cj63gtg cxpvxve citp4x1`}>
<div
className={`w-element cpfmnbn c1c6hyn3 cj9l1k0 c2d2z8y c1wvqgkp cc52l67 c173o7cs c109gy6z cp88ou cru1m34 cogm717 c13osye9 cjs5jfs`}>
<h1
className={`w-element czu882a csx4m8w c6s4bs9 cd6g8kl cdzvppq cpfmnbn c1c6hyn3 cj9l1k0 c95an82 c1ro4xdn`}>
<b
className={`w-element c12s7ke4`}>
{"Why Our Mask Works"}
</b>
</h1>
</div>
<div
className={`w-element cpfmnbn cj9l1k0 c1c6hyn3 cc52l67 c173o7cs c45v1h0 c1c4nt87`}>
<div
data-ani-progress={"slide-left"}
className={`w-element c1hohx2z cc52l67 cuy570l c69dy50 cru1m34 cpfmnbn cj9l1k0 c1c6hyn3 czronw5 ccufa8f c1tpprfj c18294lu c9qf1hk cy3ke7f`}>
<div
className={`w-element c10qv5on c2spf7p cbzt7mn cdnje10 cmuen4e c172a54s cc52l67 c173o7cs c656bnl cj63gtg cogm717 c13osye9 cx6zoch ci28utw ckyz5q1 c69dy50 cq23j2p cqnsa9w`}>
<h1
className={`w-element czu882a csx4m8w c13lp40e cc52l67 c69dy50 cru1m34 cpfmnbn c1c6hyn3 cj9l1k0 c2d2z8y cdkq5ln c1wvqgkp cdzvppq c1ro4xdn c95an82 cbwyhp2`}>
<b
className={`w-element`}>
{"Experience"}
</b>
</h1>
<p
className={`w-element cpfmnbn cj9l1k0 c11jvhdy c2d2z8y c6u0e59 czu882a cjsxkwv cdzvppq czxb082 cmuen4e c1wvqgkp csx4m8w c175gw0n cc52l67 cp88ou cru1m34 cto86t0`}>
{"• 2 decades in the beauty industry, using best connections to ensure exception skincare expertise"}
</p>
</div>
<div
className={`w-element c6mca0r c172a54s cmuen4e c8q9f7g c1stzyxb c1sdrfnr c1t9ilhy c15398tn cd3ey68 c17wz6vg c1dck6k0 ci8ympi c12gclbe cbth9c8 c18294lu`} />
</div>
<div
data-ani-progress={"slide-right"}
className={`w-element c1hohx2z cc52l67 cuy570l cp88ou cru1m34 cpfmnbn cj9l1k0 c1c6hyn3 czronw5 ccufa8f c1tpprfj c18294lu c9qf1hk cy3ke7f`}>
<div
className={`w-element c6mca0r c172a54s cmuen4e c8q9f7g c1stzyxb c1sdrfnr c1t9ilhy c15398tn cd3ey68 c17wz6vg c1dck6k0 ckcs7xc cazxrkf c1tpprfj`} />
<div
className={`w-element c10qv5on c2spf7p cbzt7mn cdnje10 cmuen4e c172a54s cc52l67 c173o7cs c656bnl cj63gtg cogm717 c13osye9 cx6zoch ci28utw ckyz5q1 c69dy50 cq23j2p cqnsa9w`}>
<h1
className={`w-element czu882a csx4m8w c13lp40e cc52l67 c69dy50 cru1m34 cpfmnbn c1c6hyn3 cj9l1k0 c2d2z8y cdkq5ln c1wvqgkp cdzvppq c95an82 c1ro4xdn`}>
<b
className={`w-element`}>
{"Experience"}
</b>
</h1>
<p
className={`w-element cpfmnbn cj9l1k0 c11jvhdy c2d2z8y c6u0e59 czu882a cjsxkwv cdzvppq czxb082 cmuen4e c1wvqgkp csx4m8w c175gw0n cc52l67 cp88ou cru1m34 cto86t0 c10m2e60 c1v36e`}>
{"• 2 decades in the beauty industry, using best connections to ensure exception skincare expertise"}
</p>
</div>
</div>
<div
data-ani-progress={"slide-left"}
className={`w-element c1hohx2z cc52l67 cuy570l c69dy50 cru1m34 cpfmnbn cj9l1k0 c1c6hyn3 czronw5 ccufa8f c1tpprfj c18294lu c9qf1hk cy3ke7f`}>
<div
className={`w-element c10qv5on c2spf7p cbzt7mn cdnje10 cmuen4e c172a54s cc52l67 c173o7cs c656bnl cj63gtg cogm717 c13osye9 cx6zoch ci28utw ckyz5q1 c69dy50 cq23j2p cqnsa9w`}>
<h1
className={`w-element czu882a csx4m8w c13lp40e cc52l67 c69dy50 cru1m34 cpfmnbn c1c6hyn3 cj9l1k0 c2d2z8y cdkq5ln c1wvqgkp cdzvppq c1ro4xdn c95an82`}>
<b
className={`w-element`}>
{"Experience"}
</b>
</h1>
<p
className={`w-element cpfmnbn cj9l1k0 c11jvhdy c2d2z8y c6u0e59 czu882a cjsxkwv cdzvppq czxb082 cmuen4e c1wvqgkp csx4m8w c175gw0n cc52l67 cp88ou cru1m34 cto86t0 c1v36e c10m2e60`}>
{"• 2 decades in the beauty industry, using best connections to ensure exception skincare expertise"}
</p>
</div>
<div
className={`w-element c6mca0r c172a54s cmuen4e c8q9f7g c1stzyxb c1sdrfnr c1t9ilhy c15398tn cd3ey68 c17wz6vg c1dck6k0 ci8ympi c12gclbe cbth9c8 c18294lu`} />
</div>
<div
data-ani-progress={"slide-right"}
className={`w-element c1hohx2z cc52l67 cuy570l cp88ou cru1m34 cpfmnbn cj9l1k0 c1c6hyn3 czronw5 ccufa8f c1tpprfj c18294lu c9qf1hk cy3ke7f`}>
<div
className={`w-element c6mca0r c172a54s cmuen4e c8q9f7g c1stzyxb c1sdrfnr c1t9ilhy c15398tn cd3ey68 c17wz6vg c1dck6k0 ckcs7xc cazxrkf c1tpprfj`} />
<div
className={`w-element c10qv5on c2spf7p cbzt7mn cdnje10 cmuen4e c172a54s cc52l67 c173o7cs c656bnl cj63gtg cogm717 c13osye9 cx6zoch ci28utw ckyz5q1 c69dy50 cq23j2p cqnsa9w`}>
<h1
className={`w-element czu882a csx4m8w c13lp40e cc52l67 c69dy50 cru1m34 cpfmnbn c1c6hyn3 cj9l1k0 c2d2z8y cdkq5ln c1wvqgkp cdzvppq c95an82 c1ro4xdn`}>
<b
className={`w-element`}>
{"Experience"}
</b>
</h1>
<p
className={`w-element cpfmnbn cj9l1k0 c11jvhdy c2d2z8y c6u0e59 czu882a cjsxkwv cdzvppq czxb082 cmuen4e c1wvqgkp csx4m8w c175gw0n cc52l67 cp88ou cru1m34 cto86t0 c10m2e60 c1v36e`}>
{"• 2 decades in the beauty industry, using best connections to ensure exception skincare expertise"}
</p>
</div>
</div>
</div>
</div>
<div
className={`w-element c181ldc8 c14x0hdu cfwkcqm cm809f c1yruud0 c1a3q670 c17qlq4r c1vxntu0 cbv8gs5 cj6ctr8`}>
<div
data-ani-progress={"fade"}
className={`w-element c342e0y c19cq7j2`}>
<h1
className={`w-element cdph1vl c1kdsazu c16gjnq2 c1isp9xc c1v0zej9 c1fhkb2b c11c0ztw c5h3zo7 c1svna3l`}>
{"Why Our Mask"}
{""}
<br />
{""}
{"Works"}
</h1>
</div>
<div
className={`w-element c13hnv0z c1yly58e c17r8qow c1s8dc6k c14tih19 c1ez9nzu c1pd5lmk cacndhw czfwn1m cg7uw93`}>
<div
data-ani-progress={"fade"}
data-ani-children={"true"}
className={`w-element c13hnv0z cdj6zco czfwn1m cg7uw93 c10i9n90 csfxzns c1qz0y26 ck0bxsr c1oqvtlq c1rr5xhr c14tih19 c1ez9nzu c1pd5lmk c11ptxw3 c2746zc c1yum3ze ckwt1as cvc4bdb`}>
<div
data-ani-children={"true"}
data-ani={"slide-left"}
className={`w-element c13hnv0z czfwn1m cg7uw93 c1yly58e c17r8qow cfsjt11 c10i9n90 csfxzns c1v763ee cxyvny4 c1g8pya7 czsub8w c1xjq1ia c1akemag cw4t0rn c9pwxph cf3f764 c466xhk`}>
<div
className={`w-element c10j4ngl c41fauy c1xqzg c3sdrzc cvatsdc c13hnv0z c1mx206x c1tnpmsq c1k07e35 c692hwx c3ztcdf cdt3xtx cdjkq4w c1hz45ru c2zjzu8`}>
<div
className={`w-element c3sdrzc c41fauy cfij17g c1pq92if c1hbfi0g c158lg7o c1n822tz c1q0th6w c16593w7 c17tk547 c16hlwdj c1awxbo5`} />
<div
className={`w-element c342e0y c17mrp2r cyx2phz c24kuag c1qz0y26 ck0bxsr c1oqvtlq c13hnv0z cdj6zco c1ljn9ju cg7uw93 ciea8de cyr5yyj`}>
<h1
className={`w-element c1isp9xc c16gjnq2 c1v0zej9 c1fhkb2b c1isah3z cp8tpvv`}>
{"Experience"}
</h1>
<p
className={`w-element cp6ro43 c1yly58e ca9gmel c1v0zej9 c1fhkb2b c50irll c1k07e35 cnixgtc c1bkzvek c1pd5lmk`}>
{"• 2 decades in the beauty industry, using best connections to ensure exception skincare expertise"}
</p>
</div>
</div>
<div
className={`w-element c10j4ngl c41fauy c1xqzg c3sdrzc cvatsdc c13hnv0z c1mx206x c1tnpmsq c1k07e35 c692hwx c3ztcdf cdt3xtx cdjkq4w c2zjzu8 c1iuutnk`}>
<div
className={`w-element c3sdrzc c41fauy cq1p7wy c1pq92if c1hbfi0g c158lg7o c1n822tz c1q0th6w c16593w7 c10km6os c16hlwdj c1awxbo5 c1dw3jc4 cr1pjqp cp2i4rn clnnz7`} />
<div
className={`w-element c1yc8xwn c17mrp2r cyx2phz c24kuag c1qz0y26 ck0bxsr c1oqvtlq c13hnv0z cdj6zco c1ljn9ju cg7uw93 ciea8de cyr5yyj`}>
<h1
className={`w-element c1isp9xc c16gjnq2 c1v0zej9 c1fhkb2b cbehonx cp8tpvv cngnpd8`}>
{"Exclusive"}
{""}
<br />
{""}
{"Ingredients"}
</h1>
<p
className={`w-element cp6ro43 c1yly58e ca9gmel c1v0zej9 c1fhkb2b c50irll c1k07e35 cnixgtc c1bkzvek c1pd5lmk`}>
{"• Our global network lets us choose exquisite botanical, vitamins, and essentials from across the globe."}
</p>
</div>
</div>
</div>
<div
data-ani-children={"true"}
data-ani={"slide-right"}
className={`w-element c13hnv0z czfwn1m cg7uw93 c1yly58e c17r8qow cs0onvz c10i9n90 csfxzns c1v763ee cxyvny4 c1g8pya7 czsub8w c1xjq1ia c1akemag cw4t0rn c9pwxph c1ubxsvj cf3f764 c466xhk`}>
<div
className={`w-element c10j4ngl c41fauy c1xqzg c3sdrzc cvatsdc c13hnv0z c1mx206x c1tnpmsq c1k07e35 c692hwx c3ztcdf cdt3xtx cdjkq4w c2zjzu8 c1iuutnk`}>
<div
className={`w-element c1yc8xwn c17mrp2r cyx2phz c24kuag c1qz0y26 ck0bxsr c1oqvtlq c13hnv0z c1ljn9ju cg7uw93 cdj6zco cyr5yyj ciea8de`}>
<h1
className={`w-element c1isp9xc c16gjnq2 c1v0zej9 c1fhkb2b cbehonx cp8tpvv cngnpd8`}>
{"Clinically"}
{""}
<br />
{""}
{"Backed"}
</h1>
<p
className={`w-element cp6ro43 c1yly58e ca9gmel c1v0zej9 c1fhkb2b c50irll c1k07e35 cnixgtc c1bkzvek c1pd5lmk`}>
{"• Formulated with dermatologist guidance to ensure effective, safe results"}
</p>
</div>
<div
className={`w-element c1sd6acx c16ppt9d c1xqzg c1pq92if c1hbfi0g c158lg7o c1n822tz c1q0th6w c16593w7 cvatsdc c16hlwdj c1awxbo5 c1kp535d cn3xzyg ca28mi4 cq85183`} />
</div>
<div
className={`w-element c10j4ngl c41fauy c1xqzg c3sdrzc cvatsdc c13hnv0z c1mx206x c1tnpmsq c1k07e35 c692hwx c3ztcdf cdt3xtx cdjkq4w c2zjzu8`}>
<div
className={`w-element c1yc8xwn c17mrp2r cyx2phz c24kuag c1qz0y26 ck0bxsr c1oqvtlq c13hnv0z cdj6zco c1ljn9ju cg7uw93 cyr5yyj ciea8de`}>
<h1
className={`w-element c1isp9xc c16gjnq2 c1v0zej9 c1fhkb2b c1isah3z cp8tpvv`}>
{"Experience"}
</h1>
<p
className={`w-element cp6ro43 c1yly58e ca9gmel c1v0zej9 c1fhkb2b c50irll c1k07e35 cnixgtc c1bkzvek cu13air c1pd5lmk c1o4d8s6 cp6bxsh`}>
{"• Produced in refined facilities by experienced experts using premium equipment to ensure every mask meets standards."}
</p>
</div>
<div
className={`w-element cmhne3d c1kuu1e3 c1xqzg c1pq92if c1hbfi0g c158lg7o c1n822tz c1q0th6w c16593w7 cvatsdc c16hlwdj c1awxbo5`} />
</div>
</div>
</div>
</div>
</div>
<div
className={`w-element cqu4md8 cc52l67 ch2t9uo c1wywa9j c173o7cs c1cjjlbb c124ax7p c18lbw05 ca0lljk c1y14afp c1isp9xc c1r1wck9 c16gjnq2 c1kdsazu c1yly58e c1iw2xu0 cw622cv c1gkcscr ci6p695 c1s4k6qm cucijuc ceq68xr cms2d1e c17r8qow c13hnv0z cdj6zco czfwn1m c1gy5v3d cbiha9i c1u0xart cnopvw8 c1phe92h c1bf3ijt c1qr5y2b cxz62lk czjc5g7 c731nmu c1c7xsto chuf7ws cyhfpca c1hz45ru c1s2yqin c466xhk c1gcsvan c1422pju`}>
<h1
className={`w-element czu882a csx4m8w c6s4bs9 c1oagunn cdzvppq cpfmnbn c1c6hyn3 cj9l1k0 c1ro4xdn c95an82 c1yly58e c1regzgk c1v0zej9 c1fsvjwz c1isp9xc c1sxlwu0 cyhfpca c1svna3l c1pyzqo2`}>
{"Hear From "}
{""}
<br />
{""}
{"Our Customers."}
</h1>
<Box
className={`w-box c1a7d2ns c1oto58z c1m3bjie c1wl1xxy c656bnl cj63gtg c12ywqic c1kx9rsr`}>
<Box
className={`w-box c1s8dc6k c1tuinma c1ibcse2 c1igd1z2 ci38l1c czl8vgb c1xjq1ia c1akemag c1yly58e cdj6zco c1aqzxuf czfwn1m ca8d5ey cykgc6s c1o8pghz c1a4lryo c1nw4t1c c1k15m98 c6h6xkb cbkojqr c19f45yq c16l4fhp cc52l67 c69dy50 cru1m34 c1lmozsx cuy570l c1oyd4d c2ckal1 ${"embla"}`}>
<Box
className={`w-box c1yly58e c1tuinma ci38l1c ca8d5ey c13hnv0z c1ljn9ju cg7uw93 c1s8dc6k cogxuid c1xxakoe c1v01ody c1f10svd cp88ou cq23j2p c1oyd4d c2ckal1 cgu2lfb c1gtu4g3 ${"embla__wrapper"}`}>
<div
className={`w-element c1f10svd c1ogmnza c1dt8zky c1i4rpd c1y4rrlz cinsfjc chd04pb c2d2z8y clytzz6 c8635h8 ca8d5ey cl607r8 c1n2thpf c1uoouen cl3txql ${"embla__slide"}`}>
<div
className={`w-element c3bu3z0 cru0vrz c1uhmut4 coknjfy chd04pb c94cbdv cqk1ouq cejm84w cc52l67 c173o7cs c69dy50 cq23j2p c16gw1ad cjv2sc3 c1ikxw5g c16104ge csfc8ut c2m6j1s c1aqdb89 c13idmj8 c7zq51m c1mrdp2v c1c6pc9m c1wcam6x c1s0h5jn c2d2z8y cmvofn9 c12yyrqj ca9gmel cnixgtc c4xpckl cc6wz6l cpiwqqk c14q7tea cercat7 ctxezha c1j1tjaf cptxii3 cqpzbo3 cqtcp12 c1k57wtb c1gkcscr ci6p695 c1s4k6qm cucijuc ceq68xr c1l20hdc c10i9n90 c1bf3ijt c1s8fkma`}>
<div
className={`w-element cpfmnbn c6mca0r cc52l67 c69dy50 cq23j2p c2d2z8y c1wvqgkp c1csiamu cuihm0a c1t4548c cogxuid c1kpa8e0 c13hnv0z c1dduie cg7uw93 cqtcp12`}>
<p
className={`w-element c10qv5on cdnje10 c10hib3x c2d2z8y c1mnwxt8 czu882a cjsxkwv cdzvppq czxb082 c1r7sbjc c1wvqgkp csx4m8w c175gw0n cc52l67 c69dy50 cq23j2p c1xsh63m c10m2e60 c1v36e c1iq4kzc c65oich c19yj6mc c13mv60p c13hnv0z c1ljn9ju cg7uw93 cur7mgk c1fhkb2b cp6ro43 c1r1wck9 c1v0zej9 cw319tw c1modrv c1ptly6h`}>
{"\"This is a non-negotiable must-have! The texture is divine—it sinks in immediately, instantly calming stubborn redness. I wake up looking like I've had a professional facial, plumped with undeniable glow.\""}
</p>
</div>
<div
className={`w-element cpfmnbn c1c6hyn3 cjsvxm1 cc52l67 c69dy50 c1gozthy cuy570l c2d2z8y c1wvqgkp c1p6in38 c2rsum c13hnv0z czfwn1m c1aqzxuf cfsv9jl c4fmdfu cogfp7i`}>
<div
className={`w-element c1y4rrlz c1wvqgkp c1rh6l5i ctanv61`}>
<h1
className={`w-element czu882a csx4m8w cn7vlh8 cc52l67 c69dy50 c1gozthy cpfmnbn c1c6hyn3 cj9l1k0 c2d2z8y cdkq5ln c1rh6l5i c95an82 c1ro4xdn c1isp9xc c16gjnq2 cteegqb c1fhkb2b cn4ae1z`}>
{"Nora Aishah"}
</h1>
<h1
className={`w-element czu882a csx4m8w c6u0e59 cc52l67 c69dy50 c1gozthy cpfmnbn c1c6hyn3 cj9l1k0 c2d2z8y cdkq5ln c1rh6l5i cpcobf2 c10m2e60 c1iq4kzc c12yyrqj cud9kgk c1r1wck9 c1v0zej9 c178mcue clvwzt6`}>
{"Beauty Content Creator"}
</h1>
</div>
<Image
src={"/assets/Nora_Aishah_cEn5v_TEEz-lcYdx3I8MG.png"}
width={837}
height={837}
alt={""}
className={`w-image c15la3k7 c1niyd19 c1t37qd5 c4xcuph cyva8a7 c949on9 c1jvl3su c2d2z8y c1prrfcc c1hwkuae c13d3ul5 c16lbv1s cohs2az cl1oi6j chutxsd c1h2c135 c1sntnxq ca2p9ke c1uzqj1e c1skey5b c10i9n90 ce20j0k`} />
</div>
</div>
</div>
<div
className={`w-element c1f10svd c1ogmnza c1dt8zky c1i4rpd c1y4rrlz cinsfjc chd04pb c2d2z8y clytzz6 c8635h8 ca8d5ey cl607r8 c1n2thpf c1uoouen cl3txql ${"embla__slide"}`}>
<div
className={`w-element c3bu3z0 cru0vrz c1uhmut4 coknjfy chd04pb c94cbdv cqk1ouq cejm84w cc52l67 c173o7cs c69dy50 cq23j2p c16gw1ad cjv2sc3 c1ikxw5g c16104ge csfc8ut c2m6j1s c1aqdb89 c13idmj8 c7zq51m c1mrdp2v c1c6pc9m c1wcam6x c1s0h5jn c2d2z8y cmvofn9 c12yyrqj ca9gmel cnixgtc c4xpckl cc6wz6l cpiwqqk c14q7tea cercat7 ctxezha c1j1tjaf cptxii3 cqpzbo3 cqtcp12 c1k57wtb c1gkcscr ci6p695 c1s4k6qm cucijuc ceq68xr c1l20hdc c10i9n90 c1bf3ijt c1s8fkma`}>
<div
className={`w-element cpfmnbn c6mca0r cc52l67 c69dy50 cq23j2p c2d2z8y c1wvqgkp c1csiamu cuihm0a c1t4548c cogxuid c1kpa8e0 c13hnv0z c1dduie cg7uw93 cqtcp12`}>
<p
className={`w-element c10qv5on cdnje10 c10hib3x c2d2z8y c1mnwxt8 czu882a cjsxkwv cdzvppq czxb082 c1r7sbjc c1wvqgkp csx4m8w c175gw0n cc52l67 c69dy50 cq23j2p c1xsh63m c10m2e60 c1v36e c1iq4kzc c65oich c19yj6mc c13mv60p c13hnv0z c1ljn9ju cg7uw93 cur7mgk c1fhkb2b cp6ro43 c1r1wck9 c1v0zej9 cw319tw cljaiqa`}>
{"“I suggested this mask to a client before her portrait session, and the difference surprised both of us. Her skin looked calmer and more even, so I barely had to retouch anything. It just gave her that soft, healthy look on camera.”"}
</p>
</div>
<div
className={`w-element cpfmnbn c1c6hyn3 cjsvxm1 cc52l67 c69dy50 c1gozthy cuy570l c2d2z8y c1wvqgkp c1p6in38 c2rsum c13hnv0z czfwn1m c1aqzxuf cfsv9jl c4fmdfu cogfp7i`}>
<div
className={`w-element c1y4rrlz c1wvqgkp c1rh6l5i ctanv61`}>
<h1
className={`w-element czu882a csx4m8w cn7vlh8 cc52l67 c69dy50 c1gozthy cpfmnbn c1c6hyn3 cj9l1k0 c2d2z8y cdkq5ln c1rh6l5i c95an82 c1ro4xdn c1isp9xc c16gjnq2 cteegqb c1fhkb2b cn4ae1z`}>
{"Rachel Li"}
</h1>
<h1
className={`w-element czu882a csx4m8w c6u0e59 cc52l67 c69dy50 c1gozthy cpfmnbn c1c6hyn3 cj9l1k0 c2d2z8y cdkq5ln c1rh6l5i cpcobf2 c10m2e60 c1iq4kzc c12yyrqj cud9kgk c1r1wck9 c1v0zej9 c178mcue clvwzt6`}>
{"Photographer"}
</h1>
</div>
<Image
src={"/assets/Rachel_Lee_cCsjJIq19M67qyeTIkUNL.webp"}
width={374}
height={374}
alt={""}
className={`w-image c15la3k7 c1niyd19 c1t37qd5 c4xcuph cyva8a7 c949on9 c1jvl3su c2d2z8y c1prrfcc c1hwkuae c13d3ul5 c16lbv1s cohs2az cl1oi6j chutxsd c1h2c135 c1sntnxq ca2p9ke c1uzqj1e c1skey5b c10i9n90`} />
</div>
</div>
</div>
<div
className={`w-element c1f10svd c1ogmnza c1dt8zky c1i4rpd c1y4rrlz cinsfjc chd04pb c2d2z8y clytzz6 c8635h8 ca8d5ey cl607r8 c1n2thpf c1uoouen cl3txql ${"embla__slide"}`}>
<div
className={`w-element c3bu3z0 cru0vrz c1uhmut4 coknjfy chd04pb c94cbdv cqk1ouq cejm84w cc52l67 c173o7cs c69dy50 cq23j2p c16gw1ad cjv2sc3 c1ikxw5g c16104ge csfc8ut c2m6j1s c1aqdb89 c13idmj8 c7zq51m c1mrdp2v c1c6pc9m c1wcam6x c1s0h5jn c2d2z8y cmvofn9 c12yyrqj ca9gmel cnixgtc c4xpckl cc6wz6l cpiwqqk c14q7tea cercat7 ctxezha c1j1tjaf cptxii3 cqpzbo3 cqtcp12 caikerr c1gkcscr ci6p695 c1s4k6qm cucijuc ceq68xr c1l20hdc c10i9n90 c1bf3ijt c1s8fkma`}>
<div
className={`w-element cpfmnbn c6mca0r cc52l67 c69dy50 cq23j2p c2d2z8y c1wvqgkp c1csiamu cuihm0a c1t4548c cogxuid c1kpa8e0 c13hnv0z c1dduie cg7uw93 cyh3f0`}>
<p
className={`w-element c10qv5on cdnje10 c10hib3x c2d2z8y c1mnwxt8 czu882a cjsxkwv cdzvppq czxb082 c1r7sbjc c1wvqgkp csx4m8w c175gw0n cc52l67 c69dy50 cq23j2p c1xsh63m c10m2e60 c1v36e c1iq4kzc c65oich c19yj6mc c13mv60p c13hnv0z c1ljn9ju cg7uw93 cur7mgk c6li44o cp6ro43 c1r1wck9 c10sylxv cw319tw c11ptxw3`}>
{"“It’s rare for my skin to react well to new products, but this mask melted right in without irritation. After a week, my face looks more rested — like I actually slept.”"}
</p>
</div>
<div
className={`w-element cpfmnbn c1c6hyn3 cjsvxm1 cc52l67 c69dy50 c1gozthy cuy570l c2d2z8y c1wvqgkp c1p6in38 c2rsum c13hnv0z czfwn1m c1aqzxuf cfsv9jl c4fmdfu cogfp7i`}>
<div
className={`w-element c1y4rrlz c1wvqgkp c1rh6l5i ctanv61`}>
<h1
className={`w-element czu882a csx4m8w cn7vlh8 cc52l67 c69dy50 c1gozthy cpfmnbn c1c6hyn3 cj9l1k0 c2d2z8y cdkq5ln c1rh6l5i c95an82 c1ro4xdn c1isp9xc c16gjnq2 cteegqb c1fhkb2b cn4ae1z`}>
{"Alicia Tan"}
</h1>
<h1
className={`w-element czu882a csx4m8w c6u0e59 cc52l67 c69dy50 c1gozthy cpfmnbn c1c6hyn3 cj9l1k0 c2d2z8y cdkq5ln c1rh6l5i cpcobf2 c10m2e60 c1iq4kzc c12yyrqj cud9kgk c1r1wck9 c1v0zej9 c178mcue clvwzt6`}>
{"Makeup Artist"}
</h1>
</div>
<Image
src={"/assets/Alice_Tan_PCfbjpaeAb9GbregnbIE9.webp"}
width={625}
height={625}
alt={""}
className={`w-image c15la3k7 c1niyd19 c1t37qd5 c4xcuph cyva8a7 c949on9 c1jvl3su c2d2z8y c1prrfcc c1hwkuae c13d3ul5 c16lbv1s cohs2az cl1oi6j chutxsd c1h2c135 c1sntnxq ca2p9ke c1uzqj1e c1skey5b c10i9n90`} />
</div>
</div>
</div>
<div
className={`w-element c1f10svd c1ogmnza c1dt8zky c1i4rpd c1y4rrlz cinsfjc chd04pb c2d2z8y clytzz6 c8635h8 ca8d5ey cl607r8 c1n2thpf c1uoouen cl3txql ${"embla__slide"}`}>
<div
className={`w-element c3bu3z0 cru0vrz c1uhmut4 coknjfy chd04pb c94cbdv cqk1ouq cejm84w cc52l67 c173o7cs c69dy50 cq23j2p c16gw1ad cjv2sc3 c1ikxw5g c16104ge csfc8ut c2m6j1s c1aqdb89 c13idmj8 c7zq51m c1mrdp2v c1c6pc9m c1wcam6x c1s0h5jn c2d2z8y cmvofn9 c12yyrqj ca9gmel cnixgtc c4xpckl cc6wz6l cpiwqqk c14q7tea cercat7 ctxezha c1j1tjaf cptxii3 cqpzbo3 cqtcp12 caikerr c1gkcscr ci6p695 c1s4k6qm cucijuc ceq68xr c1l20hdc c10i9n90 c1s8fkma`}>
<div
className={`w-element cpfmnbn c6mca0r cc52l67 c69dy50 cq23j2p c2d2z8y c1wvqgkp c1csiamu cuihm0a c1t4548c cogxuid c1kpa8e0 c13hnv0z c1dduie cg7uw93 cyh3f0`}>
<p
className={`w-element c10qv5on cdnje10 c10hib3x c2d2z8y c1mnwxt8 czu882a cjsxkwv cdzvppq czxb082 c1r7sbjc c1wvqgkp csx4m8w c175gw0n cc52l67 c69dy50 cq23j2p c1xsh63m c10m2e60 c1v36e c1iq4kzc c65oich c19yj6mc c13mv60p c13hnv0z c1ljn9ju cg7uw93 cur7mgk c1syw9nm cp6ro43 c1r1wck9 c145ug6v cw319tw c11ptxw3`}>
{"“I noticed the difference the next morning — smoother texture and less redness. It’s such a simple step, but it makes me feel taken care of.”"}
</p>
</div>
<div
className={`w-element cpfmnbn c1c6hyn3 cjsvxm1 cc52l67 c69dy50 cq23j2p cuy570l c2d2z8y c1wvqgkp c1p6in38 c2rsum c13hnv0z czfwn1m c1aqzxuf cfsv9jl c4fmdfu cogfp7i`}>
<div
className={`w-element c1y4rrlz c1wvqgkp c1rh6l5i ctanv61`}>
<h1
className={`w-element czu882a csx4m8w cn7vlh8 cc52l67 c69dy50 c1gozthy cpfmnbn c1c6hyn3 cj9l1k0 c2d2z8y cdkq5ln c1rh6l5i c95an82 c1ro4xdn c1isp9xc c16gjnq2 cteegqb c1fhkb2b cn4ae1z`}>
{"Sofia Rahman"}
</h1>
<h1
className={`w-element czu882a csx4m8w c6u0e59 cc52l67 c69dy50 c1gozthy cpfmnbn c1c6hyn3 cj9l1k0 c2d2z8y cdkq5ln c1rh6l5i cpcobf2 c10m2e60 c1iq4kzc c12yyrqj cud9kgk c1r1wck9 c1v0zej9 c178mcue clvwzt6`}>
{"Nutrition Coach"}
</h1>
</div>
<Image
src={"/assets/Sofia_rahman_5ndrLYkwEfkSqIqaNgz23.png"}
width={462}
height={462}
alt={""}
className={`w-image c15la3k7 c1niyd19 c1t37qd5 c4xcuph cyva8a7 c949on9 c1jvl3su c2d2z8y c1prrfcc c1hwkuae c13d3ul5 c16lbv1s cohs2az cl1oi6j chutxsd c1h2c135 c1sntnxq ca2p9ke c1uzqj1e c1skey5b c10i9n90`} />
</div>
</div>
</div>
<div
className={`w-element c1f10svd c1ogmnza c1dt8zky c1i4rpd c1y4rrlz cinsfjc chd04pb c2d2z8y clytzz6 c8635h8 ca8d5ey cl607r8 c1n2thpf c1uoouen cl3txql ${"embla__slide"}`}>
<div
className={`w-element c3bu3z0 cru0vrz c1uhmut4 coknjfy chd04pb c94cbdv cqk1ouq cejm84w cc52l67 c173o7cs c69dy50 cq23j2p c16gw1ad cjv2sc3 c1ikxw5g c16104ge csfc8ut c2m6j1s c1aqdb89 c13idmj8 c7zq51m c1mrdp2v c1c6pc9m c1wcam6x c1s0h5jn c2d2z8y cmvofn9 c12yyrqj ca9gmel cnixgtc c4xpckl cu13air cpiwqqk c14q7tea cercat7 ctxezha c1j1tjaf cptxii3 cqpzbo3 cqtcp12 caikerr c1gkcscr ci6p695 c1s4k6qm cucijuc ceq68xr c1l20hdc c10i9n90 c1s8fkma`}>
<div
className={`w-element cpfmnbn c6mca0r cc52l67 c69dy50 cq23j2p c2d2z8y c1wvqgkp c1csiamu cuihm0a c1t4548c cogxuid c1kpa8e0 c13hnv0z c1dduie cg7uw93 cyh3f0`}>
<p
className={`w-element c10qv5on cdnje10 c10hib3x c2d2z8y c1mnwxt8 czu882a cjsxkwv cdzvppq czxb082 c1r7sbjc c1wvqgkp csx4m8w c175gw0n cc52l67 c69dy50 cq23j2p c1xsh63m c10m2e60 c1v36e c1iq4kzc c65oich c19yj6mc c13mv60p c13hnv0z c1ljn9ju cg7uw93 cur7mgk c1syw9nm cp6ro43 c1r1wck9 c145ug6v cw319tw c11ptxw3`}>
{"“I didn’t expect much at first, but after a few uses, my skin feels so much calmer and softer.  It’s become a small moment of comfort in my routine\""}
</p>
</div>
<div
className={`w-element cpfmnbn c1c6hyn3 cjsvxm1 cc52l67 c69dy50 cq23j2p cuy570l c2d2z8y c1wvqgkp c1p6in38 c2rsum c13hnv0z czfwn1m c1aqzxuf cfsv9jl c4fmdfu cogfp7i`}>
<div
className={`w-element c1y4rrlz c1wvqgkp c1rh6l5i ctanv61`}>
<h1
className={`w-element czu882a csx4m8w cn7vlh8 cc52l67 c69dy50 c1gozthy cpfmnbn c1c6hyn3 cj9l1k0 c2d2z8y cdkq5ln c1rh6l5i c95an82 c1ro4xdn c1isp9xc c16gjnq2 cteegqb c1fhkb2b cn4ae1z`}>
{"Hannah Lim"}
</h1>
<h1
className={`w-element czu882a csx4m8w c6u0e59 cc52l67 c69dy50 c1gozthy cpfmnbn c1c6hyn3 cj9l1k0 c2d2z8y cdkq5ln c1rh6l5i cpcobf2 c10m2e60 c1iq4kzc c12yyrqj cud9kgk c1r1wck9 c1v0zej9 c178mcue clvwzt6`}>
{"Spa Therapist"}
</h1>
</div>
<Image
src={"/assets/hannah_lim_jDXLGNjJhK8BApbrtSqoi.png"}
width={1200}
height={1200}
alt={""}
className={`w-image c15la3k7 c1niyd19 c1t37qd5 c4xcuph cyva8a7 c949on9 c1jvl3su c2d2z8y c1prrfcc c1hwkuae c13d3ul5 c16lbv1s cohs2az cl1oi6j chutxsd c1h2c135 c1sntnxq ca2p9ke c1uzqj1e c1skey5b c10i9n90`} />
</div>
</div>
</div>
</Box>
</Box>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<script src=\"https://unpkg.com/embla-carousel/embla-carousel.umd.js\"></script>\n<script src=\"https://unpkg.com/embla-carousel-auto-scroll/embla-carousel-auto-scroll.umd.js\"></script>\n\n<style>\n  /* PARENT: The Mask */\n  .embla {\n    overflow: hidden;\n    width: 100%;\n    \n    /* --- MOBILE FIX --- */\n    /* This tells the browser: \"Let the user scroll the page vertically \n       normally. Do not capture horizontal touches.\" */\n    touch-action: pan-y;\n    \n    /* Fixes flickering on some mobile devices */\n    -webkit-backface-visibility: hidden;\n  }\n\n  /* CONTAINER: The Moving Strip */\n  .embla__container {\n    display: flex;\n    /* Hardware acceleration - smooths out mobile stutter */\n    will-change: transform;\n    transform: translate3d(0, 0, 0);\n    /* Kills Webstudio's default easing for instant movement */\n    transition: none !important; \n    gap: 0px; \n  }\n\n  /* SLIDES: The Content */\n  .embla__slide {\n    flex: 0 0 auto;\n    min-width: 0;\n    /* Your spacing */\n    padding-right: 20px; \n  }\n</style>\n\n<script type=\"text/javascript\">\n  (function() {\n    // 1. Find the element\n    const emblaNode = document.querySelector('.embla');\n    \n    // Safety check\n    if (!emblaNode) return;\n\n    // 2. Main Options\n    const OPTIONS = { \n        loop: true, \n        align: 'start', \n        // Ghost Mode: Completely ignores mouse/touch inputs on the slider itself\n        watchDrag: false, \n        dragFree: true\n    };\n\n    // 3. AutoScroll Plugin\n    const emblaApi = EmblaCarousel(emblaNode, OPTIONS, [\n      EmblaCarouselAutoScroll({ \n        speed: 1.5, // 1.5 = Normal, 3 = Fast\n        startDelay: 0,\n        stopOnInteraction: false, // Never stop on touch\n        stopOnMouseEnter: false,  // Never stop on hover\n        playOnInit: true // Run immediately\n      })\n    ]);\n    \n  })();\n</script>"}
clientOnly={true}
executeScriptOnCanvas={true}
className={`w-html-embed`} />
</Fragment_1>
</Slot>
</Box>
</div>
<div
className={`w-element c1yku8m2 cc52l67 c173o7cs c45mc6p c2d2z8y c1wvqgkp c1f08nev c54d090 cd3cqz5 c17mqs0a cbnbuyw csxj8nm crwqqpa c57dgx6 c69dy50 c1gozthy chwphog citp4x1 c1c7xsto chuf7ws`}>
<div
className={`w-element cv0xxs1 c2oqi4f c14s2a9 c1wywa9j c13wm8vp c1rv2h2z cc52l67 c173o7cs c69dy50 cq23j2p c1s2yqin`}>
<div
className={`w-element cpfmnbn c1c6hyn3 cj9l1k0 c2d2z8y c1wvqgkp cc52l67 c173o7cs c109gy6z cp88ou cru1m34 c2rsum c1p6in38 cjs5jfs c1b1wm7j`}>
<h1
className={`w-element czu882a csx4m8w c6s4bs9 cgbn6et cdzvppq c1s1gjog cc3znbk c1ro4xdn`}>
{"Treat Your Skin Today"}
</h1>
<h1
className={`w-element czu882a csx4m8w c6s4bs9 c1tcj0gw c1v36e cp8crrr cpfmnbn cj9l1k0 c1c6hyn3 c10m2e60 c1h3mtjw c1v763ee`}>
{"Awaken your skin —"}
{""}
<br />
{""}
{"radiant glow in minutes."}
</h1>
</div>
<Image
src={"/assets/Lorem_Ipsum_Fall_UxcuPBUM6CIyzjTXTPS4L.png"}
width={687}
height={1024}
alt={""}
data-ani={"slide-down"}
className={`w-image c14zt6se c6op4a7 c692hwx c24kuag c1yc8xwn c1xjq1ia c1akemag c14tih19 c1ez9nzu c1pd5lmk ce20j0k c138v213 c1wa1zfl c9vh9ys c1x7906e cxpvxve c175gw0n c14s2a9 c8qpvct cpfmnbn cj9l1k0 c1c6hyn3 c1f10svd cvyjdar c1r7sbjc cp3ndwh c1a85xng`} />
<div
className={`w-element cpfmnbn c6095d9 c1c6hyn3 cc52l67 c69dy50 cq23j2p c1n24dq9 c1ivh7bt c173o7cs c2rsum c1p6in38`}>
<button
className={`w-element c5kiu11 cwj5rh1 c4nnhg6 c1y0bwfg c11pxbx8 c1ekpexp cuhbja c7zq51m cupfqja c1ctc1yx cup7w90 c6s4bs9 c10m2e60 cbwyhp2 c95an82 cfej9c7 c1jqqm7i`}>
{"Get Radiant"}
</button>
<h1
className={`w-element czu882a csx4m8w c6s4bs9 c1tcj0gw c1v36e cp8crrr cpfmnbn cj9l1k0 c1c6hyn3 c95an82 c1ro4xdn c1v763ee`}>
{"Only MYR 50"}
</h1>
</div>
</div>
<div
className={`w-element c1mrdp2v c1c6pc9m c1wcam6x c1s0h5jn c13d3ul5 c16lbv1s cc52l67 cuy570l c69dy50 cq23j2p c1c24u8p cjt2m6p c13osye9 ce3gse0 chj8ial cp3ndwh c3bu3z0 cpfmnbn ct5pjiw c13hnv0z cfsv9jl czfwn1m cg7uw93 cw8osgr cwuskgu c1j7a4qq c1p4kqy cuq8ip4 c1elmar4`}>
<Image
src={"/assets/Beauty_Mask_Logo__J-8R09X0BEIU3pC8TPkz.png"}
width={451}
height={451}
alt={""}
className={`w-image c1hubbwi cr0499d co9x8yn c156h4fe cex24uz c8h0cbu`} />
<h1
className={`w-element c5lhvgj c114gzb1 c3si0il c1ro4xdn c17jm1ja cnddqm0 c1w625zh cfg5ylh c1uaz4pr c1bdcq2k c1pt7ru0 c78f6k5 cjrj0ej`}>
{"Lorem Ipsum"}
</h1>
</div>
</div>
<div
className={`w-element c13hnv0z c1ljn9ju c1gy5v3d cx5b062 c1fmoqfr c1qwxu0v c1yruud0 c1a3q670 c17qlq4r c9we88v co8i1kw ce27jkr c1pnfyt7 c17r8qow c1xjq1ia c1akemag c692hwx c1m2jkx8 cyy2ztq cpv0irv c1qw6cqo c14n7ilc cd7a0ao cj6ctr8 cgu2lfb c1gtu4g3 c1pd9efl`}>
<div
className={`w-element cfue7fk cwcvcbh c13hnv0z cdj6zco czfwn1m cg7uw93 c6nmu6p ch1iqgg c14tih19 c1pd5lmk c1xjq1ia c1akemag cow2a5d c1gtu4g3 c1x5kcei cipc7gi c1taqy50`}>
<div
className={`w-element cu13air c1yly58e c17r8qow c2uklrh cfx7zqu c1wbnc3n c1vrs7au c1modan cunks2c`}>
<h1
className={`w-element c1isp9xc cdph1vl cbyxmf6 c5h3zo7 c1v0zej9 c1fhkb2b c1m3hdz4 c1bwsid3 c11twq70 c1ov9q0k`}>
{"Treat Your Skin Today"}
</h1>
<p
className={`w-element cgqy2xs ca9gmel cnqy3ha c1v0zej9 c1fhkb2b cl59vx1 c1j9whkr`}>
{"Awaken your skin —"}
{""}
<br />
{""}
{"radiant glow in minutes."}
</p>
</div>
<Image
src={"/assets/Lorem_Ipsum_Fall_UxcuPBUM6CIyzjTXTPS4L.png"}
width={687}
height={1024}
alt={""}
className={`w-image c1dnvijz c5xjgvk c692hwx c24kuag c1yc8xwn citp4x1 c138v213 c1wa1zfl c9vh9ys c1x7906e c14cmd0h c1c0x7dy`} />
<div
className={`w-element c1yly58e c17r8qow c1s8dc6k cxyvny4 czsub8w chxsv5j c13hnv0z c1dduie c1gy5v3d ctiod0x c197z3qo cvi58pq corj42r c1xaaejt cyhfpca c117aq07 c1wbnc3n c1s2yqin cow2a5d c1gtu4g3`}>
<div
className={`w-element cpfmnbn c6095d9 c1c6hyn3 cc52l67 c69dy50 cru1m34 cr0mrr0 c1ny6la0 c6qod4o c16ppt9d cq1p7wy cmhne3d c17tk547 c1hbfi0g c158lg7o c1n822tz c1q0th6w cfy6l8s c1pzylyx c1yly58e c1s8dc6k c1m96y5h c2f6k4z c18w2p56 c15t31xx c1176r7o cpuuk3f cg8738q c18d3qd5 cgkr97t c11psw9i`}>
<button
className={`w-element c5kiu11 cwj5rh1 c12b8n0g chfd37x cignwe1 c1smkj3o cuhbja c1gtml0a c85hsi3 c18umdy4 c1s1d8mg c7zq51m cupfqja c1ctc1yx cup7w90 c6s4bs9 cfej9c7 cpxdfrl ctuko7x c15i570i cc7rqbv c181ldc8 cj7om0q c1j1tjaf cw6dpjl cfu3zra cg75hi0 ca9gmel c16gjnq2 c1jwphfw c7vgqdq c52dnt6 cg8738q c1x5kcei c1176r7o ${"hero-cta-2"}`}>
{"Get Radiant"}
</button>
<p
className={`w-element c1qzq2dp c1isp9xc c16gjnq2 c1v0zej9 c1fhkb2b c1j1tjaf c1kdsazu c11pjerw c1ce6ibn cg8738q`}>
{"Only MYR50"}
</p>
</div>
</div>
</div>
<div
data-ani={"fade"}
className={`w-element c64dk3n c1arkb7t c1xjq1ia c1akemag c14tih19 c1ez9nzu csfxzns c1pd5lmk cqnpr1z ch2iecu c1t4548c cf6nu9m c1kpa8e0 cxpvxve`}>
<Image
src={"/assets/Lorem_Ipsum_Fall_UxcuPBUM6CIyzjTXTPS4L.png"}
width={687}
height={1024}
alt={""}
data-ani={"slide-down"}
className={`w-image c14zt6se c6op4a7 c692hwx c24kuag c1yc8xwn c1xjq1ia c1akemag c14tih19 c1ez9nzu c1pd5lmk cspupja c138v213 c1wa1zfl c9vh9ys c1x7906e cxpvxve`} />
</div>
</div>
</Body>
}


      export { Page }
    