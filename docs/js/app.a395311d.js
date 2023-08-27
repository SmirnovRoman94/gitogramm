(function(){"use strict";var e={4375:function(e,t,n){n.d(t,{Y:function(){return o},U:function(){return r}});var r={};n.r(r),n.d(r,{getTrandings:function(){return s}});var o={};n.r(o),n.d(o,{getTrandings:function(){return c}});n(6229),n(7330),n(2062);var a=n(4161);const i="https://api.github.com",u=({url:e,method:t="get",data:n={},headers:r={}})=>(0,a.Z)({url:e,method:t,data:n,baseURL:i,headers:r}),s=(e="javascript")=>{const t=new URLSearchParams,n=6048e5,r=new Date(Date.now()-n),o=[r.getFullYear(),r.getMonth()+1<10?`0${r.getMonth()+1}`:r.getMonth()+1,r.getDate()<10?`0${r.getDate()}`:r.getDate()].join("-");return t.append("order","desc"),t.append("sort","stars"),t.append("per_page",10),t.append("q",`language:${e} created:>${o}`),u({url:`search/repositories?${t}`})},c=(e,t)=>{console.log(e,t);const n=new URLSearchParams;return n.append("accept","application/vnd.github.v3.html+json"),u({url:`/repos/${e}/${t}/readme`,headers:{accept:"application/vnd.github.v3.html+json"}})}},4737:function(e,t,n){var r=n(9242),o=n(3396),a=n(7139);const i={class:"nav"};function u(e,t,n,r,u,s){const c=(0,o.up)("router-link"),d=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("ul",i,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.routerLInks,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{key:t},[(0,o.Wm)(c,{to:e.link},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(e.name),1)])),_:2},1032,["to"])])))),128))]),(0,o.Wm)(d)],64)}var s={name:"App",data:()=>({routerLInks:[{name:"Home",link:"/"},{name:"Repositories",link:"/repositories"},{name:"Stories",link:"/stories"}]})},c=n(89);const d=(0,c.Z)(s,[["render",u]]);var l=d,f=n(2483),p=[{path:"/",component:()=>Promise.all([n.e(959),n.e(403)]).then(n.bind(n,8403)),name:"Home"},{path:"/repositories",component:()=>Promise.all([n.e(959),n.e(306)]).then(n.bind(n,9306)),name:"Repositories"},{path:"/stories",component:()=>Promise.all([n.e(959),n.e(978)]).then(n.bind(n,9978)),name:"Stories"}],m=(0,f.p7)({history:(0,f.r5)(),routes:p}),g=n(65),h=n(4375);const v={namespaced:!0,state:{dataItems:null,errors:null,data:{}},mutations:{set_trandings_data(e,t){e.dataItems=t},set_errors(e,t){e.errors=t},set_trandings_item(e,t){console.log(t),e.data=t}},actions:{async fetchTrandings({commit:e}){try{const{data:t}=await h.U.getTrandings();e("set_trandings_data",t.items)}catch(t){e("set_errors","Не удалось получить данные")}},async fetchTrandingsItem(e,t){try{const{data:e}=await h.Y.getTrandings(t.login,t.name);this.commit("trandings/set_trandings_item",{avatar:t.avatar,login:t.login,title:t.name,data:e,loading:!1})}catch(n){this.commit("trandings/set_errors","Не удалось получить данные")}}},getters:{getDataTrandings(e){return e.dataItems}}};var b=(0,g.MT)({modules:{trandings:v}});const y=(0,r.ri)(l);y.use(m),y.use(b),y.mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],a=e[d][2];for(var u=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,a<i&&(i=a));if(u){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{306:"ee555789",403:"27d1e02d",959:"ec79d792",978:"2037e0ec"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{306:"91abb338",403:"dd077554",978:"dd740bea"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="gitogram:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var l=c[d];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+a){u=l;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[o];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="https://smirnovroman94.github.io/gitogramm/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=u,a.parentNode&&a.parentNode.removeChild(a),o(s)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),u=n.p+i;if(t(i,u))return o();e(r,u,null,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={306:1,403:1,978:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),u=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],s=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var d=s(n)}for(t&&t(r);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},r=self["webpackChunkgitogram"]=self["webpackChunkgitogram"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4737)}));r=n.O(r)})();
//# sourceMappingURL=app.a395311d.js.map