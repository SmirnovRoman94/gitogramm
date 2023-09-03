(function(){"use strict";var t={4375:function(t,e,n){n.d(e,{Y:function(){return o},U:function(){return r}});var r={};n.r(r),n.d(r,{getTrandings:function(){return u}});var o={};n.r(o),n.d(o,{getTrandings:function(){return c}});n(6229),n(7330),n(2062);var a=n(4161);const i="https://api.github.com",s=({url:t,method:e="get",data:n={},headers:r={}})=>(0,a.Z)({url:t,method:e,data:n,baseURL:i,headers:r}),u=(t="javascript")=>{const e=new URLSearchParams,n=6048e5,r=new Date(Date.now()-n),o=[r.getFullYear(),r.getMonth()+1<10?`0${r.getMonth()+1}`:r.getMonth()+1,r.getDate()<10?`0${r.getDate()}`:r.getDate()].join("-");return e.append("order","desc"),e.append("sort","stars"),e.append("per_page",10),e.append("q",`language:${t} created:>${o}`),s({url:`search/repositories?${e}`})},c=(t,e)=>{console.log(t,e);const n=new URLSearchParams;return n.append("accept","application/vnd.github.v3.html+json"),s({url:`/repos/${t}/${e}/readme`,headers:{accept:"application/vnd.github.v3.html+json"}})}},5716:function(t,e,n){var r=n(9242),o=n(3396),a=n(7139);const i={class:"nav"};function s(t,e,n,r,s,u){const c=(0,o.up)("router-link"),l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("ul",i,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.routerLInks,((t,e)=>((0,o.wg)(),(0,o.iD)("li",{key:e},[(0,o.Wm)(c,{to:t.link},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(t.name),1)])),_:2},1032,["to"])])))),128))]),(0,o.Wm)(l)],64)}var u={name:"App",data:()=>({routerLInks:[{name:"Home",link:"/"},{name:"Repositories",link:"/repositories"},{name:"Stories",link:"/stories"}]})},c=n(89);const l=(0,c.Z)(u,[["render",s]]);var d=l,f=n(2483),p=[{path:"/",component:()=>Promise.all([n.e(466),n.e(261)]).then(n.bind(n,3261)),name:"Home"},{path:"/repositories",component:()=>Promise.all([n.e(466),n.e(711)]).then(n.bind(n,2711)),name:"Repositories"},{path:"/stories",component:()=>Promise.all([n.e(466),n.e(949)]).then(n.bind(n,1949)),name:"Stories"},{path:"/auth",component:()=>Promise.all([n.e(466),n.e(86)]).then(n.bind(n,7086)),name:"auth"}];const m=(0,f.p7)({history:(0,f.r5)(),routes:p});m.beforeEach((async(t,e,n)=>{const r="auth"===t.name;if(r)n();else try{const t=await fetch("https://api.github.com/user",{headers:{Authorization:`token ${localStorage.getItem("token")}`,"Content-type":"application/json"}});401===t.status&&(n({name:"auth"}),console.log("Error")),n()}catch(o){n({name:"auth"})}}));var h=n(65),g=n(4375);const v={namespaced:!0,state:{dataItems:null,errors:null,data:{}},mutations:{set_trandings_data(t,e){t.dataItems=e},set_errors(t,e){t.errors=e},set_trandings_item(t,e){console.log(e),t.data=e}},actions:{async fetchTrandings({commit:t}){try{const{data:e}=await g.U.getTrandings();t("set_trandings_data",e.items)}catch(e){t("set_errors","Не удалось получить данные")}},async fetchTrandingsItem(t,e){try{const{data:t}=await g.Y.getTrandings(e.login,e.name);console.log(t),this.commit("trandings/set_trandings_item",{avatar:e.avatar,login:e.login,title:e.name,data:t,loading:!1,id:e.id})}catch(n){this.commit("trandings/set_errors","Не удалось получить данные")}}},getters:{getDataTrandings(t){return t.dataItems}}};n(7658);const b={namespaced:!0,state:{user:null,errors:null,likes:null},mutations:{set_user_info(t,e){t.user=e},set_errors(t,e){t.errors=e},set_user_likes(t,e){t.likes=[...e]}},actions:{async UserInfo(){try{const t=await fetch("https://api.github.com/user",{headers:{Authorization:`token ${localStorage.getItem("token")}`,"Content-type":"application/json"}});let e=await t.json();this.commit("user/set_user_info",e)}catch(t){this.commit("user/set_errors","Не удалось получить данные")}},async userLikes(){try{const t=await fetch("https://api.github.com/user/starred",{headers:{Authorization:`token ${localStorage.getItem("token")}`,"Content-type":"application/json"}});let e=await t.json(),n=[];e.forEach((t=>{const e=t.updated_at.split("T")[0],r=e.split("-")[2],o=e.split("-")[1];n.push({id:t.id,user:{login:t.owner.login,avatar:t.owner.avatar_url},title:t.name,text:t.description,star:t.stargazers_count,fork:t.forks_count,comments:[],date:`${r}.${o}`})})),this.commit("user/set_user_likes",n)}catch(t){this.commit("user/set_errors","Не удалось получить данные")}},async dataComments(t,e){try{const t=await fetch(`https://api.github.com/repos/${e.owner}/${e.repo}/issues`,{headers:{Authorization:`token ${localStorage.getItem("token")}`,"Content-type":"application/json"}});let n=await t.json();return n}catch(n){this.commit("user/set_errors","Не удалось получить данные")}},async addLike(t,e){console.log(e);try{const t=await fetch("https://api.github.com/user/starred/SmirnovRoman94/notes3",{method:"PUT",headers:{Authorization:`token ${localStorage.getItem("token")}`,"Content-type":"application/json","Content-Length":0,"X-GitHub-Api-Version":"2022-11-28"}});let e=await t.json();console.log(e)}catch(n){this.commit("user/set_errors","Не удалось получить данные")}}},getters:{getUserInfo(t){return t.user},getUserLikes(t){return t.likes}}};var y=(0,h.MT)({modules:{trandings:v,user:b}});const k=(0,r.ri)(d);k.use(m),k.use(y),k.mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],a=t[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(s=!1,a<i&&(i=a));if(s){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{86:"d1d4a9c4",261:"29931ddf",466:"5fb82a28",711:"98bd4e4a",949:"82df113a"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{86:"67bc9f0b",261:"08c7c761",711:"91abb338",949:"af04e369"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="gitogram:";n.l=function(r,o,a,i){if(t[r])t[r].push(o);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+a){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+a),s.src=r),t[r]=[o];var f=function(e,n){s.onerror=s.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="https://smirnovroman94.github.io/gitogramm/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,a.parentNode&&a.parentNode.removeChild(a),o(u)}};return a.onerror=a.onload=i,a.href=e,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===t||a===e))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===t||a===e)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),s=n.p+i;if(e(i,s))return o();t(r,s,null,o,a)}))},o={143:0};n.f.miniCss=function(t,e){var n={86:1,261:1,711:1,949:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(e),s=new Error,u=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};n.l(i,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],s=r[1],u=r[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var l=u(n)}for(e&&e(r);c<i.length;c++)a=i[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},r=self["webpackChunkgitogram"]=self["webpackChunkgitogram"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5716)}));r=n.O(r)})();
//# sourceMappingURL=app.f1e8f034.js.map