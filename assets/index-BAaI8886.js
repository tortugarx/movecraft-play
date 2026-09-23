(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const Ac="186",ts={ROTATE:0,DOLLY:1,PAN:2},Zr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sf=0,wu=1,yf=2,ko=1,Kh=2,As=3,vr=0,_n=1,sn=2,Ii=0,Ds=1,Tu=2,Au=3,Ru=4,bf=5,qr=100,Ef=101,wf=102,Tf=103,Af=104,Rf=200,Cf=201,Pf=202,Df=203,Zh=204,Jh=205,Lf=206,If=207,Nf=208,Uf=209,Ff=210,Of=211,Bf=212,zf=213,kf=214,Cl=0,Pl=1,Dl=2,zs=3,Ll=4,Il=5,Nl=6,Ul=7,Qh=0,Gf=1,Hf=2,pi=0,jh=1,td=2,ed=3,Rc=4,nd=5,id=6,rd=7,sd=300,xr=301,os=302,Ba=303,za=304,ya=306,Fl=1e3,Di=1001,Ol=1002,je=1003,Vf=1004,oo=1005,on=1006,ka=1007,hr=1008,bn=1009,od=1010,ad=1011,ks=1012,Cc=1013,_i=1014,di=1015,vi=1016,Pc=1017,Dc=1018,Gs=1020,ld=35902,cd=35899,ud=1021,hd=1022,Kn=1023,Oi=1026,dr=1027,dd=1028,Lc=1029,Mr=1030,Ic=1031,Nc=1033,Go=33776,Ho=33777,Vo=33778,Wo=33779,Bl=35840,zl=35841,kl=35842,Gl=35843,Hl=36196,Vl=37492,Wl=37496,Xl=37488,$l=37489,jo=37490,Yl=37491,ql=37808,Kl=37809,Zl=37810,Jl=37811,Ql=37812,jl=37813,tc=37814,ec=37815,nc=37816,ic=37817,rc=37818,sc=37819,oc=37820,ac=37821,lc=36492,cc=36494,uc=36495,hc=36283,dc=36284,ta=36285,fc=36286,Wf=3200,pc=0,Xf=1,qi="",mn="srgb",ea="srgb-linear",na="linear",fe="srgb",Ga=7680,$f=519,Yf=512,qf=513,Kf=514,Uc=515,Zf=516,Jf=517,Fc=518,Qf=519,fd=35044,Cu="300 es",fi=2e3,Hs=2001;function jf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ia(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tp(){const n=ia("canvas");return n.style.display="block",n}const Pu={};function ra(...n){const t="THREE."+n.shift();console.log(t,...n)}function pd(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Nt(...n){n=pd(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ie(...n){n=pd(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function es(...n){const t=n.join(" ");t in Pu||(Pu[t]=!0,Nt(...n))}function ep(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const np={[Cl]:Pl,[Dl]:Nl,[Ll]:Ul,[zs]:Il,[Pl]:Cl,[Nl]:Dl,[Ul]:Ll,[Il]:zs};class Qi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Du=1234567;const ns=Math.PI/180,Vs=180/Math.PI;function Ni(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[t&255]+nn[t>>8&255]+"-"+nn[t>>16&15|64]+nn[t>>24&255]+"-"+nn[e&63|128]+nn[e>>8&255]+"-"+nn[e>>16&255]+nn[e>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function Xt(n,t,e){return Math.max(t,Math.min(e,n))}function Oc(n,t){return(n%t+t)%t}function ip(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function rp(n,t,e){return n!==t?(e-n)/(t-n):0}function Ls(n,t,e){return(1-e)*n+e*t}function sp(n,t,e,i){return Ls(n,t,1-Math.exp(-e*i))}function op(n,t=1){return t-Math.abs(Oc(n,t*2)-t)}function ap(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function lp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function cp(n,t){return n+Math.floor(Math.random()*(t-n+1))}function up(n,t){return n+Math.random()*(t-n)}function hp(n){return n*(.5-Math.random())}function dp(n){n!==void 0&&(Du=n);let t=Du+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function fp(n){return n*ns}function pp(n){return n*Vs}function mp(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function gp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function _p(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vp(n,t,e,i,r){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+i)/2),u=o((t+i)/2),f=s((t-i)/2),h=o((t-i)/2),d=s((i-t)/2),g=o((i-t)/2);switch(r){case"XYX":n.set(a*u,c*f,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*f,a*l);break;case"ZXZ":n.set(c*f,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*d,a*l);break;case"YXY":n.set(c*d,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*d,a*u,a*l);break;default:Nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function $n(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const he={DEG2RAD:ns,RAD2DEG:Vs,generateUUID:Ni,clamp:Xt,euclideanModulo:Oc,mapLinear:ip,inverseLerp:rp,lerp:Ls,damp:sp,pingpong:op,smoothstep:ap,smootherstep:lp,randInt:cp,randFloat:up,randFloatSpread:hp,seededRandom:dp,degToRad:fp,radToDeg:pp,isPowerOfTwo:mp,ceilPowerOfTwo:gp,floorPowerOfTwo:_p,setQuaternionFromProperEuler:vp,normalize:pe,denormalize:$n},uu=class uu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Xt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};uu.prototype.isVector2=!0;let gt=uu;class xi{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3],h=s[o+0],d=s[o+1],g=s[o+2],y=s[o+3];if(f!==y||c!==h||l!==d||u!==g){let m=c*h+l*d+u*g+f*y;m<0&&(h=-h,d=-d,g=-g,y=-y,m=-m);let p=1-a;if(m<.9995){const b=Math.acos(m),R=Math.sin(b);p=Math.sin(p*b)/R,a=Math.sin(a*b)/R,c=c*p+h*a,l=l*p+d*a,u=u*p+g*a,f=f*p+y*a}else{c=c*p+h*a,l=l*p+d*a,u=u*p+g*a,f=f*p+y*a;const b=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=b,l*=b,u*=b,f*=b}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+u*f+c*d-l*h,t[e+1]=c*g+u*h+l*f-a*d,t[e+2]=l*g+u*d+a*h-c*f,t[e+3]=u*g-a*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),f=a(s/2),h=c(i/2),d=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"YZX":this._x=h*u*f+l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f-h*d*g;break;case"XZY":this._x=h*u*f-l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f+h*d*g;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+i*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const hu=class hu{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),u=2*(a*e-s*r),f=2*(s*i-o*e);return this.x=e+c*l+o*f-a*u,this.y=i+c*u+a*l-s*f,this.z=r+c*f+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ha.copy(this).projectOnVector(t),this.sub(Ha)}reflect(t){return this.sub(Ha.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Xt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hu.prototype.isVector3=!0;let A=hu;const Ha=new A,Lu=new xi,du=class du{constructor(t,e,i,r,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l)}set(t,e,i,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],y=r[0],m=r[3],p=r[6],b=r[1],R=r[4],M=r[7],_=r[2],x=r[5],T=r[8];return s[0]=o*y+a*b+c*_,s[3]=o*m+a*R+c*x,s[6]=o*p+a*M+c*T,s[1]=l*y+u*b+f*_,s[4]=l*m+u*R+f*x,s[7]=l*p+u*M+f*T,s[2]=h*y+d*b+g*_,s[5]=h*m+d*R+g*x,s[8]=h*p+d*M+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*s,d=l*s-o*c,g=e*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return t[0]=f*y,t[1]=(r*l-u*i)*y,t[2]=(a*i-r*o)*y,t[3]=h*y,t[4]=(u*e-r*c)*y,t[5]=(r*s-a*e)*y,t[6]=d*y,t[7]=(i*c-l*e)*y,t[8]=(o*e-i*s)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Va.makeScale(t,e)),this}rotate(t){return es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Va.makeRotation(-t)),this}translate(t,e){return es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Va.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};du.prototype.isMatrix3=!0;let zt=du;const Va=new zt,Iu=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nu=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xp(){const n={enabled:!0,workingColorSpace:ea,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===fe&&(r.r=Ui(r.r),r.g=Ui(r.g),r.b=Ui(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===fe&&(r.r=is(r.r),r.g=is(r.g),r.b=is(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===qi?na:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ea]:{primaries:t,whitePoint:i,transfer:na,toXYZ:Iu,fromXYZ:Nu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:t,whitePoint:i,transfer:fe,toXYZ:Iu,fromXYZ:Nu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),n}const te=xp();function Ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function is(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Cr;class Mp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Cr===void 0&&(Cr=ia("canvas")),Cr.width=t.width,Cr.height=t.height;const r=Cr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Cr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ia("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ui(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ui(e[i]/255)*255):e[i]=Ui(e[i]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sp=0;class Bc{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Ni(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Wa(r[o].image)):s.push(Wa(r[o]))}else s=Wa(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Wa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Mp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}let yp=0;const Xa=new A;class an extends Qi{constructor(t=an.DEFAULT_IMAGE,e=an.DEFAULT_MAPPING,i=Di,r=Di,s=on,o=hr,a=Kn,c=bn,l=an.DEFAULT_ANISOTROPY,u=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Ni(),this.name="",this.source=new Bc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xa).x}get height(){return this.source.getSize(Xa).y}get depth(){return this.source.getSize(Xa).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fl:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case Ol:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fl:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case Ol:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=sd;an.DEFAULT_ANISOTROPY=1;const fu=class fu{constructor(t=0,e=0,i=0,r=1){this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const R=(l+1)/2,M=(d+1)/2,_=(p+1)/2,x=(u+h)/4,T=(f+y)/4,v=(g+m)/4;return R>M&&R>_?R<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(R),r=x/i,s=T/i):M>_?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=x/r,s=v/r):_<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(_),i=T/s,r=v/s),this.set(i,r,s,e),this}let b=Math.sqrt((m-g)*(m-g)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-y)/b,this.z=(h-u)/b,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fu.prototype.isVector4=!0;let Ie=fu;class bp extends Qi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:i.depth},s=new an(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Bc(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends bp{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class md extends an{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=je,this.minFilter=je,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ep extends an{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=je,this.minFilter=je,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Sa=class Sa{constructor(t,e,i,r,s,o,a,c,l,u,f,h,d,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l,u,f,h,d,g,y,m)}set(t,e,i,r,s,o,a,c,l,u,f,h,d,g,y,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sa().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,r=1/Pr.setFromMatrixColumn(t,0).length(),s=1/Pr.setFromMatrixColumn(t,1).length(),o=1/Pr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=o*u,d=o*f,g=a*u,y=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=h-y*l,e[9]=-a*c,e[2]=y-h*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,d=c*f,g=l*u,y=l*f;e[0]=h+y*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=y+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,d=c*f,g=l*u,y=l*f;e[0]=h-y*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=y-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,d=o*f,g=a*u,y=a*f;e[0]=c*u,e[4]=g*l-d,e[8]=h*l+y,e[1]=c*f,e[5]=y*l+h,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,d=o*l,g=a*c,y=a*l;e[0]=c*u,e[4]=y-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*f+g,e[10]=h-y*f}else if(t.order==="XZY"){const h=o*c,d=o*l,g=a*c,y=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+y,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=y*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wp,t,Tp)}lookAt(t,e,i){const r=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Vi.crossVectors(i,vn),Vi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Vi.crossVectors(i,vn)),Vi.normalize(),ao.crossVectors(vn,Vi),r[0]=Vi.x,r[4]=ao.x,r[8]=vn.x,r[1]=Vi.y,r[5]=ao.y,r[9]=vn.y,r[2]=Vi.z,r[6]=ao.z,r[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],y=i[6],m=i[10],p=i[14],b=i[3],R=i[7],M=i[11],_=i[15],x=r[0],T=r[4],v=r[8],w=r[12],D=r[1],L=r[5],O=r[9],B=r[13],U=r[2],k=r[6],q=r[10],$=r[14],et=r[3],Y=r[7],j=r[11],it=r[15];return s[0]=o*x+a*D+c*U+l*et,s[4]=o*T+a*L+c*k+l*Y,s[8]=o*v+a*O+c*q+l*j,s[12]=o*w+a*B+c*$+l*it,s[1]=u*x+f*D+h*U+d*et,s[5]=u*T+f*L+h*k+d*Y,s[9]=u*v+f*O+h*q+d*j,s[13]=u*w+f*B+h*$+d*it,s[2]=g*x+y*D+m*U+p*et,s[6]=g*T+y*L+m*k+p*Y,s[10]=g*v+y*O+m*q+p*j,s[14]=g*w+y*B+m*$+p*it,s[3]=b*x+R*D+M*U+_*et,s[7]=b*T+R*L+M*k+_*Y,s[11]=b*v+R*O+M*q+_*j,s[15]=b*w+R*B+M*$+_*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],y=t[7],m=t[11],p=t[15],b=c*d-l*h,R=a*d-l*f,M=a*h-c*f,_=o*d-l*u,x=o*h-c*u,T=o*f-a*u;return e*(y*b-m*R+p*M)-i*(g*b-m*_+p*x)+r*(g*R-y*_+p*T)-s*(g*M-y*x+m*T)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-i*(s*u-a*c)+r*(s*l-o*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],y=t[13],m=t[14],p=t[15],b=e*a-i*o,R=e*c-r*o,M=e*l-s*o,_=i*c-r*a,x=i*l-s*a,T=r*l-s*c,v=u*y-f*g,w=u*m-h*g,D=u*p-d*g,L=f*m-h*y,O=f*p-d*y,B=h*p-d*m,U=b*B-R*O+M*L+_*D-x*w+T*v;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/U;return t[0]=(a*B-c*O+l*L)*k,t[1]=(r*O-i*B-s*L)*k,t[2]=(y*T-m*x+p*_)*k,t[3]=(h*x-f*T-d*_)*k,t[4]=(c*D-o*B-l*w)*k,t[5]=(e*B-r*D+s*w)*k,t[6]=(m*M-g*T-p*R)*k,t[7]=(u*T-h*M+d*R)*k,t[8]=(o*O-a*D+l*v)*k,t[9]=(i*D-e*O-s*v)*k,t[10]=(g*x-y*M+p*b)*k,t[11]=(f*M-u*x-d*b)*k,t[12]=(a*w-o*L-c*v)*k,t[13]=(e*L-i*w+r*v)*k,t[14]=(y*R-g*_-m*b)*k,t[15]=(u*_-f*R+h*b)*k,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,f=a+a,h=s*l,d=s*u,g=s*f,y=o*u,m=o*f,p=a*f,b=c*l,R=c*u,M=c*f,_=i.x,x=i.y,T=i.z;return r[0]=(1-(y+p))*_,r[1]=(d+M)*_,r[2]=(g-R)*_,r[3]=0,r[4]=(d-M)*x,r[5]=(1-(h+p))*x,r[6]=(m+b)*x,r[7]=0,r[8]=(g+R)*T,r[9]=(m-b)*T,r[10]=(1-(h+y))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let o=Pr.set(r[0],r[1],r[2]).length();const a=Pr.set(r[4],r[5],r[6]).length(),c=Pr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Bn.copy(this);const l=1/o,u=1/a,f=1/c;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=f,Bn.elements[9]*=f,Bn.elements[10]*=f,e.setFromRotationMatrix(Bn),i.x=o,i.y=a,i.z=c,this}makePerspective(t,e,i,r,s,o,a=fi,c=!1){const l=this.elements,u=2*s/(e-t),f=2*s/(i-r),h=(e+t)/(e-t),d=(i+r)/(i-r);let g,y;if(c)g=s/(o-s),y=o*s/(o-s);else if(a===fi)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Hs)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=fi,c=!1){const l=this.elements,u=2/(e-t),f=2/(i-r),h=-(e+t)/(e-t),d=-(i+r)/(i-r);let g,y;if(c)g=1/(o-s),y=o/(o-s);else if(a===fi)g=-2/(o-s),y=-(o+s)/(o-s);else if(a===Hs)g=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Sa.prototype.isMatrix4=!0;let we=Sa;const Pr=new A,Bn=new we,wp=new A(0,0,0),Tp=new A(1,1,1),Vi=new A,ao=new A,vn=new A,Uu=new we,Fu=new xi;class Mi{constructor(t=0,e=0,i=0,r=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Uu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fu.setFromEuler(this),this.setFromQuaternion(Fu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class gd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ap=0;const Ou=new A,Dr=new xi,Ei=new we,lo=new A,ms=new A,Rp=new A,Cp=new xi,Bu=new A(1,0,0),zu=new A(0,1,0),ku=new A(0,0,1),Gu={type:"added"},Pp={type:"removed"},Lr={type:"childadded",child:null},$a={type:"childremoved",child:null};class $e extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DEFAULT_UP.clone();const t=new A,e=new Mi,i=new xi,r=new A(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new we},normalMatrix:{value:new zt}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=$e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Dr.setFromAxisAngle(t,e),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(t,e){return Dr.setFromAxisAngle(t,e),this.quaternion.premultiply(Dr),this}rotateX(t){return this.rotateOnAxis(Bu,t)}rotateY(t){return this.rotateOnAxis(zu,t)}rotateZ(t){return this.rotateOnAxis(ku,t)}translateOnAxis(t,e){return Ou.copy(t).applyQuaternion(this.quaternion),this.position.add(Ou.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bu,t)}translateY(t){return this.translateOnAxis(zu,t)}translateZ(t){return this.translateOnAxis(ku,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?lo.copy(t):lo.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(ms,lo,this.up):Ei.lookAt(lo,ms,this.up),this.quaternion.setFromRotationMatrix(Ei),r&&(Ei.extractRotation(r.matrixWorld),Dr.setFromRotationMatrix(Ei),this.quaternion.premultiply(Dr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gu),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null):ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pp),$a.child=t,this.dispatchEvent($a),$a.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gu),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,t,Rp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,Cp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*r,s[13]+=i-s[1]*e-s[5]*i-s[9]*r,s[14]+=r-s[2]*e-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}$e.DEFAULT_UP=new A(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ue extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dp={type:"move"};class Ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const y of t.hand.values()){const m=e.getJointPose(y,i),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dp)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ue;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const _d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},co={h:0,s:0,l:0};function qa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=te.workingColorSpace){if(t=Oc(t,1),e=Xt(e,0,1),i=Xt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=qa(o,s,t+1/3),this.g=qa(o,s,t),this.b=qa(o,s,t-1/3)}return te.colorSpaceToWorking(this,r),this}setStyle(t,e=mn){function i(s){s!==void 0&&parseFloat(s)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){const i=_d[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}copyLinearToSRGB(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return te.workingToColorSpace(rn.copy(this),t),Math.round(Xt(rn.r*255,0,255))*65536+Math.round(Xt(rn.g*255,0,255))*256+Math.round(Xt(rn.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(rn.copy(this),e);const i=rn.r,r=rn.g,s=rn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=mn){te.workingToColorSpace(rn.copy(this),t);const e=rn.r,i=rn.g,r=rn.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Wi),this.setHSL(Wi.h+t,Wi.s+e,Wi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Wi),t.getHSL(co);const i=Ls(Wi.h,co.h,e),r=Ls(Wi.s,co.s,e),s=Ls(Wi.l,co.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new qt;qt.NAMES=_d;class zc{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=i}clone(){return new zc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Lp extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const zn=new A,wi=new A,Ka=new A,Ti=new A,Ir=new A,Nr=new A,Hu=new A,Za=new A,Ja=new A,Qa=new A,ja=new Ie,tl=new Ie,el=new Ie;class En{constructor(t=new A,e=new A,i=new A){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),zn.subVectors(t,e),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){zn.subVectors(r,e),wi.subVectors(i,e),Ka.subVectors(t,e);const o=zn.dot(zn),a=zn.dot(wi),c=zn.dot(Ka),l=wi.dot(wi),u=wi.dot(Ka),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-d-g,g,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,Ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ti.x),c.addScaledVector(o,Ti.y),c.addScaledVector(a,Ti.z),c)}static getInterpolatedAttribute(t,e,i,r,s,o){return ja.setScalar(0),tl.setScalar(0),el.setScalar(0),ja.fromBufferAttribute(t,e),tl.fromBufferAttribute(t,i),el.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(ja,s.x),o.addScaledVector(tl,s.y),o.addScaledVector(el,s.z),o}static isFrontFacing(t,e,i,r){return zn.subVectors(i,e),wi.subVectors(t,e),zn.cross(wi).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),zn.cross(wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return En.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return En.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Ir.subVectors(r,i),Nr.subVectors(s,i),Za.subVectors(t,i);const c=Ir.dot(Za),l=Nr.dot(Za);if(c<=0&&l<=0)return e.copy(i);Ja.subVectors(t,r);const u=Ir.dot(Ja),f=Nr.dot(Ja);if(u>=0&&f<=u)return e.copy(r);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(Ir,o);Qa.subVectors(t,s);const d=Ir.dot(Qa),g=Nr.dot(Qa);if(g>=0&&d<=g)return e.copy(s);const y=d*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(Nr,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Hu.subVectors(s,r),a=(f-u)/(f-u+(d-g)),e.copy(r).addScaledVector(Hu,a);const p=1/(m+y+h);return o=y*p,a=h*p,e.copy(i).addScaledVector(Ir,o).addScaledVector(Nr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Js{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,kn):kn.fromBufferAttribute(s,o),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),uo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),uo.copy(i.boundingBox)),uo.applyMatrix4(t.matrixWorld),this.union(uo)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gs),ho.subVectors(this.max,gs),Ur.subVectors(t.a,gs),Fr.subVectors(t.b,gs),Or.subVectors(t.c,gs),Xi.subVectors(Fr,Ur),$i.subVectors(Or,Fr),ir.subVectors(Ur,Or);let e=[0,-Xi.z,Xi.y,0,-$i.z,$i.y,0,-ir.z,ir.y,Xi.z,0,-Xi.x,$i.z,0,-$i.x,ir.z,0,-ir.x,-Xi.y,Xi.x,0,-$i.y,$i.x,0,-ir.y,ir.x,0];return!nl(e,Ur,Fr,Or,ho)||(e=[1,0,0,0,1,0,0,0,1],!nl(e,Ur,Fr,Or,ho))?!1:(fo.crossVectors(Xi,$i),e=[fo.x,fo.y,fo.z],nl(e,Ur,Fr,Or,ho))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ai=[new A,new A,new A,new A,new A,new A,new A,new A],kn=new A,uo=new Js,Ur=new A,Fr=new A,Or=new A,Xi=new A,$i=new A,ir=new A,gs=new A,ho=new A,fo=new A,rr=new A;function nl(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){rr.fromArray(n,s);const a=r.x*Math.abs(rr.x)+r.y*Math.abs(rr.y)+r.z*Math.abs(rr.z),c=t.dot(rr),l=e.dot(rr),u=i.dot(rr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ge=new A,po=new gt;let Ip=0;class Jn extends Qi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ip++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=fd,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)po.fromBufferAttribute(this,e),po.applyMatrix3(t),this.setXY(e,po.x,po.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=$n(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=pe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$n(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$n(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$n(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),r=pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),r=pe(r,this.array),s=pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class vd extends Jn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class xd extends Jn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class se extends Jn{constructor(t,e,i){super(new Float32Array(t),e,i)}}const Np=new Js,_s=new A,il=new A;class ba{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Np.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_s.subVectors(t,this.center);const e=_s.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(_s,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(il.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_s.copy(t.center).add(il)),this.expandByPoint(_s.copy(t.center).sub(il))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Up=0;const Cn=new we,rl=new $e,Br=new A,xn=new Js,vs=new Js,Ze=new A;class Ue extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jf(t)?xd:vd)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new zt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,i){return Cn.makeTranslation(t,e,i),this.applyMatrix4(Cn),this}scale(t,e,i){return Cn.makeScale(t,e,i),this.applyMatrix4(Cn),this}lookAt(t){return rl.lookAt(t),rl.updateMatrix(),this.applyMatrix4(rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Js);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ba);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(xn.min,vs.min),xn.expandByPoint(Ze),Ze.addVectors(xn.max,vs.max),xn.expandByPoint(Ze)):(xn.expandByPoint(vs.min),xn.expandByPoint(vs.max))}xn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Ze.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ze));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ze.fromBufferAttribute(a,l),c&&(Br.fromBufferAttribute(t,l),Ze.add(Br)),r=Math.max(r,i.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Jn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let v=0;v<i.count;v++)a[v]=new A,c[v]=new A;const l=new A,u=new A,f=new A,h=new gt,d=new gt,g=new gt,y=new A,m=new A;function p(v,w,D){l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,D),h.fromBufferAttribute(s,v),d.fromBufferAttribute(s,w),g.fromBufferAttribute(s,D),u.sub(l),f.sub(l),d.sub(h),g.sub(h);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(L),a[v].add(y),a[w].add(y),a[D].add(y),c[v].add(m),c[w].add(m),c[D].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let v=0,w=b.length;v<w;++v){const D=b[v],L=D.start,O=D.count;for(let B=L,U=L+O;B<U;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const R=new A,M=new A,_=new A,x=new A;function T(v){_.fromBufferAttribute(r,v),x.copy(_);const w=a[v];R.copy(w),R.sub(_.multiplyScalar(_.dot(w))).normalize(),M.crossVectors(x,w);const L=M.dot(c[v])<0?-1:1;o.setXYZW(v,R.x,R.y,R.z,L)}for(let v=0,w=b.length;v<w;++v){const D=b[v],L=D.start,O=D.count;for(let B=L,U=L+O;B<U;B+=3)T(t.getX(B+0)),T(t.getX(B+1)),T(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Jn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new A,s=new A,o=new A,a=new A,c=new A,l=new A,u=new A,f=new A;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),y=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let d=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?d=c[y]*a.data.stride+a.offset:d=c[y]*u;for(let p=0;p<u;p++)h[g++]=l[d++]}return new Jn(h,u,f)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ue,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=t(h,i);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fd,this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const cn=new A;class sa{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)cn.fromBufferAttribute(this,e),cn.applyMatrix4(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)cn.fromBufferAttribute(this,e),cn.applyNormalMatrix(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)cn.fromBufferAttribute(this,e),cn.transformDirection(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=$n(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=pe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=$n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=$n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=$n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=$n(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),r=pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),r=pe(r,this.array),s=pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){ra("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Jn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new sa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ra("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const sl=new A,Op=new A,Bp=new zt;class Ci{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=sl.subVectors(i,e).cross(Op.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const r=t.delta(sl),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Bp.getNormalMatrix(t),r=this.coplanarPoint(sl).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let zp=0;class Tr extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=Ds,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zh,this.blendDst=Jh,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$f,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ga,this.stencilZFail=Ga,this.stencilZPass=Ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Ci().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new gt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new gt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class kp extends Tr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let zr;const xs=new A,kr=new A,Gr=new A,Hr=new gt,Ms=new gt,Md=new we,mo=new A,Ss=new A,go=new A,Vu=new gt,ol=new gt,Wu=new gt;class Gp extends $e{constructor(t=new kp){if(super(),this.isSprite=!0,this.type="Sprite",zr===void 0){zr=new Ue;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Fp(e,5);zr.setIndex([0,1,2,0,2,3]),zr.setAttribute("position",new sa(i,3,0,!1)),zr.setAttribute("uv",new sa(i,2,3,!1))}this.geometry=zr,this.material=t,this.center=new gt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ie('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),kr.setFromMatrixScale(this.matrixWorld),Md.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&kr.multiplyScalar(-Gr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;_o(mo.set(-.5,-.5,0),Gr,o,kr,r,s),_o(Ss.set(.5,-.5,0),Gr,o,kr,r,s),_o(go.set(.5,.5,0),Gr,o,kr,r,s),Vu.set(0,0),ol.set(1,0),Wu.set(1,1);let a=t.ray.intersectTriangle(mo,Ss,go,!1,xs);if(a===null&&(_o(Ss.set(-.5,.5,0),Gr,o,kr,r,s),ol.set(0,1),a=t.ray.intersectTriangle(mo,go,Ss,!1,xs),a===null))return;const c=t.ray.origin.distanceTo(xs);c<t.near||c>t.far||e.push({distance:c,point:xs.clone(),uv:En.getInterpolation(xs,mo,Ss,go,Vu,ol,Wu,new gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function _o(n,t,e,i,r,s){Hr.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(Ms.x=s*Hr.x-r*Hr.y,Ms.y=r*Hr.x+s*Hr.y):Ms.copy(Hr),n.copy(t),n.x+=Ms.x,n.y+=Ms.y,n.applyMatrix4(Md)}const Ri=new A,al=new A,vo=new A,xo=new A;class kc{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ri.copy(this.origin).addScaledVector(this.direction,e),Ri.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){al.copy(t).add(e).multiplyScalar(.5),vo.copy(e).sub(t).normalize(),xo.copy(this.origin).sub(al);const s=t.distanceTo(e)*.5,o=-this.direction.dot(vo),a=xo.dot(this.direction),c=-xo.dot(vo),l=xo.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*c-a,h=o*a-c,g=s*u,f>=0)if(h>=-g)if(h<=g){const y=1/u;f*=y,h*=y,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-s,-c),s),d=h*(h+2*c)+l):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+l);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(al).addScaledVector(vo,h),d}intersectSphere(t,e){if(t.radius<0)return null;Ri.subVectors(t.center,this.origin);const i=Ri.dot(this.direction),r=Ri.dot(Ri)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,r=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,r=(t.min.x-h.x)*l),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Ri)!==null}intersectTriangle(t,e,i,r,s){const o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,f=t.x-o.x,h=t.y-o.y,d=t.z-o.z,g=e.x-o.x,y=e.y-o.y,m=e.z-o.z,p=i.x-o.x,b=i.y-o.y,R=i.z-o.z,M=Math.abs(c),_=Math.abs(l),x=Math.abs(u);let T,v,w,D,L,O,B,U,k,q,$,et;if(M>=_&&M>=x?(w=c,O=f,k=g,et=p,c>=0?(T=l,v=u,D=h,L=d,B=y,U=m,q=b,$=R):(T=u,v=l,D=d,L=h,B=m,U=y,q=R,$=b)):_>=x?(w=l,O=h,k=y,et=b,l>=0?(T=u,v=c,D=d,L=f,B=m,U=g,q=R,$=p):(T=c,v=u,D=f,L=d,B=g,U=m,q=p,$=R)):(w=u,O=d,k=m,et=R,u>=0?(T=c,v=l,D=f,L=h,B=g,U=y,q=p,$=b):(T=l,v=c,D=h,L=f,B=y,U=g,q=b,$=p)),w===0)return null;const Y=T/w,j=v/w,it=1/w,lt=D-Y*O,bt=L-j*O,xe=B-Y*k,ee=U-j*k,ae=q-Y*et,Z=$-j*et,nt=ae*ee-Z*xe,Et=lt*Z-bt*ae,Bt=xe*bt-ee*lt;if(r){if(nt<0||Et<0||Bt<0)return null}else if((nt<0||Et<0||Bt<0)&&(nt>0||Et>0||Bt>0))return null;const St=nt+Et+Bt;if(St===0)return null;const $t=it*(nt*O+Et*k+Bt*et);return(St>0?$t<0:$t>0)?null:this.at($t/St,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ni extends Tr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Xu=new we,sr=new kc,Mo=new ba,$u=new A,So=new A,yo=new A,bo=new A,ll=new A,Eo=new A,Yu=new A,wo=new A;class Ot extends $e{constructor(t=new Ue,e=new ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Eo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&(ll.fromBufferAttribute(f,t),o?Eo.addScaledVector(ll,u):Eo.addScaledVector(ll.sub(e),u))}e.add(Eo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(s),sr.copy(t.ray).recast(t.near),!(Mo.containsPoint(sr.origin)===!1&&(sr.intersectSphere(Mo,$u)===null||sr.origin.distanceToSquared($u)>(t.far-t.near)**2))&&(Xu.copy(s).invert(),sr.copy(t.ray).applyMatrix4(Xu),!(i.boundingBox!==null&&sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,sr)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){const m=h[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),R=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=b,_=R;M<_;M+=3){const x=a.getX(M),T=a.getX(M+1),v=a.getX(M+2);r=To(this,p,t,i,l,u,f,x,T,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){const b=a.getX(m),R=a.getX(m+1),M=a.getX(m+2);r=To(this,o,t,i,l,u,f,b,R,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){const m=h[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),R=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let M=b,_=R;M<_;M+=3){const x=M,T=M+1,v=M+2;r=To(this,p,t,i,l,u,f,x,T,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){const b=m,R=m+1,M=m+2;r=To(this,o,t,i,l,u,f,b,R,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Hp(n,t,e,i,r,s,o,a){let c;if(t.side===_n?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===vr,a),c===null)return null;wo.copy(a),wo.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(wo);return l<e.near||l>e.far?null:{distance:l,point:wo.clone(),object:n}}function To(n,t,e,i,r,s,o,a,c,l){n.getVertexPosition(a,So),n.getVertexPosition(c,yo),n.getVertexPosition(l,bo);const u=Hp(n,t,e,i,So,yo,bo,Yu);if(u){const f=new A;En.getBarycoord(Yu,So,yo,bo,f),r&&(u.uv=En.getInterpolatedAttribute(r,a,c,l,f,new gt)),s&&(u.uv1=En.getInterpolatedAttribute(s,a,c,l,f,new gt)),o&&(u.normal=En.getInterpolatedAttribute(o,a,c,l,f,new A),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new A,materialIndex:0};En.getNormal(So,yo,bo,h.normal),u.face=h,u.barycoord=f}return u}class Vp extends an{constructor(t=null,e=1,i=1,r,s,o,a,c,l=je,u=je,f,h){super(null,o,a,c,l,u,r,s,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const or=new ba,Wp=new gt(.5,.5),Ao=new A;class Gc{constructor(t=new Ci,e=new Ci,i=new Ci,r=new Ci,s=new Ci,o=new Ci){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=fi,i=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],f=s[5],h=s[6],d=s[7],g=s[8],y=s[9],m=s[10],p=s[11],b=s[12],R=s[13],M=s[14],_=s[15];if(r[0].setComponents(l-o,d-u,p-g,_-b).normalize(),r[1].setComponents(l+o,d+u,p+g,_+b).normalize(),r[2].setComponents(l+a,d+f,p+y,_+R).normalize(),r[3].setComponents(l-a,d-f,p-y,_-R).normalize(),i)r[4].setComponents(c,h,m,M).normalize(),r[5].setComponents(l-c,d-h,p-m,_-M).normalize();else if(r[4].setComponents(l-c,d-h,p-m,_-M).normalize(),e===fi)r[5].setComponents(l+c,d+h,p+m,_+M).normalize();else if(e===Hs)r[5].setComponents(c,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(t){or.center.set(0,0,0);const e=Wp.distanceTo(t.center);return or.radius=.7071067811865476+e,or.applyMatrix4(t.matrixWorld),this.intersectsSphere(or)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Ao.x=r.normal.x>0?t.max.x:t.min.x,Ao.y=r.normal.y>0?t.max.y:t.min.y,Ao.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sd extends Tr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const oa=new A,aa=new A,qu=new we,ys=new kc,Ro=new ba,cl=new A,Ku=new A;class Xp extends $e{constructor(t=new Ue,e=new Sd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)oa.fromBufferAttribute(e,r-1),aa.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=oa.distanceTo(aa);t.setAttribute("lineDistance",new se(i,1))}else Nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(r),Ro.radius+=s,t.ray.intersectsSphere(Ro)===!1)return;qu.copy(r).invert(),ys.copy(t.ray).applyMatrix4(qu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=d,m=g-1;y<m;y+=l){const p=u.getX(y),b=u.getX(y+1),R=Co(this,t,ys,c,p,b,y);R&&e.push(R)}if(this.isLineLoop){const y=u.getX(g-1),m=u.getX(d),p=Co(this,t,ys,c,y,m,g-1);p&&e.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=d,m=g-1;y<m;y+=l){const p=Co(this,t,ys,c,y,y+1,y);p&&e.push(p)}if(this.isLineLoop){const y=Co(this,t,ys,c,g-1,d,g-1);y&&e.push(y)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Co(n,t,e,i,r,s,o){const a=n.geometry.attributes.position;if(oa.fromBufferAttribute(a,r),aa.fromBufferAttribute(a,s),e.distanceSqToSegment(oa,aa,cl,Ku)>i)return;cl.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(cl);if(!(l<t.near||l>t.far))return{distance:l,point:Ku.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Zu=new A,Ju=new A;class $p extends Xp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)Zu.fromBufferAttribute(e,r),Ju.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Zu.distanceTo(Ju);t.setAttribute("lineDistance",new se(i,1))}else Nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yd extends an{constructor(t=[],e=xr,i,r,s,o,a,c,l,u){super(t,e,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bd extends an{constructor(t,e,i,r,s,o,a,c,l){super(t,e,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ws extends an{constructor(t,e,i=_i,r,s,o,a=je,c=je,l,u=Oi,f=1){if(u!==Oi&&u!==dr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Yp extends Ws{constructor(t,e=_i,i=xr,r,s,o=je,a=je,c,l=Oi){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,i,r,s,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ed extends an{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ji extends Ue{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(f,2));function g(y,m,p,b,R,M,_,x,T,v,w){const D=M/T,L=_/v,O=M/2,B=_/2,U=x/2,k=T+1,q=v+1;let $=0,et=0;const Y=new A;for(let j=0;j<q;j++){const it=j*L-B;for(let lt=0;lt<k;lt++){const bt=lt*D-O;Y[y]=bt*b,Y[m]=it*R,Y[p]=U,l.push(Y.x,Y.y,Y.z),Y[y]=0,Y[m]=0,Y[p]=x>0?1:-1,u.push(Y.x,Y.y,Y.z),f.push(lt/T),f.push(1-j/v),$+=1}}for(let j=0;j<v;j++)for(let it=0;it<T;it++){const lt=h+it+k*j,bt=h+it+k*(j+1),xe=h+(it+1)+k*(j+1),ee=h+(it+1)+k*j;c.push(lt,bt,ee),c.push(bt,xe,ee),et+=6}a.addGroup(d,et,w),d+=et,h+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ji(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class wn extends Ue{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],d=[];let g=0;const y=[],m=i/2;let p=0;b(),o===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new se(f,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(d,2));function b(){const M=new A,_=new A;let x=0;const T=(e-t)/i;for(let v=0;v<=s;v++){const w=[],D=v/s,L=D*(e-t)+t;for(let O=0;O<=r;O++){const B=O/r,U=B*c+a,k=Math.sin(U),q=Math.cos(U);_.x=L*k,_.y=-D*i+m,_.z=L*q,f.push(_.x,_.y,_.z),M.set(k,T,q).normalize(),h.push(M.x,M.y,M.z),d.push(B,1-D),w.push(g++)}y.push(w)}for(let v=0;v<r;v++)for(let w=0;w<s;w++){const D=y[w][v],L=y[w+1][v],O=y[w+1][v+1],B=y[w][v+1];(t>0||w!==0)&&(u.push(D,L,B),x+=3),(e>0||w!==s-1)&&(u.push(L,O,B),x+=3)}l.addGroup(p,x,0),p+=x}function R(M){const _=g,x=new gt,T=new A;let v=0;const w=M===!0?t:e,D=M===!0?1:-1;for(let O=1;O<=r;O++)f.push(0,m*D,0),h.push(0,D,0),d.push(.5,.5),g++;const L=g;for(let O=0;O<=r;O++){const U=O/r*c+a,k=Math.cos(U),q=Math.sin(U);T.x=w*q,T.y=m*D,T.z=w*k,f.push(T.x,T.y,T.z),h.push(0,D,0),x.x=k*.5+.5,x.y=q*.5*D+.5,d.push(x.x,x.y),g++}for(let O=0;O<r;O++){const B=_+O,U=L+O;M===!0?u.push(U,U+1,B):u.push(U+1,U,B),v+=3}l.addGroup(p,v,M===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qs extends wn{constructor(t=1,e=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Qs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Hc extends Ue{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new se(s,3)),this.setAttribute("normal",new se(s.slice(),3)),this.setAttribute("uv",new se(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const R=new A,M=new A,_=new A;for(let x=0;x<e.length;x+=3)d(e[x+0],R),d(e[x+1],M),d(e[x+2],_),c(R,M,_,b)}function c(b,R,M,_){const x=_+1,T=[];for(let v=0;v<=x;v++){T[v]=[];const w=b.clone().lerp(M,v/x),D=R.clone().lerp(M,v/x),L=x-v;for(let O=0;O<=L;O++)O===0&&v===x?T[v][O]=w:T[v][O]=w.clone().lerp(D,O/L)}for(let v=0;v<x;v++)for(let w=0;w<2*(x-v)-1;w++){const D=Math.floor(w/2);w%2===0?(h(T[v][D+1]),h(T[v+1][D]),h(T[v][D])):(h(T[v][D+1]),h(T[v+1][D+1]),h(T[v+1][D]))}}function l(b){const R=new A;for(let M=0;M<s.length;M+=3)R.x=s[M+0],R.y=s[M+1],R.z=s[M+2],R.normalize().multiplyScalar(b),s[M+0]=R.x,s[M+1]=R.y,s[M+2]=R.z}function u(){const b=new A;for(let R=0;R<s.length;R+=3){b.x=s[R+0],b.y=s[R+1],b.z=s[R+2];const M=m(b)/2/Math.PI+.5,_=p(b)/Math.PI+.5;o.push(M,1-_)}g(),f()}function f(){for(let b=0;b<o.length;b+=6){const R=o[b+0],M=o[b+2],_=o[b+4],x=Math.max(R,M,_),T=Math.min(R,M,_);x>.9&&T<.1&&(R<.2&&(o[b+0]+=1),M<.2&&(o[b+2]+=1),_<.2&&(o[b+4]+=1))}}function h(b){s.push(b.x,b.y,b.z)}function d(b,R){const M=b*3;R.x=t[M+0],R.y=t[M+1],R.z=t[M+2]}function g(){const b=new A,R=new A,M=new A,_=new A,x=new gt,T=new gt,v=new gt;for(let w=0,D=0;w<s.length;w+=9,D+=6){b.set(s[w+0],s[w+1],s[w+2]),R.set(s[w+3],s[w+4],s[w+5]),M.set(s[w+6],s[w+7],s[w+8]),x.set(o[D+0],o[D+1]),T.set(o[D+2],o[D+3]),v.set(o[D+4],o[D+5]),_.copy(b).add(R).add(M).divideScalar(3);const L=m(_);y(x,D+0,b,L),y(T,D+2,R,L),y(v,D+4,M,L)}}function y(b,R,M,_){_<0&&b.x===1&&(o[R]=b.x-1),M.x===0&&M.z===0&&(o[R]=_/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hc(t.vertices,t.indices,t.radius,t.detail)}}const Po=new A,Do=new A,ul=new A,Lo=new En;class qp extends Ue{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(ns*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],f=new Array(3),h={},d=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:y,b:m,c:p}=Lo;if(y.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Lo.getNormal(ul),f[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,f[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,f[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let b=0;b<3;b++){const R=(b+1)%3,M=f[b],_=f[R],x=Lo[u[b]],T=Lo[u[R]],v=`${M}_${_}`,w=`${_}_${M}`;w in h&&h[w]?(ul.dot(h[w].normal)<=s&&(d.push(x.x,x.y,x.z),d.push(T.x,T.y,T.z)),h[w]=null):v in h||(h[v]={index0:l[b],index1:l[R],normal:ul.clone()})}}for(const g in h)if(h[g]){const{index0:y,index1:m}=h[g];Po.fromBufferAttribute(a,y),Do.fromBufferAttribute(a,m),d.push(Po.x,Po.y,Po.z),d.push(Do.x,Do.y,Do.z)}this.setAttribute("position",new se(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class zi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Nt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let r=0;const s=i.length;let o;e?o=e:o=t*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,d=(o-u)/h;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new gt:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new A,r=[],s=[],o=[],a=new A,c=new we;for(let d=0;d<=t;d++){const g=d/t;r[d]=this.getTangentAt(g,new A)}s[0]=new A,o[0]=new A;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Xt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(Xt(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class wd extends zi{constructor(t=0,e=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new gt){const i=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Kp extends wd{constructor(t,e,i,r,s,o){super(t,e,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Vc(){let n=0,t=0,e=0,i=0;function r(s,o,a,c){n=s,t=a,e=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,f){let h=(o-s)/l-(a-s)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,d*=u,r(o,a,h,d)},calc:function(s){const o=s*s,a=o*s;return n+t*s+e*o+i*a}}}const Qu=new A,ju=new A,hl=new Vc,dl=new Vc,fl=new Vc;class Td extends zi{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new A){const i=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(ju.subVectors(r[0],r[1]).add(r[0]),l=ju);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Qu.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Qu),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),hl.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,g,y,m),dl.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,g,y,m),fl.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,g,y,m)}else this.curveType==="catmullrom"&&(hl.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),dl.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),fl.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return i.set(hl.calc(c),dl.calc(c),fl.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new A().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function th(n,t,e,i,r){const s=(i-t)*.5,o=(r-e)*.5,a=n*n,c=n*a;return(2*e-2*i+s+o)*c+(-3*e+3*i-2*s-o)*a+s*n+e}function Zp(n,t){const e=1-n;return e*e*t}function Jp(n,t){return 2*(1-n)*n*t}function Qp(n,t){return n*n*t}function Is(n,t,e,i){return Zp(n,t)+Jp(n,e)+Qp(n,i)}function jp(n,t){const e=1-n;return e*e*e*t}function tm(n,t){const e=1-n;return 3*e*e*n*t}function em(n,t){return 3*(1-n)*n*n*t}function nm(n,t){return n*n*n*t}function Ns(n,t,e,i,r){return jp(n,t)+tm(n,e)+em(n,i)+nm(n,r)}class im extends zi{constructor(t=new gt,e=new gt,i=new gt,r=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new gt){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ns(t,r.x,s.x,o.x,a.x),Ns(t,r.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class rm extends zi{constructor(t=new A,e=new A,i=new A,r=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new A){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ns(t,r.x,s.x,o.x,a.x),Ns(t,r.y,s.y,o.y,a.y),Ns(t,r.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class sm extends zi{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class om extends zi{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class am extends zi{constructor(t=new gt,e=new gt,i=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new gt){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Is(t,r.x,s.x,o.x),Is(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ad extends zi{constructor(t=new A,e=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new A){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Is(t,r.x,s.x,o.x),Is(t,r.y,s.y,o.y),Is(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lm extends zi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const i=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(th(a,c.x,l.x,u.x,f.x),th(a,c.y,l.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new gt().fromArray(r))}return this}}var cm=Object.freeze({__proto__:null,ArcCurve:Kp,CatmullRomCurve3:Td,CubicBezierCurve:im,CubicBezierCurve3:rm,EllipseCurve:wd,LineCurve:sm,LineCurve3:om,QuadraticBezierCurve:am,QuadraticBezierCurve3:Ad,SplineCurve:lm});class Wc extends Hc{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Wc(t.radius,t.detail)}}class ii extends Ue{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,f=t/a,h=e/c,d=[],g=[],y=[],m=[];for(let p=0;p<u;p++){const b=p*h-o;for(let R=0;R<l;R++){const M=R*f-s;g.push(M,-b,0),y.push(0,0,1),m.push(R/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){const R=b+l*p,M=b+l*(p+1),_=b+1+l*(p+1),x=b+1+l*p;d.push(R,M,x),d.push(M,_,x)}this.setIndex(d),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(y,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.width,t.height,t.widthSegments,t.heightSegments)}}class Xc extends Ue{constructor(t=.5,e=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],l=[],u=[];let f=t;const h=(e-t)/r,d=new A,g=new gt;for(let y=0;y<=r;y++){for(let m=0;m<=i;m++){const p=s+m/i*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}f+=h}for(let y=0;y<r;y++){const m=y*(i+1);for(let p=0;p<i;p++){const b=p+m,R=b,M=b+i+1,_=b+i+2,x=b+1;a.push(R,M,x),a.push(M,_,x)}}this.setIndex(a),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ea extends Ue{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new A,h=new A,d=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){const b=[],R=p/i,M=o+R*a,_=t*Math.cos(M),x=Math.sqrt(t*t-_*_);let T=0;p===0&&o===0?T=.5/e:p===i&&c===Math.PI&&(T=-.5/e);for(let v=0;v<=e;v++){const w=v/e,D=r+w*s;f.x=-x*Math.cos(D),f.y=_,f.z=x*Math.sin(D),g.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),m.push(w+T,1-R),b.push(l++)}u.push(b)}for(let p=0;p<i;p++)for(let b=0;b<e;b++){const R=u[p][b+1],M=u[p][b],_=u[p+1][b],x=u[p+1][b+1];(p!==0||o>0)&&d.push(R,M,x),(p!==i-1||c<Math.PI)&&d.push(M,_,x)}this.setIndex(d),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(y,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ea(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class fs extends Ue{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s,thetaStart:o,thetaLength:a},i=Math.floor(i),r=Math.floor(r);const c=[],l=[],u=[],f=[],h=new A,d=new A,g=new A;for(let y=0;y<=i;y++){const m=o+y/i*a;for(let p=0;p<=r;p++){const b=p/r*s;d.x=(t+e*Math.cos(m))*Math.cos(b),d.y=(t+e*Math.cos(m))*Math.sin(b),d.z=e*Math.sin(m),l.push(d.x,d.y,d.z),h.x=t*Math.cos(b),h.y=t*Math.sin(b),g.subVectors(d,h).normalize(),u.push(g.x,g.y,g.z),f.push(p/r),f.push(y/i)}}for(let y=1;y<=i;y++)for(let m=1;m<=r;m++){const p=(r+1)*y+m-1,b=(r+1)*(y-1)+m-1,R=(r+1)*(y-1)+m,M=(r+1)*y+m;c.push(p,b,M),c.push(b,R,M)}this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class $c extends Ue{constructor(t=new Ad(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:r,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new A,c=new A,l=new gt;let u=new A;const f=[],h=[],d=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new se(f,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(d,2));function y(){for(let R=0;R<e;R++)m(R);m(s===!1?e:0),b(),p()}function m(R){u=t.getPointAt(R/e,u);const M=o.normals[R],_=o.binormals[R];for(let x=0;x<=r;x++){const T=x/r*Math.PI*2,v=Math.sin(T),w=-Math.cos(T);c.x=w*M.x+v*_.x,c.y=w*M.y+v*_.y,c.z=w*M.z+v*_.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,f.push(a.x,a.y,a.z)}}function p(){for(let R=1;R<=e;R++)for(let M=1;M<=r;M++){const _=(r+1)*(R-1)+(M-1),x=(r+1)*R+(M-1),T=(r+1)*R+M,v=(r+1)*(R-1)+M;g.push(_,x,v),g.push(x,T,v)}}function b(){for(let R=0;R<=e;R++)for(let M=0;M<=r;M++)l.x=R/e,l.y=M/r,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new $c(new cm[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function as(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];if(eh(r))r.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone();else if(Array.isArray(r))if(eh(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][i]=s}else t[e][i]=r.slice();else t[e][i]=r}}return t}function un(n){const t={};for(let e=0;e<n.length;e++){const i=as(n[e]);for(const r in i)t[r]=i[r]}return t}function eh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function um(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Rd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const hm={clone:as,merge:un};var dm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends Tr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dm,this.fragmentShader=fm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=as(t.uniforms),this.uniformsGroups=um(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const r=t.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=e[r.value]||null;break;case"c":this.uniforms[i].value=new qt().setHex(r.value);break;case"v2":this.uniforms[i].value=new gt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new A().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ie().fromArray(r.value);break;case"m3":this.uniforms[i].value=new zt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new we().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class pm extends Si{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ki extends Tr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pc,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class mm extends Tr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gm extends Tr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Cd extends $e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class _m extends Cd{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const pl=new we,nh=new A,ih=new A;class vm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gc,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;nh.setFromMatrixPosition(t.matrixWorld),e.position.copy(nh),ih.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ih),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,r){pl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(pl,t.coordinateSystem,t.reversedDepth);const s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;t.coordinateSystem===Hs||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(pl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Io=new A,No=new xi,ai=new A;class Pd extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Io,No,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Io,No,ai.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Io,No,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Io,No,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new A,rh=new gt,sh=new gt;class Wn extends Pd{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z)}getViewSize(t,e){return this.getViewBounds(t,rh,sh),e.subVectors(sh,rh)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ns*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class wa extends Pd{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class xm extends vm{constructor(){super(new wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mm extends Cd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new xm}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Vr=-90,Wr=1;class Sm extends $e{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Wn(Vr,Wr,t,e);r.layers=this.layers,this.add(r);const s=new Wn(Vr,Wr,t,e);s.layers=this.layers,this.add(s);const o=new Wn(Vr,Wr,t,e);o.layers=this.layers,this.add(o);const a=new Wn(Vr,Wr,t,e);a.layers=this.layers,this.add(a);const c=new Wn(Vr,Wr,t,e);c.layers=this.layers,this.add(c);const l=new Wn(Vr,Wr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Hs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ym extends Wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class oh{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Xt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const pu=class pu{constructor(t,e,i,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,r){const s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=r,this}};pu.prototype.isMatrix2=!0;let ah=pu;class bm extends Qi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function lh(n,t,e,i){const r=Em(i);switch(e){case ud:return n*t;case dd:return n*t/r.components*r.byteLength;case Lc:return n*t/r.components*r.byteLength;case Mr:return n*t*2/r.components*r.byteLength;case Ic:return n*t*2/r.components*r.byteLength;case hd:return n*t*3/r.components*r.byteLength;case Kn:return n*t*4/r.components*r.byteLength;case Nc:return n*t*4/r.components*r.byteLength;case Go:case Ho:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Vo:case Wo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case zl:case Gl:return Math.max(n,16)*Math.max(t,8)/4;case Bl:case kl:return Math.max(n,8)*Math.max(t,8)/2;case Hl:case Vl:case Xl:case $l:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Wl:case jo:case Yl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ql:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Kl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Zl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case jl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case tc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ec:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case nc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ic:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case rc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case sc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case oc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ac:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case lc:case cc:case uc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case hc:case dc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ta:case fc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Em(n){switch(n){case bn:case od:return{byteLength:1,components:1};case ks:case ad:case vi:return{byteLength:2,components:1};case Pc:case Dc:return{byteLength:2,components:4};case _i:case Cc:case di:return{byteLength:4,components:1};case ld:case cd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ac}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ac);function Dd(){let n=null,t=!1,e=null,i=null;function r(s,o){i=n.requestAnimationFrame(r),e(s,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function wm(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,f=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const u=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],y=f[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,f[h]=y)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const y=f[d];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Tm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Am=`#ifdef USE_ALPHAHASH
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
#endif`,Rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lm=`#ifdef USE_AOMAP
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
#endif`,Im=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nm=`#ifdef USE_BATCHING
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
#endif`,Um=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zm=`#ifdef USE_IRIDESCENCE
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
#endif`,km=`#ifdef USE_BUMPMAP
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
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Km=`#define PI 3.141592653589793
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
} // validated`,Zm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jm=`vec3 transformedNormal = objectNormal;
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
#endif`,Qm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,n0="gl_FragColor = linearToOutputTexel( gl_FragColor );",i0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,r0=`#ifdef USE_ENVMAP
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
#endif`,s0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,o0=`#ifdef USE_ENVMAP
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
#endif`,a0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,l0=`#ifdef USE_ENVMAP
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
#endif`,c0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,d0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f0=`#ifdef USE_GRADIENTMAP
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
}`,p0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,v0=`#ifdef USE_ENVMAP
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
#endif`,x0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,S0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b0=`PhysicalMaterial material;
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
#endif`,E0=`uniform sampler2D dfgLUT;
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
}`,w0=`
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
#endif`,T0=`#if defined( RE_IndirectDiffuse )
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
#endif`,A0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,R0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,C0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,P0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,N0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,F0=`#if defined( USE_POINTS_UV )
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
#endif`,O0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,B0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,k0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,G0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H0=`#ifdef USE_MORPHTARGETS
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
#endif`,V0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,X0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,K0=`#ifdef USE_NORMALMAP
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
#endif`,Z0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ng=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ig=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ag=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ug=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hg=`float getShadowMask() {
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
}`,dg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fg=`#ifdef USE_SKINNING
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
#endif`,pg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mg=`#ifdef USE_SKINNING
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
#endif`,gg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_g=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mg=`#ifdef USE_TRANSMISSION
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
#endif`,Sg=`#ifdef USE_TRANSMISSION
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
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ag=`uniform sampler2D t2D;
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
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`#include <common>
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
}`,Ig=`#if DEPTH_PACKING == 3200
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
}`,Ng=`#define DISTANCE
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
}`,Ug=`#define DISTANCE
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
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`uniform float scale;
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
}`,zg=`uniform vec3 diffuse;
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
}`,kg=`#include <common>
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
}`,Gg=`uniform vec3 diffuse;
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
}`,Hg=`#define LAMBERT
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
}`,Vg=`#define LAMBERT
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
}`,Wg=`#define MATCAP
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
}`,Xg=`#define MATCAP
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
}`,$g=`#define NORMAL
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
}`,Yg=`#define NORMAL
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
}`,qg=`#define PHONG
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
}`,Kg=`#define PHONG
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
}`,Zg=`#define STANDARD
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
}`,Jg=`#define STANDARD
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
}`,Qg=`#define TOON
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
}`,jg=`#define TOON
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
}`,t_=`uniform float size;
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
}`,e_=`uniform vec3 diffuse;
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
}`,n_=`#include <common>
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
}`,i_=`uniform vec3 color;
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
}`,r_=`uniform float rotation;
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
}`,s_=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:Tm,alphahash_pars_fragment:Am,alphamap_fragment:Rm,alphamap_pars_fragment:Cm,alphatest_fragment:Pm,alphatest_pars_fragment:Dm,aomap_fragment:Lm,aomap_pars_fragment:Im,batching_pars_vertex:Nm,batching_vertex:Um,begin_vertex:Fm,beginnormal_vertex:Om,bsdfs:Bm,iridescence_fragment:zm,bumpmap_pars_fragment:km,clipping_planes_fragment:Gm,clipping_planes_pars_fragment:Hm,clipping_planes_pars_vertex:Vm,clipping_planes_vertex:Wm,color_fragment:Xm,color_pars_fragment:$m,color_pars_vertex:Ym,color_vertex:qm,common:Km,cube_uv_reflection_fragment:Zm,defaultnormal_vertex:Jm,displacementmap_pars_vertex:Qm,displacementmap_vertex:jm,emissivemap_fragment:t0,emissivemap_pars_fragment:e0,colorspace_fragment:n0,colorspace_pars_fragment:i0,envmap_fragment:r0,envmap_common_pars_fragment:s0,envmap_pars_fragment:o0,envmap_pars_vertex:a0,envmap_physical_pars_fragment:v0,envmap_vertex:l0,fog_vertex:c0,fog_pars_vertex:u0,fog_fragment:h0,fog_pars_fragment:d0,gradientmap_pars_fragment:f0,lightmap_pars_fragment:p0,lights_lambert_fragment:m0,lights_lambert_pars_fragment:g0,lights_pars_begin:_0,lights_toon_fragment:x0,lights_toon_pars_fragment:M0,lights_phong_fragment:S0,lights_phong_pars_fragment:y0,lights_physical_fragment:b0,lights_physical_pars_fragment:E0,lights_fragment_begin:w0,lights_fragment_maps:T0,lights_fragment_end:A0,lightprobes_pars_fragment:R0,logdepthbuf_fragment:C0,logdepthbuf_pars_fragment:P0,logdepthbuf_pars_vertex:D0,logdepthbuf_vertex:L0,map_fragment:I0,map_pars_fragment:N0,map_particle_fragment:U0,map_particle_pars_fragment:F0,metalnessmap_fragment:O0,metalnessmap_pars_fragment:B0,morphinstance_vertex:z0,morphcolor_vertex:k0,morphnormal_vertex:G0,morphtarget_pars_vertex:H0,morphtarget_vertex:V0,normal_fragment_begin:W0,normal_fragment_maps:X0,normal_pars_fragment:$0,normal_pars_vertex:Y0,normal_vertex:q0,normalmap_pars_fragment:K0,clearcoat_normal_fragment_begin:Z0,clearcoat_normal_fragment_maps:J0,clearcoat_pars_fragment:Q0,iridescence_pars_fragment:j0,opaque_fragment:tg,packing:eg,premultiplied_alpha_fragment:ng,project_vertex:ig,dithering_fragment:rg,dithering_pars_fragment:sg,roughnessmap_fragment:og,roughnessmap_pars_fragment:ag,shadowmap_pars_fragment:lg,shadowmap_pars_vertex:cg,shadowmap_vertex:ug,shadowmask_pars_fragment:hg,skinbase_vertex:dg,skinning_pars_vertex:fg,skinning_vertex:pg,skinnormal_vertex:mg,specularmap_fragment:gg,specularmap_pars_fragment:_g,tonemapping_fragment:vg,tonemapping_pars_fragment:xg,transmission_fragment:Mg,transmission_pars_fragment:Sg,uv_pars_fragment:yg,uv_pars_vertex:bg,uv_vertex:Eg,worldpos_vertex:wg,background_vert:Tg,background_frag:Ag,backgroundCube_vert:Rg,backgroundCube_frag:Cg,cube_vert:Pg,cube_frag:Dg,depth_vert:Lg,depth_frag:Ig,distance_vert:Ng,distance_frag:Ug,equirect_vert:Fg,equirect_frag:Og,linedashed_vert:Bg,linedashed_frag:zg,meshbasic_vert:kg,meshbasic_frag:Gg,meshlambert_vert:Hg,meshlambert_frag:Vg,meshmatcap_vert:Wg,meshmatcap_frag:Xg,meshnormal_vert:$g,meshnormal_frag:Yg,meshphong_vert:qg,meshphong_frag:Kg,meshphysical_vert:Zg,meshphysical_frag:Jg,meshtoon_vert:Qg,meshtoon_frag:jg,points_vert:t_,points_frag:e_,shadow_vert:n_,shadow_frag:i_,sprite_vert:r_,sprite_frag:s_},mt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new A},probesMax:{value:new A},probesResolution:{value:new A}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},ui={basic:{uniforms:un([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:un([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:un([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:un([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:un([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:un([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:un([mt.points,mt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:un([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:un([mt.common,mt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:un([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:un([mt.sprite,mt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distance:{uniforms:un([mt.common,mt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distance_vert,fragmentShader:Wt.distance_frag},shadow:{uniforms:un([mt.lights,mt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};ui.physical={uniforms:un([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Uo={r:0,b:0,g:0},o_=new we,Ld=new zt;Ld.set(-1,0,0,0,1,0,0,0,1);function a_(n,t,e,i,r,s){const o=new qt(0);let a=r===!0?0:1,c,l,u=null,f=0,h=null;function d(b){let R=b.isScene===!0?b.background:null;if(R&&R.isTexture){const M=b.backgroundBlurriness>0;R=t.get(R,M)}return R}function g(b){let R=!1;const M=d(b);M===null?m(o,a):M&&M.isColor&&(m(M,1),R=!0);const _=n.xr.getEnvironmentBlendMode();_==="additive"?e.buffers.color.setClear(0,0,0,1,s):_==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(n.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(b,R){const M=d(R);M&&(M.isCubeTexture||M.mapping===ya)?(l===void 0&&(l=new Ot(new ji(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:as(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(_,x,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(o_.makeRotationFromEuler(R.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ld),l.material.toneMapped=te.getTransfer(M.colorSpace)!==fe,(u!==M||f!==M.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,h=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ot(new ii(2,2),new Si({name:"BackgroundMaterial",uniforms:as(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=te.getTransfer(M.colorSpace)!==fe,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,h=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,R){b.getRGB(Uo,Rd(n)),e.buffers.color.setClear(Uo.r,Uo.g,Uo.b,R,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,R=1){o.set(b),a=R,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(o,a)},render:g,addToRenderList:y,dispose:p}}function l_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(L,O,B,U,k){let q=!1;const $=f(L,U,B,O);s!==$&&(s=$,l(s.object)),q=d(L,U,B,k),q&&g(L,U,B,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,M(L,O,B,U),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return n.createVertexArray()}function l(L){return n.bindVertexArray(L)}function u(L){return n.deleteVertexArray(L)}function f(L,O,B,U){const k=U.wireframe===!0;let q=i[O.id];q===void 0&&(q={},i[O.id]=q);const $=L.isInstancedMesh===!0?L.id:0;let et=q[$];et===void 0&&(et={},q[$]=et);let Y=et[B.id];Y===void 0&&(Y={},et[B.id]=Y);let j=Y[k];return j===void 0&&(j=h(c()),Y[k]=j),j}function h(L){const O=[],B=[],U=[];for(let k=0;k<e;k++)O[k]=0,B[k]=0,U[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:B,attributeDivisors:U,object:L,attributes:{},index:null}}function d(L,O,B,U){const k=s.attributes,q=O.attributes;let $=0;const et=B.getAttributes();for(const Y in et)if(et[Y].location>=0){const it=k[Y];let lt=q[Y];if(lt===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(lt=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(lt=L.instanceColor)),it===void 0||it.attribute!==lt||lt&&it.data!==lt.data)return!0;$++}return s.attributesNum!==$||s.index!==U}function g(L,O,B,U){const k={},q=O.attributes;let $=0;const et=B.getAttributes();for(const Y in et)if(et[Y].location>=0){let it=q[Y];it===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(it=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(it=L.instanceColor));const lt={};lt.attribute=it,it&&it.data&&(lt.data=it.data),k[Y]=lt,$++}s.attributes=k,s.attributesNum=$,s.index=U}function y(){const L=s.newAttributes;for(let O=0,B=L.length;O<B;O++)L[O]=0}function m(L){p(L,0)}function p(L,O){const B=s.newAttributes,U=s.enabledAttributes,k=s.attributeDivisors;B[L]=1,U[L]===0&&(n.enableVertexAttribArray(L),U[L]=1),k[L]!==O&&(n.vertexAttribDivisor(L,O),k[L]=O)}function b(){const L=s.newAttributes,O=s.enabledAttributes;for(let B=0,U=O.length;B<U;B++)O[B]!==L[B]&&(n.disableVertexAttribArray(B),O[B]=0)}function R(L,O,B,U,k,q,$){$===!0?n.vertexAttribIPointer(L,O,B,k,q):n.vertexAttribPointer(L,O,B,U,k,q)}function M(L,O,B,U){y();const k=U.attributes,q=B.getAttributes(),$=O.defaultAttributeValues;for(const et in q){const Y=q[et];if(Y.location>=0){let j=k[et];if(j===void 0&&(et==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),et==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),j!==void 0){const it=j.normalized,lt=j.itemSize,bt=t.get(j);if(bt===void 0)continue;const xe=bt.buffer,ee=bt.type,ae=bt.bytesPerElement,Z=ee===n.INT||ee===n.UNSIGNED_INT||j.gpuType===Cc;if(j.isInterleavedBufferAttribute){const nt=j.data,Et=nt.stride,Bt=j.offset;if(nt.isInstancedInterleavedBuffer){for(let St=0;St<Y.locationSize;St++)p(Y.location+St,nt.meshPerAttribute);L.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let St=0;St<Y.locationSize;St++)m(Y.location+St);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let St=0;St<Y.locationSize;St++)R(Y.location+St,lt/Y.locationSize,ee,it,Et*ae,(Bt+lt/Y.locationSize*St)*ae,Z)}else{if(j.isInstancedBufferAttribute){for(let nt=0;nt<Y.locationSize;nt++)p(Y.location+nt,j.meshPerAttribute);L.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let nt=0;nt<Y.locationSize;nt++)m(Y.location+nt);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let nt=0;nt<Y.locationSize;nt++)R(Y.location+nt,lt/Y.locationSize,ee,it,lt*ae,lt/Y.locationSize*nt*ae,Z)}}else if($!==void 0){const it=$[et];if(it!==void 0)switch(it.length){case 2:n.vertexAttrib2fv(Y.location,it);break;case 3:n.vertexAttrib3fv(Y.location,it);break;case 4:n.vertexAttrib4fv(Y.location,it);break;default:n.vertexAttrib1fv(Y.location,it)}}}}b()}function _(){w();for(const L in i){const O=i[L];for(const B in O){const U=O[B];for(const k in U){const q=U[k];for(const $ in q)u(q[$].object),delete q[$];delete U[k]}}delete i[L]}}function x(L){if(i[L.id]===void 0)return;const O=i[L.id];for(const B in O){const U=O[B];for(const k in U){const q=U[k];for(const $ in q)u(q[$].object),delete q[$];delete U[k]}}delete i[L.id]}function T(L){for(const O in i){const B=i[O];for(const U in B){const k=B[U];if(k[L.id]===void 0)continue;const q=k[L.id];for(const $ in q)u(q[$].object),delete q[$];delete k[L.id]}}}function v(L){for(const O in i){const B=i[O],U=L.isInstancedMesh===!0?L.id:0,k=B[U];if(k!==void 0){for(const q in k){const $=k[q];for(const et in $)u($[et].object),delete $[et];delete k[q]}delete B[U],Object.keys(B).length===0&&delete i[O]}}}function w(){D(),o=!0,s!==r&&(s=r,l(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:w,resetDefaultState:D,dispose:_,releaseStatesOfGeometry:x,releaseStatesOfObject:v,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function c_(n,t,e){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),e.update(l,i,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];e.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function u_(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Kn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const v=T===vi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==bn&&T!==di&&!v&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(Nt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=n.getParameter(n.MAX_SAMPLES),x=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:R,maxFragmentUniforms:M,maxSamples:_,samples:x}}function h_(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new Ci,a=new zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const b=s?0:i,R=b*4;let M=p.clippingState||null;c.value=M,M=u(g,h,R,d);for(let _=0;_!==R;++_)M[_]=e[_];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,d,g){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=c.value,g!==!0||m===null){const p=d+y*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let R=0,M=d;R!==y;++R,M+=4)o.copy(f[R]).applyMatrix4(b,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}const Jr=4,d_=6,f_=20,p_=256,bs=new wa,ch=new qt;let ml=null,gl=0,_l=0,vl=!1;const m_=new A,ar=new A;class uh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,s={}){const{size:o=256,position:a=m_}=s;ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,r,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ml,gl,_l),this._renderer.xr.enabled=vl,t.scissorTest=!1,Xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xr||t.mapping===os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:vi,format:Kn,colorSpace:ea,depthBuffer:!1},r=hh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hh(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=g_(s)),this._blurMaterial=v_(s,t,e),this._ggxMaterial=__(s,t,e)}return r}_compileMaterial(t){const e=new Ot(new Ue,t);this._renderer.compile(e,bs)}_sceneToCubeUV(t,e,i,r,s){const c=new Wn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(ch),f.toneMapping=pi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ot(new ji,new ni({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let p=!1;const b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,p=!0):(m.color.copy(ch),p=!0);for(let R=0;R<6;R++){const M=R%3;M===0?(c.up.set(0,l[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[R],s.y,s.z)):M===1?(c.up.set(0,0,l[R]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[R],s.z)):(c.up.set(0,l[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[R]));const _=this._cubeSize;Xr(r,M*_,R>2?_:0,_,_),f.setRenderTarget(r),p&&f.render(y,c),f.render(t,c)}f.toneMapping=d,f.autoClear=h,t.background=b}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===xr||t.mapping===os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Xr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,bs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=l*1.25,d=f*h,{_lodMax:g}=this,y=this._sizeLods[i],m=3*y*(i>g-Jr?i-g+Jr:0),p=4*(this._cubeSize-y);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=g-e,Xr(s,m,p,3*y,2*y),r.setRenderTarget(s),r.render(a,bs),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,Xr(t,m,p,3*y,2*y),r.setRenderTarget(t),r.render(a,bs)}_blur(t,e,i,r){const s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,i,o),this._blurPass(s,t,i,i,o)}_blurPass(t,e,i,r,s){const o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[r];c.material=a;const l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-i;const u=this._sizeLods[r],f=3*u*(r>this._lodMax-Jr?r-this._lodMax+Jr:0),h=4*(this._cubeSize-u);Xr(e,f,h,3*u,2*u),o.setRenderTarget(e),o.render(c,bs)}}function g_(n){const t=[],e=[];let i=n;const r=n-Jr+1+d_;for(let s=0;s<r;s++){const o=Math.pow(2,i);t.push(o);const a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,d=3,g=new Float32Array(d*h*f),y=new Float32Array(d*h*f);for(let p=0;p<f;p++){const b=p%3*2/3-1,R=p>2?0:-1,M=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];g.set(M,d*h*p);for(let _=0;_<h;_++){const x=u[_*2]*2-1,T=u[_*2+1]*2-1;p===0?ar.set(1,T,x):p===1?ar.set(-x,1,-T):p===2?ar.set(-x,T,1):p===3?ar.set(-1,T,-x):p===4?ar.set(-x,-1,T):ar.set(x,T,-1),ar.toArray(y,(p*h+_)*d)}}const m=new Ue;m.setAttribute("position",new Jn(g,d)),m.setAttribute("outputDirection",new Jn(y,d)),e.push(new Ot(m,null)),i>Jr&&i--}return{lodMeshes:e,sizeLods:t}}function hh(n,t,e){const i=new Zn(n,t,e);return i.texture.mapping=ya,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xr(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function __(n,t,e){return new Si({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:p_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function v_(n,t,e){return new Si({name:"SphericalGaussianBlur",defines:{SAMPLES:f_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function dh(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function fh(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Ta(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Id extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new yd(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ji(5,5,5),s=new Si({name:"CubemapFromEquirect",uniforms:as(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Ii});s.uniforms.tEquirect.value=e;const o=new Ot(r,s),a=e.minFilter;return e.minFilter===hr&&(e.minFilter=on),new Sm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}function x_(n){let t=new WeakMap,e=new WeakMap,i=null;function r(h,d=!1){return h==null?null:d?o(h):s(h)}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ba||d===za)if(t.has(h)){const g=t.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const y=new Id(g.height);return y.fromEquirectangularTexture(n,h),t.set(h,y),h.addEventListener("dispose",l),a(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const d=h.mapping,g=d===Ba||d===za,y=d===xr||d===os;if(g||y){let m=e.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new uh(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const b=h.image;return g&&b&&b.height>0||y&&b&&c(b)?(i===null&&(i=new uh(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,d){return d===Ba?h.mapping=xr:d===za&&(h.mapping=os),h}function c(h){let d=0;const g=6;for(let y=0;y<g;y++)h[y]!==void 0&&d++;return d===g}function l(h){const d=h.target;d.removeEventListener("dispose",l);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function M_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&es("WebGLRenderer: "+i+" extension not supported."),r}}}function S_(n,t,e,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function c(f){const h=f.attributes;for(const d in h)t.update(h[d],n.ARRAY_BUFFER)}function l(f){const h=[],d=f.index,g=f.attributes.position;let y=0;if(g===void 0)return;if(d!==null){const b=d.array;y=d.version;for(let R=0,M=b.length;R<M;R+=3){const _=b[R+0],x=b[R+1],T=b[R+2];h.push(_,x,x,T,T,_)}}else{const b=g.array;y=g.version;for(let R=0,M=b.length/3-1;R<M;R+=3){const _=R+0,x=R+1,T=R+2;h.push(_,x,x,T,T,_)}}const m=new(g.count>=65535?xd:vd)(h,1);m.version=y;const p=s.get(f);p&&t.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function y_(n,t,e){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,h){n.drawElements(i,h,s,f*o),e.update(h,i,1)}function l(f,h,d){d!==0&&(n.drawElementsInstanced(i,h,s,f*o,d),e.update(h,i,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,d);let y=0;for(let m=0;m<d;m++)y+=h[m];e.update(y,i,1)}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function b_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:ie("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function E_(n,t,e){const i=new WeakMap,r=new Ie;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let D=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",D)};var d=D;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],R=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),y===!0&&(M=2),m===!0&&(M=3);let _=a.attributes.position.count*M,x=1;_>t.maxTextureSize&&(x=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const T=new Float32Array(_*x*4*f),v=new md(T,_,x,f);v.type=di,v.needsUpdate=!0;const w=M*4;for(let L=0;L<f;L++){const O=p[L],B=b[L],U=R[L],k=_*x*4*L;for(let q=0;q<O.count;q++){const $=q*w;g===!0&&(r.fromBufferAttribute(O,q),T[k+$+0]=r.x,T[k+$+1]=r.y,T[k+$+2]=r.z,T[k+$+3]=0),y===!0&&(r.fromBufferAttribute(B,q),T[k+$+4]=r.x,T[k+$+5]=r.y,T[k+$+6]=r.z,T[k+$+7]=0),m===!0&&(r.fromBufferAttribute(U,q),T[k+$+8]=r.x,T[k+$+9]=r.y,T[k+$+10]=r.z,T[k+$+11]=U.itemSize===4?r.w:1)}}h={count:f,texture:v,size:new gt(_,x)},i.set(a,h),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const y=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function w_(n,t,e,i,r){let s=new WeakMap;function o(l){const u=r.render.frame,f=l.geometry,h=t.get(l,f);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function a(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const T_={[jh]:"LINEAR_TONE_MAPPING",[td]:"REINHARD_TONE_MAPPING",[ed]:"CINEON_TONE_MAPPING",[Rc]:"ACES_FILMIC_TONE_MAPPING",[id]:"AGX_TONE_MAPPING",[rd]:"NEUTRAL_TONE_MAPPING",[nd]:"CUSTOM_TONE_MAPPING"};function A_(n,t,e,i,r,s){const o=new Zn(t,e,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null;const l=new Ue;l.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new se([0,2,0,0,2,0],2));const u=new pm({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ot(l,u),h=new wa(-1,1,1,-1,0,1);let d=null,g=null,y=!1,m,p=null,b=[],R=!1;this.setSize=function(M,_){o.setSize(M,_),a!==null&&a.setSize(M,_),c!==null&&c.setSize(M,_);for(let x=0;x<b.length;x++){const T=b[x];T.setSize&&T.setSize(M,_)}},this.setEffects=function(M){b=M,R=b.length>0&&b[0].isRenderPass===!0;const _=o.width,x=o.height;b.length>0&&a===null&&(a=new Zn(_,x,{type:vi,depthBuffer:!1,stencilBuffer:!1}),c=new Zn(_,x,{type:vi,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<b.length;T++){const v=b[T];v.setSize&&v.setSize(_,x)}},this.begin=function(M,_){if(y||M.toneMapping===pi&&b.length===0)return!1;if(p=_,_!==null){const x=_.width,T=_.height;(o.width!==x||o.height!==T)&&this.setSize(x,T)}return R===!1&&M.setRenderTarget(o),m=M.toneMapping,M.toneMapping=pi,!0},this.hasRenderPass=function(){return R},this.end=function(M,_){M.toneMapping=m,y=!0;let x=o,T=a;for(let v=0;v<b.length;v++){const w=b[v];w.enabled!==!1&&(w.render(M,T,x,_),w.needsSwap!==!1&&(x=T,T=T===a?c:a))}if(d!==M.outputColorSpace||g!==M.toneMapping){d=M.outputColorSpace,g=M.toneMapping,u.defines={},te.getTransfer(d)===fe&&(u.defines.SRGB_TRANSFER="");const v=T_[g];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,M.setRenderTarget(p),M.render(f,h),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const Nd=new an,mc=new Ws(1,1),Ud=new md,Fd=new Ep,Od=new yd,ph=[],mh=[],gh=new Float32Array(16),_h=new Float32Array(9),vh=new Float32Array(4);function ps(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=ph[r];if(s===void 0&&(s=new Float32Array(r),ph[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Ye(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function qe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Aa(n,t){let e=mh[t];e===void 0&&(e=new Int32Array(t),mh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function R_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function C_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;n.uniform2fv(this.addr,t),qe(e,t)}}function P_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;n.uniform3fv(this.addr,t),qe(e,t)}}function D_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;n.uniform4fv(this.addr,t),qe(e,t)}}function L_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,i))return;vh.set(i),n.uniformMatrix2fv(this.addr,!1,vh),qe(e,i)}}function I_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,i))return;_h.set(i),n.uniformMatrix3fv(this.addr,!1,_h),qe(e,i)}}function N_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,i))return;gh.set(i),n.uniformMatrix4fv(this.addr,!1,gh),qe(e,i)}}function U_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function F_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;n.uniform2iv(this.addr,t),qe(e,t)}}function O_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;n.uniform3iv(this.addr,t),qe(e,t)}}function B_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;n.uniform4iv(this.addr,t),qe(e,t)}}function z_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function k_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;n.uniform2uiv(this.addr,t),qe(e,t)}}function G_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;n.uniform3uiv(this.addr,t),qe(e,t)}}function H_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;n.uniform4uiv(this.addr,t),qe(e,t)}}function V_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(mc.compareFunction=e.isReversedDepthBuffer()?Fc:Uc,s=mc):s=Nd,e.setTexture2D(t||s,r)}function W_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Fd,r)}function X_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Od,r)}function $_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Ud,r)}function Y_(n){switch(n){case 5126:return R_;case 35664:return C_;case 35665:return P_;case 35666:return D_;case 35674:return L_;case 35675:return I_;case 35676:return N_;case 5124:case 35670:return U_;case 35667:case 35671:return F_;case 35668:case 35672:return O_;case 35669:case 35673:return B_;case 5125:return z_;case 36294:return k_;case 36295:return G_;case 36296:return H_;case 35678:case 36198:case 36298:case 36306:case 35682:return V_;case 35679:case 36299:case 36307:return W_;case 35680:case 36300:case 36308:case 36293:return X_;case 36289:case 36303:case 36311:case 36292:return $_}}function q_(n,t){n.uniform1fv(this.addr,t)}function K_(n,t){const e=ps(t,this.size,2);n.uniform2fv(this.addr,e)}function Z_(n,t){const e=ps(t,this.size,3);n.uniform3fv(this.addr,e)}function J_(n,t){const e=ps(t,this.size,4);n.uniform4fv(this.addr,e)}function Q_(n,t){const e=ps(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function j_(n,t){const e=ps(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function tv(n,t){const e=ps(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function ev(n,t){n.uniform1iv(this.addr,t)}function nv(n,t){n.uniform2iv(this.addr,t)}function iv(n,t){n.uniform3iv(this.addr,t)}function rv(n,t){n.uniform4iv(this.addr,t)}function sv(n,t){n.uniform1uiv(this.addr,t)}function ov(n,t){n.uniform2uiv(this.addr,t)}function av(n,t){n.uniform3uiv(this.addr,t)}function lv(n,t){n.uniform4uiv(this.addr,t)}function cv(n,t,e){const i=this.cache,r=t.length,s=Aa(e,r);Ye(i,s)||(n.uniform1iv(this.addr,s),qe(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=mc:o=Nd;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function uv(n,t,e){const i=this.cache,r=t.length,s=Aa(e,r);Ye(i,s)||(n.uniform1iv(this.addr,s),qe(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Fd,s[o])}function hv(n,t,e){const i=this.cache,r=t.length,s=Aa(e,r);Ye(i,s)||(n.uniform1iv(this.addr,s),qe(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Od,s[o])}function dv(n,t,e){const i=this.cache,r=t.length,s=Aa(e,r);Ye(i,s)||(n.uniform1iv(this.addr,s),qe(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Ud,s[o])}function fv(n){switch(n){case 5126:return q_;case 35664:return K_;case 35665:return Z_;case 35666:return J_;case 35674:return Q_;case 35675:return j_;case 35676:return tv;case 5124:case 35670:return ev;case 35667:case 35671:return nv;case 35668:case 35672:return iv;case 35669:case 35673:return rv;case 5125:return sv;case 36294:return ov;case 36295:return av;case 36296:return lv;case 35678:case 36198:case 36298:case 36306:case 35682:return cv;case 35679:case 36299:case 36307:return uv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return dv}}class pv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Y_(e.type)}}class mv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fv(e.type)}}class gv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const xl=/(\w+)(\])?(\[|\.)?/g;function xh(n,t){n.seq.push(t),n.map[t.id]=t}function _v(n,t,e){const i=n.name,r=i.length;for(xl.lastIndex=0;;){const s=xl.exec(i),o=xl.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){xh(e,l===void 0?new pv(a,n,t):new mv(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new gv(a),xh(e,f)),e=f}}}class Xo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);_v(a,c,this)}const r=[],s=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Mh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const vv=37297;let xv=0;function Mv(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Sh=new zt;function Sv(n){te._getMatrix(Sh,te.workingColorSpace,n);const t=`mat3( ${Sh.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(n)){case na:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function yh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Mv(n.getShaderSource(t),a)}else return s}function yv(n,t){const e=Sv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const bv={[jh]:"Linear",[td]:"Reinhard",[ed]:"Cineon",[Rc]:"ACESFilmic",[id]:"AgX",[rd]:"Neutral",[nd]:"Custom"};function Ev(n,t){const e=bv[t];return e===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Fo=new A;function wv(){te.getLuminanceCoefficients(Fo);const n=Fo.x.toFixed(4),t=Fo.y.toFixed(4),e=Fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function Av(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Rv(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Rs(n){return n!==""}function bh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Eh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(n){return n.replace(Cv,Dv)}const Pv=new Map;function Dv(n,t){let e=Wt[t];if(e===void 0){const i=Pv.get(t);if(i!==void 0)e=Wt[i],Nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return gc(e)}const Lv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wh(n){return n.replace(Lv,Iv)}function Iv(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Th(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}const Nv={[ko]:"SHADOWMAP_TYPE_PCF",[As]:"SHADOWMAP_TYPE_VSM"};function Uv(n){return Nv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Fv={[xr]:"ENVMAP_TYPE_CUBE",[os]:"ENVMAP_TYPE_CUBE",[ya]:"ENVMAP_TYPE_CUBE_UV"};function Ov(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Fv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Bv={[os]:"ENVMAP_MODE_REFRACTION"};function zv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Bv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const kv={[Qh]:"ENVMAP_BLENDING_MULTIPLY",[Gf]:"ENVMAP_BLENDING_MIX",[Hf]:"ENVMAP_BLENDING_ADD"};function Gv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":kv[n.combine]||"ENVMAP_BLENDING_NONE"}function Hv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Vv(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Uv(e),l=Ov(e),u=zv(e),f=Gv(e),h=Hv(e),d=Tv(e),g=Av(s),y=r.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rs).join(`
`),p.length>0&&(p+=`
`)):(m=[Th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),p=[Th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pi?"#define TONE_MAPPING":"",e.toneMapping!==pi?Wt.tonemapping_pars_fragment:"",e.toneMapping!==pi?Ev("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,yv("linearToOutputTexel",e.outputColorSpace),wv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rs).join(`
`)),o=gc(o),o=bh(o,e),o=Eh(o,e),a=gc(a),a=bh(a,e),a=Eh(a,e),o=wh(o),a=wh(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const R=b+m+o,M=b+p+a,_=Mh(r,r.VERTEX_SHADER,R),x=Mh(r,r.FRAGMENT_SHADER,M);r.attachShader(y,_),r.attachShader(y,x),e.index0AttributeName!==void 0?r.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(L){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(y)||"",B=r.getShaderInfoLog(_)||"",U=r.getShaderInfoLog(x)||"",k=O.trim(),q=B.trim(),$=U.trim();let et=!0,Y=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(et=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,_,x);else{const j=yh(r,_,"vertex"),it=yh(r,x,"fragment");ie("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+j+`
`+it)}else k!==""?Nt("WebGLProgram: Program Info Log:",k):(q===""||$==="")&&(Y=!1);Y&&(L.diagnostics={runnable:et,programLog:k,vertexShader:{log:q,prefix:m},fragmentShader:{log:$,prefix:p}})}r.deleteShader(_),r.deleteShader(x),v=new Xo(r,y),w=Rv(r,y)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(y,vv)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xv++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=_,this.fragmentShader=x,this}let Wv=0;class Xv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new $v(t),e.set(t,i)),i}}class $v{constructor(t){this.id=Wv++,this.code=t,this.usedTimes=0}}function Yv(n){return n===Mr||n===jo||n===ta}function qv(n,t,e,i,r,s){const o=new gd,a=new Xv,c=new Set,l=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function y(v,w,D,L,O,B){const U=L.fog,k=O.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,et=t.get(v.envMap||q,$),Y=et&&et.mapping===ya?et.image.height:null,j=d[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&Nt("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const it=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,lt=it!==void 0?it.length:0;let bt=0;k.morphAttributes.position!==void 0&&(bt=1),k.morphAttributes.normal!==void 0&&(bt=2),k.morphAttributes.color!==void 0&&(bt=3);let xe,ee,ae,Z;if(j){const Se=ui[j];xe=Se.vertexShader,ee=Se.fragmentShader}else{xe=v.vertexShader,ee=v.fragmentShader;const Se=a.getVertexShaderStage(v),le=a.getFragmentShaderStage(v);a.update(v,Se,le),ae=Se.id,Z=le.id}const nt=n.getRenderTarget(),Et=n.state.buffers.depth.getReversed(),Bt=O.isInstancedMesh===!0,St=O.isBatchedMesh===!0,$t=!!v.map,Ve=!!v.matcap,Kt=!!et,oe=!!v.aoMap,Me=!!v.lightMap,Jt=!!v.bumpMap&&v.wireframe===!1,Ae=!!v.normalMap,Ke=!!v.displacementMap,dn=!!v.emissiveMap,De=!!v.metalnessMap,ze=!!v.roughnessMap,F=v.anisotropy>0,tn=v.clearcoat>0,de=v.dispersion>0,C=v.retroreflectivity>0,S=v.iridescence>0,z=v.sheen>0,V=v.transmission>0,K=F&&!!v.anisotropyMap,at=tn&&!!v.clearcoatMap,ct=tn&&!!v.clearcoatNormalMap,J=tn&&!!v.clearcoatRoughnessMap,tt=S&&!!v.iridescenceMap,ut=S&&!!v.iridescenceThicknessMap,Ct=z&&!!v.sheenColorMap,pt=z&&!!v.sheenRoughnessMap,ht=!!v.specularMap,Pt=!!v.specularColorMap,It=!!v.specularIntensityMap,kt=V&&!!v.transmissionMap,N=V&&!!v.thicknessMap,dt=!!v.gradientMap,Q=!!v.alphaMap,ft=v.alphaTest>0,xt=!!v.alphaHash,st=!!v.extensions;let Dt=pi;v.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Dt=n.toneMapping);const At={shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:xe,fragmentShader:ee,defines:v.defines,customVertexShaderID:ae,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:St,batchingColor:St&&O._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&O.instanceColor!==null,instancingMorph:Bt&&O.morphTexture!==null,outputColorSpace:nt===null?n.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:$t,matcap:Ve,envMap:Kt,envMapMode:Kt&&et.mapping,envMapCubeUVHeight:Y,aoMap:oe,lightMap:Me,bumpMap:Jt,normalMap:Ae,displacementMap:Ke,emissiveMap:dn,normalMapObjectSpace:Ae&&v.normalMapType===Xf,normalMapTangentSpace:Ae&&v.normalMapType===pc,packedNormalMap:Ae&&v.normalMapType===pc&&Yv(v.normalMap.format),metalnessMap:De,roughnessMap:ze,anisotropy:F,anisotropyMap:K,clearcoat:tn,clearcoatMap:at,clearcoatNormalMap:ct,clearcoatRoughnessMap:J,dispersion:de,retroreflection:C,iridescence:S,iridescenceMap:tt,iridescenceThicknessMap:ut,sheen:z,sheenColorMap:Ct,sheenRoughnessMap:pt,specularMap:ht,specularColorMap:Pt,specularIntensityMap:It,transmission:V,transmissionMap:kt,thicknessMap:N,gradientMap:dt,opaque:v.transparent===!1&&v.blending===Ds&&v.alphaToCoverage===!1,alphaMap:Q,alphaTest:ft,alphaHash:xt,combine:v.combine,mapUv:$t&&g(v.map.channel),aoMapUv:oe&&g(v.aoMap.channel),lightMapUv:Me&&g(v.lightMap.channel),bumpMapUv:Jt&&g(v.bumpMap.channel),normalMapUv:Ae&&g(v.normalMap.channel),displacementMapUv:Ke&&g(v.displacementMap.channel),emissiveMapUv:dn&&g(v.emissiveMap.channel),metalnessMapUv:De&&g(v.metalnessMap.channel),roughnessMapUv:ze&&g(v.roughnessMap.channel),anisotropyMapUv:K&&g(v.anisotropyMap.channel),clearcoatMapUv:at&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ct&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:pt&&g(v.sheenRoughnessMap.channel),specularMapUv:ht&&g(v.specularMap.channel),specularColorMapUv:Pt&&g(v.specularColorMap.channel),specularIntensityMapUv:It&&g(v.specularIntensityMap.channel),transmissionMapUv:kt&&g(v.transmissionMap.channel),thicknessMapUv:N&&g(v.thicknessMap.channel),alphaMapUv:Q&&g(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ae||F),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!k.attributes.uv&&($t||Q),fog:!!U,useFog:v.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&Ae===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Et,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:bt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Dt,decodeVideoTexture:$t&&v.map.isVideoTexture===!0&&te.getTransfer(v.map.colorSpace)===fe,decodeVideoTextureEmissive:dn&&v.emissiveMap.isVideoTexture===!0&&te.getTransfer(v.emissiveMap.colorSpace)===fe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===sn,flipSided:v.side===_n,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:st&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&v.extensions.multiDraw===!0||St)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function m(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)w.push(D),w.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(p(w,v),b(w,v),w.push(n.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function p(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function b(v,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function R(v){const w=d[v.type];let D;if(w){const L=ui[w];D=hm.clone(L.uniforms)}else D=v.uniforms;return D}function M(v,w){let D=u.get(w);return D!==void 0?++D.usedTimes:(D=new Vv(n,w,v,r),l.push(D),u.set(w,D)),D}function _(v){if(--v.usedTimes===0){const w=l.indexOf(v);l[w]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function x(v){a.remove(v)}function T(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:R,acquireProgram:M,releaseProgram:_,releaseShaderCache:x,programs:l,dispose:T}}function Kv(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function Zv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Ah(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Rh(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,g,y,m,p){let b=n[t];return b===void 0?(b={id:h.id,object:h,geometry:d,material:g,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:p},n[t]=b):(b.id=h.id,b.object=h,b.geometry=d,b.material=g,b.materialVariant=o(h),b.groupOrder=y,b.renderOrder=h.renderOrder,b.z=m,b.group=p),t++,b}function c(h,d,g,y,m,p,b){b.reversedDepth===!0&&(m=-m);const R=a(h,d,g,y,m,p);g.transmission>0?i.push(R):g.transparent===!0?r.push(R):e.push(R)}function l(h,d,g,y,m,p){const b=a(h,d,g,y,m,p);g.transmission>0?i.unshift(b):g.transparent===!0?r.unshift(b):e.unshift(b)}function u(h,d){e.length>1&&e.sort(h||Zv),i.length>1&&i.sort(d||Ah),r.length>1&&r.sort(d||Ah)}function f(){for(let h=t,d=n.length;h<d;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:f,sort:u}}function Jv(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Rh,n.set(i,[o])):r>=s.length?(o=new Rh,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Qv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new A,color:new qt};break;case"SpotLight":e={position:new A,direction:new A,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new A,halfWidth:new A,halfHeight:new A};break}return n[t.id]=e,e}}}function jv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let tx=0;function ex(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function nx(n){const t=new Qv,e=jv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new A);const r=new A,s=new we,o=new we;function a(l){let u=0,f=0,h=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let d=0,g=0,y=0,m=0,p=0,b=0,R=0,M=0,_=0,x=0,T=0,v=0,w=0,D=0;l.sort(ex);for(let O=0,B=l.length;O<B;O++){const U=l[O],k=U.color,q=U.intensity,$=U.distance;let et=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Mr?et=U.shadow.map.texture:et=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=k.r*q,f+=k.g*q,h+=k.b*q;else if(U.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(U.sh.coefficients[Y],q);D++}else if(U.isSunLight){const Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const j=U.shadow,it=e.get(U);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[g]=it,i.sunShadowMap[g]=et;const lt=j.getViewportCount();for(let bt=0;bt<lt;bt++)i.sunShadowMatrix[y+bt]=j.getMatrix(bt),i.sunShadowCascade[y+bt]=j._cascadeData[bt];y+=lt,g++}i.sun[d]=Y,d++}else if(U.isDirectionalLight){const Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const j=U.shadow,it=e.get(U);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,i.directionalShadow[m]=it,i.directionalShadowMap[m]=et,i.directionalShadowMatrix[m]=U.shadow.matrix,_++}i.directional[m]=Y,m++}else if(U.isSpotLight){const Y=t.get(U);Y.position.setFromMatrixPosition(U.matrixWorld),Y.color.copy(k).multiplyScalar(q),Y.distance=$,Y.coneCos=Math.cos(U.angle),Y.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Y.decay=U.decay,i.spot[b]=Y;const j=U.shadow;if(U.map&&(i.spotLightMap[v]=U.map,v++,j.updateMatrices(U),U.castShadow&&w++),i.spotLightMatrix[b]=j.matrix,U.castShadow){const it=e.get(U);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,i.spotShadow[b]=it,i.spotShadowMap[b]=et,T++}b++}else if(U.isRectAreaLight){const Y=t.get(U);Y.color.copy(k).multiplyScalar(q),Y.halfWidth.set(U.width*.5,0,0),Y.halfHeight.set(0,U.height*.5,0),i.rectArea[R]=Y,R++}else if(U.isPointLight){const Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),Y.distance=U.distance,Y.decay=U.decay,U.castShadow){const j=U.shadow,it=e.get(U);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,it.shadowCameraNear=j.camera.near,it.shadowCameraFar=j.camera.far,i.pointShadow[p]=it,i.pointShadowMap[p]=et,i.pointShadowMatrix[p]=U.shadow.matrix,x++}i.point[p]=Y,p++}else if(U.isHemisphereLight){const Y=t.get(U);Y.skyColor.copy(U.color).multiplyScalar(q),Y.groundColor.copy(U.groundColor).multiplyScalar(q),i.hemi[M]=Y,M++}}R>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const L=i.hash;(L.sunLength!==d||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==b||L.rectAreaLength!==R||L.hemiLength!==M||L.numSunShadows!==g||L.numDirectionalShadows!==_||L.numPointShadows!==x||L.numSpotShadows!==T||L.numSpotMaps!==v||L.numLightProbes!==D)&&(i.sun.length=d,i.directional.length=m,i.spot.length=b,i.rectArea.length=R,i.point.length=p,i.hemi.length=M,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.directionalShadowMatrix.length=_,i.pointShadow.length=x,i.pointShadowMap.length=x,i.pointShadowMatrix.length=x,i.spotShadow.length=T,i.spotShadowMap.length=T,i.spotLightMatrix.length=T+v-w,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=D,L.sunLength=d,L.directionalLength=m,L.pointLength=p,L.spotLength=b,L.rectAreaLength=R,L.hemiLength=M,L.numSunShadows=g,L.numDirectionalShadows=_,L.numPointShadows=x,L.numSpotShadows=T,L.numSpotMaps=v,L.numLightProbes=D,i.version=tx++)}function c(l,u){let f=0,h=0,d=0,g=0,y=0,m=0;const p=u.matrixWorldInverse;for(let b=0,R=l.length;b<R;b++){const M=l[b];if(M.isSunLight){const _=i.sun[f];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(p),f++}else if(M.isDirectionalLight){const _=i.directional[h];_.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(p),h++}else if(M.isSpotLight){const _=i.spot[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const _=i.rectArea[y];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(p),o.identity(),s.copy(M.matrixWorld),s.premultiply(p),o.extractRotation(s),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){const _=i.point[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const _=i.hemi[m];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:i}}function Ch(n){const t=new nx(n),e=[],i=[],r=[];function s(h){f.camera=h,e.length=0,i.length=0,r.length=0}function o(h){e.push(h)}function a(h){i.push(h)}function c(h){r.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}const f={lightsArray:e,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function ix(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Ch(n),t.set(r,[a])):s>=o.length?(a=new Ch(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sx=`uniform sampler2D shadow_pass;
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
}`,ox=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],ax=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],Ph=new we,Es=new A,Ml=new A;function lx(n,t,e){let i=new Gc;const r=new gt,s=new gt,o=new Ie,a=new mm,c=new gm,l={},u=e.maxTextureSize,f={[vr]:_n,[_n]:vr,[sn]:sn},h=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:rx,fragmentShader:sx}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ue;g.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ot(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ko;let p=this.type;this.render=function(x,T,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;this.type===Kh&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ko);const w=n.getRenderTarget(),D=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Ii),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=p!==this.type;B&&T.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(k=>k.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,k=x.length;U<k;U++){const q=x[U],$=q.shadow;if($===void 0){Nt("WebGLShadowMap:",q,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const et=$.getFrameExtents();r.multiply(et),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/et.x),r.x=s.x*et.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/et.y),r.y=s.y*et.y,$.mapSize.y=s.y));const Y=n.state.buffers.depth.getReversed();if($.camera._reversedDepth=Y,$.map===null||B===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===As){if(q.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Zn(r.x,r.y,{format:Mr,type:vi,minFilter:on,magFilter:on,generateMipmaps:!1}),$.map.texture.name=q.name+".shadowMap",$.map.depthTexture=new Ws(r.x,r.y,di),$.map.depthTexture.name=q.name+".shadowMapDepth",$.map.depthTexture.format=Oi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=je,$.map.depthTexture.magFilter=je}else q.isPointLight?($.map=new Id(r.x),$.map.depthTexture=new Yp(r.x,_i)):($.map=new Zn(r.x,r.y),$.map.depthTexture=new Ws(r.x,r.y,_i)),$.map.depthTexture.name=q.name+".shadowMap",$.map.depthTexture.format=Oi,this.type===ko?($.map.depthTexture.compareFunction=Y?Fc:Uc,$.map.depthTexture.minFilter=on,$.map.depthTexture.magFilter=on):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=je,$.map.depthTexture.magFilter=je);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==r.x||$.map.height!==r.y)&&$.map.setSize(r.x,r.y);const j=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();q.isPointLight!==!0&&$.updateMatrices(q,v);for(let it=0;it<j;it++){const lt=$.getCamera(it);if(q.isPointLight){const bt=$.camera,xe=$.matrix,ee=q.distance||bt.far;ee!==bt.far&&(bt.far=ee,bt.updateProjectionMatrix()),Es.setFromMatrixPosition(q.matrixWorld),bt.position.copy(Es),Ml.copy(bt.position),Ml.add(ox[it]),bt.up.copy(ax[it]),bt.lookAt(Ml),bt.updateMatrixWorld(),xe.makeTranslation(-Es.x,-Es.y,-Es.z),Ph.multiplyMatrices(bt.projectionMatrix,bt.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Ph,bt.coordinateSystem,bt.reversedDepth)}if($.map.isWebGLCubeRenderTarget)n.setRenderTarget($.map,it),n.clear();else{it===0&&(n.setRenderTarget($.map),n.clear());const bt=$.getViewport(it);o.set(s.x*bt.x,s.y*bt.y,s.x*bt.z,s.y*bt.w),O.viewport(o)}i=$.getFrustum(it),M(T,v,lt,q,this.type)}$.isPointLightShadow!==!0&&this.type===As&&b($,v),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,D,L)};function b(x,T){const v=t.update(y);h.defines.VSM_SAMPLES!==x.blurSamples&&(h.defines.VSM_SAMPLES=x.blurSamples,d.defines.VSM_SAMPLES=x.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),x.mapPass===null?x.mapPass=new Zn(r.x,r.y,{format:Mr,type:vi}):(x.mapPass.width!==x.map.width||x.mapPass.height!==x.map.height)&&x.mapPass.setSize(x.map.width,x.map.height),h.uniforms.shadow_pass.value=x.map.depthTexture,h.uniforms.resolution.value.set(x.map.width,x.map.height),h.uniforms.radius.value=x.radius,n.setRenderTarget(x.mapPass),n.clear(),n.renderBufferDirect(T,null,v,h,y,null),d.uniforms.shadow_pass.value=x.mapPass.texture,d.uniforms.resolution.value.set(x.map.width,x.map.height),d.uniforms.radius.value=x.radius,n.setRenderTarget(x.map),n.clear(),n.renderBufferDirect(T,null,v,d,y,null)}function R(x,T,v,w){let D=null;const L=v.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(L!==void 0)D=L;else if(D=v.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const O=D.uuid,B=T.uuid;let U=l[O];U===void 0&&(U={},l[O]=U);let k=U[B];k===void 0&&(k=D.clone(),U[B]=k,T.addEventListener("dispose",_)),D=k}if(D.visible=T.visible,D.wireframe=T.wireframe,w===As?D.side=T.shadowSide!==null?T.shadowSide:T.side:D.side=T.shadowSide!==null?T.shadowSide:f[T.side],D.alphaMap=T.alphaMap,D.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,D.map=T.map,D.clipShadows=T.clipShadows,D.clippingPlanes=T.clippingPlanes,D.clipIntersection=T.clipIntersection,D.displacementMap=T.displacementMap,D.displacementScale=T.displacementScale,D.displacementBias=T.displacementBias,D.wireframeLinewidth=T.wireframeLinewidth,D.linewidth=T.linewidth,v.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const O=n.properties.get(D);O.light=v}return D}function M(x,T,v,w,D){if(x.visible===!1)return;if(x.layers.test(T.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&D===As)&&(!x.frustumCulled||x.intersectsFrustum(i))){x.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,x.matrixWorld);const B=t.update(x),U=x.material;if(Array.isArray(U)){const k=B.groups;for(let q=0,$=k.length;q<$;q++){const et=k[q],Y=U[et.materialIndex];if(Y&&Y.visible){const j=R(x,Y,w,D);x.onBeforeShadow(n,x,T,v,B,j,et),n.renderBufferDirect(v,null,B,j,x,et),x.onAfterShadow(n,x,T,v,B,j,et)}}}else if(U.visible){const k=R(x,U,w,D);x.onBeforeShadow(n,x,T,v,B,k,null),n.renderBufferDirect(v,null,B,k,x,null),x.onAfterShadow(n,x,T,v,B,k,null)}}const O=x.children;for(let B=0,U=O.length;B<U;B++)M(O[B],T,v,w,D)}function _(x){x.target.removeEventListener("dispose",_);for(const v in l){const w=l[v],D=x.target.uuid;D in w&&(w[D].dispose(),delete w[D])}}}function cx(n,t){function e(){let N=!1;const dt=new Ie;let Q=null;const ft=new Ie(0,0,0,0);return{setMask:function(xt){Q!==xt&&!N&&(n.colorMask(xt,xt,xt,xt),Q=xt)},setLocked:function(xt){N=xt},setClear:function(xt,st,Dt,At,Se){Se===!0&&(xt*=At,st*=At,Dt*=At),dt.set(xt,st,Dt,At),ft.equals(dt)===!1&&(n.clearColor(xt,st,Dt,At),ft.copy(dt))},reset:function(){N=!1,Q=null,ft.set(-1,0,0,0)}}}function i(){let N=!1,dt=!1,Q=null,ft=null,xt=null;return{setReversed:function(st){if(dt!==st){const Dt=t.get("EXT_clip_control");st?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),dt=st;const At=xt;xt=null,this.setClear(At)}},getReversed:function(){return dt},setTest:function(st){st?nt(n.DEPTH_TEST):Et(n.DEPTH_TEST)},setMask:function(st){Q!==st&&!N&&(n.depthMask(st),Q=st)},setFunc:function(st){if(dt&&(st=np[st]),ft!==st){switch(st){case Cl:n.depthFunc(n.NEVER);break;case Pl:n.depthFunc(n.ALWAYS);break;case Dl:n.depthFunc(n.LESS);break;case zs:n.depthFunc(n.LEQUAL);break;case Ll:n.depthFunc(n.EQUAL);break;case Il:n.depthFunc(n.GEQUAL);break;case Nl:n.depthFunc(n.GREATER);break;case Ul:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ft=st}},setLocked:function(st){N=st},setClear:function(st){xt!==st&&(xt=st,dt&&(st=1-st),n.clearDepth(st))},reset:function(){N=!1,Q=null,ft=null,xt=null,dt=!1}}}function r(){let N=!1,dt=null,Q=null,ft=null,xt=null,st=null,Dt=null,At=null,Se=null;return{setTest:function(le){N||(le?nt(n.STENCIL_TEST):Et(n.STENCIL_TEST))},setMask:function(le){dt!==le&&!N&&(n.stencilMask(le),dt=le)},setFunc:function(le,On,si){(Q!==le||ft!==On||xt!==si)&&(n.stencilFunc(le,On,si),Q=le,ft=On,xt=si)},setOp:function(le,On,si){(st!==le||Dt!==On||At!==si)&&(n.stencilOp(le,On,si),st=le,Dt=On,At=si)},setLocked:function(le){N=le},setClear:function(le){Se!==le&&(n.clearStencil(le),Se=le)},reset:function(){N=!1,dt=null,Q=null,ft=null,xt=null,st=null,Dt=null,At=null,Se=null}}}const s=new e,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},f={},h={},d=new WeakMap,g=[],y=null,m=!1,p=null,b=null,R=null,M=null,_=null,x=null,T=null,v=new qt(0,0,0),w=0,D=!1,L=null,O=null,B=null,U=null,k=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,et=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(Y)[1]),$=et>=1):Y.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),$=et>=2);let j=null,it={};const lt=n.getParameter(n.SCISSOR_BOX),bt=n.getParameter(n.VIEWPORT),xe=new Ie().fromArray(lt),ee=new Ie().fromArray(bt);function ae(N,dt,Q,ft){const xt=new Uint8Array(4),st=n.createTexture();n.bindTexture(N,st),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Dt=0;Dt<Q;Dt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(dt,0,n.RGBA,1,1,ft,0,n.RGBA,n.UNSIGNED_BYTE,xt):n.texImage2D(dt+Dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xt);return st}const Z={};Z[n.TEXTURE_2D]=ae(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(n.DEPTH_TEST),o.setFunc(zs),Jt(!1),Ae(wu),nt(n.CULL_FACE),oe(Ii);function nt(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function Et(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Bt(N,dt){return h[N]!==dt?(n.bindFramebuffer(N,dt),h[N]=dt,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=dt),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=dt),!0):!1}function St(N,dt){let Q=g,ft=!1;if(N){Q=d.get(dt),Q===void 0&&(Q=[],d.set(dt,Q));const xt=N.textures;if(Q.length!==xt.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let st=0,Dt=xt.length;st<Dt;st++)Q[st]=n.COLOR_ATTACHMENT0+st;Q.length=xt.length,ft=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,ft=!0);ft&&n.drawBuffers(Q)}function $t(N){return y!==N?(n.useProgram(N),y=N,!0):!1}const Ve={[qr]:n.FUNC_ADD,[Ef]:n.FUNC_SUBTRACT,[wf]:n.FUNC_REVERSE_SUBTRACT};Ve[Tf]=n.MIN,Ve[Af]=n.MAX;const Kt={[Rf]:n.ZERO,[Cf]:n.ONE,[Pf]:n.SRC_COLOR,[Zh]:n.SRC_ALPHA,[Ff]:n.SRC_ALPHA_SATURATE,[Nf]:n.DST_COLOR,[Lf]:n.DST_ALPHA,[Df]:n.ONE_MINUS_SRC_COLOR,[Jh]:n.ONE_MINUS_SRC_ALPHA,[Uf]:n.ONE_MINUS_DST_COLOR,[If]:n.ONE_MINUS_DST_ALPHA,[Of]:n.CONSTANT_COLOR,[Bf]:n.ONE_MINUS_CONSTANT_COLOR,[zf]:n.CONSTANT_ALPHA,[kf]:n.ONE_MINUS_CONSTANT_ALPHA};function oe(N,dt,Q,ft,xt,st,Dt,At,Se,le){if(N===Ii){m===!0&&(Et(n.BLEND),m=!1);return}if(m===!1&&(nt(n.BLEND),m=!0),N!==bf){if(N!==p||le!==D){if((b!==qr||_!==qr)&&(n.blendEquation(n.FUNC_ADD),b=qr,_=qr),le)switch(N){case Ds:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tu:n.blendFunc(n.ONE,n.ONE);break;case Au:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ru:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ie("WebGLState: Invalid blending: ",N);break}else switch(N){case Ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Au:ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ru:ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ie("WebGLState: Invalid blending: ",N);break}R=null,M=null,x=null,T=null,v.set(0,0,0),w=0,p=N,D=le}return}xt=xt||dt,st=st||Q,Dt=Dt||ft,(dt!==b||xt!==_)&&(n.blendEquationSeparate(Ve[dt],Ve[xt]),b=dt,_=xt),(Q!==R||ft!==M||st!==x||Dt!==T)&&(n.blendFuncSeparate(Kt[Q],Kt[ft],Kt[st],Kt[Dt]),R=Q,M=ft,x=st,T=Dt),(At.equals(v)===!1||Se!==w)&&(n.blendColor(At.r,At.g,At.b,Se),v.copy(At),w=Se),p=N,D=!1}function Me(N,dt){N.side===sn?Et(n.CULL_FACE):nt(n.CULL_FACE);let Q=N.side===_n;dt&&(Q=!Q),Jt(Q),N.blending===Ds&&N.transparent===!1?oe(Ii):oe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const ft=N.stencilWrite;a.setTest(ft),ft&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),dn(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?nt(n.SAMPLE_ALPHA_TO_COVERAGE):Et(n.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(N){L!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),L=N)}function Ae(N){N!==Sf?(nt(n.CULL_FACE),N!==O&&(N===wu?n.cullFace(n.BACK):N===yf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Et(n.CULL_FACE),O=N}function Ke(N){N!==B&&($&&n.lineWidth(N),B=N)}function dn(N,dt,Q){N?(nt(n.POLYGON_OFFSET_FILL),(U!==dt||k!==Q)&&(U=dt,k=Q,o.getReversed()&&(dt=-dt),n.polygonOffset(dt,Q))):Et(n.POLYGON_OFFSET_FILL)}function De(N){N?nt(n.SCISSOR_TEST):Et(n.SCISSOR_TEST)}function ze(N){N===void 0&&(N=n.TEXTURE0+q-1),j!==N&&(n.activeTexture(N),j=N)}function F(N,dt,Q){Q===void 0&&(j===null?Q=n.TEXTURE0+q-1:Q=j);let ft=it[Q];ft===void 0&&(ft={type:void 0,texture:void 0},it[Q]=ft),(ft.type!==N||ft.texture!==dt)&&(j!==Q&&(n.activeTexture(Q),j=Q),n.bindTexture(N,dt||Z[N]),ft.type=N,ft.texture=dt)}function tn(){const N=it[j];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function de(){try{n.compressedTexImage2D(...arguments)}catch(N){ie("WebGLState:",N)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(N){ie("WebGLState:",N)}}function S(){try{n.texSubImage2D(...arguments)}catch(N){ie("WebGLState:",N)}}function z(){try{n.texSubImage3D(...arguments)}catch(N){ie("WebGLState:",N)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(N){ie("WebGLState:",N)}}function K(){try{n.compressedTexSubImage3D(...arguments)}catch(N){ie("WebGLState:",N)}}function at(){try{n.texStorage2D(...arguments)}catch(N){ie("WebGLState:",N)}}function ct(){try{n.texStorage3D(...arguments)}catch(N){ie("WebGLState:",N)}}function J(){try{n.texImage2D(...arguments)}catch(N){ie("WebGLState:",N)}}function tt(){try{n.texImage3D(...arguments)}catch(N){ie("WebGLState:",N)}}function ut(N){return f[N]!==void 0?f[N]:n.getParameter(N)}function Ct(N,dt){f[N]!==dt&&(n.pixelStorei(N,dt),f[N]=dt)}function pt(N){xe.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),xe.copy(N))}function ht(N){ee.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ee.copy(N))}function Pt(N,dt){let Q=l.get(dt);Q===void 0&&(Q=new WeakMap,l.set(dt,Q));let ft=Q.get(N);ft===void 0&&(ft=n.getUniformBlockIndex(dt,N.name),Q.set(N,ft))}function It(N,dt){const ft=l.get(dt).get(N);c.get(dt)!==ft&&(n.uniformBlockBinding(dt,ft,N.__bindingPointIndex),c.set(dt,ft))}function kt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},j=null,it={},h={},d=new WeakMap,g=[],y=null,m=!1,p=null,b=null,R=null,M=null,_=null,x=null,T=null,v=new qt(0,0,0),w=0,D=!1,L=null,O=null,B=null,U=null,k=null,xe.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:nt,disable:Et,bindFramebuffer:Bt,drawBuffers:St,useProgram:$t,setBlending:oe,setMaterial:Me,setFlipSided:Jt,setCullFace:Ae,setLineWidth:Ke,setPolygonOffset:dn,setScissorTest:De,activeTexture:ze,bindTexture:F,unbindTexture:tn,compressedTexImage2D:de,compressedTexImage3D:C,texImage2D:J,texImage3D:tt,pixelStorei:Ct,getParameter:ut,updateUBOMapping:Pt,uniformBlockBinding:It,texStorage2D:at,texStorage3D:ct,texSubImage2D:S,texSubImage3D:z,compressedTexSubImage2D:V,compressedTexSubImage3D:K,scissor:pt,viewport:ht,reset:kt}}function ux(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new gt,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,S){return g?new OffscreenCanvas(C,S):ia("canvas")}function m(C,S,z){let V=1;const K=de(C);if((K.width>z||K.height>z)&&(V=z/Math.max(K.width,K.height)),V<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const at=Math.floor(V*K.width),ct=Math.floor(V*K.height);h===void 0&&(h=y(at,ct));const J=S?y(at,ct):h;return J.width=at,J.height=ct,J.getContext("2d").drawImage(C,0,0,at,ct),Nt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+at+"x"+ct+")."),J}else return"data"in C&&Nt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function p(C){return C.generateMipmaps}function b(C){n.generateMipmap(C)}function R(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(C,S,z,V,K,at=!1){if(C!==null){if(n[C]!==void 0)return n[C];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ct;V&&(ct=t.get("EXT_texture_norm16"),ct||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=S;if(S===n.RED&&(z===n.FLOAT&&(J=n.R32F),z===n.HALF_FLOAT&&(J=n.R16F),z===n.UNSIGNED_BYTE&&(J=n.R8),z===n.UNSIGNED_SHORT&&ct&&(J=ct.R16_EXT),z===n.SHORT&&ct&&(J=ct.R16_SNORM_EXT)),S===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.R8UI),z===n.UNSIGNED_SHORT&&(J=n.R16UI),z===n.UNSIGNED_INT&&(J=n.R32UI),z===n.BYTE&&(J=n.R8I),z===n.SHORT&&(J=n.R16I),z===n.INT&&(J=n.R32I)),S===n.RG&&(z===n.FLOAT&&(J=n.RG32F),z===n.HALF_FLOAT&&(J=n.RG16F),z===n.UNSIGNED_BYTE&&(J=n.RG8),z===n.UNSIGNED_SHORT&&ct&&(J=ct.RG16_EXT),z===n.SHORT&&ct&&(J=ct.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RG8UI),z===n.UNSIGNED_SHORT&&(J=n.RG16UI),z===n.UNSIGNED_INT&&(J=n.RG32UI),z===n.BYTE&&(J=n.RG8I),z===n.SHORT&&(J=n.RG16I),z===n.INT&&(J=n.RG32I)),S===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RGB8UI),z===n.UNSIGNED_SHORT&&(J=n.RGB16UI),z===n.UNSIGNED_INT&&(J=n.RGB32UI),z===n.BYTE&&(J=n.RGB8I),z===n.SHORT&&(J=n.RGB16I),z===n.INT&&(J=n.RGB32I)),S===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),z===n.UNSIGNED_INT&&(J=n.RGBA32UI),z===n.BYTE&&(J=n.RGBA8I),z===n.SHORT&&(J=n.RGBA16I),z===n.INT&&(J=n.RGBA32I)),S===n.RGB&&(z===n.UNSIGNED_SHORT&&ct&&(J=ct.RGB16_EXT),z===n.SHORT&&ct&&(J=ct.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),S===n.RGBA){const tt=at?na:te.getTransfer(K);z===n.FLOAT&&(J=n.RGBA32F),z===n.HALF_FLOAT&&(J=n.RGBA16F),z===n.UNSIGNED_BYTE&&(J=tt===fe?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&ct&&(J=ct.RGBA16_EXT),z===n.SHORT&&ct&&(J=ct.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function _(C,S){let z;return C?S===null||S===_i||S===Gs?z=n.DEPTH24_STENCIL8:S===di?z=n.DEPTH32F_STENCIL8:S===ks&&(z=n.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===_i||S===Gs?z=n.DEPTH_COMPONENT24:S===di?z=n.DEPTH_COMPONENT32F:S===ks&&(z=n.DEPTH_COMPONENT16),z}function x(C,S){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==je&&C.minFilter!==on?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function T(C){const S=C.target;S.removeEventListener("dispose",T),w(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&f.delete(S)}function v(C){const S=C.target;S.removeEventListener("dispose",v),L(S)}function w(C){const S=i.get(C);if(S.__webglInit===void 0)return;const z=C.source,V=d.get(z);if(V){const K=V[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&D(C),Object.keys(V).length===0&&d.delete(z)}i.remove(C)}function D(C){const S=i.get(C);n.deleteTexture(S.__webglTexture);const z=C.source,V=d.get(z);delete V[S.__cacheKey],o.memory.textures--}function L(C){const S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(S.__webglFramebuffer[V]))for(let K=0;K<S.__webglFramebuffer[V].length;K++)n.deleteFramebuffer(S.__webglFramebuffer[V][K]);else n.deleteFramebuffer(S.__webglFramebuffer[V]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[V])}else{if(Array.isArray(S.__webglFramebuffer))for(let V=0;V<S.__webglFramebuffer.length;V++)n.deleteFramebuffer(S.__webglFramebuffer[V]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let V=0;V<S.__webglColorRenderbuffer.length;V++)S.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[V]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=C.textures;for(let V=0,K=z.length;V<K;V++){const at=i.get(z[V]);at.__webglTexture&&(n.deleteTexture(at.__webglTexture),o.memory.textures--),i.remove(z[V])}i.remove(C)}let O=0;function B(){O=0}function U(){return O}function k(C){O=C}function q(){const C=O;return C>=r.maxTextures&&Nt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures),O+=1,C}function $(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function et(C,S){const z=i.get(C);if(C.isVideoTexture&&F(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){const V=C.image;if(V===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Et(z,C,S);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+S)}function Y(C,S){const z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Et(z,C,S);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+S)}function j(C,S){const z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Et(z,C,S);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+S)}function it(C,S){const z=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){Bt(z,C,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+S)}const lt={[Fl]:n.REPEAT,[Di]:n.CLAMP_TO_EDGE,[Ol]:n.MIRRORED_REPEAT},bt={[je]:n.NEAREST,[Vf]:n.NEAREST_MIPMAP_NEAREST,[oo]:n.NEAREST_MIPMAP_LINEAR,[on]:n.LINEAR,[ka]:n.LINEAR_MIPMAP_NEAREST,[hr]:n.LINEAR_MIPMAP_LINEAR},xe={[Yf]:n.NEVER,[Qf]:n.ALWAYS,[qf]:n.LESS,[Uc]:n.LEQUAL,[Kf]:n.EQUAL,[Fc]:n.GEQUAL,[Zf]:n.GREATER,[Jf]:n.NOTEQUAL};function ee(C,S){if(S.type===di&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===on||S.magFilter===ka||S.magFilter===oo||S.magFilter===hr||S.minFilter===on||S.minFilter===ka||S.minFilter===oo||S.minFilter===hr)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,lt[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,lt[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,lt[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,bt[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,bt[S.minFilter]),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,xe[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===je||S.minFilter!==oo&&S.minFilter!==hr||S.type===di&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ae(C,S){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",T));const V=S.source;let K=d.get(V);K===void 0&&(K={},d.set(V,K));const at=$(S);if(at!==C.__cacheKey){K[at]===void 0&&(K[at]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),K[at].usedTimes++;const ct=K[C.__cacheKey];ct!==void 0&&(K[C.__cacheKey].usedTimes--,ct.usedTimes===0&&D(S)),C.__cacheKey=at,C.__webglTexture=K[at].texture}return z}function Z(C,S,z){return Math.floor(Math.floor(C/z)/S)}function nt(C,S,z,V){const at=C.updateRanges;if(at.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,z,V,S.data);else{at.sort((Ct,pt)=>Ct.start-pt.start);let ct=0;for(let Ct=1;Ct<at.length;Ct++){const pt=at[ct],ht=at[Ct],Pt=pt.start+pt.count,It=Z(ht.start,S.width,4),kt=Z(pt.start,S.width,4);ht.start<=Pt+1&&It===kt&&Z(ht.start+ht.count-1,S.width,4)===It?pt.count=Math.max(pt.count,ht.start+ht.count-pt.start):(++ct,at[ct]=ht)}at.length=ct+1;const J=e.getParameter(n.UNPACK_ROW_LENGTH),tt=e.getParameter(n.UNPACK_SKIP_PIXELS),ut=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let Ct=0,pt=at.length;Ct<pt;Ct++){const ht=at[Ct],Pt=Math.floor(ht.start/4),It=Math.ceil(ht.count/4),kt=Pt%S.width,N=Math.floor(Pt/S.width),dt=It,Q=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,kt),e.pixelStorei(n.UNPACK_SKIP_ROWS,N),e.texSubImage2D(n.TEXTURE_2D,0,kt,N,dt,Q,z,V,S.data)}C.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,J),e.pixelStorei(n.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(n.UNPACK_SKIP_ROWS,ut)}}function Et(C,S,z){let V=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(V=n.TEXTURE_3D);const K=ae(C,S),at=S.source;e.bindTexture(V,C.__webglTexture,n.TEXTURE0+z);const ct=i.get(at);if(at.version!==ct.__version||K===!0){if(e.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const Q=te.getPrimaries(te.workingColorSpace),ft=S.colorSpace===qi?null:te.getPrimaries(S.colorSpace),xt=S.colorSpace===qi||Q===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let tt=m(S.image,!1,r.maxTextureSize);tt=tn(S,tt);const ut=s.convert(S.format,S.colorSpace),Ct=s.convert(S.type);let pt=M(S.internalFormat,ut,Ct,S.normalized,S.colorSpace,S.isVideoTexture);ee(V,S);let ht;const Pt=S.mipmaps,It=S.isVideoTexture!==!0,kt=ct.__version===void 0||K===!0,N=at.dataReady,dt=x(S,tt);if(S.isDepthTexture)pt=_(S.format===dr,S.type),kt&&(It?e.texStorage2D(n.TEXTURE_2D,1,pt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,pt,tt.width,tt.height,0,ut,Ct,null));else if(S.isDataTexture)if(Pt.length>0){It&&kt&&e.texStorage2D(n.TEXTURE_2D,dt,pt,Pt[0].width,Pt[0].height);for(let Q=0,ft=Pt.length;Q<ft;Q++)ht=Pt[Q],It?N&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,ht.width,ht.height,ut,Ct,ht.data):e.texImage2D(n.TEXTURE_2D,Q,pt,ht.width,ht.height,0,ut,Ct,ht.data);S.generateMipmaps=!1}else It?(kt&&e.texStorage2D(n.TEXTURE_2D,dt,pt,tt.width,tt.height),N&&nt(S,tt,ut,Ct)):e.texImage2D(n.TEXTURE_2D,0,pt,tt.width,tt.height,0,ut,Ct,tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){It&&kt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,pt,Pt[0].width,Pt[0].height,tt.depth);for(let Q=0,ft=Pt.length;Q<ft;Q++)if(ht=Pt[Q],S.format!==Kn)if(ut!==null)if(It){if(N)if(S.layerUpdates.size>0){const xt=lh(ht.width,ht.height,S.format,S.type);for(const st of S.layerUpdates){const Dt=ht.data.subarray(st*xt/ht.data.BYTES_PER_ELEMENT,(st+1)*xt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,st,ht.width,ht.height,1,ut,Dt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ht.width,ht.height,tt.depth,ut,ht.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,pt,ht.width,ht.height,tt.depth,0,ht.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ht.width,ht.height,tt.depth,ut,Ct,ht.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Q,pt,ht.width,ht.height,tt.depth,0,ut,Ct,ht.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{It&&kt&&e.texStorage2D(n.TEXTURE_2D,dt,pt,Pt[0].width,Pt[0].height);for(let Q=0,ft=Pt.length;Q<ft;Q++)ht=Pt[Q],S.format!==Kn?ut!==null?It?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,ht.width,ht.height,ut,ht.data):e.compressedTexImage2D(n.TEXTURE_2D,Q,pt,ht.width,ht.height,0,ht.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?N&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,ht.width,ht.height,ut,Ct,ht.data):e.texImage2D(n.TEXTURE_2D,Q,pt,ht.width,ht.height,0,ut,Ct,ht.data)}else if(S.isDataArrayTexture)if(It){if(kt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,pt,tt.width,tt.height,tt.depth),N)if(S.layerUpdates.size>0){const Q=lh(tt.width,tt.height,S.format,S.type);for(const ft of S.layerUpdates){const xt=tt.data.subarray(ft*Q/tt.data.BYTES_PER_ELEMENT,(ft+1)*Q/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ft,tt.width,tt.height,1,ut,Ct,xt)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ut,Ct,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,pt,tt.width,tt.height,tt.depth,0,ut,Ct,tt.data);else if(S.isData3DTexture)It?(kt&&e.texStorage3D(n.TEXTURE_3D,dt,pt,tt.width,tt.height,tt.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ut,Ct,tt.data)):e.texImage3D(n.TEXTURE_3D,0,pt,tt.width,tt.height,tt.depth,0,ut,Ct,tt.data);else if(S.isFramebufferTexture){if(kt)if(It)e.texStorage2D(n.TEXTURE_2D,dt,pt,tt.width,tt.height);else{let Q=tt.width,ft=tt.height;for(let xt=0;xt<dt;xt++)e.texImage2D(n.TEXTURE_2D,xt,pt,Q,ft,0,ut,Ct,null),Q>>=1,ft>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){const Q=n.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),tt.parentNode!==Q){Q.appendChild(tt),f.add(S),Q.onpaint=ft=>{const xt=ft.changedElements;for(const st of f)xt.includes(st.image)&&(st.needsUpdate=!0)},Q.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,tt);else{const xt=n.RGBA,st=n.RGBA,Dt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,xt,st,Dt,tt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Pt.length>0){if(It&&kt){const Q=de(Pt[0]);e.texStorage2D(n.TEXTURE_2D,dt,pt,Q.width,Q.height)}for(let Q=0,ft=Pt.length;Q<ft;Q++)ht=Pt[Q],It?N&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,ut,Ct,ht):e.texImage2D(n.TEXTURE_2D,Q,pt,ut,Ct,ht);S.generateMipmaps=!1}else if(It){if(kt){const Q=de(tt);e.texStorage2D(n.TEXTURE_2D,dt,pt,Q.width,Q.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut,Ct,tt)}else e.texImage2D(n.TEXTURE_2D,0,pt,ut,Ct,tt);p(S)&&b(V),ct.__version=at.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Bt(C,S,z){if(S.image.length!==6)return;const V=ae(C,S),K=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+z);const at=i.get(K);if(K.version!==at.__version||V===!0){e.activeTexture(n.TEXTURE0+z);const ct=te.getPrimaries(te.workingColorSpace),J=S.colorSpace===qi?null:te.getPrimaries(S.colorSpace),tt=S.colorSpace===qi||ct===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);const ut=S.isCompressedTexture||S.image[0].isCompressedTexture,Ct=S.image[0]&&S.image[0].isDataTexture,pt=[];for(let st=0;st<6;st++)!ut&&!Ct?pt[st]=m(S.image[st],!0,r.maxCubemapSize):pt[st]=Ct?S.image[st].image:S.image[st],pt[st]=tn(S,pt[st]);const ht=pt[0],Pt=s.convert(S.format,S.colorSpace),It=s.convert(S.type),kt=M(S.internalFormat,Pt,It,S.normalized,S.colorSpace),N=S.isVideoTexture!==!0,dt=at.__version===void 0||V===!0,Q=K.dataReady;let ft=x(S,ht);ee(n.TEXTURE_CUBE_MAP,S);let xt;if(ut){N&&dt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,kt,ht.width,ht.height);for(let st=0;st<6;st++){xt=pt[st].mipmaps;for(let Dt=0;Dt<xt.length;Dt++){const At=xt[Dt];S.format!==Kn?Pt!==null?N?Q&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt,0,0,At.width,At.height,Pt,At.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt,kt,At.width,At.height,0,At.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt,0,0,At.width,At.height,Pt,It,At.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt,kt,At.width,At.height,0,Pt,It,At.data)}}}else{if(xt=S.mipmaps,N&&dt){xt.length>0&&ft++;const st=de(pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,kt,st.width,st.height)}for(let st=0;st<6;st++)if(Ct){N?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,pt[st].width,pt[st].height,Pt,It,pt[st].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,kt,pt[st].width,pt[st].height,0,Pt,It,pt[st].data);for(let Dt=0;Dt<xt.length;Dt++){const Se=xt[Dt].image[st].image;N?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt+1,0,0,Se.width,Se.height,Pt,It,Se.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt+1,kt,Se.width,Se.height,0,Pt,It,Se.data)}}else{N?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Pt,It,pt[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,kt,Pt,It,pt[st]);for(let Dt=0;Dt<xt.length;Dt++){const At=xt[Dt];N?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt+1,0,0,Pt,It,At.image[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt+1,kt,Pt,It,At.image[st])}}}p(S)&&b(n.TEXTURE_CUBE_MAP),at.__version=K.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function St(C,S,z,V,K,at){const ct=s.convert(z.format,z.colorSpace),J=s.convert(z.type),tt=M(z.internalFormat,ct,J,z.normalized,z.colorSpace),ut=i.get(S),Ct=i.get(z);if(Ct.__renderTarget=S,!ut.__hasExternalTextures){const pt=Math.max(1,S.width>>at),ht=Math.max(1,S.height>>at);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,at,tt,pt,ht,S.depth,0,ct,J,null):e.texImage2D(K,at,tt,pt,ht,0,ct,J,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),ze(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,K,Ct.__webglTexture,0,De(S)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,K,Ct.__webglTexture,at),e.bindFramebuffer(n.FRAMEBUFFER,null)}function $t(C,S,z){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer){const V=S.depthTexture,K=V&&V.isDepthTexture?V.type:null,at=_(S.stencilBuffer,K),ct=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ze(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De(S),at,S.width,S.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,De(S),at,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,at,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ct,n.RENDERBUFFER,C)}else{const V=S.textures;for(let K=0;K<V.length;K++){const at=V[K],ct=s.convert(at.format,at.colorSpace),J=s.convert(at.type),tt=M(at.internalFormat,ct,J,at.normalized,at.colorSpace);ze(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De(S),tt,S.width,S.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,De(S),tt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,tt,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ve(C,S,z){const V=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=i.get(S.depthTexture);if(K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V){if(K.__webglInit===void 0&&(K.__webglInit=!0,S.depthTexture.addEventListener("dispose",T)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),ee(n.TEXTURE_CUBE_MAP,S.depthTexture);const ut=s.convert(S.depthTexture.format),Ct=s.convert(S.depthTexture.type);let pt;S.depthTexture.format===Oi?pt=n.DEPTH_COMPONENT24:S.depthTexture.format===dr&&(pt=n.DEPTH24_STENCIL8);for(let ht=0;ht<6;ht++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,pt,S.width,S.height,0,ut,Ct,null)}}else et(S.depthTexture,0);const at=K.__webglTexture,ct=De(S),J=V?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,tt=S.depthTexture.format===dr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===Oi)ze(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,J,at,0,ct):n.framebufferTexture2D(n.FRAMEBUFFER,tt,J,at,0);else if(S.depthTexture.format===dr)ze(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,J,at,0,ct):n.framebufferTexture2D(n.FRAMEBUFFER,tt,J,at,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Kt(C){const S=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const V=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),V){const K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,V.removeEventListener("dispose",K)};V.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=V}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(z)for(let V=0;V<6;V++)Ve(S.__webglFramebuffer[V],C,V);else{const V=C.texture.mipmaps;V&&V.length>0?Ve(S.__webglFramebuffer[0],C,0):Ve(S.__webglFramebuffer,C,0)}else if(z){S.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[V]),S.__webglDepthbuffer[V]===void 0)S.__webglDepthbuffer[V]=n.createRenderbuffer(),$t(S.__webglDepthbuffer[V],C,!1);else{const K=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=S.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,at)}}else{const V=C.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),$t(S.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,at)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(C,S,z){const V=i.get(C);S!==void 0&&St(V.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Kt(C)}function Me(C){const S=C.texture,z=i.get(C),V=i.get(S);C.addEventListener("dispose",v);const K=C.textures,at=C.isWebGLCubeRenderTarget===!0,ct=K.length>1;if(ct||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=S.version,o.memory.textures++),at){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let tt=0;tt<S.mipmaps.length;tt++)z.__webglFramebuffer[J][tt]=n.createFramebuffer()}else z.__webglFramebuffer[J]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<S.mipmaps.length;J++)z.__webglFramebuffer[J]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ct)for(let J=0,tt=K.length;J<tt;J++){const ut=i.get(K[J]);ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&ze(C)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<K.length;J++){const tt=K[J];z.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[J]);const ut=s.convert(tt.format,tt.colorSpace),Ct=s.convert(tt.type),pt=M(tt.internalFormat,ut,Ct,tt.normalized,tt.colorSpace,C.isXRRenderTarget===!0),ht=De(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,pt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,z.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),$t(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(at){e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),ee(n.TEXTURE_CUBE_MAP,S);for(let J=0;J<6;J++)if(S.mipmaps&&S.mipmaps.length>0)for(let tt=0;tt<S.mipmaps.length;tt++)St(z.__webglFramebuffer[J][tt],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,tt);else St(z.__webglFramebuffer[J],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(S)&&b(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let J=0,tt=K.length;J<tt;J++){const ut=K[J],Ct=i.get(ut);let pt=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(pt,Ct.__webglTexture),ee(pt,ut),St(z.__webglFramebuffer,C,ut,n.COLOR_ATTACHMENT0+J,pt,0),p(ut)&&b(pt)}e.unbindTexture()}else{let J=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(J,V.__webglTexture),ee(J,S),S.mipmaps&&S.mipmaps.length>0)for(let tt=0;tt<S.mipmaps.length;tt++)St(z.__webglFramebuffer[tt],C,S,n.COLOR_ATTACHMENT0,J,tt);else St(z.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,J,0);p(S)&&b(J),e.unbindTexture()}C.depthBuffer&&Kt(C)}function Jt(C){const S=C.textures;for(let z=0,V=S.length;z<V;z++){const K=S[z];if(p(K)){const at=R(C),ct=i.get(K).__webglTexture;e.bindTexture(at,ct),b(at),e.unbindTexture()}}}const Ae=[],Ke=[];function dn(C){if(C.samples>0){if(ze(C)===!1){const S=C.textures,z=C.width,V=C.height;let K=n.COLOR_BUFFER_BIT;const at=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=i.get(C),J=S.length>1;if(J)for(let ut=0;ut<S.length;ut++)e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);const tt=C.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let ut=0;ut<S.length;ut++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);const Ct=i.get(S[ut]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ct,0)}n.blitFramebuffer(0,0,z,V,0,0,z,V,K,n.NEAREST),c===!0&&(Ae.length=0,Ke.length=0,Ae.push(n.COLOR_ATTACHMENT0+ut),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(Ae.push(at),Ke.push(at),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ke)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ae))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let ut=0;ut<S.length;ut++){e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);const Ct=i.get(S[ut]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,Ct,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){const S=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function De(C){return Math.min(r.maxSamples,C.samples)}function ze(C){const S=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function F(C){const S=o.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function tn(C,S){const z=C.colorSpace,V=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==ea&&z!==qi&&(te.getTransfer(z)===fe?(V!==Kn||K!==bn)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ie("WebGLTextures: Unsupported texture color space:",z)),S}function de(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=B,this.getTextureUnits=U,this.setTextureUnits=k,this.setTexture2D=et,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=it,this.rebindTextures=oe,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=ze,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function hx(n,t){function e(i,r=qi){let s;const o=te.getTransfer(r);if(i===bn)return n.UNSIGNED_BYTE;if(i===Pc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Dc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ld)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===od)return n.BYTE;if(i===ad)return n.SHORT;if(i===ks)return n.UNSIGNED_SHORT;if(i===Cc)return n.INT;if(i===_i)return n.UNSIGNED_INT;if(i===di)return n.FLOAT;if(i===vi)return n.HALF_FLOAT;if(i===ud)return n.ALPHA;if(i===hd)return n.RGB;if(i===Kn)return n.RGBA;if(i===Oi)return n.DEPTH_COMPONENT;if(i===dr)return n.DEPTH_STENCIL;if(i===dd)return n.RED;if(i===Lc)return n.RED_INTEGER;if(i===Mr)return n.RG;if(i===Ic)return n.RG_INTEGER;if(i===Nc)return n.RGBA_INTEGER;if(i===Go||i===Ho||i===Vo||i===Wo)if(o===fe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Go)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Go)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ho)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bl||i===zl||i===kl||i===Gl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Bl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hl||i===Vl||i===Wl||i===Xl||i===$l||i===jo||i===Yl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Hl||i===Vl)return o===fe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Wl)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xl)return s.COMPRESSED_R11_EAC;if(i===$l)return s.COMPRESSED_SIGNED_R11_EAC;if(i===jo)return s.COMPRESSED_RG11_EAC;if(i===Yl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ql||i===Kl||i===Zl||i===Jl||i===Ql||i===jl||i===tc||i===ec||i===nc||i===ic||i===rc||i===sc||i===oc||i===ac)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ql)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kl)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zl)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jl)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ql)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jl)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tc)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ec)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nc)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ic)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rc)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sc)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oc)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ac)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lc||i===cc||i===uc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===lc)return o===fe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hc||i===dc||i===ta||i===fc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===hc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===dc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ta)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const dx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fx=`
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

}`;class px{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Ed(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Si({vertexShader:dx,fragmentShader:fx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ot(new ii(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mx extends Qi{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,g=null;const y=typeof XRWebGLBinding<"u",m=new px,p={},b=e.getContextAttributes();let R=null,M=null;const _=[],x=[],T=new gt;let v=null,w=null;const D=new Wn;D.viewport=new Ie;const L=new Wn;L.viewport=new Ie;const O=[D,L],B=new ym;let U=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let nt=_[Z];return nt===void 0&&(nt=new Ya,_[Z]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Z){let nt=_[Z];return nt===void 0&&(nt=new Ya,_[Z]=nt),nt.getGripSpace()},this.getHand=function(Z){let nt=_[Z];return nt===void 0&&(nt=new Ya,_[Z]=nt),nt.getHandSpace()};function q(Z){const nt=x.indexOf(Z.inputSource);if(nt===-1)return;const Et=_[nt];Et!==void 0&&(Et.update(Z.inputSource,Z.frame,l||o),Et.dispatchEvent({type:Z.type,data:Z.inputSource}))}function $(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",et);for(let Z=0;Z<_.length;Z++){const nt=x[Z];nt!==null&&(x[Z]=null,_[Z].disconnect(nt))}U=null,k=null,m.reset();for(const Z in p)delete p[Z];if(t.setRenderTarget(R),d=null,h=null,f=null,r=null,M=null,ae.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(T.width,T.height,!1),w!==null){const Z=w.camera;Z.fov=w.fov,Z.zoom=w.zoom,Z.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(R=t.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",$),r.addEventListener("inputsourceschange",et),b.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(T),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Bt=null,St=null;b.depth&&(St=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=b.stencil?dr:Oi,Bt=b.stencil?Gs:_i);const $t={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer($t),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new Zn(h.textureWidth,h.textureHeight,{format:Kn,type:bn,depthTexture:new Ws(h.textureWidth,h.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Et={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,Et),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Zn(d.framebufferWidth,d.framebufferHeight,{format:Kn,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),ae.setContext(r),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et(Z){for(let nt=0;nt<Z.removed.length;nt++){const Et=Z.removed[nt],Bt=x.indexOf(Et);Bt>=0&&(x[Bt]=null,_[Bt].disconnect(Et))}for(let nt=0;nt<Z.added.length;nt++){const Et=Z.added[nt];let Bt=x.indexOf(Et);if(Bt===-1){for(let $t=0;$t<_.length;$t++)if($t>=x.length){x.push(Et),Bt=$t;break}else if(x[$t]===null){x[$t]=Et,Bt=$t;break}if(Bt===-1)break}const St=_[Bt];St&&St.connect(Et)}}const Y=new A,j=new A;function it(Z,nt,Et){Y.setFromMatrixPosition(nt.matrixWorld),j.setFromMatrixPosition(Et.matrixWorld);const Bt=Y.distanceTo(j),St=nt.projectionMatrix.elements,$t=Et.projectionMatrix.elements,Ve=St[14]/(St[10]-1),Kt=St[14]/(St[10]+1),oe=(St[9]+1)/St[5],Me=(St[9]-1)/St[5],Jt=(St[8]-1)/St[0],Ae=($t[8]+1)/$t[0],Ke=Ve*Jt,dn=Ve*Ae,De=Bt/(-Jt+Ae),ze=De*-Jt;if(nt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ze),Z.translateZ(De),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),St[10]===-1)Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const F=Ve+De,tn=Kt+De,de=Ke-ze,C=dn+(Bt-ze),S=oe*Kt/tn*F,z=Me*Kt/tn*F;Z.projectionMatrix.makePerspective(de,C,S,z,F,tn),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function lt(Z,nt){nt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(nt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let nt=Z.near,Et=Z.far;m.texture!==null&&(m.depthNear>0&&(nt=m.depthNear),m.depthFar>0&&(Et=m.depthFar)),B.near=L.near=D.near=nt,B.far=L.far=D.far=Et,(U!==B.near||k!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),U=B.near,k=B.far),B.layers.mask=Z.layers.mask|6,D.layers.mask=B.layers.mask&-5,L.layers.mask=B.layers.mask&-3;const Bt=Z.parent,St=B.cameras;lt(B,Bt);for(let $t=0;$t<St.length;$t++)lt(St[$t],Bt);St.length===2?it(B,D,L):B.projectionMatrix.copy(D.projectionMatrix),w===null&&Z.isPerspectiveCamera&&(w={camera:Z,fov:Z.fov,zoom:Z.zoom}),bt(Z,B,Bt)};function bt(Z,nt,Et){Et===null?Z.matrix.copy(nt.matrixWorld):(Z.matrix.copy(Et.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(nt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Vs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(Z){c=Z,h!==null&&(h.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Z){return p[Z]};let xe=null;function ee(Z,nt){if(u=nt.getViewerPose(l||o),g=nt,u!==null){const Et=u.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let Bt=!1;Et.length!==B.cameras.length&&(B.cameras.length=0,Bt=!0);for(let Kt=0;Kt<Et.length;Kt++){const oe=Et[Kt];let Me=null;if(d!==null)Me=d.getViewport(oe);else{const Ae=f.getViewSubImage(h,oe);Me=Ae.viewport,Kt===0&&(t.setRenderTargetTextures(M,Ae.colorTexture,Ae.depthStencilTexture),t.setRenderTarget(M))}let Jt=O[Kt];Jt===void 0&&(Jt=new Wn,Jt.layers.enable(Kt),Jt.viewport=new Ie,O[Kt]=Jt),Jt.matrix.fromArray(oe.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(oe.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(Me.x,Me.y,Me.width,Me.height),Kt===0&&(B.matrix.copy(Jt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Bt===!0&&B.cameras.push(Jt)}const St=r.enabledFeatures;if(St&&St.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){f=i.getBinding();const Kt=f.getDepthInformation(Et[0]);Kt&&Kt.isValid&&Kt.texture&&m.init(Kt,r.renderState)}if(St&&St.includes("camera-access")&&y){t.state.unbindTexture(),f=i.getBinding();for(let Kt=0;Kt<Et.length;Kt++){const oe=Et[Kt].camera;if(oe){let Me=p[oe];Me||(Me=new Ed,p[oe]=Me);const Jt=f.getCameraImage(oe);Me.sourceTexture=Jt}}}}for(let Et=0;Et<_.length;Et++){const Bt=x[Et],St=_[Et];Bt!==null&&St!==void 0&&St.update(Bt,nt,l||o)}xe&&xe(Z,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),g=null}const ae=new Dd;ae.setAnimationLoop(ee),this.setAnimationLoop=function(Z){xe=Z},this.dispose=function(){}}}const gx=new we,Bd=new zt;Bd.set(-1,0,0,0,1,0,0,0,1);function _x(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Rd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,R,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,b,R):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===_n&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===_n&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),R=b.envMap,M=b.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(gx.makeRotationFromEuler(M)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Bd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,R){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=R*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===_n&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function vx(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,_){const x=_.program;i.uniformBlockBinding(M,x)}function l(M,_){let x=r[M.id];x===void 0&&(m(M),x=u(M),r[M.id]=x,M.addEventListener("dispose",b));const T=_.program;i.updateUBOMapping(M,T);const v=t.render.frame;s[M.id]!==v&&(h(M),s[M.id]=v)}function u(M){const _=f();M.__bindingPointIndex=_;const x=n.createBuffer(),T=M.__size,v=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,T,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,x),x}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const _=r[M.id],x=M.uniforms,T=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let v=0,w=x.length;v<w;v++){const D=x[v];if(Array.isArray(D))for(let L=0,O=D.length;L<O;L++)d(D[L],v,L,T);else d(D,v,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,_,x,T){if(y(M,_,x,T)===!0){const v=M.__offset,w=M.value;if(Array.isArray(w)){let D=0;for(let L=0;L<w.length;L++){const O=w[L],B=p(O);g(O,M.__data,D),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(D+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,M.__data)}}function g(M,_,x){typeof M=="number"||typeof M=="boolean"?_[0]=M:M.isMatrix3?(_[0]=M.elements[0],_[1]=M.elements[1],_[2]=M.elements[2],_[3]=0,_[4]=M.elements[3],_[5]=M.elements[4],_[6]=M.elements[5],_[7]=0,_[8]=M.elements[6],_[9]=M.elements[7],_[10]=M.elements[8],_[11]=0):ArrayBuffer.isView(M)?_.set(new M.constructor(M.buffer,M.byteOffset,_.length)):M.toArray(_,x)}function y(M,_,x,T){const v=M.value,w=_+"_"+x;if(T[w]===void 0)return typeof v=="number"||typeof v=="boolean"?T[w]=v:ArrayBuffer.isView(v)?T[w]=v.slice():T[w]=v.clone(),!0;{const D=T[w];if(typeof v=="number"||typeof v=="boolean"){if(D!==v)return T[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(D.equals(v)===!1)return D.copy(v),!0}}return!1}function m(M){const _=M.uniforms;let x=0;const T=16;for(let w=0,D=_.length;w<D;w++){const L=Array.isArray(_[w])?_[w]:[_[w]];for(let O=0,B=L.length;O<B;O++){const U=L[O],k=Array.isArray(U.value)?U.value:[U.value];for(let q=0,$=k.length;q<$;q++){const et=k[q],Y=p(et),j=x%T,it=j%Y.boundary,lt=j+it;x+=it,lt!==0&&T-lt<Y.storage&&(x+=T-lt),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=Y.storage}}}const v=x%T;return v>0&&(x+=T-v),M.__size=x,M.__cache={},this}function p(M){const _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(_.boundary=16,_.storage=M.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",M),_}function b(M){const _=M.target;_.removeEventListener("dispose",b);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function R(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:c,update:l,dispose:R}}const xx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let li=null;function Mx(){return li===null&&(li=new Vp(xx,16,16,Mr,vi),li.name="DFG_LUT",li.minFilter=on,li.magFilter=on,li.wrapS=Di,li.wrapT=Di,li.generateMipmaps=!1,li.needsUpdate=!0),li}class Sx{constructor(t={}){const{canvas:e=tp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=bn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const y=d,m=new Set([Nc,Ic,Lc]),p=new Set([bn,_i,ks,Gs,Pc,Dc]),b=new Uint32Array(4),R=new Int32Array(4),M=new A;let _=null,x=null;const T=[],v=[];let w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let L=!1,O=null,B=null,U=null,k=null;this._outputColorSpace=mn;let q=0,$=0,et=null,Y=-1,j=null;const it=new Ie,lt=new Ie;let bt=null;const xe=new qt(0);let ee=0,ae=e.width,Z=e.height,nt=1,Et=null,Bt=null;const St=new Ie(0,0,ae,Z),$t=new Ie(0,0,ae,Z);let Ve=!1;const Kt=new Gc;let oe=!1,Me=!1;const Jt=new we,Ae=new A,Ke=new Ie,dn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function ze(){return et===null?nt:1}let F=i;function tn(E,I){return e.getContext(E,I)}let de,C,S,z,V,K,at,ct,J,tt,ut,Ct,pt,ht,Pt,It,kt,N,dt,Q,ft,xt,st;try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ac}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",On,!1),F===null){const I="webgl2";if(F=tn(I,E),F===null)throw tn(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Dt()}catch(E){throw e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",On,!1),ie("WebGLRenderer: "+E.message),E}function Dt(){de=new M_(F),de.init(),ft=new hx(F,de),C=new u_(F,de,t,ft),S=new cx(F,de),C.reversedDepthBuffer&&h&&S.buffers.depth.setReversed(!0),B=F.createFramebuffer(),U=F.createFramebuffer(),k=F.createFramebuffer(),z=new b_(F),V=new Kv,K=new ux(F,de,S,V,C,ft,z),at=new x_(D),ct=new wm(F),xt=new l_(F,ct),J=new S_(F,ct,z,xt),tt=new w_(F,J,ct,xt,z),N=new E_(F,C,K),Pt=new h_(V),ut=new qv(D,at,de,C,xt,Pt),Ct=new _x(D,V),pt=new Jv,ht=new ix(de),kt=new a_(D,at,S,tt,g,c),It=new lx(D,tt,C),st=new vx(F,z,C,S),dt=new c_(F,de,z),Q=new y_(F,de,z),z.programs=ut.programs,D.capabilities=C,D.extensions=de,D.properties=V,D.renderLists=pt,D.shadowMap=It,D.state=S,D.info=z}y!==bn&&(w=new A_(y,e.width,e.height,a,r,s));const At=new mx(D,F);this.xr=At,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=de.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=de.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(E){E!==void 0&&(nt=E,this.setSize(ae,Z,!1))},this.getSize=function(E){return E.set(ae,Z)},this.setSize=function(E,I,X=!0){if(At.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=E,Z=I,e.width=Math.floor(E*nt),e.height=Math.floor(I*nt),X===!0&&(e.style.width=E+"px",e.style.height=I+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(ae*nt,Z*nt).floor()},this.setDrawingBufferSize=function(E,I,X){ae=E,Z=I,nt=X,e.width=Math.floor(E*X),e.height=Math.floor(I*X),this.setViewport(0,0,E,I)},this.setEffects=function(E){if(y===bn){ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let I=0;I<E.length;I++)if(E[I].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(it)},this.getViewport=function(E){return E.copy(St)},this.setViewport=function(E,I,X,G){E.isVector4?St.set(E.x,E.y,E.z,E.w):St.set(E,I,X,G),S.viewport(it.copy(St).multiplyScalar(nt).round())},this.getScissor=function(E){return E.copy($t)},this.setScissor=function(E,I,X,G){E.isVector4?$t.set(E.x,E.y,E.z,E.w):$t.set(E,I,X,G),S.scissor(lt.copy($t).multiplyScalar(nt).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(E){S.setScissorTest(Ve=E)},this.setOpaqueSort=function(E){Et=E},this.setTransparentSort=function(E){Bt=E},this.getClearColor=function(E){return E.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor(...arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha(...arguments)},this.clear=function(E=!0,I=!0,X=!0){let G=0;if(E){let H=!1;if(et!==null){const vt=et.texture.format;H=m.has(vt)}if(H){const vt=et.texture.type,yt=p.has(vt),_t=kt.getClearColor(),wt=kt.getClearAlpha(),Rt=_t.r,Vt=_t.g,Zt=_t.b;yt?(b[0]=Rt,b[1]=Vt,b[2]=Zt,b[3]=wt,F.clearBufferuiv(F.COLOR,0,b)):(R[0]=Rt,R[1]=Vt,R[2]=Zt,R[3]=wt,F.clearBufferiv(F.COLOR,0,R))}else G|=F.COLOR_BUFFER_BIT}I&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),O=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",On,!1),kt.dispose(),pt.dispose(),ht.dispose(),V.dispose(),at.dispose(),tt.dispose(),xt.dispose(),st.dispose(),ut.dispose(),At.dispose(),At.removeEventListener("sessionstart",gu),At.removeEventListener("sessionend",_u),nr.stop()};function Se(E){E.preventDefault(),ra("WebGLRenderer: Context Lost."),L=!0}function le(){ra("WebGLRenderer: Context Restored."),L=!1;const E=z.autoReset,I=It.enabled,X=It.autoUpdate,G=It.needsUpdate,H=It.type;Dt(),z.autoReset=E,It.enabled=I,It.autoUpdate=X,It.needsUpdate=G,It.type=H}function On(E){ie("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function si(E){const I=E.target;I.removeEventListener("dispose",si),pf(I)}function pf(E){mf(E),V.remove(E)}function mf(E){const I=V.get(E).programs;I!==void 0&&(I.forEach(function(X){ut.releaseProgram(X)}),E.isShaderMaterial&&ut.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,X,G,H,vt){I===null&&(I=dn);const yt=H.isMesh&&H.matrixWorld.determinantAffine()<0,_t=vf(E,I,X,G,H);S.setMaterial(G,yt);let wt=X.index,Rt=1;if(G.wireframe===!0){if(wt=J.getWireframeAttribute(X),wt===void 0)return;Rt=2}const Vt=X.drawRange,Zt=X.attributes.position;let Tt=Vt.start*Rt,ce=(Vt.start+Vt.count)*Rt;vt!==null&&(Tt=Math.max(Tt,vt.start*Rt),ce=Math.min(ce,(vt.start+vt.count)*Rt)),wt!==null?(Tt=Math.max(Tt,0),ce=Math.min(ce,wt.count)):Zt!=null&&(Tt=Math.max(Tt,0),ce=Math.min(ce,Zt.count));const ke=ce-Tt;if(ke<0||ke===1/0)return;xt.setup(H,G,_t,X,wt);let Ee,_e=dt;if(wt!==null&&(Ee=ct.get(wt),_e=Q,_e.setIndex(Ee)),H.isMesh)G.wireframe===!0?(S.setLineWidth(G.wireframeLinewidth*ze()),_e.setMode(F.LINES)):_e.setMode(F.TRIANGLES);else if(H.isLine){let en=G.linewidth;en===void 0&&(en=1),S.setLineWidth(en*ze()),H.isLineSegments?_e.setMode(F.LINES):H.isLineLoop?_e.setMode(F.LINE_LOOP):_e.setMode(F.LINE_STRIP)}else H.isPoints?_e.setMode(F.POINTS):H.isSprite&&_e.setMode(F.TRIANGLES);if(H.isBatchedMesh)if(de.get("WEBGL_multi_draw"))_e.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const en=H._multiDrawStarts,Mt=H._multiDrawCounts,ln=H._multiDrawCount,ne=wt?ct.get(wt).bytesPerElement:1,Rn=V.get(G).currentProgram.getUniforms();for(let oi=0;oi<ln;oi++)Rn.setValue(F,"_gl_DrawID",oi),_e.render(en[oi]/ne,Mt[oi])}else if(H.isInstancedMesh)_e.renderInstances(Tt,ke,H.count);else if(X.isInstancedBufferGeometry){const en=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Mt=Math.min(X.instanceCount,en);_e.renderInstances(Tt,ke,Mt)}else _e.render(Tt,ke)};function mu(E,I,X,G){O!==null&&E.isNodeMaterial&&O.setObject(G,E),oe===!0&&Pt.setState(E,X,!1),E.transparent===!0&&E.side===sn&&E.forceSinglePass===!1?(E.side=_n,E.needsUpdate=!0,so(E,I,G),E.side=vr,E.needsUpdate=!0,so(E,I,G),E.side=sn):so(E,I,G)}this.compile=function(E,I,X=null){X===null&&(X=E),O!==null&&O.renderStart(E,I,X),x=ht.get(X),x.init(I),v.push(x),X.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(x.pushLight(H),H.castShadow&&x.pushShadow(H))}),E!==X&&E.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(x.pushLight(H),H.castShadow&&x.pushShadow(H))}),x.setupLights(),O!==null&&O.updateLights(x.state.lightsArray),Me=this.localClippingEnabled,oe=Pt.init(this.clippingPlanes,Me),oe===!0&&Pt.setGlobalState(this.clippingPlanes,I),O!==null&&It.render(x.state.shadowsArray,X,I);const G=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const vt=H.material;if(vt)if(Array.isArray(vt))for(let yt=0;yt<vt.length;yt++){const _t=vt[yt];mu(_t,X,I,H),G.add(_t)}else mu(vt,X,I,H),G.add(vt)}),x=v.pop(),O!==null&&O.renderEnd(),G},this.compileAsync=function(E,I,X=null){const G=this.compile(E,I,X);return new Promise(H=>{function vt(){if(G.forEach(function(yt){const wt=V.get(yt).currentProgram;(wt===void 0||wt.isReady())&&G.delete(yt)}),G.size===0){H(E);return}setTimeout(vt,10)}de.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Fa=null;function gf(E){Fa&&Fa(E)}function gu(){nr.stop()}function _u(){nr.start()}const nr=new Dd;nr.setAnimationLoop(gf),typeof self<"u"&&nr.setContext(self),this.setAnimationLoop=function(E){Fa=E,At.setAnimationLoop(E),E===null?nr.stop():nr.start()},At.addEventListener("sessionstart",gu),At.addEventListener("sessionend",_u),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;O!==null&&O.renderStart(E,I);const X=At.enabled===!0&&At.isPresenting===!0,G=w!==null&&(et===null||X)&&w.begin(D,et);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(I),I=At.getCamera()),E.isScene===!0&&E.onBeforeRender(D,E,I,et),x=ht.get(E,v.length),x.init(I),x.state.textureUnits=K.getTextureUnits(),v.push(x),Jt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Kt.setFromProjectionMatrix(Jt,fi,I.reversedDepth),Me=this.localClippingEnabled,oe=Pt.init(this.clippingPlanes,Me),_=pt.get(E,T.length),_.init(),T.push(_),At.enabled===!0&&At.isPresenting===!0){const yt=D.xr.getDepthSensingMesh();yt!==null&&Oa(yt,I,-1/0,D.sortObjects)}Oa(E,I,0,D.sortObjects),_.finish(),O!==null&&O.updateLights(x.state.lightsArray),D.sortObjects===!0&&_.sort(Et,Bt),De=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,De&&kt.addToRenderList(_,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),oe===!0&&Pt.beginShadows();const H=x.state.shadowsArray;if(It.render(H,E,I),oe===!0&&Pt.endShadows(),(G&&w.hasRenderPass())===!1){const yt=_.opaque,_t=_.transmissive;if(x.setupLights(),I.isArrayCamera){const wt=I.cameras;if(_t.length>0)for(let Rt=0,Vt=wt.length;Rt<Vt;Rt++){const Zt=wt[Rt];xu(yt,_t,E,Zt)}De&&kt.render(E);for(let Rt=0,Vt=wt.length;Rt<Vt;Rt++){const Zt=wt[Rt];vu(_,E,Zt,Zt.viewport)}}else _t.length>0&&xu(yt,_t,E,I),De&&kt.render(E),vu(_,E,I)}et!==null&&$===0&&(K.updateMultisampleRenderTarget(et),K.updateRenderTargetMipmap(et)),G&&w.end(D),E.isScene===!0&&E.onAfterRender(D,E,I),xt.resetDefaultState(),Y=-1,j=null,v.pop(),v.length>0?(x=v[v.length-1],K.setTextureUnits(x.state.textureUnits),oe===!0&&Pt.setGlobalState(D.clippingPlanes,x.state.camera)):x=null,T.pop(),T.length>0?_=T[T.length-1]:_=null,O!==null&&O.renderEnd()};function Oa(E,I,X,G){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLightProbeGrid)x.pushLightProbeGrid(E);else if(E.isLight)x.pushLight(E),E.castShadow&&x.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(Kt)){G&&Ke.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Jt);const yt=tt.update(E),_t=E.material;_t.visible&&_.push(E,yt,_t,X,Ke.z,null,I)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(Kt))){const yt=tt.update(E),_t=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ke.copy(E.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Ke.copy(yt.boundingSphere.center)),Ke.applyMatrix4(E.matrixWorld).applyMatrix4(Jt)),Array.isArray(_t)){const wt=yt.groups;for(let Rt=0,Vt=wt.length;Rt<Vt;Rt++){const Zt=wt[Rt],Tt=_t[Zt.materialIndex];Tt&&Tt.visible&&_.push(E,yt,Tt,X,Ke.z,Zt,I)}}else _t.visible&&_.push(E,yt,_t,X,Ke.z,null,I)}}const vt=E.children;for(let yt=0,_t=vt.length;yt<_t;yt++)Oa(vt[yt],I,X,G)}function vu(E,I,X,G){const{opaque:H,transmissive:vt,transparent:yt}=E;x.setupLightsView(X),oe===!0&&Pt.setGlobalState(D.clippingPlanes,X),G&&S.viewport(it.copy(G)),H.length>0&&ro(H,I,X),vt.length>0&&ro(vt,I,X),yt.length>0&&ro(yt,I,X),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function xu(E,I,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[G.id]===void 0){const Tt=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");x.state.transmissionRenderTarget[G.id]=new Zn(1,1,{generateMipmaps:!0,type:Tt?vi:bn,minFilter:hr,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}const vt=x.state.transmissionRenderTarget[G.id],yt=G.viewport||it;vt.setSize(yt.z*D.transmissionResolutionScale,yt.w*D.transmissionResolutionScale);const _t=D.getRenderTarget(),wt=D.getActiveCubeFace(),Rt=D.getActiveMipmapLevel();D.setRenderTarget(vt),D.getClearColor(xe),ee=D.getClearAlpha(),ee<1&&D.setClearColor(16777215,.5),D.clear(),De&&kt.render(X);const Vt=D.toneMapping;D.toneMapping=pi;const Zt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),x.setupLightsView(G),oe===!0&&Pt.setGlobalState(D.clippingPlanes,G),ro(E,X,G),K.updateMultisampleRenderTarget(vt),K.updateRenderTargetMipmap(vt),de.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let ce=0,ke=I.length;ce<ke;ce++){const Ee=I[ce],{object:_e,geometry:en,material:Mt,group:ln}=Ee;if(Mt.side===sn&&_e.layers.test(G.layers)){const ne=Mt.side;Mt.side=_n,Mt.needsUpdate=!0,Mu(_e,X,G,en,Mt,ln),Mt.side=ne,Mt.needsUpdate=!0,Tt=!0}}Tt===!0&&(K.updateMultisampleRenderTarget(vt),K.updateRenderTargetMipmap(vt))}D.setRenderTarget(_t,wt,Rt),D.setClearColor(xe,ee),Zt!==void 0&&(G.viewport=Zt),D.toneMapping=Vt}function ro(E,I,X){const G=I.isScene===!0?I.overrideMaterial:null;for(let H=0,vt=E.length;H<vt;H++){const yt=E[H],{object:_t,geometry:wt,group:Rt}=yt;let Vt=yt.material;Vt.allowOverride===!0&&G!==null&&(Vt=G),_t.layers.test(X.layers)&&Mu(_t,I,X,wt,Vt,Rt)}}function Mu(E,I,X,G,H,vt){O!==null&&H.isNodeMaterial&&O.setObject(E,H),E.onBeforeRender(D,I,X,G,H,vt),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(D,I,X,G,E,vt),H.transparent===!0&&H.side===sn&&H.forceSinglePass===!1?(H.side=_n,H.needsUpdate=!0,D.renderBufferDirect(X,I,G,H,E,vt),H.side=vr,H.needsUpdate=!0,D.renderBufferDirect(X,I,G,H,E,vt),H.side=sn):D.renderBufferDirect(X,I,G,H,E,vt),E.onAfterRender(D,I,X,G,H,vt)}function so(E,I,X){I.isScene!==!0&&(I=dn);const G=V.get(E),H=x.state.lights,vt=x.state.shadowsArray,yt=H.state.version,_t=ut.getParameters(E,H.state,vt,I,X,x.state.lightProbeGridArray),wt=ut.getProgramCacheKey(_t);let Rt=G.programs;G.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?I.environment:null,G.fog=I.fog;const Vt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;G.envMap=at.get(E.envMap||G.environment,Vt),G.envMapRotation=G.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,Rt===void 0&&(E.addEventListener("dispose",si),Rt=new Map,G.programs=Rt);let Zt=Rt.get(wt);if(Zt!==void 0){if(G.currentProgram===Zt&&G.lightsStateVersion===yt)return yu(E,_t),Zt}else _t.uniforms=ut.getUniforms(E),O!==null&&E.isNodeMaterial&&O.build(E,X,_t),E.onBeforeCompile(_t,D),Zt=ut.acquireProgram(_t,wt),Rt.set(wt,Zt),G.uniforms=_t.uniforms;const Tt=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Tt.clippingPlanes=Pt.uniform),yu(E,_t),G.needsLights=Mf(E),G.lightsStateVersion=yt,G.needsLights&&(Tt.ambientLightColor.value=H.state.ambient,Tt.lightProbe.value=H.state.probe,Tt.sunLights.value=H.state.sun,Tt.sunLightShadows.value=H.state.sunShadow,Tt.directionalLights.value=H.state.directional,Tt.directionalLightShadows.value=H.state.directionalShadow,Tt.spotLights.value=H.state.spot,Tt.spotLightShadows.value=H.state.spotShadow,Tt.rectAreaLights.value=H.state.rectArea,Tt.ltc_1.value=H.state.rectAreaLTC1,Tt.ltc_2.value=H.state.rectAreaLTC2,Tt.pointLights.value=H.state.point,Tt.pointLightShadows.value=H.state.pointShadow,Tt.hemisphereLights.value=H.state.hemi,Tt.sunShadowMatrix.value=H.state.sunShadowMatrix,Tt.sunShadowCascade.value=H.state.sunShadowCascade,Tt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Tt.spotLightMatrix.value=H.state.spotLightMatrix,Tt.spotLightMap.value=H.state.spotLightMap,Tt.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=x.state.lightProbeGridArray.length>0,G.currentProgram=Zt,G.uniformsList=null,Zt}function Su(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=Xo.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function yu(E,I){const X=V.get(E);X.outputColorSpace=I.outputColorSpace,X.batching=I.batching,X.batchingColor=I.batchingColor,X.instancing=I.instancing,X.instancingColor=I.instancingColor,X.instancingMorph=I.instancingMorph,X.skinning=I.skinning,X.morphTargets=I.morphTargets,X.morphNormals=I.morphNormals,X.morphColors=I.morphColors,X.morphTargetsCount=I.morphTargetsCount,X.numClippingPlanes=I.numClippingPlanes,X.numIntersection=I.numClipIntersection,X.vertexAlphas=I.vertexAlphas,X.vertexTangents=I.vertexTangents,X.toneMapping=I.toneMapping}function _f(E,I){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;M.setFromMatrixPosition(I.matrixWorld);for(let X=0,G=E.length;X<G;X++){const H=E[X];if(H.texture!==null&&H.boundingBox.containsPoint(M))return H}return null}function vf(E,I,X,G,H){I.isScene!==!0&&(I=dn),K.resetTextureUnits();const vt=I.fog,yt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?I.environment:null,_t=et===null?D.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:te.workingColorSpace,wt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Rt=at.get(G.envMap||yt,wt),Vt=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Zt=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Tt=!!X.morphAttributes.position,ce=!!X.morphAttributes.normal,ke=!!X.morphAttributes.color;let Ee=pi;G.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ee=D.toneMapping);const _e=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,en=_e!==void 0?_e.length:0,Mt=V.get(G),ln=x.state.lights;if(oe===!0&&(Me===!0||E!==j)){const ye=E===j&&G.id===Y;Pt.setState(G,E,ye)}let ne=!1;G.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==ln.state.version||Mt.outputColorSpace!==_t||H.isBatchedMesh&&Mt.batching===!1||!H.isBatchedMesh&&Mt.batching===!0||H.isBatchedMesh&&Mt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Mt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Mt.instancing===!1||!H.isInstancedMesh&&Mt.instancing===!0||H.isSkinnedMesh&&Mt.skinning===!1||!H.isSkinnedMesh&&Mt.skinning===!0||H.isInstancedMesh&&Mt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Mt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Mt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Mt.instancingMorph===!1&&H.morphTexture!==null||Mt.envMap!==Rt||G.fog===!0&&Mt.fog!==vt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Pt.numPlanes||Mt.numIntersection!==Pt.numIntersection)||Mt.vertexAlphas!==Vt||Mt.vertexTangents!==Zt||Mt.morphTargets!==Tt||Mt.morphNormals!==ce||Mt.morphColors!==ke||Mt.toneMapping!==Ee||Mt.morphTargetsCount!==en||!!Mt.lightProbeGrid!=x.state.lightProbeGridArray.length>0)&&(ne=!0):(ne=!0,Mt.__version=G.version);let Rn=Mt.currentProgram;ne===!0&&(Rn=so(G,I,H),O&&G.isNodeMaterial&&O.onUpdateProgram(G,Rn,Mt));let oi=!1,ki=!1,Ar=!1;const ge=Rn.getUniforms(),Fe=Mt.uniforms;if(S.useProgram(Rn.program)&&(oi=!0,ki=!0,Ar=!0),G.id!==Y&&(Y=G.id,ki=!0),Mt.needsLights){const ye=_f(x.state.lightProbeGridArray,H);Mt.lightProbeGrid!==ye&&(Mt.lightProbeGrid=ye,ki=!0)}if(oi||j!==E){S.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ge.setValue(F,"projectionMatrix",E.projectionMatrix),ge.setValue(F,"viewMatrix",E.matrixWorldInverse);const Hi=ge.map.cameraPosition;Hi!==void 0&&Hi.setValue(F,Ae.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&ge.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ge.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),j!==E&&(j=E,ki=!0,Ar=!0)}if(Mt.needsLights&&(ln.state.sunShadowMap.length>0&&ge.setValue(F,"sunShadowMap",ln.state.sunShadowMap,K),ln.state.directionalShadowMap.length>0&&ge.setValue(F,"directionalShadowMap",ln.state.directionalShadowMap,K),ln.state.spotShadowMap.length>0&&ge.setValue(F,"spotShadowMap",ln.state.spotShadowMap,K),ln.state.pointShadowMap.length>0&&ge.setValue(F,"pointShadowMap",ln.state.pointShadowMap,K)),H.isSkinnedMesh){ge.setOptional(F,H,"bindMatrix"),ge.setOptional(F,H,"bindMatrixInverse");const ye=H.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),ge.setValue(F,"boneTexture",ye.boneTexture,K))}H.isBatchedMesh&&(ge.setOptional(F,H,"batchingTexture"),ge.setValue(F,"batchingTexture",H._matricesTexture,K),ge.setOptional(F,H,"batchingIdTexture"),ge.setValue(F,"batchingIdTexture",H._indirectTexture,K),ge.setOptional(F,H,"batchingColorTexture"),H._colorsTexture!==null&&ge.setValue(F,"batchingColorTexture",H._colorsTexture,K));const Gi=X.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&N.update(H,X,Rn),(ki||Mt.receiveShadow!==H.receiveShadow)&&(Mt.receiveShadow=H.receiveShadow,ge.setValue(F,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&I.environment!==null&&(Fe.envMapIntensity.value=I.environmentIntensity),Fe.dfgLUT!==void 0&&(Fe.dfgLUT.value=Mx()),ki){if(ge.setValue(F,"toneMappingExposure",D.toneMappingExposure),Mt.needsLights&&xf(Fe,Ar),vt&&G.fog===!0&&Ct.refreshFogUniforms(Fe,vt),Ct.refreshMaterialUniforms(Fe,G,nt,Z,x.state.transmissionRenderTarget[E.id]),Mt.needsLights&&Mt.lightProbeGrid){const ye=Mt.lightProbeGrid;Fe.probesSH.value=ye.texture,Fe.probesMin.value.copy(ye.boundingBox.min),Fe.probesMax.value.copy(ye.boundingBox.max),Fe.probesResolution.value.copy(ye.resolution)}Xo.upload(F,Su(Mt),Fe,K)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Xo.upload(F,Su(Mt),Fe,K),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ge.setValue(F,"center",H.center),ge.setValue(F,"modelViewMatrix",H.modelViewMatrix),ge.setValue(F,"normalMatrix",H.normalMatrix),ge.setValue(F,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){const ye=G.uniformsGroups;for(let Hi=0,Rr=ye.length;Hi<Rr;Hi++){const Eu=ye[Hi];st.update(Eu,Rn),st.bind(Eu,Rn)}}return Rn}function xf(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.sunLights.needsUpdate=I,E.sunLightShadows.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function Mf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(E,I,X){const G=V.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),V.get(E.texture).__webglTexture=I,V.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,I){const X=V.get(E);X.__webglFramebuffer=I,X.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,X=0){et=E,q=I,$=X;let G=null,H=!1,vt=!1;if(E){const _t=V.get(E);if(_t.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(F.FRAMEBUFFER,_t.__webglFramebuffer),it.copy(E.viewport),lt.copy(E.scissor),bt=E.scissorTest,S.viewport(it),S.scissor(lt),S.setScissorTest(bt),Y=-1;return}else if(_t.__webglFramebuffer===void 0)K.setupRenderTarget(E);else if(_t.__hasExternalTextures)K.rebindTextures(E,V.get(E.texture).__webglTexture,V.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Vt=E.depthTexture;if(_t.__boundDepthTexture!==Vt){if(Vt!==null&&V.has(Vt)&&(E.width!==Vt.image.width||E.height!==Vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(E)}}const wt=E.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(vt=!0);const Rt=V.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Rt[I])?G=Rt[I][X]:G=Rt[I],H=!0):E.samples>0&&K.useMultisampledRTT(E)===!1?G=V.get(E).__webglMultisampledFramebuffer:Array.isArray(Rt)?G=Rt[X]:G=Rt,it.copy(E.viewport),lt.copy(E.scissor),bt=E.scissorTest}else it.copy(St).multiplyScalar(nt).floor(),lt.copy($t).multiplyScalar(nt).floor(),bt=Ve;if(X!==0&&(G=B),S.bindFramebuffer(F.FRAMEBUFFER,G)&&S.drawBuffers(E,G),S.viewport(it),S.scissor(lt),S.setScissorTest(bt),H){const _t=V.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+I,_t.__webglTexture,X)}else if(vt){const _t=I;for(let wt=0;wt<E.textures.length;wt++){const Rt=V.get(E.textures[wt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+wt,Rt.__webglTexture,X,_t)}}else if(E!==null&&X!==0){const _t=V.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,_t.__webglTexture,X)}Y=-1};function bu(E){const I=V.get(E);return(I.__readFormat!==E.format||I.__readType!==E.type)&&(I.__readFormat=E.format,I.__readType=E.type,I.__formatReadable=C.textureFormatReadable(E.format),I.__typeReadable=C.textureTypeReadable(E.type)),I}this.readRenderTargetPixels=function(E,I,X,G,H,vt,yt,_t=0){if(!(E&&E.isWebGLRenderTarget)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=V.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&yt!==void 0&&(wt=wt[yt]),wt){S.bindFramebuffer(F.FRAMEBUFFER,wt);try{const Rt=E.textures[_t],Vt=Rt.format,Zt=Rt.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+_t);const Tt=bu(Rt);if(Tt.__formatReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt.__typeReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-G&&X>=0&&X<=E.height-H&&F.readPixels(I,X,G,H,ft.convert(Vt),ft.convert(Zt),vt)}finally{const Rt=et!==null?V.get(et).__webglFramebuffer:null;S.bindFramebuffer(F.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(E,I,X,G,H,vt,yt,_t=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=V.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&yt!==void 0&&(wt=wt[yt]),wt)if(I>=0&&I<=E.width-G&&X>=0&&X<=E.height-H){S.bindFramebuffer(F.FRAMEBUFFER,wt);const Rt=E.textures[_t],Vt=Rt.format,Zt=Rt.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+_t);const Tt=bu(Rt);if(Tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ce),F.bufferData(F.PIXEL_PACK_BUFFER,vt.byteLength,F.STREAM_READ),F.readPixels(I,X,G,H,ft.convert(Vt),ft.convert(Zt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const ke=et!==null?V.get(et).__webglFramebuffer:null;S.bindFramebuffer(F.FRAMEBUFFER,ke);const Ee=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await ep(F,Ee,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ce),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,vt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ce),F.deleteSync(Ee),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,I=null,X=0){const G=Math.pow(2,-X),H=Math.floor(E.image.width*G),vt=Math.floor(E.image.height*G),yt=I!==null?I.x:0,_t=I!==null?I.y:0;K.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,yt,_t,H,vt),S.unbindTexture()},this.copyTextureToTexture=function(E,I,X=null,G=null,H=0,vt=0){let yt,_t,wt,Rt,Vt,Zt,Tt,ce,ke;const Ee=E.isCompressedTexture?E.mipmaps[vt]:E.image;if(X!==null)yt=X.max.x-X.min.x,_t=X.max.y-X.min.y,wt=X.isBox3?X.max.z-X.min.z:1,Rt=X.min.x,Vt=X.min.y,Zt=X.isBox3?X.min.z:0;else{const Fe=Math.pow(2,-H);yt=Math.floor(Ee.width*Fe),_t=Math.floor(Ee.height*Fe),E.isDataArrayTexture?wt=Ee.depth:E.isData3DTexture?wt=Math.floor(Ee.depth*Fe):wt=1,Rt=0,Vt=0,Zt=0}G!==null?(Tt=G.x,ce=G.y,ke=G.z):(Tt=0,ce=0,ke=0);const _e=ft.convert(I.format),en=ft.convert(I.type);let Mt;I.isData3DTexture?(K.setTexture3D(I,0),Mt=F.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(K.setTexture2DArray(I,0),Mt=F.TEXTURE_2D_ARRAY):(K.setTexture2D(I,0),Mt=F.TEXTURE_2D),S.activeTexture(F.TEXTURE0),S.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,I.flipY),S.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),S.pixelStorei(F.UNPACK_ALIGNMENT,I.unpackAlignment);const ln=S.getParameter(F.UNPACK_ROW_LENGTH),ne=S.getParameter(F.UNPACK_IMAGE_HEIGHT),Rn=S.getParameter(F.UNPACK_SKIP_PIXELS),oi=S.getParameter(F.UNPACK_SKIP_ROWS),ki=S.getParameter(F.UNPACK_SKIP_IMAGES);S.pixelStorei(F.UNPACK_ROW_LENGTH,Ee.width),S.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ee.height),S.pixelStorei(F.UNPACK_SKIP_PIXELS,Rt),S.pixelStorei(F.UNPACK_SKIP_ROWS,Vt),S.pixelStorei(F.UNPACK_SKIP_IMAGES,Zt);const Ar=E.isDataArrayTexture||E.isData3DTexture,ge=I.isDataArrayTexture||I.isData3DTexture;if(E.isDepthTexture){const Fe=V.get(E),Gi=V.get(I),ye=V.get(Fe.__renderTarget),Hi=V.get(Gi.__renderTarget);S.bindFramebuffer(F.READ_FRAMEBUFFER,ye.__webglFramebuffer),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Rr=0;Rr<wt;Rr++)Ar&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,V.get(E).__webglTexture,H,Zt+Rr),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,V.get(I).__webglTexture,vt,ke+Rr)),F.blitFramebuffer(Rt,Vt,yt,_t,Tt,ce,yt,_t,F.DEPTH_BUFFER_BIT,F.NEAREST);S.bindFramebuffer(F.READ_FRAMEBUFFER,null),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||V.has(E)){const Fe=V.get(E),Gi=V.get(I);S.bindFramebuffer(F.READ_FRAMEBUFFER,U),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,k);for(let ye=0;ye<wt;ye++)Ar?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Fe.__webglTexture,H,Zt+ye):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Fe.__webglTexture,H),ge?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Gi.__webglTexture,vt,ke+ye):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Gi.__webglTexture,vt),H!==0?F.blitFramebuffer(Rt,Vt,yt,_t,Tt,ce,yt,_t,F.COLOR_BUFFER_BIT,F.NEAREST):ge?F.copyTexSubImage3D(Mt,vt,Tt,ce,ke+ye,Rt,Vt,yt,_t):F.copyTexSubImage2D(Mt,vt,Tt,ce,Rt,Vt,yt,_t);S.bindFramebuffer(F.READ_FRAMEBUFFER,null),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ge?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(Mt,vt,Tt,ce,ke,yt,_t,wt,_e,en,Ee.data):I.isCompressedArrayTexture?F.compressedTexSubImage3D(Mt,vt,Tt,ce,ke,yt,_t,wt,_e,Ee.data):F.texSubImage3D(Mt,vt,Tt,ce,ke,yt,_t,wt,_e,en,Ee):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,vt,Tt,ce,yt,_t,_e,en,Ee.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,vt,Tt,ce,Ee.width,Ee.height,_e,Ee.data):F.texSubImage2D(F.TEXTURE_2D,vt,Tt,ce,yt,_t,_e,en,Ee);S.pixelStorei(F.UNPACK_ROW_LENGTH,ln),S.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ne),S.pixelStorei(F.UNPACK_SKIP_PIXELS,Rn),S.pixelStorei(F.UNPACK_SKIP_ROWS,oi),S.pixelStorei(F.UNPACK_SKIP_IMAGES,ki),vt===0&&I.generateMipmaps&&F.generateMipmap(Mt),S.unbindTexture()},this.initRenderTarget=function(E){V.get(E).__webglFramebuffer===void 0&&K.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?K.setTextureCube(E,0):E.isData3DTexture?K.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?K.setTexture2DArray(E,0):K.setTexture2D(E,0),S.unbindTexture()},this.resetState=function(){q=0,$=0,et=null,S.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}const Dh={type:"change"},Yc={type:"start"},zd={type:"end"},Oo=new kc,Lh=new Ci,yx=Math.cos(70*he.DEG2RAD),We=new A,fn=2*Math.PI,me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sl=1e-6;class bx extends bm{constructor(t,e=null){super(t,e),this.state=me.NONE,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ts.ROTATE,MIDDLE:ts.DOLLY,RIGHT:ts.PAN},this.touches={ONE:Zr.ROTATE,TWO:Zr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new xi,this._lastTargetPosition=new A,this._quat=new xi().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new oh,this._sphericalDelta=new oh,this._scale=1,this._panOffset=new A,this._rotateStart=new gt,this._rotateEnd=new gt,this._rotateDelta=new gt,this._panStart=new gt,this._panEnd=new gt,this._panDelta=new gt,this._dollyStart=new gt,this._dollyEnd=new gt,this._dollyDelta=new gt,this._dollyDirection=new A,this._mouse=new gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=wx.bind(this),this._onPointerDown=Ex.bind(this),this._onPointerUp=Tx.bind(this),this._onContextMenu=Ix.bind(this),this._onMouseWheel=Cx.bind(this),this._onKeyDown=Px.bind(this),this._onTouchStart=Dx.bind(this),this._onTouchMove=Lx.bind(this),this._onMouseDown=Ax.bind(this),this._onMouseMove=Rx.bind(this),this._interceptControlDown=Nx.bind(this),this._interceptControlUp=Ux.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=me.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Dh),this.update(),this.state=me.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;We.copy(e).sub(this.target),We.applyQuaternion(this._quat),this._spherical.setFromVector3(We),this.autoRotate&&this.state===me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=fn:i>Math.PI&&(i-=fn),r<-Math.PI?r+=fn:r>Math.PI&&(r-=fn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(We.setFromSpherical(this._spherical),We.applyQuaternion(this._quatInverse),e.copy(this.target).add(We),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=We.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new A(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=We.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Oo.origin.copy(this.object.position),Oo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Oo.direction))<yx?this.object.lookAt(this.target):(Lh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Oo.intersectPlane(Lh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Sl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sl||this._lastTargetPosition.distanceToSquared(this.target)>Sl?(this.dispatchEvent(Dh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?fn/60*this.autoRotateSpeed*t:fn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){We.setFromMatrixColumn(e,0),We.multiplyScalar(-t),this._panOffset.add(We)}_panUp(t,e){this.screenSpacePanning===!0?We.setFromMatrixColumn(e,1):(We.setFromMatrixColumn(e,0),We.crossVectors(this.object.up,We)),We.multiplyScalar(t),this._panOffset.add(We)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;We.copy(r).sub(this.target);let s=We.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new gt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Ex(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function wx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Tx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zd),this.state=me.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Ax(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ts.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=me.DOLLY;break;case ts.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=me.ROTATE}break;case ts.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=me.PAN}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(Yc)}function Rx(n){switch(this.state){case me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Cx(n){this.enabled===!1||this.enableZoom===!1||this.state!==me.NONE||(n.preventDefault(),this.dispatchEvent(Yc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(zd))}function Px(n){this.enabled!==!1&&this._handleKeyDown(n)}function Dx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Zr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=me.TOUCH_ROTATE;break;case Zr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=me.TOUCH_PAN;break;default:this.state=me.NONE}break;case 2:switch(this.touches.TWO){case Zr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=me.TOUCH_DOLLY_PAN;break;case Zr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=me.TOUCH_DOLLY_ROTATE;break;default:this.state=me.NONE}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(Yc)}function Lx(n){switch(this._trackPointer(n),this.state){case me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=me.NONE}}function Ix(n){this.enabled!==!1&&n.preventDefault()}function Nx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ux(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ws=new A;function Pn(n,t,e,i,r,s){const o=2*Math.PI*r/4,a=Math.max(s-2*r,0),c=Math.PI/4;ws.copy(t),ws[i]=0,ws.normalize();const l=.5*o/(o+a),u=1-ws.angleTo(n)/c;return Math.sign(ws[e])===1?u*l:a/(o+a)+l+l*(1-u)}class qc extends ji{constructor(t=1,e=1,i=1,r=2,s=.1){const o=r*2+1;if(s=Math.min(t/2,e/2,i/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:r,radius:s},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new A,l=new A,u=new A(t,e,i).divideScalar(2).subScalar(s),f=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,g=f.length/6,y=new A,m=.5/o;for(let p=0,b=0;p<f.length;p+=3,b+=2)switch(c.fromArray(f,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),f[p+0]=u.x*Math.sign(c.x)+l.x*s,f[p+1]=u.y*Math.sign(c.y)+l.y*s,f[p+2]=u.z*Math.sign(c.z)+l.z*s,h[p+0]=l.x,h[p+1]=l.y,h[p+2]=l.z,Math.floor(p/g)){case 0:y.set(1,0,0),d[b+0]=Pn(y,l,"z","y",s,i),d[b+1]=1-Pn(y,l,"y","z",s,e);break;case 1:y.set(-1,0,0),d[b+0]=1-Pn(y,l,"z","y",s,i),d[b+1]=1-Pn(y,l,"y","z",s,e);break;case 2:y.set(0,1,0),d[b+0]=1-Pn(y,l,"x","z",s,t),d[b+1]=Pn(y,l,"z","x",s,i);break;case 3:y.set(0,-1,0),d[b+0]=1-Pn(y,l,"x","z",s,t),d[b+1]=1-Pn(y,l,"z","x",s,i);break;case 4:y.set(0,0,1),d[b+0]=1-Pn(y,l,"x","y",s,t),d[b+1]=1-Pn(y,l,"y","x",s,e);break;case 5:y.set(0,0,-1),d[b+0]=Pn(y,l,"x","y",s,t),d[b+1]=1-Pn(y,l,"y","x",s,e);break}}static fromJSON(t){return new qc(t.width,t.height,t.depth,t.segments,t.radius)}}function Fx(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,c=new Ue;let l=0;for(let u=0;u<n.length;++u){const f=n[u];let h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(f.attributes[d]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0;const f=[];for(let h=0;h<n.length;++h){const d=n[h].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+u);u+=n[h].attributes.position.count}c.setIndex(f)}for(const u in s){const f=Ih(s[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(const u in o){const f=o[u][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<f;++h){const d=[];for(let y=0;y<o[u].length;++y)d.push(o[u][y][h]);const g=Ih(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function Ih(n){let t,e,i,r=-1,s=0;for(let l=0;l<n.length;++l){const u=n[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}const o=new t(s),a=new Jn(o,e,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const f=c/e;for(let h=0,d=u.count;h<d;h++)for(let g=0;g<e;g++){const y=u.getComponent(h,g);a.setComponent(h+f,g,y)}}else o.set(u.array,c);c+=u.count*e}return r!==void 0&&(a.gpuType=r),a}const yl=new Map;function Oe(n){return yl.has(n)||yl.set(n,new Ki({color:n,roughness:.85})),yl.get(n)}function P(n,t,e,i,r,s,o,a,c=!1){const l=new Ot(c?new qc(r,s,o,2,Math.min(.09,r/4,s/4,o/4)):new ji(r,s,o),Oe(a));return l.position.set(t,e,i),l.castShadow=!0,l.receiveShadow=!0,n.add(l),l}function Gn(n,t,e,i,r,s,o=[1,1,1]){const a=new Ot(new Ea(r,12,10),Oe(s));return a.position.set(t,e,i),a.scale.set(...o),a.castShadow=!0,n.add(a),a}function Nh(n){n.material=n.material.clone();const t=n.material;return t.transparent=!0,t.opacity=1,n.userData.dynamic=!0,n}function Ln(n,t,e,i,r,s=3,o="#f2c65a"){const a=document.createElement("canvas");a.width=s>=8?2048:1024,a.height=s>=8?512:256;const c=a.getContext("2d");if(c.scale(a.width/2048,a.height/512),c.fillStyle=o,c.fillRect(0,0,2048,512),c.fillStyle="#263f40",c.fillRect(0,0,2048,42),c.fillRect(0,470,2048,42),c.fillStyle="#233d42",c.textBaseline="middle",/MOVECRAFT/.test(t))c.beginPath(),c.roundRect(70,86,340,340,76),c.fill(),c.fillStyle=o,c.font="1000 230px Nunito, sans-serif",c.textAlign="center",c.fillText("M",240,270),c.fillStyle="#233d42",c.textAlign="left",c.font="1000 205px Nunito, sans-serif",c.fillText("MOVECRAFT",470,270);else{const h=Math.min(190,1660/Math.max(5,t.length)*2.15);c.font=`1000 ${h}px Nunito, sans-serif`,c.textAlign="center",c.fillText(t,1024,248)}const l=new bd(a);l.colorSpace=mn,l.anisotropy=8;const u=new ue;u.position.set(e,i,r),n.add(u),P(u,0,0,-.035,s,s/4,.1,2506560,!0);const f=new Ot(new ii(s*.94,s*.235),new ni({map:l,side:sn}));f.position.z=.022,u.add(f);for(const h of[-s*.43,s*.43])Gn(u,h,s*.085,.04,.035,16313807);return u}function Ox(n,t,e=7391353,i=!1,r=0){const s=new ue,o=i?2.5:3.45,a=i?1.5:2.05,c=document.createElement("canvas");c.width=768,c.height=500;const l=c.getContext("2d"),u=new bd(c),f=/LOCKED|MAX/.test(t);u.colorSpace=mn;const h=new Ot(new ii(o,a),new ni({map:u,transparent:!0,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.y=.018,h.renderOrder=3,h.userData.owned=!0,s.add(h);const d=()=>{if(l.save(),l.translate(142,235),l.fillStyle=f?"#87918b":"#244456",l.strokeStyle=l.fillStyle,l.lineWidth=18,l.lineCap="round",l.lineJoin="round",/collect/i.test(n))l.beginPath(),l.arc(0,0,82,0,Math.PI*2),l.stroke(),l.font="1000 112px Nunito, sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillText("$",0,5);else if(/cargo|rack|lining/i.test(n))l.strokeRect(-72,-52,144,112),l.beginPath(),l.moveTo(-52,-20),l.lineTo(52,-20),l.moveTo(-52,20),l.lineTo(52,20),l.stroke();else if(/truck|fleet/i.test(n)){l.fillRect(-70,-30,90,62),l.fillRect(20,-14,55,46);for(const m of[-42,47])l.beginPath(),l.arc(m,44,18,0,Math.PI*2),l.fill()}else/crew|strength|worker|hire/i.test(n)?(l.beginPath(),l.arc(0,-45,30,0,Math.PI*2),l.fill(),l.beginPath(),l.roundRect(-48,-5,96,82,28),l.fill()):/chair|assembly|paint|pack|wood|timber|mill/i.test(n)?(l.strokeRect(-42,-22,72,58),l.beginPath(),l.moveTo(-42,35),l.lineTo(-42,78),l.moveTo(30,35),l.lineTo(30,78),l.moveTo(-42,-22),l.lineTo(-42,-78),l.stroke()):/yard|factory|production|grounds/i.test(n)?(l.fillRect(-65,-42,130,112),l.fillStyle="#fff8e5",l.fillRect(-22,5,44,65),l.fillStyle=f?"#87918b":"#244456",l.beginPath(),l.moveTo(-82,-42),l.lineTo(0,-95),l.lineTo(82,-42),l.fill()):(l.strokeRect(-55,-68,110,136),l.beginPath(),l.moveTo(-28,-28),l.lineTo(30,-28),l.moveTo(-28,5),l.lineTo(30,5),l.moveTo(-28,38),l.lineTo(12,38),l.stroke());l.restore()};let g=-1;const y=m=>{const p=he.clamp(m,0,1);if(Math.abs(g-p)<.004)return;g=p,s.userData.progress=p,l.clearRect(0,0,c.width,c.height),l.fillStyle=f?"#d4d6c9":"#fff4d3",l.beginPath(),l.roundRect(18,18,732,464,54),l.fill(),p>0&&(l.save(),l.beginPath(),l.roundRect(18,18,732,464,54),l.clip(),l.fillStyle="#75c995",l.fillRect(18,18,732*p,464),l.restore()),l.lineWidth=22,l.strokeStyle="#244456",l.beginPath(),l.roundRect(18,18,732,464,54),l.stroke(),l.fillStyle="#244456",l.beginPath(),l.roundRect(42,76,204,322,44),l.fillStyle="#ffffff80",l.fill(),d(),l.fillStyle="#244456",l.textAlign="left",l.textBaseline="middle";const b=(t.startsWith("$"),t),R=n.toUpperCase();l.font=`1000 ${R.length>19?43:R.length>13?50:58}px Nunito, sans-serif`,l.fillText(R,286,155,425),l.font=`1000 ${b.length>9?88:116}px Nunito, sans-serif`,l.fillText(b,286,292,425),p>0&&(l.fillStyle="#244456",l.font="900 34px Nunito, sans-serif",l.fillText(`${Math.round(p*100)}% FUNDED`,286,414,425)),u.needsUpdate=!0};return s.userData.setProgress=y,s.userData.padHalfWidth=o/2,s.userData.padHalfDepth=a/2,s.userData.graphicLabel=n,s.userData.hasPurposeIcon=!0,y(r),s}function Kc(n=14983231,t=0,e="standard",i=0){const r=new ue,s=new ue;r.add(s);const o=[15119758,10382672,13209191][t%3],a={standard:{shirt:n,trousers:3296353,cap:3234931,bib:15721405},build:{shirt:15899186,trousers:3754576,cap:16760120,bib:16747821},logistics:{shirt:4619086,trousers:3492681,cap:3368509,bib:15130549},workshop:{shirt:12144195,trousers:3160905,cap:3030864,bib:3754581},elite:{shirt:7492769,trousers:2698560,cap:15394287,bib:14277095}}[e]??{shirt:n,trousers:3296353,cap:3234931,bib:15721405};n=a.shirt,Gn(s,0,1.04,-.01,.36,n,[1,1.12,.78]),P(s,0,.73,.02,.59,.25,.4,a.trousers,!0),P(s,0,1.08,.267,.08,.43,.025,16377270,!0),P(s,-.18,1.13,.269,.13,.15,.025,16377270,!0),Gn(s,0,1.65,.02,.36,o,[1,1.08,.93]),Gn(s,-.35,1.65,.02,.08,o),Gn(s,.35,1.65,.02,.08,o),Gn(s,0,1.61,.35,.08,o);for(const d of[-.13,.13])Gn(s,d,1.71,.324,.046,2435890),P(s,d,1.81,.32,.11,.035,.03,5323570,!0);const c=new Ot(new $c(new Td([new A(-.075,1.48,.349),new A(0,1.45,.365),new A(.075,1.48,.349)]),8,.009,5,!1),Oe(6899260));s.add(c),Gn(s,0,1.91,-.035,.35,t%2?5719095:a.cap,[1.04,.43,1.03]),t%2===0&&P(s,0,1.91,.31,.49,.07,.29,a.cap,!0),P(s,0,1.18,.282,.43,.34,.025,a.bib,!0);for(const d of[-.27,.27])P(s,d,1.18,.283,.07,.55,.025,a.bib,!0);if(e==="build"){P(s,0,2.13,-.04,.7,.12,.66,16760120,!0);for(const d of[-.24,.24])P(s,d,1.15,.31,.07,.4,.028,16771240);P(s,0,1.08,.31,.4,.055,.025,16773831,!0);for(const d of[-.17,.17])P(s,d,.78,.25,.12,.14,.08,14787127,!0)}else if(e==="logistics")P(s,0,1.15,-.25,.54,.68,.2,3235387,!0),P(s,0,1.92,.335,.22,.17,.03,15525832,!0),P(s,0,1.15,.31,.22,.21,.03,15525832,!0),P(s,.3,1.05,.15,.13,.23,.12,4742219,!0);else if(e==="workshop")P(s,0,1.94,.335,.17,.035,.025,15196618,!0),P(s,.3,.82,.12,.13,.3,.13,9017244,!0),P(s,-.3,.83,.14,.13,.24,.15,13134403,!0),P(s,0,1.08,.31,.37,.18,.03,3425875,!0);else if(e==="elite"){P(s,0,1.18,.31,.21,.16,.035,9266644);for(const d of[-.36,.36])Gn(s,d,1.76,0,.13,5653875);for(const d of[-.3,.3])P(s,d,1.13,.09,.15,.22,.37,9204411,!0);P(s,0,.87,.24,.4,.1,.08,10189009,!0)}if(i>=2)for(const d of[-.3,.3])P(s,d,1.08,0,.12,.16,.36,2702147,!0);const l=[],u=[],f=[],h=[];for(const d of[-1,1]){const g=new ue;g.position.set(d*.18,.7,0),s.add(g),P(g,0,-.14,0,.24,.3,.28,a.trousers,!0);const y=new ue;y.position.y=-.29,g.add(y),P(y,0,-.13,0,.23,.29,.27,a.trousers,!0),P(y,0,-.3,.07,.28,.18,.4,5132616,!0),f.push(y),l.push(g);const m=new ue;m.position.set(d*.39,1.24,0),s.add(m),P(m,0,-.13,0,.22,.36,.27,n,!0);const p=new ue;p.position.y=-.28,m.add(p),P(p,0,-.1,0,.18,.24,.2,o,!0),i>=1&&P(p,0,-.16,.06,.2,.17,.22,3160638,!0),Gn(p,0,-.24,.015,.115,o),h.push(p),u.push(m)}return r.userData.rig={body:s,legs:l,arms:u},{root:r,animate(d,g,y=!1,m=!1){const p=m?13.5:8.4,b=m?.72:.42;s.position.y=g?Math.abs(Math.sin(d*p))*(m?.065:.035):Math.sin(d*1.8)*.008,s.rotation.z=g?Math.sin(d*p/2)*(m?.035:.018):0,s.rotation.x=m?.13:0,l.forEach((R,M)=>R.rotation.x=g?Math.sin(d*p+M*Math.PI)*b:0),f.forEach((R,M)=>R.rotation.x=g?Math.max(0,-Math.sin(d*p+M*Math.PI))*(m?.9:.4):0),h.forEach(R=>R.rotation.x=y?-.35:m?-.8:-.15),u.forEach((R,M)=>R.rotation.x=y?-1.12:g?-Math.sin(d*p+M*Math.PI)*(m?.62:.34):.02)}}}function Zc(n){const t=new ue;if(n===0||n===1){const e=n===0?2.28:1.44,i=n===0?13400401:6396560;P(t,0,.46,0,e,.5,1.4,i,!0),P(t,0,.95,-.57,e,.83,.24,i,!0);for(const s of[-1,1])P(t,s*(e/2-.12),.73,0,.22,.48,1.4,i,!0),P(t,s*(e/2-.2),.12,.45,.12,.24,.12,6837063);const r=n===0?2:1;for(let s=0;s<r;s++)P(t,(s-(r-1)/2)*.95,.76,.02,n===0?.91:1.05,.17,1.01,n===0?14721135:9287842,!0)}else if(n===2)P(t,0,.76,0,1.45,1.05,.17,2440008,!0),P(t,0,.77,.096,1.29,.89,.02,6655645),P(t,0,.18,0,.14,.3,.14,2440008),P(t,0,.05,0,.6,.1,.5,2440008);else if(n===3)P(t,0,.36,0,.71,.72,.71,12489310,!0),P(t,0,.726,0,.14,.015,.71,15324324),Ln(t,"BOOKS",0,.4,.36,.55,"#dab989");else if(n===4){const e=new Ot(new wn(.29,.22,.49,12),Oe(14059109));e.position.y=.25,t.add(e);for(let i=0;i<7;i++){const r=i*2.4,s=Gn(t,Math.sin(r)*.18,.8+i%3*.11,Math.cos(r)*.18,.23,i%2?7380055:4424296,[.45,1.6,.55]);s.rotation.z=Math.sin(r)*.65}}else if(n===5){P(t,0,.56,0,1.5,1.08,.72,11040848,!0);for(let e=0;e<3;e++)P(t,0,.24+e*.32,.371,1.36,.27,.035,12950638),P(t,0,.24+e*.32,.403,.3,.04,.04,4608076)}else if(n===6){const e=new Ot(new wn(.34,.4,.12,16),Oe(4215382));e.position.y=.06,t.add(e),P(t,0,.83,0,.08,1.55,.08,4215382);const i=new Ot(new Qs(.37,.62,16,1,!0),Oe(15321203));i.position.y=1.55,i.rotation.x=Math.PI,t.add(i)}else if(n===7)P(t,0,1.02,0,.72,1.95,.16,7756355,!0),P(t,0,1.02,.09,.56,1.7,.022,10207944,!0),P(t,0,.08,0,.72,.16,1.45,7756355,!0);else if(n===8){P(t,0,.78,0,2.35,1.42,1.22,3159611,!0),P(t,0,1.43,-.23,2.2,.18,.7,2435630,!0),P(t,0,.92,.61,2.15,.13,.38,15526105);for(let e=0;e<10;e++)P(t,-1+e*.22,1.01,.68,.025,.12,.2,3225146);for(const e of[-.9,.9])P(t,e,.25,.2,.17,.5,.17,2435630)}else if(n===10){P(t,0,.34,0,.66,.68,.66,11257276,!0),P(t,0,.7,0,.7,.08,.7,15324316,!0);for(const e of[-.18,.18])for(const i of[-.17,.17]){const r=new Ot(new wn(.095,.075,.42,10),Oe(10409179));r.position.set(e,.53,i),t.add(r)}}else if(n===11){P(t,0,.33,0,.7,.66,.7,9399380,!0);for(let e=0;e<5;e++)P(t,-.2+e*.1,.7,0,.06,.08,.55,[6455171,12812390,14862731][e%3],!0)}else n===12?(P(t,0,.32,0,.68,.62,.64,3689557,!0),P(t,0,.65,0,.54,.09,.48,7906989,!0),P(t,0,.35,.335,.28,.22,.035,14730365,!0)):(P(t,0,.42,0,.72,.82,.72,13081188,!0),Ln(t,"FRAGILE",0,.45,.38,.72,"#efb36d"));return t}const $r={front:.2,back:5.8,rampEnd:8.8,depth:7};function Bx(n=7,t=0,e=0,i="base"){const r=new ue,s=new ue,o=new ue;s.position.set(3,0,.14),o.position.set(-3,0,-.14),s.add(o),r.add(s);const a=[],c=[];r.name="active-truck";const l=$r.front+n*.8,u=l-$r.front,f=(l+$r.front)/2,h={base:{cab:15777101,box:e>1?16052194:14935256,trim:3822432,roof:16046464},city:{cab:15198169,box:15987176,trim:2647174,roof:13951198},build:{cab:15632185,box:14787421,trim:14968866,roof:15770440},premium:{cab:3423294,box:4278087,trim:13149004,roof:4868933}}[i]??{cab:15777087,box:16052194,trim:3768216,roof:14862703},d=h.cab,g=h.box;if(r.userData.bodyColor=d,$r.back=l,$r.rampEnd=l+2.2,$r.depth=n,P(o,3,.55,f,3.3,.42,u+.2,3162186,!0),P(o,3,.735,f,3.2,.09,u,13350548),e>0){P(o,3,1.9,.15,3.3,2.65,.15,g);for(const M of[1.35,4.65]){P(o,M,.99,f,.1,.4,u+.2,g),P(o,M,2.8,f,.08,.1,u+.2,9808549);for(const _ of[.15,l+.05])P(o,M,1.95,_,.09,1.8,.09,12240831)}}else{P(o,3,.88,.15,3.25,.22,.1,i==="base"?9010537:h.trim,!0);for(const M of[1.35,4.65])P(o,M,.88,f,.1,.22,u+.1,i==="base"?9010537:h.trim,!0)}const y=[];if(e>0)for(const M of[1.35,4.65])y.push(Nh(P(o,M,1.72,f,.07,1.82,u,g,!0)));P(r,3,.78,-1.05,3.2,.72,2.1,d,!0),P(r,3,1.03,-2.12,3.08,.55,.19,d,!0),P(r,3,1.42,-.03,3.2,1.55,.12,d,!0);for(const M of[1.45,4.55])for(const _ of[-2.02,-.08])P(r,M,1.48,_,.18,1.45,.18,d,!0);const m=P(r,3,1.8,-2.12,2.82,.65,.04,6523029);m.material=new Ki({color:7974585,transparent:!0,opacity:.55,roughness:.18,metalness:.05}),P(r,2.45,1.13,-1.25,.72,.72,.72,3362132,!0),P(r,3.55,1.13,-1.25,.72,.72,.72,3362132,!0),P(r,3,1.38,-1.84,2.5,.18,.45,2506051,!0);const p=new Ot(new fs(.24,.045,8,18),Oe(2439229));p.position.set(3.72,1.55,-1.65),p.rotation.x=Math.PI/2.8,r.add(p),P(r,3,2.03,-1.05,3.3,.14,2.2,i==="base"?16111479:h.cab,!0),P(r,3,.63,-2.16,3.15,.28,.16,4150615,!0),P(r,3,.91,-2.2,1.05,.2,.05,6517617,!0);for(const M of[1.78,4.22])P(r,M,1.04,-2.23,.48,.24,.05,16770720,!0),P(r,M,1.58,-2.19,.19,.13,.06,14253140,!0);for(const M of[1.25,4.75])P(r,M,1.65,-1.25,.22,.15,.38,3164235,!0);for(const M of[1.37,4.63]){const _=P(r,M,1.78,-1,.025,.55,1.5,6523029);_.material=new Ki({color:7974585,transparent:!0,opacity:.42,roughness:.15});for(const x of[-1.2,l-.45]){const T=new ue;T.position.set(M,.46,x),(x<0?r:o).add(T);const v=new Ot(new wn(.46,.46,.28,16),Oe(2504510));v.rotation.z=Math.PI/2,v.castShadow=!0;for(const L of[-1,1])P(v,0,L*.151,.19,.09,.025,.3,15255388);const w=new ue;T.add(w),w.add(v);const D=new Ot(new wn(.23,.23,.3,12),Oe(10203048));D.rotation.z=Math.PI/2,w.add(D),a.push(w),x<0&&c.push(T)}}for(const M of[1.8,4.2])P(r,M,.95,-2.13,.45,.22,.06,16772529,!0);e===0&&P(r,3,.58,-2.29,3.2,.18,.15,h.trim,!0),P(r,3,.96,-2.305,1.26,.23,.045,i==="premium"?13149004:2505795,!0);for(let M=0;M<5;M++)P(r,2.52+M*.24,.96,-2.336,.045,.16,.02,i==="premium"?2700859:9218728,!0);if(e>=1){for(const M of[1.34,4.66])P(o,M,1.09,f,.035,.17,u,h.trim);P(r,3,.61,-2.25,3.3,.18,.18,12965847,!0)}if(e>=2){P(r,3,2.16,-1.12,2.35,.2,1.2,h.trim,!0);for(const M of[1.55,4.45])P(r,M,1.09,-2.27,.18,.35,.04,15334143,!0)}if(e>=3){for(const M of[1.6,4.4])P(o,M,.63,f,.13,.27,u-.2,h.trim,!0);for(const M of[2.3,3.7])P(r,M,2.31,-1.25,.46,.12,.22,16758596,!0)}if(e>=4){P(r,3,.86,-2.28,1.3,.36,.09,2379623,!0);for(let M=0;M<4;M++)P(r,2.55+M*.3,.86,-2.34,.08,.25,.025,13624545);P(r,3,2.37,-.8,1.2,.08,.6,15850653,!0)}if(i==="build"){for(const M of[2.05,3.95])P(r,M,2.16,-1.35,.23,.2,.23,16760134,!0);for(const M of[2.2,2.8,3.4,4]){const _=P(r,M,.65,-2.29,.2,.11,.025,16773577);_.rotation.z=-.45}}if(i==="city"){P(r,3,.62,-2.32,3.12,.12,.05,2647174,!0);for(const M of[1.37,4.63])P(o,M,.95,f,.075,.18,u,2647174,!0)}if(i==="premium"){for(const M of[1.4,4.6])P(o,M,2.77,f,.08,.09,u,13149004);P(r,3,.62,-2.31,2.9,.08,.04,13149004)}const b=new ue;b.position.set(3,.78,l),o.add(b),P(b,0,0,1.15,3.2,.1,2.3,8690328,!0);for(const M of[-1.45,1.45])P(b,M,.08,1.15,.12,.12,2.15,4217958,!0);if(P(b,0,.08,2.18,1.15,.1,.1,15779678,!0),t){const M=new ue;M.name="shelf",P(M,1.7,1.55,1.35,.55,.08,2.1,7047042);for(const _ of[.35,2.35])P(M,1.7,.75,_,.08,1.6,.08,5402218);if(t>1&&P(M,1.7,2.2,1.35,.55,.08,2.1,7047042),t>=3){for(const _ of[1.7,4.3]){for(const x of[1.1,1.62,2.14])P(M,_,x,1.35,.55,.07,2.25,5797232);for(const x of[.3,1.35,2.4])P(M,_,1.62,x,.52,1.12,.06,5007463)}for(const _ of[.72,1.45,2.18])P(M,1.7,1.38,_,.42,.35,.55,14199144,!0)}o.add(M)}const R=Nh(P(o,3,2.83,f,3.32,.09,u,e>1?h.roof:10134942,!0));if(R.visible=e>0,e>1)for(const M of[f-u*.32,f+u*.32])P(o,3,2.76,M,2.9,.08,.08,16044905);for(let M=0;M<=4;M++)P(o,1.4+M*.8,.788,f,.018,.008,u,15392707);for(let M=0;M<=n;M++)P(o,3,.79,.2+M*.8,3.2,.008,.018,15392707);return r.userData.rampPivot=b,r.userData.enclosed=e>0,r.userData.cargoWalls=y,r.userData.roof=R,r.userData.wheels=a,r.userData.frontWheels=c,r.userData.trailer=s,r.userData.cargo=o,r}const _c=4,zx=7,Ut=.8,Cs=[{id:"linden",name:"Linden District",x:-60,variant:0},{id:"old-town",name:"Old Town",x:-60,z:-54,variant:1},{id:"market",name:"Market Square",x:58,variant:2},{id:"birch",name:"Birch Road",x:58,z:36,variant:3},{id:"lake",name:"Lake View",x:91,variant:4},{id:"north-linden",name:"North Linden",x:-60,z:36,variant:5},{id:"north-old-town",name:"Oak Court",x:91,z:36,variant:6},{id:"south-market",name:"Garden Close",x:58,z:-54,variant:7},{id:"south-birch",name:"Birch Gardens",x:91,z:-54,variant:8}],lr=[{name:"Corduroy Sofa",w:3,d:2,value:230,weight:4,vulnerability:0},{name:"Armchair",w:2,d:2,value:110,weight:2,vulnerability:0},{name:"Television",w:2,d:1,value:270,weight:2,vulnerability:8},{name:"Book Box",w:1,d:1,value:65,weight:3,vulnerability:0},{name:"Houseplant",w:1,d:1,value:85,weight:1,vulnerability:7},{name:"Dresser",w:2,d:1,value:160,weight:4,vulnerability:1},{name:"Floor Lamp",w:1,d:1,value:120,weight:1,vulnerability:11},{name:"Standing Mirror",w:1,d:2,value:310,weight:2,vulnerability:14},{name:"Piano",w:3,d:2,value:620,weight:7,vulnerability:9},{name:"China Box",w:1,d:1,value:390,weight:2,vulnerability:17},{name:"Glassware Crate",w:1,d:1,value:340,weight:1,vulnerability:18},{name:"Record Collection",w:1,d:1,value:260,weight:1,vulnerability:12},{name:"Camera Case",w:1,d:1,value:410,weight:1,vulnerability:20}];function kd(n){let t=n>>>0;return()=>(t=Math.imul(1664525,t)+1013904223>>>0)/4294967296}function kx(n,t,e=[]){const i=Array.from({length:t},()=>Array(_c).fill(!1));for(const s of e)i[s]&&i[s].fill(!0);const r=[];for(const s of n){const o=lr[s];let a=!1;for(const c of[!1,!0]){const l=c?o.d:o.w,u=c?o.w:o.d;for(let f=0;f<=t-u&&!a;f++)for(let h=0;h<=_c-l&&!a;h++){let d=!0;for(let g=0;g<u;g++)for(let y=0;y<l;y++)d&&=!i[f+g][h+y];if(d){for(let g=0;g<u;g++)for(let y=0;y<l;y++)i[f+g][h+y]=!0;r.push(s),a=!0}}if(a)break}}return r}function Gx(n=0,t=0){const e=kd(n*997+t*313+41),i=7+t,r=Math.min(6+Math.floor(t/2)+Math.floor(n/2),14);let s=n===0&&t===0?[0,1,2,3,4,5]:Array.from({length:r},(a,c)=>c>=r-Math.min(1+Math.floor(n/2),5)?9+(c+n)%4:(c*3+n*2+t)%lr.length);(n!==0||t!==0)&&s.sort((a,c)=>lr[c].w*lr[c].d-lr[a].w*lr[a].d),s=kx(s,i,t===0?[2,5]:[]);const o=[];return s.map((a,c)=>{const l=lr[a],u=l.w*Ut/2,f=l.d*Ut/2;let h=-3,d=2,g=!1;for(let y=0;y<250;y++){const m=-9.75+u+e()*(8.3-u*2),p=-4.75+f+e()*(8.7-f*2),b=(n+1)%2?Math.abs(p+.35)<f+.32:Math.abs(m+5.6)<u+.32,R=o.some(M=>Math.abs(m-M.x)<u+M.hw+.24&&Math.abs(p-M.z)<f+M.hd+.24);if(!b&&!R){h=Math.round(m*10)/10,d=Math.round(p*10)/10,g=!0;break}}if(!g)for(let y=-4.2+f;y<=4.1-f&&!g;y+=.45)for(let m=-9.7+u;m<=-1.5-u&&!g;m+=.45){const p=(n+1)%2?Math.abs(y+.35)<f+.24:Math.abs(m+5.6)<u+.24,b=o.some(R=>Math.abs(m-R.x)<u+R.hw+.16&&Math.abs(y-R.z)<f+R.hd+.16);!p&&!b&&(h=Math.round(m*10)/10,d=Math.round(y*10)/10,g=!0)}return o.push({x:h,z:d,hw:u,hd:f}),{...l,model:a,id:c,fragile:l.vulnerability>=7,vulnerability:l.vulnerability+Math.min(n*1.5,9),location:"pickup",x:0,z:0,pickupX:h,pickupZ:d,rotated:!1}})}function Jc(n=0,t=0,e=n){const i=["Baumann Family","Mara King","Morning Glow Café","Dr. Hoffman","Sun Deck Hotel","Northern Lights Gallery"],r=["First Apartment Move","Old House, Narrow Doors","Café Grand Opening","Delicate Private Move","Major Hotel Move-In","Premium Art Transport"],s=kd(e*2654435761+n*97+1729>>>0),o=Math.floor(s()*Cs.length),a=Cs.map((d,g)=>g).filter(d=>d!==o),c=a[Math.floor(s()*a.length)],l=Cs[o],u=Cs[c],f=Gx(n,t),h=Math.round(f.reduce((d,g)=>d+g.value,0)*(1+n*.07));return{client:i[n%i.length],title:r[n%r.length],from:l.name,to:u.name,fromSite:l,toSite:u,difficulty:n+1,items:f,reward:h}}function Je(n){return n.rotated?[n.d,n.w]:[n.w,n.d]}function Gd(n,t,e,i,r=_c,s=zx){const[o,a]=Je(t);return Number.isInteger(e)&&Number.isInteger(i)&&e>=0&&i>=0&&e+o<=r&&i+a<=s&&!n.some(c=>{if(c.id===t.id||c.location!=="truck")return!1;const[l,u]=Je(c);return e<c.x+l&&e+o>c.x&&i<c.z+u&&i+a>c.z})}const Hx=["supply","mill","assembly","paint","packing"],Sr={truck:"Complete truck upgrade",cargo:"Included with truck",gear:"Included with truck",worker:"Strength, stamina & speed",yard:"Expand company base",hire:"Hire crew with truck",fleet:"Employee truck upgrade",factory:"Buy furniture company"},gn={truck:8,cargo:3,gear:3,worker:8,yard:4,hire:4,fleet:4,factory:1};function Hd(){return{cash:450,jems:0,ownedSkins:{truck:["base"],person:["standard"]},selectedSkins:{truck:"base",person:"standard"},jobs:0,earned:0,levels:{truck:0,cargo:0,gear:0,worker:0,yard:0,hire:0,fleet:0,factory:0},fleet:[],timber:0,parts:0,products:0,painted:0,packed:0,sold:0,production:0,supply:0,test:!1,contributions:{},stationLevels:{supply:0,mill:0,assembly:0,paint:0,packing:0},stationProgress:{supply:0,mill:0,assembly:0,paint:0,packing:0},stationContributions:{},daily:{lastClaim:"",streak:0},finished:!1}}function Vx(n){const t=Hd(),e={...t,...n,jems:Math.max(0,Math.floor(Number(n?.jems)||0)),ownedSkins:{truck:[...new Set(["base",...Array.isArray(n?.ownedSkins?.truck)?n.ownedSkins.truck:[]])],person:[...new Set(["standard",...Array.isArray(n?.ownedSkins?.person)?n.ownedSkins.person:[]])]},selectedSkins:{...t.selectedSkins,...n?.selectedSkins},levels:{...t.levels,...n?.levels},contributions:{...t.contributions,...n?.contributions},stationLevels:{...t.stationLevels,...n?.stationLevels},stationProgress:{...t.stationProgress,...n?.stationProgress},stationContributions:{...t.stationContributions,...n?.stationContributions}};return e.levels.truck=Math.min(gn.truck,Math.max(e.levels.truck,e.levels.cargo,e.levels.gear)),e.levels.cargo=e.levels.truck,e.levels.gear=e.levels.truck,e.fleet=(e.fleet??[]).map(i=>({...i,pending:i.pending??0})),e.levels.hire=Math.max(e.levels.hire,e.fleet.length),e.levels.fleet=e.fleet.length,e.levels.factory=e.finished?1:0,e.ownedSkins.truck.includes(e.selectedSkins.truck)||(e.selectedSkins.truck="base"),e.ownedSkins.person.includes(e.selectedSkins.person)||(e.selectedSkins.person="standard"),e}function Xs(n,t){return Math.round({truck:520,cargo:800,gear:450,worker:260,yard:1800,hire:2200,fleet:1800,factory:5e4}[t]*(1+n.levels[t]*.55))}function Vd(n,t){return n.levels[t]>=gn[t]?"Maximum level":t==="yard"&&n.levels.truck<gn.truck?"Max your own truck first":t==="hire"&&n.levels.yard<1?"Expand the base for a parking bay":t==="hire"&&n.fleet.length>=n.levels.yard?"Upgrade the base for another parking bay":t==="fleet"?"Upgrade employee trucks at their own parking bay":t==="factory"&&!Xd(n)?"Max every truck, crew and base upgrade first":""}function Wx(n,t){const e=Vd(n,t);if(e)return e;const i=Math.max(0,Xs(n,t)-(n.contributions?.[t]??0));return!n.test&&n.cash<i?`Need $${i}`:(n.test||(n.cash-=i),n.contributions&&delete n.contributions[t],n.levels[t]++,t==="truck"&&(n.levels.cargo=n.levels.truck,n.levels.gear=n.levels.truck),t==="hire"&&(n.fleet.push({level:0,phase:-n.fleet.length*.08,completed:0,pending:0,route:n.fleet.length%3}),n.levels.fleet=n.fleet.length),t==="factory"&&(n.finished=!0),"")}function Ra(n,t){n.cash+=Math.round(t),n.earned+=Math.round(t)}function Xx(n,t){const e=n.fleet[t];if(!e||e.level>=4)return!1;const i=1e3*(e.level+1),r=Math.max(0,i-(e.contribution??0));return!n.test&&n.cash<r?!1:(n.test||(n.cash-=r),e.contribution=0,e.level++,!0)}function Wd(n){return 48-n.level*5}function Xd(n){return n.levels.truck>=gn.truck&&n.levels.worker>=gn.worker&&n.levels.yard>=gn.yard&&n.fleet.length>=gn.hire&&n.fleet.every(t=>t.level>=4)}function $x(n){return 260+n.level*125}function Yx(n,t){const e=n.fleet[t],i=Math.round(e?.pending??0);return!e||i<=0?0:(e.pending=0,Ra(n,i),i)}function qx(n,t=new Date){const e=t.toISOString().slice(0,10);if(n.daily.lastClaim===e)return 0;const i=new Date(t);i.setUTCDate(i.getUTCDate()-1),n.daily.streak=n.daily.lastClaim===i.toISOString().slice(0,10)?n.daily.streak>=8?1:n.daily.streak+1:1,n.daily.lastClaim=e;const r=vc(n.daily.streak);return Ra(n,r),n.jems+=la(n.daily.streak),n.daily.streak===8&&(n.ownedSkins.person.includes("build")?n.jems+=15:n.ownedSkins.person.push("build")),r}function la(n){return[1,2,3,4,5,6,7,8][Math.max(0,Math.min(7,n-1))]}function vc(n){return[150,225,325,450,600,800,1050,1400][Math.max(0,Math.min(7,n-1))]}function Kx(n,t){return n.levels.factory<1?"Build the workshop first":t==="supply"?!n.test&&n.cash<24?"Need $24 for timber":"":t==="mill"?n.timber<1?"Collect timber first":"":t==="assembly"?n.parts<2?"Process two timber pieces first":"":t==="paint"?n.products<1?"Assemble a chair first":"":n.painted<1?"Paint a chair first":""}function Zx(n,t){const e=Kx(n,t);return e||(t==="supply"?(n.test||(n.cash-=24),n.timber+=3,""):t==="mill"?(n.timber--,n.parts++,""):t==="assembly"?(n.parts-=2,n.products++,""):t==="paint"?(n.products--,n.painted++,""):(n.painted--,n.packed===0&&(n.supply=0),n.packed++,""))}function Jx(n,t){let e=0;for(const i of n.fleet){if((i.pending??0)>0){i.phase=0;continue}for(i.phase+=t/Wd(i);i.phase>=1;){i.phase--,i.completed++;const r=$x(i);i.pending=(i.pending??0)+r}}if(n.levels.factory&&!n.finished){const i={supply:8,mill:6,assembly:10,paint:7,packing:7};for(const r of Hx)if(n.stationLevels[r]>=2){const s=i[r]/(1+(n.stationLevels[r]-2)*.7+n.levels.factory*.08);if(n.stationProgress[r]+=t/s,n.stationProgress[r]>=1){const o=Zx(n,r);n.stationProgress[r]=o?Math.min(.95,n.stationProgress[r]):n.stationProgress[r]-1}}if(n.packed>0?n.supply+=t:n.supply=0,n.supply>=10){n.supply=0,n.packed--,n.sold++;const r=190+n.levels.factory*35;Ra(n,r),e+=r}}return e}const Uh={base:0,pickup:-48,destination:66},In={minX:-90,maxX:102,minZ:-72,maxZ:86},Bo=7,Sn=[-42,12,48],$o=[-78,-30,42,90],Yr=$o;function Un(n){n.removeFromParent(),n.traverse(t=>{t instanceof Ot&&(t.geometry.dispose(),t.userData.owned&&(t.material.map?.dispose(),t.material.dispose())),t instanceof Gp&&(t.material.map?.dispose(),t.material.dispose())})}function xc(n){n.material=n.material.clone();const t=n.material;return t.transparent=!0,n.userData.owned=!0,n}function Yo(n,t,e,i,r,s,o,a){const c=new Ue;c.setAttribute("position",new se([-r/2,0,-s/2,r/2,0,-s/2,0,o,-s/2,-r/2,0,s/2,r/2,0,s/2,0,o,s/2],3)),c.setIndex([0,2,1,3,4,5,0,3,5,0,5,2,2,5,4,2,4,1]),c.computeVertexNormals();const l=new Ot(c,Oe(a));return l.position.set(t,e,i),l.castShadow=!0,n.add(l),l}function Us(n,t,e,i){P(n,t,.75,e,.2,1.5,.2,8411970);for(let r=0;r<3;r++){const s=i===1?new Qs(1-r*.15,1.6,7):new Wc(.9,1),o=new Ot(s,Oe(i===2?15181958:i===1?3770233:r%2?7845223:5087096));o.position.set(t+(i===1?0:Math.sin(r*3)*.4),1.55+r*.4,e+Math.cos(r*3)*.2),o.castShadow=!0,n.add(o)}}function $d(n){n.updateMatrixWorld(!0);const t=new Map;n.traverse(e=>{if(e instanceof Ot&&!e.userData.owned&&e.material instanceof Ki){const i=Object.entries(e.geometry.attributes).map(([o,a])=>{const c=a;return`${o}:${c.itemSize}:${c.normalized}`}).sort().join("|"),r=`${e.material.uuid}:${e.geometry.index?"indexed":"plain"}:${i}`,s=t.get(r)??{material:e.material,meshes:[]};s.meshes.push(e),t.set(r,s)}});for(const{material:e,meshes:i}of t.values()){const r=i.map(a=>a.geometry.clone().applyMatrix4(a.matrixWorld)),s=Fx(r);if(r.forEach(a=>a.dispose()),!s)continue;i.forEach(a=>{a.removeFromParent(),a.geometry.dispose()});const o=new Ot(s,e);o.castShadow=o.receiveShadow=!0,n.add(o)}}const Qx=n=>n==="industrial"?13025965:n==="shops"?14275260:10731392;function jx(){const n=new ue,t=[],e=[],i=[],r=[],s=8295062,o=15655882,a=new Ot(new ii(1800,1800),Oe(11060874));a.rotation.x=-Math.PI/2,a.position.y=-.09,a.receiveShadow=!0,n.add(a);const c=Bo/2,l=1.3,u=(_,x,T)=>{const v=[];let w=x;for(const D of _)D-c>w&&v.push([w,D-c]),w=D+c;return w<T&&v.push([w,T]),v};for(const _ of Sn){P(n,6,-.025,_,310,.07,Bo,s);for(const[x,T]of u(Yr,-149,161))for(const v of[-1,1])P(n,(x+T)/2,.045,_+v*(c+l/2),T-x,.1,l,o);for(let x=-147;x<159;x+=4.4)Yr.some(T=>Math.abs(x-T)<c+3)||P(n,x,.018,_,1.6,.012,.085,16248269)}for(const _ of Yr){for(const[x,T]of u(Sn,-115,116))P(n,_,-.025,(x+T)/2,Bo,.07,T-x,s);for(const[x,T]of u(Sn,-115,116))for(const v of[-1,1])P(n,_+v*(c+l/2),.045,(x+T)/2,l,.1,T-x,o);for(let x=-113;x<114;x+=4.4)Sn.some(T=>Math.abs(x-T)<c+3)||P(n,_,.018,x,.085,.012,1.6,16248269)}const f=(_,x)=>{P(n,_,1.75,x,.12,3.5,.12,3958128),P(n,_,3.54,x,.65,.15,.45,16768657,!0),t.push({x:_,z:x,w:.3,d:.3})},h=(_,x)=>{P(n,_,.5,x,1.65,.16,.55,12094041,!0),P(n,_,.92,x-.25,1.65,.6,.12,12094041,!0);for(const T of[-.6,.6])P(n,_+T,.23,x,.1,.46,.5,4350316);t.push({x:_,z:x,w:1.75,d:.8})};for(const _ of Yr)for(const x of Sn){for(const v of[-1,1])for(const w of[-1,1])P(n,_+v*(c+l/2),.045,x+w*(c+l/2),l,.1,l,o);if((_===-30||_===42)&&x===12||_===-78&&x===48)for(const v of[-1,1]){const w=_+v*(c+.75),D=x-v*(c+1.5);P(n,w,1.45,D,.13,2.9,.13,3955044),t.push({x:w,z:D,w:.38,d:.38}),P(n,w,2.85,D,.36,.95,.26,3362392,!0);for(let L=0;L<3;L++)P(n,w,3.12-L*.26,D+.15,.19,.18,.05,[14186849,15778647,7521692][L],!0);for(let L=-2;L<=2;L++)P(n,_+L*1.1,.019,x+v*(c+1.7),.55,.012,1.3,16511188),P(n,_+v*(c+1.7),.019,x+L*1.1,1.3,.012,.55,16511188)}P(n,_+c+.8,1.2,x+c+2.8,.07,2.4,.07,5468538),t.push({x:_+c+.8,z:x+c+2.8,w:.34,d:.34}),Ln(n,x<0?"GARDEN LANE":_<0?"MARKET STREET":"LINDEN WAY",_+c+.8,2.35,x+c+2.8,1.9,"#dbe8cf")}for(const _ of Sn)for(let x=-68;x<88;x+=18)Yr.some(T=>Math.abs(x-T)<8)||(f(x,_+c+.8),P(n,x+2,.017,_+c-.35,.48,.01,.36,5795961));const d=[{x:5,z:-14,w:64,d:43},...Cs.map(_=>({x:_.x-5.6,z:_.z??0,w:11,d:11.5}))],g=(_,x,T=0)=>Math.abs(_.x-x.x)<(_.w+x.w)/2+T&&Math.abs(_.z-x.z)<(_.d+x.d)/2+T,y=_=>!d.some(x=>g(_,x,.5))&&!i.some(x=>g(_,x,.6))&&!Yr.some(x=>Math.abs(_.x-x)<_.w/2+c+l)&&!Sn.some(x=>Math.abs(_.z-x)<_.d/2+c+l),m=(_,x,T,v)=>t.push({x:_,z:x,w:T,d:v}),p=(_,x,T,v=!1)=>{const w=Yd(T,v);w.position.set(_,0,x),n.add(w),m(_,x,1.7,3.1)},b=(_,x,T)=>{Us(n,_,x,T),m(_,x,.4,.4)},R=(_,x,T,v=1)=>{P(n,_,x,T,v+.14,1.14,.09,16445655),P(n,_,x,T+.06,v,.95,.04,8567235),P(n,_,x,T+.09,.055,.95,.035,16445655)},M=(_,x,T,v)=>{const w={x:_,z:x,w:14,d:16,kind:T};if(!y(w))return;i.push(w),P(n,_,.01,x,14,.06,16,Qx(T));const D=T==="shops"||T==="industrial",L=T==="dense",O=T==="modern",B=D||L?10:7,U=D?7:6,k=T==="shops"?7:L?6.5:T==="industrial"?4.3:O?3.5:3.1,q=x-2,$=[15719349,14001294,12242896,15198424];P(n,_,k/2,q,B,k,U,O?15789792:$[v%4],!0),m(_,q,B,U),O||D?(P(n,_,k+.15,q,B+.55,.3,U+.6,O?4811632:5077378,!0),O&&P(n,_-1,k+.33,q,3,.06,2,3562871)):(Yo(n,_,k,q,B+.6,U+.7,v%2?2:1.25,[12022866,6720918,9991776][v%3]),P(n,_+2,k+.65,q-1.2,.55,1.3,.55,10845797));for(const lt of[-1,1])for(const bt of[-1.6,1.6])P(n,_+lt*(B/2+.04),1.8,q+bt,.08,1.1,1.2,15919056),P(n,_+lt*(B/2+.09),1.8,q+bt,.025,.87,1,8567235);if(v%4===1)for(let lt=0;lt<6;lt++)P(n,_,.28+lt*.43,q+U/2+.014,B,.025,.018,13079681);if(L)for(const lt of[-1.6,1.6])P(n,_+lt,1.1,q+U/2+.16,.25,2.2,.25,15259321);const et=q+U/2;if(P(n,_,1,et+.06,1.1,2,.11,4812664,!0),T==="industrial"){P(n,_+2,1.55,et+.08,3.5,3.1,.14,6323589);for(let lt=0;lt<6;lt++)P(n,_+2,.25+lt*.48,et+.17,3.35,.045,.025,11453119);Ln(n,["AUTO SERVICE","TYRE & REPAIR","LOCAL STORAGE","VAN RENTAL"][v%4],_,k-.6,et+.14,6,"#f6d183")}else{for(const lt of[-B*.32,B*.32])R(_+lt,1.9,et+.04,O?1.65:1.25);if(k>5)for(const lt of[-3,0,3])R(_+lt,4.8,et+.04,1.4),L&&(P(n,_+lt,4.08,et+.5,2.1,.12,.95,15785152),P(n,_+lt,4.55,et+.98,2.1,.8,.07,4947326));if(T==="shops"){for(const lt of[-3,3])P(n,_+lt,1.4,et+.13,2.4,2,.06,9422792);if(Ln(n,["BAKERY","CORNER CAFE","FRESH MARKET","BOOKS & NEWS"][v%4],_,3.45,et+.18,6.8,"#f5d293"),P(n,_,2.9,et+.65,9,.15,1.2,[6397575,13928040][v%2]),h(_-3,x+5),Fh(n,_+1.3,x+5),m(_-3,x+5,1.8,.7),P(n,_+2.7,.55,x+3.2,.6,1.1,.6,5075827,!0),v%4===1){P(n,_-3,.78,x+6.7,1,.09,.8,12818788);for(const lt of[-.8,.8])P(n,_-3+lt,.4,x+6.7,.42,.12,.45,12818788)}}}P(n,_+4.8,.055,x+5.2,3,.02,5.3,14142642),P(n,_,.056,x+4.6,1.5,.02,6,15193781);const Y=x<-45?-46.8:x>55?79.4:x>15?38.4:-16.6,j=x+7.8,it=Math.max(0,Y-j);if(it>0&&(r.push({x:_+4.8,z:(j+Y)/2,w:3,d:it},{x:_,z:(j+Y)/2,w:1.4,d:it}),P(n,_+4.8,.051,(j+Y)/2,3,.015,it,14142642),P(n,_,.051,(j+Y)/2,1.4,.015,it,15193781)),v%3!==1&&p(_+4.8,x+5,[14463339,8497586,13073769,15066319][v%4],T==="industrial"),!D){L||(P(n,_+4.8,1.15,x-4.6,2.35,2.3,3.4,14800831),P(n,_+4.8,2.37,x-4.6,2.65,.14,3.7,7311760),P(n,_+4.8,1,x-2.87,1.95,1.9,.06,7310474),P(n,_+4.8,.056,x+.1,2.45,.012,6,14142642),m(_+4.8,x-4.6,2.35,3.4));const lt=new Ot(new fs(.28,.035,5,16),Oe(5406309));lt.rotation.x=-Math.PI/2,lt.position.set(_-2,.09,x+6),n.add(lt),b(_-4.8,x+5.3,v%3),P(n,_-2.3,.48,x+7,.09,.96,.09,8416083),P(n,_-2.3,.95,x+7,.55,.4,.42,6063494,!0),P(n,_-6.7,.45,x,.35,.9,13,6590054,!0);for(let bt=0;bt<5;bt++)P(n,_-3+bt*.45,.16,x+5,.22,.22,.22,[15975529,15177619,14279356][bt%3],!0);v%2===0&&Fh(n,_-2,x+3.1)}for(let lt=0;lt<(L?3:1);lt++)P(n,_-B/2+.4+lt*.55,.4,et+.55,.43,.8,.46,5404791,!0)};for(const[_,x,T,v]of[[-64,-27,"shops",0],[-46,-27,"shops",1],[-64,30,"shops",2],[-46,30,"shops",3],[-64,-59,"homes",0],[-46,-59,"homes",1],[-16,-59,"homes",2],[3,-59,"homes",3],[24,-59,"homes",0],[56,-59,"modern",0],[75,-59,"modern",1],[56,-26,"modern",2],[75,-26,"modern",3],[-16,30,"industrial",0],[4,30,"industrial",1],[25,30,"industrial",2],[56,30,"dense",0],[75,30,"dense",1],[-64,65,"homes",2],[-46,65,"homes",3],[-16,65,"industrial",3],[4,65,"industrial",0],[56,65,"dense",2],[75,65,"dense",3]])M(_,x,T,v);for(const[_,x,T]of[[-54,-13,"square"],[24,65,"park"]]){const v={x:_,z:x,w:15,d:T==="square"?6:9,kind:T};if(y(v)){i.push(v),P(n,_,.045,x,15,.06,v.d,T==="square"?14930871:9549687),P(n,_,.085,x,13,.02,1.2,15127990);for(const w of[-5.5,5.5])b(_+w,x-2.5,0),h(_+w,x+2.5),f(_+w,x+3.8);if(T==="square"){const w=new Ot(new wn(1.6,1.75,.4,16),Oe(14141351));w.position.set(_,.25,x),n.add(w),m(_,x,3.5,3.5);const D=new Ot(new wn(1.4,1.4,.04,16),Oe(8045004));D.position.set(_,.47,x),n.add(D),P(n,_,1,x,.4,1.5,.4,15194041,!0)}else{for(const w of[-1.4,1.4])P(n,_+w,1,x-2,.12,2,.12,14857573);P(n,_,2,x-2,3,.13,.13,14857573),P(n,_,.75,x-2,.9,.1,.4,12810081)}}}for(const[_,x,T]of[[42,90,-15],[-30,90,40],[-63,75,81]]){P(n,(_+x)/2,.008,T,x-_,.025,3.2,10529698);for(const v of[-1,1])P(n,(_+x)/2,.039,T+v*1.9,x-_-Bo,.04,.55,o)}for(const[_,x]of[[-63,Math.PI/2],[75,0]]){const T=[],v=[];for(let L=0;L<=24;L++){const O=x+L*Math.PI/48;for(const B of[13.4,16.6])T.push(_+Math.cos(O)*B,.023,66+Math.sin(O)*B);if(L<24){const B=L*2;v.push(B,B+1,B+2,B+1,B+3,B+2)}}const w=new Ue;w.setAttribute("position",new se(T,3)),w.setIndex(v),w.computeVertexNormals();const D=w.index;for(let L=0;L<D.count;L+=3){const O=D.getX(L);D.setX(L,D.getX(L+2)),D.setX(L+2,O)}w.computeVertexNormals(),n.add(new Ot(w,Oe(10529698)))}for(let _=-68;_<86;_+=9)for(const x of[-72,-47,20,55,74]){const T={x:_,z:x,w:2.8,d:2.8};!y(T)||r.some(v=>g(T,v,.3))||x===20&&_>17&&_<26||(b(_,x,Math.abs(Math.round(_+x))%3),P(n,_,.07,x,2.2,.12,2.2,9942137,!0))}for(const _ of[19,21,23]){P(n,_,.4,20,1.5,.18,.12,15384971);for(const x of[-.5,.5])P(n,_+x,.24,20,.08,.48,.12,6978937)}P(n,-20,1.1,18,4,.13,1.7,4946820);for(const _ of[-21.7,-18.3])P(n,_,.55,18,.09,1.1,.09,4946820);h(-20,18),Ln(n,"BUS",-22.5,2.2,18,.8,"#f5d58c");for(const[_,x]of[[-26,20],[38,-30],[86,22]])P(n,_,.5,x,.65,1,.4,7967115,!0),m(_,x,.65,.4),P(n,_+1.1,.42,x,.2,.84,.2,13207142,!0);for(let _=-64;_<=76;_+=20)P(n,_,1.6,-89,7,3.2,6,13161138),Yo(n,_,3.2,-89,7.5,6.5,1.4,8165011),Us(n,_+7,-87,0);for(const _ of[-1,1])for(const x of[-69,-20,27,70]){const T=_<0?-119:131;P(n,T,1.65,x,8,3.3,6,_<0?14073773:12373949),Yo(n,T,3.3,x,8.5,6.5,1.4,6523019),Us(n,T+_*6,x+4,1)}for(const _ of[-88,100])for(const x of Sn)P(n,_,3.4,x,1.4,1.2,8.4,5401456,!0),P(n,_,1.8,x-3.7,1.4,3.6,1,5401456,!0),P(n,_,1.8,x+3.7,1.4,3.6,1,5401456,!0);return $d(n),n.userData.lots=i,{root:n,barriers:t,roofs:e}}function Fh(n,t,e){for(const i of[-.4,.4]){const r=new Ot(new fs(.28,.045,5,12),Oe(3495009));r.position.set(t+i,.32,e),n.add(r)}P(n,t,.6,e,.85,.055,.06,12484708),P(n,t+.2,.7,e,.06,.65,.06,12484708)}function Yd(n,t=!1){const e=new ue;P(e,0,.65,0,1.55,.7,3,n,!0),P(e,0,t?1.35:1.12,t?.35:0,1.35,t?.9:.6,t?2:1.7,n,!0),P(e,0,1.2,-.9,1.2,.45,.06,8566465);for(const i of[-.77,.77])for(const r of[-.94,.94]){const s=new Ot(new wn(.3,.3,.16,10),Oe(3426900));s.rotation.z=Math.PI/2,s.position.set(i,.3,r),e.add(s)}for(const i of[-.5,.5])P(e,i,.7,-1.52,.35,.2,.04,16769957);return e}function ls(n,t,e=!1,i=0){const r=new ue,s=[],o=[],a=n-5.6,c=-.3,l=e?15259056:15656145;P(r,a,.015,c,10,.12,10.6,13807225);for(let d=0;d<20;d++)P(r,a-4.8+d*.5,.08,c,.016,.01,10.3,12557425);const u=(d,g,y,m)=>(s.push({x:d,z:g,w:y,d:m}),P(r,d,1.55,g,y,3.1,m,l,!0)),f=[u(a,-5.55,10,.22),u(a-5,c,.22,10.5),u(a+5,c,.22,10.5),u(a-3.55,4.95,2.9,.22),u(a+3.55,4.95,2.9,.22)];t%2?f.push(u(a-3.6,-.35,2.8,.15),u(a+3.6,-.35,2.8,.15)):f.push(u(a,-3.1,.15,4.6));for(const d of[a-3,a+3])P(r,d,1.9,-5.4,1.5,1.3,.09,9291988),P(r,d,1.9,-5.32,.07,1.3,.05,16777215);const h=xc(Yo(r,a,3.2,c,10.6,11.1,2.05,e?5537671:12152400));o.push({mesh:h,bounds:{x:a,z:c,w:10.5,d:11}}),P(r,a,.04,6,4,.12,2.1,14731169);for(const d of[a-2.15,a+2.15])P(r,d,1.5,4.98,.18,3,.33,5406076);r.position.z=i;for(const d of s)d.z+=i;for(const d of o)d.bounds.z+=i;return{root:r,barriers:s,roofs:o}}function qd(n){const t=new ue,e=[],i=[],r=n.levels.yard;P(t,5,-.005,-14,63,.1,43,13551792);const s=(o,a,c,l,u,f,h)=>{P(t,o,u/2,a,c,u,l,h,!0),e.push({x:o,z:a,w:c,d:l});const d=xc(P(t,o,u+.15,a,c+.6,.3,l+.6,4353658,!0));i.push({mesh:d,bounds:{x:o,z:a,w:c+1,d:l+1}}),P(t,o,u-.55,a+l/2+.06,c,.7,.15,14922832);const g=Ln(t,f,o,u-.52,a+l/2+.17,Math.min(c-1,22),"#ffe0a0");g.scale.y=.23};s(-8,-29,27,10,6.4,"MOVECRAFT • MOVING COMPANY",15326911);for(const o of[-18,-13,-8,-3,2])P(t,o,4.2,-23.94,3.4,1.25,.1,8566977),P(t,o,4.2,-23.85,.07,1.25,.04,16445911);P(t,-8,1.2,-23.9,2.6,2.4,.12,5537415),P(t,-8,2.65,-22.9,4.4,.15,2.1,15318368),s(-20,-15,8,13,4.2,"STORAGE",13031107),P(t,-15.94,1.65,-15,.12,3.3,4.5,5667459),s(22,-28,26,10,4.5,"GARAGES & SERVICE",14603702);for(const o of[13,22,31]){P(t,o,1.65,-22.93,6,3.3,.15,7509649);for(let a=0;a<7;a++)P(t,o,.2+a*.45,-22.82,5.9,.04,.03,11322808)}for(let o=0;o<r;o++){const a=8+o*4.8;for(const c of[-2,2])P(t,a+c,.055,-8,.075,.02,10,16773843);P(t,a,.055,-13,4,.02,.075,16773843)}if(r>=2){const o=xc(P(t,20,3.8,-8,29,.2,11.4,5012096));i.push({mesh:o,bounds:{x:20,z:-8,w:30,d:12}})}for(const o of[{x:-26,z:-14,w:.3,d:43},{x:36,z:-14,w:.3,d:43},{x:5,z:-35,w:62,d:.3}])P(t,o.x,.45,o.z,o.w,.9,o.d,10005152),e.push(o);for(const[o,a]of[[-18,16],[35,2]])P(t,o,.4,7,a,.8,.3,10005152),e.push({x:o,z:7,w:a,d:.3});P(t,4,.07,7.7,16,.015,1.6,14274228);for(const o of[-3.4,11.4])P(t,o,.095,7.7,.12,.01,1.3,16377527);Ln(t,"MOVECRAFT",-19,2.6,6.8,6,"#ffda78"),P(t,-19,1.25,6.6,.2,2.5,.2,4550005),P(t,-10,.55,-1,2.6,1.1,.8,5012609,!0),Ln(t,"JOBS",-10,1.65,-.9,2,"#ffd168"),Ln(t,"TRUCK UPGRADES",-.45,1.35,-3.35,3.7,"#fff0bd");for(const o of[-1.75,.85])P(t,o,.65,-3.43,.12,1.3,.12,4550005);for(let o=0;o<5;o++){const a=new Ot(new fs(.42,.14,8,14),Oe(3754058));a.rotation.x=Math.PI/2,a.position.set(-22+o*.92,.18,-7.5),t.add(a)}P(t,-20,.08,-6.5,4.6,.04,.12,15185750),Ln(t,"STRENGTH & STAMINA",-20,.32,-6.45,3.5,"#fff0bd"),Ln(t,"YARD & CREWS",-8,3.75,-23.72,4.2,"#fff0bd");for(let o=0;o<3;o++){const a=-13.7+o*2.1,c=-19.3;for(let l=0;l<3;l++)P(t,a,.12+l*.13,c,1.5,.1,1.1,11635291);P(t,a,.72,c,1.15,.8,.8,14201211,!0),P(t,a,1.13,c,.12,.025,.8,15979675),e.push({x:a,z:c,w:1.5,d:1.1})}P(t,-14,.8,-10,1.25,1.6,1,5274996,!0),e.push({x:-14,z:-10,w:1.3,d:1.1}),P(t,-13,.45,-22,1.2,.9,.7,12351585,!0);for(const o of[-12.8,-11.8]){const a=new Ot(new Qs(.22,.7,8),Oe(15179868));a.position.set(o,.35,-8),t.add(a)}P(t,-14,.8,-13,.07,1.6,.07,4027008),P(t,-14,.12,-12.7,.65,.08,.55,4027008),P(t,-13,.75,-15.5,1.1,1.5,.75,12891029,!0),e.push({x:-13,z:-15.5,w:1.1,d:.75});for(const o of[-22,-18]){const a=Yd(o===-22?11059896:13998968);a.position.set(o,0,2),t.add(a),e.push({x:o,z:2,w:1.7,d:3.1})}if(Us(t,-24,-24,0),Us(t,7,-26,1),r>=3)for(const o of[-17,-8,1])P(t,o,6.75,-29,4,.1,5,3563385);return $d(t),{root:t,barriers:e,roofs:i}}function Oh(n,t,e,i,r=7589002,s=0){const o=Ox(n,t,r,!1,s);return o.position.set(e,.08,i),o}function Kd(n){return[1.4,1.4,1.4,.74,1.35,1.15,1.9,2.05,1.55,.9][n]??1}function tM(n,t,e){for(const i of n){if(i.mode==="air"){i.velocity.y-=9.8*t,i.position.addScaledVector(i.velocity,t),i.position.y<=.12&&(i.position.y=.12,i.mode="ground",i.velocity.set(0,0,0),i.settled=!0,i.hitAt=e.now,e.onDamage?.(i,i.item.fragile?4:2,"fall")),i.mesh.position.copy(i.position);continue}if(i.mode!=="truck")continue;const r=Math.abs(e.acceleration)*.19+Math.abs(e.yawRate*e.speed)*.65,s=i.secured?.045:.16,o=he.clamp(-e.yawRate*e.speed*.025,-s,s),a=he.clamp(-e.acceleration*.018,-s,s);if(i.angular.x=he.damp(i.angular.x,o,7,t),i.angular.z=he.damp(i.angular.z,a,7,t),i.mesh.position.copy(i.position),i.mesh.position.x+=i.angular.x,i.mesh.position.z+=i.angular.z,i.mesh.rotation.z=-i.angular.x*.2,i.mesh.rotation.x=i.angular.z*.2,!i.secured&&r>1.05&&e.now-i.hitAt>.8&&(i.hitAt=e.now,e.onDamage?.(i,Math.max(1,Math.round(i.item.vulnerability/8)),"rough driving")),!i.secured&&e.rearOpen&&i.position.z>e.back-2.25&&e.speed>3.4&&e.acceleration<-2.5&&e.now-i.hitAt>.2){e.truck.updateMatrixWorld(!0);const l=e.truck.userData.cargo.localToWorld(i.position.clone().add(new A(0,.25,1.4)));e.truck.parent?.add(i.mesh),i.mode="air",i.fallen=!0,i.position.copy(l),i.mesh.position.copy(l);const u=e.truck.rotation.y+e.truck.userData.trailer.rotation.y;i.mesh.rotation.set(0,u+(i.item.rotated?Math.PI/2:0),0),i.velocity.set(Math.sin(u)*e.speed*.3,1.2,Math.cos(u)*e.speed*.3),i.rails?.removeFromParent(),e.onFall?.(i)}}}function eM(n,t){const e=new Map,i=new Map,r=(m,p)=>`${m.toFixed(3)}:${p.toFixed(3)}`,s=(m,p)=>{const b=r(m,p);return e.has(b)||(e.set(b,new A(m,0,p)),i.set(b,[])),b},o=(m,p)=>{if(m===p)return;const b=e.get(m).distanceTo(e.get(p));i.get(m).push({to:p,cost:b}),i.get(p).push({to:m,cost:b})},a=[...new Set([...$o,n.x,t.x])].sort((m,p)=>m-p);for(const m of Sn){const p=a.map(b=>s(b,m));for(let b=1;b<p.length;b++)o(p[b-1],p[b])}for(const m of $o){const p=Sn.map(b=>s(m,b));for(let b=1;b<p.length;b++)o(p[b-1],p[b])}const c=s(n.x,n.z),l=s(t.x,t.z),u=m=>Sn.reduce((p,b)=>Math.abs(b-m)<Math.abs(p-m)?b:p),f=m=>$o.reduce((p,b)=>Math.abs(b-m)<Math.abs(p-m)?b:p);o(c,s(n.x,u(n.z))),Math.abs(f(n.x)-n.x)<4.5&&o(c,s(f(n.x),n.z)),o(l,s(t.x,u(t.z)));const h=new Map([[c,0]]),d=new Map,g=new Set(e.keys());for(;g.size;){let m="",p=1/0;for(const b of g){const R=h.get(b)??1/0;R<p&&(p=R,m=b)}if(!m||m===l)break;g.delete(m);for(const b of i.get(m)??[]){const R=p+b.cost;R<(h.get(b.to)??1/0)&&(h.set(b.to,R),d.set(b.to,m))}}const y=[];for(let m=l;m&&(y.push(e.get(m).clone()),m!==c);m=d.get(m));return y.reverse(),y[0]?.distanceTo(n)??!0?[n.clone(),t.clone()]:y.filter((m,p)=>p===0||m.distanceToSquared(y[p-1])>.01)}const Xe={name:"Jems",icon:"◆",color:"#8655cf"},Mc={truck:[{id:"base",name:"Original",price:0,color:"#e6ad51",detail:"Gelb · klassischer MOVECRAFT-LKW"},{id:"city",name:"Stadt",price:25,color:"#cbdde1",detail:"Cremeweiß · blaue Akzente"},{id:"build",name:"Bau",price:40,color:"#ec8538",detail:"Baustellenorange · Warnmarkierungen"},{id:"premium",name:"Premium",price:65,color:"#303638",detail:"Anthrazit · goldene Details"}],person:[{id:"standard",name:"Standard",price:0,color:"#e6ad51",detail:"Gelbes Shirt · blaue Kappe"},{id:"build",name:"Bau",price:15,color:"#f29a32",detail:"Bauhelm · Warnweste"},{id:"logistics",name:"Logistik",price:20,color:"#4a8051",detail:"Grüne Kappe · Lieferweste"},{id:"workshop",name:"Werkstatt",price:25,color:"#ba4e42",detail:"Rotes Shirt · Werkzeug"},{id:"elite",name:"Elite",price:40,color:"#7960a2",detail:"Violett · futuristische Ausrüstung"}]};function nM(n,t){const i=Math.max(0,(n==="truck"?["base","city","build","premium"]:["standard","build","logistics","workshop","elite"]).indexOf(t)),r=n==="truck"?543:2172/5,s=n==="truck"?i*r+(i?40:15):i*r+8,o=n==="truck"?i?480:510:r-16;return`<svg viewBox="${s} ${n==="truck"?175:10} ${o} ${n==="truck"?520:690}" role="img" aria-label="${t} ${n} preview"><image href="./skins/${n==="truck"?"trucks":"people"}.png" x="0" y="0" width="2172" height="724"/></svg>`}function iM(n){return Math.max(0,Math.min(5,Math.ceil(Math.max(0,n)/20)))}function rM(n){return!n.test&&n.jems<10?!1:(n.test||(n.jems-=10),n.cash+=2e3,n.earned+=2e3,!0)}function sM(n,t,e){const i=Mc[t].find(r=>r.id===e);return!i||n.ownedSkins[t].includes(e)||!n.test&&n.jems<i.price?!1:(n.test||(n.jems-=i.price),n.ownedSkins[t].push(e),n.selectedSkins[t]=e,!0)}const rt=n=>document.querySelector(n);rt("#app").innerHTML=`<div id="world"></div><header><div class="wallet"><div class="cash-wallet"><small>COINS</small><strong id="cash"></strong></div><div class="jem-wallet" title="${Xe.name}"><small>JEMS</small><strong><span>${Xe.icon}</span> <span id="jem-count">0</span></strong></div><span id="cash-mode"></span></div><button id="mode-toggle" title="Switch game mode">DEV</button><button id="daily-button" title="Shop">🛒</button><button id="settings" title="Settings">⚙</button><button id="test-toggle" title="Development tools">🧪</button></header>
<div id="right-rail"><aside id="job-card"><button id="job-toggle"><span class="job-icon">▣</span><span><small id="job-label">YOUR NEXT MOVE</small><strong id="job-title">Small beginnings</strong></span><b>⌄</b></button><div id="job-body"><div id="job-step"></div><div class="progress"><i id="job-progress"></i></div><div id="job-count"></div><div id="job-value"></div></div></aside><button id="company-toggle" class="side-button">▥ Company</button><aside id="company-panel" hidden><h2>Your company</h2><div id="company-stats"></div><div id="fleet-list"></div></aside></div>
<aside id="tests" hidden><h3>DEVELOPMENT WORKBENCH</h3><p class="dev-note">Unlimited money and direct test actions are active.</p><div class="test-grid"><button data-test="job">New job</button><button data-test="pack">Pack all</button><button data-test="deliver">Deliver all</button><button data-test="home">Back to yard</button></div><h3>INSPECT EACH UPGRADE</h3><div id="upgrade-tests" class="test-grid"></div><button data-test="restart">Reset test career…</button></aside>
<div id="money-stream"></div><div id="status-bar" role="status"><div id="status-main"><b id="hint-key">E</b><span><small id="status-kicker">NEXT ACTION</small><strong id="nav-label">Job board</strong><em id="nav-distance"></em></span></div><div id="notice"><b id="notice-icon"><svg viewBox="0 0 36 36" aria-hidden="true"><path d="M15.2 4.8 Q18 1 20.8 4.8 L33.8 28.2 Q36 33 31 33 H5 Q0 33 2.2 28.2 Z" fill="#c83d39"/></svg><span>!</span></b><span id="notice-text"></span></div><div id="purchase" hidden><strong id="purchase-name"></strong><div class="progress"><i id="purchase-progress"></i></div><small id="purchase-detail">STAND STILL TO INVEST</small></div></div><aside id="tutorial-card" hidden><small>TUTORIAL</small><h2 id="tutorial-title"></h2><ul id="tutorial-points"></ul><div class="tutorial-actions"><button id="tutorial-skip">Skip tutorial</button><button id="tutorial-next">Got it</button></div></aside><nav id="camera-controls"><button id="camera-follow" title="Follow">◎</button><button id="zoom-in">＋</button><button id="zoom-out">−</button><button id="help">?</button></nav><button id="stuck-button" hidden>Got stuck?</button><footer><button data-action="interact"><b>E</b><span>Interact</span></button><button data-action="cab"><b>F</b><span>Cab</span></button><button data-action="rotate"><b>R</b><span>Rotate</span></button><button data-action="rear"><b>G</b><span>Rear</span></button></footer><dialog id="dialog"></dialog>`;document.querySelector("footer")?.insertAdjacentHTML("beforeend",'<button data-action="secure"><b>Q</b><span>Secure</span></button>');document.documentElement.style.setProperty("--premium-color",Xe.color);rt("#job-count").insertAdjacentHTML("afterend",'<div id="job-score"></div>');let Zd=!1,W=Hd(),jt=null;for(const n of["movecraft-rewrite-v1","movecraft-update-backup"])try{const t=localStorage.getItem(n);if(t){jt=JSON.parse(t);break}}catch{}try{if(jt?.company&&(W=Vx(jt.company)),jt&&jt.worldVersion!==2){const n=t=>{t[0]>120?t[0]+=Uh.destination-144:t[0]>45&&(t[0]+=Uh.pickup-72)};for(const t of jt.loads??[])t.mode!=="truck"&&n(t.position);jt.truck&&(jt.truck.position=[0,0,0],jt.truck.yaw=0),jt.player=[-6,0,1],jt.navLeg="",jt.navIndex=0,jt.navPath=[],jt.worldVersion=2}}catch{}let yr=!0,br=!0,cs=!0,us=!0,mi=.35,bl=!0,ca=null;try{const n=JSON.parse(localStorage.getItem("movecraft-audio-v1")??"{}");yr=n.effects??yr,br=n.ambient??br,cs=n.music??cs,us=n.vehicle??us,mi=n.volume??mi}catch{}const Te=new Lp;Te.background=new qt(13032672);Te.fog=new zc(13032672,115,215);const yi=new Sx({antialias:!0});yi.setPixelRatio(Math.min(devicePixelRatio,1.5));yi.shadowMap.enabled=!0;yi.shadowMap.type=Kh;yi.toneMapping=Rc;yi.toneMappingExposure=1.15;rt("#world").appendChild(yi.domElement);const Ne=new wa(-18,18,12,-12,.1,450);Ne.position.set(22,29,26);Ne.zoom=.78;const hn=new bx(Ne,yi.domElement);hn.enablePan=!1;hn.enableDamping=!0;hn.minZoom=.55;hn.maxZoom=3.5;hn.minPolarAngle=.35;hn.maxPolarAngle=1.03;Te.add(new _m(16775135,6588822,2));const Bi=new Mm(16772305,2.7);Bi.position.set(-25,45,20);Bi.castShadow=!0;Bi.shadow.mapSize.set(2048,2048);Object.assign(Bi.shadow.camera,{left:-32,right:32,top:32,bottom:-32,near:.1,far:100});Bi.shadow.normalBias=.035;Te.add(Bi,Bi.target);const Ca=jx();Te.add(Ca.root);const $s=new ue;$s.name="navigation-route-guide";Te.add($s);const Jd=7.2,Qd=()=>Ce+6,Zi=new ue;Zi.name="navigation-parking-guide";const jd=new ni({color:16768099,transparent:!0,opacity:.68,depthWrite:!1,side:sn,polygonOffset:!0,polygonOffsetFactor:-3}),Pa=new Ot(new ii(Jd,1),jd);Pa.rotation.x=-Math.PI/2;Pa.position.y=.105;Zi.add(Pa);Zi.visible=!1;Te.add(Zi);let zo="",Yt=Jc(0,W.levels.truck,0),Qn=Yt.fromSite.x,jn=Yt.fromSite.z??0,Tn=Yt.toSite.x,An=Yt.toSite.z??0,fr=qd(W),Nn=ls(Qn,Yt.fromSite.variant,!1,jn),ti=ls(Tn,Yt.toSite.variant,!0,An);Te.add(fr.root,Nn.root,ti.root);const pr=Kc(15313475),ot=pr.root;function ua(){const n=Kc(15313475,0,W.selectedSkins.person,W.levels.worker),t=pr.root.userData.rig?.body;t&&(ot.remove(t),Un(t));const e=n.root.userData.rig.body;n.root.remove(e),ot.add(e),pr.root.userData.rig=n.root.userData.rig,pr.animate=n.animate}ua();ot.position.set(-6,0,1);Te.add(ot);const Qc=new Ot(new Xc(.38,.46,32),new ni({color:16773043,side:sn}));Qc.rotation.x=-Math.PI/2;Qc.position.y=.04;ot.add(Qc);let Lt,Ce=4.2,gi=5,He=!1,Qe=!1,Ft=null,Qt=!1,Re=0,Ps=0,El=100,mr=1,Er=1,Sc=0,ha=0,ve=null;const re=[],Ji=[],yn=new Set,cr=new ue;cr.name="crosswise-padded-cargo-bars";let Be=null,Hn=[];const yc=new Map,Yn=new Ot(new ii(1,1),new ni({color:16763725,transparent:!0,opacity:.82,side:sn,depthWrite:!1}));Yn.rotation.x=-Math.PI/2;Yn.position.y=.095;Yn.visible=!1;Yn.renderOrder=4;Te.add(Yn);const Li=new Ot(new ii(1,1),new ni({color:13974845,transparent:!0,opacity:.72,side:sn,depthWrite:!1}));Li.rotation.x=-Math.PI/2;Li.position.y=.105;Li.visible=!1;Li.renderOrder=5;Te.add(Li);let hs=0,Xn=0,gr="",Mn=0,Ht=Number(jt?.tutorialStep??0),be=0,wl=0,Tl=0,da=0,pn=0,qo="",Ko="",Zo="",Bh=-1,fa=-10,Kr=!1,Vn=0,qn=!1,Fs=0;const ur=[],bc=[],Ec=[],oM=ot.position.clone(),tf=new A,Pi=new A,Le=new Set,jc=new A(0,1,0),Dn=new Ot(new ji(1,.04,1),new ni({color:2981988,transparent:!0,opacity:.58,depthTest:!0,depthWrite:!1}));Te.add(Dn);Dn.renderOrder=10;const tu=new $p(new qp(Dn.geometry),new Sd({color:1527614,depthTest:!0,depthWrite:!1}));tu.renderOrder=11;Dn.add(tu);Dn.visible=!1;let ci=[],Jo=[],rs=[];const ei=n=>Lt.userData.cargo.localToWorld(n.clone()),bi=n=>Lt.userData.cargo.worldToLocal(n.clone()),Os=n=>Lt.localToWorld(n.clone());let Bs=null,pa=null,ma=null,Qr=null,jr=null,zh=-1,kh=-1,Gh=-1,Hh=-1;function Ts(){localStorage.setItem("movecraft-audio-v1",JSON.stringify({effects:yr,ambient:br,music:cs,vehicle:us,volume:mi}))}function eu(){const n=ca??(ca=new AudioContext);if(n.resume(),Bs)return n;const t=n.createBuffer(1,n.sampleRate*2,n.sampleRate),e=t.getChannelData(0);for(let s=0;s<e.length;s++)e[s]=(Math.random()*2-1)*.24;const i=n.createBufferSource();i.buffer=t,i.loop=!0;const r=n.createBiquadFilter();return r.type="lowpass",r.frequency.value=720,Bs=n.createGain(),i.connect(r).connect(Bs).connect(n.destination),i.start(),jr=n.createOscillator(),jr.type="sine",pa=n.createGain(),jr.connect(pa).connect(n.destination),jr.start(),Qr=n.createOscillator(),Qr.type="sawtooth",ma=n.createGain(),Qr.connect(ma).connect(n.destination),Qr.start(),n}function wr(n){if(!yr)return;const t={coin:[660,880],purchase:[520,780,1040],reward:[620,880,1175],error:[220,165],door:[300,225]}[n],e=eu();t.forEach((i,r)=>{const s=e.createOscillator(),o=e.createGain(),a=e.currentTime+r*.07;s.type=n==="error"||n==="door"?"triangle":"sine",s.frequency.setValueAtTime(i,a),o.gain.setValueAtTime(1e-4,a),o.gain.exponentialRampToValueAtTime(Math.max(.001,mi*.09),a+.012),o.gain.exponentialRampToValueAtTime(1e-4,a+.13),s.connect(o).connect(e.destination),s.start(a),s.stop(a+.14)})}function aM(){if(!ca||!Bs||!pa||!ma||!Qr||!jr)return;const n=ca.currentTime;Bs.gain.setTargetAtTime(br?mi*.065:0,n,.25),pa.gain.setTargetAtTime(cs?mi*.042:0,n,.25),ma.gain.setTargetAtTime(us&&Qt?mi*(.012+Math.min(1,Math.abs(Re)/10)*.055):0,n,.12),Qr.frequency.setTargetAtTime(58+Math.abs(Re)*13,n,.12);const t=Math.floor(be/1.5);t!==zh&&(zh=t,jr.frequency.setTargetAtTime([174.6,220,196,261.6,174.6,233,196,146.8][t%8],n,.16));const e=Math.floor(be/11);br&&e!==kh&&(kh=e,e>0&&ri(1050+e%3*120,.06))}function ri(n=500,t=.1){if(yr)try{const e=eu(),i=e.createOscillator(),r=e.createGain();i.frequency.value=n,r.gain.setValueAtTime(mi*.1,e.currentTime),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+t),i.connect(r).connect(e.destination),i.start(),i.stop(e.currentTime+t)}catch{}}function Gt(n){rt("#notice-text").textContent=n;const t=/^(No |There |Clear |Park |Stand |Move around|Step |Brake |Stop |Finish |Cannot|Can't|The driver door|This furniture|Place .* on)/i.test(n);rt("#notice").classList.toggle("error",t),t&&be-Hh>1.2&&(Hh=be,wr("error")),da=4,rt("#status-bar").classList.add("show-notice")}function tr(n){Le.clear(),rt("#dialog").innerHTML=`<button class="close" aria-label="Close">×</button>${n}`,rt("#dialog").open||rt("#dialog").showModal(),rt("#dialog .close").onclick=()=>rt("#dialog").close()}const Fi=[["Start moving",["W A S D · walk","The top bar shows your next task"],"#status-bar"],["Use an action",["E · interact with nearby things","Walk to the job board"],'[data-action="interact"]'],["Accept your first move",["The job card shows pickup and delivery","Press E at the job board"],"#job-card"]],Qo=[["Check your result",["The score shows cargo care","Damage reduces pay and Jems"],"#job-card"],["Your balances",["Coins buy upgrades","Jems buy skins in the shop"],".wallet"],["Visit the shop",["Daily gifts include coins and Jems","Day 8 gives a worker skin"],"#daily-button"],["Settings and rescue",["⚙ controls sound and display","Got stuck? is always in Settings"],"#settings"],["Grow the company",["Upgrade the truck, then the base","Hire crews after expanding the base"],"#company-toggle"]];function js(){const n=Ht>=13,t=!rt("#tutorial-card").hidden;document.body.classList.toggle("tutorial-active",t),document.body.dataset.tutorialStep=String(Ht),document.body.dataset.tutorialStage=t?Ht<=1?"intro":Ht===2?"job":Ht>=8?"final":"move":"off";const e=new Set(n?["interact","cab","rotate","rear","secure"]:[...Ht>=1?["interact"]:[],...Ht>=5?["rotate"]:[],...Ht>=6?["cab"]:[],...Ht>=7?["rear","secure"]:[]]);document.querySelectorAll("footer [data-action]").forEach(i=>i.classList.toggle("tutorial-hidden",!e.has(i.dataset.action)))}function to(){const n=rt("#tutorial-card"),t=rt("#camera-controls");if(n.hidden){t.style.top="",t.style.transform="",t.style.visibility="";return}const e=n.getBoundingClientRect(),i=t.getBoundingClientRect(),r=rt("footer").getBoundingClientRect().top,s=r-10,o=e.bottom+14;if(o+i.height>s){t.style.visibility="hidden";return}t.style.visibility="",t.style.top=`${o}px`,t.style.transform="none"}new ResizeObserver(to).observe(rt("#tutorial-card"));window.addEventListener("resize",to);function hi(n,t,e="Got it",i=""){document.querySelectorAll(".tutorial-focus").forEach(r=>r.classList.remove("tutorial-focus")),rt("#tutorial-title").textContent=n,rt("#tutorial-points").innerHTML=t.map(r=>`<li>${r}</li>`).join(""),rt("#tutorial-next").textContent=e,rt("#tutorial-card").hidden=!1,rt("#tests").hidden=!0,js(),i&&document.querySelector(i)?.classList.add("tutorial-focus"),to()}function ss(n){W.jobs>0&&Ht<8&&(Ht=8),n==="job"&&Ht<=3?(Ht=4,hi("Follow the route",["Blue arrows show the way"],"Got it","#status-bar")):n==="lift"&&Ht<=4?(Ht=5,hi("Load furniture",["Green = fits · red = blocked","E places · R rotates"],"Got it",'[data-action="interact"]')):n==="loaded"&&Ht<=5?(Ht=6,hi("Get in the truck",["F · enter the cab"],"Got it",'[data-action="cab"]')):n==="cab"&&Ht<=6?(Ht=7,hi("Secure and drive",["Q locks a bar behind up to two rows","Green cells are protected from damage","W/S drives · A/D steers"],"Got it","#status-bar")):n==="delivered"&&Ht<=7?(Ht=7,hi("Finish the move",["Park in the yellow bay","Then choose your reward"],"Got it","#job-card")):n==="paid"&&Ht<=8&&(Ht=8,hi(Qo[0][0],Qo[0][1],"Next",Qo[0][2])),js(),Pe()}rt("#tutorial-next").onclick=()=>{if(Ht<2)Ht++,hi(Fi[Ht][0],Fi[Ht][1],"Got it",Fi[Ht][2]);else if(Ht>=8&&Ht<12){Ht++;const n=Qo[Ht-8];hi(n[0],n[1],Ht===12?"Finish tutorial":"Next",n[2])}else Ht===2?Ht=3:Ht===12&&(Ht=13),rt("#tutorial-card").hidden=!0,to(),document.querySelectorAll(".tutorial-focus").forEach(n=>n.classList.remove("tutorial-focus"));js(),Pe()};rt("#tutorial-skip").onclick=()=>{Ht=13,rt("#tutorial-card").hidden=!0,to(),document.querySelectorAll(".tutorial-focus").forEach(n=>n.classList.remove("tutorial-focus")),js(),Pe()};function Ys(){const n=Lt,t=n?.position.clone()??new A,e=n?.rotation.clone()??new Mi;for(const s of re)s.mode==="truck"&&Te.attach(s.mesh);n&&Un(n),gi=7+W.levels.truck,Ce=.2+gi*.8,Lt=Bx(gi,W.levels.truck,W.levels.truck,W.selectedSkins.truck),Lt.position.copy(t),Lt.rotation.copy(e),Te.add(Lt);for(const s of re)s.mode==="truck"&&(Lt.userData.cargo.add(s.mesh),s.mesh.position.copy(s.position),s.rails=void 0,nu(s));no();const i=new ue;i.position.set(4.69,.35,-1.95),P(i,0,.55,.65,.06,1.1,1.28,Lt.userData.bodyColor,!0),P(i,0,1.4,.65,.06,.62,1.28,3495010,!0);const r=P(i,.035,1.4,.65,.025,.48,1.02,9091781);r.material=new Ki({color:8895944,transparent:!0,opacity:.38,roughness:.12}),P(i,-.035,.68,.65,.035,.34,.95,7692094,!0);for(const s of[.04,1.26])P(i,.055,.85,s,.08,1.7,.06,3230808,!0);P(i,.075,.78,1.02,.035,.08,.24,2506569,!0),Lt.add(i),Lt.userData.cabDoor=i,ef(),n&&Na()}function lM(){Un(fr.root),fr=qd(W),Te.add(fr.root),lu(),Fn(),Na()}function ef(){const n=e=>e*e*(3-2*e),t=n(he.clamp(mr*2,0,1));Lt.userData.rampPivot.rotation.x=he.lerp(-Math.PI/2,Math.atan(.78/2.2),t),Lt.userData.cabDoor&&(Lt.userData.cabDoor.rotation.y=n(Sc)*1.42)}function eo(n){n.mode==="truck"?(Lt.userData.cargo.add(n.mesh),n.mesh.position.copy(n.position)):n.mode==="hand"?(ot.add(n.mesh),n.mesh.position.set(0,.95,Zs(n))):(Te.add(n.mesh),n.mesh.position.copy(n.position)),n.mesh.rotation.set(0,n.item.rotated?Math.PI/2:0,0),nu(n)}function nu(n){n.rails?.removeFromParent(),n.rails=void 0}function no(){for(const n of[...cr.children])Un(n);Lt.userData.cargo.add(cr);for(const n of yn){const t=new Ot(new wn(.095,.095,4*Ut,12),new Ki({color:4096379,roughness:.9}));t.rotation.z=Math.PI/2,t.userData.owned=!0,t.position.set(3,1.3,.2+(n===gi?n:n+.5)*Ut),cr.add(t);for(const e of[1.4,4.6]){const i=new Ot(new Ea(.13,10,8),new Ki({color:9095348,roughness:.8}));i.position.set(e,1.3,t.position.z),i.userData.owned=!0,cr.add(i)}}for(const n of re){if(n.mode!=="truck"||n.shelf)continue;const t=Math.round((n.position.z-.2)/Ut-Je(n.item)[1]/2),e=Je(n.item)[1];if(n.secured=[...yn].some(i=>t>=i-2&&t+e<=i),n.secured){const[i,r]=Je(n.item),s=new Ot(new ii(i*Ut-.06,r*Ut-.06),new ni({color:5548651,transparent:!0,opacity:.3,depthWrite:!1,side:sn}));s.rotation.x=-Math.PI/2,s.userData.owned=!0,s.position.set(n.position.x,.805,n.position.z),cr.add(s)}}}function cM(){if(Qt||Ft||Be||!_r())return Gt("Stand on the loading deck to lock a crossbar.");const n=su();if(!n||n.mode!=="truck")return Gt("Stand close to an item on the deck.");const t=Je(n.item)[1],e=Math.round((n.position.z-.2)/Ut-t/2),i=Math.min(gi,Math.floor((e+t-1)/3)*3+2);if(!yn.has(i)&&re.some(r=>r.mode==="truck"&&!r.shelf&&(()=>{const s=Je(r.item)[1],o=Math.round((r.position.z-.2)/Ut-s/2);return o<=i&&o+s>i})()))return Gt("Clear the full-width bar row before securing this section.");yn.has(i)?yn.delete(i):yn.add(i),no(),Gt(yn.has(i)?"Crossbar locked: the two rows toward the cab are protected.":"Crossbar removed: this section is unsecured."),ri(yn.has(i)?600:350),Pe()}function qs(n=!1){if(He&&!Qe&&!n)return Gt("Finish this move and collect payment first.");const t=`${Yt.fromSite?.id??""}->${Yt.toSite?.id??""}`;for(const s of re)Un(s.mesh);re.length=0,Ji.length=0,yn.clear(),cr.clear(),Ft=null,Be=null,hs=W.jobs;const e=Xn;do Xn=Math.floor(Math.random()*7);while(Xn===e);gr="",Mn=0;const i=Math.max(W.jobs,Math.floor((W.levels.truck+W.levels.worker)*.45));let r=0;do Yt=Jc(i,W.levels.truck,W.jobs*11+Xn+r++);while(`${Yt.fromSite.id}->${Yt.toSite.id}`===t&&r<10);He=!0,Qe=!1,Qn=Yt.fromSite.x,jn=Yt.fromSite.z??0,Tn=Yt.toSite.x,An=Yt.toSite.z??0,Un(Nn.root),Un(ti.root),Nn=ls(Qn,Yt.fromSite.variant+Xn,!1,jn),ti=ls(Tn,Yt.toSite.variant+Xn,!0,An),Te.add(Nn.root,ti.root),nf(),wc();for(const s of Yt.items){const o={item:s,mesh:Zc(s.model),mode:"ground",position:new A(Qn+s.pickupX,.12,jn+s.pickupZ),velocity:new A,angular:new A,hitAt:-10,settled:!0,secured:!1,damage:0};re.push(o),eo(o)}Fn(),Gt(`New move: ${Yt.from} → ${Yt.to}. Follow the ground arrows.`),ss("job"),Pe()}function er(){return He&&re.length>0&&re.every(n=>n.mode==="delivered")}function nf(){const n=[],t=[...Yt.items].sort((e,i)=>i.w*i.d-e.w*e.d||e.id-i.id);for(const e of t){const i=e.w*Ut+.32,r=e.d*Ut+.32,s=[];for(let a=jn-4.5+r/2;a<=jn+4.45-r/2;a+=.48)for(let c=Qn-10.25+i/2;c<=Qn-.95-i/2;c+=.48)s.push({x:c,z:a,rank:Math.sin(e.id*17.37+c*8.1+a*3.7)});s.sort((a,c)=>a.rank-c.rank);const o=s.find(({x:a,z:c})=>!Nn.barriers.some(l=>Math.abs(a-l.x)<(i+l.w)/2+.18&&Math.abs(c-l.z)<(r+l.d)/2+.18)&&!n.some(l=>Math.abs(a-l.x)<(i+l.w)/2+.25&&Math.abs(c-l.z)<(r+l.d)/2+.25));o&&(e.pickupX=o.x-Qn,e.pickupZ=o.z-jn,n.push({x:o.x,z:o.z,w:i,d:r}))}}function wc(){yc.clear();const n=re.filter(r=>r.mode==="delivered").map(r=>({x:r.position.x,z:r.position.z,w:r.item.w*Ut,d:r.item.d*Ut})),t=Tn-10.1,e=An-4.9,i=(hs*7+Xn*3)%11;for(const r of[...Yt.items].sort((s,o)=>o.w*o.d-s.w*s.d||s.id-o.id)){if(re.some(o=>o.item.id===r.id&&o.mode==="delivered"))continue;let s;for(let o=0;o<121&&!s;o++){const a=(Math.floor(o/11)*3+i)%11,c=(o*7+i*2)%11;if(a>11-r.d||c>11-r.w)continue;const l=t+(c+r.w/2)*Ut,u=e+(a+r.d/2)*Ut,f=r.w*Ut/2,h=r.d*Ut/2,d=ti.barriers.some(y=>Math.abs(l-y.x)<f+y.w/2+.18&&Math.abs(u-y.z)<h+y.d/2+.18),g=n.some(y=>Math.abs(l-y.x)<f+y.w/2+.18&&Math.abs(u-y.z)<h+y.d/2+.18);!d&&!g&&(s=new A(l,.12,u),n.push({x:l,z:u,w:f*2,d:h*2}))}s&&yc.set(r.id,s)}}function rf(n){const t=yc.get(n.item.id);if(!t)return null;const e=ot.position.clone().add(new A(0,0,1.1).applyQuaternion(ot.quaternion));return{target:t,close:Math.hypot(e.x-t.x,e.z-t.z)<.9}}function sf(n){return n.x>Tn-10.5&&n.x<Tn-.5&&n.z>An-5&&n.z<An+4.9}function iu(){return ei(new A(3,0,(Ce-2.2)/2))}function Da(){const n=re.some(s=>s.mode==="ground"&&!s.fallen),t=!He||Qe?"yard":n?"pickup":"delivery";if(t==="yard")return{leg:t,point:new A(2,0,-13)};const i=(t==="pickup"?Qn:Tn)+4,r=t==="pickup"?jn:An;return{leg:t,point:new A(i,0,r-2.1)}}function ru(n=Da().point){if(Math.abs(Re)>=.35)return!1;const t=Jd/2,e=Qd()/2;for(const i of[.8,5.2])for(const r of[-2.35,Ce+.25]){const s=ei(new A(i,0,r));if(Math.abs(s.x-n.x)>t||Math.abs(s.z-n.z)>e)return!1}return!0}function ga(){return Math.round(Yt.reward*Math.max(.5,Ks()/100))}function Ks(){return Math.max(0,100-re.reduce((n,t)=>n+(t.damage??0),0))}function of(){const n=new Map;for(const t of Ji){const e=`${t.item} · ${t.reason}`;n.set(e,(n.get(e)??0)+t.points)}return[...n].map(([t,e])=>`<li><span>${t}</span><b>−${e}</b></li>`).join("")}function Tc(n=1){if(!er()||Qe)return;const t=ga()*n;Ra(W,t);const e=iM(Ks());W.jems+=e,W.jobs++,Qe=!0,Fn(),ri(880,.3),wr("reward"),Gt(`+$${t} · +${e} ${Xe.name} · Move completed!`),ss("paid"),Pe()}function _a(){!er()||Qe||rt("#dialog").open||!rt("#tutorial-card").hidden||(tr(`<div class="reward-modal"><small>MOVE COMPLETE</small><h2>$${ga().toLocaleString("en-US")}</h2><p>${Yt.from} → ${Yt.to}</p><p>Care score: ${Ks()}/100 · −${100-Ks()} points</p>${Ji.length?`<ul class="damage-list">${of()}</ul>`:"<p>No cargo damage.</p>"}<button id="claim-normal">Collect money</button><button id="claim-double">▶ Watch video · collect $${(ga()*2).toLocaleString("en-US")}</button><p class="fine">The reward video is a short in-game preview.</p></div>`),rt("#claim-normal").onclick=()=>{rt("#dialog").close(),Tc(1)},rt("#claim-double").onclick=()=>{const n=rt("#dialog");n.innerHTML='<div class="reward-video"><b>MOVECRAFT</b><p>Your crew makes every move count.</p><div class="progress"><i></i></div></div>',window.setTimeout(()=>{n.close(),Tc(2)},3e3)})}function uM(){if(W.levels.truck<gn.truck)return"truck"}function hM(){if(!(W.levels.truck<gn.truck)){if(W.levels.yard<gn.yard&&W.fleet.length>=W.levels.yard)return"yard";if(W.levels.hire<gn.hire&&W.fleet.length<W.levels.yard)return"hire";if(Xd(W)&&!W.finished)return"factory"}}function dM(n){if(W.test)return 0;if(n.income!==void 0)return Math.min(1,pn/.8);if(n.upgrade)return Math.min(1,(W.contributions[n.upgrade]??0)/Xs(W,n.upgrade));if(n.fleet!==void 0){const t=W.fleet[n.fleet];return t?Math.min(1,(t.contribution??0)/(1e3*(t.level+1))):0}return Math.min(1,pn/1.8)}function Fn(){for(const i of ci)Un(i.root);ci=[];const n=(i,r,s,o,a,c,l=0)=>{const u=Oh(r,s,0,0,7589002,l);u.position.copy(o),Te.add(u),ci.push({key:i,root:u,position:o,upgrade:a,fleet:c})};n("job","NEXT MOVE",He&&!Qe?"ACTIVE":"ACCEPT",new A(-10,.06,1)),ci[ci.length-1].root.visible=!He||Qe,W.finished&&(ci[ci.length-1].root.visible=!1);const t={truck:new A(-.45,.06,-1.25),worker:new A(-20,.06,-4.8),yard:new A(-8,.06,-20.7),hire:new A(-8,.06,-20.7),factory:new A(15,.06,-15)},e=[uM(),W.levels.worker<gn.worker?"worker":void 0,hM()].filter((i,r,s)=>!!i&&s.indexOf(i)===r);for(const i of e){const r=Xs(W,i),s=(W.contributions[i]??0)/r;n(i,Sr[i],W.test?"FREE":`$${r.toLocaleString("en-US")}`,t[i],i,void 0,s)}W.fleet.forEach((i,r)=>{if((i.pending??0)>0){const s=Oh("COLLECT CREW",`$${i.pending}`,0,0,7589002,0),o=new A(8+r*4.8,.05,-16.5);s.position.copy(o),Te.add(s),ci.push({key:`income-${r}`,root:s,position:o,income:r});return}if(i.level<4){const s=(i.level+1)*1e3;n(`fleet-${r}`,`TRUCK ${r+2} · LV ${i.level}`,W.test?"FREE":`$${s.toLocaleString("en-US")}`,new A(8+r*4.8,.05,-16.5),void 0,r,(i.contribution??0)/s)}})}function af(n){const t=W.levels[n],e=Wx(W,n);if(e)return Gt(e);wr("purchase"),n==="truck"&&Ys(),n==="worker"&&ua(),["yard","hire"].includes(n)?lM():Fn(),ri(700,.2);const i={truck:[`Loading deck: ${7+t} → ${7+W.levels.truck} rows`,`Top speed: ${Math.round((8.5+t*1.3)*3.6)} → ${Math.round((8.5+W.levels.truck*1.3)*3.6)} km/h`,W.levels.truck===1?"Cab, roof and first small-item shelf added":W.levels.truck===2?"More enclosed body panels and shelf space":W.levels.truck===3?"Small-item shelves expanded":W.levels.truck===4?"Full-height enclosed body completed":"Trailer length and load capacity increased",...W.levels.truck>=gn.truck?["Company-base upgrade unlocked"]:[]],worker:[`Worker level: ${t} → ${W.levels.worker}`,"More stamina before resting","Furniture carrying speed increased"],yard:[`Base level ${W.levels.yard}`,"One new employee parking bay",`${W.levels.yard} bays available`],hire:[`${W.fleet.length} crews employed`,"New employee added","New employee truck included"],factory:["MOVECRAFT completed","Furniture company purchased","Coming soon!"],cargo:["Included in the central truck upgrade"],gear:["Included in the central truck upgrade"],fleet:["Employee truck upgraded"]};W.levels[n]>t&&tr(`<div class="upgrade-modal"><small>UPGRADE COMPLETE</small><div class="upgrade-badge">✓</div><h2>${Sr[n]}</h2><ul>${i[n].map(r=>`<li>${r}</li>`).join("")}</ul><button class="modal-ok">Continue</button></div>`),document.querySelector(".modal-ok")?.addEventListener("click",()=>rt("#dialog").close()),Gt(`${Sr[n]} · Level ${W.levels[n]}`),Pe()}function va(){if(!(Qt||Be||Ft))return ci.find(n=>{const t=Number(n.root.userData.padHalfWidth??1.3),e=Number(n.root.userData.padHalfDepth??.85);return n.root.visible&&Math.abs(ot.position.x-n.position.x)<t*1.16&&Math.abs(ot.position.z-n.position.z)<e*1.2&&Math.abs(ot.position.y-n.position.y)<1.15})}function Vh(n,t=!1){if(!t&&be-Bh<.14)return;Bh=be,be-Gh>.32&&(Gh=be,wr("coin"));const e=document.querySelector(".wallet").getBoundingClientRect(),i=n.position.clone().project(Ne),r=(i.x+1)/2*innerWidth,s=(1-i.y)/2*innerHeight,o=e.left+e.width/2,a=e.top+e.height/2,c=t?r:o,l=t?s:a,u=t?o:r,f=t?a:s,h=document.createElement("i");h.textContent="$",h.style.left=`${c}px`,h.style.top=`${l}px`,h.style.setProperty("--money-x",`${u-c}px`),h.style.setProperty("--money-y",`${f-l}px`),h.classList.toggle("payout",t),rt("#money-stream").appendChild(h),h.addEventListener("animationend",()=>h.remove(),{once:!0}),window.setTimeout(()=>h.remove(),1200)}function fM(n){const t=va();if(!t||Pi.length()>.2){pn=0,qo="",rt("#purchase").hidden=!0,t||(Ko="",Zo="");return}if(Ko===t.key||(t.key!==qo&&(pn=0,qo=t.key),t.upgrade&&Vd(W,t.upgrade)))return;if((t.upgrade||t.fleet!==void 0)&&Zo!==t.key){rt("#purchase").hidden=!0;return}if(pn+=n,t.upgrade&&!W.test){W.contributions??={};const s=Xs(W,t.upgrade),o=W.contributions[t.upgrade]??0,a=Math.min(W.cash,s-o,s*n/1.8);W.cash-=a,W.contributions[t.upgrade]=o+a,pn=Math.min(pn,(o+a)/s*1.8),a>0&&Vh(t)}if(t.fleet!==void 0&&!W.test){const s=W.fleet[t.fleet],o=1e3*(s.level+1),a=s.contribution??0,c=Math.min(W.cash,o-a,o*n/1.8);W.cash-=c,s.contribution=a+c,pn=Math.min(pn,(a+c)/o*1.8),c>0&&Vh(t)}const e=W.test?Math.min(1,pn/1.8):dM(t);t.root.userData.setProgress?.(e),rt("#purchase").hidden=!1,rt("#purchase-name").textContent=t.key==="job"?"Accept the next move":t.income!==void 0?`Collect $${W.fleet[t.income]?.pending??0}`:t.upgrade?Sr[t.upgrade]:"Upgrade fleet truck",rt("#purchase-progress").style.width=`${Math.min(100,e*100)}%`;const i=t.upgrade?Xs(W,t.upgrade):t.fleet!==void 0?1e3*(W.fleet[t.fleet].level+1):0,r=Math.min(i,Math.round(i*e));if(rt("#purchase-detail").textContent=i?W.test?"DEVELOPMENT MODE · FREE":`${Math.round(e*100)}% · $${r.toLocaleString("en-US")} OF $${i.toLocaleString("en-US")} INVESTED`:"STAND STILL TO ACTIVATE",pn>=1.8)if(Ko=t.key,pn=0,Zo="",rt("#purchase").hidden=!0,t.key==="job")qs();else if(t.income!==void 0){const s=Yx(W,t.income);Gt(`+$${s} · Employee route complete`),Fn(),Pe()}else t.upgrade?af(t.upgrade):t.fleet!==void 0&&Xx(W,t.fleet)&&(lu(),Fn(),tr(`<div class="upgrade-modal"><small>VEHICLE UPGRADED</small><div class="upgrade-badge">✓</div><h2>Employee truck ${t.fleet+2}</h2><ul><li>Faster route</li><li>$125 more income per trip</li><li>Vehicle level ${W.fleet[t.fleet].level}</li></ul><button class="modal-ok">Continue</button></div>`),rt(".modal-ok").onclick=()=>rt("#dialog").close(),Pe())}function pM(){const n=bi(ot.position);return n.x>1.15&&n.x<4.85&&n.z>=.2&&n.z<=Ce&&ot.position.y>.6}function io(n){const t=bi(n);if(t.x>1.4&&t.x<4.6){if(t.z>=.2&&t.z<=Ce)return .78;if(mr>.94&&t.z>Ce&&t.z<Ce+2.2)return .78*(Ce+2.2-t.z)/2.2}return 0}function mM(n,t=1/0){let e=-1/0;for(const i of re){if(i.mode!=="truck"&&i.mode!=="ground")continue;const[r,s]=Je(i.item),o=i.mode==="truck"?bi(n):n,a=i.position,c=a.y+Kd(i.item.model);c<=t+.14&&Math.abs(o.x-a.x)<r*Ut/2-.08&&Math.abs(o.z-a.z)<s*Ut/2-.08&&(e=Math.max(e,c))}return e}function xa(n,t=1/0){return Math.max(io(n),mM(n,t))}function _r(){if(pM())return!0;const n=bi(ot.position);return mr>.94&&n.x>1.4&&n.x<4.6&&n.z>Ce&&n.z<=Ce+2.25}function su(){let n,t=2.75;for(const e of re){if(["hand","air","delivered"].includes(e.mode)||e.mode==="truck"&&!_r())continue;const i=e.mesh.getWorldPosition(new A),r=Math.hypot(i.x-ot.position.x,i.z-ot.position.z);r<t&&Math.abs(i.y-ot.position.y)<1.5&&(n=e,t=r)}return n}function Wh(n,t){return re.every(e=>{if(e===t||["hand","air","delivered"].includes(e.mode))return!0;const i=e.mesh.getWorldPosition(new A),[r,s]=Je(e.item);return Math.abs(n.x-i.x)>r*Ut/2+.38||Math.abs(n.z-i.z)>s*Ut/2+.38})}function gM(n){const t=n.mesh.getWorldPosition(new A),[e,i]=Je(n.item),r=n.mode==="truck",s=r?n.position:t,a=[new A(s.x-e*Ut/2-.62,0,s.z),new A(s.x+e*Ut/2+.62,0,s.z),new A(s.x,0,s.z-i*Ut/2-.62),new A(s.x,0,s.z+i*Ut/2+.62)].map(u=>r?ei(u.setY(.78)):u.setY(0)).filter(u=>{if(ds(u,.3)||!Wh(u,n)||r&&!La(u))return!1;for(let f=1;f<=6;f++){const h=ot.position.clone().lerp(u,f/6);if(!Wh(h,n)||ds(h,.24))return!1}return!0});if(!a.length)return null;const c=a.sort((u,f)=>u.distanceToSquared(ot.position)-f.distanceToSquared(ot.position))[0];c.y=io(c);const l=Math.atan2(t.x-c.x,t.z-c.z);return{to:c,yaw:l,item:t}}function ou(){if(!Ft)return null;const[n,t]=Je(Ft.item),e=new A(0,0,.65+Math.max(n,t)*Ut/2).applyQuaternion(ot.quaternion).add(ot.position),i=bi(e),r=re.filter(a=>!a.shelf).map(a=>({...a.item,x:a.mode==="truck"?(a.position.x-1.4)/Ut-Je(a.item)[0]/2:a.item.x,z:a.mode==="truck"?(a.position.z-.2)/Ut-Je(a.item)[1]/2:a.item.z,location:a.mode==="truck"?"truck":"pickup"})),s=he.clamp(Math.round((i.x-1.4)/Ut-n/2),0,4-n),o=he.clamp(Math.round((i.z-.2)/Ut-t/2),0,gi-t);return{x:s,z:o,w:n,d:t,valid:Gd(r,Ft.item,s,o,4,gi)&&!(W.levels.truck===0&&[2,5].some(a=>o<=a&&o+t>a))&&![...yn].some(a=>o<=a&&o+t>a)}}function Zs(n){const[,t]=Je(n.item);return .62+t*Ut/2}function au(n){if(W.levels.truck<3)return null;const[t,e]=Je(n.item),i=bi(ot.position);if(t>1||e>1||i.z<.15||i.z>2.85)return null;const r=i.x<3?1.72:4.28;if(Math.abs(i.x-r)>.72)return null;const s=re.filter(a=>a.shelf&&a!==n),o=[.72,1.45,2.18].find(a=>!s.some(c=>Math.abs(c.position.x-r)<.3&&Math.abs(c.position.z-a)<.35));return o===void 0?null:new A(r,1.4,o)}function _M(){if(Be||Qt)return;if(er()&&!Qe)return _a();const n=va();if(n){n.key==="job"?qs():n.key==="collect"?Tc():n.upgrade||n.fleet!==void 0?(Zo=n.key,pn=0,Gt("Investment started. Stay on this field to complete it.")):Gt("Stand inside the markers to build.");return}if(Ft){const o=Ft,a=o.mesh.getWorldPosition(new A);let c,l;if(_r()){const d=au(o),g=ou();if(!d&&!g.valid)return Gt("No clear space nearby. Press R to rotate or move along the truck.");d?(c=d,o.shelf=!0,o.secured=!0,o.item.x=0,o.item.z=Math.round((d.z-.2)/Ut)):(o.item.x=g.x,o.item.z=g.z,c=new A(1.4+(g.x+g.w/2)*Ut,.78,.2+(g.z+g.d/2)*Ut),o.shelf=!1),l="truck"}else{const d=sf(ot.position),g=rf(o);if(d&&!g)return Gt("This furniture has no clear delivery spot. Move away from the doorway and try again.");if(d&&g&&!g.close)return Gt(`Place ${o.item.name} on its highlighted spot.`);if(c=d&&g?g.target.clone():ot.position.clone().add(new A(0,0,1.1).applyQuaternion(ot.quaternion)),c.y=.12,l=d&&g?"delivered":"ground",ds(c,.3))return Gt("There is a wall here. Step into the room.")}Te.attach(o.mesh);const u=o.mesh.getWorldQuaternion(new xi),f=l==="delivered"?0:(l==="truck"?Lt.rotation.y:0)+(o.item.rotated?Math.PI/2:0),h=new xi().setFromEuler(new Mi(0,f,0));Be={kind:"drop",load:o,time:0,duration:.5,from:a,to:l==="truck"?ei(c):c,mode:l,fromQuaternion:u,toQuaternion:h},o.position.copy(c),Ft=null;return}const t=su();if(!t)return Gt("Stand close to furniture.");if(He&&!Qe){const{leg:o,point:a}=Da(),c=t.mode==="ground"&&o==="pickup",l=t.mode==="truck"&&o==="delivery";if((c||l)&&!ru(a))return Gt(`Park the complete truck inside the yellow ${o} bay first.`)}const e=t.mesh.getWorldPosition(new A),i=gM(t);if(!i)return Gt("Move around the furniture so there is room to lift it safely.");const r=ot.position.clone(),s=he.clamp(r.distanceTo(i.to)/3.8,.18,.55);Te.attach(t.mesh),Be={kind:"lift",load:t,time:0,duration:s+(.62+t.item.weight*.34)/(1+W.levels.worker*.23),from:e,to:new A,mode:"hand",approachFrom:r,approachTo:i.to,approachYaw:i.yaw,approachDuration:s},t.mode="hand",t.secured=!1,nu(t),no(),t.velocity.set(0,0,0),t.angular.set(0,0,0),t.shelf=!1,ri(260)}function vM(n){if(!Be)return;Be.time+=n;const t=Be,e=t.approachDuration??0,i=t.time<e,r=Math.min(1,Math.max(0,(t.time-e)/(t.duration-e))),s=r*r*(3-2*r),o=ot.userData.rig;if(i&&t.approachFrom&&t.approachTo){const c=Math.min(1,t.time/e),l=c*c*(3-2*c);if(ot.position.lerpVectors(t.approachFrom,t.approachTo,l),pr.animate(be,!0,!1,!1),t.approachYaw!==void 0){const u=Math.atan2(Math.sin(t.approachYaw-ot.rotation.y),Math.cos(t.approachYaw-ot.rotation.y));ot.rotation.y+=u*(1-Math.exp(-12*n))}t.load.mesh.position.copy(t.from);return}o.body.rotation.x=.42*Math.sin(r*Math.PI),o.body.position.y=-.19*Math.sin(r*Math.PI),o.arms.forEach(c=>c.rotation.x=-1.35*Math.sin(Math.min(1,r*1.35)*Math.PI/2));const a=t.kind==="lift"?he.smoothstep(r,.08,.94):s;if(t.kind==="lift"&&t.to.copy(ot.position).add(new A(0,.95,Zs(t.load)).applyQuaternion(ot.quaternion)),t.kind==="lift"){const c=t.from.clone();c.y=Math.max(t.to.y,t.from.y+.95),a<.58?t.load.mesh.position.lerpVectors(t.from,c,he.smoothstep(a/.58,0,1)):t.load.mesh.position.lerpVectors(c,t.to,he.smoothstep((a-.58)/.42,0,1))}else t.load.mesh.position.lerpVectors(t.from,t.to,a),t.fromQuaternion&&t.toQuaternion&&t.load.mesh.quaternion.slerpQuaternions(t.fromQuaternion,t.toQuaternion,a);t.load.mesh.rotation.x=he.damp(t.load.mesh.rotation.x,0,8,n),t.load.mesh.rotation.z=he.damp(t.load.mesh.rotation.z,0,8,n),t.time>=t.duration&&(t.load.mode=t.mode,t.mode==="truck"&&(t.load.fallen=!1),t.mode==="delivered"&&(t.load.item.rotated=!1),t.kind==="lift"?(Ft=t.load,ot.add(t.load.mesh),t.load.mesh.position.set(0,.95,Zs(t.load)),t.load.mesh.rotation.set(0,t.load.item.rotated?Math.PI/2:0,0),ss("lift")):(eo(t.load),t.mode==="truck"&&no(),Na(),t.mode==="truck"&&ss("loaded")),t.load.velocity.set(0,0,0),t.load.angular.set(0,0,0),t.load.settled=!0,Be=null,o.body.rotation.x=0,o.body.position.y=0,ri(520),er()&&(Fn(),Gt("Everything delivered. Choose your reward."),ss("delivered"),Fs=1.6),Pe())}function xM(){if(Qt||Be||Ft)return;const n=bi(ot.position);if(Math.hypot(n.x-3,n.z-Ce)>4.8)return Gt("Walk to the rear of your truck.");if(n.x>1.2&&n.x<4.8&&n.z>Ce-.2&&n.z<Ce+2.4)return Gt("Step to the side of the ramp.");Er=Er>.5?0:1,ri(300,.25)}function MM(){if(!(Be||Ft||ve)){if(Qt){if(Math.abs(Re)>.35)return Gt("Brake to a stop first.");if(!ru())return Gt("Park the whole truck inside the yellow bay. Exit when it turns green.");Re=0,ha=1,wr("door"),ve={entering:!1,time:0,swapped:!1},Gt("Opening the driver door…");return}if(ot.position.distanceTo(Os(new A(5.3,0,-1)))>3.8)return Gt("The driver door is at the front right.");ha=1,wr("door"),ve={entering:!0,time:0,swapped:!1,from:ot.position.clone()},Pi.set(0,0,0),Gt("Opening the driver door…")}}function SM(n){if(!ve)return;ve.time+=n;const t=ve.entering?.72:.5;if(ve.entering&&!ve.swapped&&ve.from&&ve.time>=.14){const e=Os(new A(5.15,0,-1.15)),i=he.smoothstep((ve.time-.14)/.55,0,1);e.y=io(e),ot.position.lerpVectors(ve.from,e,i),ot.rotation.y=Lt.rotation.y-Math.PI/2,pr.animate(be,!0,!1,!1)}if(!ve.swapped&&ve.time>=t){if(ve.swapped=!0,ve.entering)Qt=!0,ot.visible=!1,Gt(Er?"Rear lowered. Raise it with G when loading is complete.":"W/S drive and brake. F exits when stopped."),ss("cab");else{Qt=!1,ot.visible=!0;let e=Os(new A(5.5,0,-1));for(const i of[5.5,.5]){const r=Os(new A(i,0,-1));if(!ds(r,.28)){e=r;break}}ot.position.copy(e)}Pe()}ve.time>=(ve.entering?.82:.9)&&(ha=0),ve.time>=(ve.entering?1.18:1.35)&&(ve=null)}function ds(n,t=.25){return[...Ca.barriers,...fr.barriers,...Nn.barriers,...ti.barriers].some(e=>Math.abs(n.x-e.x)<e.w/2+t&&Math.abs(n.z-e.z)<e.d/2+t)}function lf(){for(const n of[1.25,2.15,3,3.85,4.75])for(let t=-2.3;t<=Ce+.3;t+=.72)if(ds(t<0?Os(new A(n,0,t)):ei(new A(n,0,t)),.12))return!0;return!1}function yM(n){if(!Ft)return!1;const[t,e]=Je(Ft.item),i=n.clone().add(new A(0,0,Zs(Ft)).applyAxisAngle(jc,ot.rotation.y)),r=t*Ut/2,s=e*Ut/2,o=Math.abs(Math.cos(ot.rotation.y)),a=Math.abs(Math.sin(ot.rotation.y)),c=r*o+s*a,l=r*a+s*o;return i.x-c<In.minX||i.x+c>In.maxX||i.z-l<In.minZ||i.z+l>In.maxZ?!0:[...Ca.barriers,...fr.barriers,...Nn.barriers,...ti.barriers].some(u=>Math.abs(i.x-u.x)<c+u.w/2+.04&&Math.abs(i.z-u.z)<l+u.d/2+.04)}function La(n,t=qn,e=ot.position.y){if(n.x<In.minX||n.x>In.maxX||n.z<In.minZ||n.z>In.maxZ||ds(n)||yM(n))return!1;const i=bi(n);if(i.x>1.15&&i.x<4.85&&i.z>-2.4&&i.z<.2||!t&&Math.abs(xa(n,e+.2)-e)>.22||i.z>=.2&&i.z<Ce&&(Math.abs(i.x-1.4)<.15||Math.abs(i.x-4.6)<.15)&&e<(W.levels.truck>0?2.75:1.02))return!1;for(const r of re)if(r.mode==="truck"||r.mode==="ground"){const[s,o]=Je(r.item),a=r.mode==="truck"?r.position:r.mesh.getWorldPosition(new A),c=r.mode==="truck"?i:n,l=a.y+Kd(r.item.model);if(e<l-.08&&Math.abs(c.x-a.x)<s*Ut/2+.16&&Math.abs(c.z-a.z)<o*Ut/2+.16)return!1}return!0}function bM(n){if(Qt||ve||Be||rt("#dialog").open)return Pi.set(0,0,0),Kr=!1,!1;const t=Number(Le.has("KeyD")||Le.has("ArrowRight"))-Number(Le.has("KeyA")||Le.has("ArrowLeft")),e=Number(Le.has("KeyW")||Le.has("ArrowUp"))-Number(Le.has("KeyS")||Le.has("ArrowDown")),i=Ne.getWorldDirection(new A);i.y=0,i.normalize();const r=new A(-i.z,0,i.x).multiplyScalar(t).addScaledVector(i,e);Kr=Le.has("ShiftLeft")&&!Ft&&El>(Kr?2:18)&&r.lengthSq()>0,El=he.clamp(El+n*(Kr?-27:16+W.levels.worker*2),0,100);const s=Ft?Math.max(1.35,3.1-Ft.item.weight*.25/(1+W.levels.worker*.3)):Kr?6.7:3.9;r.normalize().multiplyScalar(s*(1+W.levels.worker*.07)),Pi.lerp(r,1-Math.exp(-10*n));const o=ot.position.clone();for(let a=0;a<4;a++)for(const c of["x","z"]){const l=ot.position.clone();if(l[c]+=Pi[c]*n/4,La(l)){if(!qn){const u=xa(l,ot.position.y+.2);ot.position.y-u>.22?(qn=!0,Vn=Math.min(0,Vn),l.y=ot.position.y):l.y=u}ot.position.copy(l)}}if(Pi.length()>.1){const a=Math.atan2(Pi.x,Pi.z),c=Math.atan2(Math.sin(a-ot.rotation.y),Math.cos(a-ot.rotation.y));ot.rotation.y+=c*(1-Math.exp(-14*n))}return o.distanceTo(ot.position)>.003}function EM(){Qt||ve||Be||rt("#dialog").open||qn||(qn=!0,Vn=5.4,ri(390,.08))}function wM(n){if(Qt||ve){qn=!1,Vn=0;return}const t=xa(ot.position,ot.position.y+.16);if(!qn&&ot.position.y>t+.08&&(qn=!0,Vn=Math.min(0,Vn)),!qn){ot.position.y=t;return}const e=ot.position.y;Vn-=12.5*n,ot.position.y+=Vn*n;const i=xa(ot.position,e+.12);Vn<=0&&ot.position.y<=i&&e>=i-.06&&(ot.position.y=i,Vn=0,qn=!1),ot.position.y<-2&&Ia()}function Ia(n=!0){if(Qt)return;const t=ot.position.clone(),e=[];for(const r of[2,3,4.2,5.5])for(let s=0;s<16;s++)e.push(new A(t.x+Math.cos(s*Math.PI*2/16)*r,0,t.z+Math.sin(s*Math.PI*2/16)*r));const i=e.find(r=>(r.y=io(r),La(r,!1,r.y)));ot.position.copy(i??new A(-6,0,1)),Vn=0,qn=!1,Pi.set(0,0,0),Ec.length=0,oM.copy(ot.position),rt("#stuck-button").hidden=!0,n&&Gt("Moved you to the nearest clear space."),Pe()}function cf(){const n=iu(),t=Lt.rotation.y,e=Lt.userData.trailer,i=e.rotation.y,r=new A(3,0,(Ce-2.2)/2),s=[];for(const c of[3.5,5.5,8])for(let l=0;l<12;l++)s.push(n.clone().add(new A(Math.cos(l*Math.PI*2/12)*c,0,Math.sin(l*Math.PI*2/12)*c)));const o=Lt.position.clone();e.rotation.y=0;const a=s.find(c=>(Lt.position.copy(c).sub(r.clone().applyAxisAngle(jc,t)),Lt.updateMatrixWorld(!0),!(lf()||rs.some(u=>u.visible&&c.distanceTo(u.position)<4.2))));a||(Lt.position.copy(o),e.rotation.y=i),Lt.updateMatrixWorld(!0),Re=0,Ps=0,bc.length=0,ur.length=0,tf.copy(Lt.position),rt("#stuck-button").hidden=!0,Gt(a?"Moved the truck to the nearest clear space.":"No clear rescue position found nearby."),Pe()}function Na(){!Qt&&!La(ot.position,!1,ot.position.y)&&Ia(!1)}function TM(n){if(!Qt||ve)return{acceleration:0,yawRate:0};const t=Number(Le.has("KeyW")||Le.has("ArrowUp"))-Number(Le.has("KeyS")||Le.has("ArrowDown")),e=Number(Le.has("KeyA")||Le.has("ArrowLeft"))-Number(Le.has("KeyD")||Le.has("ArrowRight")),i=Re;Re+=t*(t*Re<0?10:4+W.levels.truck*.45)*n,t||(Re*=Math.exp(-1.7*n)),!t&&Math.abs(Re)<.04&&(Re=0),Re=he.clamp(Re,-4,8.5+W.levels.truck*1.3),Ps=he.damp(Ps,e*.52,6,n);const r=Lt.userData.trailer;r.rotation.y=0,Lt.updateMatrixWorld(!0);const s=Re*Math.tan(Ps)/Math.max(3.1,Ce*.65),o=new A(3,0,(Ce-2.2)/2),a=ei(o),c=Lt.position.clone(),l=Lt.rotation.y;Lt.rotation.y+=s*n,a.addScaledVector(new A(-Math.sin(Lt.rotation.y),0,-Math.cos(Lt.rotation.y)),Re*n),Lt.position.copy(a).sub(o.applyAxisAngle(jc,Lt.rotation.y)),Lt.updateMatrixWorld(!0);let u=!1,f=!1;u=lf();const h=2.4;(a.x<In.minX+h||a.x>In.maxX-h||a.z<In.minZ+h||a.z>In.maxZ-h)&&(u=!0);for(const d of rs)d.visible&&a.distanceTo(d.position)<3.55&&(u=!0,f=!0);u&&(Lt.position.copy(c),ur.push(be),Lt.rotation.y=l,Lt.updateMatrixWorld(!0),Re=-i*.12,be-fa>.7&&(fa=be,ri(120,.18),f&&Gt("Both trucks stopped safely. Reverse away to continue.")));for(const d of Lt.userData.wheels??[])d.rotation.x-=Re*n/.46;for(const d of Lt.userData.frontWheels??[])d.rotation.y=he.damp(d.rotation.y,Ps*.72,9,n);return{acceleration:(Re-i)/n,yawRate:s}}function lu(){Jo.forEach(n=>Un(n.root)),Jo=[],rs.forEach(Un),rs=[];for(let n=0;n<W.levels.hire;n++){const t=Kc(n%2?4761009:15117649,n%3),e=Zc(3);e.scale.setScalar(.65),e.position.set(0,.9,.58),t.root.add(e),Te.add(t.root),Jo.push(t)}W.fleet.forEach((n,t)=>{const e=new ue,i=[];e.name=`fleet-${t}`,P(e,0,1.05,0,2.7,1.7,2,15707460,!0),P(e,0,1.9,2.8,2.8,2.8,3.6,n.level>1?16048049:9221554,!0),P(e,0,1.65,-1.04,2.2,.55,.04,8501962),P(e,0,2.03,0,2.85,.18,2.1,16174952,!0),P(e,0,.53,-1.12,2.75,.2,.18,3626603,!0);for(const r of[-1,1])P(e,r*1.36,1.6,0,.04,.6,1.3,8501962),P(e,r*.95,.95,-1.06,.42,.2,.06,16772523,!0),P(e,r*1.43,1.05,2.8,.05,.23,3.3,15381834),P(e,r*1.1,1.35,4.63,.05,1.7,.04,7442072);P(e,0,1.45,4.64,.045,2,.035,7442072);for(const r of[-1.3,1.3])for(const s of[0,3.5]){const o=new ue;o.position.set(r,.4,s);const a=new Ot(new wn(.4,.4,.25,12),new Ki({color:3163992}));a.rotation.z=Math.PI/2;for(const c of[-1,1])P(a,0,c*.13,.16,.07,.02,.25,15779678);a.userData.owned=!0,o.add(a),e.add(o),i.push(o)}e.userData.wheels=i,Te.add(e),rs.push(e)})}function Xh(n,t){const e=8+t*4.8,i=(n.route??t%3)%3,r=new A(e,0,-9),s=i===1?-30:42,o=i===1?-88:100,a=i===2?Sn[2]:Sn[0];return[r,new A(e,0,12),new A(s,0,12),new A(s,0,a),new A(o,0,a),new A(o,0,12),new A(e,0,12),r]}function AM(n,t){if(t<=0)return{position:n[0].clone(),yaw:0};const e=n.slice(1).map((s,o)=>s.distanceTo(n[o])),i=e.reduce((s,o)=>s+o,0);let r=he.clamp(t,0,.9999)*i;for(let s=0;s<e.length;s++){if(r<=e[s]){const o=r/Math.max(.001,e[s]),a=n[s].clone().lerp(n[s+1],o),c=n[s+1].clone().sub(n[s]);return{position:a,yaw:Math.atan2(c.x,c.z)}}r-=e[s]}return{position:n.at(-1).clone(),yaw:0}}function RM(n){const t=W.fleet.map(s=>s.pending??0),e=Jx(W,n);e&&da<=0&&Gt(`+$${e} · Your company is working`),Jo.forEach((s,o)=>{const a=W.fleet[o];s.root.visible=!a||a.phase<.15||a.phase>.85;const c=(Math.sin(be*1.3+o)+1)/2;s.root.position.set(8+o*4.8,0,-3-c*6),s.root.rotation.y=Math.cos(be*1.3+o)>0?Math.PI:0,s.animate(be,!0,!0)});const i=[],r=ei(new A(3,0,(Ce-2.2)/2));W.fleet.forEach((s,o)=>{const a=rs[o];if(!a)return;s.route??=o%3;const c=AM(Xh(s,o),s.phase),l=i.some(h=>h.distanceTo(c.position)<3.3),u=c.position.distanceTo(Xh(s,o)[0])>4,f=u&&r.distanceTo(c.position)<3.5;if((l||f)&&a.userData.safePosition)s.phase-=n/Wd(s),a.position.copy(a.userData.safePosition);else{const h=a.userData.safePosition?c.position.distanceTo(a.userData.safePosition):0;a.position.copy(c.position),a.rotation.y=c.yaw+Math.PI;for(const d of a.userData.wheels??[])d.rotation.x-=h/.4;a.userData.safePosition=c.position.clone()}i.push(a.position.clone())}),W.fleet.some((s,o)=>(s.pending??0)>t[o])&&(Fn(),Gt("An employee truck returned. Collect its income at the parking bay."),Pe())}function CM(n){const t=Qt?ei(new A(3,0,2)):ot.position;for(const s of[...Ca.roofs,...fr.roofs,...Nn.roofs,...ti.roofs]){const o=Math.abs(t.x-s.bounds.x)<s.bounds.w/2+1&&Math.abs(t.z-s.bounds.z)<s.bounds.d/2+1;for(const a of[s.mesh,...s.walls??[]]){const c=a.material;c.opacity=he.damp(c.opacity,o?.035:1,6,n),c.depthWrite=c.opacity>.5,a.castShadow=c.opacity>.5}}const e=bi(ot.position),i=!Qt&&e.x>1&&e.x<5&&e.z>-.1&&e.z<Ce+2.5,r=[Lt.userData.roof,...Lt.userData.cargoWalls??[]];for(const s of r){const o=s.material;o.opacity=he.damp(o.opacity,i||Qt?.025:1,7,n),o.depthWrite=o.opacity>.5,s.castShadow=o.opacity>.5}}function PM(){if(!He||Qe)return{point:new A(-10,0,1),text:"Accept a move at your job board"};if(er())return{point:new A(Tn+2,0,An),text:"Choose your completion reward"};const n=re.find(t=>t.mode==="ground");return n?{point:n.position.clone(),text:n.fallen?"Recover the fallen furniture":"Pick up the furniture"}:{point:new A(Tn-5.6,0,An+1),text:"Unload inside the new home"}}function DM(n){if(!Qt)return n;const t=iu(),{leg:e,point:i}=Da(),r=i.x,s=i.z;if(Math.abs(t.x-r)<10&&Math.abs(t.z-s)<10)return gr=e,Hn=[],Mn=0,{point:new A(r,0,s),text:e==="yard"?"Park fully inside the yellow yard bay":`Park fully inside the yellow ${e} bay`};const o=Hn.length<2?1/0:Math.min(...Hn.slice(1).map((g,y)=>{const m=Hn[y],p=g.x-m.x,b=g.z-m.z,R=p*p+b*b,M=R?he.clamp(((t.x-m.x)*p+(t.z-m.z)*b)/R,0,1):0;return Math.hypot(t.x-m.x-p*M,t.z-m.z-b*M)}));(gr!==e||!Hn.length||Re<.05&&o>7)&&(gr=e,Mn=0,Hn=eM(t,new A(r,0,s)));const a=Hn;let c=0,l=1/0;for(let g=0;g<a.length-1;g++){const y=a[g],m=a[g+1],p=m.x-y.x,b=m.z-y.z,R=p*p+b*b,M=R?he.clamp(((t.x-y.x)*p+(t.z-y.z)*b)/R,0,1):0,x=Math.hypot(t.x-y.x-p*M,t.z-y.z-b*M)+Math.max(0,Mn-g-1)*2;x<l&&(l=x,c=g)}for(Mn=Math.min(a.length-1,Math.max(Mn,c+1));Mn<a.length-1&&t.distanceTo(a[Mn])<4;)Mn++;const u=a[Mn],f=Math.round(t.distanceTo(u)),h=a[Mn+1];let d=e==="yard"?"Return to your company yard":`Continue to the ${e} house`;if(h){const g=u.clone().sub(t),y=h.clone().sub(u),m=Math.atan2(g.x,g.z),p=Math.atan2(y.x,y.z),b=Math.atan2(Math.sin(p-m),Math.cos(p-m));d=Math.abs(b)<.35?`Continue straight for ${f} m`:`In ${f} m turn ${b>0?"right":"left"}`}else f<18&&(d=e==="yard"?"Park in your company yard":`Park at the ${e} house`);return{point:u,text:d}}function $h(){for(;$s.children.length;){const n=$s.children.pop();n instanceof Ot&&(n.geometry.dispose(),n.material.dispose())}}function LM(){const n=Qt&&Hn.length>1,t=Da().point;if(Zi.visible=Qt,Zi.position.set(t.x,0,t.z),Pa.scale.y=Qd(),!n){zo&&$h(),zo="";return}const e=Hn,i=`${gr}:${e.map(a=>`${a.x.toFixed(1)},${a.z.toFixed(1)}`).join(";")}`;if(i===zo)return;zo=i,$h();const r=[];for(let a=0;a<e.length-1;a++){const c=e[a],l=e[a+1],u=l.clone().sub(c),f=u.length();if(f<.5)continue;const h=u.multiplyScalar(1/f),d=new A(-h.z,0,h.x),g=4.2,y=Math.min(2.2,f*.4);for(let m=y;m<f-.45;m+=g){const p=c.clone().addScaledVector(h,m),b=p.clone().addScaledVector(h,.82),R=p.clone().addScaledVector(h,-.58),M=R.clone().addScaledVector(d,.5),_=R.clone().addScaledVector(d,-.5);r.push(b.x,.14,b.z,M.x,.14,M.z,_.x,.14,_.z)}}if(!r.length)return;const s=new Ue;s.setAttribute("position",new se(r,3)),s.computeVertexNormals();const o=new Ot(s,new ni({color:7792592,transparent:!0,opacity:.82,side:sn,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3}));o.name="route-ground-arrows",o.renderOrder=3,$s.add(o)}function cu(){const n=PM(),t=DM(n),e=re.filter(c=>c.mode==="truck").length,i=re.filter(c=>c.mode==="delivered").length;LM(),rt("#jem-count").textContent=W.test?"∞":W.jems.toLocaleString("en-US"),rt("#cash").textContent=W.test?"∞":`$${Math.floor(W.cash).toLocaleString("en-US")}`,rt("#cash-mode").textContent=W.test?"TEST MONEY":`$${Math.floor(W.earned).toLocaleString("en-US")} earned`,rt("#job-title").textContent=Qe?W.finished?"Coming soon":"Move completed!":He?Yt.title:"Small beginnings",rt("#job-label").textContent=He?`MOVE ${hs+1} · LEVEL ${Yt.difficulty}`:"YOUR NEXT MOVE",rt("#job-step").textContent=t.text,rt("#job-progress").style.width=`${He?(e+i*2)/re.length/2*100:0}%`,rt("#job-count").textContent=He?`${e} in truck  ·  ${i}/${re.length} delivered`:"Your first customer is waiting",rt("#job-score").innerHTML=He?`<div class="score-total"><span>CARE SCORE</span><b>${Ks()}/100</b></div>${Ji.length?`<ul class="damage-list">${of()}</ul>`:"<small>No cargo damage</small>"}`:"",rt("#job-value").textContent=He?`${Qe?"COLLECTED":"PAYDAY"}  $${er()?ga():Yt.reward}`:W.finished?"You built the complete company.":"Start with a job. Build an empire.";const r=Qt?ei(new A(3,0,1)):ot.position,s=Math.round(r.distanceTo(t.point));rt("#nav-distance").textContent=Qt&&s>5?`${s} m`:"",rt("#status-kicker").textContent=Qt?`${Math.round(Math.abs(Re)*3.6)} KM/H · NEXT ACTION`:"NEXT ACTION";let o="E",a=t.text;if(Be)a=`${Be.kind==="lift"?"Lifting":"Placing"} ${Be.load.item.name}`,o="···";else if(Qt)o="W/S",a=t.text;else if(Ft)a=_r()?au(Ft)?"Place small item in the rack":ou()?.valid?"Place in highlighted space · R rotate":"No clear space nearby · R rotate or move closer":Yn.visible?`Place ${Ft.item.name} on the marked spot`:"Carry to the truck or into the delivery house";else if(va()){const c=va();a=c.key==="job"?"Accept the next move":c.income!==void 0?`Collect $${W.fleet[c.income]?.pending??0} from this crew`:c.upgrade?`Press E to upgrade ${Sr[c.upgrade]}`:"Press E to upgrade this fleet truck",o="E"}else{const c=su(),l=bi(ot.position);c?(a=`Lift ${c.item.name} · ${c.item.weight>=4?"HEAVY":c.item.fragile?"FRAGILE":"READY"}`,o="E"):Math.hypot(l.x-5.3,l.z+1)<3?(a="Enter your truck",o="F"):Math.hypot(l.x-3,l.z-Ce)<4&&(a=Er?"Raise the rear":"Lower the rear",o="G")}rt("#hint-key").textContent=o,rt("#nav-label").textContent=a,rt("#company-stats").innerHTML=`<div><b>${W.jobs}</b><span>YOUR MOVES</span></div><div><b>${W.levels.hire}</b><span>CREWS</span></div><div><b>${W.fleet.length}</b><span>FLEET TRUCKS</span></div>`,rt("#fleet-list").innerHTML=W.fleet.map((c,l)=>`<div class="fleet-row"><span>Truck ${l+2} · Level ${c.level}<small>${(c.pending??0)>0?`$${c.pending} ready at parking bay`:c.phase<.05?"Loading at the base":c.phase<.82?"Driving through the city tunnel":"Returning to its bay"} · ${c.completed} trips</small></span><div class="progress"><i style="width:${Math.max(0,c.phase)*100}%"></i></div></div>`).join(""),document.querySelectorAll("[data-upgrade]").forEach(c=>{const l=c.dataset.upgrade;c.textContent=`${Sr[l]} · ${W.levels[l]}/${gn[l]}`})}function Pe(){if(!Zd)try{localStorage.setItem("movecraft-rewrite-v1",JSON.stringify({worldVersion:2,navPath:Hn.map(n=>n.toArray()),company:W,contract:Yt,jobActive:He,jobPaid:Qe,jobNumber:hs,routeVariant:Xn,secureRows:[...yn],damageLog:Ji,navLeg:gr,navIndex:Mn,tutorialStep:Ht,truck:{position:Lt.position.toArray(),yaw:Lt.rotation.y,trailerAngle:Lt.userData.trailer.rotation.y,rear:Er},player:ot.position.toArray(),loads:re.map(n=>({item:n.item,mode:n.mode==="hand"?"ground":n.mode,position:n.mode==="hand"?ot.position.toArray():n.position.toArray(),velocity:n.velocity.toArray(),rotation:n.mesh.rotation.toArray(),settled:n.settled,shelf:n.shelf,secured:n.secured,damage:n.damage,fallen:n.fallen}))}))}catch{}}function IM(){if(jt)try{Yt=jt.contract?.fromSite&&jt.contract?.toSite?jt.contract:{...Jc(jt.jobNumber??W.jobs,W.levels.truck,jt.routeVariant??0),...jt.contract??{},fromSite:Yt.fromSite,toSite:Yt.toSite},Qn=Yt.fromSite.x,jn=Yt.fromSite.z??0,Tn=Yt.toSite.x,An=Yt.toSite.z??0,He=!!jt.jobActive,Qe=!!jt.jobPaid,hs=jt.jobNumber??0,Xn=jt.routeVariant??hs%3,Ji.length=0,Ji.push(...jt.damageLog??[]),yn.clear();for(const n of jt.secureRows??[])n>=0&&n<=gi&&yn.add(n);gr="",Mn=0,Hn=[],jt.truck&&(Lt.position.fromArray(jt.truck.position),Lt.rotation.y=jt.truck.yaw,Lt.userData.trailer.rotation.y=0,mr=Er=jt.truck.rear),jt.player&&ot.position.fromArray(jt.player),He&&(Un(Nn.root),Un(ti.root),Nn=ls(Qn,Yt.fromSite.variant+Xn,!1,jn),ti=ls(Tn,Yt.toSite.variant+Xn,!0,An),Te.add(Nn.root,ti.root),nf(),wc());for(const n of jt.loads??[]){const t={item:n.item,mesh:Zc(n.item.model),mode:n.mode,position:new A().fromArray(n.position),velocity:new A().fromArray(n.velocity??[0,0,0]),angular:new A,hitAt:-10,settled:n.settled,shelf:n.shelf,secured:n.secured??!1,damage:n.damage??0,fallen:n.fallen??!1};re.push(t),t.mode==="ground"&&!t.fallen&&Nn.barriers.some(e=>Math.abs(t.position.x-e.x)<(t.item.w*Ut+e.w)/2+.18&&Math.abs(t.position.z-e.z)<(t.item.d*Ut+e.d)/2+.18)&&t.position.set(Qn+t.item.pickupX,.12,jn+t.item.pickupZ),eo(t),n.rotation&&t.mode!=="truck"&&t.mesh.rotation.fromArray(n.rotation)}He&&wc(),no(),Na()}catch{Gt("Saved session could not be fully restored.")}}function NM(){(!He||Qe)&&qs(!0),W.levels.truck<3&&(W.levels.truck=3,W.levels.cargo=W.levels.gear=3,Ys()),Ft=null,Be=null;for(const n of re)n.mode="ground",n.item.rotated=!1;for(const n of re){let t=!1;for(const e of[!1,!0]){if(t)break;n.item.rotated=e;for(let i=0;i<gi&&!t;i++)for(let r=0;r<4&&!t;r++){const s=re.map(o=>({...o.item,location:o.mode==="truck"?"truck":"pickup"}));if(Gd(s,n.item,r,i,4,gi)){n.item.x=r,n.item.z=i;const[o,a]=Je(n.item);n.mode="truck",n.position.set(1.4+(r+o/2)*Ut,.78,.2+(i+a/2)*Ut),n.velocity.set(0,0,0),t=!0}}}eo(n)}Fn(),Gt(`${re.filter(n=>n.mode==="truck").length}/${re.length} packed. Test packing expands the cargo bay.`),Pe()}function UM(n){if(Math.abs(Re)>.35)return Gt("Stop before using test tools.");n==="job"&&qs(!0),n==="pack"&&NM(),n==="deliver"&&(He||qs(),re.forEach((t,e)=>{t.mode="delivered",t.position.set(Tn-8+e%3*2.5,.12,An-3+Math.floor(e/3)*2.5),eo(t)}),Ft=null,Be=null,Fn(),ot.position.set(Tn-6,0,An+6),Qt=!1,ot.visible=!0,Gt("Delivery complete. Choose your reward."),_a()),n==="home"&&(ot.position.set(-6,0,1),Qt=!1,ot.visible=!0,Gt("Test teleport: player returned. Truck and cargo stay where they are.")),n==="restart"&&(tr('<h2>Reset test career?</h2><p>This replaces your saved rewrite career with the shabby starting setup.</p><button id="confirm-reset">Reset career</button>'),rt("#confirm-reset").onclick=()=>{Zd=!0,localStorage.removeItem("movecraft-rewrite-v1"),localStorage.removeItem("movecraft-update-backup"),location.reload()}),Pe()}const uf={interact:_M,cab:MM,rotate:()=>{Ft&&!Be&&(Ft.item.rotated=!Ft.item.rotated,Ft.mesh.rotation.set(0,Ft.item.rotated?Math.PI/2:0,0),Ft.mesh.position.z=Zs(Ft),ri(400))},rear:xM,secure:cM};document.querySelectorAll("[data-action]").forEach(n=>n.onclick=()=>uf[n.dataset.action]());document.querySelectorAll("[data-test]").forEach(n=>n.onclick=()=>UM(n.dataset.test));rt("#upgrade-tests").innerHTML=Object.keys(Sr).filter(n=>["truck","worker","yard","hire","factory"].includes(n)).map(n=>`<button data-upgrade="${n}"></button>`).join("");document.querySelectorAll("[data-upgrade]").forEach(n=>n.onclick=()=>{if(Math.abs(Re)>.35)return Gt("Stop before upgrading.");const t=n.dataset.upgrade;af(t);const e=ci.find(i=>i.key===t);e&&(Qt=!1,ot.visible=!0,ot.position.copy(e.position).add(new A(0,0,2)),ot.position.y=io(ot.position),Ne.zoom=t==="yard"||t==="fleet"?.9:1.6,Ne.updateProjectionMatrix())});rt("#test-toggle").onclick=()=>{rt("#tests").hidden=!rt("#tests").hidden};rt("#company-toggle").onclick=()=>{rt("#company-panel").hidden=!rt("#company-panel").hidden};function FM(){const n=new Date,t=n.toISOString().slice(0,10),e=new Date(n.getTime()-864e5).toISOString().slice(0,10),i=W.daily.lastClaim===t,r=W.daily.lastClaim===e?W.daily.streak>=8?1:W.daily.streak+1:1,s=i?W.daily.streak:r,o=vc(r),a=Array.from({length:8},(c,l)=>{const u=l+1;return`<div class="daily-day ${u===s?"today":u<s?"collected":""}"><span>DAY ${u}</span><strong>$${vc(u)}</strong><b>◆ ${la(u)}</b>${u===8?`<em>${W.ownedSkins.person.includes("build")?"Build skin · owned → +15 Jems":"Build worker skin"}</em>`:""}<small>${u<s||i&&u===s?"✓ Collected":u===s?"Available":"Upcoming"}</small></div>`}).join("");return`<div class="daily-modal"><small>DAILY REWARD</small><h2>${i?"Come back tomorrow":`Claim $${o} + ◆ ${la(r)}${r===8?" + Build skin":""}`}</h2><div class="daily-days">${a}</div><p>Claim on consecutive days. A missed day restarts the series at Day 1.</p>${i?"":'<button id="claim-daily">Claim reward</button>'}</div>`}let hf="daily";function Al(n,t){wr("purchase"),Pe(),tr(`<div class="shop-success"><div class="shop-success-icon">✓</div><small>PURCHASE COMPLETE</small><h2>${n}</h2><p>${t}</p><button id="shop-success-close">Continue shopping</button></div>`),rt("#shop-success-close").onclick=()=>Ma(hf)}function Yh(n){const t=document.querySelector("#shop-error");t&&(t.textContent=n,t.hidden=!1)}function Ma(n="daily"){hf=n;const t=`<div class="shop-tabs"><button data-shop-tab="daily" class="${n==="daily"?"active":""}">Daily gifts</button><button data-shop-tab="currency" class="${n==="currency"?"active":""}">Coins & Jems</button><button data-shop-tab="skins" class="${n==="skins"?"active":""}">Skins</button></div>`;let e="";n==="daily"&&(e=FM()),n==="currency"&&(e=`<div class="shop-section"><h2>Coins & ${Xe.name}</h2><p class="shop-balance">${Xe.icon} ${W.test?"∞":W.jems} ${Xe.name} · $${W.test?"∞":Math.floor(W.cash).toLocaleString("en-US")}</p><div class="shop-card"><span class="shop-art coins">$</span><span><b>2,000 coins</b><small>Exchange 10 ${Xe.name}</small></span><button id="buy-coins">${Xe.icon} 10</button></div><div class="shop-card"><span class="shop-art jems">${Xe.icon}</span><span><b>10 ${Xe.name}</b><small>Watch an ad to receive them</small></span><button disabled title="Ads will be available later">Coming soon</button></div><p class="shop-note">Ads are being prepared. Coins cannot be exchanged for ${Xe.name}.</p></div>`),n==="skins"&&(e=`<div class="shop-section"><h2>Skins</h2><p class="shop-balance">${Xe.icon} ${W.test?"∞":W.jems} ${Xe.name}</p><p class="shop-note">Looks only · levels stay unchanged</p>${["truck","person"].map(r=>`<h3>${r==="truck"?"Truck":"Person"}</h3><div class="skin-grid">${Mc[r].map(s=>{const o=W.ownedSkins[r].includes(s.id),a=W.selectedSkins[r]===s.id;return`<div class="skin-card"><div class="skin-preview ${r}">${nM(r,s.id)}</div><b>${s.name}</b><button data-skin-kind="${r}" data-skin-id="${s.id}" ${a?"disabled":""}>${a?"Equipped":o?"Equip":`${Xe.icon} ${s.price}`}</button></div>`}).join("")}</div>`).join("")}</div>`),tr(`<div class="shop-modal"><div class="shop-heading"><span>🛒 SHOP</span><div class="shop-wealth"><span>$${W.test?"∞":Math.floor(W.cash).toLocaleString("en-US")}</span><span>${Xe.icon} ${W.test?"∞":W.jems}</span></div></div>${t}<p id="shop-error" class="shop-error" hidden></p>${e}</div>`),document.querySelectorAll("[data-shop-tab]").forEach(r=>r.onclick=()=>Ma(r.dataset.shopTab));const i=document.querySelector("#claim-daily");i&&(i.onclick=()=>{const r=W.ownedSkins.person.includes("build"),s=qx(W);Pe(),cu(),Al(`$${s} + ◆ ${la(W.daily.streak)}${W.daily.streak===8?r?" + ◆ 15":" + Build skin":""}`,"Daily reward claimed"),rt("#daily-button").classList.remove("ready")}),document.querySelector("#buy-coins")?.addEventListener("click",()=>{if(!rM(W))return Yh(`You need 10 ${Xe.name}.`);Al("2,000 coins",`Paid 10 ${Xe.name}`)}),document.querySelectorAll("[data-skin-kind]").forEach(r=>r.onclick=()=>{const s=r.dataset.skinKind,o=r.dataset.skinId;if(W.ownedSkins[s].includes(o)){W.selectedSkins[s]=o,s==="truck"?Ys():ua(),Pe(),Ma("skins");return}if(!sM(W,s,o))return Yh(`Not enough ${Xe.name} for this skin.`);s==="truck"?Ys():ua();const a=Mc[s].find(c=>c.id===o);Al(`${a.name} ${s==="truck"?"truck":"person"} skin`,"Purchased and equipped · Upgrade level unchanged")})}rt("#daily-button").onclick=()=>Ma();rt("#job-toggle").onclick=()=>rt("#job-body").classList.toggle("collapsed");function df(){rt("#mode-toggle").textContent=W.test?"DEV":"NORMAL",rt("#mode-toggle").classList.toggle("development",W.test),rt("#test-toggle").hidden=!W.test,W.test||(rt("#tests").hidden=!0)}rt("#mode-toggle").onclick=()=>{W.test=!W.test,pn=0,qo="",Ko="",df(),Fn(),Pe(),Gt(W.test?"Development mode: unlimited money and test tools enabled.":"Normal mode: purchases now use company cash.")};df();rt("#camera-follow").onclick=()=>{Ne.zoom=.78,Ne.updateProjectionMatrix()};for(const[n,t]of[["zoom-in",1.2],["zoom-out",1/1.2]])rt(`#${n}`).onclick=()=>{Ne.zoom=he.clamp(Ne.zoom*t,hn.minZoom,hn.maxZoom),Ne.updateProjectionMatrix()};rt("#settings").onclick=()=>{eu(),tr(`<div class="settings-panel"><h2>Settings</h2><section><h3>Audio</h3><label><span>Sound effects</span><input id="sound" type="checkbox" ${yr?"checked":""}></label><label><span>City & nature</span><input id="ambient" type="checkbox" ${br?"checked":""}></label><label><span>Background music</span><input id="music" type="checkbox" ${cs?"checked":""}></label><label><span>Vehicle sound</span><input id="vehicle-sound" type="checkbox" ${us?"checked":""}></label><label><span>Volume</span><input id="volume" type="range" min="0" max="1" step=".05" value="${mi}"></label></section><section><h3>Game & display</h3><label><span>Soft shadows</span><input id="shadows" type="checkbox" ${bl?"checked":""}></label><button id="rescue-now">Got stuck? Move to a clear spot</button><button id="replay-tutorial">Replay tutorial</button></section><section><h3>Progress</h3><button id="update-game">Update game safely</button><p class="fine">Your save is backed up before reloading.</p></section></div>`),rt("#sound").onchange=n=>{yr=n.target.checked,Ts()},rt("#ambient").onchange=n=>{br=n.target.checked,Ts()},rt("#music").onchange=n=>{cs=n.target.checked,Ts()},rt("#vehicle-sound").onchange=n=>{us=n.target.checked,Ts()},rt("#volume").oninput=n=>{mi=+n.target.value,Ts()},rt("#shadows").onchange=n=>{bl=n.target.checked,yi.shadowMap.enabled=bl},rt("#rescue-now").onclick=()=>{rt("#dialog").close(),Qt?cf():Ia()},rt("#replay-tutorial").onclick=()=>{Ht=0,rt("#dialog").close(),hi(Fi[0][0],Fi[0][1],"Got it",Fi[0][2]),Pe()},rt("#update-game").onclick=()=>{Pe();const n=localStorage.getItem("movecraft-rewrite-v1");n&&localStorage.setItem("movecraft-update-backup",n);const t=new URL(location.href);t.searchParams.set("update",Date.now().toString()),location.replace(t)}};rt("#stuck-button").onclick=()=>Qt?cf():Ia();rt("#help").onclick=()=>tr("<h2>Moving controls</h2><p>WASD / arrows move. Shift sprints. Space jumps. Drag to orbit, scroll or pinch to zoom.</p><p>E lifts and places. R rotates. Q locks a full-width crossbar behind two cargo rows. F enters/exits the cab. W/S drives/brakes; A/D steer. G raises or lowers the rear.</p><p>Unsecured furniture can be damaged or fall through an open rear. Press E on an upgrade field before investing.</p>");document.addEventListener("wheel",n=>{(n.ctrlKey||n.metaKey)&&n.preventDefault()},{passive:!1});for(const n of["gesturestart","gesturechange","gestureend"])document.addEventListener(n,t=>t.preventDefault(),{passive:!1});document.addEventListener("touchmove",n=>{n.touches.length>1&&!(n.target instanceof HTMLCanvasElement)&&n.preventDefault()},{passive:!1});window.addEventListener("keydown",n=>{(n.ctrlKey||n.metaKey)&&["Equal","Minus","Digit0","NumpadAdd","NumpadSubtract","Numpad0"].includes(n.code)&&n.preventDefault()},{capture:!0});window.addEventListener("keydown",n=>{if(rt("#dialog").open||(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","Space"].includes(n.code)&&(Le.add(n.code),n.preventDefault()),n.repeat))return;n.code==="Space"&&EM();const t={KeyE:"interact",KeyF:"cab",KeyR:"rotate",KeyG:"rear",KeyQ:"secure"};t[n.code]&&uf[t[n.code]]()});window.addEventListener("keyup",n=>Le.delete(n.code));window.addEventListener("blur",()=>Le.clear());document.querySelectorAll("[data-key]").forEach(n=>{n.onpointerdown=t=>{n.setPointerCapture(t.pointerId),Le.add(n.dataset.key)},n.onpointerup=n.onpointercancel=()=>Le.delete(n.dataset.key)});function Ua(){const n=Math.max(1,rt("#world").clientWidth),t=Math.max(1,rt("#world").clientHeight);yi.setSize(n,t,!1);const e=n/t;Ne.left=-12*e,Ne.right=12*e,Ne.top=12,Ne.bottom=-12,hn.minZoom=Math.max(.55,e/4),Ne.zoom=Math.max(Ne.zoom,hn.minZoom),Ne.updateProjectionMatrix()}window.addEventListener("resize",Ua);window.visualViewport?.addEventListener("resize",Ua);new ResizeObserver(Ua).observe(rt("#world"));Ys();IM();tf.copy(Lt.position);lu();Fn();Ua();cu();rt("#daily-button").classList.toggle("ready",W.daily.lastClaim!==new Date().toISOString().slice(0,10));Ht===0&&W.jobs===0&&hi(Fi[0][0],Fi[0][1],"Got it",Fi[0][2]);js();er()&&!Qe&&(Fs=.8);hn.target.copy(ot.position);Ne.position.add(ot.position);hn.update();let qh=performance.now(),Rl=0;function ff(n){const t=Math.min((n-qh)/1e3,.1);qh=n,be+=t,Fs>0?(Fs-=t,Fs<=0&&_a()):er()&&!Qe&&rt("#tutorial-card").hidden&&!rt("#dialog").open&&_a(),SM(t),mr=he.damp(mr,Er,3,t),Sc=he.damp(Sc,ha,8,t),ef();const e=bM(t);wM(t);const i=Qt?bc:Ec,r=Qt?iu():ot.position;for((!i.length||be-i[i.length-1].t>=.35)&&i.push({t:be,x:r.x,z:r.z});i.length&&be-i[0].t>10;)i.shift();const s=i.length>1&&be-i[0].t>=9.5&&i.every(u=>Math.hypot(u.x-i[0].x,u.z-i[0].z)<(Qt?4:1.5));for(;ur.length&&be-ur[0]>10;)ur.shift();const o=Qt&&ur.length>=3;for(rt("#stuck-button").hidden=!!ve||rt("#dialog").open||!(s||o),rt("#stuck-button").textContent=Qt?"Truck stuck?":"Got stuck?",Qt?Ec.length=0:(bc.length=0,ur.length=0),ve||pr.animate(be,e,!!Ft||!!Be,Kr),vM(t),Ft&&(Ft.mesh.rotation.y=he.damp(Ft.mesh.rotation.y,Ft.item.rotated?Math.PI/2:0,12,t)),Rl+=t;Rl>=1/60;){const u=TM(.016666666666666666);tM(re,1/60,{truck:Lt,back:Ce,speed:Re,yawRate:u.yawRate,acceleration:u.acceleration,rearOpen:mr>.9,enclosed:!!Lt.userData.enclosed,gear:W.levels.truck,now:be,onDamage:(f,h,d)=>{const g=Math.min(h,100-(f.damage??0));f.damage=(f.damage??0)+g,g>0&&Ji.push({item:f.item.name,reason:d,points:g}),be-fa>.7&&(fa=be,Gt(`−${g} points · ${f.item.name}: ${d}`))},onFall:f=>{Gt(`${f.item.name} fell out. Stop and recover it.`),ri(140,.25)}}),Rl-=1/60}if(RM(t),fM(t),aM(),CM(t),Zi.visible){const u=ru(Zi.position),f=u?6808973:16768099;jd.color.setHex(f)}const a=Qt?ei(new A(3,.6,(Ce-2)/2)):ot.position.clone().add(new A(0,.6,0)),c=a.clone().sub(hn.target);if(hn.target.copy(a),Ne.position.add(c),Bi.position.copy(a).add(new A(-25,45,20)),Bi.target.position.copy(a),hn.update(),Dn.visible=!!Ft&&_r(),Dn.visible){const u=au(Ft),f=ou();Dn.scale.set(u?.48:f.w*Ut,1,u?.55:f.d*Ut),Dn.position.copy(ei(u??new A(1.4+(f.x+f.w/2)*Ut,.82,.2+(f.z+f.d/2)*Ut))),Dn.rotation.y=Lt.rotation.y,Dn.material.color.set(u||f.valid?2386770:13974845),Dn.material.opacity=u||f.valid?.62:.82,tu.material.color.set(u||f.valid?1195825:7282464)}const l=Ft&&!_r()?rf(Ft):null;if(Yn.visible=!!l&&ot.position.distanceTo(l.target)<18,l&&Ft&&(Yn.position.x=l.target.x,Yn.position.z=l.target.z,Yn.scale.set(Ft.item.w*Ut,Ft.item.d*Ut,1),Yn.material.color.setHex(l.close?4828784:15321180)),Li.visible=!!Ft&&!_r()&&sf(ot.position)&&!l?.close,Li.visible&&Ft){const u=ot.position.clone().add(new A(0,0,1.1).applyQuaternion(ot.quaternion));Li.position.set(u.x,.105,u.z),Li.scale.set(Ft.item.w*Ut,Ft.item.d*Ut,1)}da-=t,da<=0&&rt("#status-bar").classList.remove("show-notice"),Tl+=t,wl+=t,Tl>.18&&(cu(),Tl=0),wl>5&&(Pe(),wl=0),yi.render(Te,Ne),requestAnimationFrame(ff)}requestAnimationFrame(ff);window.addEventListener("pagehide",Pe);
