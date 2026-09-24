import{g as Qi,o as Df,i as Zh,a as Lf}from"./index-DkZpsVDN.js";const Lc="186",as={ROTATE:0,DOLLY:1,PAN:2},es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},If=0,Tu=1,Nf=2,Zo=1,Jh=2,Bs=3,Mr=0,En=1,an=2,Ui=0,Gs=1,Au=2,Ru=3,Cu=4,Uf=5,Qr=100,Ff=101,Of=102,Bf=103,zf=104,kf=200,Gf=201,Hf=202,Vf=203,Qh=204,jh=205,Wf=206,Xf=207,$f=208,Yf=209,qf=210,Kf=211,Zf=212,Jf=213,Qf=214,Nl=0,Ul=1,Fl=2,Zs=3,Ol=4,Bl=5,zl=6,kl=7,td=0,jf=1,tp=2,_i=0,ed=1,nd=2,id=3,Ic=4,rd=5,sd=6,od=7,ad=300,Sr=301,ps=302,Ha=303,Va=304,Aa=306,Gl=1e3,Ii=1001,Hl=1002,en=1003,ep=1004,_o=1005,cn=1006,Wa=1007,fr=1008,Cn=1009,ld=1010,cd=1011,Js=1012,Nc=1013,xi=1014,pi=1015,Mi=1016,Uc=1017,Fc=1018,Qs=1020,ud=35902,hd=35899,dd=1021,fd=1022,Qn=1023,zi=1026,pr=1027,pd=1028,Oc=1029,yr=1030,Bc=1031,zc=1033,Jo=33776,Qo=33777,jo=33778,ta=33779,Vl=35840,Wl=35841,Xl=35842,$l=35843,Yl=36196,ql=37492,Kl=37496,Zl=37488,Jl=37489,sa=37490,Ql=37491,jl=37808,tc=37809,ec=37810,nc=37811,ic=37812,rc=37813,sc=37814,oc=37815,ac=37816,lc=37817,cc=37818,uc=37819,hc=37820,dc=37821,fc=36492,pc=36494,mc=36495,gc=36283,_c=36284,oa=36285,vc=36286,np=3200,xc=0,ip=1,Ji="",Sn="srgb",aa="srgb-linear",la="linear",de="srgb",Xa=7680,rp=519,sp=512,op=513,ap=514,kc=515,lp=516,cp=517,Gc=518,up=519,md=35044,Pu="300 es",mi=2e3,js=2001;function hp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ca(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dp(){const n=ca("canvas");return n.style.display="block",n}const Du={};function ua(...n){const t="THREE."+n.shift();console.log(t,...n)}function gd(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Nt(...n){n=gd(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function se(...n){n=gd(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function ls(...n){const t=n.join(" ");t in Du||(Du[t]=!0,Nt(...n))}function fp(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const pp={[Nl]:Ul,[Fl]:zl,[Ol]:kl,[Zs]:Bl,[Ul]:Nl,[zl]:Fl,[kl]:Ol,[Bl]:Zs};class er{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lu=1234567;const cs=Math.PI/180,to=180/Math.PI;function Fi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function $t(n,t,e){return Math.max(t,Math.min(e,n))}function Hc(n,t){return(n%t+t)%t}function mp(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function gp(n,t,e){return n!==t?(e-n)/(t-n):0}function Hs(n,t,e){return(1-e)*n+e*t}function _p(n,t,e,i){return Hs(n,t,1-Math.exp(-e*i))}function vp(n,t=1){return t-Math.abs(Hc(n,t*2)-t)}function xp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Mp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Sp(n,t){return n+Math.floor(Math.random()*(t-n+1))}function yp(n,t){return n+Math.random()*(t-n)}function bp(n){return n*(.5-Math.random())}function Ep(n){n!==void 0&&(Lu=n);let t=Lu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wp(n){return n*cs}function Tp(n){return n*to}function Ap(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Rp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Cp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Pp(n,t,e,i,r){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+i)/2),u=o((t+i)/2),d=s((t-i)/2),h=o((t-i)/2),f=s((i-t)/2),_=o((i-t)/2);switch(r){case"XYX":n.set(a*u,c*d,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*_,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*_,a*l);break;case"ZYZ":n.set(c*_,c*f,a*u,a*l);break;default:Nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function qn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function fe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ue={DEG2RAD:cs,RAD2DEG:to,generateUUID:Fi,clamp:$t,euclideanModulo:Hc,mapLinear:mp,inverseLerp:gp,lerp:Hs,damp:_p,pingpong:vp,smoothstep:xp,smootherstep:Mp,randInt:Sp,randFloat:yp,randFloatSpread:bp,seededRandom:Ep,degToRad:wp,radToDeg:Tp,isPowerOfTwo:Ap,ceilPowerOfTwo:Rp,floorPowerOfTwo:Cp,setQuaternionFromProperEuler:Pp,normalize:fe,denormalize:qn},hu=class hu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hu.prototype.isVector2=!0;let gt=hu;class Si{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],h=s[o+0],f=s[o+1],_=s[o+2],y=s[o+3];if(d!==y||c!==h||l!==f||u!==_){let m=c*h+l*f+u*_+d*y;m<0&&(h=-h,f=-f,_=-_,y=-y,m=-m);let p=1-a;if(m<.9995){const b=Math.acos(m),T=Math.sin(b);p=Math.sin(p*b)/T,a=Math.sin(a*b)/T,c=c*p+h*a,l=l*p+f*a,u=u*p+_*a,d=d*p+y*a}else{c=c*p+h*a,l=l*p+f*a,u=u*p+_*a,d=d*p+y*a;const b=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=b,l*=b,u*=b,d*=b}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],h=s[o+1],f=s[o+2],_=s[o+3];return t[e]=a*_+u*d+c*f-l*h,t[e+1]=c*_+u*h+l*d-a*f,t[e+2]=l*_+u*f+a*h-c*d,t[e+3]=u*_-a*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),h=c(i/2),f=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*f*_,this._y=l*f*d-h*u*_,this._z=l*u*_+h*f*d,this._w=l*u*d-h*f*_;break;case"YXZ":this._x=h*u*d+l*f*_,this._y=l*f*d-h*u*_,this._z=l*u*_-h*f*d,this._w=l*u*d+h*f*_;break;case"ZXY":this._x=h*u*d-l*f*_,this._y=l*f*d+h*u*_,this._z=l*u*_+h*f*d,this._w=l*u*d-h*f*_;break;case"ZYX":this._x=h*u*d-l*f*_,this._y=l*f*d+h*u*_,this._z=l*u*_-h*f*d,this._w=l*u*d+h*f*_;break;case"YZX":this._x=h*u*d+l*f*_,this._y=l*f*d+h*u*_,this._z=l*u*_-h*f*d,this._w=l*u*d-h*f*_;break;case"XZY":this._x=h*u*d-l*f*_,this._y=l*f*d-h*u*_,this._z=l*u*_+h*f*d,this._w=l*u*d+h*f*_;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=i+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+i*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const du=class du{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Iu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Iu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),u=2*(a*e-s*r),d=2*(s*i-o*e);return this.x=e+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return $a.copy(this).projectOnVector(t),this.sub($a)}reflect(t){return this.sub($a.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};du.prototype.isVector3=!0;let A=du;const $a=new A,Iu=new Si,fu=class fu{constructor(t,e,i,r,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l)}set(t,e,i,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],f=i[5],_=i[8],y=r[0],m=r[3],p=r[6],b=r[1],T=r[4],M=r[7],g=r[2],x=r[5],R=r[8];return s[0]=o*y+a*b+c*g,s[3]=o*m+a*T+c*x,s[6]=o*p+a*M+c*R,s[1]=l*y+u*b+d*g,s[4]=l*m+u*T+d*x,s[7]=l*p+u*M+d*R,s[2]=h*y+f*b+_*g,s[5]=h*m+f*T+_*x,s[8]=h*p+f*M+_*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,h=a*c-u*s,f=l*s-o*c,_=e*d+i*h+r*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return t[0]=d*y,t[1]=(r*l-u*i)*y,t[2]=(a*i-r*o)*y,t[3]=h*y,t[4]=(u*e-r*c)*y,t[5]=(r*s-a*e)*y,t[6]=f*y,t[7]=(i*c-l*e)*y,t[8]=(o*e-i*s)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ya.makeScale(t,e)),this}rotate(t){return ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ya.makeRotation(-t)),this}translate(t,e){return ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ya.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};fu.prototype.isMatrix3=!0;let Bt=fu;const Ya=new Bt,Nu=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uu=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dp(){const n={enabled:!0,workingColorSpace:aa,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===de&&(r.r=Oi(r.r),r.g=Oi(r.g),r.b=Oi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===de&&(r.r=us(r.r),r.g=us(r.g),r.b=us(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ji?la:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[aa]:{primaries:t,whitePoint:i,transfer:la,toXYZ:Nu,fromXYZ:Uu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:t,whitePoint:i,transfer:de,toXYZ:Nu,fromXYZ:Uu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),n}const te=Dp();function Oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function us(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ir;class Lp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ir===void 0&&(Ir=ca("canvas")),Ir.width=t.width,Ir.height=t.height;const r=Ir.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Ir}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ca("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Oi(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Oi(e[i]/255)*255):e[i]=Oi(e[i]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ip=0;class Vc{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Fi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(qa(r[o].image)):s.push(qa(r[o]))}else s=qa(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function qa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Lp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}let Np=0;const Ka=new A;class un extends er{constructor(t=un.DEFAULT_IMAGE,e=un.DEFAULT_MAPPING,i=Ii,r=Ii,s=cn,o=fr,a=Qn,c=Cn,l=un.DEFAULT_ANISOTROPY,u=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Fi(),this.name="",this.source=new Vc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ka).x}get height(){return this.source.getSize(Ka).y}get depth(){return this.source.getSize(Ka).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ad)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gl:t.x=t.x-Math.floor(t.x);break;case Ii:t.x=t.x<0?0:1;break;case Hl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gl:t.y=t.y-Math.floor(t.y);break;case Ii:t.y=t.y<0?0:1;break;case Hl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=ad;un.DEFAULT_ANISOTROPY=1;const pu=class pu{constructor(t=0,e=0,i=0,r=1){this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],_=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(_+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(l+1)/2,M=(f+1)/2,g=(p+1)/2,x=(u+h)/4,R=(d+y)/4,v=(_+m)/4;return T>M&&T>g?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=x/i,s=R/i):M>g?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=x/r,s=v/r):g<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(g),i=R/s,r=v/s),this.set(i,r,s,e),this}let b=Math.sqrt((m-_)*(m-_)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(d-y)/b,this.z=(h-u)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pu.prototype.isVector4=!0;let Ue=pu;class Up extends er{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:i.depth},s=new un(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Vc(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends Up{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class _d extends un{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fp extends un{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Ta=class Ta{constructor(t,e,i,r,s,o,a,c,l,u,d,h,f,_,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l,u,d,h,f,_,y,m)}set(t,e,i,r,s,o,a,c,l,u,d,h,f,_,y,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=_,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ta().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,r=1/Nr.setFromMatrixColumn(t,0).length(),s=1/Nr.setFromMatrixColumn(t,1).length(),o=1/Nr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=o*u,f=o*d,_=a*u,y=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+_*l,e[5]=h-y*l,e[9]=-a*c,e[2]=y-h*l,e[6]=_+f*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,f=c*d,_=l*u,y=l*d;e[0]=h+y*a,e[4]=_*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-_,e[6]=y+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,f=c*d,_=l*u,y=l*d;e[0]=h-y*a,e[4]=-o*d,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*u,e[9]=y-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,f=o*d,_=a*u,y=a*d;e[0]=c*u,e[4]=_*l-f,e[8]=h*l+y,e[1]=c*d,e[5]=y*l+h,e[9]=f*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,f=o*l,_=a*c,y=a*l;e[0]=c*u,e[4]=y-h*d,e[8]=_*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*d+_,e[10]=h-y*d}else if(t.order==="XZY"){const h=o*c,f=o*l,_=a*c,y=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+y,e[5]=o*u,e[9]=f*d-_,e[2]=_*d-f,e[6]=a*u,e[10]=y*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Op,t,Bp)}lookAt(t,e,i){const r=this.elements;return An.subVectors(t,e),An.lengthSq()===0&&(An.z=1),An.normalize(),Xi.crossVectors(i,An),Xi.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Xi.crossVectors(i,An)),Xi.normalize(),vo.crossVectors(An,Xi),r[0]=Xi.x,r[4]=vo.x,r[8]=An.x,r[1]=Xi.y,r[5]=vo.y,r[9]=An.y,r[2]=Xi.z,r[6]=vo.z,r[10]=An.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],f=i[13],_=i[2],y=i[6],m=i[10],p=i[14],b=i[3],T=i[7],M=i[11],g=i[15],x=r[0],R=r[4],v=r[8],w=r[12],P=r[1],L=r[5],F=r[9],B=r[13],I=r[2],k=r[6],$=r[10],K=r[14],nt=r[3],Y=r[7],j=r[11],rt=r[15];return s[0]=o*x+a*P+c*I+l*nt,s[4]=o*R+a*L+c*k+l*Y,s[8]=o*v+a*F+c*$+l*j,s[12]=o*w+a*B+c*K+l*rt,s[1]=u*x+d*P+h*I+f*nt,s[5]=u*R+d*L+h*k+f*Y,s[9]=u*v+d*F+h*$+f*j,s[13]=u*w+d*B+h*K+f*rt,s[2]=_*x+y*P+m*I+p*nt,s[6]=_*R+y*L+m*k+p*Y,s[10]=_*v+y*F+m*$+p*j,s[14]=_*w+y*B+m*K+p*rt,s[3]=b*x+T*P+M*I+g*nt,s[7]=b*R+T*L+M*k+g*Y,s[11]=b*v+T*F+M*$+g*j,s[15]=b*w+T*B+M*K+g*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],_=t[3],y=t[7],m=t[11],p=t[15],b=c*f-l*h,T=a*f-l*d,M=a*h-c*d,g=o*f-l*u,x=o*h-c*u,R=o*d-a*u;return e*(y*b-m*T+p*M)-i*(_*b-m*g+p*x)+r*(_*T-y*g+p*R)-s*(_*M-y*x+m*R)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-i*(s*u-a*c)+r*(s*l-o*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],_=t[12],y=t[13],m=t[14],p=t[15],b=e*a-i*o,T=e*c-r*o,M=e*l-s*o,g=i*c-r*a,x=i*l-s*a,R=r*l-s*c,v=u*y-d*_,w=u*m-h*_,P=u*p-f*_,L=d*m-h*y,F=d*p-f*y,B=h*p-f*m,I=b*B-T*F+M*L+g*P-x*w+R*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/I;return t[0]=(a*B-c*F+l*L)*k,t[1]=(r*F-i*B-s*L)*k,t[2]=(y*R-m*x+p*g)*k,t[3]=(h*x-d*R-f*g)*k,t[4]=(c*P-o*B-l*w)*k,t[5]=(e*B-r*P+s*w)*k,t[6]=(m*M-_*R-p*T)*k,t[7]=(u*R-h*M+f*T)*k,t[8]=(o*F-a*P+l*v)*k,t[9]=(i*P-e*F-s*v)*k,t[10]=(_*x-y*M+p*b)*k,t[11]=(d*M-u*x-f*b)*k,t[12]=(a*w-o*L-c*v)*k,t[13]=(e*L-i*w+r*v)*k,t[14]=(y*T-_*g-m*b)*k,t[15]=(u*g-d*T+h*b)*k,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,d=a+a,h=s*l,f=s*u,_=s*d,y=o*u,m=o*d,p=a*d,b=c*l,T=c*u,M=c*d,g=i.x,x=i.y,R=i.z;return r[0]=(1-(y+p))*g,r[1]=(f+M)*g,r[2]=(_-T)*g,r[3]=0,r[4]=(f-M)*x,r[5]=(1-(h+p))*x,r[6]=(m+b)*x,r[7]=0,r[8]=(_+T)*R,r[9]=(m-b)*R,r[10]=(1-(h+y))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let o=Nr.set(r[0],r[1],r[2]).length();const a=Nr.set(r[4],r[5],r[6]).length(),c=Nr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Gn.copy(this);const l=1/o,u=1/a,d=1/c;return Gn.elements[0]*=l,Gn.elements[1]*=l,Gn.elements[2]*=l,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,e.setFromRotationMatrix(Gn),i.x=o,i.y=a,i.z=c,this}makePerspective(t,e,i,r,s,o,a=mi,c=!1){const l=this.elements,u=2*s/(e-t),d=2*s/(i-r),h=(e+t)/(e-t),f=(i+r)/(i-r);let _,y;if(c)_=s/(o-s),y=o*s/(o-s);else if(a===mi)_=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===js)_=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=mi,c=!1){const l=this.elements,u=2/(e-t),d=2/(i-r),h=-(e+t)/(e-t),f=-(i+r)/(i-r);let _,y;if(c)_=1/(o-s),y=o/(o-s);else if(a===mi)_=-2/(o-s),y=-(o+s)/(o-s);else if(a===js)_=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Ta.prototype.isMatrix4=!0;let Ae=Ta;const Nr=new A,Gn=new Ae,Op=new A(0,0,0),Bp=new A(1,1,1),Xi=new A,vo=new A,An=new A,Fu=new Ae,Ou=new Si;class yi{constructor(t=0,e=0,i=0,r=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin($t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Fu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ou.setFromEuler(this),this.setFromQuaternion(Ou,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class vd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zp=0;const Bu=new A,Ur=new Si,Ti=new Ae,xo=new A,Ts=new A,kp=new A,Gp=new Si,zu=new A(1,0,0),ku=new A(0,1,0),Gu=new A(0,0,1),Hu={type:"added"},Hp={type:"removed"},Fr={type:"childadded",child:null},Za={type:"childremoved",child:null};class Ye extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DEFAULT_UP.clone();const t=new A,e=new yi,i=new Si,r=new A(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Bt}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=Ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ur.setFromAxisAngle(t,e),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(t,e){return Ur.setFromAxisAngle(t,e),this.quaternion.premultiply(Ur),this}rotateX(t){return this.rotateOnAxis(zu,t)}rotateY(t){return this.rotateOnAxis(ku,t)}rotateZ(t){return this.rotateOnAxis(Gu,t)}translateOnAxis(t,e){return Bu.copy(t).applyQuaternion(this.quaternion),this.position.add(Bu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zu,t)}translateY(t){return this.translateOnAxis(ku,t)}translateZ(t){return this.translateOnAxis(Gu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?xo.copy(t):xo.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Ts,xo,this.up):Ti.lookAt(xo,Ts,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),Ur.setFromRotationMatrix(Ti),this.quaternion.premultiply(Ur.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hu),Fr.child=t,this.dispatchEvent(Fr),Fr.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hp),Za.child=t,this.dispatchEvent(Za),Za.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hu),Fr.child=t,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,t,kp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,Gp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*r,s[13]+=i-s[1]*e-s[5]*i-s[9]*r,s[14]+=r-s[2]*e-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ye.DEFAULT_UP=new A(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class me extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vp={type:"move"};class Ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const y of t.hand.values()){const m=e.getJointPose(y,i),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,_=.005;l.inputState.pinching&&h>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vp)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new me;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function Qa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=te.workingColorSpace){if(t=Hc(t,1),e=$t(e,0,1),i=$t(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Qa(o,s,t+1/3),this.g=Qa(o,s,t),this.b=Qa(o,s,t-1/3)}return te.colorSpaceToWorking(this,r),this}setStyle(t,e=Sn){function i(s){s!==void 0&&parseFloat(s)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Sn){const i=xd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Sn){return te.workingToColorSpace(on.copy(this),t),Math.round($t(on.r*255,0,255))*65536+Math.round($t(on.g*255,0,255))*256+Math.round($t(on.b*255,0,255))}getHexString(t=Sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(on.copy(this),e);const i=on.r,r=on.g,s=on.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=Sn){te.workingToColorSpace(on.copy(this),t);const e=on.r,i=on.g,r=on.b;return t!==Sn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL($i),this.setHSL($i.h+t,$i.s+e,$i.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL($i),t.getHSL(Mo);const i=Hs($i.h,Mo.h,e),r=Hs($i.s,Mo.s,e),s=Hs($i.l,Mo.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new qt;qt.NAMES=xd;class Wc{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=i}clone(){return new Wc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Wp extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Hn=new A,Ai=new A,ja=new A,Ri=new A,Or=new A,Br=new A,Vu=new A,tl=new A,el=new A,nl=new A,il=new Ue,rl=new Ue,sl=new Ue;class Pn{constructor(t=new A,e=new A,i=new A){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Hn.subVectors(t,e),r.cross(Hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Hn.subVectors(r,e),Ai.subVectors(i,e),ja.subVectors(t,e);const o=Hn.dot(Hn),a=Hn.dot(Ai),c=Hn.dot(ja),l=Ai.dot(Ai),u=Ai.dot(ja),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(l*c-a*u)*h,_=(o*u-a*c)*h;return s.set(1-f-_,_,f)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,Ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ri.x),c.addScaledVector(o,Ri.y),c.addScaledVector(a,Ri.z),c)}static getInterpolatedAttribute(t,e,i,r,s,o){return il.setScalar(0),rl.setScalar(0),sl.setScalar(0),il.fromBufferAttribute(t,e),rl.fromBufferAttribute(t,i),sl.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(il,s.x),o.addScaledVector(rl,s.y),o.addScaledVector(sl,s.z),o}static isFrontFacing(t,e,i,r){return Hn.subVectors(i,e),Ai.subVectors(t,e),Hn.cross(Ai).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Hn.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Pn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Or.subVectors(r,i),Br.subVectors(s,i),tl.subVectors(t,i);const c=Or.dot(tl),l=Br.dot(tl);if(c<=0&&l<=0)return e.copy(i);el.subVectors(t,r);const u=Or.dot(el),d=Br.dot(el);if(u>=0&&d<=u)return e.copy(r);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(Or,o);nl.subVectors(t,s);const f=Or.dot(nl),_=Br.dot(nl);if(_>=0&&f<=_)return e.copy(s);const y=f*l-c*_;if(y<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(i).addScaledVector(Br,a);const m=u*_-f*d;if(m<=0&&d-u>=0&&f-_>=0)return Vu.subVectors(s,r),a=(d-u)/(d-u+(f-_)),e.copy(r).addScaledVector(Vu,a);const p=1/(m+y+h);return o=y*p,a=h*p,e.copy(i).addScaledVector(Or,o).addScaledVector(Br,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Rr{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Vn):Vn.fromBufferAttribute(s,o),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),So.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),So.copy(i.boundingBox)),So.applyMatrix4(t.matrixWorld),this.union(So)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(As),yo.subVectors(this.max,As),zr.subVectors(t.a,As),kr.subVectors(t.b,As),Gr.subVectors(t.c,As),Yi.subVectors(kr,zr),qi.subVectors(Gr,kr),or.subVectors(zr,Gr);let e=[0,-Yi.z,Yi.y,0,-qi.z,qi.y,0,-or.z,or.y,Yi.z,0,-Yi.x,qi.z,0,-qi.x,or.z,0,-or.x,-Yi.y,Yi.x,0,-qi.y,qi.x,0,-or.y,or.x,0];return!ol(e,zr,kr,Gr,yo)||(e=[1,0,0,0,1,0,0,0,1],!ol(e,zr,kr,Gr,yo))?!1:(bo.crossVectors(Yi,qi),e=[bo.x,bo.y,bo.z],ol(e,zr,kr,Gr,yo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ci=[new A,new A,new A,new A,new A,new A,new A,new A],Vn=new A,So=new Rr,zr=new A,kr=new A,Gr=new A,Yi=new A,qi=new A,or=new A,As=new A,yo=new A,bo=new A,ar=new A;function ol(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ar.fromArray(n,s);const a=r.x*Math.abs(ar.x)+r.y*Math.abs(ar.y)+r.z*Math.abs(ar.z),c=t.dot(ar),l=e.dot(ar),u=i.dot(ar);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const He=new A,Eo=new gt;let Xp=0;class ti extends er{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=md,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Eo.fromBufferAttribute(this,e),Eo.applyMatrix3(t),this.setXY(e,Eo.x,Eo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=qn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),r=fe(r,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Md extends ti{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Sd extends ti{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ie extends ti{constructor(t,e,i){super(new Float32Array(t),e,i)}}const $p=new Rr,Rs=new A,al=new A;class Ra{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):$p.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rs.subVectors(t,this.center);const e=Rs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Rs,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(al.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rs.copy(t.center).add(al)),this.expandByPoint(Rs.copy(t.center).sub(al))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Yp=0;const Nn=new Ae,ll=new Ye,Hr=new A,Rn=new Rr,Cs=new Rr,Je=new A;class Fe extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hp(t)?Sd:Md)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Bt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Nn.makeRotationFromQuaternion(t),this.applyMatrix4(Nn),this}rotateX(t){return Nn.makeRotationX(t),this.applyMatrix4(Nn),this}rotateY(t){return Nn.makeRotationY(t),this.applyMatrix4(Nn),this}rotateZ(t){return Nn.makeRotationZ(t),this.applyMatrix4(Nn),this}translate(t,e,i){return Nn.makeTranslation(t,e,i),this.applyMatrix4(Nn),this}scale(t,e,i){return Nn.makeScale(t,e,i),this.applyMatrix4(Nn),this}lookAt(t){return ll.lookAt(t),ll.updateMatrix(),this.applyMatrix4(ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ra);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Cs.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(Rn.min,Cs.min),Rn.expandByPoint(Je),Je.addVectors(Rn.max,Cs.max),Rn.expandByPoint(Je)):(Rn.expandByPoint(Cs.min),Rn.expandByPoint(Cs.max))}Rn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Je.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Je));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Je.fromBufferAttribute(a,l),c&&(Hr.fromBufferAttribute(t,l),Je.add(Hr)),r=Math.max(r,i.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new ti(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let v=0;v<i.count;v++)a[v]=new A,c[v]=new A;const l=new A,u=new A,d=new A,h=new gt,f=new gt,_=new gt,y=new A,m=new A;function p(v,w,P){l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,P),h.fromBufferAttribute(s,v),f.fromBufferAttribute(s,w),_.fromBufferAttribute(s,P),u.sub(l),d.sub(l),f.sub(h),_.sub(h);const L=1/(f.x*_.y-_.x*f.y);isFinite(L)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(L),a[v].add(y),a[w].add(y),a[P].add(y),c[v].add(m),c[w].add(m),c[P].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let v=0,w=b.length;v<w;++v){const P=b[v],L=P.start,F=P.count;for(let B=L,I=L+F;B<I;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const T=new A,M=new A,g=new A,x=new A;function R(v){g.fromBufferAttribute(r,v),x.copy(g);const w=a[v];T.copy(w),T.sub(g.multiplyScalar(g.dot(w))).normalize(),M.crossVectors(x,w);const L=M.dot(c[v])<0?-1:1;o.setXYZW(v,T.x,T.y,T.z,L)}for(let v=0,w=b.length;v<w;++v){const P=b[v],L=P.start,F=P.count;for(let B=L,I=L+F;B<I;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new ti(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const r=new A,s=new A,o=new A,a=new A,c=new A,l=new A,u=new A,d=new A;if(t)for(let h=0,f=t.count;h<f;h+=3){const _=t.getX(h+0),y=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let f=0,_=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?f=c[y]*a.data.stride+a.offset:f=c[y]*u;for(let p=0;p<u;p++)h[_++]=l[f++]}return new ti(h,u,d)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fe,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=t(h,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],d=s[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=md,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const fn=new A;class ha{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix4(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)fn.fromBufferAttribute(this,e),fn.applyNormalMatrix(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)fn.fromBufferAttribute(this,e),fn.transformDirection(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=qn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=qn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=qn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=qn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=qn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),r=fe(r,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){ua("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new ti(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ha(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ua("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const cl=new A,Kp=new A,Zp=new Bt;class Di{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=cl.subVectors(i,e).cross(Kp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const r=t.delta(cl),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Zp.getNormalMatrix(t),r=this.coplanarPoint(cl).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Jp=0;class Cr extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=Gs,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qh,this.blendDst=jh,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xa,this.stencilZFail=Xa,this.stencilZPass=Xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Di().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new gt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new gt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Qp extends Cr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Vr;const Ps=new A,Wr=new A,Xr=new A,$r=new gt,Ds=new gt,yd=new Ae,wo=new A,Ls=new A,To=new A,Wu=new gt,ul=new gt,Xu=new gt;class jp extends Ye{constructor(t=new Qp){if(super(),this.isSprite=!0,this.type="Sprite",Vr===void 0){Vr=new Fe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new qp(e,5);Vr.setIndex([0,1,2,0,2,3]),Vr.setAttribute("position",new ha(i,3,0,!1)),Vr.setAttribute("uv",new ha(i,2,3,!1))}this.geometry=Vr,this.material=t,this.center=new gt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&se('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wr.setFromMatrixScale(this.matrixWorld),yd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Xr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wr.multiplyScalar(-Xr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Ao(wo.set(-.5,-.5,0),Xr,o,Wr,r,s),Ao(Ls.set(.5,-.5,0),Xr,o,Wr,r,s),Ao(To.set(.5,.5,0),Xr,o,Wr,r,s),Wu.set(0,0),ul.set(1,0),Xu.set(1,1);let a=t.ray.intersectTriangle(wo,Ls,To,!1,Ps);if(a===null&&(Ao(Ls.set(-.5,.5,0),Xr,o,Wr,r,s),ul.set(0,1),a=t.ray.intersectTriangle(wo,To,Ls,!1,Ps),a===null))return;const c=t.ray.origin.distanceTo(Ps);c<t.near||c>t.far||e.push({distance:c,point:Ps.clone(),uv:Pn.getInterpolation(Ps,wo,Ls,To,Wu,ul,Xu,new gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ao(n,t,e,i,r,s){$r.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(Ds.x=s*$r.x-r*$r.y,Ds.y=r*$r.x+s*$r.y):Ds.copy($r),n.copy(t),n.x+=Ds.x,n.y+=Ds.y,n.applyMatrix4(yd)}const Pi=new A,hl=new A,Ro=new A,Co=new A;class Xc{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pi.copy(this.origin).addScaledVector(this.direction,e),Pi.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){hl.copy(t).add(e).multiplyScalar(.5),Ro.copy(e).sub(t).normalize(),Co.copy(this.origin).sub(hl);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ro),a=Co.dot(this.direction),c=-Co.dot(Ro),l=Co.lengthSq(),u=Math.abs(1-o*o);let d,h,f,_;if(u>0)if(d=o*c-a,h=o*a-c,_=s*u,d>=0)if(h>=-_)if(h<=_){const y=1/u;d*=y,h*=y,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-_?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l):h<=_?(d=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(hl).addScaledVector(Ro,h),f}intersectSphere(t,e){if(t.radius<0)return null;Pi.subVectors(t.center,this.origin);const i=Pi.dot(this.direction),r=Pi.dot(Pi)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,r=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,r=(t.min.x-h.x)*l),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Pi)!==null}intersectTriangle(t,e,i,r,s){const o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,d=t.x-o.x,h=t.y-o.y,f=t.z-o.z,_=e.x-o.x,y=e.y-o.y,m=e.z-o.z,p=i.x-o.x,b=i.y-o.y,T=i.z-o.z,M=Math.abs(c),g=Math.abs(l),x=Math.abs(u);let R,v,w,P,L,F,B,I,k,$,K,nt;if(M>=g&&M>=x?(w=c,F=d,k=_,nt=p,c>=0?(R=l,v=u,P=h,L=f,B=y,I=m,$=b,K=T):(R=u,v=l,P=f,L=h,B=m,I=y,$=T,K=b)):g>=x?(w=l,F=h,k=y,nt=b,l>=0?(R=u,v=c,P=f,L=d,B=m,I=_,$=T,K=p):(R=c,v=u,P=d,L=f,B=_,I=m,$=p,K=T)):(w=u,F=f,k=m,nt=T,u>=0?(R=c,v=l,P=d,L=h,B=_,I=y,$=p,K=b):(R=l,v=c,P=h,L=d,B=y,I=_,$=b,K=p)),w===0)return null;const Y=R/w,j=v/w,rt=1/w,lt=P-Y*F,bt=L-j*F,Me=B-Y*k,ne=I-j*k,ae=$-Y*nt,Z=K-j*nt,it=ae*ne-Z*Me,Et=lt*Z-bt*ae,Ot=Me*bt-ne*lt;if(r){if(it<0||Et<0||Ot<0)return null}else if((it<0||Et<0||Ot<0)&&(it>0||Et>0||Ot>0))return null;const St=it+Et+Ot;if(St===0)return null;const Yt=rt*(it*F+Et*k+Ot*nt);return(St>0?Yt<0:Yt>0)?null:this.at(Yt/St,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ri extends Cr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=td,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const $u=new Ae,lr=new Xc,Po=new Ra,Yu=new A,Do=new A,Lo=new A,Io=new A,dl=new A,No=new A,qu=new A,Uo=new A;class Ft extends Ye{constructor(t=new Fe,e=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){No.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],d=s[c];u!==0&&(dl.fromBufferAttribute(d,t),o?No.addScaledVector(dl,u):No.addScaledVector(dl.sub(e),u))}e.add(No)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(s),lr.copy(t.ray).recast(t.near),!(Po.containsPoint(lr.origin)===!1&&(lr.intersectSphere(Po,Yu)===null||lr.origin.distanceToSquared(Yu)>(t.far-t.near)**2))&&($u.copy(s).invert(),lr.copy(t.ray).applyMatrix4($u),!(i.boundingBox!==null&&lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,lr)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const m=h[_],p=o[m.materialIndex],b=Math.max(m.start,f.start),T=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=b,g=T;M<g;M+=3){const x=a.getX(M),R=a.getX(M+1),v=a.getX(M+2);r=Fo(this,p,t,i,l,u,d,x,R,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=_,p=y;m<p;m+=3){const b=a.getX(m),T=a.getX(m+1),M=a.getX(m+2);r=Fo(this,o,t,i,l,u,d,b,T,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const m=h[_],p=o[m.materialIndex],b=Math.max(m.start,f.start),T=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=b,g=T;M<g;M+=3){const x=M,R=M+1,v=M+2;r=Fo(this,p,t,i,l,u,d,x,R,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=_,p=y;m<p;m+=3){const b=m,T=m+1,M=m+2;r=Fo(this,o,t,i,l,u,d,b,T,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function tm(n,t,e,i,r,s,o,a){let c;if(t.side===En?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===Mr,a),c===null)return null;Uo.copy(a),Uo.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Uo);return l<e.near||l>e.far?null:{distance:l,point:Uo.clone(),object:n}}function Fo(n,t,e,i,r,s,o,a,c,l){n.getVertexPosition(a,Do),n.getVertexPosition(c,Lo),n.getVertexPosition(l,Io);const u=tm(n,t,e,i,Do,Lo,Io,qu);if(u){const d=new A;Pn.getBarycoord(qu,Do,Lo,Io,d),r&&(u.uv=Pn.getInterpolatedAttribute(r,a,c,l,d,new gt)),s&&(u.uv1=Pn.getInterpolatedAttribute(s,a,c,l,d,new gt)),o&&(u.normal=Pn.getInterpolatedAttribute(o,a,c,l,d,new A),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new A,materialIndex:0};Pn.getNormal(Do,Lo,Io,h.normal),u.face=h,u.barycoord=d}return u}class em extends un{constructor(t=null,e=1,i=1,r,s,o,a,c,l=en,u=en,d,h){super(null,o,a,c,l,u,r,s,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cr=new Ra,nm=new gt(.5,.5),Oo=new A;class $c{constructor(t=new Di,e=new Di,i=new Di,r=new Di,s=new Di,o=new Di){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=mi,i=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],d=s[5],h=s[6],f=s[7],_=s[8],y=s[9],m=s[10],p=s[11],b=s[12],T=s[13],M=s[14],g=s[15];if(r[0].setComponents(l-o,f-u,p-_,g-b).normalize(),r[1].setComponents(l+o,f+u,p+_,g+b).normalize(),r[2].setComponents(l+a,f+d,p+y,g+T).normalize(),r[3].setComponents(l-a,f-d,p-y,g-T).normalize(),i)r[4].setComponents(c,h,m,M).normalize(),r[5].setComponents(l-c,f-h,p-m,g-M).normalize();else if(r[4].setComponents(l-c,f-h,p-m,g-M).normalize(),e===mi)r[5].setComponents(l+c,f+h,p+m,g+M).normalize();else if(e===js)r[5].setComponents(c,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(t){cr.center.set(0,0,0);const e=nm.distanceTo(t.center);return cr.radius=.7071067811865476+e,cr.applyMatrix4(t.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Oo.x=r.normal.x>0?t.max.x:t.min.x,Oo.y=r.normal.y>0?t.max.y:t.min.y,Oo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yc extends Cr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const da=new A,fa=new A,Ku=new Ae,Is=new Xc,Bo=new Ra,fl=new A,Zu=new A;class im extends Ye{constructor(t=new Fe,e=new Yc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)da.fromBufferAttribute(e,r-1),fa.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=da.distanceTo(fa);t.setAttribute("lineDistance",new ie(i,1))}else Nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(r),Bo.radius+=s,t.ray.intersectsSphere(Bo)===!1)return;Ku.copy(r).invert(),Is.copy(t.ray).applyMatrix4(Ku);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let y=f,m=_-1;y<m;y+=l){const p=u.getX(y),b=u.getX(y+1),T=zo(this,t,Is,c,p,b,y);T&&e.push(T)}if(this.isLineLoop){const y=u.getX(_-1),m=u.getX(f),p=zo(this,t,Is,c,y,m,_-1);p&&e.push(p)}}else{const f=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let y=f,m=_-1;y<m;y+=l){const p=zo(this,t,Is,c,y,y+1,y);p&&e.push(p)}if(this.isLineLoop){const y=zo(this,t,Is,c,_-1,f,_-1);y&&e.push(y)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function zo(n,t,e,i,r,s,o){const a=n.geometry.attributes.position;if(da.fromBufferAttribute(a,r),fa.fromBufferAttribute(a,s),e.distanceSqToSegment(da,fa,fl,Zu)>i)return;fl.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(fl);if(!(l<t.near||l>t.far))return{distance:l,point:Zu.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Ju=new A,Qu=new A;class Mc extends im{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)Ju.fromBufferAttribute(e,r),Qu.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ju.distanceTo(Qu);t.setAttribute("lineDistance",new ie(i,1))}else Nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bd extends un{constructor(t=[],e=Sr,i,r,s,o,a,c,l,u){super(t,e,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ed extends un{constructor(t,e,i,r,s,o,a,c,l){super(t,e,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class eo extends un{constructor(t,e,i=xi,r,s,o,a=en,c=en,l,u=zi,d=1){if(u!==zi&&u!==pr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Vc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class rm extends eo{constructor(t,e=xi,i=Sr,r,s,o=en,a=en,c,l=zi){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,r,s,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class wd extends un{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class nr extends Fe{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,f=0;_("z","y","x",-1,-1,i,e,t,o,s,0),_("z","y","x",1,-1,i,e,-t,o,s,1),_("x","z","y",1,1,t,i,e,r,o,2),_("x","z","y",1,-1,t,i,-e,r,o,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(d,2));function _(y,m,p,b,T,M,g,x,R,v,w){const P=M/R,L=g/v,F=M/2,B=g/2,I=x/2,k=R+1,$=v+1;let K=0,nt=0;const Y=new A;for(let j=0;j<$;j++){const rt=j*L-B;for(let lt=0;lt<k;lt++){const bt=lt*P-F;Y[y]=bt*b,Y[m]=rt*T,Y[p]=I,l.push(Y.x,Y.y,Y.z),Y[y]=0,Y[m]=0,Y[p]=x>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(lt/R),d.push(1-j/v),K+=1}}for(let j=0;j<v;j++)for(let rt=0;rt<R;rt++){const lt=h+rt+k*j,bt=h+rt+k*(j+1),Me=h+(rt+1)+k*(j+1),ne=h+(rt+1)+k*j;c.push(lt,bt,ne),c.push(bt,Me,ne),nt+=6}a.addGroup(f,nt,w),f+=nt,h+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class wn extends Fe{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],h=[],f=[];let _=0;const y=[],m=i/2;let p=0;b(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new ie(d,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(f,2));function b(){const M=new A,g=new A;let x=0;const R=(e-t)/i;for(let v=0;v<=s;v++){const w=[],P=v/s,L=P*(e-t)+t;for(let F=0;F<=r;F++){const B=F/r,I=B*c+a,k=Math.sin(I),$=Math.cos(I);g.x=L*k,g.y=-P*i+m,g.z=L*$,d.push(g.x,g.y,g.z),M.set(k,R,$).normalize(),h.push(M.x,M.y,M.z),f.push(B,1-P),w.push(_++)}y.push(w)}for(let v=0;v<r;v++)for(let w=0;w<s;w++){const P=y[w][v],L=y[w+1][v],F=y[w+1][v+1],B=y[w][v+1];(t>0||w!==0)&&(u.push(P,L,B),x+=3),(e>0||w!==s-1)&&(u.push(L,F,B),x+=3)}l.addGroup(p,x,0),p+=x}function T(M){const g=_,x=new gt,R=new A;let v=0;const w=M===!0?t:e,P=M===!0?1:-1;for(let F=1;F<=r;F++)d.push(0,m*P,0),h.push(0,P,0),f.push(.5,.5),_++;const L=_;for(let F=0;F<=r;F++){const I=F/r*c+a,k=Math.cos(I),$=Math.sin(I);R.x=w*$,R.y=m*P,R.z=w*k,d.push(R.x,R.y,R.z),h.push(0,P,0),x.x=k*.5+.5,x.y=$*.5*P+.5,f.push(x.x,x.y),_++}for(let F=0;F<r;F++){const B=g+F,I=L+F;M===!0?u.push(I,I+1,B):u.push(I+1,I,B),v+=3}l.addGroup(p,v,M===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class co extends wn{constructor(t=1,e=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new co(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qc extends Fe{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new ie(s,3)),this.setAttribute("normal",new ie(s.slice(),3)),this.setAttribute("uv",new ie(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const T=new A,M=new A,g=new A;for(let x=0;x<e.length;x+=3)f(e[x+0],T),f(e[x+1],M),f(e[x+2],g),c(T,M,g,b)}function c(b,T,M,g){const x=g+1,R=[];for(let v=0;v<=x;v++){R[v]=[];const w=b.clone().lerp(M,v/x),P=T.clone().lerp(M,v/x),L=x-v;for(let F=0;F<=L;F++)F===0&&v===x?R[v][F]=w:R[v][F]=w.clone().lerp(P,F/L)}for(let v=0;v<x;v++)for(let w=0;w<2*(x-v)-1;w++){const P=Math.floor(w/2);w%2===0?(h(R[v][P+1]),h(R[v+1][P]),h(R[v][P])):(h(R[v][P+1]),h(R[v+1][P+1]),h(R[v+1][P]))}}function l(b){const T=new A;for(let M=0;M<s.length;M+=3)T.x=s[M+0],T.y=s[M+1],T.z=s[M+2],T.normalize().multiplyScalar(b),s[M+0]=T.x,s[M+1]=T.y,s[M+2]=T.z}function u(){const b=new A;for(let T=0;T<s.length;T+=3){b.x=s[T+0],b.y=s[T+1],b.z=s[T+2];const M=m(b)/2/Math.PI+.5,g=p(b)/Math.PI+.5;o.push(M,1-g)}_(),d()}function d(){for(let b=0;b<o.length;b+=6){const T=o[b+0],M=o[b+2],g=o[b+4],x=Math.max(T,M,g),R=Math.min(T,M,g);x>.9&&R<.1&&(T<.2&&(o[b+0]+=1),M<.2&&(o[b+2]+=1),g<.2&&(o[b+4]+=1))}}function h(b){s.push(b.x,b.y,b.z)}function f(b,T){const M=b*3;T.x=t[M+0],T.y=t[M+1],T.z=t[M+2]}function _(){const b=new A,T=new A,M=new A,g=new A,x=new gt,R=new gt,v=new gt;for(let w=0,P=0;w<s.length;w+=9,P+=6){b.set(s[w+0],s[w+1],s[w+2]),T.set(s[w+3],s[w+4],s[w+5]),M.set(s[w+6],s[w+7],s[w+8]),x.set(o[P+0],o[P+1]),R.set(o[P+2],o[P+3]),v.set(o[P+4],o[P+5]),g.copy(b).add(T).add(M).divideScalar(3);const L=m(g);y(x,P+0,b,L),y(R,P+2,T,L),y(v,P+4,M,L)}}function y(b,T,M,g){g<0&&b.x===1&&(o[T]=b.x-1),M.x===0&&M.z===0&&(o[T]=g/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qc(t.vertices,t.indices,t.radius,t.detail)}}const ko=new A,Go=new A,pl=new A,Ho=new Pn;class sm extends Fe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(cs*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let _=0;_<c;_+=3){o?(l[0]=o.getX(_),l[1]=o.getX(_+1),l[2]=o.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);const{a:y,b:m,c:p}=Ho;if(y.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Ho.getNormal(pl),d[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,d[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,d[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let b=0;b<3;b++){const T=(b+1)%3,M=d[b],g=d[T],x=Ho[u[b]],R=Ho[u[T]],v=`${M}_${g}`,w=`${g}_${M}`;w in h&&h[w]?(pl.dot(h[w].normal)<=s&&(f.push(x.x,x.y,x.z),f.push(R.x,R.y,R.z)),h[w]=null):v in h||(h[v]={index0:l[b],index1:l[T],normal:pl.clone()})}}for(const _ in h)if(h[_]){const{index0:y,index1:m}=h[_];ko.fromBufferAttribute(a,y),Go.fromBufferAttribute(a,m),f.push(ko.x,ko.y,ko.z),f.push(Go.x,Go.y,Go.z)}this.setAttribute("position",new ie(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Gi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Nt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let r=0;const s=i.length;let o;e?o=e:o=t*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,f=(o-u)/h;return(r+f)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new gt:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new A,r=[],s=[],o=[],a=new A,c=new Ae;for(let f=0;f<=t;f++){const _=f/t;r[f]=this.getTangentAt(_,new A)}s[0]=new A,o[0]=new A;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos($t(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,_))}o[f].crossVectors(r[f],s[f])}if(e===!0){let f=Math.acos($t(s[0].dot(s[t]),-1,1));f/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let _=1;_<=t;_++)s[_].applyMatrix4(c.makeRotationAxis(r[_],f*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Td extends Gi{constructor(t=0,e=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new gt){const i=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class om extends Td{constructor(t,e,i,r,s,o){super(t,e,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Kc(){let n=0,t=0,e=0,i=0;function r(s,o,a,c){n=s,t=a,e=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,d){let h=(o-s)/l-(a-s)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,f*=u,r(o,a,h,f)},calc:function(s){const o=s*s,a=o*s;return n+t*s+e*o+i*a}}}const ju=new A,th=new A,ml=new Kc,gl=new Kc,_l=new Kc;class Ad extends Gi{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new A){const i=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(th.subVectors(r[0],r[1]).add(r[0]),l=th);const d=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(ju.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=ju),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);y<1e-4&&(y=1),_<1e-4&&(_=y),m<1e-4&&(m=y),ml.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,_,y,m),gl.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,_,y,m),_l.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,_,y,m)}else this.curveType==="catmullrom"&&(ml.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),gl.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),_l.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return i.set(ml.calc(c),gl.calc(c),_l.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new A().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function eh(n,t,e,i,r){const s=(i-t)*.5,o=(r-e)*.5,a=n*n,c=n*a;return(2*e-2*i+s+o)*c+(-3*e+3*i-2*s-o)*a+s*n+e}function am(n,t){const e=1-n;return e*e*t}function lm(n,t){return 2*(1-n)*n*t}function cm(n,t){return n*n*t}function Vs(n,t,e,i){return am(n,t)+lm(n,e)+cm(n,i)}function um(n,t){const e=1-n;return e*e*e*t}function hm(n,t){const e=1-n;return 3*e*e*n*t}function dm(n,t){return 3*(1-n)*n*n*t}function fm(n,t){return n*n*n*t}function Ws(n,t,e,i,r){return um(n,t)+hm(n,e)+dm(n,i)+fm(n,r)}class pm extends Gi{constructor(t=new gt,e=new gt,i=new gt,r=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new gt){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ws(t,r.x,s.x,o.x,a.x),Ws(t,r.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mm extends Gi{constructor(t=new A,e=new A,i=new A,r=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new A){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ws(t,r.x,s.x,o.x,a.x),Ws(t,r.y,s.y,o.y,a.y),Ws(t,r.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gm extends Gi{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _m extends Gi{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vm extends Gi{constructor(t=new gt,e=new gt,i=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new gt){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Vs(t,r.x,s.x,o.x),Vs(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rd extends Gi{constructor(t=new A,e=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new A){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Vs(t,r.x,s.x,o.x),Vs(t,r.y,s.y,o.y),Vs(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xm extends Gi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const i=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(eh(a,c.x,l.x,u.x,d.x),eh(a,c.y,l.y,u.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new gt().fromArray(r))}return this}}var Mm=Object.freeze({__proto__:null,ArcCurve:om,CatmullRomCurve3:Ad,CubicBezierCurve:pm,CubicBezierCurve3:mm,EllipseCurve:Td,LineCurve:gm,LineCurve3:_m,QuadraticBezierCurve:vm,QuadraticBezierCurve3:Rd,SplineCurve:xm});class Zc extends qc{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Zc(t.radius,t.detail)}}class si extends Fe{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=t/a,h=e/c,f=[],_=[],y=[],m=[];for(let p=0;p<u;p++){const b=p*h-o;for(let T=0;T<l;T++){const M=T*d-s;_.push(M,-b,0),y.push(0,0,1),m.push(T/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){const T=b+l*p,M=b+l*(p+1),g=b+1+l*(p+1),x=b+1+l*p;f.push(T,M,x),f.push(M,g,x)}this.setIndex(f),this.setAttribute("position",new ie(_,3)),this.setAttribute("normal",new ie(y,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new si(t.width,t.height,t.widthSegments,t.heightSegments)}}class Jc extends Fe{constructor(t=.5,e=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],l=[],u=[];let d=t;const h=(e-t)/r,f=new A,_=new gt;for(let y=0;y<=r;y++){for(let m=0;m<=i;m++){const p=s+m/i*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),_.x=(f.x/e+1)/2,_.y=(f.y/e+1)/2,u.push(_.x,_.y)}d+=h}for(let y=0;y<r;y++){const m=y*(i+1);for(let p=0;p<i;p++){const b=p+m,T=b,M=b+i+1,g=b+i+2,x=b+1;a.push(T,M,x),a.push(M,g,x)}}this.setIndex(a),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ca extends Fe{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new A,h=new A,f=[],_=[],y=[],m=[];for(let p=0;p<=i;p++){const b=[],T=p/i,M=o+T*a,g=t*Math.cos(M),x=Math.sqrt(t*t-g*g);let R=0;p===0&&o===0?R=.5/e:p===i&&c===Math.PI&&(R=-.5/e);for(let v=0;v<=e;v++){const w=v/e,P=r+w*s;d.x=-x*Math.cos(P),d.y=g,d.z=x*Math.sin(P),_.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),m.push(w+R,1-T),b.push(l++)}u.push(b)}for(let p=0;p<i;p++)for(let b=0;b<e;b++){const T=u[p][b+1],M=u[p][b],g=u[p+1][b],x=u[p+1][b+1];(p!==0||o>0)&&f.push(T,M,x),(p!==i-1||c<Math.PI)&&f.push(M,g,x)}this.setIndex(f),this.setAttribute("position",new ie(_,3)),this.setAttribute("normal",new ie(y,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ca(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Es extends Fe{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s,thetaStart:o,thetaLength:a},i=Math.floor(i),r=Math.floor(r);const c=[],l=[],u=[],d=[],h=new A,f=new A,_=new A;for(let y=0;y<=i;y++){const m=o+y/i*a;for(let p=0;p<=r;p++){const b=p/r*s;f.x=(t+e*Math.cos(m))*Math.cos(b),f.y=(t+e*Math.cos(m))*Math.sin(b),f.z=e*Math.sin(m),l.push(f.x,f.y,f.z),h.x=t*Math.cos(b),h.y=t*Math.sin(b),_.subVectors(f,h).normalize(),u.push(_.x,_.y,_.z),d.push(p/r),d.push(y/i)}}for(let y=1;y<=i;y++)for(let m=1;m<=r;m++){const p=(r+1)*y+m-1,b=(r+1)*(y-1)+m-1,T=(r+1)*(y-1)+m,M=(r+1)*y+m;c.push(p,b,M),c.push(b,T,M)}this.setIndex(c),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Es(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class Qc extends Fe{constructor(t=new Rd(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:r,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new A,c=new A,l=new gt;let u=new A;const d=[],h=[],f=[],_=[];y(),this.setIndex(_),this.setAttribute("position",new ie(d,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(f,2));function y(){for(let T=0;T<e;T++)m(T);m(s===!1?e:0),b(),p()}function m(T){u=t.getPointAt(T/e,u);const M=o.normals[T],g=o.binormals[T];for(let x=0;x<=r;x++){const R=x/r*Math.PI*2,v=Math.sin(R),w=-Math.cos(R);c.x=w*M.x+v*g.x,c.y=w*M.y+v*g.y,c.z=w*M.z+v*g.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,d.push(a.x,a.y,a.z)}}function p(){for(let T=1;T<=e;T++)for(let M=1;M<=r;M++){const g=(r+1)*(T-1)+(M-1),x=(r+1)*T+(M-1),R=(r+1)*T+M,v=(r+1)*(T-1)+M;_.push(g,x,v),_.push(x,R,v)}}function b(){for(let T=0;T<=e;T++)for(let M=0;M<=r;M++)l.x=T/e,l.y=M/r,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Qc(new Mm[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function ms(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];if(nh(r))r.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone();else if(Array.isArray(r))if(nh(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][i]=s}else t[e][i]=r.slice();else t[e][i]=r}}return t}function pn(n){const t={};for(let e=0;e<n.length;e++){const i=ms(n[e]);for(const r in i)t[r]=i[r]}return t}function nh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Sm(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Cd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const ym={clone:ms,merge:pn};var bm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends Cr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bm,this.fragmentShader=Em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=Sm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const r=t.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=e[r.value]||null;break;case"c":this.uniforms[i].value=new qt().setHex(r.value);break;case"v2":this.uniforms[i].value=new gt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new A().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ue().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Bt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ae().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class wm extends bi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gs extends Cr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xc,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Tm extends Cr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=np,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Am extends Cr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Pd extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Rm extends Pd{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const vl=new Ae,ih=new A,rh=new A;class Cm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $c,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;ih.setFromMatrixPosition(t.matrixWorld),e.position.copy(ih),rh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,r){vl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(vl,t.coordinateSystem,t.reversedDepth);const s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;t.coordinateSystem===js||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(vl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Vo=new A,Wo=new Si,ci=new A;class Dd extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Vo,Wo,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Wo,ci.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Vo,Wo,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Wo,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new A,sh=new gt,oh=new gt;class $n extends Dd{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=to*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return to*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z)}getViewSize(t,e){return this.getViewBounds(t,sh,oh),e.subVectors(oh,sh)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(cs*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Pa extends Dd{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Pm extends Cm{constructor(){super(new Pa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dm extends Pd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new Pm}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Yr=-90,qr=1;class Lm extends Ye{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $n(Yr,qr,t,e);r.layers=this.layers,this.add(r);const s=new $n(Yr,qr,t,e);s.layers=this.layers,this.add(s);const o=new $n(Yr,qr,t,e);o.layers=this.layers,this.add(o);const a=new $n(Yr,qr,t,e);a.layers=this.layers,this.add(a);const c=new $n(Yr,qr,t,e);c.layers=this.layers,this.add(c);const l=new $n(Yr,qr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===js)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Im extends $n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class ah{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=$t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos($t(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const mu=class mu{constructor(t,e,i,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,r){const s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=r,this}};mu.prototype.isMatrix2=!0;let lh=mu;class Nm extends er{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function ch(n,t,e,i){const r=Um(i);switch(e){case dd:return n*t;case pd:return n*t/r.components*r.byteLength;case Oc:return n*t/r.components*r.byteLength;case yr:return n*t*2/r.components*r.byteLength;case Bc:return n*t*2/r.components*r.byteLength;case fd:return n*t*3/r.components*r.byteLength;case Qn:return n*t*4/r.components*r.byteLength;case zc:return n*t*4/r.components*r.byteLength;case Jo:case Qo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case jo:case ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Wl:case $l:return Math.max(n,16)*Math.max(t,8)/4;case Vl:case Xl:return Math.max(n,8)*Math.max(t,8)/2;case Yl:case ql:case Zl:case Jl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Kl:case sa:case Ql:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case jl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case tc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ec:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case nc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ic:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case rc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case sc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case oc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ac:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case lc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case cc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case uc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case hc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case dc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case fc:case pc:case mc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case gc:case _c:return Math.ceil(n/4)*Math.ceil(t/4)*8;case oa:case vc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Um(n){switch(n){case Cn:case ld:return{byteLength:1,components:1};case Js:case cd:case Mi:return{byteLength:2,components:1};case Uc:case Fc:return{byteLength:2,components:4};case xi:case Nc:case pi:return{byteLength:4,components:1};case ud:case hd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lc}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lc);function Ld(){let n=null,t=!1,e=null,i=null;function r(s,o){i=n.requestAnimationFrame(r),e(s,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Fm(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((f,_)=>f.start-_.start);let h=0;for(let f=1;f<d.length;f++){const _=d[h],y=d[f];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++h,d[h]=y)}d.length=h+1;for(let f=0,_=d.length;f<_;f++){const y=d[f];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Om=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bm=`#ifdef USE_ALPHAHASH
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
#endif`,zm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,km=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vm=`#ifdef USE_AOMAP
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
#endif`,Wm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xm=`#ifdef USE_BATCHING
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
#endif`,$m=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ym=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Km=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zm=`#ifdef USE_IRIDESCENCE
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
#endif`,Jm=`#ifdef USE_BUMPMAP
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
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,i0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,r0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,s0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,o0=`#define PI 3.141592653589793
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
} // validated`,a0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,l0=`vec3 transformedNormal = objectNormal;
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
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,u0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f0="gl_FragColor = linearToOutputTexel( gl_FragColor );",p0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,m0=`#ifdef USE_ENVMAP
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
#endif`,g0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_0=`#ifdef USE_ENVMAP
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
#endif`,v0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x0=`#ifdef USE_ENVMAP
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
#endif`,M0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E0=`#ifdef USE_GRADIENTMAP
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
}`,w0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,R0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,C0=`#ifdef USE_ENVMAP
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
#endif`,P0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,N0=`PhysicalMaterial material;
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
#endif`,U0=`uniform sampler2D dfgLUT;
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
}`,F0=`
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
#endif`,O0=`#if defined( RE_IndirectDiffuse )
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
#endif`,B0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,k0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,X0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Y0=`#if defined( USE_POINTS_UV )
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
#endif`,q0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Z0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j0=`#ifdef USE_MORPHTARGETS
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
#endif`,tg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ng=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,og=`#ifdef USE_NORMALMAP
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
#endif`,ag=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_g=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yg=`float getShadowMask() {
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
}`,bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Eg=`#ifdef USE_SKINNING
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
#endif`,wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tg=`#ifdef USE_SKINNING
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
#endif`,Ag=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dg=`#ifdef USE_TRANSMISSION
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
#endif`,Lg=`#ifdef USE_TRANSMISSION
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
#endif`,Ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Og=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bg=`uniform sampler2D t2D;
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
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`#include <common>
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
}`,Wg=`#if DEPTH_PACKING == 3200
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
}`,Xg=`#define DISTANCE
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
}`,$g=`#define DISTANCE
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`uniform float scale;
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
}`,Zg=`uniform vec3 diffuse;
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
}`,Jg=`#include <common>
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
}`,Qg=`uniform vec3 diffuse;
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
}`,jg=`#define LAMBERT
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
}`,t_=`#define LAMBERT
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
}`,e_=`#define MATCAP
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
}`,n_=`#define MATCAP
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
}`,i_=`#define NORMAL
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
}`,r_=`#define NORMAL
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
}`,s_=`#define PHONG
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
}`,o_=`#define PHONG
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
}`,a_=`#define STANDARD
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
}`,l_=`#define STANDARD
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
}`,c_=`#define TOON
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
}`,u_=`#define TOON
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
}`,h_=`uniform float size;
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
}`,d_=`uniform vec3 diffuse;
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
}`,f_=`#include <common>
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
}`,p_=`uniform vec3 color;
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
}`,m_=`uniform float rotation;
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
}`,g_=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:Om,alphahash_pars_fragment:Bm,alphamap_fragment:zm,alphamap_pars_fragment:km,alphatest_fragment:Gm,alphatest_pars_fragment:Hm,aomap_fragment:Vm,aomap_pars_fragment:Wm,batching_pars_vertex:Xm,batching_vertex:$m,begin_vertex:Ym,beginnormal_vertex:qm,bsdfs:Km,iridescence_fragment:Zm,bumpmap_pars_fragment:Jm,clipping_planes_fragment:Qm,clipping_planes_pars_fragment:jm,clipping_planes_pars_vertex:t0,clipping_planes_vertex:e0,color_fragment:n0,color_pars_fragment:i0,color_pars_vertex:r0,color_vertex:s0,common:o0,cube_uv_reflection_fragment:a0,defaultnormal_vertex:l0,displacementmap_pars_vertex:c0,displacementmap_vertex:u0,emissivemap_fragment:h0,emissivemap_pars_fragment:d0,colorspace_fragment:f0,colorspace_pars_fragment:p0,envmap_fragment:m0,envmap_common_pars_fragment:g0,envmap_pars_fragment:_0,envmap_pars_vertex:v0,envmap_physical_pars_fragment:C0,envmap_vertex:x0,fog_vertex:M0,fog_pars_vertex:S0,fog_fragment:y0,fog_pars_fragment:b0,gradientmap_pars_fragment:E0,lightmap_pars_fragment:w0,lights_lambert_fragment:T0,lights_lambert_pars_fragment:A0,lights_pars_begin:R0,lights_toon_fragment:P0,lights_toon_pars_fragment:D0,lights_phong_fragment:L0,lights_phong_pars_fragment:I0,lights_physical_fragment:N0,lights_physical_pars_fragment:U0,lights_fragment_begin:F0,lights_fragment_maps:O0,lights_fragment_end:B0,lightprobes_pars_fragment:z0,logdepthbuf_fragment:k0,logdepthbuf_pars_fragment:G0,logdepthbuf_pars_vertex:H0,logdepthbuf_vertex:V0,map_fragment:W0,map_pars_fragment:X0,map_particle_fragment:$0,map_particle_pars_fragment:Y0,metalnessmap_fragment:q0,metalnessmap_pars_fragment:K0,morphinstance_vertex:Z0,morphcolor_vertex:J0,morphnormal_vertex:Q0,morphtarget_pars_vertex:j0,morphtarget_vertex:tg,normal_fragment_begin:eg,normal_fragment_maps:ng,normal_pars_fragment:ig,normal_pars_vertex:rg,normal_vertex:sg,normalmap_pars_fragment:og,clearcoat_normal_fragment_begin:ag,clearcoat_normal_fragment_maps:lg,clearcoat_pars_fragment:cg,iridescence_pars_fragment:ug,opaque_fragment:hg,packing:dg,premultiplied_alpha_fragment:fg,project_vertex:pg,dithering_fragment:mg,dithering_pars_fragment:gg,roughnessmap_fragment:_g,roughnessmap_pars_fragment:vg,shadowmap_pars_fragment:xg,shadowmap_pars_vertex:Mg,shadowmap_vertex:Sg,shadowmask_pars_fragment:yg,skinbase_vertex:bg,skinning_pars_vertex:Eg,skinning_vertex:wg,skinnormal_vertex:Tg,specularmap_fragment:Ag,specularmap_pars_fragment:Rg,tonemapping_fragment:Cg,tonemapping_pars_fragment:Pg,transmission_fragment:Dg,transmission_pars_fragment:Lg,uv_pars_fragment:Ig,uv_pars_vertex:Ng,uv_vertex:Ug,worldpos_vertex:Fg,background_vert:Og,background_frag:Bg,backgroundCube_vert:zg,backgroundCube_frag:kg,cube_vert:Gg,cube_frag:Hg,depth_vert:Vg,depth_frag:Wg,distance_vert:Xg,distance_frag:$g,equirect_vert:Yg,equirect_frag:qg,linedashed_vert:Kg,linedashed_frag:Zg,meshbasic_vert:Jg,meshbasic_frag:Qg,meshlambert_vert:jg,meshlambert_frag:t_,meshmatcap_vert:e_,meshmatcap_frag:n_,meshnormal_vert:i_,meshnormal_frag:r_,meshphong_vert:s_,meshphong_frag:o_,meshphysical_vert:a_,meshphysical_frag:l_,meshtoon_vert:c_,meshtoon_frag:u_,points_vert:h_,points_frag:d_,shadow_vert:f_,shadow_frag:p_,sprite_vert:m_,sprite_frag:g_},mt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new A},probesMax:{value:new A},probesResolution:{value:new A}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},di={basic:{uniforms:pn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:pn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:pn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:pn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:pn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:pn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:pn([mt.points,mt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:pn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:pn([mt.common,mt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:pn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:pn([mt.sprite,mt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:pn([mt.common,mt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:pn([mt.lights,mt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};di.physical={uniforms:pn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const Xo={r:0,b:0,g:0},__=new Ae,Id=new Bt;Id.set(-1,0,0,0,1,0,0,0,1);function v_(n,t,e,i,r,s){const o=new qt(0);let a=r===!0?0:1,c,l,u=null,d=0,h=null;function f(b){let T=b.isScene===!0?b.background:null;if(T&&T.isTexture){const M=b.backgroundBlurriness>0;T=t.get(T,M)}return T}function _(b){let T=!1;const M=f(b);M===null?m(o,a):M&&M.isColor&&(m(M,1),T=!0);const g=n.xr.getEnvironmentBlendMode();g==="additive"?e.buffers.color.setClear(0,0,0,1,s):g==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(n.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(b,T){const M=f(T);M&&(M.isCubeTexture||M.mapping===Aa)?(l===void 0&&(l=new Ft(new nr(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:ms(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(g,x,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(__.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Id),l.material.toneMapped=te.getTransfer(M.colorSpace)!==de,(u!==M||d!==M.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ft(new si(2,2),new bi({name:"BackgroundMaterial",uniforms:ms(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=te.getTransfer(M.colorSpace)!==de,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,T){b.getRGB(Xo,Cd(n)),e.buffers.color.setClear(Xo.r,Xo.g,Xo.b,T,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,T=1){o.set(b),a=T,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(o,a)},render:_,addToRenderList:y,dispose:p}}function x_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(L,F,B,I,k){let $=!1;const K=d(L,I,B,F);s!==K&&(s=K,l(s.object)),$=f(L,I,B,k),$&&_(L,I,B,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,M(L,F,B,I),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return n.createVertexArray()}function l(L){return n.bindVertexArray(L)}function u(L){return n.deleteVertexArray(L)}function d(L,F,B,I){const k=I.wireframe===!0;let $=i[F.id];$===void 0&&($={},i[F.id]=$);const K=L.isInstancedMesh===!0?L.id:0;let nt=$[K];nt===void 0&&(nt={},$[K]=nt);let Y=nt[B.id];Y===void 0&&(Y={},nt[B.id]=Y);let j=Y[k];return j===void 0&&(j=h(c()),Y[k]=j),j}function h(L){const F=[],B=[],I=[];for(let k=0;k<e;k++)F[k]=0,B[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:B,attributeDivisors:I,object:L,attributes:{},index:null}}function f(L,F,B,I){const k=s.attributes,$=F.attributes;let K=0;const nt=B.getAttributes();for(const Y in nt)if(nt[Y].location>=0){const rt=k[Y];let lt=$[Y];if(lt===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(lt=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(lt=L.instanceColor)),rt===void 0||rt.attribute!==lt||lt&&rt.data!==lt.data)return!0;K++}return s.attributesNum!==K||s.index!==I}function _(L,F,B,I){const k={},$=F.attributes;let K=0;const nt=B.getAttributes();for(const Y in nt)if(nt[Y].location>=0){let rt=$[Y];rt===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(rt=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(rt=L.instanceColor));const lt={};lt.attribute=rt,rt&&rt.data&&(lt.data=rt.data),k[Y]=lt,K++}s.attributes=k,s.attributesNum=K,s.index=I}function y(){const L=s.newAttributes;for(let F=0,B=L.length;F<B;F++)L[F]=0}function m(L){p(L,0)}function p(L,F){const B=s.newAttributes,I=s.enabledAttributes,k=s.attributeDivisors;B[L]=1,I[L]===0&&(n.enableVertexAttribArray(L),I[L]=1),k[L]!==F&&(n.vertexAttribDivisor(L,F),k[L]=F)}function b(){const L=s.newAttributes,F=s.enabledAttributes;for(let B=0,I=F.length;B<I;B++)F[B]!==L[B]&&(n.disableVertexAttribArray(B),F[B]=0)}function T(L,F,B,I,k,$,K){K===!0?n.vertexAttribIPointer(L,F,B,k,$):n.vertexAttribPointer(L,F,B,I,k,$)}function M(L,F,B,I){y();const k=I.attributes,$=B.getAttributes(),K=F.defaultAttributeValues;for(const nt in $){const Y=$[nt];if(Y.location>=0){let j=k[nt];if(j===void 0&&(nt==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),nt==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),j!==void 0){const rt=j.normalized,lt=j.itemSize,bt=t.get(j);if(bt===void 0)continue;const Me=bt.buffer,ne=bt.type,ae=bt.bytesPerElement,Z=ne===n.INT||ne===n.UNSIGNED_INT||j.gpuType===Nc;if(j.isInterleavedBufferAttribute){const it=j.data,Et=it.stride,Ot=j.offset;if(it.isInstancedInterleavedBuffer){for(let St=0;St<Y.locationSize;St++)p(Y.location+St,it.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let St=0;St<Y.locationSize;St++)m(Y.location+St);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let St=0;St<Y.locationSize;St++)T(Y.location+St,lt/Y.locationSize,ne,rt,Et*ae,(Ot+lt/Y.locationSize*St)*ae,Z)}else{if(j.isInstancedBufferAttribute){for(let it=0;it<Y.locationSize;it++)p(Y.location+it,j.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let it=0;it<Y.locationSize;it++)m(Y.location+it);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let it=0;it<Y.locationSize;it++)T(Y.location+it,lt/Y.locationSize,ne,rt,lt*ae,lt/Y.locationSize*it*ae,Z)}}else if(K!==void 0){const rt=K[nt];if(rt!==void 0)switch(rt.length){case 2:n.vertexAttrib2fv(Y.location,rt);break;case 3:n.vertexAttrib3fv(Y.location,rt);break;case 4:n.vertexAttrib4fv(Y.location,rt);break;default:n.vertexAttrib1fv(Y.location,rt)}}}}b()}function g(){w();for(const L in i){const F=i[L];for(const B in F){const I=F[B];for(const k in I){const $=I[k];for(const K in $)u($[K].object),delete $[K];delete I[k]}}delete i[L]}}function x(L){if(i[L.id]===void 0)return;const F=i[L.id];for(const B in F){const I=F[B];for(const k in I){const $=I[k];for(const K in $)u($[K].object),delete $[K];delete I[k]}}delete i[L.id]}function R(L){for(const F in i){const B=i[F];for(const I in B){const k=B[I];if(k[L.id]===void 0)continue;const $=k[L.id];for(const K in $)u($[K].object),delete $[K];delete k[L.id]}}}function v(L){for(const F in i){const B=i[F],I=L.isInstancedMesh===!0?L.id:0,k=B[I];if(k!==void 0){for(const $ in k){const K=k[$];for(const nt in K)u(K[nt].object),delete K[nt];delete k[$]}delete B[I],Object.keys(B).length===0&&delete i[F]}}}function w(){P(),o=!0,s!==r&&(s=r,l(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:w,resetDefaultState:P,dispose:g,releaseStatesOfGeometry:x,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function M_(n,t,e){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),e.update(l,i,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];e.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function S_(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Qn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const v=R===Mi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Cn&&R!==pi&&!v&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(Nt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),g=n.getParameter(n.MAX_SAMPLES),x=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:M,maxSamples:g,samples:x}}function y_(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new Di,a=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||r;return r=h,i=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const _=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||_===null||_.length===0||s&&!m)s?u(null):l();else{const b=s?0:i,T=b*4;let M=p.clippingState||null;c.value=M,M=u(_,h,T,f);for(let g=0;g!==T;++g)M[g]=e[g];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,f,_){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=c.value,_!==!0||m===null){const p=f+y*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,M=f;T!==y;++T,M+=4)o.copy(d[T]).applyMatrix4(b,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}const ns=4,b_=6,E_=20,w_=256,Ns=new Pa,uh=new qt;let xl=null,Ml=0,Sl=0,yl=!1;const T_=new A,ur=new A;class hh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,s={}){const{size:o=256,position:a=T_}=s;xl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,r,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(xl,Ml,Sl),this._renderer.xr.enabled=yl,t.scissorTest=!1,Kr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Sr||t.mapping===ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Mi,format:Qn,colorSpace:aa,depthBuffer:!1},r=dh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dh(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=A_(s)),this._blurMaterial=C_(s,t,e),this._ggxMaterial=R_(s,t,e)}return r}_compileMaterial(t){const e=new Ft(new Fe,t);this._renderer.compile(e,Ns)}_sceneToCubeUV(t,e,i,r,s){const c=new $n(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(uh),d.toneMapping=_i,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ft(new nr,new ri({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let p=!1;const b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,p=!0):(m.color.copy(uh),p=!0);for(let T=0;T<6;T++){const M=T%3;M===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[T],s.y,s.z)):M===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[T]));const g=this._cubeSize;Kr(r,M*g,T>2?g:0,g,g),d.setRenderTarget(r),p&&d.render(y,c),d.render(t,c)}d.toneMapping=f,d.autoClear=h,t.background=b}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Sr||t.mapping===ps;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Kr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Ns)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=l*1.25,f=d*h,{_lodMax:_}=this,y=this._sizeLods[i],m=3*y*(i>_-ns?i-_+ns:0),p=4*(this._cubeSize-y);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=_-e,Kr(s,m,p,3*y,2*y),r.setRenderTarget(s),r.render(a,Ns),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=_-i,Kr(t,m,p,3*y,2*y),r.setRenderTarget(t),r.render(a,Ns)}_blur(t,e,i,r){const s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,i,o),this._blurPass(s,t,i,i,o)}_blurPass(t,e,i,r,s){const o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[r];c.material=a;const l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-i;const u=this._sizeLods[r],d=3*u*(r>this._lodMax-ns?r-this._lodMax+ns:0),h=4*(this._cubeSize-u);Kr(e,d,h,3*u,2*u),o.setRenderTarget(e),o.render(c,Ns)}}function A_(n){const t=[],e=[];let i=n;const r=n-ns+1+b_;for(let s=0;s<r;s++){const o=Math.pow(2,i);t.push(o);const a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,h=6,f=3,_=new Float32Array(f*h*d),y=new Float32Array(f*h*d);for(let p=0;p<d;p++){const b=p%3*2/3-1,T=p>2?0:-1,M=[b,T,0,b+2/3,T,0,b+2/3,T+1,0,b,T,0,b+2/3,T+1,0,b,T+1,0];_.set(M,f*h*p);for(let g=0;g<h;g++){const x=u[g*2]*2-1,R=u[g*2+1]*2-1;p===0?ur.set(1,R,x):p===1?ur.set(-x,1,-R):p===2?ur.set(-x,R,1):p===3?ur.set(-1,R,-x):p===4?ur.set(-x,-1,R):ur.set(x,R,-1),ur.toArray(y,(p*h+g)*f)}}const m=new Fe;m.setAttribute("position",new ti(_,f)),m.setAttribute("outputDirection",new ti(y,f)),e.push(new Ft(m,null)),i>ns&&i--}return{lodMeshes:e,sizeLods:t}}function dh(n,t,e){const i=new jn(n,t,e);return i.texture.mapping=Aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Kr(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function R_(n,t,e){return new bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:w_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Da(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function C_(n,t,e){return new bi({name:"SphericalGaussianBlur",defines:{SAMPLES:E_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Da(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function fh(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Da(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function ph(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Da(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Nd extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new bd(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new nr(5,5,5),s=new bi({name:"CubemapFromEquirect",uniforms:ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Ui});s.uniforms.tEquirect.value=e;const o=new Ft(r,s),a=e.minFilter;return e.minFilter===fr&&(e.minFilter=cn),new Lm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}function P_(n){let t=new WeakMap,e=new WeakMap,i=null;function r(h,f=!1){return h==null?null:f?o(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===Ha||f===Va)if(t.has(h)){const _=t.get(h).texture;return a(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const y=new Nd(_.height);return y.fromEquirectangularTexture(n,h),t.set(h,y),h.addEventListener("dispose",l),a(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,_=f===Ha||f===Va,y=f===Sr||f===ps;if(_||y){let m=e.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new hh(n)),m=_?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const b=h.image;return _&&b&&b.height>0||y&&b&&c(b)?(i===null&&(i=new hh(n)),m=_?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===Ha?h.mapping=Sr:f===Va&&(h.mapping=ps),h}function c(h){let f=0;const _=6;for(let y=0;y<_;y++)h[y]!==void 0&&f++;return f===_}function l(h){const f=h.target;f.removeEventListener("dispose",l);const _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function D_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&ls("WebGLRenderer: "+i+" extension not supported."),r}}}function L_(n,t,e,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const f=s.get(h);f&&(t.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)t.update(h[f],n.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,_=d.attributes.position;let y=0;if(_===void 0)return;if(f!==null){const b=f.array;y=f.version;for(let T=0,M=b.length;T<M;T+=3){const g=b[T+0],x=b[T+1],R=b[T+2];h.push(g,x,x,R,R,g)}}else{const b=_.array;y=_.version;for(let T=0,M=b.length/3-1;T<M;T+=3){const g=T+0,x=T+1,R=T+2;h.push(g,x,x,R,R,g)}}const m=new(_.count>=65535?Sd:Md)(h,1);m.version=y;const p=s.get(d);p&&t.remove(p),s.set(d,m)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function I_(n,t,e){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,h){n.drawElements(i,h,s,d*o),e.update(h,i,1)}function l(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,s,d*o,f),e.update(h,i,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,f);let y=0;for(let m=0;m<f;m++)y+=h[m];e.update(y,i,1)}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function N_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:se("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function U_(n,t,e){const i=new WeakMap,r=new Ue;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let w=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let T=0;f===!0&&(T=1),_===!0&&(T=2),y===!0&&(T=3);let M=a.attributes.position.count*T,g=1;M>t.maxTextureSize&&(g=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const x=new Float32Array(M*g*4*d),R=new _d(x,M,g,d);R.type=pi,R.needsUpdate=!0;const v=T*4;for(let P=0;P<d;P++){const L=m[P],F=p[P],B=b[P],I=M*g*4*P;for(let k=0;k<L.count;k++){const $=k*v;f===!0&&(r.fromBufferAttribute(L,k),x[I+$+0]=r.x,x[I+$+1]=r.y,x[I+$+2]=r.z,x[I+$+3]=0),_===!0&&(r.fromBufferAttribute(F,k),x[I+$+4]=r.x,x[I+$+5]=r.y,x[I+$+6]=r.z,x[I+$+7]=0),y===!0&&(r.fromBufferAttribute(B,k),x[I+$+8]=r.x,x[I+$+9]=r.y,x[I+$+10]=r.z,x[I+$+11]=B.itemSize===4?r.w:1)}}h={count:d,texture:R,size:new gt(M,g)},i.set(a,h),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];const _=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function F_(n,t,e,i,r){let s=new WeakMap;function o(l){const u=r.render.frame,d=l.geometry,h=t.get(l,d);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function a(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const O_={[ed]:"LINEAR_TONE_MAPPING",[nd]:"REINHARD_TONE_MAPPING",[id]:"CINEON_TONE_MAPPING",[Ic]:"ACES_FILMIC_TONE_MAPPING",[sd]:"AGX_TONE_MAPPING",[od]:"NEUTRAL_TONE_MAPPING",[rd]:"CUSTOM_TONE_MAPPING"};function B_(n,t,e,i,r,s){const o=new jn(t,e,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null;const l=new Fe;l.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ie([0,2,0,0,2,0],2));const u=new wm({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ft(l,u),h=new Pa(-1,1,1,-1,0,1);let f=null,_=null,y=!1,m,p=null,b=[],T=!1;this.setSize=function(M,g){o.setSize(M,g),a!==null&&a.setSize(M,g),c!==null&&c.setSize(M,g);for(let x=0;x<b.length;x++){const R=b[x];R.setSize&&R.setSize(M,g)}},this.setEffects=function(M){b=M,T=b.length>0&&b[0].isRenderPass===!0;const g=o.width,x=o.height;b.length>0&&a===null&&(a=new jn(g,x,{type:Mi,depthBuffer:!1,stencilBuffer:!1}),c=new jn(g,x,{type:Mi,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<b.length;R++){const v=b[R];v.setSize&&v.setSize(g,x)}},this.begin=function(M,g){if(y||M.toneMapping===_i&&b.length===0)return!1;if(p=g,g!==null){const x=g.width,R=g.height;(o.width!==x||o.height!==R)&&this.setSize(x,R)}return T===!1&&M.setRenderTarget(o),m=M.toneMapping,M.toneMapping=_i,!0},this.hasRenderPass=function(){return T},this.end=function(M,g){M.toneMapping=m,y=!0;let x=o,R=a;for(let v=0;v<b.length;v++){const w=b[v];w.enabled!==!1&&(w.render(M,R,x,g),w.needsSwap!==!1&&(x=R,R=R===a?c:a))}if(f!==M.outputColorSpace||_!==M.toneMapping){f=M.outputColorSpace,_=M.toneMapping,u.defines={},te.getTransfer(f)===de&&(u.defines.SRGB_TRANSFER="");const v=O_[_];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,M.setRenderTarget(p),M.render(d,h),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const Ud=new un,Sc=new eo(1,1),Fd=new _d,Od=new Fp,Bd=new bd,mh=[],gh=[],_h=new Float32Array(16),vh=new Float32Array(9),xh=new Float32Array(4);function ws(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=mh[r];if(s===void 0&&(s=new Float32Array(r),mh[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function qe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ke(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function La(n,t){let e=gh[t];e===void 0&&(e=new Int32Array(t),gh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function z_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function k_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2fv(this.addr,t),Ke(e,t)}}function G_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;n.uniform3fv(this.addr,t),Ke(e,t)}}function H_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4fv(this.addr,t),Ke(e,t)}}function V_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(qe(e,i))return;xh.set(i),n.uniformMatrix2fv(this.addr,!1,xh),Ke(e,i)}}function W_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(qe(e,i))return;vh.set(i),n.uniformMatrix3fv(this.addr,!1,vh),Ke(e,i)}}function X_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(qe(e,i))return;_h.set(i),n.uniformMatrix4fv(this.addr,!1,_h),Ke(e,i)}}function $_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Y_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2iv(this.addr,t),Ke(e,t)}}function q_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3iv(this.addr,t),Ke(e,t)}}function K_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4iv(this.addr,t),Ke(e,t)}}function Z_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function J_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2uiv(this.addr,t),Ke(e,t)}}function Q_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3uiv(this.addr,t),Ke(e,t)}}function j_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4uiv(this.addr,t),Ke(e,t)}}function tv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Sc.compareFunction=e.isReversedDepthBuffer()?Gc:kc,s=Sc):s=Ud,e.setTexture2D(t||s,r)}function ev(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Od,r)}function nv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Bd,r)}function iv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Fd,r)}function rv(n){switch(n){case 5126:return z_;case 35664:return k_;case 35665:return G_;case 35666:return H_;case 35674:return V_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return $_;case 35667:case 35671:return Y_;case 35668:case 35672:return q_;case 35669:case 35673:return K_;case 5125:return Z_;case 36294:return J_;case 36295:return Q_;case 36296:return j_;case 35678:case 36198:case 36298:case 36306:case 35682:return tv;case 35679:case 36299:case 36307:return ev;case 35680:case 36300:case 36308:case 36293:return nv;case 36289:case 36303:case 36311:case 36292:return iv}}function sv(n,t){n.uniform1fv(this.addr,t)}function ov(n,t){const e=ws(t,this.size,2);n.uniform2fv(this.addr,e)}function av(n,t){const e=ws(t,this.size,3);n.uniform3fv(this.addr,e)}function lv(n,t){const e=ws(t,this.size,4);n.uniform4fv(this.addr,e)}function cv(n,t){const e=ws(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function uv(n,t){const e=ws(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function hv(n,t){const e=ws(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function dv(n,t){n.uniform1iv(this.addr,t)}function fv(n,t){n.uniform2iv(this.addr,t)}function pv(n,t){n.uniform3iv(this.addr,t)}function mv(n,t){n.uniform4iv(this.addr,t)}function gv(n,t){n.uniform1uiv(this.addr,t)}function _v(n,t){n.uniform2uiv(this.addr,t)}function vv(n,t){n.uniform3uiv(this.addr,t)}function xv(n,t){n.uniform4uiv(this.addr,t)}function Mv(n,t,e){const i=this.cache,r=t.length,s=La(e,r);qe(i,s)||(n.uniform1iv(this.addr,s),Ke(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=Sc:o=Ud;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function Sv(n,t,e){const i=this.cache,r=t.length,s=La(e,r);qe(i,s)||(n.uniform1iv(this.addr,s),Ke(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Od,s[o])}function yv(n,t,e){const i=this.cache,r=t.length,s=La(e,r);qe(i,s)||(n.uniform1iv(this.addr,s),Ke(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Bd,s[o])}function bv(n,t,e){const i=this.cache,r=t.length,s=La(e,r);qe(i,s)||(n.uniform1iv(this.addr,s),Ke(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Fd,s[o])}function Ev(n){switch(n){case 5126:return sv;case 35664:return ov;case 35665:return av;case 35666:return lv;case 35674:return cv;case 35675:return uv;case 35676:return hv;case 5124:case 35670:return dv;case 35667:case 35671:return fv;case 35668:case 35672:return pv;case 35669:case 35673:return mv;case 5125:return gv;case 36294:return _v;case 36295:return vv;case 36296:return xv;case 35678:case 36198:case 36298:case 36306:case 35682:return Mv;case 35679:case 36299:case 36307:return Sv;case 35680:case 36300:case 36308:case 36293:return yv;case 36289:case 36303:case 36311:case 36292:return bv}}class wv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=rv(e.type)}}class Tv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ev(e.type)}}class Av{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const bl=/(\w+)(\])?(\[|\.)?/g;function Mh(n,t){n.seq.push(t),n.map[t.id]=t}function Rv(n,t,e){const i=n.name,r=i.length;for(bl.lastIndex=0;;){const s=bl.exec(i),o=bl.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Mh(e,l===void 0?new wv(a,n,t):new Tv(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new Av(a),Mh(e,d)),e=d}}}class ea{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);Rv(a,c,this)}const r=[],s=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Sh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Cv=37297;let Pv=0;function Dv(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const yh=new Bt;function Lv(n){te._getMatrix(yh,te.workingColorSpace,n);const t=`mat3( ${yh.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(n)){case la:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function bh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Dv(n.getShaderSource(t),a)}else return s}function Iv(n,t){const e=Lv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Nv={[ed]:"Linear",[nd]:"Reinhard",[id]:"Cineon",[Ic]:"ACESFilmic",[sd]:"AgX",[od]:"Neutral",[rd]:"Custom"};function Uv(n,t){const e=Nv[t];return e===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const $o=new A;function Fv(){te.getLuminanceCoefficients($o);const n=$o.x.toFixed(4),t=$o.y.toFixed(4),e=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ov(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function Bv(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function zv(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function zs(n){return n!==""}function Eh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const kv=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(n){return n.replace(kv,Hv)}const Gv=new Map;function Hv(n,t){let e=Xt[t];if(e===void 0){const i=Gv.get(t);if(i!==void 0)e=Xt[i],Nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return yc(e)}const Vv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Th(n){return n.replace(Vv,Wv)}function Wv(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ah(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}const Xv={[Zo]:"SHADOWMAP_TYPE_PCF",[Bs]:"SHADOWMAP_TYPE_VSM"};function $v(n){return Xv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Yv={[Sr]:"ENVMAP_TYPE_CUBE",[ps]:"ENVMAP_TYPE_CUBE",[Aa]:"ENVMAP_TYPE_CUBE_UV"};function qv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Yv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Kv={[ps]:"ENVMAP_MODE_REFRACTION"};function Zv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Kv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Jv={[td]:"ENVMAP_BLENDING_MULTIPLY",[jf]:"ENVMAP_BLENDING_MIX",[tp]:"ENVMAP_BLENDING_ADD"};function Qv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Jv[n.combine]||"ENVMAP_BLENDING_NONE"}function jv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function tx(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=$v(e),l=qv(e),u=Zv(e),d=Qv(e),h=jv(e),f=Ov(e),_=Bv(s),y=r.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(zs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(zs).join(`
`),p.length>0&&(p+=`
`)):(m=[Ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),p=[Ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_i?"#define TONE_MAPPING":"",e.toneMapping!==_i?Xt.tonemapping_pars_fragment:"",e.toneMapping!==_i?Uv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Iv("linearToOutputTexel",e.outputColorSpace),Fv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zs).join(`
`)),o=yc(o),o=Eh(o,e),o=wh(o,e),a=yc(a),a=Eh(a,e),a=wh(a,e),o=Th(o),a=Th(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=b+m+o,M=b+p+a,g=Sh(r,r.VERTEX_SHADER,T),x=Sh(r,r.FRAGMENT_SHADER,M);r.attachShader(y,g),r.attachShader(y,x),e.index0AttributeName!==void 0?r.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function R(L){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(y)||"",B=r.getShaderInfoLog(g)||"",I=r.getShaderInfoLog(x)||"",k=F.trim(),$=B.trim(),K=I.trim();let nt=!0,Y=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(nt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,g,x);else{const j=bh(r,g,"vertex"),rt=bh(r,x,"fragment");se("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+j+`
`+rt)}else k!==""?Nt("WebGLProgram: Program Info Log:",k):($===""||K==="")&&(Y=!1);Y&&(L.diagnostics={runnable:nt,programLog:k,vertexShader:{log:$,prefix:m},fragmentShader:{log:K,prefix:p}})}r.deleteShader(g),r.deleteShader(x),v=new ea(r,y),w=zv(r,y)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(y,Cv)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Pv++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=g,this.fragmentShader=x,this}let ex=0;class nx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new ix(t),e.set(t,i)),i}}class ix{constructor(t){this.id=ex++,this.code=t,this.usedTimes=0}}function rx(n){return n===yr||n===sa||n===oa}function sx(n,t,e,i,r,s){const o=new vd,a=new nx,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function y(v,w,P,L,F,B){const I=L.fog,k=F.geometry,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,K=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,nt=t.get(v.envMap||$,K),Y=nt&&nt.mapping===Aa?nt.image.height:null,j=f[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&Nt("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const rt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,lt=rt!==void 0?rt.length:0;let bt=0;k.morphAttributes.position!==void 0&&(bt=1),k.morphAttributes.normal!==void 0&&(bt=2),k.morphAttributes.color!==void 0&&(bt=3);let Me,ne,ae,Z;if(j){const ye=di[j];Me=ye.vertexShader,ne=ye.fragmentShader}else{Me=v.vertexShader,ne=v.fragmentShader;const ye=a.getVertexShaderStage(v),le=a.getFragmentShaderStage(v);a.update(v,ye,le),ae=ye.id,Z=le.id}const it=n.getRenderTarget(),Et=n.state.buffers.depth.getReversed(),Ot=F.isInstancedMesh===!0,St=F.isBatchedMesh===!0,Yt=!!v.map,Xe=!!v.matcap,Kt=!!nt,oe=!!v.aoMap,Se=!!v.lightMap,Jt=!!v.bumpMap&&v.wireframe===!1,Re=!!v.normalMap,Ze=!!v.displacementMap,_n=!!v.emissiveMap,Le=!!v.metalnessMap,ke=!!v.roughnessMap,O=v.anisotropy>0,nn=v.clearcoat>0,he=v.dispersion>0,C=v.retroreflectivity>0,S=v.iridescence>0,z=v.sheen>0,V=v.transmission>0,q=O&&!!v.anisotropyMap,at=nn&&!!v.clearcoatMap,ct=nn&&!!v.clearcoatNormalMap,J=nn&&!!v.clearcoatRoughnessMap,tt=S&&!!v.iridescenceMap,ut=S&&!!v.iridescenceThicknessMap,Pt=z&&!!v.sheenColorMap,pt=z&&!!v.sheenRoughnessMap,ht=!!v.specularMap,Dt=!!v.specularColorMap,It=!!v.specularIntensityMap,Ht=V&&!!v.transmissionMap,U=V&&!!v.thicknessMap,dt=!!v.gradientMap,Q=!!v.alphaMap,ft=v.alphaTest>0,xt=!!v.alphaHash,st=!!v.extensions;let Lt=_i;v.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Lt=n.toneMapping);const Rt={shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:Me,fragmentShader:ne,defines:v.defines,customVertexShaderID:ae,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:St,batchingColor:St&&F._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&F.instanceColor!==null,instancingMorph:Ot&&F.morphTexture!==null,outputColorSpace:it===null?n.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Yt,matcap:Xe,envMap:Kt,envMapMode:Kt&&nt.mapping,envMapCubeUVHeight:Y,aoMap:oe,lightMap:Se,bumpMap:Jt,normalMap:Re,displacementMap:Ze,emissiveMap:_n,normalMapObjectSpace:Re&&v.normalMapType===ip,normalMapTangentSpace:Re&&v.normalMapType===xc,packedNormalMap:Re&&v.normalMapType===xc&&rx(v.normalMap.format),metalnessMap:Le,roughnessMap:ke,anisotropy:O,anisotropyMap:q,clearcoat:nn,clearcoatMap:at,clearcoatNormalMap:ct,clearcoatRoughnessMap:J,dispersion:he,retroreflection:C,iridescence:S,iridescenceMap:tt,iridescenceThicknessMap:ut,sheen:z,sheenColorMap:Pt,sheenRoughnessMap:pt,specularMap:ht,specularColorMap:Dt,specularIntensityMap:It,transmission:V,transmissionMap:Ht,thicknessMap:U,gradientMap:dt,opaque:v.transparent===!1&&v.blending===Gs&&v.alphaToCoverage===!1,alphaMap:Q,alphaTest:ft,alphaHash:xt,combine:v.combine,mapUv:Yt&&_(v.map.channel),aoMapUv:oe&&_(v.aoMap.channel),lightMapUv:Se&&_(v.lightMap.channel),bumpMapUv:Jt&&_(v.bumpMap.channel),normalMapUv:Re&&_(v.normalMap.channel),displacementMapUv:Ze&&_(v.displacementMap.channel),emissiveMapUv:_n&&_(v.emissiveMap.channel),metalnessMapUv:Le&&_(v.metalnessMap.channel),roughnessMapUv:ke&&_(v.roughnessMap.channel),anisotropyMapUv:q&&_(v.anisotropyMap.channel),clearcoatMapUv:at&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ct&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:pt&&_(v.sheenRoughnessMap.channel),specularMapUv:ht&&_(v.specularMap.channel),specularColorMapUv:Dt&&_(v.specularColorMap.channel),specularIntensityMapUv:It&&_(v.specularIntensityMap.channel),transmissionMapUv:Ht&&_(v.transmissionMap.channel),thicknessMapUv:U&&_(v.thicknessMap.channel),alphaMapUv:Q&&_(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Re||O),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!k.attributes.uv&&(Yt||Q),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&Re===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Et,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:bt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Yt&&v.map.isVideoTexture===!0&&te.getTransfer(v.map.colorSpace)===de,decodeVideoTextureEmissive:_n&&v.emissiveMap.isVideoTexture===!0&&te.getTransfer(v.emissiveMap.colorSpace)===de,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===an,flipSided:v.side===En,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:st&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&v.extensions.multiDraw===!0||St)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Rt.vertexUv1s=c.has(1),Rt.vertexUv2s=c.has(2),Rt.vertexUv3s=c.has(3),c.clear(),Rt}function m(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)w.push(P),w.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(p(w,v),b(w,v),w.push(n.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function p(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function b(v,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function T(v){const w=f[v.type];let P;if(w){const L=di[w];P=ym.clone(L.uniforms)}else P=v.uniforms;return P}function M(v,w){let P=u.get(w);return P!==void 0?++P.usedTimes:(P=new tx(n,w,v,r),l.push(P),u.set(w,P)),P}function g(v){if(--v.usedTimes===0){const w=l.indexOf(v);l[w]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function x(v){a.remove(v)}function R(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:T,acquireProgram:M,releaseProgram:g,releaseShaderCache:x,programs:l,dispose:R}}function ox(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function ax(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Rh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ch(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,_,y,m,p){let b=n[t];return b===void 0?(b={id:h.id,object:h,geometry:f,material:_,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:p},n[t]=b):(b.id=h.id,b.object=h,b.geometry=f,b.material=_,b.materialVariant=o(h),b.groupOrder=y,b.renderOrder=h.renderOrder,b.z=m,b.group=p),t++,b}function c(h,f,_,y,m,p,b){b.reversedDepth===!0&&(m=-m);const T=a(h,f,_,y,m,p);_.transmission>0?i.push(T):_.transparent===!0?r.push(T):e.push(T)}function l(h,f,_,y,m,p){const b=a(h,f,_,y,m,p);_.transmission>0?i.unshift(b):_.transparent===!0?r.unshift(b):e.unshift(b)}function u(h,f){e.length>1&&e.sort(h||ax),i.length>1&&i.sort(f||Rh),r.length>1&&r.sort(f||Rh)}function d(){for(let h=t,f=n.length;h<f;h++){const _=n[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:d,sort:u}}function lx(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Ch,n.set(i,[o])):r>=s.length?(o=new Ch,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function cx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new A,color:new qt};break;case"SpotLight":e={position:new A,direction:new A,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new A,halfWidth:new A,halfHeight:new A};break}return n[t.id]=e,e}}}function ux(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let hx=0;function dx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function fx(n){const t=new cx,e=ux(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new A);const r=new A,s=new Ae,o=new Ae;function a(l){let u=0,d=0,h=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,_=0,y=0,m=0,p=0,b=0,T=0,M=0,g=0,x=0,R=0,v=0,w=0,P=0;l.sort(dx);for(let F=0,B=l.length;F<B;F++){const I=l[F],k=I.color,$=I.intensity,K=I.distance;let nt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===yr?nt=I.shadow.map.texture:nt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=k.r*$,d+=k.g*$,h+=k.b*$;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(I.sh.coefficients[Y],$);P++}else if(I.isSunLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const j=I.shadow,rt=e.get(I);rt.shadowIntensity=j.intensity,rt.shadowBias=j.bias,rt.shadowNormalBias=j.normalBias,rt.shadowRadius=j.radius,rt.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[_]=rt,i.sunShadowMap[_]=nt;const lt=j.getViewportCount();for(let bt=0;bt<lt;bt++)i.sunShadowMatrix[y+bt]=j.getMatrix(bt),i.sunShadowCascade[y+bt]=j._cascadeData[bt];y+=lt,_++}i.sun[f]=Y,f++}else if(I.isDirectionalLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const j=I.shadow,rt=e.get(I);rt.shadowIntensity=j.intensity,rt.shadowBias=j.bias,rt.shadowNormalBias=j.normalBias,rt.shadowRadius=j.radius,rt.shadowMapSize=j.mapSize,i.directionalShadow[m]=rt,i.directionalShadowMap[m]=nt,i.directionalShadowMatrix[m]=I.shadow.matrix,g++}i.directional[m]=Y,m++}else if(I.isSpotLight){const Y=t.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(k).multiplyScalar($),Y.distance=K,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,i.spot[b]=Y;const j=I.shadow;if(I.map&&(i.spotLightMap[v]=I.map,v++,j.updateMatrices(I),I.castShadow&&w++),i.spotLightMatrix[b]=j.matrix,I.castShadow){const rt=e.get(I);rt.shadowIntensity=j.intensity,rt.shadowBias=j.bias,rt.shadowNormalBias=j.normalBias,rt.shadowRadius=j.radius,rt.shadowMapSize=j.mapSize,i.spotShadow[b]=rt,i.spotShadowMap[b]=nt,R++}b++}else if(I.isRectAreaLight){const Y=t.get(I);Y.color.copy(k).multiplyScalar($),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),i.rectArea[T]=Y,T++}else if(I.isPointLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const j=I.shadow,rt=e.get(I);rt.shadowIntensity=j.intensity,rt.shadowBias=j.bias,rt.shadowNormalBias=j.normalBias,rt.shadowRadius=j.radius,rt.shadowMapSize=j.mapSize,rt.shadowCameraNear=j.camera.near,rt.shadowCameraFar=j.camera.far,i.pointShadow[p]=rt,i.pointShadowMap[p]=nt,i.pointShadowMatrix[p]=I.shadow.matrix,x++}i.point[p]=Y,p++}else if(I.isHemisphereLight){const Y=t.get(I);Y.skyColor.copy(I.color).multiplyScalar($),Y.groundColor.copy(I.groundColor).multiplyScalar($),i.hemi[M]=Y,M++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const L=i.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==b||L.rectAreaLength!==T||L.hemiLength!==M||L.numSunShadows!==_||L.numDirectionalShadows!==g||L.numPointShadows!==x||L.numSpotShadows!==R||L.numSpotMaps!==v||L.numLightProbes!==P)&&(i.sun.length=f,i.directional.length=m,i.spot.length=b,i.rectArea.length=T,i.point.length=p,i.hemi.length=M,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.directionalShadowMatrix.length=g,i.pointShadow.length=x,i.pointShadowMap.length=x,i.pointShadowMatrix.length=x,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+v-w,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=P,L.sunLength=f,L.directionalLength=m,L.pointLength=p,L.spotLength=b,L.rectAreaLength=T,L.hemiLength=M,L.numSunShadows=_,L.numDirectionalShadows=g,L.numPointShadows=x,L.numSpotShadows=R,L.numSpotMaps=v,L.numLightProbes=P,i.version=hx++)}function c(l,u){let d=0,h=0,f=0,_=0,y=0,m=0;const p=u.matrixWorldInverse;for(let b=0,T=l.length;b<T;b++){const M=l[b];if(M.isSunLight){const g=i.sun[d];g.direction.setFromMatrixPosition(M.matrixWorld),g.direction.transformDirection(p),d++}else if(M.isDirectionalLight){const g=i.directional[h];g.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(p),h++}else if(M.isSpotLight){const g=i.spot[_];g.position.setFromMatrixPosition(M.matrixWorld),g.position.applyMatrix4(p),g.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(p),_++}else if(M.isRectAreaLight){const g=i.rectArea[y];g.position.setFromMatrixPosition(M.matrixWorld),g.position.applyMatrix4(p),o.identity(),s.copy(M.matrixWorld),s.premultiply(p),o.extractRotation(s),g.halfWidth.set(M.width*.5,0,0),g.halfHeight.set(0,M.height*.5,0),g.halfWidth.applyMatrix4(o),g.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){const g=i.point[f];g.position.setFromMatrixPosition(M.matrixWorld),g.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const g=i.hemi[m];g.direction.setFromMatrixPosition(M.matrixWorld),g.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:i}}function Ph(n){const t=new fx(n),e=[],i=[],r=[];function s(h){d.camera=h,e.length=0,i.length=0,r.length=0}function o(h){e.push(h)}function a(h){i.push(h)}function c(h){r.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function px(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Ph(n),t.set(r,[a])):s>=o.length?(a=new Ph(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const mx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gx=`uniform sampler2D shadow_pass;
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
}`,_x=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],vx=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],Dh=new Ae,Us=new A,El=new A;function xx(n,t,e){let i=new $c;const r=new gt,s=new gt,o=new Ue,a=new Tm,c=new Am,l={},u=e.maxTextureSize,d={[Mr]:En,[En]:Mr,[an]:an},h=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:mx,fragmentShader:gx}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const _=new Fe;_.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ft(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zo;let p=this.type;this.render=function(x,R,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;this.type===Jh&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Zo);const w=n.getRenderTarget(),P=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Ui),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=p!==this.type;B&&R.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(k=>k.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,k=x.length;I<k;I++){const $=x[I],K=$.shadow;if(K===void 0){Nt("WebGLShadowMap:",$,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const nt=K.getFrameExtents();r.multiply(nt),s.copy(K.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/nt.x),r.x=s.x*nt.x,K.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/nt.y),r.y=s.y*nt.y,K.mapSize.y=s.y));const Y=n.state.buffers.depth.getReversed();if(K.camera._reversedDepth=Y,K.map===null||B===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Bs){if($.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new jn(r.x,r.y,{format:yr,type:Mi,minFilter:cn,magFilter:cn,generateMipmaps:!1}),K.map.texture.name=$.name+".shadowMap",K.map.depthTexture=new eo(r.x,r.y,pi),K.map.depthTexture.name=$.name+".shadowMapDepth",K.map.depthTexture.format=zi,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=en,K.map.depthTexture.magFilter=en}else $.isPointLight?(K.map=new Nd(r.x),K.map.depthTexture=new rm(r.x,xi)):(K.map=new jn(r.x,r.y),K.map.depthTexture=new eo(r.x,r.y,xi)),K.map.depthTexture.name=$.name+".shadowMap",K.map.depthTexture.format=zi,this.type===Zo?(K.map.depthTexture.compareFunction=Y?Gc:kc,K.map.depthTexture.minFilter=cn,K.map.depthTexture.magFilter=cn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=en,K.map.depthTexture.magFilter=en);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==r.x||K.map.height!==r.y)&&K.map.setSize(r.x,r.y);const j=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();$.isPointLight!==!0&&K.updateMatrices($,v);for(let rt=0;rt<j;rt++){const lt=K.getCamera(rt);if($.isPointLight){const bt=K.camera,Me=K.matrix,ne=$.distance||bt.far;ne!==bt.far&&(bt.far=ne,bt.updateProjectionMatrix()),Us.setFromMatrixPosition($.matrixWorld),bt.position.copy(Us),El.copy(bt.position),El.add(_x[rt]),bt.up.copy(vx[rt]),bt.lookAt(El),bt.updateMatrixWorld(),Me.makeTranslation(-Us.x,-Us.y,-Us.z),Dh.multiplyMatrices(bt.projectionMatrix,bt.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Dh,bt.coordinateSystem,bt.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)n.setRenderTarget(K.map,rt),n.clear();else{rt===0&&(n.setRenderTarget(K.map),n.clear());const bt=K.getViewport(rt);o.set(s.x*bt.x,s.y*bt.y,s.x*bt.z,s.y*bt.w),F.viewport(o)}i=K.getFrustum(rt),M(R,v,lt,$,this.type)}K.isPointLightShadow!==!0&&this.type===Bs&&b(K,v),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,P,L)};function b(x,R){const v=t.update(y);h.defines.VSM_SAMPLES!==x.blurSamples&&(h.defines.VSM_SAMPLES=x.blurSamples,f.defines.VSM_SAMPLES=x.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),x.mapPass===null?x.mapPass=new jn(r.x,r.y,{format:yr,type:Mi}):(x.mapPass.width!==x.map.width||x.mapPass.height!==x.map.height)&&x.mapPass.setSize(x.map.width,x.map.height),h.uniforms.shadow_pass.value=x.map.depthTexture,h.uniforms.resolution.value.set(x.map.width,x.map.height),h.uniforms.radius.value=x.radius,n.setRenderTarget(x.mapPass),n.clear(),n.renderBufferDirect(R,null,v,h,y,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value.set(x.map.width,x.map.height),f.uniforms.radius.value=x.radius,n.setRenderTarget(x.map),n.clear(),n.renderBufferDirect(R,null,v,f,y,null)}function T(x,R,v,w){let P=null;const L=v.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(L!==void 0)P=L;else if(P=v.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=P.uuid,B=R.uuid;let I=l[F];I===void 0&&(I={},l[F]=I);let k=I[B];k===void 0&&(k=P.clone(),I[B]=k,R.addEventListener("dispose",g)),P=k}if(P.visible=R.visible,P.wireframe=R.wireframe,w===Bs?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:d[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const F=n.properties.get(P);F.light=v}return P}function M(x,R,v,w,P){if(x.visible===!1)return;if(x.layers.test(R.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&P===Bs)&&(!x.frustumCulled||x.intersectsFrustum(i))){x.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,x.matrixWorld);const B=t.update(x),I=x.material;if(Array.isArray(I)){const k=B.groups;for(let $=0,K=k.length;$<K;$++){const nt=k[$],Y=I[nt.materialIndex];if(Y&&Y.visible){const j=T(x,Y,w,P);x.onBeforeShadow(n,x,R,v,B,j,nt),n.renderBufferDirect(v,null,B,j,x,nt),x.onAfterShadow(n,x,R,v,B,j,nt)}}}else if(I.visible){const k=T(x,I,w,P);x.onBeforeShadow(n,x,R,v,B,k,null),n.renderBufferDirect(v,null,B,k,x,null),x.onAfterShadow(n,x,R,v,B,k,null)}}const F=x.children;for(let B=0,I=F.length;B<I;B++)M(F[B],R,v,w,P)}function g(x){x.target.removeEventListener("dispose",g);for(const v in l){const w=l[v],P=x.target.uuid;P in w&&(w[P].dispose(),delete w[P])}}}function Mx(n,t){function e(){let U=!1;const dt=new Ue;let Q=null;const ft=new Ue(0,0,0,0);return{setMask:function(xt){Q!==xt&&!U&&(n.colorMask(xt,xt,xt,xt),Q=xt)},setLocked:function(xt){U=xt},setClear:function(xt,st,Lt,Rt,ye){ye===!0&&(xt*=Rt,st*=Rt,Lt*=Rt),dt.set(xt,st,Lt,Rt),ft.equals(dt)===!1&&(n.clearColor(xt,st,Lt,Rt),ft.copy(dt))},reset:function(){U=!1,Q=null,ft.set(-1,0,0,0)}}}function i(){let U=!1,dt=!1,Q=null,ft=null,xt=null;return{setReversed:function(st){if(dt!==st){const Lt=t.get("EXT_clip_control");st?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),dt=st;const Rt=xt;xt=null,this.setClear(Rt)}},getReversed:function(){return dt},setTest:function(st){st?it(n.DEPTH_TEST):Et(n.DEPTH_TEST)},setMask:function(st){Q!==st&&!U&&(n.depthMask(st),Q=st)},setFunc:function(st){if(dt&&(st=pp[st]),ft!==st){switch(st){case Nl:n.depthFunc(n.NEVER);break;case Ul:n.depthFunc(n.ALWAYS);break;case Fl:n.depthFunc(n.LESS);break;case Zs:n.depthFunc(n.LEQUAL);break;case Ol:n.depthFunc(n.EQUAL);break;case Bl:n.depthFunc(n.GEQUAL);break;case zl:n.depthFunc(n.GREATER);break;case kl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ft=st}},setLocked:function(st){U=st},setClear:function(st){xt!==st&&(xt=st,dt&&(st=1-st),n.clearDepth(st))},reset:function(){U=!1,Q=null,ft=null,xt=null,dt=!1}}}function r(){let U=!1,dt=null,Q=null,ft=null,xt=null,st=null,Lt=null,Rt=null,ye=null;return{setTest:function(le){U||(le?it(n.STENCIL_TEST):Et(n.STENCIL_TEST))},setMask:function(le){dt!==le&&!U&&(n.stencilMask(le),dt=le)},setFunc:function(le,kn,ai){(Q!==le||ft!==kn||xt!==ai)&&(n.stencilFunc(le,kn,ai),Q=le,ft=kn,xt=ai)},setOp:function(le,kn,ai){(st!==le||Lt!==kn||Rt!==ai)&&(n.stencilOp(le,kn,ai),st=le,Lt=kn,Rt=ai)},setLocked:function(le){U=le},setClear:function(le){ye!==le&&(n.clearStencil(le),ye=le)},reset:function(){U=!1,dt=null,Q=null,ft=null,xt=null,st=null,Lt=null,Rt=null,ye=null}}}const s=new e,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},d={},h={},f=new WeakMap,_=[],y=null,m=!1,p=null,b=null,T=null,M=null,g=null,x=null,R=null,v=new qt(0,0,0),w=0,P=!1,L=null,F=null,B=null,I=null,k=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,nt=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),K=nt>=1):Y.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),K=nt>=2);let j=null,rt={};const lt=n.getParameter(n.SCISSOR_BOX),bt=n.getParameter(n.VIEWPORT),Me=new Ue().fromArray(lt),ne=new Ue().fromArray(bt);function ae(U,dt,Q,ft){const xt=new Uint8Array(4),st=n.createTexture();n.bindTexture(U,st),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Lt=0;Lt<Q;Lt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(dt,0,n.RGBA,1,1,ft,0,n.RGBA,n.UNSIGNED_BYTE,xt):n.texImage2D(dt+Lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xt);return st}const Z={};Z[n.TEXTURE_2D]=ae(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(n.DEPTH_TEST),o.setFunc(Zs),Jt(!1),Re(Tu),it(n.CULL_FACE),oe(Ui);function it(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function Et(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Ot(U,dt){return h[U]!==dt?(n.bindFramebuffer(U,dt),h[U]=dt,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=dt),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=dt),!0):!1}function St(U,dt){let Q=_,ft=!1;if(U){Q=f.get(dt),Q===void 0&&(Q=[],f.set(dt,Q));const xt=U.textures;if(Q.length!==xt.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let st=0,Lt=xt.length;st<Lt;st++)Q[st]=n.COLOR_ATTACHMENT0+st;Q.length=xt.length,ft=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,ft=!0);ft&&n.drawBuffers(Q)}function Yt(U){return y!==U?(n.useProgram(U),y=U,!0):!1}const Xe={[Qr]:n.FUNC_ADD,[Ff]:n.FUNC_SUBTRACT,[Of]:n.FUNC_REVERSE_SUBTRACT};Xe[Bf]=n.MIN,Xe[zf]=n.MAX;const Kt={[kf]:n.ZERO,[Gf]:n.ONE,[Hf]:n.SRC_COLOR,[Qh]:n.SRC_ALPHA,[qf]:n.SRC_ALPHA_SATURATE,[$f]:n.DST_COLOR,[Wf]:n.DST_ALPHA,[Vf]:n.ONE_MINUS_SRC_COLOR,[jh]:n.ONE_MINUS_SRC_ALPHA,[Yf]:n.ONE_MINUS_DST_COLOR,[Xf]:n.ONE_MINUS_DST_ALPHA,[Kf]:n.CONSTANT_COLOR,[Zf]:n.ONE_MINUS_CONSTANT_COLOR,[Jf]:n.CONSTANT_ALPHA,[Qf]:n.ONE_MINUS_CONSTANT_ALPHA};function oe(U,dt,Q,ft,xt,st,Lt,Rt,ye,le){if(U===Ui){m===!0&&(Et(n.BLEND),m=!1);return}if(m===!1&&(it(n.BLEND),m=!0),U!==Uf){if(U!==p||le!==P){if((b!==Qr||g!==Qr)&&(n.blendEquation(n.FUNC_ADD),b=Qr,g=Qr),le)switch(U){case Gs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Au:n.blendFunc(n.ONE,n.ONE);break;case Ru:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:se("WebGLState: Invalid blending: ",U);break}else switch(U){case Gs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Au:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ru:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cu:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",U);break}T=null,M=null,x=null,R=null,v.set(0,0,0),w=0,p=U,P=le}return}xt=xt||dt,st=st||Q,Lt=Lt||ft,(dt!==b||xt!==g)&&(n.blendEquationSeparate(Xe[dt],Xe[xt]),b=dt,g=xt),(Q!==T||ft!==M||st!==x||Lt!==R)&&(n.blendFuncSeparate(Kt[Q],Kt[ft],Kt[st],Kt[Lt]),T=Q,M=ft,x=st,R=Lt),(Rt.equals(v)===!1||ye!==w)&&(n.blendColor(Rt.r,Rt.g,Rt.b,ye),v.copy(Rt),w=ye),p=U,P=!1}function Se(U,dt){U.side===an?Et(n.CULL_FACE):it(n.CULL_FACE);let Q=U.side===En;dt&&(Q=!Q),Jt(Q),U.blending===Gs&&U.transparent===!1?oe(Ui):oe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const ft=U.stencilWrite;a.setTest(ft),ft&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),_n(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?it(n.SAMPLE_ALPHA_TO_COVERAGE):Et(n.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(U){L!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),L=U)}function Re(U){U!==If?(it(n.CULL_FACE),U!==F&&(U===Tu?n.cullFace(n.BACK):U===Nf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Et(n.CULL_FACE),F=U}function Ze(U){U!==B&&(K&&n.lineWidth(U),B=U)}function _n(U,dt,Q){U?(it(n.POLYGON_OFFSET_FILL),(I!==dt||k!==Q)&&(I=dt,k=Q,o.getReversed()&&(dt=-dt),n.polygonOffset(dt,Q))):Et(n.POLYGON_OFFSET_FILL)}function Le(U){U?it(n.SCISSOR_TEST):Et(n.SCISSOR_TEST)}function ke(U){U===void 0&&(U=n.TEXTURE0+$-1),j!==U&&(n.activeTexture(U),j=U)}function O(U,dt,Q){Q===void 0&&(j===null?Q=n.TEXTURE0+$-1:Q=j);let ft=rt[Q];ft===void 0&&(ft={type:void 0,texture:void 0},rt[Q]=ft),(ft.type!==U||ft.texture!==dt)&&(j!==Q&&(n.activeTexture(Q),j=Q),n.bindTexture(U,dt||Z[U]),ft.type=U,ft.texture=dt)}function nn(){const U=rt[j];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function he(){try{n.compressedTexImage2D(...arguments)}catch(U){se("WebGLState:",U)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(U){se("WebGLState:",U)}}function S(){try{n.texSubImage2D(...arguments)}catch(U){se("WebGLState:",U)}}function z(){try{n.texSubImage3D(...arguments)}catch(U){se("WebGLState:",U)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(U){se("WebGLState:",U)}}function q(){try{n.compressedTexSubImage3D(...arguments)}catch(U){se("WebGLState:",U)}}function at(){try{n.texStorage2D(...arguments)}catch(U){se("WebGLState:",U)}}function ct(){try{n.texStorage3D(...arguments)}catch(U){se("WebGLState:",U)}}function J(){try{n.texImage2D(...arguments)}catch(U){se("WebGLState:",U)}}function tt(){try{n.texImage3D(...arguments)}catch(U){se("WebGLState:",U)}}function ut(U){return d[U]!==void 0?d[U]:n.getParameter(U)}function Pt(U,dt){d[U]!==dt&&(n.pixelStorei(U,dt),d[U]=dt)}function pt(U){Me.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Me.copy(U))}function ht(U){ne.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ne.copy(U))}function Dt(U,dt){let Q=l.get(dt);Q===void 0&&(Q=new WeakMap,l.set(dt,Q));let ft=Q.get(U);ft===void 0&&(ft=n.getUniformBlockIndex(dt,U.name),Q.set(U,ft))}function It(U,dt){const ft=l.get(dt).get(U);c.get(dt)!==ft&&(n.uniformBlockBinding(dt,ft,U.__bindingPointIndex),c.set(dt,ft))}function Ht(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},j=null,rt={},h={},f=new WeakMap,_=[],y=null,m=!1,p=null,b=null,T=null,M=null,g=null,x=null,R=null,v=new qt(0,0,0),w=0,P=!1,L=null,F=null,B=null,I=null,k=null,Me.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:it,disable:Et,bindFramebuffer:Ot,drawBuffers:St,useProgram:Yt,setBlending:oe,setMaterial:Se,setFlipSided:Jt,setCullFace:Re,setLineWidth:Ze,setPolygonOffset:_n,setScissorTest:Le,activeTexture:ke,bindTexture:O,unbindTexture:nn,compressedTexImage2D:he,compressedTexImage3D:C,texImage2D:J,texImage3D:tt,pixelStorei:Pt,getParameter:ut,updateUBOMapping:Dt,uniformBlockBinding:It,texStorage2D:at,texStorage3D:ct,texSubImage2D:S,texSubImage3D:z,compressedTexSubImage2D:V,compressedTexSubImage3D:q,scissor:pt,viewport:ht,reset:Ht}}function Sx(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new gt,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,S){return _?new OffscreenCanvas(C,S):ca("canvas")}function m(C,S,z){let V=1;const q=he(C);if((q.width>z||q.height>z)&&(V=z/Math.max(q.width,q.height)),V<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const at=Math.floor(V*q.width),ct=Math.floor(V*q.height);h===void 0&&(h=y(at,ct));const J=S?y(at,ct):h;return J.width=at,J.height=ct,J.getContext("2d").drawImage(C,0,0,at,ct),Nt("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+at+"x"+ct+")."),J}else return"data"in C&&Nt("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),C;return C}function p(C){return C.generateMipmaps}function b(C){n.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(C,S,z,V,q,at=!1){if(C!==null){if(n[C]!==void 0)return n[C];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ct;V&&(ct=t.get("EXT_texture_norm16"),ct||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=S;if(S===n.RED&&(z===n.FLOAT&&(J=n.R32F),z===n.HALF_FLOAT&&(J=n.R16F),z===n.UNSIGNED_BYTE&&(J=n.R8),z===n.UNSIGNED_SHORT&&ct&&(J=ct.R16_EXT),z===n.SHORT&&ct&&(J=ct.R16_SNORM_EXT)),S===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.R8UI),z===n.UNSIGNED_SHORT&&(J=n.R16UI),z===n.UNSIGNED_INT&&(J=n.R32UI),z===n.BYTE&&(J=n.R8I),z===n.SHORT&&(J=n.R16I),z===n.INT&&(J=n.R32I)),S===n.RG&&(z===n.FLOAT&&(J=n.RG32F),z===n.HALF_FLOAT&&(J=n.RG16F),z===n.UNSIGNED_BYTE&&(J=n.RG8),z===n.UNSIGNED_SHORT&&ct&&(J=ct.RG16_EXT),z===n.SHORT&&ct&&(J=ct.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RG8UI),z===n.UNSIGNED_SHORT&&(J=n.RG16UI),z===n.UNSIGNED_INT&&(J=n.RG32UI),z===n.BYTE&&(J=n.RG8I),z===n.SHORT&&(J=n.RG16I),z===n.INT&&(J=n.RG32I)),S===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RGB8UI),z===n.UNSIGNED_SHORT&&(J=n.RGB16UI),z===n.UNSIGNED_INT&&(J=n.RGB32UI),z===n.BYTE&&(J=n.RGB8I),z===n.SHORT&&(J=n.RGB16I),z===n.INT&&(J=n.RGB32I)),S===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),z===n.UNSIGNED_INT&&(J=n.RGBA32UI),z===n.BYTE&&(J=n.RGBA8I),z===n.SHORT&&(J=n.RGBA16I),z===n.INT&&(J=n.RGBA32I)),S===n.RGB&&(z===n.UNSIGNED_SHORT&&ct&&(J=ct.RGB16_EXT),z===n.SHORT&&ct&&(J=ct.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),S===n.RGBA){const tt=at?la:te.getTransfer(q);z===n.FLOAT&&(J=n.RGBA32F),z===n.HALF_FLOAT&&(J=n.RGBA16F),z===n.UNSIGNED_BYTE&&(J=tt===de?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&ct&&(J=ct.RGBA16_EXT),z===n.SHORT&&ct&&(J=ct.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function g(C,S){let z;return C?S===null||S===xi||S===Qs?z=n.DEPTH24_STENCIL8:S===pi?z=n.DEPTH32F_STENCIL8:S===Js&&(z=n.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===xi||S===Qs?z=n.DEPTH_COMPONENT24:S===pi?z=n.DEPTH_COMPONENT32F:S===Js&&(z=n.DEPTH_COMPONENT16),z}function x(C,S){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==en&&C.minFilter!==cn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function R(C){const S=C.target;S.removeEventListener("dispose",R),w(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&d.delete(S)}function v(C){const S=C.target;S.removeEventListener("dispose",v),L(S)}function w(C){const S=i.get(C);if(S.__webglInit===void 0)return;const z=C.source,V=f.get(z);if(V){const q=V[S.__cacheKey];q.usedTimes--,q.usedTimes===0&&P(C),Object.keys(V).length===0&&f.delete(z)}i.remove(C)}function P(C){const S=i.get(C);n.deleteTexture(S.__webglTexture);const z=C.source,V=f.get(z);delete V[S.__cacheKey],o.memory.textures--}function L(C){const S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(S.__webglFramebuffer[V]))for(let q=0;q<S.__webglFramebuffer[V].length;q++)n.deleteFramebuffer(S.__webglFramebuffer[V][q]);else n.deleteFramebuffer(S.__webglFramebuffer[V]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[V])}else{if(Array.isArray(S.__webglFramebuffer))for(let V=0;V<S.__webglFramebuffer.length;V++)n.deleteFramebuffer(S.__webglFramebuffer[V]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let V=0;V<S.__webglColorRenderbuffer.length;V++)S.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[V]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=C.textures;for(let V=0,q=z.length;V<q;V++){const at=i.get(z[V]);at.__webglTexture&&(n.deleteTexture(at.__webglTexture),o.memory.textures--),i.remove(z[V])}i.remove(C)}let F=0;function B(){F=0}function I(){return F}function k(C){F=C}function $(){const C=F;return C>=r.maxTextures&&Nt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures),F+=1,C}function K(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function nt(C,S){const z=i.get(C);if(C.isVideoTexture&&O(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){const V=C.image;if(V===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Et(z,C,S);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+S)}function Y(C,S){const z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Et(z,C,S);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+S)}function j(C,S){const z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Et(z,C,S);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+S)}function rt(C,S){const z=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){Ot(z,C,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+S)}const lt={[Gl]:n.REPEAT,[Ii]:n.CLAMP_TO_EDGE,[Hl]:n.MIRRORED_REPEAT},bt={[en]:n.NEAREST,[ep]:n.NEAREST_MIPMAP_NEAREST,[_o]:n.NEAREST_MIPMAP_LINEAR,[cn]:n.LINEAR,[Wa]:n.LINEAR_MIPMAP_NEAREST,[fr]:n.LINEAR_MIPMAP_LINEAR},Me={[sp]:n.NEVER,[up]:n.ALWAYS,[op]:n.LESS,[kc]:n.LEQUAL,[ap]:n.EQUAL,[Gc]:n.GEQUAL,[lp]:n.GREATER,[cp]:n.NOTEQUAL};function ne(C,S){if(S.type===pi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===cn||S.magFilter===Wa||S.magFilter===_o||S.magFilter===fr||S.minFilter===cn||S.minFilter===Wa||S.minFilter===_o||S.minFilter===fr)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,lt[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,lt[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,lt[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,bt[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,bt[S.minFilter]),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Me[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===en||S.minFilter!==_o&&S.minFilter!==fr||S.type===pi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ae(C,S){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",R));const V=S.source;let q=f.get(V);q===void 0&&(q={},f.set(V,q));const at=K(S);if(at!==C.__cacheKey){q[at]===void 0&&(q[at]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),q[at].usedTimes++;const ct=q[C.__cacheKey];ct!==void 0&&(q[C.__cacheKey].usedTimes--,ct.usedTimes===0&&P(S)),C.__cacheKey=at,C.__webglTexture=q[at].texture}return z}function Z(C,S,z){return Math.floor(Math.floor(C/z)/S)}function it(C,S,z,V){const at=C.updateRanges;if(at.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,z,V,S.data);else{at.sort((Pt,pt)=>Pt.start-pt.start);let ct=0;for(let Pt=1;Pt<at.length;Pt++){const pt=at[ct],ht=at[Pt],Dt=pt.start+pt.count,It=Z(ht.start,S.width,4),Ht=Z(pt.start,S.width,4);ht.start<=Dt+1&&It===Ht&&Z(ht.start+ht.count-1,S.width,4)===It?pt.count=Math.max(pt.count,ht.start+ht.count-pt.start):(++ct,at[ct]=ht)}at.length=ct+1;const J=e.getParameter(n.UNPACK_ROW_LENGTH),tt=e.getParameter(n.UNPACK_SKIP_PIXELS),ut=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let Pt=0,pt=at.length;Pt<pt;Pt++){const ht=at[Pt],Dt=Math.floor(ht.start/4),It=Math.ceil(ht.count/4),Ht=Dt%S.width,U=Math.floor(Dt/S.width),dt=It,Q=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Ht),e.pixelStorei(n.UNPACK_SKIP_ROWS,U),e.texSubImage2D(n.TEXTURE_2D,0,Ht,U,dt,Q,z,V,S.data)}C.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,J),e.pixelStorei(n.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(n.UNPACK_SKIP_ROWS,ut)}}function Et(C,S,z){let V=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(V=n.TEXTURE_3D);const q=ae(C,S),at=S.source;e.bindTexture(V,C.__webglTexture,n.TEXTURE0+z);const ct=i.get(at);if(at.version!==ct.__version||q===!0){if(e.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const Q=te.getPrimaries(te.workingColorSpace),ft=S.colorSpace===Ji?null:te.getPrimaries(S.colorSpace),xt=S.colorSpace===Ji||Q===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let tt=m(S.image,!1,r.maxTextureSize);tt=nn(S,tt);const ut=s.convert(S.format,S.colorSpace),Pt=s.convert(S.type);let pt=M(S.internalFormat,ut,Pt,S.normalized,S.colorSpace,S.isVideoTexture);ne(V,S);let ht;const Dt=S.mipmaps,It=S.isVideoTexture!==!0,Ht=ct.__version===void 0||q===!0,U=at.dataReady,dt=x(S,tt);if(S.isDepthTexture)pt=g(S.format===pr,S.type),Ht&&(It?e.texStorage2D(n.TEXTURE_2D,1,pt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,pt,tt.width,tt.height,0,ut,Pt,null));else if(S.isDataTexture)if(Dt.length>0){It&&Ht&&e.texStorage2D(n.TEXTURE_2D,dt,pt,Dt[0].width,Dt[0].height);for(let Q=0,ft=Dt.length;Q<ft;Q++)ht=Dt[Q],It?U&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,ht.width,ht.height,ut,Pt,ht.data):e.texImage2D(n.TEXTURE_2D,Q,pt,ht.width,ht.height,0,ut,Pt,ht.data);S.generateMipmaps=!1}else It?(Ht&&e.texStorage2D(n.TEXTURE_2D,dt,pt,tt.width,tt.height),U&&it(S,tt,ut,Pt)):e.texImage2D(n.TEXTURE_2D,0,pt,tt.width,tt.height,0,ut,Pt,tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){It&&Ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,pt,Dt[0].width,Dt[0].height,tt.depth);for(let Q=0,ft=Dt.length;Q<ft;Q++)if(ht=Dt[Q],S.format!==Qn)if(ut!==null)if(It){if(U)if(S.layerUpdates.size>0){const xt=ch(ht.width,ht.height,S.format,S.type);for(const st of S.layerUpdates){const Lt=ht.data.subarray(st*xt/ht.data.BYTES_PER_ELEMENT,(st+1)*xt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,st,ht.width,ht.height,1,ut,Lt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ht.width,ht.height,tt.depth,ut,ht.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,pt,ht.width,ht.height,tt.depth,0,ht.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ht.width,ht.height,tt.depth,ut,Pt,ht.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Q,pt,ht.width,ht.height,tt.depth,0,ut,Pt,ht.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{It&&Ht&&e.texStorage2D(n.TEXTURE_2D,dt,pt,Dt[0].width,Dt[0].height);for(let Q=0,ft=Dt.length;Q<ft;Q++)ht=Dt[Q],S.format!==Qn?ut!==null?It?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,ht.width,ht.height,ut,ht.data):e.compressedTexImage2D(n.TEXTURE_2D,Q,pt,ht.width,ht.height,0,ht.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?U&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,ht.width,ht.height,ut,Pt,ht.data):e.texImage2D(n.TEXTURE_2D,Q,pt,ht.width,ht.height,0,ut,Pt,ht.data)}else if(S.isDataArrayTexture)if(It){if(Ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,pt,tt.width,tt.height,tt.depth),U)if(S.layerUpdates.size>0){const Q=ch(tt.width,tt.height,S.format,S.type);for(const ft of S.layerUpdates){const xt=tt.data.subarray(ft*Q/tt.data.BYTES_PER_ELEMENT,(ft+1)*Q/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ft,tt.width,tt.height,1,ut,Pt,xt)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ut,Pt,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,pt,tt.width,tt.height,tt.depth,0,ut,Pt,tt.data);else if(S.isData3DTexture)It?(Ht&&e.texStorage3D(n.TEXTURE_3D,dt,pt,tt.width,tt.height,tt.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ut,Pt,tt.data)):e.texImage3D(n.TEXTURE_3D,0,pt,tt.width,tt.height,tt.depth,0,ut,Pt,tt.data);else if(S.isFramebufferTexture){if(Ht)if(It)e.texStorage2D(n.TEXTURE_2D,dt,pt,tt.width,tt.height);else{let Q=tt.width,ft=tt.height;for(let xt=0;xt<dt;xt++)e.texImage2D(n.TEXTURE_2D,xt,pt,Q,ft,0,ut,Pt,null),Q>>=1,ft>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){const Q=n.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),tt.parentNode!==Q){Q.appendChild(tt),d.add(S),Q.onpaint=ft=>{const xt=ft.changedElements;for(const st of d)xt.includes(st.image)&&(st.needsUpdate=!0)},Q.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,tt);else{const xt=n.RGBA,st=n.RGBA,Lt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,xt,st,Lt,tt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(It&&Ht){const Q=he(Dt[0]);e.texStorage2D(n.TEXTURE_2D,dt,pt,Q.width,Q.height)}for(let Q=0,ft=Dt.length;Q<ft;Q++)ht=Dt[Q],It?U&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,ut,Pt,ht):e.texImage2D(n.TEXTURE_2D,Q,pt,ut,Pt,ht);S.generateMipmaps=!1}else if(It){if(Ht){const Q=he(tt);e.texStorage2D(n.TEXTURE_2D,dt,pt,Q.width,Q.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut,Pt,tt)}else e.texImage2D(n.TEXTURE_2D,0,pt,ut,Pt,tt);p(S)&&b(V),ct.__version=at.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Ot(C,S,z){if(S.image.length!==6)return;const V=ae(C,S),q=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+z);const at=i.get(q);if(q.version!==at.__version||V===!0){e.activeTexture(n.TEXTURE0+z);const ct=te.getPrimaries(te.workingColorSpace),J=S.colorSpace===Ji?null:te.getPrimaries(S.colorSpace),tt=S.colorSpace===Ji||ct===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);const ut=S.isCompressedTexture||S.image[0].isCompressedTexture,Pt=S.image[0]&&S.image[0].isDataTexture,pt=[];for(let st=0;st<6;st++)!ut&&!Pt?pt[st]=m(S.image[st],!0,r.maxCubemapSize):pt[st]=Pt?S.image[st].image:S.image[st],pt[st]=nn(S,pt[st]);const ht=pt[0],Dt=s.convert(S.format,S.colorSpace),It=s.convert(S.type),Ht=M(S.internalFormat,Dt,It,S.normalized,S.colorSpace),U=S.isVideoTexture!==!0,dt=at.__version===void 0||V===!0,Q=q.dataReady;let ft=x(S,ht);ne(n.TEXTURE_CUBE_MAP,S);let xt;if(ut){U&&dt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Ht,ht.width,ht.height);for(let st=0;st<6;st++){xt=pt[st].mipmaps;for(let Lt=0;Lt<xt.length;Lt++){const Rt=xt[Lt];S.format!==Qn?Dt!==null?U?Q&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt,0,0,Rt.width,Rt.height,Dt,Rt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt,Ht,Rt.width,Rt.height,0,Rt.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt,0,0,Rt.width,Rt.height,Dt,It,Rt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt,Ht,Rt.width,Rt.height,0,Dt,It,Rt.data)}}}else{if(xt=S.mipmaps,U&&dt){xt.length>0&&ft++;const st=he(pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Ht,st.width,st.height)}for(let st=0;st<6;st++)if(Pt){U?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,pt[st].width,pt[st].height,Dt,It,pt[st].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ht,pt[st].width,pt[st].height,0,Dt,It,pt[st].data);for(let Lt=0;Lt<xt.length;Lt++){const ye=xt[Lt].image[st].image;U?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt+1,0,0,ye.width,ye.height,Dt,It,ye.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt+1,Ht,ye.width,ye.height,0,Dt,It,ye.data)}}else{U?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Dt,It,pt[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ht,Dt,It,pt[st]);for(let Lt=0;Lt<xt.length;Lt++){const Rt=xt[Lt];U?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt+1,0,0,Dt,It,Rt.image[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt+1,Ht,Dt,It,Rt.image[st])}}}p(S)&&b(n.TEXTURE_CUBE_MAP),at.__version=q.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function St(C,S,z,V,q,at){const ct=s.convert(z.format,z.colorSpace),J=s.convert(z.type),tt=M(z.internalFormat,ct,J,z.normalized,z.colorSpace),ut=i.get(S),Pt=i.get(z);if(Pt.__renderTarget=S,!ut.__hasExternalTextures){const pt=Math.max(1,S.width>>at),ht=Math.max(1,S.height>>at);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?e.texImage3D(q,at,tt,pt,ht,S.depth,0,ct,J,null):e.texImage2D(q,at,tt,pt,ht,0,ct,J,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),ke(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,q,Pt.__webglTexture,0,Le(S)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,q,Pt.__webglTexture,at),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Yt(C,S,z){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer){const V=S.depthTexture,q=V&&V.isDepthTexture?V.type:null,at=g(S.stencilBuffer,q),ct=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ke(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le(S),at,S.width,S.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le(S),at,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,at,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ct,n.RENDERBUFFER,C)}else{const V=S.textures;for(let q=0;q<V.length;q++){const at=V[q],ct=s.convert(at.format,at.colorSpace),J=s.convert(at.type),tt=M(at.internalFormat,ct,J,at.normalized,at.colorSpace);ke(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le(S),tt,S.width,S.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le(S),tt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,tt,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Xe(C,S,z){const V=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=i.get(S.depthTexture);if(q.__renderTarget=S,(!q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V){if(q.__webglInit===void 0&&(q.__webglInit=!0,S.depthTexture.addEventListener("dispose",R)),q.__webglTexture===void 0){q.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),ne(n.TEXTURE_CUBE_MAP,S.depthTexture);const ut=s.convert(S.depthTexture.format),Pt=s.convert(S.depthTexture.type);let pt;S.depthTexture.format===zi?pt=n.DEPTH_COMPONENT24:S.depthTexture.format===pr&&(pt=n.DEPTH24_STENCIL8);for(let ht=0;ht<6;ht++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,pt,S.width,S.height,0,ut,Pt,null)}}else nt(S.depthTexture,0);const at=q.__webglTexture,ct=Le(S),J=V?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,tt=S.depthTexture.format===pr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===zi)ke(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,J,at,0,ct):n.framebufferTexture2D(n.FRAMEBUFFER,tt,J,at,0);else if(S.depthTexture.format===pr)ke(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,J,at,0,ct):n.framebufferTexture2D(n.FRAMEBUFFER,tt,J,at,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Kt(C){const S=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const V=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),V){const q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,V.removeEventListener("dispose",q)};V.addEventListener("dispose",q),S.__depthDisposeCallback=q}S.__boundDepthTexture=V}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(z)for(let V=0;V<6;V++)Xe(S.__webglFramebuffer[V],C,V);else{const V=C.texture.mipmaps;V&&V.length>0?Xe(S.__webglFramebuffer[0],C,0):Xe(S.__webglFramebuffer,C,0)}else if(z){S.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[V]),S.__webglDepthbuffer[V]===void 0)S.__webglDepthbuffer[V]=n.createRenderbuffer(),Yt(S.__webglDepthbuffer[V],C,!1);else{const q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=S.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,at)}}else{const V=C.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Yt(S.__webglDepthbuffer,C,!1);else{const q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,at)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(C,S,z){const V=i.get(C);S!==void 0&&St(V.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Kt(C)}function Se(C){const S=C.texture,z=i.get(C),V=i.get(S);C.addEventListener("dispose",v);const q=C.textures,at=C.isWebGLCubeRenderTarget===!0,ct=q.length>1;if(ct||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=S.version,o.memory.textures++),at){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let tt=0;tt<S.mipmaps.length;tt++)z.__webglFramebuffer[J][tt]=n.createFramebuffer()}else z.__webglFramebuffer[J]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<S.mipmaps.length;J++)z.__webglFramebuffer[J]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ct)for(let J=0,tt=q.length;J<tt;J++){const ut=i.get(q[J]);ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&ke(C)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<q.length;J++){const tt=q[J];z.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[J]);const ut=s.convert(tt.format,tt.colorSpace),Pt=s.convert(tt.type),pt=M(tt.internalFormat,ut,Pt,tt.normalized,tt.colorSpace,C.isXRRenderTarget===!0),ht=Le(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,pt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,z.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Yt(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(at){e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),ne(n.TEXTURE_CUBE_MAP,S);for(let J=0;J<6;J++)if(S.mipmaps&&S.mipmaps.length>0)for(let tt=0;tt<S.mipmaps.length;tt++)St(z.__webglFramebuffer[J][tt],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,tt);else St(z.__webglFramebuffer[J],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(S)&&b(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let J=0,tt=q.length;J<tt;J++){const ut=q[J],Pt=i.get(ut);let pt=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(pt,Pt.__webglTexture),ne(pt,ut),St(z.__webglFramebuffer,C,ut,n.COLOR_ATTACHMENT0+J,pt,0),p(ut)&&b(pt)}e.unbindTexture()}else{let J=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(J,V.__webglTexture),ne(J,S),S.mipmaps&&S.mipmaps.length>0)for(let tt=0;tt<S.mipmaps.length;tt++)St(z.__webglFramebuffer[tt],C,S,n.COLOR_ATTACHMENT0,J,tt);else St(z.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,J,0);p(S)&&b(J),e.unbindTexture()}C.depthBuffer&&Kt(C)}function Jt(C){const S=C.textures;for(let z=0,V=S.length;z<V;z++){const q=S[z];if(p(q)){const at=T(C),ct=i.get(q).__webglTexture;e.bindTexture(at,ct),b(at),e.unbindTexture()}}}const Re=[],Ze=[];function _n(C){if(C.samples>0){if(ke(C)===!1){const S=C.textures,z=C.width,V=C.height;let q=n.COLOR_BUFFER_BIT;const at=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=i.get(C),J=S.length>1;if(J)for(let ut=0;ut<S.length;ut++)e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);const tt=C.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let ut=0;ut<S.length;ut++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);const Pt=i.get(S[ut]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pt,0)}n.blitFramebuffer(0,0,z,V,0,0,z,V,q,n.NEAREST),c===!0&&(Re.length=0,Ze.length=0,Re.push(n.COLOR_ATTACHMENT0+ut),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(Re.push(at),Ze.push(at),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ze)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Re))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let ut=0;ut<S.length;ut++){e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);const Pt=i.get(S[ut]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,Pt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){const S=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Le(C){return Math.min(r.maxSamples,C.samples)}function ke(C){const S=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function O(C){const S=o.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function nn(C,S){const z=C.colorSpace,V=C.format,q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==aa&&z!==Ji&&(te.getTransfer(z)===de?(V!==Qn||q!==Cn)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",z)),S}function he(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=$,this.resetTextureUnits=B,this.getTextureUnits=I,this.setTextureUnits=k,this.setTexture2D=nt,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=rt,this.rebindTextures=oe,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=_n,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=ke,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function yx(n,t){function e(i,r=Ji){let s;const o=te.getTransfer(r);if(i===Cn)return n.UNSIGNED_BYTE;if(i===Uc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Fc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ud)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ld)return n.BYTE;if(i===cd)return n.SHORT;if(i===Js)return n.UNSIGNED_SHORT;if(i===Nc)return n.INT;if(i===xi)return n.UNSIGNED_INT;if(i===pi)return n.FLOAT;if(i===Mi)return n.HALF_FLOAT;if(i===dd)return n.ALPHA;if(i===fd)return n.RGB;if(i===Qn)return n.RGBA;if(i===zi)return n.DEPTH_COMPONENT;if(i===pr)return n.DEPTH_STENCIL;if(i===pd)return n.RED;if(i===Oc)return n.RED_INTEGER;if(i===yr)return n.RG;if(i===Bc)return n.RG_INTEGER;if(i===zc)return n.RGBA_INTEGER;if(i===Jo||i===Qo||i===jo||i===ta)if(o===de)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Jo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Jo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ta)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vl||i===Wl||i===Xl||i===$l)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$l)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yl||i===ql||i===Kl||i===Zl||i===Jl||i===sa||i===Ql)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Yl||i===ql)return o===de?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Kl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Zl)return s.COMPRESSED_R11_EAC;if(i===Jl)return s.COMPRESSED_SIGNED_R11_EAC;if(i===sa)return s.COMPRESSED_RG11_EAC;if(i===Ql)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===jl||i===tc||i===ec||i===nc||i===ic||i===rc||i===sc||i===oc||i===ac||i===lc||i===cc||i===uc||i===hc||i===dc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===jl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===tc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ec)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ic)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===oc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ac)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===dc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fc||i===pc||i===mc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===fc)return o===de?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===mc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gc||i===_c||i===oa||i===vc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===gc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===_c)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===oa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const bx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ex=`
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

}`;class wx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new wd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new bi({vertexShader:bx,fragmentShader:Ex,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ft(new si(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tx extends er{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,_=null;const y=typeof XRWebGLBinding<"u",m=new wx,p={},b=e.getContextAttributes();let T=null,M=null;const g=[],x=[],R=new gt;let v=null,w=null;const P=new $n;P.viewport=new Ue;const L=new $n;L.viewport=new Ue;const F=[P,L],B=new Im;let I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let it=g[Z];return it===void 0&&(it=new Ja,g[Z]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Z){let it=g[Z];return it===void 0&&(it=new Ja,g[Z]=it),it.getGripSpace()},this.getHand=function(Z){let it=g[Z];return it===void 0&&(it=new Ja,g[Z]=it),it.getHandSpace()};function $(Z){const it=x.indexOf(Z.inputSource);if(it===-1)return;const Et=g[it];Et!==void 0&&(Et.update(Z.inputSource,Z.frame,l||o),Et.dispatchEvent({type:Z.type,data:Z.inputSource}))}function K(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",nt);for(let Z=0;Z<g.length;Z++){const it=x[Z];it!==null&&(x[Z]=null,g[Z].disconnect(it))}I=null,k=null,m.reset();for(const Z in p)delete p[Z];if(t.setRenderTarget(T),f=null,h=null,d=null,r=null,M=null,ae.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(R.width,R.height,!1),w!==null){const Z=w.camera;Z.fov=w.fov,Z.zoom=w.zoom,Z.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(r,e)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(T=t.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",K),r.addEventListener("inputsourceschange",nt),b.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Ot=null,St=null;b.depth&&(St=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=b.stencil?pr:zi,Ot=b.stencil?Qs:xi);const Yt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Yt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new jn(h.textureWidth,h.textureHeight,{format:Qn,type:Cn,depthTexture:new eo(h.textureWidth,h.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Et={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,Et),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new jn(f.framebufferWidth,f.framebufferHeight,{format:Qn,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),ae.setContext(r),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(Z){for(let it=0;it<Z.removed.length;it++){const Et=Z.removed[it],Ot=x.indexOf(Et);Ot>=0&&(x[Ot]=null,g[Ot].disconnect(Et))}for(let it=0;it<Z.added.length;it++){const Et=Z.added[it];let Ot=x.indexOf(Et);if(Ot===-1){for(let Yt=0;Yt<g.length;Yt++)if(Yt>=x.length){x.push(Et),Ot=Yt;break}else if(x[Yt]===null){x[Yt]=Et,Ot=Yt;break}if(Ot===-1)break}const St=g[Ot];St&&St.connect(Et)}}const Y=new A,j=new A;function rt(Z,it,Et){Y.setFromMatrixPosition(it.matrixWorld),j.setFromMatrixPosition(Et.matrixWorld);const Ot=Y.distanceTo(j),St=it.projectionMatrix.elements,Yt=Et.projectionMatrix.elements,Xe=St[14]/(St[10]-1),Kt=St[14]/(St[10]+1),oe=(St[9]+1)/St[5],Se=(St[9]-1)/St[5],Jt=(St[8]-1)/St[0],Re=(Yt[8]+1)/Yt[0],Ze=Xe*Jt,_n=Xe*Re,Le=Ot/(-Jt+Re),ke=Le*-Jt;if(it.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ke),Z.translateZ(Le),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),St[10]===-1)Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const O=Xe+Le,nn=Kt+Le,he=Ze-ke,C=_n+(Ot-ke),S=oe*Kt/nn*O,z=Se*Kt/nn*O;Z.projectionMatrix.makePerspective(he,C,S,z,O,nn),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function lt(Z,it){it===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(it.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let it=Z.near,Et=Z.far;m.texture!==null&&(m.depthNear>0&&(it=m.depthNear),m.depthFar>0&&(Et=m.depthFar)),B.near=L.near=P.near=it,B.far=L.far=P.far=Et,(I!==B.near||k!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,k=B.far),B.layers.mask=Z.layers.mask|6,P.layers.mask=B.layers.mask&-5,L.layers.mask=B.layers.mask&-3;const Ot=Z.parent,St=B.cameras;lt(B,Ot);for(let Yt=0;Yt<St.length;Yt++)lt(St[Yt],Ot);St.length===2?rt(B,P,L):B.projectionMatrix.copy(P.projectionMatrix),w===null&&Z.isPerspectiveCamera&&(w={camera:Z,fov:Z.fov,zoom:Z.zoom}),bt(Z,B,Ot)};function bt(Z,it,Et){Et===null?Z.matrix.copy(it.matrixWorld):(Z.matrix.copy(Et.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(it.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=to*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(Z){c=Z,h!==null&&(h.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Z){return p[Z]};let Me=null;function ne(Z,it){if(u=it.getViewerPose(l||o),_=it,u!==null){const Et=u.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Ot=!1;Et.length!==B.cameras.length&&(B.cameras.length=0,Ot=!0);for(let Kt=0;Kt<Et.length;Kt++){const oe=Et[Kt];let Se=null;if(f!==null)Se=f.getViewport(oe);else{const Re=d.getViewSubImage(h,oe);Se=Re.viewport,Kt===0&&(t.setRenderTargetTextures(M,Re.colorTexture,Re.depthStencilTexture),t.setRenderTarget(M))}let Jt=F[Kt];Jt===void 0&&(Jt=new $n,Jt.layers.enable(Kt),Jt.viewport=new Ue,F[Kt]=Jt),Jt.matrix.fromArray(oe.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(oe.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(Se.x,Se.y,Se.width,Se.height),Kt===0&&(B.matrix.copy(Jt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ot===!0&&B.cameras.push(Jt)}const St=r.enabledFeatures;if(St&&St.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){d=i.getBinding();const Kt=d.getDepthInformation(Et[0]);Kt&&Kt.isValid&&Kt.texture&&m.init(Kt,r.renderState)}if(St&&St.includes("camera-access")&&y){t.state.unbindTexture(),d=i.getBinding();for(let Kt=0;Kt<Et.length;Kt++){const oe=Et[Kt].camera;if(oe){let Se=p[oe];Se||(Se=new wd,p[oe]=Se);const Jt=d.getCameraImage(oe);Se.sourceTexture=Jt}}}}for(let Et=0;Et<g.length;Et++){const Ot=x[Et],St=g[Et];Ot!==null&&St!==void 0&&St.update(Ot,it,l||o)}Me&&Me(Z,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),_=null}const ae=new Ld;ae.setAnimationLoop(ne),this.setAnimationLoop=function(Z){Me=Z},this.dispose=function(){}}}const Ax=new Ae,zd=new Bt;zd.set(-1,0,0,0,1,0,0,0,1);function Rx(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Cd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,T,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,b,T):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===En&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===En&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),T=b.envMap,M=b.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(zd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=T*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===En&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Cx(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,g){const x=g.program;i.uniformBlockBinding(M,x)}function l(M,g){let x=r[M.id];x===void 0&&(m(M),x=u(M),r[M.id]=x,M.addEventListener("dispose",b));const R=g.program;i.updateUBOMapping(M,R);const v=t.render.frame;s[M.id]!==v&&(h(M),s[M.id]=v)}function u(M){const g=d();M.__bindingPointIndex=g;const x=n.createBuffer(),R=M.__size,v=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,R,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,x),x}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const g=r[M.id],x=M.uniforms,R=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let v=0,w=x.length;v<w;v++){const P=x[v];if(Array.isArray(P))for(let L=0,F=P.length;L<F;L++)f(P[L],v,L,R);else f(P,v,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,g,x,R){if(y(M,g,x,R)===!0){const v=M.__offset,w=M.value;if(Array.isArray(w)){let P=0;for(let L=0;L<w.length;L++){const F=w[L],B=p(F);_(F,M.__data,P),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(P+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(w,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,M.__data)}}function _(M,g,x){typeof M=="number"||typeof M=="boolean"?g[0]=M:M.isMatrix3?(g[0]=M.elements[0],g[1]=M.elements[1],g[2]=M.elements[2],g[3]=0,g[4]=M.elements[3],g[5]=M.elements[4],g[6]=M.elements[5],g[7]=0,g[8]=M.elements[6],g[9]=M.elements[7],g[10]=M.elements[8],g[11]=0):ArrayBuffer.isView(M)?g.set(new M.constructor(M.buffer,M.byteOffset,g.length)):M.toArray(g,x)}function y(M,g,x,R){const v=M.value,w=g+"_"+x;if(R[w]===void 0)return typeof v=="number"||typeof v=="boolean"?R[w]=v:ArrayBuffer.isView(v)?R[w]=v.slice():R[w]=v.clone(),!0;{const P=R[w];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return R[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(P.equals(v)===!1)return P.copy(v),!0}}return!1}function m(M){const g=M.uniforms;let x=0;const R=16;for(let w=0,P=g.length;w<P;w++){const L=Array.isArray(g[w])?g[w]:[g[w]];for(let F=0,B=L.length;F<B;F++){const I=L[F],k=Array.isArray(I.value)?I.value:[I.value];for(let $=0,K=k.length;$<K;$++){const nt=k[$],Y=p(nt),j=x%R,rt=j%Y.boundary,lt=j+rt;x+=rt,lt!==0&&R-lt<Y.storage&&(x+=R-lt),I.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=Y.storage}}}const v=x%R;return v>0&&(x+=R-v),M.__size=x,M.__cache={},this}function p(M){const g={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(g.boundary=4,g.storage=4):M.isVector2?(g.boundary=8,g.storage=8):M.isVector3||M.isColor?(g.boundary=16,g.storage=12):M.isVector4?(g.boundary=16,g.storage=16):M.isMatrix3?(g.boundary=48,g.storage=48):M.isMatrix4?(g.boundary=64,g.storage=64):M.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(g.boundary=16,g.storage=M.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",M),g}function b(M){const g=M.target;g.removeEventListener("dispose",b);const x=o.indexOf(g.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function T(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:c,update:l,dispose:T}}const Px=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ui=null;function Dx(){return ui===null&&(ui=new em(Px,16,16,yr,Mi),ui.name="DFG_LUT",ui.minFilter=cn,ui.magFilter=cn,ui.wrapS=Ii,ui.wrapT=Ii,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}class Lx{constructor(t={}){const{canvas:e=dp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Cn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const y=f,m=new Set([zc,Bc,Oc]),p=new Set([Cn,xi,Js,Qs,Uc,Fc]),b=new Uint32Array(4),T=new Int32Array(4),M=new A;let g=null,x=null;const R=[],v=[];let w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let L=!1,F=null,B=null,I=null,k=null;this._outputColorSpace=Sn;let $=0,K=0,nt=null,Y=-1,j=null;const rt=new Ue,lt=new Ue;let bt=null;const Me=new qt(0);let ne=0,ae=e.width,Z=e.height,it=1,Et=null,Ot=null;const St=new Ue(0,0,ae,Z),Yt=new Ue(0,0,ae,Z);let Xe=!1;const Kt=new $c;let oe=!1,Se=!1;const Jt=new Ae,Re=new A,Ze=new Ue,_n={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function ke(){return nt===null?it:1}let O=i;function nn(E,N){return e.getContext(E,N)}let he,C,S,z,V,q,at,ct,J,tt,ut,Pt,pt,ht,Dt,It,Ht,U,dt,Q,ft,xt,st;try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Lc}`),e.addEventListener("webglcontextlost",ye,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",kn,!1),O===null){const N="webgl2";if(O=nn(N,E),O===null)throw nn(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Lt()}catch(E){throw e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",kn,!1),se("WebGLRenderer: "+E.message),E}function Lt(){he=new D_(O),he.init(),ft=new yx(O,he),C=new S_(O,he,t,ft),S=new Mx(O,he),C.reversedDepthBuffer&&h&&S.buffers.depth.setReversed(!0),B=O.createFramebuffer(),I=O.createFramebuffer(),k=O.createFramebuffer(),z=new N_(O),V=new ox,q=new Sx(O,he,S,V,C,ft,z),at=new P_(P),ct=new Fm(O),xt=new x_(O,ct),J=new L_(O,ct,z,xt),tt=new F_(O,J,ct,xt,z),U=new U_(O,C,q),Dt=new y_(V),ut=new sx(P,at,he,C,xt,Dt),Pt=new Rx(P,V),pt=new lx,ht=new px(he),Ht=new v_(P,at,S,tt,_,c),It=new xx(P,tt,C),st=new Cx(O,z,C,S),dt=new M_(O,he,z),Q=new I_(O,he,z),z.programs=ut.programs,P.capabilities=C,P.extensions=he,P.properties=V,P.renderLists=pt,P.shadowMap=It,P.state=S,P.info=z}y!==Cn&&(w=new B_(y,e.width,e.height,a,r,s));const Rt=new Tx(P,O);this.xr=Rt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=he.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=he.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(E){E!==void 0&&(it=E,this.setSize(ae,Z,!1))},this.getSize=function(E){return E.set(ae,Z)},this.setSize=function(E,N,X=!0){if(Rt.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=E,Z=N,e.width=Math.floor(E*it),e.height=Math.floor(N*it),X===!0&&(e.style.width=E+"px",e.style.height=N+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(ae*it,Z*it).floor()},this.setDrawingBufferSize=function(E,N,X){ae=E,Z=N,it=X,e.width=Math.floor(E*X),e.height=Math.floor(N*X),this.setViewport(0,0,E,N)},this.setEffects=function(E){if(y===Cn){se("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let N=0;N<E.length;N++)if(E[N].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(rt)},this.getViewport=function(E){return E.copy(St)},this.setViewport=function(E,N,X,G){E.isVector4?St.set(E.x,E.y,E.z,E.w):St.set(E,N,X,G),S.viewport(rt.copy(St).multiplyScalar(it).round())},this.getScissor=function(E){return E.copy(Yt)},this.setScissor=function(E,N,X,G){E.isVector4?Yt.set(E.x,E.y,E.z,E.w):Yt.set(E,N,X,G),S.scissor(lt.copy(Yt).multiplyScalar(it).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(E){S.setScissorTest(Xe=E)},this.setOpaqueSort=function(E){Et=E},this.setTransparentSort=function(E){Ot=E},this.getClearColor=function(E){return E.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor(...arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,X=!0){let G=0;if(E){let H=!1;if(nt!==null){const vt=nt.texture.format;H=m.has(vt)}if(H){const vt=nt.texture.type,yt=p.has(vt),_t=Ht.getClearColor(),wt=Ht.getClearAlpha(),Ct=_t.r,Wt=_t.g,Zt=_t.b;yt?(b[0]=Ct,b[1]=Wt,b[2]=Zt,b[3]=wt,O.clearBufferuiv(O.COLOR,0,b)):(T[0]=Ct,T[1]=Wt,T[2]=Zt,T[3]=wt,O.clearBufferiv(O.COLOR,0,T))}else G|=O.COLOR_BUFFER_BIT}N&&(G|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),F=E},this.dispose=function(){e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",kn,!1),Ht.dispose(),pt.dispose(),ht.dispose(),V.dispose(),at.dispose(),tt.dispose(),xt.dispose(),st.dispose(),ut.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",_u),Rt.removeEventListener("sessionend",vu),sr.stop()};function ye(E){E.preventDefault(),ua("WebGLRenderer: Context Lost."),L=!0}function le(){ua("WebGLRenderer: Context Restored."),L=!1;const E=z.autoReset,N=It.enabled,X=It.autoUpdate,G=It.needsUpdate,H=It.type;Lt(),z.autoReset=E,It.enabled=N,It.autoUpdate=X,It.needsUpdate=G,It.type=H}function kn(E){se("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ai(E){const N=E.target;N.removeEventListener("dispose",ai),Ef(N)}function Ef(E){wf(E),V.remove(E)}function wf(E){const N=V.get(E).programs;N!==void 0&&(N.forEach(function(X){ut.releaseProgram(X)}),E.isShaderMaterial&&ut.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,X,G,H,vt){N===null&&(N=_n);const yt=H.isMesh&&H.matrixWorld.determinantAffine()<0,_t=Rf(E,N,X,G,H);S.setMaterial(G,yt);let wt=X.index,Ct=1;if(G.wireframe===!0){if(wt=J.getWireframeAttribute(X),wt===void 0)return;Ct=2}const Wt=X.drawRange,Zt=X.attributes.position;let Tt=Wt.start*Ct,ce=(Wt.start+Wt.count)*Ct;vt!==null&&(Tt=Math.max(Tt,vt.start*Ct),ce=Math.min(ce,(vt.start+vt.count)*Ct)),wt!==null?(Tt=Math.max(Tt,0),ce=Math.min(ce,wt.count)):Zt!=null&&(Tt=Math.max(Tt,0),ce=Math.min(ce,Zt.count));const Ge=ce-Tt;if(Ge<0||Ge===1/0)return;xt.setup(H,G,_t,X,wt);let Ee,_e=dt;if(wt!==null&&(Ee=ct.get(wt),_e=Q,_e.setIndex(Ee)),H.isMesh)G.wireframe===!0?(S.setLineWidth(G.wireframeLinewidth*ke()),_e.setMode(O.LINES)):_e.setMode(O.TRIANGLES);else if(H.isLine){let rn=G.linewidth;rn===void 0&&(rn=1),S.setLineWidth(rn*ke()),H.isLineSegments?_e.setMode(O.LINES):H.isLineLoop?_e.setMode(O.LINE_LOOP):_e.setMode(O.LINE_STRIP)}else H.isPoints?_e.setMode(O.POINTS):H.isSprite&&_e.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(he.get("WEBGL_multi_draw"))_e.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const rn=H._multiDrawStarts,Mt=H._multiDrawCounts,dn=H._multiDrawCount,re=wt?ct.get(wt).bytesPerElement:1,In=V.get(G).currentProgram.getUniforms();for(let li=0;li<dn;li++)In.setValue(O,"_gl_DrawID",li),_e.render(rn[li]/re,Mt[li])}else if(H.isInstancedMesh)_e.renderInstances(Tt,Ge,H.count);else if(X.isInstancedBufferGeometry){const rn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Mt=Math.min(X.instanceCount,rn);_e.renderInstances(Tt,Ge,Mt)}else _e.render(Tt,Ge)};function gu(E,N,X,G){F!==null&&E.isNodeMaterial&&F.setObject(G,E),oe===!0&&Dt.setState(E,X,!1),E.transparent===!0&&E.side===an&&E.forceSinglePass===!1?(E.side=En,E.needsUpdate=!0,go(E,N,G),E.side=Mr,E.needsUpdate=!0,go(E,N,G),E.side=an):go(E,N,G)}this.compile=function(E,N,X=null){X===null&&(X=E),F!==null&&F.renderStart(E,N,X),x=ht.get(X),x.init(N),v.push(x),X.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(x.pushLight(H),H.castShadow&&x.pushShadow(H))}),E!==X&&E.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(x.pushLight(H),H.castShadow&&x.pushShadow(H))}),x.setupLights(),F!==null&&F.updateLights(x.state.lightsArray),Se=this.localClippingEnabled,oe=Dt.init(this.clippingPlanes,Se),oe===!0&&Dt.setGlobalState(this.clippingPlanes,N),F!==null&&It.render(x.state.shadowsArray,X,N);const G=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const vt=H.material;if(vt)if(Array.isArray(vt))for(let yt=0;yt<vt.length;yt++){const _t=vt[yt];gu(_t,X,N,H),G.add(_t)}else gu(vt,X,N,H),G.add(vt)}),x=v.pop(),F!==null&&F.renderEnd(),G},this.compileAsync=function(E,N,X=null){const G=this.compile(E,N,X);return new Promise(H=>{function vt(){if(G.forEach(function(yt){const wt=V.get(yt).currentProgram;(wt===void 0||wt.isReady())&&G.delete(yt)}),G.size===0){H(E);return}setTimeout(vt,10)}he.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let ka=null;function Tf(E){ka&&ka(E)}function _u(){sr.stop()}function vu(){sr.start()}const sr=new Ld;sr.setAnimationLoop(Tf),typeof self<"u"&&sr.setContext(self),this.setAnimationLoop=function(E){ka=E,Rt.setAnimationLoop(E),E===null?sr.stop():sr.start()},Rt.addEventListener("sessionstart",_u),Rt.addEventListener("sessionend",vu),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(E,N);const X=Rt.enabled===!0&&Rt.isPresenting===!0,G=w!==null&&(nt===null||X)&&w.begin(P,nt);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(N),N=Rt.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,N,nt),x=ht.get(E,v.length),x.init(N),x.state.textureUnits=q.getTextureUnits(),v.push(x),Jt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Kt.setFromProjectionMatrix(Jt,mi,N.reversedDepth),Se=this.localClippingEnabled,oe=Dt.init(this.clippingPlanes,Se),g=pt.get(E,R.length),g.init(),R.push(g),Rt.enabled===!0&&Rt.isPresenting===!0){const yt=P.xr.getDepthSensingMesh();yt!==null&&Ga(yt,N,-1/0,P.sortObjects)}Ga(E,N,0,P.sortObjects),g.finish(),F!==null&&F.updateLights(x.state.lightsArray),P.sortObjects===!0&&g.sort(Et,Ot),Le=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,Le&&Ht.addToRenderList(g,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),oe===!0&&Dt.beginShadows();const H=x.state.shadowsArray;if(It.render(H,E,N),oe===!0&&Dt.endShadows(),(G&&w.hasRenderPass())===!1){const yt=g.opaque,_t=g.transmissive;if(x.setupLights(),N.isArrayCamera){const wt=N.cameras;if(_t.length>0)for(let Ct=0,Wt=wt.length;Ct<Wt;Ct++){const Zt=wt[Ct];Mu(yt,_t,E,Zt)}Le&&Ht.render(E);for(let Ct=0,Wt=wt.length;Ct<Wt;Ct++){const Zt=wt[Ct];xu(g,E,Zt,Zt.viewport)}}else _t.length>0&&Mu(yt,_t,E,N),Le&&Ht.render(E),xu(g,E,N)}nt!==null&&K===0&&(q.updateMultisampleRenderTarget(nt),q.updateRenderTargetMipmap(nt)),G&&w.end(P),E.isScene===!0&&E.onAfterRender(P,E,N),xt.resetDefaultState(),Y=-1,j=null,v.pop(),v.length>0?(x=v[v.length-1],q.setTextureUnits(x.state.textureUnits),oe===!0&&Dt.setGlobalState(P.clippingPlanes,x.state.camera)):x=null,R.pop(),R.length>0?g=R[R.length-1]:g=null,F!==null&&F.renderEnd()};function Ga(E,N,X,G){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLightProbeGrid)x.pushLightProbeGrid(E);else if(E.isLight)x.pushLight(E),E.castShadow&&x.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(Kt)){G&&Ze.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Jt);const yt=tt.update(E),_t=E.material;_t.visible&&g.push(E,yt,_t,X,Ze.z,null,N)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(Kt))){const yt=tt.update(E),_t=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ze.copy(E.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Ze.copy(yt.boundingSphere.center)),Ze.applyMatrix4(E.matrixWorld).applyMatrix4(Jt)),Array.isArray(_t)){const wt=yt.groups;for(let Ct=0,Wt=wt.length;Ct<Wt;Ct++){const Zt=wt[Ct],Tt=_t[Zt.materialIndex];Tt&&Tt.visible&&g.push(E,yt,Tt,X,Ze.z,Zt,N)}}else _t.visible&&g.push(E,yt,_t,X,Ze.z,null,N)}}const vt=E.children;for(let yt=0,_t=vt.length;yt<_t;yt++)Ga(vt[yt],N,X,G)}function xu(E,N,X,G){const{opaque:H,transmissive:vt,transparent:yt}=E;x.setupLightsView(X),oe===!0&&Dt.setGlobalState(P.clippingPlanes,X),G&&S.viewport(rt.copy(G)),H.length>0&&mo(H,N,X),vt.length>0&&mo(vt,N,X),yt.length>0&&mo(yt,N,X),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Mu(E,N,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[G.id]===void 0){const Tt=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");x.state.transmissionRenderTarget[G.id]=new jn(1,1,{generateMipmaps:!0,type:Tt?Mi:Cn,minFilter:fr,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}const vt=x.state.transmissionRenderTarget[G.id],yt=G.viewport||rt;vt.setSize(yt.z*P.transmissionResolutionScale,yt.w*P.transmissionResolutionScale);const _t=P.getRenderTarget(),wt=P.getActiveCubeFace(),Ct=P.getActiveMipmapLevel();P.setRenderTarget(vt),P.getClearColor(Me),ne=P.getClearAlpha(),ne<1&&P.setClearColor(16777215,.5),P.clear(),Le&&Ht.render(X);const Wt=P.toneMapping;P.toneMapping=_i;const Zt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),x.setupLightsView(G),oe===!0&&Dt.setGlobalState(P.clippingPlanes,G),mo(E,X,G),q.updateMultisampleRenderTarget(vt),q.updateRenderTargetMipmap(vt),he.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let ce=0,Ge=N.length;ce<Ge;ce++){const Ee=N[ce],{object:_e,geometry:rn,material:Mt,group:dn}=Ee;if(Mt.side===an&&_e.layers.test(G.layers)){const re=Mt.side;Mt.side=En,Mt.needsUpdate=!0,Su(_e,X,G,rn,Mt,dn),Mt.side=re,Mt.needsUpdate=!0,Tt=!0}}Tt===!0&&(q.updateMultisampleRenderTarget(vt),q.updateRenderTargetMipmap(vt))}P.setRenderTarget(_t,wt,Ct),P.setClearColor(Me,ne),Zt!==void 0&&(G.viewport=Zt),P.toneMapping=Wt}function mo(E,N,X){const G=N.isScene===!0?N.overrideMaterial:null;for(let H=0,vt=E.length;H<vt;H++){const yt=E[H],{object:_t,geometry:wt,group:Ct}=yt;let Wt=yt.material;Wt.allowOverride===!0&&G!==null&&(Wt=G),_t.layers.test(X.layers)&&Su(_t,N,X,wt,Wt,Ct)}}function Su(E,N,X,G,H,vt){F!==null&&H.isNodeMaterial&&F.setObject(E,H),E.onBeforeRender(P,N,X,G,H,vt),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(P,N,X,G,E,vt),H.transparent===!0&&H.side===an&&H.forceSinglePass===!1?(H.side=En,H.needsUpdate=!0,P.renderBufferDirect(X,N,G,H,E,vt),H.side=Mr,H.needsUpdate=!0,P.renderBufferDirect(X,N,G,H,E,vt),H.side=an):P.renderBufferDirect(X,N,G,H,E,vt),E.onAfterRender(P,N,X,G,H,vt)}function go(E,N,X){N.isScene!==!0&&(N=_n);const G=V.get(E),H=x.state.lights,vt=x.state.shadowsArray,yt=H.state.version,_t=ut.getParameters(E,H.state,vt,N,X,x.state.lightProbeGridArray),wt=ut.getProgramCacheKey(_t);let Ct=G.programs;G.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?N.environment:null,G.fog=N.fog;const Wt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;G.envMap=at.get(E.envMap||G.environment,Wt),G.envMapRotation=G.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Ct===void 0&&(E.addEventListener("dispose",ai),Ct=new Map,G.programs=Ct);let Zt=Ct.get(wt);if(Zt!==void 0){if(G.currentProgram===Zt&&G.lightsStateVersion===yt)return bu(E,_t),Zt}else _t.uniforms=ut.getUniforms(E),F!==null&&E.isNodeMaterial&&F.build(E,X,_t),E.onBeforeCompile(_t,P),Zt=ut.acquireProgram(_t,wt),Ct.set(wt,Zt),G.uniforms=_t.uniforms;const Tt=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Tt.clippingPlanes=Dt.uniform),bu(E,_t),G.needsLights=Pf(E),G.lightsStateVersion=yt,G.needsLights&&(Tt.ambientLightColor.value=H.state.ambient,Tt.lightProbe.value=H.state.probe,Tt.sunLights.value=H.state.sun,Tt.sunLightShadows.value=H.state.sunShadow,Tt.directionalLights.value=H.state.directional,Tt.directionalLightShadows.value=H.state.directionalShadow,Tt.spotLights.value=H.state.spot,Tt.spotLightShadows.value=H.state.spotShadow,Tt.rectAreaLights.value=H.state.rectArea,Tt.ltc_1.value=H.state.rectAreaLTC1,Tt.ltc_2.value=H.state.rectAreaLTC2,Tt.pointLights.value=H.state.point,Tt.pointLightShadows.value=H.state.pointShadow,Tt.hemisphereLights.value=H.state.hemi,Tt.sunShadowMatrix.value=H.state.sunShadowMatrix,Tt.sunShadowCascade.value=H.state.sunShadowCascade,Tt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Tt.spotLightMatrix.value=H.state.spotLightMatrix,Tt.spotLightMap.value=H.state.spotLightMap,Tt.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=x.state.lightProbeGridArray.length>0,G.currentProgram=Zt,G.uniformsList=null,Zt}function yu(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=ea.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function bu(E,N){const X=V.get(E);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Af(E,N){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;M.setFromMatrixPosition(N.matrixWorld);for(let X=0,G=E.length;X<G;X++){const H=E[X];if(H.texture!==null&&H.boundingBox.containsPoint(M))return H}return null}function Rf(E,N,X,G,H){N.isScene!==!0&&(N=_n),q.resetTextureUnits();const vt=N.fog,yt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?N.environment:null,_t=nt===null?P.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:te.workingColorSpace,wt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ct=at.get(G.envMap||yt,wt),Wt=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Zt=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Tt=!!X.morphAttributes.position,ce=!!X.morphAttributes.normal,Ge=!!X.morphAttributes.color;let Ee=_i;G.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Ee=P.toneMapping);const _e=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,rn=_e!==void 0?_e.length:0,Mt=V.get(G),dn=x.state.lights;if(oe===!0&&(Se===!0||E!==j)){const be=E===j&&G.id===Y;Dt.setState(G,E,be)}let re=!1;G.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==dn.state.version||Mt.outputColorSpace!==_t||H.isBatchedMesh&&Mt.batching===!1||!H.isBatchedMesh&&Mt.batching===!0||H.isBatchedMesh&&Mt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Mt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Mt.instancing===!1||!H.isInstancedMesh&&Mt.instancing===!0||H.isSkinnedMesh&&Mt.skinning===!1||!H.isSkinnedMesh&&Mt.skinning===!0||H.isInstancedMesh&&Mt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Mt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Mt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Mt.instancingMorph===!1&&H.morphTexture!==null||Mt.envMap!==Ct||G.fog===!0&&Mt.fog!==vt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Dt.numPlanes||Mt.numIntersection!==Dt.numIntersection)||Mt.vertexAlphas!==Wt||Mt.vertexTangents!==Zt||Mt.morphTargets!==Tt||Mt.morphNormals!==ce||Mt.morphColors!==Ge||Mt.toneMapping!==Ee||Mt.morphTargetsCount!==rn||!!Mt.lightProbeGrid!=x.state.lightProbeGridArray.length>0)&&(re=!0):(re=!0,Mt.__version=G.version);let In=Mt.currentProgram;re===!0&&(In=go(G,N,H),F&&G.isNodeMaterial&&F.onUpdateProgram(G,In,Mt));let li=!1,Hi=!1,Dr=!1;const ge=In.getUniforms(),Be=Mt.uniforms;if(S.useProgram(In.program)&&(li=!0,Hi=!0,Dr=!0),G.id!==Y&&(Y=G.id,Hi=!0),Mt.needsLights){const be=Af(x.state.lightProbeGridArray,H);Mt.lightProbeGrid!==be&&(Mt.lightProbeGrid=be,Hi=!0)}if(li||j!==E){S.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ge.setValue(O,"projectionMatrix",E.projectionMatrix),ge.setValue(O,"viewMatrix",E.matrixWorldInverse);const Wi=ge.map.cameraPosition;Wi!==void 0&&Wi.setValue(O,Re.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&ge.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ge.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),j!==E&&(j=E,Hi=!0,Dr=!0)}if(Mt.needsLights&&(dn.state.sunShadowMap.length>0&&ge.setValue(O,"sunShadowMap",dn.state.sunShadowMap,q),dn.state.directionalShadowMap.length>0&&ge.setValue(O,"directionalShadowMap",dn.state.directionalShadowMap,q),dn.state.spotShadowMap.length>0&&ge.setValue(O,"spotShadowMap",dn.state.spotShadowMap,q),dn.state.pointShadowMap.length>0&&ge.setValue(O,"pointShadowMap",dn.state.pointShadowMap,q)),H.isSkinnedMesh){ge.setOptional(O,H,"bindMatrix"),ge.setOptional(O,H,"bindMatrixInverse");const be=H.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),ge.setValue(O,"boneTexture",be.boneTexture,q))}H.isBatchedMesh&&(ge.setOptional(O,H,"batchingTexture"),ge.setValue(O,"batchingTexture",H._matricesTexture,q),ge.setOptional(O,H,"batchingIdTexture"),ge.setValue(O,"batchingIdTexture",H._indirectTexture,q),ge.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&ge.setValue(O,"batchingColorTexture",H._colorsTexture,q));const Vi=X.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&U.update(H,X,In),(Hi||Mt.receiveShadow!==H.receiveShadow)&&(Mt.receiveShadow=H.receiveShadow,ge.setValue(O,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&N.environment!==null&&(Be.envMapIntensity.value=N.environmentIntensity),Be.dfgLUT!==void 0&&(Be.dfgLUT.value=Dx()),Hi){if(ge.setValue(O,"toneMappingExposure",P.toneMappingExposure),Mt.needsLights&&Cf(Be,Dr),vt&&G.fog===!0&&Pt.refreshFogUniforms(Be,vt),Pt.refreshMaterialUniforms(Be,G,it,Z,x.state.transmissionRenderTarget[E.id]),Mt.needsLights&&Mt.lightProbeGrid){const be=Mt.lightProbeGrid;Be.probesSH.value=be.texture,Be.probesMin.value.copy(be.boundingBox.min),Be.probesMax.value.copy(be.boundingBox.max),Be.probesResolution.value.copy(be.resolution)}ea.upload(O,yu(Mt),Be,q)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ea.upload(O,yu(Mt),Be,q),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ge.setValue(O,"center",H.center),ge.setValue(O,"modelViewMatrix",H.modelViewMatrix),ge.setValue(O,"normalMatrix",H.normalMatrix),ge.setValue(O,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){const be=G.uniformsGroups;for(let Wi=0,Lr=be.length;Wi<Lr;Wi++){const wu=be[Wi];st.update(wu,In),st.bind(wu,In)}}return In}function Cf(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.sunLights.needsUpdate=N,E.sunLightShadows.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Pf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(E,N,X){const G=V.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),V.get(E.texture).__webglTexture=N,V.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){const X=V.get(E);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,X=0){nt=E,$=N,K=X;let G=null,H=!1,vt=!1;if(E){const _t=V.get(E);if(_t.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(O.FRAMEBUFFER,_t.__webglFramebuffer),rt.copy(E.viewport),lt.copy(E.scissor),bt=E.scissorTest,S.viewport(rt),S.scissor(lt),S.setScissorTest(bt),Y=-1;return}else if(_t.__webglFramebuffer===void 0)q.setupRenderTarget(E);else if(_t.__hasExternalTextures)q.rebindTextures(E,V.get(E.texture).__webglTexture,V.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Wt=E.depthTexture;if(_t.__boundDepthTexture!==Wt){if(Wt!==null&&V.has(Wt)&&(E.width!==Wt.image.width||E.height!==Wt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(E)}}const wt=E.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(vt=!0);const Ct=V.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ct[N])?G=Ct[N][X]:G=Ct[N],H=!0):E.samples>0&&q.useMultisampledRTT(E)===!1?G=V.get(E).__webglMultisampledFramebuffer:Array.isArray(Ct)?G=Ct[X]:G=Ct,rt.copy(E.viewport),lt.copy(E.scissor),bt=E.scissorTest}else rt.copy(St).multiplyScalar(it).floor(),lt.copy(Yt).multiplyScalar(it).floor(),bt=Xe;if(X!==0&&(G=B),S.bindFramebuffer(O.FRAMEBUFFER,G)&&S.drawBuffers(E,G),S.viewport(rt),S.scissor(lt),S.setScissorTest(bt),H){const _t=V.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,_t.__webglTexture,X)}else if(vt){const _t=N;for(let wt=0;wt<E.textures.length;wt++){const Ct=V.get(E.textures[wt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+wt,Ct.__webglTexture,X,_t)}}else if(E!==null&&X!==0){const _t=V.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,_t.__webglTexture,X)}Y=-1};function Eu(E){const N=V.get(E);return(N.__readFormat!==E.format||N.__readType!==E.type)&&(N.__readFormat=E.format,N.__readType=E.type,N.__formatReadable=C.textureFormatReadable(E.format),N.__typeReadable=C.textureTypeReadable(E.type)),N}this.readRenderTargetPixels=function(E,N,X,G,H,vt,yt,_t=0){if(!(E&&E.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=V.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&yt!==void 0&&(wt=wt[yt]),wt){S.bindFramebuffer(O.FRAMEBUFFER,wt);try{const Ct=E.textures[_t],Wt=Ct.format,Zt=Ct.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+_t);const Tt=Eu(Ct);if(Tt.__formatReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt.__typeReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-G&&X>=0&&X<=E.height-H&&O.readPixels(N,X,G,H,ft.convert(Wt),ft.convert(Zt),vt)}finally{const Ct=nt!==null?V.get(nt).__webglFramebuffer:null;S.bindFramebuffer(O.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(E,N,X,G,H,vt,yt,_t=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=V.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&yt!==void 0&&(wt=wt[yt]),wt)if(N>=0&&N<=E.width-G&&X>=0&&X<=E.height-H){S.bindFramebuffer(O.FRAMEBUFFER,wt);const Ct=E.textures[_t],Wt=Ct.format,Zt=Ct.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+_t);const Tt=Eu(Ct);if(Tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ce),O.bufferData(O.PIXEL_PACK_BUFFER,vt.byteLength,O.STREAM_READ),O.readPixels(N,X,G,H,ft.convert(Wt),ft.convert(Zt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const Ge=nt!==null?V.get(nt).__webglFramebuffer:null;S.bindFramebuffer(O.FRAMEBUFFER,Ge);const Ee=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await fp(O,Ee,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ce),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,vt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ce),O.deleteSync(Ee),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,X=0){const G=Math.pow(2,-X),H=Math.floor(E.image.width*G),vt=Math.floor(E.image.height*G),yt=N!==null?N.x:0,_t=N!==null?N.y:0;q.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,yt,_t,H,vt),S.unbindTexture()},this.copyTextureToTexture=function(E,N,X=null,G=null,H=0,vt=0){let yt,_t,wt,Ct,Wt,Zt,Tt,ce,Ge;const Ee=E.isCompressedTexture?E.mipmaps[vt]:E.image;if(X!==null)yt=X.max.x-X.min.x,_t=X.max.y-X.min.y,wt=X.isBox3?X.max.z-X.min.z:1,Ct=X.min.x,Wt=X.min.y,Zt=X.isBox3?X.min.z:0;else{const Be=Math.pow(2,-H);yt=Math.floor(Ee.width*Be),_t=Math.floor(Ee.height*Be),E.isDataArrayTexture?wt=Ee.depth:E.isData3DTexture?wt=Math.floor(Ee.depth*Be):wt=1,Ct=0,Wt=0,Zt=0}G!==null?(Tt=G.x,ce=G.y,Ge=G.z):(Tt=0,ce=0,Ge=0);const _e=ft.convert(N.format),rn=ft.convert(N.type);let Mt;N.isData3DTexture?(q.setTexture3D(N,0),Mt=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(q.setTexture2DArray(N,0),Mt=O.TEXTURE_2D_ARRAY):(q.setTexture2D(N,0),Mt=O.TEXTURE_2D),S.activeTexture(O.TEXTURE0),S.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),S.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),S.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);const dn=S.getParameter(O.UNPACK_ROW_LENGTH),re=S.getParameter(O.UNPACK_IMAGE_HEIGHT),In=S.getParameter(O.UNPACK_SKIP_PIXELS),li=S.getParameter(O.UNPACK_SKIP_ROWS),Hi=S.getParameter(O.UNPACK_SKIP_IMAGES);S.pixelStorei(O.UNPACK_ROW_LENGTH,Ee.width),S.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ee.height),S.pixelStorei(O.UNPACK_SKIP_PIXELS,Ct),S.pixelStorei(O.UNPACK_SKIP_ROWS,Wt),S.pixelStorei(O.UNPACK_SKIP_IMAGES,Zt);const Dr=E.isDataArrayTexture||E.isData3DTexture,ge=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){const Be=V.get(E),Vi=V.get(N),be=V.get(Be.__renderTarget),Wi=V.get(Vi.__renderTarget);S.bindFramebuffer(O.READ_FRAMEBUFFER,be.__webglFramebuffer),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Lr=0;Lr<wt;Lr++)Dr&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,V.get(E).__webglTexture,H,Zt+Lr),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,V.get(N).__webglTexture,vt,Ge+Lr)),O.blitFramebuffer(Ct,Wt,yt,_t,Tt,ce,yt,_t,O.DEPTH_BUFFER_BIT,O.NEAREST);S.bindFramebuffer(O.READ_FRAMEBUFFER,null),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||V.has(E)){const Be=V.get(E),Vi=V.get(N);S.bindFramebuffer(O.READ_FRAMEBUFFER,I),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,k);for(let be=0;be<wt;be++)Dr?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Be.__webglTexture,H,Zt+be):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Be.__webglTexture,H),ge?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Vi.__webglTexture,vt,Ge+be):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Vi.__webglTexture,vt),H!==0?O.blitFramebuffer(Ct,Wt,yt,_t,Tt,ce,yt,_t,O.COLOR_BUFFER_BIT,O.NEAREST):ge?O.copyTexSubImage3D(Mt,vt,Tt,ce,Ge+be,Ct,Wt,yt,_t):O.copyTexSubImage2D(Mt,vt,Tt,ce,Ct,Wt,yt,_t);S.bindFramebuffer(O.READ_FRAMEBUFFER,null),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ge?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(Mt,vt,Tt,ce,Ge,yt,_t,wt,_e,rn,Ee.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(Mt,vt,Tt,ce,Ge,yt,_t,wt,_e,Ee.data):O.texSubImage3D(Mt,vt,Tt,ce,Ge,yt,_t,wt,_e,rn,Ee):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,vt,Tt,ce,yt,_t,_e,rn,Ee.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,vt,Tt,ce,Ee.width,Ee.height,_e,Ee.data):O.texSubImage2D(O.TEXTURE_2D,vt,Tt,ce,yt,_t,_e,rn,Ee);S.pixelStorei(O.UNPACK_ROW_LENGTH,dn),S.pixelStorei(O.UNPACK_IMAGE_HEIGHT,re),S.pixelStorei(O.UNPACK_SKIP_PIXELS,In),S.pixelStorei(O.UNPACK_SKIP_ROWS,li),S.pixelStorei(O.UNPACK_SKIP_IMAGES,Hi),vt===0&&N.generateMipmaps&&O.generateMipmap(Mt),S.unbindTexture()},this.initRenderTarget=function(E){V.get(E).__webglFramebuffer===void 0&&q.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?q.setTextureCube(E,0):E.isData3DTexture?q.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?q.setTexture2DArray(E,0):q.setTexture2D(E,0),S.unbindTexture()},this.resetState=function(){$=0,K=0,nt=null,S.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}const Lh={type:"change"},jc={type:"start"},kd={type:"end"},Yo=new Xc,Ih=new Di,Ix=Math.cos(70*ue.DEG2RAD),$e=new A,vn=2*Math.PI,pe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wl=1e-6;class Nx extends Nm{constructor(t,e=null){super(t,e),this.state=pe.NONE,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:as.ROTATE,MIDDLE:as.DOLLY,RIGHT:as.PAN},this.touches={ONE:es.ROTATE,TWO:es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new Si,this._lastTargetPosition=new A,this._quat=new Si().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ah,this._sphericalDelta=new ah,this._scale=1,this._panOffset=new A,this._rotateStart=new gt,this._rotateEnd=new gt,this._rotateDelta=new gt,this._panStart=new gt,this._panEnd=new gt,this._panDelta=new gt,this._dollyStart=new gt,this._dollyEnd=new gt,this._dollyDelta=new gt,this._dollyDirection=new A,this._mouse=new gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Fx.bind(this),this._onPointerDown=Ux.bind(this),this._onPointerUp=Ox.bind(this),this._onContextMenu=Wx.bind(this),this._onMouseWheel=kx.bind(this),this._onKeyDown=Gx.bind(this),this._onTouchStart=Hx.bind(this),this._onTouchMove=Vx.bind(this),this._onMouseDown=Bx.bind(this),this._onMouseMove=zx.bind(this),this._interceptControlDown=Xx.bind(this),this._interceptControlUp=$x.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=pe.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Lh),this.update(),this.state=pe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;$e.copy(e).sub(this.target),$e.applyQuaternion(this._quat),this._spherical.setFromVector3($e),this.autoRotate&&this.state===pe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=vn:i>Math.PI&&(i-=vn),r<-Math.PI?r+=vn:r>Math.PI&&(r-=vn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if($e.setFromSpherical(this._spherical),$e.applyQuaternion(this._quatInverse),e.copy(this.target).add($e),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=$e.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new A(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=$e.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Yo.origin.copy(this.object.position),Yo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Yo.direction))<Ix?this.object.lookAt(this.target):(Ih.setFromNormalAndCoplanarPoint(this.object.up,this.target),Yo.intersectPlane(Ih,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>wl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wl||this._lastTargetPosition.distanceToSquared(this.target)>wl?(this.dispatchEvent(Lh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?vn/60*this.autoRotateSpeed*t:vn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){$e.setFromMatrixColumn(e,0),$e.multiplyScalar(-t),this._panOffset.add($e)}_panUp(t,e){this.screenSpacePanning===!0?$e.setFromMatrixColumn(e,1):($e.setFromMatrixColumn(e,0),$e.crossVectors(this.object.up,$e)),$e.multiplyScalar(t),this._panOffset.add($e)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;$e.copy(r).sub(this.target);let s=$e.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/e.clientHeight),this._rotateUp(vn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/e.clientHeight),this._rotateUp(vn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new gt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Ux(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Fx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Ox(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(kd),this.state=pe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Bx(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case as.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=pe.DOLLY;break;case as.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=pe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=pe.ROTATE}break;case as.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=pe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=pe.PAN}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(jc)}function zx(n){switch(this.state){case pe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case pe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case pe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function kx(n){this.enabled===!1||this.enableZoom===!1||this.state!==pe.NONE||(n.preventDefault(),this.dispatchEvent(jc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(kd))}function Gx(n){this.enabled!==!1&&this._handleKeyDown(n)}function Hx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case es.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=pe.TOUCH_ROTATE;break;case es.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=pe.TOUCH_PAN;break;default:this.state=pe.NONE}break;case 2:switch(this.touches.TWO){case es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=pe.TOUCH_DOLLY_PAN;break;case es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=pe.TOUCH_DOLLY_ROTATE;break;default:this.state=pe.NONE}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(jc)}function Vx(n){switch(this._trackPointer(n),this.state){case pe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case pe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case pe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case pe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=pe.NONE}}function Wx(n){this.enabled!==!1&&n.preventDefault()}function Xx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $x(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Fs=new A;function Un(n,t,e,i,r,s){const o=2*Math.PI*r/4,a=Math.max(s-2*r,0),c=Math.PI/4;Fs.copy(t),Fs[i]=0,Fs.normalize();const l=.5*o/(o+a),u=1-Fs.angleTo(n)/c;return Math.sign(Fs[e])===1?u*l:a/(o+a)+l+l*(1-u)}class tu extends nr{constructor(t=1,e=1,i=1,r=2,s=.1){const o=r*2+1;if(s=Math.min(t/2,e/2,i/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:r,radius:s},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new A,l=new A,u=new A(t,e,i).divideScalar(2).subScalar(s),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,_=d.length/6,y=new A,m=.5/o;for(let p=0,b=0;p<d.length;p+=3,b+=2)switch(c.fromArray(d,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[p+0]=u.x*Math.sign(c.x)+l.x*s,d[p+1]=u.y*Math.sign(c.y)+l.y*s,d[p+2]=u.z*Math.sign(c.z)+l.z*s,h[p+0]=l.x,h[p+1]=l.y,h[p+2]=l.z,Math.floor(p/_)){case 0:y.set(1,0,0),f[b+0]=Un(y,l,"z","y",s,i),f[b+1]=1-Un(y,l,"y","z",s,e);break;case 1:y.set(-1,0,0),f[b+0]=1-Un(y,l,"z","y",s,i),f[b+1]=1-Un(y,l,"y","z",s,e);break;case 2:y.set(0,1,0),f[b+0]=1-Un(y,l,"x","z",s,t),f[b+1]=Un(y,l,"z","x",s,i);break;case 3:y.set(0,-1,0),f[b+0]=1-Un(y,l,"x","z",s,t),f[b+1]=1-Un(y,l,"z","x",s,i);break;case 4:y.set(0,0,1),f[b+0]=1-Un(y,l,"x","y",s,t),f[b+1]=1-Un(y,l,"y","x",s,e);break;case 5:y.set(0,0,-1),f[b+0]=Un(y,l,"x","y",s,t),f[b+1]=1-Un(y,l,"y","x",s,e);break}}static fromJSON(t){return new tu(t.width,t.height,t.depth,t.segments,t.radius)}}function Yx(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,c=new Fe;let l=0;for(let u=0;u<n.length;++u){const d=n[u];let h=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(e){let u=0;const d=[];for(let h=0;h<n.length;++h){const f=n[h].index;for(let _=0;_<f.count;++_)d.push(f.getX(_)+u);u+=n[h].attributes.position.count}c.setIndex(d)}for(const u in s){const d=Nh(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(const u in o){const d=o[u][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<d;++h){const f=[];for(let y=0;y<o[u].length;++y)f.push(o[u][y][h]);const _=Nh(f);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(_)}}}return c}function Nh(n){let t,e,i,r=-1,s=0;for(let l=0;l<n.length;++l){const u=n[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}const o=new t(s),a=new ti(o,e,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const d=c/e;for(let h=0,f=u.count;h<f;h++)for(let _=0;_<e;_++){const y=u.getComponent(h,_);a.setComponent(h+d,_,y)}}else o.set(u.array,c);c+=u.count*e}return r!==void 0&&(a.gpuType=r),a}const Tl=new Map;function Ce(n){return Tl.has(n)||Tl.set(n,new gs({color:n,roughness:.85})),Tl.get(n)}function D(n,t,e,i,r,s,o,a,c=!1){const l=new Ft(c?new tu(r,s,o,2,Math.min(.09,r/4,s/4,o/4)):new nr(r,s,o),Ce(a));return l.position.set(t,e,i),l.castShadow=!0,l.receiveShadow=!0,n.add(l),l}function xn(n,t,e,i,r,s,o=[1,1,1]){const a=new Ft(new Ca(r,12,10),Ce(s));return a.position.set(t,e,i),a.scale.set(...o),a.castShadow=!0,n.add(a),a}function Uh(n){n.material=n.material.clone();const t=n.material;return t.transparent=!0,t.opacity=1,n.userData.dynamic=!0,n}function On(n,t,e,i,r,s=3,o="#f2c65a"){const a=document.createElement("canvas");a.width=s>=8?2048:1024,a.height=s>=8?512:256;const c=a.getContext("2d");if(c.scale(a.width/2048,a.height/512),c.fillStyle=o,c.fillRect(0,0,2048,512),c.fillStyle="#263f40",c.fillRect(0,0,2048,42),c.fillRect(0,470,2048,42),c.fillStyle="#233d42",c.textBaseline="middle",/MOVING EMPIRE/.test(t))c.beginPath(),c.roundRect(70,86,340,340,76),c.fill(),c.fillStyle=o,c.font="1000 230px Nunito, sans-serif",c.textAlign="center",c.fillText("M",240,270),c.fillStyle="#233d42",c.textAlign="left",c.font="1000 140px Nunito, sans-serif",c.fillText("MOVING EMPIRE",470,270);else{const h=Math.min(190,1660/Math.max(5,t.length)*2.15);c.font=`1000 ${h}px Nunito, sans-serif`,c.textAlign="center",c.fillText(t,1024,248)}const l=new Ed(a);l.colorSpace=Sn,l.anisotropy=8;const u=new me;u.position.set(e,i,r),n.add(u),D(u,0,0,-.035,s,s/4,.1,2506560,!0);const d=new Ft(new si(s*.94,s*.235),new ri({map:l,side:an}));d.position.z=.022,u.add(d);for(const h of[-s*.43,s*.43])xn(u,h,s*.085,.04,.035,16313807);return u}function qx(n,t,e=7391353,i=!1,r=0){const s=new me,o=i?2.5:3.45,a=i?1.5:2.05,c=document.createElement("canvas");c.width=768,c.height=500;const l=c.getContext("2d"),u=new Ed(c),d=/LOCKED|MAX/.test(t);u.colorSpace=Sn;const h=new Ft(new si(o,a),new ri({map:u,transparent:!0,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.y=.018,h.renderOrder=3,h.userData.owned=!0,s.add(h);const f=()=>{if(l.save(),l.translate(142,235),l.fillStyle=d?"#87918b":"#244456",l.strokeStyle=l.fillStyle,l.lineWidth=18,l.lineCap="round",l.lineJoin="round",/collect/i.test(n))l.beginPath(),l.arc(0,0,82,0,Math.PI*2),l.stroke(),l.font="1000 112px Nunito, sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillText("$",0,5);else if(/cargo|lining/i.test(n))l.strokeRect(-72,-52,144,112),l.beginPath(),l.moveTo(-52,-20),l.lineTo(52,-20),l.moveTo(-52,20),l.lineTo(52,20),l.stroke();else if(/truck|fleet/i.test(n)){l.fillRect(-70,-30,90,62),l.fillRect(20,-14,55,46);for(const m of[-42,47])l.beginPath(),l.arc(m,44,18,0,Math.PI*2),l.fill()}else/crew|strength|worker|hire/i.test(n)?(l.beginPath(),l.arc(0,-45,30,0,Math.PI*2),l.fill(),l.beginPath(),l.roundRect(-48,-5,96,82,28),l.fill()):/chair|assembly|paint|pack|wood|timber|mill/i.test(n)?(l.strokeRect(-42,-22,72,58),l.beginPath(),l.moveTo(-42,35),l.lineTo(-42,78),l.moveTo(30,35),l.lineTo(30,78),l.moveTo(-42,-22),l.lineTo(-42,-78),l.stroke()):/yard|factory|production|grounds/i.test(n)?(l.fillRect(-65,-42,130,112),l.fillStyle="#fff8e5",l.fillRect(-22,5,44,65),l.fillStyle=d?"#87918b":"#244456",l.beginPath(),l.moveTo(-82,-42),l.lineTo(0,-95),l.lineTo(82,-42),l.fill()):(l.strokeRect(-55,-68,110,136),l.beginPath(),l.moveTo(-28,-28),l.lineTo(30,-28),l.moveTo(-28,5),l.lineTo(30,5),l.moveTo(-28,38),l.lineTo(12,38),l.stroke());l.restore()};let _=-1;const y=m=>{const p=ue.clamp(m,0,1);if(Math.abs(_-p)<.004)return;_=p,s.userData.progress=p,l.clearRect(0,0,c.width,c.height),l.fillStyle=d?"#d4d6c9":"#fff4d3",l.beginPath(),l.roundRect(18,18,732,464,54),l.fill(),p>0&&(l.save(),l.beginPath(),l.roundRect(18,18,732,464,54),l.clip(),l.fillStyle="#75c995",l.fillRect(18,18,732*p,464),l.restore()),l.lineWidth=22,l.strokeStyle="#244456",l.beginPath(),l.roundRect(18,18,732,464,54),l.stroke(),l.fillStyle="#244456",l.beginPath(),l.roundRect(42,76,204,322,44),l.fillStyle="#ffffff80",l.fill(),f(),l.fillStyle="#244456",l.textAlign="left",l.textBaseline="middle";const b=(t.startsWith("$"),t),T=n.toUpperCase();l.font=`1000 ${T.length>19?43:T.length>13?50:58}px Nunito, sans-serif`,l.fillText(T,286,155,425),l.font=`1000 ${b.length>9?88:116}px Nunito, sans-serif`,l.fillText(b,286,292,425),p>0&&(l.fillStyle="#244456",l.font="900 34px Nunito, sans-serif",l.fillText(`${Math.round(p*100)}% FUNDED`,286,414,425)),u.needsUpdate=!0};return s.userData.setProgress=y,s.userData.padHalfWidth=o/2,s.userData.padHalfDepth=a/2,s.userData.graphicLabel=n,s.userData.hasPurposeIcon=!0,y(r),s}function Gd(n=14983231,t=0,e="standard",i=0){const r=new me,s=new me;r.add(s);const o=[15119758,10382672,13209191][t%3],a={standard:{shirt:n,trousers:3296353,cap:3234931,bib:15721405},build:{shirt:15899186,trousers:3754576,cap:16760120,bib:16747821},logistics:{shirt:4619086,trousers:3492681,cap:3368509,bib:15130549},workshop:{shirt:12144195,trousers:3160905,cap:3030864,bib:3754581},elite:{shirt:7492769,trousers:2698560,cap:15394287,bib:14277095}}[e]??{shirt:n,trousers:3296353,cap:3234931};n=a.shirt,xn(s,0,1.05,-.01,.37,n,[1,1.17,.86]),xn(s,0,.77,0,.32,a.trousers,[1,.56,.78]),xn(s,0,1.38,0,.13,o,[.72,.76,.7]),xn(s,0,1.65,.02,.36,o,[1,1.08,.93]),xn(s,-.35,1.65,.02,.08,o),xn(s,.35,1.65,.02,.08,o),xn(s,0,1.61,.35,.08,o);for(const f of[-.13,.13])xn(s,f,1.71,.324,.046,2435890),D(s,f,1.81,.32,.11,.035,.03,5323570,!0);const c=new Ft(new Qc(new Ad([new A(-.075,1.51,.294),new A(0,1.49,.302),new A(.075,1.51,.294)]),8,.009,5,!1),Ce(6899260));if(s.add(c),e!=="build"&&(xn(s,0,1.91,-.035,.35,a.cap,[1.04,.43,1.03]),xn(s,0,1.91,.29,.3,a.cap,[.95,.12,.54])),e==="build"){const f=new Ft(new wn(.39,.35,.18,16),Ce(16760120));f.position.set(0,2.03,-.04),f.castShadow=!0,s.add(f);const _=new Ft(new wn(.46,.46,.045,18),Ce(16760120));_.position.set(0,1.94,.05),_.castShadow=!0,s.add(_);for(const y of[-.24,.24])D(s,y,1.15,.31,.07,.4,.028,16771240);D(s,0,1.08,.31,.4,.055,.025,16773831,!0);for(const y of[-.17,.17])D(s,y,.78,.25,.12,.14,.08,14787127,!0);D(s,0,1.31,.341,.42,.075,.035,16772816,!0)}else if(e==="logistics")D(s,0,1.12,-.24,.54,.68,.25,3235387,!0),D(s,0,1.92,.335,.22,.17,.03,15525832,!0),D(s,0,1.15,.31,.22,.21,.03,15525832,!0),D(s,.3,1.05,.15,.13,.23,.12,4742219,!0),D(s,0,1.12,-.32,.42,.54,.22,4616010,!0),D(s,0,1.15,.347,.15,.15,.025,4949852,!0);else if(e==="workshop"){D(s,0,1.94,.335,.17,.035,.025,15196618,!0),D(s,.3,.82,.12,.13,.3,.13,9017244,!0),D(s,-.3,.83,.14,.13,.24,.15,13134403,!0),D(s,0,1.08,.31,.37,.18,.03,3425875,!0),D(s,0,.79,.22,.62,.085,.13,2503999,!0);for(const f of[-.2,.2])D(s,f,.79,.302,.11,.11,.045,12029537,!0)}else if(e==="elite"){D(s,0,1.18,.31,.21,.16,.035,9266644);for(const f of[-.36,.36])xn(s,f,1.75,0,.14,5653875);for(const f of[-.3,.3])D(s,f,1.13,.09,.15,.22,.37,9204411,!0);D(s,0,.87,.24,.4,.1,.08,10189009,!0),D(s,0,1.2,.352,.33,.27,.055,15985141,!0),D(s,0,1.17,.385,.12,.12,.025,9266644,!0);for(const f of[-.23,.23])D(s,f,.73,.2,.12,.15,.1,9204411,!0)}if(i>=2)for(const f of[-.3,.3])D(s,f,1.08,0,.12,.16,.36,2702147,!0);const l=[],u=[],d=[],h=[];for(const f of[-1,1]){const _=new me;_.position.set(f*.18,.7,0),s.add(_),D(_,0,-.14,0,.24,.3,.28,a.trousers,!0);const y=new me;y.position.y=-.29,_.add(y),D(y,0,-.13,0,.23,.29,.27,a.trousers,!0),D(y,0,-.3,.07,.28,.18,.4,e==="elite"?4603985:5132616,!0),d.push(y),l.push(_);const m=new me;m.position.set(f*.39,1.24,0),s.add(m),D(m,0,-.13,0,.22,.36,.27,n,!0);const p=new me;p.position.y=-.28,m.add(p),D(p,0,-.1,0,.18,.24,.2,o,!0),i>=1&&D(p,0,-.16,.06,.2,.17,.22,3160638,!0),xn(p,0,-.24,.015,.135,i>=1||e==="elite"?3225922:o),h.push(p),u.push(m)}return r.userData.rig={body:s,legs:l,arms:u},{root:r,animate(f,_,y=!1,m=!1){const p=m?13.5:8.4,b=m?.72:.42;s.position.y=_?Math.abs(Math.sin(f*p))*(m?.065:.035):Math.sin(f*1.8)*.008,s.rotation.z=_?Math.sin(f*p/2)*(m?.035:.018):0,s.rotation.x=m?.13:0,l.forEach((T,M)=>T.rotation.x=_?Math.sin(f*p+M*Math.PI)*b:0),d.forEach((T,M)=>T.rotation.x=_?Math.max(0,-Math.sin(f*p+M*Math.PI))*(m?.9:.4):0),h.forEach(T=>T.rotation.x=y?-.35:m?-.8:-.15),u.forEach((T,M)=>T.rotation.x=y?-1.12:_?-Math.sin(f*p+M*Math.PI)*(m?.62:.34):.02)}}}function Hd(n){const t=new me;if(n===0||n===1){const e=n===0?2.28:1.44,i=n===0?13400401:6396560;D(t,0,.46,0,e,.5,1.4,i,!0),D(t,0,.95,-.57,e,.83,.24,i,!0);for(const s of[-1,1])D(t,s*(e/2-.12),.73,0,.22,.48,1.4,i,!0),D(t,s*(e/2-.2),.12,.45,.12,.24,.12,6837063);const r=n===0?2:1;for(let s=0;s<r;s++)D(t,(s-(r-1)/2)*.95,.76,.02,n===0?.91:1.05,.17,1.01,n===0?14721135:9287842,!0)}else if(n===2)D(t,0,.76,0,1.45,1.05,.17,2440008,!0),D(t,0,.77,.096,1.29,.89,.02,6655645),D(t,0,.18,0,.14,.3,.14,2440008),D(t,0,.05,0,.6,.1,.5,2440008);else if(n===3)D(t,0,.36,0,.71,.72,.71,12489310,!0),D(t,0,.726,0,.14,.015,.71,15324324),On(t,"BOOKS",0,.4,.36,.55,"#dab989");else if(n===4){const e=new Ft(new wn(.29,.22,.49,12),Ce(14059109));e.position.y=.25,t.add(e);for(let i=0;i<7;i++){const r=i*2.4,s=xn(t,Math.sin(r)*.18,.8+i%3*.11,Math.cos(r)*.18,.23,i%2?7380055:4424296,[.45,1.6,.55]);s.rotation.z=Math.sin(r)*.65}}else if(n===5){D(t,0,.56,0,1.5,1.08,.72,11040848,!0);for(let e=0;e<3;e++)D(t,0,.24+e*.32,.371,1.36,.27,.035,12950638),D(t,0,.24+e*.32,.403,.3,.04,.04,4608076)}else if(n===6){const e=new Ft(new wn(.34,.4,.12,16),Ce(4215382));e.position.y=.06,t.add(e),D(t,0,.83,0,.08,1.55,.08,4215382);const i=new Ft(new co(.37,.62,16,1,!0),Ce(15321203));i.position.y=1.55,i.rotation.x=Math.PI,t.add(i)}else if(n===7)D(t,0,1.02,0,.72,1.95,.16,7756355,!0),D(t,0,1.02,.09,.56,1.7,.022,10207944,!0),D(t,0,.08,0,.72,.16,1.45,7756355,!0);else if(n===8){D(t,0,.78,0,2.35,1.42,1.22,3159611,!0),D(t,0,1.43,-.23,2.2,.18,.7,2435630,!0),D(t,0,.92,.61,2.15,.13,.38,15657437);for(let e=0;e<10;e++)D(t,-.972+e*.216,.996,.63,.207,.025,.32,16775657);for(const e of[0,1,3,4,5,7,8])D(t,-.864+e*.216,1.017,.52,.115,.038,.19,2435630);for(const e of[-.9,.9])D(t,e,.25,.2,.17,.5,.17,2435630)}else if(n===10){D(t,0,.34,0,.66,.68,.66,11257276,!0),D(t,0,.7,0,.7,.08,.7,15324316,!0);for(const e of[-.18,.18])for(const i of[-.17,.17]){const r=new Ft(new wn(.095,.075,.42,10),Ce(10409179));r.position.set(e,.53,i),t.add(r)}}else if(n===11){D(t,0,.33,0,.7,.66,.7,9399380,!0);for(let e=0;e<5;e++)D(t,-.2+e*.1,.7,0,.06,.08,.55,[6455171,12812390,14862731][e%3],!0)}else n===12?(D(t,0,.32,0,.68,.62,.64,3689557,!0),D(t,0,.65,0,.54,.09,.48,7906989,!0),D(t,0,.35,.335,.28,.22,.035,14730365,!0)):(D(t,0,.42,0,.72,.82,.72,13081188,!0),On(t,"FRAGILE",0,.45,.38,.72,"#efb36d"));return t}const Zr={front:.2,back:5.8,rampEnd:8.8,depth:7};function Vd(n=5,t=0,e="base",i=!0){const r=new me,s=new me,o=new me;s.position.set(3,0,.14),o.position.set(-3,0,-.14),s.add(o),r.add(s);const a=[],c=[];r.name="active-truck";const l=Zr.front+n*.8,u=l-Zr.front,d=(l+Zr.front)/2,h={base:{cab:15777101,box:t>1?16052194:14935256,trim:3822432,roof:16046464},city:{cab:15198169,box:15987176,trim:2647174,roof:13951198},build:{cab:15632185,box:14787421,trim:14968866,roof:15770440},premium:{cab:3423294,box:4278087,trim:13149004,roof:4868933}}[e]??{cab:15777087,box:16052194,trim:3768216,roof:14862703},f=h.cab,_=h.box;if(r.userData.bodyColor=f,i&&(Zr.back=l,Zr.rampEnd=l+2.2,Zr.depth=n),D(o,3,.55,d,3.3,.42,u+.2,3162186,!0),D(o,3,.735,d,3.2,.09,u,13350548),t>0){D(o,3,1.9,.15,3.3,2.65,.15,_);for(const M of[1.35,4.65]){D(o,M,.99,d,.1,.4,u+.2,_),D(o,M,2.71,d,.08,.1,u+.2,9808549);for(const g of[.15,l+.05])D(o,M,1.95,g,.09,1.8,.09,12240831)}}else{D(o,3,.88,.15,3.25,.22,.1,e==="base"?9010537:h.trim,!0);for(const M of[1.35,4.65])D(o,M,.88,d,.1,.22,u+.1,e==="base"?9010537:h.trim,!0)}const y=[];if(t>0)for(const M of[1.35,4.65])y.push(Uh(D(o,M,1.72,d,.07,1.82,u,_,!0)));D(r,3,.78,-1.05,3.2,.72,2.1,f,!0),D(r,3,1.03,-2.12,3.08,.55,.19,f,!0),D(r,3,1.42,-.03,3.2,1.55,.12,f,!0);for(const M of[1.45,4.55])for(const g of[-2.02,-.08])D(r,M,1.48,g,.18,1.45,.18,f,!0);const m=D(r,3,1.8,-2.12,2.82,.65,.04,6523029);m.material=new gs({color:7974585,transparent:!0,opacity:.55,roughness:.18,metalness:.05}),D(r,2.45,1.13,-1.25,.72,.72,.72,3362132,!0),D(r,3.55,1.13,-1.25,.72,.72,.72,3362132,!0),D(r,3,1.38,-1.84,2.5,.18,.45,2506051,!0);const p=new Ft(new Es(.24,.045,8,18),Ce(2439229));p.position.set(3.72,1.55,-1.65),p.rotation.x=Math.PI/2.8,r.add(p),D(r,3,2.03,-1.05,3.3,.14,2.2,e==="base"?16111479:h.cab,!0),D(r,3,.63,-2.16,3.15,.28,.16,4150615,!0),D(r,3,.91,-2.2,1.05,.2,.05,6517617,!0);for(const M of[1.78,4.22])D(r,M,1.04,-2.23,.48,.24,.05,16770720,!0),D(r,M,1.58,-2.19,.19,.13,.06,14253140,!0);for(const M of[1.25,4.75])D(r,M,1.65,-1.25,.22,.15,.38,3164235,!0);for(const M of[1.37,4.63]){const g=D(r,M,1.78,-1,.025,.55,1.5,6523029);g.material=new gs({color:7974585,transparent:!0,opacity:.42,roughness:.15});for(const x of[-1.2,l-.45]){const R=new me;R.position.set(M<3?1.17:4.83,.46,x),(x<0?r:o).add(R);const v=new Ft(new wn(.46,.46,.28,16),Ce(2504510));v.rotation.z=Math.PI/2,v.castShadow=!0;for(const L of[-1,1])D(v,0,L*.151,.19,.09,.025,.3,15255388);const w=new me;R.add(w),w.add(v);const P=new Ft(new wn(.23,.23,.3,12),Ce(10203048));P.rotation.z=Math.PI/2,w.add(P),a.push(w),x<0&&c.push(R)}}for(const M of[1.8,4.2])D(r,M,.95,-2.13,.45,.22,.06,16772529,!0);t===0&&D(r,3,.58,-2.29,3.2,.18,.15,h.trim,!0),D(r,3,.96,-2.305,1.26,.23,.045,e==="premium"?13149004:2505795,!0);for(let M=0;M<5;M++)D(r,2.52+M*.24,.96,-2.336,.045,.16,.02,e==="premium"?2700859:9218728,!0);if(t>=1){for(const M of[1.34,4.66])D(o,M,1.09,d,.035,.17,u,h.trim);D(r,3,.61,-2.25,3.3,.18,.18,12965847,!0)}if(t>=2){D(r,3,2.16,-1.12,2.35,.2,1.2,h.trim,!0);for(const M of[1.55,4.45])D(r,M,1.09,-2.27,.18,.35,.04,15334143,!0)}if(t>=3){for(const M of[1.6,4.4])D(o,M,.63,d,.13,.27,u-.2,h.trim,!0);for(const M of[2.3,3.7])D(r,M,2.31,-1.25,.46,.12,.22,16758596,!0)}if(t>=4){D(r,3,.86,-2.28,1.3,.36,.09,2379623,!0);for(let M=0;M<4;M++)D(r,2.55+M*.3,.86,-2.34,.08,.25,.025,13624545);D(r,3,2.12,-.8,1.2,.08,.6,15850653,!0)}if(e==="build"){for(const M of[2.05,3.95])D(r,M,2.16,-1.35,.23,.2,.23,16760134,!0);for(const M of[2.2,2.8,3.4,4]){const g=D(r,M,.65,-2.29,.2,.11,.025,16773577);g.rotation.z=-.45}for(const M of[1.37,4.63])D(o,M,.89,d,.075,.15,u,15101480,!0)}if(e==="city"){D(r,3,.62,-2.32,3.12,.12,.05,2647174,!0);for(const M of[1.37,4.63])D(o,M,.95,d,.075,.18,u,2647174,!0);for(const M of[1.35,4.65])D(r,M,.72,-1.12,.035,.12,1.7,2647174,!0)}if(e==="premium"){if(t>0)for(const M of[1.4,4.6])D(o,M,2.77,d,.08,.09,u,13149004);D(r,3,.62,-2.31,2.9,.08,.04,13149004);for(const M of[1.37,4.63])D(o,M,.9,d,.07,.13,u,13149004,!0);for(const M of[2.25,2.75,3.25,3.75]){const g=new Ft(new wn(.105,.105,.1,12),Ce(16769947));g.position.set(M,2.18,-1.82),g.castShadow=!0,r.add(g)}}const b=new me;b.position.set(3,.78,l),o.add(b),D(b,0,0,1.15,3.2,.1,2.3,8690328,!0);for(const M of[-1.45,1.45])D(b,M,.08,1.15,.12,.12,2.15,4217958,!0);D(b,0,.08,2.18,1.15,.1,.1,15779678,!0);const T=Uh(D(o,3,2.83,d,3.32,.09,u,t>1?h.roof:10134942,!0));if(T.visible=t>0,t>1)for(const M of[d-u*.32,d+u*.32])D(o,3,2.76,M,2.9,.08,.08,16044905);for(let M=0;M<=4;M++)D(o,1.4+M*.8,.788,d,.018,.008,u,15392707);for(let M=0;M<=n;M++)D(o,3,.79,.2+M*.8,3.2,.008,.018,15392707);return r.userData.rampPivot=b,r.userData.enclosed=t>0,r.userData.cargoWalls=y,r.userData.roof=T,r.userData.wheels=a,r.userData.frontWheels=c,r.userData.trailer=s,r.userData.cargo=o,r}const bc=4,Kx=5,Ut=.8,pa=n=>5+Math.floor(Math.max(0,Math.min(6,n))/2),is=[{id:"linden",name:"Linden District",x:-60,variant:0},{id:"old-town",name:"Old Town",x:-60,z:-54,variant:1},{id:"market",name:"Market Square",x:58,variant:2},{id:"birch",name:"Birch Road",x:58,z:36,variant:3},{id:"lake",name:"Lake View",x:111,variant:4},{id:"north-linden",name:"North Linden",x:-60,z:36,variant:5},{id:"north-old-town",name:"Oak Court",x:111,z:36,variant:6},{id:"south-market",name:"Garden Close",x:58,z:-54,variant:7},{id:"south-birch",name:"Birch Gardens",x:111,z:-54,variant:8}],hr=[{name:"Corduroy Sofa",w:3,d:2,value:230,weight:4,vulnerability:0},{name:"Armchair",w:2,d:2,value:110,weight:2,vulnerability:0},{name:"Television",w:2,d:1,value:270,weight:2,vulnerability:8},{name:"Book Box",w:1,d:1,value:65,weight:3,vulnerability:0},{name:"Houseplant",w:1,d:1,value:85,weight:1,vulnerability:7},{name:"Dresser",w:2,d:1,value:160,weight:4,vulnerability:1},{name:"Floor Lamp",w:1,d:1,value:120,weight:1,vulnerability:11},{name:"Standing Mirror",w:1,d:2,value:310,weight:2,vulnerability:14},{name:"Piano",w:3,d:2,value:620,weight:7,vulnerability:9},{name:"China Box",w:1,d:1,value:390,weight:2,vulnerability:17},{name:"Glassware Crate",w:1,d:1,value:340,weight:1,vulnerability:18},{name:"Record Collection",w:1,d:1,value:260,weight:1,vulnerability:12},{name:"Camera Case",w:1,d:1,value:410,weight:1,vulnerability:20}];function Wd(n){let t=n>>>0;return()=>(t=Math.imul(1664525,t)+1013904223>>>0)/4294967296}function Zx(n,t,e=[]){const i=Array.from({length:t},()=>Array(bc).fill(!1));for(const s of e)i[s]&&i[s].fill(!0);const r=[];for(const s of n){const o=hr[s];let a=!1;for(const c of[!1,!0]){const l=c?o.d:o.w,u=c?o.w:o.d;for(let d=0;d<=t-u&&!a;d++)for(let h=0;h<=bc-l&&!a;h++){let f=!0;for(let _=0;_<u;_++)for(let y=0;y<l;y++)f&&=!i[d+_][h+y];if(f){for(let _=0;_<u;_++)for(let y=0;y<l;y++)i[d+_][h+y]=!0;r.push(s),a=!0}}if(a)break}}return r}function Jx(n=0,t=0){const e=Wd(n*997+t*313+41),i=pa(t),r=Math.min(6+Math.floor(t/2)+Math.floor(n/2),14);let s=n===0&&t===0?[0,1,2,3,4,5]:Array.from({length:r},(a,c)=>c>=r-Math.min(1+Math.floor(n/2),5)?9+(c+n)%4:(c*3+n*2+t)%hr.length);(n!==0||t!==0)&&s.sort((a,c)=>hr[c].w*hr[c].d-hr[a].w*hr[a].d),s=Zx(s,i);const o=[];return s.map((a,c)=>{const l=hr[a],u=l.w*Ut/2,d=l.d*Ut/2;let h=-3,f=2,_=!1;for(let y=0;y<250;y++){const m=-9.75+u+e()*(8.3-u*2),p=-4.75+d+e()*(8.7-d*2),b=(n+1)%2?Math.abs(p+.35)<d+.32:Math.abs(m+5.6)<u+.32,T=o.some(M=>Math.abs(m-M.x)<u+M.hw+.24&&Math.abs(p-M.z)<d+M.hd+.24);if(!b&&!T){h=Math.round(m*10)/10,f=Math.round(p*10)/10,_=!0;break}}if(!_)for(let y=-4.2+d;y<=4.1-d&&!_;y+=.45)for(let m=-9.7+u;m<=-1.5-u&&!_;m+=.45){const p=(n+1)%2?Math.abs(y+.35)<d+.24:Math.abs(m+5.6)<u+.24,b=o.some(T=>Math.abs(m-T.x)<u+T.hw+.16&&Math.abs(y-T.z)<d+T.hd+.16);!p&&!b&&(h=Math.round(m*10)/10,f=Math.round(y*10)/10,_=!0)}return o.push({x:h,z:f,hw:u,hd:d}),{...l,model:a,id:c,fragile:l.vulnerability>=7,vulnerability:l.vulnerability+Math.min(n*1.5,9),location:"pickup",x:0,z:0,pickupX:h,pickupZ:f,rotated:!1}})}function eu(n=0,t=0,e=n){const i=["Baumann Family","Mara King","Morning Glow Café","Dr. Hoffman","Sun Deck Hotel","Northern Lights Gallery"],r=["First Apartment Move","Old House, Narrow Doors","Café Grand Opening","Delicate Private Move","Major Hotel Move-In","Premium Art Transport"],s=Wd(e*2654435761+n*97+1729>>>0),o=Math.floor(s()*is.length),a=is.map((f,_)=>_).filter(f=>f!==o),c=a[Math.floor(s()*a.length)],l=is[o],u=is[c],d=Jx(n,t),h=Math.round(d.reduce((f,_)=>f+_.value,0)*(1+n*.07));return{client:i[n%i.length],title:r[n%r.length],from:l.name,to:u.name,fromSite:l,toSite:u,difficulty:n+1,items:d,reward:h}}function Qe(n){return n.rotated?[n.d,n.w]:[n.w,n.d]}function nu(n,t,e,i,r=bc,s=Kx){const[o,a]=Qe(t);return Number.isInteger(e)&&Number.isInteger(i)&&e>=0&&i>=0&&e+o<=r&&i+a<=s&&!n.some(c=>{if(c.id===t.id||c.location!=="truck")return!1;const[l,u]=Qe(c);return e<c.x+l&&e+o>c.x&&i<c.z+u&&i+a>c.z})}const Qx=["supply","mill","assembly","paint","packing"],br={truck:"Complete truck upgrade",cargo:"Included with truck",gear:"Included with truck",worker:"Strength, stamina & speed",yard:"Expand company base",hire:"Hire crew with truck",fleet:"Employee truck upgrade",factory:"Buy furniture company"},bn={truck:6,cargo:3,gear:3,worker:8,yard:4,hire:4,fleet:4,factory:1};function Xd(){return{cash:450,jems:0,ownedSkins:{truck:["base"],person:["standard"]},selectedSkins:{truck:"base",person:"standard"},jobs:0,earned:0,levels:{truck:0,cargo:0,gear:0,worker:0,yard:0,hire:0,fleet:0,factory:0},fleet:[],timber:0,parts:0,products:0,painted:0,packed:0,sold:0,production:0,supply:0,test:!1,contributions:{},stationLevels:{supply:0,mill:0,assembly:0,paint:0,packing:0},stationProgress:{supply:0,mill:0,assembly:0,paint:0,packing:0},stationContributions:{},daily:{lastClaim:"",streak:0},finished:!1}}function jx(n){const t=Xd(),e={...t,...n,jems:Math.max(0,Math.floor(Number(n?.jems)||0)),ownedSkins:{truck:[...new Set(["base",...Array.isArray(n?.ownedSkins?.truck)?n.ownedSkins.truck:[]])],person:[...new Set(["standard",...Array.isArray(n?.ownedSkins?.person)?n.ownedSkins.person:[]])]},selectedSkins:{...t.selectedSkins,...n?.selectedSkins},levels:{...t.levels,...n?.levels},contributions:{...t.contributions,...n?.contributions},stationLevels:{...t.stationLevels,...n?.stationLevels},stationProgress:{...t.stationProgress,...n?.stationProgress},stationContributions:{...t.stationContributions,...n?.stationContributions}};return e.levels.truck=Math.min(bn.truck,Math.max(e.levels.truck,e.levels.cargo,e.levels.gear)),e.levels.cargo=e.levels.truck,e.levels.gear=e.levels.truck,e.fleet=(e.fleet??[]).map(i=>({...i,pending:i.pending??0})),e.levels.hire=Math.max(e.levels.hire,e.fleet.length),e.levels.yard=Math.max(e.levels.yard,e.fleet.length),e.levels.fleet=e.fleet.length,e.levels.factory=e.finished?1:0,e.ownedSkins.truck.includes(e.selectedSkins.truck)||(e.selectedSkins.truck="base"),e.ownedSkins.person.includes(e.selectedSkins.person)||(e.selectedSkins.person="standard"),e}function _s(n,t){return Math.round({truck:520,cargo:800,gear:450,worker:260,yard:1800,hire:2200,fleet:1800,factory:5e4}[t]*(1+n.levels[t]*.55))}function $d(n,t){return n.levels[t]>=bn[t]?"Maximum level":t==="yard"&&n.levels.truck<bn.truck?"Max your own truck first":t==="yard"&&n.levels.yard>n.fleet.length?"Hire a crew for the current bay first":t==="hire"&&n.levels.yard<1?"Expand the base for a parking bay":t==="hire"&&n.fleet.length>=n.levels.yard?"Upgrade the base for another parking bay":t==="fleet"?"Upgrade employee trucks at their own parking bay":t==="factory"&&!qd(n)?"Max every truck, crew and base upgrade first":""}function tM(n,t){const e=$d(n,t);if(e)return e;const i=Math.max(0,_s(n,t)-(n.contributions?.[t]??0));return!n.test&&n.cash<i?`Need $${i}`:(n.test||(n.cash-=i),n.contributions&&delete n.contributions[t],n.levels[t]++,t==="truck"&&(n.levels.cargo=n.levels.truck,n.levels.gear=n.levels.truck),t==="hire"&&(n.fleet.push({level:0,phase:-n.fleet.length*.08,completed:0,pending:0,route:n.fleet.length%3}),n.levels.fleet=n.fleet.length),t==="factory"&&(n.finished=!0),"")}function Ia(n,t){n.cash+=Math.round(t),n.earned+=Math.round(t)}function eM(n,t){const e=n.fleet[t];if(!e||e.level>=4)return!1;const i=1e3*(e.level+1),r=Math.max(0,i-(e.contribution??0));return!n.test&&n.cash<r?!1:(n.test||(n.cash-=r),e.contribution=0,e.level++,!0)}function Yd(n){return 48-n.level*5}function qd(n){return n.levels.truck>=bn.truck&&n.levels.worker>=bn.worker&&n.levels.yard>=bn.yard&&n.fleet.length>=bn.hire&&n.fleet.every(t=>t.level>=4)}function nM(n){return 260+n.level*125}function iM(n,t){const e=n.fleet[t],i=Math.round(e?.pending??0);return!e||i<=0?0:(e.pending=0,Ia(n,i),i)}function rM(n,t=new Date){const e=t.toISOString().slice(0,10);if(n.daily.lastClaim===e)return 0;const i=new Date(t);i.setUTCDate(i.getUTCDate()-1),n.daily.streak=n.daily.lastClaim===i.toISOString().slice(0,10)?n.daily.streak>=8?1:n.daily.streak+1:1,n.daily.lastClaim=e;const r=io(n.daily.streak);return r&&Ia(n,r),n.jems+=no(n.daily.streak),n.daily.streak===8&&(n.ownedSkins.person.includes("build")?n.jems+=15:n.ownedSkins.person.push("build")),r}function no(n){return[0,2,0,4,0,6,0,0][Math.max(0,Math.min(7,n-1))]}function io(n){return[150,0,325,0,600,0,1050,0][Math.max(0,Math.min(7,n-1))]}function sM(n,t){return n.levels.factory<1?"Build the workshop first":t==="supply"?!n.test&&n.cash<24?"Need $24 for timber":"":t==="mill"?n.timber<1?"Collect timber first":"":t==="assembly"?n.parts<2?"Process two timber pieces first":"":t==="paint"?n.products<1?"Assemble a chair first":"":n.painted<1?"Paint a chair first":""}function oM(n,t){const e=sM(n,t);return e||(t==="supply"?(n.test||(n.cash-=24),n.timber+=3,""):t==="mill"?(n.timber--,n.parts++,""):t==="assembly"?(n.parts-=2,n.products++,""):t==="paint"?(n.products--,n.painted++,""):(n.painted--,n.packed===0&&(n.supply=0),n.packed++,""))}function aM(n,t){let e=0;for(const i of n.fleet){if((i.pending??0)>0){i.phase=0;continue}for(i.phase+=t/Yd(i);i.phase>=1;){i.phase--,i.completed++;const r=nM(i);i.pending=(i.pending??0)+r}}if(n.levels.factory&&!n.finished){const i={supply:8,mill:6,assembly:10,paint:7,packing:7};for(const r of Qx)if(n.stationLevels[r]>=2){const s=i[r]/(1+(n.stationLevels[r]-2)*.7+n.levels.factory*.08);if(n.stationProgress[r]+=t/s,n.stationProgress[r]>=1){const o=oM(n,r);n.stationProgress[r]=o?Math.min(.95,n.stationProgress[r]):n.stationProgress[r]-1}}if(n.packed>0?n.supply+=t:n.supply=0,n.supply>=10){n.supply=0,n.packed--,n.sold++;const r=190+n.levels.factory*35;Ia(n,r),e+=r}}return e}const Fh={base:0,pickup:-48,destination:66},We={minX:-90,maxX:128,minZ:-72,maxZ:86},qo=7,mn=[-42,12,48],mr=[-78,-30,42,90],Jr=mr;function ei(n){n.removeFromParent(),n.traverse(t=>{t instanceof Ft&&(t.geometry.dispose(),t.userData.owned&&(t.material.map?.dispose(),t.material.dispose())),t instanceof jp&&(t.material.map?.dispose(),t.material.dispose())})}function Kd(n){n.material=n.material.clone();const t=n.material;return t.transparent=!0,n.userData.owned=!0,n}function na(n,t,e,i,r,s,o,a){const c=new Fe;c.setAttribute("position",new ie([-r/2,0,-s/2,r/2,0,-s/2,0,o,-s/2,-r/2,0,s/2,r/2,0,s/2,0,o,s/2],3)),c.setIndex([0,2,1,3,4,5,0,3,5,0,5,2,2,5,4,2,4,1]),c.computeVertexNormals();const l=new Ft(c,Ce(a));return l.position.set(t,e,i),l.castShadow=!0,n.add(l),l}function Xs(n,t,e,i){D(n,t,.75,e,.2,1.5,.2,8411970);for(let r=0;r<3;r++){const s=i===1?new co(1-r*.15,1.6,7):new Zc(.9,1),o=new Ft(s,Ce(i===2?15181958:i===1?3770233:r%2?7845223:5087096));o.position.set(t+(i===1?0:Math.sin(r*3)*.4),1.55+r*.4,e+Math.cos(r*3)*.2),o.castShadow=!0,n.add(o)}}function Zd(n){n.updateMatrixWorld(!0);const t=new Map;n.traverse(e=>{if(e instanceof Ft&&!e.userData.owned&&e.material instanceof gs){const i=Object.entries(e.geometry.attributes).map(([o,a])=>{const c=a;return`${o}:${c.itemSize}:${c.normalized}`}).sort().join("|"),r=`${e.material.uuid}:${e.geometry.index?"indexed":"plain"}:${i}`,s=t.get(r)??{material:e.material,meshes:[]};s.meshes.push(e),t.set(r,s)}});for(const{material:e,meshes:i}of t.values()){const r=i.map(a=>a.geometry.clone().applyMatrix4(a.matrixWorld)),s=Yx(r);if(r.forEach(a=>a.dispose()),!s)continue;i.forEach(a=>{a.removeFromParent(),a.geometry.dispose()});const o=new Ft(s,e);o.castShadow=o.receiveShadow=!0,n.add(o)}}const lM=n=>n==="industrial"?13025965:n==="shops"?14275260:10731392;function cM(){const n=new me,t=[],e=[],i=[],r=[],s=8295062,o=15655882,a=new Ft(new si(1800,1800),Ce(11060874));a.rotation.x=-Math.PI/2,a.position.y=-.09,a.receiveShadow=!0,n.add(a);const c=qo/2,l=1.3,u=(g,x,R)=>{const v=[];let w=x;for(const P of g)P-c>w&&v.push([w,P-c]),w=P+c;return w<R&&v.push([w,R]),v};for(const g of mn){D(n,6,-.025,g,310,.07,qo,s);for(const[x,R]of u(Jr,-149,161))for(const v of[-1,1])D(n,(x+R)/2,.045,g+v*(c+l/2),R-x,.1,l,o);for(let x=-147;x<159;x+=4.4)Jr.some(R=>Math.abs(x-R)<c+3)||D(n,x,.018,g,1.6,.012,.085,16248269)}for(const g of Jr){for(const[x,R]of u(mn,-115,116))D(n,g,-.025,(x+R)/2,qo,.07,R-x,s);for(const[x,R]of u(mn,-115,116))for(const v of[-1,1])D(n,g+v*(c+l/2),.045,(x+R)/2,l,.1,R-x,o);for(let x=-113;x<114;x+=4.4)mn.some(R=>Math.abs(x-R)<c+3)||D(n,g,.018,x,.085,.012,1.6,16248269)}const d=(g,x)=>{D(n,g,1.75,x,.12,3.5,.12,3958128),D(n,g,3.54,x,.65,.15,.45,16768657,!0),t.push({x:g,z:x,w:.65,d:.5})},h=(g,x)=>{D(n,g,.5,x,1.65,.16,.55,12094041,!0),D(n,g,.92,x-.25,1.65,.6,.12,12094041,!0);for(const R of[-.6,.6])D(n,g+R,.23,x,.1,.46,.5,4350316);t.push({x:g,z:x,w:1.75,d:.8})};for(const g of Jr)for(const x of mn){for(const v of[-1,1])for(const w of[-1,1])D(n,g+v*(c+l/2),.045,x+w*(c+l/2),l,.1,l,o);if((g===-30||g===42)&&x===12||g===-78&&x===48)for(const v of[-1,1]){const w=g+v*(c+.75),P=x-v*(c+1.5);D(n,w,1.45,P,.13,2.9,.13,3955044),t.push({x:w,z:P,w:.55,d:.5}),D(n,w,2.85,P,.36,.95,.26,3362392,!0);for(let L=0;L<3;L++)D(n,w,3.12-L*.26,P+.15,.19,.18,.05,[14186849,15778647,7521692][L],!0);for(let L=-2;L<=2;L++)D(n,g+L*1.1,.019,x+v*(c+1.7),.55,.012,1.3,16511188),D(n,g+v*(c+1.7),.019,x+L*1.1,1.3,.012,.55,16511188)}D(n,g+c+1.5,1.2,x+c+2.8,.07,2.4,.07,5468538),t.push({x:g+c+1.5,z:x+c+2.8,w:1.95,d:.45}),On(n,x<0?"GARDEN LANE":g<0?"MARKET STREET":"LINDEN WAY",g+c+1.5,2.35,x+c+2.8,1.9,"#dbe8cf")}for(const g of mn)for(let x=-68;x<88;x+=18)Jr.some(R=>Math.abs(x-R)<8)||(d(x,g+c+.8),D(n,x+2,.017,g+c-.35,.48,.01,.36,5795961));const f=[{x:5,z:-14,w:64,d:43},...is.map(g=>({x:g.x-5.6,z:g.z??0,w:11,d:11.5})),...is.map(g=>({x:g.x+4,z:(g.z??0)-2.1,w:8,d:16}))],_=(g,x,R=0)=>Math.abs(g.x-x.x)<(g.w+x.w)/2+R&&Math.abs(g.z-x.z)<(g.d+x.d)/2+R,y=g=>!f.some(x=>_(g,x,.5))&&!i.some(x=>_(g,x,.6))&&!Jr.some(x=>Math.abs(g.x-x)<g.w/2+c+l)&&!mn.some(x=>Math.abs(g.z-x)<g.d/2+c+l),m=(g,x,R,v)=>t.push({x:g,z:x,w:R,d:v}),p=(g,x,R,v=!1)=>{const w=Jd(R,v);w.position.set(g,0,x),n.add(w),m(g,x,1.7,3.1)},b=(g,x,R)=>{Xs(n,g,x,R),m(g,x,.4,.4)},T=(g,x,R,v=1)=>{D(n,g,x,R,v+.14,1.14,.09,16445655),D(n,g,x,R+.06,v,.95,.04,8567235),D(n,g,x,R+.09,.055,.95,.035,16445655)},M=(g,x,R,v)=>{const w={x:g,z:x,w:14,d:16,kind:R};if(!y(w))return;i.push(w),D(n,g,.01,x,14,.06,16,lM(R));const P=R==="shops"||R==="industrial",L=R==="dense",F=R==="modern",B=P||L?10:7,I=P?7:6,k=R==="shops"?7:L?6.5:R==="industrial"?4.3:F?3.5:3.1,$=x-2,K=[15719349,14001294,12242896,15198424];D(n,g,k/2,$,B,k,I,F?15789792:K[v%4],!0),m(g,$,B,I),F||P?(D(n,g,k+.15,$,B+.55,.3,I+.6,F?4811632:5077378,!0),F&&D(n,g-1,k+.33,$,3,.06,2,3562871)):(na(n,g,k,$,B+.6,I+.7,v%2?2:1.25,[12022866,6720918,9991776][v%3]),D(n,g+2,k+.65,$-1.2,.55,1.3,.55,10845797));for(const lt of[-1,1])for(const bt of[-1.6,1.6])D(n,g+lt*(B/2+.04),1.8,$+bt,.08,1.1,1.2,15919056),D(n,g+lt*(B/2+.09),1.8,$+bt,.025,.87,1,8567235);if(v%4===1)for(let lt=0;lt<6;lt++)D(n,g,.28+lt*.43,$+I/2+.014,B,.025,.018,13079681);if(L)for(const lt of[-1.6,1.6])D(n,g+lt,1.1,$+I/2+.16,.25,2.2,.25,15259321);const nt=$+I/2;if(D(n,g,1,nt+.06,1.1,2,.11,4812664,!0),R==="industrial"){D(n,g+2,1.55,nt+.08,3.5,3.1,.14,6323589);for(let lt=0;lt<6;lt++)D(n,g+2,.25+lt*.48,nt+.17,3.35,.045,.025,11453119);On(n,["AUTO SERVICE","TYRE & REPAIR","LOCAL STORAGE","VAN RENTAL"][v%4],g,k-.6,nt+.14,6,"#f6d183")}else{for(const lt of[-B*.32,B*.32])T(g+lt,1.9,nt+.04,F?1.65:1.25);if(k>5)for(const lt of[-3,0,3])T(g+lt,4.8,nt+.04,1.4),L&&(D(n,g+lt,4.08,nt+.5,2.1,.12,.95,15785152),D(n,g+lt,4.55,nt+.98,2.1,.8,.07,4947326));if(R==="shops"){for(const lt of[-3,3])D(n,g+lt,1.4,nt+.13,2.4,2,.06,9422792);if(On(n,["BAKERY","CORNER CAFE","FRESH MARKET","BOOKS & NEWS"][v%4],g,3.45,nt+.18,6.8,"#f5d293"),D(n,g,2.9,nt+.65,9,.15,1.2,[6397575,13928040][v%2]),h(g-3,x+5),Oh(n,g+1.3,x+5),m(g-3,x+5,1.8,.7),D(n,g+2.7,.55,x+3.2,.6,1.1,.6,5075827,!0),v%4===1){D(n,g-3,.78,x+6.7,1,.09,.8,12818788);for(const lt of[-.8,.8])D(n,g-3+lt,.4,x+6.7,.42,.12,.45,12818788)}}}D(n,g+4.8,.055,x+5.2,3,.02,5.3,14142642),D(n,g,.056,x+4.6,1.5,.02,6,15193781);const Y=x<-45?-46.8:x>55?79.4:x>15?38.4:-16.6,j=x+7.8,rt=Math.max(0,Y-j);if(rt>0&&(r.push({x:g+4.8,z:(j+Y)/2,w:3,d:rt},{x:g,z:(j+Y)/2,w:1.4,d:rt}),D(n,g+4.8,.051,(j+Y)/2,3,.015,rt,14142642),D(n,g,.051,(j+Y)/2,1.4,.015,rt,15193781)),v%3!==1&&p(g+4.8,x+5,[14463339,8497586,13073769,15066319][v%4],R==="industrial"),!P){L||(D(n,g+4.8,1.15,x-4.6,2.35,2.3,3.4,14800831),D(n,g+4.8,2.37,x-4.6,2.65,.14,3.7,7311760),D(n,g+4.8,1,x-2.87,1.95,1.9,.06,7310474),D(n,g+4.8,.056,x+.1,2.45,.012,6,14142642),m(g+4.8,x-4.6,2.35,3.4));const lt=new Ft(new Es(.28,.035,5,16),Ce(5406309));lt.rotation.x=-Math.PI/2,lt.position.set(g-2,.09,x+6),n.add(lt),b(g-4.8,x+5.3,v%3),D(n,g-2.3,.48,x+7,.09,.96,.09,8416083),D(n,g-2.3,.95,x+7,.55,.4,.42,6063494,!0),D(n,g-6.7,.45,x,.35,.9,13,6590054,!0);for(let bt=0;bt<5;bt++)D(n,g-3+bt*.45,.16,x+5,.22,.22,.22,[15975529,15177619,14279356][bt%3],!0);v%2===0&&Oh(n,g-2,x+3.1)}for(let lt=0;lt<(L?3:1);lt++)D(n,g-B/2+.4+lt*.55,.4,nt+.55,.43,.8,.46,5404791,!0)};for(const[g,x,R,v]of[[-64,-27,"shops",0],[-46,-27,"shops",1],[-64,30,"shops",2],[-46,30,"shops",3],[-64,-59,"homes",0],[-46,-59,"homes",1],[-16,-59,"homes",2],[3,-59,"homes",3],[24,-59,"homes",0],[56,-59,"modern",0],[75,-59,"modern",1],[56,-26,"modern",2],[75,-26,"modern",3],[-16,30,"industrial",0],[4,30,"industrial",1],[25,30,"industrial",2],[56,30,"dense",0],[75,30,"dense",1],[-64,65,"homes",2],[-46,65,"homes",3],[-16,65,"industrial",3],[4,65,"industrial",0],[56,65,"dense",2],[75,65,"dense",3]])M(g,x,R,v);for(const[g,x,R]of[[-54,-13,"square"],[24,65,"park"]]){const v={x:g,z:x,w:15,d:R==="square"?6:9,kind:R};if(y(v)){i.push(v),D(n,g,.045,x,15,.06,v.d,R==="square"?14930871:9549687),D(n,g,.085,x,13,.02,1.2,15127990);for(const w of[-5.5,5.5])b(g+w,x-2.5,0),h(g+w,x+2.5),d(g+w,x+3.8);if(R==="square"){const w=new Ft(new wn(1.6,1.75,.4,16),Ce(14141351));w.position.set(g,.25,x),n.add(w),m(g,x,3.5,3.5);const P=new Ft(new wn(1.4,1.4,.04,16),Ce(8045004));P.position.set(g,.47,x),n.add(P),D(n,g,1,x,.4,1.5,.4,15194041,!0)}else{for(const w of[-1.4,1.4])D(n,g+w,1,x-2,.12,2,.12,14857573);D(n,g,2,x-2,3,.13,.13,14857573),D(n,g,.75,x-2,.9,.1,.4,12810081)}}}for(const[g,x,R]of[[42,90,-15],[-30,90,40],[-63,75,81]]){D(n,(g+x)/2,.008,R,x-g,.025,3.2,10529698);for(const v of[-1,1])D(n,(g+x)/2,.039,R+v*1.9,x-g-qo,.04,.55,o)}for(const[g,x]of[[-63,Math.PI/2],[75,0]]){const R=[],v=[];for(let L=0;L<=24;L++){const F=x+L*Math.PI/48;for(const B of[13.4,16.6])R.push(g+Math.cos(F)*B,.023,66+Math.sin(F)*B);if(L<24){const B=L*2;v.push(B,B+1,B+2,B+1,B+3,B+2)}}const w=new Fe;w.setAttribute("position",new ie(R,3)),w.setIndex(v),w.computeVertexNormals();const P=w.index;for(let L=0;L<P.count;L+=3){const F=P.getX(L);P.setX(L,P.getX(L+2)),P.setX(L+2,F)}w.computeVertexNormals(),n.add(new Ft(w,Ce(10529698)))}for(let g=-68;g<86;g+=9)for(const x of[-72,-47,20,55,74]){const R={x:g,z:x,w:2.8,d:2.8};!y(R)||r.some(v=>_(R,v,.3))||x===20&&g>17&&g<26||(b(g,x,Math.abs(Math.round(g+x))%3),D(n,g,.07,x,2.2,.12,2.2,9942137,!0))}for(const g of[19,21,23]){D(n,g,.4,20,1.5,.18,.12,15384971);for(const x of[-.5,.5])D(n,g+x,.24,20,.08,.48,.12,6978937)}D(n,-20,1.1,18,4,.13,1.7,4946820);for(const g of[-21.7,-18.3])D(n,g,.55,18,.09,1.1,.09,4946820);h(-20,18),On(n,"BUS",-22.5,2.2,18,.8,"#f5d58c");for(const[g,x]of[[-26,20],[38,-30],[86,22]])D(n,g,.5,x,.65,1,.4,7967115,!0),m(g,x,.65,.4),D(n,g+1.1,.42,x,.2,.84,.2,13207142,!0);for(let g=-64;g<=76;g+=20)D(n,g,1.6,-89,7,3.2,6,13161138),na(n,g,3.2,-89,7.5,6.5,1.4,8165011),Xs(n,g+7,-87,0);for(const g of[-1,1])for(const x of[-69,-20,27,70]){const R=g<0?-119:131;D(n,R,1.65,x,8,3.3,6,g<0?14073773:12373949),na(n,R,3.3,x,8.5,6.5,1.4,6523019),Xs(n,R+g*6,x+4,1)}for(const g of[-88,100])for(const x of mn)D(n,g,3.4,x,1.4,1.2,8.4,5401456,!0),D(n,g,1.8,x-3.7,1.4,3.6,1,5401456,!0),D(n,g,1.8,x+3.7,1.4,3.6,1,5401456,!0);return Zd(n),n.userData.lots=i,{root:n,barriers:t,roofs:e}}function Oh(n,t,e){for(const i of[-.4,.4]){const r=new Ft(new Es(.28,.045,5,12),Ce(3495009));r.position.set(t+i,.32,e),n.add(r)}D(n,t,.6,e,.85,.055,.06,12484708),D(n,t+.2,.7,e,.06,.65,.06,12484708)}function Jd(n,t=!1){const e=new me;D(e,0,.65,0,1.55,.7,3,n,!0),D(e,0,t?1.35:1.12,t?.35:0,1.35,t?.9:.6,t?2:1.7,n,!0),D(e,0,1.2,-.9,1.2,.45,.06,8566465);for(const i of[-.77,.77])for(const r of[-.94,.94]){const s=new Ft(new wn(.3,.3,.16,10),Ce(3426900));s.rotation.z=Math.PI/2,s.position.set(i,.3,r),e.add(s)}for(const i of[-.5,.5])D(e,i,.7,-1.52,.35,.2,.04,16769957);return e}function vs(n,t,e=!1,i=0){const r=new me,s=[],o=[],a=n-5.6,c=-.3,l=e?15259056:15656145;D(r,a,.015,c,10,.12,10.6,13807225);for(let f=0;f<20;f++)D(r,a-4.8+f*.5,.08,c,.016,.01,10.3,12557425);const u=(f,_,y,m)=>(s.push({x:f,z:_,w:y,d:m}),D(r,f,1.55,_,y,3.1,m,l,!0)),d=[u(a,-5.55,10,.22),u(a-5,c,.22,10.5),u(a+5,c,.22,10.5),u(a-3.55,4.95,2.9,.22),u(a+3.55,4.95,2.9,.22)];t%2?d.push(u(a-3.6,-.35,2.8,.15),u(a+3.6,-.35,2.8,.15)):d.push(u(a,-3.1,.15,4.6));for(const f of[a-3,a+3])D(r,f,1.9,-5.4,1.5,1.3,.09,9291988),D(r,f,1.9,-5.32,.07,1.3,.05,16777215);const h=Kd(na(r,a,3.2,c,10.6,11.1,2.05,e?5537671:12152400));o.push({mesh:h,bounds:{x:a,z:c,w:10.5,d:11}}),D(r,a,.04,6,4,.12,2.1,14731169);for(const f of[a-2.15,a+2.15])D(r,f,1.5,4.98,.18,3,.33,5406076);r.position.z=i;for(const f of s)f.z+=i;for(const f of o)f.bounds.z+=i;return{root:r,barriers:s,roofs:o}}function Qd(n){const t=new me,e=[],i=[],r=n.levels.yard;D(t,5,-.005,-14,63,.1,43,13551792);const s=(o,a,c,l,u,d,h)=>{D(t,o,u/2,a,c,u,l,h,!0),e.push({x:o,z:a,w:c,d:l});const f=Kd(D(t,o,u+.15,a,c+.6,.3,l+.6,4353658,!0));i.push({mesh:f,bounds:{x:o,z:a,w:c+1,d:l+1}}),D(t,o,u-.55,a+l/2+.06,c,.7,.15,14922832);const _=On(t,d,o,u-.52,a+l/2+.17,Math.min(c-1,22),"#ffe0a0");_.scale.y=.23};s(-8,-29,27,10,6.4,"MOVING EMPIRE • MOVING COMPANY",15326911);for(const o of[-18,-13,-8,-3,2])D(t,o,4.2,-23.94,3.4,1.25,.1,8566977),D(t,o,4.2,-23.85,.07,1.25,.04,16445911);D(t,-8,1.2,-23.9,2.6,2.4,.12,5537415),D(t,-8,2.65,-22.9,4.4,.15,2.1,15318368),s(-20,-15,8,13,4.2,"STORAGE",13031107),D(t,-15.94,1.65,-15,.12,3.3,4.5,5667459),s(22,-28,26,10,4.5,"GARAGES & SERVICE",14603702);for(const o of[13,22,31]){D(t,o,1.65,-22.93,6,3.3,.15,7509649);for(let a=0;a<7;a++)D(t,o,.2+a*.45,-22.82,5.9,.04,.03,11322808)}for(let o=0;o<r;o++){const a=8+o*4.8;for(const c of[-2,2])D(t,a+c,.055,-8,.075,.02,10,16773843);D(t,a,.055,-13,4,.02,.075,16773843)}for(const o of[{x:-26,z:-14,w:.3,d:43},{x:36,z:-28,w:.3,d:14},{x:36,z:3.5,w:.3,d:7},{x:5,z:-35,w:62,d:.3}])D(t,o.x,.45,o.z,o.w,.9,o.d,10005152),e.push(o);D(t,39,.015,-12,6,.02,17,13551792);for(const o of[-20.5,-3.5])D(t,39,.045,o,6,.02,.08,16773843);for(const[o,a]of[[-18,16],[35,2]])D(t,o,.4,7,a,.8,.3,10005152),e.push({x:o,z:7,w:a,d:.3});D(t,4,.07,7.7,16,.015,1.6,14274228);for(const o of[-3.4,11.4])D(t,o,.095,7.7,.12,.01,1.3,16377527);On(t,"MOVING EMPIRE",-19,2.6,6.8,6,"#ffda78"),D(t,-19,1.25,6.6,.2,2.5,.2,4550005),D(t,-10,.55,-1,2.6,1.1,.8,5012609,!0),On(t,"JOBS",-10,1.65,-.9,2,"#ffd168"),On(t,"TRUCK UPGRADES",-.45,1.35,-3.35,3.7,"#fff0bd");for(const o of[-1.75,.85])D(t,o,.65,-3.43,.12,1.3,.12,4550005);for(let o=0;o<5;o++){const a=new Ft(new Es(.42,.14,8,14),Ce(3754058));a.rotation.x=Math.PI/2,a.position.set(-22+o*.92,.18,-7.5),t.add(a)}D(t,-20,.08,-6.5,4.6,.04,.12,15185750),On(t,"STRENGTH & STAMINA",-20,.32,-6.45,3.5,"#fff0bd"),On(t,"YARD & CREWS",-8,3.75,-23.72,4.2,"#fff0bd");for(let o=0;o<3;o++){const a=-13.7+o*2.1,c=-19.3;for(let l=0;l<3;l++)D(t,a,.12+l*.13,c,1.5,.1,1.1,11635291);D(t,a,.72,c,1.15,.8,.8,14201211,!0),D(t,a,1.13,c,.12,.025,.8,15979675),e.push({x:a,z:c,w:1.5,d:1.1})}D(t,-14,.8,-10,1.25,1.6,1,5274996,!0),e.push({x:-14,z:-10,w:1.3,d:1.1}),D(t,-13,.45,-22,1.2,.9,.7,12351585,!0);for(const o of[-12.8,-11.8]){const a=new Ft(new co(.22,.7,8),Ce(15179868));a.position.set(o,.35,-8),t.add(a)}D(t,-14,.8,-13,.07,1.6,.07,4027008),D(t,-14,.12,-12.7,.65,.08,.55,4027008),D(t,-13,.75,-15.5,1.1,1.5,.75,12891029,!0),e.push({x:-13,z:-15.5,w:1.1,d:.75});for(const o of[-22,-18]){const a=Jd(o===-22?11059896:13998968);a.position.set(o,0,2),t.add(a),e.push({x:o,z:2,w:1.7,d:3.1})}return Xs(t,-24,-24,0),Xs(t,7,-26,1),Zd(t),{root:t,barriers:e,roofs:i}}function Bh(n,t,e,i,r=7589002,s=0){const o=qx(n,t,r,!1,s);return o.position.set(e,.08,i),o}function jd(n){return[1.4,1.4,1.4,.74,1.35,1.15,1.9,2.05,1.55,.9][n]??1}function uM(n,t,e){for(const i of n){if(i.mode==="air"){i.velocity.y-=9.8*t,i.position.addScaledVector(i.velocity,t),i.position.y<=.12&&(i.position.y=.12,i.mode="ground",i.velocity.set(0,0,0),i.settled=!0,i.hitAt=e.now,e.onDamage?.(i,i.item.fragile?4:2,"fall")),i.mesh.position.copy(i.position);continue}if(i.mode!=="truck")continue;const r=Math.abs(e.acceleration)*.19+Math.abs(e.yawRate*e.speed)*.65,s=i.secured?.045:.16,o=ue.clamp(-e.yawRate*e.speed*.025,-s,s),a=ue.clamp(-e.acceleration*.018,-s,s);if(i.angular.x=ue.damp(i.angular.x,o,7,t),i.angular.z=ue.damp(i.angular.z,a,7,t),i.mesh.position.copy(i.position),i.mesh.position.x+=i.angular.x,i.mesh.position.z+=i.angular.z,i.mesh.rotation.z=-i.angular.x*.2,i.mesh.rotation.x=i.angular.z*.2,!i.secured&&r>1.05&&e.now-i.hitAt>.8&&(i.hitAt=e.now,e.onDamage?.(i,Math.max(1,Math.round(i.item.vulnerability/8)),"rough driving")),!i.secured&&e.rearOpen&&i.position.z>e.back-2.25&&e.speed>3.4&&e.acceleration<-2.5&&e.now-i.hitAt>.2){e.truck.updateMatrixWorld(!0);const l=e.truck.userData.cargo.localToWorld(i.position.clone().add(new A(0,.25,1.4)));e.truck.parent?.add(i.mesh),i.mode="air",i.fallen=!0,i.position.copy(l),i.mesh.position.copy(l);const u=e.truck.rotation.y+e.truck.userData.trailer.rotation.y;i.mesh.rotation.set(0,u+(i.item.rotated?Math.PI/2:0),0),i.velocity.set(Math.sin(u)*e.speed*.3,1.2,Math.cos(u)*e.speed*.3),e.onFall?.(i)}}}function hM(n,t,e={}){const i=new Map,r=new Map,s=(p,b)=>`${p.toFixed(3)}:${b.toFixed(3)}`,o=(p,b)=>{const T=s(p,b);return i.has(T)||(i.set(T,new A(p,0,b)),r.set(T,[])),T},a=(p,b)=>{if(p===b)return;const T=i.get(p).distanceTo(i.get(b));r.get(p).push({to:b,cost:T}),r.get(b).push({to:p,cost:T})},c=[...new Set([...mr,n.x,t.x])].sort((p,b)=>p-b);for(const p of mn){const b=c.map(T=>o(T,p));for(let T=1;T<b.length;T++)a(b[T-1],b[T])}for(const p of mr){const b=[...new Set([...mn,n.z,t.z])].sort((T,M)=>T-M).map(T=>o(p,T));for(let T=1;T<b.length;T++)a(b[T-1],b[T])}const l=o(n.x,n.z),u=o(t.x,t.z),d=p=>mn.reduce((b,T)=>Math.abs(T-p)<Math.abs(b-p)?T:b),h=p=>mr.reduce((b,T)=>Math.abs(T-p)<Math.abs(b-p)?T:b);a(l,o(n.x,e.startLane??d(n.z))),Math.abs(h(n.x)-n.x)<4.5&&a(l,o(h(n.x),n.z)),a(u,o(t.x,e.goalLane??d(t.z)));const f=new Map([[l,0]]),_=new Map,y=new Set(i.keys());for(;y.size;){let p="",b=1/0;for(const T of y){const M=f.get(T)??1/0;M<b&&(b=M,p=T)}if(!p||p===u)break;y.delete(p);for(const T of r.get(p)??[]){const M=b+T.cost;M<(f.get(T.to)??1/0)&&(f.set(T.to,M),_.set(T.to,p))}}const m=[];for(let p=u;p&&(m.push(i.get(p).clone()),p!==l);p=_.get(p));return m.reverse(),m[0]?.distanceTo(n)??!0?[n.clone(),t.clone()]:m.filter((p,b)=>b===0||p.distanceToSquared(m[b-1])>.01)}function dM(n,t,e){const i=t.x-n.x,r=t.z-n.z,s=e.x-t.x,o=e.z-t.z,a=Math.atan2(i*o-r*s,i*s+r*o);return Math.abs(a)<.35?"straight":Math.abs(a)>Math.PI-.35?"around":a>0?"right":"left"}function fM(n,t,e,i=1.5){const r=t.x-n.x,s=t.z-n.z,o=Math.hypot(r,s);return o>.01&&((e.x-t.x)*r+(e.z-t.z)*s)/o>i}const ve={name:"Jems",icon:"◆",color:"#8655cf"},Ec={truck:[{id:"base",name:"Original",price:0,color:"#e6ad51",detail:"Gelb · klassischer MOVING EMPIRE-LKW"},{id:"city",name:"Stadt",price:25,color:"#cbdde1",detail:"Cremeweiß · blaue Akzente"},{id:"build",name:"Bau",price:40,color:"#ec8538",detail:"Baustellenorange · Warnmarkierungen"},{id:"premium",name:"Premium",price:65,color:"#303638",detail:"Anthrazit · goldene Details"}],person:[{id:"standard",name:"Standard",price:0,color:"#e6ad51",detail:"Gelbes Shirt · blaue Kappe"},{id:"build",name:"Bau",price:15,color:"#f29a32",detail:"Bauhelm · Warnweste"},{id:"logistics",name:"Logistik",price:20,color:"#4a8051",detail:"Grüne Kappe · Lieferweste"},{id:"workshop",name:"Werkstatt",price:25,color:"#ba4e42",detail:"Rotes Shirt · Werkzeug"},{id:"elite",name:"Elite",price:40,color:"#7960a2",detail:"Violett · futuristische Ausrüstung"}]};function tf(n,t){return`<img loading="lazy" decoding="async" src="./skins/${`${n}-${t}.webp`}" alt="${t} ${n} preview">`}function pM(n){return Math.max(0,Math.min(5,Math.ceil(Math.max(0,n)/20)))}function mM(n){return!n.test&&n.jems<10?!1:(n.test||(n.jems-=10),n.cash+=2e3,n.earned+=2e3,!0)}function gM(n,t,e){const i=Ec[t].find(r=>r.id===e);return!i||n.ownedSkins[t].includes(e)||!n.test&&n.jems<i.price?!1:(n.test||(n.jems-=i.price),n.ownedSkins[t].push(e),n.selectedSkins[t]=e,!0)}const et=n=>document.querySelector(n);et("#app").innerHTML=`<div id="world"></div><header><div class="wallet"><div class="cash-wallet"><small>COINS</small><strong id="cash"></strong></div><div class="jem-wallet" title="${ve.name}"><small>JEMS</small><strong><span>${ve.icon}</span> <span id="jem-count">0</span></strong></div><span id="cash-mode"></span></div><button id="mode-toggle" title="Switch game mode">DEV</button><button id="daily-button" title="Shop">🛒</button><button id="settings" title="Settings">⚙</button><button id="test-toggle" title="Development tools">🧪</button></header>
<div id="right-rail"><aside id="job-card"><button id="job-toggle"><span class="job-icon">▣</span><span><small id="job-label">YOUR NEXT MOVE</small><strong id="job-title">Small beginnings</strong></span><b>⌄</b></button><div id="job-body"><div id="job-step"></div><div class="progress"><i id="job-progress"></i></div><div id="job-count"></div><div id="job-value"></div></div></aside><button id="company-toggle" class="side-button">▥ Company</button><aside id="company-panel" hidden><h2>Your company</h2><div id="company-stats"></div><div id="fleet-list"></div></aside></div>
<aside id="tests" hidden><h3>DEVELOPMENT WORKBENCH</h3><p class="dev-note">Unlimited money and direct test actions are active.</p><div class="test-grid"><button data-test="job">New job</button><button data-test="pack">Pack all</button><button data-test="deliver">Deliver all</button><button data-test="home">Back to yard</button></div><h3>INSPECT EACH UPGRADE</h3><div id="upgrade-tests" class="test-grid"></div><button data-test="restart">Reset test career…</button></aside>
<div id="money-stream"></div><div id="status-bar" role="status"><div id="status-main"><b id="hint-key">E</b><span><small id="status-kicker">NEXT ACTION</small><strong id="nav-label">Job board</strong><em id="nav-distance"></em></span></div><div id="notice"><b id="notice-icon"><svg viewBox="0 0 36 36" aria-hidden="true"><path d="M15.2 4.8 Q18 1 20.8 4.8 L33.8 28.2 Q36 33 31 33 H5 Q0 33 2.2 28.2 Z" fill="#c83d39"/></svg><span>!</span></b><span id="notice-text"></span></div><div id="purchase" hidden><strong id="purchase-name"></strong><div class="progress"><i id="purchase-progress"></i></div><small id="purchase-detail">STAND STILL TO INVEST</small></div></div><aside id="tutorial-card" hidden><small>TUTORIAL</small><h2 id="tutorial-title"></h2><ul id="tutorial-points"></ul><div class="tutorial-actions"><button id="tutorial-skip">Skip tutorial</button><button id="tutorial-next">Got it</button></div></aside><nav id="camera-controls"><button id="camera-follow" title="Follow">◎</button><button id="zoom-in">＋</button><button id="zoom-out">−</button><button id="help">?</button></nav><button id="stuck-button" hidden>Got stuck?</button><footer><button data-action="interact"><b>E</b><span>Interact</span></button><button data-action="cab"><b>F</b><span>Cab</span></button><button data-action="rotate"><b>R</b><span>Rotate</span></button><button data-action="rear"><b>G</b><span>Rear</span></button></footer><dialog id="dialog"></dialog>`;document.querySelector("footer")?.insertAdjacentHTML("beforeend",'<button data-action="secure"><b>Q</b><span>Secure</span></button>');document.documentElement.style.setProperty("--premium-color",ve.color);et("#job-count").insertAdjacentHTML("afterend",'<div id="job-score"></div>');let ef=!1,W=Xd(),jt=null;for(const n of["movecraft-rewrite-v1","movecraft-update-backup"])try{const t=Qi.getItem(n);if(t){jt=JSON.parse(t);break}}catch{}try{if(jt?.company&&(W=jx(jt.company)),jt&&jt.worldVersion!==2){const n=t=>{t[0]>120?t[0]+=Fh.destination-144:t[0]>45&&(t[0]+=Fh.pickup-72)};for(const t of jt.loads??[])t.mode!=="truck"&&n(t.position);jt.truck&&(jt.truck.position=[0,0,0],jt.truck.yaw=0),jt.player=[-6,0,1],jt.navLeg="",jt.navIndex=0,jt.navPath=[],jt.worldVersion=2}}catch{}let Er=!0,wr=!0,xs=!0,Ms=!0,vi=.35,Al=!0,ro=null;try{const n=JSON.parse(Qi.getItem("movecraft-audio-v1")??"{}");Er=n.effects??Er,wr=n.ambient??wr,xs=n.music??xs,Ms=n.vehicle??Ms,vi=n.volume??vi}catch{}Df(()=>{ro&&af()});const Pe=new Wp;Pe.background=new qt(13032672);Pe.fog=new Wc(13032672,115,215);const Ei=new Lx({antialias:!0});Ei.setPixelRatio(Math.min(devicePixelRatio,1.5));Ei.shadowMap.enabled=!0;Ei.shadowMap.type=Jh;Ei.toneMapping=Ic;Ei.toneMappingExposure=1.15;et("#world").appendChild(Ei.domElement);const Oe=new Pa(-18,18,12,-12,.1,450);Oe.position.set(22,29,26);Oe.zoom=.78;const gn=new Nx(Oe,Ei.domElement);gn.enablePan=!1;gn.enableDamping=!0;gn.minZoom=.55;gn.maxZoom=3.5;gn.minPolarAngle=.35;gn.maxPolarAngle=1.03;Pe.add(new Rm(16775135,6588822,2));const ki=new Dm(16772305,2.7);ki.position.set(-25,45,20);ki.castShadow=!0;ki.shadow.mapSize.set(2048,2048);Object.assign(ki.shadow.camera,{left:-32,right:32,top:32,bottom:-32,near:.1,far:100});ki.shadow.normalBias=.035;Pe.add(ki,ki.target);const Na=cM();Pe.add(Na.root);const Ss=new me;Ss.name="navigation-route-guide";Pe.add(Ss);const nf=7.2,rf=()=>Te+6,ji=new me;ji.name="navigation-parking-guide";const sf=new ri({color:16768099,transparent:!0,opacity:.68,depthWrite:!1,side:an,polygonOffset:!0,polygonOffsetFactor:-3}),Ua=new Ft(new si(nf,1),sf);Ua.rotation.x=-Math.PI/2;Ua.position.y=.105;ji.add(Ua);ji.visible=!1;Pe.add(ji);let Ko="",Gt=eu(0,W.levels.truck,0),yn=Gt.fromSite.x,ln=Gt.fromSite.z??0,Tn=Gt.toSite.x,hn=Gt.toSite.z??0,gr=Qd(W),Bn=vs(yn,Gt.fromSite.variant,!1,ln),ni=vs(Tn,Gt.toSite.variant,!0,hn);Pe.add(gr.root,Bn.root,ni.root);const _r=Gd(15313475),ot=_r.root;function ma(){const n=Gd(15313475,0,W.selectedSkins.person,W.levels.worker),t=_r.root.userData.rig?.body;t&&(ot.remove(t),ei(t));const e=n.root.userData.rig.body;n.root.remove(e),ot.add(e),_r.root.userData.rig=n.root.userData.rig,_r.animate=n.animate}ma();ot.position.set(-6,0,1);Pe.add(ot);const iu=new Ft(new Jc(.38,.46,32),new ri({color:16773043,side:an}));iu.rotation.x=-Math.PI/2;iu.position.y=.04;ot.add(iu);let At,Te=4.2,Dn=5,Ve=!1,je=!1,zt=null,Qt=!1,Ie=0,ks=0,Rl=100,vr=1,Bi=1,wc=0,ga=0,xe=null;const ee=[],tr=[];let Ln=!1;const jr=new me;jr.name="cargo-safety-net";let ze=null,Wn=[];const Tc=new Map,Kn=new Ft(new si(1,1),new ri({color:16763725,transparent:!0,opacity:.82,side:an,depthWrite:!1}));Kn.rotation.x=-Math.PI/2;Kn.position.y=.095;Kn.visible=!1;Kn.renderOrder=4;Pe.add(Kn);const Ni=new Ft(new si(1,1),new ri({color:13974845,transparent:!0,opacity:.72,side:an,depthWrite:!1}));Ni.rotation.x=-Math.PI/2;Ni.position.y=.105;Ni.visible=!1;Ni.renderOrder=5;Pe.add(Ni);let ys=0,Yn=0,xr="",tn=0,kt=Number(jt?.tutorialStep??0),we=0,Cl=0,Pl=0,_a=0,Mn=0,Ac=0,ia="",ra="",zh=-1,rs=-10,ts=!1,Xn=0,Zn=!1,$s=0;const Zi=[],Rc=[],Cc=[],_M=ot.position.clone(),of=new A,Li=new A,Ne=new Set,ru=new A(0,1,0),Fn=new Ft(new nr(1,.04,1),new ri({color:2981988,transparent:!0,opacity:.58,depthTest:!0,depthWrite:!1}));Pe.add(Fn);Fn.renderOrder=10;const su=new Mc(new sm(Fn.geometry),new Yc({color:1527614,depthTest:!0,depthWrite:!1}));su.renderOrder=11;Fn.add(su);Fn.visible=!1;let hi=[],hs=[];const ii=n=>At.userData.cargo.localToWorld(n.clone()),wi=n=>At.userData.cargo.worldToLocal(n.clone()),Ys=n=>At.localToWorld(n.clone());let qs=null,va=null,xa=null,ss=null,os=null,kh=-1,Gh=-1,Hh=-1,Vh=-1;function Os(){Qi.setItem("movecraft-audio-v1",JSON.stringify({effects:Er,ambient:wr,music:xs,vehicle:Ms,volume:vi}))}function ou(){const n=ro??(ro=new AudioContext);if(n.resume(),qs)return n;const t=n.createBuffer(1,n.sampleRate*2,n.sampleRate),e=t.getChannelData(0);for(let s=0;s<e.length;s++)e[s]=(Math.random()*2-1)*.24;const i=n.createBufferSource();i.buffer=t,i.loop=!0;const r=n.createBiquadFilter();return r.type="lowpass",r.frequency.value=720,qs=n.createGain(),i.connect(r).connect(qs).connect(n.destination),i.start(),os=n.createOscillator(),os.type="sine",va=n.createGain(),os.connect(va).connect(n.destination),os.start(),ss=n.createOscillator(),ss.type="sawtooth",xa=n.createGain(),ss.connect(xa).connect(n.destination),ss.start(),n}function Tr(n){if(!Er||Zh())return;const t={coin:[660,880],purchase:[520,780,1040],reward:[620,880,1175],error:[220,165],door:[300,225]}[n],e=ou();t.forEach((i,r)=>{const s=e.createOscillator(),o=e.createGain(),a=e.currentTime+r*.07;s.type=n==="error"||n==="door"?"triangle":"sine",s.frequency.setValueAtTime(i,a),o.gain.setValueAtTime(1e-4,a),o.gain.exponentialRampToValueAtTime(Math.max(.001,vi*.09),a+.012),o.gain.exponentialRampToValueAtTime(1e-4,a+.13),s.connect(o).connect(e.destination),s.start(a),s.stop(a+.14)})}function af(){if(!ro||!qs||!va||!xa||!ss||!os)return;const n=ro.currentTime;qs.gain.setTargetAtTime(wr?vi*.065:0,n,.25),va.gain.setTargetAtTime(xs?vi*.042:0,n,.25),xa.gain.setTargetAtTime(Ms&&Qt?vi*(.012+Math.min(1,Math.abs(Ie)/10)*.055):0,n,.12),ss.frequency.setTargetAtTime(58+Math.abs(Ie)*13,n,.12);const t=Math.floor(we/1.5);t!==kh&&(kh=t,os.frequency.setTargetAtTime([174.6,220,196,261.6,174.6,233,196,146.8][t%8],n,.16));const e=Math.floor(we/11);wr&&e!==Gh&&(Gh=e,e>0&&oi(1050+e%3*120,.06))}function oi(n=500,t=.1){if(!(!Er||Zh()))try{const e=ou(),i=e.createOscillator(),r=e.createGain();i.frequency.value=n,r.gain.setValueAtTime(vi*.1,e.currentTime),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+t),i.connect(r).connect(e.destination),i.start(),i.stop(e.currentTime+t)}catch{}}function Vt(n){et("#notice-text").textContent=n;const t=/^(No |There |Clear |Park |Stand |Move around|Step |Brake |Stop |Finish |Cannot|Can't|The driver door|This furniture|Place .* on)/i.test(n);et("#notice").classList.toggle("error",t),t&&we-Vh>1.2&&(Vh=we,Tr("error")),_a=4,et("#status-bar").classList.add("show-notice")}function ir(n){Ne.clear();const t=!n.includes('class="reward-modal"');et("#dialog").innerHTML=`${t?'<button class="close" aria-label="Close">×</button>':""}${n}`,et("#dialog").open||et("#dialog").showModal(),t&&(et("#dialog .close").onclick=()=>et("#dialog").close())}const Jn=[["Welcome to MOVING EMPIRE",["Walk with W A S D; Shift makes you sprint","The top bar tells you the next useful action","We will introduce the controls in two complete groups"],"#status-bar"],["The whole Actions bar",["The row at the bottom contains every action","E interacts and places · F enters or leaves the cab · R rotates furniture","G moves the rear ramp · Q secures the entire load with a net","The same letters work on a keyboard; tap the buttons on touchscreens"],"footer"],["The whole Camera bar",["The four buttons on the left only change your view","◎ follows you again · + zooms in · − zooms out · ? opens help","Drag the scene to look around. These controls do not move your character"],"#camera-controls"],["Accept your first move",["The card on the right is your job panel","Walk onto the marked job field to accept a move"],"#job-card"],["Money and price fields",["Coins and Jems are shown together in the upper-left corner","Coins pay for upgrades: stand still on a marked price field to invest them","The field fills as you pay. A confirmation window opens when the upgrade is ready","Jems are earned from moves and daily gifts; they buy skins or coins in the shop"],".wallet"]],Ks=[["Choose your reward",["The completion window shows score and item damage","Collect coins now or use the video option for the shown bonus","Damage lowers coins and Jems"],"#job-card"],["The top task bar",["Shows the single action to do next","A red ! warns when something blocks an action","Follow the fixed blue ground arrows while driving"],"#status-bar"],["Your money",["Coins pay for upgrades","Jems buy skins and can be exchanged for coins"],".wallet"],["The Shop",["🛒 opens three tabs: daily gifts, coins & Jems, and skins","Claim one gift per day; a missed day restarts the streak","Skin purchases change looks, not upgrade levels"],"#daily-button"],["Coins and Jems",["The shop exchanges 10 Jems for 2,000 coins","The Jems video is an in-game preview until real ads are connected","Coins cannot buy Jems"],"#daily-button"],["Settings",["⚙ opens sound, city ambience, music and vehicle audio switches","It also has display quality, safe update and Replay tutorial","Got stuck? moves you to a safe road"],"#settings"],["Your job panel",["Shows the current task, cargo count, score and payment","Tap its heading to fold or open it"],"#job-card"],["Upgrade fields",["Stand still on a price field to pay","The large field fills as coins are invested","A window lists exactly what changed when complete"],"#status-bar"],["Your company",["▥ opens progress, employee trucks and their income","Truck size, worker strength and base level are upgrades, separate from skins"],"#company-toggle"],["Game mode",["NORMAL uses earned coins and Jems","DEV provides test money and the development workbench"],"#mode-toggle"],["Development tools",["🧪 appears in DEV mode and opens job, delivery and upgrade tests","Use NORMAL for your saved career"],"#mode-toggle"]],gi=10,dr=gi+Ks.length;function uo(){const n=kt>=dr,t=!et("#tutorial-card").hidden;document.body.classList.toggle("tutorial-active",t),document.body.dataset.tutorialStep=String(kt),document.body.dataset.tutorialStage=t?kt<=2?"intro":kt===3?"job":kt===4?"money":kt>=gi?"final":"move":"off",document.body.classList.toggle("tutorial-camera-introduced",kt>=2),document.body.classList.toggle("tutorial-shop-introduced",kt>=gi+3),document.body.classList.toggle("tutorial-settings-introduced",kt>=gi+5);const e=new Set(n||kt>=1?["interact","cab","rotate","rear","secure"]:[]);document.querySelectorAll("footer [data-action]").forEach(i=>i.classList.toggle("tutorial-hidden",!e.has(i.dataset.action)))}function ho(){const n=et("#tutorial-card"),t=et("#camera-controls");if(n.hidden){n.style.top="",n.style.maxHeight="",t.style.top="",t.style.transform="",t.style.visibility="",et("#right-rail").style.top="";return}const e=document.querySelector("#right-rail .tutorial-focus");if(innerWidth<=700&&document.body.dataset.tutorialStage==="final"&&e){const c=Math.ceil(e.getBoundingClientRect().bottom+12);n.style.top=`${c}px`,n.style.maxHeight=`${Math.max(150,innerHeight-c-94)}px`}else n.style.top="",n.style.maxHeight="";const i=n.getBoundingClientRect(),r=t.getBoundingClientRect(),s=et("footer").getBoundingClientRect().top,o=s-5;document.body.dataset.tutorialStage==="job"&&innerWidth<=700?et("#right-rail").style.top=`${Math.ceil(i.bottom+12)}px`:et("#right-rail").style.top="";const a=i.bottom+7;if(a+r.height>o){t.style.visibility="hidden";return}t.style.visibility="",t.style.top=`${a}px`,t.style.transform="none"}new ResizeObserver(ho).observe(et("#tutorial-card"));window.addEventListener("resize",ho);function fi(n,t,e="Got it",i=""){document.body.classList.remove("tutorial-exit","tutorial-exit-skip"),document.querySelectorAll(".tutorial-focus").forEach(r=>r.classList.remove("tutorial-focus")),et("#tutorial-title").textContent=n,et("#tutorial-points").innerHTML=t.map(r=>`<li>${r}</li>`).join(""),et("#tutorial-next").textContent=e,et("#tutorial-card").hidden=!1,et("#tests").hidden=!0,uo(),i&&document.querySelector(i)?.classList.add("tutorial-focus"),ho()}function lf(n=!1){document.body.classList.remove("tutorial-exit","tutorial-exit-skip"),document.body.offsetWidth,document.body.classList.toggle("tutorial-exit-skip",n),document.body.classList.add("tutorial-exit"),window.setTimeout(()=>document.body.classList.remove("tutorial-exit","tutorial-exit-skip"),1800)}function ds(n){W.jobs>0&&kt<gi&&(kt=gi),n==="job"&&kt<=5?(kt=6,fi("Follow the route",["Blue arrows show the way"],"Got it","#status-bar")):n==="lift"&&kt<=6?(kt=7,fi("Load furniture",["Green = fits · red = blocked","E places · R rotates"],"Got it",'[data-action="interact"]')):n==="loaded"&&kt<=7?(kt=8,fi("Get in the truck",["F · enter the cab"],"Got it",'[data-action="cab"]')):n==="cab"&&kt<=8?(kt=9,fi("Secure and drive",["Stand at the rear and press Q once to cover all cargo with a net","The net protects furniture from driving damage","W/S drives · A/D steers"],"Got it","#status-bar")):n==="delivered"&&kt<=9?(kt=9,fi("Finish the move",["Park in the yellow bay","Then choose your reward"],"Got it","#job-card")):n==="paid"&&kt<=gi&&(kt=gi,fi(Ks[0][0],Ks[0][1],"Next",Ks[0][2])),uo(),De()}et("#tutorial-next").onclick=()=>{if(kt<Jn.length-1)kt++,fi(Jn[kt][0],Jn[kt][1],"Got it",Jn[kt][2]);else if(kt>=gi&&kt<dr-1){kt++;const n=Ks[kt-gi];fi(n[0],n[1],kt===dr-1?"Finish tutorial":"Next",n[2])}else kt===Jn.length-1?kt=5:kt===dr-1&&(kt=dr),et("#tutorial-card").hidden=!0,ho(),document.querySelectorAll(".tutorial-focus").forEach(n=>n.classList.remove("tutorial-focus"));uo(),kt===dr&&lf(),De()};et("#tutorial-skip").onclick=()=>{kt=dr,et("#tutorial-card").hidden=!0,ho(),document.querySelectorAll(".tutorial-focus").forEach(n=>n.classList.remove("tutorial-focus")),uo(),lf(!0),De()};function so(){const n=At,t=n?.position.clone()??new A,e=n?.rotation.clone()??new yi;for(const o of ee)o.mode==="truck"&&Pe.attach(o.mesh);n&&ei(n),Dn=pa(W.levels.truck),Te=.2+Dn*.8,At=Vd(Dn,W.levels.truck,W.selectedSkins.truck),At.position.copy(t),At.rotation.copy(e),Pe.add(At);for(const o of ee)o.mode==="truck"&&(At.userData.cargo.add(o.mesh),o.mesh.position.copy(o.position));Pr();const i=new me;i.position.set(4.69,.35,-1.95),D(i,0,.55,.65,.06,1.1,1.28,At.userData.bodyColor,!0),D(i,0,1.4,.65,.06,.62,1.28,3495010,!0);const r=D(i,.035,1.4,.65,.025,.48,1.02,9091781);r.material=new gs({color:8895944,transparent:!0,opacity:.38,roughness:.12}),D(i,-.035,.68,.65,.035,.34,.95,7692094,!0);for(const o of[.04,1.26])D(i,.055,.85,o,.08,1.7,.06,3230808,!0);D(i,.075,.78,1.02,.035,.08,.24,2506569,!0),At.add(i);const s=i.clone(!0);s.position.x=1.31,s.scale.x=-1,At.add(s),At.userData.cabDoor=i,cf(),n&&Ba()}function vM(){ei(gr.root),gr=Qd(W),Pe.add(gr.root),lo(),zn(),Ba()}function cf(){const n=e=>e*e*(3-2*e),t=n(ue.clamp(vr*2,0,1));At.userData.rampPivot.rotation.x=ue.lerp(-Math.PI/2,Math.atan(.78/2.2),t),At.userData.cabDoor&&(At.userData.cabDoor.rotation.y=n(wc)*1.42)}function bs(n){n.mode==="truck"?(At.userData.cargo.add(n.mesh),n.mesh.position.copy(n.position)):n.mode==="hand"?(ot.add(n.mesh),n.mesh.position.set(0,.95,ao(n))):(Pe.add(n.mesh),n.mesh.position.copy(n.position)),n.mesh.rotation.set(0,n.item.rotated?Math.PI/2:0,0)}function Pr(){for(const c of[...jr.children])c instanceof Mc?(c.geometry.dispose(),c.material.dispose(),c.removeFromParent()):ei(c);At.userData.cargo.add(jr);const n=ee.filter(c=>c.mode==="truck");for(const c of n)c.secured=Ln;if(!Ln||!n.length)return;for(const c of n){const[l,u]=Qe(c.item),d=new Ft(new si(l*Ut-.06,u*Ut-.06),new ri({color:5548651,transparent:!0,opacity:.2,depthWrite:!1,side:an}));d.rotation.x=-Math.PI/2,d.position.set(c.position.x,.805,c.position.z),d.userData.owned=!0,jr.add(d)}At.updateMatrixWorld(!0);const t=Math.max(1.04,...n.map(c=>new Rr().setFromObject(c.mesh).max.y-At.position.y+.24));jr.userData.clearance=t;const e=[],i=Array.from({length:9},(c,l)=>1.35+l*3.3/8),r=Array.from({length:Dn*2+1},(c,l)=>.2+l*Ut/2),s=(c,l)=>e.push(...c.toArray(),...l.toArray());for(const c of r)for(let l=0;l<i.length-1;l++)s(new A(i[l],t,c),new A(i[l+1],t,c));for(const c of i)for(let l=0;l<r.length-1;l++)s(new A(c,t,r[l]),new A(c,t,r[l+1]));for(const c of[i[0],i.at(-1)])for(const l of[r[0],r.at(-1)])s(new A(c,.94,l),new A(c,t,l));const o=new Fe;o.setAttribute("position",new ie(e,3));const a=new Mc(o,new Yc({color:16118761,transparent:!0,opacity:.95}));a.userData.owned=!0,jr.add(a)}function xM(){const n=wi(ot.position);if(Qt||zt||ze||Math.hypot(n.x-3,n.z-Te)>3.1)return Vt("Stand at the rear of the truck to secure the load.");if(!ee.some(t=>t.mode==="truck"))return Vt("Load furniture before securing the net.");Ln=!Ln,Pr(),Vt(Ln?"Cargo net secured over the entire load.":"Cargo net opened for loading."),oi(Ln?600:350),De()}function Ma(n=!1){if(Ve&&!je&&!n)return Vt("Finish this move and collect payment first.");Ac=0;const t=`${Gt.fromSite?.id??""}->${Gt.toSite?.id??""}`;for(const s of ee)ei(s.mesh);ee.length=0,tr.length=0,Ln=!1,Pr(),zt=null,ze=null,ys=W.jobs;const e=Yn;do Yn=Math.floor(Math.random()*7);while(Yn===e);xr="",tn=0;const i=Math.max(W.jobs,Math.floor((W.levels.truck+W.levels.worker)*.45));let r=0;do Gt=eu(i,W.levels.truck,W.jobs*11+Yn+r++);while(`${Gt.fromSite.id}->${Gt.toSite.id}`===t&&r<10);Ve=!0,je=!1,yn=Gt.fromSite.x,ln=Gt.fromSite.z??0,Tn=Gt.toSite.x,hn=Gt.toSite.z??0,ei(Bn.root),ei(ni.root),Bn=vs(yn,Gt.fromSite.variant+Yn,!1,ln),ni=vs(Tn,Gt.toSite.variant+Yn,!0,hn),Pe.add(Bn.root,ni.root),uf(),Pc();for(const s of Gt.items){const o={item:s,mesh:Hd(s.model),mode:"ground",position:new A(yn+s.pickupX,.12,ln+s.pickupZ),velocity:new A,angular:new A,hitAt:-10,settled:!0,secured:!1,damage:0};ee.push(o),bs(o)}zn(),Vt(`New move: ${Gt.from} → ${Gt.to}. Follow the ground arrows.`),ds("job"),De()}function rr(){return Ve&&ee.length>0&&ee.every(n=>n.mode==="delivered")}function uf(){const n=[],t=new Set,e=[...Gt.items].sort((i,r)=>r.w*r.d-i.w*i.d||i.id-r.id);for(const i of e){const r=i.w*Ut+.32,s=i.d*Ut+.32,o=[];for(let l=ln-4.5+s/2;l<=ln+4.45-s/2;l+=.48)for(let u=yn-10.25+r/2;u<=yn-.95-r/2;u+=.48)o.push({x:u,z:l,rank:Math.sin(i.id*17.37+u*8.1+l*3.7)});o.sort((l,u)=>l.rank-u.rank);const a=({x:l,z:u},d)=>!Bn.barriers.some(h=>Math.abs(l-h.x)<(r+h.w)/2+d&&Math.abs(u-h.z)<(s+h.d)/2+d)&&!n.some(h=>Math.abs(l-h.x)<(r+h.w)/2+d&&Math.abs(u-h.z)<(s+h.d)/2+d);let c=o.find(l=>a(l,.18))??o.find(l=>a(l,.035));if(!c){const l=[];for(let u=ln+5.7+s/2;u<=ln+8.2-s/2;u+=.2)for(let d=yn-10+r/2;d<=yn-1.2-r/2;d+=.35)l.push({x:d,z:u});c=l.find(u=>a(u,.04))}c?(i.pickupX=c.x-yn,i.pickupZ=c.z-ln,n.push({x:c.x,z:c.z,w:r,d:s})):t.add(i.id)}t.size&&(Gt.items=Gt.items.filter(i=>!t.has(i.id)),Gt.reward=Math.round(Gt.items.reduce((i,r)=>i+r.value,0)*(1+(Gt.difficulty-1)*.07)))}function Pc(){Tc.clear();const n=ee.filter(r=>r.mode==="delivered").map(r=>({x:r.position.x,z:r.position.z,w:r.item.w*Ut,d:r.item.d*Ut})),t=Tn-10.1,e=hn-4.9,i=(ys*7+Yn*3)%11;for(const r of[...Gt.items].sort((s,o)=>o.w*o.d-s.w*s.d||s.id-o.id)){if(ee.some(o=>o.item.id===r.id&&o.mode==="delivered"))continue;let s;for(const o of[.18,.02])for(let a=0;a<121&&!s;a++){const c=(Math.floor(a/11)*3+i)%11,l=(a*7+i*2)%11;if(c>11-r.d||l>11-r.w)continue;const u=t+(l+r.w/2)*Ut,d=e+(c+r.d/2)*Ut,h=r.w*Ut/2,f=r.d*Ut/2,_=ni.barriers.some(m=>Math.abs(u-m.x)<h+m.w/2+o&&Math.abs(d-m.z)<f+m.d/2+o),y=n.some(m=>Math.abs(u-m.x)<h+m.w/2+o&&Math.abs(d-m.z)<f+m.d/2+o);!_&&!y&&(s=new A(u,.12,d),n.push({x:u,z:d,w:h*2,d:f*2}))}s&&Tc.set(r.id,s)}}function hf(n){const t=Tc.get(n.item.id);if(!t)return null;const e=ot.position.clone().add(new A(0,0,1.1).applyQuaternion(ot.quaternion));return{target:t,close:Math.min(Math.hypot(e.x-t.x,e.z-t.z),Math.hypot(ot.position.x-t.x,ot.position.z-t.z))<1.5}}function df(n){return n.x>Tn-10.5&&n.x<Tn-.5&&n.z>hn-5&&n.z<hn+4.9}function au(){return ii(new A(3,0,(Te-2.2)/2))}function Fa(){const n=ee.some(s=>s.mode==="ground"&&!s.fallen),t=!Ve||je?"yard":n?"pickup":"delivery";if(t==="yard")return{leg:t,point:new A(2,0,-15)};const i=(t==="pickup"?yn:Tn)+4,r=t==="pickup"?ln:hn;return{leg:t,point:new A(i,0,r-2.1)}}function lu(n=Fa().point){if(Math.abs(Ie)>=.35)return!1;const t=nf/2,e=rf()/2;for(const i of[.8,5.2])for(const r of[-2.35,Te+.25]){const s=ii(new A(i,0,r));if(Math.abs(s.x-n.x)>t||Math.abs(s.z-n.z)>e)return!1}return!0}function Sa(){return Math.round(Gt.reward*Math.max(.5,oo()/100))}function oo(){return Math.max(0,100-ee.reduce((n,t)=>n+(t.damage??0),0))}function ff(){const n=new Map;for(const t of tr){const e=`${t.item} · ${t.reason}`;n.set(e,(n.get(e)??0)+t.points)}return[...n].map(([t,e])=>`<li><span>${t}</span><b>−${e}</b></li>`).join("")}function Dc(n=1){if(!rr()||je)return;const t=Sa()*n;Ia(W,t);const e=pM(oo());W.jems+=e,W.jobs++,je=!0,zn(),oi(880,.3),Tr("reward"),Vt(`+$${t} · +${e} ${ve.name} · Move completed!`),ds("paid"),De()}function ya(){!rr()||je||et("#dialog").open||!et("#tutorial-card").hidden||(ir(`<div class="reward-modal"><small>MOVE COMPLETE</small><h2>$${Sa().toLocaleString("en-US")}</h2><p>${Gt.from} → ${Gt.to}</p><p>Care score: ${oo()}/100 · −${100-oo()} points</p>${tr.length?`<ul class="damage-list">${ff()}</ul>`:"<p>No cargo damage.</p>"}<button id="claim-normal">Collect money</button>${`<button id="claim-double">▶ Watch video · collect $${(Sa()*2).toLocaleString("en-US")}</button>`}<p class="fine">The reward video is a short in-game preview.</p></div>`),et("#claim-normal").onclick=()=>{et("#dialog").close(),Dc(1)},et("#claim-double").onclick=()=>{const n=et("#dialog");n.innerHTML='<div class="reward-video"><b>MOVING EMPIRE</b><p>Your crew makes every move count.</p><div class="progress"><i></i></div></div>',window.setTimeout(()=>{n.close(),Dc(2)},3e3)})}function MM(){if(W.levels.truck<bn.truck)return"truck"}function Dl(){if(!(W.levels.truck<bn.truck)){if(W.levels.yard<bn.yard&&W.fleet.length>=W.levels.yard)return"yard";if(W.levels.hire<bn.hire&&W.fleet.length<W.levels.yard)return"hire";if(qd(W)&&!W.finished)return"factory"}}function SM(n){if(W.test)return 0;if(n.income!==void 0)return Math.min(1,Mn/.8);if(n.upgrade)return Math.min(1,(W.contributions[n.upgrade]??0)/_s(W,n.upgrade));if(n.fleet!==void 0){const t=W.fleet[n.fleet];return t?Math.min(1,(t.contribution??0)/(1e3*(t.level+1))):0}return Math.min(1,Mn/1.8)}function zn(){for(const i of hi)ei(i.root);hi=[];const n=(i,r,s,o,a,c,l=0)=>{const u=Bh(r,s,0,0,7589002,l);u.position.copy(o),Pe.add(u),hi.push({key:i,root:u,position:o,upgrade:a,fleet:c})};n("job","NEXT MOVE",Ve&&!je?"ACTIVE":"ACCEPT",new A(-10,.06,1)),hi[hi.length-1].root.visible=!Ve||je,W.finished&&(hi[hi.length-1].root.visible=!1);const t={truck:new A(-.45,.06,-1.25),worker:new A(-20,.06,-4.8),yard:new A(-8,.06,-20.7),factory:new A(15,.06,-15)},e=[MM(),W.levels.worker<bn.worker?"worker":void 0,Dl()==="hire"?void 0:Dl()].filter((i,r,s)=>!!i&&s.indexOf(i)===r);for(const i of e){const r=_s(W,i),s=(W.contributions[i]??0)/r;n(i,br[i],W.test?"FREE":`$${r.toLocaleString("en-US")}`,t[i],i,void 0,s)}if(Dl()==="hire"){const i=W.fleet.length,r=_s(W,"hire");n("hire",`HIRE CREW ${i+1}`,W.test?"FREE":`$${r.toLocaleString("en-US")}`,new A(8+i*4.8,.06,-16.5),"hire",void 0,(W.contributions.hire??0)/r)}W.fleet.forEach((i,r)=>{if((i.pending??0)>0){const s=Bh("COLLECT CREW",`$${i.pending}`,0,0,7589002,0),o=new A(8+r*4.8,.05,-19.5);s.position.copy(o),Pe.add(s),hi.push({key:`income-${r}`,root:s,position:o,income:r})}if(i.level<4){const s=(i.level+1)*1e3;n(`fleet-${r}`,`TRUCK ${r+2} · LV ${i.level}`,W.test?"FREE":`$${s.toLocaleString("en-US")}`,new A(8+r*4.8,.05,-16.5),void 0,r,(i.contribution??0)/s)}})}function pf(n){const t=W.levels[n],e=tM(W,n);if(e)return Vt(e);Tr("purchase"),n==="truck"&&so(),n==="worker"&&ma(),["yard","hire"].includes(n)?vM():zn(),oi(700,.2);const i={truck:[`Loading deck: ${pa(t)} → ${pa(W.levels.truck)} rows`,`Top speed: ${Math.round((8.5+t*1.3)*3.6)} → ${Math.round((8.5+W.levels.truck*1.3)*3.6)} km/h`,W.levels.truck===1?"Cab and roof added":W.levels.truck===2?"More enclosed body panels":W.levels.truck===3?"Cargo body reinforced":W.levels.truck===4?"Full-height enclosed body completed":"Trailer length and load capacity increased",...W.levels.truck>=bn.truck?["Company-base upgrade unlocked"]:[]],worker:[`Worker level: ${t} → ${W.levels.worker}`,"More stamina before resting","Furniture carrying speed increased"],yard:[`Base level ${W.levels.yard}`,"One new employee parking bay",`${W.levels.yard} bays available`],hire:[`${W.fleet.length} crews employed`,"New employee added","New employee truck included"],factory:["MOVING EMPIRE completed","Furniture company purchased","Coming soon!"],cargo:["Included in the central truck upgrade"],gear:["Included in the central truck upgrade"],fleet:["Employee truck upgraded"]};W.levels[n]>t&&ir(`<div class="upgrade-modal"><small>UPGRADE COMPLETE</small><div class="upgrade-badge">✓</div><h2>${br[n]}</h2><ul>${i[n].map(r=>`<li>${r}</li>`).join("")}</ul><button class="modal-ok">Continue</button></div>`),document.querySelector(".modal-ok")?.addEventListener("click",()=>et("#dialog").close()),Vt(`${br[n]} · Level ${W.levels[n]}`),De()}function ba(){if(!(Qt||ze||zt))return hi.find(n=>{const t=Number(n.root.userData.padHalfWidth??1.3),e=Number(n.root.userData.padHalfDepth??.85);return n.root.visible&&Math.abs(ot.position.x-n.position.x)<t*1.16&&Math.abs(ot.position.z-n.position.z)<e*1.2&&Math.abs(ot.position.y-n.position.y)<1.15})}function Wh(n,t=!1){if(!t&&we-zh<.14)return;zh=we,we-Hh>.32&&(Hh=we,Tr("coin"));const e=document.querySelector(".wallet").getBoundingClientRect(),i=n.position.clone().project(Oe),r=(i.x+1)/2*innerWidth,s=(1-i.y)/2*innerHeight,o=e.left+e.width/2,a=e.top+e.height/2,c=t?r:o,l=t?s:a,u=t?o:r,d=t?a:s,h=document.createElement("i");h.textContent="$",h.style.left=`${c}px`,h.style.top=`${l}px`,h.style.setProperty("--money-x",`${u-c}px`),h.style.setProperty("--money-y",`${d-l}px`),h.classList.toggle("payout",t),et("#money-stream").appendChild(h),h.addEventListener("animationend",()=>h.remove(),{once:!0}),window.setTimeout(()=>h.remove(),1200)}function yM(n){const t=ba();if(!t||Li.length()>.2){Mn=0,ia="",et("#purchase").hidden=!0,t||(ra="");return}if(ra===t.key||(t.key!==ia&&(Mn=t.key==="job"?Ac:0,ia=t.key),t.upgrade&&$d(W,t.upgrade)))return;if(Mn+=n,t.key==="job"&&(Ac=Mn),t.upgrade&&!W.test){W.contributions??={};const s=_s(W,t.upgrade),o=W.contributions[t.upgrade]??0,a=Math.min(W.cash,s-o,s*n/1.8);W.cash-=a,W.contributions[t.upgrade]=o+a,Mn=Math.min(Mn,(o+a)/s*1.8),a>0&&Wh(t)}if(t.fleet!==void 0&&!W.test){const s=W.fleet[t.fleet],o=1e3*(s.level+1),a=s.contribution??0,c=Math.min(W.cash,o-a,o*n/1.8);W.cash-=c,s.contribution=a+c,Mn=Math.min(Mn,(a+c)/o*1.8),c>0&&Wh(t)}const e=W.test?Math.min(1,Mn/1.8):SM(t);t.root.userData.setProgress?.(e),et("#purchase").hidden=!1,et("#purchase-name").textContent=t.key==="job"?"Accept the next move":t.income!==void 0?`Collect $${W.fleet[t.income]?.pending??0}`:t.upgrade?br[t.upgrade]:"Upgrade fleet truck",et("#purchase-progress").style.width=`${Math.min(100,e*100)}%`;const i=t.upgrade?_s(W,t.upgrade):t.fleet!==void 0?1e3*(W.fleet[t.fleet].level+1):0,r=Math.min(i,Math.round(i*e));if(et("#purchase-detail").textContent=i?W.test?"DEVELOPMENT MODE · FREE":`${Math.round(e*100)}% · $${r.toLocaleString("en-US")} OF $${i.toLocaleString("en-US")} INVESTED`:"STAND STILL TO ACTIVATE",Mn>=1.8)if(ra=t.key,Mn=0,et("#purchase").hidden=!0,t.key==="job")Ma();else if(t.income!==void 0){const s=iM(W,t.income);Vt(`+$${s} · Employee route complete`),zn(),De()}else t.upgrade?pf(t.upgrade):t.fleet!==void 0&&eM(W,t.fleet)&&(lo(),zn(),ir(`<div class="upgrade-modal"><small>VEHICLE UPGRADED</small><div class="upgrade-badge">✓</div><h2>Employee truck ${t.fleet+2}</h2><ul><li>Faster route</li><li>$125 more income per trip</li><li>Vehicle level ${W.fleet[t.fleet].level}</li></ul><button class="modal-ok">Continue</button></div>`),et(".modal-ok").onclick=()=>et("#dialog").close(),De())}function bM(){const n=wi(ot.position);return n.x>1.15&&n.x<4.85&&n.z>=.2&&n.z<=Te&&ot.position.y>.6}function fo(n){const t=wi(n);if(t.x>1.4&&t.x<4.6){if(t.z>=.2&&t.z<=Te)return .78;if(vr>.94&&t.z>Te&&t.z<Te+2.2)return .78*(Te+2.2-t.z)/2.2}return 0}function EM(n,t=1/0){let e=-1/0;for(const i of ee){if(i.mode!=="truck"&&i.mode!=="ground")continue;const[r,s]=Qe(i.item),o=i.mode==="truck"?wi(n):n,a=i.position,c=a.y+jd(i.item.model);c<=t+.14&&Math.abs(o.x-a.x)<r*Ut/2-.08&&Math.abs(o.z-a.z)<s*Ut/2-.08&&(e=Math.max(e,c))}return e}function Ea(n,t=1/0){return Math.max(fo(n),EM(n,t))}function fs(){if(bM())return!0;const n=wi(ot.position);return vr>.94&&n.x>1.4&&n.x<4.6&&n.z>Te&&n.z<=Te+2.25}function mf(){let n,t=2.75;for(const e of ee){if(["hand","air","delivered"].includes(e.mode)||e.mode==="truck"&&!fs())continue;const i=e.mesh.getWorldPosition(new A),r=Math.hypot(i.x-ot.position.x,i.z-ot.position.z);r<t&&Math.abs(i.y-ot.position.y)<1.5&&(n=e,t=r)}return n}function Xh(n,t){return ee.every(e=>{if(e===t||["hand","air","delivered"].includes(e.mode))return!0;const i=e.mesh.getWorldPosition(new A),[r,s]=Qe(e.item);return Math.abs(n.x-i.x)>r*Ut/2+.38||Math.abs(n.z-i.z)>s*Ut/2+.38})}function wM(n){const t=n.mesh.getWorldPosition(new A),[e,i]=Qe(n.item),r=n.mode==="truck",s=r?n.position:t,a=[new A(s.x-e*Ut/2-.62,0,s.z),new A(s.x+e*Ut/2+.62,0,s.z),new A(s.x,0,s.z-i*Ut/2-.62),new A(s.x,0,s.z+i*Ut/2+.62)].map(u=>r?ii(u.setY(.78)):u.setY(0)).filter(u=>{if(Ar(u,.3)||!Xh(u,n)||r&&!Oa(u))return!1;for(let d=1;d<=6;d++){const h=ot.position.clone().lerp(u,d/6);if(!Xh(h,n)||Ar(h,.24))return!1}return!0});if(!a.length)return null;const c=a.sort((u,d)=>u.distanceToSquared(ot.position)-d.distanceToSquared(ot.position))[0];c.y=fo(c);const l=Math.atan2(t.x-c.x,t.z-c.z);return{to:c,yaw:l,item:t}}function cu(){if(!zt)return null;const[n,t]=Qe(zt.item),e=new A(0,0,.65+Math.max(n,t)*Ut/2).applyQuaternion(ot.quaternion).add(ot.position),i=wi(e),r=ee.map(u=>({...u.item,x:u.mode==="truck"?(u.position.x-1.4)/Ut-Qe(u.item)[0]/2:u.item.x,z:u.mode==="truck"?(u.position.z-.2)/Ut-Qe(u.item)[1]/2:u.item.z,location:u.mode==="truck"?"truck":"pickup"})),s=ue.clamp(Math.round((i.x-1.4)/Ut-n/2),0,4-n),o=ue.clamp(Math.round((i.z-.2)/Ut-t/2),0,Dn-t),a=(u,d)=>nu(r,zt.item,u,d,4,Dn);if(a(s,o))return{x:s,z:o,w:n,d:t,valid:!0};let c=null,l=1/0;for(let u=0;u<=Dn-t;u++)for(let d=0;d<=4-n;d++){const h=(d-s)**2+(u-o)**2;h<l&&a(d,u)&&(c={x:d,z:u,w:n,d:t,valid:!0},l=h)}return c??{x:s,z:o,w:n,d:t,valid:!1}}function ao(n){const[,t]=Qe(n.item);return .62+t*Ut/2}function TM(){if(ze||Qt)return;if(rr()&&!je)return ya();const n=ba();if(n){n.key==="job"?Vt("Stand still on the job field to accept a move."):n.key==="collect"?Dc():n.upgrade||n.fleet!==void 0?Vt("Stand still on this field; payment starts automatically."):Vt("Stand inside the markers to build.");return}if(zt){const o=zt,a=o.mesh.getWorldPosition(new A);let c,l;if(fs()){const f=cu();if(!f.valid)return Vt("No clear space nearby. Press R to rotate or move along the truck.");o.item.x=f.x,o.item.z=f.z,c=new A(1.4+(f.x+f.w/2)*Ut,.78,.2+(f.z+f.d/2)*Ut),l="truck"}else{const f=df(ot.position),_=hf(o);if(f&&!_)return Vt("This furniture has no clear delivery spot. Move away from the doorway and try again.");if(f&&_&&!_.close)return Vt(`Place ${o.item.name} on its highlighted spot.`);if(c=f&&_?_.target.clone():ot.position.clone().add(new A(0,0,1.1).applyQuaternion(ot.quaternion)),c.y=.12,l=f&&_?"delivered":"ground",l!=="delivered"&&Ar(c,.3))return Vt("There is a wall here. Step into the room.")}Pe.attach(o.mesh);const u=o.mesh.getWorldQuaternion(new Si),d=l==="delivered"?0:(l==="truck"?At.rotation.y:0)+(o.item.rotated?Math.PI/2:0),h=new Si().setFromEuler(new yi(0,d,0));ze={kind:"drop",load:o,time:0,duration:.5,from:a,to:l==="truck"?ii(c):c,mode:l,fromQuaternion:u,toQuaternion:h},o.position.copy(c),zt=null;return}const t=mf();if(!t)return Vt("Stand close to furniture.");if(Ve&&!je){const{leg:o,point:a}=Fa(),c=t.mode==="ground"&&o==="pickup",l=t.mode==="truck"&&o==="delivery";if((c||l)&&!lu(a))return Vt(`Park the complete truck inside the yellow ${o} bay first.`)}const e=t.mesh.getWorldPosition(new A),i=wM(t);if(!i)return Vt("Move around the furniture so there is room to lift it safely.");const r=ot.position.clone(),s=ue.clamp(r.distanceTo(i.to)/3.8,.18,.55);Pe.attach(t.mesh),ze={kind:"lift",load:t,time:0,duration:s+(.62+t.item.weight*.34)/(1+W.levels.worker*.23),from:e,to:new A,mode:"hand",approachFrom:r,approachTo:i.to,approachYaw:i.yaw,approachDuration:s},t.mode="hand",Ln=!1,t.secured=!1,Pr(),t.velocity.set(0,0,0),t.angular.set(0,0,0),oi(260)}function AM(n){if(!ze)return;ze.time+=n;const t=ze,e=t.approachDuration??0,i=t.time<e,r=Math.min(1,Math.max(0,(t.time-e)/(t.duration-e))),s=r*r*(3-2*r),o=ot.userData.rig;if(i&&t.approachFrom&&t.approachTo){const c=Math.min(1,t.time/e),l=c*c*(3-2*c);if(ot.position.lerpVectors(t.approachFrom,t.approachTo,l),_r.animate(we,!0,!1,!1),t.approachYaw!==void 0){const u=Math.atan2(Math.sin(t.approachYaw-ot.rotation.y),Math.cos(t.approachYaw-ot.rotation.y));ot.rotation.y+=u*(1-Math.exp(-12*n))}t.load.mesh.position.copy(t.from);return}o.body.rotation.x=.42*Math.sin(r*Math.PI),o.body.position.y=-.19*Math.sin(r*Math.PI),o.arms.forEach(c=>c.rotation.x=-1.35*Math.sin(Math.min(1,r*1.35)*Math.PI/2));const a=t.kind==="lift"?ue.smoothstep(r,.08,.94):s;if(t.kind==="lift"&&t.to.copy(ot.position).add(new A(0,.95,ao(t.load)).applyQuaternion(ot.quaternion)),t.kind==="lift"){const c=t.from.clone();c.y=Math.max(t.to.y,t.from.y+.95),a<.58?t.load.mesh.position.lerpVectors(t.from,c,ue.smoothstep(a/.58,0,1)):t.load.mesh.position.lerpVectors(c,t.to,ue.smoothstep((a-.58)/.42,0,1))}else t.load.mesh.position.lerpVectors(t.from,t.to,a),t.fromQuaternion&&t.toQuaternion&&t.load.mesh.quaternion.slerpQuaternions(t.fromQuaternion,t.toQuaternion,a);t.load.mesh.rotation.x=ue.damp(t.load.mesh.rotation.x,0,8,n),t.load.mesh.rotation.z=ue.damp(t.load.mesh.rotation.z,0,8,n),t.time>=t.duration&&(t.load.mode=t.mode,t.mode==="truck"&&(t.load.fallen=!1),t.mode==="delivered"&&(t.load.item.rotated=!1),t.kind==="lift"?(zt=t.load,ot.add(t.load.mesh),t.load.mesh.position.set(0,.95,ao(t.load)),t.load.mesh.rotation.set(0,t.load.item.rotated?Math.PI/2:0,0),ds("lift")):(bs(t.load),t.mode==="truck"&&(Ln=!1,Pr()),Ba(),t.mode==="truck"&&ds("loaded")),t.load.velocity.set(0,0,0),t.load.angular.set(0,0,0),t.load.settled=!0,ze=null,o.body.rotation.x=0,o.body.position.y=0,oi(520),rr()&&(zn(),Vt("Everything delivered. Choose your reward."),ds("delivered"),$s=1.6),De())}function RM(){if(Qt||ze||zt)return;const n=wi(ot.position);if(Math.hypot(n.x-3,n.z-Te)>4.8)return Vt("Walk to the rear of your truck.");if(n.x>1.2&&n.x<4.8&&n.z>Te-.2&&n.z<Te+2.4)return Vt("Step to the side of the ramp.");if(Bi<.5&&!lu())return Vt("Park fully in the yellow bay until it turns green before lowering the rear.");Bi=Bi>.5?0:1,oi(300,.25)}function CM(){if(!(ze||zt||xe)){if(Qt){Ie=0,ga=1,Tr("door"),xe={entering:!1,time:0,swapped:!1},Vt("Opening the driver door…");return}if(ot.position.distanceTo(Ys(new A(5.3,0,-1)))>3.8)return Vt("The driver door is at the front right.");ga=1,Tr("door"),xe={entering:!0,time:0,swapped:!1,from:ot.position.clone()},Li.set(0,0,0),Vt("Opening the driver door…")}}function PM(n){if(!xe)return;xe.time+=n;const t=xe.entering?.72:.5;if(xe.entering&&!xe.swapped&&xe.from&&xe.time>=.14){const e=Ys(new A(5.15,0,-1.15)),i=ue.smoothstep((xe.time-.14)/.55,0,1);e.y=fo(e),ot.position.lerpVectors(xe.from,e,i),ot.rotation.y=At.rotation.y-Math.PI/2,_r.animate(we,!0,!1,!1)}if(!xe.swapped&&xe.time>=t){if(xe.swapped=!0,xe.entering)Qt=!0,ot.visible=!1,Vt(Bi?"Rear lowered. Raise it with G when loading is complete.":"W/S drive and brake. F exits when stopped."),ds("cab");else{Qt=!1,ot.visible=!0;let e=Ys(new A(5.5,0,-1));for(const i of[5.5,.5]){const r=Ys(new A(i,0,-1));if(!Ar(r,.28)){e=r;break}}ot.position.copy(e),Ar(ot.position,.28)&&po(!1)}De()}xe.time>=(xe.entering?.82:.9)&&(ga=0),xe.time>=(xe.entering?1.18:1.35)&&(xe=null)}function Ar(n,t=.25){return[...Na.barriers,...gr.barriers,...Bn.barriers,...ni.barriers].some(e=>Math.abs(n.x-e.x)<e.w/2+t&&Math.abs(n.z-e.z)<e.d/2+t)}function gf(){for(const n of[1.15,1.8,2.5,3.2,3.9,4.55,4.85])for(let t=-2.35;t<=Te+.4;t+=.42)if(Ar(t<0?Ys(new A(n,0,t)):ii(new A(n,0,t)),.19))return!0;return!1}function DM(n){if(!zt)return!1;const[t,e]=Qe(zt.item),i=n.clone().add(new A(0,0,ao(zt)).applyAxisAngle(ru,ot.rotation.y)),r=t*Ut/2,s=e*Ut/2,o=Math.abs(Math.cos(ot.rotation.y)),a=Math.abs(Math.sin(ot.rotation.y)),c=r*o+s*a,l=r*a+s*o;return i.x-c<We.minX||i.x+c>We.maxX||i.z-l<We.minZ||i.z+l>We.maxZ?!0:[...Na.barriers,...gr.barriers,...Bn.barriers,...ni.barriers].some(u=>Math.abs(i.x-u.x)<c+u.w/2+.04&&Math.abs(i.z-u.z)<l+u.d/2+.04)}function Oa(n,t=Zn,e=ot.position.y){if(n.x<We.minX||n.x>We.maxX||n.z<We.minZ||n.z>We.maxZ||Ar(n)||DM(n))return!1;const i=wi(n);if(i.x>1.15&&i.x<4.85&&i.z>-2.4&&i.z<.2||!t&&Math.abs(Ea(n,e+.2)-e)>.22||i.z>=.2&&i.z<Te&&(Math.abs(i.x-1.4)<.15||Math.abs(i.x-4.6)<.15)&&e<(W.levels.truck>0?2.75:1.02))return!1;for(const r of ee)if(r.mode==="truck"||r.mode==="ground"){const[s,o]=Qe(r.item),a=r.mode==="truck"?r.position:r.mesh.getWorldPosition(new A),c=r.mode==="truck"?i:n,l=a.y+jd(r.item.model);if(e<l-.08&&Math.abs(c.x-a.x)<s*Ut/2+.16&&Math.abs(c.z-a.z)<o*Ut/2+.16)return!1}return!0}function LM(n){if(Qt||xe||ze||et("#dialog").open)return Li.set(0,0,0),ts=!1,!1;const t=Number(Ne.has("KeyD")||Ne.has("ArrowRight"))-Number(Ne.has("KeyA")||Ne.has("ArrowLeft")),e=Number(Ne.has("KeyW")||Ne.has("ArrowUp"))-Number(Ne.has("KeyS")||Ne.has("ArrowDown")),i=Oe.getWorldDirection(new A);i.y=0,i.normalize();const r=new A(-i.z,0,i.x).multiplyScalar(t).addScaledVector(i,e);ts=Ne.has("ShiftLeft")&&!zt&&Rl>(ts?2:18)&&r.lengthSq()>0,Rl=ue.clamp(Rl+n*(ts?-27:16+W.levels.worker*2),0,100);const s=zt?Math.max(1.35,3.1-zt.item.weight*.25/(1+W.levels.worker*.3)):ts?6.7:3.9;r.normalize().multiplyScalar(s*(1+W.levels.worker*.07)),Li.lerp(r,1-Math.exp(-10*n));const o=ot.position.clone();for(let a=0;a<4;a++)for(const c of["x","z"]){const l=ot.position.clone();if(l[c]+=Li[c]*n/4,Oa(l)){if(!Zn){const u=Ea(l,ot.position.y+.2);ot.position.y-u>.22?(Zn=!0,Xn=Math.min(0,Xn),l.y=ot.position.y):l.y=u}ot.position.copy(l)}}if(Li.length()>.1){const a=Math.atan2(Li.x,Li.z),c=Math.atan2(Math.sin(a-ot.rotation.y),Math.cos(a-ot.rotation.y));ot.rotation.y+=c*(1-Math.exp(-14*n))}return o.distanceTo(ot.position)>.003}function IM(){Qt||xe||ze||et("#dialog").open||Zn||(Zn=!0,Xn=4.3,oi(390,.08))}function NM(n){if(Qt||xe){Zn=!1,Xn=0;return}const t=Ea(ot.position,ot.position.y+.16);if(!Zn&&ot.position.y>t+.08&&(Zn=!0,Xn=Math.min(0,Xn)),!Zn){ot.position.y=t;return}const e=ot.position.y;Xn-=12.5*n,ot.position.y+=Xn*n;const i=Ea(ot.position,e+.12);Xn<=0&&ot.position.y<=i&&e>=i-.06&&(ot.position.y=i,Xn=0,Zn=!1),ot.position.y<-2&&po()}function po(n=!0){if(Qt)return;const t=ot.position.clone(),e=[];for(const r of mn)for(let s=We.minX+6;s<We.maxX-6;s+=3)e.push(new A(s,0,r));for(const r of mr)for(let s=We.minZ+6;s<We.maxZ-6;s+=3)e.push(new A(r,0,s));e.sort((r,s)=>r.distanceToSquared(t)-s.distanceToSquared(t));for(const r of[2,3,4.2,5.5])for(let s=0;s<16;s++)e.push(new A(t.x+Math.cos(s*Math.PI*2/16)*r,0,t.z+Math.sin(s*Math.PI*2/16)*r));const i=e.find(r=>(r.y=fo(r),Oa(r,!1,r.y)));ot.position.copy(i??new A(-6,0,1)),Xn=0,Zn=!1,Li.set(0,0,0),Cc.length=0,_M.copy(ot.position),et("#stuck-button").hidden=!0,n&&Vt("Moved you to the nearest clear space."),De()}function _f(){const n=au(),t=At.rotation.y,e=At.userData.trailer,i=e.rotation.y,r=new A(3,0,(Te-2.2)/2),s=[];for(const c of mn)for(let l=We.minX+9;l<We.maxX-9;l+=4)s.push({center:new A(l,0,c),yaw:Math.PI/2});for(const c of mr)for(let l=We.minZ+9;l<We.maxZ-9;l+=4)s.push({center:new A(c,0,l),yaw:0});s.sort((c,l)=>c.center.distanceToSquared(n)-l.center.distanceToSquared(n));for(const c of[3.5,5.5,8])for(let l=0;l<12;l++)s.push({center:n.clone().add(new A(Math.cos(l*Math.PI*2/12)*c,0,Math.sin(l*Math.PI*2/12)*c)),yaw:t});const o=At.position.clone();e.rotation.y=0;const a=s.find(({center:c,yaw:l})=>(At.rotation.y=l,At.position.copy(c).sub(r.clone().applyAxisAngle(ru,l)),At.updateMatrixWorld(!0),!(gf()||hs.some(d=>d.visible&&c.distanceTo(d.position)<4.2))));a||(At.position.copy(o),At.rotation.y=t,e.rotation.y=i),At.updateMatrixWorld(!0),Ie=0,ks=0,Rc.length=0,Zi.length=0,of.copy(At.position),et("#stuck-button").hidden=!0,Vt(a?"Moved the truck to the nearest clear space.":"No clear rescue position found nearby."),De()}function Ba(){!Qt&&!Oa(ot.position,!1,ot.position.y)&&po(!1)}function UM(n){if(!Qt||xe)return{acceleration:0,yawRate:0};const t=Number(Ne.has("KeyW")||Ne.has("ArrowUp"))-Number(Ne.has("KeyS")||Ne.has("ArrowDown")),e=Number(Ne.has("KeyA")||Ne.has("ArrowLeft"))-Number(Ne.has("KeyD")||Ne.has("ArrowRight")),i=Ie;if(t&&Bi>.05)return Ie=0,we-rs>1.5&&(rs=we,Vt("Raise the rear with G before driving.")),{acceleration:0,yawRate:0};Ie+=t*(t*Ie<0?10:4+W.levels.truck*.45)*n,t||(Ie*=Math.exp(-1.7*n)),!t&&Math.abs(Ie)<.04&&(Ie=0),Ie=ue.clamp(Ie,-4,8.5+W.levels.truck*1.3),ks=ue.damp(ks,e*.52,6,n);const r=At.userData.trailer;r.rotation.y=0,At.updateMatrixWorld(!0);const s=Ie*Math.tan(ks)/Math.max(3.1,Te*.65),o=new A(3,0,(Te-2.2)/2),a=ii(o),c=a.clone(),l=At.position.clone(),u=At.rotation.y;At.rotation.y+=s*n,a.addScaledVector(new A(-Math.sin(At.rotation.y),0,-Math.cos(At.rotation.y)),Ie*n),At.position.copy(a).sub(o.applyAxisAngle(ru,At.rotation.y)),At.updateMatrixWorld(!0);let d=!1,h=!1;d=gf();const f=2.4;(a.x<We.minX+f||a.x>We.maxX-f||a.z<We.minZ+f||a.z>We.maxZ-f)&&(d=!0);for(const _ of hs)_.visible&&a.distanceTo(_.position)<4.2&&a.distanceTo(_.position)<c.distanceTo(_.position)-.005&&(d=!0,h=!0);d&&(At.position.copy(l),Zi.push(we),At.rotation.y=u,At.updateMatrixWorld(!0),Ie=-i*.12,we-rs>.7&&(rs=we,oi(120,.18),h&&Vt("Both trucks stopped safely. Reverse away to continue.")));for(const _ of At.userData.wheels??[])_.rotation.x-=Ie*n/.46;for(const _ of At.userData.frontWheels??[])_.rotation.y=ue.damp(_.rotation.y,ks*.72,9,n);return{acceleration:(Ie-i)/n,yawRate:s}}function lo(){hs.forEach(ei),hs=[],W.fleet.forEach((n,t)=>{const e=new me;e.name=`fleet-${t}`;const i=Vd(5,Math.min(n.level,4),W.selectedSkins.truck,!1);i.name=`employee-truck-${t}`,i.scale.setScalar(.64),i.position.set(-1.92,0,-.6),i.userData.rampPivot.rotation.x=-Math.PI/2;const r=new me;D(r,3.5,1.3,-1.22,.58,.6,.45,5668486,!0);const s=new Ft(new Ca(.24,12,10),new gs({color:15121803}));s.position.set(3.5,1.77,-1.22),r.add(s),i.add(r),e.add(i),e.userData.wheels=i.userData.wheels,e.userData.skin=W.selectedSkins.truck;const o=xf(vf(n,t),n.phase);e.position.copy(o.position),e.rotation.y=o.yaw+Math.PI,e.userData.safePosition=o.position.clone(),Pe.add(e),hs.push(e)})}function vf(n,t){const e=8+t*4.8,i=(n.route??t%3)%3,r=new A(e,0,-9),s=102+i*4;return[r,new A(e,0,-15),new A(43,0,-15),new A(90,0,-15),new A(90,0,-42),new A(s,0,-42),new A(90,0,-42),new A(90,0,-15),new A(43,0,-15),new A(e,0,-15),r]}function xf(n,t){if(t<=0)return{position:n[0].clone(),yaw:Math.PI};const e=n.slice(1).map((s,o)=>s.distanceTo(n[o])),i=e.reduce((s,o)=>s+o,0);let r=ue.clamp(t,0,.9999)*i;for(let s=0;s<e.length;s++){if(r<=e[s]){const o=r/Math.max(.001,e[s]),a=n[s].clone().lerp(n[s+1],o),c=n[s+1].clone().sub(n[s]);return{position:a,yaw:Math.atan2(c.x,c.z)}}r-=e[s]}return{position:n.at(-1).clone(),yaw:0}}function FM(n){const t=W.fleet.map(s=>s.pending??0),e=aM(W,n);e&&_a<=0&&Vt(`+$${e} · Your company is working`),At.updateMatrixWorld(!0);const i=[],r=new Rr().setFromObject(At).expandByScalar(2.2);W.fleet.forEach((s,o)=>{const a=hs[o];if(!a)return;s.route??=o%3;const c=xf(vf(s,o),s.phase),l=i.some(d=>d.distanceTo(c.position)<3.5),u=r.containsPoint(c.position.clone().setY(1));if((l||u)&&a.userData.safePosition)s.phase-=n/Yd(s),a.position.copy(a.userData.safePosition);else{const d=a.userData.safePosition?c.position.distanceTo(a.userData.safePosition):0;a.position.copy(c.position),a.rotation.y=c.yaw+Math.PI;for(const h of a.userData.wheels??[])h.rotation.x-=d/.4;a.userData.safePosition=c.position.clone()}i.push(a.position.clone())}),W.fleet.some((s,o)=>(s.pending??0)>t[o])&&(zn(),Vt("An employee truck returned. Collect its income at the parking bay."),De())}function OM(n){const t=Qt?ii(new A(3,0,2)):ot.position;for(const s of[...Na.roofs,...gr.roofs,...Bn.roofs,...ni.roofs]){const o=Math.abs(t.x-s.bounds.x)<s.bounds.w/2+1&&Math.abs(t.z-s.bounds.z)<s.bounds.d/2+1;for(const a of[s.mesh,...s.walls??[]]){const c=a.material;c.opacity=ue.damp(c.opacity,o?.035:1,6,n),c.depthWrite=c.opacity>.5,a.castShadow=c.opacity>.5}}const e=wi(ot.position),i=!Qt&&e.x>1&&e.x<5&&e.z>-.1&&e.z<Te+2.5,r=[At.userData.roof,...At.userData.cargoWalls??[]];for(const s of r){const o=s.material;o.opacity=ue.damp(o.opacity,i||Qt?.025:1,7,n),o.depthWrite=o.opacity>.5,s.castShadow=o.opacity>.5}}function BM(){if(!Ve||je)return{point:new A(-10,0,1),text:"Accept a move at your job board"};if(rr())return{point:new A(Tn+2,0,hn),text:"Choose your completion reward"};const n=ee.find(t=>t.mode==="ground");return n?{point:n.position.clone(),text:n.fallen?"Recover the fallen furniture":"Pick up the furniture"}:{point:new A(Tn-5.6,0,hn+1),text:"Unload inside the new home"}}function zM(n){if(!Qt)return n;const t=au(),{leg:e,point:i}=Fa(),r=i.x,s=i.z;if(Math.abs(t.x-r)<10&&Math.abs(t.z-s)<10)return xr=e,Wn=[],tn=0,{point:new A(r,0,s),text:e==="yard"?"Park fully inside the yellow yard bay":`Park fully inside the yellow ${e} bay`};const o=Wn.length<2?1/0:Math.min(...Wn.slice(1).map((M,g)=>{const x=Wn[g],R=M.x-x.x,v=M.z-x.z,w=R*R+v*v,P=w?ue.clamp(((t.x-x.x)*R+(t.z-x.z)*v)/w,0,1):0;return Math.hypot(t.x-x.x-R*P,t.z-x.z-v*P)})),a=M=>mn.reduce((g,x)=>Math.abs(x-(M+12))<Math.abs(g-(M+12))?x:g),l=e==="yard"?12:a(e==="pickup"?ln:hn),u=t.x>-26&&t.x<36&&t.z>-36&&t.z<8,d=(M,g)=>Math.abs(t.x-(M+4))<12&&Math.abs(t.z-(g-2.1))<13,h=u?12:d(yn,ln)?a(ln):d(Tn,hn)?a(hn):void 0;(xr!==e||!Wn.length||o>7)&&(xr=e,tn=0,Wn=hM(t,new A(r,0,s),{startLane:h,goalLane:l}));const f=Wn;let _=0,y=1/0;for(let M=0;M<f.length-1;M++){const g=f[M],x=f[M+1],R=x.x-g.x,v=x.z-g.z,w=R*R+v*v,P=w?ue.clamp(((t.x-g.x)*R+(t.z-g.z)*v)/w,0,1):0,F=Math.hypot(t.x-g.x-R*P,t.z-g.z-v*P)+Math.max(0,tn-M-1)*2;F<y&&(y=F,_=M)}for(tn=Math.min(f.length-1,Math.max(tn,_+1));tn<f.length-1&&(t.distanceTo(f[tn])<2.5||fM(f[tn-1],f[tn],t));)tn++;const m=f[tn],p=Math.round(t.distanceTo(m)),b=f[tn+1];let T=e==="yard"?"Return to your company yard":`Continue to the ${e} house`;if(b){const M=dM(f[tn-1],m,b);T=M==="straight"?`Continue straight for ${p} m`:M==="around"?`In ${p} m turn around`:`In ${p} m turn ${M}`}else p<18&&(T=e==="yard"?"Park in your company yard":`Park at the ${e} house`);return{point:m,text:T}}function $h(){for(;Ss.children.length;){const n=Ss.children.pop();n instanceof Ft&&(n.geometry.dispose(),n.material.dispose())}}function kM(){const n=Qt&&Wn.length>1,t=Fa().point;if(ji.visible=Qt,ji.position.set(t.x,0,t.z),Ua.scale.y=rf(),!n){Ko&&$h(),Ko="";return}const e=Wn,i=`${xr}:${e.map(l=>`${l.x.toFixed(1)},${l.z.toFixed(1)}`).join(";")}`,r=()=>{const l=Ss.children[0];if(!l)return;const d=l.geometry.userData.segmentEnds[Math.max(0,tn-2)]??0;l.geometry.setDrawRange(d,l.geometry.getAttribute("position").count-d)};if(i===Ko){r();return}Ko=i,$h();const s=[],o=[];for(let l=0;l<e.length-1;l++){const u=e[l],d=e[l+1],h=d.clone().sub(u),f=h.length(),_=mn.some(T=>Math.abs(u.z-T)<.15&&Math.abs(d.z-T)<.15)||mr.some(T=>Math.abs(u.x-T)<.15&&Math.abs(d.x-T)<.15);if(f<.5||!_){o.push(s.length/3);continue}const y=h.multiplyScalar(1/f),m=new A(-y.z,0,y.x),p=4.2,b=Math.min(2.2,f*.4);for(let T=b;T<f-.45;T+=p){const M=u.clone().addScaledVector(y,T),g=M.clone().addScaledVector(y,.82),x=M.clone().addScaledVector(y,-.58),R=x.clone().addScaledVector(m,.5),v=x.clone().addScaledVector(m,-.5);s.push(g.x,.14,g.z,R.x,.14,R.z,v.x,.14,v.z)}o.push(s.length/3)}if(!s.length)return;const a=new Fe;a.setAttribute("position",new ie(s,3)),a.userData.segmentEnds=o,a.computeVertexNormals();const c=new Ft(a,new ri({color:7792592,transparent:!0,opacity:.82,side:an,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3}));c.name="route-ground-arrows",c.renderOrder=3,Ss.add(c),r()}function uu(){const n=BM(),t=zM(n),e=ee.filter(c=>c.mode==="truck").length,i=ee.filter(c=>c.mode==="delivered").length;kM(),et("#jem-count").textContent=W.test?"∞":W.jems.toLocaleString("en-US"),et("#cash").textContent=W.test?"∞":`$${Math.floor(W.cash).toLocaleString("en-US")}`,et("#cash-mode").textContent=W.test?"TEST MONEY":`$${Math.floor(W.earned).toLocaleString("en-US")} earned`,et("#job-title").textContent=je?W.finished?"Coming soon":"Move completed!":Ve?Gt.title:"Small beginnings",et("#job-label").textContent=Ve?`MOVE ${ys+1} · LEVEL ${Gt.difficulty}`:"YOUR NEXT MOVE",et("#job-step").textContent=t.text,et("#job-progress").style.width=`${Ve?(e+i*2)/ee.length/2*100:0}%`,et("#job-count").textContent=Ve?`${e} in truck  ·  ${i}/${ee.length} delivered`:"Your first customer is waiting",et("#job-score").innerHTML=Ve?`<div class="score-total"><span>CARE SCORE</span><b>${oo()}/100</b></div>${tr.length?`<ul class="damage-list">${ff()}</ul>`:"<small>No cargo damage</small>"}`:"",et("#job-value").textContent=Ve?`${je?"COLLECTED":"PAYDAY"}  $${rr()?Sa():Gt.reward}`:W.finished?"You built the complete company.":"Start with a job. Build an empire.";const r=Qt?ii(new A(3,0,1)):ot.position,s=Math.round(r.distanceTo(t.point));et("#nav-distance").textContent=Qt&&s>5?`${s} m`:"",et("#status-kicker").textContent=Qt?`${Math.round(Math.abs(Ie)*3.6)} KM/H · NEXT ACTION`:"NEXT ACTION";let o="E",a=t.text;if(ze)a=`${ze.kind==="lift"?"Lifting":"Placing"} ${ze.load.item.name}`,o="···";else if(Qt)o="W/S",a=t.text;else if(zt)a=fs()?cu()?.valid?"Place in highlighted space · R rotate":"No clear space nearby · R rotate or move closer":Kn.visible?`Place ${zt.item.name} on the marked spot`:"Carry to the truck or into the delivery house";else if(ba()){const c=ba();a=c.key==="job"?"Stand still on the job field to accept a move":c.income!==void 0?`Collect $${W.fleet[c.income]?.pending??0} from this crew`:c.upgrade?`Stand still to upgrade ${br[c.upgrade]}`:"Stand still to upgrade this fleet truck",o=c.key==="job"?"⏱":c.upgrade||c.fleet!==void 0?"$":"E"}else{const c=mf(),l=wi(ot.position);c?(a=`Lift ${c.item.name} · ${c.item.weight>=4?"HEAVY":c.item.fragile?"FRAGILE":"READY"}`,o="E"):Math.hypot(l.x-5.3,l.z+1)<3?(a="Enter your truck",o="F"):Math.hypot(l.x-3,l.z-Te)<4&&(ee.some(u=>u.mode==="truck")&&!Ln?(a="Secure all cargo with the net",o="Q"):(a=Bi?"Raise the rear":"Lower the rear",o="G"))}et("#hint-key").textContent=o,et("#nav-label").textContent=a,et("#company-stats").innerHTML=`<div><b>${W.jobs}</b><span>YOUR MOVES</span></div><div><b>${W.levels.hire}</b><span>CREWS</span></div><div><b>${W.fleet.length}</b><span>FLEET TRUCKS</span></div>`,et("#fleet-list").innerHTML=W.fleet.map((c,l)=>`<div class="fleet-row"><span>Truck ${l+2} · Level ${c.level}<small>${(c.pending??0)>0?`$${c.pending} ready at parking bay`:c.phase<.05?"Loading at the base":c.phase<.82?"Driving through the city tunnel":"Returning to its bay"} · ${c.completed} trips</small></span><div class="progress"><i style="width:${Math.max(0,c.phase)*100}%"></i></div></div>`).join(""),document.querySelectorAll("[data-upgrade]").forEach(c=>{const l=c.dataset.upgrade;c.textContent=`${br[l]} · ${W.levels[l]}/${bn[l]}`})}function De(){if(!ef)try{Qi.setItem("movecraft-rewrite-v1",JSON.stringify({worldVersion:2,navPath:Wn.map(n=>n.toArray()),company:W,contract:Gt,jobActive:Ve,jobPaid:je,jobNumber:ys,routeVariant:Yn,netSecured:Ln,damageLog:tr,navLeg:xr,navIndex:tn,tutorialStep:kt,truck:{position:At.position.toArray(),yaw:At.rotation.y,trailerAngle:At.userData.trailer.rotation.y,rear:Bi},player:ot.position.toArray(),loads:ee.map(n=>({item:n.item,mode:n.mode==="hand"?"ground":n.mode,position:n.mode==="hand"?ot.position.toArray():n.position.toArray(),velocity:n.velocity.toArray(),rotation:n.mesh.rotation.toArray(),settled:n.settled,secured:n.secured,damage:n.damage,fallen:n.fallen}))}))}catch{}}function GM(){if(jt)try{Gt=jt.contract?.fromSite&&jt.contract?.toSite?jt.contract:{...eu(jt.jobNumber??W.jobs,W.levels.truck,jt.routeVariant??0),...jt.contract??{},fromSite:Gt.fromSite,toSite:Gt.toSite},yn=Gt.fromSite.x,ln=Gt.fromSite.z??0,Tn=Gt.toSite.x,hn=Gt.toSite.z??0,Ve=!!jt.jobActive,je=!!jt.jobPaid,ys=jt.jobNumber??0,Yn=jt.routeVariant??ys%3,tr.length=0,tr.push(...jt.damageLog??[]),Ln=!!jt.netSecured,xr="",tn=0,Wn=[],jt.truck&&(At.position.fromArray(jt.truck.position),At.rotation.y=jt.truck.yaw,At.userData.trailer.rotation.y=0,vr=Bi=jt.truck.rear),jt.player&&ot.position.fromArray(jt.player),Ve&&(ei(Bn.root),ei(ni.root),Bn=vs(yn,Gt.fromSite.variant+Yn,!1,ln),ni=vs(Tn,Gt.toSite.variant+Yn,!0,hn),Pe.add(Bn.root,ni.root),uf(),Pc());let n=!1;for(const t of jt.loads??[]){const e={item:t.item,mesh:Hd(t.item.model),mode:t.mode,position:new A().fromArray(t.position),velocity:new A().fromArray(t.velocity??[0,0,0]),angular:new A,hitAt:-10,settled:t.settled,secured:t.secured??!1,damage:t.damage??0,fallen:t.fallen??!1};if(t.shelf&&e.mode==="truck"&&(n=!0,e.position.y=.78,e.item.x=Math.max(0,Math.min(3,e.item.x)),e.item.z=Math.max(0,Math.min(Dn-Qe(e.item)[1],e.item.z)),e.position.x=1.4+(e.item.x+Qe(e.item)[0]/2)*Ut,e.position.z=.2+(e.item.z+Qe(e.item)[1]/2)*Ut),ee.push(e),e.mode==="ground"&&!e.fallen&&Bn.barriers.some(i=>Math.abs(e.position.x-i.x)<(e.item.w*Ut+i.w)/2+.18&&Math.abs(e.position.z-i.z)<(e.item.d*Ut+i.d)/2+.18)){const i=Gt.items.find(r=>r.id===e.item.id);i&&(e.item.pickupX=i.pickupX,e.item.pickupZ=i.pickupZ),e.position.set(yn+e.item.pickupX,.12,ln+e.item.pickupZ)}bs(e),t.rotation&&e.mode!=="truck"&&e.mesh.rotation.fromArray(t.rotation)}if(n||ee.some(t=>t.mode==="truck"&&t.item.z+Qe(t.item)[1]>Dn)){const t=[];let e=0;for(const i of ee.filter(r=>r.mode==="truck")){let r;const s=i.item.rotated;for(const o of[s,!s]){i.item.rotated=o;for(let a=0;a<Dn&&!r;a++)for(let c=0;c<4&&!r;c++)nu(t,i.item,c,a,4,Dn)&&(r={x:c,z:a,rotated:o});if(r)break}if(r){i.item.rotated=r.rotated,i.item.x=r.x,i.item.z=r.z;const[o,a]=Qe(i.item);i.position.set(1.4+(r.x+o/2)*Ut,.78,.2+(r.z+a/2)*Ut),t.push({...i.item,location:"truck"})}else i.mode="ground",i.fallen=!0,i.secured=!1,i.position.copy(ii(new A(3+e%2*1.4,.12,Te+3+Math.floor(e/2)*1.5))),e++;bs(i)}}Ve&&Pc(),Pr(),Ba()}catch{Vt("Saved session could not be fully restored.")}}function HM(){(!Ve||je)&&Ma(!0),Ln=!1,W.levels.truck<3&&(W.levels.truck=3,W.levels.cargo=W.levels.gear=3,so()),zt=null,ze=null;for(const n of ee)n.mode="ground",n.item.rotated=!1;for(const n of ee){let t=!1;for(const e of[!1,!0]){if(t)break;n.item.rotated=e;for(let i=0;i<Dn&&!t;i++)for(let r=0;r<4&&!t;r++){const s=ee.map(o=>({...o.item,location:o.mode==="truck"?"truck":"pickup"}));if(nu(s,n.item,r,i,4,Dn)){n.item.x=r,n.item.z=i;const[o,a]=Qe(n.item);n.mode="truck",n.position.set(1.4+(r+o/2)*Ut,.78,.2+(i+a/2)*Ut),n.velocity.set(0,0,0),t=!0}}}bs(n)}zn(),Pr(),Vt(`${ee.filter(n=>n.mode==="truck").length}/${ee.length} packed. Test packing expands the cargo bay.`),De()}function VM(n){if(Math.abs(Ie)>.35)return Vt("Stop before using test tools.");n==="job"&&Ma(!0),n==="pack"&&HM(),n==="deliver"&&(Ve||Ma(),ee.forEach((t,e)=>{t.mode="delivered",t.position.set(Tn-8+e%3*2.5,.12,hn-3+Math.floor(e/3)*2.5),bs(t)}),zt=null,ze=null,zn(),ot.position.set(Tn-6,0,hn+6),Qt=!1,ot.visible=!0,Vt("Delivery complete. Choose your reward."),ya()),n==="home"&&(ot.position.set(-6,0,1),Qt=!1,ot.visible=!0,Vt("Test teleport: player returned. Truck and cargo stay where they are.")),n==="restart"&&(ir('<h2>Reset test career?</h2><p>This replaces your saved rewrite career with the shabby starting setup.</p><button id="confirm-reset">Reset career</button>'),et("#confirm-reset").onclick=()=>{ef=!0,Qi.removeItem("movecraft-rewrite-v1"),Qi.removeItem("movecraft-update-backup"),location.reload()}),De()}const Mf={interact:TM,cab:CM,rotate:()=>{zt&&!ze&&(zt.item.rotated=!zt.item.rotated,zt.mesh.rotation.set(0,zt.item.rotated?Math.PI/2:0,0),zt.mesh.position.z=ao(zt),oi(400))},rear:RM,secure:xM};document.querySelectorAll("[data-action]").forEach(n=>n.onclick=()=>Mf[n.dataset.action]());document.querySelectorAll("[data-test]").forEach(n=>n.onclick=()=>VM(n.dataset.test));et("#upgrade-tests").innerHTML=Object.keys(br).filter(n=>["truck","worker","yard","hire","factory"].includes(n)).map(n=>`<button data-upgrade="${n}"></button>`).join("");document.querySelectorAll("[data-upgrade]").forEach(n=>n.onclick=()=>{if(Math.abs(Ie)>.35)return Vt("Stop before upgrading.");const t=n.dataset.upgrade;pf(t);const e=hi.find(i=>i.key===t);e&&(Qt=!1,ot.visible=!0,ot.position.copy(e.position).add(new A(0,0,2)),ot.position.y=fo(ot.position),Oe.zoom=t==="yard"||t==="fleet"?.9:1.6,Oe.updateProjectionMatrix())});et("#test-toggle").onclick=()=>{et("#tests").hidden=!et("#tests").hidden};et("#company-toggle").onclick=()=>{et("#company-panel").hidden=!et("#company-panel").hidden};function WM(){const n=new Date,t=n.toISOString().slice(0,10),e=new Date(n.getTime()-864e5).toISOString().slice(0,10),i=W.daily.lastClaim===t,r=W.daily.lastClaim===e?W.daily.streak>=8?1:W.daily.streak+1:1,s=i?W.daily.streak:r,o=l=>io(l)?`$${io(l)}`:no(l)?`<span class="daily-jem">${ve.icon} ${no(l)} ${ve.name}</span>`:"Build worker skin",a=r===8&&W.ownedSkins.person.includes("build")?`<span class="daily-jem">${ve.icon} 15 ${ve.name}</span>`:o(r),c=Array.from({length:8},(l,u)=>{const d=u+1;return`<div class="daily-day ${d===s?"today":d<s?"collected":""} ${d===8?"daily-skin-day":""}"><span>DAY ${d}</span>${d===8?`<div class="daily-skin-preview">${tf("person","build")}</div>`:""}<strong>${o(d)}</strong><small>${d<s||i&&d===s?"✓ Collected":d===s?"Available":"Upcoming"}</small></div>`}).join("");return`<div class="daily-modal"><small>DAILY REWARD</small><h2>${i?"Come back tomorrow":`Claim ${a}`}</h2><div class="daily-days">${c}</div><p>Claim on consecutive days. A missed day restarts the series at Day 1.${W.ownedSkins.person.includes("build")?" If you already own the Day 8 skin, you receive 15 Jems instead.":""}</p>${i?"":'<button id="claim-daily">Claim reward</button>'}</div>`}let Sf="daily";function Ll(n,t){Tr("purchase"),De(),ir(`<div class="shop-success"><div class="shop-success-icon">✓</div><small>PURCHASE COMPLETE</small><h2>${n}</h2><p>${t}</p><button id="shop-success-close">Continue shopping</button></div>`),et("#shop-success-close").onclick=()=>wa(Sf)}function Yh(n){const t=document.querySelector("#shop-error");t&&(t.textContent=n,t.hidden=!1)}function wa(n="daily"){Sf=n;const t=`<div class="shop-tabs"><button data-shop-tab="daily" class="${n==="daily"?"active":""}">Daily gifts</button><button data-shop-tab="currency" class="${n==="currency"?"active":""}">Coins & Jems</button><button data-shop-tab="skins" class="${n==="skins"?"active":""}">Skins</button></div>`;let e="";n==="daily"&&(e=WM()),n==="currency"&&(e=`<div class="shop-section"><h2>Coins & ${ve.name}</h2><p class="shop-balance">${ve.icon} ${W.test?"∞":W.jems} ${ve.name} · $${W.test?"∞":Math.floor(W.cash).toLocaleString("en-US")}</p><div class="shop-card"><span class="shop-art coins">$</span><span><b>2,000 coins</b><small>Exchange 10 ${ve.name}</small></span><button id="buy-coins">${ve.icon} 10</button></div><div class="shop-card"><span class="shop-art jems">${ve.icon}</span><span><b>10 ${ve.name}</b><small>Watch an ad to receive them</small></span><button disabled title="Ads will be available later">Coming soon</button></div><p class="shop-note">Ads are being prepared. Coins cannot be exchanged for ${ve.name}.</p></div>`),n==="skins"&&(e=`<div class="shop-section"><h2>Skins</h2><p class="shop-balance">${ve.icon} ${W.test?"∞":W.jems} ${ve.name}</p><p class="shop-note">Looks only · levels stay unchanged</p>${["truck","person"].map(r=>`<h3>${r==="truck"?"Truck":"Person"}</h3><div class="skin-grid">${Ec[r].map(s=>{const o=W.ownedSkins[r].includes(s.id),a=W.selectedSkins[r]===s.id;return`<div class="skin-card"><div class="skin-preview ${r}">${tf(r,s.id)}</div><b>${s.name}</b><button data-skin-kind="${r}" data-skin-id="${s.id}" ${a?"disabled":""}>${a?"Equipped":o?"Equip":`${ve.icon} ${s.price}`}</button></div>`}).join("")}</div>`).join("")}</div>`),ir(`<div class="shop-modal"><div class="shop-heading"><span>🛒 SHOP</span><div class="shop-wealth"><span>$${W.test?"∞":Math.floor(W.cash).toLocaleString("en-US")}</span><span>${ve.icon} ${W.test?"∞":W.jems}</span></div></div>${t}<p id="shop-error" class="shop-error" hidden></p>${e}</div>`),document.querySelectorAll("[data-shop-tab]").forEach(r=>r.onclick=()=>wa(r.dataset.shopTab));const i=document.querySelector("#claim-daily");i&&(i.onclick=()=>{const r=W.ownedSkins.person.includes("build");rM(W),De(),uu();const s=W.daily.streak,o=io(s)?`$${io(s)}`:no(s)?`${ve.icon} ${no(s)} ${ve.name}`:r?`${ve.icon} 15 ${ve.name}`:"Build worker skin";Ll(o,"Daily reward claimed"),et("#daily-button").classList.remove("ready")}),document.querySelector("#buy-coins")?.addEventListener("click",()=>{if(!mM(W))return Yh(`You need 10 ${ve.name}.`);Ll("2,000 coins",`Paid 10 ${ve.name}`)}),document.querySelectorAll("[data-skin-kind]").forEach(r=>r.onclick=()=>{const s=r.dataset.skinKind,o=r.dataset.skinId;if(W.ownedSkins[s].includes(o)){W.selectedSkins[s]=o,s==="truck"?(so(),lo()):ma(),De(),wa("skins");return}if(!gM(W,s,o))return Yh(`Not enough ${ve.name} for this skin.`);s==="truck"?(so(),lo()):ma();const a=Ec[s].find(c=>c.id===o);Ll(`${a.name} ${s==="truck"?"truck":"person"} skin`,"Purchased and equipped · Upgrade level unchanged")})}et("#daily-button").onclick=()=>wa();et("#job-toggle").onclick=()=>et("#job-body").classList.toggle("collapsed");function yf(){et("#mode-toggle").textContent=W.test?"DEV":"NORMAL",et("#mode-toggle").classList.toggle("development",W.test),et("#test-toggle").hidden=!W.test,W.test||(et("#tests").hidden=!0)}et("#mode-toggle").onclick=()=>{W.test=!W.test,Mn=0,ia="",ra="",yf(),zn(),De(),Vt(W.test?"Development mode: unlimited money and test tools enabled.":"Normal mode: purchases now use company cash.")};yf();et("#camera-follow").onclick=()=>{Oe.zoom=.78,Oe.updateProjectionMatrix()};for(const[n,t]of[["zoom-in",1.2],["zoom-out",1/1.2]])et(`#${n}`).onclick=()=>{Oe.zoom=ue.clamp(Oe.zoom*t,gn.minZoom,gn.maxZoom),Oe.updateProjectionMatrix()};et("#settings").onclick=()=>{ou(),ir(`<div class="settings-panel"><h2>Settings</h2><section><h3>Audio</h3><label><span>Sound effects</span><input id="sound" type="checkbox" ${Er?"checked":""}></label><label><span>City & nature</span><input id="ambient" type="checkbox" ${wr?"checked":""}></label><label><span>Background music</span><input id="music" type="checkbox" ${xs?"checked":""}></label><label><span>Vehicle sound</span><input id="vehicle-sound" type="checkbox" ${Ms?"checked":""}></label><label><span>Volume</span><input id="volume" type="range" min="0" max="1" step=".05" value="${vi}"></label></section><section><h3>Game & display</h3><label><span>Soft shadows</span><input id="shadows" type="checkbox" ${Al?"checked":""}></label><button id="rescue-now">Got stuck? Move to a clear spot</button><button id="replay-tutorial">Replay tutorial</button></section><section><h3>Progress</h3><button id="update-game">Update game safely</button><p class="fine">${Lf()}</p></section></div>`),et("#sound").onchange=n=>{Er=n.target.checked,Os()},et("#ambient").onchange=n=>{wr=n.target.checked,Os()},et("#music").onchange=n=>{xs=n.target.checked,Os()},et("#vehicle-sound").onchange=n=>{Ms=n.target.checked,Os()},et("#volume").oninput=n=>{vi=+n.target.value,Os()},et("#shadows").onchange=n=>{Al=n.target.checked,Ei.shadowMap.enabled=Al},et("#rescue-now").onclick=()=>{et("#dialog").close(),Qt?_f():po()},et("#replay-tutorial").onclick=()=>{kt=0,et("#dialog").close(),fi(Jn[0][0],Jn[0][1],"Got it",Jn[0][2]),De()},et("#update-game").onclick=()=>{De();const n=Qi.getItem("movecraft-rewrite-v1");n&&Qi.setItem("movecraft-update-backup",n);const t=new URL(location.href);t.searchParams.set("update",Date.now().toString()),location.replace(t)}};et("#stuck-button").onclick=()=>Qt?_f():po();et("#help").onclick=()=>ir("<h2>Moving controls</h2><p>WASD / arrows move. Shift sprints. Space jumps. Drag to orbit, scroll or pinch to zoom.</p><p>E lifts and places. R rotates. Stand at the rear and press Q once to secure the entire load with a net. F enters/exits the cab. W/S drives/brakes; A/D steer. G raises or lowers the rear.</p><p>Unsecured furniture can be damaged or fall through an open rear. Stand still on an upgrade field to invest automatically.</p>");document.addEventListener("wheel",n=>{(n.ctrlKey||n.metaKey)&&n.preventDefault()},{passive:!1});for(const n of["gesturestart","gesturechange","gestureend"])document.addEventListener(n,t=>t.preventDefault(),{passive:!1});document.addEventListener("touchmove",n=>{n.touches.length>1&&!(n.target instanceof HTMLCanvasElement)&&n.preventDefault()},{passive:!1});window.addEventListener("keydown",n=>{(n.ctrlKey||n.metaKey)&&["Equal","Minus","Digit0","NumpadAdd","NumpadSubtract","Numpad0"].includes(n.code)&&n.preventDefault()},{capture:!0});window.addEventListener("keydown",n=>{if(et("#dialog").open||(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","Space"].includes(n.code)&&(Ne.add(n.code),n.preventDefault()),n.repeat))return;n.code==="Space"&&IM();const t={KeyE:"interact",KeyF:"cab",KeyR:"rotate",KeyG:"rear",KeyQ:"secure"};t[n.code]&&Mf[t[n.code]]()});window.addEventListener("keyup",n=>Ne.delete(n.code));window.addEventListener("blur",()=>Ne.clear());document.querySelectorAll("[data-key]").forEach(n=>{n.onpointerdown=t=>{n.setPointerCapture(t.pointerId),Ne.add(n.dataset.key)},n.onpointerup=n.onpointercancel=()=>Ne.delete(n.dataset.key)});function za(){const n=Math.max(1,et("#world").clientWidth),t=Math.max(1,et("#world").clientHeight);Ei.setSize(n,t,!1);const e=n/t;Oe.left=-12*e,Oe.right=12*e,Oe.top=12,Oe.bottom=-12,gn.minZoom=Math.max(.55,e/4),Oe.zoom=Math.max(Oe.zoom,gn.minZoom),Oe.updateProjectionMatrix()}window.addEventListener("resize",za);window.visualViewport?.addEventListener("resize",za);new ResizeObserver(za).observe(et("#world"));so();GM();of.copy(At.position);lo();zn();za();uu();et("#daily-button").classList.toggle("ready",W.daily.lastClaim!==new Date().toISOString().slice(0,10));kt===0&&W.jobs===0&&fi(Jn[0][0],Jn[0][1],"Got it",Jn[0][2]);uo();rr()&&!je&&($s=.8);gn.target.copy(ot.position);Oe.position.add(ot.position);gn.update();let qh=!1,Kh=performance.now(),Il=0;function bf(n){const t=Math.min((n-Kh)/1e3,.1);Kh=n,we+=t,$s>0?($s-=t,$s<=0&&ya()):rr()&&!je&&et("#tutorial-card").hidden&&!et("#dialog").open&&ya(),PM(t),vr=ue.damp(vr,Bi,3,t),wc=ue.damp(wc,ga,8,t),cf();const e=LM(t);NM(t);const i=Qt?Rc:Cc,r=Qt?au():ot.position;for((!i.length||we-i[i.length-1].t>=.35)&&i.push({t:we,x:r.x,z:r.z});i.length&&we-i[0].t>10;)i.shift();const s=i.length>1&&we-i[0].t>=9.5&&i.every(d=>Math.hypot(d.x-i[0].x,d.z-i[0].z)<(Qt?4:1.5));for(;Zi.length&&we-Zi[0]>10;)Zi.shift();const o=Qt&&Zi.length>=3,a=!et("#tutorial-card").hidden||et("#dialog").open||!et("#tests").hidden||!et("#company-panel").hidden;for(a&&(i.length=0,Zi.length=0),et("#stuck-button").hidden=!!xe||a||!(s||o),et("#stuck-button").textContent=Qt?"Truck stuck?":"Got stuck?",Qt?Cc.length=0:(Rc.length=0,Zi.length=0),xe||_r.animate(we,e,!!zt||!!ze,ts),AM(t),zt&&(zt.mesh.rotation.y=ue.damp(zt.mesh.rotation.y,zt.item.rotated?Math.PI/2:0,12,t)),Il+=t;Il>=1/60;){const d=UM(.016666666666666666);uM(ee,1/60,{truck:At,back:Te,speed:Ie,yawRate:d.yawRate,acceleration:d.acceleration,rearOpen:vr>.9,enclosed:!!At.userData.enclosed,gear:W.levels.truck,now:we,onDamage:(h,f,_)=>{const y=Math.min(f,100-(h.damage??0));h.damage=(h.damage??0)+y,y>0&&tr.push({item:h.item.name,reason:_,points:y}),we-rs>.7&&(rs=we,Vt(`−${y} points · ${h.item.name}: ${_}`))},onFall:h=>{Vt(`${h.item.name} fell out. Stop and recover it.`),oi(140,.25)}}),Il-=1/60}if(FM(t),yM(t),af(),OM(t),ji.visible){const d=lu(ji.position),h=d?6808973:16768099;sf.color.setHex(h)}const c=Qt?ii(new A(3,.6,(Te-2)/2)):ot.position.clone().add(new A(0,.6,0)),l=c.clone().sub(gn.target);if(gn.target.copy(c),Oe.position.add(l),ki.position.copy(c).add(new A(-25,45,20)),ki.target.position.copy(c),gn.update(),Fn.visible=!!zt&&fs(),Fn.visible){const d=cu();Fn.scale.set(d.w*Ut,1,d.d*Ut),Fn.position.copy(ii(new A(1.4+(d.x+d.w/2)*Ut,.82,.2+(d.z+d.d/2)*Ut))),Fn.rotation.y=At.rotation.y,Fn.material.color.set(d.valid?2386770:13974845),Fn.material.opacity=d.valid?.62:.82,su.material.color.set(d.valid?1195825:7282464)}const u=zt&&!fs()?hf(zt):null;if(Kn.visible=!!u&&ot.position.distanceTo(u.target)<18,u&&zt&&(Kn.position.x=u.target.x,Kn.position.z=u.target.z,Kn.scale.set(zt.item.w*Ut,zt.item.d*Ut,1),Kn.material.color.setHex(u.close?4828784:15321180)),Ni.visible=!!zt&&!fs()&&df(ot.position)&&!u?.close,Ni.visible&&zt){const d=ot.position.clone().add(new A(0,0,1.1).applyQuaternion(ot.quaternion));Ni.position.set(d.x,.105,d.z),Ni.scale.set(zt.item.w*Ut,zt.item.d*Ut,1)}_a-=t,_a<=0&&et("#status-bar").classList.remove("show-notice"),Pl+=t,Cl+=t,Pl>.18&&(uu(),Pl=0),Cl>5&&(De(),Cl=0),Ei.render(Pe,Oe),qh||(qh=!0,document.getElementById("loading-screen")?.remove()),!et("#dialog").open&&et("#tests").hidden&&et("#company-panel").hidden&&(et("#tutorial-card").hidden||kt>0),requestAnimationFrame(bf)}requestAnimationFrame(bf);window.addEventListener("pagehide",De);
