"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[312,247,869],{3893:function(e,t,a){a.d(t,{A:function(){return s}});var n=a(6540);const r=(0,n.createContext)(void 0),l=e=>{let{children:t}=e;const{0:a,1:l}=(0,n.useState)("zh-TW"),{0:u,1:c}=(0,n.useState)("TWD");return n.createElement(r.Provider,{value:{language:a,setLanguage:l,currency:u,setCurrency:c}},t)};var u=a(4506);const c=(0,n.createContext)(void 0),o=e=>{let{children:t}=e;const{0:a,1:r}=(0,n.useState)([]);return n.createElement(c.Provider,{value:{notifications:a,addNotification:e=>{const t={...e,id:Date.now().toString(),read:!1};r((e=>[].concat((0,u.A)(e),[t])))},markAsRead:e=>{r((t=>t.map((t=>t.id===e?{...t,read:!0}:t))))},clearNotification:e=>{r((t=>t.filter((t=>t.id!==e))))}}},t)};var s=e=>{let{children:t}=e;return n.createElement(l,null,n.createElement(o,null,n.createElement("main",null,t)))}},2906:function(e,t,a){a.r(t);var n=a(6540);t.default=e=>{let{onSuccess:t}=e;const{0:a,1:r}=(0,n.useState)(""),{0:l,1:u}=(0,n.useState)("");return n.createElement("form",{onSubmit:async e=>{e.preventDefault(),console.log("登入:",{email:a,password:l}),t()}},n.createElement("input",{type:"email",value:a,onChange:e=>r(e.target.value),placeholder:"電子郵件",required:!0}),n.createElement("input",{type:"password",value:l,onChange:e=>u(e.target.value),placeholder:"密碼",required:!0}),n.createElement("button",{type:"submit"},"登入"))}},9382:function(e,t,a){a.r(t);var n=a(6540);t.default=e=>{let{onSuccess:t}=e;const{0:a,1:r}=(0,n.useState)(""),{0:l,1:u}=(0,n.useState)(""),{0:c,1:o}=(0,n.useState)("");return n.createElement("form",{onSubmit:async e=>{e.preventDefault(),console.log("註冊:",{name:a,email:l,password:c}),t()}},n.createElement("input",{type:"text",value:a,onChange:e=>r(e.target.value),placeholder:"姓名",required:!0}),n.createElement("input",{type:"email",value:l,onChange:e=>u(e.target.value),placeholder:"電子郵件",required:!0}),n.createElement("input",{type:"password",value:c,onChange:e=>o(e.target.value),placeholder:"密碼",required:!0}),n.createElement("button",{type:"submit"},"註冊"))}},2180:function(e,t,a){a.r(t);var n=a(6540),r=a(4794),l=a(3893),u=a(2906),c=a(9382);t.default=()=>{const{0:e,1:t}=(0,n.useState)(!0),a=()=>{(0,r.navigate)("/account/profile")};return n.createElement(l.A,null,n.createElement("seo",{title:e?"登入":"註冊",description:"登入或註冊您的帳戶"}),n.createElement("h1",null,e?"登入":"註冊"),e?n.createElement(u.default,{onSuccess:a}):n.createElement(c.default,{onSuccess:a}),n.createElement("button",{onClick:()=>t(!e)},e?"還沒有帳戶？註冊":"已有帳戶？登入"))}}}]);
//# sourceMappingURL=component---src-pages-account-login-tsx-8ee40f9d518398df12a6.js.map