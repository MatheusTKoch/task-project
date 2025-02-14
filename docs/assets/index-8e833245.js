(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Yl(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const we={},Ts=[],wt=()=>{},H_=()=>!1,W_=/^on[^a-z]/,Po=t=>W_.test(t),Ql=t=>t.startsWith("onUpdate:"),ke=Object.assign,Jl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},V_=Object.prototype.hasOwnProperty,re=(t,e)=>V_.call(t,e),$=Array.isArray,Ss=t=>ci(t)==="[object Map]",Qs=t=>ci(t)==="[object Set]",Hu=t=>ci(t)==="[object Date]",Y=t=>typeof t=="function",Re=t=>typeof t=="string",Ur=t=>typeof t=="symbol",he=t=>t!==null&&typeof t=="object",Eh=t=>he(t)&&Y(t.then)&&Y(t.catch),Ih=Object.prototype.toString,ci=t=>Ih.call(t),K_=t=>ci(t).slice(8,-1),Ch=t=>ci(t)==="[object Object]",Xl=t=>Re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Li=Yl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},z_=/-(\w)/g,Mt=xo(t=>t.replace(z_,(e,n)=>n?n.toUpperCase():"")),q_=/\B([A-Z])/g,ls=xo(t=>t.replace(q_,"-$1").toLowerCase()),No=xo(t=>t.charAt(0).toUpperCase()+t.slice(1)),va=xo(t=>t?`on${No(t)}`:""),$r=(t,e)=>!Object.is(t,e),Fi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},zi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},qi=t=>{const e=parseFloat(t);return isNaN(e)?t:e},G_=t=>{const e=Re(t)?Number(t):NaN;return isNaN(e)?t:e};let Wu;const Ya=()=>Wu||(Wu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zl(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Re(s)?X_(s):Zl(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Re(t))return t;if(he(t))return t}}const Y_=/;(?![^(]*\))/g,Q_=/:([^]+)/,J_=/\/\*[^]*?\*\//g;function X_(t){const e={};return t.replace(J_,"").split(Y_).forEach(n=>{if(n){const s=n.split(Q_);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Br(t){let e="";if(Re(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const s=Br(t[n]);s&&(e+=s+" ")}else if(he(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Z_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ev=Yl(Z_);function Th(t){return!!t||t===""}function tv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Jn(t[s],e[s]);return n}function Jn(t,e){if(t===e)return!0;let n=Hu(t),s=Hu(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Ur(t),s=Ur(e),n||s)return t===e;if(n=$(t),s=$(e),n||s)return n&&s?tv(t,e):!1;if(n=he(t),s=he(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Jn(t[o],e[o]))return!1}}return String(t)===String(e)}function ec(t,e){return t.findIndex(n=>Jn(n,e))}const Gi=t=>Re(t)?t:t==null?"":$(t)||he(t)&&(t.toString===Ih||!Y(t.toString))?JSON.stringify(t,Sh,2):String(t),Sh=(t,e)=>e&&e.__v_isRef?Sh(t,e.value):Ss(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Qs(e)?{[`Set(${e.size})`]:[...e.values()]}:he(e)&&!$(e)&&!Ch(e)?String(e):e;let ot;class kh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ot,!e&&ot&&(this.index=(ot.scopes||(ot.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ot;try{return ot=this,e()}finally{ot=n}}}on(){ot=this}off(){ot=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function nv(t){return new kh(t)}function sv(t,e=ot){e&&e.active&&e.effects.push(t)}function Rh(){return ot}function rv(t){ot&&ot.cleanups.push(t)}const tc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ah=t=>(t.w&Cn)>0,Ph=t=>(t.n&Cn)>0,iv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Cn},ov=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Ah(r)&&!Ph(r)?r.delete(t):e[n++]=r,r.w&=~Cn,r.n&=~Cn}e.length=n}},Yi=new WeakMap;let Er=0,Cn=1;const Qa=30;let mt;const qn=Symbol(""),Ja=Symbol("");class nc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,sv(this,s)}run(){if(!this.active)return this.fn();let e=mt,n=mn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=mt,mt=this,mn=!0,Cn=1<<++Er,Er<=Qa?iv(this):Vu(this),this.fn()}finally{Er<=Qa&&ov(this),Cn=1<<--Er,mt=this.parent,mn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){mt===this?this.deferStop=!0:this.active&&(Vu(this),this.onStop&&this.onStop(),this.active=!1)}}function Vu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let mn=!0;const xh=[];function Js(){xh.push(mn),mn=!1}function Xs(){const t=xh.pop();mn=t===void 0?!0:t}function nt(t,e,n){if(mn&&mt){let s=Yi.get(t);s||Yi.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=tc()),Nh(r)}}function Nh(t,e){let n=!1;Er<=Qa?Ph(t)||(t.n|=Cn,n=!Ah(t)):n=!t.has(mt),n&&(t.add(mt),mt.deps.push(t))}function Gt(t,e,n,s,r,i){const o=Yi.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?Xl(n)&&a.push(o.get("length")):(a.push(o.get(qn)),Ss(t)&&a.push(o.get(Ja)));break;case"delete":$(t)||(a.push(o.get(qn)),Ss(t)&&a.push(o.get(Ja)));break;case"set":Ss(t)&&a.push(o.get(qn));break}if(a.length===1)a[0]&&Xa(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Xa(tc(l))}}function Xa(t,e){const n=$(t)?t:[...t];for(const s of n)s.computed&&Ku(s);for(const s of n)s.computed||Ku(s)}function Ku(t,e){(t!==mt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function av(t,e){var n;return(n=Yi.get(t))==null?void 0:n.get(e)}const lv=Yl("__proto__,__v_isRef,__isVue"),Oh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ur)),cv=sc(),uv=sc(!1,!0),dv=sc(!0),zu=fv();function fv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ie(this);for(let i=0,o=this.length;i<o;i++)nt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ie)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Js();const s=ie(this)[e].apply(this,n);return Xs(),s}}),t}function hv(t){const e=ie(this);return nt(e,"has",t),e.hasOwnProperty(t)}function sc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Av:Uh:e?Fh:Lh).get(s))return s;const o=$(s);if(!t){if(o&&re(zu,r))return Reflect.get(zu,r,i);if(r==="hasOwnProperty")return hv}const a=Reflect.get(s,r,i);return(Ur(r)?Oh.has(r):lv(r))||(t||nt(s,"get",r),e)?a:Oe(a)?o&&Xl(r)?a:a.value:he(a)?t?Mo(a):Zs(a):a}}const pv=Mh(),gv=Mh(!0);function Mh(t=!1){return function(n,s,r,i){let o=n[s];if(Fs(o)&&Oe(o)&&!Oe(r))return!1;if(!t&&(!Qi(r)&&!Fs(r)&&(o=ie(o),r=ie(r)),!$(n)&&Oe(o)&&!Oe(r)))return o.value=r,!0;const a=$(n)&&Xl(s)?Number(s)<n.length:re(n,s),l=Reflect.set(n,s,r,i);return n===ie(i)&&(a?$r(r,o)&&Gt(n,"set",s,r):Gt(n,"add",s,r)),l}}function mv(t,e){const n=re(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Gt(t,"delete",e,void 0),s}function _v(t,e){const n=Reflect.has(t,e);return(!Ur(e)||!Oh.has(e))&&nt(t,"has",e),n}function vv(t){return nt(t,"iterate",$(t)?"length":qn),Reflect.ownKeys(t)}const Dh={get:cv,set:pv,deleteProperty:mv,has:_v,ownKeys:vv},yv={get:dv,set(t,e){return!0},deleteProperty(t,e){return!0}},bv=ke({},Dh,{get:uv,set:gv}),rc=t=>t,Oo=t=>Reflect.getPrototypeOf(t);function Ei(t,e,n=!1,s=!1){t=t.__v_raw;const r=ie(t),i=ie(e);n||(e!==i&&nt(r,"get",e),nt(r,"get",i));const{has:o}=Oo(r),a=s?rc:n?ac:jr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Ii(t,e=!1){const n=this.__v_raw,s=ie(n),r=ie(t);return e||(t!==r&&nt(s,"has",t),nt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Ci(t,e=!1){return t=t.__v_raw,!e&&nt(ie(t),"iterate",qn),Reflect.get(t,"size",t)}function qu(t){t=ie(t);const e=ie(this);return Oo(e).has.call(e,t)||(e.add(t),Gt(e,"add",t,t)),this}function Gu(t,e){e=ie(e);const n=ie(this),{has:s,get:r}=Oo(n);let i=s.call(n,t);i||(t=ie(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?$r(e,o)&&Gt(n,"set",t,e):Gt(n,"add",t,e),this}function Yu(t){const e=ie(this),{has:n,get:s}=Oo(e);let r=n.call(e,t);r||(t=ie(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Gt(e,"delete",t,void 0),i}function Qu(){const t=ie(this),e=t.size!==0,n=t.clear();return e&&Gt(t,"clear",void 0,void 0),n}function Ti(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ie(o),l=e?rc:t?ac:jr;return!t&&nt(a,"iterate",qn),o.forEach((c,u)=>s.call(r,l(c),l(u),i))}}function Si(t,e,n){return function(...s){const r=this.__v_raw,i=ie(r),o=Ss(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...s),u=n?rc:e?ac:jr;return!e&&nt(i,"iterate",l?Ja:qn),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function nn(t){return function(...e){return t==="delete"?!1:this}}function wv(){const t={get(i){return Ei(this,i)},get size(){return Ci(this)},has:Ii,add:qu,set:Gu,delete:Yu,clear:Qu,forEach:Ti(!1,!1)},e={get(i){return Ei(this,i,!1,!0)},get size(){return Ci(this)},has:Ii,add:qu,set:Gu,delete:Yu,clear:Qu,forEach:Ti(!1,!0)},n={get(i){return Ei(this,i,!0)},get size(){return Ci(this,!0)},has(i){return Ii.call(this,i,!0)},add:nn("add"),set:nn("set"),delete:nn("delete"),clear:nn("clear"),forEach:Ti(!0,!1)},s={get(i){return Ei(this,i,!0,!0)},get size(){return Ci(this,!0)},has(i){return Ii.call(this,i,!0)},add:nn("add"),set:nn("set"),delete:nn("delete"),clear:nn("clear"),forEach:Ti(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Si(i,!1,!1),n[i]=Si(i,!0,!1),e[i]=Si(i,!1,!0),s[i]=Si(i,!0,!0)}),[t,n,e,s]}const[Ev,Iv,Cv,Tv]=wv();function ic(t,e){const n=e?t?Tv:Cv:t?Iv:Ev;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(re(n,r)&&r in s?n:s,r,i)}const Sv={get:ic(!1,!1)},kv={get:ic(!1,!0)},Rv={get:ic(!0,!1)},Lh=new WeakMap,Fh=new WeakMap,Uh=new WeakMap,Av=new WeakMap;function Pv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xv(t){return t.__v_skip||!Object.isExtensible(t)?0:Pv(K_(t))}function Zs(t){return Fs(t)?t:oc(t,!1,Dh,Sv,Lh)}function Nv(t){return oc(t,!1,bv,kv,Fh)}function Mo(t){return oc(t,!0,yv,Rv,Uh)}function oc(t,e,n,s,r){if(!he(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=xv(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function ks(t){return Fs(t)?ks(t.__v_raw):!!(t&&t.__v_isReactive)}function Fs(t){return!!(t&&t.__v_isReadonly)}function Qi(t){return!!(t&&t.__v_isShallow)}function $h(t){return ks(t)||Fs(t)}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function Bh(t){return zi(t,"__v_skip",!0),t}const jr=t=>he(t)?Zs(t):t,ac=t=>he(t)?Mo(t):t;function lc(t){mn&&mt&&(t=ie(t),Nh(t.dep||(t.dep=tc())))}function cc(t,e){t=ie(t);const n=t.dep;n&&Xa(n)}function Oe(t){return!!(t&&t.__v_isRef===!0)}function Z(t){return Hh(t,!1)}function jh(t){return Hh(t,!0)}function Hh(t,e){return Oe(t)?t:new Ov(t,e)}class Ov{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ie(e),this._value=n?e:jr(e)}get value(){return lc(this),this._value}set value(e){const n=this.__v_isShallow||Qi(e)||Fs(e);e=n?e:ie(e),$r(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:jr(e),cc(this))}}function Rs(t){return Oe(t)?t.value:t}const Mv={get:(t,e,n)=>Rs(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Oe(r)&&!Oe(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Wh(t){return ks(t)?t:new Proxy(t,Mv)}class Dv{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=e(()=>lc(this),()=>cc(this));this._get=n,this._set=s}get value(){return this._get()}set value(e){this._set(e)}}function Lv(t){return new Dv(t)}class Fv{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return av(ie(this._object),this._key)}}class Uv{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function $v(t,e,n){return Oe(t)?t:Y(t)?new Uv(t):he(t)&&arguments.length>1?Bv(t,e,n):Z(t)}function Bv(t,e,n){const s=t[e];return Oe(s)?s:new Fv(t,e,n)}class jv{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new nc(e,()=>{this._dirty||(this._dirty=!0,cc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ie(this);return lc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Hv(t,e,n=!1){let s,r;const i=Y(t);return i?(s=t,r=wt):(s=t.get,r=t.set),new jv(s,r,i||!r,n)}function _n(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Do(i,e,n)}return r}function dt(t,e,n,s){if(Y(t)){const i=_n(t,e,n,s);return i&&Eh(i)&&i.catch(o=>{Do(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(dt(t[i],e,n,s));return r}function Do(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){_n(l,null,10,[t,o,a]);return}}Wv(t,n,r,s)}function Wv(t,e,n,s=!0){console.error(t)}let Hr=!1,Za=!1;const We=[];let Pt=0;const As=[];let $t=null,jn=0;const Vh=Promise.resolve();let uc=null;function Et(t){const e=uc||Vh;return t?e.then(this?t.bind(this):t):e}function Vv(t){let e=Pt+1,n=We.length;for(;e<n;){const s=e+n>>>1;Wr(We[s])<t?e=s+1:n=s}return e}function dc(t){(!We.length||!We.includes(t,Hr&&t.allowRecurse?Pt+1:Pt))&&(t.id==null?We.push(t):We.splice(Vv(t.id),0,t),Kh())}function Kh(){!Hr&&!Za&&(Za=!0,uc=Vh.then(qh))}function Kv(t){const e=We.indexOf(t);e>Pt&&We.splice(e,1)}function zv(t){$(t)?As.push(...t):(!$t||!$t.includes(t,t.allowRecurse?jn+1:jn))&&As.push(t),Kh()}function Ju(t,e=Hr?Pt+1:0){for(;e<We.length;e++){const n=We[e];n&&n.pre&&(We.splice(e,1),e--,n())}}function zh(t){if(As.length){const e=[...new Set(As)];if(As.length=0,$t){$t.push(...e);return}for($t=e,$t.sort((n,s)=>Wr(n)-Wr(s)),jn=0;jn<$t.length;jn++)$t[jn]();$t=null,jn=0}}const Wr=t=>t.id==null?1/0:t.id,qv=(t,e)=>{const n=Wr(t)-Wr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function qh(t){Za=!1,Hr=!0,We.sort(qv);const e=wt;try{for(Pt=0;Pt<We.length;Pt++){const n=We[Pt];n&&n.active!==!1&&_n(n,null,14)}}finally{Pt=0,We.length=0,zh(),Hr=!1,uc=null,(We.length||As.length)&&qh()}}function Gv(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||we;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:f}=s[u]||we;f&&(r=n.map(p=>Re(p)?p.trim():p)),d&&(r=n.map(qi))}let a,l=s[a=va(e)]||s[a=va(Mt(e))];!l&&i&&(l=s[a=va(ls(e))]),l&&dt(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,dt(c,t,6,r)}}function Gh(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Y(t)){const l=c=>{const u=Gh(c,e,!0);u&&(a=!0,ke(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(he(t)&&s.set(t,null),null):($(i)?i.forEach(l=>o[l]=null):ke(o,i),he(t)&&s.set(t,o),o)}function Lo(t,e){return!t||!Po(e)?!1:(e=e.slice(2).replace(/Once$/,""),re(t,e[0].toLowerCase()+e.slice(1))||re(t,ls(e))||re(t,e))}let je=null,Fo=null;function Ji(t){const e=je;return je=t,Fo=t&&t.type.__scopeId||null,e}function Yh(t){Fo=t}function Qh(){Fo=null}function at(t,e=je,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&cd(-1);const i=Ji(e);let o;try{o=t(...r)}finally{Ji(i),s._d&&cd(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ya(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:f,setupState:p,ctx:g,inheritAttrs:_}=t;let v,I;const S=Ji(t);try{if(n.shapeFlag&4){const A=r||s;v=At(u.call(A,A,d,i,p,f,g)),I=l}else{const A=e;v=At(A.length>1?A(i,{attrs:l,slots:a,emit:c}):A(i,null)),I=e.props?l:Yv(l)}}catch(A){Ar.length=0,Do(A,t,1),v=le(ft)}let M=v;if(I&&_!==!1){const A=Object.keys(I),{shapeFlag:G}=M;A.length&&G&7&&(o&&A.some(Ql)&&(I=Qv(I,o)),M=Yt(M,I))}return n.dirs&&(M=Yt(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),v=M,Ji(S),v}const Yv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Po(n))&&((e||(e={}))[n]=t[n]);return e},Qv=(t,e)=>{const n={};for(const s in t)(!Ql(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Jv(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Xu(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==s[f]&&!Lo(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Xu(s,o,c):!0:!!o;return!1}function Xu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Lo(n,i))return!0}return!1}function Xv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Zv=t=>t.__isSuspense;function ey(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):zv(t)}function er(t,e){return fc(t,null,e)}const ki={};function xt(t,e,n){return fc(t,e,n)}function fc(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=we){var a;const l=Rh()===((a=Ue)==null?void 0:a.scope)?Ue:null;let c,u=!1,d=!1;if(Oe(t)?(c=()=>t.value,u=Qi(t)):ks(t)?(c=()=>t,s=!0):$(t)?(d=!0,u=t.some(A=>ks(A)||Qi(A)),c=()=>t.map(A=>{if(Oe(A))return A.value;if(ks(A))return Vn(A);if(Y(A))return _n(A,l,2)})):Y(t)?e?c=()=>_n(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),dt(t,l,3,[p])}:c=wt,e&&s){const A=c;c=()=>Vn(A())}let f,p=A=>{f=S.onStop=()=>{_n(A,l,4)}},g;if(Kr)if(p=wt,e?n&&dt(e,l,3,[c(),d?[]:void 0,p]):c(),r==="sync"){const A=Qy();g=A.__watcherHandles||(A.__watcherHandles=[])}else return wt;let _=d?new Array(t.length).fill(ki):ki;const v=()=>{if(S.active)if(e){const A=S.run();(s||u||(d?A.some((G,U)=>$r(G,_[U])):$r(A,_)))&&(f&&f(),dt(e,l,3,[A,_===ki?void 0:d&&_[0]===ki?[]:_,p]),_=A)}else S.run()};v.allowRecurse=!!e;let I;r==="sync"?I=v:r==="post"?I=()=>Qe(v,l&&l.suspense):(v.pre=!0,l&&(v.id=l.uid),I=()=>dc(v));const S=new nc(c,I);e?n?v():_=S.run():r==="post"?Qe(S.run.bind(S),l&&l.suspense):S.run();const M=()=>{S.stop(),l&&l.scope&&Jl(l.scope.effects,S)};return g&&g.push(M),M}function ty(t,e,n){const s=this.proxy,r=Re(t)?t.includes(".")?Jh(s,t):()=>s[t]:t.bind(s,s);let i;Y(e)?i=e:(i=e.handler,n=e);const o=Ue;Us(this);const a=fc(r,i.bind(s),n);return o?Us(o):Gn(),a}function Jh(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Vn(t,e){if(!he(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Oe(t))Vn(t.value,e);else if($(t))for(let n=0;n<t.length;n++)Vn(t[n],e);else if(Qs(t)||Ss(t))t.forEach(n=>{Vn(n,e)});else if(Ch(t))for(const n in t)Vn(t[n],e);return t}function el(t,e){const n=je;if(n===null)return t;const s=Vo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=we]=e[i];o&&(Y(o)&&(o={mounted:o,updated:o}),o.deep&&Vn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Dn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(Js(),dt(l,n,8,[t.el,a,t,e]),Xs())}}function ny(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return cs(()=>{t.isMounted=!0}),hc(()=>{t.isUnmounting=!0}),t}const ct=[Function,Array],Xh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ct,onEnter:ct,onAfterEnter:ct,onEnterCancelled:ct,onBeforeLeave:ct,onLeave:ct,onAfterLeave:ct,onLeaveCancelled:ct,onBeforeAppear:ct,onAppear:ct,onAfterAppear:ct,onAppearCancelled:ct},sy={name:"BaseTransition",props:Xh,setup(t,{slots:e}){const n=vc(),s=ny();let r;return()=>{const i=e.default&&ep(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const _ of i)if(_.type!==ft){o=_;break}}const a=ie(t),{mode:l}=a;if(s.isLeaving)return ba(o);const c=Zu(o);if(!c)return ba(o);const u=tl(c,a,s,n);nl(c,u);const d=n.subTree,f=d&&Zu(d);let p=!1;const{getTransitionKey:g}=c.type;if(g){const _=g();r===void 0?r=_:_!==r&&(r=_,p=!0)}if(f&&f.type!==ft&&(!Hn(c,f)||p)){const _=tl(f,a,s,n);if(nl(f,_),l==="out-in")return s.isLeaving=!0,_.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},ba(o);l==="in-out"&&c.type!==ft&&(_.delayLeave=(v,I,S)=>{const M=Zh(s,f);M[String(f.key)]=f,v._leaveCb=()=>{I(),v._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=S})}return o}}},ry=sy;function Zh(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function tl(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:_,onAppear:v,onAfterAppear:I,onAppearCancelled:S}=e,M=String(t.key),A=Zh(n,t),G=(P,W)=>{P&&dt(P,s,9,W)},U=(P,W)=>{const V=W[1];G(P,W),$(P)?P.every(Ae=>Ae.length<=1)&&V():P.length<=1&&V()},Q={mode:i,persisted:o,beforeEnter(P){let W=a;if(!n.isMounted)if(r)W=_||a;else return;P._leaveCb&&P._leaveCb(!0);const V=A[M];V&&Hn(t,V)&&V.el._leaveCb&&V.el._leaveCb(),G(W,[P])},enter(P){let W=l,V=c,Ae=u;if(!n.isMounted)if(r)W=v||l,V=I||c,Ae=S||u;else return;let F=!1;const ye=P._enterCb=$e=>{F||(F=!0,$e?G(Ae,[P]):G(V,[P]),Q.delayedLeave&&Q.delayedLeave(),P._enterCb=void 0)};W?U(W,[P,ye]):ye()},leave(P,W){const V=String(t.key);if(P._enterCb&&P._enterCb(!0),n.isUnmounting)return W();G(d,[P]);let Ae=!1;const F=P._leaveCb=ye=>{Ae||(Ae=!0,W(),ye?G(g,[P]):G(p,[P]),P._leaveCb=void 0,A[V]===t&&delete A[V])};A[V]=t,f?U(f,[P,F]):F()},clone(P){return tl(P,e,n,s)}};return Q}function ba(t){if(Uo(t))return t=Yt(t),t.children=null,t}function Zu(t){return Uo(t)?t.children?t.children[0]:void 0:t}function nl(t,e){t.shapeFlag&6&&t.component?nl(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ep(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Le?(o.patchFlag&128&&r++,s=s.concat(ep(o.children,e,a))):(e||o.type!==ft)&&s.push(a!=null?Yt(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Zt(t,e){return Y(t)?(()=>ke({name:t.name},e,{setup:t}))():t}const kr=t=>!!t.type.__asyncLoader,Uo=t=>t.type.__isKeepAlive;function iy(t,e){tp(t,"a",e)}function oy(t,e){tp(t,"da",e)}function tp(t,e,n=Ue){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if($o(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Uo(r.parent.vnode)&&ay(s,e,n,r),r=r.parent}}function ay(t,e,n,s){const r=$o(e,t,s,!0);Bo(()=>{Jl(s[e],r)},n)}function $o(t,e,n=Ue,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Js(),Us(n);const a=dt(e,n,t,o);return Gn(),Xs(),a});return s?r.unshift(i):r.push(i),i}}const en=t=>(e,n=Ue)=>(!Kr||t==="sp")&&$o(t,(...s)=>e(...s),n),ly=en("bm"),cs=en("m"),cy=en("bu"),uy=en("u"),hc=en("bum"),Bo=en("um"),dy=en("sp"),fy=en("rtg"),hy=en("rtc");function py(t,e=Ue){$o("ec",t,e)}const np="components";function Ke(t,e){return my(np,t,!0,e)||t}const gy=Symbol.for("v-ndc");function my(t,e,n=!0,s=!1){const r=je||Ue;if(r){const i=r.type;if(t===np){const a=qy(i,!1);if(a&&(a===e||a===Mt(e)||a===No(Mt(e))))return i}const o=ed(r[t]||i[t],e)||ed(r.appContext[t],e);return!o&&s?i:o}}function ed(t,e){return t&&(t[e]||t[Mt(e)]||t[No(Mt(e))])}function _y(t,e,n,s){let r;const i=n&&n[s];if($(t)||Re(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(he(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function jo(t,e,n={},s,r){if(je.isCE||je.parent&&kr(je.parent)&&je.parent.isCE)return e!=="default"&&(n.name=e),le("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),Be();const o=i&&sp(i(n)),a=mc(Le,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function sp(t){return t.some(e=>eo(e)?!(e.type===ft||e.type===Le&&!sp(e.children)):!0)?t:null}const sl=t=>t?pp(t)?Vo(t)||t.proxy:sl(t.parent):null,Rr=ke(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>sl(t.parent),$root:t=>sl(t.root),$emit:t=>t.emit,$options:t=>pc(t),$forceUpdate:t=>t.f||(t.f=()=>dc(t.update)),$nextTick:t=>t.n||(t.n=Et.bind(t.proxy)),$watch:t=>ty.bind(t)}),wa=(t,e)=>t!==we&&!t.__isScriptSetup&&re(t,e),vy={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(wa(s,e))return o[e]=1,s[e];if(r!==we&&re(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&re(c,e))return o[e]=3,i[e];if(n!==we&&re(n,e))return o[e]=4,n[e];rl&&(o[e]=0)}}const u=Rr[e];let d,f;if(u)return e==="$attrs"&&nt(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==we&&re(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,re(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return wa(r,e)?(r[e]=n,!0):s!==we&&re(s,e)?(s[e]=n,!0):re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==we&&re(t,o)||wa(e,o)||(a=i[0])&&re(a,o)||re(s,o)||re(Rr,o)||re(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function td(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let rl=!0;function yy(t){const e=pc(t),n=t.proxy,s=t.ctx;rl=!1,e.beforeCreate&&nd(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:g,activated:_,deactivated:v,beforeDestroy:I,beforeUnmount:S,destroyed:M,unmounted:A,render:G,renderTracked:U,renderTriggered:Q,errorCaptured:P,serverPrefetch:W,expose:V,inheritAttrs:Ae,components:F,directives:ye,filters:$e}=e;if(c&&by(c,s,null),o)for(const me in o){const ue=o[me];Y(ue)&&(s[me]=ue.bind(n))}if(r){const me=r.call(n,n);he(me)&&(t.data=Zs(me))}if(rl=!0,i)for(const me in i){const ue=i[me],ht=Y(ue)?ue.bind(n,n):Y(ue.get)?ue.get.bind(n,n):wt,Mn=!Y(ue)&&Y(ue.set)?ue.set.bind(n):wt,pt=ce({get:ht,set:Mn});Object.defineProperty(s,me,{enumerable:!0,configurable:!0,get:()=>pt.value,set:Ye=>pt.value=Ye})}if(a)for(const me in a)rp(a[me],s,n,me);if(l){const me=Y(l)?l.call(n):l;Reflect.ownKeys(me).forEach(ue=>{Ps(ue,me[ue])})}u&&nd(u,t,"c");function Ee(me,ue){$(ue)?ue.forEach(ht=>me(ht.bind(n))):ue&&me(ue.bind(n))}if(Ee(ly,d),Ee(cs,f),Ee(cy,p),Ee(uy,g),Ee(iy,_),Ee(oy,v),Ee(py,P),Ee(hy,U),Ee(fy,Q),Ee(hc,S),Ee(Bo,A),Ee(dy,W),$(V))if(V.length){const me=t.exposed||(t.exposed={});V.forEach(ue=>{Object.defineProperty(me,ue,{get:()=>n[ue],set:ht=>n[ue]=ht})})}else t.exposed||(t.exposed={});G&&t.render===wt&&(t.render=G),Ae!=null&&(t.inheritAttrs=Ae),F&&(t.components=F),ye&&(t.directives=ye)}function by(t,e,n=wt){$(t)&&(t=il(t));for(const s in t){const r=t[s];let i;he(r)?"default"in r?i=Ze(r.from||s,r.default,!0):i=Ze(r.from||s):i=Ze(r),Oe(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function nd(t,e,n){dt($(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function rp(t,e,n,s){const r=s.includes(".")?Jh(n,s):()=>n[s];if(Re(t)){const i=e[t];Y(i)&&xt(r,i)}else if(Y(t))xt(r,t.bind(n));else if(he(t))if($(t))t.forEach(i=>rp(i,e,n,s));else{const i=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(i)&&xt(r,i,t)}}function pc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>Xi(l,c,o,!0)),Xi(l,e,o)),he(e)&&i.set(e,l),l}function Xi(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Xi(t,i,n,!0),r&&r.forEach(o=>Xi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=wy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const wy={data:sd,props:rd,emits:rd,methods:Ir,computed:Ir,beforeCreate:Ve,created:Ve,beforeMount:Ve,mounted:Ve,beforeUpdate:Ve,updated:Ve,beforeDestroy:Ve,beforeUnmount:Ve,destroyed:Ve,unmounted:Ve,activated:Ve,deactivated:Ve,errorCaptured:Ve,serverPrefetch:Ve,components:Ir,directives:Ir,watch:Iy,provide:sd,inject:Ey};function sd(t,e){return e?t?function(){return ke(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function Ey(t,e){return Ir(il(t),il(e))}function il(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ve(t,e){return t?[...new Set([].concat(t,e))]:e}function Ir(t,e){return t?ke(Object.create(null),t,e):e}function rd(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:ke(Object.create(null),td(t),td(e??{})):e}function Iy(t,e){if(!t)return e;if(!e)return t;const n=ke(Object.create(null),t);for(const s in e)n[s]=Ve(t[s],e[s]);return n}function ip(){return{app:null,config:{isNativeTag:H_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cy=0;function Ty(t,e){return function(s,r=null){Y(s)||(s=ke({},s)),r!=null&&!he(r)&&(r=null);const i=ip(),o=new Set;let a=!1;const l=i.app={_uid:Cy++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Jy,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&Y(c.install)?(o.add(c),c.install(l,...u)):Y(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,d){if(!a){const f=le(s,r);return f.appContext=i,u&&e?e(f,c):t(f,c,d),a=!0,l._container=c,c.__vue_app__=l,Vo(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){Zi=l;try{return c()}finally{Zi=null}}};return l}}let Zi=null;function Ps(t,e){if(Ue){let n=Ue.provides;const s=Ue.parent&&Ue.parent.provides;s===n&&(n=Ue.provides=Object.create(s)),n[t]=e}}function Ze(t,e,n=!1){const s=Ue||je;if(s||Zi){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Zi._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Y(e)?e.call(s&&s.proxy):e}}function Sy(t,e,n,s=!1){const r={},i={};zi(i,Wo,1),t.propsDefaults=Object.create(null),op(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Nv(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function ky(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ie(r),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Lo(t.emitsOptions,f))continue;const p=e[f];if(l)if(re(i,f))p!==i[f]&&(i[f]=p,c=!0);else{const g=Mt(f);r[g]=ol(l,a,g,p,t,!1)}else p!==i[f]&&(i[f]=p,c=!0)}}}else{op(t,e,r,i)&&(c=!0);let u;for(const d in a)(!e||!re(e,d)&&((u=ls(d))===d||!re(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=ol(l,a,d,void 0,t,!0)):delete r[d]);if(i!==a)for(const d in i)(!e||!re(e,d))&&(delete i[d],c=!0)}c&&Gt(t,"set","$attrs")}function op(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Li(l))continue;const c=e[l];let u;r&&re(r,u=Mt(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Lo(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=ie(n),c=a||we;for(let u=0;u<i.length;u++){const d=i[u];n[d]=ol(r,l,d,c[d],t,!re(c,d))}}return o}function ol(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=re(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Y(l)){const{propsDefaults:c}=r;n in c?s=c[n]:(Us(r),s=c[n]=l.call(null,e),Gn())}else s=l}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===ls(n))&&(s=!0))}return s}function ap(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!Y(t)){const u=d=>{l=!0;const[f,p]=ap(d,e,!0);ke(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return he(t)&&s.set(t,Ts),Ts;if($(i))for(let u=0;u<i.length;u++){const d=Mt(i[u]);id(d)&&(o[d]=we)}else if(i)for(const u in i){const d=Mt(u);if(id(d)){const f=i[u],p=o[d]=$(f)||Y(f)?{type:f}:ke({},f);if(p){const g=ld(Boolean,p.type),_=ld(String,p.type);p[0]=g>-1,p[1]=_<0||g<_,(g>-1||re(p,"default"))&&a.push(d)}}}const c=[o,a];return he(t)&&s.set(t,c),c}function id(t){return t[0]!=="$"}function od(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ad(t,e){return od(t)===od(e)}function ld(t,e){return $(e)?e.findIndex(n=>ad(n,t)):Y(e)&&ad(e,t)?0:-1}const lp=t=>t[0]==="_"||t==="$stable",gc=t=>$(t)?t.map(At):[At(t)],Ry=(t,e,n)=>{if(e._n)return e;const s=at((...r)=>gc(e(...r)),n);return s._c=!1,s},cp=(t,e,n)=>{const s=t._ctx;for(const r in t){if(lp(r))continue;const i=t[r];if(Y(i))e[r]=Ry(r,i,s);else if(i!=null){const o=gc(i);e[r]=()=>o}}},up=(t,e)=>{const n=gc(e);t.slots.default=()=>n},Ay=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ie(e),zi(e,"_",n)):cp(e,t.slots={})}else t.slots={},e&&up(t,e);zi(t.slots,Wo,1)},Py=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=we;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ke(r,e),!n&&a===1&&delete r._):(i=!e.$stable,cp(e,r)),o=e}else e&&(up(t,e),o={default:1});if(i)for(const a in r)!lp(a)&&!(a in o)&&delete r[a]};function al(t,e,n,s,r=!1){if($(t)){t.forEach((f,p)=>al(f,e&&($(e)?e[p]:e),n,s,r));return}if(kr(s)&&!r)return;const i=s.shapeFlag&4?Vo(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===we?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Re(c)?(u[c]=null,re(d,c)&&(d[c]=null)):Oe(c)&&(c.value=null)),Y(l))_n(l,a,12,[o,u]);else{const f=Re(l),p=Oe(l);if(f||p){const g=()=>{if(t.f){const _=f?re(d,l)?d[l]:u[l]:l.value;r?$(_)&&Jl(_,i):$(_)?_.includes(i)||_.push(i):f?(u[l]=[i],re(d,l)&&(d[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,re(d,l)&&(d[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Qe(g,n)):g()}}}const Qe=ey;function xy(t){return Ny(t)}function Ny(t,e){const n=Ya();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=wt,insertStaticContent:g}=t,_=(h,m,y,b=null,E=null,R=null,O=!1,k=null,x=!!m.dynamicChildren)=>{if(h===m)return;h&&!Hn(h,m)&&(b=N(h),Ye(h,E,R,!0),h=null),m.patchFlag===-2&&(x=!1,m.dynamicChildren=null);const{type:C,ref:j,shapeFlag:L}=m;switch(C){case Ho:v(h,m,y,b);break;case ft:I(h,m,y,b);break;case Ea:h==null&&S(m,y,b,O);break;case Le:F(h,m,y,b,E,R,O,k,x);break;default:L&1?G(h,m,y,b,E,R,O,k,x):L&6?ye(h,m,y,b,E,R,O,k,x):(L&64||L&128)&&C.process(h,m,y,b,E,R,O,k,x,ae)}j!=null&&E&&al(j,h&&h.ref,R,m||h,!m)},v=(h,m,y,b)=>{if(h==null)s(m.el=a(m.children),y,b);else{const E=m.el=h.el;m.children!==h.children&&c(E,m.children)}},I=(h,m,y,b)=>{h==null?s(m.el=l(m.children||""),y,b):m.el=h.el},S=(h,m,y,b)=>{[h.el,h.anchor]=g(h.children,m,y,b,h.el,h.anchor)},M=({el:h,anchor:m},y,b)=>{let E;for(;h&&h!==m;)E=f(h),s(h,y,b),h=E;s(m,y,b)},A=({el:h,anchor:m})=>{let y;for(;h&&h!==m;)y=f(h),r(h),h=y;r(m)},G=(h,m,y,b,E,R,O,k,x)=>{O=O||m.type==="svg",h==null?U(m,y,b,E,R,O,k,x):W(h,m,E,R,O,k,x)},U=(h,m,y,b,E,R,O,k)=>{let x,C;const{type:j,props:L,shapeFlag:H,transition:q,dirs:ne}=h;if(x=h.el=o(h.type,R,L&&L.is,L),H&8?u(x,h.children):H&16&&P(h.children,x,null,b,E,R&&j!=="foreignObject",O,k),ne&&Dn(h,null,b,"created"),Q(x,h,h.scopeId,O,b),L){for(const de in L)de!=="value"&&!Li(de)&&i(x,de,null,L[de],R,h.children,b,E,D);"value"in L&&i(x,"value",null,L.value),(C=L.onVnodeBeforeMount)&&kt(C,b,h)}ne&&Dn(h,null,b,"beforeMount");const _e=(!E||E&&!E.pendingBranch)&&q&&!q.persisted;_e&&q.beforeEnter(x),s(x,m,y),((C=L&&L.onVnodeMounted)||_e||ne)&&Qe(()=>{C&&kt(C,b,h),_e&&q.enter(x),ne&&Dn(h,null,b,"mounted")},E)},Q=(h,m,y,b,E)=>{if(y&&p(h,y),b)for(let R=0;R<b.length;R++)p(h,b[R]);if(E){let R=E.subTree;if(m===R){const O=E.vnode;Q(h,O,O.scopeId,O.slotScopeIds,E.parent)}}},P=(h,m,y,b,E,R,O,k,x=0)=>{for(let C=x;C<h.length;C++){const j=h[C]=k?cn(h[C]):At(h[C]);_(null,j,m,y,b,E,R,O,k)}},W=(h,m,y,b,E,R,O)=>{const k=m.el=h.el;let{patchFlag:x,dynamicChildren:C,dirs:j}=m;x|=h.patchFlag&16;const L=h.props||we,H=m.props||we;let q;y&&Ln(y,!1),(q=H.onVnodeBeforeUpdate)&&kt(q,y,m,h),j&&Dn(m,h,y,"beforeUpdate"),y&&Ln(y,!0);const ne=E&&m.type!=="foreignObject";if(C?V(h.dynamicChildren,C,k,y,b,ne,R):O||ue(h,m,k,null,y,b,ne,R,!1),x>0){if(x&16)Ae(k,m,L,H,y,b,E);else if(x&2&&L.class!==H.class&&i(k,"class",null,H.class,E),x&4&&i(k,"style",L.style,H.style,E),x&8){const _e=m.dynamicProps;for(let de=0;de<_e.length;de++){const Se=_e[de],gt=L[Se],gs=H[Se];(gs!==gt||Se==="value")&&i(k,Se,gt,gs,E,h.children,y,b,D)}}x&1&&h.children!==m.children&&u(k,m.children)}else!O&&C==null&&Ae(k,m,L,H,y,b,E);((q=H.onVnodeUpdated)||j)&&Qe(()=>{q&&kt(q,y,m,h),j&&Dn(m,h,y,"updated")},b)},V=(h,m,y,b,E,R,O)=>{for(let k=0;k<m.length;k++){const x=h[k],C=m[k],j=x.el&&(x.type===Le||!Hn(x,C)||x.shapeFlag&70)?d(x.el):y;_(x,C,j,null,b,E,R,O,!0)}},Ae=(h,m,y,b,E,R,O)=>{if(y!==b){if(y!==we)for(const k in y)!Li(k)&&!(k in b)&&i(h,k,y[k],null,O,m.children,E,R,D);for(const k in b){if(Li(k))continue;const x=b[k],C=y[k];x!==C&&k!=="value"&&i(h,k,C,x,O,m.children,E,R,D)}"value"in b&&i(h,"value",y.value,b.value)}},F=(h,m,y,b,E,R,O,k,x)=>{const C=m.el=h?h.el:a(""),j=m.anchor=h?h.anchor:a("");let{patchFlag:L,dynamicChildren:H,slotScopeIds:q}=m;q&&(k=k?k.concat(q):q),h==null?(s(C,y,b),s(j,y,b),P(m.children,y,j,E,R,O,k,x)):L>0&&L&64&&H&&h.dynamicChildren?(V(h.dynamicChildren,H,y,E,R,O,k),(m.key!=null||E&&m===E.subTree)&&dp(h,m,!0)):ue(h,m,y,j,E,R,O,k,x)},ye=(h,m,y,b,E,R,O,k,x)=>{m.slotScopeIds=k,h==null?m.shapeFlag&512?E.ctx.activate(m,y,b,O,x):$e(m,y,b,E,R,O,x):tn(h,m,x)},$e=(h,m,y,b,E,R,O)=>{const k=h.component=Hy(h,b,E);if(Uo(h)&&(k.ctx.renderer=ae),Wy(k),k.asyncDep){if(E&&E.registerDep(k,Ee),!h.el){const x=k.subTree=le(ft);I(null,x,m,y)}return}Ee(k,h,m,y,E,R,O)},tn=(h,m,y)=>{const b=m.component=h.component;if(Jv(h,m,y))if(b.asyncDep&&!b.asyncResolved){me(b,m,y);return}else b.next=m,Kv(b.update),b.update();else m.el=h.el,b.vnode=m},Ee=(h,m,y,b,E,R,O)=>{const k=()=>{if(h.isMounted){let{next:j,bu:L,u:H,parent:q,vnode:ne}=h,_e=j,de;Ln(h,!1),j?(j.el=ne.el,me(h,j,O)):j=ne,L&&Fi(L),(de=j.props&&j.props.onVnodeBeforeUpdate)&&kt(de,q,j,ne),Ln(h,!0);const Se=ya(h),gt=h.subTree;h.subTree=Se,_(gt,Se,d(gt.el),N(gt),h,E,R),j.el=Se.el,_e===null&&Xv(h,Se.el),H&&Qe(H,E),(de=j.props&&j.props.onVnodeUpdated)&&Qe(()=>kt(de,q,j,ne),E)}else{let j;const{el:L,props:H}=m,{bm:q,m:ne,parent:_e}=h,de=kr(m);if(Ln(h,!1),q&&Fi(q),!de&&(j=H&&H.onVnodeBeforeMount)&&kt(j,_e,m),Ln(h,!0),L&&te){const Se=()=>{h.subTree=ya(h),te(L,h.subTree,h,E,null)};de?m.type.__asyncLoader().then(()=>!h.isUnmounted&&Se()):Se()}else{const Se=h.subTree=ya(h);_(null,Se,y,b,h,E,R),m.el=Se.el}if(ne&&Qe(ne,E),!de&&(j=H&&H.onVnodeMounted)){const Se=m;Qe(()=>kt(j,_e,Se),E)}(m.shapeFlag&256||_e&&kr(_e.vnode)&&_e.vnode.shapeFlag&256)&&h.a&&Qe(h.a,E),h.isMounted=!0,m=y=b=null}},x=h.effect=new nc(k,()=>dc(C),h.scope),C=h.update=()=>x.run();C.id=h.uid,Ln(h,!0),C()},me=(h,m,y)=>{m.component=h;const b=h.vnode.props;h.vnode=m,h.next=null,ky(h,m.props,b,y),Py(h,m.children,y),Js(),Ju(),Xs()},ue=(h,m,y,b,E,R,O,k,x=!1)=>{const C=h&&h.children,j=h?h.shapeFlag:0,L=m.children,{patchFlag:H,shapeFlag:q}=m;if(H>0){if(H&128){Mn(C,L,y,b,E,R,O,k,x);return}else if(H&256){ht(C,L,y,b,E,R,O,k,x);return}}q&8?(j&16&&D(C,E,R),L!==C&&u(y,L)):j&16?q&16?Mn(C,L,y,b,E,R,O,k,x):D(C,E,R,!0):(j&8&&u(y,""),q&16&&P(L,y,b,E,R,O,k,x))},ht=(h,m,y,b,E,R,O,k,x)=>{h=h||Ts,m=m||Ts;const C=h.length,j=m.length,L=Math.min(C,j);let H;for(H=0;H<L;H++){const q=m[H]=x?cn(m[H]):At(m[H]);_(h[H],q,y,null,E,R,O,k,x)}C>j?D(h,E,R,!0,!1,L):P(m,y,b,E,R,O,k,x,L)},Mn=(h,m,y,b,E,R,O,k,x)=>{let C=0;const j=m.length;let L=h.length-1,H=j-1;for(;C<=L&&C<=H;){const q=h[C],ne=m[C]=x?cn(m[C]):At(m[C]);if(Hn(q,ne))_(q,ne,y,null,E,R,O,k,x);else break;C++}for(;C<=L&&C<=H;){const q=h[L],ne=m[H]=x?cn(m[H]):At(m[H]);if(Hn(q,ne))_(q,ne,y,null,E,R,O,k,x);else break;L--,H--}if(C>L){if(C<=H){const q=H+1,ne=q<j?m[q].el:b;for(;C<=H;)_(null,m[C]=x?cn(m[C]):At(m[C]),y,ne,E,R,O,k,x),C++}}else if(C>H)for(;C<=L;)Ye(h[C],E,R,!0),C++;else{const q=C,ne=C,_e=new Map;for(C=ne;C<=H;C++){const it=m[C]=x?cn(m[C]):At(m[C]);it.key!=null&&_e.set(it.key,C)}let de,Se=0;const gt=H-ne+1;let gs=!1,$u=0;const hr=new Array(gt);for(C=0;C<gt;C++)hr[C]=0;for(C=q;C<=L;C++){const it=h[C];if(Se>=gt){Ye(it,E,R,!0);continue}let St;if(it.key!=null)St=_e.get(it.key);else for(de=ne;de<=H;de++)if(hr[de-ne]===0&&Hn(it,m[de])){St=de;break}St===void 0?Ye(it,E,R,!0):(hr[St-ne]=C+1,St>=$u?$u=St:gs=!0,_(it,m[St],y,null,E,R,O,k,x),Se++)}const Bu=gs?Oy(hr):Ts;for(de=Bu.length-1,C=gt-1;C>=0;C--){const it=ne+C,St=m[it],ju=it+1<j?m[it+1].el:b;hr[C]===0?_(null,St,y,ju,E,R,O,k,x):gs&&(de<0||C!==Bu[de]?pt(St,y,ju,2):de--)}}},pt=(h,m,y,b,E=null)=>{const{el:R,type:O,transition:k,children:x,shapeFlag:C}=h;if(C&6){pt(h.component.subTree,m,y,b);return}if(C&128){h.suspense.move(m,y,b);return}if(C&64){O.move(h,m,y,ae);return}if(O===Le){s(R,m,y);for(let L=0;L<x.length;L++)pt(x[L],m,y,b);s(h.anchor,m,y);return}if(O===Ea){M(h,m,y);return}if(b!==2&&C&1&&k)if(b===0)k.beforeEnter(R),s(R,m,y),Qe(()=>k.enter(R),E);else{const{leave:L,delayLeave:H,afterLeave:q}=k,ne=()=>s(R,m,y),_e=()=>{L(R,()=>{ne(),q&&q()})};H?H(R,ne,_e):_e()}else s(R,m,y)},Ye=(h,m,y,b=!1,E=!1)=>{const{type:R,props:O,ref:k,children:x,dynamicChildren:C,shapeFlag:j,patchFlag:L,dirs:H}=h;if(k!=null&&al(k,null,y,h,!0),j&256){m.ctx.deactivate(h);return}const q=j&1&&H,ne=!kr(h);let _e;if(ne&&(_e=O&&O.onVnodeBeforeUnmount)&&kt(_e,m,h),j&6)w(h.component,y,b);else{if(j&128){h.suspense.unmount(y,b);return}q&&Dn(h,null,m,"beforeUnmount"),j&64?h.type.remove(h,m,y,E,ae,b):C&&(R!==Le||L>0&&L&64)?D(C,m,y,!1,!0):(R===Le&&L&384||!E&&j&16)&&D(x,m,y),b&&ps(h)}(ne&&(_e=O&&O.onVnodeUnmounted)||q)&&Qe(()=>{_e&&kt(_e,m,h),q&&Dn(h,null,m,"unmounted")},y)},ps=h=>{const{type:m,el:y,anchor:b,transition:E}=h;if(m===Le){Uu(y,b);return}if(m===Ea){A(h);return}const R=()=>{r(y),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(h.shapeFlag&1&&E&&!E.persisted){const{leave:O,delayLeave:k}=E,x=()=>O(y,R);k?k(h.el,R,x):x()}else R()},Uu=(h,m)=>{let y;for(;h!==m;)y=f(h),r(h),h=y;r(m)},w=(h,m,y)=>{const{bum:b,scope:E,update:R,subTree:O,um:k}=h;b&&Fi(b),E.stop(),R&&(R.active=!1,Ye(O,h,m,y)),k&&Qe(k,m),Qe(()=>{h.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},D=(h,m,y,b=!1,E=!1,R=0)=>{for(let O=R;O<h.length;O++)Ye(h[O],m,y,b,E)},N=h=>h.shapeFlag&6?N(h.component.subTree):h.shapeFlag&128?h.suspense.next():f(h.anchor||h.el),B=(h,m,y)=>{h==null?m._vnode&&Ye(m._vnode,null,null,!0):_(m._vnode||null,h,m,null,null,null,y),Ju(),zh(),m._vnode=h},ae={p:_,um:Ye,m:pt,r:ps,mt:$e,mc:P,pc:ue,pbc:V,n:N,o:t};let Ie,te;return e&&([Ie,te]=e(ae)),{render:B,hydrate:Ie,createApp:Ty(B,Ie)}}function Ln({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function dp(t,e,n=!1){const s=t.children,r=e.children;if($(s)&&$(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=cn(r[i]),a.el=o.el),n||dp(o,a)),a.type===Ho&&(a.el=o.el)}}function Oy(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const My=t=>t.__isTeleport,Le=Symbol.for("v-fgt"),Ho=Symbol.for("v-txt"),ft=Symbol.for("v-cmt"),Ea=Symbol.for("v-stc"),Ar=[];let vt=null;function Be(t=!1){Ar.push(vt=t?null:[])}function Dy(){Ar.pop(),vt=Ar[Ar.length-1]||null}let Vr=1;function cd(t){Vr+=t}function fp(t){return t.dynamicChildren=Vr>0?vt||Ts:null,Dy(),Vr>0&&vt&&vt.push(t),t}function Je(t,e,n,s,r,i){return fp(se(t,e,n,s,r,i,!0))}function mc(t,e,n,s,r){return fp(le(t,e,n,s,r,!0))}function eo(t){return t?t.__v_isVNode===!0:!1}function Hn(t,e){return t.type===e.type&&t.key===e.key}const Wo="__vInternal",hp=({key:t})=>t??null,Ui=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Re(t)||Oe(t)||Y(t)?{i:je,r:t,k:e,f:!!n}:t:null);function se(t,e=null,n=null,s=0,r=null,i=t===Le?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&hp(e),ref:e&&Ui(e),scopeId:Fo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:je};return a?(_c(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Re(n)?8:16),Vr>0&&!o&&vt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&vt.push(l),l}const le=Ly;function Ly(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===gy)&&(t=ft),eo(t)){const a=Yt(t,e,!0);return n&&_c(a,n),Vr>0&&!i&&vt&&(a.shapeFlag&6?vt[vt.indexOf(t)]=a:vt.push(a)),a.patchFlag|=-2,a}if(Gy(t)&&(t=t.__vccOpts),e){e=Fy(e);let{class:a,style:l}=e;a&&!Re(a)&&(e.class=Br(a)),he(l)&&($h(l)&&!$(l)&&(l=ke({},l)),e.style=Zl(l))}const o=Re(t)?1:Zv(t)?128:My(t)?64:he(t)?4:Y(t)?2:0;return se(t,e,n,s,r,o,i,!0)}function Fy(t){return t?$h(t)||Wo in t?ke({},t):t:null}function Yt(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?$y(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&hp(a),ref:e&&e.ref?n&&r?$(r)?r.concat(Ui(e)):[r,Ui(e)]:Ui(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Le?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Yt(t.ssContent),ssFallback:t.ssFallback&&Yt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function vn(t=" ",e=0){return le(Ho,null,t,e)}function Uy(t="",e=!1){return e?(Be(),mc(ft,null,t)):le(ft,null,t)}function At(t){return t==null||typeof t=="boolean"?le(ft):$(t)?le(Le,null,t.slice()):typeof t=="object"?cn(t):le(Ho,null,String(t))}function cn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Yt(t)}function _c(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),_c(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Wo in e)?e._ctx=je:r===3&&je&&(je.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:je},n=32):(e=String(e),s&64?(n=16,e=[vn(e)]):n=8);t.children=e,t.shapeFlag|=n}function $y(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Br([e.class,s.class]));else if(r==="style")e.style=Zl([e.style,s.style]);else if(Po(r)){const i=e[r],o=s[r];o&&i!==o&&!($(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function kt(t,e,n,s=null){dt(t,e,7,[n,s])}const By=ip();let jy=0;function Hy(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||By,i={uid:jy++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new kh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ap(s,r),emitsOptions:Gh(s,r),emit:null,emitted:null,propsDefaults:we,inheritAttrs:s.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Gv.bind(null,i),t.ce&&t.ce(i),i}let Ue=null;const vc=()=>Ue||je;let yc,ms,ud="__VUE_INSTANCE_SETTERS__";(ms=Ya()[ud])||(ms=Ya()[ud]=[]),ms.push(t=>Ue=t),yc=t=>{ms.length>1?ms.forEach(e=>e(t)):ms[0](t)};const Us=t=>{yc(t),t.scope.on()},Gn=()=>{Ue&&Ue.scope.off(),yc(null)};function pp(t){return t.vnode.shapeFlag&4}let Kr=!1;function Wy(t,e=!1){Kr=e;const{props:n,children:s}=t.vnode,r=pp(t);Sy(t,n,r,e),Ay(t,s);const i=r?Vy(t,e):void 0;return Kr=!1,i}function Vy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Bh(new Proxy(t.ctx,vy));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?zy(t):null;Us(t),Js();const i=_n(s,t,0,[t.props,r]);if(Xs(),Gn(),Eh(i)){if(i.then(Gn,Gn),e)return i.then(o=>{dd(t,o,e)}).catch(o=>{Do(o,t,0)});t.asyncDep=i}else dd(t,i,e)}else gp(t,e)}function dd(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:he(e)&&(t.setupState=Wh(e)),gp(t,n)}let fd;function gp(t,e,n){const s=t.type;if(!t.render){if(!e&&fd&&!s.render){const r=s.template||pc(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=ke(ke({isCustomElement:i,delimiters:a},o),l);s.render=fd(r,c)}}t.render=s.render||wt}Us(t),Js(),yy(t),Xs(),Gn()}function Ky(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return nt(t,"get","$attrs"),e[n]}}))}function zy(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Ky(t)},slots:t.slots,emit:t.emit,expose:e}}function Vo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Wh(Bh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Rr)return Rr[n](t)},has(e,n){return n in e||n in Rr}}))}function qy(t,e=!0){return Y(t)?t.displayName||t.name:t.name||e&&t.__name}function Gy(t){return Y(t)&&"__vccOpts"in t}const ce=(t,e)=>Hv(t,e,Kr);function Tn(t,e,n){const s=arguments.length;return s===2?he(e)&&!$(e)?eo(e)?le(t,null,[e]):le(t,e):le(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&eo(n)&&(n=[n]),le(t,e,n))}const Yy=Symbol.for("v-scx"),Qy=()=>Ze(Yy),Jy="3.3.4",Xy="http://www.w3.org/2000/svg",Wn=typeof document<"u"?document:null,hd=Wn&&Wn.createElement("template"),Zy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Wn.createElementNS(Xy,t):Wn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Wn.createTextNode(t),createComment:t=>Wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{hd.innerHTML=s?`<svg>${t}</svg>`:t;const a=hd.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function eb(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function tb(t,e,n){const s=t.style,r=Re(n);if(n&&!r){if(e&&!Re(e))for(const i in e)n[i]==null&&ll(s,i,"");for(const i in n)ll(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const pd=/\s*!important$/;function ll(t,e,n){if($(n))n.forEach(s=>ll(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=nb(t,e);pd.test(n)?t.setProperty(ls(s),n.replace(pd,""),"important"):t[s]=n}}const gd=["Webkit","Moz","ms"],Ia={};function nb(t,e){const n=Ia[e];if(n)return n;let s=Mt(e);if(s!=="filter"&&s in t)return Ia[e]=s;s=No(s);for(let r=0;r<gd.length;r++){const i=gd[r]+s;if(i in t)return Ia[e]=i}return e}const md="http://www.w3.org/1999/xlink";function sb(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(md,e.slice(6,e.length)):t.setAttributeNS(md,e,n);else{const i=ev(e);n==null||i&&!Th(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function rb(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Th(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Bt(t,e,n,s){t.addEventListener(e,n,s)}function ib(t,e,n,s){t.removeEventListener(e,n,s)}function ob(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=ab(e);if(s){const c=i[e]=ub(s,r);Bt(t,a,c,l)}else o&&(ib(t,a,o,l),i[e]=void 0)}}const _d=/(?:Once|Passive|Capture)$/;function ab(t){let e;if(_d.test(t)){e={};let s;for(;s=t.match(_d);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ls(t.slice(2)),e]}let Ca=0;const lb=Promise.resolve(),cb=()=>Ca||(lb.then(()=>Ca=0),Ca=Date.now());function ub(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;dt(db(s,n.value),e,5,[s])};return n.value=t,n.attached=cb(),n}function db(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const vd=/^on[a-z]/,fb=(t,e,n,s,r=!1,i,o,a,l)=>{e==="class"?eb(t,s,r):e==="style"?tb(t,n,s):Po(e)?Ql(e)||ob(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):hb(t,e,s,r))?rb(t,e,s,i,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),sb(t,e,s,r))};function hb(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&vd.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||vd.test(e)&&Re(n)?!1:e in t}const sn="transition",pr="animation",bc=(t,{slots:e})=>Tn(ry,pb(t),e);bc.displayName="Transition";const mp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};bc.props=ke({},Xh,mp);const Fn=(t,e=[])=>{$(t)?t.forEach(n=>n(...e)):t&&t(...e)},yd=t=>t?$(t)?t.some(e=>e.length>1):t.length>1:!1;function pb(t){const e={};for(const F in t)F in mp||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=gb(r),_=g&&g[0],v=g&&g[1],{onBeforeEnter:I,onEnter:S,onEnterCancelled:M,onLeave:A,onLeaveCancelled:G,onBeforeAppear:U=I,onAppear:Q=S,onAppearCancelled:P=M}=e,W=(F,ye,$e)=>{Un(F,ye?u:a),Un(F,ye?c:o),$e&&$e()},V=(F,ye)=>{F._isLeaving=!1,Un(F,d),Un(F,p),Un(F,f),ye&&ye()},Ae=F=>(ye,$e)=>{const tn=F?Q:S,Ee=()=>W(ye,F,$e);Fn(tn,[ye,Ee]),bd(()=>{Un(ye,F?l:i),rn(ye,F?u:a),yd(tn)||wd(ye,s,_,Ee)})};return ke(e,{onBeforeEnter(F){Fn(I,[F]),rn(F,i),rn(F,o)},onBeforeAppear(F){Fn(U,[F]),rn(F,l),rn(F,c)},onEnter:Ae(!1),onAppear:Ae(!0),onLeave(F,ye){F._isLeaving=!0;const $e=()=>V(F,ye);rn(F,d),vb(),rn(F,f),bd(()=>{F._isLeaving&&(Un(F,d),rn(F,p),yd(A)||wd(F,s,v,$e))}),Fn(A,[F,$e])},onEnterCancelled(F){W(F,!1),Fn(M,[F])},onAppearCancelled(F){W(F,!0),Fn(P,[F])},onLeaveCancelled(F){V(F),Fn(G,[F])}})}function gb(t){if(t==null)return null;if(he(t))return[Ta(t.enter),Ta(t.leave)];{const e=Ta(t);return[e,e]}}function Ta(t){return G_(t)}function rn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Un(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function bd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let mb=0;function wd(t,e,n,s){const r=t._endId=++mb,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=_b(t,e);if(!o)return s();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,f),i()},f=p=>{p.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,f)}function _b(t,e){const n=window.getComputedStyle(t),s=g=>(n[g]||"").split(", "),r=s(`${sn}Delay`),i=s(`${sn}Duration`),o=Ed(r,i),a=s(`${pr}Delay`),l=s(`${pr}Duration`),c=Ed(a,l);let u=null,d=0,f=0;e===sn?o>0&&(u=sn,d=o,f=i.length):e===pr?c>0&&(u=pr,d=c,f=l.length):(d=Math.max(o,c),u=d>0?o>c?sn:pr:null,f=u?u===sn?i.length:l.length:0);const p=u===sn&&/\b(transform|all)(,|$)/.test(s(`${sn}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function Ed(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Id(n)+Id(t[s])))}function Id(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function vb(){return document.body.offsetHeight}const Sn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>Fi(e,n):e};function yb(t){t.target.composing=!0}function Cd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const to={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Sn(r);const i=s||r.props&&r.props.type==="number";Bt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=qi(a)),t._assign(a)}),n&&Bt(t,"change",()=>{t.value=t.value.trim()}),e||(Bt(t,"compositionstart",yb),Bt(t,"compositionend",Cd),Bt(t,"change",Cd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Sn(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&qi(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},bb={deep:!0,created(t,e,n){t._assign=Sn(n),Bt(t,"change",()=>{const s=t._modelValue,r=$s(t),i=t.checked,o=t._assign;if($(s)){const a=ec(s,r),l=a!==-1;if(i&&!l)o(s.concat(r));else if(!i&&l){const c=[...s];c.splice(a,1),o(c)}}else if(Qs(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(_p(t,i))})},mounted:Td,beforeUpdate(t,e,n){t._assign=Sn(n),Td(t,e,n)}};function Td(t,{value:e,oldValue:n},s){t._modelValue=e,$(e)?t.checked=ec(e,s.props.value)>-1:Qs(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Jn(e,_p(t,!0)))}const wb={created(t,{value:e},n){t.checked=Jn(e,n.props.value),t._assign=Sn(n),Bt(t,"change",()=>{t._assign($s(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=Sn(s),e!==n&&(t.checked=Jn(e,s.props.value))}},Eb={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Qs(e);Bt(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?qi($s(o)):$s(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=Sn(s)},mounted(t,{value:e}){Sd(t,e)},beforeUpdate(t,e,n){t._assign=Sn(n)},updated(t,{value:e}){Sd(t,e)}};function Sd(t,e){const n=t.multiple;if(!(n&&!$(e)&&!Qs(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=$s(i);if(n)$(e)?i.selected=ec(e,o)>-1:i.selected=e.has(o);else if(Jn($s(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function $s(t){return"_value"in t?t._value:t.value}function _p(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Ib={created(t,e,n){Ri(t,e,n,null,"created")},mounted(t,e,n){Ri(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){Ri(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){Ri(t,e,n,s,"updated")}};function Cb(t,e){switch(t){case"SELECT":return Eb;case"TEXTAREA":return to;default:switch(e){case"checkbox":return bb;case"radio":return wb;default:return to}}}function Ri(t,e,n,s,r){const o=Cb(t.tagName,n.props&&n.props.type)[r];o&&o(t,e,n,s)}const Tb=["ctrl","shift","alt","meta"],Sb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Tb.some(n=>t[`${n}Key`]&&!e.includes(n))},kd=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=Sb[e[r]];if(i&&i(n,e))return}return t(n,...s)},kb={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Rb=(t,e)=>n=>{if(!("key"in n))return;const s=ls(n.key);if(e.some(r=>r===s||kb[r]===s))return t(n)},Ab=ke({patchProp:fb},Zy);let Rd;function Pb(){return Rd||(Rd=xy(Ab))}const xb=(...t)=>{const e=Pb().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Nb(s);if(!r)return;const i=e._component;!Y(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Nb(t){return Re(t)?document.querySelector(t):t}const vp=new Set,et=new WeakMap,xs=new WeakMap,Xn=new WeakMap,cl=new WeakMap,Ob=new WeakMap,Bs=new WeakMap,no=new WeakMap,Cr=new WeakSet;let Zn;const jt="__aa_tgt",ul="__aa_del",Mb=t=>{const e=$b(t);e&&e.forEach(n=>Bb(n))},Db=t=>{t.forEach(e=>{e.target===Zn&&Fb(),et.has(e.target)&&us(e.target)})};function Lb(t){const e=cl.get(t);e==null||e.disconnect();let n=et.get(t),s=0;const r=5;n||(n=js(t),et.set(t,n));const{offsetWidth:i,offsetHeight:o}=Zn,l=[n.top-r,i-(n.left+r+n.width),o-(n.top+r+n.height),n.left-r].map(u=>`${-1*Math.floor(u)}px`).join(" "),c=new IntersectionObserver(()=>{++s>1&&us(t)},{root:Zn,threshold:1,rootMargin:l});c.observe(t),cl.set(t,c)}function us(t){clearTimeout(no.get(t));const e=Ko(t),n=typeof e=="function"?500:e.duration;no.set(t,setTimeout(async()=>{const s=Xn.get(t);try{await(s==null?void 0:s.finished),et.set(t,js(t)),Lb(t)}catch{}},n))}function Fb(){clearTimeout(no.get(Zn)),no.set(Zn,setTimeout(()=>{vp.forEach(t=>Ep(t,e=>yp(()=>us(e))))},100))}function Ub(t){setTimeout(()=>{Ob.set(t,setInterval(()=>yp(us.bind(null,t)),2e3))},Math.round(2e3*Math.random()))}function yp(t){typeof requestIdleCallback=="function"?requestIdleCallback(()=>t()):requestAnimationFrame(()=>t())}let dl,Es;typeof window<"u"&&(Zn=document.documentElement,dl=new MutationObserver(Mb),Es=new ResizeObserver(Db),Es.observe(Zn));function $b(t){return t.reduce((s,r)=>[...s,...Array.from(r.addedNodes),...Array.from(r.removedNodes)],[]).every(s=>s.nodeName==="#comment")?!1:t.reduce((s,r)=>{if(s===!1)return!1;if(r.target instanceof Element){if(Sa(r.target),!s.has(r.target)){s.add(r.target);for(let i=0;i<r.target.children.length;i++){const o=r.target.children.item(i);if(o){if(ul in o)return!1;Sa(r.target,o),s.add(o)}}}if(r.removedNodes.length)for(let i=0;i<r.removedNodes.length;i++){const o=r.removedNodes[i];if(ul in o)return!1;o instanceof Element&&(s.add(o),Sa(r.target,o),xs.set(o,[r.previousSibling,r.nextSibling]))}}return s},new Set)}function Sa(t,e){!e&&!(jt in t)?Object.defineProperty(t,jt,{value:t}):e&&!(jt in e)&&Object.defineProperty(e,jt,{value:t})}function Bb(t){var e;const n=t.isConnected,s=et.has(t);n&&xs.has(t)&&xs.delete(t),Xn.has(t)&&((e=Xn.get(t))===null||e===void 0||e.cancel()),s&&n?Hb(t):s&&!n?Vb(t):Wb(t)}function Rt(t){return Number(t.replace(/[^0-9.\-]/g,""))}function jb(t){let e=t.parentElement;for(;e;){if(e.scrollLeft||e.scrollTop)return{x:e.scrollLeft,y:e.scrollTop};e=e.parentElement}return{x:0,y:0}}function js(t){const e=t.getBoundingClientRect(),{x:n,y:s}=jb(t);return{top:e.top+s,left:e.left+n,width:e.width,height:e.height}}function bp(t,e,n){let s=e.width,r=e.height,i=n.width,o=n.height;const a=getComputedStyle(t);if(a.getPropertyValue("box-sizing")==="content-box"){const c=Rt(a.paddingTop)+Rt(a.paddingBottom)+Rt(a.borderTopWidth)+Rt(a.borderBottomWidth),u=Rt(a.paddingLeft)+Rt(a.paddingRight)+Rt(a.borderRightWidth)+Rt(a.borderLeftWidth);s-=u,i-=u,r-=c,o-=c}return[s,i,r,o].map(Math.round)}function Ko(t){return jt in t&&Bs.has(t[jt])?Bs.get(t[jt]):{duration:250,easing:"ease-in-out"}}function wp(t){if(jt in t)return t[jt]}function wc(t){const e=wp(t);return e?Cr.has(e):!1}function Ep(t,...e){e.forEach(n=>n(t,Bs.has(t)));for(let n=0;n<t.children.length;n++){const s=t.children.item(n);s&&e.forEach(r=>r(s,Bs.has(s)))}}function Hb(t){const e=et.get(t),n=js(t);if(!wc(t))return et.set(t,n);let s;if(!e)return;const r=Ko(t);if(typeof r!="function"){const i=e.left-n.left,o=e.top-n.top,[a,l,c,u]=bp(t,e,n),d={transform:`translate(${i}px, ${o}px)`},f={transform:"translate(0, 0)"};a!==l&&(d.width=`${a}px`,f.width=`${l}px`),c!==u&&(d.height=`${c}px`,f.height=`${u}px`),s=t.animate([d,f],{duration:r.duration,easing:r.easing})}else s=new Animation(r(t,"remain",e,n)),s.play();Xn.set(t,s),et.set(t,n),s.addEventListener("finish",us.bind(null,t))}function Wb(t){const e=js(t);et.set(t,e);const n=Ko(t);if(!wc(t))return;let s;typeof n!="function"?s=t.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:n.duration*1.5,easing:"ease-in"}):(s=new Animation(n(t,"add",e)),s.play()),Xn.set(t,s),s.addEventListener("finish",us.bind(null,t))}function Vb(t){var e;if(!xs.has(t)||!et.has(t))return;const[n,s]=xs.get(t);Object.defineProperty(t,ul,{value:!0}),s&&s.parentNode&&s.parentNode instanceof Element?s.parentNode.insertBefore(t,s):n&&n.parentNode?n.parentNode.appendChild(t):(e=wp(t))===null||e===void 0||e.appendChild(t);function r(){var f;t.remove(),et.delete(t),xs.delete(t),Xn.delete(t),(f=cl.get(t))===null||f===void 0||f.disconnect()}if(!wc(t))return r();const[i,o,a,l]=Kb(t),c=Ko(t),u=et.get(t);let d;Object.assign(t.style,{position:"absolute",top:`${i}px`,left:`${o}px`,width:`${a}px`,height:`${l}px`,margin:0,pointerEvents:"none",transformOrigin:"center",zIndex:100}),typeof c!="function"?d=t.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:c.duration,easing:"ease-out"}):(d=new Animation(c(t,"remove",u)),d.play()),Xn.set(t,d),d.addEventListener("finish",r)}function Kb(t){const e=et.get(t),[n,,s]=bp(t,e,js(t));let r=t.parentElement;for(;r&&(getComputedStyle(r).position==="static"||r instanceof HTMLBodyElement);)r=r.parentElement;r||(r=document.body);const i=getComputedStyle(r),o=et.get(r)||js(r),a=Math.round(e.top-o.top)-Rt(i.borderTopWidth),l=Math.round(e.left-o.left)-Rt(i.borderLeftWidth);return[a,l,n,s]}function zb(t,e={}){return dl&&Es&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&typeof e!="function"&&!e.disrespectUserMotionPreference||(Cr.add(t),getComputedStyle(t).position==="static"&&Object.assign(t.style,{position:"relative"}),Ep(t,us,Ub,r=>Es==null?void 0:Es.observe(r)),typeof e=="function"?Bs.set(t,e):Bs.set(t,{duration:250,easing:"ease-in-out",...e}),dl.observe(t,{childList:!0}),vp.add(t))),Object.freeze({parent:t,enable:()=>{Cr.add(t)},disable:()=>{Cr.delete(t)},isEnabled:()=>Cr.has(t)})}const qb={mounted:(t,e)=>{zb(t,e.value||{})}},Gb={install(t){t.directive("auto-animate",qb)}};function Yb(){return Ip().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Ip(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Qb=typeof Proxy=="function",Jb="devtools-plugin:setup",Xb="plugin:settings:set";let _s,fl;function Zb(){var t;return _s!==void 0||(typeof window<"u"&&window.performance?(_s=!0,fl=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(_s=!0,fl=global.perf_hooks.performance):_s=!1),_s}function ew(){return Zb()?fl.now():Date.now()}class tw{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},s);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}i=o},now(){return ew()}},n&&n.on(Xb,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function nw(t,e){const n=t,s=Ip(),r=Yb(),i=Qb&&n.enableEarlyProxy;if(r&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))r.emit(Jb,t,e);else{const o=i?new tw(n,r):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Cp=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",tr=t=>Cp?Symbol(t):"_vr_"+t,sw=tr("rvlm"),Ad=tr("rvd"),zo=tr("r"),Tp=tr("rl"),hl=tr("rvl"),ws=typeof window<"u";function rw(t){return t.__esModule||Cp&&t[Symbol.toStringTag]==="Module"}const ge=Object.assign;function ka(t,e){const n={};for(const s in e){const r=e[s];n[s]=Array.isArray(r)?r.map(t):t(r)}return n}const Pr=()=>{},iw=/\/$/,ow=t=>t.replace(iw,"");function Ra(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("?"),l=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),i=e.slice(a+1,l>-1?l:e.length),r=t(i)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=uw(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function aw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Pd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function lw(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Hs(e.matched[s],n.matched[r])&&Sp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Hs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Sp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!cw(t[n],e[n]))return!1;return!0}function cw(t,e){return Array.isArray(t)?xd(t,e):Array.isArray(e)?xd(e,t):t===e}function xd(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function uw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var zr;(function(t){t.pop="pop",t.push="push"})(zr||(zr={}));var xr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(xr||(xr={}));function dw(t){if(!t)if(ws){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ow(t)}const fw=/^[^#]+#/;function hw(t,e){return t.replace(fw,"#")+e}function pw(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const qo=()=>({left:window.pageXOffset,top:window.pageYOffset});function gw(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=pw(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Nd(t,e){return(history.state?history.state.position-e:-1)+t}const pl=new Map;function mw(t,e){pl.set(t,e)}function _w(t){const e=pl.get(t);return pl.delete(t),e}let vw=()=>location.protocol+"//"+location.host;function kp(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Pd(l,"")}return Pd(n,t)+s+r}function yw(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const p=kp(t,location),g=n.value,_=e.value;let v=0;if(f){if(n.value=p,e.value=f,o&&o===g){o=null;return}v=_?f.position-_.position:0}else s(p);r.forEach(I=>{I(n.value,g,{delta:v,type:zr.pop,direction:v?v>0?xr.forward:xr.back:xr.unknown})})};function l(){o=n.value}function c(f){r.push(f);const p=()=>{const g=r.indexOf(f);g>-1&&r.splice(g,1)};return i.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(ge({},f.state,{scroll:qo()}),"")}function d(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function Od(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?qo():null}}function bw(t){const{history:e,location:n}=window,s={value:kp(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:vw()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(l,c){const u=ge({},e.state,Od(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});i(l,u,!0),s.value=l}function a(l,c){const u=ge({},r.value,e.state,{forward:l,scroll:qo()});i(u.current,u,!0);const d=ge({},Od(s.value,l,null),{position:u.position+1},c);i(l,d,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function ww(t){t=dw(t);const e=bw(t),n=yw(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ge({location:"",base:t,go:s,createHref:hw.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Ew(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),ww(t)}function Iw(t){return typeof t=="string"||t&&typeof t=="object"}function Rp(t){return typeof t=="string"||typeof t=="symbol"}const on={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ap=tr("nf");var Md;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Md||(Md={}));function Ws(t,e){return ge(new Error,{type:t,[Ap]:!0},e)}function an(t,e){return t instanceof Error&&Ap in t&&(e==null||!!(t.type&e))}const Dd="[^/]+?",Cw={sensitive:!1,strict:!1,start:!0,end:!0},Tw=/[.+*?^${}()[\]/\\]/g;function Sw(t,e){const n=ge({},Cw,e),s=[];let r=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const f=c[d];let p=40+(n.sensitive?.25:0);if(f.type===0)d||(r+="/"),r+=f.value.replace(Tw,"\\$&"),p+=40;else if(f.type===1){const{value:g,repeatable:_,optional:v,regexp:I}=f;i.push({name:g,repeatable:_,optional:v});const S=I||Dd;if(S!==Dd){p+=10;try{new RegExp(`(${S})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${g}" (${S}): `+A.message)}}let M=_?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;d||(M=v&&c.length<2?`(?:/${M})`:"/"+M),v&&(M+="?"),r+=M,p+=20,v&&(p+=-8),_&&(p+=-20),S===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",g=i[f-1];d[g.name]=p&&g.repeatable?p.split("/"):p}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:_,optional:v}=p,I=g in c?c[g]:"";if(Array.isArray(I)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const S=Array.isArray(I)?I.join("/"):I;if(!S)if(v)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=S}}return u}return{re:o,score:s,keys:i,parse:a,stringify:l}}function kw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Rw(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=kw(s[n],r[n]);if(i)return i;n++}return r.length-s.length}const Aw={type:0,value:""},Pw=/[a-zA-Z0-9_]/;function xw(t){if(!t)return[[]];if(t==="/")return[[Aw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,c="",u="";function d(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):f();break;case 4:f(),n=s;break;case 1:l==="("?n=2:Pw.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),r}function Nw(t,e,n){const s=Sw(xw(t.path),n),r=ge(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Ow(t,e){const n=[],s=new Map;e=Fd({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,d,f){const p=!f,g=Dw(u);g.aliasOf=f&&f.record;const _=Fd(e,u),v=[g];if("alias"in u){const M=typeof u.alias=="string"?[u.alias]:u.alias;for(const A of M)v.push(ge({},g,{components:f?f.record.components:g.components,path:A,aliasOf:f?f.record:g}))}let I,S;for(const M of v){const{path:A}=M;if(d&&A[0]!=="/"){const G=d.record.path,U=G[G.length-1]==="/"?"":"/";M.path=d.record.path+(A&&U+A)}if(I=Nw(M,d,_),f?f.alias.push(I):(S=S||I,S!==I&&S.alias.push(I),p&&u.name&&!Ld(I)&&o(u.name)),"children"in g){const G=g.children;for(let U=0;U<G.length;U++)i(G[U],I,f&&f.children[U])}f=f||I,l(I)}return S?()=>{o(S)}:Pr}function o(u){if(Rp(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&Rw(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Pp(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Ld(u)&&s.set(u.record.name,u)}function c(u,d){let f,p={},g,_;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Ws(1,{location:u});_=f.record.name,p=ge(Mw(d.params,f.keys.filter(S=>!S.optional).map(S=>S.name)),u.params),g=f.stringify(p)}else if("path"in u)g=u.path,f=n.find(S=>S.re.test(g)),f&&(p=f.parse(g),_=f.record.name);else{if(f=d.name?s.get(d.name):n.find(S=>S.re.test(d.path)),!f)throw Ws(1,{location:u,currentLocation:d});_=f.record.name,p=ge({},d.params,u.params),g=f.stringify(p)}const v=[];let I=f;for(;I;)v.unshift(I.record),I=I.parent;return{name:_,path:g,params:p,matched:v,meta:Fw(v)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Mw(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Dw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Lw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Lw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Ld(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Fw(t){return t.reduce((e,n)=>ge(e,n.meta),{})}function Fd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Pp(t,e){return e.children.some(n=>n===t||Pp(t,n))}const xp=/#/g,Uw=/&/g,$w=/\//g,Bw=/=/g,jw=/\?/g,Np=/\+/g,Hw=/%5B/g,Ww=/%5D/g,Op=/%5E/g,Vw=/%60/g,Mp=/%7B/g,Kw=/%7C/g,Dp=/%7D/g,zw=/%20/g;function Ec(t){return encodeURI(""+t).replace(Kw,"|").replace(Hw,"[").replace(Ww,"]")}function qw(t){return Ec(t).replace(Mp,"{").replace(Dp,"}").replace(Op,"^")}function gl(t){return Ec(t).replace(Np,"%2B").replace(zw,"+").replace(xp,"%23").replace(Uw,"%26").replace(Vw,"`").replace(Mp,"{").replace(Dp,"}").replace(Op,"^")}function Gw(t){return gl(t).replace(Bw,"%3D")}function Yw(t){return Ec(t).replace(xp,"%23").replace(jw,"%3F")}function Qw(t){return t==null?"":Yw(t).replace($w,"%2F")}function so(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Jw(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Np," "),o=i.indexOf("="),a=so(o<0?i:i.slice(0,o)),l=o<0?null:so(i.slice(o+1));if(a in e){let c=e[a];Array.isArray(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Ud(t){let e="";for(let n in t){const s=t[n];if(n=Gw(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(i=>i&&gl(i)):[s&&gl(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Xw(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}function gr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function un(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(Ws(4,{from:n,to:e})):d instanceof Error?a(d):Iw(d)?a(Ws(2,{from:e,to:d})):(i&&s.enterCallbacks[r]===i&&typeof d=="function"&&i.push(d),o())},c=t.call(s&&s.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function Aa(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Zw(a)){const c=(a.__vccOpts||a)[e];c&&r.push(un(c,n,s,i,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=rw(c)?c.default:c;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&un(f,n,s,i,o)()}))}}return r}function Zw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function $d(t){const e=Ze(zo),n=Ze(Tp),s=ce(()=>e.resolve(Rs(t.to))),r=ce(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Hs.bind(null,u));if(f>-1)return f;const p=Bd(l[c-2]);return c>1&&Bd(u)===p&&d[d.length-1].path!==p?d.findIndex(Hs.bind(null,l[c-2])):f}),i=ce(()=>r.value>-1&&sE(n.params,s.value.params)),o=ce(()=>r.value>-1&&r.value===n.matched.length-1&&Sp(n.params,s.value.params));function a(l={}){return nE(l)?e[Rs(t.replace)?"replace":"push"](Rs(t.to)).catch(Pr):Promise.resolve()}return{route:s,href:ce(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const eE=Zt({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$d,setup(t,{slots:e}){const n=Zs($d(t)),{options:s}=Ze(zo),r=ce(()=>({[jd(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[jd(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Tn("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),tE=eE;function nE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function sE(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Bd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const jd=(t,e,n)=>t??e??n,rE=Zt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=Ze(hl),r=ce(()=>t.route||s.value),i=Ze(Ad,0),o=ce(()=>r.value.matched[i]);Ps(Ad,i+1),Ps(sw,o),Ps(hl,r);const a=Z();return xt(()=>[a.value,o.value,t.name],([l,c,u],[d,f,p])=>{c&&(c.instances[u]=l,f&&f!==c&&l&&l===d&&(c.leaveGuards.size||(c.leaveGuards=f.leaveGuards),c.updateGuards.size||(c.updateGuards=f.updateGuards))),l&&c&&(!f||!Hs(c,f)||!d)&&(c.enterCallbacks[u]||[]).forEach(g=>g(l))},{flush:"post"}),()=>{const l=r.value,c=o.value,u=c&&c.components[t.name],d=t.name;if(!u)return Hd(n.default,{Component:u,route:l});const f=c.props[t.name],p=f?f===!0?l.params:typeof f=="function"?f(l):f:null,_=Tn(u,ge({},p,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(c.instances[d]=null)},ref:a}));return Hd(n.default,{Component:_,route:l})||_}}});function Hd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const iE=rE;function oE(t){const e=Ow(t.routes,t),n=t.parseQuery||Jw,s=t.stringifyQuery||Ud,r=t.history,i=gr(),o=gr(),a=gr(),l=jh(on);let c=on;ws&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ka.bind(null,w=>""+w),d=ka.bind(null,Qw),f=ka.bind(null,so);function p(w,D){let N,B;return Rp(w)?(N=e.getRecordMatcher(w),B=D):B=w,e.addRoute(B,N)}function g(w){const D=e.getRecordMatcher(w);D&&e.removeRoute(D)}function _(){return e.getRoutes().map(w=>w.record)}function v(w){return!!e.getRecordMatcher(w)}function I(w,D){if(D=ge({},D||l.value),typeof w=="string"){const h=Ra(n,w,D.path),m=e.resolve({path:h.path},D),y=r.createHref(h.fullPath);return ge(h,m,{params:f(m.params),hash:so(h.hash),redirectedFrom:void 0,href:y})}let N;if("path"in w)N=ge({},w,{path:Ra(n,w.path,D.path).path});else{const h=ge({},w.params);for(const m in h)h[m]==null&&delete h[m];N=ge({},w,{params:d(w.params)}),D.params=d(D.params)}const B=e.resolve(N,D),ae=w.hash||"";B.params=u(f(B.params));const Ie=aw(s,ge({},w,{hash:qw(ae),path:B.path})),te=r.createHref(Ie);return ge({fullPath:Ie,hash:ae,query:s===Ud?Xw(w.query):w.query||{}},B,{redirectedFrom:void 0,href:te})}function S(w){return typeof w=="string"?Ra(n,w,l.value.path):ge({},w)}function M(w,D){if(c!==w)return Ws(8,{from:D,to:w})}function A(w){return Q(w)}function G(w){return A(ge(S(w),{replace:!0}))}function U(w){const D=w.matched[w.matched.length-1];if(D&&D.redirect){const{redirect:N}=D;let B=typeof N=="function"?N(w):N;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=S(B):{path:B},B.params={}),ge({query:w.query,hash:w.hash,params:w.params},B)}}function Q(w,D){const N=c=I(w),B=l.value,ae=w.state,Ie=w.force,te=w.replace===!0,h=U(N);if(h)return Q(ge(S(h),{state:ae,force:Ie,replace:te}),D||N);const m=N;m.redirectedFrom=D;let y;return!Ie&&lw(s,B,N)&&(y=Ws(16,{to:m,from:B}),Mn(B,B,!0,!1)),(y?Promise.resolve(y):W(m,B)).catch(b=>an(b)?an(b,2)?b:ht(b):me(b,m,B)).then(b=>{if(b){if(an(b,2))return Q(ge(S(b.to),{state:ae,force:Ie,replace:te}),D||m)}else b=Ae(m,B,!0,te,ae);return V(m,B,b),b})}function P(w,D){const N=M(w,D);return N?Promise.reject(N):Promise.resolve()}function W(w,D){let N;const[B,ae,Ie]=aE(w,D);N=Aa(B.reverse(),"beforeRouteLeave",w,D);for(const h of B)h.leaveGuards.forEach(m=>{N.push(un(m,w,D))});const te=P.bind(null,w,D);return N.push(te),vs(N).then(()=>{N=[];for(const h of i.list())N.push(un(h,w,D));return N.push(te),vs(N)}).then(()=>{N=Aa(ae,"beforeRouteUpdate",w,D);for(const h of ae)h.updateGuards.forEach(m=>{N.push(un(m,w,D))});return N.push(te),vs(N)}).then(()=>{N=[];for(const h of w.matched)if(h.beforeEnter&&!D.matched.includes(h))if(Array.isArray(h.beforeEnter))for(const m of h.beforeEnter)N.push(un(m,w,D));else N.push(un(h.beforeEnter,w,D));return N.push(te),vs(N)}).then(()=>(w.matched.forEach(h=>h.enterCallbacks={}),N=Aa(Ie,"beforeRouteEnter",w,D),N.push(te),vs(N))).then(()=>{N=[];for(const h of o.list())N.push(un(h,w,D));return N.push(te),vs(N)}).catch(h=>an(h,8)?h:Promise.reject(h))}function V(w,D,N){for(const B of a.list())B(w,D,N)}function Ae(w,D,N,B,ae){const Ie=M(w,D);if(Ie)return Ie;const te=D===on,h=ws?history.state:{};N&&(B||te?r.replace(w.fullPath,ge({scroll:te&&h&&h.scroll},ae)):r.push(w.fullPath,ae)),l.value=w,Mn(w,D,N,te),ht()}let F;function ye(){F=r.listen((w,D,N)=>{const B=I(w),ae=U(B);if(ae){Q(ge(ae,{replace:!0}),B).catch(Pr);return}c=B;const Ie=l.value;ws&&mw(Nd(Ie.fullPath,N.delta),qo()),W(B,Ie).catch(te=>an(te,12)?te:an(te,2)?(Q(te.to,B).then(h=>{an(h,20)&&!N.delta&&N.type===zr.pop&&r.go(-1,!1)}).catch(Pr),Promise.reject()):(N.delta&&r.go(-N.delta,!1),me(te,B,Ie))).then(te=>{te=te||Ae(B,Ie,!1),te&&(N.delta?r.go(-N.delta,!1):N.type===zr.pop&&an(te,20)&&r.go(-1,!1)),V(B,Ie,te)}).catch(Pr)})}let $e=gr(),tn=gr(),Ee;function me(w,D,N){ht(w);const B=tn.list();return B.length?B.forEach(ae=>ae(w,D,N)):console.error(w),Promise.reject(w)}function ue(){return Ee&&l.value!==on?Promise.resolve():new Promise((w,D)=>{$e.add([w,D])})}function ht(w){return Ee||(Ee=!w,ye(),$e.list().forEach(([D,N])=>w?N(w):D()),$e.reset()),w}function Mn(w,D,N,B){const{scrollBehavior:ae}=t;if(!ws||!ae)return Promise.resolve();const Ie=!N&&_w(Nd(w.fullPath,0))||(B||!N)&&history.state&&history.state.scroll||null;return Et().then(()=>ae(w,D,Ie)).then(te=>te&&gw(te)).catch(te=>me(te,w,D))}const pt=w=>r.go(w);let Ye;const ps=new Set;return{currentRoute:l,addRoute:p,removeRoute:g,hasRoute:v,getRoutes:_,resolve:I,options:t,push:A,replace:G,go:pt,back:()=>pt(-1),forward:()=>pt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:tn.add,isReady:ue,install(w){const D=this;w.component("RouterLink",tE),w.component("RouterView",iE),w.config.globalProperties.$router=D,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>Rs(l)}),ws&&!Ye&&l.value===on&&(Ye=!0,A(r.location).catch(ae=>{}));const N={};for(const ae in on)N[ae]=ce(()=>l.value[ae]);w.provide(zo,D),w.provide(Tp,Zs(N)),w.provide(hl,l);const B=w.unmount;ps.add(w),w.unmount=function(){ps.delete(w),ps.size<1&&(c=on,F&&F(),l.value=on,Ye=!1,Ee=!1),B()}}}}function vs(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function aE(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Hs(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Hs(c,l))||r.push(l))}return[n,s,r]}function Lp(){return Ze(zo)}const Nr=/^[a-z0-9]+(-[a-z0-9]+)*$/,Go=(t,e,n,s="")=>{const r=t.split(":");if(t.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;s=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const a=r.pop(),l=r.pop(),c={provider:r.length>0?r[0]:s,prefix:l,name:a};return e&&!$i(c)?null:c}const i=r[0],o=i.split("-");if(o.length>1){const a={provider:s,prefix:o.shift(),name:o.join("-")};return e&&!$i(a)?null:a}if(n&&s===""){const a={provider:s,prefix:"",name:i};return e&&!$i(a,n)?null:a}return null},$i=(t,e)=>t?!!((t.provider===""||t.provider.match(Nr))&&(e&&t.prefix===""||t.prefix.match(Nr))&&t.name.match(Nr)):!1,Fp=Object.freeze({left:0,top:0,width:16,height:16}),ro=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Yo=Object.freeze({...Fp,...ro}),ml=Object.freeze({...Yo,body:"",hidden:!1});function lE(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const s=((t.rotate||0)+(e.rotate||0))%4;return s&&(n.rotate=s),n}function Wd(t,e){const n=lE(t,e);for(const s in ml)s in ro?s in t&&!(s in n)&&(n[s]=ro[s]):s in e?n[s]=e[s]:s in t&&(n[s]=t[s]);return n}function cE(t,e){const n=t.icons,s=t.aliases||Object.create(null),r=Object.create(null);function i(o){if(n[o])return r[o]=[];if(!(o in r)){r[o]=null;const a=s[o]&&s[o].parent,l=a&&i(a);l&&(r[o]=[a].concat(l))}return r[o]}return(e||Object.keys(n).concat(Object.keys(s))).forEach(i),r}function uE(t,e,n){const s=t.icons,r=t.aliases||Object.create(null);let i={};function o(a){i=Wd(s[a]||r[a],i)}return o(e),n.forEach(o),Wd(t,i)}function Up(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(r=>{e(r,null),n.push(r)});const s=cE(t);for(const r in s){const i=s[r];i&&(e(r,uE(t,r,i)),n.push(r))}return n}const dE={provider:"",aliases:{},not_found:{},...Fp};function Pa(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function $p(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!Pa(t,dE))return null;const n=e.icons;for(const r in n){const i=n[r];if(!r.match(Nr)||typeof i.body!="string"||!Pa(i,ml))return null}const s=e.aliases||Object.create(null);for(const r in s){const i=s[r],o=i.parent;if(!r.match(Nr)||typeof o!="string"||!n[o]&&!s[o]||!Pa(i,ml))return null}return e}const Vd=Object.create(null);function fE(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function es(t,e){const n=Vd[t]||(Vd[t]=Object.create(null));return n[e]||(n[e]=fE(t,e))}function Ic(t,e){return $p(e)?Up(e,(n,s)=>{s?t.icons[n]=s:t.missing.add(n)}):[]}function hE(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let qr=!1;function Bp(t){return typeof t=="boolean"&&(qr=t),qr}function pE(t){const e=typeof t=="string"?Go(t,!0,qr):t;if(e){const n=es(e.provider,e.prefix),s=e.name;return n.icons[s]||(n.missing.has(s)?null:void 0)}}function gE(t,e){const n=Go(t,!0,qr);if(!n)return!1;const s=es(n.provider,n.prefix);return hE(s,n.name,e)}function mE(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),qr&&!e&&!t.prefix){let r=!1;return $p(t)&&(t.prefix="",Up(t,(i,o)=>{o&&gE(i,o)&&(r=!0)})),r}const n=t.prefix;if(!$i({provider:e,prefix:n,name:"a"}))return!1;const s=es(e,n);return!!Ic(s,t)}const jp=Object.freeze({width:null,height:null}),Hp=Object.freeze({...jp,...ro}),_E=/(-?[0-9.]*[0-9]+[0-9.]*)/g,vE=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Kd(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const s=t.split(_E);if(s===null||!s.length)return t;const r=[];let i=s.shift(),o=vE.test(i);for(;;){if(o){const a=parseFloat(i);isNaN(a)?r.push(i):r.push(Math.ceil(a*e*n)/n)}else r.push(i);if(i=s.shift(),i===void 0)return r.join("");o=!o}}const yE=t=>t==="unset"||t==="undefined"||t==="none";function bE(t,e){const n={...Yo,...t},s={...Hp,...e},r={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,s].forEach(g=>{const _=[],v=g.hFlip,I=g.vFlip;let S=g.rotate;v?I?S+=2:(_.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),_.push("scale(-1 1)"),r.top=r.left=0):I&&(_.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),_.push("scale(1 -1)"),r.top=r.left=0);let M;switch(S<0&&(S-=Math.floor(S/4)*4),S=S%4,S){case 1:M=r.height/2+r.top,_.unshift("rotate(90 "+M.toString()+" "+M.toString()+")");break;case 2:_.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:M=r.width/2+r.left,_.unshift("rotate(-90 "+M.toString()+" "+M.toString()+")");break}S%2===1&&(r.left!==r.top&&(M=r.left,r.left=r.top,r.top=M),r.width!==r.height&&(M=r.width,r.width=r.height,r.height=M)),_.length&&(i='<g transform="'+_.join(" ")+'">'+i+"</g>")});const o=s.width,a=s.height,l=r.width,c=r.height;let u,d;o===null?(d=a===null?"1em":a==="auto"?c:a,u=Kd(d,l/c)):(u=o==="auto"?l:o,d=a===null?Kd(u,c/l):a==="auto"?c:a);const f={},p=(g,_)=>{yE(_)||(f[g]=_.toString())};return p("width",u),p("height",d),f.viewBox=r.left.toString()+" "+r.top.toString()+" "+l.toString()+" "+c.toString(),{attributes:f,body:i}}const wE=/\sid="(\S+)"/g,EE="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let IE=0;function CE(t,e=EE){const n=[];let s;for(;s=wE.exec(t);)n.push(s[1]);if(!n.length)return t;const r="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const o=typeof e=="function"?e(i):e+(IE++).toString(),a=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+o+r+"$3")}),t=t.replace(new RegExp(r,"g"),""),t}const _l=Object.create(null);function TE(t,e){_l[t]=e}function vl(t){return _l[t]||_l[""]}function Cc(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const Tc=Object.create(null),mr=["https://api.simplesvg.com","https://api.unisvg.com"],Bi=[];for(;mr.length>0;)mr.length===1||Math.random()>.5?Bi.push(mr.shift()):Bi.push(mr.pop());Tc[""]=Cc({resources:["https://api.iconify.design"].concat(Bi)});function SE(t,e){const n=Cc(e);return n===null?!1:(Tc[t]=n,!0)}function Sc(t){return Tc[t]}const kE=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let zd=kE();function RE(t,e){const n=Sc(t);if(!n)return 0;let s;if(!n.maxURL)s=0;else{let r=0;n.resources.forEach(o=>{r=Math.max(r,o.length)});const i=e+".json?icons=";s=n.maxURL-r-n.path.length-i.length}return s}function AE(t){return t===404}const PE=(t,e,n)=>{const s=[],r=RE(t,e),i="icons";let o={type:i,provider:t,prefix:e,icons:[]},a=0;return n.forEach((l,c)=>{a+=l.length+1,a>=r&&c>0&&(s.push(o),o={type:i,provider:t,prefix:e,icons:[]},a=l.length),o.icons.push(l)}),s.push(o),s};function xE(t){if(typeof t=="string"){const e=Sc(t);if(e)return e.path}return"/"}const NE=(t,e,n)=>{if(!zd){n("abort",424);return}let s=xE(e.provider);switch(e.type){case"icons":{const i=e.prefix,a=e.icons.join(","),l=new URLSearchParams({icons:a});s+=i+".json?"+l.toString();break}case"custom":{const i=e.uri;s+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let r=503;zd(t+s).then(i=>{const o=i.status;if(o!==200){setTimeout(()=>{n(AE(o)?"abort":"next",o)});return}return r=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",r)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",r)})},OE={prepare:PE,send:NE};function ME(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((r,i)=>r.provider!==i.provider?r.provider.localeCompare(i.provider):r.prefix!==i.prefix?r.prefix.localeCompare(i.prefix):r.name.localeCompare(i.name));let s={provider:"",prefix:"",name:""};return t.forEach(r=>{if(s.name===r.name&&s.prefix===r.prefix&&s.provider===r.provider)return;s=r;const i=r.provider,o=r.prefix,a=r.name,l=n[i]||(n[i]=Object.create(null)),c=l[o]||(l[o]=es(i,o));let u;a in c.icons?u=e.loaded:o===""||c.missing.has(a)?u=e.missing:u=e.pending;const d={provider:i,prefix:o,name:a};u.push(d)}),e}function Wp(t,e){t.forEach(n=>{const s=n.loaderCallbacks;s&&(n.loaderCallbacks=s.filter(r=>r.id!==e))})}function DE(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const s=t.provider,r=t.prefix;e.forEach(i=>{const o=i.icons,a=o.pending.length;o.pending=o.pending.filter(l=>{if(l.prefix!==r)return!0;const c=l.name;if(t.icons[c])o.loaded.push({provider:s,prefix:r,name:c});else if(t.missing.has(c))o.missing.push({provider:s,prefix:r,name:c});else return n=!0,!0;return!1}),o.pending.length!==a&&(n||Wp([t],i.id),i.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),i.abort))})}))}let LE=0;function FE(t,e,n){const s=LE++,r=Wp.bind(null,n,s);if(!e.pending.length)return r;const i={id:s,icons:e,callback:t,abort:r};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(i)}),r}function UE(t,e=!0,n=!1){const s=[];return t.forEach(r=>{const i=typeof r=="string"?Go(r,e,n):r;i&&s.push(i)}),s}var $E={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function BE(t,e,n,s){const r=t.resources.length,i=t.random?Math.floor(Math.random()*r):t.index;let o;if(t.random){let U=t.resources.slice(0);for(o=[];U.length>1;){const Q=Math.floor(Math.random()*U.length);o.push(U[Q]),U=U.slice(0,Q).concat(U.slice(Q+1))}o=o.concat(U)}else o=t.resources.slice(i).concat(t.resources.slice(0,i));const a=Date.now();let l="pending",c=0,u,d=null,f=[],p=[];typeof s=="function"&&p.push(s);function g(){d&&(clearTimeout(d),d=null)}function _(){l==="pending"&&(l="aborted"),g(),f.forEach(U=>{U.status==="pending"&&(U.status="aborted")}),f=[]}function v(U,Q){Q&&(p=[]),typeof U=="function"&&p.push(U)}function I(){return{startTime:a,payload:e,status:l,queriesSent:c,queriesPending:f.length,subscribe:v,abort:_}}function S(){l="failed",p.forEach(U=>{U(void 0,u)})}function M(){f.forEach(U=>{U.status==="pending"&&(U.status="aborted")}),f=[]}function A(U,Q,P){const W=Q!=="success";switch(f=f.filter(V=>V!==U),l){case"pending":break;case"failed":if(W||!t.dataAfterTimeout)return;break;default:return}if(Q==="abort"){u=P,S();return}if(W){u=P,f.length||(o.length?G():S());return}if(g(),M(),!t.random){const V=t.resources.indexOf(U.resource);V!==-1&&V!==t.index&&(t.index=V)}l="completed",p.forEach(V=>{V(P)})}function G(){if(l!=="pending")return;g();const U=o.shift();if(U===void 0){if(f.length){d=setTimeout(()=>{g(),l==="pending"&&(M(),S())},t.timeout);return}S();return}const Q={status:"pending",resource:U,callback:(P,W)=>{A(Q,P,W)}};f.push(Q),c++,d=setTimeout(G,t.rotate),n(U,e,Q.callback)}return setTimeout(G),I}function Vp(t){const e={...$E,...t};let n=[];function s(){n=n.filter(a=>a().status==="pending")}function r(a,l,c){const u=BE(e,a,l,(d,f)=>{s(),c&&c(d,f)});return n.push(u),u}function i(a){return n.find(l=>a(l))||null}return{query:r,find:i,setIndex:a=>{e.index=a},getIndex:()=>e.index,cleanup:s}}function qd(){}const xa=Object.create(null);function jE(t){if(!xa[t]){const e=Sc(t);if(!e)return;const n=Vp(e),s={config:e,redundancy:n};xa[t]=s}return xa[t]}function HE(t,e,n){let s,r;if(typeof t=="string"){const i=vl(t);if(!i)return n(void 0,424),qd;r=i.send;const o=jE(t);o&&(s=o.redundancy)}else{const i=Cc(t);if(i){s=Vp(i);const o=t.resources?t.resources[0]:"",a=vl(o);a&&(r=a.send)}}return!s||!r?(n(void 0,424),qd):s.query(e,r,n)().abort}const Gd="iconify2",Gr="iconify",Kp=Gr+"-count",Yd=Gr+"-version",zp=36e5,WE=168;function yl(t,e){try{return t.getItem(e)}catch{}}function kc(t,e,n){try{return t.setItem(e,n),!0}catch{}}function Qd(t,e){try{t.removeItem(e)}catch{}}function bl(t,e){return kc(t,Kp,e.toString())}function wl(t){return parseInt(yl(t,Kp))||0}const Qo={local:!0,session:!0},qp={local:new Set,session:new Set};let Rc=!1;function VE(t){Rc=t}let Ai=typeof window>"u"?{}:window;function Gp(t){const e=t+"Storage";try{if(Ai&&Ai[e]&&typeof Ai[e].length=="number")return Ai[e]}catch{}Qo[t]=!1}function Yp(t,e){const n=Gp(t);if(!n)return;const s=yl(n,Yd);if(s!==Gd){if(s){const a=wl(n);for(let l=0;l<a;l++)Qd(n,Gr+l.toString())}kc(n,Yd,Gd),bl(n,0);return}const r=Math.floor(Date.now()/zp)-WE,i=a=>{const l=Gr+a.toString(),c=yl(n,l);if(typeof c=="string"){try{const u=JSON.parse(c);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>r&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&e(u,a))return!0}catch{}Qd(n,l)}};let o=wl(n);for(let a=o-1;a>=0;a--)i(a)||(a===o-1?(o--,bl(n,o)):qp[t].add(a))}function Qp(){if(!Rc){VE(!0);for(const t in Qo)Yp(t,e=>{const n=e.data,s=e.provider,r=n.prefix,i=es(s,r);if(!Ic(i,n).length)return!1;const o=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,o):o,!0})}}function KE(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const s in Qo)Yp(s,r=>{const i=r.data;return r.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===e});return!0}function zE(t,e){Rc||Qp();function n(s){let r;if(!Qo[s]||!(r=Gp(s)))return;const i=qp[s];let o;if(i.size)i.delete(o=Array.from(i).shift());else if(o=wl(r),!bl(r,o+1))return;const a={cached:Math.floor(Date.now()/zp),provider:t.provider,data:e};return kc(r,Gr+o.toString(),JSON.stringify(a))}e.lastModified&&!KE(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function Jd(){}function qE(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,DE(t)}))}function GE(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:s}=t,r=t.iconsToLoad;delete t.iconsToLoad;let i;if(!r||!(i=vl(n)))return;i.prepare(n,s,r).forEach(a=>{HE(n,a,l=>{if(typeof l!="object")a.icons.forEach(c=>{t.missing.add(c)});else try{const c=Ic(t,l);if(!c.length)return;const u=t.pendingIcons;u&&c.forEach(d=>{u.delete(d)}),zE(t,l)}catch(c){console.error(c)}qE(t)})})}))}const YE=(t,e)=>{const n=UE(t,!0,Bp()),s=ME(n);if(!s.pending.length){let l=!0;return e&&setTimeout(()=>{l&&e(s.loaded,s.missing,s.pending,Jd)}),()=>{l=!1}}const r=Object.create(null),i=[];let o,a;return s.pending.forEach(l=>{const{provider:c,prefix:u}=l;if(u===a&&c===o)return;o=c,a=u,i.push(es(c,u));const d=r[c]||(r[c]=Object.create(null));d[u]||(d[u]=[])}),s.pending.forEach(l=>{const{provider:c,prefix:u,name:d}=l,f=es(c,u),p=f.pendingIcons||(f.pendingIcons=new Set);p.has(d)||(p.add(d),r[c][u].push(d))}),i.forEach(l=>{const{provider:c,prefix:u}=l;r[c][u].length&&GE(l,r[c][u])}),e?FE(e,s,i):Jd};function QE(t,e){const n={...t};for(const s in e){const r=e[s],i=typeof r;s in jp?(r===null||r&&(i==="string"||i==="number"))&&(n[s]=r):i===typeof n[s]&&(n[s]=s==="rotate"?r%4:r)}return n}const JE=/[\s,]+/;function XE(t,e){e.split(JE).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function ZE(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function s(r){for(;r<0;)r+=4;return r%4}if(n===""){const r=parseInt(t);return isNaN(r)?0:s(r)}else if(n!==t){let r=0;switch(n){case"%":r=25;break;case"deg":r=90}if(r){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/r,i%1===0?s(i):0)}}return e}function eI(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in e)n+=" "+s+'="'+e[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function tI(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function nI(t){return"data:image/svg+xml,"+tI(t)}function sI(t){return'url("'+nI(t)+'")'}const Xd={...Hp,inline:!1},rI={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},iI={display:"inline-block"},El={backgroundColor:"currentColor"},Jp={backgroundColor:"transparent"},Zd={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},ef={webkitMask:El,mask:El,background:Jp};for(const t in ef){const e=ef[t];for(const n in Zd)e[t+n]=Zd[n]}const ji={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";ji[t+"-flip"]=e,ji[t.slice(0,1)+"-flip"]=e,ji[t+"Flip"]=e});function tf(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const nf=(t,e)=>{const n=QE(Xd,e),s={...rI},r=e.mode||"svg",i={},o=e.style,a=typeof o=="object"&&!(o instanceof Array)?o:{};for(let _ in e){const v=e[_];if(v!==void 0)switch(_){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[_]=v===!0||v==="true"||v===1;break;case"flip":typeof v=="string"&&XE(n,v);break;case"color":i.color=v;break;case"rotate":typeof v=="string"?n[_]=ZE(v):typeof v=="number"&&(n[_]=v);break;case"ariaHidden":case"aria-hidden":v!==!0&&v!=="true"&&delete s["aria-hidden"];break;default:{const I=ji[_];I?(v===!0||v==="true"||v===1)&&(n[I]=!0):Xd[_]===void 0&&(s[_]=v)}}}const l=bE(t,n),c=l.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),r==="svg"){s.style={...i,...a},Object.assign(s,c);let _=0,v=e.id;return typeof v=="string"&&(v=v.replace(/-/g,"_")),s.innerHTML=CE(l.body,v?()=>v+"ID"+_++:"iconifyVue"),Tn("svg",s)}const{body:u,width:d,height:f}=t,p=r==="mask"||(r==="bg"?!1:u.indexOf("currentColor")!==-1),g=eI(u,{...c,width:d+"",height:f+""});return s.style={...i,"--svg":sI(g),width:tf(c.width),height:tf(c.height),...iI,...p?El:Jp,...a},Tn("span",s)};Bp(!0);TE("",OE);if(typeof document<"u"&&typeof window<"u"){Qp();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(s=>{try{(typeof s!="object"||s===null||s instanceof Array||typeof s.icons!="object"||typeof s.prefix!="string"||!mE(s))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const s="IconifyProviders["+n+"] is invalid.";try{const r=e[n];if(typeof r!="object"||!r||r.resources===void 0)continue;SE(n,r)||console.error(s)}catch{console.error(s)}}}}const oI={...Yo,body:""},Ac=Zt({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let n;if(typeof t!="string"||(n=Go(t,!1,!0))===null)return this.abortLoading(),null;const s=pE(n);if(!s)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",s!==null&&(this._loadingIcon={name:t,abort:YE([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t));const r=["iconify"];return n.prefix!==""&&r.push("iconify--"+n.prefix),n.provider!==""&&r.push("iconify--"+n.provider),{data:s,classes:r}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted?this.getIcon(t.icon,t.onLoad):null;if(!e)return nf(oI,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),nf({...Yo,...e.data},n)}}),Lt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},aI={components:{Icon:Ac},setup(t,e){const n=Z("Login"),s=Z("Signup Instead"),r=Z(""),i=Z(""),o=Z(!1);function a(){n.value==="Login"?(n.value="Signup",s.value="Login Instead"):(n.value="Login",s.value="Signup Instead")}function l(){e.emit("emit-user",[r.value,i.value,n.value]),r.value="",i.value=""}function c(){o.value===!1?o.value=!0:o.value===!0&&(o.value=!1)}return{buttonPrimary:n,buttonSecondary:s,switchText:a,emitUser:l,username:r,password:i,showHide:o,showHidePassword:c}}},lI={class:"relative mb-3"},cI=se("label",{for:"email",class:"pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"},"Email address",-1),uI={class:"relative mb-3"},dI=["type"],fI={class:"py-1"},hI=se("label",{for:"showPassword",class:"p-1 dark:text-white"},"Show Password",-1),pI=se("label",{for:"password",class:"pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"},"Password",-1),gI={class:"p-0.5"},mI={class:"p-0.5"};function _I(t,e,n,s,r,i){const o=Ke("base-button");return Be(),Je("form",null,[se("div",lI,[el(se("input",{type:"text",class:"peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]",id:"email",placeholder:"name@example.com","onUpdate:modelValue":e[0]||(e[0]=a=>s.username=a)},null,512),[[to,s.username]]),cI]),se("div",uI,[el(se("input",{type:s.showHide?"text":"password",class:"peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] bg-",id:"password",placeholder:"Password","onUpdate:modelValue":e[1]||(e[1]=a=>s.password=a)},null,8,dI),[[Ib,s.password]]),se("div",fI,[se("input",{type:"checkbox",id:"showPassword",onChange:e[2]||(e[2]=(...a)=>s.showHidePassword&&s.showHidePassword(...a))},null,32),hI]),pI]),se("span",gI,[le(o,{onClick:kd(s.emitUser,["prevent"]),class:"font-semibold"},{default:at(()=>[vn(Gi(s.buttonPrimary),1)]),_:1},8,["onClick"])]),se("span",mI,[le(o,{onClick:kd(s.switchText,["prevent"]),class:"font-semibold"},{default:at(()=>[vn(Gi(s.buttonSecondary),1)]),_:1},8,["onClick"])])])}const vI=Lt(aI,[["render",_I]]);const yI={},bI={class:"text-base text-red-600"};function wI(t,e){return Be(),Je("div",null,[le(bc,{name:"message"},{default:at(()=>[se("p",bI,[jo(t.$slots,"default",{},void 0,!0)])]),_:3})])}const EI=Lt(yI,[["render",wI],["__scopeId","data-v-e583e2cf"]]);/**
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
 */const Xp={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const T=function(t,e){if(!t)throw nr(e)},nr=function(t){return new Error("Firebase Database ("+Xp.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Zp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},II=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Pc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),s.push(n[u],n[d],n[f],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):II(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||d==null)throw new CI;const f=i<<2|a>>4;if(s.push(f),c!==64){const p=a<<4&240|c>>2;if(s.push(p),d!==64){const g=c<<6&192|d;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class CI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eg=function(t){const e=Zp(t);return Pc.encodeByteArray(e,!0)},io=function(t){return eg(t).replace(/\./g,"")},oo=function(t){try{return Pc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function TI(t){return tg(void 0,t)}function tg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!SI(n)||(t[n]=tg(t[n],e[n]));return t}function SI(t){return t!=="__proto__"}/**
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
 */function kI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const RI=()=>kI().__FIREBASE_DEFAULTS__,AI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},PI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&oo(t[1]);return e&&JSON.parse(e)},xc=()=>{try{return RI()||AI()||PI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ng=t=>{var e,n;return(n=(e=xc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},xI=t=>{const e=ng(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},sg=()=>{var t;return(t=xc())===null||t===void 0?void 0:t.config},rg=t=>{var e;return(e=xc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Jo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function NI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[io(JSON.stringify(n)),io(JSON.stringify(o)),a].join(".")}/**
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
 */function qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function OI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function MI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ig(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DI(){const t=qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function og(){return Xp.NODE_ADMIN===!0}function LI(){try{return typeof indexedDB=="object"}catch{return!1}}function FI(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const UI="FirebaseError";class xn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=UI,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ui.prototype.create)}}class ui{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?$I(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new xn(r,a,s)}}function $I(t,e){return t.replace(BI,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const BI=/\{\$([^}]+)}/g;/**
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
 */function Yr(t){return JSON.parse(t)}function xe(t){return JSON.stringify(t)}/**
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
 */const ag=function(t){let e={},n={},s={},r="";try{const i=t.split(".");e=Yr(oo(i[0])||""),n=Yr(oo(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},jI=function(t){const e=ag(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},HI=function(t){const e=ag(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ft(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Vs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Il(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ao(t,e,n){const s={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=e.call(n,t[r],r,t));return s}function lo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(sf(i)&&sf(o)){if(!lo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function sf(t){return t!==null&&typeof t=="object"}/**
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
 */function sr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Tr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Sr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class WI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(f<<1|f>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):d<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const f=(r<<5|r>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=f}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<n;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function VI(t,e){const n=new KI(t,e);return n.subscribe.bind(n)}class KI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");zI(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Na),r.error===void 0&&(r.error=Na),r.complete===void 0&&(r.complete=Na);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Na(){}function Xo(t,e){return`${t} failed: ${e} argument `}/**
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
 */const qI=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Zo=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ge(t){return t&&t._delegate?t._delegate:t}class ts{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const $n="[DEFAULT]";/**
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
 */class GI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Jo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(QI(e))try{this.getOrInitializeService({instanceIdentifier:$n})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=$n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$n){return this.instances.has(e)}getOptions(e=$n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:YI(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=$n){return this.component?this.component.multipleInstances?e:$n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function YI(t){return t===$n?void 0:t}function QI(t){return t.instantiationMode==="EAGER"}/**
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
 */class JI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new GI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const XI={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},ZI=fe.INFO,eC={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},tC=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=eC[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oc{constructor(e){this.name=e,this._logLevel=ZI,this._logHandler=tC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?XI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const nC=(t,e)=>e.some(n=>t instanceof n);let rf,of;function sC(){return rf||(rf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rC(){return of||(of=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lg=new WeakMap,Cl=new WeakMap,cg=new WeakMap,Oa=new WeakMap,Mc=new WeakMap;function iC(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(yn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lg.set(n,t)}).catch(()=>{}),Mc.set(e,t),e}function oC(t){if(Cl.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Cl.set(t,e)}let Tl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Cl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function aC(t){Tl=t(Tl)}function lC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ma(this),e,...n);return cg.set(s,e.sort?e.sort():[e]),yn(s)}:rC().includes(t)?function(...e){return t.apply(Ma(this),e),yn(lg.get(this))}:function(...e){return yn(t.apply(Ma(this),e))}}function cC(t){return typeof t=="function"?lC(t):(t instanceof IDBTransaction&&oC(t),nC(t,sC())?new Proxy(t,Tl):t)}function yn(t){if(t instanceof IDBRequest)return iC(t);if(Oa.has(t))return Oa.get(t);const e=cC(t);return e!==t&&(Oa.set(t,e),Mc.set(e,t)),e}const Ma=t=>Mc.get(t);function uC(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=yn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(yn(o.result),l.oldVersion,l.newVersion,yn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const dC=["get","getKey","getAll","getAllKeys","count"],fC=["put","add","delete","clear"],Da=new Map;function af(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Da.get(e))return Da.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=fC.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||dC.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Da.set(e,i),i}aC(t=>({...t,get:(e,n,s)=>af(e,n)||t.get(e,n,s),has:(e,n)=>!!af(e,n)||t.has(e,n)}));/**
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
 */class hC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pC(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function pC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sl="@firebase/app",lf="0.11.1";/**
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
 */const Qt=new Oc("@firebase/app"),gC="@firebase/app-compat",mC="@firebase/analytics-compat",_C="@firebase/analytics",vC="@firebase/app-check-compat",yC="@firebase/app-check",bC="@firebase/auth",wC="@firebase/auth-compat",EC="@firebase/database",IC="@firebase/data-connect",CC="@firebase/database-compat",TC="@firebase/functions",SC="@firebase/functions-compat",kC="@firebase/installations",RC="@firebase/installations-compat",AC="@firebase/messaging",PC="@firebase/messaging-compat",xC="@firebase/performance",NC="@firebase/performance-compat",OC="@firebase/remote-config",MC="@firebase/remote-config-compat",DC="@firebase/storage",LC="@firebase/storage-compat",FC="@firebase/firestore",UC="@firebase/vertexai",$C="@firebase/firestore-compat",BC="firebase",jC="11.3.1";/**
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
 */const kl="[DEFAULT]",HC={[Sl]:"fire-core",[gC]:"fire-core-compat",[_C]:"fire-analytics",[mC]:"fire-analytics-compat",[yC]:"fire-app-check",[vC]:"fire-app-check-compat",[bC]:"fire-auth",[wC]:"fire-auth-compat",[EC]:"fire-rtdb",[IC]:"fire-data-connect",[CC]:"fire-rtdb-compat",[TC]:"fire-fn",[SC]:"fire-fn-compat",[kC]:"fire-iid",[RC]:"fire-iid-compat",[AC]:"fire-fcm",[PC]:"fire-fcm-compat",[xC]:"fire-perf",[NC]:"fire-perf-compat",[OC]:"fire-rc",[MC]:"fire-rc-compat",[DC]:"fire-gcs",[LC]:"fire-gcs-compat",[FC]:"fire-fst",[$C]:"fire-fst-compat",[UC]:"fire-vertex","fire-js":"fire-js",[BC]:"fire-js-all"};/**
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
 */const co=new Map,WC=new Map,Rl=new Map;function cf(t,e){try{t.container.addComponent(e)}catch(n){Qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ks(t){const e=t.name;if(Rl.has(e))return Qt.debug(`There were multiple attempts to register component ${e}.`),!1;Rl.set(e,t);for(const n of co.values())cf(n,t);for(const n of WC.values())cf(n,t);return!0}function Dc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ut(t){return t==null?!1:t.settings!==void 0}/**
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
 */const VC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bn=new ui("app","Firebase",VC);/**
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
 */class KC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ts("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bn.create("app-deleted",{appName:this._name})}}/**
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
 */const rr=jC;function Lc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:kl,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw bn.create("bad-app-name",{appName:String(r)});if(n||(n=sg()),!n)throw bn.create("no-options");const i=co.get(r);if(i){if(lo(n,i.options)&&lo(s,i.config))return i;throw bn.create("duplicate-app",{appName:r})}const o=new JI(r);for(const l of Rl.values())o.addComponent(l);const a=new KC(n,s,o);return co.set(r,a),a}function ug(t=kl){const e=co.get(t);if(!e&&t===kl&&sg())return Lc();if(!e)throw bn.create("no-app",{appName:t});return e}function wn(t,e,n){var s;let r=(s=HC[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qt.warn(a.join(" "));return}Ks(new ts(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const zC="firebase-heartbeat-database",qC=1,Qr="firebase-heartbeat-store";let La=null;function dg(){return La||(La=uC(zC,qC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qr)}catch(n){console.warn(n)}}}}).catch(t=>{throw bn.create("idb-open",{originalErrorMessage:t.message})})),La}async function GC(t){try{const n=(await dg()).transaction(Qr),s=await n.objectStore(Qr).get(fg(t));return await n.done,s}catch(e){if(e instanceof xn)Qt.warn(e.message);else{const n=bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qt.warn(n.message)}}}async function uf(t,e){try{const s=(await dg()).transaction(Qr,"readwrite");await s.objectStore(Qr).put(e,fg(t)),await s.done}catch(n){if(n instanceof xn)Qt.warn(n.message);else{const s=bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qt.warn(s.message)}}}function fg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const YC=1024,QC=30;class JC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ZC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=df();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>QC){const o=eT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Qt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=df(),{heartbeatsToSend:s,unsentEntries:r}=XC(this._heartbeatsCache.heartbeats),i=io(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Qt.warn(n),""}}}function df(){return new Date().toISOString().substring(0,10)}function XC(t,e=YC){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ff(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ff(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ZC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return LI()?FI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await GC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return uf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return uf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ff(t){return io(JSON.stringify({version:2,heartbeats:t})).length}function eT(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function tT(t){Ks(new ts("platform-logger",e=>new hC(e),"PRIVATE")),Ks(new ts("heartbeat",e=>new JC(e),"PRIVATE")),wn(Sl,lf,t),wn(Sl,lf,"esm2017"),wn("fire-js","")}tT("");function Fc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function hg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nT=hg,pg=new ui("auth","Firebase",hg());/**
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
 */const uo=new Oc("@firebase/auth");function sT(t,...e){uo.logLevel<=fe.WARN&&uo.warn(`Auth (${rr}): ${t}`,...e)}function Hi(t,...e){uo.logLevel<=fe.ERROR&&uo.error(`Auth (${rr}): ${t}`,...e)}/**
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
 */function Ct(t,...e){throw Uc(t,...e)}function Nt(t,...e){return Uc(t,...e)}function gg(t,e,n){const s=Object.assign(Object.assign({},nT()),{[e]:n});return new ui("auth","Firebase",s).create(e,{appName:t.name})}function zt(t){return gg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Uc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return pg.create(t,...e)}function z(t,e,...n){if(!t)throw Uc(e,...n)}function Ht(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Hi(e),new Error(e)}function Jt(t,e){t||Ht(e)}/**
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
 */function Al(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function rT(){return hf()==="http:"||hf()==="https:"}function hf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function iT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rT()||MI()||"connection"in navigator)?navigator.onLine:!0}function oT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class di{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jt(n>e,"Short delay should be less than long delay!"),this.isMobile=Nc()||ig()}get(){return iT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $c(t,e){Jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class mg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const aT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lT=new di(3e4,6e4);function Nn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function On(t,e,n,s,r={}){return _g(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=sr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},i);return OI()||(c.referrerPolicy="no-referrer"),mg.fetch()(vg(t,t.config.apiHost,n,a),c)})}async function _g(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},aT),e);try{const r=new uT(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Pi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Pi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Pi(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw gg(t,u,c);Ct(t,u)}}catch(r){if(r instanceof xn)throw r;Ct(t,"network-request-failed",{message:String(r)})}}async function fi(t,e,n,s,r={}){const i=await On(t,e,n,s,r);return"mfaPendingCredential"in i&&Ct(t,"multi-factor-auth-required",{_serverResponse:i}),i}function vg(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?$c(t.config,r):`${t.config.apiScheme}://${r}`}function cT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class uT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Nt(this.auth,"network-request-failed")),lT.get())})}}function Pi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Nt(t,e,s);return r.customData._tokenResponse=n,r}function pf(t){return t!==void 0&&t.enterprise!==void 0}class dT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return cT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function fT(t,e){return On(t,"GET","/v2/recaptchaConfig",Nn(t,e))}/**
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
 */async function hT(t,e){return On(t,"POST","/v1/accounts:delete",e)}async function yg(t,e){return On(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Or(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pT(t,e=!1){const n=Ge(t),s=await n.getIdToken(e),r=Bc(s);z(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Or(Fa(r.auth_time)),issuedAtTime:Or(Fa(r.iat)),expirationTime:Or(Fa(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Fa(t){return Number(t)*1e3}function Bc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Hi("JWT malformed, contained fewer than 3 sections"),null;try{const r=oo(n);return r?JSON.parse(r):(Hi("Failed to decode base64 JWT payload"),null)}catch(r){return Hi("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function gf(t){const e=Bc(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Jr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof xn&&gT(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function gT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class mT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Pl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Or(this.lastLoginAt),this.creationTime=Or(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Jr(t,yg(n,{idToken:s}));z(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?bg(i.providerUserInfo):[],a=vT(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Pl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function _T(t){const e=Ge(t);await fo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vT(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function bg(t){return t.map(e=>{var{providerId:n}=e,s=Fc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function yT(t,e){const n=await _g(t,{},async()=>{const s=sr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=vg(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",mg.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function bT(t,e){return On(t,"POST","/v2/accounts:revokeToken",Nn(t,e))}/**
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
 */class Ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){z(e.length!==0,"internal-error");const n=gf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await yT(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Ns;return s&&(z(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(z(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ns,this.toJSON())}_performRefresh(){return Ht("not implemented")}}/**
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
 */function ln(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Fc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Pl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Jr(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pT(this,e)}reload(){return _T(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await fo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ut(this.auth.app))return Promise.reject(zt(this.auth));const e=await this.getIdToken();return await Jr(this,hT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,S=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:M,emailVerified:A,isAnonymous:G,providerData:U,stsTokenManager:Q}=n;z(M&&Q,e,"internal-error");const P=Ns.fromJSON(this.name,Q);z(typeof M=="string",e,"internal-error"),ln(d,e.name),ln(f,e.name),z(typeof A=="boolean",e,"internal-error"),z(typeof G=="boolean",e,"internal-error"),ln(p,e.name),ln(g,e.name),ln(_,e.name),ln(v,e.name),ln(I,e.name),ln(S,e.name);const W=new Wt({uid:M,auth:e,email:f,emailVerified:A,displayName:d,isAnonymous:G,photoURL:g,phoneNumber:p,tenantId:_,stsTokenManager:P,createdAt:I,lastLoginAt:S});return U&&Array.isArray(U)&&(W.providerData=U.map(V=>Object.assign({},V))),v&&(W._redirectEventId=v),W}static async _fromIdTokenResponse(e,n,s=!1){const r=new Ns;r.updateFromServerResponse(n);const i=new Wt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await fo(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];z(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?bg(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new Ns;a.updateFromIdToken(s);const l=new Wt({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Pl(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
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
 */const mf=new Map;function Vt(t){Jt(t instanceof Function,"Expected a class definition");let e=mf.get(t);return e?(Jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,mf.set(t,e),e)}/**
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
 */class wg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wg.type="NONE";const _f=wg;/**
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
 */function Wi(t,e,n){return`firebase:${t}:${e}:${n}`}class Os{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Wi(this.userKey,r.apiKey,i),this.fullPersistenceKey=Wi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Wt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Os(Vt(_f),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=r[0]||Vt(_f);const o=Wi(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Wt._fromJSON(e,u);c!==i&&(a=d),i=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Os(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Os(i,e,s))}}/**
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
 */function vf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Tg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Eg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(kg(e))return"Blackberry";if(Rg(e))return"Webos";if(Ig(e))return"Safari";if((e.includes("chrome/")||Cg(e))&&!e.includes("edge/"))return"Chrome";if(Sg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Eg(t=qe()){return/firefox\//i.test(t)}function Ig(t=qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cg(t=qe()){return/crios\//i.test(t)}function Tg(t=qe()){return/iemobile/i.test(t)}function Sg(t=qe()){return/android/i.test(t)}function kg(t=qe()){return/blackberry/i.test(t)}function Rg(t=qe()){return/webos/i.test(t)}function jc(t=qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wT(t=qe()){var e;return jc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ET(){return DI()&&document.documentMode===10}function Ag(t=qe()){return jc(t)||Sg(t)||Rg(t)||kg(t)||/windows phone/i.test(t)||Tg(t)}/**
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
 */function Pg(t,e=[]){let n;switch(t){case"Browser":n=vf(qe());break;case"Worker":n=`${vf(qe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${rr}/${s}`}/**
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
 */class IT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function CT(t,e={}){return On(t,"GET","/v2/passwordPolicy",Nn(t,e))}/**
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
 */const TT=6;class ST{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:TT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class kT{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yf(this),this.idTokenSubscription=new yf(this),this.beforeStateQueue=new IT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Os.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await yg(this,{idToken:e}),s=await Wt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ut(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ut(this.app))return Promise.reject(zt(this));const n=e?Ge(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ut(this.app)?Promise.reject(zt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ut(this.app)?Promise.reject(zt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await CT(this),n=new ST(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ui("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await bT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vt(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await Os.create(this,[Vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;if(ut(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&sT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ds(t){return Ge(t)}class yf{constructor(e){this.auth=e,this.observer=null,this.addObserver=VI(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ea={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function RT(t){ea=t}function xg(t){return ea.loadJS(t)}function AT(){return ea.recaptchaEnterpriseScript}function PT(){return ea.gapiScript}function xT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class NT{constructor(){this.enterprise=new OT}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class OT{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const MT="recaptcha-enterprise",Ng="NO_RECAPTCHA";class DT{constructor(e){this.type=MT,this.auth=ds(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{fT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new dT(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(i,o,a){const l=window.grecaptcha;pf(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(Ng)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new NT().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&pf(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=AT();l.length!==0&&(l+=a),xg(l).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function _r(t,e,n,s=!1,r=!1){const i=new DT(t);let o;if(r)o=Ng;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function xl(t,e,n,s,r){var i,o;if(r==="EMAIL_PASSWORD_PROVIDER")if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await _r(t,e,n,n==="getOobCode");return s(t,a)}else return s(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await _r(t,e,n,n==="getOobCode");return s(t,l)}else return Promise.reject(a)});else if(r==="PHONE_PROVIDER")if(!((o=t._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await _r(t,e,n);return s(t,a).catch(async l=>{var c;if(((c=t._getRecaptchaConfig())===null||c===void 0?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const u=await _r(t,e,n,!1,!0);return s(t,u)}return Promise.reject(l)})}else{const a=await _r(t,e,n,!1,!0);return s(t,a)}else return Promise.reject(r+" provider is not supported.")}/**
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
 */function LT(t,e){const n=Dc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(lo(i,e??{}))return r;Ct(r,"already-initialized")}return n.initialize({options:e})}function FT(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Vt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function UT(t,e,n){const s=ds(t);z(s._canInitEmulator,s,"emulator-config-failed"),z(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Og(e),{host:o,port:a}=$T(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||BT()}function Og(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $T(t){const e=Og(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:bf(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:bf(o)}}}function bf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function BT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Hc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ht("not implemented")}_getIdTokenResponse(e){return Ht("not implemented")}_linkToIdToken(e,n){return Ht("not implemented")}_getReauthenticationResolver(e){return Ht("not implemented")}}async function jT(t,e){return On(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function HT(t,e){return fi(t,"POST","/v1/accounts:signInWithPassword",Nn(t,e))}/**
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
 */async function WT(t,e){return fi(t,"POST","/v1/accounts:signInWithEmailLink",Nn(t,e))}async function VT(t,e){return fi(t,"POST","/v1/accounts:signInWithEmailLink",Nn(t,e))}/**
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
 */class Xr extends Hc{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Xr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Xr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xl(e,n,"signInWithPassword",HT,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return WT(e,{email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xl(e,s,"signUpPassword",jT,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return VT(e,{idToken:n,email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ms(t,e){return fi(t,"POST","/v1/accounts:signInWithIdp",Nn(t,e))}/**
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
 */const KT="http://localhost";class ns extends Hc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Fc(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new ns(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ms(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ms(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ms(e,n)}buildRequest(){const e={requestUri:KT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=sr(n)}return e}}/**
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
 */function zT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qT(t){const e=Tr(Sr(t)).link,n=e?Tr(Sr(e)).deep_link_id:null,s=Tr(Sr(t)).deep_link_id;return(s?Tr(Sr(s)).link:null)||s||n||e||t}class Wc{constructor(e){var n,s,r,i,o,a;const l=Tr(Sr(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,d=zT((r=l.mode)!==null&&r!==void 0?r:null);z(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=qT(e);try{return new Wc(n)}catch{return null}}}/**
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
 */class ir{constructor(){this.providerId=ir.PROVIDER_ID}static credential(e,n){return Xr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Wc.parseLink(n);return z(s,"argument-error"),Xr._fromEmailAndCode(e,s.code,s.tenantId)}}ir.PROVIDER_ID="password";ir.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ir.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Mg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class hi extends Mg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class dn extends hi{constructor(){super("facebook.com")}static credential(e){return ns._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";dn.PROVIDER_ID="facebook.com";/**
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
 */class fn extends hi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ns._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return fn.credential(n,s)}catch{return null}}}fn.GOOGLE_SIGN_IN_METHOD="google.com";fn.PROVIDER_ID="google.com";/**
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
 */class hn extends hi{constructor(){super("github.com")}static credential(e){return ns._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.GITHUB_SIGN_IN_METHOD="github.com";hn.PROVIDER_ID="github.com";/**
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
 */class pn extends hi{constructor(){super("twitter.com")}static credential(e,n){return ns._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return pn.credential(n,s)}catch{return null}}}pn.TWITTER_SIGN_IN_METHOD="twitter.com";pn.PROVIDER_ID="twitter.com";/**
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
 */async function GT(t,e){return fi(t,"POST","/v1/accounts:signUp",Nn(t,e))}/**
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
 */class ss{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Wt._fromIdTokenResponse(e,s,r),o=wf(s);return new ss({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=wf(s);return new ss({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function wf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ho extends xn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,ho.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new ho(e,n,s,r)}}function Dg(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ho._fromErrorAndOperation(t,i,e,s):i})}async function YT(t,e,n=!1){const s=await Jr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ss._forOperation(t,"link",s)}/**
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
 */async function QT(t,e,n=!1){const{auth:s}=t;if(ut(s.app))return Promise.reject(zt(s));const r="reauthenticate";try{const i=await Jr(t,Dg(s,r,e,t),n);z(i.idToken,s,"internal-error");const o=Bc(i.idToken);z(o,s,"internal-error");const{sub:a}=o;return z(t.uid===a,s,"user-mismatch"),ss._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ct(s,"user-mismatch"),i}}/**
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
 */async function Lg(t,e,n=!1){if(ut(t.app))return Promise.reject(zt(t));const s="signIn",r=await Dg(t,s,e),i=await ss._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function JT(t,e){return Lg(ds(t),e)}/**
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
 */async function Fg(t){const e=ds(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function XT(t,e,n){if(ut(t.app))return Promise.reject(zt(t));const s=ds(t),o=await xl(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",GT,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Fg(t),l}),a=await ss._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function ZT(t,e,n){return ut(t.app)?Promise.reject(zt(t)):JT(Ge(t),ir.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Fg(t),s})}function eS(t,e,n,s){return Ge(t).onIdTokenChanged(e,n,s)}function tS(t,e,n){return Ge(t).beforeAuthStateChanged(e,n)}const po="__sak";/**
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
 */class Ug{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(po,"1"),this.storage.removeItem(po),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const nS=1e3,sS=10;class $g extends Ug{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ag(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);ET()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,sS):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},nS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$g.type="LOCAL";const rS=$g;/**
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
 */class Bg extends Ug{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Bg.type="SESSION";const jg=Bg;/**
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
 */function iS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ta{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new ta(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await iS(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ta.receivers=[];/**
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
 */function Vc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class oS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Vc("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ot(){return window}function aS(t){Ot().location.href=t}/**
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
 */function Hg(){return typeof Ot().WorkerGlobalScope<"u"&&typeof Ot().importScripts=="function"}async function lS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function uS(){return Hg()?self:null}/**
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
 */const Wg="firebaseLocalStorageDb",dS=1,go="firebaseLocalStorage",Vg="fbase_key";class pi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function na(t,e){return t.transaction([go],e?"readwrite":"readonly").objectStore(go)}function fS(){const t=indexedDB.deleteDatabase(Wg);return new pi(t).toPromise()}function Nl(){const t=indexedDB.open(Wg,dS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(go,{keyPath:Vg})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(go)?e(s):(s.close(),await fS(),e(await Nl()))})})}async function Ef(t,e,n){const s=na(t,!0).put({[Vg]:e,value:n});return new pi(s).toPromise()}async function hS(t,e){const n=na(t,!1).get(e),s=await new pi(n).toPromise();return s===void 0?null:s.value}function If(t,e){const n=na(t,!0).delete(e);return new pi(n).toPromise()}const pS=800,gS=3;class Kg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>gS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ta._getInstance(uS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await lS(),!this.activeServiceWorker)return;this.sender=new oS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nl();return await Ef(e,po,"1"),await If(e,po),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ef(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>hS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>If(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=na(r,!1).getAll();return new pi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kg.type="LOCAL";const mS=Kg;new di(3e4,6e4);/**
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
 */function _S(t,e){return e?Vt(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Kc extends Hc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ms(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ms(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vS(t){return Lg(t.auth,new Kc(t),t.bypassAuthState)}function yS(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),QT(n,new Kc(t),t.bypassAuthState)}async function bS(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),YT(n,new Kc(t),t.bypassAuthState)}/**
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
 */class zg{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vS;case"linkViaPopup":case"linkViaRedirect":return bS;case"reauthViaPopup":case"reauthViaRedirect":return yS;default:Ct(this.auth,"internal-error")}}resolve(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const wS=new di(2e3,1e4);class Is extends zg{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Is.currentPopupAction&&Is.currentPopupAction.cancel(),Is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Jt(this.filter.length===1,"Popup operations only handle one event");const e=Vc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wS.get())};e()}}Is.currentPopupAction=null;/**
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
 */const ES="pendingRedirect",Vi=new Map;class IS extends zg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Vi.get(this.auth._key());if(!e){try{const s=await CS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Vi.set(this.auth._key(),e)}return this.bypassAuthState||Vi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CS(t,e){const n=kS(e),s=SS(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function TS(t,e){Vi.set(t._key(),e)}function SS(t){return Vt(t._redirectPersistence)}function kS(t){return Wi(ES,t.config.apiKey,t.name)}async function RS(t,e,n=!1){if(ut(t.app))return Promise.reject(zt(t));const s=ds(t),r=_S(s,e),o=await new IS(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const AS=10*60*1e3;class PS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!qg(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Nt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cf(e))}saveEventToCache(e){this.cachedEventUids.add(Cf(e)),this.lastProcessedEventTime=Date.now()}}function Cf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qg(t);default:return!1}}/**
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
 */async function NS(t,e={}){return On(t,"GET","/v1/projects",e)}/**
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
 */const OS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MS=/^https?/;async function DS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await NS(t);for(const n of e)try{if(LS(n))return}catch{}Ct(t,"unauthorized-domain")}function LS(t){const e=Al(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!MS.test(n))return!1;if(OS.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const FS=new di(3e4,6e4);function Tf(){const t=Ot().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function US(t){return new Promise((e,n)=>{var s,r,i;function o(){Tf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tf(),n(Nt(t,"network-request-failed"))},timeout:FS.get()})}if(!((r=(s=Ot().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ot().gapi)===null||i===void 0)&&i.load)o();else{const a=xT("iframefcb");return Ot()[a]=()=>{gapi.load?o():n(Nt(t,"network-request-failed"))},xg(`${PT()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ki=null,e})}let Ki=null;function $S(t){return Ki=Ki||US(t),Ki}/**
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
 */const BS=new di(5e3,15e3),jS="__/auth/iframe",HS="emulator/auth/iframe",WS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KS(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$c(e,HS):`https://${t.config.authDomain}/${jS}`,s={apiKey:e.apiKey,appName:t.name,v:rr},r=VS.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${sr(s).slice(1)}`}async function zS(t){const e=await $S(t),n=Ot().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:KS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WS,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Nt(t,"network-request-failed"),a=Ot().setTimeout(()=>{i(o)},BS.get());function l(){Ot().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const qS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GS=500,YS=600,QS="_blank",JS="http://localhost";class Sf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XS(t,e,n,s=GS,r=YS){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},qS),{width:s.toString(),height:r.toString(),top:i,left:o}),c=qe().toLowerCase();n&&(a=Cg(c)?QS:n),Eg(c)&&(e=e||JS,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[p,g])=>`${f}${p}=${g},`,"");if(wT(c)&&a!=="_self")return ZS(e||"",a),new Sf(null);const d=window.open(e||"",a,u);z(d,t,"popup-blocked");try{d.focus()}catch{}return new Sf(d)}function ZS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const e0="__/auth/handler",t0="emulator/auth/handler",n0=encodeURIComponent("fac");async function kf(t,e,n,s,r,i){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:rr,eventId:r};if(e instanceof Mg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Il(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(i||{}))o[u]=d}if(e instanceof hi){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${n0}=${encodeURIComponent(l)}`:"";return`${s0(t)}?${sr(a).slice(1)}${c}`}function s0({config:t}){return t.emulator?$c(t,t0):`https://${t.authDomain}/${e0}`}/**
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
 */const Ua="webStorageSupport";class r0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jg,this._completeRedirectFn=RS,this._overrideRedirectResult=TS}async _openPopup(e,n,s,r){var i;Jt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await kf(e,n,s,Al(),r);return XS(e,o,Vc())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await kf(e,n,s,Al(),r);return aS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Jt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await zS(e),s=new PS(e);return n.register("authEvent",r=>(z(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ua,{type:Ua},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ua];o!==void 0&&n(!!o),Ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ag()||Ig()||jc()}}const i0=r0;var Rf="@firebase/auth",Af="1.9.0";/**
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
 */class o0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function a0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function l0(t){Ks(new ts("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pg(t)},c=new kT(s,r,i,l);return FT(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ks(new ts("auth-internal",e=>{const n=ds(e.getProvider("auth").getImmediate());return(s=>new o0(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(Rf,Af,a0(t)),wn(Rf,Af,"esm2017")}/**
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
 */const c0=5*60,u0=rg("authIdTokenMaxAge")||c0;let Pf=null;const d0=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>u0)return;const r=n==null?void 0:n.token;Pf!==r&&(Pf=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Zr(t=ug()){const e=Dc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=LT(t,{popupRedirectResolver:i0,persistence:[mS,rS,jg]}),s=rg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=d0(i.toString());tS(n,o,()=>o(n.currentUser)),eS(n,a=>o(a))}}const r=ng("auth");return r&&UT(n,`http://${r}`),n}function f0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}RT({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Nt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",f0().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});l0("Browser");const h0={},p0={class:"relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 shadow-lg lg:py-4 dark:bg-sky-950","data-te-navbar-ref":""};function g0(t,e){return Be(),Je("nav",p0,[jo(t.$slots,"default")])}const zc=Lt(h0,[["render",g0]]);function sa(t,e,...n){if(t in e){let r=e[t];return typeof r=="function"?r(...n):r}let s=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(r=>`"${r}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,sa),s}var Ol=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(Ol||{}),m0=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(m0||{});function or({visible:t=!0,features:e=0,ourProps:n,theirProps:s,...r}){var i;let o=Yg(s,n),a=Object.assign(r,{props:o});if(t||e&2&&o.static)return $a(a);if(e&1){let l=(i=o.unmount)==null||i?0:1;return sa(l,{0(){return null},1(){return $a({...r,props:{...o,hidden:!0,style:{display:"none"}}})}})}return $a(a)}function $a({props:t,attrs:e,slots:n,slot:s,name:r}){var i,o;let{as:a,...l}=Qg(t,["unmount","static"]),c=(i=n.default)==null?void 0:i.call(n,s),u={};if(s){let d=!1,f=[];for(let[p,g]of Object.entries(s))typeof g=="boolean"&&(d=!0),g===!0&&f.push(p);d&&(u["data-headlessui-state"]=f.join(" "))}if(a==="template"){if(c=Gg(c??[]),Object.keys(l).length>0||Object.keys(e).length>0){let[d,...f]=c??[];if(!v0(d)||f.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${r} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(e)).map(_=>_.trim()).filter((_,v,I)=>I.indexOf(_)===v).sort((_,v)=>_.localeCompare(v)).map(_=>`  - ${_}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(_=>`  - ${_}`).join(`
`)].join(`
`));let p=Yg((o=d.props)!=null?o:{},l),g=Yt(d,p);for(let _ in p)_.startsWith("on")&&(g.props||(g.props={}),g.props[_]=p[_]);return g}return Array.isArray(c)&&c.length===1?c[0]:c}return Tn(a,Object.assign({},l,u),{default:()=>c})}function Gg(t){return t.flatMap(e=>e.type===Le?Gg(e.children):[e])}function Yg(...t){if(t.length===0)return{};if(t.length===1)return t[0];let e={},n={};for(let s of t)for(let r in s)r.startsWith("on")&&typeof s[r]=="function"?(n[r]!=null||(n[r]=[]),n[r].push(s[r])):e[r]=s[r];if(e.disabled||e["aria-disabled"])return Object.assign(e,Object.fromEntries(Object.keys(n).map(s=>[s,void 0])));for(let s in n)Object.assign(e,{[s](r,...i){let o=n[s];for(let a of o){if(r instanceof Event&&r.defaultPrevented)return;a(r,...i)}}});return e}function _0(t){let e=Object.assign({},t);for(let n in e)e[n]===void 0&&delete e[n];return e}function Qg(t,e=[]){let n=Object.assign({},t);for(let s of e)s in n&&delete n[s];return n}function v0(t){return t==null?!1:typeof t.type=="string"||typeof t.type=="object"||typeof t.type=="function"}let y0=0;function b0(){return++y0}function ra(){return b0()}var Pe=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(Pe||{});function w0(t){throw new Error("Unexpected object: "+t)}var lt=(t=>(t[t.First=0]="First",t[t.Previous=1]="Previous",t[t.Next=2]="Next",t[t.Last=3]="Last",t[t.Specific=4]="Specific",t[t.Nothing=5]="Nothing",t))(lt||{});function E0(t,e){let n=e.resolveItems();if(n.length<=0)return null;let s=e.resolveActiveIndex(),r=s??-1,i=(()=>{switch(t.focus){case 0:return n.findIndex(o=>!e.resolveDisabled(o));case 1:{let o=n.slice().reverse().findIndex((a,l,c)=>r!==-1&&c.length-l-1>=r?!1:!e.resolveDisabled(a));return o===-1?o:n.length-1-o}case 2:return n.findIndex((o,a)=>a<=r?!1:!e.resolveDisabled(o));case 3:{let o=n.slice().reverse().findIndex(a=>!e.resolveDisabled(a));return o===-1?o:n.length-1-o}case 4:return n.findIndex(o=>e.resolveId(o)===t.id);case 5:return null;default:w0(t)}})();return i===-1?s:i}function Te(t){var e;return t==null||t.value==null?null:(e=t.value.$el)!=null?e:t.value}let Jg=Symbol("Context");var ei=(t=>(t[t.Open=1]="Open",t[t.Closed=2]="Closed",t[t.Closing=4]="Closing",t[t.Opening=8]="Opening",t))(ei||{});function I0(){return Ze(Jg,null)}function C0(t){Ps(Jg,t)}function xf(t,e){if(t)return t;let n=e??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function Xg(t,e){let n=Z(xf(t.value.type,t.value.as));return cs(()=>{n.value=xf(t.value.type,t.value.as)}),er(()=>{var s;n.value||Te(e)&&Te(e)instanceof HTMLButtonElement&&!((s=Te(e))!=null&&s.hasAttribute("type"))&&(n.value="button")}),n}var T0=Object.defineProperty,S0=(t,e,n)=>e in t?T0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Nf=(t,e,n)=>(S0(t,typeof e!="symbol"?e+"":e,n),n);class k0{constructor(){Nf(this,"current",this.detect()),Nf(this,"currentId",0)}set(e){this.current!==e&&(this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let qc=new k0;function Gc(t){if(qc.isServer)return null;if(t instanceof Node)return t.ownerDocument;if(t!=null&&t.hasOwnProperty("value")){let e=Te(t);if(e)return e.ownerDocument}return document}function R0({container:t,accept:e,walk:n,enabled:s}){er(()=>{let r=t.value;if(!r||s!==void 0&&!s.value)return;let i=Gc(t);if(!i)return;let o=Object.assign(l=>e(l),{acceptNode:e}),a=i.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,o,!1);for(;a.nextNode();)n(a.currentNode)})}let Ml=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var Dl=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t))(Dl||{}),A0=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(A0||{}),P0=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(P0||{});function Zg(t=document.body){return t==null?[]:Array.from(t.querySelectorAll(Ml)).sort((e,n)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Yc=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(Yc||{});function Qc(t,e=0){var n;return t===((n=Gc(t))==null?void 0:n.body)?!1:sa(e,{0(){return t.matches(Ml)},1(){let s=t;for(;s!==null;){if(s.matches(Ml))return!0;s=s.parentElement}return!1}})}function em(t){let e=Gc(t);Et(()=>{e&&!Qc(e.activeElement,0)&&N0(t)})}var x0=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(x0||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",t=>{t.metaKey||t.altKey||t.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",t=>{t.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:t.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function N0(t){t==null||t.focus({preventScroll:!0})}let O0=["textarea","input"].join(",");function M0(t){var e,n;return(n=(e=t==null?void 0:t.matches)==null?void 0:e.call(t,O0))!=null?n:!1}function tm(t,e=n=>n){return t.slice().sort((n,s)=>{let r=e(n),i=e(s);if(r===null||i===null)return 0;let o=r.compareDocumentPosition(i);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function D0(t,e){return L0(Zg(),e,{relativeTo:t})}function L0(t,e,{sorted:n=!0,relativeTo:s=null,skipElements:r=[]}={}){var i;let o=(i=Array.isArray(t)?t.length>0?t[0].ownerDocument:document:t==null?void 0:t.ownerDocument)!=null?i:document,a=Array.isArray(t)?n?tm(t):t:Zg(t);r.length>0&&a.length>1&&(a=a.filter(g=>!r.includes(g))),s=s??o.activeElement;let l=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,a.indexOf(s))-1;if(e&4)return Math.max(0,a.indexOf(s))+1;if(e&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=e&32?{preventScroll:!0}:{},d=0,f=a.length,p;do{if(d>=f||d+f<=0)return 0;let g=c+d;if(e&16)g=(g+f)%f;else{if(g<0)return 3;if(g>=f)return 1}p=a[g],p==null||p.focus(u),d+=l}while(p!==o.activeElement);return e&6&&M0(p)&&p.select(),2}function xi(t,e,n){qc.isServer||er(s=>{document.addEventListener(t,e,n),s(()=>document.removeEventListener(t,e,n))})}function F0(t,e,n){qc.isServer||er(s=>{window.addEventListener(t,e,n),s(()=>window.removeEventListener(t,e,n))})}function U0(t,e,n=ce(()=>!0)){function s(i,o){if(!n.value||i.defaultPrevented)return;let a=o(i);if(a===null||!a.getRootNode().contains(a))return;let l=function c(u){return typeof u=="function"?c(u()):Array.isArray(u)||u instanceof Set?u:[u]}(t);for(let c of l){if(c===null)continue;let u=c instanceof HTMLElement?c:Te(c);if(u!=null&&u.contains(a)||i.composed&&i.composedPath().includes(u))return}return!Qc(a,Yc.Loose)&&a.tabIndex!==-1&&i.preventDefault(),e(i,a)}let r=Z(null);xi("pointerdown",i=>{var o,a;n.value&&(r.value=((a=(o=i.composedPath)==null?void 0:o.call(i))==null?void 0:a[0])||i.target)},!0),xi("mousedown",i=>{var o,a;n.value&&(r.value=((a=(o=i.composedPath)==null?void 0:o.call(i))==null?void 0:a[0])||i.target)},!0),xi("click",i=>{r.value&&(s(i,()=>r.value),r.value=null)},!0),xi("touchend",i=>s(i,()=>i.target instanceof HTMLElement?i.target:null),!0),F0("blur",i=>s(i,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var nm=(t=>(t[t.None=1]="None",t[t.Focusable=2]="Focusable",t[t.Hidden=4]="Hidden",t))(nm||{});let $0=Zt({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(t,{slots:e,attrs:n}){return()=>{let{features:s,...r}=t,i={"aria-hidden":(s&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(s&4)===4&&(s&2)!==2&&{display:"none"}}};return or({ourProps:i,theirProps:r,slot:{},attrs:n,slots:e,name:"Hidden"})}}});function B0(t){var e,n;let s=(e=t==null?void 0:t.form)!=null?e:t.closest("form");if(s){for(let r of s.elements)if(r!==t&&(r.tagName==="INPUT"&&r.type==="submit"||r.tagName==="BUTTON"&&r.type==="submit"||r.nodeName==="INPUT"&&r.type==="image")){r.click();return}(n=s.requestSubmit)==null||n.call(s)}}function j0(t,e,n){let s=Z(n==null?void 0:n.value),r=ce(()=>t.value!==void 0);return[ce(()=>r.value?t.value:s.value),function(i){return r.value||(s.value=i),e==null?void 0:e(i)}]}function Of(t){return[t.screenX,t.screenY]}function H0(){let t=Z([-1,-1]);return{wasMoved(e){let n=Of(e);return t.value[0]===n[0]&&t.value[1]===n[1]?!1:(t.value=n,!0)},update(e){t.value=Of(e)}}}let Mf=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function Df(t){var e,n;let s=(e=t.innerText)!=null?e:"",r=t.cloneNode(!0);if(!(r instanceof HTMLElement))return s;let i=!1;for(let a of r.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))a.remove(),i=!0;let o=i?(n=r.innerText)!=null?n:"":s;return Mf.test(o)&&(o=o.replace(Mf,"")),o}function W0(t){let e=t.getAttribute("aria-label");if(typeof e=="string")return e.trim();let n=t.getAttribute("aria-labelledby");if(n){let s=n.split(" ").map(r=>{let i=document.getElementById(r);if(i){let o=i.getAttribute("aria-label");return typeof o=="string"?o.trim():Df(i).trim()}return null}).filter(Boolean);if(s.length>0)return s.join(", ")}return Df(t).trim()}function V0(t){let e=Z(""),n=Z("");return()=>{let s=Te(t);if(!s)return"";let r=s.innerText;if(e.value===r)return n.value;let i=W0(s).trim().toLowerCase();return e.value=r,n.value=i,i}}var K0=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(K0||{}),z0=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(z0||{});function q0(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let sm=Symbol("MenuContext");function ia(t){let e=Ze(sm,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ia),n}return e}let G0=Zt({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:e,attrs:n}){let s=Z(1),r=Z(null),i=Z(null),o=Z([]),a=Z(""),l=Z(null),c=Z(1);function u(f=p=>p){let p=l.value!==null?o.value[l.value]:null,g=tm(f(o.value.slice()),v=>Te(v.dataRef.domRef)),_=p?g.indexOf(p):null;return _===-1&&(_=null),{items:g,activeItemIndex:_}}let d={menuState:s,buttonRef:r,itemsRef:i,items:o,searchQuery:a,activeItemIndex:l,activationTrigger:c,closeMenu:()=>{s.value=1,l.value=null},openMenu:()=>s.value=0,goToItem(f,p,g){let _=u(),v=E0(f===lt.Specific?{focus:lt.Specific,id:p}:{focus:f},{resolveItems:()=>_.items,resolveActiveIndex:()=>_.activeItemIndex,resolveId:I=>I.id,resolveDisabled:I=>I.dataRef.disabled});a.value="",l.value=v,c.value=g??1,o.value=_.items},search(f){let p=a.value!==""?0:1;a.value+=f.toLowerCase();let g=(l.value!==null?o.value.slice(l.value+p).concat(o.value.slice(0,l.value+p)):o.value).find(v=>v.dataRef.textValue.startsWith(a.value)&&!v.dataRef.disabled),_=g?o.value.indexOf(g):-1;_===-1||_===l.value||(l.value=_,c.value=1)},clearSearch(){a.value=""},registerItem(f,p){let g=u(_=>[..._,{id:f,dataRef:p}]);o.value=g.items,l.value=g.activeItemIndex,c.value=1},unregisterItem(f){let p=u(g=>{let _=g.findIndex(v=>v.id===f);return _!==-1&&g.splice(_,1),g});o.value=p.items,l.value=p.activeItemIndex,c.value=1}};return U0([r,i],(f,p)=>{var g;d.closeMenu(),Qc(p,Yc.Loose)||(f.preventDefault(),(g=Te(r))==null||g.focus())},ce(()=>s.value===0)),Ps(sm,d),C0(ce(()=>sa(s.value,{0:ei.Open,1:ei.Closed}))),()=>{let f={open:s.value===0,close:d.closeMenu};return or({ourProps:{},theirProps:t,slot:f,slots:e,attrs:n,name:"Menu"})}}}),Y0=Zt({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${ra()}`}},setup(t,{attrs:e,slots:n,expose:s}){let r=ia("MenuButton");s({el:r.buttonRef,$el:r.buttonRef});function i(c){switch(c.key){case Pe.Space:case Pe.Enter:case Pe.ArrowDown:c.preventDefault(),c.stopPropagation(),r.openMenu(),Et(()=>{var u;(u=Te(r.itemsRef))==null||u.focus({preventScroll:!0}),r.goToItem(lt.First)});break;case Pe.ArrowUp:c.preventDefault(),c.stopPropagation(),r.openMenu(),Et(()=>{var u;(u=Te(r.itemsRef))==null||u.focus({preventScroll:!0}),r.goToItem(lt.Last)});break}}function o(c){switch(c.key){case Pe.Space:c.preventDefault();break}}function a(c){t.disabled||(r.menuState.value===0?(r.closeMenu(),Et(()=>{var u;return(u=Te(r.buttonRef))==null?void 0:u.focus({preventScroll:!0})})):(c.preventDefault(),r.openMenu(),q0(()=>{var u;return(u=Te(r.itemsRef))==null?void 0:u.focus({preventScroll:!0})})))}let l=Xg(ce(()=>({as:t.as,type:e.type})),r.buttonRef);return()=>{var c;let u={open:r.menuState.value===0},{id:d,...f}=t,p={ref:r.buttonRef,id:d,type:l.value,"aria-haspopup":"menu","aria-controls":(c=Te(r.itemsRef))==null?void 0:c.id,"aria-expanded":r.menuState.value===0,onKeydown:i,onKeyup:o,onClick:a};return or({ourProps:p,theirProps:f,slot:u,attrs:e,slots:n,name:"MenuButton"})}}}),Q0=Zt({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${ra()}`}},setup(t,{attrs:e,slots:n,expose:s}){let r=ia("MenuItems"),i=Z(null);s({el:r.itemsRef,$el:r.itemsRef}),R0({container:ce(()=>Te(r.itemsRef)),enabled:ce(()=>r.menuState.value===0),accept(u){return u.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:u.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(u){u.setAttribute("role","none")}});function o(u){var d;switch(i.value&&clearTimeout(i.value),u.key){case Pe.Space:if(r.searchQuery.value!=="")return u.preventDefault(),u.stopPropagation(),r.search(u.key);case Pe.Enter:if(u.preventDefault(),u.stopPropagation(),r.activeItemIndex.value!==null){let f=r.items.value[r.activeItemIndex.value];(d=Te(f.dataRef.domRef))==null||d.click()}r.closeMenu(),em(Te(r.buttonRef));break;case Pe.ArrowDown:return u.preventDefault(),u.stopPropagation(),r.goToItem(lt.Next);case Pe.ArrowUp:return u.preventDefault(),u.stopPropagation(),r.goToItem(lt.Previous);case Pe.Home:case Pe.PageUp:return u.preventDefault(),u.stopPropagation(),r.goToItem(lt.First);case Pe.End:case Pe.PageDown:return u.preventDefault(),u.stopPropagation(),r.goToItem(lt.Last);case Pe.Escape:u.preventDefault(),u.stopPropagation(),r.closeMenu(),Et(()=>{var f;return(f=Te(r.buttonRef))==null?void 0:f.focus({preventScroll:!0})});break;case Pe.Tab:u.preventDefault(),u.stopPropagation(),r.closeMenu(),Et(()=>D0(Te(r.buttonRef),u.shiftKey?Dl.Previous:Dl.Next));break;default:u.key.length===1&&(r.search(u.key),i.value=setTimeout(()=>r.clearSearch(),350));break}}function a(u){switch(u.key){case Pe.Space:u.preventDefault();break}}let l=I0(),c=ce(()=>l!==null?(l.value&ei.Open)===ei.Open:r.menuState.value===0);return()=>{var u,d;let f={open:r.menuState.value===0},{id:p,...g}=t,_={"aria-activedescendant":r.activeItemIndex.value===null||(u=r.items.value[r.activeItemIndex.value])==null?void 0:u.id,"aria-labelledby":(d=Te(r.buttonRef))==null?void 0:d.id,id:p,onKeydown:o,onKeyup:a,role:"menu",tabIndex:0,ref:r.itemsRef};return or({ourProps:_,theirProps:g,slot:f,attrs:e,slots:n,features:Ol.RenderStrategy|Ol.Static,visible:c.value,name:"MenuItems"})}}}),J0=Zt({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${ra()}`}},setup(t,{slots:e,attrs:n,expose:s}){let r=ia("MenuItem"),i=Z(null);s({el:i,$el:i});let o=ce(()=>r.activeItemIndex.value!==null?r.items.value[r.activeItemIndex.value].id===t.id:!1),a=V0(i),l=ce(()=>({disabled:t.disabled,get textValue(){return a()},domRef:i}));cs(()=>r.registerItem(t.id,l)),Bo(()=>r.unregisterItem(t.id)),er(()=>{r.menuState.value===0&&o.value&&r.activationTrigger.value!==0&&Et(()=>{var _,v;return(v=(_=Te(i))==null?void 0:_.scrollIntoView)==null?void 0:v.call(_,{block:"nearest"})})});function c(_){if(t.disabled)return _.preventDefault();r.closeMenu(),em(Te(r.buttonRef))}function u(){if(t.disabled)return r.goToItem(lt.Nothing);r.goToItem(lt.Specific,t.id)}let d=H0();function f(_){d.update(_)}function p(_){d.wasMoved(_)&&(t.disabled||o.value||r.goToItem(lt.Specific,t.id,0))}function g(_){d.wasMoved(_)&&(t.disabled||o.value&&r.goToItem(lt.Nothing))}return()=>{let{disabled:_}=t,v={active:o.value,disabled:_,close:r.closeMenu},{id:I,...S}=t;return or({ourProps:{id:I,ref:i,role:"menuitem",tabIndex:_===!0?void 0:-1,"aria-disabled":_===!0?!0:void 0,disabled:void 0,onClick:c,onFocus:u,onPointerenter:f,onMouseenter:f,onPointermove:p,onMousemove:p,onPointerleave:g,onMouseleave:g},theirProps:{...n,...S},slot:v,attrs:n,slots:e,name:"MenuItem"})}}}),X0=Symbol("GroupContext"),Z0=Zt({name:"Switch",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:()=>`headlessui-switch-${ra()}`}},inheritAttrs:!1,setup(t,{emit:e,attrs:n,slots:s,expose:r}){let i=Ze(X0,null),[o,a]=j0(ce(()=>t.modelValue),v=>e("update:modelValue",v),ce(()=>t.defaultChecked));function l(){a(!o.value)}let c=Z(null),u=i===null?c:i.switchRef,d=Xg(ce(()=>({as:t.as,type:n.type})),u);r({el:u,$el:u});function f(v){v.preventDefault(),l()}function p(v){v.key===Pe.Space?(v.preventDefault(),l()):v.key===Pe.Enter&&B0(v.currentTarget)}function g(v){v.preventDefault()}let _=ce(()=>{var v,I;return(I=(v=Te(u))==null?void 0:v.closest)==null?void 0:I.call(v,"form")});return cs(()=>{xt([_],()=>{if(!_.value||t.defaultChecked===void 0)return;function v(){a(t.defaultChecked)}return _.value.addEventListener("reset",v),()=>{var I;(I=_.value)==null||I.removeEventListener("reset",v)}},{immediate:!0})}),()=>{let{id:v,name:I,value:S,form:M,...A}=t,G={checked:o.value},U={id:v,ref:u,role:"switch",type:d.value,tabIndex:0,"aria-checked":o.value,"aria-labelledby":i==null?void 0:i.labelledby.value,"aria-describedby":i==null?void 0:i.describedby.value,onClick:f,onKeyup:p,onKeypress:g};return Tn(Le,[I!=null&&o.value!=null?Tn($0,_0({features:nm.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:o.value,form:M,name:I,value:S})):null,or({ourProps:U,theirProps:{...n,...Qg(A,["modelValue","defaultChecked"])},slot:G,attrs:n,slots:s,name:"Switch"})])}}});function rm(t){return Rh()?(rv(t),!0):!1}function zs(t){return typeof t=="function"?t():Rs(t)}const ek=typeof window<"u"&&typeof document<"u",tk=Object.prototype.toString,nk=t=>tk.call(t)==="[object Object]",im=()=>{};function sk(t,e){function n(...s){return new Promise((r,i)=>{Promise.resolve(t(()=>e.apply(this,s),{fn:e,thisArg:this,args:s})).then(r).catch(i)})}return n}const om=t=>t();function rk(t=om){const e=Z(!0);function n(){e.value=!1}function s(){e.value=!0}const r=(...i)=>{e.value&&t(...i)};return{isActive:Mo(e),pause:n,resume:s,eventFilter:r}}function ik(...t){if(t.length!==1)return $v(...t);const e=t[0];return typeof e=="function"?Mo(Lv(()=>({get:e,set:im}))):Z(e)}function ok(t,e,n={}){const{eventFilter:s=om,...r}=n;return xt(t,sk(s,e),r)}function ak(t,e,n={}){const{eventFilter:s,...r}=n,{eventFilter:i,pause:o,resume:a,isActive:l}=rk(s);return{stop:ok(t,e,{...r,eventFilter:i}),pause:o,resume:a,isActive:l}}function lk(t,e=!0){vc()?cs(t):e?t():Et(t)}function ck(t=!1,e={}){const{truthyValue:n=!0,falsyValue:s=!1}=e,r=Oe(t),i=Z(t);function o(a){if(arguments.length)return i.value=a,i.value;{const l=zs(n);return i.value=i.value===l?zs(s):l,i.value}}return r?o:[i,o]}function am(t){var e;const n=zs(t);return(e=n==null?void 0:n.$el)!=null?e:n}const ti=ek?window:void 0;function Lf(...t){let e,n,s,r;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,s,r]=t,e=ti):[e,n,s,r]=t,!e)return im;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const i=[],o=()=>{i.forEach(u=>u()),i.length=0},a=(u,d,f,p)=>(u.addEventListener(d,f,p),()=>u.removeEventListener(d,f,p)),l=xt(()=>[am(e),zs(r)],([u,d])=>{if(o(),!u)return;const f=nk(d)?{...d}:d;i.push(...n.flatMap(p=>s.map(g=>a(u,p,g,f))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return rm(c),c}function uk(){const t=Z(!1);return vc()&&cs(()=>{t.value=!0}),t}function dk(t){const e=uk();return ce(()=>(e.value,!!t()))}function fk(t,e={}){const{window:n=ti}=e,s=dk(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const i=Z(!1),o=c=>{i.value=c.matches},a=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",o):r.removeListener(o))},l=er(()=>{s.value&&(a(),r=n.matchMedia(zs(t)),"addEventListener"in r?r.addEventListener("change",o):r.addListener(o),i.value=r.matches)});return rm(()=>{l(),a(),r=void 0}),i}const Ni=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Oi="__vueuse_ssr_handlers__",hk=pk();function pk(){return Oi in Ni||(Ni[Oi]=Ni[Oi]||{}),Ni[Oi]}function lm(t,e){return hk[t]||e}function gk(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const mk={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},Ff="vueuse-storage";function _k(t,e,n,s={}){var r;const{flush:i="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:d=ti,eventFilter:f,onError:p=P=>{console.error(P)}}=s,g=(u?jh:Z)(e);if(!n)try{n=lm("getDefaultStorage",()=>{var P;return(P=ti)==null?void 0:P.localStorage})()}catch(P){p(P)}if(!n)return g;const _=zs(e),v=gk(_),I=(r=s.serializer)!=null?r:mk[v],{pause:S,resume:M}=ak(g,()=>A(g.value),{flush:i,deep:o,eventFilter:f});return d&&a&&(Lf(d,"storage",Q),Lf(d,Ff,U)),Q(),g;function A(P){try{if(P==null)n.removeItem(t);else{const W=I.write(P),V=n.getItem(t);V!==W&&(n.setItem(t,W),d&&d.dispatchEvent(new CustomEvent(Ff,{detail:{key:t,oldValue:V,newValue:W,storageArea:n}})))}}catch(W){p(W)}}function G(P){const W=P?P.newValue:n.getItem(t);if(W==null)return l&&_!==null&&n.setItem(t,I.write(_)),_;if(!P&&c){const V=I.read(W);return typeof c=="function"?c(V,_):v==="object"&&!Array.isArray(V)?{..._,...V}:V}else return typeof W!="string"?W:I.read(W)}function U(P){Q(P.detail)}function Q(P){if(!(P&&P.storageArea!==n)){if(P&&P.key==null){g.value=_;return}if(!(P&&P.key!==t)){S();try{(P==null?void 0:P.newValue)!==I.write(g.value)&&(g.value=G(P))}catch(W){p(W)}finally{P?Et(M):M()}}}}}function vk(t){return fk("(prefers-color-scheme: dark)",t)}function yk(t={}){const{selector:e="html",attribute:n="class",initialValue:s="auto",window:r=ti,storage:i,storageKey:o="vueuse-color-scheme",listenToStorageChanges:a=!0,storageRef:l,emitAuto:c,disableTransition:u=!0}=t,d={auto:"",light:"light",dark:"dark",...t.modes||{}},f=vk({window:r}),p=ce(()=>f.value?"dark":"light"),g=l||(o==null?ik(s):_k(o,s,i,{window:r,listenToStorageChanges:a})),_=ce(()=>g.value==="auto"?p.value:g.value),v=lm("updateHTMLAttrs",(A,G,U)=>{const Q=typeof A=="string"?r==null?void 0:r.document.querySelector(A):am(A);if(!Q)return;let P;if(u){P=r.document.createElement("style");const W="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";P.appendChild(document.createTextNode(W)),r.document.head.appendChild(P)}if(G==="class"){const W=U.split(/\s/g);Object.values(d).flatMap(V=>(V||"").split(/\s/g)).filter(Boolean).forEach(V=>{W.includes(V)?Q.classList.add(V):Q.classList.remove(V)})}else Q.setAttribute(G,U);u&&(r.getComputedStyle(P).opacity,document.head.removeChild(P))});function I(A){var G;v(e,n,(G=d[A])!=null?G:A)}function S(A){t.onChanged?t.onChanged(A,I):I(A)}xt(_,S,{flush:"post",immediate:!0}),lk(()=>S(_.value));const M=ce({get(){return c?g.value:_.value},set(A){g.value=A}});try{return Object.assign(M,{store:g,system:p,state:_})}catch{return M}}function bk(t={}){const{valueDark:e="dark",valueLight:n=""}=t,s=yk({...t,onChanged:(i,o)=>{var a;t.onChanged?(a=t.onChanged)==null||a.call(t,i==="dark",o,i):o(i)},modes:{dark:e,light:n}});return ce({get(){return s.value==="dark"},set(i){const o=i?"dark":"light";s.system.value===o?s.value="auto":s.value=o}})}const wk={components:{LoginComponent:vI,ErrorMessage:EI,BaseHeader:zc,Icon:Ac,Menu:G0,MenuButton:Y0,MenuItems:Q0,MenuItem:J0,Switch:Z0},setup(){const t=Lp(),e=Z(),n=bk(),s=ck(n),r=Zr();function i(o){const a=Z(o[0]),l=Z(o[1]),c=Z(o[2]);e.value="",c.value==="Login"?ZT(r,a.value,l.value).then(()=>{t.replace("/tasks")}).catch(u=>{switch(u.code){case"auth/invalid-email":e.value="Invalid email";break;case"auth/user-not-found":e.value="No account with that email was found";break;case"auth/wrong-password":e.value="Incorrect password";break;default:e.value="Email or password was incorrect";break}}):c.value==="Signup"&&XT(r,a.value,l.value).then(()=>{alert("User created with success!")}).catch(u=>{console.log(u.code),alert(u.message)})}return{signupOrLogin:i,errMsg:e,isDark:n,toggleDark:s}}},Ek=se("div",{class:"py-0 px-3 font-semibold dark:text-white"},"Task Project",-1),Ik={class:"flex"},Ck=se("h1",{class:"font-semibold text-3xl p-4 dark:text-white"},"The Task Project",-1),Tk=se("h3",{class:"font-medium text-2xl p-2 dark:text-white"}," Please login or signup to start your task list! ",-1);function Sk(t,e,n,s,r,i){const o=Ke("Icon"),a=Ke("Switch"),l=Ke("base-header"),c=Ke("login-component"),u=Ke("error-message"),d=Ke("content-box");return Be(),Je(Le,null,[le(l,null,{default:at(()=>[Ek,se("div",Ik,[le(o,{icon:"iconamoon:mode-light",color:"black",width:"26",height:"26"}),le(a,{onClick:e[0]||(e[0]=f=>s.toggleDark()),modelValue:s.isDark,"onUpdate:modelValue":e[1]||(e[1]=f=>s.isDark=f),class:Br([s.isDark?"bg-gray-900":"bg-gray-700","relative inline-flex h-6 w-11 items-center rounded-full transition-colors"])},{default:at(()=>[se("span",{class:Br([s.isDark?"translate-x-6":"translate-x-1","inline-block h-4 w-4 transform rounded-full bg-white transition-transform"])},null,2)]),_:1},8,["modelValue","class"]),le(o,{icon:"material-symbols:dark-mode-outline",color:"black",width:"26",height:"26"})])]),_:1}),le(d,null,{default:at(()=>[Ck,Tk,le(c,{onEmitUser:s.signupOrLogin},null,8,["onEmitUser"]),s.errMsg?(Be(),mc(u,{key:0},{default:at(()=>[vn(Gi(s.errMsg),1)]),_:1})):Uy("",!0)]),_:1})],64)}const kk=Lt(wk,[["render",Sk]]);/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var cm="store";function Rk(t){return t===void 0&&(t=null),Ze(t!==null?t:cm)}function ar(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function Ak(t){return t!==null&&typeof t=="object"}function Pk(t){return t&&typeof t.then=="function"}function xk(t,e){return function(){return t(e)}}function um(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function dm(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;oa(t,n,[],t._modules.root,!0),Jc(t,n,e)}function Jc(t,e,n){var s=t._state,r=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={},a={},l=nv(!0);l.run(function(){ar(i,function(c,u){o[u]=xk(c,t),a[u]=ce(function(){return o[u]()}),Object.defineProperty(t.getters,u,{get:function(){return a[u].value},enumerable:!0})})}),t._state=Zs({data:e}),t._scope=l,t.strict&&Lk(t),s&&n&&t._withCommit(function(){s.data=null}),r&&r.stop()}function oa(t,e,n,s,r){var i=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!i&&!r){var a=Xc(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){a[l]=s.state})}var c=s.context=Nk(t,o,n);s.forEachMutation(function(u,d){var f=o+d;Ok(t,f,u,c)}),s.forEachAction(function(u,d){var f=u.root?d:o+d,p=u.handler||u;Mk(t,f,p,c)}),s.forEachGetter(function(u,d){var f=o+d;Dk(t,f,u,c)}),s.forEachChild(function(u,d){oa(t,e,n.concat(d),u,r)})}function Nk(t,e,n){var s=e==="",r={dispatch:s?t.dispatch:function(i,o,a){var l=mo(i,o,a),c=l.payload,u=l.options,d=l.type;return(!u||!u.root)&&(d=e+d),t.dispatch(d,c)},commit:s?t.commit:function(i,o,a){var l=mo(i,o,a),c=l.payload,u=l.options,d=l.type;(!u||!u.root)&&(d=e+d),t.commit(d,c,u)}};return Object.defineProperties(r,{getters:{get:s?function(){return t.getters}:function(){return fm(t,e)}},state:{get:function(){return Xc(t.state,n)}}}),r}function fm(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(r){if(r.slice(0,s)===e){var i=r.slice(s);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function Ok(t,e,n,s){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(o){n.call(t,s.state,o)})}function Mk(t,e,n,s){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(o){var a=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return Pk(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):a})}function Dk(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(s.state,s.getters,i.state,i.getters)})}function Lk(t){xt(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Xc(t,e){return e.reduce(function(n,s){return n[s]},t)}function mo(t,e,n){return Ak(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var Fk="vuex bindings",Uf="vuex:mutations",Ba="vuex:actions",ys="vuex",Uk=0;function $k(t,e){nw({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Fk]},function(n){n.addTimelineLayer({id:Uf,label:"Vuex Mutations",color:$f}),n.addTimelineLayer({id:Ba,label:"Vuex Actions",color:$f}),n.addInspector({id:ys,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===ys)if(s.filter){var r=[];mm(r,e._modules.root,s.filter,""),s.rootNodes=r}else s.rootNodes=[gm(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===ys){var r=s.nodeId;fm(e,r),s.state=Hk(Vk(e._modules,r),r==="root"?e.getters:e._makeLocalGettersCache,r)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===ys){var r=s.nodeId,i=s.path;r!=="root"&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit(function(){s.set(e._state.data,i,s.state.value)})}}),e.subscribe(function(s,r){var i={};s.payload&&(i.payload=s.payload),i.state=r,n.notifyComponentUpdate(),n.sendInspectorTree(ys),n.sendInspectorState(ys),n.addTimelineEvent({layerId:Uf,event:{time:Date.now(),title:s.type,data:i}})}),e.subscribeAction({before:function(s,r){var i={};s.payload&&(i.payload=s.payload),s._id=Uk++,s._time=Date.now(),i.state=r,n.addTimelineEvent({layerId:Ba,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:i}})},after:function(s,r){var i={},o=Date.now()-s._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(i.payload=s.payload),i.state=r,n.addTimelineEvent({layerId:Ba,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:i}})}})})}var $f=8702998,Bk=6710886,jk=16777215,hm={label:"namespaced",textColor:jk,backgroundColor:Bk};function pm(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function gm(t,e){return{id:e||"root",label:pm(e),tags:t.namespaced?[hm]:[],children:Object.keys(t._children).map(function(n){return gm(t._children[n],e+n+"/")})}}function mm(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[hm]:[]}),Object.keys(e._children).forEach(function(r){mm(t,e._children[r],n,s+r+"/")})}function Hk(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),r={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var i=Wk(e);r.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?pm(o):o,editable:!1,value:Ll(function(){return i[o]})}})}return r}function Wk(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var r=e,i=s.pop();s.forEach(function(o){r[o]||(r[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),r=r[o]._custom.value}),r[i]=Ll(function(){return t[n]})}else e[n]=Ll(function(){return t[n]})}),e}function Vk(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,r,i){var o=s[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Ll(t){try{return t()}catch(e){return e}}var Tt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},_m={namespaced:{configurable:!0}};_m.namespaced.get=function(){return!!this._rawModule.namespaced};Tt.prototype.addChild=function(e,n){this._children[e]=n};Tt.prototype.removeChild=function(e){delete this._children[e]};Tt.prototype.getChild=function(e){return this._children[e]};Tt.prototype.hasChild=function(e){return e in this._children};Tt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Tt.prototype.forEachChild=function(e){ar(this._children,e)};Tt.prototype.forEachGetter=function(e){this._rawModule.getters&&ar(this._rawModule.getters,e)};Tt.prototype.forEachAction=function(e){this._rawModule.actions&&ar(this._rawModule.actions,e)};Tt.prototype.forEachMutation=function(e){this._rawModule.mutations&&ar(this._rawModule.mutations,e)};Object.defineProperties(Tt.prototype,_m);var fs=function(e){this.register([],e,!1)};fs.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};fs.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,r){return n=n.getChild(r),s+(n.namespaced?r+"/":"")},"")};fs.prototype.update=function(e){vm([],this.root,e)};fs.prototype.register=function(e,n,s){var r=this;s===void 0&&(s=!0);var i=new Tt(n,s);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&ar(n.modules,function(a,l){r.register(e.concat(l),a,s)})};fs.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],r=n.getChild(s);r&&r.runtime&&n.removeChild(s)};fs.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function vm(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;vm(t.concat(s),e.getChild(s),n.modules[s])}}function Kk(t){return new rt(t)}var rt=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var r=e.strict;r===void 0&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new fs(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(f,p){return l.call(o,f,p)},this.commit=function(f,p,g){return c.call(o,f,p,g)},this.strict=r;var u=this._modules.root.state;oa(this,u,[],this._modules.root),Jc(this,u),s.forEach(function(d){return d(n)})},Zc={state:{configurable:!0}};rt.prototype.install=function(e,n){e.provide(n||cm,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&$k(e,this)};Zc.state.get=function(){return this._state.data};Zc.state.set=function(t){};rt.prototype.commit=function(e,n,s){var r=this,i=mo(e,n,s),o=i.type,a=i.payload,l={type:o,payload:a},c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(d){d(a)})}),this._subscribers.slice().forEach(function(u){return u(l,r.state)}))};rt.prototype.dispatch=function(e,n){var s=this,r=mo(e,n),i=r.type,o=r.payload,a={type:i,payload:o},l=this._actions[i];if(l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,s.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,d){c.then(function(f){try{s._actionSubscribers.filter(function(p){return p.after}).forEach(function(p){return p.after(a,s.state)})}catch{}u(f)},function(f){try{s._actionSubscribers.filter(function(p){return p.error}).forEach(function(p){return p.error(a,s.state,f)})}catch{}d(f)})})}};rt.prototype.subscribe=function(e,n){return um(e,this._subscribers,n)};rt.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return um(s,this._actionSubscribers,n)};rt.prototype.watch=function(e,n,s){var r=this;return xt(function(){return e(r.state,r.getters)},n,Object.assign({},s))};rt.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};rt.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),oa(this,this.state,e,this._modules.get(e),s.preserveState),Jc(this,this.state)};rt.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=Xc(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),dm(this)};rt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};rt.prototype.hotUpdate=function(e){this._modules.update(e),dm(this,!0)};rt.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(rt.prototype,Zc);const zk={components:{BaseHeader:zc},setup(){const t=Z(""),e=Rk(),n=Lp();function s(){e.dispatch("submitData",t.value),t.value=""}function r(){Zr().signOut(),n.replace("/login")}function i(){Zr().onAuthStateChanged(function(o){o||n.replace("/")})}return hc(()=>{i()}),{taskText:t,submitTask:s,logoutUser:r}}},ym=t=>(Yh("data-v-84b0a3cc"),t=t(),Qh(),t),qk={class:"dark:bg-gray-900"},Gk=ym(()=>se("p",{class:"text-3xl font-semibold p-3 dark:text-white"},"My Tasks",-1)),Yk=ym(()=>se("div",{class:"text-2xl font-normal pb-5 dark:text-white"},"Add a task below (with Enter) and click over the finished tasks",-1)),Qk={class:"my-4"};function Jk(t,e,n,s,r,i){const o=Ke("base-button"),a=Ke("base-header");return Be(),Je("section",qk,[le(a,null,{default:at(()=>[le(o,{class:"px-1 text-sm font-semibold left-10",onClick:s.logoutUser},{default:at(()=>[vn("Logout User")]),_:1},8,["onClick"])]),_:1}),Gk,Yk,se("div",Qk,[el(se("input",{placeholder:"Add a new task!",id:"insertField",type:"text","onUpdate:modelValue":e[0]||(e[0]=l=>s.taskText=l),onKeydown:e[1]||(e[1]=Rb(l=>s.submitTask(s.taskText),["enter"]))},null,544),[[to,s.taskText]]),se("button",{onClick:e[2]||(e[2]=l=>s.submitTask(s.taskText)),class:"bg-blue-500 text-white px-4 py-2 rounded ml-2"},"Add")])])}const Xk=Lt(zk,[["render",Jk],["__scopeId","data-v-84b0a3cc"]]),Bf="@firebase/database",jf="1.0.12";/**
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
 */let bm="";function Zk(t){bm=t}/**
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
 */class eR{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),xe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Yr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class tR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ft(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const wm=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new eR(e)}}catch{}return new tR},Kn=wm("localStorage"),Fl=wm("sessionStorage");/**
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
 */const Ds=new Oc("@firebase/database"),nR=function(){let t=1;return function(){return t++}}(),Em=function(t){const e=qI(t),n=new WI;n.update(e);const s=n.digest();return Pc.encodeByteArray(s)},gi=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=gi.apply(null,s):typeof s=="object"?e+=xe(s):e+=s,e+=" "}return e};let Yn=null,Hf=!0;const sR=function(t,e){T(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ds.logLevel=fe.VERBOSE,Yn=Ds.log.bind(Ds),e&&Fl.set("logging_enabled",!0)):typeof t=="function"?Yn=t:(Yn=null,Fl.remove("logging_enabled"))},He=function(...t){if(Hf===!0&&(Hf=!1,Yn===null&&Fl.get("logging_enabled")===!0&&sR(!0)),Yn){const e=gi.apply(null,t);Yn(e)}},mi=function(t){return function(...e){He(t,...e)}},Ul=function(...t){const e="FIREBASE INTERNAL ERROR: "+gi(...t);Ds.error(e)},Xt=function(...t){const e=`FIREBASE FATAL ERROR: ${gi(...t)}`;throw Ds.error(e),new Error(e)},tt=function(...t){const e="FIREBASE WARNING: "+gi(...t);Ds.warn(e)},rR=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&tt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},eu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},iR=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},rs="[MIN_NAME]",kn="[MAX_NAME]",lr=function(t,e){if(t===e)return 0;if(t===rs||e===kn)return-1;if(e===rs||t===kn)return 1;{const n=Wf(t),s=Wf(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},oR=function(t,e){return t===e?0:t<e?-1:1},vr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+xe(e))},tu=function(t){if(typeof t!="object"||t===null)return xe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=xe(e[s]),n+=":",n+=tu(t[e[s]]);return n+="}",n},Im=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let r=0;r<n;r+=e)r+e>n?s.push(t.substring(r,n)):s.push(t.substring(r,r+e));return s};function st(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Cm=function(t){T(!eu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let r,i,o,a,l;t===0?(i=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),i=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(r?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},aR=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},lR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function cR(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const uR=new RegExp("^-?(0*)\\d{1,10}$"),dR=-2147483648,fR=2147483647,Wf=function(t){if(uR.test(t)){const e=Number(t);if(e>=dR&&e<=fR)return e}return null},cr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw tt("Exception was thrown by user callback.",n),e},Math.floor(0))}},hR=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Mr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class pR{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,ut(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){tt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class gR{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(He("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',tt(e)}}class Ls{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ls.OWNER="owner";/**
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
 */const nu="5",Tm="v",Sm="s",km="r",Rm="f",Am=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Pm="ls",xm="p",$l="ac",Nm="websocket",Om="long_polling";/**
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
 */class Mm{constructor(e,n,s,r,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Kn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Kn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function mR(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Dm(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===Nm)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Om)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);mR(t)&&(n.ns=t.namespace);const r=[];return st(n,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
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
 */class _R{constructor(){this.counters_={}}incrementCounter(e,n=1){Ft(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return TI(this.counters_)}}/**
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
 */const ja={},Ha={};function su(t){const e=t.toString();return ja[e]||(ja[e]=new _R),ja[e]}function vR(t,e){const n=t.toString();return Ha[n]||(Ha[n]=e()),Ha[n]}/**
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
 */class yR{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&cr(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Vf="start",bR="close",wR="pLPCommand",ER="pRTLPCB",Lm="id",Fm="pw",Um="ser",IR="cb",CR="seg",TR="ts",SR="d",kR="dframe",$m=1870,Bm=30,RR=$m-Bm,AR=25e3,PR=3e4;class Cs{constructor(e,n,s,r,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=mi(e),this.stats_=su(n),this.urlFn=l=>(this.appCheckToken&&(l[$l]=this.appCheckToken),Dm(n,Om,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new yR(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(PR)),iR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ru((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Vf)this.id=a,this.password=l;else if(o===bR)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Vf]="t",s[Um]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[IR]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Tm]=nu,this.transportSessionId&&(s[Sm]=this.transportSessionId),this.lastSessionId&&(s[Pm]=this.lastSessionId),this.applicationId&&(s[xm]=this.applicationId),this.appCheckToken&&(s[$l]=this.appCheckToken),typeof location<"u"&&location.hostname&&Am.test(location.hostname)&&(s[km]=Rm);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Cs.forceAllow_=!0}static forceDisallow(){Cs.forceDisallow_=!0}static isAvailable(){return Cs.forceAllow_?!0:!Cs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!aR()&&!lR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=eg(n),r=Im(s,RR);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[kR]="t",s[Lm]=e,s[Fm]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=xe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ru{constructor(e,n,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=nR(),window[wR+this.uniqueCallbackIdentifier]=e,window[ER+this.uniqueCallbackIdentifier]=n,this.myIFrame=ru.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){He("frame writing exception"),a.stack&&He(a.stack),He(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||He("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Lm]=this.myID,e[Fm]=this.myPW,e[Um]=this.currentSerial;let n=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Bm+s.length<=$m;){const o=this.pendingSegs.shift();s=s+"&"+CR+r+"="+o.seg+"&"+TR+r+"="+o.ts+"&"+SR+r+"="+o.d,r++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(s,Math.floor(AR)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{He("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const xR=16384,NR=45e3;let _o=null;typeof MozWebSocket<"u"?_o=MozWebSocket:typeof WebSocket<"u"&&(_o=WebSocket);class _t{constructor(e,n,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=mi(this.connId),this.stats_=su(n),this.connURL=_t.connectionURL_(n,o,a,r,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,r,i){const o={};return o[Tm]=nu,typeof location<"u"&&location.hostname&&Am.test(location.hostname)&&(o[km]=Rm),n&&(o[Sm]=n),s&&(o[Pm]=s),r&&(o[$l]=r),i&&(o[xm]=i),Dm(e,Nm,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Kn.set("previous_websocket_failure",!0);try{let s;og(),this.mySock=new _o(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){_t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&_o!==null&&!_t.forceDisallow_}static previouslyFailed(){return Kn.isInMemoryStorage||Kn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Kn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Yr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Im(n,xR);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(NR))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}_t.responsesRequiredToBeHealthy=2;_t.healthyTimeout=3e4;/**
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
 */class ni{static get ALL_TRANSPORTS(){return[Cs,_t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=_t&&_t.isAvailable();let s=n&&!_t.previouslyFailed();if(e.webSocketOnly&&(n||tt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[_t];else{const r=this.transports_=[];for(const i of ni.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);ni.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ni.globalTransportInitialized_=!1;/**
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
 */const OR=6e4,MR=5e3,DR=10*1024,LR=100*1024,Wa="t",Kf="d",FR="s",zf="r",UR="e",qf="o",Gf="a",Yf="n",Qf="p",$R="h";class BR{constructor(e,n,s,r,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=mi("c:"+this.id+":"),this.transportManager_=new ni(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Mr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>LR?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>DR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Wa in e){const n=e[Wa];n===Gf?this.upgradeIfSecondaryHealthy_():n===zf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===qf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=vr("t",e),s=vr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Qf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Gf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Yf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=vr("t",e),s=vr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=vr(Wa,e);if(Kf in e){const s=e[Kf];if(n===$R){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===Yf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===FR?this.onConnectionShutdown_(s):n===zf?this.onReset_(s):n===UR?Ul("Server Error: "+s):n===qf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ul("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),nu!==s&&tt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Mr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(OR))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Mr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(MR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Qf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Kn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class jm{put(e,n,s,r){}merge(e,n,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Hm{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const r=this.getInitialEvent(e);r&&n.apply(s,r)}off(e,n,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===n&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class vo extends Hm{static getInstance(){return new vo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Nc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Jf=32,Xf=768;class pe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function oe(){return new pe("")}function J(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Rn(t){return t.pieces_.length-t.pieceNum_}function ve(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new pe(t.pieces_,e)}function Wm(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function jR(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Vm(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Km(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new pe(e,0)}function Ne(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof pe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&n.push(s[r])}return new pe(n,0)}function X(t){return t.pieceNum_>=t.pieces_.length}function ze(t,e){const n=J(t),s=J(e);if(n===null)return e;if(n===s)return ze(ve(t),ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function iu(t,e){if(Rn(t)!==Rn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function yt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Rn(t)>Rn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class HR{constructor(e,n){this.errorPrefix_=n,this.parts_=Vm(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Zo(this.parts_[s]);zm(this)}}function WR(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Zo(e),zm(t)}function VR(t){const e=t.parts_.pop();t.byteLength_-=Zo(e),t.parts_.length>0&&(t.byteLength_-=1)}function zm(t){if(t.byteLength_>Xf)throw new Error(t.errorPrefix_+"has a key path longer than "+Xf+" bytes ("+t.byteLength_+").");if(t.parts_.length>Jf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Jf+") or object contains a cycle "+Bn(t))}function Bn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class ou extends Hm{static getInstance(){return new ou}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const yr=1e3,KR=60*5*1e3,Zf=30*1e3,zR=1.3,qR=3e4,GR="server_kill",eh=3;class qt extends jm{constructor(e,n,s,r,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=qt.nextPersistentConnectionId_++,this.log_=mi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=yr,this.maxReconnectDelay_=KR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!og())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ou.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&vo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const r=++this.requestNumber_,i={r,a:e,b:n};this.log_(xe(i)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const n=new Jo,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;qt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ft(e,"w")){const s=Vs(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();tt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||HI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Zf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=jI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,n)}sendUnlisten_(e,n,s,r){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,r){const i={p:n,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,s,r){this.putInternal("p",e,n,s,r)}merge(e,n,s,r){this.putInternal("m",e,n,s,r)}putInternal(e,n,s,r,i){this.initConnection_();const o={p:n,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+xe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ul("Unrecognized action received from server: "+xe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=yr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=yr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>qR&&(this.reconnectDelay_=yr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*zR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+qt.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?He("getToken() completed but was canceled"):(He("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new BR(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{tt(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(GR)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&tt(d),l())}}}interrupt(e){He("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){He("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Il(this.interruptReasons_)&&(this.reconnectDelay_=yr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(i=>tu(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const s=new pe(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(n),i.delete(n),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,n){He("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=eh&&(this.reconnectDelay_=Zf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){He("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=eh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+bm.replace(/\./g,"-")]=1,Nc()?e["framework.cordova"]=1:ig()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=vo.getInstance().currentlyOnline();return Il(this.interruptReasons_)&&e}}qt.nextPersistentConnectionId_=0;qt.nextConnectionId_=0;/**
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
 */class ee{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ee(e,n)}}/**
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
 */class aa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ee(rs,e),r=new ee(rs,n);return this.compare(s,r)!==0}minPost(){return ee.MIN}}/**
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
 */let Mi;class qm extends aa{static get __EMPTY_NODE(){return Mi}static set __EMPTY_NODE(e){Mi=e}compare(e,n){return lr(e.name,n.name)}isDefinedOn(e){throw nr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ee.MIN}maxPost(){return new ee(kn,Mi)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new ee(e,Mi)}toString(){return".key"}}const Qn=new qm;/**
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
 */class Di{constructor(e,n,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class De{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??De.RED,this.left=r??Xe.EMPTY_NODE,this.right=i??Xe.EMPTY_NODE}copy(e,n,s,r,i){return new De(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Xe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,r;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Xe.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}De.RED=!0;De.BLACK=!1;class YR{copy(e,n,s,r,i){return this}insert(e,n,s){return new De(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Xe{constructor(e,n=Xe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Xe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,De.BLACK,null,null))}remove(e){return new Xe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,De.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,r=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Di(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Di(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Di(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Di(this.root_,null,this.comparator_,!0,e)}}Xe.EMPTY_NODE=new YR;/**
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
 */function QR(t,e){return lr(t.name,e.name)}function au(t,e){return lr(t,e)}/**
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
 */let Bl;function JR(t){Bl=t}const Gm=function(t){return typeof t=="number"?"number:"+Cm(t):"string:"+t},Ym=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ft(e,".sv"),"Priority must be a string or number.")}else T(t===Bl||t.isEmpty(),"priority of unexpected type.");T(t===Bl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let th;class Me{static set __childrenNodeConstructor(e){th=e}static get __childrenNodeConstructor(){return th}constructor(e,n=Me.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ym(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Me(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return X(e)?this:J(e)===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=J(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||Rn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Me.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Gm(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Cm(this.value_):e+=this.value_,this.lazyHash_=Em(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Me.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Me.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,r=Me.VALUE_TYPE_ORDER.indexOf(n),i=Me.VALUE_TYPE_ORDER.indexOf(s);return T(r>=0,"Unknown leaf type: "+n),T(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Qm,Jm;function XR(t){Qm=t}function ZR(t){Jm=t}class eA extends aa{compare(e,n){const s=e.node.getPriority(),r=n.node.getPriority(),i=s.compareTo(r);return i===0?lr(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ee.MIN}maxPost(){return new ee(kn,new Me("[PRIORITY-POST]",Jm))}makePost(e,n){const s=Qm(e);return new ee(n,new Me("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ce=new eA;/**
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
 */const tA=Math.log(2);class nA{constructor(e){const n=i=>parseInt(Math.log(i)/tA,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const yo=function(t,e,n,s){t.sort(e);const r=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=t[l],f=n?n(d):d,new De(f,d.node,De.BLACK,null,null);{const p=parseInt(u/2,10)+l,g=r(l,p),_=r(p+1,c);return d=t[p],f=n?n(d):d,new De(f,d.node,De.BLACK,g,_)}},i=function(l){let c=null,u=null,d=t.length;const f=function(g,_){const v=d-g,I=d;d-=g;const S=r(v+1,I),M=t[v],A=n?n(M):M;p(new De(A,M.node,_,null,S))},p=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const _=l.nextBitIsOne(),v=Math.pow(2,l.count-(g+1));_?f(v,De.BLACK):(f(v,De.BLACK),f(v,De.RED))}return u},o=new nA(t.length),a=i(o);return new Xe(s||e,a)};/**
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
 */let Va;const bs={};class Kt{static get Default(){return T(bs&&Ce,"ChildrenNode.ts has not been loaded"),Va=Va||new Kt({".priority":bs},{".priority":Ce}),Va}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Vs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Xe?n:null}hasIndex(e){return Ft(this.indexSet_,e.toString())}addIndex(e,n){T(e!==Qn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=n.getIterator(ee.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=yo(s,e.getCompare()):a=bs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Kt(u,c)}addToIndexes(e,n){const s=ao(this.indexes_,(r,i)=>{const o=Vs(this.indexSet_,i);if(T(o,"Missing index implementation for "+i),r===bs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ee.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),yo(a,o.getCompare())}else return bs;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new ee(e.name,a))),l.insert(e,e.node)}});return new Kt(s,this.indexSet_)}removeFromIndexes(e,n){const s=ao(this.indexes_,r=>{if(r===bs)return r;{const i=n.get(e.name);return i?r.remove(new ee(e.name,i)):r}});return new Kt(s,this.indexSet_)}}/**
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
 */let br;class K{static get EMPTY_NODE(){return br||(br=new K(new Xe(au),null,Kt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Ym(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||br}updatePriority(e){return this.children_.isEmpty()?this:new K(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?br:n}}getChild(e){const n=J(e);return n===null?this:this.getImmediateChild(n).getChild(ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ee(e,n);let r,i;n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?br:this.priorityNode_;return new K(r,o,i)}}updateChild(e,n){const s=J(e);if(s===null)return n;{T(J(e)!==".priority"||Rn(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(ve(e),n);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,r=0,i=!0;if(this.forEachChild(Ce,(o,a)=>{n[o]=a.val(e),s++,i&&K.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Gm(this.getPriority().val())+":"),this.forEachChild(Ce,(n,s)=>{const r=s.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":Em(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new ee(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ee(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ee(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,ee.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,ee.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===_i?-1:0}withIndex(e){if(e===Qn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new K(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Qn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ce),r=n.getIterator(Ce);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Qn?null:this.indexMap_.get(e.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class sA extends K{constructor(){super(new Xe(au),K.EMPTY_NODE,Kt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return K.EMPTY_NODE}isEmpty(){return!1}}const _i=new sA;Object.defineProperties(ee,{MIN:{value:new ee(rs,K.EMPTY_NODE)},MAX:{value:new ee(kn,_i)}});qm.__EMPTY_NODE=K.EMPTY_NODE;Me.__childrenNodeConstructor=K;JR(_i);ZR(_i);/**
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
 */const rA=!0;function Fe(t,e=null){if(t===null)return K.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Me(n,Fe(e))}if(!(t instanceof Array)&&rA){const n=[];let s=!1;if(st(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Fe(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ee(o,l)))}}),n.length===0)return K.EMPTY_NODE;const i=yo(n,QR,o=>o.name,au);if(s){const o=yo(n,Ce.getCompare());return new K(i,Fe(e),new Kt({".priority":o},{".priority":Ce}))}else return new K(i,Fe(e),Kt.Default)}else{let n=K.EMPTY_NODE;return st(t,(s,r)=>{if(Ft(t,s)&&s.substring(0,1)!=="."){const i=Fe(r);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(s,i))}}),n.updatePriority(Fe(e))}}XR(Fe);/**
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
 */class lu extends aa{constructor(e){super(),this.indexPath_=e,T(!X(e)&&J(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),r=this.extractChild(n.node),i=s.compareTo(r);return i===0?lr(e.name,n.name):i}makePost(e,n){const s=Fe(e),r=K.EMPTY_NODE.updateChild(this.indexPath_,s);return new ee(n,r)}maxPost(){const e=K.EMPTY_NODE.updateChild(this.indexPath_,_i);return new ee(kn,e)}toString(){return Vm(this.indexPath_,0).join("/")}}/**
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
 */class iA extends aa{compare(e,n){const s=e.node.compareTo(n.node);return s===0?lr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ee.MIN}maxPost(){return ee.MAX}makePost(e,n){const s=Fe(e);return new ee(n,s)}toString(){return".value"}}const Xm=new iA;/**
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
 */function Zm(t){return{type:"value",snapshotNode:t}}function qs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function si(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ri(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function oA(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class cu{constructor(e){this.index_=e}updateChild(e,n,s,r,i,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(s.getChild(r))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(si(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(qs(n,s)):o.trackChildChange(ri(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ce,(r,i)=>{n.hasChild(r)||s.trackChildChange(si(r,i))}),n.isLeafNode()||n.forEachChild(Ce,(r,i)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(i)||s.trackChildChange(ri(r,i,o))}else s.trackChildChange(qs(r,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?K.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ii{constructor(e){this.indexedFilter_=new cu(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ii.getStartPost_(e),this.endPost_=ii.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,r,i,o){return this.matches(new ee(n,s))||(s=K.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,r,i,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=K.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(K.EMPTY_NODE);const i=this;return n.forEachChild(Ce,(o,a)=>{i.matches(new ee(o,a))||(r=r.updateImmediateChild(o,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class aA{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ii(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,r,i,o){return this.rangedFilter_.matches(new ee(n,s))||(s=K.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,r,i,o):this.fullLimitUpdateChild_(e,n,s,i,o)}updateFullNode(e,n,s){let r;if(n.isLeafNode()||n.isEmpty())r=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=K.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=n.withIndex(this.index_),r=r.updatePriority(K.EMPTY_NODE);let i;this.reverse_?i=r.getReverseIterator(this.index_):i=r.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,r,i){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,p)=>d(p,f)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new ee(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=r.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=r.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(u&&!s.isEmpty()&&p>=0)return i!=null&&i.trackChildChange(ri(n,s,d)),a.updateImmediateChild(n,s);{i!=null&&i.trackChildChange(si(n,d));const _=a.updateImmediateChild(n,K.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(i!=null&&i.trackChildChange(qs(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return s.isEmpty()?e:u&&o(c,l)>=0?(i!=null&&(i.trackChildChange(si(c.name,c.node)),i.trackChildChange(qs(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,K.EMPTY_NODE)):e}}/**
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
 */class uu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ce}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:rs}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:kn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ce}copy(){const e=new uu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function lA(t){return t.loadsAllData()?new cu(t.getIndex()):t.hasLimit()?new aA(t):new ii(t)}function cA(t,e,n){const s=t.copy();return s.startSet_=!0,e===void 0&&(e=null),s.indexStartValue_=e,n!=null?(s.startNameSet_=!0,s.indexStartName_=n):(s.startNameSet_=!1,s.indexStartName_=""),s}function uA(t,e,n){const s=t.copy();return s.endSet_=!0,e===void 0&&(e=null),s.indexEndValue_=e,n!==void 0?(s.endNameSet_=!0,s.indexEndName_=n):(s.endNameSet_=!1,s.indexEndName_=""),s}function dA(t,e){const n=t.copy();return n.index_=e,n}function nh(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ce?n="$priority":t.index_===Xm?n="$value":t.index_===Qn?n="$key":(T(t.index_ instanceof lu,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=xe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=xe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+xe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=xe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+xe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function sh(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ce&&(e.i=t.index_.toString()),e}/**
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
 */class bo extends jm{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=mi("p:rest:"),this.listens_={}}listen(e,n,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=bo.getListenId_(e,s),a={};this.listens_[o]=a;const l=nh(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(i,d,!1,s),Vs(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",r(f,null)}})}unlisten(e,n){const s=bo.getListenId_(e,n);delete this.listens_[s]}get(e){const n=nh(e._queryParams),s=e._path.toString(),r=new Jo;return this.restRequest_(s+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(n.auth=r.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+sr(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Yr(a.responseText)}catch{tt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&tt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class fA{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function wo(){return{value:null,children:new Map}}function e_(t,e,n){if(X(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=J(e);t.children.has(s)||t.children.set(s,wo());const r=t.children.get(s);e=ve(e),e_(r,e,n)}}function jl(t,e,n){t.value!==null?n(e,t.value):hA(t,(s,r)=>{const i=new pe(e.toString()+"/"+s);jl(r,i,n)})}function hA(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class pA{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&st(this.last_,(s,r)=>{n[s]=n[s]-r}),this.last_=e,n}}/**
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
 */const rh=10*1e3,gA=30*1e3,mA=5*60*1e3;class _A{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new pA(e);const s=rh+(gA-rh)*Math.random();Mr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;st(e,(r,i)=>{i>0&&Ft(this.statsToReport_,r)&&(n[r]=i,s=!0)}),s&&this.server_.reportStats(n),Mr(this.reportStats_.bind(this),Math.floor(Math.random()*2*mA))}}/**
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
 */var bt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(bt||(bt={}));function t_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function du(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function fu(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Eo{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=bt.ACK_USER_WRITE,this.source=t_()}operationForChild(e){if(X(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new pe(e));return new Eo(oe(),n,this.revert)}}else return T(J(this.path)===e,"operationForChild called for unrelated child."),new Eo(ve(this.path),this.affectedTree,this.revert)}}/**
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
 */class oi{constructor(e,n){this.source=e,this.path=n,this.type=bt.LISTEN_COMPLETE}operationForChild(e){return X(this.path)?new oi(this.source,oe()):new oi(this.source,ve(this.path))}}/**
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
 */class is{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=bt.OVERWRITE}operationForChild(e){return X(this.path)?new is(this.source,oe(),this.snap.getImmediateChild(e)):new is(this.source,ve(this.path),this.snap)}}/**
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
 */class ai{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=bt.MERGE}operationForChild(e){if(X(this.path)){const n=this.children.subtree(new pe(e));return n.isEmpty()?null:n.value?new is(this.source,oe(),n.value):new ai(this.source,oe(),n)}else return T(J(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ai(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class An{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(X(e))return this.isFullyInitialized()&&!this.filtered_;const n=J(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class vA{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function yA(t,e,n,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(oA(o.childName,o.snapshotNode))}),wr(t,r,"child_removed",e,s,n),wr(t,r,"child_added",e,s,n),wr(t,r,"child_moved",i,s,n),wr(t,r,"child_changed",e,s,n),wr(t,r,"value",e,s,n),r}function wr(t,e,n,s,r,i){const o=s.filter(a=>a.type===n);o.sort((a,l)=>wA(t,a,l)),o.forEach(a=>{const l=bA(t,a,i);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function bA(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function wA(t,e,n){if(e.childName==null||n.childName==null)throw nr("Should only compare child_ events.");const s=new ee(e.childName,e.snapshotNode),r=new ee(n.childName,n.snapshotNode);return t.index_.compare(s,r)}/**
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
 */function la(t,e){return{eventCache:t,serverCache:e}}function Dr(t,e,n,s){return la(new An(e,n,s),t.serverCache)}function n_(t,e,n,s){return la(t.eventCache,new An(e,n,s))}function Io(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function os(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ka;const EA=()=>(Ka||(Ka=new Xe(oR)),Ka);class be{static fromObject(e){let n=new be(null);return st(e,(s,r)=>{n=n.set(new pe(s),r)}),n}constructor(e,n=EA()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:oe(),value:this.value};if(X(e))return null;{const s=J(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(ve(e),n);return i!=null?{path:Ne(new pe(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(X(e))return this;{const n=J(e),s=this.children.get(n);return s!==null?s.subtree(ve(e)):new be(null)}}set(e,n){if(X(e))return new be(n,this.children);{const s=J(e),i=(this.children.get(s)||new be(null)).set(ve(e),n),o=this.children.insert(s,i);return new be(this.value,o)}}remove(e){if(X(e))return this.children.isEmpty()?new be(null):new be(null,this.children);{const n=J(e),s=this.children.get(n);if(s){const r=s.remove(ve(e));let i;return r.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,r),this.value===null&&i.isEmpty()?new be(null):new be(this.value,i)}else return this}}get(e){if(X(e))return this.value;{const n=J(e),s=this.children.get(n);return s?s.get(ve(e)):null}}setTree(e,n){if(X(e))return n;{const s=J(e),i=(this.children.get(s)||new be(null)).setTree(ve(e),n);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new be(this.value,o)}}fold(e){return this.fold_(oe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(Ne(e,r),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,oe(),n)}findOnPath_(e,n,s){const r=this.value?s(n,this.value):!1;if(r)return r;if(X(e))return null;{const i=J(e),o=this.children.get(i);return o?o.findOnPath_(ve(e),Ne(n,i),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,oe(),n)}foreachOnPath_(e,n,s){if(X(e))return this;{this.value&&s(n,this.value);const r=J(e),i=this.children.get(r);return i?i.foreachOnPath_(ve(e),Ne(n,r),s):new be(null)}}foreach(e){this.foreach_(oe(),e)}foreach_(e,n){this.children.inorderTraversal((s,r)=>{r.foreach_(Ne(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class It{constructor(e){this.writeTree_=e}static empty(){return new It(new be(null))}}function Lr(t,e,n){if(X(e))return new It(new be(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=ze(r,e);return i=i.updateChild(o,n),new It(t.writeTree_.set(r,i))}else{const r=new be(n),i=t.writeTree_.setTree(e,r);return new It(i)}}}function ih(t,e,n){let s=t;return st(n,(r,i)=>{s=Lr(s,Ne(e,r),i)}),s}function oh(t,e){if(X(e))return It.empty();{const n=t.writeTree_.setTree(e,new be(null));return new It(n)}}function Hl(t,e){return hs(t,e)!=null}function hs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ze(n.path,e)):null}function ah(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ce,(s,r)=>{e.push(new ee(s,r))}):t.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new ee(s,r.value))}),e}function En(t,e){if(X(e))return t;{const n=hs(t,e);return n!=null?new It(new be(n)):new It(t.writeTree_.subtree(e))}}function Wl(t){return t.writeTree_.isEmpty()}function Gs(t,e){return s_(oe(),t.writeTree_,e)}function s_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(T(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):n=s_(Ne(t,r),i,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ne(t,".priority"),s)),n}}/**
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
 */function ca(t,e){return a_(e,t)}function IA(t,e,n,s,r){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:r}),r&&(t.visibleWrites=Lr(t.visibleWrites,e,n)),t.lastWriteId=s}function CA(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function TA(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let r=s.visible,i=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&SA(a,s.path)?r=!1:yt(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return kA(t),!0;if(s.snap)t.visibleWrites=oh(t.visibleWrites,s.path);else{const a=s.children;st(a,l=>{t.visibleWrites=oh(t.visibleWrites,Ne(s.path,l))})}return!0}else return!1}function SA(t,e){if(t.snap)return yt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&yt(Ne(t.path,n),e))return!0;return!1}function kA(t){t.visibleWrites=r_(t.allWrites,RA,oe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function RA(t){return t.visible}function r_(t,e,n){let s=It.empty();for(let r=0;r<t.length;++r){const i=t[r];if(e(i)){const o=i.path;let a;if(i.snap)yt(n,o)?(a=ze(n,o),s=Lr(s,a,i.snap)):yt(o,n)&&(a=ze(o,n),s=Lr(s,oe(),i.snap.getChild(a)));else if(i.children){if(yt(n,o))a=ze(n,o),s=ih(s,a,i.children);else if(yt(o,n))if(a=ze(o,n),X(a))s=ih(s,oe(),i.children);else{const l=Vs(i.children,J(a));if(l){const c=l.getChild(ve(a));s=Lr(s,oe(),c)}}}else throw nr("WriteRecord should have .snap or .children")}}return s}function i_(t,e,n,s,r){if(!s&&!r){const i=hs(t.visibleWrites,e);if(i!=null)return i;{const o=En(t.visibleWrites,e);if(Wl(o))return n;if(n==null&&!Hl(o,oe()))return null;{const a=n||K.EMPTY_NODE;return Gs(o,a)}}}else{const i=En(t.visibleWrites,e);if(!r&&Wl(i))return n;if(!r&&n==null&&!Hl(i,oe()))return null;{const o=function(c){return(c.visible||r)&&(!s||!~s.indexOf(c.writeId))&&(yt(c.path,e)||yt(e,c.path))},a=r_(t.allWrites,o,e),l=n||K.EMPTY_NODE;return Gs(a,l)}}}function AA(t,e,n){let s=K.EMPTY_NODE;const r=hs(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Ce,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(n){const i=En(t.visibleWrites,e);return n.forEachChild(Ce,(o,a)=>{const l=Gs(En(i,new pe(o)),a);s=s.updateImmediateChild(o,l)}),ah(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=En(t.visibleWrites,e);return ah(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function PA(t,e,n,s,r){T(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=Ne(e,n);if(Hl(t.visibleWrites,i))return null;{const o=En(t.visibleWrites,i);return Wl(o)?r.getChild(n):Gs(o,r.getChild(n))}}function xA(t,e,n,s){const r=Ne(e,n),i=hs(t.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(n)){const o=En(t.visibleWrites,r);return Gs(o,s.getNode().getImmediateChild(n))}else return null}function NA(t,e){return hs(t.visibleWrites,e)}function OA(t,e,n,s,r,i,o){let a;const l=En(t.visibleWrites,e),c=hs(l,oe());if(c!=null)a=c;else if(n!=null)a=Gs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=f.getNext();for(;p&&u.length<r;)d(p,s)!==0&&u.push(p),p=f.getNext();return u}else return[]}function MA(){return{visibleWrites:It.empty(),allWrites:[],lastWriteId:-1}}function Co(t,e,n,s){return i_(t.writeTree,t.treePath,e,n,s)}function hu(t,e){return AA(t.writeTree,t.treePath,e)}function lh(t,e,n,s){return PA(t.writeTree,t.treePath,e,n,s)}function To(t,e){return NA(t.writeTree,Ne(t.treePath,e))}function DA(t,e,n,s,r,i){return OA(t.writeTree,t.treePath,e,n,s,r,i)}function pu(t,e,n){return xA(t.writeTree,t.treePath,e,n)}function o_(t,e){return a_(Ne(t.treePath,e),t.writeTree)}function a_(t,e){return{treePath:t,writeTree:e}}/**
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
 */class LA{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(s,ri(s,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(s,si(s,r.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(s,qs(s,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(s,ri(s,e.snapshotNode,r.oldSnap));else throw nr("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class FA{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const l_=new FA;class gu{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new An(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return pu(this.writes_,e,s)}}getChildAfterChild(e,n,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:os(this.viewCache_),i=DA(this.writes_,r,n,1,s,e);return i.length===0?null:i[0]}}/**
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
 */function UA(t){return{filter:t}}function $A(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function BA(t,e,n,s,r){const i=new LA;let o,a;if(n.type===bt.OVERWRITE){const c=n;c.source.fromUser?o=Vl(t,e,c.path,c.snap,s,r,i):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!X(c.path),o=So(t,e,c.path,c.snap,s,r,a,i))}else if(n.type===bt.MERGE){const c=n;c.source.fromUser?o=HA(t,e,c.path,c.children,s,r,i):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Kl(t,e,c.path,c.children,s,r,a,i))}else if(n.type===bt.ACK_USER_WRITE){const c=n;c.revert?o=KA(t,e,c.path,s,r,i):o=WA(t,e,c.path,c.affectedTree,s,r,i)}else if(n.type===bt.LISTEN_COMPLETE)o=VA(t,e,n.path,s,i);else throw nr("Unknown operation type: "+n.type);const l=i.getChanges();return jA(e,o,l),{viewCache:o,changes:l}}function jA(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=Io(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push(Zm(Io(e)))}}function c_(t,e,n,s,r,i){const o=e.eventCache;if(To(s,n)!=null)return e;{let a,l;if(X(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=os(e),u=c instanceof K?c:K.EMPTY_NODE,d=hu(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const c=Co(s,os(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=J(n);if(c===".priority"){T(Rn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=lh(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=ve(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=lh(s,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=pu(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,r,i):a=o.getNode()}}return Dr(e,a,o.isFullyInitialized()||X(n),t.filter.filtersNodes())}}function So(t,e,n,s,r,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(X(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=J(n);if(!l.isCompleteForPath(n)&&Rn(n)>1)return e;const g=ve(n),v=l.getNode().getImmediateChild(p).updateChild(g,s);p===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),p,v,g,l_,null)}const d=n_(e,c,l.isFullyInitialized()||X(n),u.filtersNodes()),f=new gu(r,d,i);return c_(t,d,n,r,f,a)}function Vl(t,e,n,s,r,i,o){const a=e.eventCache;let l,c;const u=new gu(r,e,i);if(X(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Dr(e,c,!0,t.filter.filtersNodes());else{const d=J(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Dr(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=ve(n),p=a.getNode().getImmediateChild(d);let g;if(X(f))g=s;else{const _=u.getCompleteChild(d);_!=null?Wm(f)===".priority"&&_.getChild(Km(f)).isEmpty()?g=_:g=_.updateChild(f,s):g=K.EMPTY_NODE}if(p.equals(g))l=e;else{const _=t.filter.updateChild(a.getNode(),d,g,f,u,o);l=Dr(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function ch(t,e){return t.eventCache.isCompleteForChild(e)}function HA(t,e,n,s,r,i,o){let a=e;return s.foreach((l,c)=>{const u=Ne(n,l);ch(e,J(u))&&(a=Vl(t,a,u,c,r,i,o))}),s.foreach((l,c)=>{const u=Ne(n,l);ch(e,J(u))||(a=Vl(t,a,u,c,r,i,o))}),a}function uh(t,e,n){return n.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function Kl(t,e,n,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;X(n)?c=s:c=new be(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),g=uh(t,p,f);l=So(t,l,new pe(d),g,r,i,o,a)}}),c.children.inorderTraversal((d,f)=>{const p=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!p){const g=e.serverCache.getNode().getImmediateChild(d),_=uh(t,g,f);l=So(t,l,new pe(d),_,r,i,o,a)}}),l}function WA(t,e,n,s,r,i,o){if(To(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(X(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return So(t,e,n,l.getNode().getChild(n),r,i,a,o);if(X(n)){let c=new be(null);return l.getNode().forEachChild(Qn,(u,d)=>{c=c.set(new pe(u),d)}),Kl(t,e,n,c,r,i,a,o)}else return e}else{let c=new be(null);return s.foreach((u,d)=>{const f=Ne(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Kl(t,e,n,c,r,i,a,o)}}function VA(t,e,n,s,r){const i=e.serverCache,o=n_(e,i.getNode(),i.isFullyInitialized()||X(n),i.isFiltered());return c_(t,o,n,s,l_,r)}function KA(t,e,n,s,r,i){let o;if(To(s,n)!=null)return e;{const a=new gu(s,e,r),l=e.eventCache.getNode();let c;if(X(n)||J(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Co(s,os(e));else{const d=e.serverCache.getNode();T(d instanceof K,"serverChildren would be complete if leaf node"),u=hu(s,d)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=J(n);let d=pu(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,ve(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,K.EMPTY_NODE,ve(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Co(s,os(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||To(s,oe())!=null,Dr(e,c,o,t.filter.filtersNodes())}}/**
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
 */class zA{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,r=new cu(s.getIndex()),i=lA(s);this.processor_=UA(i);const o=n.serverCache,a=n.eventCache,l=r.updateFullNode(K.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(K.EMPTY_NODE,a.getNode(),null),u=new An(l,o.isFullyInitialized(),r.filtersNodes()),d=new An(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=la(d,u),this.eventGenerator_=new vA(this.query_)}get query(){return this.query_}}function qA(t){return t.viewCache_.serverCache.getNode()}function GA(t){return Io(t.viewCache_)}function YA(t,e){const n=os(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!X(e)&&!n.getImmediateChild(J(e)).isEmpty())?n.getChild(e):null}function dh(t){return t.eventRegistrations_.length===0}function QA(t,e){t.eventRegistrations_.push(e)}function fh(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,r);o&&s.push(o)})}if(e){let r=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return s}function hh(t,e,n,s){e.type===bt.MERGE&&e.source.queryId!==null&&(T(os(t.viewCache_),"We should always have a full cache before handling merges"),T(Io(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,i=BA(t.processor_,r,e,n,s);return $A(t.processor_,i.viewCache),T(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,u_(t,i.changes,i.viewCache.eventCache.getNode(),null)}function JA(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ce,(i,o)=>{s.push(qs(i,o))}),n.isFullyInitialized()&&s.push(Zm(n.getNode())),u_(t,s,n.getNode(),e)}function u_(t,e,n,s){const r=s?[s]:t.eventRegistrations_;return yA(t.eventGenerator_,e,n,r)}/**
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
 */let ko;class d_{constructor(){this.views=new Map}}function XA(t){T(!ko,"__referenceConstructor has already been defined"),ko=t}function ZA(){return T(ko,"Reference.ts has not been loaded"),ko}function eP(t){return t.views.size===0}function mu(t,e,n,s){const r=e.source.queryId;if(r!==null){const i=t.views.get(r);return T(i!=null,"SyncTree gave us an op for an invalid query."),hh(i,e,n,s)}else{let i=[];for(const o of t.views.values())i=i.concat(hh(o,e,n,s));return i}}function f_(t,e,n,s,r){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=Co(n,r?s:null),l=!1;a?l=!0:s instanceof K?(a=hu(n,s),l=!1):(a=K.EMPTY_NODE,l=!1);const c=la(new An(a,l,!1),new An(s,r,!1));return new zA(e,c)}return o}function tP(t,e,n,s,r,i){const o=f_(t,e,s,r,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),QA(o,n),JA(o,n)}function nP(t,e,n,s){const r=e._queryIdentifier,i=[];let o=[];const a=Pn(t);if(r==="default")for(const[l,c]of t.views.entries())o=o.concat(fh(c,n,s)),dh(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||i.push(c.query));else{const l=t.views.get(r);l&&(o=o.concat(fh(l,n,s)),dh(l)&&(t.views.delete(r),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!Pn(t)&&i.push(new(ZA())(e._repo,e._path)),{removed:i,events:o}}function h_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function In(t,e){let n=null;for(const s of t.views.values())n=n||YA(s,e);return n}function p_(t,e){if(e._queryParams.loadsAllData())return ua(t);{const s=e._queryIdentifier;return t.views.get(s)}}function g_(t,e){return p_(t,e)!=null}function Pn(t){return ua(t)!=null}function ua(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ro;function sP(t){T(!Ro,"__referenceConstructor has already been defined"),Ro=t}function rP(){return T(Ro,"Reference.ts has not been loaded"),Ro}let iP=1;class ph{constructor(e){this.listenProvider_=e,this.syncPointTree_=new be(null),this.pendingWriteTree_=MA(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function m_(t,e,n,s,r){return IA(t.pendingWriteTree_,e,n,s,r),r?yi(t,new is(t_(),e,n)):[]}function zn(t,e,n=!1){const s=CA(t.pendingWriteTree_,e);if(TA(t.pendingWriteTree_,e)){let i=new be(null);return s.snap!=null?i=i.set(oe(),!0):st(s.children,o=>{i=i.set(new pe(o),!0)}),yi(t,new Eo(s.path,i,n))}else return[]}function vi(t,e,n){return yi(t,new is(du(),e,n))}function oP(t,e,n){const s=be.fromObject(n);return yi(t,new ai(du(),e,s))}function aP(t,e){return yi(t,new oi(du(),e))}function lP(t,e,n){const s=vu(t,n);if(s){const r=yu(s),i=r.path,o=r.queryId,a=ze(i,e),l=new oi(fu(o),a);return bu(t,i,l)}else return[]}function Ao(t,e,n,s,r=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||g_(o,e))){const l=nP(o,e,n,s);eP(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=l.removed;if(a=l.events,!r){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(i,(f,p)=>Pn(p));if(u&&!d){const f=t.syncPointTree_.subtree(i);if(!f.isEmpty()){const p=dP(f);for(let g=0;g<p.length;++g){const _=p[g],v=_.query,I=b_(t,_);t.listenProvider_.startListening(Fr(v),li(t,v),I.hashFn,I.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Fr(e),null):c.forEach(f=>{const p=t.queryToTagMap.get(da(f));t.listenProvider_.stopListening(Fr(f),p)}))}fP(t,c)}return a}function __(t,e,n,s){const r=vu(t,s);if(r!=null){const i=yu(r),o=i.path,a=i.queryId,l=ze(o,e),c=new is(fu(a),l,n);return bu(t,o,c)}else return[]}function cP(t,e,n,s){const r=vu(t,s);if(r){const i=yu(r),o=i.path,a=i.queryId,l=ze(o,e),c=be.fromObject(n),u=new ai(fu(a),l,c);return bu(t,o,u)}else return[]}function zl(t,e,n,s=!1){const r=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(r,(f,p)=>{const g=ze(f,r);i=i||In(p,g),o=o||Pn(p)});let a=t.syncPointTree_.get(r);a?(o=o||Pn(a),i=i||In(a,oe())):(a=new d_,t.syncPointTree_=t.syncPointTree_.set(r,a));let l;i!=null?l=!0:(l=!1,i=K.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((p,g)=>{const _=In(g,oe());_&&(i=i.updateImmediateChild(p,_))}));const c=g_(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=da(e);T(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=hP();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const u=ca(t.pendingWriteTree_,r);let d=tP(a,e,n,u,i,l);if(!c&&!o&&!s){const f=p_(a,e);d=d.concat(pP(t,e,f))}return d}function _u(t,e,n){const r=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ze(o,e),c=In(a,l);if(c)return c});return i_(r,e,i,n,!0)}function uP(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=ze(c,n);s=s||In(u,d)});let r=t.syncPointTree_.get(n);r?s=s||In(r,oe()):(r=new d_,t.syncPointTree_=t.syncPointTree_.set(n,r));const i=s!=null,o=i?new An(s,!0,!1):null,a=ca(t.pendingWriteTree_,e._path),l=f_(r,e,a,i?o.getNode():K.EMPTY_NODE,i);return GA(l)}function yi(t,e){return v_(e,t.syncPointTree_,null,ca(t.pendingWriteTree_,oe()))}function v_(t,e,n,s){if(X(t.path))return y_(t,e,n,s);{const r=e.get(oe());n==null&&r!=null&&(n=In(r,oe()));let i=[];const o=J(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=o_(s,o);i=i.concat(v_(a,l,c,u))}return r&&(i=i.concat(mu(r,t,s,n))),i}}function y_(t,e,n,s){const r=e.get(oe());n==null&&r!=null&&(n=In(r,oe()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=o_(s,o),u=t.operationForChild(o);u&&(i=i.concat(y_(u,a,l,c)))}),r&&(i=i.concat(mu(r,t,s,n))),i}function b_(t,e){const n=e.query,s=li(t,n);return{hashFn:()=>(qA(e)||K.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return s?lP(t,n._path,s):aP(t,n._path);{const i=cR(r,n);return Ao(t,n,null,i)}}}}function li(t,e){const n=da(e);return t.queryToTagMap.get(n)}function da(t){return t._path.toString()+"$"+t._queryIdentifier}function vu(t,e){return t.tagToQueryMap.get(e)}function yu(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new pe(t.substr(0,e))}}function bu(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const r=ca(t.pendingWriteTree_,e);return mu(s,n,r,null)}function dP(t){return t.fold((e,n,s)=>{if(n&&Pn(n))return[ua(n)];{let r=[];return n&&(r=h_(n)),st(s,(i,o)=>{r=r.concat(o)}),r}})}function Fr(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(rP())(t._repo,t._path):t}function fP(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const r=da(s),i=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(i)}}}function hP(){return iP++}function pP(t,e,n){const s=e._path,r=li(t,e),i=b_(t,n),o=t.listenProvider_.startListening(Fr(e),r,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(s);if(r)T(!Pn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!X(c)&&u&&Pn(u))return[ua(u).query];{let f=[];return u&&(f=f.concat(h_(u).map(p=>p.query))),st(d,(p,g)=>{f=f.concat(g)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Fr(u),li(t,u))}}return o}/**
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
 */class wu{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new wu(n)}node(){return this.node_}}class Eu{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ne(this.path_,e);return new Eu(this.syncTree_,n)}node(){return _u(this.syncTree_,this.path_)}}const gP=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},gh=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return mP(t[".sv"],e,n);if(typeof t[".sv"]=="object")return _P(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},mP=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},_P=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const r=e.node();if(T(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},vP=function(t,e,n,s){return Iu(e,new Eu(n,t),s)},w_=function(t,e,n){return Iu(t,new wu(e),n)};function Iu(t,e,n){const s=t.getPriority().val(),r=gh(s,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=gh(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new Me(a,Fe(r)):t}else{const o=t;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new Me(r))),o.forEachChild(Ce,(a,l)=>{const c=Iu(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
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
 */class Cu{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Tu(t,e){let n=e instanceof pe?e:new pe(e),s=t,r=J(n);for(;r!==null;){const i=Vs(s.node.children,r)||{children:{},childCount:0};s=new Cu(r,s,i),n=ve(n),r=J(n)}return s}function ur(t){return t.node.value}function E_(t,e){t.node.value=e,ql(t)}function I_(t){return t.node.childCount>0}function yP(t){return ur(t)===void 0&&!I_(t)}function fa(t,e){st(t.node.children,(n,s)=>{e(new Cu(n,t,s))})}function C_(t,e,n,s){n&&!s&&e(t),fa(t,r=>{C_(r,e,!0,s)}),n&&s&&e(t)}function bP(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function bi(t){return new pe(t.parent===null?t.name:bi(t.parent)+"/"+t.name)}function ql(t){t.parent!==null&&wP(t.parent,t.name,t)}function wP(t,e,n){const s=yP(n),r=Ft(t.node.children,e);s&&r?(delete t.node.children[e],t.node.childCount--,ql(t)):!s&&!r&&(t.node.children[e]=n.node,t.node.childCount++,ql(t))}/**
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
 */const EP=/[\[\].#$\/\u0000-\u001F\u007F]/,IP=/[\[\].#$\u0000-\u001F\u007F]/,za=10*1024*1024,Su=function(t){return typeof t=="string"&&t.length!==0&&!EP.test(t)},T_=function(t){return typeof t=="string"&&t.length!==0&&!IP.test(t)},CP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),T_(t)},mh=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!eu(t)||t&&typeof t=="object"&&Ft(t,".sv")},wi=function(t,e,n,s){s&&e===void 0||ku(Xo(t,"value"),e,n)},ku=function(t,e,n){const s=n instanceof pe?new HR(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Bn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Bn(s)+" with contents = "+e.toString());if(eu(e))throw new Error(t+"contains "+e.toString()+" "+Bn(s));if(typeof e=="string"&&e.length>za/3&&Zo(e)>za)throw new Error(t+"contains a string greater than "+za+" utf8 bytes "+Bn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(st(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Su(o)))throw new Error(t+" contains an invalid key ("+o+") "+Bn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);WR(s,o),ku(t,a,s),VR(s)}),r&&i)throw new Error(t+' contains ".value" child '+Bn(s)+" in addition to actual children.")}},TP=function(t,e,n,s){if(!(s&&n===void 0)&&!Su(n))throw new Error(Xo(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Ru=function(t,e,n,s){if(!(s&&n===void 0)&&!T_(n))throw new Error(Xo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},SP=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ru(t,e,n,s)},Au=function(t,e){if(J(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},kP=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Su(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!CP(n))throw new Error(Xo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class RP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Pu(t,e){let n=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();n!==null&&!iu(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(r)}n&&t.eventLists_.push(n)}function S_(t,e,n){Pu(t,n),k_(t,s=>iu(s,e))}function Dt(t,e,n){Pu(t,n),k_(t,s=>yt(s,e)||yt(e,s))}function k_(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const r=t.eventLists_[s];if(r){const i=r.path;e(i)?(AP(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function AP(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Yn&&He("event: "+n.toString()),cr(s)}}}/**
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
 */const PP="repo_interrupt",xP=25;class NP{constructor(e,n,s,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new RP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wo(),this.transactionQueueTree_=new Cu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function OP(t,e,n){if(t.stats_=su(t.repoInfo_),t.forceRestClient_||hR())t.server_=new bo(t.repoInfo_,(s,r,i,o)=>{_h(t,s,r,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>vh(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{xe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new qt(t.repoInfo_,e,(s,r,i,o)=>{_h(t,s,r,i,o)},s=>{vh(t,s)},s=>{MP(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=vR(t.repoInfo_,()=>new _A(t.stats_,t.server_)),t.infoData_=new fA,t.infoSyncTree_=new ph({startListening:(s,r,i,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=vi(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Nu(t,"connected",!1),t.serverSyncTree_=new ph({startListening:(s,r,i,o)=>(t.server_.listen(s,i,r,(a,l)=>{const c=o(a,l);Dt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,r)=>{t.server_.unlisten(s,r)}})}function R_(t){const n=t.infoData_.getNode(new pe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function xu(t){return gP({timestamp:R_(t)})}function _h(t,e,n,s,r){t.dataUpdateCount++;const i=new pe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(s){const l=ao(n,c=>Fe(c));o=cP(t.serverSyncTree_,i,l,r)}else{const l=Fe(n);o=__(t.serverSyncTree_,i,l,r)}else if(s){const l=ao(n,c=>Fe(c));o=oP(t.serverSyncTree_,i,l)}else{const l=Fe(n);o=vi(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=pa(t,i)),Dt(t.eventQueue_,a,o)}function vh(t,e){Nu(t,"connected",e),e===!1&&FP(t)}function MP(t,e){st(e,(n,s)=>{Nu(t,n,s)})}function Nu(t,e,n){const s=new pe("/.info/"+e),r=Fe(n);t.infoData_.updateSnapshot(s,r);const i=vi(t.infoSyncTree_,s,r);Dt(t.eventQueue_,s,i)}function A_(t){return t.nextWriteId_++}function DP(t,e,n){const s=uP(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(r=>{const i=Fe(r).withIndex(e._queryParams.getIndex());zl(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=vi(t.serverSyncTree_,e._path,i);else{const a=li(t.serverSyncTree_,e);o=__(t.serverSyncTree_,e._path,i,a)}return Dt(t.eventQueue_,e._path,o),Ao(t.serverSyncTree_,e,n,null,!0),i},r=>(ha(t,"get for query "+xe(e)+" failed: "+r),Promise.reject(new Error(r))))}function LP(t,e,n,s,r){ha(t,"set",{path:e.toString(),value:n,priority:s});const i=xu(t),o=Fe(n,s),a=_u(t.serverSyncTree_,e),l=w_(o,a,i),c=A_(t),u=m_(t.serverSyncTree_,e,l,c,!0);Pu(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,p)=>{const g=f==="ok";g||tt("set at "+e+" failed: "+f);const _=zn(t.serverSyncTree_,c,!g);Dt(t.eventQueue_,e,_),BP(t,r,f,p)});const d=M_(t,e);pa(t,d),Dt(t.eventQueue_,d,[])}function FP(t){ha(t,"onDisconnectEvents");const e=xu(t),n=wo();jl(t.onDisconnect_,oe(),(r,i)=>{const o=vP(r,i,t.serverSyncTree_,e);e_(n,r,o)});let s=[];jl(n,oe(),(r,i)=>{s=s.concat(vi(t.serverSyncTree_,r,i));const o=M_(t,r);pa(t,o)}),t.onDisconnect_=wo(),Dt(t.eventQueue_,oe(),s)}function UP(t,e,n){let s;J(e._path)===".info"?s=zl(t.infoSyncTree_,e,n):s=zl(t.serverSyncTree_,e,n),S_(t.eventQueue_,e._path,s)}function yh(t,e,n){let s;J(e._path)===".info"?s=Ao(t.infoSyncTree_,e,n):s=Ao(t.serverSyncTree_,e,n),S_(t.eventQueue_,e._path,s)}function $P(t){t.persistentConnection_&&t.persistentConnection_.interrupt(PP)}function ha(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),He(n,...e)}function BP(t,e,n,s){e&&cr(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let i=r;s&&(i+=": "+s);const o=new Error(i);o.code=r,e(o)}})}function P_(t,e,n){return _u(t.serverSyncTree_,e,n)||K.EMPTY_NODE}function Ou(t,e=t.transactionQueueTree_){if(e||ga(t,e),ur(e)){const n=N_(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&jP(t,bi(e),n)}else I_(e)&&fa(e,n=>{Ou(t,n)})}function jP(t,e,n){const s=n.map(c=>c.currentWriteId),r=P_(t,e,s);let i=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=ze(e,u.path);i=i.updateChild(d,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{ha(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(zn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();ga(t,Tu(t.transactionQueueTree_,e)),Ou(t,t.transactionQueueTree_),Dt(t.eventQueue_,e,u);for(let f=0;f<d.length;f++)cr(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{tt("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}pa(t,e)}},o)}function pa(t,e){const n=x_(t,e),s=bi(n),r=N_(t,n);return HP(t,r,s),s}function HP(t,e,n){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ze(n,l.path);let u=!1,d;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,r=r.concat(zn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=xP)u=!0,d="maxretry",r=r.concat(zn(t.serverSyncTree_,l.currentWriteId,!0));else{const f=P_(t,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){ku("transaction failed: Data returned ",p,l.path);let g=Fe(p);typeof p=="object"&&p!=null&&Ft(p,".priority")||(g=g.updatePriority(f.getPriority()));const v=l.currentWriteId,I=xu(t),S=w_(g,f,I);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=S,l.currentWriteId=A_(t),o.splice(o.indexOf(v),1),r=r.concat(m_(t.serverSyncTree_,l.path,S,l.currentWriteId,l.applyLocally)),r=r.concat(zn(t.serverSyncTree_,v,!0))}else u=!0,d="nodata",r=r.concat(zn(t.serverSyncTree_,l.currentWriteId,!0))}Dt(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}ga(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)cr(s[a]);Ou(t,t.transactionQueueTree_)}function x_(t,e){let n,s=t.transactionQueueTree_;for(n=J(e);n!==null&&ur(s)===void 0;)s=Tu(s,n),e=ve(e),n=J(e);return s}function N_(t,e){const n=[];return O_(t,e,n),n.sort((s,r)=>s.order-r.order),n}function O_(t,e,n){const s=ur(e);if(s)for(let r=0;r<s.length;r++)n.push(s[r]);fa(e,r=>{O_(t,r,n)})}function ga(t,e){const n=ur(e);if(n){let s=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[s]=n[r],s++);n.length=s,E_(e,n.length>0?n:void 0)}fa(e,s=>{ga(t,s)})}function M_(t,e){const n=bi(x_(t,e)),s=Tu(t.transactionQueueTree_,e);return bP(s,r=>{qa(t,r)}),qa(t,s),C_(s,r=>{qa(t,r)}),n}function qa(t,e){const n=ur(e);if(n){const s=[];let r=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(zn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?E_(e,void 0):n.length=i+1,Dt(t.eventQueue_,bi(e),r);for(let o=0;o<s.length;o++)cr(s[o])}}/**
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
 */function WP(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let r=n[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function VP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):tt(`Invalid query segment '${n}' in query '${t}'`)}return e}const bh=function(t,e){const n=KP(t),s=n.namespace;n.domain==="firebase.com"&&Xt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Xt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||rR();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Mm(n.host,n.secure,s,r,e,"",s!==n.subdomain),path:new pe(n.pathString)}},KP=function(t){let e="",n="",s="",r="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(r=WP(t.substring(u,d)));const f=VP(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),n=e.substring(g+1),i=s}"ns"in f&&(i=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
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
 */const wh="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",zP=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let r;const i=new Array(8);for(r=7;r>=0;r--)i[r]=wh.charAt(n%64),n=Math.floor(n/64);T(n===0,"Cannot push at time == 0");let o=i.join("");if(s){for(r=11;r>=0&&e[r]===63;r--)e[r]=0;e[r]++}else for(r=0;r<12;r++)e[r]=Math.floor(Math.random()*64);for(r=0;r<12;r++)o+=wh.charAt(e[r]);return T(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class D_{constructor(e,n,s,r){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+xe(this.snapshot.exportVal())}}class L_{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class F_{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class dr{constructor(e,n,s,r){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=r}get key(){return X(this._path)?null:Wm(this._path)}get ref(){return new Ut(this._repo,this._path)}get _queryIdentifier(){const e=sh(this._queryParams),n=tu(e);return n==="{}"?"default":n}get _queryObject(){return sh(this._queryParams)}isEqual(e){if(e=Ge(e),!(e instanceof dr))return!1;const n=this._repo===e._repo,s=iu(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+jR(this._path)}}function qP(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Mu(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Qn){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",r="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==rs)throw new Error(s);if(typeof e!="string")throw new Error(r)}if(t.hasEnd()){if(t.getIndexEndName()!==kn)throw new Error(s);if(typeof n!="string")throw new Error(r)}}else if(t.getIndex()===Ce){if(e!=null&&!mh(e)||n!=null&&!mh(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(T(t.getIndex()instanceof lu||t.getIndex()===Xm,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function U_(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Ut extends dr{constructor(e,n){super(e,n,new uu,!1)}get parent(){const e=Km(this._path);return e===null?null:new Ut(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ys{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new pe(e),s=as(this.ref,e);return new Ys(this._node.getChild(n),s,Ce)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,r)=>e(new Ys(r,as(this.ref,s),Ce)))}hasChild(e){const n=new pe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function gn(t,e){return t=Ge(t),t._checkNotDeleted("ref"),e!==void 0?as(t._root,e):t._root}function as(t,e){return t=Ge(t),J(t._path)===null?SP("child","path",e,!1):Ru("child","path",e,!1),new Ut(t._repo,Ne(t._path,e))}function GP(t,e){t=Ge(t),Au("push",t._path),wi("push",e,t._path,!0);const n=R_(t._repo),s=zP(n),r=as(t,s),i=as(t,s);let o;return e!=null?o=Du(i,e).then(()=>i):o=Promise.resolve(i),r.then=o.then.bind(o),r.catch=o.then.bind(o,void 0),r}function $_(t){return Au("remove",t._path),Du(t,null)}function Du(t,e){t=Ge(t),Au("set",t._path),wi("set",e,t._path,!1);const n=new Jo;return LP(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function YP(t){t=Ge(t);const e=new F_(()=>{}),n=new ma(e);return DP(t._repo,t,n).then(s=>new Ys(s,new Ut(t._repo,t._path),t._queryParams.getIndex()))}class ma{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new D_("value",this,new Ys(e.snapshotNode,new Ut(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new L_(this,e,n):null}matches(e){return e instanceof ma?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Lu{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new L_(this,e,n):null}createEvent(e,n){T(e.childName!=null,"Child events should have a childName.");const s=as(new Ut(n._repo,n._path),e.childName),r=n._queryParams.getIndex();return new D_(e.type,this,new Ys(e.snapshotNode,s,r),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Lu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function QP(t,e,n,s,r){let i;if(typeof s=="object"&&(i=void 0,r=s),typeof s=="function"&&(i=s),r&&r.onlyOnce){const l=n,c=(u,d)=>{yh(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new F_(n,i||void 0),a=e==="value"?new ma(o):new Lu(e,o);return UP(t._repo,t,a),()=>yh(t._repo,t,a)}function B_(t,e,n,s){return QP(t,"value",e,n,s)}class _a{}class JP extends _a{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){wi("endAt",this._value,e._path,!0);const n=uA(e._queryParams,this._value,this._key);if(U_(n),Mu(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new dr(e._repo,e._path,n,e._orderByCalled)}}class XP extends _a{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){wi("startAt",this._value,e._path,!0);const n=cA(e._queryParams,this._value,this._key);if(U_(n),Mu(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new dr(e._repo,e._path,n,e._orderByCalled)}}class ZP extends _a{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){qP(e,"orderByChild");const n=new pe(this._path);if(X(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const s=new lu(n),r=dA(e._queryParams,s);return Mu(r),new dr(e._repo,e._path,r,!0)}}function ex(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Ru("orderByChild","path",t,!1),new ZP(t)}class tx extends _a{constructor(e,n){super(),this._value=e,this._key=n,this.type="equalTo"}_apply(e){if(wi("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new JP(this._value,this._key)._apply(new XP(this._value,this._key)._apply(e))}}function nx(t,e){return TP("equalTo","key",e,!0),new tx(t,e)}function sx(t,...e){let n=Ge(t);for(const s of e)n=s._apply(n);return n}XA(Ut);sP(Ut);/**
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
 */const rx="FIREBASE_DATABASE_EMULATOR_HOST",Gl={};let ix=!1;function ox(t,e,n,s){t.repoInfo_=new Mm(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function ax(t,e,n,s,r){let i=s||t.options.databaseURL;i===void 0&&(t.options.projectId||Xt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),He("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=bh(i,r),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[rx]),c?(l=!0,i=`http://${c}?ns=${a.namespace}`,o=bh(i,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new Ls(Ls.OWNER):new gR(t.name,t.options,e);kP("Invalid Firebase Database URL",o),X(o.path)||Xt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=cx(a,t,u,new pR(t,n));return new ux(d,t)}function lx(t,e){const n=Gl[e];(!n||n[t.key]!==t)&&Xt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),$P(t),delete n[t.key]}function cx(t,e,n,s){let r=Gl[e.name];r||(r={},Gl[e.name]=r);let i=r[t.toURLString()];return i&&Xt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new NP(t,ix,n,s),r[t.toURLString()]=i,i}class ux{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(OP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ut(this._repo,oe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(lx(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Xt("Cannot call "+e+" on a deleted database.")}}function Fu(t=ug(),e){const n=Dc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=xI("database");s&&dx(n,...s)}return n}function dx(t,e,n,s={}){t=Ge(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Xt("Cannot call useEmulator() after instance has already been initialized.");const r=t._repoInternal;let i;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&Xt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new Ls(Ls.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:NI(s.mockUserToken,t.app.options.projectId);i=new Ls(o)}ox(r,e,n,i)}/**
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
 */function fx(t){Zk(rr),Ks(new ts("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return ax(s,r,i,n)},"PUBLIC").setMultipleInstances(!0)),wn(Bf,jf,t),wn(Bf,jf,"esm2017")}qt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};qt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};fx();const hx={name:"TaskList",components:{MainHeader:Xk,Icon:Ac},setup(){const t=Z({}),e=Z(!1),n=Z(""),s=Z(null),r=Fu();let i=null;const o=Zr().onAuthStateChanged(u=>{u?(s.value=u.uid,a()):(s.value=null,t.value={},i&&(gn(r,"tasks").off("value",i),i=null))});function a(){e.value=!0,i&&i();const u=sx(gn(r,"tasks"),ex("userUID"),nx(s.value));i=B_(u,d=>{t.value=d.val()||{},e.value=!1})}function l(){!s.value||!n.value.trim()||gn(r,"tasks").push({taskText:n.value,userUID:s.value}).then(()=>{n.value=""}).catch(u=>{console.error("Error adding task:",u)})}function c(u){const d=gn(r,"tasks"),f=as(d,u);YP(f).then(p=>{const g=p.val();g&&g.userUID===s.value?$_(f).then(()=>console.log("Task removed!")).catch(_=>console.error("Error removing task:",_)):console.error("Access denied: task doesn't belong to user.")}).catch(p=>{console.error("Error fetching task data:",p)})}return Bo(()=>{i&&gn("tasks").off("value",i),o()}),{taskArray:t,isLoading:e,newTaskText:n,addTask:l,deleteTask:c}}},px=t=>(Yh("data-v-432871ab"),t=t(),Qh(),t),gx={class:"dark:bg-gray-900 min-h-screen p-4"},mx={key:0,class:"flex justify-center items-center h-32"},_x=px(()=>se("div",{class:"spinner"},null,-1)),vx=[_x],yx={key:1,class:"flex justify-center"},bx={class:"task-list"},wx=["onClick"];function Ex(t,e,n,s,r,i){const o=Ke("main-header"),a=Ke("Icon");return Be(),Je("div",gx,[le(o),s.isLoading?(Be(),Je("div",mx,vx)):(Be(),Je("div",yx,[se("ul",bx,[(Be(!0),Je(Le,null,_y(s.taskArray,(l,c)=>(Be(),Je("li",{key:c,class:"task-item"},[se("span",null,Gi(l.taskText),1),se("button",{onClick:u=>s.deleteTask(c),class:"delete-btn"},[le(a,{icon:"mdi-light:delete"})],8,wx)]))),128))])]))])}const Ix=Lt(hx,[["render",Ex],["__scopeId","data-v-432871ab"]]),Cx={},Tx=se("br",null,null,-1),Sx={class:"rounded-xl shadow-md p-10 w-fit mx-auto m-32-auto place-content-center grid place-items-center dark:bg-sky-950"};function kx(t,e){return Be(),Je(Le,null,[Tx,se("div",Sx,[jo(t.$slots,"default")])],64)}const j_=Lt(Cx,[["render",kx]]),Rx={components:{ContentBox:j_,BaseHeader:zc}},Ax=se("div",{class:"py-0 px-3 font-semibold dark:text-white"},"Task Project",-1),Px=se("h2",{class:"font-semibold p-4 dark:text-white"},"Page Not Found",-1),xx={class:"dark:text-white"};function Nx(t,e,n,s,r,i){const o=Ke("base-header"),a=Ke("router-link"),l=Ke("content-box");return Be(),Je(Le,null,[le(o,null,{default:at(()=>[Ax]),_:1}),se("section",null,[le(l,{class:"dark:bg-sky-950"},{default:at(()=>[Px,se("div",xx,[vn(" This page could not be found - do you want to return to "),le(a,{to:"/login",class:"underline underline-offset-2"},{default:at(()=>[vn("login")]),_:1}),vn("? ")])]),_:1})])],64)}const Ox=Lt(Rx,[["render",Nx]]),Mx=oE({history:Ew(),routes:[{path:"/",redirect:"login"},{path:"/login",component:kk},{path:"/tasks",component:Ix},{path:"/:notFound(.*)",component:Ox}]});var Dx="firebase",Lx="11.3.1";/**
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
 */wn(Dx,Lx,"app");const Fx={apiKey:"AIzaSyD6rOiOiFAkse6Y3_hdzvP-Z1zRv20wrJg",authDomain:"taskproject-caf25.firebaseapp.com",projectId:"taskproject-caf25",storageBucket:"taskproject-caf25.firebasestorage.app",messagingSenderId:"1061401138693",appId:"1:1061401138693:web:03fc3339b03b4cb79eee6c",databaseURL:"https://taskproject-caf25-default-rtdb.firebaseio.com/"};Lc(Fx);const Ga=Fu(),Ux={async refreshTasks(t){const e=gn(Ga,"tasks");B_(e,n=>{const s=n.val();t.commit("setTasks",s)})},async submitData(t,e){const n=e.toString();if(n!==""){const s=gn(Ga,"tasks"),r=GP(s),i=Zr().currentUser;if(!i){console.error("Usuário não autenticado");return}await Du(r,{taskText:n,userUID:i.uid})}},async deleteTask(t,e){const n=e.toString(),s=gn(Ga,"tasks/"+n);$_(s).then(()=>{console.log("Remove succeeded.")}).catch(r=>{console.error("Remove failed: "+r.message)})}},$x={taskArray(t){return t.taskArray},taskText(t){return t.taskText}},Bx={setTasks(t,e){t.taskArray=e,console.log(t.taskArray)},registerTasks(t,e){t.taskArray.push(e)}},jx={namespace:!0,state(){return{taskArray:[],taskText:""}},actions:Ux,getters:$x,mutations:Bx},Hx=Kk({modules:{task:jx}});const Wx={},Vx={class:"min-h-screen dark:bg-gray-900"};function Kx(t,e){const n=Ke("router-view");return Be(),Je("div",Vx,[le(n)])}const zx=Lt(Wx,[["render",Kx]]),qx={},Gx={class:"bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow dark:bg-sky-800 dark:text-white"};function Yx(t,e){return Be(),Je("div",null,[se("button",Gx,[jo(t.$slots,"default")])])}const Qx=Lt(qx,[["render",Yx]]),Jx={apiKey:"AIzaSyD6rOiOiFAkse6Y3_hdzvP-Z1zRv20wrJg",authDomain:"taskproject-caf25.firebaseapp.com",projectId:"taskproject-caf25",storageBucket:"taskproject-caf25.firebasestorage.app",messagingSenderId:"1061401138693",appId:"1:1061401138693:web:03fc3339b03b4cb79eee6c",databaseURL:"https://taskproject-caf25-default-rtdb.firebaseio.com/"},fr=xb(zx);Lc(Jx);Fu();fr.component("content-box",j_);fr.component("base-button",Qx);fr.use(Gb);fr.use(Hx);fr.use(Mx);fr.mount("#app");
