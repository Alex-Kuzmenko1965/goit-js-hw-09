function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire0541;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire0541=r);var i=r("7Y9D8");form=document.querySelector("form"),console.log(form),form.addEventListener("submit",(function(t){t.preventDefault(),l=t.currentTarget.elements.delay.value,u=t.currentTarget.elements.step.value,s=t.currentTarget.elements.amount.value;for(let t=1;t<=s;t+=1){const n=t;l=Number(l)+Number(u),a(n,l).then((({position:t,delay:n})=>{e(i).Notify.success(` Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(` Rejected promise ${t} in ${n}ms`)}))}}));let l=0,u=0,s=0;function a(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}
//# sourceMappingURL=03-promises.2fdd0a15.js.map
