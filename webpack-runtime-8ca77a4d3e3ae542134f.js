!function(){"use strict";var e,t,n,r,o,u,f,i={},a={};function c(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return i[e](n,n.exports,c),n.exports}c.m=i,e=[],c.O=function(t,n,r,o){if(!n){var u=1/0;for(s=0;s<e.length;s++){n=e[s][0],r=e[s][1],o=e[s][2];for(var f=!0,i=0;i<n.length;i++)(!1&o||u>=o)&&Object.keys(c.O).every((function(e){return c.O[e](n[i])}))?n.splice(i--,1):(f=!1,o<u&&(u=o));if(f){e.splice(s--,1);var a=r();void 0!==a&&(t=a)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,r,o]},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},c.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);c.r(o);var u={};t=t||[null,n({}),n([]),n(n)];for(var f=2&r&&e;"object"==typeof f&&!~t.indexOf(f);f=n(f))Object.getOwnPropertyNames(f).forEach((function(t){u[t]=function(){return e[t]}}));return u.default=function(){return e},c.d(o,u),o},c.d=function(e,t){for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.f={},c.e=function(e){return Promise.all(Object.keys(c.f).reduce((function(t,n){return c.f[n](e,t),t}),[]))},c.u=function(e){return({351:"commons",476:"component---src-pages-using-ssr-js",477:"component---src-pages-ships-js",532:"styles",678:"component---src-pages-index-js",713:"component---src-templates-using-dsg-js",742:"component---src-pages-buildings-js",834:"component---src-pages-resources-js",883:"component---src-pages-404-js",970:"component---src-pages-using-typescript-tsx"}[e]||e)+"-"+{351:"dce8739fb3f421812e76",476:"e6bd961d901ce9d28b37",477:"62b7d1011c3c841f5ecc",532:"4fffce1ecfea467ce4da",678:"0b5ccd06d03e537f95ea",713:"5a4148f2d2536c27ba52",731:"50a6dabafe7d779dd9de",742:"0f12f91543df321971cd",834:"f4ae1914192b05cddc5b",843:"4d22e4d87d98fa226c97",883:"c17c69b58b582df43dbc",970:"e476af23b8285a5233b9"}[e]+".js"},c.miniCssF=function(e){return"styles.30337f6f086c6bafca22.css"},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="gatsby-starter-default:",c.l=function(e,t,n,u){if(r[e])r[e].push(t);else{var f,i;if(void 0!==n)for(var a=document.getElementsByTagName("script"),s=0;s<a.length;s++){var d=a[s];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==o+n){f=d;break}}f||(i=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.setAttribute("data-webpack",o+n),f.src=e),r[e]=[t];var l=function(t,n){f.onerror=f.onload=null,clearTimeout(p);var o=r[e];if(delete r[e],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),i&&document.head.appendChild(f)}},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/",u=function(e){return new Promise((function(t,n){var r=c.miniCssF(e),o=c.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(f=n[r]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(o===e||o===t))return f}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){var f;if((o=(f=u[r]).getAttribute("data-href"))===e||o===t)return f}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(u){if(o.onerror=o.onload=null,"load"===u.type)n();else{var f=u&&("load"===u.type?"missing":u.type),i=u&&u.target&&u.target.href||t,a=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=f,a.request=i,o.parentNode.removeChild(o),r(a)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},f={658:0},c.f.miniCss=function(e,t){f[e]?t.push(f[e]):0!==f[e]&&{532:1}[e]&&t.push(f[e]=u(e).then((function(){f[e]=0}),(function(t){throw delete f[e],t})))},function(){var e={658:0};c.f.j=function(t,n){var r=c.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(532|658)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var u=c.p+c.u(t),f=new Error;c.l(u,(function(n){if(c.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+u+")",f.name="ChunkLoadError",f.type=o,f.request=u,r[1](f)}}),"chunk-"+t,t)}},c.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,u=n[0],f=n[1],i=n[2],a=0;if(u.some((function(t){return 0!==e[t]}))){for(r in f)c.o(f,r)&&(c.m[r]=f[r]);if(i)var s=i(c)}for(t&&t(n);a<u.length;a++)o=u[a],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(s)},n=self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();
//# sourceMappingURL=webpack-runtime-8ca77a4d3e3ae542134f.js.map