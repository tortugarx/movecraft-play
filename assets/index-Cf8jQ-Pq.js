(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const vc="186",jr={ROTATE:0,DOLLY:1,PAN:2},Kr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sf=0,gu=1,af=2,Fa=1,Od=2,ws=3,_r=0,_n=1,sn=2,Ii=0,Ps=1,_u=2,xu=3,vu=4,of=5,Yr=100,lf=101,cf=102,uf=103,df=104,hf=200,ff=201,pf=202,mf=203,Bd=204,kd=205,gf=206,_f=207,xf=208,vf=209,Mf=210,Sf=211,yf=212,bf=213,Ef=214,yl=0,bl=1,El=2,Fs=3,Tl=4,wl=5,Al=6,Rl=7,zd=0,Tf=1,wf=2,fi=0,Gd=1,Hd=2,Vd=3,Mc=4,Wd=5,Xd=6,$d=7,Yd=300,xr=301,ss=302,Uo=303,No=304,xo=306,Cl=1e3,Di=1001,Pl=1002,je=1003,Af=1004,ia=1005,an=1006,Fo=1007,ur=1008,bn=1009,qd=1010,Kd=1011,Os=1012,Sc=1013,gi=1014,di=1015,_i=1016,yc=1017,bc=1018,Bs=1020,Zd=35902,Jd=35899,Qd=1021,jd=1022,Zn=1023,Oi=1026,dr=1027,th=1028,Ec=1029,vr=1030,Tc=1031,wc=1033,Oa=33776,Ba=33777,ka=33778,za=33779,Dl=35840,Ll=35841,Il=35842,Ul=35843,Nl=36196,Fl=37492,Ol=37496,Bl=37488,kl=37489,qa=37490,zl=37491,Gl=37808,Hl=37809,Vl=37810,Wl=37811,Xl=37812,$l=37813,Yl=37814,ql=37815,Kl=37816,Zl=37817,Jl=37818,Ql=37819,jl=37820,tc=37821,ec=36492,nc=36494,ic=36495,rc=36283,sc=36284,Ka=36285,ac=36286,Rf=3200,oc=0,Cf=1,Yi="",dn="srgb",Za="srgb-linear",Ja="linear",fe="srgb",Oo=7680,Pf=519,Df=512,Lf=513,If=514,Ac=515,Uf=516,Nf=517,Rc=518,Ff=519,eh=35044,Mu="300 es",hi=2e3,ks=2001;function Of(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Qa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Bf(){const n=Qa("canvas");return n.style.display="block",n}const Su={};function ja(...n){const t="THREE."+n.shift();console.log(t,...n)}function nh(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Nt(...n){n=nh(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ne(...n){n=nh(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function ts(...n){const t=n.join(" ");t in Su||(Su[t]=!0,Nt(...n))}function kf(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const zf={[yl]:bl,[El]:Al,[Tl]:Rl,[Fs]:wl,[bl]:yl,[Al]:El,[Rl]:Tl,[wl]:Fs};class Ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yu=1234567;const es=Math.PI/180,zs=180/Math.PI;function Ui(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[t&255]+nn[t>>8&255]+"-"+nn[t>>16&15|64]+nn[t>>24&255]+"-"+nn[e&63|128]+nn[e>>8&255]+"-"+nn[e>>16&255]+nn[e>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function $t(n,t,e){return Math.max(t,Math.min(e,n))}function Cc(n,t){return(n%t+t)%t}function Gf(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function Hf(n,t,e){return n!==t?(e-n)/(t-n):0}function Ds(n,t,e){return(1-e)*n+e*t}function Vf(n,t,e,i){return Ds(n,t,1-Math.exp(-e*i))}function Wf(n,t=1){return t-Math.abs(Cc(n,t*2)-t)}function Xf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function $f(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Yf(n,t){return n+Math.floor(Math.random()*(t-n+1))}function qf(n,t){return n+Math.random()*(t-n)}function Kf(n){return n*(.5-Math.random())}function Zf(n){n!==void 0&&(yu=n);let t=yu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Jf(n){return n*es}function Qf(n){return n*zs}function jf(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function tp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ep(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function np(n,t,e,i,r){const s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+i)/2),u=a((t+i)/2),f=s((t-i)/2),d=a((t-i)/2),p=s((i-t)/2),_=a((i-t)/2);switch(r){case"XYX":n.set(o*u,c*f,c*d,o*l);break;case"YZY":n.set(c*d,o*u,c*f,o*l);break;case"ZXZ":n.set(c*f,c*d,o*u,o*l);break;case"XZX":n.set(o*u,c*_,c*p,o*l);break;case"YXY":n.set(c*p,o*u,c*_,o*l);break;case"ZYZ":n.set(c*_,c*p,o*u,o*l);break;default:Nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Yn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ue={DEG2RAD:es,RAD2DEG:zs,generateUUID:Ui,clamp:$t,euclideanModulo:Cc,mapLinear:Gf,inverseLerp:Hf,lerp:Ds,damp:Vf,pingpong:Wf,smoothstep:Xf,smootherstep:$f,randInt:Yf,randFloat:qf,randFloatSpread:Kf,seededRandom:Zf,degToRad:Jf,radToDeg:Qf,isPowerOfTwo:jf,ceilPowerOfTwo:tp,floorPowerOfTwo:ep,setQuaternionFromProperEuler:np,normalize:pe,denormalize:Yn},eu=class eu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};eu.prototype.isVector2=!0;let Pt=eu;class xi{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3],d=s[a+0],p=s[a+1],_=s[a+2],y=s[a+3];if(f!==y||c!==d||l!==p||u!==_){let m=c*d+l*p+u*_+f*y;m<0&&(d=-d,p=-p,_=-_,y=-y,m=-m);let h=1-o;if(m<.9995){const b=Math.acos(m),R=Math.sin(b);h=Math.sin(h*b)/R,o=Math.sin(o*b)/R,c=c*h+d*o,l=l*h+p*o,u=u*h+_*o,f=f*h+y*o}else{c=c*h+d*o,l=l*h+p*o,u=u*h+_*o,f=f*h+y*o;const b=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=b,l*=b,u*=b,f*=b}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[a],d=s[a+1],p=s[a+2],_=s[a+3];return t[e]=o*_+u*f+c*p-l*d,t[e+1]=c*_+u*d+l*f-o*p,t[e+2]=l*_+u*p+o*d-c*f,t[e+3]=u*_-o*f-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),f=o(s/2),d=c(i/2),p=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=d*u*f+l*p*_,this._y=l*p*f-d*u*_,this._z=l*u*_+d*p*f,this._w=l*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+l*p*_,this._y=l*p*f-d*u*_,this._z=l*u*_-d*p*f,this._w=l*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-l*p*_,this._y=l*p*f+d*u*_,this._z=l*u*_+d*p*f,this._w=l*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-l*p*_,this._y=l*p*f+d*u*_,this._z=l*u*_-d*p*f,this._w=l*u*f+d*p*_;break;case"YZX":this._x=d*u*f+l*p*_,this._y=l*p*f+d*u*_,this._z=l*u*_-d*p*f,this._w=l*u*f-d*p*_;break;case"XZY":this._x=d*u*f-l*p*_,this._y=l*p*f-d*u*_,this._z=l*u*_+d*p*f,this._w=l*u*f+d*p*_;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],f=e[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+i*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const nu=class nu{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*i),u=2*(o*e-s*r),f=2*(s*i-a*e);return this.x=e+c*l+a*f-o*u,this.y=i+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Bo.copy(this).projectOnVector(t),this.sub(Bo)}reflect(t){return this.sub(Bo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};nu.prototype.isVector3=!0;let A=nu;const Bo=new A,bu=new xi,iu=class iu{constructor(t,e,i,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l)}set(t,e,i,r,s,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],d=i[2],p=i[5],_=i[8],y=r[0],m=r[3],h=r[6],b=r[1],R=r[4],S=r[7],g=r[2],v=r[5],w=r[8];return s[0]=a*y+o*b+c*g,s[3]=a*m+o*R+c*v,s[6]=a*h+o*S+c*w,s[1]=l*y+u*b+f*g,s[4]=l*m+u*R+f*v,s[7]=l*h+u*S+f*w,s[2]=d*y+p*b+_*g,s[5]=d*m+p*R+_*v,s[8]=d*h+p*S+_*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=u*a-o*l,d=o*c-u*s,p=l*s-a*c,_=e*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return t[0]=f*y,t[1]=(r*l-u*i)*y,t[2]=(o*i-r*a)*y,t[3]=d*y,t[4]=(u*e-r*c)*y,t[5]=(r*s-o*e)*y,t[6]=p*y,t[7]=(i*c-l*e)*y,t[8]=(a*e-i*s)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return ts("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ko.makeScale(t,e)),this}rotate(t){return ts("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ko.makeRotation(-t)),this}translate(t,e){return ts("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ko.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};iu.prototype.isMatrix3=!0;let kt=iu;const ko=new kt,Eu=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tu=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ip(){const n={enabled:!0,workingColorSpace:Za,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===fe&&(r.r=Ni(r.r),r.g=Ni(r.g),r.b=Ni(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===fe&&(r.r=ns(r.r),r.g=ns(r.g),r.b=ns(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yi?Ja:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ts("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ts("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Za]:{primaries:t,whitePoint:i,transfer:Ja,toXYZ:Eu,fromXYZ:Tu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:t,whitePoint:i,transfer:fe,toXYZ:Eu,fromXYZ:Tu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),n}const jt=ip();function Ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ns(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Rr;class rp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Rr===void 0&&(Rr=Qa("canvas")),Rr.width=t.width,Rr.height=t.height;const r=Rr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Rr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ni(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ni(e[i]/255)*255):e[i]=Ni(e[i]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sp=0;class Pc{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Ui(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(zo(r[a].image)):s.push(zo(r[a]))}else s=zo(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function zo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}let ap=0;const Go=new A;class on extends Ji{constructor(t=on.DEFAULT_IMAGE,e=on.DEFAULT_MAPPING,i=Di,r=Di,s=an,a=ur,o=Zn,c=bn,l=on.DEFAULT_ANISOTROPY,u=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Ui(),this.name="",this.source=new Pc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Go).x}get height(){return this.source.getSize(Go).y}get depth(){return this.source.getSize(Go).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cl:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case Pl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cl:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case Pl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Yd;on.DEFAULT_ANISOTROPY=1;const ru=class ru{constructor(t=0,e=0,i=0,r=1){this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],u=c[4],f=c[8],d=c[1],p=c[5],_=c[9],y=c[2],m=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+y)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const R=(l+1)/2,S=(p+1)/2,g=(h+1)/2,v=(u+d)/4,w=(f+y)/4,x=(_+m)/4;return R>S&&R>g?R<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(R),r=v/i,s=w/i):S>g?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=v/r,s=x/r):g<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(g),i=w/s,r=x/s),this.set(i,r,s,e),this}let b=Math.sqrt((m-_)*(m-_)+(f-y)*(f-y)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(f-y)/b,this.z=(d-u)/b,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ru.prototype.isVector4=!0;let Ie=ru;class op extends Ji{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:i.depth},s=new on(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Pc(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends op{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ih extends on{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=je,this.minFilter=je,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class lp extends on{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=je,this.minFilter=je,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const _o=class _o{constructor(t,e,i,r,s,a,o,c,l,u,f,d,p,_,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l,u,f,d,p,_,y,m)}set(t,e,i,r,s,a,o,c,l,u,f,d,p,_,y,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _o().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,r=1/Cr.setFromMatrixColumn(t,0).length(),s=1/Cr.setFromMatrixColumn(t,1).length(),a=1/Cr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=a*u,p=a*f,_=o*u,y=o*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=p+_*l,e[5]=d-y*l,e[9]=-o*c,e[2]=y-d*l,e[6]=_+p*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*u,p=c*f,_=l*u,y=l*f;e[0]=d+y*o,e[4]=_*o-p,e[8]=a*l,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=p*o-_,e[6]=y+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*u,p=c*f,_=l*u,y=l*f;e[0]=d-y*o,e[4]=-a*f,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*u,e[9]=y-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*u,p=a*f,_=o*u,y=o*f;e[0]=c*u,e[4]=_*l-p,e[8]=d*l+y,e[1]=c*f,e[5]=y*l+d,e[9]=p*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,p=a*l,_=o*c,y=o*l;e[0]=c*u,e[4]=y-d*f,e[8]=_*f+p,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=p*f+_,e[10]=d-y*f}else if(t.order==="XZY"){const d=a*c,p=a*l,_=o*c,y=o*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=d*f+y,e[5]=a*u,e[9]=p*f-_,e[2]=_*f-p,e[6]=o*u,e[10]=y*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cp,t,up)}lookAt(t,e,i){const r=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Hi.crossVectors(i,xn),Hi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Hi.crossVectors(i,xn)),Hi.normalize(),ra.crossVectors(xn,Hi),r[0]=Hi.x,r[4]=ra.x,r[8]=xn.x,r[1]=Hi.y,r[5]=ra.y,r[9]=xn.y,r[2]=Hi.z,r[6]=ra.z,r[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],d=i[9],p=i[13],_=i[2],y=i[6],m=i[10],h=i[14],b=i[3],R=i[7],S=i[11],g=i[15],v=r[0],w=r[4],x=r[8],T=r[12],D=r[1],L=r[5],O=r[9],B=r[13],N=r[2],z=r[6],q=r[10],$=r[14],et=r[3],Y=r[7],j=r[11],it=r[15];return s[0]=a*v+o*D+c*N+l*et,s[4]=a*w+o*L+c*z+l*Y,s[8]=a*x+o*O+c*q+l*j,s[12]=a*T+o*B+c*$+l*it,s[1]=u*v+f*D+d*N+p*et,s[5]=u*w+f*L+d*z+p*Y,s[9]=u*x+f*O+d*q+p*j,s[13]=u*T+f*B+d*$+p*it,s[2]=_*v+y*D+m*N+h*et,s[6]=_*w+y*L+m*z+h*Y,s[10]=_*x+y*O+m*q+h*j,s[14]=_*T+y*B+m*$+h*it,s[3]=b*v+R*D+S*N+g*et,s[7]=b*w+R*L+S*z+g*Y,s[11]=b*x+R*O+S*q+g*j,s[15]=b*T+R*B+S*$+g*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],f=t[6],d=t[10],p=t[14],_=t[3],y=t[7],m=t[11],h=t[15],b=c*p-l*d,R=o*p-l*f,S=o*d-c*f,g=a*p-l*u,v=a*d-c*u,w=a*f-o*u;return e*(y*b-m*R+h*S)-i*(_*b-m*g+h*v)+r*(_*R-y*g+h*w)-s*(_*S-y*v+m*w)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10];return e*(a*u-o*l)-i*(s*u-o*c)+r*(s*l-a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=t[9],d=t[10],p=t[11],_=t[12],y=t[13],m=t[14],h=t[15],b=e*o-i*a,R=e*c-r*a,S=e*l-s*a,g=i*c-r*o,v=i*l-s*o,w=r*l-s*c,x=u*y-f*_,T=u*m-d*_,D=u*h-p*_,L=f*m-d*y,O=f*h-p*y,B=d*h-p*m,N=b*B-R*O+S*L+g*D-v*T+w*x;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/N;return t[0]=(o*B-c*O+l*L)*z,t[1]=(r*O-i*B-s*L)*z,t[2]=(y*w-m*v+h*g)*z,t[3]=(d*v-f*w-p*g)*z,t[4]=(c*D-a*B-l*T)*z,t[5]=(e*B-r*D+s*T)*z,t[6]=(m*S-_*w-h*R)*z,t[7]=(u*w-d*S+p*R)*z,t[8]=(a*O-o*D+l*x)*z,t[9]=(i*D-e*O-s*x)*z,t[10]=(_*v-y*S+h*b)*z,t[11]=(f*S-u*v-p*b)*z,t[12]=(o*T-a*L-c*x)*z,t[13]=(e*L-i*T+r*x)*z,t[14]=(y*R-_*g-m*b)*z,t[15]=(u*g-f*R+d*b)*z,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,c=t.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,u=a+a,f=o+o,d=s*l,p=s*u,_=s*f,y=a*u,m=a*f,h=o*f,b=c*l,R=c*u,S=c*f,g=i.x,v=i.y,w=i.z;return r[0]=(1-(y+h))*g,r[1]=(p+S)*g,r[2]=(_-R)*g,r[3]=0,r[4]=(p-S)*v,r[5]=(1-(d+h))*v,r[6]=(m+b)*v,r[7]=0,r[8]=(_+R)*w,r[9]=(m-b)*w,r[10]=(1-(d+y))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let a=Cr.set(r[0],r[1],r[2]).length();const o=Cr.set(r[4],r[5],r[6]).length(),c=Cr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),zn.copy(this);const l=1/a,u=1/o,f=1/c;return zn.elements[0]*=l,zn.elements[1]*=l,zn.elements[2]*=l,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=f,zn.elements[9]*=f,zn.elements[10]*=f,e.setFromRotationMatrix(zn),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,r,s,a,o=hi,c=!1){const l=this.elements,u=2*s/(e-t),f=2*s/(i-r),d=(e+t)/(e-t),p=(i+r)/(i-r);let _,y;if(c)_=s/(a-s),y=a*s/(a-s);else if(o===hi)_=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===ks)_=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=hi,c=!1){const l=this.elements,u=2/(e-t),f=2/(i-r),d=-(e+t)/(e-t),p=-(i+r)/(i-r);let _,y;if(c)_=1/(a-s),y=a/(a-s);else if(o===hi)_=-2/(a-s),y=-(a+s)/(a-s);else if(o===ks)_=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};_o.prototype.isMatrix4=!0;let Ce=_o;const Cr=new A,zn=new Ce,cp=new A(0,0,0),up=new A(1,1,1),Hi=new A,ra=new A,xn=new A,wu=new Ce,Au=new xi;class vi{constructor(t=0,e=0,i=0,r=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-$t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin($t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return wu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Au.setFromEuler(this),this.setFromQuaternion(Au,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class rh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dp=0;const Ru=new A,Pr=new xi,bi=new Ce,sa=new A,ps=new A,hp=new A,fp=new xi,Cu=new A(1,0,0),Pu=new A(0,1,0),Du=new A(0,0,1),Lu={type:"added"},pp={type:"removed"},Dr={type:"childadded",child:null},Ho={type:"childremoved",child:null};class $e extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DEFAULT_UP.clone();const t=new A,e=new vi,i=new xi,r=new A(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ce},normalMatrix:{value:new kt}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=$e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pr.setFromAxisAngle(t,e),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(t,e){return Pr.setFromAxisAngle(t,e),this.quaternion.premultiply(Pr),this}rotateX(t){return this.rotateOnAxis(Cu,t)}rotateY(t){return this.rotateOnAxis(Pu,t)}rotateZ(t){return this.rotateOnAxis(Du,t)}translateOnAxis(t,e){return Ru.copy(t).applyQuaternion(this.quaternion),this.position.add(Ru.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cu,t)}translateY(t){return this.translateOnAxis(Pu,t)}translateZ(t){return this.translateOnAxis(Du,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?sa.copy(t):sa.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(ps,sa,this.up):bi.lookAt(sa,ps,this.up),this.quaternion.setFromRotationMatrix(bi),r&&(bi.extractRotation(r.matrixWorld),Pr.setFromRotationMatrix(bi),this.quaternion.premultiply(Pr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lu),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null):ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pp),Ho.child=t,this.dispatchEvent(Ho),Ho.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lu),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,t,hp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,fp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*r,s[13]+=i-s[1]*e-s[5]*i-s[9]*r,s[14]+=r-s[2]*e-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),f=a(t.shapes),d=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}$e.DEFAULT_UP=new A(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ce extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mp={type:"move"};class Vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const y of t.hand.values()){const m=e.getJointPose(y,i),h=this._getHandJoint(l,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;l.inputState.pinching&&d>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mp)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ce;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},aa={h:0,s:0,l:0};function Wo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Yt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,jt.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=jt.workingColorSpace){if(t=Cc(t,1),e=$t(e,0,1),i=$t(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Wo(a,s,t+1/3),this.g=Wo(a,s,t),this.b=Wo(a,s,t-1/3)}return jt.colorSpaceToWorking(this,r),this}setStyle(t,e=dn){function i(s){s!==void 0&&parseFloat(s)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=dn){const i=sh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=dn){return jt.workingToColorSpace(rn.copy(this),t),Math.round($t(rn.r*255,0,255))*65536+Math.round($t(rn.g*255,0,255))*256+Math.round($t(rn.b*255,0,255))}getHexString(t=dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(rn.copy(this),e);const i=rn.r,r=rn.g,s=rn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=dn){jt.workingToColorSpace(rn.copy(this),t);const e=rn.r,i=rn.g,r=rn.b;return t!==dn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(aa);const i=Ds(Vi.h,aa.h,e),r=Ds(Vi.s,aa.s,e),s=Ds(Vi.l,aa.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new Yt;Yt.NAMES=sh;class Dc{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=i}clone(){return new Dc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class gp extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Gn=new A,Ei=new A,Xo=new A,Ti=new A,Lr=new A,Ir=new A,Iu=new A,$o=new A,Yo=new A,qo=new A,Ko=new Ie,Zo=new Ie,Jo=new Ie;class En{constructor(t=new A,e=new A,i=new A){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Gn.subVectors(t,e),r.cross(Gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Gn.subVectors(r,e),Ei.subVectors(i,e),Xo.subVectors(t,e);const a=Gn.dot(Gn),o=Gn.dot(Ei),c=Gn.dot(Xo),l=Ei.dot(Ei),u=Ei.dot(Xo),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(l*c-o*u)*d,_=(a*u-o*c)*d;return s.set(1-p-_,_,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(t,e,i,r,s,a,o,c){return this.getBarycoord(t,e,i,r,Ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ti.x),c.addScaledVector(a,Ti.y),c.addScaledVector(o,Ti.z),c)}static getInterpolatedAttribute(t,e,i,r,s,a){return Ko.setScalar(0),Zo.setScalar(0),Jo.setScalar(0),Ko.fromBufferAttribute(t,e),Zo.fromBufferAttribute(t,i),Jo.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Ko,s.x),a.addScaledVector(Zo,s.y),a.addScaledVector(Jo,s.z),a}static isFrontFacing(t,e,i,r){return Gn.subVectors(i,e),Ei.subVectors(t,e),Gn.cross(Ei).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Gn.cross(Ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return En.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return En.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;Lr.subVectors(r,i),Ir.subVectors(s,i),$o.subVectors(t,i);const c=Lr.dot($o),l=Ir.dot($o);if(c<=0&&l<=0)return e.copy(i);Yo.subVectors(t,r);const u=Lr.dot(Yo),f=Ir.dot(Yo);if(u>=0&&f<=u)return e.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(i).addScaledVector(Lr,a);qo.subVectors(t,s);const p=Lr.dot(qo),_=Ir.dot(qo);if(_>=0&&p<=_)return e.copy(s);const y=p*l-c*_;if(y<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(i).addScaledVector(Ir,o);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return Iu.subVectors(s,r),o=(f-u)/(f-u+(p-_)),e.copy(r).addScaledVector(Iu,o);const h=1/(m+y+d);return a=y*h,o=d*h,e.copy(i).addScaledVector(Lr,a).addScaledVector(Ir,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class qs{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Hn):Hn.fromBufferAttribute(s,a),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oa.copy(i.boundingBox)),oa.applyMatrix4(t.matrixWorld),this.union(oa)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ms),la.subVectors(this.max,ms),Ur.subVectors(t.a,ms),Nr.subVectors(t.b,ms),Fr.subVectors(t.c,ms),Wi.subVectors(Nr,Ur),Xi.subVectors(Fr,Nr),nr.subVectors(Ur,Fr);let e=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-nr.z,nr.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,nr.z,0,-nr.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-nr.y,nr.x,0];return!Qo(e,Ur,Nr,Fr,la)||(e=[1,0,0,0,1,0,0,0,1],!Qo(e,Ur,Nr,Fr,la))?!1:(ca.crossVectors(Wi,Xi),e=[ca.x,ca.y,ca.z],Qo(e,Ur,Nr,Fr,la))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const wi=[new A,new A,new A,new A,new A,new A,new A,new A],Hn=new A,oa=new qs,Ur=new A,Nr=new A,Fr=new A,Wi=new A,Xi=new A,nr=new A,ms=new A,la=new A,ca=new A,ir=new A;function Qo(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ir.fromArray(n,s);const o=r.x*Math.abs(ir.x)+r.y*Math.abs(ir.y)+r.z*Math.abs(ir.z),c=t.dot(ir),l=e.dot(ir),u=i.dot(ir);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const ze=new A,ua=new Pt;let _p=0;class Qn extends Ji{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_p++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=eh,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ua.fromBufferAttribute(this,e),ua.applyMatrix3(t),this.setXY(e,ua.x,ua.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Yn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=pe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),r=pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),r=pe(r,this.array),s=pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class ah extends Qn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class oh extends Qn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class de extends Qn{constructor(t,e,i){super(new Float32Array(t),e,i)}}const xp=new qs,gs=new A,jo=new A;class vo{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):xp.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gs.subVectors(t,this.center);const e=gs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(gs,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gs.copy(t.center).add(jo)),this.expandByPoint(gs.copy(t.center).sub(jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let vp=0;const Cn=new Ce,tl=new $e,Or=new A,vn=new qs,_s=new qs,Ze=new A;class Oe extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Of(t)?oh:ah)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new kt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,i){return Cn.makeTranslation(t,e,i),this.applyMatrix4(Cn),this}scale(t,e,i){return Cn.makeScale(t,e,i),this.applyMatrix4(Cn),this}lookAt(t){return tl.lookAt(t),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new de(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];_s.setFromBufferAttribute(o),this.morphTargetsRelative?(Ze.addVectors(vn.min,_s.min),vn.expandByPoint(Ze),Ze.addVectors(vn.max,_s.max),vn.expandByPoint(Ze)):(vn.expandByPoint(_s.min),vn.expandByPoint(_s.max))}vn.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Ze.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ze));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ze.fromBufferAttribute(o,l),c&&(Or.fromBufferAttribute(t,l),Ze.add(Or)),r=Math.max(r,i.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Qn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let x=0;x<i.count;x++)o[x]=new A,c[x]=new A;const l=new A,u=new A,f=new A,d=new Pt,p=new Pt,_=new Pt,y=new A,m=new A;function h(x,T,D){l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,D),d.fromBufferAttribute(s,x),p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,D),u.sub(l),f.sub(l),p.sub(d),_.sub(d);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(L),o[x].add(y),o[T].add(y),o[D].add(y),c[x].add(m),c[T].add(m),c[D].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let x=0,T=b.length;x<T;++x){const D=b[x],L=D.start,O=D.count;for(let B=L,N=L+O;B<N;B+=3)h(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const R=new A,S=new A,g=new A,v=new A;function w(x){g.fromBufferAttribute(r,x),v.copy(g);const T=o[x];R.copy(T),R.sub(g.multiplyScalar(g.dot(T))).normalize(),S.crossVectors(v,T);const L=S.dot(c[x])<0?-1:1;a.setXYZW(x,R.x,R.y,R.z,L)}for(let x=0,T=b.length;x<T;++x){const D=b[x],L=D.start,O=D.count;for(let B=L,N=L+O;B<N;B+=3)w(t.getX(B+0)),w(t.getX(B+1)),w(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Qn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new A,s=new A,a=new A,o=new A,c=new A,l=new A,u=new A,f=new A;if(t)for(let d=0,p=t.count;d<p;d+=3){const _=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,f=o.normalized,d=new l.constructor(c.length*u);let p=0,_=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*u;for(let h=0;h<u;h++)d[_++]=l[p++]}return new Qn(d,u,f)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Oe,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,i);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const d=l[u],p=t(d,i);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const p=l[f];u.push(p.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=eh,this.updateRanges=[],this.version=0,this.uuid=Ui()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const cn=new A;class to{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)cn.fromBufferAttribute(this,e),cn.applyMatrix4(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)cn.fromBufferAttribute(this,e),cn.applyNormalMatrix(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)cn.fromBufferAttribute(this,e),cn.transformDirection(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Yn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=pe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Yn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),r=pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),r=pe(r,this.array),s=pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){ja("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Qn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new to(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ja("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const el=new A,Sp=new A,yp=new kt;class Ri{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=el.subVectors(i,e).cross(Sp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const r=t.delta(el),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(r,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||yp.getNormalMatrix(t),r=this.coplanarPoint(el).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let bp=0;class Tr extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=Ps,this.side=_r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bd,this.blendDst=kd,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oo,this.stencilZFail=Oo,this.stencilZPass=Oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Ri().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Pt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ep extends Tr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Br;const xs=new A,kr=new A,zr=new A,Gr=new Pt,vs=new Pt,lh=new Ce,da=new A,Ms=new A,ha=new A,Uu=new Pt,nl=new Pt,Nu=new Pt;class Tp extends $e{constructor(t=new Ep){if(super(),this.isSprite=!0,this.type="Sprite",Br===void 0){Br=new Oe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Mp(e,5);Br.setIndex([0,1,2,0,2,3]),Br.setAttribute("position",new to(i,3,0,!1)),Br.setAttribute("uv",new to(i,2,3,!1))}this.geometry=Br,this.material=t,this.center=new Pt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ne('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),kr.setFromMatrixScale(this.matrixWorld),lh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),zr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&kr.multiplyScalar(-zr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;fa(da.set(-.5,-.5,0),zr,a,kr,r,s),fa(Ms.set(.5,-.5,0),zr,a,kr,r,s),fa(ha.set(.5,.5,0),zr,a,kr,r,s),Uu.set(0,0),nl.set(1,0),Nu.set(1,1);let o=t.ray.intersectTriangle(da,Ms,ha,!1,xs);if(o===null&&(fa(Ms.set(-.5,.5,0),zr,a,kr,r,s),nl.set(0,1),o=t.ray.intersectTriangle(da,ha,Ms,!1,xs),o===null))return;const c=t.ray.origin.distanceTo(xs);c<t.near||c>t.far||e.push({distance:c,point:xs.clone(),uv:En.getInterpolation(xs,da,Ms,ha,Uu,nl,Nu,new Pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function fa(n,t,e,i,r,s){Gr.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(vs.x=s*Gr.x-r*Gr.y,vs.y=r*Gr.x+s*Gr.y):vs.copy(Gr),n.copy(t),n.x+=vs.x,n.y+=vs.y,n.applyMatrix4(lh)}const Ai=new A,il=new A,pa=new A,ma=new A;class Lc{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ai.copy(this.origin).addScaledVector(this.direction,e),Ai.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){il.copy(t).add(e).multiplyScalar(.5),pa.copy(e).sub(t).normalize(),ma.copy(this.origin).sub(il);const s=t.distanceTo(e)*.5,a=-this.direction.dot(pa),o=ma.dot(this.direction),c=-ma.dot(pa),l=ma.lengthSq(),u=Math.abs(1-a*a);let f,d,p,_;if(u>0)if(f=a*c-o,d=a*o-c,_=s*u,f>=0)if(d>=-_)if(d<=_){const y=1/u;f*=y,d*=y,p=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l):d<=_?(f=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(il).addScaledVector(pa,d),p}intersectSphere(t,e){if(t.radius<0)return null;Ai.subVectors(t.center,this.origin);const i=Ai.dot(this.direction),r=Ai.dot(Ai)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Ai)!==null}intersectTriangle(t,e,i,r,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,f=t.x-a.x,d=t.y-a.y,p=t.z-a.z,_=e.x-a.x,y=e.y-a.y,m=e.z-a.z,h=i.x-a.x,b=i.y-a.y,R=i.z-a.z,S=Math.abs(c),g=Math.abs(l),v=Math.abs(u);let w,x,T,D,L,O,B,N,z,q,$,et;if(S>=g&&S>=v?(T=c,O=f,z=_,et=h,c>=0?(w=l,x=u,D=d,L=p,B=y,N=m,q=b,$=R):(w=u,x=l,D=p,L=d,B=m,N=y,q=R,$=b)):g>=v?(T=l,O=d,z=y,et=b,l>=0?(w=u,x=c,D=p,L=f,B=m,N=_,q=R,$=h):(w=c,x=u,D=f,L=p,B=_,N=m,q=h,$=R)):(T=u,O=p,z=m,et=R,u>=0?(w=c,x=l,D=f,L=d,B=_,N=y,q=h,$=b):(w=l,x=c,D=d,L=f,B=y,N=_,q=b,$=h)),T===0)return null;const Y=w/T,j=x/T,it=1/T,lt=D-Y*O,yt=L-j*O,ve=B-Y*z,te=N-j*z,ae=q-Y*et,Z=$-j*et,nt=ae*te-Z*ve,bt=lt*Z-yt*ae,Bt=ve*yt-te*lt;if(r){if(nt<0||bt<0||Bt<0)return null}else if((nt<0||bt<0||Bt<0)&&(nt>0||bt>0||Bt>0))return null;const Mt=nt+bt+Bt;if(Mt===0)return null;const Wt=it*(nt*O+bt*z+Bt*et);return(Mt>0?Wt<0:Wt>0)?null:this.at(Wt/Mt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class On extends Tr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=zd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Fu=new Ce,rr=new Lc,ga=new vo,Ou=new A,_a=new A,xa=new A,va=new A,rl=new A,Ma=new A,Bu=new A,Sa=new A;class Ot extends $e{constructor(t=new Oe,e=new On){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Ma.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(rl.fromBufferAttribute(f,t),a?Ma.addScaledVector(rl,u):Ma.addScaledVector(rl.sub(e),u))}e.add(Ma)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(s),rr.copy(t.ray).recast(t.near),!(ga.containsPoint(rr.origin)===!1&&(rr.intersectSphere(ga,Ou)===null||rr.origin.distanceToSquared(Ou)>(t.far-t.near)**2))&&(Fu.copy(s).invert(),rr.copy(t.ray).applyMatrix4(Fu),!(i.boundingBox!==null&&rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,rr)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=d.length;_<y;_++){const m=d[_],h=a[m.materialIndex],b=Math.max(m.start,p.start),R=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=b,g=R;S<g;S+=3){const v=o.getX(S),w=o.getX(S+1),x=o.getX(S+2);r=ya(this,h,t,i,l,u,f,v,w,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=_,h=y;m<h;m+=3){const b=o.getX(m),R=o.getX(m+1),S=o.getX(m+2);r=ya(this,a,t,i,l,u,f,b,R,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,y=d.length;_<y;_++){const m=d[_],h=a[m.materialIndex],b=Math.max(m.start,p.start),R=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=b,g=R;S<g;S+=3){const v=S,w=S+1,x=S+2;r=ya(this,h,t,i,l,u,f,v,w,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let m=_,h=y;m<h;m+=3){const b=m,R=m+1,S=m+2;r=ya(this,a,t,i,l,u,f,b,R,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function wp(n,t,e,i,r,s,a,o){let c;if(t.side===_n?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,t.side===_r,o),c===null)return null;Sa.copy(o),Sa.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Sa);return l<e.near||l>e.far?null:{distance:l,point:Sa.clone(),object:n}}function ya(n,t,e,i,r,s,a,o,c,l){n.getVertexPosition(o,_a),n.getVertexPosition(c,xa),n.getVertexPosition(l,va);const u=wp(n,t,e,i,_a,xa,va,Bu);if(u){const f=new A;En.getBarycoord(Bu,_a,xa,va,f),r&&(u.uv=En.getInterpolatedAttribute(r,o,c,l,f,new Pt)),s&&(u.uv1=En.getInterpolatedAttribute(s,o,c,l,f,new Pt)),a&&(u.normal=En.getInterpolatedAttribute(a,o,c,l,f,new A),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new A,materialIndex:0};En.getNormal(_a,xa,va,d.normal),u.face=d,u.barycoord=f}return u}class Ap extends on{constructor(t=null,e=1,i=1,r,s,a,o,c,l=je,u=je,f,d){super(null,a,o,c,l,u,r,s,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sr=new vo,Rp=new Pt(.5,.5),ba=new A;class Ic{constructor(t=new Ri,e=new Ri,i=new Ri,r=new Ri,s=new Ri,a=new Ri){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=hi,i=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],f=s[5],d=s[6],p=s[7],_=s[8],y=s[9],m=s[10],h=s[11],b=s[12],R=s[13],S=s[14],g=s[15];if(r[0].setComponents(l-a,p-u,h-_,g-b).normalize(),r[1].setComponents(l+a,p+u,h+_,g+b).normalize(),r[2].setComponents(l+o,p+f,h+y,g+R).normalize(),r[3].setComponents(l-o,p-f,h-y,g-R).normalize(),i)r[4].setComponents(c,d,m,S).normalize(),r[5].setComponents(l-c,p-d,h-m,g-S).normalize();else if(r[4].setComponents(l-c,p-d,h-m,g-S).normalize(),e===hi)r[5].setComponents(l+c,p+d,h+m,g+S).normalize();else if(e===ks)r[5].setComponents(c,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(t){sr.center.set(0,0,0);const e=Rp.distanceTo(t.center);return sr.radius=.7071067811865476+e,sr.applyMatrix4(t.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(ba.x=r.normal.x>0?t.max.x:t.min.x,ba.y=r.normal.y>0?t.max.y:t.min.y,ba.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ba)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ch extends Tr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const eo=new A,no=new A,ku=new Ce,Ss=new Lc,Ea=new vo,sl=new A,zu=new A;class Cp extends $e{constructor(t=new Oe,e=new ch){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)eo.fromBufferAttribute(e,r-1),no.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=eo.distanceTo(no);t.setAttribute("lineDistance",new de(i,1))}else Nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ea.copy(i.boundingSphere),Ea.applyMatrix4(r),Ea.radius+=s,t.ray.intersectsSphere(Ea)===!1)return;ku.copy(r).invert(),Ss.copy(t.ray).applyMatrix4(ku);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let y=p,m=_-1;y<m;y+=l){const h=u.getX(y),b=u.getX(y+1),R=Ta(this,t,Ss,c,h,b,y);R&&e.push(R)}if(this.isLineLoop){const y=u.getX(_-1),m=u.getX(p),h=Ta(this,t,Ss,c,y,m,_-1);h&&e.push(h)}}else{const p=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let y=p,m=_-1;y<m;y+=l){const h=Ta(this,t,Ss,c,y,y+1,y);h&&e.push(h)}if(this.isLineLoop){const y=Ta(this,t,Ss,c,_-1,p,_-1);y&&e.push(y)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ta(n,t,e,i,r,s,a){const o=n.geometry.attributes.position;if(eo.fromBufferAttribute(o,r),no.fromBufferAttribute(o,s),e.distanceSqToSegment(eo,no,sl,zu)>i)return;sl.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(sl);if(!(l<t.near||l>t.far))return{distance:l,point:zu.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Gu=new A,Hu=new A;class Pp extends Cp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)Gu.fromBufferAttribute(e,r),Hu.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Gu.distanceTo(Hu);t.setAttribute("lineDistance",new de(i,1))}else Nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class uh extends on{constructor(t=[],e=xr,i,r,s,a,o,c,l,u){super(t,e,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Uc extends on{constructor(t,e,i,r,s,a,o,c,l){super(t,e,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gs extends on{constructor(t,e,i=gi,r,s,a,o=je,c=je,l,u=Oi,f=1){if(u!==Oi&&u!==dr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:f};super(d,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Pc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Dp extends Gs{constructor(t,e=gi,i=xr,r,s,a=je,o=je,c,l=Oi){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,i,r,s,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class dh extends on{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Qi extends Oe{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,e,t,a,s,0),_("z","y","x",1,-1,i,e,-t,a,s,1),_("x","z","y",1,1,t,i,e,r,a,2),_("x","z","y",1,-1,t,i,-e,r,a,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(f,2));function _(y,m,h,b,R,S,g,v,w,x,T){const D=S/w,L=g/x,O=S/2,B=g/2,N=v/2,z=w+1,q=x+1;let $=0,et=0;const Y=new A;for(let j=0;j<q;j++){const it=j*L-B;for(let lt=0;lt<z;lt++){const yt=lt*D-O;Y[y]=yt*b,Y[m]=it*R,Y[h]=N,l.push(Y.x,Y.y,Y.z),Y[y]=0,Y[m]=0,Y[h]=v>0?1:-1,u.push(Y.x,Y.y,Y.z),f.push(lt/w),f.push(1-j/x),$+=1}}for(let j=0;j<x;j++)for(let it=0;it<w;it++){const lt=d+it+z*j,yt=d+it+z*(j+1),ve=d+(it+1)+z*(j+1),te=d+(it+1)+z*j;c.push(lt,yt,te),c.push(yt,ve,te),et+=6}o.addGroup(p,et,T),p+=et,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Tn extends Oe{constructor(t=1,e=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],p=[];let _=0;const y=[],m=i/2;let h=0;b(),a===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new de(f,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(p,2));function b(){const S=new A,g=new A;let v=0;const w=(e-t)/i;for(let x=0;x<=s;x++){const T=[],D=x/s,L=D*(e-t)+t;for(let O=0;O<=r;O++){const B=O/r,N=B*c+o,z=Math.sin(N),q=Math.cos(N);g.x=L*z,g.y=-D*i+m,g.z=L*q,f.push(g.x,g.y,g.z),S.set(z,w,q).normalize(),d.push(S.x,S.y,S.z),p.push(B,1-D),T.push(_++)}y.push(T)}for(let x=0;x<r;x++)for(let T=0;T<s;T++){const D=y[T][x],L=y[T+1][x],O=y[T+1][x+1],B=y[T][x+1];(t>0||T!==0)&&(u.push(D,L,B),v+=3),(e>0||T!==s-1)&&(u.push(L,O,B),v+=3)}l.addGroup(h,v,0),h+=v}function R(S){const g=_,v=new Pt,w=new A;let x=0;const T=S===!0?t:e,D=S===!0?1:-1;for(let O=1;O<=r;O++)f.push(0,m*D,0),d.push(0,D,0),p.push(.5,.5),_++;const L=_;for(let O=0;O<=r;O++){const N=O/r*c+o,z=Math.cos(N),q=Math.sin(N);w.x=T*q,w.y=m*D,w.z=T*z,f.push(w.x,w.y,w.z),d.push(0,D,0),v.x=z*.5+.5,v.y=q*.5*D+.5,p.push(v.x,v.y),_++}for(let O=0;O<r;O++){const B=g+O,N=L+O;S===!0?u.push(N,N+1,B):u.push(N+1,N,B),x+=3}l.addGroup(h,x,S===!0?1:2),h+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ks extends Tn{constructor(t=1,e=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ks(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Nc extends Oe{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],a=[];o(r),l(i),u(),this.setAttribute("position",new de(s,3)),this.setAttribute("normal",new de(s.slice(),3)),this.setAttribute("uv",new de(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const R=new A,S=new A,g=new A;for(let v=0;v<e.length;v+=3)p(e[v+0],R),p(e[v+1],S),p(e[v+2],g),c(R,S,g,b)}function c(b,R,S,g){const v=g+1,w=[];for(let x=0;x<=v;x++){w[x]=[];const T=b.clone().lerp(S,x/v),D=R.clone().lerp(S,x/v),L=v-x;for(let O=0;O<=L;O++)O===0&&x===v?w[x][O]=T:w[x][O]=T.clone().lerp(D,O/L)}for(let x=0;x<v;x++)for(let T=0;T<2*(v-x)-1;T++){const D=Math.floor(T/2);T%2===0?(d(w[x][D+1]),d(w[x+1][D]),d(w[x][D])):(d(w[x][D+1]),d(w[x+1][D+1]),d(w[x+1][D]))}}function l(b){const R=new A;for(let S=0;S<s.length;S+=3)R.x=s[S+0],R.y=s[S+1],R.z=s[S+2],R.normalize().multiplyScalar(b),s[S+0]=R.x,s[S+1]=R.y,s[S+2]=R.z}function u(){const b=new A;for(let R=0;R<s.length;R+=3){b.x=s[R+0],b.y=s[R+1],b.z=s[R+2];const S=m(b)/2/Math.PI+.5,g=h(b)/Math.PI+.5;a.push(S,1-g)}_(),f()}function f(){for(let b=0;b<a.length;b+=6){const R=a[b+0],S=a[b+2],g=a[b+4],v=Math.max(R,S,g),w=Math.min(R,S,g);v>.9&&w<.1&&(R<.2&&(a[b+0]+=1),S<.2&&(a[b+2]+=1),g<.2&&(a[b+4]+=1))}}function d(b){s.push(b.x,b.y,b.z)}function p(b,R){const S=b*3;R.x=t[S+0],R.y=t[S+1],R.z=t[S+2]}function _(){const b=new A,R=new A,S=new A,g=new A,v=new Pt,w=new Pt,x=new Pt;for(let T=0,D=0;T<s.length;T+=9,D+=6){b.set(s[T+0],s[T+1],s[T+2]),R.set(s[T+3],s[T+4],s[T+5]),S.set(s[T+6],s[T+7],s[T+8]),v.set(a[D+0],a[D+1]),w.set(a[D+2],a[D+3]),x.set(a[D+4],a[D+5]),g.copy(b).add(R).add(S).divideScalar(3);const L=m(g);y(v,D+0,b,L),y(w,D+2,R,L),y(x,D+4,S,L)}}function y(b,R,S,g){g<0&&b.x===1&&(a[R]=b.x-1),S.x===0&&S.z===0&&(a[R]=g/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function h(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nc(t.vertices,t.indices,t.radius,t.detail)}}const wa=new A,Aa=new A,al=new A,Ra=new En;class Lp extends Oe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(es*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],f=new Array(3),d={},p=[];for(let _=0;_<c;_+=3){a?(l[0]=a.getX(_),l[1]=a.getX(_+1),l[2]=a.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);const{a:y,b:m,c:h}=Ra;if(y.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),h.fromBufferAttribute(o,l[2]),Ra.getNormal(al),f[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,f[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,f[2]=`${Math.round(h.x*r)},${Math.round(h.y*r)},${Math.round(h.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let b=0;b<3;b++){const R=(b+1)%3,S=f[b],g=f[R],v=Ra[u[b]],w=Ra[u[R]],x=`${S}_${g}`,T=`${g}_${S}`;T in d&&d[T]?(al.dot(d[T].normal)<=s&&(p.push(v.x,v.y,v.z),p.push(w.x,w.y,w.z)),d[T]=null):x in d||(d[x]={index0:l[b],index1:l[R],normal:al.clone()})}}for(const _ in d)if(d[_]){const{index0:y,index1:m}=d[_];wa.fromBufferAttribute(o,y),Aa.fromBufferAttribute(o,m),p.push(wa.x,wa.y,wa.z),p.push(Aa.x,Aa.y,Aa.z)}this.setAttribute("position",new de(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Fc extends Nc{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Fc(t.radius,t.detail)}}class Bn extends Oe{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,f=t/o,d=e/c,p=[],_=[],y=[],m=[];for(let h=0;h<u;h++){const b=h*d-a;for(let R=0;R<l;R++){const S=R*f-s;_.push(S,-b,0),y.push(0,0,1),m.push(R/o),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let b=0;b<o;b++){const R=b+l*h,S=b+l*(h+1),g=b+1+l*(h+1),v=b+1+l*h;p.push(R,S,v),p.push(S,g,v)}this.setIndex(p),this.setAttribute("position",new de(_,3)),this.setAttribute("normal",new de(y,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Oc extends Oe{constructor(t=.5,e=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],c=[],l=[],u=[];let f=t;const d=(e-t)/r,p=new A,_=new Pt;for(let y=0;y<=r;y++){for(let m=0;m<=i;m++){const h=s+m/i*a;p.x=f*Math.cos(h),p.y=f*Math.sin(h),c.push(p.x,p.y,p.z),l.push(0,0,1),_.x=(p.x/e+1)/2,_.y=(p.y/e+1)/2,u.push(_.x,_.y)}f+=d}for(let y=0;y<r;y++){const m=y*(i+1);for(let h=0;h<i;h++){const b=h+m,R=b,S=b+i+1,g=b+i+2,v=b+1;o.push(R,S,v),o.push(S,g,v)}}this.setIndex(o),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Mo extends Oe{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],f=new A,d=new A,p=[],_=[],y=[],m=[];for(let h=0;h<=i;h++){const b=[],R=h/i,S=a+R*o,g=t*Math.cos(S),v=Math.sqrt(t*t-g*g);let w=0;h===0&&a===0?w=.5/e:h===i&&c===Math.PI&&(w=-.5/e);for(let x=0;x<=e;x++){const T=x/e,D=r+T*s;f.x=-v*Math.cos(D),f.y=g,f.z=v*Math.sin(D),_.push(f.x,f.y,f.z),d.copy(f).normalize(),y.push(d.x,d.y,d.z),m.push(T+w,1-R),b.push(l++)}u.push(b)}for(let h=0;h<i;h++)for(let b=0;b<e;b++){const R=u[h][b+1],S=u[h][b],g=u[h+1][b],v=u[h+1][b+1];(h!==0||a>0)&&p.push(R,S,v),(h!==i-1||c<Math.PI)&&p.push(S,g,v)}this.setIndex(p),this.setAttribute("position",new de(_,3)),this.setAttribute("normal",new de(y,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class hs extends Oe{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const c=[],l=[],u=[],f=[],d=new A,p=new A,_=new A;for(let y=0;y<=i;y++){const m=a+y/i*o;for(let h=0;h<=r;h++){const b=h/r*s;p.x=(t+e*Math.cos(m))*Math.cos(b),p.y=(t+e*Math.cos(m))*Math.sin(b),p.z=e*Math.sin(m),l.push(p.x,p.y,p.z),d.x=t*Math.cos(b),d.y=t*Math.sin(b),_.subVectors(p,d).normalize(),u.push(_.x,_.y,_.z),f.push(h/r),f.push(y/i)}}for(let y=1;y<=i;y++)for(let m=1;m<=r;m++){const h=(r+1)*y+m-1,b=(r+1)*(y-1)+m-1,R=(r+1)*(y-1)+m,S=(r+1)*y+m;c.push(h,b,S),c.push(b,R,S)}this.setIndex(c),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function as(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];if(Vu(r))r.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone();else if(Array.isArray(r))if(Vu(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();t[e][i]=s}else t[e][i]=r.slice();else t[e][i]=r}}return t}function un(n){const t={};for(let e=0;e<n.length;e++){const i=as(n[e]);for(const r in i)t[r]=i[r]}return t}function Vu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Ip(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function hh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const Up={clone:as,merge:un};var Np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends Tr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Np,this.fragmentShader=Fp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=as(t.uniforms),this.uniformsGroups=Ip(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const r=t.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=e[r.value]||null;break;case"c":this.uniforms[i].value=new Yt().setHex(r.value);break;case"v2":this.uniforms[i].value=new Pt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new A().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ie().fromArray(r.value);break;case"m3":this.uniforms[i].value=new kt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ce().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Op extends Mi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qi extends Tr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oc,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bp extends Tr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class kp extends Tr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class fh extends $e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class zp extends fh{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ol=new Ce,Wu=new A,Xu=new A;class Gp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ic,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Wu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wu),Xu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,r){ol.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(ol,t.coordinateSystem,t.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;t.coordinateSystem===ks||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ca=new A,Pa=new xi,ai=new A;class ph extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ca,Pa,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ca,Pa,ai.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ca,Pa,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ca,Pa,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $i=new A,$u=new Pt,Yu=new Pt;class Xn extends ph{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(es*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($i.x,$i.y).multiplyScalar(-t/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-t/$i.z)}getViewSize(t,e){return this.getViewBounds(t,$u,Yu),e.subVectors(Yu,$u)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(es*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class So extends ph{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Hp extends Gp{constructor(){super(new So(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vp extends fh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new Hp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Hr=-90,Vr=1;class Wp extends $e{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Xn(Hr,Vr,t,e);r.layers=this.layers,this.add(r);const s=new Xn(Hr,Vr,t,e);s.layers=this.layers,this.add(s);const a=new Xn(Hr,Vr,t,e);a.layers=this.layers,this.add(a);const o=new Xn(Hr,Vr,t,e);o.layers=this.layers,this.add(o);const c=new Xn(Hr,Vr,t,e);c.layers=this.layers,this.add(c);const l=new Xn(Hr,Vr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,d,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Xp extends Xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class qu{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=$t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos($t(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const su=class su{constructor(t,e,i,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,r){const s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=r,this}};su.prototype.isMatrix2=!0;let Ku=su;class $p extends Ji{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Zu(n,t,e,i){const r=Yp(i);switch(e){case Qd:return n*t;case th:return n*t/r.components*r.byteLength;case Ec:return n*t/r.components*r.byteLength;case vr:return n*t*2/r.components*r.byteLength;case Tc:return n*t*2/r.components*r.byteLength;case jd:return n*t*3/r.components*r.byteLength;case Zn:return n*t*4/r.components*r.byteLength;case wc:return n*t*4/r.components*r.byteLength;case Oa:case Ba:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ka:case za:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ll:case Ul:return Math.max(n,16)*Math.max(t,8)/4;case Dl:case Il:return Math.max(n,8)*Math.max(t,8)/2;case Nl:case Fl:case Bl:case kl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ol:case qa:case zl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Hl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Vl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case $l:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ql:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case jl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case tc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ec:case nc:case ic:return Math.ceil(n/4)*Math.ceil(t/4)*16;case rc:case sc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ka:case ac:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Yp(n){switch(n){case bn:case qd:return{byteLength:1,components:1};case Os:case Kd:case _i:return{byteLength:2,components:1};case yc:case bc:return{byteLength:2,components:4};case gi:case Sc:case di:return{byteLength:4,components:1};case Zd:case Jd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vc}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vc);function mh(){let n=null,t=!1,e=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),e(s,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function qp(n){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,f=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const u=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,u);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],y=f[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++d,f[d]=y)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const y=f[p];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Kp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zp=`#ifdef USE_ALPHAHASH
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
#endif`,Jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,em=`#ifdef USE_AOMAP
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
#endif`,nm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,im=`#ifdef USE_BATCHING
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
#endif`,rm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,am=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,om=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lm=`#ifdef USE_IRIDESCENCE
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
#endif`,cm=`#ifdef USE_BUMPMAP
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
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,xm=`#define PI 3.141592653589793
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
} // validated`,vm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mm=`vec3 transformedNormal = objectNormal;
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
#endif`,Sm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tm="gl_FragColor = linearToOutputTexel( gl_FragColor );",wm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Am=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dm=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Im=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fm=`#ifdef USE_GRADIENTMAP
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
}`,Om=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$m=`PhysicalMaterial material;
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
#endif`,Ym=`uniform sampler2D dfgLUT;
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
}`,qm=`
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
#endif`,Km=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,n0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,s0=`#if defined( USE_POINTS_UV )
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
#endif`,a0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d0=`#ifdef USE_MORPHTARGETS
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
#endif`,h0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,p0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,x0=`#ifdef USE_NORMALMAP
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
#endif`,v0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,T0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,U0=`float getShadowMask() {
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
}`,N0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F0=`#ifdef USE_SKINNING
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
#endif`,O0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B0=`#ifdef USE_SKINNING
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
#endif`,k0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,V0=`#ifdef USE_TRANSMISSION
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
#endif`,W0=`#ifdef USE_TRANSMISSION
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
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const K0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Z0=`uniform sampler2D t2D;
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
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`#include <common>
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
}`,ng=`#if DEPTH_PACKING == 3200
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
}`,ig=`#define DISTANCE
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
}`,rg=`#define DISTANCE
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
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`uniform float scale;
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
}`,lg=`uniform vec3 diffuse;
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
}`,cg=`#include <common>
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
}`,ug=`uniform vec3 diffuse;
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
}`,dg=`#define LAMBERT
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
}`,hg=`#define LAMBERT
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
}`,fg=`#define MATCAP
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
}`,pg=`#define MATCAP
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
}`,mg=`#define NORMAL
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
}`,gg=`#define NORMAL
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
}`,_g=`#define PHONG
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
}`,xg=`#define PHONG
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
}`,vg=`#define STANDARD
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
}`,Mg=`#define STANDARD
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
}`,Sg=`#define TOON
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
}`,yg=`#define TOON
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
}`,bg=`uniform float size;
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
}`,Eg=`uniform vec3 diffuse;
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
}`,Tg=`#include <common>
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
}`,wg=`uniform vec3 color;
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
}`,Ag=`uniform float rotation;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:Kp,alphahash_pars_fragment:Zp,alphamap_fragment:Jp,alphamap_pars_fragment:Qp,alphatest_fragment:jp,alphatest_pars_fragment:tm,aomap_fragment:em,aomap_pars_fragment:nm,batching_pars_vertex:im,batching_vertex:rm,begin_vertex:sm,beginnormal_vertex:am,bsdfs:om,iridescence_fragment:lm,bumpmap_pars_fragment:cm,clipping_planes_fragment:um,clipping_planes_pars_fragment:dm,clipping_planes_pars_vertex:hm,clipping_planes_vertex:fm,color_fragment:pm,color_pars_fragment:mm,color_pars_vertex:gm,color_vertex:_m,common:xm,cube_uv_reflection_fragment:vm,defaultnormal_vertex:Mm,displacementmap_pars_vertex:Sm,displacementmap_vertex:ym,emissivemap_fragment:bm,emissivemap_pars_fragment:Em,colorspace_fragment:Tm,colorspace_pars_fragment:wm,envmap_fragment:Am,envmap_common_pars_fragment:Rm,envmap_pars_fragment:Cm,envmap_pars_vertex:Pm,envmap_physical_pars_fragment:Gm,envmap_vertex:Dm,fog_vertex:Lm,fog_pars_vertex:Im,fog_fragment:Um,fog_pars_fragment:Nm,gradientmap_pars_fragment:Fm,lightmap_pars_fragment:Om,lights_lambert_fragment:Bm,lights_lambert_pars_fragment:km,lights_pars_begin:zm,lights_toon_fragment:Hm,lights_toon_pars_fragment:Vm,lights_phong_fragment:Wm,lights_phong_pars_fragment:Xm,lights_physical_fragment:$m,lights_physical_pars_fragment:Ym,lights_fragment_begin:qm,lights_fragment_maps:Km,lights_fragment_end:Zm,lightprobes_pars_fragment:Jm,logdepthbuf_fragment:Qm,logdepthbuf_pars_fragment:jm,logdepthbuf_pars_vertex:t0,logdepthbuf_vertex:e0,map_fragment:n0,map_pars_fragment:i0,map_particle_fragment:r0,map_particle_pars_fragment:s0,metalnessmap_fragment:a0,metalnessmap_pars_fragment:o0,morphinstance_vertex:l0,morphcolor_vertex:c0,morphnormal_vertex:u0,morphtarget_pars_vertex:d0,morphtarget_vertex:h0,normal_fragment_begin:f0,normal_fragment_maps:p0,normal_pars_fragment:m0,normal_pars_vertex:g0,normal_vertex:_0,normalmap_pars_fragment:x0,clearcoat_normal_fragment_begin:v0,clearcoat_normal_fragment_maps:M0,clearcoat_pars_fragment:S0,iridescence_pars_fragment:y0,opaque_fragment:b0,packing:E0,premultiplied_alpha_fragment:T0,project_vertex:w0,dithering_fragment:A0,dithering_pars_fragment:R0,roughnessmap_fragment:C0,roughnessmap_pars_fragment:P0,shadowmap_pars_fragment:D0,shadowmap_pars_vertex:L0,shadowmap_vertex:I0,shadowmask_pars_fragment:U0,skinbase_vertex:N0,skinning_pars_vertex:F0,skinning_vertex:O0,skinnormal_vertex:B0,specularmap_fragment:k0,specularmap_pars_fragment:z0,tonemapping_fragment:G0,tonemapping_pars_fragment:H0,transmission_fragment:V0,transmission_pars_fragment:W0,uv_pars_fragment:X0,uv_pars_vertex:$0,uv_vertex:Y0,worldpos_vertex:q0,background_vert:K0,background_frag:Z0,backgroundCube_vert:J0,backgroundCube_frag:Q0,cube_vert:j0,cube_frag:tg,depth_vert:eg,depth_frag:ng,distance_vert:ig,distance_frag:rg,equirect_vert:sg,equirect_frag:ag,linedashed_vert:og,linedashed_frag:lg,meshbasic_vert:cg,meshbasic_frag:ug,meshlambert_vert:dg,meshlambert_frag:hg,meshmatcap_vert:fg,meshmatcap_frag:pg,meshnormal_vert:mg,meshnormal_frag:gg,meshphong_vert:_g,meshphong_frag:xg,meshphysical_vert:vg,meshphysical_frag:Mg,meshtoon_vert:Sg,meshtoon_frag:yg,points_vert:bg,points_frag:Eg,shadow_vert:Tg,shadow_frag:wg,sprite_vert:Ag,sprite_frag:Rg},mt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new A},probesMax:{value:new A},probesResolution:{value:new A}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},ui={basic:{uniforms:un([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:un([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:un([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:un([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:un([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:un([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:un([mt.points,mt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:un([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:un([mt.common,mt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:un([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:un([mt.sprite,mt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:un([mt.common,mt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:un([mt.lights,mt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};ui.physical={uniforms:un([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Da={r:0,b:0,g:0},Cg=new Ce,gh=new kt;gh.set(-1,0,0,0,1,0,0,0,1);function Pg(n,t,e,i,r,s){const a=new Yt(0);let o=r===!0?0:1,c,l,u=null,f=0,d=null;function p(b){let R=b.isScene===!0?b.background:null;if(R&&R.isTexture){const S=b.backgroundBlurriness>0;R=t.get(R,S)}return R}function _(b){let R=!1;const S=p(b);S===null?m(a,o):S&&S.isColor&&(m(S,1),R=!0);const g=n.xr.getEnvironmentBlendMode();g==="additive"?e.buffers.color.setClear(0,0,0,1,s):g==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(n.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(b,R){const S=p(R);S&&(S.isCubeTexture||S.mapping===xo)?(l===void 0&&(l=new Ot(new Qi(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:as(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(g,v,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Cg.makeRotationFromEuler(R.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(gh),l.material.toneMapped=jt.getTransfer(S.colorSpace)!==fe,(u!==S||f!==S.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,d=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Ot(new Bn(2,2),new Mi({name:"BackgroundMaterial",uniforms:as(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:_r,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=jt.getTransfer(S.colorSpace)!==fe,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,R){b.getRGB(Da,hh(n)),e.buffers.color.setClear(Da.r,Da.g,Da.b,R,s)}function h(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,R=1){a.set(b),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:_,addToRenderList:y,dispose:h}}function Dg(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(L,O,B,N,z){let q=!1;const $=f(L,N,B,O);s!==$&&(s=$,l(s.object)),q=p(L,N,B,z),q&&_(L,N,B,z),z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,S(L,O,B,N),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return n.createVertexArray()}function l(L){return n.bindVertexArray(L)}function u(L){return n.deleteVertexArray(L)}function f(L,O,B,N){const z=N.wireframe===!0;let q=i[O.id];q===void 0&&(q={},i[O.id]=q);const $=L.isInstancedMesh===!0?L.id:0;let et=q[$];et===void 0&&(et={},q[$]=et);let Y=et[B.id];Y===void 0&&(Y={},et[B.id]=Y);let j=Y[z];return j===void 0&&(j=d(c()),Y[z]=j),j}function d(L){const O=[],B=[],N=[];for(let z=0;z<e;z++)O[z]=0,B[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:B,attributeDivisors:N,object:L,attributes:{},index:null}}function p(L,O,B,N){const z=s.attributes,q=O.attributes;let $=0;const et=B.getAttributes();for(const Y in et)if(et[Y].location>=0){const it=z[Y];let lt=q[Y];if(lt===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(lt=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(lt=L.instanceColor)),it===void 0||it.attribute!==lt||lt&&it.data!==lt.data)return!0;$++}return s.attributesNum!==$||s.index!==N}function _(L,O,B,N){const z={},q=O.attributes;let $=0;const et=B.getAttributes();for(const Y in et)if(et[Y].location>=0){let it=q[Y];it===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(it=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(it=L.instanceColor));const lt={};lt.attribute=it,it&&it.data&&(lt.data=it.data),z[Y]=lt,$++}s.attributes=z,s.attributesNum=$,s.index=N}function y(){const L=s.newAttributes;for(let O=0,B=L.length;O<B;O++)L[O]=0}function m(L){h(L,0)}function h(L,O){const B=s.newAttributes,N=s.enabledAttributes,z=s.attributeDivisors;B[L]=1,N[L]===0&&(n.enableVertexAttribArray(L),N[L]=1),z[L]!==O&&(n.vertexAttribDivisor(L,O),z[L]=O)}function b(){const L=s.newAttributes,O=s.enabledAttributes;for(let B=0,N=O.length;B<N;B++)O[B]!==L[B]&&(n.disableVertexAttribArray(B),O[B]=0)}function R(L,O,B,N,z,q,$){$===!0?n.vertexAttribIPointer(L,O,B,z,q):n.vertexAttribPointer(L,O,B,N,z,q)}function S(L,O,B,N){y();const z=N.attributes,q=B.getAttributes(),$=O.defaultAttributeValues;for(const et in q){const Y=q[et];if(Y.location>=0){let j=z[et];if(j===void 0&&(et==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),et==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),j!==void 0){const it=j.normalized,lt=j.itemSize,yt=t.get(j);if(yt===void 0)continue;const ve=yt.buffer,te=yt.type,ae=yt.bytesPerElement,Z=te===n.INT||te===n.UNSIGNED_INT||j.gpuType===Sc;if(j.isInterleavedBufferAttribute){const nt=j.data,bt=nt.stride,Bt=j.offset;if(nt.isInstancedInterleavedBuffer){for(let Mt=0;Mt<Y.locationSize;Mt++)h(Y.location+Mt,nt.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Mt=0;Mt<Y.locationSize;Mt++)m(Y.location+Mt);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let Mt=0;Mt<Y.locationSize;Mt++)R(Y.location+Mt,lt/Y.locationSize,te,it,bt*ae,(Bt+lt/Y.locationSize*Mt)*ae,Z)}else{if(j.isInstancedBufferAttribute){for(let nt=0;nt<Y.locationSize;nt++)h(Y.location+nt,j.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let nt=0;nt<Y.locationSize;nt++)m(Y.location+nt);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let nt=0;nt<Y.locationSize;nt++)R(Y.location+nt,lt/Y.locationSize,te,it,lt*ae,lt/Y.locationSize*nt*ae,Z)}}else if($!==void 0){const it=$[et];if(it!==void 0)switch(it.length){case 2:n.vertexAttrib2fv(Y.location,it);break;case 3:n.vertexAttrib3fv(Y.location,it);break;case 4:n.vertexAttrib4fv(Y.location,it);break;default:n.vertexAttrib1fv(Y.location,it)}}}}b()}function g(){T();for(const L in i){const O=i[L];for(const B in O){const N=O[B];for(const z in N){const q=N[z];for(const $ in q)u(q[$].object),delete q[$];delete N[z]}}delete i[L]}}function v(L){if(i[L.id]===void 0)return;const O=i[L.id];for(const B in O){const N=O[B];for(const z in N){const q=N[z];for(const $ in q)u(q[$].object),delete q[$];delete N[z]}}delete i[L.id]}function w(L){for(const O in i){const B=i[O];for(const N in B){const z=B[N];if(z[L.id]===void 0)continue;const q=z[L.id];for(const $ in q)u(q[$].object),delete q[$];delete z[L.id]}}}function x(L){for(const O in i){const B=i[O],N=L.isInstancedMesh===!0?L.id:0,z=B[N];if(z!==void 0){for(const q in z){const $=z[q];for(const et in $)u($[et].object),delete $[et];delete z[q]}delete B[N],Object.keys(B).length===0&&delete i[O]}}}function T(){D(),a=!0,s!==r&&(s=r,l(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:D,dispose:g,releaseStatesOfGeometry:v,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function Lg(n,t,e){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),e.update(l,i,u))}function o(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let d=0;for(let p=0;p<u;p++)d+=l[p];e.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Ig(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Zn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const x=w===_i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==bn&&w!==di&&!x&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(Nt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),g=n.getParameter(n.MAX_SAMPLES),v=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:b,maxVaryings:R,maxFragmentUniforms:S,maxSamples:g,samples:v}}function Ug(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new Ri,o=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):l();else{const b=s?0:i,R=b*4;let S=h.clippingState||null;c.value=S,S=u(_,d,R,p);for(let g=0;g!==R;++g)S[g]=e[g];h.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,d,p,_){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=c.value,_!==!0||m===null){const h=p+y*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<h)&&(m=new Float32Array(h));for(let R=0,S=p;R!==y;++R,S+=4)a.copy(f[R]).applyMatrix4(b,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}const Zr=4,Ng=6,Fg=20,Og=256,ys=new So,Ju=new Yt;let ll=null,cl=0,ul=0,dl=!1;const Bg=new A,ar=new A;class Qu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,s={}){const{size:a=256,position:o=Bg}=s;ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,r,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=td(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ll,cl,ul),this._renderer.xr.enabled=dl,t.scissorTest=!1,Wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xr||t.mapping===ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:_i,format:Zn,colorSpace:Za,depthBuffer:!1},r=ju(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ju(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=kg(s)),this._blurMaterial=Gg(s,t,e),this._ggxMaterial=zg(s,t,e)}return r}_compileMaterial(t){const e=new Ot(new Oe,t);this._renderer.compile(e,ys)}_sceneToCubeUV(t,e,i,r,s){const c=new Xn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(Ju),f.toneMapping=fi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ot(new Qi,new On({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let h=!1;const b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,h=!0):(m.color.copy(Ju),h=!0);for(let R=0;R<6;R++){const S=R%3;S===0?(c.up.set(0,l[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[R],s.y,s.z)):S===1?(c.up.set(0,0,l[R]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[R],s.z)):(c.up.set(0,l[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[R]));const g=this._cubeSize;Wr(r,S*g,R>2?g:0,g,g),f.setRenderTarget(r),h&&f.render(y,c),f.render(t,c)}f.toneMapping=p,f.autoClear=d,t.background=b}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===xr||t.mapping===ss;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=td());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;Wr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,ys)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),d=l*1.25,p=f*d,{_lodMax:_}=this,y=this._sizeLods[i],m=3*y*(i>_-Zr?i-_+Zr:0),h=4*(this._cubeSize-y);c.envMap.value=t.texture,c.roughness.value=p,c.mipInt.value=_-e,Wr(s,m,h,3*y,2*y),r.setRenderTarget(s),r.render(o,ys),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=_-i,Wr(t,m,h,3*y,2*y),r.setRenderTarget(t),r.render(o,ys)}_blur(t,e,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,i,a),this._blurPass(s,t,i,i,a)}_blurPass(t,e,i,r,s){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;const l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-i;const u=this._sizeLods[r],f=3*u*(r>this._lodMax-Zr?r-this._lodMax+Zr:0),d=4*(this._cubeSize-u);Wr(e,f,d,3*u,2*u),a.setRenderTarget(e),a.render(c,ys)}}function kg(n){const t=[],e=[];let i=n;const r=n-Zr+1+Ng;for(let s=0;s<r;s++){const a=Math.pow(2,i);t.push(a);const o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,d=6,p=3,_=new Float32Array(p*d*f),y=new Float32Array(p*d*f);for(let h=0;h<f;h++){const b=h%3*2/3-1,R=h>2?0:-1,S=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];_.set(S,p*d*h);for(let g=0;g<d;g++){const v=u[g*2]*2-1,w=u[g*2+1]*2-1;h===0?ar.set(1,w,v):h===1?ar.set(-v,1,-w):h===2?ar.set(-v,w,1):h===3?ar.set(-1,w,-v):h===4?ar.set(-v,-1,w):ar.set(v,w,-1),ar.toArray(y,(h*d+g)*p)}}const m=new Oe;m.setAttribute("position",new Qn(_,p)),m.setAttribute("outputDirection",new Qn(y,p)),e.push(new Ot(m,null)),i>Zr&&i--}return{lodMeshes:e,sizeLods:t}}function ju(n,t,e){const i=new Jn(n,t,e);return i.texture.mapping=xo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wr(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function zg(n,t,e){return new Mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Og,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yo(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Gg(n,t,e){return new Mi({name:"SphericalGaussianBlur",defines:{SAMPLES:Fg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:yo(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function td(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yo(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function ed(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function yo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class _h extends Jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new uh(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Qi(5,5,5),s=new Mi({name:"CubemapFromEquirect",uniforms:as(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Ii});s.uniforms.tEquirect.value=e;const a=new Ot(r,s),o=e.minFilter;return e.minFilter===ur&&(e.minFilter=an),new Wp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}function Hg(n){let t=new WeakMap,e=new WeakMap,i=null;function r(d,p=!1){return d==null?null:p?a(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===Uo||p===No)if(t.has(d)){const _=t.get(d).texture;return o(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const y=new _h(_.height);return y.fromEquirectangularTexture(n,d),t.set(d,y),d.addEventListener("dispose",l),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const p=d.mapping,_=p===Uo||p===No,y=p===xr||p===ss;if(_||y){let m=e.get(d);const h=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==h)return i===null&&(i=new Qu(n)),m=_?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const b=d.image;return _&&b&&b.height>0||y&&b&&c(b)?(i===null&&(i=new Qu(n)),m=_?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,p){return p===Uo?d.mapping=xr:p===No&&(d.mapping=ss),d}function c(d){let p=0;const _=6;for(let y=0;y<_;y++)d[y]!==void 0&&p++;return p===_}function l(d){const p=d.target;p.removeEventListener("dispose",l);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function Vg(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&ts("WebGLRenderer: "+i+" extension not supported."),r}}}function Wg(n,t,e,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function c(f){const d=f.attributes;for(const p in d)t.update(d[p],n.ARRAY_BUFFER)}function l(f){const d=[],p=f.index,_=f.attributes.position;let y=0;if(_===void 0)return;if(p!==null){const b=p.array;y=p.version;for(let R=0,S=b.length;R<S;R+=3){const g=b[R+0],v=b[R+1],w=b[R+2];d.push(g,v,v,w,w,g)}}else{const b=_.array;y=_.version;for(let R=0,S=b.length/3-1;R<S;R+=3){const g=R+0,v=R+1,w=R+2;d.push(g,v,v,w,w,g)}}const m=new(_.count>=65535?oh:ah)(d,1);m.version=y;const h=s.get(f);h&&t.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Xg(n,t,e){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,d){n.drawElements(i,d,s,f*a),e.update(d,i,1)}function l(f,d,p){p!==0&&(n.drawElementsInstanced(i,d,s,f*a,p),e.update(d,i,p))}function u(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,p);let y=0;for(let m=0;m<p;m++)y+=d[m];e.update(y,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function $g(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:ne("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Yg(n,t,e){const i=new WeakMap,r=new Ie;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let D=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",D)};var p=D;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let g=o.attributes.position.count*S,v=1;g>t.maxTextureSize&&(v=Math.ceil(g/t.maxTextureSize),g=t.maxTextureSize);const w=new Float32Array(g*v*4*f),x=new ih(w,g,v,f);x.type=di,x.needsUpdate=!0;const T=S*4;for(let L=0;L<f;L++){const O=h[L],B=b[L],N=R[L],z=g*v*4*L;for(let q=0;q<O.count;q++){const $=q*T;_===!0&&(r.fromBufferAttribute(O,q),w[z+$+0]=r.x,w[z+$+1]=r.y,w[z+$+2]=r.z,w[z+$+3]=0),y===!0&&(r.fromBufferAttribute(B,q),w[z+$+4]=r.x,w[z+$+5]=r.y,w[z+$+6]=r.z,w[z+$+7]=0),m===!0&&(r.fromBufferAttribute(N,q),w[z+$+8]=r.x,w[z+$+9]=r.y,w[z+$+10]=r.z,w[z+$+11]=N.itemSize===4?r.w:1)}}d={count:f,texture:x,size:new Pt(g,v)},i.set(o,d),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const y=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function qg(n,t,e,i,r){let s=new WeakMap;function a(l){const u=r.render.frame,f=l.geometry,d=t.get(l,f);if(s.get(d)!==u&&(t.update(d),s.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return d}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const Kg={[Gd]:"LINEAR_TONE_MAPPING",[Hd]:"REINHARD_TONE_MAPPING",[Vd]:"CINEON_TONE_MAPPING",[Mc]:"ACES_FILMIC_TONE_MAPPING",[Xd]:"AGX_TONE_MAPPING",[$d]:"NEUTRAL_TONE_MAPPING",[Wd]:"CUSTOM_TONE_MAPPING"};function Zg(n,t,e,i,r,s){const a=new Jn(t,e,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Oe;l.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new de([0,2,0,0,2,0],2));const u=new Op({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ot(l,u),d=new So(-1,1,1,-1,0,1);let p=null,_=null,y=!1,m,h=null,b=[],R=!1;this.setSize=function(S,g){a.setSize(S,g),o!==null&&o.setSize(S,g),c!==null&&c.setSize(S,g);for(let v=0;v<b.length;v++){const w=b[v];w.setSize&&w.setSize(S,g)}},this.setEffects=function(S){b=S,R=b.length>0&&b[0].isRenderPass===!0;const g=a.width,v=a.height;b.length>0&&o===null&&(o=new Jn(g,v,{type:_i,depthBuffer:!1,stencilBuffer:!1}),c=new Jn(g,v,{type:_i,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<b.length;w++){const x=b[w];x.setSize&&x.setSize(g,v)}},this.begin=function(S,g){if(y||S.toneMapping===fi&&b.length===0)return!1;if(h=g,g!==null){const v=g.width,w=g.height;(a.width!==v||a.height!==w)&&this.setSize(v,w)}return R===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=fi,!0},this.hasRenderPass=function(){return R},this.end=function(S,g){S.toneMapping=m,y=!0;let v=a,w=o;for(let x=0;x<b.length;x++){const T=b[x];T.enabled!==!1&&(T.render(S,w,v,g),T.needsSwap!==!1&&(v=w,w=w===o?c:o))}if(p!==S.outputColorSpace||_!==S.toneMapping){p=S.outputColorSpace,_=S.toneMapping,u.defines={},jt.getTransfer(p)===fe&&(u.defines.SRGB_TRANSFER="");const x=Kg[_];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=v.texture,S.setRenderTarget(h),S.render(f,d),h=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const xh=new on,lc=new Gs(1,1),vh=new ih,Mh=new lp,Sh=new uh,nd=[],id=[],rd=new Float32Array(16),sd=new Float32Array(9),ad=new Float32Array(4);function fs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=nd[r];if(s===void 0&&(s=new Float32Array(r),nd[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function Ye(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function qe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function bo(n,t){let e=id[t];e===void 0&&(e=new Int32Array(t),id[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Jg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Qg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;n.uniform2fv(this.addr,t),qe(e,t)}}function jg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;n.uniform3fv(this.addr,t),qe(e,t)}}function t_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;n.uniform4fv(this.addr,t),qe(e,t)}}function e_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,i))return;ad.set(i),n.uniformMatrix2fv(this.addr,!1,ad),qe(e,i)}}function n_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,i))return;sd.set(i),n.uniformMatrix3fv(this.addr,!1,sd),qe(e,i)}}function i_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,i))return;rd.set(i),n.uniformMatrix4fv(this.addr,!1,rd),qe(e,i)}}function r_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function s_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;n.uniform2iv(this.addr,t),qe(e,t)}}function a_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;n.uniform3iv(this.addr,t),qe(e,t)}}function o_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;n.uniform4iv(this.addr,t),qe(e,t)}}function l_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function c_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;n.uniform2uiv(this.addr,t),qe(e,t)}}function u_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;n.uniform3uiv(this.addr,t),qe(e,t)}}function d_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;n.uniform4uiv(this.addr,t),qe(e,t)}}function h_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(lc.compareFunction=e.isReversedDepthBuffer()?Rc:Ac,s=lc):s=xh,e.setTexture2D(t||s,r)}function f_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Mh,r)}function p_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Sh,r)}function m_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||vh,r)}function g_(n){switch(n){case 5126:return Jg;case 35664:return Qg;case 35665:return jg;case 35666:return t_;case 35674:return e_;case 35675:return n_;case 35676:return i_;case 5124:case 35670:return r_;case 35667:case 35671:return s_;case 35668:case 35672:return a_;case 35669:case 35673:return o_;case 5125:return l_;case 36294:return c_;case 36295:return u_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return h_;case 35679:case 36299:case 36307:return f_;case 35680:case 36300:case 36308:case 36293:return p_;case 36289:case 36303:case 36311:case 36292:return m_}}function __(n,t){n.uniform1fv(this.addr,t)}function x_(n,t){const e=fs(t,this.size,2);n.uniform2fv(this.addr,e)}function v_(n,t){const e=fs(t,this.size,3);n.uniform3fv(this.addr,e)}function M_(n,t){const e=fs(t,this.size,4);n.uniform4fv(this.addr,e)}function S_(n,t){const e=fs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function y_(n,t){const e=fs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function b_(n,t){const e=fs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function E_(n,t){n.uniform1iv(this.addr,t)}function T_(n,t){n.uniform2iv(this.addr,t)}function w_(n,t){n.uniform3iv(this.addr,t)}function A_(n,t){n.uniform4iv(this.addr,t)}function R_(n,t){n.uniform1uiv(this.addr,t)}function C_(n,t){n.uniform2uiv(this.addr,t)}function P_(n,t){n.uniform3uiv(this.addr,t)}function D_(n,t){n.uniform4uiv(this.addr,t)}function L_(n,t,e){const i=this.cache,r=t.length,s=bo(e,r);Ye(i,s)||(n.uniform1iv(this.addr,s),qe(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=lc:a=xh;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function I_(n,t,e){const i=this.cache,r=t.length,s=bo(e,r);Ye(i,s)||(n.uniform1iv(this.addr,s),qe(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Mh,s[a])}function U_(n,t,e){const i=this.cache,r=t.length,s=bo(e,r);Ye(i,s)||(n.uniform1iv(this.addr,s),qe(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Sh,s[a])}function N_(n,t,e){const i=this.cache,r=t.length,s=bo(e,r);Ye(i,s)||(n.uniform1iv(this.addr,s),qe(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||vh,s[a])}function F_(n){switch(n){case 5126:return __;case 35664:return x_;case 35665:return v_;case 35666:return M_;case 35674:return S_;case 35675:return y_;case 35676:return b_;case 5124:case 35670:return E_;case 35667:case 35671:return T_;case 35668:case 35672:return w_;case 35669:case 35673:return A_;case 5125:return R_;case 36294:return C_;case 36295:return P_;case 36296:return D_;case 35678:case 36198:case 36298:case 36306:case 35682:return L_;case 35679:case 36299:case 36307:return I_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return N_}}class O_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=g_(e.type)}}class B_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=F_(e.type)}}class k_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const hl=/(\w+)(\])?(\[|\.)?/g;function od(n,t){n.seq.push(t),n.map[t.id]=t}function z_(n,t,e){const i=n.name,r=i.length;for(hl.lastIndex=0;;){const s=hl.exec(i),a=hl.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){od(e,l===void 0?new O_(o,n,t):new B_(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new k_(o),od(e,f)),e=f}}}class Ga{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);z_(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function ld(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const G_=37297;let H_=0;function V_(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const cd=new kt;function W_(n){jt._getMatrix(cd,jt.workingColorSpace,n);const t=`mat3( ${cd.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(n)){case Ja:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function ud(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+V_(n.getShaderSource(t),o)}else return s}function X_(n,t){const e=W_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const $_={[Gd]:"Linear",[Hd]:"Reinhard",[Vd]:"Cineon",[Mc]:"ACESFilmic",[Xd]:"AgX",[$d]:"Neutral",[Wd]:"Custom"};function Y_(n,t){const e=$_[t];return e===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const La=new A;function q_(){jt.getLuminanceCoefficients(La);const n=La.x.toFixed(4),t=La.y.toFixed(4),e=La.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function Z_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function J_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function As(n){return n!==""}function dd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Q_=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(n){return n.replace(Q_,tx)}const j_=new Map;function tx(n,t){let e=Vt[t];if(e===void 0){const i=j_.get(t);if(i!==void 0)e=Vt[i],Nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return cc(e)}const ex=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fd(n){return n.replace(ex,nx)}function nx(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pd(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}const ix={[Fa]:"SHADOWMAP_TYPE_PCF",[ws]:"SHADOWMAP_TYPE_VSM"};function rx(n){return ix[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const sx={[xr]:"ENVMAP_TYPE_CUBE",[ss]:"ENVMAP_TYPE_CUBE",[xo]:"ENVMAP_TYPE_CUBE_UV"};function ax(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":sx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const ox={[ss]:"ENVMAP_MODE_REFRACTION"};function lx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":ox[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cx={[zd]:"ENVMAP_BLENDING_MULTIPLY",[Tf]:"ENVMAP_BLENDING_MIX",[wf]:"ENVMAP_BLENDING_ADD"};function ux(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":cx[n.combine]||"ENVMAP_BLENDING_NONE"}function dx(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function hx(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=rx(e),l=ax(e),u=lx(e),f=ux(e),d=dx(e),p=K_(e),_=Z_(s),y=r.createProgram();let m,h,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(As).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(As).join(`
`),h.length>0&&(h+=`
`)):(m=[pd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),h=[pd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?Vt.tonemapping_pars_fragment:"",e.toneMapping!==fi?Y_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,X_("linearToOutputTexel",e.outputColorSpace),q_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(As).join(`
`)),a=cc(a),a=dd(a,e),a=hd(a,e),o=cc(o),o=dd(o,e),o=hd(o,e),a=fd(a),o=fd(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===Mu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const R=b+m+a,S=b+h+o,g=ld(r,r.VERTEX_SHADER,R),v=ld(r,r.FRAGMENT_SHADER,S);r.attachShader(y,g),r.attachShader(y,v),e.index0AttributeName!==void 0?r.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function w(L){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(y)||"",B=r.getShaderInfoLog(g)||"",N=r.getShaderInfoLog(v)||"",z=O.trim(),q=B.trim(),$=N.trim();let et=!0,Y=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(et=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,g,v);else{const j=ud(r,g,"vertex"),it=ud(r,v,"fragment");ne("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+j+`
`+it)}else z!==""?Nt("WebGLProgram: Program Info Log:",z):(q===""||$==="")&&(Y=!1);Y&&(L.diagnostics={runnable:et,programLog:z,vertexShader:{log:q,prefix:m},fragmentShader:{log:$,prefix:h}})}r.deleteShader(g),r.deleteShader(v),x=new Ga(r,y),T=J_(r,y)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(y,G_)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=H_++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=g,this.fragmentShader=v,this}let fx=0;class px{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new mx(t),e.set(t,i)),i}}class mx{constructor(t){this.id=fx++,this.code=t,this.usedTimes=0}}function gx(n){return n===vr||n===qa||n===Ka}function _x(n,t,e,i,r,s){const a=new rh,o=new px,c=new Set,l=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function y(x,T,D,L,O,B){const N=L.fog,z=O.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,et=t.get(x.envMap||q,$),Y=et&&et.mapping===xo?et.image.height:null,j=p[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&Nt("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const it=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,lt=it!==void 0?it.length:0;let yt=0;z.morphAttributes.position!==void 0&&(yt=1),z.morphAttributes.normal!==void 0&&(yt=2),z.morphAttributes.color!==void 0&&(yt=3);let ve,te,ae,Z;if(j){const Se=ui[j];ve=Se.vertexShader,te=Se.fragmentShader}else{ve=x.vertexShader,te=x.fragmentShader;const Se=o.getVertexShaderStage(x),oe=o.getFragmentShaderStage(x);o.update(x,Se,oe),ae=Se.id,Z=oe.id}const nt=n.getRenderTarget(),bt=n.state.buffers.depth.getReversed(),Bt=O.isInstancedMesh===!0,Mt=O.isBatchedMesh===!0,Wt=!!x.map,Ve=!!x.matcap,qt=!!et,se=!!x.aoMap,Me=!!x.lightMap,Zt=!!x.bumpMap&&x.wireframe===!1,we=!!x.normalMap,Ke=!!x.displacementMap,fn=!!x.emissiveMap,De=!!x.metalnessMap,Be=!!x.roughnessMap,F=x.anisotropy>0,tn=x.clearcoat>0,he=x.dispersion>0,C=x.retroreflectivity>0,M=x.iridescence>0,k=x.sheen>0,V=x.transmission>0,K=F&&!!x.anisotropyMap,ot=tn&&!!x.clearcoatMap,ct=tn&&!!x.clearcoatNormalMap,J=tn&&!!x.clearcoatRoughnessMap,tt=M&&!!x.iridescenceMap,ut=M&&!!x.iridescenceThicknessMap,Rt=k&&!!x.sheenColorMap,pt=k&&!!x.sheenRoughnessMap,dt=!!x.specularMap,Ct=!!x.specularColorMap,It=!!x.specularIntensityMap,zt=V&&!!x.transmissionMap,U=V&&!!x.thicknessMap,ht=!!x.gradientMap,Q=!!x.alphaMap,ft=x.alphaTest>0,xt=!!x.alphaHash,st=!!x.extensions;let Dt=fi;x.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Dt=n.toneMapping);const wt={shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:ve,fragmentShader:te,defines:x.defines,customVertexShaderID:ae,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Mt,batchingColor:Mt&&O._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&O.instanceColor!==null,instancingMorph:Bt&&O.morphTexture!==null,outputColorSpace:nt===null?n.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:jt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Wt,matcap:Ve,envMap:qt,envMapMode:qt&&et.mapping,envMapCubeUVHeight:Y,aoMap:se,lightMap:Me,bumpMap:Zt,normalMap:we,displacementMap:Ke,emissiveMap:fn,normalMapObjectSpace:we&&x.normalMapType===Cf,normalMapTangentSpace:we&&x.normalMapType===oc,packedNormalMap:we&&x.normalMapType===oc&&gx(x.normalMap.format),metalnessMap:De,roughnessMap:Be,anisotropy:F,anisotropyMap:K,clearcoat:tn,clearcoatMap:ot,clearcoatNormalMap:ct,clearcoatRoughnessMap:J,dispersion:he,retroreflection:C,iridescence:M,iridescenceMap:tt,iridescenceThicknessMap:ut,sheen:k,sheenColorMap:Rt,sheenRoughnessMap:pt,specularMap:dt,specularColorMap:Ct,specularIntensityMap:It,transmission:V,transmissionMap:zt,thicknessMap:U,gradientMap:ht,opaque:x.transparent===!1&&x.blending===Ps&&x.alphaToCoverage===!1,alphaMap:Q,alphaTest:ft,alphaHash:xt,combine:x.combine,mapUv:Wt&&_(x.map.channel),aoMapUv:se&&_(x.aoMap.channel),lightMapUv:Me&&_(x.lightMap.channel),bumpMapUv:Zt&&_(x.bumpMap.channel),normalMapUv:we&&_(x.normalMap.channel),displacementMapUv:Ke&&_(x.displacementMap.channel),emissiveMapUv:fn&&_(x.emissiveMap.channel),metalnessMapUv:De&&_(x.metalnessMap.channel),roughnessMapUv:Be&&_(x.roughnessMap.channel),anisotropyMapUv:K&&_(x.anisotropyMap.channel),clearcoatMapUv:ot&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ct&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:pt&&_(x.sheenRoughnessMap.channel),specularMapUv:dt&&_(x.specularMap.channel),specularColorMapUv:Ct&&_(x.specularColorMap.channel),specularIntensityMapUv:It&&_(x.specularIntensityMap.channel),transmissionMapUv:zt&&_(x.transmissionMap.channel),thicknessMapUv:U&&_(x.thicknessMap.channel),alphaMapUv:Q&&_(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(we||F),vertexNormals:!!z.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!z.attributes.uv&&(Wt||Q),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||z.attributes.normal===void 0&&we===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:bt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:yt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Wt&&x.map.isVideoTexture===!0&&jt.getTransfer(x.map.colorSpace)===fe,decodeVideoTextureEmissive:fn&&x.emissiveMap.isVideoTexture===!0&&jt.getTransfer(x.emissiveMap.colorSpace)===fe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===sn,flipSided:x.side===_n,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:st&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&x.extensions.multiDraw===!0||Mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function m(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)T.push(D),T.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(h(T,x),b(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function h(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function b(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function R(x){const T=p[x.type];let D;if(T){const L=ui[T];D=Up.clone(L.uniforms)}else D=x.uniforms;return D}function S(x,T){let D=u.get(T);return D!==void 0?++D.usedTimes:(D=new hx(n,T,x,r),l.push(D),u.set(T,D)),D}function g(x){if(--x.usedTimes===0){const T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function v(x){o.remove(x)}function w(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:R,acquireProgram:S,releaseProgram:g,releaseShaderCache:v,programs:l,dispose:w}}function xx(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function vx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function md(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function gd(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,_,y,m,h){let b=n[t];return b===void 0?(b={id:d.id,object:d,geometry:p,material:_,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:m,group:h},n[t]=b):(b.id=d.id,b.object=d,b.geometry=p,b.material=_,b.materialVariant=a(d),b.groupOrder=y,b.renderOrder=d.renderOrder,b.z=m,b.group=h),t++,b}function c(d,p,_,y,m,h,b){b.reversedDepth===!0&&(m=-m);const R=o(d,p,_,y,m,h);_.transmission>0?i.push(R):_.transparent===!0?r.push(R):e.push(R)}function l(d,p,_,y,m,h){const b=o(d,p,_,y,m,h);_.transmission>0?i.unshift(b):_.transparent===!0?r.unshift(b):e.unshift(b)}function u(d,p){e.length>1&&e.sort(d||vx),i.length>1&&i.sort(p||md),r.length>1&&r.sort(p||md)}function f(){for(let d=t,p=n.length;d<p;d++){const _=n[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:f,sort:u}}function Mx(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new gd,n.set(i,[a])):r>=s.length?(a=new gd,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Sx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new A,color:new Yt};break;case"SpotLight":e={position:new A,direction:new A,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new A,halfWidth:new A,halfHeight:new A};break}return n[t.id]=e,e}}}function yx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let bx=0;function Ex(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Tx(n){const t=new Sx,e=yx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new A);const r=new A,s=new Ce,a=new Ce;function o(l){let u=0,f=0,d=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let p=0,_=0,y=0,m=0,h=0,b=0,R=0,S=0,g=0,v=0,w=0,x=0,T=0,D=0;l.sort(Ex);for(let O=0,B=l.length;O<B;O++){const N=l[O],z=N.color,q=N.intensity,$=N.distance;let et=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===vr?et=N.shadow.map.texture:et=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=z.r*q,f+=z.g*q,d+=z.b*q;else if(N.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(N.sh.coefficients[Y],q);D++}else if(N.isSunLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const j=N.shadow,it=e.get(N);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[_]=it,i.sunShadowMap[_]=et;const lt=j.getViewportCount();for(let yt=0;yt<lt;yt++)i.sunShadowMatrix[y+yt]=j.getMatrix(yt),i.sunShadowCascade[y+yt]=j._cascadeData[yt];y+=lt,_++}i.sun[p]=Y,p++}else if(N.isDirectionalLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const j=N.shadow,it=e.get(N);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,i.directionalShadow[m]=it,i.directionalShadowMap[m]=et,i.directionalShadowMatrix[m]=N.shadow.matrix,g++}i.directional[m]=Y,m++}else if(N.isSpotLight){const Y=t.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(z).multiplyScalar(q),Y.distance=$,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,i.spot[b]=Y;const j=N.shadow;if(N.map&&(i.spotLightMap[x]=N.map,x++,j.updateMatrices(N),N.castShadow&&T++),i.spotLightMatrix[b]=j.matrix,N.castShadow){const it=e.get(N);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,i.spotShadow[b]=it,i.spotShadowMap[b]=et,w++}b++}else if(N.isRectAreaLight){const Y=t.get(N);Y.color.copy(z).multiplyScalar(q),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),i.rectArea[R]=Y,R++}else if(N.isPointLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){const j=N.shadow,it=e.get(N);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,it.shadowCameraNear=j.camera.near,it.shadowCameraFar=j.camera.far,i.pointShadow[h]=it,i.pointShadowMap[h]=et,i.pointShadowMatrix[h]=N.shadow.matrix,v++}i.point[h]=Y,h++}else if(N.isHemisphereLight){const Y=t.get(N);Y.skyColor.copy(N.color).multiplyScalar(q),Y.groundColor.copy(N.groundColor).multiplyScalar(q),i.hemi[S]=Y,S++}}R>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const L=i.hash;(L.sunLength!==p||L.directionalLength!==m||L.pointLength!==h||L.spotLength!==b||L.rectAreaLength!==R||L.hemiLength!==S||L.numSunShadows!==_||L.numDirectionalShadows!==g||L.numPointShadows!==v||L.numSpotShadows!==w||L.numSpotMaps!==x||L.numLightProbes!==D)&&(i.sun.length=p,i.directional.length=m,i.spot.length=b,i.rectArea.length=R,i.point.length=h,i.hemi.length=S,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.directionalShadowMatrix.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.pointShadowMatrix.length=v,i.spotShadow.length=w,i.spotShadowMap.length=w,i.spotLightMatrix.length=w+x-T,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=D,L.sunLength=p,L.directionalLength=m,L.pointLength=h,L.spotLength=b,L.rectAreaLength=R,L.hemiLength=S,L.numSunShadows=_,L.numDirectionalShadows=g,L.numPointShadows=v,L.numSpotShadows=w,L.numSpotMaps=x,L.numLightProbes=D,i.version=bx++)}function c(l,u){let f=0,d=0,p=0,_=0,y=0,m=0;const h=u.matrixWorldInverse;for(let b=0,R=l.length;b<R;b++){const S=l[b];if(S.isSunLight){const g=i.sun[f];g.direction.setFromMatrixPosition(S.matrixWorld),g.direction.transformDirection(h),f++}else if(S.isDirectionalLight){const g=i.directional[d];g.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(h),d++}else if(S.isSpotLight){const g=i.spot[_];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(h),g.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(h),_++}else if(S.isRectAreaLight){const g=i.rectArea[y];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(h),a.identity(),s.copy(S.matrixWorld),s.premultiply(h),a.extractRotation(s),g.halfWidth.set(S.width*.5,0,0),g.halfHeight.set(0,S.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){const g=i.point[p];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(h),p++}else if(S.isHemisphereLight){const g=i.hemi[m];g.direction.setFromMatrixPosition(S.matrixWorld),g.direction.transformDirection(h),m++}}}return{setup:o,setupView:c,state:i}}function _d(n){const t=new Tx(n),e=[],i=[],r=[];function s(d){f.camera=d,e.length=0,i.length=0,r.length=0}function a(d){e.push(d)}function o(d){i.push(d)}function c(d){r.push(d)}function l(){t.setup(e)}function u(d){t.setupView(e,d)}const f={lightsArray:e,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function wx(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new _d(n),t.set(r,[o])):s>=a.length?(o=new _d(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const Ax=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rx=`uniform sampler2D shadow_pass;
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
}`,Cx=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],Px=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],xd=new Ce,bs=new A,fl=new A;function Dx(n,t,e){let i=new Ic;const r=new Pt,s=new Pt,a=new Ie,o=new Bp,c=new kp,l={},u=e.maxTextureSize,f={[_r]:_n,[_n]:_r,[sn]:sn},d=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:Ax,fragmentShader:Rx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Oe;_.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ot(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fa;let h=this.type;this.render=function(v,w,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;this.type===Od&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fa);const T=n.getRenderTarget(),D=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Ii),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=h!==this.type;B&&w.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(z=>z.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,z=v.length;N<z;N++){const q=v[N],$=q.shadow;if($===void 0){Nt("WebGLShadowMap:",q,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const et=$.getFrameExtents();r.multiply(et),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/et.x),r.x=s.x*et.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/et.y),r.y=s.y*et.y,$.mapSize.y=s.y));const Y=n.state.buffers.depth.getReversed();if($.camera._reversedDepth=Y,$.map===null||B===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===ws){if(q.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Jn(r.x,r.y,{format:vr,type:_i,minFilter:an,magFilter:an,generateMipmaps:!1}),$.map.texture.name=q.name+".shadowMap",$.map.depthTexture=new Gs(r.x,r.y,di),$.map.depthTexture.name=q.name+".shadowMapDepth",$.map.depthTexture.format=Oi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=je,$.map.depthTexture.magFilter=je}else q.isPointLight?($.map=new _h(r.x),$.map.depthTexture=new Dp(r.x,gi)):($.map=new Jn(r.x,r.y),$.map.depthTexture=new Gs(r.x,r.y,gi)),$.map.depthTexture.name=q.name+".shadowMap",$.map.depthTexture.format=Oi,this.type===Fa?($.map.depthTexture.compareFunction=Y?Rc:Ac,$.map.depthTexture.minFilter=an,$.map.depthTexture.magFilter=an):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=je,$.map.depthTexture.magFilter=je);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==r.x||$.map.height!==r.y)&&$.map.setSize(r.x,r.y);const j=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();q.isPointLight!==!0&&$.updateMatrices(q,x);for(let it=0;it<j;it++){const lt=$.getCamera(it);if(q.isPointLight){const yt=$.camera,ve=$.matrix,te=q.distance||yt.far;te!==yt.far&&(yt.far=te,yt.updateProjectionMatrix()),bs.setFromMatrixPosition(q.matrixWorld),yt.position.copy(bs),fl.copy(yt.position),fl.add(Cx[it]),yt.up.copy(Px[it]),yt.lookAt(fl),yt.updateMatrixWorld(),ve.makeTranslation(-bs.x,-bs.y,-bs.z),xd.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),$._frustum.setFromProjectionMatrix(xd,yt.coordinateSystem,yt.reversedDepth)}if($.map.isWebGLCubeRenderTarget)n.setRenderTarget($.map,it),n.clear();else{it===0&&(n.setRenderTarget($.map),n.clear());const yt=$.getViewport(it);a.set(s.x*yt.x,s.y*yt.y,s.x*yt.z,s.y*yt.w),O.viewport(a)}i=$.getFrustum(it),S(w,x,lt,q,this.type)}$.isPointLightShadow!==!0&&this.type===ws&&b($,x),$.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(T,D,L)};function b(v,w){const x=t.update(y);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null?v.mapPass=new Jn(r.x,r.y,{format:vr,type:_i}):(v.mapPass.width!==v.map.width||v.mapPass.height!==v.map.height)&&v.mapPass.setSize(v.map.width,v.map.height),d.uniforms.shadow_pass.value=v.map.depthTexture,d.uniforms.resolution.value.set(v.map.width,v.map.height),d.uniforms.radius.value=v.radius,n.setRenderTarget(v.mapPass),n.clear(),n.renderBufferDirect(w,null,x,d,y,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value.set(v.map.width,v.map.height),p.uniforms.radius.value=v.radius,n.setRenderTarget(v.map),n.clear(),n.renderBufferDirect(w,null,x,p,y,null)}function R(v,w,x,T){let D=null;const L=x.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(L!==void 0)D=L;else if(D=x.isPointLight===!0?c:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const O=D.uuid,B=w.uuid;let N=l[O];N===void 0&&(N={},l[O]=N);let z=N[B];z===void 0&&(z=D.clone(),N[B]=z,w.addEventListener("dispose",g)),D=z}if(D.visible=w.visible,D.wireframe=w.wireframe,T===ws?D.side=w.shadowSide!==null?w.shadowSide:w.side:D.side=w.shadowSide!==null?w.shadowSide:f[w.side],D.alphaMap=w.alphaMap,D.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,D.map=w.map,D.clipShadows=w.clipShadows,D.clippingPlanes=w.clippingPlanes,D.clipIntersection=w.clipIntersection,D.displacementMap=w.displacementMap,D.displacementScale=w.displacementScale,D.displacementBias=w.displacementBias,D.wireframeLinewidth=w.wireframeLinewidth,D.linewidth=w.linewidth,x.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const O=n.properties.get(D);O.light=x}return D}function S(v,w,x,T,D){if(v.visible===!1)return;if(v.layers.test(w.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&D===ws)&&(!v.frustumCulled||v.intersectsFrustum(i))){v.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,v.matrixWorld);const B=t.update(v),N=v.material;if(Array.isArray(N)){const z=B.groups;for(let q=0,$=z.length;q<$;q++){const et=z[q],Y=N[et.materialIndex];if(Y&&Y.visible){const j=R(v,Y,T,D);v.onBeforeShadow(n,v,w,x,B,j,et),n.renderBufferDirect(x,null,B,j,v,et),v.onAfterShadow(n,v,w,x,B,j,et)}}}else if(N.visible){const z=R(v,N,T,D);v.onBeforeShadow(n,v,w,x,B,z,null),n.renderBufferDirect(x,null,B,z,v,null),v.onAfterShadow(n,v,w,x,B,z,null)}}const O=v.children;for(let B=0,N=O.length;B<N;B++)S(O[B],w,x,T,D)}function g(v){v.target.removeEventListener("dispose",g);for(const x in l){const T=l[x],D=v.target.uuid;D in T&&(T[D].dispose(),delete T[D])}}}function Lx(n,t){function e(){let U=!1;const ht=new Ie;let Q=null;const ft=new Ie(0,0,0,0);return{setMask:function(xt){Q!==xt&&!U&&(n.colorMask(xt,xt,xt,xt),Q=xt)},setLocked:function(xt){U=xt},setClear:function(xt,st,Dt,wt,Se){Se===!0&&(xt*=wt,st*=wt,Dt*=wt),ht.set(xt,st,Dt,wt),ft.equals(ht)===!1&&(n.clearColor(xt,st,Dt,wt),ft.copy(ht))},reset:function(){U=!1,Q=null,ft.set(-1,0,0,0)}}}function i(){let U=!1,ht=!1,Q=null,ft=null,xt=null;return{setReversed:function(st){if(ht!==st){const Dt=t.get("EXT_clip_control");st?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),ht=st;const wt=xt;xt=null,this.setClear(wt)}},getReversed:function(){return ht},setTest:function(st){st?nt(n.DEPTH_TEST):bt(n.DEPTH_TEST)},setMask:function(st){Q!==st&&!U&&(n.depthMask(st),Q=st)},setFunc:function(st){if(ht&&(st=zf[st]),ft!==st){switch(st){case yl:n.depthFunc(n.NEVER);break;case bl:n.depthFunc(n.ALWAYS);break;case El:n.depthFunc(n.LESS);break;case Fs:n.depthFunc(n.LEQUAL);break;case Tl:n.depthFunc(n.EQUAL);break;case wl:n.depthFunc(n.GEQUAL);break;case Al:n.depthFunc(n.GREATER);break;case Rl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ft=st}},setLocked:function(st){U=st},setClear:function(st){xt!==st&&(xt=st,ht&&(st=1-st),n.clearDepth(st))},reset:function(){U=!1,Q=null,ft=null,xt=null,ht=!1}}}function r(){let U=!1,ht=null,Q=null,ft=null,xt=null,st=null,Dt=null,wt=null,Se=null;return{setTest:function(oe){U||(oe?nt(n.STENCIL_TEST):bt(n.STENCIL_TEST))},setMask:function(oe){ht!==oe&&!U&&(n.stencilMask(oe),ht=oe)},setFunc:function(oe,kn,ri){(Q!==oe||ft!==kn||xt!==ri)&&(n.stencilFunc(oe,kn,ri),Q=oe,ft=kn,xt=ri)},setOp:function(oe,kn,ri){(st!==oe||Dt!==kn||wt!==ri)&&(n.stencilOp(oe,kn,ri),st=oe,Dt=kn,wt=ri)},setLocked:function(oe){U=oe},setClear:function(oe){Se!==oe&&(n.clearStencil(oe),Se=oe)},reset:function(){U=!1,ht=null,Q=null,ft=null,xt=null,st=null,Dt=null,wt=null,Se=null}}}const s=new e,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},f={},d={},p=new WeakMap,_=[],y=null,m=!1,h=null,b=null,R=null,S=null,g=null,v=null,w=null,x=new Yt(0,0,0),T=0,D=!1,L=null,O=null,B=null,N=null,z=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,et=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(Y)[1]),$=et>=1):Y.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),$=et>=2);let j=null,it={};const lt=n.getParameter(n.SCISSOR_BOX),yt=n.getParameter(n.VIEWPORT),ve=new Ie().fromArray(lt),te=new Ie().fromArray(yt);function ae(U,ht,Q,ft){const xt=new Uint8Array(4),st=n.createTexture();n.bindTexture(U,st),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Dt=0;Dt<Q;Dt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ht,0,n.RGBA,1,1,ft,0,n.RGBA,n.UNSIGNED_BYTE,xt):n.texImage2D(ht+Dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xt);return st}const Z={};Z[n.TEXTURE_2D]=ae(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(n.DEPTH_TEST),a.setFunc(Fs),Zt(!1),we(gu),nt(n.CULL_FACE),se(Ii);function nt(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function bt(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Bt(U,ht){return d[U]!==ht?(n.bindFramebuffer(U,ht),d[U]=ht,U===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ht),U===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ht),!0):!1}function Mt(U,ht){let Q=_,ft=!1;if(U){Q=p.get(ht),Q===void 0&&(Q=[],p.set(ht,Q));const xt=U.textures;if(Q.length!==xt.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let st=0,Dt=xt.length;st<Dt;st++)Q[st]=n.COLOR_ATTACHMENT0+st;Q.length=xt.length,ft=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,ft=!0);ft&&n.drawBuffers(Q)}function Wt(U){return y!==U?(n.useProgram(U),y=U,!0):!1}const Ve={[Yr]:n.FUNC_ADD,[lf]:n.FUNC_SUBTRACT,[cf]:n.FUNC_REVERSE_SUBTRACT};Ve[uf]=n.MIN,Ve[df]=n.MAX;const qt={[hf]:n.ZERO,[ff]:n.ONE,[pf]:n.SRC_COLOR,[Bd]:n.SRC_ALPHA,[Mf]:n.SRC_ALPHA_SATURATE,[xf]:n.DST_COLOR,[gf]:n.DST_ALPHA,[mf]:n.ONE_MINUS_SRC_COLOR,[kd]:n.ONE_MINUS_SRC_ALPHA,[vf]:n.ONE_MINUS_DST_COLOR,[_f]:n.ONE_MINUS_DST_ALPHA,[Sf]:n.CONSTANT_COLOR,[yf]:n.ONE_MINUS_CONSTANT_COLOR,[bf]:n.CONSTANT_ALPHA,[Ef]:n.ONE_MINUS_CONSTANT_ALPHA};function se(U,ht,Q,ft,xt,st,Dt,wt,Se,oe){if(U===Ii){m===!0&&(bt(n.BLEND),m=!1);return}if(m===!1&&(nt(n.BLEND),m=!0),U!==of){if(U!==h||oe!==D){if((b!==Yr||g!==Yr)&&(n.blendEquation(n.FUNC_ADD),b=Yr,g=Yr),oe)switch(U){case Ps:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _u:n.blendFunc(n.ONE,n.ONE);break;case xu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ne("WebGLState: Invalid blending: ",U);break}else switch(U){case Ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _u:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case xu:ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vu:ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ne("WebGLState: Invalid blending: ",U);break}R=null,S=null,v=null,w=null,x.set(0,0,0),T=0,h=U,D=oe}return}xt=xt||ht,st=st||Q,Dt=Dt||ft,(ht!==b||xt!==g)&&(n.blendEquationSeparate(Ve[ht],Ve[xt]),b=ht,g=xt),(Q!==R||ft!==S||st!==v||Dt!==w)&&(n.blendFuncSeparate(qt[Q],qt[ft],qt[st],qt[Dt]),R=Q,S=ft,v=st,w=Dt),(wt.equals(x)===!1||Se!==T)&&(n.blendColor(wt.r,wt.g,wt.b,Se),x.copy(wt),T=Se),h=U,D=!1}function Me(U,ht){U.side===sn?bt(n.CULL_FACE):nt(n.CULL_FACE);let Q=U.side===_n;ht&&(Q=!Q),Zt(Q),U.blending===Ps&&U.transparent===!1?se(Ii):se(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const ft=U.stencilWrite;o.setTest(ft),ft&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),fn(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?nt(n.SAMPLE_ALPHA_TO_COVERAGE):bt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(U){L!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),L=U)}function we(U){U!==sf?(nt(n.CULL_FACE),U!==O&&(U===gu?n.cullFace(n.BACK):U===af?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):bt(n.CULL_FACE),O=U}function Ke(U){U!==B&&($&&n.lineWidth(U),B=U)}function fn(U,ht,Q){U?(nt(n.POLYGON_OFFSET_FILL),(N!==ht||z!==Q)&&(N=ht,z=Q,a.getReversed()&&(ht=-ht),n.polygonOffset(ht,Q))):bt(n.POLYGON_OFFSET_FILL)}function De(U){U?nt(n.SCISSOR_TEST):bt(n.SCISSOR_TEST)}function Be(U){U===void 0&&(U=n.TEXTURE0+q-1),j!==U&&(n.activeTexture(U),j=U)}function F(U,ht,Q){Q===void 0&&(j===null?Q=n.TEXTURE0+q-1:Q=j);let ft=it[Q];ft===void 0&&(ft={type:void 0,texture:void 0},it[Q]=ft),(ft.type!==U||ft.texture!==ht)&&(j!==Q&&(n.activeTexture(Q),j=Q),n.bindTexture(U,ht||Z[U]),ft.type=U,ft.texture=ht)}function tn(){const U=it[j];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function he(){try{n.compressedTexImage2D(...arguments)}catch(U){ne("WebGLState:",U)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(U){ne("WebGLState:",U)}}function M(){try{n.texSubImage2D(...arguments)}catch(U){ne("WebGLState:",U)}}function k(){try{n.texSubImage3D(...arguments)}catch(U){ne("WebGLState:",U)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(U){ne("WebGLState:",U)}}function K(){try{n.compressedTexSubImage3D(...arguments)}catch(U){ne("WebGLState:",U)}}function ot(){try{n.texStorage2D(...arguments)}catch(U){ne("WebGLState:",U)}}function ct(){try{n.texStorage3D(...arguments)}catch(U){ne("WebGLState:",U)}}function J(){try{n.texImage2D(...arguments)}catch(U){ne("WebGLState:",U)}}function tt(){try{n.texImage3D(...arguments)}catch(U){ne("WebGLState:",U)}}function ut(U){return f[U]!==void 0?f[U]:n.getParameter(U)}function Rt(U,ht){f[U]!==ht&&(n.pixelStorei(U,ht),f[U]=ht)}function pt(U){ve.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),ve.copy(U))}function dt(U){te.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),te.copy(U))}function Ct(U,ht){let Q=l.get(ht);Q===void 0&&(Q=new WeakMap,l.set(ht,Q));let ft=Q.get(U);ft===void 0&&(ft=n.getUniformBlockIndex(ht,U.name),Q.set(U,ft))}function It(U,ht){const ft=l.get(ht).get(U);c.get(ht)!==ft&&(n.uniformBlockBinding(ht,ft,U.__bindingPointIndex),c.set(ht,ft))}function zt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},j=null,it={},d={},p=new WeakMap,_=[],y=null,m=!1,h=null,b=null,R=null,S=null,g=null,v=null,w=null,x=new Yt(0,0,0),T=0,D=!1,L=null,O=null,B=null,N=null,z=null,ve.set(0,0,n.canvas.width,n.canvas.height),te.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:nt,disable:bt,bindFramebuffer:Bt,drawBuffers:Mt,useProgram:Wt,setBlending:se,setMaterial:Me,setFlipSided:Zt,setCullFace:we,setLineWidth:Ke,setPolygonOffset:fn,setScissorTest:De,activeTexture:Be,bindTexture:F,unbindTexture:tn,compressedTexImage2D:he,compressedTexImage3D:C,texImage2D:J,texImage3D:tt,pixelStorei:Rt,getParameter:ut,updateUBOMapping:Ct,uniformBlockBinding:It,texStorage2D:ot,texStorage3D:ct,texSubImage2D:M,texSubImage3D:k,compressedTexSubImage2D:V,compressedTexSubImage3D:K,scissor:pt,viewport:dt,reset:zt}}function Ix(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Pt,u=new WeakMap,f=new Set;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,M){return _?new OffscreenCanvas(C,M):Qa("canvas")}function m(C,M,k){let V=1;const K=he(C);if((K.width>k||K.height>k)&&(V=k/Math.max(K.width,K.height)),V<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ot=Math.floor(V*K.width),ct=Math.floor(V*K.height);d===void 0&&(d=y(ot,ct));const J=M?y(ot,ct):d;return J.width=ot,J.height=ct,J.getContext("2d").drawImage(C,0,0,ot,ct),Nt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ot+"x"+ct+")."),J}else return"data"in C&&Nt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function h(C){return C.generateMipmaps}function b(C){n.generateMipmap(C)}function R(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(C,M,k,V,K,ot=!1){if(C!==null){if(n[C]!==void 0)return n[C];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ct;V&&(ct=t.get("EXT_texture_norm16"),ct||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=M;if(M===n.RED&&(k===n.FLOAT&&(J=n.R32F),k===n.HALF_FLOAT&&(J=n.R16F),k===n.UNSIGNED_BYTE&&(J=n.R8),k===n.UNSIGNED_SHORT&&ct&&(J=ct.R16_EXT),k===n.SHORT&&ct&&(J=ct.R16_SNORM_EXT)),M===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.R8UI),k===n.UNSIGNED_SHORT&&(J=n.R16UI),k===n.UNSIGNED_INT&&(J=n.R32UI),k===n.BYTE&&(J=n.R8I),k===n.SHORT&&(J=n.R16I),k===n.INT&&(J=n.R32I)),M===n.RG&&(k===n.FLOAT&&(J=n.RG32F),k===n.HALF_FLOAT&&(J=n.RG16F),k===n.UNSIGNED_BYTE&&(J=n.RG8),k===n.UNSIGNED_SHORT&&ct&&(J=ct.RG16_EXT),k===n.SHORT&&ct&&(J=ct.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RG8UI),k===n.UNSIGNED_SHORT&&(J=n.RG16UI),k===n.UNSIGNED_INT&&(J=n.RG32UI),k===n.BYTE&&(J=n.RG8I),k===n.SHORT&&(J=n.RG16I),k===n.INT&&(J=n.RG32I)),M===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RGB8UI),k===n.UNSIGNED_SHORT&&(J=n.RGB16UI),k===n.UNSIGNED_INT&&(J=n.RGB32UI),k===n.BYTE&&(J=n.RGB8I),k===n.SHORT&&(J=n.RGB16I),k===n.INT&&(J=n.RGB32I)),M===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),k===n.UNSIGNED_INT&&(J=n.RGBA32UI),k===n.BYTE&&(J=n.RGBA8I),k===n.SHORT&&(J=n.RGBA16I),k===n.INT&&(J=n.RGBA32I)),M===n.RGB&&(k===n.UNSIGNED_SHORT&&ct&&(J=ct.RGB16_EXT),k===n.SHORT&&ct&&(J=ct.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),M===n.RGBA){const tt=ot?Ja:jt.getTransfer(K);k===n.FLOAT&&(J=n.RGBA32F),k===n.HALF_FLOAT&&(J=n.RGBA16F),k===n.UNSIGNED_BYTE&&(J=tt===fe?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&ct&&(J=ct.RGBA16_EXT),k===n.SHORT&&ct&&(J=ct.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function g(C,M){let k;return C?M===null||M===gi||M===Bs?k=n.DEPTH24_STENCIL8:M===di?k=n.DEPTH32F_STENCIL8:M===Os&&(k=n.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===gi||M===Bs?k=n.DEPTH_COMPONENT24:M===di?k=n.DEPTH_COMPONENT32F:M===Os&&(k=n.DEPTH_COMPONENT16),k}function v(C,M){return h(C)===!0||C.isFramebufferTexture&&C.minFilter!==je&&C.minFilter!==an?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function w(C){const M=C.target;M.removeEventListener("dispose",w),T(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&f.delete(M)}function x(C){const M=C.target;M.removeEventListener("dispose",x),L(M)}function T(C){const M=i.get(C);if(M.__webglInit===void 0)return;const k=C.source,V=p.get(k);if(V){const K=V[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&D(C),Object.keys(V).length===0&&p.delete(k)}i.remove(C)}function D(C){const M=i.get(C);n.deleteTexture(M.__webglTexture);const k=C.source,V=p.get(k);delete V[M.__cacheKey],a.memory.textures--}function L(C){const M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(M.__webglFramebuffer[V]))for(let K=0;K<M.__webglFramebuffer[V].length;K++)n.deleteFramebuffer(M.__webglFramebuffer[V][K]);else n.deleteFramebuffer(M.__webglFramebuffer[V]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[V])}else{if(Array.isArray(M.__webglFramebuffer))for(let V=0;V<M.__webglFramebuffer.length;V++)n.deleteFramebuffer(M.__webglFramebuffer[V]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let V=0;V<M.__webglColorRenderbuffer.length;V++)M.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[V]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=C.textures;for(let V=0,K=k.length;V<K;V++){const ot=i.get(k[V]);ot.__webglTexture&&(n.deleteTexture(ot.__webglTexture),a.memory.textures--),i.remove(k[V])}i.remove(C)}let O=0;function B(){O=0}function N(){return O}function z(C){O=C}function q(){const C=O;return C>=r.maxTextures&&Nt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures),O+=1,C}function $(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function et(C,M){const k=i.get(C);if(C.isVideoTexture&&F(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){const V=C.image;if(V===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(k,C,M);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+M)}function Y(C,M){const k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){bt(k,C,M);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+M)}function j(C,M){const k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){bt(k,C,M);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+M)}function it(C,M){const k=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&k.__version!==C.version){Bt(k,C,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+M)}const lt={[Cl]:n.REPEAT,[Di]:n.CLAMP_TO_EDGE,[Pl]:n.MIRRORED_REPEAT},yt={[je]:n.NEAREST,[Af]:n.NEAREST_MIPMAP_NEAREST,[ia]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[Fo]:n.LINEAR_MIPMAP_NEAREST,[ur]:n.LINEAR_MIPMAP_LINEAR},ve={[Df]:n.NEVER,[Ff]:n.ALWAYS,[Lf]:n.LESS,[Ac]:n.LEQUAL,[If]:n.EQUAL,[Rc]:n.GEQUAL,[Uf]:n.GREATER,[Nf]:n.NOTEQUAL};function te(C,M){if(M.type===di&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===an||M.magFilter===Fo||M.magFilter===ia||M.magFilter===ur||M.minFilter===an||M.minFilter===Fo||M.minFilter===ia||M.minFilter===ur)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,lt[M.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,lt[M.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,lt[M.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,yt[M.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,yt[M.minFilter]),M.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ve[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===je||M.minFilter!==ia&&M.minFilter!==ur||M.type===di&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ae(C,M){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",w));const V=M.source;let K=p.get(V);K===void 0&&(K={},p.set(V,K));const ot=$(M);if(ot!==C.__cacheKey){K[ot]===void 0&&(K[ot]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),K[ot].usedTimes++;const ct=K[C.__cacheKey];ct!==void 0&&(K[C.__cacheKey].usedTimes--,ct.usedTimes===0&&D(M)),C.__cacheKey=ot,C.__webglTexture=K[ot].texture}return k}function Z(C,M,k){return Math.floor(Math.floor(C/k)/M)}function nt(C,M,k,V){const ot=C.updateRanges;if(ot.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,k,V,M.data);else{ot.sort((Rt,pt)=>Rt.start-pt.start);let ct=0;for(let Rt=1;Rt<ot.length;Rt++){const pt=ot[ct],dt=ot[Rt],Ct=pt.start+pt.count,It=Z(dt.start,M.width,4),zt=Z(pt.start,M.width,4);dt.start<=Ct+1&&It===zt&&Z(dt.start+dt.count-1,M.width,4)===It?pt.count=Math.max(pt.count,dt.start+dt.count-pt.start):(++ct,ot[ct]=dt)}ot.length=ct+1;const J=e.getParameter(n.UNPACK_ROW_LENGTH),tt=e.getParameter(n.UNPACK_SKIP_PIXELS),ut=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let Rt=0,pt=ot.length;Rt<pt;Rt++){const dt=ot[Rt],Ct=Math.floor(dt.start/4),It=Math.ceil(dt.count/4),zt=Ct%M.width,U=Math.floor(Ct/M.width),ht=It,Q=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,zt),e.pixelStorei(n.UNPACK_SKIP_ROWS,U),e.texSubImage2D(n.TEXTURE_2D,0,zt,U,ht,Q,k,V,M.data)}C.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,J),e.pixelStorei(n.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(n.UNPACK_SKIP_ROWS,ut)}}function bt(C,M,k){let V=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(V=n.TEXTURE_3D);const K=ae(C,M),ot=M.source;e.bindTexture(V,C.__webglTexture,n.TEXTURE0+k);const ct=i.get(ot);if(ot.version!==ct.__version||K===!0){if(e.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const Q=jt.getPrimaries(jt.workingColorSpace),ft=M.colorSpace===Yi?null:jt.getPrimaries(M.colorSpace),xt=M.colorSpace===Yi||Q===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let tt=m(M.image,!1,r.maxTextureSize);tt=tn(M,tt);const ut=s.convert(M.format,M.colorSpace),Rt=s.convert(M.type);let pt=S(M.internalFormat,ut,Rt,M.normalized,M.colorSpace,M.isVideoTexture);te(V,M);let dt;const Ct=M.mipmaps,It=M.isVideoTexture!==!0,zt=ct.__version===void 0||K===!0,U=ot.dataReady,ht=v(M,tt);if(M.isDepthTexture)pt=g(M.format===dr,M.type),zt&&(It?e.texStorage2D(n.TEXTURE_2D,1,pt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,pt,tt.width,tt.height,0,ut,Rt,null));else if(M.isDataTexture)if(Ct.length>0){It&&zt&&e.texStorage2D(n.TEXTURE_2D,ht,pt,Ct[0].width,Ct[0].height);for(let Q=0,ft=Ct.length;Q<ft;Q++)dt=Ct[Q],It?U&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,dt.width,dt.height,ut,Rt,dt.data):e.texImage2D(n.TEXTURE_2D,Q,pt,dt.width,dt.height,0,ut,Rt,dt.data);M.generateMipmaps=!1}else It?(zt&&e.texStorage2D(n.TEXTURE_2D,ht,pt,tt.width,tt.height),U&&nt(M,tt,ut,Rt)):e.texImage2D(n.TEXTURE_2D,0,pt,tt.width,tt.height,0,ut,Rt,tt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){It&&zt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ht,pt,Ct[0].width,Ct[0].height,tt.depth);for(let Q=0,ft=Ct.length;Q<ft;Q++)if(dt=Ct[Q],M.format!==Zn)if(ut!==null)if(It){if(U)if(M.layerUpdates.size>0){const xt=Zu(dt.width,dt.height,M.format,M.type);for(const st of M.layerUpdates){const Dt=dt.data.subarray(st*xt/dt.data.BYTES_PER_ELEMENT,(st+1)*xt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,st,dt.width,dt.height,1,ut,Dt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,dt.width,dt.height,tt.depth,ut,dt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,pt,dt.width,dt.height,tt.depth,0,dt.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,dt.width,dt.height,tt.depth,ut,Rt,dt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Q,pt,dt.width,dt.height,tt.depth,0,ut,Rt,dt.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{It&&zt&&e.texStorage2D(n.TEXTURE_2D,ht,pt,Ct[0].width,Ct[0].height);for(let Q=0,ft=Ct.length;Q<ft;Q++)dt=Ct[Q],M.format!==Zn?ut!==null?It?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,dt.width,dt.height,ut,dt.data):e.compressedTexImage2D(n.TEXTURE_2D,Q,pt,dt.width,dt.height,0,dt.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?U&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,dt.width,dt.height,ut,Rt,dt.data):e.texImage2D(n.TEXTURE_2D,Q,pt,dt.width,dt.height,0,ut,Rt,dt.data)}else if(M.isDataArrayTexture)if(It){if(zt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ht,pt,tt.width,tt.height,tt.depth),U)if(M.layerUpdates.size>0){const Q=Zu(tt.width,tt.height,M.format,M.type);for(const ft of M.layerUpdates){const xt=tt.data.subarray(ft*Q/tt.data.BYTES_PER_ELEMENT,(ft+1)*Q/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ft,tt.width,tt.height,1,ut,Rt,xt)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ut,Rt,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,pt,tt.width,tt.height,tt.depth,0,ut,Rt,tt.data);else if(M.isData3DTexture)It?(zt&&e.texStorage3D(n.TEXTURE_3D,ht,pt,tt.width,tt.height,tt.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ut,Rt,tt.data)):e.texImage3D(n.TEXTURE_3D,0,pt,tt.width,tt.height,tt.depth,0,ut,Rt,tt.data);else if(M.isFramebufferTexture){if(zt)if(It)e.texStorage2D(n.TEXTURE_2D,ht,pt,tt.width,tt.height);else{let Q=tt.width,ft=tt.height;for(let xt=0;xt<ht;xt++)e.texImage2D(n.TEXTURE_2D,xt,pt,Q,ft,0,ut,Rt,null),Q>>=1,ft>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){const Q=n.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),tt.parentNode!==Q){Q.appendChild(tt),f.add(M),Q.onpaint=ft=>{const xt=ft.changedElements;for(const st of f)xt.includes(st.image)&&(st.needsUpdate=!0)},Q.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,tt);else{const xt=n.RGBA,st=n.RGBA,Dt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,xt,st,Dt,tt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ct.length>0){if(It&&zt){const Q=he(Ct[0]);e.texStorage2D(n.TEXTURE_2D,ht,pt,Q.width,Q.height)}for(let Q=0,ft=Ct.length;Q<ft;Q++)dt=Ct[Q],It?U&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,ut,Rt,dt):e.texImage2D(n.TEXTURE_2D,Q,pt,ut,Rt,dt);M.generateMipmaps=!1}else if(It){if(zt){const Q=he(tt);e.texStorage2D(n.TEXTURE_2D,ht,pt,Q.width,Q.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut,Rt,tt)}else e.texImage2D(n.TEXTURE_2D,0,pt,ut,Rt,tt);h(M)&&b(V),ct.__version=ot.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Bt(C,M,k){if(M.image.length!==6)return;const V=ae(C,M),K=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+k);const ot=i.get(K);if(K.version!==ot.__version||V===!0){e.activeTexture(n.TEXTURE0+k);const ct=jt.getPrimaries(jt.workingColorSpace),J=M.colorSpace===Yi?null:jt.getPrimaries(M.colorSpace),tt=M.colorSpace===Yi||ct===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);const ut=M.isCompressedTexture||M.image[0].isCompressedTexture,Rt=M.image[0]&&M.image[0].isDataTexture,pt=[];for(let st=0;st<6;st++)!ut&&!Rt?pt[st]=m(M.image[st],!0,r.maxCubemapSize):pt[st]=Rt?M.image[st].image:M.image[st],pt[st]=tn(M,pt[st]);const dt=pt[0],Ct=s.convert(M.format,M.colorSpace),It=s.convert(M.type),zt=S(M.internalFormat,Ct,It,M.normalized,M.colorSpace),U=M.isVideoTexture!==!0,ht=ot.__version===void 0||V===!0,Q=K.dataReady;let ft=v(M,dt);te(n.TEXTURE_CUBE_MAP,M);let xt;if(ut){U&&ht&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,zt,dt.width,dt.height);for(let st=0;st<6;st++){xt=pt[st].mipmaps;for(let Dt=0;Dt<xt.length;Dt++){const wt=xt[Dt];M.format!==Zn?Ct!==null?U?Q&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt,0,0,wt.width,wt.height,Ct,wt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt,zt,wt.width,wt.height,0,wt.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt,0,0,wt.width,wt.height,Ct,It,wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt,zt,wt.width,wt.height,0,Ct,It,wt.data)}}}else{if(xt=M.mipmaps,U&&ht){xt.length>0&&ft++;const st=he(pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,zt,st.width,st.height)}for(let st=0;st<6;st++)if(Rt){U?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,pt[st].width,pt[st].height,Ct,It,pt[st].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,zt,pt[st].width,pt[st].height,0,Ct,It,pt[st].data);for(let Dt=0;Dt<xt.length;Dt++){const Se=xt[Dt].image[st].image;U?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt+1,0,0,Se.width,Se.height,Ct,It,Se.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt+1,zt,Se.width,Se.height,0,Ct,It,Se.data)}}else{U?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ct,It,pt[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,zt,Ct,It,pt[st]);for(let Dt=0;Dt<xt.length;Dt++){const wt=xt[Dt];U?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt+1,0,0,Ct,It,wt.image[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt+1,zt,Ct,It,wt.image[st])}}}h(M)&&b(n.TEXTURE_CUBE_MAP),ot.__version=K.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Mt(C,M,k,V,K,ot){const ct=s.convert(k.format,k.colorSpace),J=s.convert(k.type),tt=S(k.internalFormat,ct,J,k.normalized,k.colorSpace),ut=i.get(M),Rt=i.get(k);if(Rt.__renderTarget=M,!ut.__hasExternalTextures){const pt=Math.max(1,M.width>>ot),dt=Math.max(1,M.height>>ot);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,ot,tt,pt,dt,M.depth,0,ct,J,null):e.texImage2D(K,ot,tt,pt,dt,0,ct,J,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),Be(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,K,Rt.__webglTexture,0,De(M)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,K,Rt.__webglTexture,ot),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Wt(C,M,k){if(n.bindRenderbuffer(n.RENDERBUFFER,C),M.depthBuffer){const V=M.depthTexture,K=V&&V.isDepthTexture?V.type:null,ot=g(M.stencilBuffer,K),ct=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Be(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De(M),ot,M.width,M.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,De(M),ot,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ot,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ct,n.RENDERBUFFER,C)}else{const V=M.textures;for(let K=0;K<V.length;K++){const ot=V[K],ct=s.convert(ot.format,ot.colorSpace),J=s.convert(ot.type),tt=S(ot.internalFormat,ct,J,ot.normalized,ot.colorSpace);Be(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De(M),tt,M.width,M.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,De(M),tt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,tt,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ve(C,M,k){const V=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=i.get(M.depthTexture);if(K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V){if(K.__webglInit===void 0&&(K.__webglInit=!0,M.depthTexture.addEventListener("dispose",w)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),te(n.TEXTURE_CUBE_MAP,M.depthTexture);const ut=s.convert(M.depthTexture.format),Rt=s.convert(M.depthTexture.type);let pt;M.depthTexture.format===Oi?pt=n.DEPTH_COMPONENT24:M.depthTexture.format===dr&&(pt=n.DEPTH24_STENCIL8);for(let dt=0;dt<6;dt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,pt,M.width,M.height,0,ut,Rt,null)}}else et(M.depthTexture,0);const ot=K.__webglTexture,ct=De(M),J=V?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,tt=M.depthTexture.format===dr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===Oi)Be(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,J,ot,0,ct):n.framebufferTexture2D(n.FRAMEBUFFER,tt,J,ot,0);else if(M.depthTexture.format===dr)Be(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,J,ot,0,ct):n.framebufferTexture2D(n.FRAMEBUFFER,tt,J,ot,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function qt(C){const M=i.get(C),k=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const V=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),V){const K=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,V.removeEventListener("dispose",K)};V.addEventListener("dispose",K),M.__depthDisposeCallback=K}M.__boundDepthTexture=V}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(k)for(let V=0;V<6;V++)Ve(M.__webglFramebuffer[V],C,V);else{const V=C.texture.mipmaps;V&&V.length>0?Ve(M.__webglFramebuffer[0],C,0):Ve(M.__webglFramebuffer,C,0)}else if(k){M.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[V]),M.__webglDepthbuffer[V]===void 0)M.__webglDepthbuffer[V]=n.createRenderbuffer(),Wt(M.__webglDepthbuffer[V],C,!1);else{const K=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=M.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ot)}}else{const V=C.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Wt(M.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ot)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function se(C,M,k){const V=i.get(C);M!==void 0&&Mt(V.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&qt(C)}function Me(C){const M=C.texture,k=i.get(C),V=i.get(M);C.addEventListener("dispose",x);const K=C.textures,ot=C.isWebGLCubeRenderTarget===!0,ct=K.length>1;if(ct||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=M.version,a.memory.textures++),ot){k.__webglFramebuffer=[];for(let J=0;J<6;J++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[J]=[];for(let tt=0;tt<M.mipmaps.length;tt++)k.__webglFramebuffer[J][tt]=n.createFramebuffer()}else k.__webglFramebuffer[J]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let J=0;J<M.mipmaps.length;J++)k.__webglFramebuffer[J]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(ct)for(let J=0,tt=K.length;J<tt;J++){const ut=i.get(K[J]);ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&Be(C)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let J=0;J<K.length;J++){const tt=K[J];k.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[J]);const ut=s.convert(tt.format,tt.colorSpace),Rt=s.convert(tt.type),pt=S(tt.internalFormat,ut,Rt,tt.normalized,tt.colorSpace,C.isXRRenderTarget===!0),dt=De(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,pt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,k.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Wt(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ot){e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),te(n.TEXTURE_CUBE_MAP,M);for(let J=0;J<6;J++)if(M.mipmaps&&M.mipmaps.length>0)for(let tt=0;tt<M.mipmaps.length;tt++)Mt(k.__webglFramebuffer[J][tt],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,tt);else Mt(k.__webglFramebuffer[J],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);h(M)&&b(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let J=0,tt=K.length;J<tt;J++){const ut=K[J],Rt=i.get(ut);let pt=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(pt,Rt.__webglTexture),te(pt,ut),Mt(k.__webglFramebuffer,C,ut,n.COLOR_ATTACHMENT0+J,pt,0),h(ut)&&b(pt)}e.unbindTexture()}else{let J=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(J,V.__webglTexture),te(J,M),M.mipmaps&&M.mipmaps.length>0)for(let tt=0;tt<M.mipmaps.length;tt++)Mt(k.__webglFramebuffer[tt],C,M,n.COLOR_ATTACHMENT0,J,tt);else Mt(k.__webglFramebuffer,C,M,n.COLOR_ATTACHMENT0,J,0);h(M)&&b(J),e.unbindTexture()}C.depthBuffer&&qt(C)}function Zt(C){const M=C.textures;for(let k=0,V=M.length;k<V;k++){const K=M[k];if(h(K)){const ot=R(C),ct=i.get(K).__webglTexture;e.bindTexture(ot,ct),b(ot),e.unbindTexture()}}}const we=[],Ke=[];function fn(C){if(C.samples>0){if(Be(C)===!1){const M=C.textures,k=C.width,V=C.height;let K=n.COLOR_BUFFER_BIT;const ot=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=i.get(C),J=M.length>1;if(J)for(let ut=0;ut<M.length;ut++)e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);const tt=C.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let ut=0;ut<M.length;ut++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);const Rt=i.get(M[ut]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Rt,0)}n.blitFramebuffer(0,0,k,V,0,0,k,V,K,n.NEAREST),c===!0&&(we.length=0,Ke.length=0,we.push(n.COLOR_ATTACHMENT0+ut),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(we.push(ot),Ke.push(ot),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ke)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,we))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let ut=0;ut<M.length;ut++){e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);const Rt=i.get(M[ut]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,Rt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){const M=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function De(C){return Math.min(r.maxSamples,C.samples)}function Be(C){const M=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function F(C){const M=a.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function tn(C,M){const k=C.colorSpace,V=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Za&&k!==Yi&&(jt.getTransfer(k)===fe?(V!==Zn||K!==bn)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ne("WebGLTextures: Unsupported texture color space:",k)),M}function he(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=B,this.getTextureUnits=N,this.setTextureUnits=z,this.setTexture2D=et,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=it,this.rebindTextures=se,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Be,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ux(n,t){function e(i,r=Yi){let s;const a=jt.getTransfer(r);if(i===bn)return n.UNSIGNED_BYTE;if(i===yc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===bc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===qd)return n.BYTE;if(i===Kd)return n.SHORT;if(i===Os)return n.UNSIGNED_SHORT;if(i===Sc)return n.INT;if(i===gi)return n.UNSIGNED_INT;if(i===di)return n.FLOAT;if(i===_i)return n.HALF_FLOAT;if(i===Qd)return n.ALPHA;if(i===jd)return n.RGB;if(i===Zn)return n.RGBA;if(i===Oi)return n.DEPTH_COMPONENT;if(i===dr)return n.DEPTH_STENCIL;if(i===th)return n.RED;if(i===Ec)return n.RED_INTEGER;if(i===vr)return n.RG;if(i===Tc)return n.RG_INTEGER;if(i===wc)return n.RGBA_INTEGER;if(i===Oa||i===Ba||i===ka||i===za)if(a===fe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Oa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Oa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ba)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ka)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===za)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Dl||i===Ll||i===Il||i===Ul)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Dl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ll)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Il)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ul)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nl||i===Fl||i===Ol||i===Bl||i===kl||i===qa||i===zl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Nl||i===Fl)return a===fe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ol)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Bl)return s.COMPRESSED_R11_EAC;if(i===kl)return s.COMPRESSED_SIGNED_R11_EAC;if(i===qa)return s.COMPRESSED_RG11_EAC;if(i===zl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Gl||i===Hl||i===Vl||i===Wl||i===Xl||i===$l||i===Yl||i===ql||i===Kl||i===Zl||i===Jl||i===Ql||i===jl||i===tc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Gl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$l)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ql)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Kl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ql)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===tc)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ec||i===nc||i===ic)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===ec)return a===fe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ic)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rc||i===sc||i===Ka||i===ac)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===rc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===sc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ka)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ac)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Bs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Nx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fx=`
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

}`;class Ox{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new dh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Mi({vertexShader:Nx,fragmentShader:Fx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ot(new Bn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bx extends Ji{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,d=null,p=null,_=null;const y=typeof XRWebGLBinding<"u",m=new Ox,h={},b=e.getContextAttributes();let R=null,S=null;const g=[],v=[],w=new Pt;let x=null,T=null;const D=new Xn;D.viewport=new Ie;const L=new Xn;L.viewport=new Ie;const O=[D,L],B=new Xp;let N=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let nt=g[Z];return nt===void 0&&(nt=new Vo,g[Z]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Z){let nt=g[Z];return nt===void 0&&(nt=new Vo,g[Z]=nt),nt.getGripSpace()},this.getHand=function(Z){let nt=g[Z];return nt===void 0&&(nt=new Vo,g[Z]=nt),nt.getHandSpace()};function q(Z){const nt=v.indexOf(Z.inputSource);if(nt===-1)return;const bt=g[nt];bt!==void 0&&(bt.update(Z.inputSource,Z.frame,l||a),bt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function $(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",et);for(let Z=0;Z<g.length;Z++){const nt=v[Z];nt!==null&&(v[Z]=null,g[Z].disconnect(nt))}N=null,z=null,m.reset();for(const Z in h)delete h[Z];if(t.setRenderTarget(R),p=null,d=null,f=null,r=null,S=null,ae.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(w.width,w.height,!1),T!==null){const Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(R=t.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",$),r.addEventListener("inputsourceschange",et),b.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(w),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Bt=null,Mt=null;b.depth&&(Mt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=b.stencil?dr:Oi,Bt=b.stencil?Bs:gi);const Wt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Wt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Jn(d.textureWidth,d.textureHeight,{format:Zn,type:bn,depthTexture:new Gs(d.textureWidth,d.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const bt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,bt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Jn(p.framebufferWidth,p.framebufferHeight,{format:Zn,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ae.setContext(r),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et(Z){for(let nt=0;nt<Z.removed.length;nt++){const bt=Z.removed[nt],Bt=v.indexOf(bt);Bt>=0&&(v[Bt]=null,g[Bt].disconnect(bt))}for(let nt=0;nt<Z.added.length;nt++){const bt=Z.added[nt];let Bt=v.indexOf(bt);if(Bt===-1){for(let Wt=0;Wt<g.length;Wt++)if(Wt>=v.length){v.push(bt),Bt=Wt;break}else if(v[Wt]===null){v[Wt]=bt,Bt=Wt;break}if(Bt===-1)break}const Mt=g[Bt];Mt&&Mt.connect(bt)}}const Y=new A,j=new A;function it(Z,nt,bt){Y.setFromMatrixPosition(nt.matrixWorld),j.setFromMatrixPosition(bt.matrixWorld);const Bt=Y.distanceTo(j),Mt=nt.projectionMatrix.elements,Wt=bt.projectionMatrix.elements,Ve=Mt[14]/(Mt[10]-1),qt=Mt[14]/(Mt[10]+1),se=(Mt[9]+1)/Mt[5],Me=(Mt[9]-1)/Mt[5],Zt=(Mt[8]-1)/Mt[0],we=(Wt[8]+1)/Wt[0],Ke=Ve*Zt,fn=Ve*we,De=Bt/(-Zt+we),Be=De*-Zt;if(nt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Be),Z.translateZ(De),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Mt[10]===-1)Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const F=Ve+De,tn=qt+De,he=Ke-Be,C=fn+(Bt-Be),M=se*qt/tn*F,k=Me*qt/tn*F;Z.projectionMatrix.makePerspective(he,C,M,k,F,tn),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function lt(Z,nt){nt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(nt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let nt=Z.near,bt=Z.far;m.texture!==null&&(m.depthNear>0&&(nt=m.depthNear),m.depthFar>0&&(bt=m.depthFar)),B.near=L.near=D.near=nt,B.far=L.far=D.far=bt,(N!==B.near||z!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),N=B.near,z=B.far),B.layers.mask=Z.layers.mask|6,D.layers.mask=B.layers.mask&-5,L.layers.mask=B.layers.mask&-3;const Bt=Z.parent,Mt=B.cameras;lt(B,Bt);for(let Wt=0;Wt<Mt.length;Wt++)lt(Mt[Wt],Bt);Mt.length===2?it(B,D,L):B.projectionMatrix.copy(D.projectionMatrix),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),yt(Z,B,Bt)};function yt(Z,nt,bt){bt===null?Z.matrix.copy(nt.matrixWorld):(Z.matrix.copy(bt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(nt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=zs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Z){return h[Z]};let ve=null;function te(Z,nt){if(u=nt.getViewerPose(l||a),_=nt,u!==null){const bt=u.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let Bt=!1;bt.length!==B.cameras.length&&(B.cameras.length=0,Bt=!0);for(let qt=0;qt<bt.length;qt++){const se=bt[qt];let Me=null;if(p!==null)Me=p.getViewport(se);else{const we=f.getViewSubImage(d,se);Me=we.viewport,qt===0&&(t.setRenderTargetTextures(S,we.colorTexture,we.depthStencilTexture),t.setRenderTarget(S))}let Zt=O[qt];Zt===void 0&&(Zt=new Xn,Zt.layers.enable(qt),Zt.viewport=new Ie,O[qt]=Zt),Zt.matrix.fromArray(se.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(se.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(Me.x,Me.y,Me.width,Me.height),qt===0&&(B.matrix.copy(Zt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Bt===!0&&B.cameras.push(Zt)}const Mt=r.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){f=i.getBinding();const qt=f.getDepthInformation(bt[0]);qt&&qt.isValid&&qt.texture&&m.init(qt,r.renderState)}if(Mt&&Mt.includes("camera-access")&&y){t.state.unbindTexture(),f=i.getBinding();for(let qt=0;qt<bt.length;qt++){const se=bt[qt].camera;if(se){let Me=h[se];Me||(Me=new dh,h[se]=Me);const Zt=f.getCameraImage(se);Me.sourceTexture=Zt}}}}for(let bt=0;bt<g.length;bt++){const Bt=v[bt],Mt=g[bt];Bt!==null&&Mt!==void 0&&Mt.update(Bt,nt,l||a)}ve&&ve(Z,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),_=null}const ae=new mh;ae.setAnimationLoop(te),this.setAnimationLoop=function(Z){ve=Z},this.dispose=function(){}}}const kx=new Ce,yh=new kt;yh.set(-1,0,0,0,1,0,0,0,1);function zx(n,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,hh(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,b,R,S){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(m,h):h.isMeshLambertMaterial?(s(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),y(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?c(m,h,b,R):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===_n&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===_n&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const b=t.get(h),R=b.envMap,S=b.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(kx.makeRotationFromEuler(S)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(yh),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,b,R){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*b,m.scale.value=R*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,b){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===_n&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.retroreflectivity>0&&(m.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){const b=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Gx(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,g){const v=g.program;i.uniformBlockBinding(S,v)}function l(S,g){let v=r[S.id];v===void 0&&(m(S),v=u(S),r[S.id]=v,S.addEventListener("dispose",b));const w=g.program;i.updateUBOMapping(S,w);const x=t.render.frame;s[S.id]!==x&&(d(S),s[S.id]=x)}function u(S){const g=f();S.__bindingPointIndex=g;const v=n.createBuffer(),w=S.__size,x=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,w,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,v),v}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const g=r[S.id],v=S.uniforms,w=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let x=0,T=v.length;x<T;x++){const D=v[x];if(Array.isArray(D))for(let L=0,O=D.length;L<O;L++)p(D[L],x,L,w);else p(D,x,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,g,v,w){if(y(S,g,v,w)===!0){const x=S.__offset,T=S.value;if(Array.isArray(T)){let D=0;for(let L=0;L<T.length;L++){const O=T[L],B=h(O);_(O,S.__data,D),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(D+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(T,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,S.__data)}}function _(S,g,v){typeof S=="number"||typeof S=="boolean"?g[0]=S:S.isMatrix3?(g[0]=S.elements[0],g[1]=S.elements[1],g[2]=S.elements[2],g[3]=0,g[4]=S.elements[3],g[5]=S.elements[4],g[6]=S.elements[5],g[7]=0,g[8]=S.elements[6],g[9]=S.elements[7],g[10]=S.elements[8],g[11]=0):ArrayBuffer.isView(S)?g.set(new S.constructor(S.buffer,S.byteOffset,g.length)):S.toArray(g,v)}function y(S,g,v,w){const x=S.value,T=g+"_"+v;if(w[T]===void 0)return typeof x=="number"||typeof x=="boolean"?w[T]=x:ArrayBuffer.isView(x)?w[T]=x.slice():w[T]=x.clone(),!0;{const D=w[T];if(typeof x=="number"||typeof x=="boolean"){if(D!==x)return w[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(D.equals(x)===!1)return D.copy(x),!0}}return!1}function m(S){const g=S.uniforms;let v=0;const w=16;for(let T=0,D=g.length;T<D;T++){const L=Array.isArray(g[T])?g[T]:[g[T]];for(let O=0,B=L.length;O<B;O++){const N=L[O],z=Array.isArray(N.value)?N.value:[N.value];for(let q=0,$=z.length;q<$;q++){const et=z[q],Y=h(et),j=v%w,it=j%Y.boundary,lt=j+it;v+=it,lt!==0&&w-lt<Y.storage&&(v+=w-lt),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=Y.storage}}}const x=v%w;return x>0&&(v+=w-x),S.__size=v,S.__cache={},this}function h(S){const g={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(g.boundary=4,g.storage=4):S.isVector2?(g.boundary=8,g.storage=8):S.isVector3||S.isColor?(g.boundary=16,g.storage=12):S.isVector4?(g.boundary=16,g.storage=16):S.isMatrix3?(g.boundary=48,g.storage=48):S.isMatrix4?(g.boundary=64,g.storage=64):S.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(g.boundary=16,g.storage=S.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",S),g}function b(S){const g=S.target;g.removeEventListener("dispose",b);const v=a.indexOf(g.__bindingPointIndex);a.splice(v,1),n.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function R(){for(const S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:c,update:l,dispose:R}}const Hx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oi=null;function Vx(){return oi===null&&(oi=new Ap(Hx,16,16,vr,_i),oi.name="DFG_LUT",oi.minFilter=an,oi.magFilter=an,oi.wrapS=Di,oi.wrapT=Di,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}class Wx{constructor(t={}){const{canvas:e=Bf(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=bn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const y=p,m=new Set([wc,Tc,Ec]),h=new Set([bn,gi,Os,Bs,yc,bc]),b=new Uint32Array(4),R=new Int32Array(4),S=new A;let g=null,v=null;const w=[],x=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let L=!1,O=null,B=null,N=null,z=null;this._outputColorSpace=dn;let q=0,$=0,et=null,Y=-1,j=null;const it=new Ie,lt=new Ie;let yt=null;const ve=new Yt(0);let te=0,ae=e.width,Z=e.height,nt=1,bt=null,Bt=null;const Mt=new Ie(0,0,ae,Z),Wt=new Ie(0,0,ae,Z);let Ve=!1;const qt=new Ic;let se=!1,Me=!1;const Zt=new Ce,we=new A,Ke=new Ie,fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function Be(){return et===null?nt:1}let F=i;function tn(E,I){return e.getContext(E,I)}let he,C,M,k,V,K,ot,ct,J,tt,ut,Rt,pt,dt,Ct,It,zt,U,ht,Q,ft,xt,st;try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vc}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",oe,!1),e.addEventListener("webglcontextcreationerror",kn,!1),F===null){const I="webgl2";if(F=tn(I,E),F===null)throw tn(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Dt()}catch(E){throw e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",kn,!1),ne("WebGLRenderer: "+E.message),E}function Dt(){he=new Vg(F),he.init(),ft=new Ux(F,he),C=new Ig(F,he,t,ft),M=new Lx(F,he),C.reversedDepthBuffer&&d&&M.buffers.depth.setReversed(!0),B=F.createFramebuffer(),N=F.createFramebuffer(),z=F.createFramebuffer(),k=new $g(F),V=new xx,K=new Ix(F,he,M,V,C,ft,k),ot=new Hg(D),ct=new qp(F),xt=new Dg(F,ct),J=new Wg(F,ct,k,xt),tt=new qg(F,J,ct,xt,k),U=new Yg(F,C,K),Ct=new Ug(V),ut=new _x(D,ot,he,C,xt,Ct),Rt=new zx(D,V),pt=new Mx,dt=new wx(he),zt=new Pg(D,ot,M,tt,_,c),It=new Dx(D,tt,C),st=new Gx(F,k,C,M),ht=new Lg(F,he,k),Q=new Xg(F,he,k),k.programs=ut.programs,D.capabilities=C,D.extensions=he,D.properties=V,D.renderLists=pt,D.shadowMap=It,D.state=M,D.info=k}y!==bn&&(T=new Zg(y,e.width,e.height,o,r,s));const wt=new Bx(D,F);this.xr=wt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=he.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=he.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(E){E!==void 0&&(nt=E,this.setSize(ae,Z,!1))},this.getSize=function(E){return E.set(ae,Z)},this.setSize=function(E,I,W=!0){if(wt.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=E,Z=I,e.width=Math.floor(E*nt),e.height=Math.floor(I*nt),W===!0&&(e.style.width=E+"px",e.style.height=I+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(ae*nt,Z*nt).floor()},this.setDrawingBufferSize=function(E,I,W){ae=E,Z=I,nt=W,e.width=Math.floor(E*W),e.height=Math.floor(I*W),this.setViewport(0,0,E,I)},this.setEffects=function(E){if(y===bn){ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let I=0;I<E.length;I++)if(E[I].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(it)},this.getViewport=function(E){return E.copy(Mt)},this.setViewport=function(E,I,W,G){E.isVector4?Mt.set(E.x,E.y,E.z,E.w):Mt.set(E,I,W,G),M.viewport(it.copy(Mt).multiplyScalar(nt).round())},this.getScissor=function(E){return E.copy(Wt)},this.setScissor=function(E,I,W,G){E.isVector4?Wt.set(E.x,E.y,E.z,E.w):Wt.set(E,I,W,G),M.scissor(lt.copy(Wt).multiplyScalar(nt).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(E){M.setScissorTest(Ve=E)},this.setOpaqueSort=function(E){bt=E},this.setTransparentSort=function(E){Bt=E},this.getClearColor=function(E){return E.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor(...arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha(...arguments)},this.clear=function(E=!0,I=!0,W=!0){let G=0;if(E){let H=!1;if(et!==null){const _t=et.texture.format;H=m.has(_t)}if(H){const _t=et.texture.type,St=h.has(_t),gt=zt.getClearColor(),Et=zt.getClearAlpha(),At=gt.r,Ht=gt.g,Kt=gt.b;St?(b[0]=At,b[1]=Ht,b[2]=Kt,b[3]=Et,F.clearBufferuiv(F.COLOR,0,b)):(R[0]=At,R[1]=Ht,R[2]=Kt,R[3]=Et,F.clearBufferiv(F.COLOR,0,R))}else G|=F.COLOR_BUFFER_BIT}I&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),O=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",kn,!1),zt.dispose(),pt.dispose(),dt.dispose(),V.dispose(),ot.dispose(),tt.dispose(),xt.dispose(),st.dispose(),ut.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",ou),wt.removeEventListener("sessionend",lu),er.stop()};function Se(E){E.preventDefault(),ja("WebGLRenderer: Context Lost."),L=!0}function oe(){ja("WebGLRenderer: Context Restored."),L=!1;const E=k.autoReset,I=It.enabled,W=It.autoUpdate,G=It.needsUpdate,H=It.type;Dt(),k.autoReset=E,It.enabled=I,It.autoUpdate=W,It.needsUpdate=G,It.type=H}function kn(E){ne("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ri(E){const I=E.target;I.removeEventListener("dispose",ri),Jh(I)}function Jh(E){Qh(E),V.remove(E)}function Qh(E){const I=V.get(E).programs;I!==void 0&&(I.forEach(function(W){ut.releaseProgram(W)}),E.isShaderMaterial&&ut.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,W,G,H,_t){I===null&&(I=fn);const St=H.isMesh&&H.matrixWorld.determinantAffine()<0,gt=ef(E,I,W,G,H);M.setMaterial(G,St);let Et=W.index,At=1;if(G.wireframe===!0){if(Et=J.getWireframeAttribute(W),Et===void 0)return;At=2}const Ht=W.drawRange,Kt=W.attributes.position;let Tt=Ht.start*At,le=(Ht.start+Ht.count)*At;_t!==null&&(Tt=Math.max(Tt,_t.start*At),le=Math.min(le,(_t.start+_t.count)*At)),Et!==null?(Tt=Math.max(Tt,0),le=Math.min(le,Et.count)):Kt!=null&&(Tt=Math.max(Tt,0),le=Math.min(le,Kt.count));const ke=le-Tt;if(ke<0||ke===1/0)return;xt.setup(H,G,gt,W,Et);let Ee,_e=ht;if(Et!==null&&(Ee=ct.get(Et),_e=Q,_e.setIndex(Ee)),H.isMesh)G.wireframe===!0?(M.setLineWidth(G.wireframeLinewidth*Be()),_e.setMode(F.LINES)):_e.setMode(F.TRIANGLES);else if(H.isLine){let en=G.linewidth;en===void 0&&(en=1),M.setLineWidth(en*Be()),H.isLineSegments?_e.setMode(F.LINES):H.isLineLoop?_e.setMode(F.LINE_LOOP):_e.setMode(F.LINE_STRIP)}else H.isPoints?_e.setMode(F.POINTS):H.isSprite&&_e.setMode(F.TRIANGLES);if(H.isBatchedMesh)if(he.get("WEBGL_multi_draw"))_e.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const en=H._multiDrawStarts,vt=H._multiDrawCounts,ln=H._multiDrawCount,ee=Et?ct.get(Et).bytesPerElement:1,Rn=V.get(G).currentProgram.getUniforms();for(let si=0;si<ln;si++)Rn.setValue(F,"_gl_DrawID",si),_e.render(en[si]/ee,vt[si])}else if(H.isInstancedMesh)_e.renderInstances(Tt,ke,H.count);else if(W.isInstancedBufferGeometry){const en=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,vt=Math.min(W.instanceCount,en);_e.renderInstances(Tt,ke,vt)}else _e.render(Tt,ke)};function au(E,I,W,G){O!==null&&E.isNodeMaterial&&O.setObject(G,E),se===!0&&Ct.setState(E,W,!1),E.transparent===!0&&E.side===sn&&E.forceSinglePass===!1?(E.side=_n,E.needsUpdate=!0,na(E,I,G),E.side=_r,E.needsUpdate=!0,na(E,I,G),E.side=sn):na(E,I,G)}this.compile=function(E,I,W=null){W===null&&(W=E),O!==null&&O.renderStart(E,I,W),v=dt.get(W),v.init(I),x.push(v),W.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(v.pushLight(H),H.castShadow&&v.pushShadow(H))}),E!==W&&E.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(v.pushLight(H),H.castShadow&&v.pushShadow(H))}),v.setupLights(),O!==null&&O.updateLights(v.state.lightsArray),Me=this.localClippingEnabled,se=Ct.init(this.clippingPlanes,Me),se===!0&&Ct.setGlobalState(this.clippingPlanes,I),O!==null&&It.render(v.state.shadowsArray,W,I);const G=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const _t=H.material;if(_t)if(Array.isArray(_t))for(let St=0;St<_t.length;St++){const gt=_t[St];au(gt,W,I,H),G.add(gt)}else au(_t,W,I,H),G.add(_t)}),v=x.pop(),O!==null&&O.renderEnd(),G},this.compileAsync=function(E,I,W=null){const G=this.compile(E,I,W);return new Promise(H=>{function _t(){if(G.forEach(function(St){const Et=V.get(St).currentProgram;(Et===void 0||Et.isReady())&&G.delete(St)}),G.size===0){H(E);return}setTimeout(_t,10)}he.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Lo=null;function jh(E){Lo&&Lo(E)}function ou(){er.stop()}function lu(){er.start()}const er=new mh;er.setAnimationLoop(jh),typeof self<"u"&&er.setContext(self),this.setAnimationLoop=function(E){Lo=E,wt.setAnimationLoop(E),E===null?er.stop():er.start()},wt.addEventListener("sessionstart",ou),wt.addEventListener("sessionend",lu),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;O!==null&&O.renderStart(E,I);const W=wt.enabled===!0&&wt.isPresenting===!0,G=T!==null&&(et===null||W)&&T.begin(D,et);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(I),I=wt.getCamera()),E.isScene===!0&&E.onBeforeRender(D,E,I,et),v=dt.get(E,x.length),v.init(I),v.state.textureUnits=K.getTextureUnits(),x.push(v),Zt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),qt.setFromProjectionMatrix(Zt,hi,I.reversedDepth),Me=this.localClippingEnabled,se=Ct.init(this.clippingPlanes,Me),g=pt.get(E,w.length),g.init(),w.push(g),wt.enabled===!0&&wt.isPresenting===!0){const St=D.xr.getDepthSensingMesh();St!==null&&Io(St,I,-1/0,D.sortObjects)}Io(E,I,0,D.sortObjects),g.finish(),O!==null&&O.updateLights(v.state.lightsArray),D.sortObjects===!0&&g.sort(bt,Bt),De=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,De&&zt.addToRenderList(g,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&Ct.beginShadows();const H=v.state.shadowsArray;if(It.render(H,E,I),se===!0&&Ct.endShadows(),(G&&T.hasRenderPass())===!1){const St=g.opaque,gt=g.transmissive;if(v.setupLights(),I.isArrayCamera){const Et=I.cameras;if(gt.length>0)for(let At=0,Ht=Et.length;At<Ht;At++){const Kt=Et[At];uu(St,gt,E,Kt)}De&&zt.render(E);for(let At=0,Ht=Et.length;At<Ht;At++){const Kt=Et[At];cu(g,E,Kt,Kt.viewport)}}else gt.length>0&&uu(St,gt,E,I),De&&zt.render(E),cu(g,E,I)}et!==null&&$===0&&(K.updateMultisampleRenderTarget(et),K.updateRenderTargetMipmap(et)),G&&T.end(D),E.isScene===!0&&E.onAfterRender(D,E,I),xt.resetDefaultState(),Y=-1,j=null,x.pop(),x.length>0?(v=x[x.length-1],K.setTextureUnits(v.state.textureUnits),se===!0&&Ct.setGlobalState(D.clippingPlanes,v.state.camera)):v=null,w.pop(),w.length>0?g=w[w.length-1]:g=null,O!==null&&O.renderEnd()};function Io(E,I,W,G){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLightProbeGrid)v.pushLightProbeGrid(E);else if(E.isLight)v.pushLight(E),E.castShadow&&v.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(qt)){G&&Ke.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Zt);const St=tt.update(E),gt=E.material;gt.visible&&g.push(E,St,gt,W,Ke.z,null,I)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(qt))){const St=tt.update(E),gt=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ke.copy(E.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Ke.copy(St.boundingSphere.center)),Ke.applyMatrix4(E.matrixWorld).applyMatrix4(Zt)),Array.isArray(gt)){const Et=St.groups;for(let At=0,Ht=Et.length;At<Ht;At++){const Kt=Et[At],Tt=gt[Kt.materialIndex];Tt&&Tt.visible&&g.push(E,St,Tt,W,Ke.z,Kt,I)}}else gt.visible&&g.push(E,St,gt,W,Ke.z,null,I)}}const _t=E.children;for(let St=0,gt=_t.length;St<gt;St++)Io(_t[St],I,W,G)}function cu(E,I,W,G){const{opaque:H,transmissive:_t,transparent:St}=E;v.setupLightsView(W),se===!0&&Ct.setGlobalState(D.clippingPlanes,W),G&&M.viewport(it.copy(G)),H.length>0&&ea(H,I,W),_t.length>0&&ea(_t,I,W),St.length>0&&ea(St,I,W),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function uu(E,I,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[G.id]===void 0){const Tt=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[G.id]=new Jn(1,1,{generateMipmaps:!0,type:Tt?_i:bn,minFilter:ur,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:jt.workingColorSpace})}const _t=v.state.transmissionRenderTarget[G.id],St=G.viewport||it;_t.setSize(St.z*D.transmissionResolutionScale,St.w*D.transmissionResolutionScale);const gt=D.getRenderTarget(),Et=D.getActiveCubeFace(),At=D.getActiveMipmapLevel();D.setRenderTarget(_t),D.getClearColor(ve),te=D.getClearAlpha(),te<1&&D.setClearColor(16777215,.5),D.clear(),De&&zt.render(W);const Ht=D.toneMapping;D.toneMapping=fi;const Kt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),v.setupLightsView(G),se===!0&&Ct.setGlobalState(D.clippingPlanes,G),ea(E,W,G),K.updateMultisampleRenderTarget(_t),K.updateRenderTargetMipmap(_t),he.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let le=0,ke=I.length;le<ke;le++){const Ee=I[le],{object:_e,geometry:en,material:vt,group:ln}=Ee;if(vt.side===sn&&_e.layers.test(G.layers)){const ee=vt.side;vt.side=_n,vt.needsUpdate=!0,du(_e,W,G,en,vt,ln),vt.side=ee,vt.needsUpdate=!0,Tt=!0}}Tt===!0&&(K.updateMultisampleRenderTarget(_t),K.updateRenderTargetMipmap(_t))}D.setRenderTarget(gt,Et,At),D.setClearColor(ve,te),Kt!==void 0&&(G.viewport=Kt),D.toneMapping=Ht}function ea(E,I,W){const G=I.isScene===!0?I.overrideMaterial:null;for(let H=0,_t=E.length;H<_t;H++){const St=E[H],{object:gt,geometry:Et,group:At}=St;let Ht=St.material;Ht.allowOverride===!0&&G!==null&&(Ht=G),gt.layers.test(W.layers)&&du(gt,I,W,Et,Ht,At)}}function du(E,I,W,G,H,_t){O!==null&&H.isNodeMaterial&&O.setObject(E,H),E.onBeforeRender(D,I,W,G,H,_t),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(D,I,W,G,E,_t),H.transparent===!0&&H.side===sn&&H.forceSinglePass===!1?(H.side=_n,H.needsUpdate=!0,D.renderBufferDirect(W,I,G,H,E,_t),H.side=_r,H.needsUpdate=!0,D.renderBufferDirect(W,I,G,H,E,_t),H.side=sn):D.renderBufferDirect(W,I,G,H,E,_t),E.onAfterRender(D,I,W,G,H,_t)}function na(E,I,W){I.isScene!==!0&&(I=fn);const G=V.get(E),H=v.state.lights,_t=v.state.shadowsArray,St=H.state.version,gt=ut.getParameters(E,H.state,_t,I,W,v.state.lightProbeGridArray),Et=ut.getProgramCacheKey(gt);let At=G.programs;G.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?I.environment:null,G.fog=I.fog;const Ht=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;G.envMap=ot.get(E.envMap||G.environment,Ht),G.envMapRotation=G.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,At===void 0&&(E.addEventListener("dispose",ri),At=new Map,G.programs=At);let Kt=At.get(Et);if(Kt!==void 0){if(G.currentProgram===Kt&&G.lightsStateVersion===St)return fu(E,gt),Kt}else gt.uniforms=ut.getUniforms(E),O!==null&&E.isNodeMaterial&&O.build(E,W,gt),E.onBeforeCompile(gt,D),Kt=ut.acquireProgram(gt,Et),At.set(Et,Kt),G.uniforms=gt.uniforms;const Tt=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Tt.clippingPlanes=Ct.uniform),fu(E,gt),G.needsLights=rf(E),G.lightsStateVersion=St,G.needsLights&&(Tt.ambientLightColor.value=H.state.ambient,Tt.lightProbe.value=H.state.probe,Tt.sunLights.value=H.state.sun,Tt.sunLightShadows.value=H.state.sunShadow,Tt.directionalLights.value=H.state.directional,Tt.directionalLightShadows.value=H.state.directionalShadow,Tt.spotLights.value=H.state.spot,Tt.spotLightShadows.value=H.state.spotShadow,Tt.rectAreaLights.value=H.state.rectArea,Tt.ltc_1.value=H.state.rectAreaLTC1,Tt.ltc_2.value=H.state.rectAreaLTC2,Tt.pointLights.value=H.state.point,Tt.pointLightShadows.value=H.state.pointShadow,Tt.hemisphereLights.value=H.state.hemi,Tt.sunShadowMatrix.value=H.state.sunShadowMatrix,Tt.sunShadowCascade.value=H.state.sunShadowCascade,Tt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Tt.spotLightMatrix.value=H.state.spotLightMatrix,Tt.spotLightMap.value=H.state.spotLightMap,Tt.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=v.state.lightProbeGridArray.length>0,G.currentProgram=Kt,G.uniformsList=null,Kt}function hu(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=Ga.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function fu(E,I){const W=V.get(E);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.batchingColor=I.batchingColor,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.instancingMorph=I.instancingMorph,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function tf(E,I){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;S.setFromMatrixPosition(I.matrixWorld);for(let W=0,G=E.length;W<G;W++){const H=E[W];if(H.texture!==null&&H.boundingBox.containsPoint(S))return H}return null}function ef(E,I,W,G,H){I.isScene!==!0&&(I=fn),K.resetTextureUnits();const _t=I.fog,St=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?I.environment:null,gt=et===null?D.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:jt.workingColorSpace,Et=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,At=ot.get(G.envMap||St,Et),Ht=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Kt=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Tt=!!W.morphAttributes.position,le=!!W.morphAttributes.normal,ke=!!W.morphAttributes.color;let Ee=fi;G.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ee=D.toneMapping);const _e=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,en=_e!==void 0?_e.length:0,vt=V.get(G),ln=v.state.lights;if(se===!0&&(Me===!0||E!==j)){const ye=E===j&&G.id===Y;Ct.setState(G,E,ye)}let ee=!1;G.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==ln.state.version||vt.outputColorSpace!==gt||H.isBatchedMesh&&vt.batching===!1||!H.isBatchedMesh&&vt.batching===!0||H.isBatchedMesh&&vt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&vt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&vt.instancing===!1||!H.isInstancedMesh&&vt.instancing===!0||H.isSkinnedMesh&&vt.skinning===!1||!H.isSkinnedMesh&&vt.skinning===!0||H.isInstancedMesh&&vt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&vt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&vt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&vt.instancingMorph===!1&&H.morphTexture!==null||vt.envMap!==At||G.fog===!0&&vt.fog!==_t||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==Ct.numPlanes||vt.numIntersection!==Ct.numIntersection)||vt.vertexAlphas!==Ht||vt.vertexTangents!==Kt||vt.morphTargets!==Tt||vt.morphNormals!==le||vt.morphColors!==ke||vt.toneMapping!==Ee||vt.morphTargetsCount!==en||!!vt.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(ee=!0):(ee=!0,vt.__version=G.version);let Rn=vt.currentProgram;ee===!0&&(Rn=na(G,I,H),O&&G.isNodeMaterial&&O.onUpdateProgram(G,Rn,vt));let si=!1,ki=!1,wr=!1;const ge=Rn.getUniforms(),Ne=vt.uniforms;if(M.useProgram(Rn.program)&&(si=!0,ki=!0,wr=!0),G.id!==Y&&(Y=G.id,ki=!0),vt.needsLights){const ye=tf(v.state.lightProbeGridArray,H);vt.lightProbeGrid!==ye&&(vt.lightProbeGrid=ye,ki=!0)}if(si||j!==E){M.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ge.setValue(F,"projectionMatrix",E.projectionMatrix),ge.setValue(F,"viewMatrix",E.matrixWorldInverse);const Gi=ge.map.cameraPosition;Gi!==void 0&&Gi.setValue(F,we.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&ge.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ge.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),j!==E&&(j=E,ki=!0,wr=!0)}if(vt.needsLights&&(ln.state.sunShadowMap.length>0&&ge.setValue(F,"sunShadowMap",ln.state.sunShadowMap,K),ln.state.directionalShadowMap.length>0&&ge.setValue(F,"directionalShadowMap",ln.state.directionalShadowMap,K),ln.state.spotShadowMap.length>0&&ge.setValue(F,"spotShadowMap",ln.state.spotShadowMap,K),ln.state.pointShadowMap.length>0&&ge.setValue(F,"pointShadowMap",ln.state.pointShadowMap,K)),H.isSkinnedMesh){ge.setOptional(F,H,"bindMatrix"),ge.setOptional(F,H,"bindMatrixInverse");const ye=H.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),ge.setValue(F,"boneTexture",ye.boneTexture,K))}H.isBatchedMesh&&(ge.setOptional(F,H,"batchingTexture"),ge.setValue(F,"batchingTexture",H._matricesTexture,K),ge.setOptional(F,H,"batchingIdTexture"),ge.setValue(F,"batchingIdTexture",H._indirectTexture,K),ge.setOptional(F,H,"batchingColorTexture"),H._colorsTexture!==null&&ge.setValue(F,"batchingColorTexture",H._colorsTexture,K));const zi=W.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&U.update(H,W,Rn),(ki||vt.receiveShadow!==H.receiveShadow)&&(vt.receiveShadow=H.receiveShadow,ge.setValue(F,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&I.environment!==null&&(Ne.envMapIntensity.value=I.environmentIntensity),Ne.dfgLUT!==void 0&&(Ne.dfgLUT.value=Vx()),ki){if(ge.setValue(F,"toneMappingExposure",D.toneMappingExposure),vt.needsLights&&nf(Ne,wr),_t&&G.fog===!0&&Rt.refreshFogUniforms(Ne,_t),Rt.refreshMaterialUniforms(Ne,G,nt,Z,v.state.transmissionRenderTarget[E.id]),vt.needsLights&&vt.lightProbeGrid){const ye=vt.lightProbeGrid;Ne.probesSH.value=ye.texture,Ne.probesMin.value.copy(ye.boundingBox.min),Ne.probesMax.value.copy(ye.boundingBox.max),Ne.probesResolution.value.copy(ye.resolution)}Ga.upload(F,hu(vt),Ne,K)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ga.upload(F,hu(vt),Ne,K),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ge.setValue(F,"center",H.center),ge.setValue(F,"modelViewMatrix",H.modelViewMatrix),ge.setValue(F,"normalMatrix",H.normalMatrix),ge.setValue(F,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){const ye=G.uniformsGroups;for(let Gi=0,Ar=ye.length;Gi<Ar;Gi++){const mu=ye[Gi];st.update(mu,Rn),st.bind(mu,Rn)}}return Rn}function nf(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.sunLights.needsUpdate=I,E.sunLightShadows.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function rf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(E,I,W){const G=V.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),V.get(E.texture).__webglTexture=I,V.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,I){const W=V.get(E);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,W=0){et=E,q=I,$=W;let G=null,H=!1,_t=!1;if(E){const gt=V.get(E);if(gt.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(F.FRAMEBUFFER,gt.__webglFramebuffer),it.copy(E.viewport),lt.copy(E.scissor),yt=E.scissorTest,M.viewport(it),M.scissor(lt),M.setScissorTest(yt),Y=-1;return}else if(gt.__webglFramebuffer===void 0)K.setupRenderTarget(E);else if(gt.__hasExternalTextures)K.rebindTextures(E,V.get(E.texture).__webglTexture,V.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ht=E.depthTexture;if(gt.__boundDepthTexture!==Ht){if(Ht!==null&&V.has(Ht)&&(E.width!==Ht.image.width||E.height!==Ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(E)}}const Et=E.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(_t=!0);const At=V.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(At[I])?G=At[I][W]:G=At[I],H=!0):E.samples>0&&K.useMultisampledRTT(E)===!1?G=V.get(E).__webglMultisampledFramebuffer:Array.isArray(At)?G=At[W]:G=At,it.copy(E.viewport),lt.copy(E.scissor),yt=E.scissorTest}else it.copy(Mt).multiplyScalar(nt).floor(),lt.copy(Wt).multiplyScalar(nt).floor(),yt=Ve;if(W!==0&&(G=B),M.bindFramebuffer(F.FRAMEBUFFER,G)&&M.drawBuffers(E,G),M.viewport(it),M.scissor(lt),M.setScissorTest(yt),H){const gt=V.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+I,gt.__webglTexture,W)}else if(_t){const gt=I;for(let Et=0;Et<E.textures.length;Et++){const At=V.get(E.textures[Et]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Et,At.__webglTexture,W,gt)}}else if(E!==null&&W!==0){const gt=V.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,gt.__webglTexture,W)}Y=-1};function pu(E){const I=V.get(E);return(I.__readFormat!==E.format||I.__readType!==E.type)&&(I.__readFormat=E.format,I.__readType=E.type,I.__formatReadable=C.textureFormatReadable(E.format),I.__typeReadable=C.textureTypeReadable(E.type)),I}this.readRenderTargetPixels=function(E,I,W,G,H,_t,St,gt=0){if(!(E&&E.isWebGLRenderTarget)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=V.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et){M.bindFramebuffer(F.FRAMEBUFFER,Et);try{const At=E.textures[gt],Ht=At.format,Kt=At.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+gt);const Tt=pu(At);if(Tt.__formatReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt.__typeReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-G&&W>=0&&W<=E.height-H&&F.readPixels(I,W,G,H,ft.convert(Ht),ft.convert(Kt),_t)}finally{const At=et!==null?V.get(et).__webglFramebuffer:null;M.bindFramebuffer(F.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(E,I,W,G,H,_t,St,gt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=V.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et)if(I>=0&&I<=E.width-G&&W>=0&&W<=E.height-H){M.bindFramebuffer(F.FRAMEBUFFER,Et);const At=E.textures[gt],Ht=At.format,Kt=At.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+gt);const Tt=pu(At);if(Tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,le),F.bufferData(F.PIXEL_PACK_BUFFER,_t.byteLength,F.STREAM_READ),F.readPixels(I,W,G,H,ft.convert(Ht),ft.convert(Kt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const ke=et!==null?V.get(et).__webglFramebuffer:null;M.bindFramebuffer(F.FRAMEBUFFER,ke);const Ee=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await kf(F,Ee,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,le),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,_t),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(le),F.deleteSync(Ee),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,I=null,W=0){const G=Math.pow(2,-W),H=Math.floor(E.image.width*G),_t=Math.floor(E.image.height*G),St=I!==null?I.x:0,gt=I!==null?I.y:0;K.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,St,gt,H,_t),M.unbindTexture()},this.copyTextureToTexture=function(E,I,W=null,G=null,H=0,_t=0){let St,gt,Et,At,Ht,Kt,Tt,le,ke;const Ee=E.isCompressedTexture?E.mipmaps[_t]:E.image;if(W!==null)St=W.max.x-W.min.x,gt=W.max.y-W.min.y,Et=W.isBox3?W.max.z-W.min.z:1,At=W.min.x,Ht=W.min.y,Kt=W.isBox3?W.min.z:0;else{const Ne=Math.pow(2,-H);St=Math.floor(Ee.width*Ne),gt=Math.floor(Ee.height*Ne),E.isDataArrayTexture?Et=Ee.depth:E.isData3DTexture?Et=Math.floor(Ee.depth*Ne):Et=1,At=0,Ht=0,Kt=0}G!==null?(Tt=G.x,le=G.y,ke=G.z):(Tt=0,le=0,ke=0);const _e=ft.convert(I.format),en=ft.convert(I.type);let vt;I.isData3DTexture?(K.setTexture3D(I,0),vt=F.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(K.setTexture2DArray(I,0),vt=F.TEXTURE_2D_ARRAY):(K.setTexture2D(I,0),vt=F.TEXTURE_2D),M.activeTexture(F.TEXTURE0),M.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,I.flipY),M.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),M.pixelStorei(F.UNPACK_ALIGNMENT,I.unpackAlignment);const ln=M.getParameter(F.UNPACK_ROW_LENGTH),ee=M.getParameter(F.UNPACK_IMAGE_HEIGHT),Rn=M.getParameter(F.UNPACK_SKIP_PIXELS),si=M.getParameter(F.UNPACK_SKIP_ROWS),ki=M.getParameter(F.UNPACK_SKIP_IMAGES);M.pixelStorei(F.UNPACK_ROW_LENGTH,Ee.width),M.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ee.height),M.pixelStorei(F.UNPACK_SKIP_PIXELS,At),M.pixelStorei(F.UNPACK_SKIP_ROWS,Ht),M.pixelStorei(F.UNPACK_SKIP_IMAGES,Kt);const wr=E.isDataArrayTexture||E.isData3DTexture,ge=I.isDataArrayTexture||I.isData3DTexture;if(E.isDepthTexture){const Ne=V.get(E),zi=V.get(I),ye=V.get(Ne.__renderTarget),Gi=V.get(zi.__renderTarget);M.bindFramebuffer(F.READ_FRAMEBUFFER,ye.__webglFramebuffer),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let Ar=0;Ar<Et;Ar++)wr&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,V.get(E).__webglTexture,H,Kt+Ar),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,V.get(I).__webglTexture,_t,ke+Ar)),F.blitFramebuffer(At,Ht,St,gt,Tt,le,St,gt,F.DEPTH_BUFFER_BIT,F.NEAREST);M.bindFramebuffer(F.READ_FRAMEBUFFER,null),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||V.has(E)){const Ne=V.get(E),zi=V.get(I);M.bindFramebuffer(F.READ_FRAMEBUFFER,N),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,z);for(let ye=0;ye<Et;ye++)wr?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ne.__webglTexture,H,Kt+ye):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ne.__webglTexture,H),ge?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,zi.__webglTexture,_t,ke+ye):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,zi.__webglTexture,_t),H!==0?F.blitFramebuffer(At,Ht,St,gt,Tt,le,St,gt,F.COLOR_BUFFER_BIT,F.NEAREST):ge?F.copyTexSubImage3D(vt,_t,Tt,le,ke+ye,At,Ht,St,gt):F.copyTexSubImage2D(vt,_t,Tt,le,At,Ht,St,gt);M.bindFramebuffer(F.READ_FRAMEBUFFER,null),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ge?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(vt,_t,Tt,le,ke,St,gt,Et,_e,en,Ee.data):I.isCompressedArrayTexture?F.compressedTexSubImage3D(vt,_t,Tt,le,ke,St,gt,Et,_e,Ee.data):F.texSubImage3D(vt,_t,Tt,le,ke,St,gt,Et,_e,en,Ee):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,_t,Tt,le,St,gt,_e,en,Ee.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,_t,Tt,le,Ee.width,Ee.height,_e,Ee.data):F.texSubImage2D(F.TEXTURE_2D,_t,Tt,le,St,gt,_e,en,Ee);M.pixelStorei(F.UNPACK_ROW_LENGTH,ln),M.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ee),M.pixelStorei(F.UNPACK_SKIP_PIXELS,Rn),M.pixelStorei(F.UNPACK_SKIP_ROWS,si),M.pixelStorei(F.UNPACK_SKIP_IMAGES,ki),_t===0&&I.generateMipmaps&&F.generateMipmap(vt),M.unbindTexture()},this.initRenderTarget=function(E){V.get(E).__webglFramebuffer===void 0&&K.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?K.setTextureCube(E,0):E.isData3DTexture?K.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?K.setTexture2DArray(E,0):K.setTexture2D(E,0),M.unbindTexture()},this.resetState=function(){q=0,$=0,et=null,M.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}const vd={type:"change"},Bc={type:"start"},bh={type:"end"},Ia=new Lc,Md=new Ri,Xx=Math.cos(70*ue.DEG2RAD),We=new A,pn=2*Math.PI,me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},pl=1e-6;class $x extends $p{constructor(t,e=null){super(t,e),this.state=me.NONE,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:jr.ROTATE,MIDDLE:jr.DOLLY,RIGHT:jr.PAN},this.touches={ONE:Kr.ROTATE,TWO:Kr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new xi,this._lastTargetPosition=new A,this._quat=new xi().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qu,this._sphericalDelta=new qu,this._scale=1,this._panOffset=new A,this._rotateStart=new Pt,this._rotateEnd=new Pt,this._rotateDelta=new Pt,this._panStart=new Pt,this._panEnd=new Pt,this._panDelta=new Pt,this._dollyStart=new Pt,this._dollyEnd=new Pt,this._dollyDelta=new Pt,this._dollyDirection=new A,this._mouse=new Pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qx.bind(this),this._onPointerDown=Yx.bind(this),this._onPointerUp=Kx.bind(this),this._onContextMenu=nv.bind(this),this._onMouseWheel=Qx.bind(this),this._onKeyDown=jx.bind(this),this._onTouchStart=tv.bind(this),this._onTouchMove=ev.bind(this),this._onMouseDown=Zx.bind(this),this._onMouseMove=Jx.bind(this),this._interceptControlDown=iv.bind(this),this._interceptControlUp=rv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=me.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(vd),this.update(),this.state=me.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;We.copy(e).sub(this.target),We.applyQuaternion(this._quat),this._spherical.setFromVector3(We),this.autoRotate&&this.state===me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=pn:i>Math.PI&&(i-=pn),r<-Math.PI?r+=pn:r>Math.PI&&(r-=pn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(We.setFromSpherical(this._spherical),We.applyQuaternion(this._quatInverse),e.copy(this.target).add(We),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=We.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new A(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new A(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=We.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ia.origin.copy(this.object.position),Ia.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ia.direction))<Xx?this.object.lookAt(this.target):(Md.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ia.intersectPlane(Md,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>pl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>pl||this._lastTargetPosition.distanceToSquared(this.target)>pl?(this.dispatchEvent(vd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?pn/60*this.autoRotateSpeed*t:pn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){We.setFromMatrixColumn(e,0),We.multiplyScalar(-t),this._panOffset.add(We)}_panUp(t,e){this.screenSpacePanning===!0?We.setFromMatrixColumn(e,1):(We.setFromMatrixColumn(e,0),We.crossVectors(this.object.up,We)),We.multiplyScalar(t),this._panOffset.add(We)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;We.copy(r).sub(this.target);let s=We.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Yx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function qx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Kx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bh),this.state=me.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Zx(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case jr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=me.DOLLY;break;case jr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=me.ROTATE}break;case jr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=me.PAN}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(Bc)}function Jx(n){switch(this.state){case me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Qx(n){this.enabled===!1||this.enableZoom===!1||this.state!==me.NONE||(n.preventDefault(),this.dispatchEvent(Bc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(bh))}function jx(n){this.enabled!==!1&&this._handleKeyDown(n)}function tv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Kr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=me.TOUCH_ROTATE;break;case Kr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=me.TOUCH_PAN;break;default:this.state=me.NONE}break;case 2:switch(this.touches.TWO){case Kr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=me.TOUCH_DOLLY_PAN;break;case Kr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=me.TOUCH_DOLLY_ROTATE;break;default:this.state=me.NONE}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(Bc)}function ev(n){switch(this._trackPointer(n),this.state){case me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=me.NONE}}function nv(n){this.enabled!==!1&&n.preventDefault()}function iv(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function rv(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Es=new A;function Pn(n,t,e,i,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),c=Math.PI/4;Es.copy(t),Es[i]=0,Es.normalize();const l=.5*a/(a+o),u=1-Es.angleTo(n)/c;return Math.sign(Es[e])===1?u*l:o/(a+o)+l+l*(1-u)}class kc extends Qi{constructor(t=1,e=1,i=1,r=2,s=.1){const a=r*2+1;if(s=Math.min(t/2,e/2,i/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:r,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new A,l=new A,u=new A(t,e,i).divideScalar(2).subScalar(s),f=this.attributes.position.array,d=this.attributes.normal.array,p=this.attributes.uv.array,_=f.length/6,y=new A,m=.5/a;for(let h=0,b=0;h<f.length;h+=3,b+=2)switch(c.fromArray(f,h),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),f[h+0]=u.x*Math.sign(c.x)+l.x*s,f[h+1]=u.y*Math.sign(c.y)+l.y*s,f[h+2]=u.z*Math.sign(c.z)+l.z*s,d[h+0]=l.x,d[h+1]=l.y,d[h+2]=l.z,Math.floor(h/_)){case 0:y.set(1,0,0),p[b+0]=Pn(y,l,"z","y",s,i),p[b+1]=1-Pn(y,l,"y","z",s,e);break;case 1:y.set(-1,0,0),p[b+0]=1-Pn(y,l,"z","y",s,i),p[b+1]=1-Pn(y,l,"y","z",s,e);break;case 2:y.set(0,1,0),p[b+0]=1-Pn(y,l,"x","z",s,t),p[b+1]=Pn(y,l,"z","x",s,i);break;case 3:y.set(0,-1,0),p[b+0]=1-Pn(y,l,"x","z",s,t),p[b+1]=1-Pn(y,l,"z","x",s,i);break;case 4:y.set(0,0,1),p[b+0]=1-Pn(y,l,"x","y",s,t),p[b+1]=1-Pn(y,l,"y","x",s,e);break;case 5:y.set(0,0,-1),p[b+0]=Pn(y,l,"x","y",s,t),p[b+1]=1-Pn(y,l,"y","x",s,e);break}}static fromJSON(t){return new kc(t.width,t.height,t.depth,t.segments,t.radius)}}function sv(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,c=new Oe;let l=0;for(let u=0;u<n.length;++u){const f=n[u];let d=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(f.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(f.morphAttributes[p])}if(t){let p;if(e)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,u),l+=p}}if(e){let u=0;const f=[];for(let d=0;d<n.length;++d){const p=n[d].index;for(let _=0;_<p.count;++_)f.push(p.getX(_)+u);u+=n[d].attributes.position.count}c.setIndex(f)}for(const u in s){const f=Sd(s[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(const u in a){const f=a[u][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<f;++d){const p=[];for(let y=0;y<a[u].length;++y)p.push(a[u][y][d]);const _=Sd(p);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(_)}}}return c}function Sd(n){let t,e,i,r=-1,s=0;for(let l=0;l<n.length;++l){const u=n[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}const a=new t(s),o=new Qn(a,e,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const f=c/e;for(let d=0,p=u.count;d<p;d++)for(let _=0;_<e;_++){const y=u.getComponent(d,_);o.setComponent(d+f,_,y)}}else a.set(u.array,c);c+=u.count*e}return r!==void 0&&(o.gpuType=r),o}const ml=new Map;function He(n){return ml.has(n)||ml.set(n,new qi({color:n,roughness:.85})),ml.get(n)}function P(n,t,e,i,r,s,a,o,c=!1){const l=new Ot(c?new kc(r,s,a,2,Math.min(.09,r/4,s/4,a/4)):new Qi(r,s,a),He(o));return l.position.set(t,e,i),l.castShadow=!0,l.receiveShadow=!0,n.add(l),l}function li(n,t,e,i,r,s,a=[1,1,1]){const o=new Ot(new Mo(r,12,10),He(s));return o.position.set(t,e,i),o.scale.set(...a),o.castShadow=!0,n.add(o),o}function yd(n){n.material=n.material.clone();const t=n.material;return t.transparent=!0,t.opacity=1,n.userData.dynamic=!0,n}function Ln(n,t,e,i,r,s=3,a="#f2c65a"){const o=document.createElement("canvas");o.width=s>=8?2048:1024,o.height=s>=8?512:256;const c=o.getContext("2d");if(c.scale(o.width/2048,o.height/512),c.fillStyle=a,c.fillRect(0,0,2048,512),c.fillStyle="#263f40",c.fillRect(0,0,2048,42),c.fillRect(0,470,2048,42),c.fillStyle="#233d42",c.textBaseline="middle",/MOVECRAFT/.test(t))c.beginPath(),c.roundRect(70,86,340,340,76),c.fill(),c.fillStyle=a,c.font="1000 230px Nunito, sans-serif",c.textAlign="center",c.fillText("M",240,270),c.fillStyle="#233d42",c.textAlign="left",c.font="1000 205px Nunito, sans-serif",c.fillText("MOVECRAFT",470,270);else{const d=Math.min(190,1660/Math.max(5,t.length)*2.15);c.font=`1000 ${d}px Nunito, sans-serif`,c.textAlign="center",c.fillText(t,1024,248)}const l=new Uc(o);l.colorSpace=dn,l.anisotropy=8;const u=new ce;u.position.set(e,i,r),n.add(u),P(u,0,0,-.035,s,s/4,.1,2506560,!0);const f=new Ot(new Bn(s*.94,s*.235),new On({map:l,side:sn}));f.position.z=.022,u.add(f);for(const d of[-s*.43,s*.43])li(u,d,s*.085,.04,.035,16313807);return u}function av(n,t,e=7391353,i=!1,r=0){const s=new ce,a=i?2.5:3.45,o=i?1.5:2.05,c=document.createElement("canvas");c.width=768,c.height=500;const l=c.getContext("2d"),u=new Uc(c),f=/LOCKED|MAX/.test(t);u.colorSpace=dn;const d=new Ot(new Bn(a,o),new On({map:u,transparent:!0,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.position.y=.018,d.renderOrder=3,d.userData.owned=!0,s.add(d);const p=()=>{if(l.save(),l.translate(142,235),l.fillStyle=f?"#87918b":"#244456",l.strokeStyle=l.fillStyle,l.lineWidth=18,l.lineCap="round",l.lineJoin="round",/collect/i.test(n))l.beginPath(),l.arc(0,0,82,0,Math.PI*2),l.stroke(),l.font="1000 112px Nunito, sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillText("$",0,5);else if(/cargo|rack|lining/i.test(n))l.strokeRect(-72,-52,144,112),l.beginPath(),l.moveTo(-52,-20),l.lineTo(52,-20),l.moveTo(-52,20),l.lineTo(52,20),l.stroke();else if(/truck|fleet/i.test(n)){l.fillRect(-70,-30,90,62),l.fillRect(20,-14,55,46);for(const m of[-42,47])l.beginPath(),l.arc(m,44,18,0,Math.PI*2),l.fill()}else/crew|strength|worker|hire/i.test(n)?(l.beginPath(),l.arc(0,-45,30,0,Math.PI*2),l.fill(),l.beginPath(),l.roundRect(-48,-5,96,82,28),l.fill()):/chair|assembly|paint|pack|wood|timber|mill/i.test(n)?(l.strokeRect(-42,-22,72,58),l.beginPath(),l.moveTo(-42,35),l.lineTo(-42,78),l.moveTo(30,35),l.lineTo(30,78),l.moveTo(-42,-22),l.lineTo(-42,-78),l.stroke()):/yard|factory|production|grounds/i.test(n)?(l.fillRect(-65,-42,130,112),l.fillStyle="#fff8e5",l.fillRect(-22,5,44,65),l.fillStyle=f?"#87918b":"#244456",l.beginPath(),l.moveTo(-82,-42),l.lineTo(0,-95),l.lineTo(82,-42),l.fill()):(l.strokeRect(-55,-68,110,136),l.beginPath(),l.moveTo(-28,-28),l.lineTo(30,-28),l.moveTo(-28,5),l.lineTo(30,5),l.moveTo(-28,38),l.lineTo(12,38),l.stroke());l.restore()};let _=-1;const y=m=>{const h=ue.clamp(m,0,1);if(Math.abs(_-h)<.004)return;_=h,s.userData.progress=h,l.clearRect(0,0,c.width,c.height),l.fillStyle=f?"#d4d6c9":"#fff4d3",l.beginPath(),l.roundRect(18,18,732,464,54),l.fill(),h>0&&(l.save(),l.beginPath(),l.roundRect(18,18,732,464,54),l.clip(),l.fillStyle="#75c995",l.fillRect(18,18,732*h,464),l.restore()),l.lineWidth=22,l.strokeStyle="#244456",l.beginPath(),l.roundRect(18,18,732,464,54),l.stroke(),l.fillStyle="#244456",l.beginPath(),l.roundRect(42,76,204,322,44),l.fillStyle="#ffffff80",l.fill(),p(),l.fillStyle="#244456",l.textAlign="left",l.textBaseline="middle";const b=(t.startsWith("$"),t),R=n.toUpperCase();l.font=`1000 ${R.length>19?43:R.length>13?50:58}px Nunito, sans-serif`,l.fillText(R,286,155,425),l.font=`1000 ${b.length>9?88:116}px Nunito, sans-serif`,l.fillText(b,286,292,425),h>0&&(l.fillStyle="#244456",l.font="900 34px Nunito, sans-serif",l.fillText(`${Math.round(h*100)}% FUNDED`,286,414,425)),u.needsUpdate=!0};return s.userData.setProgress=y,s.userData.padHalfWidth=a/2,s.userData.padHalfDepth=o/2,s.userData.graphicLabel=n,s.userData.hasPurposeIcon=!0,y(r),s}function ov(n,t,e,i,r,s=2){const a=document.createElement("canvas");a.width=512,a.height=150;const o=a.getContext("2d");o.fillStyle="#e9c65f",o.fillRect(0,0,512,150),o.fillStyle="#263f40",o.font="900 66px Barlow, sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText(t,256,78);const c=new Uc(a);c.colorSpace=dn;const l=new Ot(new Bn(s,s*150/512),new On({map:c}));l.position.set(e,i,r),n.add(l)}function zc(n=14983231,t=0,e="standard",i=0){const r=new ce,s=new ce;r.add(s);const a=[15119758,10382672,13209191][t%3],o={standard:{shirt:n,trousers:3296353,cap:3234931,bib:15721405},build:{shirt:15899186,trousers:3754576,cap:16760120,bib:16747821},logistics:{shirt:4619086,trousers:3492681,cap:3368509,bib:15130549},workshop:{shirt:12144195,trousers:3160905,cap:3030864,bib:3754581},elite:{shirt:7492769,trousers:2698560,cap:15394287,bib:14277095}}[e]??{shirt:n,trousers:3296353,cap:3234931,bib:15721405};n=o.shirt,P(s,0,1,0,.64,.66,.39,n,!0),P(s,0,.73,.02,.59,.25,.4,o.trousers,!0),P(s,0,1.08,.215,.08,.43,.025,16377270),P(s,-.18,1.13,.22,.13,.15,.025,16377270),li(s,0,1.65,.02,.36,a,[1,1.08,.93]),li(s,-.35,1.65,.02,.08,a),li(s,.35,1.65,.02,.08,a),li(s,0,1.61,.35,.08,a);for(const d of[-.13,.13])li(s,d,1.71,.324,.046,2435890),P(s,d,1.81,.32,.11,.035,.03,5323570,!0);P(s,0,1.485,.348,.085,.018,.018,11890529,!0),li(s,0,1.91,-.035,.35,t%2?5719095:o.cap,[1.04,.43,1.03]),t%2===0&&P(s,0,1.91,.31,.49,.07,.29,o.cap,!0),P(s,0,1.18,.225,.43,.34,.025,o.bib,!0);for(const d of[-.27,.27])P(s,d,1.18,.233,.07,.55,.025,o.bib,!0);if(e==="build"){P(s,0,2.13,-.04,.7,.12,.66,16760120,!0);for(const d of[-.24,.24])P(s,d,1.15,.255,.07,.4,.028,16771240)}else if(e==="logistics")P(s,0,1.15,-.25,.54,.68,.2,3235387,!0),P(s,0,1.92,.335,.22,.17,.03,15525832);else if(e==="workshop")P(s,0,1.94,.335,.17,.035,.025,15196618),P(s,.3,.82,.12,.13,.3,.13,9017244,!0);else if(e==="elite"){P(s,0,1.18,.252,.21,.16,.035,9266644);for(const d of[-.36,.36])li(s,d,1.76,0,.13,5653875)}if(i>=2)for(const d of[-.3,.3])P(s,d,1.08,0,.12,.16,.36,2702147,!0);const c=[],l=[],u=[],f=[];for(const d of[-1,1]){const p=new ce;p.position.set(d*.18,.7,0),s.add(p),P(p,0,-.14,0,.24,.3,.28,o.trousers,!0);const _=new ce;_.position.y=-.29,p.add(_),P(_,0,-.13,0,.23,.29,.27,o.trousers,!0),P(_,0,-.3,.07,.28,.18,.4,5132616,!0),u.push(_),c.push(p);const y=new ce;y.position.set(d*.39,1.24,0),s.add(y),P(y,0,-.13,0,.22,.36,.27,n,!0);const m=new ce;m.position.y=-.28,y.add(m),P(m,0,-.1,0,.18,.24,.2,a,!0),i>=1&&P(m,0,-.16,.06,.2,.17,.22,3160638,!0),li(m,0,-.24,.015,.115,a),f.push(m),l.push(y)}return r.userData.rig={body:s,legs:c,arms:l},{root:r,animate(d,p,_=!1,y=!1){const m=y?13.5:8.4,h=y?.72:.42;s.position.y=p?Math.abs(Math.sin(d*m))*(y?.065:.035):Math.sin(d*1.8)*.008,s.rotation.z=p?Math.sin(d*m/2)*(y?.035:.018):0,s.rotation.x=y?.13:0,c.forEach((b,R)=>b.rotation.x=p?Math.sin(d*m+R*Math.PI)*h:0),u.forEach((b,R)=>b.rotation.x=p?Math.max(0,-Math.sin(d*m+R*Math.PI))*(y?.9:.4):0),f.forEach(b=>b.rotation.x=_?-.35:y?-.8:-.15),l.forEach((b,R)=>b.rotation.x=_?-1.12:p?-Math.sin(d*m+R*Math.PI)*(y?.62:.34):.02)}}}function Gc(n){const t=new ce;if(n===0||n===1){const e=n===0?2.28:1.44,i=n===0?13400401:6396560;P(t,0,.46,0,e,.5,1.4,i,!0),P(t,0,.95,-.57,e,.83,.24,i,!0);for(const s of[-1,1])P(t,s*(e/2-.12),.73,0,.22,.48,1.4,i,!0),P(t,s*(e/2-.2),.12,.45,.12,.24,.12,6837063);const r=n===0?2:1;for(let s=0;s<r;s++)P(t,(s-(r-1)/2)*.95,.76,.02,n===0?.91:1.05,.17,1.01,n===0?14721135:9287842,!0)}else if(n===2)P(t,0,.76,0,1.45,1.05,.17,2440008,!0),P(t,0,.77,.096,1.29,.89,.02,6655645),P(t,0,.18,0,.14,.3,.14,2440008),P(t,0,.05,0,.6,.1,.5,2440008);else if(n===3)P(t,0,.36,0,.71,.72,.71,12489310,!0),P(t,0,.726,0,.14,.015,.71,15324324),Ln(t,"BOOKS",0,.4,.36,.55,"#dab989");else if(n===4){const e=new Ot(new Tn(.29,.22,.49,12),He(14059109));e.position.y=.25,t.add(e);for(let i=0;i<7;i++){const r=i*2.4,s=li(t,Math.sin(r)*.18,.8+i%3*.11,Math.cos(r)*.18,.23,i%2?7380055:4424296,[.45,1.6,.55]);s.rotation.z=Math.sin(r)*.65}}else if(n===5){P(t,0,.56,0,1.5,1.08,.72,11040848,!0);for(let e=0;e<3;e++)P(t,0,.24+e*.32,.371,1.36,.27,.035,12950638),P(t,0,.24+e*.32,.403,.3,.04,.04,4608076)}else if(n===6){const e=new Ot(new Tn(.34,.4,.12,16),He(4215382));e.position.y=.06,t.add(e),P(t,0,.83,0,.08,1.55,.08,4215382);const i=new Ot(new Ks(.37,.62,16,1,!0),He(15321203));i.position.y=1.55,i.rotation.x=Math.PI,t.add(i)}else if(n===7)P(t,0,1.02,0,.72,1.95,.16,7756355,!0),P(t,0,1.02,.09,.56,1.7,.022,10207944,!0),P(t,0,.08,0,.72,.16,1.45,7756355,!0);else if(n===8){P(t,0,.78,0,2.35,1.42,1.22,3159611,!0),P(t,0,1.43,-.23,2.2,.18,.7,2435630,!0),P(t,0,.92,.61,2.15,.13,.38,15526105);for(let e=0;e<10;e++)P(t,-1+e*.22,1.01,.68,.025,.12,.2,3225146);for(const e of[-.9,.9])P(t,e,.25,.2,.17,.5,.17,2435630)}else if(n===10){P(t,0,.34,0,.66,.68,.66,11257276,!0),P(t,0,.7,0,.7,.08,.7,15324316,!0);for(const e of[-.18,.18])for(const i of[-.17,.17]){const r=new Ot(new Tn(.095,.075,.42,10),He(10409179));r.position.set(e,.53,i),t.add(r)}}else if(n===11){P(t,0,.33,0,.7,.66,.7,9399380,!0);for(let e=0;e<5;e++)P(t,-.2+e*.1,.7,0,.06,.08,.55,[6455171,12812390,14862731][e%3],!0)}else n===12?(P(t,0,.32,0,.68,.62,.64,3689557,!0),P(t,0,.65,0,.54,.09,.48,7906989,!0),P(t,0,.35,.335,.28,.22,.035,14730365,!0)):(P(t,0,.42,0,.72,.82,.72,13081188,!0),Ln(t,"FRAGILE",0,.45,.38,.72,"#efb36d"));return t}const Xr={front:.2,back:5.8,rampEnd:8.8,depth:7};function lv(n=7,t=0,e=0,i="base"){const r=new ce,s=new ce,a=new ce;s.position.set(3,0,.14),a.position.set(-3,0,-.14),s.add(a),r.add(s);const o=[],c=[];r.name="active-truck";const l=Xr.front+n*.8,u=l-Xr.front,f=(l+Xr.front)/2,d={base:{cab:e?15777087:11437893,box:e>1?16052194:e?14935256:11448487,trim:3768216,roof:14862703},city:{cab:15198169,box:15987176,trim:2647174,roof:13951198},build:{cab:15632185,box:14787421,trim:14968866,roof:15770440},premium:{cab:3423294,box:4278087,trim:13149004,roof:4868933}}[i]??{cab:15777087,box:16052194,trim:3768216,roof:14862703},p=d.cab,_=d.box;if(r.userData.bodyColor=p,Xr.back=l,Xr.rampEnd=l+2.2,Xr.depth=n,P(a,3,.55,f,3.3,.42,u+.2,3162186,!0),P(a,3,.735,f,3.2,.09,u,13350548),e>0){P(a,3,1.9,.15,3.3,2.65,.15,_);for(const S of[1.35,4.65]){P(a,S,.99,f,.1,.4,u+.2,_),P(a,S,2.8,f,.08,.1,u+.2,9808549);for(const g of[.15,l+.05])P(a,S,1.95,g,.09,1.8,.09,12240831)}}else{P(a,3,.88,.15,3.25,.22,.1,i==="base"?9010537:d.trim,!0);for(const S of[1.35,4.65])P(a,S,.88,f,.1,.22,u+.1,i==="base"?9010537:d.trim,!0)}const y=[];if(e>0)for(const S of[1.35,4.65])y.push(yd(P(a,S,1.72,f,.07,1.82,u,_,!0)));P(r,3,.78,-1.05,3.2,.72,2.1,p,!0),P(r,3,1.42,-.03,3.2,1.55,.12,p,!0);for(const S of[1.45,4.55])for(const g of[-2.02,-.08])P(r,S,1.48,g,.18,1.45,.18,p,!0);const m=P(r,3,1.8,-2.12,2.82,.65,.04,6523029);m.material=new qi({color:7974585,transparent:!0,opacity:.55,roughness:.18,metalness:.05}),P(r,2.45,1.13,-1.25,.72,.72,.72,3362132,!0),P(r,3.55,1.13,-1.25,.72,.72,.72,3362132,!0),P(r,3,1.38,-1.84,2.5,.18,.45,2506051,!0);const h=new Ot(new hs(.24,.045,8,18),He(2439229));h.position.set(3.72,1.55,-1.65),h.rotation.x=Math.PI/2.8,r.add(h),P(r,3,2.03,-1.05,3.3,.14,2.2,i==="base"?16111479:d.cab,!0),P(r,3,.63,-2.16,3.15,.28,.16,4150615,!0),P(r,3,.91,-2.2,1.05,.2,.05,6517617,!0);for(const S of[1.78,4.22])P(r,S,1.04,-2.23,.48,.24,.05,16770720,!0),P(r,S,1.58,-2.19,.19,.13,.06,14253140,!0);for(const S of[1.25,4.75])P(r,S,1.65,-1.25,.22,.15,.38,3164235,!0);for(const S of[1.37,4.63]){const g=P(r,S,1.78,-1,.025,.55,1.5,6523029);g.material=new qi({color:7974585,transparent:!0,opacity:.42,roughness:.15});for(const v of[-1.2,l-.45]){const w=new ce;w.position.set(S,.46,v),(v<0?r:a).add(w);const x=new Ot(new Tn(.46,.46,.28,16),He(2504510));x.rotation.z=Math.PI/2,x.castShadow=!0;for(const L of[-1,1])P(x,0,L*.151,.19,.09,.025,.3,15255388);const T=new ce;w.add(T),T.add(x);const D=new Ot(new Tn(.23,.23,.3,12),He(10203048));D.rotation.z=Math.PI/2,T.add(D),o.push(T),v<0&&c.push(w)}}for(const S of[1.8,4.2])P(r,S,.95,-2.13,.45,.22,.06,16772529,!0);if(e===0&&i==="base"){P(r,2.35,2.08,-2.14,.55,.18,.025,8215107,!0),P(r,3.7,1.3,-2.205,.6,.1,.028,7296062,!0);const S=P(r,3,.58,-2.29,3.2,.2,.15,4740435,!0);S.rotation.z=.045;for(const[g,v,w]of[[2.45,1.82,.5],[3.48,1.78,-.45]]){const x=P(r,g,v,-2.149,.025,.55,.018,14279381);x.rotation.z=w}}if(e===0&&i!=="base"&&P(r,3,.58,-2.29,3.2,.18,.15,d.trim,!0),e>=1){for(const S of[1.34,4.66])P(a,S,1.09,f,.035,.17,u,d.trim);P(r,3,.61,-2.25,3.3,.18,.18,12965847,!0)}if(e>=2){P(r,3,2.16,-1.12,2.35,.2,1.2,d.trim,!0);for(const S of[1.55,4.45])P(r,S,1.09,-2.27,.18,.35,.04,15334143,!0)}if(e>=3){for(const S of[1.6,4.4])P(a,S,.63,f,.13,.27,u-.2,d.trim,!0);for(const S of[2.3,3.7])P(r,S,2.31,-1.25,.46,.12,.22,16758596,!0)}if(e>=4){P(r,3,.86,-2.28,1.3,.36,.09,2379623,!0);for(let S=0;S<4;S++)P(r,2.55+S*.3,.86,-2.34,.08,.25,.025,13624545);P(r,3,2.37,-.8,1.2,.08,.6,15850653,!0)}if(i==="build"){for(const S of[2.05,3.95])P(r,S,2.16,-1.35,.23,.2,.23,16760134,!0);for(const S of[2.2,2.8,3.4,4]){const g=P(r,S,.65,-2.29,.2,.11,.025,16773577);g.rotation.z=-.45}}if(i==="premium"){for(const S of[1.4,4.6])P(a,S,2.77,f,.08,.09,u,13149004);P(r,3,.62,-2.31,2.9,.08,.04,13149004)}const b=new ce;b.position.set(3,.78,l),a.add(b),P(b,0,0,1.15,3.2,.1,2.3,8690328,!0);for(const S of[-1.45,1.45])P(b,S,.08,1.15,.12,.12,2.15,4217958,!0);if(P(b,0,.08,2.18,1.15,.1,.1,15779678,!0),t){const S=new ce;S.name="shelf",P(S,1.7,1.55,1.35,.55,.08,2.1,7047042);for(const g of[.35,2.35])P(S,1.7,.75,g,.08,1.6,.08,5402218);if(t>1&&P(S,1.7,2.2,1.35,.55,.08,2.1,7047042),t>=3){for(const g of[1.7,4.3]){for(const v of[1.1,1.62,2.14])P(S,g,v,1.35,.55,.07,2.25,5797232);for(const v of[.3,1.35,2.4])P(S,g,1.62,v,.52,1.12,.06,5007463)}for(const g of[.72,1.45,2.18])P(S,1.7,1.38,g,.42,.35,.55,14199144,!0)}a.add(S)}ov(r,e?"MOVECRAFT":"M • MOVING",3,1.18,-2.205,1.75);const R=yd(P(a,3,2.83,f,3.32,.09,u,e>1?d.roof:10134942,!0));if(R.visible=e>0,e>1)for(const S of[f-u*.32,f+u*.32])P(a,3,2.76,S,2.9,.08,.08,16044905);for(let S=0;S<=4;S++)P(a,1.4+S*.8,.788,f,.018,.008,u,15392707);for(let S=0;S<=n;S++)P(a,3,.79,.2+S*.8,3.2,.008,.018,15392707);return r.userData.rampPivot=b,r.userData.enclosed=e>0,r.userData.cargoWalls=y,r.userData.roof=R,r.userData.wheels=o,r.userData.frontWheels=c,r.userData.trailer=s,r.userData.cargo=a,r}const uc=4,cv=7,Ut=.8,Rs=[{id:"linden",name:"Linden District",x:-60,variant:0},{id:"old-town",name:"Old Town",x:-60,z:-54,variant:1},{id:"market",name:"Market Square",x:58,variant:2},{id:"birch",name:"Birch Road",x:58,z:36,variant:3},{id:"lake",name:"Lake View",x:91,variant:4},{id:"north-linden",name:"North Linden",x:-60,z:36,variant:5},{id:"north-old-town",name:"Oak Court",x:91,z:36,variant:6},{id:"south-market",name:"Garden Close",x:58,z:-54,variant:7},{id:"south-birch",name:"Birch Gardens",x:91,z:-54,variant:8}],or=[{name:"Corduroy Sofa",w:3,d:2,value:230,weight:4,vulnerability:0},{name:"Armchair",w:2,d:2,value:110,weight:2,vulnerability:0},{name:"Television",w:2,d:1,value:270,weight:2,vulnerability:8},{name:"Book Box",w:1,d:1,value:65,weight:3,vulnerability:0},{name:"Houseplant",w:1,d:1,value:85,weight:1,vulnerability:7},{name:"Dresser",w:2,d:1,value:160,weight:4,vulnerability:1},{name:"Floor Lamp",w:1,d:1,value:120,weight:1,vulnerability:11},{name:"Standing Mirror",w:1,d:2,value:310,weight:2,vulnerability:14},{name:"Piano",w:3,d:2,value:620,weight:7,vulnerability:9},{name:"China Box",w:1,d:1,value:390,weight:2,vulnerability:17},{name:"Glassware Crate",w:1,d:1,value:340,weight:1,vulnerability:18},{name:"Record Collection",w:1,d:1,value:260,weight:1,vulnerability:12},{name:"Camera Case",w:1,d:1,value:410,weight:1,vulnerability:20}];function Eh(n){let t=n>>>0;return()=>(t=Math.imul(1664525,t)+1013904223>>>0)/4294967296}function uv(n,t,e=[]){const i=Array.from({length:t},()=>Array(uc).fill(!1));for(const s of e)i[s]&&i[s].fill(!0);const r=[];for(const s of n){const a=or[s];let o=!1;for(const c of[!1,!0]){const l=c?a.d:a.w,u=c?a.w:a.d;for(let f=0;f<=t-u&&!o;f++)for(let d=0;d<=uc-l&&!o;d++){let p=!0;for(let _=0;_<u;_++)for(let y=0;y<l;y++)p&&=!i[f+_][d+y];if(p){for(let _=0;_<u;_++)for(let y=0;y<l;y++)i[f+_][d+y]=!0;r.push(s),o=!0}}if(o)break}}return r}function dv(n=0,t=0){const e=Eh(n*997+t*313+41),i=7+t,r=Math.min(6+Math.floor(t/2)+Math.floor(n/2),14);let s=n===0&&t===0?[0,1,2,3,4,5]:Array.from({length:r},(o,c)=>c>=r-Math.min(1+Math.floor(n/2),5)?9+(c+n)%4:(c*3+n*2+t)%or.length);(n!==0||t!==0)&&s.sort((o,c)=>or[c].w*or[c].d-or[o].w*or[o].d),s=uv(s,i,t===0?[2,5]:[]);const a=[];return s.map((o,c)=>{const l=or[o],u=l.w*Ut/2,f=l.d*Ut/2;let d=-3,p=2,_=!1;for(let y=0;y<250;y++){const m=-9.75+u+e()*(8.3-u*2),h=-4.75+f+e()*(8.7-f*2),b=(n+1)%2?Math.abs(h+.35)<f+.32:Math.abs(m+5.6)<u+.32,R=a.some(S=>Math.abs(m-S.x)<u+S.hw+.24&&Math.abs(h-S.z)<f+S.hd+.24);if(!b&&!R){d=Math.round(m*10)/10,p=Math.round(h*10)/10,_=!0;break}}if(!_)for(let y=-4.2+f;y<=4.1-f&&!_;y+=.45)for(let m=-9.7+u;m<=-1.5-u&&!_;m+=.45){const h=(n+1)%2?Math.abs(y+.35)<f+.24:Math.abs(m+5.6)<u+.24,b=a.some(R=>Math.abs(m-R.x)<u+R.hw+.16&&Math.abs(y-R.z)<f+R.hd+.16);!h&&!b&&(d=Math.round(m*10)/10,p=Math.round(y*10)/10,_=!0)}return a.push({x:d,z:p,hw:u,hd:f}),{...l,model:o,id:c,fragile:l.vulnerability>=7,vulnerability:l.vulnerability+Math.min(n*1.5,9),location:"pickup",x:0,z:0,pickupX:d,pickupZ:p,rotated:!1}})}function Hc(n=0,t=0,e=n){const i=["Baumann Family","Mara King","Morning Glow Café","Dr. Hoffman","Sun Deck Hotel","Northern Lights Gallery"],r=["First Apartment Move","Old House, Narrow Doors","Café Grand Opening","Delicate Private Move","Major Hotel Move-In","Premium Art Transport"],s=Eh(e*2654435761+n*97+1729>>>0),a=Math.floor(s()*Rs.length),o=Rs.map((p,_)=>_).filter(p=>p!==a),c=o[Math.floor(s()*o.length)],l=Rs[a],u=Rs[c],f=dv(n,t),d=Math.round(f.reduce((p,_)=>p+_.value,0)*(1+n*.07));return{client:i[n%i.length],title:r[n%r.length],from:l.name,to:u.name,fromSite:l,toSite:u,difficulty:n+1,items:f,reward:d}}function Je(n){return n.rotated?[n.d,n.w]:[n.w,n.d]}function Th(n,t,e,i,r=uc,s=cv){const[a,o]=Je(t);return Number.isInteger(e)&&Number.isInteger(i)&&e>=0&&i>=0&&e+a<=r&&i+o<=s&&!n.some(c=>{if(c.id===t.id||c.location!=="truck")return!1;const[l,u]=Je(c);return e<c.x+l&&e+a>c.x&&i<c.z+u&&i+o>c.z})}const hv=["supply","mill","assembly","paint","packing"],Mr={truck:"Complete truck upgrade",cargo:"Included with truck",gear:"Included with truck",worker:"Strength, stamina & speed",yard:"Expand company base",hire:"Hire crew with truck",fleet:"Employee truck upgrade",factory:"Buy furniture company"},gn={truck:8,cargo:3,gear:3,worker:8,yard:4,hire:4,fleet:4,factory:1};function wh(){return{cash:450,jems:0,ownedSkins:{truck:["base"],person:["standard"]},selectedSkins:{truck:"base",person:"standard"},jobs:0,earned:0,levels:{truck:0,cargo:0,gear:0,worker:0,yard:0,hire:0,fleet:0,factory:0},fleet:[],timber:0,parts:0,products:0,painted:0,packed:0,sold:0,production:0,supply:0,test:!1,contributions:{},stationLevels:{supply:0,mill:0,assembly:0,paint:0,packing:0},stationProgress:{supply:0,mill:0,assembly:0,paint:0,packing:0},stationContributions:{},daily:{lastClaim:"",streak:0},finished:!1}}function fv(n){const t=wh(),e={...t,...n,jems:Math.max(0,Math.floor(Number(n?.jems)||0)),ownedSkins:{truck:[...new Set(["base",...Array.isArray(n?.ownedSkins?.truck)?n.ownedSkins.truck:[]])],person:[...new Set(["standard",...Array.isArray(n?.ownedSkins?.person)?n.ownedSkins.person:[]])]},selectedSkins:{...t.selectedSkins,...n?.selectedSkins},levels:{...t.levels,...n?.levels},contributions:{...t.contributions,...n?.contributions},stationLevels:{...t.stationLevels,...n?.stationLevels},stationProgress:{...t.stationProgress,...n?.stationProgress},stationContributions:{...t.stationContributions,...n?.stationContributions}};return e.levels.truck=Math.min(gn.truck,Math.max(e.levels.truck,e.levels.cargo,e.levels.gear)),e.levels.cargo=e.levels.truck,e.levels.gear=e.levels.truck,e.fleet=(e.fleet??[]).map(i=>({...i,pending:i.pending??0})),e.levels.hire=Math.max(e.levels.hire,e.fleet.length),e.levels.fleet=e.fleet.length,e.levels.factory=e.finished?1:0,e.ownedSkins.truck.includes(e.selectedSkins.truck)||(e.selectedSkins.truck="base"),e.ownedSkins.person.includes(e.selectedSkins.person)||(e.selectedSkins.person="standard"),e}function Hs(n,t){return Math.round({truck:520,cargo:800,gear:450,worker:260,yard:1800,hire:2200,fleet:1800,factory:5e4}[t]*(1+n.levels[t]*.55))}function Ah(n,t){return n.levels[t]>=gn[t]?"Maximum level":t==="yard"&&n.levels.truck<gn.truck?"Max your own truck first":t==="hire"&&n.levels.yard<1?"Expand the base for a parking bay":t==="hire"&&n.fleet.length>=n.levels.yard?"Upgrade the base for another parking bay":t==="fleet"?"Upgrade employee trucks at their own parking bay":t==="factory"&&!Ch(n)?"Max every truck, crew and base upgrade first":""}function pv(n,t){const e=Ah(n,t);if(e)return e;const i=Math.max(0,Hs(n,t)-(n.contributions?.[t]??0));return!n.test&&n.cash<i?`Need $${i}`:(n.test||(n.cash-=i),n.contributions&&delete n.contributions[t],n.levels[t]++,t==="truck"&&(n.levels.cargo=n.levels.truck,n.levels.gear=n.levels.truck),t==="hire"&&(n.fleet.push({level:0,phase:-n.fleet.length*.08,completed:0,pending:0,route:n.fleet.length%3}),n.levels.fleet=n.fleet.length),t==="factory"&&(n.finished=!0),"")}function Eo(n,t){n.cash+=Math.round(t),n.earned+=Math.round(t)}function mv(n,t){const e=n.fleet[t];if(!e||e.level>=4)return!1;const i=1e3*(e.level+1),r=Math.max(0,i-(e.contribution??0));return!n.test&&n.cash<r?!1:(n.test||(n.cash-=r),e.contribution=0,e.level++,!0)}function Rh(n){return 48-n.level*5}function Ch(n){return n.levels.truck>=gn.truck&&n.levels.worker>=gn.worker&&n.levels.yard>=gn.yard&&n.fleet.length>=gn.hire&&n.fleet.every(t=>t.level>=4)}function gv(n){return 260+n.level*125}function _v(n,t){const e=n.fleet[t],i=Math.round(e?.pending??0);return!e||i<=0?0:(e.pending=0,Eo(n,i),i)}function xv(n,t=new Date){const e=t.toISOString().slice(0,10);if(n.daily.lastClaim===e)return 0;const i=new Date(t);i.setUTCDate(i.getUTCDate()-1),n.daily.streak=n.daily.lastClaim===i.toISOString().slice(0,10)?Math.min(8,n.daily.streak+1):1,n.daily.lastClaim=e;const r=dc(n.daily.streak);return Eo(n,r),r}function dc(n){return[150,225,325,450,600,800,1050,1400][Math.max(0,Math.min(7,n-1))]}function vv(n,t){return n.levels.factory<1?"Build the workshop first":t==="supply"?!n.test&&n.cash<24?"Need $24 for timber":"":t==="mill"?n.timber<1?"Collect timber first":"":t==="assembly"?n.parts<2?"Process two timber pieces first":"":t==="paint"?n.products<1?"Assemble a chair first":"":n.painted<1?"Paint a chair first":""}function Mv(n,t){const e=vv(n,t);return e||(t==="supply"?(n.test||(n.cash-=24),n.timber+=3,""):t==="mill"?(n.timber--,n.parts++,""):t==="assembly"?(n.parts-=2,n.products++,""):t==="paint"?(n.products--,n.painted++,""):(n.painted--,n.packed===0&&(n.supply=0),n.packed++,""))}function Sv(n,t){let e=0;for(const i of n.fleet){if((i.pending??0)>0){i.phase=0;continue}for(i.phase+=t/Rh(i);i.phase>=1;){i.phase--,i.completed++;const r=gv(i);i.pending=(i.pending??0)+r}}if(n.levels.factory&&!n.finished){const i={supply:8,mill:6,assembly:10,paint:7,packing:7};for(const r of hv)if(n.stationLevels[r]>=2){const s=i[r]/(1+(n.stationLevels[r]-2)*.7+n.levels.factory*.08);if(n.stationProgress[r]+=t/s,n.stationProgress[r]>=1){const a=Mv(n,r);n.stationProgress[r]=a?Math.min(.95,n.stationProgress[r]):n.stationProgress[r]-1}}if(n.packed>0?n.supply+=t:n.supply=0,n.supply>=10){n.supply=0,n.packed--,n.sold++;const r=190+n.levels.factory*35;Eo(n,r),e+=r}}return e}const bd={base:0,pickup:-48,destination:66},In={minX:-90,maxX:102,minZ:-72,maxZ:86},Ua=7,Sn=[-42,12,48],Ha=[-78,-30,42,90],$r=Ha;function Nn(n){n.removeFromParent(),n.traverse(t=>{t instanceof Ot&&(t.geometry.dispose(),t.userData.owned&&(t.material.map?.dispose(),t.material.dispose())),t instanceof Tp&&(t.material.map?.dispose(),t.material.dispose())})}function hc(n){n.material=n.material.clone();const t=n.material;return t.transparent=!0,n.userData.owned=!0,n}function Va(n,t,e,i,r,s,a,o){const c=new Oe;c.setAttribute("position",new de([-r/2,0,-s/2,r/2,0,-s/2,0,a,-s/2,-r/2,0,s/2,r/2,0,s/2,0,a,s/2],3)),c.setIndex([0,2,1,3,4,5,0,3,5,0,5,2,2,5,4,2,4,1]),c.computeVertexNormals();const l=new Ot(c,He(o));return l.position.set(t,e,i),l.castShadow=!0,n.add(l),l}function Ls(n,t,e,i){P(n,t,.75,e,.2,1.5,.2,8411970);for(let r=0;r<3;r++){const s=i===1?new Ks(1-r*.15,1.6,7):new Fc(.9,1),a=new Ot(s,He(i===2?15181958:i===1?3770233:r%2?7845223:5087096));a.position.set(t+(i===1?0:Math.sin(r*3)*.4),1.55+r*.4,e+Math.cos(r*3)*.2),a.castShadow=!0,n.add(a)}}function Ph(n){n.updateMatrixWorld(!0);const t=new Map;n.traverse(e=>{if(e instanceof Ot&&!e.userData.owned&&e.material instanceof qi){const i=Object.entries(e.geometry.attributes).map(([a,o])=>{const c=o;return`${a}:${c.itemSize}:${c.normalized}`}).sort().join("|"),r=`${e.material.uuid}:${e.geometry.index?"indexed":"plain"}:${i}`,s=t.get(r)??{material:e.material,meshes:[]};s.meshes.push(e),t.set(r,s)}});for(const{material:e,meshes:i}of t.values()){const r=i.map(o=>o.geometry.clone().applyMatrix4(o.matrixWorld)),s=sv(r);if(r.forEach(o=>o.dispose()),!s)continue;i.forEach(o=>{o.removeFromParent(),o.geometry.dispose()});const a=new Ot(s,e);a.castShadow=a.receiveShadow=!0,n.add(a)}}const yv=n=>n==="industrial"?13025965:n==="shops"?14275260:10731392;function bv(){const n=new ce,t=[],e=[],i=[],r=[],s=8295062,a=15655882,o=new Ot(new Bn(1800,1800),He(11060874));o.rotation.x=-Math.PI/2,o.position.y=-.09,o.receiveShadow=!0,n.add(o);const c=Ua/2,l=1.3,u=(g,v,w)=>{const x=[];let T=v;for(const D of g)D-c>T&&x.push([T,D-c]),T=D+c;return T<w&&x.push([T,w]),x};for(const g of Sn){P(n,6,-.025,g,310,.07,Ua,s);for(const[v,w]of u($r,-149,161))for(const x of[-1,1])P(n,(v+w)/2,.045,g+x*(c+l/2),w-v,.1,l,a);for(let v=-147;v<159;v+=4.4)$r.some(w=>Math.abs(v-w)<c+3)||P(n,v,.018,g,1.6,.012,.085,16248269)}for(const g of $r){for(const[v,w]of u(Sn,-115,116))P(n,g,-.025,(v+w)/2,Ua,.07,w-v,s);for(const[v,w]of u(Sn,-115,116))for(const x of[-1,1])P(n,g+x*(c+l/2),.045,(v+w)/2,l,.1,w-v,a);for(let v=-113;v<114;v+=4.4)Sn.some(w=>Math.abs(v-w)<c+3)||P(n,g,.018,v,.085,.012,1.6,16248269)}const f=(g,v)=>{P(n,g,1.75,v,.12,3.5,.12,3958128),P(n,g,3.54,v,.65,.15,.45,16768657,!0),t.push({x:g,z:v,w:.3,d:.3})},d=(g,v)=>{P(n,g,.5,v,1.65,.16,.55,12094041,!0),P(n,g,.92,v-.25,1.65,.6,.12,12094041,!0);for(const w of[-.6,.6])P(n,g+w,.23,v,.1,.46,.5,4350316);t.push({x:g,z:v,w:1.75,d:.8})};for(const g of $r)for(const v of Sn){for(const x of[-1,1])for(const T of[-1,1])P(n,g+x*(c+l/2),.045,v+T*(c+l/2),l,.1,l,a);if((g===-30||g===42)&&v===12||g===-78&&v===48)for(const x of[-1,1]){const T=g+x*(c+.75),D=v-x*(c+1.5);P(n,T,1.45,D,.13,2.9,.13,3955044),t.push({x:T,z:D,w:.38,d:.38}),P(n,T,2.85,D,.36,.95,.26,3362392,!0);for(let L=0;L<3;L++)P(n,T,3.12-L*.26,D+.15,.19,.18,.05,[14186849,15778647,7521692][L],!0);for(let L=-2;L<=2;L++)P(n,g+L*1.1,.019,v+x*(c+1.7),.55,.012,1.3,16511188),P(n,g+x*(c+1.7),.019,v+L*1.1,1.3,.012,.55,16511188)}P(n,g+c+.8,1.2,v+c+2.8,.07,2.4,.07,5468538),t.push({x:g+c+.8,z:v+c+2.8,w:.34,d:.34}),Ln(n,v<0?"GARDEN LANE":g<0?"MARKET STREET":"LINDEN WAY",g+c+.8,2.35,v+c+2.8,1.9,"#dbe8cf")}for(const g of Sn)for(let v=-68;v<88;v+=18)$r.some(w=>Math.abs(v-w)<8)||(f(v,g+c+.8),P(n,v+2,.017,g+c-.35,.48,.01,.36,5795961));const p=[{x:5,z:-14,w:64,d:43},...Rs.map(g=>({x:g.x-5.6,z:g.z??0,w:11,d:11.5}))],_=(g,v,w=0)=>Math.abs(g.x-v.x)<(g.w+v.w)/2+w&&Math.abs(g.z-v.z)<(g.d+v.d)/2+w,y=g=>!p.some(v=>_(g,v,.5))&&!i.some(v=>_(g,v,.6))&&!$r.some(v=>Math.abs(g.x-v)<g.w/2+c+l)&&!Sn.some(v=>Math.abs(g.z-v)<g.d/2+c+l),m=(g,v,w,x)=>t.push({x:g,z:v,w,d:x}),h=(g,v,w,x=!1)=>{const T=Dh(w,x);T.position.set(g,0,v),n.add(T),m(g,v,1.7,3.1)},b=(g,v,w)=>{Ls(n,g,v,w),m(g,v,.4,.4)},R=(g,v,w,x=1)=>{P(n,g,v,w,x+.14,1.14,.09,16445655),P(n,g,v,w+.06,x,.95,.04,8567235),P(n,g,v,w+.09,.055,.95,.035,16445655)},S=(g,v,w,x)=>{const T={x:g,z:v,w:14,d:16,kind:w};if(!y(T))return;i.push(T),P(n,g,.01,v,14,.06,16,yv(w));const D=w==="shops"||w==="industrial",L=w==="dense",O=w==="modern",B=D||L?10:7,N=D?7:6,z=w==="shops"?7:L?6.5:w==="industrial"?4.3:O?3.5:3.1,q=v-2,$=[15719349,14001294,12242896,15198424];P(n,g,z/2,q,B,z,N,O?15789792:$[x%4],!0),m(g,q,B,N),O||D?(P(n,g,z+.15,q,B+.55,.3,N+.6,O?4811632:5077378,!0),O&&P(n,g-1,z+.33,q,3,.06,2,3562871)):(Va(n,g,z,q,B+.6,N+.7,x%2?2:1.25,[12022866,6720918,9991776][x%3]),P(n,g+2,z+.65,q-1.2,.55,1.3,.55,10845797));for(const lt of[-1,1])for(const yt of[-1.6,1.6])P(n,g+lt*(B/2+.04),1.8,q+yt,.08,1.1,1.2,15919056),P(n,g+lt*(B/2+.09),1.8,q+yt,.025,.87,1,8567235);if(x%4===1)for(let lt=0;lt<6;lt++)P(n,g,.28+lt*.43,q+N/2+.014,B,.025,.018,13079681);if(L)for(const lt of[-1.6,1.6])P(n,g+lt,1.1,q+N/2+.16,.25,2.2,.25,15259321);const et=q+N/2;if(P(n,g,1,et+.06,1.1,2,.11,4812664,!0),w==="industrial"){P(n,g+2,1.55,et+.08,3.5,3.1,.14,6323589);for(let lt=0;lt<6;lt++)P(n,g+2,.25+lt*.48,et+.17,3.35,.045,.025,11453119);Ln(n,["AUTO SERVICE","TYRE & REPAIR","LOCAL STORAGE","VAN RENTAL"][x%4],g,z-.6,et+.14,6,"#f6d183")}else{for(const lt of[-B*.32,B*.32])R(g+lt,1.9,et+.04,O?1.65:1.25);if(z>5)for(const lt of[-3,0,3])R(g+lt,4.8,et+.04,1.4),L&&(P(n,g+lt,4.08,et+.5,2.1,.12,.95,15785152),P(n,g+lt,4.55,et+.98,2.1,.8,.07,4947326));if(w==="shops"){for(const lt of[-3,3])P(n,g+lt,1.4,et+.13,2.4,2,.06,9422792);if(Ln(n,["BAKERY","CORNER CAFE","FRESH MARKET","BOOKS & NEWS"][x%4],g,3.45,et+.18,6.8,"#f5d293"),P(n,g,2.9,et+.65,9,.15,1.2,[6397575,13928040][x%2]),d(g-3,v+5),Ed(n,g+1.3,v+5),m(g-3,v+5,1.8,.7),P(n,g+2.7,.55,v+3.2,.6,1.1,.6,5075827,!0),x%4===1){P(n,g-3,.78,v+6.7,1,.09,.8,12818788);for(const lt of[-.8,.8])P(n,g-3+lt,.4,v+6.7,.42,.12,.45,12818788)}}}P(n,g+4.8,.055,v+5.2,3,.02,5.3,14142642),P(n,g,.056,v+4.6,1.5,.02,6,15193781);const Y=v<-45?-46.8:v>55?79.4:v>15?38.4:-16.6,j=v+7.8,it=Math.max(0,Y-j);if(it>0&&(r.push({x:g+4.8,z:(j+Y)/2,w:3,d:it},{x:g,z:(j+Y)/2,w:1.4,d:it}),P(n,g+4.8,.051,(j+Y)/2,3,.015,it,14142642),P(n,g,.051,(j+Y)/2,1.4,.015,it,15193781)),x%3!==1&&h(g+4.8,v+5,[14463339,8497586,13073769,15066319][x%4],w==="industrial"),!D){L||(P(n,g+4.8,1.15,v-4.6,2.35,2.3,3.4,14800831),P(n,g+4.8,2.37,v-4.6,2.65,.14,3.7,7311760),P(n,g+4.8,1,v-2.87,1.95,1.9,.06,7310474),P(n,g+4.8,.056,v+.1,2.45,.012,6,14142642),m(g+4.8,v-4.6,2.35,3.4));const lt=new Ot(new hs(.28,.035,5,16),He(5406309));lt.rotation.x=-Math.PI/2,lt.position.set(g-2,.09,v+6),n.add(lt),b(g-4.8,v+5.3,x%3),P(n,g-2.3,.48,v+7,.09,.96,.09,8416083),P(n,g-2.3,.95,v+7,.55,.4,.42,6063494,!0),P(n,g-6.7,.45,v,.35,.9,13,6590054,!0);for(let yt=0;yt<5;yt++)P(n,g-3+yt*.45,.16,v+5,.22,.22,.22,[15975529,15177619,14279356][yt%3],!0);x%2===0&&Ed(n,g-2,v+3.1)}for(let lt=0;lt<(L?3:1);lt++)P(n,g-B/2+.4+lt*.55,.4,et+.55,.43,.8,.46,5404791,!0)};for(const[g,v,w,x]of[[-64,-27,"shops",0],[-46,-27,"shops",1],[-64,30,"shops",2],[-46,30,"shops",3],[-64,-59,"homes",0],[-46,-59,"homes",1],[-16,-59,"homes",2],[3,-59,"homes",3],[24,-59,"homes",0],[56,-59,"modern",0],[75,-59,"modern",1],[56,-26,"modern",2],[75,-26,"modern",3],[-16,30,"industrial",0],[4,30,"industrial",1],[25,30,"industrial",2],[56,30,"dense",0],[75,30,"dense",1],[-64,65,"homes",2],[-46,65,"homes",3],[-16,65,"industrial",3],[4,65,"industrial",0],[56,65,"dense",2],[75,65,"dense",3]])S(g,v,w,x);for(const[g,v,w]of[[-54,-13,"square"],[24,65,"park"]]){const x={x:g,z:v,w:15,d:w==="square"?6:9,kind:w};if(y(x)){i.push(x),P(n,g,.045,v,15,.06,x.d,w==="square"?14930871:9549687),P(n,g,.085,v,13,.02,1.2,15127990);for(const T of[-5.5,5.5])b(g+T,v-2.5,0),d(g+T,v+2.5),f(g+T,v+3.8);if(w==="square"){const T=new Ot(new Tn(1.6,1.75,.4,16),He(14141351));T.position.set(g,.25,v),n.add(T),m(g,v,3.5,3.5);const D=new Ot(new Tn(1.4,1.4,.04,16),He(8045004));D.position.set(g,.47,v),n.add(D),P(n,g,1,v,.4,1.5,.4,15194041,!0)}else{for(const T of[-1.4,1.4])P(n,g+T,1,v-2,.12,2,.12,14857573);P(n,g,2,v-2,3,.13,.13,14857573),P(n,g,.75,v-2,.9,.1,.4,12810081)}}}for(const[g,v,w]of[[42,90,-15],[-30,90,40],[-63,75,81]]){P(n,(g+v)/2,.008,w,v-g,.025,3.2,10529698);for(const x of[-1,1])P(n,(g+v)/2,.039,w+x*1.9,v-g-Ua,.04,.55,a)}for(const[g,v]of[[-63,Math.PI/2],[75,0]]){const w=[],x=[];for(let L=0;L<=24;L++){const O=v+L*Math.PI/48;for(const B of[13.4,16.6])w.push(g+Math.cos(O)*B,.023,66+Math.sin(O)*B);if(L<24){const B=L*2;x.push(B,B+1,B+2,B+1,B+3,B+2)}}const T=new Oe;T.setAttribute("position",new de(w,3)),T.setIndex(x),T.computeVertexNormals();const D=T.index;for(let L=0;L<D.count;L+=3){const O=D.getX(L);D.setX(L,D.getX(L+2)),D.setX(L+2,O)}T.computeVertexNormals(),n.add(new Ot(T,He(10529698)))}for(let g=-68;g<86;g+=9)for(const v of[-72,-47,20,55,74]){const w={x:g,z:v,w:2.8,d:2.8};!y(w)||r.some(x=>_(w,x,.3))||v===20&&g>17&&g<26||(b(g,v,Math.abs(Math.round(g+v))%3),P(n,g,.07,v,2.2,.12,2.2,9942137,!0))}for(const g of[19,21,23]){P(n,g,.4,20,1.5,.18,.12,15384971);for(const v of[-.5,.5])P(n,g+v,.24,20,.08,.48,.12,6978937)}P(n,-20,1.1,18,4,.13,1.7,4946820);for(const g of[-21.7,-18.3])P(n,g,.55,18,.09,1.1,.09,4946820);d(-20,18),Ln(n,"BUS",-22.5,2.2,18,.8,"#f5d58c");for(const[g,v]of[[-26,20],[38,-30],[86,22]])P(n,g,.5,v,.65,1,.4,7967115,!0),m(g,v,.65,.4),P(n,g+1.1,.42,v,.2,.84,.2,13207142,!0);for(let g=-64;g<=76;g+=20)P(n,g,1.6,-89,7,3.2,6,13161138),Va(n,g,3.2,-89,7.5,6.5,1.4,8165011),Ls(n,g+7,-87,0);for(const g of[-1,1])for(const v of[-69,-20,27,70]){const w=g<0?-119:131;P(n,w,1.65,v,8,3.3,6,g<0?14073773:12373949),Va(n,w,3.3,v,8.5,6.5,1.4,6523019),Ls(n,w+g*6,v+4,1)}for(const g of[-88,100])for(const v of Sn)P(n,g,3.4,v,1.4,1.2,8.4,5401456,!0),P(n,g,1.8,v-3.7,1.4,3.6,1,5401456,!0),P(n,g,1.8,v+3.7,1.4,3.6,1,5401456,!0);return Ph(n),n.userData.lots=i,{root:n,barriers:t,roofs:e}}function Ed(n,t,e){for(const i of[-.4,.4]){const r=new Ot(new hs(.28,.045,5,12),He(3495009));r.position.set(t+i,.32,e),n.add(r)}P(n,t,.6,e,.85,.055,.06,12484708),P(n,t+.2,.7,e,.06,.65,.06,12484708)}function Dh(n,t=!1){const e=new ce;P(e,0,.65,0,1.55,.7,3,n,!0),P(e,0,t?1.35:1.12,t?.35:0,1.35,t?.9:.6,t?2:1.7,n,!0),P(e,0,1.2,-.9,1.2,.45,.06,8566465);for(const i of[-.77,.77])for(const r of[-.94,.94]){const s=new Ot(new Tn(.3,.3,.16,10),He(3426900));s.rotation.z=Math.PI/2,s.position.set(i,.3,r),e.add(s)}for(const i of[-.5,.5])P(e,i,.7,-1.52,.35,.2,.04,16769957);return e}function os(n,t,e=!1,i=0){const r=new ce,s=[],a=[],o=n-5.6,c=-.3,l=e?15259056:15656145;P(r,o,.015,c,10,.12,10.6,13807225);for(let p=0;p<20;p++)P(r,o-4.8+p*.5,.08,c,.016,.01,10.3,12557425);const u=(p,_,y,m)=>(s.push({x:p,z:_,w:y,d:m}),P(r,p,1.55,_,y,3.1,m,l,!0)),f=[u(o,-5.55,10,.22),u(o-5,c,.22,10.5),u(o+5,c,.22,10.5),u(o-3.55,4.95,2.9,.22),u(o+3.55,4.95,2.9,.22)];t%2?f.push(u(o-3.6,-.35,2.8,.15),u(o+3.6,-.35,2.8,.15)):f.push(u(o,-3.1,.15,4.6));for(const p of[o-3,o+3])P(r,p,1.9,-5.4,1.5,1.3,.09,9291988),P(r,p,1.9,-5.32,.07,1.3,.05,16777215);const d=hc(Va(r,o,3.2,c,10.6,11.1,2.05,e?5537671:12152400));a.push({mesh:d,bounds:{x:o,z:c,w:10.5,d:11}}),P(r,o,.04,6,4,.12,2.1,14731169);for(const p of[o-2.15,o+2.15])P(r,p,1.5,4.98,.18,3,.33,5406076);r.position.z=i;for(const p of s)p.z+=i;for(const p of a)p.bounds.z+=i;return{root:r,barriers:s,roofs:a}}function Lh(n){const t=new ce,e=[],i=[],r=n.levels.yard;P(t,5,-.005,-14,63,.1,43,13551792);const s=(a,o,c,l,u,f,d)=>{P(t,a,u/2,o,c,u,l,d,!0),e.push({x:a,z:o,w:c,d:l});const p=hc(P(t,a,u+.15,o,c+.6,.3,l+.6,4353658,!0));i.push({mesh:p,bounds:{x:a,z:o,w:c+1,d:l+1}}),P(t,a,u-.55,o+l/2+.06,c,.7,.15,14922832);const _=Ln(t,f,a,u-.52,o+l/2+.17,Math.min(c-1,22),"#ffe0a0");_.scale.y=.23};s(-8,-29,27,10,6.4,"MOVECRAFT • MOVING COMPANY",15326911);for(const a of[-18,-13,-8,-3,2])P(t,a,4.2,-23.94,3.4,1.25,.1,8566977),P(t,a,4.2,-23.85,.07,1.25,.04,16445911);P(t,-8,1.2,-23.9,2.6,2.4,.12,5537415),P(t,-8,2.65,-22.9,4.4,.15,2.1,15318368),s(-20,-15,8,13,4.2,"STORAGE",13031107),P(t,-15.94,1.65,-15,.12,3.3,4.5,5667459),s(22,-28,26,10,4.5,"GARAGES & SERVICE",14603702);for(const a of[13,22,31]){P(t,a,1.65,-22.93,6,3.3,.15,7509649);for(let o=0;o<7;o++)P(t,a,.2+o*.45,-22.82,5.9,.04,.03,11322808)}for(let a=0;a<r;a++){const o=8+a*4.8;for(const c of[-2,2])P(t,o+c,.055,-8,.075,.02,10,16773843);P(t,o,.055,-13,4,.02,.075,16773843)}if(r>=2){const a=hc(P(t,20,3.8,-8,29,.2,11.4,5012096));i.push({mesh:a,bounds:{x:20,z:-8,w:30,d:12}})}for(const a of[{x:-26,z:-14,w:.3,d:43},{x:36,z:-14,w:.3,d:43},{x:5,z:-35,w:62,d:.3}])P(t,a.x,.45,a.z,a.w,.9,a.d,10005152),e.push(a);for(const[a,o]of[[-18,16],[35,2]])P(t,a,.4,7,o,.8,.3,10005152),e.push({x:a,z:7,w:o,d:.3});P(t,4,.07,7.7,16,.015,1.6,14274228);for(const a of[-3.4,11.4])P(t,a,.095,7.7,.12,.01,1.3,16377527);Ln(t,"MOVECRAFT",-19,2.6,6.8,6,"#ffda78"),P(t,-19,1.25,6.6,.2,2.5,.2,4550005),P(t,-10,.55,-1,2.6,1.1,.8,5012609,!0),Ln(t,"JOBS",-10,1.65,-.9,2,"#ffd168"),Ln(t,"TRUCK UPGRADES",-.45,1.35,-3.35,3.7,"#fff0bd");for(const a of[-1.75,.85])P(t,a,.65,-3.43,.12,1.3,.12,4550005);for(let a=0;a<5;a++){const o=new Ot(new hs(.42,.14,8,14),He(3754058));o.rotation.x=Math.PI/2,o.position.set(-22+a*.92,.18,-7.5),t.add(o)}P(t,-20,.08,-6.5,4.6,.04,.12,15185750),Ln(t,"STRENGTH & STAMINA",-20,.32,-6.45,3.5,"#fff0bd"),Ln(t,"YARD & CREWS",-8,3.75,-23.72,4.2,"#fff0bd");for(let a=0;a<3;a++){const o=-13.7+a*2.1,c=-19.3;for(let l=0;l<3;l++)P(t,o,.12+l*.13,c,1.5,.1,1.1,11635291);P(t,o,.72,c,1.15,.8,.8,14201211,!0),P(t,o,1.13,c,.12,.025,.8,15979675),e.push({x:o,z:c,w:1.5,d:1.1})}P(t,-14,.8,-10,1.25,1.6,1,5274996,!0),e.push({x:-14,z:-10,w:1.3,d:1.1}),P(t,-13,.45,-22,1.2,.9,.7,12351585,!0);for(const a of[-12.8,-11.8]){const o=new Ot(new Ks(.22,.7,8),He(15179868));o.position.set(a,.35,-8),t.add(o)}P(t,-14,.8,-13,.07,1.6,.07,4027008),P(t,-14,.12,-12.7,.65,.08,.55,4027008),P(t,-13,.75,-15.5,1.1,1.5,.75,12891029,!0),e.push({x:-13,z:-15.5,w:1.1,d:.75});for(const a of[-22,-18]){const o=Dh(a===-22?11059896:13998968);o.position.set(a,0,2),t.add(o),e.push({x:a,z:2,w:1.7,d:3.1})}if(Ls(t,-24,-24,0),Ls(t,7,-26,1),r>=3)for(const a of[-17,-8,1])P(t,a,6.75,-29,4,.1,5,3563385);return Ph(t),{root:t,barriers:e,roofs:i}}function Td(n,t,e,i,r=7589002,s=0){const a=av(n,t,r,!1,s);return a.position.set(e,.08,i),a}function Ih(n){return[1.4,1.4,1.4,.74,1.35,1.15,1.9,2.05,1.55,.9][n]??1}function Ev(n,t,e){for(const i of n){if(i.mode==="air"){i.velocity.y-=9.8*t,i.position.addScaledVector(i.velocity,t),i.position.y<=.12&&(i.position.y=.12,i.mode="ground",i.velocity.set(0,0,0),i.settled=!0,i.hitAt=e.now,e.onDamage?.(i,i.item.fragile?4:2,"fall")),i.mesh.position.copy(i.position);continue}if(i.mode!=="truck")continue;const r=Math.abs(e.acceleration)*.19+Math.abs(e.yawRate*e.speed)*.65,s=i.secured?.045:.16,a=ue.clamp(-e.yawRate*e.speed*.025,-s,s),o=ue.clamp(-e.acceleration*.018,-s,s);if(i.angular.x=ue.damp(i.angular.x,a,7,t),i.angular.z=ue.damp(i.angular.z,o,7,t),i.mesh.position.copy(i.position),i.mesh.position.x+=i.angular.x,i.mesh.position.z+=i.angular.z,i.mesh.rotation.z=-i.angular.x*.2,i.mesh.rotation.x=i.angular.z*.2,!i.secured&&r>1.05&&e.now-i.hitAt>.8&&(i.hitAt=e.now,e.onDamage?.(i,Math.max(1,Math.round(i.item.vulnerability/8)),"rough driving")),!i.secured&&e.rearOpen&&i.position.z>e.back-2.25&&e.speed>3.4&&e.acceleration<-2.5&&e.now-i.hitAt>.2){e.truck.updateMatrixWorld(!0);const l=e.truck.userData.cargo.localToWorld(i.position.clone().add(new A(0,.25,1.4)));e.truck.parent?.add(i.mesh),i.mode="air",i.fallen=!0,i.position.copy(l),i.mesh.position.copy(l);const u=e.truck.rotation.y+e.truck.userData.trailer.rotation.y;i.mesh.rotation.set(0,u+(i.item.rotated?Math.PI/2:0),0),i.velocity.set(Math.sin(u)*e.speed*.3,1.2,Math.cos(u)*e.speed*.3),i.rails?.removeFromParent(),e.onFall?.(i)}}}function Tv(n,t){const e=new Map,i=new Map,r=(m,h)=>`${m.toFixed(3)}:${h.toFixed(3)}`,s=(m,h)=>{const b=r(m,h);return e.has(b)||(e.set(b,new A(m,0,h)),i.set(b,[])),b},a=(m,h)=>{if(m===h)return;const b=e.get(m).distanceTo(e.get(h));i.get(m).push({to:h,cost:b}),i.get(h).push({to:m,cost:b})},o=[...new Set([...Ha,n.x,t.x])].sort((m,h)=>m-h);for(const m of Sn){const h=o.map(b=>s(b,m));for(let b=1;b<h.length;b++)a(h[b-1],h[b])}for(const m of Ha){const h=Sn.map(b=>s(m,b));for(let b=1;b<h.length;b++)a(h[b-1],h[b])}const c=s(n.x,n.z),l=s(t.x,t.z),u=m=>Sn.reduce((h,b)=>Math.abs(b-m)<Math.abs(h-m)?b:h),f=m=>Ha.reduce((h,b)=>Math.abs(b-m)<Math.abs(h-m)?b:h);a(c,s(n.x,u(n.z))),Math.abs(f(n.x)-n.x)<4.5&&a(c,s(f(n.x),n.z)),a(l,s(t.x,u(t.z)));const d=new Map([[c,0]]),p=new Map,_=new Set(e.keys());for(;_.size;){let m="",h=1/0;for(const b of _){const R=d.get(b)??1/0;R<h&&(h=R,m=b)}if(!m||m===l)break;_.delete(m);for(const b of i.get(m)??[]){const R=h+b.cost;R<(d.get(b.to)??1/0)&&(d.set(b.to,R),p.set(b.to,m))}}const y=[];for(let m=l;m&&(y.push(e.get(m).clone()),m!==c);m=p.get(m));return y.reverse(),y[0]?.distanceTo(n)??!0?[n.clone(),t.clone()]:y.filter((m,h)=>h===0||m.distanceToSquared(y[h-1])>.01)}const Xe={name:"Jems",icon:"◆",color:"#8655cf"},io={truck:[{id:"base",name:"Original",price:0,color:"#e6ad51",detail:"Gelb · klassischer MOVECRAFT-LKW"},{id:"city",name:"Stadt",price:25,color:"#cbdde1",detail:"Cremeweiß · blaue Akzente"},{id:"build",name:"Bau",price:40,color:"#ec8538",detail:"Baustellenorange · Warnmarkierungen"},{id:"premium",name:"Premium",price:65,color:"#303638",detail:"Anthrazit · goldene Details"}],person:[{id:"standard",name:"Standard",price:0,color:"#e6ad51",detail:"Gelbes Shirt · blaue Kappe"},{id:"build",name:"Bau",price:15,color:"#f29a32",detail:"Bauhelm · Warnweste"},{id:"logistics",name:"Logistik",price:20,color:"#4a8051",detail:"Grüne Kappe · Lieferweste"},{id:"workshop",name:"Werkstatt",price:25,color:"#ba4e42",detail:"Rotes Shirt · Werkzeug"},{id:"elite",name:"Elite",price:40,color:"#7960a2",detail:"Violett · futuristische Ausrüstung"}]};function wv(n,t){const i={truck:{base:"17 198 135 135",city:"17 502 122 135",build:"17 797 125 145",premium:"17 1087 125 145"},person:{standard:"130 660 180 215",build:"327 660 180 215",logistics:"520 660 180 215",workshop:"713 660 180 215",elite:"905 660 180 215"}}[n][t];if(i)return`<svg viewBox="${i}" role="img" aria-label="${t} ${n} concept preview"><image href="./references/${n}-models.png" x="0" y="0" width="1122" height="1402"/></svg>`;const r=io[n].find(o=>o.id===t)?.color??"#e6ad51",s=t==="premium"||t==="workshop"?"#263b42":"#31586a";if(n==="truck")return`<svg viewBox="0 0 160 95" role="img" aria-label="${t} truck preview"><ellipse cx="81" cy="82" rx="68" ry="9" fill="#b3c5bc"/><path d="M53 40 L145 28 L145 63 L52 74 Z" fill="${s}"/><path d="M56 35 L142 24 L145 29 L53 42 Z" fill="${r}"/><path d="M49 45 L138 34 L138 60 L49 71 Z" fill="#d9c8a6"/><path d="M49 69 L143 57 L143 68 L49 79 Z" fill="${s}"/><path d="M10 55 L22 28 Q25 24 31 25 L48 31 L55 49 L55 75 L9 75 Z" fill="${r}" stroke="${s}" stroke-width="2" stroke-linejoin="round"/><path d="M24 32 L44 35 L49 51 L18 51 Z" fill="#72a3ad"/><path d="M15 62 L50 65" stroke="${t==="premium"?"#d6ac54":t==="build"?"#fff2ca":"#e8e5d3"}" stroke-width="3"/><circle cx="31" cy="76" r="9" fill="#263b42"/><circle cx="31" cy="76" r="4" fill="#a2b3aa"/><circle cx="111" cy="69" r="9" fill="#263b42"/><circle cx="111" cy="69" r="4" fill="#a2b3aa"/>${t==="build"?'<path d="M14 67 L23 67 M29 68 L38 68" stroke="#fff4dc" stroke-width="3"/><circle cx="31" cy="23" r="4" fill="#ffc54f"/>':""}${t==="premium"?'<path d="M55 43 L142 32" stroke="#d6ac54" stroke-width="2"/>':""}</svg>`;const a=t==="build"?"#ffba38":t==="elite"?"#ebe6f2":t==="logistics"?"#366c42":"#2d5166";return`<svg viewBox="0 0 110 110" role="img" aria-label="${t} person preview"><ellipse cx="55" cy="104" rx="27" ry="5" fill="#b5c4b9"/><path d="M39 76 L52 76 L51 101 L37 101 Z M58 76 L72 76 L74 101 L59 101 Z" fill="#344e60"/><path d="M30 50 Q55 43 80 50 L77 83 L33 83 Z" fill="${r}" stroke="${s}" stroke-width="2"/><path d="M38 54 L45 54 L45 77 L66 77 L66 54 L73 54 L73 80 L38 80 Z" fill="${t==="elite"?"#d8d4e5":t==="workshop"?"#384954":"#eadfbc"}"/><circle cx="55" cy="35" r="22" fill="#edbf97"/><circle cx="47" cy="36" r="2.5" fill="#27343a"/><circle cx="63" cy="36" r="2.5" fill="#27343a"/><path d="M50 44 Q55 48 60 44" stroke="#9e6e58" fill="none" stroke-width="2"/><path d="M33 22 Q35 9 55 9 Q76 9 78 22 L77 27 L33 27 Z" fill="${a}" stroke="${s}" stroke-width="2"/><path d="M34 26 Q55 24 77 27 L78 32 L29 32 Z" fill="${a}"/>${t==="build"?'<path d="M36 62 L75 62" stroke="#fff4c9" stroke-width="4"/>':""}${t==="elite"?'<circle cx="34" cy="38" r="6" fill="#7656a5"/><circle cx="76" cy="38" r="6" fill="#7656a5"/>':""}</svg>`}function Av(n){return Math.max(0,Math.min(5,Math.ceil(Math.max(0,n)/20)))}function Rv(n){return!n.test&&n.jems<10?!1:(n.test||(n.jems-=10),n.cash+=2e3,n.earned+=2e3,!0)}function Cv(n,t,e){const i=io[t].find(r=>r.id===e);return!i||n.ownedSkins[t].includes(e)||!n.test&&n.jems<i.price?!1:(n.test||(n.jems-=i.price),n.ownedSkins[t].push(e),n.selectedSkins[t]=e,!0)}const rt=n=>document.querySelector(n);rt("#app").innerHTML=`<div id="world"></div><header><div class="wallet"><div class="cash-wallet"><small>COINS</small><strong id="cash"></strong></div><div class="jem-wallet" title="${Xe.name}"><small>JEMS</small><strong><span>${Xe.icon}</span> <span id="jem-count">0</span></strong></div><span id="cash-mode"></span></div><button id="mode-toggle" title="Switch game mode">DEV</button><button id="daily-button" title="Shop">🛒</button><button id="settings" title="Settings">⚙</button><button id="test-toggle" title="Development tools">🧪</button></header>
<div id="right-rail"><aside id="job-card"><button id="job-toggle"><span class="job-icon">▣</span><span><small id="job-label">YOUR NEXT MOVE</small><strong id="job-title">Small beginnings</strong></span><b>⌄</b></button><div id="job-body"><div id="job-step"></div><div class="progress"><i id="job-progress"></i></div><div id="job-count"></div><div id="job-value"></div></div></aside><button id="company-toggle" class="side-button">▥ Company</button><aside id="company-panel" hidden><h2>Your company</h2><div id="company-stats"></div><div id="fleet-list"></div></aside></div>
<aside id="tests" hidden><h3>DEVELOPMENT WORKBENCH</h3><p class="dev-note">Unlimited money and direct test actions are active.</p><div class="test-grid"><button data-test="job">New job</button><button data-test="pack">Pack all</button><button data-test="deliver">Deliver all</button><button data-test="home">Back to yard</button></div><h3>INSPECT EACH UPGRADE</h3><div id="upgrade-tests" class="test-grid"></div><button data-test="restart">Reset test career…</button></aside>
<div id="money-stream"></div><div id="status-bar" role="status"><div id="status-main"><b id="hint-key">E</b><span><small id="status-kicker">NEXT ACTION</small><strong id="nav-label">Job board</strong><em id="nav-distance"></em></span></div><div id="notice"><b id="notice-icon"><svg viewBox="0 0 36 36" aria-hidden="true"><path d="M15.2 4.8 Q18 1 20.8 4.8 L33.8 28.2 Q36 33 31 33 H5 Q0 33 2.2 28.2 Z" fill="#c83d39"/></svg><span>!</span></b><span id="notice-text"></span></div><div id="purchase" hidden><strong id="purchase-name"></strong><div class="progress"><i id="purchase-progress"></i></div><small id="purchase-detail">STAND STILL TO INVEST</small></div></div><aside id="tutorial-card" hidden><small>TUTORIAL</small><h2 id="tutorial-title"></h2><ul id="tutorial-points"></ul><div class="tutorial-actions"><button id="tutorial-skip">Skip tutorial</button><button id="tutorial-next">Got it</button></div></aside><nav id="camera-controls"><button id="camera-follow" title="Follow">◎</button><button id="zoom-in">＋</button><button id="zoom-out">−</button><button id="help">?</button></nav><button id="stuck-button" hidden>Got stuck?</button><footer><button data-action="interact"><b>E</b><span>Interact</span></button><button data-action="cab"><b>F</b><span>Cab</span></button><button data-action="rotate"><b>R</b><span>Rotate</span></button><button data-action="rear"><b>G</b><span>Rear</span></button></footer><dialog id="dialog"></dialog>`;document.querySelector("footer")?.insertAdjacentHTML("beforeend",'<button data-action="secure"><b>Q</b><span>Secure</span></button>');document.documentElement.style.setProperty("--premium-color",Xe.color);rt("#job-count").insertAdjacentHTML("afterend",'<div id="job-score"></div>');let Uh=!1,X=wh(),Qt=null;for(const n of["movecraft-rewrite-v1","movecraft-update-backup"])try{const t=localStorage.getItem(n);if(t){Qt=JSON.parse(t);break}}catch{}try{if(Qt?.company&&(X=fv(Qt.company)),Qt&&Qt.worldVersion!==2){const n=t=>{t[0]>120?t[0]+=bd.destination-144:t[0]>45&&(t[0]+=bd.pickup-72)};for(const t of Qt.loads??[])t.mode!=="truck"&&n(t.position);Qt.truck&&(Qt.truck.position=[0,0,0],Qt.truck.yaw=0),Qt.player=[-6,0,1],Qt.navLeg="",Qt.navIndex=0,Qt.navPath=[],Qt.worldVersion=2}}catch{}let Sr=!0,yr=!0,ls=!0,cs=!0,pi=.35,gl=!0,ro=null;try{const n=JSON.parse(localStorage.getItem("movecraft-audio-v1")??"{}");Sr=n.effects??Sr,yr=n.ambient??yr,ls=n.music??ls,cs=n.vehicle??cs,pi=n.volume??pi}catch{}const Te=new gp;Te.background=new Yt(13032672);Te.fog=new Dc(13032672,115,215);const Si=new Wx({antialias:!0});Si.setPixelRatio(Math.min(devicePixelRatio,1.5));Si.shadowMap.enabled=!0;Si.shadowMap.type=Od;Si.toneMapping=Mc;Si.toneMappingExposure=1.15;rt("#world").appendChild(Si.domElement);const Ue=new So(-18,18,12,-12,.1,450);Ue.position.set(22,29,26);Ue.zoom=.78;const hn=new $x(Ue,Si.domElement);hn.enablePan=!1;hn.enableDamping=!0;hn.minZoom=.55;hn.maxZoom=3.5;hn.minPolarAngle=.35;hn.maxPolarAngle=1.03;Te.add(new zp(16775135,6588822,2));const Bi=new Vp(16772305,2.7);Bi.position.set(-25,45,20);Bi.castShadow=!0;Bi.shadow.mapSize.set(2048,2048);Object.assign(Bi.shadow.camera,{left:-32,right:32,top:32,bottom:-32,near:.1,far:100});Bi.shadow.normalBias=.035;Te.add(Bi,Bi.target);const To=bv();Te.add(To.root);const Vs=new ce;Vs.name="navigation-route-guide";Te.add(Vs);const Nh=7.2,Fh=()=>Re+6,Ki=new ce;Ki.name="navigation-parking-guide";const Oh=new On({color:16768099,transparent:!0,opacity:.68,depthWrite:!1,side:sn,polygonOffset:!0,polygonOffsetFactor:-3}),wo=new Ot(new Bn(Nh,1),Oh);wo.rotation.x=-Math.PI/2;wo.position.y=.105;Ki.add(wo);Ki.visible=!1;Te.add(Ki);let Na="",Xt=Hc(0,X.levels.truck,0),jn=Xt.fromSite.x,ti=Xt.fromSite.z??0,wn=Xt.toSite.x,An=Xt.toSite.z??0,hr=Lh(X),Un=os(jn,Xt.fromSite.variant,!1,ti),ei=os(wn,Xt.toSite.variant,!0,An);Te.add(hr.root,Un.root,ei.root);const fr=zc(15313475),at=fr.root;function so(){const n=zc(15313475,0,X.selectedSkins.person,X.levels.worker),t=fr.root.userData.rig?.body;t&&(at.remove(t),Nn(t));const e=n.root.userData.rig.body;n.root.remove(e),at.add(e),fr.root.userData.rig=n.root.userData.rig,fr.animate=n.animate}so();at.position.set(-6,0,1);Te.add(at);const Vc=new Ot(new Oc(.38,.46,32),new On({color:16773043,side:sn}));Vc.rotation.x=-Math.PI/2;Vc.position.y=.04;at.add(Vc);let Lt,Re=4.2,mi=5,Ge=!1,Qe=!1,Ft=null,Jt=!1,Ae=0,Cs=0,_l=100,pr=1,br=1,fc=0,ao=0,xe=null;const re=[],Zi=[],yn=new Set,lr=new ce;lr.name="crosswise-padded-cargo-bars";let Fe=null,Vn=[];const pc=new Map,qn=new Ot(new Bn(1,1),new On({color:16763725,transparent:!0,opacity:.82,side:sn,depthWrite:!1}));qn.rotation.x=-Math.PI/2;qn.position.y=.095;qn.visible=!1;qn.renderOrder=4;Te.add(qn);const Li=new Ot(new Bn(1,1),new On({color:13974845,transparent:!0,opacity:.72,side:sn,depthWrite:!1}));Li.rotation.x=-Math.PI/2;Li.position.y=.105;Li.visible=!1;Li.renderOrder=5;Te.add(Li);let us=0,$n=0,mr="",Mn=0,ie=Number(Qt?.tutorialStep??0),be=0,xl=0,vl=0,oo=0,mn=0,Wa="",Xa="",$a="",wd=-1,lo=-10,qr=!1,Wn=0,Kn=!1,Is=0;const cr=[],mc=[],gc=[],Pv=at.position.clone(),Bh=new A,Ci=new A,Le=new Set,Wc=new A(0,1,0),Dn=new Ot(new Qi(1,.04,1),new On({color:2981988,transparent:!0,opacity:.58,depthTest:!0,depthWrite:!1}));Te.add(Dn);Dn.renderOrder=10;const Xc=new Pp(new Lp(Dn.geometry),new ch({color:1527614,depthTest:!0,depthWrite:!1}));Xc.renderOrder=11;Dn.add(Xc);Dn.visible=!1;let ci=[],Ya=[],is=[];const ni=n=>Lt.userData.cargo.localToWorld(n.clone()),yi=n=>Lt.userData.cargo.worldToLocal(n.clone()),Us=n=>Lt.localToWorld(n.clone());let Ns=null,co=null,uo=null,Jr=null,Qr=null,Ad=-1,Rd=-1,Cd=-1,Pd=-1;function Ts(){localStorage.setItem("movecraft-audio-v1",JSON.stringify({effects:Sr,ambient:yr,music:ls,vehicle:cs,volume:pi}))}function $c(){const n=ro??(ro=new AudioContext);if(n.resume(),Ns)return n;const t=n.createBuffer(1,n.sampleRate*2,n.sampleRate),e=t.getChannelData(0);for(let s=0;s<e.length;s++)e[s]=(Math.random()*2-1)*.24;const i=n.createBufferSource();i.buffer=t,i.loop=!0;const r=n.createBiquadFilter();return r.type="lowpass",r.frequency.value=720,Ns=n.createGain(),i.connect(r).connect(Ns).connect(n.destination),i.start(),Qr=n.createOscillator(),Qr.type="sine",co=n.createGain(),Qr.connect(co).connect(n.destination),Qr.start(),Jr=n.createOscillator(),Jr.type="sawtooth",uo=n.createGain(),Jr.connect(uo).connect(n.destination),Jr.start(),n}function Er(n){if(!Sr)return;const t={coin:[660,880],purchase:[520,780,1040],reward:[620,880,1175],error:[220,165],door:[300,225]}[n],e=$c();t.forEach((i,r)=>{const s=e.createOscillator(),a=e.createGain(),o=e.currentTime+r*.07;s.type=n==="error"||n==="door"?"triangle":"sine",s.frequency.setValueAtTime(i,o),a.gain.setValueAtTime(1e-4,o),a.gain.exponentialRampToValueAtTime(Math.max(.001,pi*.09),o+.012),a.gain.exponentialRampToValueAtTime(1e-4,o+.13),s.connect(a).connect(e.destination),s.start(o),s.stop(o+.14)})}function Dv(){if(!ro||!Ns||!co||!uo||!Jr||!Qr)return;const n=ro.currentTime;Ns.gain.setTargetAtTime(yr?pi*.065:0,n,.25),co.gain.setTargetAtTime(ls?pi*.042:0,n,.25),uo.gain.setTargetAtTime(cs&&Jt?pi*(.012+Math.min(1,Math.abs(Ae)/10)*.055):0,n,.12),Jr.frequency.setTargetAtTime(58+Math.abs(Ae)*13,n,.12);const t=Math.floor(be/1.5);t!==Ad&&(Ad=t,Qr.frequency.setTargetAtTime([174.6,220,196,261.6,174.6,233,196,146.8][t%8],n,.16));const e=Math.floor(be/11);yr&&e!==Rd&&(Rd=e,e>0&&ii(1050+e%3*120,.06))}function ii(n=500,t=.1){if(Sr)try{const e=$c(),i=e.createOscillator(),r=e.createGain();i.frequency.value=n,r.gain.setValueAtTime(pi*.1,e.currentTime),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+t),i.connect(r).connect(e.destination),i.start(),i.stop(e.currentTime+t)}catch{}}function Gt(n){rt("#notice-text").textContent=n;const t=/^(No |There |Clear |Park |Stand |Move around|Step |Brake |Stop |Finish |Cannot|Can't|The driver door|This furniture|Place .* on)/i.test(n);rt("#notice").classList.toggle("error",t),t&&be-Pd>1.2&&(Pd=be,Er("error")),oo=4,rt("#status-bar").classList.add("show-notice")}function ji(n){Le.clear(),rt("#dialog").innerHTML=`<button class="close" aria-label="Close">×</button>${n}`,rt("#dialog").open||rt("#dialog").showModal(),rt("#dialog .close").onclick=()=>rt("#dialog").close()}const Fi=[["Welcome to MOVECRAFT",["W A S D · move","Settings ⚙ always has a Got stuck? rescue"],"#status-bar"],["Use the highlighted action",["E · interact","Only the needed buttons appear now"],'[data-action="interact"]'],["Your first job",["The top bar shows one next action","The job card tracks your move"],"#job-card"]];function Zs(){const n=ie>=8||X.jobs>0,t=!rt("#tutorial-card").hidden;document.body.classList.toggle("tutorial-active",t),document.body.dataset.tutorialStage=t?ie<=1?"intro":ie===2?"job":ie>=8?"final":"move":"off";const e=new Set(n?["interact","cab","rotate","rear","secure"]:[...ie>=1?["interact"]:[],...ie>=5?["rotate"]:[],...ie>=6?["cab"]:[],...ie>=7?["rear","secure"]:[]]);document.querySelectorAll("footer [data-action]").forEach(i=>i.classList.toggle("tutorial-hidden",!e.has(i.dataset.action)))}function Js(){const n=rt("#tutorial-card"),t=rt("#camera-controls");if(n.hidden){t.style.top="",t.style.transform="",t.style.visibility="";return}const e=n.getBoundingClientRect(),i=t.getBoundingClientRect(),r=rt("footer").getBoundingClientRect().top,s=r-10,a=e.bottom+14;if(a+i.height>s){t.style.visibility="hidden";return}t.style.visibility="",t.style.top=`${a}px`,t.style.transform="none"}new ResizeObserver(Js).observe(rt("#tutorial-card"));window.addEventListener("resize",Js);function Pi(n,t,e="Got it",i=""){document.querySelectorAll(".tutorial-focus").forEach(r=>r.classList.remove("tutorial-focus")),rt("#tutorial-title").textContent=n,rt("#tutorial-points").innerHTML=t.map(r=>`<li>${r}</li>`).join(""),rt("#tutorial-next").textContent=e,rt("#tutorial-card").hidden=!1,rt("#tests").hidden=!0,Zs(),i&&document.querySelector(i)?.classList.add("tutorial-focus"),Js()}function rs(n){X.jobs>0&&ie<8&&(ie=8),n==="job"&&ie<=3?(ie=4,Pi("Follow the route",["Blue arrows show the way"],"Got it","#status-bar")):n==="lift"&&ie<=4?(ie=5,Pi("Load furniture",["Green = fits · red = blocked","E places · R rotates"],"Got it",'[data-action="interact"]')):n==="loaded"&&ie<=5?(ie=6,Pi("Get in the truck",["F · enter the cab"],"Got it",'[data-action="cab"]')):n==="cab"&&ie<=6?(ie=7,Pi("Secure and drive",["Q locks a bar behind up to two rows","Green cells are protected from damage","W/S drives · A/D steers"],"Got it","#status-bar")):n==="delivered"&&ie<=7?(ie=7,Pi("Finish the move",["Park in the yellow bay","Then choose your reward"],"Got it","#job-card")):n==="paid"&&ie<=8&&(ie=8,Pi("Build the company",["Truck upgrades add a row and improve the vehicle","The shop has gifts and skins","⚙ Settings has Got stuck? and audio controls"],"Finish tutorial","#daily-button")),Zs(),Pe()}rt("#tutorial-next").onclick=()=>{ie<2?(ie++,Pi(Fi[ie][0],Fi[ie][1],"Got it",Fi[ie][2])):(ie===2&&(ie=3),rt("#tutorial-card").hidden=!0,Js(),document.querySelectorAll(".tutorial-focus").forEach(n=>n.classList.remove("tutorial-focus"))),Zs(),Pe()};rt("#tutorial-skip").onclick=()=>{ie=8,rt("#tutorial-card").hidden=!0,Js(),document.querySelectorAll(".tutorial-focus").forEach(n=>n.classList.remove("tutorial-focus")),Zs(),Pe()};function Ws(){const n=Lt,t=n?.position.clone()??new A,e=n?.rotation.clone()??new vi;for(const s of re)s.mode==="truck"&&Te.attach(s.mesh);n&&Nn(n),mi=7+X.levels.truck,Re=.2+mi*.8,Lt=lv(mi,X.levels.truck,X.levels.truck,X.selectedSkins.truck),Lt.position.copy(t),Lt.rotation.copy(e),Te.add(Lt);for(const s of re)s.mode==="truck"&&(Lt.userData.cargo.add(s.mesh),s.mesh.position.copy(s.position),s.rails=void 0,Yc(s));js();const i=new ce;i.position.set(4.69,.35,-1.95),P(i,0,.55,.65,.06,1.1,1.28,Lt.userData.bodyColor,!0),P(i,0,1.4,.65,.06,.62,1.28,3495010,!0);const r=P(i,.035,1.4,.65,.025,.48,1.02,9091781);r.material=new qi({color:8895944,transparent:!0,opacity:.38,roughness:.12}),P(i,-.035,.68,.65,.035,.34,.95,7692094,!0);for(const s of[.04,1.26])P(i,.055,.85,s,.08,1.7,.06,3230808,!0);P(i,.075,.78,1.02,.035,.08,.24,2506569,!0),Lt.add(i),Lt.userData.cabDoor=i,kh(),n&&Po()}function Lv(){Nn(hr.root),hr=Lh(X),Te.add(hr.root),jc(),Fn(),Po()}function kh(){const n=e=>e*e*(3-2*e),t=n(ue.clamp(pr*2,0,1));Lt.userData.rampPivot.rotation.x=ue.lerp(-Math.PI/2,Math.atan(.78/2.2),t),Lt.userData.cabDoor&&(Lt.userData.cabDoor.rotation.y=n(fc)*1.42)}function Qs(n){n.mode==="truck"?(Lt.userData.cargo.add(n.mesh),n.mesh.position.copy(n.position)):n.mode==="hand"?(at.add(n.mesh),n.mesh.position.set(0,.95,Ys(n))):(Te.add(n.mesh),n.mesh.position.copy(n.position)),n.mesh.rotation.set(0,n.item.rotated?Math.PI/2:0,0),Yc(n)}function Yc(n){n.rails?.removeFromParent(),n.rails=void 0}function js(){for(const n of[...lr.children])Nn(n);Lt.userData.cargo.add(lr);for(const n of yn){const t=new Ot(new Tn(.095,.095,4*Ut,12),new qi({color:4096379,roughness:.9}));t.rotation.z=Math.PI/2,t.userData.owned=!0,t.position.set(3,1.3,.2+(n===mi?n:n+.5)*Ut),lr.add(t);for(const e of[1.4,4.6]){const i=new Ot(new Mo(.13,10,8),new qi({color:9095348,roughness:.8}));i.position.set(e,1.3,t.position.z),i.userData.owned=!0,lr.add(i)}}for(const n of re){if(n.mode!=="truck"||n.shelf)continue;const t=Math.round((n.position.z-.2)/Ut-Je(n.item)[1]/2),e=Je(n.item)[1];if(n.secured=[...yn].some(i=>t>=i-2&&t+e<=i),n.secured){const[i,r]=Je(n.item),s=new Ot(new Bn(i*Ut-.06,r*Ut-.06),new On({color:5548651,transparent:!0,opacity:.3,depthWrite:!1,side:sn}));s.rotation.x=-Math.PI/2,s.userData.owned=!0,s.position.set(n.position.x,.805,n.position.z),lr.add(s)}}}function Iv(){if(Jt||Ft||Fe||!gr())return Gt("Stand on the loading deck to lock a crossbar.");const n=Zc();if(!n||n.mode!=="truck")return Gt("Stand close to an item on the deck.");const t=Je(n.item)[1],e=Math.round((n.position.z-.2)/Ut-t/2),i=Math.min(mi,Math.floor((e+t-1)/3)*3+2);if(!yn.has(i)&&re.some(r=>r.mode==="truck"&&!r.shelf&&(()=>{const s=Je(r.item)[1],a=Math.round((r.position.z-.2)/Ut-s/2);return a<=i&&a+s>i})()))return Gt("Clear the full-width bar row before securing this section.");yn.has(i)?yn.delete(i):yn.add(i),js(),Gt(yn.has(i)?"Crossbar locked: the two rows toward the cab are protected.":"Crossbar removed: this section is unsecured."),ii(yn.has(i)?600:350),Pe()}function Xs(n=!1){if(Ge&&!Qe&&!n)return Gt("Finish this move and collect payment first.");const t=`${Xt.fromSite?.id??""}->${Xt.toSite?.id??""}`;for(const s of re)Nn(s.mesh);re.length=0,Zi.length=0,yn.clear(),lr.clear(),Ft=null,Fe=null,us=X.jobs;const e=$n;do $n=Math.floor(Math.random()*7);while($n===e);mr="",Mn=0;const i=Math.max(X.jobs,Math.floor((X.levels.truck+X.levels.worker)*.45));let r=0;do Xt=Hc(i,X.levels.truck,X.jobs*11+$n+r++);while(`${Xt.fromSite.id}->${Xt.toSite.id}`===t&&r<10);Ge=!0,Qe=!1,jn=Xt.fromSite.x,ti=Xt.fromSite.z??0,wn=Xt.toSite.x,An=Xt.toSite.z??0,Nn(Un.root),Nn(ei.root),Un=os(jn,Xt.fromSite.variant+$n,!1,ti),ei=os(wn,Xt.toSite.variant+$n,!0,An),Te.add(Un.root,ei.root),zh(),_c();for(const s of Xt.items){const a={item:s,mesh:Gc(s.model),mode:"ground",position:new A(jn+s.pickupX,.12,ti+s.pickupZ),velocity:new A,angular:new A,hitAt:-10,settled:!0,secured:!1,damage:0};re.push(a),Qs(a)}Fn(),Gt(`New move: ${Xt.from} → ${Xt.to}. Follow the ground arrows.`),rs("job"),Pe()}function tr(){return Ge&&re.length>0&&re.every(n=>n.mode==="delivered")}function zh(){const n=[],t=[...Xt.items].sort((e,i)=>i.w*i.d-e.w*e.d||e.id-i.id);for(const e of t){const i=e.w*Ut+.32,r=e.d*Ut+.32,s=[];for(let o=ti-4.5+r/2;o<=ti+4.45-r/2;o+=.48)for(let c=jn-10.25+i/2;c<=jn-.95-i/2;c+=.48)s.push({x:c,z:o,rank:Math.sin(e.id*17.37+c*8.1+o*3.7)});s.sort((o,c)=>o.rank-c.rank);const a=s.find(({x:o,z:c})=>!Un.barriers.some(l=>Math.abs(o-l.x)<(i+l.w)/2+.18&&Math.abs(c-l.z)<(r+l.d)/2+.18)&&!n.some(l=>Math.abs(o-l.x)<(i+l.w)/2+.25&&Math.abs(c-l.z)<(r+l.d)/2+.25));a&&(e.pickupX=a.x-jn,e.pickupZ=a.z-ti,n.push({x:a.x,z:a.z,w:i,d:r}))}}function _c(){pc.clear();const n=re.filter(r=>r.mode==="delivered").map(r=>({x:r.position.x,z:r.position.z,w:r.item.w*Ut,d:r.item.d*Ut})),t=wn-10.1,e=An-4.9,i=(us*7+$n*3)%11;for(const r of[...Xt.items].sort((s,a)=>a.w*a.d-s.w*s.d||s.id-a.id)){if(re.some(a=>a.item.id===r.id&&a.mode==="delivered"))continue;let s;for(let a=0;a<121&&!s;a++){const o=(Math.floor(a/11)*3+i)%11,c=(a*7+i*2)%11;if(o>11-r.d||c>11-r.w)continue;const l=t+(c+r.w/2)*Ut,u=e+(o+r.d/2)*Ut,f=r.w*Ut/2,d=r.d*Ut/2,p=ei.barriers.some(y=>Math.abs(l-y.x)<f+y.w/2+.18&&Math.abs(u-y.z)<d+y.d/2+.18),_=n.some(y=>Math.abs(l-y.x)<f+y.w/2+.18&&Math.abs(u-y.z)<d+y.d/2+.18);!p&&!_&&(s=new A(l,.12,u),n.push({x:l,z:u,w:f*2,d:d*2}))}s&&pc.set(r.id,s)}}function Gh(n){const t=pc.get(n.item.id);if(!t)return null;const e=at.position.clone().add(new A(0,0,1.1).applyQuaternion(at.quaternion));return{target:t,close:Math.hypot(e.x-t.x,e.z-t.z)<.9}}function Hh(n){return n.x>wn-10.5&&n.x<wn-.5&&n.z>An-5&&n.z<An+4.9}function qc(){return ni(new A(3,0,(Re-2.2)/2))}function Ao(){const n=re.some(s=>s.mode==="ground"&&!s.fallen),t=!Ge||Qe?"yard":n?"pickup":"delivery";if(t==="yard")return{leg:t,point:new A(2,0,-13)};const i=(t==="pickup"?jn:wn)+4,r=t==="pickup"?ti:An;return{leg:t,point:new A(i,0,r-2.1)}}function Kc(n=Ao().point){if(Math.abs(Ae)>=.35)return!1;const t=Nh/2,e=Fh()/2;for(const i of[.8,5.2])for(const r of[-2.35,Re+.25]){const s=ni(new A(i,0,r));if(Math.abs(s.x-n.x)>t||Math.abs(s.z-n.z)>e)return!1}return!0}function ho(){return Math.round(Xt.reward*Math.max(.5,$s()/100))}function $s(){return Math.max(0,100-re.reduce((n,t)=>n+(t.damage??0),0))}function Vh(){const n=new Map;for(const t of Zi){const e=`${t.item} · ${t.reason}`;n.set(e,(n.get(e)??0)+t.points)}return[...n].map(([t,e])=>`<li><span>${t}</span><b>−${e}</b></li>`).join("")}function xc(n=1){if(!tr()||Qe)return;const t=ho()*n;Eo(X,t);const e=Av($s());X.jems+=e,X.jobs++,Qe=!0,Fn(),ii(880,.3),Er("reward"),Gt(`+$${t} · +${e} ${Xe.name} · Move completed!`),rs("paid"),Pe()}function fo(){!tr()||Qe||rt("#dialog").open||!rt("#tutorial-card").hidden||(ji(`<div class="reward-modal"><small>MOVE COMPLETE</small><h2>$${ho().toLocaleString("en-US")}</h2><p>${Xt.from} → ${Xt.to}</p><p>Care score: ${$s()}/100 · −${100-$s()} points</p>${Zi.length?`<ul class="damage-list">${Vh()}</ul>`:"<p>No cargo damage.</p>"}<button id="claim-normal">Collect money</button><button id="claim-double">▶ Watch video · collect $${(ho()*2).toLocaleString("en-US")}</button><p class="fine">The reward video is a short in-game preview.</p></div>`),rt("#claim-normal").onclick=()=>{rt("#dialog").close(),xc(1)},rt("#claim-double").onclick=()=>{const n=rt("#dialog");n.innerHTML='<div class="reward-video"><b>MOVECRAFT</b><p>Your crew makes every move count.</p><div class="progress"><i></i></div></div>',window.setTimeout(()=>{n.close(),xc(2)},3e3)})}function Uv(){if(X.levels.truck<gn.truck)return"truck"}function Nv(){if(!(X.levels.truck<gn.truck)){if(X.levels.yard<gn.yard&&X.fleet.length>=X.levels.yard)return"yard";if(X.levels.hire<gn.hire&&X.fleet.length<X.levels.yard)return"hire";if(Ch(X)&&!X.finished)return"factory"}}function Fv(n){if(X.test)return 0;if(n.income!==void 0)return Math.min(1,mn/.8);if(n.upgrade)return Math.min(1,(X.contributions[n.upgrade]??0)/Hs(X,n.upgrade));if(n.fleet!==void 0){const t=X.fleet[n.fleet];return t?Math.min(1,(t.contribution??0)/(1e3*(t.level+1))):0}return Math.min(1,mn/1.8)}function Fn(){for(const i of ci)Nn(i.root);ci=[];const n=(i,r,s,a,o,c,l=0)=>{const u=Td(r,s,0,0,7589002,l);u.position.copy(a),Te.add(u),ci.push({key:i,root:u,position:a,upgrade:o,fleet:c})};n("job","NEXT MOVE",Ge&&!Qe?"ACTIVE":"ACCEPT",new A(-10,.06,1)),ci[ci.length-1].root.visible=!Ge||Qe,X.finished&&(ci[ci.length-1].root.visible=!1);const t={truck:new A(-.45,.06,-1.25),worker:new A(-20,.06,-4.8),yard:new A(-8,.06,-20.7),hire:new A(-8,.06,-20.7),factory:new A(15,.06,-15)},e=[Uv(),X.levels.worker<gn.worker?"worker":void 0,Nv()].filter((i,r,s)=>!!i&&s.indexOf(i)===r);for(const i of e){const r=Hs(X,i),s=(X.contributions[i]??0)/r;n(i,Mr[i],X.test?"FREE":`$${r.toLocaleString("en-US")}`,t[i],i,void 0,s)}X.fleet.forEach((i,r)=>{if((i.pending??0)>0){const s=Td("COLLECT CREW",`$${i.pending}`,0,0,7589002,0),a=new A(8+r*4.8,.05,-16.5);s.position.copy(a),Te.add(s),ci.push({key:`income-${r}`,root:s,position:a,income:r});return}if(i.level<4){const s=(i.level+1)*1e3;n(`fleet-${r}`,`TRUCK ${r+2} · LV ${i.level}`,X.test?"FREE":`$${s.toLocaleString("en-US")}`,new A(8+r*4.8,.05,-16.5),void 0,r,(i.contribution??0)/s)}})}function Wh(n){const t=X.levels[n],e=pv(X,n);if(e)return Gt(e);Er("purchase"),n==="truck"&&Ws(),n==="worker"&&so(),["yard","hire"].includes(n)?Lv():Fn(),ii(700,.2);const i={truck:[`Loading deck: ${7+t} → ${7+X.levels.truck} rows`,`Top speed: ${Math.round((8.5+t*1.3)*3.6)} → ${Math.round((8.5+X.levels.truck*1.3)*3.6)} km/h`,X.levels.truck===1?"Cab, roof and first small-item shelf added":X.levels.truck===2?"More enclosed body panels and shelf space":X.levels.truck===3?"Small-item shelves expanded":X.levels.truck===4?"Full-height enclosed body completed":"Trailer length and load capacity increased",...X.levels.truck>=gn.truck?["Company-base upgrade unlocked"]:[]],worker:[`Worker level: ${t} → ${X.levels.worker}`,"More stamina before resting","Furniture carrying speed increased"],yard:[`Base level ${X.levels.yard}`,"One new employee parking bay",`${X.levels.yard} bays available`],hire:[`${X.fleet.length} crews employed`,"New employee added","New employee truck included"],factory:["MOVECRAFT completed","Furniture company purchased","Coming soon!"],cargo:["Included in the central truck upgrade"],gear:["Included in the central truck upgrade"],fleet:["Employee truck upgraded"]};X.levels[n]>t&&ji(`<div class="upgrade-modal"><small>UPGRADE COMPLETE</small><div class="upgrade-badge">✓</div><h2>${Mr[n]}</h2><ul>${i[n].map(r=>`<li>${r}</li>`).join("")}</ul><button class="modal-ok">Continue</button></div>`),document.querySelector(".modal-ok")?.addEventListener("click",()=>rt("#dialog").close()),Gt(`${Mr[n]} · Level ${X.levels[n]}`),Pe()}function po(){if(!(Jt||Fe||Ft))return ci.find(n=>{const t=Number(n.root.userData.padHalfWidth??1.3),e=Number(n.root.userData.padHalfDepth??.85);return n.root.visible&&Math.abs(at.position.x-n.position.x)<t*1.16&&Math.abs(at.position.z-n.position.z)<e*1.2&&Math.abs(at.position.y-n.position.y)<1.15})}function Dd(n,t=!1){if(!t&&be-wd<.14)return;wd=be,be-Cd>.32&&(Cd=be,Er("coin"));const e=document.querySelector(".wallet").getBoundingClientRect(),i=n.position.clone().project(Ue),r=(i.x+1)/2*innerWidth,s=(1-i.y)/2*innerHeight,a=e.left+e.width/2,o=e.top+e.height/2,c=t?r:a,l=t?s:o,u=t?a:r,f=t?o:s,d=document.createElement("i");d.textContent="$",d.style.left=`${c}px`,d.style.top=`${l}px`,d.style.setProperty("--money-x",`${u-c}px`),d.style.setProperty("--money-y",`${f-l}px`),d.classList.toggle("payout",t),rt("#money-stream").appendChild(d),d.addEventListener("animationend",()=>d.remove(),{once:!0}),window.setTimeout(()=>d.remove(),1200)}function Ov(n){const t=po();if(!t||Ci.length()>.2){mn=0,Wa="",rt("#purchase").hidden=!0,t||(Xa="",$a="");return}if(Xa===t.key||(t.key!==Wa&&(mn=0,Wa=t.key),t.upgrade&&Ah(X,t.upgrade)))return;if((t.upgrade||t.fleet!==void 0)&&$a!==t.key){rt("#purchase").hidden=!0;return}if(mn+=n,t.upgrade&&!X.test){X.contributions??={};const s=Hs(X,t.upgrade),a=X.contributions[t.upgrade]??0,o=Math.min(X.cash,s-a,s*n/1.8);X.cash-=o,X.contributions[t.upgrade]=a+o,mn=Math.min(mn,(a+o)/s*1.8),o>0&&Dd(t)}if(t.fleet!==void 0&&!X.test){const s=X.fleet[t.fleet],a=1e3*(s.level+1),o=s.contribution??0,c=Math.min(X.cash,a-o,a*n/1.8);X.cash-=c,s.contribution=o+c,mn=Math.min(mn,(o+c)/a*1.8),c>0&&Dd(t)}const e=X.test?Math.min(1,mn/1.8):Fv(t);t.root.userData.setProgress?.(e),rt("#purchase").hidden=!1,rt("#purchase-name").textContent=t.key==="job"?"Accept the next move":t.income!==void 0?`Collect $${X.fleet[t.income]?.pending??0}`:t.upgrade?Mr[t.upgrade]:"Upgrade fleet truck",rt("#purchase-progress").style.width=`${Math.min(100,e*100)}%`;const i=t.upgrade?Hs(X,t.upgrade):t.fleet!==void 0?1e3*(X.fleet[t.fleet].level+1):0,r=Math.min(i,Math.round(i*e));if(rt("#purchase-detail").textContent=i?X.test?"DEVELOPMENT MODE · FREE":`${Math.round(e*100)}% · $${r.toLocaleString("en-US")} OF $${i.toLocaleString("en-US")} INVESTED`:"STAND STILL TO ACTIVATE",mn>=1.8)if(Xa=t.key,mn=0,$a="",rt("#purchase").hidden=!0,t.key==="job")Xs();else if(t.income!==void 0){const s=_v(X,t.income);Gt(`+$${s} · Employee route complete`),Fn(),Pe()}else t.upgrade?Wh(t.upgrade):t.fleet!==void 0&&mv(X,t.fleet)&&(jc(),Fn(),ji(`<div class="upgrade-modal"><small>VEHICLE UPGRADED</small><div class="upgrade-badge">✓</div><h2>Employee truck ${t.fleet+2}</h2><ul><li>Faster route</li><li>$125 more income per trip</li><li>Vehicle level ${X.fleet[t.fleet].level}</li></ul><button class="modal-ok">Continue</button></div>`),rt(".modal-ok").onclick=()=>rt("#dialog").close(),Pe())}function Bv(){const n=yi(at.position);return n.x>1.15&&n.x<4.85&&n.z>=.2&&n.z<=Re&&at.position.y>.6}function ta(n){const t=yi(n);if(t.x>1.4&&t.x<4.6){if(t.z>=.2&&t.z<=Re)return .78;if(pr>.94&&t.z>Re&&t.z<Re+2.2)return .78*(Re+2.2-t.z)/2.2}return 0}function kv(n,t=1/0){let e=-1/0;for(const i of re){if(i.mode!=="truck"&&i.mode!=="ground")continue;const[r,s]=Je(i.item),a=i.mode==="truck"?yi(n):n,o=i.position,c=o.y+Ih(i.item.model);c<=t+.14&&Math.abs(a.x-o.x)<r*Ut/2-.08&&Math.abs(a.z-o.z)<s*Ut/2-.08&&(e=Math.max(e,c))}return e}function mo(n,t=1/0){return Math.max(ta(n),kv(n,t))}function gr(){if(Bv())return!0;const n=yi(at.position);return pr>.94&&n.x>1.4&&n.x<4.6&&n.z>Re&&n.z<=Re+2.25}function Zc(){let n,t=2.75;for(const e of re){if(["hand","air","delivered"].includes(e.mode)||e.mode==="truck"&&!gr())continue;const i=e.mesh.getWorldPosition(new A),r=Math.hypot(i.x-at.position.x,i.z-at.position.z);r<t&&Math.abs(i.y-at.position.y)<1.5&&(n=e,t=r)}return n}function Ld(n,t){return re.every(e=>{if(e===t||["hand","air","delivered"].includes(e.mode))return!0;const i=e.mesh.getWorldPosition(new A),[r,s]=Je(e.item);return Math.abs(n.x-i.x)>r*Ut/2+.38||Math.abs(n.z-i.z)>s*Ut/2+.38})}function zv(n){const t=n.mesh.getWorldPosition(new A),[e,i]=Je(n.item),r=n.mode==="truck",s=r?n.position:t,o=[new A(s.x-e*Ut/2-.62,0,s.z),new A(s.x+e*Ut/2+.62,0,s.z),new A(s.x,0,s.z-i*Ut/2-.62),new A(s.x,0,s.z+i*Ut/2+.62)].map(u=>r?ni(u.setY(.78)):u.setY(0)).filter(u=>{if(ds(u,.3)||!Ld(u,n)||r&&!Ro(u))return!1;for(let f=1;f<=6;f++){const d=at.position.clone().lerp(u,f/6);if(!Ld(d,n)||ds(d,.24))return!1}return!0});if(!o.length)return null;const c=o.sort((u,f)=>u.distanceToSquared(at.position)-f.distanceToSquared(at.position))[0];c.y=ta(c);const l=Math.atan2(t.x-c.x,t.z-c.z);return{to:c,yaw:l,item:t}}function Jc(){if(!Ft)return null;const[n,t]=Je(Ft.item),e=new A(0,0,.65+Math.max(n,t)*Ut/2).applyQuaternion(at.quaternion).add(at.position),i=yi(e),r=re.filter(o=>!o.shelf).map(o=>({...o.item,x:o.mode==="truck"?(o.position.x-1.4)/Ut-Je(o.item)[0]/2:o.item.x,z:o.mode==="truck"?(o.position.z-.2)/Ut-Je(o.item)[1]/2:o.item.z,location:o.mode==="truck"?"truck":"pickup"})),s=ue.clamp(Math.round((i.x-1.4)/Ut-n/2),0,4-n),a=ue.clamp(Math.round((i.z-.2)/Ut-t/2),0,mi-t);return{x:s,z:a,w:n,d:t,valid:Th(r,Ft.item,s,a,4,mi)&&!(X.levels.truck===0&&[2,5].some(o=>a<=o&&a+t>o))&&![...yn].some(o=>a<=o&&a+t>o)}}function Ys(n){const[,t]=Je(n.item);return .62+t*Ut/2}function Qc(n){if(X.levels.truck<3)return null;const[t,e]=Je(n.item),i=yi(at.position);if(t>1||e>1||i.z<.15||i.z>2.85)return null;const r=i.x<3?1.72:4.28;if(Math.abs(i.x-r)>.72)return null;const s=re.filter(o=>o.shelf&&o!==n),a=[.72,1.45,2.18].find(o=>!s.some(c=>Math.abs(c.position.x-r)<.3&&Math.abs(c.position.z-o)<.35));return a===void 0?null:new A(r,1.4,a)}function Gv(){if(Fe||Jt)return;if(tr()&&!Qe)return fo();const n=po();if(n){n.key==="job"?Xs():n.key==="collect"?xc():n.upgrade||n.fleet!==void 0?($a=n.key,mn=0,Gt("Investment started. Stay on this field to complete it.")):Gt("Stand inside the markers to build.");return}if(Ft){const a=Ft,o=a.mesh.getWorldPosition(new A);let c,l;if(gr()){const p=Qc(a),_=Jc();if(!p&&!_.valid)return Gt("No clear space nearby. Press R to rotate or move along the truck.");p?(c=p,a.shelf=!0,a.secured=!0,a.item.x=0,a.item.z=Math.round((p.z-.2)/Ut)):(a.item.x=_.x,a.item.z=_.z,c=new A(1.4+(_.x+_.w/2)*Ut,.78,.2+(_.z+_.d/2)*Ut),a.shelf=!1),l="truck"}else{const p=Hh(at.position),_=Gh(a);if(p&&!_)return Gt("This furniture has no clear delivery spot. Move away from the doorway and try again.");if(p&&_&&!_.close)return Gt(`Place ${a.item.name} on its highlighted spot.`);if(c=p&&_?_.target.clone():at.position.clone().add(new A(0,0,1.1).applyQuaternion(at.quaternion)),c.y=.12,l=p&&_?"delivered":"ground",ds(c,.3))return Gt("There is a wall here. Step into the room.")}Te.attach(a.mesh);const u=a.mesh.getWorldQuaternion(new xi),f=l==="delivered"?0:(l==="truck"?Lt.rotation.y:0)+(a.item.rotated?Math.PI/2:0),d=new xi().setFromEuler(new vi(0,f,0));Fe={kind:"drop",load:a,time:0,duration:.5,from:o,to:l==="truck"?ni(c):c,mode:l,fromQuaternion:u,toQuaternion:d},a.position.copy(c),Ft=null;return}const t=Zc();if(!t)return Gt("Stand close to furniture.");if(Ge&&!Qe){const{leg:a,point:o}=Ao(),c=t.mode==="ground"&&a==="pickup",l=t.mode==="truck"&&a==="delivery";if((c||l)&&!Kc(o))return Gt(`Park the complete truck inside the yellow ${a} bay first.`)}const e=t.mesh.getWorldPosition(new A),i=zv(t);if(!i)return Gt("Move around the furniture so there is room to lift it safely.");const r=at.position.clone(),s=ue.clamp(r.distanceTo(i.to)/3.8,.18,.55);Te.attach(t.mesh),Fe={kind:"lift",load:t,time:0,duration:s+(.62+t.item.weight*.34)/(1+X.levels.worker*.23),from:e,to:new A,mode:"hand",approachFrom:r,approachTo:i.to,approachYaw:i.yaw,approachDuration:s},t.mode="hand",t.secured=!1,Yc(t),js(),t.velocity.set(0,0,0),t.angular.set(0,0,0),t.shelf=!1,ii(260)}function Hv(n){if(!Fe)return;Fe.time+=n;const t=Fe,e=t.approachDuration??0,i=t.time<e,r=Math.min(1,Math.max(0,(t.time-e)/(t.duration-e))),s=r*r*(3-2*r),a=at.userData.rig;if(i&&t.approachFrom&&t.approachTo){const c=Math.min(1,t.time/e),l=c*c*(3-2*c);if(at.position.lerpVectors(t.approachFrom,t.approachTo,l),fr.animate(be,!0,!1,!1),t.approachYaw!==void 0){const u=Math.atan2(Math.sin(t.approachYaw-at.rotation.y),Math.cos(t.approachYaw-at.rotation.y));at.rotation.y+=u*(1-Math.exp(-12*n))}t.load.mesh.position.copy(t.from);return}a.body.rotation.x=.42*Math.sin(r*Math.PI),a.body.position.y=-.19*Math.sin(r*Math.PI),a.arms.forEach(c=>c.rotation.x=-1.35*Math.sin(Math.min(1,r*1.35)*Math.PI/2));const o=t.kind==="lift"?ue.smoothstep(r,.08,.94):s;if(t.kind==="lift"&&t.to.copy(at.position).add(new A(0,.95,Ys(t.load)).applyQuaternion(at.quaternion)),t.kind==="lift"){const c=t.from.clone();c.y=Math.max(t.to.y,t.from.y+.95),o<.58?t.load.mesh.position.lerpVectors(t.from,c,ue.smoothstep(o/.58,0,1)):t.load.mesh.position.lerpVectors(c,t.to,ue.smoothstep((o-.58)/.42,0,1))}else t.load.mesh.position.lerpVectors(t.from,t.to,o),t.fromQuaternion&&t.toQuaternion&&t.load.mesh.quaternion.slerpQuaternions(t.fromQuaternion,t.toQuaternion,o);t.load.mesh.rotation.x=ue.damp(t.load.mesh.rotation.x,0,8,n),t.load.mesh.rotation.z=ue.damp(t.load.mesh.rotation.z,0,8,n),t.time>=t.duration&&(t.load.mode=t.mode,t.mode==="truck"&&(t.load.fallen=!1),t.mode==="delivered"&&(t.load.item.rotated=!1),t.kind==="lift"?(Ft=t.load,at.add(t.load.mesh),t.load.mesh.position.set(0,.95,Ys(t.load)),t.load.mesh.rotation.set(0,t.load.item.rotated?Math.PI/2:0,0),rs("lift")):(Qs(t.load),t.mode==="truck"&&js(),Po(),t.mode==="truck"&&rs("loaded")),t.load.velocity.set(0,0,0),t.load.angular.set(0,0,0),t.load.settled=!0,Fe=null,a.body.rotation.x=0,a.body.position.y=0,ii(520),tr()&&(Fn(),Gt("Everything delivered. Choose your reward."),rs("delivered"),Is=1.6),Pe())}function Vv(){if(Jt||Fe||Ft)return;const n=yi(at.position);if(Math.hypot(n.x-3,n.z-Re)>4.8)return Gt("Walk to the rear of your truck.");if(n.x>1.2&&n.x<4.8&&n.z>Re-.2&&n.z<Re+2.4)return Gt("Step to the side of the ramp.");br=br>.5?0:1,ii(300,.25)}function Wv(){if(!(Fe||Ft||xe)){if(Jt){if(Math.abs(Ae)>.35)return Gt("Brake to a stop first.");if(!Kc())return Gt("Park the whole truck inside the yellow bay. Exit when it turns green.");Ae=0,ao=1,Er("door"),xe={entering:!1,time:0,swapped:!1},Gt("Opening the driver door…");return}if(at.position.distanceTo(Us(new A(5.3,0,-1)))>3.8)return Gt("The driver door is at the front right.");ao=1,Er("door"),xe={entering:!0,time:0,swapped:!1,from:at.position.clone()},Ci.set(0,0,0),Gt("Opening the driver door…")}}function Xv(n){if(!xe)return;xe.time+=n;const t=xe.entering?.72:.5;if(xe.entering&&!xe.swapped&&xe.from&&xe.time>=.14){const e=Us(new A(5.15,0,-1.15)),i=ue.smoothstep((xe.time-.14)/.55,0,1);e.y=ta(e),at.position.lerpVectors(xe.from,e,i),at.rotation.y=Lt.rotation.y-Math.PI/2,fr.animate(be,!0,!1,!1)}if(!xe.swapped&&xe.time>=t){if(xe.swapped=!0,xe.entering)Jt=!0,at.visible=!1,Gt(br?"Rear lowered. Raise it with G when loading is complete.":"W/S drive and brake. F exits when stopped."),rs("cab");else{Jt=!1,at.visible=!0;let e=Us(new A(5.5,0,-1));for(const i of[5.5,.5]){const r=Us(new A(i,0,-1));if(!ds(r,.28)){e=r;break}}at.position.copy(e)}Pe()}xe.time>=(xe.entering?.82:.9)&&(ao=0),xe.time>=(xe.entering?1.18:1.35)&&(xe=null)}function ds(n,t=.25){return[...To.barriers,...hr.barriers,...Un.barriers,...ei.barriers].some(e=>Math.abs(n.x-e.x)<e.w/2+t&&Math.abs(n.z-e.z)<e.d/2+t)}function Xh(){for(const n of[1.25,2.15,3,3.85,4.75])for(let t=-2.3;t<=Re+.3;t+=.72)if(ds(t<0?Us(new A(n,0,t)):ni(new A(n,0,t)),.12))return!0;return!1}function $v(n){if(!Ft)return!1;const[t,e]=Je(Ft.item),i=n.clone().add(new A(0,0,Ys(Ft)).applyAxisAngle(Wc,at.rotation.y)),r=t*Ut/2,s=e*Ut/2,a=Math.abs(Math.cos(at.rotation.y)),o=Math.abs(Math.sin(at.rotation.y)),c=r*a+s*o,l=r*o+s*a;return i.x-c<In.minX||i.x+c>In.maxX||i.z-l<In.minZ||i.z+l>In.maxZ?!0:[...To.barriers,...hr.barriers,...Un.barriers,...ei.barriers].some(u=>Math.abs(i.x-u.x)<c+u.w/2+.04&&Math.abs(i.z-u.z)<l+u.d/2+.04)}function Ro(n,t=Kn,e=at.position.y){if(n.x<In.minX||n.x>In.maxX||n.z<In.minZ||n.z>In.maxZ||ds(n)||$v(n))return!1;const i=yi(n);if(i.x>1.15&&i.x<4.85&&i.z>-2.4&&i.z<.2||!t&&Math.abs(mo(n,e+.2)-e)>.22||i.z>=.2&&i.z<Re&&(Math.abs(i.x-1.4)<.15||Math.abs(i.x-4.6)<.15)&&e<(X.levels.truck>0?2.75:1.02))return!1;for(const r of re)if(r.mode==="truck"||r.mode==="ground"){const[s,a]=Je(r.item),o=r.mode==="truck"?r.position:r.mesh.getWorldPosition(new A),c=r.mode==="truck"?i:n,l=o.y+Ih(r.item.model);if(e<l-.08&&Math.abs(c.x-o.x)<s*Ut/2+.16&&Math.abs(c.z-o.z)<a*Ut/2+.16)return!1}return!0}function Yv(n){if(Jt||xe||Fe||rt("#dialog").open)return Ci.set(0,0,0),qr=!1,!1;const t=Number(Le.has("KeyD")||Le.has("ArrowRight"))-Number(Le.has("KeyA")||Le.has("ArrowLeft")),e=Number(Le.has("KeyW")||Le.has("ArrowUp"))-Number(Le.has("KeyS")||Le.has("ArrowDown")),i=Ue.getWorldDirection(new A);i.y=0,i.normalize();const r=new A(-i.z,0,i.x).multiplyScalar(t).addScaledVector(i,e);qr=Le.has("ShiftLeft")&&!Ft&&_l>(qr?2:18)&&r.lengthSq()>0,_l=ue.clamp(_l+n*(qr?-27:16+X.levels.worker*2),0,100);const s=Ft?Math.max(1.35,3.1-Ft.item.weight*.25/(1+X.levels.worker*.3)):qr?6.7:3.9;r.normalize().multiplyScalar(s*(1+X.levels.worker*.07)),Ci.lerp(r,1-Math.exp(-10*n));const a=at.position.clone();for(let o=0;o<4;o++)for(const c of["x","z"]){const l=at.position.clone();if(l[c]+=Ci[c]*n/4,Ro(l)){if(!Kn){const u=mo(l,at.position.y+.2);at.position.y-u>.22?(Kn=!0,Wn=Math.min(0,Wn),l.y=at.position.y):l.y=u}at.position.copy(l)}}if(Ci.length()>.1){const o=Math.atan2(Ci.x,Ci.z),c=Math.atan2(Math.sin(o-at.rotation.y),Math.cos(o-at.rotation.y));at.rotation.y+=c*(1-Math.exp(-14*n))}return a.distanceTo(at.position)>.003}function qv(){Jt||xe||Fe||rt("#dialog").open||Kn||(Kn=!0,Wn=5.4,ii(390,.08))}function Kv(n){if(Jt||xe){Kn=!1,Wn=0;return}const t=mo(at.position,at.position.y+.16);if(!Kn&&at.position.y>t+.08&&(Kn=!0,Wn=Math.min(0,Wn)),!Kn){at.position.y=t;return}const e=at.position.y;Wn-=12.5*n,at.position.y+=Wn*n;const i=mo(at.position,e+.12);Wn<=0&&at.position.y<=i&&e>=i-.06&&(at.position.y=i,Wn=0,Kn=!1),at.position.y<-2&&Co()}function Co(n=!0){if(Jt)return;const t=at.position.clone(),e=[];for(const r of[2,3,4.2,5.5])for(let s=0;s<16;s++)e.push(new A(t.x+Math.cos(s*Math.PI*2/16)*r,0,t.z+Math.sin(s*Math.PI*2/16)*r));const i=e.find(r=>(r.y=ta(r),Ro(r,!1,r.y)));at.position.copy(i??new A(-6,0,1)),Wn=0,Kn=!1,Ci.set(0,0,0),gc.length=0,Pv.copy(at.position),rt("#stuck-button").hidden=!0,n&&Gt("Moved you to the nearest clear space."),Pe()}function $h(){const n=qc(),t=Lt.rotation.y,e=Lt.userData.trailer,i=e.rotation.y,r=new A(3,0,(Re-2.2)/2),s=[];for(const c of[3.5,5.5,8])for(let l=0;l<12;l++)s.push(n.clone().add(new A(Math.cos(l*Math.PI*2/12)*c,0,Math.sin(l*Math.PI*2/12)*c)));const a=Lt.position.clone();e.rotation.y=0;const o=s.find(c=>(Lt.position.copy(c).sub(r.clone().applyAxisAngle(Wc,t)),Lt.updateMatrixWorld(!0),!(Xh()||is.some(u=>u.visible&&c.distanceTo(u.position)<4.2))));o||(Lt.position.copy(a),e.rotation.y=i),Lt.updateMatrixWorld(!0),Ae=0,Cs=0,mc.length=0,cr.length=0,Bh.copy(Lt.position),rt("#stuck-button").hidden=!0,Gt(o?"Moved the truck to the nearest clear space.":"No clear rescue position found nearby."),Pe()}function Po(){!Jt&&!Ro(at.position,!1,at.position.y)&&Co(!1)}function Zv(n){if(!Jt||xe)return{acceleration:0,yawRate:0};const t=Number(Le.has("KeyW")||Le.has("ArrowUp"))-Number(Le.has("KeyS")||Le.has("ArrowDown")),e=Number(Le.has("KeyA")||Le.has("ArrowLeft"))-Number(Le.has("KeyD")||Le.has("ArrowRight")),i=Ae;Ae+=t*(t*Ae<0?10:4+X.levels.truck*.45)*n,t||(Ae*=Math.exp(-1.7*n)),!t&&Math.abs(Ae)<.04&&(Ae=0),Ae=ue.clamp(Ae,-4,8.5+X.levels.truck*1.3),Cs=ue.damp(Cs,e*.52,6,n);const r=Lt.userData.trailer;r.rotation.y=0,Lt.updateMatrixWorld(!0);const s=Ae*Math.tan(Cs)/Math.max(3.1,Re*.65),a=new A(3,0,(Re-2.2)/2),o=ni(a),c=Lt.position.clone(),l=Lt.rotation.y;Lt.rotation.y+=s*n,o.addScaledVector(new A(-Math.sin(Lt.rotation.y),0,-Math.cos(Lt.rotation.y)),Ae*n),Lt.position.copy(o).sub(a.applyAxisAngle(Wc,Lt.rotation.y)),Lt.updateMatrixWorld(!0);let u=!1,f=!1;u=Xh();const d=2.4;(o.x<In.minX+d||o.x>In.maxX-d||o.z<In.minZ+d||o.z>In.maxZ-d)&&(u=!0);for(const p of is)p.visible&&o.distanceTo(p.position)<3.55&&(u=!0,f=!0);u&&(Lt.position.copy(c),cr.push(be),Lt.rotation.y=l,Lt.updateMatrixWorld(!0),Ae=-i*.12,be-lo>.7&&(lo=be,ii(120,.18),f&&Gt("Both trucks stopped safely. Reverse away to continue.")));for(const p of Lt.userData.wheels??[])p.rotation.x-=Ae*n/.46;for(const p of Lt.userData.frontWheels??[])p.rotation.y=ue.damp(p.rotation.y,Cs*.72,9,n);return{acceleration:(Ae-i)/n,yawRate:s}}function jc(){Ya.forEach(n=>Nn(n.root)),Ya=[],is.forEach(Nn),is=[];for(let n=0;n<X.levels.hire;n++){const t=zc(n%2?4761009:15117649,n%3),e=Gc(3);e.scale.setScalar(.65),e.position.set(0,.9,.58),t.root.add(e),Te.add(t.root),Ya.push(t)}X.fleet.forEach((n,t)=>{const e=new ce,i=[];e.name=`fleet-${t}`,P(e,0,1.05,0,2.7,1.7,2,15707460,!0),P(e,0,1.9,2.8,2.8,2.8,3.6,n.level>1?16048049:9221554,!0),P(e,0,1.65,-1.04,2.2,.55,.04,8501962),P(e,0,2.03,0,2.85,.18,2.1,16174952,!0),P(e,0,.53,-1.12,2.75,.2,.18,3626603,!0);for(const r of[-1,1])P(e,r*1.36,1.6,0,.04,.6,1.3,8501962),P(e,r*.95,.95,-1.06,.42,.2,.06,16772523,!0),P(e,r*1.43,1.05,2.8,.05,.23,3.3,15381834),P(e,r*1.1,1.35,4.63,.05,1.7,.04,7442072);P(e,0,1.45,4.64,.045,2,.035,7442072);for(const r of[-1.3,1.3])for(const s of[0,3.5]){const a=new ce;a.position.set(r,.4,s);const o=new Ot(new Tn(.4,.4,.25,12),new qi({color:3163992}));o.rotation.z=Math.PI/2;for(const c of[-1,1])P(o,0,c*.13,.16,.07,.02,.25,15779678);o.userData.owned=!0,a.add(o),e.add(a),i.push(a)}e.userData.wheels=i,Te.add(e),is.push(e)})}function Id(n,t){const e=8+t*4.8,i=(n.route??t%3)%3,r=new A(e,0,-9),s=i===1?-30:42,a=i===1?-88:100,o=i===2?Sn[2]:Sn[0];return[r,new A(e,0,12),new A(s,0,12),new A(s,0,o),new A(a,0,o),new A(a,0,12),new A(e,0,12),r]}function Jv(n,t){if(t<=0)return{position:n[0].clone(),yaw:0};const e=n.slice(1).map((s,a)=>s.distanceTo(n[a])),i=e.reduce((s,a)=>s+a,0);let r=ue.clamp(t,0,.9999)*i;for(let s=0;s<e.length;s++){if(r<=e[s]){const a=r/Math.max(.001,e[s]),o=n[s].clone().lerp(n[s+1],a),c=n[s+1].clone().sub(n[s]);return{position:o,yaw:Math.atan2(c.x,c.z)}}r-=e[s]}return{position:n.at(-1).clone(),yaw:0}}function Qv(n){const t=X.fleet.map(s=>s.pending??0),e=Sv(X,n);e&&oo<=0&&Gt(`+$${e} · Your company is working`),Ya.forEach((s,a)=>{const o=X.fleet[a];s.root.visible=!o||o.phase<.15||o.phase>.85;const c=(Math.sin(be*1.3+a)+1)/2;s.root.position.set(8+a*4.8,0,-3-c*6),s.root.rotation.y=Math.cos(be*1.3+a)>0?Math.PI:0,s.animate(be,!0,!0)});const i=[],r=ni(new A(3,0,(Re-2.2)/2));X.fleet.forEach((s,a)=>{const o=is[a];if(!o)return;s.route??=a%3;const c=Jv(Id(s,a),s.phase),l=i.some(d=>d.distanceTo(c.position)<3.3),u=c.position.distanceTo(Id(s,a)[0])>4,f=u&&r.distanceTo(c.position)<3.5;if((l||f)&&o.userData.safePosition)s.phase-=n/Rh(s),o.position.copy(o.userData.safePosition);else{const d=o.userData.safePosition?c.position.distanceTo(o.userData.safePosition):0;o.position.copy(c.position),o.rotation.y=c.yaw+Math.PI;for(const p of o.userData.wheels??[])p.rotation.x-=d/.4;o.userData.safePosition=c.position.clone()}i.push(o.position.clone())}),X.fleet.some((s,a)=>(s.pending??0)>t[a])&&(Fn(),Gt("An employee truck returned. Collect its income at the parking bay."),Pe())}function jv(n){const t=Jt?ni(new A(3,0,2)):at.position;for(const s of[...To.roofs,...hr.roofs,...Un.roofs,...ei.roofs]){const a=Math.abs(t.x-s.bounds.x)<s.bounds.w/2+1&&Math.abs(t.z-s.bounds.z)<s.bounds.d/2+1;for(const o of[s.mesh,...s.walls??[]]){const c=o.material;c.opacity=ue.damp(c.opacity,a?.035:1,6,n),c.depthWrite=c.opacity>.5,o.castShadow=c.opacity>.5}}const e=yi(at.position),i=!Jt&&e.x>1&&e.x<5&&e.z>-.1&&e.z<Re+2.5,r=[Lt.userData.roof,...Lt.userData.cargoWalls??[]];for(const s of r){const a=s.material;a.opacity=ue.damp(a.opacity,i||Jt?.025:1,7,n),a.depthWrite=a.opacity>.5,s.castShadow=a.opacity>.5}}function tM(){if(!Ge||Qe)return{point:new A(-10,0,1),text:"Accept a move at your job board"};if(tr())return{point:new A(wn+2,0,An),text:"Choose your completion reward"};const n=re.find(t=>t.mode==="ground");return n?{point:n.position.clone(),text:n.fallen?"Recover the fallen furniture":"Pick up the furniture"}:{point:new A(wn-5.6,0,An+1),text:"Unload inside the new home"}}function eM(n){if(!Jt)return n;const t=qc(),{leg:e,point:i}=Ao(),r=i.x,s=i.z;if(Math.abs(t.x-r)<10&&Math.abs(t.z-s)<10)return mr=e,Vn=[],Mn=0,{point:new A(r,0,s),text:e==="yard"?"Park fully inside the yellow yard bay":`Park fully inside the yellow ${e} bay`};const a=Vn.length<2?1/0:Math.min(...Vn.slice(1).map((_,y)=>{const m=Vn[y],h=_.x-m.x,b=_.z-m.z,R=h*h+b*b,S=R?ue.clamp(((t.x-m.x)*h+(t.z-m.z)*b)/R,0,1):0;return Math.hypot(t.x-m.x-h*S,t.z-m.z-b*S)}));(mr!==e||!Vn.length||Ae<.05&&a>7)&&(mr=e,Mn=0,Vn=Tv(t,new A(r,0,s)));const o=Vn;let c=0,l=1/0;for(let _=0;_<o.length-1;_++){const y=o[_],m=o[_+1],h=m.x-y.x,b=m.z-y.z,R=h*h+b*b,S=R?ue.clamp(((t.x-y.x)*h+(t.z-y.z)*b)/R,0,1):0,v=Math.hypot(t.x-y.x-h*S,t.z-y.z-b*S)+Math.max(0,Mn-_-1)*2;v<l&&(l=v,c=_)}for(Mn=Math.min(o.length-1,Math.max(Mn,c+1));Mn<o.length-1&&t.distanceTo(o[Mn])<4;)Mn++;const u=o[Mn],f=Math.round(t.distanceTo(u)),d=o[Mn+1];let p=e==="yard"?"Return to your company yard":`Continue to the ${e} house`;if(d){const _=u.clone().sub(t),y=d.clone().sub(u),m=Math.atan2(_.x,_.z),h=Math.atan2(y.x,y.z),b=Math.atan2(Math.sin(h-m),Math.cos(h-m));p=Math.abs(b)<.35?`Continue straight for ${f} m`:`In ${f} m turn ${b>0?"right":"left"}`}else f<18&&(p=e==="yard"?"Park in your company yard":`Park at the ${e} house`);return{point:u,text:p}}function Ud(){for(;Vs.children.length;){const n=Vs.children.pop();n instanceof Ot&&(n.geometry.dispose(),n.material.dispose())}}function nM(){const n=Jt&&Vn.length>1,t=Ao().point;if(Ki.visible=Jt,Ki.position.set(t.x,0,t.z),wo.scale.y=Fh(),!n){Na&&Ud(),Na="";return}const e=Vn,i=`${mr}:${e.map(o=>`${o.x.toFixed(1)},${o.z.toFixed(1)}`).join(";")}`;if(i===Na)return;Na=i,Ud();const r=[];for(let o=0;o<e.length-1;o++){const c=e[o],l=e[o+1],u=l.clone().sub(c),f=u.length();if(f<.5)continue;const d=u.multiplyScalar(1/f),p=new A(-d.z,0,d.x),_=4.2,y=Math.min(2.2,f*.4);for(let m=y;m<f-.45;m+=_){const h=c.clone().addScaledVector(d,m),b=h.clone().addScaledVector(d,.82),R=h.clone().addScaledVector(d,-.58),S=R.clone().addScaledVector(p,.5),g=R.clone().addScaledVector(p,-.5);r.push(b.x,.14,b.z,S.x,.14,S.z,g.x,.14,g.z)}}if(!r.length)return;const s=new Oe;s.setAttribute("position",new de(r,3)),s.computeVertexNormals();const a=new Ot(s,new On({color:7792592,transparent:!0,opacity:.82,side:sn,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3}));a.name="route-ground-arrows",a.renderOrder=3,Vs.add(a)}function tu(){const n=tM(),t=eM(n),e=re.filter(c=>c.mode==="truck").length,i=re.filter(c=>c.mode==="delivered").length;nM(),rt("#jem-count").textContent=X.test?"∞":X.jems.toLocaleString("en-US"),rt("#cash").textContent=X.test?"∞":`$${Math.floor(X.cash).toLocaleString("en-US")}`,rt("#cash-mode").textContent=X.test?"TEST MONEY":`$${Math.floor(X.earned).toLocaleString("en-US")} earned`,rt("#job-title").textContent=Qe?X.finished?"Coming soon":"Move completed!":Ge?Xt.title:"Small beginnings",rt("#job-label").textContent=Ge?`MOVE ${us+1} · LEVEL ${Xt.difficulty}`:"YOUR NEXT MOVE",rt("#job-step").textContent=t.text,rt("#job-progress").style.width=`${Ge?(e+i*2)/re.length/2*100:0}%`,rt("#job-count").textContent=Ge?`${e} in truck  ·  ${i}/${re.length} delivered`:"Your first customer is waiting",rt("#job-score").innerHTML=Ge?`<div class="score-total"><span>CARE SCORE</span><b>${$s()}/100</b></div>${Zi.length?`<ul class="damage-list">${Vh()}</ul>`:"<small>No cargo damage</small>"}`:"",rt("#job-value").textContent=Ge?`${Qe?"COLLECTED":"PAYDAY"}  $${tr()?ho():Xt.reward}`:X.finished?"You built the complete company.":"Start with a job. Build an empire.";const r=Jt?ni(new A(3,0,1)):at.position,s=Math.round(r.distanceTo(t.point));rt("#nav-distance").textContent=Jt&&s>5?`${s} m`:"",rt("#status-kicker").textContent=Jt?`${Math.round(Math.abs(Ae)*3.6)} KM/H · NEXT ACTION`:"NEXT ACTION";let a="E",o=t.text;if(Fe)o=`${Fe.kind==="lift"?"Lifting":"Placing"} ${Fe.load.item.name}`,a="···";else if(Jt)a="W/S",o=t.text;else if(Ft)o=gr()?Qc(Ft)?"Place small item in the rack":Jc()?.valid?"Place in highlighted space · R rotate":"No clear space nearby · R rotate or move closer":qn.visible?`Place ${Ft.item.name} on the marked spot`:"Carry to the truck or into the delivery house";else if(po()){const c=po();o=c.key==="job"?"Accept the next move":c.income!==void 0?`Collect $${X.fleet[c.income]?.pending??0} from this crew`:c.upgrade?`Press E to upgrade ${Mr[c.upgrade]}`:"Press E to upgrade this fleet truck",a="E"}else{const c=Zc(),l=yi(at.position);c?(o=`Lift ${c.item.name} · ${c.item.weight>=4?"HEAVY":c.item.fragile?"FRAGILE":"READY"}`,a="E"):Math.hypot(l.x-5.3,l.z+1)<3?(o="Enter your truck",a="F"):Math.hypot(l.x-3,l.z-Re)<4&&(o=br?"Raise the rear":"Lower the rear",a="G")}rt("#hint-key").textContent=a,rt("#nav-label").textContent=o,rt("#company-stats").innerHTML=`<div><b>${X.jobs}</b><span>YOUR MOVES</span></div><div><b>${X.levels.hire}</b><span>CREWS</span></div><div><b>${X.fleet.length}</b><span>FLEET TRUCKS</span></div>`,rt("#fleet-list").innerHTML=X.fleet.map((c,l)=>`<div class="fleet-row"><span>Truck ${l+2} · Level ${c.level}<small>${(c.pending??0)>0?`$${c.pending} ready at parking bay`:c.phase<.05?"Loading at the base":c.phase<.82?"Driving through the city tunnel":"Returning to its bay"} · ${c.completed} trips</small></span><div class="progress"><i style="width:${Math.max(0,c.phase)*100}%"></i></div></div>`).join(""),document.querySelectorAll("[data-upgrade]").forEach(c=>{const l=c.dataset.upgrade;c.textContent=`${Mr[l]} · ${X.levels[l]}/${gn[l]}`})}function Pe(){if(!Uh)try{localStorage.setItem("movecraft-rewrite-v1",JSON.stringify({worldVersion:2,navPath:Vn.map(n=>n.toArray()),company:X,contract:Xt,jobActive:Ge,jobPaid:Qe,jobNumber:us,routeVariant:$n,secureRows:[...yn],damageLog:Zi,navLeg:mr,navIndex:Mn,tutorialStep:ie,truck:{position:Lt.position.toArray(),yaw:Lt.rotation.y,trailerAngle:Lt.userData.trailer.rotation.y,rear:br},player:at.position.toArray(),loads:re.map(n=>({item:n.item,mode:n.mode==="hand"?"ground":n.mode,position:n.mode==="hand"?at.position.toArray():n.position.toArray(),velocity:n.velocity.toArray(),rotation:n.mesh.rotation.toArray(),settled:n.settled,shelf:n.shelf,secured:n.secured,damage:n.damage,fallen:n.fallen}))}))}catch{}}function iM(){if(Qt)try{Xt=Qt.contract?.fromSite&&Qt.contract?.toSite?Qt.contract:{...Hc(Qt.jobNumber??X.jobs,X.levels.truck,Qt.routeVariant??0),...Qt.contract??{},fromSite:Xt.fromSite,toSite:Xt.toSite},jn=Xt.fromSite.x,ti=Xt.fromSite.z??0,wn=Xt.toSite.x,An=Xt.toSite.z??0,Ge=!!Qt.jobActive,Qe=!!Qt.jobPaid,us=Qt.jobNumber??0,$n=Qt.routeVariant??us%3,Zi.length=0,Zi.push(...Qt.damageLog??[]),yn.clear();for(const n of Qt.secureRows??[])n>=0&&n<=mi&&yn.add(n);mr="",Mn=0,Vn=[],Qt.truck&&(Lt.position.fromArray(Qt.truck.position),Lt.rotation.y=Qt.truck.yaw,Lt.userData.trailer.rotation.y=0,pr=br=Qt.truck.rear),Qt.player&&at.position.fromArray(Qt.player),Ge&&(Nn(Un.root),Nn(ei.root),Un=os(jn,Xt.fromSite.variant+$n,!1,ti),ei=os(wn,Xt.toSite.variant+$n,!0,An),Te.add(Un.root,ei.root),zh(),_c());for(const n of Qt.loads??[]){const t={item:n.item,mesh:Gc(n.item.model),mode:n.mode,position:new A().fromArray(n.position),velocity:new A().fromArray(n.velocity??[0,0,0]),angular:new A,hitAt:-10,settled:n.settled,shelf:n.shelf,secured:n.secured??!1,damage:n.damage??0,fallen:n.fallen??!1};re.push(t),t.mode==="ground"&&!t.fallen&&Un.barriers.some(e=>Math.abs(t.position.x-e.x)<(t.item.w*Ut+e.w)/2+.18&&Math.abs(t.position.z-e.z)<(t.item.d*Ut+e.d)/2+.18)&&t.position.set(jn+t.item.pickupX,.12,ti+t.item.pickupZ),Qs(t),n.rotation&&t.mode!=="truck"&&t.mesh.rotation.fromArray(n.rotation)}Ge&&_c(),js(),Po()}catch{Gt("Saved session could not be fully restored.")}}function rM(){(!Ge||Qe)&&Xs(!0),X.levels.truck<3&&(X.levels.truck=3,X.levels.cargo=X.levels.gear=3,Ws()),Ft=null,Fe=null;for(const n of re)n.mode="ground",n.item.rotated=!1;for(const n of re){let t=!1;for(const e of[!1,!0]){if(t)break;n.item.rotated=e;for(let i=0;i<mi&&!t;i++)for(let r=0;r<4&&!t;r++){const s=re.map(a=>({...a.item,location:a.mode==="truck"?"truck":"pickup"}));if(Th(s,n.item,r,i,4,mi)){n.item.x=r,n.item.z=i;const[a,o]=Je(n.item);n.mode="truck",n.position.set(1.4+(r+a/2)*Ut,.78,.2+(i+o/2)*Ut),n.velocity.set(0,0,0),t=!0}}}Qs(n)}Fn(),Gt(`${re.filter(n=>n.mode==="truck").length}/${re.length} packed. Test packing expands the cargo bay.`),Pe()}function sM(n){if(Math.abs(Ae)>.35)return Gt("Stop before using test tools.");n==="job"&&Xs(!0),n==="pack"&&rM(),n==="deliver"&&(Ge||Xs(),re.forEach((t,e)=>{t.mode="delivered",t.position.set(wn-8+e%3*2.5,.12,An-3+Math.floor(e/3)*2.5),Qs(t)}),Ft=null,Fe=null,Fn(),at.position.set(wn-6,0,An+6),Jt=!1,at.visible=!0,Gt("Delivery complete. Choose your reward."),fo()),n==="home"&&(at.position.set(-6,0,1),Jt=!1,at.visible=!0,Gt("Test teleport: player returned. Truck and cargo stay where they are.")),n==="restart"&&(ji('<h2>Reset test career?</h2><p>This replaces your saved rewrite career with the shabby starting setup.</p><button id="confirm-reset">Reset career</button>'),rt("#confirm-reset").onclick=()=>{Uh=!0,localStorage.removeItem("movecraft-rewrite-v1"),localStorage.removeItem("movecraft-update-backup"),location.reload()}),Pe()}const Yh={interact:Gv,cab:Wv,rotate:()=>{Ft&&!Fe&&(Ft.item.rotated=!Ft.item.rotated,Ft.mesh.rotation.set(0,Ft.item.rotated?Math.PI/2:0,0),Ft.mesh.position.z=Ys(Ft),ii(400))},rear:Vv,secure:Iv};document.querySelectorAll("[data-action]").forEach(n=>n.onclick=()=>Yh[n.dataset.action]());document.querySelectorAll("[data-test]").forEach(n=>n.onclick=()=>sM(n.dataset.test));rt("#upgrade-tests").innerHTML=Object.keys(Mr).filter(n=>["truck","worker","yard","hire","factory"].includes(n)).map(n=>`<button data-upgrade="${n}"></button>`).join("");document.querySelectorAll("[data-upgrade]").forEach(n=>n.onclick=()=>{if(Math.abs(Ae)>.35)return Gt("Stop before upgrading.");const t=n.dataset.upgrade;Wh(t);const e=ci.find(i=>i.key===t);e&&(Jt=!1,at.visible=!0,at.position.copy(e.position).add(new A(0,0,2)),at.position.y=ta(at.position),Ue.zoom=t==="yard"||t==="fleet"?.9:1.6,Ue.updateProjectionMatrix())});rt("#test-toggle").onclick=()=>{rt("#tests").hidden=!rt("#tests").hidden};rt("#company-toggle").onclick=()=>{rt("#company-panel").hidden=!rt("#company-panel").hidden};function aM(){const n=new Date,t=n.toISOString().slice(0,10),e=new Date(n.getTime()-864e5).toISOString().slice(0,10),i=X.daily.lastClaim===t,r=X.daily.lastClaim===e?Math.min(8,X.daily.streak+1):1,s=i?X.daily.streak:r,a=dc(r),o=Array.from({length:8},(c,l)=>{const u=l+1;return`<div class="daily-day ${u===s?"today":u<s?"collected":""}"><span>DAY ${u}</span><strong>$${dc(u)}</strong><small>${u<s||i&&u===s?"✓ Collected":u===s?"Available":"Upcoming"}</small></div>`}).join("");return`<div class="daily-modal"><small>DAILY REWARD</small><h2>${i?"Come back tomorrow":`Claim $${a}`}</h2><div class="daily-days">${o}</div><p>Claim on consecutive days. A missed day restarts the series at Day 1.</p>${i?"":'<button id="claim-daily">Claim reward</button>'}</div>`}let qh="daily";function Ml(n,t){Er("purchase"),Pe(),ji(`<div class="shop-success"><div class="shop-success-icon">✓</div><small>PURCHASE COMPLETE</small><h2>${n}</h2><p>${t}</p><button id="shop-success-close">Continue shopping</button></div>`),rt("#shop-success-close").onclick=()=>go(qh)}function Nd(n){const t=document.querySelector("#shop-error");t&&(t.textContent=n,t.hidden=!1)}function go(n="daily"){qh=n;const t=`<div class="shop-tabs"><button data-shop-tab="daily" class="${n==="daily"?"active":""}">Daily gifts</button><button data-shop-tab="currency" class="${n==="currency"?"active":""}">Coins & Jems</button><button data-shop-tab="skins" class="${n==="skins"?"active":""}">Skins</button></div>`;let e="";n==="daily"&&(e=aM()),n==="currency"&&(e=`<div class="shop-section"><h2>Coins & ${Xe.name}</h2><p class="shop-balance">${Xe.icon} ${X.test?"∞":X.jems} ${Xe.name} · $${X.test?"∞":Math.floor(X.cash).toLocaleString("en-US")}</p><div class="shop-card"><span class="shop-art coins">$</span><span><b>2,000 coins</b><small>Exchange 10 ${Xe.name}</small></span><button id="buy-coins">${Xe.icon} 10</button></div><div class="shop-card"><span class="shop-art jems">${Xe.icon}</span><span><b>10 ${Xe.name}</b><small>Watch an ad to receive them</small></span><button disabled title="Ads will be available later">Coming soon</button></div><p class="shop-note">Ads are being prepared. Coins cannot be exchanged for ${Xe.name}.</p></div>`),n==="skins"&&(e=`<div class="shop-section"><h2>Skins</h2><p class="shop-balance">${Xe.icon} ${X.test?"∞":X.jems} ${Xe.name}</p><p class="shop-note">Looks only · levels stay unchanged</p>${["truck","person"].map(r=>`<h3>${r==="truck"?"Truck":"Person"}</h3><div class="skin-grid">${io[r].map(s=>{const a=X.ownedSkins[r].includes(s.id),o=X.selectedSkins[r]===s.id;return`<div class="skin-card"><div class="skin-preview ${r}">${wv(r,s.id)}</div><b>${s.name}</b><button data-skin-kind="${r}" data-skin-id="${s.id}" ${o?"disabled":""}>${o?"Equipped":a?"Equip":`${Xe.icon} ${s.price}`}</button></div>`}).join("")}</div>`).join("")}</div>`),ji(`<div class="shop-modal"><div class="shop-heading"><span>🛒 SHOP</span><div class="shop-wealth"><span>$${X.test?"∞":Math.floor(X.cash).toLocaleString("en-US")}</span><span>${Xe.icon} ${X.test?"∞":X.jems}</span></div></div>${t}<p id="shop-error" class="shop-error" hidden></p>${e}</div>`),document.querySelectorAll("[data-shop-tab]").forEach(r=>r.onclick=()=>go(r.dataset.shopTab));const i=document.querySelector("#claim-daily");i&&(i.onclick=()=>{const r=xv(X);Pe(),tu(),Ml(`$${r}`,"Daily reward claimed"),rt("#daily-button").classList.remove("ready")}),document.querySelector("#buy-coins")?.addEventListener("click",()=>{if(!Rv(X))return Nd(`You need 10 ${Xe.name}.`);Ml("2,000 coins",`Paid 10 ${Xe.name}`)}),document.querySelectorAll("[data-skin-kind]").forEach(r=>r.onclick=()=>{const s=r.dataset.skinKind,a=r.dataset.skinId;if(X.ownedSkins[s].includes(a)){X.selectedSkins[s]=a,s==="truck"?Ws():so(),Pe(),go("skins");return}if(!Cv(X,s,a))return Nd(`Not enough ${Xe.name} for this skin.`);s==="truck"?Ws():so();const o=io[s].find(c=>c.id===a);Ml(`${o.name} ${s==="truck"?"truck":"person"} skin`,"Purchased and equipped · Upgrade level unchanged")})}rt("#daily-button").onclick=()=>go();rt("#job-toggle").onclick=()=>rt("#job-body").classList.toggle("collapsed");function Kh(){rt("#mode-toggle").textContent=X.test?"DEV":"NORMAL",rt("#mode-toggle").classList.toggle("development",X.test),rt("#test-toggle").hidden=!X.test,X.test||(rt("#tests").hidden=!0)}rt("#mode-toggle").onclick=()=>{X.test=!X.test,mn=0,Wa="",Xa="",Kh(),Fn(),Pe(),Gt(X.test?"Development mode: unlimited money and test tools enabled.":"Normal mode: purchases now use company cash.")};Kh();rt("#camera-follow").onclick=()=>{Ue.zoom=.78,Ue.updateProjectionMatrix()};for(const[n,t]of[["zoom-in",1.2],["zoom-out",1/1.2]])rt(`#${n}`).onclick=()=>{Ue.zoom=ue.clamp(Ue.zoom*t,hn.minZoom,hn.maxZoom),Ue.updateProjectionMatrix()};rt("#settings").onclick=()=>{$c(),ji(`<div class="settings-panel"><h2>Settings</h2><section><h3>Audio</h3><label><span>Sound effects</span><input id="sound" type="checkbox" ${Sr?"checked":""}></label><label><span>City & nature</span><input id="ambient" type="checkbox" ${yr?"checked":""}></label><label><span>Background music</span><input id="music" type="checkbox" ${ls?"checked":""}></label><label><span>Vehicle sound</span><input id="vehicle-sound" type="checkbox" ${cs?"checked":""}></label><label><span>Volume</span><input id="volume" type="range" min="0" max="1" step=".05" value="${pi}"></label></section><section><h3>Game & display</h3><label><span>Soft shadows</span><input id="shadows" type="checkbox" ${gl?"checked":""}></label><button id="rescue-now">Got stuck? Move to a clear spot</button><button id="replay-tutorial">Replay tutorial</button></section><section><h3>Progress</h3><button id="update-game">Update game safely</button><p class="fine">Your save is backed up before reloading.</p></section></div>`),rt("#sound").onchange=n=>{Sr=n.target.checked,Ts()},rt("#ambient").onchange=n=>{yr=n.target.checked,Ts()},rt("#music").onchange=n=>{ls=n.target.checked,Ts()},rt("#vehicle-sound").onchange=n=>{cs=n.target.checked,Ts()},rt("#volume").oninput=n=>{pi=+n.target.value,Ts()},rt("#shadows").onchange=n=>{gl=n.target.checked,Si.shadowMap.enabled=gl},rt("#rescue-now").onclick=()=>{rt("#dialog").close(),Jt?$h():Co()},rt("#replay-tutorial").onclick=()=>{ie=0,rt("#dialog").close(),Pi(Fi[0][0],Fi[0][1],"Got it",Fi[0][2]),Pe()},rt("#update-game").onclick=()=>{Pe();const n=localStorage.getItem("movecraft-rewrite-v1");n&&localStorage.setItem("movecraft-update-backup",n);const t=new URL(location.href);t.searchParams.set("update",Date.now().toString()),location.replace(t)}};rt("#stuck-button").onclick=()=>Jt?$h():Co();rt("#help").onclick=()=>ji("<h2>Moving controls</h2><p>WASD / arrows move. Shift sprints. Space jumps. Drag to orbit, scroll or pinch to zoom.</p><p>E lifts and places. R rotates. Q locks a full-width crossbar behind two cargo rows. F enters/exits the cab. W/S drives/brakes; A/D steer. G raises or lowers the rear.</p><p>Unsecured furniture can be damaged or fall through an open rear. Press E on an upgrade field before investing.</p>");document.addEventListener("wheel",n=>{(n.ctrlKey||n.metaKey)&&n.preventDefault()},{passive:!1});for(const n of["gesturestart","gesturechange","gestureend"])document.addEventListener(n,t=>t.preventDefault(),{passive:!1});document.addEventListener("touchmove",n=>{n.touches.length>1&&!(n.target instanceof HTMLCanvasElement)&&n.preventDefault()},{passive:!1});window.addEventListener("keydown",n=>{(n.ctrlKey||n.metaKey)&&["Equal","Minus","Digit0","NumpadAdd","NumpadSubtract","Numpad0"].includes(n.code)&&n.preventDefault()},{capture:!0});window.addEventListener("keydown",n=>{if(rt("#dialog").open||(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","Space"].includes(n.code)&&(Le.add(n.code),n.preventDefault()),n.repeat))return;n.code==="Space"&&qv();const t={KeyE:"interact",KeyF:"cab",KeyR:"rotate",KeyG:"rear",KeyQ:"secure"};t[n.code]&&Yh[t[n.code]]()});window.addEventListener("keyup",n=>Le.delete(n.code));window.addEventListener("blur",()=>Le.clear());document.querySelectorAll("[data-key]").forEach(n=>{n.onpointerdown=t=>{n.setPointerCapture(t.pointerId),Le.add(n.dataset.key)},n.onpointerup=n.onpointercancel=()=>Le.delete(n.dataset.key)});function Do(){const n=Math.max(1,rt("#world").clientWidth),t=Math.max(1,rt("#world").clientHeight);Si.setSize(n,t,!1);const e=n/t;Ue.left=-12*e,Ue.right=12*e,Ue.top=12,Ue.bottom=-12,hn.minZoom=Math.max(.55,e/4),Ue.zoom=Math.max(Ue.zoom,hn.minZoom),Ue.updateProjectionMatrix()}window.addEventListener("resize",Do);window.visualViewport?.addEventListener("resize",Do);new ResizeObserver(Do).observe(rt("#world"));Ws();iM();Bh.copy(Lt.position);jc();Fn();Do();tu();rt("#daily-button").classList.toggle("ready",X.daily.lastClaim!==new Date().toISOString().slice(0,10));ie===0&&X.jobs===0&&Pi(Fi[0][0],Fi[0][1],"Got it",Fi[0][2]);Zs();tr()&&!Qe&&(Is=.8);hn.target.copy(at.position);Ue.position.add(at.position);hn.update();let Fd=performance.now(),Sl=0;function Zh(n){const t=Math.min((n-Fd)/1e3,.1);Fd=n,be+=t,Is>0?(Is-=t,Is<=0&&fo()):tr()&&!Qe&&rt("#tutorial-card").hidden&&!rt("#dialog").open&&fo(),Xv(t),pr=ue.damp(pr,br,3,t),fc=ue.damp(fc,ao,8,t),kh();const e=Yv(t);Kv(t);const i=Jt?mc:gc,r=Jt?qc():at.position;for((!i.length||be-i[i.length-1].t>=.35)&&i.push({t:be,x:r.x,z:r.z});i.length&&be-i[0].t>10;)i.shift();const s=i.length>1&&be-i[0].t>=9.5&&i.every(u=>Math.hypot(u.x-i[0].x,u.z-i[0].z)<(Jt?4:1.5));for(;cr.length&&be-cr[0]>10;)cr.shift();const a=Jt&&cr.length>=3;for(rt("#stuck-button").hidden=!!xe||rt("#dialog").open||!(s||a),rt("#stuck-button").textContent=Jt?"Truck stuck?":"Got stuck?",Jt?gc.length=0:(mc.length=0,cr.length=0),xe||fr.animate(be,e,!!Ft||!!Fe,qr),Hv(t),Ft&&(Ft.mesh.rotation.y=ue.damp(Ft.mesh.rotation.y,Ft.item.rotated?Math.PI/2:0,12,t)),Sl+=t;Sl>=1/60;){const u=Zv(.016666666666666666);Ev(re,1/60,{truck:Lt,back:Re,speed:Ae,yawRate:u.yawRate,acceleration:u.acceleration,rearOpen:pr>.9,enclosed:!!Lt.userData.enclosed,gear:X.levels.truck,now:be,onDamage:(f,d,p)=>{const _=Math.min(d,100-(f.damage??0));f.damage=(f.damage??0)+_,_>0&&Zi.push({item:f.item.name,reason:p,points:_}),be-lo>.7&&(lo=be,Gt(`−${_} points · ${f.item.name}: ${p}`))},onFall:f=>{Gt(`${f.item.name} fell out. Stop and recover it.`),ii(140,.25)}}),Sl-=1/60}if(Qv(t),Ov(t),Dv(),jv(t),Ki.visible){const u=Kc(Ki.position),f=u?6808973:16768099;Oh.color.setHex(f)}const o=Jt?ni(new A(3,.6,(Re-2)/2)):at.position.clone().add(new A(0,.6,0)),c=o.clone().sub(hn.target);if(hn.target.copy(o),Ue.position.add(c),Bi.position.copy(o).add(new A(-25,45,20)),Bi.target.position.copy(o),hn.update(),Dn.visible=!!Ft&&gr(),Dn.visible){const u=Qc(Ft),f=Jc();Dn.scale.set(u?.48:f.w*Ut,1,u?.55:f.d*Ut),Dn.position.copy(ni(u??new A(1.4+(f.x+f.w/2)*Ut,.82,.2+(f.z+f.d/2)*Ut))),Dn.rotation.y=Lt.rotation.y,Dn.material.color.set(u||f.valid?2386770:13974845),Dn.material.opacity=u||f.valid?.62:.82,Xc.material.color.set(u||f.valid?1195825:7282464)}const l=Ft&&!gr()?Gh(Ft):null;if(qn.visible=!!l&&at.position.distanceTo(l.target)<18,l&&Ft&&(qn.position.x=l.target.x,qn.position.z=l.target.z,qn.scale.set(Ft.item.w*Ut,Ft.item.d*Ut,1),qn.material.color.setHex(l.close?4828784:15321180)),Li.visible=!!Ft&&!gr()&&Hh(at.position)&&!l?.close,Li.visible&&Ft){const u=at.position.clone().add(new A(0,0,1.1).applyQuaternion(at.quaternion));Li.position.set(u.x,.105,u.z),Li.scale.set(Ft.item.w*Ut,Ft.item.d*Ut,1)}oo-=t,oo<=0&&rt("#status-bar").classList.remove("show-notice"),vl+=t,xl+=t,vl>.18&&(tu(),vl=0),xl>5&&(Pe(),xl=0),Si.render(Te,Ue),requestAnimationFrame(Zh)}requestAnimationFrame(Zh);window.addEventListener("pagehide",Pe);
