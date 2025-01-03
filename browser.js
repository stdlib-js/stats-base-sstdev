// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var s=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,u=String.prototype.replace,p=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function v(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":s(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=u.call(n,w,"$1e"),n=u.call(n,b,"e"),n=u.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=u.call(n,p,"e+0$1"),n=u.call(n,d,"e-0$1"),r.alternate&&(n=u.call(n,g,"$1."),n=u.call(n,h,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===f.call(r.specifier)?f.call(n):l.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var _=String.fromCharCode,S=Array.isArray;function E(r){return r!=r}function x(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,a,o,s,l,f,u,p,d,g,h;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",l=1,f=0;f<r.length;f++)if("string"==typeof(n=r[f]))s+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(a=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(o)?String(n.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,d=n.width,g=n.padRight,h=void 0,(h=d-p.length)<0?p:p=g?p+m(h):m(h)+p)),s+=n.arg||"",l+=1}return s}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,n,i;for(t=[],i=0,n=F.exec(r);n;)(e=r.slice(i,F.lastIndex-n[0].length)).length&&t.push(e),t.push(j(n)),i=F.lastIndex,n=F.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function T(r){var e,t;if("string"!=typeof r)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[A(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return k.apply(null,e)}var I=Object.prototype,V=I.toString,$=I.__defineGetter__,O=I.__defineSetter__,C=I.__lookupGetter__,N=I.__lookupSetter__,P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(r,e)||N.call(r,e)?(n=r.__proto__,r.__proto__=I,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,t.get),o&&O&&O.call(r,e,t.set),r};function R(r,e,t){P(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var M="function"==typeof Math.fround?Math.fround:null,Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),G=Object.prototype.toString,W=Object.prototype.hasOwnProperty,L="function"==typeof Symbol?Symbol:void 0,U="function"==typeof L?L.toStringTag:"",X=Z&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return G.call(r);t=r[U],a=U,e=null!=(i=r)&&W.call(i,a);try{r[U]=void 0}catch(e){return G.call(r)}return n=G.call(r),e?r[U]=t:delete r[U],n}:function(r){return G.call(r)},q="function"==typeof Float32Array,z=Number.POSITIVE_INFINITY,Y="function"==typeof Float32Array?Float32Array:null,B="function"==typeof Float32Array?Float32Array:void 0,D=new(function(){var r,e,t;if("function"!=typeof Y)return!1;try{e=new Y([1,3.14,-3.14,5e40]),t=e,r=(q&&t instanceof Float32Array||"[object Float32Array]"===X(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===z}catch(e){r=!1}return r}()?B:function(){throw new Error("not implemented")})(1),H="function"==typeof M?M:function(r){return D[0]=r,D[0]},J=Math.floor,K=128;function Q(r,e,t,n){var i,a,o,c,s,l,f,u,p,d,g,h,y;if(r<=0)return 0;if(1===r||0===t)return e[n];if(i=n,r<8){for(g=0,y=0;y<r;y++)g=H(g+e[i]),i+=t;return g}if(r<=K){for(a=e[i],o=e[i+t],c=e[i+2*t],s=e[i+3*t],l=e[i+4*t],f=e[i+5*t],u=e[i+6*t],p=e[i+7*t],i+=8*t,d=r%8,y=8;y<r-d;y+=8)a=H(a+e[i]),o=H(o+e[i+t]),c=H(c+e[i+2*t]),s=H(s+e[i+3*t]),l=H(l+e[i+4*t]),f=H(f+e[i+5*t]),u=H(u+e[i+6*t]),p=H(p+e[i+7*t]),i+=8*t;for(g=H(H(H(a+o)+H(c+s))+H(H(l+f)+H(u+p)));y<r;y++)g=H(g+e[i]),i+=t;return g}return h=J(r/2),H(Q(h-=h%8,e,t,i)+Q(r-h,e,t,i+h*t))}function rr(r,e,t){var n,i,a;if(r<=0)return 0;if(1===r||0===t)return e[0];if(n=t<0?(1-r)*t:0,r<8){for(i=0,a=0;a<r;a++)i=H(i+e[n]),n+=t;return i}return Q(r,e,t,n)}function er(r,e,t,n){var i,a,o,c,s,l,f;if(l=r-e,r<=0||l<=0)return NaN;if(1===r||0===n)return 0;for(i=rr(r,t,n)/r,a=n<0?(1-r)*n:0,o=0,c=0,f=0;f<r;f++)s=H(t[a]-i),o=H(o+H(s*s)),c=H(c+s),a+=n;return H(H(o/l)-H(H(c/r)*H(c/l)))}function tr(r,e,t,n,i){var a,o,c,s,l,f,u;if(f=r-e,r<=0||f<=0)return NaN;if(1===r||0===n)return 0;for(a=Q(r,t,n,i)/r,o=i,c=0,s=0,u=0;u<r;u++)l=H(t[o]-a),c=H(c+H(l*l)),s=H(s+l),o+=n;return H(H(c/f)-H(H(s/r)*H(s/f)))}R(rr,"ndarray",Q),R(er,"ndarray",tr);var nr=Math.sqrt;function ir(r,e,t,n){return H(nr(er(r,e,t,n)))}function ar(r,e,t,n,i){return H(nr(tr(r,e,t,n,i)))}function or(r,e,t,n){return ir(r,e,t,n)}return R(ir,"ndarray",ar),R(or,"ndarray",(function(r,e,t,n,i){return ar(r,e,t,n,i)})),or},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).sstdev=e();
//# sourceMappingURL=browser.js.map