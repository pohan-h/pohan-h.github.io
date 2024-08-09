"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,i=new RegExp("^"+s.source),l=new RegExp(s.source+r.source,"gu"),o=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,n,r)=>{let s=!1,i=!1,l=!1;for(let o=0;o<e.length;o++){const c=e[o];s&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),s=!1,l=i,i=!0,o++):i&&l&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=i,i=!1,s=!0):(s=n(c)===c&&r(c)!==c,l=i,i=r(c)===c&&n(c)!==c)}return e})(e,s,c)),e=e.replace(i,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,s):s(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return p},M:function(){return L},P:function(){return E},S:function(){return D},_:function(){return l},a:function(){return i},b:function(){return d},g:function(){return u},h:function(){return o}});var n=a(7294),r=(a(3204),a(5697)),s=a.n(r);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t.indexOf(a=s[n])>=0||(r[a]=e[a]);return r}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,a,n,r){return void 0===r&&(r={}),i({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:i({},r,{opacity:t?1:0})})}function u(e,t,a,n,r,s,l,o){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const g=["children"],m=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=l(e,g);return n.createElement(n.Fragment,null,n.createElement(m,i({},a)),t,null)},y=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],h=function(e){let{src:t,srcSet:a,loading:r,alt:s="",shouldLoad:o}=e,c=l(e,y);return n.createElement("img",i({},c,{decoding:"async",loading:r,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:s}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,s=l(e,f);const o=s.sizes||(null==t?void 0:t.sizes),c=n.createElement(h,i({},s,t,{sizes:o,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return n.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:o})})),c):c};var w;h.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},b.displayName="Picture",b.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const v=["fallback"],E=function(e){let{fallback:t}=e,a=l(e,v);return t?n.createElement(b,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",i({},a))};E.displayName="Placeholder",E.propTypes={fallback:r.string,sources:null==(w=b.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const L=function(e){return n.createElement(n.Fragment,null,n.createElement(b,i({},e)),n.createElement("noscript",null,n.createElement(b,i({},e,{shouldLoad:!0}))))};L.displayName="MainImage",L.propTypes=b.propTypes;const x=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],k=["style","className"],S=e=>e.replace(/\n/g,""),C=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),i=3;i<n;i++)r[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},T={image:s().object.isRequired,alt:C},N=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],_=new Set;let j,z;const O=function(e){let{as:t="div",image:r,style:s,backgroundColor:d,className:u,class:g,onStartLoad:m,onLoad:p,onError:y}=e,f=l(e,N);const{width:h,height:b,layout:w}=r,v=c(h,b,w),{style:E,className:L}=v,x=l(v,I),k=(0,n.useRef)(),S=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);g&&(u=g);const C=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(w,h,b);return(0,n.useEffect)((()=>{j||(j=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return z=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==m||m({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void _.add(S);if(z&&_.has(S))return;let t,n;return j.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;k.current&&(k.current.innerHTML=a(i({isLoading:!0,isLoaded:_.has(S),image:r},f)),_.has(S)||(t=requestAnimationFrame((()=>{k.current&&(n=l(k.current,S,_,s,m,p,y))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{_.has(S)&&z&&(k.current.innerHTML=z(i({isLoading:_.has(S),isLoaded:_.has(S),image:r},f)),null==m||m({wasCached:!0}),null==p||p({wasCached:!0}))}),[r]),(0,n.createElement)(t,i({},x,{style:i({},E,s,{backgroundColor:d}),className:L+(u?" "+u:""),ref:k,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},R=(0,n.memo)((function(e){return e.image?(0,n.createElement)(O,e):null}));R.propTypes=T,R.displayName="GatsbyImage";const q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function A(e){return function(t){let{src:a,__imageData:r,__error:s}=t,o=l(t,q);return s&&console.warn(s),r?n.createElement(e,i({image:r},o)):(console.warn("Image not loaded",a),null)}}const P=A((function(e){let{as:t="div",className:a,class:r,style:s,image:o,loading:g="lazy",imgClassName:m,imgStyle:y,backgroundColor:f,objectFit:h,objectPosition:b}=e,w=l(e,x);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),y=i({objectFit:h,objectPosition:b,backgroundColor:f},y);const{width:v,height:C,layout:T,images:N,placeholder:I,backgroundColor:_}=o,j=c(v,C,T),{style:z,className:O}=j,R=l(j,k),q={fallback:void 0,sources:[]};return N.fallback&&(q.fallback=i({},N.fallback,{srcSet:N.fallback.srcSet?S(N.fallback.srcSet):void 0})),N.sources&&(q.sources=N.sources.map((e=>i({},e,{srcSet:S(e.srcSet)})))),n.createElement(t,i({},R,{style:i({},z,s,{backgroundColor:f}),className:O+(a?" "+a:"")}),n.createElement(p,{layout:T,width:v,height:C},n.createElement(E,i({},u(I,!1,T,v,C,_,h,b))),n.createElement(L,i({"data-gatsby-image-ssr":"",className:m},w,d("eager"===g,!1,q,g,y)))))})),M=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},W=new Set(["fixed","fullWidth","constrained"]),F={src:s().string.isRequired,alt:C,width:M,height:M,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};P.displayName="StaticImage",P.propTypes=F;const D=A(R);D.displayName="StaticImage",D.propTypes=F},5592:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(1883),s=a(8032);var i=e=>{let{siteTitle:t}=e;return n.createElement("header",{style:{margin:"0 auto",padding:"var(--space-4) var(--size-gutter)",display:"flex",alignItems:"center",justifyContent:"space-between"}},n.createElement("div",null,n.createElement(r.Link,{to:"/",style:{fontSize:"var(--font-sm)",textDecoration:"none"}},t),n.createElement("nav",null,n.createElement("ul",{style:{listStyleType:"none",padding:0,display:"flex",gap:"20px",margin:0}},n.createElement("li",null,n.createElement(r.Link,{to:"/"},"首页")),n.createElement("li",null,n.createElement(r.Link,{to:"/ships"},"船舰")),n.createElement("li",null,n.createElement(r.Link,{to:"/buildings"},"建筑")),n.createElement("li",null,n.createElement(r.Link,{to:"/resources"},"资源"))))),n.createElement(s.S,{src:"../images/my-logo.png",alt:"My Logo",height:20,style:{margin:0},__imageData:a(6594)}))};var l=e=>{var t;let{children:a}=e;const s=(0,r.useStaticQuery)("3649515864");return n.useEffect((()=>{const e=document.getElementById("follower");let t={x:0,y:0};const a=t=>{const a=t.clientX-10,n=t.clientY-10;e.style.left=a+"px",e.style.top=n+"px"},n=e=>{t={x:e.clientX-10,y:e.clientY-10}},r=()=>{e.style.left=t.x+"px",e.style.top=t.y+"px"};return document.addEventListener("mousemove",a),document.addEventListener("click",n),window.addEventListener("load",r),()=>{document.removeEventListener("mousemove",a),document.removeEventListener("click",n),window.removeEventListener("load",r)}}),[]),n.createElement(n.Fragment,null,n.createElement(i,{siteTitle:(null===(t=s.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),n.createElement("div",{style:{margin:"0 auto",maxWidth:"var(--size-content)",padding:"var(--size-gutter)"}},n.createElement("main",null,a),n.createElement("div",{id:"follower"}),n.createElement("footer",{style:{marginTop:"var(--space-5)",fontSize:"var(--font-sm)"}},"© ",(new Date).getFullYear()," · Built with"," ",n.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))))}},6594:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/705185e5354a42a4570368356f29b7e5/f4d5f/my-logo.png","srcSet":"/static/705185e5354a42a4570368356f29b7e5/120b9/my-logo.png 6w,\\n/static/705185e5354a42a4570368356f29b7e5/51847/my-logo.png 12w,\\n/static/705185e5354a42a4570368356f29b7e5/f4d5f/my-logo.png 24w,\\n/static/705185e5354a42a4570368356f29b7e5/29385/my-logo.png 48w","sizes":"(min-width: 24px) 24px, 100vw"},"sources":[{"srcSet":"/static/705185e5354a42a4570368356f29b7e5/0c9a1/my-logo.webp 6w,\\n/static/705185e5354a42a4570368356f29b7e5/73620/my-logo.webp 12w,\\n/static/705185e5354a42a4570368356f29b7e5/93907/my-logo.webp 24w,\\n/static/705185e5354a42a4570368356f29b7e5/f03eb/my-logo.webp 48w","type":"image/webp","sizes":"(min-width: 24px) 24px, 100vw"}]},"width":24,"height":20}')}}]);
//# sourceMappingURL=commons-b5a1cd80d22a4e75c795.js.map