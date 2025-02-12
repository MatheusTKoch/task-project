(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function bl(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const ye={},vs=[],yt=()=>{},jm=()=>!1,Hm=/^on[^a-z]/,lo=t=>Hm.test(t),wl=t=>t.startsWith("onUpdate:"),Te=Object.assign,El=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Bm=Object.prototype.hasOwnProperty,se=(t,e)=>Bm.call(t,e),$=Array.isArray,ys=t=>qr(t)==="[object Map]",Ws=t=>qr(t)==="[object Set]",Qc=t=>qr(t)==="[object Date]",q=t=>typeof t=="function",Re=t=>typeof t=="string",Ar=t=>typeof t=="symbol",he=t=>t!==null&&typeof t=="object",kf=t=>he(t)&&q(t.then)&&q(t.catch),Af=Object.prototype.toString,qr=t=>Af.call(t),Wm=t=>qr(t).slice(8,-1),Pf=t=>qr(t)==="[object Object]",Il=t=>Re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,yi=bl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),co=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Vm=/-(\w)/g,Mt=co(t=>t.replace(Vm,(e,n)=>n?n.toUpperCase():"")),Km=/\B([A-Z])/g,Zn=co(t=>t.replace(Km,"-$1").toLowerCase()),uo=co(t=>t.charAt(0).toUpperCase()+t.slice(1)),Wo=co(t=>t?`on${uo(t)}`:""),Pr=(t,e)=>!Object.is(t,e),bi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ai=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Pi=t=>{const e=parseFloat(t);return isNaN(e)?t:e},zm=t=>{const e=Re(t)?Number(t):NaN;return isNaN(e)?t:e};let Jc;const ya=()=>Jc||(Jc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Cl(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Re(s)?Qm(s):Cl(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Re(t))return t;if(he(t))return t}}const Gm=/;(?![^(]*\))/g,qm=/:([^]+)/,Ym=/\/\*[^]*?\*\//g;function Qm(t){const e={};return t.replace(Ym,"").split(Gm).forEach(n=>{if(n){const s=n.split(qm);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Or(t){let e="";if(Re(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const s=Or(t[n]);s&&(e+=s+" ")}else if(he(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Jm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xm=bl(Jm);function Of(t){return!!t||t===""}function Zm(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Wn(t[s],e[s]);return n}function Wn(t,e){if(t===e)return!0;let n=Qc(t),s=Qc(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Ar(t),s=Ar(e),n||s)return t===e;if(n=$(t),s=$(e),n||s)return n&&s?Zm(t,e):!1;if(n=he(t),s=he(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Wn(t[o],e[o]))return!1}}return String(t)===String(e)}function Sl(t,e){return t.findIndex(n=>Wn(n,e))}const Oi=t=>Re(t)?t:t==null?"":$(t)||he(t)&&(t.toString===Af||!q(t.toString))?JSON.stringify(t,Nf,2):String(t),Nf=(t,e)=>e&&e.__v_isRef?Nf(t,e.value):ys(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Ws(e)?{[`Set(${e.size})`]:[...e.values()]}:he(e)&&!$(e)&&!Pf(e)?String(e):e;let nt;class xf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=nt,!e&&nt&&(this.index=(nt.scopes||(nt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=nt;try{return nt=this,e()}finally{nt=n}}}on(){nt=this}off(){nt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function e_(t){return new xf(t)}function t_(t,e=nt){e&&e.active&&e.effects.push(t)}function Mf(){return nt}function n_(t){nt&&nt.cleanups.push(t)}const Tl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Df=t=>(t.w&wn)>0,Lf=t=>(t.n&wn)>0,s_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=wn},r_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Df(r)&&!Lf(r)?r.delete(t):e[n++]=r,r.w&=~wn,r.n&=~wn}e.length=n}},Ni=new WeakMap;let pr=0,wn=1;const ba=30;let gt;const jn=Symbol(""),wa=Symbol("");class Rl{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,t_(this,s)}run(){if(!this.active)return this.fn();let e=gt,n=pn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=gt,gt=this,pn=!0,wn=1<<++pr,pr<=ba?s_(this):Xc(this),this.fn()}finally{pr<=ba&&r_(this),wn=1<<--pr,gt=this.parent,pn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){gt===this?this.deferStop=!0:this.active&&(Xc(this),this.onStop&&this.onStop(),this.active=!1)}}function Xc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let pn=!0;const Ff=[];function Vs(){Ff.push(pn),pn=!1}function Ks(){const t=Ff.pop();pn=t===void 0?!0:t}function Ze(t,e,n){if(pn&&gt){let s=Ni.get(t);s||Ni.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Tl()),Uf(r)}}function Uf(t,e){let n=!1;pr<=ba?Lf(t)||(t.n|=wn,n=!Df(t)):n=!t.has(gt),n&&(t.add(gt),gt.deps.push(t))}function Kt(t,e,n,s,r,i){const o=Ni.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?Il(n)&&a.push(o.get("length")):(a.push(o.get(jn)),ys(t)&&a.push(o.get(wa)));break;case"delete":$(t)||(a.push(o.get(jn)),ys(t)&&a.push(o.get(wa)));break;case"set":ys(t)&&a.push(o.get(jn));break}if(a.length===1)a[0]&&Ea(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ea(Tl(l))}}function Ea(t,e){const n=$(t)?t:[...t];for(const s of n)s.computed&&Zc(s);for(const s of n)s.computed||Zc(s)}function Zc(t,e){(t!==gt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function i_(t,e){var n;return(n=Ni.get(t))==null?void 0:n.get(e)}const o_=bl("__proto__,__v_isRef,__isVue"),$f=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ar)),a_=kl(),l_=kl(!1,!0),c_=kl(!0),eu=u_();function u_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=re(this);for(let i=0,o=this.length;i<o;i++)Ze(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(re)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Vs();const s=re(this)[e].apply(this,n);return Ks(),s}}),t}function d_(t){const e=re(this);return Ze(e,"has",t),e.hasOwnProperty(t)}function kl(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?R_:Vf:e?Wf:Bf).get(s))return s;const o=$(s);if(!t){if(o&&se(eu,r))return Reflect.get(eu,r,i);if(r==="hasOwnProperty")return d_}const a=Reflect.get(s,r,i);return(Ar(r)?$f.has(r):o_(r))||(t||Ze(s,"get",r),e)?a:Pe(a)?o&&Il(r)?a:a.value:he(a)?t?ho(a):zs(a):a}}const f_=jf(),h_=jf(!0);function jf(t=!1){return function(n,s,r,i){let o=n[s];if(Os(o)&&Pe(o)&&!Pe(r))return!1;if(!t&&(!xi(r)&&!Os(r)&&(o=re(o),r=re(r)),!$(n)&&Pe(o)&&!Pe(r)))return o.value=r,!0;const a=$(n)&&Il(s)?Number(s)<n.length:se(n,s),l=Reflect.set(n,s,r,i);return n===re(i)&&(a?Pr(r,o)&&Kt(n,"set",s,r):Kt(n,"add",s,r)),l}}function p_(t,e){const n=se(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Kt(t,"delete",e,void 0),s}function g_(t,e){const n=Reflect.has(t,e);return(!Ar(e)||!$f.has(e))&&Ze(t,"has",e),n}function m_(t){return Ze(t,"iterate",$(t)?"length":jn),Reflect.ownKeys(t)}const Hf={get:a_,set:f_,deleteProperty:p_,has:g_,ownKeys:m_},__={get:c_,set(t,e){return!0},deleteProperty(t,e){return!0}},v_=Te({},Hf,{get:l_,set:h_}),Al=t=>t,fo=t=>Reflect.getPrototypeOf(t);function ii(t,e,n=!1,s=!1){t=t.__v_raw;const r=re(t),i=re(e);n||(e!==i&&Ze(r,"get",e),Ze(r,"get",i));const{has:o}=fo(r),a=s?Al:n?Nl:Nr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function oi(t,e=!1){const n=this.__v_raw,s=re(n),r=re(t);return e||(t!==r&&Ze(s,"has",t),Ze(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function ai(t,e=!1){return t=t.__v_raw,!e&&Ze(re(t),"iterate",jn),Reflect.get(t,"size",t)}function tu(t){t=re(t);const e=re(this);return fo(e).has.call(e,t)||(e.add(t),Kt(e,"add",t,t)),this}function nu(t,e){e=re(e);const n=re(this),{has:s,get:r}=fo(n);let i=s.call(n,t);i||(t=re(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Pr(e,o)&&Kt(n,"set",t,e):Kt(n,"add",t,e),this}function su(t){const e=re(this),{has:n,get:s}=fo(e);let r=n.call(e,t);r||(t=re(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Kt(e,"delete",t,void 0),i}function ru(){const t=re(this),e=t.size!==0,n=t.clear();return e&&Kt(t,"clear",void 0,void 0),n}function li(t,e){return function(s,r){const i=this,o=i.__v_raw,a=re(o),l=e?Al:t?Nl:Nr;return!t&&Ze(a,"iterate",jn),o.forEach((c,u)=>s.call(r,l(c),l(u),i))}}function ci(t,e,n){return function(...s){const r=this.__v_raw,i=re(r),o=ys(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...s),u=n?Al:e?Nl:Nr;return!e&&Ze(i,"iterate",l?wa:jn),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function tn(t){return function(...e){return t==="delete"?!1:this}}function y_(){const t={get(i){return ii(this,i)},get size(){return ai(this)},has:oi,add:tu,set:nu,delete:su,clear:ru,forEach:li(!1,!1)},e={get(i){return ii(this,i,!1,!0)},get size(){return ai(this)},has:oi,add:tu,set:nu,delete:su,clear:ru,forEach:li(!1,!0)},n={get(i){return ii(this,i,!0)},get size(){return ai(this,!0)},has(i){return oi.call(this,i,!0)},add:tn("add"),set:tn("set"),delete:tn("delete"),clear:tn("clear"),forEach:li(!0,!1)},s={get(i){return ii(this,i,!0,!0)},get size(){return ai(this,!0)},has(i){return oi.call(this,i,!0)},add:tn("add"),set:tn("set"),delete:tn("delete"),clear:tn("clear"),forEach:li(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ci(i,!1,!1),n[i]=ci(i,!0,!1),e[i]=ci(i,!1,!0),s[i]=ci(i,!0,!0)}),[t,n,e,s]}const[b_,w_,E_,I_]=y_();function Pl(t,e){const n=e?t?I_:E_:t?w_:b_;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(se(n,r)&&r in s?n:s,r,i)}const C_={get:Pl(!1,!1)},S_={get:Pl(!1,!0)},T_={get:Pl(!0,!1)},Bf=new WeakMap,Wf=new WeakMap,Vf=new WeakMap,R_=new WeakMap;function k_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function A_(t){return t.__v_skip||!Object.isExtensible(t)?0:k_(Wm(t))}function zs(t){return Os(t)?t:Ol(t,!1,Hf,C_,Bf)}function P_(t){return Ol(t,!1,v_,S_,Wf)}function ho(t){return Ol(t,!0,__,T_,Vf)}function Ol(t,e,n,s,r){if(!he(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=A_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function bs(t){return Os(t)?bs(t.__v_raw):!!(t&&t.__v_isReactive)}function Os(t){return!!(t&&t.__v_isReadonly)}function xi(t){return!!(t&&t.__v_isShallow)}function Kf(t){return bs(t)||Os(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function zf(t){return Ai(t,"__v_skip",!0),t}const Nr=t=>he(t)?zs(t):t,Nl=t=>he(t)?ho(t):t;function xl(t){pn&&gt&&(t=re(t),Uf(t.dep||(t.dep=Tl())))}function Ml(t,e){t=re(t);const n=t.dep;n&&Ea(n)}function Pe(t){return!!(t&&t.__v_isRef===!0)}function Q(t){return qf(t,!1)}function Gf(t){return qf(t,!0)}function qf(t,e){return Pe(t)?t:new O_(t,e)}class O_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:Nr(e)}get value(){return xl(this),this._value}set value(e){const n=this.__v_isShallow||xi(e)||Os(e);e=n?e:re(e),Pr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Nr(e),Ml(this))}}function ws(t){return Pe(t)?t.value:t}const N_={get:(t,e,n)=>ws(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Pe(r)&&!Pe(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Yf(t){return bs(t)?t:new Proxy(t,N_)}class x_{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=e(()=>xl(this),()=>Ml(this));this._get=n,this._set=s}get value(){return this._get()}set value(e){this._set(e)}}function M_(t){return new x_(t)}class D_{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return i_(re(this._object),this._key)}}class L_{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function F_(t,e,n){return Pe(t)?t:q(t)?new L_(t):he(t)&&arguments.length>1?U_(t,e,n):Q(t)}function U_(t,e,n){const s=t[e];return Pe(s)?s:new D_(t,e,n)}class $_{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Rl(e,()=>{this._dirty||(this._dirty=!0,Ml(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=re(this);return xl(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function j_(t,e,n=!1){let s,r;const i=q(t);return i?(s=t,r=yt):(s=t.get,r=t.set),new $_(s,r,i||!r,n)}function gn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){po(i,e,n)}return r}function ct(t,e,n,s){if(q(t)){const i=gn(t,e,n,s);return i&&kf(i)&&i.catch(o=>{po(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(ct(t[i],e,n,s));return r}function po(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){gn(l,null,10,[t,o,a]);return}}H_(t,n,r,s)}function H_(t,e,n,s=!0){console.error(t)}let xr=!1,Ia=!1;const Be=[];let kt=0;const Es=[];let Lt=null,Dn=0;const Qf=Promise.resolve();let Dl=null;function bt(t){const e=Dl||Qf;return t?e.then(this?t.bind(this):t):e}function B_(t){let e=kt+1,n=Be.length;for(;e<n;){const s=e+n>>>1;Mr(Be[s])<t?e=s+1:n=s}return e}function Ll(t){(!Be.length||!Be.includes(t,xr&&t.allowRecurse?kt+1:kt))&&(t.id==null?Be.push(t):Be.splice(B_(t.id),0,t),Jf())}function Jf(){!xr&&!Ia&&(Ia=!0,Dl=Qf.then(Zf))}function W_(t){const e=Be.indexOf(t);e>kt&&Be.splice(e,1)}function V_(t){$(t)?Es.push(...t):(!Lt||!Lt.includes(t,t.allowRecurse?Dn+1:Dn))&&Es.push(t),Jf()}function iu(t,e=xr?kt+1:0){for(;e<Be.length;e++){const n=Be[e];n&&n.pre&&(Be.splice(e,1),e--,n())}}function Xf(t){if(Es.length){const e=[...new Set(Es)];if(Es.length=0,Lt){Lt.push(...e);return}for(Lt=e,Lt.sort((n,s)=>Mr(n)-Mr(s)),Dn=0;Dn<Lt.length;Dn++)Lt[Dn]();Lt=null,Dn=0}}const Mr=t=>t.id==null?1/0:t.id,K_=(t,e)=>{const n=Mr(t)-Mr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Zf(t){Ia=!1,xr=!0,Be.sort(K_);const e=yt;try{for(kt=0;kt<Be.length;kt++){const n=Be[kt];n&&n.active!==!1&&gn(n,null,14)}}finally{kt=0,Be.length=0,Xf(),xr=!1,Dl=null,(Be.length||Es.length)&&Zf()}}function z_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ye;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:f}=s[u]||ye;f&&(r=n.map(p=>Re(p)?p.trim():p)),d&&(r=n.map(Pi))}let a,l=s[a=Wo(e)]||s[a=Wo(Mt(e))];!l&&i&&(l=s[a=Wo(Zn(e))]),l&&ct(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ct(c,t,6,r)}}function eh(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!q(t)){const l=c=>{const u=eh(c,e,!0);u&&(a=!0,Te(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(he(t)&&s.set(t,null),null):($(i)?i.forEach(l=>o[l]=null):Te(o,i),he(t)&&s.set(t,o),o)}function go(t,e){return!t||!lo(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,Zn(e))||se(t,e))}let $e=null,mo=null;function Mi(t){const e=$e;return $e=t,mo=t&&t.type.__scopeId||null,e}function th(t){mo=t}function nh(){mo=null}function st(t,e=$e,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&_u(-1);const i=Mi(e);let o;try{o=t(...r)}finally{Mi(i),s._d&&_u(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Vo(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:f,setupState:p,ctx:m,inheritAttrs:_}=t;let v,C;const S=Mi(t);try{if(n.shapeFlag&4){const k=r||s;v=Rt(u.call(k,k,d,i,p,f,m)),C=l}else{const k=e;v=Rt(k.length>1?k(i,{attrs:l,slots:a,emit:c}):k(i,null)),C=e.props?l:G_(l)}}catch(k){wr.length=0,po(k,t,1),v=oe(ut)}let M=v;if(C&&_!==!1){const k=Object.keys(C),{shapeFlag:G}=M;k.length&&G&7&&(o&&k.some(wl)&&(C=q_(C,o)),M=zt(M,C))}return n.dirs&&(M=zt(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),v=M,Mi(S),v}const G_=t=>{let e;for(const n in t)(n==="class"||n==="style"||lo(n))&&((e||(e={}))[n]=t[n]);return e},q_=(t,e)=>{const n={};for(const s in t)(!wl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Y_(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?ou(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==s[f]&&!go(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ou(s,o,c):!0:!!o;return!1}function ou(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!go(n,i))return!0}return!1}function Q_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const J_=t=>t.__isSuspense;function X_(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):V_(t)}function Gs(t,e){return Fl(t,null,e)}const ui={};function Ot(t,e,n){return Fl(t,e,n)}function Fl(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ye){var a;const l=Mf()===((a=Me)==null?void 0:a.scope)?Me:null;let c,u=!1,d=!1;if(Pe(t)?(c=()=>t.value,u=xi(t)):bs(t)?(c=()=>t,s=!0):$(t)?(d=!0,u=t.some(k=>bs(k)||xi(k)),c=()=>t.map(k=>{if(Pe(k))return k.value;if(bs(k))return Un(k);if(q(k))return gn(k,l,2)})):q(t)?e?c=()=>gn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),ct(t,l,3,[p])}:c=yt,e&&s){const k=c;c=()=>Un(k())}let f,p=k=>{f=S.onStop=()=>{gn(k,l,4)}},m;if(Lr)if(p=yt,e?n&&ct(e,l,3,[c(),d?[]:void 0,p]):c(),r==="sync"){const k=qv();m=k.__watcherHandles||(k.__watcherHandles=[])}else return yt;let _=d?new Array(t.length).fill(ui):ui;const v=()=>{if(S.active)if(e){const k=S.run();(s||u||(d?k.some((G,U)=>Pr(G,_[U])):Pr(k,_)))&&(f&&f(),ct(e,l,3,[k,_===ui?void 0:d&&_[0]===ui?[]:_,p]),_=k)}else S.run()};v.allowRecurse=!!e;let C;r==="sync"?C=v:r==="post"?C=()=>qe(v,l&&l.suspense):(v.pre=!0,l&&(v.id=l.uid),C=()=>Ll(v));const S=new Rl(c,C);e?n?v():_=S.run():r==="post"?qe(S.run.bind(S),l&&l.suspense):S.run();const M=()=>{S.stop(),l&&l.scope&&El(l.scope.effects,S)};return m&&m.push(M),M}function Z_(t,e,n){const s=this.proxy,r=Re(t)?t.includes(".")?sh(s,t):()=>s[t]:t.bind(s,s);let i;q(e)?i=e:(i=e.handler,n=e);const o=Me;Ns(this);const a=Fl(r,i.bind(s),n);return o?Ns(o):Hn(),a}function sh(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Un(t,e){if(!he(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Pe(t))Un(t.value,e);else if($(t))for(let n=0;n<t.length;n++)Un(t[n],e);else if(Ws(t)||ys(t))t.forEach(n=>{Un(n,e)});else if(Pf(t))for(const n in t)Un(t[n],e);return t}function Ca(t,e){const n=$e;if(n===null)return t;const s=Io(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=ye]=e[i];o&&(q(o)&&(o={mounted:o,updated:o}),o.deep&&Un(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function An(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(Vs(),ct(l,n,8,[t.el,a,t,e]),Ks())}}function ev(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return es(()=>{t.isMounted=!0}),Ul(()=>{t.isUnmounting=!0}),t}const ot=[Function,Array],rh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ot,onEnter:ot,onAfterEnter:ot,onEnterCancelled:ot,onBeforeLeave:ot,onLeave:ot,onAfterLeave:ot,onLeaveCancelled:ot,onBeforeAppear:ot,onAppear:ot,onAfterAppear:ot,onAppearCancelled:ot},tv={name:"BaseTransition",props:rh,setup(t,{slots:e}){const n=Wl(),s=ev();let r;return()=>{const i=e.default&&oh(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const _ of i)if(_.type!==ut){o=_;break}}const a=re(t),{mode:l}=a;if(s.isLeaving)return Ko(o);const c=au(o);if(!c)return Ko(o);const u=Sa(c,a,s,n);Ta(c,u);const d=n.subTree,f=d&&au(d);let p=!1;const{getTransitionKey:m}=c.type;if(m){const _=m();r===void 0?r=_:_!==r&&(r=_,p=!0)}if(f&&f.type!==ut&&(!Ln(c,f)||p)){const _=Sa(f,a,s,n);if(Ta(f,_),l==="out-in")return s.isLeaving=!0,_.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Ko(o);l==="in-out"&&c.type!==ut&&(_.delayLeave=(v,C,S)=>{const M=ih(s,f);M[String(f.key)]=f,v._leaveCb=()=>{C(),v._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=S})}return o}}},nv=tv;function ih(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Sa(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:_,onAppear:v,onAfterAppear:C,onAppearCancelled:S}=e,M=String(t.key),k=ih(n,t),G=(A,W)=>{A&&ct(A,s,9,W)},U=(A,W)=>{const V=W[1];G(A,W),$(A)?A.every(ke=>ke.length<=1)&&V():A.length<=1&&V()},Y={mode:i,persisted:o,beforeEnter(A){let W=a;if(!n.isMounted)if(r)W=_||a;else return;A._leaveCb&&A._leaveCb(!0);const V=k[M];V&&Ln(t,V)&&V.el._leaveCb&&V.el._leaveCb(),G(W,[A])},enter(A){let W=l,V=c,ke=u;if(!n.isMounted)if(r)W=v||l,V=C||c,ke=S||u;else return;let F=!1;const _e=A._enterCb=Le=>{F||(F=!0,Le?G(ke,[A]):G(V,[A]),Y.delayedLeave&&Y.delayedLeave(),A._enterCb=void 0)};W?U(W,[A,_e]):_e()},leave(A,W){const V=String(t.key);if(A._enterCb&&A._enterCb(!0),n.isUnmounting)return W();G(d,[A]);let ke=!1;const F=A._leaveCb=_e=>{ke||(ke=!0,W(),_e?G(m,[A]):G(p,[A]),A._leaveCb=void 0,k[V]===t&&delete k[V])};k[V]=t,f?U(f,[A,F]):F()},clone(A){return Sa(A,e,n,s)}};return Y}function Ko(t){if(_o(t))return t=zt(t),t.children=null,t}function au(t){return _o(t)?t.children?t.children[0]:void 0:t}function Ta(t,e){t.shapeFlag&6&&t.component?Ta(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function oh(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===xe?(o.patchFlag&128&&r++,s=s.concat(oh(o.children,e,a))):(e||o.type!==ut)&&s.push(a!=null?zt(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Qt(t,e){return q(t)?(()=>Te({name:t.name},e,{setup:t}))():t}const yr=t=>!!t.type.__asyncLoader,_o=t=>t.type.__isKeepAlive;function sv(t,e){ah(t,"a",e)}function rv(t,e){ah(t,"da",e)}function ah(t,e,n=Me){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(vo(e,s,n),n){let r=n.parent;for(;r&&r.parent;)_o(r.parent.vnode)&&iv(s,e,n,r),r=r.parent}}function iv(t,e,n,s){const r=vo(e,t,s,!0);yo(()=>{El(s[e],r)},n)}function vo(t,e,n=Me,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Vs(),Ns(n);const a=ct(e,n,t,o);return Hn(),Ks(),a});return s?r.unshift(i):r.push(i),i}}const Jt=t=>(e,n=Me)=>(!Lr||t==="sp")&&vo(t,(...s)=>e(...s),n),ov=Jt("bm"),es=Jt("m"),av=Jt("bu"),lv=Jt("u"),Ul=Jt("bum"),yo=Jt("um"),cv=Jt("sp"),uv=Jt("rtg"),dv=Jt("rtc");function fv(t,e=Me){vo("ec",t,e)}const lh="components";function Ke(t,e){return pv(lh,t,!0,e)||t}const hv=Symbol.for("v-ndc");function pv(t,e,n=!0,s=!1){const r=$e||Me;if(r){const i=r.type;if(t===lh){const a=Kv(i,!1);if(a&&(a===e||a===Mt(e)||a===uo(Mt(e))))return i}const o=lu(r[t]||i[t],e)||lu(r.appContext[t],e);return!o&&s?i:o}}function lu(t,e){return t&&(t[e]||t[Mt(e)]||t[uo(Mt(e))])}function gv(t,e,n,s){let r;const i=n&&n[s];if($(t)||Re(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(he(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function bo(t,e,n={},s,r){if($e.isCE||$e.parent&&yr($e.parent)&&$e.parent.isCE)return e!=="default"&&(n.name=e),oe("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),Fe();const o=i&&ch(i(n)),a=Hl(xe,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function ch(t){return t.some(e=>Fi(e)?!(e.type===ut||e.type===xe&&!ch(e.children)):!0)?t:null}const Ra=t=>t?bh(t)?Io(t)||t.proxy:Ra(t.parent):null,br=Te(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ra(t.parent),$root:t=>Ra(t.root),$emit:t=>t.emit,$options:t=>$l(t),$forceUpdate:t=>t.f||(t.f=()=>Ll(t.update)),$nextTick:t=>t.n||(t.n=bt.bind(t.proxy)),$watch:t=>Z_.bind(t)}),zo=(t,e)=>t!==ye&&!t.__isScriptSetup&&se(t,e),mv={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(zo(s,e))return o[e]=1,s[e];if(r!==ye&&se(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&se(c,e))return o[e]=3,i[e];if(n!==ye&&se(n,e))return o[e]=4,n[e];ka&&(o[e]=0)}}const u=br[e];let d,f;if(u)return e==="$attrs"&&Ze(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==ye&&se(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,se(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return zo(r,e)?(r[e]=n,!0):s!==ye&&se(s,e)?(s[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ye&&se(t,o)||zo(e,o)||(a=i[0])&&se(a,o)||se(s,o)||se(br,o)||se(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function cu(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ka=!0;function _v(t){const e=$l(t),n=t.proxy,s=t.ctx;ka=!1,e.beforeCreate&&uu(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:m,activated:_,deactivated:v,beforeDestroy:C,beforeUnmount:S,destroyed:M,unmounted:k,render:G,renderTracked:U,renderTriggered:Y,errorCaptured:A,serverPrefetch:W,expose:V,inheritAttrs:ke,components:F,directives:_e,filters:Le}=e;if(c&&vv(c,s,null),o)for(const ge in o){const ce=o[ge];q(ce)&&(s[ge]=ce.bind(n))}if(r){const ge=r.call(n,n);he(ge)&&(t.data=zs(ge))}if(ka=!0,i)for(const ge in i){const ce=i[ge],ft=q(ce)?ce.bind(n,n):q(ce.get)?ce.get.bind(n,n):yt,kn=!q(ce)&&q(ce.set)?ce.set.bind(n):yt,ht=ae({get:ft,set:kn});Object.defineProperty(s,ge,{enumerable:!0,configurable:!0,get:()=>ht.value,set:Ge=>ht.value=Ge})}if(a)for(const ge in a)uh(a[ge],s,n,ge);if(l){const ge=q(l)?l.call(n):l;Reflect.ownKeys(ge).forEach(ce=>{Is(ce,ge[ce])})}u&&uu(u,t,"c");function Ee(ge,ce){$(ce)?ce.forEach(ft=>ge(ft.bind(n))):ce&&ge(ce.bind(n))}if(Ee(ov,d),Ee(es,f),Ee(av,p),Ee(lv,m),Ee(sv,_),Ee(rv,v),Ee(fv,A),Ee(dv,U),Ee(uv,Y),Ee(Ul,S),Ee(yo,k),Ee(cv,W),$(V))if(V.length){const ge=t.exposed||(t.exposed={});V.forEach(ce=>{Object.defineProperty(ge,ce,{get:()=>n[ce],set:ft=>n[ce]=ft})})}else t.exposed||(t.exposed={});G&&t.render===yt&&(t.render=G),ke!=null&&(t.inheritAttrs=ke),F&&(t.components=F),_e&&(t.directives=_e)}function vv(t,e,n=yt){$(t)&&(t=Aa(t));for(const s in t){const r=t[s];let i;he(r)?"default"in r?i=Je(r.from||s,r.default,!0):i=Je(r.from||s):i=Je(r),Pe(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function uu(t,e,n){ct($(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function uh(t,e,n,s){const r=s.includes(".")?sh(n,s):()=>n[s];if(Re(t)){const i=e[t];q(i)&&Ot(r,i)}else if(q(t))Ot(r,t.bind(n));else if(he(t))if($(t))t.forEach(i=>uh(i,e,n,s));else{const i=q(t.handler)?t.handler.bind(n):e[t.handler];q(i)&&Ot(r,i,t)}}function $l(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>Di(l,c,o,!0)),Di(l,e,o)),he(e)&&i.set(e,l),l}function Di(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Di(t,i,n,!0),r&&r.forEach(o=>Di(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=yv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const yv={data:du,props:fu,emits:fu,methods:gr,computed:gr,beforeCreate:Ve,created:Ve,beforeMount:Ve,mounted:Ve,beforeUpdate:Ve,updated:Ve,beforeDestroy:Ve,beforeUnmount:Ve,destroyed:Ve,unmounted:Ve,activated:Ve,deactivated:Ve,errorCaptured:Ve,serverPrefetch:Ve,components:gr,directives:gr,watch:wv,provide:du,inject:bv};function du(t,e){return e?t?function(){return Te(q(t)?t.call(this,this):t,q(e)?e.call(this,this):e)}:e:t}function bv(t,e){return gr(Aa(t),Aa(e))}function Aa(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ve(t,e){return t?[...new Set([].concat(t,e))]:e}function gr(t,e){return t?Te(Object.create(null),t,e):e}function fu(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:Te(Object.create(null),cu(t),cu(e??{})):e}function wv(t,e){if(!t)return e;if(!e)return t;const n=Te(Object.create(null),t);for(const s in e)n[s]=Ve(t[s],e[s]);return n}function dh(){return{app:null,config:{isNativeTag:jm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ev=0;function Iv(t,e){return function(s,r=null){q(s)||(s=Te({},s)),r!=null&&!he(r)&&(r=null);const i=dh(),o=new Set;let a=!1;const l=i.app={_uid:Ev++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Yv,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&q(c.install)?(o.add(c),c.install(l,...u)):q(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,d){if(!a){const f=oe(s,r);return f.appContext=i,u&&e?e(f,c):t(f,c,d),a=!0,l._container=c,c.__vue_app__=l,Io(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){Li=l;try{return c()}finally{Li=null}}};return l}}let Li=null;function Is(t,e){if(Me){let n=Me.provides;const s=Me.parent&&Me.parent.provides;s===n&&(n=Me.provides=Object.create(s)),n[t]=e}}function Je(t,e,n=!1){const s=Me||$e;if(s||Li){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Li._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&q(e)?e.call(s&&s.proxy):e}}function Cv(t,e,n,s=!1){const r={},i={};Ai(i,Eo,1),t.propsDefaults=Object.create(null),fh(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:P_(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Sv(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=re(r),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(go(t.emitsOptions,f))continue;const p=e[f];if(l)if(se(i,f))p!==i[f]&&(i[f]=p,c=!0);else{const m=Mt(f);r[m]=Pa(l,a,m,p,t,!1)}else p!==i[f]&&(i[f]=p,c=!0)}}}else{fh(t,e,r,i)&&(c=!0);let u;for(const d in a)(!e||!se(e,d)&&((u=Zn(d))===d||!se(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=Pa(l,a,d,void 0,t,!0)):delete r[d]);if(i!==a)for(const d in i)(!e||!se(e,d))&&(delete i[d],c=!0)}c&&Kt(t,"set","$attrs")}function fh(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(yi(l))continue;const c=e[l];let u;r&&se(r,u=Mt(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:go(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=re(n),c=a||ye;for(let u=0;u<i.length;u++){const d=i[u];n[d]=Pa(r,l,d,c[d],t,!se(c,d))}}return o}function Pa(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=se(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&q(l)){const{propsDefaults:c}=r;n in c?s=c[n]:(Ns(r),s=c[n]=l.call(null,e),Hn())}else s=l}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Zn(n))&&(s=!0))}return s}function hh(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!q(t)){const u=d=>{l=!0;const[f,p]=hh(d,e,!0);Te(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return he(t)&&s.set(t,vs),vs;if($(i))for(let u=0;u<i.length;u++){const d=Mt(i[u]);hu(d)&&(o[d]=ye)}else if(i)for(const u in i){const d=Mt(u);if(hu(d)){const f=i[u],p=o[d]=$(f)||q(f)?{type:f}:Te({},f);if(p){const m=mu(Boolean,p.type),_=mu(String,p.type);p[0]=m>-1,p[1]=_<0||m<_,(m>-1||se(p,"default"))&&a.push(d)}}}const c=[o,a];return he(t)&&s.set(t,c),c}function hu(t){return t[0]!=="$"}function pu(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function gu(t,e){return pu(t)===pu(e)}function mu(t,e){return $(e)?e.findIndex(n=>gu(n,t)):q(e)&&gu(e,t)?0:-1}const ph=t=>t[0]==="_"||t==="$stable",jl=t=>$(t)?t.map(Rt):[Rt(t)],Tv=(t,e,n)=>{if(e._n)return e;const s=st((...r)=>jl(e(...r)),n);return s._c=!1,s},gh=(t,e,n)=>{const s=t._ctx;for(const r in t){if(ph(r))continue;const i=t[r];if(q(i))e[r]=Tv(r,i,s);else if(i!=null){const o=jl(i);e[r]=()=>o}}},mh=(t,e)=>{const n=jl(e);t.slots.default=()=>n},Rv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),Ai(e,"_",n)):gh(e,t.slots={})}else t.slots={},e&&mh(t,e);Ai(t.slots,Eo,1)},kv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ye;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Te(r,e),!n&&a===1&&delete r._):(i=!e.$stable,gh(e,r)),o=e}else e&&(mh(t,e),o={default:1});if(i)for(const a in r)!ph(a)&&!(a in o)&&delete r[a]};function Oa(t,e,n,s,r=!1){if($(t)){t.forEach((f,p)=>Oa(f,e&&($(e)?e[p]:e),n,s,r));return}if(yr(s)&&!r)return;const i=s.shapeFlag&4?Io(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ye?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Re(c)?(u[c]=null,se(d,c)&&(d[c]=null)):Pe(c)&&(c.value=null)),q(l))gn(l,a,12,[o,u]);else{const f=Re(l),p=Pe(l);if(f||p){const m=()=>{if(t.f){const _=f?se(d,l)?d[l]:u[l]:l.value;r?$(_)&&El(_,i):$(_)?_.includes(i)||_.push(i):f?(u[l]=[i],se(d,l)&&(d[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,se(d,l)&&(d[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,qe(m,n)):m()}}}const qe=X_;function Av(t){return Pv(t)}function Pv(t,e){const n=ya();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=yt,insertStaticContent:m}=t,_=(h,g,y,b=null,E=null,R=null,x=!1,T=null,P=!!g.dynamicChildren)=>{if(h===g)return;h&&!Ln(h,g)&&(b=N(h),Ge(h,E,R,!0),h=null),g.patchFlag===-2&&(P=!1,g.dynamicChildren=null);const{type:I,ref:H,shapeFlag:L}=g;switch(I){case wo:v(h,g,y,b);break;case ut:C(h,g,y,b);break;case Go:h==null&&S(g,y,b,x);break;case xe:F(h,g,y,b,E,R,x,T,P);break;default:L&1?G(h,g,y,b,E,R,x,T,P):L&6?_e(h,g,y,b,E,R,x,T,P):(L&64||L&128)&&I.process(h,g,y,b,E,R,x,T,P,ie)}H!=null&&E&&Oa(H,h&&h.ref,R,g||h,!g)},v=(h,g,y,b)=>{if(h==null)s(g.el=a(g.children),y,b);else{const E=g.el=h.el;g.children!==h.children&&c(E,g.children)}},C=(h,g,y,b)=>{h==null?s(g.el=l(g.children||""),y,b):g.el=h.el},S=(h,g,y,b)=>{[h.el,h.anchor]=m(h.children,g,y,b,h.el,h.anchor)},M=({el:h,anchor:g},y,b)=>{let E;for(;h&&h!==g;)E=f(h),s(h,y,b),h=E;s(g,y,b)},k=({el:h,anchor:g})=>{let y;for(;h&&h!==g;)y=f(h),r(h),h=y;r(g)},G=(h,g,y,b,E,R,x,T,P)=>{x=x||g.type==="svg",h==null?U(g,y,b,E,R,x,T,P):W(h,g,E,R,x,T,P)},U=(h,g,y,b,E,R,x,T)=>{let P,I;const{type:H,props:L,shapeFlag:B,transition:z,dirs:X}=h;if(P=h.el=o(h.type,R,L&&L.is,L),B&8?u(P,h.children):B&16&&A(h.children,P,null,b,E,R&&H!=="foreignObject",x,T),X&&An(h,null,b,"created"),Y(P,h,h.scopeId,x,b),L){for(const ue in L)ue!=="value"&&!yi(ue)&&i(P,ue,null,L[ue],R,h.children,b,E,D);"value"in L&&i(P,"value",null,L.value),(I=L.onVnodeBeforeMount)&&St(I,b,h)}X&&An(h,null,b,"beforeMount");const me=(!E||E&&!E.pendingBranch)&&z&&!z.persisted;me&&z.beforeEnter(P),s(P,g,y),((I=L&&L.onVnodeMounted)||me||X)&&qe(()=>{I&&St(I,b,h),me&&z.enter(P),X&&An(h,null,b,"mounted")},E)},Y=(h,g,y,b,E)=>{if(y&&p(h,y),b)for(let R=0;R<b.length;R++)p(h,b[R]);if(E){let R=E.subTree;if(g===R){const x=E.vnode;Y(h,x,x.scopeId,x.slotScopeIds,E.parent)}}},A=(h,g,y,b,E,R,x,T,P=0)=>{for(let I=P;I<h.length;I++){const H=h[I]=T?ln(h[I]):Rt(h[I]);_(null,H,g,y,b,E,R,x,T)}},W=(h,g,y,b,E,R,x)=>{const T=g.el=h.el;let{patchFlag:P,dynamicChildren:I,dirs:H}=g;P|=h.patchFlag&16;const L=h.props||ye,B=g.props||ye;let z;y&&Pn(y,!1),(z=B.onVnodeBeforeUpdate)&&St(z,y,g,h),H&&An(g,h,y,"beforeUpdate"),y&&Pn(y,!0);const X=E&&g.type!=="foreignObject";if(I?V(h.dynamicChildren,I,T,y,b,X,R):x||ce(h,g,T,null,y,b,X,R,!1),P>0){if(P&16)ke(T,g,L,B,y,b,E);else if(P&2&&L.class!==B.class&&i(T,"class",null,B.class,E),P&4&&i(T,"style",L.style,B.style,E),P&8){const me=g.dynamicProps;for(let ue=0;ue<me.length;ue++){const Se=me[ue],pt=L[Se],as=B[Se];(as!==pt||Se==="value")&&i(T,Se,pt,as,E,h.children,y,b,D)}}P&1&&h.children!==g.children&&u(T,g.children)}else!x&&I==null&&ke(T,g,L,B,y,b,E);((z=B.onVnodeUpdated)||H)&&qe(()=>{z&&St(z,y,g,h),H&&An(g,h,y,"updated")},b)},V=(h,g,y,b,E,R,x)=>{for(let T=0;T<g.length;T++){const P=h[T],I=g[T],H=P.el&&(P.type===xe||!Ln(P,I)||P.shapeFlag&70)?d(P.el):y;_(P,I,H,null,b,E,R,x,!0)}},ke=(h,g,y,b,E,R,x)=>{if(y!==b){if(y!==ye)for(const T in y)!yi(T)&&!(T in b)&&i(h,T,y[T],null,x,g.children,E,R,D);for(const T in b){if(yi(T))continue;const P=b[T],I=y[T];P!==I&&T!=="value"&&i(h,T,I,P,x,g.children,E,R,D)}"value"in b&&i(h,"value",y.value,b.value)}},F=(h,g,y,b,E,R,x,T,P)=>{const I=g.el=h?h.el:a(""),H=g.anchor=h?h.anchor:a("");let{patchFlag:L,dynamicChildren:B,slotScopeIds:z}=g;z&&(T=T?T.concat(z):z),h==null?(s(I,y,b),s(H,y,b),A(g.children,y,H,E,R,x,T,P)):L>0&&L&64&&B&&h.dynamicChildren?(V(h.dynamicChildren,B,y,E,R,x,T),(g.key!=null||E&&g===E.subTree)&&_h(h,g,!0)):ce(h,g,y,H,E,R,x,T,P)},_e=(h,g,y,b,E,R,x,T,P)=>{g.slotScopeIds=T,h==null?g.shapeFlag&512?E.ctx.activate(g,y,b,x,P):Le(g,y,b,E,R,x,P):en(h,g,P)},Le=(h,g,y,b,E,R,x)=>{const T=h.component=jv(h,b,E);if(_o(h)&&(T.ctx.renderer=ie),Hv(T),T.asyncDep){if(E&&E.registerDep(T,Ee),!h.el){const P=T.subTree=oe(ut);C(null,P,g,y)}return}Ee(T,h,g,y,E,R,x)},en=(h,g,y)=>{const b=g.component=h.component;if(Y_(h,g,y))if(b.asyncDep&&!b.asyncResolved){ge(b,g,y);return}else b.next=g,W_(b.update),b.update();else g.el=h.el,b.vnode=g},Ee=(h,g,y,b,E,R,x)=>{const T=()=>{if(h.isMounted){let{next:H,bu:L,u:B,parent:z,vnode:X}=h,me=H,ue;Pn(h,!1),H?(H.el=X.el,ge(h,H,x)):H=X,L&&bi(L),(ue=H.props&&H.props.onVnodeBeforeUpdate)&&St(ue,z,H,X),Pn(h,!0);const Se=Vo(h),pt=h.subTree;h.subTree=Se,_(pt,Se,d(pt.el),N(pt),h,E,R),H.el=Se.el,me===null&&Q_(h,Se.el),B&&qe(B,E),(ue=H.props&&H.props.onVnodeUpdated)&&qe(()=>St(ue,z,H,X),E)}else{let H;const{el:L,props:B}=g,{bm:z,m:X,parent:me}=h,ue=yr(g);if(Pn(h,!1),z&&bi(z),!ue&&(H=B&&B.onVnodeBeforeMount)&&St(H,me,g),Pn(h,!0),L&&J){const Se=()=>{h.subTree=Vo(h),J(L,h.subTree,h,E,null)};ue?g.type.__asyncLoader().then(()=>!h.isUnmounted&&Se()):Se()}else{const Se=h.subTree=Vo(h);_(null,Se,y,b,h,E,R),g.el=Se.el}if(X&&qe(X,E),!ue&&(H=B&&B.onVnodeMounted)){const Se=g;qe(()=>St(H,me,Se),E)}(g.shapeFlag&256||me&&yr(me.vnode)&&me.vnode.shapeFlag&256)&&h.a&&qe(h.a,E),h.isMounted=!0,g=y=b=null}},P=h.effect=new Rl(T,()=>Ll(I),h.scope),I=h.update=()=>P.run();I.id=h.uid,Pn(h,!0),I()},ge=(h,g,y)=>{g.component=h;const b=h.vnode.props;h.vnode=g,h.next=null,Sv(h,g.props,b,y),kv(h,g.children,y),Vs(),iu(),Ks()},ce=(h,g,y,b,E,R,x,T,P=!1)=>{const I=h&&h.children,H=h?h.shapeFlag:0,L=g.children,{patchFlag:B,shapeFlag:z}=g;if(B>0){if(B&128){kn(I,L,y,b,E,R,x,T,P);return}else if(B&256){ft(I,L,y,b,E,R,x,T,P);return}}z&8?(H&16&&D(I,E,R),L!==I&&u(y,L)):H&16?z&16?kn(I,L,y,b,E,R,x,T,P):D(I,E,R,!0):(H&8&&u(y,""),z&16&&A(L,y,b,E,R,x,T,P))},ft=(h,g,y,b,E,R,x,T,P)=>{h=h||vs,g=g||vs;const I=h.length,H=g.length,L=Math.min(I,H);let B;for(B=0;B<L;B++){const z=g[B]=P?ln(g[B]):Rt(g[B]);_(h[B],z,y,null,E,R,x,T,P)}I>H?D(h,E,R,!0,!1,L):A(g,y,b,E,R,x,T,P,L)},kn=(h,g,y,b,E,R,x,T,P)=>{let I=0;const H=g.length;let L=h.length-1,B=H-1;for(;I<=L&&I<=B;){const z=h[I],X=g[I]=P?ln(g[I]):Rt(g[I]);if(Ln(z,X))_(z,X,y,null,E,R,x,T,P);else break;I++}for(;I<=L&&I<=B;){const z=h[L],X=g[B]=P?ln(g[B]):Rt(g[B]);if(Ln(z,X))_(z,X,y,null,E,R,x,T,P);else break;L--,B--}if(I>L){if(I<=B){const z=B+1,X=z<H?g[z].el:b;for(;I<=B;)_(null,g[I]=P?ln(g[I]):Rt(g[I]),y,X,E,R,x,T,P),I++}}else if(I>B)for(;I<=L;)Ge(h[I],E,R,!0),I++;else{const z=I,X=I,me=new Map;for(I=X;I<=B;I++){const tt=g[I]=P?ln(g[I]):Rt(g[I]);tt.key!=null&&me.set(tt.key,I)}let ue,Se=0;const pt=B-X+1;let as=!1,Gc=0;const ir=new Array(pt);for(I=0;I<pt;I++)ir[I]=0;for(I=z;I<=L;I++){const tt=h[I];if(Se>=pt){Ge(tt,E,R,!0);continue}let Ct;if(tt.key!=null)Ct=me.get(tt.key);else for(ue=X;ue<=B;ue++)if(ir[ue-X]===0&&Ln(tt,g[ue])){Ct=ue;break}Ct===void 0?Ge(tt,E,R,!0):(ir[Ct-X]=I+1,Ct>=Gc?Gc=Ct:as=!0,_(tt,g[Ct],y,null,E,R,x,T,P),Se++)}const qc=as?Ov(ir):vs;for(ue=qc.length-1,I=pt-1;I>=0;I--){const tt=X+I,Ct=g[tt],Yc=tt+1<H?g[tt+1].el:b;ir[I]===0?_(null,Ct,y,Yc,E,R,x,T,P):as&&(ue<0||I!==qc[ue]?ht(Ct,y,Yc,2):ue--)}}},ht=(h,g,y,b,E=null)=>{const{el:R,type:x,transition:T,children:P,shapeFlag:I}=h;if(I&6){ht(h.component.subTree,g,y,b);return}if(I&128){h.suspense.move(g,y,b);return}if(I&64){x.move(h,g,y,ie);return}if(x===xe){s(R,g,y);for(let L=0;L<P.length;L++)ht(P[L],g,y,b);s(h.anchor,g,y);return}if(x===Go){M(h,g,y);return}if(b!==2&&I&1&&T)if(b===0)T.beforeEnter(R),s(R,g,y),qe(()=>T.enter(R),E);else{const{leave:L,delayLeave:B,afterLeave:z}=T,X=()=>s(R,g,y),me=()=>{L(R,()=>{X(),z&&z()})};B?B(R,X,me):me()}else s(R,g,y)},Ge=(h,g,y,b=!1,E=!1)=>{const{type:R,props:x,ref:T,children:P,dynamicChildren:I,shapeFlag:H,patchFlag:L,dirs:B}=h;if(T!=null&&Oa(T,null,y,h,!0),H&256){g.ctx.deactivate(h);return}const z=H&1&&B,X=!yr(h);let me;if(X&&(me=x&&x.onVnodeBeforeUnmount)&&St(me,g,h),H&6)w(h.component,y,b);else{if(H&128){h.suspense.unmount(y,b);return}z&&An(h,null,g,"beforeUnmount"),H&64?h.type.remove(h,g,y,E,ie,b):I&&(R!==xe||L>0&&L&64)?D(I,g,y,!1,!0):(R===xe&&L&384||!E&&H&16)&&D(P,g,y),b&&os(h)}(X&&(me=x&&x.onVnodeUnmounted)||z)&&qe(()=>{me&&St(me,g,h),z&&An(h,null,g,"unmounted")},y)},os=h=>{const{type:g,el:y,anchor:b,transition:E}=h;if(g===xe){zc(y,b);return}if(g===Go){k(h);return}const R=()=>{r(y),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(h.shapeFlag&1&&E&&!E.persisted){const{leave:x,delayLeave:T}=E,P=()=>x(y,R);T?T(h.el,R,P):P()}else R()},zc=(h,g)=>{let y;for(;h!==g;)y=f(h),r(h),h=y;r(g)},w=(h,g,y)=>{const{bum:b,scope:E,update:R,subTree:x,um:T}=h;b&&bi(b),E.stop(),R&&(R.active=!1,Ge(x,h,g,y)),T&&qe(T,g),qe(()=>{h.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},D=(h,g,y,b=!1,E=!1,R=0)=>{for(let x=R;x<h.length;x++)Ge(h[x],g,y,b,E)},N=h=>h.shapeFlag&6?N(h.component.subTree):h.shapeFlag&128?h.suspense.next():f(h.anchor||h.el),j=(h,g,y)=>{h==null?g._vnode&&Ge(g._vnode,null,null,!0):_(g._vnode||null,h,g,null,null,null,y),iu(),Xf(),g._vnode=h},ie={p:_,um:Ge,m:ht,r:os,mt:Le,mc:A,pc:ce,pbc:V,n:N,o:t};let Ie,J;return e&&([Ie,J]=e(ie)),{render:j,hydrate:Ie,createApp:Iv(j,Ie)}}function Pn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function _h(t,e,n=!1){const s=t.children,r=e.children;if($(s)&&$(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=ln(r[i]),a.el=o.el),n||_h(o,a)),a.type===wo&&(a.el=o.el)}}function Ov(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Nv=t=>t.__isTeleport,xe=Symbol.for("v-fgt"),wo=Symbol.for("v-txt"),ut=Symbol.for("v-cmt"),Go=Symbol.for("v-stc"),wr=[];let _t=null;function Fe(t=!1){wr.push(_t=t?null:[])}function xv(){wr.pop(),_t=wr[wr.length-1]||null}let Dr=1;function _u(t){Dr+=t}function vh(t){return t.dynamicChildren=Dr>0?_t||vs:null,xv(),Dr>0&&_t&&_t.push(t),t}function Ye(t,e,n,s,r,i){return vh(Z(t,e,n,s,r,i,!0))}function Hl(t,e,n,s,r){return vh(oe(t,e,n,s,r,!0))}function Fi(t){return t?t.__v_isVNode===!0:!1}function Ln(t,e){return t.type===e.type&&t.key===e.key}const Eo="__vInternal",yh=({key:t})=>t??null,wi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Re(t)||Pe(t)||q(t)?{i:$e,r:t,k:e,f:!!n}:t:null);function Z(t,e=null,n=null,s=0,r=null,i=t===xe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&yh(e),ref:e&&wi(e),scopeId:mo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:$e};return a?(Bl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Re(n)?8:16),Dr>0&&!o&&_t&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&_t.push(l),l}const oe=Mv;function Mv(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===hv)&&(t=ut),Fi(t)){const a=zt(t,e,!0);return n&&Bl(a,n),Dr>0&&!i&&_t&&(a.shapeFlag&6?_t[_t.indexOf(t)]=a:_t.push(a)),a.patchFlag|=-2,a}if(zv(t)&&(t=t.__vccOpts),e){e=Dv(e);let{class:a,style:l}=e;a&&!Re(a)&&(e.class=Or(a)),he(l)&&(Kf(l)&&!$(l)&&(l=Te({},l)),e.style=Cl(l))}const o=Re(t)?1:J_(t)?128:Nv(t)?64:he(t)?4:q(t)?2:0;return Z(t,e,n,s,r,o,i,!0)}function Dv(t){return t?Kf(t)||Eo in t?Te({},t):t:null}function zt(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Fv(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&yh(a),ref:e&&e.ref?n&&r?$(r)?r.concat(wi(e)):[r,wi(e)]:wi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zt(t.ssContent),ssFallback:t.ssFallback&&zt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function mn(t=" ",e=0){return oe(wo,null,t,e)}function Lv(t="",e=!1){return e?(Fe(),Hl(ut,null,t)):oe(ut,null,t)}function Rt(t){return t==null||typeof t=="boolean"?oe(ut):$(t)?oe(xe,null,t.slice()):typeof t=="object"?ln(t):oe(wo,null,String(t))}function ln(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zt(t)}function Bl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Bl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Eo in e)?e._ctx=$e:r===3&&$e&&($e.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else q(e)?(e={default:e,_ctx:$e},n=32):(e=String(e),s&64?(n=16,e=[mn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Fv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Or([e.class,s.class]));else if(r==="style")e.style=Cl([e.style,s.style]);else if(lo(r)){const i=e[r],o=s[r];o&&i!==o&&!($(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function St(t,e,n,s=null){ct(t,e,7,[n,s])}const Uv=dh();let $v=0;function jv(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Uv,i={uid:$v++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new xf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hh(s,r),emitsOptions:eh(s,r),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:s.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=z_.bind(null,i),t.ce&&t.ce(i),i}let Me=null;const Wl=()=>Me||$e;let Vl,ls,vu="__VUE_INSTANCE_SETTERS__";(ls=ya()[vu])||(ls=ya()[vu]=[]),ls.push(t=>Me=t),Vl=t=>{ls.length>1?ls.forEach(e=>e(t)):ls[0](t)};const Ns=t=>{Vl(t),t.scope.on()},Hn=()=>{Me&&Me.scope.off(),Vl(null)};function bh(t){return t.vnode.shapeFlag&4}let Lr=!1;function Hv(t,e=!1){Lr=e;const{props:n,children:s}=t.vnode,r=bh(t);Cv(t,n,r,e),Rv(t,s);const i=r?Bv(t,e):void 0;return Lr=!1,i}function Bv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=zf(new Proxy(t.ctx,mv));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Vv(t):null;Ns(t),Vs();const i=gn(s,t,0,[t.props,r]);if(Ks(),Hn(),kf(i)){if(i.then(Hn,Hn),e)return i.then(o=>{yu(t,o,e)}).catch(o=>{po(o,t,0)});t.asyncDep=i}else yu(t,i,e)}else wh(t,e)}function yu(t,e,n){q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:he(e)&&(t.setupState=Yf(e)),wh(t,n)}let bu;function wh(t,e,n){const s=t.type;if(!t.render){if(!e&&bu&&!s.render){const r=s.template||$l(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Te(Te({isCustomElement:i,delimiters:a},o),l);s.render=bu(r,c)}}t.render=s.render||yt}Ns(t),Vs(),_v(t),Ks(),Hn()}function Wv(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ze(t,"get","$attrs"),e[n]}}))}function Vv(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Wv(t)},slots:t.slots,emit:t.emit,expose:e}}function Io(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Yf(zf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in br)return br[n](t)},has(e,n){return n in e||n in br}}))}function Kv(t,e=!0){return q(t)?t.displayName||t.name:t.name||e&&t.__name}function zv(t){return q(t)&&"__vccOpts"in t}const ae=(t,e)=>j_(t,e,Lr);function En(t,e,n){const s=arguments.length;return s===2?he(e)&&!$(e)?Fi(e)?oe(t,null,[e]):oe(t,e):oe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Fi(n)&&(n=[n]),oe(t,e,n))}const Gv=Symbol.for("v-scx"),qv=()=>Je(Gv),Yv="3.3.4",Qv="http://www.w3.org/2000/svg",Fn=typeof document<"u"?document:null,wu=Fn&&Fn.createElement("template"),Jv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Fn.createElementNS(Qv,t):Fn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Fn.createTextNode(t),createComment:t=>Fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{wu.innerHTML=s?`<svg>${t}</svg>`:t;const a=wu.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Xv(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Zv(t,e,n){const s=t.style,r=Re(n);if(n&&!r){if(e&&!Re(e))for(const i in e)n[i]==null&&Na(s,i,"");for(const i in n)Na(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Eu=/\s*!important$/;function Na(t,e,n){if($(n))n.forEach(s=>Na(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=ey(t,e);Eu.test(n)?t.setProperty(Zn(s),n.replace(Eu,""),"important"):t[s]=n}}const Iu=["Webkit","Moz","ms"],qo={};function ey(t,e){const n=qo[e];if(n)return n;let s=Mt(e);if(s!=="filter"&&s in t)return qo[e]=s;s=uo(s);for(let r=0;r<Iu.length;r++){const i=Iu[r]+s;if(i in t)return qo[e]=i}return e}const Cu="http://www.w3.org/1999/xlink";function ty(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Cu,e.slice(6,e.length)):t.setAttributeNS(Cu,e,n);else{const i=Xm(e);n==null||i&&!Of(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function ny(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Of(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Ft(t,e,n,s){t.addEventListener(e,n,s)}function sy(t,e,n,s){t.removeEventListener(e,n,s)}function ry(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=iy(e);if(s){const c=i[e]=ly(s,r);Ft(t,a,c,l)}else o&&(sy(t,a,o,l),i[e]=void 0)}}const Su=/(?:Once|Passive|Capture)$/;function iy(t){let e;if(Su.test(t)){e={};let s;for(;s=t.match(Su);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Zn(t.slice(2)),e]}let Yo=0;const oy=Promise.resolve(),ay=()=>Yo||(oy.then(()=>Yo=0),Yo=Date.now());function ly(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ct(cy(s,n.value),e,5,[s])};return n.value=t,n.attached=ay(),n}function cy(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Tu=/^on[a-z]/,uy=(t,e,n,s,r=!1,i,o,a,l)=>{e==="class"?Xv(t,s,r):e==="style"?Zv(t,n,s):lo(e)?wl(e)||ry(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dy(t,e,s,r))?ny(t,e,s,i,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),ty(t,e,s,r))};function dy(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Tu.test(e)&&q(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Tu.test(e)&&Re(n)?!1:e in t}const nn="transition",or="animation",Kl=(t,{slots:e})=>En(nv,fy(t),e);Kl.displayName="Transition";const Eh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Kl.props=Te({},rh,Eh);const On=(t,e=[])=>{$(t)?t.forEach(n=>n(...e)):t&&t(...e)},Ru=t=>t?$(t)?t.some(e=>e.length>1):t.length>1:!1;function fy(t){const e={};for(const F in t)F in Eh||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=hy(r),_=m&&m[0],v=m&&m[1],{onBeforeEnter:C,onEnter:S,onEnterCancelled:M,onLeave:k,onLeaveCancelled:G,onBeforeAppear:U=C,onAppear:Y=S,onAppearCancelled:A=M}=e,W=(F,_e,Le)=>{Nn(F,_e?u:a),Nn(F,_e?c:o),Le&&Le()},V=(F,_e)=>{F._isLeaving=!1,Nn(F,d),Nn(F,p),Nn(F,f),_e&&_e()},ke=F=>(_e,Le)=>{const en=F?Y:S,Ee=()=>W(_e,F,Le);On(en,[_e,Ee]),ku(()=>{Nn(_e,F?l:i),sn(_e,F?u:a),Ru(en)||Au(_e,s,_,Ee)})};return Te(e,{onBeforeEnter(F){On(C,[F]),sn(F,i),sn(F,o)},onBeforeAppear(F){On(U,[F]),sn(F,l),sn(F,c)},onEnter:ke(!1),onAppear:ke(!0),onLeave(F,_e){F._isLeaving=!0;const Le=()=>V(F,_e);sn(F,d),my(),sn(F,f),ku(()=>{F._isLeaving&&(Nn(F,d),sn(F,p),Ru(k)||Au(F,s,v,Le))}),On(k,[F,Le])},onEnterCancelled(F){W(F,!1),On(M,[F])},onAppearCancelled(F){W(F,!0),On(A,[F])},onLeaveCancelled(F){V(F),On(G,[F])}})}function hy(t){if(t==null)return null;if(he(t))return[Qo(t.enter),Qo(t.leave)];{const e=Qo(t);return[e,e]}}function Qo(t){return zm(t)}function sn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Nn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function ku(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let py=0;function Au(t,e,n,s){const r=t._endId=++py,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=gy(t,e);if(!o)return s();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,f),i()},f=p=>{p.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,f)}function gy(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),r=s(`${nn}Delay`),i=s(`${nn}Duration`),o=Pu(r,i),a=s(`${or}Delay`),l=s(`${or}Duration`),c=Pu(a,l);let u=null,d=0,f=0;e===nn?o>0&&(u=nn,d=o,f=i.length):e===or?c>0&&(u=or,d=c,f=l.length):(d=Math.max(o,c),u=d>0?o>c?nn:or:null,f=u?u===nn?i.length:l.length:0);const p=u===nn&&/\b(transform|all)(,|$)/.test(s(`${nn}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function Pu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Ou(n)+Ou(t[s])))}function Ou(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function my(){return document.body.offsetHeight}const In=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>bi(e,n):e};function _y(t){t.target.composing=!0}function Nu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ui={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=In(r);const i=s||r.props&&r.props.type==="number";Ft(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Pi(a)),t._assign(a)}),n&&Ft(t,"change",()=>{t.value=t.value.trim()}),e||(Ft(t,"compositionstart",_y),Ft(t,"compositionend",Nu),Ft(t,"change",Nu))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=In(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Pi(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},vy={deep:!0,created(t,e,n){t._assign=In(n),Ft(t,"change",()=>{const s=t._modelValue,r=xs(t),i=t.checked,o=t._assign;if($(s)){const a=Sl(s,r),l=a!==-1;if(i&&!l)o(s.concat(r));else if(!i&&l){const c=[...s];c.splice(a,1),o(c)}}else if(Ws(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(Ih(t,i))})},mounted:xu,beforeUpdate(t,e,n){t._assign=In(n),xu(t,e,n)}};function xu(t,{value:e,oldValue:n},s){t._modelValue=e,$(e)?t.checked=Sl(e,s.props.value)>-1:Ws(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Wn(e,Ih(t,!0)))}const yy={created(t,{value:e},n){t.checked=Wn(e,n.props.value),t._assign=In(n),Ft(t,"change",()=>{t._assign(xs(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=In(s),e!==n&&(t.checked=Wn(e,s.props.value))}},by={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Ws(e);Ft(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Pi(xs(o)):xs(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=In(s)},mounted(t,{value:e}){Mu(t,e)},beforeUpdate(t,e,n){t._assign=In(n)},updated(t,{value:e}){Mu(t,e)}};function Mu(t,e){const n=t.multiple;if(!(n&&!$(e)&&!Ws(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=xs(i);if(n)$(e)?i.selected=Sl(e,o)>-1:i.selected=e.has(o);else if(Wn(xs(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function xs(t){return"_value"in t?t._value:t.value}function Ih(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const wy={created(t,e,n){di(t,e,n,null,"created")},mounted(t,e,n){di(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){di(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){di(t,e,n,s,"updated")}};function Ey(t,e){switch(t){case"SELECT":return by;case"TEXTAREA":return Ui;default:switch(e){case"checkbox":return vy;case"radio":return yy;default:return Ui}}}function di(t,e,n,s,r){const o=Ey(t.tagName,n.props&&n.props.type)[r];o&&o(t,e,n,s)}const Iy=["ctrl","shift","alt","meta"],Cy={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Iy.some(n=>t[`${n}Key`]&&!e.includes(n))},Du=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=Cy[e[r]];if(i&&i(n,e))return}return t(n,...s)},Sy={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ty=(t,e)=>n=>{if(!("key"in n))return;const s=Zn(n.key);if(e.some(r=>r===s||Sy[r]===s))return t(n)},Ry=Te({patchProp:uy},Jv);let Lu;function ky(){return Lu||(Lu=Av(Ry))}const Ay=(...t)=>{const e=ky().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Py(s);if(!r)return;const i=e._component;!q(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Py(t){return Re(t)?document.querySelector(t):t}const Ch=new Set,Xe=new WeakMap,Cs=new WeakMap,Vn=new WeakMap,xa=new WeakMap,Oy=new WeakMap,Ms=new WeakMap,$i=new WeakMap,mr=new WeakSet;let Kn;const Ut="__aa_tgt",Ma="__aa_del",Ny=t=>{const e=Fy(t);e&&e.forEach(n=>Uy(n))},xy=t=>{t.forEach(e=>{e.target===Kn&&Dy(),Xe.has(e.target)&&ts(e.target)})};function My(t){const e=xa.get(t);e==null||e.disconnect();let n=Xe.get(t),s=0;const r=5;n||(n=Ds(t),Xe.set(t,n));const{offsetWidth:i,offsetHeight:o}=Kn,l=[n.top-r,i-(n.left+r+n.width),o-(n.top+r+n.height),n.left-r].map(u=>`${-1*Math.floor(u)}px`).join(" "),c=new IntersectionObserver(()=>{++s>1&&ts(t)},{root:Kn,threshold:1,rootMargin:l});c.observe(t),xa.set(t,c)}function ts(t){clearTimeout($i.get(t));const e=Co(t),n=typeof e=="function"?500:e.duration;$i.set(t,setTimeout(async()=>{const s=Vn.get(t);try{await(s==null?void 0:s.finished),Xe.set(t,Ds(t)),My(t)}catch{}},n))}function Dy(){clearTimeout($i.get(Kn)),$i.set(Kn,setTimeout(()=>{Ch.forEach(t=>kh(t,e=>Sh(()=>ts(e))))},100))}function Ly(t){setTimeout(()=>{Oy.set(t,setInterval(()=>Sh(ts.bind(null,t)),2e3))},Math.round(2e3*Math.random()))}function Sh(t){typeof requestIdleCallback=="function"?requestIdleCallback(()=>t()):requestAnimationFrame(()=>t())}let Da,ps;typeof window<"u"&&(Kn=document.documentElement,Da=new MutationObserver(Ny),ps=new ResizeObserver(xy),ps.observe(Kn));function Fy(t){return t.reduce((s,r)=>[...s,...Array.from(r.addedNodes),...Array.from(r.removedNodes)],[]).every(s=>s.nodeName==="#comment")?!1:t.reduce((s,r)=>{if(s===!1)return!1;if(r.target instanceof Element){if(Jo(r.target),!s.has(r.target)){s.add(r.target);for(let i=0;i<r.target.children.length;i++){const o=r.target.children.item(i);if(o){if(Ma in o)return!1;Jo(r.target,o),s.add(o)}}}if(r.removedNodes.length)for(let i=0;i<r.removedNodes.length;i++){const o=r.removedNodes[i];if(Ma in o)return!1;o instanceof Element&&(s.add(o),Jo(r.target,o),Cs.set(o,[r.previousSibling,r.nextSibling]))}}return s},new Set)}function Jo(t,e){!e&&!(Ut in t)?Object.defineProperty(t,Ut,{value:t}):e&&!(Ut in e)&&Object.defineProperty(e,Ut,{value:t})}function Uy(t){var e;const n=t.isConnected,s=Xe.has(t);n&&Cs.has(t)&&Cs.delete(t),Vn.has(t)&&((e=Vn.get(t))===null||e===void 0||e.cancel()),s&&n?jy(t):s&&!n?By(t):Hy(t)}function Tt(t){return Number(t.replace(/[^0-9.\-]/g,""))}function $y(t){let e=t.parentElement;for(;e;){if(e.scrollLeft||e.scrollTop)return{x:e.scrollLeft,y:e.scrollTop};e=e.parentElement}return{x:0,y:0}}function Ds(t){const e=t.getBoundingClientRect(),{x:n,y:s}=$y(t);return{top:e.top+s,left:e.left+n,width:e.width,height:e.height}}function Th(t,e,n){let s=e.width,r=e.height,i=n.width,o=n.height;const a=getComputedStyle(t);if(a.getPropertyValue("box-sizing")==="content-box"){const c=Tt(a.paddingTop)+Tt(a.paddingBottom)+Tt(a.borderTopWidth)+Tt(a.borderBottomWidth),u=Tt(a.paddingLeft)+Tt(a.paddingRight)+Tt(a.borderRightWidth)+Tt(a.borderLeftWidth);s-=u,i-=u,r-=c,o-=c}return[s,i,r,o].map(Math.round)}function Co(t){return Ut in t&&Ms.has(t[Ut])?Ms.get(t[Ut]):{duration:250,easing:"ease-in-out"}}function Rh(t){if(Ut in t)return t[Ut]}function zl(t){const e=Rh(t);return e?mr.has(e):!1}function kh(t,...e){e.forEach(n=>n(t,Ms.has(t)));for(let n=0;n<t.children.length;n++){const s=t.children.item(n);s&&e.forEach(r=>r(s,Ms.has(s)))}}function jy(t){const e=Xe.get(t),n=Ds(t);if(!zl(t))return Xe.set(t,n);let s;if(!e)return;const r=Co(t);if(typeof r!="function"){const i=e.left-n.left,o=e.top-n.top,[a,l,c,u]=Th(t,e,n),d={transform:`translate(${i}px, ${o}px)`},f={transform:"translate(0, 0)"};a!==l&&(d.width=`${a}px`,f.width=`${l}px`),c!==u&&(d.height=`${c}px`,f.height=`${u}px`),s=t.animate([d,f],{duration:r.duration,easing:r.easing})}else s=new Animation(r(t,"remain",e,n)),s.play();Vn.set(t,s),Xe.set(t,n),s.addEventListener("finish",ts.bind(null,t))}function Hy(t){const e=Ds(t);Xe.set(t,e);const n=Co(t);if(!zl(t))return;let s;typeof n!="function"?s=t.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:n.duration*1.5,easing:"ease-in"}):(s=new Animation(n(t,"add",e)),s.play()),Vn.set(t,s),s.addEventListener("finish",ts.bind(null,t))}function By(t){var e;if(!Cs.has(t)||!Xe.has(t))return;const[n,s]=Cs.get(t);Object.defineProperty(t,Ma,{value:!0}),s&&s.parentNode&&s.parentNode instanceof Element?s.parentNode.insertBefore(t,s):n&&n.parentNode?n.parentNode.appendChild(t):(e=Rh(t))===null||e===void 0||e.appendChild(t);function r(){var f;t.remove(),Xe.delete(t),Cs.delete(t),Vn.delete(t),(f=xa.get(t))===null||f===void 0||f.disconnect()}if(!zl(t))return r();const[i,o,a,l]=Wy(t),c=Co(t),u=Xe.get(t);let d;Object.assign(t.style,{position:"absolute",top:`${i}px`,left:`${o}px`,width:`${a}px`,height:`${l}px`,margin:0,pointerEvents:"none",transformOrigin:"center",zIndex:100}),typeof c!="function"?d=t.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:c.duration,easing:"ease-out"}):(d=new Animation(c(t,"remove",u)),d.play()),Vn.set(t,d),d.addEventListener("finish",r)}function Wy(t){const e=Xe.get(t),[n,,s]=Th(t,e,Ds(t));let r=t.parentElement;for(;r&&(getComputedStyle(r).position==="static"||r instanceof HTMLBodyElement);)r=r.parentElement;r||(r=document.body);const i=getComputedStyle(r),o=Xe.get(r)||Ds(r),a=Math.round(e.top-o.top)-Tt(i.borderTopWidth),l=Math.round(e.left-o.left)-Tt(i.borderLeftWidth);return[a,l,n,s]}function Vy(t,e={}){return Da&&ps&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&typeof e!="function"&&!e.disrespectUserMotionPreference||(mr.add(t),getComputedStyle(t).position==="static"&&Object.assign(t.style,{position:"relative"}),kh(t,ts,Ly,r=>ps==null?void 0:ps.observe(r)),typeof e=="function"?Ms.set(t,e):Ms.set(t,{duration:250,easing:"ease-in-out",...e}),Da.observe(t,{childList:!0}),Ch.add(t))),Object.freeze({parent:t,enable:()=>{mr.add(t)},disable:()=>{mr.delete(t)},isEnabled:()=>mr.has(t)})}const Ky={mounted:(t,e)=>{Vy(t,e.value||{})}},zy={install(t){t.directive("auto-animate",Ky)}};function Gy(){return Ah().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Ah(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const qy=typeof Proxy=="function",Yy="devtools-plugin:setup",Qy="plugin:settings:set";let cs,La;function Jy(){var t;return cs!==void 0||(typeof window<"u"&&window.performance?(cs=!0,La=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(cs=!0,La=global.perf_hooks.performance):cs=!1),cs}function Xy(){return Jy()?La.now():Date.now()}class Zy{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},s);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}i=o},now(){return Xy()}},n&&n.on(Qy,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function eb(t,e){const n=t,s=Ah(),r=Gy(),i=qy&&n.enableEarlyProxy;if(r&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))r.emit(Yy,t,e);else{const o=i?new Zy(n,r):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ph=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",qs=t=>Ph?Symbol(t):"_vr_"+t,tb=qs("rvlm"),Fu=qs("rvd"),So=qs("r"),Oh=qs("rl"),Fa=qs("rvl"),hs=typeof window<"u";function nb(t){return t.__esModule||Ph&&t[Symbol.toStringTag]==="Module"}const pe=Object.assign;function Xo(t,e){const n={};for(const s in e){const r=e[s];n[s]=Array.isArray(r)?r.map(t):t(r)}return n}const Er=()=>{},sb=/\/$/,rb=t=>t.replace(sb,"");function Zo(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("?"),l=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),i=e.slice(a+1,l>-1?l:e.length),r=t(i)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=lb(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function ib(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Uu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ob(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Ls(e.matched[s],n.matched[r])&&Nh(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ls(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Nh(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!ab(t[n],e[n]))return!1;return!0}function ab(t,e){return Array.isArray(t)?$u(t,e):Array.isArray(e)?$u(e,t):t===e}function $u(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function lb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Fr;(function(t){t.pop="pop",t.push="push"})(Fr||(Fr={}));var Ir;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ir||(Ir={}));function cb(t){if(!t)if(hs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),rb(t)}const ub=/^[^#]+#/;function db(t,e){return t.replace(ub,"#")+e}function fb(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const To=()=>({left:window.pageXOffset,top:window.pageYOffset});function hb(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=fb(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ju(t,e){return(history.state?history.state.position-e:-1)+t}const Ua=new Map;function pb(t,e){Ua.set(t,e)}function gb(t){const e=Ua.get(t);return Ua.delete(t),e}let mb=()=>location.protocol+"//"+location.host;function xh(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Uu(l,"")}return Uu(n,t)+s+r}function _b(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const p=xh(t,location),m=n.value,_=e.value;let v=0;if(f){if(n.value=p,e.value=f,o&&o===m){o=null;return}v=_?f.position-_.position:0}else s(p);r.forEach(C=>{C(n.value,m,{delta:v,type:Fr.pop,direction:v?v>0?Ir.forward:Ir.back:Ir.unknown})})};function l(){o=n.value}function c(f){r.push(f);const p=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return i.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(pe({},f.state,{scroll:To()}),"")}function d(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function Hu(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?To():null}}function vb(t){const{history:e,location:n}=window,s={value:xh(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:mb()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(l,c){const u=pe({},e.state,Hu(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});i(l,u,!0),s.value=l}function a(l,c){const u=pe({},r.value,e.state,{forward:l,scroll:To()});i(u.current,u,!0);const d=pe({},Hu(s.value,l,null),{position:u.position+1},c);i(l,d,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function yb(t){t=cb(t);const e=vb(t),n=_b(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=pe({location:"",base:t,go:s,createHref:db.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function bb(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),yb(t)}function wb(t){return typeof t=="string"||t&&typeof t=="object"}function Mh(t){return typeof t=="string"||typeof t=="symbol"}const rn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Dh=qs("nf");var Bu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Bu||(Bu={}));function Fs(t,e){return pe(new Error,{type:t,[Dh]:!0},e)}function on(t,e){return t instanceof Error&&Dh in t&&(e==null||!!(t.type&e))}const Wu="[^/]+?",Eb={sensitive:!1,strict:!1,start:!0,end:!0},Ib=/[.+*?^${}()[\]/\\]/g;function Cb(t,e){const n=pe({},Eb,e),s=[];let r=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const f=c[d];let p=40+(n.sensitive?.25:0);if(f.type===0)d||(r+="/"),r+=f.value.replace(Ib,"\\$&"),p+=40;else if(f.type===1){const{value:m,repeatable:_,optional:v,regexp:C}=f;i.push({name:m,repeatable:_,optional:v});const S=C||Wu;if(S!==Wu){p+=10;try{new RegExp(`(${S})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${m}" (${S}): `+k.message)}}let M=_?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;d||(M=v&&c.length<2?`(?:/${M})`:"/"+M),v&&(M+="?"),r+=M,p+=20,v&&(p+=-8),_&&(p+=-20),S===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",m=i[f-1];d[m.name]=p&&m.repeatable?p.split("/"):p}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:_,optional:v}=p,C=m in c?c[m]:"";if(Array.isArray(C)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const S=Array.isArray(C)?C.join("/"):C;if(!S)if(v)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${m}"`);u+=S}}return u}return{re:o,score:s,keys:i,parse:a,stringify:l}}function Sb(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Tb(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Sb(s[n],r[n]);if(i)return i;n++}return r.length-s.length}const Rb={type:0,value:""},kb=/[a-zA-Z0-9_]/;function Ab(t){if(!t)return[[]];if(t==="/")return[[Rb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,c="",u="";function d(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):f();break;case 4:f(),n=s;break;case 1:l==="("?n=2:kb.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),r}function Pb(t,e,n){const s=Cb(Ab(t.path),n),r=pe(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Ob(t,e){const n=[],s=new Map;e=Ku({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,d,f){const p=!f,m=xb(u);m.aliasOf=f&&f.record;const _=Ku(e,u),v=[m];if("alias"in u){const M=typeof u.alias=="string"?[u.alias]:u.alias;for(const k of M)v.push(pe({},m,{components:f?f.record.components:m.components,path:k,aliasOf:f?f.record:m}))}let C,S;for(const M of v){const{path:k}=M;if(d&&k[0]!=="/"){const G=d.record.path,U=G[G.length-1]==="/"?"":"/";M.path=d.record.path+(k&&U+k)}if(C=Pb(M,d,_),f?f.alias.push(C):(S=S||C,S!==C&&S.alias.push(C),p&&u.name&&!Vu(C)&&o(u.name)),"children"in m){const G=m.children;for(let U=0;U<G.length;U++)i(G[U],C,f&&f.children[U])}f=f||C,l(C)}return S?()=>{o(S)}:Er}function o(u){if(Mh(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&Tb(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Lh(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Vu(u)&&s.set(u.record.name,u)}function c(u,d){let f,p={},m,_;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Fs(1,{location:u});_=f.record.name,p=pe(Nb(d.params,f.keys.filter(S=>!S.optional).map(S=>S.name)),u.params),m=f.stringify(p)}else if("path"in u)m=u.path,f=n.find(S=>S.re.test(m)),f&&(p=f.parse(m),_=f.record.name);else{if(f=d.name?s.get(d.name):n.find(S=>S.re.test(d.path)),!f)throw Fs(1,{location:u,currentLocation:d});_=f.record.name,p=pe({},d.params,u.params),m=f.stringify(p)}const v=[];let C=f;for(;C;)v.unshift(C.record),C=C.parent;return{name:_,path:m,params:p,matched:v,meta:Db(v)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Nb(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function xb(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Mb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Mb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Vu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Db(t){return t.reduce((e,n)=>pe(e,n.meta),{})}function Ku(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Lh(t,e){return e.children.some(n=>n===t||Lh(t,n))}const Fh=/#/g,Lb=/&/g,Fb=/\//g,Ub=/=/g,$b=/\?/g,Uh=/\+/g,jb=/%5B/g,Hb=/%5D/g,$h=/%5E/g,Bb=/%60/g,jh=/%7B/g,Wb=/%7C/g,Hh=/%7D/g,Vb=/%20/g;function Gl(t){return encodeURI(""+t).replace(Wb,"|").replace(jb,"[").replace(Hb,"]")}function Kb(t){return Gl(t).replace(jh,"{").replace(Hh,"}").replace($h,"^")}function $a(t){return Gl(t).replace(Uh,"%2B").replace(Vb,"+").replace(Fh,"%23").replace(Lb,"%26").replace(Bb,"`").replace(jh,"{").replace(Hh,"}").replace($h,"^")}function zb(t){return $a(t).replace(Ub,"%3D")}function Gb(t){return Gl(t).replace(Fh,"%23").replace($b,"%3F")}function qb(t){return t==null?"":Gb(t).replace(Fb,"%2F")}function ji(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Yb(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Uh," "),o=i.indexOf("="),a=ji(o<0?i:i.slice(0,o)),l=o<0?null:ji(i.slice(o+1));if(a in e){let c=e[a];Array.isArray(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function zu(t){let e="";for(let n in t){const s=t[n];if(n=zb(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(i=>i&&$a(i)):[s&&$a(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Qb(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}function ar(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function cn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(Fs(4,{from:n,to:e})):d instanceof Error?a(d):wb(d)?a(Fs(2,{from:e,to:d})):(i&&s.enterCallbacks[r]===i&&typeof d=="function"&&i.push(d),o())},c=t.call(s&&s.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function ea(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Jb(a)){const c=(a.__vccOpts||a)[e];c&&r.push(cn(c,n,s,i,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=nb(c)?c.default:c;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&cn(f,n,s,i,o)()}))}}return r}function Jb(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Gu(t){const e=Je(So),n=Je(Oh),s=ae(()=>e.resolve(ws(t.to))),r=ae(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Ls.bind(null,u));if(f>-1)return f;const p=qu(l[c-2]);return c>1&&qu(u)===p&&d[d.length-1].path!==p?d.findIndex(Ls.bind(null,l[c-2])):f}),i=ae(()=>r.value>-1&&tw(n.params,s.value.params)),o=ae(()=>r.value>-1&&r.value===n.matched.length-1&&Nh(n.params,s.value.params));function a(l={}){return ew(l)?e[ws(t.replace)?"replace":"push"](ws(t.to)).catch(Er):Promise.resolve()}return{route:s,href:ae(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Xb=Qt({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Gu,setup(t,{slots:e}){const n=zs(Gu(t)),{options:s}=Je(So),r=ae(()=>({[Yu(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Yu(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:En("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Zb=Xb;function ew(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function tw(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function qu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yu=(t,e,n)=>t??e??n,nw=Qt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=Je(Fa),r=ae(()=>t.route||s.value),i=Je(Fu,0),o=ae(()=>r.value.matched[i]);Is(Fu,i+1),Is(tb,o),Is(Fa,r);const a=Q();return Ot(()=>[a.value,o.value,t.name],([l,c,u],[d,f,p])=>{c&&(c.instances[u]=l,f&&f!==c&&l&&l===d&&(c.leaveGuards.size||(c.leaveGuards=f.leaveGuards),c.updateGuards.size||(c.updateGuards=f.updateGuards))),l&&c&&(!f||!Ls(c,f)||!d)&&(c.enterCallbacks[u]||[]).forEach(m=>m(l))},{flush:"post"}),()=>{const l=r.value,c=o.value,u=c&&c.components[t.name],d=t.name;if(!u)return Qu(n.default,{Component:u,route:l});const f=c.props[t.name],p=f?f===!0?l.params:typeof f=="function"?f(l):f:null,_=En(u,pe({},p,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(c.instances[d]=null)},ref:a}));return Qu(n.default,{Component:_,route:l})||_}}});function Qu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const sw=nw;function rw(t){const e=Ob(t.routes,t),n=t.parseQuery||Yb,s=t.stringifyQuery||zu,r=t.history,i=ar(),o=ar(),a=ar(),l=Gf(rn);let c=rn;hs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Xo.bind(null,w=>""+w),d=Xo.bind(null,qb),f=Xo.bind(null,ji);function p(w,D){let N,j;return Mh(w)?(N=e.getRecordMatcher(w),j=D):j=w,e.addRoute(j,N)}function m(w){const D=e.getRecordMatcher(w);D&&e.removeRoute(D)}function _(){return e.getRoutes().map(w=>w.record)}function v(w){return!!e.getRecordMatcher(w)}function C(w,D){if(D=pe({},D||l.value),typeof w=="string"){const h=Zo(n,w,D.path),g=e.resolve({path:h.path},D),y=r.createHref(h.fullPath);return pe(h,g,{params:f(g.params),hash:ji(h.hash),redirectedFrom:void 0,href:y})}let N;if("path"in w)N=pe({},w,{path:Zo(n,w.path,D.path).path});else{const h=pe({},w.params);for(const g in h)h[g]==null&&delete h[g];N=pe({},w,{params:d(w.params)}),D.params=d(D.params)}const j=e.resolve(N,D),ie=w.hash||"";j.params=u(f(j.params));const Ie=ib(s,pe({},w,{hash:Kb(ie),path:j.path})),J=r.createHref(Ie);return pe({fullPath:Ie,hash:ie,query:s===zu?Qb(w.query):w.query||{}},j,{redirectedFrom:void 0,href:J})}function S(w){return typeof w=="string"?Zo(n,w,l.value.path):pe({},w)}function M(w,D){if(c!==w)return Fs(8,{from:D,to:w})}function k(w){return Y(w)}function G(w){return k(pe(S(w),{replace:!0}))}function U(w){const D=w.matched[w.matched.length-1];if(D&&D.redirect){const{redirect:N}=D;let j=typeof N=="function"?N(w):N;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=S(j):{path:j},j.params={}),pe({query:w.query,hash:w.hash,params:w.params},j)}}function Y(w,D){const N=c=C(w),j=l.value,ie=w.state,Ie=w.force,J=w.replace===!0,h=U(N);if(h)return Y(pe(S(h),{state:ie,force:Ie,replace:J}),D||N);const g=N;g.redirectedFrom=D;let y;return!Ie&&ob(s,j,N)&&(y=Fs(16,{to:g,from:j}),kn(j,j,!0,!1)),(y?Promise.resolve(y):W(g,j)).catch(b=>on(b)?on(b,2)?b:ft(b):ge(b,g,j)).then(b=>{if(b){if(on(b,2))return Y(pe(S(b.to),{state:ie,force:Ie,replace:J}),D||g)}else b=ke(g,j,!0,J,ie);return V(g,j,b),b})}function A(w,D){const N=M(w,D);return N?Promise.reject(N):Promise.resolve()}function W(w,D){let N;const[j,ie,Ie]=iw(w,D);N=ea(j.reverse(),"beforeRouteLeave",w,D);for(const h of j)h.leaveGuards.forEach(g=>{N.push(cn(g,w,D))});const J=A.bind(null,w,D);return N.push(J),us(N).then(()=>{N=[];for(const h of i.list())N.push(cn(h,w,D));return N.push(J),us(N)}).then(()=>{N=ea(ie,"beforeRouteUpdate",w,D);for(const h of ie)h.updateGuards.forEach(g=>{N.push(cn(g,w,D))});return N.push(J),us(N)}).then(()=>{N=[];for(const h of w.matched)if(h.beforeEnter&&!D.matched.includes(h))if(Array.isArray(h.beforeEnter))for(const g of h.beforeEnter)N.push(cn(g,w,D));else N.push(cn(h.beforeEnter,w,D));return N.push(J),us(N)}).then(()=>(w.matched.forEach(h=>h.enterCallbacks={}),N=ea(Ie,"beforeRouteEnter",w,D),N.push(J),us(N))).then(()=>{N=[];for(const h of o.list())N.push(cn(h,w,D));return N.push(J),us(N)}).catch(h=>on(h,8)?h:Promise.reject(h))}function V(w,D,N){for(const j of a.list())j(w,D,N)}function ke(w,D,N,j,ie){const Ie=M(w,D);if(Ie)return Ie;const J=D===rn,h=hs?history.state:{};N&&(j||J?r.replace(w.fullPath,pe({scroll:J&&h&&h.scroll},ie)):r.push(w.fullPath,ie)),l.value=w,kn(w,D,N,J),ft()}let F;function _e(){F=r.listen((w,D,N)=>{const j=C(w),ie=U(j);if(ie){Y(pe(ie,{replace:!0}),j).catch(Er);return}c=j;const Ie=l.value;hs&&pb(ju(Ie.fullPath,N.delta),To()),W(j,Ie).catch(J=>on(J,12)?J:on(J,2)?(Y(J.to,j).then(h=>{on(h,20)&&!N.delta&&N.type===Fr.pop&&r.go(-1,!1)}).catch(Er),Promise.reject()):(N.delta&&r.go(-N.delta,!1),ge(J,j,Ie))).then(J=>{J=J||ke(j,Ie,!1),J&&(N.delta?r.go(-N.delta,!1):N.type===Fr.pop&&on(J,20)&&r.go(-1,!1)),V(j,Ie,J)}).catch(Er)})}let Le=ar(),en=ar(),Ee;function ge(w,D,N){ft(w);const j=en.list();return j.length?j.forEach(ie=>ie(w,D,N)):console.error(w),Promise.reject(w)}function ce(){return Ee&&l.value!==rn?Promise.resolve():new Promise((w,D)=>{Le.add([w,D])})}function ft(w){return Ee||(Ee=!w,_e(),Le.list().forEach(([D,N])=>w?N(w):D()),Le.reset()),w}function kn(w,D,N,j){const{scrollBehavior:ie}=t;if(!hs||!ie)return Promise.resolve();const Ie=!N&&gb(ju(w.fullPath,0))||(j||!N)&&history.state&&history.state.scroll||null;return bt().then(()=>ie(w,D,Ie)).then(J=>J&&hb(J)).catch(J=>ge(J,w,D))}const ht=w=>r.go(w);let Ge;const os=new Set;return{currentRoute:l,addRoute:p,removeRoute:m,hasRoute:v,getRoutes:_,resolve:C,options:t,push:k,replace:G,go:ht,back:()=>ht(-1),forward:()=>ht(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:en.add,isReady:ce,install(w){const D=this;w.component("RouterLink",Zb),w.component("RouterView",sw),w.config.globalProperties.$router=D,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>ws(l)}),hs&&!Ge&&l.value===rn&&(Ge=!0,k(r.location).catch(ie=>{}));const N={};for(const ie in rn)N[ie]=ae(()=>l.value[ie]);w.provide(So,D),w.provide(Oh,zs(N)),w.provide(Fa,l);const j=w.unmount;os.add(w),w.unmount=function(){os.delete(w),os.size<1&&(c=rn,F&&F(),l.value=rn,Ge=!1,Ee=!1),j()}}}}function us(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function iw(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ls(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ls(c,l))||r.push(l))}return[n,s,r]}function Bh(){return Je(So)}const Cr=/^[a-z0-9]+(-[a-z0-9]+)*$/,Ro=(t,e,n,s="")=>{const r=t.split(":");if(t.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;s=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const a=r.pop(),l=r.pop(),c={provider:r.length>0?r[0]:s,prefix:l,name:a};return e&&!Ei(c)?null:c}const i=r[0],o=i.split("-");if(o.length>1){const a={provider:s,prefix:o.shift(),name:o.join("-")};return e&&!Ei(a)?null:a}if(n&&s===""){const a={provider:s,prefix:"",name:i};return e&&!Ei(a,n)?null:a}return null},Ei=(t,e)=>t?!!((t.provider===""||t.provider.match(Cr))&&(e&&t.prefix===""||t.prefix.match(Cr))&&t.name.match(Cr)):!1,Wh=Object.freeze({left:0,top:0,width:16,height:16}),Hi=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),ko=Object.freeze({...Wh,...Hi}),ja=Object.freeze({...ko,body:"",hidden:!1});function ow(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const s=((t.rotate||0)+(e.rotate||0))%4;return s&&(n.rotate=s),n}function Ju(t,e){const n=ow(t,e);for(const s in ja)s in Hi?s in t&&!(s in n)&&(n[s]=Hi[s]):s in e?n[s]=e[s]:s in t&&(n[s]=t[s]);return n}function aw(t,e){const n=t.icons,s=t.aliases||Object.create(null),r=Object.create(null);function i(o){if(n[o])return r[o]=[];if(!(o in r)){r[o]=null;const a=s[o]&&s[o].parent,l=a&&i(a);l&&(r[o]=[a].concat(l))}return r[o]}return(e||Object.keys(n).concat(Object.keys(s))).forEach(i),r}function lw(t,e,n){const s=t.icons,r=t.aliases||Object.create(null);let i={};function o(a){i=Ju(s[a]||r[a],i)}return o(e),n.forEach(o),Ju(t,i)}function Vh(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(r=>{e(r,null),n.push(r)});const s=aw(t);for(const r in s){const i=s[r];i&&(e(r,lw(t,r,i)),n.push(r))}return n}const cw={provider:"",aliases:{},not_found:{},...Wh};function ta(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function Kh(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!ta(t,cw))return null;const n=e.icons;for(const r in n){const i=n[r];if(!r.match(Cr)||typeof i.body!="string"||!ta(i,ja))return null}const s=e.aliases||Object.create(null);for(const r in s){const i=s[r],o=i.parent;if(!r.match(Cr)||typeof o!="string"||!n[o]&&!s[o]||!ta(i,ja))return null}return e}const Xu=Object.create(null);function uw(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function zn(t,e){const n=Xu[t]||(Xu[t]=Object.create(null));return n[e]||(n[e]=uw(t,e))}function ql(t,e){return Kh(e)?Vh(e,(n,s)=>{s?t.icons[n]=s:t.missing.add(n)}):[]}function dw(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let Ur=!1;function zh(t){return typeof t=="boolean"&&(Ur=t),Ur}function fw(t){const e=typeof t=="string"?Ro(t,!0,Ur):t;if(e){const n=zn(e.provider,e.prefix),s=e.name;return n.icons[s]||(n.missing.has(s)?null:void 0)}}function hw(t,e){const n=Ro(t,!0,Ur);if(!n)return!1;const s=zn(n.provider,n.prefix);return dw(s,n.name,e)}function pw(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),Ur&&!e&&!t.prefix){let r=!1;return Kh(t)&&(t.prefix="",Vh(t,(i,o)=>{o&&hw(i,o)&&(r=!0)})),r}const n=t.prefix;if(!Ei({provider:e,prefix:n,name:"a"}))return!1;const s=zn(e,n);return!!ql(s,t)}const Gh=Object.freeze({width:null,height:null}),qh=Object.freeze({...Gh,...Hi}),gw=/(-?[0-9.]*[0-9]+[0-9.]*)/g,mw=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Zu(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const s=t.split(gw);if(s===null||!s.length)return t;const r=[];let i=s.shift(),o=mw.test(i);for(;;){if(o){const a=parseFloat(i);isNaN(a)?r.push(i):r.push(Math.ceil(a*e*n)/n)}else r.push(i);if(i=s.shift(),i===void 0)return r.join("");o=!o}}const _w=t=>t==="unset"||t==="undefined"||t==="none";function vw(t,e){const n={...ko,...t},s={...qh,...e},r={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,s].forEach(m=>{const _=[],v=m.hFlip,C=m.vFlip;let S=m.rotate;v?C?S+=2:(_.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),_.push("scale(-1 1)"),r.top=r.left=0):C&&(_.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),_.push("scale(1 -1)"),r.top=r.left=0);let M;switch(S<0&&(S-=Math.floor(S/4)*4),S=S%4,S){case 1:M=r.height/2+r.top,_.unshift("rotate(90 "+M.toString()+" "+M.toString()+")");break;case 2:_.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:M=r.width/2+r.left,_.unshift("rotate(-90 "+M.toString()+" "+M.toString()+")");break}S%2===1&&(r.left!==r.top&&(M=r.left,r.left=r.top,r.top=M),r.width!==r.height&&(M=r.width,r.width=r.height,r.height=M)),_.length&&(i='<g transform="'+_.join(" ")+'">'+i+"</g>")});const o=s.width,a=s.height,l=r.width,c=r.height;let u,d;o===null?(d=a===null?"1em":a==="auto"?c:a,u=Zu(d,l/c)):(u=o==="auto"?l:o,d=a===null?Zu(u,c/l):a==="auto"?c:a);const f={},p=(m,_)=>{_w(_)||(f[m]=_.toString())};return p("width",u),p("height",d),f.viewBox=r.left.toString()+" "+r.top.toString()+" "+l.toString()+" "+c.toString(),{attributes:f,body:i}}const yw=/\sid="(\S+)"/g,bw="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let ww=0;function Ew(t,e=bw){const n=[];let s;for(;s=yw.exec(t);)n.push(s[1]);if(!n.length)return t;const r="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const o=typeof e=="function"?e(i):e+(ww++).toString(),a=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+o+r+"$3")}),t=t.replace(new RegExp(r,"g"),""),t}const Ha=Object.create(null);function Iw(t,e){Ha[t]=e}function Ba(t){return Ha[t]||Ha[""]}function Yl(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const Ql=Object.create(null),lr=["https://api.simplesvg.com","https://api.unisvg.com"],Ii=[];for(;lr.length>0;)lr.length===1||Math.random()>.5?Ii.push(lr.shift()):Ii.push(lr.pop());Ql[""]=Yl({resources:["https://api.iconify.design"].concat(Ii)});function Cw(t,e){const n=Yl(e);return n===null?!1:(Ql[t]=n,!0)}function Jl(t){return Ql[t]}const Sw=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let ed=Sw();function Tw(t,e){const n=Jl(t);if(!n)return 0;let s;if(!n.maxURL)s=0;else{let r=0;n.resources.forEach(o=>{r=Math.max(r,o.length)});const i=e+".json?icons=";s=n.maxURL-r-n.path.length-i.length}return s}function Rw(t){return t===404}const kw=(t,e,n)=>{const s=[],r=Tw(t,e),i="icons";let o={type:i,provider:t,prefix:e,icons:[]},a=0;return n.forEach((l,c)=>{a+=l.length+1,a>=r&&c>0&&(s.push(o),o={type:i,provider:t,prefix:e,icons:[]},a=l.length),o.icons.push(l)}),s.push(o),s};function Aw(t){if(typeof t=="string"){const e=Jl(t);if(e)return e.path}return"/"}const Pw=(t,e,n)=>{if(!ed){n("abort",424);return}let s=Aw(e.provider);switch(e.type){case"icons":{const i=e.prefix,a=e.icons.join(","),l=new URLSearchParams({icons:a});s+=i+".json?"+l.toString();break}case"custom":{const i=e.uri;s+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let r=503;ed(t+s).then(i=>{const o=i.status;if(o!==200){setTimeout(()=>{n(Rw(o)?"abort":"next",o)});return}return r=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",r)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",r)})},Ow={prepare:kw,send:Pw};function Nw(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((r,i)=>r.provider!==i.provider?r.provider.localeCompare(i.provider):r.prefix!==i.prefix?r.prefix.localeCompare(i.prefix):r.name.localeCompare(i.name));let s={provider:"",prefix:"",name:""};return t.forEach(r=>{if(s.name===r.name&&s.prefix===r.prefix&&s.provider===r.provider)return;s=r;const i=r.provider,o=r.prefix,a=r.name,l=n[i]||(n[i]=Object.create(null)),c=l[o]||(l[o]=zn(i,o));let u;a in c.icons?u=e.loaded:o===""||c.missing.has(a)?u=e.missing:u=e.pending;const d={provider:i,prefix:o,name:a};u.push(d)}),e}function Yh(t,e){t.forEach(n=>{const s=n.loaderCallbacks;s&&(n.loaderCallbacks=s.filter(r=>r.id!==e))})}function xw(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const s=t.provider,r=t.prefix;e.forEach(i=>{const o=i.icons,a=o.pending.length;o.pending=o.pending.filter(l=>{if(l.prefix!==r)return!0;const c=l.name;if(t.icons[c])o.loaded.push({provider:s,prefix:r,name:c});else if(t.missing.has(c))o.missing.push({provider:s,prefix:r,name:c});else return n=!0,!0;return!1}),o.pending.length!==a&&(n||Yh([t],i.id),i.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),i.abort))})}))}let Mw=0;function Dw(t,e,n){const s=Mw++,r=Yh.bind(null,n,s);if(!e.pending.length)return r;const i={id:s,icons:e,callback:t,abort:r};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(i)}),r}function Lw(t,e=!0,n=!1){const s=[];return t.forEach(r=>{const i=typeof r=="string"?Ro(r,e,n):r;i&&s.push(i)}),s}var Fw={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Uw(t,e,n,s){const r=t.resources.length,i=t.random?Math.floor(Math.random()*r):t.index;let o;if(t.random){let U=t.resources.slice(0);for(o=[];U.length>1;){const Y=Math.floor(Math.random()*U.length);o.push(U[Y]),U=U.slice(0,Y).concat(U.slice(Y+1))}o=o.concat(U)}else o=t.resources.slice(i).concat(t.resources.slice(0,i));const a=Date.now();let l="pending",c=0,u,d=null,f=[],p=[];typeof s=="function"&&p.push(s);function m(){d&&(clearTimeout(d),d=null)}function _(){l==="pending"&&(l="aborted"),m(),f.forEach(U=>{U.status==="pending"&&(U.status="aborted")}),f=[]}function v(U,Y){Y&&(p=[]),typeof U=="function"&&p.push(U)}function C(){return{startTime:a,payload:e,status:l,queriesSent:c,queriesPending:f.length,subscribe:v,abort:_}}function S(){l="failed",p.forEach(U=>{U(void 0,u)})}function M(){f.forEach(U=>{U.status==="pending"&&(U.status="aborted")}),f=[]}function k(U,Y,A){const W=Y!=="success";switch(f=f.filter(V=>V!==U),l){case"pending":break;case"failed":if(W||!t.dataAfterTimeout)return;break;default:return}if(Y==="abort"){u=A,S();return}if(W){u=A,f.length||(o.length?G():S());return}if(m(),M(),!t.random){const V=t.resources.indexOf(U.resource);V!==-1&&V!==t.index&&(t.index=V)}l="completed",p.forEach(V=>{V(A)})}function G(){if(l!=="pending")return;m();const U=o.shift();if(U===void 0){if(f.length){d=setTimeout(()=>{m(),l==="pending"&&(M(),S())},t.timeout);return}S();return}const Y={status:"pending",resource:U,callback:(A,W)=>{k(Y,A,W)}};f.push(Y),c++,d=setTimeout(G,t.rotate),n(U,e,Y.callback)}return setTimeout(G),C}function Qh(t){const e={...Fw,...t};let n=[];function s(){n=n.filter(a=>a().status==="pending")}function r(a,l,c){const u=Uw(e,a,l,(d,f)=>{s(),c&&c(d,f)});return n.push(u),u}function i(a){return n.find(l=>a(l))||null}return{query:r,find:i,setIndex:a=>{e.index=a},getIndex:()=>e.index,cleanup:s}}function td(){}const na=Object.create(null);function $w(t){if(!na[t]){const e=Jl(t);if(!e)return;const n=Qh(e),s={config:e,redundancy:n};na[t]=s}return na[t]}function jw(t,e,n){let s,r;if(typeof t=="string"){const i=Ba(t);if(!i)return n(void 0,424),td;r=i.send;const o=$w(t);o&&(s=o.redundancy)}else{const i=Yl(t);if(i){s=Qh(i);const o=t.resources?t.resources[0]:"",a=Ba(o);a&&(r=a.send)}}return!s||!r?(n(void 0,424),td):s.query(e,r,n)().abort}const nd="iconify2",$r="iconify",Jh=$r+"-count",sd=$r+"-version",Xh=36e5,Hw=168;function Wa(t,e){try{return t.getItem(e)}catch{}}function Xl(t,e,n){try{return t.setItem(e,n),!0}catch{}}function rd(t,e){try{t.removeItem(e)}catch{}}function Va(t,e){return Xl(t,Jh,e.toString())}function Ka(t){return parseInt(Wa(t,Jh))||0}const Ao={local:!0,session:!0},Zh={local:new Set,session:new Set};let Zl=!1;function Bw(t){Zl=t}let fi=typeof window>"u"?{}:window;function ep(t){const e=t+"Storage";try{if(fi&&fi[e]&&typeof fi[e].length=="number")return fi[e]}catch{}Ao[t]=!1}function tp(t,e){const n=ep(t);if(!n)return;const s=Wa(n,sd);if(s!==nd){if(s){const a=Ka(n);for(let l=0;l<a;l++)rd(n,$r+l.toString())}Xl(n,sd,nd),Va(n,0);return}const r=Math.floor(Date.now()/Xh)-Hw,i=a=>{const l=$r+a.toString(),c=Wa(n,l);if(typeof c=="string"){try{const u=JSON.parse(c);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>r&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&e(u,a))return!0}catch{}rd(n,l)}};let o=Ka(n);for(let a=o-1;a>=0;a--)i(a)||(a===o-1?(o--,Va(n,o)):Zh[t].add(a))}function np(){if(!Zl){Bw(!0);for(const t in Ao)tp(t,e=>{const n=e.data,s=e.provider,r=n.prefix,i=zn(s,r);if(!ql(i,n).length)return!1;const o=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,o):o,!0})}}function Ww(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const s in Ao)tp(s,r=>{const i=r.data;return r.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===e});return!0}function Vw(t,e){Zl||np();function n(s){let r;if(!Ao[s]||!(r=ep(s)))return;const i=Zh[s];let o;if(i.size)i.delete(o=Array.from(i).shift());else if(o=Ka(r),!Va(r,o+1))return;const a={cached:Math.floor(Date.now()/Xh),provider:t.provider,data:e};return Xl(r,$r+o.toString(),JSON.stringify(a))}e.lastModified&&!Ww(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function id(){}function Kw(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,xw(t)}))}function zw(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:s}=t,r=t.iconsToLoad;delete t.iconsToLoad;let i;if(!r||!(i=Ba(n)))return;i.prepare(n,s,r).forEach(a=>{jw(n,a,l=>{if(typeof l!="object")a.icons.forEach(c=>{t.missing.add(c)});else try{const c=ql(t,l);if(!c.length)return;const u=t.pendingIcons;u&&c.forEach(d=>{u.delete(d)}),Vw(t,l)}catch(c){console.error(c)}Kw(t)})})}))}const Gw=(t,e)=>{const n=Lw(t,!0,zh()),s=Nw(n);if(!s.pending.length){let l=!0;return e&&setTimeout(()=>{l&&e(s.loaded,s.missing,s.pending,id)}),()=>{l=!1}}const r=Object.create(null),i=[];let o,a;return s.pending.forEach(l=>{const{provider:c,prefix:u}=l;if(u===a&&c===o)return;o=c,a=u,i.push(zn(c,u));const d=r[c]||(r[c]=Object.create(null));d[u]||(d[u]=[])}),s.pending.forEach(l=>{const{provider:c,prefix:u,name:d}=l,f=zn(c,u),p=f.pendingIcons||(f.pendingIcons=new Set);p.has(d)||(p.add(d),r[c][u].push(d))}),i.forEach(l=>{const{provider:c,prefix:u}=l;r[c][u].length&&zw(l,r[c][u])}),e?Dw(e,s,i):id};function qw(t,e){const n={...t};for(const s in e){const r=e[s],i=typeof r;s in Gh?(r===null||r&&(i==="string"||i==="number"))&&(n[s]=r):i===typeof n[s]&&(n[s]=s==="rotate"?r%4:r)}return n}const Yw=/[\s,]+/;function Qw(t,e){e.split(Yw).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function Jw(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function s(r){for(;r<0;)r+=4;return r%4}if(n===""){const r=parseInt(t);return isNaN(r)?0:s(r)}else if(n!==t){let r=0;switch(n){case"%":r=25;break;case"deg":r=90}if(r){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/r,i%1===0?s(i):0)}}return e}function Xw(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in e)n+=" "+s+'="'+e[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function Zw(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function eE(t){return"data:image/svg+xml,"+Zw(t)}function tE(t){return'url("'+eE(t)+'")'}const od={...qh,inline:!1},nE={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},sE={display:"inline-block"},za={backgroundColor:"currentColor"},sp={backgroundColor:"transparent"},ad={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},ld={webkitMask:za,mask:za,background:sp};for(const t in ld){const e=ld[t];for(const n in ad)e[t+n]=ad[n]}const Ci={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";Ci[t+"-flip"]=e,Ci[t.slice(0,1)+"-flip"]=e,Ci[t+"Flip"]=e});function cd(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const ud=(t,e)=>{const n=qw(od,e),s={...nE},r=e.mode||"svg",i={},o=e.style,a=typeof o=="object"&&!(o instanceof Array)?o:{};for(let _ in e){const v=e[_];if(v!==void 0)switch(_){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[_]=v===!0||v==="true"||v===1;break;case"flip":typeof v=="string"&&Qw(n,v);break;case"color":i.color=v;break;case"rotate":typeof v=="string"?n[_]=Jw(v):typeof v=="number"&&(n[_]=v);break;case"ariaHidden":case"aria-hidden":v!==!0&&v!=="true"&&delete s["aria-hidden"];break;default:{const C=Ci[_];C?(v===!0||v==="true"||v===1)&&(n[C]=!0):od[_]===void 0&&(s[_]=v)}}}const l=vw(t,n),c=l.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),r==="svg"){s.style={...i,...a},Object.assign(s,c);let _=0,v=e.id;return typeof v=="string"&&(v=v.replace(/-/g,"_")),s.innerHTML=Ew(l.body,v?()=>v+"ID"+_++:"iconifyVue"),En("svg",s)}const{body:u,width:d,height:f}=t,p=r==="mask"||(r==="bg"?!1:u.indexOf("currentColor")!==-1),m=Xw(u,{...c,width:d+"",height:f+""});return s.style={...i,"--svg":tE(m),width:cd(c.width),height:cd(c.height),...sE,...p?za:sp,...a},En("span",s)};zh(!0);Iw("",Ow);if(typeof document<"u"&&typeof window<"u"){np();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(s=>{try{(typeof s!="object"||s===null||s instanceof Array||typeof s.icons!="object"||typeof s.prefix!="string"||!pw(s))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const s="IconifyProviders["+n+"] is invalid.";try{const r=e[n];if(typeof r!="object"||!r||r.resources===void 0)continue;Cw(n,r)||console.error(s)}catch{console.error(s)}}}}const rE={...ko,body:""},ec=Qt({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let n;if(typeof t!="string"||(n=Ro(t,!1,!0))===null)return this.abortLoading(),null;const s=fw(n);if(!s)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",s!==null&&(this._loadingIcon={name:t,abort:Gw([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t));const r=["iconify"];return n.prefix!==""&&r.push("iconify--"+n.prefix),n.provider!==""&&r.push("iconify--"+n.provider),{data:s,classes:r}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted?this.getIcon(t.icon,t.onLoad):null;if(!e)return ud(rE,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),ud({...ko,...e.data},n)}}),Dt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},iE={components:{Icon:ec},setup(t,e){const n=Q("Login"),s=Q("Signup Instead"),r=Q(""),i=Q(""),o=Q(!1);function a(){n.value==="Login"?(n.value="Signup",s.value="Login Instead"):(n.value="Login",s.value="Signup Instead")}function l(){e.emit("emit-user",[r.value,i.value,n.value]),r.value="",i.value=""}function c(){o.value===!1?o.value=!0:o.value===!0&&(o.value=!1)}return{buttonPrimary:n,buttonSecondary:s,switchText:a,emitUser:l,username:r,password:i,showHide:o,showHidePassword:c}}},oE={class:"relative mb-3"},aE=Z("label",{for:"email",class:"pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"},"Email address",-1),lE={class:"relative mb-3"},cE=["type"],uE={class:"py-1"},dE=Z("label",{for:"showPassword",class:"p-1 dark:text-white"},"Show Password",-1),fE=Z("label",{for:"password",class:"pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"},"Password",-1),hE={class:"p-0.5"},pE={class:"p-0.5"};function gE(t,e,n,s,r,i){const o=Ke("base-button");return Fe(),Ye("form",null,[Z("div",oE,[Ca(Z("input",{type:"text",class:"peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]",id:"email",placeholder:"name@example.com","onUpdate:modelValue":e[0]||(e[0]=a=>s.username=a)},null,512),[[Ui,s.username]]),aE]),Z("div",lE,[Ca(Z("input",{type:s.showHide?"text":"password",class:"peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] bg-",id:"password",placeholder:"Password","onUpdate:modelValue":e[1]||(e[1]=a=>s.password=a)},null,8,cE),[[wy,s.password]]),Z("div",uE,[Z("input",{type:"checkbox",id:"showPassword",onChange:e[2]||(e[2]=(...a)=>s.showHidePassword&&s.showHidePassword(...a))},null,32),dE]),fE]),Z("span",hE,[oe(o,{onClick:Du(s.emitUser,["prevent"]),class:"font-semibold"},{default:st(()=>[mn(Oi(s.buttonPrimary),1)]),_:1},8,["onClick"])]),Z("span",pE,[oe(o,{onClick:Du(s.switchText,["prevent"]),class:"font-semibold"},{default:st(()=>[mn(Oi(s.buttonSecondary),1)]),_:1},8,["onClick"])])])}const mE=Dt(iE,[["render",gE]]);const _E={},vE={class:"text-base text-red-600"};function yE(t,e){return Fe(),Ye("div",null,[oe(Kl,{name:"message"},{default:st(()=>[Z("p",vE,[bo(t.$slots,"default",{},void 0,!0)])]),_:3})])}const bE=Dt(_E,[["render",yE],["__scopeId","data-v-e583e2cf"]]);/**
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
 */const rp={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const O=function(t,e){if(!t)throw Ys(e)},Ys=function(t){return new Error("Firebase Database ("+rp.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const ip=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},wE=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},tc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),s.push(n[u],n[d],n[f],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ip(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||d==null)throw new EE;const f=i<<2|a>>4;if(s.push(f),c!==64){const p=a<<4&240|c>>2;if(s.push(p),d!==64){const m=c<<6&192|d;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class EE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const op=function(t){const e=ip(t);return tc.encodeByteArray(e,!0)},Bi=function(t){return op(t).replace(/\./g,"")},Wi=function(t){try{return tc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function IE(t){return ap(void 0,t)}function ap(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!CE(n)||(t[n]=ap(t[n],e[n]));return t}function CE(t){return t!=="__proto__"}/**
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
 */function SE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const TE=()=>SE().__FIREBASE_DEFAULTS__,RE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Wi(t[1]);return e&&JSON.parse(e)},nc=()=>{try{return TE()||RE()||kE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},lp=t=>{var e,n;return(n=(e=nc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},AE=t=>{const e=lp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},cp=()=>{var t;return(t=nc())===null||t===void 0?void 0:t.config},up=t=>{var e;return(e=nc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class sc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function PE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Bi(JSON.stringify(n)),Bi(JSON.stringify(o)),a].join(".")}/**
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
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function OE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function NE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xE(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fp(){return rp.NODE_ADMIN===!0}function ME(){try{return typeof indexedDB=="object"}catch{return!1}}function DE(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const LE="FirebaseError";class Sn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=LE,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yr.prototype.create)}}class Yr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?FE(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Sn(r,a,s)}}function FE(t,e){return t.replace(UE,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const UE=/\{\$([^}]+)}/g;/**
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
 */const hp=function(t){let e={},n={},s={},r="";try{const i=t.split(".");e=jr(Wi(i[0])||""),n=jr(Wi(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},$E=function(t){const e=hp(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},jE=function(t){const e=hp(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Xt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Us(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ga(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vi(t,e,n){const s={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=e.call(n,t[r],r,t));return s}function Ki(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(dd(i)&&dd(o)){if(!Ki(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function dd(t){return t!==null&&typeof t=="object"}/**
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
 */function Qs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function _r(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function vr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class HE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(f<<1|f>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):d<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const f=(r<<5|r>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=f}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<n;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function BE(t,e){const n=new WE(t,e);return n.subscribe.bind(n)}class WE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");VE(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=sa),r.error===void 0&&(r.error=sa),r.complete===void 0&&(r.complete=sa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sa(){}function KE(t,e){return`${t} failed: ${e} argument `}/**
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
 */const zE=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,O(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Po=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Zt(t){return t&&t._delegate?t._delegate:t}class Gn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class GE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new sc;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YE(e))try{this.getOrInitializeService({instanceIdentifier:xn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xn){return this.instances.has(e)}getOptions(e=xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:qE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=xn){return this.component?this.component.multipleInstances?e:xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qE(t){return t===xn?void 0:t}function YE(t){return t.instantiationMode==="EAGER"}/**
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
 */class QE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new GE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const JE={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},XE=de.INFO,ZE={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},eI=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=ZE[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ic{constructor(e){this.name=e,this._logLevel=XE,this._logHandler=eI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?JE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const tI=(t,e)=>e.some(n=>t instanceof n);let fd,hd;function nI(){return fd||(fd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sI(){return hd||(hd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pp=new WeakMap,qa=new WeakMap,gp=new WeakMap,ra=new WeakMap,oc=new WeakMap;function rI(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(_n(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pp.set(n,t)}).catch(()=>{}),oc.set(e,t),e}function iI(t){if(qa.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});qa.set(t,e)}let Ya={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function oI(t){Ya=t(Ya)}function aI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ia(this),e,...n);return gp.set(s,e.sort?e.sort():[e]),_n(s)}:sI().includes(t)?function(...e){return t.apply(ia(this),e),_n(pp.get(this))}:function(...e){return _n(t.apply(ia(this),e))}}function lI(t){return typeof t=="function"?aI(t):(t instanceof IDBTransaction&&iI(t),tI(t,nI())?new Proxy(t,Ya):t)}function _n(t){if(t instanceof IDBRequest)return rI(t);if(ra.has(t))return ra.get(t);const e=lI(t);return e!==t&&(ra.set(t,e),oc.set(e,t)),e}const ia=t=>oc.get(t);function cI(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=_n(o);return s&&o.addEventListener("upgradeneeded",l=>{s(_n(o.result),l.oldVersion,l.newVersion,_n(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const uI=["get","getKey","getAll","getAllKeys","count"],dI=["put","add","delete","clear"],oa=new Map;function pd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(oa.get(e))return oa.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=dI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||uI.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return oa.set(e,i),i}oI(t=>({...t,get:(e,n,s)=>pd(e,n)||t.get(e,n,s),has:(e,n)=>!!pd(e,n)||t.has(e,n)}));/**
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
 */class fI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function hI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qa="@firebase/app",gd="0.11.1";/**
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
 */const Gt=new ic("@firebase/app"),pI="@firebase/app-compat",gI="@firebase/analytics-compat",mI="@firebase/analytics",_I="@firebase/app-check-compat",vI="@firebase/app-check",yI="@firebase/auth",bI="@firebase/auth-compat",wI="@firebase/database",EI="@firebase/data-connect",II="@firebase/database-compat",CI="@firebase/functions",SI="@firebase/functions-compat",TI="@firebase/installations",RI="@firebase/installations-compat",kI="@firebase/messaging",AI="@firebase/messaging-compat",PI="@firebase/performance",OI="@firebase/performance-compat",NI="@firebase/remote-config",xI="@firebase/remote-config-compat",MI="@firebase/storage",DI="@firebase/storage-compat",LI="@firebase/firestore",FI="@firebase/vertexai",UI="@firebase/firestore-compat",$I="firebase",jI="11.3.1";/**
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
 */const Ja="[DEFAULT]",HI={[Qa]:"fire-core",[pI]:"fire-core-compat",[mI]:"fire-analytics",[gI]:"fire-analytics-compat",[vI]:"fire-app-check",[_I]:"fire-app-check-compat",[yI]:"fire-auth",[bI]:"fire-auth-compat",[wI]:"fire-rtdb",[EI]:"fire-data-connect",[II]:"fire-rtdb-compat",[CI]:"fire-fn",[SI]:"fire-fn-compat",[TI]:"fire-iid",[RI]:"fire-iid-compat",[kI]:"fire-fcm",[AI]:"fire-fcm-compat",[PI]:"fire-perf",[OI]:"fire-perf-compat",[NI]:"fire-rc",[xI]:"fire-rc-compat",[MI]:"fire-gcs",[DI]:"fire-gcs-compat",[LI]:"fire-fst",[UI]:"fire-fst-compat",[FI]:"fire-vertex","fire-js":"fire-js",[$I]:"fire-js-all"};/**
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
 */const zi=new Map,BI=new Map,Xa=new Map;function md(t,e){try{t.container.addComponent(e)}catch(n){Gt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $s(t){const e=t.name;if(Xa.has(e))return Gt.debug(`There were multiple attempts to register component ${e}.`),!1;Xa.set(e,t);for(const n of zi.values())md(n,t);for(const n of BI.values())md(n,t);return!0}function ac(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function at(t){return t==null?!1:t.settings!==void 0}/**
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
 */const WI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vn=new Yr("app","Firebase",WI);/**
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
 */class VI{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vn.create("app-deleted",{appName:this._name})}}/**
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
 */const Js=jI;function mp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ja,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw vn.create("bad-app-name",{appName:String(r)});if(n||(n=cp()),!n)throw vn.create("no-options");const i=zi.get(r);if(i){if(Ki(n,i.options)&&Ki(s,i.config))return i;throw vn.create("duplicate-app",{appName:r})}const o=new QE(r);for(const l of Xa.values())o.addComponent(l);const a=new VI(n,s,o);return zi.set(r,a),a}function _p(t=Ja){const e=zi.get(t);if(!e&&t===Ja&&cp())return mp();if(!e)throw vn.create("no-app",{appName:t});return e}function yn(t,e,n){var s;let r=(s=HI[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gt.warn(a.join(" "));return}$s(new Gn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const KI="firebase-heartbeat-database",zI=1,Hr="firebase-heartbeat-store";let aa=null;function vp(){return aa||(aa=cI(KI,zI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Hr)}catch(n){console.warn(n)}}}}).catch(t=>{throw vn.create("idb-open",{originalErrorMessage:t.message})})),aa}async function GI(t){try{const n=(await vp()).transaction(Hr),s=await n.objectStore(Hr).get(yp(t));return await n.done,s}catch(e){if(e instanceof Sn)Gt.warn(e.message);else{const n=vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gt.warn(n.message)}}}async function _d(t,e){try{const s=(await vp()).transaction(Hr,"readwrite");await s.objectStore(Hr).put(e,yp(t)),await s.done}catch(n){if(n instanceof Sn)Gt.warn(n.message);else{const s=vn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gt.warn(s.message)}}}function yp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const qI=1024,YI=30;class QI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new XI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=vd();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>YI){const o=ZI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Gt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vd(),{heartbeatsToSend:s,unsentEntries:r}=JI(this._heartbeatsCache.heartbeats),i=Bi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Gt.warn(n),""}}}function vd(){return new Date().toISOString().substring(0,10)}function JI(t,e=qI){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),yd(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),yd(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class XI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ME()?DE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await GI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return _d(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return _d(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function yd(t){return Bi(JSON.stringify({version:2,heartbeats:t})).length}function ZI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function e0(t){$s(new Gn("platform-logger",e=>new fI(e),"PRIVATE")),$s(new Gn("heartbeat",e=>new QI(e),"PRIVATE")),yn(Qa,gd,t),yn(Qa,gd,"esm2017"),yn("fire-js","")}e0("");function lc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function bp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const t0=bp,wp=new Yr("auth","Firebase",bp());/**
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
 */const Gi=new ic("@firebase/auth");function n0(t,...e){Gi.logLevel<=de.WARN&&Gi.warn(`Auth (${Js}): ${t}`,...e)}function Si(t,...e){Gi.logLevel<=de.ERROR&&Gi.error(`Auth (${Js}): ${t}`,...e)}/**
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
 */function Et(t,...e){throw cc(t,...e)}function Nt(t,...e){return cc(t,...e)}function Ep(t,e,n){const s=Object.assign(Object.assign({},t0()),{[e]:n});return new Yr("auth","Firebase",s).create(e,{appName:t.name})}function Wt(t){return Ep(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return wp.create(t,...e)}function K(t,e,...n){if(!t)throw cc(e,...n)}function $t(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Si(e),new Error(e)}function qt(t,e){t||$t(e)}/**
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
 */function Za(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function s0(){return bd()==="http:"||bd()==="https:"}function bd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function r0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(s0()||NE()||"connection"in navigator)?navigator.onLine:!0}function i0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Qr{constructor(e,n){this.shortDelay=e,this.longDelay=n,qt(n>e,"Short delay should be less than long delay!"),this.isMobile=rc()||dp()}get(){return r0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function uc(t,e){qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ip{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const o0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const a0=new Qr(3e4,6e4);function Tn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Rn(t,e,n,s,r={}){return Cp(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Qs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},i);return OE()||(c.referrerPolicy="no-referrer"),Ip.fetch()(Sp(t,t.config.apiHost,n,a),c)})}async function Cp(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},o0),e);try{const r=new c0(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw hi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw hi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw hi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw hi(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ep(t,u,c);Et(t,u)}}catch(r){if(r instanceof Sn)throw r;Et(t,"network-request-failed",{message:String(r)})}}async function Jr(t,e,n,s,r={}){const i=await Rn(t,e,n,s,r);return"mfaPendingCredential"in i&&Et(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Sp(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?uc(t.config,r):`${t.config.apiScheme}://${r}`}function l0(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class c0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Nt(this.auth,"network-request-failed")),a0.get())})}}function hi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Nt(t,e,s);return r.customData._tokenResponse=n,r}function wd(t){return t!==void 0&&t.enterprise!==void 0}class u0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return l0(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function d0(t,e){return Rn(t,"GET","/v2/recaptchaConfig",Tn(t,e))}/**
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
 */async function f0(t,e){return Rn(t,"POST","/v1/accounts:delete",e)}async function Tp(t,e){return Rn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Sr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function h0(t,e=!1){const n=Zt(t),s=await n.getIdToken(e),r=dc(s);K(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Sr(la(r.auth_time)),issuedAtTime:Sr(la(r.iat)),expirationTime:Sr(la(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function la(t){return Number(t)*1e3}function dc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Si("JWT malformed, contained fewer than 3 sections"),null;try{const r=Wi(n);return r?JSON.parse(r):(Si("Failed to decode base64 JWT payload"),null)}catch(r){return Si("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Ed(t){const e=dc(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Br(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Sn&&p0(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function p0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class g0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class el{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sr(this.lastLoginAt),this.creationTime=Sr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function qi(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Br(t,Tp(n,{idToken:s}));K(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Rp(i.providerUserInfo):[],a=_0(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new el(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function m0(t){const e=Zt(t);await qi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _0(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Rp(t){return t.map(e=>{var{providerId:n}=e,s=lc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function v0(t,e){const n=await Cp(t,{},async()=>{const s=Qs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Sp(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ip.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function y0(t,e){return Rn(t,"POST","/v2/accounts:revokeToken",Tn(t,e))}/**
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
 */class Ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ed(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=Ed(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await v0(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Ss;return s&&(K(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(K(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ss,this.toJSON())}_performRefresh(){return $t("not implemented")}}/**
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
 */function an(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=lc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new g0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new el(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Br(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return h0(this,e)}reload(){return m0(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await qi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(at(this.auth.app))return Promise.reject(Wt(this.auth));const e=await this.getIdToken();return await Br(this,f0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,C=(c=n.createdAt)!==null&&c!==void 0?c:void 0,S=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:M,emailVerified:k,isAnonymous:G,providerData:U,stsTokenManager:Y}=n;K(M&&Y,e,"internal-error");const A=Ss.fromJSON(this.name,Y);K(typeof M=="string",e,"internal-error"),an(d,e.name),an(f,e.name),K(typeof k=="boolean",e,"internal-error"),K(typeof G=="boolean",e,"internal-error"),an(p,e.name),an(m,e.name),an(_,e.name),an(v,e.name),an(C,e.name),an(S,e.name);const W=new jt({uid:M,auth:e,email:f,emailVerified:k,displayName:d,isAnonymous:G,photoURL:m,phoneNumber:p,tenantId:_,stsTokenManager:A,createdAt:C,lastLoginAt:S});return U&&Array.isArray(U)&&(W.providerData=U.map(V=>Object.assign({},V))),v&&(W._redirectEventId=v),W}static async _fromIdTokenResponse(e,n,s=!1){const r=new Ss;r.updateFromServerResponse(n);const i=new jt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await qi(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];K(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Rp(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new Ss;a.updateFromIdToken(s);const l=new jt({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new el(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
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
 */const Id=new Map;function Ht(t){qt(t instanceof Function,"Expected a class definition");let e=Id.get(t);return e?(qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Id.set(t,e),e)}/**
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
 */class kp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}kp.type="NONE";const Cd=kp;/**
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
 */function Ti(t,e,n){return`firebase:${t}:${e}:${n}`}class Ts{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Ti(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ti("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ts(Ht(Cd),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=r[0]||Ht(Cd);const o=Ti(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=jt._fromJSON(e,u);c!==i&&(a=d),i=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ts(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Ts(i,e,s))}}/**
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
 */function Sd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Np(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ap(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Mp(e))return"Blackberry";if(Dp(e))return"Webos";if(Pp(e))return"Safari";if((e.includes("chrome/")||Op(e))&&!e.includes("edge/"))return"Chrome";if(xp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ap(t=ze()){return/firefox\//i.test(t)}function Pp(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Op(t=ze()){return/crios\//i.test(t)}function Np(t=ze()){return/iemobile/i.test(t)}function xp(t=ze()){return/android/i.test(t)}function Mp(t=ze()){return/blackberry/i.test(t)}function Dp(t=ze()){return/webos/i.test(t)}function fc(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function b0(t=ze()){var e;return fc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function w0(){return xE()&&document.documentMode===10}function Lp(t=ze()){return fc(t)||xp(t)||Dp(t)||Mp(t)||/windows phone/i.test(t)||Np(t)}/**
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
 */function Fp(t,e=[]){let n;switch(t){case"Browser":n=Sd(ze());break;case"Worker":n=`${Sd(ze())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Js}/${s}`}/**
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
 */class E0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function I0(t,e={}){return Rn(t,"GET","/v2/passwordPolicy",Tn(t,e))}/**
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
 */const C0=6;class S0{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:C0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class T0{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Td(this),this.idTokenSubscription=new Td(this),this.beforeStateQueue=new E0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ht(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Ts.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Tp(this,{idToken:e}),s=await jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(at(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=i0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(at(this.app))return Promise.reject(Wt(this));const n=e?Zt(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return at(this.app)?Promise.reject(Wt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return at(this.app)?Promise.reject(Wt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ht(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await I0(this),n=new S0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await y0(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ht(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Ts.create(this,[Ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;if(at(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&n0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ns(t){return Zt(t)}class Td{constructor(e){this.auth=e,this.observer=null,this.addObserver=BE(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Oo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function R0(t){Oo=t}function Up(t){return Oo.loadJS(t)}function k0(){return Oo.recaptchaEnterpriseScript}function A0(){return Oo.gapiScript}function P0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class O0{constructor(){this.enterprise=new N0}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class N0{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const x0="recaptcha-enterprise",$p="NO_RECAPTCHA";class M0{constructor(e){this.type=x0,this.auth=ns(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{d0(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new u0(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(i,o,a){const l=window.grecaptcha;wd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o($p)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new O0().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&wd(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=k0();l.length!==0&&(l+=a),Up(l).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function cr(t,e,n,s=!1,r=!1){const i=new M0(t);let o;if(r)o=$p;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function tl(t,e,n,s,r){var i,o;if(r==="EMAIL_PASSWORD_PROVIDER")if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await cr(t,e,n,n==="getOobCode");return s(t,a)}else return s(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await cr(t,e,n,n==="getOobCode");return s(t,l)}else return Promise.reject(a)});else if(r==="PHONE_PROVIDER")if(!((o=t._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await cr(t,e,n);return s(t,a).catch(async l=>{var c;if(((c=t._getRecaptchaConfig())===null||c===void 0?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const u=await cr(t,e,n,!1,!0);return s(t,u)}return Promise.reject(l)})}else{const a=await cr(t,e,n,!1,!0);return s(t,a)}else return Promise.reject(r+" provider is not supported.")}/**
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
 */function D0(t,e){const n=ac(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ki(i,e??{}))return r;Et(r,"already-initialized")}return n.initialize({options:e})}function L0(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ht);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function F0(t,e,n){const s=ns(t);K(s._canInitEmulator,s,"emulator-config-failed"),K(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=jp(e),{host:o,port:a}=U0(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||$0()}function jp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function U0(t){const e=jp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Rd(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Rd(o)}}}function Rd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class hc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $t("not implemented")}_getIdTokenResponse(e){return $t("not implemented")}_linkToIdToken(e,n){return $t("not implemented")}_getReauthenticationResolver(e){return $t("not implemented")}}async function j0(t,e){return Rn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function H0(t,e){return Jr(t,"POST","/v1/accounts:signInWithPassword",Tn(t,e))}/**
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
 */async function B0(t,e){return Jr(t,"POST","/v1/accounts:signInWithEmailLink",Tn(t,e))}async function W0(t,e){return Jr(t,"POST","/v1/accounts:signInWithEmailLink",Tn(t,e))}/**
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
 */class Wr extends hc{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Wr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Wr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return tl(e,n,"signInWithPassword",H0,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return B0(e,{email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return tl(e,s,"signUpPassword",j0,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return W0(e,{idToken:n,email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Rs(t,e){return Jr(t,"POST","/v1/accounts:signInWithIdp",Tn(t,e))}/**
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
 */const V0="http://localhost";class qn extends hc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=lc(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new qn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Rs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Rs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Rs(e,n)}buildRequest(){const e={requestUri:V0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qs(n)}return e}}/**
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
 */function K0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function z0(t){const e=_r(vr(t)).link,n=e?_r(vr(e)).deep_link_id:null,s=_r(vr(t)).deep_link_id;return(s?_r(vr(s)).link:null)||s||n||e||t}class pc{constructor(e){var n,s,r,i,o,a;const l=_r(vr(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,d=K0((r=l.mode)!==null&&r!==void 0?r:null);K(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=z0(e);try{return new pc(n)}catch{return null}}}/**
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
 */class Xs{constructor(){this.providerId=Xs.PROVIDER_ID}static credential(e,n){return Wr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=pc.parseLink(n);return K(s,"argument-error"),Wr._fromEmailAndCode(e,s.code,s.tenantId)}}Xs.PROVIDER_ID="password";Xs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Hp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xr extends Hp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class un extends Xr{constructor(){super("facebook.com")}static credential(e){return qn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.FACEBOOK_SIGN_IN_METHOD="facebook.com";un.PROVIDER_ID="facebook.com";/**
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
 */class dn extends Xr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return dn.credential(n,s)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
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
 */class fn extends Xr{constructor(){super("github.com")}static credential(e){return qn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.GITHUB_SIGN_IN_METHOD="github.com";fn.PROVIDER_ID="github.com";/**
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
 */class hn extends Xr{constructor(){super("twitter.com")}static credential(e,n){return qn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return hn.credential(n,s)}catch{return null}}}hn.TWITTER_SIGN_IN_METHOD="twitter.com";hn.PROVIDER_ID="twitter.com";/**
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
 */async function G0(t,e){return Jr(t,"POST","/v1/accounts:signUp",Tn(t,e))}/**
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
 */class Yn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await jt._fromIdTokenResponse(e,s,r),o=kd(s);return new Yn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=kd(s);return new Yn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function kd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Yi extends Sn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Yi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Yi(e,n,s,r)}}function Bp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Yi._fromErrorAndOperation(t,i,e,s):i})}async function q0(t,e,n=!1){const s=await Br(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yn._forOperation(t,"link",s)}/**
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
 */async function Y0(t,e,n=!1){const{auth:s}=t;if(at(s.app))return Promise.reject(Wt(s));const r="reauthenticate";try{const i=await Br(t,Bp(s,r,e,t),n);K(i.idToken,s,"internal-error");const o=dc(i.idToken);K(o,s,"internal-error");const{sub:a}=o;return K(t.uid===a,s,"user-mismatch"),Yn._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Et(s,"user-mismatch"),i}}/**
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
 */async function Wp(t,e,n=!1){if(at(t.app))return Promise.reject(Wt(t));const s="signIn",r=await Bp(t,s,e),i=await Yn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function Q0(t,e){return Wp(ns(t),e)}/**
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
 */async function Vp(t){const e=ns(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function J0(t,e,n){if(at(t.app))return Promise.reject(Wt(t));const s=ns(t),o=await tl(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",G0,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Vp(t),l}),a=await Yn._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function X0(t,e,n){return at(t.app)?Promise.reject(Wt(t)):Q0(Zt(t),Xs.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Vp(t),s})}function Z0(t,e,n,s){return Zt(t).onIdTokenChanged(e,n,s)}function eC(t,e,n){return Zt(t).beforeAuthStateChanged(e,n)}const Qi="__sak";/**
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
 */class Kp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Qi,"1"),this.storage.removeItem(Qi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const tC=1e3,nC=10;class zp extends Kp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Lp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);w0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,nC):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},tC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zp.type="LOCAL";const sC=zp;/**
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
 */class Gp extends Kp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Gp.type="SESSION";const qp=Gp;/**
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
 */function rC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class No{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new No(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await rC(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}No.receivers=[];/**
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
 */function gc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class iC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=gc("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function xt(){return window}function oC(t){xt().location.href=t}/**
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
 */function Yp(){return typeof xt().WorkerGlobalScope<"u"&&typeof xt().importScripts=="function"}async function aC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function cC(){return Yp()?self:null}/**
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
 */const Qp="firebaseLocalStorageDb",uC=1,Ji="firebaseLocalStorage",Jp="fbase_key";class Zr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xo(t,e){return t.transaction([Ji],e?"readwrite":"readonly").objectStore(Ji)}function dC(){const t=indexedDB.deleteDatabase(Qp);return new Zr(t).toPromise()}function nl(){const t=indexedDB.open(Qp,uC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ji,{keyPath:Jp})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ji)?e(s):(s.close(),await dC(),e(await nl()))})})}async function Ad(t,e,n){const s=xo(t,!0).put({[Jp]:e,value:n});return new Zr(s).toPromise()}async function fC(t,e){const n=xo(t,!1).get(e),s=await new Zr(n).toPromise();return s===void 0?null:s.value}function Pd(t,e){const n=xo(t,!0).delete(e);return new Zr(n).toPromise()}const hC=800,pC=3;class Xp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>pC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=No._getInstance(cC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await aC(),!this.activeServiceWorker)return;this.sender=new iC(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nl();return await Ad(e,Qi,"1"),await Pd(e,Qi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ad(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>fC(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=xo(r,!1).getAll();return new Zr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xp.type="LOCAL";const gC=Xp;new Qr(3e4,6e4);/**
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
 */function mC(t,e){return e?Ht(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class mc extends hc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Rs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Rs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _C(t){return Wp(t.auth,new mc(t),t.bypassAuthState)}function vC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),Y0(n,new mc(t),t.bypassAuthState)}async function yC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),q0(n,new mc(t),t.bypassAuthState)}/**
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
 */class Zp{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _C;case"linkViaPopup":case"linkViaRedirect":return yC;case"reauthViaPopup":case"reauthViaRedirect":return vC;default:Et(this.auth,"internal-error")}}resolve(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const bC=new Qr(2e3,1e4);class gs extends Zp{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,gs.currentPopupAction&&gs.currentPopupAction.cancel(),gs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){qt(this.filter.length===1,"Popup operations only handle one event");const e=gc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bC.get())};e()}}gs.currentPopupAction=null;/**
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
 */const wC="pendingRedirect",Ri=new Map;class EC extends Zp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ri.get(this.auth._key());if(!e){try{const s=await IC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ri.set(this.auth._key(),e)}return this.bypassAuthState||Ri.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function IC(t,e){const n=TC(e),s=SC(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function CC(t,e){Ri.set(t._key(),e)}function SC(t){return Ht(t._redirectPersistence)}function TC(t){return Ti(wC,t.config.apiKey,t.name)}async function RC(t,e,n=!1){if(at(t.app))return Promise.reject(Wt(t));const s=ns(t),r=mC(s,e),o=await new EC(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const kC=10*60*1e3;class AC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!PC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!eg(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Nt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Od(e))}saveEventToCache(e){this.cachedEventUids.add(Od(e)),this.lastProcessedEventTime=Date.now()}}function Od(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function eg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function PC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eg(t);default:return!1}}/**
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
 */async function OC(t,e={}){return Rn(t,"GET","/v1/projects",e)}/**
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
 */const NC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xC=/^https?/;async function MC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await OC(t);for(const n of e)try{if(DC(n))return}catch{}Et(t,"unauthorized-domain")}function DC(t){const e=Za(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!xC.test(n))return!1;if(NC.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const LC=new Qr(3e4,6e4);function Nd(){const t=xt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function FC(t){return new Promise((e,n)=>{var s,r,i;function o(){Nd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nd(),n(Nt(t,"network-request-failed"))},timeout:LC.get()})}if(!((r=(s=xt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=xt().gapi)===null||i===void 0)&&i.load)o();else{const a=P0("iframefcb");return xt()[a]=()=>{gapi.load?o():n(Nt(t,"network-request-failed"))},Up(`${A0()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ki=null,e})}let ki=null;function UC(t){return ki=ki||FC(t),ki}/**
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
 */const $C=new Qr(5e3,15e3),jC="__/auth/iframe",HC="emulator/auth/iframe",BC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VC(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?uc(e,HC):`https://${t.config.authDomain}/${jC}`,s={apiKey:e.apiKey,appName:t.name,v:Js},r=WC.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Qs(s).slice(1)}`}async function KC(t){const e=await UC(t),n=xt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:VC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BC,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Nt(t,"network-request-failed"),a=xt().setTimeout(()=>{i(o)},$C.get());function l(){xt().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const zC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GC=500,qC=600,YC="_blank",QC="http://localhost";class xd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JC(t,e,n,s=GC,r=qC){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},zC),{width:s.toString(),height:r.toString(),top:i,left:o}),c=ze().toLowerCase();n&&(a=Op(c)?YC:n),Ap(c)&&(e=e||QC,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[p,m])=>`${f}${p}=${m},`,"");if(b0(c)&&a!=="_self")return XC(e||"",a),new xd(null);const d=window.open(e||"",a,u);K(d,t,"popup-blocked");try{d.focus()}catch{}return new xd(d)}function XC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const ZC="__/auth/handler",eS="emulator/auth/handler",tS=encodeURIComponent("fac");async function Md(t,e,n,s,r,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Js,eventId:r};if(e instanceof Hp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ga(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(i||{}))o[u]=d}if(e instanceof Xr){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${tS}=${encodeURIComponent(l)}`:"";return`${nS(t)}?${Qs(a).slice(1)}${c}`}function nS({config:t}){return t.emulator?uc(t,eS):`https://${t.authDomain}/${ZC}`}/**
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
 */const ca="webStorageSupport";class sS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qp,this._completeRedirectFn=RC,this._overrideRedirectResult=CC}async _openPopup(e,n,s,r){var i;qt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Md(e,n,s,Za(),r);return JC(e,o,gc())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Md(e,n,s,Za(),r);return oC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(qt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await KC(e),s=new AC(e);return n.register("authEvent",r=>(K(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ca,{type:ca},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[ca];o!==void 0&&n(!!o),Et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=MC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Lp()||Pp()||fc()}}const rS=sS;var Dd="@firebase/auth",Ld="1.9.0";/**
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
 */class iS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function oS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function aS(t){$s(new Gn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fp(t)},c=new T0(s,r,i,l);return L0(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),$s(new Gn("auth-internal",e=>{const n=ns(e.getProvider("auth").getImmediate());return(s=>new iS(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yn(Dd,Ld,oS(t)),yn(Dd,Ld,"esm2017")}/**
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
 */const lS=5*60,cS=up("authIdTokenMaxAge")||lS;let Fd=null;const uS=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>cS)return;const r=n==null?void 0:n.token;Fd!==r&&(Fd=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Xi(t=_p()){const e=ac(t,"auth");if(e.isInitialized())return e.getImmediate();const n=D0(t,{popupRedirectResolver:rS,persistence:[gC,sC,qp]}),s=up("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=uS(i.toString());eC(n,o,()=>o(n.currentUser)),Z0(n,a=>o(a))}}const r=lp("auth");return r&&F0(n,`http://${r}`),n}function dS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}R0({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Nt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",dS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});aS("Browser");const fS={},hS={class:"relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 shadow-lg lg:py-4 dark:bg-sky-950","data-te-navbar-ref":""};function pS(t,e){return Fe(),Ye("nav",hS,[bo(t.$slots,"default")])}const _c=Dt(fS,[["render",pS]]);function Mo(t,e,...n){if(t in e){let r=e[t];return typeof r=="function"?r(...n):r}let s=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(r=>`"${r}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,Mo),s}var sl=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(sl||{}),gS=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(gS||{});function Zs({visible:t=!0,features:e=0,ourProps:n,theirProps:s,...r}){var i;let o=ng(s,n),a=Object.assign(r,{props:o});if(t||e&2&&o.static)return ua(a);if(e&1){let l=(i=o.unmount)==null||i?0:1;return Mo(l,{0(){return null},1(){return ua({...r,props:{...o,hidden:!0,style:{display:"none"}}})}})}return ua(a)}function ua({props:t,attrs:e,slots:n,slot:s,name:r}){var i,o;let{as:a,...l}=sg(t,["unmount","static"]),c=(i=n.default)==null?void 0:i.call(n,s),u={};if(s){let d=!1,f=[];for(let[p,m]of Object.entries(s))typeof m=="boolean"&&(d=!0),m===!0&&f.push(p);d&&(u["data-headlessui-state"]=f.join(" "))}if(a==="template"){if(c=tg(c??[]),Object.keys(l).length>0||Object.keys(e).length>0){let[d,...f]=c??[];if(!_S(d)||f.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${r} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(e)).map(_=>_.trim()).filter((_,v,C)=>C.indexOf(_)===v).sort((_,v)=>_.localeCompare(v)).map(_=>`  - ${_}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(_=>`  - ${_}`).join(`
`)].join(`
`));let p=ng((o=d.props)!=null?o:{},l),m=zt(d,p);for(let _ in p)_.startsWith("on")&&(m.props||(m.props={}),m.props[_]=p[_]);return m}return Array.isArray(c)&&c.length===1?c[0]:c}return En(a,Object.assign({},l,u),{default:()=>c})}function tg(t){return t.flatMap(e=>e.type===xe?tg(e.children):[e])}function ng(...t){if(t.length===0)return{};if(t.length===1)return t[0];let e={},n={};for(let s of t)for(let r in s)r.startsWith("on")&&typeof s[r]=="function"?(n[r]!=null||(n[r]=[]),n[r].push(s[r])):e[r]=s[r];if(e.disabled||e["aria-disabled"])return Object.assign(e,Object.fromEntries(Object.keys(n).map(s=>[s,void 0])));for(let s in n)Object.assign(e,{[s](r,...i){let o=n[s];for(let a of o){if(r instanceof Event&&r.defaultPrevented)return;a(r,...i)}}});return e}function mS(t){let e=Object.assign({},t);for(let n in e)e[n]===void 0&&delete e[n];return e}function sg(t,e=[]){let n=Object.assign({},t);for(let s of e)s in n&&delete n[s];return n}function _S(t){return t==null?!1:typeof t.type=="string"||typeof t.type=="object"||typeof t.type=="function"}let vS=0;function yS(){return++vS}function Do(){return yS()}var Ae=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(Ae||{});function bS(t){throw new Error("Unexpected object: "+t)}var rt=(t=>(t[t.First=0]="First",t[t.Previous=1]="Previous",t[t.Next=2]="Next",t[t.Last=3]="Last",t[t.Specific=4]="Specific",t[t.Nothing=5]="Nothing",t))(rt||{});function wS(t,e){let n=e.resolveItems();if(n.length<=0)return null;let s=e.resolveActiveIndex(),r=s??-1,i=(()=>{switch(t.focus){case 0:return n.findIndex(o=>!e.resolveDisabled(o));case 1:{let o=n.slice().reverse().findIndex((a,l,c)=>r!==-1&&c.length-l-1>=r?!1:!e.resolveDisabled(a));return o===-1?o:n.length-1-o}case 2:return n.findIndex((o,a)=>a<=r?!1:!e.resolveDisabled(o));case 3:{let o=n.slice().reverse().findIndex(a=>!e.resolveDisabled(a));return o===-1?o:n.length-1-o}case 4:return n.findIndex(o=>e.resolveId(o)===t.id);case 5:return null;default:bS(t)}})();return i===-1?s:i}function Ce(t){var e;return t==null||t.value==null?null:(e=t.value.$el)!=null?e:t.value}let rg=Symbol("Context");var Vr=(t=>(t[t.Open=1]="Open",t[t.Closed=2]="Closed",t[t.Closing=4]="Closing",t[t.Opening=8]="Opening",t))(Vr||{});function ES(){return Je(rg,null)}function IS(t){Is(rg,t)}function Ud(t,e){if(t)return t;let n=e??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function ig(t,e){let n=Q(Ud(t.value.type,t.value.as));return es(()=>{n.value=Ud(t.value.type,t.value.as)}),Gs(()=>{var s;n.value||Ce(e)&&Ce(e)instanceof HTMLButtonElement&&!((s=Ce(e))!=null&&s.hasAttribute("type"))&&(n.value="button")}),n}var CS=Object.defineProperty,SS=(t,e,n)=>e in t?CS(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,$d=(t,e,n)=>(SS(t,typeof e!="symbol"?e+"":e,n),n);class TS{constructor(){$d(this,"current",this.detect()),$d(this,"currentId",0)}set(e){this.current!==e&&(this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let vc=new TS;function yc(t){if(vc.isServer)return null;if(t instanceof Node)return t.ownerDocument;if(t!=null&&t.hasOwnProperty("value")){let e=Ce(t);if(e)return e.ownerDocument}return document}function RS({container:t,accept:e,walk:n,enabled:s}){Gs(()=>{let r=t.value;if(!r||s!==void 0&&!s.value)return;let i=yc(t);if(!i)return;let o=Object.assign(l=>e(l),{acceptNode:e}),a=i.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,o,!1);for(;a.nextNode();)n(a.currentNode)})}let rl=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var il=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t))(il||{}),kS=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(kS||{}),AS=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(AS||{});function og(t=document.body){return t==null?[]:Array.from(t.querySelectorAll(rl)).sort((e,n)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var bc=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(bc||{});function wc(t,e=0){var n;return t===((n=yc(t))==null?void 0:n.body)?!1:Mo(e,{0(){return t.matches(rl)},1(){let s=t;for(;s!==null;){if(s.matches(rl))return!0;s=s.parentElement}return!1}})}function ag(t){let e=yc(t);bt(()=>{e&&!wc(e.activeElement,0)&&OS(t)})}var PS=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(PS||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",t=>{t.metaKey||t.altKey||t.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",t=>{t.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:t.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function OS(t){t==null||t.focus({preventScroll:!0})}let NS=["textarea","input"].join(",");function xS(t){var e,n;return(n=(e=t==null?void 0:t.matches)==null?void 0:e.call(t,NS))!=null?n:!1}function lg(t,e=n=>n){return t.slice().sort((n,s)=>{let r=e(n),i=e(s);if(r===null||i===null)return 0;let o=r.compareDocumentPosition(i);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function MS(t,e){return DS(og(),e,{relativeTo:t})}function DS(t,e,{sorted:n=!0,relativeTo:s=null,skipElements:r=[]}={}){var i;let o=(i=Array.isArray(t)?t.length>0?t[0].ownerDocument:document:t==null?void 0:t.ownerDocument)!=null?i:document,a=Array.isArray(t)?n?lg(t):t:og(t);r.length>0&&a.length>1&&(a=a.filter(m=>!r.includes(m))),s=s??o.activeElement;let l=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,a.indexOf(s))-1;if(e&4)return Math.max(0,a.indexOf(s))+1;if(e&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=e&32?{preventScroll:!0}:{},d=0,f=a.length,p;do{if(d>=f||d+f<=0)return 0;let m=c+d;if(e&16)m=(m+f)%f;else{if(m<0)return 3;if(m>=f)return 1}p=a[m],p==null||p.focus(u),d+=l}while(p!==o.activeElement);return e&6&&xS(p)&&p.select(),2}function pi(t,e,n){vc.isServer||Gs(s=>{document.addEventListener(t,e,n),s(()=>document.removeEventListener(t,e,n))})}function LS(t,e,n){vc.isServer||Gs(s=>{window.addEventListener(t,e,n),s(()=>window.removeEventListener(t,e,n))})}function FS(t,e,n=ae(()=>!0)){function s(i,o){if(!n.value||i.defaultPrevented)return;let a=o(i);if(a===null||!a.getRootNode().contains(a))return;let l=function c(u){return typeof u=="function"?c(u()):Array.isArray(u)||u instanceof Set?u:[u]}(t);for(let c of l){if(c===null)continue;let u=c instanceof HTMLElement?c:Ce(c);if(u!=null&&u.contains(a)||i.composed&&i.composedPath().includes(u))return}return!wc(a,bc.Loose)&&a.tabIndex!==-1&&i.preventDefault(),e(i,a)}let r=Q(null);pi("pointerdown",i=>{var o,a;n.value&&(r.value=((a=(o=i.composedPath)==null?void 0:o.call(i))==null?void 0:a[0])||i.target)},!0),pi("mousedown",i=>{var o,a;n.value&&(r.value=((a=(o=i.composedPath)==null?void 0:o.call(i))==null?void 0:a[0])||i.target)},!0),pi("click",i=>{r.value&&(s(i,()=>r.value),r.value=null)},!0),pi("touchend",i=>s(i,()=>i.target instanceof HTMLElement?i.target:null),!0),LS("blur",i=>s(i,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var cg=(t=>(t[t.None=1]="None",t[t.Focusable=2]="Focusable",t[t.Hidden=4]="Hidden",t))(cg||{});let US=Qt({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(t,{slots:e,attrs:n}){return()=>{let{features:s,...r}=t,i={"aria-hidden":(s&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(s&4)===4&&(s&2)!==2&&{display:"none"}}};return Zs({ourProps:i,theirProps:r,slot:{},attrs:n,slots:e,name:"Hidden"})}}});function $S(t){var e,n;let s=(e=t==null?void 0:t.form)!=null?e:t.closest("form");if(s){for(let r of s.elements)if(r!==t&&(r.tagName==="INPUT"&&r.type==="submit"||r.tagName==="BUTTON"&&r.type==="submit"||r.nodeName==="INPUT"&&r.type==="image")){r.click();return}(n=s.requestSubmit)==null||n.call(s)}}function jS(t,e,n){let s=Q(n==null?void 0:n.value),r=ae(()=>t.value!==void 0);return[ae(()=>r.value?t.value:s.value),function(i){return r.value||(s.value=i),e==null?void 0:e(i)}]}function jd(t){return[t.screenX,t.screenY]}function HS(){let t=Q([-1,-1]);return{wasMoved(e){let n=jd(e);return t.value[0]===n[0]&&t.value[1]===n[1]?!1:(t.value=n,!0)},update(e){t.value=jd(e)}}}let Hd=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function Bd(t){var e,n;let s=(e=t.innerText)!=null?e:"",r=t.cloneNode(!0);if(!(r instanceof HTMLElement))return s;let i=!1;for(let a of r.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))a.remove(),i=!0;let o=i?(n=r.innerText)!=null?n:"":s;return Hd.test(o)&&(o=o.replace(Hd,"")),o}function BS(t){let e=t.getAttribute("aria-label");if(typeof e=="string")return e.trim();let n=t.getAttribute("aria-labelledby");if(n){let s=n.split(" ").map(r=>{let i=document.getElementById(r);if(i){let o=i.getAttribute("aria-label");return typeof o=="string"?o.trim():Bd(i).trim()}return null}).filter(Boolean);if(s.length>0)return s.join(", ")}return Bd(t).trim()}function WS(t){let e=Q(""),n=Q("");return()=>{let s=Ce(t);if(!s)return"";let r=s.innerText;if(e.value===r)return n.value;let i=BS(s).trim().toLowerCase();return e.value=r,n.value=i,i}}var VS=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(VS||{}),KS=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(KS||{});function zS(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let ug=Symbol("MenuContext");function Lo(t){let e=Je(ug,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Lo),n}return e}let GS=Qt({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:e,attrs:n}){let s=Q(1),r=Q(null),i=Q(null),o=Q([]),a=Q(""),l=Q(null),c=Q(1);function u(f=p=>p){let p=l.value!==null?o.value[l.value]:null,m=lg(f(o.value.slice()),v=>Ce(v.dataRef.domRef)),_=p?m.indexOf(p):null;return _===-1&&(_=null),{items:m,activeItemIndex:_}}let d={menuState:s,buttonRef:r,itemsRef:i,items:o,searchQuery:a,activeItemIndex:l,activationTrigger:c,closeMenu:()=>{s.value=1,l.value=null},openMenu:()=>s.value=0,goToItem(f,p,m){let _=u(),v=wS(f===rt.Specific?{focus:rt.Specific,id:p}:{focus:f},{resolveItems:()=>_.items,resolveActiveIndex:()=>_.activeItemIndex,resolveId:C=>C.id,resolveDisabled:C=>C.dataRef.disabled});a.value="",l.value=v,c.value=m??1,o.value=_.items},search(f){let p=a.value!==""?0:1;a.value+=f.toLowerCase();let m=(l.value!==null?o.value.slice(l.value+p).concat(o.value.slice(0,l.value+p)):o.value).find(v=>v.dataRef.textValue.startsWith(a.value)&&!v.dataRef.disabled),_=m?o.value.indexOf(m):-1;_===-1||_===l.value||(l.value=_,c.value=1)},clearSearch(){a.value=""},registerItem(f,p){let m=u(_=>[..._,{id:f,dataRef:p}]);o.value=m.items,l.value=m.activeItemIndex,c.value=1},unregisterItem(f){let p=u(m=>{let _=m.findIndex(v=>v.id===f);return _!==-1&&m.splice(_,1),m});o.value=p.items,l.value=p.activeItemIndex,c.value=1}};return FS([r,i],(f,p)=>{var m;d.closeMenu(),wc(p,bc.Loose)||(f.preventDefault(),(m=Ce(r))==null||m.focus())},ae(()=>s.value===0)),Is(ug,d),IS(ae(()=>Mo(s.value,{0:Vr.Open,1:Vr.Closed}))),()=>{let f={open:s.value===0,close:d.closeMenu};return Zs({ourProps:{},theirProps:t,slot:f,slots:e,attrs:n,name:"Menu"})}}}),qS=Qt({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${Do()}`}},setup(t,{attrs:e,slots:n,expose:s}){let r=Lo("MenuButton");s({el:r.buttonRef,$el:r.buttonRef});function i(c){switch(c.key){case Ae.Space:case Ae.Enter:case Ae.ArrowDown:c.preventDefault(),c.stopPropagation(),r.openMenu(),bt(()=>{var u;(u=Ce(r.itemsRef))==null||u.focus({preventScroll:!0}),r.goToItem(rt.First)});break;case Ae.ArrowUp:c.preventDefault(),c.stopPropagation(),r.openMenu(),bt(()=>{var u;(u=Ce(r.itemsRef))==null||u.focus({preventScroll:!0}),r.goToItem(rt.Last)});break}}function o(c){switch(c.key){case Ae.Space:c.preventDefault();break}}function a(c){t.disabled||(r.menuState.value===0?(r.closeMenu(),bt(()=>{var u;return(u=Ce(r.buttonRef))==null?void 0:u.focus({preventScroll:!0})})):(c.preventDefault(),r.openMenu(),zS(()=>{var u;return(u=Ce(r.itemsRef))==null?void 0:u.focus({preventScroll:!0})})))}let l=ig(ae(()=>({as:t.as,type:e.type})),r.buttonRef);return()=>{var c;let u={open:r.menuState.value===0},{id:d,...f}=t,p={ref:r.buttonRef,id:d,type:l.value,"aria-haspopup":"menu","aria-controls":(c=Ce(r.itemsRef))==null?void 0:c.id,"aria-expanded":r.menuState.value===0,onKeydown:i,onKeyup:o,onClick:a};return Zs({ourProps:p,theirProps:f,slot:u,attrs:e,slots:n,name:"MenuButton"})}}}),YS=Qt({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${Do()}`}},setup(t,{attrs:e,slots:n,expose:s}){let r=Lo("MenuItems"),i=Q(null);s({el:r.itemsRef,$el:r.itemsRef}),RS({container:ae(()=>Ce(r.itemsRef)),enabled:ae(()=>r.menuState.value===0),accept(u){return u.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:u.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(u){u.setAttribute("role","none")}});function o(u){var d;switch(i.value&&clearTimeout(i.value),u.key){case Ae.Space:if(r.searchQuery.value!=="")return u.preventDefault(),u.stopPropagation(),r.search(u.key);case Ae.Enter:if(u.preventDefault(),u.stopPropagation(),r.activeItemIndex.value!==null){let f=r.items.value[r.activeItemIndex.value];(d=Ce(f.dataRef.domRef))==null||d.click()}r.closeMenu(),ag(Ce(r.buttonRef));break;case Ae.ArrowDown:return u.preventDefault(),u.stopPropagation(),r.goToItem(rt.Next);case Ae.ArrowUp:return u.preventDefault(),u.stopPropagation(),r.goToItem(rt.Previous);case Ae.Home:case Ae.PageUp:return u.preventDefault(),u.stopPropagation(),r.goToItem(rt.First);case Ae.End:case Ae.PageDown:return u.preventDefault(),u.stopPropagation(),r.goToItem(rt.Last);case Ae.Escape:u.preventDefault(),u.stopPropagation(),r.closeMenu(),bt(()=>{var f;return(f=Ce(r.buttonRef))==null?void 0:f.focus({preventScroll:!0})});break;case Ae.Tab:u.preventDefault(),u.stopPropagation(),r.closeMenu(),bt(()=>MS(Ce(r.buttonRef),u.shiftKey?il.Previous:il.Next));break;default:u.key.length===1&&(r.search(u.key),i.value=setTimeout(()=>r.clearSearch(),350));break}}function a(u){switch(u.key){case Ae.Space:u.preventDefault();break}}let l=ES(),c=ae(()=>l!==null?(l.value&Vr.Open)===Vr.Open:r.menuState.value===0);return()=>{var u,d;let f={open:r.menuState.value===0},{id:p,...m}=t,_={"aria-activedescendant":r.activeItemIndex.value===null||(u=r.items.value[r.activeItemIndex.value])==null?void 0:u.id,"aria-labelledby":(d=Ce(r.buttonRef))==null?void 0:d.id,id:p,onKeydown:o,onKeyup:a,role:"menu",tabIndex:0,ref:r.itemsRef};return Zs({ourProps:_,theirProps:m,slot:f,attrs:e,slots:n,features:sl.RenderStrategy|sl.Static,visible:c.value,name:"MenuItems"})}}}),QS=Qt({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${Do()}`}},setup(t,{slots:e,attrs:n,expose:s}){let r=Lo("MenuItem"),i=Q(null);s({el:i,$el:i});let o=ae(()=>r.activeItemIndex.value!==null?r.items.value[r.activeItemIndex.value].id===t.id:!1),a=WS(i),l=ae(()=>({disabled:t.disabled,get textValue(){return a()},domRef:i}));es(()=>r.registerItem(t.id,l)),yo(()=>r.unregisterItem(t.id)),Gs(()=>{r.menuState.value===0&&o.value&&r.activationTrigger.value!==0&&bt(()=>{var _,v;return(v=(_=Ce(i))==null?void 0:_.scrollIntoView)==null?void 0:v.call(_,{block:"nearest"})})});function c(_){if(t.disabled)return _.preventDefault();r.closeMenu(),ag(Ce(r.buttonRef))}function u(){if(t.disabled)return r.goToItem(rt.Nothing);r.goToItem(rt.Specific,t.id)}let d=HS();function f(_){d.update(_)}function p(_){d.wasMoved(_)&&(t.disabled||o.value||r.goToItem(rt.Specific,t.id,0))}function m(_){d.wasMoved(_)&&(t.disabled||o.value&&r.goToItem(rt.Nothing))}return()=>{let{disabled:_}=t,v={active:o.value,disabled:_,close:r.closeMenu},{id:C,...S}=t;return Zs({ourProps:{id:C,ref:i,role:"menuitem",tabIndex:_===!0?void 0:-1,"aria-disabled":_===!0?!0:void 0,disabled:void 0,onClick:c,onFocus:u,onPointerenter:f,onMouseenter:f,onPointermove:p,onMousemove:p,onPointerleave:m,onMouseleave:m},theirProps:{...n,...S},slot:v,attrs:n,slots:e,name:"MenuItem"})}}}),JS=Symbol("GroupContext"),XS=Qt({name:"Switch",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:()=>`headlessui-switch-${Do()}`}},inheritAttrs:!1,setup(t,{emit:e,attrs:n,slots:s,expose:r}){let i=Je(JS,null),[o,a]=jS(ae(()=>t.modelValue),v=>e("update:modelValue",v),ae(()=>t.defaultChecked));function l(){a(!o.value)}let c=Q(null),u=i===null?c:i.switchRef,d=ig(ae(()=>({as:t.as,type:n.type})),u);r({el:u,$el:u});function f(v){v.preventDefault(),l()}function p(v){v.key===Ae.Space?(v.preventDefault(),l()):v.key===Ae.Enter&&$S(v.currentTarget)}function m(v){v.preventDefault()}let _=ae(()=>{var v,C;return(C=(v=Ce(u))==null?void 0:v.closest)==null?void 0:C.call(v,"form")});return es(()=>{Ot([_],()=>{if(!_.value||t.defaultChecked===void 0)return;function v(){a(t.defaultChecked)}return _.value.addEventListener("reset",v),()=>{var C;(C=_.value)==null||C.removeEventListener("reset",v)}},{immediate:!0})}),()=>{let{id:v,name:C,value:S,form:M,...k}=t,G={checked:o.value},U={id:v,ref:u,role:"switch",type:d.value,tabIndex:0,"aria-checked":o.value,"aria-labelledby":i==null?void 0:i.labelledby.value,"aria-describedby":i==null?void 0:i.describedby.value,onClick:f,onKeyup:p,onKeypress:m};return En(xe,[C!=null&&o.value!=null?En(US,mS({features:cg.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:o.value,form:M,name:C,value:S})):null,Zs({ourProps:U,theirProps:{...n,...sg(k,["modelValue","defaultChecked"])},slot:G,attrs:n,slots:s,name:"Switch"})])}}});function dg(t){return Mf()?(n_(t),!0):!1}function js(t){return typeof t=="function"?t():ws(t)}const ZS=typeof window<"u"&&typeof document<"u",eT=Object.prototype.toString,tT=t=>eT.call(t)==="[object Object]",fg=()=>{};function nT(t,e){function n(...s){return new Promise((r,i)=>{Promise.resolve(t(()=>e.apply(this,s),{fn:e,thisArg:this,args:s})).then(r).catch(i)})}return n}const hg=t=>t();function sT(t=hg){const e=Q(!0);function n(){e.value=!1}function s(){e.value=!0}const r=(...i)=>{e.value&&t(...i)};return{isActive:ho(e),pause:n,resume:s,eventFilter:r}}function rT(...t){if(t.length!==1)return F_(...t);const e=t[0];return typeof e=="function"?ho(M_(()=>({get:e,set:fg}))):Q(e)}function iT(t,e,n={}){const{eventFilter:s=hg,...r}=n;return Ot(t,nT(s,e),r)}function oT(t,e,n={}){const{eventFilter:s,...r}=n,{eventFilter:i,pause:o,resume:a,isActive:l}=sT(s);return{stop:iT(t,e,{...r,eventFilter:i}),pause:o,resume:a,isActive:l}}function aT(t,e=!0){Wl()?es(t):e?t():bt(t)}function lT(t=!1,e={}){const{truthyValue:n=!0,falsyValue:s=!1}=e,r=Pe(t),i=Q(t);function o(a){if(arguments.length)return i.value=a,i.value;{const l=js(n);return i.value=i.value===l?js(s):l,i.value}}return r?o:[i,o]}function pg(t){var e;const n=js(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Kr=ZS?window:void 0;function Wd(...t){let e,n,s,r;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,s,r]=t,e=Kr):[e,n,s,r]=t,!e)return fg;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const i=[],o=()=>{i.forEach(u=>u()),i.length=0},a=(u,d,f,p)=>(u.addEventListener(d,f,p),()=>u.removeEventListener(d,f,p)),l=Ot(()=>[pg(e),js(r)],([u,d])=>{if(o(),!u)return;const f=tT(d)?{...d}:d;i.push(...n.flatMap(p=>s.map(m=>a(u,p,m,f))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return dg(c),c}function cT(){const t=Q(!1);return Wl()&&es(()=>{t.value=!0}),t}function uT(t){const e=cT();return ae(()=>(e.value,!!t()))}function dT(t,e={}){const{window:n=Kr}=e,s=uT(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const i=Q(!1),o=c=>{i.value=c.matches},a=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",o):r.removeListener(o))},l=Gs(()=>{s.value&&(a(),r=n.matchMedia(js(t)),"addEventListener"in r?r.addEventListener("change",o):r.addListener(o),i.value=r.matches)});return dg(()=>{l(),a(),r=void 0}),i}const gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},mi="__vueuse_ssr_handlers__",fT=hT();function hT(){return mi in gi||(gi[mi]=gi[mi]||{}),gi[mi]}function gg(t,e){return fT[t]||e}function pT(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const gT={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},Vd="vueuse-storage";function mT(t,e,n,s={}){var r;const{flush:i="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:d=Kr,eventFilter:f,onError:p=A=>{console.error(A)}}=s,m=(u?Gf:Q)(e);if(!n)try{n=gg("getDefaultStorage",()=>{var A;return(A=Kr)==null?void 0:A.localStorage})()}catch(A){p(A)}if(!n)return m;const _=js(e),v=pT(_),C=(r=s.serializer)!=null?r:gT[v],{pause:S,resume:M}=oT(m,()=>k(m.value),{flush:i,deep:o,eventFilter:f});return d&&a&&(Wd(d,"storage",Y),Wd(d,Vd,U)),Y(),m;function k(A){try{if(A==null)n.removeItem(t);else{const W=C.write(A),V=n.getItem(t);V!==W&&(n.setItem(t,W),d&&d.dispatchEvent(new CustomEvent(Vd,{detail:{key:t,oldValue:V,newValue:W,storageArea:n}})))}}catch(W){p(W)}}function G(A){const W=A?A.newValue:n.getItem(t);if(W==null)return l&&_!==null&&n.setItem(t,C.write(_)),_;if(!A&&c){const V=C.read(W);return typeof c=="function"?c(V,_):v==="object"&&!Array.isArray(V)?{..._,...V}:V}else return typeof W!="string"?W:C.read(W)}function U(A){Y(A.detail)}function Y(A){if(!(A&&A.storageArea!==n)){if(A&&A.key==null){m.value=_;return}if(!(A&&A.key!==t)){S();try{(A==null?void 0:A.newValue)!==C.write(m.value)&&(m.value=G(A))}catch(W){p(W)}finally{A?bt(M):M()}}}}}function _T(t){return dT("(prefers-color-scheme: dark)",t)}function vT(t={}){const{selector:e="html",attribute:n="class",initialValue:s="auto",window:r=Kr,storage:i,storageKey:o="vueuse-color-scheme",listenToStorageChanges:a=!0,storageRef:l,emitAuto:c,disableTransition:u=!0}=t,d={auto:"",light:"light",dark:"dark",...t.modes||{}},f=_T({window:r}),p=ae(()=>f.value?"dark":"light"),m=l||(o==null?rT(s):mT(o,s,i,{window:r,listenToStorageChanges:a})),_=ae(()=>m.value==="auto"?p.value:m.value),v=gg("updateHTMLAttrs",(k,G,U)=>{const Y=typeof k=="string"?r==null?void 0:r.document.querySelector(k):pg(k);if(!Y)return;let A;if(u){A=r.document.createElement("style");const W="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";A.appendChild(document.createTextNode(W)),r.document.head.appendChild(A)}if(G==="class"){const W=U.split(/\s/g);Object.values(d).flatMap(V=>(V||"").split(/\s/g)).filter(Boolean).forEach(V=>{W.includes(V)?Y.classList.add(V):Y.classList.remove(V)})}else Y.setAttribute(G,U);u&&(r.getComputedStyle(A).opacity,document.head.removeChild(A))});function C(k){var G;v(e,n,(G=d[k])!=null?G:k)}function S(k){t.onChanged?t.onChanged(k,C):C(k)}Ot(_,S,{flush:"post",immediate:!0}),aT(()=>S(_.value));const M=ae({get(){return c?m.value:_.value},set(k){m.value=k}});try{return Object.assign(M,{store:m,system:p,state:_})}catch{return M}}function yT(t={}){const{valueDark:e="dark",valueLight:n=""}=t,s=vT({...t,onChanged:(i,o)=>{var a;t.onChanged?(a=t.onChanged)==null||a.call(t,i==="dark",o,i):o(i)},modes:{dark:e,light:n}});return ae({get(){return s.value==="dark"},set(i){const o=i?"dark":"light";s.system.value===o?s.value="auto":s.value=o}})}const bT={components:{LoginComponent:mE,ErrorMessage:bE,BaseHeader:_c,Icon:ec,Menu:GS,MenuButton:qS,MenuItems:YS,MenuItem:QS,Switch:XS},setup(){const t=Bh(),e=Q(),n=yT(),s=lT(n),r=Xi();function i(o){const a=Q(o[0]),l=Q(o[1]),c=Q(o[2]);e.value="",c.value==="Login"?X0(r,a.value,l.value).then(()=>{t.replace("/tasks")}).catch(u=>{switch(u.code){case"auth/invalid-email":e.value="Invalid email";break;case"auth/user-not-found":e.value="No account with that email was found";break;case"auth/wrong-password":e.value="Incorrect password";break;default:e.value="Email or password was incorrect";break}}):c.value==="Signup"&&J0(r,a.value,l.value).then(()=>{alert("User created with success!")}).catch(u=>{console.log(u.code),alert(u.message)})}return{signupOrLogin:i,errMsg:e,isDark:n,toggleDark:s}}},wT=Z("div",{class:"py-0 px-3 font-semibold dark:text-white"},"Task Project",-1),ET={class:"flex"},IT=Z("h1",{class:"font-semibold text-3xl p-4 dark:text-white"},"The Task Project",-1),CT=Z("h3",{class:"font-medium text-2xl p-2 dark:text-white"}," Please login or signup to start your task list! ",-1);function ST(t,e,n,s,r,i){const o=Ke("Icon"),a=Ke("Switch"),l=Ke("base-header"),c=Ke("login-component"),u=Ke("error-message"),d=Ke("content-box");return Fe(),Ye(xe,null,[oe(l,null,{default:st(()=>[wT,Z("div",ET,[oe(o,{icon:"iconamoon:mode-light",color:"black",width:"26",height:"26"}),oe(a,{onClick:e[0]||(e[0]=f=>s.toggleDark()),modelValue:s.isDark,"onUpdate:modelValue":e[1]||(e[1]=f=>s.isDark=f),class:Or([s.isDark?"bg-gray-900":"bg-gray-700","relative inline-flex h-6 w-11 items-center rounded-full transition-colors"])},{default:st(()=>[Z("span",{class:Or([s.isDark?"translate-x-6":"translate-x-1","inline-block h-4 w-4 transform rounded-full bg-white transition-transform"])},null,2)]),_:1},8,["modelValue","class"]),oe(o,{icon:"material-symbols:dark-mode-outline",color:"black",width:"26",height:"26"})])]),_:1}),oe(d,null,{default:st(()=>[IT,CT,oe(c,{onEmitUser:s.signupOrLogin},null,8,["onEmitUser"]),s.errMsg?(Fe(),Hl(u,{key:0},{default:st(()=>[mn(Oi(s.errMsg),1)]),_:1})):Lv("",!0)]),_:1})],64)}const TT=Dt(bT,[["render",ST]]);/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var mg="store";function RT(t){return t===void 0&&(t=null),Je(t!==null?t:mg)}function er(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function kT(t){return t!==null&&typeof t=="object"}function AT(t){return t&&typeof t.then=="function"}function PT(t,e){return function(){return t(e)}}function _g(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function vg(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Fo(t,n,[],t._modules.root,!0),Ec(t,n,e)}function Ec(t,e,n){var s=t._state,r=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={},a={},l=e_(!0);l.run(function(){er(i,function(c,u){o[u]=PT(c,t),a[u]=ae(function(){return o[u]()}),Object.defineProperty(t.getters,u,{get:function(){return a[u].value},enumerable:!0})})}),t._state=zs({data:e}),t._scope=l,t.strict&&DT(t),s&&n&&t._withCommit(function(){s.data=null}),r&&r.stop()}function Fo(t,e,n,s,r){var i=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!i&&!r){var a=Ic(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){a[l]=s.state})}var c=s.context=OT(t,o,n);s.forEachMutation(function(u,d){var f=o+d;NT(t,f,u,c)}),s.forEachAction(function(u,d){var f=u.root?d:o+d,p=u.handler||u;xT(t,f,p,c)}),s.forEachGetter(function(u,d){var f=o+d;MT(t,f,u,c)}),s.forEachChild(function(u,d){Fo(t,e,n.concat(d),u,r)})}function OT(t,e,n){var s=e==="",r={dispatch:s?t.dispatch:function(i,o,a){var l=Zi(i,o,a),c=l.payload,u=l.options,d=l.type;return(!u||!u.root)&&(d=e+d),t.dispatch(d,c)},commit:s?t.commit:function(i,o,a){var l=Zi(i,o,a),c=l.payload,u=l.options,d=l.type;(!u||!u.root)&&(d=e+d),t.commit(d,c,u)}};return Object.defineProperties(r,{getters:{get:s?function(){return t.getters}:function(){return yg(t,e)}},state:{get:function(){return Ic(t.state,n)}}}),r}function yg(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(r){if(r.slice(0,s)===e){var i=r.slice(s);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function NT(t,e,n,s){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(o){n.call(t,s.state,o)})}function xT(t,e,n,s){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(o){var a=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return AT(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):a})}function MT(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(s.state,s.getters,i.state,i.getters)})}function DT(t){Ot(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Ic(t,e){return e.reduce(function(n,s){return n[s]},t)}function Zi(t,e,n){return kT(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var LT="vuex bindings",Kd="vuex:mutations",da="vuex:actions",ds="vuex",FT=0;function UT(t,e){eb({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[LT]},function(n){n.addTimelineLayer({id:Kd,label:"Vuex Mutations",color:zd}),n.addTimelineLayer({id:da,label:"Vuex Actions",color:zd}),n.addInspector({id:ds,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===ds)if(s.filter){var r=[];Ig(r,e._modules.root,s.filter,""),s.rootNodes=r}else s.rootNodes=[Eg(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===ds){var r=s.nodeId;yg(e,r),s.state=HT(WT(e._modules,r),r==="root"?e.getters:e._makeLocalGettersCache,r)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===ds){var r=s.nodeId,i=s.path;r!=="root"&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit(function(){s.set(e._state.data,i,s.state.value)})}}),e.subscribe(function(s,r){var i={};s.payload&&(i.payload=s.payload),i.state=r,n.notifyComponentUpdate(),n.sendInspectorTree(ds),n.sendInspectorState(ds),n.addTimelineEvent({layerId:Kd,event:{time:Date.now(),title:s.type,data:i}})}),e.subscribeAction({before:function(s,r){var i={};s.payload&&(i.payload=s.payload),s._id=FT++,s._time=Date.now(),i.state=r,n.addTimelineEvent({layerId:da,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:i}})},after:function(s,r){var i={},o=Date.now()-s._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(i.payload=s.payload),i.state=r,n.addTimelineEvent({layerId:da,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:i}})}})})}var zd=8702998,$T=6710886,jT=16777215,bg={label:"namespaced",textColor:jT,backgroundColor:$T};function wg(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Eg(t,e){return{id:e||"root",label:wg(e),tags:t.namespaced?[bg]:[],children:Object.keys(t._children).map(function(n){return Eg(t._children[n],e+n+"/")})}}function Ig(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[bg]:[]}),Object.keys(e._children).forEach(function(r){Ig(t,e._children[r],n,s+r+"/")})}function HT(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),r={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var i=BT(e);r.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?wg(o):o,editable:!1,value:ol(function(){return i[o]})}})}return r}function BT(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var r=e,i=s.pop();s.forEach(function(o){r[o]||(r[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),r=r[o]._custom.value}),r[i]=ol(function(){return t[n]})}else e[n]=ol(function(){return t[n]})}),e}function WT(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,r,i){var o=s[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function ol(t){try{return t()}catch(e){return e}}var It=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},Cg={namespaced:{configurable:!0}};Cg.namespaced.get=function(){return!!this._rawModule.namespaced};It.prototype.addChild=function(e,n){this._children[e]=n};It.prototype.removeChild=function(e){delete this._children[e]};It.prototype.getChild=function(e){return this._children[e]};It.prototype.hasChild=function(e){return e in this._children};It.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};It.prototype.forEachChild=function(e){er(this._children,e)};It.prototype.forEachGetter=function(e){this._rawModule.getters&&er(this._rawModule.getters,e)};It.prototype.forEachAction=function(e){this._rawModule.actions&&er(this._rawModule.actions,e)};It.prototype.forEachMutation=function(e){this._rawModule.mutations&&er(this._rawModule.mutations,e)};Object.defineProperties(It.prototype,Cg);var ss=function(e){this.register([],e,!1)};ss.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};ss.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,r){return n=n.getChild(r),s+(n.namespaced?r+"/":"")},"")};ss.prototype.update=function(e){Sg([],this.root,e)};ss.prototype.register=function(e,n,s){var r=this;s===void 0&&(s=!0);var i=new It(n,s);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&er(n.modules,function(a,l){r.register(e.concat(l),a,s)})};ss.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],r=n.getChild(s);r&&r.runtime&&n.removeChild(s)};ss.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function Sg(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;Sg(t.concat(s),e.getChild(s),n.modules[s])}}function VT(t){return new et(t)}var et=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var r=e.strict;r===void 0&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new ss(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(f,p){return l.call(o,f,p)},this.commit=function(f,p,m){return c.call(o,f,p,m)},this.strict=r;var u=this._modules.root.state;Fo(this,u,[],this._modules.root),Ec(this,u),s.forEach(function(d){return d(n)})},Cc={state:{configurable:!0}};et.prototype.install=function(e,n){e.provide(n||mg,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&UT(e,this)};Cc.state.get=function(){return this._state.data};Cc.state.set=function(t){};et.prototype.commit=function(e,n,s){var r=this,i=Zi(e,n,s),o=i.type,a=i.payload,l={type:o,payload:a},c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(d){d(a)})}),this._subscribers.slice().forEach(function(u){return u(l,r.state)}))};et.prototype.dispatch=function(e,n){var s=this,r=Zi(e,n),i=r.type,o=r.payload,a={type:i,payload:o},l=this._actions[i];if(l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,s.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,d){c.then(function(f){try{s._actionSubscribers.filter(function(p){return p.after}).forEach(function(p){return p.after(a,s.state)})}catch{}u(f)},function(f){try{s._actionSubscribers.filter(function(p){return p.error}).forEach(function(p){return p.error(a,s.state,f)})}catch{}d(f)})})}};et.prototype.subscribe=function(e,n){return _g(e,this._subscribers,n)};et.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return _g(s,this._actionSubscribers,n)};et.prototype.watch=function(e,n,s){var r=this;return Ot(function(){return e(r.state,r.getters)},n,Object.assign({},s))};et.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};et.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Fo(this,this.state,e,this._modules.get(e),s.preserveState),Ec(this,this.state)};et.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=Ic(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),vg(this)};et.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};et.prototype.hotUpdate=function(e){this._modules.update(e),vg(this,!0)};et.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(et.prototype,Cc);const KT={components:{BaseHeader:_c},setup(){const t=Q(""),e=RT(),n=Bh();function s(){e.dispatch("submitData",t.value),t.value=""}function r(){Xi().signOut(),n.replace("/login")}function i(){Xi().onAuthStateChanged(function(o){o||n.replace("/")})}return Ul(()=>{i()}),{taskText:t,submitTask:s,logoutUser:r}}},Tg=t=>(th("data-v-84b0a3cc"),t=t(),nh(),t),zT={class:"dark:bg-gray-900"},GT=Tg(()=>Z("p",{class:"text-3xl font-semibold p-3 dark:text-white"},"My Tasks",-1)),qT=Tg(()=>Z("div",{class:"text-2xl font-normal pb-5 dark:text-white"},"Add a task below (with Enter) and click over the finished tasks",-1)),YT={class:"my-4"};function QT(t,e,n,s,r,i){const o=Ke("base-button"),a=Ke("base-header");return Fe(),Ye("section",zT,[oe(a,null,{default:st(()=>[oe(o,{class:"px-1 text-sm font-semibold left-10",onClick:s.logoutUser},{default:st(()=>[mn("Logout User")]),_:1},8,["onClick"])]),_:1}),GT,qT,Z("div",YT,[Ca(Z("input",{placeholder:"Add a new task!",id:"insertField",type:"text","onUpdate:modelValue":e[0]||(e[0]=l=>s.taskText=l),onKeydown:e[1]||(e[1]=Ty(l=>s.submitTask(s.taskText),["enter"]))},null,544),[[Ui,s.taskText]]),Z("button",{onClick:e[2]||(e[2]=l=>s.submitTask(s.taskText)),class:"bg-blue-500 text-white px-4 py-2 rounded ml-2"},"Add")])])}const JT=Dt(KT,[["render",QT],["__scopeId","data-v-84b0a3cc"]]),Gd="@firebase/database",qd="1.0.12";/**
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
 */let Rg="";function XT(t){Rg=t}/**
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
 */class ZT{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ue(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:jr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class eR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Xt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const kg=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ZT(e)}}catch{}return new eR},$n=kg("localStorage"),al=kg("sessionStorage");/**
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
 */const ks=new ic("@firebase/database"),tR=function(){let t=1;return function(){return t++}}(),Ag=function(t){const e=zE(t),n=new HE;n.update(e);const s=n.digest();return tc.encodeByteArray(s)},ei=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ei.apply(null,s):typeof s=="object"?e+=Ue(s):e+=s,e+=" "}return e};let Bn=null,Yd=!0;const nR=function(t,e){O(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ks.logLevel=de.VERBOSE,Bn=ks.log.bind(ks),e&&al.set("logging_enabled",!0)):typeof t=="function"?Bn=t:(Bn=null,al.remove("logging_enabled"))},je=function(...t){if(Yd===!0&&(Yd=!1,Bn===null&&al.get("logging_enabled")===!0&&nR(!0)),Bn){const e=ei.apply(null,t);Bn(e)}},ti=function(t){return function(...e){je(t,...e)}},ll=function(...t){const e="FIREBASE INTERNAL ERROR: "+ei(...t);ks.error(e)},Yt=function(...t){const e=`FIREBASE FATAL ERROR: ${ei(...t)}`;throw ks.error(e),new Error(e)},it=function(...t){const e="FIREBASE WARNING: "+ei(...t);ks.warn(e)},sR=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&it("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Pg=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},rR=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Hs="[MIN_NAME]",Qn="[MAX_NAME]",tr=function(t,e){if(t===e)return 0;if(t===Hs||e===Qn)return-1;if(e===Hs||t===Qn)return 1;{const n=Qd(t),s=Qd(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},iR=function(t,e){return t===e?0:t<e?-1:1},ur=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ue(e))},Sc=function(t){if(typeof t!="object"||t===null)return Ue(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ue(e[s]),n+=":",n+=Sc(t[e[s]]);return n+="}",n},Og=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let r=0;r<n;r+=e)r+e>n?s.push(t.substring(r,n)):s.push(t.substring(r,r+e));return s};function dt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ng=function(t){O(!Pg(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let r,i,o,a,l;t===0?(i=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),i=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(r?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},oR=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},aR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},lR=new RegExp("^-?(0*)\\d{1,10}$"),cR=-2147483648,uR=2147483647,Qd=function(t){if(lR.test(t)){const e=Number(t);if(e>=cR&&e<=uR)return e}return null},ni=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw it("Exception was thrown by user callback.",n),e},Math.floor(0))}},dR=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Tr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class fR{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,at(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){it(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class hR{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(je("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',it(e)}}class As{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}As.OWNER="owner";/**
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
 */const Tc="5",xg="v",Mg="s",Dg="r",Lg="f",Fg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ug="ls",$g="p",cl="ac",jg="websocket",Hg="long_polling";/**
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
 */class Bg{constructor(e,n,s,r,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=$n.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&$n.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function pR(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Wg(t,e,n){O(typeof e=="string","typeof type must == string"),O(typeof n=="object","typeof params must == object");let s;if(e===jg)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Hg)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);pR(t)&&(n.ns=t.namespace);const r=[];return dt(n,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
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
 */class gR{constructor(){this.counters_={}}incrementCounter(e,n=1){Xt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return IE(this.counters_)}}/**
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
 */const fa={},ha={};function Rc(t){const e=t.toString();return fa[e]||(fa[e]=new gR),fa[e]}function mR(t,e){const n=t.toString();return ha[n]||(ha[n]=e()),ha[n]}/**
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
 */class _R{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&ni(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Jd="start",vR="close",yR="pLPCommand",bR="pRTLPCB",Vg="id",Kg="pw",zg="ser",wR="cb",ER="seg",IR="ts",CR="d",SR="dframe",Gg=1870,qg=30,TR=Gg-qg,RR=25e3,kR=3e4;class ms{constructor(e,n,s,r,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ti(e),this.stats_=Rc(n),this.urlFn=l=>(this.appCheckToken&&(l[cl]=this.appCheckToken),Wg(n,Hg,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new _R(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(kR)),rR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new kc((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Jd)this.id=a,this.password=l;else if(o===vR)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Jd]="t",s[zg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[wR]=this.scriptTagHolder.uniqueCallbackIdentifier),s[xg]=Tc,this.transportSessionId&&(s[Mg]=this.transportSessionId),this.lastSessionId&&(s[Ug]=this.lastSessionId),this.applicationId&&(s[$g]=this.applicationId),this.appCheckToken&&(s[cl]=this.appCheckToken),typeof location<"u"&&location.hostname&&Fg.test(location.hostname)&&(s[Dg]=Lg);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ms.forceAllow_=!0}static forceDisallow(){ms.forceDisallow_=!0}static isAvailable(){return ms.forceAllow_?!0:!ms.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!oR()&&!aR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=op(n),r=Og(s,TR);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[SR]="t",s[Vg]=e,s[Kg]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ue(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class kc{constructor(e,n,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=tR(),window[yR+this.uniqueCallbackIdentifier]=e,window[bR+this.uniqueCallbackIdentifier]=n,this.myIFrame=kc.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){je("frame writing exception"),a.stack&&je(a.stack),je(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||je("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Vg]=this.myID,e[Kg]=this.myPW,e[zg]=this.currentSerial;let n=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+qg+s.length<=Gg;){const o=this.pendingSegs.shift();s=s+"&"+ER+r+"="+o.seg+"&"+IR+r+"="+o.ts+"&"+CR+r+"="+o.d,r++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(s,Math.floor(RR)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{je("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const AR=16384,PR=45e3;let eo=null;typeof MozWebSocket<"u"?eo=MozWebSocket:typeof WebSocket<"u"&&(eo=WebSocket);class mt{constructor(e,n,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ti(this.connId),this.stats_=Rc(n),this.connURL=mt.connectionURL_(n,o,a,r,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,r,i){const o={};return o[xg]=Tc,typeof location<"u"&&location.hostname&&Fg.test(location.hostname)&&(o[Dg]=Lg),n&&(o[Mg]=n),s&&(o[Ug]=s),r&&(o[cl]=r),i&&(o[$g]=i),Wg(e,jg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,$n.set("previous_websocket_failure",!0);try{let s;fp(),this.mySock=new eo(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){mt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&eo!==null&&!mt.forceDisallow_}static previouslyFailed(){return $n.isInMemoryStorage||$n.get("previous_websocket_failure")===!0}markConnectionHealthy(){$n.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=jr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Og(n,AR);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(PR))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}mt.responsesRequiredToBeHealthy=2;mt.healthyTimeout=3e4;/**
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
 */class zr{static get ALL_TRANSPORTS(){return[ms,mt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=mt&&mt.isAvailable();let s=n&&!mt.previouslyFailed();if(e.webSocketOnly&&(n||it("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[mt];else{const r=this.transports_=[];for(const i of zr.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);zr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}zr.globalTransportInitialized_=!1;/**
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
 */const OR=6e4,NR=5e3,xR=10*1024,MR=100*1024,pa="t",Xd="d",DR="s",Zd="r",LR="e",ef="o",tf="a",nf="n",sf="p",FR="h";class UR{constructor(e,n,s,r,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ti("c:"+this.id+":"),this.transportManager_=new zr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Tr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>MR?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>xR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(pa in e){const n=e[pa];n===tf?this.upgradeIfSecondaryHealthy_():n===Zd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ef&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ur("t",e),s=ur("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:sf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:tf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:nf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ur("t",e),s=ur("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ur(pa,e);if(Xd in e){const s=e[Xd];if(n===FR){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===nf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===DR?this.onConnectionShutdown_(s):n===Zd?this.onReset_(s):n===LR?ll("Server Error: "+s):n===ef?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ll("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Tc!==s&&it("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Tr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(OR))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Tr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(NR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:sf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&($n.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Yg{put(e,n,s,r){}merge(e,n,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Qg{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const r=this.getInitialEvent(e);r&&n.apply(s,r)}off(e,n,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===n&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){O(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class to extends Qg{static getInstance(){return new to}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!rc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const rf=32,of=768;class we{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function fe(){return new we("")}function te(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Cn(t){return t.pieces_.length-t.pieceNum_}function be(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new we(t.pieces_,e)}function Jg(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function $R(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Xg(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Zg(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new we(e,0)}function De(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof we)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&n.push(s[r])}return new we(n,0)}function ee(t){return t.pieceNum_>=t.pieces_.length}function lt(t,e){const n=te(t),s=te(e);if(n===null)return e;if(n===s)return lt(be(t),be(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function em(t,e){if(Cn(t)!==Cn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function vt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Cn(t)>Cn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class jR{constructor(e,n){this.errorPrefix_=n,this.parts_=Xg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Po(this.parts_[s]);tm(this)}}function HR(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Po(e),tm(t)}function BR(t){const e=t.parts_.pop();t.byteLength_-=Po(e),t.parts_.length>0&&(t.byteLength_-=1)}function tm(t){if(t.byteLength_>of)throw new Error(t.errorPrefix_+"has a key path longer than "+of+" bytes ("+t.byteLength_+").");if(t.parts_.length>rf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+rf+") or object contains a cycle "+Mn(t))}function Mn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Ac extends Qg{static getInstance(){return new Ac}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const dr=1e3,WR=60*5*1e3,af=30*1e3,VR=1.3,KR=3e4,zR="server_kill",lf=3;class Vt extends Yg{constructor(e,n,s,r,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Vt.nextPersistentConnectionId_++,this.log_=ti("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=dr,this.maxReconnectDelay_=WR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!fp())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ac.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&to.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const r=++this.requestNumber_,i={r,a:e,b:n};this.log_(Ue(i)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const n=new sc,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;Vt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Xt(e,"w")){const s=Us(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();it(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||jE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=af)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=$E(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,n)}sendUnlisten_(e,n,s,r){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,r){const i={p:n,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,s,r){this.putInternal("p",e,n,s,r)}merge(e,n,s,r){this.putInternal("m",e,n,s,r)}putInternal(e,n,s,r,i){this.initConnection_();const o={p:n,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ue(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ll("Unrecognized action received from server: "+Ue(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=dr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=dr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>KR&&(this.reconnectDelay_=dr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*VR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Vt.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){O(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?je("getToken() completed but was canceled"):(je("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new UR(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{it(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(zR)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&it(d),l())}}}interrupt(e){je("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){je("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ga(this.interruptReasons_)&&(this.reconnectDelay_=dr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(i=>Sc(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const s=new we(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(n),i.delete(n),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,n){je("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=lf&&(this.reconnectDelay_=af,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){je("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=lf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Rg.replace(/\./g,"-")]=1,rc()?e["framework.cordova"]=1:dp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=to.getInstance().currentlyOnline();return Ga(this.interruptReasons_)&&e}}Vt.nextPersistentConnectionId_=0;Vt.nextConnectionId_=0;/**
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
 */class Uo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ne(Hs,e),r=new ne(Hs,n);return this.compare(s,r)!==0}minPost(){return ne.MIN}}/**
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
 */let _i;class nm extends Uo{static get __EMPTY_NODE(){return _i}static set __EMPTY_NODE(e){_i=e}compare(e,n){return tr(e.name,n.name)}isDefinedOn(e){throw Ys("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ne.MIN}maxPost(){return new ne(Qn,_i)}makePost(e,n){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new ne(e,_i)}toString(){return".key"}}const Ps=new nm;/**
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
 */class vi{constructor(e,n,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ne{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Ne.RED,this.left=r??Qe.EMPTY_NODE,this.right=i??Qe.EMPTY_NODE}copy(e,n,s,r,i){return new Ne(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Qe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,r;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Qe.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ne.RED=!0;Ne.BLACK=!1;class GR{copy(e,n,s,r,i){return this}insert(e,n,s){return new Ne(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Qe{constructor(e,n=Qe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Qe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ne.BLACK,null,null))}remove(e){return new Qe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ne.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,r=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new vi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new vi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new vi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new vi(this.root_,null,this.comparator_,!0,e)}}Qe.EMPTY_NODE=new GR;/**
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
 */function qR(t,e){return tr(t.name,e.name)}function Pc(t,e){return tr(t,e)}/**
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
 */let ul;function YR(t){ul=t}const sm=function(t){return typeof t=="number"?"number:"+Ng(t):"string:"+t},rm=function(t){if(t.isLeafNode()){const e=t.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Xt(e,".sv"),"Priority must be a string or number.")}else O(t===ul||t.isEmpty(),"priority of unexpected type.");O(t===ul||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let cf;class Oe{static set __childrenNodeConstructor(e){cf=e}static get __childrenNodeConstructor(){return cf}constructor(e,n=Oe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),rm(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Oe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Oe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ee(e)?this:te(e)===".priority"?this.priorityNode_:Oe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Oe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=te(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(O(s!==".priority"||Cn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Oe.__childrenNodeConstructor.EMPTY_NODE.updateChild(be(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+sm(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ng(this.value_):e+=this.value_,this.lazyHash_=Ag(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Oe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Oe.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,r=Oe.VALUE_TYPE_ORDER.indexOf(n),i=Oe.VALUE_TYPE_ORDER.indexOf(s);return O(r>=0,"Unknown leaf type: "+n),O(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Oe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let im,om;function QR(t){im=t}function JR(t){om=t}class XR extends Uo{compare(e,n){const s=e.node.getPriority(),r=n.node.getPriority(),i=s.compareTo(r);return i===0?tr(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ne.MIN}maxPost(){return new ne(Qn,new Oe("[PRIORITY-POST]",om))}makePost(e,n){const s=im(e);return new ne(n,new Oe("[PRIORITY-POST]",s))}toString(){return".priority"}}const We=new XR;/**
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
 */const ZR=Math.log(2);class ek{constructor(e){const n=i=>parseInt(Math.log(i)/ZR,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const no=function(t,e,n,s){t.sort(e);const r=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=t[l],f=n?n(d):d,new Ne(f,d.node,Ne.BLACK,null,null);{const p=parseInt(u/2,10)+l,m=r(l,p),_=r(p+1,c);return d=t[p],f=n?n(d):d,new Ne(f,d.node,Ne.BLACK,m,_)}},i=function(l){let c=null,u=null,d=t.length;const f=function(m,_){const v=d-m,C=d;d-=m;const S=r(v+1,C),M=t[v],k=n?n(M):M;p(new Ne(k,M.node,_,null,S))},p=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const _=l.nextBitIsOne(),v=Math.pow(2,l.count-(m+1));_?f(v,Ne.BLACK):(f(v,Ne.BLACK),f(v,Ne.RED))}return u},o=new ek(t.length),a=i(o);return new Qe(s||e,a)};/**
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
 */let ga;const fs={};class Bt{static get Default(){return O(fs&&We,"ChildrenNode.ts has not been loaded"),ga=ga||new Bt({".priority":fs},{".priority":We}),ga}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Us(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Qe?n:null}hasIndex(e){return Xt(this.indexSet_,e.toString())}addIndex(e,n){O(e!==Ps,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=n.getIterator(ne.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=no(s,e.getCompare()):a=fs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Bt(u,c)}addToIndexes(e,n){const s=Vi(this.indexes_,(r,i)=>{const o=Us(this.indexSet_,i);if(O(o,"Missing index implementation for "+i),r===fs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ne.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),no(a,o.getCompare())}else return fs;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new ne(e.name,a))),l.insert(e,e.node)}});return new Bt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Vi(this.indexes_,r=>{if(r===fs)return r;{const i=n.get(e.name);return i?r.remove(new ne(e.name,i)):r}});return new Bt(s,this.indexSet_)}}/**
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
 */let fr;class le{static get EMPTY_NODE(){return fr||(fr=new le(new Qe(Pc),null,Bt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&rm(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fr}updatePriority(e){return this.children_.isEmpty()?this:new le(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?fr:n}}getChild(e){const n=te(e);return n===null?this:this.getImmediateChild(n).getChild(be(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(O(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ne(e,n);let r,i;n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?fr:this.priorityNode_;return new le(r,o,i)}}updateChild(e,n){const s=te(e);if(s===null)return n;{O(te(e)!==".priority"||Cn(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(be(e),n);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,r=0,i=!0;if(this.forEachChild(We,(o,a)=>{n[o]=a.val(e),s++,i&&le.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+sm(this.getPriority().val())+":"),this.forEachChild(We,(n,s)=>{const r=s.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":Ag(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new ne(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ne(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ne(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,ne.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,ne.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===si?-1:0}withIndex(e){if(e===Ps||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new le(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ps||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(We),r=n.getIterator(We);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ps?null:this.indexMap_.get(e.toString())}}le.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class tk extends le{constructor(){super(new Qe(Pc),le.EMPTY_NODE,Bt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return le.EMPTY_NODE}isEmpty(){return!1}}const si=new tk;Object.defineProperties(ne,{MIN:{value:new ne(Hs,le.EMPTY_NODE)},MAX:{value:new ne(Qn,si)}});nm.__EMPTY_NODE=le.EMPTY_NODE;Oe.__childrenNodeConstructor=le;YR(si);JR(si);/**
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
 */const nk=!0;function He(t,e=null){if(t===null)return le.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Oe(n,He(e))}if(!(t instanceof Array)&&nk){const n=[];let s=!1;if(dt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=He(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ne(o,l)))}}),n.length===0)return le.EMPTY_NODE;const i=no(n,qR,o=>o.name,Pc);if(s){const o=no(n,We.getCompare());return new le(i,He(e),new Bt({".priority":o},{".priority":We}))}else return new le(i,He(e),Bt.Default)}else{let n=le.EMPTY_NODE;return dt(t,(s,r)=>{if(Xt(t,s)&&s.substring(0,1)!=="."){const i=He(r);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(s,i))}}),n.updatePriority(He(e))}}QR(He);/**
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
 */class sk extends Uo{constructor(e){super(),this.indexPath_=e,O(!ee(e)&&te(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),r=this.extractChild(n.node),i=s.compareTo(r);return i===0?tr(e.name,n.name):i}makePost(e,n){const s=He(e),r=le.EMPTY_NODE.updateChild(this.indexPath_,s);return new ne(n,r)}maxPost(){const e=le.EMPTY_NODE.updateChild(this.indexPath_,si);return new ne(Qn,e)}toString(){return Xg(this.indexPath_,0).join("/")}}/**
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
 */class rk extends Uo{compare(e,n){const s=e.node.compareTo(n.node);return s===0?tr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ne.MIN}maxPost(){return ne.MAX}makePost(e,n){const s=He(e);return new ne(n,s)}toString(){return".value"}}const ik=new rk;/**
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
 */function ok(t){return{type:"value",snapshotNode:t}}function ak(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function lk(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function uf(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ck(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Oc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=We}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Hs}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Qn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===We}copy(){const e=new Oc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function df(t){const e={};if(t.isDefault())return e;let n;if(t.index_===We?n="$priority":t.index_===ik?n="$value":t.index_===Ps?n="$key":(O(t.index_ instanceof sk,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ue(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ue(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ue(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ue(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ue(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ff(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==We&&(e.i=t.index_.toString()),e}/**
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
 */class so extends Yg{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=ti("p:rest:"),this.listens_={}}listen(e,n,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=so.getListenId_(e,s),a={};this.listens_[o]=a;const l=df(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(i,d,!1,s),Us(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",r(f,null)}})}unlisten(e,n){const s=so.getListenId_(e,n);delete this.listens_[s]}get(e){const n=df(e._queryParams),s=e._path.toString(),r=new sc;return this.restRequest_(s+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(n.auth=r.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Qs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=jr(a.responseText)}catch{it("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&it("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class uk{constructor(){this.rootNode_=le.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ro(){return{value:null,children:new Map}}function am(t,e,n){if(ee(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=te(e);t.children.has(s)||t.children.set(s,ro());const r=t.children.get(s);e=be(e),am(r,e,n)}}function dl(t,e,n){t.value!==null?n(e,t.value):dk(t,(s,r)=>{const i=new we(e.toString()+"/"+s);dl(r,i,n)})}function dk(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class fk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&dt(this.last_,(s,r)=>{n[s]=n[s]-r}),this.last_=e,n}}/**
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
 */const hf=10*1e3,hk=30*1e3,pk=5*60*1e3;class gk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new fk(e);const s=hf+(hk-hf)*Math.random();Tr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;dt(e,(r,i)=>{i>0&&Xt(this.statsToReport_,r)&&(n[r]=i,s=!0)}),s&&this.server_.reportStats(n),Tr(this.reportStats_.bind(this),Math.floor(Math.random()*2*pk))}}/**
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
 */var Pt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Pt||(Pt={}));function lm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function cm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function um(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class io{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Pt.ACK_USER_WRITE,this.source=lm()}operationForChild(e){if(ee(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new we(e));return new io(fe(),n,this.revert)}}else return O(te(this.path)===e,"operationForChild called for unrelated child."),new io(be(this.path),this.affectedTree,this.revert)}}/**
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
 */class Jn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Pt.OVERWRITE}operationForChild(e){return ee(this.path)?new Jn(this.source,fe(),this.snap.getImmediateChild(e)):new Jn(this.source,be(this.path),this.snap)}}/**
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
 */class Gr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Pt.MERGE}operationForChild(e){if(ee(this.path)){const n=this.children.subtree(new we(e));return n.isEmpty()?null:n.value?new Jn(this.source,fe(),n.value):new Gr(this.source,fe(),n)}else return O(te(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Gr(this.source,be(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Nc{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ee(e))return this.isFullyInitialized()&&!this.filtered_;const n=te(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function mk(t,e,n,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(ck(o.childName,o.snapshotNode))}),hr(t,r,"child_removed",e,s,n),hr(t,r,"child_added",e,s,n),hr(t,r,"child_moved",i,s,n),hr(t,r,"child_changed",e,s,n),hr(t,r,"value",e,s,n),r}function hr(t,e,n,s,r,i){const o=s.filter(a=>a.type===n);o.sort((a,l)=>vk(t,a,l)),o.forEach(a=>{const l=_k(t,a,i);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function _k(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function vk(t,e,n){if(e.childName==null||n.childName==null)throw Ys("Should only compare child_ events.");const s=new ne(e.childName,e.snapshotNode),r=new ne(n.childName,n.snapshotNode);return t.index_.compare(s,r)}/**
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
 */function dm(t,e){return{eventCache:t,serverCache:e}}function Rr(t,e,n,s){return dm(new Nc(e,n,s),t.serverCache)}function fm(t,e,n,s){return dm(t.eventCache,new Nc(e,n,s))}function fl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Xn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let ma;const yk=()=>(ma||(ma=new Qe(iR)),ma);class ve{static fromObject(e){let n=new ve(null);return dt(e,(s,r)=>{n=n.set(new we(s),r)}),n}constructor(e,n=yk()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:fe(),value:this.value};if(ee(e))return null;{const s=te(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(be(e),n);return i!=null?{path:De(new we(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ee(e))return this;{const n=te(e),s=this.children.get(n);return s!==null?s.subtree(be(e)):new ve(null)}}set(e,n){if(ee(e))return new ve(n,this.children);{const s=te(e),i=(this.children.get(s)||new ve(null)).set(be(e),n),o=this.children.insert(s,i);return new ve(this.value,o)}}remove(e){if(ee(e))return this.children.isEmpty()?new ve(null):new ve(null,this.children);{const n=te(e),s=this.children.get(n);if(s){const r=s.remove(be(e));let i;return r.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,r),this.value===null&&i.isEmpty()?new ve(null):new ve(this.value,i)}else return this}}get(e){if(ee(e))return this.value;{const n=te(e),s=this.children.get(n);return s?s.get(be(e)):null}}setTree(e,n){if(ee(e))return n;{const s=te(e),i=(this.children.get(s)||new ve(null)).setTree(be(e),n);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new ve(this.value,o)}}fold(e){return this.fold_(fe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(De(e,r),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,fe(),n)}findOnPath_(e,n,s){const r=this.value?s(n,this.value):!1;if(r)return r;if(ee(e))return null;{const i=te(e),o=this.children.get(i);return o?o.findOnPath_(be(e),De(n,i),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,fe(),n)}foreachOnPath_(e,n,s){if(ee(e))return this;{this.value&&s(n,this.value);const r=te(e),i=this.children.get(r);return i?i.foreachOnPath_(be(e),De(n,r),s):new ve(null)}}foreach(e){this.foreach_(fe(),e)}foreach_(e,n){this.children.inorderTraversal((s,r)=>{r.foreach_(De(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class wt{constructor(e){this.writeTree_=e}static empty(){return new wt(new ve(null))}}function kr(t,e,n){if(ee(e))return new wt(new ve(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=lt(r,e);return i=i.updateChild(o,n),new wt(t.writeTree_.set(r,i))}else{const r=new ve(n),i=t.writeTree_.setTree(e,r);return new wt(i)}}}function pf(t,e,n){let s=t;return dt(n,(r,i)=>{s=kr(s,De(e,r),i)}),s}function gf(t,e){if(ee(e))return wt.empty();{const n=t.writeTree_.setTree(e,new ve(null));return new wt(n)}}function hl(t,e){return rs(t,e)!=null}function rs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(lt(n.path,e)):null}function mf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(We,(s,r)=>{e.push(new ne(s,r))}):t.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new ne(s,r.value))}),e}function bn(t,e){if(ee(e))return t;{const n=rs(t,e);return n!=null?new wt(new ve(n)):new wt(t.writeTree_.subtree(e))}}function pl(t){return t.writeTree_.isEmpty()}function Bs(t,e){return hm(fe(),t.writeTree_,e)}function hm(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(O(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):n=hm(De(t,r),i,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(De(t,".priority"),s)),n}}/**
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
 */function pm(t,e){return ym(e,t)}function bk(t,e,n,s,r){O(s>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:r}),r&&(t.visibleWrites=kr(t.visibleWrites,e,n)),t.lastWriteId=s}function wk(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Ek(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);O(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let r=s.visible,i=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Ik(a,s.path)?r=!1:vt(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return Ck(t),!0;if(s.snap)t.visibleWrites=gf(t.visibleWrites,s.path);else{const a=s.children;dt(a,l=>{t.visibleWrites=gf(t.visibleWrites,De(s.path,l))})}return!0}else return!1}function Ik(t,e){if(t.snap)return vt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&vt(De(t.path,n),e))return!0;return!1}function Ck(t){t.visibleWrites=gm(t.allWrites,Sk,fe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Sk(t){return t.visible}function gm(t,e,n){let s=wt.empty();for(let r=0;r<t.length;++r){const i=t[r];if(e(i)){const o=i.path;let a;if(i.snap)vt(n,o)?(a=lt(n,o),s=kr(s,a,i.snap)):vt(o,n)&&(a=lt(o,n),s=kr(s,fe(),i.snap.getChild(a)));else if(i.children){if(vt(n,o))a=lt(n,o),s=pf(s,a,i.children);else if(vt(o,n))if(a=lt(o,n),ee(a))s=pf(s,fe(),i.children);else{const l=Us(i.children,te(a));if(l){const c=l.getChild(be(a));s=kr(s,fe(),c)}}}else throw Ys("WriteRecord should have .snap or .children")}}return s}function mm(t,e,n,s,r){if(!s&&!r){const i=rs(t.visibleWrites,e);if(i!=null)return i;{const o=bn(t.visibleWrites,e);if(pl(o))return n;if(n==null&&!hl(o,fe()))return null;{const a=n||le.EMPTY_NODE;return Bs(o,a)}}}else{const i=bn(t.visibleWrites,e);if(!r&&pl(i))return n;if(!r&&n==null&&!hl(i,fe()))return null;{const o=function(c){return(c.visible||r)&&(!s||!~s.indexOf(c.writeId))&&(vt(c.path,e)||vt(e,c.path))},a=gm(t.allWrites,o,e),l=n||le.EMPTY_NODE;return Bs(a,l)}}}function Tk(t,e,n){let s=le.EMPTY_NODE;const r=rs(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(We,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(n){const i=bn(t.visibleWrites,e);return n.forEachChild(We,(o,a)=>{const l=Bs(bn(i,new we(o)),a);s=s.updateImmediateChild(o,l)}),mf(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=bn(t.visibleWrites,e);return mf(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Rk(t,e,n,s,r){O(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=De(e,n);if(hl(t.visibleWrites,i))return null;{const o=bn(t.visibleWrites,i);return pl(o)?r.getChild(n):Bs(o,r.getChild(n))}}function kk(t,e,n,s){const r=De(e,n),i=rs(t.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(n)){const o=bn(t.visibleWrites,r);return Bs(o,s.getNode().getImmediateChild(n))}else return null}function Ak(t,e){return rs(t.visibleWrites,e)}function Pk(t,e,n,s,r,i,o){let a;const l=bn(t.visibleWrites,e),c=rs(l,fe());if(c!=null)a=c;else if(n!=null)a=Bs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=f.getNext();for(;p&&u.length<r;)d(p,s)!==0&&u.push(p),p=f.getNext();return u}else return[]}function Ok(){return{visibleWrites:wt.empty(),allWrites:[],lastWriteId:-1}}function gl(t,e,n,s){return mm(t.writeTree,t.treePath,e,n,s)}function _m(t,e){return Tk(t.writeTree,t.treePath,e)}function _f(t,e,n,s){return Rk(t.writeTree,t.treePath,e,n,s)}function oo(t,e){return Ak(t.writeTree,De(t.treePath,e))}function Nk(t,e,n,s,r,i){return Pk(t.writeTree,t.treePath,e,n,s,r,i)}function xc(t,e,n){return kk(t.writeTree,t.treePath,e,n)}function vm(t,e){return ym(De(t.treePath,e),t.writeTree)}function ym(t,e){return{treePath:t,writeTree:e}}/**
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
 */class xk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;O(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),O(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(s,uf(s,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(s,lk(s,r.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(s,ak(s,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(s,uf(s,e.snapshotNode,r.oldSnap));else throw Ys("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Mk{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const bm=new Mk;class Mc{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Nc(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return xc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Xn(this.viewCache_),i=Nk(this.writes_,r,n,1,s,e);return i.length===0?null:i[0]}}function Dk(t,e){O(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Lk(t,e,n,s,r){const i=new xk;let o,a;if(n.type===Pt.OVERWRITE){const c=n;c.source.fromUser?o=ml(t,e,c.path,c.snap,s,r,i):(O(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ee(c.path),o=ao(t,e,c.path,c.snap,s,r,a,i))}else if(n.type===Pt.MERGE){const c=n;c.source.fromUser?o=Uk(t,e,c.path,c.children,s,r,i):(O(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=_l(t,e,c.path,c.children,s,r,a,i))}else if(n.type===Pt.ACK_USER_WRITE){const c=n;c.revert?o=Hk(t,e,c.path,s,r,i):o=$k(t,e,c.path,c.affectedTree,s,r,i)}else if(n.type===Pt.LISTEN_COMPLETE)o=jk(t,e,n.path,s,i);else throw Ys("Unknown operation type: "+n.type);const l=i.getChanges();return Fk(e,o,l),{viewCache:o,changes:l}}function Fk(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=fl(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push(ok(fl(e)))}}function wm(t,e,n,s,r,i){const o=e.eventCache;if(oo(s,n)!=null)return e;{let a,l;if(ee(n))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Xn(e),u=c instanceof le?c:le.EMPTY_NODE,d=_m(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const c=gl(s,Xn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=te(n);if(c===".priority"){O(Cn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=_f(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=be(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=_f(s,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=xc(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,r,i):a=o.getNode()}}return Rr(e,a,o.isFullyInitialized()||ee(n),t.filter.filtersNodes())}}function ao(t,e,n,s,r,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ee(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=te(n);if(!l.isCompleteForPath(n)&&Cn(n)>1)return e;const m=be(n),v=l.getNode().getImmediateChild(p).updateChild(m,s);p===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),p,v,m,bm,null)}const d=fm(e,c,l.isFullyInitialized()||ee(n),u.filtersNodes()),f=new Mc(r,d,i);return wm(t,d,n,r,f,a)}function ml(t,e,n,s,r,i,o){const a=e.eventCache;let l,c;const u=new Mc(r,e,i);if(ee(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Rr(e,c,!0,t.filter.filtersNodes());else{const d=te(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Rr(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=be(n),p=a.getNode().getImmediateChild(d);let m;if(ee(f))m=s;else{const _=u.getCompleteChild(d);_!=null?Jg(f)===".priority"&&_.getChild(Zg(f)).isEmpty()?m=_:m=_.updateChild(f,s):m=le.EMPTY_NODE}if(p.equals(m))l=e;else{const _=t.filter.updateChild(a.getNode(),d,m,f,u,o);l=Rr(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function vf(t,e){return t.eventCache.isCompleteForChild(e)}function Uk(t,e,n,s,r,i,o){let a=e;return s.foreach((l,c)=>{const u=De(n,l);vf(e,te(u))&&(a=ml(t,a,u,c,r,i,o))}),s.foreach((l,c)=>{const u=De(n,l);vf(e,te(u))||(a=ml(t,a,u,c,r,i,o))}),a}function yf(t,e,n){return n.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function _l(t,e,n,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ee(n)?c=s:c=new ve(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),m=yf(t,p,f);l=ao(t,l,new we(d),m,r,i,o,a)}}),c.children.inorderTraversal((d,f)=>{const p=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!p){const m=e.serverCache.getNode().getImmediateChild(d),_=yf(t,m,f);l=ao(t,l,new we(d),_,r,i,o,a)}}),l}function $k(t,e,n,s,r,i,o){if(oo(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(ee(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ao(t,e,n,l.getNode().getChild(n),r,i,a,o);if(ee(n)){let c=new ve(null);return l.getNode().forEachChild(Ps,(u,d)=>{c=c.set(new we(u),d)}),_l(t,e,n,c,r,i,a,o)}else return e}else{let c=new ve(null);return s.foreach((u,d)=>{const f=De(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),_l(t,e,n,c,r,i,a,o)}}function jk(t,e,n,s,r){const i=e.serverCache,o=fm(e,i.getNode(),i.isFullyInitialized()||ee(n),i.isFiltered());return wm(t,o,n,s,bm,r)}function Hk(t,e,n,s,r,i){let o;if(oo(s,n)!=null)return e;{const a=new Mc(s,e,r),l=e.eventCache.getNode();let c;if(ee(n)||te(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=gl(s,Xn(e));else{const d=e.serverCache.getNode();O(d instanceof le,"serverChildren would be complete if leaf node"),u=_m(s,d)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=te(n);let d=xc(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,be(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,le.EMPTY_NODE,be(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=gl(s,Xn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||oo(s,fe())!=null,Rr(e,c,o,t.filter.filtersNodes())}}function Bk(t,e){const n=Xn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ee(e)&&!n.getImmediateChild(te(e)).isEmpty())?n.getChild(e):null}function bf(t,e,n,s){e.type===Pt.MERGE&&e.source.queryId!==null&&(O(Xn(t.viewCache_),"We should always have a full cache before handling merges"),O(fl(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,i=Lk(t.processor_,r,e,n,s);return Dk(t.processor_,i.viewCache),O(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,Wk(t,i.changes,i.viewCache.eventCache.getNode(),null)}function Wk(t,e,n,s){const r=s?[s]:t.eventRegistrations_;return mk(t.eventGenerator_,e,n,r)}/**
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
 */let wf;function Vk(t){O(!wf,"__referenceConstructor has already been defined"),wf=t}function Dc(t,e,n,s){const r=e.source.queryId;if(r!==null){const i=t.views.get(r);return O(i!=null,"SyncTree gave us an op for an invalid query."),bf(i,e,n,s)}else{let i=[];for(const o of t.views.values())i=i.concat(bf(o,e,n,s));return i}}function Lc(t,e){let n=null;for(const s of t.views.values())n=n||Bk(s,e);return n}/**
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
 */let Ef;function Kk(t){O(!Ef,"__referenceConstructor has already been defined"),Ef=t}class If{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ve(null),this.pendingWriteTree_=Ok(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function zk(t,e,n,s,r){return bk(t.pendingWriteTree_,e,n,s,r),r?jo(t,new Jn(lm(),e,n)):[]}function _s(t,e,n=!1){const s=wk(t.pendingWriteTree_,e);if(Ek(t.pendingWriteTree_,e)){let i=new ve(null);return s.snap!=null?i=i.set(fe(),!0):dt(s.children,o=>{i=i.set(new we(o),!0)}),jo(t,new io(s.path,i,n))}else return[]}function $o(t,e,n){return jo(t,new Jn(cm(),e,n))}function Gk(t,e,n){const s=ve.fromObject(n);return jo(t,new Gr(cm(),e,s))}function qk(t,e,n,s){const r=Sm(t,s);if(r!=null){const i=Tm(r),o=i.path,a=i.queryId,l=lt(o,e),c=new Jn(um(a),l,n);return Rm(t,o,c)}else return[]}function Yk(t,e,n,s){const r=Sm(t,s);if(r){const i=Tm(r),o=i.path,a=i.queryId,l=lt(o,e),c=ve.fromObject(n),u=new Gr(um(a),l,c);return Rm(t,o,u)}else return[]}function Em(t,e,n){const r=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=lt(o,e),c=Lc(a,l);if(c)return c});return mm(r,e,i,n,!0)}function jo(t,e){return Im(e,t.syncPointTree_,null,pm(t.pendingWriteTree_,fe()))}function Im(t,e,n,s){if(ee(t.path))return Cm(t,e,n,s);{const r=e.get(fe());n==null&&r!=null&&(n=Lc(r,fe()));let i=[];const o=te(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=vm(s,o);i=i.concat(Im(a,l,c,u))}return r&&(i=i.concat(Dc(r,t,s,n))),i}}function Cm(t,e,n,s){const r=e.get(fe());n==null&&r!=null&&(n=Lc(r,fe()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=vm(s,o),u=t.operationForChild(o);u&&(i=i.concat(Cm(u,a,l,c)))}),r&&(i=i.concat(Dc(r,t,s,n))),i}function Sm(t,e){return t.tagToQueryMap.get(e)}function Tm(t){const e=t.indexOf("$");return O(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new we(t.substr(0,e))}}function Rm(t,e,n){const s=t.syncPointTree_.get(e);O(s,"Missing sync point for query tag that we're tracking");const r=pm(t.pendingWriteTree_,e);return Dc(s,n,r,null)}/**
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
 */class Fc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Fc(n)}node(){return this.node_}}class Uc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=De(this.path_,e);return new Uc(this.syncTree_,n)}node(){return Em(this.syncTree_,this.path_)}}const Qk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Cf=function(t,e,n){if(!t||typeof t!="object")return t;if(O(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Jk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Xk(t[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Jk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:O(!1,"Unexpected server value: "+t)}},Xk=function(t,e,n){t.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&O(!1,"Unexpected increment value: "+s);const r=e.node();if(O(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},Zk=function(t,e,n,s){return $c(e,new Uc(n,t),s)},eA=function(t,e,n){return $c(t,new Fc(e),n)};function $c(t,e,n){const s=t.getPriority().val(),r=Cf(s,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=Cf(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new Oe(a,He(r)):t}else{const o=t;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new Oe(r))),o.forEachChild(We,(a,l)=>{const c=$c(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
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
 */class jc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Hc(t,e){let n=e instanceof we?e:new we(e),s=t,r=te(n);for(;r!==null;){const i=Us(s.node.children,r)||{children:{},childCount:0};s=new jc(r,s,i),n=be(n),r=te(n)}return s}function nr(t){return t.node.value}function km(t,e){t.node.value=e,vl(t)}function Am(t){return t.node.childCount>0}function tA(t){return nr(t)===void 0&&!Am(t)}function Ho(t,e){dt(t.node.children,(n,s)=>{e(new jc(n,t,s))})}function Pm(t,e,n,s){n&&!s&&e(t),Ho(t,r=>{Pm(r,e,!0,s)}),n&&s&&e(t)}function nA(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ri(t){return new we(t.parent===null?t.name:ri(t.parent)+"/"+t.name)}function vl(t){t.parent!==null&&sA(t.parent,t.name,t)}function sA(t,e,n){const s=tA(n),r=Xt(t.node.children,e);s&&r?(delete t.node.children[e],t.node.childCount--,vl(t)):!s&&!r&&(t.node.children[e]=n.node,t.node.childCount++,vl(t))}/**
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
 */const rA=/[\[\].#$\/\u0000-\u001F\u007F]/,iA=/[\[\].#$\u0000-\u001F\u007F]/,_a=10*1024*1024,Om=function(t){return typeof t=="string"&&t.length!==0&&!rA.test(t)},oA=function(t){return typeof t=="string"&&t.length!==0&&!iA.test(t)},aA=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),oA(t)},Nm=function(t,e,n){const s=n instanceof we?new jR(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Mn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Mn(s)+" with contents = "+e.toString());if(Pg(e))throw new Error(t+"contains "+e.toString()+" "+Mn(s));if(typeof e=="string"&&e.length>_a/3&&Po(e)>_a)throw new Error(t+"contains a string greater than "+_a+" utf8 bytes "+Mn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(dt(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Om(o)))throw new Error(t+" contains an invalid key ("+o+") "+Mn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);HR(s,o),Nm(t,a,s),BR(s)}),r&&i)throw new Error(t+' contains ".value" child '+Mn(s)+" in addition to actual children.")}},lA=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Om(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!aA(n))throw new Error(KE(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class cA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function uA(t,e){let n=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();n!==null&&!em(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(r)}n&&t.eventLists_.push(n)}function is(t,e,n){uA(t,n),dA(t,s=>vt(s,e)||vt(e,s))}function dA(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const r=t.eventLists_[s];if(r){const i=r.path;e(i)?(fA(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function fA(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Bn&&je("event: "+n.toString()),ni(s)}}}/**
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
 */const hA="repo_interrupt",pA=25;class gA{constructor(e,n,s,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new cA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ro(),this.transactionQueueTree_=new jc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function mA(t,e,n){if(t.stats_=Rc(t.repoInfo_),t.forceRestClient_||dR())t.server_=new so(t.repoInfo_,(s,r,i,o)=>{Sf(t,s,r,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Tf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ue(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Vt(t.repoInfo_,e,(s,r,i,o)=>{Sf(t,s,r,i,o)},s=>{Tf(t,s)},s=>{vA(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=mR(t.repoInfo_,()=>new gk(t.stats_,t.server_)),t.infoData_=new uk,t.infoSyncTree_=new If({startListening:(s,r,i,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=$o(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Bc(t,"connected",!1),t.serverSyncTree_=new If({startListening:(s,r,i,o)=>(t.server_.listen(s,i,r,(a,l)=>{const c=o(a,l);is(t.eventQueue_,s._path,c)}),[]),stopListening:(s,r)=>{t.server_.unlisten(s,r)}})}function _A(t){const n=t.infoData_.getNode(new we(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function xm(t){return Qk({timestamp:_A(t)})}function Sf(t,e,n,s,r){t.dataUpdateCount++;const i=new we(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(s){const l=Vi(n,c=>He(c));o=Yk(t.serverSyncTree_,i,l,r)}else{const l=He(n);o=qk(t.serverSyncTree_,i,l,r)}else if(s){const l=Vi(n,c=>He(c));o=Gk(t.serverSyncTree_,i,l)}else{const l=He(n);o=$o(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Vc(t,i)),is(t.eventQueue_,a,o)}function Tf(t,e){Bc(t,"connected",e),e===!1&&bA(t)}function vA(t,e){dt(e,(n,s)=>{Bc(t,n,s)})}function Bc(t,e,n){const s=new we("/.info/"+e),r=He(n);t.infoData_.updateSnapshot(s,r);const i=$o(t.infoSyncTree_,s,r);is(t.eventQueue_,s,i)}function yA(t){return t.nextWriteId_++}function bA(t){Mm(t,"onDisconnectEvents");const e=xm(t),n=ro();dl(t.onDisconnect_,fe(),(r,i)=>{const o=Zk(r,i,t.serverSyncTree_,e);am(n,r,o)});let s=[];dl(n,fe(),(r,i)=>{s=s.concat($o(t.serverSyncTree_,r,i));const o=CA(t,r);Vc(t,o)}),t.onDisconnect_=ro(),is(t.eventQueue_,fe(),s)}function wA(t){t.persistentConnection_&&t.persistentConnection_.interrupt(hA)}function Mm(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),je(n,...e)}function Dm(t,e,n){return Em(t.serverSyncTree_,e,n)||le.EMPTY_NODE}function Wc(t,e=t.transactionQueueTree_){if(e||Bo(t,e),nr(e)){const n=Fm(t,e);O(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&EA(t,ri(e),n)}else Am(e)&&Ho(e,n=>{Wc(t,n)})}function EA(t,e,n){const s=n.map(c=>c.currentWriteId),r=Dm(t,e,s);let i=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];O(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=lt(e,u.path);i=i.updateChild(d,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Mm(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(_s(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Bo(t,Hc(t.transactionQueueTree_,e)),Wc(t,t.transactionQueueTree_),is(t.eventQueue_,e,u);for(let f=0;f<d.length;f++)ni(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{it("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Vc(t,e)}},o)}function Vc(t,e){const n=Lm(t,e),s=ri(n),r=Fm(t,n);return IA(t,r,s),s}function IA(t,e,n){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=lt(n,l.path);let u=!1,d;if(O(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,r=r.concat(_s(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=pA)u=!0,d="maxretry",r=r.concat(_s(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Dm(t,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){Nm("transaction failed: Data returned ",p,l.path);let m=He(p);typeof p=="object"&&p!=null&&Xt(p,".priority")||(m=m.updatePriority(f.getPriority()));const v=l.currentWriteId,C=xm(t),S=eA(m,f,C);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=S,l.currentWriteId=yA(t),o.splice(o.indexOf(v),1),r=r.concat(zk(t.serverSyncTree_,l.path,S,l.currentWriteId,l.applyLocally)),r=r.concat(_s(t.serverSyncTree_,v,!0))}else u=!0,d="nodata",r=r.concat(_s(t.serverSyncTree_,l.currentWriteId,!0))}is(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}Bo(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)ni(s[a]);Wc(t,t.transactionQueueTree_)}function Lm(t,e){let n,s=t.transactionQueueTree_;for(n=te(e);n!==null&&nr(s)===void 0;)s=Hc(s,n),e=be(e),n=te(e);return s}function Fm(t,e){const n=[];return Um(t,e,n),n.sort((s,r)=>s.order-r.order),n}function Um(t,e,n){const s=nr(e);if(s)for(let r=0;r<s.length;r++)n.push(s[r]);Ho(e,r=>{Um(t,r,n)})}function Bo(t,e){const n=nr(e);if(n){let s=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[s]=n[r],s++);n.length=s,km(e,n.length>0?n:void 0)}Ho(e,s=>{Bo(t,s)})}function CA(t,e){const n=ri(Lm(t,e)),s=Hc(t.transactionQueueTree_,e);return nA(s,r=>{va(t,r)}),va(t,s),Pm(s,r=>{va(t,r)}),n}function va(t,e){const n=nr(e);if(n){const s=[];let r=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(O(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(O(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(_s(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?km(e,void 0):n.length=i+1,is(t.eventQueue_,ri(e),r);for(let o=0;o<s.length;o++)ni(s[o])}}/**
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
 */function SA(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let r=n[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function TA(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):it(`Invalid query segment '${n}' in query '${t}'`)}return e}const Rf=function(t,e){const n=RA(t),s=n.namespace;n.domain==="firebase.com"&&Yt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Yt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||sR();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Bg(n.host,n.secure,s,r,e,"",s!==n.subdomain),path:new we(n.pathString)}},RA=function(t){let e="",n="",s="",r="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(r=SA(t.substring(u,d)));const f=TA(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),i=s}"ns"in f&&(i=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
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
 */class Kc{constructor(e,n,s,r){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=r}get key(){return ee(this._path)?null:Jg(this._path)}get ref(){return new sr(this._repo,this._path)}get _queryIdentifier(){const e=ff(this._queryParams),n=Sc(e);return n==="{}"?"default":n}get _queryObject(){return ff(this._queryParams)}isEqual(e){if(e=Zt(e),!(e instanceof Kc))return!1;const n=this._repo===e._repo,s=em(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+$R(this._path)}}class sr extends Kc{constructor(e,n){super(e,n,new Oc,!1)}get parent(){const e=Zg(this._path);return e===null?null:new sr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}Vk(sr);Kk(sr);/**
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
 */const kA="FIREBASE_DATABASE_EMULATOR_HOST",yl={};let AA=!1;function PA(t,e,n,s){t.repoInfo_=new Bg(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function OA(t,e,n,s,r){let i=s||t.options.databaseURL;i===void 0&&(t.options.projectId||Yt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),je("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Rf(i,r),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[kA]),c?(l=!0,i=`http://${c}?ns=${a.namespace}`,o=Rf(i,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new As(As.OWNER):new hR(t.name,t.options,e);lA("Invalid Firebase Database URL",o),ee(o.path)||Yt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=xA(a,t,u,new fR(t,n));return new MA(d,t)}function NA(t,e){const n=yl[e];(!n||n[t.key]!==t)&&Yt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),wA(t),delete n[t.key]}function xA(t,e,n,s){let r=yl[e.name];r||(r={},yl[e.name]=r);let i=r[t.toURLString()];return i&&Yt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new gA(t,AA,n,s),r[t.toURLString()]=i,i}class MA{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(mA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new sr(this._repo,fe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(NA(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Yt("Cannot call "+e+" on a deleted database.")}}function At(t=_p(),e){const n=ac(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=AE("database");s&&DA(n,...s)}return n}function DA(t,e,n,s={}){t=Zt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Yt("Cannot call useEmulator() after instance has already been initialized.");const r=t._repoInternal;let i;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&Yt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new As(As.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:PE(s.mockUserToken,t.app.options.projectId);i=new As(o)}PA(r,e,n,i)}/**
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
 */function LA(t){XT(Js),$s(new Gn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return OA(s,r,i,n)},"PUBLIC").setMultipleInstances(!0)),yn(Gd,qd,t),yn(Gd,qd,"esm2017")}Vt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Vt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};LA();const FA={name:"TaskList",components:{MainHeader:JT,Icon:ec},setup(){const t=Q({}),e=Q(!1),n=Q(""),s=Q(null);let r=null;const i=Xi().onAuthStateChanged(c=>{c?(s.value=c.uid,o()):(s.value=null,t.value={},r&&(At().ref("tasks").off("value",r),r=null))});function o(){e.value=!0;const c=At().ref("tasks");r&&c.off("value",r),r=c.orderByChild("userUID").equalTo(s.value).on("value",u=>{t.value=u.val()||{},e.value=!1})}function a(){if(!s.value||!n.value.trim())return;At().ref("tasks").push({taskText:n.value,userUID:s.value}).then(()=>{n.value=""}).catch(u=>{console.error("Error adding task:",u)})}function l(c){const u=At().ref("tasks").child(c);u.once("value",d=>{const f=d.val();f&&f.userUID===s.value?u.remove().then(()=>console.log("Task removed!")).catch(p=>console.error("Error removing task:",p)):console.error("Access denied: task doesn't belong to user.")})}return yo(()=>{r&&At().ref("tasks").off("value",r),i()}),{taskArray:t,isLoading:e,newTaskText:n,addTask:a,deleteTask:l}}},UA=t=>(th("data-v-e3d8c61a"),t=t(),nh(),t),$A={class:"dark:bg-gray-900 min-h-screen p-4"},jA={key:0,class:"flex justify-center items-center h-32"},HA=UA(()=>Z("div",{class:"spinner"},null,-1)),BA=[HA],WA={key:1,class:"flex justify-center"},VA={class:"task-list"},KA=["onClick"];function zA(t,e,n,s,r,i){const o=Ke("main-header"),a=Ke("Icon");return Fe(),Ye("div",$A,[oe(o),s.isLoading?(Fe(),Ye("div",jA,BA)):(Fe(),Ye("div",WA,[Z("ul",VA,[(Fe(!0),Ye(xe,null,gv(s.taskArray,(l,c)=>(Fe(),Ye("li",{key:c,class:"task-item"},[Z("span",null,Oi(l.taskText),1),Z("button",{onClick:u=>s.deleteTask(c),class:"delete-btn"},[oe(a,{icon:"mdi-light:delete"})],8,KA)]))),128))])]))])}const GA=Dt(FA,[["render",zA],["__scopeId","data-v-e3d8c61a"]]),qA={},YA=Z("br",null,null,-1),QA={class:"rounded-xl shadow-md p-10 w-fit mx-auto m-32-auto place-content-center grid place-items-center dark:bg-sky-950"};function JA(t,e){return Fe(),Ye(xe,null,[YA,Z("div",QA,[bo(t.$slots,"default")])],64)}const $m=Dt(qA,[["render",JA]]),XA={components:{ContentBox:$m,BaseHeader:_c}},ZA=Z("div",{class:"py-0 px-3 font-semibold dark:text-white"},"Task Project",-1),eP=Z("h2",{class:"font-semibold p-4 dark:text-white"},"Page Not Found",-1),tP={class:"dark:text-white"};function nP(t,e,n,s,r,i){const o=Ke("base-header"),a=Ke("router-link"),l=Ke("content-box");return Fe(),Ye(xe,null,[oe(o,null,{default:st(()=>[ZA]),_:1}),Z("section",null,[oe(l,{class:"dark:bg-sky-950"},{default:st(()=>[eP,Z("div",tP,[mn(" This page could not be found - do you want to return to "),oe(a,{to:"/login",class:"underline underline-offset-2"},{default:st(()=>[mn("login")]),_:1}),mn("? ")])]),_:1})])],64)}const sP=Dt(XA,[["render",nP]]),rP=rw({history:bb(),routes:[{path:"/",redirect:"login"},{path:"/login",component:TT},{path:"/tasks",component:GA},{path:"/:notFound(.*)",component:sP}]}),iP={async refreshTasks(t){At().ref("tasks").on("value",n=>{const s=n.val();t.commit("setTasks",s)})},async submitData(t,e){const n=e.toString();if(n!==""){const r=At().ref("tasks").push(),i=firebase.auth().currentUser.uid;r.set({taskText:n,userUID:i})}},async deleteTask(t,e){const n=e.toString();At().ref("/tasks/").on("value",function(s){At().ref("/tasks/"+n).remove().then(function(){console.log("Remove succeeded.")}).catch(function(i){console.log("Remove failed: "+i.message)})})}},oP={taskArray(t){return t.taskArray},taskText(t){return t.taskText}},aP={setTasks(t,e){t.taskArray=e,console.log(t.taskArray)},registerTasks(t,e){t.taskArray.push(e)}},lP={namespace:!0,state(){return{taskArray:[],taskText:""}},actions:iP,getters:oP,mutations:aP},cP=VT({modules:{task:lP}});const uP={},dP={class:"min-h-screen dark:bg-gray-900"};function fP(t,e){const n=Ke("router-view");return Fe(),Ye("div",dP,[oe(n)])}const hP=Dt(uP,[["render",fP]]),pP={},gP={class:"bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow dark:bg-sky-800 dark:text-white"};function mP(t,e){return Fe(),Ye("div",null,[Z("button",gP,[bo(t.$slots,"default")])])}const _P=Dt(pP,[["render",mP]]);var vP="firebase",yP="11.3.1";/**
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
 */yn(vP,yP,"app");const bP={apiKey:"AIzaSyD6rOiOiFAkse6Y3_hdzvP-Z1zRv20wrJg",authDomain:"taskproject-caf25.firebaseapp.com",projectId:"taskproject-caf25",storageBucket:"taskproject-caf25.firebasestorage.app",messagingSenderId:"1061401138693",appId:"1:1061401138693:web:03fc3339b03b4cb79eee6c",databaseURL:"https://taskproject-caf25-default-rtdb.firebaseio.com/"},rr=Ay(hP),wP=mp(bP);At(wP);rr.component("content-box",$m);rr.component("base-button",_P);rr.use(zy);rr.use(cP);rr.use(rP);rr.mount("#app");
