import{S as D,i as V,s as P,C as q,D as b,m as d,h as c,n as h,b as _,E as g,B as k,a as I,k as v,q as T,P as Z,c as M,l as p,r as B,f as w,t as E,d as C,u as L,o as R,w as H,x as N,y as S,L as z,R as A,z as O,g as $}from"../../chunks/index-5e114e43.js";import{a as j}from"../../chunks/index-007e37a3.js";function F(l){let t,i;return{c(){t=q("svg"),i=q("path"),this.h()},l(a){t=b(a,"svg",{xmlns:!0,height:!0,width:!0,viewBox:!0});var n=d(t);i=b(n,"path",{d:!0}),d(i).forEach(c),n.forEach(c),this.h()},h(){h(i,"d","m24.3 33 3.2-3.25-3.45-3.5h8.55V21.7h-8.55l3.45-3.45L24.3 15l-9 9ZM24 45.05q-4.35 0-8.2-1.625-3.85-1.625-6.725-4.5Q6.2 36.05 4.575 32.2 2.95 28.35 2.95 24t1.625-8.2q1.625-3.85 4.5-6.725Q11.95 6.2 15.8 4.55q3.85-1.65 8.15-1.65 4.4 0 8.275 1.65t6.725 4.525q2.85 2.875 4.5 6.725 1.65 3.85 1.65 8.25 0 4.3-1.65 8.15-1.65 3.85-4.525 6.725-2.875 2.875-6.725 4.5-3.85 1.625-8.2 1.625Zm0-4.55q6.85 0 11.675-4.825Q40.5 30.85 40.5 24q0-6.85-4.825-11.675Q30.85 7.5 24 7.5q-6.85 0-11.675 4.825Q7.5 17.15 7.5 24q0 6.85 4.825 11.675Q17.15 40.5 24 40.5ZM24 24Z"),h(t,"xmlns","http://www.w3.org/2000/svg"),h(t,"height",l[1]),h(t,"width",l[0]),h(t,"viewBox","0 0 48 48")},m(a,n){_(a,t,n),g(t,i)},p(a,[n]){n&2&&h(t,"height",a[1]),n&1&&h(t,"width",a[0])},i:k,o:k,d(a){a&&c(t)}}}function G(l,t,i){let{width:a=40}=t,{height:n=40}=t;return l.$$set=r=>{"width"in r&&i(0,a=r.width),"height"in r&&i(1,n=r.height)},[a,n]}class J extends D{constructor(t){super(),V(this,t,G,F,P,{width:0,height:1})}}function Q(l){let t,i,a,n,r,f;return n=new J({}),{c(){t=v("div"),i=v("div"),a=v("div"),H(n.$$.fragment),this.h()},l(e){t=p(e,"DIV",{class:!0});var s=d(t);i=p(s,"DIV",{class:!0});var o=d(i);a=p(o,"DIV",{class:!0});var u=d(a);N(n.$$.fragment,u),u.forEach(c),o.forEach(c),s.forEach(c),this.h()},h(){h(a,"class","rotate-90 md:rotate-0 w-fit"),h(i,"class","animate-pulse-bounce-up md:animate-pulse-bounce-left w-fit"),h(t,"class","absolute fill-neutral-700 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:top-1/2 md:-translate-y-1/2")},m(e,s){_(e,t,s),g(t,i),g(i,a),S(n,a,null),f=!0},i(e){f||(w(n.$$.fragment,e),r||z(()=>{r=A(i,j,{duration:300}),r.start()}),f=!0)},o(e){E(n.$$.fragment,e),f=!1},d(e){e&&c(t),O(n)}}}function K(l){let t,i,a,n,r,f,e=l[1]&&Q();return{c(){t=I(),e&&e.c(),i=I(),a=v("div"),n=v("h1"),r=T(l[0]),this.h()},l(s){Z("svelte-1akmbmz",document.head).forEach(c),t=M(s),e&&e.l(s),i=M(s),a=p(s,"DIV",{class:!0});var u=d(a);n=p(u,"H1",{class:!0});var m=d(n);r=B(m,l[0]),m.forEach(c),u.forEach(c),this.h()},h(){document.title="Reimnop - Home",h(n,"class","text-7xl md:text-9xl tracking-widest font-incosolata duration-300 hover:scale-110 animate-pulse uppercase"),h(a,"class","h-full grid place-items-center")},m(s,o){_(s,t,o),e&&e.m(s,o),_(s,i,o),_(s,a,o),g(a,n),g(n,r),f=!0},p(s,[o]){s[1]?e?o&2&&w(e,1):(e=Q(),e.c(),w(e,1),e.m(i.parentNode,i)):e&&($(),E(e,1,1,()=>{e=null}),C()),(!f||o&1)&&L(r,s[0])},i(s){f||(w(e),f=!0)},o(s){E(e),f=!1},d(s){s&&c(t),e&&e.d(s),s&&c(i),s&&c(a)}}}const x="REIMNOP",y="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";function U(l){return new Promise(t=>setTimeout(t,l))}function W(l,t,i){let a="",n=!1;R(async()=>{await r()});async function r(){await f(),i(1,n=!0)}async function f(){const e=x.length;for(let s=0;s<e;s++)for(let o=0;o<5;o++){let u=x.substring(0,s);for(let m=s;m<e;m++)u+=y[Math.floor(Math.random()*y.length)];i(0,a=u),await U(60)}i(0,a=x)}return[a,n]}class tt extends D{constructor(t){super(),V(this,t,W,K,P,{})}}export{tt as default};
