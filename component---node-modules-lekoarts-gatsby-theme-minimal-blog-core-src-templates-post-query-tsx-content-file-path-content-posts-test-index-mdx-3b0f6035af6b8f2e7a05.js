"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[107],{1173:function(e,t,n){n.d(t,{p:function(){return p},A:function(){return g}});var l=n(6540),a=n(557),r=n(6835),c=n(5479),i=n(7715),m=n(7169);var o=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var u=e=>{let{data:{post:t},children:n}=e;return(0,a.Y)(c.A,null,(0,a.Y)(r.DZ,{as:"h1",variant:"styles.h1"},t.title),(0,a.Y)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.Y)("time",null,t.date),t.tags&&(0,a.Y)(l.Fragment,null," — ",(0,a.Y)(i.A,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,a.Y)("span",null,t.timeToRead," min read")),(0,a.Y)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,a.Y)(o,{post:t}))};const p=e=>{var t,n,l;let{data:{post:r}}=e;return(0,a.Y)(m.A,{title:r.title,description:r.description?r.description:r.excerpt,image:r.banner?null===(t=r.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(l=n.resize)||void 0===l?void 0:l.src:void 0,pathname:r.slug,canonicalUrl:r.canonicalUrl})};function g(e){let{...t}=e;return l.createElement(u,t)}},7715:function(e,t,n){var l=n(557),a=n(6540),r=n(4794),c=n(3601),i=n(2174);t.A=e=>{let{tags:t}=e;const{tagsPath:n,basePath:m}=(0,c.A)();return(0,l.Y)(a.Fragment,null,t.map(((e,t)=>(0,l.Y)(a.Fragment,{key:e.slug},!!t&&", ",(0,l.Y)(r.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,i.A)("/"+m+"/"+n+"/"+e.slug)},e.name)))))}},7169:function(e,t,n){var l=n(6540),a=n(4794),r=n(7533);t.A=e=>{let{title:t="",description:n="",pathname:c="",image:i="",children:m=null,canonicalUrl:o=""}=e;const s=(0,r.A)(),{siteTitle:u,siteTitleAlt:p,siteUrl:g,siteDescription:E,siteImage:d,author:h,siteLanguage:f}=s,x={title:t?t+" | "+u:p,description:n||E,url:""+g+(c||""),image:""+g+(i||d)};return l.createElement(l.Fragment,null,l.createElement("html",{lang:f}),l.createElement("title",null,x.title),l.createElement("meta",{name:"description",content:x.description}),l.createElement("meta",{name:"image",content:x.image}),l.createElement("meta",{property:"og:title",content:x.title}),l.createElement("meta",{property:"og:url",content:x.url}),l.createElement("meta",{property:"og:description",content:x.description}),l.createElement("meta",{property:"og:image",content:x.image}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:image:alt",content:x.description}),l.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.createElement("meta",{name:"twitter:title",content:x.title}),l.createElement("meta",{name:"twitter:url",content:x.url}),l.createElement("meta",{name:"twitter:description",content:x.description}),l.createElement("meta",{name:"twitter:image",content:x.image}),l.createElement("meta",{name:"twitter:image:alt",content:x.description}),l.createElement("meta",{name:"twitter:creator",content:h}),l.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),l.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),o?l.createElement("link",{rel:"canonical",href:o}):null,m)}},4582:function(e,t,n){n.r(t),n.d(t,{Head:function(){return i.p},default:function(){return m}});var l=n(6540),a=n(8453);function r(e){const t=Object.assign({h1:"h1",ul:"ul",li:"li",pre:"pre",code:"code",p:"p"},(0,a.RP)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,null,"nodejs serverless docker 远程调试思路"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"调试配置中，设置域名"),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-json"},'"websocketAddress": "wss://example.com/xxx"\n')),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"调试配置中，设置Host请求头"),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-json"},'"remoteHostHeader": "example.com"\n')),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"容器内，用反代来转发请求给实际的服务"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"反代监听80和443端口"),"\n",l.createElement(t.li,null,"服务的启动项加上",l.createElement(t.code,null,"--inspect-brk=9229")),"\n",l.createElement(t.li,null,"如果是调试用的websocket","\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"将Host请求头修改为",l.createElement(t.code,null,"localhost"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"如果是域名会因安全问题，被nodejs拒绝调试"),"\n"),"\n"),"\n",l.createElement(t.li,null,"转发到9229端口"),"\n"),"\n"),"\n",l.createElement(t.li,null,"其他情况则直接转发给实际的服务端口，比如9000"),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"做好鉴权，防止非开发者调试"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"可以用http的路径，在反代里鉴权"),"\n",l.createElement(t.li,null,"或者用query，在外部网关鉴权"),"\n",l.createElement(t.li,null,"确保用wss协议"),"\n"),"\n"),"\n"))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.RP)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},i=n(1173);function m(e){return l.createElement(i.A,e,l.createElement(c,e))}i.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-test-index-mdx-3b0f6035af6b8f2e7a05.js.map