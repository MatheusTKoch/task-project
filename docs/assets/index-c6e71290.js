(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function wl(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const ye={},ys=[],yt=()=>{},Km=()=>!1,zm=/^on[^a-z]/,co=t=>zm.test(t),El=t=>t.startsWith("onUpdate:"),Te=Object.assign,Il=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Gm=Object.prototype.hasOwnProperty,se=(t,e)=>Gm.call(t,e),$=Array.isArray,bs=t=>qr(t)==="[object Map]",Vs=t=>qr(t)==="[object Set]",Zc=t=>qr(t)==="[object Date]",q=t=>typeof t=="function",Re=t=>typeof t=="string",Ar=t=>typeof t=="symbol",he=t=>t!==null&&typeof t=="object",Of=t=>he(t)&&q(t.then)&&q(t.catch),Nf=Object.prototype.toString,qr=t=>Nf.call(t),qm=t=>qr(t).slice(8,-1),xf=t=>qr(t)==="[object Object]",Cl=t=>Re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,bi=wl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),uo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ym=/-(\w)/g,Mt=uo(t=>t.replace(Ym,(e,n)=>n?n.toUpperCase():"")),Qm=/\B([A-Z])/g,Zn=uo(t=>t.replace(Qm,"-$1").toLowerCase()),fo=uo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Vo=uo(t=>t?`on${fo(t)}`:""),Pr=(t,e)=>!Object.is(t,e),wi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Pi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Oi=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Jm=t=>{const e=Re(t)?Number(t):NaN;return isNaN(e)?t:e};let eu;const ba=()=>eu||(eu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Sl(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Re(s)?t_(s):Sl(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Re(t))return t;if(he(t))return t}}const Xm=/;(?![^(]*\))/g,Zm=/:([^]+)/,e_=/\/\*[^]*?\*\//g;function t_(t){const e={};return t.replace(e_,"").split(Xm).forEach(n=>{if(n){const s=n.split(Zm);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Or(t){let e="";if(Re(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const s=Or(t[n]);s&&(e+=s+" ")}else if(he(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const n_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",s_=wl(n_);function Mf(t){return!!t||t===""}function r_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Wn(t[s],e[s]);return n}function Wn(t,e){if(t===e)return!0;let n=Zc(t),s=Zc(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Ar(t),s=Ar(e),n||s)return t===e;if(n=$(t),s=$(e),n||s)return n&&s?r_(t,e):!1;if(n=he(t),s=he(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Wn(t[o],e[o]))return!1}}return String(t)===String(e)}function Tl(t,e){return t.findIndex(n=>Wn(n,e))}const Ni=t=>Re(t)?t:t==null?"":$(t)||he(t)&&(t.toString===Nf||!q(t.toString))?JSON.stringify(t,Df,2):String(t),Df=(t,e)=>e&&e.__v_isRef?Df(t,e.value):bs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Vs(e)?{[`Set(${e.size})`]:[...e.values()]}:he(e)&&!$(e)&&!xf(e)?String(e):e;let nt;class Lf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=nt,!e&&nt&&(this.index=(nt.scopes||(nt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=nt;try{return nt=this,e()}finally{nt=n}}}on(){nt=this}off(){nt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function i_(t){return new Lf(t)}function o_(t,e=nt){e&&e.active&&e.effects.push(t)}function Ff(){return nt}function a_(t){nt&&nt.cleanups.push(t)}const Rl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Uf=t=>(t.w&bn)>0,$f=t=>(t.n&bn)>0,l_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=bn},c_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Uf(r)&&!$f(r)?r.delete(t):e[n++]=r,r.w&=~bn,r.n&=~bn}e.length=n}},xi=new WeakMap;let pr=0,bn=1;const wa=30;let gt;const jn=Symbol(""),Ea=Symbol("");class kl{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,o_(this,s)}run(){if(!this.active)return this.fn();let e=gt,n=hn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=gt,gt=this,hn=!0,bn=1<<++pr,pr<=wa?l_(this):tu(this),this.fn()}finally{pr<=wa&&c_(this),bn=1<<--pr,gt=this.parent,hn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){gt===this?this.deferStop=!0:this.active&&(tu(this),this.onStop&&this.onStop(),this.active=!1)}}function tu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let hn=!0;const jf=[];function Ks(){jf.push(hn),hn=!1}function zs(){const t=jf.pop();hn=t===void 0?!0:t}function Ze(t,e,n){if(hn&&gt){let s=xi.get(t);s||xi.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Rl()),Hf(r)}}function Hf(t,e){let n=!1;pr<=wa?$f(t)||(t.n|=bn,n=!Uf(t)):n=!t.has(gt),n&&(t.add(gt),gt.deps.push(t))}function Kt(t,e,n,s,r,i){const o=xi.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?Cl(n)&&a.push(o.get("length")):(a.push(o.get(jn)),bs(t)&&a.push(o.get(Ea)));break;case"delete":$(t)||(a.push(o.get(jn)),bs(t)&&a.push(o.get(Ea)));break;case"set":bs(t)&&a.push(o.get(jn));break}if(a.length===1)a[0]&&Ia(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ia(Rl(l))}}function Ia(t,e){const n=$(t)?t:[...t];for(const s of n)s.computed&&nu(s);for(const s of n)s.computed||nu(s)}function nu(t,e){(t!==gt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function u_(t,e){var n;return(n=xi.get(t))==null?void 0:n.get(e)}const d_=wl("__proto__,__v_isRef,__isVue"),Bf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ar)),f_=Al(),h_=Al(!1,!0),p_=Al(!0),su=g_();function g_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=re(this);for(let i=0,o=this.length;i<o;i++)Ze(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(re)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ks();const s=re(this)[e].apply(this,n);return zs(),s}}),t}function m_(t){const e=re(this);return Ze(e,"has",t),e.hasOwnProperty(t)}function Al(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?N_:Gf:e?zf:Kf).get(s))return s;const o=$(s);if(!t){if(o&&se(su,r))return Reflect.get(su,r,i);if(r==="hasOwnProperty")return m_}const a=Reflect.get(s,r,i);return(Ar(r)?Bf.has(r):d_(r))||(t||Ze(s,"get",r),e)?a:Oe(a)?o&&Cl(r)?a:a.value:he(a)?t?po(a):Gs(a):a}}const __=Wf(),v_=Wf(!0);function Wf(t=!1){return function(n,s,r,i){let o=n[s];if(Ns(o)&&Oe(o)&&!Oe(r))return!1;if(!t&&(!Mi(r)&&!Ns(r)&&(o=re(o),r=re(r)),!$(n)&&Oe(o)&&!Oe(r)))return o.value=r,!0;const a=$(n)&&Cl(s)?Number(s)<n.length:se(n,s),l=Reflect.set(n,s,r,i);return n===re(i)&&(a?Pr(r,o)&&Kt(n,"set",s,r):Kt(n,"add",s,r)),l}}function y_(t,e){const n=se(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Kt(t,"delete",e,void 0),s}function b_(t,e){const n=Reflect.has(t,e);return(!Ar(e)||!Bf.has(e))&&Ze(t,"has",e),n}function w_(t){return Ze(t,"iterate",$(t)?"length":jn),Reflect.ownKeys(t)}const Vf={get:f_,set:__,deleteProperty:y_,has:b_,ownKeys:w_},E_={get:p_,set(t,e){return!0},deleteProperty(t,e){return!0}},I_=Te({},Vf,{get:h_,set:v_}),Pl=t=>t,ho=t=>Reflect.getPrototypeOf(t);function ii(t,e,n=!1,s=!1){t=t.__v_raw;const r=re(t),i=re(e);n||(e!==i&&Ze(r,"get",e),Ze(r,"get",i));const{has:o}=ho(r),a=s?Pl:n?xl:Nr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function oi(t,e=!1){const n=this.__v_raw,s=re(n),r=re(t);return e||(t!==r&&Ze(s,"has",t),Ze(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function ai(t,e=!1){return t=t.__v_raw,!e&&Ze(re(t),"iterate",jn),Reflect.get(t,"size",t)}function ru(t){t=re(t);const e=re(this);return ho(e).has.call(e,t)||(e.add(t),Kt(e,"add",t,t)),this}function iu(t,e){e=re(e);const n=re(this),{has:s,get:r}=ho(n);let i=s.call(n,t);i||(t=re(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Pr(e,o)&&Kt(n,"set",t,e):Kt(n,"add",t,e),this}function ou(t){const e=re(this),{has:n,get:s}=ho(e);let r=n.call(e,t);r||(t=re(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Kt(e,"delete",t,void 0),i}function au(){const t=re(this),e=t.size!==0,n=t.clear();return e&&Kt(t,"clear",void 0,void 0),n}function li(t,e){return function(s,r){const i=this,o=i.__v_raw,a=re(o),l=e?Pl:t?xl:Nr;return!t&&Ze(a,"iterate",jn),o.forEach((c,u)=>s.call(r,l(c),l(u),i))}}function ci(t,e,n){return function(...s){const r=this.__v_raw,i=re(r),o=bs(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...s),u=n?Pl:e?xl:Nr;return!e&&Ze(i,"iterate",l?Ea:jn),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function en(t){return function(...e){return t==="delete"?!1:this}}function C_(){const t={get(i){return ii(this,i)},get size(){return ai(this)},has:oi,add:ru,set:iu,delete:ou,clear:au,forEach:li(!1,!1)},e={get(i){return ii(this,i,!1,!0)},get size(){return ai(this)},has:oi,add:ru,set:iu,delete:ou,clear:au,forEach:li(!1,!0)},n={get(i){return ii(this,i,!0)},get size(){return ai(this,!0)},has(i){return oi.call(this,i,!0)},add:en("add"),set:en("set"),delete:en("delete"),clear:en("clear"),forEach:li(!0,!1)},s={get(i){return ii(this,i,!0,!0)},get size(){return ai(this,!0)},has(i){return oi.call(this,i,!0)},add:en("add"),set:en("set"),delete:en("delete"),clear:en("clear"),forEach:li(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ci(i,!1,!1),n[i]=ci(i,!0,!1),e[i]=ci(i,!1,!0),s[i]=ci(i,!0,!0)}),[t,n,e,s]}const[S_,T_,R_,k_]=C_();function Ol(t,e){const n=e?t?k_:R_:t?T_:S_;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(se(n,r)&&r in s?n:s,r,i)}const A_={get:Ol(!1,!1)},P_={get:Ol(!1,!0)},O_={get:Ol(!0,!1)},Kf=new WeakMap,zf=new WeakMap,Gf=new WeakMap,N_=new WeakMap;function x_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function M_(t){return t.__v_skip||!Object.isExtensible(t)?0:x_(qm(t))}function Gs(t){return Ns(t)?t:Nl(t,!1,Vf,A_,Kf)}function D_(t){return Nl(t,!1,I_,P_,zf)}function po(t){return Nl(t,!0,E_,O_,Gf)}function Nl(t,e,n,s,r){if(!he(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=M_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function ws(t){return Ns(t)?ws(t.__v_raw):!!(t&&t.__v_isReactive)}function Ns(t){return!!(t&&t.__v_isReadonly)}function Mi(t){return!!(t&&t.__v_isShallow)}function qf(t){return ws(t)||Ns(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function Yf(t){return Pi(t,"__v_skip",!0),t}const Nr=t=>he(t)?Gs(t):t,xl=t=>he(t)?po(t):t;function Ml(t){hn&&gt&&(t=re(t),Hf(t.dep||(t.dep=Rl())))}function Dl(t,e){t=re(t);const n=t.dep;n&&Ia(n)}function Oe(t){return!!(t&&t.__v_isRef===!0)}function Q(t){return Jf(t,!1)}function Qf(t){return Jf(t,!0)}function Jf(t,e){return Oe(t)?t:new L_(t,e)}class L_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:Nr(e)}get value(){return Ml(this),this._value}set value(e){const n=this.__v_isShallow||Mi(e)||Ns(e);e=n?e:re(e),Pr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Nr(e),Dl(this))}}function Es(t){return Oe(t)?t.value:t}const F_={get:(t,e,n)=>Es(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Oe(r)&&!Oe(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Xf(t){return ws(t)?t:new Proxy(t,F_)}class U_{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=e(()=>Ml(this),()=>Dl(this));this._get=n,this._set=s}get value(){return this._get()}set value(e){this._set(e)}}function $_(t){return new U_(t)}class j_{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return u_(re(this._object),this._key)}}class H_{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function B_(t,e,n){return Oe(t)?t:q(t)?new H_(t):he(t)&&arguments.length>1?W_(t,e,n):Q(t)}function W_(t,e,n){const s=t[e];return Oe(s)?s:new j_(t,e,n)}class V_{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new kl(e,()=>{this._dirty||(this._dirty=!0,Dl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=re(this);return Ml(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function K_(t,e,n=!1){let s,r;const i=q(t);return i?(s=t,r=yt):(s=t.get,r=t.set),new V_(s,r,i||!r,n)}function pn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){go(i,e,n)}return r}function ct(t,e,n,s){if(q(t)){const i=pn(t,e,n,s);return i&&Of(i)&&i.catch(o=>{go(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(ct(t[i],e,n,s));return r}function go(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){pn(l,null,10,[t,o,a]);return}}z_(t,n,r,s)}function z_(t,e,n,s=!0){console.error(t)}let xr=!1,Ca=!1;const Be=[];let At=0;const Is=[];let Lt=null,Dn=0;const Zf=Promise.resolve();let Ll=null;function bt(t){const e=Ll||Zf;return t?e.then(this?t.bind(this):t):e}function G_(t){let e=At+1,n=Be.length;for(;e<n;){const s=e+n>>>1;Mr(Be[s])<t?e=s+1:n=s}return e}function Fl(t){(!Be.length||!Be.includes(t,xr&&t.allowRecurse?At+1:At))&&(t.id==null?Be.push(t):Be.splice(G_(t.id),0,t),eh())}function eh(){!xr&&!Ca&&(Ca=!0,Ll=Zf.then(nh))}function q_(t){const e=Be.indexOf(t);e>At&&Be.splice(e,1)}function Y_(t){$(t)?Is.push(...t):(!Lt||!Lt.includes(t,t.allowRecurse?Dn+1:Dn))&&Is.push(t),eh()}function lu(t,e=xr?At+1:0){for(;e<Be.length;e++){const n=Be[e];n&&n.pre&&(Be.splice(e,1),e--,n())}}function th(t){if(Is.length){const e=[...new Set(Is)];if(Is.length=0,Lt){Lt.push(...e);return}for(Lt=e,Lt.sort((n,s)=>Mr(n)-Mr(s)),Dn=0;Dn<Lt.length;Dn++)Lt[Dn]();Lt=null,Dn=0}}const Mr=t=>t.id==null?1/0:t.id,Q_=(t,e)=>{const n=Mr(t)-Mr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function nh(t){Ca=!1,xr=!0,Be.sort(Q_);const e=yt;try{for(At=0;At<Be.length;At++){const n=Be[At];n&&n.active!==!1&&pn(n,null,14)}}finally{At=0,Be.length=0,th(),xr=!1,Ll=null,(Be.length||Is.length)&&nh()}}function J_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ye;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:f}=s[u]||ye;f&&(r=n.map(p=>Re(p)?p.trim():p)),d&&(r=n.map(Oi))}let a,l=s[a=Vo(e)]||s[a=Vo(Mt(e))];!l&&i&&(l=s[a=Vo(Zn(e))]),l&&ct(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ct(c,t,6,r)}}function sh(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!q(t)){const l=c=>{const u=sh(c,e,!0);u&&(a=!0,Te(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(he(t)&&s.set(t,null),null):($(i)?i.forEach(l=>o[l]=null):Te(o,i),he(t)&&s.set(t,o),o)}function mo(t,e){return!t||!co(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,Zn(e))||se(t,e))}let $e=null,_o=null;function Di(t){const e=$e;return $e=t,_o=t&&t.type.__scopeId||null,e}function rh(t){_o=t}function ih(){_o=null}function st(t,e=$e,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&bu(-1);const i=Di(e);let o;try{o=t(...r)}finally{Di(i),s._d&&bu(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ko(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:f,setupState:p,ctx:m,inheritAttrs:_}=t;let v,C;const S=Di(t);try{if(n.shapeFlag&4){const k=r||s;v=kt(u.call(k,k,d,i,p,f,m)),C=l}else{const k=e;v=kt(k.length>1?k(i,{attrs:l,slots:a,emit:c}):k(i,null)),C=e.props?l:X_(l)}}catch(k){wr.length=0,go(k,t,1),v=oe(ut)}let M=v;if(C&&_!==!1){const k=Object.keys(C),{shapeFlag:G}=M;k.length&&G&7&&(o&&k.some(El)&&(C=Z_(C,o)),M=zt(M,C))}return n.dirs&&(M=zt(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),v=M,Di(S),v}const X_=t=>{let e;for(const n in t)(n==="class"||n==="style"||co(n))&&((e||(e={}))[n]=t[n]);return e},Z_=(t,e)=>{const n={};for(const s in t)(!El(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function ev(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?cu(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==s[f]&&!mo(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?cu(s,o,c):!0:!!o;return!1}function cu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!mo(n,i))return!0}return!1}function tv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const nv=t=>t.__isSuspense;function sv(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):Y_(t)}function qs(t,e){return Ul(t,null,e)}const ui={};function Ot(t,e,n){return Ul(t,e,n)}function Ul(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ye){var a;const l=Ff()===((a=De)==null?void 0:a.scope)?De:null;let c,u=!1,d=!1;if(Oe(t)?(c=()=>t.value,u=Mi(t)):ws(t)?(c=()=>t,s=!0):$(t)?(d=!0,u=t.some(k=>ws(k)||Mi(k)),c=()=>t.map(k=>{if(Oe(k))return k.value;if(ws(k))return Un(k);if(q(k))return pn(k,l,2)})):q(t)?e?c=()=>pn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),ct(t,l,3,[p])}:c=yt,e&&s){const k=c;c=()=>Un(k())}let f,p=k=>{f=S.onStop=()=>{pn(k,l,4)}},m;if(Lr)if(p=yt,e?n&&ct(e,l,3,[c(),d?[]:void 0,p]):c(),r==="sync"){const k=Zv();m=k.__watcherHandles||(k.__watcherHandles=[])}else return yt;let _=d?new Array(t.length).fill(ui):ui;const v=()=>{if(S.active)if(e){const k=S.run();(s||u||(d?k.some((G,U)=>Pr(G,_[U])):Pr(k,_)))&&(f&&f(),ct(e,l,3,[k,_===ui?void 0:d&&_[0]===ui?[]:_,p]),_=k)}else S.run()};v.allowRecurse=!!e;let C;r==="sync"?C=v:r==="post"?C=()=>qe(v,l&&l.suspense):(v.pre=!0,l&&(v.id=l.uid),C=()=>Fl(v));const S=new kl(c,C);e?n?v():_=S.run():r==="post"?qe(S.run.bind(S),l&&l.suspense):S.run();const M=()=>{S.stop(),l&&l.scope&&Il(l.scope.effects,S)};return m&&m.push(M),M}function rv(t,e,n){const s=this.proxy,r=Re(t)?t.includes(".")?oh(s,t):()=>s[t]:t.bind(s,s);let i;q(e)?i=e:(i=e.handler,n=e);const o=De;xs(this);const a=Ul(r,i.bind(s),n);return o?xs(o):Hn(),a}function oh(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Un(t,e){if(!he(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Oe(t))Un(t.value,e);else if($(t))for(let n=0;n<t.length;n++)Un(t[n],e);else if(Vs(t)||bs(t))t.forEach(n=>{Un(n,e)});else if(xf(t))for(const n in t)Un(t[n],e);return t}function Sa(t,e){const n=$e;if(n===null)return t;const s=Co(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=ye]=e[i];o&&(q(o)&&(o={mounted:o,updated:o}),o.deep&&Un(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function kn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(Ks(),ct(l,n,8,[t.el,a,t,e]),zs())}}function iv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return es(()=>{t.isMounted=!0}),$l(()=>{t.isUnmounting=!0}),t}const ot=[Function,Array],ah={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ot,onEnter:ot,onAfterEnter:ot,onEnterCancelled:ot,onBeforeLeave:ot,onLeave:ot,onAfterLeave:ot,onLeaveCancelled:ot,onBeforeAppear:ot,onAppear:ot,onAfterAppear:ot,onAppearCancelled:ot},ov={name:"BaseTransition",props:ah,setup(t,{slots:e}){const n=Vl(),s=iv();let r;return()=>{const i=e.default&&ch(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const _ of i)if(_.type!==ut){o=_;break}}const a=re(t),{mode:l}=a;if(s.isLeaving)return zo(o);const c=uu(o);if(!c)return zo(o);const u=Ta(c,a,s,n);Ra(c,u);const d=n.subTree,f=d&&uu(d);let p=!1;const{getTransitionKey:m}=c.type;if(m){const _=m();r===void 0?r=_:_!==r&&(r=_,p=!0)}if(f&&f.type!==ut&&(!Ln(c,f)||p)){const _=Ta(f,a,s,n);if(Ra(f,_),l==="out-in")return s.isLeaving=!0,_.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},zo(o);l==="in-out"&&c.type!==ut&&(_.delayLeave=(v,C,S)=>{const M=lh(s,f);M[String(f.key)]=f,v._leaveCb=()=>{C(),v._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=S})}return o}}},av=ov;function lh(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ta(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:_,onAppear:v,onAfterAppear:C,onAppearCancelled:S}=e,M=String(t.key),k=lh(n,t),G=(A,W)=>{A&&ct(A,s,9,W)},U=(A,W)=>{const V=W[1];G(A,W),$(A)?A.every(ke=>ke.length<=1)&&V():A.length<=1&&V()},Y={mode:i,persisted:o,beforeEnter(A){let W=a;if(!n.isMounted)if(r)W=_||a;else return;A._leaveCb&&A._leaveCb(!0);const V=k[M];V&&Ln(t,V)&&V.el._leaveCb&&V.el._leaveCb(),G(W,[A])},enter(A){let W=l,V=c,ke=u;if(!n.isMounted)if(r)W=v||l,V=C||c,ke=S||u;else return;let F=!1;const _e=A._enterCb=Le=>{F||(F=!0,Le?G(ke,[A]):G(V,[A]),Y.delayedLeave&&Y.delayedLeave(),A._enterCb=void 0)};W?U(W,[A,_e]):_e()},leave(A,W){const V=String(t.key);if(A._enterCb&&A._enterCb(!0),n.isUnmounting)return W();G(d,[A]);let ke=!1;const F=A._leaveCb=_e=>{ke||(ke=!0,W(),_e?G(m,[A]):G(p,[A]),A._leaveCb=void 0,k[V]===t&&delete k[V])};k[V]=t,f?U(f,[A,F]):F()},clone(A){return Ta(A,e,n,s)}};return Y}function zo(t){if(vo(t))return t=zt(t),t.children=null,t}function uu(t){return vo(t)?t.children?t.children[0]:void 0:t}function Ra(t,e){t.shapeFlag&6&&t.component?Ra(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ch(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Me?(o.patchFlag&128&&r++,s=s.concat(ch(o.children,e,a))):(e||o.type!==ut)&&s.push(a!=null?zt(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Qt(t,e){return q(t)?(()=>Te({name:t.name},e,{setup:t}))():t}const yr=t=>!!t.type.__asyncLoader,vo=t=>t.type.__isKeepAlive;function lv(t,e){uh(t,"a",e)}function cv(t,e){uh(t,"da",e)}function uh(t,e,n=De){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(yo(e,s,n),n){let r=n.parent;for(;r&&r.parent;)vo(r.parent.vnode)&&uv(s,e,n,r),r=r.parent}}function uv(t,e,n,s){const r=yo(e,t,s,!0);bo(()=>{Il(s[e],r)},n)}function yo(t,e,n=De,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ks(),xs(n);const a=ct(e,n,t,o);return Hn(),zs(),a});return s?r.unshift(i):r.push(i),i}}const Jt=t=>(e,n=De)=>(!Lr||t==="sp")&&yo(t,(...s)=>e(...s),n),dv=Jt("bm"),es=Jt("m"),fv=Jt("bu"),hv=Jt("u"),$l=Jt("bum"),bo=Jt("um"),pv=Jt("sp"),gv=Jt("rtg"),mv=Jt("rtc");function _v(t,e=De){yo("ec",t,e)}const dh="components";function Ke(t,e){return yv(dh,t,!0,e)||t}const vv=Symbol.for("v-ndc");function yv(t,e,n=!0,s=!1){const r=$e||De;if(r){const i=r.type;if(t===dh){const a=Qv(i,!1);if(a&&(a===e||a===Mt(e)||a===fo(Mt(e))))return i}const o=du(r[t]||i[t],e)||du(r.appContext[t],e);return!o&&s?i:o}}function du(t,e){return t&&(t[e]||t[Mt(e)]||t[fo(Mt(e))])}function bv(t,e,n,s){let r;const i=n&&n[s];if($(t)||Re(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(he(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function wo(t,e,n={},s,r){if($e.isCE||$e.parent&&yr($e.parent)&&$e.parent.isCE)return e!=="default"&&(n.name=e),oe("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),Fe();const o=i&&fh(i(n)),a=Bl(Me,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function fh(t){return t.some(e=>Ui(e)?!(e.type===ut||e.type===Me&&!fh(e.children)):!0)?t:null}const ka=t=>t?Ih(t)?Co(t)||t.proxy:ka(t.parent):null,br=Te(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ka(t.parent),$root:t=>ka(t.root),$emit:t=>t.emit,$options:t=>jl(t),$forceUpdate:t=>t.f||(t.f=()=>Fl(t.update)),$nextTick:t=>t.n||(t.n=bt.bind(t.proxy)),$watch:t=>rv.bind(t)}),Go=(t,e)=>t!==ye&&!t.__isScriptSetup&&se(t,e),wv={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Go(s,e))return o[e]=1,s[e];if(r!==ye&&se(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&se(c,e))return o[e]=3,i[e];if(n!==ye&&se(n,e))return o[e]=4,n[e];Aa&&(o[e]=0)}}const u=br[e];let d,f;if(u)return e==="$attrs"&&Ze(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==ye&&se(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,se(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Go(r,e)?(r[e]=n,!0):s!==ye&&se(s,e)?(s[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ye&&se(t,o)||Go(e,o)||(a=i[0])&&se(a,o)||se(s,o)||se(br,o)||se(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function fu(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Aa=!0;function Ev(t){const e=jl(t),n=t.proxy,s=t.ctx;Aa=!1,e.beforeCreate&&hu(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:m,activated:_,deactivated:v,beforeDestroy:C,beforeUnmount:S,destroyed:M,unmounted:k,render:G,renderTracked:U,renderTriggered:Y,errorCaptured:A,serverPrefetch:W,expose:V,inheritAttrs:ke,components:F,directives:_e,filters:Le}=e;if(c&&Iv(c,s,null),o)for(const ge in o){const ce=o[ge];q(ce)&&(s[ge]=ce.bind(n))}if(r){const ge=r.call(n,n);he(ge)&&(t.data=Gs(ge))}if(Aa=!0,i)for(const ge in i){const ce=i[ge],ft=q(ce)?ce.bind(n,n):q(ce.get)?ce.get.bind(n,n):yt,Rn=!q(ce)&&q(ce.set)?ce.set.bind(n):yt,ht=ae({get:ft,set:Rn});Object.defineProperty(s,ge,{enumerable:!0,configurable:!0,get:()=>ht.value,set:Ge=>ht.value=Ge})}if(a)for(const ge in a)hh(a[ge],s,n,ge);if(l){const ge=q(l)?l.call(n):l;Reflect.ownKeys(ge).forEach(ce=>{Cs(ce,ge[ce])})}u&&hu(u,t,"c");function Ee(ge,ce){$(ce)?ce.forEach(ft=>ge(ft.bind(n))):ce&&ge(ce.bind(n))}if(Ee(dv,d),Ee(es,f),Ee(fv,p),Ee(hv,m),Ee(lv,_),Ee(cv,v),Ee(_v,A),Ee(mv,U),Ee(gv,Y),Ee($l,S),Ee(bo,k),Ee(pv,W),$(V))if(V.length){const ge=t.exposed||(t.exposed={});V.forEach(ce=>{Object.defineProperty(ge,ce,{get:()=>n[ce],set:ft=>n[ce]=ft})})}else t.exposed||(t.exposed={});G&&t.render===yt&&(t.render=G),ke!=null&&(t.inheritAttrs=ke),F&&(t.components=F),_e&&(t.directives=_e)}function Iv(t,e,n=yt){$(t)&&(t=Pa(t));for(const s in t){const r=t[s];let i;he(r)?"default"in r?i=Je(r.from||s,r.default,!0):i=Je(r.from||s):i=Je(r),Oe(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function hu(t,e,n){ct($(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function hh(t,e,n,s){const r=s.includes(".")?oh(n,s):()=>n[s];if(Re(t)){const i=e[t];q(i)&&Ot(r,i)}else if(q(t))Ot(r,t.bind(n));else if(he(t))if($(t))t.forEach(i=>hh(i,e,n,s));else{const i=q(t.handler)?t.handler.bind(n):e[t.handler];q(i)&&Ot(r,i,t)}}function jl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>Li(l,c,o,!0)),Li(l,e,o)),he(e)&&i.set(e,l),l}function Li(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Li(t,i,n,!0),r&&r.forEach(o=>Li(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Cv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Cv={data:pu,props:gu,emits:gu,methods:gr,computed:gr,beforeCreate:Ve,created:Ve,beforeMount:Ve,mounted:Ve,beforeUpdate:Ve,updated:Ve,beforeDestroy:Ve,beforeUnmount:Ve,destroyed:Ve,unmounted:Ve,activated:Ve,deactivated:Ve,errorCaptured:Ve,serverPrefetch:Ve,components:gr,directives:gr,watch:Tv,provide:pu,inject:Sv};function pu(t,e){return e?t?function(){return Te(q(t)?t.call(this,this):t,q(e)?e.call(this,this):e)}:e:t}function Sv(t,e){return gr(Pa(t),Pa(e))}function Pa(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ve(t,e){return t?[...new Set([].concat(t,e))]:e}function gr(t,e){return t?Te(Object.create(null),t,e):e}function gu(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:Te(Object.create(null),fu(t),fu(e??{})):e}function Tv(t,e){if(!t)return e;if(!e)return t;const n=Te(Object.create(null),t);for(const s in e)n[s]=Ve(t[s],e[s]);return n}function ph(){return{app:null,config:{isNativeTag:Km,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rv=0;function kv(t,e){return function(s,r=null){q(s)||(s=Te({},s)),r!=null&&!he(r)&&(r=null);const i=ph(),o=new Set;let a=!1;const l=i.app={_uid:Rv++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:ey,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&q(c.install)?(o.add(c),c.install(l,...u)):q(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,d){if(!a){const f=oe(s,r);return f.appContext=i,u&&e?e(f,c):t(f,c,d),a=!0,l._container=c,c.__vue_app__=l,Co(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){Fi=l;try{return c()}finally{Fi=null}}};return l}}let Fi=null;function Cs(t,e){if(De){let n=De.provides;const s=De.parent&&De.parent.provides;s===n&&(n=De.provides=Object.create(s)),n[t]=e}}function Je(t,e,n=!1){const s=De||$e;if(s||Fi){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Fi._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&q(e)?e.call(s&&s.proxy):e}}function Av(t,e,n,s=!1){const r={},i={};Pi(i,Io,1),t.propsDefaults=Object.create(null),gh(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:D_(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Pv(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=re(r),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(mo(t.emitsOptions,f))continue;const p=e[f];if(l)if(se(i,f))p!==i[f]&&(i[f]=p,c=!0);else{const m=Mt(f);r[m]=Oa(l,a,m,p,t,!1)}else p!==i[f]&&(i[f]=p,c=!0)}}}else{gh(t,e,r,i)&&(c=!0);let u;for(const d in a)(!e||!se(e,d)&&((u=Zn(d))===d||!se(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=Oa(l,a,d,void 0,t,!0)):delete r[d]);if(i!==a)for(const d in i)(!e||!se(e,d))&&(delete i[d],c=!0)}c&&Kt(t,"set","$attrs")}function gh(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(bi(l))continue;const c=e[l];let u;r&&se(r,u=Mt(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:mo(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=re(n),c=a||ye;for(let u=0;u<i.length;u++){const d=i[u];n[d]=Oa(r,l,d,c[d],t,!se(c,d))}}return o}function Oa(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=se(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&q(l)){const{propsDefaults:c}=r;n in c?s=c[n]:(xs(r),s=c[n]=l.call(null,e),Hn())}else s=l}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Zn(n))&&(s=!0))}return s}function mh(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!q(t)){const u=d=>{l=!0;const[f,p]=mh(d,e,!0);Te(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return he(t)&&s.set(t,ys),ys;if($(i))for(let u=0;u<i.length;u++){const d=Mt(i[u]);mu(d)&&(o[d]=ye)}else if(i)for(const u in i){const d=Mt(u);if(mu(d)){const f=i[u],p=o[d]=$(f)||q(f)?{type:f}:Te({},f);if(p){const m=yu(Boolean,p.type),_=yu(String,p.type);p[0]=m>-1,p[1]=_<0||m<_,(m>-1||se(p,"default"))&&a.push(d)}}}const c=[o,a];return he(t)&&s.set(t,c),c}function mu(t){return t[0]!=="$"}function _u(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function vu(t,e){return _u(t)===_u(e)}function yu(t,e){return $(e)?e.findIndex(n=>vu(n,t)):q(e)&&vu(e,t)?0:-1}const _h=t=>t[0]==="_"||t==="$stable",Hl=t=>$(t)?t.map(kt):[kt(t)],Ov=(t,e,n)=>{if(e._n)return e;const s=st((...r)=>Hl(e(...r)),n);return s._c=!1,s},vh=(t,e,n)=>{const s=t._ctx;for(const r in t){if(_h(r))continue;const i=t[r];if(q(i))e[r]=Ov(r,i,s);else if(i!=null){const o=Hl(i);e[r]=()=>o}}},yh=(t,e)=>{const n=Hl(e);t.slots.default=()=>n},Nv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),Pi(e,"_",n)):vh(e,t.slots={})}else t.slots={},e&&yh(t,e);Pi(t.slots,Io,1)},xv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ye;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Te(r,e),!n&&a===1&&delete r._):(i=!e.$stable,vh(e,r)),o=e}else e&&(yh(t,e),o={default:1});if(i)for(const a in r)!_h(a)&&!(a in o)&&delete r[a]};function Na(t,e,n,s,r=!1){if($(t)){t.forEach((f,p)=>Na(f,e&&($(e)?e[p]:e),n,s,r));return}if(yr(s)&&!r)return;const i=s.shapeFlag&4?Co(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ye?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Re(c)?(u[c]=null,se(d,c)&&(d[c]=null)):Oe(c)&&(c.value=null)),q(l))pn(l,a,12,[o,u]);else{const f=Re(l),p=Oe(l);if(f||p){const m=()=>{if(t.f){const _=f?se(d,l)?d[l]:u[l]:l.value;r?$(_)&&Il(_,i):$(_)?_.includes(i)||_.push(i):f?(u[l]=[i],se(d,l)&&(d[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,se(d,l)&&(d[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,qe(m,n)):m()}}}const qe=sv;function Mv(t){return Dv(t)}function Dv(t,e){const n=ba();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=yt,insertStaticContent:m}=t,_=(h,g,y,b=null,E=null,R=null,x=!1,T=null,P=!!g.dynamicChildren)=>{if(h===g)return;h&&!Ln(h,g)&&(b=N(h),Ge(h,E,R,!0),h=null),g.patchFlag===-2&&(P=!1,g.dynamicChildren=null);const{type:I,ref:H,shapeFlag:L}=g;switch(I){case Eo:v(h,g,y,b);break;case ut:C(h,g,y,b);break;case qo:h==null&&S(g,y,b,x);break;case Me:F(h,g,y,b,E,R,x,T,P);break;default:L&1?G(h,g,y,b,E,R,x,T,P):L&6?_e(h,g,y,b,E,R,x,T,P):(L&64||L&128)&&I.process(h,g,y,b,E,R,x,T,P,ie)}H!=null&&E&&Na(H,h&&h.ref,R,g||h,!g)},v=(h,g,y,b)=>{if(h==null)s(g.el=a(g.children),y,b);else{const E=g.el=h.el;g.children!==h.children&&c(E,g.children)}},C=(h,g,y,b)=>{h==null?s(g.el=l(g.children||""),y,b):g.el=h.el},S=(h,g,y,b)=>{[h.el,h.anchor]=m(h.children,g,y,b,h.el,h.anchor)},M=({el:h,anchor:g},y,b)=>{let E;for(;h&&h!==g;)E=f(h),s(h,y,b),h=E;s(g,y,b)},k=({el:h,anchor:g})=>{let y;for(;h&&h!==g;)y=f(h),r(h),h=y;r(g)},G=(h,g,y,b,E,R,x,T,P)=>{x=x||g.type==="svg",h==null?U(g,y,b,E,R,x,T,P):W(h,g,E,R,x,T,P)},U=(h,g,y,b,E,R,x,T)=>{let P,I;const{type:H,props:L,shapeFlag:B,transition:z,dirs:X}=h;if(P=h.el=o(h.type,R,L&&L.is,L),B&8?u(P,h.children):B&16&&A(h.children,P,null,b,E,R&&H!=="foreignObject",x,T),X&&kn(h,null,b,"created"),Y(P,h,h.scopeId,x,b),L){for(const ue in L)ue!=="value"&&!bi(ue)&&i(P,ue,null,L[ue],R,h.children,b,E,D);"value"in L&&i(P,"value",null,L.value),(I=L.onVnodeBeforeMount)&&Tt(I,b,h)}X&&kn(h,null,b,"beforeMount");const me=(!E||E&&!E.pendingBranch)&&z&&!z.persisted;me&&z.beforeEnter(P),s(P,g,y),((I=L&&L.onVnodeMounted)||me||X)&&qe(()=>{I&&Tt(I,b,h),me&&z.enter(P),X&&kn(h,null,b,"mounted")},E)},Y=(h,g,y,b,E)=>{if(y&&p(h,y),b)for(let R=0;R<b.length;R++)p(h,b[R]);if(E){let R=E.subTree;if(g===R){const x=E.vnode;Y(h,x,x.scopeId,x.slotScopeIds,E.parent)}}},A=(h,g,y,b,E,R,x,T,P=0)=>{for(let I=P;I<h.length;I++){const H=h[I]=T?an(h[I]):kt(h[I]);_(null,H,g,y,b,E,R,x,T)}},W=(h,g,y,b,E,R,x)=>{const T=g.el=h.el;let{patchFlag:P,dynamicChildren:I,dirs:H}=g;P|=h.patchFlag&16;const L=h.props||ye,B=g.props||ye;let z;y&&An(y,!1),(z=B.onVnodeBeforeUpdate)&&Tt(z,y,g,h),H&&kn(g,h,y,"beforeUpdate"),y&&An(y,!0);const X=E&&g.type!=="foreignObject";if(I?V(h.dynamicChildren,I,T,y,b,X,R):x||ce(h,g,T,null,y,b,X,R,!1),P>0){if(P&16)ke(T,g,L,B,y,b,E);else if(P&2&&L.class!==B.class&&i(T,"class",null,B.class,E),P&4&&i(T,"style",L.style,B.style,E),P&8){const me=g.dynamicProps;for(let ue=0;ue<me.length;ue++){const Se=me[ue],pt=L[Se],ls=B[Se];(ls!==pt||Se==="value")&&i(T,Se,pt,ls,E,h.children,y,b,D)}}P&1&&h.children!==g.children&&u(T,g.children)}else!x&&I==null&&ke(T,g,L,B,y,b,E);((z=B.onVnodeUpdated)||H)&&qe(()=>{z&&Tt(z,y,g,h),H&&kn(g,h,y,"updated")},b)},V=(h,g,y,b,E,R,x)=>{for(let T=0;T<g.length;T++){const P=h[T],I=g[T],H=P.el&&(P.type===Me||!Ln(P,I)||P.shapeFlag&70)?d(P.el):y;_(P,I,H,null,b,E,R,x,!0)}},ke=(h,g,y,b,E,R,x)=>{if(y!==b){if(y!==ye)for(const T in y)!bi(T)&&!(T in b)&&i(h,T,y[T],null,x,g.children,E,R,D);for(const T in b){if(bi(T))continue;const P=b[T],I=y[T];P!==I&&T!=="value"&&i(h,T,I,P,x,g.children,E,R,D)}"value"in b&&i(h,"value",y.value,b.value)}},F=(h,g,y,b,E,R,x,T,P)=>{const I=g.el=h?h.el:a(""),H=g.anchor=h?h.anchor:a("");let{patchFlag:L,dynamicChildren:B,slotScopeIds:z}=g;z&&(T=T?T.concat(z):z),h==null?(s(I,y,b),s(H,y,b),A(g.children,y,H,E,R,x,T,P)):L>0&&L&64&&B&&h.dynamicChildren?(V(h.dynamicChildren,B,y,E,R,x,T),(g.key!=null||E&&g===E.subTree)&&bh(h,g,!0)):ce(h,g,y,H,E,R,x,T,P)},_e=(h,g,y,b,E,R,x,T,P)=>{g.slotScopeIds=T,h==null?g.shapeFlag&512?E.ctx.activate(g,y,b,x,P):Le(g,y,b,E,R,x,P):Zt(h,g,P)},Le=(h,g,y,b,E,R,x)=>{const T=h.component=Kv(h,b,E);if(vo(h)&&(T.ctx.renderer=ie),zv(T),T.asyncDep){if(E&&E.registerDep(T,Ee),!h.el){const P=T.subTree=oe(ut);C(null,P,g,y)}return}Ee(T,h,g,y,E,R,x)},Zt=(h,g,y)=>{const b=g.component=h.component;if(ev(h,g,y))if(b.asyncDep&&!b.asyncResolved){ge(b,g,y);return}else b.next=g,q_(b.update),b.update();else g.el=h.el,b.vnode=g},Ee=(h,g,y,b,E,R,x)=>{const T=()=>{if(h.isMounted){let{next:H,bu:L,u:B,parent:z,vnode:X}=h,me=H,ue;An(h,!1),H?(H.el=X.el,ge(h,H,x)):H=X,L&&wi(L),(ue=H.props&&H.props.onVnodeBeforeUpdate)&&Tt(ue,z,H,X),An(h,!0);const Se=Ko(h),pt=h.subTree;h.subTree=Se,_(pt,Se,d(pt.el),N(pt),h,E,R),H.el=Se.el,me===null&&tv(h,Se.el),B&&qe(B,E),(ue=H.props&&H.props.onVnodeUpdated)&&qe(()=>Tt(ue,z,H,X),E)}else{let H;const{el:L,props:B}=g,{bm:z,m:X,parent:me}=h,ue=yr(g);if(An(h,!1),z&&wi(z),!ue&&(H=B&&B.onVnodeBeforeMount)&&Tt(H,me,g),An(h,!0),L&&J){const Se=()=>{h.subTree=Ko(h),J(L,h.subTree,h,E,null)};ue?g.type.__asyncLoader().then(()=>!h.isUnmounted&&Se()):Se()}else{const Se=h.subTree=Ko(h);_(null,Se,y,b,h,E,R),g.el=Se.el}if(X&&qe(X,E),!ue&&(H=B&&B.onVnodeMounted)){const Se=g;qe(()=>Tt(H,me,Se),E)}(g.shapeFlag&256||me&&yr(me.vnode)&&me.vnode.shapeFlag&256)&&h.a&&qe(h.a,E),h.isMounted=!0,g=y=b=null}},P=h.effect=new kl(T,()=>Fl(I),h.scope),I=h.update=()=>P.run();I.id=h.uid,An(h,!0),I()},ge=(h,g,y)=>{g.component=h;const b=h.vnode.props;h.vnode=g,h.next=null,Pv(h,g.props,b,y),xv(h,g.children,y),Ks(),lu(),zs()},ce=(h,g,y,b,E,R,x,T,P=!1)=>{const I=h&&h.children,H=h?h.shapeFlag:0,L=g.children,{patchFlag:B,shapeFlag:z}=g;if(B>0){if(B&128){Rn(I,L,y,b,E,R,x,T,P);return}else if(B&256){ft(I,L,y,b,E,R,x,T,P);return}}z&8?(H&16&&D(I,E,R),L!==I&&u(y,L)):H&16?z&16?Rn(I,L,y,b,E,R,x,T,P):D(I,E,R,!0):(H&8&&u(y,""),z&16&&A(L,y,b,E,R,x,T,P))},ft=(h,g,y,b,E,R,x,T,P)=>{h=h||ys,g=g||ys;const I=h.length,H=g.length,L=Math.min(I,H);let B;for(B=0;B<L;B++){const z=g[B]=P?an(g[B]):kt(g[B]);_(h[B],z,y,null,E,R,x,T,P)}I>H?D(h,E,R,!0,!1,L):A(g,y,b,E,R,x,T,P,L)},Rn=(h,g,y,b,E,R,x,T,P)=>{let I=0;const H=g.length;let L=h.length-1,B=H-1;for(;I<=L&&I<=B;){const z=h[I],X=g[I]=P?an(g[I]):kt(g[I]);if(Ln(z,X))_(z,X,y,null,E,R,x,T,P);else break;I++}for(;I<=L&&I<=B;){const z=h[L],X=g[B]=P?an(g[B]):kt(g[B]);if(Ln(z,X))_(z,X,y,null,E,R,x,T,P);else break;L--,B--}if(I>L){if(I<=B){const z=B+1,X=z<H?g[z].el:b;for(;I<=B;)_(null,g[I]=P?an(g[I]):kt(g[I]),y,X,E,R,x,T,P),I++}}else if(I>B)for(;I<=L;)Ge(h[I],E,R,!0),I++;else{const z=I,X=I,me=new Map;for(I=X;I<=B;I++){const tt=g[I]=P?an(g[I]):kt(g[I]);tt.key!=null&&me.set(tt.key,I)}let ue,Se=0;const pt=B-X+1;let ls=!1,Qc=0;const ir=new Array(pt);for(I=0;I<pt;I++)ir[I]=0;for(I=z;I<=L;I++){const tt=h[I];if(Se>=pt){Ge(tt,E,R,!0);continue}let St;if(tt.key!=null)St=me.get(tt.key);else for(ue=X;ue<=B;ue++)if(ir[ue-X]===0&&Ln(tt,g[ue])){St=ue;break}St===void 0?Ge(tt,E,R,!0):(ir[St-X]=I+1,St>=Qc?Qc=St:ls=!0,_(tt,g[St],y,null,E,R,x,T,P),Se++)}const Jc=ls?Lv(ir):ys;for(ue=Jc.length-1,I=pt-1;I>=0;I--){const tt=X+I,St=g[tt],Xc=tt+1<H?g[tt+1].el:b;ir[I]===0?_(null,St,y,Xc,E,R,x,T,P):ls&&(ue<0||I!==Jc[ue]?ht(St,y,Xc,2):ue--)}}},ht=(h,g,y,b,E=null)=>{const{el:R,type:x,transition:T,children:P,shapeFlag:I}=h;if(I&6){ht(h.component.subTree,g,y,b);return}if(I&128){h.suspense.move(g,y,b);return}if(I&64){x.move(h,g,y,ie);return}if(x===Me){s(R,g,y);for(let L=0;L<P.length;L++)ht(P[L],g,y,b);s(h.anchor,g,y);return}if(x===qo){M(h,g,y);return}if(b!==2&&I&1&&T)if(b===0)T.beforeEnter(R),s(R,g,y),qe(()=>T.enter(R),E);else{const{leave:L,delayLeave:B,afterLeave:z}=T,X=()=>s(R,g,y),me=()=>{L(R,()=>{X(),z&&z()})};B?B(R,X,me):me()}else s(R,g,y)},Ge=(h,g,y,b=!1,E=!1)=>{const{type:R,props:x,ref:T,children:P,dynamicChildren:I,shapeFlag:H,patchFlag:L,dirs:B}=h;if(T!=null&&Na(T,null,y,h,!0),H&256){g.ctx.deactivate(h);return}const z=H&1&&B,X=!yr(h);let me;if(X&&(me=x&&x.onVnodeBeforeUnmount)&&Tt(me,g,h),H&6)w(h.component,y,b);else{if(H&128){h.suspense.unmount(y,b);return}z&&kn(h,null,g,"beforeUnmount"),H&64?h.type.remove(h,g,y,E,ie,b):I&&(R!==Me||L>0&&L&64)?D(I,g,y,!1,!0):(R===Me&&L&384||!E&&H&16)&&D(P,g,y),b&&as(h)}(X&&(me=x&&x.onVnodeUnmounted)||z)&&qe(()=>{me&&Tt(me,g,h),z&&kn(h,null,g,"unmounted")},y)},as=h=>{const{type:g,el:y,anchor:b,transition:E}=h;if(g===Me){Yc(y,b);return}if(g===qo){k(h);return}const R=()=>{r(y),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(h.shapeFlag&1&&E&&!E.persisted){const{leave:x,delayLeave:T}=E,P=()=>x(y,R);T?T(h.el,R,P):P()}else R()},Yc=(h,g)=>{let y;for(;h!==g;)y=f(h),r(h),h=y;r(g)},w=(h,g,y)=>{const{bum:b,scope:E,update:R,subTree:x,um:T}=h;b&&wi(b),E.stop(),R&&(R.active=!1,Ge(x,h,g,y)),T&&qe(T,g),qe(()=>{h.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},D=(h,g,y,b=!1,E=!1,R=0)=>{for(let x=R;x<h.length;x++)Ge(h[x],g,y,b,E)},N=h=>h.shapeFlag&6?N(h.component.subTree):h.shapeFlag&128?h.suspense.next():f(h.anchor||h.el),j=(h,g,y)=>{h==null?g._vnode&&Ge(g._vnode,null,null,!0):_(g._vnode||null,h,g,null,null,null,y),lu(),th(),g._vnode=h},ie={p:_,um:Ge,m:ht,r:as,mt:Le,mc:A,pc:ce,pbc:V,n:N,o:t};let Ie,J;return e&&([Ie,J]=e(ie)),{render:j,hydrate:Ie,createApp:kv(j,Ie)}}function An({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function bh(t,e,n=!1){const s=t.children,r=e.children;if($(s)&&$(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=an(r[i]),a.el=o.el),n||bh(o,a)),a.type===Eo&&(a.el=o.el)}}function Lv(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Fv=t=>t.__isTeleport,Me=Symbol.for("v-fgt"),Eo=Symbol.for("v-txt"),ut=Symbol.for("v-cmt"),qo=Symbol.for("v-stc"),wr=[];let _t=null;function Fe(t=!1){wr.push(_t=t?null:[])}function Uv(){wr.pop(),_t=wr[wr.length-1]||null}let Dr=1;function bu(t){Dr+=t}function wh(t){return t.dynamicChildren=Dr>0?_t||ys:null,Uv(),Dr>0&&_t&&_t.push(t),t}function Ye(t,e,n,s,r,i){return wh(Z(t,e,n,s,r,i,!0))}function Bl(t,e,n,s,r){return wh(oe(t,e,n,s,r,!0))}function Ui(t){return t?t.__v_isVNode===!0:!1}function Ln(t,e){return t.type===e.type&&t.key===e.key}const Io="__vInternal",Eh=({key:t})=>t??null,Ei=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Re(t)||Oe(t)||q(t)?{i:$e,r:t,k:e,f:!!n}:t:null);function Z(t,e=null,n=null,s=0,r=null,i=t===Me?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Eh(e),ref:e&&Ei(e),scopeId:_o,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:$e};return a?(Wl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Re(n)?8:16),Dr>0&&!o&&_t&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&_t.push(l),l}const oe=$v;function $v(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===vv)&&(t=ut),Ui(t)){const a=zt(t,e,!0);return n&&Wl(a,n),Dr>0&&!i&&_t&&(a.shapeFlag&6?_t[_t.indexOf(t)]=a:_t.push(a)),a.patchFlag|=-2,a}if(Jv(t)&&(t=t.__vccOpts),e){e=jv(e);let{class:a,style:l}=e;a&&!Re(a)&&(e.class=Or(a)),he(l)&&(qf(l)&&!$(l)&&(l=Te({},l)),e.style=Sl(l))}const o=Re(t)?1:nv(t)?128:Fv(t)?64:he(t)?4:q(t)?2:0;return Z(t,e,n,s,r,o,i,!0)}function jv(t){return t?qf(t)||Io in t?Te({},t):t:null}function zt(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Bv(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Eh(a),ref:e&&e.ref?n&&r?$(r)?r.concat(Ei(e)):[r,Ei(e)]:Ei(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Me?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zt(t.ssContent),ssFallback:t.ssFallback&&zt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function gn(t=" ",e=0){return oe(Eo,null,t,e)}function Hv(t="",e=!1){return e?(Fe(),Bl(ut,null,t)):oe(ut,null,t)}function kt(t){return t==null||typeof t=="boolean"?oe(ut):$(t)?oe(Me,null,t.slice()):typeof t=="object"?an(t):oe(Eo,null,String(t))}function an(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zt(t)}function Wl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Wl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Io in e)?e._ctx=$e:r===3&&$e&&($e.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else q(e)?(e={default:e,_ctx:$e},n=32):(e=String(e),s&64?(n=16,e=[gn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Bv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Or([e.class,s.class]));else if(r==="style")e.style=Sl([e.style,s.style]);else if(co(r)){const i=e[r],o=s[r];o&&i!==o&&!($(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Tt(t,e,n,s=null){ct(t,e,7,[n,s])}const Wv=ph();let Vv=0;function Kv(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Wv,i={uid:Vv++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Lf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mh(s,r),emitsOptions:sh(s,r),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:s.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=J_.bind(null,i),t.ce&&t.ce(i),i}let De=null;const Vl=()=>De||$e;let Kl,cs,wu="__VUE_INSTANCE_SETTERS__";(cs=ba()[wu])||(cs=ba()[wu]=[]),cs.push(t=>De=t),Kl=t=>{cs.length>1?cs.forEach(e=>e(t)):cs[0](t)};const xs=t=>{Kl(t),t.scope.on()},Hn=()=>{De&&De.scope.off(),Kl(null)};function Ih(t){return t.vnode.shapeFlag&4}let Lr=!1;function zv(t,e=!1){Lr=e;const{props:n,children:s}=t.vnode,r=Ih(t);Av(t,n,r,e),Nv(t,s);const i=r?Gv(t,e):void 0;return Lr=!1,i}function Gv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Yf(new Proxy(t.ctx,wv));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Yv(t):null;xs(t),Ks();const i=pn(s,t,0,[t.props,r]);if(zs(),Hn(),Of(i)){if(i.then(Hn,Hn),e)return i.then(o=>{Eu(t,o,e)}).catch(o=>{go(o,t,0)});t.asyncDep=i}else Eu(t,i,e)}else Ch(t,e)}function Eu(t,e,n){q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:he(e)&&(t.setupState=Xf(e)),Ch(t,n)}let Iu;function Ch(t,e,n){const s=t.type;if(!t.render){if(!e&&Iu&&!s.render){const r=s.template||jl(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Te(Te({isCustomElement:i,delimiters:a},o),l);s.render=Iu(r,c)}}t.render=s.render||yt}xs(t),Ks(),Ev(t),zs(),Hn()}function qv(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ze(t,"get","$attrs"),e[n]}}))}function Yv(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return qv(t)},slots:t.slots,emit:t.emit,expose:e}}function Co(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Xf(Yf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in br)return br[n](t)},has(e,n){return n in e||n in br}}))}function Qv(t,e=!0){return q(t)?t.displayName||t.name:t.name||e&&t.__name}function Jv(t){return q(t)&&"__vccOpts"in t}const ae=(t,e)=>K_(t,e,Lr);function wn(t,e,n){const s=arguments.length;return s===2?he(e)&&!$(e)?Ui(e)?oe(t,null,[e]):oe(t,e):oe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ui(n)&&(n=[n]),oe(t,e,n))}const Xv=Symbol.for("v-scx"),Zv=()=>Je(Xv),ey="3.3.4",ty="http://www.w3.org/2000/svg",Fn=typeof document<"u"?document:null,Cu=Fn&&Fn.createElement("template"),ny={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Fn.createElementNS(ty,t):Fn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Fn.createTextNode(t),createComment:t=>Fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Cu.innerHTML=s?`<svg>${t}</svg>`:t;const a=Cu.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function sy(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function ry(t,e,n){const s=t.style,r=Re(n);if(n&&!r){if(e&&!Re(e))for(const i in e)n[i]==null&&xa(s,i,"");for(const i in n)xa(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Su=/\s*!important$/;function xa(t,e,n){if($(n))n.forEach(s=>xa(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=iy(t,e);Su.test(n)?t.setProperty(Zn(s),n.replace(Su,""),"important"):t[s]=n}}const Tu=["Webkit","Moz","ms"],Yo={};function iy(t,e){const n=Yo[e];if(n)return n;let s=Mt(e);if(s!=="filter"&&s in t)return Yo[e]=s;s=fo(s);for(let r=0;r<Tu.length;r++){const i=Tu[r]+s;if(i in t)return Yo[e]=i}return e}const Ru="http://www.w3.org/1999/xlink";function oy(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ru,e.slice(6,e.length)):t.setAttributeNS(Ru,e,n);else{const i=s_(e);n==null||i&&!Mf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function ay(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Mf(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Ft(t,e,n,s){t.addEventListener(e,n,s)}function ly(t,e,n,s){t.removeEventListener(e,n,s)}function cy(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=uy(e);if(s){const c=i[e]=hy(s,r);Ft(t,a,c,l)}else o&&(ly(t,a,o,l),i[e]=void 0)}}const ku=/(?:Once|Passive|Capture)$/;function uy(t){let e;if(ku.test(t)){e={};let s;for(;s=t.match(ku);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Zn(t.slice(2)),e]}let Qo=0;const dy=Promise.resolve(),fy=()=>Qo||(dy.then(()=>Qo=0),Qo=Date.now());function hy(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ct(py(s,n.value),e,5,[s])};return n.value=t,n.attached=fy(),n}function py(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Au=/^on[a-z]/,gy=(t,e,n,s,r=!1,i,o,a,l)=>{e==="class"?sy(t,s,r):e==="style"?ry(t,n,s):co(e)?El(e)||cy(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):my(t,e,s,r))?ay(t,e,s,i,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),oy(t,e,s,r))};function my(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Au.test(e)&&q(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Au.test(e)&&Re(n)?!1:e in t}const tn="transition",or="animation",zl=(t,{slots:e})=>wn(av,_y(t),e);zl.displayName="Transition";const Sh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};zl.props=Te({},ah,Sh);const Pn=(t,e=[])=>{$(t)?t.forEach(n=>n(...e)):t&&t(...e)},Pu=t=>t?$(t)?t.some(e=>e.length>1):t.length>1:!1;function _y(t){const e={};for(const F in t)F in Sh||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=vy(r),_=m&&m[0],v=m&&m[1],{onBeforeEnter:C,onEnter:S,onEnterCancelled:M,onLeave:k,onLeaveCancelled:G,onBeforeAppear:U=C,onAppear:Y=S,onAppearCancelled:A=M}=e,W=(F,_e,Le)=>{On(F,_e?u:a),On(F,_e?c:o),Le&&Le()},V=(F,_e)=>{F._isLeaving=!1,On(F,d),On(F,p),On(F,f),_e&&_e()},ke=F=>(_e,Le)=>{const Zt=F?Y:S,Ee=()=>W(_e,F,Le);Pn(Zt,[_e,Ee]),Ou(()=>{On(_e,F?l:i),nn(_e,F?u:a),Pu(Zt)||Nu(_e,s,_,Ee)})};return Te(e,{onBeforeEnter(F){Pn(C,[F]),nn(F,i),nn(F,o)},onBeforeAppear(F){Pn(U,[F]),nn(F,l),nn(F,c)},onEnter:ke(!1),onAppear:ke(!0),onLeave(F,_e){F._isLeaving=!0;const Le=()=>V(F,_e);nn(F,d),wy(),nn(F,f),Ou(()=>{F._isLeaving&&(On(F,d),nn(F,p),Pu(k)||Nu(F,s,v,Le))}),Pn(k,[F,Le])},onEnterCancelled(F){W(F,!1),Pn(M,[F])},onAppearCancelled(F){W(F,!0),Pn(A,[F])},onLeaveCancelled(F){V(F),Pn(G,[F])}})}function vy(t){if(t==null)return null;if(he(t))return[Jo(t.enter),Jo(t.leave)];{const e=Jo(t);return[e,e]}}function Jo(t){return Jm(t)}function nn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function On(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Ou(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let yy=0;function Nu(t,e,n,s){const r=t._endId=++yy,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=by(t,e);if(!o)return s();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,f),i()},f=p=>{p.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,f)}function by(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),r=s(`${tn}Delay`),i=s(`${tn}Duration`),o=xu(r,i),a=s(`${or}Delay`),l=s(`${or}Duration`),c=xu(a,l);let u=null,d=0,f=0;e===tn?o>0&&(u=tn,d=o,f=i.length):e===or?c>0&&(u=or,d=c,f=l.length):(d=Math.max(o,c),u=d>0?o>c?tn:or:null,f=u?u===tn?i.length:l.length:0);const p=u===tn&&/\b(transform|all)(,|$)/.test(s(`${tn}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function xu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Mu(n)+Mu(t[s])))}function Mu(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function wy(){return document.body.offsetHeight}const En=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>wi(e,n):e};function Ey(t){t.target.composing=!0}function Du(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const $i={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=En(r);const i=s||r.props&&r.props.type==="number";Ft(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Oi(a)),t._assign(a)}),n&&Ft(t,"change",()=>{t.value=t.value.trim()}),e||(Ft(t,"compositionstart",Ey),Ft(t,"compositionend",Du),Ft(t,"change",Du))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=En(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Oi(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Iy={deep:!0,created(t,e,n){t._assign=En(n),Ft(t,"change",()=>{const s=t._modelValue,r=Ms(t),i=t.checked,o=t._assign;if($(s)){const a=Tl(s,r),l=a!==-1;if(i&&!l)o(s.concat(r));else if(!i&&l){const c=[...s];c.splice(a,1),o(c)}}else if(Vs(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(Th(t,i))})},mounted:Lu,beforeUpdate(t,e,n){t._assign=En(n),Lu(t,e,n)}};function Lu(t,{value:e,oldValue:n},s){t._modelValue=e,$(e)?t.checked=Tl(e,s.props.value)>-1:Vs(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Wn(e,Th(t,!0)))}const Cy={created(t,{value:e},n){t.checked=Wn(e,n.props.value),t._assign=En(n),Ft(t,"change",()=>{t._assign(Ms(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=En(s),e!==n&&(t.checked=Wn(e,s.props.value))}},Sy={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Vs(e);Ft(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Oi(Ms(o)):Ms(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=En(s)},mounted(t,{value:e}){Fu(t,e)},beforeUpdate(t,e,n){t._assign=En(n)},updated(t,{value:e}){Fu(t,e)}};function Fu(t,e){const n=t.multiple;if(!(n&&!$(e)&&!Vs(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=Ms(i);if(n)$(e)?i.selected=Tl(e,o)>-1:i.selected=e.has(o);else if(Wn(Ms(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ms(t){return"_value"in t?t._value:t.value}function Th(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Ty={created(t,e,n){di(t,e,n,null,"created")},mounted(t,e,n){di(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){di(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){di(t,e,n,s,"updated")}};function Ry(t,e){switch(t){case"SELECT":return Sy;case"TEXTAREA":return $i;default:switch(e){case"checkbox":return Iy;case"radio":return Cy;default:return $i}}}function di(t,e,n,s,r){const o=Ry(t.tagName,n.props&&n.props.type)[r];o&&o(t,e,n,s)}const ky=["ctrl","shift","alt","meta"],Ay={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ky.some(n=>t[`${n}Key`]&&!e.includes(n))},Uu=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=Ay[e[r]];if(i&&i(n,e))return}return t(n,...s)},Py={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Oy=(t,e)=>n=>{if(!("key"in n))return;const s=Zn(n.key);if(e.some(r=>r===s||Py[r]===s))return t(n)},Ny=Te({patchProp:gy},ny);let $u;function xy(){return $u||($u=Mv(Ny))}const My=(...t)=>{const e=xy().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Dy(s);if(!r)return;const i=e._component;!q(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Dy(t){return Re(t)?document.querySelector(t):t}const Rh=new Set,Xe=new WeakMap,Ss=new WeakMap,Vn=new WeakMap,Ma=new WeakMap,Ly=new WeakMap,Ds=new WeakMap,ji=new WeakMap,mr=new WeakSet;let Kn;const Ut="__aa_tgt",Da="__aa_del",Fy=t=>{const e=By(t);e&&e.forEach(n=>Wy(n))},Uy=t=>{t.forEach(e=>{e.target===Kn&&jy(),Xe.has(e.target)&&ts(e.target)})};function $y(t){const e=Ma.get(t);e==null||e.disconnect();let n=Xe.get(t),s=0;const r=5;n||(n=Ls(t),Xe.set(t,n));const{offsetWidth:i,offsetHeight:o}=Kn,l=[n.top-r,i-(n.left+r+n.width),o-(n.top+r+n.height),n.left-r].map(u=>`${-1*Math.floor(u)}px`).join(" "),c=new IntersectionObserver(()=>{++s>1&&ts(t)},{root:Kn,threshold:1,rootMargin:l});c.observe(t),Ma.set(t,c)}function ts(t){clearTimeout(ji.get(t));const e=So(t),n=typeof e=="function"?500:e.duration;ji.set(t,setTimeout(async()=>{const s=Vn.get(t);try{await(s==null?void 0:s.finished),Xe.set(t,Ls(t)),$y(t)}catch{}},n))}function jy(){clearTimeout(ji.get(Kn)),ji.set(Kn,setTimeout(()=>{Rh.forEach(t=>Oh(t,e=>kh(()=>ts(e))))},100))}function Hy(t){setTimeout(()=>{Ly.set(t,setInterval(()=>kh(ts.bind(null,t)),2e3))},Math.round(2e3*Math.random()))}function kh(t){typeof requestIdleCallback=="function"?requestIdleCallback(()=>t()):requestAnimationFrame(()=>t())}let La,gs;typeof window<"u"&&(Kn=document.documentElement,La=new MutationObserver(Fy),gs=new ResizeObserver(Uy),gs.observe(Kn));function By(t){return t.reduce((s,r)=>[...s,...Array.from(r.addedNodes),...Array.from(r.removedNodes)],[]).every(s=>s.nodeName==="#comment")?!1:t.reduce((s,r)=>{if(s===!1)return!1;if(r.target instanceof Element){if(Xo(r.target),!s.has(r.target)){s.add(r.target);for(let i=0;i<r.target.children.length;i++){const o=r.target.children.item(i);if(o){if(Da in o)return!1;Xo(r.target,o),s.add(o)}}}if(r.removedNodes.length)for(let i=0;i<r.removedNodes.length;i++){const o=r.removedNodes[i];if(Da in o)return!1;o instanceof Element&&(s.add(o),Xo(r.target,o),Ss.set(o,[r.previousSibling,r.nextSibling]))}}return s},new Set)}function Xo(t,e){!e&&!(Ut in t)?Object.defineProperty(t,Ut,{value:t}):e&&!(Ut in e)&&Object.defineProperty(e,Ut,{value:t})}function Wy(t){var e;const n=t.isConnected,s=Xe.has(t);n&&Ss.has(t)&&Ss.delete(t),Vn.has(t)&&((e=Vn.get(t))===null||e===void 0||e.cancel()),s&&n?Ky(t):s&&!n?Gy(t):zy(t)}function Rt(t){return Number(t.replace(/[^0-9.\-]/g,""))}function Vy(t){let e=t.parentElement;for(;e;){if(e.scrollLeft||e.scrollTop)return{x:e.scrollLeft,y:e.scrollTop};e=e.parentElement}return{x:0,y:0}}function Ls(t){const e=t.getBoundingClientRect(),{x:n,y:s}=Vy(t);return{top:e.top+s,left:e.left+n,width:e.width,height:e.height}}function Ah(t,e,n){let s=e.width,r=e.height,i=n.width,o=n.height;const a=getComputedStyle(t);if(a.getPropertyValue("box-sizing")==="content-box"){const c=Rt(a.paddingTop)+Rt(a.paddingBottom)+Rt(a.borderTopWidth)+Rt(a.borderBottomWidth),u=Rt(a.paddingLeft)+Rt(a.paddingRight)+Rt(a.borderRightWidth)+Rt(a.borderLeftWidth);s-=u,i-=u,r-=c,o-=c}return[s,i,r,o].map(Math.round)}function So(t){return Ut in t&&Ds.has(t[Ut])?Ds.get(t[Ut]):{duration:250,easing:"ease-in-out"}}function Ph(t){if(Ut in t)return t[Ut]}function Gl(t){const e=Ph(t);return e?mr.has(e):!1}function Oh(t,...e){e.forEach(n=>n(t,Ds.has(t)));for(let n=0;n<t.children.length;n++){const s=t.children.item(n);s&&e.forEach(r=>r(s,Ds.has(s)))}}function Ky(t){const e=Xe.get(t),n=Ls(t);if(!Gl(t))return Xe.set(t,n);let s;if(!e)return;const r=So(t);if(typeof r!="function"){const i=e.left-n.left,o=e.top-n.top,[a,l,c,u]=Ah(t,e,n),d={transform:`translate(${i}px, ${o}px)`},f={transform:"translate(0, 0)"};a!==l&&(d.width=`${a}px`,f.width=`${l}px`),c!==u&&(d.height=`${c}px`,f.height=`${u}px`),s=t.animate([d,f],{duration:r.duration,easing:r.easing})}else s=new Animation(r(t,"remain",e,n)),s.play();Vn.set(t,s),Xe.set(t,n),s.addEventListener("finish",ts.bind(null,t))}function zy(t){const e=Ls(t);Xe.set(t,e);const n=So(t);if(!Gl(t))return;let s;typeof n!="function"?s=t.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:n.duration*1.5,easing:"ease-in"}):(s=new Animation(n(t,"add",e)),s.play()),Vn.set(t,s),s.addEventListener("finish",ts.bind(null,t))}function Gy(t){var e;if(!Ss.has(t)||!Xe.has(t))return;const[n,s]=Ss.get(t);Object.defineProperty(t,Da,{value:!0}),s&&s.parentNode&&s.parentNode instanceof Element?s.parentNode.insertBefore(t,s):n&&n.parentNode?n.parentNode.appendChild(t):(e=Ph(t))===null||e===void 0||e.appendChild(t);function r(){var f;t.remove(),Xe.delete(t),Ss.delete(t),Vn.delete(t),(f=Ma.get(t))===null||f===void 0||f.disconnect()}if(!Gl(t))return r();const[i,o,a,l]=qy(t),c=So(t),u=Xe.get(t);let d;Object.assign(t.style,{position:"absolute",top:`${i}px`,left:`${o}px`,width:`${a}px`,height:`${l}px`,margin:0,pointerEvents:"none",transformOrigin:"center",zIndex:100}),typeof c!="function"?d=t.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:c.duration,easing:"ease-out"}):(d=new Animation(c(t,"remove",u)),d.play()),Vn.set(t,d),d.addEventListener("finish",r)}function qy(t){const e=Xe.get(t),[n,,s]=Ah(t,e,Ls(t));let r=t.parentElement;for(;r&&(getComputedStyle(r).position==="static"||r instanceof HTMLBodyElement);)r=r.parentElement;r||(r=document.body);const i=getComputedStyle(r),o=Xe.get(r)||Ls(r),a=Math.round(e.top-o.top)-Rt(i.borderTopWidth),l=Math.round(e.left-o.left)-Rt(i.borderLeftWidth);return[a,l,n,s]}function Yy(t,e={}){return La&&gs&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&typeof e!="function"&&!e.disrespectUserMotionPreference||(mr.add(t),getComputedStyle(t).position==="static"&&Object.assign(t.style,{position:"relative"}),Oh(t,ts,Hy,r=>gs==null?void 0:gs.observe(r)),typeof e=="function"?Ds.set(t,e):Ds.set(t,{duration:250,easing:"ease-in-out",...e}),La.observe(t,{childList:!0}),Rh.add(t))),Object.freeze({parent:t,enable:()=>{mr.add(t)},disable:()=>{mr.delete(t)},isEnabled:()=>mr.has(t)})}const Qy={mounted:(t,e)=>{Yy(t,e.value||{})}},Jy={install(t){t.directive("auto-animate",Qy)}};function Xy(){return Nh().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Nh(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Zy=typeof Proxy=="function",eb="devtools-plugin:setup",tb="plugin:settings:set";let us,Fa;function nb(){var t;return us!==void 0||(typeof window<"u"&&window.performance?(us=!0,Fa=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(us=!0,Fa=global.perf_hooks.performance):us=!1),us}function sb(){return nb()?Fa.now():Date.now()}class rb{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},s);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}i=o},now(){return sb()}},n&&n.on(tb,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function ib(t,e){const n=t,s=Nh(),r=Xy(),i=Zy&&n.enableEarlyProxy;if(r&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))r.emit(eb,t,e);else{const o=i?new rb(n,r):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const xh=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Ys=t=>xh?Symbol(t):"_vr_"+t,ob=Ys("rvlm"),ju=Ys("rvd"),To=Ys("r"),Mh=Ys("rl"),Ua=Ys("rvl"),ps=typeof window<"u";function ab(t){return t.__esModule||xh&&t[Symbol.toStringTag]==="Module"}const pe=Object.assign;function Zo(t,e){const n={};for(const s in e){const r=e[s];n[s]=Array.isArray(r)?r.map(t):t(r)}return n}const Er=()=>{},lb=/\/$/,cb=t=>t.replace(lb,"");function ea(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("?"),l=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),i=e.slice(a+1,l>-1?l:e.length),r=t(i)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=hb(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function ub(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Hu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function db(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Fs(e.matched[s],n.matched[r])&&Dh(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Fs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Dh(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!fb(t[n],e[n]))return!1;return!0}function fb(t,e){return Array.isArray(t)?Bu(t,e):Array.isArray(e)?Bu(e,t):t===e}function Bu(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function hb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Fr;(function(t){t.pop="pop",t.push="push"})(Fr||(Fr={}));var Ir;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ir||(Ir={}));function pb(t){if(!t)if(ps){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),cb(t)}const gb=/^[^#]+#/;function mb(t,e){return t.replace(gb,"#")+e}function _b(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ro=()=>({left:window.pageXOffset,top:window.pageYOffset});function vb(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=_b(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Wu(t,e){return(history.state?history.state.position-e:-1)+t}const $a=new Map;function yb(t,e){$a.set(t,e)}function bb(t){const e=$a.get(t);return $a.delete(t),e}let wb=()=>location.protocol+"//"+location.host;function Lh(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Hu(l,"")}return Hu(n,t)+s+r}function Eb(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const p=Lh(t,location),m=n.value,_=e.value;let v=0;if(f){if(n.value=p,e.value=f,o&&o===m){o=null;return}v=_?f.position-_.position:0}else s(p);r.forEach(C=>{C(n.value,m,{delta:v,type:Fr.pop,direction:v?v>0?Ir.forward:Ir.back:Ir.unknown})})};function l(){o=n.value}function c(f){r.push(f);const p=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return i.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(pe({},f.state,{scroll:Ro()}),"")}function d(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function Vu(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Ro():null}}function Ib(t){const{history:e,location:n}=window,s={value:Lh(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:wb()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(l,c){const u=pe({},e.state,Vu(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});i(l,u,!0),s.value=l}function a(l,c){const u=pe({},r.value,e.state,{forward:l,scroll:Ro()});i(u.current,u,!0);const d=pe({},Vu(s.value,l,null),{position:u.position+1},c);i(l,d,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function Cb(t){t=pb(t);const e=Ib(t),n=Eb(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=pe({location:"",base:t,go:s,createHref:mb.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Sb(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Cb(t)}function Tb(t){return typeof t=="string"||t&&typeof t=="object"}function Fh(t){return typeof t=="string"||typeof t=="symbol"}const sn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Uh=Ys("nf");var Ku;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ku||(Ku={}));function Us(t,e){return pe(new Error,{type:t,[Uh]:!0},e)}function rn(t,e){return t instanceof Error&&Uh in t&&(e==null||!!(t.type&e))}const zu="[^/]+?",Rb={sensitive:!1,strict:!1,start:!0,end:!0},kb=/[.+*?^${}()[\]/\\]/g;function Ab(t,e){const n=pe({},Rb,e),s=[];let r=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const f=c[d];let p=40+(n.sensitive?.25:0);if(f.type===0)d||(r+="/"),r+=f.value.replace(kb,"\\$&"),p+=40;else if(f.type===1){const{value:m,repeatable:_,optional:v,regexp:C}=f;i.push({name:m,repeatable:_,optional:v});const S=C||zu;if(S!==zu){p+=10;try{new RegExp(`(${S})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${m}" (${S}): `+k.message)}}let M=_?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;d||(M=v&&c.length<2?`(?:/${M})`:"/"+M),v&&(M+="?"),r+=M,p+=20,v&&(p+=-8),_&&(p+=-20),S===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",m=i[f-1];d[m.name]=p&&m.repeatable?p.split("/"):p}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:_,optional:v}=p,C=m in c?c[m]:"";if(Array.isArray(C)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const S=Array.isArray(C)?C.join("/"):C;if(!S)if(v)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${m}"`);u+=S}}return u}return{re:o,score:s,keys:i,parse:a,stringify:l}}function Pb(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Ob(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Pb(s[n],r[n]);if(i)return i;n++}return r.length-s.length}const Nb={type:0,value:""},xb=/[a-zA-Z0-9_]/;function Mb(t){if(!t)return[[]];if(t==="/")return[[Nb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,c="",u="";function d(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):f();break;case 4:f(),n=s;break;case 1:l==="("?n=2:xb.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),r}function Db(t,e,n){const s=Ab(Mb(t.path),n),r=pe(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Lb(t,e){const n=[],s=new Map;e=qu({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,d,f){const p=!f,m=Ub(u);m.aliasOf=f&&f.record;const _=qu(e,u),v=[m];if("alias"in u){const M=typeof u.alias=="string"?[u.alias]:u.alias;for(const k of M)v.push(pe({},m,{components:f?f.record.components:m.components,path:k,aliasOf:f?f.record:m}))}let C,S;for(const M of v){const{path:k}=M;if(d&&k[0]!=="/"){const G=d.record.path,U=G[G.length-1]==="/"?"":"/";M.path=d.record.path+(k&&U+k)}if(C=Db(M,d,_),f?f.alias.push(C):(S=S||C,S!==C&&S.alias.push(C),p&&u.name&&!Gu(C)&&o(u.name)),"children"in m){const G=m.children;for(let U=0;U<G.length;U++)i(G[U],C,f&&f.children[U])}f=f||C,l(C)}return S?()=>{o(S)}:Er}function o(u){if(Fh(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&Ob(u,n[d])>=0&&(u.record.path!==n[d].record.path||!$h(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Gu(u)&&s.set(u.record.name,u)}function c(u,d){let f,p={},m,_;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Us(1,{location:u});_=f.record.name,p=pe(Fb(d.params,f.keys.filter(S=>!S.optional).map(S=>S.name)),u.params),m=f.stringify(p)}else if("path"in u)m=u.path,f=n.find(S=>S.re.test(m)),f&&(p=f.parse(m),_=f.record.name);else{if(f=d.name?s.get(d.name):n.find(S=>S.re.test(d.path)),!f)throw Us(1,{location:u,currentLocation:d});_=f.record.name,p=pe({},d.params,u.params),m=f.stringify(p)}const v=[];let C=f;for(;C;)v.unshift(C.record),C=C.parent;return{name:_,path:m,params:p,matched:v,meta:jb(v)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Fb(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Ub(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:$b(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function $b(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Gu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function jb(t){return t.reduce((e,n)=>pe(e,n.meta),{})}function qu(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function $h(t,e){return e.children.some(n=>n===t||$h(t,n))}const jh=/#/g,Hb=/&/g,Bb=/\//g,Wb=/=/g,Vb=/\?/g,Hh=/\+/g,Kb=/%5B/g,zb=/%5D/g,Bh=/%5E/g,Gb=/%60/g,Wh=/%7B/g,qb=/%7C/g,Vh=/%7D/g,Yb=/%20/g;function ql(t){return encodeURI(""+t).replace(qb,"|").replace(Kb,"[").replace(zb,"]")}function Qb(t){return ql(t).replace(Wh,"{").replace(Vh,"}").replace(Bh,"^")}function ja(t){return ql(t).replace(Hh,"%2B").replace(Yb,"+").replace(jh,"%23").replace(Hb,"%26").replace(Gb,"`").replace(Wh,"{").replace(Vh,"}").replace(Bh,"^")}function Jb(t){return ja(t).replace(Wb,"%3D")}function Xb(t){return ql(t).replace(jh,"%23").replace(Vb,"%3F")}function Zb(t){return t==null?"":Xb(t).replace(Bb,"%2F")}function Hi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function ew(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Hh," "),o=i.indexOf("="),a=Hi(o<0?i:i.slice(0,o)),l=o<0?null:Hi(i.slice(o+1));if(a in e){let c=e[a];Array.isArray(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Yu(t){let e="";for(let n in t){const s=t[n];if(n=Jb(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(i=>i&&ja(i)):[s&&ja(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function tw(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}function ar(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ln(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(Us(4,{from:n,to:e})):d instanceof Error?a(d):Tb(d)?a(Us(2,{from:e,to:d})):(i&&s.enterCallbacks[r]===i&&typeof d=="function"&&i.push(d),o())},c=t.call(s&&s.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function ta(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(nw(a)){const c=(a.__vccOpts||a)[e];c&&r.push(ln(c,n,s,i,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=ab(c)?c.default:c;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&ln(f,n,s,i,o)()}))}}return r}function nw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Qu(t){const e=Je(To),n=Je(Mh),s=ae(()=>e.resolve(Es(t.to))),r=ae(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Fs.bind(null,u));if(f>-1)return f;const p=Ju(l[c-2]);return c>1&&Ju(u)===p&&d[d.length-1].path!==p?d.findIndex(Fs.bind(null,l[c-2])):f}),i=ae(()=>r.value>-1&&ow(n.params,s.value.params)),o=ae(()=>r.value>-1&&r.value===n.matched.length-1&&Dh(n.params,s.value.params));function a(l={}){return iw(l)?e[Es(t.replace)?"replace":"push"](Es(t.to)).catch(Er):Promise.resolve()}return{route:s,href:ae(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const sw=Qt({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Qu,setup(t,{slots:e}){const n=Gs(Qu(t)),{options:s}=Je(To),r=ae(()=>({[Xu(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Xu(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:wn("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),rw=sw;function iw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ow(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Ju(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Xu=(t,e,n)=>t??e??n,aw=Qt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=Je(Ua),r=ae(()=>t.route||s.value),i=Je(ju,0),o=ae(()=>r.value.matched[i]);Cs(ju,i+1),Cs(ob,o),Cs(Ua,r);const a=Q();return Ot(()=>[a.value,o.value,t.name],([l,c,u],[d,f,p])=>{c&&(c.instances[u]=l,f&&f!==c&&l&&l===d&&(c.leaveGuards.size||(c.leaveGuards=f.leaveGuards),c.updateGuards.size||(c.updateGuards=f.updateGuards))),l&&c&&(!f||!Fs(c,f)||!d)&&(c.enterCallbacks[u]||[]).forEach(m=>m(l))},{flush:"post"}),()=>{const l=r.value,c=o.value,u=c&&c.components[t.name],d=t.name;if(!u)return Zu(n.default,{Component:u,route:l});const f=c.props[t.name],p=f?f===!0?l.params:typeof f=="function"?f(l):f:null,_=wn(u,pe({},p,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(c.instances[d]=null)},ref:a}));return Zu(n.default,{Component:_,route:l})||_}}});function Zu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const lw=aw;function cw(t){const e=Lb(t.routes,t),n=t.parseQuery||ew,s=t.stringifyQuery||Yu,r=t.history,i=ar(),o=ar(),a=ar(),l=Qf(sn);let c=sn;ps&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Zo.bind(null,w=>""+w),d=Zo.bind(null,Zb),f=Zo.bind(null,Hi);function p(w,D){let N,j;return Fh(w)?(N=e.getRecordMatcher(w),j=D):j=w,e.addRoute(j,N)}function m(w){const D=e.getRecordMatcher(w);D&&e.removeRoute(D)}function _(){return e.getRoutes().map(w=>w.record)}function v(w){return!!e.getRecordMatcher(w)}function C(w,D){if(D=pe({},D||l.value),typeof w=="string"){const h=ea(n,w,D.path),g=e.resolve({path:h.path},D),y=r.createHref(h.fullPath);return pe(h,g,{params:f(g.params),hash:Hi(h.hash),redirectedFrom:void 0,href:y})}let N;if("path"in w)N=pe({},w,{path:ea(n,w.path,D.path).path});else{const h=pe({},w.params);for(const g in h)h[g]==null&&delete h[g];N=pe({},w,{params:d(w.params)}),D.params=d(D.params)}const j=e.resolve(N,D),ie=w.hash||"";j.params=u(f(j.params));const Ie=ub(s,pe({},w,{hash:Qb(ie),path:j.path})),J=r.createHref(Ie);return pe({fullPath:Ie,hash:ie,query:s===Yu?tw(w.query):w.query||{}},j,{redirectedFrom:void 0,href:J})}function S(w){return typeof w=="string"?ea(n,w,l.value.path):pe({},w)}function M(w,D){if(c!==w)return Us(8,{from:D,to:w})}function k(w){return Y(w)}function G(w){return k(pe(S(w),{replace:!0}))}function U(w){const D=w.matched[w.matched.length-1];if(D&&D.redirect){const{redirect:N}=D;let j=typeof N=="function"?N(w):N;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=S(j):{path:j},j.params={}),pe({query:w.query,hash:w.hash,params:w.params},j)}}function Y(w,D){const N=c=C(w),j=l.value,ie=w.state,Ie=w.force,J=w.replace===!0,h=U(N);if(h)return Y(pe(S(h),{state:ie,force:Ie,replace:J}),D||N);const g=N;g.redirectedFrom=D;let y;return!Ie&&db(s,j,N)&&(y=Us(16,{to:g,from:j}),Rn(j,j,!0,!1)),(y?Promise.resolve(y):W(g,j)).catch(b=>rn(b)?rn(b,2)?b:ft(b):ge(b,g,j)).then(b=>{if(b){if(rn(b,2))return Y(pe(S(b.to),{state:ie,force:Ie,replace:J}),D||g)}else b=ke(g,j,!0,J,ie);return V(g,j,b),b})}function A(w,D){const N=M(w,D);return N?Promise.reject(N):Promise.resolve()}function W(w,D){let N;const[j,ie,Ie]=uw(w,D);N=ta(j.reverse(),"beforeRouteLeave",w,D);for(const h of j)h.leaveGuards.forEach(g=>{N.push(ln(g,w,D))});const J=A.bind(null,w,D);return N.push(J),ds(N).then(()=>{N=[];for(const h of i.list())N.push(ln(h,w,D));return N.push(J),ds(N)}).then(()=>{N=ta(ie,"beforeRouteUpdate",w,D);for(const h of ie)h.updateGuards.forEach(g=>{N.push(ln(g,w,D))});return N.push(J),ds(N)}).then(()=>{N=[];for(const h of w.matched)if(h.beforeEnter&&!D.matched.includes(h))if(Array.isArray(h.beforeEnter))for(const g of h.beforeEnter)N.push(ln(g,w,D));else N.push(ln(h.beforeEnter,w,D));return N.push(J),ds(N)}).then(()=>(w.matched.forEach(h=>h.enterCallbacks={}),N=ta(Ie,"beforeRouteEnter",w,D),N.push(J),ds(N))).then(()=>{N=[];for(const h of o.list())N.push(ln(h,w,D));return N.push(J),ds(N)}).catch(h=>rn(h,8)?h:Promise.reject(h))}function V(w,D,N){for(const j of a.list())j(w,D,N)}function ke(w,D,N,j,ie){const Ie=M(w,D);if(Ie)return Ie;const J=D===sn,h=ps?history.state:{};N&&(j||J?r.replace(w.fullPath,pe({scroll:J&&h&&h.scroll},ie)):r.push(w.fullPath,ie)),l.value=w,Rn(w,D,N,J),ft()}let F;function _e(){F=r.listen((w,D,N)=>{const j=C(w),ie=U(j);if(ie){Y(pe(ie,{replace:!0}),j).catch(Er);return}c=j;const Ie=l.value;ps&&yb(Wu(Ie.fullPath,N.delta),Ro()),W(j,Ie).catch(J=>rn(J,12)?J:rn(J,2)?(Y(J.to,j).then(h=>{rn(h,20)&&!N.delta&&N.type===Fr.pop&&r.go(-1,!1)}).catch(Er),Promise.reject()):(N.delta&&r.go(-N.delta,!1),ge(J,j,Ie))).then(J=>{J=J||ke(j,Ie,!1),J&&(N.delta?r.go(-N.delta,!1):N.type===Fr.pop&&rn(J,20)&&r.go(-1,!1)),V(j,Ie,J)}).catch(Er)})}let Le=ar(),Zt=ar(),Ee;function ge(w,D,N){ft(w);const j=Zt.list();return j.length?j.forEach(ie=>ie(w,D,N)):console.error(w),Promise.reject(w)}function ce(){return Ee&&l.value!==sn?Promise.resolve():new Promise((w,D)=>{Le.add([w,D])})}function ft(w){return Ee||(Ee=!w,_e(),Le.list().forEach(([D,N])=>w?N(w):D()),Le.reset()),w}function Rn(w,D,N,j){const{scrollBehavior:ie}=t;if(!ps||!ie)return Promise.resolve();const Ie=!N&&bb(Wu(w.fullPath,0))||(j||!N)&&history.state&&history.state.scroll||null;return bt().then(()=>ie(w,D,Ie)).then(J=>J&&vb(J)).catch(J=>ge(J,w,D))}const ht=w=>r.go(w);let Ge;const as=new Set;return{currentRoute:l,addRoute:p,removeRoute:m,hasRoute:v,getRoutes:_,resolve:C,options:t,push:k,replace:G,go:ht,back:()=>ht(-1),forward:()=>ht(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Zt.add,isReady:ce,install(w){const D=this;w.component("RouterLink",rw),w.component("RouterView",lw),w.config.globalProperties.$router=D,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>Es(l)}),ps&&!Ge&&l.value===sn&&(Ge=!0,k(r.location).catch(ie=>{}));const N={};for(const ie in sn)N[ie]=ae(()=>l.value[ie]);w.provide(To,D),w.provide(Mh,Gs(N)),w.provide(Ua,l);const j=w.unmount;as.add(w),w.unmount=function(){as.delete(w),as.size<1&&(c=sn,F&&F(),l.value=sn,Ge=!1,Ee=!1),j()}}}}function ds(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function uw(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Fs(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Fs(c,l))||r.push(l))}return[n,s,r]}function Kh(){return Je(To)}const Cr=/^[a-z0-9]+(-[a-z0-9]+)*$/,ko=(t,e,n,s="")=>{const r=t.split(":");if(t.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;s=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const a=r.pop(),l=r.pop(),c={provider:r.length>0?r[0]:s,prefix:l,name:a};return e&&!Ii(c)?null:c}const i=r[0],o=i.split("-");if(o.length>1){const a={provider:s,prefix:o.shift(),name:o.join("-")};return e&&!Ii(a)?null:a}if(n&&s===""){const a={provider:s,prefix:"",name:i};return e&&!Ii(a,n)?null:a}return null},Ii=(t,e)=>t?!!((t.provider===""||t.provider.match(Cr))&&(e&&t.prefix===""||t.prefix.match(Cr))&&t.name.match(Cr)):!1,zh=Object.freeze({left:0,top:0,width:16,height:16}),Bi=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Ao=Object.freeze({...zh,...Bi}),Ha=Object.freeze({...Ao,body:"",hidden:!1});function dw(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const s=((t.rotate||0)+(e.rotate||0))%4;return s&&(n.rotate=s),n}function ed(t,e){const n=dw(t,e);for(const s in Ha)s in Bi?s in t&&!(s in n)&&(n[s]=Bi[s]):s in e?n[s]=e[s]:s in t&&(n[s]=t[s]);return n}function fw(t,e){const n=t.icons,s=t.aliases||Object.create(null),r=Object.create(null);function i(o){if(n[o])return r[o]=[];if(!(o in r)){r[o]=null;const a=s[o]&&s[o].parent,l=a&&i(a);l&&(r[o]=[a].concat(l))}return r[o]}return(e||Object.keys(n).concat(Object.keys(s))).forEach(i),r}function hw(t,e,n){const s=t.icons,r=t.aliases||Object.create(null);let i={};function o(a){i=ed(s[a]||r[a],i)}return o(e),n.forEach(o),ed(t,i)}function Gh(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(r=>{e(r,null),n.push(r)});const s=fw(t);for(const r in s){const i=s[r];i&&(e(r,hw(t,r,i)),n.push(r))}return n}const pw={provider:"",aliases:{},not_found:{},...zh};function na(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function qh(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!na(t,pw))return null;const n=e.icons;for(const r in n){const i=n[r];if(!r.match(Cr)||typeof i.body!="string"||!na(i,Ha))return null}const s=e.aliases||Object.create(null);for(const r in s){const i=s[r],o=i.parent;if(!r.match(Cr)||typeof o!="string"||!n[o]&&!s[o]||!na(i,Ha))return null}return e}const td=Object.create(null);function gw(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function zn(t,e){const n=td[t]||(td[t]=Object.create(null));return n[e]||(n[e]=gw(t,e))}function Yl(t,e){return qh(e)?Gh(e,(n,s)=>{s?t.icons[n]=s:t.missing.add(n)}):[]}function mw(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let Ur=!1;function Yh(t){return typeof t=="boolean"&&(Ur=t),Ur}function _w(t){const e=typeof t=="string"?ko(t,!0,Ur):t;if(e){const n=zn(e.provider,e.prefix),s=e.name;return n.icons[s]||(n.missing.has(s)?null:void 0)}}function vw(t,e){const n=ko(t,!0,Ur);if(!n)return!1;const s=zn(n.provider,n.prefix);return mw(s,n.name,e)}function yw(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),Ur&&!e&&!t.prefix){let r=!1;return qh(t)&&(t.prefix="",Gh(t,(i,o)=>{o&&vw(i,o)&&(r=!0)})),r}const n=t.prefix;if(!Ii({provider:e,prefix:n,name:"a"}))return!1;const s=zn(e,n);return!!Yl(s,t)}const Qh=Object.freeze({width:null,height:null}),Jh=Object.freeze({...Qh,...Bi}),bw=/(-?[0-9.]*[0-9]+[0-9.]*)/g,ww=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function nd(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const s=t.split(bw);if(s===null||!s.length)return t;const r=[];let i=s.shift(),o=ww.test(i);for(;;){if(o){const a=parseFloat(i);isNaN(a)?r.push(i):r.push(Math.ceil(a*e*n)/n)}else r.push(i);if(i=s.shift(),i===void 0)return r.join("");o=!o}}const Ew=t=>t==="unset"||t==="undefined"||t==="none";function Iw(t,e){const n={...Ao,...t},s={...Jh,...e},r={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,s].forEach(m=>{const _=[],v=m.hFlip,C=m.vFlip;let S=m.rotate;v?C?S+=2:(_.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),_.push("scale(-1 1)"),r.top=r.left=0):C&&(_.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),_.push("scale(1 -1)"),r.top=r.left=0);let M;switch(S<0&&(S-=Math.floor(S/4)*4),S=S%4,S){case 1:M=r.height/2+r.top,_.unshift("rotate(90 "+M.toString()+" "+M.toString()+")");break;case 2:_.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:M=r.width/2+r.left,_.unshift("rotate(-90 "+M.toString()+" "+M.toString()+")");break}S%2===1&&(r.left!==r.top&&(M=r.left,r.left=r.top,r.top=M),r.width!==r.height&&(M=r.width,r.width=r.height,r.height=M)),_.length&&(i='<g transform="'+_.join(" ")+'">'+i+"</g>")});const o=s.width,a=s.height,l=r.width,c=r.height;let u,d;o===null?(d=a===null?"1em":a==="auto"?c:a,u=nd(d,l/c)):(u=o==="auto"?l:o,d=a===null?nd(u,c/l):a==="auto"?c:a);const f={},p=(m,_)=>{Ew(_)||(f[m]=_.toString())};return p("width",u),p("height",d),f.viewBox=r.left.toString()+" "+r.top.toString()+" "+l.toString()+" "+c.toString(),{attributes:f,body:i}}const Cw=/\sid="(\S+)"/g,Sw="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Tw=0;function Rw(t,e=Sw){const n=[];let s;for(;s=Cw.exec(t);)n.push(s[1]);if(!n.length)return t;const r="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const o=typeof e=="function"?e(i):e+(Tw++).toString(),a=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+o+r+"$3")}),t=t.replace(new RegExp(r,"g"),""),t}const Ba=Object.create(null);function kw(t,e){Ba[t]=e}function Wa(t){return Ba[t]||Ba[""]}function Ql(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const Jl=Object.create(null),lr=["https://api.simplesvg.com","https://api.unisvg.com"],Ci=[];for(;lr.length>0;)lr.length===1||Math.random()>.5?Ci.push(lr.shift()):Ci.push(lr.pop());Jl[""]=Ql({resources:["https://api.iconify.design"].concat(Ci)});function Aw(t,e){const n=Ql(e);return n===null?!1:(Jl[t]=n,!0)}function Xl(t){return Jl[t]}const Pw=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let sd=Pw();function Ow(t,e){const n=Xl(t);if(!n)return 0;let s;if(!n.maxURL)s=0;else{let r=0;n.resources.forEach(o=>{r=Math.max(r,o.length)});const i=e+".json?icons=";s=n.maxURL-r-n.path.length-i.length}return s}function Nw(t){return t===404}const xw=(t,e,n)=>{const s=[],r=Ow(t,e),i="icons";let o={type:i,provider:t,prefix:e,icons:[]},a=0;return n.forEach((l,c)=>{a+=l.length+1,a>=r&&c>0&&(s.push(o),o={type:i,provider:t,prefix:e,icons:[]},a=l.length),o.icons.push(l)}),s.push(o),s};function Mw(t){if(typeof t=="string"){const e=Xl(t);if(e)return e.path}return"/"}const Dw=(t,e,n)=>{if(!sd){n("abort",424);return}let s=Mw(e.provider);switch(e.type){case"icons":{const i=e.prefix,a=e.icons.join(","),l=new URLSearchParams({icons:a});s+=i+".json?"+l.toString();break}case"custom":{const i=e.uri;s+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let r=503;sd(t+s).then(i=>{const o=i.status;if(o!==200){setTimeout(()=>{n(Nw(o)?"abort":"next",o)});return}return r=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",r)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",r)})},Lw={prepare:xw,send:Dw};function Fw(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((r,i)=>r.provider!==i.provider?r.provider.localeCompare(i.provider):r.prefix!==i.prefix?r.prefix.localeCompare(i.prefix):r.name.localeCompare(i.name));let s={provider:"",prefix:"",name:""};return t.forEach(r=>{if(s.name===r.name&&s.prefix===r.prefix&&s.provider===r.provider)return;s=r;const i=r.provider,o=r.prefix,a=r.name,l=n[i]||(n[i]=Object.create(null)),c=l[o]||(l[o]=zn(i,o));let u;a in c.icons?u=e.loaded:o===""||c.missing.has(a)?u=e.missing:u=e.pending;const d={provider:i,prefix:o,name:a};u.push(d)}),e}function Xh(t,e){t.forEach(n=>{const s=n.loaderCallbacks;s&&(n.loaderCallbacks=s.filter(r=>r.id!==e))})}function Uw(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const s=t.provider,r=t.prefix;e.forEach(i=>{const o=i.icons,a=o.pending.length;o.pending=o.pending.filter(l=>{if(l.prefix!==r)return!0;const c=l.name;if(t.icons[c])o.loaded.push({provider:s,prefix:r,name:c});else if(t.missing.has(c))o.missing.push({provider:s,prefix:r,name:c});else return n=!0,!0;return!1}),o.pending.length!==a&&(n||Xh([t],i.id),i.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),i.abort))})}))}let $w=0;function jw(t,e,n){const s=$w++,r=Xh.bind(null,n,s);if(!e.pending.length)return r;const i={id:s,icons:e,callback:t,abort:r};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(i)}),r}function Hw(t,e=!0,n=!1){const s=[];return t.forEach(r=>{const i=typeof r=="string"?ko(r,e,n):r;i&&s.push(i)}),s}var Bw={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Ww(t,e,n,s){const r=t.resources.length,i=t.random?Math.floor(Math.random()*r):t.index;let o;if(t.random){let U=t.resources.slice(0);for(o=[];U.length>1;){const Y=Math.floor(Math.random()*U.length);o.push(U[Y]),U=U.slice(0,Y).concat(U.slice(Y+1))}o=o.concat(U)}else o=t.resources.slice(i).concat(t.resources.slice(0,i));const a=Date.now();let l="pending",c=0,u,d=null,f=[],p=[];typeof s=="function"&&p.push(s);function m(){d&&(clearTimeout(d),d=null)}function _(){l==="pending"&&(l="aborted"),m(),f.forEach(U=>{U.status==="pending"&&(U.status="aborted")}),f=[]}function v(U,Y){Y&&(p=[]),typeof U=="function"&&p.push(U)}function C(){return{startTime:a,payload:e,status:l,queriesSent:c,queriesPending:f.length,subscribe:v,abort:_}}function S(){l="failed",p.forEach(U=>{U(void 0,u)})}function M(){f.forEach(U=>{U.status==="pending"&&(U.status="aborted")}),f=[]}function k(U,Y,A){const W=Y!=="success";switch(f=f.filter(V=>V!==U),l){case"pending":break;case"failed":if(W||!t.dataAfterTimeout)return;break;default:return}if(Y==="abort"){u=A,S();return}if(W){u=A,f.length||(o.length?G():S());return}if(m(),M(),!t.random){const V=t.resources.indexOf(U.resource);V!==-1&&V!==t.index&&(t.index=V)}l="completed",p.forEach(V=>{V(A)})}function G(){if(l!=="pending")return;m();const U=o.shift();if(U===void 0){if(f.length){d=setTimeout(()=>{m(),l==="pending"&&(M(),S())},t.timeout);return}S();return}const Y={status:"pending",resource:U,callback:(A,W)=>{k(Y,A,W)}};f.push(Y),c++,d=setTimeout(G,t.rotate),n(U,e,Y.callback)}return setTimeout(G),C}function Zh(t){const e={...Bw,...t};let n=[];function s(){n=n.filter(a=>a().status==="pending")}function r(a,l,c){const u=Ww(e,a,l,(d,f)=>{s(),c&&c(d,f)});return n.push(u),u}function i(a){return n.find(l=>a(l))||null}return{query:r,find:i,setIndex:a=>{e.index=a},getIndex:()=>e.index,cleanup:s}}function rd(){}const sa=Object.create(null);function Vw(t){if(!sa[t]){const e=Xl(t);if(!e)return;const n=Zh(e),s={config:e,redundancy:n};sa[t]=s}return sa[t]}function Kw(t,e,n){let s,r;if(typeof t=="string"){const i=Wa(t);if(!i)return n(void 0,424),rd;r=i.send;const o=Vw(t);o&&(s=o.redundancy)}else{const i=Ql(t);if(i){s=Zh(i);const o=t.resources?t.resources[0]:"",a=Wa(o);a&&(r=a.send)}}return!s||!r?(n(void 0,424),rd):s.query(e,r,n)().abort}const id="iconify2",$r="iconify",ep=$r+"-count",od=$r+"-version",tp=36e5,zw=168;function Va(t,e){try{return t.getItem(e)}catch{}}function Zl(t,e,n){try{return t.setItem(e,n),!0}catch{}}function ad(t,e){try{t.removeItem(e)}catch{}}function Ka(t,e){return Zl(t,ep,e.toString())}function za(t){return parseInt(Va(t,ep))||0}const Po={local:!0,session:!0},np={local:new Set,session:new Set};let ec=!1;function Gw(t){ec=t}let fi=typeof window>"u"?{}:window;function sp(t){const e=t+"Storage";try{if(fi&&fi[e]&&typeof fi[e].length=="number")return fi[e]}catch{}Po[t]=!1}function rp(t,e){const n=sp(t);if(!n)return;const s=Va(n,od);if(s!==id){if(s){const a=za(n);for(let l=0;l<a;l++)ad(n,$r+l.toString())}Zl(n,od,id),Ka(n,0);return}const r=Math.floor(Date.now()/tp)-zw,i=a=>{const l=$r+a.toString(),c=Va(n,l);if(typeof c=="string"){try{const u=JSON.parse(c);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>r&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&e(u,a))return!0}catch{}ad(n,l)}};let o=za(n);for(let a=o-1;a>=0;a--)i(a)||(a===o-1?(o--,Ka(n,o)):np[t].add(a))}function ip(){if(!ec){Gw(!0);for(const t in Po)rp(t,e=>{const n=e.data,s=e.provider,r=n.prefix,i=zn(s,r);if(!Yl(i,n).length)return!1;const o=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,o):o,!0})}}function qw(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const s in Po)rp(s,r=>{const i=r.data;return r.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===e});return!0}function Yw(t,e){ec||ip();function n(s){let r;if(!Po[s]||!(r=sp(s)))return;const i=np[s];let o;if(i.size)i.delete(o=Array.from(i).shift());else if(o=za(r),!Ka(r,o+1))return;const a={cached:Math.floor(Date.now()/tp),provider:t.provider,data:e};return Zl(r,$r+o.toString(),JSON.stringify(a))}e.lastModified&&!qw(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function ld(){}function Qw(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,Uw(t)}))}function Jw(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:s}=t,r=t.iconsToLoad;delete t.iconsToLoad;let i;if(!r||!(i=Wa(n)))return;i.prepare(n,s,r).forEach(a=>{Kw(n,a,l=>{if(typeof l!="object")a.icons.forEach(c=>{t.missing.add(c)});else try{const c=Yl(t,l);if(!c.length)return;const u=t.pendingIcons;u&&c.forEach(d=>{u.delete(d)}),Yw(t,l)}catch(c){console.error(c)}Qw(t)})})}))}const Xw=(t,e)=>{const n=Hw(t,!0,Yh()),s=Fw(n);if(!s.pending.length){let l=!0;return e&&setTimeout(()=>{l&&e(s.loaded,s.missing,s.pending,ld)}),()=>{l=!1}}const r=Object.create(null),i=[];let o,a;return s.pending.forEach(l=>{const{provider:c,prefix:u}=l;if(u===a&&c===o)return;o=c,a=u,i.push(zn(c,u));const d=r[c]||(r[c]=Object.create(null));d[u]||(d[u]=[])}),s.pending.forEach(l=>{const{provider:c,prefix:u,name:d}=l,f=zn(c,u),p=f.pendingIcons||(f.pendingIcons=new Set);p.has(d)||(p.add(d),r[c][u].push(d))}),i.forEach(l=>{const{provider:c,prefix:u}=l;r[c][u].length&&Jw(l,r[c][u])}),e?jw(e,s,i):ld};function Zw(t,e){const n={...t};for(const s in e){const r=e[s],i=typeof r;s in Qh?(r===null||r&&(i==="string"||i==="number"))&&(n[s]=r):i===typeof n[s]&&(n[s]=s==="rotate"?r%4:r)}return n}const eE=/[\s,]+/;function tE(t,e){e.split(eE).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function nE(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function s(r){for(;r<0;)r+=4;return r%4}if(n===""){const r=parseInt(t);return isNaN(r)?0:s(r)}else if(n!==t){let r=0;switch(n){case"%":r=25;break;case"deg":r=90}if(r){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/r,i%1===0?s(i):0)}}return e}function sE(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in e)n+=" "+s+'="'+e[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function rE(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function iE(t){return"data:image/svg+xml,"+rE(t)}function oE(t){return'url("'+iE(t)+'")'}const cd={...Jh,inline:!1},aE={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},lE={display:"inline-block"},Ga={backgroundColor:"currentColor"},op={backgroundColor:"transparent"},ud={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},dd={webkitMask:Ga,mask:Ga,background:op};for(const t in dd){const e=dd[t];for(const n in ud)e[t+n]=ud[n]}const Si={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";Si[t+"-flip"]=e,Si[t.slice(0,1)+"-flip"]=e,Si[t+"Flip"]=e});function fd(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const hd=(t,e)=>{const n=Zw(cd,e),s={...aE},r=e.mode||"svg",i={},o=e.style,a=typeof o=="object"&&!(o instanceof Array)?o:{};for(let _ in e){const v=e[_];if(v!==void 0)switch(_){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[_]=v===!0||v==="true"||v===1;break;case"flip":typeof v=="string"&&tE(n,v);break;case"color":i.color=v;break;case"rotate":typeof v=="string"?n[_]=nE(v):typeof v=="number"&&(n[_]=v);break;case"ariaHidden":case"aria-hidden":v!==!0&&v!=="true"&&delete s["aria-hidden"];break;default:{const C=Si[_];C?(v===!0||v==="true"||v===1)&&(n[C]=!0):cd[_]===void 0&&(s[_]=v)}}}const l=Iw(t,n),c=l.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),r==="svg"){s.style={...i,...a},Object.assign(s,c);let _=0,v=e.id;return typeof v=="string"&&(v=v.replace(/-/g,"_")),s.innerHTML=Rw(l.body,v?()=>v+"ID"+_++:"iconifyVue"),wn("svg",s)}const{body:u,width:d,height:f}=t,p=r==="mask"||(r==="bg"?!1:u.indexOf("currentColor")!==-1),m=sE(u,{...c,width:d+"",height:f+""});return s.style={...i,"--svg":oE(m),width:fd(c.width),height:fd(c.height),...lE,...p?Ga:op,...a},wn("span",s)};Yh(!0);kw("",Lw);if(typeof document<"u"&&typeof window<"u"){ip();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(s=>{try{(typeof s!="object"||s===null||s instanceof Array||typeof s.icons!="object"||typeof s.prefix!="string"||!yw(s))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const s="IconifyProviders["+n+"] is invalid.";try{const r=e[n];if(typeof r!="object"||!r||r.resources===void 0)continue;Aw(n,r)||console.error(s)}catch{console.error(s)}}}}const cE={...Ao,body:""},tc=Qt({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let n;if(typeof t!="string"||(n=ko(t,!1,!0))===null)return this.abortLoading(),null;const s=_w(n);if(!s)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",s!==null&&(this._loadingIcon={name:t,abort:Xw([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t));const r=["iconify"];return n.prefix!==""&&r.push("iconify--"+n.prefix),n.provider!==""&&r.push("iconify--"+n.provider),{data:s,classes:r}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted?this.getIcon(t.icon,t.onLoad):null;if(!e)return hd(cE,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),hd({...Ao,...e.data},n)}}),Dt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},uE={components:{Icon:tc},setup(t,e){const n=Q("Login"),s=Q("Signup Instead"),r=Q(""),i=Q(""),o=Q(!1);function a(){n.value==="Login"?(n.value="Signup",s.value="Login Instead"):(n.value="Login",s.value="Signup Instead")}function l(){e.emit("emit-user",[r.value,i.value,n.value]),r.value="",i.value=""}function c(){o.value===!1?o.value=!0:o.value===!0&&(o.value=!1)}return{buttonPrimary:n,buttonSecondary:s,switchText:a,emitUser:l,username:r,password:i,showHide:o,showHidePassword:c}}},dE={class:"relative mb-3"},fE=Z("label",{for:"email",class:"pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"},"Email address",-1),hE={class:"relative mb-3"},pE=["type"],gE={class:"py-1"},mE=Z("label",{for:"showPassword",class:"p-1 dark:text-white"},"Show Password",-1),_E=Z("label",{for:"password",class:"pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"},"Password",-1),vE={class:"p-0.5"},yE={class:"p-0.5"};function bE(t,e,n,s,r,i){const o=Ke("base-button");return Fe(),Ye("form",null,[Z("div",dE,[Sa(Z("input",{type:"text",class:"peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]",id:"email",placeholder:"name@example.com","onUpdate:modelValue":e[0]||(e[0]=a=>s.username=a)},null,512),[[$i,s.username]]),fE]),Z("div",hE,[Sa(Z("input",{type:s.showHide?"text":"password",class:"peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] bg-",id:"password",placeholder:"Password","onUpdate:modelValue":e[1]||(e[1]=a=>s.password=a)},null,8,pE),[[Ty,s.password]]),Z("div",gE,[Z("input",{type:"checkbox",id:"showPassword",onChange:e[2]||(e[2]=(...a)=>s.showHidePassword&&s.showHidePassword(...a))},null,32),mE]),_E]),Z("span",vE,[oe(o,{onClick:Uu(s.emitUser,["prevent"]),class:"font-semibold"},{default:st(()=>[gn(Ni(s.buttonPrimary),1)]),_:1},8,["onClick"])]),Z("span",yE,[oe(o,{onClick:Uu(s.switchText,["prevent"]),class:"font-semibold"},{default:st(()=>[gn(Ni(s.buttonSecondary),1)]),_:1},8,["onClick"])])])}const wE=Dt(uE,[["render",bE]]);const EE={},IE={class:"text-base text-red-600"};function CE(t,e){return Fe(),Ye("div",null,[oe(zl,{name:"message"},{default:st(()=>[Z("p",IE,[wo(t.$slots,"default",{},void 0,!0)])]),_:3})])}const SE=Dt(EE,[["render",CE],["__scopeId","data-v-e583e2cf"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=function(t,e){if(!t)throw Qs(e)},Qs=function(t){return new Error("Firebase Database ("+ap.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},TE=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},nc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),s.push(n[u],n[d],n[f],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):TE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||d==null)throw new RE;const f=i<<2|a>>4;if(s.push(f),c!==64){const p=a<<4&240|c>>2;if(s.push(p),d!==64){const m=c<<6&192|d;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class RE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cp=function(t){const e=lp(t);return nc.encodeByteArray(e,!0)},Wi=function(t){return cp(t).replace(/\./g,"")},Vi=function(t){try{return nc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(t){return up(void 0,t)}function up(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!AE(n)||(t[n]=up(t[n],e[n]));return t}function AE(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE=()=>PE().__FIREBASE_DEFAULTS__,NE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vi(t[1]);return e&&JSON.parse(e)},sc=()=>{try{return OE()||NE()||xE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dp=t=>{var e,n;return(n=(e=sc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ME=t=>{const e=dp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},fp=()=>{var t;return(t=sc())===null||t===void 0?void 0:t.config},hp=t=>{var e;return(e=sc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Wi(JSON.stringify(n)),Wi(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ic(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function LE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function FE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function UE(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gp(){return ap.NODE_ADMIN===!0}function $E(){try{return typeof indexedDB=="object"}catch{return!1}}function jE(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE="FirebaseError";class Cn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=HE,Object.setPrototypeOf(this,Cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yr.prototype.create)}}class Yr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?BE(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Cn(r,a,s)}}function BE(t,e){return t.replace(WE,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const WE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t){return JSON.parse(t)}function Ue(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp=function(t){let e={},n={},s={},r="";try{const i=t.split(".");e=jr(Vi(i[0])||""),n=jr(Vi(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},VE=function(t){const e=mp(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},KE=function(t){const e=mp(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function $s(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function qa(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ki(t,e,n){const s={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=e.call(n,t[r],r,t));return s}function zi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(pd(i)&&pd(o)){if(!zi(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function pd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function _r(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function vr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(f<<1|f>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):d<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const f=(r<<5|r>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=f}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<n;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function GE(t,e){const n=new qE(t,e);return n.subscribe.bind(n)}class qE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");YE(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=ra),r.error===void 0&&(r.error=ra),r.complete===void 0&&(r.complete=ra);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function YE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ra(){}function _p(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,O(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Oo=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t){return t&&t._delegate?t._delegate:t}class Gn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new rc;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ZE(e))try{this.getOrInitializeService({instanceIdentifier:xn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xn){return this.instances.has(e)}getOptions(e=xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:XE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=xn){return this.component?this.component.multipleInstances?e:xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XE(t){return t===xn?void 0:t}function ZE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new JE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const tI={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},nI=de.INFO,sI={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},rI=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=sI[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oc{constructor(e){this.name=e,this._logLevel=nI,this._logHandler=rI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const iI=(t,e)=>e.some(n=>t instanceof n);let gd,md;function oI(){return gd||(gd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aI(){return md||(md=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vp=new WeakMap,Ya=new WeakMap,yp=new WeakMap,ia=new WeakMap,ac=new WeakMap;function lI(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(mn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&vp.set(n,t)}).catch(()=>{}),ac.set(e,t),e}function cI(t){if(Ya.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ya.set(t,e)}let Qa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ya.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uI(t){Qa=t(Qa)}function dI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(oa(this),e,...n);return yp.set(s,e.sort?e.sort():[e]),mn(s)}:aI().includes(t)?function(...e){return t.apply(oa(this),e),mn(vp.get(this))}:function(...e){return mn(t.apply(oa(this),e))}}function fI(t){return typeof t=="function"?dI(t):(t instanceof IDBTransaction&&cI(t),iI(t,oI())?new Proxy(t,Qa):t)}function mn(t){if(t instanceof IDBRequest)return lI(t);if(ia.has(t))return ia.get(t);const e=fI(t);return e!==t&&(ia.set(t,e),ac.set(e,t)),e}const oa=t=>ac.get(t);function hI(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=mn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(mn(o.result),l.oldVersion,l.newVersion,mn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const pI=["get","getKey","getAll","getAllKeys","count"],gI=["put","add","delete","clear"],aa=new Map;function _d(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(aa.get(e))return aa.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=gI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||pI.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return aa.set(e,i),i}uI(t=>({...t,get:(e,n,s)=>_d(e,n)||t.get(e,n,s),has:(e,n)=>!!_d(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_I(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function _I(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ja="@firebase/app",vd="0.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=new oc("@firebase/app"),vI="@firebase/app-compat",yI="@firebase/analytics-compat",bI="@firebase/analytics",wI="@firebase/app-check-compat",EI="@firebase/app-check",II="@firebase/auth",CI="@firebase/auth-compat",SI="@firebase/database",TI="@firebase/data-connect",RI="@firebase/database-compat",kI="@firebase/functions",AI="@firebase/functions-compat",PI="@firebase/installations",OI="@firebase/installations-compat",NI="@firebase/messaging",xI="@firebase/messaging-compat",MI="@firebase/performance",DI="@firebase/performance-compat",LI="@firebase/remote-config",FI="@firebase/remote-config-compat",UI="@firebase/storage",$I="@firebase/storage-compat",jI="@firebase/firestore",HI="@firebase/vertexai",BI="@firebase/firestore-compat",WI="firebase",VI="11.3.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa="[DEFAULT]",KI={[Ja]:"fire-core",[vI]:"fire-core-compat",[bI]:"fire-analytics",[yI]:"fire-analytics-compat",[EI]:"fire-app-check",[wI]:"fire-app-check-compat",[II]:"fire-auth",[CI]:"fire-auth-compat",[SI]:"fire-rtdb",[TI]:"fire-data-connect",[RI]:"fire-rtdb-compat",[kI]:"fire-fn",[AI]:"fire-fn-compat",[PI]:"fire-iid",[OI]:"fire-iid-compat",[NI]:"fire-fcm",[xI]:"fire-fcm-compat",[MI]:"fire-perf",[DI]:"fire-perf-compat",[LI]:"fire-rc",[FI]:"fire-rc-compat",[UI]:"fire-gcs",[$I]:"fire-gcs-compat",[jI]:"fire-fst",[BI]:"fire-fst-compat",[HI]:"fire-vertex","fire-js":"fire-js",[WI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=new Map,zI=new Map,Za=new Map;function yd(t,e){try{t.container.addComponent(e)}catch(n){Gt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function js(t){const e=t.name;if(Za.has(e))return Gt.debug(`There were multiple attempts to register component ${e}.`),!1;Za.set(e,t);for(const n of Gi.values())yd(n,t);for(const n of zI.values())yd(n,t);return!0}function lc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function at(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_n=new Yr("app","Firebase",GI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _n.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=VI;function cc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Xa,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw _n.create("bad-app-name",{appName:String(r)});if(n||(n=fp()),!n)throw _n.create("no-options");const i=Gi.get(r);if(i){if(zi(n,i.options)&&zi(s,i.config))return i;throw _n.create("duplicate-app",{appName:r})}const o=new eI(r);for(const l of Za.values())o.addComponent(l);const a=new qI(n,s,o);return Gi.set(r,a),a}function bp(t=Xa){const e=Gi.get(t);if(!e&&t===Xa&&fp())return cc();if(!e)throw _n.create("no-app",{appName:t});return e}function vn(t,e,n){var s;let r=(s=KI[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gt.warn(a.join(" "));return}js(new Gn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI="firebase-heartbeat-database",QI=1,Hr="firebase-heartbeat-store";let la=null;function wp(){return la||(la=hI(YI,QI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Hr)}catch(n){console.warn(n)}}}}).catch(t=>{throw _n.create("idb-open",{originalErrorMessage:t.message})})),la}async function JI(t){try{const n=(await wp()).transaction(Hr),s=await n.objectStore(Hr).get(Ep(t));return await n.done,s}catch(e){if(e instanceof Cn)Gt.warn(e.message);else{const n=_n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gt.warn(n.message)}}}async function bd(t,e){try{const s=(await wp()).transaction(Hr,"readwrite");await s.objectStore(Hr).put(e,Ep(t)),await s.done}catch(n){if(n instanceof Cn)Gt.warn(n.message);else{const s=_n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gt.warn(s.message)}}}function Ep(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=1024,ZI=30;class e0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new n0(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=wd();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>ZI){const o=s0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Gt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wd(),{heartbeatsToSend:s,unsentEntries:r}=t0(this._heartbeatsCache.heartbeats),i=Wi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Gt.warn(n),""}}}function wd(){return new Date().toISOString().substring(0,10)}function t0(t,e=XI){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ed(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ed(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class n0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $E()?jE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await JI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return bd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return bd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ed(t){return Wi(JSON.stringify({version:2,heartbeats:t})).length}function s0(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(t){js(new Gn("platform-logger",e=>new mI(e),"PRIVATE")),js(new Gn("heartbeat",e=>new e0(e),"PRIVATE")),vn(Ja,vd,t),vn(Ja,vd,"esm2017"),vn("fire-js","")}r0("");function uc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Ip(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const i0=Ip,Cp=new Yr("auth","Firebase",Ip());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=new oc("@firebase/auth");function o0(t,...e){qi.logLevel<=de.WARN&&qi.warn(`Auth (${Xs}): ${t}`,...e)}function Ti(t,...e){qi.logLevel<=de.ERROR&&qi.error(`Auth (${Xs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t,...e){throw dc(t,...e)}function Nt(t,...e){return dc(t,...e)}function Sp(t,e,n){const s=Object.assign(Object.assign({},i0()),{[e]:n});return new Yr("auth","Firebase",s).create(e,{appName:t.name})}function Wt(t){return Sp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Cp.create(t,...e)}function K(t,e,...n){if(!t)throw dc(e,...n)}function $t(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ti(e),new Error(e)}function qt(t,e){t||$t(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function a0(){return Id()==="http:"||Id()==="https:"}function Id(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(a0()||FE()||"connection"in navigator)?navigator.onLine:!0}function c0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,n){this.shortDelay=e,this.longDelay=n,qt(n>e,"Short delay should be less than long delay!"),this.isMobile=ic()||pp()}get(){return l0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(t,e){qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=new Qr(3e4,6e4);function Sn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Tn(t,e,n,s,r={}){return Rp(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Js(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},i);return LE()||(c.referrerPolicy="no-referrer"),Tp.fetch()(kp(t,t.config.apiHost,n,a),c)})}async function Rp(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},u0),e);try{const r=new h0(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw hi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw hi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw hi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw hi(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Sp(t,u,c);Et(t,u)}}catch(r){if(r instanceof Cn)throw r;Et(t,"network-request-failed",{message:String(r)})}}async function Jr(t,e,n,s,r={}){const i=await Tn(t,e,n,s,r);return"mfaPendingCredential"in i&&Et(t,"multi-factor-auth-required",{_serverResponse:i}),i}function kp(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?fc(t.config,r):`${t.config.apiScheme}://${r}`}function f0(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class h0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Nt(this.auth,"network-request-failed")),d0.get())})}}function hi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Nt(t,e,s);return r.customData._tokenResponse=n,r}function Cd(t){return t!==void 0&&t.enterprise!==void 0}class p0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return f0(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function g0(t,e){return Tn(t,"GET","/v2/recaptchaConfig",Sn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m0(t,e){return Tn(t,"POST","/v1/accounts:delete",e)}async function Ap(t,e){return Tn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _0(t,e=!1){const n=It(t),s=await n.getIdToken(e),r=hc(s);K(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Sr(ca(r.auth_time)),issuedAtTime:Sr(ca(r.iat)),expirationTime:Sr(ca(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ca(t){return Number(t)*1e3}function hc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ti("JWT malformed, contained fewer than 3 sections"),null;try{const r=Vi(n);return r?JSON.parse(r):(Ti("Failed to decode base64 JWT payload"),null)}catch(r){return Ti("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Sd(t){const e=hc(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Br(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Cn&&v0(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function v0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sr(this.lastLoginAt),this.creationTime=Sr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Br(t,Ap(n,{idToken:s}));K(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Pp(i.providerUserInfo):[],a=w0(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new tl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function b0(t){const e=It(t);await Yi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function w0(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Pp(t){return t.map(e=>{var{providerId:n}=e,s=uc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E0(t,e){const n=await Rp(t,{},async()=>{const s=Js({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=kp(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Tp.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function I0(t,e){return Tn(t,"POST","/v2/accounts:revokeToken",Sn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=Sd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await E0(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Ts;return s&&(K(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(K(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ts,this.toJSON())}_performRefresh(){return $t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=uc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new y0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new tl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Br(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _0(this,e)}reload(){return b0(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Yi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(at(this.auth.app))return Promise.reject(Wt(this.auth));const e=await this.getIdToken();return await Br(this,m0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,C=(c=n.createdAt)!==null&&c!==void 0?c:void 0,S=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:M,emailVerified:k,isAnonymous:G,providerData:U,stsTokenManager:Y}=n;K(M&&Y,e,"internal-error");const A=Ts.fromJSON(this.name,Y);K(typeof M=="string",e,"internal-error"),on(d,e.name),on(f,e.name),K(typeof k=="boolean",e,"internal-error"),K(typeof G=="boolean",e,"internal-error"),on(p,e.name),on(m,e.name),on(_,e.name),on(v,e.name),on(C,e.name),on(S,e.name);const W=new jt({uid:M,auth:e,email:f,emailVerified:k,displayName:d,isAnonymous:G,photoURL:m,phoneNumber:p,tenantId:_,stsTokenManager:A,createdAt:C,lastLoginAt:S});return U&&Array.isArray(U)&&(W.providerData=U.map(V=>Object.assign({},V))),v&&(W._redirectEventId=v),W}static async _fromIdTokenResponse(e,n,s=!1){const r=new Ts;r.updateFromServerResponse(n);const i=new jt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Yi(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];K(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Pp(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new Ts;a.updateFromIdToken(s);const l=new jt({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new tl(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td=new Map;function Ht(t){qt(t instanceof Function,"Expected a class definition");let e=Td.get(t);return e?(qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Td.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Op.type="NONE";const Rd=Op;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(t,e,n){return`firebase:${t}:${e}:${n}`}class Rs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Ri(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ri("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Rs(Ht(Rd),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=r[0]||Ht(Rd);const o=Ri(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=jt._fromJSON(e,u);c!==i&&(a=d),i=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Rs(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Rs(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Np(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fp(e))return"Blackberry";if(Up(e))return"Webos";if(xp(e))return"Safari";if((e.includes("chrome/")||Mp(e))&&!e.includes("edge/"))return"Chrome";if(Lp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Np(t=ze()){return/firefox\//i.test(t)}function xp(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mp(t=ze()){return/crios\//i.test(t)}function Dp(t=ze()){return/iemobile/i.test(t)}function Lp(t=ze()){return/android/i.test(t)}function Fp(t=ze()){return/blackberry/i.test(t)}function Up(t=ze()){return/webos/i.test(t)}function pc(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function C0(t=ze()){var e;return pc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function S0(){return UE()&&document.documentMode===10}function $p(t=ze()){return pc(t)||Lp(t)||Up(t)||Fp(t)||/windows phone/i.test(t)||Dp(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(t,e=[]){let n;switch(t){case"Browser":n=kd(ze());break;case"Worker":n=`${kd(ze())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xs}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R0(t,e={}){return Tn(t,"GET","/v2/passwordPolicy",Sn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0=6;class A0{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:k0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ad(this),this.idTokenSubscription=new Ad(this),this.beforeStateQueue=new T0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ht(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Rs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ap(this,{idToken:e}),s=await jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(at(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=c0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(at(this.app))return Promise.reject(Wt(this));const n=e?It(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return at(this.app)?Promise.reject(Wt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return at(this.app)?Promise.reject(Wt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ht(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await R0(this),n=new A0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await I0(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ht(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Rs.create(this,[Ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;if(at(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&o0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ns(t){return It(t)}class Ad{constructor(e){this.auth=e,this.observer=null,this.addObserver=GE(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let No={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function O0(t){No=t}function Hp(t){return No.loadJS(t)}function N0(){return No.recaptchaEnterpriseScript}function x0(){return No.gapiScript}function M0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class D0{constructor(){this.enterprise=new L0}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class L0{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const F0="recaptcha-enterprise",Bp="NO_RECAPTCHA";class U0{constructor(e){this.type=F0,this.auth=ns(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{g0(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new p0(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(i,o,a){const l=window.grecaptcha;Cd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(Bp)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new D0().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&Cd(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=N0();l.length!==0&&(l+=a),Hp(l).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function cr(t,e,n,s=!1,r=!1){const i=new U0(t);let o;if(r)o=Bp;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function nl(t,e,n,s,r){var i,o;if(r==="EMAIL_PASSWORD_PROVIDER")if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await cr(t,e,n,n==="getOobCode");return s(t,a)}else return s(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await cr(t,e,n,n==="getOobCode");return s(t,l)}else return Promise.reject(a)});else if(r==="PHONE_PROVIDER")if(!((o=t._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await cr(t,e,n);return s(t,a).catch(async l=>{var c;if(((c=t._getRecaptchaConfig())===null||c===void 0?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const u=await cr(t,e,n,!1,!0);return s(t,u)}return Promise.reject(l)})}else{const a=await cr(t,e,n,!1,!0);return s(t,a)}else return Promise.reject(r+" provider is not supported.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(t,e){const n=lc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(zi(i,e??{}))return r;Et(r,"already-initialized")}return n.initialize({options:e})}function j0(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ht);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function H0(t,e,n){const s=ns(t);K(s._canInitEmulator,s,"emulator-config-failed"),K(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Wp(e),{host:o,port:a}=B0(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||W0()}function Wp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function B0(t){const e=Wp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Pd(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Pd(o)}}}function Pd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function W0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $t("not implemented")}_getIdTokenResponse(e){return $t("not implemented")}_linkToIdToken(e,n){return $t("not implemented")}_getReauthenticationResolver(e){return $t("not implemented")}}async function V0(t,e){return Tn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K0(t,e){return Jr(t,"POST","/v1/accounts:signInWithPassword",Sn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z0(t,e){return Jr(t,"POST","/v1/accounts:signInWithEmailLink",Sn(t,e))}async function G0(t,e){return Jr(t,"POST","/v1/accounts:signInWithEmailLink",Sn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends gc{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Wr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Wr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nl(e,n,"signInWithPassword",K0,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return z0(e,{email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nl(e,s,"signUpPassword",V0,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return G0(e,{idToken:n,email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ks(t,e){return Jr(t,"POST","/v1/accounts:signInWithIdp",Sn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0="http://localhost";class qn extends gc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=uc(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new qn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ks(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ks(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ks(e,n)}buildRequest(){const e={requestUri:q0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Js(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Q0(t){const e=_r(vr(t)).link,n=e?_r(vr(e)).deep_link_id:null,s=_r(vr(t)).deep_link_id;return(s?_r(vr(s)).link:null)||s||n||e||t}class mc{constructor(e){var n,s,r,i,o,a;const l=_r(vr(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,d=Y0((r=l.mode)!==null&&r!==void 0?r:null);K(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Q0(e);try{return new mc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(){this.providerId=Zs.PROVIDER_ID}static credential(e,n){return Wr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=mc.parseLink(n);return K(s,"argument-error"),Wr._fromEmailAndCode(e,s.code,s.tenantId)}}Zs.PROVIDER_ID="password";Zs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends Vp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends Xr{constructor(){super("facebook.com")}static credential(e){return qn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cn.credential(e.oauthAccessToken)}catch{return null}}}cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";cn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends Xr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return un.credential(n,s)}catch{return null}}}un.GOOGLE_SIGN_IN_METHOD="google.com";un.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends Xr{constructor(){super("github.com")}static credential(e){return qn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.GITHUB_SIGN_IN_METHOD="github.com";dn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends Xr{constructor(){super("twitter.com")}static credential(e,n){return qn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return fn.credential(n,s)}catch{return null}}}fn.TWITTER_SIGN_IN_METHOD="twitter.com";fn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J0(t,e){return Jr(t,"POST","/v1/accounts:signUp",Sn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await jt._fromIdTokenResponse(e,s,r),o=Od(s);return new Yn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Od(s);return new Yn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Od(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi extends Cn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Qi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Qi(e,n,s,r)}}function Kp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Qi._fromErrorAndOperation(t,i,e,s):i})}async function X0(t,e,n=!1){const s=await Br(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z0(t,e,n=!1){const{auth:s}=t;if(at(s.app))return Promise.reject(Wt(s));const r="reauthenticate";try{const i=await Br(t,Kp(s,r,e,t),n);K(i.idToken,s,"internal-error");const o=hc(i.idToken);K(o,s,"internal-error");const{sub:a}=o;return K(t.uid===a,s,"user-mismatch"),Yn._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Et(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zp(t,e,n=!1){if(at(t.app))return Promise.reject(Wt(t));const s="signIn",r=await Kp(t,s,e),i=await Yn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function eC(t,e){return zp(ns(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gp(t){const e=ns(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function tC(t,e,n){if(at(t.app))return Promise.reject(Wt(t));const s=ns(t),o=await nl(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",J0,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Gp(t),l}),a=await Yn._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function nC(t,e,n){return at(t.app)?Promise.reject(Wt(t)):eC(It(t),Zs.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Gp(t),s})}function sC(t,e,n,s){return It(t).onIdTokenChanged(e,n,s)}function rC(t,e,n){return It(t).beforeAuthStateChanged(e,n)}const Ji="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ji,"1"),this.storage.removeItem(Ji),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=1e3,oC=10;class Yp extends qp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=$p(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);S0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,oC):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},iC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yp.type="LOCAL";const aC=Yp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp extends qp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Qp.type="SESSION";const Jp=Qp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new xo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await lC(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=_c("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return window}function uC(t){xt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(){return typeof xt().WorkerGlobalScope<"u"&&typeof xt().importScripts=="function"}async function dC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hC(){return Xp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp="firebaseLocalStorageDb",pC=1,Xi="firebaseLocalStorage",eg="fbase_key";class Zr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Mo(t,e){return t.transaction([Xi],e?"readwrite":"readonly").objectStore(Xi)}function gC(){const t=indexedDB.deleteDatabase(Zp);return new Zr(t).toPromise()}function sl(){const t=indexedDB.open(Zp,pC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Xi,{keyPath:eg})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Xi)?e(s):(s.close(),await gC(),e(await sl()))})})}async function Nd(t,e,n){const s=Mo(t,!0).put({[eg]:e,value:n});return new Zr(s).toPromise()}async function mC(t,e){const n=Mo(t,!1).get(e),s=await new Zr(n).toPromise();return s===void 0?null:s.value}function xd(t,e){const n=Mo(t,!0).delete(e);return new Zr(n).toPromise()}const _C=800,vC=3;class tg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>vC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xo._getInstance(hC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dC(),!this.activeServiceWorker)return;this.sender=new cC(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sl();return await Nd(e,Ji,"1"),await xd(e,Ji),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Nd(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>mC(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Mo(r,!1).getAll();return new Zr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_C)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tg.type="LOCAL";const yC=tg;new Qr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(t,e){return e?Ht(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc extends gc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ks(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ks(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ks(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wC(t){return zp(t.auth,new vc(t),t.bypassAuthState)}function EC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),Z0(n,new vc(t),t.bypassAuthState)}async function IC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),X0(n,new vc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wC;case"linkViaPopup":case"linkViaRedirect":return IC;case"reauthViaPopup":case"reauthViaRedirect":return EC;default:Et(this.auth,"internal-error")}}resolve(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=new Qr(2e3,1e4);class ms extends ng{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ms.currentPopupAction&&ms.currentPopupAction.cancel(),ms.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){qt(this.filter.length===1,"Popup operations only handle one event");const e=_c();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ms.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,CC.get())};e()}}ms.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC="pendingRedirect",ki=new Map;class TC extends ng{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ki.get(this.auth._key());if(!e){try{const s=await RC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ki.set(this.auth._key(),e)}return this.bypassAuthState||ki.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RC(t,e){const n=PC(e),s=AC(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function kC(t,e){ki.set(t._key(),e)}function AC(t){return Ht(t._redirectPersistence)}function PC(t){return Ri(SC,t.config.apiKey,t.name)}async function OC(t,e,n=!1){if(at(t.app))return Promise.reject(Wt(t));const s=ns(t),r=bC(s,e),o=await new TC(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=10*60*1e3;class xC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!sg(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Nt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=NC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Md(e))}saveEventToCache(e){this.cachedEventUids.add(Md(e)),this.lastProcessedEventTime=Date.now()}}function Md(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function sg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DC(t,e={}){return Tn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FC=/^https?/;async function UC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await DC(t);for(const n of e)try{if($C(n))return}catch{}Et(t,"unauthorized-domain")}function $C(t){const e=el(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!FC.test(n))return!1;if(LC.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=new Qr(3e4,6e4);function Dd(){const t=xt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function HC(t){return new Promise((e,n)=>{var s,r,i;function o(){Dd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dd(),n(Nt(t,"network-request-failed"))},timeout:jC.get()})}if(!((r=(s=xt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=xt().gapi)===null||i===void 0)&&i.load)o();else{const a=M0("iframefcb");return xt()[a]=()=>{gapi.load?o():n(Nt(t,"network-request-failed"))},Hp(`${x0()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ai=null,e})}let Ai=null;function BC(t){return Ai=Ai||HC(t),Ai}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC=new Qr(5e3,15e3),VC="__/auth/iframe",KC="emulator/auth/iframe",zC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qC(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fc(e,KC):`https://${t.config.authDomain}/${VC}`,s={apiKey:e.apiKey,appName:t.name,v:Xs},r=GC.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Js(s).slice(1)}`}async function YC(t){const e=await BC(t),n=xt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:qC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zC,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Nt(t,"network-request-failed"),a=xt().setTimeout(()=>{i(o)},WC.get());function l(){xt().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JC=500,XC=600,ZC="_blank",eS="http://localhost";class Ld{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tS(t,e,n,s=JC,r=XC){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},QC),{width:s.toString(),height:r.toString(),top:i,left:o}),c=ze().toLowerCase();n&&(a=Mp(c)?ZC:n),Np(c)&&(e=e||eS,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[p,m])=>`${f}${p}=${m},`,"");if(C0(c)&&a!=="_self")return nS(e||"",a),new Ld(null);const d=window.open(e||"",a,u);K(d,t,"popup-blocked");try{d.focus()}catch{}return new Ld(d)}function nS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS="__/auth/handler",rS="emulator/auth/handler",iS=encodeURIComponent("fac");async function Fd(t,e,n,s,r,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Xs,eventId:r};if(e instanceof Vp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qa(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(i||{}))o[u]=d}if(e instanceof Xr){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${iS}=${encodeURIComponent(l)}`:"";return`${oS(t)}?${Js(a).slice(1)}${c}`}function oS({config:t}){return t.emulator?fc(t,rS):`https://${t.authDomain}/${sS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua="webStorageSupport";class aS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jp,this._completeRedirectFn=OC,this._overrideRedirectResult=kC}async _openPopup(e,n,s,r){var i;qt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Fd(e,n,s,el(),r);return tS(e,o,_c())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Fd(e,n,s,el(),r);return uC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(qt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await YC(e),s=new xC(e);return n.register("authEvent",r=>(K(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ua,{type:ua},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[ua];o!==void 0&&n(!!o),Et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=UC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $p()||xp()||pc()}}const lS=aS;var Ud="@firebase/auth",$d="1.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dS(t){js(new Gn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jp(t)},c=new P0(s,r,i,l);return j0(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),js(new Gn("auth-internal",e=>{const n=ns(e.getProvider("auth").getImmediate());return(s=>new cS(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vn(Ud,$d,uS(t)),vn(Ud,$d,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS=5*60,hS=hp("authIdTokenMaxAge")||fS;let jd=null;const pS=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>hS)return;const r=n==null?void 0:n.token;jd!==r&&(jd=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Zi(t=bp()){const e=lc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$0(t,{popupRedirectResolver:lS,persistence:[yC,aC,Jp]}),s=hp("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=pS(i.toString());rC(n,o,()=>o(n.currentUser)),sC(n,a=>o(a))}}const r=dp("auth");return r&&H0(n,`http://${r}`),n}function gS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}O0({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Nt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",gS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dS("Browser");const mS={},_S={class:"relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 shadow-lg lg:py-4 dark:bg-sky-950","data-te-navbar-ref":""};function vS(t,e){return Fe(),Ye("nav",_S,[wo(t.$slots,"default")])}const yc=Dt(mS,[["render",vS]]);function Do(t,e,...n){if(t in e){let r=e[t];return typeof r=="function"?r(...n):r}let s=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(r=>`"${r}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,Do),s}var rl=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(rl||{}),yS=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(yS||{});function er({visible:t=!0,features:e=0,ourProps:n,theirProps:s,...r}){var i;let o=ig(s,n),a=Object.assign(r,{props:o});if(t||e&2&&o.static)return da(a);if(e&1){let l=(i=o.unmount)==null||i?0:1;return Do(l,{0(){return null},1(){return da({...r,props:{...o,hidden:!0,style:{display:"none"}}})}})}return da(a)}function da({props:t,attrs:e,slots:n,slot:s,name:r}){var i,o;let{as:a,...l}=og(t,["unmount","static"]),c=(i=n.default)==null?void 0:i.call(n,s),u={};if(s){let d=!1,f=[];for(let[p,m]of Object.entries(s))typeof m=="boolean"&&(d=!0),m===!0&&f.push(p);d&&(u["data-headlessui-state"]=f.join(" "))}if(a==="template"){if(c=rg(c??[]),Object.keys(l).length>0||Object.keys(e).length>0){let[d,...f]=c??[];if(!wS(d)||f.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${r} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(e)).map(_=>_.trim()).filter((_,v,C)=>C.indexOf(_)===v).sort((_,v)=>_.localeCompare(v)).map(_=>`  - ${_}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(_=>`  - ${_}`).join(`
`)].join(`
`));let p=ig((o=d.props)!=null?o:{},l),m=zt(d,p);for(let _ in p)_.startsWith("on")&&(m.props||(m.props={}),m.props[_]=p[_]);return m}return Array.isArray(c)&&c.length===1?c[0]:c}return wn(a,Object.assign({},l,u),{default:()=>c})}function rg(t){return t.flatMap(e=>e.type===Me?rg(e.children):[e])}function ig(...t){if(t.length===0)return{};if(t.length===1)return t[0];let e={},n={};for(let s of t)for(let r in s)r.startsWith("on")&&typeof s[r]=="function"?(n[r]!=null||(n[r]=[]),n[r].push(s[r])):e[r]=s[r];if(e.disabled||e["aria-disabled"])return Object.assign(e,Object.fromEntries(Object.keys(n).map(s=>[s,void 0])));for(let s in n)Object.assign(e,{[s](r,...i){let o=n[s];for(let a of o){if(r instanceof Event&&r.defaultPrevented)return;a(r,...i)}}});return e}function bS(t){let e=Object.assign({},t);for(let n in e)e[n]===void 0&&delete e[n];return e}function og(t,e=[]){let n=Object.assign({},t);for(let s of e)s in n&&delete n[s];return n}function wS(t){return t==null?!1:typeof t.type=="string"||typeof t.type=="object"||typeof t.type=="function"}let ES=0;function IS(){return++ES}function Lo(){return IS()}var Ae=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(Ae||{});function CS(t){throw new Error("Unexpected object: "+t)}var rt=(t=>(t[t.First=0]="First",t[t.Previous=1]="Previous",t[t.Next=2]="Next",t[t.Last=3]="Last",t[t.Specific=4]="Specific",t[t.Nothing=5]="Nothing",t))(rt||{});function SS(t,e){let n=e.resolveItems();if(n.length<=0)return null;let s=e.resolveActiveIndex(),r=s??-1,i=(()=>{switch(t.focus){case 0:return n.findIndex(o=>!e.resolveDisabled(o));case 1:{let o=n.slice().reverse().findIndex((a,l,c)=>r!==-1&&c.length-l-1>=r?!1:!e.resolveDisabled(a));return o===-1?o:n.length-1-o}case 2:return n.findIndex((o,a)=>a<=r?!1:!e.resolveDisabled(o));case 3:{let o=n.slice().reverse().findIndex(a=>!e.resolveDisabled(a));return o===-1?o:n.length-1-o}case 4:return n.findIndex(o=>e.resolveId(o)===t.id);case 5:return null;default:CS(t)}})();return i===-1?s:i}function Ce(t){var e;return t==null||t.value==null?null:(e=t.value.$el)!=null?e:t.value}let ag=Symbol("Context");var Vr=(t=>(t[t.Open=1]="Open",t[t.Closed=2]="Closed",t[t.Closing=4]="Closing",t[t.Opening=8]="Opening",t))(Vr||{});function TS(){return Je(ag,null)}function RS(t){Cs(ag,t)}function Hd(t,e){if(t)return t;let n=e??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function lg(t,e){let n=Q(Hd(t.value.type,t.value.as));return es(()=>{n.value=Hd(t.value.type,t.value.as)}),qs(()=>{var s;n.value||Ce(e)&&Ce(e)instanceof HTMLButtonElement&&!((s=Ce(e))!=null&&s.hasAttribute("type"))&&(n.value="button")}),n}var kS=Object.defineProperty,AS=(t,e,n)=>e in t?kS(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Bd=(t,e,n)=>(AS(t,typeof e!="symbol"?e+"":e,n),n);class PS{constructor(){Bd(this,"current",this.detect()),Bd(this,"currentId",0)}set(e){this.current!==e&&(this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let bc=new PS;function wc(t){if(bc.isServer)return null;if(t instanceof Node)return t.ownerDocument;if(t!=null&&t.hasOwnProperty("value")){let e=Ce(t);if(e)return e.ownerDocument}return document}function OS({container:t,accept:e,walk:n,enabled:s}){qs(()=>{let r=t.value;if(!r||s!==void 0&&!s.value)return;let i=wc(t);if(!i)return;let o=Object.assign(l=>e(l),{acceptNode:e}),a=i.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,o,!1);for(;a.nextNode();)n(a.currentNode)})}let il=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var ol=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t))(ol||{}),NS=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(NS||{}),xS=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(xS||{});function cg(t=document.body){return t==null?[]:Array.from(t.querySelectorAll(il)).sort((e,n)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Ec=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(Ec||{});function Ic(t,e=0){var n;return t===((n=wc(t))==null?void 0:n.body)?!1:Do(e,{0(){return t.matches(il)},1(){let s=t;for(;s!==null;){if(s.matches(il))return!0;s=s.parentElement}return!1}})}function ug(t){let e=wc(t);bt(()=>{e&&!Ic(e.activeElement,0)&&DS(t)})}var MS=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(MS||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",t=>{t.metaKey||t.altKey||t.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",t=>{t.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:t.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function DS(t){t==null||t.focus({preventScroll:!0})}let LS=["textarea","input"].join(",");function FS(t){var e,n;return(n=(e=t==null?void 0:t.matches)==null?void 0:e.call(t,LS))!=null?n:!1}function dg(t,e=n=>n){return t.slice().sort((n,s)=>{let r=e(n),i=e(s);if(r===null||i===null)return 0;let o=r.compareDocumentPosition(i);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function US(t,e){return $S(cg(),e,{relativeTo:t})}function $S(t,e,{sorted:n=!0,relativeTo:s=null,skipElements:r=[]}={}){var i;let o=(i=Array.isArray(t)?t.length>0?t[0].ownerDocument:document:t==null?void 0:t.ownerDocument)!=null?i:document,a=Array.isArray(t)?n?dg(t):t:cg(t);r.length>0&&a.length>1&&(a=a.filter(m=>!r.includes(m))),s=s??o.activeElement;let l=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,a.indexOf(s))-1;if(e&4)return Math.max(0,a.indexOf(s))+1;if(e&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=e&32?{preventScroll:!0}:{},d=0,f=a.length,p;do{if(d>=f||d+f<=0)return 0;let m=c+d;if(e&16)m=(m+f)%f;else{if(m<0)return 3;if(m>=f)return 1}p=a[m],p==null||p.focus(u),d+=l}while(p!==o.activeElement);return e&6&&FS(p)&&p.select(),2}function pi(t,e,n){bc.isServer||qs(s=>{document.addEventListener(t,e,n),s(()=>document.removeEventListener(t,e,n))})}function jS(t,e,n){bc.isServer||qs(s=>{window.addEventListener(t,e,n),s(()=>window.removeEventListener(t,e,n))})}function HS(t,e,n=ae(()=>!0)){function s(i,o){if(!n.value||i.defaultPrevented)return;let a=o(i);if(a===null||!a.getRootNode().contains(a))return;let l=function c(u){return typeof u=="function"?c(u()):Array.isArray(u)||u instanceof Set?u:[u]}(t);for(let c of l){if(c===null)continue;let u=c instanceof HTMLElement?c:Ce(c);if(u!=null&&u.contains(a)||i.composed&&i.composedPath().includes(u))return}return!Ic(a,Ec.Loose)&&a.tabIndex!==-1&&i.preventDefault(),e(i,a)}let r=Q(null);pi("pointerdown",i=>{var o,a;n.value&&(r.value=((a=(o=i.composedPath)==null?void 0:o.call(i))==null?void 0:a[0])||i.target)},!0),pi("mousedown",i=>{var o,a;n.value&&(r.value=((a=(o=i.composedPath)==null?void 0:o.call(i))==null?void 0:a[0])||i.target)},!0),pi("click",i=>{r.value&&(s(i,()=>r.value),r.value=null)},!0),pi("touchend",i=>s(i,()=>i.target instanceof HTMLElement?i.target:null),!0),jS("blur",i=>s(i,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var fg=(t=>(t[t.None=1]="None",t[t.Focusable=2]="Focusable",t[t.Hidden=4]="Hidden",t))(fg||{});let BS=Qt({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(t,{slots:e,attrs:n}){return()=>{let{features:s,...r}=t,i={"aria-hidden":(s&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(s&4)===4&&(s&2)!==2&&{display:"none"}}};return er({ourProps:i,theirProps:r,slot:{},attrs:n,slots:e,name:"Hidden"})}}});function WS(t){var e,n;let s=(e=t==null?void 0:t.form)!=null?e:t.closest("form");if(s){for(let r of s.elements)if(r!==t&&(r.tagName==="INPUT"&&r.type==="submit"||r.tagName==="BUTTON"&&r.type==="submit"||r.nodeName==="INPUT"&&r.type==="image")){r.click();return}(n=s.requestSubmit)==null||n.call(s)}}function VS(t,e,n){let s=Q(n==null?void 0:n.value),r=ae(()=>t.value!==void 0);return[ae(()=>r.value?t.value:s.value),function(i){return r.value||(s.value=i),e==null?void 0:e(i)}]}function Wd(t){return[t.screenX,t.screenY]}function KS(){let t=Q([-1,-1]);return{wasMoved(e){let n=Wd(e);return t.value[0]===n[0]&&t.value[1]===n[1]?!1:(t.value=n,!0)},update(e){t.value=Wd(e)}}}let Vd=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function Kd(t){var e,n;let s=(e=t.innerText)!=null?e:"",r=t.cloneNode(!0);if(!(r instanceof HTMLElement))return s;let i=!1;for(let a of r.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))a.remove(),i=!0;let o=i?(n=r.innerText)!=null?n:"":s;return Vd.test(o)&&(o=o.replace(Vd,"")),o}function zS(t){let e=t.getAttribute("aria-label");if(typeof e=="string")return e.trim();let n=t.getAttribute("aria-labelledby");if(n){let s=n.split(" ").map(r=>{let i=document.getElementById(r);if(i){let o=i.getAttribute("aria-label");return typeof o=="string"?o.trim():Kd(i).trim()}return null}).filter(Boolean);if(s.length>0)return s.join(", ")}return Kd(t).trim()}function GS(t){let e=Q(""),n=Q("");return()=>{let s=Ce(t);if(!s)return"";let r=s.innerText;if(e.value===r)return n.value;let i=zS(s).trim().toLowerCase();return e.value=r,n.value=i,i}}var qS=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(qS||{}),YS=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(YS||{});function QS(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let hg=Symbol("MenuContext");function Fo(t){let e=Je(hg,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Fo),n}return e}let JS=Qt({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:e,attrs:n}){let s=Q(1),r=Q(null),i=Q(null),o=Q([]),a=Q(""),l=Q(null),c=Q(1);function u(f=p=>p){let p=l.value!==null?o.value[l.value]:null,m=dg(f(o.value.slice()),v=>Ce(v.dataRef.domRef)),_=p?m.indexOf(p):null;return _===-1&&(_=null),{items:m,activeItemIndex:_}}let d={menuState:s,buttonRef:r,itemsRef:i,items:o,searchQuery:a,activeItemIndex:l,activationTrigger:c,closeMenu:()=>{s.value=1,l.value=null},openMenu:()=>s.value=0,goToItem(f,p,m){let _=u(),v=SS(f===rt.Specific?{focus:rt.Specific,id:p}:{focus:f},{resolveItems:()=>_.items,resolveActiveIndex:()=>_.activeItemIndex,resolveId:C=>C.id,resolveDisabled:C=>C.dataRef.disabled});a.value="",l.value=v,c.value=m??1,o.value=_.items},search(f){let p=a.value!==""?0:1;a.value+=f.toLowerCase();let m=(l.value!==null?o.value.slice(l.value+p).concat(o.value.slice(0,l.value+p)):o.value).find(v=>v.dataRef.textValue.startsWith(a.value)&&!v.dataRef.disabled),_=m?o.value.indexOf(m):-1;_===-1||_===l.value||(l.value=_,c.value=1)},clearSearch(){a.value=""},registerItem(f,p){let m=u(_=>[..._,{id:f,dataRef:p}]);o.value=m.items,l.value=m.activeItemIndex,c.value=1},unregisterItem(f){let p=u(m=>{let _=m.findIndex(v=>v.id===f);return _!==-1&&m.splice(_,1),m});o.value=p.items,l.value=p.activeItemIndex,c.value=1}};return HS([r,i],(f,p)=>{var m;d.closeMenu(),Ic(p,Ec.Loose)||(f.preventDefault(),(m=Ce(r))==null||m.focus())},ae(()=>s.value===0)),Cs(hg,d),RS(ae(()=>Do(s.value,{0:Vr.Open,1:Vr.Closed}))),()=>{let f={open:s.value===0,close:d.closeMenu};return er({ourProps:{},theirProps:t,slot:f,slots:e,attrs:n,name:"Menu"})}}}),XS=Qt({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${Lo()}`}},setup(t,{attrs:e,slots:n,expose:s}){let r=Fo("MenuButton");s({el:r.buttonRef,$el:r.buttonRef});function i(c){switch(c.key){case Ae.Space:case Ae.Enter:case Ae.ArrowDown:c.preventDefault(),c.stopPropagation(),r.openMenu(),bt(()=>{var u;(u=Ce(r.itemsRef))==null||u.focus({preventScroll:!0}),r.goToItem(rt.First)});break;case Ae.ArrowUp:c.preventDefault(),c.stopPropagation(),r.openMenu(),bt(()=>{var u;(u=Ce(r.itemsRef))==null||u.focus({preventScroll:!0}),r.goToItem(rt.Last)});break}}function o(c){switch(c.key){case Ae.Space:c.preventDefault();break}}function a(c){t.disabled||(r.menuState.value===0?(r.closeMenu(),bt(()=>{var u;return(u=Ce(r.buttonRef))==null?void 0:u.focus({preventScroll:!0})})):(c.preventDefault(),r.openMenu(),QS(()=>{var u;return(u=Ce(r.itemsRef))==null?void 0:u.focus({preventScroll:!0})})))}let l=lg(ae(()=>({as:t.as,type:e.type})),r.buttonRef);return()=>{var c;let u={open:r.menuState.value===0},{id:d,...f}=t,p={ref:r.buttonRef,id:d,type:l.value,"aria-haspopup":"menu","aria-controls":(c=Ce(r.itemsRef))==null?void 0:c.id,"aria-expanded":r.menuState.value===0,onKeydown:i,onKeyup:o,onClick:a};return er({ourProps:p,theirProps:f,slot:u,attrs:e,slots:n,name:"MenuButton"})}}}),ZS=Qt({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${Lo()}`}},setup(t,{attrs:e,slots:n,expose:s}){let r=Fo("MenuItems"),i=Q(null);s({el:r.itemsRef,$el:r.itemsRef}),OS({container:ae(()=>Ce(r.itemsRef)),enabled:ae(()=>r.menuState.value===0),accept(u){return u.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:u.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(u){u.setAttribute("role","none")}});function o(u){var d;switch(i.value&&clearTimeout(i.value),u.key){case Ae.Space:if(r.searchQuery.value!=="")return u.preventDefault(),u.stopPropagation(),r.search(u.key);case Ae.Enter:if(u.preventDefault(),u.stopPropagation(),r.activeItemIndex.value!==null){let f=r.items.value[r.activeItemIndex.value];(d=Ce(f.dataRef.domRef))==null||d.click()}r.closeMenu(),ug(Ce(r.buttonRef));break;case Ae.ArrowDown:return u.preventDefault(),u.stopPropagation(),r.goToItem(rt.Next);case Ae.ArrowUp:return u.preventDefault(),u.stopPropagation(),r.goToItem(rt.Previous);case Ae.Home:case Ae.PageUp:return u.preventDefault(),u.stopPropagation(),r.goToItem(rt.First);case Ae.End:case Ae.PageDown:return u.preventDefault(),u.stopPropagation(),r.goToItem(rt.Last);case Ae.Escape:u.preventDefault(),u.stopPropagation(),r.closeMenu(),bt(()=>{var f;return(f=Ce(r.buttonRef))==null?void 0:f.focus({preventScroll:!0})});break;case Ae.Tab:u.preventDefault(),u.stopPropagation(),r.closeMenu(),bt(()=>US(Ce(r.buttonRef),u.shiftKey?ol.Previous:ol.Next));break;default:u.key.length===1&&(r.search(u.key),i.value=setTimeout(()=>r.clearSearch(),350));break}}function a(u){switch(u.key){case Ae.Space:u.preventDefault();break}}let l=TS(),c=ae(()=>l!==null?(l.value&Vr.Open)===Vr.Open:r.menuState.value===0);return()=>{var u,d;let f={open:r.menuState.value===0},{id:p,...m}=t,_={"aria-activedescendant":r.activeItemIndex.value===null||(u=r.items.value[r.activeItemIndex.value])==null?void 0:u.id,"aria-labelledby":(d=Ce(r.buttonRef))==null?void 0:d.id,id:p,onKeydown:o,onKeyup:a,role:"menu",tabIndex:0,ref:r.itemsRef};return er({ourProps:_,theirProps:m,slot:f,attrs:e,slots:n,features:rl.RenderStrategy|rl.Static,visible:c.value,name:"MenuItems"})}}}),eT=Qt({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${Lo()}`}},setup(t,{slots:e,attrs:n,expose:s}){let r=Fo("MenuItem"),i=Q(null);s({el:i,$el:i});let o=ae(()=>r.activeItemIndex.value!==null?r.items.value[r.activeItemIndex.value].id===t.id:!1),a=GS(i),l=ae(()=>({disabled:t.disabled,get textValue(){return a()},domRef:i}));es(()=>r.registerItem(t.id,l)),bo(()=>r.unregisterItem(t.id)),qs(()=>{r.menuState.value===0&&o.value&&r.activationTrigger.value!==0&&bt(()=>{var _,v;return(v=(_=Ce(i))==null?void 0:_.scrollIntoView)==null?void 0:v.call(_,{block:"nearest"})})});function c(_){if(t.disabled)return _.preventDefault();r.closeMenu(),ug(Ce(r.buttonRef))}function u(){if(t.disabled)return r.goToItem(rt.Nothing);r.goToItem(rt.Specific,t.id)}let d=KS();function f(_){d.update(_)}function p(_){d.wasMoved(_)&&(t.disabled||o.value||r.goToItem(rt.Specific,t.id,0))}function m(_){d.wasMoved(_)&&(t.disabled||o.value&&r.goToItem(rt.Nothing))}return()=>{let{disabled:_}=t,v={active:o.value,disabled:_,close:r.closeMenu},{id:C,...S}=t;return er({ourProps:{id:C,ref:i,role:"menuitem",tabIndex:_===!0?void 0:-1,"aria-disabled":_===!0?!0:void 0,disabled:void 0,onClick:c,onFocus:u,onPointerenter:f,onMouseenter:f,onPointermove:p,onMousemove:p,onPointerleave:m,onMouseleave:m},theirProps:{...n,...S},slot:v,attrs:n,slots:e,name:"MenuItem"})}}}),tT=Symbol("GroupContext"),nT=Qt({name:"Switch",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:()=>`headlessui-switch-${Lo()}`}},inheritAttrs:!1,setup(t,{emit:e,attrs:n,slots:s,expose:r}){let i=Je(tT,null),[o,a]=VS(ae(()=>t.modelValue),v=>e("update:modelValue",v),ae(()=>t.defaultChecked));function l(){a(!o.value)}let c=Q(null),u=i===null?c:i.switchRef,d=lg(ae(()=>({as:t.as,type:n.type})),u);r({el:u,$el:u});function f(v){v.preventDefault(),l()}function p(v){v.key===Ae.Space?(v.preventDefault(),l()):v.key===Ae.Enter&&WS(v.currentTarget)}function m(v){v.preventDefault()}let _=ae(()=>{var v,C;return(C=(v=Ce(u))==null?void 0:v.closest)==null?void 0:C.call(v,"form")});return es(()=>{Ot([_],()=>{if(!_.value||t.defaultChecked===void 0)return;function v(){a(t.defaultChecked)}return _.value.addEventListener("reset",v),()=>{var C;(C=_.value)==null||C.removeEventListener("reset",v)}},{immediate:!0})}),()=>{let{id:v,name:C,value:S,form:M,...k}=t,G={checked:o.value},U={id:v,ref:u,role:"switch",type:d.value,tabIndex:0,"aria-checked":o.value,"aria-labelledby":i==null?void 0:i.labelledby.value,"aria-describedby":i==null?void 0:i.describedby.value,onClick:f,onKeyup:p,onKeypress:m};return wn(Me,[C!=null&&o.value!=null?wn(BS,bS({features:fg.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:o.value,form:M,name:C,value:S})):null,er({ourProps:U,theirProps:{...n,...og(k,["modelValue","defaultChecked"])},slot:G,attrs:n,slots:s,name:"Switch"})])}}});function pg(t){return Ff()?(a_(t),!0):!1}function Hs(t){return typeof t=="function"?t():Es(t)}const sT=typeof window<"u"&&typeof document<"u",rT=Object.prototype.toString,iT=t=>rT.call(t)==="[object Object]",gg=()=>{};function oT(t,e){function n(...s){return new Promise((r,i)=>{Promise.resolve(t(()=>e.apply(this,s),{fn:e,thisArg:this,args:s})).then(r).catch(i)})}return n}const mg=t=>t();function aT(t=mg){const e=Q(!0);function n(){e.value=!1}function s(){e.value=!0}const r=(...i)=>{e.value&&t(...i)};return{isActive:po(e),pause:n,resume:s,eventFilter:r}}function lT(...t){if(t.length!==1)return B_(...t);const e=t[0];return typeof e=="function"?po($_(()=>({get:e,set:gg}))):Q(e)}function cT(t,e,n={}){const{eventFilter:s=mg,...r}=n;return Ot(t,oT(s,e),r)}function uT(t,e,n={}){const{eventFilter:s,...r}=n,{eventFilter:i,pause:o,resume:a,isActive:l}=aT(s);return{stop:cT(t,e,{...r,eventFilter:i}),pause:o,resume:a,isActive:l}}function dT(t,e=!0){Vl()?es(t):e?t():bt(t)}function fT(t=!1,e={}){const{truthyValue:n=!0,falsyValue:s=!1}=e,r=Oe(t),i=Q(t);function o(a){if(arguments.length)return i.value=a,i.value;{const l=Hs(n);return i.value=i.value===l?Hs(s):l,i.value}}return r?o:[i,o]}function _g(t){var e;const n=Hs(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Kr=sT?window:void 0;function zd(...t){let e,n,s,r;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,s,r]=t,e=Kr):[e,n,s,r]=t,!e)return gg;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const i=[],o=()=>{i.forEach(u=>u()),i.length=0},a=(u,d,f,p)=>(u.addEventListener(d,f,p),()=>u.removeEventListener(d,f,p)),l=Ot(()=>[_g(e),Hs(r)],([u,d])=>{if(o(),!u)return;const f=iT(d)?{...d}:d;i.push(...n.flatMap(p=>s.map(m=>a(u,p,m,f))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return pg(c),c}function hT(){const t=Q(!1);return Vl()&&es(()=>{t.value=!0}),t}function pT(t){const e=hT();return ae(()=>(e.value,!!t()))}function gT(t,e={}){const{window:n=Kr}=e,s=pT(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const i=Q(!1),o=c=>{i.value=c.matches},a=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",o):r.removeListener(o))},l=qs(()=>{s.value&&(a(),r=n.matchMedia(Hs(t)),"addEventListener"in r?r.addEventListener("change",o):r.addListener(o),i.value=r.matches)});return pg(()=>{l(),a(),r=void 0}),i}const gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},mi="__vueuse_ssr_handlers__",mT=_T();function _T(){return mi in gi||(gi[mi]=gi[mi]||{}),gi[mi]}function vg(t,e){return mT[t]||e}function vT(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const yT={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},Gd="vueuse-storage";function bT(t,e,n,s={}){var r;const{flush:i="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:d=Kr,eventFilter:f,onError:p=A=>{console.error(A)}}=s,m=(u?Qf:Q)(e);if(!n)try{n=vg("getDefaultStorage",()=>{var A;return(A=Kr)==null?void 0:A.localStorage})()}catch(A){p(A)}if(!n)return m;const _=Hs(e),v=vT(_),C=(r=s.serializer)!=null?r:yT[v],{pause:S,resume:M}=uT(m,()=>k(m.value),{flush:i,deep:o,eventFilter:f});return d&&a&&(zd(d,"storage",Y),zd(d,Gd,U)),Y(),m;function k(A){try{if(A==null)n.removeItem(t);else{const W=C.write(A),V=n.getItem(t);V!==W&&(n.setItem(t,W),d&&d.dispatchEvent(new CustomEvent(Gd,{detail:{key:t,oldValue:V,newValue:W,storageArea:n}})))}}catch(W){p(W)}}function G(A){const W=A?A.newValue:n.getItem(t);if(W==null)return l&&_!==null&&n.setItem(t,C.write(_)),_;if(!A&&c){const V=C.read(W);return typeof c=="function"?c(V,_):v==="object"&&!Array.isArray(V)?{..._,...V}:V}else return typeof W!="string"?W:C.read(W)}function U(A){Y(A.detail)}function Y(A){if(!(A&&A.storageArea!==n)){if(A&&A.key==null){m.value=_;return}if(!(A&&A.key!==t)){S();try{(A==null?void 0:A.newValue)!==C.write(m.value)&&(m.value=G(A))}catch(W){p(W)}finally{A?bt(M):M()}}}}}function wT(t){return gT("(prefers-color-scheme: dark)",t)}function ET(t={}){const{selector:e="html",attribute:n="class",initialValue:s="auto",window:r=Kr,storage:i,storageKey:o="vueuse-color-scheme",listenToStorageChanges:a=!0,storageRef:l,emitAuto:c,disableTransition:u=!0}=t,d={auto:"",light:"light",dark:"dark",...t.modes||{}},f=wT({window:r}),p=ae(()=>f.value?"dark":"light"),m=l||(o==null?lT(s):bT(o,s,i,{window:r,listenToStorageChanges:a})),_=ae(()=>m.value==="auto"?p.value:m.value),v=vg("updateHTMLAttrs",(k,G,U)=>{const Y=typeof k=="string"?r==null?void 0:r.document.querySelector(k):_g(k);if(!Y)return;let A;if(u){A=r.document.createElement("style");const W="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";A.appendChild(document.createTextNode(W)),r.document.head.appendChild(A)}if(G==="class"){const W=U.split(/\s/g);Object.values(d).flatMap(V=>(V||"").split(/\s/g)).filter(Boolean).forEach(V=>{W.includes(V)?Y.classList.add(V):Y.classList.remove(V)})}else Y.setAttribute(G,U);u&&(r.getComputedStyle(A).opacity,document.head.removeChild(A))});function C(k){var G;v(e,n,(G=d[k])!=null?G:k)}function S(k){t.onChanged?t.onChanged(k,C):C(k)}Ot(_,S,{flush:"post",immediate:!0}),dT(()=>S(_.value));const M=ae({get(){return c?m.value:_.value},set(k){m.value=k}});try{return Object.assign(M,{store:m,system:p,state:_})}catch{return M}}function IT(t={}){const{valueDark:e="dark",valueLight:n=""}=t,s=ET({...t,onChanged:(i,o)=>{var a;t.onChanged?(a=t.onChanged)==null||a.call(t,i==="dark",o,i):o(i)},modes:{dark:e,light:n}});return ae({get(){return s.value==="dark"},set(i){const o=i?"dark":"light";s.system.value===o?s.value="auto":s.value=o}})}const CT={components:{LoginComponent:wE,ErrorMessage:SE,BaseHeader:yc,Icon:tc,Menu:JS,MenuButton:XS,MenuItems:ZS,MenuItem:eT,Switch:nT},setup(){const t=Kh(),e=Q(),n=IT(),s=fT(n),r=Zi();function i(o){const a=Q(o[0]),l=Q(o[1]),c=Q(o[2]);e.value="",c.value==="Login"?nC(r,a.value,l.value).then(()=>{t.replace("/tasks")}).catch(u=>{switch(u.code){case"auth/invalid-email":e.value="Invalid email";break;case"auth/user-not-found":e.value="No account with that email was found";break;case"auth/wrong-password":e.value="Incorrect password";break;default:e.value="Email or password was incorrect";break}}):c.value==="Signup"&&tC(r,a.value,l.value).then(()=>{alert("User created with success!")}).catch(u=>{console.log(u.code),alert(u.message)})}return{signupOrLogin:i,errMsg:e,isDark:n,toggleDark:s}}},ST=Z("div",{class:"py-0 px-3 font-semibold dark:text-white"},"Task Project",-1),TT={class:"flex"},RT=Z("h1",{class:"font-semibold text-3xl p-4 dark:text-white"},"The Task Project",-1),kT=Z("h3",{class:"font-medium text-2xl p-2 dark:text-white"}," Please login or signup to start your task list! ",-1);function AT(t,e,n,s,r,i){const o=Ke("Icon"),a=Ke("Switch"),l=Ke("base-header"),c=Ke("login-component"),u=Ke("error-message"),d=Ke("content-box");return Fe(),Ye(Me,null,[oe(l,null,{default:st(()=>[ST,Z("div",TT,[oe(o,{icon:"iconamoon:mode-light",color:"black",width:"26",height:"26"}),oe(a,{onClick:e[0]||(e[0]=f=>s.toggleDark()),modelValue:s.isDark,"onUpdate:modelValue":e[1]||(e[1]=f=>s.isDark=f),class:Or([s.isDark?"bg-gray-900":"bg-gray-700","relative inline-flex h-6 w-11 items-center rounded-full transition-colors"])},{default:st(()=>[Z("span",{class:Or([s.isDark?"translate-x-6":"translate-x-1","inline-block h-4 w-4 transform rounded-full bg-white transition-transform"])},null,2)]),_:1},8,["modelValue","class"]),oe(o,{icon:"material-symbols:dark-mode-outline",color:"black",width:"26",height:"26"})])]),_:1}),oe(d,null,{default:st(()=>[RT,kT,oe(c,{onEmitUser:s.signupOrLogin},null,8,["onEmitUser"]),s.errMsg?(Fe(),Bl(u,{key:0},{default:st(()=>[gn(Ni(s.errMsg),1)]),_:1})):Hv("",!0)]),_:1})],64)}const PT=Dt(CT,[["render",AT]]);/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var yg="store";function OT(t){return t===void 0&&(t=null),Je(t!==null?t:yg)}function tr(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function NT(t){return t!==null&&typeof t=="object"}function xT(t){return t&&typeof t.then=="function"}function MT(t,e){return function(){return t(e)}}function bg(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function wg(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Uo(t,n,[],t._modules.root,!0),Cc(t,n,e)}function Cc(t,e,n){var s=t._state,r=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={},a={},l=i_(!0);l.run(function(){tr(i,function(c,u){o[u]=MT(c,t),a[u]=ae(function(){return o[u]()}),Object.defineProperty(t.getters,u,{get:function(){return a[u].value},enumerable:!0})})}),t._state=Gs({data:e}),t._scope=l,t.strict&&$T(t),s&&n&&t._withCommit(function(){s.data=null}),r&&r.stop()}function Uo(t,e,n,s,r){var i=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!i&&!r){var a=Sc(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){a[l]=s.state})}var c=s.context=DT(t,o,n);s.forEachMutation(function(u,d){var f=o+d;LT(t,f,u,c)}),s.forEachAction(function(u,d){var f=u.root?d:o+d,p=u.handler||u;FT(t,f,p,c)}),s.forEachGetter(function(u,d){var f=o+d;UT(t,f,u,c)}),s.forEachChild(function(u,d){Uo(t,e,n.concat(d),u,r)})}function DT(t,e,n){var s=e==="",r={dispatch:s?t.dispatch:function(i,o,a){var l=eo(i,o,a),c=l.payload,u=l.options,d=l.type;return(!u||!u.root)&&(d=e+d),t.dispatch(d,c)},commit:s?t.commit:function(i,o,a){var l=eo(i,o,a),c=l.payload,u=l.options,d=l.type;(!u||!u.root)&&(d=e+d),t.commit(d,c,u)}};return Object.defineProperties(r,{getters:{get:s?function(){return t.getters}:function(){return Eg(t,e)}},state:{get:function(){return Sc(t.state,n)}}}),r}function Eg(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(r){if(r.slice(0,s)===e){var i=r.slice(s);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function LT(t,e,n,s){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(o){n.call(t,s.state,o)})}function FT(t,e,n,s){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(o){var a=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return xT(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):a})}function UT(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(s.state,s.getters,i.state,i.getters)})}function $T(t){Ot(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Sc(t,e){return e.reduce(function(n,s){return n[s]},t)}function eo(t,e,n){return NT(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var jT="vuex bindings",qd="vuex:mutations",fa="vuex:actions",fs="vuex",HT=0;function BT(t,e){ib({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[jT]},function(n){n.addTimelineLayer({id:qd,label:"Vuex Mutations",color:Yd}),n.addTimelineLayer({id:fa,label:"Vuex Actions",color:Yd}),n.addInspector({id:fs,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===fs)if(s.filter){var r=[];Tg(r,e._modules.root,s.filter,""),s.rootNodes=r}else s.rootNodes=[Sg(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===fs){var r=s.nodeId;Eg(e,r),s.state=KT(GT(e._modules,r),r==="root"?e.getters:e._makeLocalGettersCache,r)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===fs){var r=s.nodeId,i=s.path;r!=="root"&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit(function(){s.set(e._state.data,i,s.state.value)})}}),e.subscribe(function(s,r){var i={};s.payload&&(i.payload=s.payload),i.state=r,n.notifyComponentUpdate(),n.sendInspectorTree(fs),n.sendInspectorState(fs),n.addTimelineEvent({layerId:qd,event:{time:Date.now(),title:s.type,data:i}})}),e.subscribeAction({before:function(s,r){var i={};s.payload&&(i.payload=s.payload),s._id=HT++,s._time=Date.now(),i.state=r,n.addTimelineEvent({layerId:fa,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:i}})},after:function(s,r){var i={},o=Date.now()-s._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(i.payload=s.payload),i.state=r,n.addTimelineEvent({layerId:fa,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:i}})}})})}var Yd=8702998,WT=6710886,VT=16777215,Ig={label:"namespaced",textColor:VT,backgroundColor:WT};function Cg(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Sg(t,e){return{id:e||"root",label:Cg(e),tags:t.namespaced?[Ig]:[],children:Object.keys(t._children).map(function(n){return Sg(t._children[n],e+n+"/")})}}function Tg(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[Ig]:[]}),Object.keys(e._children).forEach(function(r){Tg(t,e._children[r],n,s+r+"/")})}function KT(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),r={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var i=zT(e);r.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?Cg(o):o,editable:!1,value:al(function(){return i[o]})}})}return r}function zT(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var r=e,i=s.pop();s.forEach(function(o){r[o]||(r[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),r=r[o]._custom.value}),r[i]=al(function(){return t[n]})}else e[n]=al(function(){return t[n]})}),e}function GT(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,r,i){var o=s[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function al(t){try{return t()}catch(e){return e}}var Ct=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},Rg={namespaced:{configurable:!0}};Rg.namespaced.get=function(){return!!this._rawModule.namespaced};Ct.prototype.addChild=function(e,n){this._children[e]=n};Ct.prototype.removeChild=function(e){delete this._children[e]};Ct.prototype.getChild=function(e){return this._children[e]};Ct.prototype.hasChild=function(e){return e in this._children};Ct.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Ct.prototype.forEachChild=function(e){tr(this._children,e)};Ct.prototype.forEachGetter=function(e){this._rawModule.getters&&tr(this._rawModule.getters,e)};Ct.prototype.forEachAction=function(e){this._rawModule.actions&&tr(this._rawModule.actions,e)};Ct.prototype.forEachMutation=function(e){this._rawModule.mutations&&tr(this._rawModule.mutations,e)};Object.defineProperties(Ct.prototype,Rg);var ss=function(e){this.register([],e,!1)};ss.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};ss.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,r){return n=n.getChild(r),s+(n.namespaced?r+"/":"")},"")};ss.prototype.update=function(e){kg([],this.root,e)};ss.prototype.register=function(e,n,s){var r=this;s===void 0&&(s=!0);var i=new Ct(n,s);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&tr(n.modules,function(a,l){r.register(e.concat(l),a,s)})};ss.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],r=n.getChild(s);r&&r.runtime&&n.removeChild(s)};ss.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function kg(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;kg(t.concat(s),e.getChild(s),n.modules[s])}}function qT(t){return new et(t)}var et=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var r=e.strict;r===void 0&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new ss(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(f,p){return l.call(o,f,p)},this.commit=function(f,p,m){return c.call(o,f,p,m)},this.strict=r;var u=this._modules.root.state;Uo(this,u,[],this._modules.root),Cc(this,u),s.forEach(function(d){return d(n)})},Tc={state:{configurable:!0}};et.prototype.install=function(e,n){e.provide(n||yg,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&BT(e,this)};Tc.state.get=function(){return this._state.data};Tc.state.set=function(t){};et.prototype.commit=function(e,n,s){var r=this,i=eo(e,n,s),o=i.type,a=i.payload,l={type:o,payload:a},c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(d){d(a)})}),this._subscribers.slice().forEach(function(u){return u(l,r.state)}))};et.prototype.dispatch=function(e,n){var s=this,r=eo(e,n),i=r.type,o=r.payload,a={type:i,payload:o},l=this._actions[i];if(l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,s.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,d){c.then(function(f){try{s._actionSubscribers.filter(function(p){return p.after}).forEach(function(p){return p.after(a,s.state)})}catch{}u(f)},function(f){try{s._actionSubscribers.filter(function(p){return p.error}).forEach(function(p){return p.error(a,s.state,f)})}catch{}d(f)})})}};et.prototype.subscribe=function(e,n){return bg(e,this._subscribers,n)};et.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return bg(s,this._actionSubscribers,n)};et.prototype.watch=function(e,n,s){var r=this;return Ot(function(){return e(r.state,r.getters)},n,Object.assign({},s))};et.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};et.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Uo(this,this.state,e,this._modules.get(e),s.preserveState),Cc(this,this.state)};et.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=Sc(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),wg(this)};et.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};et.prototype.hotUpdate=function(e){this._modules.update(e),wg(this,!0)};et.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(et.prototype,Tc);const YT={components:{BaseHeader:yc},setup(){const t=Q(""),e=OT(),n=Kh();function s(){e.dispatch("submitData",t.value),t.value=""}function r(){Zi().signOut(),n.replace("/login")}function i(){Zi().onAuthStateChanged(function(o){o||n.replace("/")})}return $l(()=>{i()}),{taskText:t,submitTask:s,logoutUser:r}}},Ag=t=>(rh("data-v-84b0a3cc"),t=t(),ih(),t),QT={class:"dark:bg-gray-900"},JT=Ag(()=>Z("p",{class:"text-3xl font-semibold p-3 dark:text-white"},"My Tasks",-1)),XT=Ag(()=>Z("div",{class:"text-2xl font-normal pb-5 dark:text-white"},"Add a task below (with Enter) and click over the finished tasks",-1)),ZT={class:"my-4"};function eR(t,e,n,s,r,i){const o=Ke("base-button"),a=Ke("base-header");return Fe(),Ye("section",QT,[oe(a,null,{default:st(()=>[oe(o,{class:"px-1 text-sm font-semibold left-10",onClick:s.logoutUser},{default:st(()=>[gn("Logout User")]),_:1},8,["onClick"])]),_:1}),JT,XT,Z("div",ZT,[Sa(Z("input",{placeholder:"Add a new task!",id:"insertField",type:"text","onUpdate:modelValue":e[0]||(e[0]=l=>s.taskText=l),onKeydown:e[1]||(e[1]=Oy(l=>s.submitTask(s.taskText),["enter"]))},null,544),[[$i,s.taskText]]),Z("button",{onClick:e[2]||(e[2]=l=>s.submitTask(s.taskText)),class:"bg-blue-500 text-white px-4 py-2 rounded ml-2"},"Add")])])}const tR=Dt(YT,[["render",eR],["__scopeId","data-v-84b0a3cc"]]),Qd="@firebase/database",Jd="1.0.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pg="";function nR(t){Pg=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ue(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:jr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Xt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new sR(e)}}catch{}return new rR},$n=Og("localStorage"),ll=Og("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=new oc("@firebase/database"),iR=function(){let t=1;return function(){return t++}}(),Ng=function(t){const e=QE(t),n=new zE;n.update(e);const s=n.digest();return nc.encodeByteArray(s)},ei=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ei.apply(null,s):typeof s=="object"?e+=Ue(s):e+=s,e+=" "}return e};let Bn=null,Xd=!0;const oR=function(t,e){O(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(As.logLevel=de.VERBOSE,Bn=As.log.bind(As),e&&ll.set("logging_enabled",!0)):typeof t=="function"?Bn=t:(Bn=null,ll.remove("logging_enabled"))},je=function(...t){if(Xd===!0&&(Xd=!1,Bn===null&&ll.get("logging_enabled")===!0&&oR(!0)),Bn){const e=ei.apply(null,t);Bn(e)}},ti=function(t){return function(...e){je(t,...e)}},cl=function(...t){const e="FIREBASE INTERNAL ERROR: "+ei(...t);As.error(e)},Yt=function(...t){const e=`FIREBASE FATAL ERROR: ${ei(...t)}`;throw As.error(e),new Error(e)},it=function(...t){const e="FIREBASE WARNING: "+ei(...t);As.warn(e)},aR=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&it("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},xg=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},lR=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Bs="[MIN_NAME]",Qn="[MAX_NAME]",nr=function(t,e){if(t===e)return 0;if(t===Bs||e===Qn)return-1;if(e===Bs||t===Qn)return 1;{const n=Zd(t),s=Zd(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},cR=function(t,e){return t===e?0:t<e?-1:1},ur=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ue(e))},Rc=function(t){if(typeof t!="object"||t===null)return Ue(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ue(e[s]),n+=":",n+=Rc(t[e[s]]);return n+="}",n},Mg=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let r=0;r<n;r+=e)r+e>n?s.push(t.substring(r,n)):s.push(t.substring(r,r+e));return s};function dt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Dg=function(t){O(!xg(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let r,i,o,a,l;t===0?(i=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),i=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(r?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},uR=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},dR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},fR=new RegExp("^-?(0*)\\d{1,10}$"),hR=-2147483648,pR=2147483647,Zd=function(t){if(fR.test(t)){const e=Number(t);if(e>=hR&&e<=pR)return e}return null},ni=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw it("Exception was thrown by user callback.",n),e},Math.floor(0))}},gR=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Tr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,at(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){it(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(je("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',it(e)}}class Ps{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ps.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc="5",Lg="v",Fg="s",Ug="r",$g="f",jg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Hg="ls",Bg="p",ul="ac",Wg="websocket",Vg="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,n,s,r,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=$n.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&$n.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function vR(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function zg(t,e,n){O(typeof e=="string","typeof type must == string"),O(typeof n=="object","typeof params must == object");let s;if(e===Wg)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Vg)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);vR(t)&&(n.ns=t.namespace);const r=[];return dt(n,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(){this.counters_={}}incrementCounter(e,n=1){Xt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return kE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha={},pa={};function Ac(t){const e=t.toString();return ha[e]||(ha[e]=new yR),ha[e]}function bR(t,e){const n=t.toString();return pa[n]||(pa[n]=e()),pa[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&ni(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef="start",ER="close",IR="pLPCommand",CR="pRTLPCB",Gg="id",qg="pw",Yg="ser",SR="cb",TR="seg",RR="ts",kR="d",AR="dframe",Qg=1870,Jg=30,PR=Qg-Jg,OR=25e3,NR=3e4;class _s{constructor(e,n,s,r,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ti(e),this.stats_=Ac(n),this.urlFn=l=>(this.appCheckToken&&(l[ul]=this.appCheckToken),zg(n,Vg,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new wR(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(NR)),lR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Pc((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ef)this.id=a,this.password=l;else if(o===ER)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[ef]="t",s[Yg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[SR]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Lg]=kc,this.transportSessionId&&(s[Fg]=this.transportSessionId),this.lastSessionId&&(s[Hg]=this.lastSessionId),this.applicationId&&(s[Bg]=this.applicationId),this.appCheckToken&&(s[ul]=this.appCheckToken),typeof location<"u"&&location.hostname&&jg.test(location.hostname)&&(s[Ug]=$g);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){_s.forceAllow_=!0}static forceDisallow(){_s.forceDisallow_=!0}static isAvailable(){return _s.forceAllow_?!0:!_s.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!uR()&&!dR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=cp(n),r=Mg(s,PR);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[AR]="t",s[Gg]=e,s[qg]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ue(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Pc{constructor(e,n,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=iR(),window[IR+this.uniqueCallbackIdentifier]=e,window[CR+this.uniqueCallbackIdentifier]=n,this.myIFrame=Pc.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){je("frame writing exception"),a.stack&&je(a.stack),je(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||je("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Gg]=this.myID,e[qg]=this.myPW,e[Yg]=this.currentSerial;let n=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Jg+s.length<=Qg;){const o=this.pendingSegs.shift();s=s+"&"+TR+r+"="+o.seg+"&"+RR+r+"="+o.ts+"&"+kR+r+"="+o.d,r++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(s,Math.floor(OR)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{je("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=16384,MR=45e3;let to=null;typeof MozWebSocket<"u"?to=MozWebSocket:typeof WebSocket<"u"&&(to=WebSocket);class mt{constructor(e,n,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ti(this.connId),this.stats_=Ac(n),this.connURL=mt.connectionURL_(n,o,a,r,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,r,i){const o={};return o[Lg]=kc,typeof location<"u"&&location.hostname&&jg.test(location.hostname)&&(o[Ug]=$g),n&&(o[Fg]=n),s&&(o[Hg]=s),r&&(o[ul]=r),i&&(o[Bg]=i),zg(e,Wg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,$n.set("previous_websocket_failure",!0);try{let s;gp(),this.mySock=new to(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){mt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&to!==null&&!mt.forceDisallow_}static previouslyFailed(){return $n.isInMemoryStorage||$n.get("previous_websocket_failure")===!0}markConnectionHealthy(){$n.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=jr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Mg(n,xR);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(MR))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}mt.responsesRequiredToBeHealthy=2;mt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{static get ALL_TRANSPORTS(){return[_s,mt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=mt&&mt.isAvailable();let s=n&&!mt.previouslyFailed();if(e.webSocketOnly&&(n||it("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[mt];else{const r=this.transports_=[];for(const i of zr.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);zr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}zr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR=6e4,LR=5e3,FR=10*1024,UR=100*1024,ga="t",tf="d",$R="s",nf="r",jR="e",sf="o",rf="a",of="n",af="p",HR="h";class BR{constructor(e,n,s,r,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ti("c:"+this.id+":"),this.transportManager_=new zr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Tr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>UR?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>FR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ga in e){const n=e[ga];n===rf?this.upgradeIfSecondaryHealthy_():n===nf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===sf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ur("t",e),s=ur("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:af,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:rf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:of,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ur("t",e),s=ur("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ur(ga,e);if(tf in e){const s=e[tf];if(n===HR){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===of){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===$R?this.onConnectionShutdown_(s):n===nf?this.onReset_(s):n===jR?cl("Server Error: "+s):n===sf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):cl("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),kc!==s&&it("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Tr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(DR))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Tr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(LR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:af,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&($n.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{put(e,n,s,r){}merge(e,n,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const r=this.getInitialEvent(e);r&&n.apply(s,r)}off(e,n,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===n&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){O(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no extends Zg{static getInstance(){return new no}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ic()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf=32,cf=768;class we{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function fe(){return new we("")}function ee(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function In(t){return t.pieces_.length-t.pieceNum_}function be(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new we(t.pieces_,e)}function em(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function WR(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function tm(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function nm(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new we(e,0)}function Pe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof we)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&n.push(s[r])}return new we(n,0)}function te(t){return t.pieceNum_>=t.pieces_.length}function lt(t,e){const n=ee(t),s=ee(e);if(n===null)return e;if(n===s)return lt(be(t),be(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function sm(t,e){if(In(t)!==In(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function vt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(In(t)>In(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class VR{constructor(e,n){this.errorPrefix_=n,this.parts_=tm(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Oo(this.parts_[s]);rm(this)}}function KR(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Oo(e),rm(t)}function zR(t){const e=t.parts_.pop();t.byteLength_-=Oo(e),t.parts_.length>0&&(t.byteLength_-=1)}function rm(t){if(t.byteLength_>cf)throw new Error(t.errorPrefix_+"has a key path longer than "+cf+" bytes ("+t.byteLength_+").");if(t.parts_.length>lf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+lf+") or object contains a cycle "+Mn(t))}function Mn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc extends Zg{static getInstance(){return new Oc}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=1e3,GR=60*5*1e3,uf=30*1e3,qR=1.3,YR=3e4,QR="server_kill",df=3;class Vt extends Xg{constructor(e,n,s,r,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Vt.nextPersistentConnectionId_++,this.log_=ti("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=dr,this.maxReconnectDelay_=GR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!gp())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Oc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&no.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const r=++this.requestNumber_,i={r,a:e,b:n};this.log_(Ue(i)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const n=new rc,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;Vt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Xt(e,"w")){const s=$s(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();it(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||KE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=uf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=VE(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,n)}sendUnlisten_(e,n,s,r){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,r){const i={p:n,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,s,r){this.putInternal("p",e,n,s,r)}merge(e,n,s,r){this.putInternal("m",e,n,s,r)}putInternal(e,n,s,r,i){this.initConnection_();const o={p:n,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ue(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):cl("Unrecognized action received from server: "+Ue(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=dr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=dr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>YR&&(this.reconnectDelay_=dr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*qR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Vt.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){O(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?je("getToken() completed but was canceled"):(je("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new BR(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{it(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(QR)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&it(d),l())}}}interrupt(e){je("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){je("Resuming connection for reason: "+e),delete this.interruptReasons_[e],qa(this.interruptReasons_)&&(this.reconnectDelay_=dr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(i=>Rc(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const s=new we(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(n),i.delete(n),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,n){je("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=df&&(this.reconnectDelay_=uf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){je("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=df&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Pg.replace(/\./g,"-")]=1,ic()?e["framework.cordova"]=1:pp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=no.getInstance().currentlyOnline();return qa(this.interruptReasons_)&&e}}Vt.nextPersistentConnectionId_=0;Vt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ne(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ne(Bs,e),r=new ne(Bs,n);return this.compare(s,r)!==0}minPost(){return ne.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _i;class im extends $o{static get __EMPTY_NODE(){return _i}static set __EMPTY_NODE(e){_i=e}compare(e,n){return nr(e.name,n.name)}isDefinedOn(e){throw Qs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ne.MIN}maxPost(){return new ne(Qn,_i)}makePost(e,n){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new ne(e,_i)}toString(){return".key"}}const Os=new im;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class xe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??xe.RED,this.left=r??Qe.EMPTY_NODE,this.right=i??Qe.EMPTY_NODE}copy(e,n,s,r,i){return new xe(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Qe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,r;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Qe.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}xe.RED=!0;xe.BLACK=!1;class JR{copy(e,n,s,r,i){return this}insert(e,n,s){return new xe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Qe{constructor(e,n=Qe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Qe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,xe.BLACK,null,null))}remove(e){return new Qe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,xe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,r=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new vi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new vi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new vi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new vi(this.root_,null,this.comparator_,!0,e)}}Qe.EMPTY_NODE=new JR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XR(t,e){return nr(t.name,e.name)}function Nc(t,e){return nr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dl;function ZR(t){dl=t}const om=function(t){return typeof t=="number"?"number:"+Dg(t):"string:"+t},am=function(t){if(t.isLeafNode()){const e=t.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Xt(e,".sv"),"Priority must be a string or number.")}else O(t===dl||t.isEmpty(),"priority of unexpected type.");O(t===dl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ff;class Ne{static set __childrenNodeConstructor(e){ff=e}static get __childrenNodeConstructor(){return ff}constructor(e,n=Ne.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),am(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ne(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return te(e)?this:ee(e)===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ne.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ee(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(O(s!==".priority"||In(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ne.__childrenNodeConstructor.EMPTY_NODE.updateChild(be(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+om(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Dg(this.value_):e+=this.value_,this.lazyHash_=Ng(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ne.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ne.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,r=Ne.VALUE_TYPE_ORDER.indexOf(n),i=Ne.VALUE_TYPE_ORDER.indexOf(s);return O(r>=0,"Unknown leaf type: "+n),O(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ne.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lm,cm;function ek(t){lm=t}function tk(t){cm=t}class nk extends $o{compare(e,n){const s=e.node.getPriority(),r=n.node.getPriority(),i=s.compareTo(r);return i===0?nr(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ne.MIN}maxPost(){return new ne(Qn,new Ne("[PRIORITY-POST]",cm))}makePost(e,n){const s=lm(e);return new ne(n,new Ne("[PRIORITY-POST]",s))}toString(){return".priority"}}const We=new nk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk=Math.log(2);class rk{constructor(e){const n=i=>parseInt(Math.log(i)/sk,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const so=function(t,e,n,s){t.sort(e);const r=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=t[l],f=n?n(d):d,new xe(f,d.node,xe.BLACK,null,null);{const p=parseInt(u/2,10)+l,m=r(l,p),_=r(p+1,c);return d=t[p],f=n?n(d):d,new xe(f,d.node,xe.BLACK,m,_)}},i=function(l){let c=null,u=null,d=t.length;const f=function(m,_){const v=d-m,C=d;d-=m;const S=r(v+1,C),M=t[v],k=n?n(M):M;p(new xe(k,M.node,_,null,S))},p=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const _=l.nextBitIsOne(),v=Math.pow(2,l.count-(m+1));_?f(v,xe.BLACK):(f(v,xe.BLACK),f(v,xe.RED))}return u},o=new rk(t.length),a=i(o);return new Qe(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ma;const hs={};class Bt{static get Default(){return O(hs&&We,"ChildrenNode.ts has not been loaded"),ma=ma||new Bt({".priority":hs},{".priority":We}),ma}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=$s(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Qe?n:null}hasIndex(e){return Xt(this.indexSet_,e.toString())}addIndex(e,n){O(e!==Os,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=n.getIterator(ne.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=so(s,e.getCompare()):a=hs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Bt(u,c)}addToIndexes(e,n){const s=Ki(this.indexes_,(r,i)=>{const o=$s(this.indexSet_,i);if(O(o,"Missing index implementation for "+i),r===hs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ne.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),so(a,o.getCompare())}else return hs;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new ne(e.name,a))),l.insert(e,e.node)}});return new Bt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ki(this.indexes_,r=>{if(r===hs)return r;{const i=n.get(e.name);return i?r.remove(new ne(e.name,i)):r}});return new Bt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fr;class le{static get EMPTY_NODE(){return fr||(fr=new le(new Qe(Nc),null,Bt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&am(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fr}updatePriority(e){return this.children_.isEmpty()?this:new le(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?fr:n}}getChild(e){const n=ee(e);return n===null?this:this.getImmediateChild(n).getChild(be(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(O(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ne(e,n);let r,i;n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?fr:this.priorityNode_;return new le(r,o,i)}}updateChild(e,n){const s=ee(e);if(s===null)return n;{O(ee(e)!==".priority"||In(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(be(e),n);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,r=0,i=!0;if(this.forEachChild(We,(o,a)=>{n[o]=a.val(e),s++,i&&le.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+om(this.getPriority().val())+":"),this.forEachChild(We,(n,s)=>{const r=s.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":Ng(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new ne(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ne(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ne(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,ne.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,ne.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===si?-1:0}withIndex(e){if(e===Os||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new le(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Os||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(We),r=n.getIterator(We);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Os?null:this.indexMap_.get(e.toString())}}le.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ik extends le{constructor(){super(new Qe(Nc),le.EMPTY_NODE,Bt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return le.EMPTY_NODE}isEmpty(){return!1}}const si=new ik;Object.defineProperties(ne,{MIN:{value:new ne(Bs,le.EMPTY_NODE)},MAX:{value:new ne(Qn,si)}});im.__EMPTY_NODE=le.EMPTY_NODE;Ne.__childrenNodeConstructor=le;ZR(si);tk(si);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok=!0;function He(t,e=null){if(t===null)return le.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ne(n,He(e))}if(!(t instanceof Array)&&ok){const n=[];let s=!1;if(dt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=He(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ne(o,l)))}}),n.length===0)return le.EMPTY_NODE;const i=so(n,XR,o=>o.name,Nc);if(s){const o=so(n,We.getCompare());return new le(i,He(e),new Bt({".priority":o},{".priority":We}))}else return new le(i,He(e),Bt.Default)}else{let n=le.EMPTY_NODE;return dt(t,(s,r)=>{if(Xt(t,s)&&s.substring(0,1)!=="."){const i=He(r);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(s,i))}}),n.updatePriority(He(e))}}ek(He);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak extends $o{constructor(e){super(),this.indexPath_=e,O(!te(e)&&ee(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),r=this.extractChild(n.node),i=s.compareTo(r);return i===0?nr(e.name,n.name):i}makePost(e,n){const s=He(e),r=le.EMPTY_NODE.updateChild(this.indexPath_,s);return new ne(n,r)}maxPost(){const e=le.EMPTY_NODE.updateChild(this.indexPath_,si);return new ne(Qn,e)}toString(){return tm(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk extends $o{compare(e,n){const s=e.node.compareTo(n.node);return s===0?nr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ne.MIN}maxPost(){return ne.MAX}makePost(e,n){const s=He(e);return new ne(n,s)}toString(){return".value"}}const ck=new lk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uk(t){return{type:"value",snapshotNode:t}}function dk(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function fk(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function hf(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function hk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=We}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Bs}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Qn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===We}copy(){const e=new xc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function pf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===We?n="$priority":t.index_===ck?n="$value":t.index_===Os?n="$key":(O(t.index_ instanceof ak,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ue(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ue(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ue(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ue(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ue(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function gf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==We&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro extends Xg{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=ti("p:rest:"),this.listens_={}}listen(e,n,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=ro.getListenId_(e,s),a={};this.listens_[o]=a;const l=pf(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(i,d,!1,s),$s(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",r(f,null)}})}unlisten(e,n){const s=ro.getListenId_(e,n);delete this.listens_[s]}get(e){const n=pf(e._queryParams),s=e._path.toString(),r=new rc;return this.restRequest_(s+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(n.auth=r.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Js(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=jr(a.responseText)}catch{it("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&it("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(){this.rootNode_=le.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(){return{value:null,children:new Map}}function um(t,e,n){if(te(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ee(e);t.children.has(s)||t.children.set(s,io());const r=t.children.get(s);e=be(e),um(r,e,n)}}function fl(t,e,n){t.value!==null?n(e,t.value):gk(t,(s,r)=>{const i=new we(e.toString()+"/"+s);fl(r,i,n)})}function gk(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&dt(this.last_,(s,r)=>{n[s]=n[s]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf=10*1e3,_k=30*1e3,vk=5*60*1e3;class yk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new mk(e);const s=mf+(_k-mf)*Math.random();Tr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;dt(e,(r,i)=>{i>0&&Xt(this.statsToReport_,r)&&(n[r]=i,s=!0)}),s&&this.server_.reportStats(n),Tr(this.reportStats_.bind(this),Math.floor(Math.random()*2*vk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Pt||(Pt={}));function dm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function fm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function hm(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Pt.ACK_USER_WRITE,this.source=dm()}operationForChild(e){if(te(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new we(e));return new oo(fe(),n,this.revert)}}else return O(ee(this.path)===e,"operationForChild called for unrelated child."),new oo(be(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Pt.OVERWRITE}operationForChild(e){return te(this.path)?new Jn(this.source,fe(),this.snap.getImmediateChild(e)):new Jn(this.source,be(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Pt.MERGE}operationForChild(e){if(te(this.path)){const n=this.children.subtree(new we(e));return n.isEmpty()?null:n.value?new Jn(this.source,fe(),n.value):new Gr(this.source,fe(),n)}else return O(ee(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Gr(this.source,be(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(te(e))return this.isFullyInitialized()&&!this.filtered_;const n=ee(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function bk(t,e,n,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(hk(o.childName,o.snapshotNode))}),hr(t,r,"child_removed",e,s,n),hr(t,r,"child_added",e,s,n),hr(t,r,"child_moved",i,s,n),hr(t,r,"child_changed",e,s,n),hr(t,r,"value",e,s,n),r}function hr(t,e,n,s,r,i){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Ek(t,a,l)),o.forEach(a=>{const l=wk(t,a,i);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function wk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Ek(t,e,n){if(e.childName==null||n.childName==null)throw Qs("Should only compare child_ events.");const s=new ne(e.childName,e.snapshotNode),r=new ne(n.childName,n.snapshotNode);return t.index_.compare(s,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(t,e){return{eventCache:t,serverCache:e}}function Rr(t,e,n,s){return pm(new Mc(e,n,s),t.serverCache)}function gm(t,e,n,s){return pm(t.eventCache,new Mc(e,n,s))}function hl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Xn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _a;const Ik=()=>(_a||(_a=new Qe(cR)),_a);class ve{static fromObject(e){let n=new ve(null);return dt(e,(s,r)=>{n=n.set(new we(s),r)}),n}constructor(e,n=Ik()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:fe(),value:this.value};if(te(e))return null;{const s=ee(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(be(e),n);return i!=null?{path:Pe(new we(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(te(e))return this;{const n=ee(e),s=this.children.get(n);return s!==null?s.subtree(be(e)):new ve(null)}}set(e,n){if(te(e))return new ve(n,this.children);{const s=ee(e),i=(this.children.get(s)||new ve(null)).set(be(e),n),o=this.children.insert(s,i);return new ve(this.value,o)}}remove(e){if(te(e))return this.children.isEmpty()?new ve(null):new ve(null,this.children);{const n=ee(e),s=this.children.get(n);if(s){const r=s.remove(be(e));let i;return r.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,r),this.value===null&&i.isEmpty()?new ve(null):new ve(this.value,i)}else return this}}get(e){if(te(e))return this.value;{const n=ee(e),s=this.children.get(n);return s?s.get(be(e)):null}}setTree(e,n){if(te(e))return n;{const s=ee(e),i=(this.children.get(s)||new ve(null)).setTree(be(e),n);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new ve(this.value,o)}}fold(e){return this.fold_(fe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(Pe(e,r),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,fe(),n)}findOnPath_(e,n,s){const r=this.value?s(n,this.value):!1;if(r)return r;if(te(e))return null;{const i=ee(e),o=this.children.get(i);return o?o.findOnPath_(be(e),Pe(n,i),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,fe(),n)}foreachOnPath_(e,n,s){if(te(e))return this;{this.value&&s(n,this.value);const r=ee(e),i=this.children.get(r);return i?i.foreachOnPath_(be(e),Pe(n,r),s):new ve(null)}}foreach(e){this.foreach_(fe(),e)}foreach_(e,n){this.children.inorderTraversal((s,r)=>{r.foreach_(Pe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.writeTree_=e}static empty(){return new wt(new ve(null))}}function kr(t,e,n){if(te(e))return new wt(new ve(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=lt(r,e);return i=i.updateChild(o,n),new wt(t.writeTree_.set(r,i))}else{const r=new ve(n),i=t.writeTree_.setTree(e,r);return new wt(i)}}}function _f(t,e,n){let s=t;return dt(n,(r,i)=>{s=kr(s,Pe(e,r),i)}),s}function vf(t,e){if(te(e))return wt.empty();{const n=t.writeTree_.setTree(e,new ve(null));return new wt(n)}}function pl(t,e){return rs(t,e)!=null}function rs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(lt(n.path,e)):null}function yf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(We,(s,r)=>{e.push(new ne(s,r))}):t.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new ne(s,r.value))}),e}function yn(t,e){if(te(e))return t;{const n=rs(t,e);return n!=null?new wt(new ve(n)):new wt(t.writeTree_.subtree(e))}}function gl(t){return t.writeTree_.isEmpty()}function Ws(t,e){return mm(fe(),t.writeTree_,e)}function mm(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(O(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):n=mm(Pe(t,r),i,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Pe(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(t,e){return Em(e,t)}function Ck(t,e,n,s,r){O(s>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:r}),r&&(t.visibleWrites=kr(t.visibleWrites,e,n)),t.lastWriteId=s}function Sk(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Tk(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);O(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let r=s.visible,i=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Rk(a,s.path)?r=!1:vt(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return kk(t),!0;if(s.snap)t.visibleWrites=vf(t.visibleWrites,s.path);else{const a=s.children;dt(a,l=>{t.visibleWrites=vf(t.visibleWrites,Pe(s.path,l))})}return!0}else return!1}function Rk(t,e){if(t.snap)return vt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&vt(Pe(t.path,n),e))return!0;return!1}function kk(t){t.visibleWrites=vm(t.allWrites,Ak,fe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Ak(t){return t.visible}function vm(t,e,n){let s=wt.empty();for(let r=0;r<t.length;++r){const i=t[r];if(e(i)){const o=i.path;let a;if(i.snap)vt(n,o)?(a=lt(n,o),s=kr(s,a,i.snap)):vt(o,n)&&(a=lt(o,n),s=kr(s,fe(),i.snap.getChild(a)));else if(i.children){if(vt(n,o))a=lt(n,o),s=_f(s,a,i.children);else if(vt(o,n))if(a=lt(o,n),te(a))s=_f(s,fe(),i.children);else{const l=$s(i.children,ee(a));if(l){const c=l.getChild(be(a));s=kr(s,fe(),c)}}}else throw Qs("WriteRecord should have .snap or .children")}}return s}function ym(t,e,n,s,r){if(!s&&!r){const i=rs(t.visibleWrites,e);if(i!=null)return i;{const o=yn(t.visibleWrites,e);if(gl(o))return n;if(n==null&&!pl(o,fe()))return null;{const a=n||le.EMPTY_NODE;return Ws(o,a)}}}else{const i=yn(t.visibleWrites,e);if(!r&&gl(i))return n;if(!r&&n==null&&!pl(i,fe()))return null;{const o=function(c){return(c.visible||r)&&(!s||!~s.indexOf(c.writeId))&&(vt(c.path,e)||vt(e,c.path))},a=vm(t.allWrites,o,e),l=n||le.EMPTY_NODE;return Ws(a,l)}}}function Pk(t,e,n){let s=le.EMPTY_NODE;const r=rs(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(We,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(n){const i=yn(t.visibleWrites,e);return n.forEachChild(We,(o,a)=>{const l=Ws(yn(i,new we(o)),a);s=s.updateImmediateChild(o,l)}),yf(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=yn(t.visibleWrites,e);return yf(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Ok(t,e,n,s,r){O(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=Pe(e,n);if(pl(t.visibleWrites,i))return null;{const o=yn(t.visibleWrites,i);return gl(o)?r.getChild(n):Ws(o,r.getChild(n))}}function Nk(t,e,n,s){const r=Pe(e,n),i=rs(t.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(n)){const o=yn(t.visibleWrites,r);return Ws(o,s.getNode().getImmediateChild(n))}else return null}function xk(t,e){return rs(t.visibleWrites,e)}function Mk(t,e,n,s,r,i,o){let a;const l=yn(t.visibleWrites,e),c=rs(l,fe());if(c!=null)a=c;else if(n!=null)a=Ws(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=f.getNext();for(;p&&u.length<r;)d(p,s)!==0&&u.push(p),p=f.getNext();return u}else return[]}function Dk(){return{visibleWrites:wt.empty(),allWrites:[],lastWriteId:-1}}function ml(t,e,n,s){return ym(t.writeTree,t.treePath,e,n,s)}function bm(t,e){return Pk(t.writeTree,t.treePath,e)}function bf(t,e,n,s){return Ok(t.writeTree,t.treePath,e,n,s)}function ao(t,e){return xk(t.writeTree,Pe(t.treePath,e))}function Lk(t,e,n,s,r,i){return Mk(t.writeTree,t.treePath,e,n,s,r,i)}function Dc(t,e,n){return Nk(t.writeTree,t.treePath,e,n)}function wm(t,e){return Em(Pe(t.treePath,e),t.writeTree)}function Em(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;O(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),O(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(s,hf(s,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(s,fk(s,r.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(s,dk(s,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(s,hf(s,e.snapshotNode,r.oldSnap));else throw Qs("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Im=new Uk;class Lc{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Mc(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Dc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Xn(this.viewCache_),i=Lk(this.writes_,r,n,1,s,e);return i.length===0?null:i[0]}}function $k(t,e){O(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function jk(t,e,n,s,r){const i=new Fk;let o,a;if(n.type===Pt.OVERWRITE){const c=n;c.source.fromUser?o=_l(t,e,c.path,c.snap,s,r,i):(O(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!te(c.path),o=lo(t,e,c.path,c.snap,s,r,a,i))}else if(n.type===Pt.MERGE){const c=n;c.source.fromUser?o=Bk(t,e,c.path,c.children,s,r,i):(O(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=vl(t,e,c.path,c.children,s,r,a,i))}else if(n.type===Pt.ACK_USER_WRITE){const c=n;c.revert?o=Kk(t,e,c.path,s,r,i):o=Wk(t,e,c.path,c.affectedTree,s,r,i)}else if(n.type===Pt.LISTEN_COMPLETE)o=Vk(t,e,n.path,s,i);else throw Qs("Unknown operation type: "+n.type);const l=i.getChanges();return Hk(e,o,l),{viewCache:o,changes:l}}function Hk(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=hl(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push(uk(hl(e)))}}function Cm(t,e,n,s,r,i){const o=e.eventCache;if(ao(s,n)!=null)return e;{let a,l;if(te(n))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Xn(e),u=c instanceof le?c:le.EMPTY_NODE,d=bm(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const c=ml(s,Xn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=ee(n);if(c===".priority"){O(In(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=bf(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=be(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=bf(s,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=Dc(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,r,i):a=o.getNode()}}return Rr(e,a,o.isFullyInitialized()||te(n),t.filter.filtersNodes())}}function lo(t,e,n,s,r,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(te(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=ee(n);if(!l.isCompleteForPath(n)&&In(n)>1)return e;const m=be(n),v=l.getNode().getImmediateChild(p).updateChild(m,s);p===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),p,v,m,Im,null)}const d=gm(e,c,l.isFullyInitialized()||te(n),u.filtersNodes()),f=new Lc(r,d,i);return Cm(t,d,n,r,f,a)}function _l(t,e,n,s,r,i,o){const a=e.eventCache;let l,c;const u=new Lc(r,e,i);if(te(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Rr(e,c,!0,t.filter.filtersNodes());else{const d=ee(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Rr(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=be(n),p=a.getNode().getImmediateChild(d);let m;if(te(f))m=s;else{const _=u.getCompleteChild(d);_!=null?em(f)===".priority"&&_.getChild(nm(f)).isEmpty()?m=_:m=_.updateChild(f,s):m=le.EMPTY_NODE}if(p.equals(m))l=e;else{const _=t.filter.updateChild(a.getNode(),d,m,f,u,o);l=Rr(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function wf(t,e){return t.eventCache.isCompleteForChild(e)}function Bk(t,e,n,s,r,i,o){let a=e;return s.foreach((l,c)=>{const u=Pe(n,l);wf(e,ee(u))&&(a=_l(t,a,u,c,r,i,o))}),s.foreach((l,c)=>{const u=Pe(n,l);wf(e,ee(u))||(a=_l(t,a,u,c,r,i,o))}),a}function Ef(t,e,n){return n.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function vl(t,e,n,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;te(n)?c=s:c=new ve(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),m=Ef(t,p,f);l=lo(t,l,new we(d),m,r,i,o,a)}}),c.children.inorderTraversal((d,f)=>{const p=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!p){const m=e.serverCache.getNode().getImmediateChild(d),_=Ef(t,m,f);l=lo(t,l,new we(d),_,r,i,o,a)}}),l}function Wk(t,e,n,s,r,i,o){if(ao(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(te(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return lo(t,e,n,l.getNode().getChild(n),r,i,a,o);if(te(n)){let c=new ve(null);return l.getNode().forEachChild(Os,(u,d)=>{c=c.set(new we(u),d)}),vl(t,e,n,c,r,i,a,o)}else return e}else{let c=new ve(null);return s.foreach((u,d)=>{const f=Pe(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),vl(t,e,n,c,r,i,a,o)}}function Vk(t,e,n,s,r){const i=e.serverCache,o=gm(e,i.getNode(),i.isFullyInitialized()||te(n),i.isFiltered());return Cm(t,o,n,s,Im,r)}function Kk(t,e,n,s,r,i){let o;if(ao(s,n)!=null)return e;{const a=new Lc(s,e,r),l=e.eventCache.getNode();let c;if(te(n)||ee(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ml(s,Xn(e));else{const d=e.serverCache.getNode();O(d instanceof le,"serverChildren would be complete if leaf node"),u=bm(s,d)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=ee(n);let d=Dc(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,be(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,le.EMPTY_NODE,be(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ml(s,Xn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||ao(s,fe())!=null,Rr(e,c,o,t.filter.filtersNodes())}}function zk(t,e){const n=Xn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!te(e)&&!n.getImmediateChild(ee(e)).isEmpty())?n.getChild(e):null}function If(t,e,n,s){e.type===Pt.MERGE&&e.source.queryId!==null&&(O(Xn(t.viewCache_),"We should always have a full cache before handling merges"),O(hl(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,i=jk(t.processor_,r,e,n,s);return $k(t.processor_,i.viewCache),O(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,Gk(t,i.changes,i.viewCache.eventCache.getNode(),null)}function Gk(t,e,n,s){const r=s?[s]:t.eventRegistrations_;return bk(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cf;function qk(t){O(!Cf,"__referenceConstructor has already been defined"),Cf=t}function Fc(t,e,n,s){const r=e.source.queryId;if(r!==null){const i=t.views.get(r);return O(i!=null,"SyncTree gave us an op for an invalid query."),If(i,e,n,s)}else{let i=[];for(const o of t.views.values())i=i.concat(If(o,e,n,s));return i}}function Uc(t,e){let n=null;for(const s of t.views.values())n=n||zk(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sf;function Yk(t){O(!Sf,"__referenceConstructor has already been defined"),Sf=t}class Tf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ve(null),this.pendingWriteTree_=Dk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Qk(t,e,n,s,r){return Ck(t.pendingWriteTree_,e,n,s,r),r?Ho(t,new Jn(dm(),e,n)):[]}function vs(t,e,n=!1){const s=Sk(t.pendingWriteTree_,e);if(Tk(t.pendingWriteTree_,e)){let i=new ve(null);return s.snap!=null?i=i.set(fe(),!0):dt(s.children,o=>{i=i.set(new we(o),!0)}),Ho(t,new oo(s.path,i,n))}else return[]}function jo(t,e,n){return Ho(t,new Jn(fm(),e,n))}function Jk(t,e,n){const s=ve.fromObject(n);return Ho(t,new Gr(fm(),e,s))}function Xk(t,e,n,s){const r=km(t,s);if(r!=null){const i=Am(r),o=i.path,a=i.queryId,l=lt(o,e),c=new Jn(hm(a),l,n);return Pm(t,o,c)}else return[]}function Zk(t,e,n,s){const r=km(t,s);if(r){const i=Am(r),o=i.path,a=i.queryId,l=lt(o,e),c=ve.fromObject(n),u=new Gr(hm(a),l,c);return Pm(t,o,u)}else return[]}function Sm(t,e,n){const r=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=lt(o,e),c=Uc(a,l);if(c)return c});return ym(r,e,i,n,!0)}function Ho(t,e){return Tm(e,t.syncPointTree_,null,_m(t.pendingWriteTree_,fe()))}function Tm(t,e,n,s){if(te(t.path))return Rm(t,e,n,s);{const r=e.get(fe());n==null&&r!=null&&(n=Uc(r,fe()));let i=[];const o=ee(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=wm(s,o);i=i.concat(Tm(a,l,c,u))}return r&&(i=i.concat(Fc(r,t,s,n))),i}}function Rm(t,e,n,s){const r=e.get(fe());n==null&&r!=null&&(n=Uc(r,fe()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=wm(s,o),u=t.operationForChild(o);u&&(i=i.concat(Rm(u,a,l,c)))}),r&&(i=i.concat(Fc(r,t,s,n))),i}function km(t,e){return t.tagToQueryMap.get(e)}function Am(t){const e=t.indexOf("$");return O(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new we(t.substr(0,e))}}function Pm(t,e,n){const s=t.syncPointTree_.get(e);O(s,"Missing sync point for query tag that we're tracking");const r=_m(t.pendingWriteTree_,e);return Fc(s,n,r,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new $c(n)}node(){return this.node_}}class jc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Pe(this.path_,e);return new jc(this.syncTree_,n)}node(){return Sm(this.syncTree_,this.path_)}}const eA=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Rf=function(t,e,n){if(!t||typeof t!="object")return t;if(O(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return tA(t[".sv"],e,n);if(typeof t[".sv"]=="object")return nA(t[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},tA=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:O(!1,"Unexpected server value: "+t)}},nA=function(t,e,n){t.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&O(!1,"Unexpected increment value: "+s);const r=e.node();if(O(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},sA=function(t,e,n,s){return Hc(e,new jc(n,t),s)},rA=function(t,e,n){return Hc(t,new $c(e),n)};function Hc(t,e,n){const s=t.getPriority().val(),r=Rf(s,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=Rf(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new Ne(a,He(r)):t}else{const o=t;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new Ne(r))),o.forEachChild(We,(a,l)=>{const c=Hc(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Wc(t,e){let n=e instanceof we?e:new we(e),s=t,r=ee(n);for(;r!==null;){const i=$s(s.node.children,r)||{children:{},childCount:0};s=new Bc(r,s,i),n=be(n),r=ee(n)}return s}function sr(t){return t.node.value}function Om(t,e){t.node.value=e,yl(t)}function Nm(t){return t.node.childCount>0}function iA(t){return sr(t)===void 0&&!Nm(t)}function Bo(t,e){dt(t.node.children,(n,s)=>{e(new Bc(n,t,s))})}function xm(t,e,n,s){n&&!s&&e(t),Bo(t,r=>{xm(r,e,!0,s)}),n&&s&&e(t)}function oA(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ri(t){return new we(t.parent===null?t.name:ri(t.parent)+"/"+t.name)}function yl(t){t.parent!==null&&aA(t.parent,t.name,t)}function aA(t,e,n){const s=iA(n),r=Xt(t.node.children,e);s&&r?(delete t.node.children[e],t.node.childCount--,yl(t)):!s&&!r&&(t.node.children[e]=n.node,t.node.childCount++,yl(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=/[\[\].#$\/\u0000-\u001F\u007F]/,cA=/[\[\].#$\u0000-\u001F\u007F]/,va=10*1024*1024,Mm=function(t){return typeof t=="string"&&t.length!==0&&!lA.test(t)},Dm=function(t){return typeof t=="string"&&t.length!==0&&!cA.test(t)},uA=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Dm(t)},Lm=function(t,e,n){const s=n instanceof we?new VR(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Mn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Mn(s)+" with contents = "+e.toString());if(xg(e))throw new Error(t+"contains "+e.toString()+" "+Mn(s));if(typeof e=="string"&&e.length>va/3&&Oo(e)>va)throw new Error(t+"contains a string greater than "+va+" utf8 bytes "+Mn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(dt(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Mm(o)))throw new Error(t+" contains an invalid key ("+o+") "+Mn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);KR(s,o),Lm(t,a,s),zR(s)}),r&&i)throw new Error(t+' contains ".value" child '+Mn(s)+" in addition to actual children.")}},Fm=function(t,e,n,s){if(!(s&&n===void 0)&&!Dm(n))throw new Error(_p(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},dA=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Fm(t,e,n,s)},fA=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Mm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!uA(n))throw new Error(_p(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function pA(t,e){let n=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();n!==null&&!sm(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(r)}n&&t.eventLists_.push(n)}function is(t,e,n){pA(t,n),gA(t,s=>vt(s,e)||vt(e,s))}function gA(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const r=t.eventLists_[s];if(r){const i=r.path;e(i)?(mA(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function mA(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Bn&&je("event: "+n.toString()),ni(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A="repo_interrupt",vA=25;class yA{constructor(e,n,s,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new hA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=io(),this.transactionQueueTree_=new Bc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function bA(t,e,n){if(t.stats_=Ac(t.repoInfo_),t.forceRestClient_||gR())t.server_=new ro(t.repoInfo_,(s,r,i,o)=>{kf(t,s,r,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Af(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ue(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Vt(t.repoInfo_,e,(s,r,i,o)=>{kf(t,s,r,i,o)},s=>{Af(t,s)},s=>{EA(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=bR(t.repoInfo_,()=>new yk(t.stats_,t.server_)),t.infoData_=new pk,t.infoSyncTree_=new Tf({startListening:(s,r,i,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=jo(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Vc(t,"connected",!1),t.serverSyncTree_=new Tf({startListening:(s,r,i,o)=>(t.server_.listen(s,i,r,(a,l)=>{const c=o(a,l);is(t.eventQueue_,s._path,c)}),[]),stopListening:(s,r)=>{t.server_.unlisten(s,r)}})}function wA(t){const n=t.infoData_.getNode(new we(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Um(t){return eA({timestamp:wA(t)})}function kf(t,e,n,s,r){t.dataUpdateCount++;const i=new we(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(s){const l=Ki(n,c=>He(c));o=Zk(t.serverSyncTree_,i,l,r)}else{const l=He(n);o=Xk(t.serverSyncTree_,i,l,r)}else if(s){const l=Ki(n,c=>He(c));o=Jk(t.serverSyncTree_,i,l)}else{const l=He(n);o=jo(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=zc(t,i)),is(t.eventQueue_,a,o)}function Af(t,e){Vc(t,"connected",e),e===!1&&CA(t)}function EA(t,e){dt(e,(n,s)=>{Vc(t,n,s)})}function Vc(t,e,n){const s=new we("/.info/"+e),r=He(n);t.infoData_.updateSnapshot(s,r);const i=jo(t.infoSyncTree_,s,r);is(t.eventQueue_,s,i)}function IA(t){return t.nextWriteId_++}function CA(t){$m(t,"onDisconnectEvents");const e=Um(t),n=io();fl(t.onDisconnect_,fe(),(r,i)=>{const o=sA(r,i,t.serverSyncTree_,e);um(n,r,o)});let s=[];fl(n,fe(),(r,i)=>{s=s.concat(jo(t.serverSyncTree_,r,i));const o=kA(t,r);zc(t,o)}),t.onDisconnect_=io(),is(t.eventQueue_,fe(),s)}function SA(t){t.persistentConnection_&&t.persistentConnection_.interrupt(_A)}function $m(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),je(n,...e)}function jm(t,e,n){return Sm(t.serverSyncTree_,e,n)||le.EMPTY_NODE}function Kc(t,e=t.transactionQueueTree_){if(e||Wo(t,e),sr(e)){const n=Bm(t,e);O(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&TA(t,ri(e),n)}else Nm(e)&&Bo(e,n=>{Kc(t,n)})}function TA(t,e,n){const s=n.map(c=>c.currentWriteId),r=jm(t,e,s);let i=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];O(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=lt(e,u.path);i=i.updateChild(d,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{$m(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(vs(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Wo(t,Wc(t.transactionQueueTree_,e)),Kc(t,t.transactionQueueTree_),is(t.eventQueue_,e,u);for(let f=0;f<d.length;f++)ni(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{it("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}zc(t,e)}},o)}function zc(t,e){const n=Hm(t,e),s=ri(n),r=Bm(t,n);return RA(t,r,s),s}function RA(t,e,n){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=lt(n,l.path);let u=!1,d;if(O(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,r=r.concat(vs(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=vA)u=!0,d="maxretry",r=r.concat(vs(t.serverSyncTree_,l.currentWriteId,!0));else{const f=jm(t,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){Lm("transaction failed: Data returned ",p,l.path);let m=He(p);typeof p=="object"&&p!=null&&Xt(p,".priority")||(m=m.updatePriority(f.getPriority()));const v=l.currentWriteId,C=Um(t),S=rA(m,f,C);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=S,l.currentWriteId=IA(t),o.splice(o.indexOf(v),1),r=r.concat(Qk(t.serverSyncTree_,l.path,S,l.currentWriteId,l.applyLocally)),r=r.concat(vs(t.serverSyncTree_,v,!0))}else u=!0,d="nodata",r=r.concat(vs(t.serverSyncTree_,l.currentWriteId,!0))}is(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}Wo(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)ni(s[a]);Kc(t,t.transactionQueueTree_)}function Hm(t,e){let n,s=t.transactionQueueTree_;for(n=ee(e);n!==null&&sr(s)===void 0;)s=Wc(s,n),e=be(e),n=ee(e);return s}function Bm(t,e){const n=[];return Wm(t,e,n),n.sort((s,r)=>s.order-r.order),n}function Wm(t,e,n){const s=sr(e);if(s)for(let r=0;r<s.length;r++)n.push(s[r]);Bo(e,r=>{Wm(t,r,n)})}function Wo(t,e){const n=sr(e);if(n){let s=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[s]=n[r],s++);n.length=s,Om(e,n.length>0?n:void 0)}Bo(e,s=>{Wo(t,s)})}function kA(t,e){const n=ri(Hm(t,e)),s=Wc(t.transactionQueueTree_,e);return oA(s,r=>{ya(t,r)}),ya(t,s),xm(s,r=>{ya(t,r)}),n}function ya(t,e){const n=sr(e);if(n){const s=[];let r=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(O(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(O(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(vs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?Om(e,void 0):n.length=i+1,is(t.eventQueue_,ri(e),r);for(let o=0;o<s.length;o++)ni(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let r=n[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function PA(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):it(`Invalid query segment '${n}' in query '${t}'`)}return e}const Pf=function(t,e){const n=OA(t),s=n.namespace;n.domain==="firebase.com"&&Yt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Yt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||aR();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Kg(n.host,n.secure,s,r,e,"",s!==n.subdomain),path:new we(n.pathString)}},OA=function(t){let e="",n="",s="",r="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(r=AA(t.substring(u,d)));const f=PA(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),i=s}"ns"in f&&(i=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,n,s,r){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=r}get key(){return te(this._path)?null:em(this._path)}get ref(){return new os(this._repo,this._path)}get _queryIdentifier(){const e=gf(this._queryParams),n=Rc(e);return n==="{}"?"default":n}get _queryObject(){return gf(this._queryParams)}isEqual(e){if(e=It(e),!(e instanceof Gc))return!1;const n=this._repo===e._repo,s=sm(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+WR(this._path)}}class os extends Gc{constructor(e,n){super(e,n,new xc,!1)}get parent(){const e=nm(this._path);return e===null?null:new os(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function Nn(t,e){return t=It(t),t._checkNotDeleted("ref"),e!==void 0?NA(t._root,e):t._root}function NA(t,e){return t=It(t),ee(t._path)===null?dA("child","path",e,!1):Fm("child","path",e,!1),new os(t._repo,Pe(t._path,e))}qk(os);Yk(os);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA="FIREBASE_DATABASE_EMULATOR_HOST",bl={};let MA=!1;function DA(t,e,n,s){t.repoInfo_=new Kg(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function LA(t,e,n,s,r){let i=s||t.options.databaseURL;i===void 0&&(t.options.projectId||Yt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),je("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Pf(i,r),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[xA]),c?(l=!0,i=`http://${c}?ns=${a.namespace}`,o=Pf(i,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new Ps(Ps.OWNER):new _R(t.name,t.options,e);fA("Invalid Firebase Database URL",o),te(o.path)||Yt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=UA(a,t,u,new mR(t,n));return new $A(d,t)}function FA(t,e){const n=bl[e];(!n||n[t.key]!==t)&&Yt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),SA(t),delete n[t.key]}function UA(t,e,n,s){let r=bl[e.name];r||(r={},bl[e.name]=r);let i=r[t.toURLString()];return i&&Yt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new yA(t,MA,n,s),r[t.toURLString()]=i,i}class $A{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(bA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new os(this._repo,fe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(FA(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Yt("Cannot call "+e+" on a deleted database.")}}function qc(t=bp(),e){const n=lc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=ME("database");s&&jA(n,...s)}return n}function jA(t,e,n,s={}){t=It(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Yt("Cannot call useEmulator() after instance has already been initialized.");const r=t._repoInternal;let i;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&Yt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new Ps(Ps.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:DE(s.mockUserToken,t.app.options.projectId);i=new Ps(o)}DA(r,e,n,i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HA(t){nR(Xs),js(new Gn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return LA(s,r,i,n)},"PUBLIC").setMultipleInstances(!0)),vn(Qd,Jd,t),vn(Qd,Jd,"esm2017")}Vt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Vt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};HA();const BA={name:"TaskList",components:{MainHeader:tR,Icon:tc},setup(){const t=Q({}),e=Q(!1),n=Q(""),s=Q(null),r=qc();let i=null;const o=Zi().onAuthStateChanged(u=>{u?(s.value=u.uid,a()):(s.value=null,t.value={},i&&(Nn(r,"tasks").off("value",i),i=null))});function a(){e.value=!0,i&&Nn("tasks").off("value",i),i=Nn(r,"tasks").orderByChild("userUID").equalTo(s.value).on("value",u=>{t.value=u.val()||{},e.value=!1})}function l(){!s.value||!n.value.trim()||Nn(r,"tasks").push({taskText:n.value,userUID:s.value}).then(()=>{n.value=""}).catch(u=>{console.error("Error adding task:",u)})}function c(u){Nn(r,"tasks").child(u).once("value",d=>{const f=d.val();f&&f.userUID===s.value?Nn(r,"tasks").child(u).remove().then(()=>console.log("Task removed!")).catch(p=>console.error("Error removing task:",p)):console.error("Access denied: task doesn't belong to user.")})}return bo(()=>{i&&Nn("tasks").off("value",i),o()}),{taskArray:t,isLoading:e,newTaskText:n,addTask:l,deleteTask:c}}},WA=t=>(rh("data-v-17d8b9ce"),t=t(),ih(),t),VA={class:"dark:bg-gray-900 min-h-screen p-4"},KA={key:0,class:"flex justify-center items-center h-32"},zA=WA(()=>Z("div",{class:"spinner"},null,-1)),GA=[zA],qA={key:1,class:"flex justify-center"},YA={class:"task-list"},QA=["onClick"];function JA(t,e,n,s,r,i){const o=Ke("main-header"),a=Ke("Icon");return Fe(),Ye("div",VA,[oe(o),s.isLoading?(Fe(),Ye("div",KA,GA)):(Fe(),Ye("div",qA,[Z("ul",YA,[(Fe(!0),Ye(Me,null,bv(s.taskArray,(l,c)=>(Fe(),Ye("li",{key:c,class:"task-item"},[Z("span",null,Ni(l.taskText),1),Z("button",{onClick:u=>s.deleteTask(c),class:"delete-btn"},[oe(a,{icon:"mdi-light:delete"})],8,QA)]))),128))])]))])}const XA=Dt(BA,[["render",JA],["__scopeId","data-v-17d8b9ce"]]),ZA={},eP=Z("br",null,null,-1),tP={class:"rounded-xl shadow-md p-10 w-fit mx-auto m-32-auto place-content-center grid place-items-center dark:bg-sky-950"};function nP(t,e){return Fe(),Ye(Me,null,[eP,Z("div",tP,[wo(t.$slots,"default")])],64)}const Vm=Dt(ZA,[["render",nP]]),sP={components:{ContentBox:Vm,BaseHeader:yc}},rP=Z("div",{class:"py-0 px-3 font-semibold dark:text-white"},"Task Project",-1),iP=Z("h2",{class:"font-semibold p-4 dark:text-white"},"Page Not Found",-1),oP={class:"dark:text-white"};function aP(t,e,n,s,r,i){const o=Ke("base-header"),a=Ke("router-link"),l=Ke("content-box");return Fe(),Ye(Me,null,[oe(o,null,{default:st(()=>[rP]),_:1}),Z("section",null,[oe(l,{class:"dark:bg-sky-950"},{default:st(()=>[iP,Z("div",oP,[gn(" This page could not be found - do you want to return to "),oe(a,{to:"/login",class:"underline underline-offset-2"},{default:st(()=>[gn("login")]),_:1}),gn("? ")])]),_:1})])],64)}const lP=Dt(sP,[["render",aP]]),cP=cw({history:Sb(),routes:[{path:"/",redirect:"login"},{path:"/login",component:PT},{path:"/tasks",component:XA},{path:"/:notFound(.*)",component:lP}]});var uP="firebase",dP="11.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vn(uP,dP,"app");const fP={apiKey:"AIzaSyD6rOiOiFAkse6Y3_hdzvP-Z1zRv20wrJg",authDomain:"taskproject-caf25.firebaseapp.com",projectId:"taskproject-caf25",storageBucket:"taskproject-caf25.firebasestorage.app",messagingSenderId:"1061401138693",appId:"1:1061401138693:web:03fc3339b03b4cb79eee6c",databaseURL:"https://taskproject-caf25-default-rtdb.firebaseio.com/"};cc(fP);const yi=qc(),hP={async refreshTasks(t){yi.ref("tasks").on("value",n=>{const s=n.val();t.commit("setTasks",s)})},async submitData(t,e){const n=e.toString();if(n!==""){const r=yi.ref("tasks").push(),i=firebase.auth().currentUser.uid;r.set({taskText:n,userUID:i})}},async deleteTask(t,e){const n=e.toString();yi.ref("/tasks/").on("value",function(s){yi.ref("/tasks/"+n).remove().then(function(){console.log("Remove succeeded.")}).catch(function(i){console.log("Remove failed: "+i.message)})})}},pP={taskArray(t){return t.taskArray},taskText(t){return t.taskText}},gP={setTasks(t,e){t.taskArray=e,console.log(t.taskArray)},registerTasks(t,e){t.taskArray.push(e)}},mP={namespace:!0,state(){return{taskArray:[],taskText:""}},actions:hP,getters:pP,mutations:gP},_P=qT({modules:{task:mP}});const vP={},yP={class:"min-h-screen dark:bg-gray-900"};function bP(t,e){const n=Ke("router-view");return Fe(),Ye("div",yP,[oe(n)])}const wP=Dt(vP,[["render",bP]]),EP={},IP={class:"bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow dark:bg-sky-800 dark:text-white"};function CP(t,e){return Fe(),Ye("div",null,[Z("button",IP,[wo(t.$slots,"default")])])}const SP=Dt(EP,[["render",CP]]),TP={apiKey:"AIzaSyD6rOiOiFAkse6Y3_hdzvP-Z1zRv20wrJg",authDomain:"taskproject-caf25.firebaseapp.com",projectId:"taskproject-caf25",storageBucket:"taskproject-caf25.firebasestorage.app",messagingSenderId:"1061401138693",appId:"1:1061401138693:web:03fc3339b03b4cb79eee6c",databaseURL:"https://taskproject-caf25-default-rtdb.firebaseio.com/"},rr=My(wP);cc(TP);qc();rr.component("content-box",Vm);rr.component("base-button",SP);rr.use(Jy);rr.use(_P);rr.use(cP);rr.mount("#app");
