import{C as s}from"./index.e5928329.js";import{I as g}from"./index.c4602e68.js";import{N as u}from"./function-call.2bda93d8.js";import{u as k}from"./use-translate.dc7c72f2.js";import{z as j,D as E,r as w,o as b,a as A,e as o,w as l,B as t,d as B,t as N,F as x}from"./vue-libs.84090ae0.js";import"./with-install.eb95b9ca.js";import"./use-route.c396a838.js";import"./mount-component.21d1f7e5.js";import"./use-expose.5b468dfd.js";import"./index.87835e2a.js";import"./interceptor.388efbea.js";import"./use-touch.89cea093.js";import"./index.5c401e78.js";import"./utils.39620306.js";import"./index.1b2e67e6.js";import"./use-lazy-render.98b46970.js";import"./on-popup-reopen.6401152e.js";import"./index.78843199.js";const K=j({setup(v){const p=u.Component,e=k({"zh-CN":{primary:"\u4E3B\u8981\u901A\u77E5",success:"\u6210\u529F\u901A\u77E5",danger:"\u5371\u9669\u901A\u77E5",warning:"\u8B66\u544A\u901A\u77E5",content:"\u901A\u77E5\u5185\u5BB9",notifyType:"\u901A\u77E5\u7C7B\u578B",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",customNotify:"\u81EA\u5B9A\u4E49\u914D\u7F6E",componentCall:"\u7EC4\u4EF6\u8C03\u7528",customDuration:"\u81EA\u5B9A\u4E49\u65F6\u957F"},"en-US":{primary:"Primary",success:"Success",danger:"Danger",warning:"Warning",content:"Notify Message",notifyType:"Notify Type",customColor:"Custom Color",customNotify:"Custom Notify",componentCall:"Component Call",customDuration:"Custom Duration"}}),a=E(!1),C=()=>{u(e("content"))},d=()=>{u({color:"#ad0000",message:e("customColor"),background:"#ffe1e1"})},f=()=>{u({message:e("customDuration"),duration:1e3})},r=c=>{u({message:e("content"),type:c})},y=()=>{a.value=!0,setTimeout(()=>{a.value=!1},2e3)};return(c,n)=>{const m=w("demo-block");return b(),A(x,null,[o(m,{card:"",title:t(e)("basicUsage")},{default:l(()=>[o(t(s),{"is-link":"",title:t(e)("basicUsage"),onClick:C},null,8,["title"])]),_:1},8,["title"]),o(m,{card:"",title:t(e)("notifyType")},{default:l(()=>[o(t(s),{"is-link":"",title:t(e)("primary"),onClick:n[0]||(n[0]=i=>r("primary"))},null,8,["title"]),o(t(s),{"is-link":"",title:t(e)("success"),onClick:n[1]||(n[1]=i=>r("success"))},null,8,["title"]),o(t(s),{"is-link":"",title:t(e)("danger"),onClick:n[2]||(n[2]=i=>r("danger"))},null,8,["title"]),o(t(s),{"is-link":"",title:t(e)("warning"),onClick:n[3]||(n[3]=i=>r("warning"))},null,8,["title"])]),_:1},8,["title"]),o(m,{card:"",title:t(e)("customNotify")},{default:l(()=>[o(t(s),{"is-link":"",title:t(e)("customColor"),onClick:d},null,8,["title"]),o(t(s),{"is-link":"",title:t(e)("customDuration"),onClick:f},null,8,["title"])]),_:1},8,["title"]),o(m,{card:"",title:t(e)("componentCall")},{default:l(()=>[o(t(s),{"is-link":"",title:t(e)("componentCall"),onClick:y},null,8,["title"]),o(t(p),{show:a.value,"onUpdate:show":n[4]||(n[4]=i=>a.value=i),type:"success"},{default:l(()=>[o(t(g),{name:"bell",style:{"margin-right":"4px"}}),B("span",null,N(t(e)("content")),1)]),_:1},8,["show"])]),_:1},8,["title"])],64)}}});export{K as default};