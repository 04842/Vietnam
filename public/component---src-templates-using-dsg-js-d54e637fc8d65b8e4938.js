"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[385],{3893:function(e,t,n){n.d(t,{A:function(){return m}});var a=n(6540);const r=(0,a.createContext)(void 0),c=e=>{let{children:t}=e;const{0:n,1:c}=(0,a.useState)("zh-TW"),{0:l,1:o}=(0,a.useState)("TWD");return a.createElement(r.Provider,{value:{language:n,setLanguage:c,currency:l,setCurrency:o}},t)};var l=n(4506);const o=(0,a.createContext)(void 0),i=e=>{let{children:t}=e;const{0:n,1:r}=(0,a.useState)([]);return a.createElement(o.Provider,{value:{notifications:n,addNotification:e=>{const t={...e,id:Date.now().toString(),read:!1};r((e=>[].concat((0,l.A)(e),[t])))},markAsRead:e=>{r((t=>t.map((t=>t.id===e?{...t,read:!0}:t))))},clearNotification:e=>{r((t=>t.filter((t=>t.id!==e))))}}},t)};var m=e=>{let{children:t}=e;return a.createElement(c,null,a.createElement(i,null,a.createElement("main",null,t)))}},1042:function(e,t,n){var a=n(6540),r=n(4794);t.A=e=>{var t,n;let{description:c,lang:l="zh-TW",meta:o=[],title:i,children:m}=e;const{site:u}=(0,r.useStaticQuery)("63159454"),s=c||u.siteMetadata.description,d=null===(t=u.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("html",{lang:l}),a.createElement("title",null,d?`${i} | ${d}`:i),a.createElement("meta",{name:"description",content:s}),a.createElement("meta",{property:"og:title",content:i}),a.createElement("meta",{property:"og:description",content:s}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=u.siteMetadata)||void 0===n?void 0:n.author)||""}),a.createElement("meta",{name:"twitter:title",content:i}),a.createElement("meta",{name:"twitter:description",content:s}),o.map(((e,t)=>a.createElement("meta",{key:t,name:e.name,content:e.content}))),m)}},1347:function(e,t,n){n.r(t),n.d(t,{Head:function(){return l}});var a=n(6540),r=n(4794),c=n(3893);n(1042);const l=()=>a.createElement(Seo,{title:"Using DSG"});t.default=()=>a.createElement(c.A,null,a.createElement("h1",null,"Hello from a ",a.createElement("b",null,"DSG Page")),a.createElement("p",null,"This page is not created until requested by a user."),a.createElement("p",null,"To learn more, head over to our"," ",a.createElement("a",{href:"https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/"},"documentation about Deferred Static Generation"),"."),a.createElement(r.Link,{to:"/"},"Go back to the homepage"))}}]);
//# sourceMappingURL=component---src-templates-using-dsg-js-d54e637fc8d65b8e4938.js.map