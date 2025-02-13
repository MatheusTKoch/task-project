(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Hl(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const we={},Is=[],wt=()=>{},R_=()=>!1,A_=/^on[^a-z]/,ko=t=>A_.test(t),Wl=t=>t.startsWith("onUpdate:"),ke=Object.assign,Vl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},P_=Object.prototype.hasOwnProperty,re=(t,e)=>P_.call(t,e),$=Array.isArray,Cs=t=>ii(t)==="[object Map]",Gs=t=>ii(t)==="[object Set]",Du=t=>ii(t)==="[object Date]",Y=t=>typeof t=="function",Re=t=>typeof t=="string",Dr=t=>typeof t=="symbol",he=t=>t!==null&&typeof t=="object",gh=t=>he(t)&&Y(t.then)&&Y(t.catch),mh=Object.prototype.toString,ii=t=>mh.call(t),x_=t=>ii(t).slice(8,-1),_h=t=>ii(t)==="[object Object]",Kl=t=>Re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ni=Hl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ro=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},N_=/-(\w)/g,Mt=Ro(t=>t.replace(N_,(e,n)=>n?n.toUpperCase():"")),O_=/\B([A-Z])/g,rs=Ro(t=>t.replace(O_,"-$1").toLowerCase()),Ao=Ro(t=>t.charAt(0).toUpperCase()+t.slice(1)),da=Ro(t=>t?`on${Ao(t)}`:""),Lr=(t,e)=>!Object.is(t,e),Oi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Hi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Wi=t=>{const e=parseFloat(t);return isNaN(e)?t:e},M_=t=>{const e=Re(t)?Number(t):NaN;return isNaN(e)?t:e};let Lu;const ja=()=>Lu||(Lu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ql(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Re(s)?U_(s):ql(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Re(t))return t;if(he(t))return t}}const D_=/;(?![^(]*\))/g,L_=/:([^]+)/,F_=/\/\*[^]*?\*\//g;function U_(t){const e={};return t.replace(F_,"").split(D_).forEach(n=>{if(n){const s=n.split(L_);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Fr(t){let e="";if(Re(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const s=Fr(t[n]);s&&(e+=s+" ")}else if(he(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const $_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",B_=Hl($_);function vh(t){return!!t||t===""}function j_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=zn(t[s],e[s]);return n}function zn(t,e){if(t===e)return!0;let n=Du(t),s=Du(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Dr(t),s=Dr(e),n||s)return t===e;if(n=$(t),s=$(e),n||s)return n&&s?j_(t,e):!1;if(n=he(t),s=he(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!zn(t[o],e[o]))return!1}}return String(t)===String(e)}function zl(t,e){return t.findIndex(n=>zn(n,e))}const Vi=t=>Re(t)?t:t==null?"":$(t)||he(t)&&(t.toString===mh||!Y(t.toString))?JSON.stringify(t,yh,2):String(t),yh=(t,e)=>e&&e.__v_isRef?yh(t,e.value):Cs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Gs(e)?{[`Set(${e.size})`]:[...e.values()]}:he(e)&&!$(e)&&!_h(e)?String(e):e;let rt;class bh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=rt,!e&&rt&&(this.index=(rt.scopes||(rt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=rt;try{return rt=this,e()}finally{rt=n}}}on(){rt=this}off(){rt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function H_(t){return new bh(t)}function W_(t,e=rt){e&&e.active&&e.effects.push(t)}function wh(){return rt}function V_(t){rt&&rt.cleanups.push(t)}const Gl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Eh=t=>(t.w&wn)>0,Ih=t=>(t.n&wn)>0,K_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=wn},q_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Eh(r)&&!Ih(r)?r.delete(t):e[n++]=r,r.w&=~wn,r.n&=~wn}e.length=n}},Ki=new WeakMap;let yr=0,wn=1;const Ha=30;let mt;const Wn=Symbol(""),Wa=Symbol("");class Yl{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,W_(this,s)}run(){if(!this.active)return this.fn();let e=mt,n=pn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=mt,mt=this,pn=!0,wn=1<<++yr,yr<=Ha?K_(this):Fu(this),this.fn()}finally{yr<=Ha&&q_(this),wn=1<<--yr,mt=this.parent,pn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){mt===this?this.deferStop=!0:this.active&&(Fu(this),this.onStop&&this.onStop(),this.active=!1)}}function Fu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let pn=!0;const Ch=[];function Ys(){Ch.push(pn),pn=!1}function Qs(){const t=Ch.pop();pn=t===void 0?!0:t}function et(t,e,n){if(pn&&mt){let s=Ki.get(t);s||Ki.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Gl()),Th(r)}}function Th(t,e){let n=!1;yr<=Ha?Ih(t)||(t.n|=wn,n=!Eh(t)):n=!t.has(mt),n&&(t.add(mt),mt.deps.push(t))}function qt(t,e,n,s,r,i){const o=Ki.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?Kl(n)&&a.push(o.get("length")):(a.push(o.get(Wn)),Cs(t)&&a.push(o.get(Wa)));break;case"delete":$(t)||(a.push(o.get(Wn)),Cs(t)&&a.push(o.get(Wa)));break;case"set":Cs(t)&&a.push(o.get(Wn));break}if(a.length===1)a[0]&&Va(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Va(Gl(l))}}function Va(t,e){const n=$(t)?t:[...t];for(const s of n)s.computed&&Uu(s);for(const s of n)s.computed||Uu(s)}function Uu(t,e){(t!==mt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function z_(t,e){var n;return(n=Ki.get(t))==null?void 0:n.get(e)}const G_=Hl("__proto__,__v_isRef,__isVue"),Sh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dr)),Y_=Ql(),Q_=Ql(!1,!0),J_=Ql(!0),$u=X_();function X_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ie(this);for(let i=0,o=this.length;i<o;i++)et(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ie)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ys();const s=ie(this)[e].apply(this,n);return Qs(),s}}),t}function Z_(t){const e=ie(this);return et(e,"has",t),e.hasOwnProperty(t)}function Ql(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?gv:xh:e?Ph:Ah).get(s))return s;const o=$(s);if(!t){if(o&&re($u,r))return Reflect.get($u,r,i);if(r==="hasOwnProperty")return Z_}const a=Reflect.get(s,r,i);return(Dr(r)?Sh.has(r):G_(r))||(t||et(s,"get",r),e)?a:Ne(a)?o&&Kl(r)?a:a.value:he(a)?t?xo(a):Js(a):a}}const ev=kh(),tv=kh(!0);function kh(t=!1){return function(n,s,r,i){let o=n[s];if(Ls(o)&&Ne(o)&&!Ne(r))return!1;if(!t&&(!qi(r)&&!Ls(r)&&(o=ie(o),r=ie(r)),!$(n)&&Ne(o)&&!Ne(r)))return o.value=r,!0;const a=$(n)&&Kl(s)?Number(s)<n.length:re(n,s),l=Reflect.set(n,s,r,i);return n===ie(i)&&(a?Lr(r,o)&&qt(n,"set",s,r):qt(n,"add",s,r)),l}}function nv(t,e){const n=re(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&qt(t,"delete",e,void 0),s}function sv(t,e){const n=Reflect.has(t,e);return(!Dr(e)||!Sh.has(e))&&et(t,"has",e),n}function rv(t){return et(t,"iterate",$(t)?"length":Wn),Reflect.ownKeys(t)}const Rh={get:Y_,set:ev,deleteProperty:nv,has:sv,ownKeys:rv},iv={get:J_,set(t,e){return!0},deleteProperty(t,e){return!0}},ov=ke({},Rh,{get:Q_,set:tv}),Jl=t=>t,Po=t=>Reflect.getPrototypeOf(t);function _i(t,e,n=!1,s=!1){t=t.__v_raw;const r=ie(t),i=ie(e);n||(e!==i&&et(r,"get",e),et(r,"get",i));const{has:o}=Po(r),a=s?Jl:n?ec:Ur;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function vi(t,e=!1){const n=this.__v_raw,s=ie(n),r=ie(t);return e||(t!==r&&et(s,"has",t),et(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function yi(t,e=!1){return t=t.__v_raw,!e&&et(ie(t),"iterate",Wn),Reflect.get(t,"size",t)}function Bu(t){t=ie(t);const e=ie(this);return Po(e).has.call(e,t)||(e.add(t),qt(e,"add",t,t)),this}function ju(t,e){e=ie(e);const n=ie(this),{has:s,get:r}=Po(n);let i=s.call(n,t);i||(t=ie(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Lr(e,o)&&qt(n,"set",t,e):qt(n,"add",t,e),this}function Hu(t){const e=ie(this),{has:n,get:s}=Po(e);let r=n.call(e,t);r||(t=ie(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&qt(e,"delete",t,void 0),i}function Wu(){const t=ie(this),e=t.size!==0,n=t.clear();return e&&qt(t,"clear",void 0,void 0),n}function bi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ie(o),l=e?Jl:t?ec:Ur;return!t&&et(a,"iterate",Wn),o.forEach((c,u)=>s.call(r,l(c),l(u),i))}}function wi(t,e,n){return function(...s){const r=this.__v_raw,i=ie(r),o=Cs(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...s),u=n?Jl:e?ec:Ur;return!e&&et(i,"iterate",l?Wa:Wn),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function tn(t){return function(...e){return t==="delete"?!1:this}}function av(){const t={get(i){return _i(this,i)},get size(){return yi(this)},has:vi,add:Bu,set:ju,delete:Hu,clear:Wu,forEach:bi(!1,!1)},e={get(i){return _i(this,i,!1,!0)},get size(){return yi(this)},has:vi,add:Bu,set:ju,delete:Hu,clear:Wu,forEach:bi(!1,!0)},n={get(i){return _i(this,i,!0)},get size(){return yi(this,!0)},has(i){return vi.call(this,i,!0)},add:tn("add"),set:tn("set"),delete:tn("delete"),clear:tn("clear"),forEach:bi(!0,!1)},s={get(i){return _i(this,i,!0,!0)},get size(){return yi(this,!0)},has(i){return vi.call(this,i,!0)},add:tn("add"),set:tn("set"),delete:tn("delete"),clear:tn("clear"),forEach:bi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=wi(i,!1,!1),n[i]=wi(i,!0,!1),e[i]=wi(i,!1,!0),s[i]=wi(i,!0,!0)}),[t,n,e,s]}const[lv,cv,uv,dv]=av();function Xl(t,e){const n=e?t?dv:uv:t?cv:lv;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(re(n,r)&&r in s?n:s,r,i)}const fv={get:Xl(!1,!1)},hv={get:Xl(!1,!0)},pv={get:Xl(!0,!1)},Ah=new WeakMap,Ph=new WeakMap,xh=new WeakMap,gv=new WeakMap;function mv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _v(t){return t.__v_skip||!Object.isExtensible(t)?0:mv(x_(t))}function Js(t){return Ls(t)?t:Zl(t,!1,Rh,fv,Ah)}function vv(t){return Zl(t,!1,ov,hv,Ph)}function xo(t){return Zl(t,!0,iv,pv,xh)}function Zl(t,e,n,s,r){if(!he(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=_v(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Ts(t){return Ls(t)?Ts(t.__v_raw):!!(t&&t.__v_isReactive)}function Ls(t){return!!(t&&t.__v_isReadonly)}function qi(t){return!!(t&&t.__v_isShallow)}function Nh(t){return Ts(t)||Ls(t)}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function Oh(t){return Hi(t,"__v_skip",!0),t}const Ur=t=>he(t)?Js(t):t,ec=t=>he(t)?xo(t):t;function tc(t){pn&&mt&&(t=ie(t),Th(t.dep||(t.dep=Gl())))}function nc(t,e){t=ie(t);const n=t.dep;n&&Va(n)}function Ne(t){return!!(t&&t.__v_isRef===!0)}function X(t){return Dh(t,!1)}function Mh(t){return Dh(t,!0)}function Dh(t,e){return Ne(t)?t:new yv(t,e)}class yv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ie(e),this._value=n?e:Ur(e)}get value(){return tc(this),this._value}set value(e){const n=this.__v_isShallow||qi(e)||Ls(e);e=n?e:ie(e),Lr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ur(e),nc(this))}}function Ss(t){return Ne(t)?t.value:t}const bv={get:(t,e,n)=>Ss(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ne(r)&&!Ne(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Lh(t){return Ts(t)?t:new Proxy(t,bv)}class wv{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=e(()=>tc(this),()=>nc(this));this._get=n,this._set=s}get value(){return this._get()}set value(e){this._set(e)}}function Ev(t){return new wv(t)}class Iv{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return z_(ie(this._object),this._key)}}class Cv{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Tv(t,e,n){return Ne(t)?t:Y(t)?new Cv(t):he(t)&&arguments.length>1?Sv(t,e,n):X(t)}function Sv(t,e,n){const s=t[e];return Ne(s)?s:new Iv(t,e,n)}class kv{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Yl(e,()=>{this._dirty||(this._dirty=!0,nc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ie(this);return tc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Rv(t,e,n=!1){let s,r;const i=Y(t);return i?(s=t,r=wt):(s=t.get,r=t.set),new kv(s,r,i||!r,n)}function gn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){No(i,e,n)}return r}function ut(t,e,n,s){if(Y(t)){const i=gn(t,e,n,s);return i&&gh(i)&&i.catch(o=>{No(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(ut(t[i],e,n,s));return r}function No(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){gn(l,null,10,[t,o,a]);return}}Av(t,n,r,s)}function Av(t,e,n,s=!0){console.error(t)}let $r=!1,Ka=!1;const We=[];let Pt=0;const ks=[];let Ft=null,Un=0;const Fh=Promise.resolve();let sc=null;function Et(t){const e=sc||Fh;return t?e.then(this?t.bind(this):t):e}function Pv(t){let e=Pt+1,n=We.length;for(;e<n;){const s=e+n>>>1;Br(We[s])<t?e=s+1:n=s}return e}function rc(t){(!We.length||!We.includes(t,$r&&t.allowRecurse?Pt+1:Pt))&&(t.id==null?We.push(t):We.splice(Pv(t.id),0,t),Uh())}function Uh(){!$r&&!Ka&&(Ka=!0,sc=Fh.then(Bh))}function xv(t){const e=We.indexOf(t);e>Pt&&We.splice(e,1)}function Nv(t){$(t)?ks.push(...t):(!Ft||!Ft.includes(t,t.allowRecurse?Un+1:Un))&&ks.push(t),Uh()}function Vu(t,e=$r?Pt+1:0){for(;e<We.length;e++){const n=We[e];n&&n.pre&&(We.splice(e,1),e--,n())}}function $h(t){if(ks.length){const e=[...new Set(ks)];if(ks.length=0,Ft){Ft.push(...e);return}for(Ft=e,Ft.sort((n,s)=>Br(n)-Br(s)),Un=0;Un<Ft.length;Un++)Ft[Un]();Ft=null,Un=0}}const Br=t=>t.id==null?1/0:t.id,Ov=(t,e)=>{const n=Br(t)-Br(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Bh(t){Ka=!1,$r=!0,We.sort(Ov);const e=wt;try{for(Pt=0;Pt<We.length;Pt++){const n=We[Pt];n&&n.active!==!1&&gn(n,null,14)}}finally{Pt=0,We.length=0,$h(),$r=!1,sc=null,(We.length||ks.length)&&Bh()}}function Mv(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||we;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:f}=s[u]||we;f&&(r=n.map(p=>Re(p)?p.trim():p)),d&&(r=n.map(Wi))}let a,l=s[a=da(e)]||s[a=da(Mt(e))];!l&&i&&(l=s[a=da(rs(e))]),l&&ut(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ut(c,t,6,r)}}function jh(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Y(t)){const l=c=>{const u=jh(c,e,!0);u&&(a=!0,ke(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(he(t)&&s.set(t,null),null):($(i)?i.forEach(l=>o[l]=null):ke(o,i),he(t)&&s.set(t,o),o)}function Oo(t,e){return!t||!ko(e)?!1:(e=e.slice(2).replace(/Once$/,""),re(t,e[0].toLowerCase()+e.slice(1))||re(t,rs(e))||re(t,e))}let Be=null,Mo=null;function zi(t){const e=Be;return Be=t,Mo=t&&t.type.__scopeId||null,e}function Hh(t){Mo=t}function Wh(){Mo=null}function it(t,e=Be,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&nd(-1);const i=zi(e);let o;try{o=t(...r)}finally{zi(i),s._d&&nd(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function fa(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:f,setupState:p,ctx:m,inheritAttrs:_}=t;let v,I;const S=zi(t);try{if(n.shapeFlag&4){const A=r||s;v=At(u.call(A,A,d,i,p,f,m)),I=l}else{const A=e;v=At(A.length>1?A(i,{attrs:l,slots:a,emit:c}):A(i,null)),I=e.props?l:Dv(l)}}catch(A){Sr.length=0,No(A,t,1),v=ae(dt)}let M=v;if(I&&_!==!1){const A=Object.keys(I),{shapeFlag:G}=M;A.length&&G&7&&(o&&A.some(Wl)&&(I=Lv(I,o)),M=zt(M,I))}return n.dirs&&(M=zt(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),v=M,zi(S),v}const Dv=t=>{let e;for(const n in t)(n==="class"||n==="style"||ko(n))&&((e||(e={}))[n]=t[n]);return e},Lv=(t,e)=>{const n={};for(const s in t)(!Wl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Fv(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Ku(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==s[f]&&!Oo(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ku(s,o,c):!0:!!o;return!1}function Ku(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Oo(n,i))return!0}return!1}function Uv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const $v=t=>t.__isSuspense;function Bv(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):Nv(t)}function Xs(t,e){return ic(t,null,e)}const Ei={};function xt(t,e,n){return ic(t,e,n)}function ic(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=we){var a;const l=wh()===((a=Le)==null?void 0:a.scope)?Le:null;let c,u=!1,d=!1;if(Ne(t)?(c=()=>t.value,u=qi(t)):Ts(t)?(c=()=>t,s=!0):$(t)?(d=!0,u=t.some(A=>Ts(A)||qi(A)),c=()=>t.map(A=>{if(Ne(A))return A.value;if(Ts(A))return jn(A);if(Y(A))return gn(A,l,2)})):Y(t)?e?c=()=>gn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),ut(t,l,3,[p])}:c=wt,e&&s){const A=c;c=()=>jn(A())}let f,p=A=>{f=S.onStop=()=>{gn(A,l,4)}},m;if(Hr)if(p=wt,e?n&&ut(e,l,3,[c(),d?[]:void 0,p]):c(),r==="sync"){const A=Ly();m=A.__watcherHandles||(A.__watcherHandles=[])}else return wt;let _=d?new Array(t.length).fill(Ei):Ei;const v=()=>{if(S.active)if(e){const A=S.run();(s||u||(d?A.some((G,U)=>Lr(G,_[U])):Lr(A,_)))&&(f&&f(),ut(e,l,3,[A,_===Ei?void 0:d&&_[0]===Ei?[]:_,p]),_=A)}else S.run()};v.allowRecurse=!!e;let I;r==="sync"?I=v:r==="post"?I=()=>Ge(v,l&&l.suspense):(v.pre=!0,l&&(v.id=l.uid),I=()=>rc(v));const S=new Yl(c,I);e?n?v():_=S.run():r==="post"?Ge(S.run.bind(S),l&&l.suspense):S.run();const M=()=>{S.stop(),l&&l.scope&&Vl(l.scope.effects,S)};return m&&m.push(M),M}function jv(t,e,n){const s=this.proxy,r=Re(t)?t.includes(".")?Vh(s,t):()=>s[t]:t.bind(s,s);let i;Y(e)?i=e:(i=e.handler,n=e);const o=Le;Fs(this);const a=ic(r,i.bind(s),n);return o?Fs(o):Vn(),a}function Vh(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function jn(t,e){if(!he(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ne(t))jn(t.value,e);else if($(t))for(let n=0;n<t.length;n++)jn(t[n],e);else if(Gs(t)||Cs(t))t.forEach(n=>{jn(n,e)});else if(_h(t))for(const n in t)jn(t[n],e);return t}function qa(t,e){const n=Be;if(n===null)return t;const s=jo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=we]=e[i];o&&(Y(o)&&(o={mounted:o,updated:o}),o.deep&&jn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function xn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(Ys(),ut(l,n,8,[t.el,a,t,e]),Qs())}}function Hv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return is(()=>{t.isMounted=!0}),oc(()=>{t.isUnmounting=!0}),t}const lt=[Function,Array],Kh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:lt,onEnter:lt,onAfterEnter:lt,onEnterCancelled:lt,onBeforeLeave:lt,onLeave:lt,onAfterLeave:lt,onLeaveCancelled:lt,onBeforeAppear:lt,onAppear:lt,onAfterAppear:lt,onAppearCancelled:lt},Wv={name:"BaseTransition",props:Kh,setup(t,{slots:e}){const n=dc(),s=Hv();let r;return()=>{const i=e.default&&zh(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const _ of i)if(_.type!==dt){o=_;break}}const a=ie(t),{mode:l}=a;if(s.isLeaving)return ha(o);const c=qu(o);if(!c)return ha(o);const u=za(c,a,s,n);Ga(c,u);const d=n.subTree,f=d&&qu(d);let p=!1;const{getTransitionKey:m}=c.type;if(m){const _=m();r===void 0?r=_:_!==r&&(r=_,p=!0)}if(f&&f.type!==dt&&(!$n(c,f)||p)){const _=za(f,a,s,n);if(Ga(f,_),l==="out-in")return s.isLeaving=!0,_.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},ha(o);l==="in-out"&&c.type!==dt&&(_.delayLeave=(v,I,S)=>{const M=qh(s,f);M[String(f.key)]=f,v._leaveCb=()=>{I(),v._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=S})}return o}}},Vv=Wv;function qh(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function za(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:_,onAppear:v,onAfterAppear:I,onAppearCancelled:S}=e,M=String(t.key),A=qh(n,t),G=(P,W)=>{P&&ut(P,s,9,W)},U=(P,W)=>{const V=W[1];G(P,W),$(P)?P.every(Ae=>Ae.length<=1)&&V():P.length<=1&&V()},Q={mode:i,persisted:o,beforeEnter(P){let W=a;if(!n.isMounted)if(r)W=_||a;else return;P._leaveCb&&P._leaveCb(!0);const V=A[M];V&&$n(t,V)&&V.el._leaveCb&&V.el._leaveCb(),G(W,[P])},enter(P){let W=l,V=c,Ae=u;if(!n.isMounted)if(r)W=v||l,V=I||c,Ae=S||u;else return;let F=!1;const ye=P._enterCb=Ue=>{F||(F=!0,Ue?G(Ae,[P]):G(V,[P]),Q.delayedLeave&&Q.delayedLeave(),P._enterCb=void 0)};W?U(W,[P,ye]):ye()},leave(P,W){const V=String(t.key);if(P._enterCb&&P._enterCb(!0),n.isUnmounting)return W();G(d,[P]);let Ae=!1;const F=P._leaveCb=ye=>{Ae||(Ae=!0,W(),ye?G(m,[P]):G(p,[P]),P._leaveCb=void 0,A[V]===t&&delete A[V])};A[V]=t,f?U(f,[P,F]):F()},clone(P){return za(P,e,n,s)}};return Q}function ha(t){if(Do(t))return t=zt(t),t.children=null,t}function qu(t){return Do(t)?t.children?t.children[0]:void 0:t}function Ga(t,e){t.shapeFlag&6&&t.component?Ga(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function zh(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===De?(o.patchFlag&128&&r++,s=s.concat(zh(o.children,e,a))):(e||o.type!==dt)&&s.push(a!=null?zt(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Jt(t,e){return Y(t)?(()=>ke({name:t.name},e,{setup:t}))():t}const Cr=t=>!!t.type.__asyncLoader,Do=t=>t.type.__isKeepAlive;function Kv(t,e){Gh(t,"a",e)}function qv(t,e){Gh(t,"da",e)}function Gh(t,e,n=Le){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Lo(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Do(r.parent.vnode)&&zv(s,e,n,r),r=r.parent}}function zv(t,e,n,s){const r=Lo(e,t,s,!0);Fo(()=>{Vl(s[e],r)},n)}function Lo(t,e,n=Le,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ys(),Fs(n);const a=ut(e,n,t,o);return Vn(),Qs(),a});return s?r.unshift(i):r.push(i),i}}const Xt=t=>(e,n=Le)=>(!Hr||t==="sp")&&Lo(t,(...s)=>e(...s),n),Gv=Xt("bm"),is=Xt("m"),Yv=Xt("bu"),Qv=Xt("u"),oc=Xt("bum"),Fo=Xt("um"),Jv=Xt("sp"),Xv=Xt("rtg"),Zv=Xt("rtc");function ey(t,e=Le){Lo("ec",t,e)}const Yh="components";function Ke(t,e){return ny(Yh,t,!0,e)||t}const ty=Symbol.for("v-ndc");function ny(t,e,n=!0,s=!1){const r=Be||Le;if(r){const i=r.type;if(t===Yh){const a=Oy(i,!1);if(a&&(a===e||a===Mt(e)||a===Ao(Mt(e))))return i}const o=zu(r[t]||i[t],e)||zu(r.appContext[t],e);return!o&&s?i:o}}function zu(t,e){return t&&(t[e]||t[Mt(e)]||t[Ao(Mt(e))])}function sy(t,e,n,s){let r;const i=n&&n[s];if($(t)||Re(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(he(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function Uo(t,e,n={},s,r){if(Be.isCE||Be.parent&&Cr(Be.parent)&&Be.parent.isCE)return e!=="default"&&(n.name=e),ae("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),$e();const o=i&&Qh(i(n)),a=cc(De,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Qh(t){return t.some(e=>Qi(e)?!(e.type===dt||e.type===De&&!Qh(e.children)):!0)?t:null}const Ya=t=>t?ap(t)?jo(t)||t.proxy:Ya(t.parent):null,Tr=ke(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ya(t.parent),$root:t=>Ya(t.root),$emit:t=>t.emit,$options:t=>ac(t),$forceUpdate:t=>t.f||(t.f=()=>rc(t.update)),$nextTick:t=>t.n||(t.n=Et.bind(t.proxy)),$watch:t=>jv.bind(t)}),pa=(t,e)=>t!==we&&!t.__isScriptSetup&&re(t,e),ry={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(pa(s,e))return o[e]=1,s[e];if(r!==we&&re(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&re(c,e))return o[e]=3,i[e];if(n!==we&&re(n,e))return o[e]=4,n[e];Qa&&(o[e]=0)}}const u=Tr[e];let d,f;if(u)return e==="$attrs"&&et(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==we&&re(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,re(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return pa(r,e)?(r[e]=n,!0):s!==we&&re(s,e)?(s[e]=n,!0):re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==we&&re(t,o)||pa(e,o)||(a=i[0])&&re(a,o)||re(s,o)||re(Tr,o)||re(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Gu(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Qa=!0;function iy(t){const e=ac(t),n=t.proxy,s=t.ctx;Qa=!1,e.beforeCreate&&Yu(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:m,activated:_,deactivated:v,beforeDestroy:I,beforeUnmount:S,destroyed:M,unmounted:A,render:G,renderTracked:U,renderTriggered:Q,errorCaptured:P,serverPrefetch:W,expose:V,inheritAttrs:Ae,components:F,directives:ye,filters:Ue}=e;if(c&&oy(c,s,null),o)for(const me in o){const ue=o[me];Y(ue)&&(s[me]=ue.bind(n))}if(r){const me=r.call(n,n);he(me)&&(t.data=Js(me))}if(Qa=!0,i)for(const me in i){const ue=i[me],ht=Y(ue)?ue.bind(n,n):Y(ue.get)?ue.get.bind(n,n):wt,Pn=!Y(ue)&&Y(ue.set)?ue.set.bind(n):wt,pt=le({get:ht,set:Pn});Object.defineProperty(s,me,{enumerable:!0,configurable:!0,get:()=>pt.value,set:ze=>pt.value=ze})}if(a)for(const me in a)Jh(a[me],s,n,me);if(l){const me=Y(l)?l.call(n):l;Reflect.ownKeys(me).forEach(ue=>{Rs(ue,me[ue])})}u&&Yu(u,t,"c");function Ee(me,ue){$(ue)?ue.forEach(ht=>me(ht.bind(n))):ue&&me(ue.bind(n))}if(Ee(Gv,d),Ee(is,f),Ee(Yv,p),Ee(Qv,m),Ee(Kv,_),Ee(qv,v),Ee(ey,P),Ee(Zv,U),Ee(Xv,Q),Ee(oc,S),Ee(Fo,A),Ee(Jv,W),$(V))if(V.length){const me=t.exposed||(t.exposed={});V.forEach(ue=>{Object.defineProperty(me,ue,{get:()=>n[ue],set:ht=>n[ue]=ht})})}else t.exposed||(t.exposed={});G&&t.render===wt&&(t.render=G),Ae!=null&&(t.inheritAttrs=Ae),F&&(t.components=F),ye&&(t.directives=ye)}function oy(t,e,n=wt){$(t)&&(t=Ja(t));for(const s in t){const r=t[s];let i;he(r)?"default"in r?i=Xe(r.from||s,r.default,!0):i=Xe(r.from||s):i=Xe(r),Ne(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Yu(t,e,n){ut($(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Jh(t,e,n,s){const r=s.includes(".")?Vh(n,s):()=>n[s];if(Re(t)){const i=e[t];Y(i)&&xt(r,i)}else if(Y(t))xt(r,t.bind(n));else if(he(t))if($(t))t.forEach(i=>Jh(i,e,n,s));else{const i=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(i)&&xt(r,i,t)}}function ac(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>Gi(l,c,o,!0)),Gi(l,e,o)),he(e)&&i.set(e,l),l}function Gi(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Gi(t,i,n,!0),r&&r.forEach(o=>Gi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=ay[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ay={data:Qu,props:Ju,emits:Ju,methods:br,computed:br,beforeCreate:Ve,created:Ve,beforeMount:Ve,mounted:Ve,beforeUpdate:Ve,updated:Ve,beforeDestroy:Ve,beforeUnmount:Ve,destroyed:Ve,unmounted:Ve,activated:Ve,deactivated:Ve,errorCaptured:Ve,serverPrefetch:Ve,components:br,directives:br,watch:cy,provide:Qu,inject:ly};function Qu(t,e){return e?t?function(){return ke(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function ly(t,e){return br(Ja(t),Ja(e))}function Ja(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ve(t,e){return t?[...new Set([].concat(t,e))]:e}function br(t,e){return t?ke(Object.create(null),t,e):e}function Ju(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:ke(Object.create(null),Gu(t),Gu(e??{})):e}function cy(t,e){if(!t)return e;if(!e)return t;const n=ke(Object.create(null),t);for(const s in e)n[s]=Ve(t[s],e[s]);return n}function Xh(){return{app:null,config:{isNativeTag:R_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uy=0;function dy(t,e){return function(s,r=null){Y(s)||(s=ke({},s)),r!=null&&!he(r)&&(r=null);const i=Xh(),o=new Set;let a=!1;const l=i.app={_uid:uy++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Fy,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&Y(c.install)?(o.add(c),c.install(l,...u)):Y(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,d){if(!a){const f=ae(s,r);return f.appContext=i,u&&e?e(f,c):t(f,c,d),a=!0,l._container=c,c.__vue_app__=l,jo(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){Yi=l;try{return c()}finally{Yi=null}}};return l}}let Yi=null;function Rs(t,e){if(Le){let n=Le.provides;const s=Le.parent&&Le.parent.provides;s===n&&(n=Le.provides=Object.create(s)),n[t]=e}}function Xe(t,e,n=!1){const s=Le||Be;if(s||Yi){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Yi._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Y(e)?e.call(s&&s.proxy):e}}function fy(t,e,n,s=!1){const r={},i={};Hi(i,Bo,1),t.propsDefaults=Object.create(null),Zh(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:vv(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function hy(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ie(r),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Oo(t.emitsOptions,f))continue;const p=e[f];if(l)if(re(i,f))p!==i[f]&&(i[f]=p,c=!0);else{const m=Mt(f);r[m]=Xa(l,a,m,p,t,!1)}else p!==i[f]&&(i[f]=p,c=!0)}}}else{Zh(t,e,r,i)&&(c=!0);let u;for(const d in a)(!e||!re(e,d)&&((u=rs(d))===d||!re(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=Xa(l,a,d,void 0,t,!0)):delete r[d]);if(i!==a)for(const d in i)(!e||!re(e,d))&&(delete i[d],c=!0)}c&&qt(t,"set","$attrs")}function Zh(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ni(l))continue;const c=e[l];let u;r&&re(r,u=Mt(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Oo(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=ie(n),c=a||we;for(let u=0;u<i.length;u++){const d=i[u];n[d]=Xa(r,l,d,c[d],t,!re(c,d))}}return o}function Xa(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=re(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Y(l)){const{propsDefaults:c}=r;n in c?s=c[n]:(Fs(r),s=c[n]=l.call(null,e),Vn())}else s=l}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===rs(n))&&(s=!0))}return s}function ep(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!Y(t)){const u=d=>{l=!0;const[f,p]=ep(d,e,!0);ke(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return he(t)&&s.set(t,Is),Is;if($(i))for(let u=0;u<i.length;u++){const d=Mt(i[u]);Xu(d)&&(o[d]=we)}else if(i)for(const u in i){const d=Mt(u);if(Xu(d)){const f=i[u],p=o[d]=$(f)||Y(f)?{type:f}:ke({},f);if(p){const m=td(Boolean,p.type),_=td(String,p.type);p[0]=m>-1,p[1]=_<0||m<_,(m>-1||re(p,"default"))&&a.push(d)}}}const c=[o,a];return he(t)&&s.set(t,c),c}function Xu(t){return t[0]!=="$"}function Zu(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ed(t,e){return Zu(t)===Zu(e)}function td(t,e){return $(e)?e.findIndex(n=>ed(n,t)):Y(e)&&ed(e,t)?0:-1}const tp=t=>t[0]==="_"||t==="$stable",lc=t=>$(t)?t.map(At):[At(t)],py=(t,e,n)=>{if(e._n)return e;const s=it((...r)=>lc(e(...r)),n);return s._c=!1,s},np=(t,e,n)=>{const s=t._ctx;for(const r in t){if(tp(r))continue;const i=t[r];if(Y(i))e[r]=py(r,i,s);else if(i!=null){const o=lc(i);e[r]=()=>o}}},sp=(t,e)=>{const n=lc(e);t.slots.default=()=>n},gy=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ie(e),Hi(e,"_",n)):np(e,t.slots={})}else t.slots={},e&&sp(t,e);Hi(t.slots,Bo,1)},my=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=we;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ke(r,e),!n&&a===1&&delete r._):(i=!e.$stable,np(e,r)),o=e}else e&&(sp(t,e),o={default:1});if(i)for(const a in r)!tp(a)&&!(a in o)&&delete r[a]};function Za(t,e,n,s,r=!1){if($(t)){t.forEach((f,p)=>Za(f,e&&($(e)?e[p]:e),n,s,r));return}if(Cr(s)&&!r)return;const i=s.shapeFlag&4?jo(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===we?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Re(c)?(u[c]=null,re(d,c)&&(d[c]=null)):Ne(c)&&(c.value=null)),Y(l))gn(l,a,12,[o,u]);else{const f=Re(l),p=Ne(l);if(f||p){const m=()=>{if(t.f){const _=f?re(d,l)?d[l]:u[l]:l.value;r?$(_)&&Vl(_,i):$(_)?_.includes(i)||_.push(i):f?(u[l]=[i],re(d,l)&&(d[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,re(d,l)&&(d[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Ge(m,n)):m()}}}const Ge=Bv;function _y(t){return vy(t)}function vy(t,e){const n=ja();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=wt,insertStaticContent:m}=t,_=(h,g,y,b=null,E=null,R=null,O=!1,k=null,x=!!g.dynamicChildren)=>{if(h===g)return;h&&!$n(h,g)&&(b=N(h),ze(h,E,R,!0),h=null),g.patchFlag===-2&&(x=!1,g.dynamicChildren=null);const{type:C,ref:j,shapeFlag:L}=g;switch(C){case $o:v(h,g,y,b);break;case dt:I(h,g,y,b);break;case ga:h==null&&S(g,y,b,O);break;case De:F(h,g,y,b,E,R,O,k,x);break;default:L&1?G(h,g,y,b,E,R,O,k,x):L&6?ye(h,g,y,b,E,R,O,k,x):(L&64||L&128)&&C.process(h,g,y,b,E,R,O,k,x,oe)}j!=null&&E&&Za(j,h&&h.ref,R,g||h,!g)},v=(h,g,y,b)=>{if(h==null)s(g.el=a(g.children),y,b);else{const E=g.el=h.el;g.children!==h.children&&c(E,g.children)}},I=(h,g,y,b)=>{h==null?s(g.el=l(g.children||""),y,b):g.el=h.el},S=(h,g,y,b)=>{[h.el,h.anchor]=m(h.children,g,y,b,h.el,h.anchor)},M=({el:h,anchor:g},y,b)=>{let E;for(;h&&h!==g;)E=f(h),s(h,y,b),h=E;s(g,y,b)},A=({el:h,anchor:g})=>{let y;for(;h&&h!==g;)y=f(h),r(h),h=y;r(g)},G=(h,g,y,b,E,R,O,k,x)=>{O=O||g.type==="svg",h==null?U(g,y,b,E,R,O,k,x):W(h,g,E,R,O,k,x)},U=(h,g,y,b,E,R,O,k)=>{let x,C;const{type:j,props:L,shapeFlag:H,transition:z,dirs:ne}=h;if(x=h.el=o(h.type,R,L&&L.is,L),H&8?u(x,h.children):H&16&&P(h.children,x,null,b,E,R&&j!=="foreignObject",O,k),ne&&xn(h,null,b,"created"),Q(x,h,h.scopeId,O,b),L){for(const de in L)de!=="value"&&!Ni(de)&&i(x,de,null,L[de],R,h.children,b,E,D);"value"in L&&i(x,"value",null,L.value),(C=L.onVnodeBeforeMount)&&kt(C,b,h)}ne&&xn(h,null,b,"beforeMount");const _e=(!E||E&&!E.pendingBranch)&&z&&!z.persisted;_e&&z.beforeEnter(x),s(x,g,y),((C=L&&L.onVnodeMounted)||_e||ne)&&Ge(()=>{C&&kt(C,b,h),_e&&z.enter(x),ne&&xn(h,null,b,"mounted")},E)},Q=(h,g,y,b,E)=>{if(y&&p(h,y),b)for(let R=0;R<b.length;R++)p(h,b[R]);if(E){let R=E.subTree;if(g===R){const O=E.vnode;Q(h,O,O.scopeId,O.slotScopeIds,E.parent)}}},P=(h,g,y,b,E,R,O,k,x=0)=>{for(let C=x;C<h.length;C++){const j=h[C]=k?ln(h[C]):At(h[C]);_(null,j,g,y,b,E,R,O,k)}},W=(h,g,y,b,E,R,O)=>{const k=g.el=h.el;let{patchFlag:x,dynamicChildren:C,dirs:j}=g;x|=h.patchFlag&16;const L=h.props||we,H=g.props||we;let z;y&&Nn(y,!1),(z=H.onVnodeBeforeUpdate)&&kt(z,y,g,h),j&&xn(g,h,y,"beforeUpdate"),y&&Nn(y,!0);const ne=E&&g.type!=="foreignObject";if(C?V(h.dynamicChildren,C,k,y,b,ne,R):O||ue(h,g,k,null,y,b,ne,R,!1),x>0){if(x&16)Ae(k,g,L,H,y,b,E);else if(x&2&&L.class!==H.class&&i(k,"class",null,H.class,E),x&4&&i(k,"style",L.style,H.style,E),x&8){const _e=g.dynamicProps;for(let de=0;de<_e.length;de++){const Se=_e[de],gt=L[Se],fs=H[Se];(fs!==gt||Se==="value")&&i(k,Se,gt,fs,E,h.children,y,b,D)}}x&1&&h.children!==g.children&&u(k,g.children)}else!O&&C==null&&Ae(k,g,L,H,y,b,E);((z=H.onVnodeUpdated)||j)&&Ge(()=>{z&&kt(z,y,g,h),j&&xn(g,h,y,"updated")},b)},V=(h,g,y,b,E,R,O)=>{for(let k=0;k<g.length;k++){const x=h[k],C=g[k],j=x.el&&(x.type===De||!$n(x,C)||x.shapeFlag&70)?d(x.el):y;_(x,C,j,null,b,E,R,O,!0)}},Ae=(h,g,y,b,E,R,O)=>{if(y!==b){if(y!==we)for(const k in y)!Ni(k)&&!(k in b)&&i(h,k,y[k],null,O,g.children,E,R,D);for(const k in b){if(Ni(k))continue;const x=b[k],C=y[k];x!==C&&k!=="value"&&i(h,k,C,x,O,g.children,E,R,D)}"value"in b&&i(h,"value",y.value,b.value)}},F=(h,g,y,b,E,R,O,k,x)=>{const C=g.el=h?h.el:a(""),j=g.anchor=h?h.anchor:a("");let{patchFlag:L,dynamicChildren:H,slotScopeIds:z}=g;z&&(k=k?k.concat(z):z),h==null?(s(C,y,b),s(j,y,b),P(g.children,y,j,E,R,O,k,x)):L>0&&L&64&&H&&h.dynamicChildren?(V(h.dynamicChildren,H,y,E,R,O,k),(g.key!=null||E&&g===E.subTree)&&rp(h,g,!0)):ue(h,g,y,j,E,R,O,k,x)},ye=(h,g,y,b,E,R,O,k,x)=>{g.slotScopeIds=k,h==null?g.shapeFlag&512?E.ctx.activate(g,y,b,O,x):Ue(g,y,b,E,R,O,x):en(h,g,x)},Ue=(h,g,y,b,E,R,O)=>{const k=h.component=Ry(h,b,E);if(Do(h)&&(k.ctx.renderer=oe),Ay(k),k.asyncDep){if(E&&E.registerDep(k,Ee),!h.el){const x=k.subTree=ae(dt);I(null,x,g,y)}return}Ee(k,h,g,y,E,R,O)},en=(h,g,y)=>{const b=g.component=h.component;if(Fv(h,g,y))if(b.asyncDep&&!b.asyncResolved){me(b,g,y);return}else b.next=g,xv(b.update),b.update();else g.el=h.el,b.vnode=g},Ee=(h,g,y,b,E,R,O)=>{const k=()=>{if(h.isMounted){let{next:j,bu:L,u:H,parent:z,vnode:ne}=h,_e=j,de;Nn(h,!1),j?(j.el=ne.el,me(h,j,O)):j=ne,L&&Oi(L),(de=j.props&&j.props.onVnodeBeforeUpdate)&&kt(de,z,j,ne),Nn(h,!0);const Se=fa(h),gt=h.subTree;h.subTree=Se,_(gt,Se,d(gt.el),N(gt),h,E,R),j.el=Se.el,_e===null&&Uv(h,Se.el),H&&Ge(H,E),(de=j.props&&j.props.onVnodeUpdated)&&Ge(()=>kt(de,z,j,ne),E)}else{let j;const{el:L,props:H}=g,{bm:z,m:ne,parent:_e}=h,de=Cr(g);if(Nn(h,!1),z&&Oi(z),!de&&(j=H&&H.onVnodeBeforeMount)&&kt(j,_e,g),Nn(h,!0),L&&ee){const Se=()=>{h.subTree=fa(h),ee(L,h.subTree,h,E,null)};de?g.type.__asyncLoader().then(()=>!h.isUnmounted&&Se()):Se()}else{const Se=h.subTree=fa(h);_(null,Se,y,b,h,E,R),g.el=Se.el}if(ne&&Ge(ne,E),!de&&(j=H&&H.onVnodeMounted)){const Se=g;Ge(()=>kt(j,_e,Se),E)}(g.shapeFlag&256||_e&&Cr(_e.vnode)&&_e.vnode.shapeFlag&256)&&h.a&&Ge(h.a,E),h.isMounted=!0,g=y=b=null}},x=h.effect=new Yl(k,()=>rc(C),h.scope),C=h.update=()=>x.run();C.id=h.uid,Nn(h,!0),C()},me=(h,g,y)=>{g.component=h;const b=h.vnode.props;h.vnode=g,h.next=null,hy(h,g.props,b,y),my(h,g.children,y),Ys(),Vu(),Qs()},ue=(h,g,y,b,E,R,O,k,x=!1)=>{const C=h&&h.children,j=h?h.shapeFlag:0,L=g.children,{patchFlag:H,shapeFlag:z}=g;if(H>0){if(H&128){Pn(C,L,y,b,E,R,O,k,x);return}else if(H&256){ht(C,L,y,b,E,R,O,k,x);return}}z&8?(j&16&&D(C,E,R),L!==C&&u(y,L)):j&16?z&16?Pn(C,L,y,b,E,R,O,k,x):D(C,E,R,!0):(j&8&&u(y,""),z&16&&P(L,y,b,E,R,O,k,x))},ht=(h,g,y,b,E,R,O,k,x)=>{h=h||Is,g=g||Is;const C=h.length,j=g.length,L=Math.min(C,j);let H;for(H=0;H<L;H++){const z=g[H]=x?ln(g[H]):At(g[H]);_(h[H],z,y,null,E,R,O,k,x)}C>j?D(h,E,R,!0,!1,L):P(g,y,b,E,R,O,k,x,L)},Pn=(h,g,y,b,E,R,O,k,x)=>{let C=0;const j=g.length;let L=h.length-1,H=j-1;for(;C<=L&&C<=H;){const z=h[C],ne=g[C]=x?ln(g[C]):At(g[C]);if($n(z,ne))_(z,ne,y,null,E,R,O,k,x);else break;C++}for(;C<=L&&C<=H;){const z=h[L],ne=g[H]=x?ln(g[H]):At(g[H]);if($n(z,ne))_(z,ne,y,null,E,R,O,k,x);else break;L--,H--}if(C>L){if(C<=H){const z=H+1,ne=z<j?g[z].el:b;for(;C<=H;)_(null,g[C]=x?ln(g[C]):At(g[C]),y,ne,E,R,O,k,x),C++}}else if(C>H)for(;C<=L;)ze(h[C],E,R,!0),C++;else{const z=C,ne=C,_e=new Map;for(C=ne;C<=H;C++){const st=g[C]=x?ln(g[C]):At(g[C]);st.key!=null&&_e.set(st.key,C)}let de,Se=0;const gt=H-ne+1;let fs=!1,Nu=0;const ur=new Array(gt);for(C=0;C<gt;C++)ur[C]=0;for(C=z;C<=L;C++){const st=h[C];if(Se>=gt){ze(st,E,R,!0);continue}let St;if(st.key!=null)St=_e.get(st.key);else for(de=ne;de<=H;de++)if(ur[de-ne]===0&&$n(st,g[de])){St=de;break}St===void 0?ze(st,E,R,!0):(ur[St-ne]=C+1,St>=Nu?Nu=St:fs=!0,_(st,g[St],y,null,E,R,O,k,x),Se++)}const Ou=fs?yy(ur):Is;for(de=Ou.length-1,C=gt-1;C>=0;C--){const st=ne+C,St=g[st],Mu=st+1<j?g[st+1].el:b;ur[C]===0?_(null,St,y,Mu,E,R,O,k,x):fs&&(de<0||C!==Ou[de]?pt(St,y,Mu,2):de--)}}},pt=(h,g,y,b,E=null)=>{const{el:R,type:O,transition:k,children:x,shapeFlag:C}=h;if(C&6){pt(h.component.subTree,g,y,b);return}if(C&128){h.suspense.move(g,y,b);return}if(C&64){O.move(h,g,y,oe);return}if(O===De){s(R,g,y);for(let L=0;L<x.length;L++)pt(x[L],g,y,b);s(h.anchor,g,y);return}if(O===ga){M(h,g,y);return}if(b!==2&&C&1&&k)if(b===0)k.beforeEnter(R),s(R,g,y),Ge(()=>k.enter(R),E);else{const{leave:L,delayLeave:H,afterLeave:z}=k,ne=()=>s(R,g,y),_e=()=>{L(R,()=>{ne(),z&&z()})};H?H(R,ne,_e):_e()}else s(R,g,y)},ze=(h,g,y,b=!1,E=!1)=>{const{type:R,props:O,ref:k,children:x,dynamicChildren:C,shapeFlag:j,patchFlag:L,dirs:H}=h;if(k!=null&&Za(k,null,y,h,!0),j&256){g.ctx.deactivate(h);return}const z=j&1&&H,ne=!Cr(h);let _e;if(ne&&(_e=O&&O.onVnodeBeforeUnmount)&&kt(_e,g,h),j&6)w(h.component,y,b);else{if(j&128){h.suspense.unmount(y,b);return}z&&xn(h,null,g,"beforeUnmount"),j&64?h.type.remove(h,g,y,E,oe,b):C&&(R!==De||L>0&&L&64)?D(C,g,y,!1,!0):(R===De&&L&384||!E&&j&16)&&D(x,g,y),b&&ds(h)}(ne&&(_e=O&&O.onVnodeUnmounted)||z)&&Ge(()=>{_e&&kt(_e,g,h),z&&xn(h,null,g,"unmounted")},y)},ds=h=>{const{type:g,el:y,anchor:b,transition:E}=h;if(g===De){xu(y,b);return}if(g===ga){A(h);return}const R=()=>{r(y),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(h.shapeFlag&1&&E&&!E.persisted){const{leave:O,delayLeave:k}=E,x=()=>O(y,R);k?k(h.el,R,x):x()}else R()},xu=(h,g)=>{let y;for(;h!==g;)y=f(h),r(h),h=y;r(g)},w=(h,g,y)=>{const{bum:b,scope:E,update:R,subTree:O,um:k}=h;b&&Oi(b),E.stop(),R&&(R.active=!1,ze(O,h,g,y)),k&&Ge(k,g),Ge(()=>{h.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},D=(h,g,y,b=!1,E=!1,R=0)=>{for(let O=R;O<h.length;O++)ze(h[O],g,y,b,E)},N=h=>h.shapeFlag&6?N(h.component.subTree):h.shapeFlag&128?h.suspense.next():f(h.anchor||h.el),B=(h,g,y)=>{h==null?g._vnode&&ze(g._vnode,null,null,!0):_(g._vnode||null,h,g,null,null,null,y),Vu(),$h(),g._vnode=h},oe={p:_,um:ze,m:pt,r:ds,mt:Ue,mc:P,pc:ue,pbc:V,n:N,o:t};let Ie,ee;return e&&([Ie,ee]=e(oe)),{render:B,hydrate:Ie,createApp:dy(B,Ie)}}function Nn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function rp(t,e,n=!1){const s=t.children,r=e.children;if($(s)&&$(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=ln(r[i]),a.el=o.el),n||rp(o,a)),a.type===$o&&(a.el=o.el)}}function yy(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const by=t=>t.__isTeleport,De=Symbol.for("v-fgt"),$o=Symbol.for("v-txt"),dt=Symbol.for("v-cmt"),ga=Symbol.for("v-stc"),Sr=[];let vt=null;function $e(t=!1){Sr.push(vt=t?null:[])}function wy(){Sr.pop(),vt=Sr[Sr.length-1]||null}let jr=1;function nd(t){jr+=t}function ip(t){return t.dynamicChildren=jr>0?vt||Is:null,wy(),jr>0&&vt&&vt.push(t),t}function Ye(t,e,n,s,r,i){return ip(se(t,e,n,s,r,i,!0))}function cc(t,e,n,s,r){return ip(ae(t,e,n,s,r,!0))}function Qi(t){return t?t.__v_isVNode===!0:!1}function $n(t,e){return t.type===e.type&&t.key===e.key}const Bo="__vInternal",op=({key:t})=>t??null,Mi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Re(t)||Ne(t)||Y(t)?{i:Be,r:t,k:e,f:!!n}:t:null);function se(t,e=null,n=null,s=0,r=null,i=t===De?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&op(e),ref:e&&Mi(e),scopeId:Mo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Be};return a?(uc(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Re(n)?8:16),jr>0&&!o&&vt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&vt.push(l),l}const ae=Ey;function Ey(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===ty)&&(t=dt),Qi(t)){const a=zt(t,e,!0);return n&&uc(a,n),jr>0&&!i&&vt&&(a.shapeFlag&6?vt[vt.indexOf(t)]=a:vt.push(a)),a.patchFlag|=-2,a}if(My(t)&&(t=t.__vccOpts),e){e=Iy(e);let{class:a,style:l}=e;a&&!Re(a)&&(e.class=Fr(a)),he(l)&&(Nh(l)&&!$(l)&&(l=ke({},l)),e.style=ql(l))}const o=Re(t)?1:$v(t)?128:by(t)?64:he(t)?4:Y(t)?2:0;return se(t,e,n,s,r,o,i,!0)}function Iy(t){return t?Nh(t)||Bo in t?ke({},t):t:null}function zt(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Ty(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&op(a),ref:e&&e.ref?n&&r?$(r)?r.concat(Mi(e)):[r,Mi(e)]:Mi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==De?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zt(t.ssContent),ssFallback:t.ssFallback&&zt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function mn(t=" ",e=0){return ae($o,null,t,e)}function Cy(t="",e=!1){return e?($e(),cc(dt,null,t)):ae(dt,null,t)}function At(t){return t==null||typeof t=="boolean"?ae(dt):$(t)?ae(De,null,t.slice()):typeof t=="object"?ln(t):ae($o,null,String(t))}function ln(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zt(t)}function uc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),uc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Bo in e)?e._ctx=Be:r===3&&Be&&(Be.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:Be},n=32):(e=String(e),s&64?(n=16,e=[mn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ty(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Fr([e.class,s.class]));else if(r==="style")e.style=ql([e.style,s.style]);else if(ko(r)){const i=e[r],o=s[r];o&&i!==o&&!($(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function kt(t,e,n,s=null){ut(t,e,7,[n,s])}const Sy=Xh();let ky=0;function Ry(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Sy,i={uid:ky++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new bh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ep(s,r),emitsOptions:jh(s,r),emit:null,emitted:null,propsDefaults:we,inheritAttrs:s.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Mv.bind(null,i),t.ce&&t.ce(i),i}let Le=null;const dc=()=>Le||Be;let fc,hs,sd="__VUE_INSTANCE_SETTERS__";(hs=ja()[sd])||(hs=ja()[sd]=[]),hs.push(t=>Le=t),fc=t=>{hs.length>1?hs.forEach(e=>e(t)):hs[0](t)};const Fs=t=>{fc(t),t.scope.on()},Vn=()=>{Le&&Le.scope.off(),fc(null)};function ap(t){return t.vnode.shapeFlag&4}let Hr=!1;function Ay(t,e=!1){Hr=e;const{props:n,children:s}=t.vnode,r=ap(t);fy(t,n,r,e),gy(t,s);const i=r?Py(t,e):void 0;return Hr=!1,i}function Py(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Oh(new Proxy(t.ctx,ry));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Ny(t):null;Fs(t),Ys();const i=gn(s,t,0,[t.props,r]);if(Qs(),Vn(),gh(i)){if(i.then(Vn,Vn),e)return i.then(o=>{rd(t,o,e)}).catch(o=>{No(o,t,0)});t.asyncDep=i}else rd(t,i,e)}else lp(t,e)}function rd(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:he(e)&&(t.setupState=Lh(e)),lp(t,n)}let id;function lp(t,e,n){const s=t.type;if(!t.render){if(!e&&id&&!s.render){const r=s.template||ac(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=ke(ke({isCustomElement:i,delimiters:a},o),l);s.render=id(r,c)}}t.render=s.render||wt}Fs(t),Ys(),iy(t),Qs(),Vn()}function xy(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return et(t,"get","$attrs"),e[n]}}))}function Ny(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return xy(t)},slots:t.slots,emit:t.emit,expose:e}}function jo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Lh(Oh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Tr)return Tr[n](t)},has(e,n){return n in e||n in Tr}}))}function Oy(t,e=!0){return Y(t)?t.displayName||t.name:t.name||e&&t.__name}function My(t){return Y(t)&&"__vccOpts"in t}const le=(t,e)=>Rv(t,e,Hr);function En(t,e,n){const s=arguments.length;return s===2?he(e)&&!$(e)?Qi(e)?ae(t,null,[e]):ae(t,e):ae(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Qi(n)&&(n=[n]),ae(t,e,n))}const Dy=Symbol.for("v-scx"),Ly=()=>Xe(Dy),Fy="3.3.4",Uy="http://www.w3.org/2000/svg",Bn=typeof document<"u"?document:null,od=Bn&&Bn.createElement("template"),$y={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Bn.createElementNS(Uy,t):Bn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Bn.createTextNode(t),createComment:t=>Bn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Bn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{od.innerHTML=s?`<svg>${t}</svg>`:t;const a=od.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function By(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function jy(t,e,n){const s=t.style,r=Re(n);if(n&&!r){if(e&&!Re(e))for(const i in e)n[i]==null&&el(s,i,"");for(const i in n)el(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const ad=/\s*!important$/;function el(t,e,n){if($(n))n.forEach(s=>el(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Hy(t,e);ad.test(n)?t.setProperty(rs(s),n.replace(ad,""),"important"):t[s]=n}}const ld=["Webkit","Moz","ms"],ma={};function Hy(t,e){const n=ma[e];if(n)return n;let s=Mt(e);if(s!=="filter"&&s in t)return ma[e]=s;s=Ao(s);for(let r=0;r<ld.length;r++){const i=ld[r]+s;if(i in t)return ma[e]=i}return e}const cd="http://www.w3.org/1999/xlink";function Wy(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(cd,e.slice(6,e.length)):t.setAttributeNS(cd,e,n);else{const i=B_(e);n==null||i&&!vh(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Vy(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=vh(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Ut(t,e,n,s){t.addEventListener(e,n,s)}function Ky(t,e,n,s){t.removeEventListener(e,n,s)}function qy(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=zy(e);if(s){const c=i[e]=Qy(s,r);Ut(t,a,c,l)}else o&&(Ky(t,a,o,l),i[e]=void 0)}}const ud=/(?:Once|Passive|Capture)$/;function zy(t){let e;if(ud.test(t)){e={};let s;for(;s=t.match(ud);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):rs(t.slice(2)),e]}let _a=0;const Gy=Promise.resolve(),Yy=()=>_a||(Gy.then(()=>_a=0),_a=Date.now());function Qy(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ut(Jy(s,n.value),e,5,[s])};return n.value=t,n.attached=Yy(),n}function Jy(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const dd=/^on[a-z]/,Xy=(t,e,n,s,r=!1,i,o,a,l)=>{e==="class"?By(t,s,r):e==="style"?jy(t,n,s):ko(e)?Wl(e)||qy(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Zy(t,e,s,r))?Vy(t,e,s,i,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Wy(t,e,s,r))};function Zy(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&dd.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||dd.test(e)&&Re(n)?!1:e in t}const nn="transition",dr="animation",hc=(t,{slots:e})=>En(Vv,eb(t),e);hc.displayName="Transition";const cp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};hc.props=ke({},Kh,cp);const On=(t,e=[])=>{$(t)?t.forEach(n=>n(...e)):t&&t(...e)},fd=t=>t?$(t)?t.some(e=>e.length>1):t.length>1:!1;function eb(t){const e={};for(const F in t)F in cp||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=tb(r),_=m&&m[0],v=m&&m[1],{onBeforeEnter:I,onEnter:S,onEnterCancelled:M,onLeave:A,onLeaveCancelled:G,onBeforeAppear:U=I,onAppear:Q=S,onAppearCancelled:P=M}=e,W=(F,ye,Ue)=>{Mn(F,ye?u:a),Mn(F,ye?c:o),Ue&&Ue()},V=(F,ye)=>{F._isLeaving=!1,Mn(F,d),Mn(F,p),Mn(F,f),ye&&ye()},Ae=F=>(ye,Ue)=>{const en=F?Q:S,Ee=()=>W(ye,F,Ue);On(en,[ye,Ee]),hd(()=>{Mn(ye,F?l:i),sn(ye,F?u:a),fd(en)||pd(ye,s,_,Ee)})};return ke(e,{onBeforeEnter(F){On(I,[F]),sn(F,i),sn(F,o)},onBeforeAppear(F){On(U,[F]),sn(F,l),sn(F,c)},onEnter:Ae(!1),onAppear:Ae(!0),onLeave(F,ye){F._isLeaving=!0;const Ue=()=>V(F,ye);sn(F,d),rb(),sn(F,f),hd(()=>{F._isLeaving&&(Mn(F,d),sn(F,p),fd(A)||pd(F,s,v,Ue))}),On(A,[F,Ue])},onEnterCancelled(F){W(F,!1),On(M,[F])},onAppearCancelled(F){W(F,!0),On(P,[F])},onLeaveCancelled(F){V(F),On(G,[F])}})}function tb(t){if(t==null)return null;if(he(t))return[va(t.enter),va(t.leave)];{const e=va(t);return[e,e]}}function va(t){return M_(t)}function sn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Mn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function hd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let nb=0;function pd(t,e,n,s){const r=t._endId=++nb,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=sb(t,e);if(!o)return s();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,f),i()},f=p=>{p.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,f)}function sb(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),r=s(`${nn}Delay`),i=s(`${nn}Duration`),o=gd(r,i),a=s(`${dr}Delay`),l=s(`${dr}Duration`),c=gd(a,l);let u=null,d=0,f=0;e===nn?o>0&&(u=nn,d=o,f=i.length):e===dr?c>0&&(u=dr,d=c,f=l.length):(d=Math.max(o,c),u=d>0?o>c?nn:dr:null,f=u?u===nn?i.length:l.length:0);const p=u===nn&&/\b(transform|all)(,|$)/.test(s(`${nn}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function gd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>md(n)+md(t[s])))}function md(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function rb(){return document.body.offsetHeight}const In=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>Oi(e,n):e};function ib(t){t.target.composing=!0}function _d(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ji={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=In(r);const i=s||r.props&&r.props.type==="number";Ut(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Wi(a)),t._assign(a)}),n&&Ut(t,"change",()=>{t.value=t.value.trim()}),e||(Ut(t,"compositionstart",ib),Ut(t,"compositionend",_d),Ut(t,"change",_d))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=In(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Wi(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},ob={deep:!0,created(t,e,n){t._assign=In(n),Ut(t,"change",()=>{const s=t._modelValue,r=Us(t),i=t.checked,o=t._assign;if($(s)){const a=zl(s,r),l=a!==-1;if(i&&!l)o(s.concat(r));else if(!i&&l){const c=[...s];c.splice(a,1),o(c)}}else if(Gs(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(up(t,i))})},mounted:vd,beforeUpdate(t,e,n){t._assign=In(n),vd(t,e,n)}};function vd(t,{value:e,oldValue:n},s){t._modelValue=e,$(e)?t.checked=zl(e,s.props.value)>-1:Gs(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=zn(e,up(t,!0)))}const ab={created(t,{value:e},n){t.checked=zn(e,n.props.value),t._assign=In(n),Ut(t,"change",()=>{t._assign(Us(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=In(s),e!==n&&(t.checked=zn(e,s.props.value))}},lb={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Gs(e);Ut(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Wi(Us(o)):Us(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=In(s)},mounted(t,{value:e}){yd(t,e)},beforeUpdate(t,e,n){t._assign=In(n)},updated(t,{value:e}){yd(t,e)}};function yd(t,e){const n=t.multiple;if(!(n&&!$(e)&&!Gs(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=Us(i);if(n)$(e)?i.selected=zl(e,o)>-1:i.selected=e.has(o);else if(zn(Us(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Us(t){return"_value"in t?t._value:t.value}function up(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const cb={created(t,e,n){Ii(t,e,n,null,"created")},mounted(t,e,n){Ii(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){Ii(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){Ii(t,e,n,s,"updated")}};function ub(t,e){switch(t){case"SELECT":return lb;case"TEXTAREA":return Ji;default:switch(e){case"checkbox":return ob;case"radio":return ab;default:return Ji}}}function Ii(t,e,n,s,r){const o=ub(t.tagName,n.props&&n.props.type)[r];o&&o(t,e,n,s)}const db=["ctrl","shift","alt","meta"],fb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>db.some(n=>t[`${n}Key`]&&!e.includes(n))},bd=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=fb[e[r]];if(i&&i(n,e))return}return t(n,...s)},hb={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},pb=(t,e)=>n=>{if(!("key"in n))return;const s=rs(n.key);if(e.some(r=>r===s||hb[r]===s))return t(n)},gb=ke({patchProp:Xy},$y);let wd;function mb(){return wd||(wd=_y(gb))}const _b=(...t)=>{const e=mb().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=vb(s);if(!r)return;const i=e._component;!Y(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function vb(t){return Re(t)?document.querySelector(t):t}const dp=new Set,Ze=new WeakMap,As=new WeakMap,Gn=new WeakMap,tl=new WeakMap,yb=new WeakMap,$s=new WeakMap,Xi=new WeakMap,wr=new WeakSet;let Yn;const $t="__aa_tgt",nl="__aa_del",bb=t=>{const e=Tb(t);e&&e.forEach(n=>Sb(n))},wb=t=>{t.forEach(e=>{e.target===Yn&&Ib(),Ze.has(e.target)&&os(e.target)})};function Eb(t){const e=tl.get(t);e==null||e.disconnect();let n=Ze.get(t),s=0;const r=5;n||(n=Bs(t),Ze.set(t,n));const{offsetWidth:i,offsetHeight:o}=Yn,l=[n.top-r,i-(n.left+r+n.width),o-(n.top+r+n.height),n.left-r].map(u=>`${-1*Math.floor(u)}px`).join(" "),c=new IntersectionObserver(()=>{++s>1&&os(t)},{root:Yn,threshold:1,rootMargin:l});c.observe(t),tl.set(t,c)}function os(t){clearTimeout(Xi.get(t));const e=Ho(t),n=typeof e=="function"?500:e.duration;Xi.set(t,setTimeout(async()=>{const s=Gn.get(t);try{await(s==null?void 0:s.finished),Ze.set(t,Bs(t)),Eb(t)}catch{}},n))}function Ib(){clearTimeout(Xi.get(Yn)),Xi.set(Yn,setTimeout(()=>{dp.forEach(t=>gp(t,e=>fp(()=>os(e))))},100))}function Cb(t){setTimeout(()=>{yb.set(t,setInterval(()=>fp(os.bind(null,t)),2e3))},Math.round(2e3*Math.random()))}function fp(t){typeof requestIdleCallback=="function"?requestIdleCallback(()=>t()):requestAnimationFrame(()=>t())}let sl,ys;typeof window<"u"&&(Yn=document.documentElement,sl=new MutationObserver(bb),ys=new ResizeObserver(wb),ys.observe(Yn));function Tb(t){return t.reduce((s,r)=>[...s,...Array.from(r.addedNodes),...Array.from(r.removedNodes)],[]).every(s=>s.nodeName==="#comment")?!1:t.reduce((s,r)=>{if(s===!1)return!1;if(r.target instanceof Element){if(ya(r.target),!s.has(r.target)){s.add(r.target);for(let i=0;i<r.target.children.length;i++){const o=r.target.children.item(i);if(o){if(nl in o)return!1;ya(r.target,o),s.add(o)}}}if(r.removedNodes.length)for(let i=0;i<r.removedNodes.length;i++){const o=r.removedNodes[i];if(nl in o)return!1;o instanceof Element&&(s.add(o),ya(r.target,o),As.set(o,[r.previousSibling,r.nextSibling]))}}return s},new Set)}function ya(t,e){!e&&!($t in t)?Object.defineProperty(t,$t,{value:t}):e&&!($t in e)&&Object.defineProperty(e,$t,{value:t})}function Sb(t){var e;const n=t.isConnected,s=Ze.has(t);n&&As.has(t)&&As.delete(t),Gn.has(t)&&((e=Gn.get(t))===null||e===void 0||e.cancel()),s&&n?Rb(t):s&&!n?Pb(t):Ab(t)}function Rt(t){return Number(t.replace(/[^0-9.\-]/g,""))}function kb(t){let e=t.parentElement;for(;e;){if(e.scrollLeft||e.scrollTop)return{x:e.scrollLeft,y:e.scrollTop};e=e.parentElement}return{x:0,y:0}}function Bs(t){const e=t.getBoundingClientRect(),{x:n,y:s}=kb(t);return{top:e.top+s,left:e.left+n,width:e.width,height:e.height}}function hp(t,e,n){let s=e.width,r=e.height,i=n.width,o=n.height;const a=getComputedStyle(t);if(a.getPropertyValue("box-sizing")==="content-box"){const c=Rt(a.paddingTop)+Rt(a.paddingBottom)+Rt(a.borderTopWidth)+Rt(a.borderBottomWidth),u=Rt(a.paddingLeft)+Rt(a.paddingRight)+Rt(a.borderRightWidth)+Rt(a.borderLeftWidth);s-=u,i-=u,r-=c,o-=c}return[s,i,r,o].map(Math.round)}function Ho(t){return $t in t&&$s.has(t[$t])?$s.get(t[$t]):{duration:250,easing:"ease-in-out"}}function pp(t){if($t in t)return t[$t]}function pc(t){const e=pp(t);return e?wr.has(e):!1}function gp(t,...e){e.forEach(n=>n(t,$s.has(t)));for(let n=0;n<t.children.length;n++){const s=t.children.item(n);s&&e.forEach(r=>r(s,$s.has(s)))}}function Rb(t){const e=Ze.get(t),n=Bs(t);if(!pc(t))return Ze.set(t,n);let s;if(!e)return;const r=Ho(t);if(typeof r!="function"){const i=e.left-n.left,o=e.top-n.top,[a,l,c,u]=hp(t,e,n),d={transform:`translate(${i}px, ${o}px)`},f={transform:"translate(0, 0)"};a!==l&&(d.width=`${a}px`,f.width=`${l}px`),c!==u&&(d.height=`${c}px`,f.height=`${u}px`),s=t.animate([d,f],{duration:r.duration,easing:r.easing})}else s=new Animation(r(t,"remain",e,n)),s.play();Gn.set(t,s),Ze.set(t,n),s.addEventListener("finish",os.bind(null,t))}function Ab(t){const e=Bs(t);Ze.set(t,e);const n=Ho(t);if(!pc(t))return;let s;typeof n!="function"?s=t.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:n.duration*1.5,easing:"ease-in"}):(s=new Animation(n(t,"add",e)),s.play()),Gn.set(t,s),s.addEventListener("finish",os.bind(null,t))}function Pb(t){var e;if(!As.has(t)||!Ze.has(t))return;const[n,s]=As.get(t);Object.defineProperty(t,nl,{value:!0}),s&&s.parentNode&&s.parentNode instanceof Element?s.parentNode.insertBefore(t,s):n&&n.parentNode?n.parentNode.appendChild(t):(e=pp(t))===null||e===void 0||e.appendChild(t);function r(){var f;t.remove(),Ze.delete(t),As.delete(t),Gn.delete(t),(f=tl.get(t))===null||f===void 0||f.disconnect()}if(!pc(t))return r();const[i,o,a,l]=xb(t),c=Ho(t),u=Ze.get(t);let d;Object.assign(t.style,{position:"absolute",top:`${i}px`,left:`${o}px`,width:`${a}px`,height:`${l}px`,margin:0,pointerEvents:"none",transformOrigin:"center",zIndex:100}),typeof c!="function"?d=t.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:c.duration,easing:"ease-out"}):(d=new Animation(c(t,"remove",u)),d.play()),Gn.set(t,d),d.addEventListener("finish",r)}function xb(t){const e=Ze.get(t),[n,,s]=hp(t,e,Bs(t));let r=t.parentElement;for(;r&&(getComputedStyle(r).position==="static"||r instanceof HTMLBodyElement);)r=r.parentElement;r||(r=document.body);const i=getComputedStyle(r),o=Ze.get(r)||Bs(r),a=Math.round(e.top-o.top)-Rt(i.borderTopWidth),l=Math.round(e.left-o.left)-Rt(i.borderLeftWidth);return[a,l,n,s]}function Nb(t,e={}){return sl&&ys&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&typeof e!="function"&&!e.disrespectUserMotionPreference||(wr.add(t),getComputedStyle(t).position==="static"&&Object.assign(t.style,{position:"relative"}),gp(t,os,Cb,r=>ys==null?void 0:ys.observe(r)),typeof e=="function"?$s.set(t,e):$s.set(t,{duration:250,easing:"ease-in-out",...e}),sl.observe(t,{childList:!0}),dp.add(t))),Object.freeze({parent:t,enable:()=>{wr.add(t)},disable:()=>{wr.delete(t)},isEnabled:()=>wr.has(t)})}const Ob={mounted:(t,e)=>{Nb(t,e.value||{})}},Mb={install(t){t.directive("auto-animate",Ob)}};function Db(){return mp().__VUE_DEVTOOLS_GLOBAL_HOOK__}function mp(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Lb=typeof Proxy=="function",Fb="devtools-plugin:setup",Ub="plugin:settings:set";let ps,rl;function $b(){var t;return ps!==void 0||(typeof window<"u"&&window.performance?(ps=!0,rl=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(ps=!0,rl=global.perf_hooks.performance):ps=!1),ps}function Bb(){return $b()?rl.now():Date.now()}class jb{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},s);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}i=o},now(){return Bb()}},n&&n.on(Ub,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Hb(t,e){const n=t,s=mp(),r=Db(),i=Lb&&n.enableEarlyProxy;if(r&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))r.emit(Fb,t,e);else{const o=i?new jb(n,r):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const _p=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Zs=t=>_p?Symbol(t):"_vr_"+t,Wb=Zs("rvlm"),Ed=Zs("rvd"),Wo=Zs("r"),vp=Zs("rl"),il=Zs("rvl"),vs=typeof window<"u";function Vb(t){return t.__esModule||_p&&t[Symbol.toStringTag]==="Module"}const ge=Object.assign;function ba(t,e){const n={};for(const s in e){const r=e[s];n[s]=Array.isArray(r)?r.map(t):t(r)}return n}const kr=()=>{},Kb=/\/$/,qb=t=>t.replace(Kb,"");function wa(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("?"),l=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),i=e.slice(a+1,l>-1?l:e.length),r=t(i)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=Qb(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function zb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Id(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Gb(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&js(e.matched[s],n.matched[r])&&yp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function js(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function yp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Yb(t[n],e[n]))return!1;return!0}function Yb(t,e){return Array.isArray(t)?Cd(t,e):Array.isArray(e)?Cd(e,t):t===e}function Cd(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Qb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Wr;(function(t){t.pop="pop",t.push="push"})(Wr||(Wr={}));var Rr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Rr||(Rr={}));function Jb(t){if(!t)if(vs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),qb(t)}const Xb=/^[^#]+#/;function Zb(t,e){return t.replace(Xb,"#")+e}function ew(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Vo=()=>({left:window.pageXOffset,top:window.pageYOffset});function tw(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=ew(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Td(t,e){return(history.state?history.state.position-e:-1)+t}const ol=new Map;function nw(t,e){ol.set(t,e)}function sw(t){const e=ol.get(t);return ol.delete(t),e}let rw=()=>location.protocol+"//"+location.host;function bp(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Id(l,"")}return Id(n,t)+s+r}function iw(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const p=bp(t,location),m=n.value,_=e.value;let v=0;if(f){if(n.value=p,e.value=f,o&&o===m){o=null;return}v=_?f.position-_.position:0}else s(p);r.forEach(I=>{I(n.value,m,{delta:v,type:Wr.pop,direction:v?v>0?Rr.forward:Rr.back:Rr.unknown})})};function l(){o=n.value}function c(f){r.push(f);const p=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return i.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(ge({},f.state,{scroll:Vo()}),"")}function d(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function Sd(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Vo():null}}function ow(t){const{history:e,location:n}=window,s={value:bp(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:rw()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(l,c){const u=ge({},e.state,Sd(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});i(l,u,!0),s.value=l}function a(l,c){const u=ge({},r.value,e.state,{forward:l,scroll:Vo()});i(u.current,u,!0);const d=ge({},Sd(s.value,l,null),{position:u.position+1},c);i(l,d,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function aw(t){t=Jb(t);const e=ow(t),n=iw(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ge({location:"",base:t,go:s,createHref:Zb.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function lw(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),aw(t)}function cw(t){return typeof t=="string"||t&&typeof t=="object"}function wp(t){return typeof t=="string"||typeof t=="symbol"}const rn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ep=Zs("nf");var kd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(kd||(kd={}));function Hs(t,e){return ge(new Error,{type:t,[Ep]:!0},e)}function on(t,e){return t instanceof Error&&Ep in t&&(e==null||!!(t.type&e))}const Rd="[^/]+?",uw={sensitive:!1,strict:!1,start:!0,end:!0},dw=/[.+*?^${}()[\]/\\]/g;function fw(t,e){const n=ge({},uw,e),s=[];let r=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const f=c[d];let p=40+(n.sensitive?.25:0);if(f.type===0)d||(r+="/"),r+=f.value.replace(dw,"\\$&"),p+=40;else if(f.type===1){const{value:m,repeatable:_,optional:v,regexp:I}=f;i.push({name:m,repeatable:_,optional:v});const S=I||Rd;if(S!==Rd){p+=10;try{new RegExp(`(${S})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${m}" (${S}): `+A.message)}}let M=_?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;d||(M=v&&c.length<2?`(?:/${M})`:"/"+M),v&&(M+="?"),r+=M,p+=20,v&&(p+=-8),_&&(p+=-20),S===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",m=i[f-1];d[m.name]=p&&m.repeatable?p.split("/"):p}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:_,optional:v}=p,I=m in c?c[m]:"";if(Array.isArray(I)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const S=Array.isArray(I)?I.join("/"):I;if(!S)if(v)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${m}"`);u+=S}}return u}return{re:o,score:s,keys:i,parse:a,stringify:l}}function hw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function pw(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=hw(s[n],r[n]);if(i)return i;n++}return r.length-s.length}const gw={type:0,value:""},mw=/[a-zA-Z0-9_]/;function _w(t){if(!t)return[[]];if(t==="/")return[[gw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,c="",u="";function d(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):f();break;case 4:f(),n=s;break;case 1:l==="("?n=2:mw.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),r}function vw(t,e,n){const s=fw(_w(t.path),n),r=ge(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function yw(t,e){const n=[],s=new Map;e=Pd({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,d,f){const p=!f,m=ww(u);m.aliasOf=f&&f.record;const _=Pd(e,u),v=[m];if("alias"in u){const M=typeof u.alias=="string"?[u.alias]:u.alias;for(const A of M)v.push(ge({},m,{components:f?f.record.components:m.components,path:A,aliasOf:f?f.record:m}))}let I,S;for(const M of v){const{path:A}=M;if(d&&A[0]!=="/"){const G=d.record.path,U=G[G.length-1]==="/"?"":"/";M.path=d.record.path+(A&&U+A)}if(I=vw(M,d,_),f?f.alias.push(I):(S=S||I,S!==I&&S.alias.push(I),p&&u.name&&!Ad(I)&&o(u.name)),"children"in m){const G=m.children;for(let U=0;U<G.length;U++)i(G[U],I,f&&f.children[U])}f=f||I,l(I)}return S?()=>{o(S)}:kr}function o(u){if(wp(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&pw(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Ip(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Ad(u)&&s.set(u.record.name,u)}function c(u,d){let f,p={},m,_;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Hs(1,{location:u});_=f.record.name,p=ge(bw(d.params,f.keys.filter(S=>!S.optional).map(S=>S.name)),u.params),m=f.stringify(p)}else if("path"in u)m=u.path,f=n.find(S=>S.re.test(m)),f&&(p=f.parse(m),_=f.record.name);else{if(f=d.name?s.get(d.name):n.find(S=>S.re.test(d.path)),!f)throw Hs(1,{location:u,currentLocation:d});_=f.record.name,p=ge({},d.params,u.params),m=f.stringify(p)}const v=[];let I=f;for(;I;)v.unshift(I.record),I=I.parent;return{name:_,path:m,params:p,matched:v,meta:Iw(v)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function bw(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function ww(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Ew(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Ew(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Ad(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Iw(t){return t.reduce((e,n)=>ge(e,n.meta),{})}function Pd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Ip(t,e){return e.children.some(n=>n===t||Ip(t,n))}const Cp=/#/g,Cw=/&/g,Tw=/\//g,Sw=/=/g,kw=/\?/g,Tp=/\+/g,Rw=/%5B/g,Aw=/%5D/g,Sp=/%5E/g,Pw=/%60/g,kp=/%7B/g,xw=/%7C/g,Rp=/%7D/g,Nw=/%20/g;function gc(t){return encodeURI(""+t).replace(xw,"|").replace(Rw,"[").replace(Aw,"]")}function Ow(t){return gc(t).replace(kp,"{").replace(Rp,"}").replace(Sp,"^")}function al(t){return gc(t).replace(Tp,"%2B").replace(Nw,"+").replace(Cp,"%23").replace(Cw,"%26").replace(Pw,"`").replace(kp,"{").replace(Rp,"}").replace(Sp,"^")}function Mw(t){return al(t).replace(Sw,"%3D")}function Dw(t){return gc(t).replace(Cp,"%23").replace(kw,"%3F")}function Lw(t){return t==null?"":Dw(t).replace(Tw,"%2F")}function Zi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Fw(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Tp," "),o=i.indexOf("="),a=Zi(o<0?i:i.slice(0,o)),l=o<0?null:Zi(i.slice(o+1));if(a in e){let c=e[a];Array.isArray(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function xd(t){let e="";for(let n in t){const s=t[n];if(n=Mw(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(i=>i&&al(i)):[s&&al(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Uw(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}function fr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function cn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(Hs(4,{from:n,to:e})):d instanceof Error?a(d):cw(d)?a(Hs(2,{from:e,to:d})):(i&&s.enterCallbacks[r]===i&&typeof d=="function"&&i.push(d),o())},c=t.call(s&&s.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function Ea(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if($w(a)){const c=(a.__vccOpts||a)[e];c&&r.push(cn(c,n,s,i,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Vb(c)?c.default:c;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&cn(f,n,s,i,o)()}))}}return r}function $w(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Nd(t){const e=Xe(Wo),n=Xe(vp),s=le(()=>e.resolve(Ss(t.to))),r=le(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(js.bind(null,u));if(f>-1)return f;const p=Od(l[c-2]);return c>1&&Od(u)===p&&d[d.length-1].path!==p?d.findIndex(js.bind(null,l[c-2])):f}),i=le(()=>r.value>-1&&Ww(n.params,s.value.params)),o=le(()=>r.value>-1&&r.value===n.matched.length-1&&yp(n.params,s.value.params));function a(l={}){return Hw(l)?e[Ss(t.replace)?"replace":"push"](Ss(t.to)).catch(kr):Promise.resolve()}return{route:s,href:le(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Bw=Jt({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Nd,setup(t,{slots:e}){const n=Js(Nd(t)),{options:s}=Xe(Wo),r=le(()=>({[Md(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Md(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:En("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),jw=Bw;function Hw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ww(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Od(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Md=(t,e,n)=>t??e??n,Vw=Jt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=Xe(il),r=le(()=>t.route||s.value),i=Xe(Ed,0),o=le(()=>r.value.matched[i]);Rs(Ed,i+1),Rs(Wb,o),Rs(il,r);const a=X();return xt(()=>[a.value,o.value,t.name],([l,c,u],[d,f,p])=>{c&&(c.instances[u]=l,f&&f!==c&&l&&l===d&&(c.leaveGuards.size||(c.leaveGuards=f.leaveGuards),c.updateGuards.size||(c.updateGuards=f.updateGuards))),l&&c&&(!f||!js(c,f)||!d)&&(c.enterCallbacks[u]||[]).forEach(m=>m(l))},{flush:"post"}),()=>{const l=r.value,c=o.value,u=c&&c.components[t.name],d=t.name;if(!u)return Dd(n.default,{Component:u,route:l});const f=c.props[t.name],p=f?f===!0?l.params:typeof f=="function"?f(l):f:null,_=En(u,ge({},p,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(c.instances[d]=null)},ref:a}));return Dd(n.default,{Component:_,route:l})||_}}});function Dd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Kw=Vw;function qw(t){const e=yw(t.routes,t),n=t.parseQuery||Fw,s=t.stringifyQuery||xd,r=t.history,i=fr(),o=fr(),a=fr(),l=Mh(rn);let c=rn;vs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ba.bind(null,w=>""+w),d=ba.bind(null,Lw),f=ba.bind(null,Zi);function p(w,D){let N,B;return wp(w)?(N=e.getRecordMatcher(w),B=D):B=w,e.addRoute(B,N)}function m(w){const D=e.getRecordMatcher(w);D&&e.removeRoute(D)}function _(){return e.getRoutes().map(w=>w.record)}function v(w){return!!e.getRecordMatcher(w)}function I(w,D){if(D=ge({},D||l.value),typeof w=="string"){const h=wa(n,w,D.path),g=e.resolve({path:h.path},D),y=r.createHref(h.fullPath);return ge(h,g,{params:f(g.params),hash:Zi(h.hash),redirectedFrom:void 0,href:y})}let N;if("path"in w)N=ge({},w,{path:wa(n,w.path,D.path).path});else{const h=ge({},w.params);for(const g in h)h[g]==null&&delete h[g];N=ge({},w,{params:d(w.params)}),D.params=d(D.params)}const B=e.resolve(N,D),oe=w.hash||"";B.params=u(f(B.params));const Ie=zb(s,ge({},w,{hash:Ow(oe),path:B.path})),ee=r.createHref(Ie);return ge({fullPath:Ie,hash:oe,query:s===xd?Uw(w.query):w.query||{}},B,{redirectedFrom:void 0,href:ee})}function S(w){return typeof w=="string"?wa(n,w,l.value.path):ge({},w)}function M(w,D){if(c!==w)return Hs(8,{from:D,to:w})}function A(w){return Q(w)}function G(w){return A(ge(S(w),{replace:!0}))}function U(w){const D=w.matched[w.matched.length-1];if(D&&D.redirect){const{redirect:N}=D;let B=typeof N=="function"?N(w):N;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=S(B):{path:B},B.params={}),ge({query:w.query,hash:w.hash,params:w.params},B)}}function Q(w,D){const N=c=I(w),B=l.value,oe=w.state,Ie=w.force,ee=w.replace===!0,h=U(N);if(h)return Q(ge(S(h),{state:oe,force:Ie,replace:ee}),D||N);const g=N;g.redirectedFrom=D;let y;return!Ie&&Gb(s,B,N)&&(y=Hs(16,{to:g,from:B}),Pn(B,B,!0,!1)),(y?Promise.resolve(y):W(g,B)).catch(b=>on(b)?on(b,2)?b:ht(b):me(b,g,B)).then(b=>{if(b){if(on(b,2))return Q(ge(S(b.to),{state:oe,force:Ie,replace:ee}),D||g)}else b=Ae(g,B,!0,ee,oe);return V(g,B,b),b})}function P(w,D){const N=M(w,D);return N?Promise.reject(N):Promise.resolve()}function W(w,D){let N;const[B,oe,Ie]=zw(w,D);N=Ea(B.reverse(),"beforeRouteLeave",w,D);for(const h of B)h.leaveGuards.forEach(g=>{N.push(cn(g,w,D))});const ee=P.bind(null,w,D);return N.push(ee),gs(N).then(()=>{N=[];for(const h of i.list())N.push(cn(h,w,D));return N.push(ee),gs(N)}).then(()=>{N=Ea(oe,"beforeRouteUpdate",w,D);for(const h of oe)h.updateGuards.forEach(g=>{N.push(cn(g,w,D))});return N.push(ee),gs(N)}).then(()=>{N=[];for(const h of w.matched)if(h.beforeEnter&&!D.matched.includes(h))if(Array.isArray(h.beforeEnter))for(const g of h.beforeEnter)N.push(cn(g,w,D));else N.push(cn(h.beforeEnter,w,D));return N.push(ee),gs(N)}).then(()=>(w.matched.forEach(h=>h.enterCallbacks={}),N=Ea(Ie,"beforeRouteEnter",w,D),N.push(ee),gs(N))).then(()=>{N=[];for(const h of o.list())N.push(cn(h,w,D));return N.push(ee),gs(N)}).catch(h=>on(h,8)?h:Promise.reject(h))}function V(w,D,N){for(const B of a.list())B(w,D,N)}function Ae(w,D,N,B,oe){const Ie=M(w,D);if(Ie)return Ie;const ee=D===rn,h=vs?history.state:{};N&&(B||ee?r.replace(w.fullPath,ge({scroll:ee&&h&&h.scroll},oe)):r.push(w.fullPath,oe)),l.value=w,Pn(w,D,N,ee),ht()}let F;function ye(){F=r.listen((w,D,N)=>{const B=I(w),oe=U(B);if(oe){Q(ge(oe,{replace:!0}),B).catch(kr);return}c=B;const Ie=l.value;vs&&nw(Td(Ie.fullPath,N.delta),Vo()),W(B,Ie).catch(ee=>on(ee,12)?ee:on(ee,2)?(Q(ee.to,B).then(h=>{on(h,20)&&!N.delta&&N.type===Wr.pop&&r.go(-1,!1)}).catch(kr),Promise.reject()):(N.delta&&r.go(-N.delta,!1),me(ee,B,Ie))).then(ee=>{ee=ee||Ae(B,Ie,!1),ee&&(N.delta?r.go(-N.delta,!1):N.type===Wr.pop&&on(ee,20)&&r.go(-1,!1)),V(B,Ie,ee)}).catch(kr)})}let Ue=fr(),en=fr(),Ee;function me(w,D,N){ht(w);const B=en.list();return B.length?B.forEach(oe=>oe(w,D,N)):console.error(w),Promise.reject(w)}function ue(){return Ee&&l.value!==rn?Promise.resolve():new Promise((w,D)=>{Ue.add([w,D])})}function ht(w){return Ee||(Ee=!w,ye(),Ue.list().forEach(([D,N])=>w?N(w):D()),Ue.reset()),w}function Pn(w,D,N,B){const{scrollBehavior:oe}=t;if(!vs||!oe)return Promise.resolve();const Ie=!N&&sw(Td(w.fullPath,0))||(B||!N)&&history.state&&history.state.scroll||null;return Et().then(()=>oe(w,D,Ie)).then(ee=>ee&&tw(ee)).catch(ee=>me(ee,w,D))}const pt=w=>r.go(w);let ze;const ds=new Set;return{currentRoute:l,addRoute:p,removeRoute:m,hasRoute:v,getRoutes:_,resolve:I,options:t,push:A,replace:G,go:pt,back:()=>pt(-1),forward:()=>pt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:en.add,isReady:ue,install(w){const D=this;w.component("RouterLink",jw),w.component("RouterView",Kw),w.config.globalProperties.$router=D,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>Ss(l)}),vs&&!ze&&l.value===rn&&(ze=!0,A(r.location).catch(oe=>{}));const N={};for(const oe in rn)N[oe]=le(()=>l.value[oe]);w.provide(Wo,D),w.provide(vp,Js(N)),w.provide(il,l);const B=w.unmount;ds.add(w),w.unmount=function(){ds.delete(w),ds.size<1&&(c=rn,F&&F(),l.value=rn,ze=!1,Ee=!1),B()}}}}function gs(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function zw(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>js(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>js(c,l))||r.push(l))}return[n,s,r]}function Ap(){return Xe(Wo)}const Ar=/^[a-z0-9]+(-[a-z0-9]+)*$/,Ko=(t,e,n,s="")=>{const r=t.split(":");if(t.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;s=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const a=r.pop(),l=r.pop(),c={provider:r.length>0?r[0]:s,prefix:l,name:a};return e&&!Di(c)?null:c}const i=r[0],o=i.split("-");if(o.length>1){const a={provider:s,prefix:o.shift(),name:o.join("-")};return e&&!Di(a)?null:a}if(n&&s===""){const a={provider:s,prefix:"",name:i};return e&&!Di(a,n)?null:a}return null},Di=(t,e)=>t?!!((t.provider===""||t.provider.match(Ar))&&(e&&t.prefix===""||t.prefix.match(Ar))&&t.name.match(Ar)):!1,Pp=Object.freeze({left:0,top:0,width:16,height:16}),eo=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),qo=Object.freeze({...Pp,...eo}),ll=Object.freeze({...qo,body:"",hidden:!1});function Gw(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const s=((t.rotate||0)+(e.rotate||0))%4;return s&&(n.rotate=s),n}function Ld(t,e){const n=Gw(t,e);for(const s in ll)s in eo?s in t&&!(s in n)&&(n[s]=eo[s]):s in e?n[s]=e[s]:s in t&&(n[s]=t[s]);return n}function Yw(t,e){const n=t.icons,s=t.aliases||Object.create(null),r=Object.create(null);function i(o){if(n[o])return r[o]=[];if(!(o in r)){r[o]=null;const a=s[o]&&s[o].parent,l=a&&i(a);l&&(r[o]=[a].concat(l))}return r[o]}return(e||Object.keys(n).concat(Object.keys(s))).forEach(i),r}function Qw(t,e,n){const s=t.icons,r=t.aliases||Object.create(null);let i={};function o(a){i=Ld(s[a]||r[a],i)}return o(e),n.forEach(o),Ld(t,i)}function xp(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(r=>{e(r,null),n.push(r)});const s=Yw(t);for(const r in s){const i=s[r];i&&(e(r,Qw(t,r,i)),n.push(r))}return n}const Jw={provider:"",aliases:{},not_found:{},...Pp};function Ia(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function Np(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!Ia(t,Jw))return null;const n=e.icons;for(const r in n){const i=n[r];if(!r.match(Ar)||typeof i.body!="string"||!Ia(i,ll))return null}const s=e.aliases||Object.create(null);for(const r in s){const i=s[r],o=i.parent;if(!r.match(Ar)||typeof o!="string"||!n[o]&&!s[o]||!Ia(i,ll))return null}return e}const Fd=Object.create(null);function Xw(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function Qn(t,e){const n=Fd[t]||(Fd[t]=Object.create(null));return n[e]||(n[e]=Xw(t,e))}function mc(t,e){return Np(e)?xp(e,(n,s)=>{s?t.icons[n]=s:t.missing.add(n)}):[]}function Zw(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let Vr=!1;function Op(t){return typeof t=="boolean"&&(Vr=t),Vr}function eE(t){const e=typeof t=="string"?Ko(t,!0,Vr):t;if(e){const n=Qn(e.provider,e.prefix),s=e.name;return n.icons[s]||(n.missing.has(s)?null:void 0)}}function tE(t,e){const n=Ko(t,!0,Vr);if(!n)return!1;const s=Qn(n.provider,n.prefix);return Zw(s,n.name,e)}function nE(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),Vr&&!e&&!t.prefix){let r=!1;return Np(t)&&(t.prefix="",xp(t,(i,o)=>{o&&tE(i,o)&&(r=!0)})),r}const n=t.prefix;if(!Di({provider:e,prefix:n,name:"a"}))return!1;const s=Qn(e,n);return!!mc(s,t)}const Mp=Object.freeze({width:null,height:null}),Dp=Object.freeze({...Mp,...eo}),sE=/(-?[0-9.]*[0-9]+[0-9.]*)/g,rE=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Ud(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const s=t.split(sE);if(s===null||!s.length)return t;const r=[];let i=s.shift(),o=rE.test(i);for(;;){if(o){const a=parseFloat(i);isNaN(a)?r.push(i):r.push(Math.ceil(a*e*n)/n)}else r.push(i);if(i=s.shift(),i===void 0)return r.join("");o=!o}}const iE=t=>t==="unset"||t==="undefined"||t==="none";function oE(t,e){const n={...qo,...t},s={...Dp,...e},r={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,s].forEach(m=>{const _=[],v=m.hFlip,I=m.vFlip;let S=m.rotate;v?I?S+=2:(_.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),_.push("scale(-1 1)"),r.top=r.left=0):I&&(_.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),_.push("scale(1 -1)"),r.top=r.left=0);let M;switch(S<0&&(S-=Math.floor(S/4)*4),S=S%4,S){case 1:M=r.height/2+r.top,_.unshift("rotate(90 "+M.toString()+" "+M.toString()+")");break;case 2:_.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:M=r.width/2+r.left,_.unshift("rotate(-90 "+M.toString()+" "+M.toString()+")");break}S%2===1&&(r.left!==r.top&&(M=r.left,r.left=r.top,r.top=M),r.width!==r.height&&(M=r.width,r.width=r.height,r.height=M)),_.length&&(i='<g transform="'+_.join(" ")+'">'+i+"</g>")});const o=s.width,a=s.height,l=r.width,c=r.height;let u,d;o===null?(d=a===null?"1em":a==="auto"?c:a,u=Ud(d,l/c)):(u=o==="auto"?l:o,d=a===null?Ud(u,c/l):a==="auto"?c:a);const f={},p=(m,_)=>{iE(_)||(f[m]=_.toString())};return p("width",u),p("height",d),f.viewBox=r.left.toString()+" "+r.top.toString()+" "+l.toString()+" "+c.toString(),{attributes:f,body:i}}const aE=/\sid="(\S+)"/g,lE="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let cE=0;function uE(t,e=lE){const n=[];let s;for(;s=aE.exec(t);)n.push(s[1]);if(!n.length)return t;const r="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const o=typeof e=="function"?e(i):e+(cE++).toString(),a=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+o+r+"$3")}),t=t.replace(new RegExp(r,"g"),""),t}const cl=Object.create(null);function dE(t,e){cl[t]=e}function ul(t){return cl[t]||cl[""]}function _c(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const vc=Object.create(null),hr=["https://api.simplesvg.com","https://api.unisvg.com"],Li=[];for(;hr.length>0;)hr.length===1||Math.random()>.5?Li.push(hr.shift()):Li.push(hr.pop());vc[""]=_c({resources:["https://api.iconify.design"].concat(Li)});function fE(t,e){const n=_c(e);return n===null?!1:(vc[t]=n,!0)}function yc(t){return vc[t]}const hE=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let $d=hE();function pE(t,e){const n=yc(t);if(!n)return 0;let s;if(!n.maxURL)s=0;else{let r=0;n.resources.forEach(o=>{r=Math.max(r,o.length)});const i=e+".json?icons=";s=n.maxURL-r-n.path.length-i.length}return s}function gE(t){return t===404}const mE=(t,e,n)=>{const s=[],r=pE(t,e),i="icons";let o={type:i,provider:t,prefix:e,icons:[]},a=0;return n.forEach((l,c)=>{a+=l.length+1,a>=r&&c>0&&(s.push(o),o={type:i,provider:t,prefix:e,icons:[]},a=l.length),o.icons.push(l)}),s.push(o),s};function _E(t){if(typeof t=="string"){const e=yc(t);if(e)return e.path}return"/"}const vE=(t,e,n)=>{if(!$d){n("abort",424);return}let s=_E(e.provider);switch(e.type){case"icons":{const i=e.prefix,a=e.icons.join(","),l=new URLSearchParams({icons:a});s+=i+".json?"+l.toString();break}case"custom":{const i=e.uri;s+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let r=503;$d(t+s).then(i=>{const o=i.status;if(o!==200){setTimeout(()=>{n(gE(o)?"abort":"next",o)});return}return r=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",r)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",r)})},yE={prepare:mE,send:vE};function bE(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((r,i)=>r.provider!==i.provider?r.provider.localeCompare(i.provider):r.prefix!==i.prefix?r.prefix.localeCompare(i.prefix):r.name.localeCompare(i.name));let s={provider:"",prefix:"",name:""};return t.forEach(r=>{if(s.name===r.name&&s.prefix===r.prefix&&s.provider===r.provider)return;s=r;const i=r.provider,o=r.prefix,a=r.name,l=n[i]||(n[i]=Object.create(null)),c=l[o]||(l[o]=Qn(i,o));let u;a in c.icons?u=e.loaded:o===""||c.missing.has(a)?u=e.missing:u=e.pending;const d={provider:i,prefix:o,name:a};u.push(d)}),e}function Lp(t,e){t.forEach(n=>{const s=n.loaderCallbacks;s&&(n.loaderCallbacks=s.filter(r=>r.id!==e))})}function wE(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const s=t.provider,r=t.prefix;e.forEach(i=>{const o=i.icons,a=o.pending.length;o.pending=o.pending.filter(l=>{if(l.prefix!==r)return!0;const c=l.name;if(t.icons[c])o.loaded.push({provider:s,prefix:r,name:c});else if(t.missing.has(c))o.missing.push({provider:s,prefix:r,name:c});else return n=!0,!0;return!1}),o.pending.length!==a&&(n||Lp([t],i.id),i.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),i.abort))})}))}let EE=0;function IE(t,e,n){const s=EE++,r=Lp.bind(null,n,s);if(!e.pending.length)return r;const i={id:s,icons:e,callback:t,abort:r};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(i)}),r}function CE(t,e=!0,n=!1){const s=[];return t.forEach(r=>{const i=typeof r=="string"?Ko(r,e,n):r;i&&s.push(i)}),s}var TE={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function SE(t,e,n,s){const r=t.resources.length,i=t.random?Math.floor(Math.random()*r):t.index;let o;if(t.random){let U=t.resources.slice(0);for(o=[];U.length>1;){const Q=Math.floor(Math.random()*U.length);o.push(U[Q]),U=U.slice(0,Q).concat(U.slice(Q+1))}o=o.concat(U)}else o=t.resources.slice(i).concat(t.resources.slice(0,i));const a=Date.now();let l="pending",c=0,u,d=null,f=[],p=[];typeof s=="function"&&p.push(s);function m(){d&&(clearTimeout(d),d=null)}function _(){l==="pending"&&(l="aborted"),m(),f.forEach(U=>{U.status==="pending"&&(U.status="aborted")}),f=[]}function v(U,Q){Q&&(p=[]),typeof U=="function"&&p.push(U)}function I(){return{startTime:a,payload:e,status:l,queriesSent:c,queriesPending:f.length,subscribe:v,abort:_}}function S(){l="failed",p.forEach(U=>{U(void 0,u)})}function M(){f.forEach(U=>{U.status==="pending"&&(U.status="aborted")}),f=[]}function A(U,Q,P){const W=Q!=="success";switch(f=f.filter(V=>V!==U),l){case"pending":break;case"failed":if(W||!t.dataAfterTimeout)return;break;default:return}if(Q==="abort"){u=P,S();return}if(W){u=P,f.length||(o.length?G():S());return}if(m(),M(),!t.random){const V=t.resources.indexOf(U.resource);V!==-1&&V!==t.index&&(t.index=V)}l="completed",p.forEach(V=>{V(P)})}function G(){if(l!=="pending")return;m();const U=o.shift();if(U===void 0){if(f.length){d=setTimeout(()=>{m(),l==="pending"&&(M(),S())},t.timeout);return}S();return}const Q={status:"pending",resource:U,callback:(P,W)=>{A(Q,P,W)}};f.push(Q),c++,d=setTimeout(G,t.rotate),n(U,e,Q.callback)}return setTimeout(G),I}function Fp(t){const e={...TE,...t};let n=[];function s(){n=n.filter(a=>a().status==="pending")}function r(a,l,c){const u=SE(e,a,l,(d,f)=>{s(),c&&c(d,f)});return n.push(u),u}function i(a){return n.find(l=>a(l))||null}return{query:r,find:i,setIndex:a=>{e.index=a},getIndex:()=>e.index,cleanup:s}}function Bd(){}const Ca=Object.create(null);function kE(t){if(!Ca[t]){const e=yc(t);if(!e)return;const n=Fp(e),s={config:e,redundancy:n};Ca[t]=s}return Ca[t]}function RE(t,e,n){let s,r;if(typeof t=="string"){const i=ul(t);if(!i)return n(void 0,424),Bd;r=i.send;const o=kE(t);o&&(s=o.redundancy)}else{const i=_c(t);if(i){s=Fp(i);const o=t.resources?t.resources[0]:"",a=ul(o);a&&(r=a.send)}}return!s||!r?(n(void 0,424),Bd):s.query(e,r,n)().abort}const jd="iconify2",Kr="iconify",Up=Kr+"-count",Hd=Kr+"-version",$p=36e5,AE=168;function dl(t,e){try{return t.getItem(e)}catch{}}function bc(t,e,n){try{return t.setItem(e,n),!0}catch{}}function Wd(t,e){try{t.removeItem(e)}catch{}}function fl(t,e){return bc(t,Up,e.toString())}function hl(t){return parseInt(dl(t,Up))||0}const zo={local:!0,session:!0},Bp={local:new Set,session:new Set};let wc=!1;function PE(t){wc=t}let Ci=typeof window>"u"?{}:window;function jp(t){const e=t+"Storage";try{if(Ci&&Ci[e]&&typeof Ci[e].length=="number")return Ci[e]}catch{}zo[t]=!1}function Hp(t,e){const n=jp(t);if(!n)return;const s=dl(n,Hd);if(s!==jd){if(s){const a=hl(n);for(let l=0;l<a;l++)Wd(n,Kr+l.toString())}bc(n,Hd,jd),fl(n,0);return}const r=Math.floor(Date.now()/$p)-AE,i=a=>{const l=Kr+a.toString(),c=dl(n,l);if(typeof c=="string"){try{const u=JSON.parse(c);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>r&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&e(u,a))return!0}catch{}Wd(n,l)}};let o=hl(n);for(let a=o-1;a>=0;a--)i(a)||(a===o-1?(o--,fl(n,o)):Bp[t].add(a))}function Wp(){if(!wc){PE(!0);for(const t in zo)Hp(t,e=>{const n=e.data,s=e.provider,r=n.prefix,i=Qn(s,r);if(!mc(i,n).length)return!1;const o=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,o):o,!0})}}function xE(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const s in zo)Hp(s,r=>{const i=r.data;return r.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===e});return!0}function NE(t,e){wc||Wp();function n(s){let r;if(!zo[s]||!(r=jp(s)))return;const i=Bp[s];let o;if(i.size)i.delete(o=Array.from(i).shift());else if(o=hl(r),!fl(r,o+1))return;const a={cached:Math.floor(Date.now()/$p),provider:t.provider,data:e};return bc(r,Kr+o.toString(),JSON.stringify(a))}e.lastModified&&!xE(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function Vd(){}function OE(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,wE(t)}))}function ME(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:s}=t,r=t.iconsToLoad;delete t.iconsToLoad;let i;if(!r||!(i=ul(n)))return;i.prepare(n,s,r).forEach(a=>{RE(n,a,l=>{if(typeof l!="object")a.icons.forEach(c=>{t.missing.add(c)});else try{const c=mc(t,l);if(!c.length)return;const u=t.pendingIcons;u&&c.forEach(d=>{u.delete(d)}),NE(t,l)}catch(c){console.error(c)}OE(t)})})}))}const DE=(t,e)=>{const n=CE(t,!0,Op()),s=bE(n);if(!s.pending.length){let l=!0;return e&&setTimeout(()=>{l&&e(s.loaded,s.missing,s.pending,Vd)}),()=>{l=!1}}const r=Object.create(null),i=[];let o,a;return s.pending.forEach(l=>{const{provider:c,prefix:u}=l;if(u===a&&c===o)return;o=c,a=u,i.push(Qn(c,u));const d=r[c]||(r[c]=Object.create(null));d[u]||(d[u]=[])}),s.pending.forEach(l=>{const{provider:c,prefix:u,name:d}=l,f=Qn(c,u),p=f.pendingIcons||(f.pendingIcons=new Set);p.has(d)||(p.add(d),r[c][u].push(d))}),i.forEach(l=>{const{provider:c,prefix:u}=l;r[c][u].length&&ME(l,r[c][u])}),e?IE(e,s,i):Vd};function LE(t,e){const n={...t};for(const s in e){const r=e[s],i=typeof r;s in Mp?(r===null||r&&(i==="string"||i==="number"))&&(n[s]=r):i===typeof n[s]&&(n[s]=s==="rotate"?r%4:r)}return n}const FE=/[\s,]+/;function UE(t,e){e.split(FE).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function $E(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function s(r){for(;r<0;)r+=4;return r%4}if(n===""){const r=parseInt(t);return isNaN(r)?0:s(r)}else if(n!==t){let r=0;switch(n){case"%":r=25;break;case"deg":r=90}if(r){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/r,i%1===0?s(i):0)}}return e}function BE(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in e)n+=" "+s+'="'+e[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function jE(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function HE(t){return"data:image/svg+xml,"+jE(t)}function WE(t){return'url("'+HE(t)+'")'}const Kd={...Dp,inline:!1},VE={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},KE={display:"inline-block"},pl={backgroundColor:"currentColor"},Vp={backgroundColor:"transparent"},qd={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},zd={webkitMask:pl,mask:pl,background:Vp};for(const t in zd){const e=zd[t];for(const n in qd)e[t+n]=qd[n]}const Fi={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";Fi[t+"-flip"]=e,Fi[t.slice(0,1)+"-flip"]=e,Fi[t+"Flip"]=e});function Gd(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const Yd=(t,e)=>{const n=LE(Kd,e),s={...VE},r=e.mode||"svg",i={},o=e.style,a=typeof o=="object"&&!(o instanceof Array)?o:{};for(let _ in e){const v=e[_];if(v!==void 0)switch(_){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[_]=v===!0||v==="true"||v===1;break;case"flip":typeof v=="string"&&UE(n,v);break;case"color":i.color=v;break;case"rotate":typeof v=="string"?n[_]=$E(v):typeof v=="number"&&(n[_]=v);break;case"ariaHidden":case"aria-hidden":v!==!0&&v!=="true"&&delete s["aria-hidden"];break;default:{const I=Fi[_];I?(v===!0||v==="true"||v===1)&&(n[I]=!0):Kd[_]===void 0&&(s[_]=v)}}}const l=oE(t,n),c=l.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),r==="svg"){s.style={...i,...a},Object.assign(s,c);let _=0,v=e.id;return typeof v=="string"&&(v=v.replace(/-/g,"_")),s.innerHTML=uE(l.body,v?()=>v+"ID"+_++:"iconifyVue"),En("svg",s)}const{body:u,width:d,height:f}=t,p=r==="mask"||(r==="bg"?!1:u.indexOf("currentColor")!==-1),m=BE(u,{...c,width:d+"",height:f+""});return s.style={...i,"--svg":WE(m),width:Gd(c.width),height:Gd(c.height),...KE,...p?pl:Vp,...a},En("span",s)};Op(!0);dE("",yE);if(typeof document<"u"&&typeof window<"u"){Wp();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(s=>{try{(typeof s!="object"||s===null||s instanceof Array||typeof s.icons!="object"||typeof s.prefix!="string"||!nE(s))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const s="IconifyProviders["+n+"] is invalid.";try{const r=e[n];if(typeof r!="object"||!r||r.resources===void 0)continue;fE(n,r)||console.error(s)}catch{console.error(s)}}}}const qE={...qo,body:""},Ec=Jt({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let n;if(typeof t!="string"||(n=Ko(t,!1,!0))===null)return this.abortLoading(),null;const s=eE(n);if(!s)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",s!==null&&(this._loadingIcon={name:t,abort:DE([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t));const r=["iconify"];return n.prefix!==""&&r.push("iconify--"+n.prefix),n.provider!==""&&r.push("iconify--"+n.provider),{data:s,classes:r}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted?this.getIcon(t.icon,t.onLoad):null;if(!e)return Yd(qE,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),Yd({...qo,...e.data},n)}}),Dt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},zE={components:{Icon:Ec},setup(t,e){const n=X("Login"),s=X("Signup Instead"),r=X(""),i=X(""),o=X(!1);function a(){n.value==="Login"?(n.value="Signup",s.value="Login Instead"):(n.value="Login",s.value="Signup Instead")}function l(){e.emit("emit-user",[r.value,i.value,n.value]),r.value="",i.value=""}function c(){o.value===!1?o.value=!0:o.value===!0&&(o.value=!1)}return{buttonPrimary:n,buttonSecondary:s,switchText:a,emitUser:l,username:r,password:i,showHide:o,showHidePassword:c}}},GE={class:"relative mb-3"},YE=se("label",{for:"email",class:"pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"},"Email address",-1),QE={class:"relative mb-3"},JE=["type"],XE={class:"py-1"},ZE=se("label",{for:"showPassword",class:"p-1 dark:text-white"},"Show Password",-1),eI=se("label",{for:"password",class:"pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"},"Password",-1),tI={class:"p-0.5"},nI={class:"p-0.5"};function sI(t,e,n,s,r,i){const o=Ke("base-button");return $e(),Ye("form",null,[se("div",GE,[qa(se("input",{type:"text",class:"peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]",id:"email",placeholder:"name@example.com","onUpdate:modelValue":e[0]||(e[0]=a=>s.username=a)},null,512),[[Ji,s.username]]),YE]),se("div",QE,[qa(se("input",{type:s.showHide?"text":"password",class:"peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] bg-",id:"password",placeholder:"Password","onUpdate:modelValue":e[1]||(e[1]=a=>s.password=a)},null,8,JE),[[cb,s.password]]),se("div",XE,[se("input",{type:"checkbox",id:"showPassword",onChange:e[2]||(e[2]=(...a)=>s.showHidePassword&&s.showHidePassword(...a))},null,32),ZE]),eI]),se("span",tI,[ae(o,{onClick:bd(s.emitUser,["prevent"]),class:"font-semibold"},{default:it(()=>[mn(Vi(s.buttonPrimary),1)]),_:1},8,["onClick"])]),se("span",nI,[ae(o,{onClick:bd(s.switchText,["prevent"]),class:"font-semibold"},{default:it(()=>[mn(Vi(s.buttonSecondary),1)]),_:1},8,["onClick"])])])}const rI=Dt(zE,[["render",sI]]);const iI={},oI={class:"text-base text-red-600"};function aI(t,e){return $e(),Ye("div",null,[ae(hc,{name:"message"},{default:it(()=>[se("p",oI,[Uo(t.$slots,"default",{},void 0,!0)])]),_:3})])}const lI=Dt(iI,[["render",aI],["__scopeId","data-v-e583e2cf"]]);/**
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
 */const Kp={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const T=function(t,e){if(!t)throw er(e)},er=function(t){return new Error("Firebase Database ("+Kp.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const qp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},cI=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ic={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),s.push(n[u],n[d],n[f],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||d==null)throw new uI;const f=i<<2|a>>4;if(s.push(f),c!==64){const p=a<<4&240|c>>2;if(s.push(p),d!==64){const m=c<<6&192|d;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class uI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zp=function(t){const e=qp(t);return Ic.encodeByteArray(e,!0)},to=function(t){return zp(t).replace(/\./g,"")},no=function(t){try{return Ic.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function dI(t){return Gp(void 0,t)}function Gp(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!fI(n)||(t[n]=Gp(t[n],e[n]));return t}function fI(t){return t!=="__proto__"}/**
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
 */function hI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const pI=()=>hI().__FIREBASE_DEFAULTS__,gI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&no(t[1]);return e&&JSON.parse(e)},Cc=()=>{try{return pI()||gI()||mI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Yp=t=>{var e,n;return(n=(e=Cc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_I=t=>{const e=Yp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Qp=()=>{var t;return(t=Cc())===null||t===void 0?void 0:t.config},Jp=t=>{var e;return(e=Cc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Tc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function vI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[to(JSON.stringify(n)),to(JSON.stringify(o)),a].join(".")}/**
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
 */function qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function yI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function bI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Xp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wI(){const t=qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Zp(){return Kp.NODE_ADMIN===!0}function EI(){try{return typeof indexedDB=="object"}catch{return!1}}function II(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const CI="FirebaseError";class kn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=CI,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oi.prototype.create)}}class oi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?TI(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new kn(r,a,s)}}function TI(t,e){return t.replace(SI,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const SI=/\{\$([^}]+)}/g;/**
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
 */function qr(t){return JSON.parse(t)}function Fe(t){return JSON.stringify(t)}/**
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
 */const eg=function(t){let e={},n={},s={},r="";try{const i=t.split(".");e=qr(no(i[0])||""),n=qr(no(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},kI=function(t){const e=eg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},RI=function(t){const e=eg(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Lt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ws(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function gl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function so(t,e,n){const s={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=e.call(n,t[r],r,t));return s}function ro(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Qd(i)&&Qd(o)){if(!ro(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Qd(t){return t!==null&&typeof t=="object"}/**
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
 */function tr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Er(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Ir(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class AI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(f<<1|f>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):d<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const f=(r<<5|r>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=f}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<n;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function PI(t,e){const n=new xI(t,e);return n.subscribe.bind(n)}class xI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");NI(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Ta),r.error===void 0&&(r.error=Ta),r.complete===void 0&&(r.complete=Ta);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function NI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ta(){}function Go(t,e){return`${t} failed: ${e} argument `}/**
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
 */const OI=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Yo=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ft(t){return t&&t._delegate?t._delegate:t}class Jn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ln="[DEFAULT]";/**
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
 */class MI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Tc;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LI(e))try{this.getOrInitializeService({instanceIdentifier:Ln})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ln){return this.instances.has(e)}getOptions(e=Ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:DI(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ln){return this.component?this.component.multipleInstances?e:Ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function DI(t){return t===Ln?void 0:t}function LI(t){return t.instantiationMode==="EAGER"}/**
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
 */class FI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new MI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const UI={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},$I=fe.INFO,BI={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},jI=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=BI[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kc{constructor(e){this.name=e,this._logLevel=$I,this._logHandler=jI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?UI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const HI=(t,e)=>e.some(n=>t instanceof n);let Jd,Xd;function WI(){return Jd||(Jd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VI(){return Xd||(Xd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tg=new WeakMap,ml=new WeakMap,ng=new WeakMap,Sa=new WeakMap,Rc=new WeakMap;function KI(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(_n(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tg.set(n,t)}).catch(()=>{}),Rc.set(e,t),e}function qI(t){if(ml.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ml.set(t,e)}let _l={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ml.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ng.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zI(t){_l=t(_l)}function GI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ka(this),e,...n);return ng.set(s,e.sort?e.sort():[e]),_n(s)}:VI().includes(t)?function(...e){return t.apply(ka(this),e),_n(tg.get(this))}:function(...e){return _n(t.apply(ka(this),e))}}function YI(t){return typeof t=="function"?GI(t):(t instanceof IDBTransaction&&qI(t),HI(t,WI())?new Proxy(t,_l):t)}function _n(t){if(t instanceof IDBRequest)return KI(t);if(Sa.has(t))return Sa.get(t);const e=YI(t);return e!==t&&(Sa.set(t,e),Rc.set(e,t)),e}const ka=t=>Rc.get(t);function QI(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=_n(o);return s&&o.addEventListener("upgradeneeded",l=>{s(_n(o.result),l.oldVersion,l.newVersion,_n(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const JI=["get","getKey","getAll","getAllKeys","count"],XI=["put","add","delete","clear"],Ra=new Map;function Zd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ra.get(e))return Ra.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=XI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||JI.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Ra.set(e,i),i}zI(t=>({...t,get:(e,n,s)=>Zd(e,n)||t.get(e,n,s),has:(e,n)=>!!Zd(e,n)||t.has(e,n)}));/**
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
 */class ZI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(eC(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function eC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vl="@firebase/app",ef="0.11.1";/**
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
 */const Gt=new kc("@firebase/app"),tC="@firebase/app-compat",nC="@firebase/analytics-compat",sC="@firebase/analytics",rC="@firebase/app-check-compat",iC="@firebase/app-check",oC="@firebase/auth",aC="@firebase/auth-compat",lC="@firebase/database",cC="@firebase/data-connect",uC="@firebase/database-compat",dC="@firebase/functions",fC="@firebase/functions-compat",hC="@firebase/installations",pC="@firebase/installations-compat",gC="@firebase/messaging",mC="@firebase/messaging-compat",_C="@firebase/performance",vC="@firebase/performance-compat",yC="@firebase/remote-config",bC="@firebase/remote-config-compat",wC="@firebase/storage",EC="@firebase/storage-compat",IC="@firebase/firestore",CC="@firebase/vertexai",TC="@firebase/firestore-compat",SC="firebase",kC="11.3.1";/**
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
 */const yl="[DEFAULT]",RC={[vl]:"fire-core",[tC]:"fire-core-compat",[sC]:"fire-analytics",[nC]:"fire-analytics-compat",[iC]:"fire-app-check",[rC]:"fire-app-check-compat",[oC]:"fire-auth",[aC]:"fire-auth-compat",[lC]:"fire-rtdb",[cC]:"fire-data-connect",[uC]:"fire-rtdb-compat",[dC]:"fire-fn",[fC]:"fire-fn-compat",[hC]:"fire-iid",[pC]:"fire-iid-compat",[gC]:"fire-fcm",[mC]:"fire-fcm-compat",[_C]:"fire-perf",[vC]:"fire-perf-compat",[yC]:"fire-rc",[bC]:"fire-rc-compat",[wC]:"fire-gcs",[EC]:"fire-gcs-compat",[IC]:"fire-fst",[TC]:"fire-fst-compat",[CC]:"fire-vertex","fire-js":"fire-js",[SC]:"fire-js-all"};/**
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
 */const io=new Map,AC=new Map,bl=new Map;function tf(t,e){try{t.container.addComponent(e)}catch(n){Gt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vs(t){const e=t.name;if(bl.has(e))return Gt.debug(`There were multiple attempts to register component ${e}.`),!1;bl.set(e,t);for(const n of io.values())tf(n,t);for(const n of AC.values())tf(n,t);return!0}function Ac(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ct(t){return t==null?!1:t.settings!==void 0}/**
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
 */const PC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vn=new oi("app","Firebase",PC);/**
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
 */class xC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vn.create("app-deleted",{appName:this._name})}}/**
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
 */const nr=kC;function Pc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:yl,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw vn.create("bad-app-name",{appName:String(r)});if(n||(n=Qp()),!n)throw vn.create("no-options");const i=io.get(r);if(i){if(ro(n,i.options)&&ro(s,i.config))return i;throw vn.create("duplicate-app",{appName:r})}const o=new FI(r);for(const l of bl.values())o.addComponent(l);const a=new xC(n,s,o);return io.set(r,a),a}function sg(t=yl){const e=io.get(t);if(!e&&t===yl&&Qp())return Pc();if(!e)throw vn.create("no-app",{appName:t});return e}function yn(t,e,n){var s;let r=(s=RC[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gt.warn(a.join(" "));return}Vs(new Jn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const NC="firebase-heartbeat-database",OC=1,zr="firebase-heartbeat-store";let Aa=null;function rg(){return Aa||(Aa=QI(NC,OC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(zr)}catch(n){console.warn(n)}}}}).catch(t=>{throw vn.create("idb-open",{originalErrorMessage:t.message})})),Aa}async function MC(t){try{const n=(await rg()).transaction(zr),s=await n.objectStore(zr).get(ig(t));return await n.done,s}catch(e){if(e instanceof kn)Gt.warn(e.message);else{const n=vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gt.warn(n.message)}}}async function nf(t,e){try{const s=(await rg()).transaction(zr,"readwrite");await s.objectStore(zr).put(e,ig(t)),await s.done}catch(n){if(n instanceof kn)Gt.warn(n.message);else{const s=vn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gt.warn(s.message)}}}function ig(t){return`${t.name}!${t.options.appId}`}/**
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
 */const DC=1024,LC=30;class FC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $C(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=sf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>LC){const o=BC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Gt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sf(),{heartbeatsToSend:s,unsentEntries:r}=UC(this._heartbeatsCache.heartbeats),i=to(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Gt.warn(n),""}}}function sf(){return new Date().toISOString().substring(0,10)}function UC(t,e=DC){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),rf(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),rf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class $C{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return EI()?II().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await MC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return nf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return nf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function rf(t){return to(JSON.stringify({version:2,heartbeats:t})).length}function BC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function jC(t){Vs(new Jn("platform-logger",e=>new ZI(e),"PRIVATE")),Vs(new Jn("heartbeat",e=>new FC(e),"PRIVATE")),yn(vl,ef,t),yn(vl,ef,"esm2017"),yn("fire-js","")}jC("");function xc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function og(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HC=og,ag=new oi("auth","Firebase",og());/**
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
 */const oo=new kc("@firebase/auth");function WC(t,...e){oo.logLevel<=fe.WARN&&oo.warn(`Auth (${nr}): ${t}`,...e)}function Ui(t,...e){oo.logLevel<=fe.ERROR&&oo.error(`Auth (${nr}): ${t}`,...e)}/**
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
 */function Ct(t,...e){throw Nc(t,...e)}function Nt(t,...e){return Nc(t,...e)}function lg(t,e,n){const s=Object.assign(Object.assign({},HC()),{[e]:n});return new oi("auth","Firebase",s).create(e,{appName:t.name})}function Vt(t){return lg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return ag.create(t,...e)}function K(t,e,...n){if(!t)throw Nc(e,...n)}function Bt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ui(e),new Error(e)}function Yt(t,e){t||Bt(e)}/**
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
 */function wl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function VC(){return of()==="http:"||of()==="https:"}function of(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function KC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VC()||bI()||"connection"in navigator)?navigator.onLine:!0}function qC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ai{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yt(n>e,"Short delay should be less than long delay!"),this.isMobile=Sc()||Xp()}get(){return KC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Oc(t,e){Yt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class cg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const GC=new ai(3e4,6e4);function Rn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function An(t,e,n,s,r={}){return ug(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=tr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},i);return yI()||(c.referrerPolicy="no-referrer"),cg.fetch()(dg(t,t.config.apiHost,n,a),c)})}async function ug(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},zC),e);try{const r=new QC(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ti(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ti(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ti(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ti(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw lg(t,u,c);Ct(t,u)}}catch(r){if(r instanceof kn)throw r;Ct(t,"network-request-failed",{message:String(r)})}}async function li(t,e,n,s,r={}){const i=await An(t,e,n,s,r);return"mfaPendingCredential"in i&&Ct(t,"multi-factor-auth-required",{_serverResponse:i}),i}function dg(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Oc(t.config,r):`${t.config.apiScheme}://${r}`}function YC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class QC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Nt(this.auth,"network-request-failed")),GC.get())})}}function Ti(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Nt(t,e,s);return r.customData._tokenResponse=n,r}function af(t){return t!==void 0&&t.enterprise!==void 0}class JC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return YC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function XC(t,e){return An(t,"GET","/v2/recaptchaConfig",Rn(t,e))}/**
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
 */async function ZC(t,e){return An(t,"POST","/v1/accounts:delete",e)}async function fg(t,e){return An(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Pr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eT(t,e=!1){const n=ft(t),s=await n.getIdToken(e),r=Mc(s);K(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Pr(Pa(r.auth_time)),issuedAtTime:Pr(Pa(r.iat)),expirationTime:Pr(Pa(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Pa(t){return Number(t)*1e3}function Mc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ui("JWT malformed, contained fewer than 3 sections"),null;try{const r=no(n);return r?JSON.parse(r):(Ui("Failed to decode base64 JWT payload"),null)}catch(r){return Ui("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function lf(t){const e=Mc(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Gr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof kn&&tT(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function tT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class nT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class El{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pr(this.lastLoginAt),this.creationTime=Pr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ao(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Gr(t,fg(n,{idToken:s}));K(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?hg(i.providerUserInfo):[],a=rT(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new El(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function sT(t){const e=ft(t);await ao(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rT(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function hg(t){return t.map(e=>{var{providerId:n}=e,s=xc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function iT(t,e){const n=await ug(t,{},async()=>{const s=tr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=dg(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",cg.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function oT(t,e){return An(t,"POST","/v2/accounts:revokeToken",Rn(t,e))}/**
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
 */class Ps{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=lf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await iT(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Ps;return s&&(K(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(K(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ps,this.toJSON())}_performRefresh(){return Bt("not implemented")}}/**
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
 */function an(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=xc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new El(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Gr(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return eT(this,e)}reload(){return sT(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ao(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ct(this.auth.app))return Promise.reject(Vt(this.auth));const e=await this.getIdToken();return await Gr(this,ZC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,S=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:M,emailVerified:A,isAnonymous:G,providerData:U,stsTokenManager:Q}=n;K(M&&Q,e,"internal-error");const P=Ps.fromJSON(this.name,Q);K(typeof M=="string",e,"internal-error"),an(d,e.name),an(f,e.name),K(typeof A=="boolean",e,"internal-error"),K(typeof G=="boolean",e,"internal-error"),an(p,e.name),an(m,e.name),an(_,e.name),an(v,e.name),an(I,e.name),an(S,e.name);const W=new jt({uid:M,auth:e,email:f,emailVerified:A,displayName:d,isAnonymous:G,photoURL:m,phoneNumber:p,tenantId:_,stsTokenManager:P,createdAt:I,lastLoginAt:S});return U&&Array.isArray(U)&&(W.providerData=U.map(V=>Object.assign({},V))),v&&(W._redirectEventId=v),W}static async _fromIdTokenResponse(e,n,s=!1){const r=new Ps;r.updateFromServerResponse(n);const i=new jt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ao(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];K(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?hg(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new Ps;a.updateFromIdToken(s);const l=new jt({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new El(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
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
 */const cf=new Map;function Ht(t){Yt(t instanceof Function,"Expected a class definition");let e=cf.get(t);return e?(Yt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cf.set(t,e),e)}/**
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
 */class pg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pg.type="NONE";const uf=pg;/**
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
 */function $i(t,e,n){return`firebase:${t}:${e}:${n}`}class xs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=$i(this.userKey,r.apiKey,i),this.fullPersistenceKey=$i("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new xs(Ht(uf),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=r[0]||Ht(uf);const o=$i(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=jt._fromJSON(e,u);c!==i&&(a=d),i=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new xs(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new xs(i,e,s))}}/**
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
 */function df(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bg(e))return"Blackberry";if(wg(e))return"Webos";if(mg(e))return"Safari";if((e.includes("chrome/")||_g(e))&&!e.includes("edge/"))return"Chrome";if(yg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function gg(t=qe()){return/firefox\//i.test(t)}function mg(t=qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _g(t=qe()){return/crios\//i.test(t)}function vg(t=qe()){return/iemobile/i.test(t)}function yg(t=qe()){return/android/i.test(t)}function bg(t=qe()){return/blackberry/i.test(t)}function wg(t=qe()){return/webos/i.test(t)}function Dc(t=qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function aT(t=qe()){var e;return Dc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lT(){return wI()&&document.documentMode===10}function Eg(t=qe()){return Dc(t)||yg(t)||wg(t)||bg(t)||/windows phone/i.test(t)||vg(t)}/**
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
 */function Ig(t,e=[]){let n;switch(t){case"Browser":n=df(qe());break;case"Worker":n=`${df(qe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${nr}/${s}`}/**
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
 */class cT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function uT(t,e={}){return An(t,"GET","/v2/passwordPolicy",Rn(t,e))}/**
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
 */const dT=6;class fT{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:dT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class hT{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ff(this),this.idTokenSubscription=new ff(this),this.beforeStateQueue=new cT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ag,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ht(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await xs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await fg(this,{idToken:e}),s=await jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ct(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ao(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ct(this.app))return Promise.reject(Vt(this));const n=e?ft(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ct(this.app)?Promise.reject(Vt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ct(this.app)?Promise.reject(Vt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ht(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await uT(this),n=new fT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new oi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await oT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ht(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await xs.create(this,[Ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ig(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;if(ct(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&WC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function as(t){return ft(t)}class ff{constructor(e){this.auth=e,this.observer=null,this.addObserver=PI(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Qo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pT(t){Qo=t}function Cg(t){return Qo.loadJS(t)}function gT(){return Qo.recaptchaEnterpriseScript}function mT(){return Qo.gapiScript}function _T(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class vT{constructor(){this.enterprise=new yT}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class yT{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const bT="recaptcha-enterprise",Tg="NO_RECAPTCHA";class wT{constructor(e){this.type=bT,this.auth=as(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{XC(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new JC(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(i,o,a){const l=window.grecaptcha;af(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(Tg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new vT().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&af(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=gT();l.length!==0&&(l+=a),Cg(l).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function pr(t,e,n,s=!1,r=!1){const i=new wT(t);let o;if(r)o=Tg;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Il(t,e,n,s,r){var i,o;if(r==="EMAIL_PASSWORD_PROVIDER")if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await pr(t,e,n,n==="getOobCode");return s(t,a)}else return s(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await pr(t,e,n,n==="getOobCode");return s(t,l)}else return Promise.reject(a)});else if(r==="PHONE_PROVIDER")if(!((o=t._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await pr(t,e,n);return s(t,a).catch(async l=>{var c;if(((c=t._getRecaptchaConfig())===null||c===void 0?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const u=await pr(t,e,n,!1,!0);return s(t,u)}return Promise.reject(l)})}else{const a=await pr(t,e,n,!1,!0);return s(t,a)}else return Promise.reject(r+" provider is not supported.")}/**
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
 */function ET(t,e){const n=Ac(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(ro(i,e??{}))return r;Ct(r,"already-initialized")}return n.initialize({options:e})}function IT(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ht);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function CT(t,e,n){const s=as(t);K(s._canInitEmulator,s,"emulator-config-failed"),K(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Sg(e),{host:o,port:a}=TT(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||ST()}function Sg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function TT(t){const e=Sg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:hf(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:hf(o)}}}function hf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ST(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Lc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Bt("not implemented")}_getIdTokenResponse(e){return Bt("not implemented")}_linkToIdToken(e,n){return Bt("not implemented")}_getReauthenticationResolver(e){return Bt("not implemented")}}async function kT(t,e){return An(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function RT(t,e){return li(t,"POST","/v1/accounts:signInWithPassword",Rn(t,e))}/**
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
 */async function AT(t,e){return li(t,"POST","/v1/accounts:signInWithEmailLink",Rn(t,e))}async function PT(t,e){return li(t,"POST","/v1/accounts:signInWithEmailLink",Rn(t,e))}/**
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
 */class Yr extends Lc{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Yr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Yr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Il(e,n,"signInWithPassword",RT,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return AT(e,{email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Il(e,s,"signUpPassword",kT,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return PT(e,{idToken:n,email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ns(t,e){return li(t,"POST","/v1/accounts:signInWithIdp",Rn(t,e))}/**
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
 */const xT="http://localhost";class Xn extends Lc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=xc(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Xn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ns(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ns(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ns(e,n)}buildRequest(){const e={requestUri:xT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=tr(n)}return e}}/**
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
 */function NT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OT(t){const e=Er(Ir(t)).link,n=e?Er(Ir(e)).deep_link_id:null,s=Er(Ir(t)).deep_link_id;return(s?Er(Ir(s)).link:null)||s||n||e||t}class Fc{constructor(e){var n,s,r,i,o,a;const l=Er(Ir(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,d=NT((r=l.mode)!==null&&r!==void 0?r:null);K(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=OT(e);try{return new Fc(n)}catch{return null}}}/**
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
 */class sr{constructor(){this.providerId=sr.PROVIDER_ID}static credential(e,n){return Yr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Fc.parseLink(n);return K(s,"argument-error"),Yr._fromEmailAndCode(e,s.code,s.tenantId)}}sr.PROVIDER_ID="password";sr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";sr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class kg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ci extends kg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class un extends ci{constructor(){super("facebook.com")}static credential(e){return Xn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.FACEBOOK_SIGN_IN_METHOD="facebook.com";un.PROVIDER_ID="facebook.com";/**
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
 */class dn extends ci{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return dn.credential(n,s)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
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
 */class fn extends ci{constructor(){super("github.com")}static credential(e){return Xn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.GITHUB_SIGN_IN_METHOD="github.com";fn.PROVIDER_ID="github.com";/**
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
 */class hn extends ci{constructor(){super("twitter.com")}static credential(e,n){return Xn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return hn.credential(n,s)}catch{return null}}}hn.TWITTER_SIGN_IN_METHOD="twitter.com";hn.PROVIDER_ID="twitter.com";/**
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
 */async function MT(t,e){return li(t,"POST","/v1/accounts:signUp",Rn(t,e))}/**
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
 */class Zn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await jt._fromIdTokenResponse(e,s,r),o=pf(s);return new Zn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=pf(s);return new Zn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function pf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class lo extends kn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,lo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new lo(e,n,s,r)}}function Rg(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?lo._fromErrorAndOperation(t,i,e,s):i})}async function DT(t,e,n=!1){const s=await Gr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zn._forOperation(t,"link",s)}/**
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
 */async function LT(t,e,n=!1){const{auth:s}=t;if(ct(s.app))return Promise.reject(Vt(s));const r="reauthenticate";try{const i=await Gr(t,Rg(s,r,e,t),n);K(i.idToken,s,"internal-error");const o=Mc(i.idToken);K(o,s,"internal-error");const{sub:a}=o;return K(t.uid===a,s,"user-mismatch"),Zn._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ct(s,"user-mismatch"),i}}/**
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
 */async function Ag(t,e,n=!1){if(ct(t.app))return Promise.reject(Vt(t));const s="signIn",r=await Rg(t,s,e),i=await Zn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function FT(t,e){return Ag(as(t),e)}/**
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
 */async function Pg(t){const e=as(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function UT(t,e,n){if(ct(t.app))return Promise.reject(Vt(t));const s=as(t),o=await Il(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",MT,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Pg(t),l}),a=await Zn._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function $T(t,e,n){return ct(t.app)?Promise.reject(Vt(t)):FT(ft(t),sr.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Pg(t),s})}function BT(t,e,n,s){return ft(t).onIdTokenChanged(e,n,s)}function jT(t,e,n){return ft(t).beforeAuthStateChanged(e,n)}const co="__sak";/**
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
 */class xg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(co,"1"),this.storage.removeItem(co),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const HT=1e3,WT=10;class Ng extends xg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Eg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);lT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,WT):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},HT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ng.type="LOCAL";const VT=Ng;/**
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
 */class Og extends xg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Og.type="SESSION";const Mg=Og;/**
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
 */function KT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Jo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Jo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await KT(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jo.receivers=[];/**
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
 */function Uc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class qT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Uc("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ot(){return window}function zT(t){Ot().location.href=t}/**
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
 */function Dg(){return typeof Ot().WorkerGlobalScope<"u"&&typeof Ot().importScripts=="function"}async function GT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function QT(){return Dg()?self:null}/**
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
 */const Lg="firebaseLocalStorageDb",JT=1,uo="firebaseLocalStorage",Fg="fbase_key";class ui{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xo(t,e){return t.transaction([uo],e?"readwrite":"readonly").objectStore(uo)}function XT(){const t=indexedDB.deleteDatabase(Lg);return new ui(t).toPromise()}function Cl(){const t=indexedDB.open(Lg,JT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(uo,{keyPath:Fg})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(uo)?e(s):(s.close(),await XT(),e(await Cl()))})})}async function gf(t,e,n){const s=Xo(t,!0).put({[Fg]:e,value:n});return new ui(s).toPromise()}async function ZT(t,e){const n=Xo(t,!1).get(e),s=await new ui(n).toPromise();return s===void 0?null:s.value}function mf(t,e){const n=Xo(t,!0).delete(e);return new ui(n).toPromise()}const e0=800,t0=3;class Ug{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>t0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jo._getInstance(QT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await GT(),!this.activeServiceWorker)return;this.sender=new qT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cl();return await gf(e,co,"1"),await mf(e,co),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>gf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>ZT(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>mf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Xo(r,!1).getAll();return new ui(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),e0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ug.type="LOCAL";const n0=Ug;new ai(3e4,6e4);/**
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
 */function s0(t,e){return e?Ht(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class $c extends Lc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function r0(t){return Ag(t.auth,new $c(t),t.bypassAuthState)}function i0(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),LT(n,new $c(t),t.bypassAuthState)}async function o0(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),DT(n,new $c(t),t.bypassAuthState)}/**
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
 */class $g{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return r0;case"linkViaPopup":case"linkViaRedirect":return o0;case"reauthViaPopup":case"reauthViaRedirect":return i0;default:Ct(this.auth,"internal-error")}}resolve(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const a0=new ai(2e3,1e4);class bs extends $g{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,bs.currentPopupAction&&bs.currentPopupAction.cancel(),bs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const e=Uc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,a0.get())};e()}}bs.currentPopupAction=null;/**
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
 */const l0="pendingRedirect",Bi=new Map;class c0 extends $g{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Bi.get(this.auth._key());if(!e){try{const s=await u0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Bi.set(this.auth._key(),e)}return this.bypassAuthState||Bi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function u0(t,e){const n=h0(e),s=f0(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function d0(t,e){Bi.set(t._key(),e)}function f0(t){return Ht(t._redirectPersistence)}function h0(t){return $i(l0,t.config.apiKey,t.name)}async function p0(t,e,n=!1){if(ct(t.app))return Promise.reject(Vt(t));const s=as(t),r=s0(s,e),o=await new c0(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const g0=10*60*1e3;class m0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Bg(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Nt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=g0&&this.cachedEventUids.clear(),this.cachedEventUids.has(_f(e))}saveEventToCache(e){this.cachedEventUids.add(_f(e)),this.lastProcessedEventTime=Date.now()}}function _f(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Bg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bg(t);default:return!1}}/**
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
 */async function v0(t,e={}){return An(t,"GET","/v1/projects",e)}/**
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
 */const y0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,b0=/^https?/;async function w0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await v0(t);for(const n of e)try{if(E0(n))return}catch{}Ct(t,"unauthorized-domain")}function E0(t){const e=wl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!b0.test(n))return!1;if(y0.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const I0=new ai(3e4,6e4);function vf(){const t=Ot().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function C0(t){return new Promise((e,n)=>{var s,r,i;function o(){vf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vf(),n(Nt(t,"network-request-failed"))},timeout:I0.get()})}if(!((r=(s=Ot().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ot().gapi)===null||i===void 0)&&i.load)o();else{const a=_T("iframefcb");return Ot()[a]=()=>{gapi.load?o():n(Nt(t,"network-request-failed"))},Cg(`${mT()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ji=null,e})}let ji=null;function T0(t){return ji=ji||C0(t),ji}/**
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
 */const S0=new ai(5e3,15e3),k0="__/auth/iframe",R0="emulator/auth/iframe",A0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},P0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function x0(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Oc(e,R0):`https://${t.config.authDomain}/${k0}`,s={apiKey:e.apiKey,appName:t.name,v:nr},r=P0.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${tr(s).slice(1)}`}async function N0(t){const e=await T0(t),n=Ot().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:x0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:A0,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Nt(t,"network-request-failed"),a=Ot().setTimeout(()=>{i(o)},S0.get());function l(){Ot().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const O0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},M0=500,D0=600,L0="_blank",F0="http://localhost";class yf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function U0(t,e,n,s=M0,r=D0){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},O0),{width:s.toString(),height:r.toString(),top:i,left:o}),c=qe().toLowerCase();n&&(a=_g(c)?L0:n),gg(c)&&(e=e||F0,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[p,m])=>`${f}${p}=${m},`,"");if(aT(c)&&a!=="_self")return $0(e||"",a),new yf(null);const d=window.open(e||"",a,u);K(d,t,"popup-blocked");try{d.focus()}catch{}return new yf(d)}function $0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const B0="__/auth/handler",j0="emulator/auth/handler",H0=encodeURIComponent("fac");async function bf(t,e,n,s,r,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:nr,eventId:r};if(e instanceof kg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",gl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(i||{}))o[u]=d}if(e instanceof ci){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${H0}=${encodeURIComponent(l)}`:"";return`${W0(t)}?${tr(a).slice(1)}${c}`}function W0({config:t}){return t.emulator?Oc(t,j0):`https://${t.authDomain}/${B0}`}/**
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
 */const xa="webStorageSupport";class V0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mg,this._completeRedirectFn=p0,this._overrideRedirectResult=d0}async _openPopup(e,n,s,r){var i;Yt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await bf(e,n,s,wl(),r);return U0(e,o,Uc())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await bf(e,n,s,wl(),r);return zT(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Yt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await N0(e),s=new m0(e);return n.register("authEvent",r=>(K(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xa,{type:xa},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[xa];o!==void 0&&n(!!o),Ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=w0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Eg()||mg()||Dc()}}const K0=V0;var wf="@firebase/auth",Ef="1.9.0";/**
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
 */class q0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function z0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function G0(t){Vs(new Jn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ig(t)},c=new hT(s,r,i,l);return IT(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Vs(new Jn("auth-internal",e=>{const n=as(e.getProvider("auth").getImmediate());return(s=>new q0(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yn(wf,Ef,z0(t)),yn(wf,Ef,"esm2017")}/**
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
 */const Y0=5*60,Q0=Jp("authIdTokenMaxAge")||Y0;let If=null;const J0=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Q0)return;const r=n==null?void 0:n.token;If!==r&&(If=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function fo(t=sg()){const e=Ac(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ET(t,{popupRedirectResolver:K0,persistence:[n0,VT,Mg]}),s=Jp("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=J0(i.toString());jT(n,o,()=>o(n.currentUser)),BT(n,a=>o(a))}}const r=Yp("auth");return r&&CT(n,`http://${r}`),n}function X0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}pT({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Nt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",X0().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});G0("Browser");const Z0={},eS={class:"relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 shadow-lg lg:py-4 dark:bg-sky-950","data-te-navbar-ref":""};function tS(t,e){return $e(),Ye("nav",eS,[Uo(t.$slots,"default")])}const Bc=Dt(Z0,[["render",tS]]);function Zo(t,e,...n){if(t in e){let r=e[t];return typeof r=="function"?r(...n):r}let s=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(r=>`"${r}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,Zo),s}var Tl=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(Tl||{}),nS=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(nS||{});function rr({visible:t=!0,features:e=0,ourProps:n,theirProps:s,...r}){var i;let o=Hg(s,n),a=Object.assign(r,{props:o});if(t||e&2&&o.static)return Na(a);if(e&1){let l=(i=o.unmount)==null||i?0:1;return Zo(l,{0(){return null},1(){return Na({...r,props:{...o,hidden:!0,style:{display:"none"}}})}})}return Na(a)}function Na({props:t,attrs:e,slots:n,slot:s,name:r}){var i,o;let{as:a,...l}=Wg(t,["unmount","static"]),c=(i=n.default)==null?void 0:i.call(n,s),u={};if(s){let d=!1,f=[];for(let[p,m]of Object.entries(s))typeof m=="boolean"&&(d=!0),m===!0&&f.push(p);d&&(u["data-headlessui-state"]=f.join(" "))}if(a==="template"){if(c=jg(c??[]),Object.keys(l).length>0||Object.keys(e).length>0){let[d,...f]=c??[];if(!rS(d)||f.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${r} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(e)).map(_=>_.trim()).filter((_,v,I)=>I.indexOf(_)===v).sort((_,v)=>_.localeCompare(v)).map(_=>`  - ${_}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(_=>`  - ${_}`).join(`
`)].join(`
`));let p=Hg((o=d.props)!=null?o:{},l),m=zt(d,p);for(let _ in p)_.startsWith("on")&&(m.props||(m.props={}),m.props[_]=p[_]);return m}return Array.isArray(c)&&c.length===1?c[0]:c}return En(a,Object.assign({},l,u),{default:()=>c})}function jg(t){return t.flatMap(e=>e.type===De?jg(e.children):[e])}function Hg(...t){if(t.length===0)return{};if(t.length===1)return t[0];let e={},n={};for(let s of t)for(let r in s)r.startsWith("on")&&typeof s[r]=="function"?(n[r]!=null||(n[r]=[]),n[r].push(s[r])):e[r]=s[r];if(e.disabled||e["aria-disabled"])return Object.assign(e,Object.fromEntries(Object.keys(n).map(s=>[s,void 0])));for(let s in n)Object.assign(e,{[s](r,...i){let o=n[s];for(let a of o){if(r instanceof Event&&r.defaultPrevented)return;a(r,...i)}}});return e}function sS(t){let e=Object.assign({},t);for(let n in e)e[n]===void 0&&delete e[n];return e}function Wg(t,e=[]){let n=Object.assign({},t);for(let s of e)s in n&&delete n[s];return n}function rS(t){return t==null?!1:typeof t.type=="string"||typeof t.type=="object"||typeof t.type=="function"}let iS=0;function oS(){return++iS}function ea(){return oS()}var Pe=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(Pe||{});function aS(t){throw new Error("Unexpected object: "+t)}var ot=(t=>(t[t.First=0]="First",t[t.Previous=1]="Previous",t[t.Next=2]="Next",t[t.Last=3]="Last",t[t.Specific=4]="Specific",t[t.Nothing=5]="Nothing",t))(ot||{});function lS(t,e){let n=e.resolveItems();if(n.length<=0)return null;let s=e.resolveActiveIndex(),r=s??-1,i=(()=>{switch(t.focus){case 0:return n.findIndex(o=>!e.resolveDisabled(o));case 1:{let o=n.slice().reverse().findIndex((a,l,c)=>r!==-1&&c.length-l-1>=r?!1:!e.resolveDisabled(a));return o===-1?o:n.length-1-o}case 2:return n.findIndex((o,a)=>a<=r?!1:!e.resolveDisabled(o));case 3:{let o=n.slice().reverse().findIndex(a=>!e.resolveDisabled(a));return o===-1?o:n.length-1-o}case 4:return n.findIndex(o=>e.resolveId(o)===t.id);case 5:return null;default:aS(t)}})();return i===-1?s:i}function Te(t){var e;return t==null||t.value==null?null:(e=t.value.$el)!=null?e:t.value}let Vg=Symbol("Context");var Qr=(t=>(t[t.Open=1]="Open",t[t.Closed=2]="Closed",t[t.Closing=4]="Closing",t[t.Opening=8]="Opening",t))(Qr||{});function cS(){return Xe(Vg,null)}function uS(t){Rs(Vg,t)}function Cf(t,e){if(t)return t;let n=e??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function Kg(t,e){let n=X(Cf(t.value.type,t.value.as));return is(()=>{n.value=Cf(t.value.type,t.value.as)}),Xs(()=>{var s;n.value||Te(e)&&Te(e)instanceof HTMLButtonElement&&!((s=Te(e))!=null&&s.hasAttribute("type"))&&(n.value="button")}),n}var dS=Object.defineProperty,fS=(t,e,n)=>e in t?dS(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Tf=(t,e,n)=>(fS(t,typeof e!="symbol"?e+"":e,n),n);class hS{constructor(){Tf(this,"current",this.detect()),Tf(this,"currentId",0)}set(e){this.current!==e&&(this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let jc=new hS;function Hc(t){if(jc.isServer)return null;if(t instanceof Node)return t.ownerDocument;if(t!=null&&t.hasOwnProperty("value")){let e=Te(t);if(e)return e.ownerDocument}return document}function pS({container:t,accept:e,walk:n,enabled:s}){Xs(()=>{let r=t.value;if(!r||s!==void 0&&!s.value)return;let i=Hc(t);if(!i)return;let o=Object.assign(l=>e(l),{acceptNode:e}),a=i.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,o,!1);for(;a.nextNode();)n(a.currentNode)})}let Sl=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var kl=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t))(kl||{}),gS=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(gS||{}),mS=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(mS||{});function qg(t=document.body){return t==null?[]:Array.from(t.querySelectorAll(Sl)).sort((e,n)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Wc=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(Wc||{});function Vc(t,e=0){var n;return t===((n=Hc(t))==null?void 0:n.body)?!1:Zo(e,{0(){return t.matches(Sl)},1(){let s=t;for(;s!==null;){if(s.matches(Sl))return!0;s=s.parentElement}return!1}})}function zg(t){let e=Hc(t);Et(()=>{e&&!Vc(e.activeElement,0)&&vS(t)})}var _S=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(_S||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",t=>{t.metaKey||t.altKey||t.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",t=>{t.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:t.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function vS(t){t==null||t.focus({preventScroll:!0})}let yS=["textarea","input"].join(",");function bS(t){var e,n;return(n=(e=t==null?void 0:t.matches)==null?void 0:e.call(t,yS))!=null?n:!1}function Gg(t,e=n=>n){return t.slice().sort((n,s)=>{let r=e(n),i=e(s);if(r===null||i===null)return 0;let o=r.compareDocumentPosition(i);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function wS(t,e){return ES(qg(),e,{relativeTo:t})}function ES(t,e,{sorted:n=!0,relativeTo:s=null,skipElements:r=[]}={}){var i;let o=(i=Array.isArray(t)?t.length>0?t[0].ownerDocument:document:t==null?void 0:t.ownerDocument)!=null?i:document,a=Array.isArray(t)?n?Gg(t):t:qg(t);r.length>0&&a.length>1&&(a=a.filter(m=>!r.includes(m))),s=s??o.activeElement;let l=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,a.indexOf(s))-1;if(e&4)return Math.max(0,a.indexOf(s))+1;if(e&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=e&32?{preventScroll:!0}:{},d=0,f=a.length,p;do{if(d>=f||d+f<=0)return 0;let m=c+d;if(e&16)m=(m+f)%f;else{if(m<0)return 3;if(m>=f)return 1}p=a[m],p==null||p.focus(u),d+=l}while(p!==o.activeElement);return e&6&&bS(p)&&p.select(),2}function Si(t,e,n){jc.isServer||Xs(s=>{document.addEventListener(t,e,n),s(()=>document.removeEventListener(t,e,n))})}function IS(t,e,n){jc.isServer||Xs(s=>{window.addEventListener(t,e,n),s(()=>window.removeEventListener(t,e,n))})}function CS(t,e,n=le(()=>!0)){function s(i,o){if(!n.value||i.defaultPrevented)return;let a=o(i);if(a===null||!a.getRootNode().contains(a))return;let l=function c(u){return typeof u=="function"?c(u()):Array.isArray(u)||u instanceof Set?u:[u]}(t);for(let c of l){if(c===null)continue;let u=c instanceof HTMLElement?c:Te(c);if(u!=null&&u.contains(a)||i.composed&&i.composedPath().includes(u))return}return!Vc(a,Wc.Loose)&&a.tabIndex!==-1&&i.preventDefault(),e(i,a)}let r=X(null);Si("pointerdown",i=>{var o,a;n.value&&(r.value=((a=(o=i.composedPath)==null?void 0:o.call(i))==null?void 0:a[0])||i.target)},!0),Si("mousedown",i=>{var o,a;n.value&&(r.value=((a=(o=i.composedPath)==null?void 0:o.call(i))==null?void 0:a[0])||i.target)},!0),Si("click",i=>{r.value&&(s(i,()=>r.value),r.value=null)},!0),Si("touchend",i=>s(i,()=>i.target instanceof HTMLElement?i.target:null),!0),IS("blur",i=>s(i,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var Yg=(t=>(t[t.None=1]="None",t[t.Focusable=2]="Focusable",t[t.Hidden=4]="Hidden",t))(Yg||{});let TS=Jt({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(t,{slots:e,attrs:n}){return()=>{let{features:s,...r}=t,i={"aria-hidden":(s&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(s&4)===4&&(s&2)!==2&&{display:"none"}}};return rr({ourProps:i,theirProps:r,slot:{},attrs:n,slots:e,name:"Hidden"})}}});function SS(t){var e,n;let s=(e=t==null?void 0:t.form)!=null?e:t.closest("form");if(s){for(let r of s.elements)if(r!==t&&(r.tagName==="INPUT"&&r.type==="submit"||r.tagName==="BUTTON"&&r.type==="submit"||r.nodeName==="INPUT"&&r.type==="image")){r.click();return}(n=s.requestSubmit)==null||n.call(s)}}function kS(t,e,n){let s=X(n==null?void 0:n.value),r=le(()=>t.value!==void 0);return[le(()=>r.value?t.value:s.value),function(i){return r.value||(s.value=i),e==null?void 0:e(i)}]}function Sf(t){return[t.screenX,t.screenY]}function RS(){let t=X([-1,-1]);return{wasMoved(e){let n=Sf(e);return t.value[0]===n[0]&&t.value[1]===n[1]?!1:(t.value=n,!0)},update(e){t.value=Sf(e)}}}let kf=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function Rf(t){var e,n;let s=(e=t.innerText)!=null?e:"",r=t.cloneNode(!0);if(!(r instanceof HTMLElement))return s;let i=!1;for(let a of r.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))a.remove(),i=!0;let o=i?(n=r.innerText)!=null?n:"":s;return kf.test(o)&&(o=o.replace(kf,"")),o}function AS(t){let e=t.getAttribute("aria-label");if(typeof e=="string")return e.trim();let n=t.getAttribute("aria-labelledby");if(n){let s=n.split(" ").map(r=>{let i=document.getElementById(r);if(i){let o=i.getAttribute("aria-label");return typeof o=="string"?o.trim():Rf(i).trim()}return null}).filter(Boolean);if(s.length>0)return s.join(", ")}return Rf(t).trim()}function PS(t){let e=X(""),n=X("");return()=>{let s=Te(t);if(!s)return"";let r=s.innerText;if(e.value===r)return n.value;let i=AS(s).trim().toLowerCase();return e.value=r,n.value=i,i}}var xS=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(xS||{}),NS=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(NS||{});function OS(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let Qg=Symbol("MenuContext");function ta(t){let e=Xe(Qg,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ta),n}return e}let MS=Jt({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:e,attrs:n}){let s=X(1),r=X(null),i=X(null),o=X([]),a=X(""),l=X(null),c=X(1);function u(f=p=>p){let p=l.value!==null?o.value[l.value]:null,m=Gg(f(o.value.slice()),v=>Te(v.dataRef.domRef)),_=p?m.indexOf(p):null;return _===-1&&(_=null),{items:m,activeItemIndex:_}}let d={menuState:s,buttonRef:r,itemsRef:i,items:o,searchQuery:a,activeItemIndex:l,activationTrigger:c,closeMenu:()=>{s.value=1,l.value=null},openMenu:()=>s.value=0,goToItem(f,p,m){let _=u(),v=lS(f===ot.Specific?{focus:ot.Specific,id:p}:{focus:f},{resolveItems:()=>_.items,resolveActiveIndex:()=>_.activeItemIndex,resolveId:I=>I.id,resolveDisabled:I=>I.dataRef.disabled});a.value="",l.value=v,c.value=m??1,o.value=_.items},search(f){let p=a.value!==""?0:1;a.value+=f.toLowerCase();let m=(l.value!==null?o.value.slice(l.value+p).concat(o.value.slice(0,l.value+p)):o.value).find(v=>v.dataRef.textValue.startsWith(a.value)&&!v.dataRef.disabled),_=m?o.value.indexOf(m):-1;_===-1||_===l.value||(l.value=_,c.value=1)},clearSearch(){a.value=""},registerItem(f,p){let m=u(_=>[..._,{id:f,dataRef:p}]);o.value=m.items,l.value=m.activeItemIndex,c.value=1},unregisterItem(f){let p=u(m=>{let _=m.findIndex(v=>v.id===f);return _!==-1&&m.splice(_,1),m});o.value=p.items,l.value=p.activeItemIndex,c.value=1}};return CS([r,i],(f,p)=>{var m;d.closeMenu(),Vc(p,Wc.Loose)||(f.preventDefault(),(m=Te(r))==null||m.focus())},le(()=>s.value===0)),Rs(Qg,d),uS(le(()=>Zo(s.value,{0:Qr.Open,1:Qr.Closed}))),()=>{let f={open:s.value===0,close:d.closeMenu};return rr({ourProps:{},theirProps:t,slot:f,slots:e,attrs:n,name:"Menu"})}}}),DS=Jt({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${ea()}`}},setup(t,{attrs:e,slots:n,expose:s}){let r=ta("MenuButton");s({el:r.buttonRef,$el:r.buttonRef});function i(c){switch(c.key){case Pe.Space:case Pe.Enter:case Pe.ArrowDown:c.preventDefault(),c.stopPropagation(),r.openMenu(),Et(()=>{var u;(u=Te(r.itemsRef))==null||u.focus({preventScroll:!0}),r.goToItem(ot.First)});break;case Pe.ArrowUp:c.preventDefault(),c.stopPropagation(),r.openMenu(),Et(()=>{var u;(u=Te(r.itemsRef))==null||u.focus({preventScroll:!0}),r.goToItem(ot.Last)});break}}function o(c){switch(c.key){case Pe.Space:c.preventDefault();break}}function a(c){t.disabled||(r.menuState.value===0?(r.closeMenu(),Et(()=>{var u;return(u=Te(r.buttonRef))==null?void 0:u.focus({preventScroll:!0})})):(c.preventDefault(),r.openMenu(),OS(()=>{var u;return(u=Te(r.itemsRef))==null?void 0:u.focus({preventScroll:!0})})))}let l=Kg(le(()=>({as:t.as,type:e.type})),r.buttonRef);return()=>{var c;let u={open:r.menuState.value===0},{id:d,...f}=t,p={ref:r.buttonRef,id:d,type:l.value,"aria-haspopup":"menu","aria-controls":(c=Te(r.itemsRef))==null?void 0:c.id,"aria-expanded":r.menuState.value===0,onKeydown:i,onKeyup:o,onClick:a};return rr({ourProps:p,theirProps:f,slot:u,attrs:e,slots:n,name:"MenuButton"})}}}),LS=Jt({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${ea()}`}},setup(t,{attrs:e,slots:n,expose:s}){let r=ta("MenuItems"),i=X(null);s({el:r.itemsRef,$el:r.itemsRef}),pS({container:le(()=>Te(r.itemsRef)),enabled:le(()=>r.menuState.value===0),accept(u){return u.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:u.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(u){u.setAttribute("role","none")}});function o(u){var d;switch(i.value&&clearTimeout(i.value),u.key){case Pe.Space:if(r.searchQuery.value!=="")return u.preventDefault(),u.stopPropagation(),r.search(u.key);case Pe.Enter:if(u.preventDefault(),u.stopPropagation(),r.activeItemIndex.value!==null){let f=r.items.value[r.activeItemIndex.value];(d=Te(f.dataRef.domRef))==null||d.click()}r.closeMenu(),zg(Te(r.buttonRef));break;case Pe.ArrowDown:return u.preventDefault(),u.stopPropagation(),r.goToItem(ot.Next);case Pe.ArrowUp:return u.preventDefault(),u.stopPropagation(),r.goToItem(ot.Previous);case Pe.Home:case Pe.PageUp:return u.preventDefault(),u.stopPropagation(),r.goToItem(ot.First);case Pe.End:case Pe.PageDown:return u.preventDefault(),u.stopPropagation(),r.goToItem(ot.Last);case Pe.Escape:u.preventDefault(),u.stopPropagation(),r.closeMenu(),Et(()=>{var f;return(f=Te(r.buttonRef))==null?void 0:f.focus({preventScroll:!0})});break;case Pe.Tab:u.preventDefault(),u.stopPropagation(),r.closeMenu(),Et(()=>wS(Te(r.buttonRef),u.shiftKey?kl.Previous:kl.Next));break;default:u.key.length===1&&(r.search(u.key),i.value=setTimeout(()=>r.clearSearch(),350));break}}function a(u){switch(u.key){case Pe.Space:u.preventDefault();break}}let l=cS(),c=le(()=>l!==null?(l.value&Qr.Open)===Qr.Open:r.menuState.value===0);return()=>{var u,d;let f={open:r.menuState.value===0},{id:p,...m}=t,_={"aria-activedescendant":r.activeItemIndex.value===null||(u=r.items.value[r.activeItemIndex.value])==null?void 0:u.id,"aria-labelledby":(d=Te(r.buttonRef))==null?void 0:d.id,id:p,onKeydown:o,onKeyup:a,role:"menu",tabIndex:0,ref:r.itemsRef};return rr({ourProps:_,theirProps:m,slot:f,attrs:e,slots:n,features:Tl.RenderStrategy|Tl.Static,visible:c.value,name:"MenuItems"})}}}),FS=Jt({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${ea()}`}},setup(t,{slots:e,attrs:n,expose:s}){let r=ta("MenuItem"),i=X(null);s({el:i,$el:i});let o=le(()=>r.activeItemIndex.value!==null?r.items.value[r.activeItemIndex.value].id===t.id:!1),a=PS(i),l=le(()=>({disabled:t.disabled,get textValue(){return a()},domRef:i}));is(()=>r.registerItem(t.id,l)),Fo(()=>r.unregisterItem(t.id)),Xs(()=>{r.menuState.value===0&&o.value&&r.activationTrigger.value!==0&&Et(()=>{var _,v;return(v=(_=Te(i))==null?void 0:_.scrollIntoView)==null?void 0:v.call(_,{block:"nearest"})})});function c(_){if(t.disabled)return _.preventDefault();r.closeMenu(),zg(Te(r.buttonRef))}function u(){if(t.disabled)return r.goToItem(ot.Nothing);r.goToItem(ot.Specific,t.id)}let d=RS();function f(_){d.update(_)}function p(_){d.wasMoved(_)&&(t.disabled||o.value||r.goToItem(ot.Specific,t.id,0))}function m(_){d.wasMoved(_)&&(t.disabled||o.value&&r.goToItem(ot.Nothing))}return()=>{let{disabled:_}=t,v={active:o.value,disabled:_,close:r.closeMenu},{id:I,...S}=t;return rr({ourProps:{id:I,ref:i,role:"menuitem",tabIndex:_===!0?void 0:-1,"aria-disabled":_===!0?!0:void 0,disabled:void 0,onClick:c,onFocus:u,onPointerenter:f,onMouseenter:f,onPointermove:p,onMousemove:p,onPointerleave:m,onMouseleave:m},theirProps:{...n,...S},slot:v,attrs:n,slots:e,name:"MenuItem"})}}}),US=Symbol("GroupContext"),$S=Jt({name:"Switch",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:()=>`headlessui-switch-${ea()}`}},inheritAttrs:!1,setup(t,{emit:e,attrs:n,slots:s,expose:r}){let i=Xe(US,null),[o,a]=kS(le(()=>t.modelValue),v=>e("update:modelValue",v),le(()=>t.defaultChecked));function l(){a(!o.value)}let c=X(null),u=i===null?c:i.switchRef,d=Kg(le(()=>({as:t.as,type:n.type})),u);r({el:u,$el:u});function f(v){v.preventDefault(),l()}function p(v){v.key===Pe.Space?(v.preventDefault(),l()):v.key===Pe.Enter&&SS(v.currentTarget)}function m(v){v.preventDefault()}let _=le(()=>{var v,I;return(I=(v=Te(u))==null?void 0:v.closest)==null?void 0:I.call(v,"form")});return is(()=>{xt([_],()=>{if(!_.value||t.defaultChecked===void 0)return;function v(){a(t.defaultChecked)}return _.value.addEventListener("reset",v),()=>{var I;(I=_.value)==null||I.removeEventListener("reset",v)}},{immediate:!0})}),()=>{let{id:v,name:I,value:S,form:M,...A}=t,G={checked:o.value},U={id:v,ref:u,role:"switch",type:d.value,tabIndex:0,"aria-checked":o.value,"aria-labelledby":i==null?void 0:i.labelledby.value,"aria-describedby":i==null?void 0:i.describedby.value,onClick:f,onKeyup:p,onKeypress:m};return En(De,[I!=null&&o.value!=null?En(TS,sS({features:Yg.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:o.value,form:M,name:I,value:S})):null,rr({ourProps:U,theirProps:{...n,...Wg(A,["modelValue","defaultChecked"])},slot:G,attrs:n,slots:s,name:"Switch"})])}}});function Jg(t){return wh()?(V_(t),!0):!1}function Ks(t){return typeof t=="function"?t():Ss(t)}const BS=typeof window<"u"&&typeof document<"u",jS=Object.prototype.toString,HS=t=>jS.call(t)==="[object Object]",Xg=()=>{};function WS(t,e){function n(...s){return new Promise((r,i)=>{Promise.resolve(t(()=>e.apply(this,s),{fn:e,thisArg:this,args:s})).then(r).catch(i)})}return n}const Zg=t=>t();function VS(t=Zg){const e=X(!0);function n(){e.value=!1}function s(){e.value=!0}const r=(...i)=>{e.value&&t(...i)};return{isActive:xo(e),pause:n,resume:s,eventFilter:r}}function KS(...t){if(t.length!==1)return Tv(...t);const e=t[0];return typeof e=="function"?xo(Ev(()=>({get:e,set:Xg}))):X(e)}function qS(t,e,n={}){const{eventFilter:s=Zg,...r}=n;return xt(t,WS(s,e),r)}function zS(t,e,n={}){const{eventFilter:s,...r}=n,{eventFilter:i,pause:o,resume:a,isActive:l}=VS(s);return{stop:qS(t,e,{...r,eventFilter:i}),pause:o,resume:a,isActive:l}}function GS(t,e=!0){dc()?is(t):e?t():Et(t)}function YS(t=!1,e={}){const{truthyValue:n=!0,falsyValue:s=!1}=e,r=Ne(t),i=X(t);function o(a){if(arguments.length)return i.value=a,i.value;{const l=Ks(n);return i.value=i.value===l?Ks(s):l,i.value}}return r?o:[i,o]}function em(t){var e;const n=Ks(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Jr=BS?window:void 0;function Af(...t){let e,n,s,r;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,s,r]=t,e=Jr):[e,n,s,r]=t,!e)return Xg;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const i=[],o=()=>{i.forEach(u=>u()),i.length=0},a=(u,d,f,p)=>(u.addEventListener(d,f,p),()=>u.removeEventListener(d,f,p)),l=xt(()=>[em(e),Ks(r)],([u,d])=>{if(o(),!u)return;const f=HS(d)?{...d}:d;i.push(...n.flatMap(p=>s.map(m=>a(u,p,m,f))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return Jg(c),c}function QS(){const t=X(!1);return dc()&&is(()=>{t.value=!0}),t}function JS(t){const e=QS();return le(()=>(e.value,!!t()))}function XS(t,e={}){const{window:n=Jr}=e,s=JS(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const i=X(!1),o=c=>{i.value=c.matches},a=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",o):r.removeListener(o))},l=Xs(()=>{s.value&&(a(),r=n.matchMedia(Ks(t)),"addEventListener"in r?r.addEventListener("change",o):r.addListener(o),i.value=r.matches)});return Jg(()=>{l(),a(),r=void 0}),i}const ki=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ri="__vueuse_ssr_handlers__",ZS=ek();function ek(){return Ri in ki||(ki[Ri]=ki[Ri]||{}),ki[Ri]}function tm(t,e){return ZS[t]||e}function tk(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const nk={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},Pf="vueuse-storage";function sk(t,e,n,s={}){var r;const{flush:i="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:d=Jr,eventFilter:f,onError:p=P=>{console.error(P)}}=s,m=(u?Mh:X)(e);if(!n)try{n=tm("getDefaultStorage",()=>{var P;return(P=Jr)==null?void 0:P.localStorage})()}catch(P){p(P)}if(!n)return m;const _=Ks(e),v=tk(_),I=(r=s.serializer)!=null?r:nk[v],{pause:S,resume:M}=zS(m,()=>A(m.value),{flush:i,deep:o,eventFilter:f});return d&&a&&(Af(d,"storage",Q),Af(d,Pf,U)),Q(),m;function A(P){try{if(P==null)n.removeItem(t);else{const W=I.write(P),V=n.getItem(t);V!==W&&(n.setItem(t,W),d&&d.dispatchEvent(new CustomEvent(Pf,{detail:{key:t,oldValue:V,newValue:W,storageArea:n}})))}}catch(W){p(W)}}function G(P){const W=P?P.newValue:n.getItem(t);if(W==null)return l&&_!==null&&n.setItem(t,I.write(_)),_;if(!P&&c){const V=I.read(W);return typeof c=="function"?c(V,_):v==="object"&&!Array.isArray(V)?{..._,...V}:V}else return typeof W!="string"?W:I.read(W)}function U(P){Q(P.detail)}function Q(P){if(!(P&&P.storageArea!==n)){if(P&&P.key==null){m.value=_;return}if(!(P&&P.key!==t)){S();try{(P==null?void 0:P.newValue)!==I.write(m.value)&&(m.value=G(P))}catch(W){p(W)}finally{P?Et(M):M()}}}}}function rk(t){return XS("(prefers-color-scheme: dark)",t)}function ik(t={}){const{selector:e="html",attribute:n="class",initialValue:s="auto",window:r=Jr,storage:i,storageKey:o="vueuse-color-scheme",listenToStorageChanges:a=!0,storageRef:l,emitAuto:c,disableTransition:u=!0}=t,d={auto:"",light:"light",dark:"dark",...t.modes||{}},f=rk({window:r}),p=le(()=>f.value?"dark":"light"),m=l||(o==null?KS(s):sk(o,s,i,{window:r,listenToStorageChanges:a})),_=le(()=>m.value==="auto"?p.value:m.value),v=tm("updateHTMLAttrs",(A,G,U)=>{const Q=typeof A=="string"?r==null?void 0:r.document.querySelector(A):em(A);if(!Q)return;let P;if(u){P=r.document.createElement("style");const W="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";P.appendChild(document.createTextNode(W)),r.document.head.appendChild(P)}if(G==="class"){const W=U.split(/\s/g);Object.values(d).flatMap(V=>(V||"").split(/\s/g)).filter(Boolean).forEach(V=>{W.includes(V)?Q.classList.add(V):Q.classList.remove(V)})}else Q.setAttribute(G,U);u&&(r.getComputedStyle(P).opacity,document.head.removeChild(P))});function I(A){var G;v(e,n,(G=d[A])!=null?G:A)}function S(A){t.onChanged?t.onChanged(A,I):I(A)}xt(_,S,{flush:"post",immediate:!0}),GS(()=>S(_.value));const M=le({get(){return c?m.value:_.value},set(A){m.value=A}});try{return Object.assign(M,{store:m,system:p,state:_})}catch{return M}}function ok(t={}){const{valueDark:e="dark",valueLight:n=""}=t,s=ik({...t,onChanged:(i,o)=>{var a;t.onChanged?(a=t.onChanged)==null||a.call(t,i==="dark",o,i):o(i)},modes:{dark:e,light:n}});return le({get(){return s.value==="dark"},set(i){const o=i?"dark":"light";s.system.value===o?s.value="auto":s.value=o}})}const ak={components:{LoginComponent:rI,ErrorMessage:lI,BaseHeader:Bc,Icon:Ec,Menu:MS,MenuButton:DS,MenuItems:LS,MenuItem:FS,Switch:$S},setup(){const t=Ap(),e=X(),n=ok(),s=YS(n),r=fo();function i(o){const a=X(o[0]),l=X(o[1]),c=X(o[2]);e.value="",c.value==="Login"?$T(r,a.value,l.value).then(()=>{t.replace("/tasks")}).catch(u=>{switch(u.code){case"auth/invalid-email":e.value="Invalid email";break;case"auth/user-not-found":e.value="No account with that email was found";break;case"auth/wrong-password":e.value="Incorrect password";break;default:e.value="Email or password was incorrect";break}}):c.value==="Signup"&&UT(r,a.value,l.value).then(()=>{alert("User created with success!")}).catch(u=>{console.log(u.code),alert(u.message)})}return{signupOrLogin:i,errMsg:e,isDark:n,toggleDark:s}}},lk=se("div",{class:"py-0 px-3 font-semibold dark:text-white"},"Task Project",-1),ck={class:"flex"},uk=se("h1",{class:"font-semibold text-3xl p-4 dark:text-white"},"The Task Project",-1),dk=se("h3",{class:"font-medium text-2xl p-2 dark:text-white"}," Please login or signup to start your task list! ",-1);function fk(t,e,n,s,r,i){const o=Ke("Icon"),a=Ke("Switch"),l=Ke("base-header"),c=Ke("login-component"),u=Ke("error-message"),d=Ke("content-box");return $e(),Ye(De,null,[ae(l,null,{default:it(()=>[lk,se("div",ck,[ae(o,{icon:"iconamoon:mode-light",color:"black",width:"26",height:"26"}),ae(a,{onClick:e[0]||(e[0]=f=>s.toggleDark()),modelValue:s.isDark,"onUpdate:modelValue":e[1]||(e[1]=f=>s.isDark=f),class:Fr([s.isDark?"bg-gray-900":"bg-gray-700","relative inline-flex h-6 w-11 items-center rounded-full transition-colors"])},{default:it(()=>[se("span",{class:Fr([s.isDark?"translate-x-6":"translate-x-1","inline-block h-4 w-4 transform rounded-full bg-white transition-transform"])},null,2)]),_:1},8,["modelValue","class"]),ae(o,{icon:"material-symbols:dark-mode-outline",color:"black",width:"26",height:"26"})])]),_:1}),ae(d,null,{default:it(()=>[uk,dk,ae(c,{onEmitUser:s.signupOrLogin},null,8,["onEmitUser"]),s.errMsg?($e(),cc(u,{key:0},{default:it(()=>[mn(Vi(s.errMsg),1)]),_:1})):Cy("",!0)]),_:1})],64)}const hk=Dt(ak,[["render",fk]]);/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var nm="store";function pk(t){return t===void 0&&(t=null),Xe(t!==null?t:nm)}function ir(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function gk(t){return t!==null&&typeof t=="object"}function mk(t){return t&&typeof t.then=="function"}function _k(t,e){return function(){return t(e)}}function sm(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function rm(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;na(t,n,[],t._modules.root,!0),Kc(t,n,e)}function Kc(t,e,n){var s=t._state,r=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={},a={},l=H_(!0);l.run(function(){ir(i,function(c,u){o[u]=_k(c,t),a[u]=le(function(){return o[u]()}),Object.defineProperty(t.getters,u,{get:function(){return a[u].value},enumerable:!0})})}),t._state=Js({data:e}),t._scope=l,t.strict&&Ek(t),s&&n&&t._withCommit(function(){s.data=null}),r&&r.stop()}function na(t,e,n,s,r){var i=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!i&&!r){var a=qc(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){a[l]=s.state})}var c=s.context=vk(t,o,n);s.forEachMutation(function(u,d){var f=o+d;yk(t,f,u,c)}),s.forEachAction(function(u,d){var f=u.root?d:o+d,p=u.handler||u;bk(t,f,p,c)}),s.forEachGetter(function(u,d){var f=o+d;wk(t,f,u,c)}),s.forEachChild(function(u,d){na(t,e,n.concat(d),u,r)})}function vk(t,e,n){var s=e==="",r={dispatch:s?t.dispatch:function(i,o,a){var l=ho(i,o,a),c=l.payload,u=l.options,d=l.type;return(!u||!u.root)&&(d=e+d),t.dispatch(d,c)},commit:s?t.commit:function(i,o,a){var l=ho(i,o,a),c=l.payload,u=l.options,d=l.type;(!u||!u.root)&&(d=e+d),t.commit(d,c,u)}};return Object.defineProperties(r,{getters:{get:s?function(){return t.getters}:function(){return im(t,e)}},state:{get:function(){return qc(t.state,n)}}}),r}function im(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(r){if(r.slice(0,s)===e){var i=r.slice(s);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function yk(t,e,n,s){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(o){n.call(t,s.state,o)})}function bk(t,e,n,s){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(o){var a=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return mk(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):a})}function wk(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(s.state,s.getters,i.state,i.getters)})}function Ek(t){xt(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function qc(t,e){return e.reduce(function(n,s){return n[s]},t)}function ho(t,e,n){return gk(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var Ik="vuex bindings",xf="vuex:mutations",Oa="vuex:actions",ms="vuex",Ck=0;function Tk(t,e){Hb({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Ik]},function(n){n.addTimelineLayer({id:xf,label:"Vuex Mutations",color:Nf}),n.addTimelineLayer({id:Oa,label:"Vuex Actions",color:Nf}),n.addInspector({id:ms,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===ms)if(s.filter){var r=[];cm(r,e._modules.root,s.filter,""),s.rootNodes=r}else s.rootNodes=[lm(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===ms){var r=s.nodeId;im(e,r),s.state=Rk(Pk(e._modules,r),r==="root"?e.getters:e._makeLocalGettersCache,r)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===ms){var r=s.nodeId,i=s.path;r!=="root"&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit(function(){s.set(e._state.data,i,s.state.value)})}}),e.subscribe(function(s,r){var i={};s.payload&&(i.payload=s.payload),i.state=r,n.notifyComponentUpdate(),n.sendInspectorTree(ms),n.sendInspectorState(ms),n.addTimelineEvent({layerId:xf,event:{time:Date.now(),title:s.type,data:i}})}),e.subscribeAction({before:function(s,r){var i={};s.payload&&(i.payload=s.payload),s._id=Ck++,s._time=Date.now(),i.state=r,n.addTimelineEvent({layerId:Oa,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:i}})},after:function(s,r){var i={},o=Date.now()-s._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(i.payload=s.payload),i.state=r,n.addTimelineEvent({layerId:Oa,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:i}})}})})}var Nf=8702998,Sk=6710886,kk=16777215,om={label:"namespaced",textColor:kk,backgroundColor:Sk};function am(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function lm(t,e){return{id:e||"root",label:am(e),tags:t.namespaced?[om]:[],children:Object.keys(t._children).map(function(n){return lm(t._children[n],e+n+"/")})}}function cm(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[om]:[]}),Object.keys(e._children).forEach(function(r){cm(t,e._children[r],n,s+r+"/")})}function Rk(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),r={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var i=Ak(e);r.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?am(o):o,editable:!1,value:Rl(function(){return i[o]})}})}return r}function Ak(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var r=e,i=s.pop();s.forEach(function(o){r[o]||(r[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),r=r[o]._custom.value}),r[i]=Rl(function(){return t[n]})}else e[n]=Rl(function(){return t[n]})}),e}function Pk(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,r,i){var o=s[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Rl(t){try{return t()}catch(e){return e}}var Tt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},um={namespaced:{configurable:!0}};um.namespaced.get=function(){return!!this._rawModule.namespaced};Tt.prototype.addChild=function(e,n){this._children[e]=n};Tt.prototype.removeChild=function(e){delete this._children[e]};Tt.prototype.getChild=function(e){return this._children[e]};Tt.prototype.hasChild=function(e){return e in this._children};Tt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Tt.prototype.forEachChild=function(e){ir(this._children,e)};Tt.prototype.forEachGetter=function(e){this._rawModule.getters&&ir(this._rawModule.getters,e)};Tt.prototype.forEachAction=function(e){this._rawModule.actions&&ir(this._rawModule.actions,e)};Tt.prototype.forEachMutation=function(e){this._rawModule.mutations&&ir(this._rawModule.mutations,e)};Object.defineProperties(Tt.prototype,um);var ls=function(e){this.register([],e,!1)};ls.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};ls.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,r){return n=n.getChild(r),s+(n.namespaced?r+"/":"")},"")};ls.prototype.update=function(e){dm([],this.root,e)};ls.prototype.register=function(e,n,s){var r=this;s===void 0&&(s=!0);var i=new Tt(n,s);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&ir(n.modules,function(a,l){r.register(e.concat(l),a,s)})};ls.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],r=n.getChild(s);r&&r.runtime&&n.removeChild(s)};ls.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function dm(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;dm(t.concat(s),e.getChild(s),n.modules[s])}}function xk(t){return new nt(t)}var nt=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var r=e.strict;r===void 0&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new ls(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(f,p){return l.call(o,f,p)},this.commit=function(f,p,m){return c.call(o,f,p,m)},this.strict=r;var u=this._modules.root.state;na(this,u,[],this._modules.root),Kc(this,u),s.forEach(function(d){return d(n)})},zc={state:{configurable:!0}};nt.prototype.install=function(e,n){e.provide(n||nm,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&Tk(e,this)};zc.state.get=function(){return this._state.data};zc.state.set=function(t){};nt.prototype.commit=function(e,n,s){var r=this,i=ho(e,n,s),o=i.type,a=i.payload,l={type:o,payload:a},c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(d){d(a)})}),this._subscribers.slice().forEach(function(u){return u(l,r.state)}))};nt.prototype.dispatch=function(e,n){var s=this,r=ho(e,n),i=r.type,o=r.payload,a={type:i,payload:o},l=this._actions[i];if(l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,s.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,d){c.then(function(f){try{s._actionSubscribers.filter(function(p){return p.after}).forEach(function(p){return p.after(a,s.state)})}catch{}u(f)},function(f){try{s._actionSubscribers.filter(function(p){return p.error}).forEach(function(p){return p.error(a,s.state,f)})}catch{}d(f)})})}};nt.prototype.subscribe=function(e,n){return sm(e,this._subscribers,n)};nt.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return sm(s,this._actionSubscribers,n)};nt.prototype.watch=function(e,n,s){var r=this;return xt(function(){return e(r.state,r.getters)},n,Object.assign({},s))};nt.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};nt.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),na(this,this.state,e,this._modules.get(e),s.preserveState),Kc(this,this.state)};nt.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=qc(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),rm(this)};nt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};nt.prototype.hotUpdate=function(e){this._modules.update(e),rm(this,!0)};nt.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(nt.prototype,zc);const Nk={components:{BaseHeader:Bc},setup(){const t=X(""),e=pk(),n=Ap();function s(){e.dispatch("submitData",t.value),t.value=""}function r(){fo().signOut(),n.replace("/login")}function i(){fo().onAuthStateChanged(function(o){o||n.replace("/")})}return oc(()=>{i()}),{taskText:t,submitTask:s,logoutUser:r}}},fm=t=>(Hh("data-v-84b0a3cc"),t=t(),Wh(),t),Ok={class:"dark:bg-gray-900"},Mk=fm(()=>se("p",{class:"text-3xl font-semibold p-3 dark:text-white"},"My Tasks",-1)),Dk=fm(()=>se("div",{class:"text-2xl font-normal pb-5 dark:text-white"},"Add a task below (with Enter) and click over the finished tasks",-1)),Lk={class:"my-4"};function Fk(t,e,n,s,r,i){const o=Ke("base-button"),a=Ke("base-header");return $e(),Ye("section",Ok,[ae(a,null,{default:it(()=>[ae(o,{class:"px-1 text-sm font-semibold left-10",onClick:s.logoutUser},{default:it(()=>[mn("Logout User")]),_:1},8,["onClick"])]),_:1}),Mk,Dk,se("div",Lk,[qa(se("input",{placeholder:"Add a new task!",id:"insertField",type:"text","onUpdate:modelValue":e[0]||(e[0]=l=>s.taskText=l),onKeydown:e[1]||(e[1]=pb(l=>s.submitTask(s.taskText),["enter"]))},null,544),[[Ji,s.taskText]]),se("button",{onClick:e[2]||(e[2]=l=>s.submitTask(s.taskText)),class:"bg-blue-500 text-white px-4 py-2 rounded ml-2"},"Add")])])}const Uk=Dt(Nk,[["render",Fk],["__scopeId","data-v-84b0a3cc"]]),Of="@firebase/database",Mf="1.0.12";/**
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
 */let hm="";function $k(t){hm=t}/**
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
 */class Bk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Fe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:qr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class jk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Lt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const pm=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Bk(e)}}catch{}return new jk},Hn=pm("localStorage"),Al=pm("sessionStorage");/**
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
 */const Os=new kc("@firebase/database"),Hk=function(){let t=1;return function(){return t++}}(),gm=function(t){const e=OI(t),n=new AI;n.update(e);const s=n.digest();return Ic.encodeByteArray(s)},di=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=di.apply(null,s):typeof s=="object"?e+=Fe(s):e+=s,e+=" "}return e};let Kn=null,Df=!0;const Wk=function(t,e){T(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Os.logLevel=fe.VERBOSE,Kn=Os.log.bind(Os),e&&Al.set("logging_enabled",!0)):typeof t=="function"?Kn=t:(Kn=null,Al.remove("logging_enabled"))},je=function(...t){if(Df===!0&&(Df=!1,Kn===null&&Al.get("logging_enabled")===!0&&Wk(!0)),Kn){const e=di.apply(null,t);Kn(e)}},fi=function(t){return function(...e){je(t,...e)}},Pl=function(...t){const e="FIREBASE INTERNAL ERROR: "+di(...t);Os.error(e)},Qt=function(...t){const e=`FIREBASE FATAL ERROR: ${di(...t)}`;throw Os.error(e),new Error(e)},at=function(...t){const e="FIREBASE WARNING: "+di(...t);Os.warn(e)},Vk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&at("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Gc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Kk=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},es="[MIN_NAME]",Cn="[MAX_NAME]",or=function(t,e){if(t===e)return 0;if(t===es||e===Cn)return-1;if(e===es||t===Cn)return 1;{const n=Lf(t),s=Lf(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},qk=function(t,e){return t===e?0:t<e?-1:1},gr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Fe(e))},Yc=function(t){if(typeof t!="object"||t===null)return Fe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Fe(e[s]),n+=":",n+=Yc(t[e[s]]);return n+="}",n},mm=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let r=0;r<n;r+=e)r+e>n?s.push(t.substring(r,n)):s.push(t.substring(r,r+e));return s};function tt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const _m=function(t){T(!Gc(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let r,i,o,a,l;t===0?(i=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),i=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(r?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},zk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Gk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Yk(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Qk=new RegExp("^-?(0*)\\d{1,10}$"),Jk=-2147483648,Xk=2147483647,Lf=function(t){if(Qk.test(t)){const e=Number(t);if(e>=Jk&&e<=Xk)return e}return null},hi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw at("Exception was thrown by user callback.",n),e},Math.floor(0))}},Zk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},xr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class eR{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,ct(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){at(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class tR{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(je("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',at(e)}}class Ms{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ms.OWNER="owner";/**
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
 */const Qc="5",vm="v",ym="s",bm="r",wm="f",Em=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Im="ls",Cm="p",xl="ac",Tm="websocket",Sm="long_polling";/**
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
 */class km{constructor(e,n,s,r,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Hn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Hn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function nR(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Rm(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===Tm)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Sm)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);nR(t)&&(n.ns=t.namespace);const r=[];return tt(n,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
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
 */class sR{constructor(){this.counters_={}}incrementCounter(e,n=1){Lt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return dI(this.counters_)}}/**
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
 */const Ma={},Da={};function Jc(t){const e=t.toString();return Ma[e]||(Ma[e]=new sR),Ma[e]}function rR(t,e){const n=t.toString();return Da[n]||(Da[n]=e()),Da[n]}/**
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
 */class iR{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&hi(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Ff="start",oR="close",aR="pLPCommand",lR="pRTLPCB",Am="id",Pm="pw",xm="ser",cR="cb",uR="seg",dR="ts",fR="d",hR="dframe",Nm=1870,Om=30,pR=Nm-Om,gR=25e3,mR=3e4;class ws{constructor(e,n,s,r,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=fi(e),this.stats_=Jc(n),this.urlFn=l=>(this.appCheckToken&&(l[xl]=this.appCheckToken),Rm(n,Sm,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new iR(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(mR)),Kk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xc((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ff)this.id=a,this.password=l;else if(o===oR)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ff]="t",s[xm]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[cR]=this.scriptTagHolder.uniqueCallbackIdentifier),s[vm]=Qc,this.transportSessionId&&(s[ym]=this.transportSessionId),this.lastSessionId&&(s[Im]=this.lastSessionId),this.applicationId&&(s[Cm]=this.applicationId),this.appCheckToken&&(s[xl]=this.appCheckToken),typeof location<"u"&&location.hostname&&Em.test(location.hostname)&&(s[bm]=wm);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ws.forceAllow_=!0}static forceDisallow(){ws.forceDisallow_=!0}static isAvailable(){return ws.forceAllow_?!0:!ws.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!zk()&&!Gk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=zp(n),r=mm(s,pR);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[hR]="t",s[Am]=e,s[Pm]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Fe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Xc{constructor(e,n,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Hk(),window[aR+this.uniqueCallbackIdentifier]=e,window[lR+this.uniqueCallbackIdentifier]=n,this.myIFrame=Xc.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){je("frame writing exception"),a.stack&&je(a.stack),je(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||je("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Am]=this.myID,e[Pm]=this.myPW,e[xm]=this.currentSerial;let n=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Om+s.length<=Nm;){const o=this.pendingSegs.shift();s=s+"&"+uR+r+"="+o.seg+"&"+dR+r+"="+o.ts+"&"+fR+r+"="+o.d,r++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(s,Math.floor(gR)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{je("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const _R=16384,vR=45e3;let po=null;typeof MozWebSocket<"u"?po=MozWebSocket:typeof WebSocket<"u"&&(po=WebSocket);class _t{constructor(e,n,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=fi(this.connId),this.stats_=Jc(n),this.connURL=_t.connectionURL_(n,o,a,r,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,r,i){const o={};return o[vm]=Qc,typeof location<"u"&&location.hostname&&Em.test(location.hostname)&&(o[bm]=wm),n&&(o[ym]=n),s&&(o[Im]=s),r&&(o[xl]=r),i&&(o[Cm]=i),Rm(e,Tm,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Hn.set("previous_websocket_failure",!0);try{let s;Zp(),this.mySock=new po(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){_t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&po!==null&&!_t.forceDisallow_}static previouslyFailed(){return Hn.isInMemoryStorage||Hn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Hn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=qr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=mm(n,_R);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(vR))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}_t.responsesRequiredToBeHealthy=2;_t.healthyTimeout=3e4;/**
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
 */class Xr{static get ALL_TRANSPORTS(){return[ws,_t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=_t&&_t.isAvailable();let s=n&&!_t.previouslyFailed();if(e.webSocketOnly&&(n||at("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[_t];else{const r=this.transports_=[];for(const i of Xr.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);Xr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Xr.globalTransportInitialized_=!1;/**
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
 */const yR=6e4,bR=5e3,wR=10*1024,ER=100*1024,La="t",Uf="d",IR="s",$f="r",CR="e",Bf="o",jf="a",Hf="n",Wf="p",TR="h";class SR{constructor(e,n,s,r,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=fi("c:"+this.id+":"),this.transportManager_=new Xr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=xr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ER?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>wR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(La in e){const n=e[La];n===jf?this.upgradeIfSecondaryHealthy_():n===$f?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Bf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=gr("t",e),s=gr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Wf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:jf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Hf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=gr("t",e),s=gr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=gr(La,e);if(Uf in e){const s=e[Uf];if(n===TR){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===Hf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===IR?this.onConnectionShutdown_(s):n===$f?this.onReset_(s):n===CR?Pl("Server Error: "+s):n===Bf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Pl("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Qc!==s&&at("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),xr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(yR))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):xr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(bR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Wf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Hn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Mm{put(e,n,s,r){}merge(e,n,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Dm{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const r=this.getInitialEvent(e);r&&n.apply(s,r)}off(e,n,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===n&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class go extends Dm{static getInstance(){return new go}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Sc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Vf=32,Kf=768;class pe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ce(){return new pe("")}function te(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Tn(t){return t.pieces_.length-t.pieceNum_}function ve(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new pe(t.pieces_,e)}function Lm(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function kR(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Fm(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Um(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new pe(e,0)}function xe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof pe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&n.push(s[r])}return new pe(n,0)}function J(t){return t.pieceNum_>=t.pieces_.length}function Qe(t,e){const n=te(t),s=te(e);if(n===null)return e;if(n===s)return Qe(ve(t),ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Zc(t,e){if(Tn(t)!==Tn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function yt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Tn(t)>Tn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class RR{constructor(e,n){this.errorPrefix_=n,this.parts_=Fm(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Yo(this.parts_[s]);$m(this)}}function AR(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Yo(e),$m(t)}function PR(t){const e=t.parts_.pop();t.byteLength_-=Yo(e),t.parts_.length>0&&(t.byteLength_-=1)}function $m(t){if(t.byteLength_>Kf)throw new Error(t.errorPrefix_+"has a key path longer than "+Kf+" bytes ("+t.byteLength_+").");if(t.parts_.length>Vf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Vf+") or object contains a cycle "+Fn(t))}function Fn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class eu extends Dm{static getInstance(){return new eu}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const mr=1e3,xR=60*5*1e3,qf=30*1e3,NR=1.3,OR=3e4,MR="server_kill",zf=3;class Kt extends Mm{constructor(e,n,s,r,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Kt.nextPersistentConnectionId_++,this.log_=fi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=mr,this.maxReconnectDelay_=xR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Zp())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");eu.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&go.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const r=++this.requestNumber_,i={r,a:e,b:n};this.log_(Fe(i)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const n=new Tc,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;Kt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Lt(e,"w")){const s=Ws(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();at(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||RI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=qf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=kI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,n)}sendUnlisten_(e,n,s,r){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,r){const i={p:n,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,s,r){this.putInternal("p",e,n,s,r)}merge(e,n,s,r){this.putInternal("m",e,n,s,r)}putInternal(e,n,s,r,i){this.initConnection_();const o={p:n,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Fe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Pl("Unrecognized action received from server: "+Fe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=mr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=mr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>OR&&(this.reconnectDelay_=mr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*NR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Kt.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?je("getToken() completed but was canceled"):(je("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new SR(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{at(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(MR)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&at(d),l())}}}interrupt(e){je("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){je("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gl(this.interruptReasons_)&&(this.reconnectDelay_=mr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(i=>Yc(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const s=new pe(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(n),i.delete(n),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,n){je("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=zf&&(this.reconnectDelay_=qf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){je("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=zf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+hm.replace(/\./g,"-")]=1,Sc()?e["framework.cordova"]=1:Xp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=go.getInstance().currentlyOnline();return gl(this.interruptReasons_)&&e}}Kt.nextPersistentConnectionId_=0;Kt.nextConnectionId_=0;/**
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
 */class Z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Z(e,n)}}/**
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
 */class sa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Z(es,e),r=new Z(es,n);return this.compare(s,r)!==0}minPost(){return Z.MIN}}/**
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
 */let Ai;class Bm extends sa{static get __EMPTY_NODE(){return Ai}static set __EMPTY_NODE(e){Ai=e}compare(e,n){return or(e.name,n.name)}isDefinedOn(e){throw er("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Z.MIN}maxPost(){return new Z(Cn,Ai)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new Z(e,Ai)}toString(){return".key"}}const qn=new Bm;/**
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
 */class Pi{constructor(e,n,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Me{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Me.RED,this.left=r??Je.EMPTY_NODE,this.right=i??Je.EMPTY_NODE}copy(e,n,s,r,i){return new Me(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Je.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,r;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Je.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Me.RED=!0;Me.BLACK=!1;class DR{copy(e,n,s,r,i){return this}insert(e,n,s){return new Me(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Je{constructor(e,n=Je.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Je(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Me.BLACK,null,null))}remove(e){return new Je(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Me.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,r=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Pi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Pi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Pi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Pi(this.root_,null,this.comparator_,!0,e)}}Je.EMPTY_NODE=new DR;/**
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
 */function LR(t,e){return or(t.name,e.name)}function tu(t,e){return or(t,e)}/**
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
 */let Nl;function FR(t){Nl=t}const jm=function(t){return typeof t=="number"?"number:"+_m(t):"string:"+t},Hm=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Lt(e,".sv"),"Priority must be a string or number.")}else T(t===Nl||t.isEmpty(),"priority of unexpected type.");T(t===Nl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Gf;class Oe{static set __childrenNodeConstructor(e){Gf=e}static get __childrenNodeConstructor(){return Gf}constructor(e,n=Oe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Hm(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Oe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Oe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return J(e)?this:te(e)===".priority"?this.priorityNode_:Oe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Oe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=te(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||Tn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Oe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+jm(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=_m(this.value_):e+=this.value_,this.lazyHash_=gm(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Oe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Oe.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,r=Oe.VALUE_TYPE_ORDER.indexOf(n),i=Oe.VALUE_TYPE_ORDER.indexOf(s);return T(r>=0,"Unknown leaf type: "+n),T(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Oe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Wm,Vm;function UR(t){Wm=t}function $R(t){Vm=t}class BR extends sa{compare(e,n){const s=e.node.getPriority(),r=n.node.getPriority(),i=s.compareTo(r);return i===0?or(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Z.MIN}maxPost(){return new Z(Cn,new Oe("[PRIORITY-POST]",Vm))}makePost(e,n){const s=Wm(e);return new Z(n,new Oe("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ce=new BR;/**
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
 */const jR=Math.log(2);class HR{constructor(e){const n=i=>parseInt(Math.log(i)/jR,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const mo=function(t,e,n,s){t.sort(e);const r=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=t[l],f=n?n(d):d,new Me(f,d.node,Me.BLACK,null,null);{const p=parseInt(u/2,10)+l,m=r(l,p),_=r(p+1,c);return d=t[p],f=n?n(d):d,new Me(f,d.node,Me.BLACK,m,_)}},i=function(l){let c=null,u=null,d=t.length;const f=function(m,_){const v=d-m,I=d;d-=m;const S=r(v+1,I),M=t[v],A=n?n(M):M;p(new Me(A,M.node,_,null,S))},p=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const _=l.nextBitIsOne(),v=Math.pow(2,l.count-(m+1));_?f(v,Me.BLACK):(f(v,Me.BLACK),f(v,Me.RED))}return u},o=new HR(t.length),a=i(o);return new Je(s||e,a)};/**
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
 */let Fa;const _s={};class Wt{static get Default(){return T(_s&&Ce,"ChildrenNode.ts has not been loaded"),Fa=Fa||new Wt({".priority":_s},{".priority":Ce}),Fa}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Ws(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Je?n:null}hasIndex(e){return Lt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==qn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=n.getIterator(Z.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=mo(s,e.getCompare()):a=_s;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Wt(u,c)}addToIndexes(e,n){const s=so(this.indexes_,(r,i)=>{const o=Ws(this.indexSet_,i);if(T(o,"Missing index implementation for "+i),r===_s)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Z.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),mo(a,o.getCompare())}else return _s;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new Z(e.name,a))),l.insert(e,e.node)}});return new Wt(s,this.indexSet_)}removeFromIndexes(e,n){const s=so(this.indexes_,r=>{if(r===_s)return r;{const i=n.get(e.name);return i?r.remove(new Z(e.name,i)):r}});return new Wt(s,this.indexSet_)}}/**
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
 */let _r;class q{static get EMPTY_NODE(){return _r||(_r=new q(new Je(tu),null,Wt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Hm(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_r}updatePriority(e){return this.children_.isEmpty()?this:new q(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?_r:n}}getChild(e){const n=te(e);return n===null?this:this.getImmediateChild(n).getChild(ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Z(e,n);let r,i;n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?_r:this.priorityNode_;return new q(r,o,i)}}updateChild(e,n){const s=te(e);if(s===null)return n;{T(te(e)!==".priority"||Tn(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(ve(e),n);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,r=0,i=!0;if(this.forEachChild(Ce,(o,a)=>{n[o]=a.val(e),s++,i&&q.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+jm(this.getPriority().val())+":"),this.forEachChild(Ce,(n,s)=>{const r=s.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":gm(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new Z(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Z(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Z.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Z.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===pi?-1:0}withIndex(e){if(e===qn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new q(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===qn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ce),r=n.getIterator(Ce);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===qn?null:this.indexMap_.get(e.toString())}}q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class WR extends q{constructor(){super(new Je(tu),q.EMPTY_NODE,Wt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return q.EMPTY_NODE}isEmpty(){return!1}}const pi=new WR;Object.defineProperties(Z,{MIN:{value:new Z(es,q.EMPTY_NODE)},MAX:{value:new Z(Cn,pi)}});Bm.__EMPTY_NODE=q.EMPTY_NODE;Oe.__childrenNodeConstructor=q;FR(pi);$R(pi);/**
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
 */const VR=!0;function He(t,e=null){if(t===null)return q.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Oe(n,He(e))}if(!(t instanceof Array)&&VR){const n=[];let s=!1;if(tt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=He(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new Z(o,l)))}}),n.length===0)return q.EMPTY_NODE;const i=mo(n,LR,o=>o.name,tu);if(s){const o=mo(n,Ce.getCompare());return new q(i,He(e),new Wt({".priority":o},{".priority":Ce}))}else return new q(i,He(e),Wt.Default)}else{let n=q.EMPTY_NODE;return tt(t,(s,r)=>{if(Lt(t,s)&&s.substring(0,1)!=="."){const i=He(r);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(s,i))}}),n.updatePriority(He(e))}}UR(He);/**
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
 */class nu extends sa{constructor(e){super(),this.indexPath_=e,T(!J(e)&&te(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),r=this.extractChild(n.node),i=s.compareTo(r);return i===0?or(e.name,n.name):i}makePost(e,n){const s=He(e),r=q.EMPTY_NODE.updateChild(this.indexPath_,s);return new Z(n,r)}maxPost(){const e=q.EMPTY_NODE.updateChild(this.indexPath_,pi);return new Z(Cn,e)}toString(){return Fm(this.indexPath_,0).join("/")}}/**
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
 */class KR extends sa{compare(e,n){const s=e.node.compareTo(n.node);return s===0?or(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Z.MIN}maxPost(){return Z.MAX}makePost(e,n){const s=He(e);return new Z(n,s)}toString(){return".value"}}const Km=new KR;/**
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
 */function qm(t){return{type:"value",snapshotNode:t}}function qs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Zr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ei(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function qR(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class su{constructor(e){this.index_=e}updateChild(e,n,s,r,i,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(s.getChild(r))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Zr(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(qs(n,s)):o.trackChildChange(ei(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ce,(r,i)=>{n.hasChild(r)||s.trackChildChange(Zr(r,i))}),n.isLeafNode()||n.forEachChild(Ce,(r,i)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(i)||s.trackChildChange(ei(r,i,o))}else s.trackChildChange(qs(r,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?q.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ti{constructor(e){this.indexedFilter_=new su(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ti.getStartPost_(e),this.endPost_=ti.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,r,i,o){return this.matches(new Z(n,s))||(s=q.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,r,i,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=q.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(q.EMPTY_NODE);const i=this;return n.forEachChild(Ce,(o,a)=>{i.matches(new Z(o,a))||(r=r.updateImmediateChild(o,q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class zR{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ti(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,r,i,o){return this.rangedFilter_.matches(new Z(n,s))||(s=q.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,r,i,o):this.fullLimitUpdateChild_(e,n,s,i,o)}updateFullNode(e,n,s){let r;if(n.isLeafNode()||n.isEmpty())r=q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=q.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=n.withIndex(this.index_),r=r.updatePriority(q.EMPTY_NODE);let i;this.reverse_?i=r.getReverseIterator(this.index_):i=r.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,r,i){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,p)=>d(p,f)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new Z(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=r.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=r.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(u&&!s.isEmpty()&&p>=0)return i!=null&&i.trackChildChange(ei(n,s,d)),a.updateImmediateChild(n,s);{i!=null&&i.trackChildChange(Zr(n,d));const _=a.updateImmediateChild(n,q.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(i!=null&&i.trackChildChange(qs(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return s.isEmpty()?e:u&&o(c,l)>=0?(i!=null&&(i.trackChildChange(Zr(c.name,c.node)),i.trackChildChange(qs(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,q.EMPTY_NODE)):e}}/**
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
 */class ru{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ce}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:es}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Cn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ce}copy(){const e=new ru;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function GR(t){return t.loadsAllData()?new su(t.getIndex()):t.hasLimit()?new zR(t):new ti(t)}function YR(t,e,n){const s=t.copy();return s.startSet_=!0,e===void 0&&(e=null),s.indexStartValue_=e,n!=null?(s.startNameSet_=!0,s.indexStartName_=n):(s.startNameSet_=!1,s.indexStartName_=""),s}function QR(t,e,n){const s=t.copy();return s.endSet_=!0,e===void 0&&(e=null),s.indexEndValue_=e,n!==void 0?(s.endNameSet_=!0,s.indexEndName_=n):(s.endNameSet_=!1,s.indexEndName_=""),s}function JR(t,e){const n=t.copy();return n.index_=e,n}function Yf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ce?n="$priority":t.index_===Km?n="$value":t.index_===qn?n="$key":(T(t.index_ instanceof nu,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Fe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Fe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Fe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Fe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Fe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Qf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ce&&(e.i=t.index_.toString()),e}/**
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
 */class _o extends Mm{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=fi("p:rest:"),this.listens_={}}listen(e,n,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=_o.getListenId_(e,s),a={};this.listens_[o]=a;const l=Yf(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(i,d,!1,s),Ws(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",r(f,null)}})}unlisten(e,n){const s=_o.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Yf(e._queryParams),s=e._path.toString(),r=new Tc;return this.restRequest_(s+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(n.auth=r.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+tr(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=qr(a.responseText)}catch{at("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&at("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class XR{constructor(){this.rootNode_=q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function vo(){return{value:null,children:new Map}}function zm(t,e,n){if(J(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=te(e);t.children.has(s)||t.children.set(s,vo());const r=t.children.get(s);e=ve(e),zm(r,e,n)}}function Ol(t,e,n){t.value!==null?n(e,t.value):ZR(t,(s,r)=>{const i=new pe(e.toString()+"/"+s);Ol(r,i,n)})}function ZR(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class eA{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&tt(this.last_,(s,r)=>{n[s]=n[s]-r}),this.last_=e,n}}/**
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
 */const Jf=10*1e3,tA=30*1e3,nA=5*60*1e3;class sA{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new eA(e);const s=Jf+(tA-Jf)*Math.random();xr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;tt(e,(r,i)=>{i>0&&Lt(this.statsToReport_,r)&&(n[r]=i,s=!0)}),s&&this.server_.reportStats(n),xr(this.reportStats_.bind(this),Math.floor(Math.random()*2*nA))}}/**
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
 */var bt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(bt||(bt={}));function Gm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function iu(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ou(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class yo{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=bt.ACK_USER_WRITE,this.source=Gm()}operationForChild(e){if(J(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new pe(e));return new yo(ce(),n,this.revert)}}else return T(te(this.path)===e,"operationForChild called for unrelated child."),new yo(ve(this.path),this.affectedTree,this.revert)}}/**
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
 */class ni{constructor(e,n){this.source=e,this.path=n,this.type=bt.LISTEN_COMPLETE}operationForChild(e){return J(this.path)?new ni(this.source,ce()):new ni(this.source,ve(this.path))}}/**
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
 */class ts{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=bt.OVERWRITE}operationForChild(e){return J(this.path)?new ts(this.source,ce(),this.snap.getImmediateChild(e)):new ts(this.source,ve(this.path),this.snap)}}/**
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
 */class si{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=bt.MERGE}operationForChild(e){if(J(this.path)){const n=this.children.subtree(new pe(e));return n.isEmpty()?null:n.value?new ts(this.source,ce(),n.value):new si(this.source,ce(),n)}else return T(te(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new si(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ns{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(J(e))return this.isFullyInitialized()&&!this.filtered_;const n=te(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class rA{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function iA(t,e,n,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(qR(o.childName,o.snapshotNode))}),vr(t,r,"child_removed",e,s,n),vr(t,r,"child_added",e,s,n),vr(t,r,"child_moved",i,s,n),vr(t,r,"child_changed",e,s,n),vr(t,r,"value",e,s,n),r}function vr(t,e,n,s,r,i){const o=s.filter(a=>a.type===n);o.sort((a,l)=>aA(t,a,l)),o.forEach(a=>{const l=oA(t,a,i);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function oA(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function aA(t,e,n){if(e.childName==null||n.childName==null)throw er("Should only compare child_ events.");const s=new Z(e.childName,e.snapshotNode),r=new Z(n.childName,n.snapshotNode);return t.index_.compare(s,r)}/**
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
 */function ra(t,e){return{eventCache:t,serverCache:e}}function Nr(t,e,n,s){return ra(new ns(e,n,s),t.serverCache)}function Ym(t,e,n,s){return ra(t.eventCache,new ns(e,n,s))}function Ml(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ss(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ua;const lA=()=>(Ua||(Ua=new Je(qk)),Ua);class be{static fromObject(e){let n=new be(null);return tt(e,(s,r)=>{n=n.set(new pe(s),r)}),n}constructor(e,n=lA()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ce(),value:this.value};if(J(e))return null;{const s=te(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(ve(e),n);return i!=null?{path:xe(new pe(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(J(e))return this;{const n=te(e),s=this.children.get(n);return s!==null?s.subtree(ve(e)):new be(null)}}set(e,n){if(J(e))return new be(n,this.children);{const s=te(e),i=(this.children.get(s)||new be(null)).set(ve(e),n),o=this.children.insert(s,i);return new be(this.value,o)}}remove(e){if(J(e))return this.children.isEmpty()?new be(null):new be(null,this.children);{const n=te(e),s=this.children.get(n);if(s){const r=s.remove(ve(e));let i;return r.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,r),this.value===null&&i.isEmpty()?new be(null):new be(this.value,i)}else return this}}get(e){if(J(e))return this.value;{const n=te(e),s=this.children.get(n);return s?s.get(ve(e)):null}}setTree(e,n){if(J(e))return n;{const s=te(e),i=(this.children.get(s)||new be(null)).setTree(ve(e),n);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new be(this.value,o)}}fold(e){return this.fold_(ce(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(xe(e,r),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ce(),n)}findOnPath_(e,n,s){const r=this.value?s(n,this.value):!1;if(r)return r;if(J(e))return null;{const i=te(e),o=this.children.get(i);return o?o.findOnPath_(ve(e),xe(n,i),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ce(),n)}foreachOnPath_(e,n,s){if(J(e))return this;{this.value&&s(n,this.value);const r=te(e),i=this.children.get(r);return i?i.foreachOnPath_(ve(e),xe(n,r),s):new be(null)}}foreach(e){this.foreach_(ce(),e)}foreach_(e,n){this.children.inorderTraversal((s,r)=>{r.foreach_(xe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class It{constructor(e){this.writeTree_=e}static empty(){return new It(new be(null))}}function Or(t,e,n){if(J(e))return new It(new be(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=Qe(r,e);return i=i.updateChild(o,n),new It(t.writeTree_.set(r,i))}else{const r=new be(n),i=t.writeTree_.setTree(e,r);return new It(i)}}}function Xf(t,e,n){let s=t;return tt(n,(r,i)=>{s=Or(s,xe(e,r),i)}),s}function Zf(t,e){if(J(e))return It.empty();{const n=t.writeTree_.setTree(e,new be(null));return new It(n)}}function Dl(t,e){return cs(t,e)!=null}function cs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Qe(n.path,e)):null}function eh(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ce,(s,r)=>{e.push(new Z(s,r))}):t.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new Z(s,r.value))}),e}function bn(t,e){if(J(e))return t;{const n=cs(t,e);return n!=null?new It(new be(n)):new It(t.writeTree_.subtree(e))}}function Ll(t){return t.writeTree_.isEmpty()}function zs(t,e){return Qm(ce(),t.writeTree_,e)}function Qm(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(T(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):n=Qm(xe(t,r),i,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(xe(t,".priority"),s)),n}}/**
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
 */function au(t,e){return e_(e,t)}function cA(t,e,n,s,r){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:r}),r&&(t.visibleWrites=Or(t.visibleWrites,e,n)),t.lastWriteId=s}function uA(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function dA(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let r=s.visible,i=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&fA(a,s.path)?r=!1:yt(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return hA(t),!0;if(s.snap)t.visibleWrites=Zf(t.visibleWrites,s.path);else{const a=s.children;tt(a,l=>{t.visibleWrites=Zf(t.visibleWrites,xe(s.path,l))})}return!0}else return!1}function fA(t,e){if(t.snap)return yt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&yt(xe(t.path,n),e))return!0;return!1}function hA(t){t.visibleWrites=Jm(t.allWrites,pA,ce()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function pA(t){return t.visible}function Jm(t,e,n){let s=It.empty();for(let r=0;r<t.length;++r){const i=t[r];if(e(i)){const o=i.path;let a;if(i.snap)yt(n,o)?(a=Qe(n,o),s=Or(s,a,i.snap)):yt(o,n)&&(a=Qe(o,n),s=Or(s,ce(),i.snap.getChild(a)));else if(i.children){if(yt(n,o))a=Qe(n,o),s=Xf(s,a,i.children);else if(yt(o,n))if(a=Qe(o,n),J(a))s=Xf(s,ce(),i.children);else{const l=Ws(i.children,te(a));if(l){const c=l.getChild(ve(a));s=Or(s,ce(),c)}}}else throw er("WriteRecord should have .snap or .children")}}return s}function Xm(t,e,n,s,r){if(!s&&!r){const i=cs(t.visibleWrites,e);if(i!=null)return i;{const o=bn(t.visibleWrites,e);if(Ll(o))return n;if(n==null&&!Dl(o,ce()))return null;{const a=n||q.EMPTY_NODE;return zs(o,a)}}}else{const i=bn(t.visibleWrites,e);if(!r&&Ll(i))return n;if(!r&&n==null&&!Dl(i,ce()))return null;{const o=function(c){return(c.visible||r)&&(!s||!~s.indexOf(c.writeId))&&(yt(c.path,e)||yt(e,c.path))},a=Jm(t.allWrites,o,e),l=n||q.EMPTY_NODE;return zs(a,l)}}}function gA(t,e,n){let s=q.EMPTY_NODE;const r=cs(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Ce,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(n){const i=bn(t.visibleWrites,e);return n.forEachChild(Ce,(o,a)=>{const l=zs(bn(i,new pe(o)),a);s=s.updateImmediateChild(o,l)}),eh(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=bn(t.visibleWrites,e);return eh(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function mA(t,e,n,s,r){T(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=xe(e,n);if(Dl(t.visibleWrites,i))return null;{const o=bn(t.visibleWrites,i);return Ll(o)?r.getChild(n):zs(o,r.getChild(n))}}function _A(t,e,n,s){const r=xe(e,n),i=cs(t.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(n)){const o=bn(t.visibleWrites,r);return zs(o,s.getNode().getImmediateChild(n))}else return null}function vA(t,e){return cs(t.visibleWrites,e)}function yA(t,e,n,s,r,i,o){let a;const l=bn(t.visibleWrites,e),c=cs(l,ce());if(c!=null)a=c;else if(n!=null)a=zs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=f.getNext();for(;p&&u.length<r;)d(p,s)!==0&&u.push(p),p=f.getNext();return u}else return[]}function bA(){return{visibleWrites:It.empty(),allWrites:[],lastWriteId:-1}}function bo(t,e,n,s){return Xm(t.writeTree,t.treePath,e,n,s)}function lu(t,e){return gA(t.writeTree,t.treePath,e)}function th(t,e,n,s){return mA(t.writeTree,t.treePath,e,n,s)}function wo(t,e){return vA(t.writeTree,xe(t.treePath,e))}function wA(t,e,n,s,r,i){return yA(t.writeTree,t.treePath,e,n,s,r,i)}function cu(t,e,n){return _A(t.writeTree,t.treePath,e,n)}function Zm(t,e){return e_(xe(t.treePath,e),t.writeTree)}function e_(t,e){return{treePath:t,writeTree:e}}/**
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
 */class EA{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(s,ei(s,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(s,Zr(s,r.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(s,qs(s,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(s,ei(s,e.snapshotNode,r.oldSnap));else throw er("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class IA{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const t_=new IA;class uu{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ns(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return cu(this.writes_,e,s)}}getChildAfterChild(e,n,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ss(this.viewCache_),i=wA(this.writes_,r,n,1,s,e);return i.length===0?null:i[0]}}/**
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
 */function CA(t){return{filter:t}}function TA(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function SA(t,e,n,s,r){const i=new EA;let o,a;if(n.type===bt.OVERWRITE){const c=n;c.source.fromUser?o=Fl(t,e,c.path,c.snap,s,r,i):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!J(c.path),o=Eo(t,e,c.path,c.snap,s,r,a,i))}else if(n.type===bt.MERGE){const c=n;c.source.fromUser?o=RA(t,e,c.path,c.children,s,r,i):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ul(t,e,c.path,c.children,s,r,a,i))}else if(n.type===bt.ACK_USER_WRITE){const c=n;c.revert?o=xA(t,e,c.path,s,r,i):o=AA(t,e,c.path,c.affectedTree,s,r,i)}else if(n.type===bt.LISTEN_COMPLETE)o=PA(t,e,n.path,s,i);else throw er("Unknown operation type: "+n.type);const l=i.getChanges();return kA(e,o,l),{viewCache:o,changes:l}}function kA(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=Ml(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push(qm(Ml(e)))}}function n_(t,e,n,s,r,i){const o=e.eventCache;if(wo(s,n)!=null)return e;{let a,l;if(J(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ss(e),u=c instanceof q?c:q.EMPTY_NODE,d=lu(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const c=bo(s,ss(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=te(n);if(c===".priority"){T(Tn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=th(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=ve(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=th(s,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=cu(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,r,i):a=o.getNode()}}return Nr(e,a,o.isFullyInitialized()||J(n),t.filter.filtersNodes())}}function Eo(t,e,n,s,r,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(J(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=te(n);if(!l.isCompleteForPath(n)&&Tn(n)>1)return e;const m=ve(n),v=l.getNode().getImmediateChild(p).updateChild(m,s);p===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),p,v,m,t_,null)}const d=Ym(e,c,l.isFullyInitialized()||J(n),u.filtersNodes()),f=new uu(r,d,i);return n_(t,d,n,r,f,a)}function Fl(t,e,n,s,r,i,o){const a=e.eventCache;let l,c;const u=new uu(r,e,i);if(J(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Nr(e,c,!0,t.filter.filtersNodes());else{const d=te(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Nr(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=ve(n),p=a.getNode().getImmediateChild(d);let m;if(J(f))m=s;else{const _=u.getCompleteChild(d);_!=null?Lm(f)===".priority"&&_.getChild(Um(f)).isEmpty()?m=_:m=_.updateChild(f,s):m=q.EMPTY_NODE}if(p.equals(m))l=e;else{const _=t.filter.updateChild(a.getNode(),d,m,f,u,o);l=Nr(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function nh(t,e){return t.eventCache.isCompleteForChild(e)}function RA(t,e,n,s,r,i,o){let a=e;return s.foreach((l,c)=>{const u=xe(n,l);nh(e,te(u))&&(a=Fl(t,a,u,c,r,i,o))}),s.foreach((l,c)=>{const u=xe(n,l);nh(e,te(u))||(a=Fl(t,a,u,c,r,i,o))}),a}function sh(t,e,n){return n.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function Ul(t,e,n,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;J(n)?c=s:c=new be(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),m=sh(t,p,f);l=Eo(t,l,new pe(d),m,r,i,o,a)}}),c.children.inorderTraversal((d,f)=>{const p=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!p){const m=e.serverCache.getNode().getImmediateChild(d),_=sh(t,m,f);l=Eo(t,l,new pe(d),_,r,i,o,a)}}),l}function AA(t,e,n,s,r,i,o){if(wo(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(J(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Eo(t,e,n,l.getNode().getChild(n),r,i,a,o);if(J(n)){let c=new be(null);return l.getNode().forEachChild(qn,(u,d)=>{c=c.set(new pe(u),d)}),Ul(t,e,n,c,r,i,a,o)}else return e}else{let c=new be(null);return s.foreach((u,d)=>{const f=xe(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Ul(t,e,n,c,r,i,a,o)}}function PA(t,e,n,s,r){const i=e.serverCache,o=Ym(e,i.getNode(),i.isFullyInitialized()||J(n),i.isFiltered());return n_(t,o,n,s,t_,r)}function xA(t,e,n,s,r,i){let o;if(wo(s,n)!=null)return e;{const a=new uu(s,e,r),l=e.eventCache.getNode();let c;if(J(n)||te(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=bo(s,ss(e));else{const d=e.serverCache.getNode();T(d instanceof q,"serverChildren would be complete if leaf node"),u=lu(s,d)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=te(n);let d=cu(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,ve(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,q.EMPTY_NODE,ve(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=bo(s,ss(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||wo(s,ce())!=null,Nr(e,c,o,t.filter.filtersNodes())}}/**
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
 */class NA{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,r=new su(s.getIndex()),i=GR(s);this.processor_=CA(i);const o=n.serverCache,a=n.eventCache,l=r.updateFullNode(q.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(q.EMPTY_NODE,a.getNode(),null),u=new ns(l,o.isFullyInitialized(),r.filtersNodes()),d=new ns(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=ra(d,u),this.eventGenerator_=new rA(this.query_)}get query(){return this.query_}}function OA(t){return t.viewCache_.serverCache.getNode()}function MA(t,e){const n=ss(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!J(e)&&!n.getImmediateChild(te(e)).isEmpty())?n.getChild(e):null}function rh(t){return t.eventRegistrations_.length===0}function DA(t,e){t.eventRegistrations_.push(e)}function ih(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,r);o&&s.push(o)})}if(e){let r=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return s}function oh(t,e,n,s){e.type===bt.MERGE&&e.source.queryId!==null&&(T(ss(t.viewCache_),"We should always have a full cache before handling merges"),T(Ml(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,i=SA(t.processor_,r,e,n,s);return TA(t.processor_,i.viewCache),T(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,s_(t,i.changes,i.viewCache.eventCache.getNode(),null)}function LA(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ce,(i,o)=>{s.push(qs(i,o))}),n.isFullyInitialized()&&s.push(qm(n.getNode())),s_(t,s,n.getNode(),e)}function s_(t,e,n,s){const r=s?[s]:t.eventRegistrations_;return iA(t.eventGenerator_,e,n,r)}/**
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
 */let Io;class FA{constructor(){this.views=new Map}}function UA(t){T(!Io,"__referenceConstructor has already been defined"),Io=t}function $A(){return T(Io,"Reference.ts has not been loaded"),Io}function BA(t){return t.views.size===0}function du(t,e,n,s){const r=e.source.queryId;if(r!==null){const i=t.views.get(r);return T(i!=null,"SyncTree gave us an op for an invalid query."),oh(i,e,n,s)}else{let i=[];for(const o of t.views.values())i=i.concat(oh(o,e,n,s));return i}}function jA(t,e,n,s,r){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=bo(n,r?s:null),l=!1;a?l=!0:s instanceof q?(a=lu(n,s),l=!1):(a=q.EMPTY_NODE,l=!1);const c=ra(new ns(a,l,!1),new ns(s,r,!1));return new NA(e,c)}return o}function HA(t,e,n,s,r,i){const o=jA(t,e,s,r,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),DA(o,n),LA(o,n)}function WA(t,e,n,s){const r=e._queryIdentifier,i=[];let o=[];const a=Sn(t);if(r==="default")for(const[l,c]of t.views.entries())o=o.concat(ih(c,n,s)),rh(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||i.push(c.query));else{const l=t.views.get(r);l&&(o=o.concat(ih(l,n,s)),rh(l)&&(t.views.delete(r),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!Sn(t)&&i.push(new($A())(e._repo,e._path)),{removed:i,events:o}}function r_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ds(t,e){let n=null;for(const s of t.views.values())n=n||MA(s,e);return n}function i_(t,e){if(e._queryParams.loadsAllData())return ia(t);{const s=e._queryIdentifier;return t.views.get(s)}}function o_(t,e){return i_(t,e)!=null}function Sn(t){return ia(t)!=null}function ia(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Co;function VA(t){T(!Co,"__referenceConstructor has already been defined"),Co=t}function KA(){return T(Co,"Reference.ts has not been loaded"),Co}let qA=1;class ah{constructor(e){this.listenProvider_=e,this.syncPointTree_=new be(null),this.pendingWriteTree_=bA(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function zA(t,e,n,s,r){return cA(t.pendingWriteTree_,e,n,s,r),r?gi(t,new ts(Gm(),e,n)):[]}function Es(t,e,n=!1){const s=uA(t.pendingWriteTree_,e);if(dA(t.pendingWriteTree_,e)){let i=new be(null);return s.snap!=null?i=i.set(ce(),!0):tt(s.children,o=>{i=i.set(new pe(o),!0)}),gi(t,new yo(s.path,i,n))}else return[]}function oa(t,e,n){return gi(t,new ts(iu(),e,n))}function GA(t,e,n){const s=be.fromObject(n);return gi(t,new si(iu(),e,s))}function YA(t,e){return gi(t,new ni(iu(),e))}function QA(t,e,n){const s=fu(t,n);if(s){const r=hu(s),i=r.path,o=r.queryId,a=Qe(i,e),l=new ni(ou(o),a);return pu(t,i,l)}else return[]}function $l(t,e,n,s,r=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||o_(o,e))){const l=WA(o,e,n,s);BA(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=l.removed;if(a=l.events,!r){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(i,(f,p)=>Sn(p));if(u&&!d){const f=t.syncPointTree_.subtree(i);if(!f.isEmpty()){const p=ZA(f);for(let m=0;m<p.length;++m){const _=p[m],v=_.query,I=u_(t,_);t.listenProvider_.startListening(Mr(v),To(t,v),I.hashFn,I.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Mr(e),null):c.forEach(f=>{const p=t.queryToTagMap.get(aa(f));t.listenProvider_.stopListening(Mr(f),p)}))}eP(t,c)}return a}function JA(t,e,n,s){const r=fu(t,s);if(r!=null){const i=hu(r),o=i.path,a=i.queryId,l=Qe(o,e),c=new ts(ou(a),l,n);return pu(t,o,c)}else return[]}function XA(t,e,n,s){const r=fu(t,s);if(r){const i=hu(r),o=i.path,a=i.queryId,l=Qe(o,e),c=be.fromObject(n),u=new si(ou(a),l,c);return pu(t,o,u)}else return[]}function lh(t,e,n,s=!1){const r=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(r,(f,p)=>{const m=Qe(f,r);i=i||Ds(p,m),o=o||Sn(p)});let a=t.syncPointTree_.get(r);a?(o=o||Sn(a),i=i||Ds(a,ce())):(a=new FA,t.syncPointTree_=t.syncPointTree_.set(r,a));let l;i!=null?l=!0:(l=!1,i=q.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((p,m)=>{const _=Ds(m,ce());_&&(i=i.updateImmediateChild(p,_))}));const c=o_(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=aa(e);T(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=tP();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const u=au(t.pendingWriteTree_,r);let d=HA(a,e,n,u,i,l);if(!c&&!o&&!s){const f=i_(a,e);d=d.concat(nP(t,e,f))}return d}function a_(t,e,n){const r=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Qe(o,e),c=Ds(a,l);if(c)return c});return Xm(r,e,i,n,!0)}function gi(t,e){return l_(e,t.syncPointTree_,null,au(t.pendingWriteTree_,ce()))}function l_(t,e,n,s){if(J(t.path))return c_(t,e,n,s);{const r=e.get(ce());n==null&&r!=null&&(n=Ds(r,ce()));let i=[];const o=te(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Zm(s,o);i=i.concat(l_(a,l,c,u))}return r&&(i=i.concat(du(r,t,s,n))),i}}function c_(t,e,n,s){const r=e.get(ce());n==null&&r!=null&&(n=Ds(r,ce()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Zm(s,o),u=t.operationForChild(o);u&&(i=i.concat(c_(u,a,l,c)))}),r&&(i=i.concat(du(r,t,s,n))),i}function u_(t,e){const n=e.query,s=To(t,n);return{hashFn:()=>(OA(e)||q.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return s?QA(t,n._path,s):YA(t,n._path);{const i=Yk(r,n);return $l(t,n,null,i)}}}}function To(t,e){const n=aa(e);return t.queryToTagMap.get(n)}function aa(t){return t._path.toString()+"$"+t._queryIdentifier}function fu(t,e){return t.tagToQueryMap.get(e)}function hu(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new pe(t.substr(0,e))}}function pu(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const r=au(t.pendingWriteTree_,e);return du(s,n,r,null)}function ZA(t){return t.fold((e,n,s)=>{if(n&&Sn(n))return[ia(n)];{let r=[];return n&&(r=r_(n)),tt(s,(i,o)=>{r=r.concat(o)}),r}})}function Mr(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(KA())(t._repo,t._path):t}function eP(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const r=aa(s),i=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(i)}}}function tP(){return qA++}function nP(t,e,n){const s=e._path,r=To(t,e),i=u_(t,n),o=t.listenProvider_.startListening(Mr(e),r,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(s);if(r)T(!Sn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!J(c)&&u&&Sn(u))return[ia(u).query];{let f=[];return u&&(f=f.concat(r_(u).map(p=>p.query))),tt(d,(p,m)=>{f=f.concat(m)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Mr(u),To(t,u))}}return o}/**
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
 */class gu{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new gu(n)}node(){return this.node_}}class mu{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=xe(this.path_,e);return new mu(this.syncTree_,n)}node(){return a_(this.syncTree_,this.path_)}}const sP=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ch=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return rP(t[".sv"],e,n);if(typeof t[".sv"]=="object")return iP(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},rP=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},iP=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const r=e.node();if(T(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},oP=function(t,e,n,s){return _u(e,new mu(n,t),s)},aP=function(t,e,n){return _u(t,new gu(e),n)};function _u(t,e,n){const s=t.getPriority().val(),r=ch(s,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=ch(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new Oe(a,He(r)):t}else{const o=t;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new Oe(r))),o.forEachChild(Ce,(a,l)=>{const c=_u(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
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
 */class vu{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function yu(t,e){let n=e instanceof pe?e:new pe(e),s=t,r=te(n);for(;r!==null;){const i=Ws(s.node.children,r)||{children:{},childCount:0};s=new vu(r,s,i),n=ve(n),r=te(n)}return s}function ar(t){return t.node.value}function d_(t,e){t.node.value=e,Bl(t)}function f_(t){return t.node.childCount>0}function lP(t){return ar(t)===void 0&&!f_(t)}function la(t,e){tt(t.node.children,(n,s)=>{e(new vu(n,t,s))})}function h_(t,e,n,s){n&&!s&&e(t),la(t,r=>{h_(r,e,!0,s)}),n&&s&&e(t)}function cP(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function mi(t){return new pe(t.parent===null?t.name:mi(t.parent)+"/"+t.name)}function Bl(t){t.parent!==null&&uP(t.parent,t.name,t)}function uP(t,e,n){const s=lP(n),r=Lt(t.node.children,e);s&&r?(delete t.node.children[e],t.node.childCount--,Bl(t)):!s&&!r&&(t.node.children[e]=n.node,t.node.childCount++,Bl(t))}/**
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
 */const dP=/[\[\].#$\/\u0000-\u001F\u007F]/,fP=/[\[\].#$\u0000-\u001F\u007F]/,$a=10*1024*1024,bu=function(t){return typeof t=="string"&&t.length!==0&&!dP.test(t)},p_=function(t){return typeof t=="string"&&t.length!==0&&!fP.test(t)},hP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),p_(t)},uh=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Gc(t)||t&&typeof t=="object"&&Lt(t,".sv")},wu=function(t,e,n,s){s&&e===void 0||Eu(Go(t,"value"),e,n)},Eu=function(t,e,n){const s=n instanceof pe?new RR(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Fn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Fn(s)+" with contents = "+e.toString());if(Gc(e))throw new Error(t+"contains "+e.toString()+" "+Fn(s));if(typeof e=="string"&&e.length>$a/3&&Yo(e)>$a)throw new Error(t+"contains a string greater than "+$a+" utf8 bytes "+Fn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(tt(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!bu(o)))throw new Error(t+" contains an invalid key ("+o+") "+Fn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);AR(s,o),Eu(t,a,s),PR(s)}),r&&i)throw new Error(t+' contains ".value" child '+Fn(s)+" in addition to actual children.")}},pP=function(t,e,n,s){if(!(s&&n===void 0)&&!bu(n))throw new Error(Go(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Iu=function(t,e,n,s){if(!(s&&n===void 0)&&!p_(n))throw new Error(Go(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},gP=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Iu(t,e,n,s)},mP=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!bu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!hP(n))throw new Error(Go(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class _P{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function g_(t,e){let n=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();n!==null&&!Zc(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(r)}n&&t.eventLists_.push(n)}function m_(t,e,n){g_(t,n),__(t,s=>Zc(s,e))}function us(t,e,n){g_(t,n),__(t,s=>yt(s,e)||yt(e,s))}function __(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const r=t.eventLists_[s];if(r){const i=r.path;e(i)?(vP(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function vP(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Kn&&je("event: "+n.toString()),hi(s)}}}/**
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
 */const yP="repo_interrupt",bP=25;class wP{constructor(e,n,s,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new _P,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=vo(),this.transactionQueueTree_=new vu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function EP(t,e,n){if(t.stats_=Jc(t.repoInfo_),t.forceRestClient_||Zk())t.server_=new _o(t.repoInfo_,(s,r,i,o)=>{dh(t,s,r,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>fh(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Fe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Kt(t.repoInfo_,e,(s,r,i,o)=>{dh(t,s,r,i,o)},s=>{fh(t,s)},s=>{CP(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=rR(t.repoInfo_,()=>new sA(t.stats_,t.server_)),t.infoData_=new XR,t.infoSyncTree_=new ah({startListening:(s,r,i,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=oa(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Cu(t,"connected",!1),t.serverSyncTree_=new ah({startListening:(s,r,i,o)=>(t.server_.listen(s,i,r,(a,l)=>{const c=o(a,l);us(t.eventQueue_,s._path,c)}),[]),stopListening:(s,r)=>{t.server_.unlisten(s,r)}})}function IP(t){const n=t.infoData_.getNode(new pe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function v_(t){return sP({timestamp:IP(t)})}function dh(t,e,n,s,r){t.dataUpdateCount++;const i=new pe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(s){const l=so(n,c=>He(c));o=XA(t.serverSyncTree_,i,l,r)}else{const l=He(n);o=JA(t.serverSyncTree_,i,l,r)}else if(s){const l=so(n,c=>He(c));o=GA(t.serverSyncTree_,i,l)}else{const l=He(n);o=oa(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Su(t,i)),us(t.eventQueue_,a,o)}function fh(t,e){Cu(t,"connected",e),e===!1&&SP(t)}function CP(t,e){tt(e,(n,s)=>{Cu(t,n,s)})}function Cu(t,e,n){const s=new pe("/.info/"+e),r=He(n);t.infoData_.updateSnapshot(s,r);const i=oa(t.infoSyncTree_,s,r);us(t.eventQueue_,s,i)}function TP(t){return t.nextWriteId_++}function SP(t){y_(t,"onDisconnectEvents");const e=v_(t),n=vo();Ol(t.onDisconnect_,ce(),(r,i)=>{const o=oP(r,i,t.serverSyncTree_,e);zm(n,r,o)});let s=[];Ol(n,ce(),(r,i)=>{s=s.concat(oa(t.serverSyncTree_,r,i));const o=xP(t,r);Su(t,o)}),t.onDisconnect_=vo(),us(t.eventQueue_,ce(),s)}function kP(t,e,n){let s;te(e._path)===".info"?s=lh(t.infoSyncTree_,e,n):s=lh(t.serverSyncTree_,e,n),m_(t.eventQueue_,e._path,s)}function hh(t,e,n){let s;te(e._path)===".info"?s=$l(t.infoSyncTree_,e,n):s=$l(t.serverSyncTree_,e,n),m_(t.eventQueue_,e._path,s)}function RP(t){t.persistentConnection_&&t.persistentConnection_.interrupt(yP)}function y_(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),je(n,...e)}function b_(t,e,n){return a_(t.serverSyncTree_,e,n)||q.EMPTY_NODE}function Tu(t,e=t.transactionQueueTree_){if(e||ca(t,e),ar(e)){const n=E_(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&AP(t,mi(e),n)}else f_(e)&&la(e,n=>{Tu(t,n)})}function AP(t,e,n){const s=n.map(c=>c.currentWriteId),r=b_(t,e,s);let i=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Qe(e,u.path);i=i.updateChild(d,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{y_(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Es(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();ca(t,yu(t.transactionQueueTree_,e)),Tu(t,t.transactionQueueTree_),us(t.eventQueue_,e,u);for(let f=0;f<d.length;f++)hi(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{at("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Su(t,e)}},o)}function Su(t,e){const n=w_(t,e),s=mi(n),r=E_(t,n);return PP(t,r,s),s}function PP(t,e,n){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Qe(n,l.path);let u=!1,d;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,r=r.concat(Es(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=bP)u=!0,d="maxretry",r=r.concat(Es(t.serverSyncTree_,l.currentWriteId,!0));else{const f=b_(t,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){Eu("transaction failed: Data returned ",p,l.path);let m=He(p);typeof p=="object"&&p!=null&&Lt(p,".priority")||(m=m.updatePriority(f.getPriority()));const v=l.currentWriteId,I=v_(t),S=aP(m,f,I);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=S,l.currentWriteId=TP(t),o.splice(o.indexOf(v),1),r=r.concat(zA(t.serverSyncTree_,l.path,S,l.currentWriteId,l.applyLocally)),r=r.concat(Es(t.serverSyncTree_,v,!0))}else u=!0,d="nodata",r=r.concat(Es(t.serverSyncTree_,l.currentWriteId,!0))}us(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}ca(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)hi(s[a]);Tu(t,t.transactionQueueTree_)}function w_(t,e){let n,s=t.transactionQueueTree_;for(n=te(e);n!==null&&ar(s)===void 0;)s=yu(s,n),e=ve(e),n=te(e);return s}function E_(t,e){const n=[];return I_(t,e,n),n.sort((s,r)=>s.order-r.order),n}function I_(t,e,n){const s=ar(e);if(s)for(let r=0;r<s.length;r++)n.push(s[r]);la(e,r=>{I_(t,r,n)})}function ca(t,e){const n=ar(e);if(n){let s=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[s]=n[r],s++);n.length=s,d_(e,n.length>0?n:void 0)}la(e,s=>{ca(t,s)})}function xP(t,e){const n=mi(w_(t,e)),s=yu(t.transactionQueueTree_,e);return cP(s,r=>{Ba(t,r)}),Ba(t,s),h_(s,r=>{Ba(t,r)}),n}function Ba(t,e){const n=ar(e);if(n){const s=[];let r=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Es(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?d_(e,void 0):n.length=i+1,us(t.eventQueue_,mi(e),r);for(let o=0;o<s.length;o++)hi(s[o])}}/**
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
 */function NP(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let r=n[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function OP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):at(`Invalid query segment '${n}' in query '${t}'`)}return e}const ph=function(t,e){const n=MP(t),s=n.namespace;n.domain==="firebase.com"&&Qt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Qt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Vk();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new km(n.host,n.secure,s,r,e,"",s!==n.subdomain),path:new pe(n.pathString)}},MP=function(t){let e="",n="",s="",r="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(r=NP(t.substring(u,d)));const f=OP(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),i=s}"ns"in f&&(i=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
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
 */class C_{constructor(e,n,s,r){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Fe(this.snapshot.exportVal())}}class T_{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class DP{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class lr{constructor(e,n,s,r){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=r}get key(){return J(this._path)?null:Lm(this._path)}get ref(){return new Zt(this._repo,this._path)}get _queryIdentifier(){const e=Qf(this._queryParams),n=Yc(e);return n==="{}"?"default":n}get _queryObject(){return Qf(this._queryParams)}isEqual(e){if(e=ft(e),!(e instanceof lr))return!1;const n=this._repo===e._repo,s=Zc(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+kR(this._path)}}function LP(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function ku(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===qn){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",r="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==es)throw new Error(s);if(typeof e!="string")throw new Error(r)}if(t.hasEnd()){if(t.getIndexEndName()!==Cn)throw new Error(s);if(typeof n!="string")throw new Error(r)}}else if(t.getIndex()===Ce){if(e!=null&&!uh(e)||n!=null&&!uh(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(T(t.getIndex()instanceof nu||t.getIndex()===Km,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function S_(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Zt extends lr{constructor(e,n){super(e,n,new ru,!1)}get parent(){const e=Um(this._path);return e===null?null:new Zt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ri{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new pe(e),s=So(this.ref,e);return new ri(this._node.getChild(n),s,Ce)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,r)=>e(new ri(r,So(this.ref,s),Ce)))}hasChild(e){const n=new pe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Dn(t,e){return t=ft(t),t._checkNotDeleted("ref"),e!==void 0?So(t._root,e):t._root}function So(t,e){return t=ft(t),te(t._path)===null?gP("child","path",e,!1):Iu("child","path",e,!1),new Zt(t._repo,xe(t._path,e))}class Ru{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new C_("value",this,new ri(e.snapshotNode,new Zt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new T_(this,e,n):null}matches(e){return e instanceof Ru?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Au{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new T_(this,e,n):null}createEvent(e,n){T(e.childName!=null,"Child events should have a childName.");const s=So(new Zt(n._repo,n._path),e.childName),r=n._queryParams.getIndex();return new C_(e.type,this,new ri(e.snapshotNode,s,r),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Au?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function FP(t,e,n,s,r){let i;if(typeof s=="object"&&(i=void 0,r=s),typeof s=="function"&&(i=s),r&&r.onlyOnce){const l=n,c=(u,d)=>{hh(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new DP(n,i||void 0),a=e==="value"?new Ru(o):new Au(e,o);return kP(t._repo,t,a),()=>hh(t._repo,t,a)}function UP(t,e,n,s){return FP(t,"value",e,n,s)}class ua{}class $P extends ua{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){wu("endAt",this._value,e._path,!0);const n=QR(e._queryParams,this._value,this._key);if(S_(n),ku(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new lr(e._repo,e._path,n,e._orderByCalled)}}class BP extends ua{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){wu("startAt",this._value,e._path,!0);const n=YR(e._queryParams,this._value,this._key);if(S_(n),ku(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new lr(e._repo,e._path,n,e._orderByCalled)}}class jP extends ua{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){LP(e,"orderByChild");const n=new pe(this._path);if(J(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const s=new nu(n),r=JR(e._queryParams,s);return ku(r),new lr(e._repo,e._path,r,!0)}}function HP(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Iu("orderByChild","path",t,!1),new jP(t)}class WP extends ua{constructor(e,n){super(),this._value=e,this._key=n,this.type="equalTo"}_apply(e){if(wu("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new $P(this._value,this._key)._apply(new BP(this._value,this._key)._apply(e))}}function VP(t,e){return pP("equalTo","key",e,!0),new WP(t,e)}function KP(t,...e){let n=ft(t);for(const s of e)n=s._apply(n);return n}UA(Zt);VA(Zt);/**
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
 */const qP="FIREBASE_DATABASE_EMULATOR_HOST",jl={};let zP=!1;function GP(t,e,n,s){t.repoInfo_=new km(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function YP(t,e,n,s,r){let i=s||t.options.databaseURL;i===void 0&&(t.options.projectId||Qt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),je("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ph(i,r),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[qP]),c?(l=!0,i=`http://${c}?ns=${a.namespace}`,o=ph(i,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new Ms(Ms.OWNER):new tR(t.name,t.options,e);mP("Invalid Firebase Database URL",o),J(o.path)||Qt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=JP(a,t,u,new eR(t,n));return new XP(d,t)}function QP(t,e){const n=jl[e];(!n||n[t.key]!==t)&&Qt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),RP(t),delete n[t.key]}function JP(t,e,n,s){let r=jl[e.name];r||(r={},jl[e.name]=r);let i=r[t.toURLString()];return i&&Qt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new wP(t,zP,n,s),r[t.toURLString()]=i,i}class XP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(EP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Zt(this._repo,ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(QP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Qt("Cannot call "+e+" on a deleted database.")}}function Pu(t=sg(),e){const n=Ac(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=_I("database");s&&ZP(n,...s)}return n}function ZP(t,e,n,s={}){t=ft(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Qt("Cannot call useEmulator() after instance has already been initialized.");const r=t._repoInternal;let i;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&Qt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new Ms(Ms.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:vI(s.mockUserToken,t.app.options.projectId);i=new Ms(o)}GP(r,e,n,i)}/**
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
 */function ex(t){$k(nr),Vs(new Jn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return YP(s,r,i,n)},"PUBLIC").setMultipleInstances(!0)),yn(Of,Mf,t),yn(Of,Mf,"esm2017")}Kt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Kt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ex();const tx={name:"TaskList",components:{MainHeader:Uk,Icon:Ec},setup(){const t=X({}),e=X(!1),n=X(""),s=X(null),r=Pu();let i=null;const o=fo().onAuthStateChanged(u=>{u?(s.value=u.uid,a()):(s.value=null,t.value={},i&&(Dn(r,"tasks").off("value",i),i=null))});function a(){e.value=!0,i&&Dn("tasks").off("value",i),i=KP(Dn(r,"tasks"),HP("userUID"),VP(s.value)),UP("value",u=>{t.value=u.val()||{},e.value=!1})}function l(){!s.value||!n.value.trim()||Dn(r,"tasks").push({taskText:n.value,userUID:s.value}).then(()=>{n.value=""}).catch(u=>{console.error("Error adding task:",u)})}function c(u){Dn(r,"tasks").child(u).once("value",d=>{const f=d.val();f&&f.userUID===s.value?Dn(r,"tasks").child(u).remove().then(()=>console.log("Task removed!")).catch(p=>console.error("Error removing task:",p)):console.error("Access denied: task doesn't belong to user.")})}return Fo(()=>{i&&Dn("tasks").off("value",i),o()}),{taskArray:t,isLoading:e,newTaskText:n,addTask:l,deleteTask:c}}},nx=t=>(Hh("data-v-204091cc"),t=t(),Wh(),t),sx={class:"dark:bg-gray-900 min-h-screen p-4"},rx={key:0,class:"flex justify-center items-center h-32"},ix=nx(()=>se("div",{class:"spinner"},null,-1)),ox=[ix],ax={key:1,class:"flex justify-center"},lx={class:"task-list"},cx=["onClick"];function ux(t,e,n,s,r,i){const o=Ke("main-header"),a=Ke("Icon");return $e(),Ye("div",sx,[ae(o),s.isLoading?($e(),Ye("div",rx,ox)):($e(),Ye("div",ax,[se("ul",lx,[($e(!0),Ye(De,null,sy(s.taskArray,(l,c)=>($e(),Ye("li",{key:c,class:"task-item"},[se("span",null,Vi(l.taskText),1),se("button",{onClick:u=>s.deleteTask(c),class:"delete-btn"},[ae(a,{icon:"mdi-light:delete"})],8,cx)]))),128))])]))])}const dx=Dt(tx,[["render",ux],["__scopeId","data-v-204091cc"]]),fx={},hx=se("br",null,null,-1),px={class:"rounded-xl shadow-md p-10 w-fit mx-auto m-32-auto place-content-center grid place-items-center dark:bg-sky-950"};function gx(t,e){return $e(),Ye(De,null,[hx,se("div",px,[Uo(t.$slots,"default")])],64)}const k_=Dt(fx,[["render",gx]]),mx={components:{ContentBox:k_,BaseHeader:Bc}},_x=se("div",{class:"py-0 px-3 font-semibold dark:text-white"},"Task Project",-1),vx=se("h2",{class:"font-semibold p-4 dark:text-white"},"Page Not Found",-1),yx={class:"dark:text-white"};function bx(t,e,n,s,r,i){const o=Ke("base-header"),a=Ke("router-link"),l=Ke("content-box");return $e(),Ye(De,null,[ae(o,null,{default:it(()=>[_x]),_:1}),se("section",null,[ae(l,{class:"dark:bg-sky-950"},{default:it(()=>[vx,se("div",yx,[mn(" This page could not be found - do you want to return to "),ae(a,{to:"/login",class:"underline underline-offset-2"},{default:it(()=>[mn("login")]),_:1}),mn("? ")])]),_:1})])],64)}const wx=Dt(mx,[["render",bx]]),Ex=qw({history:lw(),routes:[{path:"/",redirect:"login"},{path:"/login",component:hk},{path:"/tasks",component:dx},{path:"/:notFound(.*)",component:wx}]});var Ix="firebase",Cx="11.3.1";/**
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
 */yn(Ix,Cx,"app");const Tx={apiKey:"AIzaSyD6rOiOiFAkse6Y3_hdzvP-Z1zRv20wrJg",authDomain:"taskproject-caf25.firebaseapp.com",projectId:"taskproject-caf25",storageBucket:"taskproject-caf25.firebasestorage.app",messagingSenderId:"1061401138693",appId:"1:1061401138693:web:03fc3339b03b4cb79eee6c",databaseURL:"https://taskproject-caf25-default-rtdb.firebaseio.com/"};Pc(Tx);const xi=Pu(),Sx={async refreshTasks(t){xi.ref("tasks").on("value",n=>{const s=n.val();t.commit("setTasks",s)})},async submitData(t,e){const n=e.toString();if(n!==""){const r=xi.ref("tasks").push(),i=firebase.auth().currentUser.uid;r.set({taskText:n,userUID:i})}},async deleteTask(t,e){const n=e.toString();xi.ref("/tasks/").on("value",function(s){xi.ref("/tasks/"+n).remove().then(function(){console.log("Remove succeeded.")}).catch(function(i){console.log("Remove failed: "+i.message)})})}},kx={taskArray(t){return t.taskArray},taskText(t){return t.taskText}},Rx={setTasks(t,e){t.taskArray=e,console.log(t.taskArray)},registerTasks(t,e){t.taskArray.push(e)}},Ax={namespace:!0,state(){return{taskArray:[],taskText:""}},actions:Sx,getters:kx,mutations:Rx},Px=xk({modules:{task:Ax}});const xx={},Nx={class:"min-h-screen dark:bg-gray-900"};function Ox(t,e){const n=Ke("router-view");return $e(),Ye("div",Nx,[ae(n)])}const Mx=Dt(xx,[["render",Ox]]),Dx={},Lx={class:"bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow dark:bg-sky-800 dark:text-white"};function Fx(t,e){return $e(),Ye("div",null,[se("button",Lx,[Uo(t.$slots,"default")])])}const Ux=Dt(Dx,[["render",Fx]]),$x={apiKey:"AIzaSyD6rOiOiFAkse6Y3_hdzvP-Z1zRv20wrJg",authDomain:"taskproject-caf25.firebaseapp.com",projectId:"taskproject-caf25",storageBucket:"taskproject-caf25.firebasestorage.app",messagingSenderId:"1061401138693",appId:"1:1061401138693:web:03fc3339b03b4cb79eee6c",databaseURL:"https://taskproject-caf25-default-rtdb.firebaseio.com/"},cr=_b(Mx);Pc($x);Pu();cr.component("content-box",k_);cr.component("base-button",Ux);cr.use(Mb);cr.use(Px);cr.use(Ex);cr.mount("#app");
