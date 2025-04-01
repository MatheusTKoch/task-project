(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Yl(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const we={},Ss=[],wt=()=>{},q_=()=>!1,G_=/^on[^a-z]/,xo=t=>G_.test(t),Ql=t=>t.startsWith("onUpdate:"),ke=Object.assign,Jl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Y_=Object.prototype.hasOwnProperty,re=(t,e)=>Y_.call(t,e),$=Array.isArray,ks=t=>ci(t)==="[object Map]",Js=t=>ci(t)==="[object Set]",Wu=t=>ci(t)==="[object Date]",Y=t=>typeof t=="function",Re=t=>typeof t=="string",$r=t=>typeof t=="symbol",he=t=>t!==null&&typeof t=="object",Ch=t=>he(t)&&Y(t.then)&&Y(t.catch),Th=Object.prototype.toString,ci=t=>Th.call(t),Q_=t=>ci(t).slice(8,-1),Sh=t=>ci(t)==="[object Object]",Xl=t=>Re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fi=Yl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),No=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},J_=/-(\w)/g,Mt=No(t=>t.replace(J_,(e,n)=>n?n.toUpperCase():"")),X_=/\B([A-Z])/g,cs=No(t=>t.replace(X_,"-$1").toLowerCase()),Oo=No(t=>t.charAt(0).toUpperCase()+t.slice(1)),va=No(t=>t?`on${Oo(t)}`:""),Br=(t,e)=>!Object.is(t,e),Ui=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},qi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Gi=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Z_=t=>{const e=Re(t)?Number(t):NaN;return isNaN(e)?t:e};let Vu;const Ya=()=>Vu||(Vu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zl(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Re(s)?sv(s):Zl(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Re(t))return t;if(he(t))return t}}const ev=/;(?![^(]*\))/g,tv=/:([^]+)/,nv=/\/\*[^]*?\*\//g;function sv(t){const e={};return t.replace(nv,"").split(ev).forEach(n=>{if(n){const s=n.split(tv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Jn(t){let e="";if(Re(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const s=Jn(t[n]);s&&(e+=s+" ")}else if(he(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const rv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",iv=Yl(rv);function kh(t){return!!t||t===""}function ov(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Xn(t[s],e[s]);return n}function Xn(t,e){if(t===e)return!0;let n=Wu(t),s=Wu(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=$r(t),s=$r(e),n||s)return t===e;if(n=$(t),s=$(e),n||s)return n&&s?ov(t,e):!1;if(n=he(t),s=he(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Xn(t[o],e[o]))return!1}}return String(t)===String(e)}function ec(t,e){return t.findIndex(n=>Xn(n,e))}const Yi=t=>Re(t)?t:t==null?"":$(t)||he(t)&&(t.toString===Th||!Y(t.toString))?JSON.stringify(t,Rh,2):String(t),Rh=(t,e)=>e&&e.__v_isRef?Rh(t,e.value):ks(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Js(e)?{[`Set(${e.size})`]:[...e.values()]}:he(e)&&!$(e)&&!Sh(e)?String(e):e;let at;class Ah{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=at,!e&&at&&(this.index=(at.scopes||(at.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=at;try{return at=this,e()}finally{at=n}}}on(){at=this}off(){at=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function av(t){return new Ah(t)}function lv(t,e=at){e&&e.active&&e.effects.push(t)}function Ph(){return at}function cv(t){at&&at.cleanups.push(t)}const tc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},xh=t=>(t.w&En)>0,Nh=t=>(t.n&En)>0,uv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=En},dv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];xh(r)&&!Nh(r)?r.delete(t):e[n++]=r,r.w&=~En,r.n&=~En}e.length=n}},Qi=new WeakMap;let Ir=0,En=1;const Qa=30;let mt;const zn=Symbol(""),Ja=Symbol("");class nc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,lv(this,s)}run(){if(!this.active)return this.fn();let e=mt,n=gn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=mt,mt=this,gn=!0,En=1<<++Ir,Ir<=Qa?uv(this):Ku(this),this.fn()}finally{Ir<=Qa&&dv(this),En=1<<--Ir,mt=this.parent,gn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){mt===this?this.deferStop=!0:this.active&&(Ku(this),this.onStop&&this.onStop(),this.active=!1)}}function Ku(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let gn=!0;const Oh=[];function Xs(){Oh.push(gn),gn=!1}function Zs(){const t=Oh.pop();gn=t===void 0?!0:t}function st(t,e,n){if(gn&&mt){let s=Qi.get(t);s||Qi.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=tc()),Mh(r)}}function Mh(t,e){let n=!1;Ir<=Qa?Nh(t)||(t.n|=En,n=!xh(t)):n=!t.has(mt),n&&(t.add(mt),mt.deps.push(t))}function Gt(t,e,n,s,r,i){const o=Qi.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?Xl(n)&&a.push(o.get("length")):(a.push(o.get(zn)),ks(t)&&a.push(o.get(Ja)));break;case"delete":$(t)||(a.push(o.get(zn)),ks(t)&&a.push(o.get(Ja)));break;case"set":ks(t)&&a.push(o.get(zn));break}if(a.length===1)a[0]&&Xa(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Xa(tc(l))}}function Xa(t,e){const n=$(t)?t:[...t];for(const s of n)s.computed&&zu(s);for(const s of n)s.computed||zu(s)}function zu(t,e){(t!==mt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function fv(t,e){var n;return(n=Qi.get(t))==null?void 0:n.get(e)}const hv=Yl("__proto__,__v_isRef,__isVue"),Dh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter($r)),pv=sc(),gv=sc(!1,!0),mv=sc(!0),qu=_v();function _v(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=oe(this);for(let i=0,o=this.length;i<o;i++)st(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(oe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Xs();const s=oe(this)[e].apply(this,n);return Zs(),s}}),t}function vv(t){const e=oe(this);return st(e,"has",t),e.hasOwnProperty(t)}function sc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Mv:Bh:e?$h:Uh).get(s))return s;const o=$(s);if(!t){if(o&&re(qu,r))return Reflect.get(qu,r,i);if(r==="hasOwnProperty")return vv}const a=Reflect.get(s,r,i);return($r(r)?Dh.has(r):hv(r))||(t||st(s,"get",r),e)?a:Oe(a)?o&&Xl(r)?a:a.value:he(a)?t?Do(a):er(a):a}}const yv=Lh(),bv=Lh(!0);function Lh(t=!1){return function(n,s,r,i){let o=n[s];if(Us(o)&&Oe(o)&&!Oe(r))return!1;if(!t&&(!Ji(r)&&!Us(r)&&(o=oe(o),r=oe(r)),!$(n)&&Oe(o)&&!Oe(r)))return o.value=r,!0;const a=$(n)&&Xl(s)?Number(s)<n.length:re(n,s),l=Reflect.set(n,s,r,i);return n===oe(i)&&(a?Br(r,o)&&Gt(n,"set",s,r):Gt(n,"add",s,r)),l}}function wv(t,e){const n=re(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Gt(t,"delete",e,void 0),s}function Ev(t,e){const n=Reflect.has(t,e);return(!$r(e)||!Dh.has(e))&&st(t,"has",e),n}function Iv(t){return st(t,"iterate",$(t)?"length":zn),Reflect.ownKeys(t)}const Fh={get:pv,set:yv,deleteProperty:wv,has:Ev,ownKeys:Iv},Cv={get:mv,set(t,e){return!0},deleteProperty(t,e){return!0}},Tv=ke({},Fh,{get:gv,set:bv}),rc=t=>t,Mo=t=>Reflect.getPrototypeOf(t);function Ii(t,e,n=!1,s=!1){t=t.__v_raw;const r=oe(t),i=oe(e);n||(e!==i&&st(r,"get",e),st(r,"get",i));const{has:o}=Mo(r),a=s?rc:n?ac:jr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Ci(t,e=!1){const n=this.__v_raw,s=oe(n),r=oe(t);return e||(t!==r&&st(s,"has",t),st(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Ti(t,e=!1){return t=t.__v_raw,!e&&st(oe(t),"iterate",zn),Reflect.get(t,"size",t)}function Gu(t){t=oe(t);const e=oe(this);return Mo(e).has.call(e,t)||(e.add(t),Gt(e,"add",t,t)),this}function Yu(t,e){e=oe(e);const n=oe(this),{has:s,get:r}=Mo(n);let i=s.call(n,t);i||(t=oe(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Br(e,o)&&Gt(n,"set",t,e):Gt(n,"add",t,e),this}function Qu(t){const e=oe(this),{has:n,get:s}=Mo(e);let r=n.call(e,t);r||(t=oe(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Gt(e,"delete",t,void 0),i}function Ju(){const t=oe(this),e=t.size!==0,n=t.clear();return e&&Gt(t,"clear",void 0,void 0),n}function Si(t,e){return function(s,r){const i=this,o=i.__v_raw,a=oe(o),l=e?rc:t?ac:jr;return!t&&st(a,"iterate",zn),o.forEach((c,u)=>s.call(r,l(c),l(u),i))}}function ki(t,e,n){return function(...s){const r=this.__v_raw,i=oe(r),o=ks(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...s),u=n?rc:e?ac:jr;return!e&&st(i,"iterate",l?Ja:zn),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function nn(t){return function(...e){return t==="delete"?!1:this}}function Sv(){const t={get(i){return Ii(this,i)},get size(){return Ti(this)},has:Ci,add:Gu,set:Yu,delete:Qu,clear:Ju,forEach:Si(!1,!1)},e={get(i){return Ii(this,i,!1,!0)},get size(){return Ti(this)},has:Ci,add:Gu,set:Yu,delete:Qu,clear:Ju,forEach:Si(!1,!0)},n={get(i){return Ii(this,i,!0)},get size(){return Ti(this,!0)},has(i){return Ci.call(this,i,!0)},add:nn("add"),set:nn("set"),delete:nn("delete"),clear:nn("clear"),forEach:Si(!0,!1)},s={get(i){return Ii(this,i,!0,!0)},get size(){return Ti(this,!0)},has(i){return Ci.call(this,i,!0)},add:nn("add"),set:nn("set"),delete:nn("delete"),clear:nn("clear"),forEach:Si(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ki(i,!1,!1),n[i]=ki(i,!0,!1),e[i]=ki(i,!1,!0),s[i]=ki(i,!0,!0)}),[t,n,e,s]}const[kv,Rv,Av,Pv]=Sv();function ic(t,e){const n=e?t?Pv:Av:t?Rv:kv;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(re(n,r)&&r in s?n:s,r,i)}const xv={get:ic(!1,!1)},Nv={get:ic(!1,!0)},Ov={get:ic(!0,!1)},Uh=new WeakMap,$h=new WeakMap,Bh=new WeakMap,Mv=new WeakMap;function Dv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Lv(t){return t.__v_skip||!Object.isExtensible(t)?0:Dv(Q_(t))}function er(t){return Us(t)?t:oc(t,!1,Fh,xv,Uh)}function Fv(t){return oc(t,!1,Tv,Nv,$h)}function Do(t){return oc(t,!0,Cv,Ov,Bh)}function oc(t,e,n,s,r){if(!he(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Lv(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Rs(t){return Us(t)?Rs(t.__v_raw):!!(t&&t.__v_isReactive)}function Us(t){return!!(t&&t.__v_isReadonly)}function Ji(t){return!!(t&&t.__v_isShallow)}function jh(t){return Rs(t)||Us(t)}function oe(t){const e=t&&t.__v_raw;return e?oe(e):t}function Hh(t){return qi(t,"__v_skip",!0),t}const jr=t=>he(t)?er(t):t,ac=t=>he(t)?Do(t):t;function lc(t){gn&&mt&&(t=oe(t),Mh(t.dep||(t.dep=tc())))}function cc(t,e){t=oe(t);const n=t.dep;n&&Xa(n)}function Oe(t){return!!(t&&t.__v_isRef===!0)}function ee(t){return Vh(t,!1)}function Wh(t){return Vh(t,!0)}function Vh(t,e){return Oe(t)?t:new Uv(t,e)}class Uv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:oe(e),this._value=n?e:jr(e)}get value(){return lc(this),this._value}set value(e){const n=this.__v_isShallow||Ji(e)||Us(e);e=n?e:oe(e),Br(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:jr(e),cc(this))}}function As(t){return Oe(t)?t.value:t}const $v={get:(t,e,n)=>As(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Oe(r)&&!Oe(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Kh(t){return Rs(t)?t:new Proxy(t,$v)}class Bv{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=e(()=>lc(this),()=>cc(this));this._get=n,this._set=s}get value(){return this._get()}set value(e){this._set(e)}}function jv(t){return new Bv(t)}class Hv{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return fv(oe(this._object),this._key)}}class Wv{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Vv(t,e,n){return Oe(t)?t:Y(t)?new Wv(t):he(t)&&arguments.length>1?Kv(t,e,n):ee(t)}function Kv(t,e,n){const s=t[e];return Oe(s)?s:new Hv(t,e,n)}class zv{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new nc(e,()=>{this._dirty||(this._dirty=!0,cc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=oe(this);return lc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function qv(t,e,n=!1){let s,r;const i=Y(t);return i?(s=t,r=wt):(s=t.get,r=t.set),new zv(s,r,i||!r,n)}function mn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Lo(i,e,n)}return r}function dt(t,e,n,s){if(Y(t)){const i=mn(t,e,n,s);return i&&Ch(i)&&i.catch(o=>{Lo(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(dt(t[i],e,n,s));return r}function Lo(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){mn(l,null,10,[t,o,a]);return}}Gv(t,n,r,s)}function Gv(t,e,n,s=!0){console.error(t)}let Hr=!1,Za=!1;const We=[];let Pt=0;const Ps=[];let $t=null,$n=0;const zh=Promise.resolve();let uc=null;function Et(t){const e=uc||zh;return t?e.then(this?t.bind(this):t):e}function Yv(t){let e=Pt+1,n=We.length;for(;e<n;){const s=e+n>>>1;Wr(We[s])<t?e=s+1:n=s}return e}function dc(t){(!We.length||!We.includes(t,Hr&&t.allowRecurse?Pt+1:Pt))&&(t.id==null?We.push(t):We.splice(Yv(t.id),0,t),qh())}function qh(){!Hr&&!Za&&(Za=!0,uc=zh.then(Yh))}function Qv(t){const e=We.indexOf(t);e>Pt&&We.splice(e,1)}function Jv(t){$(t)?Ps.push(...t):(!$t||!$t.includes(t,t.allowRecurse?$n+1:$n))&&Ps.push(t),qh()}function Xu(t,e=Hr?Pt+1:0){for(;e<We.length;e++){const n=We[e];n&&n.pre&&(We.splice(e,1),e--,n())}}function Gh(t){if(Ps.length){const e=[...new Set(Ps)];if(Ps.length=0,$t){$t.push(...e);return}for($t=e,$t.sort((n,s)=>Wr(n)-Wr(s)),$n=0;$n<$t.length;$n++)$t[$n]();$t=null,$n=0}}const Wr=t=>t.id==null?1/0:t.id,Xv=(t,e)=>{const n=Wr(t)-Wr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Yh(t){Za=!1,Hr=!0,We.sort(Xv);const e=wt;try{for(Pt=0;Pt<We.length;Pt++){const n=We[Pt];n&&n.active!==!1&&mn(n,null,14)}}finally{Pt=0,We.length=0,Gh(),Hr=!1,uc=null,(We.length||Ps.length)&&Yh()}}function Zv(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||we;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:f}=s[u]||we;f&&(r=n.map(p=>Re(p)?p.trim():p)),d&&(r=n.map(Gi))}let a,l=s[a=va(e)]||s[a=va(Mt(e))];!l&&i&&(l=s[a=va(cs(e))]),l&&dt(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,dt(c,t,6,r)}}function Qh(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Y(t)){const l=c=>{const u=Qh(c,e,!0);u&&(a=!0,ke(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(he(t)&&s.set(t,null),null):($(i)?i.forEach(l=>o[l]=null):ke(o,i),he(t)&&s.set(t,o),o)}function Fo(t,e){return!t||!xo(e)?!1:(e=e.slice(2).replace(/Once$/,""),re(t,e[0].toLowerCase()+e.slice(1))||re(t,cs(e))||re(t,e))}let je=null,Uo=null;function Xi(t){const e=je;return je=t,Uo=t&&t.type.__scopeId||null,e}function Jh(t){Uo=t}function Xh(){Uo=null}function Xe(t,e=je,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&ud(-1);const i=Xi(e);let o;try{o=t(...r)}finally{Xi(i),s._d&&ud(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ya(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:f,setupState:p,ctx:m,inheritAttrs:g}=t;let v,I;const T=Xi(t);try{if(n.shapeFlag&4){const R=r||s;v=At(u.call(R,R,d,i,p,f,m)),I=l}else{const R=e;v=At(R.length>1?R(i,{attrs:l,slots:a,emit:c}):R(i,null)),I=e.props?l:ey(l)}}catch(R){Pr.length=0,Lo(R,t,1),v=ie(ft)}let O=v;if(I&&g!==!1){const R=Object.keys(I),{shapeFlag:G}=O;R.length&&G&7&&(o&&R.some(Ql)&&(I=ty(I,o)),O=Yt(O,I))}return n.dirs&&(O=Yt(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),v=O,Xi(T),v}const ey=t=>{let e;for(const n in t)(n==="class"||n==="style"||xo(n))&&((e||(e={}))[n]=t[n]);return e},ty=(t,e)=>{const n={};for(const s in t)(!Ql(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function ny(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Zu(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==s[f]&&!Fo(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Zu(s,o,c):!0:!!o;return!1}function Zu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Fo(n,i))return!0}return!1}function sy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ry=t=>t.__isSuspense;function iy(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):Jv(t)}function tr(t,e){return fc(t,null,e)}const Ri={};function xt(t,e,n){return fc(t,e,n)}function fc(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=we){var a;const l=Ph()===((a=Ue)==null?void 0:a.scope)?Ue:null;let c,u=!1,d=!1;if(Oe(t)?(c=()=>t.value,u=Ji(t)):Rs(t)?(c=()=>t,s=!0):$(t)?(d=!0,u=t.some(R=>Rs(R)||Ji(R)),c=()=>t.map(R=>{if(Oe(R))return R.value;if(Rs(R))return Hn(R);if(Y(R))return mn(R,l,2)})):Y(t)?e?c=()=>mn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),dt(t,l,3,[p])}:c=wt,e&&s){const R=c;c=()=>Hn(R())}let f,p=R=>{f=T.onStop=()=>{mn(R,l,4)}},m;if(Kr)if(p=wt,e?n&&dt(e,l,3,[c(),d?[]:void 0,p]):c(),r==="sync"){const R=tb();m=R.__watcherHandles||(R.__watcherHandles=[])}else return wt;let g=d?new Array(t.length).fill(Ri):Ri;const v=()=>{if(T.active)if(e){const R=T.run();(s||u||(d?R.some((G,U)=>Br(G,g[U])):Br(R,g)))&&(f&&f(),dt(e,l,3,[R,g===Ri?void 0:d&&g[0]===Ri?[]:g,p]),g=R)}else T.run()};v.allowRecurse=!!e;let I;r==="sync"?I=v:r==="post"?I=()=>Qe(v,l&&l.suspense):(v.pre=!0,l&&(v.id=l.uid),I=()=>dc(v));const T=new nc(c,I);e?n?v():g=T.run():r==="post"?Qe(T.run.bind(T),l&&l.suspense):T.run();const O=()=>{T.stop(),l&&l.scope&&Jl(l.scope.effects,T)};return m&&m.push(O),O}function oy(t,e,n){const s=this.proxy,r=Re(t)?t.includes(".")?Zh(s,t):()=>s[t]:t.bind(s,s);let i;Y(e)?i=e:(i=e.handler,n=e);const o=Ue;$s(this);const a=fc(r,i.bind(s),n);return o?$s(o):Gn(),a}function Zh(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Hn(t,e){if(!he(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Oe(t))Hn(t.value,e);else if($(t))for(let n=0;n<t.length;n++)Hn(t[n],e);else if(Js(t)||ks(t))t.forEach(n=>{Hn(n,e)});else if(Sh(t))for(const n in t)Hn(t[n],e);return t}function el(t,e){const n=je;if(n===null)return t;const s=Vo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=we]=e[i];o&&(Y(o)&&(o={mounted:o,updated:o}),o.deep&&Hn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function On(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(Xs(),dt(l,n,8,[t.el,a,t,e]),Zs())}}function ay(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return us(()=>{t.isMounted=!0}),hc(()=>{t.isUnmounting=!0}),t}const ct=[Function,Array],ep={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ct,onEnter:ct,onAfterEnter:ct,onEnterCancelled:ct,onBeforeLeave:ct,onLeave:ct,onAfterLeave:ct,onLeaveCancelled:ct,onBeforeAppear:ct,onAppear:ct,onAfterAppear:ct,onAppearCancelled:ct},ly={name:"BaseTransition",props:ep,setup(t,{slots:e}){const n=vc(),s=ay();let r;return()=>{const i=e.default&&np(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const g of i)if(g.type!==ft){o=g;break}}const a=oe(t),{mode:l}=a;if(s.isLeaving)return ba(o);const c=ed(o);if(!c)return ba(o);const u=tl(c,a,s,n);nl(c,u);const d=n.subTree,f=d&&ed(d);let p=!1;const{getTransitionKey:m}=c.type;if(m){const g=m();r===void 0?r=g:g!==r&&(r=g,p=!0)}if(f&&f.type!==ft&&(!Bn(c,f)||p)){const g=tl(f,a,s,n);if(nl(f,g),l==="out-in")return s.isLeaving=!0,g.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},ba(o);l==="in-out"&&c.type!==ft&&(g.delayLeave=(v,I,T)=>{const O=tp(s,f);O[String(f.key)]=f,v._leaveCb=()=>{I(),v._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=T})}return o}}},cy=ly;function tp(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function tl(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:g,onAppear:v,onAfterAppear:I,onAppearCancelled:T}=e,O=String(t.key),R=tp(n,t),G=(P,W)=>{P&&dt(P,s,9,W)},U=(P,W)=>{const V=W[1];G(P,W),$(P)?P.every(Ae=>Ae.length<=1)&&V():P.length<=1&&V()},Q={mode:i,persisted:o,beforeEnter(P){let W=a;if(!n.isMounted)if(r)W=g||a;else return;P._leaveCb&&P._leaveCb(!0);const V=R[O];V&&Bn(t,V)&&V.el._leaveCb&&V.el._leaveCb(),G(W,[P])},enter(P){let W=l,V=c,Ae=u;if(!n.isMounted)if(r)W=v||l,V=I||c,Ae=T||u;else return;let F=!1;const ye=P._enterCb=$e=>{F||(F=!0,$e?G(Ae,[P]):G(V,[P]),Q.delayedLeave&&Q.delayedLeave(),P._enterCb=void 0)};W?U(W,[P,ye]):ye()},leave(P,W){const V=String(t.key);if(P._enterCb&&P._enterCb(!0),n.isUnmounting)return W();G(d,[P]);let Ae=!1;const F=P._leaveCb=ye=>{Ae||(Ae=!0,W(),ye?G(m,[P]):G(p,[P]),P._leaveCb=void 0,R[V]===t&&delete R[V])};R[V]=t,f?U(f,[P,F]):F()},clone(P){return tl(P,e,n,s)}};return Q}function ba(t){if($o(t))return t=Yt(t),t.children=null,t}function ed(t){return $o(t)?t.children?t.children[0]:void 0:t}function nl(t,e){t.shapeFlag&6&&t.component?nl(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function np(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Le?(o.patchFlag&128&&r++,s=s.concat(np(o.children,e,a))):(e||o.type!==ft)&&s.push(a!=null?Yt(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Zt(t,e){return Y(t)?(()=>ke({name:t.name},e,{setup:t}))():t}const Rr=t=>!!t.type.__asyncLoader,$o=t=>t.type.__isKeepAlive;function uy(t,e){sp(t,"a",e)}function dy(t,e){sp(t,"da",e)}function sp(t,e,n=Ue){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Bo(e,s,n),n){let r=n.parent;for(;r&&r.parent;)$o(r.parent.vnode)&&fy(s,e,n,r),r=r.parent}}function fy(t,e,n,s){const r=Bo(e,t,s,!0);jo(()=>{Jl(s[e],r)},n)}function Bo(t,e,n=Ue,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Xs(),$s(n);const a=dt(e,n,t,o);return Gn(),Zs(),a});return s?r.unshift(i):r.push(i),i}}const en=t=>(e,n=Ue)=>(!Kr||t==="sp")&&Bo(t,(...s)=>e(...s),n),hy=en("bm"),us=en("m"),py=en("bu"),gy=en("u"),hc=en("bum"),jo=en("um"),my=en("sp"),_y=en("rtg"),vy=en("rtc");function yy(t,e=Ue){Bo("ec",t,e)}const rp="components";function ze(t,e){return wy(rp,t,!0,e)||t}const by=Symbol.for("v-ndc");function wy(t,e,n=!0,s=!1){const r=je||Ue;if(r){const i=r.type;if(t===rp){const a=Xy(i,!1);if(a&&(a===e||a===Mt(e)||a===Oo(Mt(e))))return i}const o=td(r[t]||i[t],e)||td(r.appContext[t],e);return!o&&s?i:o}}function td(t,e){return t&&(t[e]||t[Mt(e)]||t[Oo(Mt(e))])}function Ey(t,e,n,s){let r;const i=n&&n[s];if($(t)||Re(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(he(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function ui(t,e,n={},s,r){if(je.isCE||je.parent&&Rr(je.parent)&&je.parent.isCE)return e!=="default"&&(n.name=e),ie("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),Be();const o=i&&ip(i(n)),a=mc(Le,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function ip(t){return t.some(e=>to(e)?!(e.type===ft||e.type===Le&&!ip(e.children)):!0)?t:null}const sl=t=>t?mp(t)?Vo(t)||t.proxy:sl(t.parent):null,Ar=ke(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>sl(t.parent),$root:t=>sl(t.root),$emit:t=>t.emit,$options:t=>pc(t),$forceUpdate:t=>t.f||(t.f=()=>dc(t.update)),$nextTick:t=>t.n||(t.n=Et.bind(t.proxy)),$watch:t=>oy.bind(t)}),wa=(t,e)=>t!==we&&!t.__isScriptSetup&&re(t,e),Iy={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(wa(s,e))return o[e]=1,s[e];if(r!==we&&re(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&re(c,e))return o[e]=3,i[e];if(n!==we&&re(n,e))return o[e]=4,n[e];rl&&(o[e]=0)}}const u=Ar[e];let d,f;if(u)return e==="$attrs"&&st(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==we&&re(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,re(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return wa(r,e)?(r[e]=n,!0):s!==we&&re(s,e)?(s[e]=n,!0):re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==we&&re(t,o)||wa(e,o)||(a=i[0])&&re(a,o)||re(s,o)||re(Ar,o)||re(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function nd(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let rl=!0;function Cy(t){const e=pc(t),n=t.proxy,s=t.ctx;rl=!1,e.beforeCreate&&sd(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:m,activated:g,deactivated:v,beforeDestroy:I,beforeUnmount:T,destroyed:O,unmounted:R,render:G,renderTracked:U,renderTriggered:Q,errorCaptured:P,serverPrefetch:W,expose:V,inheritAttrs:Ae,components:F,directives:ye,filters:$e}=e;if(c&&Ty(c,s,null),o)for(const me in o){const ue=o[me];Y(ue)&&(s[me]=ue.bind(n))}if(r){const me=r.call(n,n);he(me)&&(t.data=er(me))}if(rl=!0,i)for(const me in i){const ue=i[me],ht=Y(ue)?ue.bind(n,n):Y(ue.get)?ue.get.bind(n,n):wt,Nn=!Y(ue)&&Y(ue.set)?ue.set.bind(n):wt,pt=ce({get:ht,set:Nn});Object.defineProperty(s,me,{enumerable:!0,configurable:!0,get:()=>pt.value,set:Ye=>pt.value=Ye})}if(a)for(const me in a)op(a[me],s,n,me);if(l){const me=Y(l)?l.call(n):l;Reflect.ownKeys(me).forEach(ue=>{xs(ue,me[ue])})}u&&sd(u,t,"c");function Ee(me,ue){$(ue)?ue.forEach(ht=>me(ht.bind(n))):ue&&me(ue.bind(n))}if(Ee(hy,d),Ee(us,f),Ee(py,p),Ee(gy,m),Ee(uy,g),Ee(dy,v),Ee(yy,P),Ee(vy,U),Ee(_y,Q),Ee(hc,T),Ee(jo,R),Ee(my,W),$(V))if(V.length){const me=t.exposed||(t.exposed={});V.forEach(ue=>{Object.defineProperty(me,ue,{get:()=>n[ue],set:ht=>n[ue]=ht})})}else t.exposed||(t.exposed={});G&&t.render===wt&&(t.render=G),Ae!=null&&(t.inheritAttrs=Ae),F&&(t.components=F),ye&&(t.directives=ye)}function Ty(t,e,n=wt){$(t)&&(t=il(t));for(const s in t){const r=t[s];let i;he(r)?"default"in r?i=et(r.from||s,r.default,!0):i=et(r.from||s):i=et(r),Oe(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function sd(t,e,n){dt($(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function op(t,e,n,s){const r=s.includes(".")?Zh(n,s):()=>n[s];if(Re(t)){const i=e[t];Y(i)&&xt(r,i)}else if(Y(t))xt(r,t.bind(n));else if(he(t))if($(t))t.forEach(i=>op(i,e,n,s));else{const i=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(i)&&xt(r,i,t)}}function pc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>Zi(l,c,o,!0)),Zi(l,e,o)),he(e)&&i.set(e,l),l}function Zi(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Zi(t,i,n,!0),r&&r.forEach(o=>Zi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Sy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Sy={data:rd,props:id,emits:id,methods:Cr,computed:Cr,beforeCreate:Ke,created:Ke,beforeMount:Ke,mounted:Ke,beforeUpdate:Ke,updated:Ke,beforeDestroy:Ke,beforeUnmount:Ke,destroyed:Ke,unmounted:Ke,activated:Ke,deactivated:Ke,errorCaptured:Ke,serverPrefetch:Ke,components:Cr,directives:Cr,watch:Ry,provide:rd,inject:ky};function rd(t,e){return e?t?function(){return ke(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function ky(t,e){return Cr(il(t),il(e))}function il(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ke(t,e){return t?[...new Set([].concat(t,e))]:e}function Cr(t,e){return t?ke(Object.create(null),t,e):e}function id(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:ke(Object.create(null),nd(t),nd(e??{})):e}function Ry(t,e){if(!t)return e;if(!e)return t;const n=ke(Object.create(null),t);for(const s in e)n[s]=Ke(t[s],e[s]);return n}function ap(){return{app:null,config:{isNativeTag:q_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ay=0;function Py(t,e){return function(s,r=null){Y(s)||(s=ke({},s)),r!=null&&!he(r)&&(r=null);const i=ap(),o=new Set;let a=!1;const l=i.app={_uid:Ay++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:nb,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&Y(c.install)?(o.add(c),c.install(l,...u)):Y(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,d){if(!a){const f=ie(s,r);return f.appContext=i,u&&e?e(f,c):t(f,c,d),a=!0,l._container=c,c.__vue_app__=l,Vo(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){eo=l;try{return c()}finally{eo=null}}};return l}}let eo=null;function xs(t,e){if(Ue){let n=Ue.provides;const s=Ue.parent&&Ue.parent.provides;s===n&&(n=Ue.provides=Object.create(s)),n[t]=e}}function et(t,e,n=!1){const s=Ue||je;if(s||eo){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:eo._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Y(e)?e.call(s&&s.proxy):e}}function xy(t,e,n,s=!1){const r={},i={};qi(i,Wo,1),t.propsDefaults=Object.create(null),lp(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Fv(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Ny(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=oe(r),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Fo(t.emitsOptions,f))continue;const p=e[f];if(l)if(re(i,f))p!==i[f]&&(i[f]=p,c=!0);else{const m=Mt(f);r[m]=ol(l,a,m,p,t,!1)}else p!==i[f]&&(i[f]=p,c=!0)}}}else{lp(t,e,r,i)&&(c=!0);let u;for(const d in a)(!e||!re(e,d)&&((u=cs(d))===d||!re(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=ol(l,a,d,void 0,t,!0)):delete r[d]);if(i!==a)for(const d in i)(!e||!re(e,d))&&(delete i[d],c=!0)}c&&Gt(t,"set","$attrs")}function lp(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Fi(l))continue;const c=e[l];let u;r&&re(r,u=Mt(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Fo(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=oe(n),c=a||we;for(let u=0;u<i.length;u++){const d=i[u];n[d]=ol(r,l,d,c[d],t,!re(c,d))}}return o}function ol(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=re(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Y(l)){const{propsDefaults:c}=r;n in c?s=c[n]:($s(r),s=c[n]=l.call(null,e),Gn())}else s=l}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===cs(n))&&(s=!0))}return s}function cp(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!Y(t)){const u=d=>{l=!0;const[f,p]=cp(d,e,!0);ke(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return he(t)&&s.set(t,Ss),Ss;if($(i))for(let u=0;u<i.length;u++){const d=Mt(i[u]);od(d)&&(o[d]=we)}else if(i)for(const u in i){const d=Mt(u);if(od(d)){const f=i[u],p=o[d]=$(f)||Y(f)?{type:f}:ke({},f);if(p){const m=cd(Boolean,p.type),g=cd(String,p.type);p[0]=m>-1,p[1]=g<0||m<g,(m>-1||re(p,"default"))&&a.push(d)}}}const c=[o,a];return he(t)&&s.set(t,c),c}function od(t){return t[0]!=="$"}function ad(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ld(t,e){return ad(t)===ad(e)}function cd(t,e){return $(e)?e.findIndex(n=>ld(n,t)):Y(e)&&ld(e,t)?0:-1}const up=t=>t[0]==="_"||t==="$stable",gc=t=>$(t)?t.map(At):[At(t)],Oy=(t,e,n)=>{if(e._n)return e;const s=Xe((...r)=>gc(e(...r)),n);return s._c=!1,s},dp=(t,e,n)=>{const s=t._ctx;for(const r in t){if(up(r))continue;const i=t[r];if(Y(i))e[r]=Oy(r,i,s);else if(i!=null){const o=gc(i);e[r]=()=>o}}},fp=(t,e)=>{const n=gc(e);t.slots.default=()=>n},My=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=oe(e),qi(e,"_",n)):dp(e,t.slots={})}else t.slots={},e&&fp(t,e);qi(t.slots,Wo,1)},Dy=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=we;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ke(r,e),!n&&a===1&&delete r._):(i=!e.$stable,dp(e,r)),o=e}else e&&(fp(t,e),o={default:1});if(i)for(const a in r)!up(a)&&!(a in o)&&delete r[a]};function al(t,e,n,s,r=!1){if($(t)){t.forEach((f,p)=>al(f,e&&($(e)?e[p]:e),n,s,r));return}if(Rr(s)&&!r)return;const i=s.shapeFlag&4?Vo(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===we?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Re(c)?(u[c]=null,re(d,c)&&(d[c]=null)):Oe(c)&&(c.value=null)),Y(l))mn(l,a,12,[o,u]);else{const f=Re(l),p=Oe(l);if(f||p){const m=()=>{if(t.f){const g=f?re(d,l)?d[l]:u[l]:l.value;r?$(g)&&Jl(g,i):$(g)?g.includes(i)||g.push(i):f?(u[l]=[i],re(d,l)&&(d[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,re(d,l)&&(d[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Qe(m,n)):m()}}}const Qe=iy;function Ly(t){return Fy(t)}function Fy(t,e){const n=Ya();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=wt,insertStaticContent:m}=t,g=(h,_,y,b=null,E=null,A=null,M=!1,k=null,x=!!_.dynamicChildren)=>{if(h===_)return;h&&!Bn(h,_)&&(b=N(h),Ye(h,E,A,!0),h=null),_.patchFlag===-2&&(x=!1,_.dynamicChildren=null);const{type:C,ref:j,shapeFlag:L}=_;switch(C){case Ho:v(h,_,y,b);break;case ft:I(h,_,y,b);break;case Ea:h==null&&T(_,y,b,M);break;case Le:F(h,_,y,b,E,A,M,k,x);break;default:L&1?G(h,_,y,b,E,A,M,k,x):L&6?ye(h,_,y,b,E,A,M,k,x):(L&64||L&128)&&C.process(h,_,y,b,E,A,M,k,x,le)}j!=null&&E&&al(j,h&&h.ref,A,_||h,!_)},v=(h,_,y,b)=>{if(h==null)s(_.el=a(_.children),y,b);else{const E=_.el=h.el;_.children!==h.children&&c(E,_.children)}},I=(h,_,y,b)=>{h==null?s(_.el=l(_.children||""),y,b):_.el=h.el},T=(h,_,y,b)=>{[h.el,h.anchor]=m(h.children,_,y,b,h.el,h.anchor)},O=({el:h,anchor:_},y,b)=>{let E;for(;h&&h!==_;)E=f(h),s(h,y,b),h=E;s(_,y,b)},R=({el:h,anchor:_})=>{let y;for(;h&&h!==_;)y=f(h),r(h),h=y;r(_)},G=(h,_,y,b,E,A,M,k,x)=>{M=M||_.type==="svg",h==null?U(_,y,b,E,A,M,k,x):W(h,_,E,A,M,k,x)},U=(h,_,y,b,E,A,M,k)=>{let x,C;const{type:j,props:L,shapeFlag:H,transition:q,dirs:se}=h;if(x=h.el=o(h.type,A,L&&L.is,L),H&8?u(x,h.children):H&16&&P(h.children,x,null,b,E,A&&j!=="foreignObject",M,k),se&&On(h,null,b,"created"),Q(x,h,h.scopeId,M,b),L){for(const de in L)de!=="value"&&!Fi(de)&&i(x,de,null,L[de],A,h.children,b,E,D);"value"in L&&i(x,"value",null,L.value),(C=L.onVnodeBeforeMount)&&kt(C,b,h)}se&&On(h,null,b,"beforeMount");const _e=(!E||E&&!E.pendingBranch)&&q&&!q.persisted;_e&&q.beforeEnter(x),s(x,_,y),((C=L&&L.onVnodeMounted)||_e||se)&&Qe(()=>{C&&kt(C,b,h),_e&&q.enter(x),se&&On(h,null,b,"mounted")},E)},Q=(h,_,y,b,E)=>{if(y&&p(h,y),b)for(let A=0;A<b.length;A++)p(h,b[A]);if(E){let A=E.subTree;if(_===A){const M=E.vnode;Q(h,M,M.scopeId,M.slotScopeIds,E.parent)}}},P=(h,_,y,b,E,A,M,k,x=0)=>{for(let C=x;C<h.length;C++){const j=h[C]=k?cn(h[C]):At(h[C]);g(null,j,_,y,b,E,A,M,k)}},W=(h,_,y,b,E,A,M)=>{const k=_.el=h.el;let{patchFlag:x,dynamicChildren:C,dirs:j}=_;x|=h.patchFlag&16;const L=h.props||we,H=_.props||we;let q;y&&Mn(y,!1),(q=H.onVnodeBeforeUpdate)&&kt(q,y,_,h),j&&On(_,h,y,"beforeUpdate"),y&&Mn(y,!0);const se=E&&_.type!=="foreignObject";if(C?V(h.dynamicChildren,C,k,y,b,se,A):M||ue(h,_,k,null,y,b,se,A,!1),x>0){if(x&16)Ae(k,_,L,H,y,b,E);else if(x&2&&L.class!==H.class&&i(k,"class",null,H.class,E),x&4&&i(k,"style",L.style,H.style,E),x&8){const _e=_.dynamicProps;for(let de=0;de<_e.length;de++){const Se=_e[de],gt=L[Se],ms=H[Se];(ms!==gt||Se==="value")&&i(k,Se,gt,ms,E,h.children,y,b,D)}}x&1&&h.children!==_.children&&u(k,_.children)}else!M&&C==null&&Ae(k,_,L,H,y,b,E);((q=H.onVnodeUpdated)||j)&&Qe(()=>{q&&kt(q,y,_,h),j&&On(_,h,y,"updated")},b)},V=(h,_,y,b,E,A,M)=>{for(let k=0;k<_.length;k++){const x=h[k],C=_[k],j=x.el&&(x.type===Le||!Bn(x,C)||x.shapeFlag&70)?d(x.el):y;g(x,C,j,null,b,E,A,M,!0)}},Ae=(h,_,y,b,E,A,M)=>{if(y!==b){if(y!==we)for(const k in y)!Fi(k)&&!(k in b)&&i(h,k,y[k],null,M,_.children,E,A,D);for(const k in b){if(Fi(k))continue;const x=b[k],C=y[k];x!==C&&k!=="value"&&i(h,k,C,x,M,_.children,E,A,D)}"value"in b&&i(h,"value",y.value,b.value)}},F=(h,_,y,b,E,A,M,k,x)=>{const C=_.el=h?h.el:a(""),j=_.anchor=h?h.anchor:a("");let{patchFlag:L,dynamicChildren:H,slotScopeIds:q}=_;q&&(k=k?k.concat(q):q),h==null?(s(C,y,b),s(j,y,b),P(_.children,y,j,E,A,M,k,x)):L>0&&L&64&&H&&h.dynamicChildren?(V(h.dynamicChildren,H,y,E,A,M,k),(_.key!=null||E&&_===E.subTree)&&hp(h,_,!0)):ue(h,_,y,j,E,A,M,k,x)},ye=(h,_,y,b,E,A,M,k,x)=>{_.slotScopeIds=k,h==null?_.shapeFlag&512?E.ctx.activate(_,y,b,M,x):$e(_,y,b,E,A,M,x):tn(h,_,x)},$e=(h,_,y,b,E,A,M)=>{const k=h.component=qy(h,b,E);if($o(h)&&(k.ctx.renderer=le),Gy(k),k.asyncDep){if(E&&E.registerDep(k,Ee),!h.el){const x=k.subTree=ie(ft);I(null,x,_,y)}return}Ee(k,h,_,y,E,A,M)},tn=(h,_,y)=>{const b=_.component=h.component;if(ny(h,_,y))if(b.asyncDep&&!b.asyncResolved){me(b,_,y);return}else b.next=_,Qv(b.update),b.update();else _.el=h.el,b.vnode=_},Ee=(h,_,y,b,E,A,M)=>{const k=()=>{if(h.isMounted){let{next:j,bu:L,u:H,parent:q,vnode:se}=h,_e=j,de;Mn(h,!1),j?(j.el=se.el,me(h,j,M)):j=se,L&&Ui(L),(de=j.props&&j.props.onVnodeBeforeUpdate)&&kt(de,q,j,se),Mn(h,!0);const Se=ya(h),gt=h.subTree;h.subTree=Se,g(gt,Se,d(gt.el),N(gt),h,E,A),j.el=Se.el,_e===null&&sy(h,Se.el),H&&Qe(H,E),(de=j.props&&j.props.onVnodeUpdated)&&Qe(()=>kt(de,q,j,se),E)}else{let j;const{el:L,props:H}=_,{bm:q,m:se,parent:_e}=h,de=Rr(_);if(Mn(h,!1),q&&Ui(q),!de&&(j=H&&H.onVnodeBeforeMount)&&kt(j,_e,_),Mn(h,!0),L&&ne){const Se=()=>{h.subTree=ya(h),ne(L,h.subTree,h,E,null)};de?_.type.__asyncLoader().then(()=>!h.isUnmounted&&Se()):Se()}else{const Se=h.subTree=ya(h);g(null,Se,y,b,h,E,A),_.el=Se.el}if(se&&Qe(se,E),!de&&(j=H&&H.onVnodeMounted)){const Se=_;Qe(()=>kt(j,_e,Se),E)}(_.shapeFlag&256||_e&&Rr(_e.vnode)&&_e.vnode.shapeFlag&256)&&h.a&&Qe(h.a,E),h.isMounted=!0,_=y=b=null}},x=h.effect=new nc(k,()=>dc(C),h.scope),C=h.update=()=>x.run();C.id=h.uid,Mn(h,!0),C()},me=(h,_,y)=>{_.component=h;const b=h.vnode.props;h.vnode=_,h.next=null,Ny(h,_.props,b,y),Dy(h,_.children,y),Xs(),Xu(),Zs()},ue=(h,_,y,b,E,A,M,k,x=!1)=>{const C=h&&h.children,j=h?h.shapeFlag:0,L=_.children,{patchFlag:H,shapeFlag:q}=_;if(H>0){if(H&128){Nn(C,L,y,b,E,A,M,k,x);return}else if(H&256){ht(C,L,y,b,E,A,M,k,x);return}}q&8?(j&16&&D(C,E,A),L!==C&&u(y,L)):j&16?q&16?Nn(C,L,y,b,E,A,M,k,x):D(C,E,A,!0):(j&8&&u(y,""),q&16&&P(L,y,b,E,A,M,k,x))},ht=(h,_,y,b,E,A,M,k,x)=>{h=h||Ss,_=_||Ss;const C=h.length,j=_.length,L=Math.min(C,j);let H;for(H=0;H<L;H++){const q=_[H]=x?cn(_[H]):At(_[H]);g(h[H],q,y,null,E,A,M,k,x)}C>j?D(h,E,A,!0,!1,L):P(_,y,b,E,A,M,k,x,L)},Nn=(h,_,y,b,E,A,M,k,x)=>{let C=0;const j=_.length;let L=h.length-1,H=j-1;for(;C<=L&&C<=H;){const q=h[C],se=_[C]=x?cn(_[C]):At(_[C]);if(Bn(q,se))g(q,se,y,null,E,A,M,k,x);else break;C++}for(;C<=L&&C<=H;){const q=h[L],se=_[H]=x?cn(_[H]):At(_[H]);if(Bn(q,se))g(q,se,y,null,E,A,M,k,x);else break;L--,H--}if(C>L){if(C<=H){const q=H+1,se=q<j?_[q].el:b;for(;C<=H;)g(null,_[C]=x?cn(_[C]):At(_[C]),y,se,E,A,M,k,x),C++}}else if(C>H)for(;C<=L;)Ye(h[C],E,A,!0),C++;else{const q=C,se=C,_e=new Map;for(C=se;C<=H;C++){const ot=_[C]=x?cn(_[C]):At(_[C]);ot.key!=null&&_e.set(ot.key,C)}let de,Se=0;const gt=H-se+1;let ms=!1,Bu=0;const pr=new Array(gt);for(C=0;C<gt;C++)pr[C]=0;for(C=q;C<=L;C++){const ot=h[C];if(Se>=gt){Ye(ot,E,A,!0);continue}let St;if(ot.key!=null)St=_e.get(ot.key);else for(de=se;de<=H;de++)if(pr[de-se]===0&&Bn(ot,_[de])){St=de;break}St===void 0?Ye(ot,E,A,!0):(pr[St-se]=C+1,St>=Bu?Bu=St:ms=!0,g(ot,_[St],y,null,E,A,M,k,x),Se++)}const ju=ms?Uy(pr):Ss;for(de=ju.length-1,C=gt-1;C>=0;C--){const ot=se+C,St=_[ot],Hu=ot+1<j?_[ot+1].el:b;pr[C]===0?g(null,St,y,Hu,E,A,M,k,x):ms&&(de<0||C!==ju[de]?pt(St,y,Hu,2):de--)}}},pt=(h,_,y,b,E=null)=>{const{el:A,type:M,transition:k,children:x,shapeFlag:C}=h;if(C&6){pt(h.component.subTree,_,y,b);return}if(C&128){h.suspense.move(_,y,b);return}if(C&64){M.move(h,_,y,le);return}if(M===Le){s(A,_,y);for(let L=0;L<x.length;L++)pt(x[L],_,y,b);s(h.anchor,_,y);return}if(M===Ea){O(h,_,y);return}if(b!==2&&C&1&&k)if(b===0)k.beforeEnter(A),s(A,_,y),Qe(()=>k.enter(A),E);else{const{leave:L,delayLeave:H,afterLeave:q}=k,se=()=>s(A,_,y),_e=()=>{L(A,()=>{se(),q&&q()})};H?H(A,se,_e):_e()}else s(A,_,y)},Ye=(h,_,y,b=!1,E=!1)=>{const{type:A,props:M,ref:k,children:x,dynamicChildren:C,shapeFlag:j,patchFlag:L,dirs:H}=h;if(k!=null&&al(k,null,y,h,!0),j&256){_.ctx.deactivate(h);return}const q=j&1&&H,se=!Rr(h);let _e;if(se&&(_e=M&&M.onVnodeBeforeUnmount)&&kt(_e,_,h),j&6)w(h.component,y,b);else{if(j&128){h.suspense.unmount(y,b);return}q&&On(h,null,_,"beforeUnmount"),j&64?h.type.remove(h,_,y,E,le,b):C&&(A!==Le||L>0&&L&64)?D(C,_,y,!1,!0):(A===Le&&L&384||!E&&j&16)&&D(x,_,y),b&&gs(h)}(se&&(_e=M&&M.onVnodeUnmounted)||q)&&Qe(()=>{_e&&kt(_e,_,h),q&&On(h,null,_,"unmounted")},y)},gs=h=>{const{type:_,el:y,anchor:b,transition:E}=h;if(_===Le){$u(y,b);return}if(_===Ea){R(h);return}const A=()=>{r(y),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(h.shapeFlag&1&&E&&!E.persisted){const{leave:M,delayLeave:k}=E,x=()=>M(y,A);k?k(h.el,A,x):x()}else A()},$u=(h,_)=>{let y;for(;h!==_;)y=f(h),r(h),h=y;r(_)},w=(h,_,y)=>{const{bum:b,scope:E,update:A,subTree:M,um:k}=h;b&&Ui(b),E.stop(),A&&(A.active=!1,Ye(M,h,_,y)),k&&Qe(k,_),Qe(()=>{h.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},D=(h,_,y,b=!1,E=!1,A=0)=>{for(let M=A;M<h.length;M++)Ye(h[M],_,y,b,E)},N=h=>h.shapeFlag&6?N(h.component.subTree):h.shapeFlag&128?h.suspense.next():f(h.anchor||h.el),B=(h,_,y)=>{h==null?_._vnode&&Ye(_._vnode,null,null,!0):g(_._vnode||null,h,_,null,null,null,y),Xu(),Gh(),_._vnode=h},le={p:g,um:Ye,m:pt,r:gs,mt:$e,mc:P,pc:ue,pbc:V,n:N,o:t};let Ie,ne;return e&&([Ie,ne]=e(le)),{render:B,hydrate:Ie,createApp:Py(B,Ie)}}function Mn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function hp(t,e,n=!1){const s=t.children,r=e.children;if($(s)&&$(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=cn(r[i]),a.el=o.el),n||hp(o,a)),a.type===Ho&&(a.el=o.el)}}function Uy(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const $y=t=>t.__isTeleport,Le=Symbol.for("v-fgt"),Ho=Symbol.for("v-txt"),ft=Symbol.for("v-cmt"),Ea=Symbol.for("v-stc"),Pr=[];let vt=null;function Be(t=!1){Pr.push(vt=t?null:[])}function By(){Pr.pop(),vt=Pr[Pr.length-1]||null}let Vr=1;function ud(t){Vr+=t}function pp(t){return t.dynamicChildren=Vr>0?vt||Ss:null,By(),Vr>0&&vt&&vt.push(t),t}function Je(t,e,n,s,r,i){return pp(J(t,e,n,s,r,i,!0))}function mc(t,e,n,s,r){return pp(ie(t,e,n,s,r,!0))}function to(t){return t?t.__v_isVNode===!0:!1}function Bn(t,e){return t.type===e.type&&t.key===e.key}const Wo="__vInternal",gp=({key:t})=>t??null,$i=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Re(t)||Oe(t)||Y(t)?{i:je,r:t,k:e,f:!!n}:t:null);function J(t,e=null,n=null,s=0,r=null,i=t===Le?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&gp(e),ref:e&&$i(e),scopeId:Uo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:je};return a?(_c(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Re(n)?8:16),Vr>0&&!o&&vt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&vt.push(l),l}const ie=jy;function jy(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===by)&&(t=ft),to(t)){const a=Yt(t,e,!0);return n&&_c(a,n),Vr>0&&!i&&vt&&(a.shapeFlag&6?vt[vt.indexOf(t)]=a:vt.push(a)),a.patchFlag|=-2,a}if(Zy(t)&&(t=t.__vccOpts),e){e=Hy(e);let{class:a,style:l}=e;a&&!Re(a)&&(e.class=Jn(a)),he(l)&&(jh(l)&&!$(l)&&(l=ke({},l)),e.style=Zl(l))}const o=Re(t)?1:ry(t)?128:$y(t)?64:he(t)?4:Y(t)?2:0;return J(t,e,n,s,r,o,i,!0)}function Hy(t){return t?jh(t)||Wo in t?ke({},t):t:null}function Yt(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Vy(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&gp(a),ref:e&&e.ref?n&&r?$(r)?r.concat($i(e)):[r,$i(e)]:$i(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Le?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Yt(t.ssContent),ssFallback:t.ssFallback&&Yt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function qn(t=" ",e=0){return ie(Ho,null,t,e)}function Wy(t="",e=!1){return e?(Be(),mc(ft,null,t)):ie(ft,null,t)}function At(t){return t==null||typeof t=="boolean"?ie(ft):$(t)?ie(Le,null,t.slice()):typeof t=="object"?cn(t):ie(Ho,null,String(t))}function cn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Yt(t)}function _c(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),_c(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Wo in e)?e._ctx=je:r===3&&je&&(je.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:je},n=32):(e=String(e),s&64?(n=16,e=[qn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Vy(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Jn([e.class,s.class]));else if(r==="style")e.style=Zl([e.style,s.style]);else if(xo(r)){const i=e[r],o=s[r];o&&i!==o&&!($(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function kt(t,e,n,s=null){dt(t,e,7,[n,s])}const Ky=ap();let zy=0;function qy(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Ky,i={uid:zy++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ah(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cp(s,r),emitsOptions:Qh(s,r),emit:null,emitted:null,propsDefaults:we,inheritAttrs:s.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Zv.bind(null,i),t.ce&&t.ce(i),i}let Ue=null;const vc=()=>Ue||je;let yc,_s,dd="__VUE_INSTANCE_SETTERS__";(_s=Ya()[dd])||(_s=Ya()[dd]=[]),_s.push(t=>Ue=t),yc=t=>{_s.length>1?_s.forEach(e=>e(t)):_s[0](t)};const $s=t=>{yc(t),t.scope.on()},Gn=()=>{Ue&&Ue.scope.off(),yc(null)};function mp(t){return t.vnode.shapeFlag&4}let Kr=!1;function Gy(t,e=!1){Kr=e;const{props:n,children:s}=t.vnode,r=mp(t);xy(t,n,r,e),My(t,s);const i=r?Yy(t,e):void 0;return Kr=!1,i}function Yy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Hh(new Proxy(t.ctx,Iy));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Jy(t):null;$s(t),Xs();const i=mn(s,t,0,[t.props,r]);if(Zs(),Gn(),Ch(i)){if(i.then(Gn,Gn),e)return i.then(o=>{fd(t,o,e)}).catch(o=>{Lo(o,t,0)});t.asyncDep=i}else fd(t,i,e)}else _p(t,e)}function fd(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:he(e)&&(t.setupState=Kh(e)),_p(t,n)}let hd;function _p(t,e,n){const s=t.type;if(!t.render){if(!e&&hd&&!s.render){const r=s.template||pc(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=ke(ke({isCustomElement:i,delimiters:a},o),l);s.render=hd(r,c)}}t.render=s.render||wt}$s(t),Xs(),Cy(t),Zs(),Gn()}function Qy(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return st(t,"get","$attrs"),e[n]}}))}function Jy(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Qy(t)},slots:t.slots,emit:t.emit,expose:e}}function Vo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Kh(Hh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ar)return Ar[n](t)},has(e,n){return n in e||n in Ar}}))}function Xy(t,e=!0){return Y(t)?t.displayName||t.name:t.name||e&&t.__name}function Zy(t){return Y(t)&&"__vccOpts"in t}const ce=(t,e)=>qv(t,e,Kr);function In(t,e,n){const s=arguments.length;return s===2?he(e)&&!$(e)?to(e)?ie(t,null,[e]):ie(t,e):ie(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&to(n)&&(n=[n]),ie(t,e,n))}const eb=Symbol.for("v-scx"),tb=()=>et(eb),nb="3.3.4",sb="http://www.w3.org/2000/svg",jn=typeof document<"u"?document:null,pd=jn&&jn.createElement("template"),rb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?jn.createElementNS(sb,t):jn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>jn.createTextNode(t),createComment:t=>jn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>jn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{pd.innerHTML=s?`<svg>${t}</svg>`:t;const a=pd.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function ib(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function ob(t,e,n){const s=t.style,r=Re(n);if(n&&!r){if(e&&!Re(e))for(const i in e)n[i]==null&&ll(s,i,"");for(const i in n)ll(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const gd=/\s*!important$/;function ll(t,e,n){if($(n))n.forEach(s=>ll(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=ab(t,e);gd.test(n)?t.setProperty(cs(s),n.replace(gd,""),"important"):t[s]=n}}const md=["Webkit","Moz","ms"],Ia={};function ab(t,e){const n=Ia[e];if(n)return n;let s=Mt(e);if(s!=="filter"&&s in t)return Ia[e]=s;s=Oo(s);for(let r=0;r<md.length;r++){const i=md[r]+s;if(i in t)return Ia[e]=i}return e}const _d="http://www.w3.org/1999/xlink";function lb(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(_d,e.slice(6,e.length)):t.setAttributeNS(_d,e,n);else{const i=iv(e);n==null||i&&!kh(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function cb(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=kh(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Bt(t,e,n,s){t.addEventListener(e,n,s)}function ub(t,e,n,s){t.removeEventListener(e,n,s)}function db(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=fb(e);if(s){const c=i[e]=gb(s,r);Bt(t,a,c,l)}else o&&(ub(t,a,o,l),i[e]=void 0)}}const vd=/(?:Once|Passive|Capture)$/;function fb(t){let e;if(vd.test(t)){e={};let s;for(;s=t.match(vd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):cs(t.slice(2)),e]}let Ca=0;const hb=Promise.resolve(),pb=()=>Ca||(hb.then(()=>Ca=0),Ca=Date.now());function gb(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;dt(mb(s,n.value),e,5,[s])};return n.value=t,n.attached=pb(),n}function mb(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const yd=/^on[a-z]/,_b=(t,e,n,s,r=!1,i,o,a,l)=>{e==="class"?ib(t,s,r):e==="style"?ob(t,n,s):xo(e)?Ql(e)||db(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vb(t,e,s,r))?cb(t,e,s,i,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),lb(t,e,s,r))};function vb(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&yd.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||yd.test(e)&&Re(n)?!1:e in t}const sn="transition",gr="animation",bc=(t,{slots:e})=>In(cy,yb(t),e);bc.displayName="Transition";const vp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};bc.props=ke({},ep,vp);const Dn=(t,e=[])=>{$(t)?t.forEach(n=>n(...e)):t&&t(...e)},bd=t=>t?$(t)?t.some(e=>e.length>1):t.length>1:!1;function yb(t){const e={};for(const F in t)F in vp||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=bb(r),g=m&&m[0],v=m&&m[1],{onBeforeEnter:I,onEnter:T,onEnterCancelled:O,onLeave:R,onLeaveCancelled:G,onBeforeAppear:U=I,onAppear:Q=T,onAppearCancelled:P=O}=e,W=(F,ye,$e)=>{Ln(F,ye?u:a),Ln(F,ye?c:o),$e&&$e()},V=(F,ye)=>{F._isLeaving=!1,Ln(F,d),Ln(F,p),Ln(F,f),ye&&ye()},Ae=F=>(ye,$e)=>{const tn=F?Q:T,Ee=()=>W(ye,F,$e);Dn(tn,[ye,Ee]),wd(()=>{Ln(ye,F?l:i),rn(ye,F?u:a),bd(tn)||Ed(ye,s,g,Ee)})};return ke(e,{onBeforeEnter(F){Dn(I,[F]),rn(F,i),rn(F,o)},onBeforeAppear(F){Dn(U,[F]),rn(F,l),rn(F,c)},onEnter:Ae(!1),onAppear:Ae(!0),onLeave(F,ye){F._isLeaving=!0;const $e=()=>V(F,ye);rn(F,d),Ib(),rn(F,f),wd(()=>{F._isLeaving&&(Ln(F,d),rn(F,p),bd(R)||Ed(F,s,v,$e))}),Dn(R,[F,$e])},onEnterCancelled(F){W(F,!1),Dn(O,[F])},onAppearCancelled(F){W(F,!0),Dn(P,[F])},onLeaveCancelled(F){V(F),Dn(G,[F])}})}function bb(t){if(t==null)return null;if(he(t))return[Ta(t.enter),Ta(t.leave)];{const e=Ta(t);return[e,e]}}function Ta(t){return Z_(t)}function rn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Ln(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function wd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let wb=0;function Ed(t,e,n,s){const r=t._endId=++wb,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=Eb(t,e);if(!o)return s();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,f),i()},f=p=>{p.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,f)}function Eb(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),r=s(`${sn}Delay`),i=s(`${sn}Duration`),o=Id(r,i),a=s(`${gr}Delay`),l=s(`${gr}Duration`),c=Id(a,l);let u=null,d=0,f=0;e===sn?o>0&&(u=sn,d=o,f=i.length):e===gr?c>0&&(u=gr,d=c,f=l.length):(d=Math.max(o,c),u=d>0?o>c?sn:gr:null,f=u?u===sn?i.length:l.length:0);const p=u===sn&&/\b(transform|all)(,|$)/.test(s(`${sn}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function Id(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Cd(n)+Cd(t[s])))}function Cd(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Ib(){return document.body.offsetHeight}const Cn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>Ui(e,n):e};function Cb(t){t.target.composing=!0}function Td(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const no={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Cn(r);const i=s||r.props&&r.props.type==="number";Bt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Gi(a)),t._assign(a)}),n&&Bt(t,"change",()=>{t.value=t.value.trim()}),e||(Bt(t,"compositionstart",Cb),Bt(t,"compositionend",Td),Bt(t,"change",Td))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Cn(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Gi(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Tb={deep:!0,created(t,e,n){t._assign=Cn(n),Bt(t,"change",()=>{const s=t._modelValue,r=Bs(t),i=t.checked,o=t._assign;if($(s)){const a=ec(s,r),l=a!==-1;if(i&&!l)o(s.concat(r));else if(!i&&l){const c=[...s];c.splice(a,1),o(c)}}else if(Js(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(yp(t,i))})},mounted:Sd,beforeUpdate(t,e,n){t._assign=Cn(n),Sd(t,e,n)}};function Sd(t,{value:e,oldValue:n},s){t._modelValue=e,$(e)?t.checked=ec(e,s.props.value)>-1:Js(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Xn(e,yp(t,!0)))}const Sb={created(t,{value:e},n){t.checked=Xn(e,n.props.value),t._assign=Cn(n),Bt(t,"change",()=>{t._assign(Bs(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=Cn(s),e!==n&&(t.checked=Xn(e,s.props.value))}},kb={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Js(e);Bt(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Gi(Bs(o)):Bs(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=Cn(s)},mounted(t,{value:e}){kd(t,e)},beforeUpdate(t,e,n){t._assign=Cn(n)},updated(t,{value:e}){kd(t,e)}};function kd(t,e){const n=t.multiple;if(!(n&&!$(e)&&!Js(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=Bs(i);if(n)$(e)?i.selected=ec(e,o)>-1:i.selected=e.has(o);else if(Xn(Bs(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Bs(t){return"_value"in t?t._value:t.value}function yp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Rb={created(t,e,n){Ai(t,e,n,null,"created")},mounted(t,e,n){Ai(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){Ai(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){Ai(t,e,n,s,"updated")}};function Ab(t,e){switch(t){case"SELECT":return kb;case"TEXTAREA":return no;default:switch(e){case"checkbox":return Tb;case"radio":return Sb;default:return no}}}function Ai(t,e,n,s,r){const o=Ab(t.tagName,n.props&&n.props.type)[r];o&&o(t,e,n,s)}const Pb=["ctrl","shift","alt","meta"],xb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Pb.some(n=>t[`${n}Key`]&&!e.includes(n))},Rd=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=xb[e[r]];if(i&&i(n,e))return}return t(n,...s)},Nb={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ob=(t,e)=>n=>{if(!("key"in n))return;const s=cs(n.key);if(e.some(r=>r===s||Nb[r]===s))return t(n)},Mb=ke({patchProp:_b},rb);let Ad;function Db(){return Ad||(Ad=Ly(Mb))}const Lb=(...t)=>{const e=Db().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Fb(s);if(!r)return;const i=e._component;!Y(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Fb(t){return Re(t)?document.querySelector(t):t}const bp=new Set,tt=new WeakMap,Ns=new WeakMap,Zn=new WeakMap,cl=new WeakMap,Ub=new WeakMap,js=new WeakMap,so=new WeakMap,Tr=new WeakSet;let es;const jt="__aa_tgt",ul="__aa_del",$b=t=>{const e=Vb(t);e&&e.forEach(n=>Kb(n))},Bb=t=>{t.forEach(e=>{e.target===es&&Hb(),tt.has(e.target)&&ds(e.target)})};function jb(t){const e=cl.get(t);e==null||e.disconnect();let n=tt.get(t),s=0;const r=5;n||(n=Hs(t),tt.set(t,n));const{offsetWidth:i,offsetHeight:o}=es,l=[n.top-r,i-(n.left+r+n.width),o-(n.top+r+n.height),n.left-r].map(u=>`${-1*Math.floor(u)}px`).join(" "),c=new IntersectionObserver(()=>{++s>1&&ds(t)},{root:es,threshold:1,rootMargin:l});c.observe(t),cl.set(t,c)}function ds(t){clearTimeout(so.get(t));const e=Ko(t),n=typeof e=="function"?500:e.duration;so.set(t,setTimeout(async()=>{const s=Zn.get(t);try{await(s==null?void 0:s.finished),tt.set(t,Hs(t)),jb(t)}catch{}},n))}function Hb(){clearTimeout(so.get(es)),so.set(es,setTimeout(()=>{bp.forEach(t=>Cp(t,e=>wp(()=>ds(e))))},100))}function Wb(t){setTimeout(()=>{Ub.set(t,setInterval(()=>wp(ds.bind(null,t)),2e3))},Math.round(2e3*Math.random()))}function wp(t){typeof requestIdleCallback=="function"?requestIdleCallback(()=>t()):requestAnimationFrame(()=>t())}let dl,Is;typeof window<"u"&&(es=document.documentElement,dl=new MutationObserver($b),Is=new ResizeObserver(Bb),Is.observe(es));function Vb(t){return t.reduce((s,r)=>[...s,...Array.from(r.addedNodes),...Array.from(r.removedNodes)],[]).every(s=>s.nodeName==="#comment")?!1:t.reduce((s,r)=>{if(s===!1)return!1;if(r.target instanceof Element){if(Sa(r.target),!s.has(r.target)){s.add(r.target);for(let i=0;i<r.target.children.length;i++){const o=r.target.children.item(i);if(o){if(ul in o)return!1;Sa(r.target,o),s.add(o)}}}if(r.removedNodes.length)for(let i=0;i<r.removedNodes.length;i++){const o=r.removedNodes[i];if(ul in o)return!1;o instanceof Element&&(s.add(o),Sa(r.target,o),Ns.set(o,[r.previousSibling,r.nextSibling]))}}return s},new Set)}function Sa(t,e){!e&&!(jt in t)?Object.defineProperty(t,jt,{value:t}):e&&!(jt in e)&&Object.defineProperty(e,jt,{value:t})}function Kb(t){var e;const n=t.isConnected,s=tt.has(t);n&&Ns.has(t)&&Ns.delete(t),Zn.has(t)&&((e=Zn.get(t))===null||e===void 0||e.cancel()),s&&n?qb(t):s&&!n?Yb(t):Gb(t)}function Rt(t){return Number(t.replace(/[^0-9.\-]/g,""))}function zb(t){let e=t.parentElement;for(;e;){if(e.scrollLeft||e.scrollTop)return{x:e.scrollLeft,y:e.scrollTop};e=e.parentElement}return{x:0,y:0}}function Hs(t){const e=t.getBoundingClientRect(),{x:n,y:s}=zb(t);return{top:e.top+s,left:e.left+n,width:e.width,height:e.height}}function Ep(t,e,n){let s=e.width,r=e.height,i=n.width,o=n.height;const a=getComputedStyle(t);if(a.getPropertyValue("box-sizing")==="content-box"){const c=Rt(a.paddingTop)+Rt(a.paddingBottom)+Rt(a.borderTopWidth)+Rt(a.borderBottomWidth),u=Rt(a.paddingLeft)+Rt(a.paddingRight)+Rt(a.borderRightWidth)+Rt(a.borderLeftWidth);s-=u,i-=u,r-=c,o-=c}return[s,i,r,o].map(Math.round)}function Ko(t){return jt in t&&js.has(t[jt])?js.get(t[jt]):{duration:250,easing:"ease-in-out"}}function Ip(t){if(jt in t)return t[jt]}function wc(t){const e=Ip(t);return e?Tr.has(e):!1}function Cp(t,...e){e.forEach(n=>n(t,js.has(t)));for(let n=0;n<t.children.length;n++){const s=t.children.item(n);s&&e.forEach(r=>r(s,js.has(s)))}}function qb(t){const e=tt.get(t),n=Hs(t);if(!wc(t))return tt.set(t,n);let s;if(!e)return;const r=Ko(t);if(typeof r!="function"){const i=e.left-n.left,o=e.top-n.top,[a,l,c,u]=Ep(t,e,n),d={transform:`translate(${i}px, ${o}px)`},f={transform:"translate(0, 0)"};a!==l&&(d.width=`${a}px`,f.width=`${l}px`),c!==u&&(d.height=`${c}px`,f.height=`${u}px`),s=t.animate([d,f],{duration:r.duration,easing:r.easing})}else s=new Animation(r(t,"remain",e,n)),s.play();Zn.set(t,s),tt.set(t,n),s.addEventListener("finish",ds.bind(null,t))}function Gb(t){const e=Hs(t);tt.set(t,e);const n=Ko(t);if(!wc(t))return;let s;typeof n!="function"?s=t.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:n.duration*1.5,easing:"ease-in"}):(s=new Animation(n(t,"add",e)),s.play()),Zn.set(t,s),s.addEventListener("finish",ds.bind(null,t))}function Yb(t){var e;if(!Ns.has(t)||!tt.has(t))return;const[n,s]=Ns.get(t);Object.defineProperty(t,ul,{value:!0}),s&&s.parentNode&&s.parentNode instanceof Element?s.parentNode.insertBefore(t,s):n&&n.parentNode?n.parentNode.appendChild(t):(e=Ip(t))===null||e===void 0||e.appendChild(t);function r(){var f;t.remove(),tt.delete(t),Ns.delete(t),Zn.delete(t),(f=cl.get(t))===null||f===void 0||f.disconnect()}if(!wc(t))return r();const[i,o,a,l]=Qb(t),c=Ko(t),u=tt.get(t);let d;Object.assign(t.style,{position:"absolute",top:`${i}px`,left:`${o}px`,width:`${a}px`,height:`${l}px`,margin:0,pointerEvents:"none",transformOrigin:"center",zIndex:100}),typeof c!="function"?d=t.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:c.duration,easing:"ease-out"}):(d=new Animation(c(t,"remove",u)),d.play()),Zn.set(t,d),d.addEventListener("finish",r)}function Qb(t){const e=tt.get(t),[n,,s]=Ep(t,e,Hs(t));let r=t.parentElement;for(;r&&(getComputedStyle(r).position==="static"||r instanceof HTMLBodyElement);)r=r.parentElement;r||(r=document.body);const i=getComputedStyle(r),o=tt.get(r)||Hs(r),a=Math.round(e.top-o.top)-Rt(i.borderTopWidth),l=Math.round(e.left-o.left)-Rt(i.borderLeftWidth);return[a,l,n,s]}function Jb(t,e={}){return dl&&Is&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&typeof e!="function"&&!e.disrespectUserMotionPreference||(Tr.add(t),getComputedStyle(t).position==="static"&&Object.assign(t.style,{position:"relative"}),Cp(t,ds,Wb,r=>Is==null?void 0:Is.observe(r)),typeof e=="function"?js.set(t,e):js.set(t,{duration:250,easing:"ease-in-out",...e}),dl.observe(t,{childList:!0}),bp.add(t))),Object.freeze({parent:t,enable:()=>{Tr.add(t)},disable:()=>{Tr.delete(t)},isEnabled:()=>Tr.has(t)})}const Xb={mounted:(t,e)=>{Jb(t,e.value||{})}},Zb={install(t){t.directive("auto-animate",Xb)}},ew="modulepreload",tw=function(t){return"/task-project/"+t},Pd={},nw=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=tw(i),i in Pd)return;Pd[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const d=r[u];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":ew,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((u,d)=>{c.addEventListener("load",u),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};function sw(){return Tp().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Tp(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const rw=typeof Proxy=="function",iw="devtools-plugin:setup",ow="plugin:settings:set";let vs,fl;function aw(){var t;return vs!==void 0||(typeof window<"u"&&window.performance?(vs=!0,fl=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(vs=!0,fl=global.perf_hooks.performance):vs=!1),vs}function lw(){return aw()?fl.now():Date.now()}class cw{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},s);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}i=o},now(){return lw()}},n&&n.on(ow,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function uw(t,e){const n=t,s=Tp(),r=sw(),i=rw&&n.enableEarlyProxy;if(r&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))r.emit(iw,t,e);else{const o=i?new cw(n,r):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Sp=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",nr=t=>Sp?Symbol(t):"_vr_"+t,dw=nr("rvlm"),xd=nr("rvd"),zo=nr("r"),kp=nr("rl"),hl=nr("rvl"),Es=typeof window<"u";function fw(t){return t.__esModule||Sp&&t[Symbol.toStringTag]==="Module"}const ge=Object.assign;function ka(t,e){const n={};for(const s in e){const r=e[s];n[s]=Array.isArray(r)?r.map(t):t(r)}return n}const xr=()=>{},hw=/\/$/,pw=t=>t.replace(hw,"");function Ra(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("?"),l=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),i=e.slice(a+1,l>-1?l:e.length),r=t(i)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=vw(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function gw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Nd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function mw(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Ws(e.matched[s],n.matched[r])&&Rp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ws(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Rp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!_w(t[n],e[n]))return!1;return!0}function _w(t,e){return Array.isArray(t)?Od(t,e):Array.isArray(e)?Od(e,t):t===e}function Od(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function vw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var zr;(function(t){t.pop="pop",t.push="push"})(zr||(zr={}));var Nr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Nr||(Nr={}));function yw(t){if(!t)if(Es){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),pw(t)}const bw=/^[^#]+#/;function ww(t,e){return t.replace(bw,"#")+e}function Ew(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const qo=()=>({left:window.pageXOffset,top:window.pageYOffset});function Iw(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Ew(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Md(t,e){return(history.state?history.state.position-e:-1)+t}const pl=new Map;function Cw(t,e){pl.set(t,e)}function Tw(t){const e=pl.get(t);return pl.delete(t),e}let Sw=()=>location.protocol+"//"+location.host;function Ap(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Nd(l,"")}return Nd(n,t)+s+r}function kw(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const p=Ap(t,location),m=n.value,g=e.value;let v=0;if(f){if(n.value=p,e.value=f,o&&o===m){o=null;return}v=g?f.position-g.position:0}else s(p);r.forEach(I=>{I(n.value,m,{delta:v,type:zr.pop,direction:v?v>0?Nr.forward:Nr.back:Nr.unknown})})};function l(){o=n.value}function c(f){r.push(f);const p=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return i.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(ge({},f.state,{scroll:qo()}),"")}function d(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function Dd(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?qo():null}}function Rw(t){const{history:e,location:n}=window,s={value:Ap(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:Sw()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(l,c){const u=ge({},e.state,Dd(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});i(l,u,!0),s.value=l}function a(l,c){const u=ge({},r.value,e.state,{forward:l,scroll:qo()});i(u.current,u,!0);const d=ge({},Dd(s.value,l,null),{position:u.position+1},c);i(l,d,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function Aw(t){t=yw(t);const e=Rw(t),n=kw(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ge({location:"",base:t,go:s,createHref:ww.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Pw(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Aw(t)}function xw(t){return typeof t=="string"||t&&typeof t=="object"}function Pp(t){return typeof t=="string"||typeof t=="symbol"}const on={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xp=nr("nf");var Ld;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ld||(Ld={}));function Vs(t,e){return ge(new Error,{type:t,[xp]:!0},e)}function an(t,e){return t instanceof Error&&xp in t&&(e==null||!!(t.type&e))}const Fd="[^/]+?",Nw={sensitive:!1,strict:!1,start:!0,end:!0},Ow=/[.+*?^${}()[\]/\\]/g;function Mw(t,e){const n=ge({},Nw,e),s=[];let r=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const f=c[d];let p=40+(n.sensitive?.25:0);if(f.type===0)d||(r+="/"),r+=f.value.replace(Ow,"\\$&"),p+=40;else if(f.type===1){const{value:m,repeatable:g,optional:v,regexp:I}=f;i.push({name:m,repeatable:g,optional:v});const T=I||Fd;if(T!==Fd){p+=10;try{new RegExp(`(${T})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${m}" (${T}): `+R.message)}}let O=g?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;d||(O=v&&c.length<2?`(?:/${O})`:"/"+O),v&&(O+="?"),r+=O,p+=20,v&&(p+=-8),g&&(p+=-20),T===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",m=i[f-1];d[m.name]=p&&m.repeatable?p.split("/"):p}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:g,optional:v}=p,I=m in c?c[m]:"";if(Array.isArray(I)&&!g)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const T=Array.isArray(I)?I.join("/"):I;if(!T)if(v)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${m}"`);u+=T}}return u}return{re:o,score:s,keys:i,parse:a,stringify:l}}function Dw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Lw(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Dw(s[n],r[n]);if(i)return i;n++}return r.length-s.length}const Fw={type:0,value:""},Uw=/[a-zA-Z0-9_]/;function $w(t){if(!t)return[[]];if(t==="/")return[[Fw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,c="",u="";function d(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):f();break;case 4:f(),n=s;break;case 1:l==="("?n=2:Uw.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),r}function Bw(t,e,n){const s=Mw($w(t.path),n),r=ge(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function jw(t,e){const n=[],s=new Map;e=$d({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,d,f){const p=!f,m=Ww(u);m.aliasOf=f&&f.record;const g=$d(e,u),v=[m];if("alias"in u){const O=typeof u.alias=="string"?[u.alias]:u.alias;for(const R of O)v.push(ge({},m,{components:f?f.record.components:m.components,path:R,aliasOf:f?f.record:m}))}let I,T;for(const O of v){const{path:R}=O;if(d&&R[0]!=="/"){const G=d.record.path,U=G[G.length-1]==="/"?"":"/";O.path=d.record.path+(R&&U+R)}if(I=Bw(O,d,g),f?f.alias.push(I):(T=T||I,T!==I&&T.alias.push(I),p&&u.name&&!Ud(I)&&o(u.name)),"children"in m){const G=m.children;for(let U=0;U<G.length;U++)i(G[U],I,f&&f.children[U])}f=f||I,l(I)}return T?()=>{o(T)}:xr}function o(u){if(Pp(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&Lw(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Np(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Ud(u)&&s.set(u.record.name,u)}function c(u,d){let f,p={},m,g;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Vs(1,{location:u});g=f.record.name,p=ge(Hw(d.params,f.keys.filter(T=>!T.optional).map(T=>T.name)),u.params),m=f.stringify(p)}else if("path"in u)m=u.path,f=n.find(T=>T.re.test(m)),f&&(p=f.parse(m),g=f.record.name);else{if(f=d.name?s.get(d.name):n.find(T=>T.re.test(d.path)),!f)throw Vs(1,{location:u,currentLocation:d});g=f.record.name,p=ge({},d.params,u.params),m=f.stringify(p)}const v=[];let I=f;for(;I;)v.unshift(I.record),I=I.parent;return{name:g,path:m,params:p,matched:v,meta:Kw(v)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Hw(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Ww(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Vw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Vw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Ud(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Kw(t){return t.reduce((e,n)=>ge(e,n.meta),{})}function $d(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Np(t,e){return e.children.some(n=>n===t||Np(t,n))}const Op=/#/g,zw=/&/g,qw=/\//g,Gw=/=/g,Yw=/\?/g,Mp=/\+/g,Qw=/%5B/g,Jw=/%5D/g,Dp=/%5E/g,Xw=/%60/g,Lp=/%7B/g,Zw=/%7C/g,Fp=/%7D/g,eE=/%20/g;function Ec(t){return encodeURI(""+t).replace(Zw,"|").replace(Qw,"[").replace(Jw,"]")}function tE(t){return Ec(t).replace(Lp,"{").replace(Fp,"}").replace(Dp,"^")}function gl(t){return Ec(t).replace(Mp,"%2B").replace(eE,"+").replace(Op,"%23").replace(zw,"%26").replace(Xw,"`").replace(Lp,"{").replace(Fp,"}").replace(Dp,"^")}function nE(t){return gl(t).replace(Gw,"%3D")}function sE(t){return Ec(t).replace(Op,"%23").replace(Yw,"%3F")}function rE(t){return t==null?"":sE(t).replace(qw,"%2F")}function ro(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function iE(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Mp," "),o=i.indexOf("="),a=ro(o<0?i:i.slice(0,o)),l=o<0?null:ro(i.slice(o+1));if(a in e){let c=e[a];Array.isArray(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Bd(t){let e="";for(let n in t){const s=t[n];if(n=nE(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(i=>i&&gl(i)):[s&&gl(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function oE(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}function mr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function un(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(Vs(4,{from:n,to:e})):d instanceof Error?a(d):xw(d)?a(Vs(2,{from:e,to:d})):(i&&s.enterCallbacks[r]===i&&typeof d=="function"&&i.push(d),o())},c=t.call(s&&s.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function Aa(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(aE(a)){const c=(a.__vccOpts||a)[e];c&&r.push(un(c,n,s,i,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=fw(c)?c.default:c;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&un(f,n,s,i,o)()}))}}return r}function aE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function jd(t){const e=et(zo),n=et(kp),s=ce(()=>e.resolve(As(t.to))),r=ce(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Ws.bind(null,u));if(f>-1)return f;const p=Hd(l[c-2]);return c>1&&Hd(u)===p&&d[d.length-1].path!==p?d.findIndex(Ws.bind(null,l[c-2])):f}),i=ce(()=>r.value>-1&&dE(n.params,s.value.params)),o=ce(()=>r.value>-1&&r.value===n.matched.length-1&&Rp(n.params,s.value.params));function a(l={}){return uE(l)?e[As(t.replace)?"replace":"push"](As(t.to)).catch(xr):Promise.resolve()}return{route:s,href:ce(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const lE=Zt({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:jd,setup(t,{slots:e}){const n=er(jd(t)),{options:s}=et(zo),r=ce(()=>({[Wd(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Wd(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:In("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),cE=lE;function uE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function dE(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Hd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Wd=(t,e,n)=>t??e??n,fE=Zt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=et(hl),r=ce(()=>t.route||s.value),i=et(xd,0),o=ce(()=>r.value.matched[i]);xs(xd,i+1),xs(dw,o),xs(hl,r);const a=ee();return xt(()=>[a.value,o.value,t.name],([l,c,u],[d,f,p])=>{c&&(c.instances[u]=l,f&&f!==c&&l&&l===d&&(c.leaveGuards.size||(c.leaveGuards=f.leaveGuards),c.updateGuards.size||(c.updateGuards=f.updateGuards))),l&&c&&(!f||!Ws(c,f)||!d)&&(c.enterCallbacks[u]||[]).forEach(m=>m(l))},{flush:"post"}),()=>{const l=r.value,c=o.value,u=c&&c.components[t.name],d=t.name;if(!u)return Vd(n.default,{Component:u,route:l});const f=c.props[t.name],p=f?f===!0?l.params:typeof f=="function"?f(l):f:null,g=In(u,ge({},p,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(c.instances[d]=null)},ref:a}));return Vd(n.default,{Component:g,route:l})||g}}});function Vd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const hE=fE;function pE(t){const e=jw(t.routes,t),n=t.parseQuery||iE,s=t.stringifyQuery||Bd,r=t.history,i=mr(),o=mr(),a=mr(),l=Wh(on);let c=on;Es&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ka.bind(null,w=>""+w),d=ka.bind(null,rE),f=ka.bind(null,ro);function p(w,D){let N,B;return Pp(w)?(N=e.getRecordMatcher(w),B=D):B=w,e.addRoute(B,N)}function m(w){const D=e.getRecordMatcher(w);D&&e.removeRoute(D)}function g(){return e.getRoutes().map(w=>w.record)}function v(w){return!!e.getRecordMatcher(w)}function I(w,D){if(D=ge({},D||l.value),typeof w=="string"){const h=Ra(n,w,D.path),_=e.resolve({path:h.path},D),y=r.createHref(h.fullPath);return ge(h,_,{params:f(_.params),hash:ro(h.hash),redirectedFrom:void 0,href:y})}let N;if("path"in w)N=ge({},w,{path:Ra(n,w.path,D.path).path});else{const h=ge({},w.params);for(const _ in h)h[_]==null&&delete h[_];N=ge({},w,{params:d(w.params)}),D.params=d(D.params)}const B=e.resolve(N,D),le=w.hash||"";B.params=u(f(B.params));const Ie=gw(s,ge({},w,{hash:tE(le),path:B.path})),ne=r.createHref(Ie);return ge({fullPath:Ie,hash:le,query:s===Bd?oE(w.query):w.query||{}},B,{redirectedFrom:void 0,href:ne})}function T(w){return typeof w=="string"?Ra(n,w,l.value.path):ge({},w)}function O(w,D){if(c!==w)return Vs(8,{from:D,to:w})}function R(w){return Q(w)}function G(w){return R(ge(T(w),{replace:!0}))}function U(w){const D=w.matched[w.matched.length-1];if(D&&D.redirect){const{redirect:N}=D;let B=typeof N=="function"?N(w):N;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=T(B):{path:B},B.params={}),ge({query:w.query,hash:w.hash,params:w.params},B)}}function Q(w,D){const N=c=I(w),B=l.value,le=w.state,Ie=w.force,ne=w.replace===!0,h=U(N);if(h)return Q(ge(T(h),{state:le,force:Ie,replace:ne}),D||N);const _=N;_.redirectedFrom=D;let y;return!Ie&&mw(s,B,N)&&(y=Vs(16,{to:_,from:B}),Nn(B,B,!0,!1)),(y?Promise.resolve(y):W(_,B)).catch(b=>an(b)?an(b,2)?b:ht(b):me(b,_,B)).then(b=>{if(b){if(an(b,2))return Q(ge(T(b.to),{state:le,force:Ie,replace:ne}),D||_)}else b=Ae(_,B,!0,ne,le);return V(_,B,b),b})}function P(w,D){const N=O(w,D);return N?Promise.reject(N):Promise.resolve()}function W(w,D){let N;const[B,le,Ie]=gE(w,D);N=Aa(B.reverse(),"beforeRouteLeave",w,D);for(const h of B)h.leaveGuards.forEach(_=>{N.push(un(_,w,D))});const ne=P.bind(null,w,D);return N.push(ne),ys(N).then(()=>{N=[];for(const h of i.list())N.push(un(h,w,D));return N.push(ne),ys(N)}).then(()=>{N=Aa(le,"beforeRouteUpdate",w,D);for(const h of le)h.updateGuards.forEach(_=>{N.push(un(_,w,D))});return N.push(ne),ys(N)}).then(()=>{N=[];for(const h of w.matched)if(h.beforeEnter&&!D.matched.includes(h))if(Array.isArray(h.beforeEnter))for(const _ of h.beforeEnter)N.push(un(_,w,D));else N.push(un(h.beforeEnter,w,D));return N.push(ne),ys(N)}).then(()=>(w.matched.forEach(h=>h.enterCallbacks={}),N=Aa(Ie,"beforeRouteEnter",w,D),N.push(ne),ys(N))).then(()=>{N=[];for(const h of o.list())N.push(un(h,w,D));return N.push(ne),ys(N)}).catch(h=>an(h,8)?h:Promise.reject(h))}function V(w,D,N){for(const B of a.list())B(w,D,N)}function Ae(w,D,N,B,le){const Ie=O(w,D);if(Ie)return Ie;const ne=D===on,h=Es?history.state:{};N&&(B||ne?r.replace(w.fullPath,ge({scroll:ne&&h&&h.scroll},le)):r.push(w.fullPath,le)),l.value=w,Nn(w,D,N,ne),ht()}let F;function ye(){F=r.listen((w,D,N)=>{const B=I(w),le=U(B);if(le){Q(ge(le,{replace:!0}),B).catch(xr);return}c=B;const Ie=l.value;Es&&Cw(Md(Ie.fullPath,N.delta),qo()),W(B,Ie).catch(ne=>an(ne,12)?ne:an(ne,2)?(Q(ne.to,B).then(h=>{an(h,20)&&!N.delta&&N.type===zr.pop&&r.go(-1,!1)}).catch(xr),Promise.reject()):(N.delta&&r.go(-N.delta,!1),me(ne,B,Ie))).then(ne=>{ne=ne||Ae(B,Ie,!1),ne&&(N.delta?r.go(-N.delta,!1):N.type===zr.pop&&an(ne,20)&&r.go(-1,!1)),V(B,Ie,ne)}).catch(xr)})}let $e=mr(),tn=mr(),Ee;function me(w,D,N){ht(w);const B=tn.list();return B.length?B.forEach(le=>le(w,D,N)):console.error(w),Promise.reject(w)}function ue(){return Ee&&l.value!==on?Promise.resolve():new Promise((w,D)=>{$e.add([w,D])})}function ht(w){return Ee||(Ee=!w,ye(),$e.list().forEach(([D,N])=>w?N(w):D()),$e.reset()),w}function Nn(w,D,N,B){const{scrollBehavior:le}=t;if(!Es||!le)return Promise.resolve();const Ie=!N&&Tw(Md(w.fullPath,0))||(B||!N)&&history.state&&history.state.scroll||null;return Et().then(()=>le(w,D,Ie)).then(ne=>ne&&Iw(ne)).catch(ne=>me(ne,w,D))}const pt=w=>r.go(w);let Ye;const gs=new Set;return{currentRoute:l,addRoute:p,removeRoute:m,hasRoute:v,getRoutes:g,resolve:I,options:t,push:R,replace:G,go:pt,back:()=>pt(-1),forward:()=>pt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:tn.add,isReady:ue,install(w){const D=this;w.component("RouterLink",cE),w.component("RouterView",hE),w.config.globalProperties.$router=D,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>As(l)}),Es&&!Ye&&l.value===on&&(Ye=!0,R(r.location).catch(le=>{}));const N={};for(const le in on)N[le]=ce(()=>l.value[le]);w.provide(zo,D),w.provide(kp,er(N)),w.provide(hl,l);const B=w.unmount;gs.add(w),w.unmount=function(){gs.delete(w),gs.size<1&&(c=on,F&&F(),l.value=on,Ye=!1,Ee=!1),B()}}}}function ys(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function gE(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ws(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ws(c,l))||r.push(l))}return[n,s,r]}function Ic(){return et(zo)}/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var Up="store";function mE(t){return t===void 0&&(t=null),et(t!==null?t:Up)}function sr(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function _E(t){return t!==null&&typeof t=="object"}function vE(t){return t&&typeof t.then=="function"}function yE(t,e){return function(){return t(e)}}function $p(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function Bp(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Go(t,n,[],t._modules.root,!0),Cc(t,n,e)}function Cc(t,e,n){var s=t._state,r=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={},a={},l=av(!0);l.run(function(){sr(i,function(c,u){o[u]=yE(c,t),a[u]=ce(function(){return o[u]()}),Object.defineProperty(t.getters,u,{get:function(){return a[u].value},enumerable:!0})})}),t._state=er({data:e}),t._scope=l,t.strict&&CE(t),s&&n&&t._withCommit(function(){s.data=null}),r&&r.stop()}function Go(t,e,n,s,r){var i=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!i&&!r){var a=Tc(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){a[l]=s.state})}var c=s.context=bE(t,o,n);s.forEachMutation(function(u,d){var f=o+d;wE(t,f,u,c)}),s.forEachAction(function(u,d){var f=u.root?d:o+d,p=u.handler||u;EE(t,f,p,c)}),s.forEachGetter(function(u,d){var f=o+d;IE(t,f,u,c)}),s.forEachChild(function(u,d){Go(t,e,n.concat(d),u,r)})}function bE(t,e,n){var s=e==="",r={dispatch:s?t.dispatch:function(i,o,a){var l=io(i,o,a),c=l.payload,u=l.options,d=l.type;return(!u||!u.root)&&(d=e+d),t.dispatch(d,c)},commit:s?t.commit:function(i,o,a){var l=io(i,o,a),c=l.payload,u=l.options,d=l.type;(!u||!u.root)&&(d=e+d),t.commit(d,c,u)}};return Object.defineProperties(r,{getters:{get:s?function(){return t.getters}:function(){return jp(t,e)}},state:{get:function(){return Tc(t.state,n)}}}),r}function jp(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(r){if(r.slice(0,s)===e){var i=r.slice(s);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function wE(t,e,n,s){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(o){n.call(t,s.state,o)})}function EE(t,e,n,s){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(o){var a=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return vE(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):a})}function IE(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(s.state,s.getters,i.state,i.getters)})}function CE(t){xt(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Tc(t,e){return e.reduce(function(n,s){return n[s]},t)}function io(t,e,n){return _E(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var TE="vuex bindings",Kd="vuex:mutations",Pa="vuex:actions",bs="vuex",SE=0;function kE(t,e){uw({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[TE]},function(n){n.addTimelineLayer({id:Kd,label:"Vuex Mutations",color:zd}),n.addTimelineLayer({id:Pa,label:"Vuex Actions",color:zd}),n.addInspector({id:bs,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===bs)if(s.filter){var r=[];Kp(r,e._modules.root,s.filter,""),s.rootNodes=r}else s.rootNodes=[Vp(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===bs){var r=s.nodeId;jp(e,r),s.state=PE(NE(e._modules,r),r==="root"?e.getters:e._makeLocalGettersCache,r)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===bs){var r=s.nodeId,i=s.path;r!=="root"&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit(function(){s.set(e._state.data,i,s.state.value)})}}),e.subscribe(function(s,r){var i={};s.payload&&(i.payload=s.payload),i.state=r,n.notifyComponentUpdate(),n.sendInspectorTree(bs),n.sendInspectorState(bs),n.addTimelineEvent({layerId:Kd,event:{time:Date.now(),title:s.type,data:i}})}),e.subscribeAction({before:function(s,r){var i={};s.payload&&(i.payload=s.payload),s._id=SE++,s._time=Date.now(),i.state=r,n.addTimelineEvent({layerId:Pa,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:i}})},after:function(s,r){var i={},o=Date.now()-s._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(i.payload=s.payload),i.state=r,n.addTimelineEvent({layerId:Pa,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:i}})}})})}var zd=8702998,RE=6710886,AE=16777215,Hp={label:"namespaced",textColor:AE,backgroundColor:RE};function Wp(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Vp(t,e){return{id:e||"root",label:Wp(e),tags:t.namespaced?[Hp]:[],children:Object.keys(t._children).map(function(n){return Vp(t._children[n],e+n+"/")})}}function Kp(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[Hp]:[]}),Object.keys(e._children).forEach(function(r){Kp(t,e._children[r],n,s+r+"/")})}function PE(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),r={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var i=xE(e);r.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?Wp(o):o,editable:!1,value:ml(function(){return i[o]})}})}return r}function xE(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var r=e,i=s.pop();s.forEach(function(o){r[o]||(r[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),r=r[o]._custom.value}),r[i]=ml(function(){return t[n]})}else e[n]=ml(function(){return t[n]})}),e}function NE(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,r,i){var o=s[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function ml(t){try{return t()}catch(e){return e}}var Tt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},zp={namespaced:{configurable:!0}};zp.namespaced.get=function(){return!!this._rawModule.namespaced};Tt.prototype.addChild=function(e,n){this._children[e]=n};Tt.prototype.removeChild=function(e){delete this._children[e]};Tt.prototype.getChild=function(e){return this._children[e]};Tt.prototype.hasChild=function(e){return e in this._children};Tt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Tt.prototype.forEachChild=function(e){sr(this._children,e)};Tt.prototype.forEachGetter=function(e){this._rawModule.getters&&sr(this._rawModule.getters,e)};Tt.prototype.forEachAction=function(e){this._rawModule.actions&&sr(this._rawModule.actions,e)};Tt.prototype.forEachMutation=function(e){this._rawModule.mutations&&sr(this._rawModule.mutations,e)};Object.defineProperties(Tt.prototype,zp);var fs=function(e){this.register([],e,!1)};fs.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};fs.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,r){return n=n.getChild(r),s+(n.namespaced?r+"/":"")},"")};fs.prototype.update=function(e){qp([],this.root,e)};fs.prototype.register=function(e,n,s){var r=this;s===void 0&&(s=!0);var i=new Tt(n,s);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&sr(n.modules,function(a,l){r.register(e.concat(l),a,s)})};fs.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],r=n.getChild(s);r&&r.runtime&&n.removeChild(s)};fs.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function qp(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;qp(t.concat(s),e.getChild(s),n.modules[s])}}function OE(t){return new it(t)}var it=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var r=e.strict;r===void 0&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new fs(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(f,p){return l.call(o,f,p)},this.commit=function(f,p,m){return c.call(o,f,p,m)},this.strict=r;var u=this._modules.root.state;Go(this,u,[],this._modules.root),Cc(this,u),s.forEach(function(d){return d(n)})},Sc={state:{configurable:!0}};it.prototype.install=function(e,n){e.provide(n||Up,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&kE(e,this)};Sc.state.get=function(){return this._state.data};Sc.state.set=function(t){};it.prototype.commit=function(e,n,s){var r=this,i=io(e,n,s),o=i.type,a=i.payload,l={type:o,payload:a},c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(d){d(a)})}),this._subscribers.slice().forEach(function(u){return u(l,r.state)}))};it.prototype.dispatch=function(e,n){var s=this,r=io(e,n),i=r.type,o=r.payload,a={type:i,payload:o},l=this._actions[i];if(l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,s.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,d){c.then(function(f){try{s._actionSubscribers.filter(function(p){return p.after}).forEach(function(p){return p.after(a,s.state)})}catch{}u(f)},function(f){try{s._actionSubscribers.filter(function(p){return p.error}).forEach(function(p){return p.error(a,s.state,f)})}catch{}d(f)})})}};it.prototype.subscribe=function(e,n){return $p(e,this._subscribers,n)};it.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return $p(s,this._actionSubscribers,n)};it.prototype.watch=function(e,n,s){var r=this;return xt(function(){return e(r.state,r.getters)},n,Object.assign({},s))};it.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};it.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Go(this,this.state,e,this._modules.get(e),s.preserveState),Cc(this,this.state)};it.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=Tc(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),Bp(this)};it.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};it.prototype.hotUpdate=function(e){this._modules.update(e),Bp(this,!0)};it.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(it.prototype,Sc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw rr(e)},rr=function(t){return new Error("Firebase Database ("+Gp.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},ME=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},kc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),s.push(n[u],n[d],n[f],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Yp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ME(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||d==null)throw new DE;const f=i<<2|a>>4;if(s.push(f),c!==64){const p=a<<4&240|c>>2;if(s.push(p),d!==64){const m=c<<6&192|d;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class DE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qp=function(t){const e=Yp(t);return kc.encodeByteArray(e,!0)},oo=function(t){return Qp(t).replace(/\./g,"")},ao=function(t){try{return kc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(t){return Jp(void 0,t)}function Jp(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!FE(n)||(t[n]=Jp(t[n],e[n]));return t}function FE(t){return t!=="__proto__"}/**
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
 */function UE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $E=()=>UE().__FIREBASE_DEFAULTS__,BE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ao(t[1]);return e&&JSON.parse(e)},Rc=()=>{try{return $E()||BE()||jE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xp=t=>{var e,n;return(n=(e=Rc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},HE=t=>{const e=Xp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Zp=()=>{var t;return(t=Rc())===null||t===void 0?void 0:t.config},eg=t=>{var e;return(e=Rc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function WE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[oo(JSON.stringify(n)),oo(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ac(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function VE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function KE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zE(){const t=Ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ng(){return Gp.NODE_ADMIN===!0}function qE(){try{return typeof indexedDB=="object"}catch{return!1}}function GE(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE="FirebaseError";class An extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=YE,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,di.prototype.create)}}class di{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?QE(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new An(r,a,s)}}function QE(t,e){return t.replace(JE,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const JE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(t){return JSON.parse(t)}function xe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=function(t){let e={},n={},s={},r="";try{const i=t.split(".");e=qr(ao(i[0])||""),n=qr(ao(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},XE=function(t){const e=sg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ZE=function(t){const e=sg(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ks(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function _l(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function lo(t,e,n){const s={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=e.call(n,t[r],r,t));return s}function co(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(qd(i)&&qd(o)){if(!co(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function qd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Sr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function kr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(f<<1|f>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):d<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const f=(r<<5|r>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=f}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<n;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function tI(t,e){const n=new nI(t,e);return n.subscribe.bind(n)}class nI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");sI(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=xa),r.error===void 0&&(r.error=xa),r.complete===void 0&&(r.complete=xa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xa(){}function Qo(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,S(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Jo=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ve(t){return t&&t._delegate?t._delegate:t}class ts{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class iI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Yo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aI(e))try{this.getOrInitializeService({instanceIdentifier:Fn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fn){return this.instances.has(e)}getOptions(e=Fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:oI(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Fn){return this.component?this.component.multipleInstances?e:Fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oI(t){return t===Fn?void 0:t}function aI(t){return t.instantiationMode==="EAGER"}/**
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
 */class lI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new iI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const cI={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},uI=fe.INFO,dI={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},fI=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=dI[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pc{constructor(e){this.name=e,this._logLevel=uI,this._logHandler=fI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const hI=(t,e)=>e.some(n=>t instanceof n);let Gd,Yd;function pI(){return Gd||(Gd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gI(){return Yd||(Yd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rg=new WeakMap,vl=new WeakMap,ig=new WeakMap,Na=new WeakMap,xc=new WeakMap;function mI(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(_n(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rg.set(n,t)}).catch(()=>{}),xc.set(e,t),e}function _I(t){if(vl.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});vl.set(t,e)}let yl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ig.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vI(t){yl=t(yl)}function yI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Oa(this),e,...n);return ig.set(s,e.sort?e.sort():[e]),_n(s)}:gI().includes(t)?function(...e){return t.apply(Oa(this),e),_n(rg.get(this))}:function(...e){return _n(t.apply(Oa(this),e))}}function bI(t){return typeof t=="function"?yI(t):(t instanceof IDBTransaction&&_I(t),hI(t,pI())?new Proxy(t,yl):t)}function _n(t){if(t instanceof IDBRequest)return mI(t);if(Na.has(t))return Na.get(t);const e=bI(t);return e!==t&&(Na.set(t,e),xc.set(e,t)),e}const Oa=t=>xc.get(t);function wI(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=_n(o);return s&&o.addEventListener("upgradeneeded",l=>{s(_n(o.result),l.oldVersion,l.newVersion,_n(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const EI=["get","getKey","getAll","getAllKeys","count"],II=["put","add","delete","clear"],Ma=new Map;function Qd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ma.get(e))return Ma.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=II.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||EI.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Ma.set(e,i),i}vI(t=>({...t,get:(e,n,s)=>Qd(e,n)||t.get(e,n,s),has:(e,n)=>!!Qd(e,n)||t.has(e,n)}));/**
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
 */class CI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(TI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function TI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bl="@firebase/app",Jd="0.11.1";/**
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
 */const Qt=new Pc("@firebase/app"),SI="@firebase/app-compat",kI="@firebase/analytics-compat",RI="@firebase/analytics",AI="@firebase/app-check-compat",PI="@firebase/app-check",xI="@firebase/auth",NI="@firebase/auth-compat",OI="@firebase/database",MI="@firebase/data-connect",DI="@firebase/database-compat",LI="@firebase/functions",FI="@firebase/functions-compat",UI="@firebase/installations",$I="@firebase/installations-compat",BI="@firebase/messaging",jI="@firebase/messaging-compat",HI="@firebase/performance",WI="@firebase/performance-compat",VI="@firebase/remote-config",KI="@firebase/remote-config-compat",zI="@firebase/storage",qI="@firebase/storage-compat",GI="@firebase/firestore",YI="@firebase/vertexai",QI="@firebase/firestore-compat",JI="firebase",XI="11.3.1";/**
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
 */const wl="[DEFAULT]",ZI={[bl]:"fire-core",[SI]:"fire-core-compat",[RI]:"fire-analytics",[kI]:"fire-analytics-compat",[PI]:"fire-app-check",[AI]:"fire-app-check-compat",[xI]:"fire-auth",[NI]:"fire-auth-compat",[OI]:"fire-rtdb",[MI]:"fire-data-connect",[DI]:"fire-rtdb-compat",[LI]:"fire-fn",[FI]:"fire-fn-compat",[UI]:"fire-iid",[$I]:"fire-iid-compat",[BI]:"fire-fcm",[jI]:"fire-fcm-compat",[HI]:"fire-perf",[WI]:"fire-perf-compat",[VI]:"fire-rc",[KI]:"fire-rc-compat",[zI]:"fire-gcs",[qI]:"fire-gcs-compat",[GI]:"fire-fst",[QI]:"fire-fst-compat",[YI]:"fire-vertex","fire-js":"fire-js",[JI]:"fire-js-all"};/**
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
 */const uo=new Map,eC=new Map,El=new Map;function Xd(t,e){try{t.container.addComponent(e)}catch(n){Qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zs(t){const e=t.name;if(El.has(e))return Qt.debug(`There were multiple attempts to register component ${e}.`),!1;El.set(e,t);for(const n of uo.values())Xd(n,t);for(const n of eC.values())Xd(n,t);return!0}function Nc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ut(t){return t==null?!1:t.settings!==void 0}/**
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
 */const tC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vn=new di("app","Firebase",tC);/**
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
 */class nC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ts("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vn.create("app-deleted",{appName:this._name})}}/**
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
 */const or=XI;function Oc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:wl,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw vn.create("bad-app-name",{appName:String(r)});if(n||(n=Zp()),!n)throw vn.create("no-options");const i=uo.get(r);if(i){if(co(n,i.options)&&co(s,i.config))return i;throw vn.create("duplicate-app",{appName:r})}const o=new lI(r);for(const l of El.values())o.addComponent(l);const a=new nC(n,s,o);return uo.set(r,a),a}function og(t=wl){const e=uo.get(t);if(!e&&t===wl&&Zp())return Oc();if(!e)throw vn.create("no-app",{appName:t});return e}function yn(t,e,n){var s;let r=(s=ZI[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qt.warn(a.join(" "));return}zs(new ts(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const sC="firebase-heartbeat-database",rC=1,Gr="firebase-heartbeat-store";let Da=null;function ag(){return Da||(Da=wI(sC,rC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Gr)}catch(n){console.warn(n)}}}}).catch(t=>{throw vn.create("idb-open",{originalErrorMessage:t.message})})),Da}async function iC(t){try{const n=(await ag()).transaction(Gr),s=await n.objectStore(Gr).get(lg(t));return await n.done,s}catch(e){if(e instanceof An)Qt.warn(e.message);else{const n=vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qt.warn(n.message)}}}async function Zd(t,e){try{const s=(await ag()).transaction(Gr,"readwrite");await s.objectStore(Gr).put(e,lg(t)),await s.done}catch(n){if(n instanceof An)Qt.warn(n.message);else{const s=vn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qt.warn(s.message)}}}function lg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const oC=1024,aC=30;class lC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ef();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>aC){const o=dC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Qt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ef(),{heartbeatsToSend:s,unsentEntries:r}=cC(this._heartbeatsCache.heartbeats),i=oo(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Qt.warn(n),""}}}function ef(){return new Date().toISOString().substring(0,10)}function cC(t,e=oC){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),tf(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),tf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class uC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qE()?GE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await iC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Zd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Zd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function tf(t){return oo(JSON.stringify({version:2,heartbeats:t})).length}function dC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function fC(t){zs(new ts("platform-logger",e=>new CI(e),"PRIVATE")),zs(new ts("heartbeat",e=>new lC(e),"PRIVATE")),yn(bl,Jd,t),yn(bl,Jd,"esm2017"),yn("fire-js","")}fC("");function Mc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function cg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hC=cg,ug=new di("auth","Firebase",cg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=new Pc("@firebase/auth");function pC(t,...e){fo.logLevel<=fe.WARN&&fo.warn(`Auth (${or}): ${t}`,...e)}function Bi(t,...e){fo.logLevel<=fe.ERROR&&fo.error(`Auth (${or}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t,...e){throw Dc(t,...e)}function Nt(t,...e){return Dc(t,...e)}function dg(t,e,n){const s=Object.assign(Object.assign({},hC()),{[e]:n});return new di("auth","Firebase",s).create(e,{appName:t.name})}function zt(t){return dg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Dc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return ug.create(t,...e)}function z(t,e,...n){if(!t)throw Dc(e,...n)}function Ht(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bi(e),new Error(e)}function Jt(t,e){t||Ht(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function gC(){return nf()==="http:"||nf()==="https:"}function nf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gC()||KE()||"connection"in navigator)?navigator.onLine:!0}function _C(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jt(n>e,"Short delay should be less than long delay!"),this.isMobile=Ac()||tg()}get(){return mC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(t,e){Jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=new fi(3e4,6e4);function Pn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xn(t,e,n,s,r={}){return hg(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ir(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},i);return VE()||(c.referrerPolicy="no-referrer"),fg.fetch()(pg(t,t.config.apiHost,n,a),c)})}async function hg(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},vC),e);try{const r=new wC(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Pi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Pi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Pi(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw dg(t,u,c);Ct(t,u)}}catch(r){if(r instanceof An)throw r;Ct(t,"network-request-failed",{message:String(r)})}}async function hi(t,e,n,s,r={}){const i=await xn(t,e,n,s,r);return"mfaPendingCredential"in i&&Ct(t,"multi-factor-auth-required",{_serverResponse:i}),i}function pg(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Lc(t.config,r):`${t.config.apiScheme}://${r}`}function bC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Nt(this.auth,"network-request-failed")),yC.get())})}}function Pi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Nt(t,e,s);return r.customData._tokenResponse=n,r}function sf(t){return t!==void 0&&t.enterprise!==void 0}class EC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return bC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function IC(t,e){return xn(t,"GET","/v2/recaptchaConfig",Pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CC(t,e){return xn(t,"POST","/v1/accounts:delete",e)}async function gg(t,e){return xn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TC(t,e=!1){const n=Ve(t),s=await n.getIdToken(e),r=Fc(s);z(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Or(La(r.auth_time)),issuedAtTime:Or(La(r.iat)),expirationTime:Or(La(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function La(t){return Number(t)*1e3}function Fc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Bi("JWT malformed, contained fewer than 3 sections"),null;try{const r=ao(n);return r?JSON.parse(r):(Bi("Failed to decode base64 JWT payload"),null)}catch(r){return Bi("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function rf(t){const e=Fc(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof An&&SC(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function SC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Or(this.lastLoginAt),this.creationTime=Or(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ho(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Yr(t,gg(n,{idToken:s}));z(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?mg(i.providerUserInfo):[],a=AC(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Cl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function RC(t){const e=Ve(t);await ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AC(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function mg(t){return t.map(e=>{var{providerId:n}=e,s=Mc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PC(t,e){const n=await hg(t,{},async()=>{const s=ir({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=pg(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fg.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function xC(t,e){return xn(t,"POST","/v2/accounts:revokeToken",Pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){z(e.length!==0,"internal-error");const n=rf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await PC(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Os;return s&&(z(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(z(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Os,this.toJSON())}_performRefresh(){return Ht("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Mc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Cl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Yr(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return TC(this,e)}reload(){return RC(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ho(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ut(this.auth.app))return Promise.reject(zt(this.auth));const e=await this.getIdToken();return await Yr(this,CC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,T=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:O,emailVerified:R,isAnonymous:G,providerData:U,stsTokenManager:Q}=n;z(O&&Q,e,"internal-error");const P=Os.fromJSON(this.name,Q);z(typeof O=="string",e,"internal-error"),ln(d,e.name),ln(f,e.name),z(typeof R=="boolean",e,"internal-error"),z(typeof G=="boolean",e,"internal-error"),ln(p,e.name),ln(m,e.name),ln(g,e.name),ln(v,e.name),ln(I,e.name),ln(T,e.name);const W=new Wt({uid:O,auth:e,email:f,emailVerified:R,displayName:d,isAnonymous:G,photoURL:m,phoneNumber:p,tenantId:g,stsTokenManager:P,createdAt:I,lastLoginAt:T});return U&&Array.isArray(U)&&(W.providerData=U.map(V=>Object.assign({},V))),v&&(W._redirectEventId=v),W}static async _fromIdTokenResponse(e,n,s=!1){const r=new Os;r.updateFromServerResponse(n);const i=new Wt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ho(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];z(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?mg(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new Os;a.updateFromIdToken(s);const l=new Wt({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Cl(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of=new Map;function Vt(t){Jt(t instanceof Function,"Expected a class definition");let e=of.get(t);return e?(Jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,of.set(t,e),e)}/**
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
 */class _g{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_g.type="NONE";const af=_g;/**
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
 */function ji(t,e,n){return`firebase:${t}:${e}:${n}`}class Ms{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ji(this.userKey,r.apiKey,i),this.fullPersistenceKey=ji("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Wt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ms(Vt(af),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=r[0]||Vt(af);const o=ji(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Wt._fromJSON(e,u);c!==i&&(a=d),i=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ms(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Ms(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ig(e))return"Blackberry";if(Cg(e))return"Webos";if(yg(e))return"Safari";if((e.includes("chrome/")||bg(e))&&!e.includes("edge/"))return"Chrome";if(Eg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function vg(t=Ge()){return/firefox\//i.test(t)}function yg(t=Ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bg(t=Ge()){return/crios\//i.test(t)}function wg(t=Ge()){return/iemobile/i.test(t)}function Eg(t=Ge()){return/android/i.test(t)}function Ig(t=Ge()){return/blackberry/i.test(t)}function Cg(t=Ge()){return/webos/i.test(t)}function Uc(t=Ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function NC(t=Ge()){var e;return Uc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function OC(){return zE()&&document.documentMode===10}function Tg(t=Ge()){return Uc(t)||Eg(t)||Cg(t)||Ig(t)||/windows phone/i.test(t)||wg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(t,e=[]){let n;switch(t){case"Browser":n=lf(Ge());break;case"Worker":n=`${lf(Ge())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${or}/${s}`}/**
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
 */class MC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function DC(t,e={}){return xn(t,"GET","/v2/passwordPolicy",Pn(t,e))}/**
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
 */const LC=6;class FC{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:LC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cf(this),this.idTokenSubscription=new cf(this),this.beforeStateQueue=new MC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ug,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Ms.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await gg(this,{idToken:e}),s=await Wt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ut(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ho(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_C()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ut(this.app))return Promise.reject(zt(this));const n=e?Ve(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ut(this.app)?Promise.reject(zt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ut(this.app)?Promise.reject(zt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DC(this),n=new FC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new di("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await xC(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vt(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await Ms.create(this,[Vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;if(ut(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&pC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function hs(t){return Ve(t)}class cf{constructor(e){this.auth=e,this.observer=null,this.addObserver=tI(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $C(t){Xo=t}function kg(t){return Xo.loadJS(t)}function BC(){return Xo.recaptchaEnterpriseScript}function jC(){return Xo.gapiScript}function HC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class WC{constructor(){this.enterprise=new VC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class VC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const KC="recaptcha-enterprise",Rg="NO_RECAPTCHA";class zC{constructor(e){this.type=KC,this.auth=hs(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{IC(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new EC(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(i,o,a){const l=window.grecaptcha;sf(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(Rg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new WC().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&sf(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=BC();l.length!==0&&(l+=a),kg(l).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function _r(t,e,n,s=!1,r=!1){const i=new zC(t);let o;if(r)o=Rg;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Tl(t,e,n,s,r){var i,o;if(r==="EMAIL_PASSWORD_PROVIDER")if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await _r(t,e,n,n==="getOobCode");return s(t,a)}else return s(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await _r(t,e,n,n==="getOobCode");return s(t,l)}else return Promise.reject(a)});else if(r==="PHONE_PROVIDER")if(!((o=t._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await _r(t,e,n);return s(t,a).catch(async l=>{var c;if(((c=t._getRecaptchaConfig())===null||c===void 0?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const u=await _r(t,e,n,!1,!0);return s(t,u)}return Promise.reject(l)})}else{const a=await _r(t,e,n,!1,!0);return s(t,a)}else return Promise.reject(r+" provider is not supported.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qC(t,e){const n=Nc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(co(i,e??{}))return r;Ct(r,"already-initialized")}return n.initialize({options:e})}function GC(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Vt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function YC(t,e,n){const s=hs(t);z(s._canInitEmulator,s,"emulator-config-failed"),z(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Ag(e),{host:o,port:a}=QC(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||JC()}function Ag(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function QC(t){const e=Ag(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:uf(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:uf(o)}}}function uf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function JC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ht("not implemented")}_getIdTokenResponse(e){return Ht("not implemented")}_linkToIdToken(e,n){return Ht("not implemented")}_getReauthenticationResolver(e){return Ht("not implemented")}}async function XC(t,e){return xn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZC(t,e){return hi(t,"POST","/v1/accounts:signInWithPassword",Pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eT(t,e){return hi(t,"POST","/v1/accounts:signInWithEmailLink",Pn(t,e))}async function tT(t,e){return hi(t,"POST","/v1/accounts:signInWithEmailLink",Pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends $c{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Qr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Qr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tl(e,n,"signInWithPassword",ZC,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return eT(e,{email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tl(e,s,"signUpPassword",XC,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return tT(e,{idToken:n,email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ds(t,e){return hi(t,"POST","/v1/accounts:signInWithIdp",Pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT="http://localhost";class ns extends $c{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Mc(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new ns(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ds(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ds(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ds(e,n)}buildRequest(){const e={requestUri:nT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ir(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rT(t){const e=Sr(kr(t)).link,n=e?Sr(kr(e)).deep_link_id:null,s=Sr(kr(t)).deep_link_id;return(s?Sr(kr(s)).link:null)||s||n||e||t}class Bc{constructor(e){var n,s,r,i,o,a;const l=Sr(kr(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,d=sT((r=l.mode)!==null&&r!==void 0?r:null);z(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=rT(e);try{return new Bc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this.providerId=ar.PROVIDER_ID}static credential(e,n){return Qr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Bc.parseLink(n);return z(s,"argument-error"),Qr._fromEmailAndCode(e,s.code,s.tenantId)}}ar.PROVIDER_ID="password";ar.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ar.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class pi extends Pg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends pi{constructor(){super("facebook.com")}static credential(e){return ns._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";dn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ns._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return fn.credential(n,s)}catch{return null}}}fn.GOOGLE_SIGN_IN_METHOD="google.com";fn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends pi{constructor(){super("github.com")}static credential(e){return ns._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.GITHUB_SIGN_IN_METHOD="github.com";hn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends pi{constructor(){super("twitter.com")}static credential(e,n){return ns._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return pn.credential(n,s)}catch{return null}}}pn.TWITTER_SIGN_IN_METHOD="twitter.com";pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iT(t,e){return hi(t,"POST","/v1/accounts:signUp",Pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Wt._fromIdTokenResponse(e,s,r),o=df(s);return new ss({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=df(s);return new ss({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function df(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po extends An{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,po.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new po(e,n,s,r)}}function xg(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?po._fromErrorAndOperation(t,i,e,s):i})}async function oT(t,e,n=!1){const s=await Yr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ss._forOperation(t,"link",s)}/**
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
 */async function aT(t,e,n=!1){const{auth:s}=t;if(ut(s.app))return Promise.reject(zt(s));const r="reauthenticate";try{const i=await Yr(t,xg(s,r,e,t),n);z(i.idToken,s,"internal-error");const o=Fc(i.idToken);z(o,s,"internal-error");const{sub:a}=o;return z(t.uid===a,s,"user-mismatch"),ss._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ct(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ng(t,e,n=!1){if(ut(t.app))return Promise.reject(zt(t));const s="signIn",r=await xg(t,s,e),i=await ss._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function lT(t,e){return Ng(hs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Og(t){const e=hs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function cT(t,e,n){if(ut(t.app))return Promise.reject(zt(t));const s=hs(t),o=await Tl(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",iT,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Og(t),l}),a=await ss._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function uT(t,e,n){return ut(t.app)?Promise.reject(zt(t)):lT(Ve(t),ar.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Og(t),s})}function dT(t,e,n,s){return Ve(t).onIdTokenChanged(e,n,s)}function fT(t,e,n){return Ve(t).beforeAuthStateChanged(e,n)}function hT(t){return Ve(t).signOut()}const go="__sak";/**
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
 */class Mg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(go,"1"),this.storage.removeItem(go),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT=1e3,gT=10;class Dg extends Mg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Tg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);OC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,gT):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},pT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dg.type="LOCAL";const mT=Dg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg extends Mg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Lg.type="SESSION";const Fg=Lg;/**
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
 */function _T(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Zo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Zo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await _T(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class vT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=jc("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){return window}function yT(t){Ot().location.href=t}/**
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
 */function Ug(){return typeof Ot().WorkerGlobalScope<"u"&&typeof Ot().importScripts=="function"}async function bT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ET(){return Ug()?self:null}/**
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
 */const $g="firebaseLocalStorageDb",IT=1,mo="firebaseLocalStorage",Bg="fbase_key";class gi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ea(t,e){return t.transaction([mo],e?"readwrite":"readonly").objectStore(mo)}function CT(){const t=indexedDB.deleteDatabase($g);return new gi(t).toPromise()}function Sl(){const t=indexedDB.open($g,IT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(mo,{keyPath:Bg})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(mo)?e(s):(s.close(),await CT(),e(await Sl()))})})}async function ff(t,e,n){const s=ea(t,!0).put({[Bg]:e,value:n});return new gi(s).toPromise()}async function TT(t,e){const n=ea(t,!1).get(e),s=await new gi(n).toPromise();return s===void 0?null:s.value}function hf(t,e){const n=ea(t,!0).delete(e);return new gi(n).toPromise()}const ST=800,kT=3;class jg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>kT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ug()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zo._getInstance(ET()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await bT(),!this.activeServiceWorker)return;this.sender=new vT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sl();return await ff(e,go,"1"),await hf(e,go),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ff(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>TT(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>hf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ea(r,!1).getAll();return new gi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ST)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jg.type="LOCAL";const RT=jg;new fi(3e4,6e4);/**
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
 */function AT(t,e){return e?Vt(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Hc extends $c{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ds(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ds(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function PT(t){return Ng(t.auth,new Hc(t),t.bypassAuthState)}function xT(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),aT(n,new Hc(t),t.bypassAuthState)}async function NT(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),oT(n,new Hc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PT;case"linkViaPopup":case"linkViaRedirect":return NT;case"reauthViaPopup":case"reauthViaRedirect":return xT;default:Ct(this.auth,"internal-error")}}resolve(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=new fi(2e3,1e4);class Cs extends Hg{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Cs.currentPopupAction&&Cs.currentPopupAction.cancel(),Cs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Jt(this.filter.length===1,"Popup operations only handle one event");const e=jc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OT.get())};e()}}Cs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT="pendingRedirect",Hi=new Map;class DT extends Hg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Hi.get(this.auth._key());if(!e){try{const s=await LT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Hi.set(this.auth._key(),e)}return this.bypassAuthState||Hi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function LT(t,e){const n=$T(e),s=UT(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function FT(t,e){Hi.set(t._key(),e)}function UT(t){return Vt(t._redirectPersistence)}function $T(t){return ji(MT,t.config.apiKey,t.name)}async function BT(t,e,n=!1){if(ut(t.app))return Promise.reject(zt(t));const s=hs(t),r=AT(s,e),o=await new DT(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT=10*60*1e3;class HT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!WT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Wg(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Nt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jT&&this.cachedEventUids.clear(),this.cachedEventUids.has(pf(e))}saveEventToCache(e){this.cachedEventUids.add(pf(e)),this.lastProcessedEventTime=Date.now()}}function pf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Wg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function WT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VT(t,e={}){return xn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zT=/^https?/;async function qT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await VT(t);for(const n of e)try{if(GT(n))return}catch{}Ct(t,"unauthorized-domain")}function GT(t){const e=Il(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!zT.test(n))return!1;if(KT.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const YT=new fi(3e4,6e4);function gf(){const t=Ot().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function QT(t){return new Promise((e,n)=>{var s,r,i;function o(){gf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gf(),n(Nt(t,"network-request-failed"))},timeout:YT.get()})}if(!((r=(s=Ot().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ot().gapi)===null||i===void 0)&&i.load)o();else{const a=HC("iframefcb");return Ot()[a]=()=>{gapi.load?o():n(Nt(t,"network-request-failed"))},kg(`${jC()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Wi=null,e})}let Wi=null;function JT(t){return Wi=Wi||QT(t),Wi}/**
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
 */const XT=new fi(5e3,15e3),ZT="__/auth/iframe",e0="emulator/auth/iframe",t0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},n0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function s0(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Lc(e,e0):`https://${t.config.authDomain}/${ZT}`,s={apiKey:e.apiKey,appName:t.name,v:or},r=n0.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ir(s).slice(1)}`}async function r0(t){const e=await JT(t),n=Ot().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:s0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:t0,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Nt(t,"network-request-failed"),a=Ot().setTimeout(()=>{i(o)},XT.get());function l(){Ot().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const i0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},o0=500,a0=600,l0="_blank",c0="http://localhost";class mf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function u0(t,e,n,s=o0,r=a0){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},i0),{width:s.toString(),height:r.toString(),top:i,left:o}),c=Ge().toLowerCase();n&&(a=bg(c)?l0:n),vg(c)&&(e=e||c0,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[p,m])=>`${f}${p}=${m},`,"");if(NC(c)&&a!=="_self")return d0(e||"",a),new mf(null);const d=window.open(e||"",a,u);z(d,t,"popup-blocked");try{d.focus()}catch{}return new mf(d)}function d0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const f0="__/auth/handler",h0="emulator/auth/handler",p0=encodeURIComponent("fac");async function _f(t,e,n,s,r,i){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:or,eventId:r};if(e instanceof Pg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_l(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(i||{}))o[u]=d}if(e instanceof pi){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${p0}=${encodeURIComponent(l)}`:"";return`${g0(t)}?${ir(a).slice(1)}${c}`}function g0({config:t}){return t.emulator?Lc(t,h0):`https://${t.authDomain}/${f0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa="webStorageSupport";class m0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fg,this._completeRedirectFn=BT,this._overrideRedirectResult=FT}async _openPopup(e,n,s,r){var i;Jt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await _f(e,n,s,Il(),r);return u0(e,o,jc())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await _f(e,n,s,Il(),r);return yT(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Jt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await r0(e),s=new HT(e);return n.register("authEvent",r=>(z(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Fa,{type:Fa},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Fa];o!==void 0&&n(!!o),Ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Tg()||yg()||Uc()}}const _0=m0;var vf="@firebase/auth",yf="1.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function b0(t){zs(new ts("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sg(t)},c=new UC(s,r,i,l);return GC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),zs(new ts("auth-internal",e=>{const n=hs(e.getProvider("auth").getImmediate());return(s=>new v0(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yn(vf,yf,y0(t)),yn(vf,yf,"esm2017")}/**
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
 */const w0=5*60,E0=eg("authIdTokenMaxAge")||w0;let bf=null;const I0=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>E0)return;const r=n==null?void 0:n.token;bf!==r&&(bf=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Jr(t=og()){const e=Nc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qC(t,{popupRedirectResolver:_0,persistence:[RT,mT,Fg]}),s=eg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=I0(i.toString());fT(n,o,()=>o(n.currentUser)),dT(n,a=>o(a))}}const r=Xp("auth");return r&&YC(n,`http://${r}`),n}function C0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}$C({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Nt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",C0().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});b0("Browser");const Ft=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},T0={},S0={class:"relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 shadow-lg lg:py-4 dark:bg-sky-950","data-te-navbar-ref":""};function k0(t,e){return Be(),Je("nav",S0,[ui(t.$slots,"default")])}const Wc=Ft(T0,[["render",k0]]);const R0={components:{BaseHeader:Wc},setup(){const t=ee(""),e=mE(),n=Ic();function s(){e.dispatch("submitData",t.value),t.value=""}function r(){Jr().signOut(),n.replace("/login")}function i(){Jr().onAuthStateChanged(function(o){o||n.replace("/")})}return hc(()=>{i()}),{taskText:t,submitTask:s,logoutUser:r}}},Vg=t=>(Jh("data-v-3162c0ab"),t=t(),Xh(),t),A0={class:"dark:bg-gray-900"},P0=Vg(()=>J("p",{class:"text-3xl font-semibold p-3 dark:text-white"},"My Tasks",-1)),x0=Vg(()=>J("div",{class:"text-2xl font-normal pb-5 dark:text-white"},"Add a task below (with Enter) and click over the finished tasks",-1)),N0={class:"my-4"};function O0(t,e,n,s,r,i){const o=ze("base-header");return Be(),Je("section",A0,[ie(o,null,{default:Xe(()=>[ui(t.$slots,"default",{},void 0,!0)]),_:3}),P0,x0,J("div",N0,[el(J("input",{placeholder:"Add a new task!",id:"insertField",type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>s.taskText=a),onKeydown:e[1]||(e[1]=Ob(a=>s.submitTask(s.taskText),["enter"]))},null,544),[[no,s.taskText]]),J("button",{onClick:e[2]||(e[2]=a=>s.submitTask(s.taskText)),class:"bg-blue-500 text-white px-4 py-2 rounded ml-2 hover:bg-blue-600"}," Add ")])])}const M0=Ft(R0,[["render",O0],["__scopeId","data-v-3162c0ab"]]),Mr=/^[a-z0-9]+(-[a-z0-9]+)*$/,ta=(t,e,n,s="")=>{const r=t.split(":");if(t.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;s=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const a=r.pop(),l=r.pop(),c={provider:r.length>0?r[0]:s,prefix:l,name:a};return e&&!Vi(c)?null:c}const i=r[0],o=i.split("-");if(o.length>1){const a={provider:s,prefix:o.shift(),name:o.join("-")};return e&&!Vi(a)?null:a}if(n&&s===""){const a={provider:s,prefix:"",name:i};return e&&!Vi(a,n)?null:a}return null},Vi=(t,e)=>t?!!((t.provider===""||t.provider.match(Mr))&&(e&&t.prefix===""||t.prefix.match(Mr))&&t.name.match(Mr)):!1,Kg=Object.freeze({left:0,top:0,width:16,height:16}),_o=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),na=Object.freeze({...Kg,..._o}),kl=Object.freeze({...na,body:"",hidden:!1});function D0(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const s=((t.rotate||0)+(e.rotate||0))%4;return s&&(n.rotate=s),n}function wf(t,e){const n=D0(t,e);for(const s in kl)s in _o?s in t&&!(s in n)&&(n[s]=_o[s]):s in e?n[s]=e[s]:s in t&&(n[s]=t[s]);return n}function L0(t,e){const n=t.icons,s=t.aliases||Object.create(null),r=Object.create(null);function i(o){if(n[o])return r[o]=[];if(!(o in r)){r[o]=null;const a=s[o]&&s[o].parent,l=a&&i(a);l&&(r[o]=[a].concat(l))}return r[o]}return(e||Object.keys(n).concat(Object.keys(s))).forEach(i),r}function F0(t,e,n){const s=t.icons,r=t.aliases||Object.create(null);let i={};function o(a){i=wf(s[a]||r[a],i)}return o(e),n.forEach(o),wf(t,i)}function zg(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(r=>{e(r,null),n.push(r)});const s=L0(t);for(const r in s){const i=s[r];i&&(e(r,F0(t,r,i)),n.push(r))}return n}const U0={provider:"",aliases:{},not_found:{},...Kg};function Ua(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function qg(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!Ua(t,U0))return null;const n=e.icons;for(const r in n){const i=n[r];if(!r.match(Mr)||typeof i.body!="string"||!Ua(i,kl))return null}const s=e.aliases||Object.create(null);for(const r in s){const i=s[r],o=i.parent;if(!r.match(Mr)||typeof o!="string"||!n[o]&&!s[o]||!Ua(i,kl))return null}return e}const Ef=Object.create(null);function $0(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function rs(t,e){const n=Ef[t]||(Ef[t]=Object.create(null));return n[e]||(n[e]=$0(t,e))}function Vc(t,e){return qg(e)?zg(e,(n,s)=>{s?t.icons[n]=s:t.missing.add(n)}):[]}function B0(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let Xr=!1;function Gg(t){return typeof t=="boolean"&&(Xr=t),Xr}function j0(t){const e=typeof t=="string"?ta(t,!0,Xr):t;if(e){const n=rs(e.provider,e.prefix),s=e.name;return n.icons[s]||(n.missing.has(s)?null:void 0)}}function H0(t,e){const n=ta(t,!0,Xr);if(!n)return!1;const s=rs(n.provider,n.prefix);return B0(s,n.name,e)}function W0(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),Xr&&!e&&!t.prefix){let r=!1;return qg(t)&&(t.prefix="",zg(t,(i,o)=>{o&&H0(i,o)&&(r=!0)})),r}const n=t.prefix;if(!Vi({provider:e,prefix:n,name:"a"}))return!1;const s=rs(e,n);return!!Vc(s,t)}const Yg=Object.freeze({width:null,height:null}),Qg=Object.freeze({...Yg,..._o}),V0=/(-?[0-9.]*[0-9]+[0-9.]*)/g,K0=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function If(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const s=t.split(V0);if(s===null||!s.length)return t;const r=[];let i=s.shift(),o=K0.test(i);for(;;){if(o){const a=parseFloat(i);isNaN(a)?r.push(i):r.push(Math.ceil(a*e*n)/n)}else r.push(i);if(i=s.shift(),i===void 0)return r.join("");o=!o}}const z0=t=>t==="unset"||t==="undefined"||t==="none";function q0(t,e){const n={...na,...t},s={...Qg,...e},r={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,s].forEach(m=>{const g=[],v=m.hFlip,I=m.vFlip;let T=m.rotate;v?I?T+=2:(g.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),g.push("scale(-1 1)"),r.top=r.left=0):I&&(g.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),g.push("scale(1 -1)"),r.top=r.left=0);let O;switch(T<0&&(T-=Math.floor(T/4)*4),T=T%4,T){case 1:O=r.height/2+r.top,g.unshift("rotate(90 "+O.toString()+" "+O.toString()+")");break;case 2:g.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:O=r.width/2+r.left,g.unshift("rotate(-90 "+O.toString()+" "+O.toString()+")");break}T%2===1&&(r.left!==r.top&&(O=r.left,r.left=r.top,r.top=O),r.width!==r.height&&(O=r.width,r.width=r.height,r.height=O)),g.length&&(i='<g transform="'+g.join(" ")+'">'+i+"</g>")});const o=s.width,a=s.height,l=r.width,c=r.height;let u,d;o===null?(d=a===null?"1em":a==="auto"?c:a,u=If(d,l/c)):(u=o==="auto"?l:o,d=a===null?If(u,c/l):a==="auto"?c:a);const f={},p=(m,g)=>{z0(g)||(f[m]=g.toString())};return p("width",u),p("height",d),f.viewBox=r.left.toString()+" "+r.top.toString()+" "+l.toString()+" "+c.toString(),{attributes:f,body:i}}const G0=/\sid="(\S+)"/g,Y0="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Q0=0;function J0(t,e=Y0){const n=[];let s;for(;s=G0.exec(t);)n.push(s[1]);if(!n.length)return t;const r="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const o=typeof e=="function"?e(i):e+(Q0++).toString(),a=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+o+r+"$3")}),t=t.replace(new RegExp(r,"g"),""),t}const Rl=Object.create(null);function X0(t,e){Rl[t]=e}function Al(t){return Rl[t]||Rl[""]}function Kc(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const zc=Object.create(null),vr=["https://api.simplesvg.com","https://api.unisvg.com"],Ki=[];for(;vr.length>0;)vr.length===1||Math.random()>.5?Ki.push(vr.shift()):Ki.push(vr.pop());zc[""]=Kc({resources:["https://api.iconify.design"].concat(Ki)});function Z0(t,e){const n=Kc(e);return n===null?!1:(zc[t]=n,!0)}function qc(t){return zc[t]}const eS=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let Cf=eS();function tS(t,e){const n=qc(t);if(!n)return 0;let s;if(!n.maxURL)s=0;else{let r=0;n.resources.forEach(o=>{r=Math.max(r,o.length)});const i=e+".json?icons=";s=n.maxURL-r-n.path.length-i.length}return s}function nS(t){return t===404}const sS=(t,e,n)=>{const s=[],r=tS(t,e),i="icons";let o={type:i,provider:t,prefix:e,icons:[]},a=0;return n.forEach((l,c)=>{a+=l.length+1,a>=r&&c>0&&(s.push(o),o={type:i,provider:t,prefix:e,icons:[]},a=l.length),o.icons.push(l)}),s.push(o),s};function rS(t){if(typeof t=="string"){const e=qc(t);if(e)return e.path}return"/"}const iS=(t,e,n)=>{if(!Cf){n("abort",424);return}let s=rS(e.provider);switch(e.type){case"icons":{const i=e.prefix,a=e.icons.join(","),l=new URLSearchParams({icons:a});s+=i+".json?"+l.toString();break}case"custom":{const i=e.uri;s+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let r=503;Cf(t+s).then(i=>{const o=i.status;if(o!==200){setTimeout(()=>{n(nS(o)?"abort":"next",o)});return}return r=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",r)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",r)})},oS={prepare:sS,send:iS};function aS(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((r,i)=>r.provider!==i.provider?r.provider.localeCompare(i.provider):r.prefix!==i.prefix?r.prefix.localeCompare(i.prefix):r.name.localeCompare(i.name));let s={provider:"",prefix:"",name:""};return t.forEach(r=>{if(s.name===r.name&&s.prefix===r.prefix&&s.provider===r.provider)return;s=r;const i=r.provider,o=r.prefix,a=r.name,l=n[i]||(n[i]=Object.create(null)),c=l[o]||(l[o]=rs(i,o));let u;a in c.icons?u=e.loaded:o===""||c.missing.has(a)?u=e.missing:u=e.pending;const d={provider:i,prefix:o,name:a};u.push(d)}),e}function Jg(t,e){t.forEach(n=>{const s=n.loaderCallbacks;s&&(n.loaderCallbacks=s.filter(r=>r.id!==e))})}function lS(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const s=t.provider,r=t.prefix;e.forEach(i=>{const o=i.icons,a=o.pending.length;o.pending=o.pending.filter(l=>{if(l.prefix!==r)return!0;const c=l.name;if(t.icons[c])o.loaded.push({provider:s,prefix:r,name:c});else if(t.missing.has(c))o.missing.push({provider:s,prefix:r,name:c});else return n=!0,!0;return!1}),o.pending.length!==a&&(n||Jg([t],i.id),i.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),i.abort))})}))}let cS=0;function uS(t,e,n){const s=cS++,r=Jg.bind(null,n,s);if(!e.pending.length)return r;const i={id:s,icons:e,callback:t,abort:r};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(i)}),r}function dS(t,e=!0,n=!1){const s=[];return t.forEach(r=>{const i=typeof r=="string"?ta(r,e,n):r;i&&s.push(i)}),s}var fS={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function hS(t,e,n,s){const r=t.resources.length,i=t.random?Math.floor(Math.random()*r):t.index;let o;if(t.random){let U=t.resources.slice(0);for(o=[];U.length>1;){const Q=Math.floor(Math.random()*U.length);o.push(U[Q]),U=U.slice(0,Q).concat(U.slice(Q+1))}o=o.concat(U)}else o=t.resources.slice(i).concat(t.resources.slice(0,i));const a=Date.now();let l="pending",c=0,u,d=null,f=[],p=[];typeof s=="function"&&p.push(s);function m(){d&&(clearTimeout(d),d=null)}function g(){l==="pending"&&(l="aborted"),m(),f.forEach(U=>{U.status==="pending"&&(U.status="aborted")}),f=[]}function v(U,Q){Q&&(p=[]),typeof U=="function"&&p.push(U)}function I(){return{startTime:a,payload:e,status:l,queriesSent:c,queriesPending:f.length,subscribe:v,abort:g}}function T(){l="failed",p.forEach(U=>{U(void 0,u)})}function O(){f.forEach(U=>{U.status==="pending"&&(U.status="aborted")}),f=[]}function R(U,Q,P){const W=Q!=="success";switch(f=f.filter(V=>V!==U),l){case"pending":break;case"failed":if(W||!t.dataAfterTimeout)return;break;default:return}if(Q==="abort"){u=P,T();return}if(W){u=P,f.length||(o.length?G():T());return}if(m(),O(),!t.random){const V=t.resources.indexOf(U.resource);V!==-1&&V!==t.index&&(t.index=V)}l="completed",p.forEach(V=>{V(P)})}function G(){if(l!=="pending")return;m();const U=o.shift();if(U===void 0){if(f.length){d=setTimeout(()=>{m(),l==="pending"&&(O(),T())},t.timeout);return}T();return}const Q={status:"pending",resource:U,callback:(P,W)=>{R(Q,P,W)}};f.push(Q),c++,d=setTimeout(G,t.rotate),n(U,e,Q.callback)}return setTimeout(G),I}function Xg(t){const e={...fS,...t};let n=[];function s(){n=n.filter(a=>a().status==="pending")}function r(a,l,c){const u=hS(e,a,l,(d,f)=>{s(),c&&c(d,f)});return n.push(u),u}function i(a){return n.find(l=>a(l))||null}return{query:r,find:i,setIndex:a=>{e.index=a},getIndex:()=>e.index,cleanup:s}}function Tf(){}const $a=Object.create(null);function pS(t){if(!$a[t]){const e=qc(t);if(!e)return;const n=Xg(e),s={config:e,redundancy:n};$a[t]=s}return $a[t]}function gS(t,e,n){let s,r;if(typeof t=="string"){const i=Al(t);if(!i)return n(void 0,424),Tf;r=i.send;const o=pS(t);o&&(s=o.redundancy)}else{const i=Kc(t);if(i){s=Xg(i);const o=t.resources?t.resources[0]:"",a=Al(o);a&&(r=a.send)}}return!s||!r?(n(void 0,424),Tf):s.query(e,r,n)().abort}const Sf="iconify2",Zr="iconify",Zg=Zr+"-count",kf=Zr+"-version",em=36e5,mS=168;function Pl(t,e){try{return t.getItem(e)}catch{}}function Gc(t,e,n){try{return t.setItem(e,n),!0}catch{}}function Rf(t,e){try{t.removeItem(e)}catch{}}function xl(t,e){return Gc(t,Zg,e.toString())}function Nl(t){return parseInt(Pl(t,Zg))||0}const sa={local:!0,session:!0},tm={local:new Set,session:new Set};let Yc=!1;function _S(t){Yc=t}let xi=typeof window>"u"?{}:window;function nm(t){const e=t+"Storage";try{if(xi&&xi[e]&&typeof xi[e].length=="number")return xi[e]}catch{}sa[t]=!1}function sm(t,e){const n=nm(t);if(!n)return;const s=Pl(n,kf);if(s!==Sf){if(s){const a=Nl(n);for(let l=0;l<a;l++)Rf(n,Zr+l.toString())}Gc(n,kf,Sf),xl(n,0);return}const r=Math.floor(Date.now()/em)-mS,i=a=>{const l=Zr+a.toString(),c=Pl(n,l);if(typeof c=="string"){try{const u=JSON.parse(c);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>r&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&e(u,a))return!0}catch{}Rf(n,l)}};let o=Nl(n);for(let a=o-1;a>=0;a--)i(a)||(a===o-1?(o--,xl(n,o)):tm[t].add(a))}function rm(){if(!Yc){_S(!0);for(const t in sa)sm(t,e=>{const n=e.data,s=e.provider,r=n.prefix,i=rs(s,r);if(!Vc(i,n).length)return!1;const o=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,o):o,!0})}}function vS(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const s in sa)sm(s,r=>{const i=r.data;return r.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===e});return!0}function yS(t,e){Yc||rm();function n(s){let r;if(!sa[s]||!(r=nm(s)))return;const i=tm[s];let o;if(i.size)i.delete(o=Array.from(i).shift());else if(o=Nl(r),!xl(r,o+1))return;const a={cached:Math.floor(Date.now()/em),provider:t.provider,data:e};return Gc(r,Zr+o.toString(),JSON.stringify(a))}e.lastModified&&!vS(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function Af(){}function bS(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,lS(t)}))}function wS(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:s}=t,r=t.iconsToLoad;delete t.iconsToLoad;let i;if(!r||!(i=Al(n)))return;i.prepare(n,s,r).forEach(a=>{gS(n,a,l=>{if(typeof l!="object")a.icons.forEach(c=>{t.missing.add(c)});else try{const c=Vc(t,l);if(!c.length)return;const u=t.pendingIcons;u&&c.forEach(d=>{u.delete(d)}),yS(t,l)}catch(c){console.error(c)}bS(t)})})}))}const ES=(t,e)=>{const n=dS(t,!0,Gg()),s=aS(n);if(!s.pending.length){let l=!0;return e&&setTimeout(()=>{l&&e(s.loaded,s.missing,s.pending,Af)}),()=>{l=!1}}const r=Object.create(null),i=[];let o,a;return s.pending.forEach(l=>{const{provider:c,prefix:u}=l;if(u===a&&c===o)return;o=c,a=u,i.push(rs(c,u));const d=r[c]||(r[c]=Object.create(null));d[u]||(d[u]=[])}),s.pending.forEach(l=>{const{provider:c,prefix:u,name:d}=l,f=rs(c,u),p=f.pendingIcons||(f.pendingIcons=new Set);p.has(d)||(p.add(d),r[c][u].push(d))}),i.forEach(l=>{const{provider:c,prefix:u}=l;r[c][u].length&&wS(l,r[c][u])}),e?uS(e,s,i):Af};function IS(t,e){const n={...t};for(const s in e){const r=e[s],i=typeof r;s in Yg?(r===null||r&&(i==="string"||i==="number"))&&(n[s]=r):i===typeof n[s]&&(n[s]=s==="rotate"?r%4:r)}return n}const CS=/[\s,]+/;function TS(t,e){e.split(CS).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function SS(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function s(r){for(;r<0;)r+=4;return r%4}if(n===""){const r=parseInt(t);return isNaN(r)?0:s(r)}else if(n!==t){let r=0;switch(n){case"%":r=25;break;case"deg":r=90}if(r){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/r,i%1===0?s(i):0)}}return e}function kS(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in e)n+=" "+s+'="'+e[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function RS(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function AS(t){return"data:image/svg+xml,"+RS(t)}function PS(t){return'url("'+AS(t)+'")'}const Pf={...Qg,inline:!1},xS={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},NS={display:"inline-block"},Ol={backgroundColor:"currentColor"},im={backgroundColor:"transparent"},xf={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Nf={webkitMask:Ol,mask:Ol,background:im};for(const t in Nf){const e=Nf[t];for(const n in xf)e[t+n]=xf[n]}const zi={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";zi[t+"-flip"]=e,zi[t.slice(0,1)+"-flip"]=e,zi[t+"Flip"]=e});function Of(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const Mf=(t,e)=>{const n=IS(Pf,e),s={...xS},r=e.mode||"svg",i={},o=e.style,a=typeof o=="object"&&!(o instanceof Array)?o:{};for(let g in e){const v=e[g];if(v!==void 0)switch(g){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[g]=v===!0||v==="true"||v===1;break;case"flip":typeof v=="string"&&TS(n,v);break;case"color":i.color=v;break;case"rotate":typeof v=="string"?n[g]=SS(v):typeof v=="number"&&(n[g]=v);break;case"ariaHidden":case"aria-hidden":v!==!0&&v!=="true"&&delete s["aria-hidden"];break;default:{const I=zi[g];I?(v===!0||v==="true"||v===1)&&(n[I]=!0):Pf[g]===void 0&&(s[g]=v)}}}const l=q0(t,n),c=l.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),r==="svg"){s.style={...i,...a},Object.assign(s,c);let g=0,v=e.id;return typeof v=="string"&&(v=v.replace(/-/g,"_")),s.innerHTML=J0(l.body,v?()=>v+"ID"+g++:"iconifyVue"),In("svg",s)}const{body:u,width:d,height:f}=t,p=r==="mask"||(r==="bg"?!1:u.indexOf("currentColor")!==-1),m=kS(u,{...c,width:d+"",height:f+""});return s.style={...i,"--svg":PS(m),width:Of(c.width),height:Of(c.height),...NS,...p?Ol:im,...a},In("span",s)};Gg(!0);X0("",oS);if(typeof document<"u"&&typeof window<"u"){rm();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(s=>{try{(typeof s!="object"||s===null||s instanceof Array||typeof s.icons!="object"||typeof s.prefix!="string"||!W0(s))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const s="IconifyProviders["+n+"] is invalid.";try{const r=e[n];if(typeof r!="object"||!r||r.resources===void 0)continue;Z0(n,r)||console.error(s)}catch{console.error(s)}}}}const OS={...na,body:""},Qc=Zt({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let n;if(typeof t!="string"||(n=ta(t,!1,!0))===null)return this.abortLoading(),null;const s=j0(n);if(!s)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",s!==null&&(this._loadingIcon={name:t,abort:ES([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t));const r=["iconify"];return n.prefix!==""&&r.push("iconify--"+n.prefix),n.provider!==""&&r.push("iconify--"+n.provider),{data:s,classes:r}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted?this.getIcon(t.icon,t.onLoad):null;if(!e)return Mf(OS,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),Mf({...na,...e.data},n)}});function ra(t,e,...n){if(t in e){let r=e[t];return typeof r=="function"?r(...n):r}let s=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(r=>`"${r}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,ra),s}var Ml=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(Ml||{}),MS=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(MS||{});function lr({visible:t=!0,features:e=0,ourProps:n,theirProps:s,...r}){var i;let o=am(s,n),a=Object.assign(r,{props:o});if(t||e&2&&o.static)return Ba(a);if(e&1){let l=(i=o.unmount)==null||i?0:1;return ra(l,{0(){return null},1(){return Ba({...r,props:{...o,hidden:!0,style:{display:"none"}}})}})}return Ba(a)}function Ba({props:t,attrs:e,slots:n,slot:s,name:r}){var i,o;let{as:a,...l}=lm(t,["unmount","static"]),c=(i=n.default)==null?void 0:i.call(n,s),u={};if(s){let d=!1,f=[];for(let[p,m]of Object.entries(s))typeof m=="boolean"&&(d=!0),m===!0&&f.push(p);d&&(u["data-headlessui-state"]=f.join(" "))}if(a==="template"){if(c=om(c??[]),Object.keys(l).length>0||Object.keys(e).length>0){let[d,...f]=c??[];if(!LS(d)||f.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${r} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(e)).map(g=>g.trim()).filter((g,v,I)=>I.indexOf(g)===v).sort((g,v)=>g.localeCompare(v)).map(g=>`  - ${g}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(g=>`  - ${g}`).join(`
`)].join(`
`));let p=am((o=d.props)!=null?o:{},l),m=Yt(d,p);for(let g in p)g.startsWith("on")&&(m.props||(m.props={}),m.props[g]=p[g]);return m}return Array.isArray(c)&&c.length===1?c[0]:c}return In(a,Object.assign({},l,u),{default:()=>c})}function om(t){return t.flatMap(e=>e.type===Le?om(e.children):[e])}function am(...t){if(t.length===0)return{};if(t.length===1)return t[0];let e={},n={};for(let s of t)for(let r in s)r.startsWith("on")&&typeof s[r]=="function"?(n[r]!=null||(n[r]=[]),n[r].push(s[r])):e[r]=s[r];if(e.disabled||e["aria-disabled"])return Object.assign(e,Object.fromEntries(Object.keys(n).map(s=>[s,void 0])));for(let s in n)Object.assign(e,{[s](r,...i){let o=n[s];for(let a of o){if(r instanceof Event&&r.defaultPrevented)return;a(r,...i)}}});return e}function DS(t){let e=Object.assign({},t);for(let n in e)e[n]===void 0&&delete e[n];return e}function lm(t,e=[]){let n=Object.assign({},t);for(let s of e)s in n&&delete n[s];return n}function LS(t){return t==null?!1:typeof t.type=="string"||typeof t.type=="object"||typeof t.type=="function"}let FS=0;function US(){return++FS}function ia(){return US()}var Pe=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(Pe||{});function $S(t){throw new Error("Unexpected object: "+t)}var lt=(t=>(t[t.First=0]="First",t[t.Previous=1]="Previous",t[t.Next=2]="Next",t[t.Last=3]="Last",t[t.Specific=4]="Specific",t[t.Nothing=5]="Nothing",t))(lt||{});function BS(t,e){let n=e.resolveItems();if(n.length<=0)return null;let s=e.resolveActiveIndex(),r=s??-1,i=(()=>{switch(t.focus){case 0:return n.findIndex(o=>!e.resolveDisabled(o));case 1:{let o=n.slice().reverse().findIndex((a,l,c)=>r!==-1&&c.length-l-1>=r?!1:!e.resolveDisabled(a));return o===-1?o:n.length-1-o}case 2:return n.findIndex((o,a)=>a<=r?!1:!e.resolveDisabled(o));case 3:{let o=n.slice().reverse().findIndex(a=>!e.resolveDisabled(a));return o===-1?o:n.length-1-o}case 4:return n.findIndex(o=>e.resolveId(o)===t.id);case 5:return null;default:$S(t)}})();return i===-1?s:i}function Te(t){var e;return t==null||t.value==null?null:(e=t.value.$el)!=null?e:t.value}let cm=Symbol("Context");var ei=(t=>(t[t.Open=1]="Open",t[t.Closed=2]="Closed",t[t.Closing=4]="Closing",t[t.Opening=8]="Opening",t))(ei||{});function jS(){return et(cm,null)}function HS(t){xs(cm,t)}function Df(t,e){if(t)return t;let n=e??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function um(t,e){let n=ee(Df(t.value.type,t.value.as));return us(()=>{n.value=Df(t.value.type,t.value.as)}),tr(()=>{var s;n.value||Te(e)&&Te(e)instanceof HTMLButtonElement&&!((s=Te(e))!=null&&s.hasAttribute("type"))&&(n.value="button")}),n}var WS=Object.defineProperty,VS=(t,e,n)=>e in t?WS(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Lf=(t,e,n)=>(VS(t,typeof e!="symbol"?e+"":e,n),n);class KS{constructor(){Lf(this,"current",this.detect()),Lf(this,"currentId",0)}set(e){this.current!==e&&(this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let Jc=new KS;function Xc(t){if(Jc.isServer)return null;if(t instanceof Node)return t.ownerDocument;if(t!=null&&t.hasOwnProperty("value")){let e=Te(t);if(e)return e.ownerDocument}return document}function zS({container:t,accept:e,walk:n,enabled:s}){tr(()=>{let r=t.value;if(!r||s!==void 0&&!s.value)return;let i=Xc(t);if(!i)return;let o=Object.assign(l=>e(l),{acceptNode:e}),a=i.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,o,!1);for(;a.nextNode();)n(a.currentNode)})}let Dl=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var Ll=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t))(Ll||{}),qS=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(qS||{}),GS=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(GS||{});function dm(t=document.body){return t==null?[]:Array.from(t.querySelectorAll(Dl)).sort((e,n)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Zc=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(Zc||{});function eu(t,e=0){var n;return t===((n=Xc(t))==null?void 0:n.body)?!1:ra(e,{0(){return t.matches(Dl)},1(){let s=t;for(;s!==null;){if(s.matches(Dl))return!0;s=s.parentElement}return!1}})}function fm(t){let e=Xc(t);Et(()=>{e&&!eu(e.activeElement,0)&&QS(t)})}var YS=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(YS||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",t=>{t.metaKey||t.altKey||t.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",t=>{t.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:t.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function QS(t){t==null||t.focus({preventScroll:!0})}let JS=["textarea","input"].join(",");function XS(t){var e,n;return(n=(e=t==null?void 0:t.matches)==null?void 0:e.call(t,JS))!=null?n:!1}function hm(t,e=n=>n){return t.slice().sort((n,s)=>{let r=e(n),i=e(s);if(r===null||i===null)return 0;let o=r.compareDocumentPosition(i);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function ZS(t,e){return ek(dm(),e,{relativeTo:t})}function ek(t,e,{sorted:n=!0,relativeTo:s=null,skipElements:r=[]}={}){var i;let o=(i=Array.isArray(t)?t.length>0?t[0].ownerDocument:document:t==null?void 0:t.ownerDocument)!=null?i:document,a=Array.isArray(t)?n?hm(t):t:dm(t);r.length>0&&a.length>1&&(a=a.filter(m=>!r.includes(m))),s=s??o.activeElement;let l=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,a.indexOf(s))-1;if(e&4)return Math.max(0,a.indexOf(s))+1;if(e&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=e&32?{preventScroll:!0}:{},d=0,f=a.length,p;do{if(d>=f||d+f<=0)return 0;let m=c+d;if(e&16)m=(m+f)%f;else{if(m<0)return 3;if(m>=f)return 1}p=a[m],p==null||p.focus(u),d+=l}while(p!==o.activeElement);return e&6&&XS(p)&&p.select(),2}function Ni(t,e,n){Jc.isServer||tr(s=>{document.addEventListener(t,e,n),s(()=>document.removeEventListener(t,e,n))})}function tk(t,e,n){Jc.isServer||tr(s=>{window.addEventListener(t,e,n),s(()=>window.removeEventListener(t,e,n))})}function nk(t,e,n=ce(()=>!0)){function s(i,o){if(!n.value||i.defaultPrevented)return;let a=o(i);if(a===null||!a.getRootNode().contains(a))return;let l=function c(u){return typeof u=="function"?c(u()):Array.isArray(u)||u instanceof Set?u:[u]}(t);for(let c of l){if(c===null)continue;let u=c instanceof HTMLElement?c:Te(c);if(u!=null&&u.contains(a)||i.composed&&i.composedPath().includes(u))return}return!eu(a,Zc.Loose)&&a.tabIndex!==-1&&i.preventDefault(),e(i,a)}let r=ee(null);Ni("pointerdown",i=>{var o,a;n.value&&(r.value=((a=(o=i.composedPath)==null?void 0:o.call(i))==null?void 0:a[0])||i.target)},!0),Ni("mousedown",i=>{var o,a;n.value&&(r.value=((a=(o=i.composedPath)==null?void 0:o.call(i))==null?void 0:a[0])||i.target)},!0),Ni("click",i=>{r.value&&(s(i,()=>r.value),r.value=null)},!0),Ni("touchend",i=>s(i,()=>i.target instanceof HTMLElement?i.target:null),!0),tk("blur",i=>s(i,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var pm=(t=>(t[t.None=1]="None",t[t.Focusable=2]="Focusable",t[t.Hidden=4]="Hidden",t))(pm||{});let sk=Zt({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(t,{slots:e,attrs:n}){return()=>{let{features:s,...r}=t,i={"aria-hidden":(s&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(s&4)===4&&(s&2)!==2&&{display:"none"}}};return lr({ourProps:i,theirProps:r,slot:{},attrs:n,slots:e,name:"Hidden"})}}});function rk(t){var e,n;let s=(e=t==null?void 0:t.form)!=null?e:t.closest("form");if(s){for(let r of s.elements)if(r!==t&&(r.tagName==="INPUT"&&r.type==="submit"||r.tagName==="BUTTON"&&r.type==="submit"||r.nodeName==="INPUT"&&r.type==="image")){r.click();return}(n=s.requestSubmit)==null||n.call(s)}}function ik(t,e,n){let s=ee(n==null?void 0:n.value),r=ce(()=>t.value!==void 0);return[ce(()=>r.value?t.value:s.value),function(i){return r.value||(s.value=i),e==null?void 0:e(i)}]}function Ff(t){return[t.screenX,t.screenY]}function ok(){let t=ee([-1,-1]);return{wasMoved(e){let n=Ff(e);return t.value[0]===n[0]&&t.value[1]===n[1]?!1:(t.value=n,!0)},update(e){t.value=Ff(e)}}}let Uf=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function $f(t){var e,n;let s=(e=t.innerText)!=null?e:"",r=t.cloneNode(!0);if(!(r instanceof HTMLElement))return s;let i=!1;for(let a of r.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))a.remove(),i=!0;let o=i?(n=r.innerText)!=null?n:"":s;return Uf.test(o)&&(o=o.replace(Uf,"")),o}function ak(t){let e=t.getAttribute("aria-label");if(typeof e=="string")return e.trim();let n=t.getAttribute("aria-labelledby");if(n){let s=n.split(" ").map(r=>{let i=document.getElementById(r);if(i){let o=i.getAttribute("aria-label");return typeof o=="string"?o.trim():$f(i).trim()}return null}).filter(Boolean);if(s.length>0)return s.join(", ")}return $f(t).trim()}function lk(t){let e=ee(""),n=ee("");return()=>{let s=Te(t);if(!s)return"";let r=s.innerText;if(e.value===r)return n.value;let i=ak(s).trim().toLowerCase();return e.value=r,n.value=i,i}}var ck=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(ck||{}),uk=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(uk||{});function dk(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let gm=Symbol("MenuContext");function oa(t){let e=et(gm,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,oa),n}return e}let fk=Zt({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:e,attrs:n}){let s=ee(1),r=ee(null),i=ee(null),o=ee([]),a=ee(""),l=ee(null),c=ee(1);function u(f=p=>p){let p=l.value!==null?o.value[l.value]:null,m=hm(f(o.value.slice()),v=>Te(v.dataRef.domRef)),g=p?m.indexOf(p):null;return g===-1&&(g=null),{items:m,activeItemIndex:g}}let d={menuState:s,buttonRef:r,itemsRef:i,items:o,searchQuery:a,activeItemIndex:l,activationTrigger:c,closeMenu:()=>{s.value=1,l.value=null},openMenu:()=>s.value=0,goToItem(f,p,m){let g=u(),v=BS(f===lt.Specific?{focus:lt.Specific,id:p}:{focus:f},{resolveItems:()=>g.items,resolveActiveIndex:()=>g.activeItemIndex,resolveId:I=>I.id,resolveDisabled:I=>I.dataRef.disabled});a.value="",l.value=v,c.value=m??1,o.value=g.items},search(f){let p=a.value!==""?0:1;a.value+=f.toLowerCase();let m=(l.value!==null?o.value.slice(l.value+p).concat(o.value.slice(0,l.value+p)):o.value).find(v=>v.dataRef.textValue.startsWith(a.value)&&!v.dataRef.disabled),g=m?o.value.indexOf(m):-1;g===-1||g===l.value||(l.value=g,c.value=1)},clearSearch(){a.value=""},registerItem(f,p){let m=u(g=>[...g,{id:f,dataRef:p}]);o.value=m.items,l.value=m.activeItemIndex,c.value=1},unregisterItem(f){let p=u(m=>{let g=m.findIndex(v=>v.id===f);return g!==-1&&m.splice(g,1),m});o.value=p.items,l.value=p.activeItemIndex,c.value=1}};return nk([r,i],(f,p)=>{var m;d.closeMenu(),eu(p,Zc.Loose)||(f.preventDefault(),(m=Te(r))==null||m.focus())},ce(()=>s.value===0)),xs(gm,d),HS(ce(()=>ra(s.value,{0:ei.Open,1:ei.Closed}))),()=>{let f={open:s.value===0,close:d.closeMenu};return lr({ourProps:{},theirProps:t,slot:f,slots:e,attrs:n,name:"Menu"})}}}),hk=Zt({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${ia()}`}},setup(t,{attrs:e,slots:n,expose:s}){let r=oa("MenuButton");s({el:r.buttonRef,$el:r.buttonRef});function i(c){switch(c.key){case Pe.Space:case Pe.Enter:case Pe.ArrowDown:c.preventDefault(),c.stopPropagation(),r.openMenu(),Et(()=>{var u;(u=Te(r.itemsRef))==null||u.focus({preventScroll:!0}),r.goToItem(lt.First)});break;case Pe.ArrowUp:c.preventDefault(),c.stopPropagation(),r.openMenu(),Et(()=>{var u;(u=Te(r.itemsRef))==null||u.focus({preventScroll:!0}),r.goToItem(lt.Last)});break}}function o(c){switch(c.key){case Pe.Space:c.preventDefault();break}}function a(c){t.disabled||(r.menuState.value===0?(r.closeMenu(),Et(()=>{var u;return(u=Te(r.buttonRef))==null?void 0:u.focus({preventScroll:!0})})):(c.preventDefault(),r.openMenu(),dk(()=>{var u;return(u=Te(r.itemsRef))==null?void 0:u.focus({preventScroll:!0})})))}let l=um(ce(()=>({as:t.as,type:e.type})),r.buttonRef);return()=>{var c;let u={open:r.menuState.value===0},{id:d,...f}=t,p={ref:r.buttonRef,id:d,type:l.value,"aria-haspopup":"menu","aria-controls":(c=Te(r.itemsRef))==null?void 0:c.id,"aria-expanded":r.menuState.value===0,onKeydown:i,onKeyup:o,onClick:a};return lr({ourProps:p,theirProps:f,slot:u,attrs:e,slots:n,name:"MenuButton"})}}}),pk=Zt({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${ia()}`}},setup(t,{attrs:e,slots:n,expose:s}){let r=oa("MenuItems"),i=ee(null);s({el:r.itemsRef,$el:r.itemsRef}),zS({container:ce(()=>Te(r.itemsRef)),enabled:ce(()=>r.menuState.value===0),accept(u){return u.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:u.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(u){u.setAttribute("role","none")}});function o(u){var d;switch(i.value&&clearTimeout(i.value),u.key){case Pe.Space:if(r.searchQuery.value!=="")return u.preventDefault(),u.stopPropagation(),r.search(u.key);case Pe.Enter:if(u.preventDefault(),u.stopPropagation(),r.activeItemIndex.value!==null){let f=r.items.value[r.activeItemIndex.value];(d=Te(f.dataRef.domRef))==null||d.click()}r.closeMenu(),fm(Te(r.buttonRef));break;case Pe.ArrowDown:return u.preventDefault(),u.stopPropagation(),r.goToItem(lt.Next);case Pe.ArrowUp:return u.preventDefault(),u.stopPropagation(),r.goToItem(lt.Previous);case Pe.Home:case Pe.PageUp:return u.preventDefault(),u.stopPropagation(),r.goToItem(lt.First);case Pe.End:case Pe.PageDown:return u.preventDefault(),u.stopPropagation(),r.goToItem(lt.Last);case Pe.Escape:u.preventDefault(),u.stopPropagation(),r.closeMenu(),Et(()=>{var f;return(f=Te(r.buttonRef))==null?void 0:f.focus({preventScroll:!0})});break;case Pe.Tab:u.preventDefault(),u.stopPropagation(),r.closeMenu(),Et(()=>ZS(Te(r.buttonRef),u.shiftKey?Ll.Previous:Ll.Next));break;default:u.key.length===1&&(r.search(u.key),i.value=setTimeout(()=>r.clearSearch(),350));break}}function a(u){switch(u.key){case Pe.Space:u.preventDefault();break}}let l=jS(),c=ce(()=>l!==null?(l.value&ei.Open)===ei.Open:r.menuState.value===0);return()=>{var u,d;let f={open:r.menuState.value===0},{id:p,...m}=t,g={"aria-activedescendant":r.activeItemIndex.value===null||(u=r.items.value[r.activeItemIndex.value])==null?void 0:u.id,"aria-labelledby":(d=Te(r.buttonRef))==null?void 0:d.id,id:p,onKeydown:o,onKeyup:a,role:"menu",tabIndex:0,ref:r.itemsRef};return lr({ourProps:g,theirProps:m,slot:f,attrs:e,slots:n,features:Ml.RenderStrategy|Ml.Static,visible:c.value,name:"MenuItems"})}}}),gk=Zt({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${ia()}`}},setup(t,{slots:e,attrs:n,expose:s}){let r=oa("MenuItem"),i=ee(null);s({el:i,$el:i});let o=ce(()=>r.activeItemIndex.value!==null?r.items.value[r.activeItemIndex.value].id===t.id:!1),a=lk(i),l=ce(()=>({disabled:t.disabled,get textValue(){return a()},domRef:i}));us(()=>r.registerItem(t.id,l)),jo(()=>r.unregisterItem(t.id)),tr(()=>{r.menuState.value===0&&o.value&&r.activationTrigger.value!==0&&Et(()=>{var g,v;return(v=(g=Te(i))==null?void 0:g.scrollIntoView)==null?void 0:v.call(g,{block:"nearest"})})});function c(g){if(t.disabled)return g.preventDefault();r.closeMenu(),fm(Te(r.buttonRef))}function u(){if(t.disabled)return r.goToItem(lt.Nothing);r.goToItem(lt.Specific,t.id)}let d=ok();function f(g){d.update(g)}function p(g){d.wasMoved(g)&&(t.disabled||o.value||r.goToItem(lt.Specific,t.id,0))}function m(g){d.wasMoved(g)&&(t.disabled||o.value&&r.goToItem(lt.Nothing))}return()=>{let{disabled:g}=t,v={active:o.value,disabled:g,close:r.closeMenu},{id:I,...T}=t;return lr({ourProps:{id:I,ref:i,role:"menuitem",tabIndex:g===!0?void 0:-1,"aria-disabled":g===!0?!0:void 0,disabled:void 0,onClick:c,onFocus:u,onPointerenter:f,onMouseenter:f,onPointermove:p,onMousemove:p,onPointerleave:m,onMouseleave:m},theirProps:{...n,...T},slot:v,attrs:n,slots:e,name:"MenuItem"})}}}),mk=Symbol("GroupContext"),mm=Zt({name:"Switch",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:()=>`headlessui-switch-${ia()}`}},inheritAttrs:!1,setup(t,{emit:e,attrs:n,slots:s,expose:r}){let i=et(mk,null),[o,a]=ik(ce(()=>t.modelValue),v=>e("update:modelValue",v),ce(()=>t.defaultChecked));function l(){a(!o.value)}let c=ee(null),u=i===null?c:i.switchRef,d=um(ce(()=>({as:t.as,type:n.type})),u);r({el:u,$el:u});function f(v){v.preventDefault(),l()}function p(v){v.key===Pe.Space?(v.preventDefault(),l()):v.key===Pe.Enter&&rk(v.currentTarget)}function m(v){v.preventDefault()}let g=ce(()=>{var v,I;return(I=(v=Te(u))==null?void 0:v.closest)==null?void 0:I.call(v,"form")});return us(()=>{xt([g],()=>{if(!g.value||t.defaultChecked===void 0)return;function v(){a(t.defaultChecked)}return g.value.addEventListener("reset",v),()=>{var I;(I=g.value)==null||I.removeEventListener("reset",v)}},{immediate:!0})}),()=>{let{id:v,name:I,value:T,form:O,...R}=t,G={checked:o.value},U={id:v,ref:u,role:"switch",type:d.value,tabIndex:0,"aria-checked":o.value,"aria-labelledby":i==null?void 0:i.labelledby.value,"aria-describedby":i==null?void 0:i.describedby.value,onClick:f,onKeyup:p,onKeypress:m};return In(Le,[I!=null&&o.value!=null?In(sk,DS({features:pm.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:o.value,form:O,name:I,value:T})):null,lr({ourProps:U,theirProps:{...n,...lm(R,["modelValue","defaultChecked"])},slot:G,attrs:n,slots:s,name:"Switch"})])}}});function _m(t){return Ph()?(cv(t),!0):!1}function qs(t){return typeof t=="function"?t():As(t)}const _k=typeof window<"u"&&typeof document<"u",vk=Object.prototype.toString,yk=t=>vk.call(t)==="[object Object]",vm=()=>{};function bk(t,e){function n(...s){return new Promise((r,i)=>{Promise.resolve(t(()=>e.apply(this,s),{fn:e,thisArg:this,args:s})).then(r).catch(i)})}return n}const ym=t=>t();function wk(t=ym){const e=ee(!0);function n(){e.value=!1}function s(){e.value=!0}const r=(...i)=>{e.value&&t(...i)};return{isActive:Do(e),pause:n,resume:s,eventFilter:r}}function Ek(...t){if(t.length!==1)return Vv(...t);const e=t[0];return typeof e=="function"?Do(jv(()=>({get:e,set:vm}))):ee(e)}function Ik(t,e,n={}){const{eventFilter:s=ym,...r}=n;return xt(t,bk(s,e),r)}function Ck(t,e,n={}){const{eventFilter:s,...r}=n,{eventFilter:i,pause:o,resume:a,isActive:l}=wk(s);return{stop:Ik(t,e,{...r,eventFilter:i}),pause:o,resume:a,isActive:l}}function Tk(t,e=!0){vc()?us(t):e?t():Et(t)}function bm(t=!1,e={}){const{truthyValue:n=!0,falsyValue:s=!1}=e,r=Oe(t),i=ee(t);function o(a){if(arguments.length)return i.value=a,i.value;{const l=qs(n);return i.value=i.value===l?qs(s):l,i.value}}return r?o:[i,o]}function wm(t){var e;const n=qs(t);return(e=n==null?void 0:n.$el)!=null?e:n}const ti=_k?window:void 0;function Bf(...t){let e,n,s,r;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,s,r]=t,e=ti):[e,n,s,r]=t,!e)return vm;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const i=[],o=()=>{i.forEach(u=>u()),i.length=0},a=(u,d,f,p)=>(u.addEventListener(d,f,p),()=>u.removeEventListener(d,f,p)),l=xt(()=>[wm(e),qs(r)],([u,d])=>{if(o(),!u)return;const f=yk(d)?{...d}:d;i.push(...n.flatMap(p=>s.map(m=>a(u,p,m,f))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return _m(c),c}function Sk(){const t=ee(!1);return vc()&&us(()=>{t.value=!0}),t}function kk(t){const e=Sk();return ce(()=>(e.value,!!t()))}function Rk(t,e={}){const{window:n=ti}=e,s=kk(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const i=ee(!1),o=c=>{i.value=c.matches},a=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",o):r.removeListener(o))},l=tr(()=>{s.value&&(a(),r=n.matchMedia(qs(t)),"addEventListener"in r?r.addEventListener("change",o):r.addListener(o),i.value=r.matches)});return _m(()=>{l(),a(),r=void 0}),i}const Oi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Mi="__vueuse_ssr_handlers__",Ak=Pk();function Pk(){return Mi in Oi||(Oi[Mi]=Oi[Mi]||{}),Oi[Mi]}function Em(t,e){return Ak[t]||e}function xk(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const Nk={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},jf="vueuse-storage";function Ok(t,e,n,s={}){var r;const{flush:i="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:d=ti,eventFilter:f,onError:p=P=>{console.error(P)}}=s,m=(u?Wh:ee)(e);if(!n)try{n=Em("getDefaultStorage",()=>{var P;return(P=ti)==null?void 0:P.localStorage})()}catch(P){p(P)}if(!n)return m;const g=qs(e),v=xk(g),I=(r=s.serializer)!=null?r:Nk[v],{pause:T,resume:O}=Ck(m,()=>R(m.value),{flush:i,deep:o,eventFilter:f});return d&&a&&(Bf(d,"storage",Q),Bf(d,jf,U)),Q(),m;function R(P){try{if(P==null)n.removeItem(t);else{const W=I.write(P),V=n.getItem(t);V!==W&&(n.setItem(t,W),d&&d.dispatchEvent(new CustomEvent(jf,{detail:{key:t,oldValue:V,newValue:W,storageArea:n}})))}}catch(W){p(W)}}function G(P){const W=P?P.newValue:n.getItem(t);if(W==null)return l&&g!==null&&n.setItem(t,I.write(g)),g;if(!P&&c){const V=I.read(W);return typeof c=="function"?c(V,g):v==="object"&&!Array.isArray(V)?{...g,...V}:V}else return typeof W!="string"?W:I.read(W)}function U(P){Q(P.detail)}function Q(P){if(!(P&&P.storageArea!==n)){if(P&&P.key==null){m.value=g;return}if(!(P&&P.key!==t)){T();try{(P==null?void 0:P.newValue)!==I.write(m.value)&&(m.value=G(P))}catch(W){p(W)}finally{P?Et(O):O()}}}}}function Mk(t){return Rk("(prefers-color-scheme: dark)",t)}function Dk(t={}){const{selector:e="html",attribute:n="class",initialValue:s="auto",window:r=ti,storage:i,storageKey:o="vueuse-color-scheme",listenToStorageChanges:a=!0,storageRef:l,emitAuto:c,disableTransition:u=!0}=t,d={auto:"",light:"light",dark:"dark",...t.modes||{}},f=Mk({window:r}),p=ce(()=>f.value?"dark":"light"),m=l||(o==null?Ek(s):Ok(o,s,i,{window:r,listenToStorageChanges:a})),g=ce(()=>m.value==="auto"?p.value:m.value),v=Em("updateHTMLAttrs",(R,G,U)=>{const Q=typeof R=="string"?r==null?void 0:r.document.querySelector(R):wm(R);if(!Q)return;let P;if(u){P=r.document.createElement("style");const W="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";P.appendChild(document.createTextNode(W)),r.document.head.appendChild(P)}if(G==="class"){const W=U.split(/\s/g);Object.values(d).flatMap(V=>(V||"").split(/\s/g)).filter(Boolean).forEach(V=>{W.includes(V)?Q.classList.add(V):Q.classList.remove(V)})}else Q.setAttribute(G,U);u&&(r.getComputedStyle(P).opacity,document.head.removeChild(P))});function I(R){var G;v(e,n,(G=d[R])!=null?G:R)}function T(R){t.onChanged?t.onChanged(R,I):I(R)}xt(g,T,{flush:"post",immediate:!0}),Tk(()=>T(g.value));const O=ce({get(){return c?m.value:g.value},set(R){m.value=R}});try{return Object.assign(O,{store:m,system:p,state:g})}catch{return O}}function Im(t={}){const{valueDark:e="dark",valueLight:n=""}=t,s=Dk({...t,onChanged:(i,o)=>{var a;t.onChanged?(a=t.onChanged)==null||a.call(t,i==="dark",o,i):o(i)},modes:{dark:e,light:n}});return ce({get(){return s.value==="dark"},set(i){const o=i?"dark":"light";s.system.value===o?s.value="auto":s.value=o}})}const Hf="@firebase/database",Wf="1.0.12";/**
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
 */let Cm="";function Lk(t){Cm=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),xe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:qr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Lt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Fk(e)}}catch{}return new Uk},Wn=Tm("localStorage"),Fl=Tm("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=new Pc("@firebase/database"),$k=function(){let t=1;return function(){return t++}}(),Sm=function(t){const e=rI(t),n=new eI;n.update(e);const s=n.digest();return kc.encodeByteArray(s)},mi=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=mi.apply(null,s):typeof s=="object"?e+=xe(s):e+=s,e+=" "}return e};let Yn=null,Vf=!0;const Bk=function(t,e){S(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ls.logLevel=fe.VERBOSE,Yn=Ls.log.bind(Ls),e&&Fl.set("logging_enabled",!0)):typeof t=="function"?Yn=t:(Yn=null,Fl.remove("logging_enabled"))},He=function(...t){if(Vf===!0&&(Vf=!1,Yn===null&&Fl.get("logging_enabled")===!0&&Bk(!0)),Yn){const e=mi.apply(null,t);Yn(e)}},_i=function(t){return function(...e){He(t,...e)}},Ul=function(...t){const e="FIREBASE INTERNAL ERROR: "+mi(...t);Ls.error(e)},Xt=function(...t){const e=`FIREBASE FATAL ERROR: ${mi(...t)}`;throw Ls.error(e),new Error(e)},nt=function(...t){const e="FIREBASE WARNING: "+mi(...t);Ls.warn(e)},jk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&nt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},tu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Hk=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},is="[MIN_NAME]",Tn="[MAX_NAME]",cr=function(t,e){if(t===e)return 0;if(t===is||e===Tn)return-1;if(e===is||t===Tn)return 1;{const n=Kf(t),s=Kf(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Wk=function(t,e){return t===e?0:t<e?-1:1},yr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+xe(e))},nu=function(t){if(typeof t!="object"||t===null)return xe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=xe(e[s]),n+=":",n+=nu(t[e[s]]);return n+="}",n},km=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let r=0;r<n;r+=e)r+e>n?s.push(t.substring(r,n)):s.push(t.substring(r,r+e));return s};function rt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Rm=function(t){S(!tu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let r,i,o,a,l;t===0?(i=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),i=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(r?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},Vk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Kk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function zk(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const qk=new RegExp("^-?(0*)\\d{1,10}$"),Gk=-2147483648,Yk=2147483647,Kf=function(t){if(qk.test(t)){const e=Number(t);if(e>=Gk&&e<=Yk)return e}return null},ur=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw nt("Exception was thrown by user callback.",n),e},Math.floor(0))}},Qk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Dr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Jk{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,ut(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){nt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(He("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',nt(e)}}class Fs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Fs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su="5",Am="v",Pm="s",xm="r",Nm="f",Om=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Mm="ls",Dm="p",$l="ac",Lm="websocket",Fm="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e,n,s,r,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Wn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Wn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Zk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function $m(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let s;if(e===Lm)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Fm)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Zk(t)&&(n.ns=t.namespace);const r=[];return rt(n,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(){this.counters_={}}incrementCounter(e,n=1){Lt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return LE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja={},Ha={};function ru(t){const e=t.toString();return ja[e]||(ja[e]=new eR),ja[e]}function tR(t,e){const n=t.toString();return Ha[n]||(Ha[n]=e()),Ha[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&ur(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf="start",sR="close",rR="pLPCommand",iR="pRTLPCB",Bm="id",jm="pw",Hm="ser",oR="cb",aR="seg",lR="ts",cR="d",uR="dframe",Wm=1870,Vm=30,dR=Wm-Vm,fR=25e3,hR=3e4;class Ts{constructor(e,n,s,r,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_i(e),this.stats_=ru(n),this.urlFn=l=>(this.appCheckToken&&(l[$l]=this.appCheckToken),$m(n,Fm,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new nR(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(hR)),Hk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new iu((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===zf)this.id=a,this.password=l;else if(o===sR)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[zf]="t",s[Hm]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[oR]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Am]=su,this.transportSessionId&&(s[Pm]=this.transportSessionId),this.lastSessionId&&(s[Mm]=this.lastSessionId),this.applicationId&&(s[Dm]=this.applicationId),this.appCheckToken&&(s[$l]=this.appCheckToken),typeof location<"u"&&location.hostname&&Om.test(location.hostname)&&(s[xm]=Nm);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ts.forceAllow_=!0}static forceDisallow(){Ts.forceDisallow_=!0}static isAvailable(){return Ts.forceAllow_?!0:!Ts.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Vk()&&!Kk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Qp(n),r=km(s,dR);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[uR]="t",s[Bm]=e,s[jm]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=xe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class iu{constructor(e,n,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=$k(),window[rR+this.uniqueCallbackIdentifier]=e,window[iR+this.uniqueCallbackIdentifier]=n,this.myIFrame=iu.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){He("frame writing exception"),a.stack&&He(a.stack),He(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||He("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Bm]=this.myID,e[jm]=this.myPW,e[Hm]=this.currentSerial;let n=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Vm+s.length<=Wm;){const o=this.pendingSegs.shift();s=s+"&"+aR+r+"="+o.seg+"&"+lR+r+"="+o.ts+"&"+cR+r+"="+o.d,r++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(s,Math.floor(fR)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{He("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=16384,gR=45e3;let vo=null;typeof MozWebSocket<"u"?vo=MozWebSocket:typeof WebSocket<"u"&&(vo=WebSocket);class _t{constructor(e,n,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_i(this.connId),this.stats_=ru(n),this.connURL=_t.connectionURL_(n,o,a,r,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,r,i){const o={};return o[Am]=su,typeof location<"u"&&location.hostname&&Om.test(location.hostname)&&(o[xm]=Nm),n&&(o[Pm]=n),s&&(o[Mm]=s),r&&(o[$l]=r),i&&(o[Dm]=i),$m(e,Lm,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Wn.set("previous_websocket_failure",!0);try{let s;ng(),this.mySock=new vo(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){_t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&vo!==null&&!_t.forceDisallow_}static previouslyFailed(){return Wn.isInMemoryStorage||Wn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Wn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=qr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=km(n,pR);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(gR))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}_t.responsesRequiredToBeHealthy=2;_t.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{static get ALL_TRANSPORTS(){return[Ts,_t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=_t&&_t.isAvailable();let s=n&&!_t.previouslyFailed();if(e.webSocketOnly&&(n||nt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[_t];else{const r=this.transports_=[];for(const i of ni.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);ni.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ni.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=6e4,_R=5e3,vR=10*1024,yR=100*1024,Wa="t",qf="d",bR="s",Gf="r",wR="e",Yf="o",Qf="a",Jf="n",Xf="p",ER="h";class IR{constructor(e,n,s,r,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_i("c:"+this.id+":"),this.transportManager_=new ni(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Dr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>yR?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>vR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Wa in e){const n=e[Wa];n===Qf?this.upgradeIfSecondaryHealthy_():n===Gf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Yf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=yr("t",e),s=yr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Xf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Qf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Jf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=yr("t",e),s=yr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=yr(Wa,e);if(qf in e){const s=e[qf];if(n===ER){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===Jf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===bR?this.onConnectionShutdown_(s):n===Gf?this.onReset_(s):n===wR?Ul("Server Error: "+s):n===Yf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ul("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),su!==s&&nt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Dr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(mR))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Dr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(_R))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Xf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Wn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{put(e,n,s,r){}merge(e,n,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const r=this.getInitialEvent(e);r&&n.apply(s,r)}off(e,n,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===n&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo extends zm{static getInstance(){return new yo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ac()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf=32,eh=768;class pe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ae(){return new pe("")}function X(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Sn(t){return t.pieces_.length-t.pieceNum_}function ve(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new pe(t.pieces_,e)}function qm(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function CR(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Gm(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ym(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new pe(e,0)}function Ne(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof pe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&n.push(s[r])}return new pe(n,0)}function Z(t){return t.pieceNum_>=t.pieces_.length}function qe(t,e){const n=X(t),s=X(e);if(n===null)return e;if(n===s)return qe(ve(t),ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ou(t,e){if(Sn(t)!==Sn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function yt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Sn(t)>Sn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class TR{constructor(e,n){this.errorPrefix_=n,this.parts_=Gm(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Jo(this.parts_[s]);Qm(this)}}function SR(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Jo(e),Qm(t)}function kR(t){const e=t.parts_.pop();t.byteLength_-=Jo(e),t.parts_.length>0&&(t.byteLength_-=1)}function Qm(t){if(t.byteLength_>eh)throw new Error(t.errorPrefix_+"has a key path longer than "+eh+" bytes ("+t.byteLength_+").");if(t.parts_.length>Zf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Zf+") or object contains a cycle "+Un(t))}function Un(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au extends zm{static getInstance(){return new au}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=1e3,RR=60*5*1e3,th=30*1e3,AR=1.3,PR=3e4,xR="server_kill",nh=3;class qt extends Km{constructor(e,n,s,r,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=qt.nextPersistentConnectionId_++,this.log_=_i("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=br,this.maxReconnectDelay_=RR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!ng())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");au.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&yo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const r=++this.requestNumber_,i={r,a:e,b:n};this.log_(xe(i)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const n=new Yo,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;qt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Lt(e,"w")){const s=Ks(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();nt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ZE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=th)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=XE(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,n)}sendUnlisten_(e,n,s,r){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,r){const i={p:n,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,s,r){this.putInternal("p",e,n,s,r)}merge(e,n,s,r){this.putInternal("m",e,n,s,r)}putInternal(e,n,s,r,i){this.initConnection_();const o={p:n,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+xe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ul("Unrecognized action received from server: "+xe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=br,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=br,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>PR&&(this.reconnectDelay_=br),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*AR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+qt.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){S(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?He("getToken() completed but was canceled"):(He("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new IR(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{nt(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(xR)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&nt(d),l())}}}interrupt(e){He("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){He("Resuming connection for reason: "+e),delete this.interruptReasons_[e],_l(this.interruptReasons_)&&(this.reconnectDelay_=br,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(i=>nu(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const s=new pe(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(n),i.delete(n),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,n){He("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=nh&&(this.reconnectDelay_=th,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){He("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=nh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Cm.replace(/\./g,"-")]=1,Ac()?e["framework.cordova"]=1:tg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=yo.getInstance().currentlyOnline();return _l(this.interruptReasons_)&&e}}qt.nextPersistentConnectionId_=0;qt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new te(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new te(is,e),r=new te(is,n);return this.compare(s,r)!==0}minPost(){return te.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di;class Jm extends aa{static get __EMPTY_NODE(){return Di}static set __EMPTY_NODE(e){Di=e}compare(e,n){return cr(e.name,n.name)}isDefinedOn(e){throw rr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return te.MIN}maxPost(){return new te(Tn,Di)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new te(e,Di)}toString(){return".key"}}const Qn=new Jm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,n,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class De{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??De.RED,this.left=r??Ze.EMPTY_NODE,this.right=i??Ze.EMPTY_NODE}copy(e,n,s,r,i){return new De(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ze.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,r;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ze.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}De.RED=!0;De.BLACK=!1;class NR{copy(e,n,s,r,i){return this}insert(e,n,s){return new De(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ze{constructor(e,n=Ze.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ze(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,De.BLACK,null,null))}remove(e){return new Ze(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,De.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,r=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Li(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Li(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Li(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Li(this.root_,null,this.comparator_,!0,e)}}Ze.EMPTY_NODE=new NR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(t,e){return cr(t.name,e.name)}function lu(t,e){return cr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bl;function MR(t){Bl=t}const Xm=function(t){return typeof t=="number"?"number:"+Rm(t):"string:"+t},Zm=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Lt(e,".sv"),"Priority must be a string or number.")}else S(t===Bl||t.isEmpty(),"priority of unexpected type.");S(t===Bl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sh;class Me{static set __childrenNodeConstructor(e){sh=e}static get __childrenNodeConstructor(){return sh}constructor(e,n=Me.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Zm(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Me(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Z(e)?this:X(e)===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=X(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(S(s!==".priority"||Sn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Me.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xm(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Rm(this.value_):e+=this.value_,this.lazyHash_=Sm(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Me.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Me.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,r=Me.VALUE_TYPE_ORDER.indexOf(n),i=Me.VALUE_TYPE_ORDER.indexOf(s);return S(r>=0,"Unknown leaf type: "+n),S(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e_,t_;function DR(t){e_=t}function LR(t){t_=t}class FR extends aa{compare(e,n){const s=e.node.getPriority(),r=n.node.getPriority(),i=s.compareTo(r);return i===0?cr(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return te.MIN}maxPost(){return new te(Tn,new Me("[PRIORITY-POST]",t_))}makePost(e,n){const s=e_(e);return new te(n,new Me("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ce=new FR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR=Math.log(2);class $R{constructor(e){const n=i=>parseInt(Math.log(i)/UR,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const bo=function(t,e,n,s){t.sort(e);const r=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=t[l],f=n?n(d):d,new De(f,d.node,De.BLACK,null,null);{const p=parseInt(u/2,10)+l,m=r(l,p),g=r(p+1,c);return d=t[p],f=n?n(d):d,new De(f,d.node,De.BLACK,m,g)}},i=function(l){let c=null,u=null,d=t.length;const f=function(m,g){const v=d-m,I=d;d-=m;const T=r(v+1,I),O=t[v],R=n?n(O):O;p(new De(R,O.node,g,null,T))},p=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const g=l.nextBitIsOne(),v=Math.pow(2,l.count-(m+1));g?f(v,De.BLACK):(f(v,De.BLACK),f(v,De.RED))}return u},o=new $R(t.length),a=i(o);return new Ze(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Va;const ws={};class Kt{static get Default(){return S(ws&&Ce,"ChildrenNode.ts has not been loaded"),Va=Va||new Kt({".priority":ws},{".priority":Ce}),Va}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Ks(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ze?n:null}hasIndex(e){return Lt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==Qn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=n.getIterator(te.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=bo(s,e.getCompare()):a=ws;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Kt(u,c)}addToIndexes(e,n){const s=lo(this.indexes_,(r,i)=>{const o=Ks(this.indexSet_,i);if(S(o,"Missing index implementation for "+i),r===ws)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(te.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),bo(a,o.getCompare())}else return ws;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new te(e.name,a))),l.insert(e,e.node)}});return new Kt(s,this.indexSet_)}removeFromIndexes(e,n){const s=lo(this.indexes_,r=>{if(r===ws)return r;{const i=n.get(e.name);return i?r.remove(new te(e.name,i)):r}});return new Kt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wr;class K{static get EMPTY_NODE(){return wr||(wr=new K(new Ze(lu),null,Kt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Zm(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||wr}updatePriority(e){return this.children_.isEmpty()?this:new K(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?wr:n}}getChild(e){const n=X(e);return n===null?this:this.getImmediateChild(n).getChild(ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new te(e,n);let r,i;n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?wr:this.priorityNode_;return new K(r,o,i)}}updateChild(e,n){const s=X(e);if(s===null)return n;{S(X(e)!==".priority"||Sn(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(ve(e),n);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,r=0,i=!0;if(this.forEachChild(Ce,(o,a)=>{n[o]=a.val(e),s++,i&&K.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xm(this.getPriority().val())+":"),this.forEachChild(Ce,(n,s)=>{const r=s.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":Sm(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new te(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new te(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new te(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,te.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,te.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===vi?-1:0}withIndex(e){if(e===Qn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new K(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Qn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ce),r=n.getIterator(Ce);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Qn?null:this.indexMap_.get(e.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class BR extends K{constructor(){super(new Ze(lu),K.EMPTY_NODE,Kt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return K.EMPTY_NODE}isEmpty(){return!1}}const vi=new BR;Object.defineProperties(te,{MIN:{value:new te(is,K.EMPTY_NODE)},MAX:{value:new te(Tn,vi)}});Jm.__EMPTY_NODE=K.EMPTY_NODE;Me.__childrenNodeConstructor=K;MR(vi);LR(vi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=!0;function Fe(t,e=null){if(t===null)return K.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Me(n,Fe(e))}if(!(t instanceof Array)&&jR){const n=[];let s=!1;if(rt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Fe(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new te(o,l)))}}),n.length===0)return K.EMPTY_NODE;const i=bo(n,OR,o=>o.name,lu);if(s){const o=bo(n,Ce.getCompare());return new K(i,Fe(e),new Kt({".priority":o},{".priority":Ce}))}else return new K(i,Fe(e),Kt.Default)}else{let n=K.EMPTY_NODE;return rt(t,(s,r)=>{if(Lt(t,s)&&s.substring(0,1)!=="."){const i=Fe(r);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(s,i))}}),n.updatePriority(Fe(e))}}DR(Fe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu extends aa{constructor(e){super(),this.indexPath_=e,S(!Z(e)&&X(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),r=this.extractChild(n.node),i=s.compareTo(r);return i===0?cr(e.name,n.name):i}makePost(e,n){const s=Fe(e),r=K.EMPTY_NODE.updateChild(this.indexPath_,s);return new te(n,r)}maxPost(){const e=K.EMPTY_NODE.updateChild(this.indexPath_,vi);return new te(Tn,e)}toString(){return Gm(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR extends aa{compare(e,n){const s=e.node.compareTo(n.node);return s===0?cr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return te.MIN}maxPost(){return te.MAX}makePost(e,n){const s=Fe(e);return new te(n,s)}toString(){return".value"}}const n_=new HR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(t){return{type:"value",snapshotNode:t}}function Gs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function si(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ri(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function WR(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e){this.index_=e}updateChild(e,n,s,r,i,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(s.getChild(r))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(si(n,a)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Gs(n,s)):o.trackChildChange(ri(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ce,(r,i)=>{n.hasChild(r)||s.trackChildChange(si(r,i))}),n.isLeafNode()||n.forEachChild(Ce,(r,i)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(i)||s.trackChildChange(ri(r,i,o))}else s.trackChildChange(Gs(r,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?K.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.indexedFilter_=new uu(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ii.getStartPost_(e),this.endPost_=ii.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,r,i,o){return this.matches(new te(n,s))||(s=K.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,r,i,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=K.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(K.EMPTY_NODE);const i=this;return n.forEachChild(Ce,(o,a)=>{i.matches(new te(o,a))||(r=r.updateImmediateChild(o,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ii(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,r,i,o){return this.rangedFilter_.matches(new te(n,s))||(s=K.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,r,i,o):this.fullLimitUpdateChild_(e,n,s,i,o)}updateFullNode(e,n,s){let r;if(n.isLeafNode()||n.isEmpty())r=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=K.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=n.withIndex(this.index_),r=r.updatePriority(K.EMPTY_NODE);let i;this.reverse_?i=r.getReverseIterator(this.index_):i=r.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,r,i){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,p)=>d(p,f)}else o=this.index_.getCompare();const a=e;S(a.numChildren()===this.limit_,"");const l=new te(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=r.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=r.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(u&&!s.isEmpty()&&p>=0)return i!=null&&i.trackChildChange(ri(n,s,d)),a.updateImmediateChild(n,s);{i!=null&&i.trackChildChange(si(n,d));const g=a.updateImmediateChild(n,K.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(i!=null&&i.trackChildChange(Gs(f.name,f.node)),g.updateImmediateChild(f.name,f.node)):g}}else return s.isEmpty()?e:u&&o(c,l)>=0?(i!=null&&(i.trackChildChange(si(c.name,c.node)),i.trackChildChange(Gs(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,K.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ce}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:is}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Tn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ce}copy(){const e=new du;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function KR(t){return t.loadsAllData()?new uu(t.getIndex()):t.hasLimit()?new VR(t):new ii(t)}function zR(t,e,n){const s=t.copy();return s.startSet_=!0,e===void 0&&(e=null),s.indexStartValue_=e,n!=null?(s.startNameSet_=!0,s.indexStartName_=n):(s.startNameSet_=!1,s.indexStartName_=""),s}function qR(t,e,n){const s=t.copy();return s.endSet_=!0,e===void 0&&(e=null),s.indexEndValue_=e,n!==void 0?(s.endNameSet_=!0,s.indexEndName_=n):(s.endNameSet_=!1,s.indexEndName_=""),s}function GR(t,e){const n=t.copy();return n.index_=e,n}function rh(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ce?n="$priority":t.index_===n_?n="$value":t.index_===Qn?n="$key":(S(t.index_ instanceof cu,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=xe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=xe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+xe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=xe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+xe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ih(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ce&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo extends Km{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=_i("p:rest:"),this.listens_={}}listen(e,n,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=wo.getListenId_(e,s),a={};this.listens_[o]=a;const l=rh(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(i,d,!1,s),Ks(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",r(f,null)}})}unlisten(e,n){const s=wo.getListenId_(e,n);delete this.listens_[s]}get(e){const n=rh(e._queryParams),s=e._path.toString(),r=new Yo;return this.restRequest_(s+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(n.auth=r.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ir(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=qr(a.responseText)}catch{nt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&nt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(){return{value:null,children:new Map}}function r_(t,e,n){if(Z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=X(e);t.children.has(s)||t.children.set(s,Eo());const r=t.children.get(s);e=ve(e),r_(r,e,n)}}function jl(t,e,n){t.value!==null?n(e,t.value):QR(t,(s,r)=>{const i=new pe(e.toString()+"/"+s);jl(r,i,n)})}function QR(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&rt(this.last_,(s,r)=>{n[s]=n[s]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh=10*1e3,XR=30*1e3,ZR=5*60*1e3;class eA{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new JR(e);const s=oh+(XR-oh)*Math.random();Dr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;rt(e,(r,i)=>{i>0&&Lt(this.statsToReport_,r)&&(n[r]=i,s=!0)}),s&&this.server_.reportStats(n),Dr(this.reportStats_.bind(this),Math.floor(Math.random()*2*ZR))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(bt||(bt={}));function i_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function fu(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function hu(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=bt.ACK_USER_WRITE,this.source=i_()}operationForChild(e){if(Z(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new pe(e));return new Io(ae(),n,this.revert)}}else return S(X(this.path)===e,"operationForChild called for unrelated child."),new Io(ve(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n){this.source=e,this.path=n,this.type=bt.LISTEN_COMPLETE}operationForChild(e){return Z(this.path)?new oi(this.source,ae()):new oi(this.source,ve(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=bt.OVERWRITE}operationForChild(e){return Z(this.path)?new os(this.source,ae(),this.snap.getImmediateChild(e)):new os(this.source,ve(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=bt.MERGE}operationForChild(e){if(Z(this.path)){const n=this.children.subtree(new pe(e));return n.isEmpty()?null:n.value?new os(this.source,ae(),n.value):new ai(this.source,ae(),n)}else return S(X(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ai(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Z(e))return this.isFullyInitialized()&&!this.filtered_;const n=X(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function nA(t,e,n,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(WR(o.childName,o.snapshotNode))}),Er(t,r,"child_removed",e,s,n),Er(t,r,"child_added",e,s,n),Er(t,r,"child_moved",i,s,n),Er(t,r,"child_changed",e,s,n),Er(t,r,"value",e,s,n),r}function Er(t,e,n,s,r,i){const o=s.filter(a=>a.type===n);o.sort((a,l)=>rA(t,a,l)),o.forEach(a=>{const l=sA(t,a,i);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function sA(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function rA(t,e,n){if(e.childName==null||n.childName==null)throw rr("Should only compare child_ events.");const s=new te(e.childName,e.snapshotNode),r=new te(n.childName,n.snapshotNode);return t.index_.compare(s,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(t,e){return{eventCache:t,serverCache:e}}function Lr(t,e,n,s){return la(new kn(e,n,s),t.serverCache)}function o_(t,e,n,s){return la(t.eventCache,new kn(e,n,s))}function Co(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function as(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ka;const iA=()=>(Ka||(Ka=new Ze(Wk)),Ka);class be{static fromObject(e){let n=new be(null);return rt(e,(s,r)=>{n=n.set(new pe(s),r)}),n}constructor(e,n=iA()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ae(),value:this.value};if(Z(e))return null;{const s=X(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(ve(e),n);return i!=null?{path:Ne(new pe(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Z(e))return this;{const n=X(e),s=this.children.get(n);return s!==null?s.subtree(ve(e)):new be(null)}}set(e,n){if(Z(e))return new be(n,this.children);{const s=X(e),i=(this.children.get(s)||new be(null)).set(ve(e),n),o=this.children.insert(s,i);return new be(this.value,o)}}remove(e){if(Z(e))return this.children.isEmpty()?new be(null):new be(null,this.children);{const n=X(e),s=this.children.get(n);if(s){const r=s.remove(ve(e));let i;return r.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,r),this.value===null&&i.isEmpty()?new be(null):new be(this.value,i)}else return this}}get(e){if(Z(e))return this.value;{const n=X(e),s=this.children.get(n);return s?s.get(ve(e)):null}}setTree(e,n){if(Z(e))return n;{const s=X(e),i=(this.children.get(s)||new be(null)).setTree(ve(e),n);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new be(this.value,o)}}fold(e){return this.fold_(ae(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(Ne(e,r),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ae(),n)}findOnPath_(e,n,s){const r=this.value?s(n,this.value):!1;if(r)return r;if(Z(e))return null;{const i=X(e),o=this.children.get(i);return o?o.findOnPath_(ve(e),Ne(n,i),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ae(),n)}foreachOnPath_(e,n,s){if(Z(e))return this;{this.value&&s(n,this.value);const r=X(e),i=this.children.get(r);return i?i.foreachOnPath_(ve(e),Ne(n,r),s):new be(null)}}foreach(e){this.foreach_(ae(),e)}foreach_(e,n){this.children.inorderTraversal((s,r)=>{r.foreach_(Ne(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.writeTree_=e}static empty(){return new It(new be(null))}}function Fr(t,e,n){if(Z(e))return new It(new be(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=qe(r,e);return i=i.updateChild(o,n),new It(t.writeTree_.set(r,i))}else{const r=new be(n),i=t.writeTree_.setTree(e,r);return new It(i)}}}function ah(t,e,n){let s=t;return rt(n,(r,i)=>{s=Fr(s,Ne(e,r),i)}),s}function lh(t,e){if(Z(e))return It.empty();{const n=t.writeTree_.setTree(e,new be(null));return new It(n)}}function Hl(t,e){return ps(t,e)!=null}function ps(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(qe(n.path,e)):null}function ch(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ce,(s,r)=>{e.push(new te(s,r))}):t.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new te(s,r.value))}),e}function bn(t,e){if(Z(e))return t;{const n=ps(t,e);return n!=null?new It(new be(n)):new It(t.writeTree_.subtree(e))}}function Wl(t){return t.writeTree_.isEmpty()}function Ys(t,e){return a_(ae(),t.writeTree_,e)}function a_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(S(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):n=a_(Ne(t,r),i,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ne(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(t,e){return d_(e,t)}function oA(t,e,n,s,r){S(s>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:r}),r&&(t.visibleWrites=Fr(t.visibleWrites,e,n)),t.lastWriteId=s}function aA(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function lA(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let r=s.visible,i=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&cA(a,s.path)?r=!1:yt(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return uA(t),!0;if(s.snap)t.visibleWrites=lh(t.visibleWrites,s.path);else{const a=s.children;rt(a,l=>{t.visibleWrites=lh(t.visibleWrites,Ne(s.path,l))})}return!0}else return!1}function cA(t,e){if(t.snap)return yt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&yt(Ne(t.path,n),e))return!0;return!1}function uA(t){t.visibleWrites=l_(t.allWrites,dA,ae()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function dA(t){return t.visible}function l_(t,e,n){let s=It.empty();for(let r=0;r<t.length;++r){const i=t[r];if(e(i)){const o=i.path;let a;if(i.snap)yt(n,o)?(a=qe(n,o),s=Fr(s,a,i.snap)):yt(o,n)&&(a=qe(o,n),s=Fr(s,ae(),i.snap.getChild(a)));else if(i.children){if(yt(n,o))a=qe(n,o),s=ah(s,a,i.children);else if(yt(o,n))if(a=qe(o,n),Z(a))s=ah(s,ae(),i.children);else{const l=Ks(i.children,X(a));if(l){const c=l.getChild(ve(a));s=Fr(s,ae(),c)}}}else throw rr("WriteRecord should have .snap or .children")}}return s}function c_(t,e,n,s,r){if(!s&&!r){const i=ps(t.visibleWrites,e);if(i!=null)return i;{const o=bn(t.visibleWrites,e);if(Wl(o))return n;if(n==null&&!Hl(o,ae()))return null;{const a=n||K.EMPTY_NODE;return Ys(o,a)}}}else{const i=bn(t.visibleWrites,e);if(!r&&Wl(i))return n;if(!r&&n==null&&!Hl(i,ae()))return null;{const o=function(c){return(c.visible||r)&&(!s||!~s.indexOf(c.writeId))&&(yt(c.path,e)||yt(e,c.path))},a=l_(t.allWrites,o,e),l=n||K.EMPTY_NODE;return Ys(a,l)}}}function fA(t,e,n){let s=K.EMPTY_NODE;const r=ps(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Ce,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(n){const i=bn(t.visibleWrites,e);return n.forEachChild(Ce,(o,a)=>{const l=Ys(bn(i,new pe(o)),a);s=s.updateImmediateChild(o,l)}),ch(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=bn(t.visibleWrites,e);return ch(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function hA(t,e,n,s,r){S(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=Ne(e,n);if(Hl(t.visibleWrites,i))return null;{const o=bn(t.visibleWrites,i);return Wl(o)?r.getChild(n):Ys(o,r.getChild(n))}}function pA(t,e,n,s){const r=Ne(e,n),i=ps(t.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(n)){const o=bn(t.visibleWrites,r);return Ys(o,s.getNode().getImmediateChild(n))}else return null}function gA(t,e){return ps(t.visibleWrites,e)}function mA(t,e,n,s,r,i,o){let a;const l=bn(t.visibleWrites,e),c=ps(l,ae());if(c!=null)a=c;else if(n!=null)a=Ys(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=f.getNext();for(;p&&u.length<r;)d(p,s)!==0&&u.push(p),p=f.getNext();return u}else return[]}function _A(){return{visibleWrites:It.empty(),allWrites:[],lastWriteId:-1}}function To(t,e,n,s){return c_(t.writeTree,t.treePath,e,n,s)}function pu(t,e){return fA(t.writeTree,t.treePath,e)}function uh(t,e,n,s){return hA(t.writeTree,t.treePath,e,n,s)}function So(t,e){return gA(t.writeTree,Ne(t.treePath,e))}function vA(t,e,n,s,r,i){return mA(t.writeTree,t.treePath,e,n,s,r,i)}function gu(t,e,n){return pA(t.writeTree,t.treePath,e,n)}function u_(t,e){return d_(Ne(t.treePath,e),t.writeTree)}function d_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(s,ri(s,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(s,si(s,r.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(s,Gs(s,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(s,ri(s,e.snapshotNode,r.oldSnap));else throw rr("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const f_=new bA;class mu{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new kn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return gu(this.writes_,e,s)}}getChildAfterChild(e,n,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:as(this.viewCache_),i=vA(this.writes_,r,n,1,s,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(t){return{filter:t}}function EA(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function IA(t,e,n,s,r){const i=new yA;let o,a;if(n.type===bt.OVERWRITE){const c=n;c.source.fromUser?o=Vl(t,e,c.path,c.snap,s,r,i):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Z(c.path),o=ko(t,e,c.path,c.snap,s,r,a,i))}else if(n.type===bt.MERGE){const c=n;c.source.fromUser?o=TA(t,e,c.path,c.children,s,r,i):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Kl(t,e,c.path,c.children,s,r,a,i))}else if(n.type===bt.ACK_USER_WRITE){const c=n;c.revert?o=RA(t,e,c.path,s,r,i):o=SA(t,e,c.path,c.affectedTree,s,r,i)}else if(n.type===bt.LISTEN_COMPLETE)o=kA(t,e,n.path,s,i);else throw rr("Unknown operation type: "+n.type);const l=i.getChanges();return CA(e,o,l),{viewCache:o,changes:l}}function CA(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=Co(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push(s_(Co(e)))}}function h_(t,e,n,s,r,i){const o=e.eventCache;if(So(s,n)!=null)return e;{let a,l;if(Z(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=as(e),u=c instanceof K?c:K.EMPTY_NODE,d=pu(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const c=To(s,as(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=X(n);if(c===".priority"){S(Sn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=uh(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=ve(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=uh(s,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=gu(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,r,i):a=o.getNode()}}return Lr(e,a,o.isFullyInitialized()||Z(n),t.filter.filtersNodes())}}function ko(t,e,n,s,r,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Z(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=X(n);if(!l.isCompleteForPath(n)&&Sn(n)>1)return e;const m=ve(n),v=l.getNode().getImmediateChild(p).updateChild(m,s);p===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),p,v,m,f_,null)}const d=o_(e,c,l.isFullyInitialized()||Z(n),u.filtersNodes()),f=new mu(r,d,i);return h_(t,d,n,r,f,a)}function Vl(t,e,n,s,r,i,o){const a=e.eventCache;let l,c;const u=new mu(r,e,i);if(Z(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Lr(e,c,!0,t.filter.filtersNodes());else{const d=X(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Lr(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=ve(n),p=a.getNode().getImmediateChild(d);let m;if(Z(f))m=s;else{const g=u.getCompleteChild(d);g!=null?qm(f)===".priority"&&g.getChild(Ym(f)).isEmpty()?m=g:m=g.updateChild(f,s):m=K.EMPTY_NODE}if(p.equals(m))l=e;else{const g=t.filter.updateChild(a.getNode(),d,m,f,u,o);l=Lr(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function dh(t,e){return t.eventCache.isCompleteForChild(e)}function TA(t,e,n,s,r,i,o){let a=e;return s.foreach((l,c)=>{const u=Ne(n,l);dh(e,X(u))&&(a=Vl(t,a,u,c,r,i,o))}),s.foreach((l,c)=>{const u=Ne(n,l);dh(e,X(u))||(a=Vl(t,a,u,c,r,i,o))}),a}function fh(t,e,n){return n.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function Kl(t,e,n,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Z(n)?c=s:c=new be(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),m=fh(t,p,f);l=ko(t,l,new pe(d),m,r,i,o,a)}}),c.children.inorderTraversal((d,f)=>{const p=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!p){const m=e.serverCache.getNode().getImmediateChild(d),g=fh(t,m,f);l=ko(t,l,new pe(d),g,r,i,o,a)}}),l}function SA(t,e,n,s,r,i,o){if(So(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(Z(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ko(t,e,n,l.getNode().getChild(n),r,i,a,o);if(Z(n)){let c=new be(null);return l.getNode().forEachChild(Qn,(u,d)=>{c=c.set(new pe(u),d)}),Kl(t,e,n,c,r,i,a,o)}else return e}else{let c=new be(null);return s.foreach((u,d)=>{const f=Ne(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Kl(t,e,n,c,r,i,a,o)}}function kA(t,e,n,s,r){const i=e.serverCache,o=o_(e,i.getNode(),i.isFullyInitialized()||Z(n),i.isFiltered());return h_(t,o,n,s,f_,r)}function RA(t,e,n,s,r,i){let o;if(So(s,n)!=null)return e;{const a=new mu(s,e,r),l=e.eventCache.getNode();let c;if(Z(n)||X(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=To(s,as(e));else{const d=e.serverCache.getNode();S(d instanceof K,"serverChildren would be complete if leaf node"),u=pu(s,d)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=X(n);let d=gu(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,ve(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,K.EMPTY_NODE,ve(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=To(s,as(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||So(s,ae())!=null,Lr(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,r=new uu(s.getIndex()),i=KR(s);this.processor_=wA(i);const o=n.serverCache,a=n.eventCache,l=r.updateFullNode(K.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(K.EMPTY_NODE,a.getNode(),null),u=new kn(l,o.isFullyInitialized(),r.filtersNodes()),d=new kn(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=la(d,u),this.eventGenerator_=new tA(this.query_)}get query(){return this.query_}}function PA(t){return t.viewCache_.serverCache.getNode()}function xA(t){return Co(t.viewCache_)}function NA(t,e){const n=as(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Z(e)&&!n.getImmediateChild(X(e)).isEmpty())?n.getChild(e):null}function hh(t){return t.eventRegistrations_.length===0}function OA(t,e){t.eventRegistrations_.push(e)}function ph(t,e,n){const s=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,r);o&&s.push(o)})}if(e){let r=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return s}function gh(t,e,n,s){e.type===bt.MERGE&&e.source.queryId!==null&&(S(as(t.viewCache_),"We should always have a full cache before handling merges"),S(Co(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,i=IA(t.processor_,r,e,n,s);return EA(t.processor_,i.viewCache),S(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,p_(t,i.changes,i.viewCache.eventCache.getNode(),null)}function MA(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ce,(i,o)=>{s.push(Gs(i,o))}),n.isFullyInitialized()&&s.push(s_(n.getNode())),p_(t,s,n.getNode(),e)}function p_(t,e,n,s){const r=s?[s]:t.eventRegistrations_;return nA(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ro;class g_{constructor(){this.views=new Map}}function DA(t){S(!Ro,"__referenceConstructor has already been defined"),Ro=t}function LA(){return S(Ro,"Reference.ts has not been loaded"),Ro}function FA(t){return t.views.size===0}function _u(t,e,n,s){const r=e.source.queryId;if(r!==null){const i=t.views.get(r);return S(i!=null,"SyncTree gave us an op for an invalid query."),gh(i,e,n,s)}else{let i=[];for(const o of t.views.values())i=i.concat(gh(o,e,n,s));return i}}function m_(t,e,n,s,r){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=To(n,r?s:null),l=!1;a?l=!0:s instanceof K?(a=pu(n,s),l=!1):(a=K.EMPTY_NODE,l=!1);const c=la(new kn(a,l,!1),new kn(s,r,!1));return new AA(e,c)}return o}function UA(t,e,n,s,r,i){const o=m_(t,e,s,r,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),OA(o,n),MA(o,n)}function $A(t,e,n,s){const r=e._queryIdentifier,i=[];let o=[];const a=Rn(t);if(r==="default")for(const[l,c]of t.views.entries())o=o.concat(ph(c,n,s)),hh(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||i.push(c.query));else{const l=t.views.get(r);l&&(o=o.concat(ph(l,n,s)),hh(l)&&(t.views.delete(r),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!Rn(t)&&i.push(new(LA())(e._repo,e._path)),{removed:i,events:o}}function __(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function wn(t,e){let n=null;for(const s of t.views.values())n=n||NA(s,e);return n}function v_(t,e){if(e._queryParams.loadsAllData())return ua(t);{const s=e._queryIdentifier;return t.views.get(s)}}function y_(t,e){return v_(t,e)!=null}function Rn(t){return ua(t)!=null}function ua(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao;function BA(t){S(!Ao,"__referenceConstructor has already been defined"),Ao=t}function jA(){return S(Ao,"Reference.ts has not been loaded"),Ao}let HA=1;class mh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new be(null),this.pendingWriteTree_=_A(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function b_(t,e,n,s,r){return oA(t.pendingWriteTree_,e,n,s,r),r?bi(t,new os(i_(),e,n)):[]}function Vn(t,e,n=!1){const s=aA(t.pendingWriteTree_,e);if(lA(t.pendingWriteTree_,e)){let i=new be(null);return s.snap!=null?i=i.set(ae(),!0):rt(s.children,o=>{i=i.set(new pe(o),!0)}),bi(t,new Io(s.path,i,n))}else return[]}function yi(t,e,n){return bi(t,new os(fu(),e,n))}function WA(t,e,n){const s=be.fromObject(n);return bi(t,new ai(fu(),e,s))}function VA(t,e){return bi(t,new oi(fu(),e))}function KA(t,e,n){const s=yu(t,n);if(s){const r=bu(s),i=r.path,o=r.queryId,a=qe(i,e),l=new oi(hu(o),a);return wu(t,i,l)}else return[]}function Po(t,e,n,s,r=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||y_(o,e))){const l=$A(o,e,n,s);FA(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=l.removed;if(a=l.events,!r){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(i,(f,p)=>Rn(p));if(u&&!d){const f=t.syncPointTree_.subtree(i);if(!f.isEmpty()){const p=GA(f);for(let m=0;m<p.length;++m){const g=p[m],v=g.query,I=C_(t,g);t.listenProvider_.startListening(Ur(v),li(t,v),I.hashFn,I.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Ur(e),null):c.forEach(f=>{const p=t.queryToTagMap.get(da(f));t.listenProvider_.stopListening(Ur(f),p)}))}YA(t,c)}return a}function w_(t,e,n,s){const r=yu(t,s);if(r!=null){const i=bu(r),o=i.path,a=i.queryId,l=qe(o,e),c=new os(hu(a),l,n);return wu(t,o,c)}else return[]}function zA(t,e,n,s){const r=yu(t,s);if(r){const i=bu(r),o=i.path,a=i.queryId,l=qe(o,e),c=be.fromObject(n),u=new ai(hu(a),l,c);return wu(t,o,u)}else return[]}function zl(t,e,n,s=!1){const r=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(r,(f,p)=>{const m=qe(f,r);i=i||wn(p,m),o=o||Rn(p)});let a=t.syncPointTree_.get(r);a?(o=o||Rn(a),i=i||wn(a,ae())):(a=new g_,t.syncPointTree_=t.syncPointTree_.set(r,a));let l;i!=null?l=!0:(l=!1,i=K.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((p,m)=>{const g=wn(m,ae());g&&(i=i.updateImmediateChild(p,g))}));const c=y_(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=da(e);S(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=QA();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const u=ca(t.pendingWriteTree_,r);let d=UA(a,e,n,u,i,l);if(!c&&!o&&!s){const f=v_(a,e);d=d.concat(JA(t,e,f))}return d}function vu(t,e,n){const r=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=qe(o,e),c=wn(a,l);if(c)return c});return c_(r,e,i,n,!0)}function qA(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=qe(c,n);s=s||wn(u,d)});let r=t.syncPointTree_.get(n);r?s=s||wn(r,ae()):(r=new g_,t.syncPointTree_=t.syncPointTree_.set(n,r));const i=s!=null,o=i?new kn(s,!0,!1):null,a=ca(t.pendingWriteTree_,e._path),l=m_(r,e,a,i?o.getNode():K.EMPTY_NODE,i);return xA(l)}function bi(t,e){return E_(e,t.syncPointTree_,null,ca(t.pendingWriteTree_,ae()))}function E_(t,e,n,s){if(Z(t.path))return I_(t,e,n,s);{const r=e.get(ae());n==null&&r!=null&&(n=wn(r,ae()));let i=[];const o=X(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=u_(s,o);i=i.concat(E_(a,l,c,u))}return r&&(i=i.concat(_u(r,t,s,n))),i}}function I_(t,e,n,s){const r=e.get(ae());n==null&&r!=null&&(n=wn(r,ae()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=u_(s,o),u=t.operationForChild(o);u&&(i=i.concat(I_(u,a,l,c)))}),r&&(i=i.concat(_u(r,t,s,n))),i}function C_(t,e){const n=e.query,s=li(t,n);return{hashFn:()=>(PA(e)||K.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return s?KA(t,n._path,s):VA(t,n._path);{const i=zk(r,n);return Po(t,n,null,i)}}}}function li(t,e){const n=da(e);return t.queryToTagMap.get(n)}function da(t){return t._path.toString()+"$"+t._queryIdentifier}function yu(t,e){return t.tagToQueryMap.get(e)}function bu(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new pe(t.substr(0,e))}}function wu(t,e,n){const s=t.syncPointTree_.get(e);S(s,"Missing sync point for query tag that we're tracking");const r=ca(t.pendingWriteTree_,e);return _u(s,n,r,null)}function GA(t){return t.fold((e,n,s)=>{if(n&&Rn(n))return[ua(n)];{let r=[];return n&&(r=__(n)),rt(s,(i,o)=>{r=r.concat(o)}),r}})}function Ur(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(jA())(t._repo,t._path):t}function YA(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const r=da(s),i=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(i)}}}function QA(){return HA++}function JA(t,e,n){const s=e._path,r=li(t,e),i=C_(t,n),o=t.listenProvider_.startListening(Ur(e),r,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(s);if(r)S(!Rn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!Z(c)&&u&&Rn(u))return[ua(u).query];{let f=[];return u&&(f=f.concat(__(u).map(p=>p.query))),rt(d,(p,m)=>{f=f.concat(m)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Ur(u),li(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Eu(n)}node(){return this.node_}}class Iu{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ne(this.path_,e);return new Iu(this.syncTree_,n)}node(){return vu(this.syncTree_,this.path_)}}const XA=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},_h=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return ZA(t[".sv"],e,n);if(typeof t[".sv"]=="object")return eP(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},ZA=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},eP=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&S(!1,"Unexpected increment value: "+s);const r=e.node();if(S(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},tP=function(t,e,n,s){return Cu(e,new Iu(n,t),s)},T_=function(t,e,n){return Cu(t,new Eu(e),n)};function Cu(t,e,n){const s=t.getPriority().val(),r=_h(s,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=_h(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new Me(a,Fe(r)):t}else{const o=t;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new Me(r))),o.forEachChild(Ce,(a,l)=>{const c=Cu(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Su(t,e){let n=e instanceof pe?e:new pe(e),s=t,r=X(n);for(;r!==null;){const i=Ks(s.node.children,r)||{children:{},childCount:0};s=new Tu(r,s,i),n=ve(n),r=X(n)}return s}function dr(t){return t.node.value}function S_(t,e){t.node.value=e,ql(t)}function k_(t){return t.node.childCount>0}function nP(t){return dr(t)===void 0&&!k_(t)}function fa(t,e){rt(t.node.children,(n,s)=>{e(new Tu(n,t,s))})}function R_(t,e,n,s){n&&!s&&e(t),fa(t,r=>{R_(r,e,!0,s)}),n&&s&&e(t)}function sP(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function wi(t){return new pe(t.parent===null?t.name:wi(t.parent)+"/"+t.name)}function ql(t){t.parent!==null&&rP(t.parent,t.name,t)}function rP(t,e,n){const s=nP(n),r=Lt(t.node.children,e);s&&r?(delete t.node.children[e],t.node.childCount--,ql(t)):!s&&!r&&(t.node.children[e]=n.node,t.node.childCount++,ql(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP=/[\[\].#$\/\u0000-\u001F\u007F]/,oP=/[\[\].#$\u0000-\u001F\u007F]/,za=10*1024*1024,ku=function(t){return typeof t=="string"&&t.length!==0&&!iP.test(t)},A_=function(t){return typeof t=="string"&&t.length!==0&&!oP.test(t)},aP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),A_(t)},vh=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!tu(t)||t&&typeof t=="object"&&Lt(t,".sv")},Ei=function(t,e,n,s){s&&e===void 0||Ru(Qo(t,"value"),e,n)},Ru=function(t,e,n){const s=n instanceof pe?new TR(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Un(s));if(typeof e=="function")throw new Error(t+"contains a function "+Un(s)+" with contents = "+e.toString());if(tu(e))throw new Error(t+"contains "+e.toString()+" "+Un(s));if(typeof e=="string"&&e.length>za/3&&Jo(e)>za)throw new Error(t+"contains a string greater than "+za+" utf8 bytes "+Un(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(rt(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!ku(o)))throw new Error(t+" contains an invalid key ("+o+") "+Un(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);SR(s,o),Ru(t,a,s),kR(s)}),r&&i)throw new Error(t+' contains ".value" child '+Un(s)+" in addition to actual children.")}},lP=function(t,e,n,s){if(!(s&&n===void 0)&&!ku(n))throw new Error(Qo(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Au=function(t,e,n,s){if(!(s&&n===void 0)&&!A_(n))throw new Error(Qo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},cP=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Au(t,e,n,s)},Pu=function(t,e){if(X(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},uP=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ku(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!aP(n))throw new Error(Qo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function xu(t,e){let n=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();n!==null&&!ou(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(r)}n&&t.eventLists_.push(n)}function P_(t,e,n){xu(t,n),x_(t,s=>ou(s,e))}function Dt(t,e,n){xu(t,n),x_(t,s=>yt(s,e)||yt(e,s))}function x_(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const r=t.eventLists_[s];if(r){const i=r.path;e(i)?(fP(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function fP(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Yn&&He("event: "+n.toString()),ur(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP="repo_interrupt",pP=25;class gP{constructor(e,n,s,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new dP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Eo(),this.transactionQueueTree_=new Tu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function mP(t,e,n){if(t.stats_=ru(t.repoInfo_),t.forceRestClient_||Qk())t.server_=new wo(t.repoInfo_,(s,r,i,o)=>{yh(t,s,r,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>bh(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{xe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new qt(t.repoInfo_,e,(s,r,i,o)=>{yh(t,s,r,i,o)},s=>{bh(t,s)},s=>{_P(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=tR(t.repoInfo_,()=>new eA(t.stats_,t.server_)),t.infoData_=new YR,t.infoSyncTree_=new mh({startListening:(s,r,i,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=yi(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ou(t,"connected",!1),t.serverSyncTree_=new mh({startListening:(s,r,i,o)=>(t.server_.listen(s,i,r,(a,l)=>{const c=o(a,l);Dt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,r)=>{t.server_.unlisten(s,r)}})}function N_(t){const n=t.infoData_.getNode(new pe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Nu(t){return XA({timestamp:N_(t)})}function yh(t,e,n,s,r){t.dataUpdateCount++;const i=new pe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(s){const l=lo(n,c=>Fe(c));o=zA(t.serverSyncTree_,i,l,r)}else{const l=Fe(n);o=w_(t.serverSyncTree_,i,l,r)}else if(s){const l=lo(n,c=>Fe(c));o=WA(t.serverSyncTree_,i,l)}else{const l=Fe(n);o=yi(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=pa(t,i)),Dt(t.eventQueue_,a,o)}function bh(t,e){Ou(t,"connected",e),e===!1&&bP(t)}function _P(t,e){rt(e,(n,s)=>{Ou(t,n,s)})}function Ou(t,e,n){const s=new pe("/.info/"+e),r=Fe(n);t.infoData_.updateSnapshot(s,r);const i=yi(t.infoSyncTree_,s,r);Dt(t.eventQueue_,s,i)}function O_(t){return t.nextWriteId_++}function vP(t,e,n){const s=qA(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(r=>{const i=Fe(r).withIndex(e._queryParams.getIndex());zl(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=yi(t.serverSyncTree_,e._path,i);else{const a=li(t.serverSyncTree_,e);o=w_(t.serverSyncTree_,e._path,i,a)}return Dt(t.eventQueue_,e._path,o),Po(t.serverSyncTree_,e,n,null,!0),i},r=>(ha(t,"get for query "+xe(e)+" failed: "+r),Promise.reject(new Error(r))))}function yP(t,e,n,s,r){ha(t,"set",{path:e.toString(),value:n,priority:s});const i=Nu(t),o=Fe(n,s),a=vu(t.serverSyncTree_,e),l=T_(o,a,i),c=O_(t),u=b_(t.serverSyncTree_,e,l,c,!0);xu(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,p)=>{const m=f==="ok";m||nt("set at "+e+" failed: "+f);const g=Vn(t.serverSyncTree_,c,!m);Dt(t.eventQueue_,e,g),IP(t,r,f,p)});const d=U_(t,e);pa(t,d),Dt(t.eventQueue_,d,[])}function bP(t){ha(t,"onDisconnectEvents");const e=Nu(t),n=Eo();jl(t.onDisconnect_,ae(),(r,i)=>{const o=tP(r,i,t.serverSyncTree_,e);r_(n,r,o)});let s=[];jl(n,ae(),(r,i)=>{s=s.concat(yi(t.serverSyncTree_,r,i));const o=U_(t,r);pa(t,o)}),t.onDisconnect_=Eo(),Dt(t.eventQueue_,ae(),s)}function wP(t,e,n){let s;X(e._path)===".info"?s=zl(t.infoSyncTree_,e,n):s=zl(t.serverSyncTree_,e,n),P_(t.eventQueue_,e._path,s)}function wh(t,e,n){let s;X(e._path)===".info"?s=Po(t.infoSyncTree_,e,n):s=Po(t.serverSyncTree_,e,n),P_(t.eventQueue_,e._path,s)}function EP(t){t.persistentConnection_&&t.persistentConnection_.interrupt(hP)}function ha(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),He(n,...e)}function IP(t,e,n,s){e&&ur(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let i=r;s&&(i+=": "+s);const o=new Error(i);o.code=r,e(o)}})}function M_(t,e,n){return vu(t.serverSyncTree_,e,n)||K.EMPTY_NODE}function Mu(t,e=t.transactionQueueTree_){if(e||ga(t,e),dr(e)){const n=L_(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&CP(t,wi(e),n)}else k_(e)&&fa(e,n=>{Mu(t,n)})}function CP(t,e,n){const s=n.map(c=>c.currentWriteId),r=M_(t,e,s);let i=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];S(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=qe(e,u.path);i=i.updateChild(d,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{ha(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Vn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();ga(t,Su(t.transactionQueueTree_,e)),Mu(t,t.transactionQueueTree_),Dt(t.eventQueue_,e,u);for(let f=0;f<d.length;f++)ur(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{nt("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}pa(t,e)}},o)}function pa(t,e){const n=D_(t,e),s=wi(n),r=L_(t,n);return TP(t,r,s),s}function TP(t,e,n){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=qe(n,l.path);let u=!1,d;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,r=r.concat(Vn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=pP)u=!0,d="maxretry",r=r.concat(Vn(t.serverSyncTree_,l.currentWriteId,!0));else{const f=M_(t,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){Ru("transaction failed: Data returned ",p,l.path);let m=Fe(p);typeof p=="object"&&p!=null&&Lt(p,".priority")||(m=m.updatePriority(f.getPriority()));const v=l.currentWriteId,I=Nu(t),T=T_(m,f,I);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=T,l.currentWriteId=O_(t),o.splice(o.indexOf(v),1),r=r.concat(b_(t.serverSyncTree_,l.path,T,l.currentWriteId,l.applyLocally)),r=r.concat(Vn(t.serverSyncTree_,v,!0))}else u=!0,d="nodata",r=r.concat(Vn(t.serverSyncTree_,l.currentWriteId,!0))}Dt(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}ga(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)ur(s[a]);Mu(t,t.transactionQueueTree_)}function D_(t,e){let n,s=t.transactionQueueTree_;for(n=X(e);n!==null&&dr(s)===void 0;)s=Su(s,n),e=ve(e),n=X(e);return s}function L_(t,e){const n=[];return F_(t,e,n),n.sort((s,r)=>s.order-r.order),n}function F_(t,e,n){const s=dr(e);if(s)for(let r=0;r<s.length;r++)n.push(s[r]);fa(e,r=>{F_(t,r,n)})}function ga(t,e){const n=dr(e);if(n){let s=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[s]=n[r],s++);n.length=s,S_(e,n.length>0?n:void 0)}fa(e,s=>{ga(t,s)})}function U_(t,e){const n=wi(D_(t,e)),s=Su(t.transactionQueueTree_,e);return sP(s,r=>{qa(t,r)}),qa(t,s),R_(s,r=>{qa(t,r)}),n}function qa(t,e){const n=dr(e);if(n){const s=[];let r=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Vn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?S_(e,void 0):n.length=i+1,Dt(t.eventQueue_,wi(e),r);for(let o=0;o<s.length;o++)ur(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let r=n[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function kP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):nt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Eh=function(t,e){const n=RP(t),s=n.namespace;n.domain==="firebase.com"&&Xt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Xt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||jk();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Um(n.host,n.secure,s,r,e,"",s!==n.subdomain),path:new pe(n.pathString)}},RP=function(t){let e="",n="",s="",r="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(r=SP(t.substring(u,d)));const f=kP(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),i=s}"ns"in f&&(i=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",AP=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let r;const i=new Array(8);for(r=7;r>=0;r--)i[r]=Ih.charAt(n%64),n=Math.floor(n/64);S(n===0,"Cannot push at time == 0");let o=i.join("");if(s){for(r=11;r>=0&&e[r]===63;r--)e[r]=0;e[r]++}else for(r=0;r<12;r++)e[r]=Math.floor(Math.random()*64);for(r=0;r<12;r++)o+=Ih.charAt(e[r]);return S(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,n,s,r){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+xe(this.snapshot.exportVal())}}class B_{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n,s,r){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=r}get key(){return Z(this._path)?null:qm(this._path)}get ref(){return new Ut(this._repo,this._path)}get _queryIdentifier(){const e=ih(this._queryParams),n=nu(e);return n==="{}"?"default":n}get _queryObject(){return ih(this._queryParams)}isEqual(e){if(e=Ve(e),!(e instanceof fr))return!1;const n=this._repo===e._repo,s=ou(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+CR(this._path)}}function PP(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Du(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Qn){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",r="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==is)throw new Error(s);if(typeof e!="string")throw new Error(r)}if(t.hasEnd()){if(t.getIndexEndName()!==Tn)throw new Error(s);if(typeof n!="string")throw new Error(r)}}else if(t.getIndex()===Ce){if(e!=null&&!vh(e)||n!=null&&!vh(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(S(t.getIndex()instanceof cu||t.getIndex()===n_,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function H_(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Ut extends fr{constructor(e,n){super(e,n,new du,!1)}get parent(){const e=Ym(this._path);return e===null?null:new Ut(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Qs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new pe(e),s=ls(this.ref,e);return new Qs(this._node.getChild(n),s,Ce)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,r)=>e(new Qs(r,ls(this.ref,s),Ce)))}hasChild(e){const n=new pe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Kn(t,e){return t=Ve(t),t._checkNotDeleted("ref"),e!==void 0?ls(t._root,e):t._root}function ls(t,e){return t=Ve(t),X(t._path)===null?cP("child","path",e,!1):Au("child","path",e,!1),new Ut(t._repo,Ne(t._path,e))}function xP(t,e){t=Ve(t),Pu("push",t._path),Ei("push",e,t._path,!0);const n=N_(t._repo),s=AP(n),r=ls(t,s),i=ls(t,s);let o;return e!=null?o=Lu(i,e).then(()=>i):o=Promise.resolve(i),r.then=o.then.bind(o),r.catch=o.then.bind(o,void 0),r}function W_(t){return Pu("remove",t._path),Lu(t,null)}function Lu(t,e){t=Ve(t),Pu("set",t._path),Ei("set",e,t._path,!1);const n=new Yo;return yP(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function NP(t){t=Ve(t);const e=new j_(()=>{}),n=new ma(e);return vP(t._repo,t,n).then(s=>new Qs(s,new Ut(t._repo,t._path),t._queryParams.getIndex()))}class ma{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new $_("value",this,new Qs(e.snapshotNode,new Ut(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new B_(this,e,n):null}matches(e){return e instanceof ma?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Fu{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new B_(this,e,n):null}createEvent(e,n){S(e.childName!=null,"Child events should have a childName.");const s=ls(new Ut(n._repo,n._path),e.childName),r=n._queryParams.getIndex();return new $_(e.type,this,new Qs(e.snapshotNode,s,r),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Fu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function OP(t,e,n,s,r){let i;if(typeof s=="object"&&(i=void 0,r=s),typeof s=="function"&&(i=s),r&&r.onlyOnce){const l=n,c=(u,d)=>{wh(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new j_(n,i||void 0),a=e==="value"?new ma(o):new Fu(e,o);return wP(t._repo,t,a),()=>wh(t._repo,t,a)}function V_(t,e,n,s){return OP(t,"value",e,n,s)}class _a{}class MP extends _a{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){Ei("endAt",this._value,e._path,!0);const n=qR(e._queryParams,this._value,this._key);if(H_(n),Du(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new fr(e._repo,e._path,n,e._orderByCalled)}}class DP extends _a{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){Ei("startAt",this._value,e._path,!0);const n=zR(e._queryParams,this._value,this._key);if(H_(n),Du(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new fr(e._repo,e._path,n,e._orderByCalled)}}class LP extends _a{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){PP(e,"orderByChild");const n=new pe(this._path);if(Z(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const s=new cu(n),r=GR(e._queryParams,s);return Du(r),new fr(e._repo,e._path,r,!0)}}function FP(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Au("orderByChild","path",t,!1),new LP(t)}class UP extends _a{constructor(e,n){super(),this._value=e,this._key=n,this.type="equalTo"}_apply(e){if(Ei("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new MP(this._value,this._key)._apply(new DP(this._value,this._key)._apply(e))}}function $P(t,e){return lP("equalTo","key",e,!0),new UP(t,e)}function BP(t,...e){let n=Ve(t);for(const s of e)n=s._apply(n);return n}DA(Ut);BA(Ut);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP="FIREBASE_DATABASE_EMULATOR_HOST",Gl={};let HP=!1;function WP(t,e,n,s){t.repoInfo_=new Um(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function VP(t,e,n,s,r){let i=s||t.options.databaseURL;i===void 0&&(t.options.projectId||Xt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),He("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Eh(i,r),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[jP]),c?(l=!0,i=`http://${c}?ns=${a.namespace}`,o=Eh(i,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new Fs(Fs.OWNER):new Xk(t.name,t.options,e);uP("Invalid Firebase Database URL",o),Z(o.path)||Xt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=zP(a,t,u,new Jk(t,n));return new qP(d,t)}function KP(t,e){const n=Gl[e];(!n||n[t.key]!==t)&&Xt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),EP(t),delete n[t.key]}function zP(t,e,n,s){let r=Gl[e.name];r||(r={},Gl[e.name]=r);let i=r[t.toURLString()];return i&&Xt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new gP(t,HP,n,s),r[t.toURLString()]=i,i}class qP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(mP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ut(this._repo,ae())),this._rootInternal}_delete(){return this._rootInternal!==null&&(KP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Xt("Cannot call "+e+" on a deleted database.")}}function Uu(t=og(),e){const n=Nc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=HE("database");s&&GP(n,...s)}return n}function GP(t,e,n,s={}){t=Ve(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Xt("Cannot call useEmulator() after instance has already been initialized.");const r=t._repoInternal;let i;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&Xt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new Fs(Fs.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:WE(s.mockUserToken,t.app.options.projectId);i=new Fs(o)}WP(r,e,n,i)}/**
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
 */function YP(t){Lk(or),zs(new ts("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return VP(s,r,i,n)},"PUBLIC").setMultipleInstances(!0)),yn(Hf,Wf,t),yn(Hf,Wf,"esm2017")}qt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};qt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};YP();const QP={name:"TaskList",components:{MainHeader:M0,Icon:Qc,Switch:mm},setup(){const t=Ic(),e=Jr(),n=Im(),s=bm(n),r=async()=>{try{await hT(e),t.push("/")}catch(g){console.error("Error logging out:",g)}},i=ee({}),o=ee(!1),a=ee(""),l=ee(null),c=Uu();let u=null;const d=e.onAuthStateChanged(g=>{g?(l.value=g.uid,f()):(l.value=null,i.value={},u&&(Kn(c,"tasks").off("value",u),u=null))});function f(){o.value=!0,u&&u();const g=BP(Kn(c,"tasks"),FP("userUID"),$P(l.value));u=V_(g,v=>{i.value=v.val()||{},o.value=!1})}function p(){!l.value||!a.value.trim()||Kn(c,"tasks").push({taskText:a.value,userUID:l.value}).then(()=>{a.value=""}).catch(g=>{console.error("Error adding task:",g)})}function m(g){const v=Kn(c,"tasks"),I=ls(v,g);NP(I).then(T=>{const O=T.val();O&&O.userUID===l.value?W_(I).then(()=>console.log("Task removed!")).catch(R=>console.error("Error removing task:",R)):console.error("Access denied: task doesn't belong to user.")}).catch(T=>{console.error("Error fetching task data:",T)})}return jo(()=>{u&&u(),d()}),{taskArray:i,isLoading:o,newTaskText:a,addTask:p,deleteTask:m,isDark:n,toggleDark:s,logout:r}}},K_=t=>(Jh("data-v-0f87078a"),t=t(),Xh(),t),JP={class:"dark:bg-gray-900 min-h-screen p-4"},XP={class:"flex justify-between items-center w-full px-4"},ZP=K_(()=>J("div",{class:"py-0 px-3 font-semibold dark:text-white"},"Task Project",-1)),ex={class:"flex items-center gap-2"},tx={key:0,class:"flex justify-center items-center h-32"},nx=K_(()=>J("div",{class:"spinner"},null,-1)),sx=[nx],rx={key:1,class:"flex justify-center"},ix={class:"task-list"},ox=["onClick"];function ax(t,e,n,s,r,i){const o=ze("Icon"),a=ze("Switch"),l=ze("main-header");return Be(),Je("div",JP,[ie(l,null,{default:Xe(()=>[J("div",XP,[ZP,J("div",ex,[ie(o,{icon:"iconamoon:mode-light",color:s.isDark?"white":"black",width:"26",height:"26"},null,8,["color"]),ie(a,{onClick:e[0]||(e[0]=c=>s.toggleDark()),modelValue:s.isDark,"onUpdate:modelValue":e[1]||(e[1]=c=>s.isDark=c),class:Jn([s.isDark?"bg-gray-900":"bg-gray-700","relative inline-flex h-6 w-11 items-center rounded-full transition-colors"])},{default:Xe(()=>[J("span",{class:Jn([s.isDark?"translate-x-6":"translate-x-1","inline-block h-4 w-4 transform rounded-full bg-white transition-transform"])},null,2)]),_:1},8,["modelValue","class"]),ie(o,{icon:"material-symbols:dark-mode-outline",color:s.isDark?"white":"black",width:"26",height:"26"},null,8,["color"]),J("button",{onClick:e[2]||(e[2]=(...c)=>s.logout&&s.logout(...c)),class:"ml-4 px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"}," Logout ")])])]),_:1}),s.isLoading?(Be(),Je("div",tx,sx)):(Be(),Je("div",rx,[J("ul",ix,[(Be(!0),Je(Le,null,Ey(s.taskArray,(c,u)=>(Be(),Je("li",{key:u,class:"task-item"},[J("span",null,Yi(c.taskText),1),J("button",{onClick:d=>s.deleteTask(u),class:"delete-btn"},[ie(o,{icon:"mdi-light:delete"})],8,ox)]))),128))])]))])}const lx=Ft(QP,[["render",ax],["__scopeId","data-v-0f87078a"]]),cx={components:{Icon:Qc},setup(t,e){const n=ee("Login"),s=ee("Signup Instead"),r=ee(""),i=ee(""),o=ee(!1);function a(){n.value==="Login"?(n.value="Signup",s.value="Login Instead"):(n.value="Login",s.value="Signup Instead")}function l(){e.emit("emit-user",[r.value,i.value,n.value]),r.value="",i.value=""}function c(){o.value===!1?o.value=!0:o.value===!0&&(o.value=!1)}return{buttonPrimary:n,buttonSecondary:s,switchText:a,emitUser:l,username:r,password:i,showHide:o,showHidePassword:c}}},ux={class:"relative mb-3"},dx=J("label",{for:"email",class:"pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"},"Email address",-1),fx={class:"relative mb-3"},hx=["type"],px={class:"py-1"},gx=J("label",{for:"showPassword",class:"p-1 dark:text-white"},"Show Password",-1),mx=J("label",{for:"password",class:"pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"},"Password",-1),_x={class:"p-0.5"},vx={class:"p-0.5"};function yx(t,e,n,s,r,i){const o=ze("base-button");return Be(),Je("form",null,[J("div",ux,[el(J("input",{type:"text",class:"peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]",id:"email",placeholder:"name@example.com","onUpdate:modelValue":e[0]||(e[0]=a=>s.username=a)},null,512),[[no,s.username]]),dx]),J("div",fx,[el(J("input",{type:s.showHide?"text":"password",class:"peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] bg-",id:"password",placeholder:"Password","onUpdate:modelValue":e[1]||(e[1]=a=>s.password=a)},null,8,hx),[[Rb,s.password]]),J("div",px,[J("input",{type:"checkbox",id:"showPassword",onChange:e[2]||(e[2]=(...a)=>s.showHidePassword&&s.showHidePassword(...a))},null,32),gx]),mx]),J("span",_x,[ie(o,{onClick:Rd(s.emitUser,["prevent"]),class:"font-semibold"},{default:Xe(()=>[qn(Yi(s.buttonPrimary),1)]),_:1},8,["onClick"])]),J("span",vx,[ie(o,{onClick:Rd(s.switchText,["prevent"]),class:"font-semibold"},{default:Xe(()=>[qn(Yi(s.buttonSecondary),1)]),_:1},8,["onClick"])])])}const bx=Ft(cx,[["render",yx]]);const wx={},Ex={class:"text-base text-red-600"};function Ix(t,e){return Be(),Je("div",null,[ie(bc,{name:"message"},{default:Xe(()=>[J("p",Ex,[ui(t.$slots,"default",{},void 0,!0)])]),_:3})])}const Cx=Ft(wx,[["render",Ix],["__scopeId","data-v-e583e2cf"]]),Tx={components:{LoginComponent:bx,ErrorMessage:Cx,BaseHeader:Wc,Icon:Qc,Menu:fk,MenuButton:hk,MenuItems:pk,MenuItem:gk,Switch:mm},setup(){const t=Ic(),e=ee(),n=Im(),s=bm(n),r=Jr();function i(o){const a=ee(o[0]),l=ee(o[1]),c=ee(o[2]);e.value="",c.value==="Login"?uT(r,a.value,l.value).then(()=>{t.replace("/tasks")}).catch(u=>{switch(u.code){case"auth/invalid-email":e.value="Invalid email";break;case"auth/user-not-found":e.value="No account with that email was found";break;case"auth/wrong-password":e.value="Incorrect password";break;default:e.value="Email or password was incorrect";break}}):c.value==="Signup"&&cT(r,a.value,l.value).then(()=>{alert("User created with success!")}).catch(u=>{console.log(u.code),alert(u.message)})}return{signupOrLogin:i,errMsg:e,isDark:n,toggleDark:s}}},Sx=J("div",{class:"py-0 px-3 font-semibold dark:text-white"},"Task Project",-1),kx={class:"flex"},Rx=J("h1",{class:"font-semibold text-3xl p-4 dark:text-white"},"The Task Project",-1),Ax=J("h3",{class:"font-medium text-2xl p-2 dark:text-white"}," Please login or signup to start your task list! ",-1);function Px(t,e,n,s,r,i){const o=ze("Icon"),a=ze("Switch"),l=ze("base-header"),c=ze("login-component"),u=ze("error-message"),d=ze("content-box");return Be(),Je(Le,null,[ie(l,null,{default:Xe(()=>[Sx,J("div",kx,[ie(o,{icon:"iconamoon:mode-light",color:"black",width:"26",height:"26"}),ie(a,{onClick:e[0]||(e[0]=f=>s.toggleDark()),modelValue:s.isDark,"onUpdate:modelValue":e[1]||(e[1]=f=>s.isDark=f),class:Jn([s.isDark?"bg-gray-900":"bg-gray-700","relative inline-flex h-6 w-11 items-center rounded-full transition-colors"])},{default:Xe(()=>[J("span",{class:Jn([s.isDark?"translate-x-6":"translate-x-1","inline-block h-4 w-4 transform rounded-full bg-white transition-transform"])},null,2)]),_:1},8,["modelValue","class"]),ie(o,{icon:"material-symbols:dark-mode-outline",color:"black",width:"26",height:"26"})])]),_:1}),ie(d,null,{default:Xe(()=>[Rx,Ax,ie(c,{onEmitUser:s.signupOrLogin},null,8,["onEmitUser"]),s.errMsg?(Be(),mc(u,{key:0},{default:Xe(()=>[qn(Yi(s.errMsg),1)]),_:1})):Wy("",!0)]),_:1})],64)}const xx=Ft(Tx,[["render",Px]]),Nx={},Ox=J("br",null,null,-1),Mx={class:"rounded-xl shadow-md p-10 w-fit mx-auto m-32-auto place-content-center grid place-items-center dark:bg-sky-950"};function Dx(t,e){return Be(),Je(Le,null,[Ox,J("div",Mx,[ui(t.$slots,"default")])],64)}const z_=Ft(Nx,[["render",Dx]]),Lx={components:{ContentBox:z_,BaseHeader:Wc}},Fx=J("div",{class:"py-0 px-3 font-semibold dark:text-white"},"Task Project",-1),Ux=J("h2",{class:"font-semibold p-4 dark:text-white"},"Page Not Found",-1),$x={class:"dark:text-white"};function Bx(t,e,n,s,r,i){const o=ze("base-header"),a=ze("router-link"),l=ze("content-box");return Be(),Je(Le,null,[ie(o,null,{default:Xe(()=>[Fx]),_:1}),J("section",null,[ie(l,{class:"dark:bg-sky-950"},{default:Xe(()=>[Ux,J("div",$x,[qn(" This page could not be found - do you want to return to "),ie(a,{to:"/login",class:"underline underline-offset-2"},{default:Xe(()=>[qn("login")]),_:1}),qn("? ")])]),_:1})])],64)}const jx=Ft(Lx,[["render",Bx]]),Hx=pE({history:Pw(),routes:[{path:"/",redirect:"login"},{path:"/login",component:xx},{path:"/tasks",name:"Tasks",component:()=>nw(()=>import(lx),[]),meta:{requiresAuth:!0}},{path:"/:notFound(.*)",component:jx}]});var Wx="firebase",Vx="11.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn(Wx,Vx,"app");const Kx={apiKey:"AIzaSyD6rOiOiFAkse6Y3_hdzvP-Z1zRv20wrJg",authDomain:"taskproject-caf25.firebaseapp.com",projectId:"taskproject-caf25",storageBucket:"taskproject-caf25.firebasestorage.app",messagingSenderId:"1061401138693",appId:"1:1061401138693:web:03fc3339b03b4cb79eee6c",databaseURL:"https://taskproject-caf25-default-rtdb.firebaseio.com/"};Oc(Kx);const Ga=Uu(),zx={async refreshTasks(t){const e=Kn(Ga,"tasks");V_(e,n=>{const s=n.val();t.commit("setTasks",s)})},async submitData(t,e){const n=e.toString();if(n!==""){const s=Kn(Ga,"tasks"),r=xP(s),i=Jr().currentUser;if(!i){console.error("Usuário não autenticado");return}await Lu(r,{taskText:n,userUID:i.uid})}},async deleteTask(t,e){const n=e.toString(),s=Kn(Ga,"tasks/"+n);W_(s).then(()=>{console.log("Remove succeeded.")}).catch(r=>{console.error("Remove failed: "+r.message)})}},qx={taskArray(t){return t.taskArray},taskText(t){return t.taskText}},Gx={setTasks(t,e){t.taskArray=e,console.log(t.taskArray)},registerTasks(t,e){t.taskArray.push(e)}},Yx={namespace:!0,state(){return{taskArray:[],taskText:""}},actions:zx,getters:qx,mutations:Gx},Qx=OE({modules:{task:Yx}});const Jx={},Xx={class:"min-h-screen dark:bg-gray-900"};function Zx(t,e){const n=ze("router-view");return Be(),Je("div",Xx,[ie(n)])}const eN=Ft(Jx,[["render",Zx]]),tN={},nN={class:"bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow dark:bg-sky-800 dark:text-white"};function sN(t,e){return Be(),Je("div",null,[J("button",nN,[ui(t.$slots,"default")])])}const rN=Ft(tN,[["render",sN]]),iN={apiKey:"AIzaSyD6rOiOiFAkse6Y3_hdzvP-Z1zRv20wrJg",authDomain:"taskproject-caf25.firebaseapp.com",projectId:"taskproject-caf25",storageBucket:"taskproject-caf25.firebasestorage.app",messagingSenderId:"1061401138693",appId:"1:1061401138693:web:03fc3339b03b4cb79eee6c",databaseURL:"https://taskproject-caf25-default-rtdb.firebaseio.com/"},hr=Lb(eN);Oc(iN);Uu();hr.component("content-box",z_);hr.component("base-button",rN);hr.use(Zb);hr.use(Qx);hr.use(Hx);hr.mount("#app");
