"use strict";var b=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var j=b(function(K,P){
var p=require('@stdlib/math-base-assert-is-nan/dist');function C(r,e,n,x,t,g,l){var c,u,o,f,s,v,i,a,q,m;for(c=e.data,u=t.data,o=e.accessors[0],f=t.accessors[0],i=x,a=l,m=0;m<r&&f(u,a)!==0;m++)i+=n,a+=g;if(m===r)return NaN;if(v=o(c,i),p(v))return v;for(s=v,m+=1,m;m<r;m++)if(i+=n,a+=g,!f(u,a)){if(q=o(c,i),p(q))return q;q<v?v=q:q>s&&(s=q)}return s-v}P.exports=C
});var y=b(function(L,h){
var O=require('@stdlib/math-base-assert-is-nan/dist'),R=require('@stdlib/array-base-arraylike2object/dist'),D=j();function E(r,e,n,x,t,g,l){var c,u,o,f,s,v,i,a;if(r<=0)return NaN;if(s=R(e),v=R(t),s.accessorProtocol||v.accessorProtocol)return D(r,s,n,x,v,g,l);for(o=x,f=l,a=0;a<r&&t[f]!==0;a++)o+=n,f+=g;if(a===r)return NaN;if(u=e[o],O(u))return u;for(c=u,a+=1,a;a<r;a++)if(o+=n,f+=g,!t[f]){if(i=e[o],O(i))return i;i<u?u=i:i>c&&(c=i)}return c-u}h.exports=E
});var A=b(function(Q,z){
var w=require('@stdlib/strided-base-stride2offset/dist'),F=y();function G(r,e,n,x,t){return F(r,e,n,w(r,n),x,t,w(r,t))}z.exports=G
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=A(),I=y();H(B,"ndarray",I);module.exports=B;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
