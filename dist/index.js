"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=i(function(h,u){
var x=require('@stdlib/stats-strided-sstdevpn/dist');function f(e,r,s,t){return x(e,r,s,t)}u.exports=f
});var d=i(function(k,n){
var j=require('@stdlib/stats-strided-sstdevpn/dist').ndarray;function m(e,r,s,t,y){return j(e,r,s,t,y)}n.exports=m
});var p=i(function(w,o){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),R=d();l(q,"ndarray",R);o.exports=q
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=p(),a,c=E(_(__dirname,"./native.js"));O(c)?a=b:a=c;module.exports=a;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
