// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("path")):"function"==typeof define&&define.amd?define(["path"],t):(r="undefined"!=typeof globalThis?globalThis:r||self).sstdev=t(r.require$$0)}(this,(function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,n){var e,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,n.get),p&&a&&a.call(r,t,n.set),r};var l=n;function y(r,t,n){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var p=/./;function s(r){return"boolean"==typeof r}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return b&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var j=Object.prototype.hasOwnProperty;var _,m="function"==typeof Symbol?Symbol.toStringTag:"";_=v()?function(r){var t,n,e,o,u;if(null==r)return d.call(r);n=r[m],u=m,t=null!=(o=r)&&j.call(o,u);try{r[m]=void 0}catch(t){return d.call(r)}return e=d.call(r),t?r[m]=n:delete r[m],e}:function(r){return d.call(r)};var g=_,w=Boolean.prototype.toString;var h=v();function O(r){return"object"==typeof r&&(r instanceof Boolean||(h?function(r){try{return w.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===g(r)))}function E(r){return s(r)||O(r)}function A(){return new Function("return this;")()}y(E,"isPrimitive",s),y(E,"isObject",O);var S="object"==typeof self?self:null,F="object"==typeof window?window:null,P="object"==typeof global?global:null;var T=function(r){if(arguments.length){if(!s(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return A()}if(S)return S;if(F)return F;if(P)return P;throw new Error("unexpected error. Unable to resolve global object.")}(),N=T.document&&T.document.childNodes,q=Int8Array;function B(){return/^\s*function\s*([^(]*)/i}var I,M=/^\s*function\s*([^(]*)/i;y(B,"REGEXP",M),I=Array.isArray?Array.isArray:function(r){return"[object Array]"===g(r)};var x=I;function V(r){return null!==r&&"object"==typeof r}var k=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!x(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(V);function C(r){var t,n,e,o;if(("Object"===(n=g(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=M.exec(e.toString()))return t[1]}return V(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}y(V,"isObjectLikeArray",k);var G="function"==typeof p||"object"==typeof q||"function"==typeof N?function(r){return C(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?C(r).toLowerCase():t};var L,R,$=Object.getPrototypeOf;R=Object.getPrototypeOf,L="function"===G(R)?$:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===g(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var D=L;function J(r){return null==r?null:(r=Object(r),D(r))}function U(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===g(r))return!0;r=J(r)}return!1}function X(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return U(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}var Y="function"==typeof Math.fround?Math.fround:null,z="function"==typeof Float32Array;var H=Number.POSITIVE_INFINITY,K="function"==typeof Float32Array?Float32Array:null;var Q,W="function"==typeof Float32Array?Float32Array:void 0;Q=function(){var r,t;if("function"!=typeof K)return!1;try{r=function(r){return z&&r instanceof Float32Array||"[object Float32Array]"===g(r)}(t=new K([1,3.14,-3.14,5e40]))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===H}catch(t){r=!1}return r}()?W:function(){throw new Error("not implemented")};var Z=new Q(1);var rr="function"==typeof Y?Y:function(r){return Z[0]=r,Z[0]},tr=Math.floor;function nr(r,t,n,e){var o,u,i,a,f,c,l,y,p,s,b,v,d;if(r<=0)return 0;if(1===r||0===n)return t[e];if(o=e,r<8){for(b=0,d=0;d<r;d++)b=rr(b+t[o]),o+=n;return b}if(r<=128){for(u=t[o],i=t[o+n],a=t[o+2*n],f=t[o+3*n],c=t[o+4*n],l=t[o+5*n],y=t[o+6*n],p=t[o+7*n],o+=8*n,s=r%8,d=8;d<r-s;d+=8)u=rr(u+t[o]),i=rr(i+t[o+n]),a=rr(a+t[o+2*n]),f=rr(f+t[o+3*n]),c=rr(c+t[o+4*n]),l=rr(l+t[o+5*n]),y=rr(y+t[o+6*n]),p=rr(p+t[o+7*n]),o+=8*n;for(b=rr(rr(rr(u+i)+rr(a+f))+rr(rr(c+l)+rr(y+p)));d<r;d++)b=rr(b+t[o]),o+=n;return b}return v=tr(r/2),rr(nr(v-=v%8,t,n,o)+nr(r-v,t,n,o+v*n))}function er(r,t,n){var e,o,u;if(r<=0)return 0;if(1===r||0===n)return t[0];if(e=n<0?(1-r)*n:0,r<8){for(o=0,u=0;u<r;u++)o=rr(o+t[e]),e+=n;return o}return nr(r,t,n,e)}y(er,"ndarray",nr);var or,ur=X((0,r.join)(__dirname,"./native.js")),ir=or=U(ur)?er:ur;const{ndarray:ar}=or;function fr(r,t,n,e){var o,u,i,a,f,c,l;if(c=r-t,r<=0||c<=0)return NaN;if(1===r||0===e)return 0;for(o=ir(r,n,e)/r,u=e<0?(1-r)*e:0,i=0,a=0,l=0;l<r;l++)f=rr(n[u]-o),i=rr(i+rr(f*f)),a=rr(a+f),u+=e;return rr(rr(i/c)-rr(rr(a/r)*rr(a/c)))}y(fr,"ndarray",(function(r,t,n,e,o){var u,i,a,f,c,l,y;if(l=r-t,r<=0||l<=0)return NaN;if(1===r||0===e)return 0;for(u=ar(r,n,e,o)/r,i=o,a=0,f=0,y=0;y<r;y++)c=rr(n[i]-u),a=rr(a+rr(c*c)),f=rr(f+c),i+=e;return rr(rr(a/l)-rr(rr(f/r)*rr(f/l)))}));var cr,lr=X((0,r.join)(__dirname,"./native.js")),yr=cr=lr instanceof Error?fr:lr;const{ndarray:pr}=cr;var sr=Math.sqrt;function br(r,t,n,e){return rr(sr(yr(r,t,n,e)))}y(br,"ndarray",(function(r,t,n,e,o){return rr(sr(pr(r,t,n,e,o)))}));var vr,dr=X((0,r.join)(__dirname,"./native.js")),jr=vr=dr instanceof Error?br:dr;const{ndarray:_r}=vr;function mr(r,t,n,e){return jr(r,t,n,e)}return y(mr,"ndarray",(function(r,t,n,e,o){return _r(r,t,n,e,o)})),mr}));
//# sourceMappingURL=index.js.map
