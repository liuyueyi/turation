const h="modulepreload",m=function(l){return"/tutorial/"+l},a={},k=function(o,i,u){if(!i||i.length===0)return o();const c=document.getElementsByTagName("link");return Promise.all(i.map(e=>{if(e=m(e),e in a)return;a[e]=!0;const n=e.endsWith(".css"),f=n?'[rel="stylesheet"]':"";if(!!u)for(let r=c.length-1;r>=0;r--){const s=c[r];if(s.href===e&&(!n||s.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${f}`))return;const t=document.createElement("link");if(t.rel=n?"stylesheet":h,n||(t.as="script",t.crossOrigin=""),t.href=e,document.head.appendChild(t),n)return new Promise((r,s)=>{t.addEventListener("load",r),t.addEventListener("error",()=>s(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o())};export{k as _};
