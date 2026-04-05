"use strict";var b=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var j=b(function(K,P){
var p=require('@stdlib/math-base-assert-is-nan/dist');function C(r,a,v,x,t,g,l){var c,n,o,f,s,u,i,e,q,m;for(c=a.data,n=t.data,o=a.accessors[0],f=t.accessors[0],i=x,e=l,m=0;m<r&&f(n,e)!==0;m++)i+=v,e+=g;if(m===r)return NaN;if(u=o(c,i),p(u))return u;for(s=u,m+=1,m;m<r;m++)if(i+=v,e+=g,!f(n,e)){if(q=o(c,i),p(q))return q;q<u?u=q:q>s&&(s=q)}return s-u}P.exports=C
});var y=b(function(L,h){
var O=require('@stdlib/math-base-assert-is-nan/dist'),R=require('@stdlib/array-base-arraylike2object/dist'),D=j();function E(r,a,v,x,t,g,l){var c,n,o,f,s,u,i,e;if(r<=0)return NaN;if(s=R(a),u=R(t),s.accessorProtocol||u.accessorProtocol)return D(r,s,v,x,u,g,l);for(o=x,f=l,e=0;e<r&&t[f]!==0;e++)o+=v,f+=g;if(e===r)return NaN;if(n=a[o],O(n))return n;for(c=n,e+=1,e;e<r;e++)if(o+=v,f+=g,!t[f]){if(i=a[o],O(i))return i;i<n?n=i:i>c&&(c=i)}return c-n}h.exports=E
});var A=b(function(Q,z){
var w=require('@stdlib/strided-base-stride2offset/dist'),F=y();function G(r,a,v,x,t){return F(r,a,v,w(r,v),x,t,w(r,t))}z.exports=G
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=A(),I=y();H(B,"ndarray",I);module.exports=B;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
