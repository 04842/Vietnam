"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[284],{3893:function(e,t,r){r.d(t,{A:function(){return c}});var n=r(6540);const a=(0,n.createContext)(void 0),o=e=>{let{children:t}=e;const{0:r,1:o}=(0,n.useState)("zh-TW"),{0:l,1:i}=(0,n.useState)("TWD");return n.createElement(a.Provider,{value:{language:r,setLanguage:o,currency:l,setCurrency:i}},t)};var l=r(4506);const i=(0,n.createContext)(void 0),s=e=>{let{children:t}=e;const{0:r,1:a}=(0,n.useState)([]);return n.createElement(i.Provider,{value:{notifications:r,addNotification:e=>{const t={...e,id:Date.now().toString(),read:!1};a((e=>[].concat((0,l.A)(e),[t])))},markAsRead:e=>{a((t=>t.map((t=>t.id===e?{...t,read:!0}:t))))},clearNotification:e=>{a((t=>t.filter((t=>t.id!==e))))}}},t)};var c=e=>{let{children:t}=e;return n.createElement(o,null,n.createElement(s,null,n.createElement("main",null,t)))}},9430:function(e,t,r){r.r(t),r.d(t,{Head:function(){return l}});var n=r(6540),a=r(4794),o=r(3893);const l=()=>n.createElement("seo",{title:"Using SSR"});t.default=e=>{let{serverData:t}=e;return n.createElement(o.A,null,n.createElement("h1",null,"This page is ",n.createElement("b",null,"rendered server-side")),n.createElement("p",null,"This page is rendered server side every time the page is requested. Reload it to see a(nother) random photo from"," ",n.createElement("code",null,"dog.ceo/api/breed/shiba/images/random"),":"),n.createElement("img",{style:{width:"320px",borderRadius:"var(--border-radius)"},alt:"A random dog",src:t.message}),n.createElement("p",null,"To learn more, head over to our"," ",n.createElement("a",{href:"https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/"},"documentation about Server Side Rendering"),"."),n.createElement(a.Link,{to:"/"},"Go back to the homepage"))}}}]);
//# sourceMappingURL=component---src-pages-using-ssr-js-a9ee7486c2f39c493f69.js.map