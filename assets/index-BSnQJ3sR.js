(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const Ol="186",Lr={ROTATE:0,DOLLY:1,PAN:2},Pr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},md=0,Nc=1,gd=2,oa=1,Qu=2,ns=3,tr=0,pn=1,_n=2,Ai=0,ss=1,Fc=2,Oc=3,Bc=4,_d=5,Cr=100,xd=101,vd=102,Md=103,Sd=104,yd=200,bd=201,Ed=202,Td=203,ju=204,th=205,wd=206,Ad=207,Rd=208,Cd=209,Pd=210,Dd=211,Ld=212,Id=213,Ud=214,Fo=0,Oo=1,Bo=2,ls=3,zo=4,ko=5,Go=6,Ho=7,eh=0,Nd=1,Fd=2,si=0,nh=1,ih=2,rh=3,Bl=4,sh=5,ah=6,oh=7,lh=300,er=301,Or=302,$a=303,Ka=304,Fa=306,Vo=1e3,wi=1001,Wo=1002,Ze=1003,Od=1004,Rs=1005,en=1006,Za=1007,Zi=1008,xn=1009,ch=1010,uh=1011,cs=1012,zl=1013,ci=1014,ei=1015,ui=1016,kl=1017,Gl=1018,us=1020,hh=35902,dh=35899,fh=1021,ph=1022,kn=1023,Pi=1026,Ji=1027,mh=1028,Hl=1029,nr=1030,Vl=1031,Wl=1033,la=33776,ca=33777,ua=33778,ha=33779,Xo=35840,Yo=35841,qo=35842,$o=35843,Ko=36196,Zo=37492,Jo=37496,Qo=37488,jo=37489,xa=37490,tl=37491,el=37808,nl=37809,il=37810,rl=37811,sl=37812,al=37813,ol=37814,ll=37815,cl=37816,ul=37817,hl=37818,dl=37819,fl=37820,pl=37821,ml=36492,gl=36494,_l=36495,xl=36283,vl=36284,va=36285,Ml=36286,Bd=3200,Sl=0,zd=1,Gi="",on="srgb",Ma="srgb-linear",Sa="linear",le="srgb",Ja=7680,kd=519,Gd=512,Hd=513,Vd=514,Xl=515,Wd=516,Xd=517,Yl=518,Yd=519,gh=35044,zc="300 es",ni=2e3,hs=2001;function qd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ya(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $d(){const n=ya("canvas");return n.style.display="block",n}const kc={};function ba(...n){const t="THREE."+n.shift();console.log(t,...n)}function _h(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function It(...n){n=_h(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ee(...n){n=_h(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Ir(...n){const t=n.join(" ");t in kc||(kc[t]=!0,It(...n))}function Kd(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const Zd={[Fo]:Oo,[Bo]:Go,[zo]:Ho,[ls]:ko,[Oo]:Fo,[Go]:Bo,[Ho]:zo,[ko]:ls};class Vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gc=1234567;const Ur=Math.PI/180,ds=180/Math.PI;function Ri(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]).toLowerCase()}function Vt(n,t,e){return Math.max(t,Math.min(e,n))}function ql(n,t){return(n%t+t)%t}function Jd(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function Qd(n,t,e){return n!==t?(e-n)/(t-n):0}function as(n,t,e){return(1-e)*n+e*t}function jd(n,t,e,i){return as(n,t,1-Math.exp(-e*i))}function tf(n,t=1){return t-Math.abs(ql(n,t*2)-t)}function ef(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function nf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function rf(n,t){return n+Math.floor(Math.random()*(t-n+1))}function sf(n,t){return n+Math.random()*(t-n)}function af(n){return n*(.5-Math.random())}function of(n){n!==void 0&&(Gc=n);let t=Gc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function lf(n){return n*Ur}function cf(n){return n*ds}function uf(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function hf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function df(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ff(n,t,e,i,r){const s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+i)/2),h=a((t+i)/2),d=s((t-i)/2),u=a((t-i)/2),p=s((i-t)/2),_=a((i-t)/2);switch(r){case"XYX":n.set(o*h,c*d,c*u,o*l);break;case"YZY":n.set(c*u,o*h,c*d,o*l);break;case"ZXZ":n.set(c*d,c*u,o*h,o*l);break;case"XZX":n.set(o*h,c*_,c*p,o*l);break;case"YXY":n.set(c*p,o*h,c*_,o*l);break;case"ZYZ":n.set(c*_,c*p,o*h,o*l);break;default:It("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function On(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ce(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const fe={DEG2RAD:Ur,RAD2DEG:ds,generateUUID:Ri,clamp:Vt,euclideanModulo:ql,mapLinear:Jd,inverseLerp:Qd,lerp:as,damp:jd,pingpong:tf,smoothstep:ef,smootherstep:nf,randInt:rf,randFloat:sf,randFloatSpread:af,seededRandom:of,degToRad:lf,radToDeg:cf,isPowerOfTwo:uf,ceilPowerOfTwo:hf,floorPowerOfTwo:df,setQuaternionFromProperEuler:ff,normalize:ce,denormalize:On},Mc=class Mc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Vt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mc.prototype.isVector2=!0;let Pt=Mc;class Wn{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],d=i[r+3],u=s[a+0],p=s[a+1],_=s[a+2],S=s[a+3];if(d!==S||c!==u||l!==p||h!==_){let m=c*u+l*p+h*_+d*S;m<0&&(u=-u,p=-p,_=-_,S=-S,m=-m);let f=1-o;if(m<.9995){const b=Math.acos(m),C=Math.sin(b);f=Math.sin(f*b)/C,o=Math.sin(o*b)/C,c=c*f+u*o,l=l*f+p*o,h=h*f+_*o,d=d*f+S*o}else{c=c*f+u*o,l=l*f+p*o,h=h*f+_*o,d=d*f+S*o;const b=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=b,l*=b,h*=b,d*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],d=s[a],u=s[a+1],p=s[a+2],_=s[a+3];return t[e]=o*_+h*d+c*p-l*u,t[e+1]=c*_+h*u+l*d-o*p,t[e+2]=l*_+h*p+o*u-c*d,t[e+3]=h*_-o*d-c*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),d=o(s/2),u=c(i/2),p=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=u*h*d+l*p*_,this._y=l*p*d-u*h*_,this._z=l*h*_+u*p*d,this._w=l*h*d-u*p*_;break;case"YXZ":this._x=u*h*d+l*p*_,this._y=l*p*d-u*h*_,this._z=l*h*_-u*p*d,this._w=l*h*d+u*p*_;break;case"ZXY":this._x=u*h*d-l*p*_,this._y=l*p*d+u*h*_,this._z=l*h*_+u*p*d,this._w=l*h*d-u*p*_;break;case"ZYX":this._x=u*h*d-l*p*_,this._y=l*p*d+u*h*_,this._z=l*h*_-u*p*d,this._w=l*h*d+u*p*_;break;case"YZX":this._x=u*h*d+l*p*_,this._y=l*p*d+u*h*_,this._z=l*h*_-u*p*d,this._w=l*h*d-u*p*_;break;case"XZY":this._x=u*h*d-l*p*_,this._y=l*p*d-u*h*_,this._z=l*h*_+u*p*d,this._w=l*h*d+u*p*_;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+i*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Sc=class Sc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*i),h=2*(o*e-s*r),d=2*(s*i-a*e);return this.x=e+c*l+a*d-o*h,this.y=i+c*h+o*l-s*d,this.z=r+c*d+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Qa.copy(this).projectOnVector(t),this.sub(Qa)}reflect(t){return this.sub(Qa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Vt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sc.prototype.isVector3=!0;let A=Sc;const Qa=new A,Hc=new Wn,yc=class yc{constructor(t,e,i,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l)}set(t,e,i,r,s,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],p=i[5],_=i[8],S=r[0],m=r[3],f=r[6],b=r[1],C=r[4],E=r[7],x=r[2],M=r[5],w=r[8];return s[0]=a*S+o*b+c*x,s[3]=a*m+o*C+c*M,s[6]=a*f+o*E+c*w,s[1]=l*S+h*b+d*x,s[4]=l*m+h*C+d*M,s[7]=l*f+h*E+d*w,s[2]=u*S+p*b+_*x,s[5]=u*m+p*C+_*M,s[8]=u*f+p*E+_*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*s,p=l*s-a*c,_=e*d+i*u+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return t[0]=d*S,t[1]=(r*l-h*i)*S,t[2]=(o*i-r*a)*S,t[3]=u*S,t[4]=(h*e-r*c)*S,t[5]=(r*s-o*e)*S,t[6]=p*S,t[7]=(i*c-l*e)*S,t[8]=(a*e-i*s)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Ir("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ja.makeScale(t,e)),this}rotate(t){return Ir("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ja.makeRotation(-t)),this}translate(t,e){return Ir("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ja.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};yc.prototype.isMatrix3=!0;let Ft=yc;const ja=new Ft,Vc=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wc=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pf(){const n={enabled:!0,workingColorSpace:Ma,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===le&&(r.r=Ci(r.r),r.g=Ci(r.g),r.b=Ci(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===le&&(r.r=Nr(r.r),r.g=Nr(r.g),r.b=Nr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Gi?Sa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ir("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ir("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ma]:{primaries:t,whitePoint:i,transfer:Sa,toXYZ:Vc,fromXYZ:Wc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:t,whitePoint:i,transfer:le,toXYZ:Vc,fromXYZ:Wc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),n}const Zt=pf();function Ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Nr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let cr;class mf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{cr===void 0&&(cr=ya("canvas")),cr.width=t.width,cr.height=t.height;const r=cr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=cr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ya("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ci(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ci(e[i]/255)*255):e[i]=Ci(e[i]);return{data:e,width:t.width,height:t.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gf=0;class $l{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=Ri(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(to(r[a].image)):s.push(to(r[a]))}else s=to(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function to(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?mf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(It("Texture: Unable to serialize Texture."),{})}let _f=0;const eo=new A;class nn extends Vi{constructor(t=nn.DEFAULT_IMAGE,e=nn.DEFAULT_MAPPING,i=wi,r=wi,s=en,a=Zi,o=kn,c=xn,l=nn.DEFAULT_ANISOTROPY,h=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Ri(),this.name="",this.source=new $l(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(eo).x}get height(){return this.source.getSize(eo).y}get depth(){return this.source.getSize(eo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){It(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){It(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vo:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case Wo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vo:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case Wo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=lh;nn.DEFAULT_ANISOTROPY=1;const bc=class bc{constructor(t=0,e=0,i=0,r=1){this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],_=c[9],S=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+S)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const C=(l+1)/2,E=(p+1)/2,x=(f+1)/2,M=(h+u)/4,w=(d+S)/4,g=(_+m)/4;return C>E&&C>x?C<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(C),r=M/i,s=w/i):E>x?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=M/r,s=g/r):x<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(x),i=w/s,r=g/s),this.set(i,r,s,e),this}let b=Math.sqrt((m-_)*(m-_)+(d-S)*(d-S)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(d-S)/b,this.z=(u-h)/b,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bc.prototype.isVector4=!0;let Re=bc;class xf extends Vi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:i.depth},s=new nn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new $l(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends xf{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class xh extends nn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vf extends nn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Na=class Na{constructor(t,e,i,r,s,a,o,c,l,h,d,u,p,_,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l,h,d,u,p,_,S,m)}set(t,e,i,r,s,a,o,c,l,h,d,u,p,_,S,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=_,f[11]=S,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Na().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,r=1/ur.setFromMatrixColumn(t,0).length(),s=1/ur.setFromMatrixColumn(t,1).length(),a=1/ur.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=a*h,p=a*d,_=o*h,S=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+_*l,e[5]=u-S*l,e[9]=-o*c,e[2]=S-u*l,e[6]=_+p*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,p=c*d,_=l*h,S=l*d;e[0]=u+S*o,e[4]=_*o-p,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-_,e[6]=S+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,p=c*d,_=l*h,S=l*d;e[0]=u-S*o,e[4]=-a*d,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*h,e[9]=S-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,p=a*d,_=o*h,S=o*d;e[0]=c*h,e[4]=_*l-p,e[8]=u*l+S,e[1]=c*d,e[5]=S*l+u,e[9]=p*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,p=a*l,_=o*c,S=o*l;e[0]=c*h,e[4]=S-u*d,e[8]=_*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*d+_,e[10]=u-S*d}else if(t.order==="XZY"){const u=a*c,p=a*l,_=o*c,S=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+S,e[5]=a*h,e[9]=p*d-_,e[2]=_*d-p,e[6]=o*h,e[10]=S*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mf,t,Sf)}lookAt(t,e,i){const r=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Fi.crossVectors(i,mn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Fi.crossVectors(i,mn)),Fi.normalize(),Cs.crossVectors(mn,Fi),r[0]=Fi.x,r[4]=Cs.x,r[8]=mn.x,r[1]=Fi.y,r[5]=Cs.y,r[9]=mn.y,r[2]=Fi.z,r[6]=Cs.z,r[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],p=i[13],_=i[2],S=i[6],m=i[10],f=i[14],b=i[3],C=i[7],E=i[11],x=i[15],M=r[0],w=r[4],g=r[8],T=r[12],P=r[1],L=r[5],O=r[9],B=r[13],N=r[2],k=r[6],q=r[10],X=r[14],tt=r[3],Y=r[7],Q=r[11],nt=r[15];return s[0]=a*M+o*P+c*N+l*tt,s[4]=a*w+o*L+c*k+l*Y,s[8]=a*g+o*O+c*q+l*Q,s[12]=a*T+o*B+c*X+l*nt,s[1]=h*M+d*P+u*N+p*tt,s[5]=h*w+d*L+u*k+p*Y,s[9]=h*g+d*O+u*q+p*Q,s[13]=h*T+d*B+u*X+p*nt,s[2]=_*M+S*P+m*N+f*tt,s[6]=_*w+S*L+m*k+f*Y,s[10]=_*g+S*O+m*q+f*Q,s[14]=_*T+S*B+m*X+f*nt,s[3]=b*M+C*P+E*N+x*tt,s[7]=b*w+C*L+E*k+x*Y,s[11]=b*g+C*O+E*q+x*Q,s[15]=b*T+C*B+E*X+x*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],p=t[14],_=t[3],S=t[7],m=t[11],f=t[15],b=c*p-l*u,C=o*p-l*d,E=o*u-c*d,x=a*p-l*h,M=a*u-c*h,w=a*d-o*h;return e*(S*b-m*C+f*E)-i*(_*b-m*x+f*M)+r*(_*C-S*x+f*w)-s*(_*E-S*M+m*w)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-i*(s*h-o*c)+r*(s*l-a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],p=t[11],_=t[12],S=t[13],m=t[14],f=t[15],b=e*o-i*a,C=e*c-r*a,E=e*l-s*a,x=i*c-r*o,M=i*l-s*o,w=r*l-s*c,g=h*S-d*_,T=h*m-u*_,P=h*f-p*_,L=d*m-u*S,O=d*f-p*S,B=u*f-p*m,N=b*B-C*O+E*L+x*P-M*T+w*g;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/N;return t[0]=(o*B-c*O+l*L)*k,t[1]=(r*O-i*B-s*L)*k,t[2]=(S*w-m*M+f*x)*k,t[3]=(u*M-d*w-p*x)*k,t[4]=(c*P-a*B-l*T)*k,t[5]=(e*B-r*P+s*T)*k,t[6]=(m*E-_*w-f*C)*k,t[7]=(h*w-u*E+p*C)*k,t[8]=(a*O-o*P+l*g)*k,t[9]=(i*P-e*O-s*g)*k,t[10]=(_*M-S*E+f*b)*k,t[11]=(d*E-h*M-p*b)*k,t[12]=(o*T-a*L-c*g)*k,t[13]=(e*L-i*T+r*g)*k,t[14]=(S*C-_*x-m*b)*k,t[15]=(h*x-d*C+u*b)*k,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,d=o+o,u=s*l,p=s*h,_=s*d,S=a*h,m=a*d,f=o*d,b=c*l,C=c*h,E=c*d,x=i.x,M=i.y,w=i.z;return r[0]=(1-(S+f))*x,r[1]=(p+E)*x,r[2]=(_-C)*x,r[3]=0,r[4]=(p-E)*M,r[5]=(1-(u+f))*M,r[6]=(m+b)*M,r[7]=0,r[8]=(_+C)*w,r[9]=(m-b)*w,r[10]=(1-(u+S))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let a=ur.set(r[0],r[1],r[2]).length();const o=ur.set(r[4],r[5],r[6]).length(),c=ur.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Pn.copy(this);const l=1/a,h=1/o,d=1/c;return Pn.elements[0]*=l,Pn.elements[1]*=l,Pn.elements[2]*=l,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=d,Pn.elements[9]*=d,Pn.elements[10]*=d,e.setFromRotationMatrix(Pn),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,r,s,a,o=ni,c=!1){const l=this.elements,h=2*s/(e-t),d=2*s/(i-r),u=(e+t)/(e-t),p=(i+r)/(i-r);let _,S;if(c)_=s/(a-s),S=a*s/(a-s);else if(o===ni)_=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===hs)_=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=ni,c=!1){const l=this.elements,h=2/(e-t),d=2/(i-r),u=-(e+t)/(e-t),p=-(i+r)/(i-r);let _,S;if(c)_=1/(a-s),S=a/(a-s);else if(o===ni)_=-2/(a-s),S=-(a+s)/(a-s);else if(o===hs)_=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Na.prototype.isMatrix4=!0;let Te=Na;const ur=new A,Pn=new Te,Mf=new A(0,0,0),Sf=new A(1,1,1),Fi=new A,Cs=new A,mn=new A,Xc=new Te,Yc=new Wn;class hi{constructor(t=0,e=0,i=0,r=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],d=r[2],u=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Xc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yc.setFromEuler(this),this.setFromQuaternion(Yc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class vh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yf=0;const qc=new A,hr=new Wn,gi=new Te,Ps=new A,Xr=new A,bf=new A,Ef=new Wn,$c=new A(1,0,0),Kc=new A(0,1,0),Zc=new A(0,0,1),Jc={type:"added"},Tf={type:"removed"},dr={type:"childadded",child:null},no={type:"childremoved",child:null};class Ge extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DEFAULT_UP.clone();const t=new A,e=new hi,i=new Wn,r=new A(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Te},normalMatrix:{value:new Ft}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=Ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hr.setFromAxisAngle(t,e),this.quaternion.multiply(hr),this}rotateOnWorldAxis(t,e){return hr.setFromAxisAngle(t,e),this.quaternion.premultiply(hr),this}rotateX(t){return this.rotateOnAxis($c,t)}rotateY(t){return this.rotateOnAxis(Kc,t)}rotateZ(t){return this.rotateOnAxis(Zc,t)}translateOnAxis(t,e){return qc.copy(t).applyQuaternion(this.quaternion),this.position.add(qc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($c,t)}translateY(t){return this.translateOnAxis(Kc,t)}translateZ(t){return this.translateOnAxis(Zc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ps.copy(t):Ps.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Xr,Ps,this.up):gi.lookAt(Ps,Xr,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),hr.setFromRotationMatrix(gi),this.quaternion.premultiply(hr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jc),dr.child=t,this.dispatchEvent(dr),dr.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tf),no.child=t,this.dispatchEvent(no),no.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jc),dr.child=t,this.dispatchEvent(dr),dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,t,bf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,Ef,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*r,s[13]+=i-s[1]*e-s[5]*i-s[9]*r,s[14]+=r-s[2]*e-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ge.DEFAULT_UP=new A(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class xe extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wf={type:"move"};class io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const S of t.hand.values()){const m=e.getJointPose(S,i),f=this._getHandJoint(l,S);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,_=.005;l.inputState.pinching&&u>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wf)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new xe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function ro(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Wt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Zt.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=Zt.workingColorSpace){if(t=ql(t,1),e=Vt(e,0,1),i=Vt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=ro(a,s,t+1/3),this.g=ro(a,s,t),this.b=ro(a,s,t-1/3)}return Zt.colorSpaceToWorking(this,r),this}setStyle(t,e=on){function i(s){s!==void 0&&parseFloat(s)<1&&It("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:It("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);It("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){const i=Mh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):It("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}copyLinearToSRGB(t){return this.r=Nr(t.r),this.g=Nr(t.g),this.b=Nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return Zt.workingToColorSpace(tn.copy(this),t),Math.round(Vt(tn.r*255,0,255))*65536+Math.round(Vt(tn.g*255,0,255))*256+Math.round(Vt(tn.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(tn.copy(this),e);const i=tn.r,r=tn.g,s=tn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=on){Zt.workingToColorSpace(tn.copy(this),t);const e=tn.r,i=tn.g,r=tn.b;return t!==on?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Oi),this.setHSL(Oi.h+t,Oi.s+e,Oi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Oi),t.getHSL(Ds);const i=as(Oi.h,Ds.h,e),r=as(Oi.s,Ds.s,e),s=as(Oi.l,Ds.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Wt;Wt.NAMES=Mh;class Kl{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Wt(t),this.near=e,this.far=i}clone(){return new Kl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Af extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Dn=new A,_i=new A,so=new A,xi=new A,fr=new A,pr=new A,Qc=new A,ao=new A,oo=new A,lo=new A,co=new Re,uo=new Re,ho=new Re;class vn{constructor(t=new A,e=new A,i=new A){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Dn.subVectors(t,e),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Dn.subVectors(r,e),_i.subVectors(i,e),so.subVectors(t,e);const a=Dn.dot(Dn),o=Dn.dot(_i),c=Dn.dot(so),l=_i.dot(_i),h=_i.dot(so),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(l*c-o*h)*u,_=(a*h-o*c)*u;return s.set(1-p-_,_,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(t,e,i,r,s,a,o,c){return this.getBarycoord(t,e,i,r,xi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,xi.x),c.addScaledVector(a,xi.y),c.addScaledVector(o,xi.z),c)}static getInterpolatedAttribute(t,e,i,r,s,a){return co.setScalar(0),uo.setScalar(0),ho.setScalar(0),co.fromBufferAttribute(t,e),uo.fromBufferAttribute(t,i),ho.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(co,s.x),a.addScaledVector(uo,s.y),a.addScaledVector(ho,s.z),a}static isFrontFacing(t,e,i,r){return Dn.subVectors(i,e),_i.subVectors(t,e),Dn.cross(_i).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Dn.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return vn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;fr.subVectors(r,i),pr.subVectors(s,i),ao.subVectors(t,i);const c=fr.dot(ao),l=pr.dot(ao);if(c<=0&&l<=0)return e.copy(i);oo.subVectors(t,r);const h=fr.dot(oo),d=pr.dot(oo);if(h>=0&&d<=h)return e.copy(r);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(i).addScaledVector(fr,a);lo.subVectors(t,s);const p=fr.dot(lo),_=pr.dot(lo);if(_>=0&&p<=_)return e.copy(s);const S=p*l-c*_;if(S<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(i).addScaledVector(pr,o);const m=h*_-p*d;if(m<=0&&d-h>=0&&p-_>=0)return Qc.subVectors(s,r),o=(d-h)/(d-h+(p-_)),e.copy(r).addScaledVector(Qc,o);const f=1/(m+S+u);return a=S*f,o=u*f,e.copy(i).addScaledVector(fr,a).addScaledVector(pr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Vr{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ln):Ln.fromBufferAttribute(s,a),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ls.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ls.copy(i.boundingBox)),Ls.applyMatrix4(t.matrixWorld),this.union(Ls)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yr),Is.subVectors(this.max,Yr),mr.subVectors(t.a,Yr),gr.subVectors(t.b,Yr),_r.subVectors(t.c,Yr),Bi.subVectors(gr,mr),zi.subVectors(_r,gr),Xi.subVectors(mr,_r);let e=[0,-Bi.z,Bi.y,0,-zi.z,zi.y,0,-Xi.z,Xi.y,Bi.z,0,-Bi.x,zi.z,0,-zi.x,Xi.z,0,-Xi.x,-Bi.y,Bi.x,0,-zi.y,zi.x,0,-Xi.y,Xi.x,0];return!fo(e,mr,gr,_r,Is)||(e=[1,0,0,0,1,0,0,0,1],!fo(e,mr,gr,_r,Is))?!1:(Us.crossVectors(Bi,zi),e=[Us.x,Us.y,Us.z],fo(e,mr,gr,_r,Is))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const vi=[new A,new A,new A,new A,new A,new A,new A,new A],Ln=new A,Ls=new Vr,mr=new A,gr=new A,_r=new A,Bi=new A,zi=new A,Xi=new A,Yr=new A,Is=new A,Us=new A,Yi=new A;function fo(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Yi.fromArray(n,s);const o=r.x*Math.abs(Yi.x)+r.y*Math.abs(Yi.y)+r.z*Math.abs(Yi.z),c=t.dot(Yi),l=e.dot(Yi),h=i.dot(Yi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Fe=new A,Ns=new Pt;let Rf=0;class Hn extends Vi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=gh,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ns.fromBufferAttribute(this,e),Ns.applyMatrix3(t),this.setXY(e,Ns.x,Ns.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=On(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ce(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=On(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=On(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=On(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=On(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),r=ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),r=ce(r,this.array),s=ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Sh extends Hn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class yh extends Hn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ae extends Hn{constructor(t,e,i){super(new Float32Array(t),e,i)}}const Cf=new Vr,qr=new A,po=new A;class Oa{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Cf.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qr.subVectors(t,this.center);const e=qr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(qr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(po.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qr.copy(t.center).add(po)),this.expandByPoint(qr.copy(t.center).sub(po))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Pf=0;const yn=new Te,mo=new Ge,xr=new A,gn=new Vr,$r=new Vr,Ye=new A;class Ie extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qd(t)?yh:Sh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ft().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,i){return yn.makeTranslation(t,e,i),this.applyMatrix4(yn),this}scale(t,e,i){return yn.makeScale(t,e,i),this.applyMatrix4(yn),this}lookAt(t){return mo.lookAt(t),mo.updateMatrix(),this.applyMatrix4(mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ae(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];$r.setFromBufferAttribute(o),this.morphTargetsRelative?(Ye.addVectors(gn.min,$r.min),gn.expandByPoint(Ye),Ye.addVectors(gn.max,$r.max),gn.expandByPoint(Ye)):(gn.expandByPoint($r.min),gn.expandByPoint($r.max))}gn.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Ye.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ye));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ye.fromBufferAttribute(o,l),c&&(xr.fromBufferAttribute(t,l),Ye.add(xr)),r=Math.max(r,i.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Hn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let g=0;g<i.count;g++)o[g]=new A,c[g]=new A;const l=new A,h=new A,d=new A,u=new Pt,p=new Pt,_=new Pt,S=new A,m=new A;function f(g,T,P){l.fromBufferAttribute(i,g),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,P),u.fromBufferAttribute(s,g),p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,P),h.sub(l),d.sub(l),p.sub(u),_.sub(u);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(S.copy(h).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(L),o[g].add(S),o[T].add(S),o[P].add(S),c[g].add(m),c[T].add(m),c[P].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let g=0,T=b.length;g<T;++g){const P=b[g],L=P.start,O=P.count;for(let B=L,N=L+O;B<N;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const C=new A,E=new A,x=new A,M=new A;function w(g){x.fromBufferAttribute(r,g),M.copy(x);const T=o[g];C.copy(T),C.sub(x.multiplyScalar(x.dot(T))).normalize(),E.crossVectors(M,T);const L=E.dot(c[g])<0?-1:1;a.setXYZW(g,C.x,C.y,C.z,L)}for(let g=0,T=b.length;g<T;++g){const P=b[g],L=P.start,O=P.count;for(let B=L,N=L+O;B<N;B+=3)w(t.getX(B+0)),w(t.getX(B+1)),w(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Hn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new A,s=new A,a=new A,o=new A,c=new A,l=new A,h=new A,d=new A;if(t)for(let u=0,p=t.count;u<p;u+=3){const _=t.getX(u+0),S=t.getX(u+1),m=t.getX(u+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,S),a.fromBufferAttribute(e,m),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,S),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)r.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let p=0,_=0;for(let S=0,m=c.length;S<m;S++){o.isInterleavedBufferAttribute?p=c[S]*o.data.stride+o.offset:p=c[S]*h;for(let f=0;f<h;f++)u[_++]=l[p++]}return new Hn(u,h,d)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ie,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,i);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],p=t(u,i);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Df{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=gh,this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const sn=new A;class Ea{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=On(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ce(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=On(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=On(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=On(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=On(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),r=ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),r=ce(r,this.array),s=ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){ba("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Hn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ea(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ba("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const go=new A,Lf=new A,If=new Ft;class bi{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=go.subVectors(i,e).cross(Lf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const r=t.delta(go),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(r,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||If.getNormalMatrix(t),r=this.coplanarPoint(go).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Uf=0;class ar extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=ss,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ju,this.blendDst=th,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ja,this.stencilZFail=Ja,this.stencilZPass=Ja,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){It(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){It(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Wt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new bi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Pt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Nf extends ar{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let vr;const Kr=new A,Mr=new A,Sr=new A,yr=new Pt,Zr=new Pt,bh=new Te,Fs=new A,Jr=new A,Os=new A,jc=new Pt,_o=new Pt,tu=new Pt;class Ff extends Ge{constructor(t=new Nf){if(super(),this.isSprite=!0,this.type="Sprite",vr===void 0){vr=new Ie;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Df(e,5);vr.setIndex([0,1,2,0,2,3]),vr.setAttribute("position",new Ea(i,3,0,!1)),vr.setAttribute("uv",new Ea(i,2,3,!1))}this.geometry=vr,this.material=t,this.center=new Pt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ee('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Mr.setFromMatrixScale(this.matrixWorld),bh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Sr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Mr.multiplyScalar(-Sr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Bs(Fs.set(-.5,-.5,0),Sr,a,Mr,r,s),Bs(Jr.set(.5,-.5,0),Sr,a,Mr,r,s),Bs(Os.set(.5,.5,0),Sr,a,Mr,r,s),jc.set(0,0),_o.set(1,0),tu.set(1,1);let o=t.ray.intersectTriangle(Fs,Jr,Os,!1,Kr);if(o===null&&(Bs(Jr.set(-.5,.5,0),Sr,a,Mr,r,s),_o.set(0,1),o=t.ray.intersectTriangle(Fs,Os,Jr,!1,Kr),o===null))return;const c=t.ray.origin.distanceTo(Kr);c<t.near||c>t.far||e.push({distance:c,point:Kr.clone(),uv:vn.getInterpolation(Kr,Fs,Jr,Os,jc,_o,tu,new Pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Bs(n,t,e,i,r,s){yr.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(Zr.x=s*yr.x-r*yr.y,Zr.y=r*yr.x+s*yr.y):Zr.copy(yr),n.copy(t),n.x+=Zr.x,n.y+=Zr.y,n.applyMatrix4(bh)}const Mi=new A,xo=new A,zs=new A,ks=new A;class Zl{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mi.copy(this.origin).addScaledVector(this.direction,e),Mi.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){xo.copy(t).add(e).multiplyScalar(.5),zs.copy(e).sub(t).normalize(),ks.copy(this.origin).sub(xo);const s=t.distanceTo(e)*.5,a=-this.direction.dot(zs),o=ks.dot(this.direction),c=-ks.dot(zs),l=ks.lengthSq(),h=Math.abs(1-a*a);let d,u,p,_;if(h>0)if(d=a*c-o,u=a*o-c,_=s*h,d>=0)if(u>=-_)if(u<=_){const S=1/h;d*=S,u*=S,p=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u<=-_?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l):u<=_?(d=0,u=Math.min(Math.max(-s,-c),s),p=u*(u+2*c)+l):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(xo).addScaledVector(zs,u),p}intersectSphere(t,e){if(t.radius<0)return null;Mi.subVectors(t.center,this.origin);const i=Mi.dot(this.direction),r=Mi.dot(Mi)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,r=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,r=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Mi)!==null}intersectTriangle(t,e,i,r,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,p=t.z-a.z,_=e.x-a.x,S=e.y-a.y,m=e.z-a.z,f=i.x-a.x,b=i.y-a.y,C=i.z-a.z,E=Math.abs(c),x=Math.abs(l),M=Math.abs(h);let w,g,T,P,L,O,B,N,k,q,X,tt;if(E>=x&&E>=M?(T=c,O=d,k=_,tt=f,c>=0?(w=l,g=h,P=u,L=p,B=S,N=m,q=b,X=C):(w=h,g=l,P=p,L=u,B=m,N=S,q=C,X=b)):x>=M?(T=l,O=u,k=S,tt=b,l>=0?(w=h,g=c,P=p,L=d,B=m,N=_,q=C,X=f):(w=c,g=h,P=d,L=p,B=_,N=m,q=f,X=C)):(T=h,O=p,k=m,tt=C,h>=0?(w=c,g=l,P=d,L=u,B=_,N=S,q=f,X=b):(w=l,g=c,P=u,L=d,B=S,N=_,q=b,X=f)),T===0)return null;const Y=w/T,Q=g/T,nt=1/T,ot=P-Y*O,yt=L-Q*O,pe=B-Y*k,Qt=N-Q*k,ie=q-Y*tt,K=X-Q*tt,et=ie*Qt-K*pe,bt=ot*K-yt*ie,Nt=pe*yt-Qt*ot;if(r){if(et<0||bt<0||Nt<0)return null}else if((et<0||bt<0||Nt<0)&&(et>0||bt>0||Nt>0))return null;const Mt=et+bt+Nt;if(Mt===0)return null;const Gt=nt*(et*O+bt*k+Nt*tt);return(Mt>0?Gt<0:Gt>0)?null:this.at(Gt/Mt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qn extends ar{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const eu=new Te,qi=new Zl,Gs=new Oa,nu=new A,Hs=new A,Vs=new A,Ws=new A,vo=new A,Xs=new A,iu=new A,Ys=new A;class Bt extends Ge{constructor(t=new Ie,e=new qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Xs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],d=s[c];h!==0&&(vo.fromBufferAttribute(d,t),a?Xs.addScaledVector(vo,h):Xs.addScaledVector(vo.sub(e),h))}e.add(Xs)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gs.copy(i.boundingSphere),Gs.applyMatrix4(s),qi.copy(t.ray).recast(t.near),!(Gs.containsPoint(qi.origin)===!1&&(qi.intersectSphere(Gs,nu)===null||qi.origin.distanceToSquared(nu)>(t.far-t.near)**2))&&(eu.copy(s).invert(),qi.copy(t.ray).applyMatrix4(eu),!(i.boundingBox!==null&&qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,qi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=u.length;_<S;_++){const m=u[_],f=a[m.materialIndex],b=Math.max(m.start,p.start),C=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=b,x=C;E<x;E+=3){const M=o.getX(E),w=o.getX(E+1),g=o.getX(E+2);r=qs(this,f,t,i,l,h,d,M,w,g),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=_,f=S;m<f;m+=3){const b=o.getX(m),C=o.getX(m+1),E=o.getX(m+2);r=qs(this,a,t,i,l,h,d,b,C,E),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,S=u.length;_<S;_++){const m=u[_],f=a[m.materialIndex],b=Math.max(m.start,p.start),C=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=b,x=C;E<x;E+=3){const M=E,w=E+1,g=E+2;r=qs(this,f,t,i,l,h,d,M,w,g),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),S=Math.min(c.count,p.start+p.count);for(let m=_,f=S;m<f;m+=3){const b=m,C=m+1,E=m+2;r=qs(this,a,t,i,l,h,d,b,C,E),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Of(n,t,e,i,r,s,a,o){let c;if(t.side===pn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,t.side===tr,o),c===null)return null;Ys.copy(o),Ys.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ys);return l<e.near||l>e.far?null:{distance:l,point:Ys.clone(),object:n}}function qs(n,t,e,i,r,s,a,o,c,l){n.getVertexPosition(o,Hs),n.getVertexPosition(c,Vs),n.getVertexPosition(l,Ws);const h=Of(n,t,e,i,Hs,Vs,Ws,iu);if(h){const d=new A;vn.getBarycoord(iu,Hs,Vs,Ws,d),r&&(h.uv=vn.getInterpolatedAttribute(r,o,c,l,d,new Pt)),s&&(h.uv1=vn.getInterpolatedAttribute(s,o,c,l,d,new Pt)),a&&(h.normal=vn.getInterpolatedAttribute(a,o,c,l,d,new A),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new A,materialIndex:0};vn.getNormal(Hs,Vs,Ws,u.normal),h.face=u,h.barycoord=d}return h}class Bf extends nn{constructor(t=null,e=1,i=1,r,s,a,o,c,l=Ze,h=Ze,d,u){super(null,a,o,c,l,h,r,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $i=new Oa,zf=new Pt(.5,.5),$s=new A;class Jl{constructor(t=new bi,e=new bi,i=new bi,r=new bi,s=new bi,a=new bi){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ni,i=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],d=s[5],u=s[6],p=s[7],_=s[8],S=s[9],m=s[10],f=s[11],b=s[12],C=s[13],E=s[14],x=s[15];if(r[0].setComponents(l-a,p-h,f-_,x-b).normalize(),r[1].setComponents(l+a,p+h,f+_,x+b).normalize(),r[2].setComponents(l+o,p+d,f+S,x+C).normalize(),r[3].setComponents(l-o,p-d,f-S,x-C).normalize(),i)r[4].setComponents(c,u,m,E).normalize(),r[5].setComponents(l-c,p-u,f-m,x-E).normalize();else if(r[4].setComponents(l-c,p-u,f-m,x-E).normalize(),e===ni)r[5].setComponents(l+c,p+u,f+m,x+E).normalize();else if(e===hs)r[5].setComponents(c,u,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(t){$i.center.set(0,0,0);const e=zf.distanceTo(t.center);return $i.radius=.7071067811865476+e,$i.applyMatrix4(t.matrixWorld),this.intersectsSphere($i)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if($s.x=r.normal.x>0?t.max.x:t.min.x,$s.y=r.normal.y>0?t.max.y:t.min.y,$s.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint($s)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Eh extends ar{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ta=new A,wa=new A,ru=new Te,Qr=new Zl,Ks=new Oa,Mo=new A,su=new A;class kf extends Ge{constructor(t=new Ie,e=new Eh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Ta.fromBufferAttribute(e,r-1),wa.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Ta.distanceTo(wa);t.setAttribute("lineDistance",new ae(i,1))}else It("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ks.copy(i.boundingSphere),Ks.applyMatrix4(r),Ks.radius+=s,t.ray.intersectsSphere(Ks)===!1)return;ru.copy(r).invert(),Qr.copy(t.ray).applyMatrix4(ru);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const p=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let S=p,m=_-1;S<m;S+=l){const f=h.getX(S),b=h.getX(S+1),C=Zs(this,t,Qr,c,f,b,S);C&&e.push(C)}if(this.isLineLoop){const S=h.getX(_-1),m=h.getX(p),f=Zs(this,t,Qr,c,S,m,_-1);f&&e.push(f)}}else{const p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let S=p,m=_-1;S<m;S+=l){const f=Zs(this,t,Qr,c,S,S+1,S);f&&e.push(f)}if(this.isLineLoop){const S=Zs(this,t,Qr,c,_-1,p,_-1);S&&e.push(S)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Zs(n,t,e,i,r,s,a){const o=n.geometry.attributes.position;if(Ta.fromBufferAttribute(o,r),wa.fromBufferAttribute(o,s),e.distanceSqToSegment(Ta,wa,Mo,su)>i)return;Mo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Mo);if(!(l<t.near||l>t.far))return{distance:l,point:su.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const au=new A,ou=new A;class Gf extends kf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)au.fromBufferAttribute(e,r),ou.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+au.distanceTo(ou);t.setAttribute("lineDistance",new ae(i,1))}else It("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Th extends nn{constructor(t=[],e=er,i,r,s,a,o,c,l,h){super(t,e,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ql extends nn{constructor(t,e,i,r,s,a,o,c,l){super(t,e,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fs extends nn{constructor(t,e,i=ci,r,s,a,o=Ze,c=Ze,l,h=Pi,d=1){if(h!==Pi&&h!==Ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $l(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Hf extends fs{constructor(t,e=ci,i=er,r,s,a=Ze,o=Ze,c,l=Pi){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,r,s,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class wh extends nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class fi extends Ie{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,p=0;_("z","y","x",-1,-1,i,e,t,a,s,0),_("z","y","x",1,-1,i,e,-t,a,s,1),_("x","z","y",1,1,t,i,e,r,a,2),_("x","z","y",1,-1,t,i,-e,r,a,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(d,2));function _(S,m,f,b,C,E,x,M,w,g,T){const P=E/w,L=x/g,O=E/2,B=x/2,N=M/2,k=w+1,q=g+1;let X=0,tt=0;const Y=new A;for(let Q=0;Q<q;Q++){const nt=Q*L-B;for(let ot=0;ot<k;ot++){const yt=ot*P-O;Y[S]=yt*b,Y[m]=nt*C,Y[f]=N,l.push(Y.x,Y.y,Y.z),Y[S]=0,Y[m]=0,Y[f]=M>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(ot/w),d.push(1-Q/g),X+=1}}for(let Q=0;Q<g;Q++)for(let nt=0;nt<w;nt++){const ot=u+nt+k*Q,yt=u+nt+k*(Q+1),pe=u+(nt+1)+k*(Q+1),Qt=u+(nt+1)+k*Q;c.push(ot,yt,Qt),c.push(yt,pe,Qt),tt+=6}o.addGroup(p,tt,T),p+=tt,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Xn extends Ie{constructor(t=1,e=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],u=[],p=[];let _=0;const S=[],m=i/2;let f=0;b(),a===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new ae(d,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(p,2));function b(){const E=new A,x=new A;let M=0;const w=(e-t)/i;for(let g=0;g<=s;g++){const T=[],P=g/s,L=P*(e-t)+t;for(let O=0;O<=r;O++){const B=O/r,N=B*c+o,k=Math.sin(N),q=Math.cos(N);x.x=L*k,x.y=-P*i+m,x.z=L*q,d.push(x.x,x.y,x.z),E.set(k,w,q).normalize(),u.push(E.x,E.y,E.z),p.push(B,1-P),T.push(_++)}S.push(T)}for(let g=0;g<r;g++)for(let T=0;T<s;T++){const P=S[T][g],L=S[T+1][g],O=S[T+1][g+1],B=S[T][g+1];(t>0||T!==0)&&(h.push(P,L,B),M+=3),(e>0||T!==s-1)&&(h.push(L,O,B),M+=3)}l.addGroup(f,M,0),f+=M}function C(E){const x=_,M=new Pt,w=new A;let g=0;const T=E===!0?t:e,P=E===!0?1:-1;for(let O=1;O<=r;O++)d.push(0,m*P,0),u.push(0,P,0),p.push(.5,.5),_++;const L=_;for(let O=0;O<=r;O++){const N=O/r*c+o,k=Math.cos(N),q=Math.sin(N);w.x=T*q,w.y=m*P,w.z=T*k,d.push(w.x,w.y,w.z),u.push(0,P,0),M.x=k*.5+.5,M.y=q*.5*P+.5,p.push(M.x,M.y),_++}for(let O=0;O<r;O++){const B=x+O,N=L+O;E===!0?h.push(N,N+1,B):h.push(N+1,N,B),g+=3}l.addGroup(f,g,E===!0?1:2),f+=g}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ss extends Xn{constructor(t=1,e=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ss(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class jl extends Ie{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],a=[];o(r),l(i),h(),this.setAttribute("position",new ae(s,3)),this.setAttribute("normal",new ae(s.slice(),3)),this.setAttribute("uv",new ae(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const C=new A,E=new A,x=new A;for(let M=0;M<e.length;M+=3)p(e[M+0],C),p(e[M+1],E),p(e[M+2],x),c(C,E,x,b)}function c(b,C,E,x){const M=x+1,w=[];for(let g=0;g<=M;g++){w[g]=[];const T=b.clone().lerp(E,g/M),P=C.clone().lerp(E,g/M),L=M-g;for(let O=0;O<=L;O++)O===0&&g===M?w[g][O]=T:w[g][O]=T.clone().lerp(P,O/L)}for(let g=0;g<M;g++)for(let T=0;T<2*(M-g)-1;T++){const P=Math.floor(T/2);T%2===0?(u(w[g][P+1]),u(w[g+1][P]),u(w[g][P])):(u(w[g][P+1]),u(w[g+1][P+1]),u(w[g+1][P]))}}function l(b){const C=new A;for(let E=0;E<s.length;E+=3)C.x=s[E+0],C.y=s[E+1],C.z=s[E+2],C.normalize().multiplyScalar(b),s[E+0]=C.x,s[E+1]=C.y,s[E+2]=C.z}function h(){const b=new A;for(let C=0;C<s.length;C+=3){b.x=s[C+0],b.y=s[C+1],b.z=s[C+2];const E=m(b)/2/Math.PI+.5,x=f(b)/Math.PI+.5;a.push(E,1-x)}_(),d()}function d(){for(let b=0;b<a.length;b+=6){const C=a[b+0],E=a[b+2],x=a[b+4],M=Math.max(C,E,x),w=Math.min(C,E,x);M>.9&&w<.1&&(C<.2&&(a[b+0]+=1),E<.2&&(a[b+2]+=1),x<.2&&(a[b+4]+=1))}}function u(b){s.push(b.x,b.y,b.z)}function p(b,C){const E=b*3;C.x=t[E+0],C.y=t[E+1],C.z=t[E+2]}function _(){const b=new A,C=new A,E=new A,x=new A,M=new Pt,w=new Pt,g=new Pt;for(let T=0,P=0;T<s.length;T+=9,P+=6){b.set(s[T+0],s[T+1],s[T+2]),C.set(s[T+3],s[T+4],s[T+5]),E.set(s[T+6],s[T+7],s[T+8]),M.set(a[P+0],a[P+1]),w.set(a[P+2],a[P+3]),g.set(a[P+4],a[P+5]),x.copy(b).add(C).add(E).divideScalar(3);const L=m(x);S(M,P+0,b,L),S(w,P+2,C,L),S(g,P+4,E,L)}}function S(b,C,E,x){x<0&&b.x===1&&(a[C]=b.x-1),E.x===0&&E.z===0&&(a[C]=x/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function f(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jl(t.vertices,t.indices,t.radius,t.detail)}}const Js=new A,Qs=new A,So=new A,js=new vn;class Vf extends Ie{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(Ur*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),u={},p=[];for(let _=0;_<c;_+=3){a?(l[0]=a.getX(_),l[1]=a.getX(_+1),l[2]=a.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);const{a:S,b:m,c:f}=js;if(S.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),f.fromBufferAttribute(o,l[2]),js.getNormal(So),d[0]=`${Math.round(S.x*r)},${Math.round(S.y*r)},${Math.round(S.z*r)}`,d[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,d[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let b=0;b<3;b++){const C=(b+1)%3,E=d[b],x=d[C],M=js[h[b]],w=js[h[C]],g=`${E}_${x}`,T=`${x}_${E}`;T in u&&u[T]?(So.dot(u[T].normal)<=s&&(p.push(M.x,M.y,M.z),p.push(w.x,w.y,w.z)),u[T]=null):g in u||(u[g]={index0:l[b],index1:l[C],normal:So.clone()})}}for(const _ in u)if(u[_]){const{index0:S,index1:m}=u[_];Js.fromBufferAttribute(o,S),Qs.fromBufferAttribute(o,m),p.push(Js.x,Js.y,Js.z),p.push(Qs.x,Qs.y,Qs.z)}this.setAttribute("position",new ae(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class tc extends jl{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new tc(t.radius,t.detail)}}class Li extends Ie{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,d=t/o,u=e/c,p=[],_=[],S=[],m=[];for(let f=0;f<h;f++){const b=f*u-a;for(let C=0;C<l;C++){const E=C*d-s;_.push(E,-b,0),S.push(0,0,1),m.push(C/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<o;b++){const C=b+l*f,E=b+l*(f+1),x=b+1+l*(f+1),M=b+1+l*f;p.push(C,E,M),p.push(E,x,M)}this.setIndex(p),this.setAttribute("position",new ae(_,3)),this.setAttribute("normal",new ae(S,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Li(t.width,t.height,t.widthSegments,t.heightSegments)}}class ec extends Ie{constructor(t=.5,e=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],c=[],l=[],h=[];let d=t;const u=(e-t)/r,p=new A,_=new Pt;for(let S=0;S<=r;S++){for(let m=0;m<=i;m++){const f=s+m/i*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),_.x=(p.x/e+1)/2,_.y=(p.y/e+1)/2,h.push(_.x,_.y)}d+=u}for(let S=0;S<r;S++){const m=S*(i+1);for(let f=0;f<i;f++){const b=f+m,C=b,E=b+i+1,x=b+i+2,M=b+1;o.push(C,E,M),o.push(E,x,M)}}this.setIndex(o),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ec(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class nc extends Ie{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new A,u=new A,p=[],_=[],S=[],m=[];for(let f=0;f<=i;f++){const b=[],C=f/i,E=a+C*o,x=t*Math.cos(E),M=Math.sqrt(t*t-x*x);let w=0;f===0&&a===0?w=.5/e:f===i&&c===Math.PI&&(w=-.5/e);for(let g=0;g<=e;g++){const T=g/e,P=r+T*s;d.x=-M*Math.cos(P),d.y=x,d.z=M*Math.sin(P),_.push(d.x,d.y,d.z),u.copy(d).normalize(),S.push(u.x,u.y,u.z),m.push(T+w,1-C),b.push(l++)}h.push(b)}for(let f=0;f<i;f++)for(let b=0;b<e;b++){const C=h[f][b+1],E=h[f][b],x=h[f+1][b],M=h[f+1][b+1];(f!==0||a>0)&&p.push(C,E,M),(f!==i-1||c<Math.PI)&&p.push(E,x,M)}this.setIndex(p),this.setAttribute("position",new ae(_,3)),this.setAttribute("normal",new ae(S,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ys extends Ie{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const c=[],l=[],h=[],d=[],u=new A,p=new A,_=new A;for(let S=0;S<=i;S++){const m=a+S/i*o;for(let f=0;f<=r;f++){const b=f/r*s;p.x=(t+e*Math.cos(m))*Math.cos(b),p.y=(t+e*Math.cos(m))*Math.sin(b),p.z=e*Math.sin(m),l.push(p.x,p.y,p.z),u.x=t*Math.cos(b),u.y=t*Math.sin(b),_.subVectors(p,u).normalize(),h.push(_.x,_.y,_.z),d.push(f/r),d.push(S/i)}}for(let S=1;S<=i;S++)for(let m=1;m<=r;m++){const f=(r+1)*S+m-1,b=(r+1)*(S-1)+m-1,C=(r+1)*(S-1)+m,E=(r+1)*S+m;c.push(f,b,E),c.push(b,C,E)}this.setIndex(c),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function Br(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];if(lu(r))r.isRenderTargetTexture?(It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone();else if(Array.isArray(r))if(lu(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();t[e][i]=s}else t[e][i]=r.slice();else t[e][i]=r}}return t}function an(n){const t={};for(let e=0;e<n.length;e++){const i=Br(n[e]);for(const r in i)t[r]=i[r]}return t}function lu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Wf(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Ah(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const Xf={clone:Br,merge:an};var Yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends ar{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yf,this.fragmentShader=qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Br(t.uniforms),this.uniformsGroups=Wf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const r=t.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=e[r.value]||null;break;case"c":this.uniforms[i].value=new Wt().setHex(r.value);break;case"v2":this.uniforms[i].value=new Pt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new A().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Re().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ft().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Te().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class $f extends di{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ic extends ar{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Kf extends ar{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Zf extends ar{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class rc extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Jf extends rc{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const yo=new Te,cu=new A,uu=new A;class Rh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jl,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;cu.setFromMatrixPosition(t.matrixWorld),e.position.copy(cu),uu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(uu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,r){yo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(yo,t.coordinateSystem,t.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;t.coordinateSystem===hs||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(yo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ta=new A,ea=new Wn,Zn=new A;class Ch extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ta,ea,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ta,ea,Zn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(ta,ea,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ta,ea,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ki=new A,hu=new Pt,du=new Pt;class Tn extends Ch{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ds*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ki.x,ki.y).multiplyScalar(-t/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-t/ki.z)}getViewSize(t,e){return this.getViewBounds(t,hu,du),e.subVectors(du,hu)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ur*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Qf extends Rh{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0}}class jf extends rc{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Qf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Ba extends Ch{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class tp extends Rh{constructor(){super(new Ba(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ep extends rc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new tp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const br=-90,Er=1;class np extends Ge{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tn(br,Er,t,e);r.layers=this.layers,this.add(r);const s=new Tn(br,Er,t,e);s.layers=this.layers,this.add(s);const a=new Tn(br,Er,t,e);a.layers=this.layers,this.add(a);const o=new Tn(br,Er,t,e);o.layers=this.layers,this.add(o);const c=new Tn(br,Er,t,e);c.layers=this.layers,this.add(c);const l=new Tn(br,Er,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===ni)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===hs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class ip extends Tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class fu{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Vt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ec=class Ec{constructor(t,e,i,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,r){const s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=r,this}};Ec.prototype.isMatrix2=!0;let pu=Ec;class rp extends Vi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function mu(n,t,e,i){const r=sp(i);switch(e){case fh:return n*t;case mh:return n*t/r.components*r.byteLength;case Hl:return n*t/r.components*r.byteLength;case nr:return n*t*2/r.components*r.byteLength;case Vl:return n*t*2/r.components*r.byteLength;case ph:return n*t*3/r.components*r.byteLength;case kn:return n*t*4/r.components*r.byteLength;case Wl:return n*t*4/r.components*r.byteLength;case la:case ca:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ua:case ha:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Yo:case $o:return Math.max(n,16)*Math.max(t,8)/4;case Xo:case qo:return Math.max(n,8)*Math.max(t,8)/2;case Ko:case Zo:case Qo:case jo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Jo:case xa:case tl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case el:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case nl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case il:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case rl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case sl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case al:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ol:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ll:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case cl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ul:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case hl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case dl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case fl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case pl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ml:case gl:case _l:return Math.ceil(n/4)*Math.ceil(t/4)*16;case xl:case vl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case va:case Ml:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sp(n){switch(n){case xn:case ch:return{byteLength:1,components:1};case cs:case uh:case ui:return{byteLength:2,components:1};case kl:case Gl:return{byteLength:2,components:4};case ci:case zl:case ei:return{byteLength:4,components:1};case hh:case dh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ol}}));typeof window<"u"&&(window.__THREE__?It("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ol);function Ph(){let n=null,t=!1,e=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),e(s,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function ap(n){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const h=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,h);else{d.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<d.length;p++){const _=d[u],S=d[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++u,d[u]=S)}d.length=u+1;for(let p=0,_=d.length;p<_;p++){const S=d[p];n.bufferSubData(l,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,up=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,gp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Pp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Dp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Op="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$p=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,jp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,em=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,am=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,om=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,um=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_m=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Pm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Im=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ym=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$m=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,e0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,n0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,a0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,p0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,m0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,g0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,y0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,w0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,R0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,C0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,L0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,F0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:op,alphahash_pars_fragment:lp,alphamap_fragment:cp,alphamap_pars_fragment:up,alphatest_fragment:hp,alphatest_pars_fragment:dp,aomap_fragment:fp,aomap_pars_fragment:pp,batching_pars_vertex:mp,batching_vertex:gp,begin_vertex:_p,beginnormal_vertex:xp,bsdfs:vp,iridescence_fragment:Mp,bumpmap_pars_fragment:Sp,clipping_planes_fragment:yp,clipping_planes_pars_fragment:bp,clipping_planes_pars_vertex:Ep,clipping_planes_vertex:Tp,color_fragment:wp,color_pars_fragment:Ap,color_pars_vertex:Rp,color_vertex:Cp,common:Pp,cube_uv_reflection_fragment:Dp,defaultnormal_vertex:Lp,displacementmap_pars_vertex:Ip,displacementmap_vertex:Up,emissivemap_fragment:Np,emissivemap_pars_fragment:Fp,colorspace_fragment:Op,colorspace_pars_fragment:Bp,envmap_fragment:zp,envmap_common_pars_fragment:kp,envmap_pars_fragment:Gp,envmap_pars_vertex:Hp,envmap_physical_pars_fragment:jp,envmap_vertex:Vp,fog_vertex:Wp,fog_pars_vertex:Xp,fog_fragment:Yp,fog_pars_fragment:qp,gradientmap_pars_fragment:$p,lightmap_pars_fragment:Kp,lights_lambert_fragment:Zp,lights_lambert_pars_fragment:Jp,lights_pars_begin:Qp,lights_toon_fragment:tm,lights_toon_pars_fragment:em,lights_phong_fragment:nm,lights_phong_pars_fragment:im,lights_physical_fragment:rm,lights_physical_pars_fragment:sm,lights_fragment_begin:am,lights_fragment_maps:om,lights_fragment_end:lm,lightprobes_pars_fragment:cm,logdepthbuf_fragment:um,logdepthbuf_pars_fragment:hm,logdepthbuf_pars_vertex:dm,logdepthbuf_vertex:fm,map_fragment:pm,map_pars_fragment:mm,map_particle_fragment:gm,map_particle_pars_fragment:_m,metalnessmap_fragment:xm,metalnessmap_pars_fragment:vm,morphinstance_vertex:Mm,morphcolor_vertex:Sm,morphnormal_vertex:ym,morphtarget_pars_vertex:bm,morphtarget_vertex:Em,normal_fragment_begin:Tm,normal_fragment_maps:wm,normal_pars_fragment:Am,normal_pars_vertex:Rm,normal_vertex:Cm,normalmap_pars_fragment:Pm,clearcoat_normal_fragment_begin:Dm,clearcoat_normal_fragment_maps:Lm,clearcoat_pars_fragment:Im,iridescence_pars_fragment:Um,opaque_fragment:Nm,packing:Fm,premultiplied_alpha_fragment:Om,project_vertex:Bm,dithering_fragment:zm,dithering_pars_fragment:km,roughnessmap_fragment:Gm,roughnessmap_pars_fragment:Hm,shadowmap_pars_fragment:Vm,shadowmap_pars_vertex:Wm,shadowmap_vertex:Xm,shadowmask_pars_fragment:Ym,skinbase_vertex:qm,skinning_pars_vertex:$m,skinning_vertex:Km,skinnormal_vertex:Zm,specularmap_fragment:Jm,specularmap_pars_fragment:Qm,tonemapping_fragment:jm,tonemapping_pars_fragment:t0,transmission_fragment:e0,transmission_pars_fragment:n0,uv_pars_fragment:i0,uv_pars_vertex:r0,uv_vertex:s0,worldpos_vertex:a0,background_vert:o0,background_frag:l0,backgroundCube_vert:c0,backgroundCube_frag:u0,cube_vert:h0,cube_frag:d0,depth_vert:f0,depth_frag:p0,distance_vert:m0,distance_frag:g0,equirect_vert:_0,equirect_frag:x0,linedashed_vert:v0,linedashed_frag:M0,meshbasic_vert:S0,meshbasic_frag:y0,meshlambert_vert:b0,meshlambert_frag:E0,meshmatcap_vert:T0,meshmatcap_frag:w0,meshnormal_vert:A0,meshnormal_frag:R0,meshphong_vert:C0,meshphong_frag:P0,meshphysical_vert:D0,meshphysical_frag:L0,meshtoon_vert:I0,meshtoon_frag:U0,points_vert:N0,points_frag:F0,shadow_vert:O0,shadow_frag:B0,sprite_vert:z0,sprite_frag:k0},pt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new A},probesMax:{value:new A},probesResolution:{value:new A}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},ti={basic:{uniforms:an([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:an([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Wt(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:an([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:an([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:an([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:an([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:an([pt.points,pt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:an([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:an([pt.common,pt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:an([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:an([pt.sprite,pt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:an([pt.common,pt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:an([pt.lights,pt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};ti.physical={uniforms:an([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const na={r:0,b:0,g:0},G0=new Te,Dh=new Ft;Dh.set(-1,0,0,0,1,0,0,0,1);function H0(n,t,e,i,r,s){const a=new Wt(0);let o=r===!0?0:1,c,l,h=null,d=0,u=null;function p(b){let C=b.isScene===!0?b.background:null;if(C&&C.isTexture){const E=b.backgroundBlurriness>0;C=t.get(C,E)}return C}function _(b){let C=!1;const E=p(b);E===null?m(a,o):E&&E.isColor&&(m(E,1),C=!0);const x=n.xr.getEnvironmentBlendMode();x==="additive"?e.buffers.color.setClear(0,0,0,1,s):x==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(n.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(b,C){const E=p(C);E&&(E.isCubeTexture||E.mapping===Fa)?(l===void 0&&(l=new Bt(new fi(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:Br(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(x,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=E,l.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(G0.makeRotationFromEuler(C.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Dh),l.material.toneMapped=Zt.getTransfer(E.colorSpace)!==le,(h!==E||d!==E.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=E,d=E.version,u=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Bt(new Li(2,2),new di({name:"BackgroundMaterial",uniforms:Br(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(E.colorSpace)!==le,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,u=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,C){b.getRGB(na,Ah(n)),e.buffers.color.setClear(na.r,na.g,na.b,C,s)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,C=1){a.set(b),o=C,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:_,addToRenderList:S,dispose:f}}function V0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(L,O,B,N,k){let q=!1;const X=d(L,N,B,O);s!==X&&(s=X,l(s.object)),q=p(L,N,B,k),q&&_(L,N,B,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,E(L,O,B,N),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return n.createVertexArray()}function l(L){return n.bindVertexArray(L)}function h(L){return n.deleteVertexArray(L)}function d(L,O,B,N){const k=N.wireframe===!0;let q=i[O.id];q===void 0&&(q={},i[O.id]=q);const X=L.isInstancedMesh===!0?L.id:0;let tt=q[X];tt===void 0&&(tt={},q[X]=tt);let Y=tt[B.id];Y===void 0&&(Y={},tt[B.id]=Y);let Q=Y[k];return Q===void 0&&(Q=u(c()),Y[k]=Q),Q}function u(L){const O=[],B=[],N=[];for(let k=0;k<e;k++)O[k]=0,B[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:B,attributeDivisors:N,object:L,attributes:{},index:null}}function p(L,O,B,N){const k=s.attributes,q=O.attributes;let X=0;const tt=B.getAttributes();for(const Y in tt)if(tt[Y].location>=0){const nt=k[Y];let ot=q[Y];if(ot===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(ot=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(ot=L.instanceColor)),nt===void 0||nt.attribute!==ot||ot&&nt.data!==ot.data)return!0;X++}return s.attributesNum!==X||s.index!==N}function _(L,O,B,N){const k={},q=O.attributes;let X=0;const tt=B.getAttributes();for(const Y in tt)if(tt[Y].location>=0){let nt=q[Y];nt===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(nt=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(nt=L.instanceColor));const ot={};ot.attribute=nt,nt&&nt.data&&(ot.data=nt.data),k[Y]=ot,X++}s.attributes=k,s.attributesNum=X,s.index=N}function S(){const L=s.newAttributes;for(let O=0,B=L.length;O<B;O++)L[O]=0}function m(L){f(L,0)}function f(L,O){const B=s.newAttributes,N=s.enabledAttributes,k=s.attributeDivisors;B[L]=1,N[L]===0&&(n.enableVertexAttribArray(L),N[L]=1),k[L]!==O&&(n.vertexAttribDivisor(L,O),k[L]=O)}function b(){const L=s.newAttributes,O=s.enabledAttributes;for(let B=0,N=O.length;B<N;B++)O[B]!==L[B]&&(n.disableVertexAttribArray(B),O[B]=0)}function C(L,O,B,N,k,q,X){X===!0?n.vertexAttribIPointer(L,O,B,k,q):n.vertexAttribPointer(L,O,B,N,k,q)}function E(L,O,B,N){S();const k=N.attributes,q=B.getAttributes(),X=O.defaultAttributeValues;for(const tt in q){const Y=q[tt];if(Y.location>=0){let Q=k[tt];if(Q===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){const nt=Q.normalized,ot=Q.itemSize,yt=t.get(Q);if(yt===void 0)continue;const pe=yt.buffer,Qt=yt.type,ie=yt.bytesPerElement,K=Qt===n.INT||Qt===n.UNSIGNED_INT||Q.gpuType===zl;if(Q.isInterleavedBufferAttribute){const et=Q.data,bt=et.stride,Nt=Q.offset;if(et.isInstancedInterleavedBuffer){for(let Mt=0;Mt<Y.locationSize;Mt++)f(Y.location+Mt,et.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Mt=0;Mt<Y.locationSize;Mt++)m(Y.location+Mt);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let Mt=0;Mt<Y.locationSize;Mt++)C(Y.location+Mt,ot/Y.locationSize,Qt,nt,bt*ie,(Nt+ot/Y.locationSize*Mt)*ie,K)}else{if(Q.isInstancedBufferAttribute){for(let et=0;et<Y.locationSize;et++)f(Y.location+et,Q.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let et=0;et<Y.locationSize;et++)m(Y.location+et);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let et=0;et<Y.locationSize;et++)C(Y.location+et,ot/Y.locationSize,Qt,nt,ot*ie,ot/Y.locationSize*et*ie,K)}}else if(X!==void 0){const nt=X[tt];if(nt!==void 0)switch(nt.length){case 2:n.vertexAttrib2fv(Y.location,nt);break;case 3:n.vertexAttrib3fv(Y.location,nt);break;case 4:n.vertexAttrib4fv(Y.location,nt);break;default:n.vertexAttrib1fv(Y.location,nt)}}}}b()}function x(){T();for(const L in i){const O=i[L];for(const B in O){const N=O[B];for(const k in N){const q=N[k];for(const X in q)h(q[X].object),delete q[X];delete N[k]}}delete i[L]}}function M(L){if(i[L.id]===void 0)return;const O=i[L.id];for(const B in O){const N=O[B];for(const k in N){const q=N[k];for(const X in q)h(q[X].object),delete q[X];delete N[k]}}delete i[L.id]}function w(L){for(const O in i){const B=i[O];for(const N in B){const k=B[N];if(k[L.id]===void 0)continue;const q=k[L.id];for(const X in q)h(q[X].object),delete q[X];delete k[L.id]}}}function g(L){for(const O in i){const B=i[O],N=L.isInstancedMesh===!0?L.id:0,k=B[N];if(k!==void 0){for(const q in k){const X=k[q];for(const tt in X)h(X[tt].object),delete X[tt];delete k[q]}delete B[N],Object.keys(B).length===0&&delete i[O]}}}function T(){P(),a=!0,s!==r&&(s=r,l(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:x,releaseStatesOfGeometry:M,releaseStatesOfObject:g,releaseStatesOfProgram:w,initAttributes:S,enableAttribute:m,disableUnusedAttributes:b}}function W0(n,t,e){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),e.update(l,i,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let p=0;p<h;p++)u+=l[p];e.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function X0(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==kn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const g=w===ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==xn&&w!==ei&&!g&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(It("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&It("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:C,maxFragmentUniforms:E,maxSamples:x,samples:M}}function Y0(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new bi,o=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||r;return r=u,i=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const _=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||_===null||_.length===0||s&&!m)s?h(null):l();else{const b=s?0:i,C=b*4;let E=f.clippingState||null;c.value=E,E=h(_,u,C,p);for(let x=0;x!==C;++x)E[x]=e[x];f.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,p,_){const S=d!==null?d.length:0;let m=null;if(S!==0){if(m=c.value,_!==!0||m===null){const f=p+S*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let C=0,E=p;C!==S;++C,E+=4)a.copy(d[C]).applyMatrix4(b,o),a.normal.toArray(m,E),m[E+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}const Dr=4,q0=6,$0=20,K0=256,jr=new Ba,gu=new Wt;let bo=null,Eo=0,To=0,wo=!1;const Z0=new A,Ki=new A;class _u{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,s={}){const{size:a=256,position:o=Z0}=s;bo=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,r,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(bo,Eo,To),this._renderer.xr.enabled=wo,t.scissorTest=!1,Tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===er||t.mapping===Or?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bo=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:ui,format:kn,colorSpace:Ma,depthBuffer:!1},r=xu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xu(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=J0(s)),this._blurMaterial=j0(s,t,e),this._ggxMaterial=Q0(s,t,e)}return r}_compileMaterial(t){const e=new Bt(new Ie,t);this._renderer.compile(e,jr)}_sceneToCubeUV(t,e,i,r,s){const c=new Tn(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(gu),d.toneMapping=si,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bt(new fi,new qn({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let f=!1;const b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,f=!0):(m.color.copy(gu),f=!0);for(let C=0;C<6;C++){const E=C%3;E===0?(c.up.set(0,l[C],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[C],s.y,s.z)):E===1?(c.up.set(0,0,l[C]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[C],s.z)):(c.up.set(0,l[C],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[C]));const x=this._cubeSize;Tr(r,E*x,C>2?x:0,x,x),d.setRenderTarget(r),f&&d.render(S,c),d.render(t,c)}d.toneMapping=p,d.autoClear=u,t.background=b}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===er||t.mapping===Or;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;Tr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,jr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,p=d*u,{_lodMax:_}=this,S=this._sizeLods[i],m=3*S*(i>_-Dr?i-_+Dr:0),f=4*(this._cubeSize-S);c.envMap.value=t.texture,c.roughness.value=p,c.mipInt.value=_-e,Tr(s,m,f,3*S,2*S),r.setRenderTarget(s),r.render(o,jr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=_-i,Tr(t,m,f,3*S,2*S),r.setRenderTarget(t),r.render(o,jr)}_blur(t,e,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,i,a),this._blurPass(s,t,i,i,a)}_blurPass(t,e,i,r,s){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;const l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-i;const h=this._sizeLods[r],d=3*h*(r>this._lodMax-Dr?r-this._lodMax+Dr:0),u=4*(this._cubeSize-h);Tr(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(c,jr)}}function J0(n){const t=[],e=[];let i=n;const r=n-Dr+1+q0;for(let s=0;s<r;s++){const a=Math.pow(2,i);t.push(a);const o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,p=3,_=new Float32Array(p*u*d),S=new Float32Array(p*u*d);for(let f=0;f<d;f++){const b=f%3*2/3-1,C=f>2?0:-1,E=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];_.set(E,p*u*f);for(let x=0;x<u;x++){const M=h[x*2]*2-1,w=h[x*2+1]*2-1;f===0?Ki.set(1,w,M):f===1?Ki.set(-M,1,-w):f===2?Ki.set(-M,w,1):f===3?Ki.set(-1,w,-M):f===4?Ki.set(-M,-1,w):Ki.set(M,w,-1),Ki.toArray(S,(f*u+x)*p)}}const m=new Ie;m.setAttribute("position",new Hn(_,p)),m.setAttribute("outputDirection",new Hn(S,p)),e.push(new Bt(m,null)),i>Dr&&i--}return{lodMeshes:e,sizeLods:t}}function xu(n,t,e){const i=new Gn(n,t,e);return i.texture.mapping=Fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tr(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Q0(n,t,e){return new di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:K0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:za(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function j0(n,t,e){return new di({name:"SphericalGaussianBlur",defines:{SAMPLES:$0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:za(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function vu(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Mu(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function za(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Lh extends Gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Th(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new fi(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:Br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Ai});s.uniforms.tEquirect.value=e;const a=new Bt(r,s),o=e.minFilter;return e.minFilter===Zi&&(e.minFilter=en),new np(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}function tg(n){let t=new WeakMap,e=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?a(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===$a||p===Ka)if(t.has(u)){const _=t.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const S=new Lh(_.height);return S.fromEquirectangularTexture(n,u),t.set(u,S),u.addEventListener("dispose",l),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const p=u.mapping,_=p===$a||p===Ka,S=p===er||p===Or;if(_||S){let m=e.get(u);const f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new _u(n)),m=_?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const b=u.image;return _&&b&&b.height>0||S&&b&&c(b)?(i===null&&(i=new _u(n)),m=_?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===$a?u.mapping=er:p===Ka&&(u.mapping=Or),u}function c(u){let p=0;const _=6;for(let S=0;S<_;S++)u[S]!==void 0&&p++;return p===_}function l(u){const p=u.target;p.removeEventListener("dispose",l);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function eg(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Ir("WebGLRenderer: "+i+" extension not supported."),r}}}function ng(n,t,e,i){const r={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete r[u.id];const p=s.get(u);p&&(t.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const p in u)t.update(u[p],n.ARRAY_BUFFER)}function l(d){const u=[],p=d.index,_=d.attributes.position;let S=0;if(_===void 0)return;if(p!==null){const b=p.array;S=p.version;for(let C=0,E=b.length;C<E;C+=3){const x=b[C+0],M=b[C+1],w=b[C+2];u.push(x,M,M,w,w,x)}}else{const b=_.array;S=_.version;for(let C=0,E=b.length/3-1;C<E;C+=3){const x=C+0,M=C+1,w=C+2;u.push(x,M,M,w,w,x)}}const m=new(_.count>=65535?yh:Sh)(u,1);m.version=S;const f=s.get(d);f&&t.remove(f),s.set(d,m)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function ig(n,t,e){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,u){n.drawElements(i,u,s,d*a),e.update(u,i,1)}function l(d,u,p){p!==0&&(n.drawElementsInstanced(i,u,s,d*a,p),e.update(u,i,p))}function h(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,p);let S=0;for(let m=0;m<p;m++)S+=u[m];e.update(S,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function rg(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:ee("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function sg(n,t,e){const i=new WeakMap,r=new Re;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let P=function(){g.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var p=P;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],C=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),S===!0&&(E=2),m===!0&&(E=3);let x=o.attributes.position.count*E,M=1;x>t.maxTextureSize&&(M=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const w=new Float32Array(x*M*4*d),g=new xh(w,x,M,d);g.type=ei,g.needsUpdate=!0;const T=E*4;for(let L=0;L<d;L++){const O=f[L],B=b[L],N=C[L],k=x*M*4*L;for(let q=0;q<O.count;q++){const X=q*T;_===!0&&(r.fromBufferAttribute(O,q),w[k+X+0]=r.x,w[k+X+1]=r.y,w[k+X+2]=r.z,w[k+X+3]=0),S===!0&&(r.fromBufferAttribute(B,q),w[k+X+4]=r.x,w[k+X+5]=r.y,w[k+X+6]=r.z,w[k+X+7]=0),m===!0&&(r.fromBufferAttribute(N,q),w[k+X+8]=r.x,w[k+X+9]=r.y,w[k+X+10]=r.z,w[k+X+11]=N.itemSize===4?r.w:1)}}u={count:d,texture:g,size:new Pt(x,M)},i.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const S=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",S),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function ag(n,t,e,i,r){let s=new WeakMap;function a(l){const h=r.render.frame,d=l.geometry,u=t.get(l,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return u}function o(){s=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const og={[nh]:"LINEAR_TONE_MAPPING",[ih]:"REINHARD_TONE_MAPPING",[rh]:"CINEON_TONE_MAPPING",[Bl]:"ACES_FILMIC_TONE_MAPPING",[ah]:"AGX_TONE_MAPPING",[oh]:"NEUTRAL_TONE_MAPPING",[sh]:"CUSTOM_TONE_MAPPING"};function lg(n,t,e,i,r,s){const a=new Gn(t,e,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Ie;l.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ae([0,2,0,0,2,0],2));const h=new $f({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Bt(l,h),u=new Ba(-1,1,1,-1,0,1);let p=null,_=null,S=!1,m,f=null,b=[],C=!1;this.setSize=function(E,x){a.setSize(E,x),o!==null&&o.setSize(E,x),c!==null&&c.setSize(E,x);for(let M=0;M<b.length;M++){const w=b[M];w.setSize&&w.setSize(E,x)}},this.setEffects=function(E){b=E,C=b.length>0&&b[0].isRenderPass===!0;const x=a.width,M=a.height;b.length>0&&o===null&&(o=new Gn(x,M,{type:ui,depthBuffer:!1,stencilBuffer:!1}),c=new Gn(x,M,{type:ui,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<b.length;w++){const g=b[w];g.setSize&&g.setSize(x,M)}},this.begin=function(E,x){if(S||E.toneMapping===si&&b.length===0)return!1;if(f=x,x!==null){const M=x.width,w=x.height;(a.width!==M||a.height!==w)&&this.setSize(M,w)}return C===!1&&E.setRenderTarget(a),m=E.toneMapping,E.toneMapping=si,!0},this.hasRenderPass=function(){return C},this.end=function(E,x){E.toneMapping=m,S=!0;let M=a,w=o;for(let g=0;g<b.length;g++){const T=b[g];T.enabled!==!1&&(T.render(E,w,M,x),T.needsSwap!==!1&&(M=w,w=w===o?c:o))}if(p!==E.outputColorSpace||_!==E.toneMapping){p=E.outputColorSpace,_=E.toneMapping,h.defines={},Zt.getTransfer(p)===le&&(h.defines.SRGB_TRANSFER="");const g=og[_];g&&(h.defines[g]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,E.setRenderTarget(f),E.render(d,u),f=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const Ih=new nn,yl=new fs(1,1),Uh=new xh,Nh=new vf,Fh=new Th,Su=[],yu=[],bu=new Float32Array(16),Eu=new Float32Array(9),Tu=new Float32Array(4);function Wr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Su[r];if(s===void 0&&(s=new Float32Array(r),Su[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function Ve(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function We(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ka(n,t){let e=yu[t];e===void 0&&(e=new Int32Array(t),yu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function cg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function ug(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;n.uniform2fv(this.addr,t),We(e,t)}}function hg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;n.uniform3fv(this.addr,t),We(e,t)}}function dg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;n.uniform4fv(this.addr,t),We(e,t)}}function fg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,i))return;Tu.set(i),n.uniformMatrix2fv(this.addr,!1,Tu),We(e,i)}}function pg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,i))return;Eu.set(i),n.uniformMatrix3fv(this.addr,!1,Eu),We(e,i)}}function mg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,i))return;bu.set(i),n.uniformMatrix4fv(this.addr,!1,bu),We(e,i)}}function gg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function _g(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;n.uniform2iv(this.addr,t),We(e,t)}}function xg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;n.uniform3iv(this.addr,t),We(e,t)}}function vg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;n.uniform4iv(this.addr,t),We(e,t)}}function Mg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Sg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;n.uniform2uiv(this.addr,t),We(e,t)}}function yg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;n.uniform3uiv(this.addr,t),We(e,t)}}function bg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;n.uniform4uiv(this.addr,t),We(e,t)}}function Eg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(yl.compareFunction=e.isReversedDepthBuffer()?Yl:Xl,s=yl):s=Ih,e.setTexture2D(t||s,r)}function Tg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Nh,r)}function wg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Fh,r)}function Ag(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Uh,r)}function Rg(n){switch(n){case 5126:return cg;case 35664:return ug;case 35665:return hg;case 35666:return dg;case 35674:return fg;case 35675:return pg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return _g;case 35668:case 35672:return xg;case 35669:case 35673:return vg;case 5125:return Mg;case 36294:return Sg;case 36295:return yg;case 36296:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Ag}}function Cg(n,t){n.uniform1fv(this.addr,t)}function Pg(n,t){const e=Wr(t,this.size,2);n.uniform2fv(this.addr,e)}function Dg(n,t){const e=Wr(t,this.size,3);n.uniform3fv(this.addr,e)}function Lg(n,t){const e=Wr(t,this.size,4);n.uniform4fv(this.addr,e)}function Ig(n,t){const e=Wr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Ug(n,t){const e=Wr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Ng(n,t){const e=Wr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Fg(n,t){n.uniform1iv(this.addr,t)}function Og(n,t){n.uniform2iv(this.addr,t)}function Bg(n,t){n.uniform3iv(this.addr,t)}function zg(n,t){n.uniform4iv(this.addr,t)}function kg(n,t){n.uniform1uiv(this.addr,t)}function Gg(n,t){n.uniform2uiv(this.addr,t)}function Hg(n,t){n.uniform3uiv(this.addr,t)}function Vg(n,t){n.uniform4uiv(this.addr,t)}function Wg(n,t,e){const i=this.cache,r=t.length,s=ka(e,r);Ve(i,s)||(n.uniform1iv(this.addr,s),We(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=yl:a=Ih;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function Xg(n,t,e){const i=this.cache,r=t.length,s=ka(e,r);Ve(i,s)||(n.uniform1iv(this.addr,s),We(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Nh,s[a])}function Yg(n,t,e){const i=this.cache,r=t.length,s=ka(e,r);Ve(i,s)||(n.uniform1iv(this.addr,s),We(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Fh,s[a])}function qg(n,t,e){const i=this.cache,r=t.length,s=ka(e,r);Ve(i,s)||(n.uniform1iv(this.addr,s),We(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Uh,s[a])}function $g(n){switch(n){case 5126:return Cg;case 35664:return Pg;case 35665:return Dg;case 35666:return Lg;case 35674:return Ig;case 35675:return Ug;case 35676:return Ng;case 5124:case 35670:return Fg;case 35667:case 35671:return Og;case 35668:case 35672:return Bg;case 35669:case 35673:return zg;case 5125:return kg;case 36294:return Gg;case 36295:return Hg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return qg}}class Kg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Rg(e.type)}}class Zg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$g(e.type)}}class Jg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const Ao=/(\w+)(\])?(\[|\.)?/g;function wu(n,t){n.seq.push(t),n.map[t.id]=t}function Qg(n,t,e){const i=n.name,r=i.length;for(Ao.lastIndex=0;;){const s=Ao.exec(i),a=Ao.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){wu(e,l===void 0?new Kg(o,n,t):new Zg(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new Jg(o),wu(e,d)),e=d}}}class da{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Qg(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Au(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const jg=37297;let t_=0;function e_(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Ru=new Ft;function n_(n){Zt._getMatrix(Ru,Zt.workingColorSpace,n);const t=`mat3( ${Ru.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(n)){case Sa:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Cu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+e_(n.getShaderSource(t),o)}else return s}function i_(n,t){const e=n_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const r_={[nh]:"Linear",[ih]:"Reinhard",[rh]:"Cineon",[Bl]:"ACESFilmic",[ah]:"AgX",[oh]:"Neutral",[sh]:"Custom"};function s_(n,t){const e=r_[t];return e===void 0?(It("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ia=new A;function a_(){Zt.getLuminanceCoefficients(ia);const n=ia.x.toFixed(4),t=ia.y.toFixed(4),e=ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(is).join(`
`)}function l_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function c_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function is(n){return n!==""}function Pu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Du(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const u_=/^[ \t]*#include +<([\w\d./]+)>/gm;function bl(n){return n.replace(u_,d_)}const h_=new Map;function d_(n,t){let e=kt[t];if(e===void 0){const i=h_.get(t);if(i!==void 0)e=kt[i],It('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return bl(e)}const f_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lu(n){return n.replace(f_,p_)}function p_(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Iu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const m_={[oa]:"SHADOWMAP_TYPE_PCF",[ns]:"SHADOWMAP_TYPE_VSM"};function g_(n){return m_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const __={[er]:"ENVMAP_TYPE_CUBE",[Or]:"ENVMAP_TYPE_CUBE",[Fa]:"ENVMAP_TYPE_CUBE_UV"};function x_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":__[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const v_={[Or]:"ENVMAP_MODE_REFRACTION"};function M_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":v_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const S_={[eh]:"ENVMAP_BLENDING_MULTIPLY",[Nd]:"ENVMAP_BLENDING_MIX",[Fd]:"ENVMAP_BLENDING_ADD"};function y_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":S_[n.combine]||"ENVMAP_BLENDING_NONE"}function b_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function E_(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=g_(e),l=x_(e),h=M_(e),d=y_(e),u=b_(e),p=o_(e),_=l_(s),S=r.createProgram();let m,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(is).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(is).join(`
`),f.length>0&&(f+=`
`)):(m=[Iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),f=[Iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?kt.tonemapping_pars_fragment:"",e.toneMapping!==si?s_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,i_("linearToOutputTexel",e.outputColorSpace),a_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(is).join(`
`)),a=bl(a),a=Pu(a,e),a=Du(a,e),o=bl(o),o=Pu(o,e),o=Du(o,e),a=Lu(a),o=Lu(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const C=b+m+a,E=b+f+o,x=Au(r,r.VERTEX_SHADER,C),M=Au(r,r.FRAGMENT_SHADER,E);r.attachShader(S,x),r.attachShader(S,M),e.index0AttributeName!==void 0?r.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function w(L){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(S)||"",B=r.getShaderInfoLog(x)||"",N=r.getShaderInfoLog(M)||"",k=O.trim(),q=B.trim(),X=N.trim();let tt=!0,Y=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(tt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,x,M);else{const Q=Cu(r,x,"vertex"),nt=Cu(r,M,"fragment");ee("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+Q+`
`+nt)}else k!==""?It("WebGLProgram: Program Info Log:",k):(q===""||X==="")&&(Y=!1);Y&&(L.diagnostics={runnable:tt,programLog:k,vertexShader:{log:q,prefix:m},fragmentShader:{log:X,prefix:f}})}r.deleteShader(x),r.deleteShader(M),g=new da(r,S),T=c_(r,S)}let g;this.getUniforms=function(){return g===void 0&&w(this),g};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(S,jg)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=t_++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=x,this.fragmentShader=M,this}let T_=0;class w_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new A_(t),e.set(t,i)),i}}class A_{constructor(t){this.id=T_++,this.code=t,this.usedTimes=0}}function R_(n){return n===nr||n===xa||n===va}function C_(n,t,e,i,r,s){const a=new vh,o=new w_,c=new Set,l=[],h=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){return c.add(g),g===0?"uv":`uv${g}`}function S(g,T,P,L,O,B){const N=L.fog,k=O.geometry,q=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?L.environment:null,X=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,tt=t.get(g.envMap||q,X),Y=tt&&tt.mapping===Fa?tt.image.height:null,Q=p[g.type];g.precision!==null&&(u=i.getMaxPrecision(g.precision),u!==g.precision&&It("WebGLProgram.getParameters:",g.precision,"not supported, using",u,"instead."));const nt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ot=nt!==void 0?nt.length:0;let yt=0;k.morphAttributes.position!==void 0&&(yt=1),k.morphAttributes.normal!==void 0&&(yt=2),k.morphAttributes.color!==void 0&&(yt=3);let pe,Qt,ie,K;if(Q){const ge=ti[Q];pe=ge.vertexShader,Qt=ge.fragmentShader}else{pe=g.vertexShader,Qt=g.fragmentShader;const ge=o.getVertexShaderStage(g),re=o.getFragmentShaderStage(g);o.update(g,ge,re),ie=ge.id,K=re.id}const et=n.getRenderTarget(),bt=n.state.buffers.depth.getReversed(),Nt=O.isInstancedMesh===!0,Mt=O.isBatchedMesh===!0,Gt=!!g.map,ze=!!g.matcap,Yt=!!tt,ne=!!g.aoMap,me=!!g.lightMap,$t=!!g.bumpMap&&g.wireframe===!1,be=!!g.normalMap,Xe=!!g.displacementMap,dn=!!g.emissiveMap,we=!!g.metalnessMap,Ue=!!g.roughnessMap,F=g.anisotropy>0,Je=g.clearcoat>0,oe=g.dispersion>0,R=g.retroreflectivity>0,v=g.iridescence>0,z=g.sheen>0,V=g.transmission>0,$=F&&!!g.anisotropyMap,at=Je&&!!g.clearcoatMap,lt=Je&&!!g.clearcoatNormalMap,Z=Je&&!!g.clearcoatRoughnessMap,j=v&&!!g.iridescenceMap,ct=v&&!!g.iridescenceThicknessMap,Rt=z&&!!g.sheenColorMap,ft=z&&!!g.sheenRoughnessMap,ut=!!g.specularMap,Ct=!!g.specularColorMap,Lt=!!g.specularIntensityMap,Ot=V&&!!g.transmissionMap,U=V&&!!g.thicknessMap,ht=!!g.gradientMap,J=!!g.alphaMap,dt=g.alphaTest>0,_t=!!g.alphaHash,it=!!g.extensions;let Dt=si;g.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Dt=n.toneMapping);const wt={shaderID:Q,shaderType:g.type,shaderName:g.name,vertexShader:pe,fragmentShader:Qt,defines:g.defines,customVertexShaderID:ie,customFragmentShaderID:K,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:u,batching:Mt,batchingColor:Mt&&O._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&O.instanceColor!==null,instancingMorph:Nt&&O.morphTexture!==null,outputColorSpace:et===null?n.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Zt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Gt,matcap:ze,envMap:Yt,envMapMode:Yt&&tt.mapping,envMapCubeUVHeight:Y,aoMap:ne,lightMap:me,bumpMap:$t,normalMap:be,displacementMap:Xe,emissiveMap:dn,normalMapObjectSpace:be&&g.normalMapType===zd,normalMapTangentSpace:be&&g.normalMapType===Sl,packedNormalMap:be&&g.normalMapType===Sl&&R_(g.normalMap.format),metalnessMap:we,roughnessMap:Ue,anisotropy:F,anisotropyMap:$,clearcoat:Je,clearcoatMap:at,clearcoatNormalMap:lt,clearcoatRoughnessMap:Z,dispersion:oe,retroreflection:R,iridescence:v,iridescenceMap:j,iridescenceThicknessMap:ct,sheen:z,sheenColorMap:Rt,sheenRoughnessMap:ft,specularMap:ut,specularColorMap:Ct,specularIntensityMap:Lt,transmission:V,transmissionMap:Ot,thicknessMap:U,gradientMap:ht,opaque:g.transparent===!1&&g.blending===ss&&g.alphaToCoverage===!1,alphaMap:J,alphaTest:dt,alphaHash:_t,combine:g.combine,mapUv:Gt&&_(g.map.channel),aoMapUv:ne&&_(g.aoMap.channel),lightMapUv:me&&_(g.lightMap.channel),bumpMapUv:$t&&_(g.bumpMap.channel),normalMapUv:be&&_(g.normalMap.channel),displacementMapUv:Xe&&_(g.displacementMap.channel),emissiveMapUv:dn&&_(g.emissiveMap.channel),metalnessMapUv:we&&_(g.metalnessMap.channel),roughnessMapUv:Ue&&_(g.roughnessMap.channel),anisotropyMapUv:$&&_(g.anisotropyMap.channel),clearcoatMapUv:at&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:lt&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&_(g.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:ft&&_(g.sheenRoughnessMap.channel),specularMapUv:ut&&_(g.specularMap.channel),specularColorMapUv:Ct&&_(g.specularColorMap.channel),specularIntensityMapUv:Lt&&_(g.specularIntensityMap.channel),transmissionMapUv:Ot&&_(g.transmissionMap.channel),thicknessMapUv:U&&_(g.thicknessMap.channel),alphaMapUv:J&&_(g.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(be||F),vertexNormals:!!k.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!k.attributes.uv&&(Gt||J),fog:!!N,useFog:g.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||k.attributes.normal===void 0&&be===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:bt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:yt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Gt&&g.map.isVideoTexture===!0&&Zt.getTransfer(g.map.colorSpace)===le,decodeVideoTextureEmissive:dn&&g.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(g.emissiveMap.colorSpace)===le,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===_n,flipSided:g.side===pn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:it&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&g.extensions.multiDraw===!0||Mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function m(g){const T=[];if(g.shaderID?T.push(g.shaderID):(T.push(g.customVertexShaderID),T.push(g.customFragmentShaderID)),g.defines!==void 0)for(const P in g.defines)T.push(P),T.push(g.defines[P]);return g.isRawShaderMaterial===!1&&(f(T,g),b(T,g),T.push(n.outputColorSpace)),T.push(g.customProgramCacheKey),T.join()}function f(g,T){g.push(T.precision),g.push(T.outputColorSpace),g.push(T.envMapMode),g.push(T.envMapCubeUVHeight),g.push(T.mapUv),g.push(T.alphaMapUv),g.push(T.lightMapUv),g.push(T.aoMapUv),g.push(T.bumpMapUv),g.push(T.normalMapUv),g.push(T.displacementMapUv),g.push(T.emissiveMapUv),g.push(T.metalnessMapUv),g.push(T.roughnessMapUv),g.push(T.anisotropyMapUv),g.push(T.clearcoatMapUv),g.push(T.clearcoatNormalMapUv),g.push(T.clearcoatRoughnessMapUv),g.push(T.iridescenceMapUv),g.push(T.iridescenceThicknessMapUv),g.push(T.sheenColorMapUv),g.push(T.sheenRoughnessMapUv),g.push(T.specularMapUv),g.push(T.specularColorMapUv),g.push(T.specularIntensityMapUv),g.push(T.transmissionMapUv),g.push(T.thicknessMapUv),g.push(T.combine),g.push(T.fogExp2),g.push(T.sizeAttenuation),g.push(T.morphTargetsCount),g.push(T.morphAttributeCount),g.push(T.numSunLights),g.push(T.numDirLights),g.push(T.numPointLights),g.push(T.numSpotLights),g.push(T.numSpotLightMaps),g.push(T.numHemiLights),g.push(T.numRectAreaLights),g.push(T.numSunLightShadows),g.push(T.numDirLightShadows),g.push(T.numPointLightShadows),g.push(T.numSpotLightShadows),g.push(T.numSpotLightShadowsWithMaps),g.push(T.numLightProbes),g.push(T.shadowMapType),g.push(T.toneMapping),g.push(T.numClippingPlanes),g.push(T.numClipIntersection),g.push(T.depthPacking)}function b(g,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function C(g){const T=p[g.type];let P;if(T){const L=ti[T];P=Xf.clone(L.uniforms)}else P=g.uniforms;return P}function E(g,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new E_(n,T,g,r),l.push(P),h.set(T,P)),P}function x(g){if(--g.usedTimes===0){const T=l.indexOf(g);l[T]=l[l.length-1],l.pop(),h.delete(g.cacheKey),g.destroy()}}function M(g){o.remove(g)}function w(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:C,acquireProgram:E,releaseProgram:x,releaseShaderCache:M,programs:l,dispose:w}}function P_(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function D_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Uu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Nu(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,_,S,m,f){let b=n[t];return b===void 0?(b={id:u.id,object:u,geometry:p,material:_,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:m,group:f},n[t]=b):(b.id=u.id,b.object=u,b.geometry=p,b.material=_,b.materialVariant=a(u),b.groupOrder=S,b.renderOrder=u.renderOrder,b.z=m,b.group=f),t++,b}function c(u,p,_,S,m,f,b){b.reversedDepth===!0&&(m=-m);const C=o(u,p,_,S,m,f);_.transmission>0?i.push(C):_.transparent===!0?r.push(C):e.push(C)}function l(u,p,_,S,m,f){const b=o(u,p,_,S,m,f);_.transmission>0?i.unshift(b):_.transparent===!0?r.unshift(b):e.unshift(b)}function h(u,p){e.length>1&&e.sort(u||D_),i.length>1&&i.sort(p||Uu),r.length>1&&r.sort(p||Uu)}function d(){for(let u=t,p=n.length;u<p;u++){const _=n[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:d,sort:h}}function L_(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new Nu,n.set(i,[a])):r>=s.length?(a=new Nu,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function I_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new A,color:new Wt};break;case"SpotLight":e={position:new A,direction:new A,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new A,halfWidth:new A,halfHeight:new A};break}return n[t.id]=e,e}}}function U_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let N_=0;function F_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function O_(n){const t=new I_,e=U_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new A);const r=new A,s=new Te,a=new Te;function o(l){let h=0,d=0,u=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let p=0,_=0,S=0,m=0,f=0,b=0,C=0,E=0,x=0,M=0,w=0,g=0,T=0,P=0;l.sort(F_);for(let O=0,B=l.length;O<B;O++){const N=l[O],k=N.color,q=N.intensity,X=N.distance;let tt=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===nr?tt=N.shadow.map.texture:tt=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=k.r*q,d+=k.g*q,u+=k.b*q;else if(N.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(N.sh.coefficients[Y],q);P++}else if(N.isSunLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Q=N.shadow,nt=e.get(N);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[_]=nt,i.sunShadowMap[_]=tt;const ot=Q.getViewportCount();for(let yt=0;yt<ot;yt++)i.sunShadowMatrix[S+yt]=Q.getMatrix(yt),i.sunShadowCascade[S+yt]=Q._cascadeData[yt];S+=ot,_++}i.sun[p]=Y,p++}else if(N.isDirectionalLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Q=N.shadow,nt=e.get(N);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,i.directionalShadow[m]=nt,i.directionalShadowMap[m]=tt,i.directionalShadowMatrix[m]=N.shadow.matrix,x++}i.directional[m]=Y,m++}else if(N.isSpotLight){const Y=t.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(k).multiplyScalar(q),Y.distance=X,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,i.spot[b]=Y;const Q=N.shadow;if(N.map&&(i.spotLightMap[g]=N.map,g++,Q.updateMatrices(N),N.castShadow&&T++),i.spotLightMatrix[b]=Q.matrix,N.castShadow){const nt=e.get(N);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,i.spotShadow[b]=nt,i.spotShadowMap[b]=tt,w++}b++}else if(N.isRectAreaLight){const Y=t.get(N);Y.color.copy(k).multiplyScalar(q),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),i.rectArea[C]=Y,C++}else if(N.isPointLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){const Q=N.shadow,nt=e.get(N);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,nt.shadowCameraNear=Q.camera.near,nt.shadowCameraFar=Q.camera.far,i.pointShadow[f]=nt,i.pointShadowMap[f]=tt,i.pointShadowMatrix[f]=N.shadow.matrix,M++}i.point[f]=Y,f++}else if(N.isHemisphereLight){const Y=t.get(N);Y.skyColor.copy(N.color).multiplyScalar(q),Y.groundColor.copy(N.groundColor).multiplyScalar(q),i.hemi[E]=Y,E++}}C>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const L=i.hash;(L.sunLength!==p||L.directionalLength!==m||L.pointLength!==f||L.spotLength!==b||L.rectAreaLength!==C||L.hemiLength!==E||L.numSunShadows!==_||L.numDirectionalShadows!==x||L.numPointShadows!==M||L.numSpotShadows!==w||L.numSpotMaps!==g||L.numLightProbes!==P)&&(i.sun.length=p,i.directional.length=m,i.spot.length=b,i.rectArea.length=C,i.point.length=f,i.hemi.length=E,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.directionalShadowMatrix.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=w,i.spotShadowMap.length=w,i.spotLightMatrix.length=w+g-T,i.spotLightMap.length=g,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,L.sunLength=p,L.directionalLength=m,L.pointLength=f,L.spotLength=b,L.rectAreaLength=C,L.hemiLength=E,L.numSunShadows=_,L.numDirectionalShadows=x,L.numPointShadows=M,L.numSpotShadows=w,L.numSpotMaps=g,L.numLightProbes=P,i.version=N_++)}function c(l,h){let d=0,u=0,p=0,_=0,S=0,m=0;const f=h.matrixWorldInverse;for(let b=0,C=l.length;b<C;b++){const E=l[b];if(E.isSunLight){const x=i.sun[d];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(f),d++}else if(E.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(f),u++}else if(E.isSpotLight){const x=i.spot[_];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(f),x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(f),_++}else if(E.isRectAreaLight){const x=i.rectArea[S];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(f),a.identity(),s.copy(E.matrixWorld),s.premultiply(f),a.extractRotation(s),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),S++}else if(E.isPointLight){const x=i.point[p];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(f),p++}else if(E.isHemisphereLight){const x=i.hemi[m];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(f),m++}}}return{setup:o,setupView:c,state:i}}function Fu(n){const t=new O_(n),e=[],i=[],r=[];function s(u){d.camera=u,e.length=0,i.length=0,r.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function c(u){r.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}const d={lightsArray:e,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function B_(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Fu(n),t.set(r,[o])):s>=a.length?(o=new Fu(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const z_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,G_=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],H_=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],Ou=new Te,ts=new A,Ro=new A;function V_(n,t,e){let i=new Jl;const r=new Pt,s=new Pt,a=new Re,o=new Kf,c=new Zf,l={},h=e.maxTextureSize,d={[tr]:pn,[pn]:tr,[_n]:_n},u=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:z_,fragmentShader:k_}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const _=new Ie;_.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Bt(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oa;let f=this.type;this.render=function(M,w,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===Qu&&(It("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=oa);const T=n.getRenderTarget(),P=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Ai),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=f!==this.type;B&&w.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(k=>k.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,k=M.length;N<k;N++){const q=M[N],X=q.shadow;if(X===void 0){It("WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const tt=X.getFrameExtents();r.multiply(tt),s.copy(X.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/tt.x),r.x=s.x*tt.x,X.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/tt.y),r.y=s.y*tt.y,X.mapSize.y=s.y));const Y=n.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Y,X.map===null||B===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===ns){if(q.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Gn(r.x,r.y,{format:nr,type:ui,minFilter:en,magFilter:en,generateMipmaps:!1}),X.map.texture.name=q.name+".shadowMap",X.map.depthTexture=new fs(r.x,r.y,ei),X.map.depthTexture.name=q.name+".shadowMapDepth",X.map.depthTexture.format=Pi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ze,X.map.depthTexture.magFilter=Ze}else q.isPointLight?(X.map=new Lh(r.x),X.map.depthTexture=new Hf(r.x,ci)):(X.map=new Gn(r.x,r.y),X.map.depthTexture=new fs(r.x,r.y,ci)),X.map.depthTexture.name=q.name+".shadowMap",X.map.depthTexture.format=Pi,this.type===oa?(X.map.depthTexture.compareFunction=Y?Yl:Xl,X.map.depthTexture.minFilter=en,X.map.depthTexture.magFilter=en):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ze,X.map.depthTexture.magFilter=Ze);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==r.x||X.map.height!==r.y)&&X.map.setSize(r.x,r.y);const Q=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();q.isPointLight!==!0&&X.updateMatrices(q,g);for(let nt=0;nt<Q;nt++){const ot=X.getCamera(nt);if(q.isPointLight){const yt=X.camera,pe=X.matrix,Qt=q.distance||yt.far;Qt!==yt.far&&(yt.far=Qt,yt.updateProjectionMatrix()),ts.setFromMatrixPosition(q.matrixWorld),yt.position.copy(ts),Ro.copy(yt.position),Ro.add(G_[nt]),yt.up.copy(H_[nt]),yt.lookAt(Ro),yt.updateMatrixWorld(),pe.makeTranslation(-ts.x,-ts.y,-ts.z),Ou.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Ou,yt.coordinateSystem,yt.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)n.setRenderTarget(X.map,nt),n.clear();else{nt===0&&(n.setRenderTarget(X.map),n.clear());const yt=X.getViewport(nt);a.set(s.x*yt.x,s.y*yt.y,s.x*yt.z,s.y*yt.w),O.viewport(a)}i=X.getFrustum(nt),E(w,g,ot,q,this.type)}X.isPointLightShadow!==!0&&this.type===ns&&b(X,g),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(T,P,L)};function b(M,w){const g=t.update(S);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null?M.mapPass=new Gn(r.x,r.y,{format:nr,type:ui}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(w,null,g,u,S,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value.set(M.map.width,M.map.height),p.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(w,null,g,p,S,null)}function C(M,w,g,T){let P=null;const L=g.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(L!==void 0)P=L;else if(P=g.isPointLight===!0?c:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const O=P.uuid,B=w.uuid;let N=l[O];N===void 0&&(N={},l[O]=N);let k=N[B];k===void 0&&(k=P.clone(),N[B]=k,w.addEventListener("dispose",x)),P=k}if(P.visible=w.visible,P.wireframe=w.wireframe,T===ns?P.side=w.shadowSide!==null?w.shadowSide:w.side:P.side=w.shadowSide!==null?w.shadowSide:d[w.side],P.alphaMap=w.alphaMap,P.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,P.map=w.map,P.clipShadows=w.clipShadows,P.clippingPlanes=w.clippingPlanes,P.clipIntersection=w.clipIntersection,P.displacementMap=w.displacementMap,P.displacementScale=w.displacementScale,P.displacementBias=w.displacementBias,P.wireframeLinewidth=w.wireframeLinewidth,P.linewidth=w.linewidth,g.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const O=n.properties.get(P);O.light=g}return P}function E(M,w,g,T,P){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&P===ns)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,M.matrixWorld);const B=t.update(M),N=M.material;if(Array.isArray(N)){const k=B.groups;for(let q=0,X=k.length;q<X;q++){const tt=k[q],Y=N[tt.materialIndex];if(Y&&Y.visible){const Q=C(M,Y,T,P);M.onBeforeShadow(n,M,w,g,B,Q,tt),n.renderBufferDirect(g,null,B,Q,M,tt),M.onAfterShadow(n,M,w,g,B,Q,tt)}}}else if(N.visible){const k=C(M,N,T,P);M.onBeforeShadow(n,M,w,g,B,k,null),n.renderBufferDirect(g,null,B,k,M,null),M.onAfterShadow(n,M,w,g,B,k,null)}}const O=M.children;for(let B=0,N=O.length;B<N;B++)E(O[B],w,g,T,P)}function x(M){M.target.removeEventListener("dispose",x);for(const g in l){const T=l[g],P=M.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function W_(n,t){function e(){let U=!1;const ht=new Re;let J=null;const dt=new Re(0,0,0,0);return{setMask:function(_t){J!==_t&&!U&&(n.colorMask(_t,_t,_t,_t),J=_t)},setLocked:function(_t){U=_t},setClear:function(_t,it,Dt,wt,ge){ge===!0&&(_t*=wt,it*=wt,Dt*=wt),ht.set(_t,it,Dt,wt),dt.equals(ht)===!1&&(n.clearColor(_t,it,Dt,wt),dt.copy(ht))},reset:function(){U=!1,J=null,dt.set(-1,0,0,0)}}}function i(){let U=!1,ht=!1,J=null,dt=null,_t=null;return{setReversed:function(it){if(ht!==it){const Dt=t.get("EXT_clip_control");it?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),ht=it;const wt=_t;_t=null,this.setClear(wt)}},getReversed:function(){return ht},setTest:function(it){it?et(n.DEPTH_TEST):bt(n.DEPTH_TEST)},setMask:function(it){J!==it&&!U&&(n.depthMask(it),J=it)},setFunc:function(it){if(ht&&(it=Zd[it]),dt!==it){switch(it){case Fo:n.depthFunc(n.NEVER);break;case Oo:n.depthFunc(n.ALWAYS);break;case Bo:n.depthFunc(n.LESS);break;case ls:n.depthFunc(n.LEQUAL);break;case zo:n.depthFunc(n.EQUAL);break;case ko:n.depthFunc(n.GEQUAL);break;case Go:n.depthFunc(n.GREATER);break;case Ho:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}dt=it}},setLocked:function(it){U=it},setClear:function(it){_t!==it&&(_t=it,ht&&(it=1-it),n.clearDepth(it))},reset:function(){U=!1,J=null,dt=null,_t=null,ht=!1}}}function r(){let U=!1,ht=null,J=null,dt=null,_t=null,it=null,Dt=null,wt=null,ge=null;return{setTest:function(re){U||(re?et(n.STENCIL_TEST):bt(n.STENCIL_TEST))},setMask:function(re){ht!==re&&!U&&(n.stencilMask(re),ht=re)},setFunc:function(re,Cn,$n){(J!==re||dt!==Cn||_t!==$n)&&(n.stencilFunc(re,Cn,$n),J=re,dt=Cn,_t=$n)},setOp:function(re,Cn,$n){(it!==re||Dt!==Cn||wt!==$n)&&(n.stencilOp(re,Cn,$n),it=re,Dt=Cn,wt=$n)},setLocked:function(re){U=re},setClear:function(re){ge!==re&&(n.clearStencil(re),ge=re)},reset:function(){U=!1,ht=null,J=null,dt=null,_t=null,it=null,Dt=null,wt=null,ge=null}}}const s=new e,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let h={},d={},u={},p=new WeakMap,_=[],S=null,m=!1,f=null,b=null,C=null,E=null,x=null,M=null,w=null,g=new Wt(0,0,0),T=0,P=!1,L=null,O=null,B=null,N=null,k=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,tt=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=tt>=1):Y.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=tt>=2);let Q=null,nt={};const ot=n.getParameter(n.SCISSOR_BOX),yt=n.getParameter(n.VIEWPORT),pe=new Re().fromArray(ot),Qt=new Re().fromArray(yt);function ie(U,ht,J,dt){const _t=new Uint8Array(4),it=n.createTexture();n.bindTexture(U,it),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Dt=0;Dt<J;Dt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ht,0,n.RGBA,1,1,dt,0,n.RGBA,n.UNSIGNED_BYTE,_t):n.texImage2D(ht+Dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_t);return it}const K={};K[n.TEXTURE_2D]=ie(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(n.DEPTH_TEST),a.setFunc(ls),$t(!1),be(Nc),et(n.CULL_FACE),ne(Ai);function et(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function bt(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Nt(U,ht){return u[U]!==ht?(n.bindFramebuffer(U,ht),u[U]=ht,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ht),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ht),!0):!1}function Mt(U,ht){let J=_,dt=!1;if(U){J=p.get(ht),J===void 0&&(J=[],p.set(ht,J));const _t=U.textures;if(J.length!==_t.length||J[0]!==n.COLOR_ATTACHMENT0){for(let it=0,Dt=_t.length;it<Dt;it++)J[it]=n.COLOR_ATTACHMENT0+it;J.length=_t.length,dt=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,dt=!0);dt&&n.drawBuffers(J)}function Gt(U){return S!==U?(n.useProgram(U),S=U,!0):!1}const ze={[Cr]:n.FUNC_ADD,[xd]:n.FUNC_SUBTRACT,[vd]:n.FUNC_REVERSE_SUBTRACT};ze[Md]=n.MIN,ze[Sd]=n.MAX;const Yt={[yd]:n.ZERO,[bd]:n.ONE,[Ed]:n.SRC_COLOR,[ju]:n.SRC_ALPHA,[Pd]:n.SRC_ALPHA_SATURATE,[Rd]:n.DST_COLOR,[wd]:n.DST_ALPHA,[Td]:n.ONE_MINUS_SRC_COLOR,[th]:n.ONE_MINUS_SRC_ALPHA,[Cd]:n.ONE_MINUS_DST_COLOR,[Ad]:n.ONE_MINUS_DST_ALPHA,[Dd]:n.CONSTANT_COLOR,[Ld]:n.ONE_MINUS_CONSTANT_COLOR,[Id]:n.CONSTANT_ALPHA,[Ud]:n.ONE_MINUS_CONSTANT_ALPHA};function ne(U,ht,J,dt,_t,it,Dt,wt,ge,re){if(U===Ai){m===!0&&(bt(n.BLEND),m=!1);return}if(m===!1&&(et(n.BLEND),m=!0),U!==_d){if(U!==f||re!==P){if((b!==Cr||x!==Cr)&&(n.blendEquation(n.FUNC_ADD),b=Cr,x=Cr),re)switch(U){case ss:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fc:n.blendFunc(n.ONE,n.ONE);break;case Oc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ee("WebGLState: Invalid blending: ",U);break}else switch(U){case ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Oc:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bc:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",U);break}C=null,E=null,M=null,w=null,g.set(0,0,0),T=0,f=U,P=re}return}_t=_t||ht,it=it||J,Dt=Dt||dt,(ht!==b||_t!==x)&&(n.blendEquationSeparate(ze[ht],ze[_t]),b=ht,x=_t),(J!==C||dt!==E||it!==M||Dt!==w)&&(n.blendFuncSeparate(Yt[J],Yt[dt],Yt[it],Yt[Dt]),C=J,E=dt,M=it,w=Dt),(wt.equals(g)===!1||ge!==T)&&(n.blendColor(wt.r,wt.g,wt.b,ge),g.copy(wt),T=ge),f=U,P=!1}function me(U,ht){U.side===_n?bt(n.CULL_FACE):et(n.CULL_FACE);let J=U.side===pn;ht&&(J=!J),$t(J),U.blending===ss&&U.transparent===!1?ne(Ai):ne(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const dt=U.stencilWrite;o.setTest(dt),dt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),dn(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?et(n.SAMPLE_ALPHA_TO_COVERAGE):bt(n.SAMPLE_ALPHA_TO_COVERAGE)}function $t(U){L!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),L=U)}function be(U){U!==md?(et(n.CULL_FACE),U!==O&&(U===Nc?n.cullFace(n.BACK):U===gd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):bt(n.CULL_FACE),O=U}function Xe(U){U!==B&&(X&&n.lineWidth(U),B=U)}function dn(U,ht,J){U?(et(n.POLYGON_OFFSET_FILL),(N!==ht||k!==J)&&(N=ht,k=J,a.getReversed()&&(ht=-ht),n.polygonOffset(ht,J))):bt(n.POLYGON_OFFSET_FILL)}function we(U){U?et(n.SCISSOR_TEST):bt(n.SCISSOR_TEST)}function Ue(U){U===void 0&&(U=n.TEXTURE0+q-1),Q!==U&&(n.activeTexture(U),Q=U)}function F(U,ht,J){J===void 0&&(Q===null?J=n.TEXTURE0+q-1:J=Q);let dt=nt[J];dt===void 0&&(dt={type:void 0,texture:void 0},nt[J]=dt),(dt.type!==U||dt.texture!==ht)&&(Q!==J&&(n.activeTexture(J),Q=J),n.bindTexture(U,ht||K[U]),dt.type=U,dt.texture=ht)}function Je(){const U=nt[Q];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function oe(){try{n.compressedTexImage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function v(){try{n.texSubImage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function z(){try{n.texSubImage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function $(){try{n.compressedTexSubImage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function at(){try{n.texStorage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function lt(){try{n.texStorage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function Z(){try{n.texImage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function j(){try{n.texImage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function ct(U){return d[U]!==void 0?d[U]:n.getParameter(U)}function Rt(U,ht){d[U]!==ht&&(n.pixelStorei(U,ht),d[U]=ht)}function ft(U){pe.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),pe.copy(U))}function ut(U){Qt.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Qt.copy(U))}function Ct(U,ht){let J=l.get(ht);J===void 0&&(J=new WeakMap,l.set(ht,J));let dt=J.get(U);dt===void 0&&(dt=n.getUniformBlockIndex(ht,U.name),J.set(U,dt))}function Lt(U,ht){const dt=l.get(ht).get(U);c.get(ht)!==dt&&(n.uniformBlockBinding(ht,dt,U.__bindingPointIndex),c.set(ht,dt))}function Ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},Q=null,nt={},u={},p=new WeakMap,_=[],S=null,m=!1,f=null,b=null,C=null,E=null,x=null,M=null,w=null,g=new Wt(0,0,0),T=0,P=!1,L=null,O=null,B=null,N=null,k=null,pe.set(0,0,n.canvas.width,n.canvas.height),Qt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:et,disable:bt,bindFramebuffer:Nt,drawBuffers:Mt,useProgram:Gt,setBlending:ne,setMaterial:me,setFlipSided:$t,setCullFace:be,setLineWidth:Xe,setPolygonOffset:dn,setScissorTest:we,activeTexture:Ue,bindTexture:F,unbindTexture:Je,compressedTexImage2D:oe,compressedTexImage3D:R,texImage2D:Z,texImage3D:j,pixelStorei:Rt,getParameter:ct,updateUBOMapping:Ct,uniformBlockBinding:Lt,texStorage2D:at,texStorage3D:lt,texSubImage2D:v,texSubImage3D:z,compressedTexSubImage2D:V,compressedTexSubImage3D:$,scissor:ft,viewport:ut,reset:Ot}}function X_(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Pt,h=new WeakMap,d=new Set;let u;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,v){return _?new OffscreenCanvas(R,v):ya("canvas")}function m(R,v,z){let V=1;const $=oe(R);if(($.width>z||$.height>z)&&(V=z/Math.max($.width,$.height)),V<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const at=Math.floor(V*$.width),lt=Math.floor(V*$.height);u===void 0&&(u=S(at,lt));const Z=v?S(at,lt):u;return Z.width=at,Z.height=lt,Z.getContext("2d").drawImage(R,0,0,at,lt),It("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+at+"x"+lt+")."),Z}else return"data"in R&&It("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function f(R){return R.generateMipmaps}function b(R){n.generateMipmap(R)}function C(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(R,v,z,V,$,at=!1){if(R!==null){if(n[R]!==void 0)return n[R];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let lt;V&&(lt=t.get("EXT_texture_norm16"),lt||It("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=v;if(v===n.RED&&(z===n.FLOAT&&(Z=n.R32F),z===n.HALF_FLOAT&&(Z=n.R16F),z===n.UNSIGNED_BYTE&&(Z=n.R8),z===n.UNSIGNED_SHORT&&lt&&(Z=lt.R16_EXT),z===n.SHORT&&lt&&(Z=lt.R16_SNORM_EXT)),v===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.R8UI),z===n.UNSIGNED_SHORT&&(Z=n.R16UI),z===n.UNSIGNED_INT&&(Z=n.R32UI),z===n.BYTE&&(Z=n.R8I),z===n.SHORT&&(Z=n.R16I),z===n.INT&&(Z=n.R32I)),v===n.RG&&(z===n.FLOAT&&(Z=n.RG32F),z===n.HALF_FLOAT&&(Z=n.RG16F),z===n.UNSIGNED_BYTE&&(Z=n.RG8),z===n.UNSIGNED_SHORT&&lt&&(Z=lt.RG16_EXT),z===n.SHORT&&lt&&(Z=lt.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RG8UI),z===n.UNSIGNED_SHORT&&(Z=n.RG16UI),z===n.UNSIGNED_INT&&(Z=n.RG32UI),z===n.BYTE&&(Z=n.RG8I),z===n.SHORT&&(Z=n.RG16I),z===n.INT&&(Z=n.RG32I)),v===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),z===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),z===n.UNSIGNED_INT&&(Z=n.RGB32UI),z===n.BYTE&&(Z=n.RGB8I),z===n.SHORT&&(Z=n.RGB16I),z===n.INT&&(Z=n.RGB32I)),v===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),z===n.UNSIGNED_INT&&(Z=n.RGBA32UI),z===n.BYTE&&(Z=n.RGBA8I),z===n.SHORT&&(Z=n.RGBA16I),z===n.INT&&(Z=n.RGBA32I)),v===n.RGB&&(z===n.UNSIGNED_SHORT&&lt&&(Z=lt.RGB16_EXT),z===n.SHORT&&lt&&(Z=lt.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),v===n.RGBA){const j=at?Sa:Zt.getTransfer($);z===n.FLOAT&&(Z=n.RGBA32F),z===n.HALF_FLOAT&&(Z=n.RGBA16F),z===n.UNSIGNED_BYTE&&(Z=j===le?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&lt&&(Z=lt.RGBA16_EXT),z===n.SHORT&&lt&&(Z=lt.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(R,v){let z;return R?v===null||v===ci||v===us?z=n.DEPTH24_STENCIL8:v===ei?z=n.DEPTH32F_STENCIL8:v===cs&&(z=n.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ci||v===us?z=n.DEPTH_COMPONENT24:v===ei?z=n.DEPTH_COMPONENT32F:v===cs&&(z=n.DEPTH_COMPONENT16),z}function M(R,v){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ze&&R.minFilter!==en?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function w(R){const v=R.target;v.removeEventListener("dispose",w),T(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function g(R){const v=R.target;v.removeEventListener("dispose",g),L(v)}function T(R){const v=i.get(R);if(v.__webglInit===void 0)return;const z=R.source,V=p.get(z);if(V){const $=V[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&P(R),Object.keys(V).length===0&&p.delete(z)}i.remove(R)}function P(R){const v=i.get(R);n.deleteTexture(v.__webglTexture);const z=R.source,V=p.get(z);delete V[v.__cacheKey],a.memory.textures--}function L(R){const v=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let $=0;$<v.__webglFramebuffer[V].length;$++)n.deleteFramebuffer(v.__webglFramebuffer[V][$]);else n.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)n.deleteFramebuffer(v.__webglFramebuffer[V]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const z=R.textures;for(let V=0,$=z.length;V<$;V++){const at=i.get(z[V]);at.__webglTexture&&(n.deleteTexture(at.__webglTexture),a.memory.textures--),i.remove(z[V])}i.remove(R)}let O=0;function B(){O=0}function N(){return O}function k(R){O=R}function q(){const R=O;return R>=r.maxTextures&&It("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),O+=1,R}function X(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function tt(R,v){const z=i.get(R);if(R.isVideoTexture&&F(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){const V=R.image;if(V===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(z,R,v);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+v)}function Y(R,v){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){bt(z,R,v);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+v)}function Q(R,v){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){bt(z,R,v);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+v)}function nt(R,v){const z=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){Nt(z,R,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+v)}const ot={[Vo]:n.REPEAT,[wi]:n.CLAMP_TO_EDGE,[Wo]:n.MIRRORED_REPEAT},yt={[Ze]:n.NEAREST,[Od]:n.NEAREST_MIPMAP_NEAREST,[Rs]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[Za]:n.LINEAR_MIPMAP_NEAREST,[Zi]:n.LINEAR_MIPMAP_LINEAR},pe={[Gd]:n.NEVER,[Yd]:n.ALWAYS,[Hd]:n.LESS,[Xl]:n.LEQUAL,[Vd]:n.EQUAL,[Yl]:n.GEQUAL,[Wd]:n.GREATER,[Xd]:n.NOTEQUAL};function Qt(R,v){if(v.type===ei&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===en||v.magFilter===Za||v.magFilter===Rs||v.magFilter===Zi||v.minFilter===en||v.minFilter===Za||v.minFilter===Rs||v.minFilter===Zi)&&It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,ot[v.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,ot[v.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,ot[v.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,yt[v.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,yt[v.minFilter]),v.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,pe[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ze||v.minFilter!==Rs&&v.minFilter!==Zi||v.type===ei&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ie(R,v){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",w));const V=v.source;let $=p.get(V);$===void 0&&($={},p.set(V,$));const at=X(v);if(at!==R.__cacheKey){$[at]===void 0&&($[at]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),$[at].usedTimes++;const lt=$[R.__cacheKey];lt!==void 0&&($[R.__cacheKey].usedTimes--,lt.usedTimes===0&&P(v)),R.__cacheKey=at,R.__webglTexture=$[at].texture}return z}function K(R,v,z){return Math.floor(Math.floor(R/z)/v)}function et(R,v,z,V){const at=R.updateRanges;if(at.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,z,V,v.data);else{at.sort((Rt,ft)=>Rt.start-ft.start);let lt=0;for(let Rt=1;Rt<at.length;Rt++){const ft=at[lt],ut=at[Rt],Ct=ft.start+ft.count,Lt=K(ut.start,v.width,4),Ot=K(ft.start,v.width,4);ut.start<=Ct+1&&Lt===Ot&&K(ut.start+ut.count-1,v.width,4)===Lt?ft.count=Math.max(ft.count,ut.start+ut.count-ft.start):(++lt,at[lt]=ut)}at.length=lt+1;const Z=e.getParameter(n.UNPACK_ROW_LENGTH),j=e.getParameter(n.UNPACK_SKIP_PIXELS),ct=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let Rt=0,ft=at.length;Rt<ft;Rt++){const ut=at[Rt],Ct=Math.floor(ut.start/4),Lt=Math.ceil(ut.count/4),Ot=Ct%v.width,U=Math.floor(Ct/v.width),ht=Lt,J=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Ot),e.pixelStorei(n.UNPACK_SKIP_ROWS,U),e.texSubImage2D(n.TEXTURE_2D,0,Ot,U,ht,J,z,V,v.data)}R.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Z),e.pixelStorei(n.UNPACK_SKIP_PIXELS,j),e.pixelStorei(n.UNPACK_SKIP_ROWS,ct)}}function bt(R,v,z){let V=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=n.TEXTURE_3D);const $=ie(R,v),at=v.source;e.bindTexture(V,R.__webglTexture,n.TEXTURE0+z);const lt=i.get(at);if(at.version!==lt.__version||$===!0){if(e.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const J=Zt.getPrimaries(Zt.workingColorSpace),dt=v.colorSpace===Gi?null:Zt.getPrimaries(v.colorSpace),_t=v.colorSpace===Gi||J===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t)}e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let j=m(v.image,!1,r.maxTextureSize);j=Je(v,j);const ct=s.convert(v.format,v.colorSpace),Rt=s.convert(v.type);let ft=E(v.internalFormat,ct,Rt,v.normalized,v.colorSpace,v.isVideoTexture);Qt(V,v);let ut;const Ct=v.mipmaps,Lt=v.isVideoTexture!==!0,Ot=lt.__version===void 0||$===!0,U=at.dataReady,ht=M(v,j);if(v.isDepthTexture)ft=x(v.format===Ji,v.type),Ot&&(Lt?e.texStorage2D(n.TEXTURE_2D,1,ft,j.width,j.height):e.texImage2D(n.TEXTURE_2D,0,ft,j.width,j.height,0,ct,Rt,null));else if(v.isDataTexture)if(Ct.length>0){Lt&&Ot&&e.texStorage2D(n.TEXTURE_2D,ht,ft,Ct[0].width,Ct[0].height);for(let J=0,dt=Ct.length;J<dt;J++)ut=Ct[J],Lt?U&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,ut.width,ut.height,ct,Rt,ut.data):e.texImage2D(n.TEXTURE_2D,J,ft,ut.width,ut.height,0,ct,Rt,ut.data);v.generateMipmaps=!1}else Lt?(Ot&&e.texStorage2D(n.TEXTURE_2D,ht,ft,j.width,j.height),U&&et(v,j,ct,Rt)):e.texImage2D(n.TEXTURE_2D,0,ft,j.width,j.height,0,ct,Rt,j.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Lt&&Ot&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ht,ft,Ct[0].width,Ct[0].height,j.depth);for(let J=0,dt=Ct.length;J<dt;J++)if(ut=Ct[J],v.format!==kn)if(ct!==null)if(Lt){if(U)if(v.layerUpdates.size>0){const _t=mu(ut.width,ut.height,v.format,v.type);for(const it of v.layerUpdates){const Dt=ut.data.subarray(it*_t/ut.data.BYTES_PER_ELEMENT,(it+1)*_t/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,it,ut.width,ut.height,1,ct,Dt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ut.width,ut.height,j.depth,ct,ut.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,ft,ut.width,ut.height,j.depth,0,ut.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ut.width,ut.height,j.depth,ct,Rt,ut.data):e.texImage3D(n.TEXTURE_2D_ARRAY,J,ft,ut.width,ut.height,j.depth,0,ct,Rt,ut.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Lt&&Ot&&e.texStorage2D(n.TEXTURE_2D,ht,ft,Ct[0].width,Ct[0].height);for(let J=0,dt=Ct.length;J<dt;J++)ut=Ct[J],v.format!==kn?ct!==null?Lt?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,ut.width,ut.height,ct,ut.data):e.compressedTexImage2D(n.TEXTURE_2D,J,ft,ut.width,ut.height,0,ut.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?U&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,ut.width,ut.height,ct,Rt,ut.data):e.texImage2D(n.TEXTURE_2D,J,ft,ut.width,ut.height,0,ct,Rt,ut.data)}else if(v.isDataArrayTexture)if(Lt){if(Ot&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ht,ft,j.width,j.height,j.depth),U)if(v.layerUpdates.size>0){const J=mu(j.width,j.height,v.format,v.type);for(const dt of v.layerUpdates){const _t=j.data.subarray(dt*J/j.data.BYTES_PER_ELEMENT,(dt+1)*J/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,dt,j.width,j.height,1,ct,Rt,_t)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ct,Rt,j.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ft,j.width,j.height,j.depth,0,ct,Rt,j.data);else if(v.isData3DTexture)Lt?(Ot&&e.texStorage3D(n.TEXTURE_3D,ht,ft,j.width,j.height,j.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ct,Rt,j.data)):e.texImage3D(n.TEXTURE_3D,0,ft,j.width,j.height,j.depth,0,ct,Rt,j.data);else if(v.isFramebufferTexture){if(Ot)if(Lt)e.texStorage2D(n.TEXTURE_2D,ht,ft,j.width,j.height);else{let J=j.width,dt=j.height;for(let _t=0;_t<ht;_t++)e.texImage2D(n.TEXTURE_2D,_t,ft,J,dt,0,ct,Rt,null),J>>=1,dt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){const J=n.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),j.parentNode!==J){J.appendChild(j),d.add(v),J.onpaint=dt=>{const _t=dt.changedElements;for(const it of d)_t.includes(it.image)&&(it.needsUpdate=!0)},J.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,j);else{const _t=n.RGBA,it=n.RGBA,Dt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,_t,it,Dt,j)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ct.length>0){if(Lt&&Ot){const J=oe(Ct[0]);e.texStorage2D(n.TEXTURE_2D,ht,ft,J.width,J.height)}for(let J=0,dt=Ct.length;J<dt;J++)ut=Ct[J],Lt?U&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,ct,Rt,ut):e.texImage2D(n.TEXTURE_2D,J,ft,ct,Rt,ut);v.generateMipmaps=!1}else if(Lt){if(Ot){const J=oe(j);e.texStorage2D(n.TEXTURE_2D,ht,ft,J.width,J.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ct,Rt,j)}else e.texImage2D(n.TEXTURE_2D,0,ft,ct,Rt,j);f(v)&&b(V),lt.__version=at.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Nt(R,v,z){if(v.image.length!==6)return;const V=ie(R,v),$=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+z);const at=i.get($);if($.version!==at.__version||V===!0){e.activeTexture(n.TEXTURE0+z);const lt=Zt.getPrimaries(Zt.workingColorSpace),Z=v.colorSpace===Gi?null:Zt.getPrimaries(v.colorSpace),j=v.colorSpace===Gi||lt===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const ct=v.isCompressedTexture||v.image[0].isCompressedTexture,Rt=v.image[0]&&v.image[0].isDataTexture,ft=[];for(let it=0;it<6;it++)!ct&&!Rt?ft[it]=m(v.image[it],!0,r.maxCubemapSize):ft[it]=Rt?v.image[it].image:v.image[it],ft[it]=Je(v,ft[it]);const ut=ft[0],Ct=s.convert(v.format,v.colorSpace),Lt=s.convert(v.type),Ot=E(v.internalFormat,Ct,Lt,v.normalized,v.colorSpace),U=v.isVideoTexture!==!0,ht=at.__version===void 0||V===!0,J=$.dataReady;let dt=M(v,ut);Qt(n.TEXTURE_CUBE_MAP,v);let _t;if(ct){U&&ht&&e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,Ot,ut.width,ut.height);for(let it=0;it<6;it++){_t=ft[it].mipmaps;for(let Dt=0;Dt<_t.length;Dt++){const wt=_t[Dt];v.format!==kn?Ct!==null?U?J&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Dt,0,0,wt.width,wt.height,Ct,wt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Dt,Ot,wt.width,wt.height,0,wt.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Dt,0,0,wt.width,wt.height,Ct,Lt,wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Dt,Ot,wt.width,wt.height,0,Ct,Lt,wt.data)}}}else{if(_t=v.mipmaps,U&&ht){_t.length>0&&dt++;const it=oe(ft[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,Ot,it.width,it.height)}for(let it=0;it<6;it++)if(Rt){U?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,ft[it].width,ft[it].height,Ct,Lt,ft[it].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Ot,ft[it].width,ft[it].height,0,Ct,Lt,ft[it].data);for(let Dt=0;Dt<_t.length;Dt++){const ge=_t[Dt].image[it].image;U?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Dt+1,0,0,ge.width,ge.height,Ct,Lt,ge.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Dt+1,Ot,ge.width,ge.height,0,Ct,Lt,ge.data)}}else{U?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ct,Lt,ft[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Ot,Ct,Lt,ft[it]);for(let Dt=0;Dt<_t.length;Dt++){const wt=_t[Dt];U?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Dt+1,0,0,Ct,Lt,wt.image[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Dt+1,Ot,Ct,Lt,wt.image[it])}}}f(v)&&b(n.TEXTURE_CUBE_MAP),at.__version=$.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Mt(R,v,z,V,$,at){const lt=s.convert(z.format,z.colorSpace),Z=s.convert(z.type),j=E(z.internalFormat,lt,Z,z.normalized,z.colorSpace),ct=i.get(v),Rt=i.get(z);if(Rt.__renderTarget=v,!ct.__hasExternalTextures){const ft=Math.max(1,v.width>>at),ut=Math.max(1,v.height>>at);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?e.texImage3D($,at,j,ft,ut,v.depth,0,lt,Z,null):e.texImage2D($,at,j,ft,ut,0,lt,Z,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),Ue(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,$,Rt.__webglTexture,0,we(v)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,$,Rt.__webglTexture,at),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Gt(R,v,z){if(n.bindRenderbuffer(n.RENDERBUFFER,R),v.depthBuffer){const V=v.depthTexture,$=V&&V.isDepthTexture?V.type:null,at=x(v.stencilBuffer,$),lt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ue(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we(v),at,v.width,v.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,we(v),at,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,at,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,R)}else{const V=v.textures;for(let $=0;$<V.length;$++){const at=V[$],lt=s.convert(at.format,at.colorSpace),Z=s.convert(at.type),j=E(at.internalFormat,lt,Z,at.normalized,at.colorSpace);Ue(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we(v),j,v.width,v.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,we(v),j,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,j,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ze(R,v,z){const V=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=i.get(v.depthTexture);if($.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V){if($.__webglInit===void 0&&($.__webglInit=!0,v.depthTexture.addEventListener("dispose",w)),$.__webglTexture===void 0){$.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Qt(n.TEXTURE_CUBE_MAP,v.depthTexture);const ct=s.convert(v.depthTexture.format),Rt=s.convert(v.depthTexture.type);let ft;v.depthTexture.format===Pi?ft=n.DEPTH_COMPONENT24:v.depthTexture.format===Ji&&(ft=n.DEPTH24_STENCIL8);for(let ut=0;ut<6;ut++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,ft,v.width,v.height,0,ct,Rt,null)}}else tt(v.depthTexture,0);const at=$.__webglTexture,lt=we(v),Z=V?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,j=v.depthTexture.format===Ji?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===Pi)Ue(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,Z,at,0,lt):n.framebufferTexture2D(n.FRAMEBUFFER,j,Z,at,0);else if(v.depthTexture.format===Ji)Ue(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,Z,at,0,lt):n.framebufferTexture2D(n.FRAMEBUFFER,j,Z,at,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Yt(R){const v=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const V=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),V){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,V.removeEventListener("dispose",$)};V.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=V}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(z)for(let V=0;V<6;V++)ze(v.__webglFramebuffer[V],R,V);else{const V=R.texture.mipmaps;V&&V.length>0?ze(v.__webglFramebuffer[0],R,0):ze(v.__webglFramebuffer,R,0)}else if(z){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]===void 0)v.__webglDepthbuffer[V]=n.createRenderbuffer(),Gt(v.__webglDepthbuffer[V],R,!1);else{const $=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=v.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,at)}}else{const V=R.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Gt(v.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,at)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(R,v,z){const V=i.get(R);v!==void 0&&Mt(V.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Yt(R)}function me(R){const v=R.texture,z=i.get(R),V=i.get(v);R.addEventListener("dispose",g);const $=R.textures,at=R.isWebGLCubeRenderTarget===!0,lt=$.length>1;if(lt||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=v.version,a.memory.textures++),at){z.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[Z]=[];for(let j=0;j<v.mipmaps.length;j++)z.__webglFramebuffer[Z][j]=n.createFramebuffer()}else z.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let Z=0;Z<v.mipmaps.length;Z++)z.__webglFramebuffer[Z]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(lt)for(let Z=0,j=$.length;Z<j;Z++){const ct=i.get($[Z]);ct.__webglTexture===void 0&&(ct.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&Ue(R)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Z=0;Z<$.length;Z++){const j=$[Z];z.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[Z]);const ct=s.convert(j.format,j.colorSpace),Rt=s.convert(j.type),ft=E(j.internalFormat,ct,Rt,j.normalized,j.colorSpace,R.isXRRenderTarget===!0),ut=we(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,ft,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,z.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Gt(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(at){e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),Qt(n.TEXTURE_CUBE_MAP,v);for(let Z=0;Z<6;Z++)if(v.mipmaps&&v.mipmaps.length>0)for(let j=0;j<v.mipmaps.length;j++)Mt(z.__webglFramebuffer[Z][j],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,j);else Mt(z.__webglFramebuffer[Z],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);f(v)&&b(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let Z=0,j=$.length;Z<j;Z++){const ct=$[Z],Rt=i.get(ct);let ft=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ft=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,Rt.__webglTexture),Qt(ft,ct),Mt(z.__webglFramebuffer,R,ct,n.COLOR_ATTACHMENT0+Z,ft,0),f(ct)&&b(ft)}e.unbindTexture()}else{let Z=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Z,V.__webglTexture),Qt(Z,v),v.mipmaps&&v.mipmaps.length>0)for(let j=0;j<v.mipmaps.length;j++)Mt(z.__webglFramebuffer[j],R,v,n.COLOR_ATTACHMENT0,Z,j);else Mt(z.__webglFramebuffer,R,v,n.COLOR_ATTACHMENT0,Z,0);f(v)&&b(Z),e.unbindTexture()}R.depthBuffer&&Yt(R)}function $t(R){const v=R.textures;for(let z=0,V=v.length;z<V;z++){const $=v[z];if(f($)){const at=C(R),lt=i.get($).__webglTexture;e.bindTexture(at,lt),b(at),e.unbindTexture()}}}const be=[],Xe=[];function dn(R){if(R.samples>0){if(Ue(R)===!1){const v=R.textures,z=R.width,V=R.height;let $=n.COLOR_BUFFER_BIT;const at=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=i.get(R),Z=v.length>1;if(Z)for(let ct=0;ct<v.length;ct++)e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer);const j=R.texture.mipmaps;j&&j.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let ct=0;ct<v.length;ct++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,lt.__webglColorRenderbuffer[ct]);const Rt=i.get(v[ct]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Rt,0)}n.blitFramebuffer(0,0,z,V,0,0,z,V,$,n.NEAREST),c===!0&&(be.length=0,Xe.length=0,be.push(n.COLOR_ATTACHMENT0+ct),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(be.push(at),Xe.push(at),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Xe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,be))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let ct=0;ct<v.length;ct++){e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,lt.__webglColorRenderbuffer[ct]);const Rt=i.get(v[ct]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,Rt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){const v=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function we(R){return Math.min(r.maxSamples,R.samples)}function Ue(R){const v=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function F(R){const v=a.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function Je(R,v){const z=R.colorSpace,V=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Ma&&z!==Gi&&(Zt.getTransfer(z)===le?(V!==kn||$!==xn)&&It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",z)),v}function oe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=B,this.getTextureUnits=N,this.setTextureUnits=k,this.setTexture2D=tt,this.setTexture2DArray=Y,this.setTexture3D=Q,this.setTextureCube=nt,this.rebindTextures=ne,this.setupRenderTarget=me,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Ue,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Y_(n,t){function e(i,r=Gi){let s;const a=Zt.getTransfer(r);if(i===xn)return n.UNSIGNED_BYTE;if(i===kl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Gl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===dh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ch)return n.BYTE;if(i===uh)return n.SHORT;if(i===cs)return n.UNSIGNED_SHORT;if(i===zl)return n.INT;if(i===ci)return n.UNSIGNED_INT;if(i===ei)return n.FLOAT;if(i===ui)return n.HALF_FLOAT;if(i===fh)return n.ALPHA;if(i===ph)return n.RGB;if(i===kn)return n.RGBA;if(i===Pi)return n.DEPTH_COMPONENT;if(i===Ji)return n.DEPTH_STENCIL;if(i===mh)return n.RED;if(i===Hl)return n.RED_INTEGER;if(i===nr)return n.RG;if(i===Vl)return n.RG_INTEGER;if(i===Wl)return n.RGBA_INTEGER;if(i===la||i===ca||i===ua||i===ha)if(a===le)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===la)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===la)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ca)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ua)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ha)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xo||i===Yo||i===qo||i===$o)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Xo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$o)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ko||i===Zo||i===Jo||i===Qo||i===jo||i===xa||i===tl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ko||i===Zo)return a===le?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Jo)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Qo)return s.COMPRESSED_R11_EAC;if(i===jo)return s.COMPRESSED_SIGNED_R11_EAC;if(i===xa)return s.COMPRESSED_RG11_EAC;if(i===tl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===el||i===nl||i===il||i===rl||i===sl||i===al||i===ol||i===ll||i===cl||i===ul||i===hl||i===dl||i===fl||i===pl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===el)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===il)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===al)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ol)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ll)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ul)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ml||i===gl||i===_l)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===ml)return a===le?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_l)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xl||i===vl||i===va||i===Ml)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===xl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===vl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===va)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ml)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===us?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const q_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class K_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new wh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new di({vertexShader:q_,fragmentShader:$_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Bt(new Li(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Z_ extends Vi{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,_=null;const S=typeof XRWebGLBinding<"u",m=new K_,f={},b=e.getContextAttributes();let C=null,E=null;const x=[],M=[],w=new Pt;let g=null,T=null;const P=new Tn;P.viewport=new Re;const L=new Tn;L.viewport=new Re;const O=[P,L],B=new ip;let N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let et=x[K];return et===void 0&&(et=new io,x[K]=et),et.getTargetRaySpace()},this.getControllerGrip=function(K){let et=x[K];return et===void 0&&(et=new io,x[K]=et),et.getGripSpace()},this.getHand=function(K){let et=x[K];return et===void 0&&(et=new io,x[K]=et),et.getHandSpace()};function q(K){const et=M.indexOf(K.inputSource);if(et===-1)return;const bt=x[et];bt!==void 0&&(bt.update(K.inputSource,K.frame,l||a),bt.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",tt);for(let K=0;K<x.length;K++){const et=M[K];et!==null&&(M[K]=null,x[K].disconnect(et))}N=null,k=null,m.reset();for(const K in f)delete f[K];if(t.setRenderTarget(C),p=null,u=null,d=null,r=null,E=null,ie.stop(),i.isPresenting=!1,t.setPixelRatio(g),t.setSize(w.width,w.height,!1),T!==null){const K=T.camera;K.fov=T.fov,K.zoom=T.zoom,K.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(r,e)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(C=t.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",X),r.addEventListener("inputsourceschange",tt),b.xrCompatible!==!0&&await e.makeXRCompatible(),g=t.getPixelRatio(),t.getSize(w),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Nt=null,Mt=null;b.depth&&(Mt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=b.stencil?Ji:Pi,Nt=b.stencil?us:ci);const Gt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Gt),r.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),E=new Gn(u.textureWidth,u.textureHeight,{format:kn,type:xn,depthTexture:new fs(u.textureWidth,u.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const bt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,bt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Gn(p.framebufferWidth,p.framebufferHeight,{format:kn,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ie.setContext(r),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function tt(K){for(let et=0;et<K.removed.length;et++){const bt=K.removed[et],Nt=M.indexOf(bt);Nt>=0&&(M[Nt]=null,x[Nt].disconnect(bt))}for(let et=0;et<K.added.length;et++){const bt=K.added[et];let Nt=M.indexOf(bt);if(Nt===-1){for(let Gt=0;Gt<x.length;Gt++)if(Gt>=M.length){M.push(bt),Nt=Gt;break}else if(M[Gt]===null){M[Gt]=bt,Nt=Gt;break}if(Nt===-1)break}const Mt=x[Nt];Mt&&Mt.connect(bt)}}const Y=new A,Q=new A;function nt(K,et,bt){Y.setFromMatrixPosition(et.matrixWorld),Q.setFromMatrixPosition(bt.matrixWorld);const Nt=Y.distanceTo(Q),Mt=et.projectionMatrix.elements,Gt=bt.projectionMatrix.elements,ze=Mt[14]/(Mt[10]-1),Yt=Mt[14]/(Mt[10]+1),ne=(Mt[9]+1)/Mt[5],me=(Mt[9]-1)/Mt[5],$t=(Mt[8]-1)/Mt[0],be=(Gt[8]+1)/Gt[0],Xe=ze*$t,dn=ze*be,we=Nt/(-$t+be),Ue=we*-$t;if(et.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ue),K.translateZ(we),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Mt[10]===-1)K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const F=ze+we,Je=Yt+we,oe=Xe-Ue,R=dn+(Nt-Ue),v=ne*Yt/Je*F,z=me*Yt/Je*F;K.projectionMatrix.makePerspective(oe,R,v,z,F,Je),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ot(K,et){et===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(et.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let et=K.near,bt=K.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(bt=m.depthFar)),B.near=L.near=P.near=et,B.far=L.far=P.far=bt,(N!==B.near||k!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),N=B.near,k=B.far),B.layers.mask=K.layers.mask|6,P.layers.mask=B.layers.mask&-5,L.layers.mask=B.layers.mask&-3;const Nt=K.parent,Mt=B.cameras;ot(B,Nt);for(let Gt=0;Gt<Mt.length;Gt++)ot(Mt[Gt],Nt);Mt.length===2?nt(B,P,L):B.projectionMatrix.copy(P.projectionMatrix),T===null&&K.isPerspectiveCamera&&(T={camera:K,fov:K.fov,zoom:K.zoom}),yt(K,B,Nt)};function yt(K,et,bt){bt===null?K.matrix.copy(et.matrixWorld):(K.matrix.copy(bt.matrixWorld),K.matrix.invert(),K.matrix.multiply(et.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ds*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(K){c=K,u!==null&&(u.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(K){return f[K]};let pe=null;function Qt(K,et){if(h=et.getViewerPose(l||a),_=et,h!==null){const bt=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let Nt=!1;bt.length!==B.cameras.length&&(B.cameras.length=0,Nt=!0);for(let Yt=0;Yt<bt.length;Yt++){const ne=bt[Yt];let me=null;if(p!==null)me=p.getViewport(ne);else{const be=d.getViewSubImage(u,ne);me=be.viewport,Yt===0&&(t.setRenderTargetTextures(E,be.colorTexture,be.depthStencilTexture),t.setRenderTarget(E))}let $t=O[Yt];$t===void 0&&($t=new Tn,$t.layers.enable(Yt),$t.viewport=new Re,O[Yt]=$t),$t.matrix.fromArray(ne.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(ne.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(me.x,me.y,me.width,me.height),Yt===0&&(B.matrix.copy($t.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Nt===!0&&B.cameras.push($t)}const Mt=r.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){d=i.getBinding();const Yt=d.getDepthInformation(bt[0]);Yt&&Yt.isValid&&Yt.texture&&m.init(Yt,r.renderState)}if(Mt&&Mt.includes("camera-access")&&S){t.state.unbindTexture(),d=i.getBinding();for(let Yt=0;Yt<bt.length;Yt++){const ne=bt[Yt].camera;if(ne){let me=f[ne];me||(me=new wh,f[ne]=me);const $t=d.getCameraImage(ne);me.sourceTexture=$t}}}}for(let bt=0;bt<x.length;bt++){const Nt=M[bt],Mt=x[bt];Nt!==null&&Mt!==void 0&&Mt.update(Nt,et,l||a)}pe&&pe(K,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),_=null}const ie=new Ph;ie.setAnimationLoop(Qt),this.setAnimationLoop=function(K){pe=K},this.dispose=function(){}}}const J_=new Te,Oh=new Ft;Oh.set(-1,0,0,0,1,0,0,0,1);function Q_(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Ah(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,b,C,E){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),S(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,b,C):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===pn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===pn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=t.get(f),C=b.envMap,E=b.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(J_.makeRotationFromEuler(E)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Oh),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,b,C){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=C*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===pn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function S(m,f){const b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function j_(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,x){const M=x.program;i.uniformBlockBinding(E,M)}function l(E,x){let M=r[E.id];M===void 0&&(m(E),M=h(E),r[E.id]=M,E.addEventListener("dispose",b));const w=x.program;i.updateUBOMapping(E,w);const g=t.render.frame;s[E.id]!==g&&(u(E),s[E.id]=g)}function h(E){const x=d();E.__bindingPointIndex=x;const M=n.createBuffer(),w=E.__size,g=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,w,g),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,M),M}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){const x=r[E.id],M=E.uniforms,w=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let g=0,T=M.length;g<T;g++){const P=M[g];if(Array.isArray(P))for(let L=0,O=P.length;L<O;L++)p(P[L],g,L,w);else p(P,g,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,x,M,w){if(S(E,x,M,w)===!0){const g=E.__offset,T=E.value;if(Array.isArray(T)){let P=0;for(let L=0;L<T.length;L++){const O=T[L],B=f(O);_(O,E.__data,P),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(P+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(T,E.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,g,E.__data)}}function _(E,x,M){typeof E=="number"||typeof E=="boolean"?x[0]=E:E.isMatrix3?(x[0]=E.elements[0],x[1]=E.elements[1],x[2]=E.elements[2],x[3]=0,x[4]=E.elements[3],x[5]=E.elements[4],x[6]=E.elements[5],x[7]=0,x[8]=E.elements[6],x[9]=E.elements[7],x[10]=E.elements[8],x[11]=0):ArrayBuffer.isView(E)?x.set(new E.constructor(E.buffer,E.byteOffset,x.length)):E.toArray(x,M)}function S(E,x,M,w){const g=E.value,T=x+"_"+M;if(w[T]===void 0)return typeof g=="number"||typeof g=="boolean"?w[T]=g:ArrayBuffer.isView(g)?w[T]=g.slice():w[T]=g.clone(),!0;{const P=w[T];if(typeof g=="number"||typeof g=="boolean"){if(P!==g)return w[T]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(P.equals(g)===!1)return P.copy(g),!0}}return!1}function m(E){const x=E.uniforms;let M=0;const w=16;for(let T=0,P=x.length;T<P;T++){const L=Array.isArray(x[T])?x[T]:[x[T]];for(let O=0,B=L.length;O<B;O++){const N=L[O],k=Array.isArray(N.value)?N.value:[N.value];for(let q=0,X=k.length;q<X;q++){const tt=k[q],Y=f(tt),Q=M%w,nt=Q%Y.boundary,ot=Q+nt;M+=nt,ot!==0&&w-ot<Y.storage&&(M+=w-ot),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=Y.storage}}}const g=M%w;return g>0&&(M+=w-g),E.__size=M,E.__cache={},this}function f(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?It("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(x.boundary=16,x.storage=E.byteLength):It("WebGLRenderer: Unsupported uniform value type.",E),x}function b(E){const x=E.target;x.removeEventListener("dispose",b);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function C(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:c,update:l,dispose:C}}const tx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Jn=null;function ex(){return Jn===null&&(Jn=new Bf(tx,16,16,nr,ui),Jn.name="DFG_LUT",Jn.minFilter=en,Jn.magFilter=en,Jn.wrapS=wi,Jn.wrapT=wi,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}class nx{constructor(t={}){const{canvas:e=$d(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=xn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const S=p,m=new Set([Wl,Vl,Hl]),f=new Set([xn,ci,cs,us,kl,Gl]),b=new Uint32Array(4),C=new Int32Array(4),E=new A;let x=null,M=null;const w=[],g=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let L=!1,O=null,B=null,N=null,k=null;this._outputColorSpace=on;let q=0,X=0,tt=null,Y=-1,Q=null;const nt=new Re,ot=new Re;let yt=null;const pe=new Wt(0);let Qt=0,ie=e.width,K=e.height,et=1,bt=null,Nt=null;const Mt=new Re(0,0,ie,K),Gt=new Re(0,0,ie,K);let ze=!1;const Yt=new Jl;let ne=!1,me=!1;const $t=new Te,be=new A,Xe=new Re,dn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function Ue(){return tt===null?et:1}let F=i;function Je(y,I){return e.getContext(y,I)}let oe,R,v,z,V,$,at,lt,Z,j,ct,Rt,ft,ut,Ct,Lt,Ot,U,ht,J,dt,_t,it;try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ol}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",Cn,!1),F===null){const I="webgl2";if(F=Je(I,y),F===null)throw Je(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Dt()}catch(y){throw e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Cn,!1),ee("WebGLRenderer: "+y.message),y}function Dt(){oe=new eg(F),oe.init(),dt=new Y_(F,oe),R=new X0(F,oe,t,dt),v=new W_(F,oe),R.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),B=F.createFramebuffer(),N=F.createFramebuffer(),k=F.createFramebuffer(),z=new rg(F),V=new P_,$=new X_(F,oe,v,V,R,dt,z),at=new tg(P),lt=new ap(F),_t=new V0(F,lt),Z=new ng(F,lt,z,_t),j=new ag(F,Z,lt,_t,z),U=new sg(F,R,$),Ct=new Y0(V),ct=new C_(P,at,oe,R,_t,Ct),Rt=new Q_(P,V),ft=new L_,ut=new B_(oe),Ot=new H0(P,at,v,j,_,c),Lt=new V_(P,j,R),it=new j_(F,z,R,v),ht=new W0(F,oe,z),J=new ig(F,oe,z),z.programs=ct.programs,P.capabilities=R,P.extensions=oe,P.properties=V,P.renderLists=ft,P.shadowMap=Lt,P.state=v,P.info=z}S!==xn&&(T=new lg(S,e.width,e.height,o,r,s));const wt=new Z_(P,F);this.xr=wt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const y=oe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=oe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(y){y!==void 0&&(et=y,this.setSize(ie,K,!1))},this.getSize=function(y){return y.set(ie,K)},this.setSize=function(y,I,W=!0){if(wt.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=y,K=I,e.width=Math.floor(y*et),e.height=Math.floor(I*et),W===!0&&(e.style.width=y+"px",e.style.height=I+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(ie*et,K*et).floor()},this.setDrawingBufferSize=function(y,I,W){ie=y,K=I,et=W,e.width=Math.floor(y*W),e.height=Math.floor(I*W),this.setViewport(0,0,y,I)},this.setEffects=function(y){if(S===xn){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let I=0;I<y.length;I++)if(y[I].isOutputPass===!0){It("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(nt)},this.getViewport=function(y){return y.copy(Mt)},this.setViewport=function(y,I,W,G){y.isVector4?Mt.set(y.x,y.y,y.z,y.w):Mt.set(y,I,W,G),v.viewport(nt.copy(Mt).multiplyScalar(et).round())},this.getScissor=function(y){return y.copy(Gt)},this.setScissor=function(y,I,W,G){y.isVector4?Gt.set(y.x,y.y,y.z,y.w):Gt.set(y,I,W,G),v.scissor(ot.copy(Gt).multiplyScalar(et).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(y){v.setScissorTest(ze=y)},this.setOpaqueSort=function(y){bt=y},this.setTransparentSort=function(y){Nt=y},this.getClearColor=function(y){return y.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,W=!0){let G=0;if(y){let H=!1;if(tt!==null){const gt=tt.texture.format;H=m.has(gt)}if(H){const gt=tt.texture.type,St=f.has(gt),mt=Ot.getClearColor(),Et=Ot.getClearAlpha(),At=mt.r,zt=mt.g,qt=mt.b;St?(b[0]=At,b[1]=zt,b[2]=qt,b[3]=Et,F.clearBufferuiv(F.COLOR,0,b)):(C[0]=At,C[1]=zt,C[2]=qt,C[3]=Et,F.clearBufferiv(F.COLOR,0,C))}else G|=F.COLOR_BUFFER_BIT}I&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),O=y},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Cn,!1),Ot.dispose(),ft.dispose(),ut.dispose(),V.dispose(),at.dispose(),j.dispose(),_t.dispose(),it.dispose(),ct.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",wc),wt.removeEventListener("sessionend",Ac),Wi.stop()};function ge(y){y.preventDefault(),ba("WebGLRenderer: Context Lost."),L=!0}function re(){ba("WebGLRenderer: Context Restored."),L=!1;const y=z.autoReset,I=Lt.enabled,W=Lt.autoUpdate,G=Lt.needsUpdate,H=Lt.type;Dt(),z.autoReset=y,Lt.enabled=I,Lt.autoUpdate=W,Lt.needsUpdate=G,Lt.type=H}function Cn(y){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function $n(y){const I=y.target;I.removeEventListener("dispose",$n),ld(I)}function ld(y){cd(y),V.remove(y)}function cd(y){const I=V.get(y).programs;I!==void 0&&(I.forEach(function(W){ct.releaseProgram(W)}),y.isShaderMaterial&&ct.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,W,G,H,gt){I===null&&(I=dn);const St=H.isMesh&&H.matrixWorld.determinantAffine()<0,mt=dd(y,I,W,G,H);v.setMaterial(G,St);let Et=W.index,At=1;if(G.wireframe===!0){if(Et=Z.getWireframeAttribute(W),Et===void 0)return;At=2}const zt=W.drawRange,qt=W.attributes.position;let Tt=zt.start*At,se=(zt.start+zt.count)*At;gt!==null&&(Tt=Math.max(Tt,gt.start*At),se=Math.min(se,(gt.start+gt.count)*At)),Et!==null?(Tt=Math.max(Tt,0),se=Math.min(se,Et.count)):qt!=null&&(Tt=Math.max(Tt,0),se=Math.min(se,qt.count));const Ne=se-Tt;if(Ne<0||Ne===1/0)return;_t.setup(H,G,mt,W,Et);let Se,de=ht;if(Et!==null&&(Se=lt.get(Et),de=J,de.setIndex(Se)),H.isMesh)G.wireframe===!0?(v.setLineWidth(G.wireframeLinewidth*Ue()),de.setMode(F.LINES)):de.setMode(F.TRIANGLES);else if(H.isLine){let Qe=G.linewidth;Qe===void 0&&(Qe=1),v.setLineWidth(Qe*Ue()),H.isLineSegments?de.setMode(F.LINES):H.isLineLoop?de.setMode(F.LINE_LOOP):de.setMode(F.LINE_STRIP)}else H.isPoints?de.setMode(F.POINTS):H.isSprite&&de.setMode(F.TRIANGLES);if(H.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))de.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Qe=H._multiDrawStarts,vt=H._multiDrawCounts,rn=H._multiDrawCount,te=Et?lt.get(Et).bytesPerElement:1,Sn=V.get(G).currentProgram.getUniforms();for(let Kn=0;Kn<rn;Kn++)Sn.setValue(F,"_gl_DrawID",Kn),de.render(Qe[Kn]/te,vt[Kn])}else if(H.isInstancedMesh)de.renderInstances(Tt,Ne,H.count);else if(W.isInstancedBufferGeometry){const Qe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,vt=Math.min(W.instanceCount,Qe);de.renderInstances(Tt,Ne,vt)}else de.render(Tt,Ne)};function Tc(y,I,W,G){O!==null&&y.isNodeMaterial&&O.setObject(G,y),ne===!0&&Ct.setState(y,W,!1),y.transparent===!0&&y.side===_n&&y.forceSinglePass===!1?(y.side=pn,y.needsUpdate=!0,As(y,I,G),y.side=tr,y.needsUpdate=!0,As(y,I,G),y.side=_n):As(y,I,G)}this.compile=function(y,I,W=null){W===null&&(W=y),O!==null&&O.renderStart(y,I,W),M=ut.get(W),M.init(I),g.push(M),W.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(M.pushLight(H),H.castShadow&&M.pushShadow(H))}),y!==W&&y.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(M.pushLight(H),H.castShadow&&M.pushShadow(H))}),M.setupLights(),O!==null&&O.updateLights(M.state.lightsArray),me=this.localClippingEnabled,ne=Ct.init(this.clippingPlanes,me),ne===!0&&Ct.setGlobalState(this.clippingPlanes,I),O!==null&&Lt.render(M.state.shadowsArray,W,I);const G=new Set;return y.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const gt=H.material;if(gt)if(Array.isArray(gt))for(let St=0;St<gt.length;St++){const mt=gt[St];Tc(mt,W,I,H),G.add(mt)}else Tc(gt,W,I,H),G.add(gt)}),M=g.pop(),O!==null&&O.renderEnd(),G},this.compileAsync=function(y,I,W=null){const G=this.compile(y,I,W);return new Promise(H=>{function gt(){if(G.forEach(function(St){const Et=V.get(St).currentProgram;(Et===void 0||Et.isReady())&&G.delete(St)}),G.size===0){H(y);return}setTimeout(gt,10)}oe.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Ya=null;function ud(y){Ya&&Ya(y)}function wc(){Wi.stop()}function Ac(){Wi.start()}const Wi=new Ph;Wi.setAnimationLoop(ud),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(y){Ya=y,wt.setAnimationLoop(y),y===null?Wi.stop():Wi.start()},wt.addEventListener("sessionstart",wc),wt.addEventListener("sessionend",Ac),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;O!==null&&O.renderStart(y,I);const W=wt.enabled===!0&&wt.isPresenting===!0,G=T!==null&&(tt===null||W)&&T.begin(P,tt);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(I),I=wt.getCamera()),y.isScene===!0&&y.onBeforeRender(P,y,I,tt),M=ut.get(y,g.length),M.init(I),M.state.textureUnits=$.getTextureUnits(),g.push(M),$t.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Yt.setFromProjectionMatrix($t,ni,I.reversedDepth),me=this.localClippingEnabled,ne=Ct.init(this.clippingPlanes,me),x=ft.get(y,w.length),x.init(),w.push(x),wt.enabled===!0&&wt.isPresenting===!0){const St=P.xr.getDepthSensingMesh();St!==null&&qa(St,I,-1/0,P.sortObjects)}qa(y,I,0,P.sortObjects),x.finish(),O!==null&&O.updateLights(M.state.lightsArray),P.sortObjects===!0&&x.sort(bt,Nt),we=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,we&&Ot.addToRenderList(x,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ne===!0&&Ct.beginShadows();const H=M.state.shadowsArray;if(Lt.render(H,y,I),ne===!0&&Ct.endShadows(),(G&&T.hasRenderPass())===!1){const St=x.opaque,mt=x.transmissive;if(M.setupLights(),I.isArrayCamera){const Et=I.cameras;if(mt.length>0)for(let At=0,zt=Et.length;At<zt;At++){const qt=Et[At];Cc(St,mt,y,qt)}we&&Ot.render(y);for(let At=0,zt=Et.length;At<zt;At++){const qt=Et[At];Rc(x,y,qt,qt.viewport)}}else mt.length>0&&Cc(St,mt,y,I),we&&Ot.render(y),Rc(x,y,I)}tt!==null&&X===0&&($.updateMultisampleRenderTarget(tt),$.updateRenderTargetMipmap(tt)),G&&T.end(P),y.isScene===!0&&y.onAfterRender(P,y,I),_t.resetDefaultState(),Y=-1,Q=null,g.pop(),g.length>0?(M=g[g.length-1],$.setTextureUnits(M.state.textureUnits),ne===!0&&Ct.setGlobalState(P.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?x=w[w.length-1]:x=null,O!==null&&O.renderEnd()};function qa(y,I,W,G){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLightProbeGrid)M.pushLightProbeGrid(y);else if(y.isLight)M.pushLight(y),y.castShadow&&M.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(Yt)){G&&Xe.setFromMatrixPosition(y.matrixWorld).applyMatrix4($t);const St=j.update(y),mt=y.material;mt.visible&&x.push(y,St,mt,W,Xe.z,null,I)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(Yt))){const St=j.update(y),mt=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Xe.copy(y.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Xe.copy(St.boundingSphere.center)),Xe.applyMatrix4(y.matrixWorld).applyMatrix4($t)),Array.isArray(mt)){const Et=St.groups;for(let At=0,zt=Et.length;At<zt;At++){const qt=Et[At],Tt=mt[qt.materialIndex];Tt&&Tt.visible&&x.push(y,St,Tt,W,Xe.z,qt,I)}}else mt.visible&&x.push(y,St,mt,W,Xe.z,null,I)}}const gt=y.children;for(let St=0,mt=gt.length;St<mt;St++)qa(gt[St],I,W,G)}function Rc(y,I,W,G){const{opaque:H,transmissive:gt,transparent:St}=y;M.setupLightsView(W),ne===!0&&Ct.setGlobalState(P.clippingPlanes,W),G&&v.viewport(nt.copy(G)),H.length>0&&ws(H,I,W),gt.length>0&&ws(gt,I,W),St.length>0&&ws(St,I,W),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Cc(y,I,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[G.id]===void 0){const Tt=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[G.id]=new Gn(1,1,{generateMipmaps:!0,type:Tt?ui:xn,minFilter:Zi,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}const gt=M.state.transmissionRenderTarget[G.id],St=G.viewport||nt;gt.setSize(St.z*P.transmissionResolutionScale,St.w*P.transmissionResolutionScale);const mt=P.getRenderTarget(),Et=P.getActiveCubeFace(),At=P.getActiveMipmapLevel();P.setRenderTarget(gt),P.getClearColor(pe),Qt=P.getClearAlpha(),Qt<1&&P.setClearColor(16777215,.5),P.clear(),we&&Ot.render(W);const zt=P.toneMapping;P.toneMapping=si;const qt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),M.setupLightsView(G),ne===!0&&Ct.setGlobalState(P.clippingPlanes,G),ws(y,W,G),$.updateMultisampleRenderTarget(gt),$.updateRenderTargetMipmap(gt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let se=0,Ne=I.length;se<Ne;se++){const Se=I[se],{object:de,geometry:Qe,material:vt,group:rn}=Se;if(vt.side===_n&&de.layers.test(G.layers)){const te=vt.side;vt.side=pn,vt.needsUpdate=!0,Pc(de,W,G,Qe,vt,rn),vt.side=te,vt.needsUpdate=!0,Tt=!0}}Tt===!0&&($.updateMultisampleRenderTarget(gt),$.updateRenderTargetMipmap(gt))}P.setRenderTarget(mt,Et,At),P.setClearColor(pe,Qt),qt!==void 0&&(G.viewport=qt),P.toneMapping=zt}function ws(y,I,W){const G=I.isScene===!0?I.overrideMaterial:null;for(let H=0,gt=y.length;H<gt;H++){const St=y[H],{object:mt,geometry:Et,group:At}=St;let zt=St.material;zt.allowOverride===!0&&G!==null&&(zt=G),mt.layers.test(W.layers)&&Pc(mt,I,W,Et,zt,At)}}function Pc(y,I,W,G,H,gt){O!==null&&H.isNodeMaterial&&O.setObject(y,H),y.onBeforeRender(P,I,W,G,H,gt),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(P,I,W,G,y,gt),H.transparent===!0&&H.side===_n&&H.forceSinglePass===!1?(H.side=pn,H.needsUpdate=!0,P.renderBufferDirect(W,I,G,H,y,gt),H.side=tr,H.needsUpdate=!0,P.renderBufferDirect(W,I,G,H,y,gt),H.side=_n):P.renderBufferDirect(W,I,G,H,y,gt),y.onAfterRender(P,I,W,G,H,gt)}function As(y,I,W){I.isScene!==!0&&(I=dn);const G=V.get(y),H=M.state.lights,gt=M.state.shadowsArray,St=H.state.version,mt=ct.getParameters(y,H.state,gt,I,W,M.state.lightProbeGridArray),Et=ct.getProgramCacheKey(mt);let At=G.programs;G.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,G.fog=I.fog;const zt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;G.envMap=at.get(y.envMap||G.environment,zt),G.envMapRotation=G.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,At===void 0&&(y.addEventListener("dispose",$n),At=new Map,G.programs=At);let qt=At.get(Et);if(qt!==void 0){if(G.currentProgram===qt&&G.lightsStateVersion===St)return Lc(y,mt),qt}else mt.uniforms=ct.getUniforms(y),O!==null&&y.isNodeMaterial&&O.build(y,W,mt),y.onBeforeCompile(mt,P),qt=ct.acquireProgram(mt,Et),At.set(Et,qt),G.uniforms=mt.uniforms;const Tt=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Tt.clippingPlanes=Ct.uniform),Lc(y,mt),G.needsLights=pd(y),G.lightsStateVersion=St,G.needsLights&&(Tt.ambientLightColor.value=H.state.ambient,Tt.lightProbe.value=H.state.probe,Tt.sunLights.value=H.state.sun,Tt.sunLightShadows.value=H.state.sunShadow,Tt.directionalLights.value=H.state.directional,Tt.directionalLightShadows.value=H.state.directionalShadow,Tt.spotLights.value=H.state.spot,Tt.spotLightShadows.value=H.state.spotShadow,Tt.rectAreaLights.value=H.state.rectArea,Tt.ltc_1.value=H.state.rectAreaLTC1,Tt.ltc_2.value=H.state.rectAreaLTC2,Tt.pointLights.value=H.state.point,Tt.pointLightShadows.value=H.state.pointShadow,Tt.hemisphereLights.value=H.state.hemi,Tt.sunShadowMatrix.value=H.state.sunShadowMatrix,Tt.sunShadowCascade.value=H.state.sunShadowCascade,Tt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Tt.spotLightMatrix.value=H.state.spotLightMatrix,Tt.spotLightMap.value=H.state.spotLightMap,Tt.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=M.state.lightProbeGridArray.length>0,G.currentProgram=qt,G.uniformsList=null,qt}function Dc(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=da.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Lc(y,I){const W=V.get(y);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.batchingColor=I.batchingColor,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.instancingMorph=I.instancingMorph,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function hd(y,I){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;E.setFromMatrixPosition(I.matrixWorld);for(let W=0,G=y.length;W<G;W++){const H=y[W];if(H.texture!==null&&H.boundingBox.containsPoint(E))return H}return null}function dd(y,I,W,G,H){I.isScene!==!0&&(I=dn),$.resetTextureUnits();const gt=I.fog,St=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?I.environment:null,mt=tt===null?P.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Zt.workingColorSpace,Et=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,At=at.get(G.envMap||St,Et),zt=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,qt=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Tt=!!W.morphAttributes.position,se=!!W.morphAttributes.normal,Ne=!!W.morphAttributes.color;let Se=si;G.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Se=P.toneMapping);const de=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Qe=de!==void 0?de.length:0,vt=V.get(G),rn=M.state.lights;if(ne===!0&&(me===!0||y!==Q)){const _e=y===Q&&G.id===Y;Ct.setState(G,y,_e)}let te=!1;G.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==rn.state.version||vt.outputColorSpace!==mt||H.isBatchedMesh&&vt.batching===!1||!H.isBatchedMesh&&vt.batching===!0||H.isBatchedMesh&&vt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&vt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&vt.instancing===!1||!H.isInstancedMesh&&vt.instancing===!0||H.isSkinnedMesh&&vt.skinning===!1||!H.isSkinnedMesh&&vt.skinning===!0||H.isInstancedMesh&&vt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&vt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&vt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&vt.instancingMorph===!1&&H.morphTexture!==null||vt.envMap!==At||G.fog===!0&&vt.fog!==gt||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==Ct.numPlanes||vt.numIntersection!==Ct.numIntersection)||vt.vertexAlphas!==zt||vt.vertexTangents!==qt||vt.morphTargets!==Tt||vt.morphNormals!==se||vt.morphColors!==Ne||vt.toneMapping!==Se||vt.morphTargetsCount!==Qe||!!vt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(te=!0):(te=!0,vt.__version=G.version);let Sn=vt.currentProgram;te===!0&&(Sn=As(G,I,H),O&&G.isNodeMaterial&&O.onUpdateProgram(G,Sn,vt));let Kn=!1,Ii=!1,or=!1;const he=Sn.getUniforms(),De=vt.uniforms;if(v.useProgram(Sn.program)&&(Kn=!0,Ii=!0,or=!0),G.id!==Y&&(Y=G.id,Ii=!0),vt.needsLights){const _e=hd(M.state.lightProbeGridArray,H);vt.lightProbeGrid!==_e&&(vt.lightProbeGrid=_e,Ii=!0)}if(Kn||Q!==y){v.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),he.setValue(F,"projectionMatrix",y.projectionMatrix),he.setValue(F,"viewMatrix",y.matrixWorldInverse);const Ni=he.map.cameraPosition;Ni!==void 0&&Ni.setValue(F,be.setFromMatrixPosition(y.matrixWorld)),R.logarithmicDepthBuffer&&he.setValue(F,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&he.setValue(F,"isOrthographic",y.isOrthographicCamera===!0),Q!==y&&(Q=y,Ii=!0,or=!0)}if(vt.needsLights&&(rn.state.sunShadowMap.length>0&&he.setValue(F,"sunShadowMap",rn.state.sunShadowMap,$),rn.state.directionalShadowMap.length>0&&he.setValue(F,"directionalShadowMap",rn.state.directionalShadowMap,$),rn.state.spotShadowMap.length>0&&he.setValue(F,"spotShadowMap",rn.state.spotShadowMap,$),rn.state.pointShadowMap.length>0&&he.setValue(F,"pointShadowMap",rn.state.pointShadowMap,$)),H.isSkinnedMesh){he.setOptional(F,H,"bindMatrix"),he.setOptional(F,H,"bindMatrixInverse");const _e=H.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),he.setValue(F,"boneTexture",_e.boneTexture,$))}H.isBatchedMesh&&(he.setOptional(F,H,"batchingTexture"),he.setValue(F,"batchingTexture",H._matricesTexture,$),he.setOptional(F,H,"batchingIdTexture"),he.setValue(F,"batchingIdTexture",H._indirectTexture,$),he.setOptional(F,H,"batchingColorTexture"),H._colorsTexture!==null&&he.setValue(F,"batchingColorTexture",H._colorsTexture,$));const Ui=W.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&U.update(H,W,Sn),(Ii||vt.receiveShadow!==H.receiveShadow)&&(vt.receiveShadow=H.receiveShadow,he.setValue(F,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&I.environment!==null&&(De.envMapIntensity.value=I.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=ex()),Ii){if(he.setValue(F,"toneMappingExposure",P.toneMappingExposure),vt.needsLights&&fd(De,or),gt&&G.fog===!0&&Rt.refreshFogUniforms(De,gt),Rt.refreshMaterialUniforms(De,G,et,K,M.state.transmissionRenderTarget[y.id]),vt.needsLights&&vt.lightProbeGrid){const _e=vt.lightProbeGrid;De.probesSH.value=_e.texture,De.probesMin.value.copy(_e.boundingBox.min),De.probesMax.value.copy(_e.boundingBox.max),De.probesResolution.value.copy(_e.resolution)}da.upload(F,Dc(vt),De,$)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(da.upload(F,Dc(vt),De,$),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&he.setValue(F,"center",H.center),he.setValue(F,"modelViewMatrix",H.modelViewMatrix),he.setValue(F,"normalMatrix",H.normalMatrix),he.setValue(F,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){const _e=G.uniformsGroups;for(let Ni=0,lr=_e.length;Ni<lr;Ni++){const Uc=_e[Ni];it.update(Uc,Sn),it.bind(Uc,Sn)}}return Sn}function fd(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.sunLights.needsUpdate=I,y.sunLightShadows.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function pd(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(y,I,W){const G=V.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),V.get(y.texture).__webglTexture=I,V.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){const W=V.get(y);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,W=0){tt=y,q=I,X=W;let G=null,H=!1,gt=!1;if(y){const mt=V.get(y);if(mt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(F.FRAMEBUFFER,mt.__webglFramebuffer),nt.copy(y.viewport),ot.copy(y.scissor),yt=y.scissorTest,v.viewport(nt),v.scissor(ot),v.setScissorTest(yt),Y=-1;return}else if(mt.__webglFramebuffer===void 0)$.setupRenderTarget(y);else if(mt.__hasExternalTextures)$.rebindTextures(y,V.get(y.texture).__webglTexture,V.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const zt=y.depthTexture;if(mt.__boundDepthTexture!==zt){if(zt!==null&&V.has(zt)&&(y.width!==zt.image.width||y.height!==zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(y)}}const Et=y.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(gt=!0);const At=V.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(At[I])?G=At[I][W]:G=At[I],H=!0):y.samples>0&&$.useMultisampledRTT(y)===!1?G=V.get(y).__webglMultisampledFramebuffer:Array.isArray(At)?G=At[W]:G=At,nt.copy(y.viewport),ot.copy(y.scissor),yt=y.scissorTest}else nt.copy(Mt).multiplyScalar(et).floor(),ot.copy(Gt).multiplyScalar(et).floor(),yt=ze;if(W!==0&&(G=B),v.bindFramebuffer(F.FRAMEBUFFER,G)&&v.drawBuffers(y,G),v.viewport(nt),v.scissor(ot),v.setScissorTest(yt),H){const mt=V.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+I,mt.__webglTexture,W)}else if(gt){const mt=I;for(let Et=0;Et<y.textures.length;Et++){const At=V.get(y.textures[Et]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Et,At.__webglTexture,W,mt)}}else if(y!==null&&W!==0){const mt=V.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,mt.__webglTexture,W)}Y=-1};function Ic(y){const I=V.get(y);return(I.__readFormat!==y.format||I.__readType!==y.type)&&(I.__readFormat=y.format,I.__readType=y.type,I.__formatReadable=R.textureFormatReadable(y.format),I.__typeReadable=R.textureTypeReadable(y.type)),I}this.readRenderTargetPixels=function(y,I,W,G,H,gt,St,mt=0){if(!(y&&y.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=V.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et){v.bindFramebuffer(F.FRAMEBUFFER,Et);try{const At=y.textures[mt],zt=At.format,qt=At.type;y.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+mt);const Tt=Ic(At);if(Tt.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-G&&W>=0&&W<=y.height-H&&F.readPixels(I,W,G,H,dt.convert(zt),dt.convert(qt),gt)}finally{const At=tt!==null?V.get(tt).__webglFramebuffer:null;v.bindFramebuffer(F.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(y,I,W,G,H,gt,St,mt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=V.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et)if(I>=0&&I<=y.width-G&&W>=0&&W<=y.height-H){v.bindFramebuffer(F.FRAMEBUFFER,Et);const At=y.textures[mt],zt=At.format,qt=At.type;y.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+mt);const Tt=Ic(At);if(Tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const se=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,se),F.bufferData(F.PIXEL_PACK_BUFFER,gt.byteLength,F.STREAM_READ),F.readPixels(I,W,G,H,dt.convert(zt),dt.convert(qt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const Ne=tt!==null?V.get(tt).__webglFramebuffer:null;v.bindFramebuffer(F.FRAMEBUFFER,Ne);const Se=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Kd(F,Se,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,se),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,gt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(se),F.deleteSync(Se),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,W=0){const G=Math.pow(2,-W),H=Math.floor(y.image.width*G),gt=Math.floor(y.image.height*G),St=I!==null?I.x:0,mt=I!==null?I.y:0;$.setTexture2D(y,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,St,mt,H,gt),v.unbindTexture()},this.copyTextureToTexture=function(y,I,W=null,G=null,H=0,gt=0){let St,mt,Et,At,zt,qt,Tt,se,Ne;const Se=y.isCompressedTexture?y.mipmaps[gt]:y.image;if(W!==null)St=W.max.x-W.min.x,mt=W.max.y-W.min.y,Et=W.isBox3?W.max.z-W.min.z:1,At=W.min.x,zt=W.min.y,qt=W.isBox3?W.min.z:0;else{const De=Math.pow(2,-H);St=Math.floor(Se.width*De),mt=Math.floor(Se.height*De),y.isDataArrayTexture?Et=Se.depth:y.isData3DTexture?Et=Math.floor(Se.depth*De):Et=1,At=0,zt=0,qt=0}G!==null?(Tt=G.x,se=G.y,Ne=G.z):(Tt=0,se=0,Ne=0);const de=dt.convert(I.format),Qe=dt.convert(I.type);let vt;I.isData3DTexture?($.setTexture3D(I,0),vt=F.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?($.setTexture2DArray(I,0),vt=F.TEXTURE_2D_ARRAY):($.setTexture2D(I,0),vt=F.TEXTURE_2D),v.activeTexture(F.TEXTURE0),v.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,I.flipY),v.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),v.pixelStorei(F.UNPACK_ALIGNMENT,I.unpackAlignment);const rn=v.getParameter(F.UNPACK_ROW_LENGTH),te=v.getParameter(F.UNPACK_IMAGE_HEIGHT),Sn=v.getParameter(F.UNPACK_SKIP_PIXELS),Kn=v.getParameter(F.UNPACK_SKIP_ROWS),Ii=v.getParameter(F.UNPACK_SKIP_IMAGES);v.pixelStorei(F.UNPACK_ROW_LENGTH,Se.width),v.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Se.height),v.pixelStorei(F.UNPACK_SKIP_PIXELS,At),v.pixelStorei(F.UNPACK_SKIP_ROWS,zt),v.pixelStorei(F.UNPACK_SKIP_IMAGES,qt);const or=y.isDataArrayTexture||y.isData3DTexture,he=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){const De=V.get(y),Ui=V.get(I),_e=V.get(De.__renderTarget),Ni=V.get(Ui.__renderTarget);v.bindFramebuffer(F.READ_FRAMEBUFFER,_e.__webglFramebuffer),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let lr=0;lr<Et;lr++)or&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,V.get(y).__webglTexture,H,qt+lr),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,V.get(I).__webglTexture,gt,Ne+lr)),F.blitFramebuffer(At,zt,St,mt,Tt,se,St,mt,F.DEPTH_BUFFER_BIT,F.NEAREST);v.bindFramebuffer(F.READ_FRAMEBUFFER,null),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(H!==0||y.isRenderTargetTexture||V.has(y)){const De=V.get(y),Ui=V.get(I);v.bindFramebuffer(F.READ_FRAMEBUFFER,N),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,k);for(let _e=0;_e<Et;_e++)or?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,De.__webglTexture,H,qt+_e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,De.__webglTexture,H),he?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ui.__webglTexture,gt,Ne+_e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ui.__webglTexture,gt),H!==0?F.blitFramebuffer(At,zt,St,mt,Tt,se,St,mt,F.COLOR_BUFFER_BIT,F.NEAREST):he?F.copyTexSubImage3D(vt,gt,Tt,se,Ne+_e,At,zt,St,mt):F.copyTexSubImage2D(vt,gt,Tt,se,At,zt,St,mt);v.bindFramebuffer(F.READ_FRAMEBUFFER,null),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else he?y.isDataTexture||y.isData3DTexture?F.texSubImage3D(vt,gt,Tt,se,Ne,St,mt,Et,de,Qe,Se.data):I.isCompressedArrayTexture?F.compressedTexSubImage3D(vt,gt,Tt,se,Ne,St,mt,Et,de,Se.data):F.texSubImage3D(vt,gt,Tt,se,Ne,St,mt,Et,de,Qe,Se):y.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,gt,Tt,se,St,mt,de,Qe,Se.data):y.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,gt,Tt,se,Se.width,Se.height,de,Se.data):F.texSubImage2D(F.TEXTURE_2D,gt,Tt,se,St,mt,de,Qe,Se);v.pixelStorei(F.UNPACK_ROW_LENGTH,rn),v.pixelStorei(F.UNPACK_IMAGE_HEIGHT,te),v.pixelStorei(F.UNPACK_SKIP_PIXELS,Sn),v.pixelStorei(F.UNPACK_SKIP_ROWS,Kn),v.pixelStorei(F.UNPACK_SKIP_IMAGES,Ii),gt===0&&I.generateMipmaps&&F.generateMipmap(vt),v.unbindTexture()},this.initRenderTarget=function(y){V.get(y).__webglFramebuffer===void 0&&$.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?$.setTextureCube(y,0):y.isData3DTexture?$.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?$.setTexture2DArray(y,0):$.setTexture2D(y,0),v.unbindTexture()},this.resetState=function(){q=0,X=0,tt=null,v.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}const Bu={type:"change"},sc={type:"start"},Bh={type:"end"},ra=new Zl,zu=new bi,ix=Math.cos(70*fe.DEG2RAD),ke=new A,fn=2*Math.PI,ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Co=1e-6;class rx extends rp{constructor(t,e=null){super(t,e),this.state=ue.NONE,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Lr.ROTATE,MIDDLE:Lr.DOLLY,RIGHT:Lr.PAN},this.touches={ONE:Pr.ROTATE,TWO:Pr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new Wn,this._lastTargetPosition=new A,this._quat=new Wn().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fu,this._sphericalDelta=new fu,this._scale=1,this._panOffset=new A,this._rotateStart=new Pt,this._rotateEnd=new Pt,this._rotateDelta=new Pt,this._panStart=new Pt,this._panEnd=new Pt,this._panDelta=new Pt,this._dollyStart=new Pt,this._dollyEnd=new Pt,this._dollyDelta=new Pt,this._dollyDirection=new A,this._mouse=new Pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ax.bind(this),this._onPointerDown=sx.bind(this),this._onPointerUp=ox.bind(this),this._onContextMenu=px.bind(this),this._onMouseWheel=ux.bind(this),this._onKeyDown=hx.bind(this),this._onTouchStart=dx.bind(this),this._onTouchMove=fx.bind(this),this._onMouseDown=lx.bind(this),this._onMouseMove=cx.bind(this),this._interceptControlDown=mx.bind(this),this._interceptControlUp=gx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ue.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bu),this.update(),this.state=ue.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;ke.copy(e).sub(this.target),ke.applyQuaternion(this._quat),this._spherical.setFromVector3(ke),this.autoRotate&&this.state===ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=fn:i>Math.PI&&(i-=fn),r<-Math.PI?r+=fn:r>Math.PI&&(r-=fn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(ke.setFromSpherical(this._spherical),ke.applyQuaternion(this._quatInverse),e.copy(this.target).add(ke),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ke.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new A(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new A(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=ke.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ra.origin.copy(this.object.position),ra.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ra.direction))<ix?this.object.lookAt(this.target):(zu.setFromNormalAndCoplanarPoint(this.object.up,this.target),ra.intersectPlane(zu,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Co||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Co||this._lastTargetPosition.distanceToSquared(this.target)>Co?(this.dispatchEvent(Bu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?fn/60*this.autoRotateSpeed*t:fn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ke.setFromMatrixColumn(e,0),ke.multiplyScalar(-t),this._panOffset.add(ke)}_panUp(t,e){this.screenSpacePanning===!0?ke.setFromMatrixColumn(e,1):(ke.setFromMatrixColumn(e,0),ke.crossVectors(this.object.up,ke)),ke.multiplyScalar(t),this._panOffset.add(ke)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;ke.copy(r).sub(this.target);let s=ke.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function sx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function ax(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function ox(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Bh),this.state=ue.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function lx(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Lr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ue.DOLLY;break;case Lr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ue.ROTATE}break;case Lr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ue.PAN}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(sc)}function cx(n){switch(this.state){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function ux(n){this.enabled===!1||this.enableZoom===!1||this.state!==ue.NONE||(n.preventDefault(),this.dispatchEvent(sc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Bh))}function hx(n){this.enabled!==!1&&this._handleKeyDown(n)}function dx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Pr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ue.TOUCH_ROTATE;break;case Pr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ue.TOUCH_PAN;break;default:this.state=ue.NONE}break;case 2:switch(this.touches.TWO){case Pr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ue.TOUCH_DOLLY_PAN;break;case Pr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ue.TOUCH_DOLLY_ROTATE;break;default:this.state=ue.NONE}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(sc)}function fx(n){switch(this._trackPointer(n),this.state){case ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ue.NONE}}function px(n){this.enabled!==!1&&n.preventDefault()}function mx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const es=new A;function bn(n,t,e,i,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),c=Math.PI/4;es.copy(t),es[i]=0,es.normalize();const l=.5*a/(a+o),h=1-es.angleTo(n)/c;return Math.sign(es[e])===1?h*l:o/(a+o)+l+l*(1-h)}class ac extends fi{constructor(t=1,e=1,i=1,r=2,s=.1){const a=r*2+1;if(s=Math.min(t/2,e/2,i/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:r,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new A,l=new A,h=new A(t,e,i).divideScalar(2).subScalar(s),d=this.attributes.position.array,u=this.attributes.normal.array,p=this.attributes.uv.array,_=d.length/6,S=new A,m=.5/a;for(let f=0,b=0;f<d.length;f+=3,b+=2)switch(c.fromArray(d,f),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[f+0]=h.x*Math.sign(c.x)+l.x*s,d[f+1]=h.y*Math.sign(c.y)+l.y*s,d[f+2]=h.z*Math.sign(c.z)+l.z*s,u[f+0]=l.x,u[f+1]=l.y,u[f+2]=l.z,Math.floor(f/_)){case 0:S.set(1,0,0),p[b+0]=bn(S,l,"z","y",s,i),p[b+1]=1-bn(S,l,"y","z",s,e);break;case 1:S.set(-1,0,0),p[b+0]=1-bn(S,l,"z","y",s,i),p[b+1]=1-bn(S,l,"y","z",s,e);break;case 2:S.set(0,1,0),p[b+0]=1-bn(S,l,"x","z",s,t),p[b+1]=bn(S,l,"z","x",s,i);break;case 3:S.set(0,-1,0),p[b+0]=1-bn(S,l,"x","z",s,t),p[b+1]=1-bn(S,l,"z","x",s,i);break;case 4:S.set(0,0,1),p[b+0]=1-bn(S,l,"x","y",s,t),p[b+1]=1-bn(S,l,"y","x",s,e);break;case 5:S.set(0,0,-1),p[b+0]=bn(S,l,"x","y",s,t),p[b+1]=1-bn(S,l,"y","x",s,e);break}}static fromJSON(t){return new ac(t.width,t.height,t.depth,t.segments,t.radius)}}function _x(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,c=new Ie;let l=0;for(let h=0;h<n.length;++h){const d=n[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(d.attributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p])}if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(e){let h=0;const d=[];for(let u=0;u<n.length;++u){const p=n[u].index;for(let _=0;_<p.count;++_)d.push(p.getX(_)+h);h+=n[u].attributes.position.count}c.setIndex(d)}for(const h in s){const d=ku(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){const p=[];for(let S=0;S<a[h].length;++S)p.push(a[h][S][u]);const _=ku(p);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(_)}}}return c}function ku(n){let t,e,i,r=-1,s=0;for(let l=0;l<n.length;++l){const h=n[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const a=new t(s),o=new Hn(a,e,i);let c=0;for(let l=0;l<n.length;++l){const h=n[l];if(h.isInterleavedBufferAttribute){const d=c/e;for(let u=0,p=h.count;u<p;u++)for(let _=0;_<e;_++){const S=h.getComponent(u,_);o.setComponent(u+d,_,S)}}else a.set(h.array,c);c+=h.count*e}return r!==void 0&&(o.gpuType=r),o}const Po=new Map;function qe(n){return Po.has(n)||Po.set(n,new ic({color:n,roughness:.85})),Po.get(n)}function D(n,t,e,i,r,s,a,o,c=!1){const l=new Bt(c?new ac(r,s,a,2,Math.min(.09,r/4,s/4,a/4)):new fi(r,s,a),qe(o));return l.position.set(t,e,i),l.castShadow=!0,l.receiveShadow=!0,n.add(l),l}function yi(n,t,e,i,r,s,a=[1,1,1]){const o=new Bt(new nc(r,12,10),qe(s));return o.position.set(t,e,i),o.scale.set(...a),o.castShadow=!0,n.add(o),o}function Gu(n){n.material=n.material.clone();const t=n.material;return t.transparent=!0,t.opacity=1,n.userData.dynamic=!0,n}function wn(n,t,e,i,r,s=3,a="#f2c65a"){const o=document.createElement("canvas");o.width=s>=8?2048:1024,o.height=s>=8?512:256;const c=o.getContext("2d");if(c.scale(o.width/2048,o.height/512),c.fillStyle=a,c.fillRect(0,0,2048,512),c.fillStyle="#263f40",c.fillRect(0,0,2048,42),c.fillRect(0,470,2048,42),c.fillStyle="#233d42",c.textBaseline="middle",/MOVECRAFT/.test(t))c.beginPath(),c.roundRect(70,86,340,340,76),c.fill(),c.fillStyle=a,c.font="1000 230px Nunito, sans-serif",c.textAlign="center",c.fillText("M",240,270),c.fillStyle="#233d42",c.textAlign="left",c.font="1000 190px Nunito, sans-serif",c.fillText("MOVECRAFT",470,215),c.font="900 78px Nunito, sans-serif",c.letterSpacing="18px",c.fillText("MOVING COMPANY",482,350);else{const u=Math.min(190,1660/Math.max(5,t.length)*2.15);c.font=`1000 ${u}px Nunito, sans-serif`,c.textAlign="center",c.fillText(t,1024,248)}const l=new Ql(o);l.colorSpace=on,l.anisotropy=8;const h=new xe;h.position.set(e,i,r),n.add(h),D(h,0,0,-.035,s,s/4,.1,2506560,!0);const d=new Bt(new Li(s*.94,s*.235),new qn({map:l,side:_n}));d.position.z=.022,h.add(d);for(const u of[-s*.43,s*.43])yi(h,u,s*.085,.04,.035,16313807);return h}function xx(n,t,e=7391353,i=!1,r=0){const s=new xe,a=i?2.5:3.45,o=i?1.5:2.05,c=document.createElement("canvas");c.width=768,c.height=500;const l=c.getContext("2d"),h=new Ql(c),d=/LOCKED|MAX/.test(t);h.colorSpace=on;const u=new Bt(new Li(a,o),new qn({map:h,transparent:!0,depthWrite:!1}));u.rotation.x=-Math.PI/2,u.position.y=.018,u.renderOrder=3,u.userData.owned=!0,s.add(u);const p=()=>{if(l.save(),l.translate(142,235),l.fillStyle=d?"#87918b":"#244456",l.strokeStyle=l.fillStyle,l.lineWidth=18,l.lineCap="round",l.lineJoin="round",/collect/i.test(n))l.beginPath(),l.arc(0,0,82,0,Math.PI*2),l.stroke(),l.font="1000 112px Nunito, sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillText("$",0,5);else if(/cargo|rack|lining/i.test(n))l.strokeRect(-72,-52,144,112),l.beginPath(),l.moveTo(-52,-20),l.lineTo(52,-20),l.moveTo(-52,20),l.lineTo(52,20),l.stroke();else if(/truck|fleet/i.test(n)){l.fillRect(-70,-30,90,62),l.fillRect(20,-14,55,46);for(const m of[-42,47])l.beginPath(),l.arc(m,44,18,0,Math.PI*2),l.fill()}else/crew|strength|worker|hire/i.test(n)?(l.beginPath(),l.arc(0,-45,30,0,Math.PI*2),l.fill(),l.beginPath(),l.roundRect(-48,-5,96,82,28),l.fill()):/chair|assembly|paint|pack|wood|timber|mill/i.test(n)?(l.strokeRect(-42,-22,72,58),l.beginPath(),l.moveTo(-42,35),l.lineTo(-42,78),l.moveTo(30,35),l.lineTo(30,78),l.moveTo(-42,-22),l.lineTo(-42,-78),l.stroke()):/yard|factory|production|grounds/i.test(n)?(l.fillRect(-65,-42,130,112),l.fillStyle="#fff8e5",l.fillRect(-22,5,44,65),l.fillStyle=d?"#87918b":"#244456",l.beginPath(),l.moveTo(-82,-42),l.lineTo(0,-95),l.lineTo(82,-42),l.fill()):(l.strokeRect(-55,-68,110,136),l.beginPath(),l.moveTo(-28,-28),l.lineTo(30,-28),l.moveTo(-28,5),l.lineTo(30,5),l.moveTo(-28,38),l.lineTo(12,38),l.stroke());l.restore()};let _=-1;const S=m=>{const f=fe.clamp(m,0,1);if(Math.abs(_-f)<.004)return;_=f,s.userData.progress=f,l.clearRect(0,0,c.width,c.height),l.fillStyle=d?"#d4d6c9":"#fff4d3",l.beginPath(),l.roundRect(18,18,732,464,54),l.fill(),f>0&&(l.save(),l.beginPath(),l.roundRect(18,18,732,464,54),l.clip(),l.fillStyle="#75c995",l.fillRect(18,18,732*f,464),l.restore()),l.lineWidth=22,l.strokeStyle="#244456",l.beginPath(),l.roundRect(18,18,732,464,54),l.stroke(),l.fillStyle="#244456",l.beginPath(),l.roundRect(42,76,204,322,44),l.fillStyle="#ffffff80",l.fill(),p(),l.fillStyle="#244456",l.textAlign="left",l.textBaseline="middle";const b=(t.startsWith("$"),t),C=n.toUpperCase();l.font=`1000 ${C.length>19?43:C.length>13?50:58}px Nunito, sans-serif`,l.fillText(C,286,155,425),l.font=`1000 ${b.length>9?88:116}px Nunito, sans-serif`,l.fillText(b,286,292,425),l.fillStyle="#244456",l.globalAlpha=.75,l.fillRect(286,390,424,18),l.globalAlpha=1,l.fillStyle=d?"#87918b":"#49a971",l.fillRect(286,390,424*f,18),h.needsUpdate=!0};return s.userData.setProgress=S,s.userData.padHalfWidth=a/2,s.userData.padHalfDepth=o/2,s.userData.graphicLabel=n,s.userData.hasPurposeIcon=!0,S(r),s}function vx(n,t,e,i,r,s=2){const a=document.createElement("canvas");a.width=512,a.height=150;const o=a.getContext("2d");o.fillStyle="#e9c65f",o.fillRect(0,0,512,150),o.fillStyle="#263f40",o.font="900 66px Barlow, sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText(t,256,78);const c=new Ql(a);c.colorSpace=on;const l=new Bt(new Li(s,s*150/512),new qn({map:c}));l.position.set(e,i,r),n.add(l)}function zh(n=14983231,t=0){const e=new xe,i=new xe;e.add(i);const r=[15119758,10382672,13209191][t%3];D(i,0,1,0,.64,.66,.39,n,!0),D(i,0,.73,.02,.59,.25,.4,3296353,!0),D(i,0,1.08,.215,.08,.43,.025,16377270),D(i,-.18,1.13,.22,.13,.15,.025,16377270),yi(i,0,1.65,.02,.36,r,[1,1.08,.93]),yi(i,-.35,1.65,.02,.08,r),yi(i,.35,1.65,.02,.08,r),yi(i,0,1.61,.35,.08,r);for(const l of[-.13,.13])yi(i,l,1.71,.324,.046,2435890),D(i,l,1.81,.32,.11,.035,.03,5323570,!0);D(i,0,1.485,.348,.085,.018,.018,11890529,!0),yi(i,0,1.91,-.035,.35,t%2?5719095:2506572,[1.04,.43,1.03]),t%2===0&&D(i,0,1.91,.31,.49,.07,.29,3234931,!0),D(i,0,1.18,.225,.43,.34,.025,15721405,!0);for(const l of[-.27,.27])D(i,l,1.18,.233,.07,.55,.025,15721405,!0);const s=[],a=[],o=[],c=[];for(const l of[-1,1]){const h=new xe;h.position.set(l*.18,.7,0),i.add(h),D(h,0,-.14,0,.24,.3,.28,3296353,!0);const d=new xe;d.position.y=-.29,h.add(d),D(d,0,-.13,0,.23,.29,.27,3296353,!0),D(d,0,-.3,.07,.28,.18,.4,5132616,!0),o.push(d),s.push(h);const u=new xe;u.position.set(l*.39,1.24,0),i.add(u),D(u,0,-.13,0,.22,.36,.27,n,!0);const p=new xe;p.position.y=-.28,u.add(p),D(p,0,-.1,0,.18,.24,.2,r,!0),yi(p,0,-.24,.015,.115,r),c.push(p),a.push(u)}return e.userData.rig={body:i,legs:s,arms:a},{root:e,animate(l,h,d=!1,u=!1){const p=u?13.5:8.4,_=u?.72:.42;i.position.y=h?Math.abs(Math.sin(l*p))*(u?.065:.035):Math.sin(l*1.8)*.008,i.rotation.z=h?Math.sin(l*p/2)*(u?.035:.018):0,i.rotation.x=u?.13:0,s.forEach((S,m)=>S.rotation.x=h?Math.sin(l*p+m*Math.PI)*_:0),o.forEach((S,m)=>S.rotation.x=h?Math.max(0,-Math.sin(l*p+m*Math.PI))*(u?.9:.4):0),c.forEach(S=>S.rotation.x=d?-.35:u?-.8:-.15),a.forEach((S,m)=>S.rotation.x=d?-1.12:h?-Math.sin(l*p+m*Math.PI)*(u?.62:.34):.02)}}}function oc(n){const t=new xe;if(n===0||n===1){const e=n===0?2.28:1.44,i=n===0?13400401:6396560;D(t,0,.46,0,e,.5,1.4,i,!0),D(t,0,.95,-.57,e,.83,.24,i,!0);for(const s of[-1,1])D(t,s*(e/2-.12),.73,0,.22,.48,1.4,i,!0),D(t,s*(e/2-.2),.12,.45,.12,.24,.12,6837063);const r=n===0?2:1;for(let s=0;s<r;s++)D(t,(s-(r-1)/2)*.95,.76,.02,n===0?.91:1.05,.17,1.01,n===0?14721135:9287842,!0)}else if(n===2)D(t,0,.76,0,1.45,1.05,.17,2440008,!0),D(t,0,.77,.096,1.29,.89,.02,6655645),D(t,0,.18,0,.14,.3,.14,2440008),D(t,0,.05,0,.6,.1,.5,2440008);else if(n===3)D(t,0,.36,0,.71,.72,.71,12489310,!0),D(t,0,.726,0,.14,.015,.71,15324324),wn(t,"BOOKS",0,.4,.36,.55,"#dab989");else if(n===4){const e=new Bt(new Xn(.29,.22,.49,12),qe(14059109));e.position.y=.25,t.add(e);for(let i=0;i<7;i++){const r=i*2.4,s=yi(t,Math.sin(r)*.18,.8+i%3*.11,Math.cos(r)*.18,.23,i%2?7380055:4424296,[.45,1.6,.55]);s.rotation.z=Math.sin(r)*.65}}else if(n===5){D(t,0,.56,0,1.5,1.08,.72,11040848,!0);for(let e=0;e<3;e++)D(t,0,.24+e*.32,.371,1.36,.27,.035,12950638),D(t,0,.24+e*.32,.403,.3,.04,.04,4608076)}else if(n===6){const e=new Bt(new Xn(.34,.4,.12,16),qe(4215382));e.position.y=.06,t.add(e),D(t,0,.83,0,.08,1.55,.08,4215382);const i=new Bt(new Ss(.37,.62,16,1,!0),qe(15321203));i.position.y=1.55,i.rotation.x=Math.PI,t.add(i)}else if(n===7)D(t,0,1.02,0,.72,1.95,.16,7756355,!0),D(t,0,1.02,.09,.56,1.7,.022,10207944,!0),D(t,0,.08,0,.72,.16,1.45,7756355,!0);else if(n===8){D(t,0,.78,0,2.35,1.42,1.22,3159611,!0),D(t,0,1.43,-.23,2.2,.18,.7,2435630,!0),D(t,0,.92,.61,2.15,.13,.38,15526105);for(let e=0;e<10;e++)D(t,-1+e*.22,1.01,.68,.025,.12,.2,3225146);for(const e of[-.9,.9])D(t,e,.25,.2,.17,.5,.17,2435630)}else D(t,0,.42,0,.72,.82,.72,13081188,!0),wn(t,"FRAGILE",0,.45,.38,.72,"#efb36d");return t}const wr={front:.2,back:5.8,rampEnd:8.8,depth:7};function Mx(n=7,t=0,e=0){const i=new xe;i.name="active-truck";const r=wr.front+n*.8,s=r-wr.front,a=(r+wr.front)/2,o=e?15777087:11437893,c=e>1?16052194:e?14935256:11448487;if(wr.back=r,wr.rampEnd=r+2.2,wr.depth=n,D(i,3,.55,a,3.3,.42,s+.2,3162186,!0),D(i,3,.735,a,3.2,.09,s,13350548),e>0){D(i,3,1.9,.15,3.3,2.65,.15,c);for(const u of[1.35,4.65]){D(i,u,.99,a,.1,.4,s+.2,c),D(i,u,2.8,a,.08,.1,s+.2,9808549);for(const p of[.15,r+.05])D(i,u,1.95,p,.09,1.8,.09,12240831)}}else{D(i,3,.88,.15,3.25,.22,.1,9010537,!0);for(const u of[1.35,4.65])D(i,u,.88,a,.1,.22,s+.1,9010537,!0)}const l=[];if(e>0)for(const u of[1.35,4.65])l.push(Gu(D(i,u,1.72,a,.07,1.82,s,c,!0)));D(i,3,1.19,-1.05,3.2,1.65,2.1,o,!0),D(i,3,1.8,-2.12,2.82,.65,.04,6523029),D(i,3,2.03,-1.05,3.3,.14,2.2,16111479,!0),D(i,3,.63,-2.16,3.15,.28,.16,4150615,!0),D(i,3,.91,-2.2,1.05,.2,.05,6517617,!0);for(const u of[1.78,4.22])D(i,u,1.04,-2.23,.48,.24,.05,16770720,!0),D(i,u,1.58,-2.19,.19,.13,.06,14253140,!0);for(const u of[1.25,4.75])D(i,u,1.65,-1.25,.22,.15,.38,3164235,!0);for(const u of[1.37,4.63]){D(i,u,1.78,-1,.025,.55,1.5,6523029);for(const p of[-1.2,r-.45]){const _=new Bt(new Xn(.46,.46,.28,16),qe(2504510));_.rotation.z=Math.PI/2,_.position.set(u,.46,p),_.castShadow=!0,i.add(_);const S=new Bt(new Xn(.23,.23,.3,12),qe(10203048));S.rotation.z=Math.PI/2,S.position.copy(_.position),i.add(S)}}for(const u of[1.8,4.2])D(i,u,.95,-2.13,.45,.22,.06,16772529,!0);if(e===0){D(i,2.35,2.08,-2.14,.55,.18,.025,8215107,!0),D(i,3.7,1.3,-2.205,.6,.1,.028,7296062,!0);const u=D(i,3,.58,-2.29,3.2,.2,.15,4740435,!0);u.rotation.z=.045;for(const[p,_,S]of[[2.45,1.82,.5],[3.48,1.78,-.45]]){const m=D(i,p,_,-2.149,.025,.55,.018,14279381);m.rotation.z=S}}if(e>=1){for(const u of[1.34,4.66])D(i,u,1.09,a,.035,.17,s,3768216);D(i,3,.61,-2.25,3.3,.18,.18,12965847,!0)}if(e>=2){D(i,3,2.16,-1.12,2.35,.2,1.2,4096407,!0);for(const u of[1.55,4.45])D(i,u,1.09,-2.27,.18,.35,.04,15334143,!0)}if(e>=3){for(const u of[1.6,4.4])D(i,u,.63,a,.13,.27,s-.2,15908675,!0);for(const u of[2.3,3.7])D(i,u,2.31,-1.25,.46,.12,.22,16758596,!0)}if(e>=4){D(i,3,.86,-2.28,1.3,.36,.09,2379623,!0);for(let u=0;u<4;u++)D(i,2.55+u*.3,.86,-2.34,.08,.25,.025,13624545);D(i,3,2.37,-.8,1.2,.08,.6,15850653,!0)}const h=new xe;h.position.set(3,.78,r),i.add(h),D(h,0,0,1.15,3.2,.1,2.3,8690328,!0);for(const u of[-1.45,1.45])D(h,u,.08,1.15,.12,.12,2.15,4217958,!0);if(D(h,0,.08,2.18,1.15,.1,.1,15779678,!0),t){const u=new xe;u.name="shelf",D(u,1.7,1.55,1.35,.55,.08,2.1,7047042);for(const p of[.35,2.35])D(u,1.7,.75,p,.08,1.6,.08,5402218);if(t>1&&D(u,1.7,2.2,1.35,.55,.08,2.1,7047042),t>=3){for(const p of[1.7,4.3]){for(const _ of[1.1,1.62,2.14])D(u,p,_,1.35,.55,.07,2.25,5797232);for(const _ of[.3,1.35,2.4])D(u,p,1.62,_,.52,1.12,.06,5007463)}for(const p of[.72,1.45,2.18])D(u,1.7,1.38,p,.42,.35,.55,14199144,!0)}i.add(u)}vx(i,e?"MOVECRAFT":"M • MOVING",3,1.18,-2.205,1.75);const d=Gu(D(i,3,2.83,a,3.32,.09,s,e>1?14862703:10134942,!0));if(d.visible=e>0,e>1)for(const u of[a-s*.32,a+s*.32])D(i,3,2.76,u,2.9,.08,.08,16044905);for(let u=0;u<=4;u++)D(i,1.4+u*.8,.788,a,.018,.008,s,15392707);for(let u=0;u<=n;u++)D(i,3,.79,.2+u*.8,3.2,.008,.018,15392707);return i.userData.rampPivot=h,i.userData.enclosed=e>0,i.userData.cargoWalls=l,i.userData.roof=d,i}const kh=4,Gh=7,Ut=.8,Hu=[{name:"Corduroy Sofa",w:3,d:2,value:230,weight:4,vulnerability:0},{name:"Armchair",w:2,d:2,value:110,weight:2,vulnerability:0},{name:"Television",w:2,d:1,value:270,weight:2,vulnerability:8},{name:"Book Box",w:1,d:1,value:65,weight:3,vulnerability:0},{name:"Houseplant",w:1,d:1,value:85,weight:1,vulnerability:7},{name:"Dresser",w:2,d:1,value:160,weight:4,vulnerability:1},{name:"Floor Lamp",w:1,d:1,value:120,weight:1,vulnerability:11},{name:"Standing Mirror",w:1,d:2,value:310,weight:2,vulnerability:14},{name:"Piano",w:3,d:2,value:620,weight:7,vulnerability:9},{name:"China Box",w:1,d:1,value:390,weight:2,vulnerability:17}];function Sx(n){let t=n>>>0;return()=>(t=Math.imul(1664525,t)+1013904223>>>0)/4294967296}function yx(n=0){const t=Sx(n*997+41),e=Math.min(6+Math.floor(n/2),9),i=n===0?[0,1,2,3,4,5]:Array.from({length:e},(s,a)=>(a+n*2)%Hu.length);n>=2&&!i.includes(8)&&(i[i.length-1]=8);const r=[];return i.map((s,a)=>{const o=Hu[s],c=o.w*Ut/2,l=o.d*Ut/2;let h=-3,d=2,u=!1;for(let p=0;p<250;p++){const _=-9.75+c+t()*(8.3-c*2),S=-4.75+l+t()*(8.7-l*2),m=(n+1)%2?Math.abs(S+.35)<l+.32:Math.abs(_+5.6)<c+.32,f=r.some(b=>Math.abs(_-b.x)<c+b.hw+.24&&Math.abs(S-b.z)<l+b.hd+.24);if(!m&&!f){h=Math.round(_*10)/10,d=Math.round(S*10)/10,u=!0;break}}if(!u)for(let p=-4.2+l;p<=4.1-l&&!u;p+=.45)for(let _=-9.7+c;_<=-1.5-c&&!u;_+=.45){const S=(n+1)%2?Math.abs(p+.35)<l+.24:Math.abs(_+5.6)<c+.24,m=r.some(f=>Math.abs(_-f.x)<c+f.hw+.16&&Math.abs(p-f.z)<l+f.hd+.16);!S&&!m&&(h=Math.round(_*10)/10,d=Math.round(p*10)/10,u=!0)}return r.push({x:h,z:d,hw:c,hd:l}),{...o,model:s,id:a,fragile:o.vulnerability>=7,vulnerability:o.vulnerability+Math.min(n*1.5,9),condition:100,fallen:!1,location:"pickup",x:0,z:0,pickupX:h,pickupZ:d,rotated:!1}})}function Hh(n=0){const t=["Baumann Family","Mara King","Morning Glow Café","Dr. Hoffman","Sun Deck Hotel","Northern Lights Gallery"],e=["First Apartment Move","Old House, Narrow Doors","Café Grand Opening","Delicate Private Move","Major Hotel Move-In","Premium Art Transport"],i=["Linden District","Old Town","Market Square","Park Avenue","Harbor Quarter","Museum Island"],r=["Sunny Heights","Birch Road","New Town","Lake View","Warehouse District","Culture Yard"],s=yx(n),a=Math.round(s.reduce((o,c)=>o+c.value,0)*(1+Math.min(n,8)*.08));return{client:t[n%t.length],title:e[n%e.length],from:i[n%i.length],to:r[n%r.length],difficulty:n+1,items:s,reward:a}}function Le(n){return n.rotated?[n.d,n.w]:[n.w,n.d]}function Vh(n,t,e,i,r=kh,s=Gh){const[a,o]=Le(t);return Number.isInteger(e)&&Number.isInteger(i)&&e>=0&&i>=0&&e+a<=r&&i+o<=s&&!n.some(c=>{if(c.id===t.id||c.location!=="truck")return!1;const[l,h]=Le(c);return e<c.x+l&&e+a>c.x&&i<c.z+h&&i+o>c.z})}function bx(n,t,e,i,r=kh,s=Gh){const[a,o]=Le(t),c=Math.max(0,Math.min(r-a,e.x)),l=Math.max(0,Math.min(s-o,e.z)),h=c+a/2-i.x,d=l+o/2-i.z,u=Math.hypot(h,d)||1,p=h/u,_=d/u;let S=null,m=1/0;for(let f=0;f<=s-o;f++)for(let b=0;b<=r-a;b++){const C=(b-c)**2+(f-l)**2,E=b+a/2-i.x,x=f+o/2-i.z,M=E*p+x*_,w=M<0?24+Math.abs(M)*12:0,g=(f-l)**2*1.2+(b-c)**2+w;if(C>9||g>=m||!Vh(n,t,b,f,r,s))continue;const T=.08/Ut;if(i.x>b-T&&i.x<b+a+T&&i.z>f-T&&i.z<f+o+T)continue;const P=Math.max(b-i.x,0,i.x-b-a),L=Math.max(f-i.z,0,i.z-f-o);Math.hypot(P,L)>2.75||(S={x:b,z:f,w:a,d:o,valid:!0},m=g)}return S??{x:Math.round(c),z:Math.round(l),w:a,d:o,valid:!1}}const Ex=["supply","mill","assembly","paint","packing"],zr={truck:"Truck restoration",cargo:"Longer cargo bay",gear:"Cargo bars & lining",worker:"Strength & stamina",yard:"Company grounds",hire:"Hire moving crew",fleet:"Buy fleet truck",factory:"Furniture production"},ii={truck:4,cargo:3,gear:3,worker:4,yard:4,hire:8,fleet:6,factory:4};function Wh(){return{cash:450,jobs:0,earned:0,levels:{truck:0,cargo:0,gear:0,worker:0,yard:0,hire:0,fleet:0,factory:0},fleet:[],timber:0,parts:0,products:0,painted:0,packed:0,sold:0,production:0,supply:0,test:!0,contributions:{},stationLevels:{supply:0,mill:0,assembly:0,paint:0,packing:0},stationProgress:{supply:0,mill:0,assembly:0,paint:0,packing:0},stationContributions:{}}}function Tx(n){const t=Wh();return{...t,...n,levels:{...t.levels,...n?.levels},contributions:{...t.contributions,...n?.contributions},stationLevels:{...t.stationLevels,...n?.stationLevels},stationProgress:{...t.stationProgress,...n?.stationProgress},stationContributions:{...t.stationContributions,...n?.stationContributions}}}function ps(n,t){return Math.round({truck:650,cargo:800,gear:450,worker:400,yard:1e3,hire:700,fleet:1800,factory:3200}[t]*(1+n.levels[t]*.8))}function Xh(n,t){return n.levels[t]>=ii[t]?"Maximum level":t==="hire"&&n.levels.yard<1?"Build your first garage":t==="fleet"&&n.levels.yard<2?"Expand the yard to level 2":t==="fleet"&&n.levels.fleet>=n.levels.hire?"Hire a crew for the next truck":t==="factory"&&n.levels.yard<3?"Build the logistics hub (yard 3)":t==="factory"&&n.levels.hire<2?"Hire at least two crews":""}function wx(n,t){const e=Xh(n,t);if(e)return e;const i=Math.max(0,ps(n,t)-(n.contributions?.[t]??0));return!n.test&&n.cash<i?`Need $${i}`:(n.test||(n.cash-=i),n.contributions&&delete n.contributions[t],n.levels[t]++,t==="fleet"&&n.fleet.push({level:0,phase:-n.fleet.length*.09,completed:0,route:n.fleet.length%3}),"")}function El(n,t){n.cash+=Math.round(t),n.earned+=Math.round(t)}function Ax(n,t){const e=n.fleet[t];if(!e||e.level>=4)return!1;const i=1e3*(e.level+1),r=Math.max(0,i-(e.contribution??0));return!n.test&&n.cash<r?!1:(n.test||(n.cash-=r),e.contribution=0,e.level++,!0)}function Yh(n){return 48-n.level*5}function Rx(n,t){return n.levels.factory<1?"Build the workshop first":t==="supply"?!n.test&&n.cash<24?"Need $24 for timber":"":t==="mill"?n.timber<1?"Collect timber first":"":t==="assembly"?n.parts<2?"Process two timber pieces first":"":t==="paint"?n.products<1?"Assemble a chair first":"":n.painted<1?"Paint a chair first":""}function Cx(n,t){const e=Rx(n,t);return e||(t==="supply"?(n.test||(n.cash-=24),n.timber+=3,""):t==="mill"?(n.timber--,n.parts++,""):t==="assembly"?(n.parts-=2,n.products++,""):t==="paint"?(n.products--,n.painted++,""):(n.painted--,n.packed===0&&(n.supply=0),n.packed++,""))}function Px(n,t){let e=0;for(const i of n.fleet)for(i.phase+=t/Yh(i);i.phase>=1;){i.phase--,i.completed++;const r=260+i.level*125;El(n,r),e+=r}if(n.levels.factory){const i={supply:8,mill:6,assembly:10,paint:7,packing:7};for(const r of Ex)if(n.stationLevels[r]>=2){const s=i[r]/(1+(n.stationLevels[r]-2)*.7+n.levels.factory*.08);if(n.stationProgress[r]+=t/s,n.stationProgress[r]>=1){const a=Cx(n,r);n.stationProgress[r]=a?Math.min(.95,n.stationProgress[r]):n.stationProgress[r]-1}}if(n.packed>0?n.supply+=t:n.supply=0,n.supply>=10){n.supply=0,n.packed--,n.sold++;const r=190+n.levels.factory*35;El(n,r),e+=r}}return e}const He={base:0,pickup:-48,destination:66},An={minX:-90,maxX:102,minZ:-72,maxZ:86},sa=7,Qn=[-42,12,48],Tl=[-78,-30,42,90],Ar=Tl;function ai(n){n.removeFromParent(),n.traverse(t=>{t instanceof Bt&&(t.geometry.dispose(),t.userData.owned&&(t.material.map?.dispose(),t.material.dispose())),t instanceof Ff&&(t.material.map?.dispose(),t.material.dispose())})}function wl(n){n.material=n.material.clone();const t=n.material;return t.transparent=!0,n.userData.owned=!0,n}function Al(n,t,e,i,r,s,a,o){const c=new Ie;c.setAttribute("position",new ae([-r/2,0,-s/2,r/2,0,-s/2,0,a,-s/2,-r/2,0,s/2,r/2,0,s/2,0,a,s/2],3)),c.setIndex([0,2,1,3,4,5,0,3,5,0,5,2,2,5,4,2,4,1]),c.computeVertexNormals();const l=new Bt(c,qe(o));return l.position.set(t,e,i),l.castShadow=!0,n.add(l),l}function Aa(n,t,e,i){D(n,t,.75,e,.2,1.5,.2,8411970);for(let r=0;r<3;r++){const s=i===1?new Ss(1-r*.15,1.6,7):new tc(.9,1),a=new Bt(s,qe(i===2?15181958:i===1?3770233:r%2?7845223:5087096));a.position.set(t+(i===1?0:Math.sin(r*3)*.4),1.55+r*.4,e+Math.cos(r*3)*.2),a.castShadow=!0,n.add(a)}}function qh(n){n.updateMatrixWorld(!0);const t=new Map;n.traverse(e=>{if(e instanceof Bt&&!e.userData.owned&&e.material instanceof ic){const i=t.get(e.material)??[];i.push(e),t.set(e.material,i)}});for(const[e,i]of t){const r=i.map(o=>o.geometry.clone().applyMatrix4(o.matrixWorld)),s=_x(r);if(r.forEach(o=>o.dispose()),!s)continue;i.forEach(o=>{o.removeFromParent(),o.geometry.dispose()});const a=new Bt(s,e);a.castShadow=a.receiveShadow=!0,n.add(a)}}const Dx=n=>n==="industrial"?13025965:n==="shops"?14275260:10731392;function Lx(){const n=new xe,t=[],e=[],i=[],r=[],s=8295062,a=15655882,o=new Bt(new Li(1800,1800),qe(11060874));o.rotation.x=-Math.PI/2,o.position.y=-.09,o.receiveShadow=!0,n.add(o);const c=sa/2,l=1.3,h=(x,M,w)=>{const g=[];let T=M;for(const P of x)P-c>T&&g.push([T,P-c]),T=P+c;return T<w&&g.push([T,w]),g};for(const x of Qn){D(n,6,-.025,x,208,.07,sa,s);for(const[M,w]of h(Ar,-98,110))for(const g of[-1,1])D(n,(M+w)/2,.045,x+g*(c+l/2),w-M,.1,l,a);for(let M=-96;M<108;M+=4.4)Ar.some(w=>Math.abs(M-w)<c+3)||D(n,M,.018,x,1.6,.012,.085,16248269)}for(const x of Ar){for(const[M,w]of h(Qn,-82,84))D(n,x,-.025,(M+w)/2,sa,.07,w-M,s);for(const[M,w]of h(Qn,-82,84))for(const g of[-1,1])D(n,x+g*(c+l/2),.045,(M+w)/2,l,.1,w-M,a);for(let M=-80;M<82;M+=4.4)Qn.some(w=>Math.abs(M-w)<c+3)||D(n,x,.018,M,.085,.012,1.6,16248269)}const d=(x,M)=>{D(n,x,1.75,M,.12,3.5,.12,3958128),D(n,x,3.54,M,.65,.15,.45,16768657,!0)},u=(x,M)=>{D(n,x,.5,M,1.65,.16,.55,12094041,!0),D(n,x,.92,M-.25,1.65,.6,.12,12094041,!0);for(const w of[-.6,.6])D(n,x+w,.23,M,.1,.46,.5,4350316)};for(const x of Ar)for(const M of Qn){for(const g of[-1,1])for(const T of[-1,1])D(n,x+g*(c+l/2),.045,M+T*(c+l/2),l,.1,l,a);if((x===-30||x===42)&&M===12||x===-78&&M===48)for(const g of[-1,1]){const T=x+g*(c+.75),P=M-g*(c+1.5);D(n,T,1.45,P,.13,2.9,.13,3955044),D(n,T,2.85,P,.36,.95,.26,3362392,!0);for(let L=0;L<3;L++)D(n,T,3.12-L*.26,P+.15,.19,.18,.05,[14186849,15778647,7521692][L],!0);for(let L=-2;L<=2;L++)D(n,x+L*1.1,.019,M+g*(c+1.7),.55,.012,1.3,16511188),D(n,x+g*(c+1.7),.019,M+L*1.1,1.3,.012,.55,16511188)}D(n,x+c+.8,1.2,M+c+2.8,.07,2.4,.07,5468538),wn(n,M<0?"GARDEN LANE":x<0?"MARKET STREET":"LINDEN WAY",x+c+.8,2.35,M+c+2.8,1.9,"#dbe8cf")}for(const x of Qn)for(let M=-68;M<88;M+=18)Ar.some(w=>Math.abs(M-w)<8)||(d(M,x+c+.8),D(n,M+2,.017,x+c-.35,.48,.01,.36,5795961));const p=[{x:5,z:-14,w:64,d:43},{x:He.pickup-2,z:0,w:24,d:17},{x:He.destination-2,z:0,w:24,d:17}],_=(x,M,w=0)=>Math.abs(x.x-M.x)<(x.w+M.w)/2+w&&Math.abs(x.z-M.z)<(x.d+M.d)/2+w,S=x=>!p.some(M=>_(x,M,.5))&&!i.some(M=>_(x,M,.6))&&!Ar.some(M=>Math.abs(x.x-M)<x.w/2+c+l)&&!Qn.some(M=>Math.abs(x.z-M)<x.d/2+c+l),m=(x,M,w,g)=>t.push({x,z:M,w,d:g}),f=(x,M,w,g=!1)=>{const T=Rl(w,g);T.position.set(x,0,M),n.add(T),m(x,M,1.7,3.1)},b=(x,M,w)=>{Aa(n,x,M,w),m(x,M,.4,.4)},C=(x,M,w,g=1)=>{D(n,x,M,w,g+.14,1.14,.09,16445655),D(n,x,M,w+.06,g,.95,.04,8567235),D(n,x,M,w+.09,.055,.95,.035,16445655)},E=(x,M,w,g)=>{const T={x,z:M,w:14,d:16,kind:w};if(!S(T))return;i.push(T),D(n,x,.01,M,14,.06,16,Dx(w));const P=w==="shops"||w==="industrial",L=w==="dense",O=w==="modern",B=P||L?10:7,N=P?7:6,k=w==="shops"?7:L?6.5:w==="industrial"?4.3:O?3.5:3.1,q=M-2,X=[15719349,14001294,12242896,15198424];D(n,x,k/2,q,B,k,N,O?15789792:X[g%4],!0),m(x,q,B,N),O||P?(D(n,x,k+.15,q,B+.55,.3,N+.6,O?4811632:5077378,!0),O&&D(n,x-1,k+.33,q,3,.06,2,3562871)):(Al(n,x,k,q,B+.6,N+.7,g%2?2:1.25,[12022866,6720918,9991776][g%3]),D(n,x+2,k+.65,q-1.2,.55,1.3,.55,10845797));for(const ot of[-1,1])for(const yt of[-1.6,1.6])D(n,x+ot*(B/2+.04),1.8,q+yt,.08,1.1,1.2,15919056),D(n,x+ot*(B/2+.09),1.8,q+yt,.025,.87,1,8567235);if(g%4===1)for(let ot=0;ot<6;ot++)D(n,x,.28+ot*.43,q+N/2+.014,B,.025,.018,13079681);if(L)for(const ot of[-1.6,1.6])D(n,x+ot,1.1,q+N/2+.16,.25,2.2,.25,15259321);const tt=q+N/2;if(D(n,x,1,tt+.06,1.1,2,.11,4812664,!0),w==="industrial"){D(n,x+2,1.55,tt+.08,3.5,3.1,.14,6323589);for(let ot=0;ot<6;ot++)D(n,x+2,.25+ot*.48,tt+.17,3.35,.045,.025,11453119);wn(n,["AUTO SERVICE","TYRE & REPAIR","LOCAL STORAGE","VAN RENTAL"][g%4],x,k-.6,tt+.14,6,"#f6d183")}else{for(const ot of[-B*.32,B*.32])C(x+ot,1.9,tt+.04,O?1.65:1.25);if(k>5)for(const ot of[-3,0,3])C(x+ot,4.8,tt+.04,1.4),L&&(D(n,x+ot,4.08,tt+.5,2.1,.12,.95,15785152),D(n,x+ot,4.55,tt+.98,2.1,.8,.07,4947326));if(w==="shops"){for(const ot of[-3,3])D(n,x+ot,1.4,tt+.13,2.4,2,.06,9422792);if(wn(n,["BAKERY","CORNER CAFE","FRESH MARKET","BOOKS & NEWS"][g%4],x,3.45,tt+.18,6.8,"#f5d293"),D(n,x,2.9,tt+.65,9,.15,1.2,[6397575,13928040][g%2]),u(x-3,M+5),Vu(n,x+1.3,M+5),m(x-3,M+5,1.8,.7),D(n,x+2.7,.55,M+3.2,.6,1.1,.6,5075827,!0),g%4===1){D(n,x-3,.78,M+6.7,1,.09,.8,12818788);for(const ot of[-.8,.8])D(n,x-3+ot,.4,M+6.7,.42,.12,.45,12818788)}}}D(n,x+4.8,.055,M+5.2,3,.02,5.3,14142642),D(n,x,.056,M+4.6,1.5,.02,6,15193781);const Y=M<-45?-46.8:M>55?79.4:M>15?38.4:-16.6,Q=M+7.8,nt=Math.max(0,Y-Q);if(nt>0&&(r.push({x:x+4.8,z:(Q+Y)/2,w:3,d:nt},{x,z:(Q+Y)/2,w:1.4,d:nt}),D(n,x+4.8,.051,(Q+Y)/2,3,.015,nt,14142642),D(n,x,.051,(Q+Y)/2,1.4,.015,nt,15193781)),g%3!==1&&f(x+4.8,M+5,[14463339,8497586,13073769,15066319][g%4],w==="industrial"),!P){L||(D(n,x+4.8,1.15,M-4.6,2.35,2.3,3.4,14800831),D(n,x+4.8,2.37,M-4.6,2.65,.14,3.7,7311760),D(n,x+4.8,1,M-2.87,1.95,1.9,.06,7310474),D(n,x+4.8,.056,M+.1,2.45,.012,6,14142642),m(x+4.8,M-4.6,2.35,3.4));const ot=new Bt(new ys(.28,.035,5,16),qe(5406309));ot.rotation.x=-Math.PI/2,ot.position.set(x-2,.09,M+6),n.add(ot),b(x-4.8,M+5.3,g%3),D(n,x-2.3,.48,M+7,.09,.96,.09,8416083),D(n,x-2.3,.95,M+7,.55,.4,.42,6063494,!0),D(n,x-6.7,.45,M,.35,.9,13,6590054,!0);for(let yt=0;yt<5;yt++)D(n,x-3+yt*.45,.16,M+5,.22,.22,.22,[15975529,15177619,14279356][yt%3],!0);g%2===0&&Vu(n,x-2,M+3.1)}for(let ot=0;ot<(L?3:1);ot++)D(n,x-B/2+.4+ot*.55,.4,tt+.55,.43,.8,.46,5404791,!0)};for(const[x,M,w,g]of[[-64,-27,"shops",0],[-46,-27,"shops",1],[-64,30,"shops",2],[-46,30,"shops",3],[-64,-59,"homes",0],[-46,-59,"homes",1],[-16,-59,"homes",2],[3,-59,"homes",3],[24,-59,"homes",0],[56,-59,"modern",0],[75,-59,"modern",1],[56,-26,"modern",2],[75,-26,"modern",3],[-16,30,"industrial",0],[4,30,"industrial",1],[25,30,"industrial",2],[56,30,"dense",0],[75,30,"dense",1],[-64,65,"homes",2],[-46,65,"homes",3],[-16,65,"industrial",3],[4,65,"industrial",0],[56,65,"dense",2],[75,65,"dense",3]])E(x,M,w,g);for(const[x,M,w]of[[-54,-13,"square"],[24,65,"park"]]){const g={x,z:M,w:15,d:w==="square"?6:9,kind:w};if(S(g)){i.push(g),D(n,x,.045,M,15,.06,g.d,w==="square"?14930871:9549687),D(n,x,.085,M,13,.02,1.2,15127990);for(const T of[-5.5,5.5])b(x+T,M-2.5,0),u(x+T,M+2.5),d(x+T,M+3.8);if(w==="square"){const T=new Bt(new Xn(1.6,1.75,.4,16),qe(14141351));T.position.set(x,.25,M),n.add(T),m(x,M,3.5,3.5);const P=new Bt(new Xn(1.4,1.4,.04,16),qe(8045004));P.position.set(x,.47,M),n.add(P),D(n,x,1,M,.4,1.5,.4,15194041,!0)}else{for(const T of[-1.4,1.4])D(n,x+T,1,M-2,.12,2,.12,14857573);D(n,x,2,M-2,3,.13,.13,14857573),D(n,x,.75,M-2,.9,.1,.4,12810081)}}}for(const[x,M,w]of[[42,90,-15],[-30,90,40],[-63,75,81]]){D(n,(x+M)/2,.008,w,M-x,.025,3.2,10529698);for(const g of[-1,1])D(n,(x+M)/2,.039,w+g*1.9,M-x-sa,.04,.55,a)}for(const[x,M]of[[-63,Math.PI/2],[75,0]]){const w=[],g=[];for(let L=0;L<=24;L++){const O=M+L*Math.PI/48;for(const B of[13.4,16.6])w.push(x+Math.cos(O)*B,.023,66+Math.sin(O)*B);if(L<24){const B=L*2;g.push(B,B+1,B+2,B+1,B+3,B+2)}}const T=new Ie;T.setAttribute("position",new ae(w,3)),T.setIndex(g),T.computeVertexNormals();const P=T.index;for(let L=0;L<P.count;L+=3){const O=P.getX(L);P.setX(L,P.getX(L+2)),P.setX(L+2,O)}T.computeVertexNormals(),n.add(new Bt(T,qe(10529698)))}for(let x=-68;x<86;x+=9)for(const M of[-72,-47,20,55,74]){const w={x,z:M,w:2.8,d:2.8};!S(w)||r.some(g=>_(w,g,.3))||M===20&&x>17&&x<26||(b(x,M,Math.abs(Math.round(x+M))%3),D(n,x,.07,M,2.2,.12,2.2,9942137,!0))}for(const x of[19,21,23]){D(n,x,.4,20,1.5,.18,.12,15384971);for(const M of[-.5,.5])D(n,x+M,.24,20,.08,.48,.12,6978937)}D(n,-20,1.1,18,4,.13,1.7,4946820);for(const x of[-21.7,-18.3])D(n,x,.55,18,.09,1.1,.09,4946820);u(-20,18),wn(n,"BUS",-22.5,2.2,18,.8,"#f5d58c");for(const[x,M]of[[-26,20],[38,-30],[86,22]])D(n,x,.5,M,.65,1,.4,7967115,!0),m(x,M,.65,.4),D(n,x+1.1,.42,M,.2,.84,.2,13207142,!0);for(let x=-64;x<=76;x+=20)D(n,x,1.6,-89,7,3.2,6,13161138),Al(n,x,3.2,-89,7.5,6.5,1.4,8165011),Aa(n,x+7,-87,0);return qh(n),n.userData.lots=i,{root:n,barriers:t,roofs:e}}function Vu(n,t,e){for(const i of[-.4,.4]){const r=new Bt(new ys(.28,.045,5,12),qe(3495009));r.position.set(t+i,.32,e),n.add(r)}D(n,t,.6,e,.85,.055,.06,12484708),D(n,t+.2,.7,e,.06,.65,.06,12484708)}function Rl(n,t=!1){const e=new xe;D(e,0,.65,0,1.55,.7,3,n,!0),D(e,0,t?1.35:1.12,t?.35:0,1.35,t?.9:.6,t?2:1.7,n,!0),D(e,0,1.2,-.9,1.2,.45,.06,8566465);for(const i of[-.77,.77])for(const r of[-.94,.94]){const s=new Bt(new Xn(.3,.3,.16,10),qe(3426900));s.rotation.z=Math.PI/2,s.position.set(i,.3,r),e.add(s)}for(const i of[-.5,.5])D(e,i,.7,-1.52,.35,.2,.04,16769957);return e}function kr(n,t,e=!1){const i=new xe,r=[],s=[],a=n-5.6,o=-.3,c=e?15259056:15656145;D(i,a,.015,o,10,.12,10.6,13807225);for(let u=0;u<20;u++)D(i,a-4.8+u*.5,.08,o,.016,.01,10.3,12557425);const l=(u,p,_,S)=>(r.push({x:u,z:p,w:_,d:S}),D(i,u,1.55,p,_,3.1,S,c,!0)),h=[l(a,-5.55,10,.22),l(a-5,o,.22,10.5),l(a+5,o,.22,10.5),l(a-3.55,4.95,2.9,.22),l(a+3.55,4.95,2.9,.22)];t%2?h.push(l(a-3.6,-.35,2.8,.15),l(a+3.6,-.35,2.8,.15)):h.push(l(a,-3.1,.15,4.6));for(const u of[a-3,a+3])D(i,u,1.9,-5.4,1.5,1.3,.09,9291988),D(i,u,1.9,-5.32,.07,1.3,.05,16777215);const d=wl(Al(i,a,3.2,o,10.6,11.1,2.05,e?5537671:12152400));s.push({mesh:d,bounds:{x:a,z:o,w:10.5,d:11}}),D(i,a,.04,6,4,.12,2.1,14731169);for(const u of[a-2.15,a+2.15])D(i,u,1.5,4.98,.18,3,.33,5406076);return D(i,a-2.6,.09,2.3,2.8,.025,2.3,14521975),D(i,a+2.7,.09,-3,2.8,.025,2.3,8241070),{root:i,barriers:r,roofs:s}}function $h(n){const t=new xe,e=[],i=[],r=n.levels.yard;D(t,5,-.005,-14,63,.1,43,13551792);const s=(a,o,c,l,h,d,u)=>{D(t,a,h/2,o,c,h,l,u,!0),e.push({x:a,z:o,w:c,d:l});const p=wl(D(t,a,h+.15,o,c+.6,.3,l+.6,4353658,!0));i.push({mesh:p,bounds:{x:a,z:o,w:c+1,d:l+1}}),D(t,a,h-.55,o+l/2+.06,c,.7,.15,14922832);const _=wn(t,d,a,h-.52,o+l/2+.17,Math.min(c-1,22),"#ffe0a0");_.scale.y=.23};s(-8,-29,27,10,6.4,"MOVECRAFT • MOVING COMPANY",15326911);for(const a of[-18,-13,-8,-3,2])D(t,a,4.2,-23.94,3.4,1.25,.1,8566977),D(t,a,4.2,-23.85,.07,1.25,.04,16445911);D(t,-8,1.2,-23.9,2.6,2.4,.12,5537415),D(t,-8,2.65,-22.9,4.4,.15,2.1,15318368),s(-20,-15,8,13,4.2,"STORAGE",13031107),D(t,-15.94,1.65,-15,.12,3.3,4.5,5667459),s(22,-28,26,10,4.5,"GARAGES & SERVICE",14603702);for(const a of[13,22,31]){D(t,a,1.65,-22.93,6,3.3,.15,7509649);for(let o=0;o<7;o++)D(t,a,.2+o*.45,-22.82,5.9,.04,.03,11322808)}for(let a=0;a<6;a++){const o=8+a*4.8;for(const c of[-2,2])D(t,o+c,.055,-8,.075,.02,10,16773843);if(D(t,o,.055,-13,4,.02,.075,16773843),a>=n.fleet.length&&a<2){const c=Rl(a?8826024:15186010,!0);c.position.set(o,0,-9),t.add(c),e.push({x:o,z:-9,w:1.7,d:3.1})}}if(r>=2){const a=wl(D(t,20,3.8,-8,29,.2,11.4,5012096));i.push({mesh:a,bounds:{x:20,z:-8,w:30,d:12}})}for(const a of[{x:-26,z:-14,w:.3,d:43},{x:36,z:-14,w:.3,d:43},{x:5,z:-35,w:62,d:.3}])D(t,a.x,.45,a.z,a.w,.9,a.d,10005152),e.push(a);for(const[a,o]of[[-18,16],[35,2]])D(t,a,.4,7,o,.8,.3,10005152),e.push({x:a,z:7,w:o,d:.3});D(t,4,.07,7.7,16,.015,1.6,14274228);for(const a of[-3.4,11.4])D(t,a,.095,7.7,.12,.01,1.3,16377527);wn(t,"MOVECRAFT",-19,2.6,6.8,6,"#ffda78"),D(t,-19,1.25,6.6,.2,2.5,.2,4550005),D(t,-10,.55,-1,2.6,1.1,.8,5012609,!0),wn(t,"JOBS",-10,1.65,-.9,2,"#ffd168"),wn(t,"TRUCK UPGRADES",-.45,1.35,-3.35,3.7,"#fff0bd");for(const a of[-1.75,.85])D(t,a,.65,-3.43,.12,1.3,.12,4550005);for(let a=0;a<5;a++){const o=new Bt(new ys(.42,.14,8,14),qe(3754058));o.rotation.x=Math.PI/2,o.position.set(-22+a*.92,.18,-7.5),t.add(o)}D(t,-20,.08,-6.5,4.6,.04,.12,15185750),wn(t,"STRENGTH & STAMINA",-20,.32,-6.45,3.5,"#fff0bd"),wn(t,"YARD & CREWS",-8,3.75,-23.72,4.2,"#fff0bd");for(let a=0;a<3;a++){const o=-13.7+a*2.1,c=-19.3;for(let l=0;l<3;l++)D(t,o,.12+l*.13,c,1.5,.1,1.1,11635291);D(t,o,.72,c,1.15,.8,.8,14201211,!0),D(t,o,1.13,c,.12,.025,.8,15979675),e.push({x:o,z:c,w:1.5,d:1.1})}D(t,-14,.8,-10,1.25,1.6,1,5274996,!0),e.push({x:-14,z:-10,w:1.3,d:1.1}),D(t,-13,.45,-22,1.2,.9,.7,12351585,!0);for(const a of[-12.8,-11.8]){const o=new Bt(new Ss(.22,.7,8),qe(15179868));o.position.set(a,.35,-8),t.add(o)}D(t,-14,.8,-13,.07,1.6,.07,4027008),D(t,-14,.12,-12.7,.65,.08,.55,4027008),D(t,-13,.75,-15.5,1.1,1.5,.75,12891029,!0),e.push({x:-13,z:-15.5,w:1.1,d:.75});for(const a of[-22,-18]){const o=Rl(a===-22?11059896:13998968);o.position.set(a,0,2),t.add(o),e.push({x:a,z:2,w:1.7,d:3.1})}if(Aa(t,-24,-24,0),Aa(t,7,-26,1),r>=3)for(const a of[-17,-8,1])D(t,a,6.75,-29,4,.1,5,3563385);return qh(t),{root:t,barriers:e,roofs:i}}function Ix(n,t,e,i,r=7589002,s=0){const a=xx(n,t,r,!1,s);return a.position.set(e,.08,i),a}function Kh(n){return[1.4,1.4,1.4,.74,1.35,1.15,1.9,2.05,1.55,.9][n]??1}function Rr(n,t,e){if(t<.7||e.now-n.hitAt<.3)return;n.hitAt=e.now;const i=Math.min(n.item.condition,Math.max(1,Math.round(t*(1+n.item.vulnerability*.075)/(1+e.gear*.15))));n.item.condition-=i,e.damage(n,i)}function Cl(n,t,e="rear",i=0){const[r,s]=Le(n.item),a=r*Ut/2,o=s*Ut/2,c=n.position.clone();e==="rear"?c.z=Math.max(c.z,t.back+2.2+o+.18):c.x=i<0?Math.min(c.x,1.4-a-.2):Math.max(c.x,4.6+a+.2),n.mesh.position.copy(c),n.mesh.updateWorldMatrix(!0,!1),n.mesh.getWorldPosition(n.position);const l=n.mesh.getWorldQuaternion(new Wn);t.truck.parent.attach(n.mesh),n.mesh.quaternion.copy(l);const h=n.velocity.clone();h.z-=t.speed,e==="rear"?h.z+=Math.max(2.1,Math.abs(t.speed)*.22):h.x+=(i||1)*Math.max(2,Math.abs(t.yawRate*t.speed)),h.applyAxisAngle(new A(0,1,0),t.truck.rotation.y),n.velocity.copy(h),n.velocity.y=Math.max(1.8,Math.min(4,h.length()*.22)),n.angular.set(1.8,1.2,Math.sign(h.x||1)*2.4),n.mode="air",n.item.fallen=!0,n.locked=!1,n.lockRest=void 0,n.settled=!1}function Ux(n,t,e){for(const r of n){if(r.mode==="air"){r.velocity.y-=9.81*t,r.position.addScaledVector(r.velocity,t),r.mesh.rotation.x+=r.angular.x*t,r.mesh.rotation.y+=r.angular.y*t,r.mesh.rotation.z+=r.angular.z*t,r.mesh.position.copy(r.position),r.mesh.updateMatrixWorld(!0);const S=new Vr().setFromObject(r.mesh),m=r.position.y-S.min.y+.08;r.position.y<=m&&(r.position.y=m,Rr(r,Math.abs(r.velocity.y)*2,e),r.velocity.y=Math.abs(r.velocity.y)>.9?-r.velocity.y*.22:0,r.velocity.x*=Math.exp(-5*t),r.velocity.z*=Math.exp(-5*t),r.angular.multiplyScalar(Math.exp(-6*t)),r.velocity.length()<.2&&r.angular.length()<.1&&(r.velocity.set(0,0,0),r.angular.set(0,0,0),r.mode="ground",r.settled=!0)),r.mesh.position.copy(r.position);continue}if(r.mode!=="truck")continue;const[s,a]=Le(r.item),o=s*Ut/2,c=a*Ut/2,l=-e.yawRate*e.speed,h=e.acceleration,d=Math.hypot(l,h),u=!!r.locked&&!!r.lockRest,p=u?1/0:1.3+e.gear*.2;d>p&&(r.velocity.x+=l*t*.65,r.velocity.z+=h*t*.65),u&&(r.velocity.x+=(r.lockRest.x-r.position.x)*32*t,r.velocity.z+=(r.lockRest.z-r.position.z)*32*t);const _=(u?10:1.15)+e.gear*.2;r.velocity.multiplyScalar(Math.exp(-_*t)),r.position.addScaledVector(r.velocity,t);for(const S of[-1,1]){const m=S<0?1.4+o:4.6-o;if(S*(r.position.x-m)>0){const f=Math.abs(r.velocity.x);if(f>2.7&&!e.enclosed&&!u){Cl(r,e,"side",S);break}r.position.x=m,r.velocity.x*=-.23,u||Rr(r,f*2.8,e)}}if(r.mode==="truck"){if(r.position.z-c<.2){const S=Math.abs(r.velocity.z);r.position.z=.2+c,r.velocity.z=Math.abs(r.velocity.z)*.2,u||Rr(r,S*2.5,e)}if(r.position.z+c>e.back){if(e.rearOpen&&!u){Cl(r,e,"rear");continue}const S=Math.abs(r.velocity.z);r.position.z=e.back-c,r.velocity.z=-Math.abs(r.velocity.z)*.2,u||Rr(r,S*2.5,e)}r.mesh.position.copy(r.position),r.mesh.rotation.x=fe.damp(r.mesh.rotation.x,fe.clamp(-r.velocity.z*.065,-.22,.22),9,t),r.mesh.rotation.z=fe.damp(r.mesh.rotation.z,fe.clamp(r.velocity.x*.065,-.22,.22),9,t)}}const i=n.filter(r=>r.mode==="truck");for(let r=0;r<i.length;r++)for(let s=r+1;s<i.length;s++){const a=i[r],o=i[s],[c,l]=Le(a.item),[h,d]=Le(o.item),u=o.position.x-a.position.x,p=o.position.z-a.position.z,_=(c+h)*Ut/2-Math.abs(u),S=(l+d)*Ut/2-Math.abs(p);if(_<=.001||S<=.001)continue;const m=_<S?"x":"z",f=m==="x"?_:S,b=Math.sign(m==="x"?u:p)||1,C=Math.abs(a.velocity[m]-o.velocity[m]),E=a.locked?0:1,x=o.locked?0:1,M=E+x;if(!!a.shelf!=!!o.shelf||!M)continue;a.position[m]-=b*f*E/M,o.position[m]+=b*f*x/M;const w=(a.velocity[m]+o.velocity[m])*.25;a.velocity[m]=E?w:0,o.velocity[m]=x?w:0,Rr(a,C*1.7,e),Rr(o,C*1.7,e),a.mesh.position.copy(a.position),o.mesh.position.copy(o.position)}}const xt=n=>document.querySelector(n);xt("#app").innerHTML=`<div id="world"></div><header><div class="wallet"><small>COMPANY CASH</small><strong id="cash"></strong><span id="cash-mode"></span></div><button id="mode-toggle" title="Switch game mode">DEV</button><button id="settings" title="Settings">⚙</button><button id="test-toggle" title="Development tools">🧪</button></header>
<div id="right-rail"><aside id="job-card"><button id="job-toggle"><span class="job-icon">▣</span><span><small id="job-label">YOUR NEXT MOVE</small><strong id="job-title">Small beginnings</strong></span><b>⌄</b></button><div id="job-body"><div id="job-step"></div><div class="progress"><i id="job-progress"></i></div><div id="job-count"></div><div id="job-score"><span>JOB SCORE</span><b>100</b></div><div id="score-breakdown"></div><div id="job-value"></div></div></aside><button id="company-toggle" class="side-button">▥ Company</button><aside id="company-panel" hidden><h2>Your company</h2><div id="company-stats"></div><div id="fleet-list"></div></aside></div>
<aside id="tests" hidden><h3>DEVELOPMENT WORKBENCH</h3><p class="dev-note">Unlimited money and direct test actions are active.</p><div class="test-grid"><button data-test="job">New job</button><button data-test="pack">Pack all</button><button data-test="deliver">Deliver all</button><button data-test="home">Back to yard</button><button data-test="impact">Cargo drop test</button></div><h3>INSPECT EACH UPGRADE</h3><div id="upgrade-tests" class="test-grid"></div><button data-test="restart">Reset test career…</button></aside>
<div id="money-stream"></div><div id="status-bar" role="status"><div id="status-main"><b id="nav-arrow">▲</b><span><small id="status-kicker">ROUTE</small><strong id="nav-label">Job board</strong><em id="nav-distance">0 m</em></span><div id="context-status"><b id="hint-key">E</b><span><span id="hint-text"></span><small id="status-vitals"><i><u id="energy"></u></i></small></span></div></div><div id="notice"></div><div id="purchase" hidden><strong id="purchase-name"></strong><div class="progress"><i id="purchase-progress"></i></div><small id="purchase-detail">STAND STILL TO INVEST</small></div></div><nav id="camera-controls"><button id="camera-follow" title="Follow">◎</button><button id="zoom-in">＋</button><button id="zoom-out">−</button><button id="help">?</button></nav><button id="stuck-button" hidden>Got stuck?</button><footer><button data-action="interact"><b>E</b><span>Interact</span></button><button data-action="cab"><b>F</b><span>Cab</span></button><button data-action="bar"><b>Q</b><span>Lock bar</span></button><button data-action="rotate"><b>R</b><span>Rotate</span></button><button data-action="rear"><b>G</b><span>Rear</span></button></footer><dialog id="dialog"></dialog>`;let Zh=!1,rt=Wh(),jt=null;for(const n of["movecraft-rewrite-v1","movecraft-update-backup"])try{const t=localStorage.getItem(n);if(t){jt=JSON.parse(t);break}}catch{}try{if(jt?.company&&(rt=Tx(jt.company)),jt&&jt.worldVersion!==2){const n=t=>{t[0]>120?t[0]+=He.destination-144:t[0]>45&&(t[0]+=He.pickup-72)};for(const t of jt.loads??[])t.mode!=="truck"&&n(t.position);jt.truck&&(jt.truck.position=[0,0,0],jt.truck.yaw=0),jt.player=[-6,0,1],jt.navLeg="",jt.navIndex=0,jt.navPath=[],jt.worldVersion=2}}catch{}rt.levels.factory=0;let Pl=!0,Dl=.35,Do=!0,Wu=null;const Pe=new Af;Pe.background=new Wt(13032672);Pe.fog=new Kl(13032672,115,215);const pi=new nx({antialias:!0});pi.setPixelRatio(Math.min(devicePixelRatio,1.5));pi.shadowMap.enabled=!0;pi.shadowMap.type=Qu;pi.toneMapping=Bl;pi.toneMappingExposure=1.15;xt("#world").appendChild(pi.domElement);const Ee=new Ba(-18,18,12,-12,.1,450);Ee.position.set(22,29,26);Ee.zoom=.78;const ln=new rx(Ee,pi.domElement);ln.enablePan=!1;ln.enableDamping=!0;ln.minZoom=.55;ln.maxZoom=3.5;ln.minPolarAngle=.35;ln.maxPolarAngle=1.03;Pe.add(new Jf(16775135,6588822,2));const Di=new ep(16772305,2.7);Di.position.set(-25,45,20);Di.castShadow=!0;Di.shadow.mapSize.set(2048,2048);Object.assign(Di.shadow.camera,{left:-32,right:32,top:32,bottom:-32,near:.1,far:100});Di.shadow.normalBias=.035;Pe.add(Di,Di.target);const Ga=Lx();Pe.add(Ga.root);const ms=new xe;ms.name="navigation-route-guide";Pe.add(ms);const Vn=new xe;Vn.name="navigation-parking-guide";const Ll=new qn({color:16768099,transparent:!0,opacity:.32,depthWrite:!1,side:_n,polygonOffset:!0,polygonOffsetFactor:-3}),lc=new Bt(new Li(5.6,7.8),Ll);lc.rotation.x=-Math.PI/2;lc.position.y=.105;Vn.add(lc);const Il=new qn({color:16772495,transparent:!0,opacity:.95,depthWrite:!1});for(const[n,t,e,i]of[[-2.72,0,.16,7.8],[2.72,0,.16,7.8],[0,-3.82,5.6,.16],[0,3.82,5.6,.16]]){const r=new Bt(new fi(e,.035,i),Il);r.position.set(n,.13,t),Vn.add(r)}const Ra=new jf(16767069,.8,13,2);Ra.position.y=1.2;Vn.add(Ra);Vn.visible=!1;Pe.add(Vn);let aa="",Qi=$h(rt),oi=kr(He.pickup,1),li=kr(He.destination,1,!0);Pe.add(Qi.root,oi.root,li.root);const Ha=zh(15313475),st=Ha.root;st.position.set(-6,0,1);Pe.add(st);const cc=new Bt(new ec(.38,.46,32),new qn({color:16773043,side:_n}));cc.rotation.x=-Math.PI/2;cc.position.y=.04;st.add(cc);let Ht,ve=4.2,ri=5,Mn=Hh(0),Be=!1,cn=!1,Kt=null,Me=!1,Oe=0,Lo=0,fa=100,ji=1,ir=1,Ul=0,Ca=0,ye=null;const Xt=[];let Ke=[],Si=new xe,In=null,Ce=null,Hi=[],gs=0,Ti=0,Gr="",Nn=0,Bn=100,_s=0,Fr=0,$e=0,Io=0,Uo=0,Pa=0,En=0,pa="",ma="",Xu=-1,Da=-10,Yu=-10,rs=!1,rr=[],Un=0,zn=!1,ga=0;const Nl=st.position.clone(),Ei=new A,Ae=new Set,Jh=new A(0,1,0),Fn=new Bt(new fi(1,.04,1),new qn({color:2981988,transparent:!0,opacity:.58,depthTest:!0,depthWrite:!1}));Pe.add(Fn);Fn.renderOrder=10;const uc=new Gf(new Vf(Fn.geometry),new Eh({color:1527614,depthTest:!0,depthWrite:!1}));uc.renderOrder=11;Fn.add(uc);Fn.visible=!1;let jn=[],_a=[],os=[];const Qh=new A(He.destination-5.6,.12,7.9),un=n=>Ht.localToWorld(n.clone()),Rn=n=>Ht.worldToLocal(n.clone());function Yn(n=500,t=.1){if(Pl)try{const e=Wu??(Wu=new AudioContext);e.resume();const i=e.createOscillator(),r=e.createGain();i.frequency.value=n,r.gain.setValueAtTime(Dl*.1,e.currentTime),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+t),i.connect(r).connect(e.destination),i.start(),i.stop(e.currentTime+t)}catch{}}function Jt(n){xt("#notice").textContent=n,Pa=4,xt("#status-bar").classList.add("show-notice")}function hc(n){Ae.clear(),xt("#dialog").innerHTML=`<button class="close" aria-label="Close">×</button>${n}`,xt("#dialog").showModal(),xt("#dialog .close").onclick=()=>xt("#dialog").close()}function dc(){const n=Ht,t=n?.position.clone()??new A,e=n?.rotation.clone()??new hi;for(const r of Xt)r.mode==="truck"&&Pe.attach(r.mesh);n&&ai(n),ri=5+rt.levels.cargo*2,ve=.2+ri*.8,Ht=Mx(ri,rt.levels.gear,rt.levels.truck),Ht.position.copy(t),Ht.rotation.copy(e),Pe.add(Ht);for(const r of Xt)r.mode==="truck"&&(Ht.add(r.mesh),r.mesh.position.copy(r.position));D(Ht,4.665,1.2,-1.3,.035,1.7,1.36,2110523,!0);const i=new xe;i.position.set(4.69,.35,-1.95),D(i,0,.55,.65,.06,1.1,1.28,rt.levels.truck?15777087:11437893,!0),D(i,0,1.4,.65,.06,.62,1.28,3495010,!0),D(i,.035,1.4,.65,.025,.48,1.02,9091781);for(const r of[.04,1.26])D(i,.055,.85,r,.08,1.7,.06,3230808,!0);D(i,.075,.78,1.02,.035,.08,.24,2506569,!0),Ht.add(i),Ht.userData.cabDoor=i,Ke=Ke.filter(r=>r>0&&r<=ri),sr(),jh(),n&&Wa()}function fc(){for(const n of Xt){const[,t]=Le(n.item),e=n.mode==="truck"&&!n.shelf&&Ke.some(i=>n.position.z+t*Ut/2<=.2+i*Ut+.035);e&&!n.locked&&(n.lockRest=n.position.clone()),e||(n.lockRest=void 0),n.locked=e}}function sr(){Si.traverse(n=>{n instanceof Bt&&n.geometry.dispose()}),In&&In.material.dispose(),Si.removeFromParent(),Si=new xe,Si.name="locking-cargo-bars",Ht.add(Si);for(const n of Ke){const t=.2+n*Ut;D(Si,3,1.43,t,2.98,.18,.075,15312975,!0);for(const e of[1.47,4.53])D(Si,e,1.11,t,.13,.76,.16,2574679,!0),D(Si,e,1.43,t,.22,.25,.16,15909994,!0)}In=new Bt(new fi(3.05,.035,.3),new qn({color:3045727,transparent:!0,opacity:.62,depthWrite:!1})),In.position.y=.815,In.renderOrder=9,In.visible=!1,Si.add(In),fc()}function Nx(){ai(Qi.root),Qi=$h(rt),Pe.add(Qi.root),vc(),mi(),Wa()}function jh(){const n=e=>e*e*(3-2*e),t=n(fe.clamp(ji*2,0,1));Ht.userData.rampPivot.rotation.x=fe.lerp(-Math.PI/2,Math.atan(.78/2.2),t),Ht.userData.cabDoor&&(Ht.userData.cabDoor.rotation.y=n(Ul)*1.18)}function bs(n){n.mode==="truck"?(Ht.add(n.mesh),n.mesh.position.copy(n.position)):n.mode==="hand"?(st.add(n.mesh),n.mesh.position.set(0,.95,Ms(n))):(Pe.add(n.mesh),n.mesh.position.copy(n.position)),n.mesh.rotation.set(0,n.item.rotated?Math.PI/2:0,0)}function xs(n=!1){if(Be&&!cn&&!n)return Jt("Finish this move and collect payment first.");for(const e of Xt)ai(e.mesh);Xt.length=0,Ke=[],sr(),Kt=null,Ce=null,gs=rt.jobs;const t=Ti;do Ti=Math.floor(Math.random()*7);while(Ti===t);Gr="",Nn=0,Mn=Hh(Math.max(rt.jobs,Math.floor((rt.levels.truck+rt.levels.cargo+rt.levels.worker)*.45))),Be=!0,cn=!1,Bn=100,_s=0,Fr=0,rr=[],ai(oi.root),ai(li.root),oi=kr(He.pickup,Mn.difficulty+Ti),li=kr(He.destination,Mn.difficulty+Ti+1,!0),Pe.add(oi.root,li.root);for(const e of Mn.items){const i={item:e,mesh:oc(e.model),mode:"ground",position:new A(He.pickup+e.pickupX,.12,e.pickupZ),velocity:new A,angular:new A,hitAt:-10,settled:!0};Xt.push(i),bs(i)}mi(),Jt("New move: pickup west on Market Street, delivery east in Linden Gardens. Follow the next-turn navigation."),hn()}function Es(){return Be&&Xt.length>0&&Xt.every(n=>n.mode==="delivered")}function vs(){return Math.round(Mn.reward*Xt.reduce((n,t)=>n+t.item.condition,0)/(Math.max(1,Xt.length)*100)*(Xt.every(n=>n.item.condition===100)?1.1:1)*(.55+Bn*.0045))}function pc(n,t){if(!Be||cn||n<=0)return;const e=Bn;if(Bn=Math.max(0,Bn-Math.round(n)),Bn<e){const i=e-Bn,r=rr.find(s=>s.reason===t);r?r.points+=i:rr.push({points:i,reason:t}),Jt(`−${i} points · ${t}`)}}function Fx(n){if(!Be||cn)return;_s+=n;const t=300+Xt.length*45,e=Math.floor(Math.max(0,_s-t)/30);e>Fr&&(pc(e-Fr,"Late delivery"),Fr=e)}function td(){if(!Es()||cn)return;const n=vs();El(rt,n),rt.jobs++,cn=!0;const t=jn.find(e=>e.key==="collect");if(t)for(let e=0;e<7;e++)window.setTimeout(()=>Fl(t,!0),e*85);mi(),Yn(880,.3),Jt(`+$${n} · Move completed! Return to your yard.`),hn()}function Ox(){if(rt.levels.truck<ii.truck)return"truck";if(rt.levels.cargo<ii.cargo)return"cargo";if(rt.levels.gear<ii.gear)return"gear"}function Bx(){if(rt.levels.yard<1)return"yard";if(rt.levels.hire<1)return"hire";if(rt.levels.yard<2)return"yard";if(rt.levels.fleet<1)return"fleet";if(rt.levels.hire<2)return"hire";if(rt.levels.yard<3||rt.levels.yard<ii.yard)return"yard";if(rt.levels.hire<ii.hire&&(rt.levels.hire<=rt.fleet.length||rt.fleet.length>=ii.fleet))return"hire";if(rt.levels.fleet<ii.fleet&&rt.levels.fleet<rt.levels.hire)return"fleet"}function zx(n){if(rt.test)return 0;if(n.upgrade)return Math.min(1,(rt.contributions[n.upgrade]??0)/ps(rt,n.upgrade));if(n.fleet!==void 0){const t=rt.fleet[n.fleet];return t?Math.min(1,(t.contribution??0)/(1e3*(t.level+1))):0}return Math.min(1,En/1.8)}function mi(){for(const r of jn)ai(r.root);jn=[];const n=(r,s,a,o,c,l,h=0)=>{const d=Ix(s,a,0,0,7589002,h);d.position.copy(o),Pe.add(d),jn.push({key:r,root:d,position:o,upgrade:c,fleet:l})};n("job","NEXT MOVE",Be&&!cn?"ACTIVE":"ACCEPT",new A(-10,.06,1)),jn[jn.length-1].root.visible=!Be||cn,n("collect","COLLECT",`$${vs()}`,Qh.clone()),jn[jn.length-1].root.visible=Es()&&!cn;const t={truck:new A(-.45,.06,-1.25),cargo:new A(-.45,.06,-1.25),gear:new A(-.45,.06,-1.25),worker:new A(-20,.06,-4.8),yard:new A(-8,.06,-20.7),hire:new A(-8,.06,-20.7),fleet:new A(8+rt.fleet.length*4.8,.06,-14.8)},e=[Ox(),rt.levels.worker<ii.worker?"worker":void 0,Bx()].filter((r,s,a)=>!!r&&a.indexOf(r)===s);for(const r of e){const s=ps(rt,r),a=(rt.contributions[r]??0)/s;n(r,zr[r],rt.test?"FREE":`$${s.toLocaleString("en-US")}`,t[r],r,void 0,a)}const i=rt.fleet.findIndex(r=>r.level<4);if(i>=0){const r=rt.fleet[i],s=(r.level+1)*1e3;n(`fleet-${i}`,`TRUCK ${i+2} · LV ${r.level}`,rt.test?"FREE":`$${s.toLocaleString("en-US")}`,new A(8+i*4.8,.05,-14.8),void 0,i,(r.contribution??0)/s)}}function ed(n){const t=wx(rt,n);if(t)return Jt(t);["truck","cargo","gear"].includes(n)&&dc(),["yard","hire","fleet"].includes(n)?Nx():mi(),Yn(700,.2),Jt(`${zr[n]} · Level ${rt.levels[n]}`),hn()}function La(){if(!(Me||Ce||Kt))return jn.find(n=>{const t=Number(n.root.userData.padHalfWidth??1.3),e=Number(n.root.userData.padHalfDepth??.85);return n.root.visible&&Math.abs(st.position.x-n.position.x)<t*1.16&&Math.abs(st.position.z-n.position.z)<e*1.2&&Math.abs(st.position.y-n.position.y)<1.15})}function Fl(n,t=!1){if(!t&&$e-Xu<.14)return;Xu=$e;const e=document.querySelector(".wallet").getBoundingClientRect(),i=n.position.clone().project(Ee),r=(i.x+1)/2*innerWidth,s=(1-i.y)/2*innerHeight,a=e.left+e.width/2,o=e.top+e.height/2,c=t?r:a,l=t?s:o,h=t?a:r,d=t?o:s,u=document.createElement("i");u.textContent="$",u.style.left=`${c}px`,u.style.top=`${l}px`,u.style.setProperty("--money-x",`${h-c}px`),u.style.setProperty("--money-y",`${d-l}px`),u.classList.toggle("payout",t),xt("#money-stream").appendChild(u),u.addEventListener("animationend",()=>u.remove(),{once:!0}),window.setTimeout(()=>u.remove(),1200)}function kx(n){const t=La();if(!t||Ei.length()>.2){En=0,pa="",xt("#purchase").hidden=!0,t||(ma="");return}if(ma===t.key||(t.key!==pa&&(En=0,pa=t.key),t.upgrade&&Xh(rt,t.upgrade)))return;if(En+=n,t.upgrade&&!rt.test){rt.contributions??={};const s=ps(rt,t.upgrade),a=rt.contributions[t.upgrade]??0,o=Math.min(rt.cash,s-a,s*n/1.8);rt.cash-=o,rt.contributions[t.upgrade]=a+o,En=Math.min(En,(a+o)/s*1.8),o>0&&Fl(t)}if(t.fleet!==void 0&&!rt.test){const s=rt.fleet[t.fleet],a=1e3*(s.level+1),o=s.contribution??0,c=Math.min(rt.cash,a-o,a*n/1.8);rt.cash-=c,s.contribution=o+c,En=Math.min(En,(o+c)/a*1.8),c>0&&Fl(t)}const e=rt.test?Math.min(1,En/1.8):zx(t);t.root.userData.setProgress?.(e),xt("#purchase").hidden=!1,xt("#purchase-name").textContent=t.key==="job"?"Accept the next move":t.key==="collect"?`Collect $${vs()}`:t.upgrade?zr[t.upgrade]:"Upgrade fleet truck",xt("#purchase-progress").style.width=`${Math.min(100,e*100)}%`;const i=t.upgrade?ps(rt,t.upgrade):t.fleet!==void 0?1e3*(rt.fleet[t.fleet].level+1):0,r=Math.min(i,Math.round(i*e));xt("#purchase-detail").textContent=i?rt.test?"DEVELOPMENT MODE · FREE":`$${r.toLocaleString("en-US")} OF $${i.toLocaleString("en-US")} INVESTED`:"STAND STILL TO ACTIVATE",En>=1.8&&(ma=t.key,En=0,xt("#purchase").hidden=!0,t.key==="job"?xs():t.key==="collect"?td():t.upgrade?ed(t.upgrade):t.fleet!==void 0&&Ax(rt,t.fleet)&&(vc(),mi(),hn()))}function nd(){const n=Rn(st.position);return n.x>1.15&&n.x<4.85&&n.z>=.2&&n.z<=ve&&st.position.y>.6}function Ts(n){const t=Rn(n);if(t.x>1.4&&t.x<4.6){if(t.z>=.2&&t.z<=ve)return .78;if(ji>.94&&t.z>ve&&t.z<ve+2.2)return .78*(ve+2.2-t.z)/2.2}return 0}function Gx(n,t=1/0){let e=-1/0;for(const i of Xt){if(i.mode!=="truck"&&i.mode!=="ground")continue;const[r,s]=Le(i.item),a=i.mode==="truck"?Rn(n):n,o=i.position,c=o.y+Kh(i.item.model);c<=t+.14&&Math.abs(a.x-o.x)<r*Ut/2-.08&&Math.abs(a.z-o.z)<s*Ut/2-.08&&(e=Math.max(e,c))}return e}function Ia(n,t=1/0){return Math.max(Ts(n),Gx(n,t))}function mc(){if(nd())return!0;const n=Rn(st.position);return ji>.94&&n.x>1.4&&n.x<4.6&&n.z>ve&&n.z<=ve+2.25}function Ua(){if(Me||Ce||Kt||Math.abs(Oe)>.35)return null;const n=Rn(st.position);if(n.x<.15||n.x>5.85||n.z<-.35||n.z>ve+.85||st.position.y>2.2)return null;const t=fe.clamp(Math.round((n.z-.2)/Ut),1,ri),e=Ke.map(s=>({row:s,distance:Math.abs(s-t)})).sort((s,a)=>s.distance-a.distance)[0];if(e&&e.distance===0)return{row:e.row,valid:!0,removing:!0};const r=Array.from({length:ri},(s,a)=>a+1).sort((s,a)=>Math.abs(s-t)-Math.abs(a-t)).find(s=>{if(Math.abs(s-t)>2||Ke.includes(s))return!1;const a=Xt.some(c=>{if(c.mode!=="truck"||c.shelf)return!1;const[,l]=Le(c.item),h=.2+s*Ut,d=l*Ut/2;return Math.abs(c.position.z-h)<d-.015}),o=Xt.some(c=>{if(c.mode!=="truck"||c.shelf)return!1;const[,l]=Le(c.item);return c.position.z+l*Ut/2<=.2+s*Ut+.035});return!a&&o});return{row:r??t,valid:r!==void 0&&Ke.length<1+rt.levels.gear,removing:!1}}function Hx(){const n=Ua();if(!n)return Jt("Stand beside the cargo deck to install a locking bar.");if(n.removing){Ke=Ke.filter(e=>e!==n.row),sr(),Yn(320,.18),Jt("Locking cargo bar removed."),hn();return}if(!n.valid)return Ke.length>=1+rt.levels.gear?Jt(`All ${1+rt.levels.gear} locking bar slots are in use.`):Jt("Move along the truck until a free grid boundary turns green.");Ke.push(n.row),Ke.sort((e,i)=>e-i),sr(),Yn(620,.22);const t=Xt.filter(e=>e.locked).length;Jt(`Cargo bar locked. ${t} ${t===1?"item is":"items are"} secured.`),hn()}function id(){let n,t=2.75;for(const e of Xt){if(["hand","air","delivered"].includes(e.mode)||e.mode==="truck"&&!nd())continue;const i=e.mesh.getWorldPosition(new A),r=Math.hypot(i.x-st.position.x,i.z-st.position.z);r<t&&Math.abs(i.y-st.position.y)<1.5&&(n=e,t=r)}return n}function qu(n,t){return Xt.every(e=>{if(e===t||["hand","air","delivered"].includes(e.mode))return!0;const i=e.mesh.getWorldPosition(new A),[r,s]=Le(e.item);return Math.abs(n.x-i.x)>r*Ut/2+.38||Math.abs(n.z-i.z)>s*Ut/2+.38})}function Vx(n){const t=n.mesh.getWorldPosition(new A),[e,i]=Le(n.item),r=n.mode==="truck",s=r?n.position:t,o=[new A(s.x-e*Ut/2-.62,0,s.z),new A(s.x+e*Ut/2+.62,0,s.z),new A(s.x,0,s.z-i*Ut/2-.62),new A(s.x,0,s.z+i*Ut/2+.62)].map(h=>r?un(h.setY(.78)):h.setY(0)).filter(h=>{if(Hr(h,.3)||!qu(h,n)||r&&!Va(h))return!1;for(let d=1;d<=6;d++){const u=st.position.clone().lerp(h,d/6);if(!qu(u,n)||Hr(u,.24))return!1}return!0});if(!o.length)return null;const c=o.sort((h,d)=>h.distanceToSquared(st.position)-d.distanceToSquared(st.position))[0];c.y=Ts(c);const l=Math.atan2(t.x-c.x,t.z-c.z);return{to:c,yaw:l,item:t}}function gc(){if(!Kt)return null;const[n,t]=Le(Kt.item),e=new A(0,0,.65+Math.max(n,t)*Ut/2).applyQuaternion(st.quaternion).add(st.position),i=Rn(e),r=Xt.filter(a=>!a.shelf).map(a=>({...a.item,x:a.mode==="truck"?(a.position.x-1.4)/Ut-Le(a.item)[0]/2:a.item.x,z:a.mode==="truck"?(a.position.z-.2)/Ut-Le(a.item)[1]/2:a.item.z,location:a.mode==="truck"?"truck":"pickup"})),s=Rn(st.position);return bx(r,Kt.item,{x:(i.x-1.4)/Ut-n/2,z:(i.z-.2)/Ut-t/2},{x:(s.x-1.4)/Ut,z:(s.z-.2)/Ut},4,ri)}function Ms(n){const[,t]=Le(n.item);return .62+t*Ut/2}function _c(n){if(rt.levels.gear<3)return null;const[t,e]=Le(n.item),i=Rn(st.position);if(t>1||e>1||i.z<.15||i.z>2.85)return null;const r=i.x<3?1.72:4.28;if(Math.abs(i.x-r)>.72)return null;const s=Xt.filter(o=>o.shelf&&o!==n),a=[.72,1.45,2.18].find(o=>!s.some(c=>Math.abs(c.position.x-r)<.3&&Math.abs(c.position.z-o)<.35));return a===void 0?null:new A(r,1.4,a)}function Wx(){if(Ce||Me)return;const n=La();if(n){n.key==="job"?xs():n.key==="collect"?td():Jt("Stand inside the markers to build.");return}if(Kt){const a=Kt,o=a.mesh.getWorldPosition(new A);let c,l;if(mc()){const p=_c(a),_=gc();if(!p&&!_.valid)return Jt("No clear space nearby. Press R to rotate or move along the truck.");p?(c=p,a.shelf=!0,a.item.x=0,a.item.z=Math.round((p.z-.2)/Ut)):(a.item.x=_.x,a.item.z=_.z,c=new A(1.4+(_.x+_.w/2)*Ut,.78,.2+(_.z+_.d/2)*Ut),a.shelf=!1),l="truck"}else if(c=st.position.clone().add(new A(0,0,1.1).applyQuaternion(st.quaternion)),c.y=.12,l=st.position.x>He.destination-10.5&&st.position.x<He.destination-.5&&st.position.z>-5&&st.position.z<4.9?"delivered":"ground",Hr(c,.3))return Jt("There is a wall here. Step into the room.");Pe.attach(a.mesh);const h=a.mesh.getWorldQuaternion(new Wn),d=(l==="truck"?Ht.rotation.y:0)+(a.item.rotated?Math.PI/2:0),u=new Wn().setFromEuler(new hi(0,d,0));Ce={kind:"drop",load:a,time:0,duration:.5,from:o,to:l==="truck"?un(c):c,mode:l,fromQuaternion:h,toQuaternion:u},a.position.copy(c),Kt=null;return}const t=id();if(!t)return Jt("Stand close to furniture.");if(t.locked)return Jt("Remove the locking cargo bar before lifting this item.");const e=t.mesh.getWorldPosition(new A),i=Vx(t);if(!i)return Jt("Move around the furniture so there is room to lift it safely.");const r=st.position.clone(),s=fe.clamp(r.distanceTo(i.to)/3.8,.18,.55);Pe.attach(t.mesh),Ce={kind:"lift",load:t,time:0,duration:s+(.62+t.item.weight*.34)/(1+rt.levels.worker*.23),from:e,to:new A,mode:"hand",approachFrom:r,approachTo:i.to,approachYaw:i.yaw,approachDuration:s},t.mode="hand",t.locked=!1,t.lockRest=void 0,fc(),t.velocity.set(0,0,0),t.angular.set(0,0,0),t.shelf=!1,t.item.fallen=!1,Yn(260)}function Xx(n){if(!Ce)return;Ce.time+=n;const t=Ce,e=t.approachDuration??0,i=t.time<e,r=Math.min(1,Math.max(0,(t.time-e)/(t.duration-e))),s=r*r*(3-2*r),a=st.userData.rig;if(i&&t.approachFrom&&t.approachTo){const c=Math.min(1,t.time/e),l=c*c*(3-2*c);if(st.position.lerpVectors(t.approachFrom,t.approachTo,l),Ha.animate($e,!0,!1,!1),t.approachYaw!==void 0){const h=Math.atan2(Math.sin(t.approachYaw-st.rotation.y),Math.cos(t.approachYaw-st.rotation.y));st.rotation.y+=h*(1-Math.exp(-12*n))}t.load.mesh.position.copy(t.from);return}a.body.rotation.x=.42*Math.sin(r*Math.PI),a.body.position.y=-.19*Math.sin(r*Math.PI),a.arms.forEach(c=>c.rotation.x=-1.35*Math.sin(Math.min(1,r*1.35)*Math.PI/2));const o=t.kind==="lift"?fe.smoothstep(r,.08,.94):s;if(t.kind==="lift"&&t.to.copy(st.position).add(new A(0,.95,Ms(t.load)).applyQuaternion(st.quaternion)),t.kind==="lift"){const c=t.from.clone();c.y=Math.max(t.to.y,t.from.y+.95),o<.58?t.load.mesh.position.lerpVectors(t.from,c,fe.smoothstep(o/.58,0,1)):t.load.mesh.position.lerpVectors(c,t.to,fe.smoothstep((o-.58)/.42,0,1))}else t.load.mesh.position.lerpVectors(t.from,t.to,o),t.fromQuaternion&&t.toQuaternion&&t.load.mesh.quaternion.slerpQuaternions(t.fromQuaternion,t.toQuaternion,o);t.load.mesh.rotation.x=fe.damp(t.load.mesh.rotation.x,0,8,n),t.load.mesh.rotation.z=fe.damp(t.load.mesh.rotation.z,0,8,n),t.time>=t.duration&&(t.load.mode=t.mode,t.kind==="lift"?(Kt=t.load,st.add(t.load.mesh),t.load.mesh.position.set(0,.95,Ms(t.load)),t.load.mesh.rotation.set(0,t.load.item.rotated?Math.PI/2:0,0)):(bs(t.load),Wa(),fc()),t.load.velocity.set(0,0,0),t.load.angular.set(0,0,0),t.load.settled=!0,Ce=null,a.body.rotation.x=0,a.body.position.y=0,Yn(520),Es()&&(mi(),Jt("Everything delivered. Collect payment outside!")),hn())}function Yx(){if(Me||Ce||Kt)return;const n=Rn(st.position);if(Math.hypot(n.x-3,n.z-ve)>4.8)return Jt("Walk to the rear of your truck.");if(n.x>1.2&&n.x<4.8&&n.z>ve-.2&&n.z<ve+2.4)return Jt("Step to the side of the ramp.");ir=ir>.5?0:1,Yn(300,.25)}function qx(){if(!(Ce||Kt||ye)){if(Me){if(Math.abs(Oe)>.35)return Jt("Brake to a stop first.");Oe=0,Ca=1,ye={entering:!1,time:0,swapped:!1},Jt("Opening the driver door…");return}if(st.position.distanceTo(un(new A(5.3,0,-1)))>3.8)return Jt("The driver door is at the front right.");Ca=1,ye={entering:!0,time:0,swapped:!1,from:st.position.clone()},Ei.set(0,0,0),Jt("Opening the driver door…")}}function $x(n){if(!ye)return;ye.time+=n;const t=ye.entering?1.18:.58;if(ye.entering&&!ye.swapped&&ye.from&&ye.time>=.38){const e=un(new A(5.15,0,-1.15)),i=fe.smoothstep((ye.time-.38)/.76,0,1);e.y=Ts(e),st.position.lerpVectors(ye.from,e,i),st.rotation.y=Ht.rotation.y-Math.PI/2,Ha.animate($e,!0,!1,!1)}if(!ye.swapped&&ye.time>=t){if(ye.swapped=!0,ye.entering)Me=!0,st.visible=!1,Jt(ir?"Rear lowered — loose cargo can fall out. Raise it with G before driving.":"W/S drive and brake. F exits when stopped.");else{Me=!1,st.visible=!0;let e=un(new A(5.5,0,-1));for(const i of[5.5,.5]){const r=un(new A(i,0,-1));if(!Hr(r,.28)){e=r;break}}st.position.copy(e)}hn()}ye.time>=(ye.entering?1.32:1.05)&&(Ca=0),ye.time>=1.78&&(ye=null)}function Hr(n,t=.25){return[...Ga.barriers,...Qi.barriers,...oi.barriers,...li.barriers].some(e=>Math.abs(n.x-e.x)<e.w/2+t&&Math.abs(n.z-e.z)<e.d/2+t)}function Kx(n){if(!Kt)return!1;const[t,e]=Le(Kt.item),i=n.clone().add(new A(0,0,Ms(Kt)).applyAxisAngle(Jh,st.rotation.y)),r=t*Ut/2,s=e*Ut/2,a=Math.abs(Math.cos(st.rotation.y)),o=Math.abs(Math.sin(st.rotation.y)),c=r*a+s*o,l=r*o+s*a;return i.x-c<An.minX||i.x+c>An.maxX||i.z-l<An.minZ||i.z+l>An.maxZ?!0:[...Ga.barriers,...Qi.barriers,...oi.barriers,...li.barriers].some(h=>Math.abs(i.x-h.x)<c+h.w/2+.04&&Math.abs(i.z-h.z)<l+h.d/2+.04)}function Va(n,t=zn,e=st.position.y){if(n.x<An.minX||n.x>An.maxX||n.z<An.minZ||n.z>An.maxZ||Hr(n)||Kx(n))return!1;const i=Rn(n);if(i.x>1.15&&i.x<4.85&&i.z>-2.4&&i.z<.2||!t&&Math.abs(Ia(n,e+.2)-e)>.22||i.z>=.2&&i.z<ve&&(Math.abs(i.x-1.4)<.15||Math.abs(i.x-4.6)<.15)&&e<(rt.levels.truck>0?2.75:1.02))return!1;for(const r of Xt)if(r.mode==="truck"||r.mode==="ground"){const[s,a]=Le(r.item),o=r.mode==="truck"?r.position:r.mesh.getWorldPosition(new A),c=r.mode==="truck"?i:n,l=o.y+Kh(r.item.model);if(e<l-.08&&Math.abs(c.x-o.x)<s*Ut/2+.16&&Math.abs(c.z-o.z)<a*Ut/2+.16)return!1}return!0}function Zx(n){if(Me||ye||Ce||xt("#dialog").open)return Ei.set(0,0,0),rs=!1,!1;const t=Number(Ae.has("KeyD")||Ae.has("ArrowRight"))-Number(Ae.has("KeyA")||Ae.has("ArrowLeft")),e=Number(Ae.has("KeyW")||Ae.has("ArrowUp"))-Number(Ae.has("KeyS")||Ae.has("ArrowDown")),i=Ee.getWorldDirection(new A);i.y=0,i.normalize();const r=new A(-i.z,0,i.x).multiplyScalar(t).addScaledVector(i,e);rs=Ae.has("ShiftLeft")&&!Kt&&fa>3&&r.lengthSq()>0,fa=fe.clamp(fa+n*(rs?-27:16+rt.levels.worker*2),0,100);const s=Kt?Math.max(1.35,3.1-Kt.item.weight*.25/(1+rt.levels.worker*.3)):rs?6.7:3.9;r.normalize().multiplyScalar(s*(1+rt.levels.worker*.07)),Ei.lerp(r,1-Math.exp(-10*n));const a=st.position.clone();for(let o=0;o<4;o++)for(const c of["x","z"]){const l=st.position.clone();if(l[c]+=Ei[c]*n/4,Va(l)){if(!zn){const h=Ia(l,st.position.y+.2);st.position.y-h>.22?(zn=!0,Un=Math.min(0,Un),l.y=st.position.y):l.y=h}st.position.copy(l)}}if(Ei.length()>.1){const o=Math.atan2(Ei.x,Ei.z),c=Math.atan2(Math.sin(o-st.rotation.y),Math.cos(o-st.rotation.y));st.rotation.y+=c*(1-Math.exp(-14*n))}return a.distanceTo(st.position)>.003}function Jx(){Me||ye||Ce||xt("#dialog").open||zn||(zn=!0,Un=5.4,Yn(390,.08))}function Qx(n){if(Me||ye){zn=!1,Un=0;return}const t=Ia(st.position,st.position.y+.16);if(!zn&&st.position.y>t+.08&&(zn=!0,Un=Math.min(0,Un)),!zn){st.position.y=t;return}const e=st.position.y;Un-=12.5*n,st.position.y+=Un*n;const i=Ia(st.position,e+.12);Un<=0&&st.position.y<=i&&e>=i-.06&&(st.position.y=i,Un=0,zn=!1),st.position.y<-2&&xc()}function xc(n=!0){if(Me)return;const t=st.position.clone(),e=[];for(const r of[2,3,4.2,5.5])for(let s=0;s<16;s++)e.push(new A(t.x+Math.cos(s*Math.PI*2/16)*r,0,t.z+Math.sin(s*Math.PI*2/16)*r));const i=e.find(r=>(r.y=Ts(r),Va(r,!1,r.y)));st.position.copy(i??new A(-6,0,1)),Un=0,zn=!1,Ei.set(0,0,0),ga=0,Nl.copy(st.position),xt("#stuck-button").hidden=!0,n&&Jt("Moved you to the nearest clear space."),hn()}function Wa(){!Me&&!Va(st.position,!1,st.position.y)&&xc(!1)}function jx(n){if(!Me||ye)return{acceleration:0,yawRate:0};const t=Number(Ae.has("KeyW")||Ae.has("ArrowUp"))-Number(Ae.has("KeyS")||Ae.has("ArrowDown")),e=Number(Ae.has("KeyA")||Ae.has("ArrowLeft"))-Number(Ae.has("KeyD")||Ae.has("ArrowRight")),i=Oe;Oe+=t*(t*Oe<0?10:4+rt.levels.truck*.45)*n,t||(Oe*=Math.exp(-1.7*n)),!t&&Math.abs(Oe)<.04&&(Oe=0),Oe=fe.clamp(Oe,-4,8.5+rt.levels.truck*1.3),Lo=fe.damp(Lo,e*.52,6,n);const r=Oe*Math.tan(Lo)/Math.max(3.1,ve*.65),s=un(new A(3,0,(ve-2.2)/2)),a=Ht.position.clone(),o=Ht.rotation.y;Ht.rotation.y+=r*n,s.addScaledVector(new A(-Math.sin(Ht.rotation.y),0,-Math.cos(Ht.rotation.y)),Oe*n),Ht.position.copy(s).sub(new A(3,0,(ve-2.2)/2).applyAxisAngle(Jh,Ht.rotation.y)),Ht.updateMatrixWorld(!0);let c=!1,l=!1;for(const d of[1.25,4.75])for(const u of[-2.25,(ve-2.2)/2,ve])Hr(un(new A(d,0,u)),.08)&&(c=!0);const h=2.4;(s.x<An.minX+h||s.x>An.maxX-h||s.z<An.minZ+h||s.z>An.maxZ-h)&&(c=!0);for(const d of os)d.visible&&s.distanceTo(d.position)<3.55&&(c=!0,l=!0);if(c&&(Ht.position.copy(a),Ht.rotation.y=o,Oe=0,$e-Da>.7)){Da=$e,Yn(120,.18),l&&$e-Yu>1.2&&(Yu=$e,pc(6,"Collision with a company truck"));for(const d of Xt)d.mode==="truck"&&(d.velocity.z+=Math.abs(i)*.6)}return{acceleration:(Oe-i)/n,yawRate:r}}function vc(){_a.forEach(n=>ai(n.root)),_a=[],os.forEach(ai),os=[];for(let n=0;n<rt.levels.hire;n++){const t=zh(n%2?4761009:15117649,n%3),e=oc(3);e.scale.setScalar(.65),e.position.set(0,.9,.58),t.root.add(e),Pe.add(t.root),_a.push(t)}rt.fleet.forEach((n,t)=>{const e=new xe;e.name=`fleet-${t}`,D(e,0,1.05,0,2.7,1.7,2,15707460,!0),D(e,0,1.9,2.8,2.8,2.8,3.6,n.level>1?16048049:9221554,!0),D(e,0,1.65,-1.04,2.2,.55,.04,8501962),D(e,0,2.03,0,2.85,.18,2.1,16174952,!0),D(e,0,.53,-1.12,2.75,.2,.18,3626603,!0);for(const i of[-1,1])D(e,i*1.36,1.6,0,.04,.6,1.3,8501962),D(e,i*.95,.95,-1.06,.42,.2,.06,16772523,!0),D(e,i*1.43,1.05,2.8,.05,.23,3.3,15381834),D(e,i*1.1,1.35,4.63,.05,1.7,.04,7442072);D(e,0,1.45,4.64,.045,2,.035,7442072);for(const i of[-1.3,1.3])for(const r of[0,3.5]){const s=new Bt(new Xn(.4,.4,.25,12),new ic({color:3163992}));s.rotation.z=Math.PI/2,s.position.set(i,.4,r),s.userData.owned=!0,e.add(s)}Pe.add(e),os.push(e)})}function $u(n,t){const e=8+t*4.8,i=(n.route??t%3)%3,r=new A(e,0,-9),s=i===1?-30:42,a=i===1?-78:90,o=i===2?Qn[2]:Qn[0];return[r,new A(e,0,12),new A(s,0,12),new A(s,0,o),new A(a,0,o),new A(a,0,12),new A(e,0,12),r]}function tv(n,t){if(t<=0)return{position:n[0].clone(),yaw:0};const e=n.slice(1).map((s,a)=>s.distanceTo(n[a])),i=e.reduce((s,a)=>s+a,0);let r=fe.clamp(t,0,.9999)*i;for(let s=0;s<e.length;s++){if(r<=e[s]){const a=r/Math.max(.001,e[s]),o=n[s].clone().lerp(n[s+1],a),c=n[s+1].clone().sub(n[s]);return{position:o,yaw:Math.atan2(c.x,c.z)}}r-=e[s]}return{position:n.at(-1).clone(),yaw:0}}function ev(n){const t=Px(rt,n);t&&Pa<=0&&Jt(`+$${t} · Your company is working`),_a.forEach((r,s)=>{const a=rt.fleet[s];r.root.visible=!a||a.phase<.15||a.phase>.85;const o=(Math.sin($e*1.3+s)+1)/2;r.root.position.set(8+s*4.8,0,-3-o*6),r.root.rotation.y=Math.cos($e*1.3+s)>0?Math.PI:0,r.animate($e,!0,!0)});const e=[],i=un(new A(3,0,(ve-2.2)/2));rt.fleet.forEach((r,s)=>{const a=os[s];if(!a)return;r.route??=s%3;const o=tv($u(r,s),r.phase),c=e.some(d=>d.distanceTo(o.position)<3.3),l=o.position.distanceTo($u(r,s)[0])>4,h=l&&i.distanceTo(o.position)<3.5;(c||h)&&a.userData.safePosition?(r.phase-=n/Yh(r),a.position.copy(a.userData.safePosition)):(a.position.copy(o.position),a.rotation.y=o.yaw,a.userData.safePosition=o.position.clone()),e.push(a.position.clone())})}function nv(n){const t=Me?un(new A(3,0,2)):st.position;for(const s of[...Ga.roofs,...Qi.roofs,...oi.roofs,...li.roofs]){const a=Math.abs(t.x-s.bounds.x)<s.bounds.w/2+1&&Math.abs(t.z-s.bounds.z)<s.bounds.d/2+1;for(const o of[s.mesh,...s.walls??[]]){const c=o.material;c.opacity=fe.damp(c.opacity,a?.035:1,6,n),c.depthWrite=c.opacity>.5,o.castShadow=c.opacity>.5}}const e=Rn(st.position),i=!Me&&e.x>1&&e.x<5&&e.z>-.1&&e.z<ve+2.5,r=[Ht.userData.roof,...Ht.userData.cargoWalls??[]];for(const s of r){const a=s.material;a.opacity=fe.damp(a.opacity,i||Me?.025:1,7,n),a.depthWrite=a.opacity>.5,s.castShadow=a.opacity>.5}}function iv(){if(!Be||cn)return{point:new A(-10,0,1),text:"Accept a move at your job board"};if(Es())return{point:Qh.clone(),text:"Collect your payment"};const n=Xt.find(t=>t.mode==="ground"||t.mode==="air");return n?{point:n.position.clone(),text:n.item.fallen?"Recover the fallen furniture":"Pick up the furniture"}:{point:new A(He.destination-5.6,0,1),text:"Unload inside the new home"}}function rv(n){if(!Me)return n;const t=un(new A(3,0,(ve-2.2)/2)),e=n.point.x<-30?"pickup":n.point.x>40?"delivery":"yard",i=e==="pickup"?He.pickup+3:e==="delivery"?He.destination+3:-4,r=2.8;if(Math.abs(t.x-i)<10&&Math.abs(t.z-r)<10)return{point:new A(i,0,r),text:e==="yard"?"Park in your company yard":`Park at the ${e} house`};if(Gr!==e||!Hi.length){Gr=e,Nn=0;const h=[...Qn.map(_=>({z:_,branches:[...Tl]})),...t.x>=42&&t.x<=90?[{z:-15,branches:[42,90]}]:[],...t.x>=-30&&t.x<=90?[{z:40,branches:[-30,42,90]}]:[],...t.x>=-78&&t.x<=75?[{z:81,branches:[-30,42]}]:[]].sort((_,S)=>Math.abs(_.z-t.z)-Math.abs(S.z-t.z))[0],d=[...Tl].sort((_,S)=>Math.abs(_-t.x)-Math.abs(S-t.x))[0],u=Math.abs(d-t.x)<Math.abs(h.z-t.z),p=[];if(u)p.push(new A(d,0,t.z),new A(d,0,12));else if(p.push(new A(t.x,0,h.z)),h.z!==12){const _=[...h.branches].sort((S,m)=>Math.abs(t.x-S)+Math.abs(i-S)-Math.abs(t.x-m)-Math.abs(i-m))[0];p.push(new A(_,0,h.z),new A(_,0,12))}p.push(new A(i,0,12),new A(i,0,r)),Hi=p.filter((_,S,m)=>!S||_.distanceToSquared(m[S-1])>.01)}const s=Hi;for(;Nn<s.length-1&&t.distanceTo(s[Nn])<3;)Nn++;const a=s[Nn],o=Math.round(t.distanceTo(a)),c=s[Nn+1];let l=e==="yard"?"Return to your company yard":`Continue to the ${e} house`;if(c){const h=a.clone().sub(t),d=c.clone().sub(a),u=Math.atan2(h.x,h.z),p=Math.atan2(d.x,d.z),_=Math.atan2(Math.sin(p-u),Math.cos(p-u));l=Math.abs(_)<.35?`Continue straight for ${o} m`:`In ${o} m turn ${_>0?"right":"left"}`}else o<18&&(l=e==="yard"?"Park in your company yard":`Park at the ${e} house`);return{point:a,text:l}}function Ku(){for(;ms.children.length;){const n=ms.children.pop();n instanceof Bt&&(n.geometry.dispose(),n.material.dispose())}}function sv(){const n=Me&&Hi.length>1;if(Vn.visible=n,!n){aa&&Ku(),aa="";return}const t=Hi.slice(Math.max(0,Nn-1)),e=`${Gr}:${Nn}:${t.map(o=>`${o.x.toFixed(1)},${o.z.toFixed(1)}`).join(";")}`,i=Hi.at(-1);if(Vn.position.set(i.x,0,i.z),e===aa)return;aa=e,Ku();const r=[];for(let o=0;o<t.length-1;o++){const c=t[o],l=t[o+1],h=l.clone().sub(c),d=h.length();if(d<.5)continue;const u=h.multiplyScalar(1/d),p=new A(-u.z,0,u.x),_=4.2,S=Math.min(2.2,d*.4);for(let m=S;m<d-.45;m+=_){const f=c.clone().addScaledVector(u,m),b=f.clone().addScaledVector(u,.82),C=f.clone().addScaledVector(u,-.58),E=C.clone().addScaledVector(p,.5),x=C.clone().addScaledVector(p,-.5);r.push(b.x,.14,b.z,E.x,.14,E.z,x.x,.14,x.z)}}if(!r.length)return;const s=new Ie;s.setAttribute("position",new ae(r,3)),s.computeVertexNormals();const a=new Bt(s,new qn({color:7792592,transparent:!0,opacity:.82,side:_n,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3}));a.name="route-ground-arrows",a.renderOrder=3,ms.add(a)}function rd(){const n=iv(),t=rv(n),e=Xt.filter(d=>d.mode==="truck").length,i=Xt.filter(d=>d.mode==="delivered").length;sv(),xt("#cash").textContent=rt.test?"∞":`$${Math.floor(rt.cash).toLocaleString("en-US")}`,xt("#cash-mode").textContent=rt.test?"TEST MONEY":`$${Math.floor(rt.earned).toLocaleString("en-US")} earned`,xt("#job-title").textContent=cn?"Move completed!":Be?Mn.title:"Small beginnings",xt("#job-label").textContent=Be?`MOVE ${gs+1} · LEVEL ${Mn.difficulty}`:"YOUR NEXT MOVE",xt("#job-step").textContent=t.text,xt("#job-progress").style.width=`${Be?(e+i*2)/Xt.length/2*100:0}%`,xt("#job-count").textContent=Be?`${e} in truck  ·  ${i}/${Xt.length} delivered`:"Your first customer is waiting",xt("#job-score").toggleAttribute("hidden",!Be),xt("#job-score b").textContent=`${Bn}`,xt("#job-score").classList.toggle("warning",Bn<70),xt("#score-breakdown").innerHTML=rr.length?`<strong>POINT DEDUCTIONS</strong>${rr.map(d=>`<span><i>−${d.points}</i>${d.reason}</span>`).join("")}`:Be?"<small>No deductions</small>":"",xt("#job-value").textContent=Be?`${cn?"COLLECTED":"PAYDAY"}  $${Es()?vs():Mn.reward}`:"Start with a job. Build an empire.",xt("#energy").style.width=`${fa}%`;const r=Me?un(new A(3,0,1)):st.position,s=Math.round(r.distanceTo(t.point)),a=r.clone().project(Ee),o=t.point.clone().setY(.2).project(Ee),c=Math.atan2(o.x-a.x,o.y-a.y);xt("#nav-arrow").style.transform=`rotate(${fe.radToDeg(c)}deg)`,xt("#nav-label").textContent=t.text,xt("#nav-distance").textContent=`${s} m`,xt("#status-kicker").textContent=Me?`${Math.round(Math.abs(Oe)*9)} KM/H · NAVIGATION`:"CURRENT TASK";let l="E",h="Move with WASD · Hold Shift to sprint";if(Ce)h=`${Ce.kind==="lift"?"Lifting":"Placing"} ${Ce.load.item.name}`,l=`${Math.round(Ce.time/Ce.duration*100)}%`;else if(Me)l="W S",h="Drive / brake · A D steer · F exit";else if(Kt)h=mc()?_c(Kt)?"Place small item in the rack":gc()?.valid?"Place in highlighted space · R rotate":"No clear space nearby · R rotate or move closer":"Carry to the truck or into the delivery house";else if(La()){const d=La();h=d.key==="job"?"Accept the next move":d.key==="collect"?`Collect $${vs()}`:d.upgrade?`Invest in ${zr[d.upgrade]}`:"Upgrade this fleet truck",l="$"}else if(Ua()){const d=Ua();l="Q",h=d.removing?"Remove this locking cargo bar":d.valid?"Install a locking cargo bar on the green row":"Move along the deck to find a free locking row"}else{const d=id(),u=Rn(st.position);d?(h=`Lift ${d.item.name} · ${d.item.weight>=4?"HEAVY":d.item.fragile?"FRAGILE":"READY"}`,l="E"):Math.hypot(u.x-5.3,u.z+1)<3?(h="Enter your truck",l="F"):Math.hypot(u.x-3,u.z-ve)<4&&(h=ir?"Raise the rear":"Lower the rear",l="G")}xt("#hint-key").textContent=l,xt("#hint-text").textContent=h,xt("#company-stats").innerHTML=`<div><b>${rt.jobs}</b><span>YOUR MOVES</span></div><div><b>${rt.levels.hire}</b><span>CREWS</span></div><div><b>${rt.fleet.length}</b><span>FLEET TRUCKS</span></div>`,xt("#fleet-list").innerHTML=rt.fleet.map((d,u)=>`<div class="fleet-row"><span>Truck ${u+2} · Route ${String.fromCharCode(65+(d.route??u%3))}<small>${d.phase<.05?"Loading under cover":d.phase<.82?"On a separate route":"Returning"} · ${d.completed} jobs</small></span><div class="progress"><i style="width:${Math.max(0,d.phase)*100}%"></i></div></div>`).join(""),document.querySelectorAll("[data-upgrade]").forEach(d=>{const u=d.dataset.upgrade;d.textContent=`${zr[u]} · ${rt.levels[u]}/${ii[u]}`})}function hn(){if(!Zh)try{localStorage.setItem("movecraft-rewrite-v1",JSON.stringify({worldVersion:2,navPath:Hi.map(n=>n.toArray()),company:rt,contract:Mn,jobActive:Be,jobPaid:cn,jobNumber:gs,routeVariant:Ti,navLeg:Gr,navIndex:Nn,jobScore:Bn,scoreEvents:rr,jobElapsed:_s,lateSteps:Fr,cargoBars:Ke,truck:{position:Ht.position.toArray(),yaw:Ht.rotation.y,rear:ir},player:st.position.toArray(),loads:Xt.map(n=>({item:n.item,mode:n.mode==="hand"?"ground":n.mode,position:n.mode==="hand"?st.position.toArray():n.position.toArray(),velocity:n.velocity.toArray(),rotation:n.mesh.rotation.toArray(),settled:n.settled,shelf:n.shelf}))}))}catch{}}function av(){if(jt)try{Mn=jt.contract??Mn,Be=!!jt.jobActive,cn=!!jt.jobPaid,gs=jt.jobNumber??0,Ti=jt.routeVariant??gs%3,Gr="",Nn=0,Hi=[],Bn=jt.jobScore??100,rr=Array.isArray(jt.scoreEvents)?jt.scoreEvents:[],_s=jt.jobElapsed??0,Fr=jt.lateSteps??0,Ke=Array.isArray(jt.cargoBars)?jt.cargoBars.filter(n=>Number.isInteger(n)&&Number(n)>0&&Number(n)<=ri):[],jt.truck&&(Ht.position.fromArray(jt.truck.position),Ht.rotation.y=jt.truck.yaw,ji=ir=jt.truck.rear),jt.player&&st.position.fromArray(jt.player),Be&&(ai(oi.root),ai(li.root),oi=kr(He.pickup,Mn.difficulty+Ti),li=kr(He.destination,Mn.difficulty+Ti+1,!0),Pe.add(oi.root,li.root));for(const n of jt.loads??[]){const t={item:n.item,mesh:oc(n.item.model),mode:n.mode,position:new A().fromArray(n.position),velocity:new A().fromArray(n.velocity??[0,0,0]),angular:new A,hitAt:-10,settled:n.settled,shelf:n.shelf};Xt.push(t),bs(t),n.rotation&&t.mode!=="truck"&&t.mesh.rotation.fromArray(n.rotation)}sr(),Wa()}catch{Jt("Saved session could not be fully restored.")}}function Zu(){(!Be||cn)&&xs(!0),rt.levels.cargo<3&&(rt.levels.cargo=3,dc()),Kt=null,Ce=null,Ke=[],sr();for(const n of Xt)n.mode="ground",n.item.rotated=!1;for(const n of Xt){let t=!1;for(const e of[!1,!0]){if(t)break;n.item.rotated=e;for(let i=0;i<ri&&!t;i++)for(let r=0;r<4&&!t;r++){const s=Xt.map(a=>({...a.item,location:a.mode==="truck"?"truck":"pickup"}));if(Vh(s,n.item,r,i,4,ri)){n.item.x=r,n.item.z=i;const[a,o]=Le(n.item);n.mode="truck",n.position.set(1.4+(r+a/2)*Ut,.78,.2+(i+o/2)*Ut),n.velocity.set(0,0,0),n.item.fallen=!1,t=!0}}}bs(n)}mi(),Jt(`${Xt.filter(n=>n.mode==="truck").length}/${Xt.length} packed. Test packing expands the cargo bay.`),hn()}function ov(n){if(Math.abs(Oe)>.35)return Jt("Stop before using test tools.");if(n==="job"&&xs(!0),n==="pack"&&Zu(),n==="deliver"&&(Be||xs(),Xt.forEach((t,e)=>{t.mode="delivered",t.position.set(He.destination-8+e%3*2.5,.12,-3+Math.floor(e/3)*2.5),bs(t)}),Kt=null,Ce=null,Ke=[],sr(),mi(),st.position.set(He.destination-6,0,6),Me=!1,st.visible=!0,Jt("Delivery complete. Step onto the payment field.")),n==="home"&&(st.position.set(-6,0,1),Me=!1,st.visible=!0,Jt("Test teleport: player returned. Truck and cargo stay where they are.")),n==="impact"){Xt.some(e=>e.mode==="truck")||Zu();const t=Xt.find(e=>e.mode==="truck");t&&(t.velocity.set(6,0,1),Cl(t,{truck:Ht,back:ve,speed:0,yawRate:0}),Jt("Drop test: gravity, bounce, tumble, settle. Cargo stays where it lands."))}n==="restart"&&(hc('<h2>Reset test career?</h2><p>This replaces your saved rewrite career with the shabby starting setup.</p><button id="confirm-reset">Reset career</button>'),xt("#confirm-reset").onclick=()=>{Zh=!0,localStorage.removeItem("movecraft-rewrite-v1"),localStorage.removeItem("movecraft-update-backup"),location.reload()}),hn()}const sd={interact:Wx,cab:qx,bar:Hx,rotate:()=>{Kt&&!Ce&&(Kt.item.rotated=!Kt.item.rotated,Kt.mesh.rotation.set(0,Kt.item.rotated?Math.PI/2:0,0),Kt.mesh.position.z=Ms(Kt),Yn(400))},rear:Yx};document.querySelectorAll("[data-action]").forEach(n=>n.onclick=()=>sd[n.dataset.action]());document.querySelectorAll("[data-test]").forEach(n=>n.onclick=()=>ov(n.dataset.test));xt("#upgrade-tests").innerHTML=Object.keys(zr).filter(n=>n!=="factory").map(n=>`<button data-upgrade="${n}"></button>`).join("");document.querySelectorAll("[data-upgrade]").forEach(n=>n.onclick=()=>{if(Math.abs(Oe)>.35)return Jt("Stop before upgrading.");const t=n.dataset.upgrade;ed(t);const e=jn.find(i=>i.key===t);e&&(Me=!1,st.visible=!0,st.position.copy(e.position).add(new A(0,0,2)),st.position.y=Ts(st.position),Ee.zoom=t==="yard"||t==="fleet"?.9:1.6,Ee.updateProjectionMatrix())});xt("#test-toggle").onclick=()=>{xt("#tests").hidden=!xt("#tests").hidden};xt("#company-toggle").onclick=()=>{xt("#company-panel").hidden=!xt("#company-panel").hidden};xt("#job-toggle").onclick=()=>xt("#job-body").classList.toggle("collapsed");function ad(){xt("#mode-toggle").textContent=rt.test?"DEV":"NORMAL",xt("#mode-toggle").classList.toggle("development",rt.test),xt("#test-toggle").hidden=!rt.test,rt.test||(xt("#tests").hidden=!0)}xt("#mode-toggle").onclick=()=>{rt.test=!rt.test,En=0,pa="",ma="",ad(),mi(),hn(),Jt(rt.test?"Development mode: unlimited money and test tools enabled.":"Normal mode: purchases now use company cash.")};ad();xt("#camera-follow").onclick=()=>{Ee.zoom=.78,Ee.updateProjectionMatrix()};for(const[n,t]of[["zoom-in",1.2],["zoom-out",1/1.2]])xt(`#${n}`).onclick=()=>{Ee.zoom=fe.clamp(Ee.zoom*t,ln.minZoom,ln.maxZoom),Ee.updateProjectionMatrix()};xt("#settings").onclick=()=>{hc(`<h2>Make yourself comfortable</h2><label>Sound effects <input id="sound" type="checkbox" ${Pl?"checked":""}></label><label>Volume <input id="volume" type="range" min="0" max="1" step=".05" value="${Dl}"></label><label>Soft shadows <input id="shadows" type="checkbox" ${Do?"checked":""}></label><p>Progress saves automatically. Switch off test money in the workbench for career costs.</p><button id="update-game">Update game safely</button><p class="fine">Saves a backup of your current career, then reloads the newest game files.</p>`),xt("#sound").onchange=n=>Pl=n.target.checked,xt("#volume").oninput=n=>Dl=+n.target.value,xt("#shadows").onchange=n=>{Do=n.target.checked,pi.shadowMap.enabled=Do},xt("#update-game").onclick=()=>{hn();const n=localStorage.getItem("movecraft-rewrite-v1");n&&localStorage.setItem("movecraft-update-backup",n);const t=new URL(location.href);t.searchParams.set("update",Date.now().toString()),location.replace(t)}};xt("#stuck-button").onclick=()=>xc();xt("#help").onclick=()=>hc("<h2>Moving controls</h2><p>WASD / arrows move. Shift sprints. Space jumps. Drag to orbit, scroll or pinch to zoom.</p><p>E lifts and places. Q installs or removes a locking cargo bar beside the deck. R rotates. F enters/exits the cab. W/S drives/brakes; A/D steer. G raises or lowers the single rear panel.</p><p>Stand near a purchase marker to upgrade your truck, yard and fleet.</p>");window.addEventListener("keydown",n=>{if(xt("#dialog").open||(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","Space"].includes(n.code)&&(Ae.add(n.code),n.preventDefault()),n.repeat))return;n.code==="Space"&&Jx();const t={KeyE:"interact",KeyF:"cab",KeyQ:"bar",KeyR:"rotate",KeyG:"rear"};t[n.code]&&sd[t[n.code]]()});window.addEventListener("keyup",n=>Ae.delete(n.code));window.addEventListener("blur",()=>Ae.clear());document.querySelectorAll("[data-key]").forEach(n=>{n.onpointerdown=t=>{n.setPointerCapture(t.pointerId),Ae.add(n.dataset.key)},n.onpointerup=n.onpointercancel=()=>Ae.delete(n.dataset.key)});function Xa(){const n=Math.max(1,xt("#world").clientWidth),t=Math.max(1,xt("#world").clientHeight);pi.setSize(n,t,!1);const e=n/t;Ee.left=-12*e,Ee.right=12*e,Ee.top=12,Ee.bottom=-12,ln.minZoom=Math.max(.55,e/4),Ee.zoom=Math.max(Ee.zoom,ln.minZoom),Ee.updateProjectionMatrix()}window.addEventListener("resize",Xa);window.visualViewport?.addEventListener("resize",Xa);new ResizeObserver(Xa).observe(xt("#world"));dc();av();vc();mi();Xa();rd();ln.target.copy(st.position);Ee.position.add(st.position);ln.update();let Ju=performance.now(),No=0;function od(n){const t=Math.min((n-Ju)/1e3,.1);Ju=n,$e+=t,$x(t),ji=fe.damp(ji,ir,3,t),Ul=fe.damp(Ul,Ca,8,t),jh();const e=Zx(t);for(Qx(t),!Me&&!ye&&!xt("#dialog").open&&st.position.distanceToSquared(Nl)<.0025?(ga+=t,ga>12&&(xt("#stuck-button").hidden=!1)):(ga=0,Nl.copy(st.position),xt("#stuck-button").hidden=!0),Ha.animate($e,e,!!Kt||!!Ce,rs),Xx(t),Kt&&(Kt.mesh.rotation.y=fe.damp(Kt.mesh.rotation.y,Kt.item.rotated?Math.PI/2:0,12,t)),No+=t;No>=1/60;){const s=jx(.016666666666666666);Ux(Xt,1/60,{truck:Ht,back:ve,speed:Oe,yawRate:s.yawRate,acceleration:s.acceleration,rearOpen:ji>.9,enclosed:!!Ht.userData.enclosed,gear:rt.levels.gear,now:$e,damage:(a,o)=>{$e-Da>.4&&(pc(a.item.condition<=0?Math.max(12,o):Math.max(1,Math.ceil(o/2)),a.item.condition<=0?`${a.item.name} destroyed`:`${a.item.name} damaged`),Yn(150),Da=$e)}}),No-=1/60}if(ev(t),Fx(t),kx(t),nv(t),Vn.visible){const s=un(new A(3,0,(ve-2.2)/2)),a=Math.abs(s.x-Vn.position.x)<2.6&&Math.abs(s.z-Vn.position.z)<3.65&&Math.abs(Oe)<.55,o=(Math.sin($e*3.4)+1)/2,c=a?6808973:16768099;Ll.color.setHex(c),Il.color.setHex(a?10682304:16772495),Ra.color.setHex(c),Ll.opacity=.25+o*.24,Il.opacity=.72+o*.28,Ra.intensity=.55+o*.75}const i=Me?un(new A(3,.6,(ve-2)/2)):st.position.clone().add(new A(0,.6,0)),r=i.clone().sub(ln.target);if(ln.target.copy(i),Ee.position.add(r),Di.position.copy(i).add(new A(-25,45,20)),Di.target.position.copy(i),ln.update(),Fn.visible=!!Kt&&mc(),Fn.visible){const s=_c(Kt),a=gc();Fn.scale.set(s?.48:a.w*Ut,1,s?.55:a.d*Ut),Fn.position.copy(un(s??new A(1.4+(a.x+a.w/2)*Ut,.82,.2+(a.z+a.d/2)*Ut))),Fn.rotation.y=Ht.rotation.y,Fn.material.color.set(s||a.valid?2386770:11089461),uc.material.color.set(s||a.valid?1195825:7282464)}if(In){const s=Ua();In.visible=!!s&&!s.removing,s&&!s.removing&&(In.position.z=.2+s.row*Ut,In.material.color.setHex(s.valid?3045727:11089461))}Pa-=t,Pa<=0&&xt("#status-bar").classList.remove("show-notice"),Uo+=t,Io+=t,Uo>.18&&(rd(),Uo=0),Io>5&&(hn(),Io=0),pi.render(Pe,Ee),requestAnimationFrame(od)}requestAnimationFrame(od);window.addEventListener("pagehide",hn);
