"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[663],{3893:function(e,t,n){n.d(t,{A:function(){return o}});var r=n(6540);const a=(0,r.createContext)(void 0),l=e=>{let{children:t}=e;const{0:n,1:l}=(0,r.useState)("zh-TW"),{0:c,1:u}=(0,r.useState)("TWD");return r.createElement(a.Provider,{value:{language:n,setLanguage:l,currency:c,setCurrency:u}},t)};var c=n(4506);const u=(0,r.createContext)(void 0),i=e=>{let{children:t}=e;const{0:n,1:a}=(0,r.useState)([]);return r.createElement(u.Provider,{value:{notifications:n,addNotification:e=>{const t={...e,id:Date.now().toString(),read:!1};a((e=>[].concat((0,c.A)(e),[t])))},markAsRead:e=>{a((t=>t.map((t=>t.id===e?{...t,read:!0}:t))))},clearNotification:e=>{a((t=>t.filter((t=>t.id!==e))))}}},t)};var o=e=>{let{children:t}=e;return r.createElement(l,null,r.createElement(i,null,r.createElement("main",null,t)))}},847:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(6540),a=n(3893),l=n(4794);var c=e=>{let{post:t}=e;return r.createElement("div",null,r.createElement("h2",null,r.createElement(l.Link,{to:`/blog/${t.slug}`},t.title)),r.createElement("p",null,"作者：",t.author," | 發布日期：",t.date),r.createElement("p",null,t.excerpt))};var u=e=>{let{data:t}=e;const n=t.allMarkdownRemark.edges;return r.createElement(a.A,null,r.createElement("seo",{title:"旅遊博客",description:"探索我們的旅遊文章和專家攻略"}),r.createElement("h1",null,"旅遊博客"),r.createElement("div",null,n.map((e=>{let{node:t}=e;return r.createElement(c,{key:t.id,post:{...t.frontmatter,slug:t.fields.slug}})}))))}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-20a7c51652b6516f12be.js.map