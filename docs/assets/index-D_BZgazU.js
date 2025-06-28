const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TaskBody-LYYeXg0q.js","assets/TaskBody-Vcci2JrF.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ec(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const me={},xs=[],Ut=()=>{},z_=()=>!1,Uo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),tc=t=>t.startsWith("onUpdate:"),Fe=Object.assign,nc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Y_=Object.prototype.hasOwnProperty,ce=(t,e)=>Y_.call(t,e),B=Array.isArray,Ns=t=>mr(t)==="[object Map]",ti=t=>mr(t)==="[object Set]",Pu=t=>mr(t)==="[object Date]",Y=t=>typeof t=="function",Te=t=>typeof t=="string",St=t=>typeof t=="symbol",he=t=>t!==null&&typeof t=="object",gh=t=>(he(t)||Y(t))&&Y(t.then)&&Y(t.catch),mh=Object.prototype.toString,mr=t=>mh.call(t),Q_=t=>mr(t).slice(8,-1),_h=t=>mr(t)==="[object Object]",sc=t=>Te(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Pi=ec(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$o=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},J_=/-(\w)/g,gt=$o(t=>t.replace(J_,(e,n)=>n?n.toUpperCase():"")),X_=/\B([A-Z])/g,$n=$o(t=>t.replace(X_,"-$1").toLowerCase()),jo=$o(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ca=$o(t=>t?`on${jo(t)}`:""),Tn=(t,e)=>!Object.is(t,e),Wr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ol=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},to=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Z_=t=>{const e=Te(t)?Number(t):NaN;return isNaN(e)?t:e};let ku;const Ho=()=>ku||(ku=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ic(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Te(s)?sv(s):ic(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Te(t)||he(t))return t}const ev=/;(?![^(]*\))/g,tv=/:([^]+)/,nv=/\/\*[^]*?\*\//g;function sv(t){const e={};return t.replace(nv,"").split(ev).forEach(n=>{if(n){const s=n.split(tv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Wi(t){let e="";if(Te(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const s=Wi(t[n]);s&&(e+=s+" ")}else if(he(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const iv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rv=ec(iv);function vh(t){return!!t||t===""}function ov(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=rs(t[s],e[s]);return n}function rs(t,e){if(t===e)return!0;let n=Pu(t),s=Pu(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=St(t),s=St(e),n||s)return t===e;if(n=B(t),s=B(e),n||s)return n&&s?ov(t,e):!1;if(n=he(t),s=he(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!rs(t[o],e[o]))return!1}}return String(t)===String(e)}function rc(t,e){return t.findIndex(n=>rs(n,e))}const yh=t=>!!(t&&t.__v_isRef===!0),no=t=>Te(t)?t:t==null?"":B(t)||he(t)&&(t.toString===mh||!Y(t.toString))?yh(t)?no(t.value):JSON.stringify(t,bh,2):String(t),bh=(t,e)=>yh(e)?bh(t,e.value):Ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Sa(s,r)+" =>"]=i,n),{})}:ti(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Sa(n))}:St(e)?Sa(e):he(e)&&!B(e)&&!_h(e)?String(e):e,Sa=(t,e="")=>{var n;return St(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let je;class wh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=je,!e&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=je;try{return je=this,e()}finally{je=n}}}on(){++this._on===1&&(this.prevScope=je,je=this)}off(){this._on>0&&--this._on===0&&(je=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function av(t){return new wh(t)}function Eh(){return je}function lv(t,e=!1){je&&je.cleanups.push(t)}let ye;const Ta=new WeakSet;class Ih{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,je&&je.active&&je.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ta.has(this)&&(Ta.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Sh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,xu(this),Th(this);const e=ye,n=It;ye=this,It=!0;try{return this.fn()}finally{Rh(this),ye=e,It=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)lc(e);this.deps=this.depsTail=void 0,xu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ta.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){al(this)&&this.run()}get dirty(){return al(this)}}let Ch=0,ki,xi;function Sh(t,e=!1){if(t.flags|=8,e){t.next=xi,xi=t;return}t.next=ki,ki=t}function oc(){Ch++}function ac(){if(--Ch>0)return;if(xi){let e=xi;for(xi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ki;){let e=ki;for(ki=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Th(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Rh(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),lc(s),cv(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function al(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ah(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ah(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Gi)||(t.globalVersion=Gi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!al(t))))return;t.flags|=2;const e=t.dep,n=ye,s=It;ye=t,It=!0;try{Th(t);const i=t.fn(t._value);(e.version===0||Tn(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ye=n,It=s,Rh(t),t.flags&=-3}}function lc(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)lc(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function cv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let It=!0;const Ph=[];function rn(){Ph.push(It),It=!1}function on(){const t=Ph.pop();It=t===void 0?!0:t}function xu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ye;ye=void 0;try{e()}finally{ye=n}}}let Gi=0;class uv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Bo{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ye||!It||ye===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ye)n=this.activeLink=new uv(ye,this),ye.deps?(n.prevDep=ye.depsTail,ye.depsTail.nextDep=n,ye.depsTail=n):ye.deps=ye.depsTail=n,kh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ye.depsTail,n.nextDep=void 0,ye.depsTail.nextDep=n,ye.depsTail=n,ye.deps===n&&(ye.deps=s)}return n}trigger(e){this.version++,Gi++,this.notify(e)}notify(e){oc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ac()}}}function kh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)kh(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const so=new WeakMap,ts=Symbol(""),ll=Symbol(""),Ki=Symbol("");function He(t,e,n){if(It&&ye){let s=so.get(t);s||so.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Bo),i.map=s,i.key=n),i.track()}}function Yt(t,e,n,s,i,r){const o=so.get(t);if(!o){Gi++;return}const a=l=>{l&&l.trigger()};if(oc(),e==="clear")o.forEach(a);else{const l=B(t),c=l&&sc(n);if(l&&n==="length"){const u=Number(s);o.forEach((d,f)=>{(f==="length"||f===Ki||!St(f)&&f>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Ki)),e){case"add":l?c&&a(o.get("length")):(a(o.get(ts)),Ns(t)&&a(o.get(ll)));break;case"delete":l||(a(o.get(ts)),Ns(t)&&a(o.get(ll)));break;case"set":Ns(t)&&a(o.get(ts));break}}ac()}function dv(t,e){const n=so.get(t);return n&&n.get(e)}function Es(t){const e=ie(t);return e===t?e:(He(e,"iterate",Ki),ft(t)?e:e.map(Ue))}function Vo(t){return He(t=ie(t),"iterate",Ki),t}const fv={__proto__:null,[Symbol.iterator](){return Ra(this,Symbol.iterator,Ue)},concat(...t){return Es(this).concat(...t.map(e=>B(e)?Es(e):e))},entries(){return Ra(this,"entries",t=>(t[1]=Ue(t[1]),t))},every(t,e){return Gt(this,"every",t,e,void 0,arguments)},filter(t,e){return Gt(this,"filter",t,e,n=>n.map(Ue),arguments)},find(t,e){return Gt(this,"find",t,e,Ue,arguments)},findIndex(t,e){return Gt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Gt(this,"findLast",t,e,Ue,arguments)},findLastIndex(t,e){return Gt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Gt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Aa(this,"includes",t)},indexOf(...t){return Aa(this,"indexOf",t)},join(t){return Es(this).join(t)},lastIndexOf(...t){return Aa(this,"lastIndexOf",t)},map(t,e){return Gt(this,"map",t,e,void 0,arguments)},pop(){return mi(this,"pop")},push(...t){return mi(this,"push",t)},reduce(t,...e){return Nu(this,"reduce",t,e)},reduceRight(t,...e){return Nu(this,"reduceRight",t,e)},shift(){return mi(this,"shift")},some(t,e){return Gt(this,"some",t,e,void 0,arguments)},splice(...t){return mi(this,"splice",t)},toReversed(){return Es(this).toReversed()},toSorted(t){return Es(this).toSorted(t)},toSpliced(...t){return Es(this).toSpliced(...t)},unshift(...t){return mi(this,"unshift",t)},values(){return Ra(this,"values",Ue)}};function Ra(t,e,n){const s=Vo(t),i=s[e]();return s!==t&&!ft(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const hv=Array.prototype;function Gt(t,e,n,s,i,r){const o=Vo(t),a=o!==t&&!ft(t),l=o[e];if(l!==hv[e]){const d=l.apply(t,r);return a?Ue(d):d}let c=n;o!==t&&(a?c=function(d,f){return n.call(this,Ue(d),f,t)}:n.length>2&&(c=function(d,f){return n.call(this,d,f,t)}));const u=l.call(o,c,s);return a&&i?i(u):u}function Nu(t,e,n,s){const i=Vo(t);let r=n;return i!==t&&(ft(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,Ue(a),l,t)}),i[e](r,...s)}function Aa(t,e,n){const s=ie(t);He(s,"iterate",Ki);const i=s[e](...n);return(i===-1||i===!1)&&dc(n[0])?(n[0]=ie(n[0]),s[e](...n)):i}function mi(t,e,n=[]){rn(),oc();const s=ie(t)[e].apply(t,n);return ac(),on(),s}const pv=ec("__proto__,__v_isRef,__isVue"),xh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(St));function gv(t){St(t)||(t=String(t));const e=ie(this);return He(e,"has",t),e.hasOwnProperty(t)}class Nh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Sv:Lh:r?Dh:Mh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=B(e);if(!i){let l;if(o&&(l=fv[n]))return l;if(n==="hasOwnProperty")return gv}const a=Reflect.get(e,n,ke(e)?e:s);return(St(n)?xh.has(n):pv(n))||(i||He(e,"get",n),r)?a:ke(a)?o&&sc(n)?a:a.value:he(a)?i?Wo(a):_r(a):a}}class Oh extends Nh{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=Nn(r);if(!ft(s)&&!Nn(s)&&(r=ie(r),s=ie(s)),!B(e)&&ke(r)&&!ke(s))return l?!1:(r.value=s,!0)}const o=B(e)&&sc(n)?Number(n)<e.length:ce(e,n),a=Reflect.set(e,n,s,ke(e)?e:i);return e===ie(i)&&(o?Tn(s,r)&&Yt(e,"set",n,s):Yt(e,"add",n,s)),a}deleteProperty(e,n){const s=ce(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Yt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!St(n)||!xh.has(n))&&He(e,"has",n),s}ownKeys(e){return He(e,"iterate",B(e)?"length":ts),Reflect.ownKeys(e)}}class mv extends Nh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const _v=new Oh,vv=new mv,yv=new Oh(!0);const cl=t=>t,Or=t=>Reflect.getPrototypeOf(t);function bv(t,e,n){return function(...s){const i=this.__v_raw,r=ie(i),o=Ns(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?cl:e?io:Ue;return!e&&He(r,"iterate",l?ll:ts),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function Mr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function wv(t,e){const n={get(i){const r=this.__v_raw,o=ie(r),a=ie(i);t||(Tn(i,a)&&He(o,"get",i),He(o,"get",a));const{has:l}=Or(o),c=e?cl:t?io:Ue;if(l.call(o,i))return c(r.get(i));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&He(ie(i),"iterate",ts),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=ie(r),a=ie(i);return t||(Tn(i,a)&&He(o,"has",i),He(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,l=ie(a),c=e?cl:t?io:Ue;return!t&&He(l,"iterate",ts),a.forEach((u,d)=>i.call(r,c(u),c(d),o))}};return Fe(n,t?{add:Mr("add"),set:Mr("set"),delete:Mr("delete"),clear:Mr("clear")}:{add(i){!e&&!ft(i)&&!Nn(i)&&(i=ie(i));const r=ie(this);return Or(r).has.call(r,i)||(r.add(i),Yt(r,"add",i,i)),this},set(i,r){!e&&!ft(r)&&!Nn(r)&&(r=ie(r));const o=ie(this),{has:a,get:l}=Or(o);let c=a.call(o,i);c||(i=ie(i),c=a.call(o,i));const u=l.call(o,i);return o.set(i,r),c?Tn(r,u)&&Yt(o,"set",i,r):Yt(o,"add",i,r),this},delete(i){const r=ie(this),{has:o,get:a}=Or(r);let l=o.call(r,i);l||(i=ie(i),l=o.call(r,i)),a&&a.call(r,i);const c=r.delete(i);return l&&Yt(r,"delete",i,void 0),c},clear(){const i=ie(this),r=i.size!==0,o=i.clear();return r&&Yt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=bv(i,t,e)}),n}function cc(t,e){const n=wv(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ce(n,i)&&i in s?n:s,i,r)}const Ev={get:cc(!1,!1)},Iv={get:cc(!1,!0)},Cv={get:cc(!0,!1)};const Mh=new WeakMap,Dh=new WeakMap,Lh=new WeakMap,Sv=new WeakMap;function Tv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rv(t){return t.__v_skip||!Object.isExtensible(t)?0:Tv(Q_(t))}function _r(t){return Nn(t)?t:uc(t,!1,_v,Ev,Mh)}function Fh(t){return uc(t,!1,yv,Iv,Dh)}function Wo(t){return uc(t,!0,vv,Cv,Lh)}function uc(t,e,n,s,i){if(!he(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=Rv(t);if(r===0)return t;const o=i.get(t);if(o)return o;const a=new Proxy(t,r===2?s:n);return i.set(t,a),a}function Os(t){return Nn(t)?Os(t.__v_raw):!!(t&&t.__v_isReactive)}function Nn(t){return!!(t&&t.__v_isReadonly)}function ft(t){return!!(t&&t.__v_isShallow)}function dc(t){return t?!!t.__v_raw:!1}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function Av(t){return!ce(t,"__v_skip")&&Object.isExtensible(t)&&ol(t,"__v_skip",!0),t}const Ue=t=>he(t)?_r(t):t,io=t=>he(t)?Wo(t):t;function ke(t){return t?t.__v_isRef===!0:!1}function ne(t){return $h(t,!1)}function Uh(t){return $h(t,!0)}function $h(t,e){return ke(t)?t:new Pv(t,e)}class Pv{constructor(e,n){this.dep=new Bo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ie(e),this._value=n?e:Ue(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||ft(e)||Nn(e);e=s?e:ie(e),Tn(e,n)&&(this._rawValue=e,this._value=s?e:Ue(e),this.dep.trigger())}}function ns(t){return ke(t)?t.value:t}const kv={get:(t,e,n)=>e==="__v_raw"?t:ns(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return ke(i)&&!ke(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function jh(t){return Os(t)?t:new Proxy(t,kv)}class xv{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Bo,{get:s,set:i}=e(n.track.bind(n),n.trigger.bind(n));this._get=s,this._set=i}get value(){return this._value=this._get()}set value(e){this._set(e)}}function Nv(t){return new xv(t)}class Ov{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return dv(ie(this._object),this._key)}}class Mv{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Dv(t,e,n){return ke(t)?t:Y(t)?new Mv(t):he(t)&&arguments.length>1?Lv(t,e,n):ne(t)}function Lv(t,e,n){const s=t[e];return ke(s)?s:new Ov(t,e,n)}class Fv{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Bo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Gi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ye!==this)return Sh(this,!0),!0}get value(){const e=this.dep.track();return Ah(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Uv(t,e,n=!1){let s,i;return Y(t)?s=t:(s=t.get,i=t.set),new Fv(s,i,n)}const Dr={},ro=new WeakMap;let Yn;function $v(t,e=!1,n=Yn){if(n){let s=ro.get(n);s||ro.set(n,s=[]),s.push(t)}}function jv(t,e,n=me){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=n,c=T=>i?T:ft(T)||i===!1||i===0?Qt(T,1):Qt(T);let u,d,f,h,m=!1,_=!1;if(ke(t)?(d=()=>t.value,m=ft(t)):Os(t)?(d=()=>c(t),m=!0):B(t)?(_=!0,m=t.some(T=>Os(T)||ft(T)),d=()=>t.map(T=>{if(ke(T))return T.value;if(Os(T))return c(T);if(Y(T))return l?l(T,2):T()})):Y(t)?e?d=l?()=>l(t,2):t:d=()=>{if(f){rn();try{f()}finally{on()}}const T=Yn;Yn=u;try{return l?l(t,3,[h]):t(h)}finally{Yn=T}}:d=Ut,e&&i){const T=d,V=i===!0?1/0:i;d=()=>Qt(T(),V)}const y=Eh(),C=()=>{u.stop(),y&&y.active&&nc(y.effects,u)};if(r&&e){const T=e;e=(...V)=>{T(...V),C()}}let b=_?new Array(t.length).fill(Dr):Dr;const R=T=>{if(!(!(u.flags&1)||!u.dirty&&!T))if(e){const V=u.run();if(i||m||(_?V.some((U,W)=>Tn(U,b[W])):Tn(V,b))){f&&f();const U=Yn;Yn=u;try{const W=[V,b===Dr?void 0:_&&b[0]===Dr?[]:b,h];b=V,l?l(e,3,W):e(...W)}finally{Yn=U}}}else u.run()};return a&&a(R),u=new Ih(d),u.scheduler=o?()=>o(R,!1):R,h=T=>$v(T,!1,u),f=u.onStop=()=>{const T=ro.get(u);if(T){if(l)l(T,4);else for(const V of T)V();ro.delete(u)}},e?s?R(!0):b=u.run():o?o(R.bind(null,!0),!0):u.run(),C.pause=u.pause.bind(u),C.resume=u.resume.bind(u),C.stop=C,C}function Qt(t,e=1/0,n){if(e<=0||!he(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ke(t))Qt(t.value,e,n);else if(B(t))for(let s=0;s<t.length;s++)Qt(t[s],e,n);else if(ti(t)||Ns(t))t.forEach(s=>{Qt(s,e,n)});else if(_h(t)){for(const s in t)Qt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Qt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vr(t,e,n,s){try{return s?t(...s):t()}catch(i){Go(i,e,n)}}function Tt(t,e,n,s){if(Y(t)){const i=vr(t,e,n,s);return i&&gh(i)&&i.catch(r=>{Go(r,e,n)}),i}if(B(t)){const i=[];for(let r=0;r<t.length;r++)i.push(Tt(t[r],e,n,s));return i}}function Go(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||me;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(r){rn(),vr(r,null,10,[t,l,c]),on();return}}Hv(t,n,i,s,o)}function Hv(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Ke=[];let Dt=-1;const Ms=[];let vn=null,Ts=0;const Hh=Promise.resolve();let oo=null;function ht(t){const e=oo||Hh;return t?e.then(this?t.bind(this):t):e}function Bv(t){let e=Dt+1,n=Ke.length;for(;e<n;){const s=e+n>>>1,i=Ke[s],r=qi(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function fc(t){if(!(t.flags&1)){const e=qi(t),n=Ke[Ke.length-1];!n||!(t.flags&2)&&e>=qi(n)?Ke.push(t):Ke.splice(Bv(e),0,t),t.flags|=1,Bh()}}function Bh(){oo||(oo=Hh.then(Wh))}function Vv(t){B(t)?Ms.push(...t):vn&&t.id===-1?vn.splice(Ts+1,0,t):t.flags&1||(Ms.push(t),t.flags|=1),Bh()}function Ou(t,e,n=Dt+1){for(;n<Ke.length;n++){const s=Ke[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Ke.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Vh(t){if(Ms.length){const e=[...new Set(Ms)].sort((n,s)=>qi(n)-qi(s));if(Ms.length=0,vn){vn.push(...e);return}for(vn=e,Ts=0;Ts<vn.length;Ts++){const n=vn[Ts];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}vn=null,Ts=0}}const qi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Wh(t){try{for(Dt=0;Dt<Ke.length;Dt++){const e=Ke[Dt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),vr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Dt<Ke.length;Dt++){const e=Ke[Dt];e&&(e.flags&=-2)}Dt=-1,Ke.length=0,Vh(),oo=null,(Ke.length||Ms.length)&&Wh()}}let Le=null,Gh=null;function ao(t){const e=Le;return Le=t,Gh=t&&t.type.__scopeId||null,e}function yt(t,e=Le,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Gu(-1);const r=ao(e);let o;try{o=t(...i)}finally{ao(r),s._d&&Gu(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Mu(t,e){if(Le===null)return t;const n=Xo(Le),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=me]=e[i];r&&(Y(r)&&(r={mounted:r,updated:r}),r.deep&&Qt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Gn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(rn(),Tt(l,n,8,[t.el,a,t,e]),on())}}const Wv=Symbol("_vte"),Kh=t=>t.__isTeleport,yn=Symbol("_leaveCb"),Lr=Symbol("_enterCb");function Gv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return gs(()=>{t.isMounted=!0}),ep(()=>{t.isUnmounting=!0}),t}const ut=[Function,Array],qh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ut,onEnter:ut,onAfterEnter:ut,onEnterCancelled:ut,onBeforeLeave:ut,onLeave:ut,onAfterLeave:ut,onLeaveCancelled:ut,onBeforeAppear:ut,onAppear:ut,onAfterAppear:ut,onAppearCancelled:ut},zh=t=>{const e=t.subTree;return e.component?zh(e.component):e},Kv={name:"BaseTransition",props:qh,setup(t,{slots:e}){const n=Jo(),s=Gv();return()=>{const i=e.default&&Jh(e.default(),!0);if(!i||!i.length)return;const r=Yh(i),o=ie(t),{mode:a}=o;if(s.isLeaving)return Pa(r);const l=Du(r);if(!l)return Pa(r);let c=ul(l,o,s,n,d=>c=d);l.type!==Ve&&zi(l,c);let u=n.subTree&&Du(n.subTree);if(u&&u.type!==Ve&&!Xn(l,u)&&zh(n).type!==Ve){let d=ul(u,o,s,n);if(zi(u,d),a==="out-in"&&l.type!==Ve)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},Pa(r);a==="in-out"&&l.type!==Ve?d.delayLeave=(f,h,m)=>{const _=Qh(s,u);_[String(u.key)]=u,f[yn]=()=>{h(),f[yn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{m(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Yh(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Ve){e=n;break}}return e}const qv=Kv;function Qh(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function ul(t,e,n,s,i){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:_,onBeforeAppear:y,onAppear:C,onAfterAppear:b,onAppearCancelled:R}=e,T=String(t.key),V=Qh(n,t),U=(j,N)=>{j&&Tt(j,s,9,N)},W=(j,N)=>{const Q=N[1];U(j,N),B(j)?j.every(L=>L.length<=1)&&Q():j.length<=1&&Q()},ee={mode:o,persisted:a,beforeEnter(j){let N=l;if(!n.isMounted)if(r)N=y||l;else return;j[yn]&&j[yn](!0);const Q=V[T];Q&&Xn(t,Q)&&Q.el[yn]&&Q.el[yn](),U(N,[j])},enter(j){let N=c,Q=u,L=d;if(!n.isMounted)if(r)N=C||c,Q=b||u,L=R||d;else return;let oe=!1;const xe=j[Lr]=it=>{oe||(oe=!0,it?U(L,[j]):U(Q,[j]),ee.delayedLeave&&ee.delayedLeave(),j[Lr]=void 0)};N?W(N,[j,xe]):xe()},leave(j,N){const Q=String(t.key);if(j[Lr]&&j[Lr](!0),n.isUnmounting)return N();U(f,[j]);let L=!1;const oe=j[yn]=xe=>{L||(L=!0,N(),xe?U(_,[j]):U(m,[j]),j[yn]=void 0,V[Q]===t&&delete V[Q])};V[Q]=t,h?W(h,[j,oe]):oe()},clone(j){const N=ul(j,e,n,s,i);return i&&i(N),N}};return ee}function Pa(t){if(Ko(t))return t=an(t),t.children=null,t}function Du(t){if(!Ko(t))return Kh(t.type)&&t.children?Yh(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Y(n.default))return n.default()}}function zi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,zi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Jh(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Me?(o.patchFlag&128&&i++,s=s.concat(Jh(o.children,e,a))):(e||o.type!==Ve)&&s.push(a!=null?an(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function dn(t,e){return Y(t)?Fe({name:t.name},e,{setup:t}):t}function zv(){const t=Jo();return t?(t.appContext.config.idPrefix||"v")+"-"+t.ids[0]+t.ids[1]++:""}function Xh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ni(t,e,n,s,i=!1){if(B(t)){t.forEach((m,_)=>Ni(m,e&&(B(e)?e[_]:e),n,s,i));return}if(Ds(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ni(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Xo(s.component):s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===me?a.refs={}:a.refs,d=a.setupState,f=ie(d),h=d===me?()=>!1:m=>ce(f,m);if(c!=null&&c!==l&&(Te(c)?(u[c]=null,h(c)&&(d[c]=null)):ke(c)&&(c.value=null)),Y(l))vr(l,a,12,[o,u]);else{const m=Te(l),_=ke(l);if(m||_){const y=()=>{if(t.f){const C=m?h(l)?d[l]:u[l]:l.value;i?B(C)&&nc(C,r):B(C)?C.includes(r)||C.push(r):m?(u[l]=[r],h(l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else m?(u[l]=o,h(l)&&(d[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,ot(y,n)):y()}}}Ho().requestIdleCallback;Ho().cancelIdleCallback;const Ds=t=>!!t.type.__asyncLoader,Ko=t=>t.type.__isKeepAlive;function Yv(t,e){Zh(t,"a",e)}function Qv(t,e){Zh(t,"da",e)}function Zh(t,e,n=$e){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(qo(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Ko(i.parent.vnode)&&Jv(s,e,n,i),i=i.parent}}function Jv(t,e,n,s){const i=qo(e,t,s,!0);hc(()=>{nc(s[e],i)},n)}function qo(t,e,n=$e,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{rn();const a=yr(n),l=Tt(e,n,t,o);return a(),on(),l});return s?i.unshift(r):i.push(r),r}}const fn=t=>(e,n=$e)=>{(!Ji||t==="sp")&&qo(t,(...s)=>e(...s),n)},Xv=fn("bm"),gs=fn("m"),Zv=fn("bu"),ey=fn("u"),ep=fn("bum"),hc=fn("um"),ty=fn("sp"),ny=fn("rtg"),sy=fn("rtc");function iy(t,e=$e){qo("ec",t,e)}const ry="components";function _t(t,e){return ay(ry,t,!0,e)||t}const oy=Symbol.for("v-ndc");function ay(t,e,n=!0,s=!1){const i=Le||$e;if(i){const r=i.type;{const a=zy(r,!1);if(a&&(a===e||a===gt(e)||a===jo(gt(e))))return r}const o=Lu(i[t]||r[t],e)||Lu(i.appContext[t],e);return!o&&s?r:o}}function Lu(t,e){return t&&(t[e]||t[gt(e)]||t[jo(gt(e))])}function Ux(t,e,n,s){let i;const r=n,o=B(t);if(o||Te(t)){const a=o&&Os(t);let l=!1,c=!1;a&&(l=!ft(t),c=Nn(t),t=Vo(t)),i=new Array(t.length);for(let u=0,d=t.length;u<d;u++)i[u]=e(l?c?io(Ue(t[u])):Ue(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r)}else if(he(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(t[u],u,l,r)}}else i=[];return i}function zo(t,e,n={},s,i){if(Le.ce||Le.parent&&Ds(Le.parent)&&Le.parent.ce)return mt(),co(Me,null,[_e("slot",n,s)],64);let r=t[e];r&&r._c&&(r._d=!1),mt();const o=r&&tp(r(n)),a=n.key||o&&o.key,l=co(Me,{key:(a&&!St(a)?a:`_${e}`)+""},o||[],o&&t._===1?64:-2);return!i&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function tp(t){return t.some(e=>Qi(e)?!(e.type===Ve||e.type===Me&&!tp(e.children)):!0)?t:null}const dl=t=>t?bp(t)?Xo(t):dl(t.parent):null,Oi=Fe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>dl(t.parent),$root:t=>dl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>sp(t),$forceUpdate:t=>t.f||(t.f=()=>{fc(t.update)}),$nextTick:t=>t.n||(t.n=ht.bind(t.proxy)),$watch:t=>Ay.bind(t)}),ka=(t,e)=>t!==me&&!t.__isScriptSetup&&ce(t,e),ly={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(ka(s,e))return o[e]=1,s[e];if(i!==me&&ce(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ce(c,e))return o[e]=3,r[e];if(n!==me&&ce(n,e))return o[e]=4,n[e];fl&&(o[e]=0)}}const u=Oi[e];let d,f;if(u)return e==="$attrs"&&He(t.attrs,"get",""),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==me&&ce(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,ce(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return ka(i,e)?(i[e]=n,!0):s!==me&&ce(s,e)?(s[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==me&&ce(t,o)||ka(e,o)||(a=r[0])&&ce(a,o)||ce(s,o)||ce(Oi,o)||ce(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Fu(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let fl=!0;function cy(t){const e=sp(t),n=t.proxy,s=t.ctx;fl=!1,e.beforeCreate&&Uu(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:m,activated:_,deactivated:y,beforeDestroy:C,beforeUnmount:b,destroyed:R,unmounted:T,render:V,renderTracked:U,renderTriggered:W,errorCaptured:ee,serverPrefetch:j,expose:N,inheritAttrs:Q,components:L,directives:oe,filters:xe}=e;if(c&&uy(c,s,null),o)for(const de in o){const ae=o[de];Y(ae)&&(s[de]=ae.bind(n))}if(i){const de=i.call(n,n);he(de)&&(t.data=_r(de))}if(fl=!0,r)for(const de in r){const ae=r[de],Wt=Y(ae)?ae.bind(n,n):Y(ae.get)?ae.get.bind(n,n):Ut,pn=!Y(ae)&&Y(ae.set)?ae.set.bind(n):Ut,kt=se({get:Wt,set:pn});Object.defineProperty(s,de,{enumerable:!0,configurable:!0,get:()=>kt.value,set:Qe=>kt.value=Qe})}if(a)for(const de in a)np(a[de],s,n,de);if(l){const de=Y(l)?l.call(n):l;Reflect.ownKeys(de).forEach(ae=>{Fs(ae,de[ae])})}u&&Uu(u,t,"c");function Se(de,ae){B(ae)?ae.forEach(Wt=>de(Wt.bind(n))):ae&&de(ae.bind(n))}if(Se(Xv,d),Se(gs,f),Se(Zv,h),Se(ey,m),Se(Yv,_),Se(Qv,y),Se(iy,ee),Se(sy,U),Se(ny,W),Se(ep,b),Se(hc,T),Se(ty,j),B(N))if(N.length){const de=t.exposed||(t.exposed={});N.forEach(ae=>{Object.defineProperty(de,ae,{get:()=>n[ae],set:Wt=>n[ae]=Wt})})}else t.exposed||(t.exposed={});V&&t.render===Ut&&(t.render=V),Q!=null&&(t.inheritAttrs=Q),L&&(t.components=L),oe&&(t.directives=oe),j&&Xh(t)}function uy(t,e,n=Ut){B(t)&&(t=hl(t));for(const s in t){const i=t[s];let r;he(i)?"default"in i?r=ze(i.from||s,i.default,!0):r=ze(i.from||s):r=ze(i),ke(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Uu(t,e,n){Tt(B(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function np(t,e,n,s){let i=s.includes(".")?gp(n,s):()=>n[s];if(Te(t)){const r=e[t];Y(r)&&$t(i,r)}else if(Y(t))$t(i,t.bind(n));else if(he(t))if(B(t))t.forEach(r=>np(r,e,n,s));else{const r=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(r)&&$t(i,r,t)}}function sp(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>lo(l,c,o,!0)),lo(l,e,o)),he(e)&&r.set(e,l),l}function lo(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&lo(t,r,n,!0),i&&i.forEach(o=>lo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=dy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const dy={data:$u,props:ju,emits:ju,methods:Si,computed:Si,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:Si,directives:Si,watch:hy,provide:$u,inject:fy};function $u(t,e){return e?t?function(){return Fe(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function fy(t,e){return Si(hl(t),hl(e))}function hl(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ge(t,e){return t?[...new Set([].concat(t,e))]:e}function Si(t,e){return t?Fe(Object.create(null),t,e):e}function ju(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:Fe(Object.create(null),Fu(t),Fu(e??{})):e}function hy(t,e){if(!t)return e;if(!e)return t;const n=Fe(Object.create(null),t);for(const s in e)n[s]=Ge(t[s],e[s]);return n}function ip(){return{app:null,config:{isNativeTag:z_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let py=0;function gy(t,e){return function(s,i=null){Y(s)||(s=Fe({},s)),i!=null&&!he(i)&&(i=null);const r=ip(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:py++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Qy,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&Y(u.install)?(o.add(u),u.install(c,...d)):Y(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||_e(s,i);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(h,u,f),l=!0,c._container=u,u.__vue_app__=c,Xo(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Tt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=Ls;Ls=c;try{return u()}finally{Ls=d}}};return c}}let Ls=null;function Fs(t,e){if($e){let n=$e.provides;const s=$e.parent&&$e.parent.provides;s===n&&(n=$e.provides=Object.create(s)),n[t]=e}}function ze(t,e,n=!1){const s=$e||Le;if(s||Ls){let i=Ls?Ls._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Y(e)?e.call(s&&s.proxy):e}}const rp={},op=()=>Object.create(rp),ap=t=>Object.getPrototypeOf(t)===rp;function my(t,e,n,s=!1){const i={},r=op();t.propsDefaults=Object.create(null),lp(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Fh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function _y(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ie(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Yo(t.emitsOptions,f))continue;const h=e[f];if(l)if(ce(r,f))h!==r[f]&&(r[f]=h,c=!0);else{const m=gt(f);i[m]=pl(l,a,m,h,t,!1)}else h!==r[f]&&(r[f]=h,c=!0)}}}else{lp(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!ce(e,d)&&((u=$n(d))===d||!ce(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=pl(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!ce(e,d))&&(delete r[d],c=!0)}c&&Yt(t.attrs,"set","")}function lp(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Pi(l))continue;const c=e[l];let u;i&&ce(i,u=gt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Yo(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ie(n),c=a||me;for(let u=0;u<r.length;u++){const d=r[u];n[d]=pl(i,l,d,c[d],t,!ce(c,d))}}return o}function pl(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ce(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Y(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=yr(i);s=c[n]=l.call(null,e),u()}}else s=l;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===$n(n))&&(s=!0))}return s}const vy=new WeakMap;function cp(t,e,n=!1){const s=n?vy:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!Y(t)){const u=d=>{l=!0;const[f,h]=cp(d,e,!0);Fe(o,f),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return he(t)&&s.set(t,xs),xs;if(B(r))for(let u=0;u<r.length;u++){const d=gt(r[u]);Hu(d)&&(o[d]=me)}else if(r)for(const u in r){const d=gt(u);if(Hu(d)){const f=r[u],h=o[d]=B(f)||Y(f)?{type:f}:Fe({},f),m=h.type;let _=!1,y=!0;if(B(m))for(let C=0;C<m.length;++C){const b=m[C],R=Y(b)&&b.name;if(R==="Boolean"){_=!0;break}else R==="String"&&(y=!1)}else _=Y(m)&&m.name==="Boolean";h[0]=_,h[1]=y,(_||ce(h,"default"))&&a.push(d)}}const c=[o,a];return he(t)&&s.set(t,c),c}function Hu(t){return t[0]!=="$"&&!Pi(t)}const pc=t=>t[0]==="_"||t==="$stable",gc=t=>B(t)?t.map(Ft):[Ft(t)],yy=(t,e,n)=>{if(e._n)return e;const s=yt((...i)=>gc(e(...i)),n);return s._c=!1,s},up=(t,e,n)=>{const s=t._ctx;for(const i in t){if(pc(i))continue;const r=t[i];if(Y(r))e[i]=yy(i,r,s);else if(r!=null){const o=gc(r);e[i]=()=>o}}},dp=(t,e)=>{const n=gc(e);t.slots.default=()=>n},fp=(t,e,n)=>{for(const s in e)(n||!pc(s))&&(t[s]=e[s])},by=(t,e,n)=>{const s=t.slots=op();if(t.vnode.shapeFlag&32){const i=e.__;i&&ol(s,"__",i,!0);const r=e._;r?(fp(s,e,n),n&&ol(s,"_",r,!0)):up(e,s)}else e&&dp(t,e)},wy=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=me;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:fp(i,e,n):(r=!e.$stable,up(e,i)),o=e}else e&&(dp(t,e),o={default:1});if(r)for(const a in i)!pc(a)&&o[a]==null&&delete i[a]},ot=Dy;function Ey(t){return Iy(t)}function Iy(t,e){const n=Ho();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=Ut,insertStaticContent:m}=t,_=(p,g,v,w=null,S=null,I=null,O=void 0,x=null,k=!!g.dynamicChildren)=>{if(p===g)return;p&&!Xn(p,g)&&(w=E(p),Qe(p,S,I,!0),p=null),g.patchFlag===-2&&(k=!1,g.dynamicChildren=null);const{type:A,ref:G,shapeFlag:D}=g;switch(A){case Qo:y(p,g,v,w);break;case Ve:C(p,g,v,w);break;case Na:p==null&&b(g,v,w,O);break;case Me:L(p,g,v,w,S,I,O,x,k);break;default:D&1?V(p,g,v,w,S,I,O,x,k):D&6?oe(p,g,v,w,S,I,O,x,k):(D&64||D&128)&&A.process(p,g,v,w,S,I,O,x,k,$)}G!=null&&S?Ni(G,p&&p.ref,I,g||p,!g):G==null&&p&&p.ref!=null&&Ni(p.ref,null,I,p,!0)},y=(p,g,v,w)=>{if(p==null)s(g.el=a(g.children),v,w);else{const S=g.el=p.el;g.children!==p.children&&c(S,g.children)}},C=(p,g,v,w)=>{p==null?s(g.el=l(g.children||""),v,w):g.el=p.el},b=(p,g,v,w)=>{[p.el,p.anchor]=m(p.children,g,v,w,p.el,p.anchor)},R=({el:p,anchor:g},v,w)=>{let S;for(;p&&p!==g;)S=f(p),s(p,v,w),p=S;s(g,v,w)},T=({el:p,anchor:g})=>{let v;for(;p&&p!==g;)v=f(p),i(p),p=v;i(g)},V=(p,g,v,w,S,I,O,x,k)=>{g.type==="svg"?O="svg":g.type==="math"&&(O="mathml"),p==null?U(g,v,w,S,I,O,x,k):j(p,g,S,I,O,x,k)},U=(p,g,v,w,S,I,O,x)=>{let k,A;const{props:G,shapeFlag:D,transition:H,dirs:z}=p;if(k=p.el=o(p.type,I,G&&G.is,G),D&8?u(k,p.children):D&16&&ee(p.children,k,null,w,S,xa(p,I),O,x),z&&Gn(p,null,w,"created"),W(k,p,p.scopeId,O,w),G){for(const ve in G)ve!=="value"&&!Pi(ve)&&r(k,ve,null,G[ve],I,w);"value"in G&&r(k,"value",null,G.value,I),(A=G.onVnodeBeforeMount)&&Mt(A,w,p)}z&&Gn(p,null,w,"beforeMount");const te=Cy(S,H);te&&H.beforeEnter(k),s(k,g,v),((A=G&&G.onVnodeMounted)||te||z)&&ot(()=>{A&&Mt(A,w,p),te&&H.enter(k),z&&Gn(p,null,w,"mounted")},S)},W=(p,g,v,w,S)=>{if(v&&h(p,v),w)for(let I=0;I<w.length;I++)h(p,w[I]);if(S){let I=S.subTree;if(g===I||_p(I.type)&&(I.ssContent===g||I.ssFallback===g)){const O=S.vnode;W(p,O,O.scopeId,O.slotScopeIds,S.parent)}}},ee=(p,g,v,w,S,I,O,x,k=0)=>{for(let A=k;A<p.length;A++){const G=p[A]=x?bn(p[A]):Ft(p[A]);_(null,G,g,v,w,S,I,O,x)}},j=(p,g,v,w,S,I,O)=>{const x=g.el=p.el;let{patchFlag:k,dynamicChildren:A,dirs:G}=g;k|=p.patchFlag&16;const D=p.props||me,H=g.props||me;let z;if(v&&Kn(v,!1),(z=H.onVnodeBeforeUpdate)&&Mt(z,v,g,p),G&&Gn(g,p,v,"beforeUpdate"),v&&Kn(v,!0),(D.innerHTML&&H.innerHTML==null||D.textContent&&H.textContent==null)&&u(x,""),A?N(p.dynamicChildren,A,x,v,w,xa(g,S),I):O||ae(p,g,x,null,v,w,xa(g,S),I,!1),k>0){if(k&16)Q(x,D,H,v,S);else if(k&2&&D.class!==H.class&&r(x,"class",null,H.class,S),k&4&&r(x,"style",D.style,H.style,S),k&8){const te=g.dynamicProps;for(let ve=0;ve<te.length;ve++){const ue=te[ve],Je=D[ue],Xe=H[ue];(Xe!==Je||ue==="value")&&r(x,ue,Je,Xe,S,v)}}k&1&&p.children!==g.children&&u(x,g.children)}else!O&&A==null&&Q(x,D,H,v,S);((z=H.onVnodeUpdated)||G)&&ot(()=>{z&&Mt(z,v,g,p),G&&Gn(g,p,v,"updated")},w)},N=(p,g,v,w,S,I,O)=>{for(let x=0;x<g.length;x++){const k=p[x],A=g[x],G=k.el&&(k.type===Me||!Xn(k,A)||k.shapeFlag&198)?d(k.el):v;_(k,A,G,null,w,S,I,O,!0)}},Q=(p,g,v,w,S)=>{if(g!==v){if(g!==me)for(const I in g)!Pi(I)&&!(I in v)&&r(p,I,g[I],null,S,w);for(const I in v){if(Pi(I))continue;const O=v[I],x=g[I];O!==x&&I!=="value"&&r(p,I,x,O,S,w)}"value"in v&&r(p,"value",g.value,v.value,S)}},L=(p,g,v,w,S,I,O,x,k)=>{const A=g.el=p?p.el:a(""),G=g.anchor=p?p.anchor:a("");let{patchFlag:D,dynamicChildren:H,slotScopeIds:z}=g;z&&(x=x?x.concat(z):z),p==null?(s(A,v,w),s(G,v,w),ee(g.children||[],v,G,S,I,O,x,k)):D>0&&D&64&&H&&p.dynamicChildren?(N(p.dynamicChildren,H,v,S,I,O,x),(g.key!=null||S&&g===S.subTree)&&hp(p,g,!0)):ae(p,g,v,G,S,I,O,x,k)},oe=(p,g,v,w,S,I,O,x,k)=>{g.slotScopeIds=x,p==null?g.shapeFlag&512?S.ctx.activate(g,v,w,O,k):xe(g,v,w,S,I,O,k):it(p,g,k)},xe=(p,g,v,w,S,I,O)=>{const x=p.component=Vy(p,w,S);if(Ko(p)&&(x.ctx.renderer=$),Wy(x,!1,O),x.asyncDep){if(S&&S.registerDep(x,Se,O),!p.el){const k=x.subTree=_e(Ve);C(null,k,g,v)}}else Se(x,p,g,v,S,I,O)},it=(p,g,v)=>{const w=g.component=p.component;if(Oy(p,g,v))if(w.asyncDep&&!w.asyncResolved){de(w,g,v);return}else w.next=g,w.update();else g.el=p.el,w.vnode=g},Se=(p,g,v,w,S,I,O)=>{const x=()=>{if(p.isMounted){let{next:D,bu:H,u:z,parent:te,vnode:ve}=p;{const Nt=pp(p);if(Nt){D&&(D.el=ve.el,de(p,D,O)),Nt.asyncDep.then(()=>{p.isUnmounted||x()});return}}let ue=D,Je;Kn(p,!1),D?(D.el=ve.el,de(p,D,O)):D=ve,H&&Wr(H),(Je=D.props&&D.props.onVnodeBeforeUpdate)&&Mt(Je,te,D,ve),Kn(p,!0);const Xe=Vu(p),xt=p.subTree;p.subTree=Xe,_(xt,Xe,d(xt.el),E(xt),p,S,I),D.el=Xe.el,ue===null&&My(p,Xe.el),z&&ot(z,S),(Je=D.props&&D.props.onVnodeUpdated)&&ot(()=>Mt(Je,te,D,ve),S)}else{let D;const{el:H,props:z}=g,{bm:te,m:ve,parent:ue,root:Je,type:Xe}=p,xt=Ds(g);Kn(p,!1),te&&Wr(te),!xt&&(D=z&&z.onVnodeBeforeMount)&&Mt(D,ue,g),Kn(p,!0);{Je.ce&&Je.ce._def.shadowRoot!==!1&&Je.ce._injectChildStyle(Xe);const Nt=p.subTree=Vu(p);_(null,Nt,v,w,p,S,I),g.el=Nt.el}if(ve&&ot(ve,S),!xt&&(D=z&&z.onVnodeMounted)){const Nt=g;ot(()=>Mt(D,ue,Nt),S)}(g.shapeFlag&256||ue&&Ds(ue.vnode)&&ue.vnode.shapeFlag&256)&&p.a&&ot(p.a,S),p.isMounted=!0,g=v=w=null}};p.scope.on();const k=p.effect=new Ih(x);p.scope.off();const A=p.update=k.run.bind(k),G=p.job=k.runIfDirty.bind(k);G.i=p,G.id=p.uid,k.scheduler=()=>fc(G),Kn(p,!0),A()},de=(p,g,v)=>{g.component=p;const w=p.vnode.props;p.vnode=g,p.next=null,_y(p,g.props,w,v),wy(p,g.children,v),rn(),Ou(p),on()},ae=(p,g,v,w,S,I,O,x,k=!1)=>{const A=p&&p.children,G=p?p.shapeFlag:0,D=g.children,{patchFlag:H,shapeFlag:z}=g;if(H>0){if(H&128){pn(A,D,v,w,S,I,O,x,k);return}else if(H&256){Wt(A,D,v,w,S,I,O,x,k);return}}z&8?(G&16&&ct(A,S,I),D!==A&&u(v,D)):G&16?z&16?pn(A,D,v,w,S,I,O,x,k):ct(A,S,I,!0):(G&8&&u(v,""),z&16&&ee(D,v,w,S,I,O,x,k))},Wt=(p,g,v,w,S,I,O,x,k)=>{p=p||xs,g=g||xs;const A=p.length,G=g.length,D=Math.min(A,G);let H;for(H=0;H<D;H++){const z=g[H]=k?bn(g[H]):Ft(g[H]);_(p[H],z,v,null,S,I,O,x,k)}A>G?ct(p,S,I,!0,!1,D):ee(g,v,w,S,I,O,x,k,D)},pn=(p,g,v,w,S,I,O,x,k)=>{let A=0;const G=g.length;let D=p.length-1,H=G-1;for(;A<=D&&A<=H;){const z=p[A],te=g[A]=k?bn(g[A]):Ft(g[A]);if(Xn(z,te))_(z,te,v,null,S,I,O,x,k);else break;A++}for(;A<=D&&A<=H;){const z=p[D],te=g[H]=k?bn(g[H]):Ft(g[H]);if(Xn(z,te))_(z,te,v,null,S,I,O,x,k);else break;D--,H--}if(A>D){if(A<=H){const z=H+1,te=z<G?g[z].el:w;for(;A<=H;)_(null,g[A]=k?bn(g[A]):Ft(g[A]),v,te,S,I,O,x,k),A++}}else if(A>H)for(;A<=D;)Qe(p[A],S,I,!0),A++;else{const z=A,te=A,ve=new Map;for(A=te;A<=H;A++){const rt=g[A]=k?bn(g[A]):Ft(g[A]);rt.key!=null&&ve.set(rt.key,A)}let ue,Je=0;const Xe=H-te+1;let xt=!1,Nt=0;const gi=new Array(Xe);for(A=0;A<Xe;A++)gi[A]=0;for(A=z;A<=D;A++){const rt=p[A];if(Je>=Xe){Qe(rt,S,I,!0);continue}let Ot;if(rt.key!=null)Ot=ve.get(rt.key);else for(ue=te;ue<=H;ue++)if(gi[ue-te]===0&&Xn(rt,g[ue])){Ot=ue;break}Ot===void 0?Qe(rt,S,I,!0):(gi[Ot-te]=A+1,Ot>=Nt?Nt=Ot:xt=!0,_(rt,g[Ot],v,null,S,I,O,x,k),Je++)}const Ru=xt?Sy(gi):xs;for(ue=Ru.length-1,A=Xe-1;A>=0;A--){const rt=te+A,Ot=g[rt],Au=rt+1<G?g[rt+1].el:w;gi[A]===0?_(null,Ot,v,Au,S,I,O,x,k):xt&&(ue<0||A!==Ru[ue]?kt(Ot,v,Au,2):ue--)}}},kt=(p,g,v,w,S=null)=>{const{el:I,type:O,transition:x,children:k,shapeFlag:A}=p;if(A&6){kt(p.component.subTree,g,v,w);return}if(A&128){p.suspense.move(g,v,w);return}if(A&64){O.move(p,g,v,$);return}if(O===Me){s(I,g,v);for(let D=0;D<k.length;D++)kt(k[D],g,v,w);s(p.anchor,g,v);return}if(O===Na){R(p,g,v);return}if(w!==2&&A&1&&x)if(w===0)x.beforeEnter(I),s(I,g,v),ot(()=>x.enter(I),S);else{const{leave:D,delayLeave:H,afterLeave:z}=x,te=()=>{p.ctx.isUnmounted?i(I):s(I,g,v)},ve=()=>{D(I,()=>{te(),z&&z()})};H?H(I,te,ve):ve()}else s(I,g,v)},Qe=(p,g,v,w=!1,S=!1)=>{const{type:I,props:O,ref:x,children:k,dynamicChildren:A,shapeFlag:G,patchFlag:D,dirs:H,cacheIndex:z}=p;if(D===-2&&(S=!1),x!=null&&(rn(),Ni(x,null,v,p,!0),on()),z!=null&&(g.renderCache[z]=void 0),G&256){g.ctx.deactivate(p);return}const te=G&1&&H,ve=!Ds(p);let ue;if(ve&&(ue=O&&O.onVnodeBeforeUnmount)&&Mt(ue,g,p),G&6)Nr(p.component,v,w);else{if(G&128){p.suspense.unmount(v,w);return}te&&Gn(p,null,g,"beforeUnmount"),G&64?p.type.remove(p,g,v,$,w):A&&!A.hasOnce&&(I!==Me||D>0&&D&64)?ct(A,g,v,!1,!0):(I===Me&&D&384||!S&&G&16)&&ct(k,g,v),w&&bs(p)}(ve&&(ue=O&&O.onVnodeUnmounted)||te)&&ot(()=>{ue&&Mt(ue,g,p),te&&Gn(p,null,g,"unmounted")},v)},bs=p=>{const{type:g,el:v,anchor:w,transition:S}=p;if(g===Me){ws(v,w);return}if(g===Na){T(p);return}const I=()=>{i(v),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(p.shapeFlag&1&&S&&!S.persisted){const{leave:O,delayLeave:x}=S,k=()=>O(v,I);x?x(p.el,I,k):k()}else I()},ws=(p,g)=>{let v;for(;p!==g;)v=f(p),i(p),p=v;i(g)},Nr=(p,g,v)=>{const{bum:w,scope:S,job:I,subTree:O,um:x,m:k,a:A,parent:G,slots:{__:D}}=p;Bu(k),Bu(A),w&&Wr(w),G&&B(D)&&D.forEach(H=>{G.renderCache[H]=void 0}),S.stop(),I&&(I.flags|=8,Qe(O,p,g,v)),x&&ot(x,g),ot(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},ct=(p,g,v,w=!1,S=!1,I=0)=>{for(let O=I;O<p.length;O++)Qe(p[O],g,v,w,S)},E=p=>{if(p.shapeFlag&6)return E(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const g=f(p.anchor||p.el),v=g&&g[Wv];return v?f(v):g};let F=!1;const M=(p,g,v)=>{p==null?g._vnode&&Qe(g._vnode,null,null,!0):_(g._vnode||null,p,g,null,null,null,v),g._vnode=p,F||(F=!0,Ou(),Vh(),F=!1)},$={p:_,um:Qe,m:kt,r:bs,mt:xe,mc:ee,pc:ae,pbc:N,n:E,o:t};return{render:M,hydrate:void 0,createApp:gy(M)}}function xa({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Kn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Cy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function hp(t,e,n=!1){const s=t.children,i=e.children;if(B(s)&&B(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=bn(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&hp(o,a)),a.type===Qo&&(a.el=o.el),a.type===Ve&&!a.el&&(a.el=o.el)}}function Sy(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function pp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:pp(e)}function Bu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Ty=Symbol.for("v-scx"),Ry=()=>ze(Ty);function ni(t,e){return mc(t,null,e)}function $t(t,e,n){return mc(t,e,n)}function mc(t,e,n=me){const{immediate:s,deep:i,flush:r,once:o}=n,a=Fe({},n),l=e&&s||!e&&r!=="post";let c;if(Ji){if(r==="sync"){const h=Ry();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Ut,h.resume=Ut,h.pause=Ut,h}}const u=$e;a.call=(h,m,_)=>Tt(h,u,m,_);let d=!1;r==="post"?a.scheduler=h=>{ot(h,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(h,m)=>{m?h():fc(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=jv(t,e,a);return Ji&&(c?c.push(f):l&&f()),f}function Ay(t,e,n){const s=this.proxy,i=Te(t)?t.includes(".")?gp(s,t):()=>s[t]:t.bind(s,s);let r;Y(e)?r=e:(r=e.handler,n=e);const o=yr(this),a=mc(i,r.bind(s),n);return o(),a}function gp(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Py=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${gt(e)}Modifiers`]||t[`${$n(e)}Modifiers`];function ky(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||me;let i=n;const r=e.startsWith("update:"),o=r&&Py(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>Te(u)?u.trim():u)),o.number&&(i=n.map(to)));let a,l=s[a=Ca(e)]||s[a=Ca(gt(e))];!l&&r&&(l=s[a=Ca($n(e))]),l&&Tt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Tt(c,t,6,i)}}function mp(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!Y(t)){const l=c=>{const u=mp(c,e,!0);u&&(a=!0,Fe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(he(t)&&s.set(t,null),null):(B(r)?r.forEach(l=>o[l]=null):Fe(o,r),he(t)&&s.set(t,o),o)}function Yo(t,e){return!t||!Uo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,$n(e))||ce(t,e))}function Vu(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:m,inheritAttrs:_}=t,y=ao(t);let C,b;try{if(n.shapeFlag&4){const T=i||s,V=T;C=Ft(c.call(V,T,u,d,h,f,m)),b=a}else{const T=e;C=Ft(T.length>1?T(d,{attrs:a,slots:o,emit:l}):T(d,null)),b=e.props?a:xy(a)}}catch(T){Mi.length=0,Go(T,t,1),C=_e(Ve)}let R=C;if(b&&_!==!1){const T=Object.keys(b),{shapeFlag:V}=R;T.length&&V&7&&(r&&T.some(tc)&&(b=Ny(b,r)),R=an(R,b,!1,!0))}return n.dirs&&(R=an(R,null,!1,!0),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&zi(R,n.transition),C=R,ao(y),C}const xy=t=>{let e;for(const n in t)(n==="class"||n==="style"||Uo(n))&&((e||(e={}))[n]=t[n]);return e},Ny=(t,e)=>{const n={};for(const s in t)(!tc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Oy(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Wu(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==s[f]&&!Yo(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Wu(s,o,c):!0:!!o;return!1}function Wu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Yo(n,r))return!0}return!1}function My({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const _p=t=>t.__isSuspense;function Dy(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):Vv(t)}const Me=Symbol.for("v-fgt"),Qo=Symbol.for("v-txt"),Ve=Symbol.for("v-cmt"),Na=Symbol.for("v-stc"),Mi=[];let at=null;function mt(t=!1){Mi.push(at=t?null:[])}function Ly(){Mi.pop(),at=Mi[Mi.length-1]||null}let Yi=1;function Gu(t,e=!1){Yi+=t,t<0&&at&&e&&(at.hasOnce=!0)}function vp(t){return t.dynamicChildren=Yi>0?at||xs:null,Ly(),Yi>0&&at&&at.push(t),t}function jn(t,e,n,s,i,r){return vp(be(t,e,n,s,i,r,!0))}function co(t,e,n,s,i){return vp(_e(t,e,n,s,i,!0))}function Qi(t){return t?t.__v_isVNode===!0:!1}function Xn(t,e){return t.type===e.type&&t.key===e.key}const yp=({key:t})=>t??null,Gr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Te(t)||ke(t)||Y(t)?{i:Le,r:t,k:e,f:!!n}:t:null);function be(t,e=null,n=null,s=0,i=null,r=t===Me?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&yp(e),ref:e&&Gr(e),scopeId:Gh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Le};return a?(_c(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Te(n)?8:16),Yi>0&&!o&&at&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&at.push(l),l}const _e=Fy;function Fy(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===oy)&&(t=Ve),Qi(t)){const a=an(t,e,!0);return n&&_c(a,n),Yi>0&&!r&&at&&(a.shapeFlag&6?at[at.indexOf(t)]=a:at.push(a)),a.patchFlag=-2,a}if(Yy(t)&&(t=t.__vccOpts),e){e=Uy(e);let{class:a,style:l}=e;a&&!Te(a)&&(e.class=Wi(a)),he(l)&&(dc(l)&&!B(l)&&(l=Fe({},l)),e.style=ic(l))}const o=Te(t)?1:_p(t)?128:Kh(t)?64:he(t)?4:Y(t)?2:0;return be(t,e,n,s,i,o,r,!0)}function Uy(t){return t?dc(t)||ap(t)?Fe({},t):t:null}function an(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?jy(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&yp(c),ref:e&&e.ref?n&&r?B(r)?r.concat(Gr(e)):[r,Gr(e)]:Gr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Me?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&an(t.ssContent),ssFallback:t.ssFallback&&an(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&zi(u,l.clone(u)),u}function ss(t=" ",e=0){return _e(Qo,null,t,e)}function $y(t="",e=!1){return e?(mt(),co(Ve,null,t)):_e(Ve,null,t)}function Ft(t){return t==null||typeof t=="boolean"?_e(Ve):B(t)?_e(Me,null,t.slice()):Qi(t)?bn(t):_e(Qo,null,String(t))}function bn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:an(t)}function _c(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),_c(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!ap(e)?e._ctx=Le:i===3&&Le&&(Le.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:Le},n=32):(e=String(e),s&64?(n=16,e=[ss(e)]):n=8);t.children=e,t.shapeFlag|=n}function jy(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Wi([e.class,s.class]));else if(i==="style")e.style=ic([e.style,s.style]);else if(Uo(i)){const r=e[i],o=s[i];o&&r!==o&&!(B(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Mt(t,e,n,s=null){Tt(t,e,7,[n,s])}const Hy=ip();let By=0;function Vy(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Hy,r={uid:By++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new wh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cp(s,i),emitsOptions:mp(s,i),emit:null,emitted:null,propsDefaults:me,inheritAttrs:s.inheritAttrs,ctx:me,data:me,props:me,attrs:me,slots:me,refs:me,setupState:me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ky.bind(null,r),t.ce&&t.ce(r),r}let $e=null;const Jo=()=>$e||Le;let uo,gl;{const t=Ho(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};uo=e("__VUE_INSTANCE_SETTERS__",n=>$e=n),gl=e("__VUE_SSR_SETTERS__",n=>Ji=n)}const yr=t=>{const e=$e;return uo(t),t.scope.on(),()=>{t.scope.off(),uo(e)}},Ku=()=>{$e&&$e.scope.off(),uo(null)};function bp(t){return t.vnode.shapeFlag&4}let Ji=!1;function Wy(t,e=!1,n=!1){e&&gl(e);const{props:s,children:i}=t.vnode,r=bp(t);my(t,s,r,e),by(t,i,n||e);const o=r?Gy(t,e):void 0;return e&&gl(!1),o}function Gy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,ly);const{setup:s}=n;if(s){rn();const i=t.setupContext=s.length>1?qy(t):null,r=yr(t),o=vr(s,t,0,[t.props,i]),a=gh(o);if(on(),r(),(a||t.sp)&&!Ds(t)&&Xh(t),a){if(o.then(Ku,Ku),e)return o.then(l=>{qu(t,l)}).catch(l=>{Go(l,t,0)});t.asyncDep=o}else qu(t,o)}else wp(t)}function qu(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:he(e)&&(t.setupState=jh(e)),wp(t)}function wp(t,e,n){const s=t.type;t.render||(t.render=s.render||Ut);{const i=yr(t);rn();try{cy(t)}finally{on(),i()}}}const Ky={get(t,e){return He(t,"get",""),t[e]}};function qy(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Ky),slots:t.slots,emit:t.emit,expose:e}}function Xo(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(jh(Av(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Oi)return Oi[n](t)},has(e,n){return n in e||n in Oi}})):t.proxy}function zy(t,e=!0){return Y(t)?t.displayName||t.name:t.name||e&&t.__name}function Yy(t){return Y(t)&&"__vccOpts"in t}const se=(t,e)=>Uv(t,e,Ji);function On(t,e,n){const s=arguments.length;return s===2?he(e)&&!B(e)?Qi(e)?_e(t,null,[e]):_e(t,e):_e(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Qi(n)&&(n=[n]),_e(t,e,n))}const Qy="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ml;const zu=typeof window<"u"&&window.trustedTypes;if(zu)try{ml=zu.createPolicy("vue",{createHTML:t=>t})}catch{}const Ep=ml?t=>ml.createHTML(t):t=>t,Jy="http://www.w3.org/2000/svg",Xy="http://www.w3.org/1998/Math/MathML",zt=typeof document<"u"?document:null,Yu=zt&&zt.createElement("template"),Zy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?zt.createElementNS(Jy,t):e==="mathml"?zt.createElementNS(Xy,t):n?zt.createElement(t,{is:n}):zt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>zt.createTextNode(t),createComment:t=>zt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>zt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Yu.innerHTML=Ep(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Yu.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},gn="transition",_i="animation",Xi=Symbol("_vtc"),Ip={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},eb=Fe({},qh,Ip),tb=t=>(t.displayName="Transition",t.props=eb,t),nb=tb((t,{slots:e})=>On(qv,sb(t),e)),qn=(t,e=[])=>{B(t)?t.forEach(n=>n(...e)):t&&t(...e)},Qu=t=>t?B(t)?t.some(e=>e.length>1):t.length>1:!1;function sb(t){const e={};for(const L in t)L in Ip||(e[L]=t[L]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,m=ib(i),_=m&&m[0],y=m&&m[1],{onBeforeEnter:C,onEnter:b,onEnterCancelled:R,onLeave:T,onLeaveCancelled:V,onBeforeAppear:U=C,onAppear:W=b,onAppearCancelled:ee=R}=e,j=(L,oe,xe,it)=>{L._enterCancelled=it,zn(L,oe?u:a),zn(L,oe?c:o),xe&&xe()},N=(L,oe)=>{L._isLeaving=!1,zn(L,d),zn(L,h),zn(L,f),oe&&oe()},Q=L=>(oe,xe)=>{const it=L?W:b,Se=()=>j(oe,L,xe);qn(it,[oe,Se]),Ju(()=>{zn(oe,L?l:r),Kt(oe,L?u:a),Qu(it)||Xu(oe,s,_,Se)})};return Fe(e,{onBeforeEnter(L){qn(C,[L]),Kt(L,r),Kt(L,o)},onBeforeAppear(L){qn(U,[L]),Kt(L,l),Kt(L,c)},onEnter:Q(!1),onAppear:Q(!0),onLeave(L,oe){L._isLeaving=!0;const xe=()=>N(L,oe);Kt(L,d),L._enterCancelled?(Kt(L,f),td()):(td(),Kt(L,f)),Ju(()=>{L._isLeaving&&(zn(L,d),Kt(L,h),Qu(T)||Xu(L,s,y,xe))}),qn(T,[L,xe])},onEnterCancelled(L){j(L,!1,void 0,!0),qn(R,[L])},onAppearCancelled(L){j(L,!0,void 0,!0),qn(ee,[L])},onLeaveCancelled(L){N(L),qn(V,[L])}})}function ib(t){if(t==null)return null;if(he(t))return[Oa(t.enter),Oa(t.leave)];{const e=Oa(t);return[e,e]}}function Oa(t){return Z_(t)}function Kt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Xi]||(t[Xi]=new Set)).add(e)}function zn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[Xi];n&&(n.delete(e),n.size||(t[Xi]=void 0))}function Ju(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let rb=0;function Xu(t,e,n,s){const i=t._endId=++rb,r=()=>{i===t._endId&&s()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=ob(t,e);if(!o)return s();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,f),r()},f=h=>{h.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,f)}function ob(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),i=s(`${gn}Delay`),r=s(`${gn}Duration`),o=Zu(i,r),a=s(`${_i}Delay`),l=s(`${_i}Duration`),c=Zu(a,l);let u=null,d=0,f=0;e===gn?o>0&&(u=gn,d=o,f=r.length):e===_i?c>0&&(u=_i,d=c,f=l.length):(d=Math.max(o,c),u=d>0?o>c?gn:_i:null,f=u?u===gn?r.length:l.length:0);const h=u===gn&&/\b(transform|all)(,|$)/.test(s(`${gn}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:h}}function Zu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>ed(n)+ed(t[s])))}function ed(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function td(){return document.body.offsetHeight}function ab(t,e,n){const s=t[Xi];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const nd=Symbol("_vod"),lb=Symbol("_vsh"),cb=Symbol(""),ub=/(^|;)\s*display\s*:/;function db(t,e,n){const s=t.style,i=Te(n);let r=!1;if(n&&!i){if(e)if(Te(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Kr(s,a,"")}else for(const o in e)n[o]==null&&Kr(s,o,"");for(const o in n)o==="display"&&(r=!0),Kr(s,o,n[o])}else if(i){if(e!==n){const o=s[cb];o&&(n+=";"+o),s.cssText=n,r=ub.test(n)}}else e&&t.removeAttribute("style");nd in t&&(t[nd]=r?s.display:"",t[lb]&&(s.display="none"))}const sd=/\s*!important$/;function Kr(t,e,n){if(B(n))n.forEach(s=>Kr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=fb(t,e);sd.test(n)?t.setProperty($n(s),n.replace(sd,""),"important"):t[s]=n}}const id=["Webkit","Moz","ms"],Ma={};function fb(t,e){const n=Ma[e];if(n)return n;let s=gt(e);if(s!=="filter"&&s in t)return Ma[e]=s;s=jo(s);for(let i=0;i<id.length;i++){const r=id[i]+s;if(r in t)return Ma[e]=r}return e}const rd="http://www.w3.org/1999/xlink";function od(t,e,n,s,i,r=rv(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(rd,e.slice(6,e.length)):t.setAttributeNS(rd,e,n):n==null||r&&!vh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":St(n)?String(n):n)}function ad(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Ep(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=vh(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function Jt(t,e,n,s){t.addEventListener(e,n,s)}function hb(t,e,n,s){t.removeEventListener(e,n,s)}const ld=Symbol("_vei");function pb(t,e,n,s,i=null){const r=t[ld]||(t[ld]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=gb(e);if(s){const c=r[e]=vb(s,i);Jt(t,a,c,l)}else o&&(hb(t,a,o,l),r[e]=void 0)}}const cd=/(?:Once|Passive|Capture)$/;function gb(t){let e;if(cd.test(t)){e={};let s;for(;s=t.match(cd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):$n(t.slice(2)),e]}let Da=0;const mb=Promise.resolve(),_b=()=>Da||(mb.then(()=>Da=0),Da=Date.now());function vb(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Tt(yb(s,n.value),e,5,[s])};return n.value=t,n.attached=_b(),n}function yb(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const ud=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,bb=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?ab(t,s,o):e==="style"?db(t,n,s):Uo(e)?tc(e)||pb(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):wb(t,e,s,o))?(ad(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&od(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Te(s))?ad(t,gt(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),od(t,e,s,o))};function wb(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&ud(e)&&Y(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ud(e)&&Te(n)?!1:e in t}const Mn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>Wr(e,n):e};function Eb(t){t.target.composing=!0}function dd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const pt=Symbol("_assign"),_l={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[pt]=Mn(i);const r=s||i.props&&i.props.type==="number";Jt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=to(a)),t[pt](a)}),n&&Jt(t,"change",()=>{t.value=t.value.trim()}),e||(Jt(t,"compositionstart",Eb),Jt(t,"compositionend",dd),Jt(t,"change",dd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[pt]=Mn(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?to(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===l)||(t.value=l))}},Ib={deep:!0,created(t,e,n){t[pt]=Mn(n),Jt(t,"change",()=>{const s=t._modelValue,i=Vs(t),r=t.checked,o=t[pt];if(B(s)){const a=rc(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(ti(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(Cp(t,r))})},mounted:fd,beforeUpdate(t,e,n){t[pt]=Mn(n),fd(t,e,n)}};function fd(t,{value:e,oldValue:n},s){t._modelValue=e;let i;if(B(e))i=rc(e,s.props.value)>-1;else if(ti(e))i=e.has(s.props.value);else{if(e===n)return;i=rs(e,Cp(t,!0))}t.checked!==i&&(t.checked=i)}const Cb={created(t,{value:e},n){t.checked=rs(e,n.props.value),t[pt]=Mn(n),Jt(t,"change",()=>{t[pt](Vs(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t[pt]=Mn(s),e!==n&&(t.checked=rs(e,s.props.value))}},Sb={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=ti(e);Jt(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?to(Vs(o)):Vs(o));t[pt](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,ht(()=>{t._assigning=!1})}),t[pt]=Mn(s)},mounted(t,{value:e}){hd(t,e)},beforeUpdate(t,e,n){t[pt]=Mn(n)},updated(t,{value:e}){t._assigning||hd(t,e)}};function hd(t,e){const n=t.multiple,s=B(e);if(!(n&&!s&&!ti(e))){for(let i=0,r=t.options.length;i<r;i++){const o=t.options[i],a=Vs(o);if(n)if(s){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=rc(e,a)>-1}else o.selected=e.has(a);else if(rs(Vs(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Vs(t){return"_value"in t?t._value:t.value}function Cp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Tb={created(t,e,n){Fr(t,e,n,null,"created")},mounted(t,e,n){Fr(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){Fr(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){Fr(t,e,n,s,"updated")}};function Rb(t,e){switch(t){case"SELECT":return Sb;case"TEXTAREA":return _l;default:switch(e){case"checkbox":return Ib;case"radio":return Cb;default:return _l}}}function Fr(t,e,n,s,i){const o=Rb(t.tagName,n.props&&n.props.type)[i];o&&o(t,e,n,s)}const Ab=["ctrl","shift","alt","meta"],Pb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ab.some(n=>t[`${n}Key`]&&!e.includes(n))},pd=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=Pb[e[o]];if(a&&a(i,e))return}return t(i,...r)})},kb={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},$x=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=i=>{if(!("key"in i))return;const r=$n(i.key);if(e.some(o=>o===r||kb[o]===r))return t(i)})},xb=Fe({patchProp:bb},Zy);let gd;function Nb(){return gd||(gd=Ey(xb))}const Ob=(...t)=>{const e=Nb().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Db(s);if(!i)return;const r=e._component;!Y(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Mb(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Mb(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Db(t){return Te(t)?document.querySelector(t):t}const Sp=new Set,et=new WeakMap,Us=new WeakMap,os=new WeakMap,vl=new WeakMap,Lb=new WeakMap,Ws=new WeakMap,fo=new WeakMap,Ti=new WeakSet;let as;const Xt="__aa_tgt",yl="__aa_del",Fb=t=>{const e=Bb(t);e&&e.forEach(n=>Vb(n))},Ub=t=>{t.forEach(e=>{e.target===as&&jb(),et.has(e.target)&&ms(e.target)})};function $b(t){const e=vl.get(t);e==null||e.disconnect();let n=et.get(t),s=0;const i=5;n||(n=Gs(t),et.set(t,n));const{offsetWidth:r,offsetHeight:o}=as,l=[n.top-i,r-(n.left+i+n.width),o-(n.top+i+n.height),n.left-i].map(u=>`${-1*Math.floor(u)}px`).join(" "),c=new IntersectionObserver(()=>{++s>1&&ms(t)},{root:as,threshold:1,rootMargin:l});c.observe(t),vl.set(t,c)}function ms(t){clearTimeout(fo.get(t));const e=Zo(t),n=typeof e=="function"?500:e.duration;fo.set(t,setTimeout(async()=>{const s=os.get(t);try{await(s==null?void 0:s.finished),et.set(t,Gs(t)),$b(t)}catch{}},n))}function jb(){clearTimeout(fo.get(as)),fo.set(as,setTimeout(()=>{Sp.forEach(t=>Pp(t,e=>Tp(()=>ms(e))))},100))}function Hb(t){setTimeout(()=>{Lb.set(t,setInterval(()=>Tp(ms.bind(null,t)),2e3))},Math.round(2e3*Math.random()))}function Tp(t){typeof requestIdleCallback=="function"?requestIdleCallback(()=>t()):requestAnimationFrame(()=>t())}let bl,As;typeof window<"u"&&(as=document.documentElement,bl=new MutationObserver(Fb),As=new ResizeObserver(Ub),As.observe(as));function Bb(t){return t.reduce((s,i)=>[...s,...Array.from(i.addedNodes),...Array.from(i.removedNodes)],[]).every(s=>s.nodeName==="#comment")?!1:t.reduce((s,i)=>{if(s===!1)return!1;if(i.target instanceof Element){if(La(i.target),!s.has(i.target)){s.add(i.target);for(let r=0;r<i.target.children.length;r++){const o=i.target.children.item(r);if(o){if(yl in o)return!1;La(i.target,o),s.add(o)}}}if(i.removedNodes.length)for(let r=0;r<i.removedNodes.length;r++){const o=i.removedNodes[r];if(yl in o)return!1;o instanceof Element&&(s.add(o),La(i.target,o),Us.set(o,[i.previousSibling,i.nextSibling]))}}return s},new Set)}function La(t,e){!e&&!(Xt in t)?Object.defineProperty(t,Xt,{value:t}):e&&!(Xt in e)&&Object.defineProperty(e,Xt,{value:t})}function Vb(t){var e;const n=t.isConnected,s=et.has(t);n&&Us.has(t)&&Us.delete(t),os.has(t)&&((e=os.get(t))===null||e===void 0||e.cancel()),s&&n?Gb(t):s&&!n?qb(t):Kb(t)}function Lt(t){return Number(t.replace(/[^0-9.\-]/g,""))}function Wb(t){let e=t.parentElement;for(;e;){if(e.scrollLeft||e.scrollTop)return{x:e.scrollLeft,y:e.scrollTop};e=e.parentElement}return{x:0,y:0}}function Gs(t){const e=t.getBoundingClientRect(),{x:n,y:s}=Wb(t);return{top:e.top+s,left:e.left+n,width:e.width,height:e.height}}function Rp(t,e,n){let s=e.width,i=e.height,r=n.width,o=n.height;const a=getComputedStyle(t);if(a.getPropertyValue("box-sizing")==="content-box"){const c=Lt(a.paddingTop)+Lt(a.paddingBottom)+Lt(a.borderTopWidth)+Lt(a.borderBottomWidth),u=Lt(a.paddingLeft)+Lt(a.paddingRight)+Lt(a.borderRightWidth)+Lt(a.borderLeftWidth);s-=u,r-=u,i-=c,o-=c}return[s,r,i,o].map(Math.round)}function Zo(t){return Xt in t&&Ws.has(t[Xt])?Ws.get(t[Xt]):{duration:250,easing:"ease-in-out"}}function Ap(t){if(Xt in t)return t[Xt]}function vc(t){const e=Ap(t);return e?Ti.has(e):!1}function Pp(t,...e){e.forEach(n=>n(t,Ws.has(t)));for(let n=0;n<t.children.length;n++){const s=t.children.item(n);s&&e.forEach(i=>i(s,Ws.has(s)))}}function Gb(t){const e=et.get(t),n=Gs(t);if(!vc(t))return et.set(t,n);let s;if(!e)return;const i=Zo(t);if(typeof i!="function"){const r=e.left-n.left,o=e.top-n.top,[a,l,c,u]=Rp(t,e,n),d={transform:`translate(${r}px, ${o}px)`},f={transform:"translate(0, 0)"};a!==l&&(d.width=`${a}px`,f.width=`${l}px`),c!==u&&(d.height=`${c}px`,f.height=`${u}px`),s=t.animate([d,f],{duration:i.duration,easing:i.easing})}else s=new Animation(i(t,"remain",e,n)),s.play();os.set(t,s),et.set(t,n),s.addEventListener("finish",ms.bind(null,t))}function Kb(t){const e=Gs(t);et.set(t,e);const n=Zo(t);if(!vc(t))return;let s;typeof n!="function"?s=t.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:n.duration*1.5,easing:"ease-in"}):(s=new Animation(n(t,"add",e)),s.play()),os.set(t,s),s.addEventListener("finish",ms.bind(null,t))}function qb(t){var e;if(!Us.has(t)||!et.has(t))return;const[n,s]=Us.get(t);Object.defineProperty(t,yl,{value:!0}),s&&s.parentNode&&s.parentNode instanceof Element?s.parentNode.insertBefore(t,s):n&&n.parentNode?n.parentNode.appendChild(t):(e=Ap(t))===null||e===void 0||e.appendChild(t);function i(){var f;t.remove(),et.delete(t),Us.delete(t),os.delete(t),(f=vl.get(t))===null||f===void 0||f.disconnect()}if(!vc(t))return i();const[r,o,a,l]=zb(t),c=Zo(t),u=et.get(t);let d;Object.assign(t.style,{position:"absolute",top:`${r}px`,left:`${o}px`,width:`${a}px`,height:`${l}px`,margin:0,pointerEvents:"none",transformOrigin:"center",zIndex:100}),typeof c!="function"?d=t.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:c.duration,easing:"ease-out"}):(d=new Animation(c(t,"remove",u)),d.play()),os.set(t,d),d.addEventListener("finish",i)}function zb(t){const e=et.get(t),[n,,s]=Rp(t,e,Gs(t));let i=t.parentElement;for(;i&&(getComputedStyle(i).position==="static"||i instanceof HTMLBodyElement);)i=i.parentElement;i||(i=document.body);const r=getComputedStyle(i),o=et.get(i)||Gs(i),a=Math.round(e.top-o.top)-Lt(r.borderTopWidth),l=Math.round(e.left-o.left)-Lt(r.borderLeftWidth);return[a,l,n,s]}function Yb(t,e={}){return bl&&As&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&typeof e!="function"&&!e.disrespectUserMotionPreference||(Ti.add(t),getComputedStyle(t).position==="static"&&Object.assign(t.style,{position:"relative"}),Pp(t,ms,Hb,i=>As==null?void 0:As.observe(i)),typeof e=="function"?Ws.set(t,e):Ws.set(t,{duration:250,easing:"ease-in-out",...e}),bl.observe(t,{childList:!0}),Sp.add(t))),Object.freeze({parent:t,enable:()=>{Ti.add(t)},disable:()=>{Ti.delete(t)},isEnabled:()=>Ti.has(t)})}const Qb={mounted:(t,e)=>{Yb(t,e.value||{})}},Jb={install(t){t.directive("auto-animate",Qb)}},Xb="modulepreload",Zb=function(t){return"/task-project/"+t},md={},ew=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=o(n.map(c=>{if(c=Zb(c),c in md)return;md[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Xb,u||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((h,m)=>{f.addEventListener("load",h),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};function tw(){return kp().__VUE_DEVTOOLS_GLOBAL_HOOK__}function kp(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const nw=typeof Proxy=="function",sw="devtools-plugin:setup",iw="plugin:settings:set";let Is,wl;function rw(){var t;return Is!==void 0||(typeof window<"u"&&window.performance?(Is=!0,wl=window.performance):typeof globalThis<"u"&&(!((t=globalThis.perf_hooks)===null||t===void 0)&&t.performance)?(Is=!0,wl=globalThis.perf_hooks.performance):Is=!1),Is}function ow(){return rw()?wl.now():Date.now()}class aw{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},s);try{const o=localStorage.getItem(i),a=JSON.parse(o);Object.assign(r,a)}catch{}this.fallbacks={getSettings(){return r},setSettings(o){try{localStorage.setItem(i,JSON.stringify(o))}catch{}r=o},now(){return ow()}},n&&n.on(iw,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function lw(t,e){const n=t,s=kp(),i=tw(),r=nw&&n.enableEarlyProxy;if(i&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))i.emit(sw,t,e);else{const o=r?new aw(n,i):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Rs=typeof document<"u";function xp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function cw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&xp(t.default)}const le=Object.assign;function Fa(t,e){const n={};for(const s in e){const i=e[s];n[s]=Rt(i)?i.map(t):t(i)}return n}const Di=()=>{},Rt=Array.isArray,Np=/#/g,uw=/&/g,dw=/\//g,fw=/=/g,hw=/\?/g,Op=/\+/g,pw=/%5B/g,gw=/%5D/g,Mp=/%5E/g,mw=/%60/g,Dp=/%7B/g,_w=/%7C/g,Lp=/%7D/g,vw=/%20/g;function yc(t){return encodeURI(""+t).replace(_w,"|").replace(pw,"[").replace(gw,"]")}function yw(t){return yc(t).replace(Dp,"{").replace(Lp,"}").replace(Mp,"^")}function El(t){return yc(t).replace(Op,"%2B").replace(vw,"+").replace(Np,"%23").replace(uw,"%26").replace(mw,"`").replace(Dp,"{").replace(Lp,"}").replace(Mp,"^")}function bw(t){return El(t).replace(fw,"%3D")}function ww(t){return yc(t).replace(Np,"%23").replace(hw,"%3F")}function Ew(t){return t==null?"":ww(t).replace(dw,"%2F")}function Zi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Iw=/\/$/,Cw=t=>t.replace(Iw,"");function Ua(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Aw(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:Zi(o)}}function Sw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function _d(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Tw(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Ks(e.matched[s],n.matched[i])&&Fp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ks(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Fp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Rw(t[n],e[n]))return!1;return!0}function Rw(t,e){return Rt(t)?vd(t,e):Rt(e)?vd(e,t):t===e}function vd(t,e){return Rt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Aw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var er;(function(t){t.pop="pop",t.push="push"})(er||(er={}));var Li;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Li||(Li={}));function Pw(t){if(!t)if(Rs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Cw(t)}const kw=/^[^#]+#/;function xw(t,e){return t.replace(kw,"#")+e}function Nw(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ea=()=>({left:window.scrollX,top:window.scrollY});function Ow(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Nw(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function yd(t,e){return(history.state?history.state.position-e:-1)+t}const Il=new Map;function Mw(t,e){Il.set(t,e)}function Dw(t){const e=Il.get(t);return Il.delete(t),e}let Lw=()=>location.protocol+"//"+location.host;function Up(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),_d(l,"")}return _d(n,t)+s+i}function Fw(t,e,n,s){let i=[],r=[],o=null;const a=({state:f})=>{const h=Up(t,location),m=n.value,_=e.value;let y=0;if(f){if(n.value=h,e.value=f,o&&o===m){o=null;return}y=_?f.position-_.position:0}else s(h);i.forEach(C=>{C(n.value,m,{delta:y,type:er.pop,direction:y?y>0?Li.forward:Li.back:Li.unknown})})};function l(){o=n.value}function c(f){i.push(f);const h=()=>{const m=i.indexOf(f);m>-1&&i.splice(m,1)};return r.push(h),h}function u(){const{history:f}=window;f.state&&f.replaceState(le({},f.state,{scroll:ea()}),"")}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function bd(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?ea():null}}function Uw(t){const{history:e,location:n}=window,s={value:Up(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:Lw()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(h){console.error(h),n[u?"replace":"assign"](f)}}function o(l,c){const u=le({},e.state,bd(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=le({},i.value,e.state,{forward:l,scroll:ea()});r(u.current,u,!0);const d=le({},bd(s.value,l,null),{position:u.position+1},c);r(l,d,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function $w(t){t=Pw(t);const e=Uw(t),n=Fw(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=le({location:"",base:t,go:s,createHref:xw.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function jw(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),$w(t)}function Hw(t){return typeof t=="string"||t&&typeof t=="object"}function $p(t){return typeof t=="string"||typeof t=="symbol"}const jp=Symbol("");var wd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(wd||(wd={}));function qs(t,e){return le(new Error,{type:t,[jp]:!0},e)}function qt(t,e){return t instanceof Error&&jp in t&&(e==null||!!(t.type&e))}const Ed="[^/]+?",Bw={sensitive:!1,strict:!1,start:!0,end:!0},Vw=/[.+*?^${}()[\]/\\]/g;function Ww(t,e){const n=le({},Bw,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=40+(n.sensitive?.25:0);if(f.type===0)d||(i+="/"),i+=f.value.replace(Vw,"\\$&"),h+=40;else if(f.type===1){const{value:m,repeatable:_,optional:y,regexp:C}=f;r.push({name:m,repeatable:_,optional:y});const b=C||Ed;if(b!==Ed){h+=10;try{new RegExp(`(${b})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${m}" (${b}): `+T.message)}}let R=_?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;d||(R=y&&c.length<2?`(?:/${R})`:"/"+R),y&&(R+="?"),i+=R,h+=20,y&&(h+=-8),_&&(h+=-20),b===".*"&&(h+=-50)}u.push(h)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",m=r[f-1];d[m.name]=h&&m.repeatable?h.split("/"):h}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===0)u+=h.value;else if(h.type===1){const{value:m,repeatable:_,optional:y}=h,C=m in c?c[m]:"";if(Rt(C)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const b=Rt(C)?C.join("/"):C;if(!b)if(y)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${m}"`);u+=b}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function Gw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Hp(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=Gw(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Id(s))return 1;if(Id(i))return-1}return i.length-s.length}function Id(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Kw={type:0,value:""},qw=/[a-zA-Z0-9_]/;function zw(t){if(!t)return[[]];if(t==="/")return[[Kw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):f();break;case 4:f(),n=s;break;case 1:l==="("?n=2:qw.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function Yw(t,e,n){const s=Ww(zw(t.path),n),i=le(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Qw(t,e){const n=[],s=new Map;e=Rd({strict:!1,end:!0,sensitive:!1},e);function i(d){return s.get(d)}function r(d,f,h){const m=!h,_=Sd(d);_.aliasOf=h&&h.record;const y=Rd(e,d),C=[_];if("alias"in d){const T=typeof d.alias=="string"?[d.alias]:d.alias;for(const V of T)C.push(Sd(le({},_,{components:h?h.record.components:_.components,path:V,aliasOf:h?h.record:_})))}let b,R;for(const T of C){const{path:V}=T;if(f&&V[0]!=="/"){const U=f.record.path,W=U[U.length-1]==="/"?"":"/";T.path=f.record.path+(V&&W+V)}if(b=Yw(T,f,y),h?h.alias.push(b):(R=R||b,R!==b&&R.alias.push(b),m&&d.name&&!Td(b)&&o(d.name)),Bp(b)&&l(b),_.children){const U=_.children;for(let W=0;W<U.length;W++)r(U[W],b,h&&h.children[W])}h=h||b}return R?()=>{o(R)}:Di}function o(d){if($p(d)){const f=s.get(d);f&&(s.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const f=Zw(d,n);n.splice(f,0,d),d.record.name&&!Td(d)&&s.set(d.record.name,d)}function c(d,f){let h,m={},_,y;if("name"in d&&d.name){if(h=s.get(d.name),!h)throw qs(1,{location:d});y=h.record.name,m=le(Cd(f.params,h.keys.filter(R=>!R.optional).concat(h.parent?h.parent.keys.filter(R=>R.optional):[]).map(R=>R.name)),d.params&&Cd(d.params,h.keys.map(R=>R.name))),_=h.stringify(m)}else if(d.path!=null)_=d.path,h=n.find(R=>R.re.test(_)),h&&(m=h.parse(_),y=h.record.name);else{if(h=f.name?s.get(f.name):n.find(R=>R.re.test(f.path)),!h)throw qs(1,{location:d,currentLocation:f});y=h.record.name,m=le({},f.params,d.params),_=h.stringify(m)}const C=[];let b=h;for(;b;)C.unshift(b.record),b=b.parent;return{name:y,path:_,params:m,matched:C,meta:Xw(C)}}t.forEach(d=>r(d));function u(){n.length=0,s.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:i}}function Cd(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Sd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Jw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Jw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Td(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Xw(t){return t.reduce((e,n)=>le(e,n.meta),{})}function Rd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Zw(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;Hp(t,e[r])<0?s=r:n=r+1}const i=eE(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function eE(t){let e=t;for(;e=e.parent;)if(Bp(e)&&Hp(t,e)===0)return e}function Bp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function tE(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Op," "),o=r.indexOf("="),a=Zi(o<0?r:r.slice(0,o)),l=o<0?null:Zi(r.slice(o+1));if(a in e){let c=e[a];Rt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Ad(t){let e="";for(let n in t){const s=t[n];if(n=bw(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Rt(s)?s.map(r=>r&&El(r)):[s&&El(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function nE(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Rt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const sE=Symbol(""),Pd=Symbol(""),ta=Symbol(""),Vp=Symbol(""),Cl=Symbol("");function vi(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function wn(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(qs(4,{from:n,to:e})):f instanceof Error?l(f):Hw(f)?l(qs(2,{from:e,to:f})):(o&&s.enterCallbacks[i]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function $a(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(xp(l)){const u=(l.__vccOpts||l)[e];u&&r.push(wn(u,n,s,o,a,i))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=cw(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const h=(d.__vccOpts||d)[e];return h&&wn(h,n,s,o,a,i)()}))}}return r}function kd(t){const e=ze(ta),n=ze(Vp),s=se(()=>{const l=ns(t.to);return e.resolve(l)}),i=se(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Ks.bind(null,u));if(f>-1)return f;const h=xd(l[c-2]);return c>1&&xd(u)===h&&d[d.length-1].path!==h?d.findIndex(Ks.bind(null,l[c-2])):f}),r=se(()=>i.value>-1&&lE(n.params,s.value.params)),o=se(()=>i.value>-1&&i.value===n.matched.length-1&&Fp(n.params,s.value.params));function a(l={}){if(aE(l)){const c=e[ns(t.replace)?"replace":"push"](ns(t.to)).catch(Di);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:s,href:se(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}function iE(t){return t.length===1?t[0]:t}const rE=dn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:kd,setup(t,{slots:e}){const n=_r(kd(t)),{options:s}=ze(ta),i=se(()=>({[Nd(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Nd(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&iE(e.default(n));return t.custom?r:On("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),oE=rE;function aE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function lE(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Rt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function xd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Nd=(t,e,n)=>t??e??n,cE=dn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=ze(Cl),i=se(()=>t.route||s.value),r=ze(Pd,0),o=se(()=>{let c=ns(r);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=se(()=>i.value.matched[o.value]);Fs(Pd,se(()=>o.value+1)),Fs(sE,a),Fs(Cl,i);const l=ne();return $t(()=>[l.value,a.value,t.name],([c,u,d],[f,h,m])=>{u&&(u.instances[d]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Ks(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,d=a.value,f=d&&d.components[u];if(!f)return Od(n.default,{Component:f,route:c});const h=d.props[u],m=h?h===!0?c.params:typeof h=="function"?h(c):h:null,y=On(f,le({},m,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Od(n.default,{Component:y,route:c})||y}}});function Od(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const uE=cE;function dE(t){const e=Qw(t.routes,t),n=t.parseQuery||tE,s=t.stringifyQuery||Ad,i=t.history,r=vi(),o=vi(),a=vi(),l=Uh(mn);let c=mn;Rs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Fa.bind(null,E=>""+E),d=Fa.bind(null,Ew),f=Fa.bind(null,Zi);function h(E,F){let M,$;return $p(E)?(M=e.getRecordMatcher(E),$=F):$=E,e.addRoute($,M)}function m(E){const F=e.getRecordMatcher(E);F&&e.removeRoute(F)}function _(){return e.getRoutes().map(E=>E.record)}function y(E){return!!e.getRecordMatcher(E)}function C(E,F){if(F=le({},F||l.value),typeof E=="string"){const v=Ua(n,E,F.path),w=e.resolve({path:v.path},F),S=i.createHref(v.fullPath);return le(v,w,{params:f(w.params),hash:Zi(v.hash),redirectedFrom:void 0,href:S})}let M;if(E.path!=null)M=le({},E,{path:Ua(n,E.path,F.path).path});else{const v=le({},E.params);for(const w in v)v[w]==null&&delete v[w];M=le({},E,{params:d(v)}),F.params=d(F.params)}const $=e.resolve(M,F),ge=E.hash||"";$.params=u(f($.params));const p=Sw(s,le({},E,{hash:yw(ge),path:$.path})),g=i.createHref(p);return le({fullPath:p,hash:ge,query:s===Ad?nE(E.query):E.query||{}},$,{redirectedFrom:void 0,href:g})}function b(E){return typeof E=="string"?Ua(n,E,l.value.path):le({},E)}function R(E,F){if(c!==E)return qs(8,{from:F,to:E})}function T(E){return W(E)}function V(E){return T(le(b(E),{replace:!0}))}function U(E){const F=E.matched[E.matched.length-1];if(F&&F.redirect){const{redirect:M}=F;let $=typeof M=="function"?M(E):M;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=b($):{path:$},$.params={}),le({query:E.query,hash:E.hash,params:$.path!=null?{}:E.params},$)}}function W(E,F){const M=c=C(E),$=l.value,ge=E.state,p=E.force,g=E.replace===!0,v=U(M);if(v)return W(le(b(v),{state:typeof v=="object"?le({},ge,v.state):ge,force:p,replace:g}),F||M);const w=M;w.redirectedFrom=F;let S;return!p&&Tw(s,$,M)&&(S=qs(16,{to:w,from:$}),kt($,$,!0,!1)),(S?Promise.resolve(S):N(w,$)).catch(I=>qt(I)?qt(I,2)?I:pn(I):ae(I,w,$)).then(I=>{if(I){if(qt(I,2))return W(le({replace:g},b(I.to),{state:typeof I.to=="object"?le({},ge,I.to.state):ge,force:p}),F||w)}else I=L(w,$,!0,g,ge);return Q(w,$,I),I})}function ee(E,F){const M=R(E,F);return M?Promise.reject(M):Promise.resolve()}function j(E){const F=ws.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(E):E()}function N(E,F){let M;const[$,ge,p]=fE(E,F);M=$a($.reverse(),"beforeRouteLeave",E,F);for(const v of $)v.leaveGuards.forEach(w=>{M.push(wn(w,E,F))});const g=ee.bind(null,E,F);return M.push(g),ct(M).then(()=>{M=[];for(const v of r.list())M.push(wn(v,E,F));return M.push(g),ct(M)}).then(()=>{M=$a(ge,"beforeRouteUpdate",E,F);for(const v of ge)v.updateGuards.forEach(w=>{M.push(wn(w,E,F))});return M.push(g),ct(M)}).then(()=>{M=[];for(const v of p)if(v.beforeEnter)if(Rt(v.beforeEnter))for(const w of v.beforeEnter)M.push(wn(w,E,F));else M.push(wn(v.beforeEnter,E,F));return M.push(g),ct(M)}).then(()=>(E.matched.forEach(v=>v.enterCallbacks={}),M=$a(p,"beforeRouteEnter",E,F,j),M.push(g),ct(M))).then(()=>{M=[];for(const v of o.list())M.push(wn(v,E,F));return M.push(g),ct(M)}).catch(v=>qt(v,8)?v:Promise.reject(v))}function Q(E,F,M){a.list().forEach($=>j(()=>$(E,F,M)))}function L(E,F,M,$,ge){const p=R(E,F);if(p)return p;const g=F===mn,v=Rs?history.state:{};M&&($||g?i.replace(E.fullPath,le({scroll:g&&v&&v.scroll},ge)):i.push(E.fullPath,ge)),l.value=E,kt(E,F,M,g),pn()}let oe;function xe(){oe||(oe=i.listen((E,F,M)=>{if(!Nr.listening)return;const $=C(E),ge=U($);if(ge){W(le(ge,{replace:!0,force:!0}),$).catch(Di);return}c=$;const p=l.value;Rs&&Mw(yd(p.fullPath,M.delta),ea()),N($,p).catch(g=>qt(g,12)?g:qt(g,2)?(W(le(b(g.to),{force:!0}),$).then(v=>{qt(v,20)&&!M.delta&&M.type===er.pop&&i.go(-1,!1)}).catch(Di),Promise.reject()):(M.delta&&i.go(-M.delta,!1),ae(g,$,p))).then(g=>{g=g||L($,p,!1),g&&(M.delta&&!qt(g,8)?i.go(-M.delta,!1):M.type===er.pop&&qt(g,20)&&i.go(-1,!1)),Q($,p,g)}).catch(Di)}))}let it=vi(),Se=vi(),de;function ae(E,F,M){pn(E);const $=Se.list();return $.length?$.forEach(ge=>ge(E,F,M)):console.error(E),Promise.reject(E)}function Wt(){return de&&l.value!==mn?Promise.resolve():new Promise((E,F)=>{it.add([E,F])})}function pn(E){return de||(de=!E,xe(),it.list().forEach(([F,M])=>E?M(E):F()),it.reset()),E}function kt(E,F,M,$){const{scrollBehavior:ge}=t;if(!Rs||!ge)return Promise.resolve();const p=!M&&Dw(yd(E.fullPath,0))||($||!M)&&history.state&&history.state.scroll||null;return ht().then(()=>ge(E,F,p)).then(g=>g&&Ow(g)).catch(g=>ae(g,E,F))}const Qe=E=>i.go(E);let bs;const ws=new Set,Nr={currentRoute:l,listening:!0,addRoute:h,removeRoute:m,clearRoutes:e.clearRoutes,hasRoute:y,getRoutes:_,resolve:C,options:t,push:T,replace:V,go:Qe,back:()=>Qe(-1),forward:()=>Qe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Se.add,isReady:Wt,install(E){const F=this;E.component("RouterLink",oE),E.component("RouterView",uE),E.config.globalProperties.$router=F,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>ns(l)}),Rs&&!bs&&l.value===mn&&(bs=!0,T(i.location).catch(ge=>{}));const M={};for(const ge in mn)Object.defineProperty(M,ge,{get:()=>l.value[ge],enumerable:!0});E.provide(ta,F),E.provide(Vp,Fh(M)),E.provide(Cl,l);const $=E.unmount;ws.add(E),E.unmount=function(){ws.delete(E),ws.size<1&&(c=mn,oe&&oe(),oe=null,l.value=mn,bs=!1,de=!1),$()}}};function ct(E){return E.reduce((F,M)=>F.then(()=>j(M)),Promise.resolve())}return Nr}function fE(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ks(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ks(c,l))||i.push(l))}return[n,s,i]}function hE(){return ze(ta)}const Wp=/^[a-z0-9]+(-[a-z0-9]+)*$/,na=(t,e,n,s="")=>{const i=t.split(":");if(t.slice(0,1)==="@"){if(i.length<2||i.length>3)return null;s=i.shift().slice(1)}if(i.length>3||!i.length)return null;if(i.length>1){const a=i.pop(),l=i.pop(),c={provider:i.length>0?i[0]:s,prefix:l,name:a};return e&&!qr(c)?null:c}const r=i[0],o=r.split("-");if(o.length>1){const a={provider:s,prefix:o.shift(),name:o.join("-")};return e&&!qr(a)?null:a}if(n&&s===""){const a={provider:s,prefix:"",name:r};return e&&!qr(a,n)?null:a}return null},qr=(t,e)=>t?!!((e&&t.prefix===""||t.prefix)&&t.name):!1,Gp=Object.freeze({left:0,top:0,width:16,height:16}),ho=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),sa=Object.freeze({...Gp,...ho}),Sl=Object.freeze({...sa,body:"",hidden:!1});function pE(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const s=((t.rotate||0)+(e.rotate||0))%4;return s&&(n.rotate=s),n}function Md(t,e){const n=pE(t,e);for(const s in Sl)s in ho?s in t&&!(s in n)&&(n[s]=ho[s]):s in e?n[s]=e[s]:s in t&&(n[s]=t[s]);return n}function gE(t,e){const n=t.icons,s=t.aliases||Object.create(null),i=Object.create(null);function r(o){if(n[o])return i[o]=[];if(!(o in i)){i[o]=null;const a=s[o]&&s[o].parent,l=a&&r(a);l&&(i[o]=[a].concat(l))}return i[o]}return Object.keys(n).concat(Object.keys(s)).forEach(r),i}function mE(t,e,n){const s=t.icons,i=t.aliases||Object.create(null);let r={};function o(a){r=Md(s[a]||i[a],r)}return o(e),n.forEach(o),Md(t,r)}function Kp(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(i=>{e(i,null),n.push(i)});const s=gE(t);for(const i in s){const r=s[i];r&&(e(i,mE(t,i,r)),n.push(i))}return n}const _E={provider:"",aliases:{},not_found:{},...Gp};function ja(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function qp(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!ja(t,_E))return null;const n=e.icons;for(const i in n){const r=n[i];if(!i||typeof r.body!="string"||!ja(r,Sl))return null}const s=e.aliases||Object.create(null);for(const i in s){const r=s[i],o=r.parent;if(!i||typeof o!="string"||!n[o]&&!s[o]||!ja(r,Sl))return null}return e}const Dd=Object.create(null);function vE(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function zs(t,e){const n=Dd[t]||(Dd[t]=Object.create(null));return n[e]||(n[e]=vE(t,e))}function zp(t,e){return qp(e)?Kp(e,(n,s)=>{s?t.icons[n]=s:t.missing.add(n)}):[]}function yE(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let tr=!1;function Yp(t){return typeof t=="boolean"&&(tr=t),tr}function bE(t){const e=typeof t=="string"?na(t,!0,tr):t;if(e){const n=zs(e.provider,e.prefix),s=e.name;return n.icons[s]||(n.missing.has(s)?null:void 0)}}function wE(t,e){const n=na(t,!0,tr);if(!n)return!1;const s=zs(n.provider,n.prefix);return e?yE(s,n.name,e):(s.missing.add(n.name),!0)}function EE(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),tr&&!e&&!t.prefix){let i=!1;return qp(t)&&(t.prefix="",Kp(t,(r,o)=>{wE(r,o)&&(i=!0)})),i}const n=t.prefix;if(!qr({prefix:n,name:"a"}))return!1;const s=zs(e,n);return!!zp(s,t)}const Qp=Object.freeze({width:null,height:null}),Jp=Object.freeze({...Qp,...ho}),IE=/(-?[0-9.]*[0-9]+[0-9.]*)/g,CE=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Ld(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const s=t.split(IE);if(s===null||!s.length)return t;const i=[];let r=s.shift(),o=CE.test(r);for(;;){if(o){const a=parseFloat(r);isNaN(a)?i.push(r):i.push(Math.ceil(a*e*n)/n)}else i.push(r);if(r=s.shift(),r===void 0)return i.join("");o=!o}}function SE(t,e="defs"){let n="";const s=t.indexOf("<"+e);for(;s>=0;){const i=t.indexOf(">",s),r=t.indexOf("</"+e);if(i===-1||r===-1)break;const o=t.indexOf(">",r);if(o===-1)break;n+=t.slice(i+1,r).trim(),t=t.slice(0,s).trim()+t.slice(o+1)}return{defs:n,content:t}}function TE(t,e){return t?"<defs>"+t+"</defs>"+e:e}function RE(t,e,n){const s=SE(t);return TE(s.defs,e+s.content+n)}const AE=t=>t==="unset"||t==="undefined"||t==="none";function PE(t,e){const n={...sa,...t},s={...Jp,...e},i={left:n.left,top:n.top,width:n.width,height:n.height};let r=n.body;[n,s].forEach(_=>{const y=[],C=_.hFlip,b=_.vFlip;let R=_.rotate;C?b?R+=2:(y.push("translate("+(i.width+i.left).toString()+" "+(0-i.top).toString()+")"),y.push("scale(-1 1)"),i.top=i.left=0):b&&(y.push("translate("+(0-i.left).toString()+" "+(i.height+i.top).toString()+")"),y.push("scale(1 -1)"),i.top=i.left=0);let T;switch(R<0&&(R-=Math.floor(R/4)*4),R=R%4,R){case 1:T=i.height/2+i.top,y.unshift("rotate(90 "+T.toString()+" "+T.toString()+")");break;case 2:y.unshift("rotate(180 "+(i.width/2+i.left).toString()+" "+(i.height/2+i.top).toString()+")");break;case 3:T=i.width/2+i.left,y.unshift("rotate(-90 "+T.toString()+" "+T.toString()+")");break}R%2===1&&(i.left!==i.top&&(T=i.left,i.left=i.top,i.top=T),i.width!==i.height&&(T=i.width,i.width=i.height,i.height=T)),y.length&&(r=RE(r,'<g transform="'+y.join(" ")+'">',"</g>"))});const o=s.width,a=s.height,l=i.width,c=i.height;let u,d;o===null?(d=a===null?"1em":a==="auto"?c:a,u=Ld(d,l/c)):(u=o==="auto"?l:o,d=a===null?Ld(u,c/l):a==="auto"?c:a);const f={},h=(_,y)=>{AE(y)||(f[_]=y.toString())};h("width",u),h("height",d);const m=[i.left,i.top,l,c];return f.viewBox=m.join(" "),{attributes:f,viewBox:m,body:r}}const kE=/\sid="(\S+)"/g,xE="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let NE=0;function OE(t,e=xE){const n=[];let s;for(;s=kE.exec(t);)n.push(s[1]);if(!n.length)return t;const i="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(r=>{const o=typeof e=="function"?e(r):e+(NE++).toString(),a=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+o+i+"$3")}),t=t.replace(new RegExp(i,"g"),""),t}const Tl=Object.create(null);function ME(t,e){Tl[t]=e}function Rl(t){return Tl[t]||Tl[""]}function bc(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const wc=Object.create(null),yi=["https://api.simplesvg.com","https://api.unisvg.com"],zr=[];for(;yi.length>0;)yi.length===1||Math.random()>.5?zr.push(yi.shift()):zr.push(yi.pop());wc[""]=bc({resources:["https://api.iconify.design"].concat(zr)});function DE(t,e){const n=bc(e);return n===null?!1:(wc[t]=n,!0)}function Ec(t){return wc[t]}const LE=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let Fd=LE();function FE(t,e){const n=Ec(t);if(!n)return 0;let s;if(!n.maxURL)s=0;else{let i=0;n.resources.forEach(o=>{i=Math.max(i,o.length)});const r=e+".json?icons=";s=n.maxURL-i-n.path.length-r.length}return s}function UE(t){return t===404}const $E=(t,e,n)=>{const s=[],i=FE(t,e),r="icons";let o={type:r,provider:t,prefix:e,icons:[]},a=0;return n.forEach((l,c)=>{a+=l.length+1,a>=i&&c>0&&(s.push(o),o={type:r,provider:t,prefix:e,icons:[]},a=l.length),o.icons.push(l)}),s.push(o),s};function jE(t){if(typeof t=="string"){const e=Ec(t);if(e)return e.path}return"/"}const HE=(t,e,n)=>{if(!Fd){n("abort",424);return}let s=jE(e.provider);switch(e.type){case"icons":{const r=e.prefix,a=e.icons.join(","),l=new URLSearchParams({icons:a});s+=r+".json?"+l.toString();break}case"custom":{const r=e.uri;s+=r.slice(0,1)==="/"?r.slice(1):r;break}default:n("abort",400);return}let i=503;Fd(t+s).then(r=>{const o=r.status;if(o!==200){setTimeout(()=>{n(UE(o)?"abort":"next",o)});return}return i=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?n("abort",r):n("next",i)});return}setTimeout(()=>{n("success",r)})}).catch(()=>{n("next",i)})},BE={prepare:$E,send:HE};function VE(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((i,r)=>i.provider!==r.provider?i.provider.localeCompare(r.provider):i.prefix!==r.prefix?i.prefix.localeCompare(r.prefix):i.name.localeCompare(r.name));let s={provider:"",prefix:"",name:""};return t.forEach(i=>{if(s.name===i.name&&s.prefix===i.prefix&&s.provider===i.provider)return;s=i;const r=i.provider,o=i.prefix,a=i.name,l=n[r]||(n[r]=Object.create(null)),c=l[o]||(l[o]=zs(r,o));let u;a in c.icons?u=e.loaded:o===""||c.missing.has(a)?u=e.missing:u=e.pending;const d={provider:r,prefix:o,name:a};u.push(d)}),e}function Xp(t,e){t.forEach(n=>{const s=n.loaderCallbacks;s&&(n.loaderCallbacks=s.filter(i=>i.id!==e))})}function WE(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const s=t.provider,i=t.prefix;e.forEach(r=>{const o=r.icons,a=o.pending.length;o.pending=o.pending.filter(l=>{if(l.prefix!==i)return!0;const c=l.name;if(t.icons[c])o.loaded.push({provider:s,prefix:i,name:c});else if(t.missing.has(c))o.missing.push({provider:s,prefix:i,name:c});else return n=!0,!0;return!1}),o.pending.length!==a&&(n||Xp([t],r.id),r.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),r.abort))})}))}let GE=0;function KE(t,e,n){const s=GE++,i=Xp.bind(null,n,s);if(!e.pending.length)return i;const r={id:s,icons:e,callback:t,abort:i};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(r)}),i}function qE(t,e=!0,n=!1){const s=[];return t.forEach(i=>{const r=typeof i=="string"?na(i,e,n):i;r&&s.push(r)}),s}var zE={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function YE(t,e,n,s){const i=t.resources.length,r=t.random?Math.floor(Math.random()*i):t.index;let o;if(t.random){let U=t.resources.slice(0);for(o=[];U.length>1;){const W=Math.floor(Math.random()*U.length);o.push(U[W]),U=U.slice(0,W).concat(U.slice(W+1))}o=o.concat(U)}else o=t.resources.slice(r).concat(t.resources.slice(0,r));const a=Date.now();let l="pending",c=0,u,d=null,f=[],h=[];typeof s=="function"&&h.push(s);function m(){d&&(clearTimeout(d),d=null)}function _(){l==="pending"&&(l="aborted"),m(),f.forEach(U=>{U.status==="pending"&&(U.status="aborted")}),f=[]}function y(U,W){W&&(h=[]),typeof U=="function"&&h.push(U)}function C(){return{startTime:a,payload:e,status:l,queriesSent:c,queriesPending:f.length,subscribe:y,abort:_}}function b(){l="failed",h.forEach(U=>{U(void 0,u)})}function R(){f.forEach(U=>{U.status==="pending"&&(U.status="aborted")}),f=[]}function T(U,W,ee){const j=W!=="success";switch(f=f.filter(N=>N!==U),l){case"pending":break;case"failed":if(j||!t.dataAfterTimeout)return;break;default:return}if(W==="abort"){u=ee,b();return}if(j){u=ee,f.length||(o.length?V():b());return}if(m(),R(),!t.random){const N=t.resources.indexOf(U.resource);N!==-1&&N!==t.index&&(t.index=N)}l="completed",h.forEach(N=>{N(ee)})}function V(){if(l!=="pending")return;m();const U=o.shift();if(U===void 0){if(f.length){d=setTimeout(()=>{m(),l==="pending"&&(R(),b())},t.timeout);return}b();return}const W={status:"pending",resource:U,callback:(ee,j)=>{T(W,ee,j)}};f.push(W),c++,d=setTimeout(V,t.rotate),n(U,e,W.callback)}return setTimeout(V),C}function Zp(t){const e={...zE,...t};let n=[];function s(){n=n.filter(a=>a().status==="pending")}function i(a,l,c){const u=YE(e,a,l,(d,f)=>{s(),c&&c(d,f)});return n.push(u),u}function r(a){return n.find(l=>a(l))||null}return{query:i,find:r,setIndex:a=>{e.index=a},getIndex:()=>e.index,cleanup:s}}function Ud(){}const Ha=Object.create(null);function QE(t){if(!Ha[t]){const e=Ec(t);if(!e)return;const n=Zp(e),s={config:e,redundancy:n};Ha[t]=s}return Ha[t]}function JE(t,e,n){let s,i;if(typeof t=="string"){const r=Rl(t);if(!r)return n(void 0,424),Ud;i=r.send;const o=QE(t);o&&(s=o.redundancy)}else{const r=bc(t);if(r){s=Zp(r);const o=t.resources?t.resources[0]:"",a=Rl(o);a&&(i=a.send)}}return!s||!i?(n(void 0,424),Ud):s.query(e,i,n)().abort}function $d(){}function XE(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,WE(t)}))}function ZE(t){const e=[],n=[];return t.forEach(s=>{(s.match(Wp)?e:n).push(s)}),{valid:e,invalid:n}}function bi(t,e,n){function s(){const i=t.pendingIcons;e.forEach(r=>{i&&i.delete(r),t.icons[r]||t.missing.add(r)})}if(n&&typeof n=="object")try{if(!zp(t,n).length){s();return}}catch(i){console.error(i)}s(),XE(t)}function jd(t,e){t instanceof Promise?t.then(n=>{e(n)}).catch(()=>{e(null)}):e(t)}function eI(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:s}=t,i=t.iconsToLoad;if(delete t.iconsToLoad,!i||!i.length)return;const r=t.loadIcon;if(t.loadIcons&&(i.length>1||!r)){jd(t.loadIcons(i,s,n),u=>{bi(t,i,u)});return}if(r){i.forEach(u=>{const d=r(u,s,n);jd(d,f=>{const h=f?{prefix:s,icons:{[u]:f}}:null;bi(t,[u],h)})});return}const{valid:o,invalid:a}=ZE(i);if(a.length&&bi(t,a,null),!o.length)return;const l=s.match(Wp)?Rl(n):null;if(!l){bi(t,o,null);return}l.prepare(n,s,o).forEach(u=>{JE(n,u,d=>{bi(t,u.icons,d)})})}))}const tI=(t,e)=>{const n=qE(t,!0,Yp()),s=VE(n);if(!s.pending.length){let l=!0;return e&&setTimeout(()=>{l&&e(s.loaded,s.missing,s.pending,$d)}),()=>{l=!1}}const i=Object.create(null),r=[];let o,a;return s.pending.forEach(l=>{const{provider:c,prefix:u}=l;if(u===a&&c===o)return;o=c,a=u,r.push(zs(c,u));const d=i[c]||(i[c]=Object.create(null));d[u]||(d[u]=[])}),s.pending.forEach(l=>{const{provider:c,prefix:u,name:d}=l,f=zs(c,u),h=f.pendingIcons||(f.pendingIcons=new Set);h.has(d)||(h.add(d),i[c][u].push(d))}),r.forEach(l=>{const c=i[l.provider][l.prefix];c.length&&eI(l,c)}),e?KE(e,s,r):$d};function nI(t,e){const n={...t};for(const s in e){const i=e[s],r=typeof i;s in Qp?(i===null||i&&(r==="string"||r==="number"))&&(n[s]=i):r===typeof n[s]&&(n[s]=s==="rotate"?i%4:i)}return n}const sI=/[\s,]+/;function iI(t,e){e.split(sI).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function rI(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function s(i){for(;i<0;)i+=4;return i%4}if(n===""){const i=parseInt(t);return isNaN(i)?0:s(i)}else if(n!==t){let i=0;switch(n){case"%":i=25;break;case"deg":i=90}if(i){let r=parseFloat(t.slice(0,t.length-n.length));return isNaN(r)?0:(r=r/i,r%1===0?s(r):0)}}return e}function oI(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in e)n+=" "+s+'="'+e[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function aI(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function lI(t){return"data:image/svg+xml,"+aI(t)}function cI(t){return'url("'+lI(t)+'")'}const Hd={...Jp,inline:!1},uI={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},dI={display:"inline-block"},Al={backgroundColor:"currentColor"},eg={backgroundColor:"transparent"},Bd={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Vd={webkitMask:Al,mask:Al,background:eg};for(const t in Vd){const e=Vd[t];for(const n in Bd)e[t+n]=Bd[n]}const Yr={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";Yr[t+"-flip"]=e,Yr[t.slice(0,1)+"-flip"]=e,Yr[t+"Flip"]=e});function Wd(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const Gd=(t,e)=>{const n=nI(Hd,e),s={...uI},i=e.mode||"svg",r={},o=e.style,a=typeof o=="object"&&!(o instanceof Array)?o:{};for(let _ in e){const y=e[_];if(y!==void 0)switch(_){case"icon":case"style":case"onLoad":case"mode":case"ssr":break;case"inline":case"hFlip":case"vFlip":n[_]=y===!0||y==="true"||y===1;break;case"flip":typeof y=="string"&&iI(n,y);break;case"color":r.color=y;break;case"rotate":typeof y=="string"?n[_]=rI(y):typeof y=="number"&&(n[_]=y);break;case"ariaHidden":case"aria-hidden":y!==!0&&y!=="true"&&delete s["aria-hidden"];break;default:{const C=Yr[_];C?(y===!0||y==="true"||y===1)&&(n[C]=!0):Hd[_]===void 0&&(s[_]=y)}}}const l=PE(t,n),c=l.attributes;if(n.inline&&(r.verticalAlign="-0.125em"),i==="svg"){s.style={...r,...a},Object.assign(s,c);let _=0,y=e.id;return typeof y=="string"&&(y=y.replace(/-/g,"_")),s.innerHTML=OE(l.body,y?()=>y+"ID"+_++:"iconifyVue"),On("svg",s)}const{body:u,width:d,height:f}=t,h=i==="mask"||(i==="bg"?!1:u.indexOf("currentColor")!==-1),m=oI(u,{...c,width:d+"",height:f+""});return s.style={...r,"--svg":cI(m),width:Wd(c.width),height:Wd(c.height),...dI,...h?Al:eg,...a},On("span",s)};Yp(!0);ME("",BE);if(typeof document<"u"&&typeof window<"u"){const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(s=>{try{(typeof s!="object"||s===null||s instanceof Array||typeof s.icons!="object"||typeof s.prefix!="string"||!EE(s))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const s="IconifyProviders["+n+"] is invalid.";try{const i=e[n];if(typeof i!="object"||!i||i.resources===void 0)continue;DE(n,i)||console.error(s)}catch{console.error(s)}}}}const fI={...sa,body:""},tg=dn({inheritAttrs:!1,data(){return{_name:"",_loadingIcon:null,iconMounted:!1,counter:0}},mounted(){this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e,n){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let s;if(typeof t!="string"||(s=na(t,!1,!0))===null)return this.abortLoading(),null;let i=bE(s);if(!i)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",i!==null&&(this._loadingIcon={name:t,abort:tI([s],()=>{this.counter++})})),null;if(this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t)),n){i=Object.assign({},i);const o=n(i.body,s.name,s.prefix,s.provider);typeof o=="string"&&(i.body=o)}const r=["iconify"];return s.prefix!==""&&r.push("iconify--"+s.prefix),s.provider!==""&&r.push("iconify--"+s.provider),{data:i,classes:r}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted||t.ssr?this.getIcon(t.icon,t.onLoad,t.customise):null;if(!e)return Gd(fI,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),Gd({...sa,...e.data},n)}}),Hn=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},hI={components:{Icon:tg},setup(t,e){const n=ne("Entrar"),s=ne("Inscrever-se"),i=ne(""),r=ne(""),o=ne(!1);function a(){n.value==="Entrar"?(n.value="Inscrever-se",s.value="Entrar"):(n.value="Entrar",s.value="Inscrever-se")}function l(){e.emit("emit-user",[i.value,r.value,n.value]),i.value="",r.value=""}function c(){o.value===!1?o.value=!0:o.value===!0&&(o.value=!1)}return{buttonPrimary:n,buttonSecondary:s,switchText:a,emitUser:l,username:i,password:r,showHide:o,showHidePassword:c}}},pI={class:"relative mb-4"},gI={class:"relative"},mI=["type"],_I={class:"py-4"},vI={class:"p-0.5"},yI={class:"p-0.5"};function bI(t,e,n,s,i,r){const o=_t("base-button");return mt(),jn("form",null,[be("div",pI,[Mu(be("input",{type:"text",class:"peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]",id:"email",placeholder:"name@example.com","onUpdate:modelValue":e[0]||(e[0]=a=>s.username=a)},null,512),[[_l,s.username]]),e[3]||(e[3]=be("label",{for:"email",class:"pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"},"Email",-1))]),be("div",gI,[Mu(be("input",{type:s.showHide?"text":"password",class:"peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] bg-",id:"password",placeholder:"Password","onUpdate:modelValue":e[1]||(e[1]=a=>s.password=a)},null,8,mI),[[Tb,s.password]]),be("div",_I,[be("input",{type:"checkbox",id:"showPassword",onChange:e[2]||(e[2]=(...a)=>s.showHidePassword&&s.showHidePassword(...a))},null,32),e[4]||(e[4]=be("label",{for:"showPassword",class:"p-1 dark:text-white"},"Mostrar Senha",-1))]),e[5]||(e[5]=be("label",{for:"password",class:"pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"},"Senha",-1))]),be("span",vI,[_e(o,{onClick:pd(s.emitUser,["prevent"]),class:"font-semibold"},{default:yt(()=>[ss(no(s.buttonPrimary),1)]),_:1},8,["onClick"])]),be("span",yI,[_e(o,{onClick:pd(s.switchText,["prevent"]),class:"font-semibold"},{default:yt(()=>[ss(no(s.buttonSecondary),1)]),_:1},8,["onClick"])])])}const wI=Hn(hI,[["render",bI]]),EI={},II={class:"text-base text-red-600"};function CI(t,e){return mt(),jn("div",null,[_e(nb,{name:"message"},{default:yt(()=>[be("p",II,[zo(t.$slots,"default",{},void 0,!0)])]),_:3})])}const SI=Hn(EI,[["render",CI],["__scopeId","data-v-e583e2cf"]]);/**
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
 */const TI=()=>{};var Kd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(t,e){if(!t)throw si(e)},si=function(t){return new Error("Firebase Database ("+ng.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},RI=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ic={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,h=c&63;l||(h=64,o||(f=64)),s.push(n[u],n[d],n[f],n[h])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):RI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new AI;const f=r<<2|a>>4;if(s.push(f),c!==64){const h=a<<4&240|c>>2;if(s.push(h),d!==64){const m=c<<6&192|d;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class AI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ig=function(t){const e=sg(t);return Ic.encodeByteArray(e,!0)},po=function(t){return ig(t).replace(/\./g,"")},go=function(t){try{return Ic.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(t){return rg(void 0,t)}function rg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!kI(n)||(t[n]=rg(t[n],e[n]));return t}function kI(t){return t!=="__proto__"}/**
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
 */function xI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const NI=()=>xI().__FIREBASE_DEFAULTS__,OI=()=>{if(typeof process>"u"||typeof Kd>"u")return;const t=Kd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},MI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&go(t[1]);return e&&JSON.parse(e)},Cc=()=>{try{return TI()||NI()||OI()||MI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},og=t=>{var e,n;return(n=(e=Cc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},DI=t=>{const e=og(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ag=()=>{var t;return(t=Cc())===null||t===void 0?void 0:t.config},lg=t=>{var e;return(e=Cc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function ii(t){return t.endsWith(".cloudworkstations.dev")}async function cg(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function LI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[po(JSON.stringify(n)),po(JSON.stringify(o)),""].join(".")}const Fi={};function FI(){const t={prod:[],emulator:[]};for(const e of Object.keys(Fi))Fi[e]?t.emulator.push(e):t.prod.push(e);return t}function UI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let qd=!1;function ug(t,e){if(typeof window>"u"||typeof document>"u"||!ii(window.location.host)||Fi[t]===e||Fi[t]||qd)return;Fi[t]=e;function n(f){return`__firebase__banner__${f}`}const s="__firebase__banner",r=FI().prod.length>0;function o(){const f=document.getElementById(s);f&&f.remove()}function a(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function l(f,h){f.setAttribute("width","24"),f.setAttribute("id",h),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function c(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{qd=!0,o()},f}function u(f,h){f.setAttribute("id",h),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function d(){const f=UI(s),h=n("text"),m=document.getElementById(h)||document.createElement("span"),_=n("learnmore"),y=document.getElementById(_)||document.createElement("a"),C=n("preprendIcon"),b=document.getElementById(C)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const R=f.element;a(R),u(y,_);const T=c();l(b,C),R.append(b,m,y,T),document.body.appendChild(R)}r?(m.innerText="Preview backend disconnected.",b.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,m.innerText="Preview backend running in this workspace."),m.setAttribute("id",h)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function $I(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HI(){const t=Ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function BI(){return ng.NODE_ADMIN===!0}function VI(){try{return typeof indexedDB=="object"}catch{return!1}}function WI(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI="FirebaseError";class Bn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=GI,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,br.prototype.create)}}class br{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?KI(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Bn(i,a,s)}}function KI(t,e){return t.replace(qI,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const qI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t){return JSON.parse(t)}function Ae(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=nr(go(r[0])||""),n=nr(go(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},zI=function(t){const e=fg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},YI=function(t){const e=fg(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ys(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Pl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mo(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ls(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(zd(r)&&zd(o)){if(!ls(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function zd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ri(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Ai(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function JI(t,e){const n=new XI(t,e);return n.subscribe.bind(n)}class XI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");ZI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Ba),i.error===void 0&&(i.error=Ba),i.complete===void 0&&(i.complete=Ba);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ba(){}function Tc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,P(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ra=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function We(t){return t&&t._delegate?t._delegate:t}class cs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Qn="[DEFAULT]";/**
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
 */class tC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ia;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sC(e))try{this.getOrInitializeService({instanceIdentifier:Qn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qn){return this.instances.has(e)}getOptions(e=Qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:nC(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Qn){return this.component?this.component.multipleInstances?e:Qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nC(t){return t===Qn?void 0:t}function sC(t){return t.instantiationMode==="EAGER"}/**
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
 */class iC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const rC={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},oC=fe.INFO,aC={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},lC=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=aC[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rc{constructor(e){this.name=e,this._logLevel=oC,this._logHandler=lC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const cC=(t,e)=>e.some(n=>t instanceof n);let Yd,Qd;function uC(){return Yd||(Yd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dC(){return Qd||(Qd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hg=new WeakMap,kl=new WeakMap,pg=new WeakMap,Va=new WeakMap,Ac=new WeakMap;function fC(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Rn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hg.set(n,t)}).catch(()=>{}),Ac.set(e,t),e}function hC(t){if(kl.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});kl.set(t,e)}let xl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pC(t){xl=t(xl)}function gC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Wa(this),e,...n);return pg.set(s,e.sort?e.sort():[e]),Rn(s)}:dC().includes(t)?function(...e){return t.apply(Wa(this),e),Rn(hg.get(this))}:function(...e){return Rn(t.apply(Wa(this),e))}}function mC(t){return typeof t=="function"?gC(t):(t instanceof IDBTransaction&&hC(t),cC(t,uC())?new Proxy(t,xl):t)}function Rn(t){if(t instanceof IDBRequest)return fC(t);if(Va.has(t))return Va.get(t);const e=mC(t);return e!==t&&(Va.set(t,e),Ac.set(e,t)),e}const Wa=t=>Ac.get(t);function _C(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Rn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Rn(o.result),l.oldVersion,l.newVersion,Rn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const vC=["get","getKey","getAll","getAllKeys","count"],yC=["put","add","delete","clear"],Ga=new Map;function Jd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ga.get(e))return Ga.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=yC.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||vC.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Ga.set(e,r),r}pC(t=>({...t,get:(e,n,s)=>Jd(e,n)||t.get(e,n,s),has:(e,n)=>!!Jd(e,n)||t.has(e,n)}));/**
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
 */class bC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wC(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function wC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nl="@firebase/app",Xd="0.13.1";/**
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
 */const ln=new Rc("@firebase/app"),EC="@firebase/app-compat",IC="@firebase/analytics-compat",CC="@firebase/analytics",SC="@firebase/app-check-compat",TC="@firebase/app-check",RC="@firebase/auth",AC="@firebase/auth-compat",PC="@firebase/database",kC="@firebase/data-connect",xC="@firebase/database-compat",NC="@firebase/functions",OC="@firebase/functions-compat",MC="@firebase/installations",DC="@firebase/installations-compat",LC="@firebase/messaging",FC="@firebase/messaging-compat",UC="@firebase/performance",$C="@firebase/performance-compat",jC="@firebase/remote-config",HC="@firebase/remote-config-compat",BC="@firebase/storage",VC="@firebase/storage-compat",WC="@firebase/firestore",GC="@firebase/ai",KC="@firebase/firestore-compat",qC="firebase",zC="11.9.0";/**
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
 */const Ol="[DEFAULT]",YC={[Nl]:"fire-core",[EC]:"fire-core-compat",[CC]:"fire-analytics",[IC]:"fire-analytics-compat",[TC]:"fire-app-check",[SC]:"fire-app-check-compat",[RC]:"fire-auth",[AC]:"fire-auth-compat",[PC]:"fire-rtdb",[kC]:"fire-data-connect",[xC]:"fire-rtdb-compat",[NC]:"fire-fn",[OC]:"fire-fn-compat",[MC]:"fire-iid",[DC]:"fire-iid-compat",[LC]:"fire-fcm",[FC]:"fire-fcm-compat",[UC]:"fire-perf",[$C]:"fire-perf-compat",[jC]:"fire-rc",[HC]:"fire-rc-compat",[BC]:"fire-gcs",[VC]:"fire-gcs-compat",[WC]:"fire-fst",[KC]:"fire-fst-compat",[GC]:"fire-vertex","fire-js":"fire-js",[qC]:"fire-js-all"};/**
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
 */const _o=new Map,QC=new Map,Ml=new Map;function Zd(t,e){try{t.container.addComponent(e)}catch(n){ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qs(t){const e=t.name;if(Ml.has(e))return ln.debug(`There were multiple attempts to register component ${e}.`),!1;Ml.set(e,t);for(const n of _o.values())Zd(n,t);for(const n of QC.values())Zd(n,t);return!0}function Pc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function dt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const JC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},An=new br("app","Firebase",JC);/**
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
 */class XC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new cs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw An.create("app-deleted",{appName:this._name})}}/**
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
 */const oi=zC;function kc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ol,automaticDataCollectionEnabled:!0},e),i=s.name;if(typeof i!="string"||!i)throw An.create("bad-app-name",{appName:String(i)});if(n||(n=ag()),!n)throw An.create("no-options");const r=_o.get(i);if(r){if(ls(n,r.options)&&ls(s,r.config))return r;throw An.create("duplicate-app",{appName:i})}const o=new iC(i);for(const l of Ml.values())o.addComponent(l);const a=new XC(n,s,o);return _o.set(i,a),a}function gg(t=Ol){const e=_o.get(t);if(!e&&t===Ol&&ag())return kc();if(!e)throw An.create("no-app",{appName:t});return e}function Pn(t,e,n){var s;let i=(s=YC[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ln.warn(a.join(" "));return}Qs(new cs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ZC="firebase-heartbeat-database",eS=1,sr="firebase-heartbeat-store";let Ka=null;function mg(){return Ka||(Ka=_C(ZC,eS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(sr)}catch(n){console.warn(n)}}}}).catch(t=>{throw An.create("idb-open",{originalErrorMessage:t.message})})),Ka}async function tS(t){try{const n=(await mg()).transaction(sr),s=await n.objectStore(sr).get(_g(t));return await n.done,s}catch(e){if(e instanceof Bn)ln.warn(e.message);else{const n=An.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ln.warn(n.message)}}}async function ef(t,e){try{const s=(await mg()).transaction(sr,"readwrite");await s.objectStore(sr).put(e,_g(t)),await s.done}catch(n){if(n instanceof Bn)ln.warn(n.message);else{const s=An.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ln.warn(s.message)}}}function _g(t){return`${t.name}!${t.options.appId}`}/**
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
 */const nS=1024,sS=30;class iS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=tf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>sS){const o=aS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ln.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=tf(),{heartbeatsToSend:s,unsentEntries:i}=rS(this._heartbeatsCache.heartbeats),r=po(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return ln.warn(n),""}}}function tf(){return new Date().toISOString().substring(0,10)}function rS(t,e=nS){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),nf(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),nf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class oS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return VI()?WI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ef(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ef(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function nf(t){return po(JSON.stringify({version:2,heartbeats:t})).length}function aS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function lS(t){Qs(new cs("platform-logger",e=>new bC(e),"PRIVATE")),Qs(new cs("heartbeat",e=>new iS(e),"PRIVATE")),Pn(Nl,Xd,t),Pn(Nl,Xd,"esm2017"),Pn("fire-js","")}lS("");function xc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function vg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cS=vg,yg=new br("auth","Firebase",vg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=new Rc("@firebase/auth");function uS(t,...e){vo.logLevel<=fe.WARN&&vo.warn(`Auth (${oi}): ${t}`,...e)}function Qr(t,...e){vo.logLevel<=fe.ERROR&&vo.error(`Auth (${oi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t,...e){throw Nc(t,...e)}function jt(t,...e){return Nc(t,...e)}function bg(t,e,n){const s=Object.assign(Object.assign({},cS()),{[e]:n});return new br("auth","Firebase",s).create(e,{appName:t.name})}function nn(t){return bg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return yg.create(t,...e)}function K(t,e,...n){if(!t)throw Nc(e,...n)}function Zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qr(e),new Error(e)}function cn(t,e){t||Zt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dS(){return sf()==="http:"||sf()==="https:"}function sf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dS()||jI()||"connection"in navigator)?navigator.onLine:!0}function hS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n){this.shortDelay=e,this.longDelay=n,cn(n>e,"Short delay should be less than long delay!"),this.isMobile=Sc()||dg()}get(){return fS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(t,e){cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],mS=new wr(3e4,6e4);function Vn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wn(t,e,n,s,i={}){return Eg(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=ri(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},r);return $I()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&ii(t.emulatorConfig.host)&&(c.credentials="include"),wg.fetch()(await Ig(t,t.config.apiHost,n,a),c)})}async function Eg(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},pS),e);try{const i=new vS(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ur(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ur(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ur(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ur(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw bg(t,u,c);At(t,u)}}catch(i){if(i instanceof Bn)throw i;At(t,"network-request-failed",{message:String(i)})}}async function Er(t,e,n,s,i={}){const r=await Wn(t,e,n,s,i);return"mfaPendingCredential"in r&&At(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function Ig(t,e,n,s){const i=`${e}${n}?${s}`,r=t,o=r.config.emulator?Oc(t.config,i):`${t.config.apiScheme}://${i}`;return gS.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function _S(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(jt(this.auth,"network-request-failed")),mS.get())})}}function Ur(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=jt(t,e,s);return i.customData._tokenResponse=n,i}function rf(t){return t!==void 0&&t.enterprise!==void 0}class yS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return _S(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function bS(t,e){return Wn(t,"GET","/v2/recaptchaConfig",Vn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wS(t,e){return Wn(t,"POST","/v1/accounts:delete",e)}async function yo(t,e){return Wn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ES(t,e=!1){const n=We(t),s=await n.getIdToken(e),i=Mc(s);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ui(qa(i.auth_time)),issuedAtTime:Ui(qa(i.iat)),expirationTime:Ui(qa(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function qa(t){return Number(t)*1e3}function Mc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Qr("JWT malformed, contained fewer than 3 sections"),null;try{const i=go(n);return i?JSON.parse(i):(Qr("Failed to decode base64 JWT payload"),null)}catch(i){return Qr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function of(t){const e=Mc(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ir(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Bn&&IS(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function IS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ui(this.lastLoginAt),this.creationTime=Ui(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function bo(t){var e;const n=t.auth,s=await t.getIdToken(),i=await ir(t,yo(n,{idToken:s}));K(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Cg(r.providerUserInfo):[],a=TS(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ll(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function SS(t){const e=We(t);await bo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function TS(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Cg(t){return t.map(e=>{var{providerId:n}=e,s=xc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RS(t,e){const n=await Eg(t,{},async()=>{const s=ri({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=await Ig(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:s};return t.emulatorConfig&&ii(t.emulatorConfig.host)&&(l.credentials="include"),wg.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function AS(t,e){return Wn(t,"POST","/v2/accounts:revokeToken",Vn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):of(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=of(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await RS(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new $s;return s&&(K(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(K(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $s,this.toJSON())}_performRefresh(){return Zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bt{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=xc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new CS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ll(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ir(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ES(this,e)}reload(){return SS(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await bo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dt(this.auth.app))return Promise.reject(nn(this.auth));const e=await this.getIdToken();return await ir(this,wS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,h=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,C=(c=n.createdAt)!==null&&c!==void 0?c:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:R,emailVerified:T,isAnonymous:V,providerData:U,stsTokenManager:W}=n;K(R&&W,e,"internal-error");const ee=$s.fromJSON(this.name,W);K(typeof R=="string",e,"internal-error"),_n(d,e.name),_n(f,e.name),K(typeof T=="boolean",e,"internal-error"),K(typeof V=="boolean",e,"internal-error"),_n(h,e.name),_n(m,e.name),_n(_,e.name),_n(y,e.name),_n(C,e.name),_n(b,e.name);const j=new bt({uid:R,auth:e,email:f,emailVerified:T,displayName:d,isAnonymous:V,photoURL:m,phoneNumber:h,tenantId:_,stsTokenManager:ee,createdAt:C,lastLoginAt:b});return U&&Array.isArray(U)&&(j.providerData=U.map(N=>Object.assign({},N))),y&&(j._redirectEventId=y),j}static async _fromIdTokenResponse(e,n,s=!1){const i=new $s;i.updateFromServerResponse(n);const r=new bt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await bo(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];K(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Cg(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new $s;a.updateFromIdToken(s);const l=new bt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Ll(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=new Map;function en(t){cn(t instanceof Function,"Expected a class definition");let e=af.get(t);return e?(cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,af.set(t,e),e)}/**
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
 */class Sg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sg.type="NONE";const lf=Sg;/**
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
 */function Jr(t,e,n){return`firebase:${t}:${e}:${n}`}class js{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Jr(this.userKey,i.apiKey,r),this.fullPersistenceKey=Jr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await yo(this.auth,{idToken:e}).catch(()=>{});return n?bt._fromGetAccountInfoResponse(this.auth,n,e):null}return bt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new js(en(lf),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||en(lf);const o=Jr(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){let d;if(typeof u=="string"){const f=await yo(e,{idToken:u}).catch(()=>{});if(!f)break;d=await bt._fromGetAccountInfoResponse(e,f,u)}else d=bt._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new js(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new js(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xg(e))return"Blackberry";if(Ng(e))return"Webos";if(Rg(e))return"Safari";if((e.includes("chrome/")||Ag(e))&&!e.includes("edge/"))return"Chrome";if(kg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Tg(t=Ye()){return/firefox\//i.test(t)}function Rg(t=Ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ag(t=Ye()){return/crios\//i.test(t)}function Pg(t=Ye()){return/iemobile/i.test(t)}function kg(t=Ye()){return/android/i.test(t)}function xg(t=Ye()){return/blackberry/i.test(t)}function Ng(t=Ye()){return/webos/i.test(t)}function Dc(t=Ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function PS(t=Ye()){var e;return Dc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kS(){return HI()&&document.documentMode===10}function Og(t=Ye()){return Dc(t)||kg(t)||Ng(t)||xg(t)||/windows phone/i.test(t)||Pg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(t,e=[]){let n;switch(t){case"Browser":n=cf(Ye());break;case"Worker":n=`${cf(Ye())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${oi}/${s}`}/**
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
 */class xS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function NS(t,e={}){return Wn(t,"GET","/v2/passwordPolicy",Vn(t,e))}/**
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
 */const OS=6;class MS{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:OS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uf(this),this.idTokenSubscription=new uf(this),this.beforeStateQueue=new xS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=en(n)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await js.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await yo(this,{idToken:e}),s=await bt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(dt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await bo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dt(this.app))return Promise.reject(nn(this));const n=e?We(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dt(this.app)?Promise.reject(nn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dt(this.app)?Promise.reject(nn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(en(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await NS(this),n=new MS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new br("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await AS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&en(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await js.create(this,[en(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&uS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function _s(t){return We(t)}class uf{constructor(e){this.auth=e,this.observer=null,this.addObserver=JI(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function LS(t){oa=t}function Dg(t){return oa.loadJS(t)}function FS(){return oa.recaptchaEnterpriseScript}function US(){return oa.gapiScript}function $S(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class jS{constructor(){this.enterprise=new HS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class HS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const BS="recaptcha-enterprise",Lg="NO_RECAPTCHA";class VS{constructor(e){this.type=BS,this.auth=_s(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{bS(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new yS(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;rf(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(Lg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new jS().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&rf(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=FS();l.length!==0&&(l+=a),Dg(l).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function df(t,e,n,s=!1,i=!1){const r=new VS(t);let o;if(i)o=Lg;else try{o=await r.verify(n)}catch{o=await r.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Fl(t,e,n,s,i){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await df(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await df(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(t,e){const n=Pc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(ls(r,e??{}))return i;At(i,"already-initialized")}return n.initialize({options:e})}function GS(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(en);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function KS(t,e,n){const s=_s(t);K(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Fg(e),{host:o,port:a}=qS(e),l=a===null?"":`:${a}`,c={url:`${r}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){K(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),K(ls(c,s.config.emulator)&&ls(u,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=c,s.emulatorConfig=u,s.settings.appVerificationDisabledForTesting=!0,ii(o)?(cg(`${r}//${o}${l}`),ug("Auth",!0)):zS()}function Fg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qS(t){const e=Fg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:ff(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:ff(o)}}}function ff(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zt("not implemented")}_getIdTokenResponse(e){return Zt("not implemented")}_linkToIdToken(e,n){return Zt("not implemented")}_getReauthenticationResolver(e){return Zt("not implemented")}}async function YS(t,e){return Wn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QS(t,e){return Er(t,"POST","/v1/accounts:signInWithPassword",Vn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JS(t,e){return Er(t,"POST","/v1/accounts:signInWithEmailLink",Vn(t,e))}async function XS(t,e){return Er(t,"POST","/v1/accounts:signInWithEmailLink",Vn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends Lc{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new rr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new rr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fl(e,n,"signInWithPassword",QS);case"emailLink":return JS(e,{email:this._email,oobCode:this._password});default:At(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fl(e,s,"signUpPassword",YS);case"emailLink":return XS(e,{idToken:n,email:this._email,oobCode:this._password});default:At(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hs(t,e){return Er(t,"POST","/v1/accounts:signInWithIdp",Vn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS="http://localhost";class us extends Lc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new us(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):At("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=xc(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new us(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Hs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Hs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hs(e,n)}buildRequest(){const e={requestUri:ZS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ri(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tT(t){const e=Ri(Ai(t)).link,n=e?Ri(Ai(e)).deep_link_id:null,s=Ri(Ai(t)).deep_link_id;return(s?Ri(Ai(s)).link:null)||s||n||e||t}class Fc{constructor(e){var n,s,i,r,o,a;const l=Ri(Ai(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,d=eT((i=l.mode)!==null&&i!==void 0?i:null);K(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=tT(e);try{return new Fc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.providerId=ai.PROVIDER_ID}static credential(e,n){return rr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Fc.parseLink(n);return K(s,"argument-error"),rr._fromEmailAndCode(e,s.code,s.tenantId)}}ai.PROVIDER_ID="password";ai.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ai.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ir extends Ug{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends Ir{constructor(){super("facebook.com")}static credential(e){return us._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.FACEBOOK_SIGN_IN_METHOD="facebook.com";En.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Ir{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return us._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return In.credential(n,s)}catch{return null}}}In.GOOGLE_SIGN_IN_METHOD="google.com";In.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Ir{constructor(){super("github.com")}static credential(e){return us._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.GITHUB_SIGN_IN_METHOD="github.com";Cn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends Ir{constructor(){super("twitter.com")}static credential(e,n){return us._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Sn.credential(n,s)}catch{return null}}}Sn.TWITTER_SIGN_IN_METHOD="twitter.com";Sn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nT(t,e){return Er(t,"POST","/v1/accounts:signUp",Vn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await bt._fromIdTokenResponse(e,s,i),o=hf(s);return new ds({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=hf(s);return new ds({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function hf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo extends Bn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,wo.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new wo(e,n,s,i)}}function $g(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?wo._fromErrorAndOperation(t,r,e,s):r})}async function sT(t,e,n=!1){const s=await ir(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ds._forOperation(t,"link",s)}/**
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
 */async function iT(t,e,n=!1){const{auth:s}=t;if(dt(s.app))return Promise.reject(nn(s));const i="reauthenticate";try{const r=await ir(t,$g(s,i,e,t),n);K(r.idToken,s,"internal-error");const o=Mc(r.idToken);K(o,s,"internal-error");const{sub:a}=o;return K(t.uid===a,s,"user-mismatch"),ds._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&At(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jg(t,e,n=!1){if(dt(t.app))return Promise.reject(nn(t));const s="signIn",i=await $g(t,s,e),r=await ds._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function rT(t,e){return jg(_s(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hg(t){const e=_s(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function oT(t,e,n){if(dt(t.app))return Promise.reject(nn(t));const s=_s(t),o=await Fl(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nT).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Hg(t),l}),a=await ds._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function aT(t,e,n){return dt(t.app)?Promise.reject(nn(t)):rT(We(t),ai.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Hg(t),s})}function lT(t,e,n,s){return We(t).onIdTokenChanged(e,n,s)}function cT(t,e,n){return We(t).beforeAuthStateChanged(e,n)}function jx(t){return We(t).signOut()}const Eo="__sak";/**
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
 */class Bg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Eo,"1"),this.storage.removeItem(Eo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT=1e3,dT=10;class Vg extends Bg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Og(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);kS()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,dT):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},uT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vg.type="LOCAL";const fT=Vg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg extends Bg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wg.type="SESSION";const Gg=Wg;/**
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
 */function hT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class aa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new aa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await hT(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}aa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class pT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Uc("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(){return window}function gT(t){Ht().location.href=t}/**
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
 */function Kg(){return typeof Ht().WorkerGlobalScope<"u"&&typeof Ht().importScripts=="function"}async function mT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _T(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function vT(){return Kg()?self:null}/**
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
 */const qg="firebaseLocalStorageDb",yT=1,Io="firebaseLocalStorage",zg="fbase_key";class Cr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function la(t,e){return t.transaction([Io],e?"readwrite":"readonly").objectStore(Io)}function bT(){const t=indexedDB.deleteDatabase(qg);return new Cr(t).toPromise()}function Ul(){const t=indexedDB.open(qg,yT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Io,{keyPath:zg})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Io)?e(s):(s.close(),await bT(),e(await Ul()))})})}async function pf(t,e,n){const s=la(t,!0).put({[zg]:e,value:n});return new Cr(s).toPromise()}async function wT(t,e){const n=la(t,!1).get(e),s=await new Cr(n).toPromise();return s===void 0?null:s.value}function gf(t,e){const n=la(t,!0).delete(e);return new Cr(n).toPromise()}const ET=800,IT=3;class Yg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ul(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>IT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=aa._getInstance(vT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await mT(),!this.activeServiceWorker)return;this.sender=new pT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_T()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ul();return await pf(e,Eo,"1"),await gf(e,Eo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>pf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>wT(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=la(i,!1).getAll();return new Cr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ET)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yg.type="LOCAL";const CT=Yg;new wr(3e4,6e4);/**
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
 */function ST(t,e){return e?en(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class $c extends Lc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TT(t){return jg(t.auth,new $c(t),t.bypassAuthState)}function RT(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),iT(n,new $c(t),t.bypassAuthState)}async function AT(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),sT(n,new $c(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TT;case"linkViaPopup":case"linkViaRedirect":return AT;case"reauthViaPopup":case"reauthViaRedirect":return RT;default:At(this.auth,"internal-error")}}resolve(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT=new wr(2e3,1e4);class Ps extends Qg{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Ps.currentPopupAction&&Ps.currentPopupAction.cancel(),Ps.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){cn(this.filter.length===1,"Popup operations only handle one event");const e=Uc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ps.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,PT.get())};e()}}Ps.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT="pendingRedirect",Xr=new Map;class xT extends Qg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Xr.get(this.auth._key());if(!e){try{const s=await NT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Xr.set(this.auth._key(),e)}return this.bypassAuthState||Xr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NT(t,e){const n=DT(e),s=MT(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function OT(t,e){Xr.set(t._key(),e)}function MT(t){return en(t._redirectPersistence)}function DT(t){return Jr(kT,t.config.apiKey,t.name)}async function LT(t,e,n=!1){if(dt(t.app))return Promise.reject(nn(t));const s=_s(t),i=ST(s,e),o=await new xT(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT=10*60*1e3;class UT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$T(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Jg(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(jt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FT&&this.cachedEventUids.clear(),this.cachedEventUids.has(mf(e))}saveEventToCache(e){this.cachedEventUids.add(mf(e)),this.lastProcessedEventTime=Date.now()}}function mf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Jg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $T(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jT(t,e={}){return Wn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BT=/^https?/;async function VT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await jT(t);for(const n of e)try{if(WT(n))return}catch{}At(t,"unauthorized-domain")}function WT(t){const e=Dl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!BT.test(n))return!1;if(HT.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const GT=new wr(3e4,6e4);function _f(){const t=Ht().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function KT(t){return new Promise((e,n)=>{var s,i,r;function o(){_f(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_f(),n(jt(t,"network-request-failed"))},timeout:GT.get()})}if(!((i=(s=Ht().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Ht().gapi)===null||r===void 0)&&r.load)o();else{const a=$S("iframefcb");return Ht()[a]=()=>{gapi.load?o():n(jt(t,"network-request-failed"))},Dg(`${US()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Zr=null,e})}let Zr=null;function qT(t){return Zr=Zr||KT(t),Zr}/**
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
 */const zT=new wr(5e3,15e3),YT="__/auth/iframe",QT="emulator/auth/iframe",JT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZT(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Oc(e,QT):`https://${t.config.authDomain}/${YT}`,s={apiKey:e.apiKey,appName:t.name,v:oi},i=XT.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${ri(s).slice(1)}`}async function e0(t){const e=await qT(t),n=Ht().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:ZT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JT,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=jt(t,"network-request-failed"),a=Ht().setTimeout(()=>{r(o)},zT.get());function l(){Ht().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const t0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},n0=500,s0=600,i0="_blank",r0="http://localhost";class vf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function o0(t,e,n,s=n0,i=s0){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},t0),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Ye().toLowerCase();n&&(a=Ag(c)?i0:n),Tg(c)&&(e=e||r0,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[h,m])=>`${f}${h}=${m},`,"");if(PS(c)&&a!=="_self")return a0(e||"",a),new vf(null);const d=window.open(e||"",a,u);K(d,t,"popup-blocked");try{d.focus()}catch{}return new vf(d)}function a0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const l0="__/auth/handler",c0="emulator/auth/handler",u0=encodeURIComponent("fac");async function yf(t,e,n,s,i,r){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:oi,eventId:i};if(e instanceof Ug){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Pl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof Ir){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${u0}=${encodeURIComponent(l)}`:"";return`${d0(t)}?${ri(a).slice(1)}${c}`}function d0({config:t}){return t.emulator?Oc(t,c0):`https://${t.authDomain}/${l0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="webStorageSupport";class f0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gg,this._completeRedirectFn=LT,this._overrideRedirectResult=OT}async _openPopup(e,n,s,i){var r;cn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await yf(e,n,s,Dl(),i);return o0(e,o,Uc())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await yf(e,n,s,Dl(),i);return gT(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(cn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await e0(e),s=new UT(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(za,{type:za},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[za];o!==void 0&&n(!!o),At(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Og()||Rg()||Dc()}}const h0=f0;var bf="@firebase/auth",wf="1.10.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function m0(t){Qs(new cs("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mg(t)},c=new DS(s,i,r,l);return GS(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Qs(new cs("auth-internal",e=>{const n=_s(e.getProvider("auth").getImmediate());return(s=>new p0(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pn(bf,wf,g0(t)),Pn(bf,wf,"esm2017")}/**
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
 */const _0=5*60,v0=lg("authIdTokenMaxAge")||_0;let Ef=null;const y0=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>v0)return;const i=n==null?void 0:n.token;Ef!==i&&(Ef=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Xg(t=gg()){const e=Pc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=WS(t,{popupRedirectResolver:h0,persistence:[CT,fT,Gg]}),s=lg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=y0(r.toString());cT(n,o,()=>o(n.currentUser)),lT(n,a=>o(a))}}const i=og("auth");return i&&KS(n,`http://${i}`),n}function b0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}LS({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=jt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",b0().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});m0("Browser");const w0={},E0={class:"relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 shadow-lg lg:py-4 dark:bg-sky-950","data-te-navbar-ref":""};function I0(t,e){return mt(),jn("nav",E0,[zo(t.$slots,"default")])}const Zg=Hn(w0,[["render",I0]]);function C0(t,e,n){let s=ne(n==null?void 0:n.value),i=se(()=>t.value!==void 0);return[se(()=>i.value?t.value:s.value),function(r){return i.value||(s.value=r),e==null?void 0:e(r)}]}var If;let S0=Symbol("headlessui.useid"),T0=0;const ca=(If=zv)!=null?If:function(){return ze(S0,()=>`${++T0}`)()};function Ce(t){var e;if(t==null||t.value==null)return null;let n=(e=t.value.$el)!=null?e:t.value;return n instanceof Node?n:null}function ua(t,e,...n){if(t in e){let i=e[t];return typeof i=="function"?i(...n):i}let s=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(i=>`"${i}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,ua),s}var R0=Object.defineProperty,A0=(t,e,n)=>e in t?R0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Cf=(t,e,n)=>(A0(t,typeof e!="symbol"?e+"":e,n),n);let P0=class{constructor(){Cf(this,"current",this.detect()),Cf(this,"currentId",0)}set(e){this.current!==e&&(this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},jc=new P0;function Hc(t){if(jc.isServer)return null;if(t instanceof Node)return t.ownerDocument;if(t!=null&&t.hasOwnProperty("value")){let e=Ce(t);if(e)return e.ownerDocument}return document}let $l=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var jl=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t))(jl||{}),k0=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(k0||{}),x0=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(x0||{});function em(t=document.body){return t==null?[]:Array.from(t.querySelectorAll($l)).sort((e,n)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Bc=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(Bc||{});function Vc(t,e=0){var n;return t===((n=Hc(t))==null?void 0:n.body)?!1:ua(e,{0(){return t.matches($l)},1(){let s=t;for(;s!==null;){if(s.matches($l))return!0;s=s.parentElement}return!1}})}function tm(t){let e=Hc(t);ht(()=>{e&&!Vc(e.activeElement,0)&&O0(t)})}var N0=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(N0||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",t=>{t.metaKey||t.altKey||t.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",t=>{t.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:t.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function O0(t){t==null||t.focus({preventScroll:!0})}let M0=["textarea","input"].join(",");function D0(t){var e,n;return(n=(e=t==null?void 0:t.matches)==null?void 0:e.call(t,M0))!=null?n:!1}function nm(t,e=n=>n){return t.slice().sort((n,s)=>{let i=e(n),r=e(s);if(i===null||r===null)return 0;let o=i.compareDocumentPosition(r);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function L0(t,e){return F0(em(),e,{relativeTo:t})}function F0(t,e,{sorted:n=!0,relativeTo:s=null,skipElements:i=[]}={}){var r;let o=(r=Array.isArray(t)?t.length>0?t[0].ownerDocument:document:t==null?void 0:t.ownerDocument)!=null?r:document,a=Array.isArray(t)?n?nm(t):t:em(t);i.length>0&&a.length>1&&(a=a.filter(m=>!i.includes(m))),s=s??o.activeElement;let l=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,a.indexOf(s))-1;if(e&4)return Math.max(0,a.indexOf(s))+1;if(e&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=e&32?{preventScroll:!0}:{},d=0,f=a.length,h;do{if(d>=f||d+f<=0)return 0;let m=c+d;if(e&16)m=(m+f)%f;else{if(m<0)return 3;if(m>=f)return 1}h=a[m],h==null||h.focus(u),d+=l}while(h!==o.activeElement);return e&6&&D0(h)&&h.select(),2}function U0(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function $0(){return/Android/gi.test(window.navigator.userAgent)}function j0(){return U0()||$0()}function $r(t,e,n){jc.isServer||ni(s=>{document.addEventListener(t,e,n),s(()=>document.removeEventListener(t,e,n))})}function H0(t,e,n){jc.isServer||ni(s=>{window.addEventListener(t,e,n),s(()=>window.removeEventListener(t,e,n))})}function B0(t,e,n=se(()=>!0)){function s(r,o){if(!n.value||r.defaultPrevented)return;let a=o(r);if(a===null||!a.getRootNode().contains(a))return;let l=function c(u){return typeof u=="function"?c(u()):Array.isArray(u)||u instanceof Set?u:[u]}(t);for(let c of l){if(c===null)continue;let u=c instanceof HTMLElement?c:Ce(c);if(u!=null&&u.contains(a)||r.composed&&r.composedPath().includes(u))return}return!Vc(a,Bc.Loose)&&a.tabIndex!==-1&&r.preventDefault(),e(r,a)}let i=ne(null);$r("pointerdown",r=>{var o,a;n.value&&(i.value=((a=(o=r.composedPath)==null?void 0:o.call(r))==null?void 0:a[0])||r.target)},!0),$r("mousedown",r=>{var o,a;n.value&&(i.value=((a=(o=r.composedPath)==null?void 0:o.call(r))==null?void 0:a[0])||r.target)},!0),$r("click",r=>{j0()||i.value&&(s(r,()=>i.value),i.value=null)},!0),$r("touchend",r=>s(r,()=>r.target instanceof HTMLElement?r.target:null),!0),H0("blur",r=>s(r,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function Sf(t,e){if(t)return t;let n=e??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function sm(t,e){let n=ne(Sf(t.value.type,t.value.as));return gs(()=>{n.value=Sf(t.value.type,t.value.as)}),ni(()=>{var s;n.value||Ce(e)&&Ce(e)instanceof HTMLButtonElement&&!((s=Ce(e))!=null&&s.hasAttribute("type"))&&(n.value="button")}),n}function Tf(t){return[t.screenX,t.screenY]}function V0(){let t=ne([-1,-1]);return{wasMoved(e){let n=Tf(e);return t.value[0]===n[0]&&t.value[1]===n[1]?!1:(t.value=n,!0)},update(e){t.value=Tf(e)}}}function W0({container:t,accept:e,walk:n,enabled:s}){ni(()=>{let i=t.value;if(!i||s!==void 0&&!s.value)return;let r=Hc(t);if(!r)return;let o=Object.assign(l=>e(l),{acceptNode:e}),a=r.createTreeWalker(i,NodeFilter.SHOW_ELEMENT,o,!1);for(;a.nextNode();)n(a.currentNode)})}var Hl=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(Hl||{}),G0=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(G0||{});function li({visible:t=!0,features:e=0,ourProps:n,theirProps:s,...i}){var r;let o=rm(s,n),a=Object.assign(i,{props:o});if(t||e&2&&o.static)return Ya(a);if(e&1){let l=(r=o.unmount)==null||r?0:1;return ua(l,{0(){return null},1(){return Ya({...i,props:{...o,hidden:!0,style:{display:"none"}}})}})}return Ya(a)}function Ya({props:t,attrs:e,slots:n,slot:s,name:i}){var r,o;let{as:a,...l}=om(t,["unmount","static"]),c=(r=n.default)==null?void 0:r.call(n,s),u={};if(s){let d=!1,f=[];for(let[h,m]of Object.entries(s))typeof m=="boolean"&&(d=!0),m===!0&&f.push(h);d&&(u["data-headlessui-state"]=f.join(" "))}if(a==="template"){if(c=im(c??[]),Object.keys(l).length>0||Object.keys(e).length>0){let[d,...f]=c??[];if(!q0(d)||f.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${i} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(e)).map(_=>_.trim()).filter((_,y,C)=>C.indexOf(_)===y).sort((_,y)=>_.localeCompare(y)).map(_=>`  - ${_}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(_=>`  - ${_}`).join(`
`)].join(`
`));let h=rm((o=d.props)!=null?o:{},l,u),m=an(d,h,!0);for(let _ in h)_.startsWith("on")&&(m.props||(m.props={}),m.props[_]=h[_]);return m}return Array.isArray(c)&&c.length===1?c[0]:c}return On(a,Object.assign({},l,u),{default:()=>c})}function im(t){return t.flatMap(e=>e.type===Me?im(e.children):[e])}function rm(...t){if(t.length===0)return{};if(t.length===1)return t[0];let e={},n={};for(let s of t)for(let i in s)i.startsWith("on")&&typeof s[i]=="function"?(n[i]!=null||(n[i]=[]),n[i].push(s[i])):e[i]=s[i];if(e.disabled||e["aria-disabled"])return Object.assign(e,Object.fromEntries(Object.keys(n).map(s=>[s,void 0])));for(let s in n)Object.assign(e,{[s](i,...r){let o=n[s];for(let a of o){if(i instanceof Event&&i.defaultPrevented)return;a(i,...r)}}});return e}function K0(t){let e=Object.assign({},t);for(let n in e)e[n]===void 0&&delete e[n];return e}function om(t,e=[]){let n=Object.assign({},t);for(let s of e)s in n&&delete n[s];return n}function q0(t){return t==null?!1:typeof t.type=="string"||typeof t.type=="object"||typeof t.type=="function"}var am=(t=>(t[t.None=1]="None",t[t.Focusable=2]="Focusable",t[t.Hidden=4]="Hidden",t))(am||{});let z0=dn({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(t,{slots:e,attrs:n}){return()=>{var s;let{features:i,...r}=t,o={"aria-hidden":(i&2)===2?!0:(s=r["aria-hidden"])!=null?s:void 0,hidden:(i&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(i&4)===4&&(i&2)!==2&&{display:"none"}}};return li({ourProps:o,theirProps:r,slot:{},attrs:n,slots:e,name:"Hidden"})}}}),lm=Symbol("Context");var or=(t=>(t[t.Open=1]="Open",t[t.Closed=2]="Closed",t[t.Closing=4]="Closing",t[t.Opening=8]="Opening",t))(or||{});function Y0(){return ze(lm,null)}function Q0(t){Fs(lm,t)}var Re=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(Re||{});function J0(t){throw new Error("Unexpected object: "+t)}var lt=(t=>(t[t.First=0]="First",t[t.Previous=1]="Previous",t[t.Next=2]="Next",t[t.Last=3]="Last",t[t.Specific=4]="Specific",t[t.Nothing=5]="Nothing",t))(lt||{});function X0(t,e){let n=e.resolveItems();if(n.length<=0)return null;let s=e.resolveActiveIndex(),i=s??-1;switch(t.focus){case 0:{for(let r=0;r<n.length;++r)if(!e.resolveDisabled(n[r],r,n))return r;return s}case 1:{i===-1&&(i=n.length);for(let r=i-1;r>=0;--r)if(!e.resolveDisabled(n[r],r,n))return r;return s}case 2:{for(let r=i+1;r<n.length;++r)if(!e.resolveDisabled(n[r],r,n))return r;return s}case 3:{for(let r=n.length-1;r>=0;--r)if(!e.resolveDisabled(n[r],r,n))return r;return s}case 4:{for(let r=0;r<n.length;++r)if(e.resolveId(n[r],r,n)===t.id)return r;return s}case 5:return null;default:J0(t)}}function Z0(t){var e,n;let s=(e=t==null?void 0:t.form)!=null?e:t.closest("form");if(s){for(let i of s.elements)if(i!==t&&(i.tagName==="INPUT"&&i.type==="submit"||i.tagName==="BUTTON"&&i.type==="submit"||i.nodeName==="INPUT"&&i.type==="image")){i.click();return}(n=s.requestSubmit)==null||n.call(s)}}let Rf=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function Af(t){var e,n;let s=(e=t.innerText)!=null?e:"",i=t.cloneNode(!0);if(!(i instanceof HTMLElement))return s;let r=!1;for(let a of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))a.remove(),r=!0;let o=r?(n=i.innerText)!=null?n:"":s;return Rf.test(o)&&(o=o.replace(Rf,"")),o}function eR(t){let e=t.getAttribute("aria-label");if(typeof e=="string")return e.trim();let n=t.getAttribute("aria-labelledby");if(n){let s=n.split(" ").map(i=>{let r=document.getElementById(i);if(r){let o=r.getAttribute("aria-label");return typeof o=="string"?o.trim():Af(r).trim()}return null}).filter(Boolean);if(s.length>0)return s.join(", ")}return Af(t).trim()}function tR(t){let e=ne(""),n=ne("");return()=>{let s=Ce(t);if(!s)return"";let i=s.innerText;if(e.value===i)return n.value;let r=eR(s).trim().toLowerCase();return e.value=i,n.value=r,r}}var nR=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(nR||{}),sR=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(sR||{});function iR(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let cm=Symbol("MenuContext");function da(t){let e=ze(cm,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,da),n}return e}let rR=dn({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:e,attrs:n}){let s=ne(1),i=ne(null),r=ne(null),o=ne([]),a=ne(""),l=ne(null),c=ne(1);function u(f=h=>h){let h=l.value!==null?o.value[l.value]:null,m=nm(f(o.value.slice()),y=>Ce(y.dataRef.domRef)),_=h?m.indexOf(h):null;return _===-1&&(_=null),{items:m,activeItemIndex:_}}let d={menuState:s,buttonRef:i,itemsRef:r,items:o,searchQuery:a,activeItemIndex:l,activationTrigger:c,closeMenu:()=>{s.value=1,l.value=null},openMenu:()=>s.value=0,goToItem(f,h,m){let _=u(),y=X0(f===lt.Specific?{focus:lt.Specific,id:h}:{focus:f},{resolveItems:()=>_.items,resolveActiveIndex:()=>_.activeItemIndex,resolveId:C=>C.id,resolveDisabled:C=>C.dataRef.disabled});a.value="",l.value=y,c.value=m??1,o.value=_.items},search(f){let h=a.value!==""?0:1;a.value+=f.toLowerCase();let m=(l.value!==null?o.value.slice(l.value+h).concat(o.value.slice(0,l.value+h)):o.value).find(y=>y.dataRef.textValue.startsWith(a.value)&&!y.dataRef.disabled),_=m?o.value.indexOf(m):-1;_===-1||_===l.value||(l.value=_,c.value=1)},clearSearch(){a.value=""},registerItem(f,h){let m=u(_=>[..._,{id:f,dataRef:h}]);o.value=m.items,l.value=m.activeItemIndex,c.value=1},unregisterItem(f){let h=u(m=>{let _=m.findIndex(y=>y.id===f);return _!==-1&&m.splice(_,1),m});o.value=h.items,l.value=h.activeItemIndex,c.value=1}};return B0([i,r],(f,h)=>{var m;d.closeMenu(),Vc(h,Bc.Loose)||(f.preventDefault(),(m=Ce(i))==null||m.focus())},se(()=>s.value===0)),Fs(cm,d),Q0(se(()=>ua(s.value,{0:or.Open,1:or.Closed}))),()=>{let f={open:s.value===0,close:d.closeMenu};return li({ourProps:{},theirProps:t,slot:f,slots:e,attrs:n,name:"Menu"})}}}),oR=dn({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(t,{attrs:e,slots:n,expose:s}){var i;let r=(i=t.id)!=null?i:`headlessui-menu-button-${ca()}`,o=da("MenuButton");s({el:o.buttonRef,$el:o.buttonRef});function a(d){switch(d.key){case Re.Space:case Re.Enter:case Re.ArrowDown:d.preventDefault(),d.stopPropagation(),o.openMenu(),ht(()=>{var f;(f=Ce(o.itemsRef))==null||f.focus({preventScroll:!0}),o.goToItem(lt.First)});break;case Re.ArrowUp:d.preventDefault(),d.stopPropagation(),o.openMenu(),ht(()=>{var f;(f=Ce(o.itemsRef))==null||f.focus({preventScroll:!0}),o.goToItem(lt.Last)});break}}function l(d){switch(d.key){case Re.Space:d.preventDefault();break}}function c(d){t.disabled||(o.menuState.value===0?(o.closeMenu(),ht(()=>{var f;return(f=Ce(o.buttonRef))==null?void 0:f.focus({preventScroll:!0})})):(d.preventDefault(),o.openMenu(),iR(()=>{var f;return(f=Ce(o.itemsRef))==null?void 0:f.focus({preventScroll:!0})})))}let u=sm(se(()=>({as:t.as,type:e.type})),o.buttonRef);return()=>{var d;let f={open:o.menuState.value===0},{...h}=t,m={ref:o.buttonRef,id:r,type:u.value,"aria-haspopup":"menu","aria-controls":(d=Ce(o.itemsRef))==null?void 0:d.id,"aria-expanded":o.menuState.value===0,onKeydown:a,onKeyup:l,onClick:c};return li({ourProps:m,theirProps:h,slot:f,attrs:e,slots:n,name:"MenuButton"})}}}),aR=dn({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(t,{attrs:e,slots:n,expose:s}){var i;let r=(i=t.id)!=null?i:`headlessui-menu-items-${ca()}`,o=da("MenuItems"),a=ne(null);s({el:o.itemsRef,$el:o.itemsRef}),W0({container:se(()=>Ce(o.itemsRef)),enabled:se(()=>o.menuState.value===0),accept(f){return f.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:f.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(f){f.setAttribute("role","none")}});function l(f){var h;switch(a.value&&clearTimeout(a.value),f.key){case Re.Space:if(o.searchQuery.value!=="")return f.preventDefault(),f.stopPropagation(),o.search(f.key);case Re.Enter:if(f.preventDefault(),f.stopPropagation(),o.activeItemIndex.value!==null){let m=o.items.value[o.activeItemIndex.value];(h=Ce(m.dataRef.domRef))==null||h.click()}o.closeMenu(),tm(Ce(o.buttonRef));break;case Re.ArrowDown:return f.preventDefault(),f.stopPropagation(),o.goToItem(lt.Next);case Re.ArrowUp:return f.preventDefault(),f.stopPropagation(),o.goToItem(lt.Previous);case Re.Home:case Re.PageUp:return f.preventDefault(),f.stopPropagation(),o.goToItem(lt.First);case Re.End:case Re.PageDown:return f.preventDefault(),f.stopPropagation(),o.goToItem(lt.Last);case Re.Escape:f.preventDefault(),f.stopPropagation(),o.closeMenu(),ht(()=>{var m;return(m=Ce(o.buttonRef))==null?void 0:m.focus({preventScroll:!0})});break;case Re.Tab:f.preventDefault(),f.stopPropagation(),o.closeMenu(),ht(()=>L0(Ce(o.buttonRef),f.shiftKey?jl.Previous:jl.Next));break;default:f.key.length===1&&(o.search(f.key),a.value=setTimeout(()=>o.clearSearch(),350));break}}function c(f){switch(f.key){case Re.Space:f.preventDefault();break}}let u=Y0(),d=se(()=>u!==null?(u.value&or.Open)===or.Open:o.menuState.value===0);return()=>{var f,h;let m={open:o.menuState.value===0},{..._}=t,y={"aria-activedescendant":o.activeItemIndex.value===null||(f=o.items.value[o.activeItemIndex.value])==null?void 0:f.id,"aria-labelledby":(h=Ce(o.buttonRef))==null?void 0:h.id,id:r,onKeydown:l,onKeyup:c,role:"menu",tabIndex:0,ref:o.itemsRef};return li({ourProps:y,theirProps:_,slot:m,attrs:e,slots:n,features:Hl.RenderStrategy|Hl.Static,visible:d.value,name:"MenuItems"})}}}),lR=dn({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(t,{slots:e,attrs:n,expose:s}){var i;let r=(i=t.id)!=null?i:`headlessui-menu-item-${ca()}`,o=da("MenuItem"),a=ne(null);s({el:a,$el:a});let l=se(()=>o.activeItemIndex.value!==null?o.items.value[o.activeItemIndex.value].id===r:!1),c=tR(a),u=se(()=>({disabled:t.disabled,get textValue(){return c()},domRef:a}));gs(()=>o.registerItem(r,u)),hc(()=>o.unregisterItem(r)),ni(()=>{o.menuState.value===0&&l.value&&o.activationTrigger.value!==0&&ht(()=>{var C,b;return(b=(C=Ce(a))==null?void 0:C.scrollIntoView)==null?void 0:b.call(C,{block:"nearest"})})});function d(C){if(t.disabled)return C.preventDefault();o.closeMenu(),tm(Ce(o.buttonRef))}function f(){if(t.disabled)return o.goToItem(lt.Nothing);o.goToItem(lt.Specific,r)}let h=V0();function m(C){h.update(C)}function _(C){h.wasMoved(C)&&(t.disabled||l.value||o.goToItem(lt.Specific,r,0))}function y(C){h.wasMoved(C)&&(t.disabled||l.value&&o.goToItem(lt.Nothing))}return()=>{let{disabled:C,...b}=t,R={active:l.value,disabled:C,close:o.closeMenu};return li({ourProps:{id:r,ref:a,role:"menuitem",tabIndex:C===!0?void 0:-1,"aria-disabled":C===!0?!0:void 0,onClick:d,onFocus:f,onPointerenter:m,onMouseenter:m,onPointermove:_,onMousemove:_,onPointerleave:y,onMouseleave:y},theirProps:{...n,...b},slot:R,attrs:n,slots:e,name:"MenuItem"})}}}),cR=Symbol("GroupContext"),uR=dn({name:"Switch",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:null},disabled:{type:Boolean,default:!1},tabIndex:{type:Number,default:0}},inheritAttrs:!1,setup(t,{emit:e,attrs:n,slots:s,expose:i}){var r;let o=(r=t.id)!=null?r:`headlessui-switch-${ca()}`,a=ze(cR,null),[l,c]=C0(se(()=>t.modelValue),b=>e("update:modelValue",b),se(()=>t.defaultChecked));function u(){c(!l.value)}let d=ne(null),f=a===null?d:a.switchRef,h=sm(se(()=>({as:t.as,type:n.type})),f);i({el:f,$el:f});function m(b){b.preventDefault(),u()}function _(b){b.key===Re.Space?(b.preventDefault(),u()):b.key===Re.Enter&&Z0(b.currentTarget)}function y(b){b.preventDefault()}let C=se(()=>{var b,R;return(R=(b=Ce(f))==null?void 0:b.closest)==null?void 0:R.call(b,"form")});return gs(()=>{$t([C],()=>{if(!C.value||t.defaultChecked===void 0)return;function b(){c(t.defaultChecked)}return C.value.addEventListener("reset",b),()=>{var R;(R=C.value)==null||R.removeEventListener("reset",b)}},{immediate:!0})}),()=>{let{name:b,value:R,form:T,tabIndex:V,...U}=t,W={checked:l.value},ee={id:o,ref:f,role:"switch",type:h.value,tabIndex:V===-1?0:V,"aria-checked":l.value,"aria-labelledby":a==null?void 0:a.labelledby.value,"aria-describedby":a==null?void 0:a.describedby.value,onClick:m,onKeyup:_,onKeypress:y};return On(Me,[b!=null&&l.value!=null?On(z0,K0({features:am.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:l.value,form:T,disabled:U.disabled,name:b,value:R})):null,li({ourProps:ee,theirProps:{...n,...om(U,["modelValue","defaultChecked"])},slot:W,attrs:n,slots:s,name:"Switch"})])}}});function um(t){return Eh()?(lv(t),!0):!1}function Js(t){return typeof t=="function"?t():ns(t)}const dR=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const fR=Object.prototype.toString,hR=t=>fR.call(t)==="[object Object]",dm=()=>{};function pR(t,e){function n(...s){return new Promise((i,r)=>{Promise.resolve(t(()=>e.apply(this,s),{fn:e,thisArg:this,args:s})).then(i).catch(r)})}return n}const fm=t=>t();function gR(t=fm){const e=ne(!0);function n(){e.value=!1}function s(){e.value=!0}const i=(...r)=>{e.value&&t(...r)};return{isActive:Wo(e),pause:n,resume:s,eventFilter:i}}function mR(t){return Jo()}function _R(...t){if(t.length!==1)return Dv(...t);const e=t[0];return typeof e=="function"?Wo(Nv(()=>({get:e,set:dm}))):ne(e)}function vR(t,e,n={}){const{eventFilter:s=fm,...i}=n;return $t(t,pR(s,e),i)}function yR(t,e,n={}){const{eventFilter:s,...i}=n,{eventFilter:r,pause:o,resume:a,isActive:l}=gR(s);return{stop:vR(t,e,{...i,eventFilter:r}),pause:o,resume:a,isActive:l}}function hm(t,e=!0,n){mR()?gs(t,n):e?t():ht(t)}function bR(t=!1,e={}){const{truthyValue:n=!0,falsyValue:s=!1}=e,i=ke(t),r=ne(t);function o(a){if(arguments.length)return r.value=a,r.value;{const l=Js(n);return r.value=r.value===l?Js(s):l,r.value}}return i?o:[r,o]}function pm(t){var e;const n=Js(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Xs=dR?window:void 0;function Pf(...t){let e,n,s,i;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,s,i]=t,e=Xs):[e,n,s,i]=t,!e)return dm;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const r=[],o=()=>{r.forEach(u=>u()),r.length=0},a=(u,d,f,h)=>(u.addEventListener(d,f,h),()=>u.removeEventListener(d,f,h)),l=$t(()=>[pm(e),Js(i)],([u,d])=>{if(o(),!u)return;const f=hR(d)?{...d}:d;r.push(...n.flatMap(h=>s.map(m=>a(u,h,m,f))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return um(c),c}function wR(){const t=ne(!1),e=Jo();return e&&gs(()=>{t.value=!0},e),t}function ER(t){const e=wR();return se(()=>(e.value,!!t()))}function IR(t,e={}){const{window:n=Xs}=e,s=ER(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let i;const r=ne(!1),o=c=>{r.value=c.matches},a=()=>{i&&("removeEventListener"in i?i.removeEventListener("change",o):i.removeListener(o))},l=ni(()=>{s.value&&(a(),i=n.matchMedia(Js(t)),"addEventListener"in i?i.addEventListener("change",o):i.addListener(o),r.value=i.matches)});return um(()=>{l(),a(),i=void 0}),r}const jr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Hr="__vueuse_ssr_handlers__",CR=SR();function SR(){return Hr in jr||(jr[Hr]=jr[Hr]||{}),jr[Hr]}function gm(t,e){return CR[t]||e}function TR(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const RR={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},kf="vueuse-storage";function AR(t,e,n,s={}){var i;const{flush:r="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:d=Xs,eventFilter:f,onError:h=N=>{console.error(N)},initOnMounted:m}=s,_=(u?Uh:ne)(typeof e=="function"?e():e);if(!n)try{n=gm("getDefaultStorage",()=>{var N;return(N=Xs)==null?void 0:N.localStorage})()}catch(N){h(N)}if(!n)return _;const y=Js(e),C=TR(y),b=(i=s.serializer)!=null?i:RR[C],{pause:R,resume:T}=yR(_,()=>U(_.value),{flush:r,deep:o,eventFilter:f});d&&a&&hm(()=>{Pf(d,"storage",ee),Pf(d,kf,j),m&&ee()}),m||ee();function V(N,Q){d&&d.dispatchEvent(new CustomEvent(kf,{detail:{key:t,oldValue:N,newValue:Q,storageArea:n}}))}function U(N){try{const Q=n.getItem(t);if(N==null)V(Q,null),n.removeItem(t);else{const L=b.write(N);Q!==L&&(n.setItem(t,L),V(Q,L))}}catch(Q){h(Q)}}function W(N){const Q=N?N.newValue:n.getItem(t);if(Q==null)return l&&y!=null&&n.setItem(t,b.write(y)),y;if(!N&&c){const L=b.read(Q);return typeof c=="function"?c(L,y):C==="object"&&!Array.isArray(L)?{...y,...L}:L}else return typeof Q!="string"?Q:b.read(Q)}function ee(N){if(!(N&&N.storageArea!==n)){if(N&&N.key==null){_.value=y;return}if(!(N&&N.key!==t)){R();try{(N==null?void 0:N.newValue)!==b.write(_.value)&&(_.value=W(N))}catch(Q){h(Q)}finally{N?ht(T):T()}}}}function j(N){ee(N.detail)}return _}function mm(t){return IR("(prefers-color-scheme: dark)",t)}function PR(t={}){const{selector:e="html",attribute:n="class",initialValue:s="auto",window:i=Xs,storage:r,storageKey:o="vueuse-color-scheme",listenToStorageChanges:a=!0,storageRef:l,emitAuto:c,disableTransition:u=!0}=t,d={auto:"",light:"light",dark:"dark",...t.modes||{}},f=mm({window:i}),h=se(()=>f.value?"dark":"light"),m=l||(o==null?_R(s):AR(o,s,r,{window:i,listenToStorageChanges:a})),_=se(()=>m.value==="auto"?h.value:m.value),y=gm("updateHTMLAttrs",(T,V,U)=>{const W=typeof T=="string"?i==null?void 0:i.document.querySelector(T):pm(T);if(!W)return;let ee;if(u&&(ee=i.document.createElement("style"),ee.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),i.document.head.appendChild(ee)),V==="class"){const j=U.split(/\s/g);Object.values(d).flatMap(N=>(N||"").split(/\s/g)).filter(Boolean).forEach(N=>{j.includes(N)?W.classList.add(N):W.classList.remove(N)})}else W.setAttribute(V,U);u&&(i.getComputedStyle(ee).opacity,document.head.removeChild(ee))});function C(T){var V;y(e,n,(V=d[T])!=null?V:T)}function b(T){t.onChanged?t.onChanged(T,C):C(T)}$t(_,b,{flush:"post",immediate:!0}),hm(()=>b(_.value));const R=se({get(){return c?m.value:_.value},set(T){m.value=T}});try{return Object.assign(R,{store:m,system:h,state:_})}catch{return R}}function kR(t={}){const{valueDark:e="dark",valueLight:n="",window:s=Xs}=t,i=PR({...t,onChanged:(a,l)=>{var c;t.onChanged?(c=t.onChanged)==null||c.call(t,a==="dark",l,a):l(a)},modes:{dark:e,light:n}}),r=se(()=>i.system?i.system.value:mm({window:s}).value?"dark":"light");return se({get(){return i.value==="dark"},set(a){const l=a?"dark":"light";r.value===l?i.value="auto":i.value=l}})}const xR={components:{LoginComponent:wI,ErrorMessage:SI,BaseHeader:Zg,Icon:tg,Menu:rR,MenuButton:oR,MenuItems:aR,MenuItem:lR,Switch:uR},setup(){const t=hE(),e=ne(),n=kR(),s=bR(n),i=Xg();function r(o){const a=ne(o[0]),l=ne(o[1]),c=ne(o[2]);e.value="",c.value==="Entrar"?aT(i,a.value,l.value).then(()=>{t.replace("/tasks")}).catch(u=>{switch(u.code){case"auth/invalid-email":e.value="Invalid email";break;case"auth/user-not-found":e.value="No account with that email was found";break;case"auth/wrong-password":e.value="Incorrect password";break;default:e.value="Email or password was incorrect";break}}):c.value==="Inscrever-se"&&oT(i,a.value,l.value).then(()=>{alert("Usuario Criado com sucesso!")}).catch(u=>{console.log(u.code),alert(u.message)})}return{signupOrLogin:r,errMsg:e,isDark:n,toggleDark:s}}},NR={class:"flex"};function OR(t,e,n,s,i,r){const o=_t("Icon"),a=_t("Switch"),l=_t("base-header"),c=_t("login-component"),u=_t("error-message"),d=_t("content-box");return mt(),jn(Me,null,[_e(l,null,{default:yt(()=>[e[2]||(e[2]=be("div",{class:"py-0 px-3 font-semibold dark:text-white"},"Task Project",-1)),be("div",NR,[_e(o,{icon:"iconamoon:mode-light",color:"black",width:"26",height:"26"}),_e(a,{onClick:e[0]||(e[0]=f=>s.toggleDark()),modelValue:s.isDark,"onUpdate:modelValue":e[1]||(e[1]=f=>s.isDark=f),class:Wi([s.isDark?"bg-gray-900":"bg-gray-700","relative inline-flex h-6 w-11 items-center rounded-full transition-colors"])},{default:yt(()=>[be("span",{class:Wi([s.isDark?"translate-x-6":"translate-x-1","inline-block h-4 w-4 transform rounded-full bg-white transition-transform"])},null,2)]),_:1},8,["modelValue","class"]),_e(o,{icon:"material-symbols:dark-mode-outline",color:"black",width:"26",height:"26"})])]),_:1,__:[2]}),_e(d,null,{default:yt(()=>[e[3]||(e[3]=be("h1",{class:"font-semibold text-3xl p-4 dark:text-white"},"Task Project",-1)),e[4]||(e[4]=be("h3",{class:"font-medium text-2xl p-2 dark:text-white"}," Faça login ou crie uma conta para começar a acompanhar suas tarefas! ",-1)),_e(c,{onEmitUser:s.signupOrLogin},null,8,["onEmitUser"]),s.errMsg?(mt(),co(u,{key:0},{default:yt(()=>[ss(no(s.errMsg),1)]),_:1})):$y("",!0)]),_:1,__:[3,4]})],64)}const MR=Hn(xR,[["render",OR]]),DR={},LR={class:"rounded-xl shadow-md p-10 w-fit mx-auto m-32-auto place-content-center grid place-items-center dark:bg-sky-950"};function FR(t,e){return mt(),jn(Me,null,[e[0]||(e[0]=be("br",null,null,-1)),be("div",LR,[zo(t.$slots,"default")])],64)}const _m=Hn(DR,[["render",FR]]),UR={components:{ContentBox:_m,BaseHeader:Zg}},$R={class:"dark:text-white"};function jR(t,e,n,s,i,r){const o=_t("base-header"),a=_t("router-link"),l=_t("content-box");return mt(),jn(Me,null,[_e(o,null,{default:yt(()=>e[0]||(e[0]=[be("div",{class:"py-0 px-3 font-semibold dark:text-white"},"Task Project",-1)])),_:1,__:[0]}),be("section",null,[_e(l,{class:"dark:bg-sky-950"},{default:yt(()=>[e[4]||(e[4]=be("h2",{class:"font-semibold p-4 dark:text-white"},"Page Not Found",-1)),be("div",$R,[e[2]||(e[2]=ss(" This page could not be found - do you want to return to ")),_e(a,{to:"/login",class:"underline underline-offset-2"},{default:yt(()=>e[1]||(e[1]=[ss("login")])),_:1,__:[1]}),e[3]||(e[3]=ss("? "))])]),_:1,__:[4]})])],64)}const HR=Hn(UR,[["render",jR]]),BR=dE({history:jw(),routes:[{path:"/",redirect:"login"},{path:"/login",component:MR},{path:"/tasks",name:"Tasks",component:()=>ew(()=>import("./TaskBody-LYYeXg0q.js"),__vite__mapDeps([0,1])),meta:{requiresAuth:!0}},{path:"/:notFound(.*)",component:HR}]});/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var vm="store";function Bx(t){return t===void 0&&(t=null),ze(t!==null?t:vm)}function ci(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function VR(t){return t!==null&&typeof t=="object"}function WR(t){return t&&typeof t.then=="function"}function GR(t,e){return function(){return t(e)}}function ym(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function bm(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;fa(t,n,[],t._modules.root,!0),Wc(t,n,e)}function Wc(t,e,n){var s=t._state,i=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,o={},a={},l=av(!0);l.run(function(){ci(r,function(c,u){o[u]=GR(c,t),a[u]=se(function(){return o[u]()}),Object.defineProperty(t.getters,u,{get:function(){return a[u].value},enumerable:!0})})}),t._state=_r({data:e}),t._scope=l,t.strict&&QR(t),s&&n&&t._withCommit(function(){s.data=null}),i&&i.stop()}function fa(t,e,n,s,i){var r=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!r&&!i){var a=Gc(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){a[l]=s.state})}var c=s.context=KR(t,o,n);s.forEachMutation(function(u,d){var f=o+d;qR(t,f,u,c)}),s.forEachAction(function(u,d){var f=u.root?d:o+d,h=u.handler||u;zR(t,f,h,c)}),s.forEachGetter(function(u,d){var f=o+d;YR(t,f,u,c)}),s.forEachChild(function(u,d){fa(t,e,n.concat(d),u,i)})}function KR(t,e,n){var s=e==="",i={dispatch:s?t.dispatch:function(r,o,a){var l=Co(r,o,a),c=l.payload,u=l.options,d=l.type;return(!u||!u.root)&&(d=e+d),t.dispatch(d,c)},commit:s?t.commit:function(r,o,a){var l=Co(r,o,a),c=l.payload,u=l.options,d=l.type;(!u||!u.root)&&(d=e+d),t.commit(d,c,u)}};return Object.defineProperties(i,{getters:{get:s?function(){return t.getters}:function(){return wm(t,e)}},state:{get:function(){return Gc(t.state,n)}}}),i}function wm(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(i){if(i.slice(0,s)===e){var r=i.slice(s);Object.defineProperty(n,r,{get:function(){return t.getters[i]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function qR(t,e,n,s){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(o){n.call(t,s.state,o)})}function zR(t,e,n,s){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(o){var a=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return WR(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):a})}function YR(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(r){return n(s.state,s.getters,r.state,r.getters)})}function QR(t){$t(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Gc(t,e){return e.reduce(function(n,s){return n[s]},t)}function Co(t,e,n){return VR(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var JR="vuex bindings",xf="vuex:mutations",Qa="vuex:actions",Cs="vuex",XR=0;function ZR(t,e){lw({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[JR]},function(n){n.addTimelineLayer({id:xf,label:"Vuex Mutations",color:Nf}),n.addTimelineLayer({id:Qa,label:"Vuex Actions",color:Nf}),n.addInspector({id:Cs,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===Cs)if(s.filter){var i=[];Sm(i,e._modules.root,s.filter,""),s.rootNodes=i}else s.rootNodes=[Cm(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===Cs){var i=s.nodeId;wm(e,i),s.state=nA(iA(e._modules,i),i==="root"?e.getters:e._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===Cs){var i=s.nodeId,r=s.path;i!=="root"&&(r=i.split("/").filter(Boolean).concat(r)),e._withCommit(function(){s.set(e._state.data,r,s.state.value)})}}),e.subscribe(function(s,i){var r={};s.payload&&(r.payload=s.payload),r.state=i,n.notifyComponentUpdate(),n.sendInspectorTree(Cs),n.sendInspectorState(Cs),n.addTimelineEvent({layerId:xf,event:{time:Date.now(),title:s.type,data:r}})}),e.subscribeAction({before:function(s,i){var r={};s.payload&&(r.payload=s.payload),s._id=XR++,s._time=Date.now(),r.state=i,n.addTimelineEvent({layerId:Qa,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:r}})},after:function(s,i){var r={},o=Date.now()-s._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(r.payload=s.payload),r.state=i,n.addTimelineEvent({layerId:Qa,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:r}})}})})}var Nf=8702998,eA=6710886,tA=16777215,Em={label:"namespaced",textColor:tA,backgroundColor:eA};function Im(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Cm(t,e){return{id:e||"root",label:Im(e),tags:t.namespaced?[Em]:[],children:Object.keys(t._children).map(function(n){return Cm(t._children[n],e+n+"/")})}}function Sm(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[Em]:[]}),Object.keys(e._children).forEach(function(i){Sm(t,e._children[i],n,s+i+"/")})}function nA(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),i={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var r=sA(e);i.getters=Object.keys(r).map(function(o){return{key:o.endsWith("/")?Im(o):o,editable:!1,value:Bl(function(){return r[o]})}})}return i}function sA(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var i=e,r=s.pop();s.forEach(function(o){i[o]||(i[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),i=i[o]._custom.value}),i[r]=Bl(function(){return t[n]})}else e[n]=Bl(function(){return t[n]})}),e}function iA(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,i,r){var o=s[i];if(!o)throw new Error('Missing module "'+i+'" for path "'+e+'".');return r===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Bl(t){try{return t()}catch(e){return e}}var Pt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},Tm={namespaced:{configurable:!0}};Tm.namespaced.get=function(){return!!this._rawModule.namespaced};Pt.prototype.addChild=function(e,n){this._children[e]=n};Pt.prototype.removeChild=function(e){delete this._children[e]};Pt.prototype.getChild=function(e){return this._children[e]};Pt.prototype.hasChild=function(e){return e in this._children};Pt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Pt.prototype.forEachChild=function(e){ci(this._children,e)};Pt.prototype.forEachGetter=function(e){this._rawModule.getters&&ci(this._rawModule.getters,e)};Pt.prototype.forEachAction=function(e){this._rawModule.actions&&ci(this._rawModule.actions,e)};Pt.prototype.forEachMutation=function(e){this._rawModule.mutations&&ci(this._rawModule.mutations,e)};Object.defineProperties(Pt.prototype,Tm);var vs=function(e){this.register([],e,!1)};vs.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};vs.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,i){return n=n.getChild(i),s+(n.namespaced?i+"/":"")},"")};vs.prototype.update=function(e){Rm([],this.root,e)};vs.prototype.register=function(e,n,s){var i=this;s===void 0&&(s=!0);var r=new Pt(n,s);if(e.length===0)this.root=r;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],r)}n.modules&&ci(n.modules,function(a,l){i.register(e.concat(l),a,s)})};vs.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],i=n.getChild(s);i&&i.runtime&&n.removeChild(s)};vs.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function Rm(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;Rm(t.concat(s),e.getChild(s),n.modules[s])}}function rA(t){return new st(t)}var st=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var i=e.strict;i===void 0&&(i=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new vs(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=r;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(f,h){return l.call(o,f,h)},this.commit=function(f,h,m){return c.call(o,f,h,m)},this.strict=i;var u=this._modules.root.state;fa(this,u,[],this._modules.root),Wc(this,u),s.forEach(function(d){return d(n)})},Kc={state:{configurable:!0}};st.prototype.install=function(e,n){e.provide(n||vm,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&ZR(e,this)};Kc.state.get=function(){return this._state.data};Kc.state.set=function(t){};st.prototype.commit=function(e,n,s){var i=this,r=Co(e,n,s),o=r.type,a=r.payload,l={type:o,payload:a},c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(d){d(a)})}),this._subscribers.slice().forEach(function(u){return u(l,i.state)}))};st.prototype.dispatch=function(e,n){var s=this,i=Co(e,n),r=i.type,o=i.payload,a={type:r,payload:o},l=this._actions[r];if(l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,s.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,d){c.then(function(f){try{s._actionSubscribers.filter(function(h){return h.after}).forEach(function(h){return h.after(a,s.state)})}catch{}u(f)},function(f){try{s._actionSubscribers.filter(function(h){return h.error}).forEach(function(h){return h.error(a,s.state,f)})}catch{}d(f)})})}};st.prototype.subscribe=function(e,n){return ym(e,this._subscribers,n)};st.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return ym(s,this._actionSubscribers,n)};st.prototype.watch=function(e,n,s){var i=this;return $t(function(){return e(i.state,i.getters)},n,Object.assign({},s))};st.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};st.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),fa(this,this.state,e,this._modules.get(e),s.preserveState),Wc(this,this.state)};st.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=Gc(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),bm(this)};st.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};st.prototype.hotUpdate=function(e){this._modules.update(e),bm(this,!0)};st.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(st.prototype,Kc);var oA="firebase",aA="11.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pn(oA,aA,"app");var Of={};const Mf="@firebase/database",Df="1.0.19";/**
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
 */let Am="";function lA(t){Am=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ae(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:nr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Vt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new cA(e)}}catch{}return new uA},Zn=Pm("localStorage"),dA=Pm("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=new Rc("@firebase/database"),fA=function(){let t=1;return function(){return t++}}(),km=function(t){const e=eC(t),n=new QI;n.update(e);const s=n.digest();return Ic.encodeByteArray(s)},Sr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Sr.apply(null,s):typeof s=="object"?e+=Ae(s):e+=s,e+=" "}return e};let $i=null,Lf=!0;const hA=function(t,e){P(!0,"Can't turn on custom loggers persistently."),Bs.logLevel=fe.VERBOSE,$i=Bs.log.bind(Bs)},Be=function(...t){if(Lf===!0&&(Lf=!1,$i===null&&dA.get("logging_enabled")===!0&&hA()),$i){const e=Sr.apply(null,t);$i(e)}},Tr=function(t){return function(...e){Be(t,...e)}},Vl=function(...t){const e="FIREBASE INTERNAL ERROR: "+Sr(...t);Bs.error(e)},un=function(...t){const e=`FIREBASE FATAL ERROR: ${Sr(...t)}`;throw Bs.error(e),new Error(e)},tt=function(...t){const e="FIREBASE WARNING: "+Sr(...t);Bs.warn(e)},pA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&tt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},qc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},gA=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},fs="[MIN_NAME]",Dn="[MAX_NAME]",ui=function(t,e){if(t===e)return 0;if(t===fs||e===Dn)return-1;if(e===fs||t===Dn)return 1;{const n=Ff(t),s=Ff(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},mA=function(t,e){return t===e?0:t<e?-1:1},wi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ae(e))},zc=function(t){if(typeof t!="object"||t===null)return Ae(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ae(e[s]),n+=":",n+=zc(t[e[s]]);return n+="}",n},xm=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function nt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Nm=function(t){P(!qc(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},_A=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},vA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function yA(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const bA=new RegExp("^-?(0*)\\d{1,10}$"),wA=-2147483648,EA=2147483647,Ff=function(t){if(bA.test(t)){const e=Number(t);if(e>=wA&&e<=EA)return e}return null},di=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw tt("Exception was thrown by user callback.",n),e},Math.floor(0))}},IA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ji=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class CA{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,dt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){tt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Be("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',tt(e)}}class eo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}eo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="5",Om="v",Mm="s",Dm="r",Lm="f",Fm=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Um="ls",$m="p",Wl="ac",jm="websocket",Hm="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Zn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Zn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function TA(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Vm(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let s;if(e===jm)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Hm)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);TA(t)&&(n.ns=t.namespace);const i=[];return nt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(){this.counters_={}}incrementCounter(e,n=1){Vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return PI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja={},Xa={};function Qc(t){const e=t.toString();return Ja[e]||(Ja[e]=new RA),Ja[e]}function AA(t,e){const n=t.toString();return Xa[n]||(Xa[n]=e()),Xa[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&di(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf="start",kA="close",xA="pLPCommand",NA="pRTLPCB",Wm="id",Gm="pw",Km="ser",OA="cb",MA="seg",DA="ts",LA="d",FA="dframe",qm=1870,zm=30,UA=qm-zm,$A=25e3,jA=3e4;class ks{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Tr(e),this.stats_=Qc(n),this.urlFn=l=>(this.appCheckToken&&(l[Wl]=this.appCheckToken),Vm(n,Hm,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new PA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(jA)),gA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Jc((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Uf)this.id=a,this.password=l;else if(o===kA)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Uf]="t",s[Km]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[OA]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Om]=Yc,this.transportSessionId&&(s[Mm]=this.transportSessionId),this.lastSessionId&&(s[Um]=this.lastSessionId),this.applicationId&&(s[$m]=this.applicationId),this.appCheckToken&&(s[Wl]=this.appCheckToken),typeof location<"u"&&location.hostname&&Fm.test(location.hostname)&&(s[Dm]=Lm);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ks.forceAllow_=!0}static forceDisallow(){ks.forceDisallow_=!0}static isAvailable(){return ks.forceAllow_?!0:!ks.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!_A()&&!vA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ig(n),i=xm(s,UA);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[FA]="t",s[Wm]=e,s[Gm]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ae(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Jc{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=fA(),window[xA+this.uniqueCallbackIdentifier]=e,window[NA+this.uniqueCallbackIdentifier]=n,this.myIFrame=Jc.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Be("frame writing exception"),a.stack&&Be(a.stack),Be(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Be("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Wm]=this.myID,e[Gm]=this.myPW,e[Km]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+zm+s.length<=qm;){const o=this.pendingSegs.shift();s=s+"&"+MA+i+"="+o.seg+"&"+DA+i+"="+o.ts+"&"+LA+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor($A)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Be("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA=16384,BA=45e3;let So=null;typeof MozWebSocket<"u"?So=MozWebSocket:typeof WebSocket<"u"&&(So=WebSocket);class vt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Tr(this.connId),this.stats_=Qc(n),this.connURL=vt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Om]=Yc,typeof location<"u"&&location.hostname&&Fm.test(location.hostname)&&(o[Dm]=Lm),n&&(o[Mm]=n),s&&(o[Um]=s),i&&(o[Wl]=i),r&&(o[$m]=r),Vm(e,jm,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Zn.set("previous_websocket_failure",!0);try{let s;BI(),this.mySock=new So(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){vt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&So!==null&&!vt.forceDisallow_}static previouslyFailed(){return Zn.isInMemoryStorage||Zn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Zn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=nr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=xm(n,HA);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(BA))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}vt.responsesRequiredToBeHealthy=2;vt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{static get ALL_TRANSPORTS(){return[ks,vt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=vt&&vt.isAvailable();let s=n&&!vt.previouslyFailed();if(e.webSocketOnly&&(n||tt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[vt];else{const i=this.transports_=[];for(const r of ar.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ar.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ar.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=6e4,WA=5e3,GA=10*1024,KA=100*1024,Za="t",$f="d",qA="s",jf="r",zA="e",Hf="o",Bf="a",Vf="n",Wf="p",YA="h";class QA{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Tr("c:"+this.id+":"),this.transportManager_=new ar(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ji(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>KA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>GA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Za in e){const n=e[Za];n===Bf?this.upgradeIfSecondaryHealthy_():n===jf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Hf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=wi("t",e),s=wi("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Wf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Bf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Vf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=wi("t",e),s=wi("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=wi(Za,e);if($f in e){const s=e[$f];if(n===YA){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Vf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===qA?this.onConnectionShutdown_(s):n===jf?this.onReset_(s):n===zA?Vl("Server Error: "+s):n===Hf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Vl("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Yc!==s&&tt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ji(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(VA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ji(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(WA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Wf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Zn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To extends Qm{static getInstance(){return new To}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Sc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=32,Kf=768;class pe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function re(){return new pe("")}function J(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ln(t){return t.pieces_.length-t.pieceNum_}function we(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new pe(t.pieces_,e)}function Jm(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function JA(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Xm(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Zm(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new pe(e,0)}function Pe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof pe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new pe(n,0)}function X(t){return t.pieceNum_>=t.pieces_.length}function qe(t,e){const n=J(t),s=J(e);if(n===null)return e;if(n===s)return qe(we(t),we(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Xc(t,e){if(Ln(t)!==Ln(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function wt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ln(t)>Ln(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class XA{constructor(e,n){this.errorPrefix_=n,this.parts_=Xm(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ra(this.parts_[s]);e_(this)}}function ZA(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ra(e),e_(t)}function eP(t){const e=t.parts_.pop();t.byteLength_-=ra(e),t.parts_.length>0&&(t.byteLength_-=1)}function e_(t){if(t.byteLength_>Kf)throw new Error(t.errorPrefix_+"has a key path longer than "+Kf+" bytes ("+t.byteLength_+").");if(t.parts_.length>Gf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Gf+") or object contains a cycle "+Jn(t))}function Jn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc extends Qm{static getInstance(){return new Zc}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=1e3,tP=60*5*1e3,qf=30*1e3,nP=1.3,sP=3e4,iP="server_kill",zf=3;class sn extends Ym{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=sn.nextPersistentConnectionId_++,this.log_=Tr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ei,this.maxReconnectDelay_=tP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Zc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&To.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ae(r)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ia,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;sn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Vt(e,"w")){const s=Ys(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();tt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||YI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=qf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=zI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ae(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Vl("Unrecognized action received from server: "+Ae(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ei,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ei,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>sP&&(this.reconnectDelay_=Ei),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*nP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+sn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Be("getToken() completed but was canceled"):(Be("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new QA(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,h=>{tt(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(iP)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&tt(d),l())}}}interrupt(e){Be("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Be("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Pl(this.interruptReasons_)&&(this.reconnectDelay_=Ei,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>zc(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new pe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Be("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=zf&&(this.reconnectDelay_=qf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Be("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=zf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Am.replace(/\./g,"-")]=1,Sc()?e["framework.cordova"]=1:dg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=To.getInstance().currentlyOnline();return Pl(this.interruptReasons_)&&e}}sn.nextPersistentConnectionId_=0;sn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ha{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Z(fs,e),i=new Z(fs,n);return this.compare(s,i)!==0}minPost(){return Z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Br;class t_ extends ha{static get __EMPTY_NODE(){return Br}static set __EMPTY_NODE(e){Br=e}compare(e,n){return ui(e.name,n.name)}isDefinedOn(e){throw si("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Z.MIN}maxPost(){return new Z(Dn,Br)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new Z(e,Br)}toString(){return".key"}}const is=new t_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Oe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Oe.RED,this.left=i??Ze.EMPTY_NODE,this.right=r??Ze.EMPTY_NODE}copy(e,n,s,i,r){return new Oe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ze.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ze.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Oe.RED=!0;Oe.BLACK=!1;class rP{copy(e,n,s,i,r){return this}insert(e,n,s){return new Oe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ze{constructor(e,n=Ze.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ze(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Oe.BLACK,null,null))}remove(e){return new Ze(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Oe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Vr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Vr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Vr(this.root_,null,this.comparator_,!0,e)}}Ze.EMPTY_NODE=new rP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oP(t,e){return ui(t.name,e.name)}function eu(t,e){return ui(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gl;function aP(t){Gl=t}const n_=function(t){return typeof t=="number"?"number:"+Nm(t):"string:"+t},s_=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Vt(e,".sv"),"Priority must be a string or number.")}else P(t===Gl||t.isEmpty(),"priority of unexpected type.");P(t===Gl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yf;class Ne{static set __childrenNodeConstructor(e){Yf=e}static get __childrenNodeConstructor(){return Yf}constructor(e,n=Ne.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),s_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ne(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return X(e)?this:J(e)===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ne.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=J(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(P(s!==".priority"||Ln(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ne.__childrenNodeConstructor.EMPTY_NODE.updateChild(we(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+n_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Nm(this.value_):e+=this.value_,this.lazyHash_=km(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ne.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ne.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ne.VALUE_TYPE_ORDER.indexOf(n),r=Ne.VALUE_TYPE_ORDER.indexOf(s);return P(i>=0,"Unknown leaf type: "+n),P(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ne.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i_,r_;function lP(t){i_=t}function cP(t){r_=t}class uP extends ha{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?ui(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Z.MIN}maxPost(){return new Z(Dn,new Ne("[PRIORITY-POST]",r_))}makePost(e,n){const s=i_(e);return new Z(n,new Ne("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ie=new uP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP=Math.log(2);class fP{constructor(e){const n=r=>parseInt(Math.log(r)/dP,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ro=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=t[l],f=n?n(d):d,new Oe(f,d.node,Oe.BLACK,null,null);{const h=parseInt(u/2,10)+l,m=i(l,h),_=i(h+1,c);return d=t[h],f=n?n(d):d,new Oe(f,d.node,Oe.BLACK,m,_)}},r=function(l){let c=null,u=null,d=t.length;const f=function(m,_){const y=d-m,C=d;d-=m;const b=i(y+1,C),R=t[y],T=n?n(R):R;h(new Oe(T,R.node,_,null,b))},h=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const _=l.nextBitIsOne(),y=Math.pow(2,l.count-(m+1));_?f(y,Oe.BLACK):(f(y,Oe.BLACK),f(y,Oe.RED))}return u},o=new fP(t.length),a=r(o);return new Ze(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let el;const Ss={};class tn{static get Default(){return P(Ss&&Ie,"ChildrenNode.ts has not been loaded"),el=el||new tn({".priority":Ss},{".priority":Ie}),el}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Ys(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ze?n:null}hasIndex(e){return Vt(this.indexSet_,e.toString())}addIndex(e,n){P(e!==is,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(Z.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Ro(s,e.getCompare()):a=Ss;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new tn(u,c)}addToIndexes(e,n){const s=mo(this.indexes_,(i,r)=>{const o=Ys(this.indexSet_,r);if(P(o,"Missing index implementation for "+r),i===Ss)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Z.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ro(a,o.getCompare())}else return Ss;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Z(e.name,a))),l.insert(e,e.node)}});return new tn(s,this.indexSet_)}removeFromIndexes(e,n){const s=mo(this.indexes_,i=>{if(i===Ss)return i;{const r=n.get(e.name);return r?i.remove(new Z(e.name,r)):i}});return new tn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ii;class q{static get EMPTY_NODE(){return Ii||(Ii=new q(new Ze(eu),null,tn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&s_(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ii}updatePriority(e){return this.children_.isEmpty()?this:new q(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ii:n}}getChild(e){const n=J(e);return n===null?this:this.getImmediateChild(n).getChild(we(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Z(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ii:this.priorityNode_;return new q(i,o,r)}}updateChild(e,n){const s=J(e);if(s===null)return n;{P(J(e)!==".priority"||Ln(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(we(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Ie,(o,a)=>{n[o]=a.val(e),s++,r&&q.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+n_(this.getPriority().val())+":"),this.forEachChild(Ie,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":km(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new Z(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Z(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Z.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Z.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Rr?-1:0}withIndex(e){if(e===is||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new q(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===is||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ie),i=n.getIterator(Ie);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===is?null:this.indexMap_.get(e.toString())}}q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class hP extends q{constructor(){super(new Ze(eu),q.EMPTY_NODE,tn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return q.EMPTY_NODE}isEmpty(){return!1}}const Rr=new hP;Object.defineProperties(Z,{MIN:{value:new Z(fs,q.EMPTY_NODE)},MAX:{value:new Z(Dn,Rr)}});t_.__EMPTY_NODE=q.EMPTY_NODE;Ne.__childrenNodeConstructor=q;aP(Rr);cP(Rr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP=!0;function De(t,e=null){if(t===null)return q.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ne(n,De(e))}if(!(t instanceof Array)&&pP){const n=[];let s=!1;if(nt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=De(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new Z(o,l)))}}),n.length===0)return q.EMPTY_NODE;const r=Ro(n,oP,o=>o.name,eu);if(s){const o=Ro(n,Ie.getCompare());return new q(r,De(e),new tn({".priority":o},{".priority":Ie}))}else return new q(r,De(e),tn.Default)}else{let n=q.EMPTY_NODE;return nt(t,(s,i)=>{if(Vt(t,s)&&s.substring(0,1)!=="."){const r=De(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(De(e))}}lP(De);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu extends ha{constructor(e){super(),this.indexPath_=e,P(!X(e)&&J(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?ui(e.name,n.name):r}makePost(e,n){const s=De(e),i=q.EMPTY_NODE.updateChild(this.indexPath_,s);return new Z(n,i)}maxPost(){const e=q.EMPTY_NODE.updateChild(this.indexPath_,Rr);return new Z(Dn,e)}toString(){return Xm(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP extends ha{compare(e,n){const s=e.node.compareTo(n.node);return s===0?ui(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Z.MIN}maxPost(){return Z.MAX}makePost(e,n){const s=De(e);return new Z(n,s)}toString(){return".value"}}const o_=new gP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(t){return{type:"value",snapshotNode:t}}function Zs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function lr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function cr(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function mP(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){P(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(lr(n,a)):P(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Zs(n,s)):o.trackChildChange(cr(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ie,(i,r)=>{n.hasChild(i)||s.trackChildChange(lr(i,r))}),n.isLeafNode()||n.forEachChild(Ie,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(cr(i,r,o))}else s.trackChildChange(Zs(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?q.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this.indexedFilter_=new nu(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ur.getStartPost_(e),this.endPost_=ur.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new Z(n,s))||(s=q.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=q.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(q.EMPTY_NODE);const r=this;return n.forEachChild(Ie,(o,a)=>{r.matches(new Z(o,a))||(i=i.updateImmediateChild(o,q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ur(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new Z(n,s))||(s=q.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=q.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(q.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,h)=>d(h,f)}else o=this.index_.getCompare();const a=e;P(a.numChildren()===this.limit_,"");const l=new Z(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const h=f==null?1:o(f,l);if(u&&!s.isEmpty()&&h>=0)return r!=null&&r.trackChildChange(cr(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(lr(n,d));const _=a.updateImmediateChild(n,q.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Zs(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(lr(c.name,c.node)),r.trackChildChange(Zs(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,q.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fs}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Dn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ie}copy(){const e=new su;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function vP(t){return t.loadsAllData()?new nu(t.getIndex()):t.hasLimit()?new _P(t):new ur(t)}function yP(t,e,n){const s=t.copy();return s.startSet_=!0,e===void 0&&(e=null),s.indexStartValue_=e,n!=null?(s.startNameSet_=!0,s.indexStartName_=n):(s.startNameSet_=!1,s.indexStartName_=""),s}function bP(t,e,n){const s=t.copy();return s.endSet_=!0,e===void 0&&(e=null),s.indexEndValue_=e,n!==void 0?(s.endNameSet_=!0,s.indexEndName_=n):(s.endNameSet_=!1,s.indexEndName_=""),s}function wP(t,e){const n=t.copy();return n.index_=e,n}function Qf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ie?n="$priority":t.index_===o_?n="$value":t.index_===is?n="$key":(P(t.index_ instanceof tu,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ae(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ae(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ae(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ae(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ae(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Jf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ie&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends Ym{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Tr("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ao.getListenId_(e,s),a={};this.listens_[o]=a;const l=Qf(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),Ys(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=Ao.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Qf(e._queryParams),s=e._path.toString(),i=new ia;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ri(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=nr(a.responseText)}catch{tt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&tt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(){this.rootNode_=q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(){return{value:null,children:new Map}}function l_(t,e,n){if(X(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=J(e);t.children.has(s)||t.children.set(s,Po());const i=t.children.get(s);e=we(e),l_(i,e,n)}}function Kl(t,e,n){t.value!==null?n(e,t.value):IP(t,(s,i)=>{const r=new pe(e.toString()+"/"+s);Kl(i,r,n)})}function IP(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&nt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=10*1e3,SP=30*1e3,TP=5*60*1e3;class RP{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new CP(e);const s=Xf+(SP-Xf)*Math.random();ji(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;nt(e,(i,r)=>{r>0&&Vt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ji(this.reportStats_.bind(this),Math.floor(Math.random()*2*TP))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Et;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Et||(Et={}));function c_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function iu(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ru(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Et.ACK_USER_WRITE,this.source=c_()}operationForChild(e){if(X(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new pe(e));return new ko(re(),n,this.revert)}}else return P(J(this.path)===e,"operationForChild called for unrelated child."),new ko(we(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n){this.source=e,this.path=n,this.type=Et.LISTEN_COMPLETE}operationForChild(e){return X(this.path)?new dr(this.source,re()):new dr(this.source,we(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Et.OVERWRITE}operationForChild(e){return X(this.path)?new hs(this.source,re(),this.snap.getImmediateChild(e)):new hs(this.source,we(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Et.MERGE}operationForChild(e){if(X(this.path)){const n=this.children.subtree(new pe(e));return n.isEmpty()?null:n.value?new hs(this.source,re(),n.value):new fr(this.source,re(),n)}else return P(J(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new fr(this.source,we(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(X(e))return this.isFullyInitialized()&&!this.filtered_;const n=J(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function PP(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(mP(o.childName,o.snapshotNode))}),Ci(t,i,"child_removed",e,s,n),Ci(t,i,"child_added",e,s,n),Ci(t,i,"child_moved",r,s,n),Ci(t,i,"child_changed",e,s,n),Ci(t,i,"value",e,s,n),i}function Ci(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>xP(t,a,l)),o.forEach(a=>{const l=kP(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function kP(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function xP(t,e,n){if(e.childName==null||n.childName==null)throw si("Should only compare child_ events.");const s=new Z(e.childName,e.snapshotNode),i=new Z(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(t,e){return{eventCache:t,serverCache:e}}function Hi(t,e,n,s){return pa(new Fn(e,n,s),t.serverCache)}function u_(t,e,n,s){return pa(t.eventCache,new Fn(e,n,s))}function xo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ps(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tl;const NP=()=>(tl||(tl=new Ze(mA)),tl);class Ee{static fromObject(e){let n=new Ee(null);return nt(e,(s,i)=>{n=n.set(new pe(s),i)}),n}constructor(e,n=NP()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:re(),value:this.value};if(X(e))return null;{const s=J(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(we(e),n);return r!=null?{path:Pe(new pe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(X(e))return this;{const n=J(e),s=this.children.get(n);return s!==null?s.subtree(we(e)):new Ee(null)}}set(e,n){if(X(e))return new Ee(n,this.children);{const s=J(e),r=(this.children.get(s)||new Ee(null)).set(we(e),n),o=this.children.insert(s,r);return new Ee(this.value,o)}}remove(e){if(X(e))return this.children.isEmpty()?new Ee(null):new Ee(null,this.children);{const n=J(e),s=this.children.get(n);if(s){const i=s.remove(we(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Ee(null):new Ee(this.value,r)}else return this}}get(e){if(X(e))return this.value;{const n=J(e),s=this.children.get(n);return s?s.get(we(e)):null}}setTree(e,n){if(X(e))return n;{const s=J(e),r=(this.children.get(s)||new Ee(null)).setTree(we(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ee(this.value,o)}}fold(e){return this.fold_(re(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Pe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,re(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(X(e))return null;{const r=J(e),o=this.children.get(r);return o?o.findOnPath_(we(e),Pe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,re(),n)}foreachOnPath_(e,n,s){if(X(e))return this;{this.value&&s(n,this.value);const i=J(e),r=this.children.get(i);return r?r.foreachOnPath_(we(e),Pe(n,i),s):new Ee(null)}}foreach(e){this.foreach_(re(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Pe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.writeTree_=e}static empty(){return new Ct(new Ee(null))}}function Bi(t,e,n){if(X(e))return new Ct(new Ee(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=qe(i,e);return r=r.updateChild(o,n),new Ct(t.writeTree_.set(i,r))}else{const i=new Ee(n),r=t.writeTree_.setTree(e,i);return new Ct(r)}}}function Zf(t,e,n){let s=t;return nt(n,(i,r)=>{s=Bi(s,Pe(e,i),r)}),s}function eh(t,e){if(X(e))return Ct.empty();{const n=t.writeTree_.setTree(e,new Ee(null));return new Ct(n)}}function ql(t,e){return ys(t,e)!=null}function ys(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(qe(n.path,e)):null}function th(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ie,(s,i)=>{e.push(new Z(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new Z(s,i.value))}),e}function kn(t,e){if(X(e))return t;{const n=ys(t,e);return n!=null?new Ct(new Ee(n)):new Ct(t.writeTree_.subtree(e))}}function zl(t){return t.writeTree_.isEmpty()}function ei(t,e){return d_(re(),t.writeTree_,e)}function d_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(P(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=d_(Pe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Pe(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t,e){return g_(e,t)}function OP(t,e,n,s,i){P(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Bi(t.visibleWrites,e,n)),t.lastWriteId=s}function MP(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function DP(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&LP(a,s.path)?i=!1:wt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return FP(t),!0;if(s.snap)t.visibleWrites=eh(t.visibleWrites,s.path);else{const a=s.children;nt(a,l=>{t.visibleWrites=eh(t.visibleWrites,Pe(s.path,l))})}return!0}else return!1}function LP(t,e){if(t.snap)return wt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&wt(Pe(t.path,n),e))return!0;return!1}function FP(t){t.visibleWrites=f_(t.allWrites,UP,re()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function UP(t){return t.visible}function f_(t,e,n){let s=Ct.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)wt(n,o)?(a=qe(n,o),s=Bi(s,a,r.snap)):wt(o,n)&&(a=qe(o,n),s=Bi(s,re(),r.snap.getChild(a)));else if(r.children){if(wt(n,o))a=qe(n,o),s=Zf(s,a,r.children);else if(wt(o,n))if(a=qe(o,n),X(a))s=Zf(s,re(),r.children);else{const l=Ys(r.children,J(a));if(l){const c=l.getChild(we(a));s=Bi(s,re(),c)}}}else throw si("WriteRecord should have .snap or .children")}}return s}function h_(t,e,n,s,i){if(!s&&!i){const r=ys(t.visibleWrites,e);if(r!=null)return r;{const o=kn(t.visibleWrites,e);if(zl(o))return n;if(n==null&&!ql(o,re()))return null;{const a=n||q.EMPTY_NODE;return ei(o,a)}}}else{const r=kn(t.visibleWrites,e);if(!i&&zl(r))return n;if(!i&&n==null&&!ql(r,re()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(wt(c.path,e)||wt(e,c.path))},a=f_(t.allWrites,o,e),l=n||q.EMPTY_NODE;return ei(a,l)}}}function $P(t,e,n){let s=q.EMPTY_NODE;const i=ys(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ie,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=kn(t.visibleWrites,e);return n.forEachChild(Ie,(o,a)=>{const l=ei(kn(r,new pe(o)),a);s=s.updateImmediateChild(o,l)}),th(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=kn(t.visibleWrites,e);return th(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function jP(t,e,n,s,i){P(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Pe(e,n);if(ql(t.visibleWrites,r))return null;{const o=kn(t.visibleWrites,r);return zl(o)?i.getChild(n):ei(o,i.getChild(n))}}function HP(t,e,n,s){const i=Pe(e,n),r=ys(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=kn(t.visibleWrites,i);return ei(o,s.getNode().getImmediateChild(n))}else return null}function BP(t,e){return ys(t.visibleWrites,e)}function VP(t,e,n,s,i,r,o){let a;const l=kn(t.visibleWrites,e),c=ys(l,re());if(c!=null)a=c;else if(n!=null)a=ei(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let h=f.getNext();for(;h&&u.length<i;)d(h,s)!==0&&u.push(h),h=f.getNext();return u}else return[]}function WP(){return{visibleWrites:Ct.empty(),allWrites:[],lastWriteId:-1}}function No(t,e,n,s){return h_(t.writeTree,t.treePath,e,n,s)}function ou(t,e){return $P(t.writeTree,t.treePath,e)}function nh(t,e,n,s){return jP(t.writeTree,t.treePath,e,n,s)}function Oo(t,e){return BP(t.writeTree,Pe(t.treePath,e))}function GP(t,e,n,s,i,r){return VP(t.writeTree,t.treePath,e,n,s,i,r)}function au(t,e,n){return HP(t.writeTree,t.treePath,e,n)}function p_(t,e){return g_(Pe(t.treePath,e),t.writeTree)}function g_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,cr(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,lr(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Zs(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,cr(s,e.snapshotNode,i.oldSnap));else throw si("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const m_=new qP;class lu{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Fn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return au(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ps(this.viewCache_),r=GP(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zP(t){return{filter:t}}function YP(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function QP(t,e,n,s,i){const r=new KP;let o,a;if(n.type===Et.OVERWRITE){const c=n;c.source.fromUser?o=Yl(t,e,c.path,c.snap,s,i,r):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!X(c.path),o=Mo(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Et.MERGE){const c=n;c.source.fromUser?o=XP(t,e,c.path,c.children,s,i,r):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ql(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Et.ACK_USER_WRITE){const c=n;c.revert?o=tk(t,e,c.path,s,i,r):o=ZP(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Et.LISTEN_COMPLETE)o=ek(t,e,n.path,s,r);else throw si("Unknown operation type: "+n.type);const l=r.getChanges();return JP(e,o,l),{viewCache:o,changes:l}}function JP(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=xo(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(a_(xo(e)))}}function __(t,e,n,s,i,r){const o=e.eventCache;if(Oo(s,n)!=null)return e;{let a,l;if(X(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ps(e),u=c instanceof q?c:q.EMPTY_NODE,d=ou(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=No(s,ps(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=J(n);if(c===".priority"){P(Ln(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=nh(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=we(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=nh(s,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=au(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return Hi(e,a,o.isFullyInitialized()||X(n),t.filter.filtersNodes())}}function Mo(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(X(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const h=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),h,null)}else{const h=J(n);if(!l.isCompleteForPath(n)&&Ln(n)>1)return e;const m=we(n),y=l.getNode().getImmediateChild(h).updateChild(m,s);h===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),h,y,m,m_,null)}const d=u_(e,c,l.isFullyInitialized()||X(n),u.filtersNodes()),f=new lu(i,d,r);return __(t,d,n,i,f,a)}function Yl(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new lu(i,e,r);if(X(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Hi(e,c,!0,t.filter.filtersNodes());else{const d=J(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Hi(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=we(n),h=a.getNode().getImmediateChild(d);let m;if(X(f))m=s;else{const _=u.getCompleteChild(d);_!=null?Jm(f)===".priority"&&_.getChild(Zm(f)).isEmpty()?m=_:m=_.updateChild(f,s):m=q.EMPTY_NODE}if(h.equals(m))l=e;else{const _=t.filter.updateChild(a.getNode(),d,m,f,u,o);l=Hi(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function sh(t,e){return t.eventCache.isCompleteForChild(e)}function XP(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Pe(n,l);sh(e,J(u))&&(a=Yl(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Pe(n,l);sh(e,J(u))||(a=Yl(t,a,u,c,i,r,o))}),a}function ih(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ql(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;X(n)?c=s:c=new Ee(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const h=e.serverCache.getNode().getImmediateChild(d),m=ih(t,h,f);l=Mo(t,l,new pe(d),m,i,r,o,a)}}),c.children.inorderTraversal((d,f)=>{const h=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!h){const m=e.serverCache.getNode().getImmediateChild(d),_=ih(t,m,f);l=Mo(t,l,new pe(d),_,i,r,o,a)}}),l}function ZP(t,e,n,s,i,r,o){if(Oo(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(X(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Mo(t,e,n,l.getNode().getChild(n),i,r,a,o);if(X(n)){let c=new Ee(null);return l.getNode().forEachChild(is,(u,d)=>{c=c.set(new pe(u),d)}),Ql(t,e,n,c,i,r,a,o)}else return e}else{let c=new Ee(null);return s.foreach((u,d)=>{const f=Pe(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Ql(t,e,n,c,i,r,a,o)}}function ek(t,e,n,s,i){const r=e.serverCache,o=u_(e,r.getNode(),r.isFullyInitialized()||X(n),r.isFiltered());return __(t,o,n,s,m_,i)}function tk(t,e,n,s,i,r){let o;if(Oo(s,n)!=null)return e;{const a=new lu(s,e,i),l=e.eventCache.getNode();let c;if(X(n)||J(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=No(s,ps(e));else{const d=e.serverCache.getNode();P(d instanceof q,"serverChildren would be complete if leaf node"),u=ou(s,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=J(n);let d=au(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,we(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,q.EMPTY_NODE,we(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=No(s,ps(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Oo(s,re())!=null,Hi(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new nu(s.getIndex()),r=vP(s);this.processor_=zP(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(q.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(q.EMPTY_NODE,a.getNode(),null),u=new Fn(l,o.isFullyInitialized(),i.filtersNodes()),d=new Fn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=pa(d,u),this.eventGenerator_=new AP(this.query_)}get query(){return this.query_}}function sk(t){return t.viewCache_.serverCache.getNode()}function ik(t){return xo(t.viewCache_)}function rk(t,e){const n=ps(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!X(e)&&!n.getImmediateChild(J(e)).isEmpty())?n.getChild(e):null}function rh(t){return t.eventRegistrations_.length===0}function ok(t,e){t.eventRegistrations_.push(e)}function oh(t,e,n){const s=[];if(n){P(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function ah(t,e,n,s){e.type===Et.MERGE&&e.source.queryId!==null&&(P(ps(t.viewCache_),"We should always have a full cache before handling merges"),P(xo(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=QP(t.processor_,i,e,n,s);return YP(t.processor_,r.viewCache),P(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,v_(t,r.changes,r.viewCache.eventCache.getNode(),null)}function ak(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ie,(r,o)=>{s.push(Zs(r,o))}),n.isFullyInitialized()&&s.push(a_(n.getNode())),v_(t,s,n.getNode(),e)}function v_(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return PP(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Do;class y_{constructor(){this.views=new Map}}function lk(t){P(!Do,"__referenceConstructor has already been defined"),Do=t}function ck(){return P(Do,"Reference.ts has not been loaded"),Do}function uk(t){return t.views.size===0}function cu(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return P(r!=null,"SyncTree gave us an op for an invalid query."),ah(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(ah(o,e,n,s));return r}}function b_(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=No(n,i?s:null),l=!1;a?l=!0:s instanceof q?(a=ou(n,s),l=!1):(a=q.EMPTY_NODE,l=!1);const c=pa(new Fn(a,l,!1),new Fn(s,i,!1));return new nk(e,c)}return o}function dk(t,e,n,s,i,r){const o=b_(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),ok(o,n),ak(o,n)}function fk(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Un(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(oh(c,n,s)),rh(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(oh(l,n,s)),rh(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Un(t)&&r.push(new(ck())(e._repo,e._path)),{removed:r,events:o}}function w_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function xn(t,e){let n=null;for(const s of t.views.values())n=n||rk(s,e);return n}function E_(t,e){if(e._queryParams.loadsAllData())return ma(t);{const s=e._queryIdentifier;return t.views.get(s)}}function I_(t,e){return E_(t,e)!=null}function Un(t){return ma(t)!=null}function ma(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lo;function hk(t){P(!Lo,"__referenceConstructor has already been defined"),Lo=t}function pk(){return P(Lo,"Reference.ts has not been loaded"),Lo}let gk=1;class lh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ee(null),this.pendingWriteTree_=WP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function C_(t,e,n,s,i){return OP(t.pendingWriteTree_,e,n,s,i),i?Pr(t,new hs(c_(),e,n)):[]}function es(t,e,n=!1){const s=MP(t.pendingWriteTree_,e);if(DP(t.pendingWriteTree_,e)){let r=new Ee(null);return s.snap!=null?r=r.set(re(),!0):nt(s.children,o=>{r=r.set(new pe(o),!0)}),Pr(t,new ko(s.path,r,n))}else return[]}function Ar(t,e,n){return Pr(t,new hs(iu(),e,n))}function mk(t,e,n){const s=Ee.fromObject(n);return Pr(t,new fr(iu(),e,s))}function _k(t,e){return Pr(t,new dr(iu(),e))}function vk(t,e,n){const s=du(t,n);if(s){const i=fu(s),r=i.path,o=i.queryId,a=qe(r,e),l=new dr(ru(o),a);return hu(t,r,l)}else return[]}function Fo(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||I_(o,e))){const l=fk(o,e,n,s);uk(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(f,h)=>Un(h));if(u&&!d){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const h=wk(f);for(let m=0;m<h.length;++m){const _=h[m],y=_.query,C=A_(t,_);t.listenProvider_.startListening(Vi(y),hr(t,y),C.hashFn,C.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Vi(e),null):c.forEach(f=>{const h=t.queryToTagMap.get(_a(f));t.listenProvider_.stopListening(Vi(f),h)}))}Ek(t,c)}return a}function S_(t,e,n,s){const i=du(t,s);if(i!=null){const r=fu(i),o=r.path,a=r.queryId,l=qe(o,e),c=new hs(ru(a),l,n);return hu(t,o,c)}else return[]}function yk(t,e,n,s){const i=du(t,s);if(i){const r=fu(i),o=r.path,a=r.queryId,l=qe(o,e),c=Ee.fromObject(n),u=new fr(ru(a),l,c);return hu(t,o,u)}else return[]}function Jl(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,h)=>{const m=qe(f,i);r=r||xn(h,m),o=o||Un(h)});let a=t.syncPointTree_.get(i);a?(o=o||Un(a),r=r||xn(a,re())):(a=new y_,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=q.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((h,m)=>{const _=xn(m,re());_&&(r=r.updateImmediateChild(h,_))}));const c=I_(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=_a(e);P(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const h=Ik();t.queryToTagMap.set(f,h),t.tagToQueryMap.set(h,f)}const u=ga(t.pendingWriteTree_,i);let d=dk(a,e,n,u,r,l);if(!c&&!o&&!s){const f=E_(a,e);d=d.concat(Ck(t,e,f))}return d}function uu(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=qe(o,e),c=xn(a,l);if(c)return c});return h_(i,e,r,n,!0)}function bk(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=qe(c,n);s=s||xn(u,d)});let i=t.syncPointTree_.get(n);i?s=s||xn(i,re()):(i=new y_,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Fn(s,!0,!1):null,a=ga(t.pendingWriteTree_,e._path),l=b_(i,e,a,r?o.getNode():q.EMPTY_NODE,r);return ik(l)}function Pr(t,e){return T_(e,t.syncPointTree_,null,ga(t.pendingWriteTree_,re()))}function T_(t,e,n,s){if(X(t.path))return R_(t,e,n,s);{const i=e.get(re());n==null&&i!=null&&(n=xn(i,re()));let r=[];const o=J(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=p_(s,o);r=r.concat(T_(a,l,c,u))}return i&&(r=r.concat(cu(i,t,s,n))),r}}function R_(t,e,n,s){const i=e.get(re());n==null&&i!=null&&(n=xn(i,re()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=p_(s,o),u=t.operationForChild(o);u&&(r=r.concat(R_(u,a,l,c)))}),i&&(r=r.concat(cu(i,t,s,n))),r}function A_(t,e){const n=e.query,s=hr(t,n);return{hashFn:()=>(sk(e)||q.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?vk(t,n._path,s):_k(t,n._path);{const r=yA(i,n);return Fo(t,n,null,r)}}}}function hr(t,e){const n=_a(e);return t.queryToTagMap.get(n)}function _a(t){return t._path.toString()+"$"+t._queryIdentifier}function du(t,e){return t.tagToQueryMap.get(e)}function fu(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new pe(t.substr(0,e))}}function hu(t,e,n){const s=t.syncPointTree_.get(e);P(s,"Missing sync point for query tag that we're tracking");const i=ga(t.pendingWriteTree_,e);return cu(s,n,i,null)}function wk(t){return t.fold((e,n,s)=>{if(n&&Un(n))return[ma(n)];{let i=[];return n&&(i=w_(n)),nt(s,(r,o)=>{i=i.concat(o)}),i}})}function Vi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(pk())(t._repo,t._path):t}function Ek(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=_a(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Ik(){return gk++}function Ck(t,e,n){const s=e._path,i=hr(t,e),r=A_(t,n),o=t.listenProvider_.startListening(Vi(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)P(!Un(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!X(c)&&u&&Un(u))return[ma(u).query];{let f=[];return u&&(f=f.concat(w_(u).map(h=>h.query))),nt(d,(h,m)=>{f=f.concat(m)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Vi(u),hr(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new pu(n)}node(){return this.node_}}class gu{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Pe(this.path_,e);return new gu(this.syncTree_,n)}node(){return uu(this.syncTree_,this.path_)}}const Sk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ch=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Tk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Rk(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Tk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},Rk=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&P(!1,"Unexpected increment value: "+s);const i=e.node();if(P(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Ak=function(t,e,n,s){return mu(e,new gu(n,t),s)},P_=function(t,e,n){return mu(t,new pu(e),n)};function mu(t,e,n){const s=t.getPriority().val(),i=ch(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=ch(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ne(a,De(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ne(i))),o.forEachChild(Ie,(a,l)=>{const c=mu(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function vu(t,e){let n=e instanceof pe?e:new pe(e),s=t,i=J(n);for(;i!==null;){const r=Ys(s.node.children,i)||{children:{},childCount:0};s=new _u(i,s,r),n=we(n),i=J(n)}return s}function fi(t){return t.node.value}function k_(t,e){t.node.value=e,Xl(t)}function x_(t){return t.node.childCount>0}function Pk(t){return fi(t)===void 0&&!x_(t)}function va(t,e){nt(t.node.children,(n,s)=>{e(new _u(n,t,s))})}function N_(t,e,n,s){n&&e(t),va(t,i=>{N_(i,e,!0)})}function kk(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function kr(t){return new pe(t.parent===null?t.name:kr(t.parent)+"/"+t.name)}function Xl(t){t.parent!==null&&xk(t.parent,t.name,t)}function xk(t,e,n){const s=Pk(n),i=Vt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Xl(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Xl(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk=/[\[\].#$\/\u0000-\u001F\u007F]/,Ok=/[\[\].#$\u0000-\u001F\u007F]/,nl=10*1024*1024,O_=function(t){return typeof t=="string"&&t.length!==0&&!Nk.test(t)},M_=function(t){return typeof t=="string"&&t.length!==0&&!Ok.test(t)},Mk=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),M_(t)},uh=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!qc(t)||t&&typeof t=="object"&&Vt(t,".sv")},xr=function(t,e,n,s){s&&e===void 0||yu(Tc(t,"value"),e,n)},yu=function(t,e,n){const s=n instanceof pe?new XA(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Jn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Jn(s)+" with contents = "+e.toString());if(qc(e))throw new Error(t+"contains "+e.toString()+" "+Jn(s));if(typeof e=="string"&&e.length>nl/3&&ra(e)>nl)throw new Error(t+"contains a string greater than "+nl+" utf8 bytes "+Jn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(nt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!O_(o)))throw new Error(t+" contains an invalid key ("+o+") "+Jn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ZA(s,o),yu(t,a,s),eP(s)}),i&&r)throw new Error(t+' contains ".value" child '+Jn(s)+" in addition to actual children.")}},bu=function(t,e,n,s){if(!M_(n))throw new Error(Tc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Dk=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),bu(t,e,n)},wu=function(t,e){if(J(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Lk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!O_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Mk(n))throw new Error(Tc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Eu(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Xc(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function D_(t,e,n){Eu(t,n),L_(t,s=>Xc(s,e))}function Bt(t,e,n){Eu(t,n),L_(t,s=>wt(s,e)||wt(e,s))}function L_(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Uk(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Uk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();$i&&Be("event: "+n.toString()),di(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k="repo_interrupt",jk=25;class Hk{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Fk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Po(),this.transactionQueueTree_=new _u,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Bk(t,e,n){if(t.stats_=Qc(t.repoInfo_),t.forceRestClient_||IA())t.server_=new Ao(t.repoInfo_,(s,i,r,o)=>{dh(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>fh(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ae(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new sn(t.repoInfo_,e,(s,i,r,o)=>{dh(t,s,i,r,o)},s=>{fh(t,s)},s=>{Vk(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=AA(t.repoInfo_,()=>new RP(t.stats_,t.server_)),t.infoData_=new EP,t.infoSyncTree_=new lh({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Ar(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Cu(t,"connected",!1),t.serverSyncTree_=new lh({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Bt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function F_(t){const n=t.infoData_.getNode(new pe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Iu(t){return Sk({timestamp:F_(t)})}function dh(t,e,n,s,i){t.dataUpdateCount++;const r=new pe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=mo(n,c=>De(c));o=yk(t.serverSyncTree_,r,l,i)}else{const l=De(n);o=S_(t.serverSyncTree_,r,l,i)}else if(s){const l=mo(n,c=>De(c));o=mk(t.serverSyncTree_,r,l)}else{const l=De(n);o=Ar(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=ba(t,r)),Bt(t.eventQueue_,a,o)}function fh(t,e){Cu(t,"connected",e),e===!1&&Kk(t)}function Vk(t,e){nt(e,(n,s)=>{Cu(t,n,s)})}function Cu(t,e,n){const s=new pe("/.info/"+e),i=De(n);t.infoData_.updateSnapshot(s,i);const r=Ar(t.infoSyncTree_,s,i);Bt(t.eventQueue_,s,r)}function U_(t){return t.nextWriteId_++}function Wk(t,e,n){const s=bk(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=De(i).withIndex(e._queryParams.getIndex());Jl(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ar(t.serverSyncTree_,e._path,r);else{const a=hr(t.serverSyncTree_,e);o=S_(t.serverSyncTree_,e._path,r,a)}return Bt(t.eventQueue_,e._path,o),Fo(t.serverSyncTree_,e,n,null,!0),r},i=>(ya(t,"get for query "+Ae(e)+" failed: "+i),Promise.reject(new Error(i))))}function Gk(t,e,n,s,i){ya(t,"set",{path:e.toString(),value:n,priority:s});const r=Iu(t),o=De(n,s),a=uu(t.serverSyncTree_,e),l=P_(o,a,r),c=U_(t),u=C_(t.serverSyncTree_,e,l,c,!0);Eu(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,h)=>{const m=f==="ok";m||tt("set at "+e+" failed: "+f);const _=es(t.serverSyncTree_,c,!m);Bt(t.eventQueue_,e,_),Qk(t,i,f,h)});const d=V_(t,e);ba(t,d),Bt(t.eventQueue_,d,[])}function Kk(t){ya(t,"onDisconnectEvents");const e=Iu(t),n=Po();Kl(t.onDisconnect_,re(),(i,r)=>{const o=Ak(i,r,t.serverSyncTree_,e);l_(n,i,o)});let s=[];Kl(n,re(),(i,r)=>{s=s.concat(Ar(t.serverSyncTree_,i,r));const o=V_(t,i);ba(t,o)}),t.onDisconnect_=Po(),Bt(t.eventQueue_,re(),s)}function qk(t,e,n){let s;J(e._path)===".info"?s=Jl(t.infoSyncTree_,e,n):s=Jl(t.serverSyncTree_,e,n),D_(t.eventQueue_,e._path,s)}function zk(t,e,n){let s;J(e._path)===".info"?s=Fo(t.infoSyncTree_,e,n):s=Fo(t.serverSyncTree_,e,n),D_(t.eventQueue_,e._path,s)}function Yk(t){t.persistentConnection_&&t.persistentConnection_.interrupt($k)}function ya(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Be(n,...e)}function Qk(t,e,n,s){e&&di(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function $_(t,e,n){return uu(t.serverSyncTree_,e,n)||q.EMPTY_NODE}function Su(t,e=t.transactionQueueTree_){if(e||wa(t,e),fi(e)){const n=H_(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Jk(t,kr(e),n)}else x_(e)&&va(e,n=>{Su(t,n)})}function Jk(t,e,n){const s=n.map(c=>c.currentWriteId),i=$_(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];P(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=qe(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{ya(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(es(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();wa(t,vu(t.transactionQueueTree_,e)),Su(t,t.transactionQueueTree_),Bt(t.eventQueue_,e,u);for(let f=0;f<d.length;f++)di(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{tt("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}ba(t,e)}},o)}function ba(t,e){const n=j_(t,e),s=kr(n),i=H_(t,n);return Xk(t,i,s),s}function Xk(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=qe(n,l.path);let u=!1,d;if(P(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(es(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=jk)u=!0,d="maxretry",i=i.concat(es(t.serverSyncTree_,l.currentWriteId,!0));else{const f=$_(t,l.path,o);l.currentInputSnapshot=f;const h=e[a].update(f.val());if(h!==void 0){yu("transaction failed: Data returned ",h,l.path);let m=De(h);typeof h=="object"&&h!=null&&Vt(h,".priority")||(m=m.updatePriority(f.getPriority()));const y=l.currentWriteId,C=Iu(t),b=P_(m,f,C);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=b,l.currentWriteId=U_(t),o.splice(o.indexOf(y),1),i=i.concat(C_(t.serverSyncTree_,l.path,b,l.currentWriteId,l.applyLocally)),i=i.concat(es(t.serverSyncTree_,y,!0))}else u=!0,d="nodata",i=i.concat(es(t.serverSyncTree_,l.currentWriteId,!0))}Bt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}wa(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)di(s[a]);Su(t,t.transactionQueueTree_)}function j_(t,e){let n,s=t.transactionQueueTree_;for(n=J(e);n!==null&&fi(s)===void 0;)s=vu(s,n),e=we(e),n=J(e);return s}function H_(t,e){const n=[];return B_(t,e,n),n.sort((s,i)=>s.order-i.order),n}function B_(t,e,n){const s=fi(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);va(e,i=>{B_(t,i,n)})}function wa(t,e){const n=fi(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,k_(e,n.length>0?n:void 0)}va(e,s=>{wa(t,s)})}function V_(t,e){const n=kr(j_(t,e)),s=vu(t.transactionQueueTree_,e);return kk(s,i=>{sl(t,i)}),sl(t,s),N_(s,i=>{sl(t,i)}),n}function sl(t,e){const n=fi(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(es(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?k_(e,void 0):n.length=r+1,Bt(t.eventQueue_,kr(e),i);for(let o=0;o<s.length;o++)di(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ex(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):tt(`Invalid query segment '${n}' in query '${t}'`)}return e}const hh=function(t,e){const n=tx(t),s=n.namespace;n.domain==="firebase.com"&&un(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&un("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||pA();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Bm(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new pe(n.pathString)}},tx=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=Zk(t.substring(u,d)));const f=ex(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const h=e.slice(0,c);if(h.toLowerCase()==="localhost")n="localhost";else if(h.split(".").length<=2)n=h;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",nx=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=ph.charAt(n%64),n=Math.floor(n/64);P(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=ph.charAt(e[i]);return P(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ae(this.snapshot.exportVal())}}class ix{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return P(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return X(this._path)?null:Jm(this._path)}get ref(){return new hn(this._repo,this._path)}get _queryIdentifier(){const e=Jf(this._queryParams),n=zc(e);return n==="{}"?"default":n}get _queryObject(){return Jf(this._queryParams)}isEqual(e){if(e=We(e),!(e instanceof hi))return!1;const n=this._repo===e._repo,s=Xc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+JA(this._path)}}function rx(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Tu(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===is){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==fs)throw new Error(s);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==Dn)throw new Error(s);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Ie){if(e!=null&&!uh(e)||n!=null&&!uh(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(P(t.getIndex()instanceof tu||t.getIndex()===o_,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function G_(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class hn extends hi{constructor(e,n){super(e,n,new su,!1)}get parent(){const e=Zm(this._path);return e===null?null:new hn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class pr{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new pe(e),s=gr(this.ref,e);return new pr(this._node.getChild(n),s,Ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new pr(i,gr(this.ref,s),Ie)))}hasChild(e){const n=new pe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function il(t,e){return t=We(t),t._checkNotDeleted("ref"),e!==void 0?gr(t._root,e):t._root}function gr(t,e){return t=We(t),J(t._path)===null?Dk("child","path",e):bu("child","path",e),new hn(t._repo,Pe(t._path,e))}function ox(t,e){t=We(t),wu("push",t._path),xr("push",e,t._path,!0);const n=F_(t._repo),s=nx(n),i=gr(t,s),r=gr(t,s);let o;return o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function ax(t){return wu("remove",t._path),K_(t,null)}function K_(t,e){t=We(t),wu("set",t._path),xr("set",e,t._path,!1);const n=new ia;return Gk(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Vx(t){t=We(t);const e=new W_(()=>{}),n=new Ea(e);return Wk(t._repo,t,n).then(s=>new pr(s,new hn(t._repo,t._path),t._queryParams.getIndex()))}class Ea{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new sx("value",this,new pr(e.snapshotNode,new hn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ix(this,e,n):null}matches(e){return e instanceof Ea?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function lx(t,e,n,s,i){const r=new W_(n,void 0),o=new Ea(r);return qk(t._repo,t,o),()=>zk(t._repo,t,o)}function cx(t,e,n,s){return lx(t,"value",e)}class Ia{}class ux extends Ia{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){xr("endAt",this._value,e._path,!0);const n=bP(e._queryParams,this._value,this._key);if(G_(n),Tu(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new hi(e._repo,e._path,n,e._orderByCalled)}}class dx extends Ia{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){xr("startAt",this._value,e._path,!0);const n=yP(e._queryParams,this._value,this._key);if(G_(n),Tu(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new hi(e._repo,e._path,n,e._orderByCalled)}}class fx extends Ia{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){rx(e,"orderByChild");const n=new pe(this._path);if(X(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const s=new tu(n),i=wP(e._queryParams,s);return Tu(i),new hi(e._repo,e._path,i,!0)}}function Wx(t){return bu("orderByChild","path",t),new fx(t)}class hx extends Ia{constructor(e,n){super(),this._value=e,this._key=n,this.type="equalTo"}_apply(e){if(xr("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new ux(this._value,this._key)._apply(new dx(this._value,this._key)._apply(e))}}function Gx(t,e){return new hx(t,e)}function Kx(t,...e){let n=We(t);for(const s of e)n=s._apply(n);return n}lk(hn);hk(hn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px="FIREBASE_DATABASE_EMULATOR_HOST",Zl={};let gx=!1;function mx(t,e,n,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=ii(r);t.repoInfo_=new Bm(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function _x(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||un("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Be("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=hh(r,i),a=o.repoInfo,l;typeof process<"u"&&Of&&(l=Of[px]),l?(r=`http://${l}?ns=${a.namespace}`,o=hh(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new SA(t.name,t.options,e);Lk("Invalid Firebase Database URL",o),X(o.path)||un("Database URL must point to the root of a Firebase Database (not including a child path).");const u=yx(a,t,c,new CA(t,n));return new bx(u,t)}function vx(t,e){const n=Zl[e];(!n||n[t.key]!==t)&&un(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Yk(t),delete n[t.key]}function yx(t,e,n,s){let i=Zl[e.name];i||(i={},Zl[e.name]=i);let r=i[t.toURLString()];return r&&un("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Hk(t,gx,n,s),i[t.toURLString()]=r,r}class bx{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Bk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new hn(this._repo,re())),this._rootInternal}_delete(){return this._rootInternal!==null&&(vx(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&un("Cannot call "+e+" on a deleted database.")}}function q_(t=gg(),e){const n=Pc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=DI("database");s&&wx(n,...s)}return n}function wx(t,e,n,s={}){t=We(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&ls(s,r.repoInfo_.emulatorOptions))return;un("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&un('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new eo(eo.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:LI(s.mockUserToken,t.app.options.projectId);o=new eo(a)}ii(e)&&(cg(e),ug("Database",!0)),mx(r,i,s,o)}/**
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
 */function Ex(t){lA(oi),Qs(new cs("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return _x(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Pn(Mf,Df,t),Pn(Mf,Df,"esm2017")}sn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};sn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Ex();const Ix={apiKey:"AIzaSyD6rOiOiFAkse6Y3_hdzvP-Z1zRv20wrJg",authDomain:"taskproject-caf25.firebaseapp.com",projectId:"taskproject-caf25",storageBucket:"taskproject-caf25.firebasestorage.app",messagingSenderId:"1061401138693",appId:"1:1061401138693:web:03fc3339b03b4cb79eee6c",databaseURL:"https://taskproject-caf25-default-rtdb.firebaseio.com/"};kc(Ix);const rl=q_(),Cx={async refreshTasks(t){const e=il(rl,"tasks");cx(e,n=>{const s=n.val();t.commit("setTasks",s)})},async submitData(t,e){const n=e.toString();if(n!==""){const s=il(rl,"tasks"),i=ox(s),r=Xg().currentUser;if(!r){console.error("Usuário não autenticado");return}await K_(i,{taskText:n,userUID:r.uid})}},async deleteTask(t,e){const n=e.toString(),s=il(rl,"tasks/"+n);ax(s).then(()=>{console.log("Remove succeeded.")}).catch(i=>{console.error("Remove failed: "+i.message)})}},Sx={taskArray(t){return t.taskArray},taskText(t){return t.taskText}},Tx={setTasks(t,e){t.taskArray=e,console.log(t.taskArray)},registerTasks(t,e){t.taskArray.push(e)}},Rx={namespace:!0,state(){return{taskArray:[],taskText:""}},actions:Cx,getters:Sx,mutations:Tx},Ax=rA({modules:{task:Rx}}),Px={},kx={class:"min-h-screen dark:bg-gray-900"};function xx(t,e){const n=_t("router-view");return mt(),jn("div",kx,[_e(n)])}const Nx=Hn(Px,[["render",xx]]),Ox={},Mx={class:"bg-white hover:bg-gray-100 text-gray-800 py-1.5 px-3 border border-gray-400 rounded shadow dark:bg-sky-800 dark:text-white dark:hover:bg-gray-800"};function Dx(t,e){return mt(),jn("div",null,[be("button",Mx,[zo(t.$slots,"default")])])}const Lx=Hn(Ox,[["render",Dx]]),Fx={apiKey:"AIzaSyD6rOiOiFAkse6Y3_hdzvP-Z1zRv20wrJg",authDomain:"taskproject-caf25.firebaseapp.com",projectId:"taskproject-caf25",storageBucket:"taskproject-caf25.firebasestorage.app",messagingSenderId:"1061401138693",appId:"1:1061401138693:web:03fc3339b03b4cb79eee6c",databaseURL:"https://taskproject-caf25-default-rtdb.firebaseio.com/"},pi=Ob(Nx);kc(Fx);q_();pi.component("content-box",_m);pi.component("base-button",Lx);pi.use(Jb);pi.use(Ax);pi.use(BR);pi.mount("#app");export{jx as A,Zg as B,gr as C,Vx as D,ax as E,Me as F,Wi as G,no as H,tg as I,Hn as _,_e as a,be as b,jn as c,_t as d,Mu as e,$x as f,Xg as g,Bx as h,mt as i,zo as j,uR as k,Ux as l,kR as m,bR as n,ep as o,q_ as p,Kx as q,ne as r,Gx as s,Wx as t,hE as u,_l as v,yt as w,il as x,cx as y,hc as z};
