(()=>{"use strict";var e,r,t,o={},n={};function s(e){var r=n[e];if(void 0!==r)return r.exports;var t=n[e]={id:e,loaded:!1,exports:{}};return o[e].call(t.exports,t,t.exports,s),t.loaded=!0,t.exports}s.m=o,e=[],s.O=(r,t,o,n)=>{if(!t){var u=1/0;for(l=0;l<e.length;l++){for(var[t,o,n]=e[l],a=!0,i=0;i<t.length;i++)(!1&n||u>=n)&&Object.keys(s.O).every((e=>s.O[e](t[i])))?t.splice(i--,1):(a=!1,n<u&&(u=n));if(a){e.splice(l--,1);var d=o();void 0!==d&&(r=d)}}return r}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[t,o,n]},s.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return s.d(r,{a:r}),r},s.d=(e,r)=>{for(var t in r)s.o(r,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((r,t)=>(s.f[t](e,r),r)),[])),s.u=e=>245===e?"js/home-chunk-uopy3u.js":350===e?"js/compose-chunk-uopy3u.js":721===e?"js/post-chunk-uopy3u.js":970===e?"js/profile-chunk-uopy3u.js":232===e?"js/dmym-chunk-uopy3u.js":874===e?"js/dmyh-chunk-uopy3u.js":616===e?"js/daci-chunk-uopy3u.js":399===e?"js/dffc-chunk-uopy3u.js":948===e?"js/dsfc-chunk-uopy3u.js":322===e?"js/dssc-chunk-uopy3u.js":void 0,s.miniCssF=e=>({138:"css/spa",170:"css/app",242:"css/appdark",703:"css/admin",994:"css/landing"}[e]+".css"),s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},t="pixelfed:",s.l=(e,o,n,u)=>{if(r[e])r[e].push(o);else{var a,i;if(void 0!==n)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var c=d[l];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==t+n){a=c;break}}a||(i=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.setAttribute("data-webpack",t+n),a.src=e),r[e]=[o];var p=(t,o)=>{a.onerror=a.onload=null,clearTimeout(f);var n=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((e=>e(o))),t)return t(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),i&&document.head.appendChild(a)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),s.p="/",(()=>{var e={929:0,242:0,170:0,138:0,703:0,994:0};s.f.j=(r,t)=>{var o=s.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(/^(138|170|242|703|929|994)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var u=s.p+s.u(r),a=new Error;s.l(u,(t=>{if(s.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;a.message="Loading chunk "+r+" failed.\n("+n+": "+u+")",a.name="ChunkLoadError",a.type=n,a.request=u,o[1](a)}}),"chunk-"+r,r)}},s.O.j=r=>0===e[r];var r=(r,t)=>{var o,n,[u,a,i]=t,d=0;if(u.some((r=>0!==e[r]))){for(o in a)s.o(a,o)&&(s.m[o]=a[o]);if(i)var l=i(s)}for(r&&r(t);d<u.length;d++)n=u[d],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(l)},t=self.webpackChunkpixelfed=self.webpackChunkpixelfed||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();