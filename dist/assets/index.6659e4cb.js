import{r as f,o as d,c as _,a as p,b as m,d as h}from"./vendor.5be0e915.js";const v=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};v();var y=(i,s)=>{const n=i.__vccOpts||i;for(const[r,e]of s)n[r]=e;return n};const g={};function E(i,s){const n=f("router-view");return d(),_(n)}var L=y(g,[["render",E]]);const O="modulepreload",l={},P="/love/dist/",c=function(s,n){return!n||n.length===0?s():Promise.all(n.map(r=>{if(r=`${P}${r}`,r in l)return;l[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":O,e||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),e)return new Promise((a,u)=>{o.addEventListener("load",a),o.addEventListener("error",u)})})).then(()=>s())},A=[{path:"/",component:()=>c(()=>import("./love.10b612ab.js"),["assets/love.10b612ab.js","assets/love.b4d69137.css","assets/vendor.5be0e915.js","assets/Star.72e0081c.js","assets/Star.eb6d3a4d.css"])},{path:"/wish",component:()=>c(()=>import("./wish.fd1bb40f.js"),["assets/wish.fd1bb40f.js","assets/wish.ddea6a84.css","assets/Star.72e0081c.js","assets/Star.eb6d3a4d.css","assets/vendor.5be0e915.js"])},{path:"/egg",component:()=>c(()=>import("./egg.249ab18a.js"),["assets/egg.249ab18a.js","assets/vendor.5be0e915.js"])}],k=p({history:m("/love/dist"),routes:A});h(L).use(k).mount("#app");export{y as _,c as a};
