(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const Ol="186",Dr={ROTATE:0,DOLLY:1,PAN:2},Cr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cd=0,Lc=1,ud=2,oa=1,Ku=2,is=3,ji=0,fn=1,xn=2,Si=0,as=1,Ic=2,Uc=3,Nc=4,hd=5,Rr=100,dd=101,fd=102,pd=103,md=104,gd=200,_d=201,xd=202,vd=203,Zu=204,Ju=205,Md=206,Sd=207,yd=208,bd=209,Ed=210,Td=211,wd=212,Ad=213,Rd=214,zo=0,ko=1,Go=2,cs=3,Ho=4,Vo=5,Wo=6,Xo=7,Qu=0,Cd=1,Pd=2,ei=0,ju=1,th=2,eh=3,Bl=4,nh=5,ih=6,rh=7,sh=300,tr=301,Or=302,Ja=303,Qa=304,Fa=306,Yo=1e3,Mi=1001,qo=1002,Ke=1003,Dd=1004,Rs=1005,tn=1006,ja=1007,Zi=1008,vn=1009,ah=1010,oh=1011,us=1012,zl=1013,si=1014,jn=1015,ai=1016,kl=1017,Gl=1018,hs=1020,lh=35902,ch=35899,uh=1021,hh=1022,Gn=1023,Ei=1026,Ji=1027,dh=1028,Hl=1029,er=1030,Vl=1031,Wl=1033,la=33776,ca=33777,ua=33778,ha=33779,$o=35840,Ko=35841,Zo=35842,Jo=35843,Qo=36196,jo=37492,tl=37496,el=37488,nl=37489,xa=37490,il=37491,rl=37808,sl=37809,al=37810,ol=37811,ll=37812,cl=37813,ul=37814,hl=37815,dl=37816,fl=37817,pl=37818,ml=37819,gl=37820,_l=37821,xl=36492,vl=36494,Ml=36495,Sl=36283,yl=36284,va=36285,bl=36286,Ld=3200,El=0,Id=1,Oi="",on="srgb",Ma="srgb-linear",Sa="linear",le="srgb",to=7680,Ud=519,Nd=512,Fd=513,Od=514,Xl=515,Bd=516,zd=517,Yl=518,kd=519,fh=35044,Fc="300 es",ti=2e3,ds=2001;function Gd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ya(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Hd(){const n=ya("canvas");return n.style.display="block",n}const Oc={};function ba(...n){const t="THREE."+n.shift();console.log(t,...n)}function ph(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function It(...n){n=ph(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Qt(...n){n=ph(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Lr(...n){const t=n.join(" ");t in Oc||(Oc[t]=!0,It(...n))}function Vd(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const Wd={[zo]:ko,[Go]:Wo,[Ho]:Xo,[cs]:Vo,[ko]:zo,[Wo]:Go,[Xo]:Ho,[Vo]:cs};class Gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bc=1234567;const Ir=Math.PI/180,fs=180/Math.PI;function yi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]).toLowerCase()}function Gt(n,t,e){return Math.max(t,Math.min(e,n))}function ql(n,t){return(n%t+t)%t}function Xd(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function Yd(n,t,e){return n!==t?(e-n)/(t-n):0}function os(n,t,e){return(1-e)*n+e*t}function qd(n,t,e,i){return os(n,t,1-Math.exp(-e*i))}function $d(n,t=1){return t-Math.abs(ql(n,t*2)-t)}function Kd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Zd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Jd(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Qd(n,t){return n+Math.random()*(t-n)}function jd(n){return n*(.5-Math.random())}function tf(n){n!==void 0&&(Bc=n);let t=Bc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ef(n){return n*Ir}function nf(n){return n*fs}function rf(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function sf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function af(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function of(n,t,e,i,r){const s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+i)/2),h=a((t+i)/2),d=s((t-i)/2),u=a((t-i)/2),p=s((i-t)/2),M=a((i-t)/2);switch(r){case"XYX":n.set(o*h,c*d,c*u,o*l);break;case"YZY":n.set(c*u,o*h,c*d,o*l);break;case"ZXZ":n.set(c*d,c*u,o*h,o*l);break;case"XZX":n.set(o*h,c*M,c*p,o*l);break;case"YXY":n.set(c*p,o*h,c*M,o*l);break;case"ZYZ":n.set(c*M,c*p,o*h,o*l);break;default:It("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function zn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ce(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Pe={DEG2RAD:Ir,RAD2DEG:fs,generateUUID:yi,clamp:Gt,euclideanModulo:ql,mapLinear:Xd,inverseLerp:Yd,lerp:os,damp:qd,pingpong:$d,smoothstep:Kd,smootherstep:Zd,randInt:Jd,randFloat:Qd,randFloatSpread:jd,seededRandom:tf,degToRad:ef,radToDeg:nf,isPowerOfTwo:rf,ceilPowerOfTwo:sf,floorPowerOfTwo:af,setQuaternionFromProperEuler:of,normalize:ce,denormalize:zn},_c=class _c{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Gt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Gt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_c.prototype.isVector2=!0;let Pt=_c;class oi{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],d=i[r+3],u=s[a+0],p=s[a+1],M=s[a+2],S=s[a+3];if(d!==S||c!==u||l!==p||h!==M){let m=c*u+l*p+h*M+d*S;m<0&&(u=-u,p=-p,M=-M,S=-S,m=-m);let f=1-o;if(m<.9995){const b=Math.acos(m),C=Math.sin(b);f=Math.sin(f*b)/C,o=Math.sin(o*b)/C,c=c*f+u*o,l=l*f+p*o,h=h*f+M*o,d=d*f+S*o}else{c=c*f+u*o,l=l*f+p*o,h=h*f+M*o,d=d*f+S*o;const b=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=b,l*=b,h*=b,d*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],d=s[a],u=s[a+1],p=s[a+2],M=s[a+3];return t[e]=o*M+h*d+c*p-l*u,t[e+1]=c*M+h*u+l*d-o*p,t[e+2]=l*M+h*p+o*u-c*d,t[e+3]=h*M-o*d-c*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),d=o(s/2),u=c(i/2),p=c(r/2),M=c(s/2);switch(a){case"XYZ":this._x=u*h*d+l*p*M,this._y=l*p*d-u*h*M,this._z=l*h*M+u*p*d,this._w=l*h*d-u*p*M;break;case"YXZ":this._x=u*h*d+l*p*M,this._y=l*p*d-u*h*M,this._z=l*h*M-u*p*d,this._w=l*h*d+u*p*M;break;case"ZXY":this._x=u*h*d-l*p*M,this._y=l*p*d+u*h*M,this._z=l*h*M+u*p*d,this._w=l*h*d-u*p*M;break;case"ZYX":this._x=u*h*d-l*p*M,this._y=l*p*d+u*h*M,this._z=l*h*M-u*p*d,this._w=l*h*d+u*p*M;break;case"YZX":this._x=u*h*d+l*p*M,this._y=l*p*d+u*h*M,this._z=l*h*M-u*p*d,this._w=l*h*d-u*p*M;break;case"XZY":this._x=u*h*d-l*p*M,this._y=l*p*d-u*h*M,this._z=l*h*M+u*p*d,this._w=l*h*d+u*p*M;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+i*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const xc=class xc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*i),h=2*(o*e-s*r),d=2*(s*i-a*e);return this.x=e+c*l+a*d-o*h,this.y=i+c*h+o*l-s*d,this.z=r+c*d+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Gt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return eo.copy(this).projectOnVector(t),this.sub(eo)}reflect(t){return this.sub(eo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Gt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xc.prototype.isVector3=!0;let A=xc;const eo=new A,zc=new oi,vc=class vc{constructor(t,e,i,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l)}set(t,e,i,r,s,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],p=i[5],M=i[8],S=r[0],m=r[3],f=r[6],b=r[1],C=r[4],E=r[7],_=r[2],v=r[5],w=r[8];return s[0]=a*S+o*b+c*_,s[3]=a*m+o*C+c*v,s[6]=a*f+o*E+c*w,s[1]=l*S+h*b+d*_,s[4]=l*m+h*C+d*v,s[7]=l*f+h*E+d*w,s[2]=u*S+p*b+M*_,s[5]=u*m+p*C+M*v,s[8]=u*f+p*E+M*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*s,p=l*s-a*c,M=e*d+i*u+r*p;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/M;return t[0]=d*S,t[1]=(r*l-h*i)*S,t[2]=(o*i-r*a)*S,t[3]=u*S,t[4]=(h*e-r*c)*S,t[5]=(r*s-o*e)*S,t[6]=p*S,t[7]=(i*c-l*e)*S,t[8]=(a*e-i*s)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Lr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(no.makeScale(t,e)),this}rotate(t){return Lr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(no.makeRotation(-t)),this}translate(t,e){return Lr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(no.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};vc.prototype.isMatrix3=!0;let Nt=vc;const no=new Nt,kc=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gc=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lf(){const n={enabled:!0,workingColorSpace:Ma,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===le&&(r.r=bi(r.r),r.g=bi(r.g),r.b=bi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===le&&(r.r=Ur(r.r),r.g=Ur(r.g),r.b=Ur(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Oi?Sa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Lr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Lr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ma]:{primaries:t,whitePoint:i,transfer:Sa,toXYZ:kc,fromXYZ:Gc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:t,whitePoint:i,transfer:le,toXYZ:kc,fromXYZ:Gc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),n}const qt=lf();function bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ur(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let cr;class cf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{cr===void 0&&(cr=ya("canvas")),cr.width=t.width,cr.height=t.height;const r=cr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=cr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ya("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=bi(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(bi(e[i]/255)*255):e[i]=bi(e[i]);return{data:e,width:t.width,height:t.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uf=0;class $l{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=yi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(io(r[a].image)):s.push(io(r[a]))}else s=io(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function io(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?cf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(It("Texture: Unable to serialize Texture."),{})}let hf=0;const ro=new A;class en extends Gi{constructor(t=en.DEFAULT_IMAGE,e=en.DEFAULT_MAPPING,i=Mi,r=Mi,s=tn,a=Zi,o=Gn,c=vn,l=en.DEFAULT_ANISOTROPY,h=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=yi(),this.name="",this.source=new $l(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ro).x}get height(){return this.source.getSize(ro).y}get depth(){return this.source.getSize(ro).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){It(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){It(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yo:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case qo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yo:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case qo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=sh;en.DEFAULT_ANISOTROPY=1;const Mc=class Mc{constructor(t=0,e=0,i=0,r=1){this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],M=c[9],S=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-S)<.01&&Math.abs(M-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+S)<.1&&Math.abs(M+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const C=(l+1)/2,E=(p+1)/2,_=(f+1)/2,v=(h+u)/4,w=(d+S)/4,g=(M+m)/4;return C>E&&C>_?C<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(C),r=v/i,s=w/i):E>_?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=v/r,s=g/r):_<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(_),i=w/s,r=g/s),this.set(i,r,s,e),this}let b=Math.sqrt((m-M)*(m-M)+(d-S)*(d-S)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-M)/b,this.y=(d-S)/b,this.z=(u-h)/b,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Gt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Mc.prototype.isVector4=!0;let Re=Mc;class df extends Gi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:i.depth},s=new en(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new $l(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends df{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class mh extends en{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ff extends en{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Na=class Na{constructor(t,e,i,r,s,a,o,c,l,h,d,u,p,M,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l,h,d,u,p,M,S,m)}set(t,e,i,r,s,a,o,c,l,h,d,u,p,M,S,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=M,f[11]=S,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Na().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,r=1/ur.setFromMatrixColumn(t,0).length(),s=1/ur.setFromMatrixColumn(t,1).length(),a=1/ur.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=a*h,p=a*d,M=o*h,S=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+M*l,e[5]=u-S*l,e[9]=-o*c,e[2]=S-u*l,e[6]=M+p*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,p=c*d,M=l*h,S=l*d;e[0]=u+S*o,e[4]=M*o-p,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-M,e[6]=S+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,p=c*d,M=l*h,S=l*d;e[0]=u-S*o,e[4]=-a*d,e[8]=M+p*o,e[1]=p+M*o,e[5]=a*h,e[9]=S-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,p=a*d,M=o*h,S=o*d;e[0]=c*h,e[4]=M*l-p,e[8]=u*l+S,e[1]=c*d,e[5]=S*l+u,e[9]=p*l-M,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,p=a*l,M=o*c,S=o*l;e[0]=c*h,e[4]=S-u*d,e[8]=M*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*d+M,e[10]=u-S*d}else if(t.order==="XZY"){const u=a*c,p=a*l,M=o*c,S=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+S,e[5]=a*h,e[9]=p*d-M,e[2]=M*d-p,e[6]=o*h,e[10]=S*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pf,t,mf)}lookAt(t,e,i){const r=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Di.crossVectors(i,mn),Di.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Di.crossVectors(i,mn)),Di.normalize(),Cs.crossVectors(mn,Di),r[0]=Di.x,r[4]=Cs.x,r[8]=mn.x,r[1]=Di.y,r[5]=Cs.y,r[9]=mn.y,r[2]=Di.z,r[6]=Cs.z,r[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],p=i[13],M=i[2],S=i[6],m=i[10],f=i[14],b=i[3],C=i[7],E=i[11],_=i[15],v=r[0],w=r[4],g=r[8],T=r[12],P=r[1],L=r[5],O=r[9],B=r[13],N=r[2],k=r[6],q=r[10],X=r[14],et=r[3],Y=r[7],Q=r[11],it=r[15];return s[0]=a*v+o*P+c*N+l*et,s[4]=a*w+o*L+c*k+l*Y,s[8]=a*g+o*O+c*q+l*Q,s[12]=a*T+o*B+c*X+l*it,s[1]=h*v+d*P+u*N+p*et,s[5]=h*w+d*L+u*k+p*Y,s[9]=h*g+d*O+u*q+p*Q,s[13]=h*T+d*B+u*X+p*it,s[2]=M*v+S*P+m*N+f*et,s[6]=M*w+S*L+m*k+f*Y,s[10]=M*g+S*O+m*q+f*Q,s[14]=M*T+S*B+m*X+f*it,s[3]=b*v+C*P+E*N+_*et,s[7]=b*w+C*L+E*k+_*Y,s[11]=b*g+C*O+E*q+_*Q,s[15]=b*T+C*B+E*X+_*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],p=t[14],M=t[3],S=t[7],m=t[11],f=t[15],b=c*p-l*u,C=o*p-l*d,E=o*u-c*d,_=a*p-l*h,v=a*u-c*h,w=a*d-o*h;return e*(S*b-m*C+f*E)-i*(M*b-m*_+f*v)+r*(M*C-S*_+f*w)-s*(M*E-S*v+m*w)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-i*(s*h-o*c)+r*(s*l-a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],p=t[11],M=t[12],S=t[13],m=t[14],f=t[15],b=e*o-i*a,C=e*c-r*a,E=e*l-s*a,_=i*c-r*o,v=i*l-s*o,w=r*l-s*c,g=h*S-d*M,T=h*m-u*M,P=h*f-p*M,L=d*m-u*S,O=d*f-p*S,B=u*f-p*m,N=b*B-C*O+E*L+_*P-v*T+w*g;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/N;return t[0]=(o*B-c*O+l*L)*k,t[1]=(r*O-i*B-s*L)*k,t[2]=(S*w-m*v+f*_)*k,t[3]=(u*v-d*w-p*_)*k,t[4]=(c*P-a*B-l*T)*k,t[5]=(e*B-r*P+s*T)*k,t[6]=(m*E-M*w-f*C)*k,t[7]=(h*w-u*E+p*C)*k,t[8]=(a*O-o*P+l*g)*k,t[9]=(i*P-e*O-s*g)*k,t[10]=(M*v-S*E+f*b)*k,t[11]=(d*E-h*v-p*b)*k,t[12]=(o*T-a*L-c*g)*k,t[13]=(e*L-i*T+r*g)*k,t[14]=(S*C-M*_-m*b)*k,t[15]=(h*_-d*C+u*b)*k,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,d=o+o,u=s*l,p=s*h,M=s*d,S=a*h,m=a*d,f=o*d,b=c*l,C=c*h,E=c*d,_=i.x,v=i.y,w=i.z;return r[0]=(1-(S+f))*_,r[1]=(p+E)*_,r[2]=(M-C)*_,r[3]=0,r[4]=(p-E)*v,r[5]=(1-(u+f))*v,r[6]=(m+b)*v,r[7]=0,r[8]=(M+C)*w,r[9]=(m-b)*w,r[10]=(1-(u+S))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let a=ur.set(r[0],r[1],r[2]).length();const o=ur.set(r[4],r[5],r[6]).length(),c=ur.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Ln.copy(this);const l=1/a,h=1/o,d=1/c;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=d,Ln.elements[9]*=d,Ln.elements[10]*=d,e.setFromRotationMatrix(Ln),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,r,s,a,o=ti,c=!1){const l=this.elements,h=2*s/(e-t),d=2*s/(i-r),u=(e+t)/(e-t),p=(i+r)/(i-r);let M,S;if(c)M=s/(a-s),S=a*s/(a-s);else if(o===ti)M=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===ds)M=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=M,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=ti,c=!1){const l=this.elements,h=2/(e-t),d=2/(i-r),u=-(e+t)/(e-t),p=-(i+r)/(i-r);let M,S;if(c)M=1/(a-s),S=a/(a-s);else if(o===ti)M=-2/(a-s),S=-(a+s)/(a-s);else if(o===ds)M=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=M,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Na.prototype.isMatrix4=!0;let Te=Na;const ur=new A,Ln=new Te,pf=new A(0,0,0),mf=new A(1,1,1),Di=new A,Cs=new A,mn=new A,Hc=new Te,Vc=new oi;class li{constructor(t=0,e=0,i=0,r=li.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],d=r[2],u=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Hc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vc.setFromEuler(this),this.setFromQuaternion(Vc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class gh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gf=0;const Wc=new A,hr=new oi,di=new Te,Ps=new A,Yr=new A,_f=new A,xf=new oi,Xc=new A(1,0,0),Yc=new A(0,1,0),qc=new A(0,0,1),$c={type:"added"},vf={type:"removed"},dr={type:"childadded",child:null},so={type:"childremoved",child:null};class He extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new A,e=new li,i=new oi,r=new A(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Te},normalMatrix:{value:new Nt}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hr.setFromAxisAngle(t,e),this.quaternion.multiply(hr),this}rotateOnWorldAxis(t,e){return hr.setFromAxisAngle(t,e),this.quaternion.premultiply(hr),this}rotateX(t){return this.rotateOnAxis(Xc,t)}rotateY(t){return this.rotateOnAxis(Yc,t)}rotateZ(t){return this.rotateOnAxis(qc,t)}translateOnAxis(t,e){return Wc.copy(t).applyQuaternion(this.quaternion),this.position.add(Wc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xc,t)}translateY(t){return this.translateOnAxis(Yc,t)}translateZ(t){return this.translateOnAxis(qc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ps.copy(t):Ps.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Yr,Ps,this.up):di.lookAt(Ps,Yr,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),hr.setFromRotationMatrix(di),this.quaternion.premultiply(hr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($c),dr.child=t,this.dispatchEvent(dr),dr.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vf),so.child=t,this.dispatchEvent(so),so.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),di.multiply(t.parent.matrixWorld)),t.applyMatrix4(di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($c),dr.child=t,this.dispatchEvent(dr),dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,t,_f),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,xf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*r,s[13]+=i-s[1]*e-s[5]*i-s[9]*r,s[14]+=r-s[2]*e-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),M=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),M.length>0&&(i.nodes=M)}return i.object=r,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}He.DEFAULT_UP=new A(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ee extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mf={type:"move"};class ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const S of t.hand.values()){const m=e.getJointPose(S,i),f=this._getHandJoint(l,S);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,M=.005;l.inputState.pinching&&u>p+M?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-M&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mf)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ee;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const _h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function oo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ht{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,qt.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=qt.workingColorSpace){if(t=ql(t,1),e=Gt(e,0,1),i=Gt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=oo(a,s,t+1/3),this.g=oo(a,s,t),this.b=oo(a,s,t-1/3)}return qt.colorSpaceToWorking(this,r),this}setStyle(t,e=on){function i(s){s!==void 0&&parseFloat(s)<1&&It("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:It("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);It("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){const i=_h[t.toLowerCase()];return i!==void 0?this.setHex(i,e):It("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=Ur(t.r),this.g=Ur(t.g),this.b=Ur(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return qt.workingToColorSpace(je.copy(this),t),Math.round(Gt(je.r*255,0,255))*65536+Math.round(Gt(je.g*255,0,255))*256+Math.round(Gt(je.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(je.copy(this),e);const i=je.r,r=je.g,s=je.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=on){qt.workingToColorSpace(je.copy(this),t);const e=je.r,i=je.g,r=je.b;return t!==on?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Li),this.setHSL(Li.h+t,Li.s+e,Li.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Li),t.getHSL(Ds);const i=os(Li.h,Ds.h,e),r=os(Li.s,Ds.s,e),s=os(Li.l,Ds.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new Ht;Ht.NAMES=_h;class Kl{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=i}clone(){return new Kl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Sf extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const In=new A,fi=new A,lo=new A,pi=new A,fr=new A,pr=new A,Kc=new A,co=new A,uo=new A,ho=new A,fo=new Re,po=new Re,mo=new Re;class Mn{constructor(t=new A,e=new A,i=new A){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),In.subVectors(t,e),r.cross(In);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){In.subVectors(r,e),fi.subVectors(i,e),lo.subVectors(t,e);const a=In.dot(In),o=In.dot(fi),c=In.dot(lo),l=fi.dot(fi),h=fi.dot(lo),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(l*c-o*h)*u,M=(a*h-o*c)*u;return s.set(1-p-M,M,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(t,e,i,r,s,a,o,c){return this.getBarycoord(t,e,i,r,pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,pi.x),c.addScaledVector(a,pi.y),c.addScaledVector(o,pi.z),c)}static getInterpolatedAttribute(t,e,i,r,s,a){return fo.setScalar(0),po.setScalar(0),mo.setScalar(0),fo.fromBufferAttribute(t,e),po.fromBufferAttribute(t,i),mo.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(fo,s.x),a.addScaledVector(po,s.y),a.addScaledVector(mo,s.z),a}static isFrontFacing(t,e,i,r){return In.subVectors(i,e),fi.subVectors(t,e),In.cross(fi).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),In.cross(fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Mn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;fr.subVectors(r,i),pr.subVectors(s,i),co.subVectors(t,i);const c=fr.dot(co),l=pr.dot(co);if(c<=0&&l<=0)return e.copy(i);uo.subVectors(t,r);const h=fr.dot(uo),d=pr.dot(uo);if(h>=0&&d<=h)return e.copy(r);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(i).addScaledVector(fr,a);ho.subVectors(t,s);const p=fr.dot(ho),M=pr.dot(ho);if(M>=0&&p<=M)return e.copy(s);const S=p*l-c*M;if(S<=0&&l>=0&&M<=0)return o=l/(l-M),e.copy(i).addScaledVector(pr,o);const m=h*M-p*d;if(m<=0&&d-h>=0&&p-M>=0)return Kc.subVectors(s,r),o=(d-h)/(d-h+(p-M)),e.copy(r).addScaledVector(Kc,o);const f=1/(m+S+u);return a=S*f,o=u*f,e.copy(i).addScaledVector(fr,a).addScaledVector(pr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ys{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Un):Un.fromBufferAttribute(s,a),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ls.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ls.copy(i.boundingBox)),Ls.applyMatrix4(t.matrixWorld),this.union(Ls)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qr),Is.subVectors(this.max,qr),mr.subVectors(t.a,qr),gr.subVectors(t.b,qr),_r.subVectors(t.c,qr),Ii.subVectors(gr,mr),Ui.subVectors(_r,gr),Wi.subVectors(mr,_r);let e=[0,-Ii.z,Ii.y,0,-Ui.z,Ui.y,0,-Wi.z,Wi.y,Ii.z,0,-Ii.x,Ui.z,0,-Ui.x,Wi.z,0,-Wi.x,-Ii.y,Ii.x,0,-Ui.y,Ui.x,0,-Wi.y,Wi.x,0];return!go(e,mr,gr,_r,Is)||(e=[1,0,0,0,1,0,0,0,1],!go(e,mr,gr,_r,Is))?!1:(Us.crossVectors(Ii,Ui),e=[Us.x,Us.y,Us.z],go(e,mr,gr,_r,Is))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const mi=[new A,new A,new A,new A,new A,new A,new A,new A],Un=new A,Ls=new ys,mr=new A,gr=new A,_r=new A,Ii=new A,Ui=new A,Wi=new A,qr=new A,Is=new A,Us=new A,Xi=new A;function go(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Xi.fromArray(n,s);const o=r.x*Math.abs(Xi.x)+r.y*Math.abs(Xi.y)+r.z*Math.abs(Xi.z),c=t.dot(Xi),l=e.dot(Xi),h=i.dot(Xi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Oe=new A,Ns=new Pt;let yf=0;class Vn extends Gi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=fh,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ns.fromBufferAttribute(this,e),Ns.applyMatrix3(t),this.setXY(e,Ns.x,Ns.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=zn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ce(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),r=ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),r=ce(r,this.array),s=ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class xh extends Vn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class vh extends Vn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ae extends Vn{constructor(t,e,i){super(new Float32Array(t),e,i)}}const bf=new ys,$r=new A,_o=new A;class Oa{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):bf.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$r.subVectors(t,this.center);const e=$r.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector($r,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_o.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($r.copy(t.center).add(_o)),this.expandByPoint($r.copy(t.center).sub(_o))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Ef=0;const bn=new Te,xo=new He,xr=new A,gn=new ys,Kr=new ys,qe=new A;class Ue extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gd(t)?vh:xh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Nt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,i){return bn.makeTranslation(t,e,i),this.applyMatrix4(bn),this}scale(t,e,i){return bn.makeScale(t,e,i),this.applyMatrix4(bn),this}lookAt(t){return xo.lookAt(t),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ae(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ys);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Kr.setFromBufferAttribute(o),this.morphTargetsRelative?(qe.addVectors(gn.min,Kr.min),gn.expandByPoint(qe),qe.addVectors(gn.max,Kr.max),gn.expandByPoint(qe)):(gn.expandByPoint(Kr.min),gn.expandByPoint(Kr.max))}gn.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)qe.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(qe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)qe.fromBufferAttribute(o,l),c&&(xr.fromBufferAttribute(t,l),qe.add(xr)),r=Math.max(r,i.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Vn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let g=0;g<i.count;g++)o[g]=new A,c[g]=new A;const l=new A,h=new A,d=new A,u=new Pt,p=new Pt,M=new Pt,S=new A,m=new A;function f(g,T,P){l.fromBufferAttribute(i,g),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,P),u.fromBufferAttribute(s,g),p.fromBufferAttribute(s,T),M.fromBufferAttribute(s,P),h.sub(l),d.sub(l),p.sub(u),M.sub(u);const L=1/(p.x*M.y-M.x*p.y);isFinite(L)&&(S.copy(h).multiplyScalar(M.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-M.x).multiplyScalar(L),o[g].add(S),o[T].add(S),o[P].add(S),c[g].add(m),c[T].add(m),c[P].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let g=0,T=b.length;g<T;++g){const P=b[g],L=P.start,O=P.count;for(let B=L,N=L+O;B<N;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const C=new A,E=new A,_=new A,v=new A;function w(g){_.fromBufferAttribute(r,g),v.copy(_);const T=o[g];C.copy(T),C.sub(_.multiplyScalar(_.dot(T))).normalize(),E.crossVectors(v,T);const L=E.dot(c[g])<0?-1:1;a.setXYZW(g,C.x,C.y,C.z,L)}for(let g=0,T=b.length;g<T;++g){const P=b[g],L=P.start,O=P.count;for(let B=L,N=L+O;B<N;B+=3)w(t.getX(B+0)),w(t.getX(B+1)),w(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Vn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new A,s=new A,a=new A,o=new A,c=new A,l=new A,h=new A,d=new A;if(t)for(let u=0,p=t.count;u<p;u+=3){const M=t.getX(u+0),S=t.getX(u+1),m=t.getX(u+2);r.fromBufferAttribute(e,M),s.fromBufferAttribute(e,S),a.fromBufferAttribute(e,m),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(i,M),c.fromBufferAttribute(i,S),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(M,o.x,o.y,o.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)r.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let p=0,M=0;for(let S=0,m=c.length;S<m;S++){o.isInterleavedBufferAttribute?p=c[S]*o.data.stride+o.offset:p=c[S]*h;for(let f=0;f<h;f++)u[M++]=l[p++]}return new Vn(u,h,d)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ue,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,i);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],p=t(u,i);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fh,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const sn=new A;class Ea{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=zn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ce(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=zn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=zn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=zn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=zn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),r=ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),r=ce(r,this.array),s=ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){ba("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Vn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ea(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ba("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const vo=new A,wf=new A,Af=new Nt;class xi{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=vo.subVectors(i,e).cross(wf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const r=t.delta(vo),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(r,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Af.getNormalMatrix(t),r=this.coplanarPoint(vo).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Rf=0;class rr extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=as,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zu,this.blendDst=Ju,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=to,this.stencilZFail=to,this.stencilZPass=to,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){It(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){It(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new xi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Pt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Cf extends rr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let vr;const Zr=new A,Mr=new A,Sr=new A,yr=new Pt,Jr=new Pt,Mh=new Te,Fs=new A,Qr=new A,Os=new A,Zc=new Pt,Mo=new Pt,Jc=new Pt;class Pf extends He{constructor(t=new Cf){if(super(),this.isSprite=!0,this.type="Sprite",vr===void 0){vr=new Ue;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Tf(e,5);vr.setIndex([0,1,2,0,2,3]),vr.setAttribute("position",new Ea(i,3,0,!1)),vr.setAttribute("uv",new Ea(i,2,3,!1))}this.geometry=vr,this.material=t,this.center=new Pt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Mr.setFromMatrixScale(this.matrixWorld),Mh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Sr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Mr.multiplyScalar(-Sr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Bs(Fs.set(-.5,-.5,0),Sr,a,Mr,r,s),Bs(Qr.set(.5,-.5,0),Sr,a,Mr,r,s),Bs(Os.set(.5,.5,0),Sr,a,Mr,r,s),Zc.set(0,0),Mo.set(1,0),Jc.set(1,1);let o=t.ray.intersectTriangle(Fs,Qr,Os,!1,Zr);if(o===null&&(Bs(Qr.set(-.5,.5,0),Sr,a,Mr,r,s),Mo.set(0,1),o=t.ray.intersectTriangle(Fs,Os,Qr,!1,Zr),o===null))return;const c=t.ray.origin.distanceTo(Zr);c<t.near||c>t.far||e.push({distance:c,point:Zr.clone(),uv:Mn.getInterpolation(Zr,Fs,Qr,Os,Zc,Mo,Jc,new Pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Bs(n,t,e,i,r,s){yr.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(Jr.x=s*yr.x-r*yr.y,Jr.y=r*yr.x+s*yr.y):Jr.copy(yr),n.copy(t),n.x+=Jr.x,n.y+=Jr.y,n.applyMatrix4(Mh)}const gi=new A,So=new A,zs=new A,ks=new A;class Zl{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gi.copy(this.origin).addScaledVector(this.direction,e),gi.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){So.copy(t).add(e).multiplyScalar(.5),zs.copy(e).sub(t).normalize(),ks.copy(this.origin).sub(So);const s=t.distanceTo(e)*.5,a=-this.direction.dot(zs),o=ks.dot(this.direction),c=-ks.dot(zs),l=ks.lengthSq(),h=Math.abs(1-a*a);let d,u,p,M;if(h>0)if(d=a*c-o,u=a*o-c,M=s*h,d>=0)if(u>=-M)if(u<=M){const S=1/h;d*=S,u*=S,p=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u<=-M?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l):u<=M?(d=0,u=Math.min(Math.max(-s,-c),s),p=u*(u+2*c)+l):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(So).addScaledVector(zs,u),p}intersectSphere(t,e){if(t.radius<0)return null;gi.subVectors(t.center,this.origin);const i=gi.dot(this.direction),r=gi.dot(gi)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,r=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,r=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,gi)!==null}intersectTriangle(t,e,i,r,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,p=t.z-a.z,M=e.x-a.x,S=e.y-a.y,m=e.z-a.z,f=i.x-a.x,b=i.y-a.y,C=i.z-a.z,E=Math.abs(c),_=Math.abs(l),v=Math.abs(h);let w,g,T,P,L,O,B,N,k,q,X,et;if(E>=_&&E>=v?(T=c,O=d,k=M,et=f,c>=0?(w=l,g=h,P=u,L=p,B=S,N=m,q=b,X=C):(w=h,g=l,P=p,L=u,B=m,N=S,q=C,X=b)):_>=v?(T=l,O=u,k=S,et=b,l>=0?(w=h,g=c,P=p,L=d,B=m,N=M,q=C,X=f):(w=c,g=h,P=d,L=p,B=M,N=m,q=f,X=C)):(T=h,O=p,k=m,et=C,h>=0?(w=c,g=l,P=d,L=u,B=M,N=S,q=f,X=b):(w=l,g=c,P=u,L=d,B=S,N=M,q=b,X=f)),T===0)return null;const Y=w/T,Q=g/T,it=1/T,lt=P-Y*O,yt=L-Q*O,pe=B-Y*k,Kt=N-Q*k,te=q-Y*et,K=X-Q*et,nt=te*Kt-K*pe,bt=lt*K-yt*te,Ut=pe*yt-Kt*lt;if(r){if(nt<0||bt<0||Ut<0)return null}else if((nt<0||bt<0||Ut<0)&&(nt>0||bt>0||Ut>0))return null;const Mt=nt+bt+Ut;if(Mt===0)return null;const kt=it*(nt*O+bt*k+Ut*et);return(Mt>0?kt<0:kt>0)?null:this.at(kt/Mt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ui extends rr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Qc=new Te,Yi=new Zl,Gs=new Oa,jc=new A,Hs=new A,Vs=new A,Ws=new A,yo=new A,Xs=new A,tu=new A,Ys=new A;class Ot extends He{constructor(t=new Ue,e=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Xs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],d=s[c];h!==0&&(yo.fromBufferAttribute(d,t),a?Xs.addScaledVector(yo,h):Xs.addScaledVector(yo.sub(e),h))}e.add(Xs)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gs.copy(i.boundingSphere),Gs.applyMatrix4(s),Yi.copy(t.ray).recast(t.near),!(Gs.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(Gs,jc)===null||Yi.origin.distanceToSquared(jc)>(t.far-t.near)**2))&&(Qc.copy(s).invert(),Yi.copy(t.ray).applyMatrix4(Qc),!(i.boundingBox!==null&&Yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Yi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let M=0,S=u.length;M<S;M++){const m=u[M],f=a[m.materialIndex],b=Math.max(m.start,p.start),C=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=b,_=C;E<_;E+=3){const v=o.getX(E),w=o.getX(E+1),g=o.getX(E+2);r=qs(this,f,t,i,l,h,d,v,w,g),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const M=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=M,f=S;m<f;m+=3){const b=o.getX(m),C=o.getX(m+1),E=o.getX(m+2);r=qs(this,a,t,i,l,h,d,b,C,E),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let M=0,S=u.length;M<S;M++){const m=u[M],f=a[m.materialIndex],b=Math.max(m.start,p.start),C=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=b,_=C;E<_;E+=3){const v=E,w=E+1,g=E+2;r=qs(this,f,t,i,l,h,d,v,w,g),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const M=Math.max(0,p.start),S=Math.min(c.count,p.start+p.count);for(let m=M,f=S;m<f;m+=3){const b=m,C=m+1,E=m+2;r=qs(this,a,t,i,l,h,d,b,C,E),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Df(n,t,e,i,r,s,a,o){let c;if(t.side===fn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,t.side===ji,o),c===null)return null;Ys.copy(o),Ys.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ys);return l<e.near||l>e.far?null:{distance:l,point:Ys.clone(),object:n}}function qs(n,t,e,i,r,s,a,o,c,l){n.getVertexPosition(o,Hs),n.getVertexPosition(c,Vs),n.getVertexPosition(l,Ws);const h=Df(n,t,e,i,Hs,Vs,Ws,tu);if(h){const d=new A;Mn.getBarycoord(tu,Hs,Vs,Ws,d),r&&(h.uv=Mn.getInterpolatedAttribute(r,o,c,l,d,new Pt)),s&&(h.uv1=Mn.getInterpolatedAttribute(s,o,c,l,d,new Pt)),a&&(h.normal=Mn.getInterpolatedAttribute(a,o,c,l,d,new A),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new A,materialIndex:0};Mn.getNormal(Hs,Vs,Ws,u.normal),h.face=u,h.barycoord=d}return h}class Lf extends en{constructor(t=null,e=1,i=1,r,s,a,o,c,l=Ke,h=Ke,d,u){super(null,a,o,c,l,h,r,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qi=new Oa,If=new Pt(.5,.5),$s=new A;class Jl{constructor(t=new xi,e=new xi,i=new xi,r=new xi,s=new xi,a=new xi){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ti,i=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],d=s[5],u=s[6],p=s[7],M=s[8],S=s[9],m=s[10],f=s[11],b=s[12],C=s[13],E=s[14],_=s[15];if(r[0].setComponents(l-a,p-h,f-M,_-b).normalize(),r[1].setComponents(l+a,p+h,f+M,_+b).normalize(),r[2].setComponents(l+o,p+d,f+S,_+C).normalize(),r[3].setComponents(l-o,p-d,f-S,_-C).normalize(),i)r[4].setComponents(c,u,m,E).normalize(),r[5].setComponents(l-c,p-u,f-m,_-E).normalize();else if(r[4].setComponents(l-c,p-u,f-m,_-E).normalize(),e===ti)r[5].setComponents(l+c,p+u,f+m,_+E).normalize();else if(e===ds)r[5].setComponents(c,u,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(t){qi.center.set(0,0,0);const e=If.distanceTo(t.center);return qi.radius=.7071067811865476+e,qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if($s.x=r.normal.x>0?t.max.x:t.min.x,$s.y=r.normal.y>0?t.max.y:t.min.y,$s.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint($s)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sh extends rr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ta=new A,wa=new A,eu=new Te,jr=new Zl,Ks=new Oa,bo=new A,nu=new A;class Uf extends He{constructor(t=new Ue,e=new Sh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Ta.fromBufferAttribute(e,r-1),wa.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Ta.distanceTo(wa);t.setAttribute("lineDistance",new ae(i,1))}else It("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ks.copy(i.boundingSphere),Ks.applyMatrix4(r),Ks.radius+=s,t.ray.intersectsSphere(Ks)===!1)return;eu.copy(r).invert(),jr.copy(t.ray).applyMatrix4(eu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const p=Math.max(0,a.start),M=Math.min(h.count,a.start+a.count);for(let S=p,m=M-1;S<m;S+=l){const f=h.getX(S),b=h.getX(S+1),C=Zs(this,t,jr,c,f,b,S);C&&e.push(C)}if(this.isLineLoop){const S=h.getX(M-1),m=h.getX(p),f=Zs(this,t,jr,c,S,m,M-1);f&&e.push(f)}}else{const p=Math.max(0,a.start),M=Math.min(u.count,a.start+a.count);for(let S=p,m=M-1;S<m;S+=l){const f=Zs(this,t,jr,c,S,S+1,S);f&&e.push(f)}if(this.isLineLoop){const S=Zs(this,t,jr,c,M-1,p,M-1);S&&e.push(S)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Zs(n,t,e,i,r,s,a){const o=n.geometry.attributes.position;if(Ta.fromBufferAttribute(o,r),wa.fromBufferAttribute(o,s),e.distanceSqToSegment(Ta,wa,bo,nu)>i)return;bo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(bo);if(!(l<t.near||l>t.far))return{distance:l,point:nu.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const iu=new A,ru=new A;class Nf extends Uf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)iu.fromBufferAttribute(e,r),ru.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+iu.distanceTo(ru);t.setAttribute("lineDistance",new ae(i,1))}else It("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yh extends en{constructor(t=[],e=tr,i,r,s,a,o,c,l,h){super(t,e,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ql extends en{constructor(t,e,i,r,s,a,o,c,l){super(t,e,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ps extends en{constructor(t,e,i=si,r,s,a,o=Ke,c=Ke,l,h=Ei,d=1){if(h!==Ei&&h!==Ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $l(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Ff extends ps{constructor(t,e=si,i=tr,r,s,a=Ke,o=Ke,c,l=Ei){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,r,s,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class bh extends en{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class wi extends Ue{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,p=0;M("z","y","x",-1,-1,i,e,t,a,s,0),M("z","y","x",1,-1,i,e,-t,a,s,1),M("x","z","y",1,1,t,i,e,r,a,2),M("x","z","y",1,-1,t,i,-e,r,a,3),M("x","y","z",1,-1,t,e,i,r,s,4),M("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(d,2));function M(S,m,f,b,C,E,_,v,w,g,T){const P=E/w,L=_/g,O=E/2,B=_/2,N=v/2,k=w+1,q=g+1;let X=0,et=0;const Y=new A;for(let Q=0;Q<q;Q++){const it=Q*L-B;for(let lt=0;lt<k;lt++){const yt=lt*P-O;Y[S]=yt*b,Y[m]=it*C,Y[f]=N,l.push(Y.x,Y.y,Y.z),Y[S]=0,Y[m]=0,Y[f]=v>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(lt/w),d.push(1-Q/g),X+=1}}for(let Q=0;Q<g;Q++)for(let it=0;it<w;it++){const lt=u+it+k*Q,yt=u+it+k*(Q+1),pe=u+(it+1)+k*(Q+1),Kt=u+(it+1)+k*Q;c.push(lt,yt,Kt),c.push(yt,pe,Kt),et+=6}o.addGroup(p,et,T),p+=et,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Wn extends Ue{constructor(t=1,e=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],u=[],p=[];let M=0;const S=[],m=i/2;let f=0;b(),a===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new ae(d,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(p,2));function b(){const E=new A,_=new A;let v=0;const w=(e-t)/i;for(let g=0;g<=s;g++){const T=[],P=g/s,L=P*(e-t)+t;for(let O=0;O<=r;O++){const B=O/r,N=B*c+o,k=Math.sin(N),q=Math.cos(N);_.x=L*k,_.y=-P*i+m,_.z=L*q,d.push(_.x,_.y,_.z),E.set(k,w,q).normalize(),u.push(E.x,E.y,E.z),p.push(B,1-P),T.push(M++)}S.push(T)}for(let g=0;g<r;g++)for(let T=0;T<s;T++){const P=S[T][g],L=S[T+1][g],O=S[T+1][g+1],B=S[T][g+1];(t>0||T!==0)&&(h.push(P,L,B),v+=3),(e>0||T!==s-1)&&(h.push(L,O,B),v+=3)}l.addGroup(f,v,0),f+=v}function C(E){const _=M,v=new Pt,w=new A;let g=0;const T=E===!0?t:e,P=E===!0?1:-1;for(let O=1;O<=r;O++)d.push(0,m*P,0),u.push(0,P,0),p.push(.5,.5),M++;const L=M;for(let O=0;O<=r;O++){const N=O/r*c+o,k=Math.cos(N),q=Math.sin(N);w.x=T*q,w.y=m*P,w.z=T*k,d.push(w.x,w.y,w.z),u.push(0,P,0),v.x=k*.5+.5,v.y=q*.5*P+.5,p.push(v.x,v.y),M++}for(let O=0;O<r;O++){const B=_+O,N=L+O;E===!0?h.push(N,N+1,B):h.push(N+1,N,B),g+=3}l.addGroup(f,g,E===!0?1:2),f+=g}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class bs extends Wn{constructor(t=1,e=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new bs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class jl extends Ue{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],a=[];o(r),l(i),h(),this.setAttribute("position",new ae(s,3)),this.setAttribute("normal",new ae(s.slice(),3)),this.setAttribute("uv",new ae(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const C=new A,E=new A,_=new A;for(let v=0;v<e.length;v+=3)p(e[v+0],C),p(e[v+1],E),p(e[v+2],_),c(C,E,_,b)}function c(b,C,E,_){const v=_+1,w=[];for(let g=0;g<=v;g++){w[g]=[];const T=b.clone().lerp(E,g/v),P=C.clone().lerp(E,g/v),L=v-g;for(let O=0;O<=L;O++)O===0&&g===v?w[g][O]=T:w[g][O]=T.clone().lerp(P,O/L)}for(let g=0;g<v;g++)for(let T=0;T<2*(v-g)-1;T++){const P=Math.floor(T/2);T%2===0?(u(w[g][P+1]),u(w[g+1][P]),u(w[g][P])):(u(w[g][P+1]),u(w[g+1][P+1]),u(w[g+1][P]))}}function l(b){const C=new A;for(let E=0;E<s.length;E+=3)C.x=s[E+0],C.y=s[E+1],C.z=s[E+2],C.normalize().multiplyScalar(b),s[E+0]=C.x,s[E+1]=C.y,s[E+2]=C.z}function h(){const b=new A;for(let C=0;C<s.length;C+=3){b.x=s[C+0],b.y=s[C+1],b.z=s[C+2];const E=m(b)/2/Math.PI+.5,_=f(b)/Math.PI+.5;a.push(E,1-_)}M(),d()}function d(){for(let b=0;b<a.length;b+=6){const C=a[b+0],E=a[b+2],_=a[b+4],v=Math.max(C,E,_),w=Math.min(C,E,_);v>.9&&w<.1&&(C<.2&&(a[b+0]+=1),E<.2&&(a[b+2]+=1),_<.2&&(a[b+4]+=1))}}function u(b){s.push(b.x,b.y,b.z)}function p(b,C){const E=b*3;C.x=t[E+0],C.y=t[E+1],C.z=t[E+2]}function M(){const b=new A,C=new A,E=new A,_=new A,v=new Pt,w=new Pt,g=new Pt;for(let T=0,P=0;T<s.length;T+=9,P+=6){b.set(s[T+0],s[T+1],s[T+2]),C.set(s[T+3],s[T+4],s[T+5]),E.set(s[T+6],s[T+7],s[T+8]),v.set(a[P+0],a[P+1]),w.set(a[P+2],a[P+3]),g.set(a[P+4],a[P+5]),_.copy(b).add(C).add(E).divideScalar(3);const L=m(_);S(v,P+0,b,L),S(w,P+2,C,L),S(g,P+4,E,L)}}function S(b,C,E,_){_<0&&b.x===1&&(a[C]=b.x-1),E.x===0&&E.z===0&&(a[C]=_/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function f(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jl(t.vertices,t.indices,t.radius,t.detail)}}const Js=new A,Qs=new A,Eo=new A,js=new Mn;class Of extends Ue{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(Ir*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),u={},p=[];for(let M=0;M<c;M+=3){a?(l[0]=a.getX(M),l[1]=a.getX(M+1),l[2]=a.getX(M+2)):(l[0]=M,l[1]=M+1,l[2]=M+2);const{a:S,b:m,c:f}=js;if(S.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),f.fromBufferAttribute(o,l[2]),js.getNormal(Eo),d[0]=`${Math.round(S.x*r)},${Math.round(S.y*r)},${Math.round(S.z*r)}`,d[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,d[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let b=0;b<3;b++){const C=(b+1)%3,E=d[b],_=d[C],v=js[h[b]],w=js[h[C]],g=`${E}_${_}`,T=`${_}_${E}`;T in u&&u[T]?(Eo.dot(u[T].normal)<=s&&(p.push(v.x,v.y,v.z),p.push(w.x,w.y,w.z)),u[T]=null):g in u||(u[g]={index0:l[b],index1:l[C],normal:Eo.clone()})}}for(const M in u)if(u[M]){const{index0:S,index1:m}=u[M];Js.fromBufferAttribute(o,S),Qs.fromBufferAttribute(o,m),p.push(Js.x,Js.y,Js.z),p.push(Qs.x,Qs.y,Qs.z)}this.setAttribute("position",new ae(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class tc extends jl{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new tc(t.radius,t.detail)}}class Ai extends Ue{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,d=t/o,u=e/c,p=[],M=[],S=[],m=[];for(let f=0;f<h;f++){const b=f*u-a;for(let C=0;C<l;C++){const E=C*d-s;M.push(E,-b,0),S.push(0,0,1),m.push(C/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<o;b++){const C=b+l*f,E=b+l*(f+1),_=b+1+l*(f+1),v=b+1+l*f;p.push(C,E,v),p.push(E,_,v)}this.setIndex(p),this.setAttribute("position",new ae(M,3)),this.setAttribute("normal",new ae(S,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.width,t.height,t.widthSegments,t.heightSegments)}}class ec extends Ue{constructor(t=.5,e=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],c=[],l=[],h=[];let d=t;const u=(e-t)/r,p=new A,M=new Pt;for(let S=0;S<=r;S++){for(let m=0;m<=i;m++){const f=s+m/i*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),M.x=(p.x/e+1)/2,M.y=(p.y/e+1)/2,h.push(M.x,M.y)}d+=u}for(let S=0;S<r;S++){const m=S*(i+1);for(let f=0;f<i;f++){const b=f+m,C=b,E=b+i+1,_=b+i+2,v=b+1;o.push(C,E,v),o.push(E,_,v)}}this.setIndex(o),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ec(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class nc extends Ue{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new A,u=new A,p=[],M=[],S=[],m=[];for(let f=0;f<=i;f++){const b=[],C=f/i,E=a+C*o,_=t*Math.cos(E),v=Math.sqrt(t*t-_*_);let w=0;f===0&&a===0?w=.5/e:f===i&&c===Math.PI&&(w=-.5/e);for(let g=0;g<=e;g++){const T=g/e,P=r+T*s;d.x=-v*Math.cos(P),d.y=_,d.z=v*Math.sin(P),M.push(d.x,d.y,d.z),u.copy(d).normalize(),S.push(u.x,u.y,u.z),m.push(T+w,1-C),b.push(l++)}h.push(b)}for(let f=0;f<i;f++)for(let b=0;b<e;b++){const C=h[f][b+1],E=h[f][b],_=h[f+1][b],v=h[f+1][b+1];(f!==0||a>0)&&p.push(C,E,v),(f!==i-1||c<Math.PI)&&p.push(E,_,v)}this.setIndex(p),this.setAttribute("position",new ae(M,3)),this.setAttribute("normal",new ae(S,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Wr extends Ue{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const c=[],l=[],h=[],d=[],u=new A,p=new A,M=new A;for(let S=0;S<=i;S++){const m=a+S/i*o;for(let f=0;f<=r;f++){const b=f/r*s;p.x=(t+e*Math.cos(m))*Math.cos(b),p.y=(t+e*Math.cos(m))*Math.sin(b),p.z=e*Math.sin(m),l.push(p.x,p.y,p.z),u.x=t*Math.cos(b),u.y=t*Math.sin(b),M.subVectors(p,u).normalize(),h.push(M.x,M.y,M.z),d.push(f/r),d.push(S/i)}}for(let S=1;S<=i;S++)for(let m=1;m<=r;m++){const f=(r+1)*S+m-1,b=(r+1)*(S-1)+m-1,C=(r+1)*(S-1)+m,E=(r+1)*S+m;c.push(f,b,E),c.push(b,C,E)}this.setIndex(c),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function Br(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];if(su(r))r.isRenderTargetTexture?(It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone();else if(Array.isArray(r))if(su(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();t[e][i]=s}else t[e][i]=r.slice();else t[e][i]=r}}return t}function an(n){const t={};for(let e=0;e<n.length;e++){const i=Br(n[e]);for(const r in i)t[r]=i[r]}return t}function su(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Bf(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Eh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const zf={clone:Br,merge:an};var kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends rr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kf,this.fragmentShader=Gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Br(t.uniforms),this.uniformsGroups=Bf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const r=t.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=e[r.value]||null;break;case"c":this.uniforms[i].value=new Ht().setHex(r.value);break;case"v2":this.uniforms[i].value=new Pt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new A().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Re().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Nt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Te().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Hf extends ci{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ba extends rr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=El,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Vf extends rr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Wf extends rr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ic extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Xf extends ic{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const To=new Te,au=new A,ou=new A;class Th{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jl,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;au.setFromMatrixPosition(t.matrixWorld),e.position.copy(au),ou.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ou),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,r){To.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(To,t.coordinateSystem,t.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;t.coordinateSystem===ds||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(To)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ta=new A,ea=new oi,$n=new A;class wh extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ta,ea,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ta,ea,$n.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(ta,ea,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ta,ea,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new A,lu=new Pt,cu=new Pt;class Tn extends wh{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z)}getViewSize(t,e){return this.getViewBounds(t,lu,cu),e.subVectors(cu,lu)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ir*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Yf extends Th{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0}}class qf extends ic{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Yf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class za extends wh{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class $f extends Th{constructor(){super(new za(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kf extends ic{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new $f}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const br=-90,Er=1;class Zf extends He{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tn(br,Er,t,e);r.layers=this.layers,this.add(r);const s=new Tn(br,Er,t,e);s.layers=this.layers,this.add(s);const a=new Tn(br,Er,t,e);a.layers=this.layers,this.add(a);const o=new Tn(br,Er,t,e);o.layers=this.layers,this.add(o);const c=new Tn(br,Er,t,e);c.layers=this.layers,this.add(c);const l=new Tn(br,Er,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ds)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class Jf extends Tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class uu{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Gt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Sc=class Sc{constructor(t,e,i,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,r){const s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=r,this}};Sc.prototype.isMatrix2=!0;let hu=Sc;class Qf extends Gi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function du(n,t,e,i){const r=jf(i);switch(e){case uh:return n*t;case dh:return n*t/r.components*r.byteLength;case Hl:return n*t/r.components*r.byteLength;case er:return n*t*2/r.components*r.byteLength;case Vl:return n*t*2/r.components*r.byteLength;case hh:return n*t*3/r.components*r.byteLength;case Gn:return n*t*4/r.components*r.byteLength;case Wl:return n*t*4/r.components*r.byteLength;case la:case ca:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ua:case ha:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ko:case Jo:return Math.max(n,16)*Math.max(t,8)/4;case $o:case Zo:return Math.max(n,8)*Math.max(t,8)/2;case Qo:case jo:case el:case nl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case tl:case xa:case il:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case rl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case al:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ol:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ll:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case cl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ul:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case hl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case dl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case fl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case pl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ml:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case gl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case _l:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case xl:case vl:case Ml:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Sl:case yl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case va:case bl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jf(n){switch(n){case vn:case ah:return{byteLength:1,components:1};case us:case oh:case ai:return{byteLength:2,components:1};case kl:case Gl:return{byteLength:2,components:4};case si:case zl:case jn:return{byteLength:4,components:1};case lh:case ch:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ol}}));typeof window<"u"&&(window.__THREE__?It("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ol);function Ah(){let n=null,t=!1,e=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),e(s,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function tp(n){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const h=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,h);else{d.sort((p,M)=>p.start-M.start);let u=0;for(let p=1;p<d.length;p++){const M=d[u],S=d[p];S.start<=M.start+M.count+1?M.count=Math.max(M.count,S.start+S.count-M.start):(++u,d[u]=S)}d.length=u+1;for(let p=0,M=d.length;p<M;p++){const S=d[p];n.bufferSubData(l,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,np=`#ifdef USE_ALPHAHASH
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
#endif`,ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,op=`#ifdef USE_AOMAP
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
#endif`,lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cp=`#ifdef USE_BATCHING
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
#endif`,up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pp=`#ifdef USE_IRIDESCENCE
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
#endif`,mp=`#ifdef USE_BUMPMAP
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
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ep=`#define PI 3.141592653589793
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
} // validated`,Tp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wp=`vec3 transformedNormal = objectNormal;
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
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Np=`#ifdef USE_ENVMAP
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
#endif`,Fp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hp=`#ifdef USE_GRADIENTMAP
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
}`,Vp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,qp=`#ifdef USE_ENVMAP
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
#endif`,$p=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qp=`PhysicalMaterial material;
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
#endif`,jp=`uniform sampler2D dfgLUT;
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
}`,tm=`
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
#endif`,em=`#if defined( RE_IndirectDiffuse )
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
#endif`,nm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,im=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hm=`#if defined( USE_POINTS_UV )
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
#endif`,dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_m=`#ifdef USE_MORPHTARGETS
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
#endif`,xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Em=`#ifdef USE_NORMALMAP
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
#endif`,Tm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Am=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Um=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,km=`float getShadowMask() {
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
}`,Gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hm=`#ifdef USE_SKINNING
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
#endif`,Vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$m=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Km=`#ifdef USE_TRANSMISSION
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
#endif`,Zm=`#ifdef USE_TRANSMISSION
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
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const e0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n0=`uniform sampler2D t2D;
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
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`#include <common>
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
}`,l0=`#if DEPTH_PACKING == 3200
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
}`,c0=`#define DISTANCE
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
}`,u0=`#define DISTANCE
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
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`uniform float scale;
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
}`,p0=`uniform vec3 diffuse;
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
}`,m0=`#include <common>
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
}`,g0=`uniform vec3 diffuse;
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
}`,_0=`#define LAMBERT
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
}`,x0=`#define LAMBERT
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
}`,v0=`#define MATCAP
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
}`,M0=`#define MATCAP
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
}`,S0=`#define NORMAL
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
}`,y0=`#define NORMAL
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
}`,b0=`#define PHONG
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
}`,E0=`#define PHONG
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
}`,T0=`#define STANDARD
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
}`,w0=`#define STANDARD
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
}`,A0=`#define TOON
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
}`,R0=`#define TOON
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
}`,C0=`uniform float size;
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
}`,P0=`uniform vec3 diffuse;
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
}`,D0=`#include <common>
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
}`,L0=`uniform vec3 color;
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
}`,I0=`uniform float rotation;
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
}`,U0=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:ep,alphahash_pars_fragment:np,alphamap_fragment:ip,alphamap_pars_fragment:rp,alphatest_fragment:sp,alphatest_pars_fragment:ap,aomap_fragment:op,aomap_pars_fragment:lp,batching_pars_vertex:cp,batching_vertex:up,begin_vertex:hp,beginnormal_vertex:dp,bsdfs:fp,iridescence_fragment:pp,bumpmap_pars_fragment:mp,clipping_planes_fragment:gp,clipping_planes_pars_fragment:_p,clipping_planes_pars_vertex:xp,clipping_planes_vertex:vp,color_fragment:Mp,color_pars_fragment:Sp,color_pars_vertex:yp,color_vertex:bp,common:Ep,cube_uv_reflection_fragment:Tp,defaultnormal_vertex:wp,displacementmap_pars_vertex:Ap,displacementmap_vertex:Rp,emissivemap_fragment:Cp,emissivemap_pars_fragment:Pp,colorspace_fragment:Dp,colorspace_pars_fragment:Lp,envmap_fragment:Ip,envmap_common_pars_fragment:Up,envmap_pars_fragment:Np,envmap_pars_vertex:Fp,envmap_physical_pars_fragment:qp,envmap_vertex:Op,fog_vertex:Bp,fog_pars_vertex:zp,fog_fragment:kp,fog_pars_fragment:Gp,gradientmap_pars_fragment:Hp,lightmap_pars_fragment:Vp,lights_lambert_fragment:Wp,lights_lambert_pars_fragment:Xp,lights_pars_begin:Yp,lights_toon_fragment:$p,lights_toon_pars_fragment:Kp,lights_phong_fragment:Zp,lights_phong_pars_fragment:Jp,lights_physical_fragment:Qp,lights_physical_pars_fragment:jp,lights_fragment_begin:tm,lights_fragment_maps:em,lights_fragment_end:nm,lightprobes_pars_fragment:im,logdepthbuf_fragment:rm,logdepthbuf_pars_fragment:sm,logdepthbuf_pars_vertex:am,logdepthbuf_vertex:om,map_fragment:lm,map_pars_fragment:cm,map_particle_fragment:um,map_particle_pars_fragment:hm,metalnessmap_fragment:dm,metalnessmap_pars_fragment:fm,morphinstance_vertex:pm,morphcolor_vertex:mm,morphnormal_vertex:gm,morphtarget_pars_vertex:_m,morphtarget_vertex:xm,normal_fragment_begin:vm,normal_fragment_maps:Mm,normal_pars_fragment:Sm,normal_pars_vertex:ym,normal_vertex:bm,normalmap_pars_fragment:Em,clearcoat_normal_fragment_begin:Tm,clearcoat_normal_fragment_maps:wm,clearcoat_pars_fragment:Am,iridescence_pars_fragment:Rm,opaque_fragment:Cm,packing:Pm,premultiplied_alpha_fragment:Dm,project_vertex:Lm,dithering_fragment:Im,dithering_pars_fragment:Um,roughnessmap_fragment:Nm,roughnessmap_pars_fragment:Fm,shadowmap_pars_fragment:Om,shadowmap_pars_vertex:Bm,shadowmap_vertex:zm,shadowmask_pars_fragment:km,skinbase_vertex:Gm,skinning_pars_vertex:Hm,skinning_vertex:Vm,skinnormal_vertex:Wm,specularmap_fragment:Xm,specularmap_pars_fragment:Ym,tonemapping_fragment:qm,tonemapping_pars_fragment:$m,transmission_fragment:Km,transmission_pars_fragment:Zm,uv_pars_fragment:Jm,uv_pars_vertex:Qm,uv_vertex:jm,worldpos_vertex:t0,background_vert:e0,background_frag:n0,backgroundCube_vert:i0,backgroundCube_frag:r0,cube_vert:s0,cube_frag:a0,depth_vert:o0,depth_frag:l0,distance_vert:c0,distance_frag:u0,equirect_vert:h0,equirect_frag:d0,linedashed_vert:f0,linedashed_frag:p0,meshbasic_vert:m0,meshbasic_frag:g0,meshlambert_vert:_0,meshlambert_frag:x0,meshmatcap_vert:v0,meshmatcap_frag:M0,meshnormal_vert:S0,meshnormal_frag:y0,meshphong_vert:b0,meshphong_frag:E0,meshphysical_vert:T0,meshphysical_frag:w0,meshtoon_vert:A0,meshtoon_frag:R0,points_vert:C0,points_frag:P0,shadow_vert:D0,shadow_frag:L0,sprite_vert:I0,sprite_frag:U0},mt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new A},probesMax:{value:new A},probesResolution:{value:new A}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Jn={basic:{uniforms:an([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:an([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:an([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:an([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:an([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:an([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:an([mt.points,mt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:an([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:an([mt.common,mt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:an([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:an([mt.sprite,mt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distance:{uniforms:an([mt.common,mt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distance_vert,fragmentShader:zt.distance_frag},shadow:{uniforms:an([mt.lights,mt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Jn.physical={uniforms:an([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const na={r:0,b:0,g:0},N0=new Te,Rh=new Nt;Rh.set(-1,0,0,0,1,0,0,0,1);function F0(n,t,e,i,r,s){const a=new Ht(0);let o=r===!0?0:1,c,l,h=null,d=0,u=null;function p(b){let C=b.isScene===!0?b.background:null;if(C&&C.isTexture){const E=b.backgroundBlurriness>0;C=t.get(C,E)}return C}function M(b){let C=!1;const E=p(b);E===null?m(a,o):E&&E.isColor&&(m(E,1),C=!0);const _=n.xr.getEnvironmentBlendMode();_==="additive"?e.buffers.color.setClear(0,0,0,1,s):_==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(n.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(b,C){const E=p(C);E&&(E.isCubeTexture||E.mapping===Fa)?(l===void 0&&(l=new Ot(new wi(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:Br(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(_,v,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=E,l.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(N0.makeRotationFromEuler(C.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Rh),l.material.toneMapped=qt.getTransfer(E.colorSpace)!==le,(h!==E||d!==E.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=E,d=E.version,u=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Ot(new Ai(2,2),new ci({name:"BackgroundMaterial",uniforms:Br(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=qt.getTransfer(E.colorSpace)!==le,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,u=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,C){b.getRGB(na,Eh(n)),e.buffers.color.setClear(na.r,na.g,na.b,C,s)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,C=1){a.set(b),o=C,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:M,addToRenderList:S,dispose:f}}function O0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(L,O,B,N,k){let q=!1;const X=d(L,N,B,O);s!==X&&(s=X,l(s.object)),q=p(L,N,B,k),q&&M(L,N,B,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,E(L,O,B,N),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return n.createVertexArray()}function l(L){return n.bindVertexArray(L)}function h(L){return n.deleteVertexArray(L)}function d(L,O,B,N){const k=N.wireframe===!0;let q=i[O.id];q===void 0&&(q={},i[O.id]=q);const X=L.isInstancedMesh===!0?L.id:0;let et=q[X];et===void 0&&(et={},q[X]=et);let Y=et[B.id];Y===void 0&&(Y={},et[B.id]=Y);let Q=Y[k];return Q===void 0&&(Q=u(c()),Y[k]=Q),Q}function u(L){const O=[],B=[],N=[];for(let k=0;k<e;k++)O[k]=0,B[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:B,attributeDivisors:N,object:L,attributes:{},index:null}}function p(L,O,B,N){const k=s.attributes,q=O.attributes;let X=0;const et=B.getAttributes();for(const Y in et)if(et[Y].location>=0){const it=k[Y];let lt=q[Y];if(lt===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(lt=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(lt=L.instanceColor)),it===void 0||it.attribute!==lt||lt&&it.data!==lt.data)return!0;X++}return s.attributesNum!==X||s.index!==N}function M(L,O,B,N){const k={},q=O.attributes;let X=0;const et=B.getAttributes();for(const Y in et)if(et[Y].location>=0){let it=q[Y];it===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(it=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(it=L.instanceColor));const lt={};lt.attribute=it,it&&it.data&&(lt.data=it.data),k[Y]=lt,X++}s.attributes=k,s.attributesNum=X,s.index=N}function S(){const L=s.newAttributes;for(let O=0,B=L.length;O<B;O++)L[O]=0}function m(L){f(L,0)}function f(L,O){const B=s.newAttributes,N=s.enabledAttributes,k=s.attributeDivisors;B[L]=1,N[L]===0&&(n.enableVertexAttribArray(L),N[L]=1),k[L]!==O&&(n.vertexAttribDivisor(L,O),k[L]=O)}function b(){const L=s.newAttributes,O=s.enabledAttributes;for(let B=0,N=O.length;B<N;B++)O[B]!==L[B]&&(n.disableVertexAttribArray(B),O[B]=0)}function C(L,O,B,N,k,q,X){X===!0?n.vertexAttribIPointer(L,O,B,k,q):n.vertexAttribPointer(L,O,B,N,k,q)}function E(L,O,B,N){S();const k=N.attributes,q=B.getAttributes(),X=O.defaultAttributeValues;for(const et in q){const Y=q[et];if(Y.location>=0){let Q=k[et];if(Q===void 0&&(et==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),et==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){const it=Q.normalized,lt=Q.itemSize,yt=t.get(Q);if(yt===void 0)continue;const pe=yt.buffer,Kt=yt.type,te=yt.bytesPerElement,K=Kt===n.INT||Kt===n.UNSIGNED_INT||Q.gpuType===zl;if(Q.isInterleavedBufferAttribute){const nt=Q.data,bt=nt.stride,Ut=Q.offset;if(nt.isInstancedInterleavedBuffer){for(let Mt=0;Mt<Y.locationSize;Mt++)f(Y.location+Mt,nt.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Mt=0;Mt<Y.locationSize;Mt++)m(Y.location+Mt);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let Mt=0;Mt<Y.locationSize;Mt++)C(Y.location+Mt,lt/Y.locationSize,Kt,it,bt*te,(Ut+lt/Y.locationSize*Mt)*te,K)}else{if(Q.isInstancedBufferAttribute){for(let nt=0;nt<Y.locationSize;nt++)f(Y.location+nt,Q.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let nt=0;nt<Y.locationSize;nt++)m(Y.location+nt);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let nt=0;nt<Y.locationSize;nt++)C(Y.location+nt,lt/Y.locationSize,Kt,it,lt*te,lt/Y.locationSize*nt*te,K)}}else if(X!==void 0){const it=X[et];if(it!==void 0)switch(it.length){case 2:n.vertexAttrib2fv(Y.location,it);break;case 3:n.vertexAttrib3fv(Y.location,it);break;case 4:n.vertexAttrib4fv(Y.location,it);break;default:n.vertexAttrib1fv(Y.location,it)}}}}b()}function _(){T();for(const L in i){const O=i[L];for(const B in O){const N=O[B];for(const k in N){const q=N[k];for(const X in q)h(q[X].object),delete q[X];delete N[k]}}delete i[L]}}function v(L){if(i[L.id]===void 0)return;const O=i[L.id];for(const B in O){const N=O[B];for(const k in N){const q=N[k];for(const X in q)h(q[X].object),delete q[X];delete N[k]}}delete i[L.id]}function w(L){for(const O in i){const B=i[O];for(const N in B){const k=B[N];if(k[L.id]===void 0)continue;const q=k[L.id];for(const X in q)h(q[X].object),delete q[X];delete k[L.id]}}}function g(L){for(const O in i){const B=i[O],N=L.isInstancedMesh===!0?L.id:0,k=B[N];if(k!==void 0){for(const q in k){const X=k[q];for(const et in X)h(X[et].object),delete X[et];delete k[q]}delete B[N],Object.keys(B).length===0&&delete i[O]}}}function T(){P(),a=!0,s!==r&&(s=r,l(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:_,releaseStatesOfGeometry:v,releaseStatesOfObject:g,releaseStatesOfProgram:w,initAttributes:S,enableAttribute:m,disableUnusedAttributes:b}}function B0(n,t,e){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),e.update(l,i,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let p=0;p<h;p++)u+=l[p];e.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function z0(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Gn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const g=w===ai&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==vn&&w!==jn&&!g&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(It("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&It("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=n.getParameter(n.MAX_SAMPLES),v=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:M,maxTextureSize:S,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:C,maxFragmentUniforms:E,maxSamples:_,samples:v}}function k0(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new xi,o=new Nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||r;return r=u,i=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const M=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||M===null||M.length===0||s&&!m)s?h(null):l();else{const b=s?0:i,C=b*4;let E=f.clippingState||null;c.value=E,E=h(M,u,C,p);for(let _=0;_!==C;++_)E[_]=e[_];f.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,p,M){const S=d!==null?d.length:0;let m=null;if(S!==0){if(m=c.value,M!==!0||m===null){const f=p+S*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let C=0,E=p;C!==S;++C,E+=4)a.copy(d[C]).applyMatrix4(b,o),a.normal.toArray(m,E),m[E+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}const Pr=4,G0=6,H0=20,V0=256,ts=new za,fu=new Ht;let wo=null,Ao=0,Ro=0,Co=!1;const W0=new A,$i=new A;class pu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,s={}){const{size:a=256,position:o=W0}=s;wo=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,r,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_u(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(wo,Ao,Ro),this._renderer.xr.enabled=Co,t.scissorTest=!1,Tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===tr||t.mapping===Or?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wo=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:ai,format:Gn,colorSpace:Ma,depthBuffer:!1},r=mu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mu(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=X0(s)),this._blurMaterial=q0(s,t,e),this._ggxMaterial=Y0(s,t,e)}return r}_compileMaterial(t){const e=new Ot(new Ue,t);this._renderer.compile(e,ts)}_sceneToCubeUV(t,e,i,r,s){const c=new Tn(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(fu),d.toneMapping=ei,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ot(new wi,new ui({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let f=!1;const b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,f=!0):(m.color.copy(fu),f=!0);for(let C=0;C<6;C++){const E=C%3;E===0?(c.up.set(0,l[C],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[C],s.y,s.z)):E===1?(c.up.set(0,0,l[C]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[C],s.z)):(c.up.set(0,l[C],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[C]));const _=this._cubeSize;Tr(r,E*_,C>2?_:0,_,_),d.setRenderTarget(r),f&&d.render(S,c),d.render(t,c)}d.toneMapping=p,d.autoClear=u,t.background=b}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===tr||t.mapping===Or;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_u()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;Tr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,ts)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,p=d*u,{_lodMax:M}=this,S=this._sizeLods[i],m=3*S*(i>M-Pr?i-M+Pr:0),f=4*(this._cubeSize-S);c.envMap.value=t.texture,c.roughness.value=p,c.mipInt.value=M-e,Tr(s,m,f,3*S,2*S),r.setRenderTarget(s),r.render(o,ts),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=M-i,Tr(t,m,f,3*S,2*S),r.setRenderTarget(t),r.render(o,ts)}_blur(t,e,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,i,a),this._blurPass(s,t,i,i,a)}_blurPass(t,e,i,r,s){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;const l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-i;const h=this._sizeLods[r],d=3*h*(r>this._lodMax-Pr?r-this._lodMax+Pr:0),u=4*(this._cubeSize-h);Tr(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(c,ts)}}function X0(n){const t=[],e=[];let i=n;const r=n-Pr+1+G0;for(let s=0;s<r;s++){const a=Math.pow(2,i);t.push(a);const o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,p=3,M=new Float32Array(p*u*d),S=new Float32Array(p*u*d);for(let f=0;f<d;f++){const b=f%3*2/3-1,C=f>2?0:-1,E=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];M.set(E,p*u*f);for(let _=0;_<u;_++){const v=h[_*2]*2-1,w=h[_*2+1]*2-1;f===0?$i.set(1,w,v):f===1?$i.set(-v,1,-w):f===2?$i.set(-v,w,1):f===3?$i.set(-1,w,-v):f===4?$i.set(-v,-1,w):$i.set(v,w,-1),$i.toArray(S,(f*u+_)*p)}}const m=new Ue;m.setAttribute("position",new Vn(M,p)),m.setAttribute("outputDirection",new Vn(S,p)),e.push(new Ot(m,null)),i>Pr&&i--}return{lodMeshes:e,sizeLods:t}}function mu(n,t,e){const i=new Hn(n,t,e);return i.texture.mapping=Fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tr(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Y0(n,t,e){return new ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:V0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ka(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function q0(n,t,e){return new ci({name:"SphericalGaussianBlur",defines:{SAMPLES:H0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ka(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function gu(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ka(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function _u(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function ka(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ch extends Hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new yh(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wi(5,5,5),s=new ci({name:"CubemapFromEquirect",uniforms:Br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:Si});s.uniforms.tEquirect.value=e;const a=new Ot(r,s),o=e.minFilter;return e.minFilter===Zi&&(e.minFilter=tn),new Zf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}function $0(n){let t=new WeakMap,e=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?a(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===Ja||p===Qa)if(t.has(u)){const M=t.get(u).texture;return o(M,u.mapping)}else{const M=u.image;if(M&&M.height>0){const S=new Ch(M.height);return S.fromEquirectangularTexture(n,u),t.set(u,S),u.addEventListener("dispose",l),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const p=u.mapping,M=p===Ja||p===Qa,S=p===tr||p===Or;if(M||S){let m=e.get(u);const f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new pu(n)),m=M?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const b=u.image;return M&&b&&b.height>0||S&&b&&c(b)?(i===null&&(i=new pu(n)),m=M?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===Ja?u.mapping=tr:p===Qa&&(u.mapping=Or),u}function c(u){let p=0;const M=6;for(let S=0;S<M;S++)u[S]!==void 0&&p++;return p===M}function l(u){const p=u.target;p.removeEventListener("dispose",l);const M=t.get(p);M!==void 0&&(t.delete(p),M.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const M=e.get(p);M!==void 0&&(e.delete(p),M.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function K0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Lr("WebGLRenderer: "+i+" extension not supported."),r}}}function Z0(n,t,e,i){const r={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const M in u.attributes)t.remove(u.attributes[M]);u.removeEventListener("dispose",a),delete r[u.id];const p=s.get(u);p&&(t.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const p in u)t.update(u[p],n.ARRAY_BUFFER)}function l(d){const u=[],p=d.index,M=d.attributes.position;let S=0;if(M===void 0)return;if(p!==null){const b=p.array;S=p.version;for(let C=0,E=b.length;C<E;C+=3){const _=b[C+0],v=b[C+1],w=b[C+2];u.push(_,v,v,w,w,_)}}else{const b=M.array;S=M.version;for(let C=0,E=b.length/3-1;C<E;C+=3){const _=C+0,v=C+1,w=C+2;u.push(_,v,v,w,w,_)}}const m=new(M.count>=65535?vh:xh)(u,1);m.version=S;const f=s.get(d);f&&t.remove(f),s.set(d,m)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function J0(n,t,e){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,u){n.drawElements(i,u,s,d*a),e.update(u,i,1)}function l(d,u,p){p!==0&&(n.drawElementsInstanced(i,u,s,d*a,p),e.update(u,i,p))}function h(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,p);let S=0;for(let m=0;m<p;m++)S+=u[m];e.update(S,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Q0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:Qt("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function j0(n,t,e){const i=new WeakMap,r=new Re;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let P=function(){g.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var p=P;u!==void 0&&u.texture.dispose();const M=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],C=o.morphAttributes.color||[];let E=0;M===!0&&(E=1),S===!0&&(E=2),m===!0&&(E=3);let _=o.attributes.position.count*E,v=1;_>t.maxTextureSize&&(v=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const w=new Float32Array(_*v*4*d),g=new mh(w,_,v,d);g.type=jn,g.needsUpdate=!0;const T=E*4;for(let L=0;L<d;L++){const O=f[L],B=b[L],N=C[L],k=_*v*4*L;for(let q=0;q<O.count;q++){const X=q*T;M===!0&&(r.fromBufferAttribute(O,q),w[k+X+0]=r.x,w[k+X+1]=r.y,w[k+X+2]=r.z,w[k+X+3]=0),S===!0&&(r.fromBufferAttribute(B,q),w[k+X+4]=r.x,w[k+X+5]=r.y,w[k+X+6]=r.z,w[k+X+7]=0),m===!0&&(r.fromBufferAttribute(N,q),w[k+X+8]=r.x,w[k+X+9]=r.y,w[k+X+10]=r.z,w[k+X+11]=N.itemSize===4?r.w:1)}}u={count:d,texture:g,size:new Pt(_,v)},i.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let M=0;for(let m=0;m<l.length;m++)M+=l[m];const S=o.morphTargetsRelative?1:1-M;c.getUniforms().setValue(n,"morphTargetBaseInfluence",S),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function tg(n,t,e,i,r){let s=new WeakMap;function a(l){const h=r.render.frame,d=l.geometry,u=t.get(l,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return u}function o(){s=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const eg={[ju]:"LINEAR_TONE_MAPPING",[th]:"REINHARD_TONE_MAPPING",[eh]:"CINEON_TONE_MAPPING",[Bl]:"ACES_FILMIC_TONE_MAPPING",[ih]:"AGX_TONE_MAPPING",[rh]:"NEUTRAL_TONE_MAPPING",[nh]:"CUSTOM_TONE_MAPPING"};function ng(n,t,e,i,r,s){const a=new Hn(t,e,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Ue;l.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ae([0,2,0,0,2,0],2));const h=new Hf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ot(l,h),u=new za(-1,1,1,-1,0,1);let p=null,M=null,S=!1,m,f=null,b=[],C=!1;this.setSize=function(E,_){a.setSize(E,_),o!==null&&o.setSize(E,_),c!==null&&c.setSize(E,_);for(let v=0;v<b.length;v++){const w=b[v];w.setSize&&w.setSize(E,_)}},this.setEffects=function(E){b=E,C=b.length>0&&b[0].isRenderPass===!0;const _=a.width,v=a.height;b.length>0&&o===null&&(o=new Hn(_,v,{type:ai,depthBuffer:!1,stencilBuffer:!1}),c=new Hn(_,v,{type:ai,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<b.length;w++){const g=b[w];g.setSize&&g.setSize(_,v)}},this.begin=function(E,_){if(S||E.toneMapping===ei&&b.length===0)return!1;if(f=_,_!==null){const v=_.width,w=_.height;(a.width!==v||a.height!==w)&&this.setSize(v,w)}return C===!1&&E.setRenderTarget(a),m=E.toneMapping,E.toneMapping=ei,!0},this.hasRenderPass=function(){return C},this.end=function(E,_){E.toneMapping=m,S=!0;let v=a,w=o;for(let g=0;g<b.length;g++){const T=b[g];T.enabled!==!1&&(T.render(E,w,v,_),T.needsSwap!==!1&&(v=w,w=w===o?c:o))}if(p!==E.outputColorSpace||M!==E.toneMapping){p=E.outputColorSpace,M=E.toneMapping,h.defines={},qt.getTransfer(p)===le&&(h.defines.SRGB_TRANSFER="");const g=eg[M];g&&(h.defines[g]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=v.texture,E.setRenderTarget(f),E.render(d,u),f=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const Ph=new en,Tl=new ps(1,1),Dh=new mh,Lh=new ff,Ih=new yh,xu=[],vu=[],Mu=new Float32Array(16),Su=new Float32Array(9),yu=new Float32Array(4);function Xr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=xu[r];if(s===void 0&&(s=new Float32Array(r),xu[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function Ve(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function We(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ga(n,t){let e=vu[t];e===void 0&&(e=new Int32Array(t),vu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function ig(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function rg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;n.uniform2fv(this.addr,t),We(e,t)}}function sg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;n.uniform3fv(this.addr,t),We(e,t)}}function ag(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;n.uniform4fv(this.addr,t),We(e,t)}}function og(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,i))return;yu.set(i),n.uniformMatrix2fv(this.addr,!1,yu),We(e,i)}}function lg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,i))return;Su.set(i),n.uniformMatrix3fv(this.addr,!1,Su),We(e,i)}}function cg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,i))return;Mu.set(i),n.uniformMatrix4fv(this.addr,!1,Mu),We(e,i)}}function ug(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function hg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;n.uniform2iv(this.addr,t),We(e,t)}}function dg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;n.uniform3iv(this.addr,t),We(e,t)}}function fg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;n.uniform4iv(this.addr,t),We(e,t)}}function pg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function mg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;n.uniform2uiv(this.addr,t),We(e,t)}}function gg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;n.uniform3uiv(this.addr,t),We(e,t)}}function _g(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;n.uniform4uiv(this.addr,t),We(e,t)}}function xg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Tl.compareFunction=e.isReversedDepthBuffer()?Yl:Xl,s=Tl):s=Ph,e.setTexture2D(t||s,r)}function vg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Lh,r)}function Mg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Ih,r)}function Sg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Dh,r)}function yg(n){switch(n){case 5126:return ig;case 35664:return rg;case 35665:return sg;case 35666:return ag;case 35674:return og;case 35675:return lg;case 35676:return cg;case 5124:case 35670:return ug;case 35667:case 35671:return hg;case 35668:case 35672:return dg;case 35669:case 35673:return fg;case 5125:return pg;case 36294:return mg;case 36295:return gg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return Sg}}function bg(n,t){n.uniform1fv(this.addr,t)}function Eg(n,t){const e=Xr(t,this.size,2);n.uniform2fv(this.addr,e)}function Tg(n,t){const e=Xr(t,this.size,3);n.uniform3fv(this.addr,e)}function wg(n,t){const e=Xr(t,this.size,4);n.uniform4fv(this.addr,e)}function Ag(n,t){const e=Xr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Rg(n,t){const e=Xr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Cg(n,t){const e=Xr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Pg(n,t){n.uniform1iv(this.addr,t)}function Dg(n,t){n.uniform2iv(this.addr,t)}function Lg(n,t){n.uniform3iv(this.addr,t)}function Ig(n,t){n.uniform4iv(this.addr,t)}function Ug(n,t){n.uniform1uiv(this.addr,t)}function Ng(n,t){n.uniform2uiv(this.addr,t)}function Fg(n,t){n.uniform3uiv(this.addr,t)}function Og(n,t){n.uniform4uiv(this.addr,t)}function Bg(n,t,e){const i=this.cache,r=t.length,s=Ga(e,r);Ve(i,s)||(n.uniform1iv(this.addr,s),We(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Tl:a=Ph;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function zg(n,t,e){const i=this.cache,r=t.length,s=Ga(e,r);Ve(i,s)||(n.uniform1iv(this.addr,s),We(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Lh,s[a])}function kg(n,t,e){const i=this.cache,r=t.length,s=Ga(e,r);Ve(i,s)||(n.uniform1iv(this.addr,s),We(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Ih,s[a])}function Gg(n,t,e){const i=this.cache,r=t.length,s=Ga(e,r);Ve(i,s)||(n.uniform1iv(this.addr,s),We(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Dh,s[a])}function Hg(n){switch(n){case 5126:return bg;case 35664:return Eg;case 35665:return Tg;case 35666:return wg;case 35674:return Ag;case 35675:return Rg;case 35676:return Cg;case 5124:case 35670:return Pg;case 35667:case 35671:return Dg;case 35668:case 35672:return Lg;case 35669:case 35673:return Ig;case 5125:return Ug;case 36294:return Ng;case 36295:return Fg;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return zg;case 35680:case 36300:case 36308:case 36293:return kg;case 36289:case 36303:case 36311:case 36292:return Gg}}class Vg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=yg(e.type)}}class Wg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hg(e.type)}}class Xg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const Po=/(\w+)(\])?(\[|\.)?/g;function bu(n,t){n.seq.push(t),n.map[t.id]=t}function Yg(n,t,e){const i=n.name,r=i.length;for(Po.lastIndex=0;;){const s=Po.exec(i),a=Po.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){bu(e,l===void 0?new Vg(o,n,t):new Wg(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new Xg(o),bu(e,d)),e=d}}}class da{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Yg(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Eu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const qg=37297;let $g=0;function Kg(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Tu=new Nt;function Zg(n){qt._getMatrix(Tu,qt.workingColorSpace,n);const t=`mat3( ${Tu.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(n)){case Sa:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function wu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Kg(n.getShaderSource(t),o)}else return s}function Jg(n,t){const e=Zg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Qg={[ju]:"Linear",[th]:"Reinhard",[eh]:"Cineon",[Bl]:"ACESFilmic",[ih]:"AgX",[rh]:"Neutral",[nh]:"Custom"};function jg(n,t){const e=Qg[t];return e===void 0?(It("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ia=new A;function t_(){qt.getLuminanceCoefficients(ia);const n=ia.x.toFixed(4),t=ia.y.toFixed(4),e=ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rs).join(`
`)}function n_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function i_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function rs(n){return n!==""}function Au(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ru(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const r_=/^[ \t]*#include +<([\w\d./]+)>/gm;function wl(n){return n.replace(r_,a_)}const s_=new Map;function a_(n,t){let e=zt[t];if(e===void 0){const i=s_.get(t);if(i!==void 0)e=zt[i],It('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return wl(e)}const o_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cu(n){return n.replace(o_,l_)}function l_(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Pu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}const c_={[oa]:"SHADOWMAP_TYPE_PCF",[is]:"SHADOWMAP_TYPE_VSM"};function u_(n){return c_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const h_={[tr]:"ENVMAP_TYPE_CUBE",[Or]:"ENVMAP_TYPE_CUBE",[Fa]:"ENVMAP_TYPE_CUBE_UV"};function d_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":h_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const f_={[Or]:"ENVMAP_MODE_REFRACTION"};function p_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":f_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const m_={[Qu]:"ENVMAP_BLENDING_MULTIPLY",[Cd]:"ENVMAP_BLENDING_MIX",[Pd]:"ENVMAP_BLENDING_ADD"};function g_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":m_[n.combine]||"ENVMAP_BLENDING_NONE"}function __(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function x_(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=u_(e),l=d_(e),h=p_(e),d=g_(e),u=__(e),p=e_(e),M=n_(s),S=r.createProgram();let m,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(rs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(rs).join(`
`),f.length>0&&(f+=`
`)):(m=[Pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),f=[Pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?zt.tonemapping_pars_fragment:"",e.toneMapping!==ei?jg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,Jg("linearToOutputTexel",e.outputColorSpace),t_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rs).join(`
`)),a=wl(a),a=Au(a,e),a=Ru(a,e),o=wl(o),o=Au(o,e),o=Ru(o,e),a=Cu(a),o=Cu(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const C=b+m+a,E=b+f+o,_=Eu(r,r.VERTEX_SHADER,C),v=Eu(r,r.FRAGMENT_SHADER,E);r.attachShader(S,_),r.attachShader(S,v),e.index0AttributeName!==void 0?r.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function w(L){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(S)||"",B=r.getShaderInfoLog(_)||"",N=r.getShaderInfoLog(v)||"",k=O.trim(),q=B.trim(),X=N.trim();let et=!0,Y=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(et=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,_,v);else{const Q=wu(r,_,"vertex"),it=wu(r,v,"fragment");Qt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+Q+`
`+it)}else k!==""?It("WebGLProgram: Program Info Log:",k):(q===""||X==="")&&(Y=!1);Y&&(L.diagnostics={runnable:et,programLog:k,vertexShader:{log:q,prefix:m},fragmentShader:{log:X,prefix:f}})}r.deleteShader(_),r.deleteShader(v),g=new da(r,S),T=i_(r,S)}let g;this.getUniforms=function(){return g===void 0&&w(this),g};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(S,qg)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$g++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=_,this.fragmentShader=v,this}let v_=0;class M_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new S_(t),e.set(t,i)),i}}class S_{constructor(t){this.id=v_++,this.code=t,this.usedTimes=0}}function y_(n){return n===er||n===xa||n===va}function b_(n,t,e,i,r,s){const a=new gh,o=new M_,c=new Set,l=[],h=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(g){return c.add(g),g===0?"uv":`uv${g}`}function S(g,T,P,L,O,B){const N=L.fog,k=O.geometry,q=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?L.environment:null,X=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,et=t.get(g.envMap||q,X),Y=et&&et.mapping===Fa?et.image.height:null,Q=p[g.type];g.precision!==null&&(u=i.getMaxPrecision(g.precision),u!==g.precision&&It("WebGLProgram.getParameters:",g.precision,"not supported, using",u,"instead."));const it=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,lt=it!==void 0?it.length:0;let yt=0;k.morphAttributes.position!==void 0&&(yt=1),k.morphAttributes.normal!==void 0&&(yt=2),k.morphAttributes.color!==void 0&&(yt=3);let pe,Kt,te,K;if(Q){const ge=Jn[Q];pe=ge.vertexShader,Kt=ge.fragmentShader}else{pe=g.vertexShader,Kt=g.fragmentShader;const ge=o.getVertexShaderStage(g),ie=o.getFragmentShaderStage(g);o.update(g,ge,ie),te=ge.id,K=ie.id}const nt=n.getRenderTarget(),bt=n.state.buffers.depth.getReversed(),Ut=O.isInstancedMesh===!0,Mt=O.isBatchedMesh===!0,kt=!!g.map,Be=!!g.matcap,Vt=!!et,jt=!!g.aoMap,me=!!g.lightMap,Xt=!!g.bumpMap&&g.wireframe===!1,ye=!!g.normalMap,Ye=!!g.displacementMap,un=!!g.emissiveMap,we=!!g.metalnessMap,Ne=!!g.roughnessMap,F=g.anisotropy>0,Ze=g.clearcoat>0,oe=g.dispersion>0,R=g.retroreflectivity>0,x=g.iridescence>0,z=g.sheen>0,V=g.transmission>0,$=F&&!!g.anisotropyMap,ot=Ze&&!!g.clearcoatMap,ct=Ze&&!!g.clearcoatNormalMap,Z=Ze&&!!g.clearcoatRoughnessMap,j=x&&!!g.iridescenceMap,ut=x&&!!g.iridescenceThicknessMap,Rt=z&&!!g.sheenColorMap,pt=z&&!!g.sheenRoughnessMap,ht=!!g.specularMap,Ct=!!g.specularColorMap,Lt=!!g.specularIntensityMap,Ft=V&&!!g.transmissionMap,U=V&&!!g.thicknessMap,dt=!!g.gradientMap,J=!!g.alphaMap,ft=g.alphaTest>0,xt=!!g.alphaHash,rt=!!g.extensions;let Dt=ei;g.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Dt=n.toneMapping);const wt={shaderID:Q,shaderType:g.type,shaderName:g.name,vertexShader:pe,fragmentShader:Kt,defines:g.defines,customVertexShaderID:te,customFragmentShaderID:K,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:u,batching:Mt,batchingColor:Mt&&O._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&O.instanceColor!==null,instancingMorph:Ut&&O.morphTexture!==null,outputColorSpace:nt===null?n.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:qt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:kt,matcap:Be,envMap:Vt,envMapMode:Vt&&et.mapping,envMapCubeUVHeight:Y,aoMap:jt,lightMap:me,bumpMap:Xt,normalMap:ye,displacementMap:Ye,emissiveMap:un,normalMapObjectSpace:ye&&g.normalMapType===Id,normalMapTangentSpace:ye&&g.normalMapType===El,packedNormalMap:ye&&g.normalMapType===El&&y_(g.normalMap.format),metalnessMap:we,roughnessMap:Ne,anisotropy:F,anisotropyMap:$,clearcoat:Ze,clearcoatMap:ot,clearcoatNormalMap:ct,clearcoatRoughnessMap:Z,dispersion:oe,retroreflection:R,iridescence:x,iridescenceMap:j,iridescenceThicknessMap:ut,sheen:z,sheenColorMap:Rt,sheenRoughnessMap:pt,specularMap:ht,specularColorMap:Ct,specularIntensityMap:Lt,transmission:V,transmissionMap:Ft,thicknessMap:U,gradientMap:dt,opaque:g.transparent===!1&&g.blending===as&&g.alphaToCoverage===!1,alphaMap:J,alphaTest:ft,alphaHash:xt,combine:g.combine,mapUv:kt&&M(g.map.channel),aoMapUv:jt&&M(g.aoMap.channel),lightMapUv:me&&M(g.lightMap.channel),bumpMapUv:Xt&&M(g.bumpMap.channel),normalMapUv:ye&&M(g.normalMap.channel),displacementMapUv:Ye&&M(g.displacementMap.channel),emissiveMapUv:un&&M(g.emissiveMap.channel),metalnessMapUv:we&&M(g.metalnessMap.channel),roughnessMapUv:Ne&&M(g.roughnessMap.channel),anisotropyMapUv:$&&M(g.anisotropyMap.channel),clearcoatMapUv:ot&&M(g.clearcoatMap.channel),clearcoatNormalMapUv:ct&&M(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&M(g.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&M(g.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&M(g.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&M(g.sheenColorMap.channel),sheenRoughnessMapUv:pt&&M(g.sheenRoughnessMap.channel),specularMapUv:ht&&M(g.specularMap.channel),specularColorMapUv:Ct&&M(g.specularColorMap.channel),specularIntensityMapUv:Lt&&M(g.specularIntensityMap.channel),transmissionMapUv:Ft&&M(g.transmissionMap.channel),thicknessMapUv:U&&M(g.thicknessMap.channel),alphaMapUv:J&&M(g.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ye||F),vertexNormals:!!k.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!k.attributes.uv&&(kt||J),fog:!!N,useFog:g.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||k.attributes.normal===void 0&&ye===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:bt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:yt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Dt,decodeVideoTexture:kt&&g.map.isVideoTexture===!0&&qt.getTransfer(g.map.colorSpace)===le,decodeVideoTextureEmissive:un&&g.emissiveMap.isVideoTexture===!0&&qt.getTransfer(g.emissiveMap.colorSpace)===le,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===xn,flipSided:g.side===fn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:rt&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&g.extensions.multiDraw===!0||Mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function m(g){const T=[];if(g.shaderID?T.push(g.shaderID):(T.push(g.customVertexShaderID),T.push(g.customFragmentShaderID)),g.defines!==void 0)for(const P in g.defines)T.push(P),T.push(g.defines[P]);return g.isRawShaderMaterial===!1&&(f(T,g),b(T,g),T.push(n.outputColorSpace)),T.push(g.customProgramCacheKey),T.join()}function f(g,T){g.push(T.precision),g.push(T.outputColorSpace),g.push(T.envMapMode),g.push(T.envMapCubeUVHeight),g.push(T.mapUv),g.push(T.alphaMapUv),g.push(T.lightMapUv),g.push(T.aoMapUv),g.push(T.bumpMapUv),g.push(T.normalMapUv),g.push(T.displacementMapUv),g.push(T.emissiveMapUv),g.push(T.metalnessMapUv),g.push(T.roughnessMapUv),g.push(T.anisotropyMapUv),g.push(T.clearcoatMapUv),g.push(T.clearcoatNormalMapUv),g.push(T.clearcoatRoughnessMapUv),g.push(T.iridescenceMapUv),g.push(T.iridescenceThicknessMapUv),g.push(T.sheenColorMapUv),g.push(T.sheenRoughnessMapUv),g.push(T.specularMapUv),g.push(T.specularColorMapUv),g.push(T.specularIntensityMapUv),g.push(T.transmissionMapUv),g.push(T.thicknessMapUv),g.push(T.combine),g.push(T.fogExp2),g.push(T.sizeAttenuation),g.push(T.morphTargetsCount),g.push(T.morphAttributeCount),g.push(T.numSunLights),g.push(T.numDirLights),g.push(T.numPointLights),g.push(T.numSpotLights),g.push(T.numSpotLightMaps),g.push(T.numHemiLights),g.push(T.numRectAreaLights),g.push(T.numSunLightShadows),g.push(T.numDirLightShadows),g.push(T.numPointLightShadows),g.push(T.numSpotLightShadows),g.push(T.numSpotLightShadowsWithMaps),g.push(T.numLightProbes),g.push(T.shadowMapType),g.push(T.toneMapping),g.push(T.numClippingPlanes),g.push(T.numClipIntersection),g.push(T.depthPacking)}function b(g,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function C(g){const T=p[g.type];let P;if(T){const L=Jn[T];P=zf.clone(L.uniforms)}else P=g.uniforms;return P}function E(g,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new x_(n,T,g,r),l.push(P),h.set(T,P)),P}function _(g){if(--g.usedTimes===0){const T=l.indexOf(g);l[T]=l[l.length-1],l.pop(),h.delete(g.cacheKey),g.destroy()}}function v(g){o.remove(g)}function w(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:C,acquireProgram:E,releaseProgram:_,releaseShaderCache:v,programs:l,dispose:w}}function E_(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function T_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Du(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Lu(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,M,S,m,f){let b=n[t];return b===void 0?(b={id:u.id,object:u,geometry:p,material:M,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:m,group:f},n[t]=b):(b.id=u.id,b.object=u,b.geometry=p,b.material=M,b.materialVariant=a(u),b.groupOrder=S,b.renderOrder=u.renderOrder,b.z=m,b.group=f),t++,b}function c(u,p,M,S,m,f,b){b.reversedDepth===!0&&(m=-m);const C=o(u,p,M,S,m,f);M.transmission>0?i.push(C):M.transparent===!0?r.push(C):e.push(C)}function l(u,p,M,S,m,f){const b=o(u,p,M,S,m,f);M.transmission>0?i.unshift(b):M.transparent===!0?r.unshift(b):e.unshift(b)}function h(u,p){e.length>1&&e.sort(u||T_),i.length>1&&i.sort(p||Du),r.length>1&&r.sort(p||Du)}function d(){for(let u=t,p=n.length;u<p;u++){const M=n[u];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:d,sort:h}}function w_(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new Lu,n.set(i,[a])):r>=s.length?(a=new Lu,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function A_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new A,color:new Ht};break;case"SpotLight":e={position:new A,direction:new A,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new A,halfWidth:new A,halfHeight:new A};break}return n[t.id]=e,e}}}function R_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let C_=0;function P_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function D_(n){const t=new A_,e=R_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new A);const r=new A,s=new Te,a=new Te;function o(l){let h=0,d=0,u=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let p=0,M=0,S=0,m=0,f=0,b=0,C=0,E=0,_=0,v=0,w=0,g=0,T=0,P=0;l.sort(P_);for(let O=0,B=l.length;O<B;O++){const N=l[O],k=N.color,q=N.intensity,X=N.distance;let et=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===er?et=N.shadow.map.texture:et=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=k.r*q,d+=k.g*q,u+=k.b*q;else if(N.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(N.sh.coefficients[Y],q);P++}else if(N.isSunLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Q=N.shadow,it=e.get(N);it.shadowIntensity=Q.intensity,it.shadowBias=Q.bias,it.shadowNormalBias=Q.normalBias,it.shadowRadius=Q.radius,it.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[M]=it,i.sunShadowMap[M]=et;const lt=Q.getViewportCount();for(let yt=0;yt<lt;yt++)i.sunShadowMatrix[S+yt]=Q.getMatrix(yt),i.sunShadowCascade[S+yt]=Q._cascadeData[yt];S+=lt,M++}i.sun[p]=Y,p++}else if(N.isDirectionalLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Q=N.shadow,it=e.get(N);it.shadowIntensity=Q.intensity,it.shadowBias=Q.bias,it.shadowNormalBias=Q.normalBias,it.shadowRadius=Q.radius,it.shadowMapSize=Q.mapSize,i.directionalShadow[m]=it,i.directionalShadowMap[m]=et,i.directionalShadowMatrix[m]=N.shadow.matrix,_++}i.directional[m]=Y,m++}else if(N.isSpotLight){const Y=t.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(k).multiplyScalar(q),Y.distance=X,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,i.spot[b]=Y;const Q=N.shadow;if(N.map&&(i.spotLightMap[g]=N.map,g++,Q.updateMatrices(N),N.castShadow&&T++),i.spotLightMatrix[b]=Q.matrix,N.castShadow){const it=e.get(N);it.shadowIntensity=Q.intensity,it.shadowBias=Q.bias,it.shadowNormalBias=Q.normalBias,it.shadowRadius=Q.radius,it.shadowMapSize=Q.mapSize,i.spotShadow[b]=it,i.spotShadowMap[b]=et,w++}b++}else if(N.isRectAreaLight){const Y=t.get(N);Y.color.copy(k).multiplyScalar(q),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),i.rectArea[C]=Y,C++}else if(N.isPointLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){const Q=N.shadow,it=e.get(N);it.shadowIntensity=Q.intensity,it.shadowBias=Q.bias,it.shadowNormalBias=Q.normalBias,it.shadowRadius=Q.radius,it.shadowMapSize=Q.mapSize,it.shadowCameraNear=Q.camera.near,it.shadowCameraFar=Q.camera.far,i.pointShadow[f]=it,i.pointShadowMap[f]=et,i.pointShadowMatrix[f]=N.shadow.matrix,v++}i.point[f]=Y,f++}else if(N.isHemisphereLight){const Y=t.get(N);Y.skyColor.copy(N.color).multiplyScalar(q),Y.groundColor.copy(N.groundColor).multiplyScalar(q),i.hemi[E]=Y,E++}}C>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const L=i.hash;(L.sunLength!==p||L.directionalLength!==m||L.pointLength!==f||L.spotLength!==b||L.rectAreaLength!==C||L.hemiLength!==E||L.numSunShadows!==M||L.numDirectionalShadows!==_||L.numPointShadows!==v||L.numSpotShadows!==w||L.numSpotMaps!==g||L.numLightProbes!==P)&&(i.sun.length=p,i.directional.length=m,i.spot.length=b,i.rectArea.length=C,i.point.length=f,i.hemi.length=E,i.sunShadow.length=M,i.sunShadowMap.length=M,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.directionalShadowMatrix.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.pointShadowMatrix.length=v,i.spotShadow.length=w,i.spotShadowMap.length=w,i.spotLightMatrix.length=w+g-T,i.spotLightMap.length=g,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,L.sunLength=p,L.directionalLength=m,L.pointLength=f,L.spotLength=b,L.rectAreaLength=C,L.hemiLength=E,L.numSunShadows=M,L.numDirectionalShadows=_,L.numPointShadows=v,L.numSpotShadows=w,L.numSpotMaps=g,L.numLightProbes=P,i.version=C_++)}function c(l,h){let d=0,u=0,p=0,M=0,S=0,m=0;const f=h.matrixWorldInverse;for(let b=0,C=l.length;b<C;b++){const E=l[b];if(E.isSunLight){const _=i.sun[d];_.direction.setFromMatrixPosition(E.matrixWorld),_.direction.transformDirection(f),d++}else if(E.isDirectionalLight){const _=i.directional[u];_.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(f),u++}else if(E.isSpotLight){const _=i.spot[M];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(f),_.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(f),M++}else if(E.isRectAreaLight){const _=i.rectArea[S];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(f),a.identity(),s.copy(E.matrixWorld),s.premultiply(f),a.extractRotation(s),_.halfWidth.set(E.width*.5,0,0),_.halfHeight.set(0,E.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),S++}else if(E.isPointLight){const _=i.point[p];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(f),p++}else if(E.isHemisphereLight){const _=i.hemi[m];_.direction.setFromMatrixPosition(E.matrixWorld),_.direction.transformDirection(f),m++}}}return{setup:o,setupView:c,state:i}}function Iu(n){const t=new D_(n),e=[],i=[],r=[];function s(u){d.camera=u,e.length=0,i.length=0,r.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function c(u){r.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}const d={lightsArray:e,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function L_(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Iu(n),t.set(r,[o])):s>=a.length?(o=new Iu(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const I_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U_=`uniform sampler2D shadow_pass;
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
}`,N_=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],F_=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],Uu=new Te,es=new A,Do=new A;function O_(n,t,e){let i=new Jl;const r=new Pt,s=new Pt,a=new Re,o=new Vf,c=new Wf,l={},h=e.maxTextureSize,d={[ji]:fn,[fn]:ji,[xn]:xn},u=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:I_,fragmentShader:U_}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const M=new Ue;M.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Ot(M,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oa;let f=this.type;this.render=function(v,w,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;this.type===Ku&&(It("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=oa);const T=n.getRenderTarget(),P=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Si),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=f!==this.type;B&&w.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(k=>k.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,k=v.length;N<k;N++){const q=v[N],X=q.shadow;if(X===void 0){It("WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const et=X.getFrameExtents();r.multiply(et),s.copy(X.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/et.x),r.x=s.x*et.x,X.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/et.y),r.y=s.y*et.y,X.mapSize.y=s.y));const Y=n.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Y,X.map===null||B===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===is){if(q.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Hn(r.x,r.y,{format:er,type:ai,minFilter:tn,magFilter:tn,generateMipmaps:!1}),X.map.texture.name=q.name+".shadowMap",X.map.depthTexture=new ps(r.x,r.y,jn),X.map.depthTexture.name=q.name+".shadowMapDepth",X.map.depthTexture.format=Ei,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ke,X.map.depthTexture.magFilter=Ke}else q.isPointLight?(X.map=new Ch(r.x),X.map.depthTexture=new Ff(r.x,si)):(X.map=new Hn(r.x,r.y),X.map.depthTexture=new ps(r.x,r.y,si)),X.map.depthTexture.name=q.name+".shadowMap",X.map.depthTexture.format=Ei,this.type===oa?(X.map.depthTexture.compareFunction=Y?Yl:Xl,X.map.depthTexture.minFilter=tn,X.map.depthTexture.magFilter=tn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ke,X.map.depthTexture.magFilter=Ke);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==r.x||X.map.height!==r.y)&&X.map.setSize(r.x,r.y);const Q=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();q.isPointLight!==!0&&X.updateMatrices(q,g);for(let it=0;it<Q;it++){const lt=X.getCamera(it);if(q.isPointLight){const yt=X.camera,pe=X.matrix,Kt=q.distance||yt.far;Kt!==yt.far&&(yt.far=Kt,yt.updateProjectionMatrix()),es.setFromMatrixPosition(q.matrixWorld),yt.position.copy(es),Do.copy(yt.position),Do.add(N_[it]),yt.up.copy(F_[it]),yt.lookAt(Do),yt.updateMatrixWorld(),pe.makeTranslation(-es.x,-es.y,-es.z),Uu.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Uu,yt.coordinateSystem,yt.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)n.setRenderTarget(X.map,it),n.clear();else{it===0&&(n.setRenderTarget(X.map),n.clear());const yt=X.getViewport(it);a.set(s.x*yt.x,s.y*yt.y,s.x*yt.z,s.y*yt.w),O.viewport(a)}i=X.getFrustum(it),E(w,g,lt,q,this.type)}X.isPointLightShadow!==!0&&this.type===is&&b(X,g),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(T,P,L)};function b(v,w){const g=t.update(S);u.defines.VSM_SAMPLES!==v.blurSamples&&(u.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null?v.mapPass=new Hn(r.x,r.y,{format:er,type:ai}):(v.mapPass.width!==v.map.width||v.mapPass.height!==v.map.height)&&v.mapPass.setSize(v.map.width,v.map.height),u.uniforms.shadow_pass.value=v.map.depthTexture,u.uniforms.resolution.value.set(v.map.width,v.map.height),u.uniforms.radius.value=v.radius,n.setRenderTarget(v.mapPass),n.clear(),n.renderBufferDirect(w,null,g,u,S,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value.set(v.map.width,v.map.height),p.uniforms.radius.value=v.radius,n.setRenderTarget(v.map),n.clear(),n.renderBufferDirect(w,null,g,p,S,null)}function C(v,w,g,T){let P=null;const L=g.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(L!==void 0)P=L;else if(P=g.isPointLight===!0?c:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const O=P.uuid,B=w.uuid;let N=l[O];N===void 0&&(N={},l[O]=N);let k=N[B];k===void 0&&(k=P.clone(),N[B]=k,w.addEventListener("dispose",_)),P=k}if(P.visible=w.visible,P.wireframe=w.wireframe,T===is?P.side=w.shadowSide!==null?w.shadowSide:w.side:P.side=w.shadowSide!==null?w.shadowSide:d[w.side],P.alphaMap=w.alphaMap,P.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,P.map=w.map,P.clipShadows=w.clipShadows,P.clippingPlanes=w.clippingPlanes,P.clipIntersection=w.clipIntersection,P.displacementMap=w.displacementMap,P.displacementScale=w.displacementScale,P.displacementBias=w.displacementBias,P.wireframeLinewidth=w.wireframeLinewidth,P.linewidth=w.linewidth,g.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const O=n.properties.get(P);O.light=g}return P}function E(v,w,g,T,P){if(v.visible===!1)return;if(v.layers.test(w.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&P===is)&&(!v.frustumCulled||v.intersectsFrustum(i))){v.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,v.matrixWorld);const B=t.update(v),N=v.material;if(Array.isArray(N)){const k=B.groups;for(let q=0,X=k.length;q<X;q++){const et=k[q],Y=N[et.materialIndex];if(Y&&Y.visible){const Q=C(v,Y,T,P);v.onBeforeShadow(n,v,w,g,B,Q,et),n.renderBufferDirect(g,null,B,Q,v,et),v.onAfterShadow(n,v,w,g,B,Q,et)}}}else if(N.visible){const k=C(v,N,T,P);v.onBeforeShadow(n,v,w,g,B,k,null),n.renderBufferDirect(g,null,B,k,v,null),v.onAfterShadow(n,v,w,g,B,k,null)}}const O=v.children;for(let B=0,N=O.length;B<N;B++)E(O[B],w,g,T,P)}function _(v){v.target.removeEventListener("dispose",_);for(const g in l){const T=l[g],P=v.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function B_(n,t){function e(){let U=!1;const dt=new Re;let J=null;const ft=new Re(0,0,0,0);return{setMask:function(xt){J!==xt&&!U&&(n.colorMask(xt,xt,xt,xt),J=xt)},setLocked:function(xt){U=xt},setClear:function(xt,rt,Dt,wt,ge){ge===!0&&(xt*=wt,rt*=wt,Dt*=wt),dt.set(xt,rt,Dt,wt),ft.equals(dt)===!1&&(n.clearColor(xt,rt,Dt,wt),ft.copy(dt))},reset:function(){U=!1,J=null,ft.set(-1,0,0,0)}}}function i(){let U=!1,dt=!1,J=null,ft=null,xt=null;return{setReversed:function(rt){if(dt!==rt){const Dt=t.get("EXT_clip_control");rt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),dt=rt;const wt=xt;xt=null,this.setClear(wt)}},getReversed:function(){return dt},setTest:function(rt){rt?nt(n.DEPTH_TEST):bt(n.DEPTH_TEST)},setMask:function(rt){J!==rt&&!U&&(n.depthMask(rt),J=rt)},setFunc:function(rt){if(dt&&(rt=Wd[rt]),ft!==rt){switch(rt){case zo:n.depthFunc(n.NEVER);break;case ko:n.depthFunc(n.ALWAYS);break;case Go:n.depthFunc(n.LESS);break;case cs:n.depthFunc(n.LEQUAL);break;case Ho:n.depthFunc(n.EQUAL);break;case Vo:n.depthFunc(n.GEQUAL);break;case Wo:n.depthFunc(n.GREATER);break;case Xo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ft=rt}},setLocked:function(rt){U=rt},setClear:function(rt){xt!==rt&&(xt=rt,dt&&(rt=1-rt),n.clearDepth(rt))},reset:function(){U=!1,J=null,ft=null,xt=null,dt=!1}}}function r(){let U=!1,dt=null,J=null,ft=null,xt=null,rt=null,Dt=null,wt=null,ge=null;return{setTest:function(ie){U||(ie?nt(n.STENCIL_TEST):bt(n.STENCIL_TEST))},setMask:function(ie){dt!==ie&&!U&&(n.stencilMask(ie),dt=ie)},setFunc:function(ie,Dn,Yn){(J!==ie||ft!==Dn||xt!==Yn)&&(n.stencilFunc(ie,Dn,Yn),J=ie,ft=Dn,xt=Yn)},setOp:function(ie,Dn,Yn){(rt!==ie||Dt!==Dn||wt!==Yn)&&(n.stencilOp(ie,Dn,Yn),rt=ie,Dt=Dn,wt=Yn)},setLocked:function(ie){U=ie},setClear:function(ie){ge!==ie&&(n.clearStencil(ie),ge=ie)},reset:function(){U=!1,dt=null,J=null,ft=null,xt=null,rt=null,Dt=null,wt=null,ge=null}}}const s=new e,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let h={},d={},u={},p=new WeakMap,M=[],S=null,m=!1,f=null,b=null,C=null,E=null,_=null,v=null,w=null,g=new Ht(0,0,0),T=0,P=!1,L=null,O=null,B=null,N=null,k=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,et=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=et>=1):Y.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=et>=2);let Q=null,it={};const lt=n.getParameter(n.SCISSOR_BOX),yt=n.getParameter(n.VIEWPORT),pe=new Re().fromArray(lt),Kt=new Re().fromArray(yt);function te(U,dt,J,ft){const xt=new Uint8Array(4),rt=n.createTexture();n.bindTexture(U,rt),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Dt=0;Dt<J;Dt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(dt,0,n.RGBA,1,1,ft,0,n.RGBA,n.UNSIGNED_BYTE,xt):n.texImage2D(dt+Dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xt);return rt}const K={};K[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(n.DEPTH_TEST),a.setFunc(cs),Xt(!1),ye(Lc),nt(n.CULL_FACE),jt(Si);function nt(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function bt(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Ut(U,dt){return u[U]!==dt?(n.bindFramebuffer(U,dt),u[U]=dt,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=dt),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=dt),!0):!1}function Mt(U,dt){let J=M,ft=!1;if(U){J=p.get(dt),J===void 0&&(J=[],p.set(dt,J));const xt=U.textures;if(J.length!==xt.length||J[0]!==n.COLOR_ATTACHMENT0){for(let rt=0,Dt=xt.length;rt<Dt;rt++)J[rt]=n.COLOR_ATTACHMENT0+rt;J.length=xt.length,ft=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,ft=!0);ft&&n.drawBuffers(J)}function kt(U){return S!==U?(n.useProgram(U),S=U,!0):!1}const Be={[Rr]:n.FUNC_ADD,[dd]:n.FUNC_SUBTRACT,[fd]:n.FUNC_REVERSE_SUBTRACT};Be[pd]=n.MIN,Be[md]=n.MAX;const Vt={[gd]:n.ZERO,[_d]:n.ONE,[xd]:n.SRC_COLOR,[Zu]:n.SRC_ALPHA,[Ed]:n.SRC_ALPHA_SATURATE,[yd]:n.DST_COLOR,[Md]:n.DST_ALPHA,[vd]:n.ONE_MINUS_SRC_COLOR,[Ju]:n.ONE_MINUS_SRC_ALPHA,[bd]:n.ONE_MINUS_DST_COLOR,[Sd]:n.ONE_MINUS_DST_ALPHA,[Td]:n.CONSTANT_COLOR,[wd]:n.ONE_MINUS_CONSTANT_COLOR,[Ad]:n.CONSTANT_ALPHA,[Rd]:n.ONE_MINUS_CONSTANT_ALPHA};function jt(U,dt,J,ft,xt,rt,Dt,wt,ge,ie){if(U===Si){m===!0&&(bt(n.BLEND),m=!1);return}if(m===!1&&(nt(n.BLEND),m=!0),U!==hd){if(U!==f||ie!==P){if((b!==Rr||_!==Rr)&&(n.blendEquation(n.FUNC_ADD),b=Rr,_=Rr),ie)switch(U){case as:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ic:n.blendFunc(n.ONE,n.ONE);break;case Uc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Qt("WebGLState: Invalid blending: ",U);break}else switch(U){case as:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ic:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Uc:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nc:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",U);break}C=null,E=null,v=null,w=null,g.set(0,0,0),T=0,f=U,P=ie}return}xt=xt||dt,rt=rt||J,Dt=Dt||ft,(dt!==b||xt!==_)&&(n.blendEquationSeparate(Be[dt],Be[xt]),b=dt,_=xt),(J!==C||ft!==E||rt!==v||Dt!==w)&&(n.blendFuncSeparate(Vt[J],Vt[ft],Vt[rt],Vt[Dt]),C=J,E=ft,v=rt,w=Dt),(wt.equals(g)===!1||ge!==T)&&(n.blendColor(wt.r,wt.g,wt.b,ge),g.copy(wt),T=ge),f=U,P=!1}function me(U,dt){U.side===xn?bt(n.CULL_FACE):nt(n.CULL_FACE);let J=U.side===fn;dt&&(J=!J),Xt(J),U.blending===as&&U.transparent===!1?jt(Si):jt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const ft=U.stencilWrite;o.setTest(ft),ft&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),un(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?nt(n.SAMPLE_ALPHA_TO_COVERAGE):bt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(U){L!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),L=U)}function ye(U){U!==cd?(nt(n.CULL_FACE),U!==O&&(U===Lc?n.cullFace(n.BACK):U===ud?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):bt(n.CULL_FACE),O=U}function Ye(U){U!==B&&(X&&n.lineWidth(U),B=U)}function un(U,dt,J){U?(nt(n.POLYGON_OFFSET_FILL),(N!==dt||k!==J)&&(N=dt,k=J,a.getReversed()&&(dt=-dt),n.polygonOffset(dt,J))):bt(n.POLYGON_OFFSET_FILL)}function we(U){U?nt(n.SCISSOR_TEST):bt(n.SCISSOR_TEST)}function Ne(U){U===void 0&&(U=n.TEXTURE0+q-1),Q!==U&&(n.activeTexture(U),Q=U)}function F(U,dt,J){J===void 0&&(Q===null?J=n.TEXTURE0+q-1:J=Q);let ft=it[J];ft===void 0&&(ft={type:void 0,texture:void 0},it[J]=ft),(ft.type!==U||ft.texture!==dt)&&(Q!==J&&(n.activeTexture(J),Q=J),n.bindTexture(U,dt||K[U]),ft.type=U,ft.texture=dt)}function Ze(){const U=it[Q];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function oe(){try{n.compressedTexImage2D(...arguments)}catch(U){Qt("WebGLState:",U)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(U){Qt("WebGLState:",U)}}function x(){try{n.texSubImage2D(...arguments)}catch(U){Qt("WebGLState:",U)}}function z(){try{n.texSubImage3D(...arguments)}catch(U){Qt("WebGLState:",U)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(U){Qt("WebGLState:",U)}}function $(){try{n.compressedTexSubImage3D(...arguments)}catch(U){Qt("WebGLState:",U)}}function ot(){try{n.texStorage2D(...arguments)}catch(U){Qt("WebGLState:",U)}}function ct(){try{n.texStorage3D(...arguments)}catch(U){Qt("WebGLState:",U)}}function Z(){try{n.texImage2D(...arguments)}catch(U){Qt("WebGLState:",U)}}function j(){try{n.texImage3D(...arguments)}catch(U){Qt("WebGLState:",U)}}function ut(U){return d[U]!==void 0?d[U]:n.getParameter(U)}function Rt(U,dt){d[U]!==dt&&(n.pixelStorei(U,dt),d[U]=dt)}function pt(U){pe.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),pe.copy(U))}function ht(U){Kt.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Kt.copy(U))}function Ct(U,dt){let J=l.get(dt);J===void 0&&(J=new WeakMap,l.set(dt,J));let ft=J.get(U);ft===void 0&&(ft=n.getUniformBlockIndex(dt,U.name),J.set(U,ft))}function Lt(U,dt){const ft=l.get(dt).get(U);c.get(dt)!==ft&&(n.uniformBlockBinding(dt,ft,U.__bindingPointIndex),c.set(dt,ft))}function Ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},Q=null,it={},u={},p=new WeakMap,M=[],S=null,m=!1,f=null,b=null,C=null,E=null,_=null,v=null,w=null,g=new Ht(0,0,0),T=0,P=!1,L=null,O=null,B=null,N=null,k=null,pe.set(0,0,n.canvas.width,n.canvas.height),Kt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:nt,disable:bt,bindFramebuffer:Ut,drawBuffers:Mt,useProgram:kt,setBlending:jt,setMaterial:me,setFlipSided:Xt,setCullFace:ye,setLineWidth:Ye,setPolygonOffset:un,setScissorTest:we,activeTexture:Ne,bindTexture:F,unbindTexture:Ze,compressedTexImage2D:oe,compressedTexImage3D:R,texImage2D:Z,texImage3D:j,pixelStorei:Rt,getParameter:ut,updateUBOMapping:Ct,uniformBlockBinding:Lt,texStorage2D:ot,texStorage3D:ct,texSubImage2D:x,texSubImage3D:z,compressedTexSubImage2D:V,compressedTexSubImage3D:$,scissor:pt,viewport:ht,reset:Ft}}function z_(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Pt,h=new WeakMap,d=new Set;let u;const p=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,x){return M?new OffscreenCanvas(R,x):ya("canvas")}function m(R,x,z){let V=1;const $=oe(R);if(($.width>z||$.height>z)&&(V=z/Math.max($.width,$.height)),V<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ot=Math.floor(V*$.width),ct=Math.floor(V*$.height);u===void 0&&(u=S(ot,ct));const Z=x?S(ot,ct):u;return Z.width=ot,Z.height=ct,Z.getContext("2d").drawImage(R,0,0,ot,ct),It("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ot+"x"+ct+")."),Z}else return"data"in R&&It("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function f(R){return R.generateMipmaps}function b(R){n.generateMipmap(R)}function C(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(R,x,z,V,$,ot=!1){if(R!==null){if(n[R]!==void 0)return n[R];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ct;V&&(ct=t.get("EXT_texture_norm16"),ct||It("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=x;if(x===n.RED&&(z===n.FLOAT&&(Z=n.R32F),z===n.HALF_FLOAT&&(Z=n.R16F),z===n.UNSIGNED_BYTE&&(Z=n.R8),z===n.UNSIGNED_SHORT&&ct&&(Z=ct.R16_EXT),z===n.SHORT&&ct&&(Z=ct.R16_SNORM_EXT)),x===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.R8UI),z===n.UNSIGNED_SHORT&&(Z=n.R16UI),z===n.UNSIGNED_INT&&(Z=n.R32UI),z===n.BYTE&&(Z=n.R8I),z===n.SHORT&&(Z=n.R16I),z===n.INT&&(Z=n.R32I)),x===n.RG&&(z===n.FLOAT&&(Z=n.RG32F),z===n.HALF_FLOAT&&(Z=n.RG16F),z===n.UNSIGNED_BYTE&&(Z=n.RG8),z===n.UNSIGNED_SHORT&&ct&&(Z=ct.RG16_EXT),z===n.SHORT&&ct&&(Z=ct.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RG8UI),z===n.UNSIGNED_SHORT&&(Z=n.RG16UI),z===n.UNSIGNED_INT&&(Z=n.RG32UI),z===n.BYTE&&(Z=n.RG8I),z===n.SHORT&&(Z=n.RG16I),z===n.INT&&(Z=n.RG32I)),x===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),z===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),z===n.UNSIGNED_INT&&(Z=n.RGB32UI),z===n.BYTE&&(Z=n.RGB8I),z===n.SHORT&&(Z=n.RGB16I),z===n.INT&&(Z=n.RGB32I)),x===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),z===n.UNSIGNED_INT&&(Z=n.RGBA32UI),z===n.BYTE&&(Z=n.RGBA8I),z===n.SHORT&&(Z=n.RGBA16I),z===n.INT&&(Z=n.RGBA32I)),x===n.RGB&&(z===n.UNSIGNED_SHORT&&ct&&(Z=ct.RGB16_EXT),z===n.SHORT&&ct&&(Z=ct.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),x===n.RGBA){const j=ot?Sa:qt.getTransfer($);z===n.FLOAT&&(Z=n.RGBA32F),z===n.HALF_FLOAT&&(Z=n.RGBA16F),z===n.UNSIGNED_BYTE&&(Z=j===le?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&ct&&(Z=ct.RGBA16_EXT),z===n.SHORT&&ct&&(Z=ct.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(R,x){let z;return R?x===null||x===si||x===hs?z=n.DEPTH24_STENCIL8:x===jn?z=n.DEPTH32F_STENCIL8:x===us&&(z=n.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===si||x===hs?z=n.DEPTH_COMPONENT24:x===jn?z=n.DEPTH_COMPONENT32F:x===us&&(z=n.DEPTH_COMPONENT16),z}function v(R,x){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ke&&R.minFilter!==tn?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function w(R){const x=R.target;x.removeEventListener("dispose",w),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function g(R){const x=R.target;x.removeEventListener("dispose",g),L(x)}function T(R){const x=i.get(R);if(x.__webglInit===void 0)return;const z=R.source,V=p.get(z);if(V){const $=V[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&P(R),Object.keys(V).length===0&&p.delete(z)}i.remove(R)}function P(R){const x=i.get(R);n.deleteTexture(x.__webglTexture);const z=R.source,V=p.get(z);delete V[x.__cacheKey],a.memory.textures--}function L(R){const x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(x.__webglFramebuffer[V]))for(let $=0;$<x.__webglFramebuffer[V].length;$++)n.deleteFramebuffer(x.__webglFramebuffer[V][$]);else n.deleteFramebuffer(x.__webglFramebuffer[V]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[V])}else{if(Array.isArray(x.__webglFramebuffer))for(let V=0;V<x.__webglFramebuffer.length;V++)n.deleteFramebuffer(x.__webglFramebuffer[V]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let V=0;V<x.__webglColorRenderbuffer.length;V++)x.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[V]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const z=R.textures;for(let V=0,$=z.length;V<$;V++){const ot=i.get(z[V]);ot.__webglTexture&&(n.deleteTexture(ot.__webglTexture),a.memory.textures--),i.remove(z[V])}i.remove(R)}let O=0;function B(){O=0}function N(){return O}function k(R){O=R}function q(){const R=O;return R>=r.maxTextures&&It("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),O+=1,R}function X(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function et(R,x){const z=i.get(R);if(R.isVideoTexture&&F(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){const V=R.image;if(V===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(z,R,x);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+x)}function Y(R,x){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){bt(z,R,x);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+x)}function Q(R,x){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){bt(z,R,x);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+x)}function it(R,x){const z=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){Ut(z,R,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+x)}const lt={[Yo]:n.REPEAT,[Mi]:n.CLAMP_TO_EDGE,[qo]:n.MIRRORED_REPEAT},yt={[Ke]:n.NEAREST,[Dd]:n.NEAREST_MIPMAP_NEAREST,[Rs]:n.NEAREST_MIPMAP_LINEAR,[tn]:n.LINEAR,[ja]:n.LINEAR_MIPMAP_NEAREST,[Zi]:n.LINEAR_MIPMAP_LINEAR},pe={[Nd]:n.NEVER,[kd]:n.ALWAYS,[Fd]:n.LESS,[Xl]:n.LEQUAL,[Od]:n.EQUAL,[Yl]:n.GEQUAL,[Bd]:n.GREATER,[zd]:n.NOTEQUAL};function Kt(R,x){if(x.type===jn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===tn||x.magFilter===ja||x.magFilter===Rs||x.magFilter===Zi||x.minFilter===tn||x.minFilter===ja||x.minFilter===Rs||x.minFilter===Zi)&&It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,lt[x.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,lt[x.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,lt[x.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,yt[x.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,yt[x.minFilter]),x.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,pe[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ke||x.minFilter!==Rs&&x.minFilter!==Zi||x.type===jn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function te(R,x){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",w));const V=x.source;let $=p.get(V);$===void 0&&($={},p.set(V,$));const ot=X(x);if(ot!==R.__cacheKey){$[ot]===void 0&&($[ot]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),$[ot].usedTimes++;const ct=$[R.__cacheKey];ct!==void 0&&($[R.__cacheKey].usedTimes--,ct.usedTimes===0&&P(x)),R.__cacheKey=ot,R.__webglTexture=$[ot].texture}return z}function K(R,x,z){return Math.floor(Math.floor(R/z)/x)}function nt(R,x,z,V){const ot=R.updateRanges;if(ot.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,z,V,x.data);else{ot.sort((Rt,pt)=>Rt.start-pt.start);let ct=0;for(let Rt=1;Rt<ot.length;Rt++){const pt=ot[ct],ht=ot[Rt],Ct=pt.start+pt.count,Lt=K(ht.start,x.width,4),Ft=K(pt.start,x.width,4);ht.start<=Ct+1&&Lt===Ft&&K(ht.start+ht.count-1,x.width,4)===Lt?pt.count=Math.max(pt.count,ht.start+ht.count-pt.start):(++ct,ot[ct]=ht)}ot.length=ct+1;const Z=e.getParameter(n.UNPACK_ROW_LENGTH),j=e.getParameter(n.UNPACK_SKIP_PIXELS),ut=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Rt=0,pt=ot.length;Rt<pt;Rt++){const ht=ot[Rt],Ct=Math.floor(ht.start/4),Lt=Math.ceil(ht.count/4),Ft=Ct%x.width,U=Math.floor(Ct/x.width),dt=Lt,J=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Ft),e.pixelStorei(n.UNPACK_SKIP_ROWS,U),e.texSubImage2D(n.TEXTURE_2D,0,Ft,U,dt,J,z,V,x.data)}R.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Z),e.pixelStorei(n.UNPACK_SKIP_PIXELS,j),e.pixelStorei(n.UNPACK_SKIP_ROWS,ut)}}function bt(R,x,z){let V=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(V=n.TEXTURE_3D);const $=te(R,x),ot=x.source;e.bindTexture(V,R.__webglTexture,n.TEXTURE0+z);const ct=i.get(ot);if(ot.version!==ct.__version||$===!0){if(e.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const J=qt.getPrimaries(qt.workingColorSpace),ft=x.colorSpace===Oi?null:qt.getPrimaries(x.colorSpace),xt=x.colorSpace===Oi||J===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let j=m(x.image,!1,r.maxTextureSize);j=Ze(x,j);const ut=s.convert(x.format,x.colorSpace),Rt=s.convert(x.type);let pt=E(x.internalFormat,ut,Rt,x.normalized,x.colorSpace,x.isVideoTexture);Kt(V,x);let ht;const Ct=x.mipmaps,Lt=x.isVideoTexture!==!0,Ft=ct.__version===void 0||$===!0,U=ot.dataReady,dt=v(x,j);if(x.isDepthTexture)pt=_(x.format===Ji,x.type),Ft&&(Lt?e.texStorage2D(n.TEXTURE_2D,1,pt,j.width,j.height):e.texImage2D(n.TEXTURE_2D,0,pt,j.width,j.height,0,ut,Rt,null));else if(x.isDataTexture)if(Ct.length>0){Lt&&Ft&&e.texStorage2D(n.TEXTURE_2D,dt,pt,Ct[0].width,Ct[0].height);for(let J=0,ft=Ct.length;J<ft;J++)ht=Ct[J],Lt?U&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,ht.width,ht.height,ut,Rt,ht.data):e.texImage2D(n.TEXTURE_2D,J,pt,ht.width,ht.height,0,ut,Rt,ht.data);x.generateMipmaps=!1}else Lt?(Ft&&e.texStorage2D(n.TEXTURE_2D,dt,pt,j.width,j.height),U&&nt(x,j,ut,Rt)):e.texImage2D(n.TEXTURE_2D,0,pt,j.width,j.height,0,ut,Rt,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Lt&&Ft&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,pt,Ct[0].width,Ct[0].height,j.depth);for(let J=0,ft=Ct.length;J<ft;J++)if(ht=Ct[J],x.format!==Gn)if(ut!==null)if(Lt){if(U)if(x.layerUpdates.size>0){const xt=du(ht.width,ht.height,x.format,x.type);for(const rt of x.layerUpdates){const Dt=ht.data.subarray(rt*xt/ht.data.BYTES_PER_ELEMENT,(rt+1)*xt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,rt,ht.width,ht.height,1,ut,Dt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ht.width,ht.height,j.depth,ut,ht.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,pt,ht.width,ht.height,j.depth,0,ht.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ht.width,ht.height,j.depth,ut,Rt,ht.data):e.texImage3D(n.TEXTURE_2D_ARRAY,J,pt,ht.width,ht.height,j.depth,0,ut,Rt,ht.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Lt&&Ft&&e.texStorage2D(n.TEXTURE_2D,dt,pt,Ct[0].width,Ct[0].height);for(let J=0,ft=Ct.length;J<ft;J++)ht=Ct[J],x.format!==Gn?ut!==null?Lt?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,ht.width,ht.height,ut,ht.data):e.compressedTexImage2D(n.TEXTURE_2D,J,pt,ht.width,ht.height,0,ht.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?U&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,ht.width,ht.height,ut,Rt,ht.data):e.texImage2D(n.TEXTURE_2D,J,pt,ht.width,ht.height,0,ut,Rt,ht.data)}else if(x.isDataArrayTexture)if(Lt){if(Ft&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,pt,j.width,j.height,j.depth),U)if(x.layerUpdates.size>0){const J=du(j.width,j.height,x.format,x.type);for(const ft of x.layerUpdates){const xt=j.data.subarray(ft*J/j.data.BYTES_PER_ELEMENT,(ft+1)*J/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ft,j.width,j.height,1,ut,Rt,xt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ut,Rt,j.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,pt,j.width,j.height,j.depth,0,ut,Rt,j.data);else if(x.isData3DTexture)Lt?(Ft&&e.texStorage3D(n.TEXTURE_3D,dt,pt,j.width,j.height,j.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ut,Rt,j.data)):e.texImage3D(n.TEXTURE_3D,0,pt,j.width,j.height,j.depth,0,ut,Rt,j.data);else if(x.isFramebufferTexture){if(Ft)if(Lt)e.texStorage2D(n.TEXTURE_2D,dt,pt,j.width,j.height);else{let J=j.width,ft=j.height;for(let xt=0;xt<dt;xt++)e.texImage2D(n.TEXTURE_2D,xt,pt,J,ft,0,ut,Rt,null),J>>=1,ft>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){const J=n.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),j.parentNode!==J){J.appendChild(j),d.add(x),J.onpaint=ft=>{const xt=ft.changedElements;for(const rt of d)xt.includes(rt.image)&&(rt.needsUpdate=!0)},J.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,j);else{const xt=n.RGBA,rt=n.RGBA,Dt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,xt,rt,Dt,j)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ct.length>0){if(Lt&&Ft){const J=oe(Ct[0]);e.texStorage2D(n.TEXTURE_2D,dt,pt,J.width,J.height)}for(let J=0,ft=Ct.length;J<ft;J++)ht=Ct[J],Lt?U&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,ut,Rt,ht):e.texImage2D(n.TEXTURE_2D,J,pt,ut,Rt,ht);x.generateMipmaps=!1}else if(Lt){if(Ft){const J=oe(j);e.texStorage2D(n.TEXTURE_2D,dt,pt,J.width,J.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut,Rt,j)}else e.texImage2D(n.TEXTURE_2D,0,pt,ut,Rt,j);f(x)&&b(V),ct.__version=ot.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Ut(R,x,z){if(x.image.length!==6)return;const V=te(R,x),$=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+z);const ot=i.get($);if($.version!==ot.__version||V===!0){e.activeTexture(n.TEXTURE0+z);const ct=qt.getPrimaries(qt.workingColorSpace),Z=x.colorSpace===Oi?null:qt.getPrimaries(x.colorSpace),j=x.colorSpace===Oi||ct===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const ut=x.isCompressedTexture||x.image[0].isCompressedTexture,Rt=x.image[0]&&x.image[0].isDataTexture,pt=[];for(let rt=0;rt<6;rt++)!ut&&!Rt?pt[rt]=m(x.image[rt],!0,r.maxCubemapSize):pt[rt]=Rt?x.image[rt].image:x.image[rt],pt[rt]=Ze(x,pt[rt]);const ht=pt[0],Ct=s.convert(x.format,x.colorSpace),Lt=s.convert(x.type),Ft=E(x.internalFormat,Ct,Lt,x.normalized,x.colorSpace),U=x.isVideoTexture!==!0,dt=ot.__version===void 0||V===!0,J=$.dataReady;let ft=v(x,ht);Kt(n.TEXTURE_CUBE_MAP,x);let xt;if(ut){U&&dt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Ft,ht.width,ht.height);for(let rt=0;rt<6;rt++){xt=pt[rt].mipmaps;for(let Dt=0;Dt<xt.length;Dt++){const wt=xt[Dt];x.format!==Gn?Ct!==null?U?J&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt,0,0,wt.width,wt.height,Ct,wt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt,Ft,wt.width,wt.height,0,wt.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt,0,0,wt.width,wt.height,Ct,Lt,wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt,Ft,wt.width,wt.height,0,Ct,Lt,wt.data)}}}else{if(xt=x.mipmaps,U&&dt){xt.length>0&&ft++;const rt=oe(pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Ft,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Rt){U?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,pt[rt].width,pt[rt].height,Ct,Lt,pt[rt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Ft,pt[rt].width,pt[rt].height,0,Ct,Lt,pt[rt].data);for(let Dt=0;Dt<xt.length;Dt++){const ge=xt[Dt].image[rt].image;U?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt+1,0,0,ge.width,ge.height,Ct,Lt,ge.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt+1,Ft,ge.width,ge.height,0,Ct,Lt,ge.data)}}else{U?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ct,Lt,pt[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Ft,Ct,Lt,pt[rt]);for(let Dt=0;Dt<xt.length;Dt++){const wt=xt[Dt];U?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt+1,0,0,Ct,Lt,wt.image[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt+1,Ft,Ct,Lt,wt.image[rt])}}}f(x)&&b(n.TEXTURE_CUBE_MAP),ot.__version=$.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Mt(R,x,z,V,$,ot){const ct=s.convert(z.format,z.colorSpace),Z=s.convert(z.type),j=E(z.internalFormat,ct,Z,z.normalized,z.colorSpace),ut=i.get(x),Rt=i.get(z);if(Rt.__renderTarget=x,!ut.__hasExternalTextures){const pt=Math.max(1,x.width>>ot),ht=Math.max(1,x.height>>ot);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?e.texImage3D($,ot,j,pt,ht,x.depth,0,ct,Z,null):e.texImage2D($,ot,j,pt,ht,0,ct,Z,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),Ne(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,$,Rt.__webglTexture,0,we(x)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,$,Rt.__webglTexture,ot),e.bindFramebuffer(n.FRAMEBUFFER,null)}function kt(R,x,z){if(n.bindRenderbuffer(n.RENDERBUFFER,R),x.depthBuffer){const V=x.depthTexture,$=V&&V.isDepthTexture?V.type:null,ot=_(x.stencilBuffer,$),ct=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ne(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we(x),ot,x.width,x.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,we(x),ot,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ot,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ct,n.RENDERBUFFER,R)}else{const V=x.textures;for(let $=0;$<V.length;$++){const ot=V[$],ct=s.convert(ot.format,ot.colorSpace),Z=s.convert(ot.type),j=E(ot.internalFormat,ct,Z,ot.normalized,ot.colorSpace);Ne(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we(x),j,x.width,x.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,we(x),j,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,j,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Be(R,x,z){const V=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=i.get(x.depthTexture);if($.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V){if($.__webglInit===void 0&&($.__webglInit=!0,x.depthTexture.addEventListener("dispose",w)),$.__webglTexture===void 0){$.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Kt(n.TEXTURE_CUBE_MAP,x.depthTexture);const ut=s.convert(x.depthTexture.format),Rt=s.convert(x.depthTexture.type);let pt;x.depthTexture.format===Ei?pt=n.DEPTH_COMPONENT24:x.depthTexture.format===Ji&&(pt=n.DEPTH24_STENCIL8);for(let ht=0;ht<6;ht++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,pt,x.width,x.height,0,ut,Rt,null)}}else et(x.depthTexture,0);const ot=$.__webglTexture,ct=we(x),Z=V?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,j=x.depthTexture.format===Ji?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ei)Ne(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,Z,ot,0,ct):n.framebufferTexture2D(n.FRAMEBUFFER,j,Z,ot,0);else if(x.depthTexture.format===Ji)Ne(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,Z,ot,0,ct):n.framebufferTexture2D(n.FRAMEBUFFER,j,Z,ot,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Vt(R){const x=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const V=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),V){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,V.removeEventListener("dispose",$)};V.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=V}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(z)for(let V=0;V<6;V++)Be(x.__webglFramebuffer[V],R,V);else{const V=R.texture.mipmaps;V&&V.length>0?Be(x.__webglFramebuffer[0],R,0):Be(x.__webglFramebuffer,R,0)}else if(z){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]===void 0)x.__webglDepthbuffer[V]=n.createRenderbuffer(),kt(x.__webglDepthbuffer[V],R,!1);else{const $=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=x.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,ot)}}else{const V=R.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),kt(x.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,ot)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function jt(R,x,z){const V=i.get(R);x!==void 0&&Mt(V.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Vt(R)}function me(R){const x=R.texture,z=i.get(R),V=i.get(x);R.addEventListener("dispose",g);const $=R.textures,ot=R.isWebGLCubeRenderTarget===!0,ct=$.length>1;if(ct||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=x.version,a.memory.textures++),ot){z.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[Z]=[];for(let j=0;j<x.mipmaps.length;j++)z.__webglFramebuffer[Z][j]=n.createFramebuffer()}else z.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let Z=0;Z<x.mipmaps.length;Z++)z.__webglFramebuffer[Z]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ct)for(let Z=0,j=$.length;Z<j;Z++){const ut=i.get($[Z]);ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&Ne(R)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Z=0;Z<$.length;Z++){const j=$[Z];z.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[Z]);const ut=s.convert(j.format,j.colorSpace),Rt=s.convert(j.type),pt=E(j.internalFormat,ut,Rt,j.normalized,j.colorSpace,R.isXRRenderTarget===!0),ht=we(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,pt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,z.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),kt(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ot){e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),Kt(n.TEXTURE_CUBE_MAP,x);for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)Mt(z.__webglFramebuffer[Z][j],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,j);else Mt(z.__webglFramebuffer[Z],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);f(x)&&b(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let Z=0,j=$.length;Z<j;Z++){const ut=$[Z],Rt=i.get(ut);let pt=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(pt,Rt.__webglTexture),Kt(pt,ut),Mt(z.__webglFramebuffer,R,ut,n.COLOR_ATTACHMENT0+Z,pt,0),f(ut)&&b(pt)}e.unbindTexture()}else{let Z=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Z,V.__webglTexture),Kt(Z,x),x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)Mt(z.__webglFramebuffer[j],R,x,n.COLOR_ATTACHMENT0,Z,j);else Mt(z.__webglFramebuffer,R,x,n.COLOR_ATTACHMENT0,Z,0);f(x)&&b(Z),e.unbindTexture()}R.depthBuffer&&Vt(R)}function Xt(R){const x=R.textures;for(let z=0,V=x.length;z<V;z++){const $=x[z];if(f($)){const ot=C(R),ct=i.get($).__webglTexture;e.bindTexture(ot,ct),b(ot),e.unbindTexture()}}}const ye=[],Ye=[];function un(R){if(R.samples>0){if(Ne(R)===!1){const x=R.textures,z=R.width,V=R.height;let $=n.COLOR_BUFFER_BIT;const ot=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=i.get(R),Z=x.length>1;if(Z)for(let ut=0;ut<x.length;ut++)e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);const j=R.texture.mipmaps;j&&j.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let ut=0;ut<x.length;ut++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);const Rt=i.get(x[ut]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Rt,0)}n.blitFramebuffer(0,0,z,V,0,0,z,V,$,n.NEAREST),c===!0&&(ye.length=0,Ye.length=0,ye.push(n.COLOR_ATTACHMENT0+ut),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(ye.push(ot),Ye.push(ot),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ye)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ye))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let ut=0;ut<x.length;ut++){e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);const Rt=i.get(x[ut]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,Rt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){const x=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function we(R){return Math.min(r.maxSamples,R.samples)}function Ne(R){const x=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function F(R){const x=a.render.frame;h.get(R)!==x&&(h.set(R,x),R.update())}function Ze(R,x){const z=R.colorSpace,V=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Ma&&z!==Oi&&(qt.getTransfer(z)===le?(V!==Gn||$!==vn)&&It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",z)),x}function oe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=B,this.getTextureUnits=N,this.setTextureUnits=k,this.setTexture2D=et,this.setTexture2DArray=Y,this.setTexture3D=Q,this.setTextureCube=it,this.rebindTextures=jt,this.setupRenderTarget=me,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=un,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function k_(n,t){function e(i,r=Oi){let s;const a=qt.getTransfer(r);if(i===vn)return n.UNSIGNED_BYTE;if(i===kl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Gl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===lh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ch)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ah)return n.BYTE;if(i===oh)return n.SHORT;if(i===us)return n.UNSIGNED_SHORT;if(i===zl)return n.INT;if(i===si)return n.UNSIGNED_INT;if(i===jn)return n.FLOAT;if(i===ai)return n.HALF_FLOAT;if(i===uh)return n.ALPHA;if(i===hh)return n.RGB;if(i===Gn)return n.RGBA;if(i===Ei)return n.DEPTH_COMPONENT;if(i===Ji)return n.DEPTH_STENCIL;if(i===dh)return n.RED;if(i===Hl)return n.RED_INTEGER;if(i===er)return n.RG;if(i===Vl)return n.RG_INTEGER;if(i===Wl)return n.RGBA_INTEGER;if(i===la||i===ca||i===ua||i===ha)if(a===le)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===la)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===la)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ca)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ua)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ha)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$o||i===Ko||i===Zo||i===Jo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===$o)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ko)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Zo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qo||i===jo||i===tl||i===el||i===nl||i===xa||i===il)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Qo||i===jo)return a===le?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===tl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===el)return s.COMPRESSED_R11_EAC;if(i===nl)return s.COMPRESSED_SIGNED_R11_EAC;if(i===xa)return s.COMPRESSED_RG11_EAC;if(i===il)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===rl||i===sl||i===al||i===ol||i===ll||i===cl||i===ul||i===hl||i===dl||i===fl||i===pl||i===ml||i===gl||i===_l)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===rl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===al)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ol)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ll)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ul)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ml)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_l)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xl||i===vl||i===Ml)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===xl)return a===le?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ml)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sl||i===yl||i===va||i===bl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Sl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===yl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===va)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const G_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H_=`
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

}`;class V_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new bh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ci({vertexShader:G_,fragmentShader:H_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ot(new Ai(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class W_ extends Gi{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,M=null;const S=typeof XRWebGLBinding<"u",m=new V_,f={},b=e.getContextAttributes();let C=null,E=null;const _=[],v=[],w=new Pt;let g=null,T=null;const P=new Tn;P.viewport=new Re;const L=new Tn;L.viewport=new Re;const O=[P,L],B=new Jf;let N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let nt=_[K];return nt===void 0&&(nt=new ao,_[K]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(K){let nt=_[K];return nt===void 0&&(nt=new ao,_[K]=nt),nt.getGripSpace()},this.getHand=function(K){let nt=_[K];return nt===void 0&&(nt=new ao,_[K]=nt),nt.getHandSpace()};function q(K){const nt=v.indexOf(K.inputSource);if(nt===-1)return;const bt=_[nt];bt!==void 0&&(bt.update(K.inputSource,K.frame,l||a),bt.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",et);for(let K=0;K<_.length;K++){const nt=v[K];nt!==null&&(v[K]=null,_[K].disconnect(nt))}N=null,k=null,m.reset();for(const K in f)delete f[K];if(t.setRenderTarget(C),p=null,u=null,d=null,r=null,E=null,te.stop(),i.isPresenting=!1,t.setPixelRatio(g),t.setSize(w.width,w.height,!1),T!==null){const K=T.camera;K.fov=T.fov,K.zoom=T.zoom,K.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(r,e)),d},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(C=t.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",X),r.addEventListener("inputsourceschange",et),b.xrCompatible!==!0&&await e.makeXRCompatible(),g=t.getPixelRatio(),t.getSize(w),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Ut=null,Mt=null;b.depth&&(Mt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=b.stencil?Ji:Ei,Ut=b.stencil?hs:si);const kt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(kt),r.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),E=new Hn(u.textureWidth,u.textureHeight,{format:Gn,type:vn,depthTexture:new ps(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const bt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,bt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Hn(p.framebufferWidth,p.framebufferHeight,{format:Gn,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),te.setContext(r),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et(K){for(let nt=0;nt<K.removed.length;nt++){const bt=K.removed[nt],Ut=v.indexOf(bt);Ut>=0&&(v[Ut]=null,_[Ut].disconnect(bt))}for(let nt=0;nt<K.added.length;nt++){const bt=K.added[nt];let Ut=v.indexOf(bt);if(Ut===-1){for(let kt=0;kt<_.length;kt++)if(kt>=v.length){v.push(bt),Ut=kt;break}else if(v[kt]===null){v[kt]=bt,Ut=kt;break}if(Ut===-1)break}const Mt=_[Ut];Mt&&Mt.connect(bt)}}const Y=new A,Q=new A;function it(K,nt,bt){Y.setFromMatrixPosition(nt.matrixWorld),Q.setFromMatrixPosition(bt.matrixWorld);const Ut=Y.distanceTo(Q),Mt=nt.projectionMatrix.elements,kt=bt.projectionMatrix.elements,Be=Mt[14]/(Mt[10]-1),Vt=Mt[14]/(Mt[10]+1),jt=(Mt[9]+1)/Mt[5],me=(Mt[9]-1)/Mt[5],Xt=(Mt[8]-1)/Mt[0],ye=(kt[8]+1)/kt[0],Ye=Be*Xt,un=Be*ye,we=Ut/(-Xt+ye),Ne=we*-Xt;if(nt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ne),K.translateZ(we),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Mt[10]===-1)K.projectionMatrix.copy(nt.projectionMatrix),K.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const F=Be+we,Ze=Vt+we,oe=Ye-Ne,R=un+(Ut-Ne),x=jt*Vt/Ze*F,z=me*Vt/Ze*F;K.projectionMatrix.makePerspective(oe,R,x,z,F,Ze),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function lt(K,nt){nt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(nt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let nt=K.near,bt=K.far;m.texture!==null&&(m.depthNear>0&&(nt=m.depthNear),m.depthFar>0&&(bt=m.depthFar)),B.near=L.near=P.near=nt,B.far=L.far=P.far=bt,(N!==B.near||k!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),N=B.near,k=B.far),B.layers.mask=K.layers.mask|6,P.layers.mask=B.layers.mask&-5,L.layers.mask=B.layers.mask&-3;const Ut=K.parent,Mt=B.cameras;lt(B,Ut);for(let kt=0;kt<Mt.length;kt++)lt(Mt[kt],Ut);Mt.length===2?it(B,P,L):B.projectionMatrix.copy(P.projectionMatrix),T===null&&K.isPerspectiveCamera&&(T={camera:K,fov:K.fov,zoom:K.zoom}),yt(K,B,Ut)};function yt(K,nt,bt){bt===null?K.matrix.copy(nt.matrixWorld):(K.matrix.copy(bt.matrixWorld),K.matrix.invert(),K.matrix.multiply(nt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(nt.projectionMatrix),K.projectionMatrixInverse.copy(nt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=fs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(K){c=K,u!==null&&(u.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(K){return f[K]};let pe=null;function Kt(K,nt){if(h=nt.getViewerPose(l||a),M=nt,h!==null){const bt=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let Ut=!1;bt.length!==B.cameras.length&&(B.cameras.length=0,Ut=!0);for(let Vt=0;Vt<bt.length;Vt++){const jt=bt[Vt];let me=null;if(p!==null)me=p.getViewport(jt);else{const ye=d.getViewSubImage(u,jt);me=ye.viewport,Vt===0&&(t.setRenderTargetTextures(E,ye.colorTexture,ye.depthStencilTexture),t.setRenderTarget(E))}let Xt=O[Vt];Xt===void 0&&(Xt=new Tn,Xt.layers.enable(Vt),Xt.viewport=new Re,O[Vt]=Xt),Xt.matrix.fromArray(jt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(jt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(me.x,me.y,me.width,me.height),Vt===0&&(B.matrix.copy(Xt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ut===!0&&B.cameras.push(Xt)}const Mt=r.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){d=i.getBinding();const Vt=d.getDepthInformation(bt[0]);Vt&&Vt.isValid&&Vt.texture&&m.init(Vt,r.renderState)}if(Mt&&Mt.includes("camera-access")&&S){t.state.unbindTexture(),d=i.getBinding();for(let Vt=0;Vt<bt.length;Vt++){const jt=bt[Vt].camera;if(jt){let me=f[jt];me||(me=new bh,f[jt]=me);const Xt=d.getCameraImage(jt);me.sourceTexture=Xt}}}}for(let bt=0;bt<_.length;bt++){const Ut=v[bt],Mt=_[bt];Ut!==null&&Mt!==void 0&&Mt.update(Ut,nt,l||a)}pe&&pe(K,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),M=null}const te=new Ah;te.setAnimationLoop(Kt),this.setAnimationLoop=function(K){pe=K},this.dispose=function(){}}}const X_=new Te,Uh=new Nt;Uh.set(-1,0,0,0,1,0,0,0,1);function Y_(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Eh(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,b,C,E){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(s(m,f),M(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),S(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,b,C):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===fn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===fn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=t.get(f),C=b.envMap,E=b.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(X_.makeRotationFromEuler(E)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Uh),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,b,C){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=C*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===fn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function M(m,f){f.matcap&&(m.matcap.value=f.matcap)}function S(m,f){const b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function q_(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,_){const v=_.program;i.uniformBlockBinding(E,v)}function l(E,_){let v=r[E.id];v===void 0&&(m(E),v=h(E),r[E.id]=v,E.addEventListener("dispose",b));const w=_.program;i.updateUBOMapping(E,w);const g=t.render.frame;s[E.id]!==g&&(u(E),s[E.id]=g)}function h(E){const _=d();E.__bindingPointIndex=_;const v=n.createBuffer(),w=E.__size,g=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,w,g),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,v),v}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return Qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){const _=r[E.id],v=E.uniforms,w=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let g=0,T=v.length;g<T;g++){const P=v[g];if(Array.isArray(P))for(let L=0,O=P.length;L<O;L++)p(P[L],g,L,w);else p(P,g,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,_,v,w){if(S(E,_,v,w)===!0){const g=E.__offset,T=E.value;if(Array.isArray(T)){let P=0;for(let L=0;L<T.length;L++){const O=T[L],B=f(O);M(O,E.__data,P),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(P+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(T,E.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,g,E.__data)}}function M(E,_,v){typeof E=="number"||typeof E=="boolean"?_[0]=E:E.isMatrix3?(_[0]=E.elements[0],_[1]=E.elements[1],_[2]=E.elements[2],_[3]=0,_[4]=E.elements[3],_[5]=E.elements[4],_[6]=E.elements[5],_[7]=0,_[8]=E.elements[6],_[9]=E.elements[7],_[10]=E.elements[8],_[11]=0):ArrayBuffer.isView(E)?_.set(new E.constructor(E.buffer,E.byteOffset,_.length)):E.toArray(_,v)}function S(E,_,v,w){const g=E.value,T=_+"_"+v;if(w[T]===void 0)return typeof g=="number"||typeof g=="boolean"?w[T]=g:ArrayBuffer.isView(g)?w[T]=g.slice():w[T]=g.clone(),!0;{const P=w[T];if(typeof g=="number"||typeof g=="boolean"){if(P!==g)return w[T]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(P.equals(g)===!1)return P.copy(g),!0}}return!1}function m(E){const _=E.uniforms;let v=0;const w=16;for(let T=0,P=_.length;T<P;T++){const L=Array.isArray(_[T])?_[T]:[_[T]];for(let O=0,B=L.length;O<B;O++){const N=L[O],k=Array.isArray(N.value)?N.value:[N.value];for(let q=0,X=k.length;q<X;q++){const et=k[q],Y=f(et),Q=v%w,it=Q%Y.boundary,lt=Q+it;v+=it,lt!==0&&w-lt<Y.storage&&(v+=w-lt),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=Y.storage}}}const g=v%w;return g>0&&(v+=w-g),E.__size=v,E.__cache={},this}function f(E){const _={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(_.boundary=4,_.storage=4):E.isVector2?(_.boundary=8,_.storage=8):E.isVector3||E.isColor?(_.boundary=16,_.storage=12):E.isVector4?(_.boundary=16,_.storage=16):E.isMatrix3?(_.boundary=48,_.storage=48):E.isMatrix4?(_.boundary=64,_.storage=64):E.isTexture?It("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(_.boundary=16,_.storage=E.byteLength):It("WebGLRenderer: Unsupported uniform value type.",E),_}function b(E){const _=E.target;_.removeEventListener("dispose",b);const v=a.indexOf(_.__bindingPointIndex);a.splice(v,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function C(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:c,update:l,dispose:C}}const $_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Kn=null;function K_(){return Kn===null&&(Kn=new Lf($_,16,16,er,ai),Kn.name="DFG_LUT",Kn.minFilter=tn,Kn.magFilter=tn,Kn.wrapS=Mi,Kn.wrapT=Mi,Kn.generateMipmaps=!1,Kn.needsUpdate=!0),Kn}class Z_{constructor(t={}){const{canvas:e=Hd(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=vn}=t;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=a;const S=p,m=new Set([Wl,Vl,Hl]),f=new Set([vn,si,us,hs,kl,Gl]),b=new Uint32Array(4),C=new Int32Array(4),E=new A;let _=null,v=null;const w=[],g=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let L=!1,O=null,B=null,N=null,k=null;this._outputColorSpace=on;let q=0,X=0,et=null,Y=-1,Q=null;const it=new Re,lt=new Re;let yt=null;const pe=new Ht(0);let Kt=0,te=e.width,K=e.height,nt=1,bt=null,Ut=null;const Mt=new Re(0,0,te,K),kt=new Re(0,0,te,K);let Be=!1;const Vt=new Jl;let jt=!1,me=!1;const Xt=new Te,ye=new A,Ye=new Re,un={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function Ne(){return et===null?nt:1}let F=i;function Ze(y,I){return e.getContext(y,I)}let oe,R,x,z,V,$,ot,ct,Z,j,ut,Rt,pt,ht,Ct,Lt,Ft,U,dt,J,ft,xt,rt;try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ol}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",ie,!1),e.addEventListener("webglcontextcreationerror",Dn,!1),F===null){const I="webgl2";if(F=Ze(I,y),F===null)throw Ze(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Dt()}catch(y){throw e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",Dn,!1),Qt("WebGLRenderer: "+y.message),y}function Dt(){oe=new K0(F),oe.init(),ft=new k_(F,oe),R=new z0(F,oe,t,ft),x=new B_(F,oe),R.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),B=F.createFramebuffer(),N=F.createFramebuffer(),k=F.createFramebuffer(),z=new Q0(F),V=new E_,$=new z_(F,oe,x,V,R,ft,z),ot=new $0(P),ct=new tp(F),xt=new O0(F,ct),Z=new Z0(F,ct,z,xt),j=new tg(F,Z,ct,xt,z),U=new j0(F,R,$),Ct=new k0(V),ut=new b_(P,ot,oe,R,xt,Ct),Rt=new Y_(P,V),pt=new w_,ht=new L_(oe),Ft=new F0(P,ot,x,j,M,c),Lt=new O_(P,j,R),rt=new q_(F,z,R,x),dt=new B0(F,oe,z),J=new J0(F,oe,z),z.programs=ut.programs,P.capabilities=R,P.extensions=oe,P.properties=V,P.renderLists=pt,P.shadowMap=Lt,P.state=x,P.info=z}S!==vn&&(T=new ng(S,e.width,e.height,o,r,s));const wt=new W_(P,F);this.xr=wt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const y=oe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=oe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(y){y!==void 0&&(nt=y,this.setSize(te,K,!1))},this.getSize=function(y){return y.set(te,K)},this.setSize=function(y,I,W=!0){if(wt.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}te=y,K=I,e.width=Math.floor(y*nt),e.height=Math.floor(I*nt),W===!0&&(e.style.width=y+"px",e.style.height=I+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(te*nt,K*nt).floor()},this.setDrawingBufferSize=function(y,I,W){te=y,K=I,nt=W,e.width=Math.floor(y*W),e.height=Math.floor(I*W),this.setViewport(0,0,y,I)},this.setEffects=function(y){if(S===vn){Qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let I=0;I<y.length;I++)if(y[I].isOutputPass===!0){It("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(it)},this.getViewport=function(y){return y.copy(Mt)},this.setViewport=function(y,I,W,G){y.isVector4?Mt.set(y.x,y.y,y.z,y.w):Mt.set(y,I,W,G),x.viewport(it.copy(Mt).multiplyScalar(nt).round())},this.getScissor=function(y){return y.copy(kt)},this.setScissor=function(y,I,W,G){y.isVector4?kt.set(y.x,y.y,y.z,y.w):kt.set(y,I,W,G),x.scissor(lt.copy(kt).multiplyScalar(nt).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(y){x.setScissorTest(Be=y)},this.setOpaqueSort=function(y){bt=y},this.setTransparentSort=function(y){Ut=y},this.getClearColor=function(y){return y.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,W=!0){let G=0;if(y){let H=!1;if(et!==null){const _t=et.texture.format;H=m.has(_t)}if(H){const _t=et.texture.type,St=f.has(_t),gt=Ft.getClearColor(),Et=Ft.getClearAlpha(),At=gt.r,Bt=gt.g,Wt=gt.b;St?(b[0]=At,b[1]=Bt,b[2]=Wt,b[3]=Et,F.clearBufferuiv(F.COLOR,0,b)):(C[0]=At,C[1]=Bt,C[2]=Wt,C[3]=Et,F.clearBufferiv(F.COLOR,0,C))}else G|=F.COLOR_BUFFER_BIT}I&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),O=y},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",Dn,!1),Ft.dispose(),pt.dispose(),ht.dispose(),V.dispose(),ot.dispose(),j.dispose(),xt.dispose(),rt.dispose(),ut.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",bc),wt.removeEventListener("sessionend",Ec),Vi.stop()};function ge(y){y.preventDefault(),ba("WebGLRenderer: Context Lost."),L=!0}function ie(){ba("WebGLRenderer: Context Restored."),L=!1;const y=z.autoReset,I=Lt.enabled,W=Lt.autoUpdate,G=Lt.needsUpdate,H=Lt.type;Dt(),z.autoReset=y,Lt.enabled=I,Lt.autoUpdate=W,Lt.needsUpdate=G,Lt.type=H}function Dn(y){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Yn(y){const I=y.target;I.removeEventListener("dispose",Yn),nd(I)}function nd(y){id(y),V.remove(y)}function id(y){const I=V.get(y).programs;I!==void 0&&(I.forEach(function(W){ut.releaseProgram(W)}),y.isShaderMaterial&&ut.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,W,G,H,_t){I===null&&(I=un);const St=H.isMesh&&H.matrixWorld.determinantAffine()<0,gt=ad(y,I,W,G,H);x.setMaterial(G,St);let Et=W.index,At=1;if(G.wireframe===!0){if(Et=Z.getWireframeAttribute(W),Et===void 0)return;At=2}const Bt=W.drawRange,Wt=W.attributes.position;let Tt=Bt.start*At,re=(Bt.start+Bt.count)*At;_t!==null&&(Tt=Math.max(Tt,_t.start*At),re=Math.min(re,(_t.start+_t.count)*At)),Et!==null?(Tt=Math.max(Tt,0),re=Math.min(re,Et.count)):Wt!=null&&(Tt=Math.max(Tt,0),re=Math.min(re,Wt.count));const Fe=re-Tt;if(Fe<0||Fe===1/0)return;xt.setup(H,G,gt,W,Et);let xe,fe=dt;if(Et!==null&&(xe=ct.get(Et),fe=J,fe.setIndex(xe)),H.isMesh)G.wireframe===!0?(x.setLineWidth(G.wireframeLinewidth*Ne()),fe.setMode(F.LINES)):fe.setMode(F.TRIANGLES);else if(H.isLine){let Je=G.linewidth;Je===void 0&&(Je=1),x.setLineWidth(Je*Ne()),H.isLineSegments?fe.setMode(F.LINES):H.isLineLoop?fe.setMode(F.LINE_LOOP):fe.setMode(F.LINE_STRIP)}else H.isPoints?fe.setMode(F.POINTS):H.isSprite&&fe.setMode(F.TRIANGLES);if(H.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))fe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Je=H._multiDrawStarts,vt=H._multiDrawCounts,rn=H._multiDrawCount,Zt=Et?ct.get(Et).bytesPerElement:1,yn=V.get(G).currentProgram.getUniforms();for(let qn=0;qn<rn;qn++)yn.setValue(F,"_gl_DrawID",qn),fe.render(Je[qn]/Zt,vt[qn])}else if(H.isInstancedMesh)fe.renderInstances(Tt,Fe,H.count);else if(W.isInstancedBufferGeometry){const Je=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,vt=Math.min(W.instanceCount,Je);fe.renderInstances(Tt,Fe,vt)}else fe.render(Tt,Fe)};function yc(y,I,W,G){O!==null&&y.isNodeMaterial&&O.setObject(G,y),jt===!0&&Ct.setState(y,W,!1),y.transparent===!0&&y.side===xn&&y.forceSinglePass===!1?(y.side=fn,y.needsUpdate=!0,As(y,I,G),y.side=ji,y.needsUpdate=!0,As(y,I,G),y.side=xn):As(y,I,G)}this.compile=function(y,I,W=null){W===null&&(W=y),O!==null&&O.renderStart(y,I,W),v=ht.get(W),v.init(I),g.push(v),W.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(v.pushLight(H),H.castShadow&&v.pushShadow(H))}),y!==W&&y.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(v.pushLight(H),H.castShadow&&v.pushShadow(H))}),v.setupLights(),O!==null&&O.updateLights(v.state.lightsArray),me=this.localClippingEnabled,jt=Ct.init(this.clippingPlanes,me),jt===!0&&Ct.setGlobalState(this.clippingPlanes,I),O!==null&&Lt.render(v.state.shadowsArray,W,I);const G=new Set;return y.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const _t=H.material;if(_t)if(Array.isArray(_t))for(let St=0;St<_t.length;St++){const gt=_t[St];yc(gt,W,I,H),G.add(gt)}else yc(_t,W,I,H),G.add(_t)}),v=g.pop(),O!==null&&O.renderEnd(),G},this.compileAsync=function(y,I,W=null){const G=this.compile(y,I,W);return new Promise(H=>{function _t(){if(G.forEach(function(St){const Et=V.get(St).currentProgram;(Et===void 0||Et.isReady())&&G.delete(St)}),G.size===0){H(y);return}setTimeout(_t,10)}oe.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Ka=null;function rd(y){Ka&&Ka(y)}function bc(){Vi.stop()}function Ec(){Vi.start()}const Vi=new Ah;Vi.setAnimationLoop(rd),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(y){Ka=y,wt.setAnimationLoop(y),y===null?Vi.stop():Vi.start()},wt.addEventListener("sessionstart",bc),wt.addEventListener("sessionend",Ec),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;O!==null&&O.renderStart(y,I);const W=wt.enabled===!0&&wt.isPresenting===!0,G=T!==null&&(et===null||W)&&T.begin(P,et);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(I),I=wt.getCamera()),y.isScene===!0&&y.onBeforeRender(P,y,I,et),v=ht.get(y,g.length),v.init(I),v.state.textureUnits=$.getTextureUnits(),g.push(v),Xt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Vt.setFromProjectionMatrix(Xt,ti,I.reversedDepth),me=this.localClippingEnabled,jt=Ct.init(this.clippingPlanes,me),_=pt.get(y,w.length),_.init(),w.push(_),wt.enabled===!0&&wt.isPresenting===!0){const St=P.xr.getDepthSensingMesh();St!==null&&Za(St,I,-1/0,P.sortObjects)}Za(y,I,0,P.sortObjects),_.finish(),O!==null&&O.updateLights(v.state.lightsArray),P.sortObjects===!0&&_.sort(bt,Ut),we=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,we&&Ft.addToRenderList(_,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),jt===!0&&Ct.beginShadows();const H=v.state.shadowsArray;if(Lt.render(H,y,I),jt===!0&&Ct.endShadows(),(G&&T.hasRenderPass())===!1){const St=_.opaque,gt=_.transmissive;if(v.setupLights(),I.isArrayCamera){const Et=I.cameras;if(gt.length>0)for(let At=0,Bt=Et.length;At<Bt;At++){const Wt=Et[At];wc(St,gt,y,Wt)}we&&Ft.render(y);for(let At=0,Bt=Et.length;At<Bt;At++){const Wt=Et[At];Tc(_,y,Wt,Wt.viewport)}}else gt.length>0&&wc(St,gt,y,I),we&&Ft.render(y),Tc(_,y,I)}et!==null&&X===0&&($.updateMultisampleRenderTarget(et),$.updateRenderTargetMipmap(et)),G&&T.end(P),y.isScene===!0&&y.onAfterRender(P,y,I),xt.resetDefaultState(),Y=-1,Q=null,g.pop(),g.length>0?(v=g[g.length-1],$.setTextureUnits(v.state.textureUnits),jt===!0&&Ct.setGlobalState(P.clippingPlanes,v.state.camera)):v=null,w.pop(),w.length>0?_=w[w.length-1]:_=null,O!==null&&O.renderEnd()};function Za(y,I,W,G){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLightProbeGrid)v.pushLightProbeGrid(y);else if(y.isLight)v.pushLight(y),y.castShadow&&v.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(Vt)){G&&Ye.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Xt);const St=j.update(y),gt=y.material;gt.visible&&_.push(y,St,gt,W,Ye.z,null,I)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(Vt))){const St=j.update(y),gt=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ye.copy(y.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Ye.copy(St.boundingSphere.center)),Ye.applyMatrix4(y.matrixWorld).applyMatrix4(Xt)),Array.isArray(gt)){const Et=St.groups;for(let At=0,Bt=Et.length;At<Bt;At++){const Wt=Et[At],Tt=gt[Wt.materialIndex];Tt&&Tt.visible&&_.push(y,St,Tt,W,Ye.z,Wt,I)}}else gt.visible&&_.push(y,St,gt,W,Ye.z,null,I)}}const _t=y.children;for(let St=0,gt=_t.length;St<gt;St++)Za(_t[St],I,W,G)}function Tc(y,I,W,G){const{opaque:H,transmissive:_t,transparent:St}=y;v.setupLightsView(W),jt===!0&&Ct.setGlobalState(P.clippingPlanes,W),G&&x.viewport(it.copy(G)),H.length>0&&ws(H,I,W),_t.length>0&&ws(_t,I,W),St.length>0&&ws(St,I,W),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function wc(y,I,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[G.id]===void 0){const Tt=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[G.id]=new Hn(1,1,{generateMipmaps:!0,type:Tt?ai:vn,minFilter:Zi,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qt.workingColorSpace})}const _t=v.state.transmissionRenderTarget[G.id],St=G.viewport||it;_t.setSize(St.z*P.transmissionResolutionScale,St.w*P.transmissionResolutionScale);const gt=P.getRenderTarget(),Et=P.getActiveCubeFace(),At=P.getActiveMipmapLevel();P.setRenderTarget(_t),P.getClearColor(pe),Kt=P.getClearAlpha(),Kt<1&&P.setClearColor(16777215,.5),P.clear(),we&&Ft.render(W);const Bt=P.toneMapping;P.toneMapping=ei;const Wt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),v.setupLightsView(G),jt===!0&&Ct.setGlobalState(P.clippingPlanes,G),ws(y,W,G),$.updateMultisampleRenderTarget(_t),$.updateRenderTargetMipmap(_t),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let re=0,Fe=I.length;re<Fe;re++){const xe=I[re],{object:fe,geometry:Je,material:vt,group:rn}=xe;if(vt.side===xn&&fe.layers.test(G.layers)){const Zt=vt.side;vt.side=fn,vt.needsUpdate=!0,Ac(fe,W,G,Je,vt,rn),vt.side=Zt,vt.needsUpdate=!0,Tt=!0}}Tt===!0&&($.updateMultisampleRenderTarget(_t),$.updateRenderTargetMipmap(_t))}P.setRenderTarget(gt,Et,At),P.setClearColor(pe,Kt),Wt!==void 0&&(G.viewport=Wt),P.toneMapping=Bt}function ws(y,I,W){const G=I.isScene===!0?I.overrideMaterial:null;for(let H=0,_t=y.length;H<_t;H++){const St=y[H],{object:gt,geometry:Et,group:At}=St;let Bt=St.material;Bt.allowOverride===!0&&G!==null&&(Bt=G),gt.layers.test(W.layers)&&Ac(gt,I,W,Et,Bt,At)}}function Ac(y,I,W,G,H,_t){O!==null&&H.isNodeMaterial&&O.setObject(y,H),y.onBeforeRender(P,I,W,G,H,_t),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(P,I,W,G,y,_t),H.transparent===!0&&H.side===xn&&H.forceSinglePass===!1?(H.side=fn,H.needsUpdate=!0,P.renderBufferDirect(W,I,G,H,y,_t),H.side=ji,H.needsUpdate=!0,P.renderBufferDirect(W,I,G,H,y,_t),H.side=xn):P.renderBufferDirect(W,I,G,H,y,_t),y.onAfterRender(P,I,W,G,H,_t)}function As(y,I,W){I.isScene!==!0&&(I=un);const G=V.get(y),H=v.state.lights,_t=v.state.shadowsArray,St=H.state.version,gt=ut.getParameters(y,H.state,_t,I,W,v.state.lightProbeGridArray),Et=ut.getProgramCacheKey(gt);let At=G.programs;G.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,G.fog=I.fog;const Bt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;G.envMap=ot.get(y.envMap||G.environment,Bt),G.envMapRotation=G.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,At===void 0&&(y.addEventListener("dispose",Yn),At=new Map,G.programs=At);let Wt=At.get(Et);if(Wt!==void 0){if(G.currentProgram===Wt&&G.lightsStateVersion===St)return Cc(y,gt),Wt}else gt.uniforms=ut.getUniforms(y),O!==null&&y.isNodeMaterial&&O.build(y,W,gt),y.onBeforeCompile(gt,P),Wt=ut.acquireProgram(gt,Et),At.set(Et,Wt),G.uniforms=gt.uniforms;const Tt=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Tt.clippingPlanes=Ct.uniform),Cc(y,gt),G.needsLights=ld(y),G.lightsStateVersion=St,G.needsLights&&(Tt.ambientLightColor.value=H.state.ambient,Tt.lightProbe.value=H.state.probe,Tt.sunLights.value=H.state.sun,Tt.sunLightShadows.value=H.state.sunShadow,Tt.directionalLights.value=H.state.directional,Tt.directionalLightShadows.value=H.state.directionalShadow,Tt.spotLights.value=H.state.spot,Tt.spotLightShadows.value=H.state.spotShadow,Tt.rectAreaLights.value=H.state.rectArea,Tt.ltc_1.value=H.state.rectAreaLTC1,Tt.ltc_2.value=H.state.rectAreaLTC2,Tt.pointLights.value=H.state.point,Tt.pointLightShadows.value=H.state.pointShadow,Tt.hemisphereLights.value=H.state.hemi,Tt.sunShadowMatrix.value=H.state.sunShadowMatrix,Tt.sunShadowCascade.value=H.state.sunShadowCascade,Tt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Tt.spotLightMatrix.value=H.state.spotLightMatrix,Tt.spotLightMap.value=H.state.spotLightMap,Tt.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=v.state.lightProbeGridArray.length>0,G.currentProgram=Wt,G.uniformsList=null,Wt}function Rc(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=da.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Cc(y,I){const W=V.get(y);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.batchingColor=I.batchingColor,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.instancingMorph=I.instancingMorph,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function sd(y,I){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;E.setFromMatrixPosition(I.matrixWorld);for(let W=0,G=y.length;W<G;W++){const H=y[W];if(H.texture!==null&&H.boundingBox.containsPoint(E))return H}return null}function ad(y,I,W,G,H){I.isScene!==!0&&(I=un),$.resetTextureUnits();const _t=I.fog,St=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?I.environment:null,gt=et===null?P.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:qt.workingColorSpace,Et=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,At=ot.get(G.envMap||St,Et),Bt=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Wt=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Tt=!!W.morphAttributes.position,re=!!W.morphAttributes.normal,Fe=!!W.morphAttributes.color;let xe=ei;G.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(xe=P.toneMapping);const fe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Je=fe!==void 0?fe.length:0,vt=V.get(G),rn=v.state.lights;if(jt===!0&&(me===!0||y!==Q)){const _e=y===Q&&G.id===Y;Ct.setState(G,y,_e)}let Zt=!1;G.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==rn.state.version||vt.outputColorSpace!==gt||H.isBatchedMesh&&vt.batching===!1||!H.isBatchedMesh&&vt.batching===!0||H.isBatchedMesh&&vt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&vt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&vt.instancing===!1||!H.isInstancedMesh&&vt.instancing===!0||H.isSkinnedMesh&&vt.skinning===!1||!H.isSkinnedMesh&&vt.skinning===!0||H.isInstancedMesh&&vt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&vt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&vt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&vt.instancingMorph===!1&&H.morphTexture!==null||vt.envMap!==At||G.fog===!0&&vt.fog!==_t||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==Ct.numPlanes||vt.numIntersection!==Ct.numIntersection)||vt.vertexAlphas!==Bt||vt.vertexTangents!==Wt||vt.morphTargets!==Tt||vt.morphNormals!==re||vt.morphColors!==Fe||vt.toneMapping!==xe||vt.morphTargetsCount!==Je||!!vt.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(Zt=!0):(Zt=!0,vt.__version=G.version);let yn=vt.currentProgram;Zt===!0&&(yn=As(G,I,H),O&&G.isNodeMaterial&&O.onUpdateProgram(G,yn,vt));let qn=!1,Ri=!1,or=!1;const he=yn.getUniforms(),Le=vt.uniforms;if(x.useProgram(yn.program)&&(qn=!0,Ri=!0,or=!0),G.id!==Y&&(Y=G.id,Ri=!0),vt.needsLights){const _e=sd(v.state.lightProbeGridArray,H);vt.lightProbeGrid!==_e&&(vt.lightProbeGrid=_e,Ri=!0)}if(qn||Q!==y){x.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),he.setValue(F,"projectionMatrix",y.projectionMatrix),he.setValue(F,"viewMatrix",y.matrixWorldInverse);const Pi=he.map.cameraPosition;Pi!==void 0&&Pi.setValue(F,ye.setFromMatrixPosition(y.matrixWorld)),R.logarithmicDepthBuffer&&he.setValue(F,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&he.setValue(F,"isOrthographic",y.isOrthographicCamera===!0),Q!==y&&(Q=y,Ri=!0,or=!0)}if(vt.needsLights&&(rn.state.sunShadowMap.length>0&&he.setValue(F,"sunShadowMap",rn.state.sunShadowMap,$),rn.state.directionalShadowMap.length>0&&he.setValue(F,"directionalShadowMap",rn.state.directionalShadowMap,$),rn.state.spotShadowMap.length>0&&he.setValue(F,"spotShadowMap",rn.state.spotShadowMap,$),rn.state.pointShadowMap.length>0&&he.setValue(F,"pointShadowMap",rn.state.pointShadowMap,$)),H.isSkinnedMesh){he.setOptional(F,H,"bindMatrix"),he.setOptional(F,H,"bindMatrixInverse");const _e=H.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),he.setValue(F,"boneTexture",_e.boneTexture,$))}H.isBatchedMesh&&(he.setOptional(F,H,"batchingTexture"),he.setValue(F,"batchingTexture",H._matricesTexture,$),he.setOptional(F,H,"batchingIdTexture"),he.setValue(F,"batchingIdTexture",H._indirectTexture,$),he.setOptional(F,H,"batchingColorTexture"),H._colorsTexture!==null&&he.setValue(F,"batchingColorTexture",H._colorsTexture,$));const Ci=W.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&U.update(H,W,yn),(Ri||vt.receiveShadow!==H.receiveShadow)&&(vt.receiveShadow=H.receiveShadow,he.setValue(F,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&I.environment!==null&&(Le.envMapIntensity.value=I.environmentIntensity),Le.dfgLUT!==void 0&&(Le.dfgLUT.value=K_()),Ri){if(he.setValue(F,"toneMappingExposure",P.toneMappingExposure),vt.needsLights&&od(Le,or),_t&&G.fog===!0&&Rt.refreshFogUniforms(Le,_t),Rt.refreshMaterialUniforms(Le,G,nt,K,v.state.transmissionRenderTarget[y.id]),vt.needsLights&&vt.lightProbeGrid){const _e=vt.lightProbeGrid;Le.probesSH.value=_e.texture,Le.probesMin.value.copy(_e.boundingBox.min),Le.probesMax.value.copy(_e.boundingBox.max),Le.probesResolution.value.copy(_e.resolution)}da.upload(F,Rc(vt),Le,$)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(da.upload(F,Rc(vt),Le,$),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&he.setValue(F,"center",H.center),he.setValue(F,"modelViewMatrix",H.modelViewMatrix),he.setValue(F,"normalMatrix",H.normalMatrix),he.setValue(F,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){const _e=G.uniformsGroups;for(let Pi=0,lr=_e.length;Pi<lr;Pi++){const Dc=_e[Pi];rt.update(Dc,yn),rt.bind(Dc,yn)}}return yn}function od(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.sunLights.needsUpdate=I,y.sunLightShadows.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function ld(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(y,I,W){const G=V.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),V.get(y.texture).__webglTexture=I,V.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){const W=V.get(y);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,W=0){et=y,q=I,X=W;let G=null,H=!1,_t=!1;if(y){const gt=V.get(y);if(gt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(F.FRAMEBUFFER,gt.__webglFramebuffer),it.copy(y.viewport),lt.copy(y.scissor),yt=y.scissorTest,x.viewport(it),x.scissor(lt),x.setScissorTest(yt),Y=-1;return}else if(gt.__webglFramebuffer===void 0)$.setupRenderTarget(y);else if(gt.__hasExternalTextures)$.rebindTextures(y,V.get(y.texture).__webglTexture,V.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Bt=y.depthTexture;if(gt.__boundDepthTexture!==Bt){if(Bt!==null&&V.has(Bt)&&(y.width!==Bt.image.width||y.height!==Bt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(y)}}const Et=y.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(_t=!0);const At=V.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(At[I])?G=At[I][W]:G=At[I],H=!0):y.samples>0&&$.useMultisampledRTT(y)===!1?G=V.get(y).__webglMultisampledFramebuffer:Array.isArray(At)?G=At[W]:G=At,it.copy(y.viewport),lt.copy(y.scissor),yt=y.scissorTest}else it.copy(Mt).multiplyScalar(nt).floor(),lt.copy(kt).multiplyScalar(nt).floor(),yt=Be;if(W!==0&&(G=B),x.bindFramebuffer(F.FRAMEBUFFER,G)&&x.drawBuffers(y,G),x.viewport(it),x.scissor(lt),x.setScissorTest(yt),H){const gt=V.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+I,gt.__webglTexture,W)}else if(_t){const gt=I;for(let Et=0;Et<y.textures.length;Et++){const At=V.get(y.textures[Et]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Et,At.__webglTexture,W,gt)}}else if(y!==null&&W!==0){const gt=V.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,gt.__webglTexture,W)}Y=-1};function Pc(y){const I=V.get(y);return(I.__readFormat!==y.format||I.__readType!==y.type)&&(I.__readFormat=y.format,I.__readType=y.type,I.__formatReadable=R.textureFormatReadable(y.format),I.__typeReadable=R.textureTypeReadable(y.type)),I}this.readRenderTargetPixels=function(y,I,W,G,H,_t,St,gt=0){if(!(y&&y.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=V.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et){x.bindFramebuffer(F.FRAMEBUFFER,Et);try{const At=y.textures[gt],Bt=At.format,Wt=At.type;y.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+gt);const Tt=Pc(At);if(Tt.__formatReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt.__typeReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-G&&W>=0&&W<=y.height-H&&F.readPixels(I,W,G,H,ft.convert(Bt),ft.convert(Wt),_t)}finally{const At=et!==null?V.get(et).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(y,I,W,G,H,_t,St,gt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=V.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et)if(I>=0&&I<=y.width-G&&W>=0&&W<=y.height-H){x.bindFramebuffer(F.FRAMEBUFFER,Et);const At=y.textures[gt],Bt=At.format,Wt=At.type;y.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+gt);const Tt=Pc(At);if(Tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const re=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,re),F.bufferData(F.PIXEL_PACK_BUFFER,_t.byteLength,F.STREAM_READ),F.readPixels(I,W,G,H,ft.convert(Bt),ft.convert(Wt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const Fe=et!==null?V.get(et).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,Fe);const xe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Vd(F,xe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,re),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,_t),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(re),F.deleteSync(xe),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,W=0){const G=Math.pow(2,-W),H=Math.floor(y.image.width*G),_t=Math.floor(y.image.height*G),St=I!==null?I.x:0,gt=I!==null?I.y:0;$.setTexture2D(y,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,St,gt,H,_t),x.unbindTexture()},this.copyTextureToTexture=function(y,I,W=null,G=null,H=0,_t=0){let St,gt,Et,At,Bt,Wt,Tt,re,Fe;const xe=y.isCompressedTexture?y.mipmaps[_t]:y.image;if(W!==null)St=W.max.x-W.min.x,gt=W.max.y-W.min.y,Et=W.isBox3?W.max.z-W.min.z:1,At=W.min.x,Bt=W.min.y,Wt=W.isBox3?W.min.z:0;else{const Le=Math.pow(2,-H);St=Math.floor(xe.width*Le),gt=Math.floor(xe.height*Le),y.isDataArrayTexture?Et=xe.depth:y.isData3DTexture?Et=Math.floor(xe.depth*Le):Et=1,At=0,Bt=0,Wt=0}G!==null?(Tt=G.x,re=G.y,Fe=G.z):(Tt=0,re=0,Fe=0);const fe=ft.convert(I.format),Je=ft.convert(I.type);let vt;I.isData3DTexture?($.setTexture3D(I,0),vt=F.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?($.setTexture2DArray(I,0),vt=F.TEXTURE_2D_ARRAY):($.setTexture2D(I,0),vt=F.TEXTURE_2D),x.activeTexture(F.TEXTURE0),x.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,I.flipY),x.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),x.pixelStorei(F.UNPACK_ALIGNMENT,I.unpackAlignment);const rn=x.getParameter(F.UNPACK_ROW_LENGTH),Zt=x.getParameter(F.UNPACK_IMAGE_HEIGHT),yn=x.getParameter(F.UNPACK_SKIP_PIXELS),qn=x.getParameter(F.UNPACK_SKIP_ROWS),Ri=x.getParameter(F.UNPACK_SKIP_IMAGES);x.pixelStorei(F.UNPACK_ROW_LENGTH,xe.width),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xe.height),x.pixelStorei(F.UNPACK_SKIP_PIXELS,At),x.pixelStorei(F.UNPACK_SKIP_ROWS,Bt),x.pixelStorei(F.UNPACK_SKIP_IMAGES,Wt);const or=y.isDataArrayTexture||y.isData3DTexture,he=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){const Le=V.get(y),Ci=V.get(I),_e=V.get(Le.__renderTarget),Pi=V.get(Ci.__renderTarget);x.bindFramebuffer(F.READ_FRAMEBUFFER,_e.__webglFramebuffer),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let lr=0;lr<Et;lr++)or&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,V.get(y).__webglTexture,H,Wt+lr),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,V.get(I).__webglTexture,_t,Fe+lr)),F.blitFramebuffer(At,Bt,St,gt,Tt,re,St,gt,F.DEPTH_BUFFER_BIT,F.NEAREST);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(H!==0||y.isRenderTargetTexture||V.has(y)){const Le=V.get(y),Ci=V.get(I);x.bindFramebuffer(F.READ_FRAMEBUFFER,N),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,k);for(let _e=0;_e<Et;_e++)or?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Le.__webglTexture,H,Wt+_e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Le.__webglTexture,H),he?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ci.__webglTexture,_t,Fe+_e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ci.__webglTexture,_t),H!==0?F.blitFramebuffer(At,Bt,St,gt,Tt,re,St,gt,F.COLOR_BUFFER_BIT,F.NEAREST):he?F.copyTexSubImage3D(vt,_t,Tt,re,Fe+_e,At,Bt,St,gt):F.copyTexSubImage2D(vt,_t,Tt,re,At,Bt,St,gt);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else he?y.isDataTexture||y.isData3DTexture?F.texSubImage3D(vt,_t,Tt,re,Fe,St,gt,Et,fe,Je,xe.data):I.isCompressedArrayTexture?F.compressedTexSubImage3D(vt,_t,Tt,re,Fe,St,gt,Et,fe,xe.data):F.texSubImage3D(vt,_t,Tt,re,Fe,St,gt,Et,fe,Je,xe):y.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,_t,Tt,re,St,gt,fe,Je,xe.data):y.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,_t,Tt,re,xe.width,xe.height,fe,xe.data):F.texSubImage2D(F.TEXTURE_2D,_t,Tt,re,St,gt,fe,Je,xe);x.pixelStorei(F.UNPACK_ROW_LENGTH,rn),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Zt),x.pixelStorei(F.UNPACK_SKIP_PIXELS,yn),x.pixelStorei(F.UNPACK_SKIP_ROWS,qn),x.pixelStorei(F.UNPACK_SKIP_IMAGES,Ri),_t===0&&I.generateMipmaps&&F.generateMipmap(vt),x.unbindTexture()},this.initRenderTarget=function(y){V.get(y).__webglFramebuffer===void 0&&$.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?$.setTextureCube(y,0):y.isData3DTexture?$.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?$.setTexture2DArray(y,0):$.setTexture2D(y,0),x.unbindTexture()},this.resetState=function(){q=0,X=0,et=null,x.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}const Nu={type:"change"},rc={type:"start"},Nh={type:"end"},ra=new Zl,Fu=new xi,J_=Math.cos(70*Pe.DEG2RAD),ze=new A,hn=2*Math.PI,ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Lo=1e-6;class Q_ extends Qf{constructor(t,e=null){super(t,e),this.state=ue.NONE,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Dr.ROTATE,MIDDLE:Dr.DOLLY,RIGHT:Dr.PAN},this.touches={ONE:Cr.ROTATE,TWO:Cr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new oi,this._lastTargetPosition=new A,this._quat=new oi().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new uu,this._sphericalDelta=new uu,this._scale=1,this._panOffset=new A,this._rotateStart=new Pt,this._rotateEnd=new Pt,this._rotateDelta=new Pt,this._panStart=new Pt,this._panEnd=new Pt,this._panDelta=new Pt,this._dollyStart=new Pt,this._dollyEnd=new Pt,this._dollyDelta=new Pt,this._dollyDirection=new A,this._mouse=new Pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tx.bind(this),this._onPointerDown=j_.bind(this),this._onPointerUp=ex.bind(this),this._onContextMenu=lx.bind(this),this._onMouseWheel=rx.bind(this),this._onKeyDown=sx.bind(this),this._onTouchStart=ax.bind(this),this._onTouchMove=ox.bind(this),this._onMouseDown=nx.bind(this),this._onMouseMove=ix.bind(this),this._interceptControlDown=cx.bind(this),this._interceptControlUp=ux.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ue.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Nu),this.update(),this.state=ue.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;ze.copy(e).sub(this.target),ze.applyQuaternion(this._quat),this._spherical.setFromVector3(ze),this.autoRotate&&this.state===ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=hn:i>Math.PI&&(i-=hn),r<-Math.PI?r+=hn:r>Math.PI&&(r-=hn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(ze.setFromSpherical(this._spherical),ze.applyQuaternion(this._quatInverse),e.copy(this.target).add(ze),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ze.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new A(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new A(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=ze.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ra.origin.copy(this.object.position),ra.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ra.direction))<J_?this.object.lookAt(this.target):(Fu.setFromNormalAndCoplanarPoint(this.object.up,this.target),ra.intersectPlane(Fu,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Lo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Lo||this._lastTargetPosition.distanceToSquared(this.target)>Lo?(this.dispatchEvent(Nu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?hn/60*this.autoRotateSpeed*t:hn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ze.setFromMatrixColumn(e,0),ze.multiplyScalar(-t),this._panOffset.add(ze)}_panUp(t,e){this.screenSpacePanning===!0?ze.setFromMatrixColumn(e,1):(ze.setFromMatrixColumn(e,0),ze.crossVectors(this.object.up,ze)),ze.multiplyScalar(t),this._panOffset.add(ze)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;ze.copy(r).sub(this.target);let s=ze.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/e.clientHeight),this._rotateUp(hn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/e.clientHeight),this._rotateUp(hn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function j_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function tx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function ex(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Nh),this.state=ue.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function nx(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Dr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ue.DOLLY;break;case Dr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ue.ROTATE}break;case Dr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ue.PAN}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(rc)}function ix(n){switch(this.state){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function rx(n){this.enabled===!1||this.enableZoom===!1||this.state!==ue.NONE||(n.preventDefault(),this.dispatchEvent(rc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Nh))}function sx(n){this.enabled!==!1&&this._handleKeyDown(n)}function ax(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Cr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ue.TOUCH_ROTATE;break;case Cr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ue.TOUCH_PAN;break;default:this.state=ue.NONE}break;case 2:switch(this.touches.TWO){case Cr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ue.TOUCH_DOLLY_PAN;break;case Cr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ue.TOUCH_DOLLY_ROTATE;break;default:this.state=ue.NONE}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(rc)}function ox(n){switch(this._trackPointer(n),this.state){case ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ue.NONE}}function lx(n){this.enabled!==!1&&n.preventDefault()}function cx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ux(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ns=new A;function En(n,t,e,i,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),c=Math.PI/4;ns.copy(t),ns[i]=0,ns.normalize();const l=.5*a/(a+o),h=1-ns.angleTo(n)/c;return Math.sign(ns[e])===1?h*l:o/(a+o)+l+l*(1-h)}class sc extends wi{constructor(t=1,e=1,i=1,r=2,s=.1){const a=r*2+1;if(s=Math.min(t/2,e/2,i/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:r,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new A,l=new A,h=new A(t,e,i).divideScalar(2).subScalar(s),d=this.attributes.position.array,u=this.attributes.normal.array,p=this.attributes.uv.array,M=d.length/6,S=new A,m=.5/a;for(let f=0,b=0;f<d.length;f+=3,b+=2)switch(c.fromArray(d,f),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[f+0]=h.x*Math.sign(c.x)+l.x*s,d[f+1]=h.y*Math.sign(c.y)+l.y*s,d[f+2]=h.z*Math.sign(c.z)+l.z*s,u[f+0]=l.x,u[f+1]=l.y,u[f+2]=l.z,Math.floor(f/M)){case 0:S.set(1,0,0),p[b+0]=En(S,l,"z","y",s,i),p[b+1]=1-En(S,l,"y","z",s,e);break;case 1:S.set(-1,0,0),p[b+0]=1-En(S,l,"z","y",s,i),p[b+1]=1-En(S,l,"y","z",s,e);break;case 2:S.set(0,1,0),p[b+0]=1-En(S,l,"x","z",s,t),p[b+1]=En(S,l,"z","x",s,i);break;case 3:S.set(0,-1,0),p[b+0]=1-En(S,l,"x","z",s,t),p[b+1]=1-En(S,l,"z","x",s,i);break;case 4:S.set(0,0,1),p[b+0]=1-En(S,l,"x","y",s,t),p[b+1]=1-En(S,l,"y","x",s,e);break;case 5:S.set(0,0,-1),p[b+0]=En(S,l,"x","y",s,t),p[b+1]=1-En(S,l,"y","x",s,e);break}}static fromJSON(t){return new sc(t.width,t.height,t.depth,t.segments,t.radius)}}function hx(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,c=new Ue;let l=0;for(let h=0;h<n.length;++h){const d=n[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(d.attributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p])}if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(e){let h=0;const d=[];for(let u=0;u<n.length;++u){const p=n[u].index;for(let M=0;M<p.count;++M)d.push(p.getX(M)+h);h+=n[u].attributes.position.count}c.setIndex(d)}for(const h in s){const d=Ou(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){const p=[];for(let S=0;S<a[h].length;++S)p.push(a[h][S][u]);const M=Ou(p);if(!M)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(M)}}}return c}function Ou(n){let t,e,i,r=-1,s=0;for(let l=0;l<n.length;++l){const h=n[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const a=new t(s),o=new Vn(a,e,i);let c=0;for(let l=0;l<n.length;++l){const h=n[l];if(h.isInterleavedBufferAttribute){const d=c/e;for(let u=0,p=h.count;u<p;u++)for(let M=0;M<e;M++){const S=h.getComponent(u,M);o.setComponent(u+d,M,S)}}else a.set(h.array,c);c+=h.count*e}return r!==void 0&&(o.gpuType=r),o}const Io=new Map;function Ge(n){return Io.has(n)||Io.set(n,new Ba({color:n,roughness:.85})),Io.get(n)}function D(n,t,e,i,r,s,a,o,c=!1){const l=new Ot(c?new sc(r,s,a,2,Math.min(.09,r/4,s/4,a/4)):new wi(r,s,a),Ge(o));return l.position.set(t,e,i),l.castShadow=!0,l.receiveShadow=!0,n.add(l),l}function _i(n,t,e,i,r,s,a=[1,1,1]){const o=new Ot(new nc(r,12,10),Ge(s));return o.position.set(t,e,i),o.scale.set(...a),o.castShadow=!0,n.add(o),o}function Bu(n){n.material=n.material.clone();const t=n.material;return t.transparent=!0,t.opacity=1,n.userData.dynamic=!0,n}function wn(n,t,e,i,r,s=3,a="#f2c65a"){const o=document.createElement("canvas");o.width=s>=8?2048:1024,o.height=s>=8?512:256;const c=o.getContext("2d");if(c.scale(o.width/2048,o.height/512),c.fillStyle=a,c.fillRect(0,0,2048,512),c.fillStyle="#263f40",c.fillRect(0,0,2048,42),c.fillRect(0,470,2048,42),c.fillStyle="#233d42",c.textBaseline="middle",/MOVECRAFT/.test(t))c.beginPath(),c.roundRect(70,86,340,340,76),c.fill(),c.fillStyle=a,c.font="1000 230px Nunito, sans-serif",c.textAlign="center",c.fillText("M",240,270),c.fillStyle="#233d42",c.textAlign="left",c.font="1000 205px Nunito, sans-serif",c.fillText("MOVECRAFT",470,270);else{const u=Math.min(190,1660/Math.max(5,t.length)*2.15);c.font=`1000 ${u}px Nunito, sans-serif`,c.textAlign="center",c.fillText(t,1024,248)}const l=new Ql(o);l.colorSpace=on,l.anisotropy=8;const h=new Ee;h.position.set(e,i,r),n.add(h),D(h,0,0,-.035,s,s/4,.1,2506560,!0);const d=new Ot(new Ai(s*.94,s*.235),new ui({map:l,side:xn}));d.position.z=.022,h.add(d);for(const u of[-s*.43,s*.43])_i(h,u,s*.085,.04,.035,16313807);return h}function dx(n,t,e=7391353,i=!1,r=0){const s=new Ee,a=i?2.5:3.45,o=i?1.5:2.05,c=document.createElement("canvas");c.width=768,c.height=500;const l=c.getContext("2d"),h=new Ql(c),d=/LOCKED|MAX/.test(t);h.colorSpace=on;const u=new Ot(new Ai(a,o),new ui({map:h,transparent:!0,depthWrite:!1}));u.rotation.x=-Math.PI/2,u.position.y=.018,u.renderOrder=3,u.userData.owned=!0,s.add(u);const p=()=>{if(l.save(),l.translate(142,235),l.fillStyle=d?"#87918b":"#244456",l.strokeStyle=l.fillStyle,l.lineWidth=18,l.lineCap="round",l.lineJoin="round",/collect/i.test(n))l.beginPath(),l.arc(0,0,82,0,Math.PI*2),l.stroke(),l.font="1000 112px Nunito, sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillText("$",0,5);else if(/cargo|rack|lining/i.test(n))l.strokeRect(-72,-52,144,112),l.beginPath(),l.moveTo(-52,-20),l.lineTo(52,-20),l.moveTo(-52,20),l.lineTo(52,20),l.stroke();else if(/truck|fleet/i.test(n)){l.fillRect(-70,-30,90,62),l.fillRect(20,-14,55,46);for(const m of[-42,47])l.beginPath(),l.arc(m,44,18,0,Math.PI*2),l.fill()}else/crew|strength|worker|hire/i.test(n)?(l.beginPath(),l.arc(0,-45,30,0,Math.PI*2),l.fill(),l.beginPath(),l.roundRect(-48,-5,96,82,28),l.fill()):/chair|assembly|paint|pack|wood|timber|mill/i.test(n)?(l.strokeRect(-42,-22,72,58),l.beginPath(),l.moveTo(-42,35),l.lineTo(-42,78),l.moveTo(30,35),l.lineTo(30,78),l.moveTo(-42,-22),l.lineTo(-42,-78),l.stroke()):/yard|factory|production|grounds/i.test(n)?(l.fillRect(-65,-42,130,112),l.fillStyle="#fff8e5",l.fillRect(-22,5,44,65),l.fillStyle=d?"#87918b":"#244456",l.beginPath(),l.moveTo(-82,-42),l.lineTo(0,-95),l.lineTo(82,-42),l.fill()):(l.strokeRect(-55,-68,110,136),l.beginPath(),l.moveTo(-28,-28),l.lineTo(30,-28),l.moveTo(-28,5),l.lineTo(30,5),l.moveTo(-28,38),l.lineTo(12,38),l.stroke());l.restore()};let M=-1;const S=m=>{const f=Pe.clamp(m,0,1);if(Math.abs(M-f)<.004)return;M=f,s.userData.progress=f,l.clearRect(0,0,c.width,c.height),l.fillStyle=d?"#d4d6c9":"#fff4d3",l.beginPath(),l.roundRect(18,18,732,464,54),l.fill(),f>0&&(l.save(),l.beginPath(),l.roundRect(18,18,732,464,54),l.clip(),l.fillStyle="#75c995",l.fillRect(18,18,732*f,464),l.restore()),l.lineWidth=22,l.strokeStyle="#244456",l.beginPath(),l.roundRect(18,18,732,464,54),l.stroke(),l.fillStyle="#244456",l.beginPath(),l.roundRect(42,76,204,322,44),l.fillStyle="#ffffff80",l.fill(),p(),l.fillStyle="#244456",l.textAlign="left",l.textBaseline="middle";const b=(t.startsWith("$"),t),C=n.toUpperCase();l.font=`1000 ${C.length>19?43:C.length>13?50:58}px Nunito, sans-serif`,l.fillText(C,286,155,425),l.font=`1000 ${b.length>9?88:116}px Nunito, sans-serif`,l.fillText(b,286,292,425),l.fillStyle="#244456",l.globalAlpha=.75,l.fillRect(286,390,424,18),l.globalAlpha=1,l.fillStyle=d?"#87918b":"#49a971",l.fillRect(286,390,424*f,18),h.needsUpdate=!0};return s.userData.setProgress=S,s.userData.padHalfWidth=a/2,s.userData.padHalfDepth=o/2,s.userData.graphicLabel=n,s.userData.hasPurposeIcon=!0,S(r),s}function fx(n,t,e,i,r,s=2){const a=document.createElement("canvas");a.width=512,a.height=150;const o=a.getContext("2d");o.fillStyle="#e9c65f",o.fillRect(0,0,512,150),o.fillStyle="#263f40",o.font="900 66px Barlow, sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText(t,256,78);const c=new Ql(a);c.colorSpace=on;const l=new Ot(new Ai(s,s*150/512),new ui({map:c}));l.position.set(e,i,r),n.add(l)}function Fh(n=14983231,t=0){const e=new Ee,i=new Ee;e.add(i);const r=[15119758,10382672,13209191][t%3];D(i,0,1,0,.64,.66,.39,n,!0),D(i,0,.73,.02,.59,.25,.4,3296353,!0),D(i,0,1.08,.215,.08,.43,.025,16377270),D(i,-.18,1.13,.22,.13,.15,.025,16377270),_i(i,0,1.65,.02,.36,r,[1,1.08,.93]),_i(i,-.35,1.65,.02,.08,r),_i(i,.35,1.65,.02,.08,r),_i(i,0,1.61,.35,.08,r);for(const l of[-.13,.13])_i(i,l,1.71,.324,.046,2435890),D(i,l,1.81,.32,.11,.035,.03,5323570,!0);D(i,0,1.485,.348,.085,.018,.018,11890529,!0),_i(i,0,1.91,-.035,.35,t%2?5719095:2506572,[1.04,.43,1.03]),t%2===0&&D(i,0,1.91,.31,.49,.07,.29,3234931,!0),D(i,0,1.18,.225,.43,.34,.025,15721405,!0);for(const l of[-.27,.27])D(i,l,1.18,.233,.07,.55,.025,15721405,!0);const s=[],a=[],o=[],c=[];for(const l of[-1,1]){const h=new Ee;h.position.set(l*.18,.7,0),i.add(h),D(h,0,-.14,0,.24,.3,.28,3296353,!0);const d=new Ee;d.position.y=-.29,h.add(d),D(d,0,-.13,0,.23,.29,.27,3296353,!0),D(d,0,-.3,.07,.28,.18,.4,5132616,!0),o.push(d),s.push(h);const u=new Ee;u.position.set(l*.39,1.24,0),i.add(u),D(u,0,-.13,0,.22,.36,.27,n,!0);const p=new Ee;p.position.y=-.28,u.add(p),D(p,0,-.1,0,.18,.24,.2,r,!0),_i(p,0,-.24,.015,.115,r),c.push(p),a.push(u)}return e.userData.rig={body:i,legs:s,arms:a},{root:e,animate(l,h,d=!1,u=!1){const p=u?13.5:8.4,M=u?.72:.42;i.position.y=h?Math.abs(Math.sin(l*p))*(u?.065:.035):Math.sin(l*1.8)*.008,i.rotation.z=h?Math.sin(l*p/2)*(u?.035:.018):0,i.rotation.x=u?.13:0,s.forEach((S,m)=>S.rotation.x=h?Math.sin(l*p+m*Math.PI)*M:0),o.forEach((S,m)=>S.rotation.x=h?Math.max(0,-Math.sin(l*p+m*Math.PI))*(u?.9:.4):0),c.forEach(S=>S.rotation.x=d?-.35:u?-.8:-.15),a.forEach((S,m)=>S.rotation.x=d?-1.12:h?-Math.sin(l*p+m*Math.PI)*(u?.62:.34):.02)}}}function ac(n){const t=new Ee;if(n===0||n===1){const e=n===0?2.28:1.44,i=n===0?13400401:6396560;D(t,0,.46,0,e,.5,1.4,i,!0),D(t,0,.95,-.57,e,.83,.24,i,!0);for(const s of[-1,1])D(t,s*(e/2-.12),.73,0,.22,.48,1.4,i,!0),D(t,s*(e/2-.2),.12,.45,.12,.24,.12,6837063);const r=n===0?2:1;for(let s=0;s<r;s++)D(t,(s-(r-1)/2)*.95,.76,.02,n===0?.91:1.05,.17,1.01,n===0?14721135:9287842,!0)}else if(n===2)D(t,0,.76,0,1.45,1.05,.17,2440008,!0),D(t,0,.77,.096,1.29,.89,.02,6655645),D(t,0,.18,0,.14,.3,.14,2440008),D(t,0,.05,0,.6,.1,.5,2440008);else if(n===3)D(t,0,.36,0,.71,.72,.71,12489310,!0),D(t,0,.726,0,.14,.015,.71,15324324),wn(t,"BOOKS",0,.4,.36,.55,"#dab989");else if(n===4){const e=new Ot(new Wn(.29,.22,.49,12),Ge(14059109));e.position.y=.25,t.add(e);for(let i=0;i<7;i++){const r=i*2.4,s=_i(t,Math.sin(r)*.18,.8+i%3*.11,Math.cos(r)*.18,.23,i%2?7380055:4424296,[.45,1.6,.55]);s.rotation.z=Math.sin(r)*.65}}else if(n===5){D(t,0,.56,0,1.5,1.08,.72,11040848,!0);for(let e=0;e<3;e++)D(t,0,.24+e*.32,.371,1.36,.27,.035,12950638),D(t,0,.24+e*.32,.403,.3,.04,.04,4608076)}else if(n===6){const e=new Ot(new Wn(.34,.4,.12,16),Ge(4215382));e.position.y=.06,t.add(e),D(t,0,.83,0,.08,1.55,.08,4215382);const i=new Ot(new bs(.37,.62,16,1,!0),Ge(15321203));i.position.y=1.55,i.rotation.x=Math.PI,t.add(i)}else if(n===7)D(t,0,1.02,0,.72,1.95,.16,7756355,!0),D(t,0,1.02,.09,.56,1.7,.022,10207944,!0),D(t,0,.08,0,.72,.16,1.45,7756355,!0);else if(n===8){D(t,0,.78,0,2.35,1.42,1.22,3159611,!0),D(t,0,1.43,-.23,2.2,.18,.7,2435630,!0),D(t,0,.92,.61,2.15,.13,.38,15526105);for(let e=0;e<10;e++)D(t,-1+e*.22,1.01,.68,.025,.12,.2,3225146);for(const e of[-.9,.9])D(t,e,.25,.2,.17,.5,.17,2435630)}else D(t,0,.42,0,.72,.82,.72,13081188,!0),wn(t,"FRAGILE",0,.45,.38,.72,"#efb36d");return t}const wr={front:.2,back:5.8,rampEnd:8.8,depth:7};function px(n=7,t=0,e=0){const i=new Ee,r=[];i.name="active-truck";const s=wr.front+n*.8,a=s-wr.front,o=(s+wr.front)/2,c=e?15777087:11437893,l=e>1?16052194:e?14935256:11448487;if(wr.back=s,wr.rampEnd=s+2.2,wr.depth=n,D(i,3,.55,o,3.3,.42,a+.2,3162186,!0),D(i,3,.735,o,3.2,.09,a,13350548),e>0){D(i,3,1.9,.15,3.3,2.65,.15,l);for(const S of[1.35,4.65]){D(i,S,.99,o,.1,.4,a+.2,l),D(i,S,2.8,o,.08,.1,a+.2,9808549);for(const m of[.15,s+.05])D(i,S,1.95,m,.09,1.8,.09,12240831)}}else{D(i,3,.88,.15,3.25,.22,.1,9010537,!0);for(const S of[1.35,4.65])D(i,S,.88,o,.1,.22,a+.1,9010537,!0)}const h=[];if(e>0)for(const S of[1.35,4.65])h.push(Bu(D(i,S,1.72,o,.07,1.82,a,l,!0)));D(i,3,1.19,-1.05,3.2,1.65,2.1,c,!0);const d=D(i,3,1.8,-2.12,2.82,.65,.04,6523029);d.material=new Ba({color:7974585,transparent:!0,opacity:.55,roughness:.18,metalness:.05}),D(i,2.45,1.13,-1.25,.72,.72,.72,3362132,!0),D(i,3.55,1.13,-1.25,.72,.72,.72,3362132,!0),D(i,3,1.38,-1.84,2.5,.18,.45,2506051,!0);const u=new Ot(new Wr(.24,.045,8,18),Ge(2439229));u.position.set(3.72,1.55,-1.65),u.rotation.x=Math.PI/2.8,i.add(u),D(i,3,2.03,-1.05,3.3,.14,2.2,16111479,!0),D(i,3,.63,-2.16,3.15,.28,.16,4150615,!0),D(i,3,.91,-2.2,1.05,.2,.05,6517617,!0);for(const S of[1.78,4.22])D(i,S,1.04,-2.23,.48,.24,.05,16770720,!0),D(i,S,1.58,-2.19,.19,.13,.06,14253140,!0);for(const S of[1.25,4.75])D(i,S,1.65,-1.25,.22,.15,.38,3164235,!0);for(const S of[1.37,4.63]){D(i,S,1.78,-1,.025,.55,1.5,6523029);for(const m of[-1.2,s-.45]){const f=new Ot(new Wn(.46,.46,.28,16),Ge(2504510));f.rotation.z=Math.PI/2,f.position.set(S,.46,m),f.castShadow=!0,i.add(f),r.push(f);const b=new Ot(new Wn(.23,.23,.3,12),Ge(10203048));b.rotation.z=Math.PI/2,b.position.copy(f.position),i.add(b),r.push(b)}}for(const S of[1.8,4.2])D(i,S,.95,-2.13,.45,.22,.06,16772529,!0);if(e===0){D(i,2.35,2.08,-2.14,.55,.18,.025,8215107,!0),D(i,3.7,1.3,-2.205,.6,.1,.028,7296062,!0);const S=D(i,3,.58,-2.29,3.2,.2,.15,4740435,!0);S.rotation.z=.045;for(const[m,f,b]of[[2.45,1.82,.5],[3.48,1.78,-.45]]){const C=D(i,m,f,-2.149,.025,.55,.018,14279381);C.rotation.z=b}}if(e>=1){for(const S of[1.34,4.66])D(i,S,1.09,o,.035,.17,a,3768216);D(i,3,.61,-2.25,3.3,.18,.18,12965847,!0)}if(e>=2){D(i,3,2.16,-1.12,2.35,.2,1.2,4096407,!0);for(const S of[1.55,4.45])D(i,S,1.09,-2.27,.18,.35,.04,15334143,!0)}if(e>=3){for(const S of[1.6,4.4])D(i,S,.63,o,.13,.27,a-.2,15908675,!0);for(const S of[2.3,3.7])D(i,S,2.31,-1.25,.46,.12,.22,16758596,!0)}if(e>=4){D(i,3,.86,-2.28,1.3,.36,.09,2379623,!0);for(let S=0;S<4;S++)D(i,2.55+S*.3,.86,-2.34,.08,.25,.025,13624545);D(i,3,2.37,-.8,1.2,.08,.6,15850653,!0)}const p=new Ee;p.position.set(3,.78,s),i.add(p),D(p,0,0,1.15,3.2,.1,2.3,8690328,!0);for(const S of[-1.45,1.45])D(p,S,.08,1.15,.12,.12,2.15,4217958,!0);if(D(p,0,.08,2.18,1.15,.1,.1,15779678,!0),t){const S=new Ee;S.name="shelf",D(S,1.7,1.55,1.35,.55,.08,2.1,7047042);for(const m of[.35,2.35])D(S,1.7,.75,m,.08,1.6,.08,5402218);if(t>1&&D(S,1.7,2.2,1.35,.55,.08,2.1,7047042),t>=3){for(const m of[1.7,4.3]){for(const f of[1.1,1.62,2.14])D(S,m,f,1.35,.55,.07,2.25,5797232);for(const f of[.3,1.35,2.4])D(S,m,1.62,f,.52,1.12,.06,5007463)}for(const m of[.72,1.45,2.18])D(S,1.7,1.38,m,.42,.35,.55,14199144,!0)}i.add(S)}fx(i,e?"MOVECRAFT":"M • MOVING",3,1.18,-2.205,1.75);const M=Bu(D(i,3,2.83,o,3.32,.09,a,e>1?14862703:10134942,!0));if(M.visible=e>0,e>1)for(const S of[o-a*.32,o+a*.32])D(i,3,2.76,S,2.9,.08,.08,16044905);for(let S=0;S<=4;S++)D(i,1.4+S*.8,.788,o,.018,.008,a,15392707);for(let S=0;S<=n;S++)D(i,3,.79,.2+S*.8,3.2,.008,.018,15392707);return i.userData.rampPivot=p,i.userData.enclosed=e>0,i.userData.cargoWalls=h,i.userData.roof=M,i.userData.wheels=r,i}const Aa=4,Oh=7,ee=.8,Fi=[{id:"linden",name:"Linden District",x:-60,variant:0},{id:"old-town",name:"Old Town",x:-48,variant:1},{id:"market",name:"Market Square",x:58,variant:2},{id:"birch",name:"Birch Road",x:70,variant:3},{id:"lake",name:"Lake View",x:82,variant:4}],Ki=[{name:"Corduroy Sofa",w:3,d:2,value:230,weight:4,vulnerability:0},{name:"Armchair",w:2,d:2,value:110,weight:2,vulnerability:0},{name:"Television",w:2,d:1,value:270,weight:2,vulnerability:8},{name:"Book Box",w:1,d:1,value:65,weight:3,vulnerability:0},{name:"Houseplant",w:1,d:1,value:85,weight:1,vulnerability:7},{name:"Dresser",w:2,d:1,value:160,weight:4,vulnerability:1},{name:"Floor Lamp",w:1,d:1,value:120,weight:1,vulnerability:11},{name:"Standing Mirror",w:1,d:2,value:310,weight:2,vulnerability:14},{name:"Piano",w:3,d:2,value:620,weight:7,vulnerability:9},{name:"China Box",w:1,d:1,value:390,weight:2,vulnerability:17}];function mx(n){let t=n>>>0;return()=>(t=Math.imul(1664525,t)+1013904223>>>0)/4294967296}function gx(n,t){const e=Array.from({length:t},()=>Array(Aa).fill(!1)),i=r=>{if(r>=n.length)return!0;const s=Ki[n[r]];for(const a of[!1,!0]){const o=a?s.d:s.w,c=a?s.w:s.d;if(!(a&&s.w===s.d))for(let l=0;l<=t-c;l++)for(let h=0;h<=Aa-o;h++){let d=!0;for(let u=0;u<c;u++)for(let p=0;p<o;p++)d&&=!e[l+u][h+p];if(d){for(let u=0;u<c;u++)for(let p=0;p<o;p++)e[l+u][h+p]=!0;if(i(r+1))return!0;for(let u=0;u<c;u++)for(let p=0;p<o;p++)e[l+u][h+p]=!1}}}return!1};return i(0)}function _x(n=0,t=0){const e=mx(n*997+t*313+41),i=5+t*2,r=Math.min(6+t+Math.floor(n/3),11);let s=n===0&&t===0?[0,1,2,3,4,5]:Array.from({length:r},(o,c)=>(c*3+n*2+t)%Ki.length);for((n!==0||t!==0)&&s.sort((o,c)=>Ki[c].w*Ki[c].d-Ki[o].w*Ki[o].d);s.length>3&&!gx(s,i);)s.pop();const a=[];return s.map((o,c)=>{const l=Ki[o],h=l.w*ee/2,d=l.d*ee/2;let u=-3,p=2,M=!1;for(let S=0;S<250;S++){const m=-9.75+h+e()*(8.3-h*2),f=-4.75+d+e()*(8.7-d*2),b=(n+1)%2?Math.abs(f+.35)<d+.32:Math.abs(m+5.6)<h+.32,C=a.some(E=>Math.abs(m-E.x)<h+E.hw+.24&&Math.abs(f-E.z)<d+E.hd+.24);if(!b&&!C){u=Math.round(m*10)/10,p=Math.round(f*10)/10,M=!0;break}}if(!M)for(let S=-4.2+d;S<=4.1-d&&!M;S+=.45)for(let m=-9.7+h;m<=-1.5-h&&!M;m+=.45){const f=(n+1)%2?Math.abs(S+.35)<d+.24:Math.abs(m+5.6)<h+.24,b=a.some(C=>Math.abs(m-C.x)<h+C.hw+.16&&Math.abs(S-C.z)<d+C.hd+.16);!f&&!b&&(u=Math.round(m*10)/10,p=Math.round(S*10)/10,M=!0)}return a.push({x:u,z:p,hw:h,hd:d}),{...l,model:o,id:c,fragile:l.vulnerability>=7,vulnerability:l.vulnerability+Math.min(n*1.5,9),location:"pickup",x:0,z:0,pickupX:u,pickupZ:p,rotated:!1}})}function oc(n=0,t=0,e=n){const i=["Baumann Family","Mara King","Morning Glow Café","Dr. Hoffman","Sun Deck Hotel","Northern Lights Gallery"],r=["First Apartment Move","Old House, Narrow Doors","Café Grand Opening","Delicate Private Move","Major Hotel Move-In","Premium Art Transport"],s=Math.abs((e*3+n)%Fi.length);let a=Math.abs((e*7+n+2)%Fi.length);const o=Fi.map((u,p)=>({site:u,index:p})).filter(({site:u,index:p})=>p!==s&&Math.abs(u.x-Fi[s].x)>=18);(a===s||Math.abs(Fi[a].x-Fi[s].x)<18)&&(a=o[Math.abs(e+n)%o.length].index);const c=Fi[s],l=Fi[a],h=_x(n,t),d=Math.round(h.reduce((u,p)=>u+p.value,0)*(1+Math.min(n,8)*.08));return{client:i[n%i.length],title:r[n%r.length],from:c.name,to:l.name,fromSite:c,toSite:l,difficulty:n+1,items:h,reward:d}}function pn(n){return n.rotated?[n.d,n.w]:[n.w,n.d]}function Bh(n,t,e,i,r=Aa,s=Oh){const[a,o]=pn(t);return Number.isInteger(e)&&Number.isInteger(i)&&e>=0&&i>=0&&e+a<=r&&i+o<=s&&!n.some(c=>{if(c.id===t.id||c.location!=="truck")return!1;const[l,h]=pn(c);return e<c.x+l&&e+a>c.x&&i<c.z+h&&i+o>c.z})}function xx(n,t,e,i,r=Aa,s=Oh){const[a,o]=pn(t),c=Math.max(0,Math.min(r-a,e.x)),l=Math.max(0,Math.min(s-o,e.z));let h=null,d=1/0;for(let u=0;u<=s-o;u++)for(let p=0;p<=r-a;p++){const M=(u-l)**2*1.2+(p-c)**2+Math.hypot(p+a/2-i.x,u+o/2-i.z)*.015;M>=d||!Bh(n,t,p,u,r,s)||(h={x:p,z:u,w:a,d:o,valid:!0},d=M)}return h??{x:Math.round(c),z:Math.round(l),w:a,d:o,valid:!1}}const vx=["supply","mill","assembly","paint","packing"],nr={truck:"Complete truck upgrade",cargo:"Included with truck",gear:"Included with truck",worker:"Strength, stamina & speed",yard:"Expand company base",hire:"Hire crew with truck",fleet:"Employee truck upgrade",factory:"Buy furniture company"},dn={truck:4,cargo:3,gear:3,worker:4,yard:4,hire:4,fleet:4,factory:1};function zh(){return{cash:450,jobs:0,earned:0,levels:{truck:0,cargo:0,gear:0,worker:0,yard:0,hire:0,fleet:0,factory:0},fleet:[],timber:0,parts:0,products:0,painted:0,packed:0,sold:0,production:0,supply:0,test:!1,contributions:{},stationLevels:{supply:0,mill:0,assembly:0,paint:0,packing:0},stationProgress:{supply:0,mill:0,assembly:0,paint:0,packing:0},stationContributions:{},daily:{lastClaim:"",streak:0},finished:!1}}function Mx(n){const t=zh(),e={...t,...n,levels:{...t.levels,...n?.levels},contributions:{...t.contributions,...n?.contributions},stationLevels:{...t.stationLevels,...n?.stationLevels},stationProgress:{...t.stationProgress,...n?.stationProgress},stationContributions:{...t.stationContributions,...n?.stationContributions}};return e.levels.truck=Math.min(dn.truck,Math.max(e.levels.truck,e.levels.cargo,e.levels.gear)),e.levels.cargo=e.levels.truck,e.levels.gear=e.levels.truck,e.fleet=(e.fleet??[]).map(i=>({...i,pending:i.pending??0})),e.levels.hire=Math.max(e.levels.hire,e.fleet.length),e.levels.fleet=e.fleet.length,e.levels.factory=e.finished?1:0,e}function ms(n,t){return Math.round({truck:900,cargo:800,gear:450,worker:400,yard:1800,hire:2200,fleet:1800,factory:5e4}[t]*(1+n.levels[t]*.8))}function kh(n,t){return n.levels[t]>=dn[t]?"Maximum level":t==="yard"&&n.levels.truck<dn.truck?"Max your own truck first":t==="hire"&&n.levels.yard<1?"Expand the base for a parking bay":t==="hire"&&n.fleet.length>=n.levels.yard?"Upgrade the base for another parking bay":t==="fleet"?"Upgrade employee trucks at their own parking bay":t==="factory"&&!Hh(n)?"Max every truck, crew and base upgrade first":""}function Sx(n,t){const e=kh(n,t);if(e)return e;const i=Math.max(0,ms(n,t)-(n.contributions?.[t]??0));return!n.test&&n.cash<i?`Need $${i}`:(n.test||(n.cash-=i),n.contributions&&delete n.contributions[t],n.levels[t]++,t==="truck"&&(n.levels.cargo=n.levels.truck,n.levels.gear=n.levels.truck),t==="hire"&&(n.fleet.push({level:0,phase:-n.fleet.length*.08,completed:0,pending:0,route:n.fleet.length%3}),n.levels.fleet=n.fleet.length),t==="factory"&&(n.finished=!0),"")}function Ha(n,t){n.cash+=Math.round(t),n.earned+=Math.round(t)}function yx(n,t){const e=n.fleet[t];if(!e||e.level>=4)return!1;const i=1e3*(e.level+1),r=Math.max(0,i-(e.contribution??0));return!n.test&&n.cash<r?!1:(n.test||(n.cash-=r),e.contribution=0,e.level++,!0)}function Gh(n){return 48-n.level*5}function Hh(n){return n.levels.truck>=dn.truck&&n.levels.worker>=dn.worker&&n.levels.yard>=dn.yard&&n.fleet.length>=dn.hire&&n.fleet.every(t=>t.level>=4)}function bx(n){return 260+n.level*125}function Ex(n,t){const e=n.fleet[t],i=Math.round(e?.pending??0);return!e||i<=0?0:(e.pending=0,Ha(n,i),i)}function Tx(n,t=new Date){const e=t.toISOString().slice(0,10);if(n.daily.lastClaim===e)return 0;const i=new Date(t);i.setUTCDate(i.getUTCDate()-1),n.daily.streak=n.daily.lastClaim===i.toISOString().slice(0,10)?Math.min(7,n.daily.streak+1):1,n.daily.lastClaim=e;const r=150+(n.daily.streak-1)*75;return Ha(n,r),r}function wx(n,t){return n.levels.factory<1?"Build the workshop first":t==="supply"?!n.test&&n.cash<24?"Need $24 for timber":"":t==="mill"?n.timber<1?"Collect timber first":"":t==="assembly"?n.parts<2?"Process two timber pieces first":"":t==="paint"?n.products<1?"Assemble a chair first":"":n.painted<1?"Paint a chair first":""}function Ax(n,t){const e=wx(n,t);return e||(t==="supply"?(n.test||(n.cash-=24),n.timber+=3,""):t==="mill"?(n.timber--,n.parts++,""):t==="assembly"?(n.parts-=2,n.products++,""):t==="paint"?(n.products--,n.painted++,""):(n.painted--,n.packed===0&&(n.supply=0),n.packed++,""))}function Rx(n,t){let e=0;for(const i of n.fleet){if((i.pending??0)>0){i.phase=0;continue}for(i.phase+=t/Gh(i);i.phase>=1;){i.phase--,i.completed++;const r=bx(i);i.pending=(i.pending??0)+r}}if(n.levels.factory&&!n.finished){const i={supply:8,mill:6,assembly:10,paint:7,packing:7};for(const r of vx)if(n.stationLevels[r]>=2){const s=i[r]/(1+(n.stationLevels[r]-2)*.7+n.levels.factory*.08);if(n.stationProgress[r]+=t/s,n.stationProgress[r]>=1){const a=Ax(n,r);n.stationProgress[r]=a?Math.min(.95,n.stationProgress[r]):n.stationProgress[r]-1}}if(n.packed>0?n.supply+=t:n.supply=0,n.supply>=10){n.supply=0,n.packed--,n.sold++;const r=190+n.levels.factory*35;Ha(n,r),e+=r}}return e}const Ra={base:0,pickup:-48,destination:66},An={minX:-90,maxX:102,minZ:-72,maxZ:86},sa=7,Nn=[-42,12,48],Al=[-78,-30,42,90],Ar=Al;function ni(n){n.removeFromParent(),n.traverse(t=>{t instanceof Ot&&(t.geometry.dispose(),t.userData.owned&&(t.material.map?.dispose(),t.material.dispose())),t instanceof Pf&&(t.material.map?.dispose(),t.material.dispose())})}function Rl(n){n.material=n.material.clone();const t=n.material;return t.transparent=!0,n.userData.owned=!0,n}function Cl(n,t,e,i,r,s,a,o){const c=new Ue;c.setAttribute("position",new ae([-r/2,0,-s/2,r/2,0,-s/2,0,a,-s/2,-r/2,0,s/2,r/2,0,s/2,0,a,s/2],3)),c.setIndex([0,2,1,3,4,5,0,3,5,0,5,2,2,5,4,2,4,1]),c.computeVertexNormals();const l=new Ot(c,Ge(o));return l.position.set(t,e,i),l.castShadow=!0,n.add(l),l}function Ca(n,t,e,i){D(n,t,.75,e,.2,1.5,.2,8411970);for(let r=0;r<3;r++){const s=i===1?new bs(1-r*.15,1.6,7):new tc(.9,1),a=new Ot(s,Ge(i===2?15181958:i===1?3770233:r%2?7845223:5087096));a.position.set(t+(i===1?0:Math.sin(r*3)*.4),1.55+r*.4,e+Math.cos(r*3)*.2),a.castShadow=!0,n.add(a)}}function Vh(n){n.updateMatrixWorld(!0);const t=new Map;n.traverse(e=>{if(e instanceof Ot&&!e.userData.owned&&e.material instanceof Ba){const i=Object.entries(e.geometry.attributes).map(([a,o])=>{const c=o;return`${a}:${c.itemSize}:${c.normalized}`}).sort().join("|"),r=`${e.material.uuid}:${e.geometry.index?"indexed":"plain"}:${i}`,s=t.get(r)??{material:e.material,meshes:[]};s.meshes.push(e),t.set(r,s)}});for(const{material:e,meshes:i}of t.values()){const r=i.map(o=>o.geometry.clone().applyMatrix4(o.matrixWorld)),s=hx(r);if(r.forEach(o=>o.dispose()),!s)continue;i.forEach(o=>{o.removeFromParent(),o.geometry.dispose()});const a=new Ot(s,e);a.castShadow=a.receiveShadow=!0,n.add(a)}}const Cx=n=>n==="industrial"?13025965:n==="shops"?14275260:10731392;function Px(){const n=new Ee,t=[],e=[],i=[],r=[],s=8295062,a=15655882,o=new Ot(new Ai(1800,1800),Ge(11060874));o.rotation.x=-Math.PI/2,o.position.y=-.09,o.receiveShadow=!0,n.add(o);const c=sa/2,l=1.3,h=(_,v,w)=>{const g=[];let T=v;for(const P of _)P-c>T&&g.push([T,P-c]),T=P+c;return T<w&&g.push([T,w]),g};for(const _ of Nn){D(n,6,-.025,_,208,.07,sa,s);for(const[v,w]of h(Ar,-98,110))for(const g of[-1,1])D(n,(v+w)/2,.045,_+g*(c+l/2),w-v,.1,l,a);for(let v=-96;v<108;v+=4.4)Ar.some(w=>Math.abs(v-w)<c+3)||D(n,v,.018,_,1.6,.012,.085,16248269)}for(const _ of Ar){for(const[v,w]of h(Nn,-82,84))D(n,_,-.025,(v+w)/2,sa,.07,w-v,s);for(const[v,w]of h(Nn,-82,84))for(const g of[-1,1])D(n,_+g*(c+l/2),.045,(v+w)/2,l,.1,w-v,a);for(let v=-80;v<82;v+=4.4)Nn.some(w=>Math.abs(v-w)<c+3)||D(n,_,.018,v,.085,.012,1.6,16248269)}const d=(_,v)=>{D(n,_,1.75,v,.12,3.5,.12,3958128),D(n,_,3.54,v,.65,.15,.45,16768657,!0)},u=(_,v)=>{D(n,_,.5,v,1.65,.16,.55,12094041,!0),D(n,_,.92,v-.25,1.65,.6,.12,12094041,!0);for(const w of[-.6,.6])D(n,_+w,.23,v,.1,.46,.5,4350316)};for(const _ of Ar)for(const v of Nn){for(const g of[-1,1])for(const T of[-1,1])D(n,_+g*(c+l/2),.045,v+T*(c+l/2),l,.1,l,a);if((_===-30||_===42)&&v===12||_===-78&&v===48)for(const g of[-1,1]){const T=_+g*(c+.75),P=v-g*(c+1.5);D(n,T,1.45,P,.13,2.9,.13,3955044),D(n,T,2.85,P,.36,.95,.26,3362392,!0);for(let L=0;L<3;L++)D(n,T,3.12-L*.26,P+.15,.19,.18,.05,[14186849,15778647,7521692][L],!0);for(let L=-2;L<=2;L++)D(n,_+L*1.1,.019,v+g*(c+1.7),.55,.012,1.3,16511188),D(n,_+g*(c+1.7),.019,v+L*1.1,1.3,.012,.55,16511188)}D(n,_+c+.8,1.2,v+c+2.8,.07,2.4,.07,5468538),wn(n,v<0?"GARDEN LANE":_<0?"MARKET STREET":"LINDEN WAY",_+c+.8,2.35,v+c+2.8,1.9,"#dbe8cf")}for(const _ of Nn)for(let v=-68;v<88;v+=18)Ar.some(w=>Math.abs(v-w)<8)||(d(v,_+c+.8),D(n,v+2,.017,_+c-.35,.48,.01,.36,5795961));const p=[{x:5,z:-14,w:64,d:43},{x:Ra.pickup-2,z:0,w:24,d:17},{x:Ra.destination-2,z:0,w:24,d:17}],M=(_,v,w=0)=>Math.abs(_.x-v.x)<(_.w+v.w)/2+w&&Math.abs(_.z-v.z)<(_.d+v.d)/2+w,S=_=>!p.some(v=>M(_,v,.5))&&!i.some(v=>M(_,v,.6))&&!Ar.some(v=>Math.abs(_.x-v)<_.w/2+c+l)&&!Nn.some(v=>Math.abs(_.z-v)<_.d/2+c+l),m=(_,v,w,g)=>t.push({x:_,z:v,w,d:g}),f=(_,v,w,g=!1)=>{const T=Wh(w,g);T.position.set(_,0,v),n.add(T),m(_,v,1.7,3.1)},b=(_,v,w)=>{Ca(n,_,v,w),m(_,v,.4,.4)},C=(_,v,w,g=1)=>{D(n,_,v,w,g+.14,1.14,.09,16445655),D(n,_,v,w+.06,g,.95,.04,8567235),D(n,_,v,w+.09,.055,.95,.035,16445655)},E=(_,v,w,g)=>{const T={x:_,z:v,w:14,d:16,kind:w};if(!S(T))return;i.push(T),D(n,_,.01,v,14,.06,16,Cx(w));const P=w==="shops"||w==="industrial",L=w==="dense",O=w==="modern",B=P||L?10:7,N=P?7:6,k=w==="shops"?7:L?6.5:w==="industrial"?4.3:O?3.5:3.1,q=v-2,X=[15719349,14001294,12242896,15198424];D(n,_,k/2,q,B,k,N,O?15789792:X[g%4],!0),m(_,q,B,N),O||P?(D(n,_,k+.15,q,B+.55,.3,N+.6,O?4811632:5077378,!0),O&&D(n,_-1,k+.33,q,3,.06,2,3562871)):(Cl(n,_,k,q,B+.6,N+.7,g%2?2:1.25,[12022866,6720918,9991776][g%3]),D(n,_+2,k+.65,q-1.2,.55,1.3,.55,10845797));for(const lt of[-1,1])for(const yt of[-1.6,1.6])D(n,_+lt*(B/2+.04),1.8,q+yt,.08,1.1,1.2,15919056),D(n,_+lt*(B/2+.09),1.8,q+yt,.025,.87,1,8567235);if(g%4===1)for(let lt=0;lt<6;lt++)D(n,_,.28+lt*.43,q+N/2+.014,B,.025,.018,13079681);if(L)for(const lt of[-1.6,1.6])D(n,_+lt,1.1,q+N/2+.16,.25,2.2,.25,15259321);const et=q+N/2;if(D(n,_,1,et+.06,1.1,2,.11,4812664,!0),w==="industrial"){D(n,_+2,1.55,et+.08,3.5,3.1,.14,6323589);for(let lt=0;lt<6;lt++)D(n,_+2,.25+lt*.48,et+.17,3.35,.045,.025,11453119);wn(n,["AUTO SERVICE","TYRE & REPAIR","LOCAL STORAGE","VAN RENTAL"][g%4],_,k-.6,et+.14,6,"#f6d183")}else{for(const lt of[-B*.32,B*.32])C(_+lt,1.9,et+.04,O?1.65:1.25);if(k>5)for(const lt of[-3,0,3])C(_+lt,4.8,et+.04,1.4),L&&(D(n,_+lt,4.08,et+.5,2.1,.12,.95,15785152),D(n,_+lt,4.55,et+.98,2.1,.8,.07,4947326));if(w==="shops"){for(const lt of[-3,3])D(n,_+lt,1.4,et+.13,2.4,2,.06,9422792);if(wn(n,["BAKERY","CORNER CAFE","FRESH MARKET","BOOKS & NEWS"][g%4],_,3.45,et+.18,6.8,"#f5d293"),D(n,_,2.9,et+.65,9,.15,1.2,[6397575,13928040][g%2]),u(_-3,v+5),zu(n,_+1.3,v+5),m(_-3,v+5,1.8,.7),D(n,_+2.7,.55,v+3.2,.6,1.1,.6,5075827,!0),g%4===1){D(n,_-3,.78,v+6.7,1,.09,.8,12818788);for(const lt of[-.8,.8])D(n,_-3+lt,.4,v+6.7,.42,.12,.45,12818788)}}}D(n,_+4.8,.055,v+5.2,3,.02,5.3,14142642),D(n,_,.056,v+4.6,1.5,.02,6,15193781);const Y=v<-45?-46.8:v>55?79.4:v>15?38.4:-16.6,Q=v+7.8,it=Math.max(0,Y-Q);if(it>0&&(r.push({x:_+4.8,z:(Q+Y)/2,w:3,d:it},{x:_,z:(Q+Y)/2,w:1.4,d:it}),D(n,_+4.8,.051,(Q+Y)/2,3,.015,it,14142642),D(n,_,.051,(Q+Y)/2,1.4,.015,it,15193781)),g%3!==1&&f(_+4.8,v+5,[14463339,8497586,13073769,15066319][g%4],w==="industrial"),!P){L||(D(n,_+4.8,1.15,v-4.6,2.35,2.3,3.4,14800831),D(n,_+4.8,2.37,v-4.6,2.65,.14,3.7,7311760),D(n,_+4.8,1,v-2.87,1.95,1.9,.06,7310474),D(n,_+4.8,.056,v+.1,2.45,.012,6,14142642),m(_+4.8,v-4.6,2.35,3.4));const lt=new Ot(new Wr(.28,.035,5,16),Ge(5406309));lt.rotation.x=-Math.PI/2,lt.position.set(_-2,.09,v+6),n.add(lt),b(_-4.8,v+5.3,g%3),D(n,_-2.3,.48,v+7,.09,.96,.09,8416083),D(n,_-2.3,.95,v+7,.55,.4,.42,6063494,!0),D(n,_-6.7,.45,v,.35,.9,13,6590054,!0);for(let yt=0;yt<5;yt++)D(n,_-3+yt*.45,.16,v+5,.22,.22,.22,[15975529,15177619,14279356][yt%3],!0);g%2===0&&zu(n,_-2,v+3.1)}for(let lt=0;lt<(L?3:1);lt++)D(n,_-B/2+.4+lt*.55,.4,et+.55,.43,.8,.46,5404791,!0)};for(const[_,v,w,g]of[[-64,-27,"shops",0],[-46,-27,"shops",1],[-64,30,"shops",2],[-46,30,"shops",3],[-64,-59,"homes",0],[-46,-59,"homes",1],[-16,-59,"homes",2],[3,-59,"homes",3],[24,-59,"homes",0],[56,-59,"modern",0],[75,-59,"modern",1],[56,-26,"modern",2],[75,-26,"modern",3],[-16,30,"industrial",0],[4,30,"industrial",1],[25,30,"industrial",2],[56,30,"dense",0],[75,30,"dense",1],[-64,65,"homes",2],[-46,65,"homes",3],[-16,65,"industrial",3],[4,65,"industrial",0],[56,65,"dense",2],[75,65,"dense",3]])E(_,v,w,g);for(const[_,v,w]of[[-54,-13,"square"],[24,65,"park"]]){const g={x:_,z:v,w:15,d:w==="square"?6:9,kind:w};if(S(g)){i.push(g),D(n,_,.045,v,15,.06,g.d,w==="square"?14930871:9549687),D(n,_,.085,v,13,.02,1.2,15127990);for(const T of[-5.5,5.5])b(_+T,v-2.5,0),u(_+T,v+2.5),d(_+T,v+3.8);if(w==="square"){const T=new Ot(new Wn(1.6,1.75,.4,16),Ge(14141351));T.position.set(_,.25,v),n.add(T),m(_,v,3.5,3.5);const P=new Ot(new Wn(1.4,1.4,.04,16),Ge(8045004));P.position.set(_,.47,v),n.add(P),D(n,_,1,v,.4,1.5,.4,15194041,!0)}else{for(const T of[-1.4,1.4])D(n,_+T,1,v-2,.12,2,.12,14857573);D(n,_,2,v-2,3,.13,.13,14857573),D(n,_,.75,v-2,.9,.1,.4,12810081)}}}for(const[_,v,w]of[[42,90,-15],[-30,90,40],[-63,75,81]]){D(n,(_+v)/2,.008,w,v-_,.025,3.2,10529698);for(const g of[-1,1])D(n,(_+v)/2,.039,w+g*1.9,v-_-sa,.04,.55,a)}for(const[_,v]of[[-63,Math.PI/2],[75,0]]){const w=[],g=[];for(let L=0;L<=24;L++){const O=v+L*Math.PI/48;for(const B of[13.4,16.6])w.push(_+Math.cos(O)*B,.023,66+Math.sin(O)*B);if(L<24){const B=L*2;g.push(B,B+1,B+2,B+1,B+3,B+2)}}const T=new Ue;T.setAttribute("position",new ae(w,3)),T.setIndex(g),T.computeVertexNormals();const P=T.index;for(let L=0;L<P.count;L+=3){const O=P.getX(L);P.setX(L,P.getX(L+2)),P.setX(L+2,O)}T.computeVertexNormals(),n.add(new Ot(T,Ge(10529698)))}for(let _=-68;_<86;_+=9)for(const v of[-72,-47,20,55,74]){const w={x:_,z:v,w:2.8,d:2.8};!S(w)||r.some(g=>M(w,g,.3))||v===20&&_>17&&_<26||(b(_,v,Math.abs(Math.round(_+v))%3),D(n,_,.07,v,2.2,.12,2.2,9942137,!0))}for(const _ of[19,21,23]){D(n,_,.4,20,1.5,.18,.12,15384971);for(const v of[-.5,.5])D(n,_+v,.24,20,.08,.48,.12,6978937)}D(n,-20,1.1,18,4,.13,1.7,4946820);for(const _ of[-21.7,-18.3])D(n,_,.55,18,.09,1.1,.09,4946820);u(-20,18),wn(n,"BUS",-22.5,2.2,18,.8,"#f5d58c");for(const[_,v]of[[-26,20],[38,-30],[86,22]])D(n,_,.5,v,.65,1,.4,7967115,!0),m(_,v,.65,.4),D(n,_+1.1,.42,v,.2,.84,.2,13207142,!0);for(let _=-64;_<=76;_+=20)D(n,_,1.6,-89,7,3.2,6,13161138),Cl(n,_,3.2,-89,7.5,6.5,1.4,8165011),Ca(n,_+7,-87,0);for(const _ of[-88,100])for(const v of Nn)D(n,_,3.4,v,1.4,1.2,8.4,5401456,!0),D(n,_,1.8,v-3.7,1.4,3.6,1,5401456,!0),D(n,_,1.8,v+3.7,1.4,3.6,1,5401456,!0);return Vh(n),n.userData.lots=i,{root:n,barriers:t,roofs:e}}function zu(n,t,e){for(const i of[-.4,.4]){const r=new Ot(new Wr(.28,.045,5,12),Ge(3495009));r.position.set(t+i,.32,e),n.add(r)}D(n,t,.6,e,.85,.055,.06,12484708),D(n,t+.2,.7,e,.06,.65,.06,12484708)}function Wh(n,t=!1){const e=new Ee;D(e,0,.65,0,1.55,.7,3,n,!0),D(e,0,t?1.35:1.12,t?.35:0,1.35,t?.9:.6,t?2:1.7,n,!0),D(e,0,1.2,-.9,1.2,.45,.06,8566465);for(const i of[-.77,.77])for(const r of[-.94,.94]){const s=new Ot(new Wn(.3,.3,.16,10),Ge(3426900));s.rotation.z=Math.PI/2,s.position.set(i,.3,r),e.add(s)}for(const i of[-.5,.5])D(e,i,.7,-1.52,.35,.2,.04,16769957);return e}function zr(n,t,e=!1){const i=new Ee,r=[],s=[],a=n-5.6,o=-.3,c=e?15259056:15656145;D(i,a,.015,o,10,.12,10.6,13807225);for(let u=0;u<20;u++)D(i,a-4.8+u*.5,.08,o,.016,.01,10.3,12557425);const l=(u,p,M,S)=>(r.push({x:u,z:p,w:M,d:S}),D(i,u,1.55,p,M,3.1,S,c,!0)),h=[l(a,-5.55,10,.22),l(a-5,o,.22,10.5),l(a+5,o,.22,10.5),l(a-3.55,4.95,2.9,.22),l(a+3.55,4.95,2.9,.22)];t%2?h.push(l(a-3.6,-.35,2.8,.15),l(a+3.6,-.35,2.8,.15)):h.push(l(a,-3.1,.15,4.6));for(const u of[a-3,a+3])D(i,u,1.9,-5.4,1.5,1.3,.09,9291988),D(i,u,1.9,-5.32,.07,1.3,.05,16777215);const d=Rl(Cl(i,a,3.2,o,10.6,11.1,2.05,e?5537671:12152400));s.push({mesh:d,bounds:{x:a,z:o,w:10.5,d:11}}),D(i,a,.04,6,4,.12,2.1,14731169);for(const u of[a-2.15,a+2.15])D(i,u,1.5,4.98,.18,3,.33,5406076);return D(i,a-2.6,.09,2.3,2.8,.025,2.3,14521975),D(i,a+2.7,.09,-3,2.8,.025,2.3,8241070),{root:i,barriers:r,roofs:s}}function Xh(n){const t=new Ee,e=[],i=[],r=n.levels.yard;D(t,5,-.005,-14,63,.1,43,13551792);const s=(a,o,c,l,h,d,u)=>{D(t,a,h/2,o,c,h,l,u,!0),e.push({x:a,z:o,w:c,d:l});const p=Rl(D(t,a,h+.15,o,c+.6,.3,l+.6,4353658,!0));i.push({mesh:p,bounds:{x:a,z:o,w:c+1,d:l+1}}),D(t,a,h-.55,o+l/2+.06,c,.7,.15,14922832);const M=wn(t,d,a,h-.52,o+l/2+.17,Math.min(c-1,22),"#ffe0a0");M.scale.y=.23};s(-8,-29,27,10,6.4,"MOVECRAFT • MOVING COMPANY",15326911);for(const a of[-18,-13,-8,-3,2])D(t,a,4.2,-23.94,3.4,1.25,.1,8566977),D(t,a,4.2,-23.85,.07,1.25,.04,16445911);D(t,-8,1.2,-23.9,2.6,2.4,.12,5537415),D(t,-8,2.65,-22.9,4.4,.15,2.1,15318368),s(-20,-15,8,13,4.2,"STORAGE",13031107),D(t,-15.94,1.65,-15,.12,3.3,4.5,5667459),s(22,-28,26,10,4.5,"GARAGES & SERVICE",14603702);for(const a of[13,22,31]){D(t,a,1.65,-22.93,6,3.3,.15,7509649);for(let o=0;o<7;o++)D(t,a,.2+o*.45,-22.82,5.9,.04,.03,11322808)}for(let a=0;a<r;a++){const o=8+a*4.8;for(const c of[-2,2])D(t,o+c,.055,-8,.075,.02,10,16773843);D(t,o,.055,-13,4,.02,.075,16773843)}if(r>=2){const a=Rl(D(t,20,3.8,-8,29,.2,11.4,5012096));i.push({mesh:a,bounds:{x:20,z:-8,w:30,d:12}})}for(const a of[{x:-26,z:-14,w:.3,d:43},{x:36,z:-14,w:.3,d:43},{x:5,z:-35,w:62,d:.3}])D(t,a.x,.45,a.z,a.w,.9,a.d,10005152),e.push(a);for(const[a,o]of[[-18,16],[35,2]])D(t,a,.4,7,o,.8,.3,10005152),e.push({x:a,z:7,w:o,d:.3});D(t,4,.07,7.7,16,.015,1.6,14274228);for(const a of[-3.4,11.4])D(t,a,.095,7.7,.12,.01,1.3,16377527);wn(t,"MOVECRAFT",-19,2.6,6.8,6,"#ffda78"),D(t,-19,1.25,6.6,.2,2.5,.2,4550005),D(t,-10,.55,-1,2.6,1.1,.8,5012609,!0),wn(t,"JOBS",-10,1.65,-.9,2,"#ffd168"),wn(t,"TRUCK UPGRADES",-.45,1.35,-3.35,3.7,"#fff0bd");for(const a of[-1.75,.85])D(t,a,.65,-3.43,.12,1.3,.12,4550005);for(let a=0;a<5;a++){const o=new Ot(new Wr(.42,.14,8,14),Ge(3754058));o.rotation.x=Math.PI/2,o.position.set(-22+a*.92,.18,-7.5),t.add(o)}D(t,-20,.08,-6.5,4.6,.04,.12,15185750),wn(t,"STRENGTH & STAMINA",-20,.32,-6.45,3.5,"#fff0bd"),wn(t,"YARD & CREWS",-8,3.75,-23.72,4.2,"#fff0bd");for(let a=0;a<3;a++){const o=-13.7+a*2.1,c=-19.3;for(let l=0;l<3;l++)D(t,o,.12+l*.13,c,1.5,.1,1.1,11635291);D(t,o,.72,c,1.15,.8,.8,14201211,!0),D(t,o,1.13,c,.12,.025,.8,15979675),e.push({x:o,z:c,w:1.5,d:1.1})}D(t,-14,.8,-10,1.25,1.6,1,5274996,!0),e.push({x:-14,z:-10,w:1.3,d:1.1}),D(t,-13,.45,-22,1.2,.9,.7,12351585,!0);for(const a of[-12.8,-11.8]){const o=new Ot(new bs(.22,.7,8),Ge(15179868));o.position.set(a,.35,-8),t.add(o)}D(t,-14,.8,-13,.07,1.6,.07,4027008),D(t,-14,.12,-12.7,.65,.08,.55,4027008),D(t,-13,.75,-15.5,1.1,1.5,.75,12891029,!0),e.push({x:-13,z:-15.5,w:1.1,d:.75});for(const a of[-22,-18]){const o=Wh(a===-22?11059896:13998968);o.position.set(a,0,2),t.add(o),e.push({x:a,z:2,w:1.7,d:3.1})}if(Ca(t,-24,-24,0),Ca(t,7,-26,1),r>=3)for(const a of[-17,-8,1])D(t,a,6.75,-29,4,.1,5,3563385);return Vh(t),{root:t,barriers:e,roofs:i}}function ku(n,t,e,i,r=7589002,s=0){const a=dx(n,t,r,!1,s);return a.position.set(e,.08,i),a}function Yh(n){return[1.4,1.4,1.4,.74,1.35,1.15,1.9,2.05,1.55,.9][n]??1}function Dx(n,t,e){for(const i of n)i.mode==="truck"&&(i.velocity.set(0,0,0),i.angular.set(0,0,0),i.settled=!0,i.mesh.position.copy(i.position),i.mesh.rotation.x=0,i.mesh.rotation.z=0)}const at=n=>document.querySelector(n);at("#app").innerHTML=`<div id="world"></div><header><div class="wallet"><small>COMPANY CASH</small><strong id="cash"></strong><span id="cash-mode"></span></div><button id="mode-toggle" title="Switch game mode">DEV</button><button id="daily-button" title="Daily reward">🎁</button><button id="settings" title="Settings">⚙</button><button id="test-toggle" title="Development tools">🧪</button></header>
<div id="right-rail"><aside id="job-card"><button id="job-toggle"><span class="job-icon">▣</span><span><small id="job-label">YOUR NEXT MOVE</small><strong id="job-title">Small beginnings</strong></span><b>⌄</b></button><div id="job-body"><div id="job-step"></div><div class="progress"><i id="job-progress"></i></div><div id="job-count"></div><div id="job-value"></div></div></aside><button id="company-toggle" class="side-button">▥ Company</button><aside id="company-panel" hidden><h2>Your company</h2><div id="company-stats"></div><div id="fleet-list"></div></aside></div>
<aside id="tests" hidden><h3>DEVELOPMENT WORKBENCH</h3><p class="dev-note">Unlimited money and direct test actions are active.</p><div class="test-grid"><button data-test="job">New job</button><button data-test="pack">Pack all</button><button data-test="deliver">Deliver all</button><button data-test="home">Back to yard</button></div><h3>INSPECT EACH UPGRADE</h3><div id="upgrade-tests" class="test-grid"></div><button data-test="restart">Reset test career…</button></aside>
<div id="money-stream"></div><div id="status-bar" role="status"><div id="status-main"><b id="nav-arrow">▲</b><span><small id="status-kicker">ROUTE</small><strong id="nav-label">Job board</strong><em id="nav-distance">0 m</em></span><div id="context-status"><b id="hint-key">E</b><span><span id="hint-text"></span><small id="status-vitals"><i><u id="energy"></u></i></small></span></div></div><div id="notice"></div><div id="purchase" hidden><strong id="purchase-name"></strong><div class="progress"><i id="purchase-progress"></i></div><small id="purchase-detail">STAND STILL TO INVEST</small></div></div><aside id="tutorial-card" hidden><small>TUTORIAL</small><h2 id="tutorial-title"></h2><p id="tutorial-text"></p><button id="tutorial-next">Got it</button></aside><nav id="camera-controls"><button id="camera-follow" title="Follow">◎</button><button id="zoom-in">＋</button><button id="zoom-out">−</button><button id="help">?</button></nav><button id="stuck-button" hidden>Got stuck?</button><footer><button data-action="interact"><b>E</b><span>Interact</span></button><button data-action="cab"><b>F</b><span>Cab</span></button><button data-action="rotate"><b>R</b><span>Rotate</span></button><button data-action="rear"><b>G</b><span>Rear</span></button></footer><dialog id="dialog"></dialog>`;let qh=!1,tt=zh(),Jt=null;for(const n of["movecraft-rewrite-v1","movecraft-update-backup"])try{const t=localStorage.getItem(n);if(t){Jt=JSON.parse(t);break}}catch{}try{if(Jt?.company&&(tt=Mx(Jt.company)),Jt&&Jt.worldVersion!==2){const n=t=>{t[0]>120?t[0]+=Ra.destination-144:t[0]>45&&(t[0]+=Ra.pickup-72)};for(const t of Jt.loads??[])t.mode!=="truck"&&n(t.position);Jt.truck&&(Jt.truck.position=[0,0,0],Jt.truck.yaw=0),Jt.player=[-6,0,1],Jt.navLeg="",Jt.navIndex=0,Jt.navPath=[],Jt.worldVersion=2}}catch{}let Pl=!0,Dl=.35,Uo=!0,Gu=null;const Ce=new Sf;Ce.background=new Ht(13032672);Ce.fog=new Kl(13032672,115,215);const hi=new Z_({antialias:!0});hi.setPixelRatio(Math.min(devicePixelRatio,1.5));hi.shadowMap.enabled=!0;hi.shadowMap.type=Ku;hi.toneMapping=Bl;hi.toneMappingExposure=1.15;at("#world").appendChild(hi.domElement);const be=new za(-18,18,12,-12,.1,450);be.position.set(22,29,26);be.zoom=.78;const ln=new Q_(be,hi.domElement);ln.enablePan=!1;ln.enableDamping=!0;ln.minZoom=.55;ln.maxZoom=3.5;ln.minPolarAngle=.35;ln.maxPolarAngle=1.03;Ce.add(new Xf(16775135,6588822,2));const Ti=new Kf(16772305,2.7);Ti.position.set(-25,45,20);Ti.castShadow=!0;Ti.shadow.mapSize.set(2048,2048);Object.assign(Ti.shadow.camera,{left:-32,right:32,top:32,bottom:-32,near:.1,far:100});Ti.shadow.normalBias=.035;Ce.add(Ti,Ti.target);const Va=Px();Ce.add(Va.root);const gs=new Ee;gs.name="navigation-route-guide";Ce.add(gs);const Rn=new Ee;Rn.name="navigation-parking-guide";const Ll=new ui({color:16768099,transparent:!0,opacity:.32,depthWrite:!1,side:xn,polygonOffset:!0,polygonOffsetFactor:-3}),_s=new Ot(new Ai(5.6,7.8),Ll);_s.rotation.x=-Math.PI/2;_s.position.y=.105;Rn.add(_s);const Il=new ui({color:16772495,transparent:!0,opacity:.95,depthWrite:!1});for(const[n,t,e,i]of[[-2.72,0,.16,7.8],[2.72,0,.16,7.8],[0,-3.82,5.6,.16],[0,3.82,5.6,.16]]){const r=new Ot(new wi(e,.035,i),Il);r.position.set(n,.13,t),r.userData.parkingSide=e<1,r.userData.endSign=Math.sign(t),Rn.add(r)}const xs=new qf(16767069,.8,13,2);xs.position.y=1.2;Rn.add(xs);Rn.visible=!1;Ce.add(Rn);let aa="",se=oc(0,tt.levels.truck,0),zi=se.fromSite.x,Sn=se.toSite.x,Qi=Xh(tt),ii=zr(zi,se.fromSite.variant),ri=zr(Sn,se.toSite.variant,!0);Ce.add(Qi.root,ii.root,ri.root);const Wa=Fh(15313475),st=Wa.root;st.position.set(-6,0,1);Ce.add(st);const lc=new Ot(new ec(.38,.46,32),new ui({color:16773043,side:xn}));lc.rotation.x=-Math.PI/2;lc.position.y=.04;st.add(lc);let Yt,Me=4.2,Nr=5,$e=!1,nn=!1,$t=null,Se=!1,ke=0,No=0,fa=100,kr=1,ir=1,Ul=0,Pa=0,ve=null;const de=[];let De=null,ki=[],vs=0,Qn=0,Gr="",On=0,Ie=Number(Jt?.tutorialStep??0),Cn=0,Fo=0,Oo=0,Da=0,_n=0,pa="",ma="",Hu=-1,Vu=-10,ss=!1,Fn=0,kn=!1,ga=0;const Nl=st.position.clone(),vi=new A,Ae=new Set,$h=new A(0,1,0),Bn=new Ot(new wi(1,.04,1),new ui({color:2981988,transparent:!0,opacity:.58,depthTest:!0,depthWrite:!1}));Ce.add(Bn);Bn.renderOrder=10;const cc=new Nf(new Of(Bn.geometry),new Sh({color:1527614,depthTest:!0,depthWrite:!1}));cc.renderOrder=11;Bn.add(cc);Bn.visible=!1;let Zn=[],_a=[],ls=[];const cn=n=>Yt.localToWorld(n.clone()),Xn=n=>Yt.worldToLocal(n.clone());function Hi(n=500,t=.1){if(Pl)try{const e=Gu??(Gu=new AudioContext);e.resume();const i=e.createOscillator(),r=e.createGain();i.frequency.value=n,r.gain.setValueAtTime(Dl*.1,e.currentTime),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+t),i.connect(r).connect(e.destination),i.start(),i.stop(e.currentTime+t)}catch{}}function ne(n){at("#notice").textContent=n,Da=4,at("#status-bar").classList.add("show-notice")}function sr(n){Ae.clear(),at("#dialog").innerHTML=`<button class="close" aria-label="Close">×</button>${n}`,at("#dialog").showModal(),at("#dialog .close").onclick=()=>at("#dialog").close()}const Hr=[["Your first day","The dark bar at the top is your single status bar. Its left side shows the current destination and distance; the right side always shows the useful button for what you are doing."],["Learn the controls","WASD moves, Shift sprints and Space jumps. E interacts, F uses the cab, R rotates furniture and G moves the rear. The four matching buttons at the bottom work the same way."],["Start at the job board","Follow the status bar to the NEXT MOVE field in the company yard. Stand on it or press E nearby. The job card on the right tracks furniture and payment."]];function Bi(n,t,e="Got it"){at("#tutorial-title").textContent=n,at("#tutorial-text").textContent=t,at("#tutorial-next").textContent=e,at("#tutorial-card").hidden=!1}function Fr(n){tt.jobs>0&&Ie<8&&(Ie=8),n==="job"&&Ie<=3?(Ie=4,Bi("Follow the route","Ground arrows lead to a different pickup address for every move. Park fully inside the yellow bay; it turns green when the truck is correctly parked.")):n==="lift"&&Ie<=4?(Ie=5,Bi("Load the furniture","Carry each item to the deck. The dark green preview is a valid grid space. Press R to rotate, then E to place. Any free space on the whole deck can be used.")):(n==="loaded"||n==="cab")&&Ie<=5?(Ie=6,Bi("Drive to delivery","Raise the rear with G, enter with F, then drive with W/S and steer with A/D. Furniture stays fixed and cannot be damaged. Follow the shortest ground-arrow route.")):n==="delivered"&&Ie<=6?(Ie=7,Bi("Choose your reward","After the last item, collect the normal payment or watch the short in-game video to double it.")):n==="paid"&&Ie<=7&&(Ie=8,Bi("Build the company","Truck upgrades combine length, shelves, body and roof. Max your truck to unlock the base, then hire crews with their own trucks. The gift button holds your daily reward.","Finish tutorial")),Xe()}at("#tutorial-next").onclick=()=>{Ie<2?(Ie++,Bi(Hr[Ie][0],Hr[Ie][1])):(Ie===2&&(Ie=3),at("#tutorial-card").hidden=!0),Xe()};function uc(){const n=Yt,t=n?.position.clone()??new A,e=n?.rotation.clone()??new li;for(const r of de)r.mode==="truck"&&Ce.attach(r.mesh);n&&ni(n),Nr=5+tt.levels.truck*2,Me=.2+Nr*.8,Yt=px(Nr,tt.levels.truck,tt.levels.truck),Yt.position.copy(t),Yt.rotation.copy(e),Ce.add(Yt);for(const r of de)r.mode==="truck"&&(Yt.add(r.mesh),r.mesh.position.copy(r.position));D(Yt,4.665,1.2,-1.3,.035,1.7,1.36,2110523,!0);const i=new Ee;i.position.set(4.69,.35,-1.95),D(i,0,.55,.65,.06,1.1,1.28,tt.levels.truck?15777087:11437893,!0),D(i,0,1.4,.65,.06,.62,1.28,3495010,!0),D(i,.035,1.4,.65,.025,.48,1.02,9091781);for(const r of[.04,1.26])D(i,.055,.85,r,.08,1.7,.06,3230808,!0);D(i,.075,.78,1.02,.035,.08,.24,2506569,!0),Yt.add(i),Yt.userData.cabDoor=i,Kh(),n&&qa()}function Lx(){ni(Qi.root),Qi=Xh(tt),Ce.add(Qi.root),mc(),Pn(),qa()}function Kh(){const n=e=>e*e*(3-2*e),t=n(Pe.clamp(kr*2,0,1));Yt.userData.rampPivot.rotation.x=Pe.lerp(-Math.PI/2,Math.atan(.78/2.2),t),Yt.userData.cabDoor&&(Yt.userData.cabDoor.rotation.y=n(Ul)*1.42)}function Es(n){n.mode==="truck"?(Yt.add(n.mesh),n.mesh.position.copy(n.position)):n.mode==="hand"?(st.add(n.mesh),n.mesh.position.set(0,.95,Ss(n))):(Ce.add(n.mesh),n.mesh.position.copy(n.position)),n.mesh.rotation.set(0,n.item.rotated?Math.PI/2:0,0)}function Ms(n=!1){if($e&&!nn&&!n)return ne("Finish this move and collect payment first.");const t=`${se.fromSite?.id??""}->${se.toSite?.id??""}`;for(const s of de)ni(s.mesh);de.length=0,$t=null,De=null,vs=tt.jobs;const e=Qn;do Qn=Math.floor(Math.random()*7);while(Qn===e);Gr="",On=0;const i=Math.max(tt.jobs,Math.floor((tt.levels.truck+tt.levels.worker)*.45));let r=0;do se=oc(i,tt.levels.truck,tt.jobs*11+Qn+r++);while(`${se.fromSite.id}->${se.toSite.id}`===t&&r<10);$e=!0,nn=!1,zi=se.fromSite.x,Sn=se.toSite.x,ni(ii.root),ni(ri.root),ii=zr(zi,se.fromSite.variant+Qn),ri=zr(Sn,se.toSite.variant+Qn,!0),Ce.add(ii.root,ri.root);for(const s of se.items){const a={item:s,mesh:ac(s.model),mode:"ground",position:new A(zi+s.pickupX,.12,s.pickupZ),velocity:new A,angular:new A,hitAt:-10,settled:!0};de.push(a),Es(a)}Pn(),ne(`New move: ${se.from} → ${se.to}. Follow the ground arrows.`),Fr("job"),Xe()}function ar(){return $e&&de.length>0&&de.every(n=>n.mode==="delivered")}function La(){return se.reward}function Fl(n=1){if(!ar()||nn)return;const t=La()*n;Ha(tt,t),tt.jobs++,nn=!0,Pn(),Hi(880,.3),ne(`+$${t} · Move completed! Return to your yard.`),Fr("paid"),Xe()}function Xa(){!ar()||nn||at("#dialog").open||(sr(`<div class="reward-modal"><small>MOVE COMPLETE</small><h2>$${La().toLocaleString("en-US")}</h2><p>${se.from} → ${se.to}</p><button id="claim-normal">Collect money</button><button id="claim-double">▶ Watch video · collect $${(La()*2).toLocaleString("en-US")}</button><p class="fine">The reward video is a short in-game preview.</p></div>`),at("#claim-normal").onclick=()=>{at("#dialog").close(),Fl(1)},at("#claim-double").onclick=()=>{const n=at("#dialog");n.innerHTML='<div class="reward-video"><b>MOVECRAFT</b><p>Your crew makes every move count.</p><div class="progress"><i></i></div></div>',window.setTimeout(()=>{n.close(),Fl(2)},3e3)})}function Ix(){if(tt.levels.truck<dn.truck)return"truck"}function Ux(){if(!(tt.levels.truck<dn.truck)){if(tt.levels.yard<dn.yard&&tt.fleet.length>=tt.levels.yard)return"yard";if(tt.levels.hire<dn.hire&&tt.fleet.length<tt.levels.yard)return"hire";if(Hh(tt)&&!tt.finished)return"factory"}}function Nx(n){if(tt.test)return 0;if(n.income!==void 0)return Math.min(1,_n/.8);if(n.upgrade)return Math.min(1,(tt.contributions[n.upgrade]??0)/ms(tt,n.upgrade));if(n.fleet!==void 0){const t=tt.fleet[n.fleet];return t?Math.min(1,(t.contribution??0)/(1e3*(t.level+1))):0}return Math.min(1,_n/1.8)}function Pn(){for(const i of Zn)ni(i.root);Zn=[];const n=(i,r,s,a,o,c,l=0)=>{const h=ku(r,s,0,0,7589002,l);h.position.copy(a),Ce.add(h),Zn.push({key:i,root:h,position:a,upgrade:o,fleet:c})};n("job","NEXT MOVE",$e&&!nn?"ACTIVE":"ACCEPT",new A(-10,.06,1)),Zn[Zn.length-1].root.visible=!$e||nn,tt.finished&&(Zn[Zn.length-1].root.visible=!1);const t={truck:new A(-.45,.06,-1.25),worker:new A(-20,.06,-4.8),yard:new A(-8,.06,-20.7),hire:new A(-8,.06,-20.7),factory:new A(15,.06,-15)},e=[Ix(),tt.levels.worker<dn.worker?"worker":void 0,Ux()].filter((i,r,s)=>!!i&&s.indexOf(i)===r);for(const i of e){const r=ms(tt,i),s=(tt.contributions[i]??0)/r;n(i,nr[i],tt.test?"FREE":`$${r.toLocaleString("en-US")}`,t[i],i,void 0,s)}tt.fleet.forEach((i,r)=>{if((i.pending??0)>0){const s=ku("COLLECT CREW",`$${i.pending}`,0,0,7589002,0),a=new A(8+r*4.8,.05,-16.5);s.position.copy(a),Ce.add(s),Zn.push({key:`income-${r}`,root:s,position:a,income:r});return}if(i.level<4){const s=(i.level+1)*1e3;n(`fleet-${r}`,`TRUCK ${r+2} · LV ${i.level}`,tt.test?"FREE":`$${s.toLocaleString("en-US")}`,new A(8+r*4.8,.05,-16.5),void 0,r,(i.contribution??0)/s)}})}function Zh(n){const t=tt.levels[n],e=Sx(tt,n);if(e)return ne(e);n==="truck"&&uc(),["yard","hire"].includes(n)?Lx():Pn(),Hi(700,.2);const i={truck:tt.levels.truck>=dn.truck?"Length, shelves, body and roof are maxed. The company-base field is now unlocked in the yard.":`Longer deck, new shelves, body and roof · level ${tt.levels.truck}`,worker:`More stamina and faster carrying · level ${tt.levels.worker}`,yard:`One new employee parking bay · ${tt.levels.yard} total`,hire:`New employee and truck assigned · ${tt.fleet.length} crews`,factory:"You completed MOVECRAFT. Coming soon!",cargo:"Included in the central truck upgrade",gear:"Included in the central truck upgrade",fleet:"Employee truck upgraded"};tt.levels[n]>t&&sr(`<div class="upgrade-modal"><small>UPGRADE COMPLETE</small><h2>${nr[n]}</h2><p>${i[n]}</p><button class="modal-ok">Continue</button></div>`),document.querySelector(".modal-ok")?.addEventListener("click",()=>at("#dialog").close()),ne(`${nr[n]} · Level ${tt.levels[n]}`),Xe()}function Ia(){if(!(Se||De||$t))return Zn.find(n=>{const t=Number(n.root.userData.padHalfWidth??1.3),e=Number(n.root.userData.padHalfDepth??.85);return n.root.visible&&Math.abs(st.position.x-n.position.x)<t*1.16&&Math.abs(st.position.z-n.position.z)<e*1.2&&Math.abs(st.position.y-n.position.y)<1.15})}function Wu(n,t=!1){if(!t&&Cn-Hu<.14)return;Hu=Cn;const e=document.querySelector(".wallet").getBoundingClientRect(),i=n.position.clone().project(be),r=(i.x+1)/2*innerWidth,s=(1-i.y)/2*innerHeight,a=e.left+e.width/2,o=e.top+e.height/2,c=t?r:a,l=t?s:o,h=t?a:r,d=t?o:s,u=document.createElement("i");u.textContent="$",u.style.left=`${c}px`,u.style.top=`${l}px`,u.style.setProperty("--money-x",`${h-c}px`),u.style.setProperty("--money-y",`${d-l}px`),u.classList.toggle("payout",t),at("#money-stream").appendChild(u),u.addEventListener("animationend",()=>u.remove(),{once:!0}),window.setTimeout(()=>u.remove(),1200)}function Fx(n){const t=Ia();if(!t||vi.length()>.2){_n=0,pa="",at("#purchase").hidden=!0,t||(ma="");return}if(ma===t.key||(t.key!==pa&&(_n=0,pa=t.key),t.upgrade&&kh(tt,t.upgrade)))return;if(_n+=n,t.upgrade&&!tt.test){tt.contributions??={};const s=ms(tt,t.upgrade),a=tt.contributions[t.upgrade]??0,o=Math.min(tt.cash,s-a,s*n/1.8);tt.cash-=o,tt.contributions[t.upgrade]=a+o,_n=Math.min(_n,(a+o)/s*1.8),o>0&&Wu(t)}if(t.fleet!==void 0&&!tt.test){const s=tt.fleet[t.fleet],a=1e3*(s.level+1),o=s.contribution??0,c=Math.min(tt.cash,a-o,a*n/1.8);tt.cash-=c,s.contribution=o+c,_n=Math.min(_n,(o+c)/a*1.8),c>0&&Wu(t)}const e=tt.test?Math.min(1,_n/1.8):Nx(t);t.root.userData.setProgress?.(e),at("#purchase").hidden=!1,at("#purchase-name").textContent=t.key==="job"?"Accept the next move":t.income!==void 0?`Collect $${tt.fleet[t.income]?.pending??0}`:t.upgrade?nr[t.upgrade]:"Upgrade fleet truck",at("#purchase-progress").style.width=`${Math.min(100,e*100)}%`;const i=t.upgrade?ms(tt,t.upgrade):t.fleet!==void 0?1e3*(tt.fleet[t.fleet].level+1):0,r=Math.min(i,Math.round(i*e));if(at("#purchase-detail").textContent=i?tt.test?"DEVELOPMENT MODE · FREE":`$${r.toLocaleString("en-US")} OF $${i.toLocaleString("en-US")} INVESTED`:"STAND STILL TO ACTIVATE",_n>=1.8)if(ma=t.key,_n=0,at("#purchase").hidden=!0,t.key==="job")Ms();else if(t.income!==void 0){const s=Ex(tt,t.income);ne(`+$${s} · Employee route complete`),Pn(),Xe()}else t.upgrade?Zh(t.upgrade):t.fleet!==void 0&&yx(tt,t.fleet)&&(mc(),Pn(),sr(`<div class="upgrade-modal"><small>VEHICLE UPGRADED</small><h2>Employee truck ${t.fleet+2}</h2><p>Faster route and $125 more income per trip.</p><button class="modal-ok">Continue</button></div>`),at(".modal-ok").onclick=()=>at("#dialog").close(),Xe())}function Jh(){const n=Xn(st.position);return n.x>1.15&&n.x<4.85&&n.z>=.2&&n.z<=Me&&st.position.y>.6}function Ts(n){const t=Xn(n);if(t.x>1.4&&t.x<4.6){if(t.z>=.2&&t.z<=Me)return .78;if(kr>.94&&t.z>Me&&t.z<Me+2.2)return .78*(Me+2.2-t.z)/2.2}return 0}function Ox(n,t=1/0){let e=-1/0;for(const i of de){if(i.mode!=="truck"&&i.mode!=="ground")continue;const[r,s]=pn(i.item),a=i.mode==="truck"?Xn(n):n,o=i.position,c=o.y+Yh(i.item.model);c<=t+.14&&Math.abs(a.x-o.x)<r*ee/2-.08&&Math.abs(a.z-o.z)<s*ee/2-.08&&(e=Math.max(e,c))}return e}function Ua(n,t=1/0){return Math.max(Ts(n),Ox(n,t))}function hc(){if(Jh())return!0;const n=Xn(st.position);return kr>.94&&n.x>1.4&&n.x<4.6&&n.z>Me&&n.z<=Me+2.25}function Qh(){let n,t=2.75;for(const e of de){if(["hand","air","delivered"].includes(e.mode)||e.mode==="truck"&&!Jh())continue;const i=e.mesh.getWorldPosition(new A),r=Math.hypot(i.x-st.position.x,i.z-st.position.z);r<t&&Math.abs(i.y-st.position.y)<1.5&&(n=e,t=r)}return n}function Xu(n,t){return de.every(e=>{if(e===t||["hand","air","delivered"].includes(e.mode))return!0;const i=e.mesh.getWorldPosition(new A),[r,s]=pn(e.item);return Math.abs(n.x-i.x)>r*ee/2+.38||Math.abs(n.z-i.z)>s*ee/2+.38})}function Bx(n){const t=n.mesh.getWorldPosition(new A),[e,i]=pn(n.item),r=n.mode==="truck",s=r?n.position:t,o=[new A(s.x-e*ee/2-.62,0,s.z),new A(s.x+e*ee/2+.62,0,s.z),new A(s.x,0,s.z-i*ee/2-.62),new A(s.x,0,s.z+i*ee/2+.62)].map(h=>r?cn(h.setY(.78)):h.setY(0)).filter(h=>{if(Vr(h,.3)||!Xu(h,n)||r&&!Ya(h))return!1;for(let d=1;d<=6;d++){const u=st.position.clone().lerp(h,d/6);if(!Xu(u,n)||Vr(u,.24))return!1}return!0});if(!o.length)return null;const c=o.sort((h,d)=>h.distanceToSquared(st.position)-d.distanceToSquared(st.position))[0];c.y=Ts(c);const l=Math.atan2(t.x-c.x,t.z-c.z);return{to:c,yaw:l,item:t}}function dc(){if(!$t)return null;const[n,t]=pn($t.item),e=new A(0,0,.65+Math.max(n,t)*ee/2).applyQuaternion(st.quaternion).add(st.position),i=Xn(e),r=de.filter(a=>!a.shelf).map(a=>({...a.item,x:a.mode==="truck"?(a.position.x-1.4)/ee-pn(a.item)[0]/2:a.item.x,z:a.mode==="truck"?(a.position.z-.2)/ee-pn(a.item)[1]/2:a.item.z,location:a.mode==="truck"?"truck":"pickup"})),s=Xn(st.position);return xx(r,$t.item,{x:(i.x-1.4)/ee-n/2,z:(i.z-.2)/ee-t/2},{x:(s.x-1.4)/ee,z:(s.z-.2)/ee},4,Nr)}function Ss(n){const[,t]=pn(n.item);return .62+t*ee/2}function fc(n){if(tt.levels.truck<3)return null;const[t,e]=pn(n.item),i=Xn(st.position);if(t>1||e>1||i.z<.15||i.z>2.85)return null;const r=i.x<3?1.72:4.28;if(Math.abs(i.x-r)>.72)return null;const s=de.filter(o=>o.shelf&&o!==n),a=[.72,1.45,2.18].find(o=>!s.some(c=>Math.abs(c.position.x-r)<.3&&Math.abs(c.position.z-o)<.35));return a===void 0?null:new A(r,1.4,a)}function zx(){if(De||Se)return;if(ar()&&!nn)return Xa();const n=Ia();if(n){n.key==="job"?Ms():n.key==="collect"?Fl():ne("Stand inside the markers to build.");return}if($t){const a=$t,o=a.mesh.getWorldPosition(new A);let c,l;if(hc()){const p=fc(a),M=dc();if(!p&&!M.valid)return ne("No clear space nearby. Press R to rotate or move along the truck.");p?(c=p,a.shelf=!0,a.item.x=0,a.item.z=Math.round((p.z-.2)/ee)):(a.item.x=M.x,a.item.z=M.z,c=new A(1.4+(M.x+M.w/2)*ee,.78,.2+(M.z+M.d/2)*ee),a.shelf=!1),l="truck"}else if(c=st.position.clone().add(new A(0,0,1.1).applyQuaternion(st.quaternion)),c.y=.12,l=st.position.x>Sn-10.5&&st.position.x<Sn-.5&&st.position.z>-5&&st.position.z<4.9?"delivered":"ground",Vr(c,.3))return ne("There is a wall here. Step into the room.");Ce.attach(a.mesh);const h=a.mesh.getWorldQuaternion(new oi),d=(l==="truck"?Yt.rotation.y:0)+(a.item.rotated?Math.PI/2:0),u=new oi().setFromEuler(new li(0,d,0));De={kind:"drop",load:a,time:0,duration:.5,from:o,to:l==="truck"?cn(c):c,mode:l,fromQuaternion:h,toQuaternion:u},a.position.copy(c),$t=null;return}const t=Qh();if(!t)return ne("Stand close to furniture.");const e=t.mesh.getWorldPosition(new A),i=Bx(t);if(!i)return ne("Move around the furniture so there is room to lift it safely.");const r=st.position.clone(),s=Pe.clamp(r.distanceTo(i.to)/3.8,.18,.55);Ce.attach(t.mesh),De={kind:"lift",load:t,time:0,duration:s+(.62+t.item.weight*.34)/(1+tt.levels.worker*.23),from:e,to:new A,mode:"hand",approachFrom:r,approachTo:i.to,approachYaw:i.yaw,approachDuration:s},t.mode="hand",t.velocity.set(0,0,0),t.angular.set(0,0,0),t.shelf=!1,Hi(260)}function kx(n){if(!De)return;De.time+=n;const t=De,e=t.approachDuration??0,i=t.time<e,r=Math.min(1,Math.max(0,(t.time-e)/(t.duration-e))),s=r*r*(3-2*r),a=st.userData.rig;if(i&&t.approachFrom&&t.approachTo){const c=Math.min(1,t.time/e),l=c*c*(3-2*c);if(st.position.lerpVectors(t.approachFrom,t.approachTo,l),Wa.animate(Cn,!0,!1,!1),t.approachYaw!==void 0){const h=Math.atan2(Math.sin(t.approachYaw-st.rotation.y),Math.cos(t.approachYaw-st.rotation.y));st.rotation.y+=h*(1-Math.exp(-12*n))}t.load.mesh.position.copy(t.from);return}a.body.rotation.x=.42*Math.sin(r*Math.PI),a.body.position.y=-.19*Math.sin(r*Math.PI),a.arms.forEach(c=>c.rotation.x=-1.35*Math.sin(Math.min(1,r*1.35)*Math.PI/2));const o=t.kind==="lift"?Pe.smoothstep(r,.08,.94):s;if(t.kind==="lift"&&t.to.copy(st.position).add(new A(0,.95,Ss(t.load)).applyQuaternion(st.quaternion)),t.kind==="lift"){const c=t.from.clone();c.y=Math.max(t.to.y,t.from.y+.95),o<.58?t.load.mesh.position.lerpVectors(t.from,c,Pe.smoothstep(o/.58,0,1)):t.load.mesh.position.lerpVectors(c,t.to,Pe.smoothstep((o-.58)/.42,0,1))}else t.load.mesh.position.lerpVectors(t.from,t.to,o),t.fromQuaternion&&t.toQuaternion&&t.load.mesh.quaternion.slerpQuaternions(t.fromQuaternion,t.toQuaternion,o);t.load.mesh.rotation.x=Pe.damp(t.load.mesh.rotation.x,0,8,n),t.load.mesh.rotation.z=Pe.damp(t.load.mesh.rotation.z,0,8,n),t.time>=t.duration&&(t.load.mode=t.mode,t.kind==="lift"?($t=t.load,st.add(t.load.mesh),t.load.mesh.position.set(0,.95,Ss(t.load)),t.load.mesh.rotation.set(0,t.load.item.rotated?Math.PI/2:0,0),Fr("lift")):(Es(t.load),qa(),t.mode==="truck"&&Fr("loaded")),t.load.velocity.set(0,0,0),t.load.angular.set(0,0,0),t.load.settled=!0,De=null,a.body.rotation.x=0,a.body.position.y=0,Hi(520),ar()&&(Pn(),ne("Everything delivered. Choose your reward."),Fr("delivered"),window.setTimeout(Xa,350)),Xe())}function Gx(){if(Se||De||$t)return;const n=Xn(st.position);if(Math.hypot(n.x-3,n.z-Me)>4.8)return ne("Walk to the rear of your truck.");if(n.x>1.2&&n.x<4.8&&n.z>Me-.2&&n.z<Me+2.4)return ne("Step to the side of the ramp.");ir=ir>.5?0:1,Hi(300,.25)}function Hx(){if(!(De||$t||ve)){if(Se){if(Math.abs(ke)>.35)return ne("Brake to a stop first.");ke=0,Pa=1,ve={entering:!1,time:0,swapped:!1},ne("Opening the driver door…");return}if(st.position.distanceTo(cn(new A(5.3,0,-1)))>3.8)return ne("The driver door is at the front right.");Pa=1,ve={entering:!0,time:0,swapped:!1,from:st.position.clone()},vi.set(0,0,0),ne("Opening the driver door…")}}function Vx(n){if(!ve)return;ve.time+=n;const t=ve.entering?1.18:.58;if(ve.entering&&!ve.swapped&&ve.from&&ve.time>=.38){const e=cn(new A(5.15,0,-1.15)),i=Pe.smoothstep((ve.time-.38)/.76,0,1);e.y=Ts(e),st.position.lerpVectors(ve.from,e,i),st.rotation.y=Yt.rotation.y-Math.PI/2,Wa.animate(Cn,!0,!1,!1)}if(!ve.swapped&&ve.time>=t){if(ve.swapped=!0,ve.entering)Se=!0,st.visible=!1,ne(ir?"Rear lowered. Raise it with G when loading is complete.":"W/S drive and brake. F exits when stopped."),Fr("cab");else{Se=!1,st.visible=!0;let e=cn(new A(5.5,0,-1));for(const i of[5.5,.5]){const r=cn(new A(i,0,-1));if(!Vr(r,.28)){e=r;break}}st.position.copy(e)}Xe()}ve.time>=(ve.entering?1.32:1.05)&&(Pa=0),ve.time>=1.78&&(ve=null)}function Vr(n,t=.25){return[...Va.barriers,...Qi.barriers,...ii.barriers,...ri.barriers].some(e=>Math.abs(n.x-e.x)<e.w/2+t&&Math.abs(n.z-e.z)<e.d/2+t)}function Wx(n){if(!$t)return!1;const[t,e]=pn($t.item),i=n.clone().add(new A(0,0,Ss($t)).applyAxisAngle($h,st.rotation.y)),r=t*ee/2,s=e*ee/2,a=Math.abs(Math.cos(st.rotation.y)),o=Math.abs(Math.sin(st.rotation.y)),c=r*a+s*o,l=r*o+s*a;return i.x-c<An.minX||i.x+c>An.maxX||i.z-l<An.minZ||i.z+l>An.maxZ?!0:[...Va.barriers,...Qi.barriers,...ii.barriers,...ri.barriers].some(h=>Math.abs(i.x-h.x)<c+h.w/2+.04&&Math.abs(i.z-h.z)<l+h.d/2+.04)}function Ya(n,t=kn,e=st.position.y){if(n.x<An.minX||n.x>An.maxX||n.z<An.minZ||n.z>An.maxZ||Vr(n)||Wx(n))return!1;const i=Xn(n);if(i.x>1.15&&i.x<4.85&&i.z>-2.4&&i.z<.2||!t&&Math.abs(Ua(n,e+.2)-e)>.22||i.z>=.2&&i.z<Me&&(Math.abs(i.x-1.4)<.15||Math.abs(i.x-4.6)<.15)&&e<(tt.levels.truck>0?2.75:1.02))return!1;for(const r of de)if(r.mode==="truck"||r.mode==="ground"){const[s,a]=pn(r.item),o=r.mode==="truck"?r.position:r.mesh.getWorldPosition(new A),c=r.mode==="truck"?i:n,l=o.y+Yh(r.item.model);if(e<l-.08&&Math.abs(c.x-o.x)<s*ee/2+.16&&Math.abs(c.z-o.z)<a*ee/2+.16)return!1}return!0}function Xx(n){if(Se||ve||De||at("#dialog").open)return vi.set(0,0,0),ss=!1,!1;const t=Number(Ae.has("KeyD")||Ae.has("ArrowRight"))-Number(Ae.has("KeyA")||Ae.has("ArrowLeft")),e=Number(Ae.has("KeyW")||Ae.has("ArrowUp"))-Number(Ae.has("KeyS")||Ae.has("ArrowDown")),i=be.getWorldDirection(new A);i.y=0,i.normalize();const r=new A(-i.z,0,i.x).multiplyScalar(t).addScaledVector(i,e);ss=Ae.has("ShiftLeft")&&!$t&&fa>3&&r.lengthSq()>0,fa=Pe.clamp(fa+n*(ss?-27:16+tt.levels.worker*2),0,100);const s=$t?Math.max(1.35,3.1-$t.item.weight*.25/(1+tt.levels.worker*.3)):ss?6.7:3.9;r.normalize().multiplyScalar(s*(1+tt.levels.worker*.07)),vi.lerp(r,1-Math.exp(-10*n));const a=st.position.clone();for(let o=0;o<4;o++)for(const c of["x","z"]){const l=st.position.clone();if(l[c]+=vi[c]*n/4,Ya(l)){if(!kn){const h=Ua(l,st.position.y+.2);st.position.y-h>.22?(kn=!0,Fn=Math.min(0,Fn),l.y=st.position.y):l.y=h}st.position.copy(l)}}if(vi.length()>.1){const o=Math.atan2(vi.x,vi.z),c=Math.atan2(Math.sin(o-st.rotation.y),Math.cos(o-st.rotation.y));st.rotation.y+=c*(1-Math.exp(-14*n))}return a.distanceTo(st.position)>.003}function Yx(){Se||ve||De||at("#dialog").open||kn||(kn=!0,Fn=5.4,Hi(390,.08))}function qx(n){if(Se||ve){kn=!1,Fn=0;return}const t=Ua(st.position,st.position.y+.16);if(!kn&&st.position.y>t+.08&&(kn=!0,Fn=Math.min(0,Fn)),!kn){st.position.y=t;return}const e=st.position.y;Fn-=12.5*n,st.position.y+=Fn*n;const i=Ua(st.position,e+.12);Fn<=0&&st.position.y<=i&&e>=i-.06&&(st.position.y=i,Fn=0,kn=!1),st.position.y<-2&&pc()}function pc(n=!0){if(Se)return;const t=st.position.clone(),e=[];for(const r of[2,3,4.2,5.5])for(let s=0;s<16;s++)e.push(new A(t.x+Math.cos(s*Math.PI*2/16)*r,0,t.z+Math.sin(s*Math.PI*2/16)*r));const i=e.find(r=>(r.y=Ts(r),Ya(r,!1,r.y)));st.position.copy(i??new A(-6,0,1)),Fn=0,kn=!1,vi.set(0,0,0),ga=0,Nl.copy(st.position),at("#stuck-button").hidden=!0,n&&ne("Moved you to the nearest clear space."),Xe()}function qa(){!Se&&!Ya(st.position,!1,st.position.y)&&pc(!1)}function $x(n){if(!Se||ve)return{acceleration:0,yawRate:0};const t=Number(Ae.has("KeyW")||Ae.has("ArrowUp"))-Number(Ae.has("KeyS")||Ae.has("ArrowDown")),e=Number(Ae.has("KeyA")||Ae.has("ArrowLeft"))-Number(Ae.has("KeyD")||Ae.has("ArrowRight")),i=ke;ke+=t*(t*ke<0?10:4+tt.levels.truck*.45)*n,t||(ke*=Math.exp(-1.7*n)),!t&&Math.abs(ke)<.04&&(ke=0),ke=Pe.clamp(ke,-4,8.5+tt.levels.truck*1.3),No=Pe.damp(No,e*.52,6,n);const r=ke*Math.tan(No)/Math.max(3.1,Me*.65),s=cn(new A(3,0,(Me-2.2)/2)),a=Yt.position.clone(),o=Yt.rotation.y;Yt.rotation.y+=r*n,s.addScaledVector(new A(-Math.sin(Yt.rotation.y),0,-Math.cos(Yt.rotation.y)),ke*n),Yt.position.copy(s).sub(new A(3,0,(Me-2.2)/2).applyAxisAngle($h,Yt.rotation.y)),Yt.updateMatrixWorld(!0);let c=!1,l=!1;for(const d of[1.25,4.75])for(const u of[-2.25,(Me-2.2)/2,Me])Vr(cn(new A(d,0,u)),.08)&&(c=!0);const h=2.4;(s.x<An.minX+h||s.x>An.maxX-h||s.z<An.minZ+h||s.z>An.maxZ-h)&&(c=!0);for(const d of ls)d.visible&&s.distanceTo(d.position)<3.55&&(c=!0,l=!0);if(c){const d=new A(Math.sin(o),0,Math.cos(o)).multiplyScalar(Math.sign(i||1)*.22);Yt.position.copy(a).add(d),Yt.rotation.y=o,ke=-i*.12,Cn-Vu>.7&&(Vu=Cn,Hi(120,.18),l&&ne("Both trucks stopped safely. Reverse away to continue."))}for(const d of Yt.userData.wheels??[])d.rotation.x-=ke*n/.46;return{acceleration:(ke-i)/n,yawRate:r}}function mc(){_a.forEach(n=>ni(n.root)),_a=[],ls.forEach(ni),ls=[];for(let n=0;n<tt.levels.hire;n++){const t=Fh(n%2?4761009:15117649,n%3),e=ac(3);e.scale.setScalar(.65),e.position.set(0,.9,.58),t.root.add(e),Ce.add(t.root),_a.push(t)}tt.fleet.forEach((n,t)=>{const e=new Ee,i=[];e.name=`fleet-${t}`,D(e,0,1.05,0,2.7,1.7,2,15707460,!0),D(e,0,1.9,2.8,2.8,2.8,3.6,n.level>1?16048049:9221554,!0),D(e,0,1.65,-1.04,2.2,.55,.04,8501962),D(e,0,2.03,0,2.85,.18,2.1,16174952,!0),D(e,0,.53,-1.12,2.75,.2,.18,3626603,!0);for(const r of[-1,1])D(e,r*1.36,1.6,0,.04,.6,1.3,8501962),D(e,r*.95,.95,-1.06,.42,.2,.06,16772523,!0),D(e,r*1.43,1.05,2.8,.05,.23,3.3,15381834),D(e,r*1.1,1.35,4.63,.05,1.7,.04,7442072);D(e,0,1.45,4.64,.045,2,.035,7442072);for(const r of[-1.3,1.3])for(const s of[0,3.5]){const a=new Ot(new Wn(.4,.4,.25,12),new Ba({color:3163992}));a.rotation.z=Math.PI/2,a.position.set(r,.4,s),a.userData.owned=!0,e.add(a),i.push(a)}e.userData.wheels=i,Ce.add(e),ls.push(e)})}function Yu(n,t){const e=8+t*4.8,i=(n.route??t%3)%3,r=new A(e,0,-9),s=i===1?-30:42,a=i===1?-88:100,o=i===2?Nn[2]:Nn[0];return[r,new A(e,0,12),new A(s,0,12),new A(s,0,o),new A(a,0,o),new A(a,0,12),new A(e,0,12),r]}function Kx(n,t){if(t<=0)return{position:n[0].clone(),yaw:0};const e=n.slice(1).map((s,a)=>s.distanceTo(n[a])),i=e.reduce((s,a)=>s+a,0);let r=Pe.clamp(t,0,.9999)*i;for(let s=0;s<e.length;s++){if(r<=e[s]){const a=r/Math.max(.001,e[s]),o=n[s].clone().lerp(n[s+1],a),c=n[s+1].clone().sub(n[s]);return{position:o,yaw:Math.atan2(c.x,c.z)}}r-=e[s]}return{position:n.at(-1).clone(),yaw:0}}function Zx(n){const t=tt.fleet.map(s=>s.pending??0),e=Rx(tt,n);e&&Da<=0&&ne(`+$${e} · Your company is working`),_a.forEach((s,a)=>{const o=tt.fleet[a];s.root.visible=!o||o.phase<.15||o.phase>.85;const c=(Math.sin(Cn*1.3+a)+1)/2;s.root.position.set(8+a*4.8,0,-3-c*6),s.root.rotation.y=Math.cos(Cn*1.3+a)>0?Math.PI:0,s.animate(Cn,!0,!0)});const i=[],r=cn(new A(3,0,(Me-2.2)/2));tt.fleet.forEach((s,a)=>{const o=ls[a];if(!o)return;s.route??=a%3;const c=Kx(Yu(s,a),s.phase),l=i.some(u=>u.distanceTo(c.position)<3.3),h=c.position.distanceTo(Yu(s,a)[0])>4,d=h&&r.distanceTo(c.position)<3.5;if((l||d)&&o.userData.safePosition)s.phase-=n/Gh(s),o.position.copy(o.userData.safePosition);else{const u=o.userData.safePosition?c.position.distanceTo(o.userData.safePosition):0;o.position.copy(c.position),o.rotation.y=c.yaw+Math.PI;for(const p of o.userData.wheels??[])p.rotation.x-=u/.4;o.userData.safePosition=c.position.clone()}i.push(o.position.clone())}),tt.fleet.some((s,a)=>(s.pending??0)>t[a])&&(Pn(),ne("An employee truck returned. Collect its income at the parking bay."),Xe())}function Jx(n){const t=Se?cn(new A(3,0,2)):st.position;for(const s of[...Va.roofs,...Qi.roofs,...ii.roofs,...ri.roofs]){const a=Math.abs(t.x-s.bounds.x)<s.bounds.w/2+1&&Math.abs(t.z-s.bounds.z)<s.bounds.d/2+1;for(const o of[s.mesh,...s.walls??[]]){const c=o.material;c.opacity=Pe.damp(c.opacity,a?.035:1,6,n),c.depthWrite=c.opacity>.5,o.castShadow=c.opacity>.5}}const e=Xn(st.position),i=!Se&&e.x>1&&e.x<5&&e.z>-.1&&e.z<Me+2.5,r=[Yt.userData.roof,...Yt.userData.cargoWalls??[]];for(const s of r){const a=s.material;a.opacity=Pe.damp(a.opacity,i||Se?.025:1,7,n),a.depthWrite=a.opacity>.5,s.castShadow=a.opacity>.5}}function Qx(){if(!$e||nn)return{point:new A(-10,0,1),text:"Accept a move at your job board"};if(ar())return{point:new A(Sn+2,0,0),text:"Choose your completion reward"};const n=de.find(t=>t.mode==="ground");return n?{point:n.position.clone(),text:"Pick up the furniture"}:{point:new A(Sn-5.6,0,1),text:"Unload inside the new home"}}function jx(n){if(!Se)return n;const t=cn(new A(3,0,(Me-2.2)/2)),e=de.some(d=>d.mode==="ground"),i=!$e||nn?"yard":e?"pickup":"delivery",r=i==="pickup"?zi+2.5:i==="delivery"?Sn+2.5:-4,s=0;if(Math.abs(t.x-r)<10&&Math.abs(t.z-s)<10)return{point:new A(r,0,s),text:i==="yard"?"Park in your company yard":`Park at the ${i} house`};if(Gr!==i||!ki.length){Gr=i,On=0;const d=[...Nn.map(m=>({z:m,branches:[...Al]})),...t.x>=42&&t.x<=90?[{z:-15,branches:[42,90]}]:[],...t.x>=-30&&t.x<=90?[{z:40,branches:[-30,42,90]}]:[],...t.x>=-78&&t.x<=75?[{z:81,branches:[-30,42]}]:[]],u=[],p=[zi+2.5,Sn+2.5,-4].sort((m,f)=>Math.abs(m-t.x)-Math.abs(f-t.x))[0];Math.abs(p-t.x)<11&&u.push([new A(p,0,t.z),new A(p,0,12),new A(r,0,12),new A(r,0,s)]);for(const m of Al)u.push([new A(m,0,t.z),new A(m,0,12),new A(r,0,12),new A(r,0,s)]);for(const m of d)for(const f of m.branches)u.push([new A(t.x,0,m.z),new A(f,0,m.z),new A(f,0,12),new A(r,0,12),new A(r,0,s)]);const M=m=>{let f=t.distanceTo(m[0]);for(let b=1;b<m.length;b++)f+=m[b-1].distanceTo(m[b]);return f};ki=u.sort((m,f)=>M(m)-M(f))[0].filter((m,f,b)=>!f||m.distanceToSquared(b[f-1])>.01)}const a=ki;for(;On<a.length-1&&t.distanceTo(a[On])<3;)On++;const o=a[On],c=Math.round(t.distanceTo(o)),l=a[On+1];let h=i==="yard"?"Return to your company yard":`Continue to the ${i} house`;if(l){const d=o.clone().sub(t),u=l.clone().sub(o),p=Math.atan2(d.x,d.z),M=Math.atan2(u.x,u.z),S=Math.atan2(Math.sin(M-p),Math.cos(M-p));h=Math.abs(S)<.35?`Continue straight for ${c} m`:`In ${c} m turn ${S>0?"right":"left"}`}else c<18&&(h=i==="yard"?"Park in your company yard":`Park at the ${i} house`);return{point:o,text:h}}function qu(){for(;gs.children.length;){const n=gs.children.pop();n instanceof Ot&&(n.geometry.dispose(),n.material.dispose())}}function tv(){const n=Se&&ki.length>1;if(Rn.visible=n,!n){aa&&qu(),aa="";return}const t=ki.slice(Math.max(0,On-1)),e=`${Gr}:${On}:${t.map(c=>`${c.x.toFixed(1)},${c.z.toFixed(1)}`).join(";")}`,i=ki.at(-1);Rn.position.set(i.x,0,i.z);const r=Me+2.6;_s.scale.z=r/7.8;for(const c of Rn.children.filter(l=>l!==_s&&l!==xs))c instanceof Ot&&(c.userData.parkingSide?c.scale.z=r/7.8:c.position.z=c.userData.endSign*(r/2-.08));if(e===aa)return;aa=e,qu();const s=[];for(let c=0;c<t.length-1;c++){const l=t[c],h=t[c+1],d=h.clone().sub(l),u=d.length();if(u<.5)continue;const p=d.multiplyScalar(1/u),M=new A(-p.z,0,p.x),S=4.2,m=Math.min(2.2,u*.4);for(let f=m;f<u-.45;f+=S){const b=l.clone().addScaledVector(p,f),C=b.clone().addScaledVector(p,.82),E=b.clone().addScaledVector(p,-.58),_=E.clone().addScaledVector(M,.5),v=E.clone().addScaledVector(M,-.5);s.push(C.x,.14,C.z,_.x,.14,_.z,v.x,.14,v.z)}}if(!s.length)return;const a=new Ue;a.setAttribute("position",new ae(s,3)),a.computeVertexNormals();const o=new Ot(a,new ui({color:7792592,transparent:!0,opacity:.82,side:xn,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3}));o.name="route-ground-arrows",o.renderOrder=3,gs.add(o)}function gc(){const n=Qx(),t=jx(n),e=de.filter(d=>d.mode==="truck").length,i=de.filter(d=>d.mode==="delivered").length;tv(),at("#cash").textContent=tt.test?"∞":`$${Math.floor(tt.cash).toLocaleString("en-US")}`,at("#cash-mode").textContent=tt.test?"TEST MONEY":`$${Math.floor(tt.earned).toLocaleString("en-US")} earned`,at("#job-title").textContent=nn?tt.finished?"Coming soon":"Move completed!":$e?se.title:"Small beginnings",at("#job-label").textContent=$e?`MOVE ${vs+1} · LEVEL ${se.difficulty}`:"YOUR NEXT MOVE",at("#job-step").textContent=t.text,at("#job-progress").style.width=`${$e?(e+i*2)/de.length/2*100:0}%`,at("#job-count").textContent=$e?`${e} in truck  ·  ${i}/${de.length} delivered`:"Your first customer is waiting",at("#job-value").textContent=$e?`${nn?"COLLECTED":"PAYDAY"}  $${ar()?La():se.reward}`:tt.finished?"You built the complete company.":"Start with a job. Build an empire.",at("#energy").style.width=`${fa}%`;const r=Se?cn(new A(3,0,1)):st.position,s=Math.round(r.distanceTo(t.point)),a=r.clone().project(be),o=t.point.clone().setY(.2).project(be),c=Math.atan2(o.x-a.x,o.y-a.y);at("#nav-arrow").style.transform=`rotate(${Pe.radToDeg(c)}deg)`,at("#nav-label").textContent=t.text,at("#nav-distance").textContent=`${s} m`,at("#status-kicker").textContent=Se?`${Math.round(Math.abs(ke)*9)} KM/H · NAVIGATION`:"CURRENT TASK";let l="E",h="Move with WASD · Hold Shift to sprint";if(De)h=`${De.kind==="lift"?"Lifting":"Placing"} ${De.load.item.name}`,l=`${Math.round(De.time/De.duration*100)}%`;else if(Se)l="W S",h="Drive / brake · A D steer · F exit";else if($t)h=hc()?fc($t)?"Place small item in the rack":dc()?.valid?"Place in highlighted space · R rotate":"No clear space nearby · R rotate or move closer":"Carry to the truck or into the delivery house";else if(Ia()){const d=Ia();h=d.key==="job"?"Accept the next move":d.income!==void 0?`Collect $${tt.fleet[d.income]?.pending??0} from this crew`:d.upgrade?`Invest in ${nr[d.upgrade]}`:"Upgrade this fleet truck",l="$"}else{const d=Qh(),u=Xn(st.position);d?(h=`Lift ${d.item.name} · ${d.item.weight>=4?"HEAVY":d.item.fragile?"FRAGILE":"READY"}`,l="E"):Math.hypot(u.x-5.3,u.z+1)<3?(h="Enter your truck",l="F"):Math.hypot(u.x-3,u.z-Me)<4&&(h=ir?"Raise the rear":"Lower the rear",l="G")}at("#hint-key").textContent=l,at("#hint-text").textContent=h,at("#company-stats").innerHTML=`<div><b>${tt.jobs}</b><span>YOUR MOVES</span></div><div><b>${tt.levels.hire}</b><span>CREWS</span></div><div><b>${tt.fleet.length}</b><span>FLEET TRUCKS</span></div>`,at("#fleet-list").innerHTML=tt.fleet.map((d,u)=>`<div class="fleet-row"><span>Truck ${u+2} · Level ${d.level}<small>${(d.pending??0)>0?`$${d.pending} ready at parking bay`:d.phase<.05?"Loading at the base":d.phase<.82?"Driving through the city tunnel":"Returning to its bay"} · ${d.completed} trips</small></span><div class="progress"><i style="width:${Math.max(0,d.phase)*100}%"></i></div></div>`).join(""),document.querySelectorAll("[data-upgrade]").forEach(d=>{const u=d.dataset.upgrade;d.textContent=`${nr[u]} · ${tt.levels[u]}/${dn[u]}`})}function Xe(){if(!qh)try{localStorage.setItem("movecraft-rewrite-v1",JSON.stringify({worldVersion:2,navPath:ki.map(n=>n.toArray()),company:tt,contract:se,jobActive:$e,jobPaid:nn,jobNumber:vs,routeVariant:Qn,navLeg:Gr,navIndex:On,tutorialStep:Ie,truck:{position:Yt.position.toArray(),yaw:Yt.rotation.y,rear:ir},player:st.position.toArray(),loads:de.map(n=>({item:n.item,mode:n.mode==="hand"?"ground":n.mode,position:n.mode==="hand"?st.position.toArray():n.position.toArray(),velocity:n.velocity.toArray(),rotation:n.mesh.rotation.toArray(),settled:n.settled,shelf:n.shelf}))}))}catch{}}function ev(){if(Jt)try{se=Jt.contract?.fromSite&&Jt.contract?.toSite?Jt.contract:{...oc(Jt.jobNumber??tt.jobs,tt.levels.truck,Jt.routeVariant??0),...Jt.contract??{},fromSite:se.fromSite,toSite:se.toSite},zi=se.fromSite.x,Sn=se.toSite.x,$e=!!Jt.jobActive,nn=!!Jt.jobPaid,vs=Jt.jobNumber??0,Qn=Jt.routeVariant??vs%3,Gr="",On=0,ki=[],Jt.truck&&(Yt.position.fromArray(Jt.truck.position),Yt.rotation.y=Jt.truck.yaw,kr=ir=Jt.truck.rear),Jt.player&&st.position.fromArray(Jt.player),$e&&(ni(ii.root),ni(ri.root),ii=zr(zi,se.fromSite.variant+Qn),ri=zr(Sn,se.toSite.variant+Qn,!0),Ce.add(ii.root,ri.root));for(const n of Jt.loads??[]){const t={item:n.item,mesh:ac(n.item.model),mode:n.mode,position:new A().fromArray(n.position),velocity:new A().fromArray(n.velocity??[0,0,0]),angular:new A,hitAt:-10,settled:n.settled,shelf:n.shelf};de.push(t),Es(t),n.rotation&&t.mode!=="truck"&&t.mesh.rotation.fromArray(n.rotation)}qa()}catch{ne("Saved session could not be fully restored.")}}function nv(){(!$e||nn)&&Ms(!0),tt.levels.truck<3&&(tt.levels.truck=3,tt.levels.cargo=tt.levels.gear=3,uc()),$t=null,De=null;for(const n of de)n.mode="ground",n.item.rotated=!1;for(const n of de){let t=!1;for(const e of[!1,!0]){if(t)break;n.item.rotated=e;for(let i=0;i<Nr&&!t;i++)for(let r=0;r<4&&!t;r++){const s=de.map(a=>({...a.item,location:a.mode==="truck"?"truck":"pickup"}));if(Bh(s,n.item,r,i,4,Nr)){n.item.x=r,n.item.z=i;const[a,o]=pn(n.item);n.mode="truck",n.position.set(1.4+(r+a/2)*ee,.78,.2+(i+o/2)*ee),n.velocity.set(0,0,0),t=!0}}}Es(n)}Pn(),ne(`${de.filter(n=>n.mode==="truck").length}/${de.length} packed. Test packing expands the cargo bay.`),Xe()}function iv(n){if(Math.abs(ke)>.35)return ne("Stop before using test tools.");n==="job"&&Ms(!0),n==="pack"&&nv(),n==="deliver"&&($e||Ms(),de.forEach((t,e)=>{t.mode="delivered",t.position.set(Sn-8+e%3*2.5,.12,-3+Math.floor(e/3)*2.5),Es(t)}),$t=null,De=null,Pn(),st.position.set(Sn-6,0,6),Se=!1,st.visible=!0,ne("Delivery complete. Choose your reward."),Xa()),n==="home"&&(st.position.set(-6,0,1),Se=!1,st.visible=!0,ne("Test teleport: player returned. Truck and cargo stay where they are.")),n==="restart"&&(sr('<h2>Reset test career?</h2><p>This replaces your saved rewrite career with the shabby starting setup.</p><button id="confirm-reset">Reset career</button>'),at("#confirm-reset").onclick=()=>{qh=!0,localStorage.removeItem("movecraft-rewrite-v1"),localStorage.removeItem("movecraft-update-backup"),location.reload()}),Xe()}const jh={interact:zx,cab:Hx,rotate:()=>{$t&&!De&&($t.item.rotated=!$t.item.rotated,$t.mesh.rotation.set(0,$t.item.rotated?Math.PI/2:0,0),$t.mesh.position.z=Ss($t),Hi(400))},rear:Gx};document.querySelectorAll("[data-action]").forEach(n=>n.onclick=()=>jh[n.dataset.action]());document.querySelectorAll("[data-test]").forEach(n=>n.onclick=()=>iv(n.dataset.test));at("#upgrade-tests").innerHTML=Object.keys(nr).filter(n=>["truck","worker","yard","hire","factory"].includes(n)).map(n=>`<button data-upgrade="${n}"></button>`).join("");document.querySelectorAll("[data-upgrade]").forEach(n=>n.onclick=()=>{if(Math.abs(ke)>.35)return ne("Stop before upgrading.");const t=n.dataset.upgrade;Zh(t);const e=Zn.find(i=>i.key===t);e&&(Se=!1,st.visible=!0,st.position.copy(e.position).add(new A(0,0,2)),st.position.y=Ts(st.position),be.zoom=t==="yard"||t==="fleet"?.9:1.6,be.updateProjectionMatrix())});at("#test-toggle").onclick=()=>{at("#tests").hidden=!at("#tests").hidden};at("#company-toggle").onclick=()=>{at("#company-panel").hidden=!at("#company-panel").hidden};function rv(){const n=new Date,t=n.toISOString().slice(0,10),e=new Date(n.getTime()-864e5).toISOString().slice(0,10),i=tt.daily.lastClaim===t,r=tt.daily.lastClaim===e?Math.min(7,tt.daily.streak+1):1,s=150+(r-1)*75;sr(`<div class="daily-modal"><small>DAILY REWARD</small><h2>${i?"Come back tomorrow":`$${s}`}</h2><p>${i?`Day ${tt.daily.streak} claimed.`:`Keep playing daily. Current streak: ${tt.daily.streak} day${tt.daily.streak===1?"":"s"}.`}</p>${i?"":'<button id="claim-daily">Claim reward</button>'}</div>`);const a=document.querySelector("#claim-daily");a&&(a.onclick=()=>{const o=Tx(tt);Xe(),gc(),at("#dialog").close(),ne(`+$${o} · Daily reward claimed`),at("#daily-button").classList.remove("ready")})}at("#daily-button").onclick=rv;at("#job-toggle").onclick=()=>at("#job-body").classList.toggle("collapsed");function td(){at("#mode-toggle").textContent=tt.test?"DEV":"NORMAL",at("#mode-toggle").classList.toggle("development",tt.test),at("#test-toggle").hidden=!tt.test,tt.test||(at("#tests").hidden=!0)}at("#mode-toggle").onclick=()=>{tt.test=!tt.test,_n=0,pa="",ma="",td(),Pn(),Xe(),ne(tt.test?"Development mode: unlimited money and test tools enabled.":"Normal mode: purchases now use company cash.")};td();at("#camera-follow").onclick=()=>{be.zoom=.78,be.updateProjectionMatrix()};for(const[n,t]of[["zoom-in",1.2],["zoom-out",1/1.2]])at(`#${n}`).onclick=()=>{be.zoom=Pe.clamp(be.zoom*t,ln.minZoom,ln.maxZoom),be.updateProjectionMatrix()};at("#settings").onclick=()=>{sr(`<h2>Make yourself comfortable</h2><label>Sound effects <input id="sound" type="checkbox" ${Pl?"checked":""}></label><label>Volume <input id="volume" type="range" min="0" max="1" step=".05" value="${Dl}"></label><label>Soft shadows <input id="shadows" type="checkbox" ${Uo?"checked":""}></label><p>Progress saves automatically. Switch off test money in the workbench for career costs.</p><button id="replay-tutorial">Replay tutorial</button><button id="update-game">Update game safely</button><p class="fine">Saves a backup of your current career, then reloads the newest game files.</p>`),at("#sound").onchange=n=>Pl=n.target.checked,at("#volume").oninput=n=>Dl=+n.target.value,at("#shadows").onchange=n=>{Uo=n.target.checked,hi.shadowMap.enabled=Uo},at("#replay-tutorial").onclick=()=>{Ie=0,at("#dialog").close(),Bi(Hr[0][0],Hr[0][1]),Xe()},at("#update-game").onclick=()=>{Xe();const n=localStorage.getItem("movecraft-rewrite-v1");n&&localStorage.setItem("movecraft-update-backup",n);const t=new URL(location.href);t.searchParams.set("update",Date.now().toString()),location.replace(t)}};at("#stuck-button").onclick=()=>pc();at("#help").onclick=()=>sr("<h2>Moving controls</h2><p>WASD / arrows move. Shift sprints. Space jumps. Drag to orbit, scroll or pinch to zoom.</p><p>E lifts and places. R rotates. F enters/exits the cab. W/S drives/brakes; A/D steer. G raises or lowers the rear.</p><p>Furniture snaps securely into the truck grid. Stand near a marked field to start jobs, upgrade or collect crew income.</p>");window.addEventListener("keydown",n=>{if(at("#dialog").open||(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","Space"].includes(n.code)&&(Ae.add(n.code),n.preventDefault()),n.repeat))return;n.code==="Space"&&Yx();const t={KeyE:"interact",KeyF:"cab",KeyR:"rotate",KeyG:"rear"};t[n.code]&&jh[t[n.code]]()});window.addEventListener("keyup",n=>Ae.delete(n.code));window.addEventListener("blur",()=>Ae.clear());document.querySelectorAll("[data-key]").forEach(n=>{n.onpointerdown=t=>{n.setPointerCapture(t.pointerId),Ae.add(n.dataset.key)},n.onpointerup=n.onpointercancel=()=>Ae.delete(n.dataset.key)});function $a(){const n=Math.max(1,at("#world").clientWidth),t=Math.max(1,at("#world").clientHeight);hi.setSize(n,t,!1);const e=n/t;be.left=-12*e,be.right=12*e,be.top=12,be.bottom=-12,ln.minZoom=Math.max(.55,e/4),be.zoom=Math.max(be.zoom,ln.minZoom),be.updateProjectionMatrix()}window.addEventListener("resize",$a);window.visualViewport?.addEventListener("resize",$a);new ResizeObserver($a).observe(at("#world"));uc();ev();mc();Pn();$a();gc();at("#daily-button").classList.toggle("ready",tt.daily.lastClaim!==new Date().toISOString().slice(0,10));Ie===0&&tt.jobs===0&&Bi(Hr[0][0],Hr[0][1]);ar()&&!nn&&window.setTimeout(Xa,500);ln.target.copy(st.position);be.position.add(st.position);ln.update();let $u=performance.now(),Bo=0;function ed(n){const t=Math.min((n-$u)/1e3,.1);$u=n,Cn+=t,Vx(t),kr=Pe.damp(kr,ir,3,t),Ul=Pe.damp(Ul,Pa,8,t),Kh();const e=Xx(t);for(qx(t),!Se&&!ve&&!at("#dialog").open&&st.position.distanceToSquared(Nl)<.0025?(ga+=t,ga>12&&(at("#stuck-button").hidden=!1)):(ga=0,Nl.copy(st.position),at("#stuck-button").hidden=!0),Wa.animate(Cn,e,!!$t||!!De,ss),kx(t),$t&&($t.mesh.rotation.y=Pe.damp($t.mesh.rotation.y,$t.item.rotated?Math.PI/2:0,12,t)),Bo+=t;Bo>=1/60;){const s=$x(.016666666666666666);Dx(de,1/60,{yawRate:s.yawRate,acceleration:s.acceleration,enclosed:!!Yt.userData.enclosed,gear:tt.levels.truck}),Bo-=1/60}if(Zx(t),Fx(t),Jx(t),Rn.visible){const s=cn(new A(3,0,(Me-2.2)/2)),a=Math.abs(s.x-Rn.position.x)<2.6&&Math.abs(s.z-Rn.position.z)<(Me+2.2)/2&&Math.abs(ke)<.55,o=(Math.sin(Cn*3.4)+1)/2,c=a?6808973:16768099;Ll.color.setHex(c),Il.color.setHex(a?10682304:16772495),xs.color.setHex(c),Ll.opacity=.25+o*.24,Il.opacity=.72+o*.28,xs.intensity=.55+o*.75}const i=Se?cn(new A(3,.6,(Me-2)/2)):st.position.clone().add(new A(0,.6,0)),r=i.clone().sub(ln.target);if(ln.target.copy(i),be.position.add(r),Ti.position.copy(i).add(new A(-25,45,20)),Ti.target.position.copy(i),ln.update(),Bn.visible=!!$t&&hc(),Bn.visible){const s=fc($t),a=dc();Bn.scale.set(s?.48:a.w*ee,1,s?.55:a.d*ee),Bn.position.copy(cn(s??new A(1.4+(a.x+a.w/2)*ee,.82,.2+(a.z+a.d/2)*ee))),Bn.rotation.y=Yt.rotation.y,Bn.material.color.set(s||a.valid?2386770:11089461),cc.material.color.set(s||a.valid?1195825:7282464)}Da-=t,Da<=0&&at("#status-bar").classList.remove("show-notice"),Oo+=t,Fo+=t,Oo>.18&&(gc(),Oo=0),Fo>5&&(Xe(),Fo=0),hi.render(Ce,be),requestAnimationFrame(ed)}requestAnimationFrame(ed);window.addEventListener("pagehide",Xe);
