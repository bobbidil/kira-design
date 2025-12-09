/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Fragment as Fragment_1, HtmlEmbed as HtmlEmbed, Image as Image, Input as Input, Box as Box, Text as Text, Heading as Heading, Slot as Slot } from "@webstudio-is/sdk-components-react";
import { Body as Body, RemixForm as RemixForm } from "@webstudio-is/sdk-components-react-router";


      export const projectId = "42d12f85-6e68-4c7f-b1cb-6625c1a526de";

      export const lastPublished = "2025-12-09T10:30:09.590Z";

      export const siteName = "Kira Design";

      export const breakpoints = [{"id":"Tt5uQsLO6VX8Wld3Fb0Uf"},{"id":"UJ_jdvDCCaVutj9gRH_RL","maxWidth":991},{"id":"LHnGSfrmeiBjlbJG5sLom","maxWidth":767},{"id":"VsBkbLSLorock0elwza3l","maxWidth":479},{"id":"VLxk_AWaDSR0uenI-7KsQ","minWidth":1920}];

      export const favIconAsset: string | undefined =
        "KI_Porp_CRYrDRjI8FNf9DXSMaTcJ.png";

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        ["Montserrat-BoldItalic_dWqmpEdYB2nfL1hr3yJAB.ttf","Montserrat-LightItalic_PIyovpEyScRs2g-ZVhnVp.ttf","Poppins-ThinItalic_NWXEIyh0EIJtwj15cwU7f.ttf","Poppins-ExtraLightItalic_K4PUopx66wiD0-VUmxZji.ttf","Montserrat-BlackItalic_Kky-hqjMP_TZqt8phjx-7.ttf","Montserrat-ExtraLight_wOmJpMQbKwkdlAru0-oAF.ttf","Poppins-Bold_Dv7X4FEfoSWxdkr05YLNV.ttf","Poppins-SemiBold_iyBp5usUOSUf9ekesvY9x.ttf","Poppins-Black_dB-3ZPuKkQI3tWf3D3W06.ttf","Poppins-Italic_kxNtk4YXZR66tDnH5Sm6i.ttf","Poppins-MediumItalic_vqg-0df1Obm_JjVyDIU1n.ttf","Poppins-Medium_dqKhctfh45lsZ0HtPVPnQ.ttf","Montserrat-ExtraBoldItalic_YI6cDnHgZKS61lVj4byr2.ttf","RadioCanada-Italic_wdth_wght__7RAFKgtmLUNEE9C0c0y4W.ttf","RadioCanada_wdth_wght__WQPA6eLncY1KH2p76YtqX.ttf","Montserrat-ThinItalic_25W3XuRqmzWNkfBdnxeni.ttf","Montserrat-ExtraBold_zt9eyi91dRXbDneCs67Vy.ttf","Poppins-ExtraLight_kcnIT5wI77WZaVKBabmbt.ttf","Poppins-Light_mvyBNZmX86koFmR0_5vLm.ttf","RadioCanada-Regular_3mFvuegc9DFT677RV9sag.ttf","Poppins-LightItalic_53DG3l6Yi3EXBuWizOHgv.ttf","Montserrat-MediumItalic_9Z0ts7EZbviRcDu-MBhnq.ttf","Poppins-Regular_B89VhVv7vfkF-IyzhK5D8.ttf","Poppins-Bold_7twEHH_0NOU_2P3wZ5Ndp.ttf","Poppins-SemiBoldItalic_IZD8hUbDhGdxqSlQ2v2s8.ttf","Montserrat-Italic_7mRL7cRltcW7XgorexDsf.ttf","Montserrat-Bold_2Ko3sA4rhTB1hU5scfkHb.ttf","Montserrat-ExtraLightItalic_iNnZxCZt-Dx4MXMG7aW3y.ttf","Poppins-Medium_2WxhXHg3avN5MTYLoxk5_.ttf","Poppins-ExtraBold_NNFvz-AngBodec1WPLAFc.ttf","Poppins-Thin_BcelM9RbHPQFMW2p0kN8b.ttf","Montserrat-Light_-gCxqw9QHN8QJUnFXxTdk.ttf","Montserrat-SemiBold_bIRtEyTcERPaq_cXxTcZI.ttf","Poppins-BoldItalic_qI6QGaUqCF5z2HZf3O9i2.ttf","Poppins-BlackItalic_lgmfas4wI6J5Fpx_mD6fW.ttf","Montserrat-Thin_JO8axK8PLVhrbFi8I2GvO.ttf","RadioCanada-Light_zISdqjZchwpxl79UpxKQN.ttf","Montserrat-Black_aIzN5jJh2NKidvaab9kZy.ttf","Poppins-ExtraBoldItalic_C5ygI0NxrxqD5bwK3VeZj.ttf","RadioCanada-Bold_hG6nSj8gMhFwoXk7v67hw.ttf","Montserrat-Medium_Cr733rQgchVWMYiLzFRW7.ttf","RadioCanada-Medium_T5ijca6GGSVaTO6H08x1G.ttf","RadioCanada-SemiBold_tR7wWU_p8Y9Oe72GdCbf4.ttf","Montserrat-Regular_GlgVjAxAqoE7WeWDRZTpk.ttf","Montserrat-SemiBoldItalic_zxUhFTJRvCQ61z5Bsj4iV.ttf"]

      export const pageBackgroundImageAssets: string[] =
        ["CheckMark_base2_edMtbnmT1AD1kS1EHxFff.png","CarBonnet_mCFFyriOufQrkXr_d26AF.png","BlackBookBird_dBWerCj_zFqtiEZ9sAaZH.png","CheckMarkBase_wJu5EB4GEczrOJp96KqW8.png","BGSELL__LGtcsYkXHCNgGk01RERo.png","HeroShot_3_CWLJir88hideI2kp9HHD4.png","Review_BG_B4FEh8DLGlXac5MbVwYcQ.png","Grid_white_1_9aZ-pM_bW5D4V9Zr99lZz.png","Learn_BG_j_dpHBhWSEnEOnF3otK8l.png","Bookbird_veDRTRzRszxZ_WOxnQw1N.png","DesktopFold_XdsR62bdtL_mO3cTBodC4.png","Grid_Fade_jrKYyd_S_KNEdkj03W4hz.png","Tablet_SHot_LBNzwJxTzB7H0-xnN41xq.png","Birdbook_Grey_WDIBVqBR1NPWsiSDfArXw.png","Nooverlay_vcLlPmol8iIkvtPnCOKkV.png"]

      

      const Page = (_props: { system: any; }) => {
return <Body
className={`w-element`}>
<div
className={`w-element c1oypt9l c1mrdp2v c1c6pc9m c1wcam6x c1s0h5jn c13d3ul5 c16lbv1s cc52l67 cuy570l c69dy50 cq23j2p c1c24u8p cjt2m6p c1p6in38 cdqx499 chj8ial cp3ndwh c13hnv0z cfsv9jl czfwn1m cg7uw93 cw8osgr cwuskgu c1j7a4qq c1p4kqy c15wi4k8 c15yunyr cuq8ip4 c1elmar4`}>
<h1
className={`w-element c5lhvgj c114gzb1 c17jm1ja cnddqm0 c1w625zh cfg5ylh c1uaz4pr c1bdcq2k c1pt7ru0 c78f6k5 cjrj0ej`}>
{"Lorem Ipsum"}
</h1>
<Image
src={"/assets/Bookbird_veDRTRzRszxZ_WOxnQw1N.png"}
width={791}
height={786}
alt={""}
className={`w-image c1hquv9t c1ci15r2 co9x8yn c156h4fe cex24uz c8h0cbu`} />
</div>
<div
className={`w-element c179xyfv cc52l67 c173o7cs c1w3bmdk c1f08nev ckqh90x cd3cqz5 c17mqs0a c5ouf7s c1971owv cjrdw78 ccpmtji cbo2sc8 cpfmnbn cj9l1k0 c1c6hyn3 cx6zoch c1yku8m2 c1wvqgkp c2j6phz c13hnv0z cfsv9jl cr5btmf crdedwm c1ldqhs8 c1gkcscr ci6p695 c1s4k6qm c12coual c1wzfo5k cms2d1e czfwn1m c1gy5v3d c14r3n1d cbiha9i c1u0xart cu88yio c15wi4k8 c15yunyr cfuxq13 c1ig0cx3 c1j429oi cipew6u c1944i73 cr3yp24 cp0zqdr c15jnl51 cwssd4z ckywas8 cejrrux crdwm2h cd8i33g c1pj7c1p cbp6v6g cg1xa7c cutrl56 csl0icq ck5n75b c466xhk c1uqc5lh c1176r7o cv09l9w`}>
<div
className={`w-element c1j174tv cnoq4oa co9w1ah cc52l67 c173o7cs cp88ou c1gozthy c1c24u8p clfkzwh cp3ndwh c11oxpvo c1cc4guj cv1ic8u cuihm0a c19mk5g8 cpfmnbn cj9l1k0 c1c6hyn3 c13hnv0z cdj6zco c1ljn9ju c1gy5v3d cfvz1os c109qgub c14tih19 cyhfpca cjwiiz4 c15rz99y cs1cgsl`}>
<h1
className={`w-element c5lhvgj c1urm7qi c1s1gjog c1f10svd cuihm0a cvb07ta c1nn7qpq cpfmnbn cj9l1k0 c1mvqfwg c12hiof0 cys3xvt c135ls3f cnddqm0 c1mqerox coglg9n c7scmb5 c1fhkb2b c10ekjyy c1y509hd c1llxcql cyhfpca c1eu6xso`}>
{"Make Your "}
<b
className={`w-element czeeqob c4riq2v c1b06vfy cbghwcp`}>
{"First"}
</b>
{""}
<br />
{""}
{"Video Today"}
</h1>
<div
className={`w-element cd0tt2a cj9l1k0 c1c6hyn3 ctdb09d cc52l67 cp88ou cru1m34 cp3ndwh c1f10svd cuy570l c1t4keng c1kt14nj c13hnv0z cfsv9jl czfwn1m cg7uw93 cw8osgr cwuskgu`}>
<p
className={`w-element c1y4rrlz cn7vlh8 cpl2tyn cuihm0a c1f10svd ceffofa ck6dfu8 c8qpvct c1lyjppm cnddqm0 cfx6avw ckariah c1ei5ksg c1left75 cdm47iq c1y509hd cud9kgk c8rkmsu`}>
{"Learn to make videos— "}
{""}
<br />
{""}
{"In "}
<b
className={`w-element cb1eh46 cxshj0o`}>
{"Adobe Premiere Pro"}
</b>
</p>
<Image
src={"/assets/ABPP_Icon_Logo_zyONtdNirz1OPLLu7kFu-.png"}
width={2101}
height={2049}
alt={""}
className={`w-image c14p76gt ce3gse0 cjqgwbo c1p4kqy`} />
</div>
</div>
<div
className={`w-element c1az3qsp cgkdyn6 cvoxuya cc52l67 c69dy50 c1gozthy cjs5jfs c16af6s cs7jraz c11k1r8t c175gw0n c1r5df9w citp4x1 c1tuinma ctgt01u crap3r6 c1s2yqin cmunkhr cow2a5d c1gtu4g3 ccarol9`}>
<button
className={`w-element c1npa9bv c1v36e c5lhvgj c1h4ng1a cdqx499 c13lp40e c1uzv7ov c10ok871 c1vgbgll c1hbt6x1 ck6dfu8 cjs5jfs cq7l7nc cejc2wf c1pirlwg c1o7joju c6qlhmp c1d5y81g c5937iv c37a1fe c78f6k5 c1kp535d clnnz7 cn3xzyg c1dw3jc4 c1rddsl2 c17bdrss c124egrg`}>
{"START FREE TRIAL"}
</button>
</div>
<RemixForm
className={`w-element c1m6bdx9 c55sifg czumdno clytzz6 c8635h8 c7qz9i9 cgyc1q c17140et cklcbxu cfsoc4c c1yo7emy c1aezq77 cj6ctr8 c173o7cs c69dy50 cru1m34 c1lg9ied cv3f050 c1k587m2 co2psfn cgi4r9 c1tqkyf c1nh57nd c321w33 c1hic7ko c1rte529 cu5r6y1 c10j4ngl c13hnv0z cdj6zco czfwn1m cg7uw93 c1ibcse2 c1f4ne5u c1usvwq3 ctxdr62 c1vi4xag c1q3ou0e cw319tw cbq3y1m c1vlhlvj c1pvsodd c1pmk3k7 chztfvc c1e0tqij cbiha9i c1u0xart csfxzns c1igd1z2 c1v6ccjc c1v4d4iz cxpvxve cf6nu9m c1kpa8e0 c1d8xom9 cg6k45x c1nma4gy c7i0284 cfsebv5 c13pf4u7 c1ftb5q6 c11b26hu`}>
<h1
className={`w-element c1flkcir c3z3t2y c1sdqifx c6s4bs9 c19oi5sd c1ujsoxj c1xsfdpn cyzq4b cbwyhp2 cuhbja cj6ctr8 c8ovr0o c1y509hd cfz2zz2 c1kdsazu c13chls3 c1fhkb2b c1jsqktc c1mi5kyf c10lm2fs ccwbopa c1iwqixq`}>
<span
className={`w-element cbx3tek crzrx4m`}>
{"Sign up now!"}
</span>
{""}
<br />
{""}
{"To get a "}
<span
className={`w-element c15lsmec cw6ug40 c1qdr4tm`}>
{"FREE Trial!"}
</span>
</h1>
<h1
className={`w-element cnylv8g cb91w4k c12hiof0 c6s4bs9 c19oi5sd c1ujsoxj c1xsfdpn cyzq4b c1qcaaz2 cuhbja cj6ctr8 c8ovr0o c10m4har c16sspn9 c17gsc9i c12qdcru cbe6wib c17prrlq c19c274l c1c6k9pz c1pxtt56 cxrfvw`}>
{"Get instant access and start your"}
{""}
<br />
{""}
{"free trial now."}
</h1>
<div
className={`w-element c2d2z8y c1wvqgkp cc52l67 csauxtn c173o7cs cp88ou cru1m34 cjt2m6p c7ab5zo csx4m8w c1g538dd c1avg2hp c1usvwq3 ctxdr62 c11a2j33 c1kqa2lh c1s2yqin c466xhk cgu2lfb cf2mmu9 c1tbxh2x cxc6as9`}>
<h1
className={`w-element cp8crrr c3z3t2y c1sdqifx cjsxkwv cxtuqh6 czu882a cq0qs4j cyhpobn c19oi5sd c1ujsoxj c1xsfdpn cyzq4b cbwyhp2 c1y509hd c7ll9wy c1qzq2dp c1fhkb2b`}>
{"Name"}
</h1>
<Input
required={true}
name={"sds"}
placeholder={"Enter Name\n"}
checked={false}
type={"text"}
className={`w-element c1k15m98 c10m4har ce7fh4p c321w33 c1hic7ko c1rte529 cu5r6y1 cp8jpva cfrqylo c1yly58e cpfmnbn czronw5 ccufa8f c1tpprfj c18294lu c8o7zmw c1mnwxt8 c12hiof0 c1qcaaz2 c11xqvs6 cqhbzzb c190oxok`} />
</div>
<div
className={`w-element c2d2z8y c1wvqgkp cc52l67 csauxtn c173o7cs cp88ou cru1m34 cjt2m6p c7ab5zo csx4m8w c1g538dd c801ckr c1usvwq3 ctxdr62 c11a2j33 c1kqa2lh c1s2yqin c466xhk cgu2lfb cf2mmu9 c1tbxh2x cxc6as9`}>
<h1
className={`w-element cp8crrr c3z3t2y c1sdqifx cjsxkwv cxtuqh6 czu882a cq0qs4j cyhpobn c19oi5sd c1ujsoxj c1xsfdpn cyzq4b cbwyhp2 c1y509hd c7ll9wy c1qzq2dp c1fhkb2b`}>
{"Email"}
</h1>
<Input
required={true}
name={"sds"}
placeholder={"Enter Email\n"}
checked={false}
type={"text"}
className={`w-element c1k15m98 c10m4har ce7fh4p c321w33 c1hic7ko c1rte529 cu5r6y1 cp8jpva cfrqylo c1yly58e cpfmnbn czronw5 ccufa8f c1tpprfj c18294lu c8o7zmw c1mnwxt8 c12hiof0 c1qcaaz2 c11xqvs6 cqhbzzb c190oxok`} />
</div>
<div
className={`w-element c2d2z8y c1wvqgkp cc52l67 csauxtn c173o7cs cp88ou cru1m34 cjt2m6p c7ab5zo csx4m8w c1g538dd c801ckr c1usvwq3 ctxdr62 c11a2j33 c1kqa2lh c1s2yqin c466xhk cgu2lfb cf2mmu9 c1tbxh2x cxc6as9`}>
<h1
className={`w-element cp8crrr c3z3t2y c1sdqifx cjsxkwv cxtuqh6 czu882a cq0qs4j cyhpobn c19oi5sd c1ujsoxj c1xsfdpn cyzq4b cbwyhp2 c1y509hd c7ll9wy c1qzq2dp c1fhkb2b`}>
{"Phone Number"}
</h1>
<Input
required={true}
name={"sds"}
placeholder={"Enter Phone Number\n\n"}
checked={false}
type={"text"}
className={`w-element c1k15m98 c10m4har ce7fh4p c321w33 c1hic7ko c1rte529 cu5r6y1 cp8jpva cfrqylo c1yly58e cpfmnbn czronw5 ccufa8f c1tpprfj c18294lu c8o7zmw c1mnwxt8 c12hiof0 c1qcaaz2 c11xqvs6 cqhbzzb c190oxok`} />
</div>
<button
className={`w-element c1npa9bv c12hiof0 cbwyhp2 c5lhvgj c1t0e04k c1yrw6kf cddkfcb crqiczw c1uzv7ov c10ok871 c1vgbgll c1hbt6x1 c175gw0n c1yku8m2 c11s1q0k c41fauy c1xqzg c3sdrzc cvatsdc cd0jc54 c1hbfi0g c158lg7o c1n822tz c1q0th6w cnddqm0 c10m4har cg75hi0 c1g538dd ctjztv3 cgqy2xs cyqigwm c1nhtyrr c10i9n90 cxzmlij c11ptxw3 c1k15m98 c18tm9ps cxc6as9 c1wvjzo8 c1qldbip`}>
{"START FREE TRIAL"}
</button>
<h1
className={`w-element cvdyi8e c3z3t2y c1sdqifx c6s4bs9 cxtuqh6 c1jndbhv cq0qs4j cyhpobn c19oi5sd c1ujsoxj c1xsfdpn cyzq4b c1qcaaz2 cfnvu8h c10m4har c1ilmz3y c8ns86s c1fhkb2b ce7fh4p c1jh2sh4 c13hnv0z c1usvwq3 cu8h30b cw319tw c1fhx1iz c1v0zej9 c1kgtjf7 c55266w c1kpa8e0 c100qsdf`}>
{"No credit card required"}
</h1>
</RemixForm>
</div>
<div
className={`w-element c167kup9 cqnsa9w cx6zoch c13hnv0z cfsv9jl c1b43odq c15wi4k8`}>
<div
className={`w-element cpfmnbn cj9l1k0 cpxesjz c1xkm02y cc52l67 cuy570l c69dy50 cru1m34 c13hnv0z cuaupqu c1yly58e czfwn1m cg7uw93`}>
<div
className={`w-element cpfmnbn cj9l1k0 c1c6hyn3 cdzvppq ci28utw ckyz5q1 cc52l67 cuy570l c69dy50 cru1m34 c1c4nt87 c45v1h0 c13hnv0z cvtjiis c1v1gllw czfwn1m cg7uw93`}>
<div
className={`w-element`}>
<Image
src={"/assets/Adobe_Premiere_QK-aVBn-FNjFhFZq7mmTG.png"}
width={119}
height={25}
alt={""}
className={`w-image c12r9bv7 c7i4cnu c1f10svd`} />
</div>
<div
className={`w-element`}>
<Image
src={"/assets/Adobe_Premiere_QK-aVBn-FNjFhFZq7mmTG.png"}
width={119}
height={25}
alt={""}
className={`w-image c12r9bv7 c7i4cnu c1f10svd`} />
</div>
</div>
</div>
</div>
<div
className={`w-element cdzvppq cbzttfo cc52l67 c173o7cs c69dy50 cru1m34 c175gw0n cjs5jfs czxb082 c1r7sbjc c82urjk c1f08nev c54d090 cd3cqz5 c17mqs0a c1d9j4a5 csxj8nm c1stbgdb citp4x1 c1mci63n c1s2yqin c466xhk cow2a5d c1gtu4g3 cyhfpca cn9gyzm c1t95ajn`}>
<div
className={`w-element c1j174tv c19q24z5 c17llgfm cc52l67 c173o7cs c69dy50 cru1m34 c1c24u8p clfkzwh cp3ndwh c11oxpvo cbpmkmj c8ex3kl cuihm0a c19mk5g8 c656bnl cj63gtg c7xbqez c18gsvk3 cyhfpca c1mci63n`}>
<div
className={`w-element cpfmnbn cdnje10 c1c6hyn3 cuihm0a cc52l67 cp88ou cru1m34 cp3ndwh cdzvppq c1b1wm7j c173o7cs c656bnl cj63gtg`}>
<h1
className={`w-element c5lhvgj c18wu5b9 c1s1gjog c1f10svd c16seu6w cvb07ta c8qpvct c69dy50 cru1m34 cpfmnbn c1c6hyn3 cdnje10 cqjh50x ccwt94s c1jha0yl c11is5yv c78f6k5 c13uu7xm cpw73dk`}>
{"What This Course "}
<b
className={`w-element c15lsmec czeeqob`}>
{"Sets You"}
</b>
{" Up For"}
</h1>
<p
className={`w-element cjf06xu c13lp40e czdg2a8 cuihm0a c1f10svd c186y5hq ck6dfu8 cj9l1k0 c1c6hyn3 cjsxkwv co554py ctwbdys c12r8v6k c16u7nr5 cjtchs0 c1j9whkr`}>
{"Master Premiere Pro essentials — "}
{""}
<br />
{""}
{"from basic cuts to professional edits"}
</p>
</div>
</div>
<div
className={`w-element cc52l67 c69dy50 cq23j2p c173o7cs c11ivgw8 cdzvppq c2ckal1 c1oyd4d c19hi6fp czdg2a8 c1yum3ze c1s2yqin c466xhk cow2a5d c1gtu4g3 c14gma13 c18gsvk3 cq6gtzt c1uhyqxw c1mci63n`}>
<div
className={`w-element cpfmnbn c1hohx2z cf6lm31 cqk1ouq cejm84w cdkobwg c134ka27 cc52l67 c69dy50 cq23j2p cuihm0a c173o7cs c1w3bmdk c1ottgzp clytzz6 c7uisb8 c12nvp5q c17j3u08 c1a6rgtg c1ers4wi c5n9rdo c3ibv7y c162585v c186647o c1s2yqin c466xhk c11de5ml c1ykfib6 c1clodhc`}>
<Image
src={"/assets/Benefit1_o_88LX2O1y-gIkbvz4xha.png"}
width={2000}
height={1493}
alt={""}
className={`w-image cpfmnbn c5yq4gz cb10tzi c656bnl cj63gtg cf6lm31 cqk1ouq cejm84w cdkobwg cltmo93 c1yku8m2 cawu9wm c1hg97e2 ctfmkqg ctj7myy csohkx8 c1ieri2b c1h77s84`} />
<h1
className={`w-element c1x132gu czu882a c6s4bs9 c13lp40e c1i4rpd c11oxpvo cpfmnbn crl65b c1rgxldu ctwbdys`}>
{"Master Premiere Pro"}
</h1>
<div
className={`w-element cc52l67 cuy570l cpfmnbn c13osye9 cogm717 c1enzond cq23j2p cg8k8v2 c1owv3by c1s2yqin c1pd9efl crzkrw2 cf2mmu9 ctoys6u`}>
<div
className={`w-element cc52l67 c173o7cs c10qv5on cp88ou cq23j2p cwgnw6s`}>
<p
className={`w-element czu882a csx4m8w c12os8yp cc52l67 c1v36e c1yt4i0r crl65b ctwbdys ccwt94s c1p69kob c1j9whkr`}>
{"Learn to use the same tools professionals use, giving you a competitive edge."}
</p>
</div>
<div
className={`w-element cdzvppq cya0fqj c13sm20w c1niyd19 cc52l67 c1enzond c1gozthy czdg2a8 c175gw0n c18k9iwb c9h8ne0 c1z0j1j9 c1d5y81g c1s2yqin cow2a5d c1gtu4g3 c1nzxn8z`}>
<Image
src={"/assets/Checkmark_Icon_GIBBc0FJt1-3H4-ZGh0ss.png"}
width={42}
height={42}
alt={""}
className={`w-image c6kntxd c1f10svd cc52l67 c1enzond c1gozthy c1owv3by cjtchs0 c1n2z8qt`} />
</div>
</div>
</div>
<div
className={`w-element cpfmnbn c1hohx2z cf6lm31 cqk1ouq cejm84w cdkobwg c134ka27 cc52l67 c69dy50 cq23j2p cuihm0a c173o7cs c1w3bmdk c1ottgzp clytzz6 c7uisb8 c12nvp5q c17j3u08 c1a6rgtg c1ers4wi c5n9rdo c3ibv7y c162585v c186647o c1clodhc`}>
<Image
src={"/assets/Benefit2.2_FrwGETpr3ooKUqBJRocv2.png"}
width={1623}
height={1217}
alt={""}
className={`w-image cpfmnbn c5yq4gz cb10tzi c656bnl cj63gtg cf6lm31 cqk1ouq cejm84w cdkobwg cltmo93 c1yku8m2 cawu9wm c1hg97e2 ctfmkqg ctj7myy csohkx8`} />
<h1
className={`w-element c1wb9c7 czu882a c6s4bs9 c13lp40e c1i4rpd c11oxpvo cpfmnbn crl65b c1rgxldu ctwbdys`}>
{"Create Stunning Visuals"}
</h1>
<div
className={`w-element cc52l67 cuy570l cpfmnbn c13osye9 cogm717 c1enzond cq23j2p cg8k8v2 c1owv3by c1s2yqin c1pd9efl crzkrw2 cf2mmu9 ctoys6u`}>
<div
className={`w-element cdzvppq cya0fqj c13sm20w cij3y1l cc52l67 c1enzond c1gozthy c1wvqgkp c175gw0n c19hi6fp c18k9iwb cp2i4rn c1z0j1j9 c1d5y81g c1s2yqin crzkrw2 c1gtu4g3 c1nzxn8z cm0omoo`}>
<Image
src={"/assets/Checkmark_Icon_GIBBc0FJt1-3H4-ZGh0ss.png"}
width={42}
height={42}
alt={""}
className={`w-image c6kntxd c1f10svd cc52l67 c1enzond c1gozthy c1owv3by cjtchs0 c1n2z8qt c1176r7o c1gto7eu c1wmf5bt`} />
</div>
<div
className={`w-element cc52l67 c173o7cs c10qv5on cp88ou cq23j2p cwgnw6s c1s2yqin crzkrw2 c1gtu4g3`}>
<p
className={`w-element czu882a csx4m8w c12os8yp cc52l67 c1v36e c1yt4i0r crl65b ctwbdys ccwt94s c1p69kob c1j9whkr c1307liu`}>
{"Transform raw footage into captivating videos that delights your audience"}
</p>
</div>
</div>
</div>
<div
className={`w-element cpfmnbn c1hohx2z cf6lm31 cqk1ouq cejm84w cdkobwg c134ka27 cc52l67 c69dy50 cq23j2p cuihm0a c173o7cs c1w3bmdk c1ottgzp clytzz6 c7uisb8 c12nvp5q c17j3u08 c1a6rgtg c1ers4wi c5n9rdo c3ibv7y c162585v c186647o c1clodhc`}>
<Image
src={"/assets/Benefit3_4Ocw5HtzTON4wHUYvjV4s.png"}
width={1184}
height={864}
alt={""}
className={`w-image cpfmnbn c5yq4gz cb10tzi c656bnl cj63gtg cf6lm31 cqk1ouq cejm84w cdkobwg cltmo93 c1yku8m2 cawu9wm c1hg97e2 ctfmkqg ctj7myy csohkx8`} />
<h1
className={`w-element c1wb9c7 czu882a c6s4bs9 c13lp40e c1i4rpd c11oxpvo cpfmnbn crl65b c1rgxldu ctwbdys`}>
{"Build a Portfolio that wows"}
</h1>
<div
className={`w-element cc52l67 cuy570l cpfmnbn c13osye9 cogm717 c1enzond cq23j2p cg8k8v2 c1owv3by c1s2yqin c1pd9efl crzkrw2 cf2mmu9 ctoys6u`}>
<div
className={`w-element cdzvppq cya0fqj c13sm20w cij3y1l cc52l67 c1enzond c1gozthy c1wvqgkp c175gw0n c19hi6fp c18k9iwb cp2i4rn c1z0j1j9 c1d5y81g c1s2yqin crzkrw2 c1gtu4g3 c1nzxn8z cm0omoo`}>
<Image
src={"/assets/Checkmark_Icon_GIBBc0FJt1-3H4-ZGh0ss.png"}
width={42}
height={42}
alt={""}
className={`w-image c6kntxd c1f10svd cc52l67 c1enzond c1gozthy c1owv3by cjtchs0 c1n2z8qt c1176r7o c1gto7eu c1wmf5bt`} />
</div>
<div
className={`w-element cc52l67 c173o7cs c10qv5on cp88ou cq23j2p cwgnw6s c1s2yqin crzkrw2 c1gtu4g3`}>
<p
className={`w-element czu882a csx4m8w c12os8yp cc52l67 c1v36e c1yt4i0r crl65b ctwbdys ccwt94s c1p69kob c1j9whkr c1307liu`}>
{"By the end of this course, you’ll crush every work opportunity that comes your way"}
</p>
</div>
</div>
</div>
<div
className={`w-element cpfmnbn c1hohx2z cf6lm31 cqk1ouq cejm84w cdkobwg c134ka27 cc52l67 c69dy50 cq23j2p cuihm0a c173o7cs c1w3bmdk c1ottgzp clytzz6 c7uisb8 c12nvp5q c17j3u08 c1a6rgtg c1ers4wi c5n9rdo c3ibv7y c162585v c186647o c1clodhc`}>
<Image
src={"/assets/Benefit4_p38_yB2npf-JTkUHhKa0q.png"}
width={931}
height={698}
alt={""}
className={`w-image cpfmnbn c5yq4gz cb10tzi c656bnl cj63gtg cf6lm31 cqk1ouq cejm84w cdkobwg cltmo93 c1yku8m2 cawu9wm c1hg97e2 ctfmkqg ctj7myy csohkx8`} />
<h1
className={`w-element c1wb9c7 czu882a c6s4bs9 c13lp40e c1i4rpd c11oxpvo cpfmnbn crl65b c1rgxldu ctwbdys`}>
{"Kick start your career"}
</h1>
<div
className={`w-element cc52l67 cuy570l cpfmnbn c13osye9 cogm717 c1enzond cq23j2p cg8k8v2 c1owv3by c1s2yqin c1pd9efl crzkrw2 cf2mmu9 ctoys6u`}>
<div
className={`w-element cdzvppq cya0fqj c13sm20w cij3y1l cc52l67 c1enzond c1gozthy c1wvqgkp c175gw0n c19hi6fp c18k9iwb cp2i4rn c1z0j1j9 c1d5y81g c1s2yqin crzkrw2 c1gtu4g3 c1nzxn8z cm0omoo`}>
<Image
src={"/assets/Checkmark_Icon_GIBBc0FJt1-3H4-ZGh0ss.png"}
width={42}
height={42}
alt={""}
className={`w-image c6kntxd c1f10svd cc52l67 c1enzond c1gozthy c1owv3by cjtchs0 c1n2z8qt c1176r7o c1gto7eu c1wmf5bt`} />
</div>
<div
className={`w-element cc52l67 c173o7cs c10qv5on cp88ou cq23j2p cwgnw6s c1s2yqin crzkrw2 c1gtu4g3`}>
<p
className={`w-element czu882a csx4m8w c12os8yp cc52l67 c1v36e c1yt4i0r crl65b ctwbdys ccwt94s c1p69kob c1j9whkr c1307liu`}>
{"Open your doors to roles in Film, Content Creation, Marketing and more."}
</p>
</div>
</div>
</div>
</div>
</div>
<div
className={`w-element cdzvppq cbzttfo cj6ctr8 c173o7cs c69dy50 cru1m34 c175gw0n cjs5jfs czxb082 c1r7sbjc cq5buk7 c1f08nev c54d090 cd3cqz5 c17mqs0a c1d9j4a5 csxj8nm c1stbgdb c16g6aol cddg4da cxpvxve c1m0aqmc`}>
<div
className={`w-element c1j174tv c19q24z5 c17llgfm cc52l67 c173o7cs c69dy50 cru1m34 c1c24u8p clfkzwh cp3ndwh c11oxpvo cbpmkmj c8ex3kl cuihm0a c19mk5g8 c656bnl cj63gtg c13hnv0z cdj6zco c109qgub c1juz4tw`}>
<div
className={`w-element cpfmnbn cdnje10 c1c6hyn3 cuihm0a cc52l67 cp88ou cru1m34 cp3ndwh cdzvppq c1b1wm7j c173o7cs c656bnl cj63gtg`}>
<h1
className={`w-element c5lhvgj cgbn6et c1s1gjog c1f10svd c16seu6w cvb07ta c8qpvct c69dy50 cru1m34 cpfmnbn c1c6hyn3 cdnje10 c1exwz7t c6nmu6p cnddqm0 cvd99tj c1mqerox cuib9ri c1jzlv1u c1ucaqqo`}>
{"What This Course "}
{""}
<br />
{""}
<b
className={`w-element c15lsmec czeeqob cbghwcp c1qdr4tm`}>
{"Sets You"}
</b>
{" Up For"}
</h1>
<p
className={`w-element cjf06xu c13lp40e czdg2a8 cuihm0a c1f10svd c186y5hq ck6dfu8 cj9l1k0 c1c6hyn3 cjsxkwv cnddqm0 c1g4u4vm c1rdl8i0 c1v0zej9 c13a1dx1 c1ap3o23 c1f5kdxc cuib9ri`}>
{"Let’s Transform your editing skills into real-world results and career-ready projects."}
</p>
</div>
</div>
<div
className={`w-element cc52l67 c69dy50 cq23j2p c173o7cs c11ivgw8 cdzvppq c2ckal1 c1oyd4d c19hi6fp czdg2a8 c13hnv0z cdj6zco c1tjtj5h c1gvdfk8`}>
<div
className={`w-element cpfmnbn c1hohx2z cf6lm31 cqk1ouq cejm84w cdkobwg c134ka27 cc52l67 c69dy50 cq23j2p cuihm0a c173o7cs c1w3bmdk c1ottgzp clytzz6 c7uisb8 c12nvp5q c17j3u08 c13hnv0z cfsv9jl czfwn1m c1gy5v3d`}>
<div
className={`w-element c13hnv0z cdj6zco c1ljn9ju cg7uw93 cyjltn2 ccm8p60 cp1cc2n c109qgub c5snr2m c1juz4tw cs3lwc8 c119y9gl c1ahxz4z c17le1iw ctwdt18 ct8fc10 ckywas8`}>
<h1
className={`w-element c1x132gu czu882a c6s4bs9 c13lp40e c1owv3by c11oxpvo cpfmnbn cnddqm0 c1sf94nf c1fhkb2b c1yly58e c1v0zej9 c7scmb5 cbghwcp c8oo1wu`}>
{"Master "}
{""}
<br />
{""}
{"Premiere Pro"}
</h1>
<div
className={`w-element cc52l67 cuy570l cpfmnbn c13osye9 cogm717 c1enzond cq23j2p cg8k8v2 c1owv3by c13hnv0z c1yly58e cfsv9jl c1s8dc6k c1dduie c1gy5v3d`}>
<div
className={`w-element cc52l67 c173o7cs c10qv5on cp88ou cq23j2p c1qz0y26`}>
<p
className={`w-element czu882a csx4m8w c12os8yp cc52l67 c1v36e c1yt4i0r chcqzwu cnixgtc`}>
{"Learn to use the same tools professionals use, giving you a competitive edge."}
</p>
</div>
</div>
</div>
<div
className={`w-element cyjltn2 c2qmhr8`}>
<Image
src={"/assets/Benefit1_o_88LX2O1y-gIkbvz4xha.png"}
width={2000}
height={1493}
alt={""}
className={`w-image cpfmnbn c5yq4gz cb10tzi c656bnl cj63gtg c1bqgtwy cf6lm31 cqk1ouq cejm84w cdkobwg cltmo93 c41fauy c1xqzg c3sdrzc cvatsdc c1nnzhn7 ce20j0k cmal8v ca9nf2f`} />
</div>
</div>
<div
className={`w-element cpfmnbn c1hohx2z cf6lm31 cqk1ouq cejm84w cdkobwg c134ka27 cc52l67 c69dy50 cq23j2p cuihm0a c173o7cs c1w3bmdk c1ottgzp clytzz6 c7uisb8 c12nvp5q c17j3u08 c13hnv0z cfsv9jl czfwn1m c1gy5v3d`}>
<div
className={`w-element cyjltn2 c2qmhr8`}>
<Image
src={"/assets/Benefit2.2_FrwGETpr3ooKUqBJRocv2.png"}
width={1623}
height={1217}
alt={""}
className={`w-image cpfmnbn c5yq4gz cb10tzi c656bnl cj63gtg c1bqgtwy cf6lm31 cqk1ouq cejm84w cdkobwg cltmo93 c41fauy c1xqzg c3sdrzc cvatsdc c1nnzhn7 ce20j0k cmal8v ca9nf2f`} />
</div>
<div
className={`w-element c13hnv0z cdj6zco c1ljn9ju cg7uw93 cyjltn2 ccm8p60 cp1cc2n c109qgub c5snr2m c1juz4tw c17le1iw c1otxtxb c1ahxz4z c119y9gl clfpeuk ct8fc10 ckywas8`}>
<h1
className={`w-element c1x132gu czu882a c6s4bs9 c13lp40e c1owv3by c11oxpvo cpfmnbn cnddqm0 c1sf94nf c1fhkb2b c1yly58e c1v0zej9 c7scmb5 cbghwcp c8oo1wu`}>
{"Create Stunning Visuals"}
</h1>
<div
className={`w-element cc52l67 cuy570l cpfmnbn c13osye9 cogm717 c1enzond cq23j2p cg8k8v2 c1owv3by c13hnv0z c1yly58e cfsv9jl c1s8dc6k c1dduie c1gy5v3d cewidpq`}>
<div
className={`w-element cc52l67 c173o7cs c10qv5on cp88ou cq23j2p c1qz0y26`}>
<p
className={`w-element czu882a csx4m8w c12os8yp cc52l67 c1v36e c1yt4i0r chcqzwu cnixgtc`}>
{"Transform raw footage into captivating videos that delights your audience."}
</p>
</div>
</div>
</div>
</div>
<div
className={`w-element cpfmnbn c1hohx2z cf6lm31 cqk1ouq cejm84w cdkobwg c134ka27 cc52l67 c69dy50 cq23j2p cuihm0a c173o7cs c1w3bmdk c1ottgzp clytzz6 c7uisb8 c12nvp5q c17j3u08 c13hnv0z cfsv9jl czfwn1m c1gy5v3d`}>
<div
className={`w-element c13hnv0z cdj6zco c1ljn9ju cg7uw93 cyjltn2 ccm8p60 cp1cc2n c109qgub c10j4ngl c1juz4tw cs3lwc8 c119y9gl c1ahxz4z c17le1iw ctwdt18 ct8fc10 ckywas8`}>
<h1
className={`w-element c1x132gu czu882a c6s4bs9 c13lp40e c1owv3by c11oxpvo cpfmnbn c1jvjhqc c1sf94nf c1fhkb2b c1yly58e c1v0zej9 c7scmb5 cbghwcp c8oo1wu`}>
{"Build a portfolio That Wows"}
</h1>
<div
className={`w-element cc52l67 cuy570l cpfmnbn c13osye9 cogm717 c1enzond cq23j2p cg8k8v2 c1owv3by c13hnv0z c1yly58e cfsv9jl c1s8dc6k c1dduie c1gy5v3d`}>
<div
className={`w-element cc52l67 c173o7cs c10qv5on cp88ou cq23j2p c1qz0y26`}>
<p
className={`w-element czu882a csx4m8w c12os8yp cc52l67 c1v36e c1yt4i0r cyi7wxy cnixgtc`}>
{"By the end of this course, you’ll crush every work opportunity that comes your way."}
</p>
</div>
</div>
</div>
<div
className={`w-element cyjltn2 c2qmhr8`}>
<Image
src={"/assets/Benefit3_4Ocw5HtzTON4wHUYvjV4s.png"}
width={1184}
height={864}
alt={""}
className={`w-image cpfmnbn c5yq4gz cb10tzi c656bnl cj63gtg c1bqgtwy cf6lm31 cqk1ouq cejm84w cdkobwg cltmo93 c41fauy c1xqzg c3sdrzc cvatsdc c1nnzhn7 ce20j0k cmal8v ca9nf2f`} />
</div>
</div>
<div
className={`w-element cpfmnbn c1hohx2z cf6lm31 cqk1ouq cejm84w cdkobwg c134ka27 cc52l67 c69dy50 cq23j2p cuihm0a c173o7cs c1w3bmdk c1ottgzp clytzz6 c7uisb8 c12nvp5q c17j3u08 c13hnv0z cfsv9jl czfwn1m c1gy5v3d`}>
<div
className={`w-element cyjltn2 c2qmhr8`}>
<Image
src={"/assets/Benefit4_p38_yB2npf-JTkUHhKa0q.png"}
width={931}
height={698}
alt={""}
className={`w-image cpfmnbn c5yq4gz cb10tzi c656bnl cj63gtg c1bqgtwy cf6lm31 cqk1ouq cejm84w cdkobwg cltmo93 c41fauy c1xqzg c3sdrzc cvatsdc c1nnzhn7 ce20j0k cmal8v ca9nf2f`} />
</div>
<div
className={`w-element c13hnv0z cdj6zco c1ljn9ju cg7uw93 cyjltn2 ccm8p60 cp1cc2n c109qgub c10j4ngl c1juz4tw c17le1iw c1otxtxb c1ahxz4z c119y9gl clfpeuk ct8fc10 ckywas8`}>
<h1
className={`w-element c1x132gu czu882a c6s4bs9 c13lp40e c1owv3by c11oxpvo cpfmnbn c1jvjhqc c1sf94nf c1fhkb2b c1yly58e c1v0zej9 c7scmb5 cbghwcp c8oo1wu`}>
{"Kick Start Your Career"}
</h1>
<div
className={`w-element cc52l67 cuy570l cpfmnbn c13osye9 cogm717 c1enzond cq23j2p cg8k8v2 c1owv3by c13hnv0z c1yly58e cfsv9jl c1s8dc6k c1dduie c1gy5v3d cewidpq`}>
<div
className={`w-element cc52l67 c173o7cs c10qv5on cp88ou cq23j2p c1qz0y26`}>
<p
className={`w-element czu882a csx4m8w c12os8yp cc52l67 c1v36e c1yt4i0r cyi7wxy cnixgtc cwt7y4 c1wf4wzc c1b8aeyr c15k9ef5`}>
{"Open your doors to roles in Film, Content Creation, Marketing, and more."}
</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div
className={`w-element cdzvppq cc52l67 c173o7cs c69dy50 cru1m34 c175gw0n cjs5jfs c1vcxpjg cd9n31t c1ucxda7 c197z3qo corj42r c1tknyme cpfmnbn czv2olr c1jb2gro c1myvlmh cyriw7h c1j0zrcc cu13air c1ahxz4z cpe849t cfdfy0g c125jnre c1gzspnl c10z850q c1rej2xq cfmcse8 c17o4tzu cjrj0ej c1uqzvli cmvbim3`}>
<div
className={`w-element c1j174tv c19q24z5 c17llgfm cc52l67 c173o7cs c69dy50 cru1m34 c1c24u8p clfkzwh cp3ndwh c11oxpvo c1cc4guj cv1ic8u cuihm0a c19mk5g8 c656bnl cj63gtg cpfmnbn c109qgub c13hnv0z cdj6zco c1lmmfo cow2a5d c1gtu4g3 c1x5kcei c1fpxi7x c1n1qgxa`}>
<div
className={`w-element cpfmnbn cdnje10 c1c6hyn3 cuihm0a cc52l67 cp88ou cru1m34 cp3ndwh cdzvppq c1b1wm7j c173o7cs c656bnl cj63gtg ct12v2j`}>
<h1
className={`w-element c6i6cuy c18wu5b9 c1s1gjog c1f10svd c16seu6w cvb07ta c8qpvct c69dy50 cru1m34 cpfmnbn c1c6hyn3 cdnje10 c1qfk1ax c1exwz7t cvd99tj cyi7wxy c1gscali cakiyty c49093r cyhfpca`}>
{"What You'll "}
<b
className={`w-element cbghwcp c1qdr4tm`}>
{"Learn"}
</b>
</h1>
<p
className={`w-element cjf06xu c13lp40e czdg2a8 cuihm0a c1f10svd cb91w4k ck6dfu8 cj9l1k0 c1c6hyn3 cjsxkwv c1fhkb2b c1v0zej9 cnixgtc ck4r4e c10la852 cakiyty cyhfpca c1x05fz6`}>
{"Master Premiere Pro essentials — from basic "}
{""}
<br />
{""}
{"cuts to professional edits"}
</p>
</div>
</div>
<div
className={`w-element cc52l67 c69dy50 cq23j2p c173o7cs cpfmnbn cdzvppq c178xacd c16bonf2 c19hi6fp czdg2a8 cqud3ts c1c6hyn3 c13hnv0z cdj6zco c9ns0wt c109qgub c1juz4tw cnopvw8 c1phe92h cbiha9i c1u0xart cu13air cuib9ri cow2a5d c1gtu4g3 cdznvsm c1x5kcei c1176r7o`}>
<div
className={`w-element c13hnv0z cq4y22l c1hyfo11 czfwn1m c1gy5v3d c11ivgw8 c656bnl cj63gtg c173o7cs cp88ou cru1m34 c1c6hyn3 c19hi6fp czdg2a8 c178xacd c16bonf2 cl1vi2f cuib9ri cf6nu9m c1kpa8e0 c14mnp0h carpfwt c731nmu c1tbxh2x cow2a5d c1gtu4g3 c1depgob`}>
<div
className={`w-element cpfmnbn c1hohx2z cf6lm31 cqk1ouq cejm84w cdkobwg c39c4cd cc52l67 c69dy50 cq23j2p c175gw0n cuihm0a c173o7cs c1w3bmdk c1ottgzp clytzz6 ci28utw ckyz5q1 c1yku8m2 c1laidbw c1uwgybf cinsfjc c8y74kw cg5l7dd c1j0f5z5 c8r2eml c1iiptcb c1cx207d cfnhogp cxznqyh c1isah3z c10j4ngl c1exrmam cercat7 ctxezha csaev8m cs7jwuu c1ovm6zr c13hnv0z cdj6zco czfwn1m cg7uw93 c1q4x6bw cpo9fol cpyzym3 c1gxb7td`}>
<Image
src={"/assets/WYL_1_jvi98TWT5_16BWK4--K6B.png"}
width={764}
height={445}
alt={""}
className={`w-image cpfmnbn cx3ll36 cb10tzi c656bnl cj63gtg c1bqgtwy cf6lm31 cqk1ouq cejm84w cdkobwg cltmo93 cinsfjc c1yly58e c11esok8 c17r8qow ce20j0k c1h1v6hn cugu4c ceirhrd czl9q0j c10i9n90 c11ptxw3`} />
<h1
className={`w-element c1x132gu czu882a cjsxkwv c13lp40e c1i4rpd c11oxpvo cpfmnbn c1gvaukv c1fhkb2b`}>
{"Navigate Premiere Pro like a pro"}
</h1>
<p
className={`w-element czu882a csx4m8w c12os8yp cc52l67 c1v36e c1yt4i0r c1yku8m2 c1owv3by c1ybz80l cnixgtc c10la852 c8ns86s`}>
{"Set the mood, fix lighting, and give your videos a professional, cinematic look."}
</p>
</div>
<div
className={`w-element cpfmnbn c1hohx2z cf6lm31 cqk1ouq cejm84w cdkobwg c39c4cd cc52l67 c69dy50 cq23j2p c175gw0n cuihm0a c173o7cs c1w3bmdk c1ottgzp clytzz6 ci28utw ckyz5q1 c1yku8m2 c1laidbw c1uwgybf cinsfjc c8y74kw cg5l7dd c1j0f5z5 c8r2eml c1iiptcb c1cx207d cfnhogp cxznqyh c1isah3z c10j4ngl c1exrmam cercat7 ctxezha csaev8m cs7jwuu c1ovm6zr c13hnv0z cdj6zco czfwn1m cg7uw93 cpo9fol cpyzym3 c1gxb7td`}>
<Image
src={"/assets/WYL_5_l1IqelPxo3XCMs8HOIoMP.png"}
width={706}
height={445}
alt={""}
className={`w-image cpfmnbn cx3ll36 cb10tzi c656bnl cj63gtg c1bqgtwy cf6lm31 cqk1ouq cejm84w cdkobwg cltmo93 c1yly58e c11esok8 c17r8qow ce20j0k c1h1v6hn cugu4c ceirhrd czl9q0j c10i9n90 c11ptxw3`} />
<h1
className={`w-element c1x132gu czu882a cjsxkwv c13lp40e c1i4rpd c11oxpvo cpfmnbn c1gvaukv c1fhkb2b`}>
{"Edit your first Promo video"}
</h1>
<p
className={`w-element czu882a csx4m8w c12os8yp cc52l67 c1v36e c1yt4i0r c1yku8m2 c1owv3by c1ybz80l cnixgtc c10la852 c8ns86s`}>
{"Go from raw clips to a finished, dynamic promotional video in minutes."}
</p>
</div>
<div
className={`w-element cpfmnbn c1hohx2z cf6lm31 cqk1ouq cejm84w cdkobwg c39c4cd cj6ctr8 c69dy50 cq23j2p c175gw0n cuihm0a c173o7cs c1w3bmdk c1ottgzp clytzz6 ci28utw ckyz5q1 c1yku8m2 c1laidbw c1uwgybf cinsfjc c8y74kw cg5l7dd c1j0f5z5 c8r2eml c1iiptcb c1cx207d cfnhogp cxznqyh c1isah3z c10j4ngl c1exrmam cercat7 ctxezha csaev8m cs7jwuu c1ovm6zr citp4x1 cdj6zco czfwn1m cg7uw93 c1s2yqin cpo9fol cpyzym3 c1gxb7td c1t4548c`}>
<Image
src={"/assets/WYL_2_dzJIkI5xlVEkIIiKiBhpA.png"}
width={764}
height={445}
alt={""}
className={`w-image cpfmnbn cx3ll36 cb10tzi c656bnl cj63gtg c1bqgtwy cf6lm31 cqk1ouq cejm84w cdkobwg cltmo93 c1yly58e c11esok8 c17r8qow ce20j0k c1h1v6hn cugu4c ceirhrd czl9q0j c10i9n90 c11ptxw3`} />
<h1
className={`w-element c1x132gu czu882a cjsxkwv c13lp40e c1i4rpd c11oxpvo cpfmnbn c1gvaukv c1fhkb2b carrqgc`}>
{"Master Color Grading & Correction"}
</h1>
<p
className={`w-element czu882a csx4m8w c12os8yp cc52l67 c1v36e c1yt4i0r c1yku8m2 c1owv3by c1ybz80l cnixgtc c10la852 c8ns86s`}>
{"Set the mood, fix lighting, and give your videos a professional, cinematic look."}
</p>
</div>
<div
className={`w-element cpfmnbn c1hohx2z cf6lm31 cqk1ouq cejm84w cdkobwg c39c4cd cc52l67 c69dy50 cq23j2p c175gw0n cuihm0a c173o7cs c1w3bmdk c1ottgzp clytzz6 ci28utw ckyz5q1 c1yku8m2 c1laidbw c1uwgybf cinsfjc c8y74kw cg5l7dd c1j0f5z5 c8r2eml c1iiptcb c1cx207d cfnhogp cxznqyh c1isah3z c10j4ngl c1exrmam cercat7 ctxezha csaev8m cs7jwuu c1ovm6zr c13hnv0z cdj6zco czfwn1m cg7uw93 cpyzym3 cpo9fol c1gxb7td`}>
<Image
src={"/assets/WYL_4_jx42KXxR7oX3UUxlpvgCm.png"}
width={764}
height={445}
alt={""}
className={`w-image cpfmnbn cx3ll36 cb10tzi c656bnl cj63gtg c1bqgtwy cf6lm31 cqk1ouq cejm84w cdkobwg cltmo93 c1yly58e c11esok8 c17r8qow ce20j0k c1h1v6hn cugu4c ceirhrd czl9q0j c10i9n90 c11ptxw3`} />
<h1
className={`w-element c1x132gu czu882a cjsxkwv c13lp40e c1i4rpd c11oxpvo cpfmnbn c1gvaukv c1fhkb2b`}>
{"Apply stunning Visual effects"}
</h1>
<p
className={`w-element czu882a csx4m8w c12os8yp cc52l67 c1v36e c1yt4i0r c1yku8m2 c1owv3by c1ybz80l cnixgtc c10la852 c8ns86s`}>
{"Learn to use the same tools professionals use, giving you a competitive edge."}
</p>
</div>
<div
className={`w-element cpfmnbn c1hohx2z cf6lm31 cqk1ouq cejm84w cdkobwg c39c4cd cj6ctr8 c69dy50 cq23j2p c175gw0n cuihm0a c173o7cs c1w3bmdk c1ottgzp clytzz6 ci28utw ckyz5q1 c1yku8m2 c1laidbw c1uwgybf cinsfjc c8y74kw cg5l7dd c1j0f5z5 c8r2eml c1iiptcb c1cx207d cfnhogp cxznqyh c1isah3z c10j4ngl c1exrmam cercat7 ctxezha csaev8m cs7jwuu c1ovm6zr citp4x1 cdj6zco czfwn1m cg7uw93 c1s2yqin c19ezr9i cl78ank c1t4548c cb8uye6 c1cd0h0h c1s2dbsn c1vmocbh ch0zs8s cgtl0h4 c139ilm4 csjo2jo c1vouuoy cyovx7q cf6nu9m c1xxakoe c1285oc1 cz1w7u1 c1rzmob5 c4zl834`}>
<Image
src={"/assets/WYL_3_DB_81ezxx6e8UcITKF8Uy.png"}
width={764}
height={445}
alt={""}
className={`w-image cpfmnbn cx3ll36 cb10tzi c656bnl cj63gtg c1bqgtwy cf6lm31 cqk1ouq cejm84w cdkobwg cltmo93 c1yly58e c11esok8 c17r8qow ce20j0k c1h1v6hn cugu4c ceirhrd czl9q0j c10i9n90 c11ptxw3 c2qmhr8 c1ftb5q6 c1x2awez c1pne45q cdto17p c1hj1d1v c12reqz3 ctefxkf c7i0284 cfsebv5 c12d9jfg ct7eyxl c1ohrkfn cxh4bgh c7tzh3d`} />
<div
className={`w-element cpfmnbn c1hohx2z cf6lm31 cqk1ouq cejm84w cdkobwg c39c4cd cj6ctr8 c69dy50 cq23j2p c175gw0n cuihm0a c173o7cs c1w3bmdk c1ottgzp clytzz6 ci28utw ckyz5q1 c1yku8m2 c1laidbw c1uwgybf cinsfjc c8y74kw cg5l7dd c1j0f5z5 c8r2eml c1iiptcb c1cx207d cfnhogp cxznqyh c1isah3z c10j4ngl c1exrmam cercat7 ctxezha csaev8m cs7jwuu c1ovm6zr citp4x1 cdj6zco czfwn1m cg7uw93 c1s2yqin c2zjzu8 c1togibw csz9get c1t4548c cb8uye6 c1cd0h0h c1rjhzug cf6nu9m c1xxakoe c9swmfp c1pne45q c7i0284 cfsebv5 c5onhs9 c1wa1zfl c13qycsd c1qwmxox`}>
<h1
className={`w-element c1x132gu czu882a cjsxkwv c13lp40e c1i4rpd c11oxpvo cpfmnbn c1gvaukv c1fhkb2b c1483pb2 cbkojqr cuib9ri c1r2ij8c c1pne45q c7i0284 cfsebv5 cf741h2`}>
{"Create your "}
{""}
<br />
{""}
{"Portfolio Piece"}
</h1>
<p
className={`w-element czu882a csx4m8w c12os8yp cc52l67 c1v36e c1yt4i0r c1yku8m2 c1owv3by c1ybz80l cnixgtc c10la852 c8ns86s cf741h2 c1v3e42z cyhfpca c14gma13`}>
{"By the end, you’ll have a finished project to showcase your skills—using provided media or your own"}
</p>
</div>
</div>
</div>
<div
className={`w-element c13hnv0z cq4y22l c1hyfo11 czfwn1m c1gy5v3d c11ivgw8 c656bnl cj63gtg c1c6hyn3 c173o7cs c19hi6fp czdg2a8 c178xacd c16bonf2 cc52l67 c1hz8abl`}>
<div
className={`w-element cpfmnbn c1hohx2z cf6lm31 cqk1ouq cejm84w cdkobwg c39c4cd cc52l67 c69dy50 cq23j2p c175gw0n cuihm0a c173o7cs c1w3bmdk c1ottgzp clytzz6 ci28utw ckyz5q1 c1yku8m2 c1laidbw c1uwgybf cinsfjc c8y74kw cg5l7dd c1j0f5z5 c8r2eml c1iiptcb c1cx207d cfnhogp cxznqyh c1isah3z c10j4ngl c1exrmam cercat7 ctxezha csaev8m cs7jwuu c1ovm6zr c13hnv0z cdj6zco czfwn1m cg7uw93`}>
<Image
src={"/assets/WYL_2_dzJIkI5xlVEkIIiKiBhpA.png"}
width={764}
height={445}
alt={""}
className={`w-image cpfmnbn cx3ll36 cb10tzi c656bnl cj63gtg c1bqgtwy cf6lm31 cqk1ouq cejm84w cdkobwg cltmo93 c1yly58e c11esok8 c17r8qow ce20j0k c1h1v6hn cugu4c ceirhrd czl9q0j c10i9n90 c11ptxw3`} />
<h1
className={`w-element c1x132gu czu882a cjsxkwv c13lp40e c1i4rpd c11oxpvo cpfmnbn c1ex9nlp c1fhkb2b`}>
{"Master Color Grading & Correction"}
</h1>
<p
className={`w-element czu882a csx4m8w c12os8yp cc52l67 c1v36e c1yt4i0r c1yku8m2 c1owv3by c1ybz80l cnixgtc c10la852 c8ns86s`}>
{"Set the mood, fix lighting, and give your videos a professional, cinematic look."}
</p>
</div>
<div
className={`w-element cpfmnbn c1hohx2z cf6lm31 cqk1ouq cejm84w cdkobwg c39c4cd cc52l67 c69dy50 cq23j2p c175gw0n cuihm0a c173o7cs c1w3bmdk c1ottgzp clytzz6 ci28utw ckyz5q1 c1yku8m2 c1laidbw c1uwgybf cinsfjc c8y74kw cg5l7dd c1j0f5z5 c8r2eml c1iiptcb c1cx207d cfnhogp cxznqyh c1isah3z c10j4ngl c1exrmam cercat7 ctxezha csaev8m cs7jwuu c1ovm6zr c13hnv0z cdj6zco czfwn1m cg7uw93`}>
<Image
src={"/assets/WYL_3_DB_81ezxx6e8UcITKF8Uy.png"}
width={764}
height={445}
alt={""}
className={`w-image cpfmnbn cx3ll36 cb10tzi c656bnl cj63gtg c1bqgtwy cf6lm31 cqk1ouq cejm84w cdkobwg cltmo93 c1yly58e c11esok8 c17r8qow ce20j0k c1h1v6hn cugu4c ceirhrd czl9q0j c10i9n90 c11ptxw3`} />
<h1
className={`w-element c1x132gu czu882a cjsxkwv c13lp40e c1i4rpd c11oxpvo cpfmnbn c1gvaukv c1fhkb2b`}>
{"Create your Portfolio Piece"}
</h1>
<p
className={`w-element czu882a csx4m8w c12os8yp cc52l67 c1v36e c1yt4i0r c1yku8m2 c1owv3by c1ybz80l cnixgtc c10la852 c8ns86s`}>
{"By the end, you’ll have a finished project to showcase your skills—using provided media or your own"}
</p>
</div>
</div>
</div>
</div>
<div
className={`w-element cbi5hb2 c1c0x7dy`}>
<div
className={`w-element cj6ctr8 c13hnv0z czfwn1m c1gy5v3d cdgzciv cbkojqr cyhfpca c117aq07 c1wbnc3n csuggei`}>
<div
className={`w-element cc52l67 cp88ou cq23j2p c173o7cs ctanv61 c1mx206x c13hnv0z c1ljn9ju cg7uw93 crur07v c1rdl8i0 cdj6zco cb128zo c1pzylyx c1u0swxx c510k99 ckg2w3t cuib9ri crspql3 cm6loog c18hbjwz c1pxtt56 cgu2lfb c1gtu4g3 c1jukyda c1f75w51`}>
<div
className={`w-element c1yly58e`}>
<h1
className={`w-element c1rcwf4s czeeqob c6i6cuy cjsxkwv csx4m8w cghv7mf c3poqki c1as8rly cyi7wxy c1tnn76x cbghwcp c1fhkb2b c1v0zej9 c1regzgk cjffwr8 c1svna3l co847yd`}>
{"Why you should"}
</h1>
<h1
className={`w-element c1rcwf4s czeeqob c6i6cuy cjsxkwv csx4m8w cghv7mf c3poqki c1as8rly c1qdr4tm c1tnn76x cbghwcp c1v0zej9 c1fhkb2b c1regzgk cjffwr8 c1svna3l co847yd`}>
{"learn with us"}
</h1>
</div>
<p
className={`w-element c1c2nini cb91w4k c1rcwf4s cpcobf2 cg75hi0 c1tnn76x c10la852 c1qzq2dp c1guldbl c1v0zej9 c1fhkb2b cq4qd77 c1j9whkr`}>
{"Let’s Transform your editing skills into real-world results and career-ready projects."}
</p>
</div>
<div
className={`w-element cc52l67 c69dy50 cq23j2p c173o7cs c1rdl8i0 cxyvny4 c1u0swxx c1g8pya7 c1mvl38w czsub8w cwcvcbh c1pzylyx c1rr5xhr c1fab7qa cot79r3 c1xjq1ia c1akemag c6xttrn cuib9ri crspql3 cm6loog`}>
<div
className={`w-element c13hnv0z c1fz5xt0 czfwn1m cg7uw93 c466xhk cow2a5d c1gtu4g3`}>
<div
className={`w-element c1f1ms6b c1hohx2z c97od1t c1b5irjp c9l716h cozng0b cim5z40 c8qpvct c69dy50 cq23j2p c19q462i c173o7cs c1w3bmdk c1ottgzp clytzz6 c1o8tvlg c55sifg c1p51nvr c17j3u08 c12v00gg ccdlefs c146tp20 ci18ytp cik1gw5 c4k29i9 c1ebj4u5 c1gkcscr ci6p695 c1s4k6qm c12coual ceq68xr c1vvl4ak c1uzhsxg cxz62lk ctv87x8 cgby5tr cunalc9`}>
<Image
src={"/assets/Steps_Icon_mAPOiYesZnwYfbvvirRIo.png"}
width={444}
height={444}
alt={""}
className={`w-image c16uhk9o cjsvxm1 c1us88he c656bnl cj63gtg cf6lm31 cqk1ouq cejm84w cdkobwg cltmo93 c1o03ttv ceiw6su c1oqvtlq c12qwlnd cuirm33 c1oskge8`} />
<div
className={`w-element c8qpvct cuy570l cpfmnbn c13osye9 cogm717 c1enzond cru1m34 c1yku8m2 c175gw0n`}>
<div
className={`w-element c13hnv0z czfwn1m c1gy5v3d coa431f c1sv86b5`}>
<h1
className={`w-element c1rjdi78 czu882a cjsxkwv c13lp40e c175gw0n c11oxpvo cpfmnbn c1rcwf4s civ35vr c1vp5kwt c1tnn76x cbghwcp c1sv86b5 c1fhkb2b c1v0zej9`}>
{"Learn from "}
</h1>
</div>
<p
className={`w-element czu882a csx4m8w c12os8yp cc52l67 cpcobf2 civ35vr c1rcwf4s c120u95o c1tnn76x cud9kgk c8llscc c1v0zej9 c1fhkb2b`}>
{"Learn at your own speed—no deadlines, no pressure. Pause, practice, and jump back in whenever you’re ready."}
</p>
</div>
</div>
<div
className={`w-element c1f1ms6b c1hohx2z c97od1t c1b5irjp c9l716h cozng0b cim5z40 c8qpvct c69dy50 cq23j2p c19q462i c173o7cs c1w3bmdk c1ottgzp clytzz6 c1o8tvlg c55sifg c1p51nvr c17j3u08 c10hg5vn crur07v c146tp20 ci18ytp cik1gw5 c4k29i9 c1ebj4u5 c1uzhsxg c16qay81`}>
<Image
src={"/assets/ScheduleIcon_sIiVJE2WV2UtXSgWpICX2.png"}
width={74}
height={74}
alt={""}
className={`w-image c16uhk9o cjsvxm1 c1us88he c656bnl cj63gtg cf6lm31 cqk1ouq cejm84w cdkobwg cltmo93 c1o03ttv ceiw6su c1oqvtlq c12qwlnd cuirm33 c1oskge8 c1tvuvna c1rrvlk9 c1n2x92s crzg2ni c5ookpx cwqkvci`} />
<div
className={`w-element c8qpvct cuy570l cpfmnbn c13osye9 cogm717 c1enzond cru1m34 c1yku8m2 c175gw0n`}>
<div
className={`w-element c13hnv0z czfwn1m c1gy5v3d cs0onvz`}>
<h1
className={`w-element c1rjdi78 czu882a cjsxkwv c13lp40e c175gw0n c11oxpvo cpfmnbn c1rcwf4s civ35vr c1vp5kwt c1tnn76x cbghwcp c1sv86b5 c1fhkb2b c1v0zej9`}>
{"Designed to "}
</h1>
<h1
className={`w-element c1rjdi78 czu882a cjsxkwv c13lp40e c175gw0n c11oxpvo cpfmnbn c1rcwf4s civ35vr c1qdr4tm c1tnn76x cbghwcp c1sv86b5 c1fhkb2b c1v0zej9`}>
{"Respect"}
</h1>
</div>
<h1
className={`w-element c1rjdi78 czu882a cjsxkwv c13lp40e c175gw0n c11oxpvo cpfmnbn c1rcwf4s civ35vr c1qdr4tm c1tnn76x cbghwcp c1sv86b5 coa431f cqtcp12`}>
{"your time"}
</h1>
<p
className={`w-element czu882a csx4m8w c12os8yp cc52l67 cpcobf2 civ35vr c1rcwf4s c120u95o c1tnn76x cud9kgk c8llscc c1v0zej9 c1fhkb2b`}>
{"Lessons are short, practical, and very flexible. So even if you’re juggling school or work. you can achieve success"}
</p>
</div>
</div>
</div>
<div
className={`w-element c13hnv0z czfwn1m cg7uw93 cfsv9jl c466xhk`}>
<div
className={`w-element c1f1ms6b c1hohx2z c97od1t c1b5irjp c9l716h cozng0b cim5z40 c8qpvct c69dy50 cq23j2p c19q462i c173o7cs c1w3bmdk c1ottgzp clytzz6 c1o8tvlg c55sifg c1p51nvr c17j3u08 c12v00gg ccdlefs c146tp20 ci18ytp cik1gw5 c4k29i9 c1ebj4u5 c1gkcscr ci6p695 c1s4k6qm c12coual ceq68xr c1vvl4ak c1uzhsxg cxz62lk ctv87x8 cgby5tr cunalc9`}>
<Image
src={"/assets/SolutionIcon_thb79Nj3MosOz8N18yMHM.png"}
width={72}
height={72}
alt={""}
className={`w-image c16uhk9o cjsvxm1 c1us88he c656bnl cj63gtg cf6lm31 cqk1ouq cejm84w cdkobwg cltmo93 c1o03ttv ceiw6su c1oqvtlq c12qwlnd cuirm33 c1oskge8`} />
<div
className={`w-element c8qpvct cuy570l cpfmnbn c13osye9 cogm717 c1enzond cru1m34 c1yku8m2 c175gw0n`}>
<div
className={`w-element c13hnv0z czfwn1m c1gy5v3d cs0onvz c1sv86b5`}>
<h1
className={`w-element c1rjdi78 czu882a cjsxkwv c13lp40e c175gw0n c11oxpvo cpfmnbn c1rcwf4s civ35vr c1vp5kwt c1tnn76x cbghwcp c1sv86b5 c1fhkb2b c1v0zej9`}>
{"Learn from "}
</h1>
<h1
className={`w-element c1rjdi78 czu882a cjsxkwv c13lp40e c175gw0n c11oxpvo cpfmnbn c1rcwf4s civ35vr c1qdr4tm c1tnn76x cbghwcp c1sv86b5 c1fhkb2b c1v0zej9`}>
{"Pros in"}
</h1>
</div>
<h1
className={`w-element c1rjdi78 czu882a cjsxkwv c13lp40e c175gw0n c11oxpvo cpfmnbn c1rcwf4s civ35vr c1qdr4tm c1tnn76x cbghwcp c1sv86b5 coa431f cqtcp12`}>
{"the field"}
</h1>
<p
className={`w-element czu882a csx4m8w c12os8yp cc52l67 cpcobf2 civ35vr c1rcwf4s c120u95o c1tnn76x cud9kgk c8llscc c1v0zej9 c1fhkb2b`}>
{"Our instructors are professional editors, so you get up-to-date techniques and insider tips"}
</p>
</div>
</div>
<div
className={`w-element c1f1ms6b c1hohx2z c97od1t c1b5irjp c9l716h cozng0b cim5z40 c8qpvct c69dy50 cq23j2p c19q462i c173o7cs c1w3bmdk c1ottgzp clytzz6 c1o8tvlg c55sifg c1p51nvr c17j3u08 c10hg5vn crur07v c146tp20 ci18ytp cik1gw5 c4k29i9 c1ebj4u5 c1uzhsxg`}>
<Image
src={"/assets/Headphones_0eAivkY_fJdGAb_5l-CXA.png"}
width={444}
height={444}
alt={""}
className={`w-image c16uhk9o cjsvxm1 c1us88he c656bnl cj63gtg cf6lm31 cqk1ouq cejm84w cdkobwg cltmo93 c1o03ttv ceiw6su c1oqvtlq c12qwlnd cuirm33 c1oskge8`} />
<div
className={`w-element c8qpvct cuy570l cpfmnbn c13osye9 cogm717 c1enzond cru1m34 c1yku8m2 c175gw0n`}>
<div
className={`w-element c13hnv0z czfwn1m c1gy5v3d coa431f`}>
<h1
className={`w-element c1rjdi78 czu882a cjsxkwv c13lp40e c175gw0n c11oxpvo cpfmnbn c1rcwf4s civ35vr c1vp5kwt c1tnn76x cbghwcp c1qzq2dp c1fhkb2b c1v0zej9`}>
{"Support on "}
<span
className={`w-element c1qdr4tm`}>
{"demand "}
</span>
</h1>
</div>
<p
className={`w-element czu882a csx4m8w c12os8yp cc52l67 cpcobf2 civ35vr c1rcwf4s c120u95o c1tnn76x cud9kgk c8llscc c1v0zej9 c1fhkb2b`}>
{"You can reach out to us for help  anytime, whenever you feel stuck, Get personal guidance from us."}
</p>
</div>
</div>
</div>
</div>
</div>
<div
className={`w-element citp4x1 c8qpvct cpfmnbn cj9l1k0 c16gw1ad cjv2sc3`}>
<div
className={`w-element cc52l67 cp88ou cq23j2p c173o7cs ctanv61`}>
<h1
className={`w-element c1rcwf4s czeeqob c6i6cuy cjsxkwv csx4m8w cghv7mf c3poqki c1as8rly c16afc5i`}>
{"Why you should "}
<b
className={`w-element c15lsmec czeeqob`}>
{"learn with us"}
</b>
</h1>
<p
className={`w-element c1c2nini cb91w4k c1rcwf4s cpcobf2`}>
{"Find out why learning with us makes all the difference."}
</p>
</div>
<div
className={`w-element cc52l67 c69dy50 cq23j2p c173o7cs cpfmnbn cj9l1k0 c656bnl cj63gtg`}>
<div
className={`w-element c1f1ms6b c1hohx2z c97od1t c1b5irjp c9l716h cozng0b cdzvppq cc52l67 cp88ou cq23j2p c19q462i c173o7cs c1w3bmdk c1ottgzp clytzz6 c1e1h7bp c55sifg c1p51nvr c1f08nev c54d090 cd3cqz5 c17mqs0a c1d9j4a5 c1nsiik0 cjsxkwv cw5os1f c69sovp cup7w90 cuejh0i c16gw1ad cjv2sc3 c17j3u08 c1sjgai9`}>
<Image
src={"/assets/Steps_Icon_mAPOiYesZnwYfbvvirRIo.png"}
width={444}
height={444}
alt={""}
className={`w-image c16uhk9o cjsvxm1 c1us88he c656bnl cj63gtg cf6lm31 cqk1ouq cejm84w cdkobwg cltmo93 czr6lhb`} />
<div
className={`w-element c8qpvct cuy570l cpfmnbn c13osye9 cogm717 c1enzond cru1m34 c1yku8m2 c175gw0n`}>
<h1
className={`w-element c1rjdi78 czu882a cjsxkwv c13lp40e c175gw0n c11oxpvo cpfmnbn c1rcwf4s civ35vr`}>
{"Learn on your speed"}
</h1>
<p
className={`w-element czu882a csx4m8w c12os8yp cc52l67 cpcobf2 civ35vr c1rcwf4s`}>
{"Learn at your own speed—no deadlines, no pressure. Pause, practice, and jump back in whenever you’re ready."}
</p>
</div>
</div>
<div
className={`w-element c1f1ms6b c1hohx2z c97od1t c1b5irjp c9l716h cozng0b cdzvppq c8qpvct c69dy50 cq23j2p c19q462i c173o7cs c1w3bmdk c1ottgzp clytzz6 c1uok3pn c55sifg c1p51nvr cw5os1f c69sovp c17j3u08`}>
<Image
src={"/assets/ScheduleIcon_sIiVJE2WV2UtXSgWpICX2.png"}
width={74}
height={74}
alt={""}
className={`w-image c16uhk9o cjsvxm1 c1us88he c656bnl cj63gtg cf6lm31 cqk1ouq cejm84w cdkobwg cltmo93`} />
<div
className={`w-element c8qpvct cuy570l cpfmnbn c13osye9 cogm717 c1enzond cru1m34 c1yku8m2 c175gw0n`}>
<h1
className={`w-element c1rjdi78 czu882a cjsxkwv c13lp40e c175gw0n c11oxpvo cpfmnbn c1rcwf4s civ35vr`}>
{"Learn from pros in the field"}
</h1>
<p
className={`w-element czu882a csx4m8w c12os8yp cc52l67 cpcobf2 civ35vr c1rcwf4s`}>
{"Our instructors are professional editors, so you get up-to-date techniques and insider tips"}
</p>
</div>
</div>
<div
className={`w-element c1f1ms6b c1hohx2z c97od1t c1b5irjp c9l716h cozng0b cdzvppq c8qpvct c69dy50 cq23j2p c19q462i c173o7cs c1w3bmdk c1ottgzp clytzz6 c1wgz65a c55sifg c1p51nvr c1f08nev c54d090 cd3cqz5 c17mqs0a c1d9j4a5 c1nsiik0 cw5os1f c69sovp c17j3u08 c1sjgai9`}>
<Image
src={"/assets/SolutionIcon_thb79Nj3MosOz8N18yMHM.png"}
width={72}
height={72}
alt={""}
className={`w-image c16uhk9o cjsvxm1 c1us88he c656bnl cj63gtg cf6lm31 cqk1ouq cejm84w cdkobwg cltmo93`} />
<div
className={`w-element c8qpvct cuy570l cpfmnbn c13osye9 cogm717 c1enzond cru1m34 c1yku8m2 c175gw0n`}>
<h1
className={`w-element c1rjdi78 czu882a cjsxkwv c13lp40e c175gw0n c11oxpvo cpfmnbn c1rcwf4s civ35vr`}>
{"Learn from pros in the field"}
</h1>
<p
className={`w-element czu882a csx4m8w c12os8yp cc52l67 cpcobf2 civ35vr c1rcwf4s`}>
{"Our instructors are professional editors, so you get up-to-date techniques and insider tips"}
</p>
</div>
</div>
<div
className={`w-element c1f1ms6b c1hohx2z c97od1t c1b5irjp c9l716h cozng0b cdzvppq c8qpvct c69dy50 cq23j2p c19q462i c173o7cs c1w3bmdk c1ottgzp clytzz6 c1uok3pn c55sifg c1p51nvr cw5os1f c69sovp c17j3u08`}>
<Image
src={"/assets/Headphones_0eAivkY_fJdGAb_5l-CXA.png"}
width={444}
height={444}
alt={""}
className={`w-image c16uhk9o cjsvxm1 c1us88he c656bnl cj63gtg cf6lm31 cqk1ouq cejm84w cdkobwg cltmo93`} />
<div
className={`w-element c8qpvct cuy570l cpfmnbn c13osye9 cogm717 c1enzond cru1m34 c1yku8m2 c175gw0n`}>
<h1
className={`w-element c1rjdi78 czu882a cjsxkwv c13lp40e c175gw0n c11oxpvo cpfmnbn c1rcwf4s civ35vr`}>
{"Support on Demand"}
</h1>
<p
className={`w-element czu882a csx4m8w c12os8yp cc52l67 cpcobf2 civ35vr c1rcwf4s`}>
{"You can reach out to us for help  anytime, whenever you feel stuck, Get personal guidance from us."}
</p>
</div>
</div>
</div>
</div>
</div>
<Box
className={`w-box cc2iti5 c1xjq1ia c1akemag c1nhpz14 c13hnv0z cdj6zco czfwn1m cg7uw93 cnopvw8 cqtcp12 c11ptxw3 c1mx206x c10i9n90 c1vw7qpq cycmyni cq70kov ccbb9ie caxdt6b ckxgznn c84rm9o c1s8dc6k c17r8qow csfxzns cmmoegx c1re6sm1 cxx1vfq c1e4v7pl c6w7oqo cjsxkwv c1yr1m5x c16gw1ad cjv2sc3 c177vhh6 c1f08nev c54d090 cd3cqz5 c1g2qxef c13l0g18 c1971owv c1c24u8p clytzz6 cj9l1k0 c69dy50 cq23j2p c1c6hyn3 crzubtl c11ivgw8 c1sjgai9 c10hznub cbkeunp cqvba3o`}>
<div
className={`w-element csrt7zo clytzz6 c8635h8 cp8crrr cj6ctr8 c1vksir5 c13hnv0z c1ljn9ju cg7uw93 cp6ro43 cbge1d5 c1yly58e cdj6zco catmjhv c1s2yqin`}>
<div
className={`w-element c13hnv0z czfwn1m c1gy5v3d`}>
<h1
className={`w-element cjsxkwv cupfqja c6kctne c1rcwf4s c1y4rrlz ci46mep c2we4v1 c1j85aej c9voei cp6ro43 c1fhkb2b c1v0zej9 c1tnn76x cbghwcp c1lqeihs c15wi4k8 c11twq70`}>
{"What our"}
</h1>
<h1
className={`w-element cjsxkwv cupfqja c6kctne c1rcwf4s c1y4rrlz ci46mep c2we4v1 c1qdr4tm c9voei c15wi4k8 cp6ro43 c1fhkb2b c1v0zej9 c1tnn76x cbghwcp c1lqeihs c9e22e0 c11twq70`}>
{"students"}
</h1>
</div>
<h1
className={`w-element cjsxkwv cupfqja c6kctne c1rcwf4s c1y4rrlz ci46mep c2we4v1 c1j85aej c9voei cii6h8s cp6ro43 c1fhkb2b c1v0zej9 c1tnn76x cbghwcp c1lqeihs c14cmd0h cow2a5d cf2mmu9 c11rf7y8 c11twq70`}>
{"are saying"}
</h1>
<p
className={`w-element c1c2nini cb91w4k c1rcwf4s cpcobf2 cg75hi0 c1tnn76x cyi7wxy c1qzq2dp c1guldbl c1v0zej9 c1fhkb2b cq4qd77 c1j9whkr c78f6k5`}>
{"Don't take our word for it,"}
{""}
<br />
{""}
{"Hear what the students say."}
</p>
</div>
<div
className={`w-element csrt7zo clytzz6 c8635h8 cp8crrr c8qpvct c1vksir5 citp4x1 czfwn1m c1gy5v3d`}>
<h1
className={`w-element cjsxkwv cupfqja c6kctne c1rcwf4s c1y4rrlz ci46mep c2we4v1 c1j85aej c9voei c1a3hlfw cp6ro43 c1fhkb2b c1v0zej9 c1tnn76x cbghwcp c1lqeihs`}>
{"What our students are saying"}
</h1>
</div>
<Box
className={`w-box c1s8dc6k c1tuinma c1mx206x crur07v ci38l1c czl8vgb c1xjq1ia c1akemag c1yly58e cdj6zco c1gy5v3d c1ljn9ju c14tih19 c28kk3r c1b1ozse c1nxzuss cgkzmw7 c1k15m98 cqtcp12 c17r8qow cmy5b8t c14r3n1d cakiyty c1t4548c c1re6sm1 cxx1vfq c1e4v7pl c6w7oqo c1f10svd cj6ctr8 c1hz45ru cxpvxve ${"swiper swiper-c-auto"}`}>
<Box
className={`w-box c1yly58e c1tuinma ci38l1c c14tih19 c13hnv0z czfwn1m cg7uw93 c1s8dc6k cfsv9jl c1gxr9h0 c1hi46vc c17r8qow c1xjq1ia c1akemag cf6nu9m c1kpa8e0 c1rjhzug ce3j7kc c1re6sm1 cxx1vfq c1e4v7pl c6w7oqo c1mrdp2v c1c6pc9m c1wcam6x c1s0h5jn cuhbja c152jg2x cc3vg36 c8635h8 ${"swiper-wrapper"}`}>
<Box
className={`w-box cc5t07c c1tuinma cz8roac ctxdr62 c1g6w3ym c1xjq1ia c1akemag c13hnv0z czfwn1m cg7uw93 c1usvwq3 c124qycb c1sw46i9 c1mrdp2v c1c6pc9m c1wcam6x c1s0h5jn c15wkmdg cxc65p0 cpc3cah c16lpank cpfmnbn c6mca0r cww9qqq c1h9a3st ${"swiper-slide"}`}>
<Box
className={`w-box c1hbfi0g c158lg7o c1n822tz c1q0th6w cdotr50 c14vbx55 c1x9k1bu c1ydk261 c28kk3r c1b1ozse c1nxzuss cgkzmw7 ceyeztt c13hnv0z c1jp7r3w czfwn1m cg7uw93 cdj6zco c1mma3un c1xjq1ia c1akemag cz8roac c173o7cs cha9onf c1gz0c4n c1q5tg0c cjn5g4w c3bu3z0 c6mca0r c1y4rrlz cf6nu9m c1kpa8e0`}>
<Box
data-swiper-parallax-opacity={"0"}
data-swiper-parallax={"200%"}
className={`w-box c13hnv0z cdj6zco c1ljn9ju cg7uw93 c1yly58e c1tuinma c1lgjb7 c1303ek3 cne6f71 ckwhge5 c1ahxz4z c14tih19 c119y9gl cspupja c1exbj2h c1fmoqfr c1kxyv1m cy5p0vr c1ll3ag5 cehrxal c2zjzu8 cv261kb c18y7qqp c13y0wzw c1rb0ttz cu19gr9 c1y4rrlz cc52l67 c7tzidt c1ucxda7 c197z3qo c1mb987i cdzvppq cp88ou cq23j2p c55sifg c12bnj01 c13d3ul5 c16lbv1s cuejh0i czbjzpc`}>
<Text
tag={"div"}
className={`w-text cnbypn9 c5e3cnl c1udjg1t c2al9we c2kfocf c1kdsazu c1nu0j5t c15wi4k8 c1b43odq c1746hcg c1ohklfb c45zilk c1tuinma cslug39 c1nr2zq4 c10z91mq cb40ruf c12os8yp c1nt1uix c6s4bs9 calkhlj c1rcwf4s c1tmx8l3 cvn4pk8 c1fgphav cpcobf2 c1q5epdw cxrfvw`}>
{"“"}
</Text>
<Text
tag={"div"}
className={`w-text c1ej98o7 c1nofqsy c1udjg1t c9mgu5w c2kfocf c1kdsazu c2t3yx7 c1yly58e cb40ruf c453nvj c1mb987i c6s4bs9 calkhlj c1rcwf4s cxc65p0 c8635h8 cp3ndwh cpcobf2 cgtu99h c1y4rrlz c8qpvct c69dy50 cq23j2p c1yku8m2 c1nn7qpq czxb082 cup7w90 cxrfvw`}>
{"I wanted to learn video editing for my brand, but didn’t know where to start. This course walked me through everything step by step, and now I can create dynamic visuals I’m proud to share!"}
</Text>
<div
className={`w-element cc52l67 c69dy50 cq23j2p cuihm0a cuejh0i c13hnv0z czfwn1m cg7uw93`}>
<Image
src={"/assets/Arif_Malik_m5oox5XK0Rf17y1SDxAxy.png"}
width={473}
height={473}
alt={""}
className={`w-image cjsxkwv cxc65p0 c15wkmdg cdyw2mj c175gw0n cy3s5uo c12kklpt cpqii68 c1x68mc7 c1hguf4e c7aep5m c1xkm02y cyscws5 cnk6xik cohs2az cl1oi6j chutxsd c1h2c135 cis6veu cw6dpjl c1q3ou0e c1tuinma c18i8des c1ycvl5w c1ywikob ctj8b2d c1tbq8oq`} />
<div
className={`w-element cc52l67 cp88ou cq23j2p c173o7cs c1cc4guj c8ns86s c1vbgcsx`}>
<Heading
tag={"h2"}
className={`w-heading c3egj89 c1pjcfc3 cnbypn9 c2t3yx7 cp6ro43 c1qzq2dp cux85d8 c16czpts c6a5jsw c2kfocf c1qt5ih0 cgkosxk c6s4bs9 c1mb987i c1wb9c7 c1ltossf c1rcwf4s cbwyhp2 c5poz2l c1urwx4n c1rhext2 cpdly3s`}>
{"Arif  Malik"}
</Heading>
<Heading
tag={"h2"}
className={`w-heading c3egj89 c1pjcfc3 c10hwn8l c1y509hd cp6ro43 c17gsc9i cux85d8 c16czpts c1bzwypx c2kfocf cud9kgk c6u0e59 cgkosxk c6s4bs9 c1mb987i c1wb9c7 c14ydh28 c1rcwf4s cpcobf2 c14h9hcv c5poz2l c1urwx4n c1rhext2 cpdly3s`}>
{"Entrepreneur"}
</Heading>
</div>
</div>
<Text
tag={"div"}
className={`w-text cnbypn9 c5e3cnl c1udjg1t c2al9we c2kfocf c1kdsazu c1nu0j5t c15wi4k8 c1b43odq c1746hcg c1ohklfb c45zilk c1tuinma cj2jb1w c1ndgukt c10z91mq cb40ruf c1stlgyr c1mb987i c6s4bs9 c1ltossf c18eq55k cxc65p0 c8635h8 cp3ndwh cpcobf2 c1q5epdw cejc2wf c1t62lki cjs5jfs cppz4f c1tg349i cxrfvw`}>
{"“"}
</Text>
</Box>
</Box>
</Box>
<Box
className={`w-box cc5t07c c1tuinma cz8roac ctxdr62 c1g6w3ym c1xjq1ia c1akemag c13hnv0z czfwn1m cg7uw93 c1usvwq3 c124qycb c1sw46i9 c1mrdp2v c1c6pc9m c1wcam6x c1s0h5jn c15wkmdg cxc65p0 cpc3cah c16lpank cpfmnbn c6mca0r ${"swiper-slide"}`}>
<Box
className={`w-box c1hbfi0g c158lg7o c1n822tz c1q0th6w cdotr50 c14vbx55 c1x9k1bu c1ydk261 c28kk3r c1b1ozse c1nxzuss cgkzmw7 ceyeztt c13hnv0z c1jp7r3w czfwn1m cg7uw93 cdj6zco c1mma3un c1xjq1ia c1akemag cz8roac c173o7cs cha9onf c1gz0c4n c1q5tg0c cjn5g4w c3bu3z0 c6mca0r c1y4rrlz`}>
<Box
data-swiper-parallax-opacity={"0"}
data-swiper-parallax={"200%"}
className={`w-box c13hnv0z cdj6zco c1ljn9ju cg7uw93 c1yly58e c1tuinma c1lgjb7 c1303ek3 cne6f71 ckwhge5 c1ahxz4z c14tih19 c119y9gl cspupja c1exbj2h c1fmoqfr c1kxyv1m cy5p0vr c1ll3ag5 cehrxal c2zjzu8 cv261kb c18y7qqp c13y0wzw c1rb0ttz cu19gr9 c1y4rrlz cc52l67 c7tzidt c1ucxda7 c197z3qo c1mb987i cdzvppq cp88ou cq23j2p c55sifg c12bnj01 c13d3ul5 c16lbv1s cuejh0i czbjzpc`}>
<Text
tag={"div"}
className={`w-text cnbypn9 c5e3cnl c1udjg1t c2al9we c2kfocf c1kdsazu c1nu0j5t c15wi4k8 c1b43odq c1746hcg c1ohklfb c45zilk c1tuinma cslug39 c1nr2zq4 c10z91mq cb40ruf c12os8yp c1nt1uix c6s4bs9 calkhlj c1rcwf4s c1tmx8l3 cvn4pk8 c1fgphav cpcobf2 c1q5epdw cxrfvw`}>
{"“"}
</Text>
<Text
tag={"div"}
className={`w-text c1ej98o7 c1nofqsy c1udjg1t c9mgu5w c2kfocf c1kdsazu c2t3yx7 c1yly58e cb40ruf c453nvj c1mb987i c6s4bs9 calkhlj c1rcwf4s cxc65p0 c8635h8 cp3ndwh cpcobf2 cgtu99h c1y4rrlz c8qpvct c69dy50 cq23j2p c1yku8m2 c1nn7qpq czxb082 cup7w90 cxrfvw`}>
{"I’d never edited a video before, But this course made it easy to follow along! By the end, I had a polished promo video I can share! Highly recommended!"}
</Text>
<div
className={`w-element cc52l67 c69dy50 cq23j2p cuihm0a cuejh0i c13hnv0z czfwn1m cg7uw93`}>
<Image
src={"/assets/Sophie_Tan_Cropped_El77y1yvFmKgmeuY24aQy.png"}
width={569}
height={569}
alt={""}
className={`w-image cjsxkwv cxc65p0 c15wkmdg cdyw2mj c175gw0n cy3s5uo c12kklpt cpqii68 c1x68mc7 c1hguf4e c7aep5m c1xkm02y cyscws5 cnk6xik cohs2az cl1oi6j chutxsd c1h2c135 cis6veu cw6dpjl c1q3ou0e c1tuinma c18i8des c1ycvl5w c1ywikob ctj8b2d c1tbq8oq`} />
<div
className={`w-element cc52l67 cp88ou cq23j2p c173o7cs c1cc4guj c8ns86s c1vbgcsx`}>
<Heading
tag={"h2"}
className={`w-heading c3egj89 c1pjcfc3 cnbypn9 c2t3yx7 cp6ro43 c1qzq2dp cux85d8 c16czpts c6a5jsw c2kfocf c1qt5ih0 cgkosxk c6s4bs9 c1mb987i c1wb9c7 c1ltossf c1rcwf4s cbwyhp2 c5poz2l c1urwx4n c1rhext2 cpdly3s`}>
{"Sophie  Tan"}
</Heading>
<Heading
tag={"h2"}
className={`w-heading c3egj89 c1pjcfc3 c10hwn8l c1vw7qpq cp6ro43 c17gsc9i cux85d8 c16czpts c1bzwypx c2kfocf cud9kgk c6u0e59 cgkosxk c6s4bs9 c1mb987i c1wb9c7 c14ydh28 c1rcwf4s cpcobf2 c14h9hcv c5poz2l c1urwx4n c1rhext2 cpdly3s`}>
{"Student"}
</Heading>
</div>
</div>
<Text
tag={"div"}
className={`w-text cnbypn9 c5e3cnl c1udjg1t c2al9we c2kfocf c1kdsazu c1nu0j5t c15wi4k8 c1b43odq c1746hcg c1ohklfb c45zilk c1tuinma cj2jb1w c1ndgukt c10z91mq cb40ruf c1stlgyr c1mb987i c6s4bs9 c1ltossf c18eq55k cxc65p0 c8635h8 cp3ndwh cpcobf2 c1q5epdw cejc2wf c1t62lki cjs5jfs cppz4f c1tg349i cxrfvw`}>
{"“"}
</Text>
</Box>
</Box>
</Box>
<Box
className={`w-box cc5t07c c1tuinma cz8roac ctxdr62 c1g6w3ym c1xjq1ia c1akemag c13hnv0z czfwn1m cg7uw93 c1usvwq3 c124qycb c1sw46i9 c1mrdp2v c1c6pc9m c1wcam6x c1s0h5jn c15wkmdg cxc65p0 cpc3cah c16lpank cpfmnbn c6mca0r ${"swiper-slide"}`}>
<Box
className={`w-box c1hbfi0g c158lg7o c1n822tz c1q0th6w cdotr50 c14vbx55 c1x9k1bu c1ydk261 c28kk3r c1b1ozse c1nxzuss cgkzmw7 ceyeztt c13hnv0z c1jp7r3w czfwn1m cg7uw93 cdj6zco c1mma3un c1xjq1ia c1akemag cz8roac c173o7cs cha9onf c1gz0c4n c1q5tg0c cjn5g4w c3bu3z0 c6mca0r c1y4rrlz`}>
<Box
data-swiper-parallax-opacity={"0"}
data-swiper-parallax={"200%"}
className={`w-box c13hnv0z cdj6zco c1ljn9ju cg7uw93 c1yly58e c1tuinma c1lgjb7 c1303ek3 cne6f71 ckwhge5 c1ahxz4z c14tih19 c119y9gl cspupja c1exbj2h c1fmoqfr c1kxyv1m cy5p0vr c1ll3ag5 cehrxal c2zjzu8 cv261kb c18y7qqp c13y0wzw c1rb0ttz cu19gr9 c1y4rrlz cc52l67 c7tzidt c1ucxda7 c197z3qo c1mb987i cdzvppq cp88ou cq23j2p c55sifg c12bnj01 c13d3ul5 c16lbv1s cuejh0i czbjzpc`}>
<Text
tag={"div"}
className={`w-text cnbypn9 c5e3cnl c1udjg1t c2al9we c2kfocf c1kdsazu c1nu0j5t c15wi4k8 c1b43odq c1746hcg c1ohklfb c45zilk c1tuinma cslug39 c1nr2zq4 c10z91mq cb40ruf c12os8yp c1nt1uix c6s4bs9 calkhlj c1rcwf4s c1tmx8l3 cvn4pk8 c1fgphav cpcobf2 c1q5epdw cxrfvw`}>
{"“"}
</Text>
<Text
tag={"div"}
className={`w-text c1ej98o7 c1nofqsy c1udjg1t c9mgu5w c2kfocf c1kdsazu c2t3yx7 c1yly58e cb40ruf c453nvj c1mb987i c6s4bs9 calkhlj c1rcwf4s cxc65p0 c8635h8 cp3ndwh cpcobf2 cgtu99h c1y4rrlz c8qpvct c69dy50 cq23j2p c1yku8m2 c1nn7qpq czxb082 cup7w90 cxrfvw`}>
{"I wanted to share my cafe on social media, but I didn’t know where to start with videos. This course walked me through everything, and now I have videos that look professional and engaging"}
</Text>
<div
className={`w-element cc52l67 c69dy50 cq23j2p cuihm0a cuejh0i c13hnv0z czfwn1m cg7uw93`}>
<Image
src={"/assets/farhan_iskandar_c0VQxCnn-ffnXwAbQR-9z.png"}
width={471}
height={471}
alt={""}
className={`w-image cjsxkwv cxc65p0 c15wkmdg cdyw2mj c175gw0n cy3s5uo c12kklpt cpqii68 c1x68mc7 c1hguf4e c7aep5m c1xkm02y cyscws5 cnk6xik cohs2az cl1oi6j chutxsd c1h2c135 cis6veu cw6dpjl c1q3ou0e c1tuinma c18i8des c1ycvl5w c1ywikob ctj8b2d c1tbq8oq`} />
<div
className={`w-element cc52l67 cp88ou cq23j2p c173o7cs c1cc4guj c8ns86s c1vbgcsx`}>
<Heading
tag={"h2"}
className={`w-heading c3egj89 c1pjcfc3 cnbypn9 c2t3yx7 cp6ro43 c1qzq2dp cux85d8 c16czpts c6a5jsw c2kfocf c1qt5ih0 cgkosxk c6s4bs9 c1mb987i c1wb9c7 c1ltossf c1rcwf4s cbwyhp2 c5poz2l c1urwx4n c1rhext2 cpdly3s`}>
<b
className={`w-element`}>
{"Fathan  Iskandar"}
</b>
</Heading>
<Heading
tag={"h2"}
className={`w-heading c3egj89 c1pjcfc3 c10hwn8l c1vw7qpq cp6ro43 c17gsc9i cux85d8 c16czpts c1bzwypx c2kfocf cud9kgk c6u0e59 cgkosxk c6s4bs9 c1mb987i c1wb9c7 c14ydh28 c1rcwf4s cpcobf2 c14h9hcv c5poz2l c1urwx4n c1rhext2 cpdly3s`}>
{"Cafe Owner"}
</Heading>
</div>
</div>
<Text
tag={"div"}
className={`w-text cnbypn9 c5e3cnl c1udjg1t c2al9we c2kfocf c1kdsazu c1nu0j5t c15wi4k8 c1b43odq c1746hcg c1ohklfb c45zilk c1tuinma cj2jb1w c1ndgukt c10z91mq cb40ruf c1stlgyr c1mb987i c6s4bs9 c1ltossf c18eq55k cxc65p0 c8635h8 cp3ndwh cpcobf2 c1q5epdw cejc2wf c1t62lki cjs5jfs cppz4f c1tg349i cxrfvw`}>
{"“"}
</Text>
</Box>
</Box>
</Box>
</Box>
</Box>
<Box
data-slides-per-view={"1"}
data-infinite-loop={"true"}
data-nav={"true"}
data-nav-next-el={".swiper-button-next"}
data-nav-prev-el={".swiper-button-prev"}
data-swiper={"true"}
data-parallax={"false"}
data-slider-speed={"2000"}
data-autoplay={"true"}
data-autoplay-delay={""}
className={`w-box c1s8dc6k c1tuinma c1ibcse2 c1igd1z2 ci38l1c czl8vgb c1xjq1ia c1akemag c1yly58e cdj6zco c1gy5v3d c1ljn9ju c14tih19 c28kk3r c1b1ozse c1nxzuss cgkzmw7 citp4x1 cqtcp12 c18ju1uq crspql3 c1re6sm1 cxx1vfq c1e4v7pl c6w7oqo c1f10svd c8qpvct c18lbw05 ca0lljk c8635h8 clytzz6 c2d2z8y cizqa3v c1s2yqin c1r8coi4 c11qqeb1 ciwnz04 cgby5tr ${"swiper swiper-c-auto"}`}>
<Box
className={`w-box c1yly58e c1tuinma ci38l1c c14tih19 c13hnv0z czfwn1m cg7uw93 c1s8dc6k cfsv9jl cvtjiis c1v1gllw cogxuid c1xxakoe c1re6sm1 cxx1vfq c1e4v7pl c6w7oqo c1mrdp2v c1c6pc9m c1wcam6x c1s0h5jn cuhbja c152jg2x cc3vg36 c8635h8 c18lbw05 cizqa3v ca0lljk c2d2z8y c1r8coi4 c1irotqb cr2kg5q cgu2lfb cf2mmu9 c7xbqez c8mdtak ${"swiper-wrapper"}`}>
<Box
className={`w-box cc5t07c c1tuinma cz8roac cu8h30b c1g6w3ym c1xjq1ia c1akemag c13hnv0z czfwn1m cg7uw93 c124qycb c1t1kkw6 c1sw46i9 c1mrdp2v c1c6pc9m c1wcam6x c1s0h5jn c15wkmdg cxc65p0 cpc3cah c16lpank cpfmnbn c6mca0r ${"swiper-slide"}`}>
<Box
className={`w-box c1hbfi0g c158lg7o c1n822tz c1q0th6w cdotr50 c14vbx55 c1x9k1bu c1ydk261 c28kk3r c1b1ozse c1nxzuss cgkzmw7 ceyeztt c13hnv0z c1jp7r3w czfwn1m cg7uw93 cdj6zco c1mma3un c1xjq1ia c1akemag cz8roac c173o7cs cha9onf c1gz0c4n c1q5tg0c cjn5g4w c3bu3z0 c6mca0r c1y4rrlz c1t1kkw6`}>
<Box
data-swiper-parallax-opacity={"0"}
data-swiper-parallax={"200%"}
className={`w-box c13hnv0z cdj6zco czfwn1m c1gy5v3d c1yly58e c1tuinma c1lgjb7 c1303ek3 cne6f71 c1ba44ez c1ahxz4z c14tih19 c119y9gl cspupja c1exbj2h c1fmoqfr cavc7k4 cy5p0vr cjxpjh0 cehrxal c2zjzu8 cqkakez c11hwpz6 chn861b c1qhwub1 c1phgdl cow2a5d c1gtu4g3 c18y7qqp c13y0wzw c1rb0ttz cu19gr9 c1y4rrlz cc52l67 c7tzidt c1ucxda7 c197z3qo c1mb987i cdzvppq cp88ou cq23j2p cp3ndwh c12bnj01 c13d3ul5 c16lbv1s cuejh0i czbjzpc`}>
<Text
tag={"div"}
className={`w-text cnbypn9 c5e3cnl c1udjg1t c2al9we c2kfocf c1kdsazu c1nu0j5t c15wi4k8 c1b43odq c1746hcg c1ohklfb c45zilk c1tuinma cslug39 c1nr2zq4 c10z91mq cb40ruf c1stlgyr c1mb987i c6s4bs9 c1ltossf c18eq55k cxc65p0 c8635h8 cp3ndwh cpcobf2 c1q5epdw cejc2wf c183zqhd cjs5jfs cppz4f c1tg349i cxrfvw`}>
{"“"}
</Text>
<Text
tag={"div"}
className={`w-text c1ej98o7 c1nofqsy c1udjg1t c9mgu5w c2kfocf c1kdsazu c2t3yx7 cma45zo cb40ruf c1yum3ze c1modan c1mnwxt8 ctmlauj c6s4bs9 calkhlj c1rcwf4s cxc65p0 c8635h8 cp3ndwh cpcobf2 cgtu99h c1y4rrlz c8qpvct c69dy50 cq23j2p c1yku8m2 c1nn7qpq czxb082 cup7w90 cxrfvw`}>
{"I’d never edited a video before, But this course made it easy to follow along! By the end, I had a polished promo video I can share! Highly recommended!"}
</Text>
<div
className={`w-element cc52l67 c69dy50 cq23j2p cuihm0a cuejh0i c1s2yqin c1pd9efl c135ztz9 c1v4bx4z`}>
<Image
src={"/assets/Sophie_Tan_Cropped_El77y1yvFmKgmeuY24aQy.png"}
width={569}
height={569}
alt={""}
className={`w-image cjsxkwv cxc65p0 c15wkmdg cdyw2mj c175gw0n cy3s5uo c12kklpt cpqii68 c1x68mc7 c1hguf4e c7aep5m c1xkm02y cyscws5 cnk6xik cohs2az cl1oi6j chutxsd c1h2c135 c1skey5b c1sntnxq c1q3ou0e c1tuinma c18i8des c8vo0jj c1m3ppcc cwom1mb ca2p9ke c1imy2wl c4qjcl1 cnwdv7t cp68kjq c5teygx c15kgpz4`} />
<div
className={`w-element cc52l67 cp88ou cq23j2p c173o7cs c1cc4guj c1s2yqin c466xhk cgu2lfb c1gtu4g3`}>
<Heading
tag={"h2"}
className={`w-heading c3egj89 c1pjcfc3 cnbypn9 c2t3yx7 cp6ro43 c1g4u4vm cux85d8 c16czpts c6a5jsw c2kfocf c1qt5ih0 cgkosxk c6s4bs9 c1mb987i c1wb9c7 c1ltossf c1rcwf4s cbwyhp2 cqwq2d8 c1urwx4n c1rhext2 cpdly3s`}>
{"Sophie  Tan"}
</Heading>
<Heading
tag={"h2"}
className={`w-heading ce86r78 c1pjcfc3 c10hwn8l c1vw7qpq cp6ro43 c1ex9nlp cux85d8 c16czpts c1bzwypx c2kfocf cud9kgk c6u0e59 cgkosxk c6s4bs9 c1mb987i c1wb9c7 c14ydh28 c1rcwf4s cpcobf2 c14h9hcv c1v1udt8 c1urwx4n c1cf53jk c1rhext2 cpdly3s`}>
{"Learner"}
</Heading>
</div>
</div>
</Box>
</Box>
</Box>
<Box
className={`w-box cc5t07c c1tuinma cz8roac cu8h30b c1g6w3ym c1xjq1ia c1akemag c13hnv0z czfwn1m cg7uw93 c124qycb c1t1kkw6 c1sw46i9 c1mrdp2v c1c6pc9m c1wcam6x c1s0h5jn c15wkmdg cxc65p0 cpc3cah c16lpank cpfmnbn c6mca0r c1mnwxt8 ${"swiper-slide"}`}>
<Box
className={`w-box c1hbfi0g c158lg7o c1n822tz c1q0th6w cdotr50 c14vbx55 c1x9k1bu c1ydk261 c28kk3r c1b1ozse c1nxzuss cgkzmw7 ceyeztt c13hnv0z c1jp7r3w czfwn1m cg7uw93 cdj6zco c1mma3un c1xjq1ia c1akemag cz8roac c173o7cs cha9onf c1gz0c4n c1q5tg0c cjn5g4w c3bu3z0 c6mca0r c1y4rrlz c1t1kkw6`}>
<Box
data-swiper-parallax-opacity={"0"}
data-swiper-parallax={"200%"}
className={`w-box c13hnv0z cdj6zco czfwn1m c1gy5v3d c1yly58e c1tuinma c1lgjb7 c1303ek3 cne6f71 c1ba44ez c1ahxz4z c14tih19 c119y9gl cspupja c1exbj2h c1fmoqfr cavc7k4 cy5p0vr cjxpjh0 cehrxal c2zjzu8 cqkakez c11hwpz6 chn861b c1qhwub1 c1phgdl cow2a5d c1gtu4g3 c18y7qqp c13y0wzw c1rb0ttz cu19gr9 c1y4rrlz cc52l67 c7tzidt c1ucxda7 c197z3qo c1mb987i cdzvppq cp88ou cq23j2p cp3ndwh c12bnj01 c13d3ul5 c16lbv1s cuejh0i czbjzpc`}>
<Text
tag={"div"}
className={`w-text cnbypn9 c5e3cnl c1udjg1t c2al9we c2kfocf c1kdsazu c1nu0j5t c15wi4k8 c1b43odq c1746hcg c1ohklfb c45zilk c1tuinma cslug39 c1nr2zq4 c10z91mq cb40ruf c1stlgyr c1mb987i c6s4bs9 c1ltossf c18eq55k cxc65p0 c8635h8 cp3ndwh cpcobf2 c1q5epdw cejc2wf c183zqhd cjs5jfs cppz4f c1tg349i cxrfvw`}>
{"“"}
</Text>
<Text
tag={"div"}
className={`w-text c1ej98o7 c1nofqsy c1udjg1t c9mgu5w c2kfocf c1kdsazu c2t3yx7 cma45zo cb40ruf c1yum3ze c1modan c1mnwxt8 ctmlauj c6s4bs9 calkhlj c1rcwf4s cxc65p0 c8635h8 cp3ndwh cpcobf2 cgtu99h c1y4rrlz c8qpvct c69dy50 cq23j2p c1yku8m2 c1nn7qpq czxb082 cup7w90 cxrfvw`}>
{"I wanted to learn video editing for my brand, but didn’t know where to start. This course walked me through everything step by step, and now I can create dynamic visuals I’m proud to share!"}
</Text>
<div
className={`w-element cc52l67 c69dy50 cq23j2p cuihm0a cuejh0i c1s2yqin c1pd9efl c135ztz9 c1v4bx4z cow2a5d c1gtu4g3`}>
<Image
src={"/assets/Arif_Malik_m5oox5XK0Rf17y1SDxAxy.png"}
width={473}
height={473}
alt={""}
className={`w-image cjsxkwv cxc65p0 c15wkmdg cdyw2mj c175gw0n cy3s5uo c12kklpt cpqii68 c1x68mc7 c1hguf4e c7aep5m c1xkm02y cyscws5 cnk6xik cohs2az cl1oi6j chutxsd c1h2c135 c1skey5b c1sntnxq c1q3ou0e c1tuinma c18i8des c8vo0jj c1m3ppcc cwom1mb ca2p9ke c1imy2wl c4qjcl1 cnwdv7t cp68kjq c5teygx c15kgpz4`} />
<div
className={`w-element cc52l67 cp88ou cq23j2p c173o7cs c1cc4guj c1s2yqin c466xhk cgu2lfb c1gtu4g3`}>
<Heading
tag={"h2"}
className={`w-heading c3egj89 c1pjcfc3 cnbypn9 c2t3yx7 cp6ro43 c1g4u4vm cux85d8 c16czpts c6a5jsw c2kfocf c1qt5ih0 cgkosxk c6s4bs9 c1mb987i c1wb9c7 c1ltossf c1rcwf4s cbwyhp2 cqwq2d8 c1urwx4n c1rhext2 cpdly3s`}>
{"Arif Malik"}
</Heading>
<Heading
tag={"h2"}
className={`w-heading ce86r78 c1pjcfc3 c10hwn8l c1vw7qpq cp6ro43 c1ex9nlp cux85d8 c16czpts c1bzwypx c2kfocf cud9kgk c6u0e59 cgkosxk c6s4bs9 c1mb987i c1wb9c7 c14ydh28 c1rcwf4s cpcobf2 c14h9hcv c1v1udt8 c1urwx4n c1cf53jk c1rhext2 cpdly3s`}>
{"Entrepreneur"}
</Heading>
</div>
</div>
</Box>
</Box>
</Box>
<Box
className={`w-box cc5t07c c1tuinma cz8roac cu8h30b c1g6w3ym c1xjq1ia c1akemag c13hnv0z czfwn1m cg7uw93 c124qycb c1t1kkw6 c1sw46i9 c1mrdp2v c1c6pc9m c1wcam6x c1s0h5jn c15wkmdg cxc65p0 cpc3cah c16lpank cpfmnbn c6mca0r ${"swiper-slide"}`}>
<Box
className={`w-box c1hbfi0g c158lg7o c1n822tz c1q0th6w cdotr50 c14vbx55 c1x9k1bu c1ydk261 c28kk3r c1b1ozse c1nxzuss cgkzmw7 ceyeztt c13hnv0z c1jp7r3w czfwn1m cg7uw93 cdj6zco c1mma3un c1xjq1ia c1akemag cz8roac c173o7cs cha9onf c1gz0c4n c1q5tg0c cjn5g4w c3bu3z0 c6mca0r c1y4rrlz c1t1kkw6`}>
<Box
data-swiper-parallax-opacity={"0"}
data-swiper-parallax={"200%"}
className={`w-box c13hnv0z cdj6zco czfwn1m c1gy5v3d c1yly58e c1tuinma c1lgjb7 c1303ek3 cne6f71 c1ba44ez c1ahxz4z c14tih19 c119y9gl cspupja c1exbj2h c1fmoqfr cavc7k4 cy5p0vr cjxpjh0 cehrxal c2zjzu8 cqkakez c11hwpz6 chn861b c1qhwub1 c1phgdl cow2a5d c1gtu4g3 c18y7qqp c13y0wzw c1rb0ttz cu19gr9 c1y4rrlz cc52l67 c7tzidt c1ucxda7 c197z3qo c1mb987i cdzvppq cp88ou cq23j2p cp3ndwh c12bnj01 c13d3ul5 c16lbv1s cuejh0i czbjzpc`}>
<Text
tag={"div"}
className={`w-text cnbypn9 c5e3cnl c1udjg1t c2al9we c2kfocf c1kdsazu c1nu0j5t c15wi4k8 c1b43odq c1746hcg c1ohklfb c45zilk c1tuinma cslug39 c1nr2zq4 c10z91mq cb40ruf c1stlgyr c1mb987i c6s4bs9 c1ltossf c18eq55k cxc65p0 c8635h8 cp3ndwh cpcobf2 c1q5epdw cejc2wf c183zqhd cjs5jfs cppz4f c1tg349i cxrfvw`}>
{"“"}
</Text>
<Text
tag={"div"}
className={`w-text c1ej98o7 c1nofqsy c1udjg1t c9mgu5w c2kfocf c1kdsazu c2t3yx7 cma45zo cb40ruf c1yum3ze c1modan c1mnwxt8 ctmlauj c6s4bs9 calkhlj c1rcwf4s cxc65p0 c8635h8 cp3ndwh cpcobf2 cgtu99h c1y4rrlz c8qpvct c69dy50 cq23j2p c1yku8m2 c1nn7qpq czxb082 cup7w90 cxrfvw`}>
{"I wanted to share my cafe on social media, but I didn’t know where to start with videos. This course walked me through everything, and now I have videos that look professional and engaging"}
</Text>
<div
className={`w-element cc52l67 c69dy50 cq23j2p cuihm0a cuejh0i c1s2yqin c1pd9efl c135ztz9 c1v4bx4z`}>
<Image
src={"/assets/farhan_iskandar_c0VQxCnn-ffnXwAbQR-9z.png"}
width={471}
height={471}
alt={""}
className={`w-image cjsxkwv cxc65p0 c15wkmdg cdyw2mj c175gw0n cy3s5uo c12kklpt cpqii68 c1x68mc7 c1hguf4e c7aep5m c1xkm02y cyscws5 cnk6xik cohs2az cl1oi6j chutxsd c1h2c135 c1skey5b c1sntnxq c1q3ou0e c1tuinma c18i8des c8vo0jj c1m3ppcc cwom1mb ca2p9ke c1imy2wl c4qjcl1 cnwdv7t cp68kjq c5teygx c15kgpz4`} />
<div
className={`w-element cc52l67 cp88ou cq23j2p c173o7cs c19hi6fp c1s2yqin c466xhk cgu2lfb c1gtu4g3`}>
<Heading
tag={"h2"}
className={`w-heading c3egj89 c1pjcfc3 cnbypn9 c2t3yx7 cp6ro43 c1g4u4vm cux85d8 c16czpts c6a5jsw c2kfocf c1t0e04k cgkosxk cjsxkwv c1mb987i c1wb9c7 c1ltossf c1rcwf4s cbwyhp2 cup7w90 c1nyhhpv cqwq2d8 c1urwx4n c1rhext2 cpdly3s`}>
{"Fathan Iskander"}
</Heading>
<Heading
tag={"h2"}
className={`w-heading ce86r78 c1pjcfc3 c10hwn8l c1vw7qpq cp6ro43 c1ex9nlp cux85d8 c16czpts c1bzwypx c2kfocf cud9kgk c6u0e59 cgkosxk c6s4bs9 c1mb987i c1wb9c7 c14ydh28 c1rcwf4s cpcobf2 c14h9hcv c1v1udt8 c1urwx4n c1cf53jk c1rhext2 cpdly3s`}>
{"Cafe Owner"}
</Heading>
</div>
</div>
</Box>
</Box>
</Box>
</Box>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<script src=\"https://unpkg.com/swiper/swiper-bundle.min.js\" defer=\"\"></script>\n<script type=\"module\">\ndocument.querySelectorAll('[data-swiper=\"true\"]:not(.swiper-initialized)').forEach(function(container, index) {\n  \n  const dataset = container.dataset\n  \n  const options = {\n    loop: dataset.infiniteLoop === 'true',\n    speed: parseFloat(dataset.sliderSpeed) || 1000,\n    parallax: dataset.parallax === 'true',\n    spaceBetween: parseFloat(dataset.spaceBetweenSlides) || 0,\n    slidesPerView: dataset.slidesPerView === 'auto' ? 'auto' : parseFloat(dataset.slidesPerView) || 1,\n    effect: dataset.effect || 'slide',\n    fadeEffect: { crossFade: dataset.crossfadeEffect === 'true' },\n    autoplay: dataset.autoplay === 'true' ? {\n      delay: parseFloat(dataset.autoplayDelay) || 3500,\n      disableOnInteraction: dataset.autoplayInteractDisable === 'true',\n    } : false,\n    pagination: dataset.pagination === 'true' ? {\n      el:  container.querySelector(dataset.paginationEl || '.swiper-pagination'),\n      clickable: dataset.paginationClickable === 'true',\n    } : false,\n    navigation: dataset.nav === 'true' ? {\n      nextEl: container.querySelector(dataset.navNextEl || '.swiper-button-next'),\n      prevEl: container.querySelector(dataset.navPrevEl || '.swiper-button-prev'),\n    } : false,\n    freeMode: dataset.freeMode === 'true',\n    centeredSlides: dataset.centeredSlides === 'true', // Apply general setting\n  };\n  \n  new Swiper(container, options);\n});\n</script>"}
clientOnly={true}
className={`w-html-embed`} />
</Fragment_1>
</Slot>
</Box>
</Box>
<div
className={`w-element c1ckras5 cc52l67 c173o7cs c2rsum c1f08nev c54d090 cd3cqz5 c1g2qxef c1d9j4a5 c1971owv c1r7sbjc cdzvppq czxb082 cpfmnbn cj9l1k0 c1c6hyn3 c69dy50 cru1m34 c1csiamu c1p6in38 c14xr5kw c1yly58e cea9b9l cu88yio c1qso35u c13hnv0z czfwn1m cg7uw93 cdgqdgy cbq3y1m cw319tw c1usvwq3 ctxdr62 c5pk4ya cfsi0a2 cbge1d5 cycmyni cq70kov ccbb9ie c1f87wxn cddn7ik c84rm9o c1vs0i1o c1rjhzug c1eg8lyu c7i0284 cfsebv5 c1t4548c cuib9ri c1ferv7m cnq56k2 crf7oil c135ztz9 c1v4bx4z c1gcsvan c1vrs7au cpho46m`}>
<div
className={`w-element cc52l67 c173o7cs c7v1zzr c1929x5e cdzvppq chv80de cpfmnbn cj9l1k0 c1c6hyn3 c69dy50 cq23j2p clytzz6 czu882a cu88yio citp4x1 c1mx206x`}>
<h1
className={`w-element c1flkcir c3z3t2y c1sdqifx c6s4bs9 c19oi5sd c1ujsoxj c1xsfdpn cyzq4b cbwyhp2 cuhbja c8ovr0o`}>
{"Sign up now!"}
{""}
<br />
{""}
{"To get a "}
<span
className={`w-element c15lsmec`}>
{"FREE Trial!"}
</span>
</h1>
<h1
className={`w-element cnylv8g cb91w4k c12hiof0 c6s4bs9 c19oi5sd c1ujsoxj c1xsfdpn cyzq4b c1qcaaz2 cuhbja c8ovr0o`}>
{"Get instant access and start your"}
{""}
<br />
{""}
{"free trial now."}
</h1>
</div>
<RemixForm
className={`w-element c1m6bdx9 c1dyxcp6 czu882a clytzz6 c8635h8 c7qz9i9 cgyc1q c17140et cklcbxu cfsoc4c c1yo7emy c1aezq77 cc52l67 c173o7cs c69dy50 cru1m34 c1lg9ied c1yib3d5 c1k587m2 co2psfn cgi4r9 c1tqkyf c1nh57nd c321w33 c1hic7ko c1rte529 cu5r6y1 c10j4ngl c13hnv0z cdj6zco czfwn1m c1gy5v3d cesq42d c1f4ne5u c1usvwq3 ctxdr62 c1vi4xag c1q3ou0e c1v6ccjc c1v4d4iz c1k557y7 c166ux7h`}>
<h1
className={`w-element c1flkcir c3z3t2y c1sdqifx c6s4bs9 c19oi5sd c1ujsoxj c1xsfdpn cyzq4b cbwyhp2 cuhbja cj6ctr8 c8ovr0o c1y509hd cfz2zz2 c1kdsazu c13chls3 c1fhkb2b c1jsqktc c1mi5kyf c10lm2fs`}>
<span
className={`w-element cbx3tek crzrx4m`}>
{"Sign up now!"}
</span>
{""}
<br />
{""}
{"To get a "}
<span
className={`w-element c15lsmec cw6ug40 c1qdr4tm`}>
{"FREE Trial!"}
</span>
</h1>
<h1
className={`w-element cnylv8g cb91w4k c12hiof0 c6s4bs9 c19oi5sd c1ujsoxj c1xsfdpn cyzq4b c1qcaaz2 cuhbja cj6ctr8 c8ovr0o c10m4har c16sspn9 c17gsc9i c12qdcru cbe6wib c17prrlq c19c274l c1c6k9pz c1pxtt56`}>
{"Get instant access and start your"}
{""}
<br />
{""}
{"free trial now."}
</h1>
<div
className={`w-element c2d2z8y c1wvqgkp cc52l67 csauxtn c173o7cs cp88ou cru1m34 cjt2m6p c7ab5zo csx4m8w c1g538dd c1avg2hp c1usvwq3 ctxdr62 c11a2j33 c1kqa2lh c1s2yqin c466xhk cgu2lfb cf2mmu9 c1tbxh2x`}>
<h1
className={`w-element cp8crrr c3z3t2y c1sdqifx cjsxkwv cxtuqh6 czu882a cq0qs4j cyhpobn c19oi5sd c1ujsoxj c1xsfdpn cyzq4b cbwyhp2 c1y509hd c7ll9wy c1qzq2dp c1fhkb2b`}>
{"Name"}
</h1>
<Input
required={true}
name={"sds"}
placeholder={"Enter Name\n"}
checked={false}
type={"text"}
className={`w-element c1k15m98 c10m4har ce7fh4p c321w33 c1hic7ko c1rte529 cu5r6y1 cp8jpva cfrqylo c1yly58e cpfmnbn czronw5 ccufa8f c1tpprfj c18294lu c8o7zmw c1mnwxt8 c12hiof0 c1qcaaz2 c11xqvs6 cqhbzzb c190oxok`} />
</div>
<div
className={`w-element c2d2z8y c1wvqgkp cc52l67 csauxtn c173o7cs cp88ou cru1m34 cjt2m6p c7ab5zo csx4m8w c1g538dd c1avg2hp c1usvwq3 ctxdr62 c11a2j33 c1kqa2lh c1s2yqin c466xhk cgu2lfb cf2mmu9 c1tbxh2x`}>
<h1
className={`w-element cp8crrr c3z3t2y c1sdqifx cjsxkwv cxtuqh6 czu882a cq0qs4j cyhpobn c19oi5sd c1ujsoxj c1xsfdpn cyzq4b cbwyhp2 c1y509hd c7ll9wy c1qzq2dp c1fhkb2b`}>
{"Email"}
</h1>
<Input
required={true}
name={"sds"}
placeholder={"Enter Email\n"}
checked={false}
type={"text"}
className={`w-element c1k15m98 c10m4har ce7fh4p c321w33 c1hic7ko c1rte529 cu5r6y1 cp8jpva cfrqylo c1yly58e cpfmnbn czronw5 ccufa8f c1tpprfj c18294lu c8o7zmw c1mnwxt8 c12hiof0 c1qcaaz2 c11xqvs6 cqhbzzb c190oxok`} />
</div>
<div
className={`w-element c2d2z8y c1wvqgkp cc52l67 csauxtn c173o7cs cp88ou cru1m34 cjt2m6p c7ab5zo csx4m8w c1g538dd c1avg2hp c1usvwq3 ctxdr62 c11a2j33 c1kqa2lh c1s2yqin c466xhk cgu2lfb cf2mmu9 c1tbxh2x`}>
<h1
className={`w-element cp8crrr c3z3t2y c1sdqifx cjsxkwv cxtuqh6 czu882a cq0qs4j cyhpobn c19oi5sd c1ujsoxj c1xsfdpn cyzq4b cbwyhp2 c1y509hd c7ll9wy c1qzq2dp c1fhkb2b`}>
{"Phone Number"}
</h1>
<Input
required={true}
name={"sds"}
placeholder={"Enter Phone Number\n\n"}
checked={false}
type={"text"}
className={`w-element c1k15m98 c10m4har ce7fh4p c321w33 c1hic7ko c1rte529 cu5r6y1 cp8jpva cfrqylo c1yly58e cpfmnbn czronw5 ccufa8f c1tpprfj c18294lu c8o7zmw c1mnwxt8 c12hiof0 c1qcaaz2 c11xqvs6 cqhbzzb c190oxok`} />
</div>
<button
className={`w-element c1npa9bv c12hiof0 cbwyhp2 c5lhvgj c1t0e04k c1yrw6kf cddkfcb crqiczw c1uzv7ov c10ok871 c1vgbgll c1hbt6x1 c175gw0n c1yku8m2 c11s1q0k c41fauy c1xqzg c3sdrzc cvatsdc cd0jc54 c1hbfi0g c158lg7o c1n822tz c1q0th6w cnddqm0 c10m4har cg75hi0 c1g538dd ctjztv3 cgqy2xs chrvea5 c1nhtyrr c10i9n90 cxzmlij c11ptxw3 c1k15m98 c18tm9ps c1mq800t`}>
{"START FREE TRIAL"}
</button>
<h1
className={`w-element cvdyi8e c3z3t2y c1sdqifx c6s4bs9 cxtuqh6 c1jndbhv cq0qs4j cyhpobn c19oi5sd c1ujsoxj c1xsfdpn cyzq4b c1qcaaz2 cfnvu8h c10m4har c1ilmz3y c17gsc9i c1fhkb2b ce7fh4p c1jh2sh4 c13hnv0z c1usvwq3 cu8h30b cw319tw c1fhx1iz c1kgtjf7`}>
{"No credit card required"}
</h1>
</RemixForm>
<div
className={`w-element cj6ctr8 c173o7cs c7v1zzr c1r7sbjc c960nmx cazpt97 cpfmnbn cj9l1k0 c1c6hyn3 c69dy50 cq23j2p cu88yio c13hnv0z c1mx206x c14tih19 czfwn1m cg7uw93 c1usvwq3 ctxdr62 cacndhw c1q3ou0e c1hz8abl`}>
<Image
src={"/assets/Hero_Malayv1_FinalSell_ShBUy009cexXB55Sv9TS0.png"}
width={886}
height={1280}
alt={""}
className={`w-image c15wi4k8 c1a60zmo c13hnv0z c1dduie cg7uw93 cw319tw cfsv9jl cdgqdgy c1hf2hch c1gh83ky cu8h30b c1tuinma c1yoohmd ccru2ml c1mx206x cj6ctr8`} />
</div>
<div
className={`w-element c1mrdp2v c1c6pc9m c1wcam6x c1s0h5jn c13d3ul5 c16lbv1s cc52l67 cuy570l c69dy50 cq23j2p c1c24u8p cjt2m6p c1p6in38 cdqx499 chj8ial cp3ndwh c6qod4o citp4x1 cfsv9jl czfwn1m cg7uw93 cw8osgr cwuskgu crupkxc c1p4kqy cjrj0ej cuib9ri c1t4548c c1mq800t c1s2yqin`}>
<h1
className={`w-element c5lhvgj c114gzb1 c17jm1ja c1w625zh c1kcsb38`}>
{"Lorem Ipsum"}
</h1>
<Image
src={"/assets/Bookbird_veDRTRzRszxZ_WOxnQw1N.png"}
width={791}
height={786}
alt={""}
className={`w-image c1hquv9t c1ci15r2 co9x8yn c156h4fe cex24uz c8h0cbu`} />
</div>
</div>
<div
className={`w-element c1mrdp2v c1c6pc9m c1wcam6x c1s0h5jn c13d3ul5 c16lbv1s cj6ctr8 cuy570l c69dy50 cq23j2p c1c24u8p cjt2m6p c1p6in38 cdqx499 chj8ial cp3ndwh c6qod4o c13hnv0z cfsv9jl czfwn1m cg7uw93 cw8osgr cwuskgu cvjoo4c c1p4kqy cjrj0ej cuib9ri c1hz8abl c1mq800t c1jrz4wp cxpvxve`}>
<h1
className={`w-element c5lhvgj c114gzb1 c17jm1ja cnddqm0 c1w625zh c1kcsb38`}>
{"Lorem Ipsum"}
</h1>
<Image
src={"/assets/Bookbird_veDRTRzRszxZ_WOxnQw1N.png"}
width={791}
height={786}
alt={""}
className={`w-image c1hquv9t c1ci15r2 co9x8yn c156h4fe cex24uz c8h0cbu`} />
</div>
</Body>
}


      export { Page }
    