function $(){}const Y=t=>t;function pt(t,e){for(const n in e)t[n]=e[n];return t}function Z(t){return t()}function U(){return Object.create(null)}function N(t){t.forEach(Z)}function q(t){return typeof t=="function"}function Wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let z;function Bt(t,e){return z||(z=document.createElement("a")),z.href=e,t===z.href}function yt(t){return Object.keys(t).length===0}function gt(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ht(t,e,n){t.$$.on_destroy.push(gt(e,n))}function Ft(t,e,n,i){if(t){const r=tt(t,e,n,i);return t[0](r)}}function tt(t,e,n,i){return t[1]&&i?pt(n.ctx.slice(),t[1](i(e))):n.ctx}function It(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)c[o]=e.dirty[o]|r[o];return c}return e.dirty|r}return e.dirty}function Gt(t,e,n,i,r,c){if(r){const s=tt(e,n,i,c);t.p(s,r)}}function Jt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const et=typeof window<"u";let nt=et?()=>window.performance.now():()=>Date.now(),G=et?t=>requestAnimationFrame(t):$;const E=new Set;function it(t){E.forEach(e=>{e.c(t)||(E.delete(e),e.f())}),E.size!==0&&G(it)}function rt(t){let e;return E.size===0&&G(it),{promise:new Promise(n=>{E.add(e={c:t,f:n})}),abort(){E.delete(e)}}}let L=!1;function bt(){L=!0}function xt(){L=!1}function $t(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function wt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const d=e[u];d.claim_order!==void 0&&l.push(d)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,d=(r>0&&e[n[r]].claim_order<=u?r+1:$t(1,r,h=>e[n[h]].claim_order,u))-1;i[l]=n[d]+1;const a=d+1;n[a]=l,r=Math.max(a,r)}const c=[],s=[];let o=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(c.push(e[l-1]);o>=l;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);c.reverse(),s.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<s.length;l++){for(;u<c.length&&s[l].claim_order>=c[u].claim_order;)u++;const d=u<c.length?c[u]:null;t.insertBefore(s[l],d)}}function st(t,e){t.appendChild(e)}function ot(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function vt(t){const e=K("style");return Et(ot(t),e),e.sheet}function Et(t,e){return st(t.head||t,e),e.sheet}function Nt(t,e){if(L){for(wt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Kt(t,e,n){L&&!n?Nt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function J(t){t.parentNode&&t.parentNode.removeChild(t)}function Qt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function K(t){return document.createElement(t)}function At(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Q(t){return document.createTextNode(t)}function Ut(){return Q(" ")}function Vt(){return Q("")}function V(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Xt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function St(t){return Array.from(t.childNodes)}function kt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ct(t,e,n,i,r=!1){kt(t);const c=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function lt(t,e,n,i){return ct(t,r=>r.nodeName===e,r=>{const c=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||c.push(o.name)}c.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Yt(t,e,n){return lt(t,e,n,K)}function Zt(t,e,n){return lt(t,e,n,At)}function Ct(t,e){return ct(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Q(e),!0)}function te(t){return Ct(t," ")}function ee(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ne(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let D;function jt(){if(D===void 0){D=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{D=!0}}return D}function ie(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=K("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=jt();let c;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=V(window,"message",s=>{s.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=V(i.contentWindow,"resize",e)}),st(t,i),()=>{(r||c&&i.contentWindow)&&c(),J(i)}}function re(t,e,n){t.classList[n?"add":"remove"](e)}function Mt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function se(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const c=r.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(r)):c===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function oe(t,e){return new t(e)}const P=new Map;let R=0;function zt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Dt(t,e){const n={stylesheet:vt(e),rules:{}};return P.set(t,n),n}function B(t,e,n,i,r,c,s,o=0){const l=16.666/i;let u=`{
`;for(let p=0;p<=1;p+=l){const y=e+(n-e)*c(p);u+=p*100+`%{${s(y,1-y)}}
`}const d=u+`100% {${s(n,1-n)}}
}`,a=`__svelte_${zt(d)}_${o}`,h=ot(t),{stylesheet:f,rules:_}=P.get(h)||Dt(h,t);_[a]||(_[a]=!0,f.insertRule(`@keyframes ${a} ${d}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${r}ms 1 both`,R+=1,a}function H(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),R-=r,R||Tt())}function Tt(){G(()=>{R||(P.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&J(e)}),P.clear())})}let j;function k(t){j=t}function ut(){if(!j)throw new Error("Function called outside component initialization");return j}function ce(t){ut().$$.on_mount.push(t)}function le(t){ut().$$.after_update.push(t)}const v=[],X=[],T=[],F=[],at=Promise.resolve();let I=!1;function ft(){I||(I=!0,at.then(dt))}function ue(){return ft(),at}function M(t){T.push(t)}function ae(t){F.push(t)}const W=new Set;let w=0;function dt(){if(w!==0)return;const t=j;do{try{for(;w<v.length;){const e=v[w];w++,k(e),Ot(e.$$)}}catch(e){throw v.length=0,w=0,e}for(k(null),v.length=0,w=0;X.length;)X.pop()();for(let e=0;e<T.length;e+=1){const n=T[e];W.has(n)||(W.add(n),n())}T.length=0}while(v.length);for(;F.length;)F.pop()();I=!1,W.clear(),k(t)}function Ot(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}let S;function _t(){return S||(S=Promise.resolve(),S.then(()=>{S=null})),S}function C(t,e,n){t.dispatchEvent(Mt(`${e?"intro":"outro"}${n}`))}const O=new Set;let g;function fe(){g={r:0,c:[],p:g}}function de(){g.r||N(g.c),g=g.p}function Pt(t,e){t&&t.i&&(O.delete(t),t.i(e))}function _e(t,e,n,i){if(t&&t.o){if(O.has(t))return;O.add(t),g.c.push(()=>{O.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ht={duration:0};function he(t,e,n){const i={direction:"in"};let r=e(t,n,i),c=!1,s,o,l=0;function u(){s&&H(t,s)}function d(){const{delay:h=0,duration:f=300,easing:_=Y,tick:m=$,css:p}=r||ht;p&&(s=B(t,0,1,f,h,_,p,l++)),m(0,1);const y=nt()+h,A=y+f;o&&o.abort(),c=!0,M(()=>C(t,!0,"start")),o=rt(b=>{if(c){if(b>=A)return m(1,0),C(t,!0,"end"),u(),c=!1;if(b>=y){const x=_((b-y)/f);m(x,1-x)}}return c})}let a=!1;return{start(){a||(a=!0,H(t),q(r)?(r=r(i),_t().then(d)):d())},invalidate(){a=!1},end(){c&&(u(),c=!1)}}}function me(t,e,n,i){const r={direction:"both"};let c=e(t,n,r),s=i?0:1,o=null,l=null,u=null;function d(){u&&H(t,u)}function a(f,_){const m=f.b-s;return _*=Math.abs(m),{a:s,b:f.b,d:m,duration:_,start:f.start,end:f.start+_,group:f.group}}function h(f){const{delay:_=0,duration:m=300,easing:p=Y,tick:y=$,css:A}=c||ht,b={start:nt()+_,b:f};f||(b.group=g,g.r+=1),o||l?l=b:(A&&(d(),u=B(t,s,f,m,_,p,A)),f&&y(0,1),o=a(b,m),M(()=>C(t,f,"start")),rt(x=>{if(l&&x>l.start&&(o=a(l,m),l=null,C(t,o.b,"start"),A&&(d(),u=B(t,s,o.b,o.duration,0,p,c.css))),o){if(x>=o.end)y(s=o.b,1-s),C(t,o.b,"end"),l||(o.b?d():--o.group.r||N(o.group.c)),o=null;else if(x>=o.start){const mt=x-o.start;s=o.a+o.d*p(mt/o.duration),y(s,1-s)}}return!!(o||l)}))}return{run(f){q(c)?_t().then(()=>{c=c(r),h(f)}):h(f)},end(){d(),o=l=null}}}function pe(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function ye(t){t&&t.c()}function ge(t,e){t&&t.l(e)}function Rt(t,e,n,i){const{fragment:r,after_update:c}=t.$$;r&&r.m(e,n),i||M(()=>{const s=t.$$.on_mount.map(Z).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...s):N(s),t.$$.on_mount=[]}),c.forEach(M)}function qt(t,e){const n=t.$$;n.fragment!==null&&(N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Lt(t,e){t.$$.dirty[0]===-1&&(v.push(t),ft(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function be(t,e,n,i,r,c,s,o=[-1]){const l=j;k(t);const u=t.$$={fragment:null,ctx:[],props:c,update:$,not_equal:r,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:U(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};s&&s(u.root);let d=!1;if(u.ctx=n?n(t,e.props||{},(a,h,...f)=>{const _=f.length?f[0]:h;return u.ctx&&r(u.ctx[a],u.ctx[a]=_)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](_),d&&Lt(t,a)),h}):[],u.update(),d=!0,N(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){bt();const a=St(e.target);u.fragment&&u.fragment.l(a),a.forEach(J)}else u.fragment&&u.fragment.c();e.intro&&Pt(t.$$.fragment),Rt(t,e.target,e.anchor,e.customElement),xt(),dt()}k(l)}class xe{$destroy(){qt(this,1),this.$destroy=$}$on(e,n){if(!q(n))return $;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!yt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ue as A,$ as B,At as C,Zt as D,Nt as E,Ft as F,re as G,Gt as H,Jt as I,It as J,Ht as K,M as L,ie as M,X as N,pe as O,se as P,ae as Q,he as R,xe as S,Y as T,V as U,N as V,Bt as W,me as X,Qt as Y,Ut as a,Kt as b,te as c,de as d,Vt as e,Pt as f,fe as g,J as h,be as i,le as j,K as k,Yt as l,St as m,Xt as n,ce as o,ne as p,Q as q,Ct as r,Wt as s,_e as t,ee as u,oe as v,ye as w,ge as x,Rt as y,qt as z};