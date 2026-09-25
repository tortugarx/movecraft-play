import{g as Qi,a as Sf,i as bf,s as Ef,c as wf}from"./index-B0sAQrrF.js";const Rc="186",ts={ROTATE:0,DOLLY:1,PAN:2},Jr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tf=0,Mu=1,Af=2,Ho=1,Gh=2,Is=3,xr=0,En=1,gn=2,Li=0,Fs=1,yu=2,Su=3,bu=4,Rf=5,Zr=100,Cf=101,Pf=102,Df=103,Lf=104,If=200,Nf=201,Uf=202,Ff=203,Hh=204,Vh=205,Of=206,Bf=207,zf=208,kf=209,Gf=210,Hf=211,Vf=212,Wf=213,Xf=214,wl=0,Tl=1,Al=2,Ws=3,Rl=4,Cl=5,Pl=6,Dl=7,Wh=0,$f=1,Yf=2,pi=0,Xh=1,$h=2,Yh=3,Cc=4,qh=5,Kh=6,Zh=7,Jh=300,Mr=301,us=302,Da=303,La=304,va=306,Ll=1e3,Pi=1001,Il=1002,en=1003,qf=1004,lo=1005,ln=1006,Ia=1007,dr=1008,Cn=1009,Qh=1010,jh=1011,Xs=1012,Pc=1013,gi=1014,hi=1015,_i=1016,Dc=1017,Lc=1018,$s=1020,td=35902,ed=35899,nd=1021,id=1022,Qn=1023,Fi=1026,fr=1027,rd=1028,Ic=1029,yr=1030,Nc=1031,Uc=1033,Vo=33776,Wo=33777,Xo=33778,$o=33779,Nl=35840,Ul=35841,Fl=35842,Ol=35843,Bl=36196,zl=37492,kl=37496,Gl=37488,Hl=37489,Jo=37490,Vl=37491,Wl=37808,Xl=37809,$l=37810,Yl=37811,ql=37812,Kl=37813,Zl=37814,Jl=37815,Ql=37816,jl=37817,tc=37818,ec=37819,nc=37820,ic=37821,rc=36492,sc=36494,oc=36495,ac=36283,lc=36284,Qo=36285,cc=36286,Kf=3200,uc=0,Zf=1,Ki="",yn="srgb",jo="srgb-linear",ta="linear",de="srgb",Na=7680,Jf=519,Qf=512,jf=513,tp=514,Fc=515,ep=516,np=517,Oc=518,ip=519,sd=35044,Eu="300 es",di=2e3,Ys=2001;function rp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ea(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function sp(){const n=ea("canvas");return n.style.display="block",n}const wu={};function na(...n){const t="THREE."+n.shift();console.log(t,...n)}function od(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Nt(...n){n=od(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ie(...n){n=od(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function es(...n){const t=n.join(" ");t in wu||(wu[t]=!0,Nt(...n))}function op(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const ap={[wl]:Tl,[Al]:Pl,[Rl]:Dl,[Ws]:Cl,[Tl]:wl,[Pl]:Al,[Dl]:Rl,[Cl]:Ws};class tr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tu=1234567;const ns=Math.PI/180,qs=180/Math.PI;function Ii(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function Xt(n,t,e){return Math.max(t,Math.min(e,n))}function Bc(n,t){return(n%t+t)%t}function lp(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function cp(n,t,e){return n!==t?(e-n)/(t-n):0}function Os(n,t,e){return(1-e)*n+e*t}function up(n,t,e,i){return Os(n,t,1-Math.exp(-e*i))}function hp(n,t=1){return t-Math.abs(Bc(n,t*2)-t)}function dp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function fp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function pp(n,t){return n+Math.floor(Math.random()*(t-n+1))}function mp(n,t){return n+Math.random()*(t-n)}function gp(n){return n*(.5-Math.random())}function _p(n){n!==void 0&&(Tu=n);let t=Tu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function vp(n){return n*ns}function xp(n){return n*qs}function Mp(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function yp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Sp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function bp(n,t,e,i,r){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+i)/2),u=o((t+i)/2),d=s((t-i)/2),h=o((t-i)/2),f=s((i-t)/2),g=o((i-t)/2);switch(r){case"XYX":n.set(a*u,c*d,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*u,a*l);break;default:Nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function qn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function fe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ge={DEG2RAD:ns,RAD2DEG:qs,generateUUID:Ii,clamp:Xt,euclideanModulo:Bc,mapLinear:lp,inverseLerp:cp,lerp:Os,damp:up,pingpong:hp,smoothstep:dp,smootherstep:fp,randInt:pp,randFloat:mp,randFloatSpread:gp,seededRandom:_p,degToRad:vp,radToDeg:xp,isPowerOfTwo:Mp,ceilPowerOfTwo:yp,floorPowerOfTwo:Sp,setQuaternionFromProperEuler:bp,normalize:fe,denormalize:qn},su=class su{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Xt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};su.prototype.isVector2=!0;let pt=su;class vi{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],h=s[o+0],f=s[o+1],g=s[o+2],S=s[o+3];if(d!==S||c!==h||l!==f||u!==g){let m=c*h+l*f+u*g+d*S;m<0&&(h=-h,f=-f,g=-g,S=-S,m=-m);let p=1-a;if(m<.9995){const b=Math.acos(m),w=Math.sin(b);p=Math.sin(p*b)/w,a=Math.sin(a*b)/w,c=c*p+h*a,l=l*p+f*a,u=u*p+g*a,d=d*p+S*a}else{c=c*p+h*a,l=l*p+f*a,u=u*p+g*a,d=d*p+S*a;const b=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=b,l*=b,u*=b,d*=b}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],h=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+u*d+c*f-l*h,t[e+1]=c*g+u*h+l*d-a*f,t[e+2]=l*g+u*f+a*h-c*d,t[e+3]=u*g-a*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),h=c(i/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=i+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+i*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ou=class ou{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Au.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Au.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),u=2*(a*e-s*r),d=2*(s*i-o*e);return this.x=e+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ua.copy(this).projectOnVector(t),this.sub(Ua)}reflect(t){return this.sub(Ua.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Xt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ou.prototype.isVector3=!0;let A=ou;const Ua=new A,Au=new vi,au=class au{constructor(t,e,i,r,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l)}set(t,e,i,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],S=r[0],m=r[3],p=r[6],b=r[1],w=r[4],x=r[7],_=r[2],M=r[5],R=r[8];return s[0]=o*S+a*b+c*_,s[3]=o*m+a*w+c*M,s[6]=o*p+a*x+c*R,s[1]=l*S+u*b+d*_,s[4]=l*m+u*w+d*M,s[7]=l*p+u*x+d*R,s[2]=h*S+f*b+g*_,s[5]=h*m+f*w+g*M,s[8]=h*p+f*x+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,h=a*c-u*s,f=l*s-o*c,g=e*d+i*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return t[0]=d*S,t[1]=(r*l-u*i)*S,t[2]=(a*i-r*o)*S,t[3]=h*S,t[4]=(u*e-r*c)*S,t[5]=(r*s-a*e)*S,t[6]=f*S,t[7]=(i*c-l*e)*S,t[8]=(o*e-i*s)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fa.makeScale(t,e)),this}rotate(t){return es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fa.makeRotation(-t)),this}translate(t,e){return es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};au.prototype.isMatrix3=!0;let zt=au;const Fa=new zt,Ru=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cu=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ep(){const n={enabled:!0,workingColorSpace:jo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===de&&(r.r=Ni(r.r),r.g=Ni(r.g),r.b=Ni(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===de&&(r.r=is(r.r),r.g=is(r.g),r.b=is(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ki?ta:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[jo]:{primaries:t,whitePoint:i,transfer:ta,toXYZ:Ru,fromXYZ:Cu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:t,whitePoint:i,transfer:de,toXYZ:Ru,fromXYZ:Cu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),n}const jt=Ep();function Ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function is(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Dr;class wp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Dr===void 0&&(Dr=ea("canvas")),Dr.width=t.width,Dr.height=t.height;const r=Dr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Dr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ea("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ni(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ni(e[i]/255)*255):e[i]=Ni(e[i]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Tp=0;class zc{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Ii(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Oa(r[o].image)):s.push(Oa(r[o]))}else s=Oa(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Oa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}let Ap=0;const Ba=new A;class cn extends tr{constructor(t=cn.DEFAULT_IMAGE,e=cn.DEFAULT_MAPPING,i=Pi,r=Pi,s=ln,o=dr,a=Qn,c=Cn,l=cn.DEFAULT_ANISOTROPY,u=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Ii(),this.name="",this.source=new zc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ba).x}get height(){return this.source.getSize(Ba).y}get depth(){return this.source.getSize(Ba).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ll:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case Il:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ll:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case Il:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Jh;cn.DEFAULT_ANISOTROPY=1;const lu=class lu{constructor(t=0,e=0,i=0,r=1){this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],S=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+S)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(l+1)/2,x=(f+1)/2,_=(p+1)/2,M=(u+h)/4,R=(d+S)/4,v=(g+m)/4;return w>x&&w>_?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=M/i,s=R/i):x>_?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=M/r,s=v/r):_<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(_),i=R/s,r=v/s),this.set(i,r,s,e),this}let b=Math.sqrt((m-g)*(m-g)+(d-S)*(d-S)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-S)/b,this.z=(h-u)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};lu.prototype.isVector4=!0;let Le=lu;class Rp extends tr{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:i.depth},s=new cn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new zc(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends Rp{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ad extends cn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cp extends cn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const _a=class _a{constructor(t,e,i,r,s,o,a,c,l,u,d,h,f,g,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l,u,d,h,f,g,S,m)}set(t,e,i,r,s,o,a,c,l,u,d,h,f,g,S,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _a().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,r=1/Lr.setFromMatrixColumn(t,0).length(),s=1/Lr.setFromMatrixColumn(t,1).length(),o=1/Lr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=o*u,f=o*d,g=a*u,S=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=h-S*l,e[9]=-a*c,e[2]=S-h*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,f=c*d,g=l*u,S=l*d;e[0]=h+S*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=S+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,f=c*d,g=l*u,S=l*d;e[0]=h-S*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=S-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,f=o*d,g=a*u,S=a*d;e[0]=c*u,e[4]=g*l-f,e[8]=h*l+S,e[1]=c*d,e[5]=S*l+h,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,f=o*l,g=a*c,S=a*l;e[0]=c*u,e[4]=S-h*d,e[8]=g*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*d+g,e[10]=h-S*d}else if(t.order==="XZY"){const h=o*c,f=o*l,g=a*c,S=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+S,e[5]=o*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*u,e[10]=S*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pp,t,Dp)}lookAt(t,e,i){const r=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Hi.crossVectors(i,Tn),Hi.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Hi.crossVectors(i,Tn)),Hi.normalize(),co.crossVectors(Tn,Hi),r[0]=Hi.x,r[4]=co.x,r[8]=Tn.x,r[1]=Hi.y,r[5]=co.y,r[9]=Tn.y,r[2]=Hi.z,r[6]=co.z,r[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],S=i[6],m=i[10],p=i[14],b=i[3],w=i[7],x=i[11],_=i[15],M=r[0],R=r[4],v=r[8],T=r[12],D=r[1],L=r[5],O=r[9],k=r[13],I=r[2],G=r[6],$=r[10],K=r[14],nt=r[3],Y=r[7],tt=r[11],rt=r[15];return s[0]=o*M+a*D+c*I+l*nt,s[4]=o*R+a*L+c*G+l*Y,s[8]=o*v+a*O+c*$+l*tt,s[12]=o*T+a*k+c*K+l*rt,s[1]=u*M+d*D+h*I+f*nt,s[5]=u*R+d*L+h*G+f*Y,s[9]=u*v+d*O+h*$+f*tt,s[13]=u*T+d*k+h*K+f*rt,s[2]=g*M+S*D+m*I+p*nt,s[6]=g*R+S*L+m*G+p*Y,s[10]=g*v+S*O+m*$+p*tt,s[14]=g*T+S*k+m*K+p*rt,s[3]=b*M+w*D+x*I+_*nt,s[7]=b*R+w*L+x*G+_*Y,s[11]=b*v+w*O+x*$+_*tt,s[15]=b*T+w*k+x*K+_*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],S=t[7],m=t[11],p=t[15],b=c*f-l*h,w=a*f-l*d,x=a*h-c*d,_=o*f-l*u,M=o*h-c*u,R=o*d-a*u;return e*(S*b-m*w+p*x)-i*(g*b-m*_+p*M)+r*(g*w-S*_+p*R)-s*(g*x-S*M+m*R)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-i*(s*u-a*c)+r*(s*l-o*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],S=t[13],m=t[14],p=t[15],b=e*a-i*o,w=e*c-r*o,x=e*l-s*o,_=i*c-r*a,M=i*l-s*a,R=r*l-s*c,v=u*S-d*g,T=u*m-h*g,D=u*p-f*g,L=d*m-h*S,O=d*p-f*S,k=h*p-f*m,I=b*k-w*O+x*L+_*D-M*T+R*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/I;return t[0]=(a*k-c*O+l*L)*G,t[1]=(r*O-i*k-s*L)*G,t[2]=(S*R-m*M+p*_)*G,t[3]=(h*M-d*R-f*_)*G,t[4]=(c*D-o*k-l*T)*G,t[5]=(e*k-r*D+s*T)*G,t[6]=(m*x-g*R-p*w)*G,t[7]=(u*R-h*x+f*w)*G,t[8]=(o*O-a*D+l*v)*G,t[9]=(i*D-e*O-s*v)*G,t[10]=(g*M-S*x+p*b)*G,t[11]=(d*x-u*M-f*b)*G,t[12]=(a*T-o*L-c*v)*G,t[13]=(e*L-i*T+r*v)*G,t[14]=(S*w-g*_-m*b)*G,t[15]=(u*_-d*w+h*b)*G,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,d=a+a,h=s*l,f=s*u,g=s*d,S=o*u,m=o*d,p=a*d,b=c*l,w=c*u,x=c*d,_=i.x,M=i.y,R=i.z;return r[0]=(1-(S+p))*_,r[1]=(f+x)*_,r[2]=(g-w)*_,r[3]=0,r[4]=(f-x)*M,r[5]=(1-(h+p))*M,r[6]=(m+b)*M,r[7]=0,r[8]=(g+w)*R,r[9]=(m-b)*R,r[10]=(1-(h+S))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let o=Lr.set(r[0],r[1],r[2]).length();const a=Lr.set(r[4],r[5],r[6]).length(),c=Lr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Gn.copy(this);const l=1/o,u=1/a,d=1/c;return Gn.elements[0]*=l,Gn.elements[1]*=l,Gn.elements[2]*=l,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,e.setFromRotationMatrix(Gn),i.x=o,i.y=a,i.z=c,this}makePerspective(t,e,i,r,s,o,a=di,c=!1){const l=this.elements,u=2*s/(e-t),d=2*s/(i-r),h=(e+t)/(e-t),f=(i+r)/(i-r);let g,S;if(c)g=s/(o-s),S=o*s/(o-s);else if(a===di)g=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(a===Ys)g=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=di,c=!1){const l=this.elements,u=2/(e-t),d=2/(i-r),h=-(e+t)/(e-t),f=-(i+r)/(i-r);let g,S;if(c)g=1/(o-s),S=o/(o-s);else if(a===di)g=-2/(o-s),S=-(o+s)/(o-s);else if(a===Ys)g=-1/(o-s),S=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};_a.prototype.isMatrix4=!0;let Re=_a;const Lr=new A,Gn=new Re,Pp=new A(0,0,0),Dp=new A(1,1,1),Hi=new A,co=new A,Tn=new A,Pu=new Re,Du=new vi;class xi{constructor(t=0,e=0,i=0,r=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Pu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Du.setFromEuler(this),this.setFromQuaternion(Du,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class ld{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Lp=0;const Lu=new A,Ir=new vi,bi=new Re,uo=new A,ys=new A,Ip=new A,Np=new vi,Iu=new A(1,0,0),Nu=new A(0,1,0),Uu=new A(0,0,1),Fu={type:"added"},Up={type:"removed"},Nr={type:"childadded",child:null},za={type:"childremoved",child:null};class Ye extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DEFAULT_UP.clone();const t=new A,e=new xi,i=new vi,r=new A(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Re},normalMatrix:{value:new zt}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=Ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ld,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ir.setFromAxisAngle(t,e),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(t,e){return Ir.setFromAxisAngle(t,e),this.quaternion.premultiply(Ir),this}rotateX(t){return this.rotateOnAxis(Iu,t)}rotateY(t){return this.rotateOnAxis(Nu,t)}rotateZ(t){return this.rotateOnAxis(Uu,t)}translateOnAxis(t,e){return Lu.copy(t).applyQuaternion(this.quaternion),this.position.add(Lu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Iu,t)}translateY(t){return this.translateOnAxis(Nu,t)}translateZ(t){return this.translateOnAxis(Uu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?uo.copy(t):uo.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(ys,uo,this.up):bi.lookAt(uo,ys,this.up),this.quaternion.setFromRotationMatrix(bi),r&&(bi.extractRotation(r.matrixWorld),Ir.setFromRotationMatrix(bi),this.quaternion.premultiply(Ir.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fu),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null):ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Up),za.child=t,this.dispatchEvent(za),za.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fu),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,t,Ip),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,Np,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*r,s[13]+=i-s[1]*e-s[5]*i-s[9]*r,s[14]+=r-s[2]*e-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ye.DEFAULT_UP=new A(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class xe extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fp={type:"move"};class ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const S of t.hand.values()){const m=e.getJointPose(S,i),p=this._getHandJoint(l,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fp)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new xe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},ho={h:0,s:0,l:0};function Ga(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class $t{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=yn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,jt.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=jt.workingColorSpace){if(t=Bc(t,1),e=Xt(e,0,1),i=Xt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Ga(o,s,t+1/3),this.g=Ga(o,s,t),this.b=Ga(o,s,t-1/3)}return jt.colorSpaceToWorking(this,r),this}setStyle(t,e=yn){function i(s){s!==void 0&&parseFloat(s)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=yn){const i=cd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yn){return jt.workingToColorSpace(on.copy(this),t),Math.round(Xt(on.r*255,0,255))*65536+Math.round(Xt(on.g*255,0,255))*256+Math.round(Xt(on.b*255,0,255))}getHexString(t=yn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(on.copy(this),e);const i=on.r,r=on.g,s=on.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=yn){jt.workingToColorSpace(on.copy(this),t);const e=on.r,i=on.g,r=on.b;return t!==yn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(ho);const i=Os(Vi.h,ho.h,e),r=Os(Vi.s,ho.s,e),s=Os(Vi.l,ho.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new $t;$t.NAMES=cd;class kc{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new $t(t),this.near=e,this.far=i}clone(){return new kc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Op extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Hn=new A,Ei=new A,Ha=new A,wi=new A,Ur=new A,Fr=new A,Ou=new A,Va=new A,Wa=new A,Xa=new A,$a=new Le,Ya=new Le,qa=new Le;class Pn{constructor(t=new A,e=new A,i=new A){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Hn.subVectors(t,e),r.cross(Hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Hn.subVectors(r,e),Ei.subVectors(i,e),Ha.subVectors(t,e);const o=Hn.dot(Hn),a=Hn.dot(Ei),c=Hn.dot(Ha),l=Ei.dot(Ei),u=Ei.dot(Ha),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-f-g,g,f)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,wi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,wi.x),c.addScaledVector(o,wi.y),c.addScaledVector(a,wi.z),c)}static getInterpolatedAttribute(t,e,i,r,s,o){return $a.setScalar(0),Ya.setScalar(0),qa.setScalar(0),$a.fromBufferAttribute(t,e),Ya.fromBufferAttribute(t,i),qa.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector($a,s.x),o.addScaledVector(Ya,s.y),o.addScaledVector(qa,s.z),o}static isFrontFacing(t,e,i,r){return Hn.subVectors(i,e),Ei.subVectors(t,e),Hn.cross(Ei).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Hn.cross(Ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Pn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Ur.subVectors(r,i),Fr.subVectors(s,i),Va.subVectors(t,i);const c=Ur.dot(Va),l=Fr.dot(Va);if(c<=0&&l<=0)return e.copy(i);Wa.subVectors(t,r);const u=Ur.dot(Wa),d=Fr.dot(Wa);if(u>=0&&d<=u)return e.copy(r);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(Ur,o);Xa.subVectors(t,s);const f=Ur.dot(Xa),g=Fr.dot(Xa);if(g>=0&&f<=g)return e.copy(s);const S=f*l-c*g;if(S<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(Fr,a);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Ou.subVectors(s,r),a=(d-u)/(d-u+(f-g)),e.copy(r).addScaledVector(Ou,a);const p=1/(m+S+h);return o=S*p,a=h*p,e.copy(i).addScaledVector(Ur,o).addScaledVector(Fr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class _s{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Vn):Vn.fromBufferAttribute(s,o),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fo.copy(i.boundingBox)),fo.applyMatrix4(t.matrixWorld),this.union(fo)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ss),po.subVectors(this.max,Ss),Or.subVectors(t.a,Ss),Br.subVectors(t.b,Ss),zr.subVectors(t.c,Ss),Wi.subVectors(Br,Or),Xi.subVectors(zr,Br),sr.subVectors(Or,zr);let e=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-sr.z,sr.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,sr.z,0,-sr.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-sr.y,sr.x,0];return!Ka(e,Or,Br,zr,po)||(e=[1,0,0,0,1,0,0,0,1],!Ka(e,Or,Br,zr,po))?!1:(mo.crossVectors(Wi,Xi),e=[mo.x,mo.y,mo.z],Ka(e,Or,Br,zr,po))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ti=[new A,new A,new A,new A,new A,new A,new A,new A],Vn=new A,fo=new _s,Or=new A,Br=new A,zr=new A,Wi=new A,Xi=new A,sr=new A,Ss=new A,po=new A,mo=new A,or=new A;function Ka(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){or.fromArray(n,s);const a=r.x*Math.abs(or.x)+r.y*Math.abs(or.y)+r.z*Math.abs(or.z),c=t.dot(or),l=e.dot(or),u=i.dot(or);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const ke=new A,go=new pt;let Bp=0;class ti extends tr{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=sd,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)go.fromBufferAttribute(this,e),go.applyMatrix3(t),this.setXY(e,go.x,go.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=qn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),r=fe(r,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class ud extends ti{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class hd extends ti{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class se extends ti{constructor(t,e,i){super(new Float32Array(t),e,i)}}const zp=new _s,bs=new A,Za=new A;class xa{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):zp.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bs.subVectors(t,this.center);const e=bs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(bs,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bs.copy(t.center).add(Za)),this.expandByPoint(bs.copy(t.center).sub(Za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let kp=0;const Nn=new Re,Ja=new Ye,kr=new A,An=new _s,Es=new _s,Je=new A;class Oe extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rp(t)?hd:ud)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new zt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Nn.makeRotationFromQuaternion(t),this.applyMatrix4(Nn),this}rotateX(t){return Nn.makeRotationX(t),this.applyMatrix4(Nn),this}rotateY(t){return Nn.makeRotationY(t),this.applyMatrix4(Nn),this}rotateZ(t){return Nn.makeRotationZ(t),this.applyMatrix4(Nn),this}translate(t,e,i){return Nn.makeTranslation(t,e,i),this.applyMatrix4(Nn),this}scale(t,e,i){return Nn.makeScale(t,e,i),this.applyMatrix4(Nn),this}lookAt(t){return Ja.lookAt(t),Ja.updateMatrix(),this.applyMatrix4(Ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Es.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(An.min,Es.min),An.expandByPoint(Je),Je.addVectors(An.max,Es.max),An.expandByPoint(Je)):(An.expandByPoint(Es.min),An.expandByPoint(Es.max))}An.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Je.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Je));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Je.fromBufferAttribute(a,l),c&&(kr.fromBufferAttribute(t,l),Je.add(kr)),r=Math.max(r,i.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new ti(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let v=0;v<i.count;v++)a[v]=new A,c[v]=new A;const l=new A,u=new A,d=new A,h=new pt,f=new pt,g=new pt,S=new A,m=new A;function p(v,T,D){l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,D),h.fromBufferAttribute(s,v),f.fromBufferAttribute(s,T),g.fromBufferAttribute(s,D),u.sub(l),d.sub(l),f.sub(h),g.sub(h);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(S.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),a[v].add(S),a[T].add(S),a[D].add(S),c[v].add(m),c[T].add(m),c[D].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let v=0,T=b.length;v<T;++v){const D=b[v],L=D.start,O=D.count;for(let k=L,I=L+O;k<I;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const w=new A,x=new A,_=new A,M=new A;function R(v){_.fromBufferAttribute(r,v),M.copy(_);const T=a[v];w.copy(T),w.sub(_.multiplyScalar(_.dot(T))).normalize(),x.crossVectors(M,T);const L=x.dot(c[v])<0?-1:1;o.setXYZW(v,w.x,w.y,w.z,L)}for(let v=0,T=b.length;v<T;++v){const D=b[v],L=D.start,O=D.count;for(let k=L,I=L+O;k<I;k+=3)R(t.getX(k+0)),R(t.getX(k+1)),R(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new ti(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const r=new A,s=new A,o=new A,a=new A,c=new A,l=new A,u=new A,d=new A;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),S=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,S),o.fromBufferAttribute(e,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,S),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let f=0,g=0;for(let S=0,m=c.length;S<m;S++){a.isInterleavedBufferAttribute?f=c[S]*a.data.stride+a.offset:f=c[S]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new ti(h,u,d)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Oe,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=t(h,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],d=s[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=sd,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const fn=new A;class ia{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix4(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)fn.fromBufferAttribute(this,e),fn.applyNormalMatrix(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)fn.fromBufferAttribute(this,e),fn.transformDirection(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=qn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=qn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=qn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=qn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=qn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),r=fe(r,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){na("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new ti(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ia(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){na("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Qa=new A,Hp=new A,Vp=new zt;class Ri{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Qa.subVectors(i,e).cross(Hp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const r=t.delta(Qa),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Vp.getNormalMatrix(t),r=this.coplanarPoint(Qa).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Wp=0;class Rr extends tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=Fs,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hh,this.blendDst=Vh,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Na,this.stencilZFail=Na,this.stencilZPass=Na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new $t().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Ri().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new pt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Xp extends Rr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Gr;const ws=new A,Hr=new A,Vr=new A,Wr=new pt,Ts=new pt,dd=new Re,_o=new A,As=new A,vo=new A,Bu=new pt,ja=new pt,zu=new pt;class $p extends Ye{constructor(t=new Xp){if(super(),this.isSprite=!0,this.type="Sprite",Gr===void 0){Gr=new Oe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Gp(e,5);Gr.setIndex([0,1,2,0,2,3]),Gr.setAttribute("position",new ia(i,3,0,!1)),Gr.setAttribute("uv",new ia(i,2,3,!1))}this.geometry=Gr,this.material=t,this.center=new pt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ie('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hr.setFromMatrixScale(this.matrixWorld),dd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Vr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hr.multiplyScalar(-Vr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;xo(_o.set(-.5,-.5,0),Vr,o,Hr,r,s),xo(As.set(.5,-.5,0),Vr,o,Hr,r,s),xo(vo.set(.5,.5,0),Vr,o,Hr,r,s),Bu.set(0,0),ja.set(1,0),zu.set(1,1);let a=t.ray.intersectTriangle(_o,As,vo,!1,ws);if(a===null&&(xo(As.set(-.5,.5,0),Vr,o,Hr,r,s),ja.set(0,1),a=t.ray.intersectTriangle(_o,vo,As,!1,ws),a===null))return;const c=t.ray.origin.distanceTo(ws);c<t.near||c>t.far||e.push({distance:c,point:ws.clone(),uv:Pn.getInterpolation(ws,_o,As,vo,Bu,ja,zu,new pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function xo(n,t,e,i,r,s){Wr.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(Ts.x=s*Wr.x-r*Wr.y,Ts.y=r*Wr.x+s*Wr.y):Ts.copy(Wr),n.copy(t),n.x+=Ts.x,n.y+=Ts.y,n.applyMatrix4(dd)}const Ai=new A,tl=new A,Mo=new A,yo=new A;class Gc{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ai.copy(this.origin).addScaledVector(this.direction,e),Ai.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){tl.copy(t).add(e).multiplyScalar(.5),Mo.copy(e).sub(t).normalize(),yo.copy(this.origin).sub(tl);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Mo),a=yo.dot(this.direction),c=-yo.dot(Mo),l=yo.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*c-a,h=o*a-c,g=s*u,d>=0)if(h>=-g)if(h<=g){const S=1/u;d*=S,h*=S,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(tl).addScaledVector(Mo,h),f}intersectSphere(t,e){if(t.radius<0)return null;Ai.subVectors(t.center,this.origin);const i=Ai.dot(this.direction),r=Ai.dot(Ai)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,r=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,r=(t.min.x-h.x)*l),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Ai)!==null}intersectTriangle(t,e,i,r,s){const o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,d=t.x-o.x,h=t.y-o.y,f=t.z-o.z,g=e.x-o.x,S=e.y-o.y,m=e.z-o.z,p=i.x-o.x,b=i.y-o.y,w=i.z-o.z,x=Math.abs(c),_=Math.abs(l),M=Math.abs(u);let R,v,T,D,L,O,k,I,G,$,K,nt;if(x>=_&&x>=M?(T=c,O=d,G=g,nt=p,c>=0?(R=l,v=u,D=h,L=f,k=S,I=m,$=b,K=w):(R=u,v=l,D=f,L=h,k=m,I=S,$=w,K=b)):_>=M?(T=l,O=h,G=S,nt=b,l>=0?(R=u,v=c,D=f,L=d,k=m,I=g,$=w,K=p):(R=c,v=u,D=d,L=f,k=g,I=m,$=p,K=w)):(T=u,O=f,G=m,nt=w,u>=0?(R=c,v=l,D=d,L=h,k=g,I=S,$=p,K=b):(R=l,v=c,D=h,L=d,k=S,I=g,$=b,K=p)),T===0)return null;const Y=R/T,tt=v/T,rt=1/T,lt=D-Y*O,bt=L-tt*O,Me=k-Y*G,ee=I-tt*G,oe=$-Y*nt,Z=K-tt*nt,it=oe*ee-Z*Me,Et=lt*Z-bt*oe,Bt=Me*bt-ee*lt;if(r){if(it<0||Et<0||Bt<0)return null}else if((it<0||Et<0||Bt<0)&&(it>0||Et>0||Bt>0))return null;const yt=it+Et+Bt;if(yt===0)return null;const Yt=rt*(it*O+Et*G+Bt*nt);return(yt>0?Yt<0:Yt>0)?null:this.at(Yt/yt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yi extends Rr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ku=new Re,ar=new Gc,So=new xa,Gu=new A,bo=new A,Eo=new A,wo=new A,el=new A,To=new A,Hu=new A,Ao=new A;class Ot extends Ye{constructor(t=new Oe,e=new yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){To.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],d=s[c];u!==0&&(el.fromBufferAttribute(d,t),o?To.addScaledVector(el,u):To.addScaledVector(el.sub(e),u))}e.add(To)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),So.copy(i.boundingSphere),So.applyMatrix4(s),ar.copy(t.ray).recast(t.near),!(So.containsPoint(ar.origin)===!1&&(ar.intersectSphere(So,Gu)===null||ar.origin.distanceToSquared(Gu)>(t.far-t.near)**2))&&(ku.copy(s).invert(),ar.copy(t.ray).applyMatrix4(ku),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ar)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,S=h.length;g<S;g++){const m=h[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,_=w;x<_;x+=3){const M=a.getX(x),R=a.getX(x+1),v=a.getX(x+2);r=Ro(this,p,t,i,l,u,d,M,R,v),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,f.start),S=Math.min(a.count,f.start+f.count);for(let m=g,p=S;m<p;m+=3){const b=a.getX(m),w=a.getX(m+1),x=a.getX(m+2);r=Ro(this,o,t,i,l,u,d,b,w,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,S=h.length;g<S;g++){const m=h[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,_=w;x<_;x+=3){const M=x,R=x+1,v=x+2;r=Ro(this,p,t,i,l,u,d,M,R,v),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,f.start),S=Math.min(c.count,f.start+f.count);for(let m=g,p=S;m<p;m+=3){const b=m,w=m+1,x=m+2;r=Ro(this,o,t,i,l,u,d,b,w,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Yp(n,t,e,i,r,s,o,a){let c;if(t.side===En?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===xr,a),c===null)return null;Ao.copy(a),Ao.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ao);return l<e.near||l>e.far?null:{distance:l,point:Ao.clone(),object:n}}function Ro(n,t,e,i,r,s,o,a,c,l){n.getVertexPosition(a,bo),n.getVertexPosition(c,Eo),n.getVertexPosition(l,wo);const u=Yp(n,t,e,i,bo,Eo,wo,Hu);if(u){const d=new A;Pn.getBarycoord(Hu,bo,Eo,wo,d),r&&(u.uv=Pn.getInterpolatedAttribute(r,a,c,l,d,new pt)),s&&(u.uv1=Pn.getInterpolatedAttribute(s,a,c,l,d,new pt)),o&&(u.normal=Pn.getInterpolatedAttribute(o,a,c,l,d,new A),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new A,materialIndex:0};Pn.getNormal(bo,Eo,wo,h.normal),u.face=h,u.barycoord=d}return u}class qp extends cn{constructor(t=null,e=1,i=1,r,s,o,a,c,l=en,u=en,d,h){super(null,o,a,c,l,u,r,s,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lr=new xa,Kp=new pt(.5,.5),Co=new A;class Hc{constructor(t=new Ri,e=new Ri,i=new Ri,r=new Ri,s=new Ri,o=new Ri){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=di,i=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],d=s[5],h=s[6],f=s[7],g=s[8],S=s[9],m=s[10],p=s[11],b=s[12],w=s[13],x=s[14],_=s[15];if(r[0].setComponents(l-o,f-u,p-g,_-b).normalize(),r[1].setComponents(l+o,f+u,p+g,_+b).normalize(),r[2].setComponents(l+a,f+d,p+S,_+w).normalize(),r[3].setComponents(l-a,f-d,p-S,_-w).normalize(),i)r[4].setComponents(c,h,m,x).normalize(),r[5].setComponents(l-c,f-h,p-m,_-x).normalize();else if(r[4].setComponents(l-c,f-h,p-m,_-x).normalize(),e===di)r[5].setComponents(l+c,f+h,p+m,_+x).normalize();else if(e===Ys)r[5].setComponents(c,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(t){lr.center.set(0,0,0);const e=Kp.distanceTo(t.center);return lr.radius=.7071067811865476+e,lr.applyMatrix4(t.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Co.x=r.normal.x>0?t.max.x:t.min.x,Co.y=r.normal.y>0?t.max.y:t.min.y,Co.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Co)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fd extends Rr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ra=new A,sa=new A,Vu=new Re,Rs=new Gc,Po=new xa,nl=new A,Wu=new A;class Zp extends Ye{constructor(t=new Oe,e=new fd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)ra.fromBufferAttribute(e,r-1),sa.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=ra.distanceTo(sa);t.setAttribute("lineDistance",new se(i,1))}else Nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(r),Po.radius+=s,t.ray.intersectsSphere(Po)===!1)return;Vu.copy(r).invert(),Rs.copy(t.ray).applyMatrix4(Vu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let S=f,m=g-1;S<m;S+=l){const p=u.getX(S),b=u.getX(S+1),w=Do(this,t,Rs,c,p,b,S);w&&e.push(w)}if(this.isLineLoop){const S=u.getX(g-1),m=u.getX(f),p=Do(this,t,Rs,c,S,m,g-1);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let S=f,m=g-1;S<m;S+=l){const p=Do(this,t,Rs,c,S,S+1,S);p&&e.push(p)}if(this.isLineLoop){const S=Do(this,t,Rs,c,g-1,f,g-1);S&&e.push(S)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Do(n,t,e,i,r,s,o){const a=n.geometry.attributes.position;if(ra.fromBufferAttribute(a,r),sa.fromBufferAttribute(a,s),e.distanceSqToSegment(ra,sa,nl,Wu)>i)return;nl.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(nl);if(!(l<t.near||l>t.far))return{distance:l,point:Wu.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Xu=new A,$u=new A;class Jp extends Zp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)Xu.fromBufferAttribute(e,r),$u.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Xu.distanceTo($u);t.setAttribute("lineDistance",new se(i,1))}else Nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pd extends cn{constructor(t=[],e=Mr,i,r,s,o,a,c,l,u){super(t,e,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class md extends cn{constructor(t,e,i,r,s,o,a,c,l){super(t,e,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ks extends cn{constructor(t,e,i=gi,r,s,o,a=en,c=en,l,u=Fi,d=1){if(u!==Fi&&u!==fr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new zc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Qp extends Ks{constructor(t,e=gi,i=Mr,r,s,o=en,a=en,c,l=Fi){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,r,s,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class gd extends cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class er extends Oe{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(d,2));function g(S,m,p,b,w,x,_,M,R,v,T){const D=x/R,L=_/v,O=x/2,k=_/2,I=M/2,G=R+1,$=v+1;let K=0,nt=0;const Y=new A;for(let tt=0;tt<$;tt++){const rt=tt*L-k;for(let lt=0;lt<G;lt++){const bt=lt*D-O;Y[S]=bt*b,Y[m]=rt*w,Y[p]=I,l.push(Y.x,Y.y,Y.z),Y[S]=0,Y[m]=0,Y[p]=M>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(lt/R),d.push(1-tt/v),K+=1}}for(let tt=0;tt<v;tt++)for(let rt=0;rt<R;rt++){const lt=h+rt+G*tt,bt=h+rt+G*(tt+1),Me=h+(rt+1)+G*(tt+1),ee=h+(rt+1)+G*tt;c.push(lt,bt,ee),c.push(bt,Me,ee),nt+=6}a.addGroup(f,nt,T),f+=nt,h+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new er(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class un extends Oe{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],h=[],f=[];let g=0;const S=[],m=i/2;let p=0;b(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new se(d,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(f,2));function b(){const x=new A,_=new A;let M=0;const R=(e-t)/i;for(let v=0;v<=s;v++){const T=[],D=v/s,L=D*(e-t)+t;for(let O=0;O<=r;O++){const k=O/r,I=k*c+a,G=Math.sin(I),$=Math.cos(I);_.x=L*G,_.y=-D*i+m,_.z=L*$,d.push(_.x,_.y,_.z),x.set(G,R,$).normalize(),h.push(x.x,x.y,x.z),f.push(k,1-D),T.push(g++)}S.push(T)}for(let v=0;v<r;v++)for(let T=0;T<s;T++){const D=S[T][v],L=S[T+1][v],O=S[T+1][v+1],k=S[T][v+1];(t>0||T!==0)&&(u.push(D,L,k),M+=3),(e>0||T!==s-1)&&(u.push(L,O,k),M+=3)}l.addGroup(p,M,0),p+=M}function w(x){const _=g,M=new pt,R=new A;let v=0;const T=x===!0?t:e,D=x===!0?1:-1;for(let O=1;O<=r;O++)d.push(0,m*D,0),h.push(0,D,0),f.push(.5,.5),g++;const L=g;for(let O=0;O<=r;O++){const I=O/r*c+a,G=Math.cos(I),$=Math.sin(I);R.x=T*$,R.y=m*D,R.z=T*G,d.push(R.x,R.y,R.z),h.push(0,D,0),M.x=G*.5+.5,M.y=$*.5*D+.5,f.push(M.x,M.y),g++}for(let O=0;O<r;O++){const k=_+O,I=L+O;x===!0?u.push(I,I+1,k):u.push(I+1,I,k),v+=3}l.addGroup(p,v,x===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new un(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class eo extends un{constructor(t=1,e=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new eo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vc extends Oe{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new se(s,3)),this.setAttribute("normal",new se(s.slice(),3)),this.setAttribute("uv",new se(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const w=new A,x=new A,_=new A;for(let M=0;M<e.length;M+=3)f(e[M+0],w),f(e[M+1],x),f(e[M+2],_),c(w,x,_,b)}function c(b,w,x,_){const M=_+1,R=[];for(let v=0;v<=M;v++){R[v]=[];const T=b.clone().lerp(x,v/M),D=w.clone().lerp(x,v/M),L=M-v;for(let O=0;O<=L;O++)O===0&&v===M?R[v][O]=T:R[v][O]=T.clone().lerp(D,O/L)}for(let v=0;v<M;v++)for(let T=0;T<2*(M-v)-1;T++){const D=Math.floor(T/2);T%2===0?(h(R[v][D+1]),h(R[v+1][D]),h(R[v][D])):(h(R[v][D+1]),h(R[v+1][D+1]),h(R[v+1][D]))}}function l(b){const w=new A;for(let x=0;x<s.length;x+=3)w.x=s[x+0],w.y=s[x+1],w.z=s[x+2],w.normalize().multiplyScalar(b),s[x+0]=w.x,s[x+1]=w.y,s[x+2]=w.z}function u(){const b=new A;for(let w=0;w<s.length;w+=3){b.x=s[w+0],b.y=s[w+1],b.z=s[w+2];const x=m(b)/2/Math.PI+.5,_=p(b)/Math.PI+.5;o.push(x,1-_)}g(),d()}function d(){for(let b=0;b<o.length;b+=6){const w=o[b+0],x=o[b+2],_=o[b+4],M=Math.max(w,x,_),R=Math.min(w,x,_);M>.9&&R<.1&&(w<.2&&(o[b+0]+=1),x<.2&&(o[b+2]+=1),_<.2&&(o[b+4]+=1))}}function h(b){s.push(b.x,b.y,b.z)}function f(b,w){const x=b*3;w.x=t[x+0],w.y=t[x+1],w.z=t[x+2]}function g(){const b=new A,w=new A,x=new A,_=new A,M=new pt,R=new pt,v=new pt;for(let T=0,D=0;T<s.length;T+=9,D+=6){b.set(s[T+0],s[T+1],s[T+2]),w.set(s[T+3],s[T+4],s[T+5]),x.set(s[T+6],s[T+7],s[T+8]),M.set(o[D+0],o[D+1]),R.set(o[D+2],o[D+3]),v.set(o[D+4],o[D+5]),_.copy(b).add(w).add(x).divideScalar(3);const L=m(_);S(M,D+0,b,L),S(R,D+2,w,L),S(v,D+4,x,L)}}function S(b,w,x,_){_<0&&b.x===1&&(o[w]=b.x-1),x.x===0&&x.z===0&&(o[w]=_/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vc(t.vertices,t.indices,t.radius,t.detail)}}const Lo=new A,Io=new A,il=new A,No=new Pn;class jp extends Oe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(ns*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:S,b:m,c:p}=No;if(S.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),No.getNormal(il),d[0]=`${Math.round(S.x*r)},${Math.round(S.y*r)},${Math.round(S.z*r)}`,d[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,d[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let b=0;b<3;b++){const w=(b+1)%3,x=d[b],_=d[w],M=No[u[b]],R=No[u[w]],v=`${x}_${_}`,T=`${_}_${x}`;T in h&&h[T]?(il.dot(h[T].normal)<=s&&(f.push(M.x,M.y,M.z),f.push(R.x,R.y,R.z)),h[T]=null):v in h||(h[v]={index0:l[b],index1:l[w],normal:il.clone()})}}for(const g in h)if(h[g]){const{index0:S,index1:m}=h[g];Lo.fromBufferAttribute(a,S),Io.fromBufferAttribute(a,m),f.push(Lo.x,Lo.y,Lo.z),f.push(Io.x,Io.y,Io.z)}this.setAttribute("position",new se(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Bi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Nt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let r=0;const s=i.length;let o;e?o=e:o=t*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,f=(o-u)/h;return(r+f)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new pt:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new A,r=[],s=[],o=[],a=new A,c=new Re;for(let f=0;f<=t;f++){const g=f/t;r[f]=this.getTangentAt(g,new A)}s[0]=new A,o[0]=new A;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Xt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(r[f],s[f])}if(e===!0){let f=Math.acos(Xt(s[0].dot(s[t]),-1,1));f/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],f*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class _d extends Bi{constructor(t=0,e=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new pt){const i=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class tm extends _d{constructor(t,e,i,r,s,o){super(t,e,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Wc(){let n=0,t=0,e=0,i=0;function r(s,o,a,c){n=s,t=a,e=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,d){let h=(o-s)/l-(a-s)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,f*=u,r(o,a,h,f)},calc:function(s){const o=s*s,a=o*s;return n+t*s+e*o+i*a}}}const Yu=new A,qu=new A,rl=new Wc,sl=new Wc,ol=new Wc;class vd extends Bi{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new A){const i=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(qu.subVectors(r[0],r[1]).add(r[0]),l=qu);const d=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Yu.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Yu),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),S=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);S<1e-4&&(S=1),g<1e-4&&(g=S),m<1e-4&&(m=S),rl.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,S,m),sl.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,S,m),ol.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,S,m)}else this.curveType==="catmullrom"&&(rl.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),sl.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),ol.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return i.set(rl.calc(c),sl.calc(c),ol.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new A().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ku(n,t,e,i,r){const s=(i-t)*.5,o=(r-e)*.5,a=n*n,c=n*a;return(2*e-2*i+s+o)*c+(-3*e+3*i-2*s-o)*a+s*n+e}function em(n,t){const e=1-n;return e*e*t}function nm(n,t){return 2*(1-n)*n*t}function im(n,t){return n*n*t}function Bs(n,t,e,i){return em(n,t)+nm(n,e)+im(n,i)}function rm(n,t){const e=1-n;return e*e*e*t}function sm(n,t){const e=1-n;return 3*e*e*n*t}function om(n,t){return 3*(1-n)*n*n*t}function am(n,t){return n*n*n*t}function zs(n,t,e,i,r){return rm(n,t)+sm(n,e)+om(n,i)+am(n,r)}class lm extends Bi{constructor(t=new pt,e=new pt,i=new pt,r=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new pt){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(zs(t,r.x,s.x,o.x,a.x),zs(t,r.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class cm extends Bi{constructor(t=new A,e=new A,i=new A,r=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new A){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(zs(t,r.x,s.x,o.x,a.x),zs(t,r.y,s.y,o.y,a.y),zs(t,r.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class um extends Bi{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hm extends Bi{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dm extends Bi{constructor(t=new pt,e=new pt,i=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new pt){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Bs(t,r.x,s.x,o.x),Bs(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xd extends Bi{constructor(t=new A,e=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new A){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Bs(t,r.x,s.x,o.x),Bs(t,r.y,s.y,o.y),Bs(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fm extends Bi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const i=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(Ku(a,c.x,l.x,u.x,d.x),Ku(a,c.y,l.y,u.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new pt().fromArray(r))}return this}}var pm=Object.freeze({__proto__:null,ArcCurve:tm,CatmullRomCurve3:vd,CubicBezierCurve:lm,CubicBezierCurve3:cm,EllipseCurve:_d,LineCurve:um,LineCurve3:hm,QuadraticBezierCurve:dm,QuadraticBezierCurve3:xd,SplineCurve:fm});class Xc extends Vc{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Xc(t.radius,t.detail)}}class Si extends Oe{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=t/a,h=e/c,f=[],g=[],S=[],m=[];for(let p=0;p<u;p++){const b=p*h-o;for(let w=0;w<l;w++){const x=w*d-s;g.push(x,-b,0),S.push(0,0,1),m.push(w/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){const w=b+l*p,x=b+l*(p+1),_=b+1+l*(p+1),M=b+1+l*p;f.push(w,x,M),f.push(x,_,M)}this.setIndex(f),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(S,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Si(t.width,t.height,t.widthSegments,t.heightSegments)}}class $c extends Oe{constructor(t=.5,e=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],l=[],u=[];let d=t;const h=(e-t)/r,f=new A,g=new pt;for(let S=0;S<=r;S++){for(let m=0;m<=i;m++){const p=s+m/i*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}d+=h}for(let S=0;S<r;S++){const m=S*(i+1);for(let p=0;p<i;p++){const b=p+m,w=b,x=b+i+1,_=b+i+2,M=b+1;a.push(w,x,M),a.push(x,_,M)}}this.setIndex(a),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $c(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Yc extends Oe{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new A,h=new A,f=[],g=[],S=[],m=[];for(let p=0;p<=i;p++){const b=[],w=p/i,x=o+w*a,_=t*Math.cos(x),M=Math.sqrt(t*t-_*_);let R=0;p===0&&o===0?R=.5/e:p===i&&c===Math.PI&&(R=-.5/e);for(let v=0;v<=e;v++){const T=v/e,D=r+T*s;d.x=-M*Math.cos(D),d.y=_,d.z=M*Math.sin(D),g.push(d.x,d.y,d.z),h.copy(d).normalize(),S.push(h.x,h.y,h.z),m.push(T+R,1-w),b.push(l++)}u.push(b)}for(let p=0;p<i;p++)for(let b=0;b<e;b++){const w=u[p][b+1],x=u[p][b],_=u[p+1][b],M=u[p+1][b+1];(p!==0||o>0)&&f.push(w,x,M),(p!==i-1||c<Math.PI)&&f.push(x,_,M)}this.setIndex(f),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(S,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class vs extends Oe{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s,thetaStart:o,thetaLength:a},i=Math.floor(i),r=Math.floor(r);const c=[],l=[],u=[],d=[],h=new A,f=new A,g=new A;for(let S=0;S<=i;S++){const m=o+S/i*a;for(let p=0;p<=r;p++){const b=p/r*s;f.x=(t+e*Math.cos(m))*Math.cos(b),f.y=(t+e*Math.cos(m))*Math.sin(b),f.z=e*Math.sin(m),l.push(f.x,f.y,f.z),h.x=t*Math.cos(b),h.y=t*Math.sin(b),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(p/r),d.push(S/i)}}for(let S=1;S<=i;S++)for(let m=1;m<=r;m++){const p=(r+1)*S+m-1,b=(r+1)*(S-1)+m-1,w=(r+1)*(S-1)+m,x=(r+1)*S+m;c.push(p,b,x),c.push(b,w,x)}this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class qc extends Oe{constructor(t=new xd(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:r,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new A,c=new A,l=new pt;let u=new A;const d=[],h=[],f=[],g=[];S(),this.setIndex(g),this.setAttribute("position",new se(d,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(f,2));function S(){for(let w=0;w<e;w++)m(w);m(s===!1?e:0),b(),p()}function m(w){u=t.getPointAt(w/e,u);const x=o.normals[w],_=o.binormals[w];for(let M=0;M<=r;M++){const R=M/r*Math.PI*2,v=Math.sin(R),T=-Math.cos(R);c.x=T*x.x+v*_.x,c.y=T*x.y+v*_.y,c.z=T*x.z+v*_.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,d.push(a.x,a.y,a.z)}}function p(){for(let w=1;w<=e;w++)for(let x=1;x<=r;x++){const _=(r+1)*(w-1)+(x-1),M=(r+1)*w+(x-1),R=(r+1)*w+x,v=(r+1)*(w-1)+x;g.push(_,M,v),g.push(M,R,v)}}function b(){for(let w=0;w<=e;w++)for(let x=0;x<=r;x++)l.x=w/e,l.y=x/r,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new qc(new pm[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function hs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];if(Zu(r))r.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone();else if(Array.isArray(r))if(Zu(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][i]=s}else t[e][i]=r.slice();else t[e][i]=r}}return t}function pn(n){const t={};for(let e=0;e<n.length;e++){const i=hs(n[e]);for(const r in i)t[r]=i[r]}return t}function Zu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function mm(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Md(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const gm={clone:hs,merge:pn};var _m=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends Rr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_m,this.fragmentShader=vm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=mm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const r=t.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=e[r.value]||null;break;case"c":this.uniforms[i].value=new $t().setHex(r.value);break;case"v2":this.uniforms[i].value=new pt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new A().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Le().fromArray(r.value);break;case"m3":this.uniforms[i].value=new zt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Re().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class xm extends Mi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Sr extends Rr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Mm extends Rr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ym extends Rr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class yd extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Sm extends yd{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const al=new Re,Ju=new A,Qu=new A;class bm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hc,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Ju.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ju),Qu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,r){al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(al,t.coordinateSystem,t.reversedDepth);const s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;t.coordinateSystem===Ys||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(al)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Uo=new A,Fo=new vi,oi=new A;class Sd extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Uo,Fo,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uo,Fo,oi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Uo,Fo,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uo,Fo,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $i=new A,ju=new pt,th=new pt;class $n extends Sd{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($i.x,$i.y).multiplyScalar(-t/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-t/$i.z)}getViewSize(t,e){return this.getViewBounds(t,ju,th),e.subVectors(th,ju)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ns*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Ma extends Sd{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Em extends bm{constructor(){super(new Ma(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wm extends yd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new Em}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Xr=-90,$r=1;class Tm extends Ye{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $n(Xr,$r,t,e);r.layers=this.layers,this.add(r);const s=new $n(Xr,$r,t,e);s.layers=this.layers,this.add(s);const o=new $n(Xr,$r,t,e);o.layers=this.layers,this.add(o);const a=new $n(Xr,$r,t,e);a.layers=this.layers,this.add(a);const c=new $n(Xr,$r,t,e);c.layers=this.layers,this.add(c);const l=new $n(Xr,$r,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ys)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Am extends $n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class eh{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Xt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const cu=class cu{constructor(t,e,i,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,r){const s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=r,this}};cu.prototype.isMatrix2=!0;let nh=cu;class Rm extends tr{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function ih(n,t,e,i){const r=Cm(i);switch(e){case nd:return n*t;case rd:return n*t/r.components*r.byteLength;case Ic:return n*t/r.components*r.byteLength;case yr:return n*t*2/r.components*r.byteLength;case Nc:return n*t*2/r.components*r.byteLength;case id:return n*t*3/r.components*r.byteLength;case Qn:return n*t*4/r.components*r.byteLength;case Uc:return n*t*4/r.components*r.byteLength;case Vo:case Wo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Xo:case $o:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ul:case Ol:return Math.max(n,16)*Math.max(t,8)/4;case Nl:case Fl:return Math.max(n,8)*Math.max(t,8)/2;case Bl:case zl:case Gl:case Hl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case kl:case Jo:case Vl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case $l:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ql:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case jl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case tc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ec:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case nc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ic:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case rc:case sc:case oc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ac:case lc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Qo:case cc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Cm(n){switch(n){case Cn:case Qh:return{byteLength:1,components:1};case Xs:case jh:case _i:return{byteLength:2,components:1};case Dc:case Lc:return{byteLength:2,components:4};case gi:case Pc:case hi:return{byteLength:4,components:1};case td:case ed:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rc}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rc);function bd(){let n=null,t=!1,e=null,i=null;function r(s,o){i=n.requestAnimationFrame(r),e(s,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Pm(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],S=d[f];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++h,d[h]=S)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const S=d[f];n.bufferSubData(l,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Dm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lm=`#ifdef USE_ALPHAHASH
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
#endif`,Im=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Um=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Om=`#ifdef USE_AOMAP
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
#endif`,Bm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zm=`#ifdef USE_BATCHING
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
#endif`,km=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wm=`#ifdef USE_IRIDESCENCE
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
#endif`,Xm=`#ifdef USE_BUMPMAP
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
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,t0=`#define PI 3.141592653589793
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
} // validated`,e0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,n0=`vec3 transformedNormal = objectNormal;
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
#endif`,i0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a0="gl_FragColor = linearToOutputTexel( gl_FragColor );",l0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c0=`#ifdef USE_ENVMAP
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
#endif`,u0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,h0=`#ifdef USE_ENVMAP
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
#endif`,d0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f0=`#ifdef USE_ENVMAP
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
#endif`,p0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v0=`#ifdef USE_GRADIENTMAP
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
}`,x0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,M0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,S0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,b0=`#ifdef USE_ENVMAP
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
#endif`,E0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R0=`PhysicalMaterial material;
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
#endif`,C0=`uniform sampler2D dfgLUT;
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
}`,P0=`
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
#endif`,D0=`#if defined( RE_IndirectDiffuse )
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
#endif`,L0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,N0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,B0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,z0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,G0=`#if defined( USE_POINTS_UV )
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
#endif`,H0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,W0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,X0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y0=`#ifdef USE_MORPHTARGETS
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
#endif`,q0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Z0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,J0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tg=`#ifdef USE_NORMALMAP
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
#endif`,eg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ng=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ig=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,og=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ag=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gg=`float getShadowMask() {
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
}`,_g=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vg=`#ifdef USE_SKINNING
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
#endif`,xg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mg=`#ifdef USE_SKINNING
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
#endif`,yg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wg=`#ifdef USE_TRANSMISSION
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
#endif`,Tg=`#ifdef USE_TRANSMISSION
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
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lg=`uniform sampler2D t2D;
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
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`#include <common>
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
}`,Bg=`#if DEPTH_PACKING == 3200
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
}`,zg=`#define DISTANCE
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
}`,kg=`#define DISTANCE
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
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`uniform float scale;
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
}`,Wg=`uniform vec3 diffuse;
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
}`,Xg=`#include <common>
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
}`,$g=`uniform vec3 diffuse;
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
}`,Yg=`#define LAMBERT
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
}`,qg=`#define LAMBERT
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
}`,Kg=`#define MATCAP
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
}`,Zg=`#define MATCAP
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
}`,Jg=`#define NORMAL
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
}`,Qg=`#define NORMAL
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
}`,jg=`#define PHONG
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
}`,t_=`#define PHONG
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
}`,e_=`#define STANDARD
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
}`,n_=`#define STANDARD
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
}`,i_=`#define TOON
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
}`,r_=`#define TOON
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
}`,s_=`uniform float size;
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
}`,o_=`uniform vec3 diffuse;
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
}`,a_=`#include <common>
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
}`,l_=`uniform vec3 color;
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
}`,c_=`uniform float rotation;
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
}`,u_=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:Dm,alphahash_pars_fragment:Lm,alphamap_fragment:Im,alphamap_pars_fragment:Nm,alphatest_fragment:Um,alphatest_pars_fragment:Fm,aomap_fragment:Om,aomap_pars_fragment:Bm,batching_pars_vertex:zm,batching_vertex:km,begin_vertex:Gm,beginnormal_vertex:Hm,bsdfs:Vm,iridescence_fragment:Wm,bumpmap_pars_fragment:Xm,clipping_planes_fragment:$m,clipping_planes_pars_fragment:Ym,clipping_planes_pars_vertex:qm,clipping_planes_vertex:Km,color_fragment:Zm,color_pars_fragment:Jm,color_pars_vertex:Qm,color_vertex:jm,common:t0,cube_uv_reflection_fragment:e0,defaultnormal_vertex:n0,displacementmap_pars_vertex:i0,displacementmap_vertex:r0,emissivemap_fragment:s0,emissivemap_pars_fragment:o0,colorspace_fragment:a0,colorspace_pars_fragment:l0,envmap_fragment:c0,envmap_common_pars_fragment:u0,envmap_pars_fragment:h0,envmap_pars_vertex:d0,envmap_physical_pars_fragment:b0,envmap_vertex:f0,fog_vertex:p0,fog_pars_vertex:m0,fog_fragment:g0,fog_pars_fragment:_0,gradientmap_pars_fragment:v0,lightmap_pars_fragment:x0,lights_lambert_fragment:M0,lights_lambert_pars_fragment:y0,lights_pars_begin:S0,lights_toon_fragment:E0,lights_toon_pars_fragment:w0,lights_phong_fragment:T0,lights_phong_pars_fragment:A0,lights_physical_fragment:R0,lights_physical_pars_fragment:C0,lights_fragment_begin:P0,lights_fragment_maps:D0,lights_fragment_end:L0,lightprobes_pars_fragment:I0,logdepthbuf_fragment:N0,logdepthbuf_pars_fragment:U0,logdepthbuf_pars_vertex:F0,logdepthbuf_vertex:O0,map_fragment:B0,map_pars_fragment:z0,map_particle_fragment:k0,map_particle_pars_fragment:G0,metalnessmap_fragment:H0,metalnessmap_pars_fragment:V0,morphinstance_vertex:W0,morphcolor_vertex:X0,morphnormal_vertex:$0,morphtarget_pars_vertex:Y0,morphtarget_vertex:q0,normal_fragment_begin:K0,normal_fragment_maps:Z0,normal_pars_fragment:J0,normal_pars_vertex:Q0,normal_vertex:j0,normalmap_pars_fragment:tg,clearcoat_normal_fragment_begin:eg,clearcoat_normal_fragment_maps:ng,clearcoat_pars_fragment:ig,iridescence_pars_fragment:rg,opaque_fragment:sg,packing:og,premultiplied_alpha_fragment:ag,project_vertex:lg,dithering_fragment:cg,dithering_pars_fragment:ug,roughnessmap_fragment:hg,roughnessmap_pars_fragment:dg,shadowmap_pars_fragment:fg,shadowmap_pars_vertex:pg,shadowmap_vertex:mg,shadowmask_pars_fragment:gg,skinbase_vertex:_g,skinning_pars_vertex:vg,skinning_vertex:xg,skinnormal_vertex:Mg,specularmap_fragment:yg,specularmap_pars_fragment:Sg,tonemapping_fragment:bg,tonemapping_pars_fragment:Eg,transmission_fragment:wg,transmission_pars_fragment:Tg,uv_pars_fragment:Ag,uv_pars_vertex:Rg,uv_vertex:Cg,worldpos_vertex:Pg,background_vert:Dg,background_frag:Lg,backgroundCube_vert:Ig,backgroundCube_frag:Ng,cube_vert:Ug,cube_frag:Fg,depth_vert:Og,depth_frag:Bg,distance_vert:zg,distance_frag:kg,equirect_vert:Gg,equirect_frag:Hg,linedashed_vert:Vg,linedashed_frag:Wg,meshbasic_vert:Xg,meshbasic_frag:$g,meshlambert_vert:Yg,meshlambert_frag:qg,meshmatcap_vert:Kg,meshmatcap_frag:Zg,meshnormal_vert:Jg,meshnormal_frag:Qg,meshphong_vert:jg,meshphong_frag:t_,meshphysical_vert:e_,meshphysical_frag:n_,meshtoon_vert:i_,meshtoon_frag:r_,points_vert:s_,points_frag:o_,shadow_vert:a_,shadow_frag:l_,sprite_vert:c_,sprite_frag:u_},gt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new A},probesMax:{value:new A},probesResolution:{value:new A}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},ci={basic:{uniforms:pn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:pn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new $t(0)},envMapIntensity:{value:1}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:pn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:pn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:pn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:pn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:pn([gt.points,gt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:pn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:pn([gt.common,gt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:pn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:pn([gt.sprite,gt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distance:{uniforms:pn([gt.common,gt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distance_vert,fragmentShader:Wt.distance_frag},shadow:{uniforms:pn([gt.lights,gt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};ci.physical={uniforms:pn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Oo={r:0,b:0,g:0},h_=new Re,Ed=new zt;Ed.set(-1,0,0,0,1,0,0,0,1);function d_(n,t,e,i,r,s){const o=new $t(0);let a=r===!0?0:1,c,l,u=null,d=0,h=null;function f(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){const x=b.backgroundBlurriness>0;w=t.get(w,x)}return w}function g(b){let w=!1;const x=f(b);x===null?m(o,a):x&&x.isColor&&(m(x,1),w=!0);const _=n.xr.getEnvironmentBlendMode();_==="additive"?e.buffers.color.setClear(0,0,0,1,s):_==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(n.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(b,w){const x=f(w);x&&(x.isCubeTexture||x.mapping===va)?(l===void 0&&(l=new Ot(new er(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:hs(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(_,M,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(h_.makeRotationFromEuler(w.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ed),l.material.toneMapped=jt.getTransfer(x.colorSpace)!==de,(u!==x||d!==x.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,h=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ot(new Si(2,2),new Mi({name:"BackgroundMaterial",uniforms:hs(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=jt.getTransfer(x.colorSpace)!==de,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,h=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,w){b.getRGB(Oo,Md(n)),e.buffers.color.setClear(Oo.r,Oo.g,Oo.b,w,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,w=1){o.set(b),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(o,a)},render:g,addToRenderList:S,dispose:p}}function f_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(L,O,k,I,G){let $=!1;const K=d(L,I,k,O);s!==K&&(s=K,l(s.object)),$=f(L,I,k,G),$&&g(L,I,k,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,x(L,O,k,I),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return n.createVertexArray()}function l(L){return n.bindVertexArray(L)}function u(L){return n.deleteVertexArray(L)}function d(L,O,k,I){const G=I.wireframe===!0;let $=i[O.id];$===void 0&&($={},i[O.id]=$);const K=L.isInstancedMesh===!0?L.id:0;let nt=$[K];nt===void 0&&(nt={},$[K]=nt);let Y=nt[k.id];Y===void 0&&(Y={},nt[k.id]=Y);let tt=Y[G];return tt===void 0&&(tt=h(c()),Y[G]=tt),tt}function h(L){const O=[],k=[],I=[];for(let G=0;G<e;G++)O[G]=0,k[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:k,attributeDivisors:I,object:L,attributes:{},index:null}}function f(L,O,k,I){const G=s.attributes,$=O.attributes;let K=0;const nt=k.getAttributes();for(const Y in nt)if(nt[Y].location>=0){const rt=G[Y];let lt=$[Y];if(lt===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(lt=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(lt=L.instanceColor)),rt===void 0||rt.attribute!==lt||lt&&rt.data!==lt.data)return!0;K++}return s.attributesNum!==K||s.index!==I}function g(L,O,k,I){const G={},$=O.attributes;let K=0;const nt=k.getAttributes();for(const Y in nt)if(nt[Y].location>=0){let rt=$[Y];rt===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(rt=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(rt=L.instanceColor));const lt={};lt.attribute=rt,rt&&rt.data&&(lt.data=rt.data),G[Y]=lt,K++}s.attributes=G,s.attributesNum=K,s.index=I}function S(){const L=s.newAttributes;for(let O=0,k=L.length;O<k;O++)L[O]=0}function m(L){p(L,0)}function p(L,O){const k=s.newAttributes,I=s.enabledAttributes,G=s.attributeDivisors;k[L]=1,I[L]===0&&(n.enableVertexAttribArray(L),I[L]=1),G[L]!==O&&(n.vertexAttribDivisor(L,O),G[L]=O)}function b(){const L=s.newAttributes,O=s.enabledAttributes;for(let k=0,I=O.length;k<I;k++)O[k]!==L[k]&&(n.disableVertexAttribArray(k),O[k]=0)}function w(L,O,k,I,G,$,K){K===!0?n.vertexAttribIPointer(L,O,k,G,$):n.vertexAttribPointer(L,O,k,I,G,$)}function x(L,O,k,I){S();const G=I.attributes,$=k.getAttributes(),K=O.defaultAttributeValues;for(const nt in $){const Y=$[nt];if(Y.location>=0){let tt=G[nt];if(tt===void 0&&(nt==="instanceMatrix"&&L.instanceMatrix&&(tt=L.instanceMatrix),nt==="instanceColor"&&L.instanceColor&&(tt=L.instanceColor)),tt!==void 0){const rt=tt.normalized,lt=tt.itemSize,bt=t.get(tt);if(bt===void 0)continue;const Me=bt.buffer,ee=bt.type,oe=bt.bytesPerElement,Z=ee===n.INT||ee===n.UNSIGNED_INT||tt.gpuType===Pc;if(tt.isInterleavedBufferAttribute){const it=tt.data,Et=it.stride,Bt=tt.offset;if(it.isInstancedInterleavedBuffer){for(let yt=0;yt<Y.locationSize;yt++)p(Y.location+yt,it.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let yt=0;yt<Y.locationSize;yt++)m(Y.location+yt);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let yt=0;yt<Y.locationSize;yt++)w(Y.location+yt,lt/Y.locationSize,ee,rt,Et*oe,(Bt+lt/Y.locationSize*yt)*oe,Z)}else{if(tt.isInstancedBufferAttribute){for(let it=0;it<Y.locationSize;it++)p(Y.location+it,tt.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let it=0;it<Y.locationSize;it++)m(Y.location+it);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let it=0;it<Y.locationSize;it++)w(Y.location+it,lt/Y.locationSize,ee,rt,lt*oe,lt/Y.locationSize*it*oe,Z)}}else if(K!==void 0){const rt=K[nt];if(rt!==void 0)switch(rt.length){case 2:n.vertexAttrib2fv(Y.location,rt);break;case 3:n.vertexAttrib3fv(Y.location,rt);break;case 4:n.vertexAttrib4fv(Y.location,rt);break;default:n.vertexAttrib1fv(Y.location,rt)}}}}b()}function _(){T();for(const L in i){const O=i[L];for(const k in O){const I=O[k];for(const G in I){const $=I[G];for(const K in $)u($[K].object),delete $[K];delete I[G]}}delete i[L]}}function M(L){if(i[L.id]===void 0)return;const O=i[L.id];for(const k in O){const I=O[k];for(const G in I){const $=I[G];for(const K in $)u($[K].object),delete $[K];delete I[G]}}delete i[L.id]}function R(L){for(const O in i){const k=i[O];for(const I in k){const G=k[I];if(G[L.id]===void 0)continue;const $=G[L.id];for(const K in $)u($[K].object),delete $[K];delete G[L.id]}}}function v(L){for(const O in i){const k=i[O],I=L.isInstancedMesh===!0?L.id:0,G=k[I];if(G!==void 0){for(const $ in G){const K=G[$];for(const nt in K)u(K[nt].object),delete K[nt];delete G[$]}delete k[I],Object.keys(k).length===0&&delete i[O]}}}function T(){D(),o=!0,s!==r&&(s=r,l(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:D,dispose:_,releaseStatesOfGeometry:M,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:m,disableUnusedAttributes:b}}function p_(n,t,e){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),e.update(l,i,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];e.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function m_(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Qn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const v=R===_i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Cn&&R!==hi&&!v&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(Nt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:x,maxSamples:_,samples:M}}function g_(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new Ri,a=new zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||r;return r=h,i=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const b=s?0:i,w=b*4;let x=p.clippingState||null;c.value=x,x=u(g,h,w,f);for(let _=0;_!==w;++_)x[_]=e[_];p.clippingState=x,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,f,g){const S=d!==null?d.length:0;let m=null;if(S!==0){if(m=c.value,g!==!0||m===null){const p=f+S*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,x=f;w!==S;++w,x+=4)o.copy(d[w]).applyMatrix4(b,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}const Qr=4,__=6,v_=20,x_=256,Cs=new Ma,rh=new $t;let ll=null,cl=0,ul=0,hl=!1;const M_=new A,cr=new A;class sh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,s={}){const{size:o=256,position:a=M_}=s;ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel(),hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,r,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ll,cl,ul),this._renderer.xr.enabled=hl,t.scissorTest=!1,Yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Mr||t.mapping===us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel(),hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:_i,format:Qn,colorSpace:jo,depthBuffer:!1},r=oh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oh(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=y_(s)),this._blurMaterial=b_(s,t,e),this._ggxMaterial=S_(s,t,e)}return r}_compileMaterial(t){const e=new Ot(new Oe,t);this._renderer.compile(e,Cs)}_sceneToCubeUV(t,e,i,r,s){const c=new $n(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(rh),d.toneMapping=pi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ot(new er,new yi({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let p=!1;const b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,p=!0):(m.color.copy(rh),p=!0);for(let w=0;w<6;w++){const x=w%3;x===0?(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[w],s.y,s.z)):x===1?(c.up.set(0,0,l[w]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[w],s.z)):(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[w]));const _=this._cubeSize;Yr(r,x*_,w>2?_:0,_,_),d.setRenderTarget(r),p&&d.render(S,c),d.render(t,c)}d.toneMapping=f,d.autoClear=h,t.background=b}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Mr||t.mapping===us;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ah());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Yr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Cs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=l*1.25,f=d*h,{_lodMax:g}=this,S=this._sizeLods[i],m=3*S*(i>g-Qr?i-g+Qr:0),p=4*(this._cubeSize-S);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,Yr(s,m,p,3*S,2*S),r.setRenderTarget(s),r.render(a,Cs),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,Yr(t,m,p,3*S,2*S),r.setRenderTarget(t),r.render(a,Cs)}_blur(t,e,i,r){const s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,i,o),this._blurPass(s,t,i,i,o)}_blurPass(t,e,i,r,s){const o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[r];c.material=a;const l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-i;const u=this._sizeLods[r],d=3*u*(r>this._lodMax-Qr?r-this._lodMax+Qr:0),h=4*(this._cubeSize-u);Yr(e,d,h,3*u,2*u),o.setRenderTarget(e),o.render(c,Cs)}}function y_(n){const t=[],e=[];let i=n;const r=n-Qr+1+__;for(let s=0;s<r;s++){const o=Math.pow(2,i);t.push(o);const a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,h=6,f=3,g=new Float32Array(f*h*d),S=new Float32Array(f*h*d);for(let p=0;p<d;p++){const b=p%3*2/3-1,w=p>2?0:-1,x=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];g.set(x,f*h*p);for(let _=0;_<h;_++){const M=u[_*2]*2-1,R=u[_*2+1]*2-1;p===0?cr.set(1,R,M):p===1?cr.set(-M,1,-R):p===2?cr.set(-M,R,1):p===3?cr.set(-1,R,-M):p===4?cr.set(-M,-1,R):cr.set(M,R,-1),cr.toArray(S,(p*h+_)*f)}}const m=new Oe;m.setAttribute("position",new ti(g,f)),m.setAttribute("outputDirection",new ti(S,f)),e.push(new Ot(m,null)),i>Qr&&i--}return{lodMeshes:e,sizeLods:t}}function oh(n,t,e){const i=new jn(n,t,e);return i.texture.mapping=va,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yr(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function S_(n,t,e){return new Mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:x_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ya(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function b_(n,t,e){return new Mi({name:"SphericalGaussianBlur",defines:{SAMPLES:v_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ya(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function ah(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ya(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function lh(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function ya(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class wd extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new pd(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new er(5,5,5),s=new Mi({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Li});s.uniforms.tEquirect.value=e;const o=new Ot(r,s),a=e.minFilter;return e.minFilter===dr&&(e.minFilter=ln),new Tm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}function E_(n){let t=new WeakMap,e=new WeakMap,i=null;function r(h,f=!1){return h==null?null:f?o(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===Da||f===La)if(t.has(h)){const g=t.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const S=new wd(g.height);return S.fromEquirectangularTexture(n,h),t.set(h,S),h.addEventListener("dispose",l),a(S.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,g=f===Da||f===La,S=f===Mr||f===us;if(g||S){let m=e.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new sh(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const b=h.image;return g&&b&&b.height>0||S&&b&&c(b)?(i===null&&(i=new sh(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===Da?h.mapping=Mr:f===La&&(h.mapping=us),h}function c(h){let f=0;const g=6;for(let S=0;S<g;S++)h[S]!==void 0&&f++;return f===g}function l(h){const f=h.target;f.removeEventListener("dispose",l);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function w_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&es("WebGLRenderer: "+i+" extension not supported."),r}}}function T_(n,t,e,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const f=s.get(h);f&&(t.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)t.update(h[f],n.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,g=d.attributes.position;let S=0;if(g===void 0)return;if(f!==null){const b=f.array;S=f.version;for(let w=0,x=b.length;w<x;w+=3){const _=b[w+0],M=b[w+1],R=b[w+2];h.push(_,M,M,R,R,_)}}else{const b=g.array;S=g.version;for(let w=0,x=b.length/3-1;w<x;w+=3){const _=w+0,M=w+1,R=w+2;h.push(_,M,M,R,R,_)}}const m=new(g.count>=65535?hd:ud)(h,1);m.version=S;const p=s.get(d);p&&t.remove(p),s.set(d,m)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function A_(n,t,e){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,h){n.drawElements(i,h,s,d*o),e.update(h,i,1)}function l(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,s,d*o,f),e.update(h,i,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,f);let S=0;for(let m=0;m<f;m++)S+=h[m];e.update(S,i,1)}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function R_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:ie("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function C_(n,t,e){const i=new WeakMap,r=new Le;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let T=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let w=0;f===!0&&(w=1),g===!0&&(w=2),S===!0&&(w=3);let x=a.attributes.position.count*w,_=1;x>t.maxTextureSize&&(_=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const M=new Float32Array(x*_*4*d),R=new ad(M,x,_,d);R.type=hi,R.needsUpdate=!0;const v=w*4;for(let D=0;D<d;D++){const L=m[D],O=p[D],k=b[D],I=x*_*4*D;for(let G=0;G<L.count;G++){const $=G*v;f===!0&&(r.fromBufferAttribute(L,G),M[I+$+0]=r.x,M[I+$+1]=r.y,M[I+$+2]=r.z,M[I+$+3]=0),g===!0&&(r.fromBufferAttribute(O,G),M[I+$+4]=r.x,M[I+$+5]=r.y,M[I+$+6]=r.z,M[I+$+7]=0),S===!0&&(r.fromBufferAttribute(k,G),M[I+$+8]=r.x,M[I+$+9]=r.y,M[I+$+10]=r.z,M[I+$+11]=k.itemSize===4?r.w:1)}}h={count:d,texture:R,size:new pt(x,_)},i.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let S=0;S<l.length;S++)f+=l[S];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function P_(n,t,e,i,r){let s=new WeakMap;function o(l){const u=r.render.frame,d=l.geometry,h=t.get(l,d);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function a(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const D_={[Xh]:"LINEAR_TONE_MAPPING",[$h]:"REINHARD_TONE_MAPPING",[Yh]:"CINEON_TONE_MAPPING",[Cc]:"ACES_FILMIC_TONE_MAPPING",[Kh]:"AGX_TONE_MAPPING",[Zh]:"NEUTRAL_TONE_MAPPING",[qh]:"CUSTOM_TONE_MAPPING"};function L_(n,t,e,i,r,s){const o=new jn(t,e,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null;const l=new Oe;l.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new se([0,2,0,0,2,0],2));const u=new xm({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ot(l,u),h=new Ma(-1,1,1,-1,0,1);let f=null,g=null,S=!1,m,p=null,b=[],w=!1;this.setSize=function(x,_){o.setSize(x,_),a!==null&&a.setSize(x,_),c!==null&&c.setSize(x,_);for(let M=0;M<b.length;M++){const R=b[M];R.setSize&&R.setSize(x,_)}},this.setEffects=function(x){b=x,w=b.length>0&&b[0].isRenderPass===!0;const _=o.width,M=o.height;b.length>0&&a===null&&(a=new jn(_,M,{type:_i,depthBuffer:!1,stencilBuffer:!1}),c=new jn(_,M,{type:_i,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<b.length;R++){const v=b[R];v.setSize&&v.setSize(_,M)}},this.begin=function(x,_){if(S||x.toneMapping===pi&&b.length===0)return!1;if(p=_,_!==null){const M=_.width,R=_.height;(o.width!==M||o.height!==R)&&this.setSize(M,R)}return w===!1&&x.setRenderTarget(o),m=x.toneMapping,x.toneMapping=pi,!0},this.hasRenderPass=function(){return w},this.end=function(x,_){x.toneMapping=m,S=!0;let M=o,R=a;for(let v=0;v<b.length;v++){const T=b[v];T.enabled!==!1&&(T.render(x,R,M,_),T.needsSwap!==!1&&(M=R,R=R===a?c:a))}if(f!==x.outputColorSpace||g!==x.toneMapping){f=x.outputColorSpace,g=x.toneMapping,u.defines={},jt.getTransfer(f)===de&&(u.defines.SRGB_TRANSFER="");const v=D_[g];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,x.setRenderTarget(p),x.render(d,h),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const Td=new cn,hc=new Ks(1,1),Ad=new ad,Rd=new Cp,Cd=new pd,ch=[],uh=[],hh=new Float32Array(16),dh=new Float32Array(9),fh=new Float32Array(4);function xs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=ch[r];if(s===void 0&&(s=new Float32Array(r),ch[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function qe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ke(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Sa(n,t){let e=uh[t];e===void 0&&(e=new Int32Array(t),uh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function I_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function N_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2fv(this.addr,t),Ke(e,t)}}function U_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;n.uniform3fv(this.addr,t),Ke(e,t)}}function F_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4fv(this.addr,t),Ke(e,t)}}function O_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(qe(e,i))return;fh.set(i),n.uniformMatrix2fv(this.addr,!1,fh),Ke(e,i)}}function B_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(qe(e,i))return;dh.set(i),n.uniformMatrix3fv(this.addr,!1,dh),Ke(e,i)}}function z_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(qe(e,i))return;hh.set(i),n.uniformMatrix4fv(this.addr,!1,hh),Ke(e,i)}}function k_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function G_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2iv(this.addr,t),Ke(e,t)}}function H_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3iv(this.addr,t),Ke(e,t)}}function V_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4iv(this.addr,t),Ke(e,t)}}function W_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function X_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2uiv(this.addr,t),Ke(e,t)}}function $_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3uiv(this.addr,t),Ke(e,t)}}function Y_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4uiv(this.addr,t),Ke(e,t)}}function q_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(hc.compareFunction=e.isReversedDepthBuffer()?Oc:Fc,s=hc):s=Td,e.setTexture2D(t||s,r)}function K_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Rd,r)}function Z_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Cd,r)}function J_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Ad,r)}function Q_(n){switch(n){case 5126:return I_;case 35664:return N_;case 35665:return U_;case 35666:return F_;case 35674:return O_;case 35675:return B_;case 35676:return z_;case 5124:case 35670:return k_;case 35667:case 35671:return G_;case 35668:case 35672:return H_;case 35669:case 35673:return V_;case 5125:return W_;case 36294:return X_;case 36295:return $_;case 36296:return Y_;case 35678:case 36198:case 36298:case 36306:case 35682:return q_;case 35679:case 36299:case 36307:return K_;case 35680:case 36300:case 36308:case 36293:return Z_;case 36289:case 36303:case 36311:case 36292:return J_}}function j_(n,t){n.uniform1fv(this.addr,t)}function tv(n,t){const e=xs(t,this.size,2);n.uniform2fv(this.addr,e)}function ev(n,t){const e=xs(t,this.size,3);n.uniform3fv(this.addr,e)}function nv(n,t){const e=xs(t,this.size,4);n.uniform4fv(this.addr,e)}function iv(n,t){const e=xs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function rv(n,t){const e=xs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function sv(n,t){const e=xs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function ov(n,t){n.uniform1iv(this.addr,t)}function av(n,t){n.uniform2iv(this.addr,t)}function lv(n,t){n.uniform3iv(this.addr,t)}function cv(n,t){n.uniform4iv(this.addr,t)}function uv(n,t){n.uniform1uiv(this.addr,t)}function hv(n,t){n.uniform2uiv(this.addr,t)}function dv(n,t){n.uniform3uiv(this.addr,t)}function fv(n,t){n.uniform4uiv(this.addr,t)}function pv(n,t,e){const i=this.cache,r=t.length,s=Sa(e,r);qe(i,s)||(n.uniform1iv(this.addr,s),Ke(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=hc:o=Td;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function mv(n,t,e){const i=this.cache,r=t.length,s=Sa(e,r);qe(i,s)||(n.uniform1iv(this.addr,s),Ke(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Rd,s[o])}function gv(n,t,e){const i=this.cache,r=t.length,s=Sa(e,r);qe(i,s)||(n.uniform1iv(this.addr,s),Ke(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Cd,s[o])}function _v(n,t,e){const i=this.cache,r=t.length,s=Sa(e,r);qe(i,s)||(n.uniform1iv(this.addr,s),Ke(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Ad,s[o])}function vv(n){switch(n){case 5126:return j_;case 35664:return tv;case 35665:return ev;case 35666:return nv;case 35674:return iv;case 35675:return rv;case 35676:return sv;case 5124:case 35670:return ov;case 35667:case 35671:return av;case 35668:case 35672:return lv;case 35669:case 35673:return cv;case 5125:return uv;case 36294:return hv;case 36295:return dv;case 36296:return fv;case 35678:case 36198:case 36298:case 36306:case 35682:return pv;case 35679:case 36299:case 36307:return mv;case 35680:case 36300:case 36308:case 36293:return gv;case 36289:case 36303:case 36311:case 36292:return _v}}class xv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Q_(e.type)}}class Mv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vv(e.type)}}class yv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const dl=/(\w+)(\])?(\[|\.)?/g;function ph(n,t){n.seq.push(t),n.map[t.id]=t}function Sv(n,t,e){const i=n.name,r=i.length;for(dl.lastIndex=0;;){const s=dl.exec(i),o=dl.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){ph(e,l===void 0?new xv(a,n,t):new Mv(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new yv(a),ph(e,d)),e=d}}}class Yo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);Sv(a,c,this)}const r=[],s=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function mh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const bv=37297;let Ev=0;function wv(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const gh=new zt;function Tv(n){jt._getMatrix(gh,jt.workingColorSpace,n);const t=`mat3( ${gh.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(n)){case ta:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function _h(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+wv(n.getShaderSource(t),a)}else return s}function Av(n,t){const e=Tv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Rv={[Xh]:"Linear",[$h]:"Reinhard",[Yh]:"Cineon",[Cc]:"ACESFilmic",[Kh]:"AgX",[Zh]:"Neutral",[qh]:"Custom"};function Cv(n,t){const e=Rv[t];return e===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Bo=new A;function Pv(){jt.getLuminanceCoefficients(Bo);const n=Bo.x.toFixed(4),t=Bo.y.toFixed(4),e=Bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function Lv(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Iv(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ns(n){return n!==""}function vh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Nv=/^[ \t]*#include +<([\w\d./]+)>/gm;function dc(n){return n.replace(Nv,Fv)}const Uv=new Map;function Fv(n,t){let e=Wt[t];if(e===void 0){const i=Uv.get(t);if(i!==void 0)e=Wt[i],Nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return dc(e)}const Ov=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mh(n){return n.replace(Ov,Bv)}function Bv(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}const zv={[Ho]:"SHADOWMAP_TYPE_PCF",[Is]:"SHADOWMAP_TYPE_VSM"};function kv(n){return zv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Gv={[Mr]:"ENVMAP_TYPE_CUBE",[us]:"ENVMAP_TYPE_CUBE",[va]:"ENVMAP_TYPE_CUBE_UV"};function Hv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Gv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Vv={[us]:"ENVMAP_MODE_REFRACTION"};function Wv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Vv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Xv={[Wh]:"ENVMAP_BLENDING_MULTIPLY",[$f]:"ENVMAP_BLENDING_MIX",[Yf]:"ENVMAP_BLENDING_ADD"};function $v(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Xv[n.combine]||"ENVMAP_BLENDING_NONE"}function Yv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function qv(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=kv(e),l=Hv(e),u=Wv(e),d=$v(e),h=Yv(e),f=Dv(e),g=Lv(s),S=r.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ns).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ns).join(`
`),p.length>0&&(p+=`
`)):(m=[yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),p=[yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pi?"#define TONE_MAPPING":"",e.toneMapping!==pi?Wt.tonemapping_pars_fragment:"",e.toneMapping!==pi?Cv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,Av("linearToOutputTexel",e.outputColorSpace),Pv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ns).join(`
`)),o=dc(o),o=vh(o,e),o=xh(o,e),a=dc(a),a=vh(a,e),a=xh(a,e),o=Mh(o),a=Mh(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=b+m+o,x=b+p+a,_=mh(r,r.VERTEX_SHADER,w),M=mh(r,r.FRAGMENT_SHADER,x);r.attachShader(S,_),r.attachShader(S,M),e.index0AttributeName!==void 0?r.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function R(L){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(S)||"",k=r.getShaderInfoLog(_)||"",I=r.getShaderInfoLog(M)||"",G=O.trim(),$=k.trim(),K=I.trim();let nt=!0,Y=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(nt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,_,M);else{const tt=_h(r,_,"vertex"),rt=_h(r,M,"fragment");ie("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+tt+`
`+rt)}else G!==""?Nt("WebGLProgram: Program Info Log:",G):($===""||K==="")&&(Y=!1);Y&&(L.diagnostics={runnable:nt,programLog:G,vertexShader:{log:$,prefix:m},fragmentShader:{log:K,prefix:p}})}r.deleteShader(_),r.deleteShader(M),v=new Yo(r,S),T=Iv(r,S)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(S,bv)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ev++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=_,this.fragmentShader=M,this}let Kv=0;class Zv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Jv(t),e.set(t,i)),i}}class Jv{constructor(t){this.id=Kv++,this.code=t,this.usedTimes=0}}function Qv(n){return n===yr||n===Jo||n===Qo}function jv(n,t,e,i,r,s){const o=new ld,a=new Zv,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function S(v,T,D,L,O,k){const I=L.fog,G=O.geometry,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,K=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,nt=t.get(v.envMap||$,K),Y=nt&&nt.mapping===va?nt.image.height:null,tt=f[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&Nt("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const rt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,lt=rt!==void 0?rt.length:0;let bt=0;G.morphAttributes.position!==void 0&&(bt=1),G.morphAttributes.normal!==void 0&&(bt=2),G.morphAttributes.color!==void 0&&(bt=3);let Me,ee,oe,Z;if(tt){const Se=ci[tt];Me=Se.vertexShader,ee=Se.fragmentShader}else{Me=v.vertexShader,ee=v.fragmentShader;const Se=a.getVertexShaderStage(v),ae=a.getFragmentShaderStage(v);a.update(v,Se,ae),oe=Se.id,Z=ae.id}const it=n.getRenderTarget(),Et=n.state.buffers.depth.getReversed(),Bt=O.isInstancedMesh===!0,yt=O.isBatchedMesh===!0,Yt=!!v.map,Xe=!!v.matcap,Kt=!!nt,re=!!v.aoMap,ye=!!v.lightMap,Jt=!!v.bumpMap&&v.wireframe===!1,Ce=!!v.normalMap,Ze=!!v.displacementMap,vn=!!v.emissiveMap,De=!!v.metalnessMap,Be=!!v.roughnessMap,F=v.anisotropy>0,nn=v.clearcoat>0,he=v.dispersion>0,C=v.retroreflectivity>0,y=v.iridescence>0,z=v.sheen>0,W=v.transmission>0,q=F&&!!v.anisotropyMap,at=nn&&!!v.clearcoatMap,ct=nn&&!!v.clearcoatNormalMap,J=nn&&!!v.clearcoatRoughnessMap,et=y&&!!v.iridescenceMap,ut=y&&!!v.iridescenceThicknessMap,Ct=z&&!!v.sheenColorMap,mt=z&&!!v.sheenRoughnessMap,ht=!!v.specularMap,Pt=!!v.specularColorMap,It=!!v.specularIntensityMap,Ht=W&&!!v.transmissionMap,U=W&&!!v.thicknessMap,dt=!!v.gradientMap,j=!!v.alphaMap,ft=v.alphaTest>0,xt=!!v.alphaHash,st=!!v.extensions;let Dt=pi;v.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Dt=n.toneMapping);const At={shaderID:tt,shaderType:v.type,shaderName:v.name,vertexShader:Me,fragmentShader:ee,defines:v.defines,customVertexShaderID:oe,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:yt,batchingColor:yt&&O._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&O.instanceColor!==null,instancingMorph:Bt&&O.morphTexture!==null,outputColorSpace:it===null?n.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:jt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Yt,matcap:Xe,envMap:Kt,envMapMode:Kt&&nt.mapping,envMapCubeUVHeight:Y,aoMap:re,lightMap:ye,bumpMap:Jt,normalMap:Ce,displacementMap:Ze,emissiveMap:vn,normalMapObjectSpace:Ce&&v.normalMapType===Zf,normalMapTangentSpace:Ce&&v.normalMapType===uc,packedNormalMap:Ce&&v.normalMapType===uc&&Qv(v.normalMap.format),metalnessMap:De,roughnessMap:Be,anisotropy:F,anisotropyMap:q,clearcoat:nn,clearcoatMap:at,clearcoatNormalMap:ct,clearcoatRoughnessMap:J,dispersion:he,retroreflection:C,iridescence:y,iridescenceMap:et,iridescenceThicknessMap:ut,sheen:z,sheenColorMap:Ct,sheenRoughnessMap:mt,specularMap:ht,specularColorMap:Pt,specularIntensityMap:It,transmission:W,transmissionMap:Ht,thicknessMap:U,gradientMap:dt,opaque:v.transparent===!1&&v.blending===Fs&&v.alphaToCoverage===!1,alphaMap:j,alphaTest:ft,alphaHash:xt,combine:v.combine,mapUv:Yt&&g(v.map.channel),aoMapUv:re&&g(v.aoMap.channel),lightMapUv:ye&&g(v.lightMap.channel),bumpMapUv:Jt&&g(v.bumpMap.channel),normalMapUv:Ce&&g(v.normalMap.channel),displacementMapUv:Ze&&g(v.displacementMap.channel),emissiveMapUv:vn&&g(v.emissiveMap.channel),metalnessMapUv:De&&g(v.metalnessMap.channel),roughnessMapUv:Be&&g(v.roughnessMap.channel),anisotropyMapUv:q&&g(v.anisotropyMap.channel),clearcoatMapUv:at&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ct&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:mt&&g(v.sheenRoughnessMap.channel),specularMapUv:ht&&g(v.specularMap.channel),specularColorMapUv:Pt&&g(v.specularColorMap.channel),specularIntensityMapUv:It&&g(v.specularIntensityMap.channel),transmissionMapUv:Ht&&g(v.transmissionMap.channel),thicknessMapUv:U&&g(v.thicknessMap.channel),alphaMapUv:j&&g(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ce||F),vertexNormals:!!G.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(Yt||j),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||G.attributes.normal===void 0&&Ce===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Et,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:bt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Yt&&v.map.isVideoTexture===!0&&jt.getTransfer(v.map.colorSpace)===de,decodeVideoTextureEmissive:vn&&v.emissiveMap.isVideoTexture===!0&&jt.getTransfer(v.emissiveMap.colorSpace)===de,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===gn,flipSided:v.side===En,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:st&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&v.extensions.multiDraw===!0||yt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function m(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)T.push(D),T.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(p(T,v),b(T,v),T.push(n.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function p(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function b(v,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function w(v){const T=f[v.type];let D;if(T){const L=ci[T];D=gm.clone(L.uniforms)}else D=v.uniforms;return D}function x(v,T){let D=u.get(T);return D!==void 0?++D.usedTimes:(D=new qv(n,T,v,r),l.push(D),u.set(T,D)),D}function _(v){if(--v.usedTimes===0){const T=l.indexOf(v);l[T]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function M(v){a.remove(v)}function R(){a.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:w,acquireProgram:x,releaseProgram:_,releaseShaderCache:M,programs:l,dispose:R}}function tx(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function ex(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Sh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function bh(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,S,m,p){let b=n[t];return b===void 0?(b={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:p},n[t]=b):(b.id=h.id,b.object=h,b.geometry=f,b.material=g,b.materialVariant=o(h),b.groupOrder=S,b.renderOrder=h.renderOrder,b.z=m,b.group=p),t++,b}function c(h,f,g,S,m,p,b){b.reversedDepth===!0&&(m=-m);const w=a(h,f,g,S,m,p);g.transmission>0?i.push(w):g.transparent===!0?r.push(w):e.push(w)}function l(h,f,g,S,m,p){const b=a(h,f,g,S,m,p);g.transmission>0?i.unshift(b):g.transparent===!0?r.unshift(b):e.unshift(b)}function u(h,f){e.length>1&&e.sort(h||ex),i.length>1&&i.sort(f||Sh),r.length>1&&r.sort(f||Sh)}function d(){for(let h=t,f=n.length;h<f;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:d,sort:u}}function nx(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new bh,n.set(i,[o])):r>=s.length?(o=new bh,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function ix(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new A,color:new $t};break;case"SpotLight":e={position:new A,direction:new A,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new A,halfWidth:new A,halfHeight:new A};break}return n[t.id]=e,e}}}function rx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let sx=0;function ox(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ax(n){const t=new ix,e=rx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new A);const r=new A,s=new Re,o=new Re;function a(l){let u=0,d=0,h=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let f=0,g=0,S=0,m=0,p=0,b=0,w=0,x=0,_=0,M=0,R=0,v=0,T=0,D=0;l.sort(ox);for(let O=0,k=l.length;O<k;O++){const I=l[O],G=I.color,$=I.intensity,K=I.distance;let nt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===yr?nt=I.shadow.map.texture:nt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=G.r*$,d+=G.g*$,h+=G.b*$;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(I.sh.coefficients[Y],$);D++}else if(I.isSunLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const tt=I.shadow,rt=e.get(I);rt.shadowIntensity=tt.intensity,rt.shadowBias=tt.bias,rt.shadowNormalBias=tt.normalBias,rt.shadowRadius=tt.radius,rt.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),i.sunShadow[g]=rt,i.sunShadowMap[g]=nt;const lt=tt.getViewportCount();for(let bt=0;bt<lt;bt++)i.sunShadowMatrix[S+bt]=tt.getMatrix(bt),i.sunShadowCascade[S+bt]=tt._cascadeData[bt];S+=lt,g++}i.sun[f]=Y,f++}else if(I.isDirectionalLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const tt=I.shadow,rt=e.get(I);rt.shadowIntensity=tt.intensity,rt.shadowBias=tt.bias,rt.shadowNormalBias=tt.normalBias,rt.shadowRadius=tt.radius,rt.shadowMapSize=tt.mapSize,i.directionalShadow[m]=rt,i.directionalShadowMap[m]=nt,i.directionalShadowMatrix[m]=I.shadow.matrix,_++}i.directional[m]=Y,m++}else if(I.isSpotLight){const Y=t.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(G).multiplyScalar($),Y.distance=K,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,i.spot[b]=Y;const tt=I.shadow;if(I.map&&(i.spotLightMap[v]=I.map,v++,tt.updateMatrices(I),I.castShadow&&T++),i.spotLightMatrix[b]=tt.matrix,I.castShadow){const rt=e.get(I);rt.shadowIntensity=tt.intensity,rt.shadowBias=tt.bias,rt.shadowNormalBias=tt.normalBias,rt.shadowRadius=tt.radius,rt.shadowMapSize=tt.mapSize,i.spotShadow[b]=rt,i.spotShadowMap[b]=nt,R++}b++}else if(I.isRectAreaLight){const Y=t.get(I);Y.color.copy(G).multiplyScalar($),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),i.rectArea[w]=Y,w++}else if(I.isPointLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const tt=I.shadow,rt=e.get(I);rt.shadowIntensity=tt.intensity,rt.shadowBias=tt.bias,rt.shadowNormalBias=tt.normalBias,rt.shadowRadius=tt.radius,rt.shadowMapSize=tt.mapSize,rt.shadowCameraNear=tt.camera.near,rt.shadowCameraFar=tt.camera.far,i.pointShadow[p]=rt,i.pointShadowMap[p]=nt,i.pointShadowMatrix[p]=I.shadow.matrix,M++}i.point[p]=Y,p++}else if(I.isHemisphereLight){const Y=t.get(I);Y.skyColor.copy(I.color).multiplyScalar($),Y.groundColor.copy(I.groundColor).multiplyScalar($),i.hemi[x]=Y,x++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const L=i.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==b||L.rectAreaLength!==w||L.hemiLength!==x||L.numSunShadows!==g||L.numDirectionalShadows!==_||L.numPointShadows!==M||L.numSpotShadows!==R||L.numSpotMaps!==v||L.numLightProbes!==D)&&(i.sun.length=f,i.directional.length=m,i.spot.length=b,i.rectArea.length=w,i.point.length=p,i.hemi.length=x,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.directionalShadowMatrix.length=_,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+v-T,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=D,L.sunLength=f,L.directionalLength=m,L.pointLength=p,L.spotLength=b,L.rectAreaLength=w,L.hemiLength=x,L.numSunShadows=g,L.numDirectionalShadows=_,L.numPointShadows=M,L.numSpotShadows=R,L.numSpotMaps=v,L.numLightProbes=D,i.version=sx++)}function c(l,u){let d=0,h=0,f=0,g=0,S=0,m=0;const p=u.matrixWorldInverse;for(let b=0,w=l.length;b<w;b++){const x=l[b];if(x.isSunLight){const _=i.sun[d];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(p),d++}else if(x.isDirectionalLight){const _=i.directional[h];_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(p),h++}else if(x.isSpotLight){const _=i.spot[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(p),g++}else if(x.isRectAreaLight){const _=i.rectArea[S];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),S++}else if(x.isPointLight){const _=i.point[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const _=i.hemi[m];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:i}}function Eh(n){const t=new ax(n),e=[],i=[],r=[];function s(h){d.camera=h,e.length=0,i.length=0,r.length=0}function o(h){e.push(h)}function a(h){i.push(h)}function c(h){r.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function lx(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Eh(n),t.set(r,[a])):s>=o.length?(a=new Eh(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const cx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ux=`uniform sampler2D shadow_pass;
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
}`,hx=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],dx=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],wh=new Re,Ps=new A,fl=new A;function fx(n,t,e){let i=new Hc;const r=new pt,s=new pt,o=new Le,a=new Mm,c=new ym,l={},u=e.maxTextureSize,d={[xr]:En,[En]:xr,[gn]:gn},h=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:cx,fragmentShader:ux}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Oe;g.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Ot(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ho;let p=this.type;this.render=function(M,R,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===Gh&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ho);const T=n.getRenderTarget(),D=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Li),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=p!==this.type;k&&R.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(G=>G.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,G=M.length;I<G;I++){const $=M[I],K=$.shadow;if(K===void 0){Nt("WebGLShadowMap:",$,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const nt=K.getFrameExtents();r.multiply(nt),s.copy(K.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/nt.x),r.x=s.x*nt.x,K.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/nt.y),r.y=s.y*nt.y,K.mapSize.y=s.y));const Y=n.state.buffers.depth.getReversed();if(K.camera._reversedDepth=Y,K.map===null||k===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Is){if($.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new jn(r.x,r.y,{format:yr,type:_i,minFilter:ln,magFilter:ln,generateMipmaps:!1}),K.map.texture.name=$.name+".shadowMap",K.map.depthTexture=new Ks(r.x,r.y,hi),K.map.depthTexture.name=$.name+".shadowMapDepth",K.map.depthTexture.format=Fi,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=en,K.map.depthTexture.magFilter=en}else $.isPointLight?(K.map=new wd(r.x),K.map.depthTexture=new Qp(r.x,gi)):(K.map=new jn(r.x,r.y),K.map.depthTexture=new Ks(r.x,r.y,gi)),K.map.depthTexture.name=$.name+".shadowMap",K.map.depthTexture.format=Fi,this.type===Ho?(K.map.depthTexture.compareFunction=Y?Oc:Fc,K.map.depthTexture.minFilter=ln,K.map.depthTexture.magFilter=ln):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=en,K.map.depthTexture.magFilter=en);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==r.x||K.map.height!==r.y)&&K.map.setSize(r.x,r.y);const tt=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();$.isPointLight!==!0&&K.updateMatrices($,v);for(let rt=0;rt<tt;rt++){const lt=K.getCamera(rt);if($.isPointLight){const bt=K.camera,Me=K.matrix,ee=$.distance||bt.far;ee!==bt.far&&(bt.far=ee,bt.updateProjectionMatrix()),Ps.setFromMatrixPosition($.matrixWorld),bt.position.copy(Ps),fl.copy(bt.position),fl.add(hx[rt]),bt.up.copy(dx[rt]),bt.lookAt(fl),bt.updateMatrixWorld(),Me.makeTranslation(-Ps.x,-Ps.y,-Ps.z),wh.multiplyMatrices(bt.projectionMatrix,bt.matrixWorldInverse),K._frustum.setFromProjectionMatrix(wh,bt.coordinateSystem,bt.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)n.setRenderTarget(K.map,rt),n.clear();else{rt===0&&(n.setRenderTarget(K.map),n.clear());const bt=K.getViewport(rt);o.set(s.x*bt.x,s.y*bt.y,s.x*bt.z,s.y*bt.w),O.viewport(o)}i=K.getFrustum(rt),x(R,v,lt,$,this.type)}K.isPointLightShadow!==!0&&this.type===Is&&b(K,v),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,D,L)};function b(M,R){const v=t.update(S);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new jn(r.x,r.y,{format:yr,type:_i}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value.set(M.map.width,M.map.height),h.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(R,null,v,h,S,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(R,null,v,f,S,null)}function w(M,R,v,T){let D=null;const L=v.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(L!==void 0)D=L;else if(D=v.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=D.uuid,k=R.uuid;let I=l[O];I===void 0&&(I={},l[O]=I);let G=I[k];G===void 0&&(G=D.clone(),I[k]=G,R.addEventListener("dispose",_)),D=G}if(D.visible=R.visible,D.wireframe=R.wireframe,T===Is?D.side=R.shadowSide!==null?R.shadowSide:R.side:D.side=R.shadowSide!==null?R.shadowSide:d[R.side],D.alphaMap=R.alphaMap,D.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,D.map=R.map,D.clipShadows=R.clipShadows,D.clippingPlanes=R.clippingPlanes,D.clipIntersection=R.clipIntersection,D.displacementMap=R.displacementMap,D.displacementScale=R.displacementScale,D.displacementBias=R.displacementBias,D.wireframeLinewidth=R.wireframeLinewidth,D.linewidth=R.linewidth,v.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const O=n.properties.get(D);O.light=v}return D}function x(M,R,v,T,D){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&D===Is)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,M.matrixWorld);const k=t.update(M),I=M.material;if(Array.isArray(I)){const G=k.groups;for(let $=0,K=G.length;$<K;$++){const nt=G[$],Y=I[nt.materialIndex];if(Y&&Y.visible){const tt=w(M,Y,T,D);M.onBeforeShadow(n,M,R,v,k,tt,nt),n.renderBufferDirect(v,null,k,tt,M,nt),M.onAfterShadow(n,M,R,v,k,tt,nt)}}}else if(I.visible){const G=w(M,I,T,D);M.onBeforeShadow(n,M,R,v,k,G,null),n.renderBufferDirect(v,null,k,G,M,null),M.onAfterShadow(n,M,R,v,k,G,null)}}const O=M.children;for(let k=0,I=O.length;k<I;k++)x(O[k],R,v,T,D)}function _(M){M.target.removeEventListener("dispose",_);for(const v in l){const T=l[v],D=M.target.uuid;D in T&&(T[D].dispose(),delete T[D])}}}function px(n,t){function e(){let U=!1;const dt=new Le;let j=null;const ft=new Le(0,0,0,0);return{setMask:function(xt){j!==xt&&!U&&(n.colorMask(xt,xt,xt,xt),j=xt)},setLocked:function(xt){U=xt},setClear:function(xt,st,Dt,At,Se){Se===!0&&(xt*=At,st*=At,Dt*=At),dt.set(xt,st,Dt,At),ft.equals(dt)===!1&&(n.clearColor(xt,st,Dt,At),ft.copy(dt))},reset:function(){U=!1,j=null,ft.set(-1,0,0,0)}}}function i(){let U=!1,dt=!1,j=null,ft=null,xt=null;return{setReversed:function(st){if(dt!==st){const Dt=t.get("EXT_clip_control");st?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),dt=st;const At=xt;xt=null,this.setClear(At)}},getReversed:function(){return dt},setTest:function(st){st?it(n.DEPTH_TEST):Et(n.DEPTH_TEST)},setMask:function(st){j!==st&&!U&&(n.depthMask(st),j=st)},setFunc:function(st){if(dt&&(st=ap[st]),ft!==st){switch(st){case wl:n.depthFunc(n.NEVER);break;case Tl:n.depthFunc(n.ALWAYS);break;case Al:n.depthFunc(n.LESS);break;case Ws:n.depthFunc(n.LEQUAL);break;case Rl:n.depthFunc(n.EQUAL);break;case Cl:n.depthFunc(n.GEQUAL);break;case Pl:n.depthFunc(n.GREATER);break;case Dl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ft=st}},setLocked:function(st){U=st},setClear:function(st){xt!==st&&(xt=st,dt&&(st=1-st),n.clearDepth(st))},reset:function(){U=!1,j=null,ft=null,xt=null,dt=!1}}}function r(){let U=!1,dt=null,j=null,ft=null,xt=null,st=null,Dt=null,At=null,Se=null;return{setTest:function(ae){U||(ae?it(n.STENCIL_TEST):Et(n.STENCIL_TEST))},setMask:function(ae){dt!==ae&&!U&&(n.stencilMask(ae),dt=ae)},setFunc:function(ae,kn,ri){(j!==ae||ft!==kn||xt!==ri)&&(n.stencilFunc(ae,kn,ri),j=ae,ft=kn,xt=ri)},setOp:function(ae,kn,ri){(st!==ae||Dt!==kn||At!==ri)&&(n.stencilOp(ae,kn,ri),st=ae,Dt=kn,At=ri)},setLocked:function(ae){U=ae},setClear:function(ae){Se!==ae&&(n.clearStencil(ae),Se=ae)},reset:function(){U=!1,dt=null,j=null,ft=null,xt=null,st=null,Dt=null,At=null,Se=null}}}const s=new e,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},d={},h={},f=new WeakMap,g=[],S=null,m=!1,p=null,b=null,w=null,x=null,_=null,M=null,R=null,v=new $t(0,0,0),T=0,D=!1,L=null,O=null,k=null,I=null,G=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,nt=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),K=nt>=1):Y.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),K=nt>=2);let tt=null,rt={};const lt=n.getParameter(n.SCISSOR_BOX),bt=n.getParameter(n.VIEWPORT),Me=new Le().fromArray(lt),ee=new Le().fromArray(bt);function oe(U,dt,j,ft){const xt=new Uint8Array(4),st=n.createTexture();n.bindTexture(U,st),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Dt=0;Dt<j;Dt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(dt,0,n.RGBA,1,1,ft,0,n.RGBA,n.UNSIGNED_BYTE,xt):n.texImage2D(dt+Dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xt);return st}const Z={};Z[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(n.DEPTH_TEST),o.setFunc(Ws),Jt(!1),Ce(Mu),it(n.CULL_FACE),re(Li);function it(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function Et(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Bt(U,dt){return h[U]!==dt?(n.bindFramebuffer(U,dt),h[U]=dt,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=dt),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=dt),!0):!1}function yt(U,dt){let j=g,ft=!1;if(U){j=f.get(dt),j===void 0&&(j=[],f.set(dt,j));const xt=U.textures;if(j.length!==xt.length||j[0]!==n.COLOR_ATTACHMENT0){for(let st=0,Dt=xt.length;st<Dt;st++)j[st]=n.COLOR_ATTACHMENT0+st;j.length=xt.length,ft=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,ft=!0);ft&&n.drawBuffers(j)}function Yt(U){return S!==U?(n.useProgram(U),S=U,!0):!1}const Xe={[Zr]:n.FUNC_ADD,[Cf]:n.FUNC_SUBTRACT,[Pf]:n.FUNC_REVERSE_SUBTRACT};Xe[Df]=n.MIN,Xe[Lf]=n.MAX;const Kt={[If]:n.ZERO,[Nf]:n.ONE,[Uf]:n.SRC_COLOR,[Hh]:n.SRC_ALPHA,[Gf]:n.SRC_ALPHA_SATURATE,[zf]:n.DST_COLOR,[Of]:n.DST_ALPHA,[Ff]:n.ONE_MINUS_SRC_COLOR,[Vh]:n.ONE_MINUS_SRC_ALPHA,[kf]:n.ONE_MINUS_DST_COLOR,[Bf]:n.ONE_MINUS_DST_ALPHA,[Hf]:n.CONSTANT_COLOR,[Vf]:n.ONE_MINUS_CONSTANT_COLOR,[Wf]:n.CONSTANT_ALPHA,[Xf]:n.ONE_MINUS_CONSTANT_ALPHA};function re(U,dt,j,ft,xt,st,Dt,At,Se,ae){if(U===Li){m===!0&&(Et(n.BLEND),m=!1);return}if(m===!1&&(it(n.BLEND),m=!0),U!==Rf){if(U!==p||ae!==D){if((b!==Zr||_!==Zr)&&(n.blendEquation(n.FUNC_ADD),b=Zr,_=Zr),ae)switch(U){case Fs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yu:n.blendFunc(n.ONE,n.ONE);break;case Su:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ie("WebGLState: Invalid blending: ",U);break}else switch(U){case Fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Su:ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bu:ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ie("WebGLState: Invalid blending: ",U);break}w=null,x=null,M=null,R=null,v.set(0,0,0),T=0,p=U,D=ae}return}xt=xt||dt,st=st||j,Dt=Dt||ft,(dt!==b||xt!==_)&&(n.blendEquationSeparate(Xe[dt],Xe[xt]),b=dt,_=xt),(j!==w||ft!==x||st!==M||Dt!==R)&&(n.blendFuncSeparate(Kt[j],Kt[ft],Kt[st],Kt[Dt]),w=j,x=ft,M=st,R=Dt),(At.equals(v)===!1||Se!==T)&&(n.blendColor(At.r,At.g,At.b,Se),v.copy(At),T=Se),p=U,D=!1}function ye(U,dt){U.side===gn?Et(n.CULL_FACE):it(n.CULL_FACE);let j=U.side===En;dt&&(j=!j),Jt(j),U.blending===Fs&&U.transparent===!1?re(Li):re(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const ft=U.stencilWrite;a.setTest(ft),ft&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),vn(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?it(n.SAMPLE_ALPHA_TO_COVERAGE):Et(n.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(U){L!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),L=U)}function Ce(U){U!==Tf?(it(n.CULL_FACE),U!==O&&(U===Mu?n.cullFace(n.BACK):U===Af?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Et(n.CULL_FACE),O=U}function Ze(U){U!==k&&(K&&n.lineWidth(U),k=U)}function vn(U,dt,j){U?(it(n.POLYGON_OFFSET_FILL),(I!==dt||G!==j)&&(I=dt,G=j,o.getReversed()&&(dt=-dt),n.polygonOffset(dt,j))):Et(n.POLYGON_OFFSET_FILL)}function De(U){U?it(n.SCISSOR_TEST):Et(n.SCISSOR_TEST)}function Be(U){U===void 0&&(U=n.TEXTURE0+$-1),tt!==U&&(n.activeTexture(U),tt=U)}function F(U,dt,j){j===void 0&&(tt===null?j=n.TEXTURE0+$-1:j=tt);let ft=rt[j];ft===void 0&&(ft={type:void 0,texture:void 0},rt[j]=ft),(ft.type!==U||ft.texture!==dt)&&(tt!==j&&(n.activeTexture(j),tt=j),n.bindTexture(U,dt||Z[U]),ft.type=U,ft.texture=dt)}function nn(){const U=rt[tt];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function he(){try{n.compressedTexImage2D(...arguments)}catch(U){ie("WebGLState:",U)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(U){ie("WebGLState:",U)}}function y(){try{n.texSubImage2D(...arguments)}catch(U){ie("WebGLState:",U)}}function z(){try{n.texSubImage3D(...arguments)}catch(U){ie("WebGLState:",U)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(U){ie("WebGLState:",U)}}function q(){try{n.compressedTexSubImage3D(...arguments)}catch(U){ie("WebGLState:",U)}}function at(){try{n.texStorage2D(...arguments)}catch(U){ie("WebGLState:",U)}}function ct(){try{n.texStorage3D(...arguments)}catch(U){ie("WebGLState:",U)}}function J(){try{n.texImage2D(...arguments)}catch(U){ie("WebGLState:",U)}}function et(){try{n.texImage3D(...arguments)}catch(U){ie("WebGLState:",U)}}function ut(U){return d[U]!==void 0?d[U]:n.getParameter(U)}function Ct(U,dt){d[U]!==dt&&(n.pixelStorei(U,dt),d[U]=dt)}function mt(U){Me.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Me.copy(U))}function ht(U){ee.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ee.copy(U))}function Pt(U,dt){let j=l.get(dt);j===void 0&&(j=new WeakMap,l.set(dt,j));let ft=j.get(U);ft===void 0&&(ft=n.getUniformBlockIndex(dt,U.name),j.set(U,ft))}function It(U,dt){const ft=l.get(dt).get(U);c.get(dt)!==ft&&(n.uniformBlockBinding(dt,ft,U.__bindingPointIndex),c.set(dt,ft))}function Ht(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},tt=null,rt={},h={},f=new WeakMap,g=[],S=null,m=!1,p=null,b=null,w=null,x=null,_=null,M=null,R=null,v=new $t(0,0,0),T=0,D=!1,L=null,O=null,k=null,I=null,G=null,Me.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:it,disable:Et,bindFramebuffer:Bt,drawBuffers:yt,useProgram:Yt,setBlending:re,setMaterial:ye,setFlipSided:Jt,setCullFace:Ce,setLineWidth:Ze,setPolygonOffset:vn,setScissorTest:De,activeTexture:Be,bindTexture:F,unbindTexture:nn,compressedTexImage2D:he,compressedTexImage3D:C,texImage2D:J,texImage3D:et,pixelStorei:Ct,getParameter:ut,updateUBOMapping:Pt,uniformBlockBinding:It,texStorage2D:at,texStorage3D:ct,texSubImage2D:y,texSubImage3D:z,compressedTexSubImage2D:W,compressedTexSubImage3D:q,scissor:mt,viewport:ht,reset:Ht}}function mx(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pt,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(C,y){return g?new OffscreenCanvas(C,y):ea("canvas")}function m(C,y,z){let W=1;const q=he(C);if((q.width>z||q.height>z)&&(W=z/Math.max(q.width,q.height)),W<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const at=Math.floor(W*q.width),ct=Math.floor(W*q.height);h===void 0&&(h=S(at,ct));const J=y?S(at,ct):h;return J.width=at,J.height=ct,J.getContext("2d").drawImage(C,0,0,at,ct),Nt("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+at+"x"+ct+")."),J}else return"data"in C&&Nt("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),C;return C}function p(C){return C.generateMipmaps}function b(C){n.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(C,y,z,W,q,at=!1){if(C!==null){if(n[C]!==void 0)return n[C];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ct;W&&(ct=t.get("EXT_texture_norm16"),ct||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=y;if(y===n.RED&&(z===n.FLOAT&&(J=n.R32F),z===n.HALF_FLOAT&&(J=n.R16F),z===n.UNSIGNED_BYTE&&(J=n.R8),z===n.UNSIGNED_SHORT&&ct&&(J=ct.R16_EXT),z===n.SHORT&&ct&&(J=ct.R16_SNORM_EXT)),y===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.R8UI),z===n.UNSIGNED_SHORT&&(J=n.R16UI),z===n.UNSIGNED_INT&&(J=n.R32UI),z===n.BYTE&&(J=n.R8I),z===n.SHORT&&(J=n.R16I),z===n.INT&&(J=n.R32I)),y===n.RG&&(z===n.FLOAT&&(J=n.RG32F),z===n.HALF_FLOAT&&(J=n.RG16F),z===n.UNSIGNED_BYTE&&(J=n.RG8),z===n.UNSIGNED_SHORT&&ct&&(J=ct.RG16_EXT),z===n.SHORT&&ct&&(J=ct.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RG8UI),z===n.UNSIGNED_SHORT&&(J=n.RG16UI),z===n.UNSIGNED_INT&&(J=n.RG32UI),z===n.BYTE&&(J=n.RG8I),z===n.SHORT&&(J=n.RG16I),z===n.INT&&(J=n.RG32I)),y===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RGB8UI),z===n.UNSIGNED_SHORT&&(J=n.RGB16UI),z===n.UNSIGNED_INT&&(J=n.RGB32UI),z===n.BYTE&&(J=n.RGB8I),z===n.SHORT&&(J=n.RGB16I),z===n.INT&&(J=n.RGB32I)),y===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),z===n.UNSIGNED_INT&&(J=n.RGBA32UI),z===n.BYTE&&(J=n.RGBA8I),z===n.SHORT&&(J=n.RGBA16I),z===n.INT&&(J=n.RGBA32I)),y===n.RGB&&(z===n.UNSIGNED_SHORT&&ct&&(J=ct.RGB16_EXT),z===n.SHORT&&ct&&(J=ct.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),y===n.RGBA){const et=at?ta:jt.getTransfer(q);z===n.FLOAT&&(J=n.RGBA32F),z===n.HALF_FLOAT&&(J=n.RGBA16F),z===n.UNSIGNED_BYTE&&(J=et===de?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&ct&&(J=ct.RGBA16_EXT),z===n.SHORT&&ct&&(J=ct.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function _(C,y){let z;return C?y===null||y===gi||y===$s?z=n.DEPTH24_STENCIL8:y===hi?z=n.DEPTH32F_STENCIL8:y===Xs&&(z=n.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===gi||y===$s?z=n.DEPTH_COMPONENT24:y===hi?z=n.DEPTH_COMPONENT32F:y===Xs&&(z=n.DEPTH_COMPONENT16),z}function M(C,y){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==en&&C.minFilter!==ln?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function R(C){const y=C.target;y.removeEventListener("dispose",R),T(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&d.delete(y)}function v(C){const y=C.target;y.removeEventListener("dispose",v),L(y)}function T(C){const y=i.get(C);if(y.__webglInit===void 0)return;const z=C.source,W=f.get(z);if(W){const q=W[y.__cacheKey];q.usedTimes--,q.usedTimes===0&&D(C),Object.keys(W).length===0&&f.delete(z)}i.remove(C)}function D(C){const y=i.get(C);n.deleteTexture(y.__webglTexture);const z=C.source,W=f.get(z);delete W[y.__cacheKey],o.memory.textures--}function L(C){const y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(y.__webglFramebuffer[W]))for(let q=0;q<y.__webglFramebuffer[W].length;q++)n.deleteFramebuffer(y.__webglFramebuffer[W][q]);else n.deleteFramebuffer(y.__webglFramebuffer[W]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[W])}else{if(Array.isArray(y.__webglFramebuffer))for(let W=0;W<y.__webglFramebuffer.length;W++)n.deleteFramebuffer(y.__webglFramebuffer[W]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let W=0;W<y.__webglColorRenderbuffer.length;W++)y.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[W]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=C.textures;for(let W=0,q=z.length;W<q;W++){const at=i.get(z[W]);at.__webglTexture&&(n.deleteTexture(at.__webglTexture),o.memory.textures--),i.remove(z[W])}i.remove(C)}let O=0;function k(){O=0}function I(){return O}function G(C){O=C}function $(){const C=O;return C>=r.maxTextures&&Nt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures),O+=1,C}function K(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function nt(C,y){const z=i.get(C);if(C.isVideoTexture&&F(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){const W=C.image;if(W===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Et(z,C,y);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+y)}function Y(C,y){const z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Et(z,C,y);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+y)}function tt(C,y){const z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Et(z,C,y);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+y)}function rt(C,y){const z=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){Bt(z,C,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+y)}const lt={[Ll]:n.REPEAT,[Pi]:n.CLAMP_TO_EDGE,[Il]:n.MIRRORED_REPEAT},bt={[en]:n.NEAREST,[qf]:n.NEAREST_MIPMAP_NEAREST,[lo]:n.NEAREST_MIPMAP_LINEAR,[ln]:n.LINEAR,[Ia]:n.LINEAR_MIPMAP_NEAREST,[dr]:n.LINEAR_MIPMAP_LINEAR},Me={[Qf]:n.NEVER,[ip]:n.ALWAYS,[jf]:n.LESS,[Fc]:n.LEQUAL,[tp]:n.EQUAL,[Oc]:n.GEQUAL,[ep]:n.GREATER,[np]:n.NOTEQUAL};function ee(C,y){if(y.type===hi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===ln||y.magFilter===Ia||y.magFilter===lo||y.magFilter===dr||y.minFilter===ln||y.minFilter===Ia||y.minFilter===lo||y.minFilter===dr)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,lt[y.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,lt[y.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,lt[y.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,bt[y.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,bt[y.minFilter]),y.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Me[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===en||y.minFilter!==lo&&y.minFilter!==dr||y.type===hi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function oe(C,y){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",R));const W=y.source;let q=f.get(W);q===void 0&&(q={},f.set(W,q));const at=K(y);if(at!==C.__cacheKey){q[at]===void 0&&(q[at]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),q[at].usedTimes++;const ct=q[C.__cacheKey];ct!==void 0&&(q[C.__cacheKey].usedTimes--,ct.usedTimes===0&&D(y)),C.__cacheKey=at,C.__webglTexture=q[at].texture}return z}function Z(C,y,z){return Math.floor(Math.floor(C/z)/y)}function it(C,y,z,W){const at=C.updateRanges;if(at.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,z,W,y.data);else{at.sort((Ct,mt)=>Ct.start-mt.start);let ct=0;for(let Ct=1;Ct<at.length;Ct++){const mt=at[ct],ht=at[Ct],Pt=mt.start+mt.count,It=Z(ht.start,y.width,4),Ht=Z(mt.start,y.width,4);ht.start<=Pt+1&&It===Ht&&Z(ht.start+ht.count-1,y.width,4)===It?mt.count=Math.max(mt.count,ht.start+ht.count-mt.start):(++ct,at[ct]=ht)}at.length=ct+1;const J=e.getParameter(n.UNPACK_ROW_LENGTH),et=e.getParameter(n.UNPACK_SKIP_PIXELS),ut=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let Ct=0,mt=at.length;Ct<mt;Ct++){const ht=at[Ct],Pt=Math.floor(ht.start/4),It=Math.ceil(ht.count/4),Ht=Pt%y.width,U=Math.floor(Pt/y.width),dt=It,j=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Ht),e.pixelStorei(n.UNPACK_SKIP_ROWS,U),e.texSubImage2D(n.TEXTURE_2D,0,Ht,U,dt,j,z,W,y.data)}C.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,J),e.pixelStorei(n.UNPACK_SKIP_PIXELS,et),e.pixelStorei(n.UNPACK_SKIP_ROWS,ut)}}function Et(C,y,z){let W=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(W=n.TEXTURE_3D);const q=oe(C,y),at=y.source;e.bindTexture(W,C.__webglTexture,n.TEXTURE0+z);const ct=i.get(at);if(at.version!==ct.__version||q===!0){if(e.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const j=jt.getPrimaries(jt.workingColorSpace),ft=y.colorSpace===Ki?null:jt.getPrimaries(y.colorSpace),xt=y.colorSpace===Ki||j===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let et=m(y.image,!1,r.maxTextureSize);et=nn(y,et);const ut=s.convert(y.format,y.colorSpace),Ct=s.convert(y.type);let mt=x(y.internalFormat,ut,Ct,y.normalized,y.colorSpace,y.isVideoTexture);ee(W,y);let ht;const Pt=y.mipmaps,It=y.isVideoTexture!==!0,Ht=ct.__version===void 0||q===!0,U=at.dataReady,dt=M(y,et);if(y.isDepthTexture)mt=_(y.format===fr,y.type),Ht&&(It?e.texStorage2D(n.TEXTURE_2D,1,mt,et.width,et.height):e.texImage2D(n.TEXTURE_2D,0,mt,et.width,et.height,0,ut,Ct,null));else if(y.isDataTexture)if(Pt.length>0){It&&Ht&&e.texStorage2D(n.TEXTURE_2D,dt,mt,Pt[0].width,Pt[0].height);for(let j=0,ft=Pt.length;j<ft;j++)ht=Pt[j],It?U&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,ht.width,ht.height,ut,Ct,ht.data):e.texImage2D(n.TEXTURE_2D,j,mt,ht.width,ht.height,0,ut,Ct,ht.data);y.generateMipmaps=!1}else It?(Ht&&e.texStorage2D(n.TEXTURE_2D,dt,mt,et.width,et.height),U&&it(y,et,ut,Ct)):e.texImage2D(n.TEXTURE_2D,0,mt,et.width,et.height,0,ut,Ct,et.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){It&&Ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,mt,Pt[0].width,Pt[0].height,et.depth);for(let j=0,ft=Pt.length;j<ft;j++)if(ht=Pt[j],y.format!==Qn)if(ut!==null)if(It){if(U)if(y.layerUpdates.size>0){const xt=ih(ht.width,ht.height,y.format,y.type);for(const st of y.layerUpdates){const Dt=ht.data.subarray(st*xt/ht.data.BYTES_PER_ELEMENT,(st+1)*xt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,st,ht.width,ht.height,1,ut,Dt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ht.width,ht.height,et.depth,ut,ht.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,mt,ht.width,ht.height,et.depth,0,ht.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ht.width,ht.height,et.depth,ut,Ct,ht.data):e.texImage3D(n.TEXTURE_2D_ARRAY,j,mt,ht.width,ht.height,et.depth,0,ut,Ct,ht.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{It&&Ht&&e.texStorage2D(n.TEXTURE_2D,dt,mt,Pt[0].width,Pt[0].height);for(let j=0,ft=Pt.length;j<ft;j++)ht=Pt[j],y.format!==Qn?ut!==null?It?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,ht.width,ht.height,ut,ht.data):e.compressedTexImage2D(n.TEXTURE_2D,j,mt,ht.width,ht.height,0,ht.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?U&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,ht.width,ht.height,ut,Ct,ht.data):e.texImage2D(n.TEXTURE_2D,j,mt,ht.width,ht.height,0,ut,Ct,ht.data)}else if(y.isDataArrayTexture)if(It){if(Ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,mt,et.width,et.height,et.depth),U)if(y.layerUpdates.size>0){const j=ih(et.width,et.height,y.format,y.type);for(const ft of y.layerUpdates){const xt=et.data.subarray(ft*j/et.data.BYTES_PER_ELEMENT,(ft+1)*j/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ft,et.width,et.height,1,ut,Ct,xt)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ut,Ct,et.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,mt,et.width,et.height,et.depth,0,ut,Ct,et.data);else if(y.isData3DTexture)It?(Ht&&e.texStorage3D(n.TEXTURE_3D,dt,mt,et.width,et.height,et.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ut,Ct,et.data)):e.texImage3D(n.TEXTURE_3D,0,mt,et.width,et.height,et.depth,0,ut,Ct,et.data);else if(y.isFramebufferTexture){if(Ht)if(It)e.texStorage2D(n.TEXTURE_2D,dt,mt,et.width,et.height);else{let j=et.width,ft=et.height;for(let xt=0;xt<dt;xt++)e.texImage2D(n.TEXTURE_2D,xt,mt,j,ft,0,ut,Ct,null),j>>=1,ft>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){const j=n.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),et.parentNode!==j){j.appendChild(et),d.add(y),j.onpaint=ft=>{const xt=ft.changedElements;for(const st of d)xt.includes(st.image)&&(st.needsUpdate=!0)},j.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,et);else{const xt=n.RGBA,st=n.RGBA,Dt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,xt,st,Dt,et)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Pt.length>0){if(It&&Ht){const j=he(Pt[0]);e.texStorage2D(n.TEXTURE_2D,dt,mt,j.width,j.height)}for(let j=0,ft=Pt.length;j<ft;j++)ht=Pt[j],It?U&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,ut,Ct,ht):e.texImage2D(n.TEXTURE_2D,j,mt,ut,Ct,ht);y.generateMipmaps=!1}else if(It){if(Ht){const j=he(et);e.texStorage2D(n.TEXTURE_2D,dt,mt,j.width,j.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut,Ct,et)}else e.texImage2D(n.TEXTURE_2D,0,mt,ut,Ct,et);p(y)&&b(W),ct.__version=at.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Bt(C,y,z){if(y.image.length!==6)return;const W=oe(C,y),q=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+z);const at=i.get(q);if(q.version!==at.__version||W===!0){e.activeTexture(n.TEXTURE0+z);const ct=jt.getPrimaries(jt.workingColorSpace),J=y.colorSpace===Ki?null:jt.getPrimaries(y.colorSpace),et=y.colorSpace===Ki||ct===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);const ut=y.isCompressedTexture||y.image[0].isCompressedTexture,Ct=y.image[0]&&y.image[0].isDataTexture,mt=[];for(let st=0;st<6;st++)!ut&&!Ct?mt[st]=m(y.image[st],!0,r.maxCubemapSize):mt[st]=Ct?y.image[st].image:y.image[st],mt[st]=nn(y,mt[st]);const ht=mt[0],Pt=s.convert(y.format,y.colorSpace),It=s.convert(y.type),Ht=x(y.internalFormat,Pt,It,y.normalized,y.colorSpace),U=y.isVideoTexture!==!0,dt=at.__version===void 0||W===!0,j=q.dataReady;let ft=M(y,ht);ee(n.TEXTURE_CUBE_MAP,y);let xt;if(ut){U&&dt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Ht,ht.width,ht.height);for(let st=0;st<6;st++){xt=mt[st].mipmaps;for(let Dt=0;Dt<xt.length;Dt++){const At=xt[Dt];y.format!==Qn?Pt!==null?U?j&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt,0,0,At.width,At.height,Pt,At.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt,Ht,At.width,At.height,0,At.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt,0,0,At.width,At.height,Pt,It,At.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt,Ht,At.width,At.height,0,Pt,It,At.data)}}}else{if(xt=y.mipmaps,U&&dt){xt.length>0&&ft++;const st=he(mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Ht,st.width,st.height)}for(let st=0;st<6;st++)if(Ct){U?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,mt[st].width,mt[st].height,Pt,It,mt[st].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ht,mt[st].width,mt[st].height,0,Pt,It,mt[st].data);for(let Dt=0;Dt<xt.length;Dt++){const Se=xt[Dt].image[st].image;U?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt+1,0,0,Se.width,Se.height,Pt,It,Se.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt+1,Ht,Se.width,Se.height,0,Pt,It,Se.data)}}else{U?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Pt,It,mt[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ht,Pt,It,mt[st]);for(let Dt=0;Dt<xt.length;Dt++){const At=xt[Dt];U?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt+1,0,0,Pt,It,At.image[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt+1,Ht,Pt,It,At.image[st])}}}p(y)&&b(n.TEXTURE_CUBE_MAP),at.__version=q.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function yt(C,y,z,W,q,at){const ct=s.convert(z.format,z.colorSpace),J=s.convert(z.type),et=x(z.internalFormat,ct,J,z.normalized,z.colorSpace),ut=i.get(y),Ct=i.get(z);if(Ct.__renderTarget=y,!ut.__hasExternalTextures){const mt=Math.max(1,y.width>>at),ht=Math.max(1,y.height>>at);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?e.texImage3D(q,at,et,mt,ht,y.depth,0,ct,J,null):e.texImage2D(q,at,et,mt,ht,0,ct,J,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),Be(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,q,Ct.__webglTexture,0,De(y)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,q,Ct.__webglTexture,at),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Yt(C,y,z){if(n.bindRenderbuffer(n.RENDERBUFFER,C),y.depthBuffer){const W=y.depthTexture,q=W&&W.isDepthTexture?W.type:null,at=_(y.stencilBuffer,q),ct=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Be(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De(y),at,y.width,y.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,De(y),at,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,at,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ct,n.RENDERBUFFER,C)}else{const W=y.textures;for(let q=0;q<W.length;q++){const at=W[q],ct=s.convert(at.format,at.colorSpace),J=s.convert(at.type),et=x(at.internalFormat,ct,J,at.normalized,at.colorSpace);Be(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De(y),et,y.width,y.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,De(y),et,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,et,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Xe(C,y,z){const W=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=i.get(y.depthTexture);if(q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W){if(q.__webglInit===void 0&&(q.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),q.__webglTexture===void 0){q.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),ee(n.TEXTURE_CUBE_MAP,y.depthTexture);const ut=s.convert(y.depthTexture.format),Ct=s.convert(y.depthTexture.type);let mt;y.depthTexture.format===Fi?mt=n.DEPTH_COMPONENT24:y.depthTexture.format===fr&&(mt=n.DEPTH24_STENCIL8);for(let ht=0;ht<6;ht++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,mt,y.width,y.height,0,ut,Ct,null)}}else nt(y.depthTexture,0);const at=q.__webglTexture,ct=De(y),J=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,et=y.depthTexture.format===fr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===Fi)Be(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,J,at,0,ct):n.framebufferTexture2D(n.FRAMEBUFFER,et,J,at,0);else if(y.depthTexture.format===fr)Be(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,J,at,0,ct):n.framebufferTexture2D(n.FRAMEBUFFER,et,J,at,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Kt(C){const y=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const W=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),W){const q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,W.removeEventListener("dispose",q)};W.addEventListener("dispose",q),y.__depthDisposeCallback=q}y.__boundDepthTexture=W}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let W=0;W<6;W++)Xe(y.__webglFramebuffer[W],C,W);else{const W=C.texture.mipmaps;W&&W.length>0?Xe(y.__webglFramebuffer[0],C,0):Xe(y.__webglFramebuffer,C,0)}else if(z){y.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[W]),y.__webglDepthbuffer[W]===void 0)y.__webglDepthbuffer[W]=n.createRenderbuffer(),Yt(y.__webglDepthbuffer[W],C,!1);else{const q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=y.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,at)}}else{const W=C.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Yt(y.__webglDepthbuffer,C,!1);else{const q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,at)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function re(C,y,z){const W=i.get(C);y!==void 0&&yt(W.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Kt(C)}function ye(C){const y=C.texture,z=i.get(C),W=i.get(y);C.addEventListener("dispose",v);const q=C.textures,at=C.isWebGLCubeRenderTarget===!0,ct=q.length>1;if(ct||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=y.version,o.memory.textures++),at){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let et=0;et<y.mipmaps.length;et++)z.__webglFramebuffer[J][et]=n.createFramebuffer()}else z.__webglFramebuffer[J]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<y.mipmaps.length;J++)z.__webglFramebuffer[J]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ct)for(let J=0,et=q.length;J<et;J++){const ut=i.get(q[J]);ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Be(C)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<q.length;J++){const et=q[J];z.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[J]);const ut=s.convert(et.format,et.colorSpace),Ct=s.convert(et.type),mt=x(et.internalFormat,ut,Ct,et.normalized,et.colorSpace,C.isXRRenderTarget===!0),ht=De(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,mt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,z.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Yt(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(at){e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),ee(n.TEXTURE_CUBE_MAP,y);for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0)for(let et=0;et<y.mipmaps.length;et++)yt(z.__webglFramebuffer[J][et],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,et);else yt(z.__webglFramebuffer[J],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(y)&&b(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let J=0,et=q.length;J<et;J++){const ut=q[J],Ct=i.get(ut);let mt=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(mt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(mt,Ct.__webglTexture),ee(mt,ut),yt(z.__webglFramebuffer,C,ut,n.COLOR_ATTACHMENT0+J,mt,0),p(ut)&&b(mt)}e.unbindTexture()}else{let J=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(J,W.__webglTexture),ee(J,y),y.mipmaps&&y.mipmaps.length>0)for(let et=0;et<y.mipmaps.length;et++)yt(z.__webglFramebuffer[et],C,y,n.COLOR_ATTACHMENT0,J,et);else yt(z.__webglFramebuffer,C,y,n.COLOR_ATTACHMENT0,J,0);p(y)&&b(J),e.unbindTexture()}C.depthBuffer&&Kt(C)}function Jt(C){const y=C.textures;for(let z=0,W=y.length;z<W;z++){const q=y[z];if(p(q)){const at=w(C),ct=i.get(q).__webglTexture;e.bindTexture(at,ct),b(at),e.unbindTexture()}}}const Ce=[],Ze=[];function vn(C){if(C.samples>0){if(Be(C)===!1){const y=C.textures,z=C.width,W=C.height;let q=n.COLOR_BUFFER_BIT;const at=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=i.get(C),J=y.length>1;if(J)for(let ut=0;ut<y.length;ut++)e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);const et=C.texture.mipmaps;et&&et.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let ut=0;ut<y.length;ut++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);const Ct=i.get(y[ut]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ct,0)}n.blitFramebuffer(0,0,z,W,0,0,z,W,q,n.NEAREST),c===!0&&(Ce.length=0,Ze.length=0,Ce.push(n.COLOR_ATTACHMENT0+ut),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(Ce.push(at),Ze.push(at),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ze)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ce))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let ut=0;ut<y.length;ut++){e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);const Ct=i.get(y[ut]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,Ct,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){const y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function De(C){return Math.min(r.maxSamples,C.samples)}function Be(C){const y=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function F(C){const y=o.render.frame;u.get(C)!==y&&(u.set(C,y),C.update())}function nn(C,y){const z=C.colorSpace,W=C.format,q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==jo&&z!==Ki&&(jt.getTransfer(z)===de?(W!==Qn||q!==Cn)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ie("WebGLTextures: Unsupported texture color space:",z)),y}function he(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=$,this.resetTextureUnits=k,this.getTextureUnits=I,this.setTextureUnits=G,this.setTexture2D=nt,this.setTexture2DArray=Y,this.setTexture3D=tt,this.setTextureCube=rt,this.rebindTextures=re,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Be,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function gx(n,t){function e(i,r=Ki){let s;const o=jt.getTransfer(r);if(i===Cn)return n.UNSIGNED_BYTE;if(i===Dc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Lc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===td)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ed)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qh)return n.BYTE;if(i===jh)return n.SHORT;if(i===Xs)return n.UNSIGNED_SHORT;if(i===Pc)return n.INT;if(i===gi)return n.UNSIGNED_INT;if(i===hi)return n.FLOAT;if(i===_i)return n.HALF_FLOAT;if(i===nd)return n.ALPHA;if(i===id)return n.RGB;if(i===Qn)return n.RGBA;if(i===Fi)return n.DEPTH_COMPONENT;if(i===fr)return n.DEPTH_STENCIL;if(i===rd)return n.RED;if(i===Ic)return n.RED_INTEGER;if(i===yr)return n.RG;if(i===Nc)return n.RG_INTEGER;if(i===Uc)return n.RGBA_INTEGER;if(i===Vo||i===Wo||i===Xo||i===$o)if(o===de)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Vo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Vo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$o)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nl||i===Ul||i===Fl||i===Ol)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Nl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ul)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ol)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bl||i===zl||i===kl||i===Gl||i===Hl||i===Jo||i===Vl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Bl||i===zl)return o===de?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===kl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Gl)return s.COMPRESSED_R11_EAC;if(i===Hl)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Jo)return s.COMPRESSED_RG11_EAC;if(i===Vl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Wl||i===Xl||i===$l||i===Yl||i===ql||i===Kl||i===Zl||i===Jl||i===Ql||i===jl||i===tc||i===ec||i===nc||i===ic)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Wl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$l)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ql)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Kl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ql)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ec)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ic)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rc||i===sc||i===oc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===rc)return o===de?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===oc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ac||i===lc||i===Qo||i===cc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===ac)return s.COMPRESSED_RED_RGTC1_EXT;if(i===lc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$s?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const _x=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vx=`
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

}`;class xx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new gd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Mi({vertexShader:_x,fragmentShader:vx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ot(new Si(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mx extends tr{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null;const S=typeof XRWebGLBinding<"u",m=new xx,p={},b=e.getContextAttributes();let w=null,x=null;const _=[],M=[],R=new pt;let v=null,T=null;const D=new $n;D.viewport=new Le;const L=new $n;L.viewport=new Le;const O=[D,L],k=new Am;let I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let it=_[Z];return it===void 0&&(it=new ka,_[Z]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Z){let it=_[Z];return it===void 0&&(it=new ka,_[Z]=it),it.getGripSpace()},this.getHand=function(Z){let it=_[Z];return it===void 0&&(it=new ka,_[Z]=it),it.getHandSpace()};function $(Z){const it=M.indexOf(Z.inputSource);if(it===-1)return;const Et=_[it];Et!==void 0&&(Et.update(Z.inputSource,Z.frame,l||o),Et.dispatchEvent({type:Z.type,data:Z.inputSource}))}function K(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",nt);for(let Z=0;Z<_.length;Z++){const it=M[Z];it!==null&&(M[Z]=null,_[Z].disconnect(it))}I=null,G=null,m.reset();for(const Z in p)delete p[Z];if(t.setRenderTarget(w),f=null,h=null,d=null,r=null,x=null,oe.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(R.width,R.height,!1),T!==null){const Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(r,e)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(w=t.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",K),r.addEventListener("inputsourceschange",nt),b.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Bt=null,yt=null;b.depth&&(yt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=b.stencil?fr:Fi,Bt=b.stencil?$s:gi);const Yt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Yt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),x=new jn(h.textureWidth,h.textureHeight,{format:Qn,type:Cn,depthTexture:new Ks(h.textureWidth,h.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Et={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,Et),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new jn(f.framebufferWidth,f.framebufferHeight,{format:Qn,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),oe.setContext(r),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(Z){for(let it=0;it<Z.removed.length;it++){const Et=Z.removed[it],Bt=M.indexOf(Et);Bt>=0&&(M[Bt]=null,_[Bt].disconnect(Et))}for(let it=0;it<Z.added.length;it++){const Et=Z.added[it];let Bt=M.indexOf(Et);if(Bt===-1){for(let Yt=0;Yt<_.length;Yt++)if(Yt>=M.length){M.push(Et),Bt=Yt;break}else if(M[Yt]===null){M[Yt]=Et,Bt=Yt;break}if(Bt===-1)break}const yt=_[Bt];yt&&yt.connect(Et)}}const Y=new A,tt=new A;function rt(Z,it,Et){Y.setFromMatrixPosition(it.matrixWorld),tt.setFromMatrixPosition(Et.matrixWorld);const Bt=Y.distanceTo(tt),yt=it.projectionMatrix.elements,Yt=Et.projectionMatrix.elements,Xe=yt[14]/(yt[10]-1),Kt=yt[14]/(yt[10]+1),re=(yt[9]+1)/yt[5],ye=(yt[9]-1)/yt[5],Jt=(yt[8]-1)/yt[0],Ce=(Yt[8]+1)/Yt[0],Ze=Xe*Jt,vn=Xe*Ce,De=Bt/(-Jt+Ce),Be=De*-Jt;if(it.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Be),Z.translateZ(De),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),yt[10]===-1)Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const F=Xe+De,nn=Kt+De,he=Ze-Be,C=vn+(Bt-Be),y=re*Kt/nn*F,z=ye*Kt/nn*F;Z.projectionMatrix.makePerspective(he,C,y,z,F,nn),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function lt(Z,it){it===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(it.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let it=Z.near,Et=Z.far;m.texture!==null&&(m.depthNear>0&&(it=m.depthNear),m.depthFar>0&&(Et=m.depthFar)),k.near=L.near=D.near=it,k.far=L.far=D.far=Et,(I!==k.near||G!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),I=k.near,G=k.far),k.layers.mask=Z.layers.mask|6,D.layers.mask=k.layers.mask&-5,L.layers.mask=k.layers.mask&-3;const Bt=Z.parent,yt=k.cameras;lt(k,Bt);for(let Yt=0;Yt<yt.length;Yt++)lt(yt[Yt],Bt);yt.length===2?rt(k,D,L):k.projectionMatrix.copy(D.projectionMatrix),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),bt(Z,k,Bt)};function bt(Z,it,Et){Et===null?Z.matrix.copy(it.matrixWorld):(Z.matrix.copy(Et.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(it.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=qs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(Z){c=Z,h!==null&&(h.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(Z){return p[Z]};let Me=null;function ee(Z,it){if(u=it.getViewerPose(l||o),g=it,u!==null){const Et=u.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Bt=!1;Et.length!==k.cameras.length&&(k.cameras.length=0,Bt=!0);for(let Kt=0;Kt<Et.length;Kt++){const re=Et[Kt];let ye=null;if(f!==null)ye=f.getViewport(re);else{const Ce=d.getViewSubImage(h,re);ye=Ce.viewport,Kt===0&&(t.setRenderTargetTextures(x,Ce.colorTexture,Ce.depthStencilTexture),t.setRenderTarget(x))}let Jt=O[Kt];Jt===void 0&&(Jt=new $n,Jt.layers.enable(Kt),Jt.viewport=new Le,O[Kt]=Jt),Jt.matrix.fromArray(re.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(re.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(ye.x,ye.y,ye.width,ye.height),Kt===0&&(k.matrix.copy(Jt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Bt===!0&&k.cameras.push(Jt)}const yt=r.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){d=i.getBinding();const Kt=d.getDepthInformation(Et[0]);Kt&&Kt.isValid&&Kt.texture&&m.init(Kt,r.renderState)}if(yt&&yt.includes("camera-access")&&S){t.state.unbindTexture(),d=i.getBinding();for(let Kt=0;Kt<Et.length;Kt++){const re=Et[Kt].camera;if(re){let ye=p[re];ye||(ye=new gd,p[re]=ye);const Jt=d.getCameraImage(re);ye.sourceTexture=Jt}}}}for(let Et=0;Et<_.length;Et++){const Bt=M[Et],yt=_[Et];Bt!==null&&yt!==void 0&&yt.update(Bt,it,l||o)}Me&&Me(Z,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),g=null}const oe=new bd;oe.setAnimationLoop(ee),this.setAnimationLoop=function(Z){Me=Z},this.dispose=function(){}}}const yx=new Re,Pd=new zt;Pd.set(-1,0,0,0,1,0,0,0,1);function Sx(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Md(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,w,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),S(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,b,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===En&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===En&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),w=b.envMap,x=b.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(yx.makeRotationFromEuler(x)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Pd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===En&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function bx(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,_){const M=_.program;i.uniformBlockBinding(x,M)}function l(x,_){let M=r[x.id];M===void 0&&(m(x),M=u(x),r[x.id]=M,x.addEventListener("dispose",b));const R=_.program;i.updateUBOMapping(x,R);const v=t.render.frame;s[x.id]!==v&&(h(x),s[x.id]=v)}function u(x){const _=d();x.__bindingPointIndex=_;const M=n.createBuffer(),R=x.__size,v=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,R,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,M),M}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const _=r[x.id],M=x.uniforms,R=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let v=0,T=M.length;v<T;v++){const D=M[v];if(Array.isArray(D))for(let L=0,O=D.length;L<O;L++)f(D[L],v,L,R);else f(D,v,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,_,M,R){if(S(x,_,M,R)===!0){const v=x.__offset,T=x.value;if(Array.isArray(T)){let D=0;for(let L=0;L<T.length;L++){const O=T[L],k=p(O);g(O,x.__data,D),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(D+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,x.__data)}}function g(x,_,M){typeof x=="number"||typeof x=="boolean"?_[0]=x:x.isMatrix3?(_[0]=x.elements[0],_[1]=x.elements[1],_[2]=x.elements[2],_[3]=0,_[4]=x.elements[3],_[5]=x.elements[4],_[6]=x.elements[5],_[7]=0,_[8]=x.elements[6],_[9]=x.elements[7],_[10]=x.elements[8],_[11]=0):ArrayBuffer.isView(x)?_.set(new x.constructor(x.buffer,x.byteOffset,_.length)):x.toArray(_,M)}function S(x,_,M,R){const v=x.value,T=_+"_"+M;if(R[T]===void 0)return typeof v=="number"||typeof v=="boolean"?R[T]=v:ArrayBuffer.isView(v)?R[T]=v.slice():R[T]=v.clone(),!0;{const D=R[T];if(typeof v=="number"||typeof v=="boolean"){if(D!==v)return R[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(D.equals(v)===!1)return D.copy(v),!0}}return!1}function m(x){const _=x.uniforms;let M=0;const R=16;for(let T=0,D=_.length;T<D;T++){const L=Array.isArray(_[T])?_[T]:[_[T]];for(let O=0,k=L.length;O<k;O++){const I=L[O],G=Array.isArray(I.value)?I.value:[I.value];for(let $=0,K=G.length;$<K;$++){const nt=G[$],Y=p(nt),tt=M%R,rt=tt%Y.boundary,lt=tt+rt;M+=rt,lt!==0&&R-lt<Y.storage&&(M+=R-lt),I.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=Y.storage}}}const v=M%R;return v>0&&(M+=R-v),x.__size=M,x.__cache={},this}function p(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(_.boundary=16,_.storage=x.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",x),_}function b(x){const _=x.target;_.removeEventListener("dispose",b);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function w(){for(const x in r)n.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:c,update:l,dispose:w}}const Ex=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ai=null;function wx(){return ai===null&&(ai=new qp(Ex,16,16,yr,_i),ai.name="DFG_LUT",ai.minFilter=ln,ai.magFilter=ln,ai.wrapS=Pi,ai.wrapT=Pi,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai}class Tx{constructor(t={}){const{canvas:e=sp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Cn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const S=f,m=new Set([Uc,Nc,Ic]),p=new Set([Cn,gi,Xs,$s,Dc,Lc]),b=new Uint32Array(4),w=new Int32Array(4),x=new A;let _=null,M=null;const R=[],v=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let L=!1,O=null,k=null,I=null,G=null;this._outputColorSpace=yn;let $=0,K=0,nt=null,Y=-1,tt=null;const rt=new Le,lt=new Le;let bt=null;const Me=new $t(0);let ee=0,oe=e.width,Z=e.height,it=1,Et=null,Bt=null;const yt=new Le(0,0,oe,Z),Yt=new Le(0,0,oe,Z);let Xe=!1;const Kt=new Hc;let re=!1,ye=!1;const Jt=new Re,Ce=new A,Ze=new Le,vn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function Be(){return nt===null?it:1}let F=i;function nn(E,N){return e.getContext(E,N)}let he,C,y,z,W,q,at,ct,J,et,ut,Ct,mt,ht,Pt,It,Ht,U,dt,j,ft,xt,st;try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Rc}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",ae,!1),e.addEventListener("webglcontextcreationerror",kn,!1),F===null){const N="webgl2";if(F=nn(N,E),F===null)throw nn(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Dt()}catch(E){throw e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",kn,!1),ie("WebGLRenderer: "+E.message),E}function Dt(){he=new w_(F),he.init(),ft=new gx(F,he),C=new m_(F,he,t,ft),y=new px(F,he),C.reversedDepthBuffer&&h&&y.buffers.depth.setReversed(!0),k=F.createFramebuffer(),I=F.createFramebuffer(),G=F.createFramebuffer(),z=new R_(F),W=new tx,q=new mx(F,he,y,W,C,ft,z),at=new E_(D),ct=new Pm(F),xt=new f_(F,ct),J=new T_(F,ct,z,xt),et=new P_(F,J,ct,xt,z),U=new C_(F,C,q),Pt=new g_(W),ut=new jv(D,at,he,C,xt,Pt),Ct=new Sx(D,W),mt=new nx,ht=new lx(he),Ht=new d_(D,at,y,et,g,c),It=new fx(D,et,C),st=new bx(F,z,C,y),dt=new p_(F,he,z),j=new A_(F,he,z),z.programs=ut.programs,D.capabilities=C,D.extensions=he,D.properties=W,D.renderLists=mt,D.shadowMap=It,D.state=y,D.info=z}S!==Cn&&(T=new L_(S,e.width,e.height,a,r,s));const At=new Mx(D,F);this.xr=At,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=he.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=he.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(E){E!==void 0&&(it=E,this.setSize(oe,Z,!1))},this.getSize=function(E){return E.set(oe,Z)},this.setSize=function(E,N,X=!0){if(At.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=E,Z=N,e.width=Math.floor(E*it),e.height=Math.floor(N*it),X===!0&&(e.style.width=E+"px",e.style.height=N+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(oe*it,Z*it).floor()},this.setDrawingBufferSize=function(E,N,X){oe=E,Z=N,it=X,e.width=Math.floor(E*X),e.height=Math.floor(N*X),this.setViewport(0,0,E,N)},this.setEffects=function(E){if(S===Cn){ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let N=0;N<E.length;N++)if(E[N].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(rt)},this.getViewport=function(E){return E.copy(yt)},this.setViewport=function(E,N,X,H){E.isVector4?yt.set(E.x,E.y,E.z,E.w):yt.set(E,N,X,H),y.viewport(rt.copy(yt).multiplyScalar(it).round())},this.getScissor=function(E){return E.copy(Yt)},this.setScissor=function(E,N,X,H){E.isVector4?Yt.set(E.x,E.y,E.z,E.w):Yt.set(E,N,X,H),y.scissor(lt.copy(Yt).multiplyScalar(it).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(E){y.setScissorTest(Xe=E)},this.setOpaqueSort=function(E){Et=E},this.setTransparentSort=function(E){Bt=E},this.getClearColor=function(E){return E.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor(...arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,X=!0){let H=0;if(E){let V=!1;if(nt!==null){const vt=nt.texture.format;V=m.has(vt)}if(V){const vt=nt.texture.type,St=p.has(vt),_t=Ht.getClearColor(),wt=Ht.getClearAlpha(),Rt=_t.r,Vt=_t.g,Zt=_t.b;St?(b[0]=Rt,b[1]=Vt,b[2]=Zt,b[3]=wt,F.clearBufferuiv(F.COLOR,0,b)):(w[0]=Rt,w[1]=Vt,w[2]=Zt,w[3]=wt,F.clearBufferiv(F.COLOR,0,w))}else H|=F.COLOR_BUFFER_BIT}N&&(H|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),O=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",kn,!1),Ht.dispose(),mt.dispose(),ht.dispose(),W.dispose(),at.dispose(),et.dispose(),xt.dispose(),st.dispose(),ut.dispose(),At.dispose(),At.removeEventListener("sessionstart",hu),At.removeEventListener("sessionend",du),rr.stop()};function Se(E){E.preventDefault(),na("WebGLRenderer: Context Lost."),L=!0}function ae(){na("WebGLRenderer: Context Restored."),L=!1;const E=z.autoReset,N=It.enabled,X=It.autoUpdate,H=It.needsUpdate,V=It.type;Dt(),z.autoReset=E,It.enabled=N,It.autoUpdate=X,It.needsUpdate=H,It.type=V}function kn(E){ie("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ri(E){const N=E.target;N.removeEventListener("dispose",ri),mf(N)}function mf(E){gf(E),W.remove(E)}function gf(E){const N=W.get(E).programs;N!==void 0&&(N.forEach(function(X){ut.releaseProgram(X)}),E.isShaderMaterial&&ut.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,X,H,V,vt){N===null&&(N=vn);const St=V.isMesh&&V.matrixWorld.determinantAffine()<0,_t=xf(E,N,X,H,V);y.setMaterial(H,St);let wt=X.index,Rt=1;if(H.wireframe===!0){if(wt=J.getWireframeAttribute(X),wt===void 0)return;Rt=2}const Vt=X.drawRange,Zt=X.attributes.position;let Tt=Vt.start*Rt,le=(Vt.start+Vt.count)*Rt;vt!==null&&(Tt=Math.max(Tt,vt.start*Rt),le=Math.min(le,(vt.start+vt.count)*Rt)),wt!==null?(Tt=Math.max(Tt,0),le=Math.min(le,wt.count)):Zt!=null&&(Tt=Math.max(Tt,0),le=Math.min(le,Zt.count));const ze=le-Tt;if(ze<0||ze===1/0)return;xt.setup(V,H,_t,X,wt);let Te,_e=dt;if(wt!==null&&(Te=ct.get(wt),_e=j,_e.setIndex(Te)),V.isMesh)H.wireframe===!0?(y.setLineWidth(H.wireframeLinewidth*Be()),_e.setMode(F.LINES)):_e.setMode(F.TRIANGLES);else if(V.isLine){let rn=H.linewidth;rn===void 0&&(rn=1),y.setLineWidth(rn*Be()),V.isLineSegments?_e.setMode(F.LINES):V.isLineLoop?_e.setMode(F.LINE_LOOP):_e.setMode(F.LINE_STRIP)}else V.isPoints?_e.setMode(F.POINTS):V.isSprite&&_e.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(he.get("WEBGL_multi_draw"))_e.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const rn=V._multiDrawStarts,Mt=V._multiDrawCounts,dn=V._multiDrawCount,ne=wt?ct.get(wt).bytesPerElement:1,In=W.get(H).currentProgram.getUniforms();for(let si=0;si<dn;si++)In.setValue(F,"_gl_DrawID",si),_e.render(rn[si]/ne,Mt[si])}else if(V.isInstancedMesh)_e.renderInstances(Tt,ze,V.count);else if(X.isInstancedBufferGeometry){const rn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Mt=Math.min(X.instanceCount,rn);_e.renderInstances(Tt,ze,Mt)}else _e.render(Tt,ze)};function uu(E,N,X,H){O!==null&&E.isNodeMaterial&&O.setObject(H,E),re===!0&&Pt.setState(E,X,!1),E.transparent===!0&&E.side===gn&&E.forceSinglePass===!1?(E.side=En,E.needsUpdate=!0,ao(E,N,H),E.side=xr,E.needsUpdate=!0,ao(E,N,H),E.side=gn):ao(E,N,H)}this.compile=function(E,N,X=null){X===null&&(X=E),O!==null&&O.renderStart(E,N,X),M=ht.get(X),M.init(N),v.push(M),X.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(M.pushLight(V),V.castShadow&&M.pushShadow(V))}),E!==X&&E.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(M.pushLight(V),V.castShadow&&M.pushShadow(V))}),M.setupLights(),O!==null&&O.updateLights(M.state.lightsArray),ye=this.localClippingEnabled,re=Pt.init(this.clippingPlanes,ye),re===!0&&Pt.setGlobalState(this.clippingPlanes,N),O!==null&&It.render(M.state.shadowsArray,X,N);const H=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const vt=V.material;if(vt)if(Array.isArray(vt))for(let St=0;St<vt.length;St++){const _t=vt[St];uu(_t,X,N,V),H.add(_t)}else uu(vt,X,N,V),H.add(vt)}),M=v.pop(),O!==null&&O.renderEnd(),H},this.compileAsync=function(E,N,X=null){const H=this.compile(E,N,X);return new Promise(V=>{function vt(){if(H.forEach(function(St){const wt=W.get(St).currentProgram;(wt===void 0||wt.isReady())&&H.delete(St)}),H.size===0){V(E);return}setTimeout(vt,10)}he.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Ca=null;function _f(E){Ca&&Ca(E)}function hu(){rr.stop()}function du(){rr.start()}const rr=new bd;rr.setAnimationLoop(_f),typeof self<"u"&&rr.setContext(self),this.setAnimationLoop=function(E){Ca=E,At.setAnimationLoop(E),E===null?rr.stop():rr.start()},At.addEventListener("sessionstart",hu),At.addEventListener("sessionend",du),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;O!==null&&O.renderStart(E,N);const X=At.enabled===!0&&At.isPresenting===!0,H=T!==null&&(nt===null||X)&&T.begin(D,nt);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(N),N=At.getCamera()),E.isScene===!0&&E.onBeforeRender(D,E,N,nt),M=ht.get(E,v.length),M.init(N),M.state.textureUnits=q.getTextureUnits(),v.push(M),Jt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Kt.setFromProjectionMatrix(Jt,di,N.reversedDepth),ye=this.localClippingEnabled,re=Pt.init(this.clippingPlanes,ye),_=mt.get(E,R.length),_.init(),R.push(_),At.enabled===!0&&At.isPresenting===!0){const St=D.xr.getDepthSensingMesh();St!==null&&Pa(St,N,-1/0,D.sortObjects)}Pa(E,N,0,D.sortObjects),_.finish(),O!==null&&O.updateLights(M.state.lightsArray),D.sortObjects===!0&&_.sort(Et,Bt),De=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,De&&Ht.addToRenderList(_,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&Pt.beginShadows();const V=M.state.shadowsArray;if(It.render(V,E,N),re===!0&&Pt.endShadows(),(H&&T.hasRenderPass())===!1){const St=_.opaque,_t=_.transmissive;if(M.setupLights(),N.isArrayCamera){const wt=N.cameras;if(_t.length>0)for(let Rt=0,Vt=wt.length;Rt<Vt;Rt++){const Zt=wt[Rt];pu(St,_t,E,Zt)}De&&Ht.render(E);for(let Rt=0,Vt=wt.length;Rt<Vt;Rt++){const Zt=wt[Rt];fu(_,E,Zt,Zt.viewport)}}else _t.length>0&&pu(St,_t,E,N),De&&Ht.render(E),fu(_,E,N)}nt!==null&&K===0&&(q.updateMultisampleRenderTarget(nt),q.updateRenderTargetMipmap(nt)),H&&T.end(D),E.isScene===!0&&E.onAfterRender(D,E,N),xt.resetDefaultState(),Y=-1,tt=null,v.pop(),v.length>0?(M=v[v.length-1],q.setTextureUnits(M.state.textureUnits),re===!0&&Pt.setGlobalState(D.clippingPlanes,M.state.camera)):M=null,R.pop(),R.length>0?_=R[R.length-1]:_=null,O!==null&&O.renderEnd()};function Pa(E,N,X,H){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLightProbeGrid)M.pushLightProbeGrid(E);else if(E.isLight)M.pushLight(E),E.castShadow&&M.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(Kt)){H&&Ze.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Jt);const St=et.update(E),_t=E.material;_t.visible&&_.push(E,St,_t,X,Ze.z,null,N)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(Kt))){const St=et.update(E),_t=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ze.copy(E.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Ze.copy(St.boundingSphere.center)),Ze.applyMatrix4(E.matrixWorld).applyMatrix4(Jt)),Array.isArray(_t)){const wt=St.groups;for(let Rt=0,Vt=wt.length;Rt<Vt;Rt++){const Zt=wt[Rt],Tt=_t[Zt.materialIndex];Tt&&Tt.visible&&_.push(E,St,Tt,X,Ze.z,Zt,N)}}else _t.visible&&_.push(E,St,_t,X,Ze.z,null,N)}}const vt=E.children;for(let St=0,_t=vt.length;St<_t;St++)Pa(vt[St],N,X,H)}function fu(E,N,X,H){const{opaque:V,transmissive:vt,transparent:St}=E;M.setupLightsView(X),re===!0&&Pt.setGlobalState(D.clippingPlanes,X),H&&y.viewport(rt.copy(H)),V.length>0&&oo(V,N,X),vt.length>0&&oo(vt,N,X),St.length>0&&oo(St,N,X),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function pu(E,N,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[H.id]===void 0){const Tt=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[H.id]=new jn(1,1,{generateMipmaps:!0,type:Tt?_i:Cn,minFilter:dr,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:jt.workingColorSpace})}const vt=M.state.transmissionRenderTarget[H.id],St=H.viewport||rt;vt.setSize(St.z*D.transmissionResolutionScale,St.w*D.transmissionResolutionScale);const _t=D.getRenderTarget(),wt=D.getActiveCubeFace(),Rt=D.getActiveMipmapLevel();D.setRenderTarget(vt),D.getClearColor(Me),ee=D.getClearAlpha(),ee<1&&D.setClearColor(16777215,.5),D.clear(),De&&Ht.render(X);const Vt=D.toneMapping;D.toneMapping=pi;const Zt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),M.setupLightsView(H),re===!0&&Pt.setGlobalState(D.clippingPlanes,H),oo(E,X,H),q.updateMultisampleRenderTarget(vt),q.updateRenderTargetMipmap(vt),he.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let le=0,ze=N.length;le<ze;le++){const Te=N[le],{object:_e,geometry:rn,material:Mt,group:dn}=Te;if(Mt.side===gn&&_e.layers.test(H.layers)){const ne=Mt.side;Mt.side=En,Mt.needsUpdate=!0,mu(_e,X,H,rn,Mt,dn),Mt.side=ne,Mt.needsUpdate=!0,Tt=!0}}Tt===!0&&(q.updateMultisampleRenderTarget(vt),q.updateRenderTargetMipmap(vt))}D.setRenderTarget(_t,wt,Rt),D.setClearColor(Me,ee),Zt!==void 0&&(H.viewport=Zt),D.toneMapping=Vt}function oo(E,N,X){const H=N.isScene===!0?N.overrideMaterial:null;for(let V=0,vt=E.length;V<vt;V++){const St=E[V],{object:_t,geometry:wt,group:Rt}=St;let Vt=St.material;Vt.allowOverride===!0&&H!==null&&(Vt=H),_t.layers.test(X.layers)&&mu(_t,N,X,wt,Vt,Rt)}}function mu(E,N,X,H,V,vt){O!==null&&V.isNodeMaterial&&O.setObject(E,V),E.onBeforeRender(D,N,X,H,V,vt),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(D,N,X,H,E,vt),V.transparent===!0&&V.side===gn&&V.forceSinglePass===!1?(V.side=En,V.needsUpdate=!0,D.renderBufferDirect(X,N,H,V,E,vt),V.side=xr,V.needsUpdate=!0,D.renderBufferDirect(X,N,H,V,E,vt),V.side=gn):D.renderBufferDirect(X,N,H,V,E,vt),E.onAfterRender(D,N,X,H,V,vt)}function ao(E,N,X){N.isScene!==!0&&(N=vn);const H=W.get(E),V=M.state.lights,vt=M.state.shadowsArray,St=V.state.version,_t=ut.getParameters(E,V.state,vt,N,X,M.state.lightProbeGridArray),wt=ut.getProgramCacheKey(_t);let Rt=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?N.environment:null,H.fog=N.fog;const Vt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;H.envMap=at.get(E.envMap||H.environment,Vt),H.envMapRotation=H.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Rt===void 0&&(E.addEventListener("dispose",ri),Rt=new Map,H.programs=Rt);let Zt=Rt.get(wt);if(Zt!==void 0){if(H.currentProgram===Zt&&H.lightsStateVersion===St)return _u(E,_t),Zt}else _t.uniforms=ut.getUniforms(E),O!==null&&E.isNodeMaterial&&O.build(E,X,_t),E.onBeforeCompile(_t,D),Zt=ut.acquireProgram(_t,wt),Rt.set(wt,Zt),H.uniforms=_t.uniforms;const Tt=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Tt.clippingPlanes=Pt.uniform),_u(E,_t),H.needsLights=yf(E),H.lightsStateVersion=St,H.needsLights&&(Tt.ambientLightColor.value=V.state.ambient,Tt.lightProbe.value=V.state.probe,Tt.sunLights.value=V.state.sun,Tt.sunLightShadows.value=V.state.sunShadow,Tt.directionalLights.value=V.state.directional,Tt.directionalLightShadows.value=V.state.directionalShadow,Tt.spotLights.value=V.state.spot,Tt.spotLightShadows.value=V.state.spotShadow,Tt.rectAreaLights.value=V.state.rectArea,Tt.ltc_1.value=V.state.rectAreaLTC1,Tt.ltc_2.value=V.state.rectAreaLTC2,Tt.pointLights.value=V.state.point,Tt.pointLightShadows.value=V.state.pointShadow,Tt.hemisphereLights.value=V.state.hemi,Tt.sunShadowMatrix.value=V.state.sunShadowMatrix,Tt.sunShadowCascade.value=V.state.sunShadowCascade,Tt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Tt.spotLightMatrix.value=V.state.spotLightMatrix,Tt.spotLightMap.value=V.state.spotLightMap,Tt.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=M.state.lightProbeGridArray.length>0,H.currentProgram=Zt,H.uniformsList=null,Zt}function gu(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Yo.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function _u(E,N){const X=W.get(E);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function vf(E,N){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;x.setFromMatrixPosition(N.matrixWorld);for(let X=0,H=E.length;X<H;X++){const V=E[X];if(V.texture!==null&&V.boundingBox.containsPoint(x))return V}return null}function xf(E,N,X,H,V){N.isScene!==!0&&(N=vn),q.resetTextureUnits();const vt=N.fog,St=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?N.environment:null,_t=nt===null?D.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:jt.workingColorSpace,wt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Rt=at.get(H.envMap||St,wt),Vt=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Zt=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Tt=!!X.morphAttributes.position,le=!!X.morphAttributes.normal,ze=!!X.morphAttributes.color;let Te=pi;H.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Te=D.toneMapping);const _e=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,rn=_e!==void 0?_e.length:0,Mt=W.get(H),dn=M.state.lights;if(re===!0&&(ye===!0||E!==tt)){const be=E===tt&&H.id===Y;Pt.setState(H,E,be)}let ne=!1;H.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==dn.state.version||Mt.outputColorSpace!==_t||V.isBatchedMesh&&Mt.batching===!1||!V.isBatchedMesh&&Mt.batching===!0||V.isBatchedMesh&&Mt.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Mt.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Mt.instancing===!1||!V.isInstancedMesh&&Mt.instancing===!0||V.isSkinnedMesh&&Mt.skinning===!1||!V.isSkinnedMesh&&Mt.skinning===!0||V.isInstancedMesh&&Mt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Mt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Mt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Mt.instancingMorph===!1&&V.morphTexture!==null||Mt.envMap!==Rt||H.fog===!0&&Mt.fog!==vt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Pt.numPlanes||Mt.numIntersection!==Pt.numIntersection)||Mt.vertexAlphas!==Vt||Mt.vertexTangents!==Zt||Mt.morphTargets!==Tt||Mt.morphNormals!==le||Mt.morphColors!==ze||Mt.toneMapping!==Te||Mt.morphTargetsCount!==rn||!!Mt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(ne=!0):(ne=!0,Mt.__version=H.version);let In=Mt.currentProgram;ne===!0&&(In=ao(H,N,V),O&&H.isNodeMaterial&&O.onUpdateProgram(H,In,Mt));let si=!1,zi=!1,Cr=!1;const me=In.getUniforms(),Fe=Mt.uniforms;if(y.useProgram(In.program)&&(si=!0,zi=!0,Cr=!0),H.id!==Y&&(Y=H.id,zi=!0),Mt.needsLights){const be=vf(M.state.lightProbeGridArray,V);Mt.lightProbeGrid!==be&&(Mt.lightProbeGrid=be,zi=!0)}if(si||tt!==E){y.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),me.setValue(F,"projectionMatrix",E.projectionMatrix),me.setValue(F,"viewMatrix",E.matrixWorldInverse);const Gi=me.map.cameraPosition;Gi!==void 0&&Gi.setValue(F,Ce.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&me.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&me.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),tt!==E&&(tt=E,zi=!0,Cr=!0)}if(Mt.needsLights&&(dn.state.sunShadowMap.length>0&&me.setValue(F,"sunShadowMap",dn.state.sunShadowMap,q),dn.state.directionalShadowMap.length>0&&me.setValue(F,"directionalShadowMap",dn.state.directionalShadowMap,q),dn.state.spotShadowMap.length>0&&me.setValue(F,"spotShadowMap",dn.state.spotShadowMap,q),dn.state.pointShadowMap.length>0&&me.setValue(F,"pointShadowMap",dn.state.pointShadowMap,q)),V.isSkinnedMesh){me.setOptional(F,V,"bindMatrix"),me.setOptional(F,V,"bindMatrixInverse");const be=V.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),me.setValue(F,"boneTexture",be.boneTexture,q))}V.isBatchedMesh&&(me.setOptional(F,V,"batchingTexture"),me.setValue(F,"batchingTexture",V._matricesTexture,q),me.setOptional(F,V,"batchingIdTexture"),me.setValue(F,"batchingIdTexture",V._indirectTexture,q),me.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&me.setValue(F,"batchingColorTexture",V._colorsTexture,q));const ki=X.morphAttributes;if((ki.position!==void 0||ki.normal!==void 0||ki.color!==void 0)&&U.update(V,X,In),(zi||Mt.receiveShadow!==V.receiveShadow)&&(Mt.receiveShadow=V.receiveShadow,me.setValue(F,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&N.environment!==null&&(Fe.envMapIntensity.value=N.environmentIntensity),Fe.dfgLUT!==void 0&&(Fe.dfgLUT.value=wx()),zi){if(me.setValue(F,"toneMappingExposure",D.toneMappingExposure),Mt.needsLights&&Mf(Fe,Cr),vt&&H.fog===!0&&Ct.refreshFogUniforms(Fe,vt),Ct.refreshMaterialUniforms(Fe,H,it,Z,M.state.transmissionRenderTarget[E.id]),Mt.needsLights&&Mt.lightProbeGrid){const be=Mt.lightProbeGrid;Fe.probesSH.value=be.texture,Fe.probesMin.value.copy(be.boundingBox.min),Fe.probesMax.value.copy(be.boundingBox.max),Fe.probesResolution.value.copy(be.resolution)}Yo.upload(F,gu(Mt),Fe,q)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Yo.upload(F,gu(Mt),Fe,q),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&me.setValue(F,"center",V.center),me.setValue(F,"modelViewMatrix",V.modelViewMatrix),me.setValue(F,"normalMatrix",V.normalMatrix),me.setValue(F,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){const be=H.uniformsGroups;for(let Gi=0,Pr=be.length;Gi<Pr;Gi++){const xu=be[Gi];st.update(xu,In),st.bind(xu,In)}}return In}function Mf(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.sunLights.needsUpdate=N,E.sunLightShadows.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function yf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(E,N,X){const H=W.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),W.get(E.texture).__webglTexture=N,W.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){const X=W.get(E);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,X=0){nt=E,$=N,K=X;let H=null,V=!1,vt=!1;if(E){const _t=W.get(E);if(_t.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(F.FRAMEBUFFER,_t.__webglFramebuffer),rt.copy(E.viewport),lt.copy(E.scissor),bt=E.scissorTest,y.viewport(rt),y.scissor(lt),y.setScissorTest(bt),Y=-1;return}else if(_t.__webglFramebuffer===void 0)q.setupRenderTarget(E);else if(_t.__hasExternalTextures)q.rebindTextures(E,W.get(E.texture).__webglTexture,W.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Vt=E.depthTexture;if(_t.__boundDepthTexture!==Vt){if(Vt!==null&&W.has(Vt)&&(E.width!==Vt.image.width||E.height!==Vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(E)}}const wt=E.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(vt=!0);const Rt=W.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Rt[N])?H=Rt[N][X]:H=Rt[N],V=!0):E.samples>0&&q.useMultisampledRTT(E)===!1?H=W.get(E).__webglMultisampledFramebuffer:Array.isArray(Rt)?H=Rt[X]:H=Rt,rt.copy(E.viewport),lt.copy(E.scissor),bt=E.scissorTest}else rt.copy(yt).multiplyScalar(it).floor(),lt.copy(Yt).multiplyScalar(it).floor(),bt=Xe;if(X!==0&&(H=k),y.bindFramebuffer(F.FRAMEBUFFER,H)&&y.drawBuffers(E,H),y.viewport(rt),y.scissor(lt),y.setScissorTest(bt),V){const _t=W.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,_t.__webglTexture,X)}else if(vt){const _t=N;for(let wt=0;wt<E.textures.length;wt++){const Rt=W.get(E.textures[wt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+wt,Rt.__webglTexture,X,_t)}}else if(E!==null&&X!==0){const _t=W.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,_t.__webglTexture,X)}Y=-1};function vu(E){const N=W.get(E);return(N.__readFormat!==E.format||N.__readType!==E.type)&&(N.__readFormat=E.format,N.__readType=E.type,N.__formatReadable=C.textureFormatReadable(E.format),N.__typeReadable=C.textureTypeReadable(E.type)),N}this.readRenderTargetPixels=function(E,N,X,H,V,vt,St,_t=0){if(!(E&&E.isWebGLRenderTarget)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=W.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&St!==void 0&&(wt=wt[St]),wt){y.bindFramebuffer(F.FRAMEBUFFER,wt);try{const Rt=E.textures[_t],Vt=Rt.format,Zt=Rt.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+_t);const Tt=vu(Rt);if(Tt.__formatReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt.__typeReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-H&&X>=0&&X<=E.height-V&&F.readPixels(N,X,H,V,ft.convert(Vt),ft.convert(Zt),vt)}finally{const Rt=nt!==null?W.get(nt).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(E,N,X,H,V,vt,St,_t=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=W.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&St!==void 0&&(wt=wt[St]),wt)if(N>=0&&N<=E.width-H&&X>=0&&X<=E.height-V){y.bindFramebuffer(F.FRAMEBUFFER,wt);const Rt=E.textures[_t],Vt=Rt.format,Zt=Rt.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+_t);const Tt=vu(Rt);if(Tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,le),F.bufferData(F.PIXEL_PACK_BUFFER,vt.byteLength,F.STREAM_READ),F.readPixels(N,X,H,V,ft.convert(Vt),ft.convert(Zt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const ze=nt!==null?W.get(nt).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,ze);const Te=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await op(F,Te,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,le),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,vt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(le),F.deleteSync(Te),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,X=0){const H=Math.pow(2,-X),V=Math.floor(E.image.width*H),vt=Math.floor(E.image.height*H),St=N!==null?N.x:0,_t=N!==null?N.y:0;q.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,St,_t,V,vt),y.unbindTexture()},this.copyTextureToTexture=function(E,N,X=null,H=null,V=0,vt=0){let St,_t,wt,Rt,Vt,Zt,Tt,le,ze;const Te=E.isCompressedTexture?E.mipmaps[vt]:E.image;if(X!==null)St=X.max.x-X.min.x,_t=X.max.y-X.min.y,wt=X.isBox3?X.max.z-X.min.z:1,Rt=X.min.x,Vt=X.min.y,Zt=X.isBox3?X.min.z:0;else{const Fe=Math.pow(2,-V);St=Math.floor(Te.width*Fe),_t=Math.floor(Te.height*Fe),E.isDataArrayTexture?wt=Te.depth:E.isData3DTexture?wt=Math.floor(Te.depth*Fe):wt=1,Rt=0,Vt=0,Zt=0}H!==null?(Tt=H.x,le=H.y,ze=H.z):(Tt=0,le=0,ze=0);const _e=ft.convert(N.format),rn=ft.convert(N.type);let Mt;N.isData3DTexture?(q.setTexture3D(N,0),Mt=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(q.setTexture2DArray(N,0),Mt=F.TEXTURE_2D_ARRAY):(q.setTexture2D(N,0),Mt=F.TEXTURE_2D),y.activeTexture(F.TEXTURE0),y.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),y.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),y.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);const dn=y.getParameter(F.UNPACK_ROW_LENGTH),ne=y.getParameter(F.UNPACK_IMAGE_HEIGHT),In=y.getParameter(F.UNPACK_SKIP_PIXELS),si=y.getParameter(F.UNPACK_SKIP_ROWS),zi=y.getParameter(F.UNPACK_SKIP_IMAGES);y.pixelStorei(F.UNPACK_ROW_LENGTH,Te.width),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Te.height),y.pixelStorei(F.UNPACK_SKIP_PIXELS,Rt),y.pixelStorei(F.UNPACK_SKIP_ROWS,Vt),y.pixelStorei(F.UNPACK_SKIP_IMAGES,Zt);const Cr=E.isDataArrayTexture||E.isData3DTexture,me=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){const Fe=W.get(E),ki=W.get(N),be=W.get(Fe.__renderTarget),Gi=W.get(ki.__renderTarget);y.bindFramebuffer(F.READ_FRAMEBUFFER,be.__webglFramebuffer),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let Pr=0;Pr<wt;Pr++)Cr&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(E).__webglTexture,V,Zt+Pr),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(N).__webglTexture,vt,ze+Pr)),F.blitFramebuffer(Rt,Vt,St,_t,Tt,le,St,_t,F.DEPTH_BUFFER_BIT,F.NEAREST);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||W.has(E)){const Fe=W.get(E),ki=W.get(N);y.bindFramebuffer(F.READ_FRAMEBUFFER,I),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,G);for(let be=0;be<wt;be++)Cr?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Fe.__webglTexture,V,Zt+be):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Fe.__webglTexture,V),me?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ki.__webglTexture,vt,ze+be):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ki.__webglTexture,vt),V!==0?F.blitFramebuffer(Rt,Vt,St,_t,Tt,le,St,_t,F.COLOR_BUFFER_BIT,F.NEAREST):me?F.copyTexSubImage3D(Mt,vt,Tt,le,ze+be,Rt,Vt,St,_t):F.copyTexSubImage2D(Mt,vt,Tt,le,Rt,Vt,St,_t);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else me?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(Mt,vt,Tt,le,ze,St,_t,wt,_e,rn,Te.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(Mt,vt,Tt,le,ze,St,_t,wt,_e,Te.data):F.texSubImage3D(Mt,vt,Tt,le,ze,St,_t,wt,_e,rn,Te):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,vt,Tt,le,St,_t,_e,rn,Te.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,vt,Tt,le,Te.width,Te.height,_e,Te.data):F.texSubImage2D(F.TEXTURE_2D,vt,Tt,le,St,_t,_e,rn,Te);y.pixelStorei(F.UNPACK_ROW_LENGTH,dn),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ne),y.pixelStorei(F.UNPACK_SKIP_PIXELS,In),y.pixelStorei(F.UNPACK_SKIP_ROWS,si),y.pixelStorei(F.UNPACK_SKIP_IMAGES,zi),vt===0&&N.generateMipmaps&&F.generateMipmap(Mt),y.unbindTexture()},this.initRenderTarget=function(E){W.get(E).__webglFramebuffer===void 0&&q.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?q.setTextureCube(E,0):E.isData3DTexture?q.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?q.setTexture2DArray(E,0):q.setTexture2D(E,0),y.unbindTexture()},this.resetState=function(){$=0,K=0,nt=null,y.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}const Th={type:"change"},Kc={type:"start"},Dd={type:"end"},zo=new Gc,Ah=new Ri,Ax=Math.cos(70*ge.DEG2RAD),$e=new A,xn=2*Math.PI,pe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},pl=1e-6;class Rx extends Rm{constructor(t,e=null){super(t,e),this.state=pe.NONE,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ts.ROTATE,MIDDLE:ts.DOLLY,RIGHT:ts.PAN},this.touches={ONE:Jr.ROTATE,TWO:Jr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new vi,this._lastTargetPosition=new A,this._quat=new vi().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new eh,this._sphericalDelta=new eh,this._scale=1,this._panOffset=new A,this._rotateStart=new pt,this._rotateEnd=new pt,this._rotateDelta=new pt,this._panStart=new pt,this._panEnd=new pt,this._panDelta=new pt,this._dollyStart=new pt,this._dollyEnd=new pt,this._dollyDelta=new pt,this._dollyDirection=new A,this._mouse=new pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Px.bind(this),this._onPointerDown=Cx.bind(this),this._onPointerUp=Dx.bind(this),this._onContextMenu=Bx.bind(this),this._onMouseWheel=Nx.bind(this),this._onKeyDown=Ux.bind(this),this._onTouchStart=Fx.bind(this),this._onTouchMove=Ox.bind(this),this._onMouseDown=Lx.bind(this),this._onMouseMove=Ix.bind(this),this._interceptControlDown=zx.bind(this),this._interceptControlUp=kx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=pe.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Th),this.update(),this.state=pe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;$e.copy(e).sub(this.target),$e.applyQuaternion(this._quat),this._spherical.setFromVector3($e),this.autoRotate&&this.state===pe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=xn:i>Math.PI&&(i-=xn),r<-Math.PI?r+=xn:r>Math.PI&&(r-=xn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if($e.setFromSpherical(this._spherical),$e.applyQuaternion(this._quatInverse),e.copy(this.target).add($e),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=$e.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new A(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=$e.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(zo.origin.copy(this.object.position),zo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zo.direction))<Ax?this.object.lookAt(this.target):(Ah.setFromNormalAndCoplanarPoint(this.object.up,this.target),zo.intersectPlane(Ah,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>pl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>pl||this._lastTargetPosition.distanceToSquared(this.target)>pl?(this.dispatchEvent(Th),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?xn/60*this.autoRotateSpeed*t:xn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){$e.setFromMatrixColumn(e,0),$e.multiplyScalar(-t),this._panOffset.add($e)}_panUp(t,e){this.screenSpacePanning===!0?$e.setFromMatrixColumn(e,1):($e.setFromMatrixColumn(e,0),$e.crossVectors(this.object.up,$e)),$e.multiplyScalar(t),this._panOffset.add($e)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;$e.copy(r).sub(this.target);let s=$e.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/e.clientHeight),this._rotateUp(xn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/e.clientHeight),this._rotateUp(xn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Cx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Px(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Dx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Dd),this.state=pe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Lx(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ts.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=pe.DOLLY;break;case ts.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=pe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=pe.ROTATE}break;case ts.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=pe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=pe.PAN}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(Kc)}function Ix(n){switch(this.state){case pe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case pe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case pe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Nx(n){this.enabled===!1||this.enableZoom===!1||this.state!==pe.NONE||(n.preventDefault(),this.dispatchEvent(Kc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Dd))}function Ux(n){this.enabled!==!1&&this._handleKeyDown(n)}function Fx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Jr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=pe.TOUCH_ROTATE;break;case Jr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=pe.TOUCH_PAN;break;default:this.state=pe.NONE}break;case 2:switch(this.touches.TWO){case Jr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=pe.TOUCH_DOLLY_PAN;break;case Jr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=pe.TOUCH_DOLLY_ROTATE;break;default:this.state=pe.NONE}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(Kc)}function Ox(n){switch(this._trackPointer(n),this.state){case pe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case pe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case pe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case pe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=pe.NONE}}function Bx(n){this.enabled!==!1&&n.preventDefault()}function zx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function kx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ds=new A;function Un(n,t,e,i,r,s){const o=2*Math.PI*r/4,a=Math.max(s-2*r,0),c=Math.PI/4;Ds.copy(t),Ds[i]=0,Ds.normalize();const l=.5*o/(o+a),u=1-Ds.angleTo(n)/c;return Math.sign(Ds[e])===1?u*l:a/(o+a)+l+l*(1-u)}class Zc extends er{constructor(t=1,e=1,i=1,r=2,s=.1){const o=r*2+1;if(s=Math.min(t/2,e/2,i/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:r,radius:s},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new A,l=new A,u=new A(t,e,i).divideScalar(2).subScalar(s),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,S=new A,m=.5/o;for(let p=0,b=0;p<d.length;p+=3,b+=2)switch(c.fromArray(d,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[p+0]=u.x*Math.sign(c.x)+l.x*s,d[p+1]=u.y*Math.sign(c.y)+l.y*s,d[p+2]=u.z*Math.sign(c.z)+l.z*s,h[p+0]=l.x,h[p+1]=l.y,h[p+2]=l.z,Math.floor(p/g)){case 0:S.set(1,0,0),f[b+0]=Un(S,l,"z","y",s,i),f[b+1]=1-Un(S,l,"y","z",s,e);break;case 1:S.set(-1,0,0),f[b+0]=1-Un(S,l,"z","y",s,i),f[b+1]=1-Un(S,l,"y","z",s,e);break;case 2:S.set(0,1,0),f[b+0]=1-Un(S,l,"x","z",s,t),f[b+1]=Un(S,l,"z","x",s,i);break;case 3:S.set(0,-1,0),f[b+0]=1-Un(S,l,"x","z",s,t),f[b+1]=1-Un(S,l,"z","x",s,i);break;case 4:S.set(0,0,1),f[b+0]=1-Un(S,l,"x","y",s,t),f[b+1]=1-Un(S,l,"y","x",s,e);break;case 5:S.set(0,0,-1),f[b+0]=Un(S,l,"x","y",s,t),f[b+1]=1-Un(S,l,"y","x",s,e);break}}static fromJSON(t){return new Zc(t.width,t.height,t.depth,t.segments,t.radius)}}function Gx(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,c=new Oe;let l=0;for(let u=0;u<n.length;++u){const d=n[u];let h=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(e){let u=0;const d=[];for(let h=0;h<n.length;++h){const f=n[h].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=n[h].attributes.position.count}c.setIndex(d)}for(const u in s){const d=Rh(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(const u in o){const d=o[u][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<d;++h){const f=[];for(let S=0;S<o[u].length;++S)f.push(o[u][S][h]);const g=Rh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function Rh(n){let t,e,i,r=-1,s=0;for(let l=0;l<n.length;++l){const u=n[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}const o=new t(s),a=new ti(o,e,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const d=c/e;for(let h=0,f=u.count;h<f;h++)for(let g=0;g<e;g++){const S=u.getComponent(h,g);a.setComponent(h+d,g,S)}}else o.set(u.array,c);c+=u.count*e}return r!==void 0&&(a.gpuType=r),a}const ml=new Map;function Ie(n){return ml.has(n)||ml.set(n,new Sr({color:n,roughness:.85})),ml.get(n)}function P(n,t,e,i,r,s,o,a,c=!1){const l=new Ot(c?new Zc(r,s,o,2,Math.min(.09,r/4,s/4,o/4)):new er(r,s,o),Ie(a));return l.position.set(t,e,i),l.castShadow=!0,l.receiveShadow=!0,n.add(l),l}function Mn(n,t,e,i,r,s,o=[1,1,1]){const a=new Ot(new Yc(r,12,10),Ie(s));return a.position.set(t,e,i),a.scale.set(...o),a.castShadow=!0,n.add(a),a}function Ch(n){n.material=n.material.clone();const t=n.material;return t.transparent=!0,t.opacity=1,n.userData.dynamic=!0,n}function On(n,t,e,i,r,s=3,o="#f2c65a"){const a=document.createElement("canvas");a.width=s>=8?2048:1024,a.height=s>=8?512:256;const c=a.getContext("2d");if(c.scale(a.width/2048,a.height/512),c.fillStyle=o,c.fillRect(0,0,2048,512),c.fillStyle="#263f40",c.fillRect(0,0,2048,42),c.fillRect(0,470,2048,42),c.fillStyle="#233d42",c.textBaseline="middle",/MOVING EMPIRE/.test(t))c.beginPath(),c.roundRect(70,86,340,340,76),c.fill(),c.fillStyle=o,c.font="1000 230px Nunito, sans-serif",c.textAlign="center",c.fillText("M",240,270),c.fillStyle="#233d42",c.textAlign="left",c.font="1000 140px Nunito, sans-serif",c.fillText("MOVING EMPIRE",470,270);else{const h=Math.min(190,1660/Math.max(5,t.length)*2.15);c.font=`1000 ${h}px Nunito, sans-serif`,c.textAlign="center",c.fillText(t,1024,248)}const l=new md(a);l.colorSpace=yn,l.anisotropy=8;const u=new xe;u.position.set(e,i,r),n.add(u),P(u,0,0,-.035,s,s/4,.1,2506560,!0);const d=new Ot(new Si(s*.94,s*.235),new yi({map:l,side:gn}));d.position.z=.022,u.add(d);for(const h of[-s*.43,s*.43])Mn(u,h,s*.085,.04,.035,16313807);return u}function Hx(n,t,e=7391353,i=!1,r=0){const s=new xe,o=i?2.5:3.45,a=i?1.5:2.05,c=document.createElement("canvas");c.width=768,c.height=500;const l=c.getContext("2d"),u=new md(c),d=/LOCKED|MAX/.test(t);u.colorSpace=yn;const h=new Ot(new Si(o,a),new yi({map:u,transparent:!0,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.y=.018,h.renderOrder=3,h.userData.owned=!0,s.add(h);const f=()=>{if(l.save(),l.translate(142,235),l.fillStyle=d?"#87918b":"#244456",l.strokeStyle=l.fillStyle,l.lineWidth=18,l.lineCap="round",l.lineJoin="round",/collect/i.test(n))l.beginPath(),l.arc(0,0,82,0,Math.PI*2),l.stroke(),l.font="1000 112px Nunito, sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillText("$",0,5);else if(/cargo|lining/i.test(n))l.strokeRect(-72,-52,144,112),l.beginPath(),l.moveTo(-52,-20),l.lineTo(52,-20),l.moveTo(-52,20),l.lineTo(52,20),l.stroke();else if(/truck|fleet/i.test(n)){l.fillRect(-70,-30,90,62),l.fillRect(20,-14,55,46);for(const m of[-42,47])l.beginPath(),l.arc(m,44,18,0,Math.PI*2),l.fill()}else/crew|strength|worker|hire/i.test(n)?(l.beginPath(),l.arc(0,-45,30,0,Math.PI*2),l.fill(),l.beginPath(),l.roundRect(-48,-5,96,82,28),l.fill()):/chair|assembly|paint|pack|wood|timber|mill/i.test(n)?(l.strokeRect(-42,-22,72,58),l.beginPath(),l.moveTo(-42,35),l.lineTo(-42,78),l.moveTo(30,35),l.lineTo(30,78),l.moveTo(-42,-22),l.lineTo(-42,-78),l.stroke()):/yard|factory|production|grounds/i.test(n)?(l.fillRect(-65,-42,130,112),l.fillStyle="#fff8e5",l.fillRect(-22,5,44,65),l.fillStyle=d?"#87918b":"#244456",l.beginPath(),l.moveTo(-82,-42),l.lineTo(0,-95),l.lineTo(82,-42),l.fill()):(l.strokeRect(-55,-68,110,136),l.beginPath(),l.moveTo(-28,-28),l.lineTo(30,-28),l.moveTo(-28,5),l.lineTo(30,5),l.moveTo(-28,38),l.lineTo(12,38),l.stroke());l.restore()};let g=-1;const S=m=>{const p=ge.clamp(m,0,1);if(Math.abs(g-p)<.004)return;g=p,s.userData.progress=p,l.clearRect(0,0,c.width,c.height),l.fillStyle=d?"#d4d6c9":"#fff4d3",l.beginPath(),l.roundRect(18,18,732,464,54),l.fill(),p>0&&(l.save(),l.beginPath(),l.roundRect(18,18,732,464,54),l.clip(),l.fillStyle="#75c995",l.fillRect(18,18,732*p,464),l.restore()),l.lineWidth=22,l.strokeStyle="#244456",l.beginPath(),l.roundRect(18,18,732,464,54),l.stroke(),l.fillStyle="#244456",l.beginPath(),l.roundRect(42,76,204,322,44),l.fillStyle="#ffffff80",l.fill(),f(),l.fillStyle="#244456",l.textAlign="left",l.textBaseline="middle";const b=(t.startsWith("$"),t),w=n.toUpperCase();l.font=`1000 ${w.length>19?43:w.length>13?50:58}px Nunito, sans-serif`,l.fillText(w,286,155,425),l.font=`1000 ${b.length>9?88:116}px Nunito, sans-serif`,l.fillText(b,286,292,425),p>0&&(l.fillStyle="#244456",l.font="900 34px Nunito, sans-serif",l.fillText(`${Math.round(p*100)}% FUNDED`,286,414,425)),u.needsUpdate=!0};return s.userData.setProgress=S,s.userData.padHalfWidth=o/2,s.userData.padHalfDepth=a/2,s.userData.graphicLabel=n,s.userData.hasPurposeIcon=!0,S(r),s}function Ld(n=14983231,t=0,e="standard",i=0){const r=new xe,s=new xe;r.add(s);const o=[15119758,10382672,13209191][t%3],a={standard:{shirt:n,trousers:3296353,cap:3234931,bib:15721405},build:{shirt:15899186,trousers:3754576,cap:16760120,bib:16747821},logistics:{shirt:4619086,trousers:3492681,cap:3368509,bib:15130549},workshop:{shirt:12144195,trousers:3160905,cap:3030864,bib:3754581},elite:{shirt:7492769,trousers:2698560,cap:15394287,bib:14277095}}[e]??{shirt:n,trousers:3296353,cap:3234931};n=a.shirt,Mn(s,0,1.05,-.01,.37,n,[1,1.17,.86]),Mn(s,0,.77,0,.32,a.trousers,[1,.56,.78]),Mn(s,0,1.38,0,.13,o,[.72,.76,.7]),Mn(s,0,1.65,.02,.36,o,[1,1.08,.93]),Mn(s,-.35,1.65,.02,.08,o),Mn(s,.35,1.65,.02,.08,o),Mn(s,0,1.61,.35,.08,o);for(const f of[-.13,.13])Mn(s,f,1.71,.324,.046,2435890),P(s,f,1.81,.32,.11,.035,.03,5323570,!0);const c=new Ot(new qc(new vd([new A(-.075,1.51,.294),new A(0,1.49,.302),new A(.075,1.51,.294)]),8,.009,5,!1),Ie(6899260));if(s.add(c),e!=="build"&&(Mn(s,0,1.91,-.035,.35,a.cap,[1.04,.43,1.03]),Mn(s,0,1.91,.29,.3,a.cap,[.95,.12,.54])),e==="build"){const f=new Ot(new un(.39,.35,.18,16),Ie(16760120));f.position.set(0,2.03,-.04),f.castShadow=!0,s.add(f);const g=new Ot(new un(.46,.46,.045,18),Ie(16760120));g.position.set(0,1.94,.05),g.castShadow=!0,s.add(g);for(const S of[-.24,.24])P(s,S,1.15,.31,.07,.4,.028,16771240);P(s,0,1.08,.31,.4,.055,.025,16773831,!0);for(const S of[-.17,.17])P(s,S,.78,.25,.12,.14,.08,14787127,!0);P(s,0,1.31,.341,.42,.075,.035,16772816,!0)}else if(e==="logistics")P(s,0,1.12,-.24,.54,.68,.25,3235387,!0),P(s,0,1.92,.335,.22,.17,.03,15525832,!0),P(s,0,1.15,.31,.22,.21,.03,15525832,!0),P(s,.3,1.05,.15,.13,.23,.12,4742219,!0),P(s,0,1.12,-.32,.42,.54,.22,4616010,!0),P(s,0,1.15,.347,.15,.15,.025,4949852,!0);else if(e==="workshop"){P(s,0,1.94,.335,.17,.035,.025,15196618,!0),P(s,.3,.82,.12,.13,.3,.13,9017244,!0),P(s,-.3,.83,.14,.13,.24,.15,13134403,!0),P(s,0,1.08,.31,.37,.18,.03,3425875,!0),P(s,0,.79,.22,.62,.085,.13,2503999,!0);for(const f of[-.2,.2])P(s,f,.79,.302,.11,.11,.045,12029537,!0)}else if(e==="elite"){P(s,0,1.18,.31,.21,.16,.035,9266644);for(const f of[-.36,.36])Mn(s,f,1.75,0,.14,5653875);for(const f of[-.3,.3])P(s,f,1.13,.09,.15,.22,.37,9204411,!0);P(s,0,.87,.24,.4,.1,.08,10189009,!0),P(s,0,1.2,.352,.33,.27,.055,15985141,!0),P(s,0,1.17,.385,.12,.12,.025,9266644,!0);for(const f of[-.23,.23])P(s,f,.73,.2,.12,.15,.1,9204411,!0)}if(i>=2)for(const f of[-.3,.3])P(s,f,1.08,0,.12,.16,.36,2702147,!0);const l=[],u=[],d=[],h=[];for(const f of[-1,1]){const g=new xe;g.position.set(f*.18,.7,0),s.add(g),P(g,0,-.14,0,.24,.3,.28,a.trousers,!0);const S=new xe;S.position.y=-.29,g.add(S),P(S,0,-.13,0,.23,.29,.27,a.trousers,!0),P(S,0,-.3,.07,.28,.18,.4,e==="elite"?4603985:5132616,!0),d.push(S),l.push(g);const m=new xe;m.position.set(f*.39,1.24,0),s.add(m),P(m,0,-.13,0,.22,.36,.27,n,!0);const p=new xe;p.position.y=-.28,m.add(p),P(p,0,-.1,0,.18,.24,.2,o,!0),i>=1&&P(p,0,-.16,.06,.2,.17,.22,3160638,!0),Mn(p,0,-.24,.015,.135,i>=1||e==="elite"?3225922:o),h.push(p),u.push(m)}return r.userData.rig={body:s,legs:l,arms:u},{root:r,animate(f,g,S=!1,m=!1){const p=m?13.5:8.4,b=m?.72:.42;s.position.y=g?Math.abs(Math.sin(f*p))*(m?.065:.035):Math.sin(f*1.8)*.008,s.rotation.z=g?Math.sin(f*p/2)*(m?.035:.018):0,s.rotation.x=m?.13:0,l.forEach((w,x)=>w.rotation.x=g?Math.sin(f*p+x*Math.PI)*b:0),d.forEach((w,x)=>w.rotation.x=g?Math.max(0,-Math.sin(f*p+x*Math.PI))*(m?.9:.4):0),h.forEach(w=>w.rotation.x=S?-.35:m?-.8:-.15),u.forEach((w,x)=>w.rotation.x=S?-1.12:g?-Math.sin(f*p+x*Math.PI)*(m?.62:.34):.02)}}}function Id(n){const t=new xe;if(n===0||n===1){const e=n===0?2.28:1.44,i=n===0?13400401:6396560;P(t,0,.46,0,e,.5,1.4,i,!0),P(t,0,.95,-.57,e,.83,.24,i,!0);for(const s of[-1,1])P(t,s*(e/2-.12),.73,0,.22,.48,1.4,i,!0),P(t,s*(e/2-.2),.12,.45,.12,.24,.12,6837063);const r=n===0?2:1;for(let s=0;s<r;s++)P(t,(s-(r-1)/2)*.95,.76,.02,n===0?.91:1.05,.17,1.01,n===0?14721135:9287842,!0)}else if(n===2)P(t,0,.76,0,1.45,1.05,.17,2440008,!0),P(t,0,.77,.096,1.29,.89,.02,6655645),P(t,0,.18,0,.14,.3,.14,2440008),P(t,0,.05,0,.6,.1,.5,2440008);else if(n===3)P(t,0,.36,0,.71,.72,.71,12489310,!0),P(t,0,.726,0,.14,.015,.71,15324324),On(t,"BOOKS",0,.4,.36,.55,"#dab989");else if(n===4){const e=new Ot(new un(.29,.22,.49,12),Ie(14059109));e.position.y=.25,t.add(e);for(let i=0;i<7;i++){const r=i*2.4,s=Mn(t,Math.sin(r)*.18,.8+i%3*.11,Math.cos(r)*.18,.23,i%2?7380055:4424296,[.45,1.6,.55]);s.rotation.z=Math.sin(r)*.65}}else if(n===5){P(t,0,.56,0,1.5,1.08,.72,11040848,!0);for(let e=0;e<3;e++)P(t,0,.24+e*.32,.371,1.36,.27,.035,12950638),P(t,0,.24+e*.32,.403,.3,.04,.04,4608076)}else if(n===6){const e=new Ot(new un(.34,.4,.12,16),Ie(4215382));e.position.y=.06,t.add(e),P(t,0,.83,0,.08,1.55,.08,4215382);const i=new Ot(new eo(.37,.62,16,1,!0),Ie(15321203));i.position.y=1.55,i.rotation.x=Math.PI,t.add(i)}else if(n===7)P(t,0,1.02,0,.72,1.95,.16,7756355,!0),P(t,0,1.02,.09,.56,1.7,.022,10207944,!0),P(t,0,.08,0,.72,.16,1.45,7756355,!0);else if(n===8){P(t,0,.78,0,2.35,1.42,1.22,3159611,!0),P(t,0,1.43,-.23,2.2,.18,.7,2435630,!0),P(t,0,.92,.61,2.15,.13,.38,15657437);for(let e=0;e<10;e++)P(t,-.972+e*.216,.996,.63,.207,.025,.32,16775657);for(const e of[0,1,3,4,5,7,8])P(t,-.864+e*.216,1.017,.52,.115,.038,.19,2435630);for(const e of[-.9,.9])P(t,e,.25,.2,.17,.5,.17,2435630)}else if(n===10){P(t,0,.34,0,.66,.68,.66,11257276,!0),P(t,0,.7,0,.7,.08,.7,15324316,!0);for(const e of[-.18,.18])for(const i of[-.17,.17]){const r=new Ot(new un(.095,.075,.42,10),Ie(10409179));r.position.set(e,.53,i),t.add(r)}}else if(n===11){P(t,0,.33,0,.7,.66,.7,9399380,!0);for(let e=0;e<5;e++)P(t,-.2+e*.1,.7,0,.06,.08,.55,[6455171,12812390,14862731][e%3],!0)}else n===12?(P(t,0,.32,0,.68,.62,.64,3689557,!0),P(t,0,.65,0,.54,.09,.48,7906989,!0),P(t,0,.35,.335,.28,.22,.035,14730365,!0)):(P(t,0,.42,0,.72,.82,.72,13081188,!0),On(t,"FRAGILE",0,.45,.38,.72,"#efb36d"));return t}const qr={front:.2,back:5.8,rampEnd:8.8,depth:7};function Vx(n=5,t=0,e="base",i=!0){const r=new xe,s=new xe,o=new xe;s.position.set(3,0,.14),o.position.set(-3,0,-.14),s.add(o),r.add(s);const a=[],c=[];r.name="active-truck";const l=qr.front+n*.8,u=l-qr.front,d=(l+qr.front)/2,h={base:{cab:15777101,box:t>1?16052194:14935256,trim:3822432,roof:16046464},city:{cab:15198169,box:15987176,trim:2647174,roof:13951198},build:{cab:15632185,box:14787421,trim:14968866,roof:15770440},premium:{cab:3423294,box:4278087,trim:13149004,roof:4868933}}[e]??{cab:15777087,box:16052194,trim:3768216,roof:14862703},f=h.cab,g=h.box;if(r.userData.bodyColor=f,i&&(qr.back=l,qr.rampEnd=l+2.2,qr.depth=n),P(o,3,.55,d,3.3,.42,u+.2,3162186,!0),P(o,3,.735,d,3.2,.09,u,13350548),t>0){P(o,3,1.9,.15,3.3,2.65,.15,g);for(const x of[1.35,4.65]){P(o,x,.99,d,.1,.4,u+.2,g),P(o,x,2.71,d,.08,.1,u+.2,9808549);for(const _ of[.15,l+.05])P(o,x,1.95,_,.09,1.8,.09,12240831)}}else{P(o,3,.88,.15,3.25,.22,.1,e==="base"?9010537:h.trim,!0);for(const x of[1.35,4.65])P(o,x,.88,d,.1,.22,u+.1,e==="base"?9010537:h.trim,!0)}const S=[];if(t>0)for(const x of[1.35,4.65])S.push(Ch(P(o,x,1.72,d,.07,1.82,u,g,!0)));P(r,3,.78,-1.05,3.2,.72,2.1,f,!0),P(r,3,1.03,-2.12,3.08,.55,.19,f,!0),P(r,3,1.42,-.03,3.2,1.55,.12,f,!0);for(const x of[1.45,4.55])for(const _ of[-2.02,-.08])P(r,x,1.48,_,.18,1.45,.18,f,!0);const m=P(r,3,1.8,-2.12,2.82,.65,.04,6523029);m.material=new Sr({color:7974585,transparent:!0,opacity:.55,roughness:.18,metalness:.05}),P(r,2.45,1.13,-1.25,.72,.72,.72,3362132,!0),P(r,3.55,1.13,-1.25,.72,.72,.72,3362132,!0),P(r,3,1.38,-1.84,2.5,.18,.45,2506051,!0);const p=new Ot(new vs(.24,.045,8,18),Ie(2439229));p.position.set(3.72,1.55,-1.65),p.rotation.x=Math.PI/2.8,r.add(p),P(r,3,2.03,-1.05,3.3,.14,2.2,e==="base"?16111479:h.cab,!0),P(r,3,.63,-2.16,3.15,.28,.16,4150615,!0),P(r,3,.91,-2.2,1.05,.2,.05,6517617,!0);for(const x of[1.78,4.22])P(r,x,1.04,-2.23,.48,.24,.05,16770720,!0),P(r,x,1.58,-2.19,.19,.13,.06,14253140,!0);for(const x of[1.25,4.75])P(r,x,1.65,-1.25,.22,.15,.38,3164235,!0);for(const x of[1.37,4.63]){const _=P(r,x,1.78,-1,.025,.55,1.5,6523029);_.material=new Sr({color:7974585,transparent:!0,opacity:.42,roughness:.15});for(const M of[-1.2,l-.45]){const R=new xe;R.position.set(x<3?1.17:4.83,.46,M),(M<0?r:o).add(R);const v=new Ot(new un(.46,.46,.28,16),Ie(2504510));v.rotation.z=Math.PI/2,v.castShadow=!0;for(const L of[-1,1])P(v,0,L*.151,.19,.09,.025,.3,15255388);const T=new xe;R.add(T),T.add(v);const D=new Ot(new un(.23,.23,.3,12),Ie(10203048));D.rotation.z=Math.PI/2,T.add(D),a.push(T),M<0&&c.push(R)}}for(const x of[1.8,4.2])P(r,x,.95,-2.13,.45,.22,.06,16772529,!0);t===0&&P(r,3,.58,-2.29,3.2,.18,.15,h.trim,!0),P(r,3,.96,-2.305,1.26,.23,.045,e==="premium"?13149004:2505795,!0);for(let x=0;x<5;x++)P(r,2.52+x*.24,.96,-2.336,.045,.16,.02,e==="premium"?2700859:9218728,!0);if(t>=1){for(const x of[1.34,4.66])P(o,x,1.09,d,.035,.17,u,h.trim);P(r,3,.61,-2.25,3.3,.18,.18,12965847,!0)}if(t>=2){P(r,3,2.16,-1.12,2.35,.2,1.2,h.trim,!0);for(const x of[1.55,4.45])P(r,x,1.09,-2.27,.18,.35,.04,15334143,!0)}if(t>=3){for(const x of[1.6,4.4])P(o,x,.63,d,.13,.27,u-.2,h.trim,!0);for(const x of[2.3,3.7])P(r,x,2.31,-1.25,.46,.12,.22,16758596,!0)}if(t>=4){P(r,3,.86,-2.28,1.3,.36,.09,2379623,!0);for(let x=0;x<4;x++)P(r,2.55+x*.3,.86,-2.34,.08,.25,.025,13624545);P(r,3,2.12,-.8,1.2,.08,.6,15850653,!0)}if(e==="build"){for(const x of[2.05,3.95])P(r,x,2.16,-1.35,.23,.2,.23,16760134,!0);for(const x of[2.2,2.8,3.4,4]){const _=P(r,x,.65,-2.29,.2,.11,.025,16773577);_.rotation.z=-.45}for(const x of[1.37,4.63])P(o,x,.89,d,.075,.15,u,15101480,!0)}if(e==="city"){P(r,3,.62,-2.32,3.12,.12,.05,2647174,!0);for(const x of[1.37,4.63])P(o,x,.95,d,.075,.18,u,2647174,!0);for(const x of[1.35,4.65])P(r,x,.72,-1.12,.035,.12,1.7,2647174,!0)}if(e==="premium"){if(t>0)for(const x of[1.4,4.6])P(o,x,2.77,d,.08,.09,u,13149004);P(r,3,.62,-2.31,2.9,.08,.04,13149004);for(const x of[1.37,4.63])P(o,x,.9,d,.07,.13,u,13149004,!0);for(const x of[2.25,2.75,3.25,3.75]){const _=new Ot(new un(.105,.105,.1,12),Ie(16769947));_.position.set(x,2.18,-1.82),_.castShadow=!0,r.add(_)}}const b=new xe;b.position.set(3,.78,l),o.add(b),P(b,0,0,1.15,3.2,.1,2.3,8690328,!0);for(const x of[-1.45,1.45])P(b,x,.08,1.15,.12,.12,2.15,4217958,!0);P(b,0,.08,2.18,1.15,.1,.1,15779678,!0);const w=Ch(P(o,3,2.83,d,3.32,.09,u,t>1?h.roof:10134942,!0));if(w.visible=t>0,t>1)for(const x of[d-u*.32,d+u*.32])P(o,3,2.76,x,2.9,.08,.08,16044905);for(let x=0;x<=4;x++)P(o,1.4+x*.8,.788,d,.018,.008,u,15392707);for(let x=0;x<=n;x++)P(o,3,.79,.2+x*.8,3.2,.008,.018,15392707);return r.userData.rampPivot=b,r.userData.enclosed=t>0,r.userData.cargoWalls=S,r.userData.roof=w,r.userData.wheels=a,r.userData.frontWheels=c,r.userData.trailer=s,r.userData.cargo=o,r}const fc=4,Wx=5,Ft=.8,oa=n=>5+Math.floor(Math.max(0,Math.min(6,n))/2),Yi=[{id:"linden",name:"Linden District",x:-60,variant:0},{id:"old-town",name:"Old Town",x:-60,z:-54,variant:1},{id:"market",name:"Market Square",x:58,variant:2},{id:"birch",name:"Birch Road",x:58,z:36,variant:3},{id:"lake",name:"Lake View",x:111,variant:4},{id:"north-linden",name:"North Linden",x:-60,z:36,variant:5},{id:"north-old-town",name:"Oak Court",x:111,z:36,variant:6},{id:"south-market",name:"Garden Close",x:58,z:-54,variant:7},{id:"south-birch",name:"Birch Gardens",x:111,z:-54,variant:8}],ur=[{name:"Corduroy Sofa",w:3,d:2,value:230,weight:4,vulnerability:0},{name:"Armchair",w:2,d:2,value:110,weight:2,vulnerability:0},{name:"Television",w:2,d:1,value:270,weight:2,vulnerability:8},{name:"Book Box",w:1,d:1,value:65,weight:3,vulnerability:0},{name:"Houseplant",w:1,d:1,value:85,weight:1,vulnerability:7},{name:"Dresser",w:2,d:1,value:160,weight:4,vulnerability:1},{name:"Floor Lamp",w:1,d:1,value:120,weight:1,vulnerability:11},{name:"Standing Mirror",w:1,d:2,value:310,weight:2,vulnerability:14},{name:"Piano",w:3,d:2,value:620,weight:7,vulnerability:9},{name:"China Box",w:1,d:1,value:390,weight:2,vulnerability:17},{name:"Glassware Crate",w:1,d:1,value:340,weight:1,vulnerability:18},{name:"Record Collection",w:1,d:1,value:260,weight:1,vulnerability:12},{name:"Camera Case",w:1,d:1,value:410,weight:1,vulnerability:20}];function Nd(n){let t=n>>>0;return()=>(t=Math.imul(1664525,t)+1013904223>>>0)/4294967296}function Xx(n,t,e=[]){const i=Array.from({length:t},()=>Array(fc).fill(!1));for(const s of e)i[s]&&i[s].fill(!0);const r=[];for(const s of n){const o=ur[s];let a=!1;for(const c of[!1,!0]){const l=c?o.d:o.w,u=c?o.w:o.d;for(let d=0;d<=t-u&&!a;d++)for(let h=0;h<=fc-l&&!a;h++){let f=!0;for(let g=0;g<u;g++)for(let S=0;S<l;S++)f&&=!i[d+g][h+S];if(f){for(let g=0;g<u;g++)for(let S=0;S<l;S++)i[d+g][h+S]=!0;r.push(s),a=!0}}if(a)break}}return r}function $x(n=0,t=0){const e=Nd(n*997+t*313+41),i=oa(t),r=Math.min(6+Math.floor(t/2)+Math.floor(n/2),14);let s=n===0&&t===0?[0,1,2,3,4,5]:Array.from({length:r},(a,c)=>c>=r-Math.min(1+Math.floor(n/2),5)?9+(c+n)%4:(c*3+n*2+t)%ur.length);(n!==0||t!==0)&&s.sort((a,c)=>ur[c].w*ur[c].d-ur[a].w*ur[a].d),s=Xx(s,i);const o=[];return s.map((a,c)=>{const l=ur[a],u=l.w*Ft/2,d=l.d*Ft/2;let h=-3,f=2,g=!1;for(let S=0;S<250;S++){const m=-9.75+u+e()*(8.3-u*2),p=-4.75+d+e()*(8.7-d*2),b=(n+1)%2?Math.abs(p+.35)<d+.32:Math.abs(m+5.6)<u+.32,w=o.some(x=>Math.abs(m-x.x)<u+x.hw+.24&&Math.abs(p-x.z)<d+x.hd+.24);if(!b&&!w){h=Math.round(m*10)/10,f=Math.round(p*10)/10,g=!0;break}}if(!g)for(let S=-4.2+d;S<=4.1-d&&!g;S+=.45)for(let m=-9.7+u;m<=-1.5-u&&!g;m+=.45){const p=(n+1)%2?Math.abs(S+.35)<d+.24:Math.abs(m+5.6)<u+.24,b=o.some(w=>Math.abs(m-w.x)<u+w.hw+.16&&Math.abs(S-w.z)<d+w.hd+.16);!p&&!b&&(h=Math.round(m*10)/10,f=Math.round(S*10)/10,g=!0)}return o.push({x:h,z:f,hw:u,hd:d}),{...l,model:a,id:c,fragile:l.vulnerability>=7,vulnerability:l.vulnerability+Math.min(n*1.5,9),location:"pickup",x:0,z:0,pickupX:h,pickupZ:f,rotated:!1}})}function Jc(n=0,t=0,e=n){const i=["Baumann Family","Mara King","Morning Glow Café","Dr. Hoffman","Sun Deck Hotel","Northern Lights Gallery"],r=["First Apartment Move","Old House, Narrow Doors","Café Grand Opening","Delicate Private Move","Major Hotel Move-In","Premium Art Transport"],s=Nd(e*2654435761+n*97+1729>>>0),o=Math.floor(s()*Yi.length),a=Yi.map((f,g)=>g).filter(f=>{const g=Yi[o],S=Yi[f];return f!==o&&Math.hypot(g.x-S.x,(g.z??0)-(S.z??0))>=45}),c=a[Math.floor(s()*a.length)],l=Yi[o],u=Yi[c],d=$x(n,t),h=Math.round(d.reduce((f,g)=>f+g.value,0)*(.62+Math.min(n,12)*.035));return{client:i[n%i.length],title:r[n%r.length],from:l.name,to:u.name,fromSite:l,toSite:u,difficulty:n+1,items:d,reward:h}}function tn(n){return n.rotated?[n.d,n.w]:[n.w,n.d]}function Qc(n,t,e,i,r=fc,s=Wx){const[o,a]=tn(t);return Number.isInteger(e)&&Number.isInteger(i)&&e>=0&&i>=0&&e+o<=r&&i+a<=s&&!n.some(c=>{if(c.id===t.id||c.location!=="truck")return!1;const[l,u]=tn(c);return e<c.x+l&&e+o>c.x&&i<c.z+u&&i+a>c.z})}const Yx=["supply","mill","assembly","paint","packing"],br={truck:"Complete truck upgrade",cargo:"Included with truck",gear:"Included with truck",worker:"Strength & speed",yard:"Expand company base",hire:"Hire crew with truck",fleet:"Employee truck upgrade",factory:"Buy furniture company"},bn={truck:6,cargo:3,gear:3,worker:6,yard:4,hire:4,fleet:4,factory:1};function Ud(){return{cash:450,jems:0,ownedSkins:{truck:["base"],person:["standard"]},selectedSkins:{truck:"base",person:"standard"},jobs:0,earned:0,levels:{truck:0,cargo:0,gear:0,worker:0,yard:0,hire:0,fleet:0,factory:0},fleet:[],timber:0,parts:0,products:0,painted:0,packed:0,sold:0,production:0,supply:0,test:!1,contributions:{},stationLevels:{supply:0,mill:0,assembly:0,paint:0,packing:0},stationProgress:{supply:0,mill:0,assembly:0,paint:0,packing:0},stationContributions:{},daily:{lastClaim:"",streak:0},finished:!1}}function qx(n){const t=Ud(),e={...t,...n,jems:Math.max(0,Math.floor(Number(n?.jems)||0)),ownedSkins:{truck:[...new Set(["base",...Array.isArray(n?.ownedSkins?.truck)?n.ownedSkins.truck:[]])],person:[...new Set(["standard",...Array.isArray(n?.ownedSkins?.person)?n.ownedSkins.person:[]])]},selectedSkins:{...t.selectedSkins,...n?.selectedSkins},levels:{...t.levels,...n?.levels},contributions:{...t.contributions,...n?.contributions},stationLevels:{...t.stationLevels,...n?.stationLevels},stationProgress:{...t.stationProgress,...n?.stationProgress},stationContributions:{...t.stationContributions,...n?.stationContributions}};return e.levels.truck=Math.min(bn.truck,Math.max(e.levels.truck,e.levels.cargo,e.levels.gear)),e.levels.cargo=e.levels.truck,e.levels.gear=e.levels.truck,e.fleet=(e.fleet??[]).map(i=>({...i,pending:i.pending??0})),e.levels.hire=Math.max(e.levels.hire,e.fleet.length),e.levels.yard=Math.max(e.levels.yard,e.fleet.length),e.levels.fleet=e.fleet.length,e.levels.factory=e.finished?1:0,e.ownedSkins.truck.includes(e.selectedSkins.truck)||(e.selectedSkins.truck="base"),e.ownedSkins.person.includes(e.selectedSkins.person)||(e.selectedSkins.person="standard"),e}function pr(n,t){return Math.round({truck:520,cargo:800,gear:450,worker:260,yard:1800,hire:2200,fleet:1800,factory:5e4}[t]*(1+n.levels[t]*.7+n.levels[t]**2*.09))}function Fd(n,t){return n.levels[t]>=bn[t]?"Maximum level":t==="yard"&&n.levels.truck<bn.truck?"Max your own truck first":t==="yard"&&n.levels.yard>n.fleet.length?"Hire a crew for the current bay first":t==="hire"&&n.levels.yard<1?"Expand the base for a parking bay":t==="hire"&&n.fleet.length>=n.levels.yard?"Upgrade the base for another parking bay":t==="fleet"?"Upgrade employee trucks at their own parking bay":t==="factory"&&!Bd(n)?"Max every truck, crew and base upgrade first":""}function Kx(n,t){const e=Fd(n,t);if(e)return e;const i=Math.max(0,pr(n,t)-(n.contributions?.[t]??0));return!n.test&&n.cash<i?`Need $${i}`:(n.test||(n.cash-=i),n.contributions&&delete n.contributions[t],n.levels[t]++,t==="truck"&&(n.levels.cargo=n.levels.truck,n.levels.gear=n.levels.truck),t==="hire"&&(n.fleet.push({level:0,phase:-n.fleet.length*.08,completed:0,pending:0,route:n.fleet.length%3}),n.levels.fleet=n.fleet.length),t==="factory"&&(n.finished=!0),"")}function ds(n,t){n.cash+=Math.round(t),n.earned+=Math.round(t)}function Zx(n,t){const e=n.fleet[t];if(!e||e.level>=4)return!1;const i=1e3*(e.level+1),r=Math.max(0,i-(e.contribution??0));return!n.test&&n.cash<r?!1:(n.test||(n.cash-=r),e.contribution=0,e.level++,!0)}function Od(n){return 48-n.level*5}function Bd(n){return n.levels.truck>=bn.truck&&n.levels.worker>=bn.worker&&n.levels.yard>=bn.yard&&n.fleet.length>=bn.hire&&n.fleet.every(t=>t.level>=4)}function zd(n){return 260+n.level*125}function Jx(n,t){const e=n.fleet[t],i=Math.round(e?.pending??0);return!e||i<=0?0:(e.pending=0,ds(n,i),i)}function Ph(n,t=new Date){const e=t.toISOString().slice(0,10);if(n.daily.lastClaim===e)return 0;const i=new Date(t);i.setUTCDate(i.getUTCDate()-1),n.daily.streak=n.daily.lastClaim===i.toISOString().slice(0,10)?n.daily.streak>=8?1:n.daily.streak+1:1,n.daily.lastClaim=e;const r=ss(n.daily.streak);return r&&ds(n,r),n.jems+=rs(n.daily.streak),n.daily.streak===8&&(n.ownedSkins.person.includes("build")?n.jems+=5:n.ownedSkins.person.push("build")),r}function rs(n){return[0,1,0,2,0,3,0,0][Math.max(0,Math.min(7,n-1))]}function ss(n){return[75,0,140,0,220,0,320,0][Math.max(0,Math.min(7,n-1))]}function Qx(n,t){return n.levels.factory<1?"Build the workshop first":t==="supply"?!n.test&&n.cash<24?"Need $24 for timber":"":t==="mill"?n.timber<1?"Collect timber first":"":t==="assembly"?n.parts<2?"Process two timber pieces first":"":t==="paint"?n.products<1?"Assemble a chair first":"":n.painted<1?"Paint a chair first":""}function jx(n,t){const e=Qx(n,t);return e||(t==="supply"?(n.test||(n.cash-=24),n.timber+=3,""):t==="mill"?(n.timber--,n.parts++,""):t==="assembly"?(n.parts-=2,n.products++,""):t==="paint"?(n.products--,n.painted++,""):(n.painted--,n.packed===0&&(n.supply=0),n.packed++,""))}function tM(n,t,e){let i=0;for(const[r,s]of n.fleet.entries())if(r===e){if((s.pending??0)>0){s.phase=0;continue}for(s.phase+=t/Od(s);s.phase>=1;){s.phase=0,s.completed++;const o=zd(s);s.pending=(s.pending??0)+o}}if(n.levels.factory&&!n.finished){const r={supply:8,mill:6,assembly:10,paint:7,packing:7};for(const s of Yx)if(n.stationLevels[s]>=2){const o=r[s]/(1+(n.stationLevels[s]-2)*.7+n.levels.factory*.08);if(n.stationProgress[s]+=t/o,n.stationProgress[s]>=1){const a=jx(n,s);n.stationProgress[s]=a?Math.min(.95,n.stationProgress[s]):n.stationProgress[s]-1}}if(n.packed>0?n.supply+=t:n.supply=0,n.supply>=10){n.supply=0,n.packed--,n.sold++;const s=190+n.levels.factory*35;ds(n,s),i+=s}}return i}const Dh={base:0,pickup:-48,destination:66},He={minX:-90,maxX:128,minZ:-72,maxZ:86},gl=7,mn=[-42,12,48],mr=[-78,-30,42,90],Kr=mr;function mi(n){n.removeFromParent(),n.traverse(t=>{t instanceof Ot&&(t.geometry.dispose(),t.userData.owned&&(t.material.map?.dispose(),t.material.dispose())),t instanceof $p&&(t.material.map?.dispose(),t.material.dispose())})}function kd(n){n.material=n.material.clone();const t=n.material;return t.transparent=!0,n.userData.owned=!0,n}function qo(n,t,e,i,r,s,o,a){const c=new Oe;c.setAttribute("position",new se([-r/2,0,-s/2,r/2,0,-s/2,0,o,-s/2,-r/2,0,s/2,r/2,0,s/2,0,o,s/2],3)),c.setIndex([0,2,1,3,4,5,0,3,5,0,5,2,2,5,4,2,4,1]),c.computeVertexNormals();const l=new Ot(c,Ie(a));return l.position.set(t,e,i),l.castShadow=!0,n.add(l),l}function ks(n,t,e,i){P(n,t,.75,e,.2,1.5,.2,8411970);for(let r=0;r<3;r++){const s=i===1?new eo(1-r*.15,1.6,7):new Xc(.9,1),o=new Ot(s,Ie(i===2?15181958:i===1?3770233:r%2?7845223:5087096));o.position.set(t+(i===1?0:Math.sin(r*3)*.4),1.55+r*.4,e+Math.cos(r*3)*.2),o.castShadow=!0,n.add(o)}}function Gd(n){n.updateMatrixWorld(!0);const t=new Map;n.traverse(e=>{if(e instanceof Ot&&!e.userData.owned&&e.material instanceof Sr){const i=Object.entries(e.geometry.attributes).map(([o,a])=>{const c=a;return`${o}:${c.itemSize}:${c.normalized}`}).sort().join("|"),r=`${e.material.uuid}:${e.geometry.index?"indexed":"plain"}:${i}`,s=t.get(r)??{material:e.material,meshes:[]};s.meshes.push(e),t.set(r,s)}});for(const{material:e,meshes:i}of t.values()){const r=i.map(a=>a.geometry.clone().applyMatrix4(a.matrixWorld)),s=Gx(r);if(r.forEach(a=>a.dispose()),!s)continue;i.forEach(a=>{a.removeFromParent(),a.geometry.dispose()});const o=new Ot(s,e);o.castShadow=o.receiveShadow=!0,n.add(o)}}const eM=n=>n==="industrial"?13025965:n==="shops"?14275260:10731392;function nM(){const n=new xe,t=[],e=[],i=[],r=[],s=8295062,o=15655882,a=new Ot(new Si(1800,1800),Ie(11060874));a.rotation.x=-Math.PI/2,a.position.y=-.09,a.receiveShadow=!0,n.add(a);const c=gl/2,l=1.3,u=(_,M,R)=>{const v=[];let T=M;for(const D of _)D-c>T&&v.push([T,D-c]),T=D+c;return T<R&&v.push([T,R]),v};for(const _ of mn){P(n,6,-.025,_,310,.07,gl,s);for(const[M,R]of u(Kr,-149,161))for(const v of[-1,1])P(n,(M+R)/2,.045,_+v*(c+l/2),R-M,.1,l,o);for(let M=-147;M<159;M+=4.4)Kr.some(R=>Math.abs(M-R)<c+3)||P(n,M,.018,_,1.6,.012,.085,16248269)}for(const _ of Kr){for(const[M,R]of u(mn,-115,116))P(n,_,-.025,(M+R)/2,gl,.07,R-M,s);for(const[M,R]of u(mn,-115,116))for(const v of[-1,1])P(n,_+v*(c+l/2),.045,(M+R)/2,l,.1,R-M,o);for(let M=-113;M<114;M+=4.4)mn.some(R=>Math.abs(M-R)<c+3)||P(n,_,.018,M,.085,.012,1.6,16248269)}const d=(_,M)=>{P(n,_,1.75,M,.12,3.5,.12,3958128),P(n,_,3.54,M,.65,.15,.45,16768657,!0),t.push({x:_,z:M,w:.22,d:.22})},h=(_,M)=>{P(n,_,.5,M,1.65,.16,.55,12094041,!0),P(n,_,.92,M-.25,1.65,.6,.12,12094041,!0);for(const R of[-.6,.6])P(n,_+R,.23,M,.1,.46,.5,4350316);t.push({x:_,z:M,w:1.75,d:.8})};for(const _ of Kr)for(const M of mn){for(const v of[-1,1])for(const T of[-1,1])P(n,_+v*(c+l/2),.045,M+T*(c+l/2),l,.1,l,o);if((_===-30||_===42)&&M===12||_===-78&&M===48)for(const v of[-1,1]){const T=_+v*(c+.75),D=M-v*(c+1.5);P(n,T,1.45,D,.13,2.9,.13,3955044),t.push({x:T,z:D,w:.24,d:.24}),P(n,T,2.85,D,.36,.95,.26,3362392,!0);for(let L=0;L<3;L++)P(n,T,3.12-L*.26,D+.15,.19,.18,.05,[14186849,15778647,7521692][L],!0);for(let L=-2;L<=2;L++)P(n,_+L*1.1,.019,M+v*(c+1.7),.55,.012,1.3,16511188),P(n,_+v*(c+1.7),.019,M+L*1.1,1.3,.012,.55,16511188)}P(n,_+c+1.5,1.2,M+c+2.8,.07,2.4,.07,5468538),t.push({x:_+c+1.5,z:M+c+2.8,w:.2,d:.2}),On(n,M<0?"GARDEN LANE":_<0?"MARKET STREET":"LINDEN WAY",_+c+1.5,2.35,M+c+2.8,1.9,"#dbe8cf")}for(const _ of mn)for(let M=-68;M<88;M+=18)Kr.some(R=>Math.abs(M-R)<8)||(d(M,_+c+.8),P(n,M+2,.017,_+c-.35,.48,.01,.36,5795961));const f=[{x:5,z:-14,w:64,d:43},...Yi.map(_=>({x:_.x-5.6,z:_.z??0,w:17,d:17})),...Yi.map(_=>({x:_.x+4,z:(_.z??0)-2.1,w:11,d:21}))],g=(_,M,R=0)=>Math.abs(_.x-M.x)<(_.w+M.w)/2+R&&Math.abs(_.z-M.z)<(_.d+M.d)/2+R,S=_=>!f.some(M=>g(_,M,.5))&&!i.some(M=>g(_,M,.6))&&!Kr.some(M=>Math.abs(_.x-M)<_.w/2+c+l)&&!mn.some(M=>Math.abs(_.z-M)<_.d/2+c+l),m=(_,M,R,v)=>t.push({x:_,z:M,w:R,d:v}),p=(_,M,R,v=!1)=>{const T=Hd(R,v);T.position.set(_,0,M),n.add(T),m(_,M,1.7,3.1)},b=(_,M,R)=>{ks(n,_,M,R),m(_,M,.4,.4)},w=(_,M,R,v=1)=>{P(n,_,M,R,v+.14,1.14,.09,16445655),P(n,_,M,R+.06,v,.95,.04,8567235),P(n,_,M,R+.09,.055,.95,.035,16445655)},x=(_,M,R,v)=>{const T={x:_,z:M,w:14,d:16,kind:R};if(!S(T))return;i.push(T),P(n,_,.01,M,14,.06,16,eM(R));const D=R==="shops"||R==="industrial",L=R==="dense",O=R==="modern",k=D||L?10:7,I=D?7:6,G=R==="shops"?7:L?6.5:R==="industrial"?4.3:O?3.5:3.1,$=M-2,K=[15719349,14001294,12242896,15198424];P(n,_,G/2,$,k,G,I,O?15789792:K[v%4],!0),m(_,$,k,I),O||D?(P(n,_,G+.15,$,k+.55,.3,I+.6,O?4811632:5077378,!0),O&&P(n,_-1,G+.33,$,3,.06,2,3562871)):(qo(n,_,G,$,k+.6,I+.7,v%2?2:1.25,[12022866,6720918,9991776][v%3]),P(n,_+2,G+.65,$-1.2,.55,1.3,.55,10845797));for(const lt of[-1,1])for(const bt of[-1.6,1.6])P(n,_+lt*(k/2+.04),1.8,$+bt,.08,1.1,1.2,15919056),P(n,_+lt*(k/2+.09),1.8,$+bt,.025,.87,1,8567235);if(v%4===1)for(let lt=0;lt<6;lt++)P(n,_,.28+lt*.43,$+I/2+.014,k,.025,.018,13079681);if(L)for(const lt of[-1.6,1.6])P(n,_+lt,1.1,$+I/2+.16,.25,2.2,.25,15259321);const nt=$+I/2;if(P(n,_,1,nt+.06,1.1,2,.11,4812664,!0),R==="industrial"){P(n,_+2,1.55,nt+.08,3.5,3.1,.14,6323589);for(let lt=0;lt<6;lt++)P(n,_+2,.25+lt*.48,nt+.17,3.35,.045,.025,11453119);On(n,["AUTO SERVICE","TYRE & REPAIR","LOCAL STORAGE","VAN RENTAL"][v%4],_,G-.6,nt+.14,6,"#f6d183")}else{for(const lt of[-k*.32,k*.32])w(_+lt,1.9,nt+.04,O?1.65:1.25);if(G>5)for(const lt of[-3,0,3])w(_+lt,4.8,nt+.04,1.4),L&&(P(n,_+lt,4.08,nt+.5,2.1,.12,.95,15785152),P(n,_+lt,4.55,nt+.98,2.1,.8,.07,4947326));if(R==="shops"){for(const lt of[-3,3])P(n,_+lt,1.4,nt+.13,2.4,2,.06,9422792);if(On(n,["BAKERY","CORNER CAFE","FRESH MARKET","BOOKS & NEWS"][v%4],_,3.45,nt+.18,6.8,"#f5d293"),P(n,_,2.9,nt+.65,9,.15,1.2,[6397575,13928040][v%2]),h(_-3,M+5),Lh(n,_+1.3,M+5),m(_-3,M+5,1.8,.7),P(n,_+2.7,.55,M+3.2,.6,1.1,.6,5075827,!0),v%4===1){P(n,_-3,.78,M+6.7,1,.09,.8,12818788);for(const lt of[-.8,.8])P(n,_-3+lt,.4,M+6.7,.42,.12,.45,12818788)}}}P(n,_+4.8,.055,M+5.2,3,.02,5.3,14142642),P(n,_,.056,M+4.6,1.5,.02,6,15193781);const Y=M<-45?-46.8:M>55?79.4:M>15?38.4:-16.6,tt=M+7.8,rt=Math.max(0,Y-tt);if(rt>0&&(r.push({x:_+4.8,z:(tt+Y)/2,w:3,d:rt},{x:_,z:(tt+Y)/2,w:1.4,d:rt}),P(n,_+4.8,.051,(tt+Y)/2,3,.015,rt,14142642),P(n,_,.051,(tt+Y)/2,1.4,.015,rt,15193781)),v%3!==1&&p(_+4.8,M+5,[14463339,8497586,13073769,15066319][v%4],R==="industrial"),!D){L||(P(n,_+4.8,1.15,M-4.6,2.35,2.3,3.4,14800831),P(n,_+4.8,2.37,M-4.6,2.65,.14,3.7,7311760),P(n,_+4.8,1,M-2.87,1.95,1.9,.06,7310474),P(n,_+4.8,.056,M+.1,2.45,.012,6,14142642),m(_+4.8,M-4.6,2.35,3.4));const lt=new Ot(new vs(.28,.035,5,16),Ie(5406309));lt.rotation.x=-Math.PI/2,lt.position.set(_-2,.09,M+6),n.add(lt),b(_-4.8,M+5.3,v%3),P(n,_-2.3,.48,M+7,.09,.96,.09,8416083),P(n,_-2.3,.95,M+7,.55,.4,.42,6063494,!0),P(n,_-6.7,.45,M,.35,.9,13,6590054,!0);for(let bt=0;bt<5;bt++)P(n,_-3+bt*.45,.16,M+5,.22,.22,.22,[15975529,15177619,14279356][bt%3],!0);v%2===0&&Lh(n,_-2,M+3.1)}for(let lt=0;lt<(L?3:1);lt++)P(n,_-k/2+.4+lt*.55,.4,nt+.55,.43,.8,.46,5404791,!0)};for(const[_,M,R,v]of[[-64,-27,"shops",0],[-46,-27,"shops",1],[-64,30,"shops",2],[-46,30,"shops",3],[-64,-59,"homes",0],[-46,-59,"homes",1],[-16,-59,"homes",2],[3,-59,"homes",3],[24,-59,"homes",0],[56,-59,"modern",0],[75,-59,"modern",1],[56,-26,"modern",2],[75,-26,"modern",3],[-16,30,"industrial",0],[4,30,"industrial",1],[25,30,"industrial",2],[56,30,"dense",0],[75,30,"dense",1],[-64,65,"homes",2],[-46,65,"homes",3],[-16,65,"industrial",3],[4,65,"industrial",0],[56,65,"dense",2],[75,65,"dense",3]])x(_,M,R,v);for(const[_,M,R]of[[-54,-13,"square"],[24,65,"park"]]){const v={x:_,z:M,w:15,d:R==="square"?6:9,kind:R};if(S(v)){i.push(v),P(n,_,.045,M,15,.06,v.d,R==="square"?14930871:9549687),P(n,_,.085,M,13,.02,1.2,15127990);for(const T of[-5.5,5.5])b(_+T,M-2.5,0),h(_+T,M+2.5),d(_+T,M+3.8);if(R==="square"){const T=new Ot(new un(1.6,1.75,.4,16),Ie(14141351));T.position.set(_,.25,M),n.add(T),m(_,M,3.5,3.5);const D=new Ot(new un(1.4,1.4,.04,16),Ie(8045004));D.position.set(_,.47,M),n.add(D),P(n,_,1,M,.4,1.5,.4,15194041,!0)}else{for(const T of[-1.4,1.4])P(n,_+T,1,M-2,.12,2,.12,14857573);P(n,_,2,M-2,3,.13,.13,14857573),P(n,_,.75,M-2,.9,.1,.4,12810081)}}}for(let _=-68;_<86;_+=9)for(const M of[-72,-47,20,55,74]){const R={x:_,z:M,w:2.8,d:2.8};!S(R)||r.some(v=>g(R,v,.3))||M===20&&_>17&&_<26||(b(_,M,Math.abs(Math.round(_+M))%3),P(n,_,.07,M,2.2,.12,2.2,9942137,!0))}for(const _ of[19,21,23]){P(n,_,.4,20,1.5,.18,.12,15384971);for(const M of[-.5,.5])P(n,_+M,.24,20,.08,.48,.12,6978937)}P(n,-20,1.1,18,4,.13,1.7,4946820);for(const _ of[-21.7,-18.3])P(n,_,.55,18,.09,1.1,.09,4946820);h(-20,18),On(n,"BUS",-22.5,2.2,18,.8,"#f5d58c");for(const[_,M]of[[-26,20],[38,-30],[86,22]])P(n,_,.5,M,.65,1,.4,7967115,!0),m(_,M,.65,.4),P(n,_+1.1,.42,M,.2,.84,.2,13207142,!0);for(let _=-64;_<=76;_+=20)P(n,_,1.6,-89,7,3.2,6,13161138),qo(n,_,3.2,-89,7.5,6.5,1.4,8165011),ks(n,_+7,-87,0);for(const _ of[-1,1])for(const M of[-69,-20,27,70]){const R=_<0?-119:131;P(n,R,1.65,M,8,3.3,6,_<0?14073773:12373949),qo(n,R,3.3,M,8.5,6.5,1.4,6523019),ks(n,R+_*6,M+4,1)}for(const _ of[-88,100])for(const M of mn)P(n,_,3.4,M,1.4,1.2,8.4,5401456,!0),P(n,_,1.8,M-3.7,1.4,3.6,1,5401456,!0),P(n,_,1.8,M+3.7,1.4,3.6,1,5401456,!0);return Gd(n),n.userData.lots=i,{root:n,barriers:t,roofs:e}}function Lh(n,t,e){for(const i of[-.4,.4]){const r=new Ot(new vs(.28,.045,5,12),Ie(3495009));r.position.set(t+i,.32,e),n.add(r)}P(n,t,.6,e,.85,.055,.06,12484708),P(n,t+.2,.7,e,.06,.65,.06,12484708)}function Hd(n,t=!1){const e=new xe;P(e,0,.65,0,1.55,.7,3,n,!0),P(e,0,t?1.35:1.12,t?.35:0,1.35,t?.9:.6,t?2:1.7,n,!0),P(e,0,1.2,-.9,1.2,.45,.06,8566465);for(const i of[-.77,.77])for(const r of[-.94,.94]){const s=new Ot(new un(.3,.3,.16,10),Ie(3426900));s.rotation.z=Math.PI/2,s.position.set(i,.3,r),e.add(s)}for(const i of[-.5,.5])P(e,i,.7,-1.52,.35,.2,.04,16769957);return e}function fs(n,t,e=!1,i=0){const r=new xe,s=[],o=[],a=n-5.6,c=-.3,l=e?15259056:15656145;P(r,a,.015,c,10,.12,10.6,13807225);for(let f=0;f<20;f++)P(r,a-4.8+f*.5,.08,c,.016,.01,10.3,12557425);const u=(f,g,S,m)=>(s.push({x:f,z:g,w:S,d:m}),P(r,f,1.55,g,S,3.1,m,l,!0)),d=[u(a,-5.55,10,.22),u(a-5,c,.22,10.5),u(a+5,c,.22,10.5),u(a-3.55,4.95,2.9,.22),u(a+3.55,4.95,2.9,.22)];t%2?d.push(u(a-3.6,-.35,2.8,.15),u(a+3.6,-.35,2.8,.15)):d.push(u(a,-3.1,.15,4.6));for(const f of[a-3,a+3])P(r,f,1.9,-5.4,1.5,1.3,.09,9291988),P(r,f,1.9,-5.32,.07,1.3,.05,16777215);const h=kd(qo(r,a,3.2,c,10.6,11.1,2.05,e?5537671:12152400));o.push({mesh:h,bounds:{x:a,z:c,w:10.5,d:11}}),P(r,a,.04,6,4,.12,2.1,14731169);for(const f of[a-2.15,a+2.15])P(r,f,1.5,4.98,.18,3,.33,5406076);r.position.z=i;for(const f of s)f.z+=i;for(const f of o)f.bounds.z+=i;return{root:r,barriers:s,roofs:o}}function Vd(n){const t=new xe,e=[],i=[],r=n.levels.yard;P(t,5,-.005,-14,63,.1,43,13551792);const s=(o,a,c,l,u,d,h)=>{P(t,o,u/2,a,c,u,l,h,!0),e.push({x:o,z:a,w:c,d:l});const f=kd(P(t,o,u+.15,a,c+.6,.3,l+.6,4353658,!0));i.push({mesh:f,bounds:{x:o,z:a,w:c+1,d:l+1}}),P(t,o,u-.55,a+l/2+.06,c,.7,.15,14922832);const g=On(t,d,o,u-.52,a+l/2+.17,Math.min(c-1,22),"#ffe0a0");g.scale.y=.23};s(-8,-29,27,10,6.4,"MOVING EMPIRE • MOVING COMPANY",15326911);for(const o of[-18,-13,-8,-3,2])P(t,o,4.2,-23.94,3.4,1.25,.1,8566977),P(t,o,4.2,-23.85,.07,1.25,.04,16445911);P(t,-8,1.2,-23.9,2.6,2.4,.12,5537415),P(t,-8,2.65,-22.9,4.4,.15,2.1,15318368),s(-20,-15,8,13,4.2,"STORAGE",13031107),P(t,-15.94,1.65,-15,.12,3.3,4.5,5667459),s(22,-28,26,10,4.5,"GARAGES & SERVICE",14603702);for(const o of[13,22,31]){P(t,o,1.65,-22.93,6,3.3,.15,7509649);for(let a=0;a<7;a++)P(t,o,.2+a*.45,-22.82,5.9,.04,.03,11322808)}for(let o=0;o<r;o++){const a=8+o*4.8;for(const c of[-2,2])P(t,a+c,.055,-8,.075,.02,10,16773843);P(t,a,.055,-13,4,.02,.075,16773843)}for(const o of[{x:-26,z:-14,w:.3,d:43},{x:36,z:-14,w:.3,d:42},{x:5,z:-35,w:62,d:.3}])P(t,o.x,.45,o.z,o.w,.9,o.d,10005152),e.push(o);for(const[o,a]of[[-18,16],[35,2]])P(t,o,.4,7,a,.8,.3,10005152),e.push({x:o,z:7,w:a,d:.3});P(t,4,.07,7.7,16,.015,1.6,14274228);for(const o of[-3.4,11.4])P(t,o,.095,7.7,.12,.01,1.3,16377527);On(t,"MOVING EMPIRE",-19,2.6,6.8,6,"#ffda78"),P(t,-19,1.25,6.6,.2,2.5,.2,4550005),P(t,-10,.55,-1,2.6,1.1,.8,5012609,!0),On(t,"JOBS",-10,1.65,-.9,2,"#ffd168"),On(t,"TRUCK UPGRADES",-.45,1.35,-3.35,3.7,"#fff0bd");for(const o of[-1.75,.85])P(t,o,.65,-3.43,.12,1.3,.12,4550005);for(let o=0;o<5;o++){const a=new Ot(new vs(.42,.14,8,14),Ie(3754058));a.rotation.x=Math.PI/2,a.position.set(-22+o*.92,.18,-7.5),t.add(a)}P(t,-20,.08,-6.5,4.6,.04,.12,15185750),On(t,"STRENGTH & STAMINA",-20,.32,-6.45,3.5,"#fff0bd"),On(t,"YARD & CREWS",-8,3.75,-23.72,4.2,"#fff0bd");for(let o=0;o<3;o++){const a=-13.7+o*2.1,c=-19.3;for(let l=0;l<3;l++)P(t,a,.12+l*.13,c,1.5,.1,1.1,11635291);P(t,a,.72,c,1.15,.8,.8,14201211,!0),P(t,a,1.13,c,.12,.025,.8,15979675),e.push({x:a,z:c,w:1.5,d:1.1})}P(t,-14,.8,-10,1.25,1.6,1,5274996,!0),e.push({x:-14,z:-10,w:1.3,d:1.1}),P(t,-13,.45,-22,1.2,.9,.7,12351585,!0);for(const o of[-12.8,-11.8]){const a=new Ot(new eo(.22,.7,8),Ie(15179868));a.position.set(o,.35,-8),t.add(a)}P(t,-14,.8,-13,.07,1.6,.07,4027008),P(t,-14,.12,-12.7,.65,.08,.55,4027008),P(t,-13,.75,-15.5,1.1,1.5,.75,12891029,!0),e.push({x:-13,z:-15.5,w:1.1,d:.75});for(const o of[-22,-18]){const a=Hd(o===-22?11059896:13998968);a.position.set(o,0,2),t.add(a),e.push({x:o,z:2,w:1.7,d:3.1})}return ks(t,-24,-24,0),ks(t,7,-26,1),Gd(t),{root:t,barriers:e,roofs:i}}function Ih(n,t,e,i,r=7589002,s=0){const o=Hx(n,t,r,!1,s);return o.position.set(e,.08,i),o}function Wd(n){return[1.4,1.4,1.4,.74,1.35,1.15,1.9,2.05,1.55,.9][n]??1}function iM(n,t,e={}){const i=new Map,r=new Map,s=(p,b)=>`${p.toFixed(3)}:${b.toFixed(3)}`,o=(p,b)=>{const w=s(p,b);return i.has(w)||(i.set(w,new A(p,0,b)),r.set(w,[])),w},a=(p,b)=>{if(p===b)return;const w=i.get(p).distanceTo(i.get(b));r.get(p).push({to:b,cost:w}),r.get(b).push({to:p,cost:w})},c=[...new Set([...mr,n.x,t.x])].sort((p,b)=>p-b);for(const p of mn){const b=c.map(w=>o(w,p));for(let w=1;w<b.length;w++)a(b[w-1],b[w])}for(const p of mr){const b=[...new Set([...mn,n.z,t.z])].sort((w,x)=>w-x).map(w=>o(p,w));for(let w=1;w<b.length;w++)a(b[w-1],b[w])}const l=o(n.x,n.z),u=o(t.x,t.z),d=p=>mn.reduce((b,w)=>Math.abs(w-p)<Math.abs(b-p)?w:b),h=p=>mr.reduce((b,w)=>Math.abs(w-p)<Math.abs(b-p)?w:b);a(l,o(n.x,e.startLane??d(n.z))),Math.abs(h(n.x)-n.x)<4.5&&a(l,o(h(n.x),n.z)),a(u,o(t.x,e.goalLane??d(t.z)));const f=new Map([[l,0]]),g=new Map,S=new Set(i.keys());for(;S.size;){let p="",b=1/0;for(const w of S){const x=f.get(w)??1/0;x<b&&(b=x,p=w)}if(!p||p===u)break;S.delete(p);for(const w of r.get(p)??[]){const x=b+w.cost;x<(f.get(w.to)??1/0)&&(f.set(w.to,x),g.set(w.to,p))}}const m=[];for(let p=u;p&&(m.push(i.get(p).clone()),p!==l);p=g.get(p));return m.reverse(),m[0]?.distanceTo(n)??!0?[n.clone(),t.clone()]:m.filter((p,b)=>b===0||p.distanceToSquared(m[b-1])>.01)}function rM(n,t,e){const i=t.x-n.x,r=t.z-n.z,s=e.x-t.x,o=e.z-t.z,a=Math.atan2(i*o-r*s,i*s+r*o);return Math.abs(a)<.35?"straight":Math.abs(a)>Math.PI-.35?"around":a>0?"right":"left"}function sM(n,t,e,i=1.5){const r=t.x-n.x,s=t.z-n.z,o=Math.hypot(r,s);return o>.01&&((e.x-t.x)*r+(e.z-t.z)*s)/o>i}const ce={name:"Jems",icon:"◆",color:"#8655cf"},aa={truck:[{id:"base",name:"Original",price:0,color:"#e6ad51",detail:"Yellow · classic Moving Empire truck"},{id:"city",name:"City",price:25,color:"#cbdde1",detail:"Cream white · blue accents"},{id:"build",name:"Construction",price:40,color:"#ec8538",detail:"Worksite orange · safety stripes"},{id:"premium",name:"Premium",price:65,color:"#303638",detail:"Charcoal · gold details"}],person:[{id:"standard",name:"Standard",price:0,color:"#e6ad51",detail:"Yellow shirt · blue cap"},{id:"build",name:"Construction",price:15,color:"#f29a32",detail:"Hard hat · safety vest"},{id:"logistics",name:"Logistics",price:20,color:"#4a8051",detail:"Green cap · delivery vest"},{id:"workshop",name:"Workshop",price:25,color:"#ba4e42",detail:"Red shirt · tools"},{id:"elite",name:"Elite",price:40,color:"#7960a2",detail:"Purple · future gear"}]};function Xd(n,t){return`<img loading="lazy" decoding="async" src="./skins/${`${n}-${t}.webp`}" alt="${t} ${n} preview">`}function pc(n){return Math.max(0,Math.min(5,Math.ceil(Math.max(0,n)/20)))}const mc=[{jems:10,coins:2e3},{jems:25,coins:6500},{jems:100,coins:3e4}];function oM(n,t=0){const e=mc[t];return!e||!n.test&&n.jems<e.jems?!1:(n.test||(n.jems-=e.jems),n.cash+=e.coins,n.earned+=e.coins,!0)}function aM(n,t,e){const i=aa[t].find(r=>r.id===e);return!i||n.ownedSkins[t].includes(e)||!n.test&&n.jems<i.price?!1:(n.test||(n.jems-=i.price),n.ownedSkins[t].push(e),n.selectedSkins[t]=e,!0)}const Q=n=>document.querySelector(n);Q("#app").innerHTML=`<div id="world"></div><header><div class="wallet"><div class="cash-wallet"><small>COINS</small><strong id="cash"></strong></div><div class="jem-wallet" title="${ce.name}"><small>JEMS</small><strong><span>${ce.icon}</span> <span id="jem-count">0</span></strong></div><span id="cash-mode"></span></div><button id="mode-toggle" title="Switch game mode">DEV</button><button id="daily-button" title="Shop">🛒</button><button id="settings" title="Settings">⚙</button><button id="test-toggle" title="Development tools">🧪</button></header>
<div id="right-rail"><aside id="job-card"><button id="job-toggle"><span class="job-icon">▣</span><span><small id="job-label">YOUR NEXT MOVE</small><strong id="job-title">Small beginnings</strong></span><b>⌄</b></button><div id="job-body"><div id="job-step"></div><div class="progress"><i id="job-progress"></i></div><div id="job-count"></div><div id="job-value"></div></div></aside><button id="company-toggle" class="side-button">▥ Company</button><aside id="company-panel" hidden><h2>Your company</h2><div id="company-stats"></div><div id="fleet-list"></div></aside></div>
<aside id="tests" hidden><h3>DEVELOPMENT WORKBENCH</h3><p class="dev-note">Unlimited money and direct test actions are active.</p><div class="test-grid"><button data-test="job">New job</button><button data-test="pack">Pack all</button><button data-test="deliver">Deliver all</button><button data-test="home">Back to yard</button></div><h3>INSPECT EACH UPGRADE</h3><div id="upgrade-tests" class="test-grid"></div><button data-test="restart">Reset test career…</button></aside>
<div id="joystick" aria-label="Movement joystick"><div id="joystick-knob"></div></div><div id="drive-controls" aria-label="Truck driving controls"><button data-drive-key="KeyW" aria-label="Accelerate">▲</button><button data-drive-key="KeyA" aria-label="Steer left">◀</button><button data-drive-key="KeyS" aria-label="Reverse and brake">▼</button><button data-drive-key="KeyD" aria-label="Steer right">▶</button></div><div id="money-stream"></div><div id="status-bar" role="status"><div id="status-main"><b id="hint-key">E</b><span><small id="status-kicker">NEXT ACTION</small><strong id="nav-label">Job board</strong><em id="nav-distance"></em></span></div><div id="notice"><b id="notice-icon"><svg viewBox="0 0 36 36" aria-hidden="true"><path d="M15.2 4.8 Q18 1 20.8 4.8 L33.8 28.2 Q36 33 31 33 H5 Q0 33 2.2 28.2 Z" fill="#c83d39"/></svg><span>!</span></b><span id="notice-text"></span></div><div id="purchase" hidden><strong id="purchase-name"></strong><div class="progress"><i id="purchase-progress"></i></div><small id="purchase-detail">STAND STILL TO INVEST</small></div></div><aside id="tutorial-card" hidden><small>TUTORIAL</small><h2 id="tutorial-title"></h2><ul id="tutorial-points"></ul><div class="tutorial-actions"><button id="tutorial-skip">Skip tutorial</button><button id="tutorial-next">Got it</button></div></aside><nav id="camera-controls"><button id="camera-follow" title="Follow">◎</button><button id="zoom-in">＋</button><button id="zoom-out">−</button><button id="help">?</button></nav><button id="stuck-button" hidden>Got stuck?</button><footer><button data-action="interact"><b>E</b><span>Interact</span></button><button data-action="cab"><b>F</b><span>Cab</span></button><button data-action="rotate"><b>R</b><span>Rotate</span></button><button data-action="rear"><b>G</b><span>Rear</span></button></footer><dialog id="dialog"></dialog>`;document.documentElement.style.setProperty("--premium-color",ce.color);Q("#job-count").insertAdjacentHTML("afterend",'<div id="job-score"></div>');let $d=!1,B=Ud(),Qt=null;for(const n of["movecraft-rewrite-v1","movecraft-update-backup"])try{const t=Qi.getItem(n);if(t){Qt=JSON.parse(t);break}}catch{}try{if(Qt?.company&&(B=qx(Qt.company)),Qt&&Qt.worldVersion!==2){const n=t=>{t[0]>120?t[0]+=Dh.destination-144:t[0]>45&&(t[0]+=Dh.pickup-72)};for(const t of Qt.loads??[])t.mode!=="truck"&&n(t.position);Qt.truck&&(Qt.truck.position=[0,0,0],Qt.truck.yaw=0),Qt.player=[-6,0,1],Qt.navLeg="",Qt.navIndex=0,Qt.navPath=[],Qt.worldVersion=2}}catch{}let Zs=!0,_l=!0,Nh=null;try{Zs=JSON.parse(Qi.getItem("movecraft-audio-v1")??"{}").effects??!0}catch{}const Pe=new Op;Pe.background=new $t(13032672);Pe.fog=new kc(13032672,115,215);const Ln=new Tx({antialias:!0});Ln.setPixelRatio(Math.min(devicePixelRatio,1.5));Ln.shadowMap.enabled=!0;Ln.shadowMap.type=Gh;Ln.toneMapping=Cc;Ln.toneMappingExposure=1.15;Q("#world").appendChild(Ln.domElement);const Ne=new Ma(-18,18,12,-12,.1,450);Ne.position.set(22,29,26);Ne.zoom=.78;const _n=new Rx(Ne,Ln.domElement);Ln.domElement.tabIndex=0;const Ms=()=>Ln.domElement.focus({preventScroll:!0});Ln.domElement.addEventListener("pointerdown",Ms);_n.enablePan=!1;_n.enableDamping=!0;_n.minZoom=.55;_n.maxZoom=3.5;_n.minPolarAngle=.35;_n.maxPolarAngle=1.03;Pe.add(new Sm(16775135,6588822,2));const Oi=new wm(16772305,2.7);Oi.position.set(-25,45,20);Oi.castShadow=!0;Oi.shadow.mapSize.set(2048,2048);Object.assign(Oi.shadow.camera,{left:-32,right:32,top:32,bottom:-32,near:.1,far:100});Oi.shadow.normalBias=.035;Pe.add(Oi,Oi.target);const ba=nM();Pe.add(ba.root);const ps=new xe;ps.name="navigation-route-guide";Pe.add(ps);const Yd=7.2,qd=()=>we+6,ji=new xe;ji.name="navigation-parking-guide";const Kd=new yi({color:16768099,transparent:!0,opacity:.68,depthWrite:!1,side:gn,polygonOffset:!0,polygonOffsetFactor:-3}),Ea=new Ot(new Si(Yd,1),Kd);Ea.rotation.x=-Math.PI/2;Ea.position.y=.105;ji.add(Ea);ji.visible=!1;Pe.add(ji);let ko="",Ut=Jc(0,B.levels.truck,0),Sn=Ut.fromSite.x,an=Ut.fromSite.z??0,wn=Ut.toSite.x,hn=Ut.toSite.z??0,gr=Vd(B),Bn=fs(Sn,Ut.fromSite.variant,!1,an),ei=fs(wn,Ut.toSite.variant,!0,hn);Pe.add(gr.root,Bn.root,ei.root);const _r=Ld(15313475),ot=_r.root;function la(){const n=Ld(15313475,0,B.selectedSkins.person,B.levels.worker),t=_r.root.userData.rig?.body;t&&(ot.remove(t),mi(t));const e=n.root.userData.rig.body;n.root.remove(e),ot.add(e),_r.root.userData.rig=n.root.userData.rig,_r.animate=n.animate}la();ot.position.set(-6,0,1);Pe.add(ot);const jc=new Ot(new $c(.38,.46,32),new yi({color:16773043,side:gn}));jc.rotation.x=-Math.PI/2;jc.position.y=.04;ot.add(jc);let Lt,we=4.2,zn=5,Ue=!1,We=!1,Gt=null,te=!1,Ge=0,Us=0,Zi=1,Ui=1,Ko=!1,gc=0,ca=0,ve=null;const ue=[];let Er=0,wr=0,_c=-10,Ve=null,Wn=[];const vc=new Map,Kn=new Ot(new Si(1,1),new yi({color:16763725,transparent:!0,opacity:.82,side:gn,depthWrite:!1}));Kn.rotation.x=-Math.PI/2;Kn.position.y=.095;Kn.visible=!1;Kn.renderOrder=4;Pe.add(Kn);const Di=new Ot(new Si(1,1),new yi({color:13974845,transparent:!0,opacity:.72,side:gn,depthWrite:!1}));Di.rotation.x=-Math.PI/2;Di.position.y=.105;Di.visible=!1;Di.renderOrder=5;Pe.add(Di);let Tr=0,Yn=0,vr="",je=0,kt=Number(Qt?.tutorialStep??0),Qe=0,vl=0,xl=0,ua=0,Rn=0,xc=0,Ml="",yl="",Uh=-1,Go=-10,Zo=!1,Xn=0,Zn=!1,Gs=0;const qi=[],Mc=[],yc=[],lM=ot.position.clone(),Zd=new A,Ci=new A,Ee=new Set,Ji=new pt,tu=new A(0,1,0),Fn=new Ot(new er(1,.04,1),new yi({color:2981988,transparent:!0,opacity:.58,depthTest:!0,depthWrite:!1}));Pe.add(Fn);Fn.renderOrder=10;const eu=new Jp(new jp(Fn.geometry),new fd({color:1527614,depthTest:!0,depthWrite:!1}));eu.renderOrder=11;Fn.add(eu);Fn.visible=!1;let li=[],os=[];const ni=n=>Lt.userData.cargo.localToWorld(n.clone()),ii=n=>Lt.userData.cargo.worldToLocal(n.clone()),Hs=n=>Lt.localToWorld(n.clone());function cM(){Qi.setItem("movecraft-audio-v1",JSON.stringify({effects:Zs}))}function uM(){if(!(!Zs||bf()))try{const n=Nh??(Nh=new AudioContext);n.resume();const t=n.createOscillator(),e=n.createGain();t.type="sine",t.frequency.value=480,e.gain.setValueAtTime(1e-4,n.currentTime),e.gain.exponentialRampToValueAtTime(.012,n.currentTime+.008),e.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+.055),t.connect(e).connect(n.destination),t.start(),t.stop(n.currentTime+.06)}catch{}}document.addEventListener("click",n=>{n.target.closest("button")&&uM()});function qt(n){Q("#notice-text").textContent=n;const t=/^(No |There |Clear |Park |Stand |Move around|Step |Brake |Stop |Finish |Cannot|Can't|The driver door|This furniture|Place .* on)/i.test(n);Q("#notice").classList.toggle("error",t),ua=4,Q("#status-bar").classList.add("show-notice")}function nr(n){Ee.clear();const t=!n.includes('class="reward-modal"');Q("#dialog").innerHTML=`${t?'<button class="close" aria-label="Close">×</button>':""}${n}`,Q("#dialog").open||Q("#dialog").showModal(),t&&(Q("#dialog .close").onclick=()=>Q("#dialog").close())}const Jn=[["Welcome to MOVING EMPIRE",["Better with keyboard · on mobile, use the joystick to walk and arrow buttons to drive","Walk with WASD and hold Shift to sprint","The top bar tells you the next useful action","We will introduce each control group once"],"#status-bar"],["The whole Actions bar",["The row at the bottom contains every action","E interacts and places · F enters or leaves the cab","R rotates furniture · G moves the rear ramp","The same letters work on a keyboard; tap the buttons on touchscreens"],"footer"],["The whole Camera bar",["The four buttons on the left only change your view","◎ follows you again · + zooms in · − zooms out · ? opens help","Drag the scene to look around. These controls do not move your character"],"#camera-controls"],["Accept your first move",["The card on the right is your job panel","Walk onto the marked job field to accept a move"],"#job-card"],["Money and price fields",["Coins and Jems are shown together in the upper-left corner","Coins pay for upgrades: stand still on a marked price field to invest them","Each price field fills as you pay; then its upgrade confirmation opens","Jems are earned from moves and daily gifts; they buy skins or coins in the shop"],".wallet"]],Vs=[["Finish the move",["The job panel shows cargo, score and payout","Collect pay after delivery; collisions and time lower the score","Company shows upgrades and crew income; collect earnings at each crew field"],"#job-card"],["Shop and daily gifts",["The cart opens gifts, currency exchange and cosmetic skins","Claim one gift each day; Jems buy skins"],"#daily-button"],["Settings",["The gear has sound, display, rescue and replay settings","The ? in the Camera bar opens full help"],"#settings"]],fi=10,hr=fi+Vs.length;function no(){const n=kt>=hr,t=!Q("#tutorial-card").hidden;document.body.classList.toggle("tutorial-active",t),document.body.dataset.tutorialStep=String(kt),document.body.dataset.tutorialStage=t?kt<=2?"intro":kt===3?"job":kt===4?"money":kt>=fi?"final":"move":"off",document.body.classList.toggle("tutorial-camera-introduced",kt>=2),document.body.classList.toggle("tutorial-shop-introduced",kt>=fi+1),document.body.classList.toggle("tutorial-settings-introduced",kt>=fi+2);const e=new Set(n||kt>=1?["interact","cab","rotate","rear"]:[]);document.querySelectorAll("footer [data-action]").forEach(i=>i.classList.toggle("tutorial-hidden",!e.has(i.dataset.action)))}function io(){const n=Q("#tutorial-card"),t=Q("#camera-controls");if(n.hidden){n.style.top="",n.style.maxHeight="",t.style.top="",t.style.transform="",t.style.visibility="",Q("#right-rail").style.top="";return}const e=document.querySelector("#right-rail .tutorial-focus");if(innerWidth<=700&&document.body.dataset.tutorialStage==="final"&&e){const c=Math.ceil(e.getBoundingClientRect().bottom+12);n.style.top=`${c}px`,n.style.maxHeight=`${Math.max(150,innerHeight-c-94)}px`}else n.style.top="",n.style.maxHeight="";const i=n.getBoundingClientRect(),r=t.getBoundingClientRect(),s=Q("footer").getBoundingClientRect().top,o=s-5;document.body.dataset.tutorialStage==="job"&&innerWidth<=700?Q("#right-rail").style.top=`${Math.ceil(i.bottom+12)}px`:Q("#right-rail").style.top="";const a=i.bottom+7;if(a+r.height>o){t.style.visibility="hidden";return}t.style.visibility="",t.style.top=`${a}px`,t.style.transform="none"}new ResizeObserver(io).observe(Q("#tutorial-card"));window.addEventListener("resize",io);function ui(n,t,e="Got it",i=""){document.body.classList.remove("tutorial-exit","tutorial-exit-skip"),document.querySelectorAll(".tutorial-focus").forEach(r=>r.classList.remove("tutorial-focus")),Q("#tutorial-title").textContent=n,Q("#tutorial-points").innerHTML=t.map(r=>`<li>${r}</li>`).join(""),Q("#tutorial-next").textContent=e,Q("#tutorial-card").hidden=!1,Q("#tests").hidden=!0,no(),i&&document.querySelector(i)?.classList.add("tutorial-focus"),io()}function Jd(n=!1){document.body.classList.remove("tutorial-exit","tutorial-exit-skip"),document.body.offsetWidth,document.body.classList.toggle("tutorial-exit-skip",n),document.body.classList.add("tutorial-exit"),window.setTimeout(()=>document.body.classList.remove("tutorial-exit","tutorial-exit-skip"),1800)}function as(n){B.jobs>0&&kt<fi&&(kt=fi),n==="job"&&kt<=5?(kt=6,ui("Follow the route",["Blue arrows show the way"],"Got it","#status-bar")):n==="lift"&&kt<=6?(kt=7,ui("Load furniture",["Green = fits · red = blocked","Try another grid space or orientation if it is red"],"Got it",'[data-action="interact"]')):n==="loaded"&&kt<=7?(kt=8,ui("Ready to depart",["Finish loading, then enter the cab"],"Got it",'[data-action="cab"]')):n==="cab"&&kt<=8?(kt=9,ui("Drive carefully",["Raise the rear with G before driving","Truck collisions and long travel time lower your move score"],"Got it","#status-bar")):n==="delivered"&&kt<=9?(kt=9,ui("Finish the move",["Park in the yellow bay","Then choose your reward"],"Got it","#job-card")):n==="paid"&&kt<=fi&&(kt=fi,ui(Vs[0][0],Vs[0][1],"Next",Vs[0][2])),no(),Ae()}Q("#tutorial-next").onclick=()=>{if(kt<Jn.length-1)kt++,ui(Jn[kt][0],Jn[kt][1],"Got it",Jn[kt][2]);else if(kt>=fi&&kt<hr-1){kt++;const n=Vs[kt-fi];ui(n[0],n[1],kt===hr-1?"Finish tutorial":"Next",n[2])}else kt===Jn.length-1?kt=5:kt===hr-1&&(kt=hr),Q("#tutorial-card").hidden=!0,io(),document.querySelectorAll(".tutorial-focus").forEach(n=>n.classList.remove("tutorial-focus"));no(),kt===hr&&Jd(),Ae(),Ms()};Q("#tutorial-skip").onclick=()=>{kt=hr,Q("#tutorial-card").hidden=!0,io(),document.querySelectorAll(".tutorial-focus").forEach(n=>n.classList.remove("tutorial-focus")),no(),Jd(!0),Ae(),Ms()};function Js(){const n=Lt,t=n?.position.clone()??new A,e=n?.rotation.clone()??new xi;for(const o of ue)o.mode==="truck"&&Pe.attach(o.mesh);n&&mi(n),zn=oa(B.levels.truck),we=.2+zn*.8,Lt=Vx(zn,B.levels.truck,B.selectedSkins.truck),Lt.position.copy(t),Lt.rotation.copy(e),Pe.add(Lt);for(const o of ue)o.mode==="truck"&&(Lt.userData.cargo.add(o.mesh),o.mesh.position.copy(o.position));const i=new xe;i.position.set(4.69,.35,-1.95),P(i,0,.55,.65,.06,1.1,1.28,Lt.userData.bodyColor,!0),P(i,0,1.4,.65,.06,.62,1.28,3495010,!0);const r=P(i,.035,1.4,.65,.025,.48,1.02,9091781);r.material=new Sr({color:8895944,transparent:!0,opacity:.38,roughness:.12}),P(i,-.035,.68,.65,.035,.34,.95,7692094,!0);for(const o of[.04,1.26])P(i,.055,.85,o,.08,1.7,.06,3230808,!0);P(i,.075,.78,1.02,.035,.08,.24,2506569,!0),Lt.add(i);const s=i.clone(!0);s.position.x=1.31,s.scale.x=-1,Lt.add(s),Lt.userData.cabDoor=i,Qd(),n&&Aa()}function hM(){mi(gr.root),gr=Vd(B),Pe.add(gr.root),js(),Dn(),Aa()}function Qd(){const n=e=>e*e*(3-2*e),t=n(ge.clamp(Zi*2,0,1));Lt.userData.rampPivot.rotation.x=ge.lerp(-Math.PI/2,Math.atan(.78/2.2),t),Lt.userData.cabDoor&&(Lt.userData.cabDoor.rotation.y=n(gc)*1.42)}function ms(n){n.mode==="truck"?(Lt.userData.cargo.add(n.mesh),n.mesh.position.copy(n.position)):n.mode==="hand"?(ot.add(n.mesh),n.mesh.position.set(0,.95,Qs(n))):(Pe.add(n.mesh),n.mesh.position.copy(n.position)),n.mesh.rotation.set(0,n.item.rotated?Math.PI/2:0,0)}function ha(n=!1){if(Ue&&!We&&!n)return qt("Finish this move and collect payment first.");xc=0;const t=`${Ut.fromSite?.id??""}->${Ut.toSite?.id??""}`;for(const s of ue)mi(s.mesh);ue.length=0,Er=0,wr=0,_c=-10,Gt=null,Ve=null,Tr=B.jobs;const e=Yn;do Yn=Math.floor(Math.random()*7);while(Yn===e);vr="",je=0;const i=Math.max(B.jobs,Math.floor((B.levels.truck+B.levels.worker)*.45));let r=0;do Ut=Jc(i,B.levels.truck,B.jobs*11+Yn+r++);while(`${Ut.fromSite.id}->${Ut.toSite.id}`===t&&r<10);Ue=!0,We=!1,Sn=Ut.fromSite.x,an=Ut.fromSite.z??0,wn=Ut.toSite.x,hn=Ut.toSite.z??0,mi(Bn.root),mi(ei.root),Bn=fs(Sn,Ut.fromSite.variant+Yn,!1,an),ei=fs(wn,Ut.toSite.variant+Yn,!0,hn),Pe.add(Bn.root,ei.root),jd(),Sc();for(const s of Ut.items){const o={item:s,mesh:Id(s.model),mode:"ground",position:new A(Sn+s.pickupX,.12,an+s.pickupZ),velocity:new A,angular:new A,hitAt:-10,settled:!0};ue.push(o),ms(o)}Dn(),qt(`New move: ${Ut.from} → ${Ut.to}. Follow the ground arrows.`),as("job"),Ae()}function ir(){return Ue&&ue.length>0&&ue.every(n=>n.mode==="delivered")}function jd(){const n=[],t=new Set,e=[...Ut.items].sort((i,r)=>r.w*r.d-i.w*i.d||i.id-r.id);for(const i of e){const r=i.w*Ft+.32,s=i.d*Ft+.32,o=[];for(let l=an-4.5+s/2;l<=an+4.45-s/2;l+=.48)for(let u=Sn-10.25+r/2;u<=Sn-.95-r/2;u+=.48)o.push({x:u,z:l,rank:Math.sin(i.id*17.37+u*8.1+l*3.7)});o.sort((l,u)=>l.rank-u.rank);const a=({x:l,z:u},d)=>!Bn.barriers.some(h=>Math.abs(l-h.x)<(r+h.w)/2+d&&Math.abs(u-h.z)<(s+h.d)/2+d)&&!n.some(h=>Math.abs(l-h.x)<(r+h.w)/2+d&&Math.abs(u-h.z)<(s+h.d)/2+d);let c=o.find(l=>a(l,.18))??o.find(l=>a(l,.035));if(!c){const l=[];for(let u=an+5.7+s/2;u<=an+8.2-s/2;u+=.2)for(let d=Sn-10+r/2;d<=Sn-1.2-r/2;d+=.35)l.push({x:d,z:u});c=l.find(u=>a(u,.04))}c?(i.pickupX=c.x-Sn,i.pickupZ=c.z-an,n.push({x:c.x,z:c.z,w:r,d:s})):t.add(i.id)}t.size&&(Ut.items=Ut.items.filter(i=>!t.has(i.id)),Ut.reward=Math.round(Ut.items.reduce((i,r)=>i+r.value,0)*(1+(Ut.difficulty-1)*.07)))}function Sc(){vc.clear();const n=ue.filter(r=>r.mode==="delivered").map(r=>({x:r.position.x,z:r.position.z,w:r.item.w*Ft,d:r.item.d*Ft})),t=wn-10.1,e=hn-4.9,i=(Tr*7+Yn*3)%11;for(const r of[...Ut.items].sort((s,o)=>o.w*o.d-s.w*s.d||s.id-o.id)){if(ue.some(o=>o.item.id===r.id&&o.mode==="delivered"))continue;let s;for(const o of[.18,.02])for(let a=0;a<121&&!s;a++){const c=(Math.floor(a/11)*3+i)%11,l=(a*7+i*2)%11;if(c>11-r.d||l>11-r.w)continue;const u=t+(l+r.w/2)*Ft,d=e+(c+r.d/2)*Ft,h=r.w*Ft/2,f=r.d*Ft/2,g=ei.barriers.some(m=>Math.abs(u-m.x)<h+m.w/2+o&&Math.abs(d-m.z)<f+m.d/2+o),S=n.some(m=>Math.abs(u-m.x)<h+m.w/2+o&&Math.abs(d-m.z)<f+m.d/2+o);!g&&!S&&(s=new A(u,.12,d),n.push({x:u,z:d,w:h*2,d:f*2}))}s&&vc.set(r.id,s)}}function tf(n){const t=vc.get(n.item.id);if(!t)return null;const e=ot.position.clone().add(new A(0,0,1.1).applyQuaternion(ot.quaternion));return{target:t,close:Math.min(Math.hypot(e.x-t.x,e.z-t.z),Math.hypot(ot.position.x-t.x,ot.position.z-t.z))<1.5}}function ef(n){return n.x>wn-10.5&&n.x<wn-.5&&n.z>hn-5&&n.z<hn+4.9}function nu(){return ni(new A(3,0,(we-2.2)/2))}function wa(){const n=ue.some(s=>s.mode==="ground"&&!s.fallen),t=!Ue||We?"yard":n?"pickup":"delivery";if(t==="yard")return{leg:t,point:new A(2,0,-15)};const i=(t==="pickup"?Sn:wn)+4,r=t==="pickup"?an:hn;return{leg:t,point:new A(i,0,r-2.1)}}function iu(n=wa().point){if(Math.abs(Ge)>=.35)return!1;const t=Yd/2,e=qd()/2;for(const i of[.8,5.2])for(const r of[-2.35,we+.25]){const s=ni(new A(i,0,r));if(Math.abs(s.x-n.x)>t||Math.abs(s.z-n.z)>e)return!1}return!0}function da(){return Math.round(Ut.reward*Math.max(.5,ls()/100))}function nf(){const n=180+Ut.items.length*40+Math.hypot((Ut.fromSite?.x??0)-(Ut.toSite?.x??0),(Ut.fromSite?.z??0)-(Ut.toSite?.z??0))*1.5;return Math.max(0,Math.floor((wr-n)/30)*2)}function ls(){return Math.max(0,100-Er*(Tr===0?2:4)-nf())}function rf(){return`${Er} truck collision${Er===1?"":"s"} · ${Math.floor(wr/60)}m ${Math.floor(wr%60)}s · time −${nf()}`}function bc(n=1){if(!ir()||We)return;const t=da()*n;ds(B,t);const e=pc(ls())*n;B.jems+=e,B.jobs++,We=!0,Dn(),qt(`+$${t} · +${e} ${ce.name} · Move completed!`),as("paid"),Ae()}function fa(){!ir()||We||Q("#dialog").open||!Q("#tutorial-card").hidden||(nr(`<div class="reward-modal"><small>MOVE COMPLETE</small><h2>$${da().toLocaleString("en-US")} · ${ce.icon} ${pc(ls())}</h2><p>${Ut.from} → ${Ut.to}</p><p>Move score: ${ls()}/100</p><p>${rf()}</p><button id="claim-normal">Collect reward</button>${`<button id="claim-double">▶ Watch video · $${(da()*2).toLocaleString("en-US")} + ${ce.icon} ${pc(ls())*2}</button>`}<p class="fine">The reward video is a short in-game preview.</p></div>`),Q("#claim-normal").onclick=()=>{Q("#dialog").close(),bc(1)},Q("#claim-double").onclick=()=>{const n=Q("#dialog");n.innerHTML='<div class="reward-video"><b>MOVING EMPIRE</b><p>Your crew makes every move count.</p><div class="progress"><i></i></div></div>',window.setTimeout(()=>{n.close(),bc(2)},3e3)})}function dM(){if(B.levels.truck<bn.truck)return"truck"}function Sl(){if(!(B.levels.truck<bn.truck)){if(B.levels.yard<bn.yard&&B.fleet.length>=B.levels.yard)return"yard";if(B.levels.hire<bn.hire&&B.fleet.length<B.levels.yard)return"hire";if(Bd(B)&&!B.finished)return"factory"}}function fM(n){if(B.test)return 0;if(n.income!==void 0)return Math.min(1,Rn/.8);if(n.upgrade)return Math.min(1,(B.contributions[n.upgrade]??0)/pr(B,n.upgrade));if(n.fleet!==void 0){const t=B.fleet[n.fleet];return t?Math.min(1,(t.contribution??0)/(1e3*(t.level+1))):0}return Math.min(1,Rn/1.8)}function Dn(){for(const i of li)mi(i.root);li=[];const n=(i,r,s,o,a,c,l=0)=>{const u=Ih(r,s,0,0,7589002,l);u.position.copy(o),Pe.add(u),li.push({key:i,root:u,position:o,upgrade:a,fleet:c})};n("job","NEXT MOVE",Ue&&!We?"ACTIVE":"ACCEPT",new A(-10,.06,1)),li[li.length-1].root.visible=!Ue||We,B.finished&&(li[li.length-1].root.visible=!1);const t={truck:new A(-.45,.06,-1.25),worker:new A(-20,.06,-4.8),yard:new A(-8,.06,-20.7),factory:new A(15,.06,-15)},e=[dM(),B.levels.worker<bn.worker?"worker":void 0,Sl()==="hire"?void 0:Sl()].filter((i,r,s)=>!!i&&s.indexOf(i)===r);for(const i of e){const r=pr(B,i),s=(B.contributions[i]??0)/r;n(i,br[i],B.test?"FREE":`$${r.toLocaleString("en-US")}`,t[i],i,void 0,s)}if(Sl()==="hire"){const i=B.fleet.length,r=pr(B,"hire");n("hire",`HIRE CREW ${i+1}`,B.test?"FREE":`$${r.toLocaleString("en-US")}`,new A(8+i*4.8,.06,-16.5),"hire",void 0,(B.contributions.hire??0)/r)}B.fleet.forEach((i,r)=>{if((i.pending??0)>0){const s=Ih("COLLECT CREW",`$${i.pending}`,0,0,7589002,0),o=new A(8+r*4.8,.05,-19.5);s.position.copy(o),Pe.add(s),li.push({key:`income-${r}`,root:s,position:o,income:r})}if(i.level<4){const s=(i.level+1)*1e3;n(`fleet-${r}`,`TRUCK ${r+2} · LV ${i.level}`,B.test?"FREE":`$${s.toLocaleString("en-US")}`,new A(8+r*4.8,.05,-16.5),void 0,r,(i.contribution??0)/s)}})}function sf(n){const t=B.levels[n],e=Kx(B,n);if(e)return qt(e);n==="truck"&&Js(),n==="worker"&&la(),["yard","hire"].includes(n)?hM():Dn();const i={truck:[`Loading deck: ${oa(t)} → ${oa(B.levels.truck)} rows`,`Top speed: ${Math.round((8.5+t*1.3)*3.6)} → ${Math.round((8.5+B.levels.truck*1.3)*3.6)} km/h`,B.levels.truck===1?"Cab and roof added":B.levels.truck===2?"More enclosed body panels":B.levels.truck===3?"Cargo body reinforced":B.levels.truck===4?"Full-height enclosed body completed":"Trailer length and load capacity increased",...B.levels.truck>=bn.truck?["Company-base upgrade unlocked"]:[]],worker:[`Worker level: ${t} → ${B.levels.worker}`,`Walk speed: ${Math.round((1+t*.07)*100)}% → ${Math.round((1+B.levels.worker*.07)*100)}%`,`Sprinting speed: ${((1+t*.07)*6.7).toFixed(1)} → ${((1+B.levels.worker*.07)*6.7).toFixed(1)} m/s`,`Lifting time: ${Math.round(100/(1+t*.23))}% → ${Math.round(100/(1+B.levels.worker*.23))}%`,"Heavy furniture is easier to carry"],yard:[`Base level ${B.levels.yard}`,"One new employee parking bay",`${B.levels.yard} bays available`],hire:[`${B.fleet.length} crews employed`,"New employee added","New employee truck included"],factory:["MOVING EMPIRE completed","Furniture company purchased","Coming soon!"],cargo:["Included in the central truck upgrade"],gear:["Included in the central truck upgrade"],fleet:["Employee truck upgraded"]};B.levels[n]>t&&nr(`<div class="upgrade-modal"><small>UPGRADE COMPLETE</small><div class="upgrade-badge">✓</div><h2>${br[n]}</h2><ul>${i[n].map(r=>`<li>${r}</li>`).join("")}</ul><button class="modal-ok">Continue</button></div>`),document.querySelector(".modal-ok")?.addEventListener("click",()=>Q("#dialog").close()),qt(`${br[n]} · Level ${B.levels[n]}`),Ae()}function pa(){if(!(te||Ve||Gt))return li.find(n=>{const t=Number(n.root.userData.padHalfWidth??1.3),e=Number(n.root.userData.padHalfDepth??.85);return n.root.visible&&Math.abs(ot.position.x-n.position.x)<t*1.16&&Math.abs(ot.position.z-n.position.z)<e*1.2&&Math.abs(ot.position.y-n.position.y)<1.15})}function Fh(n,t=!1){if(!t&&Qe-Uh<.14)return;Uh=Qe;const e=document.querySelector(".wallet").getBoundingClientRect(),i=n.position.clone().project(Ne),r=(i.x+1)/2*innerWidth,s=(1-i.y)/2*innerHeight,o=e.left+e.width/2,a=e.top+e.height/2,c=t?r:o,l=t?s:a,u=t?o:r,d=t?a:s,h=document.createElement("i");h.textContent="$",h.style.left=`${c}px`,h.style.top=`${l}px`,h.style.setProperty("--money-x",`${u-c}px`),h.style.setProperty("--money-y",`${d-l}px`),h.classList.toggle("payout",t),Q("#money-stream").appendChild(h),h.addEventListener("animationend",()=>h.remove(),{once:!0}),window.setTimeout(()=>h.remove(),1200)}function pM(n){const t=pa();if(!t||Ci.length()>.2){Rn=0,Ml="",Q("#purchase").hidden=!0,t||(yl="");return}if(yl===t.key||(t.key!==Ml&&(Rn=t.key==="job"?xc:0,Ml=t.key),t.upgrade&&Fd(B,t.upgrade)))return;if((t.upgrade?pr(B,t.upgrade)-(B.contributions?.[t.upgrade]??0):t.fleet!==void 0?1e3*(B.fleet[t.fleet].level+1)-(B.fleet[t.fleet].contribution??0):0)>B.cash&&!B.test&&wf(),Rn+=n,t.key==="job"&&(xc=Rn),t.upgrade&&!B.test){B.contributions??={};const o=pr(B,t.upgrade),a=B.contributions[t.upgrade]??0,c=Math.min(B.cash,o-a,o*n/1.8);B.cash-=c,B.contributions[t.upgrade]=a+c,Rn=Math.min(Rn,(a+c)/o*1.8),c>0&&Fh(t)}if(t.fleet!==void 0&&!B.test){const o=B.fleet[t.fleet],a=1e3*(o.level+1),c=o.contribution??0,l=Math.min(B.cash,a-c,a*n/1.8);B.cash-=l,o.contribution=c+l,Rn=Math.min(Rn,(c+l)/a*1.8),l>0&&Fh(t)}const i=B.test?Math.min(1,Rn/1.8):fM(t);t.root.userData.setProgress?.(i),Q("#purchase").hidden=!1,Q("#purchase-name").textContent=t.key==="job"?"Accept the next move":t.income!==void 0?`Collect $${B.fleet[t.income]?.pending??0}`:t.upgrade?br[t.upgrade]:"Upgrade fleet truck",Q("#purchase-progress").style.width=`${Math.min(100,i*100)}%`;const r=t.upgrade?pr(B,t.upgrade):t.fleet!==void 0?1e3*(B.fleet[t.fleet].level+1):0,s=Math.min(r,Math.round(r*i));if(Q("#purchase-detail").textContent=r?B.test?"DEVELOPMENT MODE · FREE":`${Math.round(i*100)}% · $${s.toLocaleString("en-US")} OF $${r.toLocaleString("en-US")} INVESTED`:"STAND STILL TO ACTIVATE",Rn>=1.8)if(yl=t.key,Rn=0,Q("#purchase").hidden=!0,t.key==="job")ha();else if(t.income!==void 0){const o=Jx(B,t.income);qt(`+$${o} · Employee route complete`),Dn(),Ae()}else t.upgrade?sf(t.upgrade):t.fleet!==void 0&&Zx(B,t.fleet)&&(js(),Dn(),nr(`<div class="upgrade-modal"><small>VEHICLE UPGRADED</small><div class="upgrade-badge">✓</div><h2>Employee truck ${t.fleet+2}</h2><ul><li>Faster route</li><li>$125 more income per trip</li><li>Vehicle level ${B.fleet[t.fleet].level}</li></ul><button class="modal-ok">Continue</button></div>`),Q(".modal-ok").onclick=()=>Q("#dialog").close(),Ae())}function Ec(){const n=ii(ot.position);return n.x>1.15&&n.x<4.85&&n.z>=.2&&n.z<=we&&ot.position.y>.6}function ro(n){const t=ii(n);if(t.x>1.4&&t.x<4.6){if(t.z>=.2&&t.z<=we)return .78;if(Zi>.94&&t.z>we&&t.z<we+2.2)return .78*(we+2.2-t.z)/2.2}return 0}function mM(n,t=1/0){let e=-1/0;for(const i of ue){if(i.mode!=="truck"&&i.mode!=="ground")continue;const[r,s]=tn(i.item),o=i.mode==="truck"?ii(n):n,a=i.position,c=a.y+Wd(i.item.model);c<=t+.14&&Math.abs(o.x-a.x)<r*Ft/2-.08&&Math.abs(o.z-a.z)<s*Ft/2-.08&&(e=Math.max(e,c))}return e}function ma(n,t=1/0){return Math.max(ro(n),mM(n,t))}function cs(){const n=ii(ot.position),t=Zi>.94&&n.x>1.4&&n.x<4.6&&n.z>we&&n.z<=we+2.25;return t?Ko=!0:Ec()||(Ko=!1),t||Ec()&&Ko&&Zi>.94}function of(){let n,t=2.75;for(const e of ue){if(["hand","air","delivered"].includes(e.mode)||e.mode==="truck"&&!cs())continue;const i=e.mesh.getWorldPosition(new A),r=Math.hypot(i.x-ot.position.x,i.z-ot.position.z);r<t&&Math.abs(i.y-ot.position.y)<1.5&&(n=e,t=r)}return n}function Oh(n,t){return ue.every(e=>{if(e===t||["hand","air","delivered"].includes(e.mode))return!0;const i=e.mesh.getWorldPosition(new A),[r,s]=tn(e.item);return Math.abs(n.x-i.x)>r*Ft/2+.38||Math.abs(n.z-i.z)>s*Ft/2+.38})}function gM(n){const t=n.mesh.getWorldPosition(new A),[e,i]=tn(n.item),r=n.mode==="truck",s=r?n.position:t,a=[new A(s.x-e*Ft/2-.62,0,s.z),new A(s.x+e*Ft/2+.62,0,s.z),new A(s.x,0,s.z-i*Ft/2-.62),new A(s.x,0,s.z+i*Ft/2+.62)].map(u=>r?ni(u.setY(.78)):u.setY(0)).filter(u=>{if(Ar(u,.3)||!Oh(u,n)||r&&!Ta(u))return!1;for(let d=1;d<=6;d++){const h=ot.position.clone().lerp(u,d/6);if(!Oh(h,n)||Ar(h,.24))return!1}return!0});if(!a.length)return null;const c=a.sort((u,d)=>u.distanceToSquared(ot.position)-d.distanceToSquared(ot.position))[0];c.y=ro(c);const l=Math.atan2(t.x-c.x,t.z-c.z);return{to:c,yaw:l,item:t}}function ru(){if(!Gt)return null;const[n,t]=tn(Gt.item),e=new A(0,0,.65+Math.max(n,t)*Ft/2).applyQuaternion(ot.quaternion).add(ot.position),i=ii(e),r=ue.map(u=>({...u.item,x:u.mode==="truck"?(u.position.x-1.4)/Ft-tn(u.item)[0]/2:u.item.x,z:u.mode==="truck"?(u.position.z-.2)/Ft-tn(u.item)[1]/2:u.item.z,location:u.mode==="truck"?"truck":"pickup"})),s=ge.clamp(Math.round((i.x-1.4)/Ft-n/2),0,4-n),o=ge.clamp(Math.round((i.z-.2)/Ft-t/2),0,zn-t),a=(u,d)=>Qc(r,Gt.item,u,d,4,zn);if(a(s,o))return{x:s,z:o,w:n,d:t,valid:!0};let c=null,l=1/0;for(let u=0;u<=zn-t;u++)for(let d=0;d<=4-n;d++){const h=(d-s)**2+(u-o)**2;h<l&&a(d,u)&&(c={x:d,z:u,w:n,d:t,valid:!0},l=h)}return c??{x:s,z:o,w:n,d:t,valid:!1}}function Qs(n){const[,t]=tn(n.item);return .62+t*Ft/2}function _M(){if(Ve||te)return;if(ir()&&!We)return fa();const n=pa();if(n){n.key==="job"?qt("Stand still on the job field to accept a move."):n.key==="collect"?bc():n.upgrade||n.fleet!==void 0?qt("Stand still on this field; payment starts automatically."):qt("Stand inside the markers to build.");return}if(Gt){const o=Gt,a=o.mesh.getWorldPosition(new A);let c,l;if(cs()){const f=ru();if(!f.valid)return qt("No clear space nearby. Press R to rotate or move along the truck.");o.item.x=f.x,o.item.z=f.z,c=new A(1.4+(f.x+f.w/2)*Ft,.78,.2+(f.z+f.d/2)*Ft),l="truck"}else{const f=ii(ot.position);if(f.x>-.5&&f.x<6.5&&f.z>-.2&&f.z<we+.8)return qt("Carry furniture through the lowered rear ramp to load it.");const g=ef(ot.position),S=tf(o);if(g&&!S)return qt("This furniture has no clear delivery spot. Move away from the doorway and try again.");if(g&&S&&!S.close)return qt(`Place ${o.item.name} on its highlighted spot.`);if(c=g&&S?S.target.clone():ot.position.clone().add(new A(0,0,1.1).applyQuaternion(ot.quaternion)),c.y=.12,l=g&&S?"delivered":"ground",l!=="delivered"&&Ar(c,.3))return qt("There is a wall here. Step into the room.")}Pe.attach(o.mesh);const u=o.mesh.getWorldQuaternion(new vi),d=l==="delivered"?0:(l==="truck"?Lt.rotation.y:0)+(o.item.rotated?Math.PI/2:0),h=new vi().setFromEuler(new xi(0,d,0));Ve={kind:"drop",load:o,time:0,duration:.5,from:a,to:l==="truck"?ni(c):c,mode:l,fromQuaternion:u,toQuaternion:h},o.position.copy(c),Gt=null;return}const t=of();if(!t)return qt("Stand close to furniture.");if(Ue&&!We){const{leg:o,point:a}=wa(),c=t.mode==="ground"&&o==="pickup",l=t.mode==="truck"&&o==="delivery";if((c||l)&&!iu(a))return qt(`Park the complete truck inside the yellow ${o} bay first.`)}const e=t.mesh.getWorldPosition(new A),i=gM(t);if(!i)return qt("Move around the furniture so there is room to lift it safely.");const r=ot.position.clone(),s=ge.clamp(r.distanceTo(i.to)/3.8,.18,.55);Pe.attach(t.mesh),Ve={kind:"lift",load:t,time:0,duration:s+(.62+t.item.weight*.34)/(1+B.levels.worker*.23),from:e,to:new A,mode:"hand",approachFrom:r,approachTo:i.to,approachYaw:i.yaw,approachDuration:s},t.mode="hand",t.velocity.set(0,0,0),t.angular.set(0,0,0)}function vM(n){if(!Ve)return;Ve.time+=n;const t=Ve,e=t.approachDuration??0,i=t.time<e,r=Math.min(1,Math.max(0,(t.time-e)/(t.duration-e))),s=r*r*(3-2*r),o=ot.userData.rig;if(i&&t.approachFrom&&t.approachTo){const c=Math.min(1,t.time/e),l=c*c*(3-2*c);if(ot.position.lerpVectors(t.approachFrom,t.approachTo,l),_r.animate(Qe,!0,!1,!1),t.approachYaw!==void 0){const u=Math.atan2(Math.sin(t.approachYaw-ot.rotation.y),Math.cos(t.approachYaw-ot.rotation.y));ot.rotation.y+=u*(1-Math.exp(-12*n))}t.load.mesh.position.copy(t.from);return}o.body.rotation.x=.42*Math.sin(r*Math.PI),o.body.position.y=-.19*Math.sin(r*Math.PI),o.arms.forEach(c=>c.rotation.x=-1.35*Math.sin(Math.min(1,r*1.35)*Math.PI/2));const a=t.kind==="lift"?ge.smoothstep(r,.08,.94):s;if(t.kind==="lift"&&t.to.copy(ot.position).add(new A(0,.95,Qs(t.load)).applyQuaternion(ot.quaternion)),t.kind==="lift"){const c=t.from.clone();c.y=Math.max(t.to.y,t.from.y+.95),a<.58?t.load.mesh.position.lerpVectors(t.from,c,ge.smoothstep(a/.58,0,1)):t.load.mesh.position.lerpVectors(c,t.to,ge.smoothstep((a-.58)/.42,0,1))}else t.load.mesh.position.lerpVectors(t.from,t.to,a),t.fromQuaternion&&t.toQuaternion&&t.load.mesh.quaternion.slerpQuaternions(t.fromQuaternion,t.toQuaternion,a);t.load.mesh.rotation.x=ge.damp(t.load.mesh.rotation.x,0,8,n),t.load.mesh.rotation.z=ge.damp(t.load.mesh.rotation.z,0,8,n),t.time>=t.duration&&(t.load.mode=t.mode,t.mode==="truck"&&(t.load.fallen=!1),t.mode==="delivered"&&(t.load.item.rotated=!1),t.kind==="lift"?(Gt=t.load,ot.add(t.load.mesh),t.load.mesh.position.set(0,.95,Qs(t.load)),t.load.mesh.rotation.set(0,t.load.item.rotated?Math.PI/2:0,0),as("lift")):(ms(t.load),Aa(),t.mode==="truck"&&as("loaded")),t.load.velocity.set(0,0,0),t.load.angular.set(0,0,0),t.load.settled=!0,Ve=null,o.body.rotation.x=0,o.body.position.y=0,ir()&&(Dn(),qt("Everything delivered. Choose your reward."),as("delivered"),Gs=1.6),Ae())}function xM(){if(te||Ve||Gt)return;const n=ii(ot.position);if(Math.hypot(n.x-3,n.z-we)>4.8)return qt("Walk to the rear of your truck.");if(n.x>1.2&&n.x<4.8&&n.z>we-.2&&n.z<we+2.4)return qt("Step to the side of the ramp.");if(Ui<.5&&!iu())return qt("Park fully in the yellow bay until it turns green before lowering the rear.");Ui=Ui>.5?0:1}function MM(){if(!(Ve||Gt||ve)){if(te){Ge=0,ca=1,ve={entering:!1,time:0,swapped:!1},qt("Opening the driver door…");return}if(ot.position.distanceTo(Hs(new A(5.3,0,-1)))>3.8)return qt("The driver door is at the front right.");ca=1,ve={entering:!0,time:0,swapped:!1,from:ot.position.clone()},Ci.set(0,0,0),qt("Opening the driver door…")}}function yM(n){if(!ve)return;ve.time+=n;const t=ve.entering?.72:.5;if(ve.entering&&!ve.swapped&&ve.from&&ve.time>=.14){const e=Hs(new A(5.15,0,-1.15)),i=ge.smoothstep((ve.time-.14)/.55,0,1);e.y=ro(e),ot.position.lerpVectors(ve.from,e,i),ot.rotation.y=Lt.rotation.y-Math.PI/2,_r.animate(Qe,!0,!1,!1)}if(!ve.swapped&&ve.time>=t){if(ve.swapped=!0,ve.entering)te=!0,ot.visible=!1,qt(Ui?"Rear lowered. Raise it with G when loading is complete.":"W/S drive and brake. F exits when stopped."),as("cab");else{te=!1,ot.visible=!0;let e=Hs(new A(5.5,0,-1));for(const i of[5.5,.5]){const r=Hs(new A(i,0,-1));if(!Ar(r,.28)){e=r;break}}ot.position.copy(e),Ar(ot.position,.28)&&so(!1)}Ae()}ve.time>=(ve.entering?.82:.9)&&(ca=0),ve.time>=(ve.entering?1.18:1.35)&&(ve=null)}function Ar(n,t=.25){return[...ba.barriers,...gr.barriers,...Bn.barriers,...ei.barriers].some(e=>Math.abs(n.x-e.x)<e.w/2+t&&Math.abs(n.z-e.z)<e.d/2+t)}function af(){for(const n of[1.15,1.8,2.5,3.2,3.9,4.55,4.85])for(let t=-2.35;t<=we+.4;t+=.42)if(Ar(t<0?Hs(new A(n,0,t)):ni(new A(n,0,t)),.19))return!0;return!1}function SM(n){if(!Gt)return!1;const[t,e]=tn(Gt.item),i=n.clone().add(new A(0,0,Qs(Gt)).applyAxisAngle(tu,ot.rotation.y)),r=t*Ft/2,s=e*Ft/2,o=Math.abs(Math.cos(ot.rotation.y)),a=Math.abs(Math.sin(ot.rotation.y)),c=r*o+s*a,l=r*a+s*o;return i.x-c<He.minX||i.x+c>He.maxX||i.z-l<He.minZ||i.z+l>He.maxZ?!0:[...ba.barriers,...gr.barriers,...Bn.barriers,...ei.barriers].some(u=>Math.abs(i.x-u.x)<c+u.w/2+.04&&Math.abs(i.z-u.z)<l+u.d/2+.04)}function Ta(n,t=Zn,e=ot.position.y){if(n.x<He.minX||n.x>He.maxX||n.z<He.minZ||n.z>He.maxZ||Ar(n)||SM(n))return!1;const i=ii(n);if(i.x>1.15&&i.x<4.85&&i.z>-2.4&&i.z<.2||!t&&Math.abs(ma(n,e+.2)-e)>.22||i.z>=.2&&i.z<we&&(Math.abs(i.x-1.4)<.15||Math.abs(i.x-4.6)<.15)&&e<(B.levels.truck>0?2.75:1.02))return!1;for(const r of ue)if(r.mode==="truck"||r.mode==="ground"){const[s,o]=tn(r.item),a=r.mode==="truck"?r.position:r.mesh.getWorldPosition(new A),c=r.mode==="truck"?i:n,l=a.y+Wd(r.item.model);if(e<l-.08&&Math.abs(c.x-a.x)<s*Ft/2+.16&&Math.abs(c.z-a.z)<o*Ft/2+.16)return!1}return!0}function bM(n){if(te||ve||Ve||Q("#dialog").open)return Ci.set(0,0,0),Zo=!1,!1;const t=Number(Ee.has("KeyD")||Ee.has("ArrowRight"))-Number(Ee.has("KeyA")||Ee.has("ArrowLeft")),e=Number(Ee.has("KeyW")||Ee.has("ArrowUp"))-Number(Ee.has("KeyS")||Ee.has("ArrowDown")),i=Ne.getWorldDirection(new A);i.y=0,i.normalize();const r=new A(-i.z,0,i.x).multiplyScalar(t).addScaledVector(i,e).add(new A(Ji.x,0,Ji.y));Zo=!Gt&&r.lengthSq()>0&&(Ee.has("ShiftLeft")||Ee.has("ShiftRight")||Ji.length()>.88);const s=Gt?Math.max(1.35,3.1-Gt.item.weight*.25/(1+B.levels.worker*.3)):Zo?6.7:3.9;r.normalize().multiplyScalar(s*(1+B.levels.worker*.07)),Ci.lerp(r,1-Math.exp(-10*n));const o=ot.position.clone();for(let a=0;a<4;a++)for(const c of["x","z"]){const l=ot.position.clone();if(l[c]+=Ci[c]*n/4,Ta(l)){if(!Zn){const u=ma(l,ot.position.y+.2);ot.position.y-u>.22?(Zn=!0,Xn=Math.min(0,Xn),l.y=ot.position.y):l.y=u}ot.position.copy(l)}}if(Ci.length()>.1){const a=Math.atan2(Ci.x,Ci.z),c=Math.atan2(Math.sin(a-ot.rotation.y),Math.cos(a-ot.rotation.y));ot.rotation.y+=c*(1-Math.exp(-14*n))}return o.distanceTo(ot.position)>.003}function EM(){te||ve||Ve||Q("#dialog").open||Zn||(Zn=!0,Xn=4.3)}function wM(n){if(te||ve){Zn=!1,Xn=0;return}const t=ma(ot.position,ot.position.y+.16);if(!Zn&&ot.position.y>t+.08&&(Zn=!0,Xn=Math.min(0,Xn)),!Zn){ot.position.y=t;return}const e=ot.position.y;Xn-=12.5*n,ot.position.y+=Xn*n;const i=ma(ot.position,e+.12);Xn<=0&&ot.position.y<=i&&e>=i-.06&&(ot.position.y=i,Xn=0,Zn=!1),ot.position.y<-2&&so()}function so(n=!0){if(te)return;const t=ot.position.clone(),e=[];for(const r of mn)for(let s=He.minX+6;s<He.maxX-6;s+=3)e.push(new A(s,0,r));for(const r of mr)for(let s=He.minZ+6;s<He.maxZ-6;s+=3)e.push(new A(r,0,s));e.sort((r,s)=>r.distanceToSquared(t)-s.distanceToSquared(t));for(const r of[2,3,4.2,5.5])for(let s=0;s<16;s++)e.push(new A(t.x+Math.cos(s*Math.PI*2/16)*r,0,t.z+Math.sin(s*Math.PI*2/16)*r));const i=e.find(r=>(r.y=ro(r),Ta(r,!1,r.y)));ot.position.copy(i??new A(-6,0,1)),Xn=0,Zn=!1,Ci.set(0,0,0),yc.length=0,lM.copy(ot.position),Q("#stuck-button").hidden=!0,n&&qt("Moved you to the nearest clear space."),Ae()}function lf(){const n=nu(),t=Lt.rotation.y,e=Lt.userData.trailer,i=e.rotation.y,r=new A(3,0,(we-2.2)/2),s=[];for(const c of mn)for(let l=He.minX+9;l<He.maxX-9;l+=4)s.push({center:new A(l,0,c),yaw:Math.PI/2});for(const c of mr)for(let l=He.minZ+9;l<He.maxZ-9;l+=4)s.push({center:new A(c,0,l),yaw:0});s.sort((c,l)=>c.center.distanceToSquared(n)-l.center.distanceToSquared(n));for(const c of[3.5,5.5,8])for(let l=0;l<12;l++)s.push({center:n.clone().add(new A(Math.cos(l*Math.PI*2/12)*c,0,Math.sin(l*Math.PI*2/12)*c)),yaw:t});const o=Lt.position.clone();e.rotation.y=0;const a=s.find(({center:c,yaw:l})=>(Lt.rotation.y=l,Lt.position.copy(c).sub(r.clone().applyAxisAngle(tu,l)),Lt.updateMatrixWorld(!0),!(af()||os.some(d=>d.visible&&c.distanceTo(d.position)<4.2))));a||(Lt.position.copy(o),Lt.rotation.y=t,e.rotation.y=i),Lt.updateMatrixWorld(!0),Ge=0,Us=0,Mc.length=0,qi.length=0,Zd.copy(Lt.position),Q("#stuck-button").hidden=!0,qt(a?"Moved the truck to the nearest clear space.":"No clear rescue position found nearby."),Ae()}function Aa(){!te&&!Ta(ot.position,!1,ot.position.y)&&so(!1)}function TM(n){if(!te||ve)return{acceleration:0,yawRate:0};const t=Number(Ee.has("KeyW")||Ee.has("ArrowUp"))-Number(Ee.has("KeyS")||Ee.has("ArrowDown")),e=Number(Ee.has("KeyA")||Ee.has("ArrowLeft"))-Number(Ee.has("KeyD")||Ee.has("ArrowRight")),i=t,r=e,s=Ge;if(i&&Ui>.05)return Ge=0,Qe-Go>1.5&&(Go=Qe,qt("Raise the rear with G before driving.")),{acceleration:0,yawRate:0};Ge+=i*(i*Ge<0?10:4+B.levels.truck*.45)*n,i||(Ge*=Math.exp(-1.7*n)),!i&&Math.abs(Ge)<.04&&(Ge=0),Ge=ge.clamp(Ge,-4,8.5+B.levels.truck*1.3),Us=ge.damp(Us,ge.clamp(r,-1,1)*.56,4.5,n);const o=Lt.userData.trailer;o.rotation.y=0,Lt.updateMatrixWorld(!0);const a=Ge*Math.tan(Us)/Math.max(3.1,we*.65),c=new A(3,0,(we-2.2)/2),l=ni(c),u=l.clone(),d=Lt.position.clone(),h=Lt.rotation.y;Lt.rotation.y+=a*n,l.addScaledVector(new A(-Math.sin(Lt.rotation.y),0,-Math.cos(Lt.rotation.y)),Ge*n),Lt.position.copy(l).sub(c.applyAxisAngle(tu,Lt.rotation.y)),Lt.updateMatrixWorld(!0);let f=!1,g=!1;f=af();const S=2.4;(l.x<He.minX+S||l.x>He.maxX-S||l.z<He.minZ+S||l.z>He.maxZ-S)&&(f=!0);for(const m of os)m.visible&&l.distanceTo(m.position)<4.2&&l.distanceTo(m.position)<u.distanceTo(m.position)-.005&&(f=!0,g=!0);f&&(Lt.position.copy(d),qi.push(Qe),Ue&&!We&&Qe-_c>1.5&&(Er++,_c=Qe),Lt.rotation.y=h,Lt.updateMatrixWorld(!0),Ge=-s*.12,Qe-Go>.7&&(Go=Qe,g&&qt("Both trucks stopped safely. Reverse away to continue.")));for(const m of Lt.userData.wheels??[])m.rotation.x-=Ge*n/.46;for(const m of Lt.userData.frontWheels??[])m.rotation.y=ge.damp(m.rotation.y,Us*.72,9,n);return{acceleration:(Ge-s)/n,yawRate:a}}function js(){os.forEach(mi),os=[],B.fleet.forEach((n,t)=>{const e=new xe;e.name=`fleet-${t}`;const i=parseInt(aa.truck.find(a=>a.id===B.selectedSkins.truck)?.color.slice(1)??"e6ad51",16),r=new $t(i).multiplyScalar(.83).getHex();P(e,0,.48,0,2.35,.35,4.3,3361358,!0),P(e,0,1.52,.63,2.28,1.85,2.85,i,!0),P(e,0,2.46,.63,2.36,.09,2.93,r,!0),P(e,0,1.18,-1.45,2.1,1.18,1.35,i,!0),P(e,0,1.79,-1.48,2.12,.09,1.34,r,!0),P(e,0,1.38,-2.13,1.72,.55,.055,9156802,!0),P(e,0,.86,-2.13,1.6,.2,.055,3427670,!0),P(e,0,1.15,2.09,2,1.12,.08,r,!0);for(const a of[-1,1])P(e,a*.84,.81,-2.13,.22,.2,.055,16769956,!0),P(e,a*1.07,1.35,-1.48,.055,.48,.58,9156802,!0),P(e,a*.9,.77,2.12,.19,.28,.055,13591893,!0);const s=[];for(const a of[-1.2,1.2])for(const c of[-1.46,1.35]){const l=new Ot(new un(.38,.38,.2,14),new Sr({color:2505027}));l.rotation.z=Math.PI/2,l.position.set(a,.38,c),e.add(l),s.push(l);const u=new Ot(new un(.2,.2,.205,14),new Sr({color:12108988}));u.rotation.z=Math.PI/2,u.position.set(a*1.01,.38,c),e.add(u)}e.userData.wheels=s,e.userData.skin=B.selectedSkins.truck;const o=Tc(wc(n,t),n.phase);e.position.copy(o.position),e.rotation.y=o.yaw+Math.PI,e.userData.safePosition=o.position.clone(),Pe.add(e),os.push(e)})}function wc(n,t){const e=8+t*4.8;return[new A(e,0,-9),new A(e,0,4),new A(e,0,12),new A(42,0,12),new A(90,0,12),new A(90,0,48),new A(42,0,48),new A(42,0,12),new A(e,0,12),new A(e,0,4),new A(e,0,-9)]}function Tc(n,t){if(t<=0)return{position:n[0].clone(),yaw:0,segment:0};const e=n.slice(1).map((s,o)=>s.distanceTo(n[o])),i=e.reduce((s,o)=>s+o,0);let r=ge.clamp(t,0,.9999)*i;for(let s=0;s<e.length;s++){if(r<=e[s]){const o=r/Math.max(.001,e[s]),a=n[s].clone().lerp(n[s+1],o),c=n[s+1].clone().sub(n[s]);return{position:a,yaw:Math.atan2(c.x,c.z),segment:s}}r-=e[s]}return{position:n.at(-1).clone(),yaw:0,segment:e.length-1}}function AM(n){const t=B.fleet.map(u=>u.pending??0),e=tM(B,n,-1);e&&ua<=0&&qt(`+$${e} · Your company is working`),Lt.updateMatrixWorld(!0);const i=new _s().setFromObject(Lt).expandByScalar(2.6),r=B.fleet.map((u,d)=>Tc(wc(u,d),u.phase)),s=r.some((u,d)=>B.fleet[d].phase>0&&u.segment>=7&&u.segment<=9),o=r.some((u,d)=>B.fleet[d].phase>0&&u.segment>=1&&u.segment<=3),a=r.some((u,d)=>B.fleet[d].phase>0&&u.segment===6&&u.position.z<19),c=s||!o&&a?"in":"out",l=B.fleet.map((u,d)=>d).sort((u,d)=>B.fleet[d].phase-B.fleet[u].phase);for(const u of l){const d=B.fleet[u],h=os[u];if(!h||d.pending)continue;d.route??=u%3;const f=d.phase+n/Od(d),g=Tc(wc(d,u),f>=1?0:f),S=g.segment>=7||g.segment===6&&g.position.z<19,m=g.segment>=1&&g.segment<=3,p=c==="in"&&m||c==="out"&&S,b=i.containsPoint(g.position.clone().setY(1)),w=r.some((x,_)=>_!==u&&x.position.distanceTo(g.position)<4.45);if(!p&&!b&&!w){d.phase=f>=1?0:f,f>=1&&(d.completed++,d.pending=(d.pending??0)+zd(d));const x=h.userData.safePosition?g.position.distanceTo(h.userData.safePosition):0;h.position.copy(g.position),r[u]=g,h.rotation.y=g.yaw+Math.PI;for(const _ of h.userData.wheels??[])_.rotation.x-=x/.4;h.userData.safePosition=g.position.clone()}}B.fleet.some((u,d)=>(u.pending??0)>t[d])&&(Dn(),qt("An employee truck returned. Collect its income at the parking bay."),Ae())}function RM(n){const t=te?ni(new A(3,0,2)):ot.position;for(const s of[...ba.roofs,...gr.roofs,...Bn.roofs,...ei.roofs]){const o=Math.abs(t.x-s.bounds.x)<s.bounds.w/2+1&&Math.abs(t.z-s.bounds.z)<s.bounds.d/2+1;for(const a of[s.mesh,...s.walls??[]]){const c=a.material;c.opacity=ge.damp(c.opacity,o?.035:1,6,n),c.depthWrite=c.opacity>.5,a.castShadow=c.opacity>.5}}const e=ii(ot.position),i=!te&&e.x>1&&e.x<5&&e.z>-.1&&e.z<we+2.5,r=[Lt.userData.roof,...Lt.userData.cargoWalls??[]];for(const s of r){const o=s.material;o.opacity=ge.damp(o.opacity,i||te?.025:1,7,n),o.depthWrite=o.opacity>.5,s.castShadow=o.opacity>.5}}function CM(){if(!Ue||We)return{point:new A(-10,0,1),text:"Accept a move at your job board"};if(ir())return{point:new A(wn+2,0,hn),text:"Choose your completion reward"};const n=ue.find(t=>t.mode==="ground");return n?{point:n.position.clone(),text:n.fallen?"Recover the fallen furniture":"Pick up the furniture"}:{point:new A(wn-5.6,0,hn+1),text:"Unload inside the new home"}}function PM(n){if(!te)return n;const t=nu(),{leg:e,point:i}=wa(),r=i.x,s=i.z;if(Math.abs(t.x-r)<10&&Math.abs(t.z-s)<10)return vr=e,Wn=[],je=0,{point:new A(r,0,s),text:e==="yard"?"Park fully inside the yellow yard bay":`Park fully inside the yellow ${e} bay`};const o=Wn.length<2?1/0:Math.min(...Wn.slice(1).map((x,_)=>{const M=Wn[_],R=x.x-M.x,v=x.z-M.z,T=R*R+v*v,D=T?ge.clamp(((t.x-M.x)*R+(t.z-M.z)*v)/T,0,1):0;return Math.hypot(t.x-M.x-R*D,t.z-M.z-v*D)})),a=x=>mn.reduce((_,M)=>Math.abs(M-(x+12))<Math.abs(_-(x+12))?M:_),l=e==="yard"?12:a(e==="pickup"?an:hn),u=t.x>-26&&t.x<36&&t.z>-36&&t.z<8,d=(x,_)=>Math.abs(t.x-(x+4))<12&&Math.abs(t.z-(_-2.1))<13,h=u?12:d(Sn,an)?a(an):d(wn,hn)?a(hn):void 0;(vr!==e||!Wn.length||o>7)&&(vr=e,je=0,Wn=iM(t,new A(r,0,s),{startLane:h,goalLane:l}));const f=Wn;let g=0,S=1/0;for(let x=0;x<f.length-1;x++){const _=f[x],M=f[x+1],R=M.x-_.x,v=M.z-_.z,T=R*R+v*v,D=T?ge.clamp(((t.x-_.x)*R+(t.z-_.z)*v)/T,0,1):0,O=Math.hypot(t.x-_.x-R*D,t.z-_.z-v*D)+Math.max(0,je-x-1)*2;O<S&&(S=O,g=x)}for(je=Math.min(f.length-1,Math.max(je,g+1));je<f.length-1&&(t.distanceTo(f[je])<2.5||sM(f[je-1],f[je],t));)je++;const m=f[je],p=Math.round(t.distanceTo(m)),b=f[je+1];let w=e==="yard"?"Return to your company yard":`Continue to the ${e} house`;if(b){const x=rM(f[je-1],m,b);w=x==="straight"?`Continue straight for ${p} m`:x==="around"?`In ${p} m turn around`:`In ${p} m turn ${x}`}else p<18&&(w=e==="yard"?"Park in your company yard":`Park at the ${e} house`);return{point:m,text:w}}function Bh(){for(;ps.children.length;){const n=ps.children.pop();n instanceof Ot&&(n.geometry.dispose(),n.material.dispose())}}function DM(){const n=te&&Wn.length>1,t=wa().point;if(ji.visible=te,ji.position.set(t.x,0,t.z),Ea.scale.y=qd(),!n){ko&&Bh(),ko="";return}const e=Wn,i=`${vr}:${e.map(l=>`${l.x.toFixed(1)},${l.z.toFixed(1)}`).join(";")}`,r=()=>{const l=ps.children[0];if(!l)return;const d=l.geometry.userData.segmentEnds[Math.max(0,je-2)]??0;l.geometry.setDrawRange(d,l.geometry.getAttribute("position").count-d)};if(i===ko){r();return}ko=i,Bh();const s=[],o=[];for(let l=0;l<e.length-1;l++){const u=e[l],d=e[l+1],h=d.clone().sub(u),f=h.length(),g=mn.some(w=>Math.abs(u.z-w)<.15&&Math.abs(d.z-w)<.15)||mr.some(w=>Math.abs(u.x-w)<.15&&Math.abs(d.x-w)<.15);if(f<.5||!g){o.push(s.length/3);continue}const S=h.multiplyScalar(1/f),m=new A(-S.z,0,S.x),p=4.2,b=Math.min(2.2,f*.4);for(let w=b;w<f-.45;w+=p){const x=u.clone().addScaledVector(S,w),_=x.clone().addScaledVector(S,.82),M=x.clone().addScaledVector(S,-.58),R=M.clone().addScaledVector(m,.5),v=M.clone().addScaledVector(m,-.5);s.push(_.x,.14,_.z,R.x,.14,R.z,v.x,.14,v.z)}o.push(s.length/3)}if(!s.length)return;const a=new Oe;a.setAttribute("position",new se(s,3)),a.userData.segmentEnds=o,a.computeVertexNormals();const c=new Ot(a,new yi({color:7792592,transparent:!0,opacity:.82,side:gn,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3}));c.name="route-ground-arrows",c.renderOrder=3,ps.add(c),r()}function jr(){const n=CM(),t=PM(n),e=ue.filter(c=>c.mode==="truck").length,i=ue.filter(c=>c.mode==="delivered").length;DM(),Q("#jem-count").textContent=B.test?"∞":B.jems.toLocaleString("en-US"),Q("#cash").textContent=B.test?"∞":B.cash>=1e4?`$${(B.cash/1e3).toFixed(B.cash<1e5?1:0)}K`:`$${Math.floor(B.cash).toLocaleString("en-US")}`,Q("#cash-mode").textContent=B.test?"TEST MONEY":`$${Math.floor(B.earned).toLocaleString("en-US")} earned`,Q("#job-title").textContent=We?B.finished?"Coming soon":"Move completed!":Ue?Ut.title:"Small beginnings",Q("#job-label").textContent=Ue?`MOVE ${Tr+1} · LEVEL ${Ut.difficulty}`:"YOUR NEXT MOVE",Q("#job-step").textContent=t.text,Q("#job-progress").style.width=`${Ue?(e+i*2)/ue.length/2*100:0}%`,Q("#job-count").textContent=Ue?`${e} in truck  ·  ${i}/${ue.length} delivered`:"Your first customer is waiting",Q("#job-score").innerHTML=Ue?`<div class="score-total"><span>MOVE SCORE</span><b>${ls()}/100</b></div><small>${rf()}</small>`:"",Q("#job-value").textContent=Ue?`${We?"COLLECTED":"PAYDAY"}  $${ir()?da():Ut.reward}`:B.finished?"You built the complete company.":"Start with a job. Build an empire.";const r=te?ni(new A(3,0,1)):ot.position,s=Math.round(r.distanceTo(t.point));Q("#nav-distance").textContent=te&&s>5?`${s} m`:"",Q("#status-kicker").textContent=te?`${Math.round(Math.abs(Ge)*3.6)} KM/H · NEXT ACTION`:"NEXT ACTION";let o="E",a=t.text;if(Ve)a=`${Ve.kind==="lift"?"Lifting":"Placing"} ${Ve.load.item.name}`,o="···";else if(te)o="W/S",a=t.text;else if(Gt)a=cs()?ru()?.valid?"Place in highlighted space · R rotate":"No clear space nearby · R rotate or move closer":Kn.visible?`Place ${Gt.item.name} on the marked spot`:"Carry to the truck or into the delivery house";else if(pa()){const c=pa();a=c.key==="job"?"Stand still on the job field to accept a move":c.income!==void 0?`Collect $${B.fleet[c.income]?.pending??0} from this crew`:c.upgrade?`Stand still to upgrade ${br[c.upgrade]}`:"Stand still to upgrade this fleet truck",o=c.key==="job"?"⏱":c.upgrade||c.fleet!==void 0?"$":"E"}else{const c=of(),l=ii(ot.position);c?(a=`Lift ${c.item.name} · ${c.item.weight>=4?"HEAVY":c.item.fragile?"FRAGILE":"READY"}`,o="E"):Math.hypot(l.x-5.3,l.z+1)<3?(a="Enter your truck",o="F"):Math.hypot(l.x-3,l.z-we)<4&&(a=Ui?"Raise the rear":"Lower the rear",o="G")}Q("#hint-key").textContent=o,Q("#nav-label").textContent=a,Q("#company-stats").innerHTML=`<div><b>${B.jobs}</b><span>YOUR MOVES</span></div><div><b>${B.levels.hire}</b><span>CREWS</span></div><div><b>${B.fleet.length}</b><span>FLEET TRUCKS</span></div>`,Q("#fleet-list").innerHTML=B.fleet.map((c,l)=>`<div class="fleet-row"><span>Truck ${l+2} · Level ${c.level}<small>${(c.pending??0)>0?`$${c.pending} ready at parking bay`:c.phase<.05?"Loading at the base":c.phase<.82?"Driving through the city tunnel":"Returning to its bay"} · ${c.completed} trips</small></span><div class="progress"><i style="width:${Math.max(0,c.phase)*100}%"></i></div></div>`).join(""),document.querySelectorAll("[data-upgrade]").forEach(c=>{const l=c.dataset.upgrade;c.textContent=`${br[l]} · ${B.levels[l]}/${bn[l]}`})}function Ae(){if(!$d)try{Qi.setItem("movecraft-rewrite-v1",JSON.stringify({worldVersion:2,navPath:Wn.map(n=>n.toArray()),company:B,contract:Ut,jobActive:Ue,jobPaid:We,jobNumber:Tr,routeVariant:Yn,collisionHits:Er,jobElapsed:wr,navLeg:vr,navIndex:je,tutorialStep:kt,truck:{position:Lt.position.toArray(),yaw:Lt.rotation.y,trailerAngle:Lt.userData.trailer.rotation.y,rear:Ui},player:ot.position.toArray(),loads:ue.map(n=>({item:n.item,mode:n.mode==="hand"?"ground":n.mode,position:n.mode==="hand"?ot.position.toArray():n.position.toArray(),velocity:n.velocity.toArray(),rotation:n.mesh.rotation.toArray(),settled:n.settled,fallen:n.fallen}))}))}catch{}}function LM(){if(Qt)try{Ut=Qt.contract?.fromSite&&Qt.contract?.toSite?Qt.contract:{...Jc(Qt.jobNumber??B.jobs,B.levels.truck,Qt.routeVariant??0),...Qt.contract??{},fromSite:Ut.fromSite,toSite:Ut.toSite},Sn=Ut.fromSite.x,an=Ut.fromSite.z??0,wn=Ut.toSite.x,hn=Ut.toSite.z??0,Ue=!!Qt.jobActive,We=!!Qt.jobPaid,Tr=Qt.jobNumber??0,Yn=Qt.routeVariant??Tr%3,Er=Qt.collisionHits??0,wr=Qt.jobElapsed??0,vr="",je=0,Wn=[],Qt.truck&&(Lt.position.fromArray(Qt.truck.position),Lt.rotation.y=Qt.truck.yaw,Lt.userData.trailer.rotation.y=0,Zi=Ui=Qt.truck.rear),Qt.player&&ot.position.fromArray(Qt.player),Ue&&(mi(Bn.root),mi(ei.root),Bn=fs(Sn,Ut.fromSite.variant+Yn,!1,an),ei=fs(wn,Ut.toSite.variant+Yn,!0,hn),Pe.add(Bn.root,ei.root),jd(),Sc());let n=!1;for(const t of Qt.loads??[]){const e={item:t.item,mesh:Id(t.item.model),mode:t.mode==="air"?"ground":t.mode,position:new A().fromArray(t.position),velocity:new A().fromArray(t.velocity??[0,0,0]),angular:new A,hitAt:-10,settled:t.settled,fallen:!1};if(t.mode==="air"&&(e.position.y=.12,e.fallen=!0),t.shelf&&e.mode==="truck"&&(n=!0,e.position.y=.78,e.item.x=Math.max(0,Math.min(3,e.item.x)),e.item.z=Math.max(0,Math.min(zn-tn(e.item)[1],e.item.z)),e.position.x=1.4+(e.item.x+tn(e.item)[0]/2)*Ft,e.position.z=.2+(e.item.z+tn(e.item)[1]/2)*Ft),ue.push(e),e.mode==="ground"&&!e.fallen&&Bn.barriers.some(i=>Math.abs(e.position.x-i.x)<(e.item.w*Ft+i.w)/2+.18&&Math.abs(e.position.z-i.z)<(e.item.d*Ft+i.d)/2+.18)){const i=Ut.items.find(r=>r.id===e.item.id);i&&(e.item.pickupX=i.pickupX,e.item.pickupZ=i.pickupZ),e.position.set(Sn+e.item.pickupX,.12,an+e.item.pickupZ)}ms(e),t.rotation&&e.mode!=="truck"&&e.mesh.rotation.fromArray(t.rotation)}if(n||ue.some(t=>t.mode==="truck"&&t.item.z+tn(t.item)[1]>zn)){const t=[];let e=0;for(const i of ue.filter(r=>r.mode==="truck")){let r;const s=i.item.rotated;for(const o of[s,!s]){i.item.rotated=o;for(let a=0;a<zn&&!r;a++)for(let c=0;c<4&&!r;c++)Qc(t,i.item,c,a,4,zn)&&(r={x:c,z:a,rotated:o});if(r)break}if(r){i.item.rotated=r.rotated,i.item.x=r.x,i.item.z=r.z;const[o,a]=tn(i.item);i.position.set(1.4+(r.x+o/2)*Ft,.78,.2+(r.z+a/2)*Ft),t.push({...i.item,location:"truck"})}else i.mode="ground",i.fallen=!0,i.position.copy(ni(new A(3+e%2*1.4,.12,we+3+Math.floor(e/2)*1.5))),e++;ms(i)}}Ue&&Sc(),Aa()}catch{qt("Saved session could not be fully restored.")}}function IM(){(!Ue||We)&&ha(!0),B.levels.truck<3&&(B.levels.truck=3,B.levels.cargo=B.levels.gear=3,Js()),Gt=null,Ve=null;for(const n of ue)n.mode="ground",n.item.rotated=!1;for(const n of ue){let t=!1;for(const e of[!1,!0]){if(t)break;n.item.rotated=e;for(let i=0;i<zn&&!t;i++)for(let r=0;r<4&&!t;r++){const s=ue.map(o=>({...o.item,location:o.mode==="truck"?"truck":"pickup"}));if(Qc(s,n.item,r,i,4,zn)){n.item.x=r,n.item.z=i;const[o,a]=tn(n.item);n.mode="truck",n.position.set(1.4+(r+o/2)*Ft,.78,.2+(i+a/2)*Ft),n.velocity.set(0,0,0),t=!0}}}ms(n)}Dn(),qt(`${ue.filter(n=>n.mode==="truck").length}/${ue.length} packed. Test packing expands the cargo bay.`),Ae()}function NM(n){if(Math.abs(Ge)>.35)return qt("Stop before using test tools.");n==="job"&&ha(!0),n==="pack"&&IM(),n==="deliver"&&(Ue||ha(),ue.forEach((t,e)=>{t.mode="delivered",t.position.set(wn-8+e%3*2.5,.12,hn-3+Math.floor(e/3)*2.5),ms(t)}),Gt=null,Ve=null,Dn(),ot.position.set(wn-6,0,hn+6),te=!1,ot.visible=!0,qt("Delivery complete. Choose your reward."),fa()),n==="home"&&(ot.position.set(-6,0,1),te=!1,ot.visible=!0,qt("Test teleport: player returned. Truck and cargo stay where they are.")),n==="restart"&&(nr('<h2>Reset test career?</h2><p>This replaces your saved rewrite career with the shabby starting setup.</p><button id="confirm-reset">Reset career</button>'),Q("#confirm-reset").onclick=()=>{$d=!0,Qi.removeItem("movecraft-rewrite-v1"),Qi.removeItem("movecraft-update-backup"),location.reload()}),Ae()}const cf={interact:_M,cab:MM,rotate:()=>{Gt&&!Ve&&(Gt.item.rotated=!Gt.item.rotated,Gt.mesh.rotation.set(0,Gt.item.rotated?Math.PI/2:0,0),Gt.mesh.position.z=Qs(Gt))},rear:xM};document.querySelectorAll("[data-action]").forEach(n=>n.onclick=()=>cf[n.dataset.action]());document.querySelectorAll("[data-test]").forEach(n=>n.onclick=()=>NM(n.dataset.test));Q("#upgrade-tests").innerHTML=Object.keys(br).filter(n=>["truck","worker","yard","hire","factory"].includes(n)).map(n=>`<button data-upgrade="${n}"></button>`).join("");document.querySelectorAll("[data-upgrade]").forEach(n=>n.onclick=()=>{if(Math.abs(Ge)>.35)return qt("Stop before upgrading.");const t=n.dataset.upgrade;sf(t);const e=li.find(i=>i.key===t);e&&(te=!1,ot.visible=!0,ot.position.copy(e.position).add(new A(0,0,2)),ot.position.y=ro(ot.position),Ne.zoom=t==="yard"||t==="fleet"?.9:1.6,Ne.updateProjectionMatrix())});Q("#test-toggle").onclick=()=>{Q("#tests").hidden=!Q("#tests").hidden};Q("#company-toggle").onclick=()=>{Q("#company-panel").hidden=!Q("#company-panel").hidden};function UM(){const n=new Date,t=n.toISOString().slice(0,10),e=new Date(n.getTime()-864e5).toISOString().slice(0,10),i=B.daily.lastClaim===t,r=B.daily.lastClaim===e?B.daily.streak>=8?1:B.daily.streak+1:1,s=i?B.daily.streak:r,o=l=>ss(l)?`$${ss(l)}`:rs(l)?`<span class="daily-jem">${ce.icon} ${rs(l)} ${ce.name}</span>`:"Construction worker skin",a=r===8&&B.ownedSkins.person.includes("build")?`<span class="daily-jem">${ce.icon} 5 ${ce.name}</span>`:o(r),c=Array.from({length:8},(l,u)=>{const d=u+1;return`<div class="daily-day ${d===s?"today":d<s?"collected":""} ${d===8?"daily-skin-day":""}"><span>DAY ${d}</span>${d===8?`<div class="daily-skin-preview">${Xd("person","build")}</div>`:""}<strong>${o(d)}</strong><small>${d<s||i&&d===s?"✓ Collected":d===s?"Available":"Upcoming"}</small></div>`}).join("");return`<div class="daily-modal"><small>DAILY REWARD</small><h2>${i?"Come back tomorrow":`Claim ${a}`}</h2><div class="daily-days">${c}</div><p>Claim on consecutive days. A missed day restarts the series at Day 1.${B.ownedSkins.person.includes("build")?" If you already own the Day 8 skin, you receive 5 Jems instead.":""}</p>${i?"":'<button id="claim-daily">Claim reward</button>'}</div>`}let uf="daily";function Ls(n,t){Ae(),nr(`<div class="shop-success"><div class="shop-success-icon">✓</div><small>PURCHASE COMPLETE</small><h2>${n}</h2><p>${t}</p><button id="shop-success-close">Continue shopping</button></div>`),Q("#shop-success-close").onclick=()=>ga(uf)}function bl(n){const t=document.querySelector("#shop-error");t&&(t.textContent=n,t.hidden=!1)}function ga(n="daily"){uf=n;const t=`<div class="shop-tabs"><button data-shop-tab="daily" class="${n==="daily"?"active":""}">Daily gifts</button><button data-shop-tab="currency" class="${n==="currency"?"active":""}">Coins & Jems</button><button data-shop-tab="skins" class="${n==="skins"?"active":""}">Skins</button></div>`;let e="";n==="daily"&&(e=UM()),n==="currency"&&(e=`<div class="shop-section"><h2>Coins & ${ce.name}</h2><p class="shop-balance">${ce.icon} ${B.test?"∞":B.jems} ${ce.name} · $${B.test?"∞":Math.floor(B.cash).toLocaleString("en-US")}</p>${mc.map((s,o)=>`<div class="shop-card"><span class="shop-art coins">$</span><span><b>${s.coins.toLocaleString("en-US")} coins</b><small>Exchange ${s.jems} ${ce.name}</small></span><button data-coin-pack="${o}">${ce.icon} ${s.jems}</button></div>`).join("")}${`<div class="shop-card"><span class="shop-art coins">$</span><span><b>5,000 coins</b><small>Rewarded video</small></span><button data-video-reward="coins">▶ Watch</button></div><div class="shop-card"><span class="shop-art jems">${ce.icon}</span><span><b>10 ${ce.name}</b><small>Rewarded video</small></span><button data-video-reward="jems">▶ Watch</button></div>`}</div>`),n==="skins"&&(e=`<div class="shop-section"><h2>Skins</h2><p class="shop-balance">${ce.icon} ${B.test?"∞":B.jems} ${ce.name}</p><p class="shop-note">Looks only · levels stay unchanged</p>${["truck","person"].map(s=>`<h3>${s==="truck"?"Truck":"Person"}</h3><div class="skin-grid">${aa[s].map(o=>{const a=B.ownedSkins[s].includes(o.id),c=B.selectedSkins[s]===o.id;return`<div class="skin-card"><div class="skin-preview ${s}">${Xd(s,o.id)}</div><b>${o.name}</b><button data-skin-kind="${s}" data-skin-id="${o.id}" ${c?"disabled":""}>${c?"Equipped":a?"Equip":`${ce.icon} ${o.price}`}</button></div>`}).join("")}</div>`).join("")}</div>`),nr(`<div class="shop-modal"><div class="shop-heading"><span>🛒 SHOP</span><div class="shop-wealth"><span>$${B.test?"∞":Math.floor(B.cash).toLocaleString("en-US")}</span><span>${ce.icon} ${B.test?"∞":B.jems}</span></div></div>${t}<p id="shop-error" class="shop-error" hidden></p>${e}</div>`),document.querySelectorAll("[data-shop-tab]").forEach(s=>s.onclick=()=>ga(s.dataset.shopTab));const i=document.querySelector("#claim-daily-double");i&&(i.onclick=()=>{i.disabled=!0,Ef(()=>{const s=Math.min(8,B.daily.streak+1);Ph(B);const o=ss(s),a=rs(s);o&&ds(B,o),a&&(B.jems+=a),Ae(),jr(),Ls(o?`$${o*2}`:`${ce.icon} ${a*2}`,"Daily gift doubled"),Q("#daily-button").classList.remove("ready")},()=>{i.disabled=!1,bl("Ad unavailable · try again")})});const r=document.querySelector("#claim-daily");r&&(r.onclick=()=>{const s=B.ownedSkins.person.includes("build");Ph(B),Ae(),jr();const o=B.daily.streak,a=ss(o)?`$${ss(o)}`:rs(o)?`${ce.icon} ${rs(o)} ${ce.name}`:s?`${ce.icon} 5 ${ce.name}`:"Construction worker skin";Ls(a,"Daily reward claimed"),Q("#daily-button").classList.remove("ready")}),document.querySelectorAll("[data-coin-pack]").forEach(s=>s.onclick=()=>{const o=Number(s.dataset.coinPack),a=mc[o];if(!a||!oM(B,o))return bl(`You need ${a?.jems??0} ${ce.name}.`);jr(),Ls(`${a.coins.toLocaleString("en-US")} coins`,`Paid ${a.jems} ${ce.name}`)}),document.querySelectorAll("[data-video-reward]").forEach(s=>s.onclick=()=>{const o=s.dataset.videoReward;s.disabled=!0;const a=()=>{o==="coins"?ds(B,5e3):B.jems+=10,jr(),Ls(o==="coins"?"5,000 coins":`10 ${ce.name}`,"Video reward claimed")};{const c=Q("#dialog");c.innerHTML='<div class="reward-video"><b>MOVING EMPIRE</b><p>Video preview</p><div class="progress"><i></i></div></div>',window.setTimeout(a,3e3)}}),document.querySelectorAll("[data-skin-kind]").forEach(s=>s.onclick=()=>{const o=s.dataset.skinKind,a=s.dataset.skinId;if(B.ownedSkins[o].includes(a)){B.selectedSkins[o]=a,o==="truck"?(Js(),js()):la(),Ae(),ga("skins");return}if(!aM(B,o,a))return bl(`Not enough ${ce.name} for this skin.`);o==="truck"?(Js(),js()):la();const c=aa[o].find(l=>l.id===a);Ls(`${c.name} ${o==="truck"?"truck":"person"} skin`,"Purchased and equipped · Upgrade level unchanged")})}Q("#daily-button").onclick=()=>ga();Q("#job-toggle").onclick=()=>Q("#job-body").classList.toggle("collapsed");const FM="406b1e8ded8c31c22583e85f4204eff2ae6692fa65a9c8a9552756b5a834b3f4";async function OM(n){const t=new TextEncoder().encode(n),e=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(e),r=>r.toString(16).padStart(2,"0")).join("")===FM}function Ac(){Q("#mode-toggle").hidden=!0,Q("#test-toggle").hidden=!0,B.test||(Q("#tests").hidden=!0)}B.test=!1;Ac();Q("#camera-follow").onclick=()=>{Ne.zoom=.78,Ne.updateProjectionMatrix()};for(const[n,t]of[["zoom-in",1.2],["zoom-out",1/1.2]])Q(`#${n}`).onclick=()=>{Ne.zoom=ge.clamp(Ne.zoom*t,_n.minZoom,_n.maxZoom),Ne.updateProjectionMatrix()};Q("#settings").onclick=()=>{nr(`<div class="settings-panel"><h2>Settings</h2><section><h3>Audio</h3><label><span>Button sound</span><input id="sound" type="checkbox" ${Zs?"checked":""}></label></section><section><h3>Game & display</h3><label><span>Soft shadows</span><input id="shadows" type="checkbox" ${_l?"checked":""}></label><button id="rescue-now">Got stuck? Move to a clear spot</button><button id="replay-tutorial">Replay tutorial</button></section><section><details id="dev-section" ${B.test?"open":""}><summary>Advanced</summary><div class="developer-access">${B.test?'<button id="dev-tools-open">Open tools</button><button id="dev-disable">Disable developer mode</button>':'<label><span>Access code</span><input id="dev-code" type="password" autocomplete="off" spellcheck="false"></label><button id="dev-unlock">Unlock</button><p id="dev-error" class="fine" role="status"></p>'}</div></details></section><section><h3>About</h3><p>Moving Empire · Publisher: Tortugarx</p></section><section><h3>Progress</h3><button id="update-game">Update game safely</button><p class="fine">${Sf()}</p></section></div>`);const n=document.querySelector("#dev-unlock");n&&(Q("#dev-code").onkeydown=t=>{t.key==="Enter"&&(t.preventDefault(),n.click())},n.onclick=async()=>{n.disabled=!0;const t=Q("#dev-code");await OM(t.value)?(B.test=!0,Ac(),Dn(),Ae(),Q("#dialog").close(),qt("Developer tools unlocked.")):(Q("#dev-error").textContent="Incorrect code.",t.value="",n.disabled=!1)}),document.querySelector("#dev-tools-open")?.addEventListener("click",()=>{Q("#dialog").close(),Q("#tests").hidden=!1}),document.querySelector("#dev-disable")?.addEventListener("click",()=>{B.test=!1,Ac(),Dn(),Ae(),Q("#dialog").close()}),Q("#sound").onchange=t=>{Zs=t.target.checked,cM()},Q("#shadows").onchange=t=>{_l=t.target.checked,Ln.shadowMap.enabled=_l},Q("#rescue-now").onclick=()=>{Q("#dialog").close(),te?lf():so()},Q("#replay-tutorial").onclick=()=>{kt=0,Q("#dialog").close(),ui(Jn[0][0],Jn[0][1],"Got it",Jn[0][2]),Ae()},Q("#update-game").onclick=()=>{Ae();const t=Qi.getItem("movecraft-rewrite-v1");t&&Qi.setItem("movecraft-update-backup",t);const e=new URL(location.href);e.searchParams.set("update",Date.now().toString()),location.replace(e)}};Q("#stuck-button").onclick=()=>te?lf():so();Q("#help").onclick=()=>nr("<h2>Moving controls</h2><p>WASD / arrows move relative to the camera; the mobile joystick points in the world direction to walk. Shift sprints. Space jumps. Drag to orbit, scroll or pinch to zoom.</p><p>E lifts and places. Carry furniture onto the truck through the rear. R rotates. F enters/exits the cab. W/S drives/brakes; A/D steer. On mobile, use the four arrow buttons to drive. G raises or lowers the rear.</p><p>Stand still on an upgrade field to invest automatically.</p>");document.addEventListener("wheel",n=>{(n.ctrlKey||n.metaKey)&&n.preventDefault()},{passive:!1});for(const n of["gesturestart","gesturechange","gestureend"])document.addEventListener(n,t=>t.preventDefault(),{passive:!1});window.addEventListener("keydown",n=>{(n.ctrlKey||n.metaKey)&&["Equal","Minus","Digit0","NumpadAdd","NumpadSubtract","Numpad0"].includes(n.code)&&n.preventDefault()},{capture:!0});window.addEventListener("keydown",n=>{if(Q("#dialog").open||(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","Space"].includes(n.code)&&(Ee.add(n.code),n.preventDefault()),n.repeat))return;n.code==="Space"&&EM();const t={KeyE:"interact",KeyF:"cab",KeyR:"rotate",KeyG:"rear"};t[n.code]&&cf[t[n.code]]()});window.addEventListener("keyup",n=>Ee.delete(n.code));window.addEventListener("blur",()=>{Ee.clear(),Ji.set(0,0)});const gs=Q("#joystick"),hf=Q("#joystick-knob");let to=null;function df(n){const t=gs.getBoundingClientRect(),e=t.width*.35,i=n.clientX-(t.left+t.width/2),r=n.clientY-(t.top+t.height/2),s=ge.clamp(i/e,-1,1),o=ge.clamp(r/e,-1,1);Ji.set(Math.abs(s)<.1?0:s,Math.abs(o)<.1?0:o),hf.style.transform=`translate(${Ji.x*e}px, ${Ji.y*e}px)`}gs.addEventListener("pointerdown",n=>{n.pointerType==="mouse"||to!==null||(n.stopPropagation(),to=n.pointerId,Ms(),gs.setPointerCapture(n.pointerId),df(n))});gs.addEventListener("pointermove",n=>{n.pointerId===to&&df(n)});const ff=n=>{n.pointerId===to&&(to=null,Ji.set(0,0),hf.style.transform="translate(0, 0)")};gs.addEventListener("pointerup",ff);gs.addEventListener("pointercancel",ff);document.querySelectorAll("[data-drive-key]").forEach(n=>{const t=n.dataset.driveKey;n.addEventListener("pointerdown",i=>{i.preventDefault(),i.stopPropagation(),Ms(),n.setPointerCapture(i.pointerId),Ee.add(t),n.classList.add("held")});const e=()=>{Ee.delete(t),n.classList.remove("held")};n.addEventListener("pointerup",e),n.addEventListener("pointercancel",e),n.addEventListener("lostpointercapture",e)});document.querySelectorAll("[data-key]").forEach(n=>{n.onpointerdown=t=>{n.setPointerCapture(t.pointerId),Ee.add(n.dataset.key)},n.onpointerup=n.onpointercancel=()=>Ee.delete(n.dataset.key)});function Ra(){const n=Math.max(1,Q("#world").clientWidth),t=Math.max(1,Q("#world").clientHeight);Ln.setSize(n,t,!1);const e=n/t;Ne.left=-12*e,Ne.right=12*e,Ne.top=12,Ne.bottom=-12,_n.minZoom=Math.max(.55,e/4),Ne.zoom=Math.max(Ne.zoom,_n.minZoom),Ne.updateProjectionMatrix()}window.addEventListener("resize",Ra);window.visualViewport?.addEventListener("resize",Ra);new ResizeObserver(Ra).observe(Q("#world"));Js();LM();Zd.copy(Lt.position);js();Dn();Ra();jr();Q("#daily-button").classList.toggle("ready",B.daily.lastClaim!==new Date().toISOString().slice(0,10));kt===0&&B.jobs===0&&ui(Jn[0][0],Jn[0][1],"Got it",Jn[0][2]);no();ir()&&!We&&(Gs=.8);_n.target.copy(ot.position);Ne.position.add(ot.position);_n.update();let zh=!1,kh=performance.now(),El=0;function pf(n){const t=Math.min((n-kh)/1e3,.1);kh=n,Qe+=t,Ue&&!We&&Q("#tutorial-card").hidden&&!Q("#dialog").open&&(wr+=t),Gs>0?(Gs-=t,Gs<=0&&fa()):ir()&&!We&&Q("#tutorial-card").hidden&&!Q("#dialog").open&&fa(),yM(t),Zi=ge.damp(Zi,Ui,3,t),gc=ge.damp(gc,ca,8,t),Qd();const e=bM(t);if(!Ec()){const d=ii(ot.position);Zi>.94&&d.x>1.4&&d.x<4.6&&d.z>we&&d.z<=we+2.25||(Ko=!1)}document.body.classList.toggle("seated",te),wM(t);const i=te?Mc:yc,r=te?nu():ot.position;for((!i.length||Qe-i[i.length-1].t>=.35)&&i.push({t:Qe,x:r.x,z:r.z});i.length&&Qe-i[0].t>10;)i.shift();const s=i.length>1&&Qe-i[0].t>=9.5&&i.every(d=>Math.hypot(d.x-i[0].x,d.z-i[0].z)<(te?4:1.5));for(;qi.length&&Qe-qi[0]>10;)qi.shift();const o=te&&qi.length>=3,a=!Q("#tutorial-card").hidden||Q("#dialog").open||!Q("#tests").hidden||!Q("#company-panel").hidden;for(a&&(i.length=0,qi.length=0),Q("#stuck-button").hidden=!!ve||a||!(s||o),Q("#stuck-button").textContent=te?"Truck stuck?":"Got stuck?",te?yc.length=0:(Mc.length=0,qi.length=0),ve||_r.animate(Qe,e,!!Gt||!!Ve,Zo),vM(t),Gt&&(Gt.mesh.rotation.y=ge.damp(Gt.mesh.rotation.y,Gt.item.rotated?Math.PI/2:0,12,t)),El+=t;El>=1/60;)TM(1/60),El-=1/60;if(AM(t),pM(t),RM(t),ji.visible){const d=iu(ji.position),h=d?6808973:16768099;Kd.color.setHex(h)}const c=te?ni(new A(3,.6,(we-2)/2)):ot.position.clone().add(new A(0,.6,0)),l=c.clone().sub(_n.target);if(_n.target.copy(c),Ne.position.add(l),Oi.position.copy(c).add(new A(-25,45,20)),Oi.target.position.copy(c),_n.update(),Fn.visible=!!Gt&&cs(),Fn.visible){const d=ru();Fn.scale.set(d.w*Ft,1,d.d*Ft),Fn.position.copy(ni(new A(1.4+(d.x+d.w/2)*Ft,.82,.2+(d.z+d.d/2)*Ft))),Fn.rotation.y=Lt.rotation.y,Fn.material.color.set(d.valid?2386770:13974845),Fn.material.opacity=d.valid?.62:.82,eu.material.color.set(d.valid?1195825:7282464)}const u=Gt&&!cs()?tf(Gt):null;if(Kn.visible=!!u&&ot.position.distanceTo(u.target)<18,u&&Gt&&(Kn.position.x=u.target.x,Kn.position.z=u.target.z,Kn.scale.set(Gt.item.w*Ft,Gt.item.d*Ft,1),Kn.material.color.setHex(u.close?4828784:15321180)),Di.visible=!!Gt&&!cs()&&ef(ot.position)&&!u?.close,Di.visible&&Gt){const d=ot.position.clone().add(new A(0,0,1.1).applyQuaternion(ot.quaternion));Di.position.set(d.x,.105,d.z),Di.scale.set(Gt.item.w*Ft,Gt.item.d*Ft,1)}ua-=t,ua<=0&&Q("#status-bar").classList.remove("show-notice"),xl+=t,vl+=t,xl>.18&&(jr(),xl=0),vl>5&&(Ae(),vl=0),Ln.render(Pe,Ne),zh||(zh=!0,document.getElementById("loading-screen")?.remove(),Ms()),!Q("#dialog").open&&Q("#tests").hidden&&Q("#company-panel").hidden&&(Q("#tutorial-card").hidden||kt>0),requestAnimationFrame(pf)}requestAnimationFrame(pf);window.addEventListener("pagehide",Ae);
