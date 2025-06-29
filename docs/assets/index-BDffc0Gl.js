const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TaskBody-DMICY_Cd.js","assets/TaskBody-Cb_jpjkD.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Oc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ee={},Hr=[],Qt=()=>{},qv=()=>!1,da=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Nc=t=>t.startsWith("onUpdate:"),Ge=Object.assign,Lc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},zv=Object.prototype.hasOwnProperty,me=(t,e)=>zv.call(t,e),G=Array.isArray,Br=t=>Ni(t)==="[object Map]",hs=t=>Ni(t)==="[object Set]",gd=t=>Ni(t)==="[object Date]",te=t=>typeof t=="function",Le=t=>typeof t=="string",Dt=t=>typeof t=="symbol",ye=t=>t!==null&&typeof t=="object",sp=t=>(ye(t)||te(t))&&te(t.then)&&te(t.catch),ip=Object.prototype.toString,Ni=t=>ip.call(t),Yv=t=>Ni(t).slice(8,-1),op=t=>Ni(t)==="[object Object]",Mc=t=>Le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Gs=Oc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Qv=/-(\w)/g,At=fa(t=>t.replace(Qv,(e,n)=>n?n.toUpperCase():"")),Jv=/\B([A-Z])/g,er=fa(t=>t.replace(Jv,"-$1").toLowerCase()),ha=fa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ya=fa(t=>t?`on${ha(t)}`:""),Bn=(t,e)=>!Object.is(t,e),ho=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Nl=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},To=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Xv=t=>{const e=Le(t)?Number(t):NaN;return isNaN(e)?t:e};let md;const pa=()=>md||(md=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Dc(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Le(r)?ny(r):Dc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Le(t)||ye(t))return t}const Zv=/;(?![^(]*\))/g,ey=/:([^]+)/,ty=/\/\*[^]*?\*\//g;function ny(t){const e={};return t.replace(ty,"").split(Zv).forEach(n=>{if(n){const r=n.split(ey);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function mn(t){let e="";if(Le(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const r=mn(t[n]);r&&(e+=r+" ")}else if(ye(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ry="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sy=Oc(ry);function ap(t){return!!t||t===""}function iy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=yr(t[r],e[r]);return n}function yr(t,e){if(t===e)return!0;let n=gd(t),r=gd(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Dt(t),r=Dt(e),n||r)return t===e;if(n=G(t),r=G(e),n||r)return n&&r?iy(t,e):!1;if(n=ye(t),r=ye(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!yr(t[o],e[o]))return!1}}return String(t)===String(e)}function Fc(t,e){return t.findIndex(n=>yr(n,e))}const lp=t=>!!(t&&t.__v_isRef===!0),jn=t=>Le(t)?t:t==null?"":G(t)||ye(t)&&(t.toString===ip||!te(t.toString))?lp(t)?jn(t.value):JSON.stringify(t,cp,2):String(t),cp=(t,e)=>lp(e)?cp(t,e.value):Br(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Qa(r,i)+" =>"]=s,n),{})}:hs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Qa(n))}:Dt(e)?Qa(e):ye(e)&&!G(e)&&!op(e)?String(e):e,Qa=(t,e="")=>{var n;return Dt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qe;class up{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Qe,!e&&Qe&&(this.index=(Qe.scopes||(Qe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Qe;try{return Qe=this,e()}finally{Qe=n}}}on(){++this._on===1&&(this.prevScope=Qe,Qe=this)}off(){this._on>0&&--this._on===0&&(Qe=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function oy(t){return new up(t)}function dp(){return Qe}function ay(t,e=!1){Qe&&Qe.cleanups.push(t)}let Ie;const Ja=new WeakSet;class fp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qe&&Qe.active&&Qe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ja.has(this)&&(Ja.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||pp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_d(this),gp(this);const e=Ie,n=Lt;Ie=this,Lt=!0;try{return this.fn()}finally{mp(this),Ie=e,Lt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)jc(e);this.deps=this.depsTail=void 0,_d(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ja.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ll(this)&&this.run()}get dirty(){return Ll(this)}}let hp=0,Ks,qs;function pp(t,e=!1){if(t.flags|=8,e){t.next=qs,qs=t;return}t.next=Ks,Ks=t}function Uc(){hp++}function $c(){if(--hp>0)return;if(qs){let e=qs;for(qs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ks;){let e=Ks;for(Ks=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function gp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function mp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),jc(r),ly(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Ll(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(_p(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function _p(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ai)||(t.globalVersion=ai,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ll(t))))return;t.flags|=2;const e=t.dep,n=Ie,r=Lt;Ie=t,Lt=!0;try{gp(t);const s=t.fn(t._value);(e.version===0||Bn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ie=n,Lt=r,mp(t),t.flags&=-3}}function jc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)jc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ly(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Lt=!0;const vp=[];function _n(){vp.push(Lt),Lt=!1}function vn(){const t=vp.pop();Lt=t===void 0?!0:t}function _d(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ie;Ie=void 0;try{e()}finally{Ie=n}}}let ai=0;class cy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ga{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ie||!Lt||Ie===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ie)n=this.activeLink=new cy(Ie,this),Ie.deps?(n.prevDep=Ie.depsTail,Ie.depsTail.nextDep=n,Ie.depsTail=n):Ie.deps=Ie.depsTail=n,yp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ie.depsTail,n.nextDep=void 0,Ie.depsTail.nextDep=n,Ie.depsTail=n,Ie.deps===n&&(Ie.deps=r)}return n}trigger(e){this.version++,ai++,this.notify(e)}notify(e){Uc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{$c()}}}function yp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)yp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ao=new WeakMap,mr=Symbol(""),Ml=Symbol(""),li=Symbol("");function Je(t,e,n){if(Lt&&Ie){let r=Ao.get(t);r||Ao.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new ga),s.map=r,s.key=n),s.track()}}function an(t,e,n,r,s,i){const o=Ao.get(t);if(!o){ai++;return}const a=l=>{l&&l.trigger()};if(Uc(),e==="clear")o.forEach(a);else{const l=G(t),c=l&&Mc(n);if(l&&n==="length"){const u=Number(r);o.forEach((d,f)=>{(f==="length"||f===li||!Dt(f)&&f>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(li)),e){case"add":l?c&&a(o.get("length")):(a(o.get(mr)),Br(t)&&a(o.get(Ml)));break;case"delete":l||(a(o.get(mr)),Br(t)&&a(o.get(Ml)));break;case"set":Br(t)&&a(o.get(mr));break}}$c()}function uy(t,e){const n=Ao.get(t);return n&&n.get(e)}function Or(t){const e=fe(t);return e===t?e:(Je(e,"iterate",li),St(t)?e:e.map(qe))}function ma(t){return Je(t=fe(t),"iterate",li),t}const dy={__proto__:null,[Symbol.iterator](){return Xa(this,Symbol.iterator,qe)},concat(...t){return Or(this).concat(...t.map(e=>G(e)?Or(e):e))},entries(){return Xa(this,"entries",t=>(t[1]=qe(t[1]),t))},every(t,e){return nn(this,"every",t,e,void 0,arguments)},filter(t,e){return nn(this,"filter",t,e,n=>n.map(qe),arguments)},find(t,e){return nn(this,"find",t,e,qe,arguments)},findIndex(t,e){return nn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return nn(this,"findLast",t,e,qe,arguments)},findLastIndex(t,e){return nn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return nn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Za(this,"includes",t)},indexOf(...t){return Za(this,"indexOf",t)},join(t){return Or(this).join(t)},lastIndexOf(...t){return Za(this,"lastIndexOf",t)},map(t,e){return nn(this,"map",t,e,void 0,arguments)},pop(){return Rs(this,"pop")},push(...t){return Rs(this,"push",t)},reduce(t,...e){return vd(this,"reduce",t,e)},reduceRight(t,...e){return vd(this,"reduceRight",t,e)},shift(){return Rs(this,"shift")},some(t,e){return nn(this,"some",t,e,void 0,arguments)},splice(...t){return Rs(this,"splice",t)},toReversed(){return Or(this).toReversed()},toSorted(t){return Or(this).toSorted(t)},toSpliced(...t){return Or(this).toSpliced(...t)},unshift(...t){return Rs(this,"unshift",t)},values(){return Xa(this,"values",qe)}};function Xa(t,e,n){const r=ma(t),s=r[e]();return r!==t&&!St(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const fy=Array.prototype;function nn(t,e,n,r,s,i){const o=ma(t),a=o!==t&&!St(t),l=o[e];if(l!==fy[e]){const d=l.apply(t,i);return a?qe(d):d}let c=n;o!==t&&(a?c=function(d,f){return n.call(this,qe(d),f,t)}:n.length>2&&(c=function(d,f){return n.call(this,d,f,t)}));const u=l.call(o,c,r);return a&&s?s(u):u}function vd(t,e,n,r){const s=ma(t);let i=n;return s!==t&&(St(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,qe(a),l,t)}),s[e](i,...r)}function Za(t,e,n){const r=fe(t);Je(r,"iterate",li);const s=r[e](...n);return(s===-1||s===!1)&&Vc(n[0])?(n[0]=fe(n[0]),r[e](...n)):s}function Rs(t,e,n=[]){_n(),Uc();const r=fe(t)[e].apply(t,n);return $c(),vn(),r}const hy=Oc("__proto__,__v_isRef,__isVue"),bp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dt));function py(t){Dt(t)||(t=String(t));const e=fe(this);return Je(e,"has",t),e.hasOwnProperty(t)}class wp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Iy:Sp:i?Ip:Cp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=G(e);if(!s){let l;if(o&&(l=dy[n]))return l;if(n==="hasOwnProperty")return py}const a=Reflect.get(e,n,Me(e)?e:r);return(Dt(n)?bp.has(n):hy(n))||(s||Je(e,"get",n),i)?a:Me(a)?o&&Mc(n)?a:a.value:ye(a)?s?_a(a):ps(a):a}}class Ep extends wp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=zn(i);if(!St(r)&&!zn(r)&&(i=fe(i),r=fe(r)),!G(e)&&Me(i)&&!Me(r))return l?!1:(i.value=r,!0)}const o=G(e)&&Mc(n)?Number(n)<e.length:me(e,n),a=Reflect.set(e,n,r,Me(e)?e:s);return e===fe(s)&&(o?Bn(r,i)&&an(e,"set",n,r):an(e,"add",n,r)),a}deleteProperty(e,n){const r=me(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&an(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Dt(n)||!bp.has(n))&&Je(e,"has",n),r}ownKeys(e){return Je(e,"iterate",G(e)?"length":mr),Reflect.ownKeys(e)}}class gy extends wp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const my=new Ep,_y=new gy,vy=new Ep(!0);const Dl=t=>t,Xi=t=>Reflect.getPrototypeOf(t);function yy(t,e,n){return function(...r){const s=this.__v_raw,i=fe(s),o=Br(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?Dl:e?ko:qe;return!e&&Je(i,"iterate",l?Ml:mr),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function Zi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function by(t,e){const n={get(s){const i=this.__v_raw,o=fe(i),a=fe(s);t||(Bn(s,a)&&Je(o,"get",s),Je(o,"get",a));const{has:l}=Xi(o),c=e?Dl:t?ko:qe;if(l.call(o,s))return c(i.get(s));if(l.call(o,a))return c(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Je(fe(s),"iterate",mr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=fe(i),a=fe(s);return t||(Bn(s,a)&&Je(o,"has",s),Je(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,l=fe(a),c=e?Dl:t?ko:qe;return!t&&Je(l,"iterate",mr),a.forEach((u,d)=>s.call(i,c(u),c(d),o))}};return Ge(n,t?{add:Zi("add"),set:Zi("set"),delete:Zi("delete"),clear:Zi("clear")}:{add(s){!e&&!St(s)&&!zn(s)&&(s=fe(s));const i=fe(this);return Xi(i).has.call(i,s)||(i.add(s),an(i,"add",s,s)),this},set(s,i){!e&&!St(i)&&!zn(i)&&(i=fe(i));const o=fe(this),{has:a,get:l}=Xi(o);let c=a.call(o,s);c||(s=fe(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,i),c?Bn(i,u)&&an(o,"set",s,i):an(o,"add",s,i),this},delete(s){const i=fe(this),{has:o,get:a}=Xi(i);let l=o.call(i,s);l||(s=fe(s),l=o.call(i,s)),a&&a.call(i,s);const c=i.delete(s);return l&&an(i,"delete",s,void 0),c},clear(){const s=fe(this),i=s.size!==0,o=s.clear();return i&&an(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=yy(s,t,e)}),n}function Hc(t,e){const n=by(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(me(n,s)&&s in r?n:r,s,i)}const wy={get:Hc(!1,!1)},Ey={get:Hc(!1,!0)},Cy={get:Hc(!0,!1)};const Cp=new WeakMap,Ip=new WeakMap,Sp=new WeakMap,Iy=new WeakMap;function Sy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ty(t){return t.__v_skip||!Object.isExtensible(t)?0:Sy(Yv(t))}function ps(t){return zn(t)?t:Bc(t,!1,my,wy,Cp)}function Tp(t){return Bc(t,!1,vy,Ey,Ip)}function _a(t){return Bc(t,!0,_y,Cy,Sp)}function Bc(t,e,n,r,s){if(!ye(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Ty(t);if(i===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,i===2?r:n);return s.set(t,a),a}function Vr(t){return zn(t)?Vr(t.__v_raw):!!(t&&t.__v_isReactive)}function zn(t){return!!(t&&t.__v_isReadonly)}function St(t){return!!(t&&t.__v_isShallow)}function Vc(t){return t?!!t.__v_raw:!1}function fe(t){const e=t&&t.__v_raw;return e?fe(e):t}function Ay(t){return!me(t,"__v_skip")&&Object.isExtensible(t)&&Nl(t,"__v_skip",!0),t}const qe=t=>ye(t)?ps(t):t,ko=t=>ye(t)?_a(t):t;function Me(t){return t?t.__v_isRef===!0:!1}function q(t){return Ap(t,!1)}function Wc(t){return Ap(t,!0)}function Ap(t,e){return Me(t)?t:new ky(t,e)}class ky{constructor(e,n){this.dep=new ga,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:fe(e),this._value=n?e:qe(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||St(e)||zn(e);e=r?e:fe(e),Bn(e,n)&&(this._rawValue=e,this._value=r?e:qe(e),this.dep.trigger())}}function de(t){return Me(t)?t.value:t}const Ry={get:(t,e,n)=>e==="__v_raw"?t:de(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Me(s)&&!Me(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function kp(t){return Vr(t)?t:new Proxy(t,Ry)}class Py{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new ga,{get:r,set:s}=e(n.track.bind(n),n.trigger.bind(n));this._get=r,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function xy(t){return new Py(t)}class Oy{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return uy(fe(this._object),this._key)}}class Ny{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Ly(t,e,n){return Me(t)?t:te(t)?new Ny(t):ye(t)&&arguments.length>1?My(t,e,n):q(t)}function My(t,e,n){const r=t[e];return Me(r)?r:new Oy(t,e,n)}class Dy{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ga(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ai-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ie!==this)return pp(this,!0),!0}get value(){const e=this.dep.track();return _p(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Fy(t,e,n=!1){let r,s;return te(t)?r=t:(r=t.get,s=t.set),new Dy(r,s,n)}const eo={},Ro=new WeakMap;let lr;function Uy(t,e=!1,n=lr){if(n){let r=Ro.get(n);r||Ro.set(n,r=[]),r.push(t)}}function $y(t,e,n=Ee){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=n,c=I=>s?I:St(I)||s===!1||s===0?ln(I,1):ln(I);let u,d,f,h,g=!1,_=!1;if(Me(t)?(d=()=>t.value,g=St(t)):Vr(t)?(d=()=>c(t),g=!0):G(t)?(_=!0,g=t.some(I=>Vr(I)||St(I)),d=()=>t.map(I=>{if(Me(I))return I.value;if(Vr(I))return c(I);if(te(I))return l?l(I,2):I()})):te(t)?e?d=l?()=>l(t,2):t:d=()=>{if(f){_n();try{f()}finally{vn()}}const I=lr;lr=u;try{return l?l(t,3,[h]):t(h)}finally{lr=I}}:d=Qt,e&&s){const I=d,H=s===!0?1/0:s;d=()=>ln(I(),H)}const y=dp(),T=()=>{u.stop(),y&&y.active&&Lc(y.effects,u)};if(i&&e){const I=e;e=(...H)=>{I(...H),T()}}let b=_?new Array(t.length).fill(eo):eo;const A=I=>{if(!(!(u.flags&1)||!u.dirty&&!I))if(e){const H=u.run();if(s||g||(_?H.some((x,j)=>Bn(x,b[j])):Bn(H,b))){f&&f();const x=lr;lr=u;try{const j=[H,b===eo?void 0:_&&b[0]===eo?[]:b,h];b=H,l?l(e,3,j):e(...j)}finally{lr=x}}}else u.run()};return a&&a(A),u=new fp(d),u.scheduler=o?()=>o(A,!1):A,h=I=>Uy(I,!1,u),f=u.onStop=()=>{const I=Ro.get(u);if(I){if(l)l(I,4);else for(const H of I)H();Ro.delete(u)}},e?r?A(!0):b=u.run():o?o(A.bind(null,!0),!0):u.run(),T.pause=u.pause.bind(u),T.resume=u.resume.bind(u),T.stop=T,T}function ln(t,e=1/0,n){if(e<=0||!ye(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Me(t))ln(t.value,e,n);else if(G(t))for(let r=0;r<t.length;r++)ln(t[r],e,n);else if(hs(t)||Br(t))t.forEach(r=>{ln(r,e,n)});else if(op(t)){for(const r in t)ln(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&ln(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Li(t,e,n,r){try{return r?t(...r):t()}catch(s){va(s,e,n)}}function Ft(t,e,n,r){if(te(t)){const s=Li(t,e,n,r);return s&&sp(s)&&s.catch(i=>{va(i,e,n)}),s}if(G(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Ft(t[i],e,n,r));return s}}function va(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ee;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(i){_n(),Li(i,null,10,[t,l,c]),vn();return}}jy(t,n,s,r,o)}function jy(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const it=[];let qt=-1;const Wr=[];let xn=null,Dr=0;const Rp=Promise.resolve();let Po=null;function gs(t){const e=Po||Rp;return t?e.then(this?t.bind(this):t):e}function Hy(t){let e=qt+1,n=it.length;for(;e<n;){const r=e+n>>>1,s=it[r],i=ci(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Gc(t){if(!(t.flags&1)){const e=ci(t),n=it[it.length-1];!n||!(t.flags&2)&&e>=ci(n)?it.push(t):it.splice(Hy(e),0,t),t.flags|=1,Pp()}}function Pp(){Po||(Po=Rp.then(Op))}function By(t){G(t)?Wr.push(...t):xn&&t.id===-1?xn.splice(Dr+1,0,t):t.flags&1||(Wr.push(t),t.flags|=1),Pp()}function yd(t,e,n=qt+1){for(;n<it.length;n++){const r=it[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;it.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function xp(t){if(Wr.length){const e=[...new Set(Wr)].sort((n,r)=>ci(n)-ci(r));if(Wr.length=0,xn){xn.push(...e);return}for(xn=e,Dr=0;Dr<xn.length;Dr++){const n=xn[Dr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}xn=null,Dr=0}}const ci=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Op(t){try{for(qt=0;qt<it.length;qt++){const e=it[qt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Li(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;qt<it.length;qt++){const e=it[qt];e&&(e.flags&=-2)}qt=-1,it.length=0,xp(),Po=null,(it.length||Wr.length)&&Op()}}let We=null,Np=null;function xo(t){const e=We;return We=t,Np=t&&t.type.__scopeId||null,e}function ke(t,e=We,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Nd(-1);const i=xo(e);let o;try{o=t(...s)}finally{xo(i),r._d&&Nd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Fl(t,e){if(We===null)return t;const n=Ca(We),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=Ee]=e[s];i&&(te(i)&&(i={mounted:i,updated:i}),i.deep&&ln(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function rr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(_n(),Ft(l,n,8,[t.el,a,t,e]),vn())}}const Lp=Symbol("_vte"),Mp=t=>t.__isTeleport,zs=t=>t&&(t.disabled||t.disabled===""),bd=t=>t&&(t.defer||t.defer===""),wd=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Ed=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Ul=(t,e)=>{const n=t&&t.to;return Le(n)?e?e(n):null:n},Dp={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,a,l,c){const{mc:u,pc:d,pbc:f,o:{insert:h,querySelector:g,createText:_,createComment:y}}=c,T=zs(e.props);let{shapeFlag:b,children:A,dynamicChildren:I}=e;if(t==null){const H=e.el=_(""),x=e.anchor=_("");h(H,n,r),h(x,n,r);const j=(U,R)=>{b&16&&(s&&s.isCE&&(s.ce._teleportTarget=U),u(A,U,R,s,i,o,a,l))},Y=()=>{const U=e.target=Ul(e.props,g),R=Fp(U,e,_,h);U&&(o!=="svg"&&wd(U)?o="svg":o!=="mathml"&&Ed(U)&&(o="mathml"),T||(j(U,R),po(e,!1)))};T&&(j(n,x),po(e,!0)),bd(e.props)?(e.el.__isMounted=!1,st(()=>{Y(),delete e.el.__isMounted},i)):Y()}else{if(bd(e.props)&&t.el.__isMounted===!1){st(()=>{Dp.process(t,e,n,r,s,i,o,a,l,c)},i);return}e.el=t.el,e.targetStart=t.targetStart;const H=e.anchor=t.anchor,x=e.target=t.target,j=e.targetAnchor=t.targetAnchor,Y=zs(t.props),U=Y?n:x,R=Y?H:j;if(o==="svg"||wd(x)?o="svg":(o==="mathml"||Ed(x))&&(o="mathml"),I?(f(t.dynamicChildren,I,U,s,i,o,a),Yc(t,e,!0)):l||d(t,e,U,R,s,i,o,a,!1),T)Y?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):to(e,n,H,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const Q=e.target=Ul(e.props,g);Q&&to(e,Q,null,c,0)}else Y&&to(e,x,j,c,1);po(e,T)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:d,props:f}=t;if(d&&(s(c),s(u)),i&&s(l),o&16){const h=i||!zs(f);for(let g=0;g<a.length;g++){const _=a[g];r(_,e,n,h,!!_.dynamicChildren)}}},move:to,hydrate:Vy};function to(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,d=i===2;if(d&&r(o,e,n),(!d||zs(u))&&l&16)for(let f=0;f<c.length;f++)s(c[f],e,n,2);d&&r(a,e,n)}function Vy(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},d){const f=e.target=Ul(e.props,l);if(f){const h=zs(e.props),g=f._lpa||f.firstChild;if(e.shapeFlag&16)if(h)e.anchor=d(o(t),e,a(t),n,r,s,i),e.targetStart=g,e.targetAnchor=g&&o(g);else{e.anchor=o(t);let _=g;for(;_;){if(_&&_.nodeType===8){if(_.data==="teleport start anchor")e.targetStart=_;else if(_.data==="teleport anchor"){e.targetAnchor=_,f._lpa=e.targetAnchor&&o(e.targetAnchor);break}}_=o(_)}e.targetAnchor||Fp(f,e,u,c),d(g&&o(g),e,f,n,r,s,i)}po(e,h)}return e.anchor&&o(e.anchor)}const Wy=Dp;function po(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Fp(t,e,n,r){const s=e.targetStart=n(""),i=e.targetAnchor=n("");return s[Lp]=i,t&&(r(s,t),r(i,t)),i}const On=Symbol("_leaveCb"),no=Symbol("_enterCb");function Gy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return je(()=>{t.isMounted=!0}),Gp(()=>{t.isUnmounting=!0}),t}const Ct=[Function,Array],Up={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ct,onEnter:Ct,onAfterEnter:Ct,onEnterCancelled:Ct,onBeforeLeave:Ct,onLeave:Ct,onAfterLeave:Ct,onLeaveCancelled:Ct,onBeforeAppear:Ct,onAppear:Ct,onAfterAppear:Ct,onAppearCancelled:Ct},$p=t=>{const e=t.subTree;return e.component?$p(e.component):e},Ky={name:"BaseTransition",props:Up,setup(t,{slots:e}){const n=Mi(),r=Gy();return()=>{const s=e.default&&Bp(e.default(),!0);if(!s||!s.length)return;const i=jp(s),o=fe(t),{mode:a}=o;if(r.isLeaving)return el(i);const l=Cd(i);if(!l)return el(i);let c=$l(l,o,r,n,d=>c=d);l.type!==et&&ui(l,c);let u=n.subTree&&Cd(n.subTree);if(u&&u.type!==et&&!dr(l,u)&&$p(n).type!==et){let d=$l(u,o,r,n);if(ui(u,d),a==="out-in"&&l.type!==et)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},el(i);a==="in-out"&&l.type!==et?d.delayLeave=(f,h,g)=>{const _=Hp(r,u);_[String(u.key)]=u,f[On]=()=>{h(),f[On]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return i}}};function jp(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==et){e=n;break}}return e}const qy=Ky;function Hp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function $l(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:y,onAppear:T,onAfterAppear:b,onAppearCancelled:A}=e,I=String(t.key),H=Hp(n,t),x=(U,R)=>{U&&Ft(U,r,9,R)},j=(U,R)=>{const Q=R[1];x(U,R),G(U)?U.every(L=>L.length<=1)&&Q():U.length<=1&&Q()},Y={mode:o,persisted:a,beforeEnter(U){let R=l;if(!n.isMounted)if(i)R=y||l;else return;U[On]&&U[On](!0);const Q=H[I];Q&&dr(t,Q)&&Q.el[On]&&Q.el[On](),x(R,[U])},enter(U){let R=c,Q=u,L=d;if(!n.isMounted)if(i)R=T||c,Q=b||u,L=A||d;else return;let ne=!1;const Ae=U[no]=xe=>{ne||(ne=!0,xe?x(L,[U]):x(Q,[U]),Y.delayedLeave&&Y.delayedLeave(),U[no]=void 0)};R?j(R,[U,Ae]):Ae()},leave(U,R){const Q=String(t.key);if(U[no]&&U[no](!0),n.isUnmounting)return R();x(f,[U]);let L=!1;const ne=U[On]=Ae=>{L||(L=!0,R(),Ae?x(_,[U]):x(g,[U]),U[On]=void 0,H[Q]===t&&delete H[Q])};H[Q]=t,h?j(h,[U,ne]):ne()},clone(U){const R=$l(U,e,n,r,s);return s&&s(R),R}};return Y}function el(t){if(ya(t))return t=yn(t),t.children=null,t}function Cd(t){if(!ya(t))return Mp(t.type)&&t.children?jp(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&te(n.default))return n.default()}}function ui(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ui(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Bp(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Xe?(o.patchFlag&128&&s++,r=r.concat(Bp(o.children,e,a))):(e||o.type!==et)&&r.push(a!=null?yn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function ct(t,e){return te(t)?Ge({name:t.name},e,{setup:t}):t}function zy(){const t=Mi();return t?(t.appContext.config.idPrefix||"v")+"-"+t.ids[0]+t.ids[1]++:""}function Vp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ys(t,e,n,r,s=!1){if(G(t)){t.forEach((g,_)=>Ys(g,e&&(G(e)?e[_]:e),n,r,s));return}if(Gr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ys(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ca(r.component):r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ee?a.refs={}:a.refs,d=a.setupState,f=fe(d),h=d===Ee?()=>!1:g=>me(f,g);if(c!=null&&c!==l&&(Le(c)?(u[c]=null,h(c)&&(d[c]=null)):Me(c)&&(c.value=null)),te(l))Li(l,a,12,[o,u]);else{const g=Le(l),_=Me(l);if(g||_){const y=()=>{if(t.f){const T=g?h(l)?d[l]:u[l]:l.value;s?G(T)&&Lc(T,i):G(T)?T.includes(i)||T.push(i):g?(u[l]=[i],h(l)&&(d[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else g?(u[l]=o,h(l)&&(d[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,st(y,n)):y()}}}pa().requestIdleCallback;pa().cancelIdleCallback;const Gr=t=>!!t.type.__asyncLoader,ya=t=>t.type.__isKeepAlive;function Yy(t,e){Wp(t,"a",e)}function Qy(t,e){Wp(t,"da",e)}function Wp(t,e,n=ze){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ba(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ya(s.parent.vnode)&&Jy(r,e,n,s),s=s.parent}}function Jy(t,e,n,r){const s=ba(e,t,r,!0);kt(()=>{Lc(r[e],s)},n)}function ba(t,e,n=ze,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{_n();const a=Di(n),l=Ft(e,n,t,o);return a(),vn(),l});return r?s.unshift(i):s.push(i),i}}const Cn=t=>(e,n=ze)=>{(!hi||t==="sp")&&ba(t,(...r)=>e(...r),n)},Xy=Cn("bm"),je=Cn("m"),Zy=Cn("bu"),eb=Cn("u"),Gp=Cn("bum"),kt=Cn("um"),tb=Cn("sp"),nb=Cn("rtg"),rb=Cn("rtc");function sb(t,e=ze){ba("ec",t,e)}const ib="components";function Kc(t,e){return ab(ib,t,!0,e)||t}const ob=Symbol.for("v-ndc");function ab(t,e,n=!0,r=!1){const s=We||ze;if(s){const i=s.type;{const a=qb(i,!1);if(a&&(a===e||a===At(e)||a===ha(At(e))))return i}const o=Id(s[t]||i[t],e)||Id(s.appContext[t],e);return!o&&r?i:o}}function Id(t,e){return t&&(t[e]||t[At(e)]||t[ha(At(e))])}function dO(t,e,n,r){let s;const i=n,o=G(t);if(o||Le(t)){const a=o&&Vr(t);let l=!1,c=!1;a&&(l=!St(t),c=zn(t),t=ma(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(l?c?ko(qe(t[u])):qe(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(ye(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,i)}}else s=[];return s}function Xr(t,e,n={},r,s){if(We.ce||We.parent&&Gr(We.parent)&&We.parent.ce)return e!=="default"&&(n.name=e),Ye(),Zr(Xe,null,[Z("slot",n,r&&r())],64);let i=t[e];i&&i._c&&(i._d=!1),Ye();const o=i&&Kp(i(n)),a=n.key||o&&o.key,l=Zr(Xe,{key:(a&&!Dt(a)?a:`_${e}`)+(!o&&r?"_fb":"")},o||(r?r():[]),o&&t._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function Kp(t){return t.some(e=>fi(e)?!(e.type===et||e.type===Xe&&!Kp(e.children)):!0)?t:null}const jl=t=>t?ug(t)?Ca(t):jl(t.parent):null,Qs=Ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>jl(t.parent),$root:t=>jl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>zp(t),$forceUpdate:t=>t.f||(t.f=()=>{Gc(t.update)}),$nextTick:t=>t.n||(t.n=gs.bind(t.proxy)),$watch:t=>kb.bind(t)}),tl=(t,e)=>t!==Ee&&!t.__isScriptSetup&&me(t,e),lb={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(tl(r,e))return o[e]=1,r[e];if(s!==Ee&&me(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&me(c,e))return o[e]=3,i[e];if(n!==Ee&&me(n,e))return o[e]=4,n[e];Hl&&(o[e]=0)}}const u=Qs[e];let d,f;if(u)return e==="$attrs"&&Je(t.attrs,"get",""),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Ee&&me(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,me(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return tl(s,e)?(s[e]=n,!0):r!==Ee&&me(r,e)?(r[e]=n,!0):me(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ee&&me(t,o)||tl(e,o)||(a=i[0])&&me(a,o)||me(r,o)||me(Qs,o)||me(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:me(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Sd(t){return G(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Hl=!0;function cb(t){const e=zp(t),n=t.proxy,r=t.ctx;Hl=!1,e.beforeCreate&&Td(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:g,activated:_,deactivated:y,beforeDestroy:T,beforeUnmount:b,destroyed:A,unmounted:I,render:H,renderTracked:x,renderTriggered:j,errorCaptured:Y,serverPrefetch:U,expose:R,inheritAttrs:Q,components:L,directives:ne,filters:Ae}=e;if(c&&ub(c,r,null),o)for(const le in o){const ue=o[le];te(ue)&&(r[le]=ue.bind(n))}if(s){const le=s.call(n,n);ye(le)&&(t.data=ps(le))}if(Hl=!0,i)for(const le in i){const ue=i[le],Et=te(ue)?ue.bind(n,n):te(ue.get)?ue.get.bind(n,n):Qt,Rt=!te(ue)&&te(ue.set)?ue.set.bind(n):Qt,oe=V({get:Et,set:Rt});Object.defineProperty(r,le,{enumerable:!0,configurable:!0,get:()=>oe.value,set:ae=>oe.value=ae})}if(a)for(const le in a)qp(a[le],r,n,le);if(l){const le=te(l)?l.call(n):l;Reflect.ownKeys(le).forEach(ue=>{ht(ue,le[ue])})}u&&Td(u,t,"c");function pe(le,ue){G(ue)?ue.forEach(Et=>le(Et.bind(n))):ue&&le(ue.bind(n))}if(pe(Xy,d),pe(je,f),pe(Zy,h),pe(eb,g),pe(Yy,_),pe(Qy,y),pe(sb,Y),pe(rb,x),pe(nb,j),pe(Gp,b),pe(kt,I),pe(tb,U),G(R))if(R.length){const le=t.exposed||(t.exposed={});R.forEach(ue=>{Object.defineProperty(le,ue,{get:()=>n[ue],set:Et=>n[ue]=Et})})}else t.exposed||(t.exposed={});H&&t.render===Qt&&(t.render=H),Q!=null&&(t.inheritAttrs=Q),L&&(t.components=L),ne&&(t.directives=ne),U&&Vp(t)}function ub(t,e,n=Qt){G(t)&&(t=Bl(t));for(const r in t){const s=t[r];let i;ye(s)?"default"in s?i=Pe(s.from||r,s.default,!0):i=Pe(s.from||r):i=Pe(s),Me(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Td(t,e,n){Ft(G(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function qp(t,e,n,r){let s=r.includes(".")?ig(n,r):()=>n[r];if(Le(t)){const i=e[t];te(i)&&tt(s,i)}else if(te(t))tt(s,t.bind(n));else if(ye(t))if(G(t))t.forEach(i=>qp(i,e,n,r));else{const i=te(t.handler)?t.handler.bind(n):e[t.handler];te(i)&&tt(s,i,t)}}function zp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>Oo(l,c,o,!0)),Oo(l,e,o)),ye(e)&&i.set(e,l),l}function Oo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Oo(t,i,n,!0),s&&s.forEach(o=>Oo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=db[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const db={data:Ad,props:kd,emits:kd,methods:js,computed:js,beforeCreate:rt,created:rt,beforeMount:rt,mounted:rt,beforeUpdate:rt,updated:rt,beforeDestroy:rt,beforeUnmount:rt,destroyed:rt,unmounted:rt,activated:rt,deactivated:rt,errorCaptured:rt,serverPrefetch:rt,components:js,directives:js,watch:hb,provide:Ad,inject:fb};function Ad(t,e){return e?t?function(){return Ge(te(t)?t.call(this,this):t,te(e)?e.call(this,this):e)}:e:t}function fb(t,e){return js(Bl(t),Bl(e))}function Bl(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function rt(t,e){return t?[...new Set([].concat(t,e))]:e}function js(t,e){return t?Ge(Object.create(null),t,e):e}function kd(t,e){return t?G(t)&&G(e)?[...new Set([...t,...e])]:Ge(Object.create(null),Sd(t),Sd(e??{})):e}function hb(t,e){if(!t)return e;if(!e)return t;const n=Ge(Object.create(null),t);for(const r in e)n[r]=rt(t[r],e[r]);return n}function Yp(){return{app:null,config:{isNativeTag:qv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pb=0;function gb(t,e){return function(r,s=null){te(r)||(r=Ge({},r)),s!=null&&!ye(s)&&(s=null);const i=Yp(),o=new WeakSet,a=[];let l=!1;const c=i.app={_uid:pb++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Yb,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&te(u.install)?(o.add(u),u.install(c,...d)):te(u)&&(o.add(u),u(c,...d))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,d){return d?(i.components[u]=d,c):i.components[u]},directive(u,d){return d?(i.directives[u]=d,c):i.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||Z(r,s);return h.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),t(h,u,f),l=!0,c._container=u,u.__vue_app__=c,Ca(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Ft(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return i.provides[u]=d,c},runWithContext(u){const d=Kr;Kr=c;try{return u()}finally{Kr=d}}};return c}}let Kr=null;function ht(t,e){if(ze){let n=ze.provides;const r=ze.parent&&ze.parent.provides;r===n&&(n=ze.provides=Object.create(r)),n[t]=e}}function Pe(t,e,n=!1){const r=ze||We;if(r||Kr){let s=Kr?Kr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&te(e)?e.call(r&&r.proxy):e}}const Qp={},Jp=()=>Object.create(Qp),Xp=t=>Object.getPrototypeOf(t)===Qp;function mb(t,e,n,r=!1){const s={},i=Jp();t.propsDefaults=Object.create(null),Zp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Tp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function _b(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=fe(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(wa(t.emitsOptions,f))continue;const h=e[f];if(l)if(me(i,f))h!==i[f]&&(i[f]=h,c=!0);else{const g=At(f);s[g]=Vl(l,a,g,h,t,!1)}else h!==i[f]&&(i[f]=h,c=!0)}}}else{Zp(t,e,s,i)&&(c=!0);let u;for(const d in a)(!e||!me(e,d)&&((u=er(d))===d||!me(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=Vl(l,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!me(e,d))&&(delete i[d],c=!0)}c&&an(t.attrs,"set","")}function Zp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Gs(l))continue;const c=e[l];let u;s&&me(s,u=At(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:wa(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=fe(n),c=a||Ee;for(let u=0;u<i.length;u++){const d=i[u];n[d]=Vl(s,l,d,c[d],t,!me(c,d))}}return o}function Vl(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=me(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&te(l)){const{propsDefaults:c}=s;if(n in c)r=c[n];else{const u=Di(s);r=c[n]=l.call(null,e),u()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===er(n))&&(r=!0))}return r}const vb=new WeakMap;function eg(t,e,n=!1){const r=n?vb:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!te(t)){const u=d=>{l=!0;const[f,h]=eg(d,e,!0);Ge(o,f),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return ye(t)&&r.set(t,Hr),Hr;if(G(i))for(let u=0;u<i.length;u++){const d=At(i[u]);Rd(d)&&(o[d]=Ee)}else if(i)for(const u in i){const d=At(u);if(Rd(d)){const f=i[u],h=o[d]=G(f)||te(f)?{type:f}:Ge({},f),g=h.type;let _=!1,y=!0;if(G(g))for(let T=0;T<g.length;++T){const b=g[T],A=te(b)&&b.name;if(A==="Boolean"){_=!0;break}else A==="String"&&(y=!1)}else _=te(g)&&g.name==="Boolean";h[0]=_,h[1]=y,(_||me(h,"default"))&&a.push(d)}}const c=[o,a];return ye(t)&&r.set(t,c),c}function Rd(t){return t[0]!=="$"&&!Gs(t)}const qc=t=>t[0]==="_"||t==="$stable",zc=t=>G(t)?t.map(Yt):[Yt(t)],yb=(t,e,n)=>{if(e._n)return e;const r=ke((...s)=>zc(e(...s)),n);return r._c=!1,r},tg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(qc(s))continue;const i=t[s];if(te(i))e[s]=yb(s,i,r);else if(i!=null){const o=zc(i);e[s]=()=>o}}},ng=(t,e)=>{const n=zc(e);t.slots.default=()=>n},rg=(t,e,n)=>{for(const r in e)(n||!qc(r))&&(t[r]=e[r])},bb=(t,e,n)=>{const r=t.slots=Jp();if(t.vnode.shapeFlag&32){const s=e.__;s&&Nl(r,"__",s,!0);const i=e._;i?(rg(r,e,n),n&&Nl(r,"_",i,!0)):tg(e,r)}else e&&ng(t,e)},wb=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ee;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:rg(s,e,n):(i=!e.$stable,tg(e,s)),o=e}else e&&(ng(t,e),o={default:1});if(i)for(const a in s)!qc(a)&&o[a]==null&&delete s[a]},st=Mb;function Eb(t){return Cb(t)}function Cb(t,e){const n=pa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=Qt,insertStaticContent:g}=t,_=(p,m,v,w=null,S=null,C=null,M=void 0,N=null,O=!!m.dynamicChildren)=>{if(p===m)return;p&&!dr(p,m)&&(w=E(p),ae(p,S,C,!0),p=null),m.patchFlag===-2&&(O=!1,m.dynamicChildren=null);const{type:k,ref:K,shapeFlag:F}=m;switch(k){case Ea:y(p,m,v,w);break;case et:T(p,m,v,w);break;case rl:p==null&&b(m,v,w,M);break;case Xe:L(p,m,v,w,S,C,M,N,O);break;default:F&1?H(p,m,v,w,S,C,M,N,O):F&6?ne(p,m,v,w,S,C,M,N,O):(F&64||F&128)&&k.process(p,m,v,w,S,C,M,N,O,B)}K!=null&&S?Ys(K,p&&p.ref,C,m||p,!m):K==null&&p&&p.ref!=null&&Ys(p.ref,null,C,p,!0)},y=(p,m,v,w)=>{if(p==null)r(m.el=a(m.children),v,w);else{const S=m.el=p.el;m.children!==p.children&&c(S,m.children)}},T=(p,m,v,w)=>{p==null?r(m.el=l(m.children||""),v,w):m.el=p.el},b=(p,m,v,w)=>{[p.el,p.anchor]=g(p.children,m,v,w,p.el,p.anchor)},A=({el:p,anchor:m},v,w)=>{let S;for(;p&&p!==m;)S=f(p),r(p,v,w),p=S;r(m,v,w)},I=({el:p,anchor:m})=>{let v;for(;p&&p!==m;)v=f(p),s(p),p=v;s(m)},H=(p,m,v,w,S,C,M,N,O)=>{m.type==="svg"?M="svg":m.type==="math"&&(M="mathml"),p==null?x(m,v,w,S,C,M,N,O):U(p,m,S,C,M,N,O)},x=(p,m,v,w,S,C,M,N)=>{let O,k;const{props:K,shapeFlag:F,transition:W,dirs:ee}=p;if(O=p.el=o(p.type,C,K&&K.is,K),F&8?u(O,p.children):F&16&&Y(p.children,O,null,w,S,nl(p,C),M,N),ee&&rr(p,null,w,"created"),j(O,p,p.scopeId,M,w),K){for(const Ce in K)Ce!=="value"&&!Gs(Ce)&&i(O,Ce,null,K[Ce],C,w);"value"in K&&i(O,"value",null,K.value,C),(k=K.onVnodeBeforeMount)&&Kt(k,w,p)}ee&&rr(p,null,w,"beforeMount");const ce=Ib(S,W);ce&&W.beforeEnter(O),r(O,m,v),((k=K&&K.onVnodeMounted)||ce||ee)&&st(()=>{k&&Kt(k,w,p),ce&&W.enter(O),ee&&rr(p,null,w,"mounted")},S)},j=(p,m,v,w,S)=>{if(v&&h(p,v),w)for(let C=0;C<w.length;C++)h(p,w[C]);if(S){let C=S.subTree;if(m===C||ag(C.type)&&(C.ssContent===m||C.ssFallback===m)){const M=S.vnode;j(p,M,M.scopeId,M.slotScopeIds,S.parent)}}},Y=(p,m,v,w,S,C,M,N,O=0)=>{for(let k=O;k<p.length;k++){const K=p[k]=N?Nn(p[k]):Yt(p[k]);_(null,K,m,v,w,S,C,M,N)}},U=(p,m,v,w,S,C,M)=>{const N=m.el=p.el;let{patchFlag:O,dynamicChildren:k,dirs:K}=m;O|=p.patchFlag&16;const F=p.props||Ee,W=m.props||Ee;let ee;if(v&&sr(v,!1),(ee=W.onVnodeBeforeUpdate)&&Kt(ee,v,m,p),K&&rr(m,p,v,"beforeUpdate"),v&&sr(v,!0),(F.innerHTML&&W.innerHTML==null||F.textContent&&W.textContent==null)&&u(N,""),k?R(p.dynamicChildren,k,N,v,w,nl(m,S),C):M||ue(p,m,N,null,v,w,nl(m,S),C,!1),O>0){if(O&16)Q(N,F,W,v,S);else if(O&2&&F.class!==W.class&&i(N,"class",null,W.class,S),O&4&&i(N,"style",F.style,W.style,S),O&8){const ce=m.dynamicProps;for(let Ce=0;Ce<ce.length;Ce++){const _e=ce[Ce],ut=F[_e],dt=W[_e];(dt!==ut||_e==="value")&&i(N,_e,ut,dt,S,v)}}O&1&&p.children!==m.children&&u(N,m.children)}else!M&&k==null&&Q(N,F,W,v,S);((ee=W.onVnodeUpdated)||K)&&st(()=>{ee&&Kt(ee,v,m,p),K&&rr(m,p,v,"updated")},w)},R=(p,m,v,w,S,C,M)=>{for(let N=0;N<m.length;N++){const O=p[N],k=m[N],K=O.el&&(O.type===Xe||!dr(O,k)||O.shapeFlag&198)?d(O.el):v;_(O,k,K,null,w,S,C,M,!0)}},Q=(p,m,v,w,S)=>{if(m!==v){if(m!==Ee)for(const C in m)!Gs(C)&&!(C in v)&&i(p,C,m[C],null,S,w);for(const C in v){if(Gs(C))continue;const M=v[C],N=m[C];M!==N&&C!=="value"&&i(p,C,N,M,S,w)}"value"in v&&i(p,"value",m.value,v.value,S)}},L=(p,m,v,w,S,C,M,N,O)=>{const k=m.el=p?p.el:a(""),K=m.anchor=p?p.anchor:a("");let{patchFlag:F,dynamicChildren:W,slotScopeIds:ee}=m;ee&&(N=N?N.concat(ee):ee),p==null?(r(k,v,w),r(K,v,w),Y(m.children||[],v,K,S,C,M,N,O)):F>0&&F&64&&W&&p.dynamicChildren?(R(p.dynamicChildren,W,v,S,C,M,N),(m.key!=null||S&&m===S.subTree)&&Yc(p,m,!0)):ue(p,m,v,K,S,C,M,N,O)},ne=(p,m,v,w,S,C,M,N,O)=>{m.slotScopeIds=N,p==null?m.shapeFlag&512?S.ctx.activate(m,v,w,M,O):Ae(m,v,w,S,C,M,O):xe(p,m,O)},Ae=(p,m,v,w,S,C,M)=>{const N=p.component=Bb(p,w,S);if(ya(p)&&(N.ctx.renderer=B),Vb(N,!1,M),N.asyncDep){if(S&&S.registerDep(N,pe,M),!p.el){const O=N.subTree=Z(et);T(null,O,m,v)}}else pe(N,p,m,v,S,C,M)},xe=(p,m,v)=>{const w=m.component=p.component;if(Nb(p,m,v))if(w.asyncDep&&!w.asyncResolved){le(w,m,v);return}else w.next=m,w.update();else m.el=p.el,w.vnode=m},pe=(p,m,v,w,S,C,M)=>{const N=()=>{if(p.isMounted){let{next:F,bu:W,u:ee,parent:ce,vnode:Ce}=p;{const Wt=sg(p);if(Wt){F&&(F.el=Ce.el,le(p,F,M)),Wt.asyncDep.then(()=>{p.isUnmounted||N()});return}}let _e=F,ut;sr(p,!1),F?(F.el=Ce.el,le(p,F,M)):F=Ce,W&&ho(W),(ut=F.props&&F.props.onVnodeBeforeUpdate)&&Kt(ut,ce,F,Ce),sr(p,!0);const dt=xd(p),Vt=p.subTree;p.subTree=dt,_(Vt,dt,d(Vt.el),E(Vt),p,S,C),F.el=dt.el,_e===null&&Lb(p,dt.el),ee&&st(ee,S),(ut=F.props&&F.props.onVnodeUpdated)&&st(()=>Kt(ut,ce,F,Ce),S)}else{let F;const{el:W,props:ee}=m,{bm:ce,m:Ce,parent:_e,root:ut,type:dt}=p,Vt=Gr(m);sr(p,!1),ce&&ho(ce),!Vt&&(F=ee&&ee.onVnodeBeforeMount)&&Kt(F,_e,m),sr(p,!0);{ut.ce&&ut.ce._def.shadowRoot!==!1&&ut.ce._injectChildStyle(dt);const Wt=p.subTree=xd(p);_(null,Wt,v,w,p,S,C),m.el=Wt.el}if(Ce&&st(Ce,S),!Vt&&(F=ee&&ee.onVnodeMounted)){const Wt=m;st(()=>Kt(F,_e,Wt),S)}(m.shapeFlag&256||_e&&Gr(_e.vnode)&&_e.vnode.shapeFlag&256)&&p.a&&st(p.a,S),p.isMounted=!0,m=v=w=null}};p.scope.on();const O=p.effect=new fp(N);p.scope.off();const k=p.update=O.run.bind(O),K=p.job=O.runIfDirty.bind(O);K.i=p,K.id=p.uid,O.scheduler=()=>Gc(K),sr(p,!0),k()},le=(p,m,v)=>{m.component=p;const w=p.vnode.props;p.vnode=m,p.next=null,_b(p,m.props,w,v),wb(p,m.children,v),_n(),yd(p),vn()},ue=(p,m,v,w,S,C,M,N,O=!1)=>{const k=p&&p.children,K=p?p.shapeFlag:0,F=m.children,{patchFlag:W,shapeFlag:ee}=m;if(W>0){if(W&128){Rt(k,F,v,w,S,C,M,N,O);return}else if(W&256){Et(k,F,v,w,S,C,M,N,O);return}}ee&8?(K&16&&Ke(k,S,C),F!==k&&u(v,F)):K&16?ee&16?Rt(k,F,v,w,S,C,M,N,O):Ke(k,S,C,!0):(K&8&&u(v,""),ee&16&&Y(F,v,w,S,C,M,N,O))},Et=(p,m,v,w,S,C,M,N,O)=>{p=p||Hr,m=m||Hr;const k=p.length,K=m.length,F=Math.min(k,K);let W;for(W=0;W<F;W++){const ee=m[W]=O?Nn(m[W]):Yt(m[W]);_(p[W],ee,v,null,S,C,M,N,O)}k>K?Ke(p,S,C,!0,!1,F):Y(m,v,w,S,C,M,N,O,F)},Rt=(p,m,v,w,S,C,M,N,O)=>{let k=0;const K=m.length;let F=p.length-1,W=K-1;for(;k<=F&&k<=W;){const ee=p[k],ce=m[k]=O?Nn(m[k]):Yt(m[k]);if(dr(ee,ce))_(ee,ce,v,null,S,C,M,N,O);else break;k++}for(;k<=F&&k<=W;){const ee=p[F],ce=m[W]=O?Nn(m[W]):Yt(m[W]);if(dr(ee,ce))_(ee,ce,v,null,S,C,M,N,O);else break;F--,W--}if(k>F){if(k<=W){const ee=W+1,ce=ee<K?m[ee].el:w;for(;k<=W;)_(null,m[k]=O?Nn(m[k]):Yt(m[k]),v,ce,S,C,M,N,O),k++}}else if(k>W)for(;k<=F;)ae(p[k],S,C,!0),k++;else{const ee=k,ce=k,Ce=new Map;for(k=ce;k<=W;k++){const vt=m[k]=O?Nn(m[k]):Yt(m[k]);vt.key!=null&&Ce.set(vt.key,k)}let _e,ut=0;const dt=W-ce+1;let Vt=!1,Wt=0;const ks=new Array(dt);for(k=0;k<dt;k++)ks[k]=0;for(k=ee;k<=F;k++){const vt=p[k];if(ut>=dt){ae(vt,S,C,!0);continue}let Gt;if(vt.key!=null)Gt=Ce.get(vt.key);else for(_e=ce;_e<=W;_e++)if(ks[_e-ce]===0&&dr(vt,m[_e])){Gt=_e;break}Gt===void 0?ae(vt,S,C,!0):(ks[Gt-ce]=k+1,Gt>=Wt?Wt=Gt:Vt=!0,_(vt,m[Gt],v,null,S,C,M,N,O),ut++)}const hd=Vt?Sb(ks):Hr;for(_e=hd.length-1,k=dt-1;k>=0;k--){const vt=ce+k,Gt=m[vt],pd=vt+1<K?m[vt+1].el:w;ks[k]===0?_(null,Gt,v,pd,S,C,M,N,O):Vt&&(_e<0||k!==hd[_e]?oe(Gt,v,pd,2):_e--)}}},oe=(p,m,v,w,S=null)=>{const{el:C,type:M,transition:N,children:O,shapeFlag:k}=p;if(k&6){oe(p.component.subTree,m,v,w);return}if(k&128){p.suspense.move(m,v,w);return}if(k&64){M.move(p,m,v,B);return}if(M===Xe){r(C,m,v);for(let F=0;F<O.length;F++)oe(O[F],m,v,w);r(p.anchor,m,v);return}if(M===rl){A(p,m,v);return}if(w!==2&&k&1&&N)if(w===0)N.beforeEnter(C),r(C,m,v),st(()=>N.enter(C),S);else{const{leave:F,delayLeave:W,afterLeave:ee}=N,ce=()=>{p.ctx.isUnmounted?s(C):r(C,m,v)},Ce=()=>{F(C,()=>{ce(),ee&&ee()})};W?W(C,ce,Ce):Ce()}else r(C,m,v)},ae=(p,m,v,w=!1,S=!1)=>{const{type:C,props:M,ref:N,children:O,dynamicChildren:k,shapeFlag:K,patchFlag:F,dirs:W,cacheIndex:ee}=p;if(F===-2&&(S=!1),N!=null&&(_n(),Ys(N,null,v,p,!0),vn()),ee!=null&&(m.renderCache[ee]=void 0),K&256){m.ctx.deactivate(p);return}const ce=K&1&&W,Ce=!Gr(p);let _e;if(Ce&&(_e=M&&M.onVnodeBeforeUnmount)&&Kt(_e,m,p),K&6)An(p.component,v,w);else{if(K&128){p.suspense.unmount(v,w);return}ce&&rr(p,null,m,"beforeUnmount"),K&64?p.type.remove(p,m,v,B,w):k&&!k.hasOnce&&(C!==Xe||F>0&&F&64)?Ke(k,m,v,!1,!0):(C===Xe&&F&384||!S&&K&16)&&Ke(O,m,v),w&&De(p)}(Ce&&(_e=M&&M.onVnodeUnmounted)||ce)&&st(()=>{_e&&Kt(_e,m,p),ce&&rr(p,null,m,"unmounted")},v)},De=p=>{const{type:m,el:v,anchor:w,transition:S}=p;if(m===Xe){Fe(v,w);return}if(m===rl){I(p);return}const C=()=>{s(v),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(p.shapeFlag&1&&S&&!S.persisted){const{leave:M,delayLeave:N}=S,O=()=>M(v,C);N?N(p.el,C,O):O()}else C()},Fe=(p,m)=>{let v;for(;p!==m;)v=f(p),s(p),p=v;s(m)},An=(p,m,v)=>{const{bum:w,scope:S,job:C,subTree:M,um:N,m:O,a:k,parent:K,slots:{__:F}}=p;Pd(O),Pd(k),w&&ho(w),K&&G(F)&&F.forEach(W=>{K.renderCache[W]=void 0}),S.stop(),C&&(C.flags|=8,ae(M,p,m,v)),N&&st(N,m),st(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Ke=(p,m,v,w=!1,S=!1,C=0)=>{for(let M=C;M<p.length;M++)ae(p[M],m,v,w,S)},E=p=>{if(p.shapeFlag&6)return E(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const m=f(p.anchor||p.el),v=m&&m[Lp];return v?f(v):m};let $=!1;const D=(p,m,v)=>{p==null?m._vnode&&ae(m._vnode,null,null,!0):_(m._vnode||null,p,m,null,null,null,v),m._vnode=p,$||($=!0,yd(),xp(),$=!1)},B={p:_,um:ae,m:oe,r:De,mt:Ae,mc:Y,pc:ue,pbc:R,n:E,o:t};return{render:D,hydrate:void 0,createApp:gb(D)}}function nl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function sr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ib(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Yc(t,e,n=!1){const r=t.children,s=e.children;if(G(r)&&G(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Nn(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Yc(o,a)),a.type===Ea&&(a.el=o.el),a.type===et&&!a.el&&(a.el=o.el)}}function Sb(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function sg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:sg(e)}function Pd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Tb=Symbol.for("v-scx"),Ab=()=>Pe(Tb);function wt(t,e){return Qc(t,null,e)}function tt(t,e,n){return Qc(t,e,n)}function Qc(t,e,n=Ee){const{immediate:r,deep:s,flush:i,once:o}=n,a=Ge({},n),l=e&&r||!e&&i!=="post";let c;if(hi){if(i==="sync"){const h=Ab();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Qt,h.resume=Qt,h.pause=Qt,h}}const u=ze;a.call=(h,g,_)=>Ft(h,u,g,_);let d=!1;i==="post"?a.scheduler=h=>{st(h,u&&u.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(h,g)=>{g?h():Gc(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=$y(t,e,a);return hi&&(c?c.push(f):l&&f()),f}function kb(t,e,n){const r=this.proxy,s=Le(t)?t.includes(".")?ig(r,t):()=>r[t]:t.bind(r,r);let i;te(e)?i=e:(i=e.handler,n=e);const o=Di(this),a=Qc(s,i.bind(r),n);return o(),a}function ig(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Rb=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${At(e)}Modifiers`]||t[`${er(e)}Modifiers`];function Pb(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ee;let s=n;const i=e.startsWith("update:"),o=i&&Rb(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>Le(u)?u.trim():u)),o.number&&(s=n.map(To)));let a,l=r[a=Ya(e)]||r[a=Ya(At(e))];!l&&i&&(l=r[a=Ya(er(e))]),l&&Ft(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ft(c,t,6,s)}}function og(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!te(t)){const l=c=>{const u=og(c,e,!0);u&&(a=!0,Ge(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(ye(t)&&r.set(t,null),null):(G(i)?i.forEach(l=>o[l]=null):Ge(o,i),ye(t)&&r.set(t,o),o)}function wa(t,e){return!t||!da(e)?!1:(e=e.slice(2).replace(/Once$/,""),me(t,e[0].toLowerCase()+e.slice(1))||me(t,er(e))||me(t,e))}function xd(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:g,inheritAttrs:_}=t,y=xo(t);let T,b;try{if(n.shapeFlag&4){const I=s||r,H=I;T=Yt(c.call(H,I,u,d,h,f,g)),b=a}else{const I=e;T=Yt(I.length>1?I(d,{attrs:a,slots:o,emit:l}):I(d,null)),b=e.props?a:xb(a)}}catch(I){Js.length=0,va(I,t,1),T=Z(et)}let A=T;if(b&&_!==!1){const I=Object.keys(b),{shapeFlag:H}=A;I.length&&H&7&&(i&&I.some(Nc)&&(b=Ob(b,i)),A=yn(A,b,!1,!0))}return n.dirs&&(A=yn(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&ui(A,n.transition),T=A,xo(y),T}const xb=t=>{let e;for(const n in t)(n==="class"||n==="style"||da(n))&&((e||(e={}))[n]=t[n]);return e},Ob=(t,e)=>{const n={};for(const r in t)(!Nc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Nb(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Od(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==r[f]&&!wa(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Od(r,o,c):!0:!!o;return!1}function Od(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!wa(n,i))return!0}return!1}function Lb({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const ag=t=>t.__isSuspense;function Mb(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):By(t)}const Xe=Symbol.for("v-fgt"),Ea=Symbol.for("v-txt"),et=Symbol.for("v-cmt"),rl=Symbol.for("v-stc"),Js=[];let bt=null;function Ye(t=!1){Js.push(bt=t?null:[])}function Db(){Js.pop(),bt=Js[Js.length-1]||null}let di=1;function Nd(t,e=!1){di+=t,t<0&&bt&&e&&(bt.hasOnce=!0)}function lg(t){return t.dynamicChildren=di>0?bt||Hr:null,Db(),di>0&&bt&&bt.push(t),t}function jt(t,e,n,r,s,i){return lg(z(t,e,n,r,s,i,!0))}function Zr(t,e,n,r,s){return lg(Z(t,e,n,r,s,!0))}function fi(t){return t?t.__v_isVNode===!0:!1}function dr(t,e){return t.type===e.type&&t.key===e.key}const cg=({key:t})=>t??null,go=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Le(t)||Me(t)||te(t)?{i:We,r:t,k:e,f:!!n}:t:null);function z(t,e=null,n=null,r=0,s=null,i=t===Xe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&cg(e),ref:e&&go(e),scopeId:Np,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:We};return a?(Xc(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Le(n)?8:16),di>0&&!o&&bt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&bt.push(l),l}const Z=Fb;function Fb(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===ob)&&(t=et),fi(t)){const a=yn(t,e,!0);return n&&Xc(a,n),di>0&&!i&&bt&&(a.shapeFlag&6?bt[bt.indexOf(t)]=a:bt.push(a)),a.patchFlag=-2,a}if(zb(t)&&(t=t.__vccOpts),e){e=Ub(e);let{class:a,style:l}=e;a&&!Le(a)&&(e.class=mn(a)),ye(l)&&(Vc(l)&&!G(l)&&(l=Ge({},l)),e.style=Dc(l))}const o=Le(t)?1:ag(t)?128:Mp(t)?64:ye(t)?4:te(t)?2:0;return z(t,e,n,r,s,o,i,!0)}function Ub(t){return t?Vc(t)||Xp(t)?Ge({},t):t:null}function yn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,c=e?$b(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&cg(c),ref:e&&e.ref?n&&i?G(i)?i.concat(go(e)):[i,go(e)]:go(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Xe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&yn(t.ssContent),ssFallback:t.ssFallback&&yn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&ui(u,l.clone(u)),u}function at(t=" ",e=0){return Z(Ea,null,t,e)}function Jc(t="",e=!1){return e?(Ye(),Zr(et,null,t)):Z(et,null,t)}function Yt(t){return t==null||typeof t=="boolean"?Z(et):G(t)?Z(Xe,null,t.slice()):fi(t)?Nn(t):Z(Ea,null,String(t))}function Nn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:yn(t)}function Xc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Xc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Xp(e)?e._ctx=We:s===3&&We&&(We.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else te(e)?(e={default:e,_ctx:We},n=32):(e=String(e),r&64?(n=16,e=[at(e)]):n=8);t.children=e,t.shapeFlag|=n}function $b(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=mn([e.class,r.class]));else if(s==="style")e.style=Dc([e.style,r.style]);else if(da(s)){const i=e[s],o=r[s];o&&i!==o&&!(G(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Kt(t,e,n,r=null){Ft(t,e,7,[n,r])}const jb=Yp();let Hb=0;function Bb(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||jb,i={uid:Hb++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new up(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:eg(r,s),emitsOptions:og(r,s),emit:null,emitted:null,propsDefaults:Ee,inheritAttrs:r.inheritAttrs,ctx:Ee,data:Ee,props:Ee,attrs:Ee,slots:Ee,refs:Ee,setupState:Ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Pb.bind(null,i),t.ce&&t.ce(i),i}let ze=null;const Mi=()=>ze||We;let No,Wl;{const t=pa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};No=e("__VUE_INSTANCE_SETTERS__",n=>ze=n),Wl=e("__VUE_SSR_SETTERS__",n=>hi=n)}const Di=t=>{const e=ze;return No(t),t.scope.on(),()=>{t.scope.off(),No(e)}},Ld=()=>{ze&&ze.scope.off(),No(null)};function ug(t){return t.vnode.shapeFlag&4}let hi=!1;function Vb(t,e=!1,n=!1){e&&Wl(e);const{props:r,children:s}=t.vnode,i=ug(t);mb(t,r,i,e),bb(t,s,n||e);const o=i?Wb(t,e):void 0;return e&&Wl(!1),o}function Wb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,lb);const{setup:r}=n;if(r){_n();const s=t.setupContext=r.length>1?Kb(t):null,i=Di(t),o=Li(r,t,0,[t.props,s]),a=sp(o);if(vn(),i(),(a||t.sp)&&!Gr(t)&&Vp(t),a){if(o.then(Ld,Ld),e)return o.then(l=>{Md(t,l)}).catch(l=>{va(l,t,0)});t.asyncDep=o}else Md(t,o)}else dg(t)}function Md(t,e,n){te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ye(e)&&(t.setupState=kp(e)),dg(t)}function dg(t,e,n){const r=t.type;t.render||(t.render=r.render||Qt);{const s=Di(t);_n();try{cb(t)}finally{vn(),s()}}}const Gb={get(t,e){return Je(t,"get",""),t[e]}};function Kb(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Gb),slots:t.slots,emit:t.emit,expose:e}}function Ca(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(kp(Ay(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Qs)return Qs[n](t)},has(e,n){return n in e||n in Qs}})):t.proxy}function qb(t,e=!0){return te(t)?t.displayName||t.name:t.name||e&&t.__name}function zb(t){return te(t)&&"__vccOpts"in t}const V=(t,e)=>Fy(t,e,hi);function Ne(t,e,n){const r=arguments.length;return r===2?ye(e)&&!G(e)?fi(e)?Z(t,null,[e]):Z(t,e):Z(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&fi(n)&&(n=[n]),Z(t,e,n))}const Yb="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gl;const Dd=typeof window<"u"&&window.trustedTypes;if(Dd)try{Gl=Dd.createPolicy("vue",{createHTML:t=>t})}catch{}const fg=Gl?t=>Gl.createHTML(t):t=>t,Qb="http://www.w3.org/2000/svg",Jb="http://www.w3.org/1998/Math/MathML",on=typeof document<"u"?document:null,Fd=on&&on.createElement("template"),Xb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?on.createElementNS(Qb,t):e==="mathml"?on.createElementNS(Jb,t):n?on.createElement(t,{is:n}):on.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>on.createTextNode(t),createComment:t=>on.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>on.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Fd.innerHTML=fg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Fd.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},kn="transition",Ps="animation",pi=Symbol("_vtc"),hg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Zb=Ge({},Up,hg),ew=t=>(t.displayName="Transition",t.props=Zb,t),tw=ew((t,{slots:e})=>Ne(qy,nw(t),e)),ir=(t,e=[])=>{G(t)?t.forEach(n=>n(...e)):t&&t(...e)},Ud=t=>t?G(t)?t.some(e=>e.length>1):t.length>1:!1;function nw(t){const e={};for(const L in t)L in hg||(e[L]=t[L]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,g=rw(s),_=g&&g[0],y=g&&g[1],{onBeforeEnter:T,onEnter:b,onEnterCancelled:A,onLeave:I,onLeaveCancelled:H,onBeforeAppear:x=T,onAppear:j=b,onAppearCancelled:Y=A}=e,U=(L,ne,Ae,xe)=>{L._enterCancelled=xe,or(L,ne?u:a),or(L,ne?c:o),Ae&&Ae()},R=(L,ne)=>{L._isLeaving=!1,or(L,d),or(L,h),or(L,f),ne&&ne()},Q=L=>(ne,Ae)=>{const xe=L?j:b,pe=()=>U(ne,L,Ae);ir(xe,[ne,pe]),$d(()=>{or(ne,L?l:i),rn(ne,L?u:a),Ud(xe)||jd(ne,r,_,pe)})};return Ge(e,{onBeforeEnter(L){ir(T,[L]),rn(L,i),rn(L,o)},onBeforeAppear(L){ir(x,[L]),rn(L,l),rn(L,c)},onEnter:Q(!1),onAppear:Q(!0),onLeave(L,ne){L._isLeaving=!0;const Ae=()=>R(L,ne);rn(L,d),L._enterCancelled?(rn(L,f),Vd()):(Vd(),rn(L,f)),$d(()=>{L._isLeaving&&(or(L,d),rn(L,h),Ud(I)||jd(L,r,y,Ae))}),ir(I,[L,Ae])},onEnterCancelled(L){U(L,!1,void 0,!0),ir(A,[L])},onAppearCancelled(L){U(L,!0,void 0,!0),ir(Y,[L])},onLeaveCancelled(L){R(L),ir(H,[L])}})}function rw(t){if(t==null)return null;if(ye(t))return[sl(t.enter),sl(t.leave)];{const e=sl(t);return[e,e]}}function sl(t){return Xv(t)}function rn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[pi]||(t[pi]=new Set)).add(e)}function or(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[pi];n&&(n.delete(e),n.size||(t[pi]=void 0))}function $d(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let sw=0;function jd(t,e,n,r){const s=t._endId=++sw,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=iw(t,e);if(!o)return r();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,f),i()},f=h=>{h.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,f)}function iw(t,e){const n=window.getComputedStyle(t),r=g=>(n[g]||"").split(", "),s=r(`${kn}Delay`),i=r(`${kn}Duration`),o=Hd(s,i),a=r(`${Ps}Delay`),l=r(`${Ps}Duration`),c=Hd(a,l);let u=null,d=0,f=0;e===kn?o>0&&(u=kn,d=o,f=i.length):e===Ps?c>0&&(u=Ps,d=c,f=l.length):(d=Math.max(o,c),u=d>0?o>c?kn:Ps:null,f=u?u===kn?i.length:l.length:0);const h=u===kn&&/\b(transform|all)(,|$)/.test(r(`${kn}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:h}}function Hd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Bd(n)+Bd(t[r])))}function Bd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Vd(){return document.body.offsetHeight}function ow(t,e,n){const r=t[pi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Wd=Symbol("_vod"),aw=Symbol("_vsh"),lw=Symbol(""),cw=/(^|;)\s*display\s*:/;function uw(t,e,n){const r=t.style,s=Le(n);let i=!1;if(n&&!s){if(e)if(Le(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&mo(r,a,"")}else for(const o in e)n[o]==null&&mo(r,o,"");for(const o in n)o==="display"&&(i=!0),mo(r,o,n[o])}else if(s){if(e!==n){const o=r[lw];o&&(n+=";"+o),r.cssText=n,i=cw.test(n)}}else e&&t.removeAttribute("style");Wd in t&&(t[Wd]=i?r.display:"",t[aw]&&(r.display="none"))}const Gd=/\s*!important$/;function mo(t,e,n){if(G(n))n.forEach(r=>mo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=dw(t,e);Gd.test(n)?t.setProperty(er(r),n.replace(Gd,""),"important"):t[r]=n}}const Kd=["Webkit","Moz","ms"],il={};function dw(t,e){const n=il[e];if(n)return n;let r=At(e);if(r!=="filter"&&r in t)return il[e]=r;r=ha(r);for(let s=0;s<Kd.length;s++){const i=Kd[s]+r;if(i in t)return il[e]=i}return e}const qd="http://www.w3.org/1999/xlink";function zd(t,e,n,r,s,i=sy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(qd,e.slice(6,e.length)):t.setAttributeNS(qd,e,n):n==null||i&&!ap(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Dt(n)?String(n):n)}function Yd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?fg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=ap(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function cn(t,e,n,r){t.addEventListener(e,n,r)}function fw(t,e,n,r){t.removeEventListener(e,n,r)}const Qd=Symbol("_vei");function hw(t,e,n,r,s=null){const i=t[Qd]||(t[Qd]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=pw(e);if(r){const c=i[e]=_w(r,s);cn(t,a,c,l)}else o&&(fw(t,a,o,l),i[e]=void 0)}}const Jd=/(?:Once|Passive|Capture)$/;function pw(t){let e;if(Jd.test(t)){e={};let r;for(;r=t.match(Jd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):er(t.slice(2)),e]}let ol=0;const gw=Promise.resolve(),mw=()=>ol||(gw.then(()=>ol=0),ol=Date.now());function _w(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ft(vw(r,n.value),e,5,[r])};return n.value=t,n.attached=mw(),n}function vw(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Xd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,yw=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?ow(t,r,o):e==="style"?uw(t,n,r):da(e)?Nc(e)||hw(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bw(t,e,r,o))?(Yd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&zd(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Le(r))?Yd(t,At(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),zd(t,e,r,o))};function bw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Xd(e)&&te(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Xd(e)&&Le(n)?!1:e in t}const Yn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>ho(e,n):e};function ww(t){t.target.composing=!0}function Zd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Tt=Symbol("_assign"),Lo={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Tt]=Yn(s);const i=r||s.props&&s.props.type==="number";cn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=To(a)),t[Tt](a)}),n&&cn(t,"change",()=>{t.value=t.value.trim()}),e||(cn(t,"compositionstart",ww),cn(t,"compositionend",Zd),cn(t,"change",Zd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Tt]=Yn(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?To(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Ew={deep:!0,created(t,e,n){t[Tt]=Yn(n),cn(t,"change",()=>{const r=t._modelValue,s=es(t),i=t.checked,o=t[Tt];if(G(r)){const a=Fc(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const c=[...r];c.splice(a,1),o(c)}}else if(hs(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(pg(t,i))})},mounted:ef,beforeUpdate(t,e,n){t[Tt]=Yn(n),ef(t,e,n)}};function ef(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(G(e))s=Fc(e,r.props.value)>-1;else if(hs(e))s=e.has(r.props.value);else{if(e===n)return;s=yr(e,pg(t,!0))}t.checked!==s&&(t.checked=s)}const Cw={created(t,{value:e},n){t.checked=yr(e,n.props.value),t[Tt]=Yn(n),cn(t,"change",()=>{t[Tt](es(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Tt]=Yn(r),e!==n&&(t.checked=yr(e,r.props.value))}},Iw={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=hs(e);cn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?To(es(o)):es(o));t[Tt](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,gs(()=>{t._assigning=!1})}),t[Tt]=Yn(r)},mounted(t,{value:e}){tf(t,e)},beforeUpdate(t,e,n){t[Tt]=Yn(n)},updated(t,{value:e}){t._assigning||tf(t,e)}};function tf(t,e){const n=t.multiple,r=G(e);if(!(n&&!r&&!hs(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],a=es(o);if(n)if(r){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Fc(e,a)>-1}else o.selected=e.has(a);else if(yr(es(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function es(t){return"_value"in t?t._value:t.value}function pg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Sw={created(t,e,n){ro(t,e,n,null,"created")},mounted(t,e,n){ro(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){ro(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){ro(t,e,n,r,"updated")}};function Tw(t,e){switch(t){case"SELECT":return Iw;case"TEXTAREA":return Lo;default:switch(e){case"checkbox":return Ew;case"radio":return Cw;default:return Lo}}}function ro(t,e,n,r,s){const o=Tw(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const Aw=["ctrl","shift","alt","meta"],kw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Aw.some(n=>t[`${n}Key`]&&!e.includes(n))},Kl=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=kw[e[o]];if(a&&a(s,e))return}return t(s,...i)})},Rw={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},nf=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=er(s.key);if(e.some(o=>o===i||Rw[o]===i))return t(s)})},Pw=Ge({patchProp:yw},Xb);let rf;function xw(){return rf||(rf=Eb(Pw))}const Ow=(...t)=>{const e=xw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Lw(r);if(!s)return;const i=e._component;!te(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Nw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Nw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Lw(t){return Le(t)?document.querySelector(t):t}const gg=new Set,pt=new WeakMap,qr=new WeakMap,br=new WeakMap,ql=new WeakMap,Mw=new WeakMap,ts=new WeakMap,Mo=new WeakMap,Hs=new WeakSet;let wr;const un="__aa_tgt",zl="__aa_del",Dw=t=>{const e=Hw(t);e&&e.forEach(n=>Bw(n))},Fw=t=>{t.forEach(e=>{e.target===wr&&$w(),pt.has(e.target)&&Rr(e.target)})};function Uw(t){const e=ql.get(t);e==null||e.disconnect();let n=pt.get(t),r=0;const s=5;n||(n=ns(t),pt.set(t,n));const{offsetWidth:i,offsetHeight:o}=wr,l=[n.top-s,i-(n.left+s+n.width),o-(n.top+s+n.height),n.left-s].map(u=>`${-1*Math.floor(u)}px`).join(" "),c=new IntersectionObserver(()=>{++r>1&&Rr(t)},{root:wr,threshold:1,rootMargin:l});c.observe(t),ql.set(t,c)}function Rr(t){clearTimeout(Mo.get(t));const e=Ia(t),n=typeof e=="function"?500:e.duration;Mo.set(t,setTimeout(async()=>{const r=br.get(t);try{await(r==null?void 0:r.finished),pt.set(t,ns(t)),Uw(t)}catch{}},n))}function $w(){clearTimeout(Mo.get(wr)),Mo.set(wr,setTimeout(()=>{gg.forEach(t=>yg(t,e=>mg(()=>Rr(e))))},100))}function jw(t){setTimeout(()=>{Mw.set(t,setInterval(()=>mg(Rr.bind(null,t)),2e3))},Math.round(2e3*Math.random()))}function mg(t){typeof requestIdleCallback=="function"?requestIdleCallback(()=>t()):requestAnimationFrame(()=>t())}let Yl,Ur;typeof window<"u"&&(wr=document.documentElement,Yl=new MutationObserver(Dw),Ur=new ResizeObserver(Fw),Ur.observe(wr));function Hw(t){return t.reduce((r,s)=>[...r,...Array.from(s.addedNodes),...Array.from(s.removedNodes)],[]).every(r=>r.nodeName==="#comment")?!1:t.reduce((r,s)=>{if(r===!1)return!1;if(s.target instanceof Element){if(al(s.target),!r.has(s.target)){r.add(s.target);for(let i=0;i<s.target.children.length;i++){const o=s.target.children.item(i);if(o){if(zl in o)return!1;al(s.target,o),r.add(o)}}}if(s.removedNodes.length)for(let i=0;i<s.removedNodes.length;i++){const o=s.removedNodes[i];if(zl in o)return!1;o instanceof Element&&(r.add(o),al(s.target,o),qr.set(o,[s.previousSibling,s.nextSibling]))}}return r},new Set)}function al(t,e){!e&&!(un in t)?Object.defineProperty(t,un,{value:t}):e&&!(un in e)&&Object.defineProperty(e,un,{value:t})}function Bw(t){var e;const n=t.isConnected,r=pt.has(t);n&&qr.has(t)&&qr.delete(t),br.has(t)&&((e=br.get(t))===null||e===void 0||e.cancel()),r&&n?Ww(t):r&&!n?Kw(t):Gw(t)}function zt(t){return Number(t.replace(/[^0-9.\-]/g,""))}function Vw(t){let e=t.parentElement;for(;e;){if(e.scrollLeft||e.scrollTop)return{x:e.scrollLeft,y:e.scrollTop};e=e.parentElement}return{x:0,y:0}}function ns(t){const e=t.getBoundingClientRect(),{x:n,y:r}=Vw(t);return{top:e.top+r,left:e.left+n,width:e.width,height:e.height}}function _g(t,e,n){let r=e.width,s=e.height,i=n.width,o=n.height;const a=getComputedStyle(t);if(a.getPropertyValue("box-sizing")==="content-box"){const c=zt(a.paddingTop)+zt(a.paddingBottom)+zt(a.borderTopWidth)+zt(a.borderBottomWidth),u=zt(a.paddingLeft)+zt(a.paddingRight)+zt(a.borderRightWidth)+zt(a.borderLeftWidth);r-=u,i-=u,s-=c,o-=c}return[r,i,s,o].map(Math.round)}function Ia(t){return un in t&&ts.has(t[un])?ts.get(t[un]):{duration:250,easing:"ease-in-out"}}function vg(t){if(un in t)return t[un]}function Zc(t){const e=vg(t);return e?Hs.has(e):!1}function yg(t,...e){e.forEach(n=>n(t,ts.has(t)));for(let n=0;n<t.children.length;n++){const r=t.children.item(n);r&&e.forEach(s=>s(r,ts.has(r)))}}function Ww(t){const e=pt.get(t),n=ns(t);if(!Zc(t))return pt.set(t,n);let r;if(!e)return;const s=Ia(t);if(typeof s!="function"){const i=e.left-n.left,o=e.top-n.top,[a,l,c,u]=_g(t,e,n),d={transform:`translate(${i}px, ${o}px)`},f={transform:"translate(0, 0)"};a!==l&&(d.width=`${a}px`,f.width=`${l}px`),c!==u&&(d.height=`${c}px`,f.height=`${u}px`),r=t.animate([d,f],{duration:s.duration,easing:s.easing})}else r=new Animation(s(t,"remain",e,n)),r.play();br.set(t,r),pt.set(t,n),r.addEventListener("finish",Rr.bind(null,t))}function Gw(t){const e=ns(t);pt.set(t,e);const n=Ia(t);if(!Zc(t))return;let r;typeof n!="function"?r=t.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:n.duration*1.5,easing:"ease-in"}):(r=new Animation(n(t,"add",e)),r.play()),br.set(t,r),r.addEventListener("finish",Rr.bind(null,t))}function Kw(t){var e;if(!qr.has(t)||!pt.has(t))return;const[n,r]=qr.get(t);Object.defineProperty(t,zl,{value:!0}),r&&r.parentNode&&r.parentNode instanceof Element?r.parentNode.insertBefore(t,r):n&&n.parentNode?n.parentNode.appendChild(t):(e=vg(t))===null||e===void 0||e.appendChild(t);function s(){var f;t.remove(),pt.delete(t),qr.delete(t),br.delete(t),(f=ql.get(t))===null||f===void 0||f.disconnect()}if(!Zc(t))return s();const[i,o,a,l]=qw(t),c=Ia(t),u=pt.get(t);let d;Object.assign(t.style,{position:"absolute",top:`${i}px`,left:`${o}px`,width:`${a}px`,height:`${l}px`,margin:0,pointerEvents:"none",transformOrigin:"center",zIndex:100}),typeof c!="function"?d=t.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:c.duration,easing:"ease-out"}):(d=new Animation(c(t,"remove",u)),d.play()),br.set(t,d),d.addEventListener("finish",s)}function qw(t){const e=pt.get(t),[n,,r]=_g(t,e,ns(t));let s=t.parentElement;for(;s&&(getComputedStyle(s).position==="static"||s instanceof HTMLBodyElement);)s=s.parentElement;s||(s=document.body);const i=getComputedStyle(s),o=pt.get(s)||ns(s),a=Math.round(e.top-o.top)-zt(i.borderTopWidth),l=Math.round(e.left-o.left)-zt(i.borderLeftWidth);return[a,l,n,r]}function zw(t,e={}){return Yl&&Ur&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&typeof e!="function"&&!e.disrespectUserMotionPreference||(Hs.add(t),getComputedStyle(t).position==="static"&&Object.assign(t.style,{position:"relative"}),yg(t,Rr,jw,s=>Ur==null?void 0:Ur.observe(s)),typeof e=="function"?ts.set(t,e):ts.set(t,{duration:250,easing:"ease-in-out",...e}),Yl.observe(t,{childList:!0}),gg.add(t))),Object.freeze({parent:t,enable:()=>{Hs.add(t)},disable:()=>{Hs.delete(t)},isEnabled:()=>Hs.has(t)})}const Yw={mounted:(t,e)=>{zw(t,e.value||{})}},Qw={install(t){t.directive("auto-animate",Yw)}},Jw="modulepreload",Xw=function(t){return"/task-project/"+t},sf={},Zw=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=o(n.map(c=>{if(c=Xw(c),c in sf)return;sf[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Jw,u||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((h,g)=>{f.addEventListener("load",h),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};function eE(){return bg().__VUE_DEVTOOLS_GLOBAL_HOOK__}function bg(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const tE=typeof Proxy=="function",nE="devtools-plugin:setup",rE="plugin:settings:set";let Nr,Ql;function sE(){var t;return Nr!==void 0||(typeof window<"u"&&window.performance?(Nr=!0,Ql=window.performance):typeof globalThis<"u"&&(!((t=globalThis.perf_hooks)===null||t===void 0)&&t.performance)?(Nr=!0,Ql=globalThis.perf_hooks.performance):Nr=!1),Nr}function iE(){return sE()?Ql.now():Date.now()}class oE{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return iE()}},n&&n.on(rE,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function aE(t,e){const n=t,r=bg(),s=eE(),i=tE&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(nE,t,e);else{const o=i?new oE(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Fr=typeof document<"u";function wg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function lE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&wg(t.default)}const ge=Object.assign;function ll(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ut(s)?s.map(t):t(s)}return n}const Xs=()=>{},Ut=Array.isArray,Eg=/#/g,cE=/&/g,uE=/\//g,dE=/=/g,fE=/\?/g,Cg=/\+/g,hE=/%5B/g,pE=/%5D/g,Ig=/%5E/g,gE=/%60/g,Sg=/%7B/g,mE=/%7C/g,Tg=/%7D/g,_E=/%20/g;function eu(t){return encodeURI(""+t).replace(mE,"|").replace(hE,"[").replace(pE,"]")}function vE(t){return eu(t).replace(Sg,"{").replace(Tg,"}").replace(Ig,"^")}function Jl(t){return eu(t).replace(Cg,"%2B").replace(_E,"+").replace(Eg,"%23").replace(cE,"%26").replace(gE,"`").replace(Sg,"{").replace(Tg,"}").replace(Ig,"^")}function yE(t){return Jl(t).replace(dE,"%3D")}function bE(t){return eu(t).replace(Eg,"%23").replace(fE,"%3F")}function wE(t){return t==null?"":bE(t).replace(uE,"%2F")}function gi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const EE=/\/$/,CE=t=>t.replace(EE,"");function cl(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=AE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:gi(o)}}function IE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function of(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function SE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&rs(e.matched[r],n.matched[s])&&Ag(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function rs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ag(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!TE(t[n],e[n]))return!1;return!0}function TE(t,e){return Ut(t)?af(t,e):Ut(e)?af(e,t):t===e}function af(t,e){return Ut(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function AE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Rn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var mi;(function(t){t.pop="pop",t.push="push"})(mi||(mi={}));var Zs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Zs||(Zs={}));function kE(t){if(!t)if(Fr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),CE(t)}const RE=/^[^#]+#/;function PE(t,e){return t.replace(RE,"#")+e}function xE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Sa=()=>({left:window.scrollX,top:window.scrollY});function OE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=xE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function lf(t,e){return(history.state?history.state.position-e:-1)+t}const Xl=new Map;function NE(t,e){Xl.set(t,e)}function LE(t){const e=Xl.get(t);return Xl.delete(t),e}let ME=()=>location.protocol+"//"+location.host;function kg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),of(l,"")}return of(n,t)+r+s}function DE(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const h=kg(t,location),g=n.value,_=e.value;let y=0;if(f){if(n.value=h,e.value=f,o&&o===g){o=null;return}y=_?f.position-_.position:0}else r(h);s.forEach(T=>{T(n.value,g,{delta:y,type:mi.pop,direction:y?y>0?Zs.forward:Zs.back:Zs.unknown})})};function l(){o=n.value}function c(f){s.push(f);const h=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return i.push(h),h}function u(){const{history:f}=window;f.state&&f.replaceState(ge({},f.state,{scroll:Sa()}),"")}function d(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function cf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Sa():null}}function FE(t){const{history:e,location:n}=window,r={value:kg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:ME()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(h){console.error(h),n[u?"replace":"assign"](f)}}function o(l,c){const u=ge({},e.state,cf(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=ge({},s.value,e.state,{forward:l,scroll:Sa()});i(u.current,u,!0);const d=ge({},cf(r.value,l,null),{position:u.position+1},c);i(l,d,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function UE(t){t=kE(t);const e=FE(t),n=DE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ge({location:"",base:t,go:r,createHref:PE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function $E(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),UE(t)}function jE(t){return typeof t=="string"||t&&typeof t=="object"}function Rg(t){return typeof t=="string"||typeof t=="symbol"}const Pg=Symbol("");var uf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(uf||(uf={}));function ss(t,e){return ge(new Error,{type:t,[Pg]:!0},e)}function sn(t,e){return t instanceof Error&&Pg in t&&(e==null||!!(t.type&e))}const df="[^/]+?",HE={sensitive:!1,strict:!1,start:!0,end:!0},BE=/[.+*?^${}()[\]/\\]/g;function VE(t,e){const n=ge({},HE,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=40+(n.sensitive?.25:0);if(f.type===0)d||(s+="/"),s+=f.value.replace(BE,"\\$&"),h+=40;else if(f.type===1){const{value:g,repeatable:_,optional:y,regexp:T}=f;i.push({name:g,repeatable:_,optional:y});const b=T||df;if(b!==df){h+=10;try{new RegExp(`(${b})`)}catch(I){throw new Error(`Invalid custom RegExp for param "${g}" (${b}): `+I.message)}}let A=_?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;d||(A=y&&c.length<2?`(?:/${A})`:"/"+A),y&&(A+="?"),s+=A,h+=20,y&&(h+=-8),_&&(h+=-20),b===".*"&&(h+=-50)}u.push(h)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",g=i[f-1];d[g.name]=h&&g.repeatable?h.split("/"):h}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===0)u+=h.value;else if(h.type===1){const{value:g,repeatable:_,optional:y}=h,T=g in c?c[g]:"";if(Ut(T)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const b=Ut(T)?T.join("/"):T;if(!b)if(y)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=b}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function WE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function xg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=WE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ff(r))return 1;if(ff(s))return-1}return s.length-r.length}function ff(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const GE={type:0,value:""},KE=/[a-zA-Z0-9_]/;function qE(t){if(!t)return[[]];if(t==="/")return[[GE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function d(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:l==="("?n=2:KE.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),s}function zE(t,e,n){const r=VE(qE(t.path),n),s=ge(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function YE(t,e){const n=[],r=new Map;e=mf({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,f,h){const g=!h,_=pf(d);_.aliasOf=h&&h.record;const y=mf(e,d),T=[_];if("alias"in d){const I=typeof d.alias=="string"?[d.alias]:d.alias;for(const H of I)T.push(pf(ge({},_,{components:h?h.record.components:_.components,path:H,aliasOf:h?h.record:_})))}let b,A;for(const I of T){const{path:H}=I;if(f&&H[0]!=="/"){const x=f.record.path,j=x[x.length-1]==="/"?"":"/";I.path=f.record.path+(H&&j+H)}if(b=zE(I,f,y),h?h.alias.push(b):(A=A||b,A!==b&&A.alias.push(b),g&&d.name&&!gf(b)&&o(d.name)),Og(b)&&l(b),_.children){const x=_.children;for(let j=0;j<x.length;j++)i(x[j],b,h&&h.children[j])}h=h||b}return A?()=>{o(A)}:Xs}function o(d){if(Rg(d)){const f=r.get(d);f&&(r.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const f=XE(d,n);n.splice(f,0,d),d.record.name&&!gf(d)&&r.set(d.record.name,d)}function c(d,f){let h,g={},_,y;if("name"in d&&d.name){if(h=r.get(d.name),!h)throw ss(1,{location:d});y=h.record.name,g=ge(hf(f.params,h.keys.filter(A=>!A.optional).concat(h.parent?h.parent.keys.filter(A=>A.optional):[]).map(A=>A.name)),d.params&&hf(d.params,h.keys.map(A=>A.name))),_=h.stringify(g)}else if(d.path!=null)_=d.path,h=n.find(A=>A.re.test(_)),h&&(g=h.parse(_),y=h.record.name);else{if(h=f.name?r.get(f.name):n.find(A=>A.re.test(f.path)),!h)throw ss(1,{location:d,currentLocation:f});y=h.record.name,g=ge({},f.params,d.params),_=h.stringify(g)}const T=[];let b=h;for(;b;)T.unshift(b.record),b=b.parent;return{name:y,path:_,params:g,matched:T,meta:JE(T)}}t.forEach(d=>i(d));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function hf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function pf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:QE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function QE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function gf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function JE(t){return t.reduce((e,n)=>ge(e,n.meta),{})}function mf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function XE(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;xg(t,e[i])<0?r=i:n=i+1}const s=ZE(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function ZE(t){let e=t;for(;e=e.parent;)if(Og(e)&&xg(t,e)===0)return e}function Og({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function e0(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Cg," "),o=i.indexOf("="),a=gi(o<0?i:i.slice(0,o)),l=o<0?null:gi(i.slice(o+1));if(a in e){let c=e[a];Ut(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function _f(t){let e="";for(let n in t){const r=t[n];if(n=yE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ut(r)?r.map(i=>i&&Jl(i)):[r&&Jl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function t0(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ut(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const n0=Symbol(""),vf=Symbol(""),Ta=Symbol(""),Ng=Symbol(""),Zl=Symbol("");function xs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ln(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(ss(4,{from:n,to:e})):f instanceof Error?l(f):jE(f)?l(ss(2,{from:e,to:f})):(o&&r.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=i(()=>t.call(r&&r.instances[s],e,n,c));let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function ul(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(wg(l)){const u=(l.__vccOpts||l)[e];u&&i.push(Ln(u,n,r,o,a,s))}else{let c=l();i.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=lE(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const h=(d.__vccOpts||d)[e];return h&&Ln(h,n,r,o,a,s)()}))}}return i}function yf(t){const e=Pe(Ta),n=Pe(Ng),r=V(()=>{const l=de(t.to);return e.resolve(l)}),s=V(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(rs.bind(null,u));if(f>-1)return f;const h=bf(l[c-2]);return c>1&&bf(u)===h&&d[d.length-1].path!==h?d.findIndex(rs.bind(null,l[c-2])):f}),i=V(()=>s.value>-1&&a0(n.params,r.value.params)),o=V(()=>s.value>-1&&s.value===n.matched.length-1&&Ag(n.params,r.value.params));function a(l={}){if(o0(l)){const c=e[de(t.replace)?"replace":"push"](de(t.to)).catch(Xs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:r,href:V(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function r0(t){return t.length===1?t[0]:t}const s0=ct({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:yf,setup(t,{slots:e}){const n=ps(yf(t)),{options:r}=Pe(Ta),s=V(()=>({[wf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[wf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&r0(e.default(n));return t.custom?i:Ne("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),i0=s0;function o0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function a0(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ut(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function bf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const wf=(t,e,n)=>t??e??n,l0=ct({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Pe(Zl),s=V(()=>t.route||r.value),i=Pe(vf,0),o=V(()=>{let c=de(i);const{matched:u}=s.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=V(()=>s.value.matched[o.value]);ht(vf,V(()=>o.value+1)),ht(n0,a),ht(Zl,s);const l=q();return tt(()=>[l.value,a.value,t.name],([c,u,d],[f,h,g])=>{u&&(u.instances[d]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!rs(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,d=a.value,f=d&&d.components[u];if(!f)return Ef(n.default,{Component:f,route:c});const h=d.props[u],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,y=Ne(f,ge({},g,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Ef(n.default,{Component:y,route:c})||y}}});function Ef(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const c0=l0;function u0(t){const e=YE(t.routes,t),n=t.parseQuery||e0,r=t.stringifyQuery||_f,s=t.history,i=xs(),o=xs(),a=xs(),l=Wc(Rn);let c=Rn;Fr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ll.bind(null,E=>""+E),d=ll.bind(null,wE),f=ll.bind(null,gi);function h(E,$){let D,B;return Rg(E)?(D=e.getRecordMatcher(E),B=$):B=E,e.addRoute(B,D)}function g(E){const $=e.getRecordMatcher(E);$&&e.removeRoute($)}function _(){return e.getRoutes().map(E=>E.record)}function y(E){return!!e.getRecordMatcher(E)}function T(E,$){if($=ge({},$||l.value),typeof E=="string"){const v=cl(n,E,$.path),w=e.resolve({path:v.path},$),S=s.createHref(v.fullPath);return ge(v,w,{params:f(w.params),hash:gi(v.hash),redirectedFrom:void 0,href:S})}let D;if(E.path!=null)D=ge({},E,{path:cl(n,E.path,$.path).path});else{const v=ge({},E.params);for(const w in v)v[w]==null&&delete v[w];D=ge({},E,{params:d(v)}),$.params=d($.params)}const B=e.resolve(D,$),we=E.hash||"";B.params=u(f(B.params));const p=IE(r,ge({},E,{hash:vE(we),path:B.path})),m=s.createHref(p);return ge({fullPath:p,hash:we,query:r===_f?t0(E.query):E.query||{}},B,{redirectedFrom:void 0,href:m})}function b(E){return typeof E=="string"?cl(n,E,l.value.path):ge({},E)}function A(E,$){if(c!==E)return ss(8,{from:$,to:E})}function I(E){return j(E)}function H(E){return I(ge(b(E),{replace:!0}))}function x(E){const $=E.matched[E.matched.length-1];if($&&$.redirect){const{redirect:D}=$;let B=typeof D=="function"?D(E):D;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=b(B):{path:B},B.params={}),ge({query:E.query,hash:E.hash,params:B.path!=null?{}:E.params},B)}}function j(E,$){const D=c=T(E),B=l.value,we=E.state,p=E.force,m=E.replace===!0,v=x(D);if(v)return j(ge(b(v),{state:typeof v=="object"?ge({},we,v.state):we,force:p,replace:m}),$||D);const w=D;w.redirectedFrom=$;let S;return!p&&SE(r,B,D)&&(S=ss(16,{to:w,from:B}),oe(B,B,!0,!1)),(S?Promise.resolve(S):R(w,B)).catch(C=>sn(C)?sn(C,2)?C:Rt(C):ue(C,w,B)).then(C=>{if(C){if(sn(C,2))return j(ge({replace:m},b(C.to),{state:typeof C.to=="object"?ge({},we,C.to.state):we,force:p}),$||w)}else C=L(w,B,!0,m,we);return Q(w,B,C),C})}function Y(E,$){const D=A(E,$);return D?Promise.reject(D):Promise.resolve()}function U(E){const $=Fe.values().next().value;return $&&typeof $.runWithContext=="function"?$.runWithContext(E):E()}function R(E,$){let D;const[B,we,p]=d0(E,$);D=ul(B.reverse(),"beforeRouteLeave",E,$);for(const v of B)v.leaveGuards.forEach(w=>{D.push(Ln(w,E,$))});const m=Y.bind(null,E,$);return D.push(m),Ke(D).then(()=>{D=[];for(const v of i.list())D.push(Ln(v,E,$));return D.push(m),Ke(D)}).then(()=>{D=ul(we,"beforeRouteUpdate",E,$);for(const v of we)v.updateGuards.forEach(w=>{D.push(Ln(w,E,$))});return D.push(m),Ke(D)}).then(()=>{D=[];for(const v of p)if(v.beforeEnter)if(Ut(v.beforeEnter))for(const w of v.beforeEnter)D.push(Ln(w,E,$));else D.push(Ln(v.beforeEnter,E,$));return D.push(m),Ke(D)}).then(()=>(E.matched.forEach(v=>v.enterCallbacks={}),D=ul(p,"beforeRouteEnter",E,$,U),D.push(m),Ke(D))).then(()=>{D=[];for(const v of o.list())D.push(Ln(v,E,$));return D.push(m),Ke(D)}).catch(v=>sn(v,8)?v:Promise.reject(v))}function Q(E,$,D){a.list().forEach(B=>U(()=>B(E,$,D)))}function L(E,$,D,B,we){const p=A(E,$);if(p)return p;const m=$===Rn,v=Fr?history.state:{};D&&(B||m?s.replace(E.fullPath,ge({scroll:m&&v&&v.scroll},we)):s.push(E.fullPath,we)),l.value=E,oe(E,$,D,m),Rt()}let ne;function Ae(){ne||(ne=s.listen((E,$,D)=>{if(!An.listening)return;const B=T(E),we=x(B);if(we){j(ge(we,{replace:!0,force:!0}),B).catch(Xs);return}c=B;const p=l.value;Fr&&NE(lf(p.fullPath,D.delta),Sa()),R(B,p).catch(m=>sn(m,12)?m:sn(m,2)?(j(ge(b(m.to),{force:!0}),B).then(v=>{sn(v,20)&&!D.delta&&D.type===mi.pop&&s.go(-1,!1)}).catch(Xs),Promise.reject()):(D.delta&&s.go(-D.delta,!1),ue(m,B,p))).then(m=>{m=m||L(B,p,!1),m&&(D.delta&&!sn(m,8)?s.go(-D.delta,!1):D.type===mi.pop&&sn(m,20)&&s.go(-1,!1)),Q(B,p,m)}).catch(Xs)}))}let xe=xs(),pe=xs(),le;function ue(E,$,D){Rt(E);const B=pe.list();return B.length?B.forEach(we=>we(E,$,D)):console.error(E),Promise.reject(E)}function Et(){return le&&l.value!==Rn?Promise.resolve():new Promise((E,$)=>{xe.add([E,$])})}function Rt(E){return le||(le=!E,Ae(),xe.list().forEach(([$,D])=>E?D(E):$()),xe.reset()),E}function oe(E,$,D,B){const{scrollBehavior:we}=t;if(!Fr||!we)return Promise.resolve();const p=!D&&LE(lf(E.fullPath,0))||(B||!D)&&history.state&&history.state.scroll||null;return gs().then(()=>we(E,$,p)).then(m=>m&&OE(m)).catch(m=>ue(m,E,$))}const ae=E=>s.go(E);let De;const Fe=new Set,An={currentRoute:l,listening:!0,addRoute:h,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:y,getRoutes:_,resolve:T,options:t,push:I,replace:H,go:ae,back:()=>ae(-1),forward:()=>ae(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:pe.add,isReady:Et,install(E){const $=this;E.component("RouterLink",i0),E.component("RouterView",c0),E.config.globalProperties.$router=$,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>de(l)}),Fr&&!De&&l.value===Rn&&(De=!0,I(s.location).catch(we=>{}));const D={};for(const we in Rn)Object.defineProperty(D,we,{get:()=>l.value[we],enumerable:!0});E.provide(Ta,$),E.provide(Ng,Tp(D)),E.provide(Zl,l);const B=E.unmount;Fe.add(E),E.unmount=function(){Fe.delete(E),Fe.size<1&&(c=Rn,ne&&ne(),ne=null,l.value=Rn,De=!1,le=!1),B()}}};function Ke(E){return E.reduce(($,D)=>$.then(()=>U(D)),Promise.resolve())}return An}function d0(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>rs(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>rs(c,l))||s.push(l))}return[n,r,s]}function Lg(){return Pe(Ta)}const Mg=/^[a-z0-9]+(-[a-z0-9]+)*$/,Aa=(t,e,n,r="")=>{const s=t.split(":");if(t.slice(0,1)==="@"){if(s.length<2||s.length>3)return null;r=s.shift().slice(1)}if(s.length>3||!s.length)return null;if(s.length>1){const a=s.pop(),l=s.pop(),c={provider:s.length>0?s[0]:r,prefix:l,name:a};return e&&!_o(c)?null:c}const i=s[0],o=i.split("-");if(o.length>1){const a={provider:r,prefix:o.shift(),name:o.join("-")};return e&&!_o(a)?null:a}if(n&&r===""){const a={provider:r,prefix:"",name:i};return e&&!_o(a,n)?null:a}return null},_o=(t,e)=>t?!!((e&&t.prefix===""||t.prefix)&&t.name):!1,Dg=Object.freeze({left:0,top:0,width:16,height:16}),Do=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),ka=Object.freeze({...Dg,...Do}),ec=Object.freeze({...ka,body:"",hidden:!1});function f0(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(e.rotate||0))%4;return r&&(n.rotate=r),n}function Cf(t,e){const n=f0(t,e);for(const r in ec)r in Do?r in t&&!(r in n)&&(n[r]=Do[r]):r in e?n[r]=e[r]:r in t&&(n[r]=t[r]);return n}function h0(t,e){const n=t.icons,r=t.aliases||Object.create(null),s=Object.create(null);function i(o){if(n[o])return s[o]=[];if(!(o in s)){s[o]=null;const a=r[o]&&r[o].parent,l=a&&i(a);l&&(s[o]=[a].concat(l))}return s[o]}return Object.keys(n).concat(Object.keys(r)).forEach(i),s}function p0(t,e,n){const r=t.icons,s=t.aliases||Object.create(null);let i={};function o(a){i=Cf(r[a]||s[a],i)}return o(e),n.forEach(o),Cf(t,i)}function Fg(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(s=>{e(s,null),n.push(s)});const r=h0(t);for(const s in r){const i=r[s];i&&(e(s,p0(t,s,i)),n.push(s))}return n}const g0={provider:"",aliases:{},not_found:{},...Dg};function dl(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function Ug(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!dl(t,g0))return null;const n=e.icons;for(const s in n){const i=n[s];if(!s||typeof i.body!="string"||!dl(i,ec))return null}const r=e.aliases||Object.create(null);for(const s in r){const i=r[s],o=i.parent;if(!s||typeof o!="string"||!n[o]&&!r[o]||!dl(i,ec))return null}return e}const If=Object.create(null);function m0(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function is(t,e){const n=If[t]||(If[t]=Object.create(null));return n[e]||(n[e]=m0(t,e))}function $g(t,e){return Ug(e)?Fg(e,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function _0(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let _i=!1;function jg(t){return typeof t=="boolean"&&(_i=t),_i}function v0(t){const e=typeof t=="string"?Aa(t,!0,_i):t;if(e){const n=is(e.provider,e.prefix),r=e.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function y0(t,e){const n=Aa(t,!0,_i);if(!n)return!1;const r=is(n.provider,n.prefix);return e?_0(r,n.name,e):(r.missing.add(n.name),!0)}function b0(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),_i&&!e&&!t.prefix){let s=!1;return Ug(t)&&(t.prefix="",Fg(t,(i,o)=>{y0(i,o)&&(s=!0)})),s}const n=t.prefix;if(!_o({prefix:n,name:"a"}))return!1;const r=is(e,n);return!!$g(r,t)}const Hg=Object.freeze({width:null,height:null}),Bg=Object.freeze({...Hg,...Do}),w0=/(-?[0-9.]*[0-9]+[0-9.]*)/g,E0=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Sf(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const r=t.split(w0);if(r===null||!r.length)return t;const s=[];let i=r.shift(),o=E0.test(i);for(;;){if(o){const a=parseFloat(i);isNaN(a)?s.push(i):s.push(Math.ceil(a*e*n)/n)}else s.push(i);if(i=r.shift(),i===void 0)return s.join("");o=!o}}function C0(t,e="defs"){let n="";const r=t.indexOf("<"+e);for(;r>=0;){const s=t.indexOf(">",r),i=t.indexOf("</"+e);if(s===-1||i===-1)break;const o=t.indexOf(">",i);if(o===-1)break;n+=t.slice(s+1,i).trim(),t=t.slice(0,r).trim()+t.slice(o+1)}return{defs:n,content:t}}function I0(t,e){return t?"<defs>"+t+"</defs>"+e:e}function S0(t,e,n){const r=C0(t);return I0(r.defs,e+r.content+n)}const T0=t=>t==="unset"||t==="undefined"||t==="none";function A0(t,e){const n={...ka,...t},r={...Bg,...e},s={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(_=>{const y=[],T=_.hFlip,b=_.vFlip;let A=_.rotate;T?b?A+=2:(y.push("translate("+(s.width+s.left).toString()+" "+(0-s.top).toString()+")"),y.push("scale(-1 1)"),s.top=s.left=0):b&&(y.push("translate("+(0-s.left).toString()+" "+(s.height+s.top).toString()+")"),y.push("scale(1 -1)"),s.top=s.left=0);let I;switch(A<0&&(A-=Math.floor(A/4)*4),A=A%4,A){case 1:I=s.height/2+s.top,y.unshift("rotate(90 "+I.toString()+" "+I.toString()+")");break;case 2:y.unshift("rotate(180 "+(s.width/2+s.left).toString()+" "+(s.height/2+s.top).toString()+")");break;case 3:I=s.width/2+s.left,y.unshift("rotate(-90 "+I.toString()+" "+I.toString()+")");break}A%2===1&&(s.left!==s.top&&(I=s.left,s.left=s.top,s.top=I),s.width!==s.height&&(I=s.width,s.width=s.height,s.height=I)),y.length&&(i=S0(i,'<g transform="'+y.join(" ")+'">',"</g>"))});const o=r.width,a=r.height,l=s.width,c=s.height;let u,d;o===null?(d=a===null?"1em":a==="auto"?c:a,u=Sf(d,l/c)):(u=o==="auto"?l:o,d=a===null?Sf(u,c/l):a==="auto"?c:a);const f={},h=(_,y)=>{T0(y)||(f[_]=y.toString())};h("width",u),h("height",d);const g=[s.left,s.top,l,c];return f.viewBox=g.join(" "),{attributes:f,viewBox:g,body:i}}const k0=/\sid="(\S+)"/g,R0="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let P0=0;function x0(t,e=R0){const n=[];let r;for(;r=k0.exec(t);)n.push(r[1]);if(!n.length)return t;const s="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const o=typeof e=="function"?e(i):e+(P0++).toString(),a=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+o+s+"$3")}),t=t.replace(new RegExp(s,"g"),""),t}const tc=Object.create(null);function O0(t,e){tc[t]=e}function nc(t){return tc[t]||tc[""]}function tu(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const nu=Object.create(null),Os=["https://api.simplesvg.com","https://api.unisvg.com"],vo=[];for(;Os.length>0;)Os.length===1||Math.random()>.5?vo.push(Os.shift()):vo.push(Os.pop());nu[""]=tu({resources:["https://api.iconify.design"].concat(vo)});function N0(t,e){const n=tu(e);return n===null?!1:(nu[t]=n,!0)}function ru(t){return nu[t]}const L0=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let Tf=L0();function M0(t,e){const n=ru(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let s=0;n.resources.forEach(o=>{s=Math.max(s,o.length)});const i=e+".json?icons=";r=n.maxURL-s-n.path.length-i.length}return r}function D0(t){return t===404}const F0=(t,e,n)=>{const r=[],s=M0(t,e),i="icons";let o={type:i,provider:t,prefix:e,icons:[]},a=0;return n.forEach((l,c)=>{a+=l.length+1,a>=s&&c>0&&(r.push(o),o={type:i,provider:t,prefix:e,icons:[]},a=l.length),o.icons.push(l)}),r.push(o),r};function U0(t){if(typeof t=="string"){const e=ru(t);if(e)return e.path}return"/"}const $0=(t,e,n)=>{if(!Tf){n("abort",424);return}let r=U0(e.provider);switch(e.type){case"icons":{const i=e.prefix,a=e.icons.join(","),l=new URLSearchParams({icons:a});r+=i+".json?"+l.toString();break}case"custom":{const i=e.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let s=503;Tf(t+r).then(i=>{const o=i.status;if(o!==200){setTimeout(()=>{n(D0(o)?"abort":"next",o)});return}return s=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",s)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",s)})},j0={prepare:F0,send:$0};function H0(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((s,i)=>s.provider!==i.provider?s.provider.localeCompare(i.provider):s.prefix!==i.prefix?s.prefix.localeCompare(i.prefix):s.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return t.forEach(s=>{if(r.name===s.name&&r.prefix===s.prefix&&r.provider===s.provider)return;r=s;const i=s.provider,o=s.prefix,a=s.name,l=n[i]||(n[i]=Object.create(null)),c=l[o]||(l[o]=is(i,o));let u;a in c.icons?u=e.loaded:o===""||c.missing.has(a)?u=e.missing:u=e.pending;const d={provider:i,prefix:o,name:a};u.push(d)}),e}function Vg(t,e){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(s=>s.id!==e))})}function B0(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const r=t.provider,s=t.prefix;e.forEach(i=>{const o=i.icons,a=o.pending.length;o.pending=o.pending.filter(l=>{if(l.prefix!==s)return!0;const c=l.name;if(t.icons[c])o.loaded.push({provider:r,prefix:s,name:c});else if(t.missing.has(c))o.missing.push({provider:r,prefix:s,name:c});else return n=!0,!0;return!1}),o.pending.length!==a&&(n||Vg([t],i.id),i.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),i.abort))})}))}let V0=0;function W0(t,e,n){const r=V0++,s=Vg.bind(null,n,r);if(!e.pending.length)return s;const i={id:r,icons:e,callback:t,abort:s};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(i)}),s}function G0(t,e=!0,n=!1){const r=[];return t.forEach(s=>{const i=typeof s=="string"?Aa(s,e,n):s;i&&r.push(i)}),r}var K0={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function q0(t,e,n,r){const s=t.resources.length,i=t.random?Math.floor(Math.random()*s):t.index;let o;if(t.random){let x=t.resources.slice(0);for(o=[];x.length>1;){const j=Math.floor(Math.random()*x.length);o.push(x[j]),x=x.slice(0,j).concat(x.slice(j+1))}o=o.concat(x)}else o=t.resources.slice(i).concat(t.resources.slice(0,i));const a=Date.now();let l="pending",c=0,u,d=null,f=[],h=[];typeof r=="function"&&h.push(r);function g(){d&&(clearTimeout(d),d=null)}function _(){l==="pending"&&(l="aborted"),g(),f.forEach(x=>{x.status==="pending"&&(x.status="aborted")}),f=[]}function y(x,j){j&&(h=[]),typeof x=="function"&&h.push(x)}function T(){return{startTime:a,payload:e,status:l,queriesSent:c,queriesPending:f.length,subscribe:y,abort:_}}function b(){l="failed",h.forEach(x=>{x(void 0,u)})}function A(){f.forEach(x=>{x.status==="pending"&&(x.status="aborted")}),f=[]}function I(x,j,Y){const U=j!=="success";switch(f=f.filter(R=>R!==x),l){case"pending":break;case"failed":if(U||!t.dataAfterTimeout)return;break;default:return}if(j==="abort"){u=Y,b();return}if(U){u=Y,f.length||(o.length?H():b());return}if(g(),A(),!t.random){const R=t.resources.indexOf(x.resource);R!==-1&&R!==t.index&&(t.index=R)}l="completed",h.forEach(R=>{R(Y)})}function H(){if(l!=="pending")return;g();const x=o.shift();if(x===void 0){if(f.length){d=setTimeout(()=>{g(),l==="pending"&&(A(),b())},t.timeout);return}b();return}const j={status:"pending",resource:x,callback:(Y,U)=>{I(j,Y,U)}};f.push(j),c++,d=setTimeout(H,t.rotate),n(x,e,j.callback)}return setTimeout(H),T}function Wg(t){const e={...K0,...t};let n=[];function r(){n=n.filter(a=>a().status==="pending")}function s(a,l,c){const u=q0(e,a,l,(d,f)=>{r(),c&&c(d,f)});return n.push(u),u}function i(a){return n.find(l=>a(l))||null}return{query:s,find:i,setIndex:a=>{e.index=a},getIndex:()=>e.index,cleanup:r}}function Af(){}const fl=Object.create(null);function z0(t){if(!fl[t]){const e=ru(t);if(!e)return;const n=Wg(e),r={config:e,redundancy:n};fl[t]=r}return fl[t]}function Y0(t,e,n){let r,s;if(typeof t=="string"){const i=nc(t);if(!i)return n(void 0,424),Af;s=i.send;const o=z0(t);o&&(r=o.redundancy)}else{const i=tu(t);if(i){r=Wg(i);const o=t.resources?t.resources[0]:"",a=nc(o);a&&(s=a.send)}}return!r||!s?(n(void 0,424),Af):r.query(e,s,n)().abort}function kf(){}function Q0(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,B0(t)}))}function J0(t){const e=[],n=[];return t.forEach(r=>{(r.match(Mg)?e:n).push(r)}),{valid:e,invalid:n}}function Ns(t,e,n){function r(){const s=t.pendingIcons;e.forEach(i=>{s&&s.delete(i),t.icons[i]||t.missing.add(i)})}if(n&&typeof n=="object")try{if(!$g(t,n).length){r();return}}catch(s){console.error(s)}r(),Q0(t)}function Rf(t,e){t instanceof Promise?t.then(n=>{e(n)}).catch(()=>{e(null)}):e(t)}function X0(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,s=t.iconsToLoad;if(delete t.iconsToLoad,!s||!s.length)return;const i=t.loadIcon;if(t.loadIcons&&(s.length>1||!i)){Rf(t.loadIcons(s,r,n),u=>{Ns(t,s,u)});return}if(i){s.forEach(u=>{const d=i(u,r,n);Rf(d,f=>{const h=f?{prefix:r,icons:{[u]:f}}:null;Ns(t,[u],h)})});return}const{valid:o,invalid:a}=J0(s);if(a.length&&Ns(t,a,null),!o.length)return;const l=r.match(Mg)?nc(n):null;if(!l){Ns(t,o,null);return}l.prepare(n,r,o).forEach(u=>{Y0(n,u,d=>{Ns(t,u.icons,d)})})}))}const Z0=(t,e)=>{const n=G0(t,!0,jg()),r=H0(n);if(!r.pending.length){let l=!0;return e&&setTimeout(()=>{l&&e(r.loaded,r.missing,r.pending,kf)}),()=>{l=!1}}const s=Object.create(null),i=[];let o,a;return r.pending.forEach(l=>{const{provider:c,prefix:u}=l;if(u===a&&c===o)return;o=c,a=u,i.push(is(c,u));const d=s[c]||(s[c]=Object.create(null));d[u]||(d[u]=[])}),r.pending.forEach(l=>{const{provider:c,prefix:u,name:d}=l,f=is(c,u),h=f.pendingIcons||(f.pendingIcons=new Set);h.has(d)||(h.add(d),s[c][u].push(d))}),i.forEach(l=>{const c=s[l.provider][l.prefix];c.length&&X0(l,c)}),e?W0(e,r,i):kf};function eC(t,e){const n={...t};for(const r in e){const s=e[r],i=typeof s;r in Hg?(s===null||s&&(i==="string"||i==="number"))&&(n[r]=s):i===typeof n[r]&&(n[r]=r==="rotate"?s%4:s)}return n}const tC=/[\s,]+/;function nC(t,e){e.split(tC).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function rC(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function r(s){for(;s<0;)s+=4;return s%4}if(n===""){const s=parseInt(t);return isNaN(s)?0:r(s)}else if(n!==t){let s=0;switch(n){case"%":s=25;break;case"deg":s=90}if(s){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/s,i%1===0?r(i):0)}}return e}function sC(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in e)n+=" "+r+'="'+e[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function iC(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function oC(t){return"data:image/svg+xml,"+iC(t)}function aC(t){return'url("'+oC(t)+'")'}const Pf={...Bg,inline:!1},lC={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},cC={display:"inline-block"},rc={backgroundColor:"currentColor"},Gg={backgroundColor:"transparent"},xf={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Of={webkitMask:rc,mask:rc,background:Gg};for(const t in Of){const e=Of[t];for(const n in xf)e[t+n]=xf[n]}const yo={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";yo[t+"-flip"]=e,yo[t.slice(0,1)+"-flip"]=e,yo[t+"Flip"]=e});function Nf(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const Lf=(t,e)=>{const n=eC(Pf,e),r={...lC},s=e.mode||"svg",i={},o=e.style,a=typeof o=="object"&&!(o instanceof Array)?o:{};for(let _ in e){const y=e[_];if(y!==void 0)switch(_){case"icon":case"style":case"onLoad":case"mode":case"ssr":break;case"inline":case"hFlip":case"vFlip":n[_]=y===!0||y==="true"||y===1;break;case"flip":typeof y=="string"&&nC(n,y);break;case"color":i.color=y;break;case"rotate":typeof y=="string"?n[_]=rC(y):typeof y=="number"&&(n[_]=y);break;case"ariaHidden":case"aria-hidden":y!==!0&&y!=="true"&&delete r["aria-hidden"];break;default:{const T=yo[_];T?(y===!0||y==="true"||y===1)&&(n[T]=!0):Pf[_]===void 0&&(r[_]=y)}}}const l=A0(t,n),c=l.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),s==="svg"){r.style={...i,...a},Object.assign(r,c);let _=0,y=e.id;return typeof y=="string"&&(y=y.replace(/-/g,"_")),r.innerHTML=x0(l.body,y?()=>y+"ID"+_++:"iconifyVue"),Ne("svg",r)}const{body:u,width:d,height:f}=t,h=s==="mask"||(s==="bg"?!1:u.indexOf("currentColor")!==-1),g=sC(u,{...c,width:d+"",height:f+""});return r.style={...i,"--svg":aC(g),width:Nf(c.width),height:Nf(c.height),...cC,...h?rc:Gg,...a},Ne("span",r)};jg(!0);O0("",j0);if(typeof document<"u"&&typeof window<"u"){const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!b0(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const r="IconifyProviders["+n+"] is invalid.";try{const s=e[n];if(typeof s!="object"||!s||s.resources===void 0)continue;N0(n,s)||console.error(r)}catch{console.error(r)}}}}const uC={...ka,body:""},os=ct({inheritAttrs:!1,data(){return{_name:"",_loadingIcon:null,iconMounted:!1,counter:0}},mounted(){this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e,n){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let r;if(typeof t!="string"||(r=Aa(t,!1,!0))===null)return this.abortLoading(),null;let s=v0(r);if(!s)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",s!==null&&(this._loadingIcon={name:t,abort:Z0([r],()=>{this.counter++})})),null;if(this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t)),n){s=Object.assign({},s);const o=n(s.body,r.name,r.prefix,r.provider);typeof o=="string"&&(s.body=o)}const i=["iconify"];return r.prefix!==""&&i.push("iconify--"+r.prefix),r.provider!==""&&i.push("iconify--"+r.provider),{data:s,classes:i}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted||t.ssr?this.getIcon(t.icon,t.onLoad,t.customise):null;if(!e)return Lf(uC,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),Lf({...ka,...e.data},n)}}),dC=["disabled","type"],vi={__name:"BaseButton",props:{customClass:{type:String,default:""},disabled:{type:Boolean,default:!1},type:{type:String,default:"button"}},setup(t){return(e,n)=>(Ye(),jt("div",null,[z("button",{class:mn(["py-1.5 px-3 border rounded shadow transition-colors",t.customClass||"bg-white hover:bg-gray-100 text-gray-800 border-gray-400 dark:bg-sky-800 dark:text-white dark:hover:bg-gray-800 dark:border-sky-600"]),disabled:t.disabled,type:t.type},[Xr(e.$slots,"default")],10,dC)]))}},fC={class:"relative mb-4"},hC={class:"relative"},pC=["type"],gC={class:"py-4"},mC={class:"flex gap-4 justify-center mt-6"},_C={class:"mt-4 text-center"},vC={__name:"LoginComponent",emits:["emit-user"],setup(t,{emit:e}){const n=e,r=q(""),s=q(""),i=q(!1),o=V(()=>r.value.trim().length>0&&s.value.trim().length>0);function a(){o.value&&(n("emit-user",[r.value,s.value,"Login"]),c())}function l(){o.value&&(n("emit-user",[r.value,s.value,"Signup"]),c())}function c(){r.value="",s.value=""}function u(){i.value=!i.value}return(d,f)=>{const h=Kc("router-link");return Ye(),jt("form",null,[z("div",fC,[Fl(z("input",{type:"text",class:"peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]",id:"email",placeholder:"name@example.com","onUpdate:modelValue":f[0]||(f[0]=g=>r.value=g),onKeydown:nf(a,["enter"])},null,544),[[Lo,r.value]]),f[2]||(f[2]=z("label",{for:"email",class:"pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"},"Email",-1))]),z("div",hC,[Fl(z("input",{type:i.value?"text":"password",class:"peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] bg-",id:"password",placeholder:"Password","onUpdate:modelValue":f[1]||(f[1]=g=>s.value=g),onKeydown:nf(a,["enter"])},null,40,pC),[[Sw,s.value]]),z("div",gC,[z("input",{type:"checkbox",id:"showPassword",onChange:u},null,32),f[3]||(f[3]=z("label",{for:"showPassword",class:"p-1 dark:text-white"},"Mostrar Senha",-1))]),f[4]||(f[4]=z("label",{for:"password",class:"pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"},"Senha",-1))]),z("div",mC,[Z(vi,{onClick:Kl(a,["prevent"]),"custom-class":"bg-indigo-500 hover:bg-indigo-600 text-white border-indigo-500 font-semibold disabled:opacity-50 transition-all duration-200",disabled:!o.value},{default:ke(()=>f[5]||(f[5]=[at(" Login ")])),_:1,__:[5]},8,["disabled"]),Z(vi,{onClick:Kl(l,["prevent"]),"custom-class":"bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-500 font-semibold disabled:opacity-50 transition-all duration-200",disabled:!o.value},{default:ke(()=>f[6]||(f[6]=[at(" Registrar-se ")])),_:1,__:[6]},8,["disabled"])]),z("div",_C,[Z(h,{to:"/forgot-password",class:"text-sm text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 underline transition-colors"},{default:ke(()=>f[7]||(f[7]=[at(" Esqueci minha senha ")])),_:1,__:[7]})])])}}},Ra=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},yC={},bC={class:"text-base text-red-600"};function wC(t,e){return Ye(),jt("div",null,[Z(tw,{name:"message"},{default:ke(()=>[z("p",bC,[Xr(t.$slots,"default",{},void 0,!0)])]),_:3})])}const Kg=Ra(yC,[["render",wC],["__scopeId","data-v-e583e2cf"]]),EC={},CC={class:"flex items-center justify-center min-h-[calc(100vh-140px)] px-4 py-4"},IC={class:"rounded-2xl shadow-xl backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 p-6 w-full max-w-md mx-auto border border-indigo-100 dark:border-slate-700"};function SC(t,e){return Ye(),jt("div",CC,[z("div",IC,[Xr(t.$slots,"default")])])}const Pa=Ra(EC,[["render",SC]]);function TC(t,e,n){let r=q(n==null?void 0:n.value),s=V(()=>t.value!==void 0);return[V(()=>s.value?t.value:r.value),function(i){return s.value||(r.value=i),e==null?void 0:e(i)}]}function su(t){typeof queueMicrotask=="function"?queueMicrotask(t):Promise.resolve().then(t).catch(e=>setTimeout(()=>{throw e}))}function Fi(){let t=[],e={addEventListener(n,r,s,i){return n.addEventListener(r,s,i),e.add(()=>n.removeEventListener(r,s,i))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);e.add(()=>cancelAnimationFrame(r))},nextFrame(...n){e.requestAnimationFrame(()=>{e.requestAnimationFrame(...n)})},setTimeout(...n){let r=setTimeout(...n);e.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return su(()=>{r.current&&n[0]()}),e.add(()=>{r.current=!1})},style(n,r,s){let i=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:s}),this.add(()=>{Object.assign(n.style,{[r]:i})})},group(n){let r=Fi();return n(r),this.add(()=>r.dispose())},add(n){return t.push(n),()=>{let r=t.indexOf(n);if(r>=0)for(let s of t.splice(r,1))s()}},dispose(){for(let n of t.splice(0))n()}};return e}var Mf;let AC=Symbol("headlessui.useid"),kC=0;const Ui=(Mf=zy)!=null?Mf:function(){return Pe(AC,()=>`${++kC}`)()};function Re(t){var e;if(t==null||t.value==null)return null;let n=(e=t.value.$el)!=null?e:t.value;return n instanceof Node?n:null}function Zt(t,e,...n){if(t in e){let s=e[t];return typeof s=="function"?s(...n):s}let r=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(s=>`"${s}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Zt),r}var RC=Object.defineProperty,PC=(t,e,n)=>e in t?RC(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Df=(t,e,n)=>(PC(t,typeof e!="symbol"?e+"":e,n),n);let xC=class{constructor(){Df(this,"current",this.detect()),Df(this,"currentId",0)}set(e){this.current!==e&&(this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},$i=new xC;function ms(t){if($i.isServer)return null;if(t instanceof Node)return t.ownerDocument;if(t!=null&&t.hasOwnProperty("value")){let e=Re(t);if(e)return e.ownerDocument}return document}let sc=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var Mn=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t))(Mn||{}),qg=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(qg||{}),OC=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(OC||{});function NC(t=document.body){return t==null?[]:Array.from(t.querySelectorAll(sc)).sort((e,n)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var zg=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(zg||{});function LC(t,e=0){var n;return t===((n=ms(t))==null?void 0:n.body)?!1:Zt(e,{0(){return t.matches(sc)},1(){let r=t;for(;r!==null;){if(r.matches(sc))return!0;r=r.parentElement}return!1}})}var MC=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(MC||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",t=>{t.metaKey||t.altKey||t.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",t=>{t.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:t.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function _r(t){t==null||t.focus({preventScroll:!0})}let DC=["textarea","input"].join(",");function FC(t){var e,n;return(n=(e=t==null?void 0:t.matches)==null?void 0:e.call(t,DC))!=null?n:!1}function UC(t,e=n=>n){return t.slice().sort((n,r)=>{let s=e(n),i=e(r);if(s===null||i===null)return 0;let o=s.compareDocumentPosition(i);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function bo(t,e,{sorted:n=!0,relativeTo:r=null,skipElements:s=[]}={}){var i;let o=(i=Array.isArray(t)?t.length>0?t[0].ownerDocument:document:t==null?void 0:t.ownerDocument)!=null?i:document,a=Array.isArray(t)?n?UC(t):t:NC(t);s.length>0&&a.length>1&&(a=a.filter(g=>!s.includes(g))),r=r??o.activeElement;let l=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,a.indexOf(r))-1;if(e&4)return Math.max(0,a.indexOf(r))+1;if(e&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=e&32?{preventScroll:!0}:{},d=0,f=a.length,h;do{if(d>=f||d+f<=0)return 0;let g=c+d;if(e&16)g=(g+f)%f;else{if(g<0)return 3;if(g>=f)return 1}h=a[g],h==null||h.focus(u),d+=l}while(h!==o.activeElement);return e&6&&FC(h)&&h.select(),2}function Yg(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function $C(){return/Android/gi.test(window.navigator.userAgent)}function jC(){return Yg()||$C()}function so(t,e,n){$i.isServer||wt(r=>{document.addEventListener(t,e,n),r(()=>document.removeEventListener(t,e,n))})}function Qg(t,e,n){$i.isServer||wt(r=>{window.addEventListener(t,e,n),r(()=>window.removeEventListener(t,e,n))})}function HC(t,e,n=V(()=>!0)){function r(i,o){if(!n.value||i.defaultPrevented)return;let a=o(i);if(a===null||!a.getRootNode().contains(a))return;let l=function c(u){return typeof u=="function"?c(u()):Array.isArray(u)||u instanceof Set?u:[u]}(t);for(let c of l){if(c===null)continue;let u=c instanceof HTMLElement?c:Re(c);if(u!=null&&u.contains(a)||i.composed&&i.composedPath().includes(u))return}return!LC(a,zg.Loose)&&a.tabIndex!==-1&&i.preventDefault(),e(i,a)}let s=q(null);so("pointerdown",i=>{var o,a;n.value&&(s.value=((a=(o=i.composedPath)==null?void 0:o.call(i))==null?void 0:a[0])||i.target)},!0),so("mousedown",i=>{var o,a;n.value&&(s.value=((a=(o=i.composedPath)==null?void 0:o.call(i))==null?void 0:a[0])||i.target)},!0),so("click",i=>{jC()||s.value&&(r(i,()=>s.value),s.value=null)},!0),so("touchend",i=>r(i,()=>i.target instanceof HTMLElement?i.target:null),!0),Qg("blur",i=>r(i,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function Ff(t,e){if(t)return t;let n=e??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function BC(t,e){let n=q(Ff(t.value.type,t.value.as));return je(()=>{n.value=Ff(t.value.type,t.value.as)}),wt(()=>{var r;n.value||Re(e)&&Re(e)instanceof HTMLButtonElement&&!((r=Re(e))!=null&&r.hasAttribute("type"))&&(n.value="button")}),n}var Fo=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(Fo||{}),Hn=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(Hn||{});function Ht({visible:t=!0,features:e=0,ourProps:n,theirProps:r,...s}){var i;let o=Xg(r,n),a=Object.assign(s,{props:o});if(t||e&2&&o.static)return hl(a);if(e&1){let l=(i=o.unmount)==null||i?0:1;return Zt(l,{0(){return null},1(){return hl({...s,props:{...o,hidden:!0,style:{display:"none"}}})}})}return hl(a)}function hl({props:t,attrs:e,slots:n,slot:r,name:s}){var i,o;let{as:a,...l}=iu(t,["unmount","static"]),c=(i=n.default)==null?void 0:i.call(n,r),u={};if(r){let d=!1,f=[];for(let[h,g]of Object.entries(r))typeof g=="boolean"&&(d=!0),g===!0&&f.push(h);d&&(u["data-headlessui-state"]=f.join(" "))}if(a==="template"){if(c=Jg(c??[]),Object.keys(l).length>0||Object.keys(e).length>0){let[d,...f]=c??[];if(!WC(d)||f.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${s} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(e)).map(_=>_.trim()).filter((_,y,T)=>T.indexOf(_)===y).sort((_,y)=>_.localeCompare(y)).map(_=>`  - ${_}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(_=>`  - ${_}`).join(`
`)].join(`
`));let h=Xg((o=d.props)!=null?o:{},l,u),g=yn(d,h,!0);for(let _ in h)_.startsWith("on")&&(g.props||(g.props={}),g.props[_]=h[_]);return g}return Array.isArray(c)&&c.length===1?c[0]:c}return Ne(a,Object.assign({},l,u),{default:()=>c})}function Jg(t){return t.flatMap(e=>e.type===Xe?Jg(e.children):[e])}function Xg(...t){if(t.length===0)return{};if(t.length===1)return t[0];let e={},n={};for(let r of t)for(let s in r)s.startsWith("on")&&typeof r[s]=="function"?(n[s]!=null||(n[s]=[]),n[s].push(r[s])):e[s]=r[s];if(e.disabled||e["aria-disabled"])return Object.assign(e,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(e,{[r](s,...i){let o=n[r];for(let a of o){if(s instanceof Event&&s.defaultPrevented)return;a(s,...i)}}});return e}function VC(t){let e=Object.assign({},t);for(let n in e)e[n]===void 0&&delete e[n];return e}function iu(t,e=[]){let n=Object.assign({},t);for(let r of e)r in n&&delete n[r];return n}function WC(t){return t==null?!1:typeof t.type=="string"||typeof t.type=="object"||typeof t.type=="function"}var yi=(t=>(t[t.None=1]="None",t[t.Focusable=2]="Focusable",t[t.Hidden=4]="Hidden",t))(yi||{});let Uo=ct({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(t,{slots:e,attrs:n}){return()=>{var r;let{features:s,...i}=t,o={"aria-hidden":(s&2)===2?!0:(r=i["aria-hidden"])!=null?r:void 0,hidden:(s&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(s&4)===4&&(s&2)!==2&&{display:"none"}}};return Ht({ourProps:o,theirProps:i,slot:{},attrs:n,slots:e,name:"Hidden"})}}}),Zg=Symbol("Context");var yt=(t=>(t[t.Open=1]="Open",t[t.Closed=2]="Closed",t[t.Closing=4]="Closing",t[t.Opening=8]="Opening",t))(yt||{});function GC(){return ou()!==null}function ou(){return Pe(Zg,null)}function KC(t){ht(Zg,t)}var $o=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))($o||{});function qC(t){function e(){document.readyState!=="loading"&&(t(),document.removeEventListener("DOMContentLoaded",e))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",e),e())}let fr=[];qC(()=>{function t(e){e.target instanceof HTMLElement&&e.target!==document.body&&fr[0]!==e.target&&(fr.unshift(e.target),fr=fr.filter(n=>n!=null&&n.isConnected),fr.splice(10))}window.addEventListener("click",t,{capture:!0}),window.addEventListener("mousedown",t,{capture:!0}),window.addEventListener("focus",t,{capture:!0}),document.body.addEventListener("click",t,{capture:!0}),document.body.addEventListener("mousedown",t,{capture:!0}),document.body.addEventListener("focus",t,{capture:!0})});function zC(t){var e,n;let r=(e=t==null?void 0:t.form)!=null?e:t.closest("form");if(r){for(let s of r.elements)if(s!==t&&(s.tagName==="INPUT"&&s.type==="submit"||s.tagName==="BUTTON"&&s.type==="submit"||s.nodeName==="INPUT"&&s.type==="image")){s.click();return}(n=r.requestSubmit)==null||n.call(r)}}function em(t,e,n,r){$i.isServer||wt(s=>{t=t??window,t.addEventListener(e,n,r),s(()=>t.removeEventListener(e,n,r))})}var Bs=(t=>(t[t.Forwards=0]="Forwards",t[t.Backwards=1]="Backwards",t))(Bs||{});function YC(){let t=q(0);return Qg("keydown",e=>{e.key==="Tab"&&(t.value=e.shiftKey?1:0)}),t}function tm(t){if(!t)return new Set;if(typeof t=="function")return new Set(t());let e=new Set;for(let n of t.value){let r=Re(n);r instanceof HTMLElement&&e.add(r)}return e}var nm=(t=>(t[t.None=1]="None",t[t.InitialFocus=2]="InitialFocus",t[t.TabLock=4]="TabLock",t[t.FocusLock=8]="FocusLock",t[t.RestoreFocus=16]="RestoreFocus",t[t.All=30]="All",t))(nm||{});let Ls=Object.assign(ct({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:q(new Set)}},inheritAttrs:!1,setup(t,{attrs:e,slots:n,expose:r}){let s=q(null);r({el:s,$el:s});let i=V(()=>ms(s)),o=q(!1);je(()=>o.value=!0),kt(()=>o.value=!1),JC({ownerDocument:i},V(()=>o.value&&!!(t.features&16)));let a=XC({ownerDocument:i,container:s,initialFocus:V(()=>t.initialFocus)},V(()=>o.value&&!!(t.features&2)));ZC({ownerDocument:i,container:s,containers:t.containers,previousActiveElement:a},V(()=>o.value&&!!(t.features&8)));let l=YC();function c(h){let g=Re(s);g&&(_=>_())(()=>{Zt(l.value,{[Bs.Forwards]:()=>{bo(g,Mn.First,{skipElements:[h.relatedTarget]})},[Bs.Backwards]:()=>{bo(g,Mn.Last,{skipElements:[h.relatedTarget]})}})})}let u=q(!1);function d(h){h.key==="Tab"&&(u.value=!0,requestAnimationFrame(()=>{u.value=!1}))}function f(h){if(!o.value)return;let g=tm(t.containers);Re(s)instanceof HTMLElement&&g.add(Re(s));let _=h.relatedTarget;_ instanceof HTMLElement&&_.dataset.headlessuiFocusGuard!=="true"&&(rm(g,_)||(u.value?bo(Re(s),Zt(l.value,{[Bs.Forwards]:()=>Mn.Next,[Bs.Backwards]:()=>Mn.Previous})|Mn.WrapAround,{relativeTo:h.target}):h.target instanceof HTMLElement&&_r(h.target)))}return()=>{let h={},g={ref:s,onKeydown:d,onFocusout:f},{features:_,initialFocus:y,containers:T,...b}=t;return Ne(Xe,[!!(_&4)&&Ne(Uo,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:c,features:yi.Focusable}),Ht({ourProps:g,theirProps:{...e,...b},slot:h,attrs:e,slots:n,name:"FocusTrap"}),!!(_&4)&&Ne(Uo,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:c,features:yi.Focusable})])}}}),{features:nm});function QC(t){let e=q(fr.slice());return tt([t],([n],[r])=>{r===!0&&n===!1?su(()=>{e.value.splice(0)}):r===!1&&n===!0&&(e.value=fr.slice())},{flush:"post"}),()=>{var n;return(n=e.value.find(r=>r!=null&&r.isConnected))!=null?n:null}}function JC({ownerDocument:t},e){let n=QC(e);je(()=>{wt(()=>{var r,s;e.value||((r=t.value)==null?void 0:r.activeElement)===((s=t.value)==null?void 0:s.body)&&_r(n())},{flush:"post"})}),kt(()=>{e.value&&_r(n())})}function XC({ownerDocument:t,container:e,initialFocus:n},r){let s=q(null),i=q(!1);return je(()=>i.value=!0),kt(()=>i.value=!1),je(()=>{tt([e,n,r],(o,a)=>{if(o.every((c,u)=>(a==null?void 0:a[u])===c)||!r.value)return;let l=Re(e);l&&su(()=>{var c,u;if(!i.value)return;let d=Re(n),f=(c=t.value)==null?void 0:c.activeElement;if(d){if(d===f){s.value=f;return}}else if(l.contains(f)){s.value=f;return}d?_r(d):bo(l,Mn.First|Mn.NoScroll)===qg.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),s.value=(u=t.value)==null?void 0:u.activeElement})},{immediate:!0,flush:"post"})}),s}function ZC({ownerDocument:t,container:e,containers:n,previousActiveElement:r},s){var i;em((i=t.value)==null?void 0:i.defaultView,"focus",o=>{if(!s.value)return;let a=tm(n);Re(e)instanceof HTMLElement&&a.add(Re(e));let l=r.value;if(!l)return;let c=o.target;c&&c instanceof HTMLElement?rm(a,c)?(r.value=c,_r(c)):(o.preventDefault(),o.stopPropagation(),_r(l)):_r(r.value)},!0)}function rm(t,e){for(let n of t)if(n.contains(e))return!0;return!1}function eI(t){let e=Wc(t.getSnapshot());return kt(t.subscribe(()=>{e.value=t.getSnapshot()})),e}function tI(t,e){let n=t(),r=new Set;return{getSnapshot(){return n},subscribe(s){return r.add(s),()=>r.delete(s)},dispatch(s,...i){let o=e[s].call(n,...i);o&&(n=o,r.forEach(a=>a()))}}}function nI(){let t;return{before({doc:e}){var n;let r=e.documentElement;t=((n=e.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:e,d:n}){let r=e.documentElement,s=r.clientWidth-r.offsetWidth,i=t-s;n.style(r,"paddingRight",`${i}px`)}}}function rI(){return Yg()?{before({doc:t,d:e,meta:n}){function r(s){return n.containers.flatMap(i=>i()).some(i=>i.contains(s))}e.microTask(()=>{var s;if(window.getComputedStyle(t.documentElement).scrollBehavior!=="auto"){let a=Fi();a.style(t.documentElement,"scrollBehavior","auto"),e.add(()=>e.microTask(()=>a.dispose()))}let i=(s=window.scrollY)!=null?s:window.pageYOffset,o=null;e.addEventListener(t,"click",a=>{if(a.target instanceof HTMLElement)try{let l=a.target.closest("a");if(!l)return;let{hash:c}=new URL(l.href),u=t.querySelector(c);u&&!r(u)&&(o=u)}catch{}},!0),e.addEventListener(t,"touchstart",a=>{if(a.target instanceof HTMLElement)if(r(a.target)){let l=a.target;for(;l.parentElement&&r(l.parentElement);)l=l.parentElement;e.style(l,"overscrollBehavior","contain")}else e.style(a.target,"touchAction","none")}),e.addEventListener(t,"touchmove",a=>{if(a.target instanceof HTMLElement){if(a.target.tagName==="INPUT")return;if(r(a.target)){let l=a.target;for(;l.parentElement&&l.dataset.headlessuiPortal!==""&&!(l.scrollHeight>l.clientHeight||l.scrollWidth>l.clientWidth);)l=l.parentElement;l.dataset.headlessuiPortal===""&&a.preventDefault()}else a.preventDefault()}},{passive:!1}),e.add(()=>{var a;let l=(a=window.scrollY)!=null?a:window.pageYOffset;i!==l&&window.scrollTo(0,i),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)})})}}:{}}function sI(){return{before({doc:t,d:e}){e.style(t.documentElement,"overflow","hidden")}}}function iI(t){let e={};for(let n of t)Object.assign(e,n(e));return e}let hr=tI(()=>new Map,{PUSH(t,e){var n;let r=(n=this.get(t))!=null?n:{doc:t,count:0,d:Fi(),meta:new Set};return r.count++,r.meta.add(e),this.set(t,r),this},POP(t,e){let n=this.get(t);return n&&(n.count--,n.meta.delete(e)),this},SCROLL_PREVENT({doc:t,d:e,meta:n}){let r={doc:t,d:e,meta:iI(n)},s=[rI(),nI(),sI()];s.forEach(({before:i})=>i==null?void 0:i(r)),s.forEach(({after:i})=>i==null?void 0:i(r))},SCROLL_ALLOW({d:t}){t.dispose()},TEARDOWN({doc:t}){this.delete(t)}});hr.subscribe(()=>{let t=hr.getSnapshot(),e=new Map;for(let[n]of t)e.set(n,n.documentElement.style.overflow);for(let n of t.values()){let r=e.get(n.doc)==="hidden",s=n.count!==0;(s&&!r||!s&&r)&&hr.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&hr.dispatch("TEARDOWN",n)}});function oI(t,e,n){let r=eI(hr),s=V(()=>{let i=t.value?r.value.get(t.value):void 0;return i?i.count>0:!1});return tt([t,e],([i,o],[a],l)=>{if(!i||!o)return;hr.dispatch("PUSH",i,n);let c=!1;l(()=>{c||(hr.dispatch("POP",a??i,n),c=!0)})},{immediate:!0}),s}let pl=new Map,Ms=new Map;function Uf(t,e=q(!0)){wt(n=>{var r;if(!e.value)return;let s=Re(t);if(!s)return;n(function(){var o;if(!s)return;let a=(o=Ms.get(s))!=null?o:1;if(a===1?Ms.delete(s):Ms.set(s,a-1),a!==1)return;let l=pl.get(s);l&&(l["aria-hidden"]===null?s.removeAttribute("aria-hidden"):s.setAttribute("aria-hidden",l["aria-hidden"]),s.inert=l.inert,pl.delete(s))});let i=(r=Ms.get(s))!=null?r:0;Ms.set(s,i+1),i===0&&(pl.set(s,{"aria-hidden":s.getAttribute("aria-hidden"),inert:s.inert}),s.setAttribute("aria-hidden","true"),s.inert=!0)})}function aI({defaultContainers:t=[],portals:e,mainTreeNodeRef:n}={}){let r=q(null),s=ms(r);function i(){var o,a,l;let c=[];for(let u of t)u!==null&&(u instanceof HTMLElement?c.push(u):"value"in u&&u.value instanceof HTMLElement&&c.push(u.value));if(e!=null&&e.value)for(let u of e.value)c.push(u);for(let u of(o=s==null?void 0:s.querySelectorAll("html > *, body > *"))!=null?o:[])u!==document.body&&u!==document.head&&u instanceof HTMLElement&&u.id!=="headlessui-portal-root"&&(u.contains(Re(r))||u.contains((l=(a=Re(r))==null?void 0:a.getRootNode())==null?void 0:l.host)||c.some(d=>u.contains(d))||c.push(u));return c}return{resolveContainers:i,contains(o){return i().some(a=>a.contains(o))},mainTreeNodeRef:r,MainTreeNode(){return n!=null?null:Ne(Uo,{features:yi.Hidden,ref:r})}}}let sm=Symbol("ForcePortalRootContext");function lI(){return Pe(sm,!1)}let $f=ct({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(t,{slots:e,attrs:n}){return ht(sm,t.force),()=>{let{force:r,...s}=t;return Ht({theirProps:s,ourProps:{},slot:{},slots:e,attrs:n,name:"ForcePortalRoot"})}}}),im=Symbol("StackContext");var ic=(t=>(t[t.Add=0]="Add",t[t.Remove=1]="Remove",t))(ic||{});function cI(){return Pe(im,()=>{})}function uI({type:t,enabled:e,element:n,onUpdate:r}){let s=cI();function i(...o){r==null||r(...o),s(...o)}je(()=>{tt(e,(o,a)=>{o?i(0,t,n):a===!0&&i(1,t,n)},{immediate:!0,flush:"sync"})}),kt(()=>{e.value&&i(1,t,n)}),ht(im,i)}let dI=Symbol("DescriptionContext");function fI({slot:t=q({}),name:e="Description",props:n={}}={}){let r=q([]);function s(i){return r.value.push(i),()=>{let o=r.value.indexOf(i);o!==-1&&r.value.splice(o,1)}}return ht(dI,{register:s,slot:t,name:e,props:n}),V(()=>r.value.length>0?r.value.join(" "):void 0)}function hI(t){let e=ms(t);if(!e){if(t===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${t}`)}let n=e.getElementById("headlessui-portal-root");if(n)return n;let r=e.createElement("div");return r.setAttribute("id","headlessui-portal-root"),e.body.appendChild(r)}const oc=new WeakMap;function pI(t){var e;return(e=oc.get(t))!=null?e:0}function jf(t,e){let n=e(pI(t));return n<=0?oc.delete(t):oc.set(t,n),n}let gI=ct({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:e,attrs:n}){let r=q(null),s=V(()=>ms(r)),i=lI(),o=Pe(om,null),a=q(i===!0||o==null?hI(r.value):o.resolveTarget());a.value&&jf(a.value,f=>f+1);let l=q(!1);je(()=>{l.value=!0}),wt(()=>{i||o!=null&&(a.value=o.resolveTarget())});let c=Pe(ac,null),u=!1,d=Mi();return tt(r,()=>{if(u||!c)return;let f=Re(r);f&&(kt(c.register(f),d),u=!0)}),kt(()=>{var f,h;let g=(f=s.value)==null?void 0:f.getElementById("headlessui-portal-root");!g||a.value!==g||jf(a.value,_=>_-1)||a.value.children.length>0||(h=a.value.parentElement)==null||h.removeChild(a.value)}),()=>{if(!l.value||a.value===null)return null;let f={ref:r,"data-headlessui-portal":""};return Ne(Wy,{to:a.value},Ht({ourProps:f,theirProps:t,slot:{},attrs:n,slots:e,name:"Portal"}))}}}),ac=Symbol("PortalParentContext");function mI(){let t=Pe(ac,null),e=q([]);function n(i){return e.value.push(i),t&&t.register(i),()=>r(i)}function r(i){let o=e.value.indexOf(i);o!==-1&&e.value.splice(o,1),t&&t.unregister(i)}let s={register:n,unregister:r,portals:e};return[e,ct({name:"PortalWrapper",setup(i,{slots:o}){return ht(ac,s),()=>{var a;return(a=o.default)==null?void 0:a.call(o)}}})]}let om=Symbol("PortalGroupContext"),_I=ct({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(t,{attrs:e,slots:n}){let r=ps({resolveTarget(){return t.target}});return ht(om,r),()=>{let{target:s,...i}=t;return Ht({theirProps:i,ourProps:{},slot:{},attrs:e,slots:n,name:"PortalGroup"})}}});var vI=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(vI||{});let lc=Symbol("DialogContext");function au(t){let e=Pe(lc,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,au),n}return e}let io="DC8F892D-2EBD-447C-A4C8-A03058436FF4",yI=ct({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:io},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:t=>!0},setup(t,{emit:e,attrs:n,slots:r,expose:s}){var i,o;let a=(i=t.id)!=null?i:`headlessui-dialog-${Ui()}`,l=q(!1);je(()=>{l.value=!0});let c=!1,u=V(()=>t.role==="dialog"||t.role==="alertdialog"?t.role:(c||(c=!0,console.warn(`Invalid role [${u}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),d=q(0),f=ou(),h=V(()=>t.open===io&&f!==null?(f.value&yt.Open)===yt.Open:t.open),g=q(null),_=V(()=>ms(g));if(s({el:g,$el:g}),!(t.open!==io||f!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof h.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${h.value===io?void 0:t.open}`);let y=V(()=>l.value&&h.value?0:1),T=V(()=>y.value===0),b=V(()=>d.value>1),A=Pe(lc,null)!==null,[I,H]=mI(),{resolveContainers:x,mainTreeNodeRef:j,MainTreeNode:Y}=aI({portals:I,defaultContainers:[V(()=>{var oe;return(oe=le.panelRef.value)!=null?oe:g.value})]}),U=V(()=>b.value?"parent":"leaf"),R=V(()=>f!==null?(f.value&yt.Closing)===yt.Closing:!1),Q=V(()=>A||R.value?!1:T.value),L=V(()=>{var oe,ae,De;return(De=Array.from((ae=(oe=_.value)==null?void 0:oe.querySelectorAll("body > *"))!=null?ae:[]).find(Fe=>Fe.id==="headlessui-portal-root"?!1:Fe.contains(Re(j))&&Fe instanceof HTMLElement))!=null?De:null});Uf(L,Q);let ne=V(()=>b.value?!0:T.value),Ae=V(()=>{var oe,ae,De;return(De=Array.from((ae=(oe=_.value)==null?void 0:oe.querySelectorAll("[data-headlessui-portal]"))!=null?ae:[]).find(Fe=>Fe.contains(Re(j))&&Fe instanceof HTMLElement))!=null?De:null});Uf(Ae,ne),uI({type:"Dialog",enabled:V(()=>y.value===0),element:g,onUpdate:(oe,ae)=>{if(ae==="Dialog")return Zt(oe,{[ic.Add]:()=>d.value+=1,[ic.Remove]:()=>d.value-=1})}});let xe=fI({name:"DialogDescription",slot:V(()=>({open:h.value}))}),pe=q(null),le={titleId:pe,panelRef:q(null),dialogState:y,setTitleId(oe){pe.value!==oe&&(pe.value=oe)},close(){e("close",!1)}};ht(lc,le);let ue=V(()=>!(!T.value||b.value));HC(x,(oe,ae)=>{oe.preventDefault(),le.close(),gs(()=>ae==null?void 0:ae.focus())},ue);let Et=V(()=>!(b.value||y.value!==0));em((o=_.value)==null?void 0:o.defaultView,"keydown",oe=>{Et.value&&(oe.defaultPrevented||oe.key===$o.Escape&&(oe.preventDefault(),oe.stopPropagation(),le.close()))});let Rt=V(()=>!(R.value||y.value!==0||A));return oI(_,Rt,oe=>{var ae;return{containers:[...(ae=oe.containers)!=null?ae:[],x]}}),wt(oe=>{if(y.value!==0)return;let ae=Re(g);if(!ae)return;let De=new ResizeObserver(Fe=>{for(let An of Fe){let Ke=An.target.getBoundingClientRect();Ke.x===0&&Ke.y===0&&Ke.width===0&&Ke.height===0&&le.close()}});De.observe(ae),oe(()=>De.disconnect())}),()=>{let{open:oe,initialFocus:ae,...De}=t,Fe={...n,ref:g,id:a,role:u.value,"aria-modal":y.value===0?!0:void 0,"aria-labelledby":pe.value,"aria-describedby":xe.value},An={open:y.value===0};return Ne($f,{force:!0},()=>[Ne(gI,()=>Ne(_I,{target:g.value},()=>Ne($f,{force:!1},()=>Ne(Ls,{initialFocus:ae,containers:x,features:T.value?Zt(U.value,{parent:Ls.features.RestoreFocus,leaf:Ls.features.All&~Ls.features.FocusLock}):Ls.features.None},()=>Ne(H,{},()=>Ht({ourProps:Fe,theirProps:{...De,...n},slot:An,attrs:n,slots:r,visible:y.value===0,features:Fo.RenderStrategy|Fo.Static,name:"Dialog"})))))),Ne(Y)])}}}),bI=ct({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(t,{attrs:e,slots:n,expose:r}){var s;let i=(s=t.id)!=null?s:`headlessui-dialog-panel-${Ui()}`,o=au("DialogPanel");r({el:o.panelRef,$el:o.panelRef});function a(l){l.stopPropagation()}return()=>{let{...l}=t,c={id:i,ref:o.panelRef,onClick:a};return Ht({ourProps:c,theirProps:l,slot:{open:o.dialogState.value===0},attrs:e,slots:n,name:"DialogPanel"})}}}),wI=ct({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:null}},setup(t,{attrs:e,slots:n}){var r;let s=(r=t.id)!=null?r:`headlessui-dialog-title-${Ui()}`,i=au("DialogTitle");return je(()=>{i.setTitleId(s),kt(()=>i.setTitleId(null))}),()=>{let{...o}=t;return Ht({ourProps:{id:s},theirProps:o,slot:{open:i.dialogState.value===0},attrs:e,slots:n,name:"DialogTitle"})}}}),EI=Symbol("GroupContext"),am=ct({name:"Switch",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:null},disabled:{type:Boolean,default:!1},tabIndex:{type:Number,default:0}},inheritAttrs:!1,setup(t,{emit:e,attrs:n,slots:r,expose:s}){var i;let o=(i=t.id)!=null?i:`headlessui-switch-${Ui()}`,a=Pe(EI,null),[l,c]=TC(V(()=>t.modelValue),b=>e("update:modelValue",b),V(()=>t.defaultChecked));function u(){c(!l.value)}let d=q(null),f=a===null?d:a.switchRef,h=BC(V(()=>({as:t.as,type:n.type})),f);s({el:f,$el:f});function g(b){b.preventDefault(),u()}function _(b){b.key===$o.Space?(b.preventDefault(),u()):b.key===$o.Enter&&zC(b.currentTarget)}function y(b){b.preventDefault()}let T=V(()=>{var b,A;return(A=(b=Re(f))==null?void 0:b.closest)==null?void 0:A.call(b,"form")});return je(()=>{tt([T],()=>{if(!T.value||t.defaultChecked===void 0)return;function b(){c(t.defaultChecked)}return T.value.addEventListener("reset",b),()=>{var A;(A=T.value)==null||A.removeEventListener("reset",b)}},{immediate:!0})}),()=>{let{name:b,value:A,form:I,tabIndex:H,...x}=t,j={checked:l.value},Y={id:o,ref:f,role:"switch",type:h.value,tabIndex:H===-1?0:H,"aria-checked":l.value,"aria-labelledby":a==null?void 0:a.labelledby.value,"aria-describedby":a==null?void 0:a.describedby.value,onClick:g,onKeyup:_,onKeypress:y};return Ne(Xe,[b!=null&&l.value!=null?Ne(Uo,VC({features:yi.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:l.value,form:I,disabled:x.disabled,name:b,value:A})):null,Ht({ourProps:Y,theirProps:{...n,...iu(x,["modelValue","defaultChecked"])},slot:j,attrs:n,slots:r,name:"Switch"})])}}});function CI(t){let e={called:!1};return(...n)=>{if(!e.called)return e.called=!0,t(...n)}}function gl(t,...e){t&&e.length>0&&t.classList.add(...e)}function oo(t,...e){t&&e.length>0&&t.classList.remove(...e)}var cc=(t=>(t.Finished="finished",t.Cancelled="cancelled",t))(cc||{});function II(t,e){let n=Fi();if(!t)return n.dispose;let{transitionDuration:r,transitionDelay:s}=getComputedStyle(t),[i,o]=[r,s].map(a=>{let[l=0]=a.split(",").filter(Boolean).map(c=>c.includes("ms")?parseFloat(c):parseFloat(c)*1e3).sort((c,u)=>u-c);return l});return i!==0?n.setTimeout(()=>e("finished"),i+o):e("finished"),n.add(()=>e("cancelled")),n.dispose}function Hf(t,e,n,r,s,i){let o=Fi(),a=i!==void 0?CI(i):()=>{};return oo(t,...s),gl(t,...e,...n),o.nextFrame(()=>{oo(t,...n),gl(t,...r),o.add(II(t,l=>(oo(t,...r,...e),gl(t,...s),a(l))))}),o.add(()=>oo(t,...e,...n,...r,...s)),o.add(()=>a("cancelled")),o.dispose}function ar(t=""){return t.split(/\s+/).filter(e=>e.length>1)}let lu=Symbol("TransitionContext");var SI=(t=>(t.Visible="visible",t.Hidden="hidden",t))(SI||{});function TI(){return Pe(lu,null)!==null}function AI(){let t=Pe(lu,null);if(t===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return t}function kI(){let t=Pe(cu,null);if(t===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return t}let cu=Symbol("NestingContext");function xa(t){return"children"in t?xa(t.children):t.value.filter(({state:e})=>e==="visible").length>0}function lm(t){let e=q([]),n=q(!1);je(()=>n.value=!0),kt(()=>n.value=!1);function r(i,o=Hn.Hidden){let a=e.value.findIndex(({id:l})=>l===i);a!==-1&&(Zt(o,{[Hn.Unmount](){e.value.splice(a,1)},[Hn.Hidden](){e.value[a].state="hidden"}}),!xa(e)&&n.value&&(t==null||t()))}function s(i){let o=e.value.find(({id:a})=>a===i);return o?o.state!=="visible"&&(o.state="visible"):e.value.push({id:i,state:"visible"}),()=>r(i,Hn.Unmount)}return{children:e,register:s,unregister:r}}let cm=Fo.RenderStrategy,uc=ct({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(t,{emit:e,attrs:n,slots:r,expose:s}){let i=q(0);function o(){i.value|=yt.Opening,e("beforeEnter")}function a(){i.value&=~yt.Opening,e("afterEnter")}function l(){i.value|=yt.Closing,e("beforeLeave")}function c(){i.value&=~yt.Closing,e("afterLeave")}if(!TI()&&GC())return()=>Ne(um,{...t,onBeforeEnter:o,onAfterEnter:a,onBeforeLeave:l,onAfterLeave:c},r);let u=q(null),d=V(()=>t.unmount?Hn.Unmount:Hn.Hidden);s({el:u,$el:u});let{show:f,appear:h}=AI(),{register:g,unregister:_}=kI(),y=q(f.value?"visible":"hidden"),T={value:!0},b=Ui(),A={value:!1},I=lm(()=>{!A.value&&y.value!=="hidden"&&(y.value="hidden",_(b),c())});je(()=>{let ne=g(b);kt(ne)}),wt(()=>{if(d.value===Hn.Hidden&&b){if(f.value&&y.value!=="visible"){y.value="visible";return}Zt(y.value,{hidden:()=>_(b),visible:()=>g(b)})}});let H=ar(t.enter),x=ar(t.enterFrom),j=ar(t.enterTo),Y=ar(t.entered),U=ar(t.leave),R=ar(t.leaveFrom),Q=ar(t.leaveTo);je(()=>{wt(()=>{if(y.value==="visible"){let ne=Re(u);if(ne instanceof Comment&&ne.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function L(ne){let Ae=T.value&&!h.value,xe=Re(u);!xe||!(xe instanceof HTMLElement)||Ae||(A.value=!0,f.value&&o(),f.value||l(),ne(f.value?Hf(xe,H,x,j,Y,pe=>{A.value=!1,pe===cc.Finished&&a()}):Hf(xe,U,R,Q,Y,pe=>{A.value=!1,pe===cc.Finished&&(xa(I)||(y.value="hidden",_(b),c()))})))}return je(()=>{tt([f],(ne,Ae,xe)=>{L(xe),T.value=!1},{immediate:!0})}),ht(cu,I),KC(V(()=>Zt(y.value,{visible:yt.Open,hidden:yt.Closed})|i.value)),()=>{let{appear:ne,show:Ae,enter:xe,enterFrom:pe,enterTo:le,entered:ue,leave:Et,leaveFrom:Rt,leaveTo:oe,...ae}=t,De={ref:u},Fe={...ae,...h.value&&f.value&&$i.isServer?{class:mn([n.class,ae.class,...H,...x])}:{}};return Ht({theirProps:Fe,ourProps:De,slot:{},slots:r,attrs:n,features:cm,visible:y.value==="visible",name:"TransitionChild"})}}}),RI=uc,um=ct({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(t,{emit:e,attrs:n,slots:r}){let s=ou(),i=V(()=>t.show===null&&s!==null?(s.value&yt.Open)===yt.Open:t.show);wt(()=>{if(![!0,!1].includes(i.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=q(i.value?"visible":"hidden"),a=lm(()=>{o.value="hidden"}),l=q(!0),c={show:i,appear:V(()=>t.appear||!l.value)};return je(()=>{wt(()=>{l.value=!1,i.value?o.value="visible":xa(a)||(o.value="hidden")})}),ht(cu,a),ht(lu,c),()=>{let u=iu(t,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),d={unmount:t.unmount};return Ht({ourProps:{...d,as:"template"},theirProps:{},slot:{},slots:{...r,default:()=>[Ne(RI,{onBeforeEnter:()=>e("beforeEnter"),onAfterEnter:()=>e("afterEnter"),onBeforeLeave:()=>e("beforeLeave"),onAfterLeave:()=>e("afterLeave"),...n,...d,...u},r.default)]},attrs:{},features:cm,visible:o.value==="visible",name:"Transition"})}}});const PI={class:"fixed inset-0 overflow-y-auto"},xI={class:"flex min-h-full items-center justify-center p-4 text-center"},OI={class:"mt-2"},NI={class:"text-sm text-indigo-700 dark:text-indigo-300"},LI={class:"mt-4 flex gap-2 justify-end"},dm={__name:"BaseModal",props:{modelValue:{type:Boolean,default:!1},title:{type:String,default:"Confirmação"},message:{type:String,default:""},confirmText:{type:String,default:"OK"},cancelText:{type:String,default:"Cancelar"},showCancel:{type:Boolean,default:!1}},emits:["update:modelValue","confirm","cancel"],setup(t,{emit:e}){const n=e;function r(){n("update:modelValue",!1)}function s(){n("confirm"),r()}function i(){n("cancel"),r()}return(o,a)=>(Ye(),Zr(de(um),{appear:"",show:t.modelValue,as:"template"},{default:ke(()=>[Z(de(yI),{as:"div",onClose:r,class:"relative z-10"},{default:ke(()=>[Z(de(uc),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:ke(()=>a[0]||(a[0]=[z("div",{class:"fixed inset-0 bg-black/25"},null,-1)])),_:1,__:[0]}),z("div",PI,[z("div",xI,[Z(de(uc),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:ke(()=>[Z(de(bI),{class:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 text-left align-middle shadow-2xl transition-all border border-indigo-100 dark:border-slate-700"},{default:ke(()=>[Z(de(wI),{as:"h3",class:"text-lg font-bold leading-6 text-indigo-900 dark:text-indigo-100"},{default:ke(()=>[at(jn(t.title),1)]),_:1}),z("div",OI,[z("div",NI,[Xr(o.$slots,"content",{},()=>[at(jn(t.message),1)])])]),z("div",LI,[Xr(o.$slots,"actions",{},()=>[t.showCancel?(Ye(),jt("button",{key:0,type:"button",class:"inline-flex justify-center rounded-md border border-gray-300 bg-white/80 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 dark:bg-slate-600/80 dark:text-white dark:border-slate-500 dark:hover:bg-slate-700 transition-colors",onClick:i},jn(t.cancelText),1)):Jc("",!0),z("button",{type:"button",class:"inline-flex justify-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 shadow-md hover:shadow-lg transition-all",onClick:s},jn(t.confirmText),1)])])]),_:3})]),_:3})])])]),_:3})]),_:3},8,["show"]))}},MI={class:"mt-auto py-4 px-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"},DI={class:"flex items-center justify-center gap-6"},FI={href:"https://github.com/MatheusTKoch/task-project",target:"_blank",rel:"noopener noreferrer",class:"flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors",title:"Ver código no GitHub"},uu={__name:"AppFooter",setup(t){return(e,n)=>(Ye(),jt("footer",MI,[z("div",DI,[z("p",null,[n[0]||(n[0]=at(" © 2025 Task Project - Desenvolvido com ")),Z(de(os),{icon:"mdi:heart",class:"inline text-red-500 mx-1",width:"14",height:"14"}),n[1]||(n[1]=at(" por ")),n[2]||(n[2]=z("a",{href:"https://github.com/MatheusTKoch",target:"_blank",rel:"noopener noreferrer",class:"text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors font-medium"}," Matheus T. Koch ",-1))]),z("a",FI,[Z(de(os),{icon:"mdi:github",width:"16",height:"16"}),n[3]||(n[3]=z("span",{class:"text-xs"},"GitHub",-1))])])]))}};/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=()=>{};var Bf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(t,e){if(!t)throw _s(e)},_s=function(t){return new Error("Firebase Database ("+fm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},$I=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},du={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,h=c&63;l||(h=64,o||(f=64)),r.push(n[u],n[d],n[f],n[h])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$I(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||d==null)throw new jI;const f=i<<2|a>>4;if(r.push(f),c!==64){const h=a<<4&240|c>>2;if(r.push(h),d!==64){const g=c<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class jI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pm=function(t){const e=hm(t);return du.encodeByteArray(e,!0)},jo=function(t){return pm(t).replace(/\./g,"")},Ho=function(t){try{return du.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(t){return gm(void 0,t)}function gm(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!BI(n)||(t[n]=gm(t[n],e[n]));return t}function BI(t){return t!=="__proto__"}/**
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
 */function VI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const WI=()=>VI().__FIREBASE_DEFAULTS__,GI=()=>{if(typeof process>"u"||typeof Bf>"u")return;const t=Bf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},KI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ho(t[1]);return e&&JSON.parse(e)},fu=()=>{try{return UI()||WI()||GI()||KI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mm=t=>{var e,n;return(n=(e=fu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},qI=t=>{const e=mm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},_m=()=>{var t;return(t=fu())===null||t===void 0?void 0:t.config},vm=t=>{var e;return(e=fu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(t){return t.endsWith(".cloudworkstations.dev")}async function ym(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function zI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[jo(JSON.stringify(n)),jo(JSON.stringify(o)),""].join(".")}const ei={};function YI(){const t={prod:[],emulator:[]};for(const e of Object.keys(ei))ei[e]?t.emulator.push(e):t.prod.push(e);return t}function QI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Vf=!1;function bm(t,e){if(typeof window>"u"||typeof document>"u"||!vs(window.location.host)||ei[t]===e||ei[t]||Vf)return;ei[t]=e;function n(f){return`__firebase__banner__${f}`}const r="__firebase__banner",i=YI().prod.length>0;function o(){const f=document.getElementById(r);f&&f.remove()}function a(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function l(f,h){f.setAttribute("width","24"),f.setAttribute("id",h),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function c(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{Vf=!0,o()},f}function u(f,h){f.setAttribute("id",h),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function d(){const f=QI(r),h=n("text"),g=document.getElementById(h)||document.createElement("span"),_=n("learnmore"),y=document.getElementById(_)||document.createElement("a"),T=n("preprendIcon"),b=document.getElementById(T)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const A=f.element;a(A),u(y,_);const I=c();l(b,T),A.append(b,g,y,I),document.body.appendChild(A)}i?(g.innerText="Preview backend disconnected.",b.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(b.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,g.innerText="Preview backend running in this workspace."),g.setAttribute("id",h)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function JI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function XI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ZI(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function eS(){return fm.NODE_ADMIN===!0}function tS(){try{return typeof indexedDB=="object"}catch{return!1}}function nS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS="FirebaseError";class tr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=rS,Object.setPrototypeOf(this,tr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ji.prototype.create)}}class ji{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?sS(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new tr(s,a,r)}}function sS(t,e){return t.replace(iS,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const iS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(t){return JSON.parse(t)}function Ue(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=bi(Ho(i[0])||""),n=bi(Ho(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},oS=function(t){const e=Em(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},aS=function(t){const e=Em(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function as(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function dc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Bo(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Er(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Wf(i)&&Wf(o)){if(!Er(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Wf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Vs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ws(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):d<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const f=(s<<5|s>>>27)+c+l+u+r[d]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function cS(t,e){const n=new uS(t,e);return n.subscribe.bind(n)}class uS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");dS(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ml),s.error===void 0&&(s.error=ml),s.complete===void 0&&(s.complete=ml);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ml(){}function pu(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,P(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Na=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function nt(t){return t&&t._delegate?t._delegate:t}class Cr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const cr="[DEFAULT]";/**
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
 */class hS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Oa;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gS(e))try{this.getOrInitializeService({instanceIdentifier:cr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cr){return this.instances.has(e)}getOptions(e=cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=cr){return this.component?this.component.multipleInstances?e:cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pS(t){return t===cr?void 0:t}function gS(t){return t.instantiationMode==="EAGER"}/**
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
 */class mS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const _S={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},vS=ve.INFO,yS={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},bS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=yS[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gu{constructor(e){this.name=e,this._logLevel=vS,this._logHandler=bS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_S[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const wS=(t,e)=>e.some(n=>t instanceof n);let Gf,Kf;function ES(){return Gf||(Gf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CS(){return Kf||(Kf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cm=new WeakMap,fc=new WeakMap,Im=new WeakMap,_l=new WeakMap,mu=new WeakMap;function IS(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Vn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Cm.set(n,t)}).catch(()=>{}),mu.set(e,t),e}function SS(t){if(fc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});fc.set(t,e)}let hc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Im.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function TS(t){hc=t(hc)}function AS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(vl(this),e,...n);return Im.set(r,e.sort?e.sort():[e]),Vn(r)}:CS().includes(t)?function(...e){return t.apply(vl(this),e),Vn(Cm.get(this))}:function(...e){return Vn(t.apply(vl(this),e))}}function kS(t){return typeof t=="function"?AS(t):(t instanceof IDBTransaction&&SS(t),wS(t,ES())?new Proxy(t,hc):t)}function Vn(t){if(t instanceof IDBRequest)return IS(t);if(_l.has(t))return _l.get(t);const e=kS(t);return e!==t&&(_l.set(t,e),mu.set(e,t)),e}const vl=t=>mu.get(t);function RS(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Vn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Vn(o.result),l.oldVersion,l.newVersion,Vn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const PS=["get","getKey","getAll","getAllKeys","count"],xS=["put","add","delete","clear"],yl=new Map;function qf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yl.get(e))return yl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=xS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||PS.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return yl.set(e,i),i}TS(t=>({...t,get:(e,n,r)=>qf(e,n)||t.get(e,n,r),has:(e,n)=>!!qf(e,n)||t.has(e,n)}));/**
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
 */class OS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(NS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function NS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pc="@firebase/app",zf="0.13.1";/**
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
 */const bn=new gu("@firebase/app"),LS="@firebase/app-compat",MS="@firebase/analytics-compat",DS="@firebase/analytics",FS="@firebase/app-check-compat",US="@firebase/app-check",$S="@firebase/auth",jS="@firebase/auth-compat",HS="@firebase/database",BS="@firebase/data-connect",VS="@firebase/database-compat",WS="@firebase/functions",GS="@firebase/functions-compat",KS="@firebase/installations",qS="@firebase/installations-compat",zS="@firebase/messaging",YS="@firebase/messaging-compat",QS="@firebase/performance",JS="@firebase/performance-compat",XS="@firebase/remote-config",ZS="@firebase/remote-config-compat",eT="@firebase/storage",tT="@firebase/storage-compat",nT="@firebase/firestore",rT="@firebase/ai",sT="@firebase/firestore-compat",iT="firebase",oT="11.9.0";/**
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
 */const gc="[DEFAULT]",aT={[pc]:"fire-core",[LS]:"fire-core-compat",[DS]:"fire-analytics",[MS]:"fire-analytics-compat",[US]:"fire-app-check",[FS]:"fire-app-check-compat",[$S]:"fire-auth",[jS]:"fire-auth-compat",[HS]:"fire-rtdb",[BS]:"fire-data-connect",[VS]:"fire-rtdb-compat",[WS]:"fire-fn",[GS]:"fire-fn-compat",[KS]:"fire-iid",[qS]:"fire-iid-compat",[zS]:"fire-fcm",[YS]:"fire-fcm-compat",[QS]:"fire-perf",[JS]:"fire-perf-compat",[XS]:"fire-rc",[ZS]:"fire-rc-compat",[eT]:"fire-gcs",[tT]:"fire-gcs-compat",[nT]:"fire-fst",[sT]:"fire-fst-compat",[rT]:"fire-vertex","fire-js":"fire-js",[iT]:"fire-js-all"};/**
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
 */const Vo=new Map,lT=new Map,mc=new Map;function Yf(t,e){try{t.container.addComponent(e)}catch(n){bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ls(t){const e=t.name;if(mc.has(e))return bn.debug(`There were multiple attempts to register component ${e}.`),!1;mc.set(e,t);for(const n of Vo.values())Yf(n,t);for(const n of lT.values())Yf(n,t);return!0}function _u(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function It(t){return t==null?!1:t.settings!==void 0}/**
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
 */const cT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wn=new ji("app","Firebase",cT);/**
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
 */class uT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wn.create("app-deleted",{appName:this._name})}}/**
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
 */const bs=oT;function vu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:gc,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Wn.create("bad-app-name",{appName:String(s)});if(n||(n=_m()),!n)throw Wn.create("no-options");const i=Vo.get(s);if(i){if(Er(n,i.options)&&Er(r,i.config))return i;throw Wn.create("duplicate-app",{appName:s})}const o=new mS(s);for(const l of mc.values())o.addComponent(l);const a=new uT(n,r,o);return Vo.set(s,a),a}function Sm(t=gc){const e=Vo.get(t);if(!e&&t===gc&&_m())return vu();if(!e)throw Wn.create("no-app",{appName:t});return e}function Gn(t,e,n){var r;let s=(r=aT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bn.warn(a.join(" "));return}ls(new Cr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const dT="firebase-heartbeat-database",fT=1,wi="firebase-heartbeat-store";let bl=null;function Tm(){return bl||(bl=RS(dT,fT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(wi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Wn.create("idb-open",{originalErrorMessage:t.message})})),bl}async function hT(t){try{const n=(await Tm()).transaction(wi),r=await n.objectStore(wi).get(Am(t));return await n.done,r}catch(e){if(e instanceof tr)bn.warn(e.message);else{const n=Wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bn.warn(n.message)}}}async function Qf(t,e){try{const r=(await Tm()).transaction(wi,"readwrite");await r.objectStore(wi).put(e,Am(t)),await r.done}catch(n){if(n instanceof tr)bn.warn(n.message);else{const r=Wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bn.warn(r.message)}}}function Am(t){return`${t.name}!${t.options.appId}`}/**
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
 */const pT=1024,gT=30;class mT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Jf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>gT){const o=yT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){bn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Jf(),{heartbeatsToSend:r,unsentEntries:s}=_T(this._heartbeatsCache.heartbeats),i=jo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return bn.warn(n),""}}}function Jf(){return new Date().toISOString().substring(0,10)}function _T(t,e=pT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Xf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Xf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class vT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tS()?nS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await hT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Xf(t){return jo(JSON.stringify({version:2,heartbeats:t})).length}function yT(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function bT(t){ls(new Cr("platform-logger",e=>new OS(e),"PRIVATE")),ls(new Cr("heartbeat",e=>new mT(e),"PRIVATE")),Gn(pc,zf,t),Gn(pc,zf,"esm2017"),Gn("fire-js","")}bT("");function yu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function km(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wT=km,Rm=new ji("auth","Firebase",km());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=new gu("@firebase/auth");function ET(t,...e){Wo.logLevel<=ve.WARN&&Wo.warn(`Auth (${bs}): ${t}`,...e)}function wo(t,...e){Wo.logLevel<=ve.ERROR&&Wo.error(`Auth (${bs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t,...e){throw bu(t,...e)}function Jt(t,...e){return bu(t,...e)}function Pm(t,e,n){const r=Object.assign(Object.assign({},wT()),{[e]:n});return new ji("auth","Firebase",r).create(e,{appName:t.name})}function pn(t){return Pm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Rm.create(t,...e)}function J(t,e,...n){if(!t)throw bu(e,...n)}function dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wo(e),new Error(e)}function wn(t,e){t||dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function CT(){return Zf()==="http:"||Zf()==="https:"}function Zf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CT()||XI()||"connection"in navigator)?navigator.onLine:!0}function ST(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n){this.shortDelay=e,this.longDelay=n,wn(n>e,"Short delay should be less than long delay!"),this.isMobile=hu()||wm()}get(){return IT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(t,e){wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],kT=new Hi(3e4,6e4);function In(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Sn(t,e,n,r,s={}){return Om(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ys(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},i);return JI()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&vs(t.emulatorConfig.host)&&(c.credentials="include"),xm.fetch()(await Nm(t,t.config.apiHost,n,a),c)})}async function Om(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},TT),e);try{const s=new PT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ao(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ao(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ao(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ao(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Pm(t,u,c);$t(t,u)}}catch(s){if(s instanceof tr)throw s;$t(t,"network-request-failed",{message:String(s)})}}async function Bi(t,e,n,r,s={}){const i=await Sn(t,e,n,r,s);return"mfaPendingCredential"in i&&$t(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Nm(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?wu(t.config,s):`${t.config.apiScheme}://${s}`;return AT.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function RT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class PT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Jt(this.auth,"network-request-failed")),kT.get())})}}function ao(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Jt(t,e,r);return s.customData._tokenResponse=n,s}function eh(t){return t!==void 0&&t.enterprise!==void 0}class xT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return RT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function OT(t,e){return Sn(t,"GET","/v2/recaptchaConfig",In(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NT(t,e){return Sn(t,"POST","/v1/accounts:delete",e)}async function Go(t,e){return Sn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LT(t,e=!1){const n=nt(t),r=await n.getIdToken(e),s=Eu(r);J(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ti(wl(s.auth_time)),issuedAtTime:ti(wl(s.iat)),expirationTime:ti(wl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function wl(t){return Number(t)*1e3}function Eu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ho(n);return s?JSON.parse(s):(wo("Failed to decode base64 JWT payload"),null)}catch(s){return wo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function th(t){const e=Eu(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ei(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof tr&&MT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function MT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ti(this.lastLoginAt),this.creationTime=ti(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ko(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ei(t,Go(n,{idToken:r}));J(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Lm(i.providerUserInfo):[],a=UT(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new vc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function FT(t){const e=nt(t);await Ko(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Lm(t){return t.map(e=>{var{providerId:n}=e,r=yu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $T(t,e){const n=await Om(t,{},async()=>{const r=ys({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Nm(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&vs(t.emulatorConfig.host)&&(l.credentials="include"),xm.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function jT(t,e){return Sn(t,"POST","/v2/accounts:revokeToken",In(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):th(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=th(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await $T(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new zr;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(J(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(J(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zr,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=yu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new DT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ei(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return LT(this,e)}reload(){return FT(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ko(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(It(this.auth.app))return Promise.reject(pn(this.auth));const e=await this.getIdToken();return await Ei(this,NT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,h=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:A,emailVerified:I,isAnonymous:H,providerData:x,stsTokenManager:j}=n;J(A&&j,e,"internal-error");const Y=zr.fromJSON(this.name,j);J(typeof A=="string",e,"internal-error"),Pn(d,e.name),Pn(f,e.name),J(typeof I=="boolean",e,"internal-error"),J(typeof H=="boolean",e,"internal-error"),Pn(h,e.name),Pn(g,e.name),Pn(_,e.name),Pn(y,e.name),Pn(T,e.name),Pn(b,e.name);const U=new xt({uid:A,auth:e,email:f,emailVerified:I,displayName:d,isAnonymous:H,photoURL:g,phoneNumber:h,tenantId:_,stsTokenManager:Y,createdAt:T,lastLoginAt:b});return x&&Array.isArray(x)&&(U.providerData=x.map(R=>Object.assign({},R))),y&&(U._redirectEventId=y),U}static async _fromIdTokenResponse(e,n,r=!1){const s=new zr;s.updateFromServerResponse(n);const i=new xt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ko(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];J(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Lm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new zr;a.updateFromIdToken(r);const l=new xt({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new vc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh=new Map;function fn(t){wn(t instanceof Function,"Expected a class definition");let e=nh.get(t);return e?(wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,nh.set(t,e),e)}/**
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
 */class Mm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Mm.type="NONE";const rh=Mm;/**
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
 */function Eo(t,e,n){return`firebase:${t}:${e}:${n}`}class Yr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Eo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Eo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Go(this.auth,{idToken:e}).catch(()=>{});return n?xt._fromGetAccountInfoResponse(this.auth,n,e):null}return xt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Yr(fn(rh),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||fn(rh);const o=Eo(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){let d;if(typeof u=="string"){const f=await Go(e,{idToken:u}).catch(()=>{});if(!f)break;d=await xt._fromGetAccountInfoResponse(e,f,u)}else d=xt._fromJSON(e,u);c!==i&&(a=d),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Yr(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Yr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($m(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hm(e))return"Blackberry";if(Bm(e))return"Webos";if(Fm(e))return"Safari";if((e.includes("chrome/")||Um(e))&&!e.includes("edge/"))return"Chrome";if(jm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Dm(t=lt()){return/firefox\//i.test(t)}function Fm(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Um(t=lt()){return/crios\//i.test(t)}function $m(t=lt()){return/iemobile/i.test(t)}function jm(t=lt()){return/android/i.test(t)}function Hm(t=lt()){return/blackberry/i.test(t)}function Bm(t=lt()){return/webos/i.test(t)}function Cu(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function HT(t=lt()){var e;return Cu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function BT(){return ZI()&&document.documentMode===10}function Vm(t=lt()){return Cu(t)||jm(t)||Bm(t)||Hm(t)||/windows phone/i.test(t)||$m(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(t,e=[]){let n;switch(t){case"Browser":n=sh(lt());break;case"Worker":n=`${sh(lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bs}/${r}`}/**
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
 */class VT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function WT(t,e={}){return Sn(t,"GET","/v2/passwordPolicy",In(t,e))}/**
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
 */const GT=6;class KT{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:GT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ih(this),this.idTokenSubscription=new ih(this),this.beforeStateQueue=new VT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Yr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Go(this,{idToken:e}),r=await xt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(It(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ko(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ST()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(It(this.app))return Promise.reject(pn(this));const n=e?nt(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return It(this.app)?Promise.reject(pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return It(this.app)?Promise.reject(pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WT(this),n=new KT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ji("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await jT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await Yr.create(this,[fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(It(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ET(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function nr(t){return nt(t)}class ih{constructor(e){this.auth=e,this.observer=null,this.addObserver=cS(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let La={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zT(t){La=t}function Gm(t){return La.loadJS(t)}function YT(){return La.recaptchaEnterpriseScript}function QT(){return La.gapiScript}function JT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class XT{constructor(){this.enterprise=new ZT}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ZT{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const eA="recaptcha-enterprise",Km="NO_RECAPTCHA";class tA{constructor(e){this.type=eA,this.auth=nr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{OT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new xT(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;eh(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(Km)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new XT().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&eh(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=YT();l.length!==0&&(l+=a),Gm(l).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function oh(t,e,n,r=!1,s=!1){const i=new tA(t);let o;if(s)o=Km;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function qo(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await oh(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await oh(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(t,e){const n=_u(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Er(i,e??{}))return s;$t(s,"already-initialized")}return n.initialize({options:e})}function rA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sA(t,e,n){const r=nr(t);J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=qm(e),{host:o,port:a}=iA(e),l=a===null?"":`:${a}`,c={url:`${i}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){J(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),J(Er(c,r.config.emulator)&&Er(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,vs(o)?(ym(`${i}//${o}${l}`),bm("Auth",!0)):oA()}function qm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function iA(t){const e=qm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ah(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ah(o)}}}function ah(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function oA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}async function aA(t,e){return Sn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lA(t,e){return Bi(t,"POST","/v1/accounts:signInWithPassword",In(t,e))}async function cA(t,e){return Sn(t,"POST","/v1/accounts:sendOobCode",In(t,e))}async function uA(t,e){return cA(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dA(t,e){return Bi(t,"POST","/v1/accounts:signInWithEmailLink",In(t,e))}async function fA(t,e){return Bi(t,"POST","/v1/accounts:signInWithEmailLink",In(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends Iu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ci(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ci(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qo(e,n,"signInWithPassword",lA);case"emailLink":return dA(e,{email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qo(e,r,"signUpPassword",aA);case"emailLink":return fA(e,{idToken:n,email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qr(t,e){return Bi(t,"POST","/v1/accounts:signInWithIdp",In(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA="http://localhost";class Ir extends Iu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=yu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ir(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Qr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qr(e,n)}buildRequest(){const e={requestUri:hA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ys(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gA(t){const e=Vs(Ws(t)).link,n=e?Vs(Ws(e)).deep_link_id:null,r=Vs(Ws(t)).deep_link_id;return(r?Vs(Ws(r)).link:null)||r||n||e||t}class Su{constructor(e){var n,r,s,i,o,a;const l=Vs(Ws(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,d=pA((s=l.mode)!==null&&s!==void 0?s:null);J(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=gA(e);try{return new Su(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this.providerId=ws.PROVIDER_ID}static credential(e,n){return Ci._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Su.parseLink(n);return J(r,"argument-error"),Ci._fromEmailAndCode(e,r.code,r.tenantId)}}ws.PROVIDER_ID="password";ws.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ws.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vi extends zm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Vi{constructor(){super("facebook.com")}static credential(e){return Ir._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Vi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ir._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.GOOGLE_SIGN_IN_METHOD="google.com";Fn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Vi{constructor(){super("github.com")}static credential(e){return Ir._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.GITHUB_SIGN_IN_METHOD="github.com";Un.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Vi{constructor(){super("twitter.com")}static credential(e,n){return Ir._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.TWITTER_SIGN_IN_METHOD="twitter.com";$n.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mA(t,e){return Bi(t,"POST","/v1/accounts:signUp",In(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await xt._fromIdTokenResponse(e,r,s),o=lh(r);return new Sr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=lh(r);return new Sr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function lh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo extends tr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,zo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new zo(e,n,r,s)}}function Ym(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?zo._fromErrorAndOperation(t,i,e,r):i})}async function _A(t,e,n=!1){const r=await Ei(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Sr._forOperation(t,"link",r)}/**
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
 */async function vA(t,e,n=!1){const{auth:r}=t;if(It(r.app))return Promise.reject(pn(r));const s="reauthenticate";try{const i=await Ei(t,Ym(r,s,e,t),n);J(i.idToken,r,"internal-error");const o=Eu(i.idToken);J(o,r,"internal-error");const{sub:a}=o;return J(t.uid===a,r,"user-mismatch"),Sr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&$t(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qm(t,e,n=!1){if(It(t.app))return Promise.reject(pn(t));const r="signIn",s=await Ym(t,r,e),i=await Sr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function yA(t,e){return Qm(nr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jm(t){const e=nr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function bA(t,e,n){const r=nr(t);await qo(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",uA)}async function wA(t,e,n){if(It(t.app))return Promise.reject(pn(t));const r=nr(t),o=await qo(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",mA).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Jm(t),l}),a=await Sr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function EA(t,e,n){return It(t.app)?Promise.reject(pn(t)):yA(nt(t),ws.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Jm(t),r})}function CA(t,e,n,r){return nt(t).onIdTokenChanged(e,n,r)}function IA(t,e,n){return nt(t).beforeAuthStateChanged(e,n)}function hO(t){return nt(t).signOut()}const Yo="__sak";/**
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
 */class Xm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yo,"1"),this.storage.removeItem(Yo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA=1e3,TA=10;class Zm extends Xm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Vm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);BT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,TA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},SA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zm.type="LOCAL";const AA=Zm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_ extends Xm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}e_.type="SESSION";const t_=e_;/**
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
 */function kA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ma{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ma(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await kA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ma.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class RA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Tu("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){return window}function PA(t){Xt().location.href=t}/**
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
 */function n_(){return typeof Xt().WorkerGlobalScope<"u"&&typeof Xt().importScripts=="function"}async function xA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function NA(){return n_()?self:null}/**
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
 */const r_="firebaseLocalStorageDb",LA=1,Qo="firebaseLocalStorage",s_="fbase_key";class Wi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Da(t,e){return t.transaction([Qo],e?"readwrite":"readonly").objectStore(Qo)}function MA(){const t=indexedDB.deleteDatabase(r_);return new Wi(t).toPromise()}function yc(){const t=indexedDB.open(r_,LA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qo,{keyPath:s_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qo)?e(r):(r.close(),await MA(),e(await yc()))})})}async function ch(t,e,n){const r=Da(t,!0).put({[s_]:e,value:n});return new Wi(r).toPromise()}async function DA(t,e){const n=Da(t,!1).get(e),r=await new Wi(n).toPromise();return r===void 0?null:r.value}function uh(t,e){const n=Da(t,!0).delete(e);return new Wi(n).toPromise()}const FA=800,UA=3;class i_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>UA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return n_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ma._getInstance(NA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await xA(),!this.activeServiceWorker)return;this.sender=new RA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yc();return await ch(e,Yo,"1"),await uh(e,Yo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ch(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>DA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>uh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Da(s,!1).getAll();return new Wi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}i_.type="LOCAL";const $A=i_;new Hi(3e4,6e4);/**
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
 */function jA(t,e){return e?fn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Au extends Iu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function HA(t){return Qm(t.auth,new Au(t),t.bypassAuthState)}function BA(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),vA(n,new Au(t),t.bypassAuthState)}async function VA(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),_A(n,new Au(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return HA;case"linkViaPopup":case"linkViaRedirect":return VA;case"reauthViaPopup":case"reauthViaRedirect":return BA;default:$t(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=new Hi(2e3,1e4);class $r extends o_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,$r.currentPopupAction&&$r.currentPopupAction.cancel(),$r.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=Tu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$r.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,WA.get())};e()}}$r.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA="pendingRedirect",Co=new Map;class KA extends o_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Co.get(this.auth._key());if(!e){try{const r=await qA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Co.set(this.auth._key(),e)}return this.bypassAuthState||Co.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qA(t,e){const n=QA(e),r=YA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function zA(t,e){Co.set(t._key(),e)}function YA(t){return fn(t._redirectPersistence)}function QA(t){return Eo(GA,t.config.apiKey,t.name)}async function JA(t,e,n=!1){if(It(t.app))return Promise.reject(pn(t));const r=nr(t),s=jA(r,e),o=await new KA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=10*60*1e3;class ZA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ek(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!a_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Jt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XA&&this.cachedEventUids.clear(),this.cachedEventUids.has(dh(e))}saveEventToCache(e){this.cachedEventUids.add(dh(e)),this.lastProcessedEventTime=Date.now()}}function dh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function a_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ek(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return a_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tk(t,e={}){return Sn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rk=/^https?/;async function sk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tk(t);for(const n of e)try{if(ik(n))return}catch{}$t(t,"unauthorized-domain")}function ik(t){const e=_c(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!rk.test(n))return!1;if(nk.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ok=new Hi(3e4,6e4);function fh(){const t=Xt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ak(t){return new Promise((e,n)=>{var r,s,i;function o(){fh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fh(),n(Jt(t,"network-request-failed"))},timeout:ok.get()})}if(!((s=(r=Xt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Xt().gapi)===null||i===void 0)&&i.load)o();else{const a=JT("iframefcb");return Xt()[a]=()=>{gapi.load?o():n(Jt(t,"network-request-failed"))},Gm(`${QT()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Io=null,e})}let Io=null;function lk(t){return Io=Io||ak(t),Io}/**
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
 */const ck=new Hi(5e3,15e3),uk="__/auth/iframe",dk="emulator/auth/iframe",fk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pk(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wu(e,dk):`https://${t.config.authDomain}/${uk}`,r={apiKey:e.apiKey,appName:t.name,v:bs},s=hk.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ys(r).slice(1)}`}async function gk(t){const e=await lk(t),n=Xt().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:pk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fk,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Jt(t,"network-request-failed"),a=Xt().setTimeout(()=>{i(o)},ck.get());function l(){Xt().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const mk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_k=500,vk=600,yk="_blank",bk="http://localhost";class hh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wk(t,e,n,r=_k,s=vk){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},mk),{width:r.toString(),height:s.toString(),top:i,left:o}),c=lt().toLowerCase();n&&(a=Um(c)?yk:n),Dm(c)&&(e=e||bk,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[h,g])=>`${f}${h}=${g},`,"");if(HT(c)&&a!=="_self")return Ek(e||"",a),new hh(null);const d=window.open(e||"",a,u);J(d,t,"popup-blocked");try{d.focus()}catch{}return new hh(d)}function Ek(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ck="__/auth/handler",Ik="emulator/auth/handler",Sk=encodeURIComponent("fac");async function ph(t,e,n,r,s,i){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bs,eventId:s};if(e instanceof zm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",dc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof Vi){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${Sk}=${encodeURIComponent(l)}`:"";return`${Tk(t)}?${ys(a).slice(1)}${c}`}function Tk({config:t}){return t.emulator?wu(t,Ik):`https://${t.authDomain}/${Ck}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El="webStorageSupport";class Ak{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=t_,this._completeRedirectFn=JA,this._overrideRedirectResult=zA}async _openPopup(e,n,r,s){var i;wn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ph(e,n,r,_c(),s);return wk(e,o,Tu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ph(e,n,r,_c(),s);return PA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(wn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await gk(e),r=new ZA(e);return n.register("authEvent",s=>(J(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(El,{type:El},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[El];o!==void 0&&n(!!o),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vm()||Fm()||Cu()}}const kk=Ak;var gh="@firebase/auth",mh="1.10.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xk(t){ls(new Cr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wm(t)},c=new qT(r,s,i,l);return rA(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ls(new Cr("auth-internal",e=>{const n=nr(e.getProvider("auth").getImmediate());return(r=>new Rk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gn(gh,mh,Pk(t)),Gn(gh,mh,"esm2017")}/**
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
 */const Ok=5*60,Nk=vm("authIdTokenMaxAge")||Ok;let _h=null;const Lk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Nk)return;const s=n==null?void 0:n.token;_h!==s&&(_h=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ku(t=Sm()){const e=_u(t,"auth");if(e.isInitialized())return e.getImmediate();const n=nA(t,{popupRedirectResolver:kk,persistence:[$A,AA,t_]}),r=vm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Lk(i.toString());IA(n,o,()=>o(n.currentUser)),CA(n,a=>o(a))}}const s=mm("auth");return s&&sA(n,`http://${s}`),n}function Mk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}zT({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Jt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Mk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xk("Browser");const Dk={},Fk={class:"w-full flex items-center justify-between bg-white/80 backdrop-blur-md px-4 py-3 shadow-lg border-b border-indigo-100 dark:bg-slate-900/80 dark:border-slate-700",style:{margin:"0","padding-left":"1rem","padding-right":"1rem","padding-top":"0.75rem","padding-bottom":"0.75rem"}};function Uk(t,e){return Ye(),jt("nav",Fk,[Xr(t.$slots,"default")])}const Ru=Ra(Dk,[["render",Uk]]);function l_(t){return dp()?(ay(t),!0):!1}function cs(t){return typeof t=="function"?t():de(t)}const $k=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const jk=Object.prototype.toString,Hk=t=>jk.call(t)==="[object Object]",c_=()=>{};function Bk(t,e){function n(...r){return new Promise((s,i)=>{Promise.resolve(t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})).then(s).catch(i)})}return n}const u_=t=>t();function Vk(t=u_){const e=q(!0);function n(){e.value=!1}function r(){e.value=!0}const s=(...i)=>{e.value&&t(...i)};return{isActive:_a(e),pause:n,resume:r,eventFilter:s}}function Wk(t){return Mi()}function Gk(...t){if(t.length!==1)return Ly(...t);const e=t[0];return typeof e=="function"?_a(xy(()=>({get:e,set:c_}))):q(e)}function Kk(t,e,n={}){const{eventFilter:r=u_,...s}=n;return tt(t,Bk(r,e),s)}function qk(t,e,n={}){const{eventFilter:r,...s}=n,{eventFilter:i,pause:o,resume:a,isActive:l}=Vk(r);return{stop:Kk(t,e,{...s,eventFilter:i}),pause:o,resume:a,isActive:l}}function d_(t,e=!0,n){Wk()?je(t,n):e?t():gs(t)}function f_(t=!1,e={}){const{truthyValue:n=!0,falsyValue:r=!1}=e,s=Me(t),i=q(t);function o(a){if(arguments.length)return i.value=a,i.value;{const l=cs(n);return i.value=i.value===l?cs(r):l,i.value}}return s?o:[i,o]}function h_(t){var e;const n=cs(t);return(e=n==null?void 0:n.$el)!=null?e:n}const us=$k?window:void 0;function vh(...t){let e,n,r,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,s]=t,e=us):[e,n,r,s]=t,!e)return c_;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(u=>u()),i.length=0},a=(u,d,f,h)=>(u.addEventListener(d,f,h),()=>u.removeEventListener(d,f,h)),l=tt(()=>[h_(e),cs(s)],([u,d])=>{if(o(),!u)return;const f=Hk(d)?{...d}:d;i.push(...n.flatMap(h=>r.map(g=>a(u,h,g,f))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return l_(c),c}function zk(){const t=q(!1),e=Mi();return e&&je(()=>{t.value=!0},e),t}function Yk(t){const e=zk();return V(()=>(e.value,!!t()))}function Qk(t,e={}){const{window:n=us}=e,r=Yk(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let s;const i=q(!1),o=c=>{i.value=c.matches},a=()=>{s&&("removeEventListener"in s?s.removeEventListener("change",o):s.removeListener(o))},l=wt(()=>{r.value&&(a(),s=n.matchMedia(cs(t)),"addEventListener"in s?s.addEventListener("change",o):s.addListener(o),i.value=s.matches)});return l_(()=>{l(),a(),s=void 0}),i}const lo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},co="__vueuse_ssr_handlers__",Jk=Xk();function Xk(){return co in lo||(lo[co]=lo[co]||{}),lo[co]}function p_(t,e){return Jk[t]||e}function Zk(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const eR={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},yh="vueuse-storage";function tR(t,e,n,r={}){var s;const{flush:i="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:d=us,eventFilter:f,onError:h=R=>{console.error(R)},initOnMounted:g}=r,_=(u?Wc:q)(typeof e=="function"?e():e);if(!n)try{n=p_("getDefaultStorage",()=>{var R;return(R=us)==null?void 0:R.localStorage})()}catch(R){h(R)}if(!n)return _;const y=cs(e),T=Zk(y),b=(s=r.serializer)!=null?s:eR[T],{pause:A,resume:I}=qk(_,()=>x(_.value),{flush:i,deep:o,eventFilter:f});d&&a&&d_(()=>{vh(d,"storage",Y),vh(d,yh,U),g&&Y()}),g||Y();function H(R,Q){d&&d.dispatchEvent(new CustomEvent(yh,{detail:{key:t,oldValue:R,newValue:Q,storageArea:n}}))}function x(R){try{const Q=n.getItem(t);if(R==null)H(Q,null),n.removeItem(t);else{const L=b.write(R);Q!==L&&(n.setItem(t,L),H(Q,L))}}catch(Q){h(Q)}}function j(R){const Q=R?R.newValue:n.getItem(t);if(Q==null)return l&&y!=null&&n.setItem(t,b.write(y)),y;if(!R&&c){const L=b.read(Q);return typeof c=="function"?c(L,y):T==="object"&&!Array.isArray(L)?{...y,...L}:L}else return typeof Q!="string"?Q:b.read(Q)}function Y(R){if(!(R&&R.storageArea!==n)){if(R&&R.key==null){_.value=y;return}if(!(R&&R.key!==t)){A();try{(R==null?void 0:R.newValue)!==b.write(_.value)&&(_.value=j(R))}catch(Q){h(Q)}finally{R?gs(I):I()}}}}function U(R){Y(R.detail)}return _}function g_(t){return Qk("(prefers-color-scheme: dark)",t)}function nR(t={}){const{selector:e="html",attribute:n="class",initialValue:r="auto",window:s=us,storage:i,storageKey:o="vueuse-color-scheme",listenToStorageChanges:a=!0,storageRef:l,emitAuto:c,disableTransition:u=!0}=t,d={auto:"",light:"light",dark:"dark",...t.modes||{}},f=g_({window:s}),h=V(()=>f.value?"dark":"light"),g=l||(o==null?Gk(r):tR(o,r,i,{window:s,listenToStorageChanges:a})),_=V(()=>g.value==="auto"?h.value:g.value),y=p_("updateHTMLAttrs",(I,H,x)=>{const j=typeof I=="string"?s==null?void 0:s.document.querySelector(I):h_(I);if(!j)return;let Y;if(u&&(Y=s.document.createElement("style"),Y.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),s.document.head.appendChild(Y)),H==="class"){const U=x.split(/\s/g);Object.values(d).flatMap(R=>(R||"").split(/\s/g)).filter(Boolean).forEach(R=>{U.includes(R)?j.classList.add(R):j.classList.remove(R)})}else j.setAttribute(H,x);u&&(s.getComputedStyle(Y).opacity,document.head.removeChild(Y))});function T(I){var H;y(e,n,(H=d[I])!=null?H:I)}function b(I){t.onChanged?t.onChanged(I,T):T(I)}tt(_,b,{flush:"post",immediate:!0}),d_(()=>b(_.value));const A=V({get(){return c?g.value:_.value},set(I){g.value=I}});try{return Object.assign(A,{store:g,system:h,state:_})}catch{return A}}function m_(t={}){const{valueDark:e="dark",valueLight:n="",window:r=us}=t,s=nR({...t,onChanged:(a,l)=>{var c;t.onChanged?(c=t.onChanged)==null||c.call(t,a==="dark",l,a):l(a)},modes:{dark:e,light:n}}),i=V(()=>s.system?s.system.value:g_({window:r}).value?"dark":"light");return V({get(){return s.value==="dark"},set(a){const l=a?"dark":"light";i.value===l?s.value="auto":s.value=l}})}const rR={class:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-900 m-0 p-0 flex flex-col"},sR={class:"flex justify-between items-center w-full"},iR={class:"flex items-center gap-2"},oR={class:"flex-1"},aR={__name:"UserLogin",setup(t){const e=Lg(),n=q(),r=m_(),s=f_(r),i=ku(),o=q(!1);function a(c){const u=q(c[0]),d=q(c[1]),f=q(c[2]);n.value="",f.value==="Login"?EA(i,u.value,d.value).then(()=>{e.replace("/tasks")}).catch(h=>{switch(console.log("Login error:",h),h.code){case"auth/invalid-email":n.value="Invalid email";break;case"auth/user-not-found":n.value="No account with that email was found";break;case"auth/wrong-password":n.value="Incorrect password";break;default:n.value="Email or password was incorrect";break}}):f.value==="Signup"?wA(i,u.value,d.value).then(()=>{o.value=!0}).catch(h=>{switch(console.log(h.code),h.code){case"auth/email-already-in-use":n.value="Este email já está sendo usado";break;case"auth/weak-password":n.value="A senha deve ter pelo menos 6 caracteres";break;case"auth/invalid-email":n.value="Email inválido";break;default:n.value="Erro ao criar conta: "+h.message;break}}):console.log("Unknown button text:",f.value)}function l(){o.value=!1,e.push("/tasks")}return(c,u)=>(Ye(),jt("div",rR,[Z(Ru,null,{default:ke(()=>[z("div",sR,[u[3]||(u[3]=z("div",{class:"font-bold text-indigo-800 dark:text-indigo-200 flex items-center gap-2"}," 📋 Task Project ",-1)),z("div",iR,[Z(de(os),{icon:"iconamoon:mode-light",color:de(r)?"#fbbf24":"#f59e0b",width:"26",height:"26"},null,8,["color"]),Z(de(am),{onClick:u[0]||(u[0]=d=>de(s)()),modelValue:de(r),"onUpdate:modelValue":u[1]||(u[1]=d=>Me(r)?r.value=d:null),class:mn([de(r)?"bg-indigo-600":"bg-indigo-400","relative inline-flex h-6 w-11 items-center rounded-full transition-colors"])},{default:ke(()=>[z("span",{class:mn([de(r)?"translate-x-6":"translate-x-1","inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm"])},null,2)]),_:1},8,["modelValue","class"]),Z(de(os),{icon:"material-symbols:dark-mode-outline",color:de(r)?"#c7d2fe":"#6366f1",width:"26",height:"26"},null,8,["color"])])])]),_:1}),z("div",oR,[Z(Pa,null,{default:ke(()=>[u[4]||(u[4]=z("h1",{class:"font-bold text-xl mb-2 text-indigo-800 dark:text-indigo-200 text-center flex items-center justify-center gap-2"}," 📋 Task Project ",-1)),u[5]||(u[5]=z("h3",{class:"font-medium text-base mb-4 text-indigo-600 dark:text-indigo-300 text-center"}," Faça login ou crie uma conta para começar a acompanhar suas tarefas! ",-1)),Z(vC,{onEmitUser:a}),n.value?(Ye(),Zr(Kg,{key:0},{default:ke(()=>[at(jn(n.value),1)]),_:1})):Jc("",!0)]),_:1,__:[4,5]})]),Z(uu),Z(dm,{modelValue:o.value,"onUpdate:modelValue":u[2]||(u[2]=d=>o.value=d),title:"Conta Criada com Sucesso!",message:"Sua conta foi criada com sucesso! Você será redirecionado para a página de tarefas.","confirm-text":"Continuar",onConfirm:l},null,8,["modelValue"])]))}},lR={class:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-900 m-0 p-0 flex flex-col"},cR={class:"flex justify-between items-center w-full"},uR={class:"flex items-center gap-2"},dR={class:"flex-1"},fR={class:"relative"},hR={class:"flex gap-4 justify-center"},pR={__name:"ForgotPassword",setup(t){const e=Lg(),n=ku(),r=m_(),s=f_(r),i=q(""),o=q(""),a=q(!1),l=q(!1);function c(){e.push("/login")}async function u(){if(!i.value.trim()){o.value="Por favor, digite seu email";return}a.value=!0,o.value="";try{await bA(n,i.value),l.value=!0}catch(f){switch(console.error("Password reset error:",f),f.code){case"auth/user-not-found":o.value="Não existe uma conta com este email";break;case"auth/invalid-email":o.value="Email inválido";break;case"auth/too-many-requests":o.value="Muitas tentativas. Tente novamente mais tarde";break;default:o.value="Erro ao enviar email: "+f.message;break}}finally{a.value=!1}}function d(){l.value=!1,e.push("/login")}return(f,h)=>(Ye(),jt("div",lR,[Z(Ru,null,{default:ke(()=>[z("div",cR,[h[4]||(h[4]=z("div",{class:"font-bold text-indigo-800 dark:text-indigo-200 flex items-center gap-2"}," 📋 Task Project ",-1)),z("div",uR,[Z(de(os),{icon:"iconamoon:mode-light",color:de(r)?"#fbbf24":"#f59e0b",width:"26",height:"26"},null,8,["color"]),Z(de(am),{onClick:h[0]||(h[0]=g=>de(s)()),modelValue:de(r),"onUpdate:modelValue":h[1]||(h[1]=g=>Me(r)?r.value=g:null),class:mn([de(r)?"bg-indigo-600":"bg-indigo-400","relative inline-flex h-6 w-11 items-center rounded-full transition-colors"])},{default:ke(()=>[z("span",{class:mn([de(r)?"translate-x-6":"translate-x-1","inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm"])},null,2)]),_:1},8,["modelValue","class"]),Z(de(os),{icon:"material-symbols:dark-mode-outline",color:de(r)?"#c7d2fe":"#6366f1",width:"26",height:"26"},null,8,["color"])])])]),_:1}),z("div",dR,[Z(Pa,null,{default:ke(()=>[h[7]||(h[7]=z("h1",{class:"font-bold text-xl mb-2 text-indigo-800 dark:text-indigo-200 text-center"},"Recuperar Senha",-1)),h[8]||(h[8]=z("h3",{class:"font-medium text-base mb-4 text-indigo-600 dark:text-indigo-300 text-center"}," Digite seu email para receber as instruções de recuperação de senha ",-1)),z("form",{onSubmit:Kl(u,["prevent"]),class:"space-y-6"},[z("div",fR,[Fl(z("input",{type:"email",class:"peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]",id:"email",placeholder:"seu@email.com","onUpdate:modelValue":h[2]||(h[2]=g=>i.value=g),required:""},null,512),[[Lo,i.value]]),h[5]||(h[5]=z("label",{for:"email",class:"pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"}," Email ",-1))]),z("div",hR,[Z(vi,{type:"button",onClick:c,"custom-class":"bg-gray-500 hover:bg-gray-600 text-white border-gray-500 font-semibold"},{default:ke(()=>h[6]||(h[6]=[at(" Cancelar ")])),_:1,__:[6]}),Z(vi,{type:"submit",disabled:a.value||!i.value.trim(),"custom-class":"bg-indigo-500 hover:bg-indigo-600 text-white border-indigo-500 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"},{default:ke(()=>[at(jn(a.value?"Enviando...":"Enviar Instruções"),1)]),_:1},8,["disabled"])])],32),o.value?(Ye(),Zr(Kg,{key:0},{default:ke(()=>[at(jn(o.value),1)]),_:1})):Jc("",!0)]),_:1,__:[7,8]})]),Z(uu),Z(dm,{modelValue:l.value,"onUpdate:modelValue":h[3]||(h[3]=g=>l.value=g),title:"Email Enviado!",message:`Instruções de recuperação de senha foram enviadas para ${i.value}. Verifique sua caixa de entrada e spam.`,"confirm-text":"Voltar ao Login",onConfirm:d},null,8,["modelValue","message"])]))}},gR={class:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-900 flex flex-col"},mR={class:"flex-1"},_R={class:"text-indigo-600 dark:text-indigo-300"},vR={__name:"NotFound",setup(t){return(e,n)=>{const r=Kc("router-link");return Ye(),jt("div",gR,[Z(Ru,null,{default:ke(()=>n[0]||(n[0]=[z("div",{class:"font-bold text-indigo-800 dark:text-indigo-200 flex items-center gap-2"}," 📋 Task Project ",-1)])),_:1,__:[0]}),z("div",mR,[Z(Pa,null,{default:ke(()=>[n[4]||(n[4]=z("h2",{class:"font-bold text-xl p-4 text-indigo-800 dark:text-indigo-200"},"Página Não Encontrada",-1)),z("div",_R,[n[2]||(n[2]=at(" Esta página não pôde ser encontrada - deseja retornar ao ")),Z(r,{to:"/login",class:"underline underline-offset-2 font-medium hover:text-indigo-800 dark:hover:text-indigo-100 transition-colors"},{default:ke(()=>n[1]||(n[1]=[at("login")])),_:1,__:[1]}),n[3]||(n[3]=at("? "))])]),_:1,__:[4]})]),Z(uu)])}}},yR=u0({history:$E(),routes:[{path:"/",redirect:"login"},{path:"/login",component:aR},{path:"/forgot-password",component:pR},{path:"/tasks",name:"Tasks",component:()=>Zw(()=>import("./TaskBody-DMICY_Cd.js"),__vite__mapDeps([0,1])),meta:{requiresAuth:!0}},{path:"/:notFound(.*)",component:vR}]});/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var __="store";function pO(t){return t===void 0&&(t=null),Pe(t!==null?t:__)}function Es(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function bR(t){return t!==null&&typeof t=="object"}function wR(t){return t&&typeof t.then=="function"}function ER(t,e){return function(){return t(e)}}function v_(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function y_(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Fa(t,n,[],t._modules.root,!0),Pu(t,n,e)}function Pu(t,e,n){var r=t._state,s=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={},a={},l=oy(!0);l.run(function(){Es(i,function(c,u){o[u]=ER(c,t),a[u]=V(function(){return o[u]()}),Object.defineProperty(t.getters,u,{get:function(){return a[u].value},enumerable:!0})})}),t._state=ps({data:e}),t._scope=l,t.strict&&AR(t),r&&n&&t._withCommit(function(){r.data=null}),s&&s.stop()}function Fa(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var a=xu(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){a[l]=r.state})}var c=r.context=CR(t,o,n);r.forEachMutation(function(u,d){var f=o+d;IR(t,f,u,c)}),r.forEachAction(function(u,d){var f=u.root?d:o+d,h=u.handler||u;SR(t,f,h,c)}),r.forEachGetter(function(u,d){var f=o+d;TR(t,f,u,c)}),r.forEachChild(function(u,d){Fa(t,e,n.concat(d),u,s)})}function CR(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,a){var l=Jo(i,o,a),c=l.payload,u=l.options,d=l.type;return(!u||!u.root)&&(d=e+d),t.dispatch(d,c)},commit:r?t.commit:function(i,o,a){var l=Jo(i,o,a),c=l.payload,u=l.options,d=l.type;(!u||!u.root)&&(d=e+d),t.commit(d,c,u)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return b_(t,e)}},state:{get:function(){return xu(t.state,n)}}}),s}function b_(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function IR(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function SR(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return wR(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):a})}function TR(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function AR(t){tt(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function xu(t,e){return e.reduce(function(n,r){return n[r]},t)}function Jo(t,e,n){return bR(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var kR="vuex bindings",bh="vuex:mutations",Cl="vuex:actions",Lr="vuex",RR=0;function PR(t,e){aE({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[kR]},function(n){n.addTimelineLayer({id:bh,label:"Vuex Mutations",color:wh}),n.addTimelineLayer({id:Cl,label:"Vuex Actions",color:wh}),n.addInspector({id:Lr,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===Lr)if(r.filter){var s=[];I_(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[C_(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===Lr){var s=r.nodeId;b_(e,s),r.state=NR(MR(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===Lr){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(Lr),n.sendInspectorState(Lr),n.addTimelineEvent({layerId:bh,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=RR++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:Cl,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:Cl,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var wh=8702998,xR=6710886,OR=16777215,w_={label:"namespaced",textColor:OR,backgroundColor:xR};function E_(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function C_(t,e){return{id:e||"root",label:E_(e),tags:t.namespaced?[w_]:[],children:Object.keys(t._children).map(function(n){return C_(t._children[n],e+n+"/")})}}function I_(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[w_]:[]}),Object.keys(e._children).forEach(function(s){I_(t,e._children[s],n,r+s+"/")})}function NR(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=LR(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?E_(o):o,editable:!1,value:bc(function(){return i[o]})}})}return s}function LR(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=bc(function(){return t[n]})}else e[n]=bc(function(){return t[n]})}),e}function MR(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function bc(t){try{return t()}catch(e){return e}}var Bt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},S_={namespaced:{configurable:!0}};S_.namespaced.get=function(){return!!this._rawModule.namespaced};Bt.prototype.addChild=function(e,n){this._children[e]=n};Bt.prototype.removeChild=function(e){delete this._children[e]};Bt.prototype.getChild=function(e){return this._children[e]};Bt.prototype.hasChild=function(e){return e in this._children};Bt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Bt.prototype.forEachChild=function(e){Es(this._children,e)};Bt.prototype.forEachGetter=function(e){this._rawModule.getters&&Es(this._rawModule.getters,e)};Bt.prototype.forEachAction=function(e){this._rawModule.actions&&Es(this._rawModule.actions,e)};Bt.prototype.forEachMutation=function(e){this._rawModule.mutations&&Es(this._rawModule.mutations,e)};Object.defineProperties(Bt.prototype,S_);var Pr=function(e){this.register([],e,!1)};Pr.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};Pr.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};Pr.prototype.update=function(e){T_([],this.root,e)};Pr.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new Bt(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&Es(n.modules,function(a,l){s.register(e.concat(l),a,r)})};Pr.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);s&&s.runtime&&n.removeChild(r)};Pr.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function T_(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;T_(t.concat(r),e.getChild(r),n.modules[r])}}function DR(t){return new _t(t)}var _t=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Pr(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(f,h){return l.call(o,f,h)},this.commit=function(f,h,g){return c.call(o,f,h,g)},this.strict=s;var u=this._modules.root.state;Fa(this,u,[],this._modules.root),Pu(this,u),r.forEach(function(d){return d(n)})},Ou={state:{configurable:!0}};_t.prototype.install=function(e,n){e.provide(n||__,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&PR(e,this)};Ou.state.get=function(){return this._state.data};Ou.state.set=function(t){};_t.prototype.commit=function(e,n,r){var s=this,i=Jo(e,n,r),o=i.type,a=i.payload,l={type:o,payload:a},c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(d){d(a)})}),this._subscribers.slice().forEach(function(u){return u(l,s.state)}))};_t.prototype.dispatch=function(e,n){var r=this,s=Jo(e,n),i=s.type,o=s.payload,a={type:i,payload:o},l=this._actions[i];if(l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,r.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,d){c.then(function(f){try{r._actionSubscribers.filter(function(h){return h.after}).forEach(function(h){return h.after(a,r.state)})}catch{}u(f)},function(f){try{r._actionSubscribers.filter(function(h){return h.error}).forEach(function(h){return h.error(a,r.state,f)})}catch{}d(f)})})}};_t.prototype.subscribe=function(e,n){return v_(e,this._subscribers,n)};_t.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return v_(r,this._actionSubscribers,n)};_t.prototype.watch=function(e,n,r){var s=this;return tt(function(){return e(s.state,s.getters)},n,Object.assign({},r))};_t.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};_t.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Fa(this,this.state,e,this._modules.get(e),r.preserveState),Pu(this,this.state)};_t.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=xu(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),y_(this)};_t.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};_t.prototype.hotUpdate=function(e){this._modules.update(e),y_(this,!0)};_t.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(_t.prototype,Ou);var FR="firebase",UR="11.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gn(FR,UR,"app");var Eh={};const Ch="@firebase/database",Ih="1.0.19";/**
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
 */let A_="";function $R(t){A_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ue(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:bi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return tn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new jR(e)}}catch{}return new HR},pr=k_("localStorage"),BR=k_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new gu("@firebase/database"),VR=function(){let t=1;return function(){return t++}}(),R_=function(t){const e=fS(t),n=new lS;n.update(e);const r=n.digest();return du.encodeByteArray(r)},Gi=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Gi.apply(null,r):typeof r=="object"?e+=Ue(r):e+=r,e+=" "}return e};let ni=null,Sh=!0;const WR=function(t,e){P(!0,"Can't turn on custom loggers persistently."),Jr.logLevel=ve.VERBOSE,ni=Jr.log.bind(Jr)},Ze=function(...t){if(Sh===!0&&(Sh=!1,ni===null&&BR.get("logging_enabled")===!0&&WR()),ni){const e=Gi.apply(null,t);ni(e)}},Ki=function(t){return function(...e){Ze(t,...e)}},wc=function(...t){const e="FIREBASE INTERNAL ERROR: "+Gi(...t);Jr.error(e)},En=function(...t){const e=`FIREBASE FATAL ERROR: ${Gi(...t)}`;throw Jr.error(e),new Error(e)},gt=function(...t){const e="FIREBASE WARNING: "+Gi(...t);Jr.warn(e)},GR=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&gt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Nu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},KR=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Tr="[MIN_NAME]",Qn="[MAX_NAME]",Cs=function(t,e){if(t===e)return 0;if(t===Tr||e===Qn)return-1;if(e===Tr||t===Qn)return 1;{const n=Th(t),r=Th(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},qR=function(t,e){return t===e?0:t<e?-1:1},Ds=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ue(e))},Lu=function(t){if(typeof t!="object"||t===null)return Ue(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ue(e[r]),n+=":",n+=Lu(t[e[r]]);return n+="}",n},P_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function mt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const x_=function(t){P(!Nu(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},zR=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},YR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function QR(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const JR=new RegExp("^-?(0*)\\d{1,10}$"),XR=-2147483648,ZR=2147483647,Th=function(t){if(JR.test(t)){const e=Number(t);if(e>=XR&&e<=ZR)return e}return null},Is=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw gt("Exception was thrown by user callback.",n),e},Math.floor(0))}},eP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ri=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class tP{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,It(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){gt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ze("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',gt(e)}}class So{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}So.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu="5",O_="v",N_="s",L_="r",M_="f",D_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,F_="ls",U_="p",Ec="ac",$_="websocket",j_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=pr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&pr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function rP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function B_(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let r;if(e===$_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===j_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);rP(t)&&(n.ns=t.namespace);const s=[];return mt(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(){this.counters_={}}incrementCounter(e,n=1){tn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return HI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il={},Sl={};function Du(t){const e=t.toString();return Il[e]||(Il[e]=new sP),Il[e]}function iP(t,e){const n=t.toString();return Sl[n]||(Sl[n]=e()),Sl[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Is(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="start",aP="close",lP="pLPCommand",cP="pRTLPCB",V_="id",W_="pw",G_="ser",uP="cb",dP="seg",fP="ts",hP="d",pP="dframe",K_=1870,q_=30,gP=K_-q_,mP=25e3,_P=3e4;class jr{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ki(e),this.stats_=Du(n),this.urlFn=l=>(this.appCheckToken&&(l[Ec]=this.appCheckToken),B_(n,j_,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new oP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(_P)),KR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fu((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ah)this.id=a,this.password=l;else if(o===aP)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Ah]="t",r[G_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[uP]=this.scriptTagHolder.uniqueCallbackIdentifier),r[O_]=Mu,this.transportSessionId&&(r[N_]=this.transportSessionId),this.lastSessionId&&(r[F_]=this.lastSessionId),this.applicationId&&(r[U_]=this.applicationId),this.appCheckToken&&(r[Ec]=this.appCheckToken),typeof location<"u"&&location.hostname&&D_.test(location.hostname)&&(r[L_]=M_);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){jr.forceAllow_=!0}static forceDisallow(){jr.forceDisallow_=!0}static isAvailable(){return jr.forceAllow_?!0:!jr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!zR()&&!YR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=pm(n),s=P_(r,gP);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[pP]="t",r[V_]=e,r[W_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ue(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Fu{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=VR(),window[lP+this.uniqueCallbackIdentifier]=e,window[cP+this.uniqueCallbackIdentifier]=n,this.myIFrame=Fu.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ze("frame writing exception"),a.stack&&Ze(a.stack),Ze(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ze("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[V_]=this.myID,e[W_]=this.myPW,e[G_]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+q_+r.length<=K_;){const o=this.pendingSegs.shift();r=r+"&"+dP+s+"="+o.seg+"&"+fP+s+"="+o.ts+"&"+hP+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(mP)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ze("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP=16384,yP=45e3;let Xo=null;typeof MozWebSocket<"u"?Xo=MozWebSocket:typeof WebSocket<"u"&&(Xo=WebSocket);class Pt{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ki(this.connId),this.stats_=Du(n),this.connURL=Pt.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[O_]=Mu,typeof location<"u"&&location.hostname&&D_.test(location.hostname)&&(o[L_]=M_),n&&(o[N_]=n),r&&(o[F_]=r),s&&(o[Ec]=s),i&&(o[U_]=i),B_(e,$_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,pr.set("previous_websocket_failure",!0);try{let r;eS(),this.mySock=new Xo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Pt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Xo!==null&&!Pt.forceDisallow_}static previouslyFailed(){return pr.isInMemoryStorage||pr.get("previous_websocket_failure")===!0}markConnectionHealthy(){pr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=bi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=P_(n,vP);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(yP))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Pt.responsesRequiredToBeHealthy=2;Pt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{static get ALL_TRANSPORTS(){return[jr,Pt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Pt&&Pt.isAvailable();let r=n&&!Pt.previouslyFailed();if(e.webSocketOnly&&(n||gt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Pt];else{const s=this.transports_=[];for(const i of Ii.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Ii.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ii.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP=6e4,wP=5e3,EP=10*1024,CP=100*1024,Tl="t",kh="d",IP="s",Rh="r",SP="e",Ph="o",xh="a",Oh="n",Nh="p",TP="h";class AP{constructor(e,n,r,s,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ki("c:"+this.id+":"),this.transportManager_=new Ii(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ri(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>CP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>EP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Tl in e){const n=e[Tl];n===xh?this.upgradeIfSecondaryHealthy_():n===Rh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ph&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ds("t",e),r=Ds("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Nh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:xh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Oh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ds("t",e),r=Ds("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ds(Tl,e);if(kh in e){const r=e[kh];if(n===TP){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Oh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===IP?this.onConnectionShutdown_(r):n===Rh?this.onReset_(r):n===SP?wc("Server Error: "+r):n===Ph?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):wc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Mu!==r&&gt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ri(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(bP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ri(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(wP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Nh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(pr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo extends Y_{static getInstance(){return new Zo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!hu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=32,Mh=768;class be{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function he(){return new be("")}function re(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Jn(t){return t.pieces_.length-t.pieceNum_}function Se(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new be(t.pieces_,e)}function Q_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function kP(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function J_(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function X_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new be(e,0)}function $e(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof be)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new be(n,0)}function se(t){return t.pieceNum_>=t.pieces_.length}function ot(t,e){const n=re(t),r=re(e);if(n===null)return e;if(n===r)return ot(Se(t),Se(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Uu(t,e){if(Jn(t)!==Jn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Ot(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Jn(t)>Jn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class RP{constructor(e,n){this.errorPrefix_=n,this.parts_=J_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Na(this.parts_[r]);Z_(this)}}function PP(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Na(e),Z_(t)}function xP(t){const e=t.parts_.pop();t.byteLength_-=Na(e),t.parts_.length>0&&(t.byteLength_-=1)}function Z_(t){if(t.byteLength_>Mh)throw new Error(t.errorPrefix_+"has a key path longer than "+Mh+" bytes ("+t.byteLength_+").");if(t.parts_.length>Lh)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Lh+") or object contains a cycle "+ur(t))}function ur(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u extends Y_{static getInstance(){return new $u}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=1e3,OP=60*5*1e3,Dh=30*1e3,NP=1.3,LP=3e4,MP="server_kill",Fh=3;class gn extends z_{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=gn.nextPersistentConnectionId_++,this.log_=Ki("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Fs,this.maxReconnectDelay_=OP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");$u.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Zo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(Ue(i)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new Oa,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;gn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&tn(e,"w")){const r=as(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();gt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||aS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Dh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=oS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ue(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):wc("Unrecognized action received from server: "+Ue(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Fs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Fs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>LP&&(this.reconnectDelay_=Fs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*NP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+gn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ze("getToken() completed but was canceled"):(Ze("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new AP(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,h=>{gt(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(MP)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&gt(d),l())}}}interrupt(e){Ze("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ze("Resuming connection for reason: "+e),delete this.interruptReasons_[e],dc(this.interruptReasons_)&&(this.reconnectDelay_=Fs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Lu(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new be(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){Ze("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Fh&&(this.reconnectDelay_=Dh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ze("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Fh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+A_.replace(/\./g,"-")]=1,hu()?e["framework.cordova"]=1:wm()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Zo.getInstance().currentlyOnline();return dc(this.interruptReasons_)&&e}}gn.nextPersistentConnectionId_=0;gn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ie(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ie(Tr,e),s=new ie(Tr,n);return this.compare(r,s)!==0}minPost(){return ie.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uo;class ev extends Ua{static get __EMPTY_NODE(){return uo}static set __EMPTY_NODE(e){uo=e}compare(e,n){return Cs(e.name,n.name)}isDefinedOn(e){throw _s("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ie.MIN}maxPost(){return new ie(Qn,uo)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new ie(e,uo)}toString(){return".key"}}const vr=new ev;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Be{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Be.RED,this.left=s??ft.EMPTY_NODE,this.right=i??ft.EMPTY_NODE}copy(e,n,r,s,i){return new Be(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ft.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return ft.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Be.RED=!0;Be.BLACK=!1;class DP{copy(e,n,r,s,i){return this}insert(e,n,r){return new Be(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ft{constructor(e,n=ft.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ft(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Be.BLACK,null,null))}remove(e){return new ft(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Be.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new fo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new fo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new fo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new fo(this.root_,null,this.comparator_,!0,e)}}ft.EMPTY_NODE=new DP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FP(t,e){return Cs(t.name,e.name)}function ju(t,e){return Cs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cc;function UP(t){Cc=t}const tv=function(t){return typeof t=="number"?"number:"+x_(t):"string:"+t},nv=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&tn(e,".sv"),"Priority must be a string or number.")}else P(t===Cc||t.isEmpty(),"priority of unexpected type.");P(t===Cc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uh;class He{static set __childrenNodeConstructor(e){Uh=e}static get __childrenNodeConstructor(){return Uh}constructor(e,n=He.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),nv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new He(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:He.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return se(e)?this:re(e)===".priority"?this.priorityNode_:He.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:He.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=re(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(P(r!==".priority"||Jn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,He.__childrenNodeConstructor.EMPTY_NODE.updateChild(Se(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+tv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=x_(this.value_):e+=this.value_,this.lazyHash_=R_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===He.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof He.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=He.VALUE_TYPE_ORDER.indexOf(n),i=He.VALUE_TYPE_ORDER.indexOf(r);return P(s>=0,"Unknown leaf type: "+n),P(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}He.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rv,sv;function $P(t){rv=t}function jP(t){sv=t}class HP extends Ua{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?Cs(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ie.MIN}maxPost(){return new ie(Qn,new He("[PRIORITY-POST]",sv))}makePost(e,n){const r=rv(e);return new ie(n,new He("[PRIORITY-POST]",r))}toString(){return".priority"}}const Oe=new HP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP=Math.log(2);class VP{constructor(e){const n=i=>parseInt(Math.log(i)/BP,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ea=function(t,e,n,r){t.sort(e);const s=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=t[l],f=n?n(d):d,new Be(f,d.node,Be.BLACK,null,null);{const h=parseInt(u/2,10)+l,g=s(l,h),_=s(h+1,c);return d=t[h],f=n?n(d):d,new Be(f,d.node,Be.BLACK,g,_)}},i=function(l){let c=null,u=null,d=t.length;const f=function(g,_){const y=d-g,T=d;d-=g;const b=s(y+1,T),A=t[y],I=n?n(A):A;h(new Be(I,A.node,_,null,b))},h=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const _=l.nextBitIsOne(),y=Math.pow(2,l.count-(g+1));_?f(y,Be.BLACK):(f(y,Be.BLACK),f(y,Be.RED))}return u},o=new VP(t.length),a=i(o);return new ft(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Al;const Mr={};class hn{static get Default(){return P(Mr&&Oe,"ChildrenNode.ts has not been loaded"),Al=Al||new hn({".priority":Mr},{".priority":Oe}),Al}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=as(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ft?n:null}hasIndex(e){return tn(this.indexSet_,e.toString())}addIndex(e,n){P(e!==vr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(ie.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=ea(r,e.getCompare()):a=Mr;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new hn(u,c)}addToIndexes(e,n){const r=Bo(this.indexes_,(s,i)=>{const o=as(this.indexSet_,i);if(P(o,"Missing index implementation for "+i),s===Mr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ie.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ea(a,o.getCompare())}else return Mr;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new ie(e.name,a))),l.insert(e,e.node)}});return new hn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Bo(this.indexes_,s=>{if(s===Mr)return s;{const i=n.get(e.name);return i?s.remove(new ie(e.name,i)):s}});return new hn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Us;class X{static get EMPTY_NODE(){return Us||(Us=new X(new ft(ju),null,hn.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&nv(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Us}updatePriority(e){return this.children_.isEmpty()?this:new X(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Us:n}}getChild(e){const n=re(e);return n===null?this:this.getImmediateChild(n).getChild(Se(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ie(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Us:this.priorityNode_;return new X(s,o,i)}}updateChild(e,n){const r=re(e);if(r===null)return n;{P(re(e)!==".priority"||Jn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Se(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(Oe,(o,a)=>{n[o]=a.val(e),r++,i&&X.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+tv(this.getPriority().val())+":"),this.forEachChild(Oe,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":R_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new ie(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ie(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ie(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ie.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ie.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===qi?-1:0}withIndex(e){if(e===vr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new X(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===vr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Oe),s=n.getIterator(Oe);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===vr?null:this.indexMap_.get(e.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class WP extends X{constructor(){super(new ft(ju),X.EMPTY_NODE,hn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return X.EMPTY_NODE}isEmpty(){return!1}}const qi=new WP;Object.defineProperties(ie,{MIN:{value:new ie(Tr,X.EMPTY_NODE)},MAX:{value:new ie(Qn,qi)}});ev.__EMPTY_NODE=X.EMPTY_NODE;He.__childrenNodeConstructor=X;UP(qi);jP(qi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP=!0;function Ve(t,e=null){if(t===null)return X.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new He(n,Ve(e))}if(!(t instanceof Array)&&GP){const n=[];let r=!1;if(mt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ve(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new ie(o,l)))}}),n.length===0)return X.EMPTY_NODE;const i=ea(n,FP,o=>o.name,ju);if(r){const o=ea(n,Oe.getCompare());return new X(i,Ve(e),new hn({".priority":o},{".priority":Oe}))}else return new X(i,Ve(e),hn.Default)}else{let n=X.EMPTY_NODE;return mt(t,(r,s)=>{if(tn(t,r)&&r.substring(0,1)!=="."){const i=Ve(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(Ve(e))}}$P(Ve);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu extends Ua{constructor(e){super(),this.indexPath_=e,P(!se(e)&&re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?Cs(e.name,n.name):i}makePost(e,n){const r=Ve(e),s=X.EMPTY_NODE.updateChild(this.indexPath_,r);return new ie(n,s)}maxPost(){const e=X.EMPTY_NODE.updateChild(this.indexPath_,qi);return new ie(Qn,e)}toString(){return J_(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP extends Ua{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Cs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ie.MIN}maxPost(){return ie.MAX}makePost(e,n){const r=Ve(e);return new ie(n,r)}toString(){return".value"}}const iv=new KP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(t){return{type:"value",snapshotNode:t}}function ds(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Si(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ti(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function qP(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){P(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Si(n,a)):P(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ds(n,r)):o.trackChildChange(Ti(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Oe,(s,i)=>{n.hasChild(s)||r.trackChildChange(Si(s,i))}),n.isLeafNode()||n.forEachChild(Oe,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(Ti(s,i,o))}else r.trackChildChange(ds(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?X.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.indexedFilter_=new Bu(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ai.getStartPost_(e),this.endPost_=Ai.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new ie(n,r))||(r=X.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=X.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(X.EMPTY_NODE);const i=this;return n.forEachChild(Oe,(o,a)=>{i.matches(new ie(o,a))||(s=s.updateImmediateChild(o,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ai(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new ie(n,r))||(r=X.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=X.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(X.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,h)=>d(h,f)}else o=this.index_.getCompare();const a=e;P(a.numChildren()===this.limit_,"");const l=new ie(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=s.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const h=f==null?1:o(f,l);if(u&&!r.isEmpty()&&h>=0)return i!=null&&i.trackChildChange(Ti(n,r,d)),a.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(Si(n,d));const _=a.updateImmediateChild(n,X.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(i!=null&&i.trackChildChange(ds(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?e:u&&o(c,l)>=0?(i!=null&&(i.trackChildChange(Si(c.name,c.node)),i.trackChildChange(ds(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,X.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Oe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Tr}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Qn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Oe}copy(){const e=new Vu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function YP(t){return t.loadsAllData()?new Bu(t.getIndex()):t.hasLimit()?new zP(t):new Ai(t)}function QP(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function JP(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function XP(t,e){const n=t.copy();return n.index_=e,n}function $h(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Oe?n="$priority":t.index_===iv?n="$value":t.index_===vr?n="$key":(P(t.index_ instanceof Hu,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ue(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ue(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ue(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ue(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ue(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function jh(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Oe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta extends z_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Ki("p:rest:"),this.listens_={}}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=ta.getListenId_(e,r),a={};this.listens_[o]=a;const l=$h(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(i,d,!1,r),as(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,n){const r=ta.getListenId_(e,n);delete this.listens_[r]}get(e){const n=$h(e._queryParams),r=e._path.toString(),s=new Oa;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ys(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=bi(a.responseText)}catch{gt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&gt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(){return{value:null,children:new Map}}function av(t,e,n){if(se(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=re(e);t.children.has(r)||t.children.set(r,na());const s=t.children.get(r);e=Se(e),av(s,e,n)}}function Ic(t,e,n){t.value!==null?n(e,t.value):ex(t,(r,s)=>{const i=new be(e.toString()+"/"+r);Ic(s,i,n)})}function ex(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&mt(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh=10*1e3,nx=30*1e3,rx=5*60*1e3;class sx{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new tx(e);const r=Hh+(nx-Hh)*Math.random();ri(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;mt(e,(s,i)=>{i>0&&tn(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),ri(this.reportStats_.bind(this),Math.floor(Math.random()*2*rx))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Nt||(Nt={}));function lv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Wu(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Gu(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Nt.ACK_USER_WRITE,this.source=lv()}operationForChild(e){if(se(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new be(e));return new ra(he(),n,this.revert)}}else return P(re(this.path)===e,"operationForChild called for unrelated child."),new ra(Se(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n){this.source=e,this.path=n,this.type=Nt.LISTEN_COMPLETE}operationForChild(e){return se(this.path)?new ki(this.source,he()):new ki(this.source,Se(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Nt.OVERWRITE}operationForChild(e){return se(this.path)?new Ar(this.source,he(),this.snap.getImmediateChild(e)):new Ar(this.source,Se(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Nt.MERGE}operationForChild(e){if(se(this.path)){const n=this.children.subtree(new be(e));return n.isEmpty()?null:n.value?new Ar(this.source,he(),n.value):new Ri(this.source,he(),n)}else return P(re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ri(this.source,Se(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(se(e))return this.isFullyInitialized()&&!this.filtered_;const n=re(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ox(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(qP(o.childName,o.snapshotNode))}),$s(t,s,"child_removed",e,r,n),$s(t,s,"child_added",e,r,n),$s(t,s,"child_moved",i,r,n),$s(t,s,"child_changed",e,r,n),$s(t,s,"value",e,r,n),s}function $s(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>lx(t,a,l)),o.forEach(a=>{const l=ax(t,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function ax(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function lx(t,e,n){if(e.childName==null||n.childName==null)throw _s("Should only compare child_ events.");const r=new ie(e.childName,e.snapshotNode),s=new ie(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(t,e){return{eventCache:t,serverCache:e}}function si(t,e,n,r){return $a(new Xn(e,n,r),t.serverCache)}function cv(t,e,n,r){return $a(t.eventCache,new Xn(e,n,r))}function sa(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function kr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kl;const cx=()=>(kl||(kl=new ft(qR)),kl);class Te{static fromObject(e){let n=new Te(null);return mt(e,(r,s)=>{n=n.set(new be(r),s)}),n}constructor(e,n=cx()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:he(),value:this.value};if(se(e))return null;{const r=re(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Se(e),n);return i!=null?{path:$e(new be(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(se(e))return this;{const n=re(e),r=this.children.get(n);return r!==null?r.subtree(Se(e)):new Te(null)}}set(e,n){if(se(e))return new Te(n,this.children);{const r=re(e),i=(this.children.get(r)||new Te(null)).set(Se(e),n),o=this.children.insert(r,i);return new Te(this.value,o)}}remove(e){if(se(e))return this.children.isEmpty()?new Te(null):new Te(null,this.children);{const n=re(e),r=this.children.get(n);if(r){const s=r.remove(Se(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new Te(null):new Te(this.value,i)}else return this}}get(e){if(se(e))return this.value;{const n=re(e),r=this.children.get(n);return r?r.get(Se(e)):null}}setTree(e,n){if(se(e))return n;{const r=re(e),i=(this.children.get(r)||new Te(null)).setTree(Se(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Te(this.value,o)}}fold(e){return this.fold_(he(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_($e(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,he(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(se(e))return null;{const i=re(e),o=this.children.get(i);return o?o.findOnPath_(Se(e),$e(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,he(),n)}foreachOnPath_(e,n,r){if(se(e))return this;{this.value&&r(n,this.value);const s=re(e),i=this.children.get(s);return i?i.foreachOnPath_(Se(e),$e(n,s),r):new Te(null)}}foreach(e){this.foreach_(he(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_($e(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.writeTree_=e}static empty(){return new Mt(new Te(null))}}function ii(t,e,n){if(se(e))return new Mt(new Te(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=ot(s,e);return i=i.updateChild(o,n),new Mt(t.writeTree_.set(s,i))}else{const s=new Te(n),i=t.writeTree_.setTree(e,s);return new Mt(i)}}}function Bh(t,e,n){let r=t;return mt(n,(s,i)=>{r=ii(r,$e(e,s),i)}),r}function Vh(t,e){if(se(e))return Mt.empty();{const n=t.writeTree_.setTree(e,new Te(null));return new Mt(n)}}function Sc(t,e){return xr(t,e)!=null}function xr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ot(n.path,e)):null}function Wh(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Oe,(r,s)=>{e.push(new ie(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new ie(r,s.value))}),e}function Kn(t,e){if(se(e))return t;{const n=xr(t,e);return n!=null?new Mt(new Te(n)):new Mt(t.writeTree_.subtree(e))}}function Tc(t){return t.writeTree_.isEmpty()}function fs(t,e){return uv(he(),t.writeTree_,e)}function uv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(P(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=uv($e(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild($e(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(t,e){return pv(e,t)}function ux(t,e,n,r,s){P(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=ii(t.visibleWrites,e,n)),t.lastWriteId=r}function dx(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function fx(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&hx(a,r.path)?s=!1:Ot(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return px(t),!0;if(r.snap)t.visibleWrites=Vh(t.visibleWrites,r.path);else{const a=r.children;mt(a,l=>{t.visibleWrites=Vh(t.visibleWrites,$e(r.path,l))})}return!0}else return!1}function hx(t,e){if(t.snap)return Ot(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ot($e(t.path,n),e))return!0;return!1}function px(t){t.visibleWrites=dv(t.allWrites,gx,he()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function gx(t){return t.visible}function dv(t,e,n){let r=Mt.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)Ot(n,o)?(a=ot(n,o),r=ii(r,a,i.snap)):Ot(o,n)&&(a=ot(o,n),r=ii(r,he(),i.snap.getChild(a)));else if(i.children){if(Ot(n,o))a=ot(n,o),r=Bh(r,a,i.children);else if(Ot(o,n))if(a=ot(o,n),se(a))r=Bh(r,he(),i.children);else{const l=as(i.children,re(a));if(l){const c=l.getChild(Se(a));r=ii(r,he(),c)}}}else throw _s("WriteRecord should have .snap or .children")}}return r}function fv(t,e,n,r,s){if(!r&&!s){const i=xr(t.visibleWrites,e);if(i!=null)return i;{const o=Kn(t.visibleWrites,e);if(Tc(o))return n;if(n==null&&!Sc(o,he()))return null;{const a=n||X.EMPTY_NODE;return fs(o,a)}}}else{const i=Kn(t.visibleWrites,e);if(!s&&Tc(i))return n;if(!s&&n==null&&!Sc(i,he()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(Ot(c.path,e)||Ot(e,c.path))},a=dv(t.allWrites,o,e),l=n||X.EMPTY_NODE;return fs(a,l)}}}function mx(t,e,n){let r=X.EMPTY_NODE;const s=xr(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Oe,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Kn(t.visibleWrites,e);return n.forEachChild(Oe,(o,a)=>{const l=fs(Kn(i,new be(o)),a);r=r.updateImmediateChild(o,l)}),Wh(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Kn(t.visibleWrites,e);return Wh(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function _x(t,e,n,r,s){P(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=$e(e,n);if(Sc(t.visibleWrites,i))return null;{const o=Kn(t.visibleWrites,i);return Tc(o)?s.getChild(n):fs(o,s.getChild(n))}}function vx(t,e,n,r){const s=$e(e,n),i=xr(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Kn(t.visibleWrites,s);return fs(o,r.getNode().getImmediateChild(n))}else return null}function yx(t,e){return xr(t.visibleWrites,e)}function bx(t,e,n,r,s,i,o){let a;const l=Kn(t.visibleWrites,e),c=xr(l,he());if(c!=null)a=c;else if(n!=null)a=fs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let h=f.getNext();for(;h&&u.length<s;)d(h,r)!==0&&u.push(h),h=f.getNext();return u}else return[]}function wx(){return{visibleWrites:Mt.empty(),allWrites:[],lastWriteId:-1}}function ia(t,e,n,r){return fv(t.writeTree,t.treePath,e,n,r)}function Ku(t,e){return mx(t.writeTree,t.treePath,e)}function Gh(t,e,n,r){return _x(t.writeTree,t.treePath,e,n,r)}function oa(t,e){return yx(t.writeTree,$e(t.treePath,e))}function Ex(t,e,n,r,s,i){return bx(t.writeTree,t.treePath,e,n,r,s,i)}function qu(t,e,n){return vx(t.writeTree,t.treePath,e,n)}function hv(t,e){return pv($e(t.treePath,e),t.writeTree)}function pv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Ti(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,Si(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,ds(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Ti(r,e.snapshotNode,s.oldSnap));else throw _s("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const gv=new Ix;class zu{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Xn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return qu(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:kr(this.viewCache_),i=Ex(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sx(t){return{filter:t}}function Tx(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Ax(t,e,n,r,s){const i=new Cx;let o,a;if(n.type===Nt.OVERWRITE){const c=n;c.source.fromUser?o=Ac(t,e,c.path,c.snap,r,s,i):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!se(c.path),o=aa(t,e,c.path,c.snap,r,s,a,i))}else if(n.type===Nt.MERGE){const c=n;c.source.fromUser?o=Rx(t,e,c.path,c.children,r,s,i):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=kc(t,e,c.path,c.children,r,s,a,i))}else if(n.type===Nt.ACK_USER_WRITE){const c=n;c.revert?o=Ox(t,e,c.path,r,s,i):o=Px(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===Nt.LISTEN_COMPLETE)o=xx(t,e,n.path,r,i);else throw _s("Unknown operation type: "+n.type);const l=i.getChanges();return kx(e,o,l),{viewCache:o,changes:l}}function kx(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=sa(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(ov(sa(e)))}}function mv(t,e,n,r,s,i){const o=e.eventCache;if(oa(r,n)!=null)return e;{let a,l;if(se(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=kr(e),u=c instanceof X?c:X.EMPTY_NODE,d=Ku(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const c=ia(r,kr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=re(n);if(c===".priority"){P(Jn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Gh(r,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=Se(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Gh(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=qu(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,s,i):a=o.getNode()}}return si(e,a,o.isFullyInitialized()||se(n),t.filter.filtersNodes())}}function aa(t,e,n,r,s,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(se(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const h=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),h,null)}else{const h=re(n);if(!l.isCompleteForPath(n)&&Jn(n)>1)return e;const g=Se(n),y=l.getNode().getImmediateChild(h).updateChild(g,r);h===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),h,y,g,gv,null)}const d=cv(e,c,l.isFullyInitialized()||se(n),u.filtersNodes()),f=new zu(s,d,i);return mv(t,d,n,s,f,a)}function Ac(t,e,n,r,s,i,o){const a=e.eventCache;let l,c;const u=new zu(s,e,i);if(se(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=si(e,c,!0,t.filter.filtersNodes());else{const d=re(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=si(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Se(n),h=a.getNode().getImmediateChild(d);let g;if(se(f))g=r;else{const _=u.getCompleteChild(d);_!=null?Q_(f)===".priority"&&_.getChild(X_(f)).isEmpty()?g=_:g=_.updateChild(f,r):g=X.EMPTY_NODE}if(h.equals(g))l=e;else{const _=t.filter.updateChild(a.getNode(),d,g,f,u,o);l=si(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Kh(t,e){return t.eventCache.isCompleteForChild(e)}function Rx(t,e,n,r,s,i,o){let a=e;return r.foreach((l,c)=>{const u=$e(n,l);Kh(e,re(u))&&(a=Ac(t,a,u,c,s,i,o))}),r.foreach((l,c)=>{const u=$e(n,l);Kh(e,re(u))||(a=Ac(t,a,u,c,s,i,o))}),a}function qh(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function kc(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;se(n)?c=r:c=new Te(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const h=e.serverCache.getNode().getImmediateChild(d),g=qh(t,h,f);l=aa(t,l,new be(d),g,s,i,o,a)}}),c.children.inorderTraversal((d,f)=>{const h=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!h){const g=e.serverCache.getNode().getImmediateChild(d),_=qh(t,g,f);l=aa(t,l,new be(d),_,s,i,o,a)}}),l}function Px(t,e,n,r,s,i,o){if(oa(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(se(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return aa(t,e,n,l.getNode().getChild(n),s,i,a,o);if(se(n)){let c=new Te(null);return l.getNode().forEachChild(vr,(u,d)=>{c=c.set(new be(u),d)}),kc(t,e,n,c,s,i,a,o)}else return e}else{let c=new Te(null);return r.foreach((u,d)=>{const f=$e(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),kc(t,e,n,c,s,i,a,o)}}function xx(t,e,n,r,s){const i=e.serverCache,o=cv(e,i.getNode(),i.isFullyInitialized()||se(n),i.isFiltered());return mv(t,o,n,r,gv,s)}function Ox(t,e,n,r,s,i){let o;if(oa(r,n)!=null)return e;{const a=new zu(r,e,s),l=e.eventCache.getNode();let c;if(se(n)||re(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ia(r,kr(e));else{const d=e.serverCache.getNode();P(d instanceof X,"serverChildren would be complete if leaf node"),u=Ku(r,d)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=re(n);let d=qu(r,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,Se(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,X.EMPTY_NODE,Se(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ia(r,kr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||oa(r,he())!=null,si(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new Bu(r.getIndex()),i=YP(r);this.processor_=Sx(i);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(X.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(X.EMPTY_NODE,a.getNode(),null),u=new Xn(l,o.isFullyInitialized(),s.filtersNodes()),d=new Xn(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=$a(d,u),this.eventGenerator_=new ix(this.query_)}get query(){return this.query_}}function Lx(t){return t.viewCache_.serverCache.getNode()}function Mx(t){return sa(t.viewCache_)}function Dx(t,e){const n=kr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!se(e)&&!n.getImmediateChild(re(e)).isEmpty())?n.getChild(e):null}function zh(t){return t.eventRegistrations_.length===0}function Fx(t,e){t.eventRegistrations_.push(e)}function Yh(t,e,n){const r=[];if(n){P(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function Qh(t,e,n,r){e.type===Nt.MERGE&&e.source.queryId!==null&&(P(kr(t.viewCache_),"We should always have a full cache before handling merges"),P(sa(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=Ax(t.processor_,s,e,n,r);return Tx(t.processor_,i.viewCache),P(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,_v(t,i.changes,i.viewCache.eventCache.getNode(),null)}function Ux(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Oe,(i,o)=>{r.push(ds(i,o))}),n.isFullyInitialized()&&r.push(ov(n.getNode())),_v(t,r,n.getNode(),e)}function _v(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return ox(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let la;class vv{constructor(){this.views=new Map}}function $x(t){P(!la,"__referenceConstructor has already been defined"),la=t}function jx(){return P(la,"Reference.ts has not been loaded"),la}function Hx(t){return t.views.size===0}function Yu(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return P(i!=null,"SyncTree gave us an op for an invalid query."),Qh(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(Qh(o,e,n,r));return i}}function yv(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=ia(n,s?r:null),l=!1;a?l=!0:r instanceof X?(a=Ku(n,r),l=!1):(a=X.EMPTY_NODE,l=!1);const c=$a(new Xn(a,l,!1),new Xn(r,s,!1));return new Nx(e,c)}return o}function Bx(t,e,n,r,s,i){const o=yv(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Fx(o,n),Ux(o,n)}function Vx(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const a=Zn(t);if(s==="default")for(const[l,c]of t.views.entries())o=o.concat(Yh(c,n,r)),zh(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||i.push(c.query));else{const l=t.views.get(s);l&&(o=o.concat(Yh(l,n,r)),zh(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!Zn(t)&&i.push(new(jx())(e._repo,e._path)),{removed:i,events:o}}function bv(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function qn(t,e){let n=null;for(const r of t.views.values())n=n||Dx(r,e);return n}function wv(t,e){if(e._queryParams.loadsAllData())return Ha(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Ev(t,e){return wv(t,e)!=null}function Zn(t){return Ha(t)!=null}function Ha(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ca;function Wx(t){P(!ca,"__referenceConstructor has already been defined"),ca=t}function Gx(){return P(ca,"Reference.ts has not been loaded"),ca}let Kx=1;class Jh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Te(null),this.pendingWriteTree_=wx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Cv(t,e,n,r,s){return ux(t.pendingWriteTree_,e,n,r,s),s?Yi(t,new Ar(lv(),e,n)):[]}function gr(t,e,n=!1){const r=dx(t.pendingWriteTree_,e);if(fx(t.pendingWriteTree_,e)){let i=new Te(null);return r.snap!=null?i=i.set(he(),!0):mt(r.children,o=>{i=i.set(new be(o),!0)}),Yi(t,new ra(r.path,i,n))}else return[]}function zi(t,e,n){return Yi(t,new Ar(Wu(),e,n))}function qx(t,e,n){const r=Te.fromObject(n);return Yi(t,new Ri(Wu(),e,r))}function zx(t,e){return Yi(t,new ki(Wu(),e))}function Yx(t,e,n){const r=Ju(t,n);if(r){const s=Xu(r),i=s.path,o=s.queryId,a=ot(i,e),l=new ki(Gu(o),a);return Zu(t,i,l)}else return[]}function ua(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||Ev(o,e))){const l=Vx(o,e,n,r);Hx(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=l.removed;if(a=l.events,!s){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(i,(f,h)=>Zn(h));if(u&&!d){const f=t.syncPointTree_.subtree(i);if(!f.isEmpty()){const h=Xx(f);for(let g=0;g<h.length;++g){const _=h[g],y=_.query,T=Av(t,_);t.listenProvider_.startListening(oi(y),Pi(t,y),T.hashFn,T.onComplete)}}}!d&&c.length>0&&!r&&(u?t.listenProvider_.stopListening(oi(e),null):c.forEach(f=>{const h=t.queryToTagMap.get(Ba(f));t.listenProvider_.stopListening(oi(f),h)}))}Zx(t,c)}return a}function Iv(t,e,n,r){const s=Ju(t,r);if(s!=null){const i=Xu(s),o=i.path,a=i.queryId,l=ot(o,e),c=new Ar(Gu(a),l,n);return Zu(t,o,c)}else return[]}function Qx(t,e,n,r){const s=Ju(t,r);if(s){const i=Xu(s),o=i.path,a=i.queryId,l=ot(o,e),c=Te.fromObject(n),u=new Ri(Gu(a),l,c);return Zu(t,o,u)}else return[]}function Rc(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(f,h)=>{const g=ot(f,s);i=i||qn(h,g),o=o||Zn(h)});let a=t.syncPointTree_.get(s);a?(o=o||Zn(a),i=i||qn(a,he())):(a=new vv,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;i!=null?l=!0:(l=!1,i=X.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((h,g)=>{const _=qn(g,he());_&&(i=i.updateImmediateChild(h,_))}));const c=Ev(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=Ba(e);P(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const h=e1();t.queryToTagMap.set(f,h),t.tagToQueryMap.set(h,f)}const u=ja(t.pendingWriteTree_,s);let d=Bx(a,e,n,u,i,l);if(!c&&!o&&!r){const f=wv(a,e);d=d.concat(t1(t,e,f))}return d}function Qu(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ot(o,e),c=qn(a,l);if(c)return c});return fv(s,e,i,n,!0)}function Jx(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=ot(c,n);r=r||qn(u,d)});let s=t.syncPointTree_.get(n);s?r=r||qn(s,he()):(s=new vv,t.syncPointTree_=t.syncPointTree_.set(n,s));const i=r!=null,o=i?new Xn(r,!0,!1):null,a=ja(t.pendingWriteTree_,e._path),l=yv(s,e,a,i?o.getNode():X.EMPTY_NODE,i);return Mx(l)}function Yi(t,e){return Sv(e,t.syncPointTree_,null,ja(t.pendingWriteTree_,he()))}function Sv(t,e,n,r){if(se(t.path))return Tv(t,e,n,r);{const s=e.get(he());n==null&&s!=null&&(n=qn(s,he()));let i=[];const o=re(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=hv(r,o);i=i.concat(Sv(a,l,c,u))}return s&&(i=i.concat(Yu(s,t,r,n))),i}}function Tv(t,e,n,r){const s=e.get(he());n==null&&s!=null&&(n=qn(s,he()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=hv(r,o),u=t.operationForChild(o);u&&(i=i.concat(Tv(u,a,l,c)))}),s&&(i=i.concat(Yu(s,t,r,n))),i}function Av(t,e){const n=e.query,r=Pi(t,n);return{hashFn:()=>(Lx(e)||X.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?Yx(t,n._path,r):zx(t,n._path);{const i=QR(s,n);return ua(t,n,null,i)}}}}function Pi(t,e){const n=Ba(e);return t.queryToTagMap.get(n)}function Ba(t){return t._path.toString()+"$"+t._queryIdentifier}function Ju(t,e){return t.tagToQueryMap.get(e)}function Xu(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new be(t.substr(0,e))}}function Zu(t,e,n){const r=t.syncPointTree_.get(e);P(r,"Missing sync point for query tag that we're tracking");const s=ja(t.pendingWriteTree_,e);return Yu(r,n,s,null)}function Xx(t){return t.fold((e,n,r)=>{if(n&&Zn(n))return[Ha(n)];{let s=[];return n&&(s=bv(n)),mt(r,(i,o)=>{s=s.concat(o)}),s}})}function oi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Gx())(t._repo,t._path):t}function Zx(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=Ba(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function e1(){return Kx++}function t1(t,e,n){const r=e._path,s=Pi(t,e),i=Av(t,n),o=t.listenProvider_.startListening(oi(e),s,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(r);if(s)P(!Zn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!se(c)&&u&&Zn(u))return[Ha(u).query];{let f=[];return u&&(f=f.concat(bv(u).map(h=>h.query))),mt(d,(h,g)=>{f=f.concat(g)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(oi(u),Pi(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ed(n)}node(){return this.node_}}class td{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=$e(this.path_,e);return new td(this.syncTree_,n)}node(){return Qu(this.syncTree_,this.path_)}}const n1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Xh=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return r1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return s1(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},r1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},s1=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&P(!1,"Unexpected increment value: "+r);const s=e.node();if(P(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},i1=function(t,e,n,r){return nd(e,new td(n,t),r)},kv=function(t,e,n){return nd(t,new ed(e),n)};function nd(t,e,n){const r=t.getPriority().val(),s=Xh(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=Xh(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new He(a,Ve(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new He(s))),o.forEachChild(Oe,(a,l)=>{const c=nd(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function sd(t,e){let n=e instanceof be?e:new be(e),r=t,s=re(n);for(;s!==null;){const i=as(r.node.children,s)||{children:{},childCount:0};r=new rd(s,r,i),n=Se(n),s=re(n)}return r}function Ss(t){return t.node.value}function Rv(t,e){t.node.value=e,Pc(t)}function Pv(t){return t.node.childCount>0}function o1(t){return Ss(t)===void 0&&!Pv(t)}function Va(t,e){mt(t.node.children,(n,r)=>{e(new rd(n,t,r))})}function xv(t,e,n,r){n&&e(t),Va(t,s=>{xv(s,e,!0)})}function a1(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Qi(t){return new be(t.parent===null?t.name:Qi(t.parent)+"/"+t.name)}function Pc(t){t.parent!==null&&l1(t.parent,t.name,t)}function l1(t,e,n){const r=o1(n),s=tn(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Pc(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Pc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1=/[\[\].#$\/\u0000-\u001F\u007F]/,u1=/[\[\].#$\u0000-\u001F\u007F]/,Rl=10*1024*1024,Ov=function(t){return typeof t=="string"&&t.length!==0&&!c1.test(t)},Nv=function(t){return typeof t=="string"&&t.length!==0&&!u1.test(t)},d1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Nv(t)},Zh=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Nu(t)||t&&typeof t=="object"&&tn(t,".sv")},Ji=function(t,e,n,r){r&&e===void 0||id(pu(t,"value"),e,n)},id=function(t,e,n){const r=n instanceof be?new RP(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ur(r));if(typeof e=="function")throw new Error(t+"contains a function "+ur(r)+" with contents = "+e.toString());if(Nu(e))throw new Error(t+"contains "+e.toString()+" "+ur(r));if(typeof e=="string"&&e.length>Rl/3&&Na(e)>Rl)throw new Error(t+"contains a string greater than "+Rl+" utf8 bytes "+ur(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(mt(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Ov(o)))throw new Error(t+" contains an invalid key ("+o+") "+ur(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);PP(r,o),id(t,a,r),xP(r)}),s&&i)throw new Error(t+' contains ".value" child '+ur(r)+" in addition to actual children.")}},od=function(t,e,n,r){if(!Nv(n))throw new Error(pu(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},f1=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),od(t,e,n)},ad=function(t,e){if(re(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},h1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ov(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!d1(n))throw new Error(pu(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ld(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!Uu(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function Lv(t,e,n){ld(t,n),Mv(t,r=>Uu(r,e))}function en(t,e,n){ld(t,n),Mv(t,r=>Ot(r,e)||Ot(e,r))}function Mv(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(g1(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function g1(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ni&&Ze("event: "+n.toString()),Is(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1="repo_interrupt",_1=25;class v1{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new p1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=na(),this.transactionQueueTree_=new rd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function y1(t,e,n){if(t.stats_=Du(t.repoInfo_),t.forceRestClient_||eP())t.server_=new ta(t.repoInfo_,(r,s,i,o)=>{ep(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>tp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ue(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new gn(t.repoInfo_,e,(r,s,i,o)=>{ep(t,r,s,i,o)},r=>{tp(t,r)},r=>{b1(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=iP(t.repoInfo_,()=>new sx(t.stats_,t.server_)),t.infoData_=new ZP,t.infoSyncTree_=new Jh({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=zi(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ud(t,"connected",!1),t.serverSyncTree_=new Jh({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const c=o(a,l);en(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function Dv(t){const n=t.infoData_.getNode(new be(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function cd(t){return n1({timestamp:Dv(t)})}function ep(t,e,n,r,s){t.dataUpdateCount++;const i=new be(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=Bo(n,c=>Ve(c));o=Qx(t.serverSyncTree_,i,l,s)}else{const l=Ve(n);o=Iv(t.serverSyncTree_,i,l,s)}else if(r){const l=Bo(n,c=>Ve(c));o=qx(t.serverSyncTree_,i,l)}else{const l=Ve(n);o=zi(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Ga(t,i)),en(t.eventQueue_,a,o)}function tp(t,e){ud(t,"connected",e),e===!1&&C1(t)}function b1(t,e){mt(e,(n,r)=>{ud(t,n,r)})}function ud(t,e,n){const r=new be("/.info/"+e),s=Ve(n);t.infoData_.updateSnapshot(r,s);const i=zi(t.infoSyncTree_,r,s);en(t.eventQueue_,r,i)}function Fv(t){return t.nextWriteId_++}function w1(t,e,n){const r=Jx(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const i=Ve(s).withIndex(e._queryParams.getIndex());Rc(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=zi(t.serverSyncTree_,e._path,i);else{const a=Pi(t.serverSyncTree_,e);o=Iv(t.serverSyncTree_,e._path,i,a)}return en(t.eventQueue_,e._path,o),ua(t.serverSyncTree_,e,n,null,!0),i},s=>(Wa(t,"get for query "+Ue(e)+" failed: "+s),Promise.reject(new Error(s))))}function E1(t,e,n,r,s){Wa(t,"set",{path:e.toString(),value:n,priority:r});const i=cd(t),o=Ve(n,r),a=Qu(t.serverSyncTree_,e),l=kv(o,a,i),c=Fv(t),u=Cv(t.serverSyncTree_,e,l,c,!0);ld(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,h)=>{const g=f==="ok";g||gt("set at "+e+" failed: "+f);const _=gr(t.serverSyncTree_,c,!g);en(t.eventQueue_,e,_),A1(t,s,f,h)});const d=Bv(t,e);Ga(t,d),en(t.eventQueue_,d,[])}function C1(t){Wa(t,"onDisconnectEvents");const e=cd(t),n=na();Ic(t.onDisconnect_,he(),(s,i)=>{const o=i1(s,i,t.serverSyncTree_,e);av(n,s,o)});let r=[];Ic(n,he(),(s,i)=>{r=r.concat(zi(t.serverSyncTree_,s,i));const o=Bv(t,s);Ga(t,o)}),t.onDisconnect_=na(),en(t.eventQueue_,he(),r)}function I1(t,e,n){let r;re(e._path)===".info"?r=Rc(t.infoSyncTree_,e,n):r=Rc(t.serverSyncTree_,e,n),Lv(t.eventQueue_,e._path,r)}function S1(t,e,n){let r;re(e._path)===".info"?r=ua(t.infoSyncTree_,e,n):r=ua(t.serverSyncTree_,e,n),Lv(t.eventQueue_,e._path,r)}function T1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(m1)}function Wa(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ze(n,...e)}function A1(t,e,n,r){e&&Is(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function Uv(t,e,n){return Qu(t.serverSyncTree_,e,n)||X.EMPTY_NODE}function dd(t,e=t.transactionQueueTree_){if(e||Ka(t,e),Ss(e)){const n=jv(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&k1(t,Qi(e),n)}else Pv(e)&&Va(e,n=>{dd(t,n)})}function k1(t,e,n){const r=n.map(c=>c.currentWriteId),s=Uv(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];P(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=ot(e,u.path);i=i.updateChild(d,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Wa(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(gr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Ka(t,sd(t.transactionQueueTree_,e)),dd(t,t.transactionQueueTree_),en(t.eventQueue_,e,u);for(let f=0;f<d.length;f++)Is(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{gt("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Ga(t,e)}},o)}function Ga(t,e){const n=$v(t,e),r=Qi(n),s=jv(t,n);return R1(t,s,r),r}function R1(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ot(n,l.path);let u=!1,d;if(P(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,s=s.concat(gr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=_1)u=!0,d="maxretry",s=s.concat(gr(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Uv(t,l.path,o);l.currentInputSnapshot=f;const h=e[a].update(f.val());if(h!==void 0){id("transaction failed: Data returned ",h,l.path);let g=Ve(h);typeof h=="object"&&h!=null&&tn(h,".priority")||(g=g.updatePriority(f.getPriority()));const y=l.currentWriteId,T=cd(t),b=kv(g,f,T);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=b,l.currentWriteId=Fv(t),o.splice(o.indexOf(y),1),s=s.concat(Cv(t.serverSyncTree_,l.path,b,l.currentWriteId,l.applyLocally)),s=s.concat(gr(t.serverSyncTree_,y,!0))}else u=!0,d="nodata",s=s.concat(gr(t.serverSyncTree_,l.currentWriteId,!0))}en(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Ka(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Is(r[a]);dd(t,t.transactionQueueTree_)}function $v(t,e){let n,r=t.transactionQueueTree_;for(n=re(e);n!==null&&Ss(r)===void 0;)r=sd(r,n),e=Se(e),n=re(e);return r}function jv(t,e){const n=[];return Hv(t,e,n),n.sort((r,s)=>r.order-s.order),n}function Hv(t,e,n){const r=Ss(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Va(e,s=>{Hv(t,s,n)})}function Ka(t,e){const n=Ss(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,Rv(e,n.length>0?n:void 0)}Va(e,r=>{Ka(t,r)})}function Bv(t,e){const n=Qi($v(t,e)),r=sd(t.transactionQueueTree_,e);return a1(r,s=>{Pl(t,s)}),Pl(t,r),xv(r,s=>{Pl(t,s)}),n}function Pl(t,e){const n=Ss(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(gr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?Rv(e,void 0):n.length=i+1,en(t.eventQueue_,Qi(e),s);for(let o=0;o<r.length;o++)Is(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P1(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function x1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):gt(`Invalid query segment '${n}' in query '${t}'`)}return e}const np=function(t,e){const n=O1(t),r=n.namespace;n.domain==="firebase.com"&&En(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&En("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||GR();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new H_(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new be(n.pathString)}},O1=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(s=P1(t.substring(u,d)));const f=x1(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const h=e.slice(0,c);if(h.toLowerCase()==="localhost")n="localhost";else if(h.split(".").length<=2)n=h;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),i=r}"ns"in f&&(i=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",N1=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=rp.charAt(n%64),n=Math.floor(n/64);P(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=rp.charAt(e[s]);return P(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ue(this.snapshot.exportVal())}}class M1{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return P(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return se(this._path)?null:Q_(this._path)}get ref(){return new Tn(this._repo,this._path)}get _queryIdentifier(){const e=jh(this._queryParams),n=Lu(e);return n==="{}"?"default":n}get _queryObject(){return jh(this._queryParams)}isEqual(e){if(e=nt(e),!(e instanceof Ts))return!1;const n=this._repo===e._repo,r=Uu(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+kP(this._path)}}function D1(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function fd(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===vr){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Tr)throw new Error(r);if(typeof e!="string")throw new Error(s)}if(t.hasEnd()){if(t.getIndexEndName()!==Qn)throw new Error(r);if(typeof n!="string")throw new Error(s)}}else if(t.getIndex()===Oe){if(e!=null&&!Zh(e)||n!=null&&!Zh(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(P(t.getIndex()instanceof Hu||t.getIndex()===iv,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Wv(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Tn extends Ts{constructor(e,n){super(e,n,new Vu,!1)}get parent(){const e=X_(this._path);return e===null?null:new Tn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class xi{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new be(e),r=Oi(this.ref,e);return new xi(this._node.getChild(n),r,Oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new xi(s,Oi(this.ref,r),Oe)))}hasChild(e){const n=new be(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function xl(t,e){return t=nt(t),t._checkNotDeleted("ref"),e!==void 0?Oi(t._root,e):t._root}function Oi(t,e){return t=nt(t),re(t._path)===null?f1("child","path",e):od("child","path",e),new Tn(t._repo,$e(t._path,e))}function F1(t,e){t=nt(t),ad("push",t._path),Ji("push",e,t._path,!0);const n=Dv(t._repo),r=N1(n),s=Oi(t,r),i=Oi(t,r);let o;return o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function U1(t){return ad("remove",t._path),Gv(t,null)}function Gv(t,e){t=nt(t),ad("set",t._path),Ji("set",e,t._path,!1);const n=new Oa;return E1(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function gO(t){t=nt(t);const e=new Vv(()=>{}),n=new qa(e);return w1(t._repo,t,n).then(r=>new xi(r,new Tn(t._repo,t._path),t._queryParams.getIndex()))}class qa{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new L1("value",this,new xi(e.snapshotNode,new Tn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new M1(this,e,n):null}matches(e){return e instanceof qa?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function $1(t,e,n,r,s){const i=new Vv(n,void 0),o=new qa(i);return I1(t._repo,t,o),()=>S1(t._repo,t,o)}function j1(t,e,n,r){return $1(t,"value",e)}class za{}class H1 extends za{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){Ji("endAt",this._value,e._path,!0);const n=JP(e._queryParams,this._value,this._key);if(Wv(n),fd(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Ts(e._repo,e._path,n,e._orderByCalled)}}class B1 extends za{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){Ji("startAt",this._value,e._path,!0);const n=QP(e._queryParams,this._value,this._key);if(Wv(n),fd(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Ts(e._repo,e._path,n,e._orderByCalled)}}class V1 extends za{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){D1(e,"orderByChild");const n=new be(this._path);if(se(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Hu(n),s=XP(e._queryParams,r);return fd(s),new Ts(e._repo,e._path,s,!0)}}function mO(t){return od("orderByChild","path",t),new V1(t)}class W1 extends za{constructor(e,n){super(),this._value=e,this._key=n,this.type="equalTo"}_apply(e){if(Ji("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new H1(this._value,this._key)._apply(new B1(this._value,this._key)._apply(e))}}function _O(t,e){return new W1(t,e)}function vO(t,...e){let n=nt(t);for(const r of e)n=r._apply(n);return n}$x(Tn);Wx(Tn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1="FIREBASE_DATABASE_EMULATOR_HOST",xc={};let K1=!1;function q1(t,e,n,r){const s=e.lastIndexOf(":"),i=e.substring(0,s),o=vs(i);t.repoInfo_=new H_(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function z1(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||En("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ze("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=np(i,s),a=o.repoInfo,l;typeof process<"u"&&Eh&&(l=Eh[G1]),l?(i=`http://${l}?ns=${a.namespace}`,o=np(i,s),a=o.repoInfo):o.repoInfo.secure;const c=new nP(t.name,t.options,e);h1("Invalid Firebase Database URL",o),se(o.path)||En("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Q1(a,t,c,new tP(t,n));return new J1(u,t)}function Y1(t,e){const n=xc[e];(!n||n[t.key]!==t)&&En(`Database ${e}(${t.repoInfo_}) has already been deleted.`),T1(t),delete n[t.key]}function Q1(t,e,n,r){let s=xc[e.name];s||(s={},xc[e.name]=s);let i=s[t.toURLString()];return i&&En("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new v1(t,K1,n,r),s[t.toURLString()]=i,i}class J1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(y1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Tn(this._repo,he())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Y1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&En("Cannot call "+e+" on a deleted database.")}}function Kv(t=Sm(),e){const n=_u(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=qI("database");r&&X1(n,...r)}return n}function X1(t,e,n,r={}){t=nt(t),t._checkNotDeleted("useEmulator");const s=`${e}:${n}`,i=t._repoInternal;if(t._instanceStarted){if(s===t._repoInternal.repoInfo_.host&&Er(r,i.repoInfo_.emulatorOptions))return;En("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&En('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new So(So.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:zI(r.mockUserToken,t.app.options.projectId);o=new So(a)}vs(e)&&(ym(e),bm("Database",!0)),q1(i,s,r,o)}/**
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
 */function Z1(t){$R(bs),ls(new Cr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return z1(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),Gn(Ch,Ih,t),Gn(Ch,Ih,"esm2017")}gn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};gn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Z1();const eO={apiKey:"AIzaSyD6rOiOiFAkse6Y3_hdzvP-Z1zRv20wrJg",authDomain:"taskproject-caf25.firebaseapp.com",projectId:"taskproject-caf25",storageBucket:"taskproject-caf25.firebasestorage.app",messagingSenderId:"1061401138693",appId:"1:1061401138693:web:03fc3339b03b4cb79eee6c",databaseURL:"https://taskproject-caf25-default-rtdb.firebaseio.com/"};vu(eO);const Ol=Kv(),tO={async refreshTasks(t){const e=xl(Ol,"tasks");j1(e,n=>{const r=n.val();t.commit("setTasks",r)})},async submitData(t,e){const n=e.toString();if(n!==""){const r=xl(Ol,"tasks"),s=F1(r),i=ku().currentUser;if(!i){console.error("Usuário não autenticado");return}await Gv(s,{taskText:n,userUID:i.uid})}},async deleteTask(t,e){const n=e.toString(),r=xl(Ol,"tasks/"+n);U1(r).then(()=>{console.log("Remove succeeded.")}).catch(s=>{console.error("Remove failed: "+s.message)})}},nO={taskArray(t){return t.taskArray},taskText(t){return t.taskText}},rO={setTasks(t,e){t.taskArray=e,console.log(t.taskArray)},registerTasks(t,e){t.taskArray.push(e)}},sO={namespace:!0,state(){return{taskArray:[],taskText:""}},actions:tO,getters:nO,mutations:rO},iO=DR({modules:{task:sO}}),oO={},aO={class:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-900",style:{margin:"0",padding:"0"}};function lO(t,e){const n=Kc("router-view");return Ye(),jt("div",aO,[Z(n)])}const cO=Ra(oO,[["render",lO]]),uO={apiKey:"AIzaSyD6rOiOiFAkse6Y3_hdzvP-Z1zRv20wrJg",authDomain:"taskproject-caf25.firebaseapp.com",projectId:"taskproject-caf25",storageBucket:"taskproject-caf25.firebasestorage.app",messagingSenderId:"1061401138693",appId:"1:1061401138693:web:03fc3339b03b4cb79eee6c",databaseURL:"https://taskproject-caf25-default-rtdb.firebaseio.com/"},As=Ow(cO);vu(uO);Kv();As.component("content-box",Pa);As.component("base-button",vi);As.use(Qw);As.use(iO);As.use(yR);As.mount("#app");export{jn as $,Ht as A,Pe as B,Bs as C,$o as D,NC as E,Xe as F,pO as G,Lg as H,Gp as I,jt as J,Ye as K,Z as L,z as M,aI as N,ke as O,bo as P,Xr as Q,Ru as R,Fl as S,qg as T,Lo as U,nf as V,ku as W,m_ as X,Jc as Y,mn as Z,Ra as _,yt as a,de as a0,os as a1,dO as a2,gs as a3,f_ as a4,Kv as a5,vO as a6,_O as a7,mO as a8,xl as a9,j1 as aa,uu as ab,dm as ac,am as ad,Me as ae,at as af,Zr as ag,hO as ah,Oi as ai,gO as aj,U1 as ak,Gv as al,em as b,V as c,ct as d,HC as e,LC as f,Ne as g,zg as h,ms as i,Ui as j,je as k,kt as l,Uo as m,YC as n,Re as o,yi as p,mI as q,q as r,BC as s,KC as t,Zt as u,ht as v,wt as w,Mn as x,ou as y,Fo as z};
