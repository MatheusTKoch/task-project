(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function zl(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const we={},Ir=[],yt=()=>{},F_=()=>!1,U_=/^on[^a-z]/,So=t=>U_.test(t),ql=t=>t.startsWith("onUpdate:"),Re=Object.assign,Gl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},$_=Object.prototype.hasOwnProperty,ne=(t,e)=>$_.call(t,e),$=Array.isArray,Cr=t=>ai(t)==="[object Map]",Yr=t=>ai(t)==="[object Set]",Lu=t=>ai(t)==="[object Date]",Y=t=>typeof t=="function",Ae=t=>typeof t=="string",Fs=t=>typeof t=="symbol",de=t=>t!==null&&typeof t=="object",vh=t=>de(t)&&Y(t.then)&&Y(t.catch),yh=Object.prototype.toString,ai=t=>yh.call(t),B_=t=>ai(t).slice(8,-1),bh=t=>ai(t)==="[object Object]",Yl=t=>Ae(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Mi=zl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ro=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},j_=/-(\w)/g,Ot=Ro(t=>t.replace(j_,(e,n)=>n?n.toUpperCase():"")),H_=/\B([A-Z])/g,or=Ro(t=>t.replace(H_,"-$1").toLowerCase()),Ao=Ro(t=>t.charAt(0).toUpperCase()+t.slice(1)),ha=Ro(t=>t?`on${Ao(t)}`:""),Us=(t,e)=>!Object.is(t,e),Di=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Vi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ki=t=>{const e=parseFloat(t);return isNaN(e)?t:e},W_=t=>{const e=Ae(t)?Number(t):NaN;return isNaN(e)?t:e};let Fu;const Ka=()=>Fu||(Fu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ql(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ae(r)?q_(r):Ql(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Ae(t))return t;if(de(t))return t}}const V_=/;(?![^(]*\))/g,K_=/:([^]+)/,z_=/\/\*[^]*?\*\//g;function q_(t){const e={};return t.replace(z_,"").split(V_).forEach(n=>{if(n){const r=n.split(K_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function $s(t){let e="";if(Ae(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const r=$s(t[n]);r&&(e+=r+" ")}else if(de(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const G_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Y_=zl(G_);function wh(t){return!!t||t===""}function Q_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Qn(t[r],e[r]);return n}function Qn(t,e){if(t===e)return!0;let n=Lu(t),r=Lu(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Fs(t),r=Fs(e),n||r)return t===e;if(n=$(t),r=$(e),n||r)return n&&r?Q_(t,e):!1;if(n=de(t),r=de(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Qn(t[o],e[o]))return!1}}return String(t)===String(e)}function Jl(t,e){return t.findIndex(n=>Qn(n,e))}const za=t=>Ae(t)?t:t==null?"":$(t)||de(t)&&(t.toString===yh||!Y(t.toString))?JSON.stringify(t,Eh,2):String(t),Eh=(t,e)=>e&&e.__v_isRef?Eh(t,e.value):Cr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Yr(e)?{[`Set(${e.size})`]:[...e.values()]}:de(e)&&!$(e)&&!bh(e)?String(e):e;let rt;class Ih{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=rt,!e&&rt&&(this.index=(rt.scopes||(rt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=rt;try{return rt=this,e()}finally{rt=n}}}on(){rt=this}off(){rt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function J_(t){return new Ih(t)}function X_(t,e=rt){e&&e.active&&e.effects.push(t)}function Ch(){return rt}function Z_(t){rt&&rt.cleanups.push(t)}const Xl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Th=t=>(t.w&bn)>0,Sh=t=>(t.n&bn)>0,ev=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=bn},tv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Th(s)&&!Sh(s)?s.delete(t):e[n++]=s,s.w&=~bn,s.n&=~bn}e.length=n}},zi=new WeakMap;let ws=0,bn=1;const qa=30;let ht;const Kn=Symbol(""),Ga=Symbol("");class Zl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,X_(this,r)}run(){if(!this.active)return this.fn();let e=ht,n=hn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ht,ht=this,hn=!0,bn=1<<++ws,ws<=qa?ev(this):Uu(this),this.fn()}finally{ws<=qa&&tv(this),bn=1<<--ws,ht=this.parent,hn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ht===this?this.deferStop=!0:this.active&&(Uu(this),this.onStop&&this.onStop(),this.active=!1)}}function Uu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let hn=!0;const Rh=[];function Qr(){Rh.push(hn),hn=!1}function Jr(){const t=Rh.pop();hn=t===void 0?!0:t}function Ze(t,e,n){if(hn&&ht){let r=zi.get(t);r||zi.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Xl()),Ah(s)}}function Ah(t,e){let n=!1;ws<=qa?Sh(t)||(t.n|=bn,n=!Th(t)):n=!t.has(ht),n&&(t.add(ht),ht.deps.push(t))}function zt(t,e,n,r,s,i){const o=zi.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?Yl(n)&&a.push(o.get("length")):(a.push(o.get(Kn)),Cr(t)&&a.push(o.get(Ga)));break;case"delete":$(t)||(a.push(o.get(Kn)),Cr(t)&&a.push(o.get(Ga)));break;case"set":Cr(t)&&a.push(o.get(Kn));break}if(a.length===1)a[0]&&Ya(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ya(Xl(l))}}function Ya(t,e){const n=$(t)?t:[...t];for(const r of n)r.computed&&$u(r);for(const r of n)r.computed||$u(r)}function $u(t,e){(t!==ht||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function nv(t,e){var n;return(n=zi.get(t))==null?void 0:n.get(e)}const rv=zl("__proto__,__v_isRef,__isVue"),Ph=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Fs)),sv=ec(),iv=ec(!1,!0),ov=ec(!0),Bu=av();function av(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=se(this);for(let i=0,o=this.length;i<o;i++)Ze(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(se)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Qr();const r=se(this)[e].apply(this,n);return Jr(),r}}),t}function lv(t){const e=se(this);return Ze(e,"has",t),e.hasOwnProperty(t)}function ec(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Cv:Mh:e?Oh:Nh).get(r))return r;const o=$(r);if(!t){if(o&&ne(Bu,s))return Reflect.get(Bu,s,i);if(s==="hasOwnProperty")return lv}const a=Reflect.get(r,s,i);return(Fs(s)?Ph.has(s):rv(s))||(t||Ze(r,"get",s),e)?a:Oe(a)?o&&Yl(s)?a:a.value:de(a)?t?ko(a):Xr(a):a}}const cv=kh(),uv=kh(!0);function kh(t=!1){return function(n,r,s,i){let o=n[r];if(Dr(o)&&Oe(o)&&!Oe(s))return!1;if(!t&&(!qi(s)&&!Dr(s)&&(o=se(o),s=se(s)),!$(n)&&Oe(o)&&!Oe(s)))return o.value=s,!0;const a=$(n)&&Yl(r)?Number(r)<n.length:ne(n,r),l=Reflect.set(n,r,s,i);return n===se(i)&&(a?Us(s,o)&&zt(n,"set",r,s):zt(n,"add",r,s)),l}}function dv(t,e){const n=ne(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&zt(t,"delete",e,void 0),r}function fv(t,e){const n=Reflect.has(t,e);return(!Fs(e)||!Ph.has(e))&&Ze(t,"has",e),n}function hv(t){return Ze(t,"iterate",$(t)?"length":Kn),Reflect.ownKeys(t)}const xh={get:sv,set:cv,deleteProperty:dv,has:fv,ownKeys:hv},pv={get:ov,set(t,e){return!0},deleteProperty(t,e){return!0}},gv=Re({},xh,{get:iv,set:uv}),tc=t=>t,Po=t=>Reflect.getPrototypeOf(t);function bi(t,e,n=!1,r=!1){t=t.__v_raw;const s=se(t),i=se(e);n||(e!==i&&Ze(s,"get",e),Ze(s,"get",i));const{has:o}=Po(s),a=r?tc:n?sc:Bs;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function wi(t,e=!1){const n=this.__v_raw,r=se(n),s=se(t);return e||(t!==s&&Ze(r,"has",t),Ze(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Ei(t,e=!1){return t=t.__v_raw,!e&&Ze(se(t),"iterate",Kn),Reflect.get(t,"size",t)}function ju(t){t=se(t);const e=se(this);return Po(e).has.call(e,t)||(e.add(t),zt(e,"add",t,t)),this}function Hu(t,e){e=se(e);const n=se(this),{has:r,get:s}=Po(n);let i=r.call(n,t);i||(t=se(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Us(e,o)&&zt(n,"set",t,e):zt(n,"add",t,e),this}function Wu(t){const e=se(this),{has:n,get:r}=Po(e);let s=n.call(e,t);s||(t=se(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&zt(e,"delete",t,void 0),i}function Vu(){const t=se(this),e=t.size!==0,n=t.clear();return e&&zt(t,"clear",void 0,void 0),n}function Ii(t,e){return function(r,s){const i=this,o=i.__v_raw,a=se(o),l=e?tc:t?sc:Bs;return!t&&Ze(a,"iterate",Kn),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function Ci(t,e,n){return function(...r){const s=this.__v_raw,i=se(s),o=Cr(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?tc:e?sc:Bs;return!e&&Ze(i,"iterate",l?Ga:Kn),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function en(t){return function(...e){return t==="delete"?!1:this}}function mv(){const t={get(i){return bi(this,i)},get size(){return Ei(this)},has:wi,add:ju,set:Hu,delete:Wu,clear:Vu,forEach:Ii(!1,!1)},e={get(i){return bi(this,i,!1,!0)},get size(){return Ei(this)},has:wi,add:ju,set:Hu,delete:Wu,clear:Vu,forEach:Ii(!1,!0)},n={get(i){return bi(this,i,!0)},get size(){return Ei(this,!0)},has(i){return wi.call(this,i,!0)},add:en("add"),set:en("set"),delete:en("delete"),clear:en("clear"),forEach:Ii(!0,!1)},r={get(i){return bi(this,i,!0,!0)},get size(){return Ei(this,!0)},has(i){return wi.call(this,i,!0)},add:en("add"),set:en("set"),delete:en("delete"),clear:en("clear"),forEach:Ii(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ci(i,!1,!1),n[i]=Ci(i,!0,!1),e[i]=Ci(i,!1,!0),r[i]=Ci(i,!0,!0)}),[t,n,e,r]}const[_v,vv,yv,bv]=mv();function nc(t,e){const n=e?t?bv:yv:t?vv:_v;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ne(n,s)&&s in r?n:r,s,i)}const wv={get:nc(!1,!1)},Ev={get:nc(!1,!0)},Iv={get:nc(!0,!1)},Nh=new WeakMap,Oh=new WeakMap,Mh=new WeakMap,Cv=new WeakMap;function Tv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Sv(t){return t.__v_skip||!Object.isExtensible(t)?0:Tv(B_(t))}function Xr(t){return Dr(t)?t:rc(t,!1,xh,wv,Nh)}function Rv(t){return rc(t,!1,gv,Ev,Oh)}function ko(t){return rc(t,!0,pv,Iv,Mh)}function rc(t,e,n,r,s){if(!de(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Sv(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Tr(t){return Dr(t)?Tr(t.__v_raw):!!(t&&t.__v_isReactive)}function Dr(t){return!!(t&&t.__v_isReadonly)}function qi(t){return!!(t&&t.__v_isShallow)}function Dh(t){return Tr(t)||Dr(t)}function se(t){const e=t&&t.__v_raw;return e?se(e):t}function Lh(t){return Vi(t,"__v_skip",!0),t}const Bs=t=>de(t)?Xr(t):t,sc=t=>de(t)?ko(t):t;function ic(t){hn&&ht&&(t=se(t),Ah(t.dep||(t.dep=Xl())))}function oc(t,e){t=se(t);const n=t.dep;n&&Ya(n)}function Oe(t){return!!(t&&t.__v_isRef===!0)}function re(t){return Uh(t,!1)}function Fh(t){return Uh(t,!0)}function Uh(t,e){return Oe(t)?t:new Av(t,e)}class Av{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:se(e),this._value=n?e:Bs(e)}get value(){return ic(this),this._value}set value(e){const n=this.__v_isShallow||qi(e)||Dr(e);e=n?e:se(e),Us(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Bs(e),oc(this))}}function Sr(t){return Oe(t)?t.value:t}const Pv={get:(t,e,n)=>Sr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Oe(s)&&!Oe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function $h(t){return Tr(t)?t:new Proxy(t,Pv)}class kv{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>ic(this),()=>oc(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function xv(t){return new kv(t)}class Nv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return nv(se(this._object),this._key)}}class Ov{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Mv(t,e,n){return Oe(t)?t:Y(t)?new Ov(t):de(t)&&arguments.length>1?Dv(t,e,n):re(t)}function Dv(t,e,n){const r=t[e];return Oe(r)?r:new Nv(t,e,n)}class Lv{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Zl(e,()=>{this._dirty||(this._dirty=!0,oc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=se(this);return ic(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Fv(t,e,n=!1){let r,s;const i=Y(t);return i?(r=t,s=yt):(r=t.get,s=t.set),new Lv(r,s,i||!s,n)}function pn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){xo(i,e,n)}return s}function at(t,e,n,r){if(Y(t)){const i=pn(t,e,n,r);return i&&vh(i)&&i.catch(o=>{xo(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(at(t[i],e,n,r));return s}function xo(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){pn(l,null,10,[t,o,a]);return}}Uv(t,n,s,r)}function Uv(t,e,n,r=!0){console.error(t)}let js=!1,Qa=!1;const He=[];let Pt=0;const Rr=[];let Ft=null,$n=0;const Bh=Promise.resolve();let ac=null;function bt(t){const e=ac||Bh;return t?e.then(this?t.bind(this):t):e}function $v(t){let e=Pt+1,n=He.length;for(;e<n;){const r=e+n>>>1;Hs(He[r])<t?e=r+1:n=r}return e}function lc(t){(!He.length||!He.includes(t,js&&t.allowRecurse?Pt+1:Pt))&&(t.id==null?He.push(t):He.splice($v(t.id),0,t),jh())}function jh(){!js&&!Qa&&(Qa=!0,ac=Bh.then(Wh))}function Bv(t){const e=He.indexOf(t);e>Pt&&He.splice(e,1)}function jv(t){$(t)?Rr.push(...t):(!Ft||!Ft.includes(t,t.allowRecurse?$n+1:$n))&&Rr.push(t),jh()}function Ku(t,e=js?Pt+1:0){for(;e<He.length;e++){const n=He[e];n&&n.pre&&(He.splice(e,1),e--,n())}}function Hh(t){if(Rr.length){const e=[...new Set(Rr)];if(Rr.length=0,Ft){Ft.push(...e);return}for(Ft=e,Ft.sort((n,r)=>Hs(n)-Hs(r)),$n=0;$n<Ft.length;$n++)Ft[$n]();Ft=null,$n=0}}const Hs=t=>t.id==null?1/0:t.id,Hv=(t,e)=>{const n=Hs(t)-Hs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Wh(t){Qa=!1,js=!0,He.sort(Hv);const e=yt;try{for(Pt=0;Pt<He.length;Pt++){const n=He[Pt];n&&n.active!==!1&&pn(n,null,14)}}finally{Pt=0,He.length=0,Hh(),js=!1,ac=null,(He.length||Rr.length)&&Wh()}}function Wv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||we;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:f}=r[u]||we;f&&(s=n.map(p=>Ae(p)?p.trim():p)),d&&(s=n.map(Ki))}let a,l=r[a=ha(e)]||r[a=ha(Ot(e))];!l&&i&&(l=r[a=ha(or(e))]),l&&at(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,at(c,t,6,s)}}function Vh(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Y(t)){const l=c=>{const u=Vh(c,e,!0);u&&(a=!0,Re(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(de(t)&&r.set(t,null),null):($(i)?i.forEach(l=>o[l]=null):Re(o,i),de(t)&&r.set(t,o),o)}function No(t,e){return!t||!So(e)?!1:(e=e.slice(2).replace(/Once$/,""),ne(t,e[0].toLowerCase()+e.slice(1))||ne(t,or(e))||ne(t,e))}let Be=null,Oo=null;function Gi(t){const e=Be;return Be=t,Oo=t&&t.type.__scopeId||null,e}function Ax(t){Oo=t}function Px(){Oo=null}function gt(t,e=Be,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&sd(-1);const i=Gi(e);let o;try{o=t(...s)}finally{Gi(i),r._d&&sd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function pa(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:f,setupState:p,ctx:g,inheritAttrs:_}=t;let v,I;const S=Gi(t);try{if(n.shapeFlag&4){const P=s||r;v=At(u.call(P,P,d,i,p,f,g)),I=l}else{const P=e;v=At(P.length>1?P(i,{attrs:l,slots:a,emit:c}):P(i,null)),I=e.props?l:Vv(l)}}catch(P){As.length=0,xo(P,t,1),v=pe(lt)}let M=v;if(I&&_!==!1){const P=Object.keys(I),{shapeFlag:G}=M;P.length&&G&7&&(o&&P.some(ql)&&(I=Kv(I,o)),M=qt(M,I))}return n.dirs&&(M=qt(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),v=M,Gi(S),v}const Vv=t=>{let e;for(const n in t)(n==="class"||n==="style"||So(n))&&((e||(e={}))[n]=t[n]);return e},Kv=(t,e)=>{const n={};for(const r in t)(!ql(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function zv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?zu(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==r[f]&&!No(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?zu(r,o,c):!0:!!o;return!1}function zu(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!No(n,i))return!0}return!1}function qv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Gv=t=>t.__isSuspense;function Yv(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):jv(t)}function Zr(t,e){return cc(t,null,e)}const Ti={};function kt(t,e,n){return cc(t,e,n)}function cc(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=we){var a;const l=Ch()===((a=Fe)==null?void 0:a.scope)?Fe:null;let c,u=!1,d=!1;if(Oe(t)?(c=()=>t.value,u=qi(t)):Tr(t)?(c=()=>t,r=!0):$(t)?(d=!0,u=t.some(P=>Tr(P)||qi(P)),c=()=>t.map(P=>{if(Oe(P))return P.value;if(Tr(P))return Hn(P);if(Y(P))return pn(P,l,2)})):Y(t)?e?c=()=>pn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),at(t,l,3,[p])}:c=yt,e&&r){const P=c;c=()=>Hn(P())}let f,p=P=>{f=S.onStop=()=>{pn(P,l,4)}},g;if(Vs)if(p=yt,e?n&&at(e,l,3,[c(),d?[]:void 0,p]):c(),s==="sync"){const P=Vy();g=P.__watcherHandles||(P.__watcherHandles=[])}else return yt;let _=d?new Array(t.length).fill(Ti):Ti;const v=()=>{if(S.active)if(e){const P=S.run();(r||u||(d?P.some((G,U)=>Us(G,_[U])):Us(P,_)))&&(f&&f(),at(e,l,3,[P,_===Ti?void 0:d&&_[0]===Ti?[]:_,p]),_=P)}else S.run()};v.allowRecurse=!!e;let I;s==="sync"?I=v:s==="post"?I=()=>Ge(v,l&&l.suspense):(v.pre=!0,l&&(v.id=l.uid),I=()=>lc(v));const S=new Zl(c,I);e?n?v():_=S.run():s==="post"?Ge(S.run.bind(S),l&&l.suspense):S.run();const M=()=>{S.stop(),l&&l.scope&&Gl(l.scope.effects,S)};return g&&g.push(M),M}function Qv(t,e,n){const r=this.proxy,s=Ae(t)?t.includes(".")?Kh(r,t):()=>r[t]:t.bind(r,r);let i;Y(e)?i=e:(i=e.handler,n=e);const o=Fe;Lr(this);const a=cc(s,i.bind(r),n);return o?Lr(o):qn(),a}function Kh(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Hn(t,e){if(!de(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Oe(t))Hn(t.value,e);else if($(t))for(let n=0;n<t.length;n++)Hn(t[n],e);else if(Yr(t)||Cr(t))t.forEach(n=>{Hn(n,e)});else if(bh(t))for(const n in t)Hn(t[n],e);return t}function qu(t,e){const n=Be;if(n===null)return t;const r=$o(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=we]=e[i];o&&(Y(o)&&(o={mounted:o,updated:o}),o.deep&&Hn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function On(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Qr(),at(l,n,8,[t.el,a,t,e]),Jr())}}function Jv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ar(()=>{t.isMounted=!0}),Qh(()=>{t.isUnmounting=!0}),t}const it=[Function,Array],zh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:it,onEnter:it,onAfterEnter:it,onEnterCancelled:it,onBeforeLeave:it,onLeave:it,onAfterLeave:it,onLeaveCancelled:it,onBeforeAppear:it,onAppear:it,onAfterAppear:it,onAppearCancelled:it},Xv={name:"BaseTransition",props:zh,setup(t,{slots:e}){const n=gc(),r=Jv();let s;return()=>{const i=e.default&&Gh(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const _ of i)if(_.type!==lt){o=_;break}}const a=se(t),{mode:l}=a;if(r.isLeaving)return ga(o);const c=Gu(o);if(!c)return ga(o);const u=Ja(c,a,r,n);Xa(c,u);const d=n.subTree,f=d&&Gu(d);let p=!1;const{getTransitionKey:g}=c.type;if(g){const _=g();s===void 0?s=_:_!==s&&(s=_,p=!0)}if(f&&f.type!==lt&&(!Bn(c,f)||p)){const _=Ja(f,a,r,n);if(Xa(f,_),l==="out-in")return r.isLeaving=!0,_.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},ga(o);l==="in-out"&&c.type!==lt&&(_.delayLeave=(v,I,S)=>{const M=qh(r,f);M[String(f.key)]=f,v._leaveCb=()=>{I(),v._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=S})}return o}}},Zv=Xv;function qh(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Ja(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:_,onAppear:v,onAfterAppear:I,onAppearCancelled:S}=e,M=String(t.key),P=qh(n,t),G=(k,W)=>{k&&at(k,r,9,W)},U=(k,W)=>{const V=W[1];G(k,W),$(k)?k.every(Pe=>Pe.length<=1)&&V():k.length<=1&&V()},Q={mode:i,persisted:o,beforeEnter(k){let W=a;if(!n.isMounted)if(s)W=_||a;else return;k._leaveCb&&k._leaveCb(!0);const V=P[M];V&&Bn(t,V)&&V.el._leaveCb&&V.el._leaveCb(),G(W,[k])},enter(k){let W=l,V=c,Pe=u;if(!n.isMounted)if(s)W=v||l,V=I||c,Pe=S||u;else return;let F=!1;const ye=k._enterCb=Ue=>{F||(F=!0,Ue?G(Pe,[k]):G(V,[k]),Q.delayedLeave&&Q.delayedLeave(),k._enterCb=void 0)};W?U(W,[k,ye]):ye()},leave(k,W){const V=String(t.key);if(k._enterCb&&k._enterCb(!0),n.isUnmounting)return W();G(d,[k]);let Pe=!1;const F=k._leaveCb=ye=>{Pe||(Pe=!0,W(),ye?G(g,[k]):G(p,[k]),k._leaveCb=void 0,P[V]===t&&delete P[V])};P[V]=t,f?U(f,[k,F]):F()},clone(k){return Ja(k,e,n,r)}};return Q}function ga(t){if(Mo(t))return t=qt(t),t.children=null,t}function Gu(t){return Mo(t)?t.children?t.children[0]:void 0:t}function Xa(t,e){t.shapeFlag&6&&t.component?Xa(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Gh(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===$e?(o.patchFlag&128&&s++,r=r.concat(Gh(o.children,e,a))):(e||o.type!==lt)&&r.push(a!=null?qt(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Jt(t,e){return Y(t)?(()=>Re({name:t.name},e,{setup:t}))():t}const Ss=t=>!!t.type.__asyncLoader,Mo=t=>t.type.__isKeepAlive;function ey(t,e){Yh(t,"a",e)}function ty(t,e){Yh(t,"da",e)}function Yh(t,e,n=Fe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Do(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Mo(s.parent.vnode)&&ny(r,e,n,s),s=s.parent}}function ny(t,e,n,r){const s=Do(e,t,r,!0);uc(()=>{Gl(r[e],s)},n)}function Do(t,e,n=Fe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Qr(),Lr(n);const a=at(e,n,t,o);return qn(),Jr(),a});return r?s.unshift(i):s.push(i),i}}const Xt=t=>(e,n=Fe)=>(!Vs||t==="sp")&&Do(t,(...r)=>e(...r),n),ry=Xt("bm"),ar=Xt("m"),sy=Xt("bu"),iy=Xt("u"),Qh=Xt("bum"),uc=Xt("um"),oy=Xt("sp"),ay=Xt("rtg"),ly=Xt("rtc");function cy(t,e=Fe){Do("ec",t,e)}const Jh="components";function ft(t,e){return dy(Jh,t,!0,e)||t}const uy=Symbol.for("v-ndc");function dy(t,e,n=!0,r=!1){const s=Be||Fe;if(s){const i=s.type;if(t===Jh){const a=jy(i,!1);if(a&&(a===e||a===Ot(e)||a===Ao(Ot(e))))return i}const o=Yu(s[t]||i[t],e)||Yu(s.appContext[t],e);return!o&&r?i:o}}function Yu(t,e){return t&&(t[e]||t[Ot(e)]||t[Ao(Ot(e))])}function kx(t,e,n,r){let s;const i=n&&n[r];if($(t)||Ae(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(de(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function Lo(t,e,n={},r,s){if(Be.isCE||Be.parent&&Ss(Be.parent)&&Be.parent.isCE)return e!=="default"&&(n.name=e),pe("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),Et();const o=i&&Xh(i(n)),a=hc($e,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Xh(t){return t.some(e=>Ji(e)?!(e.type===lt||e.type===$e&&!Xh(e.children)):!0)?t:null}const Za=t=>t?cp(t)?$o(t)||t.proxy:Za(t.parent):null,Rs=Re(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Za(t.parent),$root:t=>Za(t.root),$emit:t=>t.emit,$options:t=>dc(t),$forceUpdate:t=>t.f||(t.f=()=>lc(t.update)),$nextTick:t=>t.n||(t.n=bt.bind(t.proxy)),$watch:t=>Qv.bind(t)}),ma=(t,e)=>t!==we&&!t.__isScriptSetup&&ne(t,e),fy={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ma(r,e))return o[e]=1,r[e];if(s!==we&&ne(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&ne(c,e))return o[e]=3,i[e];if(n!==we&&ne(n,e))return o[e]=4,n[e];el&&(o[e]=0)}}const u=Rs[e];let d,f;if(u)return e==="$attrs"&&Ze(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==we&&ne(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,ne(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ma(s,e)?(s[e]=n,!0):r!==we&&ne(r,e)?(r[e]=n,!0):ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==we&&ne(t,o)||ma(e,o)||(a=i[0])&&ne(a,o)||ne(r,o)||ne(Rs,o)||ne(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Qu(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let el=!0;function hy(t){const e=dc(t),n=t.proxy,r=t.ctx;el=!1,e.beforeCreate&&Ju(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:g,activated:_,deactivated:v,beforeDestroy:I,beforeUnmount:S,destroyed:M,unmounted:P,render:G,renderTracked:U,renderTriggered:Q,errorCaptured:k,serverPrefetch:W,expose:V,inheritAttrs:Pe,components:F,directives:ye,filters:Ue}=e;if(c&&py(c,r,null),o)for(const ge in o){const le=o[ge];Y(le)&&(r[ge]=le.bind(n))}if(s){const ge=s.call(n,n);de(ge)&&(t.data=Xr(ge))}if(el=!0,i)for(const ge in i){const le=i[ge],ct=Y(le)?le.bind(n,n):Y(le.get)?le.get.bind(n,n):yt,Nn=!Y(le)&&Y(le.set)?le.set.bind(n):yt,ut=ae({get:ct,set:Nn});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>ut.value,set:qe=>ut.value=qe})}if(a)for(const ge in a)Zh(a[ge],r,n,ge);if(l){const ge=Y(l)?l.call(n):l;Reflect.ownKeys(ge).forEach(le=>{Ar(le,ge[le])})}u&&Ju(u,t,"c");function Ee(ge,le){$(le)?le.forEach(ct=>ge(ct.bind(n))):le&&ge(le.bind(n))}if(Ee(ry,d),Ee(ar,f),Ee(sy,p),Ee(iy,g),Ee(ey,_),Ee(ty,v),Ee(cy,k),Ee(ly,U),Ee(ay,Q),Ee(Qh,S),Ee(uc,P),Ee(oy,W),$(V))if(V.length){const ge=t.exposed||(t.exposed={});V.forEach(le=>{Object.defineProperty(ge,le,{get:()=>n[le],set:ct=>n[le]=ct})})}else t.exposed||(t.exposed={});G&&t.render===yt&&(t.render=G),Pe!=null&&(t.inheritAttrs=Pe),F&&(t.components=F),ye&&(t.directives=ye)}function py(t,e,n=yt){$(t)&&(t=tl(t));for(const r in t){const s=t[r];let i;de(s)?"default"in s?i=Qe(s.from||r,s.default,!0):i=Qe(s.from||r):i=Qe(s),Oe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ju(t,e,n){at($(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Zh(t,e,n,r){const s=r.includes(".")?Kh(n,r):()=>n[r];if(Ae(t)){const i=e[t];Y(i)&&kt(s,i)}else if(Y(t))kt(s,t.bind(n));else if(de(t))if($(t))t.forEach(i=>Zh(i,e,n,r));else{const i=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(i)&&kt(s,i,t)}}function dc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>Yi(l,c,o,!0)),Yi(l,e,o)),de(e)&&i.set(e,l),l}function Yi(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Yi(t,i,n,!0),s&&s.forEach(o=>Yi(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=gy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const gy={data:Xu,props:Zu,emits:Zu,methods:Es,computed:Es,beforeCreate:Ve,created:Ve,beforeMount:Ve,mounted:Ve,beforeUpdate:Ve,updated:Ve,beforeDestroy:Ve,beforeUnmount:Ve,destroyed:Ve,unmounted:Ve,activated:Ve,deactivated:Ve,errorCaptured:Ve,serverPrefetch:Ve,components:Es,directives:Es,watch:_y,provide:Xu,inject:my};function Xu(t,e){return e?t?function(){return Re(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function my(t,e){return Es(tl(t),tl(e))}function tl(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ve(t,e){return t?[...new Set([].concat(t,e))]:e}function Es(t,e){return t?Re(Object.create(null),t,e):e}function Zu(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:Re(Object.create(null),Qu(t),Qu(e??{})):e}function _y(t,e){if(!t)return e;if(!e)return t;const n=Re(Object.create(null),t);for(const r in e)n[r]=Ve(t[r],e[r]);return n}function ep(){return{app:null,config:{isNativeTag:F_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vy=0;function yy(t,e){return function(r,s=null){Y(r)||(r=Re({},r)),s!=null&&!de(s)&&(s=null);const i=ep(),o=new Set;let a=!1;const l=i.app={_uid:vy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ky,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&Y(c.install)?(o.add(c),c.install(l,...u)):Y(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,d){if(!a){const f=pe(r,s);return f.appContext=i,u&&e?e(f,c):t(f,c,d),a=!0,l._container=c,c.__vue_app__=l,$o(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){Qi=l;try{return c()}finally{Qi=null}}};return l}}let Qi=null;function Ar(t,e){if(Fe){let n=Fe.provides;const r=Fe.parent&&Fe.parent.provides;r===n&&(n=Fe.provides=Object.create(r)),n[t]=e}}function Qe(t,e,n=!1){const r=Fe||Be;if(r||Qi){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Qi._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Y(e)?e.call(r&&r.proxy):e}}function by(t,e,n,r=!1){const s={},i={};Vi(i,Uo,1),t.propsDefaults=Object.create(null),tp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Rv(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function wy(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=se(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(No(t.emitsOptions,f))continue;const p=e[f];if(l)if(ne(i,f))p!==i[f]&&(i[f]=p,c=!0);else{const g=Ot(f);s[g]=nl(l,a,g,p,t,!1)}else p!==i[f]&&(i[f]=p,c=!0)}}}else{tp(t,e,s,i)&&(c=!0);let u;for(const d in a)(!e||!ne(e,d)&&((u=or(d))===d||!ne(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=nl(l,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!ne(e,d))&&(delete i[d],c=!0)}c&&zt(t,"set","$attrs")}function tp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Mi(l))continue;const c=e[l];let u;s&&ne(s,u=Ot(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:No(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=se(n),c=a||we;for(let u=0;u<i.length;u++){const d=i[u];n[d]=nl(s,l,d,c[d],t,!ne(c,d))}}return o}function nl(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ne(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Y(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(Lr(s),r=c[n]=l.call(null,e),qn())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===or(n))&&(r=!0))}return r}function np(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!Y(t)){const u=d=>{l=!0;const[f,p]=np(d,e,!0);Re(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return de(t)&&r.set(t,Ir),Ir;if($(i))for(let u=0;u<i.length;u++){const d=Ot(i[u]);ed(d)&&(o[d]=we)}else if(i)for(const u in i){const d=Ot(u);if(ed(d)){const f=i[u],p=o[d]=$(f)||Y(f)?{type:f}:Re({},f);if(p){const g=rd(Boolean,p.type),_=rd(String,p.type);p[0]=g>-1,p[1]=_<0||g<_,(g>-1||ne(p,"default"))&&a.push(d)}}}const c=[o,a];return de(t)&&r.set(t,c),c}function ed(t){return t[0]!=="$"}function td(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function nd(t,e){return td(t)===td(e)}function rd(t,e){return $(e)?e.findIndex(n=>nd(n,t)):Y(e)&&nd(e,t)?0:-1}const rp=t=>t[0]==="_"||t==="$stable",fc=t=>$(t)?t.map(At):[At(t)],Ey=(t,e,n)=>{if(e._n)return e;const r=gt((...s)=>fc(e(...s)),n);return r._c=!1,r},sp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(rp(s))continue;const i=t[s];if(Y(i))e[s]=Ey(s,i,r);else if(i!=null){const o=fc(i);e[s]=()=>o}}},ip=(t,e)=>{const n=fc(e);t.slots.default=()=>n},Iy=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=se(e),Vi(e,"_",n)):sp(e,t.slots={})}else t.slots={},e&&ip(t,e);Vi(t.slots,Uo,1)},Cy=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=we;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Re(s,e),!n&&a===1&&delete s._):(i=!e.$stable,sp(e,s)),o=e}else e&&(ip(t,e),o={default:1});if(i)for(const a in s)!rp(a)&&!(a in o)&&delete s[a]};function rl(t,e,n,r,s=!1){if($(t)){t.forEach((f,p)=>rl(f,e&&($(e)?e[p]:e),n,r,s));return}if(Ss(r)&&!s)return;const i=r.shapeFlag&4?$o(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===we?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Ae(c)?(u[c]=null,ne(d,c)&&(d[c]=null)):Oe(c)&&(c.value=null)),Y(l))pn(l,a,12,[o,u]);else{const f=Ae(l),p=Oe(l);if(f||p){const g=()=>{if(t.f){const _=f?ne(d,l)?d[l]:u[l]:l.value;s?$(_)&&Gl(_,i):$(_)?_.includes(i)||_.push(i):f?(u[l]=[i],ne(d,l)&&(d[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,ne(d,l)&&(d[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Ge(g,n)):g()}}}const Ge=Yv;function Ty(t){return Sy(t)}function Sy(t,e){const n=Ka();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=yt,insertStaticContent:g}=t,_=(h,m,y,b=null,E=null,A=null,O=!1,R=null,x=!!m.dynamicChildren)=>{if(h===m)return;h&&!Bn(h,m)&&(b=N(h),qe(h,E,A,!0),h=null),m.patchFlag===-2&&(x=!1,m.dynamicChildren=null);const{type:C,ref:j,shapeFlag:L}=m;switch(C){case Fo:v(h,m,y,b);break;case lt:I(h,m,y,b);break;case _a:h==null&&S(m,y,b,O);break;case $e:F(h,m,y,b,E,A,O,R,x);break;default:L&1?G(h,m,y,b,E,A,O,R,x):L&6?ye(h,m,y,b,E,A,O,R,x):(L&64||L&128)&&C.process(h,m,y,b,E,A,O,R,x,oe)}j!=null&&E&&rl(j,h&&h.ref,A,m||h,!m)},v=(h,m,y,b)=>{if(h==null)r(m.el=a(m.children),y,b);else{const E=m.el=h.el;m.children!==h.children&&c(E,m.children)}},I=(h,m,y,b)=>{h==null?r(m.el=l(m.children||""),y,b):m.el=h.el},S=(h,m,y,b)=>{[h.el,h.anchor]=g(h.children,m,y,b,h.el,h.anchor)},M=({el:h,anchor:m},y,b)=>{let E;for(;h&&h!==m;)E=f(h),r(h,y,b),h=E;r(m,y,b)},P=({el:h,anchor:m})=>{let y;for(;h&&h!==m;)y=f(h),s(h),h=y;s(m)},G=(h,m,y,b,E,A,O,R,x)=>{O=O||m.type==="svg",h==null?U(m,y,b,E,A,O,R,x):W(h,m,E,A,O,R,x)},U=(h,m,y,b,E,A,O,R)=>{let x,C;const{type:j,props:L,shapeFlag:H,transition:q,dirs:te}=h;if(x=h.el=o(h.type,A,L&&L.is,L),H&8?u(x,h.children):H&16&&k(h.children,x,null,b,E,A&&j!=="foreignObject",O,R),te&&On(h,null,b,"created"),Q(x,h,h.scopeId,O,b),L){for(const ce in L)ce!=="value"&&!Mi(ce)&&i(x,ce,null,L[ce],A,h.children,b,E,D);"value"in L&&i(x,"value",null,L.value),(C=L.onVnodeBeforeMount)&&St(C,b,h)}te&&On(h,null,b,"beforeMount");const me=(!E||E&&!E.pendingBranch)&&q&&!q.persisted;me&&q.beforeEnter(x),r(x,m,y),((C=L&&L.onVnodeMounted)||me||te)&&Ge(()=>{C&&St(C,b,h),me&&q.enter(x),te&&On(h,null,b,"mounted")},E)},Q=(h,m,y,b,E)=>{if(y&&p(h,y),b)for(let A=0;A<b.length;A++)p(h,b[A]);if(E){let A=E.subTree;if(m===A){const O=E.vnode;Q(h,O,O.scopeId,O.slotScopeIds,E.parent)}}},k=(h,m,y,b,E,A,O,R,x=0)=>{for(let C=x;C<h.length;C++){const j=h[C]=R?an(h[C]):At(h[C]);_(null,j,m,y,b,E,A,O,R)}},W=(h,m,y,b,E,A,O)=>{const R=m.el=h.el;let{patchFlag:x,dynamicChildren:C,dirs:j}=m;x|=h.patchFlag&16;const L=h.props||we,H=m.props||we;let q;y&&Mn(y,!1),(q=H.onVnodeBeforeUpdate)&&St(q,y,m,h),j&&On(m,h,y,"beforeUpdate"),y&&Mn(y,!0);const te=E&&m.type!=="foreignObject";if(C?V(h.dynamicChildren,C,R,y,b,te,A):O||le(h,m,R,null,y,b,te,A,!1),x>0){if(x&16)Pe(R,m,L,H,y,b,E);else if(x&2&&L.class!==H.class&&i(R,"class",null,H.class,E),x&4&&i(R,"style",L.style,H.style,E),x&8){const me=m.dynamicProps;for(let ce=0;ce<me.length;ce++){const Se=me[ce],dt=L[Se],hr=H[Se];(hr!==dt||Se==="value")&&i(R,Se,dt,hr,E,h.children,y,b,D)}}x&1&&h.children!==m.children&&u(R,m.children)}else!O&&C==null&&Pe(R,m,L,H,y,b,E);((q=H.onVnodeUpdated)||j)&&Ge(()=>{q&&St(q,y,m,h),j&&On(m,h,y,"updated")},b)},V=(h,m,y,b,E,A,O)=>{for(let R=0;R<m.length;R++){const x=h[R],C=m[R],j=x.el&&(x.type===$e||!Bn(x,C)||x.shapeFlag&70)?d(x.el):y;_(x,C,j,null,b,E,A,O,!0)}},Pe=(h,m,y,b,E,A,O)=>{if(y!==b){if(y!==we)for(const R in y)!Mi(R)&&!(R in b)&&i(h,R,y[R],null,O,m.children,E,A,D);for(const R in b){if(Mi(R))continue;const x=b[R],C=y[R];x!==C&&R!=="value"&&i(h,R,C,x,O,m.children,E,A,D)}"value"in b&&i(h,"value",y.value,b.value)}},F=(h,m,y,b,E,A,O,R,x)=>{const C=m.el=h?h.el:a(""),j=m.anchor=h?h.anchor:a("");let{patchFlag:L,dynamicChildren:H,slotScopeIds:q}=m;q&&(R=R?R.concat(q):q),h==null?(r(C,y,b),r(j,y,b),k(m.children,y,j,E,A,O,R,x)):L>0&&L&64&&H&&h.dynamicChildren?(V(h.dynamicChildren,H,y,E,A,O,R),(m.key!=null||E&&m===E.subTree)&&op(h,m,!0)):le(h,m,y,j,E,A,O,R,x)},ye=(h,m,y,b,E,A,O,R,x)=>{m.slotScopeIds=R,h==null?m.shapeFlag&512?E.ctx.activate(m,y,b,O,x):Ue(m,y,b,E,A,O,x):Zt(h,m,x)},Ue=(h,m,y,b,E,A,O)=>{const R=h.component=Ly(h,b,E);if(Mo(h)&&(R.ctx.renderer=oe),Fy(R),R.asyncDep){if(E&&E.registerDep(R,Ee),!h.el){const x=R.subTree=pe(lt);I(null,x,m,y)}return}Ee(R,h,m,y,E,A,O)},Zt=(h,m,y)=>{const b=m.component=h.component;if(zv(h,m,y))if(b.asyncDep&&!b.asyncResolved){ge(b,m,y);return}else b.next=m,Bv(b.update),b.update();else m.el=h.el,b.vnode=m},Ee=(h,m,y,b,E,A,O)=>{const R=()=>{if(h.isMounted){let{next:j,bu:L,u:H,parent:q,vnode:te}=h,me=j,ce;Mn(h,!1),j?(j.el=te.el,ge(h,j,O)):j=te,L&&Di(L),(ce=j.props&&j.props.onVnodeBeforeUpdate)&&St(ce,q,j,te),Mn(h,!0);const Se=pa(h),dt=h.subTree;h.subTree=Se,_(dt,Se,d(dt.el),N(dt),h,E,A),j.el=Se.el,me===null&&qv(h,Se.el),H&&Ge(H,E),(ce=j.props&&j.props.onVnodeUpdated)&&Ge(()=>St(ce,q,j,te),E)}else{let j;const{el:L,props:H}=m,{bm:q,m:te,parent:me}=h,ce=Ss(m);if(Mn(h,!1),q&&Di(q),!ce&&(j=H&&H.onVnodeBeforeMount)&&St(j,me,m),Mn(h,!0),L&&ee){const Se=()=>{h.subTree=pa(h),ee(L,h.subTree,h,E,null)};ce?m.type.__asyncLoader().then(()=>!h.isUnmounted&&Se()):Se()}else{const Se=h.subTree=pa(h);_(null,Se,y,b,h,E,A),m.el=Se.el}if(te&&Ge(te,E),!ce&&(j=H&&H.onVnodeMounted)){const Se=m;Ge(()=>St(j,me,Se),E)}(m.shapeFlag&256||me&&Ss(me.vnode)&&me.vnode.shapeFlag&256)&&h.a&&Ge(h.a,E),h.isMounted=!0,m=y=b=null}},x=h.effect=new Zl(R,()=>lc(C),h.scope),C=h.update=()=>x.run();C.id=h.uid,Mn(h,!0),C()},ge=(h,m,y)=>{m.component=h;const b=h.vnode.props;h.vnode=m,h.next=null,wy(h,m.props,b,y),Cy(h,m.children,y),Qr(),Ku(),Jr()},le=(h,m,y,b,E,A,O,R,x=!1)=>{const C=h&&h.children,j=h?h.shapeFlag:0,L=m.children,{patchFlag:H,shapeFlag:q}=m;if(H>0){if(H&128){Nn(C,L,y,b,E,A,O,R,x);return}else if(H&256){ct(C,L,y,b,E,A,O,R,x);return}}q&8?(j&16&&D(C,E,A),L!==C&&u(y,L)):j&16?q&16?Nn(C,L,y,b,E,A,O,R,x):D(C,E,A,!0):(j&8&&u(y,""),q&16&&k(L,y,b,E,A,O,R,x))},ct=(h,m,y,b,E,A,O,R,x)=>{h=h||Ir,m=m||Ir;const C=h.length,j=m.length,L=Math.min(C,j);let H;for(H=0;H<L;H++){const q=m[H]=x?an(m[H]):At(m[H]);_(h[H],q,y,null,E,A,O,R,x)}C>j?D(h,E,A,!0,!1,L):k(m,y,b,E,A,O,R,x,L)},Nn=(h,m,y,b,E,A,O,R,x)=>{let C=0;const j=m.length;let L=h.length-1,H=j-1;for(;C<=L&&C<=H;){const q=h[C],te=m[C]=x?an(m[C]):At(m[C]);if(Bn(q,te))_(q,te,y,null,E,A,O,R,x);else break;C++}for(;C<=L&&C<=H;){const q=h[L],te=m[H]=x?an(m[H]):At(m[H]);if(Bn(q,te))_(q,te,y,null,E,A,O,R,x);else break;L--,H--}if(C>L){if(C<=H){const q=H+1,te=q<j?m[q].el:b;for(;C<=H;)_(null,m[C]=x?an(m[C]):At(m[C]),y,te,E,A,O,R,x),C++}}else if(C>H)for(;C<=L;)qe(h[C],E,A,!0),C++;else{const q=C,te=C,me=new Map;for(C=te;C<=H;C++){const nt=m[C]=x?an(m[C]):At(m[C]);nt.key!=null&&me.set(nt.key,C)}let ce,Se=0;const dt=H-te+1;let hr=!1,Ou=0;const fs=new Array(dt);for(C=0;C<dt;C++)fs[C]=0;for(C=q;C<=L;C++){const nt=h[C];if(Se>=dt){qe(nt,E,A,!0);continue}let Tt;if(nt.key!=null)Tt=me.get(nt.key);else for(ce=te;ce<=H;ce++)if(fs[ce-te]===0&&Bn(nt,m[ce])){Tt=ce;break}Tt===void 0?qe(nt,E,A,!0):(fs[Tt-te]=C+1,Tt>=Ou?Ou=Tt:hr=!0,_(nt,m[Tt],y,null,E,A,O,R,x),Se++)}const Mu=hr?Ry(fs):Ir;for(ce=Mu.length-1,C=dt-1;C>=0;C--){const nt=te+C,Tt=m[nt],Du=nt+1<j?m[nt+1].el:b;fs[C]===0?_(null,Tt,y,Du,E,A,O,R,x):hr&&(ce<0||C!==Mu[ce]?ut(Tt,y,Du,2):ce--)}}},ut=(h,m,y,b,E=null)=>{const{el:A,type:O,transition:R,children:x,shapeFlag:C}=h;if(C&6){ut(h.component.subTree,m,y,b);return}if(C&128){h.suspense.move(m,y,b);return}if(C&64){O.move(h,m,y,oe);return}if(O===$e){r(A,m,y);for(let L=0;L<x.length;L++)ut(x[L],m,y,b);r(h.anchor,m,y);return}if(O===_a){M(h,m,y);return}if(b!==2&&C&1&&R)if(b===0)R.beforeEnter(A),r(A,m,y),Ge(()=>R.enter(A),E);else{const{leave:L,delayLeave:H,afterLeave:q}=R,te=()=>r(A,m,y),me=()=>{L(A,()=>{te(),q&&q()})};H?H(A,te,me):me()}else r(A,m,y)},qe=(h,m,y,b=!1,E=!1)=>{const{type:A,props:O,ref:R,children:x,dynamicChildren:C,shapeFlag:j,patchFlag:L,dirs:H}=h;if(R!=null&&rl(R,null,y,h,!0),j&256){m.ctx.deactivate(h);return}const q=j&1&&H,te=!Ss(h);let me;if(te&&(me=O&&O.onVnodeBeforeUnmount)&&St(me,m,h),j&6)w(h.component,y,b);else{if(j&128){h.suspense.unmount(y,b);return}q&&On(h,null,m,"beforeUnmount"),j&64?h.type.remove(h,m,y,E,oe,b):C&&(A!==$e||L>0&&L&64)?D(C,m,y,!1,!0):(A===$e&&L&384||!E&&j&16)&&D(x,m,y),b&&fr(h)}(te&&(me=O&&O.onVnodeUnmounted)||q)&&Ge(()=>{me&&St(me,m,h),q&&On(h,null,m,"unmounted")},y)},fr=h=>{const{type:m,el:y,anchor:b,transition:E}=h;if(m===$e){Nu(y,b);return}if(m===_a){P(h);return}const A=()=>{s(y),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(h.shapeFlag&1&&E&&!E.persisted){const{leave:O,delayLeave:R}=E,x=()=>O(y,A);R?R(h.el,A,x):x()}else A()},Nu=(h,m)=>{let y;for(;h!==m;)y=f(h),s(h),h=y;s(m)},w=(h,m,y)=>{const{bum:b,scope:E,update:A,subTree:O,um:R}=h;b&&Di(b),E.stop(),A&&(A.active=!1,qe(O,h,m,y)),R&&Ge(R,m),Ge(()=>{h.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},D=(h,m,y,b=!1,E=!1,A=0)=>{for(let O=A;O<h.length;O++)qe(h[O],m,y,b,E)},N=h=>h.shapeFlag&6?N(h.component.subTree):h.shapeFlag&128?h.suspense.next():f(h.anchor||h.el),B=(h,m,y)=>{h==null?m._vnode&&qe(m._vnode,null,null,!0):_(m._vnode||null,h,m,null,null,null,y),Ku(),Hh(),m._vnode=h},oe={p:_,um:qe,m:ut,r:fr,mt:Ue,mc:k,pc:le,pbc:V,n:N,o:t};let Ie,ee;return e&&([Ie,ee]=e(oe)),{render:B,hydrate:Ie,createApp:yy(B,Ie)}}function Mn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function op(t,e,n=!1){const r=t.children,s=e.children;if($(r)&&$(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=an(s[i]),a.el=o.el),n||op(o,a)),a.type===Fo&&(a.el=o.el)}}function Ry(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Ay=t=>t.__isTeleport,$e=Symbol.for("v-fgt"),Fo=Symbol.for("v-txt"),lt=Symbol.for("v-cmt"),_a=Symbol.for("v-stc"),As=[];let mt=null;function Et(t=!1){As.push(mt=t?null:[])}function Py(){As.pop(),mt=As[As.length-1]||null}let Ws=1;function sd(t){Ws+=t}function ap(t){return t.dynamicChildren=Ws>0?mt||Ir:null,Py(),Ws>0&&mt&&mt.push(t),t}function Rn(t,e,n,r,s,i){return ap(_e(t,e,n,r,s,i,!0))}function hc(t,e,n,r,s){return ap(pe(t,e,n,r,s,!0))}function Ji(t){return t?t.__v_isVNode===!0:!1}function Bn(t,e){return t.type===e.type&&t.key===e.key}const Uo="__vInternal",lp=({key:t})=>t??null,Li=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ae(t)||Oe(t)||Y(t)?{i:Be,r:t,k:e,f:!!n}:t:null);function _e(t,e=null,n=null,r=0,s=null,i=t===$e?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&lp(e),ref:e&&Li(e),scopeId:Oo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Be};return a?(pc(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ae(n)?8:16),Ws>0&&!o&&mt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&mt.push(l),l}const pe=ky;function ky(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===uy)&&(t=lt),Ji(t)){const a=qt(t,e,!0);return n&&pc(a,n),Ws>0&&!i&&mt&&(a.shapeFlag&6?mt[mt.indexOf(t)]=a:mt.push(a)),a.patchFlag|=-2,a}if(Hy(t)&&(t=t.__vccOpts),e){e=xy(e);let{class:a,style:l}=e;a&&!Ae(a)&&(e.class=$s(a)),de(l)&&(Dh(l)&&!$(l)&&(l=Re({},l)),e.style=Ql(l))}const o=Ae(t)?1:Gv(t)?128:Ay(t)?64:de(t)?4:Y(t)?2:0;return _e(t,e,n,r,s,o,i,!0)}function xy(t){return t?Dh(t)||Uo in t?Re({},t):t:null}function qt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Oy(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&lp(a),ref:e&&e.ref?n&&s?$(s)?s.concat(Li(e)):[s,Li(e)]:Li(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==$e?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&qt(t.ssContent),ssFallback:t.ssFallback&&qt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function zn(t=" ",e=0){return pe(Fo,null,t,e)}function Ny(t="",e=!1){return e?(Et(),hc(lt,null,t)):pe(lt,null,t)}function At(t){return t==null||typeof t=="boolean"?pe(lt):$(t)?pe($e,null,t.slice()):typeof t=="object"?an(t):pe(Fo,null,String(t))}function an(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:qt(t)}function pc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),pc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Uo in e)?e._ctx=Be:s===3&&Be&&(Be.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:Be},n=32):(e=String(e),r&64?(n=16,e=[zn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Oy(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=$s([e.class,r.class]));else if(s==="style")e.style=Ql([e.style,r.style]);else if(So(s)){const i=e[s],o=r[s];o&&i!==o&&!($(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function St(t,e,n,r=null){at(t,e,7,[n,r])}const My=ep();let Dy=0;function Ly(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||My,i={uid:Dy++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ih(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:np(r,s),emitsOptions:Vh(r,s),emit:null,emitted:null,propsDefaults:we,inheritAttrs:r.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Wv.bind(null,i),t.ce&&t.ce(i),i}let Fe=null;const gc=()=>Fe||Be;let mc,pr,id="__VUE_INSTANCE_SETTERS__";(pr=Ka()[id])||(pr=Ka()[id]=[]),pr.push(t=>Fe=t),mc=t=>{pr.length>1?pr.forEach(e=>e(t)):pr[0](t)};const Lr=t=>{mc(t),t.scope.on()},qn=()=>{Fe&&Fe.scope.off(),mc(null)};function cp(t){return t.vnode.shapeFlag&4}let Vs=!1;function Fy(t,e=!1){Vs=e;const{props:n,children:r}=t.vnode,s=cp(t);by(t,n,s,e),Iy(t,r);const i=s?Uy(t,e):void 0;return Vs=!1,i}function Uy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Lh(new Proxy(t.ctx,fy));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?By(t):null;Lr(t),Qr();const i=pn(r,t,0,[t.props,s]);if(Jr(),qn(),vh(i)){if(i.then(qn,qn),e)return i.then(o=>{od(t,o,e)}).catch(o=>{xo(o,t,0)});t.asyncDep=i}else od(t,i,e)}else up(t,e)}function od(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:de(e)&&(t.setupState=$h(e)),up(t,n)}let ad;function up(t,e,n){const r=t.type;if(!t.render){if(!e&&ad&&!r.render){const s=r.template||dc(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Re(Re({isCustomElement:i,delimiters:a},o),l);r.render=ad(s,c)}}t.render=r.render||yt}Lr(t),Qr(),hy(t),Jr(),qn()}function $y(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ze(t,"get","$attrs"),e[n]}}))}function By(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return $y(t)},slots:t.slots,emit:t.emit,expose:e}}function $o(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy($h(Lh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Rs)return Rs[n](t)},has(e,n){return n in e||n in Rs}}))}function jy(t,e=!0){return Y(t)?t.displayName||t.name:t.name||e&&t.__name}function Hy(t){return Y(t)&&"__vccOpts"in t}const ae=(t,e)=>Fv(t,e,Vs);function wn(t,e,n){const r=arguments.length;return r===2?de(e)&&!$(e)?Ji(e)?pe(t,null,[e]):pe(t,e):pe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ji(n)&&(n=[n]),pe(t,e,n))}const Wy=Symbol.for("v-scx"),Vy=()=>Qe(Wy),Ky="3.3.4",zy="http://www.w3.org/2000/svg",jn=typeof document<"u"?document:null,ld=jn&&jn.createElement("template"),qy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?jn.createElementNS(zy,t):jn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>jn.createTextNode(t),createComment:t=>jn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>jn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ld.innerHTML=r?`<svg>${t}</svg>`:t;const a=ld.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Gy(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Yy(t,e,n){const r=t.style,s=Ae(n);if(n&&!s){if(e&&!Ae(e))for(const i in e)n[i]==null&&sl(r,i,"");for(const i in n)sl(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const cd=/\s*!important$/;function sl(t,e,n){if($(n))n.forEach(r=>sl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Qy(t,e);cd.test(n)?t.setProperty(or(r),n.replace(cd,""),"important"):t[r]=n}}const ud=["Webkit","Moz","ms"],va={};function Qy(t,e){const n=va[e];if(n)return n;let r=Ot(e);if(r!=="filter"&&r in t)return va[e]=r;r=Ao(r);for(let s=0;s<ud.length;s++){const i=ud[s]+r;if(i in t)return va[e]=i}return e}const dd="http://www.w3.org/1999/xlink";function Jy(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(dd,e.slice(6,e.length)):t.setAttributeNS(dd,e,n);else{const i=Y_(e);n==null||i&&!wh(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Xy(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=wh(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Ut(t,e,n,r){t.addEventListener(e,n,r)}function Zy(t,e,n,r){t.removeEventListener(e,n,r)}function eb(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=tb(e);if(r){const c=i[e]=sb(r,s);Ut(t,a,c,l)}else o&&(Zy(t,a,o,l),i[e]=void 0)}}const fd=/(?:Once|Passive|Capture)$/;function tb(t){let e;if(fd.test(t)){e={};let r;for(;r=t.match(fd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):or(t.slice(2)),e]}let ya=0;const nb=Promise.resolve(),rb=()=>ya||(nb.then(()=>ya=0),ya=Date.now());function sb(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;at(ib(r,n.value),e,5,[r])};return n.value=t,n.attached=rb(),n}function ib(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const hd=/^on[a-z]/,ob=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?Gy(t,r,s):e==="style"?Yy(t,n,r):So(e)?ql(e)||eb(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ab(t,e,r,s))?Xy(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Jy(t,e,r,s))};function ab(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&hd.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||hd.test(e)&&Ae(n)?!1:e in t}const tn="transition",hs="animation",_c=(t,{slots:e})=>wn(Zv,lb(t),e);_c.displayName="Transition";const dp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};_c.props=Re({},zh,dp);const Dn=(t,e=[])=>{$(t)?t.forEach(n=>n(...e)):t&&t(...e)},pd=t=>t?$(t)?t.some(e=>e.length>1):t.length>1:!1;function lb(t){const e={};for(const F in t)F in dp||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=cb(s),_=g&&g[0],v=g&&g[1],{onBeforeEnter:I,onEnter:S,onEnterCancelled:M,onLeave:P,onLeaveCancelled:G,onBeforeAppear:U=I,onAppear:Q=S,onAppearCancelled:k=M}=e,W=(F,ye,Ue)=>{Ln(F,ye?u:a),Ln(F,ye?c:o),Ue&&Ue()},V=(F,ye)=>{F._isLeaving=!1,Ln(F,d),Ln(F,p),Ln(F,f),ye&&ye()},Pe=F=>(ye,Ue)=>{const Zt=F?Q:S,Ee=()=>W(ye,F,Ue);Dn(Zt,[ye,Ee]),gd(()=>{Ln(ye,F?l:i),nn(ye,F?u:a),pd(Zt)||md(ye,r,_,Ee)})};return Re(e,{onBeforeEnter(F){Dn(I,[F]),nn(F,i),nn(F,o)},onBeforeAppear(F){Dn(U,[F]),nn(F,l),nn(F,c)},onEnter:Pe(!1),onAppear:Pe(!0),onLeave(F,ye){F._isLeaving=!0;const Ue=()=>V(F,ye);nn(F,d),fb(),nn(F,f),gd(()=>{F._isLeaving&&(Ln(F,d),nn(F,p),pd(P)||md(F,r,v,Ue))}),Dn(P,[F,Ue])},onEnterCancelled(F){W(F,!1),Dn(M,[F])},onAppearCancelled(F){W(F,!0),Dn(k,[F])},onLeaveCancelled(F){V(F),Dn(G,[F])}})}function cb(t){if(t==null)return null;if(de(t))return[ba(t.enter),ba(t.leave)];{const e=ba(t);return[e,e]}}function ba(t){return W_(t)}function nn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Ln(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function gd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let ub=0;function md(t,e,n,r){const s=t._endId=++ub,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=db(t,e);if(!o)return r();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,f),i()},f=p=>{p.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,f)}function db(t,e){const n=window.getComputedStyle(t),r=g=>(n[g]||"").split(", "),s=r(`${tn}Delay`),i=r(`${tn}Duration`),o=_d(s,i),a=r(`${hs}Delay`),l=r(`${hs}Duration`),c=_d(a,l);let u=null,d=0,f=0;e===tn?o>0&&(u=tn,d=o,f=i.length):e===hs?c>0&&(u=hs,d=c,f=l.length):(d=Math.max(o,c),u=d>0?o>c?tn:hs:null,f=u?u===tn?i.length:l.length:0);const p=u===tn&&/\b(transform|all)(,|$)/.test(r(`${tn}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function _d(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>vd(n)+vd(t[r])))}function vd(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function fb(){return document.body.offsetHeight}const En=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>Di(e,n):e};function hb(t){t.target.composing=!0}function yd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const il={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=En(s);const i=r||s.props&&s.props.type==="number";Ut(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ki(a)),t._assign(a)}),n&&Ut(t,"change",()=>{t.value=t.value.trim()}),e||(Ut(t,"compositionstart",hb),Ut(t,"compositionend",yd),Ut(t,"change",yd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=En(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Ki(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},pb={deep:!0,created(t,e,n){t._assign=En(n),Ut(t,"change",()=>{const r=t._modelValue,s=Fr(t),i=t.checked,o=t._assign;if($(r)){const a=Jl(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const c=[...r];c.splice(a,1),o(c)}}else if(Yr(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(fp(t,i))})},mounted:bd,beforeUpdate(t,e,n){t._assign=En(n),bd(t,e,n)}};function bd(t,{value:e,oldValue:n},r){t._modelValue=e,$(e)?t.checked=Jl(e,r.props.value)>-1:Yr(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Qn(e,fp(t,!0)))}const gb={created(t,{value:e},n){t.checked=Qn(e,n.props.value),t._assign=En(n),Ut(t,"change",()=>{t._assign(Fr(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t._assign=En(r),e!==n&&(t.checked=Qn(e,r.props.value))}},mb={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Yr(e);Ut(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ki(Fr(o)):Fr(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=En(r)},mounted(t,{value:e}){wd(t,e)},beforeUpdate(t,e,n){t._assign=En(n)},updated(t,{value:e}){wd(t,e)}};function wd(t,e){const n=t.multiple;if(!(n&&!$(e)&&!Yr(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=Fr(i);if(n)$(e)?i.selected=Jl(e,o)>-1:i.selected=e.has(o);else if(Qn(Fr(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Fr(t){return"_value"in t?t._value:t.value}function fp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const _b={created(t,e,n){Si(t,e,n,null,"created")},mounted(t,e,n){Si(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){Si(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){Si(t,e,n,r,"updated")}};function vb(t,e){switch(t){case"SELECT":return mb;case"TEXTAREA":return il;default:switch(e){case"checkbox":return pb;case"radio":return gb;default:return il}}}function Si(t,e,n,r,s){const o=vb(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const yb=["ctrl","shift","alt","meta"],bb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>yb.some(n=>t[`${n}Key`]&&!e.includes(n))},Ed=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=bb[e[s]];if(i&&i(n,e))return}return t(n,...r)},wb={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},xx=(t,e)=>n=>{if(!("key"in n))return;const r=or(n.key);if(e.some(s=>s===r||wb[s]===r))return t(n)},Eb=Re({patchProp:ob},qy);let Id;function Ib(){return Id||(Id=Ty(Eb))}const Cb=(...t)=>{const e=Ib().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Tb(r);if(!s)return;const i=e._component;!Y(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Tb(t){return Ae(t)?document.querySelector(t):t}const hp=new Set,Je=new WeakMap,Pr=new WeakMap,Jn=new WeakMap,ol=new WeakMap,Sb=new WeakMap,Ur=new WeakMap,Xi=new WeakMap,Is=new WeakSet;let Xn;const $t="__aa_tgt",al="__aa_del",Rb=t=>{const e=Nb(t);e&&e.forEach(n=>Ob(n))},Ab=t=>{t.forEach(e=>{e.target===Xn&&kb(),Je.has(e.target)&&lr(e.target)})};function Pb(t){const e=ol.get(t);e==null||e.disconnect();let n=Je.get(t),r=0;const s=5;n||(n=$r(t),Je.set(t,n));const{offsetWidth:i,offsetHeight:o}=Xn,l=[n.top-s,i-(n.left+s+n.width),o-(n.top+s+n.height),n.left-s].map(u=>`${-1*Math.floor(u)}px`).join(" "),c=new IntersectionObserver(()=>{++r>1&&lr(t)},{root:Xn,threshold:1,rootMargin:l});c.observe(t),ol.set(t,c)}function lr(t){clearTimeout(Xi.get(t));const e=Bo(t),n=typeof e=="function"?500:e.duration;Xi.set(t,setTimeout(async()=>{const r=Jn.get(t);try{await(r==null?void 0:r.finished),Je.set(t,$r(t)),Pb(t)}catch{}},n))}function kb(){clearTimeout(Xi.get(Xn)),Xi.set(Xn,setTimeout(()=>{hp.forEach(t=>_p(t,e=>pp(()=>lr(e))))},100))}function xb(t){setTimeout(()=>{Sb.set(t,setInterval(()=>pp(lr.bind(null,t)),2e3))},Math.round(2e3*Math.random()))}function pp(t){typeof requestIdleCallback=="function"?requestIdleCallback(()=>t()):requestAnimationFrame(()=>t())}let ll,br;typeof window<"u"&&(Xn=document.documentElement,ll=new MutationObserver(Rb),br=new ResizeObserver(Ab),br.observe(Xn));function Nb(t){return t.reduce((r,s)=>[...r,...Array.from(s.addedNodes),...Array.from(s.removedNodes)],[]).every(r=>r.nodeName==="#comment")?!1:t.reduce((r,s)=>{if(r===!1)return!1;if(s.target instanceof Element){if(wa(s.target),!r.has(s.target)){r.add(s.target);for(let i=0;i<s.target.children.length;i++){const o=s.target.children.item(i);if(o){if(al in o)return!1;wa(s.target,o),r.add(o)}}}if(s.removedNodes.length)for(let i=0;i<s.removedNodes.length;i++){const o=s.removedNodes[i];if(al in o)return!1;o instanceof Element&&(r.add(o),wa(s.target,o),Pr.set(o,[s.previousSibling,s.nextSibling]))}}return r},new Set)}function wa(t,e){!e&&!($t in t)?Object.defineProperty(t,$t,{value:t}):e&&!($t in e)&&Object.defineProperty(e,$t,{value:t})}function Ob(t){var e;const n=t.isConnected,r=Je.has(t);n&&Pr.has(t)&&Pr.delete(t),Jn.has(t)&&((e=Jn.get(t))===null||e===void 0||e.cancel()),r&&n?Db(t):r&&!n?Fb(t):Lb(t)}function Rt(t){return Number(t.replace(/[^0-9.\-]/g,""))}function Mb(t){let e=t.parentElement;for(;e;){if(e.scrollLeft||e.scrollTop)return{x:e.scrollLeft,y:e.scrollTop};e=e.parentElement}return{x:0,y:0}}function $r(t){const e=t.getBoundingClientRect(),{x:n,y:r}=Mb(t);return{top:e.top+r,left:e.left+n,width:e.width,height:e.height}}function gp(t,e,n){let r=e.width,s=e.height,i=n.width,o=n.height;const a=getComputedStyle(t);if(a.getPropertyValue("box-sizing")==="content-box"){const c=Rt(a.paddingTop)+Rt(a.paddingBottom)+Rt(a.borderTopWidth)+Rt(a.borderBottomWidth),u=Rt(a.paddingLeft)+Rt(a.paddingRight)+Rt(a.borderRightWidth)+Rt(a.borderLeftWidth);r-=u,i-=u,s-=c,o-=c}return[r,i,s,o].map(Math.round)}function Bo(t){return $t in t&&Ur.has(t[$t])?Ur.get(t[$t]):{duration:250,easing:"ease-in-out"}}function mp(t){if($t in t)return t[$t]}function vc(t){const e=mp(t);return e?Is.has(e):!1}function _p(t,...e){e.forEach(n=>n(t,Ur.has(t)));for(let n=0;n<t.children.length;n++){const r=t.children.item(n);r&&e.forEach(s=>s(r,Ur.has(r)))}}function Db(t){const e=Je.get(t),n=$r(t);if(!vc(t))return Je.set(t,n);let r;if(!e)return;const s=Bo(t);if(typeof s!="function"){const i=e.left-n.left,o=e.top-n.top,[a,l,c,u]=gp(t,e,n),d={transform:`translate(${i}px, ${o}px)`},f={transform:"translate(0, 0)"};a!==l&&(d.width=`${a}px`,f.width=`${l}px`),c!==u&&(d.height=`${c}px`,f.height=`${u}px`),r=t.animate([d,f],{duration:s.duration,easing:s.easing})}else r=new Animation(s(t,"remain",e,n)),r.play();Jn.set(t,r),Je.set(t,n),r.addEventListener("finish",lr.bind(null,t))}function Lb(t){const e=$r(t);Je.set(t,e);const n=Bo(t);if(!vc(t))return;let r;typeof n!="function"?r=t.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:n.duration*1.5,easing:"ease-in"}):(r=new Animation(n(t,"add",e)),r.play()),Jn.set(t,r),r.addEventListener("finish",lr.bind(null,t))}function Fb(t){var e;if(!Pr.has(t)||!Je.has(t))return;const[n,r]=Pr.get(t);Object.defineProperty(t,al,{value:!0}),r&&r.parentNode&&r.parentNode instanceof Element?r.parentNode.insertBefore(t,r):n&&n.parentNode?n.parentNode.appendChild(t):(e=mp(t))===null||e===void 0||e.appendChild(t);function s(){var f;t.remove(),Je.delete(t),Pr.delete(t),Jn.delete(t),(f=ol.get(t))===null||f===void 0||f.disconnect()}if(!vc(t))return s();const[i,o,a,l]=Ub(t),c=Bo(t),u=Je.get(t);let d;Object.assign(t.style,{position:"absolute",top:`${i}px`,left:`${o}px`,width:`${a}px`,height:`${l}px`,margin:0,pointerEvents:"none",transformOrigin:"center",zIndex:100}),typeof c!="function"?d=t.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:c.duration,easing:"ease-out"}):(d=new Animation(c(t,"remove",u)),d.play()),Jn.set(t,d),d.addEventListener("finish",s)}function Ub(t){const e=Je.get(t),[n,,r]=gp(t,e,$r(t));let s=t.parentElement;for(;s&&(getComputedStyle(s).position==="static"||s instanceof HTMLBodyElement);)s=s.parentElement;s||(s=document.body);const i=getComputedStyle(s),o=Je.get(s)||$r(s),a=Math.round(e.top-o.top)-Rt(i.borderTopWidth),l=Math.round(e.left-o.left)-Rt(i.borderLeftWidth);return[a,l,n,r]}function $b(t,e={}){return ll&&br&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&typeof e!="function"&&!e.disrespectUserMotionPreference||(Is.add(t),getComputedStyle(t).position==="static"&&Object.assign(t.style,{position:"relative"}),_p(t,lr,xb,s=>br==null?void 0:br.observe(s)),typeof e=="function"?Ur.set(t,e):Ur.set(t,{duration:250,easing:"ease-in-out",...e}),ll.observe(t,{childList:!0}),hp.add(t))),Object.freeze({parent:t,enable:()=>{Is.add(t)},disable:()=>{Is.delete(t)},isEnabled:()=>Is.has(t)})}const Bb={mounted:(t,e)=>{$b(t,e.value||{})}},jb={install(t){t.directive("auto-animate",Bb)}},Hb="modulepreload",Wb=function(t){return"/task-project/"+t},Cd={},Vb=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Wb(i),i in Cd)return;Cd[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const d=s[u];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Hb,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((u,d)=>{c.addEventListener("load",u),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};function Kb(){return vp().__VUE_DEVTOOLS_GLOBAL_HOOK__}function vp(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const zb=typeof Proxy=="function",qb="devtools-plugin:setup",Gb="plugin:settings:set";let gr,cl;function Yb(){var t;return gr!==void 0||(typeof window<"u"&&window.performance?(gr=!0,cl=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(gr=!0,cl=global.perf_hooks.performance):gr=!1),gr}function Qb(){return Yb()?cl.now():Date.now()}class Jb{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return Qb()}},n&&n.on(Gb,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Xb(t,e){const n=t,r=vp(),s=Kb(),i=zb&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(qb,t,e);else{const o=i?new Jb(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const yp=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",es=t=>yp?Symbol(t):"_vr_"+t,Zb=es("rvlm"),Td=es("rvd"),jo=es("r"),bp=es("rl"),ul=es("rvl"),yr=typeof window<"u";function ew(t){return t.__esModule||yp&&t[Symbol.toStringTag]==="Module"}const he=Object.assign;function Ea(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const Ps=()=>{},tw=/\/$/,nw=t=>t.replace(tw,"");function Ia(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),l=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=ow(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function rw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Sd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function sw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Br(e.matched[r],n.matched[s])&&wp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Br(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function wp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!iw(t[n],e[n]))return!1;return!0}function iw(t,e){return Array.isArray(t)?Rd(t,e):Array.isArray(e)?Rd(e,t):t===e}function Rd(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function ow(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Ks;(function(t){t.pop="pop",t.push="push"})(Ks||(Ks={}));var ks;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ks||(ks={}));function aw(t){if(!t)if(yr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),nw(t)}const lw=/^[^#]+#/;function cw(t,e){return t.replace(lw,"#")+e}function uw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ho=()=>({left:window.pageXOffset,top:window.pageYOffset});function dw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=uw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ad(t,e){return(history.state?history.state.position-e:-1)+t}const dl=new Map;function fw(t,e){dl.set(t,e)}function hw(t){const e=dl.get(t);return dl.delete(t),e}let pw=()=>location.protocol+"//"+location.host;function Ep(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Sd(l,"")}return Sd(n,t)+r+s}function gw(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const p=Ep(t,location),g=n.value,_=e.value;let v=0;if(f){if(n.value=p,e.value=f,o&&o===g){o=null;return}v=_?f.position-_.position:0}else r(p);s.forEach(I=>{I(n.value,g,{delta:v,type:Ks.pop,direction:v?v>0?ks.forward:ks.back:ks.unknown})})};function l(){o=n.value}function c(f){s.push(f);const p=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return i.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(he({},f.state,{scroll:Ho()}),"")}function d(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function Pd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ho():null}}function mw(t){const{history:e,location:n}=window,r={value:Ep(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:pw()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(l,c){const u=he({},e.state,Pd(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=he({},s.value,e.state,{forward:l,scroll:Ho()});i(u.current,u,!0);const d=he({},Pd(r.value,l,null),{position:u.position+1},c);i(l,d,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function _w(t){t=aw(t);const e=mw(t),n=gw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=he({location:"",base:t,go:r,createHref:cw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function vw(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),_w(t)}function yw(t){return typeof t=="string"||t&&typeof t=="object"}function Ip(t){return typeof t=="string"||typeof t=="symbol"}const rn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Cp=es("nf");var kd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(kd||(kd={}));function jr(t,e){return he(new Error,{type:t,[Cp]:!0},e)}function sn(t,e){return t instanceof Error&&Cp in t&&(e==null||!!(t.type&e))}const xd="[^/]+?",bw={sensitive:!1,strict:!1,start:!0,end:!0},ww=/[.+*?^${}()[\]/\\]/g;function Ew(t,e){const n=he({},bw,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const f=c[d];let p=40+(n.sensitive?.25:0);if(f.type===0)d||(s+="/"),s+=f.value.replace(ww,"\\$&"),p+=40;else if(f.type===1){const{value:g,repeatable:_,optional:v,regexp:I}=f;i.push({name:g,repeatable:_,optional:v});const S=I||xd;if(S!==xd){p+=10;try{new RegExp(`(${S})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${g}" (${S}): `+P.message)}}let M=_?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;d||(M=v&&c.length<2?`(?:/${M})`:"/"+M),v&&(M+="?"),s+=M,p+=20,v&&(p+=-8),_&&(p+=-20),S===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",g=i[f-1];d[g.name]=p&&g.repeatable?p.split("/"):p}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:_,optional:v}=p,I=g in c?c[g]:"";if(Array.isArray(I)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const S=Array.isArray(I)?I.join("/"):I;if(!S)if(v)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=S}}return u}return{re:o,score:r,keys:i,parse:a,stringify:l}}function Iw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Cw(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Iw(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const Tw={type:0,value:""},Sw=/[a-zA-Z0-9_]/;function Rw(t){if(!t)return[[]];if(t==="/")return[[Tw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function d(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:l==="("?n=2:Sw.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),s}function Aw(t,e,n){const r=Ew(Rw(t.path),n),s=he(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Pw(t,e){const n=[],r=new Map;e=Od({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,d,f){const p=!f,g=xw(u);g.aliasOf=f&&f.record;const _=Od(e,u),v=[g];if("alias"in u){const M=typeof u.alias=="string"?[u.alias]:u.alias;for(const P of M)v.push(he({},g,{components:f?f.record.components:g.components,path:P,aliasOf:f?f.record:g}))}let I,S;for(const M of v){const{path:P}=M;if(d&&P[0]!=="/"){const G=d.record.path,U=G[G.length-1]==="/"?"":"/";M.path=d.record.path+(P&&U+P)}if(I=Aw(M,d,_),f?f.alias.push(I):(S=S||I,S!==I&&S.alias.push(I),p&&u.name&&!Nd(I)&&o(u.name)),"children"in g){const G=g.children;for(let U=0;U<G.length;U++)i(G[U],I,f&&f.children[U])}f=f||I,l(I)}return S?()=>{o(S)}:Ps}function o(u){if(Ip(u)){const d=r.get(u);d&&(r.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&Cw(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Tp(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Nd(u)&&r.set(u.record.name,u)}function c(u,d){let f,p={},g,_;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw jr(1,{location:u});_=f.record.name,p=he(kw(d.params,f.keys.filter(S=>!S.optional).map(S=>S.name)),u.params),g=f.stringify(p)}else if("path"in u)g=u.path,f=n.find(S=>S.re.test(g)),f&&(p=f.parse(g),_=f.record.name);else{if(f=d.name?r.get(d.name):n.find(S=>S.re.test(d.path)),!f)throw jr(1,{location:u,currentLocation:d});_=f.record.name,p=he({},d.params,u.params),g=f.stringify(p)}const v=[];let I=f;for(;I;)v.unshift(I.record),I=I.parent;return{name:_,path:g,params:p,matched:v,meta:Ow(v)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function kw(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function xw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Nw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Nw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Nd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ow(t){return t.reduce((e,n)=>he(e,n.meta),{})}function Od(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Tp(t,e){return e.children.some(n=>n===t||Tp(t,n))}const Sp=/#/g,Mw=/&/g,Dw=/\//g,Lw=/=/g,Fw=/\?/g,Rp=/\+/g,Uw=/%5B/g,$w=/%5D/g,Ap=/%5E/g,Bw=/%60/g,Pp=/%7B/g,jw=/%7C/g,kp=/%7D/g,Hw=/%20/g;function yc(t){return encodeURI(""+t).replace(jw,"|").replace(Uw,"[").replace($w,"]")}function Ww(t){return yc(t).replace(Pp,"{").replace(kp,"}").replace(Ap,"^")}function fl(t){return yc(t).replace(Rp,"%2B").replace(Hw,"+").replace(Sp,"%23").replace(Mw,"%26").replace(Bw,"`").replace(Pp,"{").replace(kp,"}").replace(Ap,"^")}function Vw(t){return fl(t).replace(Lw,"%3D")}function Kw(t){return yc(t).replace(Sp,"%23").replace(Fw,"%3F")}function zw(t){return t==null?"":Kw(t).replace(Dw,"%2F")}function Zi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function qw(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Rp," "),o=i.indexOf("="),a=Zi(o<0?i:i.slice(0,o)),l=o<0?null:Zi(i.slice(o+1));if(a in e){let c=e[a];Array.isArray(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Md(t){let e="";for(let n in t){const r=t[n];if(n=Vw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&fl(i)):[r&&fl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Gw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function ps(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ln(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(jr(4,{from:n,to:e})):d instanceof Error?a(d):yw(d)?a(jr(2,{from:e,to:d})):(i&&r.enterCallbacks[s]===i&&typeof d=="function"&&i.push(d),o())},c=t.call(r&&r.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function Ca(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Yw(a)){const c=(a.__vccOpts||a)[e];c&&s.push(ln(c,n,r,i,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=ew(c)?c.default:c;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&ln(f,n,r,i,o)()}))}}return s}function Yw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Dd(t){const e=Qe(jo),n=Qe(bp),r=ae(()=>e.resolve(Sr(t.to))),s=ae(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Br.bind(null,u));if(f>-1)return f;const p=Ld(l[c-2]);return c>1&&Ld(u)===p&&d[d.length-1].path!==p?d.findIndex(Br.bind(null,l[c-2])):f}),i=ae(()=>s.value>-1&&Zw(n.params,r.value.params)),o=ae(()=>s.value>-1&&s.value===n.matched.length-1&&wp(n.params,r.value.params));function a(l={}){return Xw(l)?e[Sr(t.replace)?"replace":"push"](Sr(t.to)).catch(Ps):Promise.resolve()}return{route:r,href:ae(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Qw=Jt({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Dd,setup(t,{slots:e}){const n=Xr(Dd(t)),{options:r}=Qe(jo),s=ae(()=>({[Fd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Fd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:wn("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Jw=Qw;function Xw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Zw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ld(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Fd=(t,e,n)=>t??e??n,eE=Jt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=Qe(ul),s=ae(()=>t.route||r.value),i=Qe(Td,0),o=ae(()=>s.value.matched[i]);Ar(Td,i+1),Ar(Zb,o),Ar(ul,s);const a=re();return kt(()=>[a.value,o.value,t.name],([l,c,u],[d,f,p])=>{c&&(c.instances[u]=l,f&&f!==c&&l&&l===d&&(c.leaveGuards.size||(c.leaveGuards=f.leaveGuards),c.updateGuards.size||(c.updateGuards=f.updateGuards))),l&&c&&(!f||!Br(c,f)||!d)&&(c.enterCallbacks[u]||[]).forEach(g=>g(l))},{flush:"post"}),()=>{const l=s.value,c=o.value,u=c&&c.components[t.name],d=t.name;if(!u)return Ud(n.default,{Component:u,route:l});const f=c.props[t.name],p=f?f===!0?l.params:typeof f=="function"?f(l):f:null,_=wn(u,he({},p,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(c.instances[d]=null)},ref:a}));return Ud(n.default,{Component:_,route:l})||_}}});function Ud(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const tE=eE;function nE(t){const e=Pw(t.routes,t),n=t.parseQuery||qw,r=t.stringifyQuery||Md,s=t.history,i=ps(),o=ps(),a=ps(),l=Fh(rn);let c=rn;yr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ea.bind(null,w=>""+w),d=Ea.bind(null,zw),f=Ea.bind(null,Zi);function p(w,D){let N,B;return Ip(w)?(N=e.getRecordMatcher(w),B=D):B=w,e.addRoute(B,N)}function g(w){const D=e.getRecordMatcher(w);D&&e.removeRoute(D)}function _(){return e.getRoutes().map(w=>w.record)}function v(w){return!!e.getRecordMatcher(w)}function I(w,D){if(D=he({},D||l.value),typeof w=="string"){const h=Ia(n,w,D.path),m=e.resolve({path:h.path},D),y=s.createHref(h.fullPath);return he(h,m,{params:f(m.params),hash:Zi(h.hash),redirectedFrom:void 0,href:y})}let N;if("path"in w)N=he({},w,{path:Ia(n,w.path,D.path).path});else{const h=he({},w.params);for(const m in h)h[m]==null&&delete h[m];N=he({},w,{params:d(w.params)}),D.params=d(D.params)}const B=e.resolve(N,D),oe=w.hash||"";B.params=u(f(B.params));const Ie=rw(r,he({},w,{hash:Ww(oe),path:B.path})),ee=s.createHref(Ie);return he({fullPath:Ie,hash:oe,query:r===Md?Gw(w.query):w.query||{}},B,{redirectedFrom:void 0,href:ee})}function S(w){return typeof w=="string"?Ia(n,w,l.value.path):he({},w)}function M(w,D){if(c!==w)return jr(8,{from:D,to:w})}function P(w){return Q(w)}function G(w){return P(he(S(w),{replace:!0}))}function U(w){const D=w.matched[w.matched.length-1];if(D&&D.redirect){const{redirect:N}=D;let B=typeof N=="function"?N(w):N;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=S(B):{path:B},B.params={}),he({query:w.query,hash:w.hash,params:w.params},B)}}function Q(w,D){const N=c=I(w),B=l.value,oe=w.state,Ie=w.force,ee=w.replace===!0,h=U(N);if(h)return Q(he(S(h),{state:oe,force:Ie,replace:ee}),D||N);const m=N;m.redirectedFrom=D;let y;return!Ie&&sw(r,B,N)&&(y=jr(16,{to:m,from:B}),Nn(B,B,!0,!1)),(y?Promise.resolve(y):W(m,B)).catch(b=>sn(b)?sn(b,2)?b:ct(b):ge(b,m,B)).then(b=>{if(b){if(sn(b,2))return Q(he(S(b.to),{state:oe,force:Ie,replace:ee}),D||m)}else b=Pe(m,B,!0,ee,oe);return V(m,B,b),b})}function k(w,D){const N=M(w,D);return N?Promise.reject(N):Promise.resolve()}function W(w,D){let N;const[B,oe,Ie]=rE(w,D);N=Ca(B.reverse(),"beforeRouteLeave",w,D);for(const h of B)h.leaveGuards.forEach(m=>{N.push(ln(m,w,D))});const ee=k.bind(null,w,D);return N.push(ee),mr(N).then(()=>{N=[];for(const h of i.list())N.push(ln(h,w,D));return N.push(ee),mr(N)}).then(()=>{N=Ca(oe,"beforeRouteUpdate",w,D);for(const h of oe)h.updateGuards.forEach(m=>{N.push(ln(m,w,D))});return N.push(ee),mr(N)}).then(()=>{N=[];for(const h of w.matched)if(h.beforeEnter&&!D.matched.includes(h))if(Array.isArray(h.beforeEnter))for(const m of h.beforeEnter)N.push(ln(m,w,D));else N.push(ln(h.beforeEnter,w,D));return N.push(ee),mr(N)}).then(()=>(w.matched.forEach(h=>h.enterCallbacks={}),N=Ca(Ie,"beforeRouteEnter",w,D),N.push(ee),mr(N))).then(()=>{N=[];for(const h of o.list())N.push(ln(h,w,D));return N.push(ee),mr(N)}).catch(h=>sn(h,8)?h:Promise.reject(h))}function V(w,D,N){for(const B of a.list())B(w,D,N)}function Pe(w,D,N,B,oe){const Ie=M(w,D);if(Ie)return Ie;const ee=D===rn,h=yr?history.state:{};N&&(B||ee?s.replace(w.fullPath,he({scroll:ee&&h&&h.scroll},oe)):s.push(w.fullPath,oe)),l.value=w,Nn(w,D,N,ee),ct()}let F;function ye(){F=s.listen((w,D,N)=>{const B=I(w),oe=U(B);if(oe){Q(he(oe,{replace:!0}),B).catch(Ps);return}c=B;const Ie=l.value;yr&&fw(Ad(Ie.fullPath,N.delta),Ho()),W(B,Ie).catch(ee=>sn(ee,12)?ee:sn(ee,2)?(Q(ee.to,B).then(h=>{sn(h,20)&&!N.delta&&N.type===Ks.pop&&s.go(-1,!1)}).catch(Ps),Promise.reject()):(N.delta&&s.go(-N.delta,!1),ge(ee,B,Ie))).then(ee=>{ee=ee||Pe(B,Ie,!1),ee&&(N.delta?s.go(-N.delta,!1):N.type===Ks.pop&&sn(ee,20)&&s.go(-1,!1)),V(B,Ie,ee)}).catch(Ps)})}let Ue=ps(),Zt=ps(),Ee;function ge(w,D,N){ct(w);const B=Zt.list();return B.length?B.forEach(oe=>oe(w,D,N)):console.error(w),Promise.reject(w)}function le(){return Ee&&l.value!==rn?Promise.resolve():new Promise((w,D)=>{Ue.add([w,D])})}function ct(w){return Ee||(Ee=!w,ye(),Ue.list().forEach(([D,N])=>w?N(w):D()),Ue.reset()),w}function Nn(w,D,N,B){const{scrollBehavior:oe}=t;if(!yr||!oe)return Promise.resolve();const Ie=!N&&hw(Ad(w.fullPath,0))||(B||!N)&&history.state&&history.state.scroll||null;return bt().then(()=>oe(w,D,Ie)).then(ee=>ee&&dw(ee)).catch(ee=>ge(ee,w,D))}const ut=w=>s.go(w);let qe;const fr=new Set;return{currentRoute:l,addRoute:p,removeRoute:g,hasRoute:v,getRoutes:_,resolve:I,options:t,push:P,replace:G,go:ut,back:()=>ut(-1),forward:()=>ut(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Zt.add,isReady:le,install(w){const D=this;w.component("RouterLink",Jw),w.component("RouterView",tE),w.config.globalProperties.$router=D,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>Sr(l)}),yr&&!qe&&l.value===rn&&(qe=!0,P(s.location).catch(oe=>{}));const N={};for(const oe in rn)N[oe]=ae(()=>l.value[oe]);w.provide(jo,D),w.provide(bp,Xr(N)),w.provide(ul,l);const B=w.unmount;fr.add(w),w.unmount=function(){fr.delete(w),fr.size<1&&(c=rn,F&&F(),l.value=rn,qe=!1,Ee=!1),B()}}}}function mr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function rE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Br(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Br(c,l))||s.push(l))}return[n,r,s]}function sE(){return Qe(jo)}const xs=/^[a-z0-9]+(-[a-z0-9]+)*$/,Wo=(t,e,n,r="")=>{const s=t.split(":");if(t.slice(0,1)==="@"){if(s.length<2||s.length>3)return null;r=s.shift().slice(1)}if(s.length>3||!s.length)return null;if(s.length>1){const a=s.pop(),l=s.pop(),c={provider:s.length>0?s[0]:r,prefix:l,name:a};return e&&!Fi(c)?null:c}const i=s[0],o=i.split("-");if(o.length>1){const a={provider:r,prefix:o.shift(),name:o.join("-")};return e&&!Fi(a)?null:a}if(n&&r===""){const a={provider:r,prefix:"",name:i};return e&&!Fi(a,n)?null:a}return null},Fi=(t,e)=>t?!!((t.provider===""||t.provider.match(xs))&&(e&&t.prefix===""||t.prefix.match(xs))&&t.name.match(xs)):!1,xp=Object.freeze({left:0,top:0,width:16,height:16}),eo=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Vo=Object.freeze({...xp,...eo}),hl=Object.freeze({...Vo,body:"",hidden:!1});function iE(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(e.rotate||0))%4;return r&&(n.rotate=r),n}function $d(t,e){const n=iE(t,e);for(const r in hl)r in eo?r in t&&!(r in n)&&(n[r]=eo[r]):r in e?n[r]=e[r]:r in t&&(n[r]=t[r]);return n}function oE(t,e){const n=t.icons,r=t.aliases||Object.create(null),s=Object.create(null);function i(o){if(n[o])return s[o]=[];if(!(o in s)){s[o]=null;const a=r[o]&&r[o].parent,l=a&&i(a);l&&(s[o]=[a].concat(l))}return s[o]}return(e||Object.keys(n).concat(Object.keys(r))).forEach(i),s}function aE(t,e,n){const r=t.icons,s=t.aliases||Object.create(null);let i={};function o(a){i=$d(r[a]||s[a],i)}return o(e),n.forEach(o),$d(t,i)}function Np(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(s=>{e(s,null),n.push(s)});const r=oE(t);for(const s in r){const i=r[s];i&&(e(s,aE(t,s,i)),n.push(s))}return n}const lE={provider:"",aliases:{},not_found:{},...xp};function Ta(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function Op(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!Ta(t,lE))return null;const n=e.icons;for(const s in n){const i=n[s];if(!s.match(xs)||typeof i.body!="string"||!Ta(i,hl))return null}const r=e.aliases||Object.create(null);for(const s in r){const i=r[s],o=i.parent;if(!s.match(xs)||typeof o!="string"||!n[o]&&!r[o]||!Ta(i,hl))return null}return e}const Bd=Object.create(null);function cE(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function Zn(t,e){const n=Bd[t]||(Bd[t]=Object.create(null));return n[e]||(n[e]=cE(t,e))}function bc(t,e){return Op(e)?Np(e,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function uE(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let zs=!1;function Mp(t){return typeof t=="boolean"&&(zs=t),zs}function dE(t){const e=typeof t=="string"?Wo(t,!0,zs):t;if(e){const n=Zn(e.provider,e.prefix),r=e.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function fE(t,e){const n=Wo(t,!0,zs);if(!n)return!1;const r=Zn(n.provider,n.prefix);return uE(r,n.name,e)}function hE(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),zs&&!e&&!t.prefix){let s=!1;return Op(t)&&(t.prefix="",Np(t,(i,o)=>{o&&fE(i,o)&&(s=!0)})),s}const n=t.prefix;if(!Fi({provider:e,prefix:n,name:"a"}))return!1;const r=Zn(e,n);return!!bc(r,t)}const Dp=Object.freeze({width:null,height:null}),Lp=Object.freeze({...Dp,...eo}),pE=/(-?[0-9.]*[0-9]+[0-9.]*)/g,gE=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function jd(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const r=t.split(pE);if(r===null||!r.length)return t;const s=[];let i=r.shift(),o=gE.test(i);for(;;){if(o){const a=parseFloat(i);isNaN(a)?s.push(i):s.push(Math.ceil(a*e*n)/n)}else s.push(i);if(i=r.shift(),i===void 0)return s.join("");o=!o}}const mE=t=>t==="unset"||t==="undefined"||t==="none";function _E(t,e){const n={...Vo,...t},r={...Lp,...e},s={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(g=>{const _=[],v=g.hFlip,I=g.vFlip;let S=g.rotate;v?I?S+=2:(_.push("translate("+(s.width+s.left).toString()+" "+(0-s.top).toString()+")"),_.push("scale(-1 1)"),s.top=s.left=0):I&&(_.push("translate("+(0-s.left).toString()+" "+(s.height+s.top).toString()+")"),_.push("scale(1 -1)"),s.top=s.left=0);let M;switch(S<0&&(S-=Math.floor(S/4)*4),S=S%4,S){case 1:M=s.height/2+s.top,_.unshift("rotate(90 "+M.toString()+" "+M.toString()+")");break;case 2:_.unshift("rotate(180 "+(s.width/2+s.left).toString()+" "+(s.height/2+s.top).toString()+")");break;case 3:M=s.width/2+s.left,_.unshift("rotate(-90 "+M.toString()+" "+M.toString()+")");break}S%2===1&&(s.left!==s.top&&(M=s.left,s.left=s.top,s.top=M),s.width!==s.height&&(M=s.width,s.width=s.height,s.height=M)),_.length&&(i='<g transform="'+_.join(" ")+'">'+i+"</g>")});const o=r.width,a=r.height,l=s.width,c=s.height;let u,d;o===null?(d=a===null?"1em":a==="auto"?c:a,u=jd(d,l/c)):(u=o==="auto"?l:o,d=a===null?jd(u,c/l):a==="auto"?c:a);const f={},p=(g,_)=>{mE(_)||(f[g]=_.toString())};return p("width",u),p("height",d),f.viewBox=s.left.toString()+" "+s.top.toString()+" "+l.toString()+" "+c.toString(),{attributes:f,body:i}}const vE=/\sid="(\S+)"/g,yE="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let bE=0;function wE(t,e=yE){const n=[];let r;for(;r=vE.exec(t);)n.push(r[1]);if(!n.length)return t;const s="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const o=typeof e=="function"?e(i):e+(bE++).toString(),a=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+o+s+"$3")}),t=t.replace(new RegExp(s,"g"),""),t}const pl=Object.create(null);function EE(t,e){pl[t]=e}function gl(t){return pl[t]||pl[""]}function wc(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const Ec=Object.create(null),gs=["https://api.simplesvg.com","https://api.unisvg.com"],Ui=[];for(;gs.length>0;)gs.length===1||Math.random()>.5?Ui.push(gs.shift()):Ui.push(gs.pop());Ec[""]=wc({resources:["https://api.iconify.design"].concat(Ui)});function IE(t,e){const n=wc(e);return n===null?!1:(Ec[t]=n,!0)}function Ic(t){return Ec[t]}const CE=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let Hd=CE();function TE(t,e){const n=Ic(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let s=0;n.resources.forEach(o=>{s=Math.max(s,o.length)});const i=e+".json?icons=";r=n.maxURL-s-n.path.length-i.length}return r}function SE(t){return t===404}const RE=(t,e,n)=>{const r=[],s=TE(t,e),i="icons";let o={type:i,provider:t,prefix:e,icons:[]},a=0;return n.forEach((l,c)=>{a+=l.length+1,a>=s&&c>0&&(r.push(o),o={type:i,provider:t,prefix:e,icons:[]},a=l.length),o.icons.push(l)}),r.push(o),r};function AE(t){if(typeof t=="string"){const e=Ic(t);if(e)return e.path}return"/"}const PE=(t,e,n)=>{if(!Hd){n("abort",424);return}let r=AE(e.provider);switch(e.type){case"icons":{const i=e.prefix,a=e.icons.join(","),l=new URLSearchParams({icons:a});r+=i+".json?"+l.toString();break}case"custom":{const i=e.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let s=503;Hd(t+r).then(i=>{const o=i.status;if(o!==200){setTimeout(()=>{n(SE(o)?"abort":"next",o)});return}return s=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",s)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",s)})},kE={prepare:RE,send:PE};function xE(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((s,i)=>s.provider!==i.provider?s.provider.localeCompare(i.provider):s.prefix!==i.prefix?s.prefix.localeCompare(i.prefix):s.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return t.forEach(s=>{if(r.name===s.name&&r.prefix===s.prefix&&r.provider===s.provider)return;r=s;const i=s.provider,o=s.prefix,a=s.name,l=n[i]||(n[i]=Object.create(null)),c=l[o]||(l[o]=Zn(i,o));let u;a in c.icons?u=e.loaded:o===""||c.missing.has(a)?u=e.missing:u=e.pending;const d={provider:i,prefix:o,name:a};u.push(d)}),e}function Fp(t,e){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(s=>s.id!==e))})}function NE(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const r=t.provider,s=t.prefix;e.forEach(i=>{const o=i.icons,a=o.pending.length;o.pending=o.pending.filter(l=>{if(l.prefix!==s)return!0;const c=l.name;if(t.icons[c])o.loaded.push({provider:r,prefix:s,name:c});else if(t.missing.has(c))o.missing.push({provider:r,prefix:s,name:c});else return n=!0,!0;return!1}),o.pending.length!==a&&(n||Fp([t],i.id),i.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),i.abort))})}))}let OE=0;function ME(t,e,n){const r=OE++,s=Fp.bind(null,n,r);if(!e.pending.length)return s;const i={id:r,icons:e,callback:t,abort:s};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(i)}),s}function DE(t,e=!0,n=!1){const r=[];return t.forEach(s=>{const i=typeof s=="string"?Wo(s,e,n):s;i&&r.push(i)}),r}var LE={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function FE(t,e,n,r){const s=t.resources.length,i=t.random?Math.floor(Math.random()*s):t.index;let o;if(t.random){let U=t.resources.slice(0);for(o=[];U.length>1;){const Q=Math.floor(Math.random()*U.length);o.push(U[Q]),U=U.slice(0,Q).concat(U.slice(Q+1))}o=o.concat(U)}else o=t.resources.slice(i).concat(t.resources.slice(0,i));const a=Date.now();let l="pending",c=0,u,d=null,f=[],p=[];typeof r=="function"&&p.push(r);function g(){d&&(clearTimeout(d),d=null)}function _(){l==="pending"&&(l="aborted"),g(),f.forEach(U=>{U.status==="pending"&&(U.status="aborted")}),f=[]}function v(U,Q){Q&&(p=[]),typeof U=="function"&&p.push(U)}function I(){return{startTime:a,payload:e,status:l,queriesSent:c,queriesPending:f.length,subscribe:v,abort:_}}function S(){l="failed",p.forEach(U=>{U(void 0,u)})}function M(){f.forEach(U=>{U.status==="pending"&&(U.status="aborted")}),f=[]}function P(U,Q,k){const W=Q!=="success";switch(f=f.filter(V=>V!==U),l){case"pending":break;case"failed":if(W||!t.dataAfterTimeout)return;break;default:return}if(Q==="abort"){u=k,S();return}if(W){u=k,f.length||(o.length?G():S());return}if(g(),M(),!t.random){const V=t.resources.indexOf(U.resource);V!==-1&&V!==t.index&&(t.index=V)}l="completed",p.forEach(V=>{V(k)})}function G(){if(l!=="pending")return;g();const U=o.shift();if(U===void 0){if(f.length){d=setTimeout(()=>{g(),l==="pending"&&(M(),S())},t.timeout);return}S();return}const Q={status:"pending",resource:U,callback:(k,W)=>{P(Q,k,W)}};f.push(Q),c++,d=setTimeout(G,t.rotate),n(U,e,Q.callback)}return setTimeout(G),I}function Up(t){const e={...LE,...t};let n=[];function r(){n=n.filter(a=>a().status==="pending")}function s(a,l,c){const u=FE(e,a,l,(d,f)=>{r(),c&&c(d,f)});return n.push(u),u}function i(a){return n.find(l=>a(l))||null}return{query:s,find:i,setIndex:a=>{e.index=a},getIndex:()=>e.index,cleanup:r}}function Wd(){}const Sa=Object.create(null);function UE(t){if(!Sa[t]){const e=Ic(t);if(!e)return;const n=Up(e),r={config:e,redundancy:n};Sa[t]=r}return Sa[t]}function $E(t,e,n){let r,s;if(typeof t=="string"){const i=gl(t);if(!i)return n(void 0,424),Wd;s=i.send;const o=UE(t);o&&(r=o.redundancy)}else{const i=wc(t);if(i){r=Up(i);const o=t.resources?t.resources[0]:"",a=gl(o);a&&(s=a.send)}}return!r||!s?(n(void 0,424),Wd):r.query(e,s,n)().abort}const Vd="iconify2",qs="iconify",$p=qs+"-count",Kd=qs+"-version",Bp=36e5,BE=168;function ml(t,e){try{return t.getItem(e)}catch{}}function Cc(t,e,n){try{return t.setItem(e,n),!0}catch{}}function zd(t,e){try{t.removeItem(e)}catch{}}function _l(t,e){return Cc(t,$p,e.toString())}function vl(t){return parseInt(ml(t,$p))||0}const Ko={local:!0,session:!0},jp={local:new Set,session:new Set};let Tc=!1;function jE(t){Tc=t}let Ri=typeof window>"u"?{}:window;function Hp(t){const e=t+"Storage";try{if(Ri&&Ri[e]&&typeof Ri[e].length=="number")return Ri[e]}catch{}Ko[t]=!1}function Wp(t,e){const n=Hp(t);if(!n)return;const r=ml(n,Kd);if(r!==Vd){if(r){const a=vl(n);for(let l=0;l<a;l++)zd(n,qs+l.toString())}Cc(n,Kd,Vd),_l(n,0);return}const s=Math.floor(Date.now()/Bp)-BE,i=a=>{const l=qs+a.toString(),c=ml(n,l);if(typeof c=="string"){try{const u=JSON.parse(c);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>s&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&e(u,a))return!0}catch{}zd(n,l)}};let o=vl(n);for(let a=o-1;a>=0;a--)i(a)||(a===o-1?(o--,_l(n,o)):jp[t].add(a))}function Vp(){if(!Tc){jE(!0);for(const t in Ko)Wp(t,e=>{const n=e.data,r=e.provider,s=n.prefix,i=Zn(r,s);if(!bc(i,n).length)return!1;const o=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,o):o,!0})}}function HE(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const r in Ko)Wp(r,s=>{const i=s.data;return s.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===e});return!0}function WE(t,e){Tc||Vp();function n(r){let s;if(!Ko[r]||!(s=Hp(r)))return;const i=jp[r];let o;if(i.size)i.delete(o=Array.from(i).shift());else if(o=vl(s),!_l(s,o+1))return;const a={cached:Math.floor(Date.now()/Bp),provider:t.provider,data:e};return Cc(s,qs+o.toString(),JSON.stringify(a))}e.lastModified&&!HE(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function qd(){}function VE(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,NE(t)}))}function KE(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,s=t.iconsToLoad;delete t.iconsToLoad;let i;if(!s||!(i=gl(n)))return;i.prepare(n,r,s).forEach(a=>{$E(n,a,l=>{if(typeof l!="object")a.icons.forEach(c=>{t.missing.add(c)});else try{const c=bc(t,l);if(!c.length)return;const u=t.pendingIcons;u&&c.forEach(d=>{u.delete(d)}),WE(t,l)}catch(c){console.error(c)}VE(t)})})}))}const zE=(t,e)=>{const n=DE(t,!0,Mp()),r=xE(n);if(!r.pending.length){let l=!0;return e&&setTimeout(()=>{l&&e(r.loaded,r.missing,r.pending,qd)}),()=>{l=!1}}const s=Object.create(null),i=[];let o,a;return r.pending.forEach(l=>{const{provider:c,prefix:u}=l;if(u===a&&c===o)return;o=c,a=u,i.push(Zn(c,u));const d=s[c]||(s[c]=Object.create(null));d[u]||(d[u]=[])}),r.pending.forEach(l=>{const{provider:c,prefix:u,name:d}=l,f=Zn(c,u),p=f.pendingIcons||(f.pendingIcons=new Set);p.has(d)||(p.add(d),s[c][u].push(d))}),i.forEach(l=>{const{provider:c,prefix:u}=l;s[c][u].length&&KE(l,s[c][u])}),e?ME(e,r,i):qd};function qE(t,e){const n={...t};for(const r in e){const s=e[r],i=typeof s;r in Dp?(s===null||s&&(i==="string"||i==="number"))&&(n[r]=s):i===typeof n[r]&&(n[r]=r==="rotate"?s%4:s)}return n}const GE=/[\s,]+/;function YE(t,e){e.split(GE).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function QE(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function r(s){for(;s<0;)s+=4;return s%4}if(n===""){const s=parseInt(t);return isNaN(s)?0:r(s)}else if(n!==t){let s=0;switch(n){case"%":s=25;break;case"deg":s=90}if(s){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/s,i%1===0?r(i):0)}}return e}function JE(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in e)n+=" "+r+'="'+e[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function XE(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function ZE(t){return"data:image/svg+xml,"+XE(t)}function eI(t){return'url("'+ZE(t)+'")'}const Gd={...Lp,inline:!1},tI={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},nI={display:"inline-block"},yl={backgroundColor:"currentColor"},Kp={backgroundColor:"transparent"},Yd={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Qd={webkitMask:yl,mask:yl,background:Kp};for(const t in Qd){const e=Qd[t];for(const n in Yd)e[t+n]=Yd[n]}const $i={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";$i[t+"-flip"]=e,$i[t.slice(0,1)+"-flip"]=e,$i[t+"Flip"]=e});function Jd(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const Xd=(t,e)=>{const n=qE(Gd,e),r={...tI},s=e.mode||"svg",i={},o=e.style,a=typeof o=="object"&&!(o instanceof Array)?o:{};for(let _ in e){const v=e[_];if(v!==void 0)switch(_){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[_]=v===!0||v==="true"||v===1;break;case"flip":typeof v=="string"&&YE(n,v);break;case"color":i.color=v;break;case"rotate":typeof v=="string"?n[_]=QE(v):typeof v=="number"&&(n[_]=v);break;case"ariaHidden":case"aria-hidden":v!==!0&&v!=="true"&&delete r["aria-hidden"];break;default:{const I=$i[_];I?(v===!0||v==="true"||v===1)&&(n[I]=!0):Gd[_]===void 0&&(r[_]=v)}}}const l=_E(t,n),c=l.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),s==="svg"){r.style={...i,...a},Object.assign(r,c);let _=0,v=e.id;return typeof v=="string"&&(v=v.replace(/-/g,"_")),r.innerHTML=wE(l.body,v?()=>v+"ID"+_++:"iconifyVue"),wn("svg",r)}const{body:u,width:d,height:f}=t,p=s==="mask"||(s==="bg"?!1:u.indexOf("currentColor")!==-1),g=JE(u,{...c,width:d+"",height:f+""});return r.style={...i,"--svg":eI(g),width:Jd(c.width),height:Jd(c.height),...nI,...p?yl:Kp,...a},wn("span",r)};Mp(!0);EE("",kE);if(typeof document<"u"&&typeof window<"u"){Vp();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!hE(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const r="IconifyProviders["+n+"] is invalid.";try{const s=e[n];if(typeof s!="object"||!s||s.resources===void 0)continue;IE(n,s)||console.error(r)}catch{console.error(r)}}}}const rI={...Vo,body:""},zp=Jt({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let n;if(typeof t!="string"||(n=Wo(t,!1,!0))===null)return this.abortLoading(),null;const r=dE(n);if(!r)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",r!==null&&(this._loadingIcon={name:t,abort:zE([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t));const s=["iconify"];return n.prefix!==""&&s.push("iconify--"+n.prefix),n.provider!==""&&s.push("iconify--"+n.provider),{data:r,classes:s}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted?this.getIcon(t.icon,t.onLoad):null;if(!e)return Xd(rI,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),Xd({...Vo,...e.data},n)}}),An=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},sI={components:{Icon:zp},setup(t,e){const n=re("Login"),r=re("Signup Instead"),s=re(""),i=re(""),o=re(!1);function a(){n.value==="Login"?(n.value="Signup",r.value="Login Instead"):(n.value="Login",r.value="Signup Instead")}function l(){e.emit("emit-user",[s.value,i.value,n.value]),s.value="",i.value=""}function c(){o.value===!1?o.value=!0:o.value===!0&&(o.value=!1)}return{buttonPrimary:n,buttonSecondary:r,switchText:a,emitUser:l,username:s,password:i,showHide:o,showHidePassword:c}}},iI={class:"relative mb-3"},oI=_e("label",{for:"email",class:"pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"},"Email address",-1),aI={class:"relative mb-3"},lI=["type"],cI={class:"py-1"},uI=_e("label",{for:"showPassword",class:"p-1 dark:text-white"},"Show Password",-1),dI=_e("label",{for:"password",class:"pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"},"Password",-1),fI={class:"p-0.5"},hI={class:"p-0.5"};function pI(t,e,n,r,s,i){const o=ft("base-button");return Et(),Rn("form",null,[_e("div",iI,[qu(_e("input",{type:"text",class:"peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]",id:"email",placeholder:"name@example.com","onUpdate:modelValue":e[0]||(e[0]=a=>r.username=a)},null,512),[[il,r.username]]),oI]),_e("div",aI,[qu(_e("input",{type:r.showHide?"text":"password",class:"peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] bg-",id:"password",placeholder:"Password","onUpdate:modelValue":e[1]||(e[1]=a=>r.password=a)},null,8,lI),[[_b,r.password]]),_e("div",cI,[_e("input",{type:"checkbox",id:"showPassword",onChange:e[2]||(e[2]=(...a)=>r.showHidePassword&&r.showHidePassword(...a))},null,32),uI]),dI]),_e("span",fI,[pe(o,{onClick:Ed(r.emitUser,["prevent"]),class:"font-semibold"},{default:gt(()=>[zn(za(r.buttonPrimary),1)]),_:1},8,["onClick"])]),_e("span",hI,[pe(o,{onClick:Ed(r.switchText,["prevent"]),class:"font-semibold"},{default:gt(()=>[zn(za(r.buttonSecondary),1)]),_:1},8,["onClick"])])])}const gI=An(sI,[["render",pI]]);const mI={},_I={class:"text-base text-red-600"};function vI(t,e){return Et(),Rn("div",null,[pe(_c,{name:"message"},{default:gt(()=>[_e("p",_I,[Lo(t.$slots,"default",{},void 0,!0)])]),_:3})])}const yI=An(mI,[["render",vI],["__scopeId","data-v-e583e2cf"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=function(t,e){if(!t)throw ts(e)},ts=function(t){return new Error("Firebase Database ("+qp.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},bI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Sc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),r.push(n[u],n[d],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):bI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||d==null)throw new wI;const f=i<<2|a>>4;if(r.push(f),c!==64){const p=a<<4&240|c>>2;if(r.push(p),d!==64){const g=c<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yp=function(t){const e=Gp(t);return Sc.encodeByteArray(e,!0)},to=function(t){return Yp(t).replace(/\./g,"")},no=function(t){try{return Sc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(t){return Qp(void 0,t)}function Qp(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!II(n)||(t[n]=Qp(t[n],e[n]));return t}function II(t){return t!=="__proto__"}/**
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
 */function CI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const TI=()=>CI().__FIREBASE_DEFAULTS__,SI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},RI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&no(t[1]);return e&&JSON.parse(e)},Rc=()=>{try{return TI()||SI()||RI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Jp=t=>{var e,n;return(n=(e=Rc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},AI=t=>{const e=Jp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Xp=()=>{var t;return(t=Rc())===null||t===void 0?void 0:t.config},Zp=t=>{var e;return(e=Rc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function PI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[to(JSON.stringify(n)),to(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ac(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function kI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function eg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function NI(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tg(){return qp.NODE_ADMIN===!0}function OI(){try{return typeof indexedDB=="object"}catch{return!1}}function MI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI="FirebaseError";class Pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=DI,Object.setPrototypeOf(this,Pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,li.prototype.create)}}class li{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?LI(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Pn(s,a,r)}}function LI(t,e){return t.replace(FI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const FI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(t){return JSON.parse(t)}function xe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Gs(no(i[0])||""),n=Gs(no(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},UI=function(t){const e=ng(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},$I=function(t){const e=ng(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Hr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function bl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ro(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function so(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Zd(i)&&Zd(o)){if(!so(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Zd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Cs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ts(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):d<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const f=(s<<5|s>>>27)+c+l+u+r[d]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function jI(t,e){const n=new HI(t,e);return n.subscribe.bind(n)}class HI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");WI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ra),s.error===void 0&&(s.error=Ra),s.complete===void 0&&(s.complete=Ra);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function WI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ra(){}function qo(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,T(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Go=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function We(t){return t&&t._delegate?t._delegate:t}class er{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Fn="[DEFAULT]";/**
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
 */class KI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qI(e))try{this.getOrInitializeService({instanceIdentifier:Fn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fn){return this.instances.has(e)}getOptions(e=Fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fn){return this.component?this.component.multipleInstances?e:Fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zI(t){return t===Fn?void 0:t}function qI(t){return t.instantiationMode==="EAGER"}/**
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
 */class GI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new KI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const YI={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},QI=ue.INFO,JI={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},XI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=JI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pc{constructor(e){this.name=e,this._logLevel=QI,this._logHandler=XI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const ZI=(t,e)=>e.some(n=>t instanceof n);let ef,tf;function eC(){return ef||(ef=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tC(){return tf||(tf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rg=new WeakMap,wl=new WeakMap,sg=new WeakMap,Aa=new WeakMap,kc=new WeakMap;function nC(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(gn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rg.set(n,t)}).catch(()=>{}),kc.set(e,t),e}function rC(t){if(wl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});wl.set(t,e)}let El={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sC(t){El=t(El)}function iC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pa(this),e,...n);return sg.set(r,e.sort?e.sort():[e]),gn(r)}:tC().includes(t)?function(...e){return t.apply(Pa(this),e),gn(rg.get(this))}:function(...e){return gn(t.apply(Pa(this),e))}}function oC(t){return typeof t=="function"?iC(t):(t instanceof IDBTransaction&&rC(t),ZI(t,eC())?new Proxy(t,El):t)}function gn(t){if(t instanceof IDBRequest)return nC(t);if(Aa.has(t))return Aa.get(t);const e=oC(t);return e!==t&&(Aa.set(t,e),kc.set(e,t)),e}const Pa=t=>kc.get(t);function aC(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=gn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(gn(o.result),l.oldVersion,l.newVersion,gn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const lC=["get","getKey","getAll","getAllKeys","count"],cC=["put","add","delete","clear"],ka=new Map;function nf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ka.get(e))return ka.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=cC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||lC.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return ka.set(e,i),i}sC(t=>({...t,get:(e,n,r)=>nf(e,n)||t.get(e,n,r),has:(e,n)=>!!nf(e,n)||t.has(e,n)}));/**
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
 */class uC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Il="@firebase/app",rf="0.11.1";/**
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
 */const Gt=new Pc("@firebase/app"),fC="@firebase/app-compat",hC="@firebase/analytics-compat",pC="@firebase/analytics",gC="@firebase/app-check-compat",mC="@firebase/app-check",_C="@firebase/auth",vC="@firebase/auth-compat",yC="@firebase/database",bC="@firebase/data-connect",wC="@firebase/database-compat",EC="@firebase/functions",IC="@firebase/functions-compat",CC="@firebase/installations",TC="@firebase/installations-compat",SC="@firebase/messaging",RC="@firebase/messaging-compat",AC="@firebase/performance",PC="@firebase/performance-compat",kC="@firebase/remote-config",xC="@firebase/remote-config-compat",NC="@firebase/storage",OC="@firebase/storage-compat",MC="@firebase/firestore",DC="@firebase/vertexai",LC="@firebase/firestore-compat",FC="firebase",UC="11.3.1";/**
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
 */const Cl="[DEFAULT]",$C={[Il]:"fire-core",[fC]:"fire-core-compat",[pC]:"fire-analytics",[hC]:"fire-analytics-compat",[mC]:"fire-app-check",[gC]:"fire-app-check-compat",[_C]:"fire-auth",[vC]:"fire-auth-compat",[yC]:"fire-rtdb",[bC]:"fire-data-connect",[wC]:"fire-rtdb-compat",[EC]:"fire-fn",[IC]:"fire-fn-compat",[CC]:"fire-iid",[TC]:"fire-iid-compat",[SC]:"fire-fcm",[RC]:"fire-fcm-compat",[AC]:"fire-perf",[PC]:"fire-perf-compat",[kC]:"fire-rc",[xC]:"fire-rc-compat",[NC]:"fire-gcs",[OC]:"fire-gcs-compat",[MC]:"fire-fst",[LC]:"fire-fst-compat",[DC]:"fire-vertex","fire-js":"fire-js",[FC]:"fire-js-all"};/**
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
 */const io=new Map,BC=new Map,Tl=new Map;function sf(t,e){try{t.container.addComponent(e)}catch(n){Gt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wr(t){const e=t.name;if(Tl.has(e))return Gt.debug(`There were multiple attempts to register component ${e}.`),!1;Tl.set(e,t);for(const n of io.values())sf(n,t);for(const n of BC.values())sf(n,t);return!0}function xc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ot(t){return t==null?!1:t.settings!==void 0}/**
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
 */const jC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mn=new li("app","Firebase",jC);/**
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
 */class HC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mn.create("app-deleted",{appName:this._name})}}/**
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
 */const rs=UC;function Nc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Cl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw mn.create("bad-app-name",{appName:String(s)});if(n||(n=Xp()),!n)throw mn.create("no-options");const i=io.get(s);if(i){if(so(n,i.options)&&so(r,i.config))return i;throw mn.create("duplicate-app",{appName:s})}const o=new GI(s);for(const l of Tl.values())o.addComponent(l);const a=new HC(n,r,o);return io.set(s,a),a}function ig(t=Cl){const e=io.get(t);if(!e&&t===Cl&&Xp())return Nc();if(!e)throw mn.create("no-app",{appName:t});return e}function _n(t,e,n){var r;let s=(r=$C[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gt.warn(a.join(" "));return}Wr(new er(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const WC="firebase-heartbeat-database",VC=1,Ys="firebase-heartbeat-store";let xa=null;function og(){return xa||(xa=aC(WC,VC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ys)}catch(n){console.warn(n)}}}}).catch(t=>{throw mn.create("idb-open",{originalErrorMessage:t.message})})),xa}async function KC(t){try{const n=(await og()).transaction(Ys),r=await n.objectStore(Ys).get(ag(t));return await n.done,r}catch(e){if(e instanceof Pn)Gt.warn(e.message);else{const n=mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gt.warn(n.message)}}}async function of(t,e){try{const r=(await og()).transaction(Ys,"readwrite");await r.objectStore(Ys).put(e,ag(t)),await r.done}catch(n){if(n instanceof Pn)Gt.warn(n.message);else{const r=mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gt.warn(r.message)}}}function ag(t){return`${t.name}!${t.options.appId}`}/**
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
 */const zC=1024,qC=30;class GC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new QC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=af();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>qC){const o=JC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Gt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=af(),{heartbeatsToSend:r,unsentEntries:s}=YC(this._heartbeatsCache.heartbeats),i=to(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Gt.warn(n),""}}}function af(){return new Date().toISOString().substring(0,10)}function YC(t,e=zC){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),lf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),lf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class QC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return OI()?MI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await KC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return of(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return of(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function lf(t){return to(JSON.stringify({version:2,heartbeats:t})).length}function JC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function XC(t){Wr(new er("platform-logger",e=>new uC(e),"PRIVATE")),Wr(new er("heartbeat",e=>new GC(e),"PRIVATE")),_n(Il,rf,t),_n(Il,rf,"esm2017"),_n("fire-js","")}XC("");function Oc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function lg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZC=lg,cg=new li("auth","Firebase",lg());/**
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
 */const oo=new Pc("@firebase/auth");function eT(t,...e){oo.logLevel<=ue.WARN&&oo.warn(`Auth (${rs}): ${t}`,...e)}function Bi(t,...e){oo.logLevel<=ue.ERROR&&oo.error(`Auth (${rs}): ${t}`,...e)}/**
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
 */function It(t,...e){throw Mc(t,...e)}function xt(t,...e){return Mc(t,...e)}function ug(t,e,n){const r=Object.assign(Object.assign({},ZC()),{[e]:n});return new li("auth","Firebase",r).create(e,{appName:t.name})}function Vt(t){return ug(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return cg.create(t,...e)}function z(t,e,...n){if(!t)throw Mc(e,...n)}function Bt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bi(e),new Error(e)}function Yt(t,e){t||Bt(e)}/**
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
 */function Sl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tT(){return cf()==="http:"||cf()==="https:"}function cf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function nT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tT()||xI()||"connection"in navigator)?navigator.onLine:!0}function rT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ci{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yt(n>e,"Short delay should be less than long delay!"),this.isMobile=Ac()||eg()}get(){return nT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Dc(t,e){Yt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class dg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const iT=new ci(3e4,6e4);function kn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xn(t,e,n,r,s={}){return fg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ns(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},i);return kI()||(c.referrerPolicy="no-referrer"),dg.fetch()(hg(t,t.config.apiHost,n,a),c)})}async function fg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},sT),e);try{const s=new aT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ai(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ai(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ai(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ai(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ug(t,u,c);It(t,u)}}catch(s){if(s instanceof Pn)throw s;It(t,"network-request-failed",{message:String(s)})}}async function ui(t,e,n,r,s={}){const i=await xn(t,e,n,r,s);return"mfaPendingCredential"in i&&It(t,"multi-factor-auth-required",{_serverResponse:i}),i}function hg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Dc(t.config,s):`${t.config.apiScheme}://${s}`}function oT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class aT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(xt(this.auth,"network-request-failed")),iT.get())})}}function Ai(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=xt(t,e,r);return s.customData._tokenResponse=n,s}function uf(t){return t!==void 0&&t.enterprise!==void 0}class lT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return oT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function cT(t,e){return xn(t,"GET","/v2/recaptchaConfig",kn(t,e))}/**
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
 */async function uT(t,e){return xn(t,"POST","/v1/accounts:delete",e)}async function pg(t,e){return xn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ns(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dT(t,e=!1){const n=We(t),r=await n.getIdToken(e),s=Lc(r);z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ns(Na(s.auth_time)),issuedAtTime:Ns(Na(s.iat)),expirationTime:Ns(Na(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Na(t){return Number(t)*1e3}function Lc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Bi("JWT malformed, contained fewer than 3 sections"),null;try{const s=no(n);return s?JSON.parse(s):(Bi("Failed to decode base64 JWT payload"),null)}catch(s){return Bi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function df(t){const e=Lc(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Qs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pn&&fT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class hT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Rl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ns(this.lastLoginAt),this.creationTime=Ns(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ao(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Qs(t,pg(n,{idToken:r}));z(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?gg(i.providerUserInfo):[],a=gT(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Rl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function pT(t){const e=We(t);await ao(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function gg(t){return t.map(e=>{var{providerId:n}=e,r=Oc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function mT(t,e){const n=await fg(t,{},async()=>{const r=ns({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=hg(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",dg.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function _T(t,e){return xn(t,"POST","/v2/accounts:revokeToken",kn(t,e))}/**
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
 */class kr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):df(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){z(e.length!==0,"internal-error");const n=df(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await mT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new kr;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new kr,this.toJSON())}_performRefresh(){return Bt("not implemented")}}/**
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
 */function on(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Oc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Rl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Qs(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dT(this,e)}reload(){return pT(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ao(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ot(this.auth.app))return Promise.reject(Vt(this.auth));const e=await this.getIdToken();return await Qs(this,uT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,S=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:M,emailVerified:P,isAnonymous:G,providerData:U,stsTokenManager:Q}=n;z(M&&Q,e,"internal-error");const k=kr.fromJSON(this.name,Q);z(typeof M=="string",e,"internal-error"),on(d,e.name),on(f,e.name),z(typeof P=="boolean",e,"internal-error"),z(typeof G=="boolean",e,"internal-error"),on(p,e.name),on(g,e.name),on(_,e.name),on(v,e.name),on(I,e.name),on(S,e.name);const W=new jt({uid:M,auth:e,email:f,emailVerified:P,displayName:d,isAnonymous:G,photoURL:g,phoneNumber:p,tenantId:_,stsTokenManager:k,createdAt:I,lastLoginAt:S});return U&&Array.isArray(U)&&(W.providerData=U.map(V=>Object.assign({},V))),v&&(W._redirectEventId=v),W}static async _fromIdTokenResponse(e,n,r=!1){const s=new kr;s.updateFromServerResponse(n);const i=new jt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ao(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?gg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new kr;a.updateFromIdToken(r);const l=new jt({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Rl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
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
 */const ff=new Map;function Ht(t){Yt(t instanceof Function,"Expected a class definition");let e=ff.get(t);return e?(Yt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ff.set(t,e),e)}/**
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
 */class mg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}mg.type="NONE";const hf=mg;/**
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
 */function ji(t,e,n){return`firebase:${t}:${e}:${n}`}class xr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ji(this.userKey,s.apiKey,i),this.fullPersistenceKey=ji("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xr(Ht(hf),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Ht(hf);const o=ji(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=jt._fromJSON(e,u);c!==i&&(a=d),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new xr(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new xr(i,e,r))}}/**
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
 */function pf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_g(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Eg(e))return"Blackberry";if(Ig(e))return"Webos";if(vg(e))return"Safari";if((e.includes("chrome/")||yg(e))&&!e.includes("edge/"))return"Chrome";if(wg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _g(t=ze()){return/firefox\//i.test(t)}function vg(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yg(t=ze()){return/crios\//i.test(t)}function bg(t=ze()){return/iemobile/i.test(t)}function wg(t=ze()){return/android/i.test(t)}function Eg(t=ze()){return/blackberry/i.test(t)}function Ig(t=ze()){return/webos/i.test(t)}function Fc(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vT(t=ze()){var e;return Fc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yT(){return NI()&&document.documentMode===10}function Cg(t=ze()){return Fc(t)||wg(t)||Ig(t)||Eg(t)||/windows phone/i.test(t)||bg(t)}/**
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
 */function Tg(t,e=[]){let n;switch(t){case"Browser":n=pf(ze());break;case"Worker":n=`${pf(ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${rs}/${r}`}/**
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
 */class bT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function wT(t,e={}){return xn(t,"GET","/v2/passwordPolicy",kn(t,e))}/**
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
 */const ET=6;class IT{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ET,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class CT{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gf(this),this.idTokenSubscription=new gf(this),this.beforeStateQueue=new bT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ht(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await xr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await pg(this,{idToken:e}),r=await jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ot(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ao(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ot(this.app))return Promise.reject(Vt(this));const n=e?We(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ot(this.app)?Promise.reject(Vt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ot(this.app)?Promise.reject(Vt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ht(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wT(this),n=new IT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new li("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await _T(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ht(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await xr.create(this,[Ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&eT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function cr(t){return We(t)}class gf{constructor(e){this.auth=e,this.observer=null,this.addObserver=jI(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Yo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function TT(t){Yo=t}function Sg(t){return Yo.loadJS(t)}function ST(){return Yo.recaptchaEnterpriseScript}function RT(){return Yo.gapiScript}function AT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class PT{constructor(){this.enterprise=new kT}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class kT{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const xT="recaptcha-enterprise",Rg="NO_RECAPTCHA";class NT{constructor(e){this.type=xT,this.auth=cr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{cT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new lT(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;uf(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(Rg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new PT().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&uf(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=ST();l.length!==0&&(l+=a),Sg(l).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function ms(t,e,n,r=!1,s=!1){const i=new NT(t);let o;if(s)o=Rg;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Al(t,e,n,r,s){var i,o;if(s==="EMAIL_PASSWORD_PROVIDER")if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await ms(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await ms(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(a)});else if(s==="PHONE_PROVIDER")if(!((o=t._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await ms(t,e,n);return r(t,a).catch(async l=>{var c;if(((c=t._getRecaptchaConfig())===null||c===void 0?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const u=await ms(t,e,n,!1,!0);return r(t,u)}return Promise.reject(l)})}else{const a=await ms(t,e,n,!1,!0);return r(t,a)}else return Promise.reject(s+" provider is not supported.")}/**
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
 */function OT(t,e){const n=xc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(so(i,e??{}))return s;It(s,"already-initialized")}return n.initialize({options:e})}function MT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ht);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function DT(t,e,n){const r=cr(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Ag(e),{host:o,port:a}=LT(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||FT()}function Ag(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function LT(t){const e=Ag(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:mf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:mf(o)}}}function mf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function FT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Uc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Bt("not implemented")}_getIdTokenResponse(e){return Bt("not implemented")}_linkToIdToken(e,n){return Bt("not implemented")}_getReauthenticationResolver(e){return Bt("not implemented")}}async function UT(t,e){return xn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function $T(t,e){return ui(t,"POST","/v1/accounts:signInWithPassword",kn(t,e))}/**
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
 */async function BT(t,e){return ui(t,"POST","/v1/accounts:signInWithEmailLink",kn(t,e))}async function jT(t,e){return ui(t,"POST","/v1/accounts:signInWithEmailLink",kn(t,e))}/**
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
 */class Js extends Uc{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Js(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Js(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Al(e,n,"signInWithPassword",$T,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return BT(e,{email:this._email,oobCode:this._password});default:It(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Al(e,r,"signUpPassword",UT,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return jT(e,{idToken:n,email:this._email,oobCode:this._password});default:It(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Nr(t,e){return ui(t,"POST","/v1/accounts:signInWithIdp",kn(t,e))}/**
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
 */const HT="http://localhost";class tr extends Uc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):It("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Oc(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new tr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Nr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Nr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Nr(e,n)}buildRequest(){const e={requestUri:HT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ns(n)}return e}}/**
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
 */function WT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function VT(t){const e=Cs(Ts(t)).link,n=e?Cs(Ts(e)).deep_link_id:null,r=Cs(Ts(t)).deep_link_id;return(r?Cs(Ts(r)).link:null)||r||n||e||t}class $c{constructor(e){var n,r,s,i,o,a;const l=Cs(Ts(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,d=WT((s=l.mode)!==null&&s!==void 0?s:null);z(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=VT(e);try{return new $c(n)}catch{return null}}}/**
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
 */class ss{constructor(){this.providerId=ss.PROVIDER_ID}static credential(e,n){return Js._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=$c.parseLink(n);return z(r,"argument-error"),Js._fromEmailAndCode(e,r.code,r.tenantId)}}ss.PROVIDER_ID="password";ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Pg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class di extends Pg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class cn extends di{constructor(){super("facebook.com")}static credential(e){return tr._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cn.credential(e.oauthAccessToken)}catch{return null}}}cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";cn.PROVIDER_ID="facebook.com";/**
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
 */class un extends di{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return tr._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return un.credential(n,r)}catch{return null}}}un.GOOGLE_SIGN_IN_METHOD="google.com";un.PROVIDER_ID="google.com";/**
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
 */class dn extends di{constructor(){super("github.com")}static credential(e){return tr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.GITHUB_SIGN_IN_METHOD="github.com";dn.PROVIDER_ID="github.com";/**
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
 */class fn extends di{constructor(){super("twitter.com")}static credential(e,n){return tr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return fn.credential(n,r)}catch{return null}}}fn.TWITTER_SIGN_IN_METHOD="twitter.com";fn.PROVIDER_ID="twitter.com";/**
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
 */async function KT(t,e){return ui(t,"POST","/v1/accounts:signUp",kn(t,e))}/**
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
 */class nr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await jt._fromIdTokenResponse(e,r,s),o=_f(r);return new nr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=_f(r);return new nr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function _f(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class lo extends Pn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,lo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new lo(e,n,r,s)}}function kg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?lo._fromErrorAndOperation(t,i,e,r):i})}async function zT(t,e,n=!1){const r=await Qs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return nr._forOperation(t,"link",r)}/**
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
 */async function qT(t,e,n=!1){const{auth:r}=t;if(ot(r.app))return Promise.reject(Vt(r));const s="reauthenticate";try{const i=await Qs(t,kg(r,s,e,t),n);z(i.idToken,r,"internal-error");const o=Lc(i.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(t.uid===a,r,"user-mismatch"),nr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&It(r,"user-mismatch"),i}}/**
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
 */async function xg(t,e,n=!1){if(ot(t.app))return Promise.reject(Vt(t));const r="signIn",s=await kg(t,r,e),i=await nr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function GT(t,e){return xg(cr(t),e)}/**
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
 */async function Ng(t){const e=cr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function YT(t,e,n){if(ot(t.app))return Promise.reject(Vt(t));const r=cr(t),o=await Al(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",KT,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Ng(t),l}),a=await nr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function QT(t,e,n){return ot(t.app)?Promise.reject(Vt(t)):GT(We(t),ss.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ng(t),r})}function JT(t,e,n,r){return We(t).onIdTokenChanged(e,n,r)}function XT(t,e,n){return We(t).beforeAuthStateChanged(e,n)}function Nx(t){return We(t).signOut()}const co="__sak";/**
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
 */class Og{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(co,"1"),this.storage.removeItem(co),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ZT=1e3,eS=10;class Mg extends Og{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Cg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);yT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,eS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ZT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mg.type="LOCAL";const tS=Mg;/**
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
 */class Dg extends Og{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Dg.type="SESSION";const Lg=Dg;/**
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
 */function nS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Qo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Qo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await nS(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qo.receivers=[];/**
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
 */function Bc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class rS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Bc("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Nt(){return window}function sS(t){Nt().location.href=t}/**
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
 */function Fg(){return typeof Nt().WorkerGlobalScope<"u"&&typeof Nt().importScripts=="function"}async function iS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function aS(){return Fg()?self:null}/**
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
 */const Ug="firebaseLocalStorageDb",lS=1,uo="firebaseLocalStorage",$g="fbase_key";class fi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jo(t,e){return t.transaction([uo],e?"readwrite":"readonly").objectStore(uo)}function cS(){const t=indexedDB.deleteDatabase(Ug);return new fi(t).toPromise()}function Pl(){const t=indexedDB.open(Ug,lS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(uo,{keyPath:$g})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(uo)?e(r):(r.close(),await cS(),e(await Pl()))})})}async function vf(t,e,n){const r=Jo(t,!0).put({[$g]:e,value:n});return new fi(r).toPromise()}async function uS(t,e){const n=Jo(t,!1).get(e),r=await new fi(n).toPromise();return r===void 0?null:r.value}function yf(t,e){const n=Jo(t,!0).delete(e);return new fi(n).toPromise()}const dS=800,fS=3;class Bg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>fS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qo._getInstance(aS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await iS(),!this.activeServiceWorker)return;this.sender=new rS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pl();return await vf(e,co,"1"),await yf(e,co),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>uS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Jo(s,!1).getAll();return new fi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bg.type="LOCAL";const hS=Bg;new ci(3e4,6e4);/**
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
 */function pS(t,e){return e?Ht(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class jc extends Uc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Nr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Nr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Nr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gS(t){return xg(t.auth,new jc(t),t.bypassAuthState)}function mS(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),qT(n,new jc(t),t.bypassAuthState)}async function _S(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),zT(n,new jc(t),t.bypassAuthState)}/**
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
 */class jg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gS;case"linkViaPopup":case"linkViaRedirect":return _S;case"reauthViaPopup":case"reauthViaRedirect":return mS;default:It(this.auth,"internal-error")}}resolve(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const vS=new ci(2e3,1e4);class wr extends jg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,wr.currentPopupAction&&wr.currentPopupAction.cancel(),wr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const e=Bc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vS.get())};e()}}wr.currentPopupAction=null;/**
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
 */const yS="pendingRedirect",Hi=new Map;class bS extends jg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Hi.get(this.auth._key());if(!e){try{const r=await wS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Hi.set(this.auth._key(),e)}return this.bypassAuthState||Hi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wS(t,e){const n=CS(e),r=IS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ES(t,e){Hi.set(t._key(),e)}function IS(t){return Ht(t._redirectPersistence)}function CS(t){return ji(yS,t.config.apiKey,t.name)}async function TS(t,e,n=!1){if(ot(t.app))return Promise.reject(Vt(t));const r=cr(t),s=pS(r,e),o=await new bS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const SS=10*60*1e3;class RS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!AS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Hg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(xt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SS&&this.cachedEventUids.clear(),this.cachedEventUids.has(bf(e))}saveEventToCache(e){this.cachedEventUids.add(bf(e)),this.lastProcessedEventTime=Date.now()}}function bf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Hg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function AS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hg(t);default:return!1}}/**
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
 */async function PS(t,e={}){return xn(t,"GET","/v1/projects",e)}/**
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
 */const kS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xS=/^https?/;async function NS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await PS(t);for(const n of e)try{if(OS(n))return}catch{}It(t,"unauthorized-domain")}function OS(t){const e=Sl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!xS.test(n))return!1;if(kS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const MS=new ci(3e4,6e4);function wf(){const t=Nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function DS(t){return new Promise((e,n)=>{var r,s,i;function o(){wf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wf(),n(xt(t,"network-request-failed"))},timeout:MS.get()})}if(!((s=(r=Nt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Nt().gapi)===null||i===void 0)&&i.load)o();else{const a=AT("iframefcb");return Nt()[a]=()=>{gapi.load?o():n(xt(t,"network-request-failed"))},Sg(`${RT()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Wi=null,e})}let Wi=null;function LS(t){return Wi=Wi||DS(t),Wi}/**
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
 */const FS=new ci(5e3,15e3),US="__/auth/iframe",$S="emulator/auth/iframe",BS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HS(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dc(e,$S):`https://${t.config.authDomain}/${US}`,r={apiKey:e.apiKey,appName:t.name,v:rs},s=jS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ns(r).slice(1)}`}async function WS(t){const e=await LS(t),n=Nt().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:HS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=xt(t,"network-request-failed"),a=Nt().setTimeout(()=>{i(o)},FS.get());function l(){Nt().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const VS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KS=500,zS=600,qS="_blank",GS="http://localhost";class Ef{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YS(t,e,n,r=KS,s=zS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},VS),{width:r.toString(),height:s.toString(),top:i,left:o}),c=ze().toLowerCase();n&&(a=yg(c)?qS:n),_g(c)&&(e=e||GS,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[p,g])=>`${f}${p}=${g},`,"");if(vT(c)&&a!=="_self")return QS(e||"",a),new Ef(null);const d=window.open(e||"",a,u);z(d,t,"popup-blocked");try{d.focus()}catch{}return new Ef(d)}function QS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const JS="__/auth/handler",XS="emulator/auth/handler",ZS=encodeURIComponent("fac");async function If(t,e,n,r,s,i){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:rs,eventId:s};if(e instanceof Pg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",bl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(i||{}))o[u]=d}if(e instanceof di){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${ZS}=${encodeURIComponent(l)}`:"";return`${e0(t)}?${ns(a).slice(1)}${c}`}function e0({config:t}){return t.emulator?Dc(t,XS):`https://${t.authDomain}/${JS}`}/**
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
 */const Oa="webStorageSupport";class t0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lg,this._completeRedirectFn=TS,this._overrideRedirectResult=ES}async _openPopup(e,n,r,s){var i;Yt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await If(e,n,r,Sl(),s);return YS(e,o,Bc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await If(e,n,r,Sl(),s);return sS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Yt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await WS(e),r=new RS(e);return n.register("authEvent",s=>(z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Oa,{type:Oa},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Oa];o!==void 0&&n(!!o),It(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=NS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Cg()||vg()||Fc()}}const n0=t0;var Cf="@firebase/auth",Tf="1.9.0";/**
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
 */class r0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function s0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function i0(t){Wr(new er("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tg(t)},c=new CT(r,s,i,l);return MT(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Wr(new er("auth-internal",e=>{const n=cr(e.getProvider("auth").getImmediate());return(r=>new r0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(Cf,Tf,s0(t)),_n(Cf,Tf,"esm2017")}/**
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
 */const o0=5*60,a0=Zp("authIdTokenMaxAge")||o0;let Sf=null;const l0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>a0)return;const s=n==null?void 0:n.token;Sf!==s&&(Sf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Wg(t=ig()){const e=xc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=OT(t,{popupRedirectResolver:n0,persistence:[hS,tS,Lg]}),r=Zp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=l0(i.toString());XT(n,o,()=>o(n.currentUser)),JT(n,a=>o(a))}}const s=Jp("auth");return s&&DT(n,`http://${s}`),n}function c0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}TT({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=xt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",c0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});i0("Browser");const u0={},d0={class:"relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 shadow-lg lg:py-4 dark:bg-sky-950","data-te-navbar-ref":""};function f0(t,e){return Et(),Rn("nav",d0,[Lo(t.$slots,"default")])}const Vg=An(u0,[["render",f0]]);function Xo(t,e,...n){if(t in e){let s=e[t];return typeof s=="function"?s(...n):s}let r=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(s=>`"${s}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Xo),r}var kl=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(kl||{}),h0=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(h0||{});function is({visible:t=!0,features:e=0,ourProps:n,theirProps:r,...s}){var i;let o=zg(r,n),a=Object.assign(s,{props:o});if(t||e&2&&o.static)return Ma(a);if(e&1){let l=(i=o.unmount)==null||i?0:1;return Xo(l,{0(){return null},1(){return Ma({...s,props:{...o,hidden:!0,style:{display:"none"}}})}})}return Ma(a)}function Ma({props:t,attrs:e,slots:n,slot:r,name:s}){var i,o;let{as:a,...l}=qg(t,["unmount","static"]),c=(i=n.default)==null?void 0:i.call(n,r),u={};if(r){let d=!1,f=[];for(let[p,g]of Object.entries(r))typeof g=="boolean"&&(d=!0),g===!0&&f.push(p);d&&(u["data-headlessui-state"]=f.join(" "))}if(a==="template"){if(c=Kg(c??[]),Object.keys(l).length>0||Object.keys(e).length>0){let[d,...f]=c??[];if(!g0(d)||f.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${s} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(e)).map(_=>_.trim()).filter((_,v,I)=>I.indexOf(_)===v).sort((_,v)=>_.localeCompare(v)).map(_=>`  - ${_}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(_=>`  - ${_}`).join(`
`)].join(`
`));let p=zg((o=d.props)!=null?o:{},l),g=qt(d,p);for(let _ in p)_.startsWith("on")&&(g.props||(g.props={}),g.props[_]=p[_]);return g}return Array.isArray(c)&&c.length===1?c[0]:c}return wn(a,Object.assign({},l,u),{default:()=>c})}function Kg(t){return t.flatMap(e=>e.type===$e?Kg(e.children):[e])}function zg(...t){if(t.length===0)return{};if(t.length===1)return t[0];let e={},n={};for(let r of t)for(let s in r)s.startsWith("on")&&typeof r[s]=="function"?(n[s]!=null||(n[s]=[]),n[s].push(r[s])):e[s]=r[s];if(e.disabled||e["aria-disabled"])return Object.assign(e,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(e,{[r](s,...i){let o=n[r];for(let a of o){if(s instanceof Event&&s.defaultPrevented)return;a(s,...i)}}});return e}function p0(t){let e=Object.assign({},t);for(let n in e)e[n]===void 0&&delete e[n];return e}function qg(t,e=[]){let n=Object.assign({},t);for(let r of e)r in n&&delete n[r];return n}function g0(t){return t==null?!1:typeof t.type=="string"||typeof t.type=="object"||typeof t.type=="function"}let m0=0;function _0(){return++m0}function Zo(){return _0()}var ke=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(ke||{});function v0(t){throw new Error("Unexpected object: "+t)}var st=(t=>(t[t.First=0]="First",t[t.Previous=1]="Previous",t[t.Next=2]="Next",t[t.Last=3]="Last",t[t.Specific=4]="Specific",t[t.Nothing=5]="Nothing",t))(st||{});function y0(t,e){let n=e.resolveItems();if(n.length<=0)return null;let r=e.resolveActiveIndex(),s=r??-1,i=(()=>{switch(t.focus){case 0:return n.findIndex(o=>!e.resolveDisabled(o));case 1:{let o=n.slice().reverse().findIndex((a,l,c)=>s!==-1&&c.length-l-1>=s?!1:!e.resolveDisabled(a));return o===-1?o:n.length-1-o}case 2:return n.findIndex((o,a)=>a<=s?!1:!e.resolveDisabled(o));case 3:{let o=n.slice().reverse().findIndex(a=>!e.resolveDisabled(a));return o===-1?o:n.length-1-o}case 4:return n.findIndex(o=>e.resolveId(o)===t.id);case 5:return null;default:v0(t)}})();return i===-1?r:i}function Te(t){var e;return t==null||t.value==null?null:(e=t.value.$el)!=null?e:t.value}let Gg=Symbol("Context");var Xs=(t=>(t[t.Open=1]="Open",t[t.Closed=2]="Closed",t[t.Closing=4]="Closing",t[t.Opening=8]="Opening",t))(Xs||{});function b0(){return Qe(Gg,null)}function w0(t){Ar(Gg,t)}function Rf(t,e){if(t)return t;let n=e??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function Yg(t,e){let n=re(Rf(t.value.type,t.value.as));return ar(()=>{n.value=Rf(t.value.type,t.value.as)}),Zr(()=>{var r;n.value||Te(e)&&Te(e)instanceof HTMLButtonElement&&!((r=Te(e))!=null&&r.hasAttribute("type"))&&(n.value="button")}),n}var E0=Object.defineProperty,I0=(t,e,n)=>e in t?E0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Af=(t,e,n)=>(I0(t,typeof e!="symbol"?e+"":e,n),n);class C0{constructor(){Af(this,"current",this.detect()),Af(this,"currentId",0)}set(e){this.current!==e&&(this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let Hc=new C0;function Wc(t){if(Hc.isServer)return null;if(t instanceof Node)return t.ownerDocument;if(t!=null&&t.hasOwnProperty("value")){let e=Te(t);if(e)return e.ownerDocument}return document}function T0({container:t,accept:e,walk:n,enabled:r}){Zr(()=>{let s=t.value;if(!s||r!==void 0&&!r.value)return;let i=Wc(t);if(!i)return;let o=Object.assign(l=>e(l),{acceptNode:e}),a=i.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,o,!1);for(;a.nextNode();)n(a.currentNode)})}let xl=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var Nl=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t))(Nl||{}),S0=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(S0||{}),R0=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(R0||{});function Qg(t=document.body){return t==null?[]:Array.from(t.querySelectorAll(xl)).sort((e,n)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Vc=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(Vc||{});function Kc(t,e=0){var n;return t===((n=Wc(t))==null?void 0:n.body)?!1:Xo(e,{0(){return t.matches(xl)},1(){let r=t;for(;r!==null;){if(r.matches(xl))return!0;r=r.parentElement}return!1}})}function Jg(t){let e=Wc(t);bt(()=>{e&&!Kc(e.activeElement,0)&&P0(t)})}var A0=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(A0||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",t=>{t.metaKey||t.altKey||t.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",t=>{t.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:t.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function P0(t){t==null||t.focus({preventScroll:!0})}let k0=["textarea","input"].join(",");function x0(t){var e,n;return(n=(e=t==null?void 0:t.matches)==null?void 0:e.call(t,k0))!=null?n:!1}function Xg(t,e=n=>n){return t.slice().sort((n,r)=>{let s=e(n),i=e(r);if(s===null||i===null)return 0;let o=s.compareDocumentPosition(i);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function N0(t,e){return O0(Qg(),e,{relativeTo:t})}function O0(t,e,{sorted:n=!0,relativeTo:r=null,skipElements:s=[]}={}){var i;let o=(i=Array.isArray(t)?t.length>0?t[0].ownerDocument:document:t==null?void 0:t.ownerDocument)!=null?i:document,a=Array.isArray(t)?n?Xg(t):t:Qg(t);s.length>0&&a.length>1&&(a=a.filter(g=>!s.includes(g))),r=r??o.activeElement;let l=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,a.indexOf(r))-1;if(e&4)return Math.max(0,a.indexOf(r))+1;if(e&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=e&32?{preventScroll:!0}:{},d=0,f=a.length,p;do{if(d>=f||d+f<=0)return 0;let g=c+d;if(e&16)g=(g+f)%f;else{if(g<0)return 3;if(g>=f)return 1}p=a[g],p==null||p.focus(u),d+=l}while(p!==o.activeElement);return e&6&&x0(p)&&p.select(),2}function Pi(t,e,n){Hc.isServer||Zr(r=>{document.addEventListener(t,e,n),r(()=>document.removeEventListener(t,e,n))})}function M0(t,e,n){Hc.isServer||Zr(r=>{window.addEventListener(t,e,n),r(()=>window.removeEventListener(t,e,n))})}function D0(t,e,n=ae(()=>!0)){function r(i,o){if(!n.value||i.defaultPrevented)return;let a=o(i);if(a===null||!a.getRootNode().contains(a))return;let l=function c(u){return typeof u=="function"?c(u()):Array.isArray(u)||u instanceof Set?u:[u]}(t);for(let c of l){if(c===null)continue;let u=c instanceof HTMLElement?c:Te(c);if(u!=null&&u.contains(a)||i.composed&&i.composedPath().includes(u))return}return!Kc(a,Vc.Loose)&&a.tabIndex!==-1&&i.preventDefault(),e(i,a)}let s=re(null);Pi("pointerdown",i=>{var o,a;n.value&&(s.value=((a=(o=i.composedPath)==null?void 0:o.call(i))==null?void 0:a[0])||i.target)},!0),Pi("mousedown",i=>{var o,a;n.value&&(s.value=((a=(o=i.composedPath)==null?void 0:o.call(i))==null?void 0:a[0])||i.target)},!0),Pi("click",i=>{s.value&&(r(i,()=>s.value),s.value=null)},!0),Pi("touchend",i=>r(i,()=>i.target instanceof HTMLElement?i.target:null),!0),M0("blur",i=>r(i,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var Zg=(t=>(t[t.None=1]="None",t[t.Focusable=2]="Focusable",t[t.Hidden=4]="Hidden",t))(Zg||{});let L0=Jt({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(t,{slots:e,attrs:n}){return()=>{let{features:r,...s}=t,i={"aria-hidden":(r&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return is({ourProps:i,theirProps:s,slot:{},attrs:n,slots:e,name:"Hidden"})}}});function F0(t){var e,n;let r=(e=t==null?void 0:t.form)!=null?e:t.closest("form");if(r){for(let s of r.elements)if(s!==t&&(s.tagName==="INPUT"&&s.type==="submit"||s.tagName==="BUTTON"&&s.type==="submit"||s.nodeName==="INPUT"&&s.type==="image")){s.click();return}(n=r.requestSubmit)==null||n.call(r)}}function U0(t,e,n){let r=re(n==null?void 0:n.value),s=ae(()=>t.value!==void 0);return[ae(()=>s.value?t.value:r.value),function(i){return s.value||(r.value=i),e==null?void 0:e(i)}]}function Pf(t){return[t.screenX,t.screenY]}function $0(){let t=re([-1,-1]);return{wasMoved(e){let n=Pf(e);return t.value[0]===n[0]&&t.value[1]===n[1]?!1:(t.value=n,!0)},update(e){t.value=Pf(e)}}}let kf=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function xf(t){var e,n;let r=(e=t.innerText)!=null?e:"",s=t.cloneNode(!0);if(!(s instanceof HTMLElement))return r;let i=!1;for(let a of s.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))a.remove(),i=!0;let o=i?(n=s.innerText)!=null?n:"":r;return kf.test(o)&&(o=o.replace(kf,"")),o}function B0(t){let e=t.getAttribute("aria-label");if(typeof e=="string")return e.trim();let n=t.getAttribute("aria-labelledby");if(n){let r=n.split(" ").map(s=>{let i=document.getElementById(s);if(i){let o=i.getAttribute("aria-label");return typeof o=="string"?o.trim():xf(i).trim()}return null}).filter(Boolean);if(r.length>0)return r.join(", ")}return xf(t).trim()}function j0(t){let e=re(""),n=re("");return()=>{let r=Te(t);if(!r)return"";let s=r.innerText;if(e.value===s)return n.value;let i=B0(r).trim().toLowerCase();return e.value=s,n.value=i,i}}var H0=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(H0||{}),W0=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(W0||{});function V0(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let em=Symbol("MenuContext");function ea(t){let e=Qe(em,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ea),n}return e}let K0=Jt({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:e,attrs:n}){let r=re(1),s=re(null),i=re(null),o=re([]),a=re(""),l=re(null),c=re(1);function u(f=p=>p){let p=l.value!==null?o.value[l.value]:null,g=Xg(f(o.value.slice()),v=>Te(v.dataRef.domRef)),_=p?g.indexOf(p):null;return _===-1&&(_=null),{items:g,activeItemIndex:_}}let d={menuState:r,buttonRef:s,itemsRef:i,items:o,searchQuery:a,activeItemIndex:l,activationTrigger:c,closeMenu:()=>{r.value=1,l.value=null},openMenu:()=>r.value=0,goToItem(f,p,g){let _=u(),v=y0(f===st.Specific?{focus:st.Specific,id:p}:{focus:f},{resolveItems:()=>_.items,resolveActiveIndex:()=>_.activeItemIndex,resolveId:I=>I.id,resolveDisabled:I=>I.dataRef.disabled});a.value="",l.value=v,c.value=g??1,o.value=_.items},search(f){let p=a.value!==""?0:1;a.value+=f.toLowerCase();let g=(l.value!==null?o.value.slice(l.value+p).concat(o.value.slice(0,l.value+p)):o.value).find(v=>v.dataRef.textValue.startsWith(a.value)&&!v.dataRef.disabled),_=g?o.value.indexOf(g):-1;_===-1||_===l.value||(l.value=_,c.value=1)},clearSearch(){a.value=""},registerItem(f,p){let g=u(_=>[..._,{id:f,dataRef:p}]);o.value=g.items,l.value=g.activeItemIndex,c.value=1},unregisterItem(f){let p=u(g=>{let _=g.findIndex(v=>v.id===f);return _!==-1&&g.splice(_,1),g});o.value=p.items,l.value=p.activeItemIndex,c.value=1}};return D0([s,i],(f,p)=>{var g;d.closeMenu(),Kc(p,Vc.Loose)||(f.preventDefault(),(g=Te(s))==null||g.focus())},ae(()=>r.value===0)),Ar(em,d),w0(ae(()=>Xo(r.value,{0:Xs.Open,1:Xs.Closed}))),()=>{let f={open:r.value===0,close:d.closeMenu};return is({ourProps:{},theirProps:t,slot:f,slots:e,attrs:n,name:"Menu"})}}}),z0=Jt({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${Zo()}`}},setup(t,{attrs:e,slots:n,expose:r}){let s=ea("MenuButton");r({el:s.buttonRef,$el:s.buttonRef});function i(c){switch(c.key){case ke.Space:case ke.Enter:case ke.ArrowDown:c.preventDefault(),c.stopPropagation(),s.openMenu(),bt(()=>{var u;(u=Te(s.itemsRef))==null||u.focus({preventScroll:!0}),s.goToItem(st.First)});break;case ke.ArrowUp:c.preventDefault(),c.stopPropagation(),s.openMenu(),bt(()=>{var u;(u=Te(s.itemsRef))==null||u.focus({preventScroll:!0}),s.goToItem(st.Last)});break}}function o(c){switch(c.key){case ke.Space:c.preventDefault();break}}function a(c){t.disabled||(s.menuState.value===0?(s.closeMenu(),bt(()=>{var u;return(u=Te(s.buttonRef))==null?void 0:u.focus({preventScroll:!0})})):(c.preventDefault(),s.openMenu(),V0(()=>{var u;return(u=Te(s.itemsRef))==null?void 0:u.focus({preventScroll:!0})})))}let l=Yg(ae(()=>({as:t.as,type:e.type})),s.buttonRef);return()=>{var c;let u={open:s.menuState.value===0},{id:d,...f}=t,p={ref:s.buttonRef,id:d,type:l.value,"aria-haspopup":"menu","aria-controls":(c=Te(s.itemsRef))==null?void 0:c.id,"aria-expanded":s.menuState.value===0,onKeydown:i,onKeyup:o,onClick:a};return is({ourProps:p,theirProps:f,slot:u,attrs:e,slots:n,name:"MenuButton"})}}}),q0=Jt({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${Zo()}`}},setup(t,{attrs:e,slots:n,expose:r}){let s=ea("MenuItems"),i=re(null);r({el:s.itemsRef,$el:s.itemsRef}),T0({container:ae(()=>Te(s.itemsRef)),enabled:ae(()=>s.menuState.value===0),accept(u){return u.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:u.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(u){u.setAttribute("role","none")}});function o(u){var d;switch(i.value&&clearTimeout(i.value),u.key){case ke.Space:if(s.searchQuery.value!=="")return u.preventDefault(),u.stopPropagation(),s.search(u.key);case ke.Enter:if(u.preventDefault(),u.stopPropagation(),s.activeItemIndex.value!==null){let f=s.items.value[s.activeItemIndex.value];(d=Te(f.dataRef.domRef))==null||d.click()}s.closeMenu(),Jg(Te(s.buttonRef));break;case ke.ArrowDown:return u.preventDefault(),u.stopPropagation(),s.goToItem(st.Next);case ke.ArrowUp:return u.preventDefault(),u.stopPropagation(),s.goToItem(st.Previous);case ke.Home:case ke.PageUp:return u.preventDefault(),u.stopPropagation(),s.goToItem(st.First);case ke.End:case ke.PageDown:return u.preventDefault(),u.stopPropagation(),s.goToItem(st.Last);case ke.Escape:u.preventDefault(),u.stopPropagation(),s.closeMenu(),bt(()=>{var f;return(f=Te(s.buttonRef))==null?void 0:f.focus({preventScroll:!0})});break;case ke.Tab:u.preventDefault(),u.stopPropagation(),s.closeMenu(),bt(()=>N0(Te(s.buttonRef),u.shiftKey?Nl.Previous:Nl.Next));break;default:u.key.length===1&&(s.search(u.key),i.value=setTimeout(()=>s.clearSearch(),350));break}}function a(u){switch(u.key){case ke.Space:u.preventDefault();break}}let l=b0(),c=ae(()=>l!==null?(l.value&Xs.Open)===Xs.Open:s.menuState.value===0);return()=>{var u,d;let f={open:s.menuState.value===0},{id:p,...g}=t,_={"aria-activedescendant":s.activeItemIndex.value===null||(u=s.items.value[s.activeItemIndex.value])==null?void 0:u.id,"aria-labelledby":(d=Te(s.buttonRef))==null?void 0:d.id,id:p,onKeydown:o,onKeyup:a,role:"menu",tabIndex:0,ref:s.itemsRef};return is({ourProps:_,theirProps:g,slot:f,attrs:e,slots:n,features:kl.RenderStrategy|kl.Static,visible:c.value,name:"MenuItems"})}}}),G0=Jt({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${Zo()}`}},setup(t,{slots:e,attrs:n,expose:r}){let s=ea("MenuItem"),i=re(null);r({el:i,$el:i});let o=ae(()=>s.activeItemIndex.value!==null?s.items.value[s.activeItemIndex.value].id===t.id:!1),a=j0(i),l=ae(()=>({disabled:t.disabled,get textValue(){return a()},domRef:i}));ar(()=>s.registerItem(t.id,l)),uc(()=>s.unregisterItem(t.id)),Zr(()=>{s.menuState.value===0&&o.value&&s.activationTrigger.value!==0&&bt(()=>{var _,v;return(v=(_=Te(i))==null?void 0:_.scrollIntoView)==null?void 0:v.call(_,{block:"nearest"})})});function c(_){if(t.disabled)return _.preventDefault();s.closeMenu(),Jg(Te(s.buttonRef))}function u(){if(t.disabled)return s.goToItem(st.Nothing);s.goToItem(st.Specific,t.id)}let d=$0();function f(_){d.update(_)}function p(_){d.wasMoved(_)&&(t.disabled||o.value||s.goToItem(st.Specific,t.id,0))}function g(_){d.wasMoved(_)&&(t.disabled||o.value&&s.goToItem(st.Nothing))}return()=>{let{disabled:_}=t,v={active:o.value,disabled:_,close:s.closeMenu},{id:I,...S}=t;return is({ourProps:{id:I,ref:i,role:"menuitem",tabIndex:_===!0?void 0:-1,"aria-disabled":_===!0?!0:void 0,disabled:void 0,onClick:c,onFocus:u,onPointerenter:f,onMouseenter:f,onPointermove:p,onMousemove:p,onPointerleave:g,onMouseleave:g},theirProps:{...n,...S},slot:v,attrs:n,slots:e,name:"MenuItem"})}}}),Y0=Symbol("GroupContext"),Q0=Jt({name:"Switch",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:()=>`headlessui-switch-${Zo()}`}},inheritAttrs:!1,setup(t,{emit:e,attrs:n,slots:r,expose:s}){let i=Qe(Y0,null),[o,a]=U0(ae(()=>t.modelValue),v=>e("update:modelValue",v),ae(()=>t.defaultChecked));function l(){a(!o.value)}let c=re(null),u=i===null?c:i.switchRef,d=Yg(ae(()=>({as:t.as,type:n.type})),u);s({el:u,$el:u});function f(v){v.preventDefault(),l()}function p(v){v.key===ke.Space?(v.preventDefault(),l()):v.key===ke.Enter&&F0(v.currentTarget)}function g(v){v.preventDefault()}let _=ae(()=>{var v,I;return(I=(v=Te(u))==null?void 0:v.closest)==null?void 0:I.call(v,"form")});return ar(()=>{kt([_],()=>{if(!_.value||t.defaultChecked===void 0)return;function v(){a(t.defaultChecked)}return _.value.addEventListener("reset",v),()=>{var I;(I=_.value)==null||I.removeEventListener("reset",v)}},{immediate:!0})}),()=>{let{id:v,name:I,value:S,form:M,...P}=t,G={checked:o.value},U={id:v,ref:u,role:"switch",type:d.value,tabIndex:0,"aria-checked":o.value,"aria-labelledby":i==null?void 0:i.labelledby.value,"aria-describedby":i==null?void 0:i.describedby.value,onClick:f,onKeyup:p,onKeypress:g};return wn($e,[I!=null&&o.value!=null?wn(L0,p0({features:Zg.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:o.value,form:M,name:I,value:S})):null,is({ourProps:U,theirProps:{...n,...qg(P,["modelValue","defaultChecked"])},slot:G,attrs:n,slots:r,name:"Switch"})])}}});function tm(t){return Ch()?(Z_(t),!0):!1}function Vr(t){return typeof t=="function"?t():Sr(t)}const J0=typeof window<"u"&&typeof document<"u",X0=Object.prototype.toString,Z0=t=>X0.call(t)==="[object Object]",nm=()=>{};function eR(t,e){function n(...r){return new Promise((s,i)=>{Promise.resolve(t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})).then(s).catch(i)})}return n}const rm=t=>t();function tR(t=rm){const e=re(!0);function n(){e.value=!1}function r(){e.value=!0}const s=(...i)=>{e.value&&t(...i)};return{isActive:ko(e),pause:n,resume:r,eventFilter:s}}function nR(...t){if(t.length!==1)return Mv(...t);const e=t[0];return typeof e=="function"?ko(xv(()=>({get:e,set:nm}))):re(e)}function rR(t,e,n={}){const{eventFilter:r=rm,...s}=n;return kt(t,eR(r,e),s)}function sR(t,e,n={}){const{eventFilter:r,...s}=n,{eventFilter:i,pause:o,resume:a,isActive:l}=tR(r);return{stop:rR(t,e,{...s,eventFilter:i}),pause:o,resume:a,isActive:l}}function iR(t,e=!0){gc()?ar(t):e?t():bt(t)}function oR(t=!1,e={}){const{truthyValue:n=!0,falsyValue:r=!1}=e,s=Oe(t),i=re(t);function o(a){if(arguments.length)return i.value=a,i.value;{const l=Vr(n);return i.value=i.value===l?Vr(r):l,i.value}}return s?o:[i,o]}function sm(t){var e;const n=Vr(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Zs=J0?window:void 0;function Nf(...t){let e,n,r,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,s]=t,e=Zs):[e,n,r,s]=t,!e)return nm;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(u=>u()),i.length=0},a=(u,d,f,p)=>(u.addEventListener(d,f,p),()=>u.removeEventListener(d,f,p)),l=kt(()=>[sm(e),Vr(s)],([u,d])=>{if(o(),!u)return;const f=Z0(d)?{...d}:d;i.push(...n.flatMap(p=>r.map(g=>a(u,p,g,f))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return tm(c),c}function aR(){const t=re(!1);return gc()&&ar(()=>{t.value=!0}),t}function lR(t){const e=aR();return ae(()=>(e.value,!!t()))}function cR(t,e={}){const{window:n=Zs}=e,r=lR(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let s;const i=re(!1),o=c=>{i.value=c.matches},a=()=>{s&&("removeEventListener"in s?s.removeEventListener("change",o):s.removeListener(o))},l=Zr(()=>{r.value&&(a(),s=n.matchMedia(Vr(t)),"addEventListener"in s?s.addEventListener("change",o):s.addListener(o),i.value=s.matches)});return tm(()=>{l(),a(),s=void 0}),i}const ki=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xi="__vueuse_ssr_handlers__",uR=dR();function dR(){return xi in ki||(ki[xi]=ki[xi]||{}),ki[xi]}function im(t,e){return uR[t]||e}function fR(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const hR={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},Of="vueuse-storage";function pR(t,e,n,r={}){var s;const{flush:i="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:d=Zs,eventFilter:f,onError:p=k=>{console.error(k)}}=r,g=(u?Fh:re)(e);if(!n)try{n=im("getDefaultStorage",()=>{var k;return(k=Zs)==null?void 0:k.localStorage})()}catch(k){p(k)}if(!n)return g;const _=Vr(e),v=fR(_),I=(s=r.serializer)!=null?s:hR[v],{pause:S,resume:M}=sR(g,()=>P(g.value),{flush:i,deep:o,eventFilter:f});return d&&a&&(Nf(d,"storage",Q),Nf(d,Of,U)),Q(),g;function P(k){try{if(k==null)n.removeItem(t);else{const W=I.write(k),V=n.getItem(t);V!==W&&(n.setItem(t,W),d&&d.dispatchEvent(new CustomEvent(Of,{detail:{key:t,oldValue:V,newValue:W,storageArea:n}})))}}catch(W){p(W)}}function G(k){const W=k?k.newValue:n.getItem(t);if(W==null)return l&&_!==null&&n.setItem(t,I.write(_)),_;if(!k&&c){const V=I.read(W);return typeof c=="function"?c(V,_):v==="object"&&!Array.isArray(V)?{..._,...V}:V}else return typeof W!="string"?W:I.read(W)}function U(k){Q(k.detail)}function Q(k){if(!(k&&k.storageArea!==n)){if(k&&k.key==null){g.value=_;return}if(!(k&&k.key!==t)){S();try{(k==null?void 0:k.newValue)!==I.write(g.value)&&(g.value=G(k))}catch(W){p(W)}finally{k?bt(M):M()}}}}}function gR(t){return cR("(prefers-color-scheme: dark)",t)}function mR(t={}){const{selector:e="html",attribute:n="class",initialValue:r="auto",window:s=Zs,storage:i,storageKey:o="vueuse-color-scheme",listenToStorageChanges:a=!0,storageRef:l,emitAuto:c,disableTransition:u=!0}=t,d={auto:"",light:"light",dark:"dark",...t.modes||{}},f=gR({window:s}),p=ae(()=>f.value?"dark":"light"),g=l||(o==null?nR(r):pR(o,r,i,{window:s,listenToStorageChanges:a})),_=ae(()=>g.value==="auto"?p.value:g.value),v=im("updateHTMLAttrs",(P,G,U)=>{const Q=typeof P=="string"?s==null?void 0:s.document.querySelector(P):sm(P);if(!Q)return;let k;if(u){k=s.document.createElement("style");const W="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";k.appendChild(document.createTextNode(W)),s.document.head.appendChild(k)}if(G==="class"){const W=U.split(/\s/g);Object.values(d).flatMap(V=>(V||"").split(/\s/g)).filter(Boolean).forEach(V=>{W.includes(V)?Q.classList.add(V):Q.classList.remove(V)})}else Q.setAttribute(G,U);u&&(s.getComputedStyle(k).opacity,document.head.removeChild(k))});function I(P){var G;v(e,n,(G=d[P])!=null?G:P)}function S(P){t.onChanged?t.onChanged(P,I):I(P)}kt(_,S,{flush:"post",immediate:!0}),iR(()=>S(_.value));const M=ae({get(){return c?g.value:_.value},set(P){g.value=P}});try{return Object.assign(M,{store:g,system:p,state:_})}catch{return M}}function _R(t={}){const{valueDark:e="dark",valueLight:n=""}=t,r=mR({...t,onChanged:(i,o)=>{var a;t.onChanged?(a=t.onChanged)==null||a.call(t,i==="dark",o,i):o(i)},modes:{dark:e,light:n}});return ae({get(){return r.value==="dark"},set(i){const o=i?"dark":"light";r.system.value===o?r.value="auto":r.value=o}})}const vR={components:{LoginComponent:gI,ErrorMessage:yI,BaseHeader:Vg,Icon:zp,Menu:K0,MenuButton:z0,MenuItems:q0,MenuItem:G0,Switch:Q0},setup(){const t=sE(),e=re(),n=_R(),r=oR(n),s=Wg();function i(o){const a=re(o[0]),l=re(o[1]),c=re(o[2]);e.value="",c.value==="Login"?QT(s,a.value,l.value).then(()=>{t.replace("/tasks")}).catch(u=>{switch(u.code){case"auth/invalid-email":e.value="Invalid email";break;case"auth/user-not-found":e.value="No account with that email was found";break;case"auth/wrong-password":e.value="Incorrect password";break;default:e.value="Email or password was incorrect";break}}):c.value==="Signup"&&YT(s,a.value,l.value).then(()=>{alert("User created with success!")}).catch(u=>{console.log(u.code),alert(u.message)})}return{signupOrLogin:i,errMsg:e,isDark:n,toggleDark:r}}},yR=_e("div",{class:"py-0 px-3 font-semibold dark:text-white"},"Task Project",-1),bR={class:"flex"},wR=_e("h1",{class:"font-semibold text-3xl p-4 dark:text-white"},"The Task Project",-1),ER=_e("h3",{class:"font-medium text-2xl p-2 dark:text-white"}," Please login or signup to start your task list! ",-1);function IR(t,e,n,r,s,i){const o=ft("Icon"),a=ft("Switch"),l=ft("base-header"),c=ft("login-component"),u=ft("error-message"),d=ft("content-box");return Et(),Rn($e,null,[pe(l,null,{default:gt(()=>[yR,_e("div",bR,[pe(o,{icon:"iconamoon:mode-light",color:"black",width:"26",height:"26"}),pe(a,{onClick:e[0]||(e[0]=f=>r.toggleDark()),modelValue:r.isDark,"onUpdate:modelValue":e[1]||(e[1]=f=>r.isDark=f),class:$s([r.isDark?"bg-gray-900":"bg-gray-700","relative inline-flex h-6 w-11 items-center rounded-full transition-colors"])},{default:gt(()=>[_e("span",{class:$s([r.isDark?"translate-x-6":"translate-x-1","inline-block h-4 w-4 transform rounded-full bg-white transition-transform"])},null,2)]),_:1},8,["modelValue","class"]),pe(o,{icon:"material-symbols:dark-mode-outline",color:"black",width:"26",height:"26"})])]),_:1}),pe(d,null,{default:gt(()=>[wR,ER,pe(c,{onEmitUser:r.signupOrLogin},null,8,["onEmitUser"]),r.errMsg?(Et(),hc(u,{key:0},{default:gt(()=>[zn(za(r.errMsg),1)]),_:1})):Ny("",!0)]),_:1})],64)}const CR=An(vR,[["render",IR]]),TR={},SR=_e("br",null,null,-1),RR={class:"rounded-xl shadow-md p-10 w-fit mx-auto m-32-auto place-content-center grid place-items-center dark:bg-sky-950"};function AR(t,e){return Et(),Rn($e,null,[SR,_e("div",RR,[Lo(t.$slots,"default")])],64)}const om=An(TR,[["render",AR]]),PR={components:{ContentBox:om,BaseHeader:Vg}},kR=_e("div",{class:"py-0 px-3 font-semibold dark:text-white"},"Task Project",-1),xR=_e("h2",{class:"font-semibold p-4 dark:text-white"},"Page Not Found",-1),NR={class:"dark:text-white"};function OR(t,e,n,r,s,i){const o=ft("base-header"),a=ft("router-link"),l=ft("content-box");return Et(),Rn($e,null,[pe(o,null,{default:gt(()=>[kR]),_:1}),_e("section",null,[pe(l,{class:"dark:bg-sky-950"},{default:gt(()=>[xR,_e("div",NR,[zn(" This page could not be found - do you want to return to "),pe(a,{to:"/login",class:"underline underline-offset-2"},{default:gt(()=>[zn("login")]),_:1}),zn("? ")])]),_:1})])],64)}const MR=An(PR,[["render",OR]]),DR=nE({history:vw(),routes:[{path:"/",redirect:"login"},{path:"/login",component:CR},{path:"/tasks",name:"Tasks",component:()=>Vb(()=>import("./TaskBody-4d60fffb.js"),["assets/TaskBody-4d60fffb.js","assets/TaskBody-4dc528d8.css"]),meta:{requiresAuth:!0}},{path:"/:notFound(.*)",component:MR}]});/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var am="store";function Ox(t){return t===void 0&&(t=null),Qe(t!==null?t:am)}function os(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function LR(t){return t!==null&&typeof t=="object"}function FR(t){return t&&typeof t.then=="function"}function UR(t,e){return function(){return t(e)}}function lm(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function cm(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;ta(t,n,[],t._modules.root,!0),zc(t,n,e)}function zc(t,e,n){var r=t._state,s=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={},a={},l=J_(!0);l.run(function(){os(i,function(c,u){o[u]=UR(c,t),a[u]=ae(function(){return o[u]()}),Object.defineProperty(t.getters,u,{get:function(){return a[u].value},enumerable:!0})})}),t._state=Xr({data:e}),t._scope=l,t.strict&&WR(t),r&&n&&t._withCommit(function(){r.data=null}),s&&s.stop()}function ta(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var a=qc(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){a[l]=r.state})}var c=r.context=$R(t,o,n);r.forEachMutation(function(u,d){var f=o+d;BR(t,f,u,c)}),r.forEachAction(function(u,d){var f=u.root?d:o+d,p=u.handler||u;jR(t,f,p,c)}),r.forEachGetter(function(u,d){var f=o+d;HR(t,f,u,c)}),r.forEachChild(function(u,d){ta(t,e,n.concat(d),u,s)})}function $R(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,a){var l=fo(i,o,a),c=l.payload,u=l.options,d=l.type;return(!u||!u.root)&&(d=e+d),t.dispatch(d,c)},commit:r?t.commit:function(i,o,a){var l=fo(i,o,a),c=l.payload,u=l.options,d=l.type;(!u||!u.root)&&(d=e+d),t.commit(d,c,u)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return um(t,e)}},state:{get:function(){return qc(t.state,n)}}}),s}function um(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function BR(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function jR(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return FR(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):a})}function HR(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function WR(t){kt(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function qc(t,e){return e.reduce(function(n,r){return n[r]},t)}function fo(t,e,n){return LR(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var VR="vuex bindings",Mf="vuex:mutations",Da="vuex:actions",_r="vuex",KR=0;function zR(t,e){Xb({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[VR]},function(n){n.addTimelineLayer({id:Mf,label:"Vuex Mutations",color:Df}),n.addTimelineLayer({id:Da,label:"Vuex Actions",color:Df}),n.addInspector({id:_r,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===_r)if(r.filter){var s=[];pm(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[hm(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===_r){var s=r.nodeId;um(e,s),r.state=YR(JR(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===_r){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(_r),n.sendInspectorState(_r),n.addTimelineEvent({layerId:Mf,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=KR++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:Da,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:Da,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var Df=8702998,qR=6710886,GR=16777215,dm={label:"namespaced",textColor:GR,backgroundColor:qR};function fm(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function hm(t,e){return{id:e||"root",label:fm(e),tags:t.namespaced?[dm]:[],children:Object.keys(t._children).map(function(n){return hm(t._children[n],e+n+"/")})}}function pm(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[dm]:[]}),Object.keys(e._children).forEach(function(s){pm(t,e._children[s],n,r+s+"/")})}function YR(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=QR(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?fm(o):o,editable:!1,value:Ol(function(){return i[o]})}})}return s}function QR(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=Ol(function(){return t[n]})}else e[n]=Ol(function(){return t[n]})}),e}function JR(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Ol(t){try{return t()}catch(e){return e}}var Ct=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},gm={namespaced:{configurable:!0}};gm.namespaced.get=function(){return!!this._rawModule.namespaced};Ct.prototype.addChild=function(e,n){this._children[e]=n};Ct.prototype.removeChild=function(e){delete this._children[e]};Ct.prototype.getChild=function(e){return this._children[e]};Ct.prototype.hasChild=function(e){return e in this._children};Ct.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Ct.prototype.forEachChild=function(e){os(this._children,e)};Ct.prototype.forEachGetter=function(e){this._rawModule.getters&&os(this._rawModule.getters,e)};Ct.prototype.forEachAction=function(e){this._rawModule.actions&&os(this._rawModule.actions,e)};Ct.prototype.forEachMutation=function(e){this._rawModule.mutations&&os(this._rawModule.mutations,e)};Object.defineProperties(Ct.prototype,gm);var ur=function(e){this.register([],e,!1)};ur.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};ur.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};ur.prototype.update=function(e){mm([],this.root,e)};ur.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new Ct(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&os(n.modules,function(a,l){s.register(e.concat(l),a,r)})};ur.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);s&&s.runtime&&n.removeChild(r)};ur.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function mm(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;mm(t.concat(r),e.getChild(r),n.modules[r])}}function XR(t){return new tt(t)}var tt=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new ur(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(f,p){return l.call(o,f,p)},this.commit=function(f,p,g){return c.call(o,f,p,g)},this.strict=s;var u=this._modules.root.state;ta(this,u,[],this._modules.root),zc(this,u),r.forEach(function(d){return d(n)})},Gc={state:{configurable:!0}};tt.prototype.install=function(e,n){e.provide(n||am,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&zR(e,this)};Gc.state.get=function(){return this._state.data};Gc.state.set=function(t){};tt.prototype.commit=function(e,n,r){var s=this,i=fo(e,n,r),o=i.type,a=i.payload,l={type:o,payload:a},c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(d){d(a)})}),this._subscribers.slice().forEach(function(u){return u(l,s.state)}))};tt.prototype.dispatch=function(e,n){var r=this,s=fo(e,n),i=s.type,o=s.payload,a={type:i,payload:o},l=this._actions[i];if(l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,r.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,d){c.then(function(f){try{r._actionSubscribers.filter(function(p){return p.after}).forEach(function(p){return p.after(a,r.state)})}catch{}u(f)},function(f){try{r._actionSubscribers.filter(function(p){return p.error}).forEach(function(p){return p.error(a,r.state,f)})}catch{}d(f)})})}};tt.prototype.subscribe=function(e,n){return lm(e,this._subscribers,n)};tt.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return lm(r,this._actionSubscribers,n)};tt.prototype.watch=function(e,n,r){var s=this;return kt(function(){return e(s.state,s.getters)},n,Object.assign({},r))};tt.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};tt.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),ta(this,this.state,e,this._modules.get(e),r.preserveState),zc(this,this.state)};tt.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=qc(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),cm(this)};tt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};tt.prototype.hotUpdate=function(e){this._modules.update(e),cm(this,!0)};tt.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(tt.prototype,Gc);var ZR="firebase",eA="11.3.1";/**
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
 */_n(ZR,eA,"app");const Lf="@firebase/database",Ff="1.0.12";/**
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
 */let _m="";function tA(t){_m=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),xe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Gs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Dt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new nA(e)}}catch{}return new rA},Wn=vm("localStorage"),Ml=vm("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new Pc("@firebase/database"),sA=function(){let t=1;return function(){return t++}}(),ym=function(t){const e=VI(t),n=new BI;n.update(e);const r=n.digest();return Sc.encodeByteArray(r)},hi=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=hi.apply(null,r):typeof r=="object"?e+=xe(r):e+=r,e+=" "}return e};let Gn=null,Uf=!0;const iA=function(t,e){T(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Or.logLevel=ue.VERBOSE,Gn=Or.log.bind(Or),e&&Ml.set("logging_enabled",!0)):typeof t=="function"?Gn=t:(Gn=null,Ml.remove("logging_enabled"))},je=function(...t){if(Uf===!0&&(Uf=!1,Gn===null&&Ml.get("logging_enabled")===!0&&iA(!0)),Gn){const e=hi.apply(null,t);Gn(e)}},pi=function(t){return function(...e){je(t,...e)}},Dl=function(...t){const e="FIREBASE INTERNAL ERROR: "+hi(...t);Or.error(e)},Qt=function(...t){const e=`FIREBASE FATAL ERROR: ${hi(...t)}`;throw Or.error(e),new Error(e)},Xe=function(...t){const e="FIREBASE WARNING: "+hi(...t);Or.warn(e)},oA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Xe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Yc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},aA=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},rr="[MIN_NAME]",In="[MAX_NAME]",as=function(t,e){if(t===e)return 0;if(t===rr||e===In)return-1;if(e===rr||t===In)return 1;{const n=$f(t),r=$f(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},lA=function(t,e){return t===e?0:t<e?-1:1},_s=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+xe(e))},Qc=function(t){if(typeof t!="object"||t===null)return xe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=xe(e[r]),n+=":",n+=Qc(t[e[r]]);return n+="}",n},bm=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function et(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const wm=function(t){T(!Yc(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},cA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},uA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function dA(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const fA=new RegExp("^-?(0*)\\d{1,10}$"),hA=-2147483648,pA=2147483647,$f=function(t){if(fA.test(t)){const e=Number(t);if(e>=hA&&e<=pA)return e}return null},ls=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Xe("Exception was thrown by user callback.",n),e},Math.floor(0))}},gA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Os=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class mA{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,ot(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Xe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(je("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Xe(e)}}class Mr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Mr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="5",Em="v",Im="s",Cm="r",Tm="f",Sm=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Rm="ls",Am="p",Ll="ac",Pm="websocket",km="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Wn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Wn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function vA(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Nm(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let r;if(e===Pm)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===km)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);vA(t)&&(n.ns=t.namespace);const s=[];return et(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(){this.counters_={}}incrementCounter(e,n=1){Dt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return EI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La={},Fa={};function Xc(t){const e=t.toString();return La[e]||(La[e]=new yA),La[e]}function bA(t,e){const n=t.toString();return Fa[n]||(Fa[n]=e()),Fa[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&ls(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf="start",EA="close",IA="pLPCommand",CA="pRTLPCB",Om="id",Mm="pw",Dm="ser",TA="cb",SA="seg",RA="ts",AA="d",PA="dframe",Lm=1870,Fm=30,kA=Lm-Fm,xA=25e3,NA=3e4;class Er{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=pi(e),this.stats_=Xc(n),this.urlFn=l=>(this.appCheckToken&&(l[Ll]=this.appCheckToken),Nm(n,km,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new wA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(NA)),aA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Zc((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Bf)this.id=a,this.password=l;else if(o===EA)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Bf]="t",r[Dm]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[TA]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Em]=Jc,this.transportSessionId&&(r[Im]=this.transportSessionId),this.lastSessionId&&(r[Rm]=this.lastSessionId),this.applicationId&&(r[Am]=this.applicationId),this.appCheckToken&&(r[Ll]=this.appCheckToken),typeof location<"u"&&location.hostname&&Sm.test(location.hostname)&&(r[Cm]=Tm);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Er.forceAllow_=!0}static forceDisallow(){Er.forceDisallow_=!0}static isAvailable(){return Er.forceAllow_?!0:!Er.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!cA()&&!uA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Yp(n),s=bm(r,kA);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[PA]="t",r[Om]=e,r[Mm]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=xe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Zc{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=sA(),window[IA+this.uniqueCallbackIdentifier]=e,window[CA+this.uniqueCallbackIdentifier]=n,this.myIFrame=Zc.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){je("frame writing exception"),a.stack&&je(a.stack),je(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||je("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Om]=this.myID,e[Mm]=this.myPW,e[Dm]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Fm+r.length<=Lm;){const o=this.pendingSegs.shift();r=r+"&"+SA+s+"="+o.seg+"&"+RA+s+"="+o.ts+"&"+AA+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(xA)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{je("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA=16384,MA=45e3;let ho=null;typeof MozWebSocket<"u"?ho=MozWebSocket:typeof WebSocket<"u"&&(ho=WebSocket);class pt{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=pi(this.connId),this.stats_=Xc(n),this.connURL=pt.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[Em]=Jc,typeof location<"u"&&location.hostname&&Sm.test(location.hostname)&&(o[Cm]=Tm),n&&(o[Im]=n),r&&(o[Rm]=r),s&&(o[Ll]=s),i&&(o[Am]=i),Nm(e,Pm,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Wn.set("previous_websocket_failure",!0);try{let r;tg(),this.mySock=new ho(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){pt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ho!==null&&!pt.forceDisallow_}static previouslyFailed(){return Wn.isInMemoryStorage||Wn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Wn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Gs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=bm(n,OA);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(MA))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}pt.responsesRequiredToBeHealthy=2;pt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{static get ALL_TRANSPORTS(){return[Er,pt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=pt&&pt.isAvailable();let r=n&&!pt.previouslyFailed();if(e.webSocketOnly&&(n||Xe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[pt];else{const s=this.transports_=[];for(const i of ei.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);ei.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ei.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=6e4,LA=5e3,FA=10*1024,UA=100*1024,Ua="t",jf="d",$A="s",Hf="r",BA="e",Wf="o",Vf="a",Kf="n",zf="p",jA="h";class HA{constructor(e,n,r,s,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=pi("c:"+this.id+":"),this.transportManager_=new ei(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Os(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>UA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>FA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ua in e){const n=e[Ua];n===Vf?this.upgradeIfSecondaryHealthy_():n===Hf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Wf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=_s("t",e),r=_s("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:zf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Vf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Kf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=_s("t",e),r=_s("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=_s(Ua,e);if(jf in e){const r=e[jf];if(n===jA){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Kf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===$A?this.onConnectionShutdown_(r):n===Hf?this.onReset_(r):n===BA?Dl("Server Error: "+r):n===Wf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Dl("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Jc!==r&&Xe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Os(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(DA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Os(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(LA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:zf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Wn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po extends $m{static getInstance(){return new po}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ac()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf=32,Gf=768;class fe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ie(){return new fe("")}function J(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Cn(t){return t.pieces_.length-t.pieceNum_}function ve(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new fe(t.pieces_,e)}function Bm(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function WA(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function jm(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Hm(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new fe(e,0)}function Ne(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof fe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new fe(n,0)}function X(t){return t.pieceNum_>=t.pieces_.length}function Ke(t,e){const n=J(t),r=J(e);if(n===null)return e;if(n===r)return Ke(ve(t),ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function eu(t,e){if(Cn(t)!==Cn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function _t(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Cn(t)>Cn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class VA{constructor(e,n){this.errorPrefix_=n,this.parts_=jm(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Go(this.parts_[r]);Wm(this)}}function KA(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Go(e),Wm(t)}function zA(t){const e=t.parts_.pop();t.byteLength_-=Go(e),t.parts_.length>0&&(t.byteLength_-=1)}function Wm(t){if(t.byteLength_>Gf)throw new Error(t.errorPrefix_+"has a key path longer than "+Gf+" bytes ("+t.byteLength_+").");if(t.parts_.length>qf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+qf+") or object contains a cycle "+Un(t))}function Un(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu extends $m{static getInstance(){return new tu}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=1e3,qA=60*5*1e3,Yf=30*1e3,GA=1.3,YA=3e4,QA="server_kill",Qf=3;class Kt extends Um{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Kt.nextPersistentConnectionId_++,this.log_=pi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=vs,this.maxReconnectDelay_=qA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!tg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");tu.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&po.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(xe(i)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new zo,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;Kt.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Dt(e,"w")){const r=Hr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Xe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||$I(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Yf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=UI(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+xe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Dl("Unrecognized action received from server: "+xe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=vs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=vs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>YA&&(this.reconnectDelay_=vs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*GA)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Kt.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?je("getToken() completed but was canceled"):(je("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new HA(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{Xe(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(QA)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Xe(d),l())}}}interrupt(e){je("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){je("Resuming connection for reason: "+e),delete this.interruptReasons_[e],bl(this.interruptReasons_)&&(this.reconnectDelay_=vs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Qc(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new fe(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){je("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Qf&&(this.reconnectDelay_=Yf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){je("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Qf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+_m.replace(/\./g,"-")]=1,Ac()?e["framework.cordova"]=1:eg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=po.getInstance().currentlyOnline();return bl(this.interruptReasons_)&&e}}Kt.nextPersistentConnectionId_=0;Kt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class na{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Z(rr,e),s=new Z(rr,n);return this.compare(r,s)!==0}minPost(){return Z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ni;class Vm extends na{static get __EMPTY_NODE(){return Ni}static set __EMPTY_NODE(e){Ni=e}compare(e,n){return as(e.name,n.name)}isDefinedOn(e){throw ts("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Z.MIN}maxPost(){return new Z(In,Ni)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new Z(e,Ni)}toString(){return".key"}}const Yn=new Vm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class De{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??De.RED,this.left=s??Ye.EMPTY_NODE,this.right=i??Ye.EMPTY_NODE}copy(e,n,r,s,i){return new De(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ye.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ye.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}De.RED=!0;De.BLACK=!1;class JA{copy(e,n,r,s,i){return this}insert(e,n,r){return new De(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ye{constructor(e,n=Ye.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ye(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,De.BLACK,null,null))}remove(e){return new Ye(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,De.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Oi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Oi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Oi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Oi(this.root_,null,this.comparator_,!0,e)}}Ye.EMPTY_NODE=new JA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XA(t,e){return as(t.name,e.name)}function nu(t,e){return as(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fl;function ZA(t){Fl=t}const Km=function(t){return typeof t=="number"?"number:"+wm(t):"string:"+t},zm=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Dt(e,".sv"),"Priority must be a string or number.")}else T(t===Fl||t.isEmpty(),"priority of unexpected type.");T(t===Fl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jf;class Me{static set __childrenNodeConstructor(e){Jf=e}static get __childrenNodeConstructor(){return Jf}constructor(e,n=Me.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),zm(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Me(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return X(e)?this:J(e)===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=J(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(T(r!==".priority"||Cn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Me.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Km(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=wm(this.value_):e+=this.value_,this.lazyHash_=ym(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Me.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Me.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Me.VALUE_TYPE_ORDER.indexOf(n),i=Me.VALUE_TYPE_ORDER.indexOf(r);return T(s>=0,"Unknown leaf type: "+n),T(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qm,Gm;function eP(t){qm=t}function tP(t){Gm=t}class nP extends na{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?as(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Z.MIN}maxPost(){return new Z(In,new Me("[PRIORITY-POST]",Gm))}makePost(e,n){const r=qm(e);return new Z(n,new Me("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ce=new nP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP=Math.log(2);class sP{constructor(e){const n=i=>parseInt(Math.log(i)/rP,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const go=function(t,e,n,r){t.sort(e);const s=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=t[l],f=n?n(d):d,new De(f,d.node,De.BLACK,null,null);{const p=parseInt(u/2,10)+l,g=s(l,p),_=s(p+1,c);return d=t[p],f=n?n(d):d,new De(f,d.node,De.BLACK,g,_)}},i=function(l){let c=null,u=null,d=t.length;const f=function(g,_){const v=d-g,I=d;d-=g;const S=s(v+1,I),M=t[v],P=n?n(M):M;p(new De(P,M.node,_,null,S))},p=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const _=l.nextBitIsOne(),v=Math.pow(2,l.count-(g+1));_?f(v,De.BLACK):(f(v,De.BLACK),f(v,De.RED))}return u},o=new sP(t.length),a=i(o);return new Ye(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $a;const vr={};class Wt{static get Default(){return T(vr&&Ce,"ChildrenNode.ts has not been loaded"),$a=$a||new Wt({".priority":vr},{".priority":Ce}),$a}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Hr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ye?n:null}hasIndex(e){return Dt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==Yn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(Z.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=go(r,e.getCompare()):a=vr;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Wt(u,c)}addToIndexes(e,n){const r=ro(this.indexes_,(s,i)=>{const o=Hr(this.indexSet_,i);if(T(o,"Missing index implementation for "+i),s===vr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Z.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),go(a,o.getCompare())}else return vr;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new Z(e.name,a))),l.insert(e,e.node)}});return new Wt(r,this.indexSet_)}removeFromIndexes(e,n){const r=ro(this.indexes_,s=>{if(s===vr)return s;{const i=n.get(e.name);return i?s.remove(new Z(e.name,i)):s}});return new Wt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ys;class K{static get EMPTY_NODE(){return ys||(ys=new K(new Ye(nu),null,Wt.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&zm(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ys}updatePriority(e){return this.children_.isEmpty()?this:new K(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ys:n}}getChild(e){const n=J(e);return n===null?this:this.getImmediateChild(n).getChild(ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Z(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?ys:this.priorityNode_;return new K(s,o,i)}}updateChild(e,n){const r=J(e);if(r===null)return n;{T(J(e)!==".priority"||Cn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(ve(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(Ce,(o,a)=>{n[o]=a.val(e),r++,i&&K.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Km(this.getPriority().val())+":"),this.forEachChild(Ce,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":ym(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new Z(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Z(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Z.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Z.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===gi?-1:0}withIndex(e){if(e===Yn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new K(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Yn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ce),s=n.getIterator(Ce);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Yn?null:this.indexMap_.get(e.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class iP extends K{constructor(){super(new Ye(nu),K.EMPTY_NODE,Wt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return K.EMPTY_NODE}isEmpty(){return!1}}const gi=new iP;Object.defineProperties(Z,{MIN:{value:new Z(rr,K.EMPTY_NODE)},MAX:{value:new Z(In,gi)}});Vm.__EMPTY_NODE=K.EMPTY_NODE;Me.__childrenNodeConstructor=K;ZA(gi);tP(gi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP=!0;function Le(t,e=null){if(t===null)return K.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Me(n,Le(e))}if(!(t instanceof Array)&&oP){const n=[];let r=!1;if(et(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Le(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Z(o,l)))}}),n.length===0)return K.EMPTY_NODE;const i=go(n,XA,o=>o.name,nu);if(r){const o=go(n,Ce.getCompare());return new K(i,Le(e),new Wt({".priority":o},{".priority":Ce}))}else return new K(i,Le(e),Wt.Default)}else{let n=K.EMPTY_NODE;return et(t,(r,s)=>{if(Dt(t,r)&&r.substring(0,1)!=="."){const i=Le(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(Le(e))}}eP(Le);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru extends na{constructor(e){super(),this.indexPath_=e,T(!X(e)&&J(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?as(e.name,n.name):i}makePost(e,n){const r=Le(e),s=K.EMPTY_NODE.updateChild(this.indexPath_,r);return new Z(n,s)}maxPost(){const e=K.EMPTY_NODE.updateChild(this.indexPath_,gi);return new Z(In,e)}toString(){return jm(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP extends na{compare(e,n){const r=e.node.compareTo(n.node);return r===0?as(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Z.MIN}maxPost(){return Z.MAX}makePost(e,n){const r=Le(e);return new Z(n,r)}toString(){return".value"}}const Ym=new aP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(t){return{type:"value",snapshotNode:t}}function Kr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ti(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ni(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function lP(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ti(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Kr(n,r)):o.trackChildChange(ni(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ce,(s,i)=>{n.hasChild(s)||r.trackChildChange(ti(s,i))}),n.isLeafNode()||n.forEachChild(Ce,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(ni(s,i,o))}else r.trackChildChange(Kr(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?K.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this.indexedFilter_=new su(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ri.getStartPost_(e),this.endPost_=ri.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new Z(n,r))||(r=K.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=K.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(K.EMPTY_NODE);const i=this;return n.forEachChild(Ce,(o,a)=>{i.matches(new Z(o,a))||(s=s.updateImmediateChild(o,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ri(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new Z(n,r))||(r=K.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=K.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(K.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,p)=>d(p,f)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new Z(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=s.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(u&&!r.isEmpty()&&p>=0)return i!=null&&i.trackChildChange(ni(n,r,d)),a.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(ti(n,d));const _=a.updateImmediateChild(n,K.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(i!=null&&i.trackChildChange(Kr(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?e:u&&o(c,l)>=0?(i!=null&&(i.trackChildChange(ti(c.name,c.node)),i.trackChildChange(Kr(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,K.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ce}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:rr}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:In}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ce}copy(){const e=new iu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function uP(t){return t.loadsAllData()?new su(t.getIndex()):t.hasLimit()?new cP(t):new ri(t)}function dP(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function fP(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function hP(t,e){const n=t.copy();return n.index_=e,n}function Xf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ce?n="$priority":t.index_===Ym?n="$value":t.index_===Yn?n="$key":(T(t.index_ instanceof ru,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=xe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=xe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+xe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=xe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+xe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Zf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ce&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo extends Um{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=pi("p:rest:"),this.listens_={}}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=mo.getListenId_(e,r),a={};this.listens_[o]=a;const l=Xf(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(i,d,!1,r),Hr(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,n){const r=mo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Xf(e._queryParams),r=e._path.toString(),s=new zo;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ns(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Gs(a.responseText)}catch{Xe("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Xe("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(){return{value:null,children:new Map}}function Jm(t,e,n){if(X(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=J(e);t.children.has(r)||t.children.set(r,_o());const s=t.children.get(r);e=ve(e),Jm(s,e,n)}}function Ul(t,e,n){t.value!==null?n(e,t.value):gP(t,(r,s)=>{const i=new fe(e.toString()+"/"+r);Ul(s,i,n)})}function gP(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&et(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh=10*1e3,_P=30*1e3,vP=5*60*1e3;class yP{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new mP(e);const r=eh+(_P-eh)*Math.random();Os(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;et(e,(s,i)=>{i>0&&Dt(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),Os(this.reportStats_.bind(this),Math.floor(Math.random()*2*vP))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(vt||(vt={}));function Xm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ou(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function au(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=vt.ACK_USER_WRITE,this.source=Xm()}operationForChild(e){if(X(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new fe(e));return new vo(ie(),n,this.revert)}}else return T(J(this.path)===e,"operationForChild called for unrelated child."),new vo(ve(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n){this.source=e,this.path=n,this.type=vt.LISTEN_COMPLETE}operationForChild(e){return X(this.path)?new si(this.source,ie()):new si(this.source,ve(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=vt.OVERWRITE}operationForChild(e){return X(this.path)?new sr(this.source,ie(),this.snap.getImmediateChild(e)):new sr(this.source,ve(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=vt.MERGE}operationForChild(e){if(X(this.path)){const n=this.children.subtree(new fe(e));return n.isEmpty()?null:n.value?new sr(this.source,ie(),n.value):new ii(this.source,ie(),n)}else return T(J(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ii(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(X(e))return this.isFullyInitialized()&&!this.filtered_;const n=J(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function wP(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(lP(o.childName,o.snapshotNode))}),bs(t,s,"child_removed",e,r,n),bs(t,s,"child_added",e,r,n),bs(t,s,"child_moved",i,r,n),bs(t,s,"child_changed",e,r,n),bs(t,s,"value",e,r,n),s}function bs(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>IP(t,a,l)),o.forEach(a=>{const l=EP(t,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function EP(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function IP(t,e,n){if(e.childName==null||n.childName==null)throw ts("Should only compare child_ events.");const r=new Z(e.childName,e.snapshotNode),s=new Z(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(t,e){return{eventCache:t,serverCache:e}}function Ms(t,e,n,r){return ra(new Tn(e,n,r),t.serverCache)}function Zm(t,e,n,r){return ra(t.eventCache,new Tn(e,n,r))}function yo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ir(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ba;const CP=()=>(Ba||(Ba=new Ye(lA)),Ba);class be{static fromObject(e){let n=new be(null);return et(e,(r,s)=>{n=n.set(new fe(r),s)}),n}constructor(e,n=CP()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ie(),value:this.value};if(X(e))return null;{const r=J(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(ve(e),n);return i!=null?{path:Ne(new fe(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(X(e))return this;{const n=J(e),r=this.children.get(n);return r!==null?r.subtree(ve(e)):new be(null)}}set(e,n){if(X(e))return new be(n,this.children);{const r=J(e),i=(this.children.get(r)||new be(null)).set(ve(e),n),o=this.children.insert(r,i);return new be(this.value,o)}}remove(e){if(X(e))return this.children.isEmpty()?new be(null):new be(null,this.children);{const n=J(e),r=this.children.get(n);if(r){const s=r.remove(ve(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new be(null):new be(this.value,i)}else return this}}get(e){if(X(e))return this.value;{const n=J(e),r=this.children.get(n);return r?r.get(ve(e)):null}}setTree(e,n){if(X(e))return n;{const r=J(e),i=(this.children.get(r)||new be(null)).setTree(ve(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new be(this.value,o)}}fold(e){return this.fold_(ie(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Ne(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ie(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(X(e))return null;{const i=J(e),o=this.children.get(i);return o?o.findOnPath_(ve(e),Ne(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ie(),n)}foreachOnPath_(e,n,r){if(X(e))return this;{this.value&&r(n,this.value);const s=J(e),i=this.children.get(s);return i?i.foreachOnPath_(ve(e),Ne(n,s),r):new be(null)}}foreach(e){this.foreach_(ie(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(Ne(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.writeTree_=e}static empty(){return new wt(new be(null))}}function Ds(t,e,n){if(X(e))return new wt(new be(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=Ke(s,e);return i=i.updateChild(o,n),new wt(t.writeTree_.set(s,i))}else{const s=new be(n),i=t.writeTree_.setTree(e,s);return new wt(i)}}}function th(t,e,n){let r=t;return et(n,(s,i)=>{r=Ds(r,Ne(e,s),i)}),r}function nh(t,e){if(X(e))return wt.empty();{const n=t.writeTree_.setTree(e,new be(null));return new wt(n)}}function $l(t,e){return dr(t,e)!=null}function dr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ke(n.path,e)):null}function rh(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ce,(r,s)=>{e.push(new Z(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Z(r,s.value))}),e}function vn(t,e){if(X(e))return t;{const n=dr(t,e);return n!=null?new wt(new be(n)):new wt(t.writeTree_.subtree(e))}}function Bl(t){return t.writeTree_.isEmpty()}function zr(t,e){return e_(ie(),t.writeTree_,e)}function e_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(T(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=e_(Ne(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ne(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t,e){return s_(e,t)}function TP(t,e,n,r,s){T(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Ds(t.visibleWrites,e,n)),t.lastWriteId=r}function SP(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function RP(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&AP(a,r.path)?s=!1:_t(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return PP(t),!0;if(r.snap)t.visibleWrites=nh(t.visibleWrites,r.path);else{const a=r.children;et(a,l=>{t.visibleWrites=nh(t.visibleWrites,Ne(r.path,l))})}return!0}else return!1}function AP(t,e){if(t.snap)return _t(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&_t(Ne(t.path,n),e))return!0;return!1}function PP(t){t.visibleWrites=t_(t.allWrites,kP,ie()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function kP(t){return t.visible}function t_(t,e,n){let r=wt.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)_t(n,o)?(a=Ke(n,o),r=Ds(r,a,i.snap)):_t(o,n)&&(a=Ke(o,n),r=Ds(r,ie(),i.snap.getChild(a)));else if(i.children){if(_t(n,o))a=Ke(n,o),r=th(r,a,i.children);else if(_t(o,n))if(a=Ke(o,n),X(a))r=th(r,ie(),i.children);else{const l=Hr(i.children,J(a));if(l){const c=l.getChild(ve(a));r=Ds(r,ie(),c)}}}else throw ts("WriteRecord should have .snap or .children")}}return r}function n_(t,e,n,r,s){if(!r&&!s){const i=dr(t.visibleWrites,e);if(i!=null)return i;{const o=vn(t.visibleWrites,e);if(Bl(o))return n;if(n==null&&!$l(o,ie()))return null;{const a=n||K.EMPTY_NODE;return zr(o,a)}}}else{const i=vn(t.visibleWrites,e);if(!s&&Bl(i))return n;if(!s&&n==null&&!$l(i,ie()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(_t(c.path,e)||_t(e,c.path))},a=t_(t.allWrites,o,e),l=n||K.EMPTY_NODE;return zr(a,l)}}}function xP(t,e,n){let r=K.EMPTY_NODE;const s=dr(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Ce,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=vn(t.visibleWrites,e);return n.forEachChild(Ce,(o,a)=>{const l=zr(vn(i,new fe(o)),a);r=r.updateImmediateChild(o,l)}),rh(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=vn(t.visibleWrites,e);return rh(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function NP(t,e,n,r,s){T(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Ne(e,n);if($l(t.visibleWrites,i))return null;{const o=vn(t.visibleWrites,i);return Bl(o)?s.getChild(n):zr(o,s.getChild(n))}}function OP(t,e,n,r){const s=Ne(e,n),i=dr(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=vn(t.visibleWrites,s);return zr(o,r.getNode().getImmediateChild(n))}else return null}function MP(t,e){return dr(t.visibleWrites,e)}function DP(t,e,n,r,s,i,o){let a;const l=vn(t.visibleWrites,e),c=dr(l,ie());if(c!=null)a=c;else if(n!=null)a=zr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=f.getNext();for(;p&&u.length<s;)d(p,r)!==0&&u.push(p),p=f.getNext();return u}else return[]}function LP(){return{visibleWrites:wt.empty(),allWrites:[],lastWriteId:-1}}function bo(t,e,n,r){return n_(t.writeTree,t.treePath,e,n,r)}function lu(t,e){return xP(t.writeTree,t.treePath,e)}function sh(t,e,n,r){return NP(t.writeTree,t.treePath,e,n,r)}function wo(t,e){return MP(t.writeTree,Ne(t.treePath,e))}function FP(t,e,n,r,s,i){return DP(t.writeTree,t.treePath,e,n,r,s,i)}function cu(t,e,n){return OP(t.writeTree,t.treePath,e,n)}function r_(t,e){return s_(Ne(t.treePath,e),t.writeTree)}function s_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,ni(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,ti(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,Kr(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,ni(r,e.snapshotNode,s.oldSnap));else throw ts("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const i_=new $P;class uu{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Tn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return cu(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ir(this.viewCache_),i=FP(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BP(t){return{filter:t}}function jP(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function HP(t,e,n,r,s){const i=new UP;let o,a;if(n.type===vt.OVERWRITE){const c=n;c.source.fromUser?o=jl(t,e,c.path,c.snap,r,s,i):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!X(c.path),o=Eo(t,e,c.path,c.snap,r,s,a,i))}else if(n.type===vt.MERGE){const c=n;c.source.fromUser?o=VP(t,e,c.path,c.children,r,s,i):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Hl(t,e,c.path,c.children,r,s,a,i))}else if(n.type===vt.ACK_USER_WRITE){const c=n;c.revert?o=qP(t,e,c.path,r,s,i):o=KP(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===vt.LISTEN_COMPLETE)o=zP(t,e,n.path,r,i);else throw ts("Unknown operation type: "+n.type);const l=i.getChanges();return WP(e,o,l),{viewCache:o,changes:l}}function WP(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=yo(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(Qm(yo(e)))}}function o_(t,e,n,r,s,i){const o=e.eventCache;if(wo(r,n)!=null)return e;{let a,l;if(X(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ir(e),u=c instanceof K?c:K.EMPTY_NODE,d=lu(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const c=bo(r,ir(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=J(n);if(c===".priority"){T(Cn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=sh(r,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=ve(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=sh(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=cu(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,s,i):a=o.getNode()}}return Ms(e,a,o.isFullyInitialized()||X(n),t.filter.filtersNodes())}}function Eo(t,e,n,r,s,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(X(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),p,null)}else{const p=J(n);if(!l.isCompleteForPath(n)&&Cn(n)>1)return e;const g=ve(n),v=l.getNode().getImmediateChild(p).updateChild(g,r);p===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),p,v,g,i_,null)}const d=Zm(e,c,l.isFullyInitialized()||X(n),u.filtersNodes()),f=new uu(s,d,i);return o_(t,d,n,s,f,a)}function jl(t,e,n,r,s,i,o){const a=e.eventCache;let l,c;const u=new uu(s,e,i);if(X(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ms(e,c,!0,t.filter.filtersNodes());else{const d=J(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ms(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=ve(n),p=a.getNode().getImmediateChild(d);let g;if(X(f))g=r;else{const _=u.getCompleteChild(d);_!=null?Bm(f)===".priority"&&_.getChild(Hm(f)).isEmpty()?g=_:g=_.updateChild(f,r):g=K.EMPTY_NODE}if(p.equals(g))l=e;else{const _=t.filter.updateChild(a.getNode(),d,g,f,u,o);l=Ms(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function ih(t,e){return t.eventCache.isCompleteForChild(e)}function VP(t,e,n,r,s,i,o){let a=e;return r.foreach((l,c)=>{const u=Ne(n,l);ih(e,J(u))&&(a=jl(t,a,u,c,s,i,o))}),r.foreach((l,c)=>{const u=Ne(n,l);ih(e,J(u))||(a=jl(t,a,u,c,s,i,o))}),a}function oh(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Hl(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;X(n)?c=r:c=new be(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),g=oh(t,p,f);l=Eo(t,l,new fe(d),g,s,i,o,a)}}),c.children.inorderTraversal((d,f)=>{const p=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!p){const g=e.serverCache.getNode().getImmediateChild(d),_=oh(t,g,f);l=Eo(t,l,new fe(d),_,s,i,o,a)}}),l}function KP(t,e,n,r,s,i,o){if(wo(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(X(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Eo(t,e,n,l.getNode().getChild(n),s,i,a,o);if(X(n)){let c=new be(null);return l.getNode().forEachChild(Yn,(u,d)=>{c=c.set(new fe(u),d)}),Hl(t,e,n,c,s,i,a,o)}else return e}else{let c=new be(null);return r.foreach((u,d)=>{const f=Ne(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Hl(t,e,n,c,s,i,a,o)}}function zP(t,e,n,r,s){const i=e.serverCache,o=Zm(e,i.getNode(),i.isFullyInitialized()||X(n),i.isFiltered());return o_(t,o,n,r,i_,s)}function qP(t,e,n,r,s,i){let o;if(wo(r,n)!=null)return e;{const a=new uu(r,e,s),l=e.eventCache.getNode();let c;if(X(n)||J(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=bo(r,ir(e));else{const d=e.serverCache.getNode();T(d instanceof K,"serverChildren would be complete if leaf node"),u=lu(r,d)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=J(n);let d=cu(r,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,ve(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,K.EMPTY_NODE,ve(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=bo(r,ir(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||wo(r,ie())!=null,Ms(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new su(r.getIndex()),i=uP(r);this.processor_=BP(i);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(K.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(K.EMPTY_NODE,a.getNode(),null),u=new Tn(l,o.isFullyInitialized(),s.filtersNodes()),d=new Tn(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=ra(d,u),this.eventGenerator_=new bP(this.query_)}get query(){return this.query_}}function YP(t){return t.viewCache_.serverCache.getNode()}function QP(t){return yo(t.viewCache_)}function JP(t,e){const n=ir(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!X(e)&&!n.getImmediateChild(J(e)).isEmpty())?n.getChild(e):null}function ah(t){return t.eventRegistrations_.length===0}function XP(t,e){t.eventRegistrations_.push(e)}function lh(t,e,n){const r=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function ch(t,e,n,r){e.type===vt.MERGE&&e.source.queryId!==null&&(T(ir(t.viewCache_),"We should always have a full cache before handling merges"),T(yo(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=HP(t.processor_,s,e,n,r);return jP(t.processor_,i.viewCache),T(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,a_(t,i.changes,i.viewCache.eventCache.getNode(),null)}function ZP(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ce,(i,o)=>{r.push(Kr(i,o))}),n.isFullyInitialized()&&r.push(Qm(n.getNode())),a_(t,r,n.getNode(),e)}function a_(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return wP(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Io;class l_{constructor(){this.views=new Map}}function ek(t){T(!Io,"__referenceConstructor has already been defined"),Io=t}function tk(){return T(Io,"Reference.ts has not been loaded"),Io}function nk(t){return t.views.size===0}function du(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return T(i!=null,"SyncTree gave us an op for an invalid query."),ch(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(ch(o,e,n,r));return i}}function c_(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=bo(n,s?r:null),l=!1;a?l=!0:r instanceof K?(a=lu(n,r),l=!1):(a=K.EMPTY_NODE,l=!1);const c=ra(new Tn(a,l,!1),new Tn(r,s,!1));return new GP(e,c)}return o}function rk(t,e,n,r,s,i){const o=c_(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),XP(o,n),ZP(o,n)}function sk(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const a=Sn(t);if(s==="default")for(const[l,c]of t.views.entries())o=o.concat(lh(c,n,r)),ah(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||i.push(c.query));else{const l=t.views.get(s);l&&(o=o.concat(lh(l,n,r)),ah(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!Sn(t)&&i.push(new(tk())(e._repo,e._path)),{removed:i,events:o}}function u_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function yn(t,e){let n=null;for(const r of t.views.values())n=n||JP(r,e);return n}function d_(t,e){if(e._queryParams.loadsAllData())return ia(t);{const r=e._queryIdentifier;return t.views.get(r)}}function f_(t,e){return d_(t,e)!=null}function Sn(t){return ia(t)!=null}function ia(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Co;function ik(t){T(!Co,"__referenceConstructor has already been defined"),Co=t}function ok(){return T(Co,"Reference.ts has not been loaded"),Co}let ak=1;class uh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new be(null),this.pendingWriteTree_=LP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function h_(t,e,n,r,s){return TP(t.pendingWriteTree_,e,n,r,s),s?_i(t,new sr(Xm(),e,n)):[]}function Vn(t,e,n=!1){const r=SP(t.pendingWriteTree_,e);if(RP(t.pendingWriteTree_,e)){let i=new be(null);return r.snap!=null?i=i.set(ie(),!0):et(r.children,o=>{i=i.set(new fe(o),!0)}),_i(t,new vo(r.path,i,n))}else return[]}function mi(t,e,n){return _i(t,new sr(ou(),e,n))}function lk(t,e,n){const r=be.fromObject(n);return _i(t,new ii(ou(),e,r))}function ck(t,e){return _i(t,new si(ou(),e))}function uk(t,e,n){const r=hu(t,n);if(r){const s=pu(r),i=s.path,o=s.queryId,a=Ke(i,e),l=new si(au(o),a);return gu(t,i,l)}else return[]}function To(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||f_(o,e))){const l=sk(o,e,n,r);nk(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=l.removed;if(a=l.events,!s){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(i,(f,p)=>Sn(p));if(u&&!d){const f=t.syncPointTree_.subtree(i);if(!f.isEmpty()){const p=hk(f);for(let g=0;g<p.length;++g){const _=p[g],v=_.query,I=__(t,_);t.listenProvider_.startListening(Ls(v),oi(t,v),I.hashFn,I.onComplete)}}}!d&&c.length>0&&!r&&(u?t.listenProvider_.stopListening(Ls(e),null):c.forEach(f=>{const p=t.queryToTagMap.get(oa(f));t.listenProvider_.stopListening(Ls(f),p)}))}pk(t,c)}return a}function p_(t,e,n,r){const s=hu(t,r);if(s!=null){const i=pu(s),o=i.path,a=i.queryId,l=Ke(o,e),c=new sr(au(a),l,n);return gu(t,o,c)}else return[]}function dk(t,e,n,r){const s=hu(t,r);if(s){const i=pu(s),o=i.path,a=i.queryId,l=Ke(o,e),c=be.fromObject(n),u=new ii(au(a),l,c);return gu(t,o,u)}else return[]}function Wl(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(f,p)=>{const g=Ke(f,s);i=i||yn(p,g),o=o||Sn(p)});let a=t.syncPointTree_.get(s);a?(o=o||Sn(a),i=i||yn(a,ie())):(a=new l_,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;i!=null?l=!0:(l=!1,i=K.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((p,g)=>{const _=yn(g,ie());_&&(i=i.updateImmediateChild(p,_))}));const c=f_(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=oa(e);T(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=gk();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const u=sa(t.pendingWriteTree_,s);let d=rk(a,e,n,u,i,l);if(!c&&!o&&!r){const f=d_(a,e);d=d.concat(mk(t,e,f))}return d}function fu(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ke(o,e),c=yn(a,l);if(c)return c});return n_(s,e,i,n,!0)}function fk(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=Ke(c,n);r=r||yn(u,d)});let s=t.syncPointTree_.get(n);s?r=r||yn(s,ie()):(s=new l_,t.syncPointTree_=t.syncPointTree_.set(n,s));const i=r!=null,o=i?new Tn(r,!0,!1):null,a=sa(t.pendingWriteTree_,e._path),l=c_(s,e,a,i?o.getNode():K.EMPTY_NODE,i);return QP(l)}function _i(t,e){return g_(e,t.syncPointTree_,null,sa(t.pendingWriteTree_,ie()))}function g_(t,e,n,r){if(X(t.path))return m_(t,e,n,r);{const s=e.get(ie());n==null&&s!=null&&(n=yn(s,ie()));let i=[];const o=J(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=r_(r,o);i=i.concat(g_(a,l,c,u))}return s&&(i=i.concat(du(s,t,r,n))),i}}function m_(t,e,n,r){const s=e.get(ie());n==null&&s!=null&&(n=yn(s,ie()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=r_(r,o),u=t.operationForChild(o);u&&(i=i.concat(m_(u,a,l,c)))}),s&&(i=i.concat(du(s,t,r,n))),i}function __(t,e){const n=e.query,r=oi(t,n);return{hashFn:()=>(YP(e)||K.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?uk(t,n._path,r):ck(t,n._path);{const i=dA(s,n);return To(t,n,null,i)}}}}function oi(t,e){const n=oa(e);return t.queryToTagMap.get(n)}function oa(t){return t._path.toString()+"$"+t._queryIdentifier}function hu(t,e){return t.tagToQueryMap.get(e)}function pu(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new fe(t.substr(0,e))}}function gu(t,e,n){const r=t.syncPointTree_.get(e);T(r,"Missing sync point for query tag that we're tracking");const s=sa(t.pendingWriteTree_,e);return du(r,n,s,null)}function hk(t){return t.fold((e,n,r)=>{if(n&&Sn(n))return[ia(n)];{let s=[];return n&&(s=u_(n)),et(r,(i,o)=>{s=s.concat(o)}),s}})}function Ls(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(ok())(t._repo,t._path):t}function pk(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=oa(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function gk(){return ak++}function mk(t,e,n){const r=e._path,s=oi(t,e),i=__(t,n),o=t.listenProvider_.startListening(Ls(e),s,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(r);if(s)T(!Sn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!X(c)&&u&&Sn(u))return[ia(u).query];{let f=[];return u&&(f=f.concat(u_(u).map(p=>p.query))),et(d,(p,g)=>{f=f.concat(g)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Ls(u),oi(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new mu(n)}node(){return this.node_}}class _u{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ne(this.path_,e);return new _u(this.syncTree_,n)}node(){return fu(this.syncTree_,this.path_)}}const _k=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},dh=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return vk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return yk(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},vk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},yk=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&T(!1,"Unexpected increment value: "+r);const s=e.node();if(T(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},bk=function(t,e,n,r){return vu(e,new _u(n,t),r)},v_=function(t,e,n){return vu(t,new mu(e),n)};function vu(t,e,n){const r=t.getPriority().val(),s=dh(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=dh(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Me(a,Le(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Me(s))),o.forEachChild(Ce,(a,l)=>{const c=vu(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function bu(t,e){let n=e instanceof fe?e:new fe(e),r=t,s=J(n);for(;s!==null;){const i=Hr(r.node.children,s)||{children:{},childCount:0};r=new yu(s,r,i),n=ve(n),s=J(n)}return r}function cs(t){return t.node.value}function y_(t,e){t.node.value=e,Vl(t)}function b_(t){return t.node.childCount>0}function wk(t){return cs(t)===void 0&&!b_(t)}function aa(t,e){et(t.node.children,(n,r)=>{e(new yu(n,t,r))})}function w_(t,e,n,r){n&&!r&&e(t),aa(t,s=>{w_(s,e,!0,r)}),n&&r&&e(t)}function Ek(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function vi(t){return new fe(t.parent===null?t.name:vi(t.parent)+"/"+t.name)}function Vl(t){t.parent!==null&&Ik(t.parent,t.name,t)}function Ik(t,e,n){const r=wk(n),s=Dt(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Vl(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Vl(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck=/[\[\].#$\/\u0000-\u001F\u007F]/,Tk=/[\[\].#$\u0000-\u001F\u007F]/,ja=10*1024*1024,wu=function(t){return typeof t=="string"&&t.length!==0&&!Ck.test(t)},E_=function(t){return typeof t=="string"&&t.length!==0&&!Tk.test(t)},Sk=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),E_(t)},fh=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Yc(t)||t&&typeof t=="object"&&Dt(t,".sv")},yi=function(t,e,n,r){r&&e===void 0||Eu(qo(t,"value"),e,n)},Eu=function(t,e,n){const r=n instanceof fe?new VA(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Un(r));if(typeof e=="function")throw new Error(t+"contains a function "+Un(r)+" with contents = "+e.toString());if(Yc(e))throw new Error(t+"contains "+e.toString()+" "+Un(r));if(typeof e=="string"&&e.length>ja/3&&Go(e)>ja)throw new Error(t+"contains a string greater than "+ja+" utf8 bytes "+Un(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(et(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!wu(o)))throw new Error(t+" contains an invalid key ("+o+") "+Un(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);KA(r,o),Eu(t,a,r),zA(r)}),s&&i)throw new Error(t+' contains ".value" child '+Un(r)+" in addition to actual children.")}},Rk=function(t,e,n,r){if(!(r&&n===void 0)&&!wu(n))throw new Error(qo(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Iu=function(t,e,n,r){if(!(r&&n===void 0)&&!E_(n))throw new Error(qo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Ak=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Iu(t,e,n,r)},Cu=function(t,e){if(J(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Pk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!wu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Sk(n))throw new Error(qo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Tu(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!eu(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function I_(t,e,n){Tu(t,n),C_(t,r=>eu(r,e))}function Mt(t,e,n){Tu(t,n),C_(t,r=>_t(r,e)||_t(e,r))}function C_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(xk(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function xk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Gn&&je("event: "+n.toString()),ls(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk="repo_interrupt",Ok=25;class Mk{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new kk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_o(),this.transactionQueueTree_=new yu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Dk(t,e,n){if(t.stats_=Xc(t.repoInfo_),t.forceRestClient_||gA())t.server_=new mo(t.repoInfo_,(r,s,i,o)=>{hh(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ph(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{xe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Kt(t.repoInfo_,e,(r,s,i,o)=>{hh(t,r,s,i,o)},r=>{ph(t,r)},r=>{Lk(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=bA(t.repoInfo_,()=>new yP(t.stats_,t.server_)),t.infoData_=new pP,t.infoSyncTree_=new uh({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=mi(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ru(t,"connected",!1),t.serverSyncTree_=new uh({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const c=o(a,l);Mt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function T_(t){const n=t.infoData_.getNode(new fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Su(t){return _k({timestamp:T_(t)})}function hh(t,e,n,r,s){t.dataUpdateCount++;const i=new fe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=ro(n,c=>Le(c));o=dk(t.serverSyncTree_,i,l,s)}else{const l=Le(n);o=p_(t.serverSyncTree_,i,l,s)}else if(r){const l=ro(n,c=>Le(c));o=lk(t.serverSyncTree_,i,l)}else{const l=Le(n);o=mi(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=ca(t,i)),Mt(t.eventQueue_,a,o)}function ph(t,e){Ru(t,"connected",e),e===!1&&$k(t)}function Lk(t,e){et(e,(n,r)=>{Ru(t,n,r)})}function Ru(t,e,n){const r=new fe("/.info/"+e),s=Le(n);t.infoData_.updateSnapshot(r,s);const i=mi(t.infoSyncTree_,r,s);Mt(t.eventQueue_,r,i)}function S_(t){return t.nextWriteId_++}function Fk(t,e,n){const r=fk(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const i=Le(s).withIndex(e._queryParams.getIndex());Wl(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=mi(t.serverSyncTree_,e._path,i);else{const a=oi(t.serverSyncTree_,e);o=p_(t.serverSyncTree_,e._path,i,a)}return Mt(t.eventQueue_,e._path,o),To(t.serverSyncTree_,e,n,null,!0),i},s=>(la(t,"get for query "+xe(e)+" failed: "+s),Promise.reject(new Error(s))))}function Uk(t,e,n,r,s){la(t,"set",{path:e.toString(),value:n,priority:r});const i=Su(t),o=Le(n,r),a=fu(t.serverSyncTree_,e),l=v_(o,a,i),c=S_(t),u=h_(t.serverSyncTree_,e,l,c,!0);Tu(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,p)=>{const g=f==="ok";g||Xe("set at "+e+" failed: "+f);const _=Vn(t.serverSyncTree_,c,!g);Mt(t.eventQueue_,e,_),Hk(t,s,f,p)});const d=x_(t,e);ca(t,d),Mt(t.eventQueue_,d,[])}function $k(t){la(t,"onDisconnectEvents");const e=Su(t),n=_o();Ul(t.onDisconnect_,ie(),(s,i)=>{const o=bk(s,i,t.serverSyncTree_,e);Jm(n,s,o)});let r=[];Ul(n,ie(),(s,i)=>{r=r.concat(mi(t.serverSyncTree_,s,i));const o=x_(t,s);ca(t,o)}),t.onDisconnect_=_o(),Mt(t.eventQueue_,ie(),r)}function Bk(t,e,n){let r;J(e._path)===".info"?r=Wl(t.infoSyncTree_,e,n):r=Wl(t.serverSyncTree_,e,n),I_(t.eventQueue_,e._path,r)}function gh(t,e,n){let r;J(e._path)===".info"?r=To(t.infoSyncTree_,e,n):r=To(t.serverSyncTree_,e,n),I_(t.eventQueue_,e._path,r)}function jk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Nk)}function la(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),je(n,...e)}function Hk(t,e,n,r){e&&ls(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function R_(t,e,n){return fu(t.serverSyncTree_,e,n)||K.EMPTY_NODE}function Au(t,e=t.transactionQueueTree_){if(e||ua(t,e),cs(e)){const n=P_(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&Wk(t,vi(e),n)}else b_(e)&&aa(e,n=>{Au(t,n)})}function Wk(t,e,n){const r=n.map(c=>c.currentWriteId),s=R_(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Ke(e,u.path);i=i.updateChild(d,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{la(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Vn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();ua(t,bu(t.transactionQueueTree_,e)),Au(t,t.transactionQueueTree_),Mt(t.eventQueue_,e,u);for(let f=0;f<d.length;f++)ls(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Xe("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}ca(t,e)}},o)}function ca(t,e){const n=A_(t,e),r=vi(n),s=P_(t,n);return Vk(t,s,r),r}function Vk(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ke(n,l.path);let u=!1,d;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,s=s.concat(Vn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Ok)u=!0,d="maxretry",s=s.concat(Vn(t.serverSyncTree_,l.currentWriteId,!0));else{const f=R_(t,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){Eu("transaction failed: Data returned ",p,l.path);let g=Le(p);typeof p=="object"&&p!=null&&Dt(p,".priority")||(g=g.updatePriority(f.getPriority()));const v=l.currentWriteId,I=Su(t),S=v_(g,f,I);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=S,l.currentWriteId=S_(t),o.splice(o.indexOf(v),1),s=s.concat(h_(t.serverSyncTree_,l.path,S,l.currentWriteId,l.applyLocally)),s=s.concat(Vn(t.serverSyncTree_,v,!0))}else u=!0,d="nodata",s=s.concat(Vn(t.serverSyncTree_,l.currentWriteId,!0))}Mt(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}ua(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ls(r[a]);Au(t,t.transactionQueueTree_)}function A_(t,e){let n,r=t.transactionQueueTree_;for(n=J(e);n!==null&&cs(r)===void 0;)r=bu(r,n),e=ve(e),n=J(e);return r}function P_(t,e){const n=[];return k_(t,e,n),n.sort((r,s)=>r.order-s.order),n}function k_(t,e,n){const r=cs(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);aa(e,s=>{k_(t,s,n)})}function ua(t,e){const n=cs(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,y_(e,n.length>0?n:void 0)}aa(e,r=>{ua(t,r)})}function x_(t,e){const n=vi(A_(t,e)),r=bu(t.transactionQueueTree_,e);return Ek(r,s=>{Ha(t,s)}),Ha(t,r),w_(r,s=>{Ha(t,s)}),n}function Ha(t,e){const n=cs(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Vn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?y_(e,void 0):n.length=i+1,Mt(t.eventQueue_,vi(e),s);for(let o=0;o<r.length;o++)ls(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kk(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function zk(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Xe(`Invalid query segment '${n}' in query '${t}'`)}return e}const mh=function(t,e){const n=qk(t),r=n.namespace;n.domain==="firebase.com"&&Qt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Qt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||oA();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new xm(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new fe(n.pathString)}},qk=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(s=Kk(t.substring(u,d)));const f=zk(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),i=r}"ns"in f&&(i=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Gk=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=_h.charAt(n%64),n=Math.floor(n/64);T(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=_h.charAt(e[s]);return T(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+xe(this.snapshot.exportVal())}}class O_{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class us{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return X(this._path)?null:Bm(this._path)}get ref(){return new Lt(this._repo,this._path)}get _queryIdentifier(){const e=Zf(this._queryParams),n=Qc(e);return n==="{}"?"default":n}get _queryObject(){return Zf(this._queryParams)}isEqual(e){if(e=We(e),!(e instanceof us))return!1;const n=this._repo===e._repo,r=eu(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+WA(this._path)}}function Yk(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Pu(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Yn){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==rr)throw new Error(r);if(typeof e!="string")throw new Error(s)}if(t.hasEnd()){if(t.getIndexEndName()!==In)throw new Error(r);if(typeof n!="string")throw new Error(s)}}else if(t.getIndex()===Ce){if(e!=null&&!fh(e)||n!=null&&!fh(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(T(t.getIndex()instanceof ru||t.getIndex()===Ym,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function D_(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Lt extends us{constructor(e,n){super(e,n,new iu,!1)}get parent(){const e=Hm(this._path);return e===null?null:new Lt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class qr{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new fe(e),r=Gr(this.ref,e);return new qr(this._node.getChild(n),r,Ce)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new qr(s,Gr(this.ref,r),Ce)))}hasChild(e){const n=new fe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Wa(t,e){return t=We(t),t._checkNotDeleted("ref"),e!==void 0?Gr(t._root,e):t._root}function Gr(t,e){return t=We(t),J(t._path)===null?Ak("child","path",e,!1):Iu("child","path",e,!1),new Lt(t._repo,Ne(t._path,e))}function Qk(t,e){t=We(t),Cu("push",t._path),yi("push",e,t._path,!0);const n=T_(t._repo),r=Gk(n),s=Gr(t,r),i=Gr(t,r);let o;return e!=null?o=ku(i,e).then(()=>i):o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function Jk(t){return Cu("remove",t._path),ku(t,null)}function ku(t,e){t=We(t),Cu("set",t._path),yi("set",e,t._path,!1);const n=new zo;return Uk(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Mx(t){t=We(t);const e=new M_(()=>{}),n=new da(e);return Fk(t._repo,t,n).then(r=>new qr(r,new Lt(t._repo,t._path),t._queryParams.getIndex()))}class da{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new N_("value",this,new qr(e.snapshotNode,new Lt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new O_(this,e,n):null}matches(e){return e instanceof da?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class xu{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new O_(this,e,n):null}createEvent(e,n){T(e.childName!=null,"Child events should have a childName.");const r=Gr(new Lt(n._repo,n._path),e.childName),s=n._queryParams.getIndex();return new N_(e.type,this,new qr(e.snapshotNode,r,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof xu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Xk(t,e,n,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const l=n,c=(u,d)=>{gh(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new M_(n,i||void 0),a=e==="value"?new da(o):new xu(e,o);return Bk(t._repo,t,a),()=>gh(t._repo,t,a)}function Zk(t,e,n,r){return Xk(t,"value",e,n,r)}class fa{}class ex extends fa{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){yi("endAt",this._value,e._path,!0);const n=fP(e._queryParams,this._value,this._key);if(D_(n),Pu(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new us(e._repo,e._path,n,e._orderByCalled)}}class tx extends fa{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){yi("startAt",this._value,e._path,!0);const n=dP(e._queryParams,this._value,this._key);if(D_(n),Pu(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new us(e._repo,e._path,n,e._orderByCalled)}}class nx extends fa{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){Yk(e,"orderByChild");const n=new fe(this._path);if(X(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new ru(n),s=hP(e._queryParams,r);return Pu(s),new us(e._repo,e._path,s,!0)}}function Dx(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Iu("orderByChild","path",t,!1),new nx(t)}class rx extends fa{constructor(e,n){super(),this._value=e,this._key=n,this.type="equalTo"}_apply(e){if(yi("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new ex(this._value,this._key)._apply(new tx(this._value,this._key)._apply(e))}}function Lx(t,e){return Rk("equalTo","key",e,!0),new rx(t,e)}function Fx(t,...e){let n=We(t);for(const r of e)n=r._apply(n);return n}ek(Lt);ik(Lt);/**
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
 */const sx="FIREBASE_DATABASE_EMULATOR_HOST",Kl={};let ix=!1;function ox(t,e,n,r){t.repoInfo_=new xm(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function ax(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||Qt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),je("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=mh(i,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[sx]),c?(l=!0,i=`http://${c}?ns=${a.namespace}`,o=mh(i,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Mr(Mr.OWNER):new _A(t.name,t.options,e);Pk("Invalid Firebase Database URL",o),X(o.path)||Qt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=cx(a,t,u,new mA(t,n));return new ux(d,t)}function lx(t,e){const n=Kl[e];(!n||n[t.key]!==t)&&Qt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),jk(t),delete n[t.key]}function cx(t,e,n,r){let s=Kl[e.name];s||(s={},Kl[e.name]=s);let i=s[t.toURLString()];return i&&Qt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new Mk(t,ix,n,r),s[t.toURLString()]=i,i}class ux{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Dk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Lt(this._repo,ie())),this._rootInternal}_delete(){return this._rootInternal!==null&&(lx(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Qt("Cannot call "+e+" on a deleted database.")}}function L_(t=ig(),e){const n=xc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=AI("database");r&&dx(n,...r)}return n}function dx(t,e,n,r={}){t=We(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Qt("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Qt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new Mr(Mr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:PI(r.mockUserToken,t.app.options.projectId);i=new Mr(o)}ox(s,e,n,i)}/**
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
 */function fx(t){tA(rs),Wr(new er("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return ax(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),_n(Lf,Ff,t),_n(Lf,Ff,"esm2017")}Kt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Kt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};fx();const hx={apiKey:"AIzaSyD6rOiOiFAkse6Y3_hdzvP-Z1zRv20wrJg",authDomain:"taskproject-caf25.firebaseapp.com",projectId:"taskproject-caf25",storageBucket:"taskproject-caf25.firebasestorage.app",messagingSenderId:"1061401138693",appId:"1:1061401138693:web:03fc3339b03b4cb79eee6c",databaseURL:"https://taskproject-caf25-default-rtdb.firebaseio.com/"};Nc(hx);const Va=L_(),px={async refreshTasks(t){const e=Wa(Va,"tasks");Zk(e,n=>{const r=n.val();t.commit("setTasks",r)})},async submitData(t,e){const n=e.toString();if(n!==""){const r=Wa(Va,"tasks"),s=Qk(r),i=Wg().currentUser;if(!i){console.error("Usuário não autenticado");return}await ku(s,{taskText:n,userUID:i.uid})}},async deleteTask(t,e){const n=e.toString(),r=Wa(Va,"tasks/"+n);Jk(r).then(()=>{console.log("Remove succeeded.")}).catch(s=>{console.error("Remove failed: "+s.message)})}},gx={taskArray(t){return t.taskArray},taskText(t){return t.taskText}},mx={setTasks(t,e){t.taskArray=e,console.log(t.taskArray)},registerTasks(t,e){t.taskArray.push(e)}},_x={namespace:!0,state(){return{taskArray:[],taskText:""}},actions:px,getters:gx,mutations:mx},vx=XR({modules:{task:_x}});const yx={},bx={class:"min-h-screen dark:bg-gray-900"};function wx(t,e){const n=ft("router-view");return Et(),Rn("div",bx,[pe(n)])}const Ex=An(yx,[["render",wx]]),Ix={},Cx={class:"bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow dark:bg-sky-800 dark:text-white"};function Tx(t,e){return Et(),Rn("div",null,[_e("button",Cx,[Lo(t.$slots,"default")])])}const Sx=An(Ix,[["render",Tx]]),Rx={apiKey:"AIzaSyD6rOiOiFAkse6Y3_hdzvP-Z1zRv20wrJg",authDomain:"taskproject-caf25.firebaseapp.com",projectId:"taskproject-caf25",storageBucket:"taskproject-caf25.firebasestorage.app",messagingSenderId:"1061401138693",appId:"1:1061401138693:web:03fc3339b03b4cb79eee6c",databaseURL:"https://taskproject-caf25-default-rtdb.firebaseio.com/"},ds=Cb(Ex);Nc(Rx);L_();ds.component("content-box",om);ds.component("base-button",Sx);ds.use(jb);ds.use(vx);ds.use(DR);ds.mount("#app");export{uc as A,Vg as B,kx as C,Nx as D,Gr as E,$e as F,Mx as G,Jk as H,zp as I,$s as J,za as K,An as _,sE as a,ft as b,Et as c,Rn as d,pe as e,Lo as f,_e as g,qu as h,xx as i,Wg as j,Px as k,Q0 as l,_R as m,oR as n,Qh as o,Ax as p,L_ as q,re as r,Fx as s,Lx as t,Ox as u,il as v,gt as w,Dx as x,Wa as y,Zk as z};
