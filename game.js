var $0=Object.defineProperty;var Ae=(n,e)=>()=>(n&&(e=n(n=0)),e);var Eo=(n,e)=>{for(var t in e)$0(n,t,{get:e[t],enumerable:!0})};function no(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function bn(n,e,t){return Math.max(e,Math.min(t,n))}function $g(n,e){return(n%e+e)%e}function Pl(n,e,t){return(1-t)*n+t*e}function ld(n){return(n&n-1)===0&&n!==0}function lc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Br(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _n(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}function cf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function na(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Zg(){let n=na("canvas");return n.style.display="block",n}function qr(n){n in cd||(cd[n]=!0,console.warn(n))}function or(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Il(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function kl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ia.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Nl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){os.fromArray(n,r);let a=s.x*Math.abs(os.x)+s.y*Math.abs(os.y)+s.z*Math.abs(os.z),l=e.dot(os),c=t.dot(os),h=i.dot(os);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function Wl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function cx(n,e,t,i,s,r,o,a){let l;if(e.side===Mn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Oi,a),l===null)return null;Vo.copy(a),Vo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Vo);return c<t.near||c>t.far?null:{distance:c,point:Vo.clone(),object:n}}function Wo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Js),n.getVertexPosition(l,Ks),n.getVertexPosition(c,js);let h=cx(n,e,t,i,Js,Ks,js,Go);if(h){s&&(Fo.fromBufferAttribute(s,a),Bo.fromBufferAttribute(s,l),Ho.fromBufferAttribute(s,c),h.uv=nr.getInterpolation(Go,Js,Ks,js,Fo,Bo,Ho,new je)),r&&(Fo.fromBufferAttribute(r,a),Bo.fromBufferAttribute(r,l),Ho.fromBufferAttribute(r,c),h.uv1=nr.getInterpolation(Go,Js,Ks,js,Fo,Bo,Ho,new je),h.uv2=h.uv1),o&&(Md.fromBufferAttribute(o,a),wd.fromBufferAttribute(o,l),Sd.fromBufferAttribute(o,c),h.normal=nr.getInterpolation(Go,Js,Ks,js,Md,wd,Sd,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new U,materialIndex:0};nr.getNormal(Js,Ks,js,d.normal),h.face=d}return h}function dr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function pn(n){let e={};for(let t=0;t<n.length;t++){let i=dr(n[t]);for(let s in i)e[s]=i[s]}return e}function hx(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function uf(n){return n.getRenderTarget()===null?n.outputColorSpace:mt.workingColorSpace}function df(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function gx(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let d=c.array,p=c.usage,g=d.byteLength,x=n.createBuffer();n.bindBuffer(h,x),n.bufferData(h,d,p),c.onUploadCallback();let v;if(d instanceof Float32Array)v=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=n.SHORT;else if(d instanceof Uint32Array)v=n.UNSIGNED_INT;else if(d instanceof Int32Array)v=n.INT;else if(d instanceof Int8Array)v=n.BYTE;else if(d instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:g}}function r(c,h,d){let p=h.array,g=h._updateRange,x=h.updateRanges;if(n.bindBuffer(d,c),g.count===-1&&x.length===0&&n.bufferSubData(d,0,p),x.length!==0){for(let v=0,m=x.length;v<m;v++){let f=x[v];t?n.bufferSubData(d,f.start*p.BYTES_PER_ELEMENT,p,f.start,f.count):n.bufferSubData(d,f.start*p.BYTES_PER_ELEMENT,p.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}g.count!==-1&&(t?n.bufferSubData(d,g.offset*p.BYTES_PER_ELEMENT,p,g.offset,g.count):n.bufferSubData(d,g.offset*p.BYTES_PER_ELEMENT,p.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=i.get(c);if(d===void 0)i.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}function Jv(n,e,t,i,s,r,o){let a=new $e(0),l=r===!0?0:1,c,h,d=null,p=0,g=null;function x(m,f){let w=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=(f.backgroundBlurriness>0?t:e).get(y)),y===null?v(a,l):y&&y.isColor&&(v(y,1),w=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Aa)?(h===void 0&&(h=new Mt(new On(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:dr(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=mt.getTransfer(y.colorSpace)!==St,(d!==y||p!==y.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,d=y,p=y.version,g=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Mt(new Bi(2,2),new vi({name:"BackgroundMaterial",uniforms:dr(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=mt.getTransfer(y.colorSpace)!==St,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||p!==y.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,p=y.version,g=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,f){m.getRGB(Yo,uf(n)),i.buffers.color.setClear(Yo.r,Yo.g,Yo.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:x}}function Kv(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function d(D,z,X,J,Z){let $=!1;if(o){let te=v(J,X,z);c!==te&&(c=te,g(c.object)),$=f(D,J,X,Z),$&&w(D,J,X,Z)}else{let te=z.wireframe===!0;(c.geometry!==J.id||c.program!==X.id||c.wireframe!==te)&&(c.geometry=J.id,c.program=X.id,c.wireframe=te,$=!0)}Z!==null&&t.update(Z,n.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,G(D,z,X,J),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function p(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function g(D){return i.isWebGL2?n.bindVertexArray(D):r.bindVertexArrayOES(D)}function x(D){return i.isWebGL2?n.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function v(D,z,X){let J=X.wireframe===!0,Z=a[D.id];Z===void 0&&(Z={},a[D.id]=Z);let $=Z[z.id];$===void 0&&($={},Z[z.id]=$);let te=$[J];return te===void 0&&(te=m(p()),$[J]=te),te}function m(D){let z=[],X=[],J=[];for(let Z=0;Z<s;Z++)z[Z]=0,X[Z]=0,J[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:X,attributeDivisors:J,object:D,attributes:{},index:null}}function f(D,z,X,J){let Z=c.attributes,$=z.attributes,te=0,re=X.getAttributes();for(let xe in re)if(re[xe].location>=0){let j=Z[xe],me=$[xe];if(me===void 0&&(xe==="instanceMatrix"&&D.instanceMatrix&&(me=D.instanceMatrix),xe==="instanceColor"&&D.instanceColor&&(me=D.instanceColor)),j===void 0||j.attribute!==me||me&&j.data!==me.data)return!0;te++}return c.attributesNum!==te||c.index!==J}function w(D,z,X,J){let Z={},$=z.attributes,te=0,re=X.getAttributes();for(let xe in re)if(re[xe].location>=0){let j=$[xe];j===void 0&&(xe==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),xe==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));let me={};me.attribute=j,j&&j.data&&(me.data=j.data),Z[xe]=me,te++}c.attributes=Z,c.attributesNum=te,c.index=J}function y(){let D=c.newAttributes;for(let z=0,X=D.length;z<X;z++)D[z]=0}function R(D){I(D,0)}function I(D,z){let X=c.newAttributes,J=c.enabledAttributes,Z=c.attributeDivisors;X[D]=1,J[D]===0&&(n.enableVertexAttribArray(D),J[D]=1),Z[D]!==z&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,z),Z[D]=z)}function P(){let D=c.newAttributes,z=c.enabledAttributes;for(let X=0,J=z.length;X<J;X++)z[X]!==D[X]&&(n.disableVertexAttribArray(X),z[X]=0)}function C(D,z,X,J,Z,$,te){te===!0?n.vertexAttribIPointer(D,z,X,Z,$):n.vertexAttribPointer(D,z,X,J,Z,$)}function G(D,z,X,J){if(i.isWebGL2===!1&&(D.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let Z=J.attributes,$=X.getAttributes(),te=z.defaultAttributeValues;for(let re in $){let xe=$[re];if(xe.location>=0){let q=Z[re];if(q===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(q=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(q=D.instanceColor)),q!==void 0){let j=q.normalized,me=q.itemSize,Te=t.get(q);if(Te===void 0)continue;let Ee=Te.buffer,Ge=Te.type,qe=Te.bytesPerElement,Ue=i.isWebGL2===!0&&(Ge===n.INT||Ge===n.UNSIGNED_INT||q.gpuType===jd);if(q.isInterleavedBufferAttribute){let ot=q.data,O=ot.stride,un=q.offset;if(ot.isInstancedInterleavedBuffer){for(let Pe=0;Pe<xe.locationSize;Pe++)I(xe.location+Pe,ot.meshPerAttribute);D.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Pe=0;Pe<xe.locationSize;Pe++)R(xe.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let Pe=0;Pe<xe.locationSize;Pe++)C(xe.location+Pe,me/xe.locationSize,Ge,j,O*qe,(un+me/xe.locationSize*Pe)*qe,Ue)}else{if(q.isInstancedBufferAttribute){for(let ot=0;ot<xe.locationSize;ot++)I(xe.location+ot,q.meshPerAttribute);D.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ot=0;ot<xe.locationSize;ot++)R(xe.location+ot);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let ot=0;ot<xe.locationSize;ot++)C(xe.location+ot,me/xe.locationSize,Ge,j,me*qe,me/xe.locationSize*ot*qe,Ue)}}else if(te!==void 0){let j=te[re];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(xe.location,j);break;case 3:n.vertexAttrib3fv(xe.location,j);break;case 4:n.vertexAttrib4fv(xe.location,j);break;default:n.vertexAttrib1fv(xe.location,j)}}}}P()}function b(){Y();for(let D in a){let z=a[D];for(let X in z){let J=z[X];for(let Z in J)x(J[Z].object),delete J[Z];delete z[X]}delete a[D]}}function T(D){if(a[D.id]===void 0)return;let z=a[D.id];for(let X in z){let J=z[X];for(let Z in J)x(J[Z].object),delete J[Z];delete z[X]}delete a[D.id]}function V(D){for(let z in a){let X=a[z];if(X[D.id]===void 0)continue;let J=X[D.id];for(let Z in J)x(J[Z].object),delete J[Z];delete X[D.id]}}function Y(){oe(),h=!0,c!==l&&(c=l,g(c.object))}function oe(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:oe,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:V,initAttributes:y,enableAttribute:R,disableUnusedAttributes:P}}function jv(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,d){n.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,p){if(p===0)return;let g,x;if(s)g=n,x="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[x](r,h,d,p),t.update(d,r,p)}function c(h,d,p){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<p;x++)this.render(h[x],d[x]);else{g.multiDrawArraysWEBGL(r,h,0,d,0,p);let x=0;for(let v=0;v<p;v++)x+=d[v];t.update(x,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Qv(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,R=o||e.has("OES_texture_float"),I=y&&R,P=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:w,vertexTextures:y,floatFragmentTextures:R,floatVertexTextures:I,maxSamples:P}}function e_(n){let e=this,t=null,i=0,s=!1,r=!1,o=new mi,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let g=d.length!==0||p||i!==0||s;return s=p,i=d.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){t=h(d,p,0)},this.setState=function(d,p,g){let x=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||x===null||x.length===0||r&&!m)r?h(null):c();else{let w=r?0:i,y=w*4,R=f.clippingState||null;l.value=R,R=h(x,p,y,g);for(let I=0;I!==y;++I)R[I]=t[I];f.clippingState=R,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,p,g,x){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,x!==!0||m===null){let f=g+v*4,w=p.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,R=g;y!==v;++y,R+=4)o.copy(d[y]).applyMatrix4(w,a),o.normal.toArray(m,R),m[R+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function t_(n){let e=new WeakMap;function t(o,a){return a===nc?o.mapping=lr:a===ic&&(o.mapping=cr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===nc||a===ic)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new dc(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}function n_(n){let e=[],t=[],i=[],s=n,r=n-ir+1+Ed.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-ir?l=Ed[o-n+ir-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,p=[h,h,d,h,d,d,h,h,d,d,h,d],g=6,x=6,v=3,m=2,f=1,w=new Float32Array(v*x*g),y=new Float32Array(m*x*g),R=new Float32Array(f*x*g);for(let P=0;P<g;P++){let C=P%3*2/3-1,G=P>2?0:-1,b=[C,G,0,C+2/3,G,0,C+2/3,G+1,0,C,G,0,C+2/3,G+1,0,C,G+1,0];w.set(b,v*x*P),y.set(p,m*x*P);let T=[P,P,P,P,P,P];R.set(T,f*x*P)}let I=new vn;I.setAttribute("position",new cn(w,v)),I.setAttribute("uv",new cn(y,m)),I.setAttribute("faceIndex",new cn(R,f)),e.push(I),s>ir&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Rd(n,e,t){let i=new yi(n,e,t);return i.texture.mapping=Aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function i_(n,e,t){let i=new Float32Array(us),s=new U(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Cd(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hc(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Pd(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Hc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function s_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===nc||l===ic,h=l===lr||l===cr;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new da(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(c&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new da(n));let p=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function r_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function o_(n,e,t,i){let s={},r=new WeakMap;function o(d){let p=d.target;p.index!==null&&e.remove(p.index);for(let x in p.attributes)e.remove(p.attributes[x]);for(let x in p.morphAttributes){let v=p.morphAttributes[x];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}p.removeEventListener("dispose",o),delete s[p.id];let g=r.get(p);g&&(e.remove(g),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(d,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function l(d){let p=d.attributes;for(let x in p)e.update(p[x],n.ARRAY_BUFFER);let g=d.morphAttributes;for(let x in g){let v=g[x];for(let m=0,f=v.length;m<f;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(d){let p=[],g=d.index,x=d.attributes.position,v=0;if(g!==null){let w=g.array;v=g.version;for(let y=0,R=w.length;y<R;y+=3){let I=w[y+0],P=w[y+1],C=w[y+2];p.push(I,P,P,C,C,I)}}else if(x!==void 0){let w=x.array;v=x.version;for(let y=0,R=w.length/3-1;y<R;y+=3){let I=y+0,P=y+1,C=y+2;p.push(I,P,P,C,C,I)}}else return;let m=new(cf(p)?la:aa)(p,1);m.version=v;let f=r.get(d);f&&e.remove(f),r.set(d,m)}function h(d){let p=r.get(d);if(p){let g=d.index;g!==null&&p.version<g.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function a_(n,e,t,i){let s=i.isWebGL2,r;function o(g){r=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function h(g,x){n.drawElements(r,x,a,g*l),t.update(x,r,1)}function d(g,x,v){if(v===0)return;let m,f;if(s)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,x,a,g*l,v),t.update(x,r,v)}function p(g,x,v){if(v===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<v;f++)this.render(g[f]/l,x[f]);else{m.multiDrawElementsWEBGL(r,x,0,a,g,0,v);let f=0;for(let w=0;w<v;w++)f+=x[w];t.update(f,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=p}function l_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function c_(n,e){return n[0]-e[0]}function h_(n,e){return Math.abs(e[1])-Math.abs(n[1])}function u_(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new en,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){let p=c.morphTargetInfluences;if(e.isWebGL2===!0){let g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=g!==void 0?g.length:0,v=r.get(h);if(v===void 0||v.count!==x){let D=function(){Y.dispose(),r.delete(h),h.removeEventListener("dispose",D)};v!==void 0&&v.texture.dispose();let w=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,I=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],G=0;w===!0&&(G=1),y===!0&&(G=2),R===!0&&(G=3);let b=h.attributes.position.count*G,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let V=new Float32Array(b*T*4*x),Y=new ra(V,b,T,x);Y.type=Di,Y.needsUpdate=!0;let oe=G*4;for(let z=0;z<x;z++){let X=I[z],J=P[z],Z=C[z],$=b*T*4*z;for(let te=0;te<X.count;te++){let re=te*oe;w===!0&&(o.fromBufferAttribute(X,te),V[$+re+0]=o.x,V[$+re+1]=o.y,V[$+re+2]=o.z,V[$+re+3]=0),y===!0&&(o.fromBufferAttribute(J,te),V[$+re+4]=o.x,V[$+re+5]=o.y,V[$+re+6]=o.z,V[$+re+7]=0),R===!0&&(o.fromBufferAttribute(Z,te),V[$+re+8]=o.x,V[$+re+9]=o.y,V[$+re+10]=o.z,V[$+re+11]=Z.itemSize===4?o.w:1)}}v={count:x,texture:Y,size:new je(b,T)},r.set(h,v),h.addEventListener("dispose",D)}let m=0;for(let w=0;w<p.length;w++)m+=p[w];let f=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(n,"morphTargetBaseInfluence",f),d.getUniforms().setValue(n,"morphTargetInfluences",p),d.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{let g=p===void 0?0:p.length,x=i[h.id];if(x===void 0||x.length!==g){x=[];for(let y=0;y<g;y++)x[y]=[y,0];i[h.id]=x}for(let y=0;y<g;y++){let R=x[y];R[0]=y,R[1]=p[y]}x.sort(h_);for(let y=0;y<8;y++)y<g&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(c_);let v=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let y=0;y<8;y++){let R=a[y],I=R[0],P=R[1];I!==Number.MAX_SAFE_INTEGER&&P?(v&&h.getAttribute("morphTarget"+y)!==v[I]&&h.setAttribute("morphTarget"+y,v[I]),m&&h.getAttribute("morphNormal"+y)!==m[I]&&h.setAttribute("morphNormal"+y,m[I]),s[y]=P,f+=P):(v&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let w=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",w),d.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function d_(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}function gr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Ld[s];if(r===void 0&&(r=new Float32Array(s),Ld[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ca(n,e){let t=Id[e];t===void 0&&(t=new Int32Array(e),Id[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function f_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function p_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2fv(this.addr,e),Xt(t,e)}}function m_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;n.uniform3fv(this.addr,e),Xt(t,e)}}function g_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4fv(this.addr,e),Xt(t,e)}}function x_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Yt(t,i))return;Nd.set(i),n.uniformMatrix2fv(this.addr,!1,Nd),Xt(t,i)}}function y_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Yt(t,i))return;Dd.set(i),n.uniformMatrix3fv(this.addr,!1,Dd),Xt(t,i)}}function v_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Yt(t,i))return;kd.set(i),n.uniformMatrix4fv(this.addr,!1,kd),Xt(t,i)}}function __(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function b_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2iv(this.addr,e),Xt(t,e)}}function M_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3iv(this.addr,e),Xt(t,e)}}function w_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4iv(this.addr,e),Xt(t,e)}}function S_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function E_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2uiv(this.addr,e),Xt(t,e)}}function T_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3uiv(this.addr,e),Xt(t,e)}}function A_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4uiv(this.addr,e),Xt(t,e)}}function R_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?pf:ff;t.setTexture2D(e||r,s)}function C_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||gf,s)}function P_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||xf,s)}function L_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||mf,s)}function I_(n){switch(n){case 5126:return f_;case 35664:return p_;case 35665:return m_;case 35666:return g_;case 35674:return x_;case 35675:return y_;case 35676:return v_;case 5124:case 35670:return __;case 35667:case 35671:return b_;case 35668:case 35672:return M_;case 35669:case 35673:return w_;case 5125:return S_;case 36294:return E_;case 36295:return T_;case 36296:return A_;case 35678:case 36198:case 36298:case 36306:case 35682:return R_;case 35679:case 36299:case 36307:return C_;case 35680:case 36300:case 36308:case 36293:return P_;case 36289:case 36303:case 36311:case 36292:return L_}}function k_(n,e){n.uniform1fv(this.addr,e)}function D_(n,e){let t=gr(e,this.size,2);n.uniform2fv(this.addr,t)}function N_(n,e){let t=gr(e,this.size,3);n.uniform3fv(this.addr,t)}function U_(n,e){let t=gr(e,this.size,4);n.uniform4fv(this.addr,t)}function z_(n,e){let t=gr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function O_(n,e){let t=gr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function F_(n,e){let t=gr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function B_(n,e){n.uniform1iv(this.addr,e)}function H_(n,e){n.uniform2iv(this.addr,e)}function G_(n,e){n.uniform3iv(this.addr,e)}function V_(n,e){n.uniform4iv(this.addr,e)}function W_(n,e){n.uniform1uiv(this.addr,e)}function q_(n,e){n.uniform2uiv(this.addr,e)}function Y_(n,e){n.uniform3uiv(this.addr,e)}function X_(n,e){n.uniform4uiv(this.addr,e)}function $_(n,e,t){let i=this.cache,s=e.length,r=Ca(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ff,r[o])}function Z_(n,e,t){let i=this.cache,s=e.length,r=Ca(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||gf,r[o])}function J_(n,e,t){let i=this.cache,s=e.length,r=Ca(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||xf,r[o])}function K_(n,e,t){let i=this.cache,s=e.length,r=Ca(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||mf,r[o])}function j_(n){switch(n){case 5126:return k_;case 35664:return D_;case 35665:return N_;case 35666:return U_;case 35674:return z_;case 35675:return O_;case 35676:return F_;case 5124:case 35670:return B_;case 35667:case 35671:return H_;case 35668:case 35672:return G_;case 35669:case 35673:return V_;case 5125:return W_;case 36294:return q_;case 36295:return Y_;case 36296:return X_;case 35678:case 36198:case 36298:case 36306:case 35682:return $_;case 35679:case 36299:case 36307:return Z_;case 35680:case 36300:case 36308:case 36293:return J_;case 36289:case 36303:case 36311:case 36292:return K_}}function Ud(n,e){n.seq.push(e),n.map[e.id]=e}function Q_(n,e,t){let i=n.name,s=i.length;for(jl.lastIndex=0;;){let r=jl.exec(i),o=jl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ud(t,c===void 0?new fc(a,n,e):new pc(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new mc(a),Ud(t,d)),t=d}}}function zd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function nb(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function ib(n){let e=mt.getPrimaries(mt.workingColorSpace),t=mt.getPrimaries(n),i;switch(e===t?i="":e===ea&&t===Qo?i="LinearDisplayP3ToLinearSRGB":e===Qo&&t===ea&&(i="LinearSRGBToLinearDisplayP3"),n){case xi:case Ra:return[i,"LinearTransferOETF"];case Bt:case Bc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Od(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+nb(n.getShaderSource(e),o)}else return s}function sb(n,e){let t=ib(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function rb(n,e){let t;switch(e){case wg:t="Linear";break;case Sg:t="Reinhard";break;case Eg:t="OptimizedCineon";break;case Tg:t="ACESFilmic";break;case Rg:t="AgX";break;case Ag:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ob(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(sr).join(`
`)}function ab(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(sr).join(`
`)}function lb(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cb(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function sr(n){return n!==""}function Fd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function gc(n){return n.replace(hb,db)}function db(n,e){let t=Xe[e];if(t===void 0){let i=ub.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gc(t)}function Hd(n){return n.replace(fb,pb)}function pb(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gd(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Jd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===K0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function gb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case lr:case cr:e="ENVMAP_TYPE_CUBE";break;case Aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case cr:e="ENVMAP_MODE_REFRACTION";break}return e}function yb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Oc:e="ENVMAP_BLENDING_MULTIPLY";break;case bg:e="ENVMAP_BLENDING_MIX";break;case Mg:e="ENVMAP_BLENDING_ADD";break}return e}function vb(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function _b(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=mb(t),c=gb(t),h=xb(t),d=yb(t),p=vb(t),g=t.isWebGL2?"":ob(t),x=ab(t),v=lb(r),m=s.createProgram(),f,w,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(sr).join(`
`),f.length>0&&(f+=`
`),w=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(sr).join(`
`),w.length>0&&(w+=`
`)):(f=[Gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),w=[g,Gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Ui?rb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,sb("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sr).join(`
`)),o=gc(o),o=Fd(o,t),o=Bd(o,t),a=gc(a),a=Fd(a,t),a=Bd(a,t),o=Hd(o),a=Hd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,w=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ad?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ad?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);let R=y+f+o,I=y+w+a,P=zd(s,s.VERTEX_SHADER,R),C=zd(s,s.FRAGMENT_SHADER,I);s.attachShader(m,P),s.attachShader(m,C),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function G(Y){if(n.debug.checkShaderErrors){let oe=s.getProgramInfoLog(m).trim(),D=s.getShaderInfoLog(P).trim(),z=s.getShaderInfoLog(C).trim(),X=!0,J=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,P,C);else{let Z=Od(s,P,"vertex"),$=Od(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+oe+`
`+Z+`
`+$)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(D===""||z==="")&&(J=!1);J&&(Y.diagnostics={runnable:X,programLog:oe,vertexShader:{log:D,prefix:f},fragmentShader:{log:z,prefix:w}})}s.deleteShader(P),s.deleteShader(C),b=new ar(s,m),T=cb(s,m)}let b;this.getUniforms=function(){return b===void 0&&G(this),b};let T;this.getAttributes=function(){return T===void 0&&G(this),T};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(m,eb)),V},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tb++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=P,this.fragmentShader=C,this}function Mb(n,e,t,i,s,r,o){let a=new Jr,l=new xc,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,p=s.vertexTextures,g=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===0?"uv":`uv${b}`}function m(b,T,V,Y,oe){let D=Y.fog,z=oe.geometry,X=b.isMeshStandardMaterial?Y.environment:null,J=(b.isMeshStandardMaterial?t:e).get(b.envMap||X),Z=J&&J.mapping===Aa?J.image.height:null,$=x[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));let te=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,re=te!==void 0?te.length:0,xe=0;z.morphAttributes.position!==void 0&&(xe=1),z.morphAttributes.normal!==void 0&&(xe=2),z.morphAttributes.color!==void 0&&(xe=3);let q,j,me,Te;if($){let dn=si[$];q=dn.vertexShader,j=dn.fragmentShader}else q=b.vertexShader,j=b.fragmentShader,l.update(b),me=l.getVertexShaderID(b),Te=l.getFragmentShaderID(b);let Ee=n.getRenderTarget(),Ge=oe.isInstancedMesh===!0,qe=oe.isBatchedMesh===!0,Ue=!!b.map,ot=!!b.matcap,O=!!J,un=!!b.aoMap,Pe=!!b.lightMap,Be=!!b.bumpMap,be=!!b.normalMap,Ct=!!b.displacementMap,Ze=!!b.emissiveMap,E=!!b.metalnessMap,_=!!b.roughnessMap,B=b.anisotropy>0,ne=b.clearcoat>0,ee=b.iridescence>0,ie=b.sheen>0,Me=b.transmission>0,fe=B&&!!b.anisotropyMap,ye=ne&&!!b.clearcoatMap,Ne=ne&&!!b.clearcoatNormalMap,Je=ne&&!!b.clearcoatRoughnessMap,Q=ee&&!!b.iridescenceMap,pt=ee&&!!b.iridescenceThicknessMap,it=ie&&!!b.sheenColorMap,Fe=ie&&!!b.sheenRoughnessMap,Ce=!!b.specularMap,ve=!!b.specularColorMap,Ye=!!b.specularIntensityMap,ut=Me&&!!b.transmissionMap,Dt=Me&&!!b.thicknessMap,Qe=!!b.gradientMap,ce=!!b.alphaMap,k=b.alphaTest>0,ue=!!b.alphaHash,de=!!b.extensions,ze=!!z.attributes.uv1,Le=!!z.attributes.uv2,vt=!!z.attributes.uv3,_t=Ui;return b.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(_t=n.toneMapping),{isWebGL2:h,shaderID:$,shaderType:b.type,shaderName:b.name,vertexShader:q,fragmentShader:j,defines:b.defines,customVertexShaderID:me,customFragmentShaderID:Te,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:qe,instancing:Ge,instancingColor:Ge&&oe.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Ee===null?n.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:xi,map:Ue,matcap:ot,envMap:O,envMapMode:O&&J.mapping,envMapCubeUVHeight:Z,aoMap:un,lightMap:Pe,bumpMap:Be,normalMap:be,displacementMap:p&&Ct,emissiveMap:Ze,normalMapObjectSpace:be&&b.normalMapType===Bg,normalMapTangentSpace:be&&b.normalMapType===af,metalnessMap:E,roughnessMap:_,anisotropy:B,anisotropyMap:fe,clearcoat:ne,clearcoatMap:ye,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Je,iridescence:ee,iridescenceMap:Q,iridescenceThicknessMap:pt,sheen:ie,sheenColorMap:it,sheenRoughnessMap:Fe,specularMap:Ce,specularColorMap:ve,specularIntensityMap:Ye,transmission:Me,transmissionMap:ut,thicknessMap:Dt,gradientMap:Qe,opaque:b.transparent===!1&&b.blending===rr,alphaMap:ce,alphaTest:k,alphaHash:ue,combine:b.combine,mapUv:Ue&&v(b.map.channel),aoMapUv:un&&v(b.aoMap.channel),lightMapUv:Pe&&v(b.lightMap.channel),bumpMapUv:Be&&v(b.bumpMap.channel),normalMapUv:be&&v(b.normalMap.channel),displacementMapUv:Ct&&v(b.displacementMap.channel),emissiveMapUv:Ze&&v(b.emissiveMap.channel),metalnessMapUv:E&&v(b.metalnessMap.channel),roughnessMapUv:_&&v(b.roughnessMap.channel),anisotropyMapUv:fe&&v(b.anisotropyMap.channel),clearcoatMapUv:ye&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Je&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:it&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&v(b.sheenRoughnessMap.channel),specularMapUv:Ce&&v(b.specularMap.channel),specularColorMapUv:ve&&v(b.specularColorMap.channel),specularIntensityMapUv:Ye&&v(b.specularIntensityMap.channel),transmissionMapUv:ut&&v(b.transmissionMap.channel),thicknessMapUv:Dt&&v(b.thicknessMap.channel),alphaMapUv:ce&&v(b.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(be||B),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:ze,vertexUv2s:Le,vertexUv3s:vt,pointsUvs:oe.isPoints===!0&&!!z.attributes.uv&&(Ue||ce),fog:!!D,useFog:b.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:oe.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:xe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:_t,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ue&&b.map.isVideoTexture===!0&&mt.getTransfer(b.map.colorSpace)===St,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===qn,flipSided:b.side===Mn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:de&&b.extensions.derivatives===!0,extensionFragDepth:de&&b.extensions.fragDepth===!0,extensionDrawBuffers:de&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&b.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function f(b){let T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(let V in b.defines)T.push(V),T.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(w(T,b),y(T,b),T.push(n.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function w(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function y(b,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function R(b){let T=x[b.type],V;if(T){let Y=si[T];V=ux.clone(Y.uniforms)}else V=b.uniforms;return V}function I(b,T){let V;for(let Y=0,oe=c.length;Y<oe;Y++){let D=c[Y];if(D.cacheKey===T){V=D,++V.usedTimes;break}}return V===void 0&&(V=new _b(n,T,b,r),c.push(V)),V}function P(b){if(--b.usedTimes===0){let T=c.indexOf(b);c[T]=c[c.length-1],c.pop(),b.destroy()}}function C(b){l.remove(b)}function G(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:R,acquireProgram:I,releaseProgram:P,releaseShaderCache:C,programs:c,dispose:G}}function wb(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Sb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Vd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,p,g,x,v,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:p,material:g,groupOrder:x,renderOrder:d.renderOrder,z:v,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=g,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=v,f.group=m),e++,f}function a(d,p,g,x,v,m){let f=o(d,p,g,x,v,m);g.transmission>0?i.push(f):g.transparent===!0?s.push(f):t.push(f)}function l(d,p,g,x,v,m){let f=o(d,p,g,x,v,m);g.transmission>0?i.unshift(f):g.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,p){t.length>1&&t.sort(d||Sb),i.length>1&&i.sort(p||Vd),s.length>1&&s.sort(p||Vd)}function h(){for(let d=e,p=n.length;d<p;d++){let g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Eb(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Wd,n.set(i,[o])):s>=r.length?(o=new Wd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Tb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new $e};break;case"SpotLight":t={position:new U,direction:new U,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function Ab(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function Cb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Pb(n,e){let t=new Tb,i=Ab(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);let r=new U,o=new Gt,a=new Gt;function l(h,d){let p=0,g=0,x=0;for(let Y=0;Y<9;Y++)s.probe[Y].set(0,0,0);let v=0,m=0,f=0,w=0,y=0,R=0,I=0,P=0,C=0,G=0,b=0;h.sort(Cb);let T=d===!0?Math.PI:1;for(let Y=0,oe=h.length;Y<oe;Y++){let D=h[Y],z=D.color,X=D.intensity,J=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)p+=z.r*X*T,g+=z.g*X*T,x+=z.b*X*T;else if(D.isLightProbe){for(let $=0;$<9;$++)s.probe[$].addScaledVector(D.sh.coefficients[$],X);b++}else if(D.isDirectionalLight){let $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity*T),D.castShadow){let te=D.shadow,re=i.get(D);re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize=te.mapSize,s.directionalShadow[v]=re,s.directionalShadowMap[v]=Z,s.directionalShadowMatrix[v]=D.shadow.matrix,R++}s.directional[v]=$,v++}else if(D.isSpotLight){let $=t.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(z).multiplyScalar(X*T),$.distance=J,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,s.spot[f]=$;let te=D.shadow;if(D.map&&(s.spotLightMap[C]=D.map,C++,te.updateMatrices(D),D.castShadow&&G++),s.spotLightMatrix[f]=te.matrix,D.castShadow){let re=i.get(D);re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize=te.mapSize,s.spotShadow[f]=re,s.spotShadowMap[f]=Z,P++}f++}else if(D.isRectAreaLight){let $=t.get(D);$.color.copy(z).multiplyScalar(X),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),s.rectArea[w]=$,w++}else if(D.isPointLight){let $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity*T),$.distance=D.distance,$.decay=D.decay,D.castShadow){let te=D.shadow,re=i.get(D);re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize=te.mapSize,re.shadowCameraNear=te.camera.near,re.shadowCameraFar=te.camera.far,s.pointShadow[m]=re,s.pointShadowMap[m]=Z,s.pointShadowMatrix[m]=D.shadow.matrix,I++}s.point[m]=$,m++}else if(D.isHemisphereLight){let $=t.get(D);$.skyColor.copy(D.color).multiplyScalar(X*T),$.groundColor.copy(D.groundColor).multiplyScalar(X*T),s.hemi[y]=$,y++}}w>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=he.LTC_FLOAT_1,s.rectAreaLTC2=he.LTC_FLOAT_2):(s.rectAreaLTC1=he.LTC_HALF_1,s.rectAreaLTC2=he.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=he.LTC_FLOAT_1,s.rectAreaLTC2=he.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=he.LTC_HALF_1,s.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=g,s.ambient[2]=x;let V=s.hash;(V.directionalLength!==v||V.pointLength!==m||V.spotLength!==f||V.rectAreaLength!==w||V.hemiLength!==y||V.numDirectionalShadows!==R||V.numPointShadows!==I||V.numSpotShadows!==P||V.numSpotMaps!==C||V.numLightProbes!==b)&&(s.directional.length=v,s.spot.length=f,s.rectArea.length=w,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=P+C-G,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=b,V.directionalLength=v,V.pointLength=m,V.spotLength=f,V.rectAreaLength=w,V.hemiLength=y,V.numDirectionalShadows=R,V.numPointShadows=I,V.numSpotShadows=P,V.numSpotMaps=C,V.numLightProbes=b,s.version=Rb++)}function c(h,d){let p=0,g=0,x=0,v=0,m=0,f=d.matrixWorldInverse;for(let w=0,y=h.length;w<y;w++){let R=h[w];if(R.isDirectionalLight){let I=s.directional[p];I.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(f),p++}else if(R.isSpotLight){let I=s.spot[x];I.position.setFromMatrixPosition(R.matrixWorld),I.position.applyMatrix4(f),I.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(f),x++}else if(R.isRectAreaLight){let I=s.rectArea[v];I.position.setFromMatrixPosition(R.matrixWorld),I.position.applyMatrix4(f),a.identity(),o.copy(R.matrixWorld),o.premultiply(f),a.extractRotation(o),I.halfWidth.set(R.width*.5,0,0),I.halfHeight.set(0,R.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),v++}else if(R.isPointLight){let I=s.point[g];I.position.setFromMatrixPosition(R.matrixWorld),I.position.applyMatrix4(f),g++}else if(R.isHemisphereLight){let I=s.hemi[m];I.direction.setFromMatrixPosition(R.matrixWorld),I.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function qd(n,e){let t=new Pb(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(d){i.push(d)}function a(d){s.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Lb(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new qd(n,e),t.set(r,[l])):o>=a.length?(l=new qd(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}function Db(n,e,t){let i=new Kr,s=new je,r=new je,o=new en,a=new vc({depthPacking:Fg}),l=new _c,c={},h=t.maxTextureSize,d={[Oi]:Mn,[Mn]:Oi,[qn]:qn},p=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:Ib,fragmentShader:kb}),g=p.clone();g.defines.HORIZONTAL_PASS=1;let x=new vn;x.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Mt(x,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jd;let f=this.type;this.render=function(P,C,G){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;let b=n.getRenderTarget(),T=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(Ni),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let oe=f!==pi&&this.type===pi,D=f===pi&&this.type!==pi;for(let z=0,X=P.length;z<X;z++){let J=P[z],Z=J.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let $=Z.getFrameExtents();if(s.multiply($),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,Z.mapSize.y=r.y)),Z.map===null||oe===!0||D===!0){let re=this.type!==pi?{minFilter:mn,magFilter:mn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new yi(s.x,s.y,re),Z.map.texture.name=J.name+".shadowMap",Z.camera.updateProjectionMatrix()}n.setRenderTarget(Z.map),n.clear();let te=Z.getViewportCount();for(let re=0;re<te;re++){let xe=Z.getViewport(re);o.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),Y.viewport(o),Z.updateMatrices(J,re),i=Z.getFrustum(),R(C,G,Z.camera,J,this.type)}Z.isPointLightShadow!==!0&&this.type===pi&&w(Z,G),Z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(b,T,V)};function w(P,C){let G=e.update(v);p.defines.VSM_SAMPLES!==P.blurSamples&&(p.defines.VSM_SAMPLES=P.blurSamples,g.defines.VSM_SAMPLES=P.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new yi(s.x,s.y)),p.uniforms.shadow_pass.value=P.map.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(C,null,G,p,v,null),g.uniforms.shadow_pass.value=P.mapPass.texture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(C,null,G,g,v,null)}function y(P,C,G,b){let T=null,V=G.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(V!==void 0)T=V;else if(T=G.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let Y=T.uuid,oe=C.uuid,D=c[Y];D===void 0&&(D={},c[Y]=D);let z=D[oe];z===void 0&&(z=T.clone(),D[oe]=z,C.addEventListener("dispose",I)),T=z}if(T.visible=C.visible,T.wireframe=C.wireframe,b===pi?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:d[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,G.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let Y=n.properties.get(T);Y.light=G}return T}function R(P,C,G,b,T){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&T===pi)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,P.matrixWorld);let oe=e.update(P),D=P.material;if(Array.isArray(D)){let z=oe.groups;for(let X=0,J=z.length;X<J;X++){let Z=z[X],$=D[Z.materialIndex];if($&&$.visible){let te=y(P,$,b,T);P.onBeforeShadow(n,P,C,G,oe,te,Z),n.renderBufferDirect(G,null,oe,te,P,Z),P.onAfterShadow(n,P,C,G,oe,te,Z)}}}else if(D.visible){let z=y(P,D,b,T);P.onBeforeShadow(n,P,C,G,oe,z,null),n.renderBufferDirect(G,null,oe,z,P,null),P.onAfterShadow(n,P,C,G,oe,z,null)}}let Y=P.children;for(let oe=0,D=Y.length;oe<D;oe++)R(Y[oe],C,G,b,T)}function I(P){P.target.removeEventListener("dispose",I);for(let G in c){let b=c[G],T=P.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}function Nb(n,e,t){let i=t.isWebGL2;function s(){let k=!1,ue=new en,de=null,ze=new en(0,0,0,0);return{setMask:function(Le){de!==Le&&!k&&(n.colorMask(Le,Le,Le,Le),de=Le)},setLocked:function(Le){k=Le},setClear:function(Le,vt,_t,Kt,dn){dn===!0&&(Le*=Kt,vt*=Kt,_t*=Kt),ue.set(Le,vt,_t,Kt),ze.equals(ue)===!1&&(n.clearColor(Le,vt,_t,Kt),ze.copy(ue))},reset:function(){k=!1,de=null,ze.set(-1,0,0,0)}}}function r(){let k=!1,ue=null,de=null,ze=null;return{setTest:function(Le){Le?qe(n.DEPTH_TEST):Ue(n.DEPTH_TEST)},setMask:function(Le){ue!==Le&&!k&&(n.depthMask(Le),ue=Le)},setFunc:function(Le){if(de!==Le){switch(Le){case pg:n.depthFunc(n.NEVER);break;case mg:n.depthFunc(n.ALWAYS);break;case gg:n.depthFunc(n.LESS);break;case Zo:n.depthFunc(n.LEQUAL);break;case xg:n.depthFunc(n.EQUAL);break;case yg:n.depthFunc(n.GEQUAL);break;case vg:n.depthFunc(n.GREATER);break;case _g:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=Le}},setLocked:function(Le){k=Le},setClear:function(Le){ze!==Le&&(n.clearDepth(Le),ze=Le)},reset:function(){k=!1,ue=null,de=null,ze=null}}}function o(){let k=!1,ue=null,de=null,ze=null,Le=null,vt=null,_t=null,Kt=null,dn=null;return{setTest:function(bt){k||(bt?qe(n.STENCIL_TEST):Ue(n.STENCIL_TEST))},setMask:function(bt){ue!==bt&&!k&&(n.stencilMask(bt),ue=bt)},setFunc:function(bt,fn,ii){(de!==bt||ze!==fn||Le!==ii)&&(n.stencilFunc(bt,fn,ii),de=bt,ze=fn,Le=ii)},setOp:function(bt,fn,ii){(vt!==bt||_t!==fn||Kt!==ii)&&(n.stencilOp(bt,fn,ii),vt=bt,_t=fn,Kt=ii)},setLocked:function(bt){k=bt},setClear:function(bt){dn!==bt&&(n.clearStencil(bt),dn=bt)},reset:function(){k=!1,ue=null,de=null,ze=null,Le=null,vt=null,_t=null,Kt=null,dn=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,d=new WeakMap,p={},g={},x=new WeakMap,v=[],m=null,f=!1,w=null,y=null,R=null,I=null,P=null,C=null,G=null,b=new $e(0,0,0),T=0,V=!1,Y=null,oe=null,D=null,z=null,X=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,$=0,te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(te)[1]),Z=$>=1):te.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),Z=$>=2);let re=null,xe={},q=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),me=new en().fromArray(q),Te=new en().fromArray(j);function Ee(k,ue,de,ze){let Le=new Uint8Array(4),vt=n.createTexture();n.bindTexture(k,vt),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let _t=0;_t<de;_t++)i&&(k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY)?n.texImage3D(ue,0,n.RGBA,1,1,ze,0,n.RGBA,n.UNSIGNED_BYTE,Le):n.texImage2D(ue+_t,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Le);return vt}let Ge={};Ge[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),Ge[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ge[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ge[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),qe(n.DEPTH_TEST),l.setFunc(Zo),Ze(!1),E(Su),qe(n.CULL_FACE),be(Ni);function qe(k){p[k]!==!0&&(n.enable(k),p[k]=!0)}function Ue(k){p[k]!==!1&&(n.disable(k),p[k]=!1)}function ot(k,ue){return g[k]!==ue?(n.bindFramebuffer(k,ue),g[k]=ue,i&&(k===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=ue),k===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=ue)),!0):!1}function O(k,ue){let de=v,ze=!1;if(k)if(de=x.get(ue),de===void 0&&(de=[],x.set(ue,de)),k.isWebGLMultipleRenderTargets){let Le=k.texture;if(de.length!==Le.length||de[0]!==n.COLOR_ATTACHMENT0){for(let vt=0,_t=Le.length;vt<_t;vt++)de[vt]=n.COLOR_ATTACHMENT0+vt;de.length=Le.length,ze=!0}}else de[0]!==n.COLOR_ATTACHMENT0&&(de[0]=n.COLOR_ATTACHMENT0,ze=!0);else de[0]!==n.BACK&&(de[0]=n.BACK,ze=!0);ze&&(t.isWebGL2?n.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function un(k){return m!==k?(n.useProgram(k),m=k,!0):!1}let Pe={[hs]:n.FUNC_ADD,[Q0]:n.FUNC_SUBTRACT,[eg]:n.FUNC_REVERSE_SUBTRACT};if(i)Pe[Ru]=n.MIN,Pe[Cu]=n.MAX;else{let k=e.get("EXT_blend_minmax");k!==null&&(Pe[Ru]=k.MIN_EXT,Pe[Cu]=k.MAX_EXT)}let Be={[tg]:n.ZERO,[ng]:n.ONE,[ig]:n.SRC_COLOR,[ec]:n.SRC_ALPHA,[cg]:n.SRC_ALPHA_SATURATE,[ag]:n.DST_COLOR,[rg]:n.DST_ALPHA,[sg]:n.ONE_MINUS_SRC_COLOR,[tc]:n.ONE_MINUS_SRC_ALPHA,[lg]:n.ONE_MINUS_DST_COLOR,[og]:n.ONE_MINUS_DST_ALPHA,[hg]:n.CONSTANT_COLOR,[ug]:n.ONE_MINUS_CONSTANT_COLOR,[dg]:n.CONSTANT_ALPHA,[fg]:n.ONE_MINUS_CONSTANT_ALPHA};function be(k,ue,de,ze,Le,vt,_t,Kt,dn,bt){if(k===Ni){f===!0&&(Ue(n.BLEND),f=!1);return}if(f===!1&&(qe(n.BLEND),f=!0),k!==j0){if(k!==w||bt!==V){if((y!==hs||P!==hs)&&(n.blendEquation(n.FUNC_ADD),y=hs,P=hs),bt)switch(k){case rr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Eu:n.blendFunc(n.ONE,n.ONE);break;case Tu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Au:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case rr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Eu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Tu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Au:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}R=null,I=null,C=null,G=null,b.set(0,0,0),T=0,w=k,V=bt}return}Le=Le||ue,vt=vt||de,_t=_t||ze,(ue!==y||Le!==P)&&(n.blendEquationSeparate(Pe[ue],Pe[Le]),y=ue,P=Le),(de!==R||ze!==I||vt!==C||_t!==G)&&(n.blendFuncSeparate(Be[de],Be[ze],Be[vt],Be[_t]),R=de,I=ze,C=vt,G=_t),(Kt.equals(b)===!1||dn!==T)&&(n.blendColor(Kt.r,Kt.g,Kt.b,dn),b.copy(Kt),T=dn),w=k,V=!1}function Ct(k,ue){k.side===qn?Ue(n.CULL_FACE):qe(n.CULL_FACE);let de=k.side===Mn;ue&&(de=!de),Ze(de),k.blending===rr&&k.transparent===!1?be(Ni):be(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),a.setMask(k.colorWrite);let ze=k.stencilWrite;c.setTest(ze),ze&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),B(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?qe(n.SAMPLE_ALPHA_TO_COVERAGE):Ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(k){Y!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),Y=k)}function E(k){k!==Z0?(qe(n.CULL_FACE),k!==oe&&(k===Su?n.cullFace(n.BACK):k===J0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ue(n.CULL_FACE),oe=k}function _(k){k!==D&&(Z&&n.lineWidth(k),D=k)}function B(k,ue,de){k?(qe(n.POLYGON_OFFSET_FILL),(z!==ue||X!==de)&&(n.polygonOffset(ue,de),z=ue,X=de)):Ue(n.POLYGON_OFFSET_FILL)}function ne(k){k?qe(n.SCISSOR_TEST):Ue(n.SCISSOR_TEST)}function ee(k){k===void 0&&(k=n.TEXTURE0+J-1),re!==k&&(n.activeTexture(k),re=k)}function ie(k,ue,de){de===void 0&&(re===null?de=n.TEXTURE0+J-1:de=re);let ze=xe[de];ze===void 0&&(ze={type:void 0,texture:void 0},xe[de]=ze),(ze.type!==k||ze.texture!==ue)&&(re!==de&&(n.activeTexture(de),re=de),n.bindTexture(k,ue||Ge[k]),ze.type=k,ze.texture=ue)}function Me(){let k=xe[re];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function fe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{n.compressedTexImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ne(){try{n.texSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Je(){try{n.texSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Q(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function it(){try{n.texStorage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Fe(){try{n.texStorage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ce(){try{n.texImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{n.texImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ye(k){me.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),me.copy(k))}function ut(k){Te.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),Te.copy(k))}function Dt(k,ue){let de=d.get(ue);de===void 0&&(de=new WeakMap,d.set(ue,de));let ze=de.get(k);ze===void 0&&(ze=n.getUniformBlockIndex(ue,k.name),de.set(k,ze))}function Qe(k,ue){let ze=d.get(ue).get(k);h.get(ue)!==ze&&(n.uniformBlockBinding(ue,ze,k.__bindingPointIndex),h.set(ue,ze))}function ce(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},re=null,xe={},g={},x=new WeakMap,v=[],m=null,f=!1,w=null,y=null,R=null,I=null,P=null,C=null,G=null,b=new $e(0,0,0),T=0,V=!1,Y=null,oe=null,D=null,z=null,X=null,me.set(0,0,n.canvas.width,n.canvas.height),Te.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:qe,disable:Ue,bindFramebuffer:ot,drawBuffers:O,useProgram:un,setBlending:be,setMaterial:Ct,setFlipSided:Ze,setCullFace:E,setLineWidth:_,setPolygonOffset:B,setScissorTest:ne,activeTexture:ee,bindTexture:ie,unbindTexture:Me,compressedTexImage2D:fe,compressedTexImage3D:ye,texImage2D:Ce,texImage3D:ve,updateUBOMapping:Dt,uniformBlockBinding:Qe,texStorage2D:it,texStorage3D:Fe,texSubImage2D:Ne,texSubImage3D:Je,compressedTexSubImage2D:Q,compressedTexSubImage3D:pt,scissor:Ye,viewport:ut,reset:ce}}function Ub(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(E,_){return g?new OffscreenCanvas(E,_):na("canvas")}function v(E,_,B,ne){let ee=1;if((E.width>ne||E.height>ne)&&(ee=ne/Math.max(E.width,E.height)),ee<1||_===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let ie=_?lc:Math.floor,Me=ie(ee*E.width),fe=ie(ee*E.height);d===void 0&&(d=x(Me,fe));let ye=B?x(Me,fe):d;return ye.width=Me,ye.height=fe,ye.getContext("2d").drawImage(E,0,0,Me,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Me+"x"+fe+")."),ye}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function m(E){return ld(E.width)&&ld(E.height)}function f(E){return a?!1:E.wrapS!==Yn||E.wrapT!==Yn||E.minFilter!==mn&&E.minFilter!==Nn}function w(E,_){return E.generateMipmaps&&_&&E.minFilter!==mn&&E.minFilter!==Nn}function y(E){n.generateMipmap(E)}function R(E,_,B,ne,ee=!1){if(a===!1)return _;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ie=_;if(_===n.RED&&(B===n.FLOAT&&(ie=n.R32F),B===n.HALF_FLOAT&&(ie=n.R16F),B===n.UNSIGNED_BYTE&&(ie=n.R8)),_===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(ie=n.R8UI),B===n.UNSIGNED_SHORT&&(ie=n.R16UI),B===n.UNSIGNED_INT&&(ie=n.R32UI),B===n.BYTE&&(ie=n.R8I),B===n.SHORT&&(ie=n.R16I),B===n.INT&&(ie=n.R32I)),_===n.RG&&(B===n.FLOAT&&(ie=n.RG32F),B===n.HALF_FLOAT&&(ie=n.RG16F),B===n.UNSIGNED_BYTE&&(ie=n.RG8)),_===n.RGBA){let Me=ee?jo:mt.getTransfer(ne);B===n.FLOAT&&(ie=n.RGBA32F),B===n.HALF_FLOAT&&(ie=n.RGBA16F),B===n.UNSIGNED_BYTE&&(ie=Me===St?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function I(E,_,B){return w(E,B)===!0||E.isFramebufferTexture&&E.minFilter!==mn&&E.minFilter!==Nn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function P(E){return E===mn||E===Pu||E===Ml?n.NEAREST:n.LINEAR}function C(E){let _=E.target;_.removeEventListener("dispose",C),b(_),_.isVideoTexture&&h.delete(_)}function G(E){let _=E.target;_.removeEventListener("dispose",G),V(_)}function b(E){let _=i.get(E);if(_.__webglInit===void 0)return;let B=E.source,ne=p.get(B);if(ne){let ee=ne[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&T(E),Object.keys(ne).length===0&&p.delete(B)}i.remove(E)}function T(E){let _=i.get(E);n.deleteTexture(_.__webglTexture);let B=E.source,ne=p.get(B);delete ne[_.__cacheKey],o.memory.textures--}function V(E){let _=E.texture,B=i.get(E),ne=i.get(_);if(ne.__webglTexture!==void 0&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(B.__webglFramebuffer[ee]))for(let ie=0;ie<B.__webglFramebuffer[ee].length;ie++)n.deleteFramebuffer(B.__webglFramebuffer[ee][ie]);else n.deleteFramebuffer(B.__webglFramebuffer[ee]);B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[ee])}else{if(Array.isArray(B.__webglFramebuffer))for(let ee=0;ee<B.__webglFramebuffer.length;ee++)n.deleteFramebuffer(B.__webglFramebuffer[ee]);else n.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ee=0;ee<B.__webglColorRenderbuffer.length;ee++)B.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[ee]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ee=0,ie=_.length;ee<ie;ee++){let Me=i.get(_[ee]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(_[ee])}i.remove(_),i.remove(E)}let Y=0;function oe(){Y=0}function D(){let E=Y;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),Y+=1,E}function z(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function X(E,_){let B=i.get(E);if(E.isVideoTexture&&Ct(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){let ne=E.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(B,E,_);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+_)}function J(E,_){let B=i.get(E);if(E.version>0&&B.__version!==E.version){me(B,E,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+_)}function Z(E,_){let B=i.get(E);if(E.version>0&&B.__version!==E.version){me(B,E,_);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+_)}function $(E,_){let B=i.get(E);if(E.version>0&&B.__version!==E.version){Te(B,E,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+_)}let te={[sc]:n.REPEAT,[Yn]:n.CLAMP_TO_EDGE,[rc]:n.MIRRORED_REPEAT},re={[mn]:n.NEAREST,[Pu]:n.NEAREST_MIPMAP_NEAREST,[Ml]:n.NEAREST_MIPMAP_LINEAR,[Nn]:n.LINEAR,[Cg]:n.LINEAR_MIPMAP_NEAREST,[Xr]:n.LINEAR_MIPMAP_LINEAR},xe={[Hg]:n.NEVER,[Xg]:n.ALWAYS,[Gg]:n.LESS,[lf]:n.LEQUAL,[Vg]:n.EQUAL,[Yg]:n.GEQUAL,[Wg]:n.GREATER,[qg]:n.NOTEQUAL};function q(E,_,B){if(B?(n.texParameteri(E,n.TEXTURE_WRAP_S,te[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,te[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,te[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,re[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,re[_.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(_.wrapS!==Yn||_.wrapT!==Yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,P(_.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,P(_.minFilter)),_.minFilter!==mn&&_.minFilter!==Nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,xe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ne=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===mn||_.minFilter!==Ml&&_.minFilter!==Xr||_.type===Di&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===$r&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(n.texParameterf(E,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function j(E,_){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",C));let ne=_.source,ee=p.get(ne);ee===void 0&&(ee={},p.set(ne,ee));let ie=z(_);if(ie!==E.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ee[ie].usedTimes++;let Me=ee[E.__cacheKey];Me!==void 0&&(ee[E.__cacheKey].usedTimes--,Me.usedTimes===0&&T(_)),E.__cacheKey=ie,E.__webglTexture=ee[ie].texture}return B}function me(E,_,B){let ne=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ne=n.TEXTURE_3D);let ee=j(E,_),ie=_.source;t.bindTexture(ne,E.__webglTexture,n.TEXTURE0+B);let Me=i.get(ie);if(ie.version!==Me.__version||ee===!0){t.activeTexture(n.TEXTURE0+B);let fe=mt.getPrimaries(mt.workingColorSpace),ye=_.colorSpace===Un?null:mt.getPrimaries(_.colorSpace),Ne=_.colorSpace===Un||fe===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let Je=f(_)&&m(_.image)===!1,Q=v(_.image,Je,!1,s.maxTextureSize);Q=Ze(_,Q);let pt=m(Q)||a,it=r.convert(_.format,_.colorSpace),Fe=r.convert(_.type),Ce=R(_.internalFormat,it,Fe,_.colorSpace,_.isVideoTexture);q(ne,_,pt);let ve,Ye=_.mipmaps,ut=a&&_.isVideoTexture!==!0&&Ce!==rf,Dt=Me.__version===void 0||ee===!0,Qe=I(_,Q,pt);if(_.isDepthTexture)Ce=n.DEPTH_COMPONENT,a?_.type===Di?Ce=n.DEPTH_COMPONENT32F:_.type===ki?Ce=n.DEPTH_COMPONENT24:_.type===ds?Ce=n.DEPTH24_STENCIL8:Ce=n.DEPTH_COMPONENT16:_.type===Di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===fs&&Ce===n.DEPTH_COMPONENT&&_.type!==Fc&&_.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=ki,Fe=r.convert(_.type)),_.format===hr&&Ce===n.DEPTH_COMPONENT&&(Ce=n.DEPTH_STENCIL,_.type!==ds&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=ds,Fe=r.convert(_.type))),Dt&&(ut?t.texStorage2D(n.TEXTURE_2D,1,Ce,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,Ce,Q.width,Q.height,0,it,Fe,null));else if(_.isDataTexture)if(Ye.length>0&&pt){ut&&Dt&&t.texStorage2D(n.TEXTURE_2D,Qe,Ce,Ye[0].width,Ye[0].height);for(let ce=0,k=Ye.length;ce<k;ce++)ve=Ye[ce],ut?t.texSubImage2D(n.TEXTURE_2D,ce,0,0,ve.width,ve.height,it,Fe,ve.data):t.texImage2D(n.TEXTURE_2D,ce,Ce,ve.width,ve.height,0,it,Fe,ve.data);_.generateMipmaps=!1}else ut?(Dt&&t.texStorage2D(n.TEXTURE_2D,Qe,Ce,Q.width,Q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,it,Fe,Q.data)):t.texImage2D(n.TEXTURE_2D,0,Ce,Q.width,Q.height,0,it,Fe,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ut&&Dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Qe,Ce,Ye[0].width,Ye[0].height,Q.depth);for(let ce=0,k=Ye.length;ce<k;ce++)ve=Ye[ce],_.format!==Xn?it!==null?ut?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,ve.width,ve.height,Q.depth,it,ve.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,Ce,ve.width,ve.height,Q.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,ve.width,ve.height,Q.depth,it,Fe,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,Ce,ve.width,ve.height,Q.depth,0,it,Fe,ve.data)}else{ut&&Dt&&t.texStorage2D(n.TEXTURE_2D,Qe,Ce,Ye[0].width,Ye[0].height);for(let ce=0,k=Ye.length;ce<k;ce++)ve=Ye[ce],_.format!==Xn?it!==null?ut?t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,ve.width,ve.height,it,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,Ce,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?t.texSubImage2D(n.TEXTURE_2D,ce,0,0,ve.width,ve.height,it,Fe,ve.data):t.texImage2D(n.TEXTURE_2D,ce,Ce,ve.width,ve.height,0,it,Fe,ve.data)}else if(_.isDataArrayTexture)ut?(Dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Qe,Ce,Q.width,Q.height,Q.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,it,Fe,Q.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,Q.width,Q.height,Q.depth,0,it,Fe,Q.data);else if(_.isData3DTexture)ut?(Dt&&t.texStorage3D(n.TEXTURE_3D,Qe,Ce,Q.width,Q.height,Q.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,it,Fe,Q.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,Q.width,Q.height,Q.depth,0,it,Fe,Q.data);else if(_.isFramebufferTexture){if(Dt)if(ut)t.texStorage2D(n.TEXTURE_2D,Qe,Ce,Q.width,Q.height);else{let ce=Q.width,k=Q.height;for(let ue=0;ue<Qe;ue++)t.texImage2D(n.TEXTURE_2D,ue,Ce,ce,k,0,it,Fe,null),ce>>=1,k>>=1}}else if(Ye.length>0&&pt){ut&&Dt&&t.texStorage2D(n.TEXTURE_2D,Qe,Ce,Ye[0].width,Ye[0].height);for(let ce=0,k=Ye.length;ce<k;ce++)ve=Ye[ce],ut?t.texSubImage2D(n.TEXTURE_2D,ce,0,0,it,Fe,ve):t.texImage2D(n.TEXTURE_2D,ce,Ce,it,Fe,ve);_.generateMipmaps=!1}else ut?(Dt&&t.texStorage2D(n.TEXTURE_2D,Qe,Ce,Q.width,Q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,it,Fe,Q)):t.texImage2D(n.TEXTURE_2D,0,Ce,it,Fe,Q);w(_,pt)&&y(ne),Me.__version=ie.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Te(E,_,B){if(_.image.length!==6)return;let ne=j(E,_),ee=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+B);let ie=i.get(ee);if(ee.version!==ie.__version||ne===!0){t.activeTexture(n.TEXTURE0+B);let Me=mt.getPrimaries(mt.workingColorSpace),fe=_.colorSpace===Un?null:mt.getPrimaries(_.colorSpace),ye=_.colorSpace===Un||Me===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let Ne=_.isCompressedTexture||_.image[0].isCompressedTexture,Je=_.image[0]&&_.image[0].isDataTexture,Q=[];for(let ce=0;ce<6;ce++)!Ne&&!Je?Q[ce]=v(_.image[ce],!1,!0,s.maxCubemapSize):Q[ce]=Je?_.image[ce].image:_.image[ce],Q[ce]=Ze(_,Q[ce]);let pt=Q[0],it=m(pt)||a,Fe=r.convert(_.format,_.colorSpace),Ce=r.convert(_.type),ve=R(_.internalFormat,Fe,Ce,_.colorSpace),Ye=a&&_.isVideoTexture!==!0,ut=ie.__version===void 0||ne===!0,Dt=I(_,pt,it);q(n.TEXTURE_CUBE_MAP,_,it);let Qe;if(Ne){Ye&&ut&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,ve,pt.width,pt.height);for(let ce=0;ce<6;ce++){Qe=Q[ce].mipmaps;for(let k=0;k<Qe.length;k++){let ue=Qe[k];_.format!==Xn?Fe!==null?Ye?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,k,0,0,ue.width,ue.height,Fe,ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,k,ve,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,k,0,0,ue.width,ue.height,Fe,Ce,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,k,ve,ue.width,ue.height,0,Fe,Ce,ue.data)}}}else{Qe=_.mipmaps,Ye&&ut&&(Qe.length>0&&Dt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,ve,Q[0].width,Q[0].height));for(let ce=0;ce<6;ce++)if(Je){Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Q[ce].width,Q[ce].height,Fe,Ce,Q[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ve,Q[ce].width,Q[ce].height,0,Fe,Ce,Q[ce].data);for(let k=0;k<Qe.length;k++){let de=Qe[k].image[ce].image;Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,k+1,0,0,de.width,de.height,Fe,Ce,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,k+1,ve,de.width,de.height,0,Fe,Ce,de.data)}}else{Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Fe,Ce,Q[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ve,Fe,Ce,Q[ce]);for(let k=0;k<Qe.length;k++){let ue=Qe[k];Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,k+1,0,0,Fe,Ce,ue.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,k+1,ve,Fe,Ce,ue.image[ce])}}}w(_,it)&&y(n.TEXTURE_CUBE_MAP),ie.__version=ee.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Ee(E,_,B,ne,ee,ie){let Me=r.convert(B.format,B.colorSpace),fe=r.convert(B.type),ye=R(B.internalFormat,Me,fe,B.colorSpace);if(!i.get(_).__hasExternalTextures){let Je=Math.max(1,_.width>>ie),Q=Math.max(1,_.height>>ie);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,ie,ye,Je,Q,_.depth,0,Me,fe,null):t.texImage2D(ee,ie,ye,Je,Q,0,Me,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),be(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,ee,i.get(B).__webglTexture,0,Be(_)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,ee,i.get(B).__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(E,_,B){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer&&!_.stencilBuffer){let ne=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(B||be(_)){let ee=_.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Di?ne=n.DEPTH_COMPONENT32F:ee.type===ki&&(ne=n.DEPTH_COMPONENT24));let ie=Be(_);be(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,ne,_.width,_.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,ne,_.width,_.height)}else n.renderbufferStorage(n.RENDERBUFFER,ne,_.width,_.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(_.depthBuffer&&_.stencilBuffer){let ne=Be(_);B&&be(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,_.width,_.height):be(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{let ne=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let ee=0;ee<ne.length;ee++){let ie=ne[ee],Me=r.convert(ie.format,ie.colorSpace),fe=r.convert(ie.type),ye=R(ie.internalFormat,Me,fe,ie.colorSpace),Ne=Be(_);B&&be(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,ye,_.width,_.height):be(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,ye,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ye,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function qe(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X(_.depthTexture,0);let ne=i.get(_.depthTexture).__webglTexture,ee=Be(_);if(_.depthTexture.format===fs)be(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(_.depthTexture.format===hr)be(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ue(E){let _=i.get(E),B=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");qe(_.__webglFramebuffer,E)}else if(B){_.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[ne]),_.__webglDepthbuffer[ne]=n.createRenderbuffer(),Ge(_.__webglDepthbuffer[ne],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),Ge(_.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(E,_,B){let ne=i.get(E);_!==void 0&&Ee(ne.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Ue(E)}function O(E){let _=E.texture,B=i.get(E),ne=i.get(_);E.addEventListener("dispose",G),E.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=_.version,o.memory.textures++);let ee=E.isWebGLCubeRenderTarget===!0,ie=E.isWebGLMultipleRenderTargets===!0,Me=m(E)||a;if(ee){B.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(a&&_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[fe]=[];for(let ye=0;ye<_.mipmaps.length;ye++)B.__webglFramebuffer[fe][ye]=n.createFramebuffer()}else B.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(a&&_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let fe=0;fe<_.mipmaps.length;fe++)B.__webglFramebuffer[fe]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(ie)if(s.drawBuffers){let fe=E.texture;for(let ye=0,Ne=fe.length;ye<Ne;ye++){let Je=i.get(fe[ye]);Je.__webglTexture===void 0&&(Je.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&be(E)===!1){let fe=ie?_:[_];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ye=0;ye<fe.length;ye++){let Ne=fe[ye];B.__webglColorRenderbuffer[ye]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ye]);let Je=r.convert(Ne.format,Ne.colorSpace),Q=r.convert(Ne.type),pt=R(Ne.internalFormat,Je,Q,Ne.colorSpace,E.isXRRenderTarget===!0),it=Be(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,it,pt,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,B.__webglColorRenderbuffer[ye])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Ge(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),q(n.TEXTURE_CUBE_MAP,_,Me);for(let fe=0;fe<6;fe++)if(a&&_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)Ee(B.__webglFramebuffer[fe][ye],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ye);else Ee(B.__webglFramebuffer[fe],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);w(_,Me)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){let fe=E.texture;for(let ye=0,Ne=fe.length;ye<Ne;ye++){let Je=fe[ye],Q=i.get(Je);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),q(n.TEXTURE_2D,Je,Me),Ee(B.__webglFramebuffer,E,Je,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,0),w(Je,Me)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?fe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,ne.__webglTexture),q(fe,_,Me),a&&_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)Ee(B.__webglFramebuffer[ye],E,_,n.COLOR_ATTACHMENT0,fe,ye);else Ee(B.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,fe,0);w(_,Me)&&y(fe),t.unbindTexture()}E.depthBuffer&&Ue(E)}function un(E){let _=m(E)||a,B=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ne=0,ee=B.length;ne<ee;ne++){let ie=B[ne];if(w(ie,_)){let Me=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,fe=i.get(ie).__webglTexture;t.bindTexture(Me,fe),y(Me),t.unbindTexture()}}}function Pe(E){if(a&&E.samples>0&&be(E)===!1){let _=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],B=E.width,ne=E.height,ee=n.COLOR_BUFFER_BIT,ie=[],Me=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(E),ye=E.isWebGLMultipleRenderTargets===!0;if(ye)for(let Ne=0;Ne<_.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Ne=0;Ne<_.length;Ne++){ie.push(n.COLOR_ATTACHMENT0+Ne),E.depthBuffer&&ie.push(Me);let Je=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(Je===!1&&(E.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),ye&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[Ne]),Je===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Me])),ye){let Q=i.get(_[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,B,ne,0,0,B,ne,ee,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ye)for(let Ne=0;Ne<_.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,fe.__webglColorRenderbuffer[Ne]);let Je=i.get(_[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,Je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function Be(E){return Math.min(s.maxSamples,E.samples)}function be(E){let _=i.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ct(E){let _=o.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function Ze(E,_){let B=E.colorSpace,ne=E.format,ee=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===oc||B!==xi&&B!==Un&&(mt.getTransfer(B)===St?a===!1?e.has("EXT_sRGB")===!0&&ne===Xn?(E.format=oc,E.minFilter=Nn,E.generateMipmaps=!1):_=ia.sRGBToLinear(_):(ne!==Xn||ee!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),_}this.allocateTextureUnit=D,this.resetTextureUnits=oe,this.setTexture2D=X,this.setTexture2DArray=J,this.setTexture3D=Z,this.setTextureCube=$,this.rebindTextures=ot,this.setupRenderTarget=O,this.updateRenderTargetMipmap=un,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=be}function zb(n,e,t){let i=t.isWebGL2;function s(r,o=Un){let a,l=mt.getTransfer(o);if(r===zi)return n.UNSIGNED_BYTE;if(r===Qd)return n.UNSIGNED_SHORT_4_4_4_4;if(r===ef)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Pg)return n.BYTE;if(r===Lg)return n.SHORT;if(r===Fc)return n.UNSIGNED_SHORT;if(r===jd)return n.INT;if(r===ki)return n.UNSIGNED_INT;if(r===Di)return n.FLOAT;if(r===$r)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Ig)return n.ALPHA;if(r===Xn)return n.RGBA;if(r===kg)return n.LUMINANCE;if(r===Dg)return n.LUMINANCE_ALPHA;if(r===fs)return n.DEPTH_COMPONENT;if(r===hr)return n.DEPTH_STENCIL;if(r===oc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Ng)return n.RED;if(r===tf)return n.RED_INTEGER;if(r===Ug)return n.RG;if(r===nf)return n.RG_INTEGER;if(r===sf)return n.RGBA_INTEGER;if(r===wl||r===Sl||r===El||r===Tl)if(l===St)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===wl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Sl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===El)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Tl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===wl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Sl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===El)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Tl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Lu||r===Iu||r===ku||r===Du)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Lu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Iu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ku)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Du)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Nu||r===Uu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Nu)return l===St?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Uu)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===zu||r===Ou||r===Fu||r===Bu||r===Hu||r===Gu||r===Vu||r===Wu||r===qu||r===Yu||r===Xu||r===$u||r===Zu||r===Ju)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===zu)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ou)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fu)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bu)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Hu)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gu)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vu)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Wu)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===qu)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yu)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xu)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===$u)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zu)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ju)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Al||r===Ku||r===ju)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Al)return l===St?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ku)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ju)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===zg||r===Qu||r===ed||r===td)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Al)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Qu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ed)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===td)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ds?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}function Fb(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,uf(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,w,y,R){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),p(m,f),f.isMeshPhysicalMaterial&&g(m,f,R)):f.isMeshMatcapMaterial?(r(m,f),x(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,w,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Mn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Mn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let w=e.get(f).envMap;if(w&&(m.envMap.value=w,m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let y=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*y,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function g(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Mn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){let w=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Bb(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(w,y){let R=y.program;i.uniformBlockBinding(w,R)}function c(w,y){let R=s[w.id];R===void 0&&(x(w),R=h(w),s[w.id]=R,w.addEventListener("dispose",m));let I=y.program;i.updateUBOMapping(w,I);let P=e.render.frame;r[w.id]!==P&&(p(w),r[w.id]=P)}function h(w){let y=d();w.__bindingPointIndex=y;let R=n.createBuffer(),I=w.__size,P=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,I,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,R),R}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){let y=s[w.id],R=w.uniforms,I=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let P=0,C=R.length;P<C;P++){let G=Array.isArray(R[P])?R[P]:[R[P]];for(let b=0,T=G.length;b<T;b++){let V=G[b];if(g(V,P,b,I)===!0){let Y=V.__offset,oe=Array.isArray(V.value)?V.value:[V.value],D=0;for(let z=0;z<oe.length;z++){let X=oe[z],J=v(X);typeof X=="number"||typeof X=="boolean"?(V.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,Y+D,V.__data)):X.isMatrix3?(V.__data[0]=X.elements[0],V.__data[1]=X.elements[1],V.__data[2]=X.elements[2],V.__data[3]=0,V.__data[4]=X.elements[3],V.__data[5]=X.elements[4],V.__data[6]=X.elements[5],V.__data[7]=0,V.__data[8]=X.elements[6],V.__data[9]=X.elements[7],V.__data[10]=X.elements[8],V.__data[11]=0):(X.toArray(V.__data,D),D+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,V.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(w,y,R,I){let P=w.value,C=y+"_"+R;if(I[C]===void 0)return typeof P=="number"||typeof P=="boolean"?I[C]=P:I[C]=P.clone(),!0;{let G=I[C];if(typeof P=="number"||typeof P=="boolean"){if(G!==P)return I[C]=P,!0}else if(G.equals(P)===!1)return G.copy(P),!0}return!1}function x(w){let y=w.uniforms,R=0,I=16;for(let C=0,G=y.length;C<G;C++){let b=Array.isArray(y[C])?y[C]:[y[C]];for(let T=0,V=b.length;T<V;T++){let Y=b[T],oe=Array.isArray(Y.value)?Y.value:[Y.value];for(let D=0,z=oe.length;D<z;D++){let X=oe[D],J=v(X),Z=R%I;Z!==0&&I-Z<J.boundary&&(R+=I-Z),Y.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=R,R+=J.storage}}}let P=R%I;return P>0&&(R+=I-P),w.__size=R,w.__cache={},this}function v(w){let y={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function m(w){let y=w.target;y.removeEventListener("dispose",m);let R=o.indexOf(y.__bindingPointIndex);o.splice(R,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(let w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}function $o(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Hb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function $d(){return(typeof performance>"u"?Date:performance).now()}function Zd(n,e){return n.distance-e.distance}function Uc(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)Uc(s[r],e,t,!0)}}var zc,Z0,Su,J0,Jd,K0,pi,Oi,Mn,qn,Ni,rr,Eu,Tu,Au,j0,hs,Q0,eg,Ru,Cu,tg,ng,ig,sg,ec,tc,rg,og,ag,lg,cg,hg,ug,dg,fg,pg,mg,gg,Zo,xg,yg,vg,_g,Oc,bg,Mg,Ui,wg,Sg,Eg,Tg,Ag,Rg,Kd,lr,cr,nc,ic,Aa,sc,Yn,rc,mn,Pu,Ml,Nn,Cg,Xr,zi,Pg,Lg,Fc,jd,ki,Di,$r,Qd,ef,ds,Ig,Xn,kg,Dg,fs,hr,Ng,tf,Ug,nf,sf,wl,Sl,El,Tl,Lu,Iu,ku,Du,rf,Nu,Uu,zu,Ou,Fu,Bu,Hu,Gu,Vu,Wu,qu,Yu,Xu,$u,Zu,Ju,Al,Ku,ju,zg,Qu,ed,td,Jo,Ko,Rl,nd,id,sd,of,ps,Og,Fg,af,Bg,Un,Bt,xi,Bc,Ra,jo,St,Qo,ea,Bs,rd,Hg,Gg,Vg,lf,Wg,qg,Yg,Xg,od,ad,oc,gi,ta,Fi,an,Cl,ac,je,tt,Ll,cd,hd,ud,To,Jg,mt,Hs,ia,Kg,sa,jg,zn,en,cc,yi,ra,hc,ri,U,Dl,dd,ms,ci,Gn,Ao,Gs,Vs,Ws,Ri,Ci,rs,Hr,Ro,Co,os,Qg,Gr,Ul,Zr,hi,zl,Po,Pi,Ol,Lo,Fl,oa,Gt,qs,Vn,ex,tx,Li,Io,An,fd,pd,ur,Jr,nx,md,Ys,ui,ko,Vr,ix,sx,gd,xd,yd,rx,ox,xn,Wn,di,Bl,fi,Xs,$s,vd,Hl,Gl,Vl,Do,nr,hf,Ii,No,$e,ln,ax,gs,yn,Ht,Uo,cn,aa,la,Rt,lx,Dn,ql,Zs,Rn,Wr,Qt,vn,_d,as,zo,bd,Js,Ks,js,Yl,Oo,Fo,Bo,Ho,Md,wd,Sd,Go,Vo,Mt,On,ux,dx,fx,vi,ca,gn,Qs,er,uc,ha,dc,Xl,px,mx,mi,ls,qo,Kr,Bi,xx,yx,vx,_x,bx,Mx,wx,Sx,Ex,Tx,Ax,Rx,Cx,Px,Lx,Ix,kx,Dx,Nx,Ux,zx,Ox,Fx,Bx,Hx,Gx,Vx,Wx,qx,Yx,Xx,$x,Zx,Jx,Kx,jx,Qx,ey,ty,ny,iy,sy,ry,oy,ay,ly,cy,hy,uy,dy,fy,py,my,gy,xy,yy,vy,_y,by,My,wy,Sy,Ey,Ty,Ay,Ry,Cy,Py,Ly,Iy,ky,Dy,Ny,Uy,zy,Oy,Fy,By,Hy,Gy,Vy,Wy,qy,Yy,Xy,$y,Zy,Jy,Ky,jy,Qy,ev,tv,nv,iv,sv,rv,ov,av,lv,cv,hv,uv,dv,fv,pv,mv,gv,xv,yv,vv,_v,bv,Mv,wv,Sv,Ev,Tv,Av,Rv,Cv,Pv,Lv,Iv,kv,Dv,Nv,Uv,zv,Ov,Fv,Bv,Hv,Gv,Vv,Wv,qv,Yv,Xv,$v,Zv,Xe,he,si,Yo,ua,ir,Ed,us,$l,Td,Zl,Jl,Kl,cs,tr,Ad,da,fa,ff,pf,mf,gf,xf,Ld,Id,kd,Dd,Nd,fc,pc,mc,jl,ar,eb,tb,hb,ub,fb,bb,xc,yc,Rb,vc,_c,Ib,kb,bc,At,Ob,Yr,Mc,jr,wc,pa,ma,ga,xa,Qr,ya,eo,va,_a,ba,fr,pr,mr,Sc,Ec,Tc,$n,xs,Ac,Rc,Cc,to,ys,Pc,Lc,Gb,Ic,Ma,wa,Ql,Yd,Xd,kc,Dc,Sa,Ea,Gc,Vb,Vc,Wb,qb,Yb,Xb,$b,Zb,Jb,Nc,Tt,TM,Ta,Pa=Ae(()=>{zc="160",Z0=0,Su=1,J0=2,Jd=1,K0=2,pi=3,Oi=0,Mn=1,qn=2,Ni=0,rr=1,Eu=2,Tu=3,Au=4,j0=5,hs=100,Q0=101,eg=102,Ru=103,Cu=104,tg=200,ng=201,ig=202,sg=203,ec=204,tc=205,rg=206,og=207,ag=208,lg=209,cg=210,hg=211,ug=212,dg=213,fg=214,pg=0,mg=1,gg=2,Zo=3,xg=4,yg=5,vg=6,_g=7,Oc=0,bg=1,Mg=2,Ui=0,wg=1,Sg=2,Eg=3,Tg=4,Ag=5,Rg=6,Kd=300,lr=301,cr=302,nc=303,ic=304,Aa=306,sc=1e3,Yn=1001,rc=1002,mn=1003,Pu=1004,Ml=1005,Nn=1006,Cg=1007,Xr=1008,zi=1009,Pg=1010,Lg=1011,Fc=1012,jd=1013,ki=1014,Di=1015,$r=1016,Qd=1017,ef=1018,ds=1020,Ig=1021,Xn=1023,kg=1024,Dg=1025,fs=1026,hr=1027,Ng=1028,tf=1029,Ug=1030,nf=1031,sf=1033,wl=33776,Sl=33777,El=33778,Tl=33779,Lu=35840,Iu=35841,ku=35842,Du=35843,rf=36196,Nu=37492,Uu=37496,zu=37808,Ou=37809,Fu=37810,Bu=37811,Hu=37812,Gu=37813,Vu=37814,Wu=37815,qu=37816,Yu=37817,Xu=37818,$u=37819,Zu=37820,Ju=37821,Al=36492,Ku=36494,ju=36495,zg=36283,Qu=36284,ed=36285,td=36286,Jo=2300,Ko=2301,Rl=2302,nd=2400,id=2401,sd=2402,of=3e3,ps=3001,Og=3200,Fg=3201,af=0,Bg=1,Un="",Bt="srgb",xi="srgb-linear",Bc="display-p3",Ra="display-p3-linear",jo="linear",St="srgb",Qo="rec709",ea="p3",Bs=7680,rd=519,Hg=512,Gg=513,Vg=514,lf=515,Wg=516,qg=517,Yg=518,Xg=519,od=35044,ad="300 es",oc=1035,gi=2e3,ta=2001,Fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cl=Math.PI/180,ac=180/Math.PI;je=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(bn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],p=i[2],g=i[5],x=i[8],v=s[0],m=s[3],f=s[6],w=s[1],y=s[4],R=s[7],I=s[2],P=s[5],C=s[8];return r[0]=o*v+a*w+l*I,r[3]=o*m+a*y+l*P,r[6]=o*f+a*R+l*C,r[1]=c*v+h*w+d*I,r[4]=c*m+h*y+d*P,r[7]=c*f+h*R+d*C,r[2]=p*v+g*w+x*I,r[5]=p*m+g*y+x*P,r[8]=p*f+g*R+x*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,p=a*l-h*r,g=c*r-o*l,x=t*d+i*p+s*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return e[0]=d*v,e[1]=(s*c-h*i)*v,e[2]=(a*i-s*o)*v,e[3]=p*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=g*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ll.makeScale(e,t)),this}rotate(e){return this.premultiply(Ll.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ll.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ll=new tt;cd={};hd=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ud=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),To={[xi]:{transfer:jo,primaries:Qo,toReference:n=>n,fromReference:n=>n},[Bt]:{transfer:St,primaries:Qo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ra]:{transfer:jo,primaries:ea,toReference:n=>n.applyMatrix3(ud),fromReference:n=>n.applyMatrix3(hd)},[Bc]:{transfer:St,primaries:ea,toReference:n=>n.convertSRGBToLinear().applyMatrix3(ud),fromReference:n=>n.applyMatrix3(hd).convertLinearToSRGB()}},Jg=new Set([xi,Ra]),mt={enabled:!0,_workingColorSpace:xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Jg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=To[e].toReference,s=To[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return To[n].primaries},getTransfer:function(n){return n===Un?jo:To[n].transfer}};ia=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hs===void 0&&(Hs=na("canvas")),Hs.width=e.width,Hs.height=e.height;let i=Hs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Hs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=na("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=or(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(or(t[i]/255)*255):t[i]=or(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Kg=0,sa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=no(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(kl(s[o].image)):r.push(kl(s[o]))}else r=kl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};jg=0,zn=class n extends Fi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Yn,s=Yn,r=Nn,o=Xr,a=Xn,l=zi,c=n.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=no(),this.name="",this.source=new sa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ps?Bt:Un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sc:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case rc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sc:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case rc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Bt?ps:of}set encoding(e){qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ps?Bt:Un}};zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Kd;zn.DEFAULT_ANISOTROPY=1;en=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],p=l[1],g=l[5],x=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-p)<.01&&Math.abs(d-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+v)<.1&&Math.abs(x+m)<.1&&Math.abs(c+g+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,R=(g+1)/2,I=(f+1)/2,P=(h+p)/4,C=(d+v)/4,G=(x+m)/4;return y>R&&y>I?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=P/i,r=C/i):R>I?R<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(R),i=P/s,r=G/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=C/r,s=G/r),this.set(i,s,r,t),this}let w=Math.sqrt((m-x)*(m-x)+(d-v)*(d-v)+(p-h)*(p-h));return Math.abs(w)<.001&&(w=1),this.x=(m-x)/w,this.y=(d-v)/w,this.z=(p-h)/w,this.w=Math.acos((c+g+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},cc=class extends Fi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(qr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ps?Bt:Un),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new zn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new sa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yi=class extends cc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ra=class extends zn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},hc=class extends zn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ri=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],p=r[o+0],g=r[o+1],x=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=p,e[t+1]=g,e[t+2]=x,e[t+3]=v;return}if(d!==v||l!==p||c!==g||h!==x){let m=1-a,f=l*p+c*g+h*x+d*v,w=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let I=Math.sqrt(y),P=Math.atan2(I,f*w);m=Math.sin(m*P)/I,a=Math.sin(a*P)/I}let R=a*w;if(l=l*m+p*R,c=c*m+g*R,h=h*m+x*R,d=d*m+v*R,m===1-a){let I=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=I,c*=I,h*=I,d*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],p=r[o+1],g=r[o+2],x=r[o+3];return e[t]=a*x+h*d+l*g-c*p,e[t+1]=l*x+h*p+c*d-a*g,e[t+2]=c*x+h*g+a*p-l*d,e[t+3]=h*x-a*d-l*p-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),p=l(i/2),g=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=p*h*d+c*g*x,this._y=c*g*d-p*h*x,this._z=c*h*x+p*g*d,this._w=c*h*d-p*g*x;break;case"YXZ":this._x=p*h*d+c*g*x,this._y=c*g*d-p*h*x,this._z=c*h*x-p*g*d,this._w=c*h*d+p*g*x;break;case"ZXY":this._x=p*h*d-c*g*x,this._y=c*g*d+p*h*x,this._z=c*h*x+p*g*d,this._w=c*h*d-p*g*x;break;case"ZYX":this._x=p*h*d-c*g*x,this._y=c*g*d+p*h*x,this._z=c*h*x-p*g*d,this._w=c*h*d+p*g*x;break;case"YZX":this._x=p*h*d+c*g*x,this._y=c*g*d+p*h*x,this._z=c*h*x-p*g*d,this._w=c*h*d-p*g*x;break;case"XZY":this._x=p*h*d-c*g*x,this._y=c*g*d-p*h*x,this._z=c*h*x+p*g*d,this._w=c*h*d+p*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],p=i+a+d;if(p>0){let g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(h-l)*g,this._y=(r-c)*g,this._z=(o-s)*g}else if(i>a&&i>d){let g=2*Math.sqrt(1+i-a-d);this._w=(h-l)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+c)/g}else if(a>d){let g=2*Math.sqrt(1+a-i-d);this._w=(r-c)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(l+h)/g}else{let g=2*Math.sqrt(1+d-i-a);this._w=(o-s)/g,this._x=(r+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let g=1-t;return this._w=g*o+t*this._w,this._x=g*i+t*this._x,this._y=g*s+t*this._y,this._z=g*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=o*d+this._w*p,this._x=i*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dl.copy(this).projectOnVector(e),this.sub(Dl)}reflect(e){return this.sub(Dl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(bn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Dl=new U,dd=new ri,ms=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ao.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ao.copy(i.boundingBox)),Ao.applyMatrix4(e.matrixWorld),this.union(Ao)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hr),Ro.subVectors(this.max,Hr),Gs.subVectors(e.a,Hr),Vs.subVectors(e.b,Hr),Ws.subVectors(e.c,Hr),Ri.subVectors(Vs,Gs),Ci.subVectors(Ws,Vs),rs.subVectors(Gs,Ws);let t=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-rs.z,rs.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,rs.z,0,-rs.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-rs.y,rs.x,0];return!Nl(t,Gs,Vs,Ws,Ro)||(t=[1,0,0,0,1,0,0,0,1],!Nl(t,Gs,Vs,Ws,Ro))?!1:(Co.crossVectors(Ri,Ci),t=[Co.x,Co.y,Co.z],Nl(t,Gs,Vs,Ws,Ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ci=[new U,new U,new U,new U,new U,new U,new U,new U],Gn=new U,Ao=new ms,Gs=new U,Vs=new U,Ws=new U,Ri=new U,Ci=new U,rs=new U,Hr=new U,Ro=new U,Co=new U,os=new U;Qg=new ms,Gr=new U,Ul=new U,Zr=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Qg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gr.subVectors(e,this.center);let t=Gr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Gr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ul.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gr.copy(e.center).add(Ul)),this.expandByPoint(Gr.copy(e.center).sub(Ul))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},hi=new U,zl=new U,Po=new U,Pi=new U,Ol=new U,Lo=new U,Fl=new U,oa=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){zl.copy(e).add(t).multiplyScalar(.5),Po.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(zl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Po),a=Pi.dot(this.direction),l=-Pi.dot(Po),c=Pi.lengthSq(),h=Math.abs(1-o*o),d,p,g,x;if(h>0)if(d=o*l-a,p=o*a-l,x=r*h,d>=0)if(p>=-x)if(p<=x){let v=1/h;d*=v,p*=v,g=d*(d+o*p+2*a)+p*(o*d+p+2*l)+c}else p=r,d=Math.max(0,-(o*p+a)),g=-d*d+p*(p+2*l)+c;else p=-r,d=Math.max(0,-(o*p+a)),g=-d*d+p*(p+2*l)+c;else p<=-x?(d=Math.max(0,-(-o*r+a)),p=d>0?-r:Math.min(Math.max(-r,-l),r),g=-d*d+p*(p+2*l)+c):p<=x?(d=0,p=Math.min(Math.max(-r,-l),r),g=p*(p+2*l)+c):(d=Math.max(0,-(o*r+a)),p=d>0?r:Math.min(Math.max(-r,-l),r),g=-d*d+p*(p+2*l)+c);else p=o>0?-r:r,d=Math.max(0,-(o*p+a)),g=-d*d+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(zl).addScaledVector(Po,p),g}intersectSphere(e,t){hi.subVectors(e.center,this.origin);let i=hi.dot(this.direction),s=hi.dot(hi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(a=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,i,s,r){Ol.subVectors(t,e),Lo.subVectors(i,e),Fl.crossVectors(Ol,Lo);let o=this.direction.dot(Fl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,e);let l=a*this.direction.dot(Lo.crossVectors(Pi,Lo));if(l<0)return null;let c=a*this.direction.dot(Ol.cross(Pi));if(c<0||l+c>o)return null;let h=-a*Pi.dot(Fl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gt=class n{constructor(e,t,i,s,r,o,a,l,c,h,d,p,g,x,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,p,g,x,v,m)}set(e,t,i,s,r,o,a,l,c,h,d,p,g,x,v,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=p,f[3]=g,f[7]=x,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/qs.setFromMatrixColumn(e,0).length(),r=1/qs.setFromMatrixColumn(e,1).length(),o=1/qs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let p=o*h,g=o*d,x=a*h,v=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=g+x*c,t[5]=p-v*c,t[9]=-a*l,t[2]=v-p*c,t[6]=x+g*c,t[10]=o*l}else if(e.order==="YXZ"){let p=l*h,g=l*d,x=c*h,v=c*d;t[0]=p+v*a,t[4]=x*a-g,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=g*a-x,t[6]=v+p*a,t[10]=o*l}else if(e.order==="ZXY"){let p=l*h,g=l*d,x=c*h,v=c*d;t[0]=p-v*a,t[4]=-o*d,t[8]=x+g*a,t[1]=g+x*a,t[5]=o*h,t[9]=v-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let p=o*h,g=o*d,x=a*h,v=a*d;t[0]=l*h,t[4]=x*c-g,t[8]=p*c+v,t[1]=l*d,t[5]=v*c+p,t[9]=g*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let p=o*l,g=o*c,x=a*l,v=a*c;t[0]=l*h,t[4]=v-p*d,t[8]=x*d+g,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=g*d+x,t[10]=p-v*d}else if(e.order==="XZY"){let p=o*l,g=o*c,x=a*l,v=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=p*d+v,t[5]=o*h,t[9]=g*d-x,t[2]=x*d-g,t[6]=a*h,t[10]=v*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ex,e,tx)}lookAt(e,t,i){let s=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),Li.crossVectors(i,An),Li.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Li.crossVectors(i,An)),Li.normalize(),Io.crossVectors(An,Li),s[0]=Li.x,s[4]=Io.x,s[8]=An.x,s[1]=Li.y,s[5]=Io.y,s[9]=An.y,s[2]=Li.z,s[6]=Io.z,s[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],p=i[9],g=i[13],x=i[2],v=i[6],m=i[10],f=i[14],w=i[3],y=i[7],R=i[11],I=i[15],P=s[0],C=s[4],G=s[8],b=s[12],T=s[1],V=s[5],Y=s[9],oe=s[13],D=s[2],z=s[6],X=s[10],J=s[14],Z=s[3],$=s[7],te=s[11],re=s[15];return r[0]=o*P+a*T+l*D+c*Z,r[4]=o*C+a*V+l*z+c*$,r[8]=o*G+a*Y+l*X+c*te,r[12]=o*b+a*oe+l*J+c*re,r[1]=h*P+d*T+p*D+g*Z,r[5]=h*C+d*V+p*z+g*$,r[9]=h*G+d*Y+p*X+g*te,r[13]=h*b+d*oe+p*J+g*re,r[2]=x*P+v*T+m*D+f*Z,r[6]=x*C+v*V+m*z+f*$,r[10]=x*G+v*Y+m*X+f*te,r[14]=x*b+v*oe+m*J+f*re,r[3]=w*P+y*T+R*D+I*Z,r[7]=w*C+y*V+R*z+I*$,r[11]=w*G+y*Y+R*X+I*te,r[15]=w*b+y*oe+R*J+I*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],p=e[10],g=e[14],x=e[3],v=e[7],m=e[11],f=e[15];return x*(+r*l*d-s*c*d-r*a*p+i*c*p+s*a*g-i*l*g)+v*(+t*l*g-t*c*p+r*o*p-s*o*g+s*c*h-r*l*h)+m*(+t*c*d-t*a*g-r*o*d+i*o*g+r*a*h-i*c*h)+f*(-s*a*h-t*l*d+t*a*p+s*o*d-i*o*p+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],p=e[10],g=e[11],x=e[12],v=e[13],m=e[14],f=e[15],w=d*m*c-v*p*c+v*l*g-a*m*g-d*l*f+a*p*f,y=x*p*c-h*m*c-x*l*g+o*m*g+h*l*f-o*p*f,R=h*v*c-x*d*c+x*a*g-o*v*g-h*a*f+o*d*f,I=x*d*l-h*v*l-x*a*p+o*v*p+h*a*m-o*d*m,P=t*w+i*y+s*R+r*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/P;return e[0]=w*C,e[1]=(v*p*r-d*m*r-v*s*g+i*m*g+d*s*f-i*p*f)*C,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*f+i*l*f)*C,e[3]=(d*l*r-a*p*r-d*s*c+i*p*c+a*s*g-i*l*g)*C,e[4]=y*C,e[5]=(h*m*r-x*p*r+x*s*g-t*m*g-h*s*f+t*p*f)*C,e[6]=(x*l*r-o*m*r-x*s*c+t*m*c+o*s*f-t*l*f)*C,e[7]=(o*p*r-h*l*r+h*s*c-t*p*c-o*s*g+t*l*g)*C,e[8]=R*C,e[9]=(x*d*r-h*v*r-x*i*g+t*v*g+h*i*f-t*d*f)*C,e[10]=(o*v*r-x*a*r+x*i*c-t*v*c-o*i*f+t*a*f)*C,e[11]=(h*a*r-o*d*r-h*i*c+t*d*c+o*i*g-t*a*g)*C,e[12]=I*C,e[13]=(h*v*s-x*d*s+x*i*p-t*v*p-h*i*m+t*d*m)*C,e[14]=(x*a*s-o*v*s-x*i*l+t*v*l+o*i*m-t*a*m)*C,e[15]=(o*d*s-h*a*s+h*i*l-t*d*l-o*i*p+t*a*p)*C,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,p=r*c,g=r*h,x=r*d,v=o*h,m=o*d,f=a*d,w=l*c,y=l*h,R=l*d,I=i.x,P=i.y,C=i.z;return s[0]=(1-(v+f))*I,s[1]=(g+R)*I,s[2]=(x-y)*I,s[3]=0,s[4]=(g-R)*P,s[5]=(1-(p+f))*P,s[6]=(m+w)*P,s[7]=0,s[8]=(x+y)*C,s[9]=(m-w)*C,s[10]=(1-(p+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=qs.set(s[0],s[1],s[2]).length(),o=qs.set(s[4],s[5],s[6]).length(),a=qs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Vn.copy(this);let c=1/r,h=1/o,d=1/a;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=d,Vn.elements[9]*=d,Vn.elements[10]*=d,t.setFromRotationMatrix(Vn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=gi){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),p=(i+s)/(i-s),g,x;if(a===gi)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ta)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=gi){let l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(o-r),p=(t+e)*c,g=(i+s)*h,x,v;if(a===gi)x=(o+r)*d,v=-2*d;else if(a===ta)x=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},qs=new U,Vn=new Gt,ex=new U(0,0,0),tx=new U(1,1,1),Li=new U,Io=new U,An=new U,fd=new Gt,pd=new ri,ur=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],p=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(bn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(bn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-bn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(bn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-bn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return fd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pd.setFromEuler(this),this.setFromQuaternion(pd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ur.DEFAULT_ORDER="XYZ";Jr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},nx=0,md=new U,Ys=new ri,ui=new Gt,ko=new U,Vr=new U,ix=new U,sx=new ri,gd=new U(1,0,0),xd=new U(0,1,0),yd=new U(0,0,1),rx={type:"added"},ox={type:"removed"},xn=class n extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=no(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new U,t=new ur,i=new ri,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Gt},normalMatrix:{value:new tt}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(gd,e)}rotateY(e){return this.rotateOnAxis(xd,e)}rotateZ(e){return this.rotateOnAxis(yd,e)}translateOnAxis(e,t){return md.copy(e).applyQuaternion(this.quaternion),this.position.add(md.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gd,e)}translateY(e){return this.translateOnAxis(xd,e)}translateZ(e){return this.translateOnAxis(yd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ko.copy(e):ko.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Vr,ko,this.up):ui.lookAt(ko,Vr,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),Ys.setFromRotationMatrix(ui),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(rx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ox)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,e,ix),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,sx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),p=o(e.skeletons),g=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};xn.DEFAULT_UP=new U(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Wn=new U,di=new U,Bl=new U,fi=new U,Xs=new U,$s=new U,vd=new U,Hl=new U,Gl=new U,Vl=new U,Do=!1,nr=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Wn.subVectors(e,t),s.cross(Wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Wn.subVectors(s,t),di.subVectors(i,t),Bl.subVectors(e,t);let o=Wn.dot(Wn),a=Wn.dot(di),l=Wn.dot(Bl),c=di.dot(di),h=di.dot(Bl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let p=1/d,g=(c*l-a*h)*p,x=(o*h-a*l)*p;return r.set(1-g-x,x,g)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getUV(e,t,i,s,r,o,a,l){return Do===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Do=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static isFrontFacing(e,t,i,s){return Wn.subVectors(i,t),di.subVectors(e,t),Wn.cross(di).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Wn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Do===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Do=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Xs.subVectors(s,i),$s.subVectors(r,i),Hl.subVectors(e,i);let l=Xs.dot(Hl),c=$s.dot(Hl);if(l<=0&&c<=0)return t.copy(i);Gl.subVectors(e,s);let h=Xs.dot(Gl),d=$s.dot(Gl);if(h>=0&&d<=h)return t.copy(s);let p=l*d-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Xs,o);Vl.subVectors(e,r);let g=Xs.dot(Vl),x=$s.dot(Vl);if(x>=0&&g<=x)return t.copy(r);let v=g*c-l*x;if(v<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(i).addScaledVector($s,a);let m=h*x-g*d;if(m<=0&&d-h>=0&&g-x>=0)return vd.subVectors(r,s),a=(d-h)/(d-h+(g-x)),t.copy(s).addScaledVector(vd,a);let f=1/(m+v+p);return o=v*f,a=p*f,t.copy(i).addScaledVector(Xs,o).addScaledVector($s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},No={h:0,s:0,l:0};$e=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,mt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=mt.workingColorSpace){if(e=$g(e,1),t=bn(t,0,1),i=bn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Wl(o,r,e+1/3),this.g=Wl(o,r,e),this.b=Wl(o,r,e-1/3)}return mt.toWorkingColorSpace(this,s),this}setStyle(e,t=Bt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){let i=hf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=Il(e.r),this.g=Il(e.g),this.b=Il(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return mt.fromWorkingColorSpace(ln.copy(this),e),Math.round(bn(ln.r*255,0,255))*65536+Math.round(bn(ln.g*255,0,255))*256+Math.round(bn(ln.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(ln.copy(this),t);let i=ln.r,s=ln.g,r=ln.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Bt){mt.fromWorkingColorSpace(ln.copy(this),e);let t=ln.r,i=ln.g,s=ln.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(No);let i=Pl(Ii.h,No.h,t),s=Pl(Ii.s,No.s,t),r=Pl(Ii.l,No.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new $e;$e.NAMES=hf;ax=0,gs=class extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=no(),this.name="",this.type="Material",this.blending=rr,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ec,this.blendDst=tc,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rr&&(i.blending=this.blending),this.side!==Oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ec&&(i.blendSrc=this.blendSrc),this.blendDst!==tc&&(i.blendDst=this.blendDst),this.blendEquation!==hs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},yn=class extends gs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ht=new U,Uo=new je,cn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=od,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Uo.fromBufferAttribute(this,t),Uo.applyMatrix3(e),this.setXY(t,Uo.x,Uo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Br(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_n(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Br(t,this.array)),t}setX(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Br(t,this.array)),t}setY(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Br(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Br(t,this.array)),t}setW(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),i=_n(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),i=_n(i,this.array),s=_n(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),i=_n(i,this.array),s=_n(s,this.array),r=_n(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==od&&(e.usage=this.usage),e}},aa=class extends cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}},la=class extends cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Rt=class extends cn{constructor(e,t,i){super(new Float32Array(e),t,i)}},lx=0,Dn=new Gt,ql=new xn,Zs=new U,Rn=new ms,Wr=new ms,Qt=new U,vn=class n extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=no(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cf(e)?la:aa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new tt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,i){return Dn.makeTranslation(e,t,i),this.applyMatrix4(Dn),this}scale(e,t,i){return Dn.makeScale(e,t,i),this.applyMatrix4(Dn),this}lookAt(e){return ql.lookAt(e),ql.updateMatrix(),this.applyMatrix4(ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ms);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Wr.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(Rn.min,Wr.min),Rn.expandByPoint(Qt),Qt.addVectors(Rn.max,Wr.max),Rn.expandByPoint(Qt)):(Rn.expandByPoint(Wr.min),Rn.expandByPoint(Wr.max))}Rn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Qt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Qt.fromBufferAttribute(a,c),l&&(Zs.fromBufferAttribute(e,c),Qt.add(Zs)),s=Math.max(s,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<a;T++)c[T]=new U,h[T]=new U;let d=new U,p=new U,g=new U,x=new je,v=new je,m=new je,f=new U,w=new U;function y(T,V,Y){d.fromArray(s,T*3),p.fromArray(s,V*3),g.fromArray(s,Y*3),x.fromArray(o,T*2),v.fromArray(o,V*2),m.fromArray(o,Y*2),p.sub(d),g.sub(d),v.sub(x),m.sub(x);let oe=1/(v.x*m.y-m.x*v.y);isFinite(oe)&&(f.copy(p).multiplyScalar(m.y).addScaledVector(g,-v.y).multiplyScalar(oe),w.copy(g).multiplyScalar(v.x).addScaledVector(p,-m.x).multiplyScalar(oe),c[T].add(f),c[V].add(f),c[Y].add(f),h[T].add(w),h[V].add(w),h[Y].add(w))}let R=this.groups;R.length===0&&(R=[{start:0,count:i.length}]);for(let T=0,V=R.length;T<V;++T){let Y=R[T],oe=Y.start,D=Y.count;for(let z=oe,X=oe+D;z<X;z+=3)y(i[z+0],i[z+1],i[z+2])}let I=new U,P=new U,C=new U,G=new U;function b(T){C.fromArray(r,T*3),G.copy(C);let V=c[T];I.copy(V),I.sub(C.multiplyScalar(C.dot(V))).normalize(),P.crossVectors(G,V);let oe=P.dot(h[T])<0?-1:1;l[T*4]=I.x,l[T*4+1]=I.y,l[T*4+2]=I.z,l[T*4+3]=oe}for(let T=0,V=R.length;T<V;++T){let Y=R[T],oe=Y.start,D=Y.count;for(let z=oe,X=oe+D;z<X;z+=3)b(i[z+0]),b(i[z+1]),b(i[z+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,d=new U;if(e)for(let p=0,g=e.count;p<g;p+=3){let x=e.getX(p+0),v=e.getX(p+1),m=e.getX(p+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,g=t.count;p<g;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,p=new c.constructor(l.length*h),g=0,x=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?g=l[v]*a.data.stride+a.offset:g=l[v]*h;for(let f=0;f<h;f++)p[x++]=c[g++]}return new cn(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let p=c[h],g=e(p,i);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,p=c.length;d<p;d++){let g=c[d];h.push(g.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let p=0,g=d.length;p<g;p++)h.push(d[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},_d=new Gt,as=new oa,zo=new Zr,bd=new U,Js=new U,Ks=new U,js=new U,Yl=new U,Oo=new U,Fo=new je,Bo=new je,Ho=new je,Md=new U,wd=new U,Sd=new U,Go=new U,Vo=new U,Mt=class extends xn{constructor(e=new vn,t=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Oo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Yl.fromBufferAttribute(d,e),o?Oo.addScaledVector(Yl,h):Oo.addScaledVector(Yl.sub(t),h))}t.add(Oo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(r),as.copy(e.ray).recast(e.near),!(zo.containsPoint(as.origin)===!1&&(as.intersectSphere(zo,bd)===null||as.origin.distanceToSquared(bd)>(e.far-e.near)**2))&&(_d.copy(r).invert(),as.copy(e.ray).applyMatrix4(_d),!(i.boundingBox!==null&&as.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=p.length;x<v;x++){let m=p[x],f=o[m.materialIndex],w=Math.max(m.start,g.start),y=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let R=w,I=y;R<I;R+=3){let P=a.getX(R),C=a.getX(R+1),G=a.getX(R+2);s=Wo(this,f,e,i,c,h,d,P,C,G),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,g.start),v=Math.min(a.count,g.start+g.count);for(let m=x,f=v;m<f;m+=3){let w=a.getX(m),y=a.getX(m+1),R=a.getX(m+2);s=Wo(this,o,e,i,c,h,d,w,y,R),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=p.length;x<v;x++){let m=p[x],f=o[m.materialIndex],w=Math.max(m.start,g.start),y=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let R=w,I=y;R<I;R+=3){let P=R,C=R+1,G=R+2;s=Wo(this,f,e,i,c,h,d,P,C,G),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,g.start),v=Math.min(l.count,g.start+g.count);for(let m=x,f=v;m<f;m+=3){let w=m,y=m+1,R=m+2;s=Wo(this,o,e,i,c,h,d,w,y,R),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};On=class n extends vn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],p=0,g=0;x("z","y","x",-1,-1,i,t,e,o,r,0),x("z","y","x",1,-1,i,t,-e,o,r,1),x("x","z","y",1,1,e,i,t,s,o,2),x("x","z","y",1,-1,e,i,-t,s,o,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(d,2));function x(v,m,f,w,y,R,I,P,C,G,b){let T=R/C,V=I/G,Y=R/2,oe=I/2,D=P/2,z=C+1,X=G+1,J=0,Z=0,$=new U;for(let te=0;te<X;te++){let re=te*V-oe;for(let xe=0;xe<z;xe++){let q=xe*T-Y;$[v]=q*w,$[m]=re*y,$[f]=D,c.push($.x,$.y,$.z),$[v]=0,$[m]=0,$[f]=P>0?1:-1,h.push($.x,$.y,$.z),d.push(xe/C),d.push(1-te/G),J+=1}}for(let te=0;te<G;te++)for(let re=0;re<C;re++){let xe=p+re+z*te,q=p+re+z*(te+1),j=p+(re+1)+z*(te+1),me=p+(re+1)+z*te;l.push(xe,q,me),l.push(q,j,me),Z+=6}a.addGroup(g,Z,b),g+=Z,p+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};ux={clone:dr,merge:pn},dx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vi=class extends gs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dx,this.fragmentShader=fx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dr(e.uniforms),this.uniformsGroups=hx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ca=class extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gn=class extends ca{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ac*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Cl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ac*2*Math.atan(Math.tan(Cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Cl*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Qs=-90,er=1,uc=class extends xn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gn(Qs,er,e,t);s.layers=this.layers,this.add(s);let r=new gn(Qs,er,e,t);r.layers=this.layers,this.add(r);let o=new gn(Qs,er,e,t);o.layers=this.layers,this.add(o);let a=new gn(Qs,er,e,t);a.layers=this.layers,this.add(a);let l=new gn(Qs,er,e,t);l.layers=this.layers,this.add(l);let c=new gn(Qs,er,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,p,g),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},ha=class extends zn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:lr,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},dc=class extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(qr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ps?Bt:Un),this.texture=new ha(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new On(5,5,5),r=new vi({name:"CubemapFromEquirect",uniforms:dr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:Ni});r.uniforms.tEquirect.value=t;let o=new Mt(s,r),a=t.minFilter;return t.minFilter===Xr&&(t.minFilter=Nn),new uc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Xl=new U,px=new U,mx=new tt,mi=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Xl.subVectors(i,t).cross(px.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Xl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||mx.getNormalMatrix(e),s=this.coplanarPoint(Xl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ls=new Zr,qo=new U,Kr=class{constructor(e=new mi,t=new mi,i=new mi,s=new mi,r=new mi,o=new mi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],p=s[7],g=s[8],x=s[9],v=s[10],m=s[11],f=s[12],w=s[13],y=s[14],R=s[15];if(i[0].setComponents(l-r,p-c,m-g,R-f).normalize(),i[1].setComponents(l+r,p+c,m+g,R+f).normalize(),i[2].setComponents(l+o,p+h,m+x,R+w).normalize(),i[3].setComponents(l-o,p-h,m-x,R-w).normalize(),i[4].setComponents(l-a,p-d,m-v,R-y).normalize(),t===gi)i[5].setComponents(l+a,p+d,m+v,R+y).normalize();else if(t===ta)i[5].setComponents(a,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){return ls.center.set(0,0,0),ls.radius=.7071067811865476,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(qo.x=s.normal.x>0?e.max.x:e.min.x,qo.y=s.normal.y>0?e.max.y:e.min.y,qo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Bi=class n extends vn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,p=t/l,g=[],x=[],v=[],m=[];for(let f=0;f<h;f++){let w=f*p-o;for(let y=0;y<c;y++){let R=y*d-r;x.push(R,-w,0),v.push(0,0,1),m.push(y/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<a;w++){let y=w+c*f,R=w+c*(f+1),I=w+1+c*(f+1),P=w+1+c*f;g.push(y,R,P),g.push(R,I,P)}this.setIndex(g),this.setAttribute("position",new Rt(x,3)),this.setAttribute("normal",new Rt(v,3)),this.setAttribute("uv",new Rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},xx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yx=`#ifdef USE_ALPHAHASH
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
#endif`,vx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_x=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Mx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wx=`#ifdef USE_AOMAP
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
#endif`,Sx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ex=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Tx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ax=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Px=`#ifdef USE_IRIDESCENCE
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
#endif`,Lx=`#ifdef USE_BUMPMAP
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
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ux=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ox=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Fx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Bx=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Hx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gx=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xx="gl_FragColor = linearToOutputTexel( gl_FragColor );",$x=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Zx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Jx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kx=`#ifdef USE_ENVMAP
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
#endif`,jx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ey=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ty=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ny=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sy=`#ifdef USE_GRADIENTMAP
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
}`,ry=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,oy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ay=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ly=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cy=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,hy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,uy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,py=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,my=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,gy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xy=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_y=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,by=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,My=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Sy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ey=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ty=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ay=`#if defined( USE_POINTS_UV )
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
#endif`,Ry=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Py=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ly=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Iy=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ky=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Dy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ny=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fy=`#ifdef USE_NORMALMAP
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
#endif`,By=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Yy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$y=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ky=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Qy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ev=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,tv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iv=`#ifdef USE_SKINNING
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
#endif`,sv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rv=`#ifdef USE_SKINNING
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
#endif`,ov=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,av=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cv=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hv=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uv=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xv=`uniform sampler2D t2D;
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
}`,yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mv=`#include <common>
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
}`,wv=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Sv=`#define DISTANCE
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
}`,Ev=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Av=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rv=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cv=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pv=`#include <common>
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
}`,Lv=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Iv=`#define LAMBERT
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
}`,kv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Dv=`#define MATCAP
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
}`,Nv=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Uv=`#define NORMAL
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
}`,zv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ov=`#define PHONG
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
}`,Fv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Bv=`#define STANDARD
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
}`,Hv=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Gv=`#define TOON
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
}`,Vv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Wv=`uniform float size;
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
}`,qv=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Yv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Xv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,$v=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Zv=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Xe={alphahash_fragment:xx,alphahash_pars_fragment:yx,alphamap_fragment:vx,alphamap_pars_fragment:_x,alphatest_fragment:bx,alphatest_pars_fragment:Mx,aomap_fragment:wx,aomap_pars_fragment:Sx,batching_pars_vertex:Ex,batching_vertex:Tx,begin_vertex:Ax,beginnormal_vertex:Rx,bsdfs:Cx,iridescence_fragment:Px,bumpmap_pars_fragment:Lx,clipping_planes_fragment:Ix,clipping_planes_pars_fragment:kx,clipping_planes_pars_vertex:Dx,clipping_planes_vertex:Nx,color_fragment:Ux,color_pars_fragment:zx,color_pars_vertex:Ox,color_vertex:Fx,common:Bx,cube_uv_reflection_fragment:Hx,defaultnormal_vertex:Gx,displacementmap_pars_vertex:Vx,displacementmap_vertex:Wx,emissivemap_fragment:qx,emissivemap_pars_fragment:Yx,colorspace_fragment:Xx,colorspace_pars_fragment:$x,envmap_fragment:Zx,envmap_common_pars_fragment:Jx,envmap_pars_fragment:Kx,envmap_pars_vertex:jx,envmap_physical_pars_fragment:hy,envmap_vertex:Qx,fog_vertex:ey,fog_pars_vertex:ty,fog_fragment:ny,fog_pars_fragment:iy,gradientmap_pars_fragment:sy,lightmap_fragment:ry,lightmap_pars_fragment:oy,lights_lambert_fragment:ay,lights_lambert_pars_fragment:ly,lights_pars_begin:cy,lights_toon_fragment:uy,lights_toon_pars_fragment:dy,lights_phong_fragment:fy,lights_phong_pars_fragment:py,lights_physical_fragment:my,lights_physical_pars_fragment:gy,lights_fragment_begin:xy,lights_fragment_maps:yy,lights_fragment_end:vy,logdepthbuf_fragment:_y,logdepthbuf_pars_fragment:by,logdepthbuf_pars_vertex:My,logdepthbuf_vertex:wy,map_fragment:Sy,map_pars_fragment:Ey,map_particle_fragment:Ty,map_particle_pars_fragment:Ay,metalnessmap_fragment:Ry,metalnessmap_pars_fragment:Cy,morphcolor_vertex:Py,morphnormal_vertex:Ly,morphtarget_pars_vertex:Iy,morphtarget_vertex:ky,normal_fragment_begin:Dy,normal_fragment_maps:Ny,normal_pars_fragment:Uy,normal_pars_vertex:zy,normal_vertex:Oy,normalmap_pars_fragment:Fy,clearcoat_normal_fragment_begin:By,clearcoat_normal_fragment_maps:Hy,clearcoat_pars_fragment:Gy,iridescence_pars_fragment:Vy,opaque_fragment:Wy,packing:qy,premultiplied_alpha_fragment:Yy,project_vertex:Xy,dithering_fragment:$y,dithering_pars_fragment:Zy,roughnessmap_fragment:Jy,roughnessmap_pars_fragment:Ky,shadowmap_pars_fragment:jy,shadowmap_pars_vertex:Qy,shadowmap_vertex:ev,shadowmask_pars_fragment:tv,skinbase_vertex:nv,skinning_pars_vertex:iv,skinning_vertex:sv,skinnormal_vertex:rv,specularmap_fragment:ov,specularmap_pars_fragment:av,tonemapping_fragment:lv,tonemapping_pars_fragment:cv,transmission_fragment:hv,transmission_pars_fragment:uv,uv_pars_fragment:dv,uv_pars_vertex:fv,uv_vertex:pv,worldpos_vertex:mv,background_vert:gv,background_frag:xv,backgroundCube_vert:yv,backgroundCube_frag:vv,cube_vert:_v,cube_frag:bv,depth_vert:Mv,depth_frag:wv,distanceRGBA_vert:Sv,distanceRGBA_frag:Ev,equirect_vert:Tv,equirect_frag:Av,linedashed_vert:Rv,linedashed_frag:Cv,meshbasic_vert:Pv,meshbasic_frag:Lv,meshlambert_vert:Iv,meshlambert_frag:kv,meshmatcap_vert:Dv,meshmatcap_frag:Nv,meshnormal_vert:Uv,meshnormal_frag:zv,meshphong_vert:Ov,meshphong_frag:Fv,meshphysical_vert:Bv,meshphysical_frag:Hv,meshtoon_vert:Gv,meshtoon_frag:Vv,points_vert:Wv,points_frag:qv,shadow_vert:Yv,shadow_frag:Xv,sprite_vert:$v,sprite_frag:Zv},he={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},si={basic:{uniforms:pn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:pn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new $e(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:pn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:pn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:pn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new $e(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:pn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:pn([he.points,he.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:pn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:pn([he.common,he.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:pn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:pn([he.sprite,he.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:pn([he.common,he.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:pn([he.lights,he.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};si.physical={uniforms:pn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};Yo={r:0,b:0,g:0};ua=class extends ca{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ir=4,Ed=[.125,.215,.35,.446,.526,.582],us=20,$l=new ua,Td=new $e,Zl=null,Jl=0,Kl=0,cs=(1+Math.sqrt(5))/2,tr=1/cs,Ad=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,cs,tr),new U(0,cs,-tr),new U(tr,0,cs),new U(-tr,0,cs),new U(cs,tr,0),new U(-cs,tr,0)],da=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Zl=this._renderer.getRenderTarget(),Jl=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zl,Jl,Kl),e.scissorTest=!1,Xo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lr||e.mapping===cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zl=this._renderer.getRenderTarget(),Jl=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:$r,format:Xn,colorSpace:xi,depthBuffer:!1},s=Rd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rd(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n_(r)),this._blurMaterial=i_(r,e,t)}return s}_compileMaterial(e){let t=new Mt(this._lodPlanes[0],e);this._renderer.compile(t,$l)}_sceneToCubeUV(e,t,i,s){let a=new gn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Td),h.toneMapping=Ui,h.autoClear=!1;let g=new yn({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),x=new Mt(new On,g),v=!1,m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,v=!0):(g.color.copy(Td),v=!0);for(let f=0;f<6;f++){let w=f%3;w===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):w===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let y=this._cubeSize;Xo(s,w*y,f>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===lr||e.mapping===cr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Mt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Xo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,$l)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ad[(s-1)%Ad.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Mt(this._lodPlanes[s],c),p=c.uniforms,g=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*us-1),v=r/x,m=isFinite(r)?1+Math.floor(h*v):us;m>us&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${us}`);let f=[],w=0;for(let C=0;C<us;++C){let G=C/v,b=Math.exp(-G*G/2);f.push(b),C===0?w+=b:C<m&&(w+=2*b)}for(let C=0;C<f.length;C++)f[C]=f[C]/w;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:y}=this;p.dTheta.value=x,p.mipInt.value=y-i;let R=this._sizeLods[s],I=3*R*(s>y-ir?s-y+ir:0),P=4*(this._cubeSize-R);Xo(t,I,P,3*R,2*R),l.setRenderTarget(t),l.render(d,$l)}};fa=class extends zn{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:fs,h!==fs&&h!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===fs&&(i=ki),i===void 0&&h===hr&&(i=ds),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:mn,this.minFilter=l!==void 0?l:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ff=new zn,pf=new fa(1,1);pf.compareFunction=lf;mf=new ra,gf=new hc,xf=new ha,Ld=[],Id=[],kd=new Float32Array(16),Dd=new Float32Array(9),Nd=new Float32Array(4);fc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=I_(t.type)}},pc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=j_(t.type)}},mc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},jl=/(\w+)(\])?(\[|\.)?/g;ar=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Q_(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};eb=37297,tb=0;hb=/^[ \t]*#include +<([\w\d./]+)>/gm;ub=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);fb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;bb=0,xc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new yc(e),t.set(e,i)),i}},yc=class{constructor(e){this.id=bb++,this.code=e,this.usedTimes=0}};Rb=0;vc=class extends gs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Og,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},_c=class extends gs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Ib=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;bc=class extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},At=class extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ob={type:"move"},Yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=h.position.distanceTo(d.position),g=.02,x=.005;c.inputState.pinching&&p>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ob)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new At;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Mc=class extends Fi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,p=null,g=null,x=null,v=t.getContextAttributes(),m=null,f=null,w=[],y=[],R=new je,I=null,P=new gn;P.layers.enable(1),P.viewport=new en;let C=new gn;C.layers.enable(2),C.viewport=new en;let G=[P,C],b=new bc;b.layers.enable(1),b.layers.enable(2);let T=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=w[q];return j===void 0&&(j=new Yr,w[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=w[q];return j===void 0&&(j=new Yr,w[q]=j),j.getGripSpace()},this.getHand=function(q){let j=w[q];return j===void 0&&(j=new Yr,w[q]=j),j.getHandSpace()};function Y(q){let j=y.indexOf(q.inputSource);if(j===-1)return;let me=w[j];me!==void 0&&(me.update(q.inputSource,q.frame,c||o),me.dispatchEvent({type:q.type,data:q.inputSource}))}function oe(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",oe),s.removeEventListener("inputsourceschange",D);for(let q=0;q<w.length;q++){let j=y[q];j!==null&&(y[q]=null,w[q].disconnect(j))}T=null,V=null,e.setRenderTarget(m),g=null,p=null,d=null,s=null,f=null,xe.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",oe),s.addEventListener("inputsourceschange",D),v.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(R),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let j={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),f=new yi(g.framebufferWidth,g.framebufferHeight,{format:Xn,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let j=null,me=null,Te=null;v.depth&&(Te=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=v.stencil?hr:fs,me=v.stencil?ds:ki);let Ee={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};d=new XRWebGLBinding(s,t),p=d.createProjectionLayer(Ee),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),f=new yi(p.textureWidth,p.textureHeight,{format:Xn,type:zi,depthTexture:new fa(p.textureWidth,p.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let Ge=e.properties.get(f);Ge.__ignoreDepthValues=p.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),xe.setContext(s),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D(q){for(let j=0;j<q.removed.length;j++){let me=q.removed[j],Te=y.indexOf(me);Te>=0&&(y[Te]=null,w[Te].disconnect(me))}for(let j=0;j<q.added.length;j++){let me=q.added[j],Te=y.indexOf(me);if(Te===-1){for(let Ge=0;Ge<w.length;Ge++)if(Ge>=y.length){y.push(me),Te=Ge;break}else if(y[Ge]===null){y[Ge]=me,Te=Ge;break}if(Te===-1)break}let Ee=w[Te];Ee&&Ee.connect(me)}}let z=new U,X=new U;function J(q,j,me){z.setFromMatrixPosition(j.matrixWorld),X.setFromMatrixPosition(me.matrixWorld);let Te=z.distanceTo(X),Ee=j.projectionMatrix.elements,Ge=me.projectionMatrix.elements,qe=Ee[14]/(Ee[10]-1),Ue=Ee[14]/(Ee[10]+1),ot=(Ee[9]+1)/Ee[5],O=(Ee[9]-1)/Ee[5],un=(Ee[8]-1)/Ee[0],Pe=(Ge[8]+1)/Ge[0],Be=qe*un,be=qe*Pe,Ct=Te/(-un+Pe),Ze=Ct*-un;j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ze),q.translateZ(Ct),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let E=qe+Ct,_=Ue+Ct,B=Be-Ze,ne=be+(Te-Ze),ee=ot*Ue/_*E,ie=O*Ue/_*E;q.projectionMatrix.makePerspective(B,ne,ee,ie,E,_),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function Z(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;b.near=C.near=P.near=q.near,b.far=C.far=P.far=q.far,(T!==b.near||V!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),T=b.near,V=b.far);let j=q.parent,me=b.cameras;Z(b,j);for(let Te=0;Te<me.length;Te++)Z(me[Te],j);me.length===2?J(b,P,C):b.projectionMatrix.copy(P.projectionMatrix),$(q,b,j)};function $(q,j,me){me===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(me.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ac*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(q){l=q,p!==null&&(p.fixedFoveation=q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=q)};let te=null;function re(q,j){if(h=j.getViewerPose(c||o),x=j,h!==null){let me=h.views;g!==null&&(e.setRenderTargetFramebuffer(f,g.framebuffer),e.setRenderTarget(f));let Te=!1;me.length!==b.cameras.length&&(b.cameras.length=0,Te=!0);for(let Ee=0;Ee<me.length;Ee++){let Ge=me[Ee],qe=null;if(g!==null)qe=g.getViewport(Ge);else{let ot=d.getViewSubImage(p,Ge);qe=ot.viewport,Ee===0&&(e.setRenderTargetTextures(f,ot.colorTexture,p.ignoreDepthValues?void 0:ot.depthStencilTexture),e.setRenderTarget(f))}let Ue=G[Ee];Ue===void 0&&(Ue=new gn,Ue.layers.enable(Ee),Ue.viewport=new en,G[Ee]=Ue),Ue.matrix.fromArray(Ge.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Ge.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(qe.x,qe.y,qe.width,qe.height),Ee===0&&(b.matrix.copy(Ue.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Te===!0&&b.cameras.push(Ue)}}for(let me=0;me<w.length;me++){let Te=y[me],Ee=w[me];Te!==null&&Ee!==void 0&&Ee.update(Te,j,c||o)}te&&te(q,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),x=null}let xe=new df;xe.setAnimationLoop(re),this.setAnimationLoop=function(q){te=q},this.dispose=function(){}}};jr=class{constructor(e={}){let{canvas:t=Zg(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;let g=new Uint32Array(4),x=new Int32Array(4),v=null,m=null,f=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bt,this._useLegacyLights=!1,this.toneMapping=Ui,this.toneMappingExposure=1;let y=this,R=!1,I=0,P=0,C=null,G=-1,b=null,T=new en,V=new en,Y=null,oe=new $e(0),D=0,z=t.width,X=t.height,J=1,Z=null,$=null,te=new en(0,0,z,X),re=new en(0,0,z,X),xe=!1,q=new Kr,j=!1,me=!1,Te=null,Ee=new Gt,Ge=new je,qe=new U,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ot(){return C===null?J:1}let O=i;function un(S,N){for(let H=0;H<S.length;H++){let W=S[H],F=t.getContext(W,N);if(F!==null)return F}return null}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zc}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",ue,!1),O===null){let N=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&N.shift(),O=un(N,S),O===null)throw un(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Pe,Be,be,Ct,Ze,E,_,B,ne,ee,ie,Me,fe,ye,Ne,Je,Q,pt,it,Fe,Ce,ve,Ye,ut;function Dt(){Pe=new r_(O),Be=new Qv(O,Pe,e),Pe.init(Be),ve=new zb(O,Pe,Be),be=new Nb(O,Pe,Be),Ct=new l_(O),Ze=new wb,E=new Ub(O,Pe,be,Ze,Be,ve,Ct),_=new t_(y),B=new s_(y),ne=new gx(O,Be),Ye=new Kv(O,Pe,ne,Be),ee=new o_(O,ne,Ct,Ye),ie=new d_(O,ee,ne,Ct),it=new u_(O,Be,E),Je=new e_(Ze),Me=new Mb(y,_,B,Pe,Be,Ye,Je),fe=new Fb(y,Ze),ye=new Eb,Ne=new Lb(Pe,Be),pt=new Jv(y,_,B,be,ie,p,l),Q=new Db(y,ie,Be),ut=new Bb(O,Ct,Be,be),Fe=new jv(O,Pe,Ct,Be),Ce=new a_(O,Pe,Ct,Be),Ct.programs=Me.programs,y.capabilities=Be,y.extensions=Pe,y.properties=Ze,y.renderLists=ye,y.shadowMap=Q,y.state=be,y.info=Ct}Dt();let Qe=new Mc(y,O);this.xr=Qe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let S=Pe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Pe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(S){S!==void 0&&(J=S,this.setSize(z,X,!1))},this.getSize=function(S){return S.set(z,X)},this.setSize=function(S,N,H=!0){if(Qe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=S,X=N,t.width=Math.floor(S*J),t.height=Math.floor(N*J),H===!0&&(t.style.width=S+"px",t.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(z*J,X*J).floor()},this.setDrawingBufferSize=function(S,N,H){z=S,X=N,J=H,t.width=Math.floor(S*H),t.height=Math.floor(N*H),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(te)},this.setViewport=function(S,N,H,W){S.isVector4?te.set(S.x,S.y,S.z,S.w):te.set(S,N,H,W),be.viewport(T.copy(te).multiplyScalar(J).floor())},this.getScissor=function(S){return S.copy(re)},this.setScissor=function(S,N,H,W){S.isVector4?re.set(S.x,S.y,S.z,S.w):re.set(S,N,H,W),be.scissor(V.copy(re).multiplyScalar(J).floor())},this.getScissorTest=function(){return xe},this.setScissorTest=function(S){be.setScissorTest(xe=S)},this.setOpaqueSort=function(S){Z=S},this.setTransparentSort=function(S){$=S},this.getClearColor=function(S){return S.copy(pt.getClearColor())},this.setClearColor=function(){pt.setClearColor.apply(pt,arguments)},this.getClearAlpha=function(){return pt.getClearAlpha()},this.setClearAlpha=function(){pt.setClearAlpha.apply(pt,arguments)},this.clear=function(S=!0,N=!0,H=!0){let W=0;if(S){let F=!1;if(C!==null){let ge=C.texture.format;F=ge===sf||ge===nf||ge===tf}if(F){let ge=C.texture.type,we=ge===zi||ge===ki||ge===Fc||ge===ds||ge===Qd||ge===ef,De=pt.getClearColor(),Oe=pt.getClearAlpha(),Ke=De.r,He=De.g,Ve=De.b;we?(g[0]=Ke,g[1]=He,g[2]=Ve,g[3]=Oe,O.clearBufferuiv(O.COLOR,0,g)):(x[0]=Ke,x[1]=He,x[2]=Ve,x[3]=Oe,O.clearBufferiv(O.COLOR,0,x))}else W|=O.COLOR_BUFFER_BIT}N&&(W|=O.DEPTH_BUFFER_BIT),H&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),ye.dispose(),Ne.dispose(),Ze.dispose(),_.dispose(),B.dispose(),ie.dispose(),Ye.dispose(),ut.dispose(),Me.dispose(),Qe.dispose(),Qe.removeEventListener("sessionstart",dn),Qe.removeEventListener("sessionend",bt),Te&&(Te.dispose(),Te=null),fn.stop()};function ce(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let S=Ct.autoReset,N=Q.enabled,H=Q.autoUpdate,W=Q.needsUpdate,F=Q.type;Dt(),Ct.autoReset=S,Q.enabled=N,Q.autoUpdate=H,Q.needsUpdate=W,Q.type=F}function ue(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function de(S){let N=S.target;N.removeEventListener("dispose",de),ze(N)}function ze(S){Le(S),Ze.remove(S)}function Le(S){let N=Ze.get(S).programs;N!==void 0&&(N.forEach(function(H){Me.releaseProgram(H)}),S.isShaderMaterial&&Me.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,H,W,F,ge){N===null&&(N=Ue);let we=F.isMesh&&F.matrixWorld.determinant()<0,De=W0(S,N,H,W,F);be.setMaterial(W,we);let Oe=H.index,Ke=1;if(W.wireframe===!0){if(Oe=ee.getWireframeAttribute(H),Oe===void 0)return;Ke=2}let He=H.drawRange,Ve=H.attributes.position,Ft=He.start*Ke,Tn=(He.start+He.count)*Ke;ge!==null&&(Ft=Math.max(Ft,ge.start*Ke),Tn=Math.min(Tn,(ge.start+ge.count)*Ke)),Oe!==null?(Ft=Math.max(Ft,0),Tn=Math.min(Tn,Oe.count)):Ve!=null&&(Ft=Math.max(Ft,0),Tn=Math.min(Tn,Ve.count));let jt=Tn-Ft;if(jt<0||jt===1/0)return;Ye.setup(F,W,De,H,Oe);let li,Pt=Fe;if(Oe!==null&&(li=ne.get(Oe),Pt=Ce,Pt.setIndex(li)),F.isMesh)W.wireframe===!0?(be.setLineWidth(W.wireframeLinewidth*ot()),Pt.setMode(O.LINES)):Pt.setMode(O.TRIANGLES);else if(F.isLine){let et=W.linewidth;et===void 0&&(et=1),be.setLineWidth(et*ot()),F.isLineSegments?Pt.setMode(O.LINES):F.isLineLoop?Pt.setMode(O.LINE_LOOP):Pt.setMode(O.LINE_STRIP)}else F.isPoints?Pt.setMode(O.POINTS):F.isSprite&&Pt.setMode(O.TRIANGLES);if(F.isBatchedMesh)Pt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)Pt.renderInstances(Ft,jt,F.count);else if(H.isInstancedBufferGeometry){let et=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,yl=Math.min(H.instanceCount,et);Pt.renderInstances(Ft,jt,yl)}else Pt.render(Ft,jt)};function vt(S,N,H){S.transparent===!0&&S.side===qn&&S.forceSinglePass===!1?(S.side=Mn,S.needsUpdate=!0,So(S,N,H),S.side=Oi,S.needsUpdate=!0,So(S,N,H),S.side=qn):So(S,N,H)}this.compile=function(S,N,H=null){H===null&&(H=S),m=Ne.get(H),m.init(),w.push(m),H.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),S!==H&&S.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights(y._useLegacyLights);let W=new Set;return S.traverse(function(F){let ge=F.material;if(ge)if(Array.isArray(ge))for(let we=0;we<ge.length;we++){let De=ge[we];vt(De,H,F),W.add(De)}else vt(ge,H,F),W.add(ge)}),w.pop(),m=null,W},this.compileAsync=function(S,N,H=null){let W=this.compile(S,N,H);return new Promise(F=>{function ge(){if(W.forEach(function(we){Ze.get(we).currentProgram.isReady()&&W.delete(we)}),W.size===0){F(S);return}setTimeout(ge,10)}Pe.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let _t=null;function Kt(S){_t&&_t(S)}function dn(){fn.stop()}function bt(){fn.start()}let fn=new df;fn.setAnimationLoop(Kt),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(S){_t=S,Qe.setAnimationLoop(S),S===null?fn.stop():fn.start()},Qe.addEventListener("sessionstart",dn),Qe.addEventListener("sessionend",bt),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Qe.enabled===!0&&Qe.isPresenting===!0&&(Qe.cameraAutoUpdate===!0&&Qe.updateCamera(N),N=Qe.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,N,C),m=Ne.get(S,w.length),m.init(),w.push(m),Ee.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(Ee),me=this.localClippingEnabled,j=Je.init(this.clippingPlanes,me),v=ye.get(S,f.length),v.init(),f.push(v),ii(S,N,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(Z,$),this.info.render.frame++,j===!0&&Je.beginShadows();let H=m.state.shadowsArray;if(Q.render(H,S,N),j===!0&&Je.endShadows(),this.info.autoReset===!0&&this.info.reset(),pt.render(v,S),m.setupLights(y._useLegacyLights),N.isArrayCamera){let W=N.cameras;for(let F=0,ge=W.length;F<ge;F++){let we=W[F];yu(v,S,we,we.viewport)}}else yu(v,S,N);C!==null&&(E.updateMultisampleRenderTarget(C),E.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(y,S,N),Ye.resetDefaultState(),G=-1,b=null,w.pop(),w.length>0?m=w[w.length-1]:m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function ii(S,N,H,W){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||q.intersectsSprite(S)){W&&qe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ee);let we=ie.update(S),De=S.material;De.visible&&v.push(S,we,De,H,qe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||q.intersectsObject(S))){let we=ie.update(S),De=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),qe.copy(S.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),qe.copy(we.boundingSphere.center)),qe.applyMatrix4(S.matrixWorld).applyMatrix4(Ee)),Array.isArray(De)){let Oe=we.groups;for(let Ke=0,He=Oe.length;Ke<He;Ke++){let Ve=Oe[Ke],Ft=De[Ve.materialIndex];Ft&&Ft.visible&&v.push(S,we,Ft,H,qe.z,Ve)}}else De.visible&&v.push(S,we,De,H,qe.z,null)}}let ge=S.children;for(let we=0,De=ge.length;we<De;we++)ii(ge[we],N,H,W)}function yu(S,N,H,W){let F=S.opaque,ge=S.transmissive,we=S.transparent;m.setupLightsView(H),j===!0&&Je.setGlobalState(y.clippingPlanes,H),ge.length>0&&V0(F,ge,N,H),W&&be.viewport(T.copy(W)),F.length>0&&wo(F,N,H),ge.length>0&&wo(ge,N,H),we.length>0&&wo(we,N,H),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function V0(S,N,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;let ge=Be.isWebGL2;Te===null&&(Te=new yi(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")?$r:zi,minFilter:Xr,samples:ge?4:0})),y.getDrawingBufferSize(Ge),ge?Te.setSize(Ge.x,Ge.y):Te.setSize(lc(Ge.x),lc(Ge.y));let we=y.getRenderTarget();y.setRenderTarget(Te),y.getClearColor(oe),D=y.getClearAlpha(),D<1&&y.setClearColor(16777215,.5),y.clear();let De=y.toneMapping;y.toneMapping=Ui,wo(S,H,W),E.updateMultisampleRenderTarget(Te),E.updateRenderTargetMipmap(Te);let Oe=!1;for(let Ke=0,He=N.length;Ke<He;Ke++){let Ve=N[Ke],Ft=Ve.object,Tn=Ve.geometry,jt=Ve.material,li=Ve.group;if(jt.side===qn&&Ft.layers.test(W.layers)){let Pt=jt.side;jt.side=Mn,jt.needsUpdate=!0,vu(Ft,H,W,Tn,jt,li),jt.side=Pt,jt.needsUpdate=!0,Oe=!0}}Oe===!0&&(E.updateMultisampleRenderTarget(Te),E.updateRenderTargetMipmap(Te)),y.setRenderTarget(we),y.setClearColor(oe,D),y.toneMapping=De}function wo(S,N,H){let W=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ge=S.length;F<ge;F++){let we=S[F],De=we.object,Oe=we.geometry,Ke=W===null?we.material:W,He=we.group;De.layers.test(H.layers)&&vu(De,N,H,Oe,Ke,He)}}function vu(S,N,H,W,F,ge){S.onBeforeRender(y,N,H,W,F,ge),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(y,N,H,W,S,ge),F.transparent===!0&&F.side===qn&&F.forceSinglePass===!1?(F.side=Mn,F.needsUpdate=!0,y.renderBufferDirect(H,N,W,F,S,ge),F.side=Oi,F.needsUpdate=!0,y.renderBufferDirect(H,N,W,F,S,ge),F.side=qn):y.renderBufferDirect(H,N,W,F,S,ge),S.onAfterRender(y,N,H,W,F,ge)}function So(S,N,H){N.isScene!==!0&&(N=Ue);let W=Ze.get(S),F=m.state.lights,ge=m.state.shadowsArray,we=F.state.version,De=Me.getParameters(S,F.state,ge,N,H),Oe=Me.getProgramCacheKey(De),Ke=W.programs;W.environment=S.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(S.isMeshStandardMaterial?B:_).get(S.envMap||W.environment),Ke===void 0&&(S.addEventListener("dispose",de),Ke=new Map,W.programs=Ke);let He=Ke.get(Oe);if(He!==void 0){if(W.currentProgram===He&&W.lightsStateVersion===we)return bu(S,De),He}else De.uniforms=Me.getUniforms(S),S.onBuild(H,De,y),S.onBeforeCompile(De,y),He=Me.acquireProgram(De,Oe),Ke.set(Oe,He),W.uniforms=De.uniforms;let Ve=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ve.clippingPlanes=Je.uniform),bu(S,De),W.needsLights=Y0(S),W.lightsStateVersion=we,W.needsLights&&(Ve.ambientLightColor.value=F.state.ambient,Ve.lightProbe.value=F.state.probe,Ve.directionalLights.value=F.state.directional,Ve.directionalLightShadows.value=F.state.directionalShadow,Ve.spotLights.value=F.state.spot,Ve.spotLightShadows.value=F.state.spotShadow,Ve.rectAreaLights.value=F.state.rectArea,Ve.ltc_1.value=F.state.rectAreaLTC1,Ve.ltc_2.value=F.state.rectAreaLTC2,Ve.pointLights.value=F.state.point,Ve.pointLightShadows.value=F.state.pointShadow,Ve.hemisphereLights.value=F.state.hemi,Ve.directionalShadowMap.value=F.state.directionalShadowMap,Ve.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ve.spotShadowMap.value=F.state.spotShadowMap,Ve.spotLightMatrix.value=F.state.spotLightMatrix,Ve.spotLightMap.value=F.state.spotLightMap,Ve.pointShadowMap.value=F.state.pointShadowMap,Ve.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=He,W.uniformsList=null,He}function _u(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=ar.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function bu(S,N){let H=Ze.get(S);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function W0(S,N,H,W,F){N.isScene!==!0&&(N=Ue),E.resetTextureUnits();let ge=N.fog,we=W.isMeshStandardMaterial?N.environment:null,De=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:xi,Oe=(W.isMeshStandardMaterial?B:_).get(W.envMap||we),Ke=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,He=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ve=!!H.morphAttributes.position,Ft=!!H.morphAttributes.normal,Tn=!!H.morphAttributes.color,jt=Ui;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(jt=y.toneMapping);let li=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Pt=li!==void 0?li.length:0,et=Ze.get(W),yl=m.state.lights;if(j===!0&&(me===!0||S!==b)){let kn=S===b&&W.id===G;Je.setState(W,S,kn)}let Nt=!1;W.version===et.__version?(et.needsLights&&et.lightsStateVersion!==yl.state.version||et.outputColorSpace!==De||F.isBatchedMesh&&et.batching===!1||!F.isBatchedMesh&&et.batching===!0||F.isInstancedMesh&&et.instancing===!1||!F.isInstancedMesh&&et.instancing===!0||F.isSkinnedMesh&&et.skinning===!1||!F.isSkinnedMesh&&et.skinning===!0||F.isInstancedMesh&&et.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&et.instancingColor===!1&&F.instanceColor!==null||et.envMap!==Oe||W.fog===!0&&et.fog!==ge||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Je.numPlanes||et.numIntersection!==Je.numIntersection)||et.vertexAlphas!==Ke||et.vertexTangents!==He||et.morphTargets!==Ve||et.morphNormals!==Ft||et.morphColors!==Tn||et.toneMapping!==jt||Be.isWebGL2===!0&&et.morphTargetsCount!==Pt)&&(Nt=!0):(Nt=!0,et.__version=W.version);let is=et.currentProgram;Nt===!0&&(is=So(W,N,F));let Mu=!1,Fr=!1,vl=!1,on=is.getUniforms(),ss=et.uniforms;if(be.useProgram(is.program)&&(Mu=!0,Fr=!0,vl=!0),W.id!==G&&(G=W.id,Fr=!0),Mu||b!==S){on.setValue(O,"projectionMatrix",S.projectionMatrix),on.setValue(O,"viewMatrix",S.matrixWorldInverse);let kn=on.map.cameraPosition;kn!==void 0&&kn.setValue(O,qe.setFromMatrixPosition(S.matrixWorld)),Be.logarithmicDepthBuffer&&on.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&on.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,Fr=!0,vl=!0)}if(F.isSkinnedMesh){on.setOptional(O,F,"bindMatrix"),on.setOptional(O,F,"bindMatrixInverse");let kn=F.skeleton;kn&&(Be.floatVertexTextures?(kn.boneTexture===null&&kn.computeBoneTexture(),on.setValue(O,"boneTexture",kn.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(on.setOptional(O,F,"batchingTexture"),on.setValue(O,"batchingTexture",F._matricesTexture,E));let _l=H.morphAttributes;if((_l.position!==void 0||_l.normal!==void 0||_l.color!==void 0&&Be.isWebGL2===!0)&&it.update(F,H,is),(Fr||et.receiveShadow!==F.receiveShadow)&&(et.receiveShadow=F.receiveShadow,on.setValue(O,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ss.envMap.value=Oe,ss.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Fr&&(on.setValue(O,"toneMappingExposure",y.toneMappingExposure),et.needsLights&&q0(ss,vl),ge&&W.fog===!0&&fe.refreshFogUniforms(ss,ge),fe.refreshMaterialUniforms(ss,W,J,X,Te),ar.upload(O,_u(et),ss,E)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ar.upload(O,_u(et),ss,E),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&on.setValue(O,"center",F.center),on.setValue(O,"modelViewMatrix",F.modelViewMatrix),on.setValue(O,"normalMatrix",F.normalMatrix),on.setValue(O,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let kn=W.uniformsGroups;for(let bl=0,X0=kn.length;bl<X0;bl++)if(Be.isWebGL2){let wu=kn[bl];ut.update(wu,is),ut.bind(wu,is)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return is}function q0(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Y0(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,N,H){Ze.get(S.texture).__webglTexture=N,Ze.get(S.depthTexture).__webglTexture=H;let W=Ze.get(S);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,N){let H=Ze.get(S);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,H=0){C=S,I=N,P=H;let W=!0,F=null,ge=!1,we=!1;if(S){let Oe=Ze.get(S);Oe.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(O.FRAMEBUFFER,null),W=!1):Oe.__webglFramebuffer===void 0?E.setupRenderTarget(S):Oe.__hasExternalTextures&&E.rebindTextures(S,Ze.get(S.texture).__webglTexture,Ze.get(S.depthTexture).__webglTexture);let Ke=S.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(we=!0);let He=Ze.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(He[N])?F=He[N][H]:F=He[N],ge=!0):Be.isWebGL2&&S.samples>0&&E.useMultisampledRTT(S)===!1?F=Ze.get(S).__webglMultisampledFramebuffer:Array.isArray(He)?F=He[H]:F=He,T.copy(S.viewport),V.copy(S.scissor),Y=S.scissorTest}else T.copy(te).multiplyScalar(J).floor(),V.copy(re).multiplyScalar(J).floor(),Y=xe;if(be.bindFramebuffer(O.FRAMEBUFFER,F)&&Be.drawBuffers&&W&&be.drawBuffers(S,F),be.viewport(T),be.scissor(V),be.setScissorTest(Y),ge){let Oe=Ze.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,Oe.__webglTexture,H)}else if(we){let Oe=Ze.get(S.texture),Ke=N||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Oe.__webglTexture,H||0,Ke)}G=-1},this.readRenderTargetPixels=function(S,N,H,W,F,ge,we){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ze.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(De=De[we]),De){be.bindFramebuffer(O.FRAMEBUFFER,De);try{let Oe=S.texture,Ke=Oe.format,He=Oe.type;if(Ke!==Xn&&ve.convert(Ke)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ve=He===$r&&(Pe.has("EXT_color_buffer_half_float")||Be.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(He!==zi&&ve.convert(He)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===Di&&(Be.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-W&&H>=0&&H<=S.height-F&&O.readPixels(N,H,W,F,ve.convert(Ke),ve.convert(He),ge)}finally{let Oe=C!==null?Ze.get(C).__webglFramebuffer:null;be.bindFramebuffer(O.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(S,N,H=0){let W=Math.pow(2,-H),F=Math.floor(N.image.width*W),ge=Math.floor(N.image.height*W);E.setTexture2D(N,0),O.copyTexSubImage2D(O.TEXTURE_2D,H,0,0,S.x,S.y,F,ge),be.unbindTexture()},this.copyTextureToTexture=function(S,N,H,W=0){let F=N.image.width,ge=N.image.height,we=ve.convert(H.format),De=ve.convert(H.type);E.setTexture2D(H,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment),N.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,W,S.x,S.y,F,ge,we,De,N.image.data):N.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,W,S.x,S.y,N.mipmaps[0].width,N.mipmaps[0].height,we,N.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,W,S.x,S.y,we,De,N.image),W===0&&H.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(S,N,H,W,F=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ge=S.max.x-S.min.x+1,we=S.max.y-S.min.y+1,De=S.max.z-S.min.z+1,Oe=ve.convert(W.format),Ke=ve.convert(W.type),He;if(W.isData3DTexture)E.setTexture3D(W,0),He=O.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)E.setTexture2DArray(W,0),He=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);let Ve=O.getParameter(O.UNPACK_ROW_LENGTH),Ft=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Tn=O.getParameter(O.UNPACK_SKIP_PIXELS),jt=O.getParameter(O.UNPACK_SKIP_ROWS),li=O.getParameter(O.UNPACK_SKIP_IMAGES),Pt=H.isCompressedTexture?H.mipmaps[F]:H.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Pt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Pt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,S.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,S.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,S.min.z),H.isDataTexture||H.isData3DTexture?O.texSubImage3D(He,F,N.x,N.y,N.z,ge,we,De,Oe,Ke,Pt.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(He,F,N.x,N.y,N.z,ge,we,De,Oe,Pt.data)):O.texSubImage3D(He,F,N.x,N.y,N.z,ge,we,De,Oe,Ke,Pt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ve),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ft),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Tn),O.pixelStorei(O.UNPACK_SKIP_ROWS,jt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,li),F===0&&W.generateMipmaps&&O.generateMipmap(He),be.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),be.unbindTexture()},this.resetState=function(){I=0,P=0,C=null,be.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Bc?"display-p3":"srgb",t.unpackColorSpace=mt.workingColorSpace===Ra?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Bt?ps:of}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ps?Bt:xi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},wc=class extends jr{};wc.prototype.isWebGL1Renderer=!0;pa=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new $e(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ma=class extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},ga=class extends zn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},xa=class n extends vn{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new U,h=new je;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,p=3;d<=t;d++,p+=3){let g=i+d/t*s;c.x=e*Math.cos(g),c.y=e*Math.sin(g),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[p]/e+1)/2,h.y=(o[p+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Rt(o,3)),this.setAttribute("normal",new Rt(a,3)),this.setAttribute("uv",new Rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Qr=class n extends vn{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],p=[],g=[],x=0,v=[],m=i/2,f=0;w(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Rt(d,3)),this.setAttribute("normal",new Rt(p,3)),this.setAttribute("uv",new Rt(g,2));function w(){let R=new U,I=new U,P=0,C=(t-e)/i;for(let G=0;G<=r;G++){let b=[],T=G/r,V=T*(t-e)+e;for(let Y=0;Y<=s;Y++){let oe=Y/s,D=oe*l+a,z=Math.sin(D),X=Math.cos(D);I.x=V*z,I.y=-T*i+m,I.z=V*X,d.push(I.x,I.y,I.z),R.set(z,C,X).normalize(),p.push(R.x,R.y,R.z),g.push(oe,1-T),b.push(x++)}v.push(b)}for(let G=0;G<s;G++)for(let b=0;b<r;b++){let T=v[b][G],V=v[b+1][G],Y=v[b+1][G+1],oe=v[b][G+1];h.push(T,V,oe),h.push(V,Y,oe),P+=6}c.addGroup(f,P,0),f+=P}function y(R){let I=x,P=new je,C=new U,G=0,b=R===!0?e:t,T=R===!0?1:-1;for(let Y=1;Y<=s;Y++)d.push(0,m*T,0),p.push(0,T,0),g.push(.5,.5),x++;let V=x;for(let Y=0;Y<=s;Y++){let D=Y/s*l+a,z=Math.cos(D),X=Math.sin(D);C.x=b*X,C.y=m*T,C.z=b*z,d.push(C.x,C.y,C.z),p.push(0,T,0),P.x=z*.5+.5,P.y=X*.5*T+.5,g.push(P.x,P.y),x++}for(let Y=0;Y<s;Y++){let oe=I+Y,D=V+Y;R===!0?h.push(D,D+1,oe):h.push(D+1,D,oe),G+=3}c.addGroup(f,G,R===!0?1:2),f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ya=class n extends Qr{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},eo=class n extends vn{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Rt(r,3)),this.setAttribute("normal",new Rt(r.slice(),3)),this.setAttribute("uv",new Rt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){let y=new U,R=new U,I=new U;for(let P=0;P<t.length;P+=3)g(t[P+0],y),g(t[P+1],R),g(t[P+2],I),l(y,R,I,w)}function l(w,y,R,I){let P=I+1,C=[];for(let G=0;G<=P;G++){C[G]=[];let b=w.clone().lerp(R,G/P),T=y.clone().lerp(R,G/P),V=P-G;for(let Y=0;Y<=V;Y++)Y===0&&G===P?C[G][Y]=b:C[G][Y]=b.clone().lerp(T,Y/V)}for(let G=0;G<P;G++)for(let b=0;b<2*(P-G)-1;b++){let T=Math.floor(b/2);b%2===0?(p(C[G][T+1]),p(C[G+1][T]),p(C[G][T])):(p(C[G][T+1]),p(C[G+1][T+1]),p(C[G+1][T]))}}function c(w){let y=new U;for(let R=0;R<r.length;R+=3)y.x=r[R+0],y.y=r[R+1],y.z=r[R+2],y.normalize().multiplyScalar(w),r[R+0]=y.x,r[R+1]=y.y,r[R+2]=y.z}function h(){let w=new U;for(let y=0;y<r.length;y+=3){w.x=r[y+0],w.y=r[y+1],w.z=r[y+2];let R=m(w)/2/Math.PI+.5,I=f(w)/Math.PI+.5;o.push(R,1-I)}x(),d()}function d(){for(let w=0;w<o.length;w+=6){let y=o[w+0],R=o[w+2],I=o[w+4],P=Math.max(y,R,I),C=Math.min(y,R,I);P>.9&&C<.1&&(y<.2&&(o[w+0]+=1),R<.2&&(o[w+2]+=1),I<.2&&(o[w+4]+=1))}}function p(w){r.push(w.x,w.y,w.z)}function g(w,y){let R=w*3;y.x=e[R+0],y.y=e[R+1],y.z=e[R+2]}function x(){let w=new U,y=new U,R=new U,I=new U,P=new je,C=new je,G=new je;for(let b=0,T=0;b<r.length;b+=9,T+=6){w.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),R.set(r[b+6],r[b+7],r[b+8]),P.set(o[T+0],o[T+1]),C.set(o[T+2],o[T+3]),G.set(o[T+4],o[T+5]),I.copy(w).add(y).add(R).divideScalar(3);let V=m(I);v(P,T+0,w,V),v(C,T+2,y,V),v(G,T+4,R,V)}}function v(w,y,R,I){I<0&&w.x===1&&(o[y]=w.x-1),R.x===0&&R.z===0&&(o[y]=I/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function f(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},va=class n extends eo{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},_a=class n extends eo{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ba=class n extends eo{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},fr=class n extends vn{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=e,p=(t-e)/s,g=new U,x=new je;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){let f=r+m/i*o;g.x=d*Math.cos(f),g.y=d*Math.sin(f),l.push(g.x,g.y,g.z),c.push(0,0,1),x.x=(g.x/t+1)/2,x.y=(g.y/t+1)/2,h.push(x.x,x.y)}d+=p}for(let v=0;v<s;v++){let m=v*(i+1);for(let f=0;f<i;f++){let w=f+m,y=w,R=w+i+1,I=w+i+2,P=w+1;a.push(y,R,P),a.push(R,I,P)}}this.setIndex(a),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(c,3)),this.setAttribute("uv",new Rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},pr=class extends gs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=af,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};mr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Sc=class extends mr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nd,endingEnd:nd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case id:r=e,a=2*t-i;break;case sd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case id:o=e,l=2*i-t;break;case sd:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,g=this._weightNext,x=(i-t)/(s-t),v=x*x,m=v*x,f=-p*m+2*p*v-p*x,w=(1+p)*m+(-1.5-2*p)*v+(-.5+p)*x+1,y=(-1-g)*m+(1.5+g)*v+.5*x,R=g*m-g*v;for(let I=0;I!==a;++I)r[I]=f*o[h+I]+w*o[c+I]+y*o[l+I]+R*o[d+I];return r}},Ec=class extends mr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),d=1-h;for(let p=0;p!==a;++p)r[p]=o[c+p]*d+o[l+p]*h;return r}},Tc=class extends mr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},$n=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$o(t,this.TimeBufferType),this.values=$o(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:$o(e.times,Array),values:$o(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ec(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Jo:t=this.InterpolantFactoryMethodDiscrete;break;case Ko:t=this.InterpolantFactoryMethodLinear;break;case Rl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jo;case this.InterpolantFactoryMethodLinear:return Ko;case this.InterpolantFactoryMethodSmooth:return Rl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Hb(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Rl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,p=d-i,g=d+i;for(let x=0;x!==i;++x){let v=t[d+x];if(v!==t[p+x]||v!==t[g+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,p=o*i;for(let g=0;g!==i;++g)t[p+g]=t[d+g]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=Ko;xs=class extends $n{};xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Jo;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;Ac=class extends $n{};Ac.prototype.ValueTypeName="color";Rc=class extends $n{};Rc.prototype.ValueTypeName="number";Cc=class extends mr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)ri.slerpFlat(r,0,o,c-a,o,c,l);return r}},to=class extends $n{InterpolantFactoryMethodLinear(e){return new Cc(this.times,this.values,this.getValueSize(),e)}};to.prototype.ValueTypeName="quaternion";to.prototype.DefaultInterpolation=Ko;to.prototype.InterpolantFactoryMethodSmooth=void 0;ys=class extends $n{};ys.prototype.ValueTypeName="string";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=Jo;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;Pc=class extends $n{};Pc.prototype.ValueTypeName="vector";Lc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,p=c.length;d<p;d+=2){let g=c[d],x=c[d+1];if(g.global&&(g.lastIndex=0),g.test(h))return x}return null}}},Gb=new Lc,Ic=class{constructor(e){this.manager=e!==void 0?e:Gb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ic.DEFAULT_MATERIAL_NAME="__DEFAULT";Ma=class extends xn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},wa=class extends Ma{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ql=new Gt,Yd=new U,Xd=new U,kc=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kr,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Yd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yd),Xd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xd),t.updateMatrixWorld(),Ql.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ql),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ql)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Dc=class extends kc{constructor(){super(new ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Sa=class extends Ma{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new Dc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ea=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$d(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=$d();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};Gc="\\[\\]\\.:\\/",Vb=new RegExp("["+Gc+"]","g"),Vc="[^"+Gc+"]",Wb="[^"+Gc.replace("\\.","")+"]",qb=/((?:WC+[\/:])*)/.source.replace("WC",Vc),Yb=/(WCOD+)?/.source.replace("WCOD",Wb),Xb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vc),$b=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vc),Zb=new RegExp("^"+qb+Yb+Xb+$b+"$"),Jb=["material","materials","bones","map"],Nc=class{constructor(e,t,i){let s=i||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Tt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Vb,"")}static parseTrackName(e){let t=Zb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Jb.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=Nc;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];TM=new Float32Array(1),Ta=class{constructor(e,t,i=0,s=1/0){this.ray=new oa(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Uc(e,this,i,t),i.sort(Zd),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Uc(e[s],this,i,t);return i.sort(Zd),i}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zc)});function io(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Kb(n,e){let t=Math.floor(n),i=Math.floor(e),s=n-t,r=e-i,o=s*s*(3-2*s),a=r*r*(3-2*r),l=La(t,i),c=La(t+1,i),h=La(t,i+1),d=La(t+1,i+1);return l+(c-l)*o+(h-l)*a+(l-c-h+d)*o*a}function xr(n,e,t=3){let i=0,s=.5,r=1,o=0;for(let a=0;a<t;a++)i+=s*Kb(n*r,e*r),o+=s,s*=.5,r*=2;return i/o}function We(n,e){(Yc[n]=Yc[n]||[]).push(e)}function K(n,...e){(Yc[n]||[]).forEach(t=>{try{t(...e)}catch(i){console.error(i)}})}var Lt,wt,Fn,Vt,st,rn,yf,qc,La,Yc,at=Ae(()=>{Lt=()=>Math.random(),wt=(n,e)=>n+Math.floor(Math.random()*(e-n+1)),Fn=(n,e,t)=>n<e?e:n>t?t:n,Vt=(n,e,t,i)=>Math.max(Math.abs(n-t),Math.abs(e-i)),st=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),rn=n=>Math.floor(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),yf=n=>n>=1e7?Math.floor(n/1e6)+"M":n>=1e5?Math.floor(n/1e3)+"K":String(n);qc=new Uint8Array(512);{let n=io(1849),e=[...Array(256).keys()];for(let t=255;t>0;t--){let i=Math.floor(n()*(t+1));[e[t],e[i]]=[e[i],e[t]]}for(let t=0;t<512;t++)qc[t]=e[t&255]}La=(n,e)=>qc[qc[n&255]+(e&255)&511]/255;Yc={}});var vf,se,tn=Ae(()=>{vf=["head","cape","neck","ammo","weapon","body","shield","legs","hands","feet","ring"],se={coins:{name:"Coins",icon:"\u{1FA99}",value:1,stack:!0,examine:"Lovely money!"},hatchet:{name:"Hatchet",icon:"\u{1FA93}",value:16,examine:"A woodcutter's hatchet."},pickaxe:{name:"Pickaxe",icon:"\u26CF\uFE0F",value:20,examine:"Used for mining."},small_net:{name:"Small fishing net",icon:"\u{1F578}\uFE0F",value:5,examine:"Useful for catching small fish."},fishing_rod:{name:"Fishing rod",icon:"\u{1F3A3}",value:15,examine:"Useful for catching bigger fish."},bait:{name:"Fishing bait",icon:"\u{1FAB1}",value:3,stack:!0,examine:"Wriggly worms. Fish can't resist."},tinderbox:{name:"Tinderbox",icon:"\u{1F9F0}",value:1,examine:"Useful for lighting a fire."},gold_pan:{name:"Gold pan",icon:"\u{1F958}",value:10,examine:"Swirl river gravel in it to find gold flakes."},gold_flakes:{name:"Gold flakes",icon:"\u2728",value:12,stack:!0,examine:"Tiny flakes of gold. The banker's assayer buys them."},horse_brush:{name:"Horse brush",icon:"\u{1FAAE}",value:6,examine:"Ellie pays a few coins for every horse you groom."},carrot:{name:"Carrot",icon:"\u{1F955}",value:2,examine:"Horses love these.",food:{heal:1}},logs:{name:"Logs",icon:"\u{1FAB5}",value:4,examine:"Dry, dead wood. Burns well.",burn:{lvl:1,xp:40}},mesquite_logs:{name:"Mesquite logs",icon:"\u{1FAB5}",tint:"hue-rotate(-20deg) saturate(1.6)",value:15,examine:"Fragrant mesquite wood.",burn:{lvl:15,xp:60}},cottonwood_logs:{name:"Cottonwood logs",icon:"\u{1FAB5}",tint:"brightness(1.4) saturate(0.6)",value:30,examine:"Pale logs from a riverside cottonwood.",burn:{lvl:30,xp:90}},copper_ore:{name:"Copper ore",icon:"\u{1FAA8}",tint:"sepia(1) saturate(3) hue-rotate(-20deg)",value:5,examine:"This needs refining."},iron_ore:{name:"Iron ore",icon:"\u{1FAA8}",tint:"sepia(0.6) brightness(0.8)",value:17,examine:"This needs refining."},silver_ore:{name:"Silver ore",icon:"\u{1FAA8}",tint:"brightness(1.5) grayscale(1)",value:75,examine:"Shiny! This needs refining."},gold_ore:{name:"Gold ore",icon:"\u{1FAA8}",tint:"sepia(1) saturate(5) brightness(1.3)",value:150,examine:"Gold! Folks have died for less."},raw_crayfish:{name:"Raw crayfish",icon:"\u{1F990}",tint:"grayscale(0.6)",value:3,examine:"I should try cooking this.",cook:{to:"crayfish",burnt:"burnt_fish",lvl:1,xp:30,stop:34}},crayfish:{name:"Crayfish",icon:"\u{1F990}",value:5,examine:"Some nicely cooked crayfish.",food:{heal:2}},raw_sunfish:{name:"Raw sunfish",icon:"\u{1F41F}",tint:"grayscale(0.6)",value:8,examine:"I should try cooking this.",cook:{to:"sunfish",burnt:"burnt_fish",lvl:10,xp:40,stop:40}},sunfish:{name:"Sunfish",icon:"\u{1F41F}",value:12,examine:"A golden sunfish. Smells great.",food:{heal:4}},raw_trout:{name:"Raw trout",icon:"\u{1F41F}",tint:"grayscale(0.4) hue-rotate(90deg)",value:20,examine:"I should try cooking this.",cook:{to:"trout",burnt:"burnt_fish",lvl:20,xp:70,stop:50}},trout:{name:"Trout",icon:"\u{1F41F}",tint:"hue-rotate(90deg)",value:30,examine:"Some nicely cooked trout.",food:{heal:7}},raw_catfish:{name:"Raw catfish",icon:"\u{1F420}",tint:"grayscale(0.6)",value:40,examine:"Whiskers and all.",cook:{to:"catfish",burnt:"burnt_fish",lvl:30,xp:90,stop:63}},catfish:{name:"Catfish",icon:"\u{1F420}",value:60,examine:"Fried catfish. A frontier favourite.",food:{heal:10}},raw_meat:{name:"Raw meat",icon:"\u{1F969}",value:2,examine:"I need to cook this first.",cook:{to:"cooked_meat",burnt:"burnt_meat",lvl:1,xp:30,stop:33}},cooked_meat:{name:"Cooked meat",icon:"\u{1F356}",value:4,examine:"Mmm, this looks tasty.",food:{heal:3}},raw_chicken:{name:"Raw chicken",icon:"\u{1F357}",tint:"grayscale(0.7) brightness(1.2)",value:2,examine:"I need to cook this first.",cook:{to:"cooked_chicken",burnt:"burnt_chicken",lvl:1,xp:30,stop:34}},cooked_chicken:{name:"Cooked chicken",icon:"\u{1F357}",value:4,examine:"Mmm, this looks tasty.",food:{heal:3}},burnt_chicken:{name:"Burnt chicken",icon:"\u{1F357}",tint:"brightness(0.25)",value:1,examine:"Oops! It's charcoal now."},raw_beef:{name:"Raw beef",icon:"\u{1F969}",tint:"saturate(1.6)",value:2,examine:"I need to cook this first.",cook:{to:"cooked_beef",burnt:"burnt_meat",lvl:1,xp:30,stop:34}},cooked_beef:{name:"Cooked beef",icon:"\u{1F356}",tint:"saturate(1.4)",value:4,examine:"A juicy frontier steak.",food:{heal:3}},feather:{name:"Feather",icon:"\u{1FAB6}",value:2,stack:!0,examine:"Attach to arrow shafts with Fletching."},cowhide:{name:"Cowhide",icon:"\u{1F404}",tint:"grayscale(1) brightness(1.2)",value:20,examine:"I should take this to a tanner."},burnt_fish:{name:"Burnt fish",icon:"\u{1F41F}",tint:"brightness(0.25)",value:1,examine:"Oops!"},burnt_meat:{name:"Burnt meat",icon:"\u{1F356}",tint:"brightness(0.25)",value:1,examine:"Oops!"},bread:{name:"Bread",icon:"\u{1F35E}",value:12,examine:"Nice crusty bread.",food:{heal:5}},beans:{name:"Tin of beans",icon:"\u{1F96B}",value:20,examine:"A cowpoke staple.",food:{heal:6}},whiskey:{name:"Whiskey",icon:"\u{1F943}",value:8,examine:"Rotgut. Puts hair on your chest.",food:{heal:2,drink:!0},boost:{attack:-2,strength:2}},sarsaparilla:{name:"Sarsaparilla",icon:"\u{1F37A}",tint:"hue-rotate(-30deg)",value:6,examine:"Fizzy root beer. A cowboy's favourite.",food:{heal:3,drink:!0}},stew:{name:"Bowl of stew",icon:"\u{1F372}",value:30,examine:"Big Sal's famous chuckwagon stew.",food:{heal:8}},bucket:{name:"Bucket",icon:"\u{1FAA3}",value:2,examine:"An empty bucket. Cows have the stuff to fill it."},bucket_milk:{name:"Bucket of milk",icon:"\u{1F95B}",value:6,examine:"Fresh milk. Drink it, or bake with it.",food:{heal:2,drink:!0,leaves:"bucket"}},flour:{name:"Pot of flour",icon:"\u{1FAD9}",value:10,examine:"Mix with milk and an egg to make cake batter."},egg:{name:"Egg",icon:"\u{1F95A}",value:4,examine:"A prairie chicken egg."},cake_batter:{name:"Cake batter",icon:"\u{1F963}",value:15,examine:"Bake this on a range to make a cake.",cook:{to:"cake",burnt:"burnt_cake",lvl:5,xp:60,stop:40,rangeOnly:!0}},cake:{name:"Cake",icon:"\u{1F382}",value:40,examine:"A whole cake. Three delicious slices.",food:{heal:4,next:"cake_23"}},cake_23:{name:"2/3 cake",icon:"\u{1F370}",value:25,examine:"Two slices left.",food:{heal:4,next:"cake_slice"}},cake_slice:{name:"Slice of cake",icon:"\u{1F370}",tint:"saturate(0.6)",value:10,examine:"The last slice.",food:{heal:4}},burnt_cake:{name:"Burnt cake",icon:"\u{1F382}",tint:"brightness(0.25)",value:1,examine:"Charcoal with icing."},tobacco_pouch:{name:"Tobacco pouch",icon:"\u{1F45D}",value:15,examine:"Half-full of cheap chewing tobacco. Sells for a few coins."},coin_pouch:{name:"Coin pouch",icon:"\u{1F4B0}",value:1,stack:!0,examine:"Lifted from a careless pocket. Open it for coins.",pouch:[3,5]},bones:{name:"Bones",icon:"\u{1F9B4}",value:1,examine:"Bones are for burying!",bury:4.5},snake_skin:{name:"Snake skin",icon:"\u{1F40D}",value:10,examine:"Scaly. The tanner might want it one day."},coyote_pelt:{name:"Coyote pelt",icon:"\u{1F43A}",value:18,examine:"A mangy coyote pelt."},bandana:{name:"Red bandana",icon:"\u{1F9E3}",value:25,examine:"Standard outlaw issue.",equip:{slot:"neck",bonus:{att:1,def:1}}},leather:{name:"Leather",icon:"\u{1F7EB}",value:25,examine:"Tanned leather. Craft into gloves, chaps, vests and holsters."},rusty_knife:{name:"Rusty knife",icon:"\u{1F52A}",tint:"sepia(0.8)",value:5,examine:"Barely sharper than a spoon.",equip:{slot:"weapon",style:"melee",speed:4,bonus:{att:4,str:3}}},bowie_knife:{name:"Bowie knife",icon:"\u{1F52A}",value:250,examine:"A big, mean frontier knife.",equip:{slot:"weapon",style:"melee",speed:4,req:{attack:10},bonus:{att:14,str:13},spec:{name:"Gut Punch",cost:25,acc:1.25,dmg:1.1}}},cavalry_sabre:{name:"Cavalry sabre",icon:"\u{1F5E1}\uFE0F",value:900,examine:"A curved blade for mounted soldiers.",equip:{slot:"weapon",style:"melee",speed:4,req:{attack:20},bonus:{att:26,str:25},spec:{name:"Cavalry Charge",cost:50,acc:1.5,dmg:1.15}}},old_revolver:{name:"Old revolver",icon:"\u{1F52B}",tint:"sepia(0.7)",value:20,examine:"It still fires. Mostly.",equip:{slot:"weapon",style:"ranged",speed:4,range:6,bonus:{rng:8,rstr:6}}},six_shooter:{name:"Six-shooter",icon:"\u{1F52B}",value:300,examine:"A reliable six-shot revolver.",equip:{slot:"weapon",style:"ranged",speed:4,range:7,req:{ranged:10},bonus:{rng:18,rstr:14},spec:{name:"Fan the Hammer",cost:75,hits:3,acc:.8,dmg:.8}}},lever_rifle:{name:"Lever-action rifle",icon:"\u{1F52B}",tint:"hue-rotate(180deg)",value:1100,examine:"Fires as fast as you can work the lever.",equip:{slot:"weapon",style:"ranged",speed:5,range:8,req:{ranged:20},bonus:{rng:30,rstr:24},spec:{name:"Quick Draw",cost:50,hits:2,acc:1,dmg:1}}},cowboy_hat:{name:"Cowboy hat",icon:"\u{1F920}",value:15,examine:"Keeps the sun off.",equip:{slot:"head",bonus:{def:2}}},leather_vest:{name:"Leather vest",icon:"\u{1F9BA}",tint:"sepia(1) hue-rotate(-15deg)",value:30,examine:"Sturdy leather.",equip:{slot:"body",bonus:{def:5}}},hide_duster:{name:"Hide duster",icon:"\u{1F9E5}",value:400,examine:"A long coat of thick hide.",equip:{slot:"body",req:{defence:10},bonus:{def:12}}},chaps:{name:"Leather chaps",icon:"\u{1F456}",tint:"sepia(1)",value:25,examine:"Protects the legs from brush.",equip:{slot:"legs",bonus:{def:3}}},poncho:{name:"Wool poncho",icon:"\u{1F9F6}",tint:"hue-rotate(-30deg)",value:18,examine:"Warm at night, cool by day.",equip:{slot:"cape",bonus:{def:1}}},leather_gloves:{name:"Leather gloves",icon:"\u{1F9E4}",tint:"sepia(1)",value:12,examine:"Good for handling rope.",equip:{slot:"hands",bonus:{def:1,att:1}}},buckler:{name:"Iron buckler",icon:"\u{1F6E1}\uFE0F",value:120,examine:"A small round shield.",equip:{slot:"shield",req:{defence:5},bonus:{def:6}}},lucky_ring:{name:"Lucky horseshoe ring",icon:"\u{1F48D}",value:200,examine:"Bent from a lucky horseshoe nail.",equip:{slot:"ring",bonus:{att:2,rng:2}}},bullets:{name:"Lead bullets",icon:"\u2022",value:1,stack:!0,examine:"Phase 2 will make guns need these.",equip:{slot:"ammo",bonus:{rstr:1}}},boots:{name:"Riding boots",icon:"\u{1F462}",value:20,examine:"Spurs not included.",equip:{slot:"feet",bonus:{def:1}}},wyrmscale_vest:{name:"Wyrmscale vest",icon:"\u{1F9BA}",tint:"hue-rotate(10deg) saturate(0.5) brightness(1.2)",value:650,examine:"Overlapping sandy scales, tougher than leather.",equip:{slot:"body",req:{defence:5},bonus:{def:10,rng:2}}},wyrmfang_knife:{name:"Wyrmfang knife",icon:"\u{1F52A}",tint:"sepia(0.4) brightness(1.4)",value:700,examine:"A blade ground from a Dust Wyrm fang.",equip:{slot:"weapon",style:"melee",speed:4,req:{attack:10},bonus:{att:17,str:16},spec:{name:"Venom Slash",cost:50,acc:1.3,dmg:1.2}}},wyrmling:{name:"Wyrmling",icon:"\u{1F409}",tint:"sepia(1) saturate(0.6)",value:0,quest:!0,examine:"A baby Dust Wyrm. It seems to like you.",pet:"wyrmling_pet"},copper_bar:{name:"Copper bar",icon:"\u{1F7E7}",value:8,examine:"A bar of refined copper."},iron_bar:{name:"Iron bar",icon:"\u2B1C",tint:"brightness(0.7)",value:25,examine:"A bar of refined iron."},silver_bar:{name:"Silver bar",icon:"\u2B1C",tint:"brightness(1.4)",value:100,examine:"A bar of refined silver."},gold_bar:{name:"Gold bar",icon:"\u{1F7E8}",value:200,examine:"A bar of refined gold. Heavy."},arrow_tips_copper:{name:"Copper arrow tips",icon:"\u{1F53A}",value:1,stack:!0,examine:"Tip headless arrows with these."},bolt_tips_iron:{name:"Iron bolt tips",icon:"\u{1F53B}",value:2,stack:!0,examine:"Tip unfinished bolts with these."},knife:{name:"Carving knife",icon:"\u{1F52A}",tint:"hue-rotate(40deg)",value:8,examine:"A small knife for fletching shafts."},arrow_shaft:{name:"Arrow shaft",icon:"\uFF5C",value:1,stack:!0,examine:"Attach feathers to make headless arrows."},bolt_shaft:{name:"Bolt shaft",icon:"\uFF5C",tint:"sepia(1)",value:2,stack:!0,examine:"A sturdier shaft for bolts."},bolt_shaft_steel:{name:"Steel bolt shaft",icon:"\uFF5C",tint:"brightness(1.3)",value:3,stack:!0,examine:"Cottonwood shaft for steel bolts."},headless_arrow:{name:"Headless arrow",icon:"\u27B3",tint:"grayscale(0.5)",value:1,stack:!0,examine:"Needs copper tips."},bronze_arrow:{name:"Bronze arrow",icon:"\u27B3",value:2,stack:!0,examine:"A fletched arrow. Equip as ammo for a ranged bonus.",equip:{slot:"ammo",bonus:{rstr:3,rng:1}}},iron_bolt_u:{name:"Unfinished iron bolt",icon:"\u2796",value:2,stack:!0,examine:"Needs iron tips."},iron_bolt:{name:"Iron bolt",icon:"\u{1F4CC}",value:4,stack:!0,examine:"Heavy iron bolt. Stronger ammo.",equip:{slot:"ammo",bonus:{rstr:6,rng:2}}},steel_bolt:{name:"Steel bolt",icon:"\u{1F4CC}",tint:"brightness(1.3)",value:8,stack:!0,examine:"A finely tipped steel bolt.",equip:{slot:"ammo",bonus:{rstr:10,rng:3}}},needle:{name:"Needle",icon:"\u{1FAA1}",value:1,examine:"Used with leather to craft gear."},thread:{name:"Thread",icon:"\u{1F9F5}",value:1,stack:!0,examine:"Consumed when crafting leather goods."},gun_holster:{name:"Gun holster",icon:"\u{1F45C}",tint:"sepia(1)",value:80,examine:"A tooled leather holster. Steady aim.",equip:{slot:"cape",bonus:{rng:3,rstr:1,def:1}}},rabbit_fur:{name:"Rabbit fur",icon:"\u{1F407}",value:12,examine:"Soft fur. Jed will tan it for a coin."},vial_water:{name:"Vial of water",icon:"\u{1F9F4}",value:2,stack:!0,examine:"Mix with a clean herb to start a tonic."},grimy_sage:{name:"Grimy desert sage",icon:"\u{1F33F}",tint:"grayscale(0.4)",value:3,examine:"Clean it with Herblore."},clean_sage:{name:"Desert sage",icon:"\u{1F33F}",value:5,examine:"A cleaned herb."},grimy_snakeweed:{name:"Grimy snakeweed",icon:"\u{1F33F}",tint:"hue-rotate(80deg) grayscale(0.3)",value:6,examine:"Clean it with Herblore."},clean_snakeweed:{name:"Snakeweed",icon:"\u{1F33F}",tint:"hue-rotate(80deg)",value:9,examine:"A cleaned herb."},grimy_bloom:{name:"Grimy prairie bloom",icon:"\u{1F33C}",tint:"grayscale(0.5)",value:10,examine:"Clean it with Herblore."},clean_bloom:{name:"Prairie bloom",icon:"\u{1F33C}",value:14,examine:"A cleaned herb."},grimy_orchid:{name:"Grimy ghost orchid",icon:"\u{1F4AE}",tint:"grayscale(0.4)",value:18,examine:"Rare Ghost Town herb."},clean_orchid:{name:"Ghost orchid",icon:"\u{1F4AE}",value:25,examine:"A cleaned herb."},unf_sage:{name:"Unfinished attack tonic",icon:"\u{1F9EA}",tint:"hue-rotate(-20deg) saturate(0.5)",value:8,examine:"Needs secondary ingredients... already mixed enough for now."},unf_snake:{name:"Unfinished strength tonic",icon:"\u{1F9EA}",tint:"hue-rotate(40deg) saturate(0.5)",value:12,examine:"Almost a strength tonic."},unf_bloom:{name:"Unfinished defence tonic",icon:"\u{1F9EA}",tint:"hue-rotate(120deg) saturate(0.5)",value:16,examine:"Almost a defence tonic."},unf_orchid:{name:"Unfinished restore tonic",icon:"\u{1F9EA}",tint:"saturate(0.3)",value:22,examine:"Almost a restore tonic."},attack_tonic:{name:"Attack tonic",icon:"\u{1F9EA}",tint:"hue-rotate(-30deg)",value:40,examine:"Temporarily boosts Attack.",food:{heal:1,drink:!0},boost:{attack:3}},strength_tonic:{name:"Strength tonic",icon:"\u{1F9EA}",tint:"hue-rotate(40deg)",value:50,examine:"Temporarily boosts Strength.",food:{heal:1,drink:!0},boost:{strength:3}},defence_tonic:{name:"Defence tonic",icon:"\u{1F9EA}",tint:"hue-rotate(140deg)",value:55,examine:"Temporarily boosts Defence.",food:{heal:1,drink:!0},boost:{defence:3}},restore_tonic:{name:"Restore tonic",icon:"\u{1F9EA}",value:70,examine:"Restores health on the frontier.",food:{heal:8,drink:!0}},potato_seed:{name:"Potato seed",icon:"\u{1F954}",tint:"brightness(0.6)",value:2,stack:!0,examine:"Plant in a farming plot."},cabbage_seed:{name:"Cabbage seed",icon:"\u{1F96C}",tint:"brightness(0.6)",value:4,stack:!0,examine:"Plant in a farming plot."},herb_seed:{name:"Herb seed",icon:"\u{1F331}",value:8,stack:!0,examine:"Grows into desert sage."},orchid_seed:{name:"Orchid seed",icon:"\u{1F331}",tint:"hue-rotate(200deg)",value:20,stack:!0,examine:"Grows into ghost orchid. Needs Ghost Town soil."},potato:{name:"Potato",icon:"\u{1F954}",value:4,examine:"Baked on a range it's almost a meal.",food:{heal:2},cook:{to:"baked_potato",burnt:"burnt_meat",lvl:1,xp:20,stop:30,rangeOnly:!0}},baked_potato:{name:"Baked potato",icon:"\u{1F954}",tint:"sepia(0.4)",value:8,examine:"Hot and fluffy.",food:{heal:4}},cabbage:{name:"Cabbage",icon:"\u{1F96C}",value:6,examine:"Crunchy. Keeps the doctor away.",food:{heal:3}},rake:{name:"Rake",icon:"\u{1F9F9}",value:6,examine:"Clears weeds from farming plots."},seed_dibber:{name:"Seed dibber",icon:"\u{1F58A}\uFE0F",value:6,examine:"For planting seeds."},bird_snare:{name:"Bird snare",icon:"\u{1FAA4}",value:5,examine:"Set this to catch birds for feathers."},box_trap:{name:"Box trap",icon:"\u{1F4E6}",value:15,examine:"Bait with a carrot to catch rabbits."},deadfall:{name:"Deadfall trap",icon:"\u{1FAB5}",value:40,examine:"Bait with raw meat for bigger game."},mark_of_grace:{name:"Mark of grace",icon:"\u2B50",tint:"hue-rotate(40deg)",value:0,stack:!0,examine:"A token of sure footing. Sell to Ellie for Riding tips."},horse_deed:{name:"Horse deed",icon:"\u{1F4DC}",value:0,quest:!0,examine:"Proof you own a horse from Ellie May's stable."},mesa_fang:{name:"Mesa fang",icon:"\u{1F9B7}",value:120,examine:"A venomous fang from the Mesa Rattler."},ghost_cloak:{name:"Ghost cloak",icon:"\u{1F9E5}",tint:"brightness(1.5) saturate(0.3)",value:400,examine:"Whispers when the wind blows.",equip:{slot:"cape",bonus:{def:4,rng:2}}},fort_badge:{name:"Frontier Fort badge",icon:"\u{1F396}\uFE0F",value:80,examine:"Issued at the Frontier Fort.",equip:{slot:"neck",bonus:{att:2,def:2,str:1}}},golem_core:{name:"Golem core",icon:"\u{1F48E}",tint:"sepia(1) saturate(2)",value:250,examine:"Still warm. The heart of a cave golem."},strongbox:{name:"Stolen strongbox",icon:"\u{1F9F3}",value:0,quest:!0,examine:"Property of the Dry Gulch Bank."},deputy_badge:{name:"Deputy badge",icon:"\u2B50",value:50,examine:"Awarded by Sheriff Calloway.",equip:{slot:"neck",bonus:{att:3,def:3,rng:3}}}};for(let[n,e]of Object.entries(se))e.id=n});var Zn,_f,Hi,Gi=Ae(()=>{Zn=[{id:"attack",name:"Attack",icon:"\u2694\uFE0F",guide:[{lvl:1,text:"Rusty knife"},{lvl:10,text:"Bowie knife"},{lvl:20,text:"Cavalry sabre"}]},{id:"strength",name:"Strength",icon:"\u{1F4AA}",guide:[{lvl:1,text:"Train with the Aggressive melee style"}]},{id:"defence",name:"Defence",icon:"\u{1F6E1}\uFE0F",guide:[{lvl:1,text:"Cowboy hat, leather vest, chaps, boots"},{lvl:10,text:"Hide duster"}]},{id:"hitpoints",name:"Hitpoints",icon:"\u2764\uFE0F",start:10,guide:[{lvl:10,text:"Gained through all combat"}]},{id:"prayer",name:"Faith",icon:"\u271D\uFE0F",guide:[{lvl:1,text:"Bury bones (4.5 xp). Thick Hide"},{lvl:4,text:"True Grit"},{lvl:7,text:"Eagle Eye"},{lvl:10,text:"Steady Hand"},{lvl:13,text:"Iron Hide"},{lvl:16,text:"Lawman's Wrath"}]},{id:"ranged",name:"Ranged",icon:"\u{1F3AF}",guide:[{lvl:1,text:"Old revolver / headless arrows"},{lvl:10,text:"Six-shooter"},{lvl:20,text:"Lever-action rifle"}]},{id:"thieving",name:"Thieving",icon:"\u{1F9E4}",guide:[{lvl:1,text:"Pickpocket Cowpokes & Townswomen"},{lvl:5,text:"Bakery stall"},{lvl:20,text:"Fur stall"},{lvl:25,text:"Crack the bank safe"}]},{id:"woodcutting",name:"Woodcutting",icon:"\u{1FA93}",guide:[{lvl:1,text:"Dead tree (logs)"},{lvl:15,text:"Mesquite tree"},{lvl:30,text:"Cottonwood tree"}]},{id:"mining",name:"Mining",icon:"\u26CF\uFE0F",guide:[{lvl:1,text:"Copper rock"},{lvl:15,text:"Iron rock"},{lvl:30,text:"Silver rock"},{lvl:40,text:"Gold rock"}]},{id:"smithing",name:"Smithing",icon:"\u{1F528}",guide:[{lvl:1,text:"Smelt copper ore at Abe's forge \u2192 copper bar"},{lvl:1,text:"Smith lead bullets (1 copper bar \u2192 15 bullets)"},{lvl:5,text:"Smelt iron ore \u2192 iron bar; smith rusty knife"},{lvl:15,text:"Smith bowie knife (2 iron bars)"},{lvl:20,text:"Smelt silver ore \u2192 silver bar"},{lvl:30,text:"Smelt gold ore \u2192 gold bar; smith buckler"},{lvl:40,text:"Smith six-shooter (3 iron + 1 silver)"}]},{id:"crafting",name:"Crafting",icon:"\u{1F9F5}",guide:[{lvl:1,text:"Leather gloves (1 leather)"},{lvl:7,text:"Leather chaps (2 leather)"},{lvl:11,text:"Leather vest (3 leather)"},{lvl:18,text:"Gun holster (2 leather) \u2014 ammo pouch bonus"},{lvl:28,text:"Hard leather duster (4 leather)"}]},{id:"fletching",name:"Fletching",icon:"\u{1F3F9}",guide:[{lvl:1,text:"Cut logs into arrow shafts (knife)"},{lvl:1,text:"Attach feathers \u2192 headless arrows"},{lvl:1,text:"Tip with copper tips \u2192 bronze arrows"},{lvl:15,text:"Mesquite shafts \u2192 iron bolts"},{lvl:30,text:"Cottonwood shafts \u2192 steel bolts"}]},{id:"fishing",name:"Fishing",icon:"\u{1F3A3}",guide:[{lvl:1,text:"Crayfish (small net)"},{lvl:10,text:"Sunfish (small net)"},{lvl:20,text:"Trout (fishing rod)"},{lvl:30,text:"Catfish (fishing rod)"}]},{id:"cooking",name:"Cooking",icon:"\u{1F373}",guide:[{lvl:1,text:"Crayfish, raw meat"},{lvl:10,text:"Sunfish"},{lvl:20,text:"Trout"},{lvl:30,text:"Catfish"}]},{id:"firemaking",name:"Firemaking",icon:"\u{1F525}",guide:[{lvl:1,text:"Logs"},{lvl:15,text:"Mesquite logs"},{lvl:30,text:"Cottonwood logs"}]},{id:"agility",name:"Agility",icon:"\u{1F938}",guide:[{lvl:1,text:"Dry Gulch rooftop course (start at saloon stairs)"},{lvl:10,text:"Bank roof shortcut (west alley)"},{lvl:20,text:"Sheriff office leap"},{lvl:30,text:"Church steeple climb \u2014 big XP"}]},{id:"herblore",name:"Herblore",icon:"\u{1F9EA}",guide:[{lvl:1,text:"Clean grimy desert sage"},{lvl:3,text:"Attack tonic (sage + vial of water)"},{lvl:5,text:"Clean snakeweed; Strength tonic"},{lvl:12,text:"Clean prairie bloom; Defence tonic"},{lvl:22,text:"Clean ghost orchid; Restore tonic"}]},{id:"farming",name:"Farming",icon:"\u{1F331}",guide:[{lvl:1,text:"Rake + plant potato seeds (plots south of town)"},{lvl:7,text:"Cabbage seeds"},{lvl:15,text:"Herb seeds (desert sage)"},{lvl:25,text:"Ghost orchid seeds (Ghost Town plots)"}]},{id:"hunter",name:"Hunter",icon:"\u{1FAA4}",guide:[{lvl:1,text:"Set a bird snare (catch prairie chickens' feathers)"},{lvl:9,text:"Box trap rabbits for meat + hides"},{lvl:21,text:"Track coyotes \u2014 bonus Hunter XP on kill"},{lvl:35,text:"Deadfall for bandit-camp foxes"}]},{id:"slayer",name:"Slayer",icon:"\u{1F480}",guide:[{lvl:1,text:"Take a bounty from the Sheriff's Wanted Board"},{lvl:1,text:"Kill your assigned targets, then return for coins + XP"},{lvl:15,text:"Harder bounties unlock (bandits, wyrmlings)"},{lvl:30,text:"Boss bounties (Dust Wyrm, regional bosses)"}]},{id:"riding",name:"Riding",icon:"\u{1F434}",guide:[{lvl:1,text:"Buy a horse from Ellie May (250 coins)"},{lvl:1,text:"Mount for faster travel (less run drain)"},{lvl:10,text:"Gallop \u2014 triple-step while mounted"},{lvl:25,text:"Warhorse training (combat while mounted)"}]}],_f=Zn.map(n=>n.id),Hi=Object.fromEntries(Zn.map(n=>[n.id,n]))});var Vi,Ia=Ae(()=>{Vi={strongbox_showdown:{name:"Strongbox Showdown",start:"Sheriff Calloway in Dry Gulch",difficulty:"Novice",qp:1,done:4,requirements:[],steps:["Talk to Sheriff Calloway in the sheriff's office.","Ask Ellie May at the stable which way the bandits rode.","Cross the river east and kill bandits until you recover the stolen strongbox.","Return the strongbox to Sheriff Calloway."],journal:{0:"I can start this quest by talking to Sheriff Calloway at the sheriff's office in Dry Gulch.",1:"Bandits robbed the bank's strongbox. The sheriff wants me to ask Ellie May at the stable whether she saw which way they rode.",2:"Ellie saw the bandits ride east across the river bridge. I should hunt down bandits at their camp and recover the strongbox.",3:"I recovered the stolen strongbox! I should return it to Sheriff Calloway.",4:"QUEST COMPLETE! The sheriff made me an honorary deputy."},rewards:["1 Quest Point","350 Attack XP","350 Ranged XP","500 coins","Deputy badge"]},restless_mesa:{name:"Restless Mesa",start:"Canyon Kate at Red Mesa",difficulty:"Intermediate",qp:1,done:3,requirements:[],steps:["Take the stagecoach to Red Mesa and talk to Canyon Kate.","Defeat the Mesa Rattler in its arena.","Bring a Mesa fang back to Canyon Kate."],journal:{0:"I can start this quest by talking to Canyon Kate at Red Mesa (stagecoach west).",1:"Kate asked me to put down the Mesa Rattler terrorizing the canyon.",2:"I have a Mesa fang. I should show it to Canyon Kate.",3:"QUEST COMPLETE! Kate paid a bounty and shared trail knowledge."},rewards:["1 Quest Point","500 Hitpoints XP","400 Hunter XP","750 coins"]},ghost_harvest:{name:"Ghost Harvest",start:"Wanted Board / Ghost Town plots",difficulty:"Novice",qp:1,done:3,requirements:[],steps:["Travel to Ghost Town via stagecoach.","Plant an orchid seed in a haunted plot and harvest a grimy ghost orchid.","Clean it (Herblore) and bring a Ghost orchid to Reverend Clay."],journal:{0:"Reverend Clay mentioned restless spirits in Ghost Town. A ghost orchid offering might quiet them.",1:"I should grow a ghost orchid in Ghost Town's haunted soil.",2:"I have a cleaned Ghost orchid. Deliver it to Reverend Clay at the church.",3:"QUEST COMPLETE! The Reverend blessed the town."},rewards:["1 Quest Point","400 Faith XP","400 Farming XP","300 coins"]}}});function yr(n){return Xc[Math.max(1,Math.min(99,n))]}function bf(n){for(let e=99;e>=1;e--)if(n>=Xc[e])return e;return 1}function Mf(n){let e=n.prayer||1,t=n.magic||1,i=.25*(n.defence+n.hitpoints+Math.floor(e/2)),s=.325*(n.attack+n.strength),r=.325*Math.floor(n.ranged*1.5),o=.325*Math.floor(t*1.5);return Math.floor(i+Math.max(s,r,o))}var Xc,$c=Ae(()=>{Xc=[0,0];{let n=0;for(let e=1;e<99;e++)n+=Math.floor(e+300*Math.pow(2,e/7)),Xc[e+1]=Math.floor(n/4)}});var wn,wf,vs,vr,Sf,Wi,Ef,Tf,Af,Rf,Cf,Pf,Lf,Zc,_s=Ae(()=>{wn={x:45,z:48},wf=n=>74+2.5*Math.sin(n/8),vs=[[73,80],[66,79],[59,76],[52,75],[45,77],[38,79],[31,77],[24,74],[16,75]],vr=[{id:"graveyard",name:"Dry Gulch Churchyard",x0:60,z0:30,x1:66,z1:37,music:"town",blessed:!0},{id:"drygulch",name:"Dry Gulch",x0:28,z0:28,x1:66,z1:60,music:"town"},{id:"copperhills",name:"Copper Hills",x0:34,z0:3,x1:64,z1:24,music:"hills"},{id:"miningcamp",name:"Mining Camp",x0:38,z0:3,x1:58,z1:14,music:"hills",boss:"cave_golem"},{id:"redmesa",name:"Red Mesa",x0:5,z0:5,x1:24,z1:24,music:"desert",boss:"mesa_rattler"},{id:"ghosttown",name:"Ghost Town",x0:5,z0:78,x1:24,z1:92,music:"danger",boss:"phantom_outlaw"},{id:"frontierfort",name:"Frontier Fort",x0:78,z0:5,x1:93,z1:22,music:"danger",boss:"fort_captain"},{id:"banditcamp",name:"Bandit Camp",x0:78,z0:34,x1:93,z1:58,music:"danger"},{id:"wyrmlair",name:"Dust Wyrm Lair",x0:80,z0:69,x1:93,z1:83,music:"danger",boss:"dust_wyrm"},{id:"creek",name:"Willow Creek",x0:14,z0:72,x1:68,z1:82,music:"river"},{id:"river",name:"Rattler River",x0:68,z0:0,x1:80,z1:96,music:"river"},{id:"desert",name:"Dry Gulch Desert",x0:0,z0:0,x1:96,z1:96,music:"desert"}],Sf=[{x0:18,z0:47,x1:92,z1:49},{x0:49,z0:20,x1:50,z1:47},{x0:51,z0:37,x1:59,z1:38},{x0:50,z0:49,x1:51,z1:84},{x0:18,z0:14,x1:49,z1:15},{x0:14,z0:15,x1:15,z1:47},{x0:14,z0:84,x1:50,z1:85},{x0:14,z0:78,x1:15,z1:84},{x0:78,z0:15,x1:92,z1:16},{x0:85,z0:16,x1:86,z1:34}],Wi=[{id:"bank",name:"BANK",x:35,z:39,w:6,d:5,door:"S",wall:12098160,roof:6961706,npc:"banker",npcAt:[37,40]},{id:"store",name:"GENERAL STORE",x:42,z:39,w:6,d:5,door:"S",wall:10122832,roof:4872762,npc:"storekeeper",npcAt:[43,40]},{id:"gunsmith",name:"GUNSMITH",x:52,z:39,w:6,d:5,door:"S",wall:8018490,roof:3815994,npc:"gunsmith",npcAt:[54,40]},{id:"stable",name:"STABLE",x:35,z:52,w:7,d:5,door:"N",wall:9058858,roof:5909018,npc:"stablehand",npcAt:[38,54]},{id:"saloon",name:"SALOON",x:43,z:52,w:7,d:6,door:"N",wall:10518616,roof:5913120,two:!0,npc:"bartender",npcAt:[45,56]},{id:"sheriff",name:"SHERIFF",x:53,z:52,w:7,d:5,door:"N",wall:12626048,roof:3811866,npc:"sheriff",npcAt:[55,55]},{id:"church",name:"CHURCH",x:53,z:30,w:6,d:7,door:"S",wall:15789280,roof:5921378,steeple:!0,npc:"preacher",npcAt:[56,32]}],Ef=[...[36,37,38].map(n=>({type:"bank_counter",x:n,z:41})),{type:"vault",x:39,z:40},{type:"shelf",x:36,z:40},{type:"counter",x:43,z:41},{type:"counter",x:44,z:41},{type:"shelf",x:45,z:40},{type:"shelf",x:46,z:40},{type:"barrel",x:46,z:42},{type:"counter",x:53,z:41},{type:"counter",x:54,z:41},{type:"workbench",x:53,z:40},{type:"forge",x:56,z:40},{type:"gun_rack",x:55,z:40},{type:"stall",x:37,z:55},{type:"stall",x:39,z:55},{type:"hay",x:36,z:53},{type:"hay",x:40,z:53},{type:"bar_counter",x:44,z:55},{type:"bar_counter",x:45,z:55},{type:"bar_counter",x:46,z:55},{type:"range",x:48,z:56},{type:"piano",x:44,z:53},{type:"saloon_stairs",x:48,z:55},{type:"saloon_table",x:45,z:54},{type:"desk",x:55,z:54},...[53,54,55].map(n=>({type:"jail_bars",x:57,z:n})),{type:"cot",x:58,z:54},{type:"wanted_bart",x:54,z:55,wall:.78},{type:"wanted_kid",x:56,z:55,wall:.78},{type:"bounty_board",x:53,z:55,wall:.78},{type:"altar",x:55,z:31},...[33,34].flatMap(n=>[{type:"pew",x:54,z:n},{type:"pew",x:57,z:n}]),{type:"headstone",x:61,z:32,text:"Here lies Les Moore. Four slugs from a .44 - no Les, no more."},{type:"headstone",x:63,z:32,text:"Ike Clanton. Should have stayed home."},{type:"headstone",x:65,z:32,text:'Martha "Ma" Dunn Sr. Best biscuits west of the Pecos.'},{type:"headstone",x:61,z:35,text:"Unknown cowpoke. Died with his boots on."},{type:"headstone",x:63,z:35,text:"Deputy Hank Ross. He held the line."},{type:"headstone",x:65,z:35,text:"Old Blue, the best hound in Dry Gulch."},{type:"church_bell",x:59,z:37},{type:"bakery_stall",x:40,z:50},{type:"fur_stall",x:32,z:46},{type:"stagecoach",x:63,z:51,rot:Math.PI},{type:"coach_stop",x:61,z:50},{type:"coach_stop",x:52,z:25},{type:"coach_stop",x:78,z:50},{type:"coach_stop",x:77,z:71},{type:"coach_stop",x:16,z:16},{type:"coach_stop",x:16,z:84},{type:"coach_stop",x:86,z:16},{type:"craft_table",x:33,z:44}],Tf=[{type:"pianist",x:45,z:53},{type:"hostess",x:46,z:54},{type:"patron_miner",x:48,z:54},{type:"patron_gambler",x:47,z:53},{type:"horse",x:36,z:55},{type:"horse",x:38,z:55},{type:"horse",x:40,z:55}],Af=[{type:"well",x:51,z:45},{type:"campfire",x:52,z:59},{type:"signpost",x:61,z:46},{type:"barrel",x:41,z:45},{type:"barrel",x:58,z:44},{type:"barrel",x:52,z:56},{type:"trough",x:32,z:55},{type:"barrel",x:33,z:44},{type:"fence",x:35,z:44},{type:"trough",x:60,z:69},{type:"barrel",x:41,z:67},{type:"chicken_coop",x:41,z:63},{type:"campfire",x:86,z:46},{type:"tent",x:83,z:40},{type:"tent",x:89,z:41},{type:"tent",x:84,z:52},{type:"tent",x:90,z:52},{type:"rock_copper",x:44,z:19},{type:"rock_copper",x:45,z:21},{type:"rock_copper",x:46,z:18},{type:"rock_copper",x:53,z:20},{type:"rock_copper",x:54,z:22},{type:"rock_copper",x:52,z:18},{type:"rock_iron",x:42,z:14},{type:"rock_iron",x:44,z:13},{type:"rock_iron",x:55,z:14},{type:"rock_iron",x:57,z:15},{type:"rock_silver",x:47,z:9},{type:"rock_silver",x:53,z:9},{type:"rock_gold",x:50,z:7},{type:"fish_net",river:!0,z:30},{type:"fish_net",river:!0,z:36},{type:"fish_net",river:!0,z:58},{type:"fish_net",river:!0,z:64},{type:"fish_rod",river:!0,z:22},{type:"fish_rod",river:!0,z:72},{type:"fish_net",creek:!0,x:41},{type:"fish_net",creek:!0,x:57},{type:"pan_spot",creek:!0,x:33},{type:"pan_spot",river:!0,z:42},{type:"pan_spot",river:!0,z:53},{type:"pan_spot",river:!0,z:26},{type:"farm_plot",x:46,z:58},{type:"farm_plot",x:48,z:58},{type:"farm_plot",x:50,z:58},{type:"herb_patch",x:30,z:42},{type:"herb_patch",x:28,z:50},{type:"agility_obs",x:48,z:55,agilityId:"ag_saloon"},{type:"agility_obs",x:48,z:53,agilityId:"ag_saloon_gap"},{type:"agility_obs",x:52,z:52,agilityId:"ag_sheriff"},{type:"agility_obs",x:55,z:50,agilityId:"ag_main"},{type:"agility_obs",x:52,z:44,agilityId:"ag_gunsmith"},{type:"agility_obs",x:45,z:44,agilityId:"ag_bank"},{type:"agility_obs",x:38,z:44,agilityId:"ag_drop"},{type:"agility_obs",x:56,z:36,agilityId:"ag_church"},{type:"boulder",x:12,z:12},{type:"boulder",x:18,z:10},{type:"herb_patch",x:10,z:20},{type:"cactus",x:20,z:18},{type:"farm_plot_ghost",x:10,z:86},{type:"farm_plot_ghost",x:12,z:86},{type:"barrel",x:14,z:82},{type:"skull",x:18,z:88},{type:"tent",x:82,z:10},{type:"tent",x:88,z:10},{type:"barrel",x:85,z:12},{type:"campfire",x:48,z:12},{type:"tent",x:46,z:11},{type:"tent",x:50,z:11}],Rf=[{x0:29,z0:52,x1:34,z1:58,gap:{x:34,z:54}},{x0:60,z0:30,x1:66,z1:37,gap:{x:60,z:36}},{x0:40,z0:62,x1:46,z1:68,gap:{x:46,z:64}},{x0:53,z0:61,x1:63,z1:71,gap:{x:53,z:64}}],Cf=[{x0:37,z0:61,x1:63,z1:72},{x0:78,z0:67,x1:93,z1:85},{x0:5,z0:5,x1:24,z1:24},{x0:5,z0:78,x1:24,z1:92},{x0:78,z0:5,x1:93,z1:22}],Pf=[{x:86,z:76,r:6,gaps:[0,Math.PI]},{x:14,z:14,r:5,gaps:[0,Math.PI]},{x:14,z:88,r:5,gaps:[Math.PI/2,-Math.PI/2]},{x:86,z:12,r:5,gaps:[0,Math.PI]},{x:50,z:6,r:4,gaps:[Math.PI/2,-Math.PI/2]}],Lf=[{type:"tree_dead",count:14,x0:20,z0:37,x1:33,z1:46},{type:"tree_dead",count:30,x0:3,z0:3,x1:66,z1:92},{type:"tree_mesquite",count:10,x0:62,z0:10,x1:70,z1:88},{type:"tree_cottonwood",count:8,x0:76,z0:4,x1:82,z1:92},{type:"cactus",count:70,x0:3,z0:3,x1:92,z1:92},{type:"boulder",count:30,x0:3,z0:3,x1:92,z1:92},{type:"boulder",count:12,x0:36,z0:4,x1:62,z1:23},{type:"skull",count:10,x0:3,z0:3,x1:92,z1:92}],Zc=[{type:"townsfolk",x:47,z:46},{type:"dust_wyrm",x:86,z:76},{type:"mesa_rattler",x:14,z:14},{type:"phantom_outlaw",x:14,z:88},{type:"fort_captain",x:86,z:12},{type:"cave_golem",x:50,z:6},{type:"fort_sentry",x:82,z:14},{type:"fort_sentry",x:90,z:14},{type:"ghost_outlaw",x:10,z:84},{type:"ghost_outlaw",x:18,z:90},{type:"ghost_outlaw",x:12,z:90},{type:"camp_foreman",x:48,z:12,wander:0},{type:"mesa_guide",x:16,z:18,wander:0},{type:"tanner",x:34,z:45,wander:0},{type:"dairy_cow",x:59,z:69,wander:2},{type:"baker",x:40,z:51,wander:0},{type:"cowpoke",x:40,z:48},{type:"cowpoke_b",x:55,z:48},{type:"townswoman",x:48,z:47},{type:"townswoman_b",x:44,z:49},{type:"cowpoke",x:52,z:48},{type:"driver",x:62,z:50,wander:0},...[[42,64],[44,66],[43,63],[45,65]].map(([n,e])=>({type:"chicken",x:n,z:e,wander:2})),...[[56,64],[58,66],[60,63],[57,69],[61,67]].map(([n,e])=>({type:"cattle",x:n,z:e,wander:3})),...[[30,66],[34,70],[42,85],[56,86],[60,84],[26,60],[66,68],[44,88]].map(([n,e])=>({type:"rattlesnake",x:n,z:e})),...[[12,30],[16,50],[10,70],[22,84],[30,16],[64,30],[20,22]].map(([n,e])=>({type:"coyote",x:n,z:e})),...[[86,43],[88,47],[87,51],[91,44],[89,40]].map(([n,e])=>({type:"bandit",x:n,z:e}))]});var If={};Eo(If,{G:()=>u,INV_SIZE:()=>_i,SPAWN_POINT:()=>wn,addXp:()=>Re,applyBoost:()=>Kc,attackRange:()=>so,attackSpeed:()=>Qc,canAdd:()=>Ie,cbLevel:()=>qi,decayBoosts:()=>jc,effLevel:()=>Jn,equipBonuses:()=>Xi,equipFromSlot:()=>eh,freshState:()=>Jc,invAdd:()=>Se,invCount:()=>Kn,invFree:()=>ka,invHas:()=>pe,invRemove:()=>rt,invRemoveSlot:()=>Yi,level:()=>ae,msg:()=>A,questPoints:()=>ro,questStage:()=>Cn,setQuestStage:()=>_r,unequip:()=>Da,weapon:()=>Bn,weaponStyle:()=>$i});function Jc(){u.skills={};for(let n of Zn)u.skills[n.id]=yr(n.start||1);u.inv=new Array(_i).fill(null),u.equip={},u.bank=[{id:"bread",qty:5}],u.coins=25,u.quests={},u.style="accurate",u.run=!0,u.runEnergy=100,u.spec=100,u.specArmed=!1,u.autoRetaliate=!0;for(let n of["hatchet","pickaxe","small_net","tinderbox","old_revolver","bread","bread"])Se(n,1,!0);u.equip.weapon="rusty_knife"}function A(n,e="game"){K("msg",n,e)}function Kc(n){u.boosts=u.boosts||{};for(let[e,t]of Object.entries(n))u.boosts[e]=(u.boosts[e]||0)+t;K("skills")}function jc(){if(!u.boosts)return;let n=!1;for(let e of Object.keys(u.boosts)){let t=u.boosts[e];if(!t){delete u.boosts[e];continue}u.boosts[e]=t-Math.sign(t),n=!0}n&&K("skills")}function Re(n,e){if(!e)return;let t=ae(n);u.skills[n]=Math.min(2e8,(u.skills[n]||0)+e);let i=ae(n);if(K("xp",n,e),i>t){let s=Zn.find(r=>r.id===n).name;A(`Congratulations, you just advanced a ${s} level. Your ${s} level is now ${i}.`,"level"),K("levelup",n,i),n==="hitpoints"&&u.player&&(u.player.hp+=i-t)}K("skills")}function Ie(n,e=1){return n==="coins"?!0:se[n].stack?u.inv.some(i=>i&&i.id===n)||ka()>0:ka()>=e}function Se(n,e=1,t=!1){if(n==="coins")return u.coins+=e,K("coins"),!0;let i=se[n];if(!i)return console.warn("unknown item",n),!1;if(!Ie(n,e))return!1;if(i.stack){let s=u.inv.find(r=>r&&r.id===n);s?s.qty+=e:u.inv[u.inv.indexOf(null)]={id:n,qty:e}}else for(let s=0;s<e;s++)u.inv[u.inv.indexOf(null)]={id:n,qty:1};return t||K("inv"),!0}function rt(n,e=1){if(Kn(n)<e)return!1;for(let t=0;t<u.inv.length&&e>0;t++){let i=u.inv[t];if(!i||i.id!==n)continue;let s=Math.min(e,i.qty);i.qty-=s,e-=s,i.qty<=0&&(u.inv[t]=null)}return K("inv"),!0}function Yi(n){let e=u.inv[n];return u.inv[n]=null,K("inv"),e}function Xi(){let n={att:0,str:0,rng:0,rstr:0,def:0};for(let e of vf){let t=u.equip[e];if(!t)continue;let i=se[t].equip.bonus||{};for(let s in i)n[s]+=i[s]}return n}function Bn(){let n=u.equip.weapon;return n?se[n]:null}function $i(){let n=Bn();return n?n.equip.style:"melee"}function Qc(){let n=Bn();return n?n.equip.speed:4}function so(){let n=Bn();return n&&n.equip.style==="ranged"?n.equip.range:1}function eh(n){let e=u.inv[n];if(!e)return;let t=se[e.id];if(!t.equip)return;for(let[r,o]of Object.entries(t.equip.req||{}))if(ae(r)<o){A(`You need a ${r[0].toUpperCase()+r.slice(1)} level of ${o} to wield this.`);return}let i=t.equip.slot,s=u.equip[i];if(u.inv[n]=s?{id:s,qty:1}:null,u.equip[i]=e.id,i==="weapon"){let r=t.equip.style;r==="ranged"&&!["accurate","rapid"].includes(u.style)&&(u.style="accurate"),r==="melee"&&u.style==="rapid"&&(u.style="accurate")}K("inv"),K("equip")}function Da(n){let e=u.equip[n];if(e){if(ka()<1){A("You don't have enough free inventory space to do that.");return}delete u.equip[n],Se(e,1),n==="weapon"&&u.style==="rapid"&&(u.style="accurate"),K("equip")}}function _r(n,e){let t=Vi[n],i=Cn(n);u.quests[n]=e,i===0&&e>0&&A(`You have started a new quest: ${t.name}.`,"quest"),K("quests")}var _i,u,ae,Jn,qi,Kn,pe,ka,Cn,ro,ht=Ae(()=>{at();tn();Gi();Ia();$c();_s();_i=28,u={tick:0,player:null,skills:{},inv:new Array(_i).fill(null),equip:{},bank:[],coins:0,quests:{},style:"accurate",run:!0,npcs:[],objects:[],ground:[],ui:{open:null}};ae=n=>bf(u.skills[n]||0),Jn=n=>Math.max(1,ae(n)+(u.boosts&&u.boosts[n]||0));qi=()=>Mf(Object.fromEntries(Zn.map(n=>[n.id,ae(n.id)])));Kn=n=>u.inv.reduce((e,t)=>e+(t&&t.id===n?t.qty:0),0),pe=(n,e=1)=>Kn(n)>=e,ka=()=>u.inv.filter(n=>!n).length;Cn=n=>u.quests[n]||0;ro=()=>Object.entries(Vi).reduce((n,[e,t])=>n+(Cn(e)>=t.done?t.qp:0),0)});var th,kf=Ae(()=>{th={tree_dead:{name:"Dead tree",examine:"A dead, dried-out tree.",model:"tree_dead",blocks:!0,action:"Chop down",gather:{skill:"woodcutting",level:1,xp:25,items:[{id:"logs"}],tool:"hatchet",ticks:4,deplete:.35,respawn:15,verb:"You swing your hatchet at the tree.",got:"You get some logs."}},tree_mesquite:{name:"Mesquite tree",examine:"A tough, thorny desert tree.",model:"tree_mesquite",blocks:!0,action:"Chop down",gather:{skill:"woodcutting",level:15,xp:37.5,items:[{id:"mesquite_logs"}],tool:"hatchet",ticks:4,deplete:.2,respawn:20,verb:"You swing your hatchet at the mesquite.",got:"You get some mesquite logs."}},tree_cottonwood:{name:"Cottonwood tree",examine:"A tall tree that drinks from the river.",model:"tree_cottonwood",blocks:!0,action:"Chop down",gather:{skill:"woodcutting",level:30,xp:67.5,items:[{id:"cottonwood_logs"}],tool:"hatchet",ticks:4,deplete:.15,respawn:30,verb:"You swing your hatchet at the cottonwood.",got:"You get some cottonwood logs."}},rock_copper:{name:"Copper rock",examine:"This rock contains copper.",model:"rock",ore:12611642,blocks:!0,action:"Mine",gather:{skill:"mining",level:1,xp:17.5,items:[{id:"copper_ore"}],tool:"pickaxe",ticks:4,deplete:1,respawn:6,verb:"You swing your pick at the rock.",got:"You manage to mine some copper."}},rock_iron:{name:"Iron rock",examine:"This rock contains iron.",model:"rock",ore:9062970,blocks:!0,action:"Mine",gather:{skill:"mining",level:15,xp:35,items:[{id:"iron_ore"}],tool:"pickaxe",ticks:4,deplete:1,respawn:10,verb:"You swing your pick at the rock.",got:"You manage to mine some iron."}},rock_silver:{name:"Silver rock",examine:"This rock contains silver.",model:"rock",ore:14542062,blocks:!0,action:"Mine",gather:{skill:"mining",level:30,xp:40,items:[{id:"silver_ore"}],tool:"pickaxe",ticks:5,deplete:1,respawn:40,verb:"You swing your pick at the rock.",got:"You manage to mine some silver."}},rock_gold:{name:"Gold rock",examine:"This rock contains gold!",model:"rock",ore:16764976,blocks:!0,action:"Mine",gather:{skill:"mining",level:40,xp:65,items:[{id:"gold_ore"}],tool:"pickaxe",ticks:5,deplete:1,respawn:60,verb:"You swing your pick at the rock.",got:"You manage to mine some gold."}},fish_net:{name:"Fishing spot",examine:"Small fish dart about in the shallows.",model:"fishspot",blocks:!1,water:!0,action:"Net",gather:{skill:"fishing",level:1,xp:10,items:[{id:"raw_crayfish",lvl:1,xp:10},{id:"raw_sunfish",lvl:10,xp:25}],tool:"small_net",ticks:5,deplete:0,verb:"You cast out your net...",got:"You catch some fish."}},fish_rod:{name:"Fishing spot",examine:"Something big is swimming down there.",model:"fishspot",blocks:!1,water:!0,action:"Bait",gather:{skill:"fishing",level:20,xp:50,items:[{id:"raw_trout",lvl:20,xp:50},{id:"raw_catfish",lvl:30,xp:80}],tool:"fishing_rod",bait:"bait",ticks:5,deplete:0,verb:"You cast out your line...",got:"You catch a fish."}},fire:{name:"Fire",examine:"A crackling fire.",model:"fire",blocks:!0,action:"Cook",cookable:!0,temporary:!0},campfire:{name:"Campfire",examine:"A permanent cooking fire. Somebody keeps it fed.",model:"campfire",blocks:!0,action:"Cook",cookable:!0},range:{name:"Cooking range",examine:"A cast-iron range. Food burns less on this than on a fire.",model:"range",blocks:!0,action:"Cook",cookable:!0,range:!0},bank_counter:{name:"Bank counter",examine:"Polished oak, with a brass grille.",model:"bank_counter",blocks:!0,counter:!0},counter:{name:"Counter",examine:"A sturdy shop counter, worn smooth by elbows.",model:"counter",blocks:!0,counter:!0},bar_counter:{name:"Bar",examine:"Sticky. Very sticky.",model:"bar_counter",blocks:!0,counter:!0},desk:{name:"Sheriff's desk",examine:"Piled with wanted posters and cold coffee.",model:"desk",blocks:!0,counter:!0},vault:{name:"Bank safe",examine:"A Mosler safe. A skilled thief might crack it (Thieving 25).",model:"vault",blocks:!0,verb:"Crack",crack:{lvl:25,xp:70,coins:[20,60],extra:[{id:"gold_flakes",qty:[2,6],w:4},{id:"silver_ore",qty:[1,1],w:2},{id:"lucky_ring",qty:[1,1],w:1},{id:"nothing",w:6}],respawn:40,trap:[2,4]}},shelf:{name:"Shelves",examine:"Tins, sacks and bolts of cloth.",model:"shelf",blocks:!0},workbench:{name:"Workbench",examine:"Covered in springs, screws and gun oil. Good for smithing.",model:"workbench",blocks:!0,verb:"Smith",use:"smith"},gun_rack:{name:"Gun rack",examine:"Rifles and shotguns - look, don't touch.",model:"gun_rack",blocks:!0},stall:{name:"Stall divider",examine:"Keeps the horses from squabbling.",model:"stall",blocks:!0},hay:{name:"Hay bales",examine:"Fresh hay. Smells like summer.",model:"hay",blocks:!0},piano:{name:"Piano",examine:"An upright piano, slightly out of tune.",model:"piano",blocks:!0,verb:"Play",use:"piano"},chicken_coop:{name:"Chicken coop",examine:"Smells like... chickens. There might be eggs inside.",model:"coop",blocks:!0,verb:"Collect-from",use:"coop"},bakery_stall:{name:"Bakery stall",examine:"Fresh bread and cakes. Baker Bess keeps a sharp eye on it.",model:"stall_bakery",blocks:!0,verb:"Steal-from",steal:{lvl:5,xp:16,loot:[{id:"bread",w:6},{id:"cake_slice",w:3}],respawn:4,owner:"baker",notice:.25}},fur_stall:{name:"Fur stall",examine:"Pelts and hides. Tanner Jed doesn't miss much.",model:"stall_fur",blocks:!0,verb:"Steal-from",steal:{lvl:20,xp:36,loot:[{id:"coyote_pelt",w:5},{id:"cowhide",w:3},{id:"leather",w:2}],respawn:15,owner:"tanner",notice:.3}},saloon_stairs:{name:"Staircase",examine:"Stairs up to the guest rooms. Miss Lottie keeps the keys.",model:"stairs",blocks:!0,verb:"Climb-up",use:"stairs"},saloon_table:{name:"Card table",examine:"A half-finished game of poker. Somebody was bluffing.",model:"saloon_table",blocks:!0},jail_bars:{name:"Jail cell",examine:"Iron bars. The cell is empty - for now.",model:"jail_bars",blocks:!0},cot:{name:"Prison cot",examine:"Lumpy. Deserved, probably.",model:"cot",blocks:!0},wanted_bart:{name:"Wanted poster",examine:'WANTED: "Black Jack" Bart, leader of the river bandits. $500 REWARD.',model:"poster",blocks:!1},wanted_kid:{name:"Wanted poster",examine:'WANTED: The Dust Wyrm. "Big as a train, eats horses." Last seen south-east of the river.',model:"poster",blocks:!1},altar:{name:"Altar",examine:"A simple wooden altar with a brass cross.",model:"altar",blocks:!0,pray:!0},pew:{name:"Pew",examine:"A hard wooden pew. Keeps you awake through the sermon.",model:"pew",blocks:!0},headstone:{name:"Headstone",examine:"A weathered headstone.",model:"headstone",blocks:!0},church_bell:{name:"Church bell",examine:"A bronze bell on a wooden frame.",model:"bell",blocks:!0,verb:"Ring",use:"bell"},stagecoach:{name:"Stagecoach",examine:"The Dry Gulch Overland Mail. Driver Hank will take you places - for a fare.",model:"stagecoach",blocks:!0,verb:"Board",use:"coach"},coach_stop:{name:"Stagecoach stop",examine:"Ring the bell and the stagecoach comes a-runnin'.",model:"coach_stop",blocks:!0,verb:"Travel",use:"coach"},pan_spot:{name:"Gravel bar",examine:"Glints of gold in the shallow gravel.",model:"panspot",blocks:!1,water:!0,action:"Pan",gather:{skill:"mining",level:1,xp:5,items:[{id:"gold_flakes",qty:[1,2]}],tool:"gold_pan",ticks:5,deplete:0,verb:"You swirl gravel in your pan...",got:"You find some gold flakes!"}},cactus:{name:"Cactus",examine:"A saguaro. Do not hug.",model:"cactus",blocks:!0},boulder:{name:"Boulder",examine:"A big sandstone boulder.",model:"boulder",blocks:!0},well:{name:"Well",examine:"The town well. The water tastes of iron.",model:"well",blocks:!0,pray:!0},barrel:{name:"Barrel",examine:"Probably full of nails. Or whiskey.",model:"barrel",blocks:!0},trough:{name:"Water trough",examine:"For thirsty horses.",model:"trough",blocks:!0},fence:{name:"Fence",examine:"A split-rail fence.",model:"fence",blocks:!0},tent:{name:"Bandit tent",examine:"A dirty canvas tent.",model:"tent",blocks:!0},skull:{name:"Cattle skull",examine:"A bleached cattle skull.",model:"skull",blocks:!1},forge:{name:"Abe's forge",examine:"A coal forge hot enough to smelt ore.",model:"forge",blocks:!0,verb:"Smelt",use:"smelt"},anvil:{name:"Anvil",examine:"For smithing bars into gear and ammo.",model:"anvil",blocks:!0,verb:"Smith",use:"smith"},craft_table:{name:"Crafting table",examine:"Jed keeps needles and patterns here.",model:"craft_table",blocks:!0,verb:"Craft",use:"craft"},farm_plot:{name:"Farming plot",examine:"A patch of tilled earth near town.",model:"farm_plot",blocks:!1,verb:"Farm",use:"farm"},farm_plot_ghost:{name:"Haunted plot",examine:"Ashen soil. Only ghost orchid grows here.",model:"farm_plot",blocks:!1,verb:"Farm",use:"farm",ghostOnly:!0},herb_patch:{name:"Herb patch",examine:"Wild desert herbs push through the sand.",model:"herb_patch",blocks:!1,verb:"Pick",use:"herb_pick"},agility_obs:{name:"Agility obstacle",examine:"Part of the Dry Gulch rooftop course.",model:"agility_obs",blocks:!1,verb:"Climb",use:"agility"},bounty_board:{name:"Wanted Board",examine:"Bounties posted by Sheriff Calloway. Slayer assignments.",model:"poster",blocks:!0,verb:"Check",use:"bounty"},trap_bird_snare:{name:"Bird snare",examine:"A set bird snare.",model:"trap_snare",blocks:!0,verb:"Check",use:"trap"},trap_box_trap:{name:"Box trap",examine:"A set box trap.",model:"trap_box",blocks:!0,verb:"Check",use:"trap"},trap_deadfall:{name:"Deadfall trap",examine:"A set deadfall.",model:"trap_deadfall",blocks:!0,verb:"Check",use:"trap"},signpost:{name:"Signpost",examine:"Dry Gulch - Pop. 41. East: Bandit Country. North: Copper Hills.",model:"signpost",blocks:!0}};for(let[n,e]of Object.entries(th))e.id=n});function oi(n,e,t,i={}){let s=th[n],r={kind:"object",id:t1++,type:n,def:s,x:e,z:t,depleted:!1,respawnAt:0,mesh:null,...i};return Pn.push(r),Ua.set(gt(e,t),r),s.blocks&&(za[gt(e,t)]=1),r}function Fa(n){let e=Pn.indexOf(n);e>=0&&Pn.splice(e,1),Ua.get(gt(n.x,n.z))===n&&Ua.delete(gt(n.x,n.z)),n.def.blocks&&(za[gt(n.x,n.z)]=n1(n.x,n.z)?1:0)}function n1(n,e){let t=Ut[gt(n,e)];return t===_e.WATER||t===_e.CLIFF||t===_e.FLOOR}function i1(n,e){let t=1e9;for(let i=0;i<vs.length-1;i++){let[s,r]=vs[i],[o,a]=vs[i+1],l=o-s,c=a-r,h=Math.max(0,Math.min(1,((n-s)*l+(e-r)*c)/(l*l+c*c)));t=Math.min(t,Math.hypot(n-s-h*l,e-r-h*c))}return t}function Uf(){let n=io(777);for(let i=0;i<Wt;i++)for(let s=0;s<ct;s++){let r=_e.SAND,o=wf(i),a=Math.abs(s+.5-o);a<1.6?r=_e.WATER:a<4.5+xr(s/4,i/4)*2&&(r=_e.GRASS),Na(s,i,{x0:34,z0:3,x1:64,z1:23})&&xr(s/6+10,i/6)>.35&&(r=_e.ROCK);let l=i1(s+.5,i+.5);l<1.05?r=_e.WATER:l<2.8+xr(s/3,i/3)&&r===_e.SAND&&(r=_e.GRASS),(s<2||i<2||s>=ct-2||i>=Wt-2)&&(r=_e.CLIFF),Ut[gt(s,i)]=r}for(let i of Sf)for(let s=i.z0;s<=i.z1;s++)for(let r=i.x0;r<=i.x1;r++)Ms(r,s)&&(Ut[gt(r,s)]=Ut[gt(r,s)]===_e.WATER?_e.BRIDGE:_e.ROAD);for(let i of Wi){i.doorX=i.x+Math.floor(i.w/2),i.doorZ=i.door==="S"?i.z+i.d-1:i.z,i.outZ=i.door==="S"?i.z+i.d:i.z-1;for(let s=i.z;s<i.z+i.d;s++)for(let r=i.x;r<i.x+i.w;r++){let o=r===i.x||r===i.x+i.w-1||s===i.z||s===i.z+i.d-1;Ut[gt(r,s)]=o&&!(r===i.doorX&&s===i.doorZ)?_e.FLOOR:_e.INDOOR}for(let s=i.x;s<i.x+i.w;s++)Ut[gt(s,i.outZ)]===_e.SAND&&(Ut[gt(s,i.outZ)]=_e.ROAD)}for(let i=0;i<ct*Wt;i++){let s=Ut[i];za[i]=s===_e.WATER||s===_e.CLIFF||s===_e.FLOOR?1:0}r1();for(let i of Ef)oi(i.type,i.x,i.z,{text:i.text,wall:i.wall});for(let i of Af){let s=i.x,r=i.z;if(i.river)for(s=60;s<ct&&Ut[gt(s,i.z)]!==_e.WATER;)s++;if(i.creek)for(r=68;r<Wt&&Ut[gt(i.x,r)]!==_e.WATER;)r++;oi(i.type,s,r,i.rot!==void 0?{rot:i.rot}:{})}for(let i of Rf)for(let s=i.x0;s<=i.x1;s++)for(let r=i.z0;r<=i.z1;r++)!(s===i.x0||s===i.x1||r===i.z0||r===i.z1)||i.gap&&s===i.gap.x&&r===i.gap.z||jn(s,r)||It(s,r)||oi("fence",s,r,{rot:r===i.z0||r===i.z1?0:Math.PI/2});for(let i of Pf)for(let s=i.z-i.r-1;s<=i.z+i.r+1;s++)for(let r=i.x-i.r-1;r<=i.x+i.r+1;r++){if(!Ms(r,s)||It(r,s))continue;let o=Math.hypot(r-i.x,s-i.z);if(o<=i.r-.5)Ut[gt(r,s)]=_e.ARENA;else if(o<=i.r+.5){let a=Math.atan2(s-i.z,r-i.x);if(i.gaps.some(l=>Math.abs(Math.atan2(Math.sin(a-l),Math.cos(a-l)))<.35)){Ut[gt(r,s)]=_e.ARENA;continue}jn(r,s)||oi((r+s)%4===0?"skull":"boulder",r,s,{rot:(r*7+s)%6,scale:.9})}}for(let i=0;i<vs.length-1;i++){let[s,r]=vs[i],[o,a]=vs[i+1];for(let l of[.3,.75]){let c=Math.round(s+(o-s)*l),h=Math.round(r+(a-r)*l);for(let d of(i+(l>.5?1:0))%2?[-3,3]:[3]){let p=c,g=h+d;Ms(p,g)&&!It(p,g)&&!jn(p,g)&&Ut[gt(p,g)]!==_e.ROAD&&Ut[gt(p,g)]!==_e.BRIDGE&&oi((i+d)%3===0?"tree_cottonwood":"tree_mesquite",p,g,{rot:i*1.3,scale:.9})}}}let e=vr.find(i=>i.id==="drygulch");for(let i of Lf){let s=0,r=0;for(;s<i.count&&r++<i.count*60;){let o=i.x0+Math.floor(n()*(i.x1-i.x0+1)),a=i.z0+Math.floor(n()*(i.z1-i.z0+1));s1(o,a,e,i.type)&&(oi(i.type,o,a,{rot:n()*Math.PI*2,scale:.85+n()*.3}),s++)}}let t=[...Wi.filter(i=>i.npc).map(i=>({type:i.npc,x:i.npcAt[0],z:i.npcAt[1],wander:0})),...Tf.map(i=>({...i,wander:0}))];return{spawns:[...Zc,...t],spawnPoint:wn}}function s1(n,e,t,i){if(!Ms(n,e)||It(n,e))return!1;let s=Ut[gt(n,e)];if(s===_e.ROAD||s===_e.BRIDGE||Na(n,e,{x0:t.x0-1,z0:t.z0-1,x1:t.x1+1,z1:t.z1+1})||Na(n,e,{x0:79,z0:37,x1:93,z1:55})&&i!=="skull")return!1;for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){if(jn(n+o,e+r))return!1;let a=oo(n+o,e+r);if(a===_e.ROAD||a===_e.BRIDGE||a===_e.WATER)return!1}if(Vt(n,e,wn.x,wn.z)<6||Cf.some(r=>Na(n,e,r)))return!1;for(let r of Zc)if(r.x===n&&r.z===e)return!1;return!0}function r1(){for(let n=0;n<=Wt;n++)for(let e=0;e<=ct;e++){let t=0,i=0,s=0,r=0,o=0;for(let h=-1;h<=0;h++)for(let d=-1;d<=0;d++){let p=e+d,g=n+h,x=Ms(p,g)?Ut[gt(p,g)]:_e.CLIFF;o++,x===_e.WATER?t++:x===_e.BRIDGE?r++:x===_e.CLIFF?i++:(x===_e.ROAD||x===_e.FLOOR||x===_e.INDOOR)&&s++}let a=(xr(e/9,n/9)-.45)*1.6,l=vr.find(h=>h.id==="drygulch"),c=Math.max(0,Math.max(l.x0-e,e-l.x1-1,l.z0-n,n-l.z1-1));a*=Math.min(1,c/8),s&&(a*=.3),t+r===4?a=-.6:r?a=0:t&&(a=Math.min(a,-.25)),i&&(a=2.2+xr(e/3,n/3)*1.5),bs[n*(ct+1)+e]=a}}function ws(n,e){let t=Math.floor(n),i=Math.floor(e);if(oo(t,i)===_e.BRIDGE)return .18;let s=Math.max(0,Math.min(ct-.001,n)),r=Math.max(0,Math.min(Wt-.001,e)),o=Math.floor(s),a=Math.floor(r),l=s-o,c=r-a,h=bs[a*(ct+1)+o],d=bs[a*(ct+1)+o+1],p=bs[(a+1)*(ct+1)+o],g=bs[(a+1)*(ct+1)+o+1];return(h*(1-l)+d*l)*(1-c)+(p*(1-l)+g*l)*c}function br(n,e,t,i){return!(It(n+t,e+i)||t&&i&&(It(n+t,e)||It(n,e+i)))}function Ba(n,e,t,i,s,r=12e3){if(t(n,e))return[];let o=ct*Wt,a=new Float32Array(o).fill(1/0),l=new Int32Array(o).fill(-1),c=new Uint8Array(o),h=[],d=(w,y)=>{let R=Math.abs(w-i),I=Math.abs(y-s);return Math.max(R,I)+.414*Math.min(R,I)},p=(w,y)=>{h.push([w,y]);let R=h.length-1;for(;R>0;){let I=R-1>>1;if(h[I][0]<=h[R][0])break;[h[I],h[R]]=[h[R],h[I]],R=I}},g=()=>{let w=h[0],y=h.pop();if(h.length){h[0]=y;let R=0;for(;;){let I=2*R+1,P=I+1,C=R;if(I<h.length&&h[I][0]<h[C][0]&&(C=I),P<h.length&&h[P][0]<h[C][0]&&(C=P),C===R)break;[h[C],h[R]]=[h[R],h[C]],R=C}}return w},x=gt(n,e);a[x]=0,p(d(n,e),x);let v=0,m=x,f=d(n,e);for(;h.length&&v<r;){let[,w]=g();if(c[w])continue;c[w]=1,v++;let y=w%ct,R=w/ct|0;if(t(y,R))return Df(l,w);let I=d(y,R);I<f&&(f=I,m=w);for(let[P,C]of o1){if(!br(y,R,P,C))continue;let G=gt(y+P,R+C);if(c[G])continue;let b=a[w]+(P&&C?1.414:1);b<a[G]&&(a[G]=b,l[G]=w,p(b+d(y+P,R+C),G))}}return m!==x?Df(l,m):null}function Df(n,e){let t=[];for(;n[e]!==-1;)t.push({x:e%ct,z:e/ct|0}),e=n[e];return t.reverse()}function zf(n,e,t,i,s=1){return Ba(n,e,(r,o)=>Zi(r,o,t,i,s),t,i)}function Zi(n,e,t,i,s=1){if(n===t&&e===i)return s>1;if(s===1){let r=t-n,o=i-e;return Math.abs(r)+Math.abs(o)===1?!0:Math.abs(r)===1&&Math.abs(o)===1&&!It(n+r,e)&&!It(n,e+o)&&!1}return Vt(n,e,t,i)<=s}function Ss(n,e,t,i){let s=Math.sign(t-n),r=Math.sign(i-e);return(s||r)&&br(n,e,s,r)?{x:n+s,z:e+r}:s&&br(n,e,s,0)?{x:n+s,z:e}:r&&br(n,e,0,r)?{x:n,z:e+r}:null}var ct,Wt,_e,Ut,za,bs,Ua,Pn,gt,Ms,It,oo,jn,Nf,Oa,Na,t1,o1,nh,ai=Ae(()=>{at();_s();kf();ct=96,Wt=96,_e={SAND:0,ROAD:1,GRASS:2,WATER:3,BRIDGE:4,ROCK:5,FLOOR:6,CLIFF:7,ARENA:8,INDOOR:9},Ut=new Uint8Array(ct*Wt),za=new Uint8Array(ct*Wt),bs=new Float32Array((ct+1)*(Wt+1)),Ua=new Map,Pn=[],gt=(n,e)=>e*ct+n,Ms=(n,e)=>n>=0&&e>=0&&n<ct&&e<Wt,It=(n,e)=>!Ms(n,e)||za[gt(n,e)]===1,oo=(n,e)=>Ms(n,e)?Ut[gt(n,e)]:_e.CLIFF,jn=(n,e)=>Ua.get(gt(n,e)),Nf=(n,e)=>Wi.find(t=>n>t.x&&n<t.x+t.w-1&&e>t.z&&e<t.z+t.d-1)||null,Oa=(n,e)=>vr.find(t=>n>=t.x0&&n<=t.x1&&e>=t.z0&&e<=t.z1),Na=(n,e,t)=>n>=t.x0&&n<=t.x1&&e>=t.z0&&e<=t.z1,t1=1;o1=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];nh=(n,e,t,i)=>Ba(n,e,(s,r)=>s===t&&r===i,t,i)});function M(n,e,t={}){let i=n.index?n.toNonIndexed():n.clone(),s=new Gt().compose(new U(t.x||0,t.y||0,t.z||0),new ri().setFromEuler(new ur(t.rx||0,t.ry||0,t.rz||0)),new U(t.sx??t.s??1,t.sy??t.s??1,t.sz??t.s??1));i.applyMatrix4(s),Ha.set(e);let r=i.attributes.position.count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=Ha.r,o[a*3+1]=Ha.g,o[a*3+2]=Ha.b;i.setAttribute("color",new cn(o,3));for(let a of Object.keys(i.attributes))["position","color"].includes(a)||i.deleteAttribute(a);return i}function le(n){let e=0;for(let o of n)e+=o.attributes.position.count;let t=new Float32Array(e*3),i=new Float32Array(e*3),s=0;for(let o of n)t.set(o.attributes.position.array,s*3),i.set(o.attributes.color.array,s*3),s+=o.attributes.position.count;let r=new vn;return r.setAttribute("position",new cn(t,3)),r.setAttribute("color",new cn(i,3)),r.computeVertexNormals(),r.computeBoundingSphere(),r}function dt(n){return new Mt(n,rh)}function Of(n,e){return ih.has(n)||ih.set(n,e()),ih.get(n)}function Ff(n){return Of("rock"+n,()=>le([M(Ji(.5),9075306,{y:.3,sy:.75}),M(Ji(.32),8022618,{x:.3,y:.2,z:-.2}),M(nn(.1),n,{x:.15,y:.62,z:.25}),M(nn(.09),n,{x:-.3,y:.42,z:.25}),M(nn(.08),n,{x:.4,y:.35,z:.1})]))}function Ts(n){return Of(n,a1[n]||oh[n])}function l1(n){let e=document.createElement("canvas");e.width=256,e.height=64;let t=e.getContext("2d");t.fillStyle="#e8d8b0",t.fillRect(0,0,256,64),t.strokeStyle="#3a2410",t.lineWidth=6,t.strokeRect(3,3,250,58),t.fillStyle="#3a2410",t.font="bold 34px Georgia, serif",t.textAlign="center",t.textBaseline="middle",t.fillText(n,128,34,236);let i=new ga(e);return i.colorSpace=Bt,i}function Bf(n){let e=new At,t=n.w,i=n.d,s=n.two?2.6:1.8,r=s+.7,o=.7,a=n.wall,l=3811866,c=(n.doorX??n.x+Math.floor(t/2))+.5-(n.x+t/2),h=n.door==="N"?-c:c,d=h-.5-(-t/2-.05),p=t/2+.05-(h+.5),g=[M(L(t-.1,.06,i-.1),8018488,{y:.03}),M(L(d,r,o),a,{x:-t/2-.05+d/2,y:r/2,z:i/2-o/2}),M(L(p,r,o),a,{x:t/2+.05-p/2,y:r/2,z:i/2-o/2}),M(L(1,r-1.25,o),a,{x:h,y:1.25+(r-1.25)/2,z:i/2-o/2}),M(L(1.04,.08,o+.04),l,{x:h,y:1.25,z:i/2-o/2}),M(L(t,s,o),a,{y:s/2,z:-i/2+o/2}),M(L(o,s,i),a,{x:-t/2+o/2,y:s/2}),M(L(o,s,i),a,{x:t/2-o/2,y:s/2}),M(L(t+.2,.12,.25),l,{y:r,z:i/2}),M(L(.06,1.25,.12),l,{x:h-.5,y:.62,z:i/2-o/2}),M(L(.06,1.25,.12),l,{x:h+.5,y:.62,z:i/2-o/2}),M(L(.6,.45,.05),10141904,{x:h<0?t/2-.8:-t/2+.8,y:1,z:i/2+.01}),M(L(t,.08,.9),8018490,{y:.04,z:i/2+.45}),M(L(t+.1,.06,1),n.roof,{y:1.55,z:i/2+.5,rx:.12}),M(L(.08,1.55,.08),l,{x:-t/2+.1,y:.78,z:i/2+.9}),M(L(.08,1.55,.08),l,{x:t/2-.1,y:.78,z:i/2+.9})];n.two&&g.push(M(L(.6,.45,.05),10141904,{x:0,y:2.1,z:i/2+.01}),M(L(t,.08,.5),l,{y:1.95,z:i/2+.25})),n.steeple&&g.push(M(L(1.3,1.6,1.3),a,{y:r+.8,z:i/2-.65}),M(xt(1,1.6,4),n.roof,{y:r+2.4,z:i/2-.65,ry:Math.PI/4}),M(L(.7,.6,1.32),2763312,{y:r+1,z:i/2-.65}),M(xt(.22,.35,8),11569712,{y:r+1.05,z:i/2-.65}),M(L(.08,.6,.08),14200880,{y:r+3.45,z:i/2-.65}),M(L(.36,.08,.08),14200880,{y:r+3.55,z:i/2-.65})),e.add(dt(le(g)));let x=dt(le([M(L(t,.12,i),n.roof,{y:s+.06}),M(L(t-.5,.06,i-.5),n.roof,{y:s+.15}),M(L(.25,.5,.25),5917248,{x:t/2-.6,y:s+.35,z:-i/2+.6})]));x.userData.roof=!0,e.add(x),e.userData.roof=x;let v=new Mt(new Bi(Math.min(t-.4,3.4),.8),new yn({map:l1(n.name)}));return v.position.set(0,s+.1,i/2+.01),e.add(v),e.position.set(n.x+t/2,0,n.z+i/2),n.door==="N"&&(e.rotation.y=Math.PI),e}function ao(n){let e=dt(le(n)),t=new At;return t.add(e),t}function Hf(n){return n==="knife"?dt(le([M(L(.04,.12,.05),4860442,{y:-.06}),M(L(.02,.28,.06),13158608,{y:-.26})])):n==="sabre"?dt(le([M(L(.04,.12,.05),9071136,{y:-.06}),M(L(.02,.6,.05),14211296,{y:-.42,rz:.08})])):n==="revolver"?dt(le([M(L(.05,.14,.06),5913120,{y:-.07}),M(L(.06,.08,.3),4210760,{y:-.16,z:.12})])):n==="rifle"?dt(le([M(L(.06,.1,.35),6965802,{y:-.1,z:-.05}),M(L(.04,.05,.7),3684415,{y:-.08,z:.45})])):null}function Gf(n={},e=!1){let t=new At,i=n.skin??14196848,s=n.shirt??8014378,r=n.pants??3820138,o=n.hat??6965802,a=ao([M(L(.14,.45,.16),r,{y:-.22}),M(L(.15,.1,.22),2759184,{y:-.47,z:.03})]),l=ao([M(L(.14,.45,.16),r,{y:-.22}),M(L(.15,.1,.22),2759184,{y:-.47,z:.03})]);a.position.set(-.09,.5,0),l.position.set(.09,.5,0);let c=[M(L(.36,.45,.2),s,{y:.72}),M(L(.38,.06,.22),2759184,{y:.52})];n.vest&&c.push(M(L(.37,.4,.21),n.vest,{y:.74,sz:1.02,sx:1.01}),M(L(.12,.38,.22),s,{y:.75})),e&&c.push(M(ke(.2,.28,.3,6),s,{y:.42})),n.badge&&c.push(M(nn(.04),16766720,{x:-.1,y:.82,z:.12})),n.scarf&&c.push(M(L(.22,.1,.05),n.scarf,{y:1,z:.1}));let h=dt(le(c)),d=ao([M(L(.11,.42,.12),s,{y:-.2}),M(L(.1,.08,.1),i,{y:-.44})]),p=ao([M(L(.11,.42,.12),s,{y:-.2}),M(L(.1,.08,.1),i,{y:-.44})]);d.position.set(-.25,.93,0),p.position.set(.25,.93,0);let g=[M(L(.22,.24,.22),i,{y:1.08}),M(L(.04,.04,.02),2236962,{x:-.05,y:1.1,z:.11}),M(L(.04,.04,.02),2236962,{x:.05,y:1.1,z:.11})];n.beard&&g.push(M(L(.23,.12,.08),14209216,{y:.98,z:.09})),e&&g.push(M(L(.24,.3,.1),6961690,{y:1.02,z:-.1})),n.hat!==null&&g.push(M(ke(.3,.3,.03,10),o,{y:1.22}),M(ke(.12,.14,.16,8),o,{y:1.3}));let x=dt(le(g)),v=new At;return v.position.set(0,-.44,.04),p.add(v),t.add(a,l,h,d,p,x),{group:t,parts:{legL:a,legR:l,armL:d,armR:p},hand:v,height:1.4}}function Vf(n){let e=new At,t=[];for(let r=0;r<8;r++){let o=dt(le([M(nn(.07-r*.004),r%2?n.band:n.body,{sx:1.4})]));o.position.set(0,.06,.25-r*.09),e.add(o),t.push(o)}let i=dt(le([M(L(.12,.07,.15),n.body,{}),M(L(.02,.02,.02),1118481,{x:.04,y:.03,z:.05}),M(L(.02,.02,.02),1118481,{x:-.04,y:.03,z:.05})]));i.position.set(0,.12,.36),e.add(i);let s=dt(le([M(xt(.04,.12,5),14207136,{rx:-Math.PI/2})]));return s.position.set(0,.15,-.5),e.add(s),{group:e,parts:{segs:t,head:i,rattle:s},height:.4}}function Wf(n){let e=new At;e.add(dt(le([M(L(.26,.24,.6),n.body,{y:.45}),M(L(.2,.2,.22),n.body,{y:.6,z:.36}),M(L(.1,.1,.18),n.dark,{y:.56,z:.53}),M(xt(.05,.14,4),n.dark,{x:-.07,y:.76,z:.32}),M(xt(.05,.14,4),n.dark,{x:.07,y:.76,z:.32}),M(ke(.03,.06,.35,5),n.dark,{y:.45,z:-.42,rx:-.9})])));let t=[];for(let[i,s]of[[-.09,.22],[.09,.22],[-.09,-.22],[.09,-.22]]){let r=ao([M(L(.07,.34,.07),n.dark,{y:-.17})]);r.position.set(i,.36,s),e.add(r),t.push(r)}return{group:e,parts:{legs:t},height:.9}}function qf(n){let e=new At,t=dt(le([M(nn(.16),n.body,{y:.24,sz:1.3}),M(nn(.09),n.body,{y:.42,z:.14}),M(xt(.03,.08,4),14721056,{y:.41,z:.25,rx:Math.PI/2}),M(L(.03,.06,.08),12591136,{y:.52,z:.14}),M(xt(.1,.18,4),n.dark,{y:.32,z:-.2,rx:-.9})]));e.add(t);let i=[];for(let s of[-.05,.05]){let r=new At;r.add(dt(le([M(L(.02,.14,.02),14721056,{y:-.07})]))),r.position.set(s,.14,0),e.add(r),i.push(r)}return{group:e,parts:{legs:i,peck:t},height:.6}}function Yf(n){let e=new At;e.add(dt(le([M(L(.4,.36,.8),n.body,{y:.62}),M(L(.3,.2,.25),n.dark,{y:.7,z:.1,x:.06,sx:1.4}),M(L(.24,.24,.28),n.body,{y:.78,z:.5}),M(L(.18,.12,.08),14198944,{y:.7,z:.66}),M(ke(.02,.035,.32,4),15261888,{x:-.22,y:.92,z:.48,rz:1.2}),M(ke(.02,.035,.32,4),15261888,{x:.22,y:.92,z:.48,rz:-1.2}),M(ke(.02,.03,.4,4),n.dark,{y:.6,z:-.45,rx:-.3}),M(L(.12,.06,.14),14198944,{y:.44,z:-.1})])));let t=[];for(let[i,s]of[[-.14,.28],[.14,.28],[-.14,-.28],[.14,-.28]]){let r=new At;r.add(dt(le([M(L(.1,.46,.1),n.body,{y:-.23}),M(L(.11,.06,.11),2763306,{y:-.45})]))),r.position.set(i,.46,s),e.add(r),t.push(r)}return{group:e,parts:{legs:t},height:1.1}}function Xf(n,e=!1){let t=new At,i=new At,s=[],r=e?.28:1;t.add(i);for(let a=0;a<9;a++){let l=(.42-a*.03)*r,c=dt(le([M(Ji(l),a%2?n.dark:n.body,{sz:1.3}),M(xt(l*.35,l*.9,4),n.dark,{y:l*.9}),M(Ji(l*.7),n.belly,{y:-l*.45,sz:1.2})]));c.position.set(0,(.5-a*.02)*r,(.2-a*.42)*r),i.add(c),s.push(c)}let o=dt(le([M(L(.7,.5,.8),n.body,{}),M(L(.6,.18,.5),n.belly,{y:-.28,z:.15}),M(xt(.06,.32,4),16314592,{x:-.2,y:-.35,z:.42,rx:Math.PI}),M(xt(.06,.32,4),16314592,{x:.2,y:-.35,z:.42,rx:Math.PI}),M(L(.12,.1,.05),16723984,{x:-.22,y:.12,z:.41}),M(L(.12,.1,.05),16723984,{x:.22,y:.12,z:.41}),M(xt(.12,.5,4),n.dark,{y:.4,z:-.2,rx:-.6}),M(xt(.09,.4,4),n.dark,{x:-.3,y:.32,z:-.2,rx:-.6,rz:.5}),M(xt(.09,.4,4),n.dark,{x:.3,y:.32,z:-.2,rx:-.6,rz:-.5})]));return o.scale.setScalar(r),o.position.set(0,1.25*r,.55*r),i.add(o),{group:t,parts:{wyrm:s,head:o,body:i},height:e?.6:2}}function $f(){let n=new At,e=new yn({color:16724e3,transparent:!0,opacity:.6,depthWrite:!1}),t=new Mt(new fr(.32,.46,10),e);t.rotation.x=-Math.PI/2,n.add(t);let i=new yn({color:2757640,transparent:!0,opacity:.85,depthWrite:!1});for(let s=0;s<6;s++){let r=new Mt(new Bi(.06,.5),i);r.rotation.x=-Math.PI/2,r.rotation.z=s*1.05+.3,r.position.y=.01,n.add(r)}return n.userData.mat=e,n}function sh(n){return[M(L(.95,.7,.55),8016434,{y:.35}),M(L(.06,1.5,.06),4861464,{x:-.45,y:.75,z:-.25}),M(L(.06,1.5,.06),4861464,{x:.45,y:.75,z:-.25}),M(L(1.1,.06,.8),n,{y:1.5,z:.05,rx:.25}),M(L(1.1,.12,.03),15790304,{y:1.42,z:.45})]}function c1(n){return le(sh(n))}function Zf(n){let e=new At;e.add(dt(le([M(L(.34,.38,.95),n.body,{y:.85}),M(L(.2,.5,.25),n.body,{y:1.15,z:.5,rx:-.5}),M(L(.18,.2,.42),n.body,{y:1.38,z:.75}),M(L(.06,.4,.3),n.dark,{y:1.3,z:.42,rx:-.5}),M(xt(.04,.1,4),n.dark,{x:-.06,y:1.52,z:.62}),M(xt(.04,.1,4),n.dark,{x:.06,y:1.52,z:.62}),M(ke(.03,.07,.5,5),n.dark,{y:.8,z:-.55,rx:.4})])));let t=[];for(let[i,s]of[[-.11,.36],[.11,.36],[-.11,-.36],[.11,-.36]]){let r=new At;r.add(dt(le([M(L(.09,.68,.09),n.body,{y:-.34}),M(L(.1,.07,.1),2763306,{y:-.66})]))),r.position.set(i,.68,s),e.add(r),t.push(r)}return{group:e,parts:{legs:t},height:1.6}}var rh,Ha,ih,L,ke,xt,nn,Ji,a1,oh,Es,$t,Jf=Ae(()=>{Pa();rh=new pr({vertexColors:!0,flatShading:!0}),Ha=new $e,ih=new Map;L=(n,e,t)=>new On(n,e,t),ke=(n,e,t,i=6)=>new Qr(n,e,t,i),xt=(n,e,t=6)=>new ya(n,e,t),nn=(n,e=0)=>new _a(n,e),Ji=n=>new va(n,0);a1={tree_dead:()=>le([M(ke(.09,.14,1.4,5),7035461,{y:.7}),M(ke(.04,.07,.8,4),7035461,{x:.25,y:1.3,rz:-.8}),M(ke(.04,.07,.7,4),7035461,{x:-.2,y:1.15,rz:.9}),M(ke(.03,.05,.6,4),6180410,{z:.2,y:1.55,rx:.7})]),tree_mesquite:()=>le([M(ke(.1,.16,1,5),5914672,{y:.5}),M(ke(.06,.08,.7,4),5914672,{x:.2,y:1,rz:-.6}),M(nn(.55),6978106,{y:1.45,sy:.6}),M(nn(.4),8030784,{x:.45,y:1.3,sy:.6}),M(nn(.35),6254389,{x:-.35,y:1.35,z:.2,sy:.6})]),tree_cottonwood:()=>le([M(ke(.14,.22,1.8,6),9075304,{y:.9}),M(nn(.75),6986298,{y:2.2}),M(nn(.55),7907392,{x:.5,y:1.9,z:.2}),M(nn(.5),5933621,{x:-.45,y:2,z:-.2}),M(nn(.45),8040520,{y:2.8})]),stump:()=>le([M(ke(.16,.2,.3,6),7035461,{y:.15}),M(ke(.15,.15,.02,6),13150328,{y:.31})]),cactus:()=>le([M(ke(.16,.18,1.6,7),4880954,{y:.8}),M(nn(.16),4880954,{y:1.6,sy:.8}),M(ke(.1,.1,.4,6),4880954,{x:.28,y:.7,rz:Math.PI/2}),M(ke(.1,.1,.55,6),4880954,{x:.42,y:.98}),M(ke(.09,.09,.35,6),4880954,{x:-.25,y:.95,rz:Math.PI/2}),M(ke(.09,.09,.45,6),4880954,{x:-.38,y:1.2})]),boulder:()=>le([M(Ji(.5),11569760,{y:.3,sy:.7}),M(Ji(.3),10517077,{x:.35,y:.18,z:.2})]),rock_depleted:()=>le([M(Ji(.45),8024168,{y:.25,sy:.6})]),well:()=>le([M(ke(.45,.5,.6,8),9076856,{y:.3}),M(ke(.38,.38,.05,8),2771562,{y:.55}),M(L(.08,1,.08),7031338,{x:-.4,y:1}),M(L(.08,1,.08),7031338,{x:.4,y:1}),M(xt(.7,.4,4),6961706,{y:1.65,ry:Math.PI/4})]),barrel:()=>le([M(ke(.25,.25,.65,8),8018485,{y:.33}),M(ke(.26,.26,.05,8),3815994,{y:.15}),M(ke(.26,.26,.05,8),3815994,{y:.5})]),trough:()=>le([M(L(.9,.35,.45),7031338,{y:.18}),M(L(.8,.02,.35),3828362,{y:.34})]),fence:()=>le([M(L(.1,.7,.1),8018490,{x:-.45,y:.35}),M(L(.1,.7,.1),8018490,{x:.45,y:.35}),M(L(1,.08,.06),9071173,{y:.55}),M(L(1,.08,.06),9071173,{y:.3})]),tent:()=>le([M(xt(.9,1.3,4),13154448,{y:.65,ry:Math.PI/4}),M(L(.3,.6,.05),3811866,{y:.3,z:.62})]),skull:()=>le([M(L(.25,.15,.3),15657176,{y:.08}),M(xt(.05,.3,4),15657176,{x:.2,y:.15,rz:-1.2}),M(xt(.05,.3,4),15657176,{x:-.2,y:.15,rz:1.2})]),signpost:()=>le([M(L(.1,1.4,.1),7031338,{y:.7}),M(L(.7,.25,.05),10123856,{x:.25,y:1.2}),M(L(.6,.22,.05),10123856,{x:-.2,y:.9,ry:.4})]),campfire:()=>le([...[0,1,2,3,4,5,6,7].map(n=>M(Ji(.12),6972512,{x:Math.cos(n*.785)*.4,y:.06,z:Math.sin(n*.785)*.4})),M(ke(.05,.05,.6,4),4861984,{y:.08,rz:Math.PI/2,ry:.5}),M(ke(.05,.05,.6,4),4861984,{y:.1,rz:Math.PI/2,ry:-.6})]),fire_logs:()=>le([M(ke(.05,.05,.5,4),4861984,{y:.06,rz:Math.PI/2,ry:.5}),M(ke(.05,.05,.5,4),4861984,{y:.08,rz:Math.PI/2,ry:-.6})]),flame:()=>le([M(xt(.22,.6,5),16742938,{y:.35}),M(xt(.12,.4,5),16764992,{y:.3})])};oh={};oh.range=()=>le([M(L(.85,.6,.6),2763310,{y:.3}),M(L(.9,.05,.65),4868688,{y:.62}),M(L(.35,.25,.02),9058842,{y:.3,z:.31}),M(ke(.06,.06,.9,6),3815994,{x:.25,y:1.05,z:-.15}),M(ke(.12,.12,.03,8),1710618,{x:-.2,y:.66}),M(ke(.12,.12,.03,8),1710618,{x:.15,y:.66,z:.1})]);Es=8016434,$t=4861464;Object.assign(oh,{bank_counter:()=>le([M(L(1,.7,.5),Es,{y:.35}),M(L(1.02,.05,.56),10121288,{y:.72}),M(L(.9,.4,.03),13148208,{y:.98,s:1}),...[-.3,0,.3].map(n=>M(L(.03,.4,.04),11569696,{x:n,y:.98}))]),counter:()=>le([M(L(1,.75,.55),Es,{y:.38}),M(L(1.02,.05,.6),10121288,{y:.77}),M(L(.25,.2,.2),9079440,{x:.25,y:.9})]),bar_counter:()=>le([M(L(1,.8,.5),$t,{y:.4}),M(L(1.02,.06,.6),9067056,{y:.83}),M(ke(.04,.04,.22,6),2779690,{x:-.25,y:.97}),M(ke(.05,.04,.1,6),14209200,{x:.2,y:.91})]),desk:()=>le([M(L(1,.7,.6),Es,{y:.35}),M(L(.3,.02,.22),15788240,{x:-.2,y:.71,ry:.2}),M(ke(.05,.05,.1,6),3815994,{x:.3,y:.75})]),vault:()=>le([M(L(.85,1.1,.75),3816002,{y:.55}),M(ke(.14,.14,.05,10),13148208,{y:.65,z:.39,rx:Math.PI/2}),M(L(.6,.06,.02),13148208,{y:1,z:.38})]),shelf:()=>le([M(L(.95,1.5,.35),$t,{y:.75}),...[.35,.8,1.25].map((n,e)=>M(L(.85,.22,.28),[13148256,9058858,5929626][e],{y:n}))]),workbench:()=>le([M(L(.95,.08,.6),9071170,{y:.7}),...[[-.4,-.25],[.4,-.25],[-.4,.25],[.4,.25]].map(([n,e])=>M(L(.08,.7,.08),$t,{x:n,y:.35,z:e})),M(L(.4,.05,.06),4210760,{y:.77,ry:.4}),M(L(.15,.12,.15),6974064,{x:.3,y:.8})]),gun_rack:()=>le([M(L(.95,1.3,.15),$t,{y:.65,z:-.3}),...[-.3,-.1,.1,.3].map(n=>M(L(.05,1,.07),3684415,{x:n,y:.75,z:-.18,rz:.06}))]),stall:()=>le([M(L(.1,.9,1),Es,{y:.45}),M(L(.12,.08,1.02),$t,{y:.92})]),hay:()=>le([M(L(.8,.4,.5),14205040,{y:.2}),M(L(.7,.38,.48),13415520,{y:.58,ry:.3})]),piano:()=>le([M(L(.95,1.1,.45),3807760,{y:.55}),M(L(.9,.06,.25),15790320,{y:.72,z:.3}),M(L(.9,.03,.08),1710618,{y:.76,z:.25}),M(L(.4,.4,.3),5909018,{y:.2,z:.7})]),saloon_table:()=>le([M(ke(.42,.42,.05,8),2775594,{y:.62}),M(ke(.06,.1,.6,6),$t,{y:.3}),M(L(.15,.01,.1),15790320,{x:.1,y:.65,ry:.5}),M(ke(.05,.05,.06,8),13148208,{x:-.15,y:.68})]),jail_bars:()=>le([M(L(.08,1.6,1),4210760,{x:.45,y:1.55,s:1,sy:.02}),...[-.4,-.2,0,.2,.4].map(n=>M(ke(.025,.025,1.6,5),4210760,{x:.45,y:.8,z:n})),M(L(.06,.06,1),4210760,{x:.45,y:1.6})]),cot:()=>le([M(L(.5,.3,.95),$t,{y:.15}),M(L(.45,.08,.9),9079418,{y:.34})]),poster:()=>le([M(L(.42,.55,.02),15259816,{y:1.15}),M(L(.3,.2,.01),5917242,{y:1.2,z:.012}),M(L(.34,.06,.01),9050650,{y:1.36,z:.012})]),altar:()=>le([M(L(.9,.8,.55),15789280,{y:.4}),M(L(.95,.04,.6),11542560,{y:.82}),M(L(.06,.45,.04),14200880,{y:1.07}),M(L(.26,.06,.04),14200880,{y:1.17}),M(ke(.04,.04,.2,6),16314592,{x:.3,y:.94}),M(ke(.04,.04,.2,6),16314592,{x:-.3,y:.94})]),pew:()=>le([M(L(.95,.08,.4),Es,{y:.42}),M(L(.95,.5,.06),Es,{y:.7,z:-.2}),M(L(.06,.42,.4),$t,{x:-.44,y:.21}),M(L(.06,.42,.4),$t,{x:.44,y:.21})]),headstone:()=>le([M(L(.45,.6,.12),10132120,{y:.3}),M(ke(.225,.225,.12,8,1),10132120,{y:.6,rx:Math.PI/2}),M(L(.5,.06,.8),6982218,{y:.03,z:.4})]),bell:()=>le([M(L(.1,1.6,.1),$t,{x:-.4,y:.8}),M(L(.1,1.6,.1),$t,{x:.4,y:.8}),M(L(.95,.12,.12),$t,{y:1.6}),M(xt(.25,.4,8),11569712,{y:1.3}),M(nn(.05),5917216,{y:1.08})]),stagecoach:()=>le([M(L(1.1,.8,1.6),9054746,{y:.95}),M(L(1.15,.08,1.7),3809296,{y:1.38}),M(L(1,.25,.5),5910552,{y:1.5,z:-.4}),M(L(.5,.35,.05),10141904,{x:.56,y:1.05,z:.1,ry:Math.PI/2}),M(L(.5,.35,.05),10141904,{x:-.56,y:1.05,z:.1,ry:Math.PI/2}),M(L(.8,.12,.4),3809296,{y:1.3,z:.95}),...[[-.62,.55],[.62,.55],[-.62,-.55],[.62,-.55]].map(([n,e])=>M(ke(.42,.42,.08,10),4860432,{x:n,y:.42,z:e,rz:Math.PI/2})),M(L(.05,.05,1.4),$t,{x:-.2,y:.6,z:1.6}),M(L(.05,.05,1.4),$t,{x:.2,y:.6,z:1.6}),...[-.32,.32].flatMap(n=>[M(L(.3,.32,.9),6961690,{x:n,y:.85,z:2}),M(L(.18,.4,.22),6961690,{x:n,y:1.1,z:2.5,rx:-.5}),...[[-.08,1.7],[.08,1.7],[-.08,2.3],[.08,2.3]].map(([e,t])=>M(L(.07,.65,.07),4860432,{x:n+e,y:.33,z:t}))])]),stairs:()=>le([...[0,1,2,3,4].map(n=>M(L(.9,.22,.2),8016434,{y:.11+n*.22,z:.4-n*.2,sy:1+n*0})),M(L(.9,1.1,.2),4861464,{y:.55,z:-.45}),M(L(.05,1.3,1),4861464,{x:.45,y:.9,rx:.7})]),coop:()=>le([M(L(.9,.55,.7),10516560,{y:.45}),M(xt(.7,.4,4),6961706,{y:.92,ry:Math.PI/4,sz:.85}),...[[-.38,-.28],[.38,-.28],[-.38,.28],[.38,.28]].map(([n,e])=>M(L(.06,.2,.06),4861464,{x:n,y:.1,z:e})),M(L(.2,.2,.02),2759184,{y:.4,z:.36}),M(L(.1,.03,.4),8016434,{y:.2,z:.55,rx:.5})]),stall_empty:()=>c1(13154448),stall_bakery:()=>le([...sh(14198944),M(L(.25,.12,.15),13144136,{x:-.25,y:.82}),M(L(.25,.12,.15),13144136,{x:.05,y:.82}),M(ke(.14,.14,.12,8),15786224,{x:.3,y:.82})]),stall_fur:()=>le([...sh(9083498),M(L(.35,.05,.3),11044442,{x:-.2,y:.79,ry:.3}),M(L(.3,.05,.3),6967360,{x:.22,y:.8,ry:-.2})]),coach_stop:()=>le([M(L(.1,1.7,.1),$t,{y:.85}),M(L(.8,.35,.05),15259816,{y:1.45,x:.3}),M(L(.6,.06,.04),9050650,{y:1.52,x:.3,z:.03}),M(xt(.08,.15,6),11569712,{x:-.15,y:1.25})]),forge:()=>le([M(L(.9,.55,.7),3816e3,{y:.28}),M(L(.7,.45,.5),2763312,{y:.75}),M(ke(.12,.18,.5,6),4868688,{x:.35,y:1.15,z:-.1}),M(xt(.2,.25,5),16736288,{y:.95,z:.1})]),anvil:()=>le([M(L(.7,.25,.35),4868690,{y:.55}),M(L(.25,.45,.25),3816002,{y:.22}),M(L(.15,.12,.5),5921378,{y:.62,z:.1})]),craft_table:()=>le([M(L(.95,.08,.6),9071170,{y:.7}),...[[-.4,-.25],[.4,-.25],[-.4,.25],[.4,.25]].map(([n,e])=>M(L(.08,.7,.08),$t,{x:n,y:.35,z:e})),M(L(.2,.05,.2),14207136,{x:-.2,y:.78}),M(ke(.03,.03,.15,5),12632264,{x:.25,y:.85})]),farm_plot:()=>le([M(L(.95,.08,.95),5913112,{y:.04}),M(L(.85,.04,.85),3811344,{y:.08})]),farm_grown:()=>le([M(L(.95,.08,.95),5913112,{y:.04}),...[-.25,0,.25].flatMap(n=>[-.25,.25].map(e=>M(xt(.08,.35,4),4885040,{x:n,y:.25,z:e})))]),farm_growing:()=>le([M(L(.95,.08,.95),5913112,{y:.04}),...[-.2,.2].map(n=>M(xt(.05,.18,4),6990400,{x:n,y:.15,z:.1}))]),herb_patch:()=>le([M(L(.8,.05,.8),6967344,{y:.03}),M(nn(.18),4880954,{y:.2}),M(nn(.12),5933632,{x:.2,y:.18,z:-.1})]),agility_obs:()=>le([M(L(.5,.08,.5),13148208,{y:.04}),M(L(.08,.5,.08),9071152,{y:.3})]),trap_snare:()=>le([M(L(.05,.45,.05),$t,{y:.22}),M(L(.35,.02,.35),9075280,{y:.05})]),trap_box:()=>le([M(L(.55,.35,.45),Es,{y:.18}),M(L(.5,.05,.4),$t,{y:.38})]),trap_deadfall:()=>le([M(L(.7,.2,.35),6969920,{y:.35,rx:.4}),M(L(.15,.4,.15),$t,{y:.2})])})});function lh(n,e){for(let t of Wa)t.visible=!n&&t.userData.bid!==e}function tp(n){Qn=new jr({canvas:n,antialias:!0,powerPreference:"high-performance"}),Qn.setPixelRatio(Math.min(window.devicePixelRatio,window.innerWidth<700?1.75:2)),Qn.outputColorSpace=Bt,zt=new ma,zt.background=new $e(15255704),zt.fog=new pa(15255704,22,48),bi=new gn(45,1,.1,200),zt.add(new wa(16774368,9071168,1.3));let e=new Sa(16777215,1.6);e.position.set(-30,50,20),zt.add(e),u1(),d1(),f1();for(let t of Wi){let i=Bf(t);zt.add(i),i.userData.roof.userData.bid=t.id,Wa.push(i.userData.roof)}for(let t of Pn)co(t);Qf(),window.addEventListener("resize",Qf)}function Qf(){let n=Qn.domElement.clientWidth||window.innerWidth,e=Qn.domElement.clientHeight||window.innerHeight;Qn.setSize(n,e,!1),bi.aspect=n/e,bi.updateProjectionMatrix()}function u1(){let n=io(42),e=[],t=[],i=new $e,s=(o,a)=>[o,bs[a*(ct+1)+o],a];for(let o=0;o<Wt;o++)for(let a=0;a<ct;a++){let l=Ut[gt(a,o)];i.set(ch[l]);let c=(n()-.5)*.06;i.offsetHSL(0,0,c);let h=s(a,o),d=s(a+1,o),p=s(a,o+1),g=s(a+1,o+1),x=(v,m,f)=>{e.push(...v,...m,...f);for(let w=0;w<3;w++)t.push(i.r,i.g,i.b)};a+o&1?(x(h,p,d),x(d,p,g)):(x(h,p,g),x(h,g,d))}let r=new vn;r.setAttribute("position",new Rt(e,3)),r.setAttribute("color",new Rt(t,3)),r.computeVertexNormals(),lo=new Mt(r,rh),lo.userData.terrain=!0,zt.add(lo)}function d1(){let n=new Bi(ct,Wt);n.rotateX(-Math.PI/2),ah=new Mt(n,new pr({color:3836592,transparent:!0,opacity:.8})),ah.position.set(ct/2,-.22,Wt/2),zt.add(ah)}function f1(){let n=[];for(let e=0;e<Wt;e++)for(let t=0;t<ct;t++)Ut[gt(t,e)]===_e.BRIDGE&&(n.push(M(L(1,.1,1),t+e&1?9071170:8018488,{x:t+.5,y:.12,z:e+.5})),oo(t,e-1)!==_e.BRIDGE&&n.push(M(L(1,.08,.08),5913120,{x:t+.5,y:.6,z:e+.05}),M(L(.08,.5,.08),5913120,{x:t+.5,y:.37,z:e+.05})),oo(t,e+1)!==_e.BRIDGE&&n.push(M(L(1,.08,.08),5913120,{x:t+.5,y:.6,z:e+.95}),M(L(.08,.5,.08),5913120,{x:t+.5,y:.37,z:e+.95})),n.push(M(L(.15,.9,.15),4861984,{x:t+.5,y:-.3,z:e+.5})));n.length&&zt.add(dt(le(n)))}function hh(n,e){n.userData.entity=e,n.traverse(t=>{t.userData.entity=e}),Va.push(n)}function uh(n){let e=Va.indexOf(n);e>=0&&Va.splice(e,1)}function co(n){let e=new At;e.position.set(n.x+.5,ws(n.x+.5,n.z+.5),n.z+.5),n.def.water&&(e.position.y=-.16),n.wall&&(e.position.z+=n.wall),e.rotation.y=n.rot||0,n.scale&&e.scale.setScalar(n.scale),n.mesh=e,Ln(n),zt.add(e),(n.def.action||n.def.examine)&&hh(e,n)}function Ln(n){let e=n.mesh;if(!e)return;for(;e.children.length;)e.remove(e.children[0]);let t=n.def.model;if(t==="rock")e.add(dt(n.depleted?Ts("rock_depleted"):Ff(n.def.ore)));else if(t.startsWith("tree"))e.add(dt(Ts(n.depleted?"stump":t)));else if(n.def.steal)e.add(dt(Ts(n.depleted?"stall_empty":t)));else if(t==="fishspot"||t==="panspot"){if(t==="panspot")for(let s=0;s<4;s++){let r=new Mt(new ba(.05),new yn({color:16764992}));r.position.set(Math.cos(s*1.6)*.25,.05,Math.sin(s*1.6)*.25),r.userData.glint=s,e.add(r)}for(let s=0;s<2;s++){let r=new Mt(new fr(.2+s*.15,.26+s*.15,12),new yn({color:16777215,transparent:!0,opacity:.6,side:qn}));r.rotation.x=-Math.PI/2,r.userData.ripple=s,e.add(r)}let i=new Mt(new On(.9,.4,.9));i.visible=!1,e.add(i)}else if(t==="fire"||t==="campfire"){e.add(dt(Ts(t==="fire"?"fire_logs":"campfire")));let i=new Mt(Ts("flame"),new yn({vertexColors:!0}));i.userData.flame=!0,e.add(i)}else e.add(dt(Ts(t)));e.userData.entity&&e.traverse(i=>{i.userData.entity=n})}function Ya(n){n.mesh&&(zt.remove(n.mesh),uh(n.mesh),n.mesh=null)}function np(n){let e=dt(le([M(L(.28,.12,.22),n.id==="coins"?16764992:13148256,{y:.06}),M(L(.18,.05,.12),9071152,{y:.14})]));e.position.set(n.x+.5+(Math.random()-.5)*.3,ws(n.x+.5,n.z+.5),n.z+.5+(Math.random()-.5)*.3),n.mesh=e,zt.add(e),hh(e,n)}function ip(n){n.mesh&&(zt.remove(n.mesh),uh(n.mesh),n.mesh=null)}function Xa(n,e){let t;e.model==="snake"?t=Vf(e.colors):e.model==="coyote"?t=Wf(e.colors):e.model==="chicken"?t=qf(e.colors):e.model==="cow"?t=Yf(e.colors):e.model==="wyrm"?t=Xf(e.colors,e.small):e.model==="horse"?t=Zf(e.colors):t=Gf(e.colors,e.female),n.model=t,n.vx=n.x+.5,n.vz=n.z+.5,n.visQ=[],n.moveSpeed=1/.6,n.yaw=Math.random()*6;let i=new Mt(new xa(t.height>1?.3:.25,10),new yn({color:0,transparent:!0,opacity:.25,depthWrite:!1}));if(i.rotation.x=-Math.PI/2,i.position.y=.03,t.group.add(i),n.kind==="npc"){let s=new Mt(new On(.8,Math.max(.6,t.height),.8));s.position.y=Math.max(.3,t.height/2),s.visible=!1,t.group.add(s),hh(t.group,n)}e.weapon&&dh(n,e.weapon),zt.add(t.group)}function dh(n,e){let t=n.model.hand;if(!t)return;for(;t.children.length;)t.remove(t.children[0]);let i=e&&Hf(e);i&&(i.rotation.x=Math.PI/2,t.add(i))}function sp(n){return n?n.includes("rifle")?"rifle":n.includes("revolver")||n.includes("shooter")?"revolver":n.includes("sabre")?"sabre":"knife":null}function p1(n,e){let t=n.model;if(!t)return;if(t.group.visible=!n.hidden,n.visQ.length>6){let l=n.visQ[n.visQ.length-1];n.visQ.length=0,n.vx=l.x+.5,n.vz=l.z+.5}let i=!1;if(n.visQ.length){let l=n.visQ[0],c=l.x+.5,h=l.z+.5,d=c-n.vx,p=h-n.vz,g=Math.hypot(d,p),x=n.moveSpeed*e*(g>.9?1.2:1)*(n.visQ.length>3?1.6:1);g<=x?(n.vx=c,n.vz=h,n.visQ.shift()):(n.vx+=d/g*x,n.vz+=p/g*x),g>.01&&(n.targetYaw=Math.atan2(d,p)),i=!0}else if(n.face){let l=n.face,c=l.x+.5-n.vx,h=l.z+.5-n.vz;Math.abs(c)+Math.abs(h)>.01&&(n.targetYaw=Math.atan2(c,h))}if(n.targetYaw!==void 0){let l=n.targetYaw-n.yaw;l=Math.atan2(Math.sin(l),Math.cos(l)),n.yaw+=l*Math.min(1,e*12)}t.group.position.set(n.vx,ws(n.vx,n.vz),n.vz),t.group.rotation.y=n.yaw,n.dying?(n.dyingT=(n.dyingT||0)+e,t.group.rotation.z=Math.min(1.5,n.dyingT*3)):t.group.rotation.z=0;let s=t.parts,r=i?Math.sin(Zt*11)*.7:0,o=n.attackAnimT!==void 0?Fn((Zt-n.attackAnimT)/.4,0,1):1,a=o<1?Math.sin(o*Math.PI):0;if(s.legL){s.legL.rotation.x=r,s.legR.rotation.x=-r,s.armL.rotation.x=-r*.7;let l=r*.7;if(n.anim==="chop"||n.anim==="mine"?l=-1.4+Math.sin(Zt*9)*.9:(n.anim==="fish"||n.anim==="cook")&&(l=-.8+Math.sin(Zt*3)*.1),n.aiming&&(l=-1.5),n.emote&&!i){let c=Zt-n.emote.t,h=n.emote.id;if(c>2.4)n.emote=null;else{let d=Math.sin(c*12);h==="wave"?l=-2.6+d*.4:h==="cheer"||h==="yeehaw"?(l=-2.9,s.armL.rotation.x=-2.9+d*.2,t.group.position.y+=Math.abs(d)*.12):h==="clap"?(l=-1.2+d*.3,s.armL.rotation.x=-1.2-d*.3):h==="tiphat"?l=-2.8:h==="think"?l=-2.2:h==="angry"?(l=-1+d*.6,s.armL.rotation.x=-1-d*.6):h==="dance"?(t.group.rotation.y=n.yaw+c*6,t.group.position.y+=Math.abs(d)*.15,l=-1.5+d,s.armL.rotation.x=-1.5-d):h==="bow"?t.group.rotation.x=Math.sin(Math.min(1,c/1.2)*Math.PI)*.6:h==="yes"||h==="laugh"?t.group.rotation.x=Math.sin(c*10)*.08:h==="no"&&(t.group.rotation.y=n.yaw+Math.sin(c*10)*.25)}}else n.emote&&i&&(n.emote=null);n.emote||(t.group.rotation.x=0),a&&(l=n.aiming?-1.5-a*.4:-2.2*a),s.armR.rotation.x=l}else if(s.segs)s.segs.forEach((l,c)=>{l.position.x=Math.sin(Zt*5+c*.9)*.06*(i?2:1)}),s.head.position.y=.12+a*.15,s.head.position.z=.36+a*.2,s.rattle.rotation.z=Math.sin(Zt*40)*.4;else if(s.wyrm){s.wyrm.forEach((c,h)=>{c.position.x=Math.sin(Zt*3+h*.7)*.12*(i?2:1),c.position.y=c.userData.y0??(c.userData.y0=c.position.y),c.position.y+=Math.sin(Zt*2+h)*.04}),s.head.rotation.x=-a*.5;let l=n.burrowed?-2.4:0;n.sink=(n.sink??0)+(l-(n.sink??0))*Math.min(1,e*5),s.body.position.y=n.sink}else s.legs&&(s.legs.forEach((l,c)=>{l.rotation.x=(c===0||c===3?r:-r)*.8}),s.peck&&(s.peck.rotation.x=i?0:Math.max(0,Math.sin(Zt*3+n.id))*.35),t.group.position.y+=a*.15)}function rp(n,e,t){let i=$f();i.position.set(e+.5,ws(e+.5,t+.5)+.04,t+.5),zt.add(i),qa.set(n,i)}function fh(n){let e=qa.get(n);e&&(zt.remove(e),qa.delete(n))}function m1(){for(let n of qa.values())n.userData.mat.opacity=.35+Math.abs(Math.sin(Zt*8))*.5,n.scale.setScalar(1+Math.sin(Zt*8)*.08)}function op(n){n.model&&(zt.remove(n.model.group),uh(n.model.group))}function ap(n,e){let t=Math.min(.25,h1.getDelta());Zt+=t;for(let r of n)p1(r,t);m1();for(let r of Pn)if(r.mesh)for(let o of r.mesh.children){if(o.userData.flame&&o.scale.set(1+Math.sin(Zt*13+r.x)*.1,1+Math.sin(Zt*17+r.z)*.2,1),o.userData.glint!==void 0){let a=Math.sin(Zt*4+o.userData.glint*1.7);o.visible=a>.2,o.rotation.y=Zt*2}if(o.userData.ripple!==void 0){let a=1+(Zt*.8+o.userData.ripple*.5)%1*.8;o.scale.set(a,a,a),o.material.opacity=.7*(1.8-a)}}e&&(nt.tx+=(e.vx-nt.tx)*Math.min(1,t*10),nt.tz+=(e.vz-nt.tz)*Math.min(1,t*10));let i=ws(nt.tx,nt.tz)+.6,s=Math.cos(nt.pitch)*nt.dist;return bi.position.set(nt.tx+Math.sin(nt.yaw)*s,i+Math.sin(nt.pitch)*nt.dist,nt.tz+Math.cos(nt.yaw)*s),bi.lookAt(nt.tx,i,nt.tz),Qn.render(zt,bi),Zt}function Mr(n,e){nt.yaw+=n,nt.pitch=Fn(nt.pitch+e,.35,1.35)}function cp(n){lp=n}function wr(n){nt.dist=Fn(nt.dist*n,5,lp())}function hp(n){nt.tx=n.vx,nt.tz=n.vz}function Ki(n,e){let t=Qn.domElement.getBoundingClientRect();jf.set(n/t.width*2-1,-(e/t.height)*2+1),Kf.setFromCamera(jf,bi);let i=Kf.intersectObjects([lo,...Va],!0),s=null,r=null;for(let o of i)if(!s&&o.object.userData.entity&&!o.object.userData.entity.dead&&(s=o.object.userData.entity),!r&&o.object===lo&&(r={x:Math.floor(o.point.x),z:Math.floor(o.point.z)}),s&&r)break;return{entity:s,tile:r}}function $a(n,e,t){Ga.set(n,e,t).project(bi);let i=Qn.domElement.getBoundingClientRect();return{x:(Ga.x+1)/2*i.width,y:(1-Ga.y)/2*i.height,visible:Ga.z<1}}function Za(n,e){return $a(n.vx,ws(n.vx,n.vz)+(e??(n.model?n.model.height+.2:1.5)),n.vz)}function up(){Qn.render(zt,bi);let n=Qn.getContext(),e=n.drawingBufferWidth,t=n.drawingBufferHeight,i=new Uint8Array(4),s=new Set;for(let r=1;r<10;r++)for(let o=1;o<10;o++)n.readPixels(Math.floor(e*r/10),Math.floor(t*o/10),1,1,n.RGBA,n.UNSIGNED_BYTE,i),s.add(i.join(","));return s.size}var Qn,zt,bi,nt,Va,Wa,ep,lo,ah,h1,Zt,Kf,jf,ch,qa,lp,Ga,Sn=Ae(()=>{Pa();ai();_s();Jf();at();nt={yaw:0,pitch:.95,dist:17,tx:0,tz:0},Va=[],Wa=[];ep=()=>Wa.length>0&&Wa.every(n=>!n.visible),h1=new Ea,Zt=0,Kf=new Ta,jf=new je,ch={[_e.SAND]:14203e3,[_e.ROAD]:11043928,[_e.GRASS]:10135640,[_e.WATER]:6982266,[_e.BRIDGE]:6982266,[_e.ROCK]:11047032,[_e.FLOOR]:8020032,[_e.CLIFF]:12089424,[_e.ARENA]:11565128,[_e.INDOOR]:9071172};qa=new Map;lp=()=>30;Ga=new U});var ph,mh=Ae(()=>{ph={rattlesnake:{name:"Rattlesnake",examine:"Listen for the rattle.",model:"snake",colors:{body:10124111,band:4863264},combat:{level:3,hp:5,att:2,str:2,def:2,attBonus:0,defMelee:0,defRanged:0,maxHit:1,speed:4,aggressive:!1},wander:3,respawn:25,drops:{always:[{id:"bones",qty:1}],table:[{id:"snake_skin",qty:[1,1],w:5},{id:"coins",qty:[2,8],w:4},{id:"nothing",w:3}]}},coyote:{name:"Coyote",examine:"A scrawny desert dog with hungry eyes.",model:"coyote",colors:{body:11044442,dark:7033397},combat:{level:9,hp:12,att:7,str:7,def:5,attBonus:4,defMelee:2,defRanged:2,maxHit:2,speed:4,aggressive:!1},wander:5,respawn:30,drops:{always:[{id:"bones",qty:1}],table:[{id:"raw_meat",qty:[1,1],w:6},{id:"coyote_pelt",qty:[1,1],w:4},{id:"coins",qty:[5,15],w:3},{id:"nothing",w:2}]}},bandit:{name:"Bandit",examine:"A desperado. Wanted, probably.",model:"human",colors:{shirt:5906464,pants:2763306,hat:1710618,skin:13011546,scarf:11542560},weapon:"knife",combat:{level:15,hp:20,att:12,str:12,def:10,attBonus:8,defMelee:8,defRanged:4,maxHit:3,speed:4,aggressive:!0,aggroRange:3},wander:4,respawn:40,drops:{always:[{id:"bones",qty:1}],table:[{id:"coins",qty:[10,45],w:8},{id:"bandana",qty:[1,1],w:2},{id:"beans",qty:[1,1],w:3},{id:"old_revolver",qty:[1,1],w:1},{id:"iron_ore",qty:[1,2],w:2},{id:"nothing",w:3}],quest:[{id:"strongbox",quest:"strongbox_showdown",stage:2,chance:.5,unique:!0}]}},chicken:{name:"Prairie chicken",examine:"Yep, definitely a chicken.",model:"chicken",colors:{body:11569754,dark:6965802},combat:{level:1,hp:3,att:1,str:1,def:1,attBonus:-40,defMelee:-30,defRanged:-30,maxHit:1,speed:4,aggressive:!1},wander:3,respawn:15,drops:{always:[{id:"bones",qty:1},{id:"raw_chicken",qty:1},{id:"feather",qty:[5,15]}],table:[{id:"egg",qty:[1,1],w:3},{id:"nothing",w:7}]}},cattle:{name:"Cattle",examine:"A longhorn. Converts grass to beef.",model:"cow",colors:{body:15261904,dark:3811872},combat:{level:2,hp:8,att:1,str:1,def:1,attBonus:-15,defMelee:-21,defRanged:-21,maxHit:1,speed:6,aggressive:!1},wander:4,respawn:20,drops:{always:[{id:"bones",qty:1},{id:"raw_beef",qty:1},{id:"cowhide",qty:1}]}},dust_wyrm:{name:"The Dust Wyrm",examine:"A colossal sand-serpent. The ground trembles when it moves.",model:"wyrm",colors:{body:13148256,dark:9068592,belly:15257760},boss:!0,leash:8,combat:{level:25,hp:60,att:22,str:20,def:16,attBonus:10,defMelee:12,defRanged:8,maxHit:5,speed:5,aggressive:!0,aggroRange:5},special:{type:"burrow",chance:.3,warnTicks:3,minHit:9,maxHit:15,cooldown:4},wander:2,respawn:100,drops:{always:[{id:"bones",qty:1},{id:"coins",qty:[40,120]}],table:[{id:"raw_meat",qty:[2,4],w:10},{id:"coyote_pelt",qty:[2,3],w:8},{id:"bullets",qty:[25,60],w:8},{id:"wyrmscale_vest",qty:[1,1],w:2},{id:"wyrmfang_knife",qty:[1,1],w:2},{id:"nothing",w:2}],rare:[{id:"wyrmling",chance:.02,pet:!0}]}},wyrmling_pet:{name:"Wyrmling",examine:"A baby Dust Wyrm. It follows you everywhere.",model:"wyrm",small:!0,colors:{body:14200944,dark:10121280,belly:15785136},pet:!0,options:["Pick-up"]},dairy_cow:{name:"Dairy cow",examine:"A gentle milk cow. Bring a bucket.",model:"cow",colors:{body:15790314,dark:1710618},options:["Milk"],wander:2},cowpoke:{name:"Cowpoke",examine:"One of the local cowhands.",model:"human",talkFirst:!0,colors:{shirt:10115642,pants:3820138,hat:8018490,skin:14196848},options:["Talk-to"],dialogue:"townsperson",thievable:!0,combat:{level:2,hp:7,att:1,str:1,def:1,attBonus:0,defMelee:0,defRanged:0,maxHit:1,speed:4,aggressive:!1},wander:5,respawn:50,drops:{always:[{id:"bones",qty:1}],table:[{id:"coins",qty:[3,12],w:6},{id:"tobacco_pouch",qty:[1,1],w:2},{id:"bread",qty:[1,1],w:2},{id:"nothing",w:4}]}},cowpoke_b:{name:"Cowpoke",examine:"A trail-weary drover.",model:"human",talkFirst:!0,colors:{shirt:5929562,pants:4864554,hat:3811866,skin:11565136,vest:3811866},options:["Talk-to"],dialogue:"townsperson",thievable:!0,combat:{level:2,hp:7,att:1,str:1,def:1,attBonus:0,defMelee:0,defRanged:0,maxHit:1,speed:4,aggressive:!1},wander:5,respawn:50,drops:{always:[{id:"bones",qty:1}],table:[{id:"coins",qty:[3,12],w:6},{id:"tobacco_pouch",qty:[1,1],w:2},{id:"bread",qty:[1,1],w:2},{id:"nothing",w:4}]}},townswoman:{name:"Townswoman",examine:"A Dry Gulch local going about her day.",model:"human",female:!0,talkFirst:!0,colors:{shirt:5925530,pants:5925530,hat:14207136,skin:15777952},options:["Talk-to"],dialogue:"townsperson",thievable:!0,combat:{level:2,hp:7,att:1,str:1,def:1,attBonus:0,defMelee:0,defRanged:0,maxHit:1,speed:4,aggressive:!1},wander:5,respawn:50,drops:{always:[{id:"bones",qty:1}],table:[{id:"coins",qty:[3,12],w:6},{id:"tobacco_pouch",qty:[1,1],w:2},{id:"bread",qty:[1,1],w:2},{id:"nothing",w:4}]}},townswoman_b:{name:"Townswoman",examine:"She's carrying a basket of laundry.",model:"human",female:!0,talkFirst:!0,colors:{shirt:8010330,pants:8010330,hat:null,skin:13144176},options:["Talk-to"],dialogue:"townsperson",thievable:!0,combat:{level:2,hp:7,att:1,str:1,def:1,attBonus:0,defMelee:0,defRanged:0,maxHit:1,speed:4,aggressive:!1},wander:5,respawn:50,drops:{always:[{id:"bones",qty:1}],table:[{id:"coins",qty:[3,12],w:6},{id:"tobacco_pouch",qty:[1,1],w:2},{id:"bread",qty:[1,1],w:2},{id:"nothing",w:4}]}},baker:{name:"Baker Bess",examine:"Flour to the elbows. Watches her stall like a hawk.",model:"human",female:!0,colors:{shirt:15788248,pants:9071178,hat:15790320,skin:15251608},options:["Talk-to","Trade"],dialogue:"baker",shop:"bakery"},banker:{name:"Banker Hollis",examine:"He counts every coin twice.",model:"human",colors:{shirt:15261896,pants:2763328,hat:3158064,skin:14725264,vest:4206624},options:["Talk-to","Bank"],dialogue:"banker"},storekeeper:{name:"Martha Dunn",examine:"Runs the general store.",model:"human",female:!0,colors:{shirt:6983600,pants:5914672,hat:13152384,skin:15251608},options:["Talk-to","Trade"],dialogue:"storekeeper",shop:"general"},gunsmith:{name:"Gunsmith Abe",examine:"Smells of gun oil and sawdust.",model:"human",colors:{shirt:7031338,pants:3815994,hat:4864554,skin:11565136,vest:2759184},options:["Talk-to","Trade"],dialogue:"gunsmith",shop:"gunsmith"},stablehand:{name:"Ellie May",examine:"Knows every horse in the county.",model:"human",female:!0,colors:{shirt:10504762,pants:4872826,hat:9071162,skin:15777952},options:["Talk-to","Trade"],dialogue:"stablehand",shop:"stable"},sheriff:{name:"Sheriff Calloway",examine:"The law in Dry Gulch.",model:"human",quest:"strongbox_showdown",colors:{shirt:9075290,pants:3813408,hat:2760728,skin:13670512,vest:1710618,badge:!0},options:["Talk-to"],dialogue:"sheriff"},tanner:{name:"Tanner Jed",examine:"Smells like a wet coyote. Knows hides like nobody else.",model:"human",colors:{shirt:9071178,pants:4864554,hat:5914672,skin:13144176,vest:5913120,beard:!0},options:["Talk-to","Trade"],dialogue:"tanner",shop:"tanner"},bartender:{name:"Big Sal",examine:"Runs the Rusty Spur. Nobody argues with Big Sal.",model:"human",female:!0,colors:{shirt:9054794,pants:3811882,hat:null,skin:15249552},options:["Talk-to","Trade"],dialogue:"bartender",shop:"saloon"},pianist:{name:"Ivory Pete",examine:"He only knows three songs, but he plays them with feeling.",model:"human",colors:{shirt:15261904,pants:2763306,hat:2763306,skin:11565136,vest:5904922},options:["Talk-to"],dialogue:"pianist"},patron_miner:{name:"Thirsty Miner",examine:"Covered in rock dust and regret.",model:"human",colors:{shirt:6969930,pants:3816010,hat:5917242,skin:13672576,beard:!0},options:["Talk-to"],dialogue:"patron_miner"},patron_gambler:{name:"Card Sharp Lou",examine:"Has an ace up each sleeve.",model:"human",colors:{shirt:15263976,pants:1710618,hat:1710618,skin:14725264,vest:2767450},options:["Talk-to"],dialogue:"patron_gambler"},hostess:{name:"Miss Lottie",examine:"The saloon hostess, in a velvet gown and feathered hat. She rents the rooms upstairs.",model:"human",female:!0,colors:{shirt:9050666,pants:9050666,hat:2759210,skin:15780008,scarf:1710618},options:["Talk-to"],dialogue:"hostess"},preacher:{name:"Reverend Clay",examine:"A soft-spoken preacher with a hard handshake.",model:"human",colors:{shirt:1710618,pants:1710618,hat:1710618,skin:14198920,scarf:15790320},options:["Talk-to"],dialogue:"preacher"},horse:{name:"Horse",examine:"A sturdy quarter horse. Waiting for a rider.",model:"horse",colors:{body:8014378,dark:2759184},options:["Pet","Groom"],horse:!0},driver:{name:"Driver Hank",examine:"Drives the stagecoach. Has never once been on time.",model:"human",colors:{shirt:5925514,pants:4864554,hat:3811866,skin:13670512,scarf:13148208},options:["Talk-to","Travel"],dialogue:"driver"},player_horse:{name:"Your horse",examine:"Your trusty mount from Ellie May.",model:"horse",colors:{body:9067050,dark:2759184},options:["Pet","Mount"],horse:!0,owned:!0},mesa_rattler:{name:"Mesa Rattler",examine:"A colossal rattlesnake coiled among red rock.",model:"snake",colors:{body:12603440,band:6955024},boss:!0,leash:7,combat:{level:28,hp:55,att:24,str:22,def:14,attBonus:12,defMelee:10,defRanged:6,maxHit:6,speed:4,aggressive:!0,aggroRange:5},special:{type:"spit",chance:.28,warnTicks:3,minHit:8,maxHit:14,cooldown:4},wander:2,respawn:120,drops:{always:[{id:"bones",qty:1},{id:"coins",qty:[30,90]}],table:[{id:"snake_skin",qty:[2,4],w:8},{id:"mesa_fang",qty:[1,1],w:3},{id:"bullets",qty:[20,50],w:6},{id:"nothing",w:2}]}},phantom_outlaw:{name:"Phantom Outlaw",examine:"A translucent gunslinger from a town that died thirsty.",model:"human",colors:{shirt:13160664,pants:9080984,hat:10528944,skin:14213352,scarf:6318192},weapon:"revolver",boss:!0,leash:7,combat:{level:30,hp:50,att:20,str:18,def:18,attBonus:14,defMelee:8,defRanged:14,maxHit:5,speed:4,aggressive:!0,aggroRange:5},special:{type:"charge",chance:.3,warnTicks:2,minHit:7,maxHit:13,cooldown:5},wander:2,respawn:120,drops:{always:[{id:"bones",qty:1},{id:"coins",qty:[40,100]}],table:[{id:"ghost_cloak",qty:[1,1],w:2},{id:"orchid_seed",qty:[1,2],w:4},{id:"old_revolver",qty:[1,1],w:3},{id:"nothing",w:3}]}},fort_captain:{name:"Fort Captain",examine:"The hard-bitten commander of Frontier Fort.",model:"human",colors:{shirt:3820074,pants:2763296,hat:3815976,skin:13144160,vest:4864544,badge:!0},weapon:"rifle",boss:!0,leash:7,combat:{level:32,hp:65,att:26,str:24,def:20,attBonus:12,defMelee:14,defRanged:12,maxHit:6,speed:5,aggressive:!0,aggroRange:5},special:{type:"slam",chance:.25,warnTicks:3,minHit:9,maxHit:15,cooldown:5},wander:1,respawn:140,drops:{always:[{id:"bones",qty:1},{id:"coins",qty:[50,120]}],table:[{id:"fort_badge",qty:[1,1],w:3},{id:"lever_rifle",qty:[1,1],w:1},{id:"beans",qty:[2,4],w:6},{id:"nothing",w:2}]}},cave_golem:{name:"Cave Golem",examine:"Ore and grit given angry life in the deep mine.",model:"wyrm",colors:{body:9075306,dark:5917242,belly:11575440},boss:!0,leash:6,combat:{level:26,hp:70,att:18,str:22,def:24,attBonus:8,defMelee:18,defRanged:10,maxHit:5,speed:5,aggressive:!0,aggroRange:4},special:{type:"burrow",chance:.32,warnTicks:3,minHit:8,maxHit:14,cooldown:4},wander:1,respawn:130,drops:{always:[{id:"bones",qty:1},{id:"coins",qty:[35,90]}],table:[{id:"golem_core",qty:[1,1],w:2},{id:"iron_ore",qty:[3,6],w:8},{id:"silver_ore",qty:[1,2],w:4},{id:"gold_ore",qty:[1,1],w:2},{id:"nothing",w:2}]}},fort_sentry:{name:"Fort sentry",examine:"Guards the Frontier Fort stockade.",model:"human",colors:{shirt:4872762,pants:3815978,hat:4868656,skin:13672560},weapon:"rifle",combat:{level:18,hp:28,att:14,str:14,def:12,attBonus:8,defMelee:10,defRanged:8,maxHit:4,speed:5,aggressive:!0,aggroRange:4},wander:3,respawn:50,drops:{always:[{id:"bones",qty:1}],table:[{id:"coins",qty:[12,40],w:7},{id:"bullets",qty:[5,15],w:4},{id:"nothing",w:3}]}},ghost_outlaw:{name:"Ghost outlaw",examine:"A restless bandit spirit.",model:"human",colors:{shirt:11581632,pants:7370880,hat:9476256,skin:13687008,scarf:5265504},weapon:"knife",combat:{level:16,hp:22,att:14,str:12,def:10,attBonus:6,defMelee:6,defRanged:10,maxHit:3,speed:4,aggressive:!0,aggroRange:4},wander:3,respawn:45,drops:{always:[{id:"bones",qty:1}],table:[{id:"coins",qty:[8,30],w:6},{id:"grimy_orchid",qty:[1,1],w:3},{id:"nothing",w:3}]}},camp_foreman:{name:"Foreman Gus",examine:"Runs the Mining Camp with an iron voice.",model:"human",colors:{shirt:6969920,pants:3815994,hat:5917232,skin:13144176,beard:!0,vest:4864552},options:["Talk-to"],dialogue:"foreman",wander:0},mesa_guide:{name:"Canyon Kate",examine:"Knows every switchback in Red Mesa.",model:"human",female:!0,colors:{shirt:12603440,pants:5913120,hat:9062944,skin:14725264},options:["Talk-to"],dialogue:"mesa_guide",wander:0},townsfolk:{name:"Prospector Pete",examine:"Been digging for gold since '49.",model:"human",colors:{shirt:8022608,pants:4864554,hat:6969914,skin:13672576,beard:!0},options:["Talk-to"],dialogue:"prospector",wander:4}};for(let[n,e]of Object.entries(ph))e.id=n});var Ja,ji,gh=Ae(()=>{Ja=[{id:"thick_hide",name:"Thick Hide",icon:"\u{1F402}",lvl:1,drain:3,mult:{def:1.05},desc:"+5% Defence"},{id:"true_grit",name:"True Grit",icon:"\u270A",lvl:4,drain:3,mult:{str:1.05},desc:"+5% Strength"},{id:"eagle_eye",name:"Eagle Eye",icon:"\u{1F985}",lvl:7,drain:3,mult:{rng:1.05},desc:"+5% Ranged"},{id:"steady_hand",name:"Steady Hand",icon:"\u270B",lvl:10,drain:3,mult:{att:1.05},desc:"+5% Attack"},{id:"iron_hide",name:"Iron Hide",icon:"\u{1F6E1}\uFE0F",lvl:13,drain:6,mult:{def:1.1},desc:"+10% Defence",excl:"def"},{id:"lawmans_wrath",name:"Lawman's Wrath",icon:"\u2696\uFE0F",lvl:16,drain:6,mult:{att:1.1,str:1.1,rng:1.1},desc:"+10% Attack, Strength and Ranged"}],ji=Object.fromEntries(Ja.map(n=>[n.id,n]))});function dp(n){u.prayers=new Set,u.faith=n&&typeof n.faith=="number"?Math.min(n.faith,ae("prayer")):ae("prayer"),u.faithAcc=0}function Sr(n){let e=1;for(let t of u.prayers||[])e*=ji[t].mult[n]||1;return e}function Ka(n){let e=ji[n];if(u.prayers.has(n)){u.prayers.delete(n),K("faith");return}if(ae("prayer")<e.lvl){A(`You need a Faith level of ${e.lvl} to use ${e.name}.`);return}if(u.faith<=0){A("You have run out of Faith points. Pray at the town well to restore them.");return}for(let t of[...u.prayers]){let i=ji[t];Object.keys(i.mult).some(s=>s in e.mult)&&u.prayers.delete(t)}u.prayers.add(n),K("faith")}function fp(){if(!u.prayers||!u.prayers.size)return;let n=0;for(let e of u.prayers)n+=ji[e].drain;for(u.faithAcc+=n;u.faithAcc>=60;)if(u.faithAcc-=60,u.faith=Math.max(0,u.faith-1),u.faith===0){u.prayers.clear(),A("You have run out of Faith points. Pray at the town well to restore them.");break}K("faith")}function pp(){u.faith=ae("prayer"),K("faith"),A("You pray at the well. You feel your faith restored.")}var Er=Ae(()=>{ht();gh();at()});function Tr(n){let e=ph[n.type],t={kind:"npc",id:g1++,type:n.type,def:e,x:n.x,z:n.z,sx:n.x,sz:n.z,wander:n.wander??e.wander??0,hp:e.combat?e.combat.hp:10,maxHp:e.combat?e.combat.hp:10,target:null,cooldown:0,dead:!1,respawnAt:0};return u.npcs.push(t),Xa(t,e),t}function mp(n,e){return n>e?1-(e+2)/(2*(n+1)):n/(2*(e+1))}function xh(){let n=Xi();if($i()==="ranged"){let t=Math.floor(Jn("ranged")*Sr("rng"))+(u.style==="accurate"?3:0)+8;return Math.floor(.5+t*(n.rstr+64)/640)}let e=Math.floor(Jn("strength")*Sr("str"))+(u.style==="aggressive"?3:0)+8;return Math.floor(.5+e*(n.str+64)/640)}function x1(){let n=Xi();return $i()==="ranged"?(Math.floor(Jn("ranged")*Sr("rng"))+(u.style==="accurate"?3:0)+8)*(n.rng+64):(Math.floor(Jn("attack")*Sr("att"))+(u.style==="accurate"?3:0)+8)*(n.att+64)}function gp(n,e){let t=so();return t>1?Vt(n.x,n.z,e.x,e.z)<=t&&!(n.x===e.x&&n.z===e.z):Zi(n.x,n.z,e.x,e.z,1)}function xp(n,e){if(e.burrowed)return;let t=e.def.combat,i=$i()==="ranged";n.cooldown=Qc()-(i&&u.style==="rapid"?1:0),n.attackAnimT=performance.now()/1e3,n.attackStamp=!0,n.face=e;let s=Bn(),r=u.specArmed&&s&&s.equip.spec,o=1,a=1,l=1;r&&(u.specArmed=!1,u.spec>=r.cost?(u.spec-=r.cost,o=r.acc||1,a=r.dmg||1,l=r.hits||1,A(`You unleash ${r.name}!`,"combat")):A("You don't have enough special attack energy."),K("spec")),K("attackfx",n,e,i);for(let c=0;c<l&&e.hp>0;c++){let d=Lt()<mp(Math.floor(x1()*o),y1(t,i))?Math.min(e.hp,Math.floor(wt(0,xh())*a)):0;if(e.hp-=d,K("hit",e,d),d>0){let p=i?"ranged":u.style==="aggressive"?"strength":u.style==="defensive"?"defence":"attack";Re(p,d*4),Re("hitpoints",Math.round(d*4/3*10)/10)}}e.target||(e.target=n,e.cooldown=Math.max(e.cooldown,2)),e.hp<=0&&b1(e)}function b1(n){n.dead=!0,n.dying=!0,n.target=null,n.respawnAt=u.tick+n.def.respawn,n.hideAt=u.tick+2,u.player.action&&u.player.action.ent===n&&(u.player.action=null),n.special&&(fh(n.id),n.special=null,n.burrowed=!1),M1(n),n.def.boss&&(u.kc=u.kc||{},u.kc[n.type]=(u.kc[n.type]||0)+1,A(`Your ${n.def.name.replace(/^The /,"")} kill count is: ${u.kc[n.type]}.`,"quest")),K("npcdeath",n)}function M1(n){let e=n.def.drops;if(!e)return;let t=[...e.always||[]].map(i=>({id:i.id,qty:Array.isArray(i.qty)?wt(i.qty[0],i.qty[1]):i.qty}));if(e.table){let i=e.table.reduce((r,o)=>r+o.w,0),s=Lt()*i;for(let r of e.table)if(s-=r.w,s<0){r.id!=="nothing"&&t.push({id:r.id,qty:wt(r.qty[0],r.qty[1])});break}}for(let i of e.quest||[])Cn(i.quest)===i.stage&&(i.unique&&(pe(i.id)||u.ground.some(s=>s.id===i.id)||u.bank.some(s=>s.id===i.id))||Lt()<i.chance&&t.push({id:i.id,qty:1}));for(let i of e.rare||[])Lt()>=(u.forceRare?1:i.chance)||(i.pet?K("petdrop",i.id,n):t.push({id:i.id,qty:1}));for(let i of t)As(i.id,i.qty,n.x,n.z)}function As(n,e,t,i,s=300){let r={kind:"ground",id:n,qty:e,x:t,z:i,despawnAt:u.tick+s};return u.ground.push(r),np(r),K("ground"),r}function yp(n){if(u.ground.includes(n)){if(!Ie(n.id,se[n.id].stack?1:n.qty)){A("You don't have enough inventory space to hold that item.");return}Se(n.id,n.qty),yh(n),K("pickup",n.id)}}function yh(n){u.ground.splice(u.ground.indexOf(n),1),ip(n),K("ground")}function vp(n){let e=u.player,t=n.def.combat;if(n.dead){n.hideAt&&u.tick>=n.hideAt&&(n.hidden=!0,n.hideAt=0),u.tick>=n.respawnAt&&(n.dead=!1,n.dying=!1,n.dyingT=0,n.hidden=!1,n.hp=n.maxHp,n.x=n.sx,n.z=n.sz,n.visQ.push({x:n.x,z:n.z}),n.visQ.length=0,n.vx=n.x+.5,n.vz=n.z+.5);return}if(n.cooldown>0&&n.cooldown--,t&&!n.target&&t.aggressive&&!e.dead&&Vt(n.x,n.z,e.x,e.z)<=(t.aggroRange||3)&&qi()<=t.level*2&&(n.target=e,A(`${/^The /.test(n.def.name)?n.def.name:"The "+n.def.name.toLowerCase()} attacks you!`,"combat")),n.def.pet){S1(n);return}if(n.special){w1(n);return}if(n.target){let i=n.target;if(n.def.leash&&Vt(n.x,n.z,n.sx,n.sz)>n.def.leash){n.target=null;let r=Ss(n.x,n.z,n.sx,n.sz);r&&ho(n,r.x,r.z);return}let s=n.def.special;if(s&&n.cooldown<=0&&(n.specCd||0)<=0&&Zi(n.x,n.z,i.x,i.z,1)&&Lt()<s.chance){n.burrowed=!0,n.specCd=s.cooldown,n.cooldown=t.speed,n.special={x:i.x,z:i.z,at:u.tick+s.warnTicks,type:s.type||"burrow"},rp(n.id,i.x,i.z);let r={burrow:`${n.def.name} burrows into the sand! The ground cracks beneath you - move!`,spit:`${n.def.name} rears back to spit venom! Get clear!`,charge:`${n.def.name} holsters and draws for a deadly charge - move!`,slam:`${n.def.name} raises both fists for a ground slam - step aside!`};A(r[s.type]||r.burrow,"combat");return}if(i.dead||Vt(n.x,n.z,n.sx,n.sz)>14||Vt(n.x,n.z,i.x,i.z)>12){n.target=null;return}if(n.face=i,Zi(n.x,n.z,i.x,i.z,1))n.cooldown<=0&&E1(n,i);else if(n.x===i.x&&n.z===i.z){for(let[r,o]of[[1,0],[-1,0],[0,1],[0,-1]])if(br(n.x,n.z,r,o)){ho(n,n.x+r,n.z+o);break}}else{let r=Ss(n.x,n.z,i.x,i.z);r&&ho(n,r.x,r.z)}return}if(n.face=null,n.wander&&Lt()<.12){let i=n.sx+wt(-n.wander,n.wander),s=n.sz+wt(-n.wander,n.wander),r=Ss(n.x,n.z,i,s);r&&!It(r.x,r.z)&&ho(n,r.x,r.z)}}function ho(n,e,t){n.x=e,n.z=t,n.moveSpeed=1/.6,n.visQ.push({x:e,z:t})}function w1(n){let e=n.def.special,t=u.player,i=n.special;if(u.tick<i.at)return;fh(n.id);let s=i.type||e.type||"burrow",r={burrow:`${n.def.name} erupts beneath you!`,spit:`${n.def.name} douses you in venom!`,charge:`${n.def.name} guns you down mid-charge!`,slam:`${n.def.name} slams the earth into you!`},o={burrow:`You leap clear as ${n.def.name} erupts from the sand!`,spit:"You dodge the venom spray!",charge:"You sidestep the charge!",slam:"You roll clear of the slam!"};if(!t.dead&&t.x===i.x&&t.z===i.z){let a=Math.min(t.hp,wt(e.minHit,e.maxHit));t.hp-=a,K("hit",t,a),K("hp"),A(r[s]||r.burrow,"combat"),t.hp<=0&&_p()}else A(o[s]||o.burrow,"combat");!It(i.x,i.z)&&Vt(i.x,i.z,n.sx,n.sz)<=(n.def.leash||8)&&(n.x=i.x,n.z=i.z,n.visQ.length=0,n.vx=n.x+.5,n.vz=n.z+.5),n.burrowed=!1,n.special=null,n.cooldown=2}function S1(n){let e=u.player;if(Vt(n.x,n.z,e.x,e.z)>10){n.x=e.x,n.z=e.z,n.visQ.length=0,n.vx=n.x+.5,n.vz=n.z+.5;return}for(let t=0;t<2&&Vt(n.x,n.z,e.x,e.z)>1;t++){let i=Ss(n.x,n.z,e.x,e.z);if(!i)break;ho(n,i.x,i.z),n.moveSpeed=2/.6}}function E1(n,e){let t=n.def.combat;n.cooldown=t.speed,n.specCd&&n.specCd--,n.attackAnimT=performance.now()/1e3;let s=Lt()<mp(v1(t),_1())?Math.min(e.hp,wt(0,t.maxHit)):0;e.hp-=s,K("hit",e,s),K("hp"),u.autoRetaliate!==!1&&!e.action&&!e.path.length&&(e.action={type:"attack",ent:n}),e.hp<=0&&_p()}function _p(){let n=u.player;A("Oh dear, you are dead!","combat"),K("death");for(let e of u.npcs)e.target===n&&(e.target=null);n.hp=ae("hitpoints"),n.x=wn.x,n.z=wn.z,n.path=[],n.action=null,n.anim=null,n.visQ.length=0,n.vx=n.x+.5,n.vz=n.z+.5,A("You wake up in Dry Gulch. Your belongings are safe (for now).","system"),K("hp")}var g1,y1,v1,_1,Rs=Ae(()=>{ht();mh();tn();at();ai();Er();Sn();g1=1;y1=(n,e)=>(n.def+9)*((e?n.defRanged:n.defMelee)+64),v1=n=>(n.att+9)*(n.attBonus+64),_1=()=>(Math.floor(Jn("defence")*Sr("def"))+(u.style==="defensive"?3:0)+8)*(Xi().def+64)});var Cs,ja,Qa,uo,bp,Ar,Mp,fo,Rr,vh,wp,ei=Ae(()=>{Cs={copper_ore:{bar:"copper_bar",lvl:1,xp:6.2},iron_ore:{bar:"iron_bar",lvl:15,xp:12.5},silver_ore:{bar:"silver_bar",lvl:20,xp:13.7},gold_ore:{bar:"gold_bar",lvl:40,xp:22.5}},ja=[{id:"bullets_15",name:"Lead bullets (15)",lvl:1,xp:12.5,bars:{copper_bar:1},to:"bullets",qty:15},{id:"rusty_knife_s",name:"Rusty knife",lvl:5,xp:25,bars:{iron_bar:1},to:"rusty_knife",qty:1},{id:"copper_tips",name:"Copper arrow tips (15)",lvl:5,xp:12.5,bars:{copper_bar:1},to:"arrow_tips_copper",qty:15},{id:"bowie_s",name:"Bowie knife",lvl:15,xp:50,bars:{iron_bar:2},to:"bowie_knife",qty:1},{id:"iron_tips",name:"Iron bolt tips (10)",lvl:15,xp:25,bars:{iron_bar:1},to:"bolt_tips_iron",qty:10},{id:"buckler_s",name:"Iron buckler",lvl:30,xp:75,bars:{iron_bar:2,silver_bar:1},to:"buckler",qty:1},{id:"six_s",name:"Six-shooter",lvl:40,xp:100,bars:{iron_bar:3,silver_bar:1},to:"six_shooter",qty:1}],Qa=[{id:"gloves_c",name:"Leather gloves",lvl:1,xp:13.8,mats:{leather:1},to:"leather_gloves"},{id:"chaps_c",name:"Leather chaps",lvl:7,xp:25,mats:{leather:2},to:"chaps"},{id:"vest_c",name:"Leather vest",lvl:11,xp:40,mats:{leather:3},to:"leather_vest"},{id:"holster_c",name:"Gun holster",lvl:18,xp:55,mats:{leather:2},to:"gun_holster"},{id:"duster_c",name:"Hide duster",lvl:28,xp:90,mats:{leather:4},to:"hide_duster"}],uo={logs:{shaft:"arrow_shaft",qty:15,lvl:1,xp:5},mesquite_logs:{shaft:"bolt_shaft",qty:10,lvl:15,xp:10},cottonwood_logs:{shaft:"bolt_shaft_steel",qty:10,lvl:30,xp:15}},bp=[{need:"arrow_shaft",with:"feather",to:"headless_arrow",qty:15,lvl:1,xp:15},{need:"headless_arrow",with:"arrow_tips_copper",to:"bronze_arrow",qty:15,lvl:1,xp:20},{need:"bolt_shaft",with:"feather",to:"iron_bolt_u",qty:10,lvl:15,xp:20},{need:"iron_bolt_u",with:"bolt_tips_iron",to:"iron_bolt",qty:10,lvl:15,xp:30},{need:"bolt_shaft_steel",with:"feather",to:"steel_bolt",qty:10,lvl:30,xp:40}],Ar={grimy_sage:{to:"clean_sage",lvl:1,xp:2.5},grimy_snakeweed:{to:"clean_snakeweed",lvl:5,xp:5},grimy_bloom:{to:"clean_bloom",lvl:12,xp:7.5},grimy_orchid:{to:"clean_orchid",lvl:22,xp:10}},Mp=[{herb:"clean_sage",to:"attack_tonic",unfinished:"unf_sage",lvl:3,xp:25,heal:0,boost:{attack:3}},{herb:"clean_snakeweed",to:"strength_tonic",unfinished:"unf_snake",lvl:5,xp:37.5,heal:0,boost:{strength:3}},{herb:"clean_bloom",to:"defence_tonic",unfinished:"unf_bloom",lvl:12,xp:50,heal:0,boost:{defence:3}},{herb:"clean_orchid",to:"restore_tonic",unfinished:"unf_orchid",lvl:22,xp:62.5,heal:8,boost:null}],fo={potato_seed:{crop:"potato",lvl:1,xp:8,grow:40,harvestXp:14,yield:[1,4]},cabbage_seed:{crop:"cabbage",lvl:7,xp:12,grow:50,harvestXp:20,yield:[1,4]},herb_seed:{crop:"grimy_sage",lvl:15,xp:18,grow:70,harvestXp:30,yield:[1,3]},orchid_seed:{crop:"grimy_orchid",lvl:25,xp:28,grow:90,harvestXp:45,yield:[1,2]}},Rr={bird_snare:{lvl:1,xp:16,bait:null,catch:[{id:"feather",qty:[5,12],w:8},{id:"raw_chicken",qty:[1,1],w:2}],ticks:[20,40]},box_trap:{lvl:9,xp:48,bait:"carrot",catch:[{id:"raw_meat",qty:[1,1],w:6},{id:"rabbit_fur",qty:[1,1],w:4}],ticks:[30,55]},deadfall:{lvl:35,xp:96,bait:"raw_meat",catch:[{id:"coyote_pelt",qty:[1,1],w:5},{id:"bones",qty:[1,1],w:3},{id:"coins",qty:[10,30],w:2}],ticks:[40,70]}},vh=[{id:"rattlesnake",name:"Rattlesnakes",min:10,max:25,lvl:1,xp:8,coins:3},{id:"coyote",name:"Coyotes",min:10,max:20,lvl:5,xp:14,coins:6},{id:"chicken",name:"Prairie chickens",min:15,max:40,lvl:1,xp:4,coins:1},{id:"bandit",name:"Bandits",min:8,max:18,lvl:15,xp:28,coins:15},{id:"ghost_outlaw",name:"Ghost outlaws",min:6,max:12,lvl:20,xp:40,coins:25},{id:"mesa_rattler",name:"Mesa Rattler",min:1,max:1,lvl:25,xp:200,coins:100,boss:!0},{id:"dust_wyrm",name:"The Dust Wyrm",min:1,max:1,lvl:30,xp:350,coins:200,boss:!0}],wp=[{id:"ag_saloon",from:[48,55],to:[48,53],lvl:1,xp:8,failDmg:[1,2],label:"Climb saloon stairs to roof"},{id:"ag_saloon_gap",from:[48,53],to:[52,52],lvl:1,xp:12,failDmg:[1,3],label:"Leap across to the sheriff roof"},{id:"ag_sheriff",from:[52,52],to:[55,50],lvl:1,xp:10,failDmg:[1,2],label:"Shuffle along the balcony"},{id:"ag_main",from:[55,50],to:[52,44],lvl:1,xp:14,failDmg:[1,3],label:"Tightrope over Main Street"},{id:"ag_gunsmith",from:[52,44],to:[45,44],lvl:1,xp:12,failDmg:[1,2],label:"Rooftop run to the store"},{id:"ag_bank",from:[45,44],to:[38,44],lvl:10,xp:18,failDmg:[2,4],label:"Bank roof shortcut"},{id:"ag_drop",from:[38,44],to:[38,46],lvl:1,xp:6,failDmg:[1,1],label:"Drop down to the alley",lap:!0},{id:"ag_church",from:[56,36],to:[56,32],lvl:30,xp:45,failDmg:[3,6],label:"Church steeple climb"}]});function Ps(n){n.action=null,n.anim=null}function Sp(n,e){let t=e.farm||(e.farm={state:"weeds"});if(t.state==="weeds")return pe("rake")?(n.action={type:"farm",ent:e,mode:"rake",timer:3,started:!0},n.anim="chop",n.path=[],A("You rake the weeds..."),!0):(A("You need a rake to clear the weeds. Martha sells them."),!1);if(t.state==="empty"){let i=u.inv.find(r=>r&&fo[r.id]);if(!i)return A("You need seeds to plant here."),!1;if(!pe("seed_dibber"))return A("You need a seed dibber to plant. Martha sells them."),!1;let s=fo[i.id];return ae("farming")<s.lvl?(A(`You need a Farming level of ${s.lvl} to plant that.`),!1):e.def.ghostOnly&&i.id!=="orchid_seed"?(A("Only ghost orchid thrives in this haunted soil."),!1):i.id==="orchid_seed"&&!e.def.ghostOnly?(A("Ghost orchid needs Ghost Town soil."),!1):(n.action={type:"farm",ent:e,mode:"plant",seed:i.id,timer:2,started:!0},n.anim="cook",n.path=[],A(`You plant the ${se[i.id].name.toLowerCase()}...`),!0)}return t.state==="growing"?(A("The crops are still growing."),!1):t.state==="grown"?(n.action={type:"farm",ent:e,mode:"harvest",timer:2,started:!0},n.anim="chop",n.path=[],A("You harvest the crop..."),!0):!1}function Ep(n){let e=n.action,t=e.ent;if(!t)return Ps(n);if(--e.timer>0)return;let i=t.farm;if(e.mode==="rake")return i.state="empty",Ln(t),Re("farming",4),A("You clear the weeds. The plot is ready for seeds."),Ps(n);if(e.mode==="plant"){let s=fo[e.seed];return!pe(e.seed)||!pe("seed_dibber")||(rt(e.seed,1),i.state="growing",i.seed=e.seed,i.readyAt=u.tick+s.grow,i.crop=s.crop,Ln(t),Re("farming",s.xp),A("You plant the seeds. Come back when they've grown.")),Ps(n)}if(e.mode==="harvest"){let s=fo[i.seed]||{harvestXp:10,yield:[1,2],crop:i.crop},r=wt(s.yield[0],s.yield[1]);return Ie(i.crop)?(Se(i.crop,r),Re("farming",s.harvestXp),A(`You harvest ${r} x ${se[i.crop].name.toLowerCase()}.`),i.state="weeds",delete i.seed,delete i.crop,delete i.readyAt,Ln(t),Ps(n)):(A("Your inventory is too full."),Ps(n))}Ps(n)}function Tp(n){!n.farm||n.farm.state!=="growing"||u.tick>=n.farm.readyAt&&(n.farm.state="grown",Ln(n))}var _h=Ae(()=>{ht();tn();ei();at();Sn()});function Rp(n){let e=Rr[n];if(!e)return!1;if(ae("hunter")<e.lvl)return A(`You need a Hunter level of ${e.lvl} to set that.`),!1;if(!pe(n))return!1;if(e.bait&&!pe(e.bait))return A(`You need ${se[e.bait].name.toLowerCase()} as bait.`),!1;let t=u.player;if(jn(t.x,t.z)||It(t.x,t.z))return A("You can't set a trap here."),!1;rt(n,1),e.bait&&rt(e.bait,1);let i=wt(e.ticks[0],e.ticks[1]),s=oi("trap_"+n,t.x,t.z,{trap:{kind:n,catchAt:u.tick+i,caught:!1}});co(s),A(`You set a ${se[n].name.toLowerCase()}.`);for(let[r,o]of[[-1,0],[1,0],[0,-1],[0,1]])if(!It(t.x+r,t.z+o)){t.path=[{x:t.x+r,z:t.z+o}];break}return!0}function Cp(n,e){let t=e.trap;if(!t)return!1;if(!t.caught&&u.tick<t.catchAt)return A("Nothing has taken the bait yet."),!1;if(!t.caught){t.caught=!0;let i=Rr[t.kind],s=i.catch.reduce((o,a)=>o+a.w,0),r=Lt()*s;for(let o of i.catch)if(r-=o.w,r<0){t.loot={id:o.id,qty:Array.isArray(o.qty)?wt(o.qty[0],o.qty[1]):o.qty};break}}return t.loot?Ie(t.loot.id)?(Se(t.loot.id,t.loot.qty),Re("hunter",Rr[t.kind].xp),A(`You catch some ${se[t.loot.id].name.toLowerCase()}!`),Ap(e,t.kind),!0):(A("Your inventory is too full."),!1):(A("The trap was empty. You dismantle it."),Ap(e,t.kind),!0)}function Ap(n,e){Ya(n),Fa(n),Ie(e)&&Se(e,1)}function Pp(n){!n.trap||n.trap.caught||u.tick>=n.trap.catchAt&&(n.trap.caught=!0,Ln(n))}var bh=Ae(()=>{ht();tn();ei();ai();Sn();at();at();We("npcdeath",n=>{n.type==="coyote"&&ae("hunter")>=21&&(Re("hunter",22),A("Your tracking experience helps you claim the kill. (+Hunter XP)","game"))})});function Lp(n,e){let t=e.def.gather;return e.depleted?(A(e.def.model==="rock"?"There is currently no ore available in this rock.":"This tree has been cut down."),!1):ae(t.skill)<t.level?(A(`You need a ${Hi[t.skill].name} level of ${t.level} to do that.`),!1):pe(t.tool)?Ie(t.items[0].id)?t.bait&&!pe(t.bait)?(A(`You need ${se[t.bait].name.toLowerCase()} to fish here.`),!1):(A(t.verb),n.anim=t.skill==="woodcutting"?"chop":t.skill==="mining"?"mine":"fish",n.face=e,n.action.timer=t.ticks,n.action.started=!0,!0):(A("Your inventory is too full to hold any more."),!1):(A(`You need a ${se[t.tool].name.toLowerCase()} to do that.`),!1)}function Ip(n,e){let t=e.def.gather;if(e.depleted||!pe(t.tool))return ti(n);if(--n.action.timer>0)return;n.action.timer=t.ticks;let i=ae(t.skill),s=t.items.filter(r=>(r.lvl||t.level)<=i).reverse();for(let r of s){let o=r.lvl||t.level,a=Fn(.32+(i-o)*.018,.1,.92);if(!(Lt()>=a)){if(!Ie(r.id))return A("Your inventory is too full to hold any more."),ti(n);if(t.bait){if(!pe(t.bait))return A("You have run out of bait."),ti(n);rt(t.bait,1)}if(Se(r.id,Array.isArray(r.qty)?wt(r.qty[0],r.qty[1]):1),Re(t.skill,r.xp||t.xp),A(t.skill==="fishing"?`You catch ${se[r.id].name.replace("Raw ","a ").toLowerCase()}.`:t.got),t.deplete&&Lt()<t.deplete)return e.depleted=!0,e.respawnAt=u.tick+t.respawn,Ln(e),ti(n);if(!Ie(r.id))return A("Your inventory is too full to hold any more."),ti(n);break}}}function ti(n){n.action=null,n.anim=null}function kp(n){n.depleted&&u.tick>=n.respawnAt&&(n.depleted=!1,Ln(n)),n.expiresAt&&u.tick>=n.expiresAt&&(Ya(n),Fa(n),u.player.action&&u.player.action.ent===n&&ti(u.player)),n.farm&&Tp(n),n.trap&&Pp(n)}function Mh(n,e){let t=se[e].burn;if(!pe("tinderbox")){A("You need a tinderbox to light a fire.");return}if(ae("firemaking")<t.lvl){A(`You need a Firemaking level of ${t.lvl} to burn these logs.`);return}if(jn(n.x,n.z)){A("You can't light a fire here.");return}n.path=[],n.action={type:"firemake",item:e,timer:2},n.anim="cook",A("You attempt to light the logs.")}function Dp(n){let e=n.action;if(!pe(e.item))return ti(n);if(--e.timer>0)return;e.timer=2;let t=Fn(.45+ae("firemaking")*.012,.45,1);if(Lt()>=t)return;if(jn(n.x,n.z))return A("You can't light a fire here."),ti(n);rt(e.item,1);let i=oi("fire",n.x,n.z,{expiresAt:u.tick+wt(100,180)});co(i),Re("firemaking",se[e.item].burn.xp),A("The fire catches and the logs begin to burn."),ti(n);for(let[s,r]of[[-1,0],[1,0],[0,-1],[0,1]])if(!It(n.x+s,n.z+r)){n.path=[{x:n.x+s,z:n.z+r}];break}n.face=i}function T1(){let n=u.inv.find(e=>e&&se[e.id].cook);return n?n.id:null}function Np(n,e,t){if(t=t||T1(),!t)return A("You have nothing to cook."),!1;let i=se[t].cook;return i?ae("cooking")<i.lvl?(A(`You need a Cooking level of ${i.lvl} to cook this.`),!1):i.rangeOnly&&!e.def.range?(A("You need a proper range to bake this. Try the one in the saloon."),!1):(n.action={type:"cook",ent:e,item:t,timer:1,started:!0},n.anim="cook",n.face=e,!0):(A("You can't cook that."),!1)}function Up(n){let e=n.action;if(!e.ent.mesh)return ti(n);if(--e.timer>0)return;e.timer=4;let t=u.inv.findIndex(o=>o&&o.id===e.item);if(t<0)return A("You have run out of "+se[e.item].name.replace("Raw ","").toLowerCase()+" to cook."),ti(n);let i=se[e.item].cook,s=ae("cooking"),r=(s>=i.stop?0:.55*(i.stop-s)/(i.stop-i.lvl+1))*(e.ent.def.range?.75:1);Yi(t),Lt()<r?(u.inv[t]={id:i.burnt,qty:1},A(`You accidentally burn the ${se[i.to].name.toLowerCase()}.`)):(u.inv[t]={id:i.to,qty:1},Re("cooking",i.xp),A(`You successfully cook the ${se[i.to].name.toLowerCase().replace(/^cooked /,"")}.`)),K("inv")}var wh=Ae(()=>{ht();tn();Gi();at();ai();Sn();_h();bh()});var el,zp=Ae(()=>{el=[{id:"drygulch",name:"Dry Gulch",x:61,z:49,fare:10},{id:"copperhills",name:"Copper Hills",x:51,z:25,fare:15},{id:"river",name:"Rattler River crossing (east bank)",x:78,z:49,fare:10},{id:"wyrm",name:"Dust Wyrm lair (edge)",x:77,z:72,fare:25},{id:"redmesa",name:"Red Mesa",x:16,z:17,fare:20},{id:"ghosttown",name:"Ghost Town",x:16,z:83,fare:25},{id:"fort",name:"Frontier Fort",x:86,z:17,fare:25}]});var tl,Op,Sh=Ae(()=>{tl={general:{name:"Dry Gulch General Store",sell:.4,stock:["hatchet","pickaxe","small_net","fishing_rod","tinderbox","knife","needle","thread","rake","seed_dibber","vial_water","potato_seed","cabbage_seed","herb_seed","bird_snare","box_trap","bread","beans","cowboy_hat","leather_vest","chaps","boots","poncho","leather_gloves","bullets","gold_pan","bait","bucket","flour","carrot"]},gunsmith:{name:"Abe's Guns & Blades",sell:.5,stock:["rusty_knife","bowie_knife","cavalry_sabre","old_revolver","six_shooter","lever_rifle","hide_duster","buckler","lucky_ring"]},bakery:{name:"Bess's Bakery",sell:.4,stock:["bread","cake","flour"]},saloon:{name:"The Rusty Spur Saloon",sell:.4,stock:["whiskey","sarsaparilla","stew"]},stable:{name:"Ellie's Stable Supplies",sell:.4,stock:["horse_brush","carrot"]},tanner:{name:"Jed's Tannery",sell:.85,accepts:["coyote_pelt","cowhide","snake_skin","leather","feather","rabbit_fur"],stock:["leather","needle","thread"]}},Op={cowhide:{to:"leather",fee:1},coyote_pelt:{to:"leather",fee:1},rabbit_fur:{to:"leather",fee:1}}});function il(n,e,t,i){n.addEventListener("pointerdown",r=>{if(r.button===2)return;let o=r.target.closest(e);!o||!n.contains(o)||t(o)==null||!o.innerHTML.trim()||(yt={container:n,el:o,from:t(o),x:r.clientX,y:r.clientY,id:r.pointerId,active:!1,ghost:null,over:null,itemSelector:e,indexOf:t,onDrop:i})}),n.addEventListener("pointermove",r=>{if(!yt||yt.container!==n||r.pointerId!==yt.id)return;if(!yt.active){if(Math.hypot(r.clientX-yt.x,r.clientY-yt.y)<9)return;yt.active=!0;let l=document.getElementById("context-menu");l&&(l.hidden=!0);try{n.setPointerCapture(r.pointerId)}catch{}let c=yt.el.cloneNode(!0),h=yt.el.getBoundingClientRect();c.classList.add("drag-ghost"),c.style.width=h.width+"px",c.style.height=h.height+"px",document.body.appendChild(c),yt.ghost=c,yt.el.classList.add("drag-src")}r.preventDefault(),yt.ghost.style.left=r.clientX+"px",yt.ghost.style.top=r.clientY+"px";let o=document.elementFromPoint(r.clientX,r.clientY),a=o&&o.closest(e);yt.over&&yt.over!==a&&yt.over.classList.remove("drag-over"),yt.over=a&&n.contains(a)?a:null,yt.over&&yt.over.classList.add("drag-over")});let s=r=>{if(!yt||yt.container!==n||r.pointerId!==yt.id)return;let o=yt;if(yt=null,!o.active)return;if(o.ghost.remove(),o.el.classList.remove("drag-src"),o.over&&o.over.classList.remove("drag-over"),r.type==="pointerup"&&o.over){let l=o.indexOf(o.over);l!=null&&l!==o.from&&o.onDrop(o.from,l)}let a=l=>{l.stopPropagation(),l.preventDefault()};window.addEventListener("click",a,{capture:!0,once:!0}),setTimeout(()=>window.removeEventListener("click",a,{capture:!0}),50)};n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s)}var yt,nl,Eh=Ae(()=>{yt=null,nl=()=>!!(yt&&yt.active)});var Ph={};Eo(Ph,{buyItem:()=>Bp,closeTrade:()=>Xp,deposit:()=>Rh,depositWorn:()=>qp,hideDialogue:()=>Et,hideMenu:()=>Ls,iconHtml:()=>ni,initModals:()=>Ch,menuOpen:()=>rl,openBank:()=>kr,openShop:()=>Ir,sellSlot:()=>Hp,showDialogue:()=>sn,showInfo:()=>Lr,showMenu:()=>Pr,showQuestComplete:()=>ol,withdraw:()=>Yp});function Pr(n,e,t,i){let s=lt("context-menu");s.innerHTML=`<div class="cm-header">${st(t||"Choose Option")}</div>`;for(let a of[...i,{label:"Cancel",fn:()=>{}}]){let l=document.createElement("button");l.innerHTML=a.html||st(a.label),l.addEventListener("pointerup",c=>{c.stopPropagation(),Ls(),a.fn()}),s.appendChild(l)}s.hidden=!1;let r=s.getBoundingClientRect(),o=lt("game-root").getBoundingClientRect();s.style.left=Math.max(2,Math.min(n-r.width/2,o.width-r.width-2))+"px",s.style.top=Math.max(2,Math.min(e-8,o.height-r.height-2))+"px"}function Ls(){lt("context-menu").hidden=!0}function sn(n,e,t){let i=lt("game-root");i&&i.classList.remove("chat-min");let s=lt("chat-toggle");s&&(s.textContent="\u25BE"),lt("dialogue").hidden=!1,lt("dialogue-name").textContent=n,lt("dialogue-text").textContent=e;let r=lt("chat-messages");if(r&&e){let a=document.createElement("div");for(a.className="chat-line "+(n==="You"?"player":"npc"),a.textContent=n+": "+e,r.appendChild(a);r.children.length>80;)r.firstChild.remove();r.scrollTop=r.scrollHeight}let o=lt("dialogue-options");o.innerHTML="";for(let a of t){let l=document.createElement("button");l.textContent=a.text,a.cont&&(l.className="cont"),l.addEventListener("click",c=>{c.stopPropagation(),a.fn()}),o.appendChild(l)}}function Et(){lt("dialogue").hidden=!0,lt("dialogue-options").innerHTML=""}function Lr(n,e){u.ui.open="info",lt("dialogue").hidden=!1,lt("dialogue-name").textContent=n,lt("dialogue-text").innerHTML=e;let t=lt("dialogue-options");t.innerHTML="";let i=document.createElement("button");i.textContent="Close",i.className="cont",i.addEventListener("click",s=>{s.stopPropagation(),Et(),u.ui.open=null}),t.appendChild(i)}function ol(n){Lr("Quest Complete!",`<div class="qc-title">You have completed ${st(n.name)}!</div><div>Rewards:</div><ul class="qc-list">${n.rewards.map(e=>`<li>${st(e)}</li>`).join("")}</ul>`)}function Ir(n){po=n,u.ui.open="shop",lt("trade-modal").hidden=!1,Th()}function Th(){let n=tl[po];lt("trade-title").innerHTML=`${st(n.name)} ${Fp(Cr,[1,5,10],"sq")}`,lt("trade-left").innerHTML=`<div class="tl-head">Buy ${Cr} (tap)</div>`+n.stock.map(t=>{let i=se[t],s=i.equip&&i.equip.req?Object.entries(i.equip.req).map(([r,o])=>`${r} ${o}`).join(", "):"";return`<div class="trade-item" data-buy="${t}">${ni(t)}<span class="ti-name">${st(i.name)}${s?`<small> (req ${st(s)})</small>`:""}</span><span class="ti-price">${rn(i.value)} gp</span></div>`}).join("");let e=u.inv.map((t,i)=>t?{...t,i}:null).filter(Boolean).filter(t=>!se[t.id].quest&&(!n.accepts||n.accepts.includes(t.id)));lt("trade-right").innerHTML=`<div class="tl-head">Sell ${Cr} (tap) - you have ${rn(u.coins)} gp</div>`+(e.map(t=>{let i=se[t.id];return`<div class="trade-item" data-sell="${t.i}">${ni(t.id)}<span class="ti-name">${st(i.name)}${t.qty>1?" x"+t.qty:""}</span><span class="ti-price">${rn(Math.floor(i.value*n.sell))} gp</span></div>`}).join("")||'<div class="empty">Nothing to sell.</div>')}function Bp(n,e=1){let t=se[n],i=0;for(let s=0;s<e;s++){if(u.coins<t.value){A("You don't have enough coins.");break}if(!Ie(n)){A("You don't have enough inventory space.");break}u.coins-=t.value,Se(n,1,!0),i++}return i&&(K("inv"),K("coins"),A(`You buy ${i} x ${t.name.toLowerCase()} for ${rn(t.value*i)} coins.`)),i>0}function Hp(n,e=1){let t=u.inv[n];if(!t)return!1;let i=se[t.id],s=t.id;if(i.quest)return A("You can't sell that."),!1;let r=tl[po];if(r.accepts&&!r.accepts.includes(s))return A(`${r.name} won't buy that.`),!1;let o=Math.min(e,Kn(s)),a=Math.floor(i.value*tl[po].sell);return rt(s,o),u.coins+=a*o,K("coins"),A(`You sell ${o} x ${i.name.toLowerCase()} for ${rn(a*o)} coins.`),!0}function kr(){u.ui.open="bank",lt("trade-modal").hidden=!1,sl="",Vp()}function Vp(){lt("trade-title").innerHTML=`Bank of Dry Gulch
    <div class="bank-tools">${Fp(Qi,[1,5,10,"x","all"],"bq")}<input id="bank-x" type="number" min="1" max="9999" value="${u.bankX||10}" title="X amount">
    <input id="bank-search" placeholder="Search" value="${st(sl)}">
    <button id="bank-depinv" class="small-btn">Deposit inventory</button><button id="bank-depworn" class="small-btn">Deposit worn</button></div>`,lt("bank-depinv").onclick=e=>{e.stopPropagation(),u.inv.forEach((t,i)=>t&&Rh(i,1/0))},lt("bank-depworn").onclick=e=>{e.stopPropagation(),qp()};let n=lt("bank-search");n.oninput=()=>{sl=n.value,Ah()},lt("bank-x").onchange=e=>{u.bankX=Math.max(1,parseInt(e.target.value)||1)},Ah()}function Ah(){let n=Qi==="all"?"All":Qi==="x"?u.bankX||10:Qi;lt("trade-left").innerHTML=`<div class="tl-head">Inventory (tap: deposit ${n})</div>`+(u.inv.map((i,s)=>i?`<div class="trade-item" data-dep="${s}">${ni(i.id)}<span class="ti-name">${st(se[i.id].name)}${i.qty>1?" x"+i.qty:""}</span></div>`:"").join("")||'<div class="empty">Empty.</div>');let e=sl.trim().toLowerCase(),t=u.bank.map((i,s)=>({...i,i:s})).filter(i=>!e||se[i.id].name.toLowerCase().includes(e));lt("trade-right").innerHTML=`<div class="tl-head">Bank (tap: withdraw ${n}) - ${u.bank.length} items</div>`+(t.map(i=>`<div class="trade-item" data-wd="${i.i}">${ni(i.id)}<span class="ti-name">${st(se[i.id].name)}</span><span class="ti-price">${rn(i.qty)}</span></div>`).join("")||`<div class="empty">${e?"No matches.":"Your bank is empty."}</div>`)}function Wp(n,e){let t=u.bank.find(i=>i.id===n);t?t.qty+=e:u.bank.push({id:n,qty:e})}function Rh(n,e=Gp()){let t=u.inv[n];if(!t)return;let i=t.id,s=Math.min(e,Kn(i));rt(i,s),Wp(i,s),K("bank")}function qp(){let n=Object.keys(u.equip);if(!n.length){A("You have nothing equipped.");return}for(let e of n)Wp(u.equip[e],1),delete u.equip[e];K("equip"),K("bank")}function Yp(n,e=Gp()){let t=u.bank[n];if(!t)return;let i=0;for(;i<e&&t.qty>0&&Ie(t.id);){if(se[t.id].stack){let s=Math.min(e,t.qty);Se(t.id,s,!0),t.qty-=s,i+=s;break}Se(t.id,1,!0),t.qty--,i++}i||A("You don't have enough inventory space."),t.qty<=0&&u.bank.splice(n,1),K("inv"),K("bank")}function Xp(){lt("trade-modal").hidden=!0,(u.ui.open==="shop"||u.ui.open==="bank")&&(u.ui.open=null),po=null}function Ch(){il(lt("trade-right"),"[data-wd]",e=>+e.dataset.wd,(e,t)=>{if(u.ui.open!=="bank")return;let[i]=u.bank.splice(e,1);u.bank.splice(t,0,i),K("bank")}),lt("trade-close").addEventListener("click",Xp),lt("trade-modal").addEventListener("click",e=>{let t=e.target.closest("[data-sq],[data-bq]");if(t){t.dataset.sq?(Cr=+t.dataset.sq,Th()):(Qi=isNaN(+t.dataset.bq)?t.dataset.bq:+t.dataset.bq,Vp());return}let i=e.target.closest("[data-buy],[data-sell],[data-dep],[data-wd]");i&&(i.dataset.buy?Bp(i.dataset.buy,Cr):i.dataset.sell?Hp(+i.dataset.sell,Cr):i.dataset.dep?Rh(+i.dataset.dep):i.dataset.wd&&Yp(+i.dataset.wd))});let n=()=>{u.ui.open==="shop"?Th():u.ui.open==="bank"&&Ah()};We("inv",n),We("coins",n),We("bank",n)}var lt,ni,rl,po,Cr,Fp,Qi,sl,Gp,En=Ae(()=>{ht();tn();Sh();at();Eh();lt=n=>document.getElementById(n),ni=(n,e="")=>{let t=se[n];return`<span class="icon ${e}" style="${t.tint?`filter:${t.tint}`:""}">${t.icon}</span>`};rl=()=>!lt("context-menu").hidden;po=null,Cr=1;Fp=(n,e,t)=>`<div class="qty-bar">${e.map(i=>`<button class="qbtn ${n===i?"on":""}" data-${t}="${i}">${i==="all"?"All":i}</button>`).join("")}</div>`;Qi=1,sl="";Gp=()=>Qi==="x"?Math.max(1,u.bankX||10):Qi==="all"?1/0:Qi});function A1(n,e){return el.reduce((t,i)=>!t||Vt(n,e,i.x,i.z)<Vt(n,e,t.x,t.z)?i:t,null)}function mo(){let n=u.player,e=A1(n.x,n.z);u.ui.open="dialogue";let t=()=>{Et(),u.ui.open=null};sn("Stagecoach",`Where to, partner? You're at the ${e.name} stop. You have ${rn(u.coins)} coins.`,[...el.filter(i=>i!==e).map(i=>({text:`${i.name} (${i.fare} coins)`,fn:()=>{t(),R1(i.id)}})),{text:"Never mind.",fn:t}])}function R1(n){let e=el.find(s=>s.id===n),t=u.player;if(!e)return!1;if(u.npcs.some(s=>s.target===t&&!s.dead))return A("You can't board the stagecoach while you're in combat!"),!1;if(u.coins<e.fare)return A(`The fare is ${e.fare} coins. You can't afford it.`),!1;u.coins-=e.fare,K("coins"),t.path=[],t.action=null,t.anim=null;let i=document.getElementById("fade");return i.classList.add("on"),u.traveling=!0,setTimeout(()=>{t.x=e.x,t.z=e.z,t.visQ.length=0,t.vx=t.x+.5,t.vz=t.z+.5,K("teleport"),A(`The stagecoach rattles along the trail... You arrive at ${e.name}.`),setTimeout(()=>{i.classList.remove("on"),u.traveling=!1},350)},450),!0}var Lh=Ae(()=>{ht();zp();at();En()});function Zp(n){u.settings={...$p,...n&&n.settings||{}}}function Ih(n,e){u.settings[n]=e,K("settings",n,e)}var $p,qt,Dr=Ae(()=>{ht();at();$p={hideRoofs:!1,brightness:1,musicVolume:.4,sfxVolume:.6,sound:!0,menuHints:!0,xpDrops:!0,minimap:!0,chatFilter:!1,levelUpPopups:!0,shiftDrop:!0,acceptAid:!1,runDefault:!0,maxZoom:30,autosaveNotice:!0};qt=()=>u.settings||$p});var Jp={};Eo(Jp,{drawMinimap:()=>Uh,initOverlay:()=>Dh,overhead:()=>Jt,updateOverlay:()=>Nh});function Dh(){We("hit",(n,e)=>{let t=document.createElement("div");t.className="hitsplat "+(e>0?"damage":"miss"),t.textContent=e,es("hitsplats").appendChild(t),go.push({el:t,a:n,born:performance.now(),off:go.filter(i=>i.a===n).length%3*14}),n.lastHit=performance.now()}),We("xp",(n,e)=>{if(!qt().xpDrops)return;let t=document.createElement("div");t.className="xp-drop",t.innerHTML=`<span>${Hi[n].icon}</span> +${Math.round(e*10)/10}`,es("xp-drops").appendChild(t),setTimeout(()=>t.remove(),1500)}),es("minimap").addEventListener("click",P1),C1()}function Jt(n,e){let t=document.createElement("div");t.className="overhead",t.textContent=e,es("hitsplats").appendChild(t),al.push({el:t,a:n,born:performance.now()})}function Nh(n){let e=performance.now();for(let t=go.length-1;t>=0;t--){let i=go[t];if(e-i.born>1e3){i.el.remove(),go.splice(t,1);continue}let s=Za(i.a,i.a.model?i.a.model.height*.6:.8);i.el.style.left=s.x+"px",i.el.style.top=s.y-i.off+"px"}for(let t=al.length-1;t>=0;t--){let i=al[t];if(e-i.born>3e3){i.el.remove(),al.splice(t,1);continue}let s=Za(i.a,i.a.model?i.a.model.height+.45:1.8);i.el.style.left=s.x+"px",i.el.style.top=s.y+"px"}for(let t of n){let i=t.lastHit&&e-t.lastHit<6e3&&!t.hidden&&t.hp>0,s=kh.get(t);if(!i){s&&(s.remove(),kh.delete(t));continue}s||(s=document.createElement("div"),s.className="hpbar",s.innerHTML="<div></div>",es("hitsplats").appendChild(s),kh.set(t,s));let r=t.kind==="player"?t.maxHp():t.maxHp,o=Za(t);s.style.left=o.x+"px",s.style.top=o.y+"px",s.firstChild.style.width=Math.max(0,100*t.hp/r)+"%"}}function C1(){Is=document.createElement("canvas"),Is.width=ct,Is.height=Wt;let n=Is.getContext("2d"),e=n.createImageData(ct,Wt),t={...ch,[_e.FLOOR]:5913120,[_e.BRIDGE]:9071170,[_e.WATER]:3832496};for(let i=0;i<ct*Wt;i++){let s=t[Ut[i]];e.data[i*4]=s>>16,e.data[i*4+1]=s>>8&255,e.data[i*4+2]=s&255,e.data[i*4+3]=255}for(let i of Pn){let s=i.def.model,r=s.startsWith("tree")?[60,110,40]:s==="rock"?[110,100,90]:s==="cactus"?[70,120,60]:null;if(!r)continue;let o=(i.z*ct+i.x)*4;e.data[o]=r[0],e.data[o+1]=r[1],e.data[o+2]=r[2]}n.putImageData(e,0,0),document.getElementById("minimap")._base=Is}function Uh(){let n=es("minimap"),e=n.getContext("2d"),t=n.width,i=u.player;if(!Is||!i)return;e.save(),e.fillStyle="#1a1208",e.fillRect(0,0,t,t),e.beginPath(),e.arc(t/2,t/2,t/2-1,0,Math.PI*2),e.clip(),e.translate(t/2,t/2),e.rotate(nt.yaw),e.scale(ll,ll),e.translate(-i.vx,-i.vz),e.imageSmoothingEnabled=!1,e.drawImage(Is,0,0);let s=(o,a,l,c=.6)=>{e.fillStyle=l,e.beginPath(),e.arc(o,a,c,0,Math.PI*2),e.fill()};for(let o of u.ground)s(o.x+.5,o.z+.5,"#e02020",.45);for(let o of u.npcs)o.hidden||s(o.vx,o.vz,o.def.combat?"#ffe000":"#ffffff",.55);i.dest&&(e.fillStyle="#ff3030",e.fillRect(i.dest.x+.2,i.dest.z+.2,.6,.6)),e.restore(),e.fillStyle="#fff",e.fillRect(t/2-2,t/2-2,4,4);let r=es("compass");r.style.transform=`rotate(${nt.yaw}rad)`}function P1(n){let e=es("minimap"),t=e.getBoundingClientRect(),i=(n.clientX-t.left)*e.width/t.width-e.width/2,s=(n.clientY-t.top)*e.height/t.height-e.height/2;if(Math.hypot(i,s)>e.width/2)return;let r=nt.yaw,o=Math.cos(r),a=Math.sin(r),l=(i*o+s*a)/ll,c=(-i*a+s*o)/ll,h=Math.floor(u.player.vx+l),d=Math.floor(u.player.vz+c);Promise.resolve().then(()=>(Nr(),Kp)).then(p=>p.walkTo(h,d))}var es,go,kh,al,Is,ll,Mi=Ae(()=>{ht();Gi();at();Dr();ai();_s();Sn();es=n=>document.getElementById(n),go=[],kh=new Map,al=[];ll=3});function zh(n,e,t,i){if(n.stunnedUntil=u.tick+e,n.path=[],n.action=null,n.anim=null,t){let s=Math.min(n.hp-1,t);s>0&&(n.hp-=s,K("hit",n,s),K("hp"))}Jt(n,"\u2736 \u2736 \u2736"),A("You have been stunned!","combat"),i&&Jt(i,"What do you think you're doing?!")}function jp(n){let e=n.reduce((i,s)=>i+s.w,0),t=Lt()*e;for(let i of n)if(t-=i.w,t<0)return i;return n[0]}function Qp(n,e){if(cl())return;if(!Ie("coin_pouch")){A("You don't have enough inventory space.");return}let t=ae("thieving");A(`You attempt to pick the ${e.def.name.toLowerCase()}'s pocket.`),Lt()<Fn(.55+t*.012,.55,.95)?(Se("coin_pouch",1),Re("thieving",8),A(`You pick the ${e.def.name.toLowerCase()}'s pocket.`)):(A(`You fail to pick the ${e.def.name.toLowerCase()}'s pocket.`),zh(n,4,1,e))}function em(n,e){let t=e.def.steal;if(ae("thieving")<t.lvl){A(`You need a Thieving level of ${t.lvl} to steal from this stall.`);return}if(e.depleted){A("The stall is empty right now.");return}let i=u.npcs.find(o=>o.type===t.owner&&!o.dead&&Vt(o.x,o.z,e.x,e.z)<=5),s=i?Math.max(.05,t.notice-(ae("thieving")-t.lvl)*.01):0;if(Lt()<s){Jt(i,"Thief! Hands off my stall!"),A(`${i.def.name} catches you red-handed!`,"combat"),zh(n,3,2,null);return}let r=jp(t.loot);if(!Ie(r.id)){A("You don't have enough inventory space.");return}Se(r.id,1),Re("thieving",t.xp),A(`You steal ${se[r.id].name.toLowerCase().replace(/^(?=[aeiou])/,"an ").replace(/^(?!an )/,"a ")} from the stall.`),e.depleted=!0,e.respawnAt=u.tick+t.respawn,Ln(e)}function tm(n,e){let t=e.def.crack;if(ae("thieving")<t.lvl){A(`You need a Thieving level of ${t.lvl} to crack this safe.`);return}if(e.depleted){A("The safe has been emptied. The banker will restock it soon.");return}A("You put your ear to the safe and start turning the dial..."),n.anim="cook",n.action={type:"channel",timer:4,done:()=>{if(Lt()<Fn(.45+(ae("thieving")-t.lvl)*.02,.45,.9)){let i=wt(t.coins[0],t.coins[1]);Se("coins",i);let s=jp(t.extra);s.id!=="nothing"&&Ie(s.id)&&Se(s.id,wt(s.qty[0],s.qty[1])),Re("thieving",t.xp),A(`You crack the safe and find ${i} coins${s.id!=="nothing"?" and some "+se[s.id].name.toLowerCase():""}!`),e.depleted=!0,e.respawnAt=u.tick+t.respawn}else A("You set off a trap! A spring-loaded needle jabs your finger.","combat"),zh(n,2,wt(t.trap[0],t.trap[1]),null)}}}function nm(n){let e=u.inv[n];if(!e)return;let t=se[e.id],i=e.qty,s=0;for(let r=0;r<i;r++)s+=wt(t.pouch[0],t.pouch[1]);u.inv[n]=null,K("inv"),Se("coins",s),A(`You open ${i} coin pouch${i>1?"es":""} and find ${s} coins.`)}var cl,im=Ae(()=>{ht();at();Mi();Sn();tn();cl=()=>u.player&&u.player.stunnedUntil>u.tick});function Fh(){if(kt)return kt;let n=window.AudioContext||window.webkitAudioContext;return n?(kt=new n,ts=kt.createGain(),ts.connect(kt.destination),xo=kt.createGain(),xo.connect(kt.destination),lm(),kt):null}function Bh(){let n=Fh();n&&n.state==="suspended"&&n.resume(),um()}function am(n){Object.assign(Hn,n),lm(),Hn.music>0&&Hn.sound&&um()}function lm(){kt&&(ts.gain.value=Hn.sound?Hn.sfx*.5:0,xo.gain.value=Hn.sound?Hn.music*.25:0)}function hn(n,e,t,i="square",s=.3,r=ts,o=0){let a=kt.createOscillator(),l=kt.createGain();a.type=i,a.frequency.setValueAtTime(n,e),o&&a.frequency.exponentialRampToValueAtTime(Math.max(30,n*o),e+t),l.gain.setValueAtTime(s,e),l.gain.exponentialRampToValueAtTime(.001,e+t),a.connect(l),l.connect(r),a.start(e),a.stop(e+t+.02)}function Oh(n,e,t=.3){let i=Math.floor(kt.sampleRate*e),s=kt.createBuffer(1,i,kt.sampleRate),r=s.getChannelData(0);for(let l=0;l<i;l++)r[l]=(Math.random()*2-1)*(1-l/i);let o=kt.createBufferSource(),a=kt.createGain();a.gain.value=t,o.buffer=s,o.connect(a),a.connect(ts),o.start(n)}function ns(n){if(!Hn.sound||Hn.sfx<=0||!Fh()||kt.state!=="running")return;let e=kt.currentTime;switch(n){case"hit":hn(180,e,.12,"square",.25,ts,.5);break;case"miss":hn(320,e,.08,"triangle",.15);break;case"gun":Oh(e,.18,.5),hn(90,e,.15,"square",.2,ts,.4);break;case"chop":hn(140,e,.06,"square",.2),Oh(e,.05,.15);break;case"mine":hn(900,e,.05,"square",.12),hn(1300,e+.02,.06,"triangle",.1);break;case"splash":Oh(e,.25,.15);break;case"eat":hn(220,e,.06,"triangle",.2),hn(200,e+.12,.06,"triangle",.2);break;case"click":hn(660,e,.03,"triangle",.1);break;case"death":hn(300,e,.6,"sawtooth",.2,ts,.3);break;case"pickup":hn(520,e,.05,"triangle",.15),hn(780,e+.05,.05,"triangle",.15);break}}function cm(){if(!Hn.sound||!Fh()||kt.state!=="running")return;let n=kt.currentTime;[523,659,784,1047].forEach((e,t)=>hn(e,n+t*.12,.25,"square",.18)),hn(1047,n+.5,.6,"triangle",.2)}function hm(n){om=n}function um(){if(sm||!kt)return;let n=0;sm=setInterval(()=>{if(!Hn.sound||Hn.music<=0||kt.state!=="running")return;let e=rm[om]||rm.desert,t=kt.currentTime;n%8===0&&hn(e[0]/2,t,1.2,"triangle",.25,xo),Math.random()<.7&&hn(e[Math.floor(Math.random()*e.length)],t,.5,"triangle",.2,xo),n++},450)}var kt,ts,xo,sm,om,Hn,rm,hl=Ae(()=>{kt=null,sm=null,om=null,Hn={music:.4,sfx:.6,sound:!0};rm={town:[196,220,247,294,330,392],desert:[147,175,196,220,262,294],danger:[110,131,147,165,196,208],hills:[165,196,220,247,294,330],river:[220,247,294,330,370,440]}});function ks(n){n.action=null,n.anim=null}function dm(){let n=Object.entries(Cs).filter(([e])=>pe(e)).map(([e,t])=>{let i=ae("smithing")>=t.lvl;return{text:`${i?"":`(${t.lvl}) `}Smelt ${se[e].name} \u2192 ${se[t.bar].name}`,fn:()=>{if(Et(),u.ui.open=null,!i){A(`You need a Smithing level of ${t.lvl} to smelt that.`);return}fm(u.player,e)}}});if(!n.length){A("You need ore to smelt. Mine some north in Copper Hills.");return}u.ui.open="dialogue",sn("Abe's Forge","What ore do you want to smelt?",[...n,{text:"Never mind.",fn:()=>{Et(),u.ui.open=null}}])}function fm(n,e){let t=Cs[e];return t?ae("smithing")<t.lvl?(A(`You need a Smithing level of ${t.lvl} to smelt that.`),!1):pe(e)?Ie(t.bar)?(n.action={type:"smelt",ore:e,timer:3,started:!0},n.anim="mine",n.path=[],A("You heat the ore in the forge..."),!0):(A("Your inventory is too full."),!1):(A(`You need ${se[e].name.toLowerCase()}.`),!1):!1}function pm(n){let e=n.action;if(!pe(e.ore))return ks(n);if(--e.timer>0)return;let t=Cs[e.ore];if(!Ie(t.bar))return A("Your inventory is too full."),ks(n);rt(e.ore,1),Se(t.bar,1),Re("smithing",t.xp),A(`You smelt a ${se[t.bar].name.toLowerCase()}.`),pe(e.ore)&&Ie(t.bar)?e.timer=3:ks(n)}function Hh(){let n=ja.filter(e=>Object.keys(e.bars).every(t=>pe(t,e.bars[t]))).map(e=>{let t=ae("smithing")>=e.lvl;return{text:`${t?"":`(${e.lvl}) `}${e.name}`,fn:()=>{if(Et(),u.ui.open=null,!t){A(`You need a Smithing level of ${e.lvl}.`);return}L1(u.player,e.id)}}});if(!n.length){A("You need metal bars to smith. Smelt ore at the forge first.");return}u.ui.open="dialogue",sn("Abe's Anvil","What do you want to smith?",[...n,{text:"Never mind.",fn:()=>{Et(),u.ui.open=null}}])}function L1(n,e){let t=ja.find(i=>i.id===e);if(!t)return!1;if(ae("smithing")<t.lvl)return A(`You need a Smithing level of ${t.lvl}.`),!1;for(let[i,s]of Object.entries(t.bars))if(!pe(i,s))return A(`You need ${s} ${se[i].name.toLowerCase()}.`),!1;return Ie(t.to,(t.qty===1,1))?(n.action={type:"smith",recipe:e,timer:4,started:!0},n.anim="chop",n.path=[],A(`You begin smithing a ${t.name.toLowerCase()}...`),!0):(A("Your inventory is too full."),!1)}function mm(n){let e=n.action,t=ja.find(s=>s.id===e.recipe);if(!t)return ks(n);for(let[s,r]of Object.entries(t.bars))if(!pe(s,r))return A("You have run out of bars."),ks(n);if(--e.timer>0)return;if(!Ie(t.to))return A("Your inventory is too full."),ks(n);for(let[s,r]of Object.entries(t.bars))rt(s,r);Se(t.to,t.qty),Re("smithing",t.xp),A(`You smith ${t.qty>1?t.qty+" ":""}${se[t.to].name.toLowerCase()}${t.qty>1?"s":""}.`),Object.keys(t.bars).every(s=>pe(s,t.bars[s]))&&Ie(t.to)?e.timer=4:ks(n)}function gm(n){if(!Cs[n]){A("Nothing interesting happens.");return}fm(u.player,n)}var xm=Ae(()=>{ht();tn();ei();En();at()});function ul(n){n.action=null,n.anim=null}function ym(){if(!pe("needle")){A("You need a needle to craft. Martha sells them at the general store.");return}if(!pe("thread")){A("You need thread. Buy some from Martha or Jed.");return}let n=Qa.filter(e=>Object.keys(e.mats).every(t=>pe(t,e.mats[t]))).map(e=>{let t=ae("crafting")>=e.lvl;return{text:`${t?"":`(${e.lvl}) `}${e.name}`,fn:()=>{if(Et(),u.ui.open=null,!t){A(`You need a Crafting level of ${e.lvl}.`);return}I1(u.player,e.id)}}});if(!n.length){A("You need leather to craft. Tan hides with Jed first.");return}u.ui.open="dialogue",sn("Leatherworking","What do you want to craft?",[...n,{text:"Never mind.",fn:()=>{Et(),u.ui.open=null}}])}function I1(n,e){let t=Qa.find(i=>i.id===e);if(!t)return!1;if(ae("crafting")<t.lvl)return A(`You need a Crafting level of ${t.lvl}.`),!1;if(!pe("needle")||!pe("thread"))return A("You need a needle and thread."),!1;for(let[i,s]of Object.entries(t.mats))if(!pe(i,s))return A(`You need ${s} ${se[i].name.toLowerCase()}.`),!1;return Ie(t.to)?(n.action={type:"craft",recipe:e,timer:3,started:!0},n.anim="cook",n.path=[],A(`You begin crafting ${t.name.toLowerCase()}...`),!0):(A("Your inventory is too full."),!1)}function vm(n){let e=n.action,t=Qa.find(s=>s.id===e.recipe);if(!t||!pe("needle")||!pe("thread"))return ul(n);for(let[s,r]of Object.entries(t.mats))if(!pe(s,r))return A("You have run out of materials."),ul(n);if(--e.timer>0)return;if(!Ie(t.to))return A("Your inventory is too full."),ul(n);for(let[s,r]of Object.entries(t.mats))rt(s,r);rt("thread",1),Se(t.to,1),Re("crafting",t.xp),A(`You craft a ${se[t.to].name.toLowerCase()}.`),pe("thread")&&Object.keys(t.mats).every(s=>pe(s,t.mats[s]))&&Ie(t.to)?e.timer=3:ul(n)}var _m=Ae(()=>{ht();tn();ei();En()});function Ur(n){n.action=null,n.anim=null}function bm(n,e){let t=uo[n]?n:uo[e]?e:null;if(t&&(n==="knife"||e==="knife"))return k1(u.player,t),!0;for(let s of bp)if(n===s.need&&e===s.with||e===s.need&&n===s.with)return D1(u.player,s),!0;return!1}function k1(n,e){let t=uo[e];return t?pe("knife")?ae("fletching")<t.lvl?(A(`You need a Fletching level of ${t.lvl}.`),!1):pe(e)?Ie(t.shaft)?(n.action={type:"fletch_cut",log:e,timer:2,started:!0},n.anim="chop",n.path=[],A("You carefully cut the logs into shafts..."),!0):(A("Your inventory is too full."),!1):!1:(A("You need a carving knife. Martha sells them."),!1):!1}function Mm(n){let e=n.action,t=uo[e.log];if(!t||!pe("knife")||!pe(e.log))return Ur(n);if(!(--e.timer>0)){if(!Ie(t.shaft))return A("Your inventory is too full."),Ur(n);rt(e.log,1),Se(t.shaft,t.qty),Re("fletching",t.xp),A(`You cut ${t.qty} ${se[t.shaft].name.toLowerCase()}s.`),pe(e.log)&&Ie(t.shaft)?e.timer=2:Ur(n)}}function D1(n,e){return ae("fletching")<e.lvl?(A(`You need a Fletching level of ${e.lvl}.`),!1):!pe(e.need,e.qty)||!pe(e.with,e.qty)?(A(`You need ${e.qty} ${se[e.need].name.toLowerCase()}s and ${e.qty} ${se[e.with].name.toLowerCase()}s.`),!1):Ie(e.to)?(n.action={type:"fletch_attach",need:e.need,with:e.with,to:e.to,qty:e.qty,xp:e.xp,lvl:e.lvl,timer:2,started:!0},n.anim="cook",n.path=[],A(`You attach ${se[e.with].name.toLowerCase()}s...`),!0):(A("Your inventory is too full."),!1)}function wm(n){let e=n.action;if(!pe(e.need,e.qty)||!pe(e.with,e.qty))return A("You have run out of materials."),Ur(n);if(!(--e.timer>0)){if(!Ie(e.to))return A("Your inventory is too full."),Ur(n);rt(e.need,e.qty),rt(e.with,e.qty),Se(e.to,e.qty),Re("fletching",e.xp),A(`You make ${e.qty} ${se[e.to].name.toLowerCase()}s.`),pe(e.need,e.qty)&&pe(e.with,e.qty)&&Ie(e.to)?e.timer=2:Ur(n)}}var Sm=Ae(()=>{ht();tn();ei()});function Gh(n){n.action=null,n.anim=null}function Em(n,e){let t=wp.find(i=>i.id===(e.agilityId||e.def.agilityId))||e.def.agility;return t?ae("agility")<t.lvl?(A(`You need an Agility level of ${t.lvl} to do that.`),!1):(n.action={type:"agility",ent:e,step:t,timer:2,started:!0},n.anim="cook",n.path=[],A(t.label+"..."),!0):(A("Nothing interesting happens."),!1)}function Tm(n){let e=n.action;if(!e.step)return Gh(n);if(--e.timer>0)return;let t=e.step,i=ae("agility"),s=Fn(.28-(i-t.lvl)*.015,.02,.35);if(Lt()<s){let a=Math.min(n.hp-1,wt(t.failDmg[0],t.failDmg[1]));a>0&&(n.hp-=a,K("hit",n,a),K("hp")),A("You slip and tumble down!");let[l,c]=t.from;return It(l,c)||(n.x=l,n.z=c,n.visQ.length=0,n.vx=n.x+.5,n.vz=n.z+.5),Gh(n)}let[r,o]=t.to;n.x=r,n.z=o,n.visQ.length=0,n.vx=n.x+.5,n.vz=n.z+.5,Re("agility",t.xp),A(t.lap?"You complete a lap of the Dry Gulch rooftop course!":"You make it across."),t.lap&&Lt()<.15&&Promise.resolve().then(()=>(ht(),If)).then(a=>{a.canAdd("mark_of_grace")&&(a.invAdd("mark_of_grace",1),A("You find a mark of grace!"))}),Gh(n)}var Am=Ae(()=>{ht();ei();at();ai()});function Vh(n){n.action=null,n.anim=null}function Wh(n,e){if(Ar[n]||Ar[e]){let t=Ar[n]?n:e;return N1(u.player,t)}for(let t of Mp){if(n==="vial_water"&&e===t.herb||e==="vial_water"&&n===t.herb)return U1(u.player,t);if(n==="vial_water"&&e===t.unfinished||e==="vial_water"&&n===t.unfinished)return z1(u.player,t)}return!1}function N1(n,e){let t=Ar[e];return t?ae("herblore")<t.lvl?(A(`You need a Herblore level of ${t.lvl} to clean that.`),!1):pe(e)?Ie(t.to)?(n.action={type:"herb_clean",item:e,timer:1,started:!0},n.anim="cook",n.path=[],A("You clean the herb..."),!0):(A("Your inventory is too full."),!1):!1:!1}function Rm(n){let e=n.action,t=Ar[e.item];if(!t||!pe(e.item))return Vh(n);if(!(--e.timer>0)){if(!Ie(t.to))return A("Your inventory is too full."),Vh(n);rt(e.item,1),Se(t.to,1),Re("herblore",t.xp),A(`You clean the ${se[t.to].name.toLowerCase()}.`),pe(e.item)&&Ie(t.to)?e.timer=1:Vh(n)}}function U1(n,e){return ae("herblore")<e.lvl?(A(`You need a Herblore level of ${e.lvl}.`),!1):!pe("vial_water")||!pe(e.herb)?(A("You need a vial of water and a cleaned herb."),!1):Ie(e.to)?(rt("vial_water",1),rt(e.herb,1),Se(e.to,1),Re("herblore",e.xp),A(`You mix a ${se[e.to].name.toLowerCase()}.`),!0):(A("Your inventory is too full."),!1)}function z1(n,e){return pe(e.unfinished)?(rt(e.unfinished,1),Se(e.to,1),Re("herblore",Math.floor(e.xp/2)),A(`You finish the ${se[e.to].name.toLowerCase()}.`),!0):!1}var Cm=Ae(()=>{ht();tn();ei()});function Lm(){let n=u.slayer;if(n&&n.rem>0){u.ui.open="dialogue",sn("Wanted Board",`Current bounty: ${n.rem} x ${n.name}. Return when finished.`,[{text:"Got it.",fn:()=>{Et(),u.ui.open=null}},{text:"Abandon bounty.",fn:()=>{u.slayer=null,K("slayer"),Et(),u.ui.open=null,A("You abandon the bounty.")}}]);return}if(n&&n.rem<=0){let e=n.xp*n.assigned,t=n.coins*n.assigned;Re("slayer",e),Se("coins",t),A(`Bounty complete! You earn ${e} Slayer XP and ${t} coins.`),u.slayer=null,K("slayer"),u.ui.open="dialogue",sn("Wanted Board",`Bounty paid: ${e} Slayer XP and ${t} coins. Take another?`,[{text:"New bounty.",fn:()=>{Et(),Pm()}},{text:"Not now.",fn:()=>{Et(),u.ui.open=null}}]);return}Pm()}function Pm(){let n=ae("slayer"),e=vh.filter(r=>r.lvl<=n&&!r.boss||r.boss&&n>=r.lvl),t=e.length?e:vh.filter(r=>r.lvl<=1),i=t[wt(0,t.length-1)],s=wt(i.min,i.max);u.slayer={id:i.id,name:i.name,rem:s,assigned:s,xp:i.xp,coins:i.coins},K("slayer"),u.ui.open="dialogue",sn("Wanted Board",`New bounty: slay ${s} ${i.name}. Check the Wanted Board when done.`,[{text:"I'll take care of it.",fn:()=>{Et(),u.ui.open=null,A(`Slayer task: ${s} x ${i.name}.`,"quest")}}])}var qh=Ae(()=>{ht();ei();En();at();mh();We("npcdeath",n=>{let e=u.slayer;!e||e.rem<=0||n.type===e.id&&(e.rem--,K("slayer"),Re("slayer",Math.max(1,Math.floor(e.xp/4))),e.rem<=0?A("Bounty complete! Return to the Wanted Board for your reward.","quest"):A(`Bounty: ${e.rem} ${e.name} remaining.`))})});function Im(){if(u.ownedHorse){A("You already own a horse.");return}if(u.coins<Yh){A(`A horse costs ${Yh} coins.`);return}u.coins-=Yh,K("coins"),u.ownedHorse=!0,pe("horse_deed")||Se("horse_deed",1),Xh(),Re("riding",25),A("Ellie May sells you a sturdy quarter horse. Talk to it to Mount.")}function Xh(){if(u.horseNpc||!u.ownedHorse)return;let n=u.player;u.horseNpc=Tr({type:"player_horse",x:n.x,z:n.z,wander:0})}function O1(n){if(!u.ownedHorse){A("That horse belongs to Ellie May. Buy one from her first.");return}if(u.mounted){A("You're already mounted.");return}u.mounted=!0,n&&n===u.horseNpc&&(n.hidden=!0),Jt(u.player,"Hyah!"),A("You mount up. Riding drains less run energy."),Re("riding",5),K("riding")}function F1(){u.mounted&&(u.mounted=!1,u.horseNpc?(u.horseNpc.hidden=!1,u.horseNpc.x=u.player.x,u.horseNpc.z=u.player.z):Xh(),A("You dismount."),K("riding"))}function km(n){u.ui.open="dialogue";let e=[];u.mounted?e.push({text:"Dismount.",fn:()=>{Et(),u.ui.open=null,F1()}}):e.push({text:"Mount.",fn:()=>{Et(),u.ui.open=null,O1(n)}}),e.push({text:"Never mind.",fn:()=>{Et(),u.ui.open=null}}),sn(n.def.name,u.mounted?"Steady, partner.":"Your horse waits patiently.",e)}function Dm(){let n=u.horseNpc;if(!n||n.dead||u.mounted)return;let e=u.player;if(Vt(n.x,n.z,e.x,e.z)>12){n.x=e.x,n.z=e.z,n.visQ.length=0,n.vx=n.x+.5,n.vz=n.z+.5;return}for(let t=0;t<2&&Vt(n.x,n.z,e.x,e.z)>1;t++){let i=Ss(n.x,n.z,e.x,e.z);if(!i)break;n.x=i.x,n.z=i.z,n.moveSpeed=2/.6,n.visQ.push({x:i.x,z:i.z})}}function Nm(n){n&&n.ownedHorse&&(u.ownedHorse=!0,Xh()),n&&n.mounted&&(u.mounted=!0,u.horseNpc&&(u.horseNpc.hidden=!0))}var Yh,dl=Ae(()=>{ht();Rs();Sn();at();ai();En();Mi();Yh=250});var Ds,Um,zm=Ae(()=>{Ds="strongbox_showdown",Um={sheriff:{start:n=>{let e=n.stage(Ds);return e===3?n.has("strongbox")?"s3":"s3n":["s0","s1","s2","s3","s4"][e]||"s4"},nodes:{s0:{npc:"Howdy, stranger. Name's Calloway. I'm the law in Dry Gulch, for what it's worth these days.",options:[{text:"What's the trouble, Sheriff?",next:"trouble"},{text:"Got any work for a drifter?",next:"trouble"},{text:"Just passing through.",next:"bye"}]},trouble:{npc:"Bandits hit the bank three nights back. Made off with the strongbox - every dollar this town has.",next:"trouble2"},trouble2:{npc:"I'm too old to ride and my deputy quit. Reckon you could track 'em down and bring that box back?",options:[{text:"I'll get your strongbox back.",next:"accept"},{text:"What's in it for me?",next:"reward"},{text:"Sounds dangerous. No thanks.",next:"decline"}]},reward:{npc:"The bank's offering a reward, and I'll pin a deputy's star on you myself.",options:[{text:"Deal. I'll do it.",next:"accept"},{text:"Maybe later.",next:"decline"}]},accept:{npc:"Good. Talk to Ellie May down at the stable - she was up late with a sick mare and might've seen which way they rode.",action:n=>n.setStage(Ds,1),next:"end"},decline:{npc:"Suit yourself. The offer stands.",next:"end"},bye:{npc:"Keep your nose clean, then.",next:"end"},s1:{npc:"Have you talked to Ellie May at the stable yet? She's south of Main Street.",next:"end"},s2:{npc:"East of the river, you say? Then that's where you'll find them. Bring me that strongbox.",options:[{text:"I'm on it.",next:"end"},{text:"Any advice?",next:"advice"}]},advice:{npc:"Bandits are mean. Buy a better shootin' iron from Abe, and bring food. Cook fish on the campfire by the saloon.",next:"end"},s3:{npc:"Is that... the strongbox? Hand it over, partner!",next:"s3b"},s3n:{npc:"You found the strongbox? Well, where is it? Fetch it from wherever you stashed it.",next:"end"},s3b:{player:"Here you go, Sheriff. Those bandits won't be needing it.",action:n=>{n.has("strongbox")&&(n.remove("strongbox"),n.complete(Ds))},next:"s3c"},s3c:{npc:"Well I'll be! Raise your right hand... consider yourself a deputy of Dry Gulch.",next:"end"},s4:{npc:"Morning, Deputy. Town's quieter thanks to you. More work may come down the trail.",next:"end"}}},stablehand:{start:n=>n.stage(Ds)===1?"q1":n.stage(Ds)>=2&&n.stage(Ds)<4?"q2":"hi",nodes:{hi:{npc:"Howdy! Boarders in the stalls, and I sell mounts to folks who can pay. Want to help out?",options:[{text:"I want to buy a horse (250 coins).",next:"buy",if:n=>!(n._owned&&n._owned())},{text:"About my horse...",next:"owned",if:n=>n._owned&&n._owned()},{text:"How can I help?",next:"job"},{text:"What do you sell?",next:"end",action:n=>n.openShop("stable")},{text:"Bye.",next:"end"}]},buy:{npc:"She's a sweet one. Two-fifty coins and she's yours - talk to her to Mount.",action:n=>n.buyHorse&&n.buyHorse(),next:"end"},owned:{npc:"Treat that horse right and she'll carry you clear across the territory. Mount up from her options.",next:"end"},job:{npc:"Buy a horse brush from me and groom the horses. I'll pay you 5 coins a horse. They get dusty again quick, so check back.",next:"end"},q1:{player:"The sheriff sent me. Did you see the bandits who robbed the bank?",next:"q1b"},q1b:{npc:"Sure did! Four of 'em, hollerin' and whoopin', riding hard east over the river bridge. They camp past the far bank.",next:"q1c"},q1c:{npc:"One of 'em had that strongbox tied to his saddle. Be careful out there.",action:n=>n.setStage(Ds,2),next:"end"},q2:{npc:"Bandits camp east over the river bridge. Give 'em what for!",next:"end"}}},banker:{start:()=>"hi",nodes:{hi:{npc:"Good day. Would you like to access your bank account? Our assayer also buys gold flakes.",options:[{text:"Yes please.",next:"end",action:n=>n.openBank()},{text:"Sell my gold flakes.",next:"assay",action:n=>n.sellFlakes(15)},{text:"No thanks.",next:"end"}]},assay:{npc:"Pleasure doing business. Bring more any time.",next:"end"}}},storekeeper:{start:()=>"hi",nodes:{hi:{npc:"Welcome to Dunn's! Tools, grub, and clothes. Want to see what I've got?",options:[{text:"Let's trade.",next:"end",action:n=>n.openShop("general")},{text:"No thanks.",next:"end"}]}}},gunsmith:{start:()=>"hi",nodes:{hi:{npc:"Need iron? Shop's open - and the forge and anvil are free to use if you've got the Smithing skill.",options:[{text:"Show me your wares.",next:"end",action:n=>n.openShop("gunsmith")},{text:"How does smithing work?",next:"smith"},{text:"How do guns work here?",next:"tip"},{text:"Bye.",next:"end"}]},smith:{npc:"Smelt ore on my forge into bars, then hammer bars on the anvil into bullets, blades and gun parts. Higher Smithing unlocks better recipes.",next:"end"},tip:{npc:"Wield a gun and you'll fight from range, training Ranged. Knives and sabres train Attack, Strength or Defence depending on your style.",next:"end"}}},tanner:{start:()=>"hi",nodes:{hi:{npc:"Howdy. I tan hides into good leather - one coin a hide. And I pay better for pelts than Martha ever will.",options:[{text:"Tan all my hides, please.",next:"tan"},{text:"Let's trade.",next:"end",action:n=>n.openShop("tanner")},{text:"What's leather good for?",next:"why"},{text:"No thanks.",next:"end"}]},tan:{npc:"Let's see what you've got...",action:n=>n.tan(),next:"end"},why:{npc:"Use a needle and thread at my crafting table - gloves, chaps, vests, holsters. Bring leather.",next:"end"}}},bartender:{start:()=>"hi",nodes:{hi:{npc:"What'll it be, stranger? Whiskey, sarsaparilla, or a bowl of my stew?",options:[{text:"Let's see the menu.",next:"end",action:n=>n.openShop("saloon")},{text:"Heard any rumours?",next:"rumour"},{text:"Can I use your range?",next:"range"},{text:"Just looking.",next:"end"}]},rumour:{npc:"Folks say a giant sand-serpent - the Dust Wyrm - lairs south-east, past the river. And gold glints in the gravel bars if you've got a pan.",next:"end"},range:{npc:"Go ahead, it's in the corner. Food burns less on a proper range than on a campfire.",next:"end"}}},pianist:{start:()=>"hi",nodes:{hi:{npc:"Evenin'. Got a request?",options:[{text:'Play "Oh! Susanna".',next:"song",action:n=>n.say("\u266A Oh! Susanna, don't you cry for me... \u266A")},{text:"Play something sad.",next:"song",action:n=>n.say("\u266A Oh my darlin', Clementine... \u266A")},{text:"How long have you played here?",next:"story"},{text:"No thanks.",next:"end"}]},song:{npc:"Thank you kindly. Tips go in the jar.",next:"end"},story:{npc:"Since the gold rush. Sal pays me in stew. Best deal in the territory.",next:"end"}}},patron_miner:{start:()=>"hi",nodes:{hi:{npc:"Copper's easy, iron's honest, gold's a heartbreaker. Can't afford a pick? Pan the river for flakes instead.",next:"end"}}},patron_gambler:{start:()=>"hi",nodes:{hi:{npc:"Care for a hand of poker? ...No? Smart. Nobody beats Lou.",options:[{text:"Any tips?",next:"tip"},{text:"Bye.",next:"end"}]},tip:{npc:"Train your Strength with the Aggressive style - hits harder, kills faster. And a whiskey before a brawl never hurt. Much.",next:"end"}}},hostess:{start:()=>"hi",nodes:{hi:{npc:"Well, hello there, cowboy. You look like you've ridden a long, dusty trail. Buy a lady a sarsaparilla?",options:[{text:"Spend the night (50 coins)",next:"rest",if:n=>n.coins()>=50},{text:"Spend the night (50 coins)",next:"broke",if:n=>n.coins()<50},{text:"Tell me about the rooms upstairs.",next:"rooms"},{text:"Just being friendly, ma'am.",next:"friendly"},{text:"Goodbye, Miss Lottie.",next:"end"}]},rest:{npc:"Right this way, darlin'. Mind the creaky third step.",action:n=>n.rest(50),next:"end"},broke:{npc:"Oh, sugar, the rooms are 50 coins. Come back when your pockets jingle a little louder.",next:"end"},rooms:{npc:"Clean sheets, a hot bath and the softest feather bed in the territory. You'll wake up feeling brand new.",next:"end"},friendly:{npc:"Aren't you sweet. Most folks in here only talk to their whiskey.",next:"end"}}},preacher:{start:()=>"hi",nodes:{hi:{npc:"Peace be with you, traveller. Welcome to the house of the Lord.",options:[{text:"What is Faith?",next:"faith"},{text:"Will you buy my bones?",next:"bones"},{text:"About Ghost Town...",next:"ghost"},{text:"I brought a Ghost orchid.",next:"orchid",if:n=>n.has("clean_orchid")},{text:"Any tips for burying bones?",next:"tips"},{text:"Ring the bell for me?",next:"bell"},{text:"Goodbye, Reverend.",next:"end"}]},faith:{npc:"Faith is your inner strength. Bury bones to train it, then open your Faith tab to call on blessings that harden your hide or steady your aim.",next:"faith2"},faith2:{npc:"Blessings drain your Faith points. Pray at this altar and they'll be restored in full.",next:"end"},bones:{npc:"I'll give the departed a proper burial - and 3 coins a bone for your trouble.",action:n=>n.sellBones(3),next:"end"},tips:{npc:"Bury them in the churchyard next door. Sanctified ground blesses your offering - you'll learn half as much again.",next:"end"},bell:{npc:"Ring it yourself, child - the rope's just outside the door.",next:"end"},ghost:{npc:"Spirits stir in Ghost Town. Grow a ghost orchid in the ashen soil, clean it, and bring it here as an offering.",action:n=>{n.stage("ghost_harvest")===0&&n.setStage("ghost_harvest",1)},next:"end"},orchid:{npc:"A pure offering. The dead will rest easier.",action:n=>{n.has("clean_orchid")&&(n.remove("clean_orchid"),n.complete("ghost_harvest"))},next:"end"}}},driver:{start:()=>"hi",nodes:{hi:{npc:"All aboard the Overland Mail! I run to Copper Hills, the river crossing, and - if you're brave - the edge of the Dust Wyrm lair.",options:[{text:"Take me somewhere.",next:"end",action:n=>n.travel()},{text:"How do I get back?",next:"back"},{text:"Not today.",next:"end"}]},back:{npc:"Every stop has a sign with a bell. Ring it and I'll come fetch you.",next:"end"}}},townsperson:{start:()=>"l"+Math.floor(Math.random()*8),nodes:{l0:{npc:"Howdy, stranger.",next:"end"},l1:{npc:"Hot enough for ya?",next:"end"},l2:{npc:"Don't drink the well water. Or do. I ain't your ma.",next:"end"},l3:{npc:"I hear the sheriff's lookin' for help with them bandits.",next:"end"},l4:{npc:"Big Sal's stew'll cure anything. Except bein' broke.",next:"end"},l5:{npc:"Mind your pockets around here, friend.",next:"end"},l6:{npc:"That stagecoach ain't never been on time. Not once.",next:"end"},l7:{npc:"Nice hat.",next:"end"}}},baker:{start:()=>"hi",nodes:{hi:{npc:"Fresh bread! Cakes! Don't even think about pinching any - I've got eyes in the back of my bonnet.",options:[{text:"Let's trade.",next:"end",action:n=>n.openShop("bakery")},{text:"I would never!",next:"never"},{text:"Bye.",next:"end"}]},never:{npc:"Mm-hmm. That's what the last fella said. Then the sheriff found crumbs in his saddlebag.",next:"end"}}},foreman:{start:()=>"hi",nodes:{hi:{npc:"Watch your head in the deep shaft. A Cave Golem woke up north of camp - tough as bedrock.",options:[{text:"Any mining tips?",next:"tip"},{text:"Thanks.",next:"end"}]},tip:{npc:"Copper and iron nearby. Silver and gold deeper. Bring food - that golem hits hard.",next:"end"}}},mesa_guide:{start:n=>n.stage("restless_mesa")===2&&n.has("mesa_fang")?"done":n.stage("restless_mesa")>=1&&n.stage("restless_mesa")<3?"prog":"hi",nodes:{hi:{npc:"Red Mesa's beautiful until the Mesa Rattler wakes. Stick to the trail if you value your boots.",options:[{text:"I'll deal with the rattler.",next:"accept"},{text:"Tell me about the rattler.",next:"boss"},{text:"Safe travels.",next:"end"}]},accept:{npc:"Bless you. Bring me a fang when it's done and I'll pay a proper bounty.",action:n=>n.setStage("restless_mesa",1),next:"end"},boss:{npc:"Big as a wagon. Spits venom - when the sand hisses, MOVE. Fang's worth a fortune if you live.",next:"end"},prog:{npc:"Still hunting that rattler? Arena's in the canyon centre.",next:"end"},done:{npc:"That fang! Here's your bounty, partner.",action:n=>{n.remove("mesa_fang"),n.complete("restless_mesa")},next:"end"}}},prospector:{start:()=>"hi",nodes:{hi:{npc:"Gold in them hills! Copper too, north of town. Iron and silver if you dig deeper, heh.",options:[{text:"Any tips for a new miner?",next:"tip"},{text:"Bye, old-timer.",next:"end"}]},tip:{npc:"Buy a pickaxe from Martha. Mine copper till your arms ache, then try iron at level 15.",next:"end"}}}}});var Om,wi=Ae(()=>{ht();Rs();Om=()=>{try{return xh()}catch{return"?"}}});var B1,H1,Fm,Bm=Ae(()=>{wi();at();En();B1=[["accurate","Accurate","Attack xp"],["aggressive","Aggressive","Strength xp"],["defensive","Defensive","Defence xp"]],H1=[["accurate","Accurate","Ranged xp, +accuracy"],["rapid","Rapid","Ranged xp, faster"]],Fm={id:"combat",icon:"\u2694\uFE0F",title:"Combat Options",events:["equip","skills","settings"],mount(n){n.addEventListener("click",e=>{let t=e.target.closest("[data-style]");t&&(u.style=t.dataset.style,this.render(n)),e.target.closest('[data-toggle="retaliate"]')&&(u.autoRetaliate=u.autoRetaliate===!1,this.render(n)),e.target.closest('[data-toggle="run"]')&&(u.run=!u.run,this.render(n))})},render(n){let e=Bn(),i=$i()==="melee"?B1:H1;n.innerHTML=`<div class="tab-title">${e?ni(e.id)+" "+st(e.name):"Unarmed"}</div>
      <div class="sub center">Combat level: ${qi()} &nbsp; Max hit: ${Om()}</div>
      <div class="style-grid">${i.map(([s,r,o])=>`<button class="style-btn ${u.style===s?"on":""}" data-style="${s}"><b>${r}</b><small>${o}</small></button>`).join("")}</div>
      <button class="style-btn ${u.autoRetaliate!==!1?"on":""}" data-toggle="retaliate">Auto Retaliate: ${u.autoRetaliate!==!1?"On":"Off"}</button>
      <button id="run-toggle" class="style-btn ${u.run?"on":""}" data-toggle="run">\u{1F3C3} Run: ${u.run?"On":"Off"}</button>`}}});var G1,V1,W1,Hm,Gm=Ae(()=>{wi();tn();at();En();G1=[[null,"head",null],["cape","neck","ammo"],["weapon","body","shield"],[null,"legs",null],["hands","feet","ring"]],V1={head:"\u{1FA96}",cape:"\u{1F9E3}",neck:"\u{1F4FF}",ammo:"\u2022",weapon:"\u{1F5E1}\uFE0F",body:"\u{1F455}",shield:"\u{1F6E1}\uFE0F",legs:"\u{1F456}",hands:"\u{1F9E4}",feet:"\u{1F462}",ring:"\u{1F48D}"},W1=n=>n[0].toUpperCase()+n.slice(1),Hm={id:"equipment",icon:"\u{1FA96}",title:"Worn Equipment",events:["equip"],mount(n){n.innerHTML='<div id="equip-slots"></div>',n.addEventListener("click",e=>{let t=e.target.closest("[data-slot]");t&&u.equip[t.dataset.slot]&&Da(t.dataset.slot)})},render(n){let e=Xi(),t=s=>{if(!s)return'<div class="pd-cell pd-blank"></div>';let r=u.equip[s];return`<div class="pd-cell ${r?"filled":""}" data-slot="${s}" title="${r?st(se[r].name)+" (tap to remove)":W1(s)}">`+(r?ni(r):`<span class="pd-empty">${V1[s]}</span>`)+"</div>"},i=s=>(e[s]>=0?"+":"")+e[s];n.querySelector("#equip-slots").innerHTML=`<div class="tab-title">Worn Equipment</div>
      <div class="paperdoll">${G1.map(s=>s.map(t).join("")).join("")}</div>
      <div class="bonus-table">
        <div class="bt-h">Attack bonus</div><div>Melee: ${i("att")}</div><div>Ranged: ${i("rng")}</div>
        <div class="bt-h">Defence bonus</div><div>All styles: ${i("def")}</div>
        <div class="bt-h">Other bonuses</div><div>Strength: ${i("str")}</div><div>Ranged str: ${i("rstr")}</div>
      </div>`}}});var Vm,Wm=Ae(()=>{wi();Er();at();Vm={id:"prayer",icon:"\u{1F64F}",title:"Faith",events:["faith","skills"],mount(n){n.addEventListener("click",e=>{let t=e.target.closest("[data-prayer]");t&&Ka(t.dataset.prayer)})},render(n){let e=ae("prayer");n.innerHTML=`<div class="tab-title">Faith</div>
      <div class="faith-bar"><div style="width:${Math.round(100*(u.faith||0)/e)}%"></div><span>${u.faith??e} / ${e}</span></div>
      <div class="prayer-grid">${Ja.map(t=>{let i=e<t.lvl,s=u.prayers&&u.prayers.has(t.id);return`<button class="prayer ${i?"locked":""} ${s?"on":""}" data-prayer="${t.id}" title="${st(t.name)} (lvl ${t.lvl}): ${st(t.desc)}">
          <span class="p-icon">${t.icon}</span><span class="p-name">${st(t.name)}</span><small>${i?"Lvl "+t.lvl:st(t.desc)}</small></button>`}).join("")}</div>
      <div class="sub center">Bury bones to train Faith. Pray at the town well to restore points.</div>`}}});var $h,qm=Ae(()=>{$h=[{id:"home_trail",name:"Home Trail",icon:"\u{1F3E0}",lvl:1,desc:"Ride back to Dry Gulch. 5 minute cooldown.",working:!0},{id:"snake_oil",name:"Snake Oil",icon:"\u{1F9F4}",lvl:5,desc:"Cure poison. (Coming soon)"},{id:"dust_devil",name:"Dust Devil",icon:"\u{1F32A}\uFE0F",lvl:11,desc:"Blind a foe with a gust of sand. (Coming soon)"},{id:"lasso",name:"Lasso",icon:"\u27B0",lvl:17,desc:"Bind a foe in place. (Coming soon)"},{id:"trail_to_mine",name:"Trail to Copper Hills",icon:"\u26CF\uFE0F",lvl:25,desc:"Teleport to the mine. (Coming soon)"},{id:"smoke_signal",name:"Smoke Signal",icon:"\u{1F4A8}",lvl:33,desc:"Call for aid. (Coming soon)"},{id:"thunderclap",name:"Thunderclap",icon:"\u26A1",lvl:45,desc:"Strike foes with lightning. (Coming soon)"}]});function Y1(n){let e=$h.find(i=>i.id===n),t=Math.max(1,Math.floor(ae("prayer")/2)+Math.floor(ae("ranged")/2));if(!e.working){A(`${e.name} requires Frontier Lore level ${e.lvl}. Coming in a later update.`);return}if(e.id==="home_trail"){let i=(u.homeTrailAt||0)+q1-Date.now();if(i>0){A(`You need to wait another ${Math.ceil(i/6e4)} minute(s) to ride the Home Trail.`);return}let s=u.player;if(u.npcs.some(r=>r.target===s)){A("You can't do that while in combat.");return}s.path=[],s.anim="cook",Jt(s,"Hyah!"),A("You whistle for a ride home..."),s.action={type:"channel",timer:5,done:()=>{s.x=wn.x,s.z=wn.z,s.visQ.length=0,s.vx=s.x+.5,s.vz=s.z+.5,u.homeTrailAt=Date.now(),A("You arrive in Dry Gulch."),K("teleport")}}}}var q1,Ym,Xm=Ae(()=>{wi();qm();_s();at();Mi();q1=5*60*1e3;Ym={id:"spellbook",icon:"\u{1F4D6}",title:"Remedies & Tricks",events:["skills"],mount(n){n.addEventListener("click",e=>{let t=e.target.closest("[data-spell]");t&&Y1(t.dataset.spell)})},render(n){n.innerHTML=`<div class="tab-title">Remedies &amp; Tricks</div><div class="spell-grid">${$h.map(e=>`<button class="spell ${e.working?"":"locked"}" data-spell="${e.id}" title="${st(e.desc)}"><span class="p-icon">${e.icon}</span><span class="p-name">${st(e.name)}</span><small>${e.working?st(e.desc):"Lvl "+e.lvl+" - coming soon"}</small></button>`).join("")}</div>`}}});function Jm(n){let e=Math.floor(Date.now()/9e4);return Math.abs(Zh(n+e))%100<55?{online:!0,world:300+Math.abs(Zh(n))%20}:{online:!1}}var $m,Zm,Zh,Km,jm=Ae(()=>{wi();at();$m=["Dusty Rhodes","Calamity Kate","Two-Gun Tex","Lil Sal","Doc Holloway","Rattler Ray"],Zm=["Howdy, partner!","Can't talk, bandits on my tail!","Catfish are bitin' by the bridge.","Meet me at the saloon later.","You seen the sheriff? He owes me two bits.","Just hit 30 Mining, yeehaw!"],Zh=n=>[...n].reduce((e,t)=>e*31+t.charCodeAt(0)|0,7);Km={id:"friends",icon:"\u{1F465}",title:"Friends List",events:["friends"],mount(n){u.friends||(u.friends=[...$m]),n.addEventListener("click",e=>{let t=e.target.closest("[data-rm]");if(t){u.friends=u.friends.filter(o=>o!==t.dataset.rm),this.render(n);return}if(e.target.closest("[data-add]")){let o=n.querySelector(".friend-input"),a=o.value.trim().slice(0,12);if(!a)return;u.friends.includes(a)?A(`${a} is already on your friends list.`):(u.friends.push(a),A(`${a} was added to your friends list.`)),this.render(n);return}let i=e.target.closest("[data-friend]");if(!i)return;let s=i.dataset.friend;if(!Jm(s).online){A(`${s} is currently offline.`);return}A(`To ${s}: Howdy!`,"player"),setTimeout(()=>A(`From ${s}: ${Zm[Math.abs(Zh(s+Date.now()))%Zm.length]}`,"friend"),1500)}),setInterval(()=>{n.classList.contains("active")&&this.render(n)},15e3)},render(n){if(u.friends||(u.friends=[...$m]),n.contains(document.activeElement)&&document.activeElement.classList.contains("friend-input"))return;let e=u.friends.map(t=>({n:t,...Jm(t)})).sort((t,i)=>i.online-t.online);n.innerHTML=`<div class="tab-title">Friends List (${e.filter(t=>t.online).length}/${e.length} online)</div>
      ${e.map(t=>`<div class="friend-row" data-friend="${st(t.n)}"><span class="f-name">${st(t.n)}</span><span class="${t.online?"f-on":"f-off"}">${t.online?"World "+t.world:"Offline"}</span><button class="f-rm" data-rm="${st(t.n)}" title="Remove">\u2715</button></div>`).join("")}
      <div class="friend-add"><input class="friend-input" maxlength="12" placeholder="Name"><button class="small-btn" data-add="1">Add</button></div>
      <div class="sub center">Tap an online friend to say howdy. (Simulated until multiplayer.)</div>`}}});function Si(){let n=u.player;if(!n||u.noSave)return!1;let e={v:Qm,t:Date.now(),pos:{x:n.x,z:n.z},hp:n.hp,skills:u.skills,inv:u.inv,equip:u.equip,bank:u.bank,coins:u.coins,quests:u.quests,style:u.style,run:u.run,faith:u.faith,pet:u.pet||null,kc:u.kc||{},settings:u.settings,friends:u.friends,runEnergy:u.runEnergy,spec:u.spec,autoRetaliate:u.autoRetaliate,homeTrailAt:u.homeTrailAt||0,ownedHorse:!!u.ownedHorse,mounted:!!u.mounted,slayer:u.slayer||null};try{return localStorage.setItem(Jh,JSON.stringify(e)),u.lastSaved=Date.now(),K("saved"),!0}catch(t){return console.warn("save failed",t),!1}}function e0(){let n;try{n=JSON.parse(localStorage.getItem(Jh)||"null")}catch{return null}if(!n||n.v!==Qm)return null;let e=t=>t&&se[t];for(let t of _f)typeof n.skills?.[t]=="number"&&(u.skills[t]=n.skills[t]);u.inv=new Array(_i).fill(null),(n.inv||[]).slice(0,_i).forEach((t,i)=>{t&&e(t.id)&&(u.inv[i]={id:t.id,qty:Math.max(1,t.qty|0)})}),u.equip={};for(let[t,i]of Object.entries(n.equip||{}))e(i)&&se[i].equip?.slot===t&&(u.equip[t]=i);return u.bank=(n.bank||[]).filter(t=>e(t.id)&&t.qty>0),u.coins=Math.max(0,n.coins|0),u.quests=n.quests||{},u.style=n.style||"accurate",u.run=n.run!==!1,u.autoRetaliate=n.autoRetaliate!==!1,u.homeTrailAt=n.homeTrailAt||0,u.kc=n.kc||{},Array.isArray(n.friends)&&(u.friends=n.friends.filter(t=>typeof t=="string").slice(0,200)),u.runEnergy=typeof n.runEnergy=="number"?n.runEnergy:100,u.spec=typeof n.spec=="number"?n.spec:100,u.ownedHorse=!!n.ownedHorse,u.mounted=!!n.mounted,u.slayer=n.slayer||null,n}function fl(){localStorage.removeItem(Jh)}var Jh,Qm,pl=Ae(()=>{ht();tn();Gi();at();Jh="westscape.save",Qm=1});function n0(n,e){return n==="maxZoom"?e:Math.round(e*100)+"%"}var X1,t0,Kh,i0,s0=Ae(()=>{wi();Dr();pl();Sn();ht();Gi();X1=[["Display",[["hideRoofs","Hide roofs"],["minimap","Show minimap"],["xpDrops","Show XP drops"],["menuHints","Top-left action hints"],["levelUpPopups","Level-up popups"]]],["Audio",[["sound","Sound on"]]],["Gameplay",[["runDefault","Run by default"],["chatFilter","Filter game messages"],["shiftDrop","Shift-click drop (desktop)"],["acceptAid","Accept aid (multiplayer, later)"],["autosaveNotice","Autosave notice"]]]],t0={Display:[["brightness","Brightness",.6,1.6,.05]],Audio:[["musicVolume","Music volume",0,1,.05],["sfxVolume","Sound effects",0,1,.05]],Camera:[["maxZoom","Max zoom-out",12,30,1]]},Kh=!1,i0={id:"settings",icon:"\u2699\uFE0F",title:"Account & Settings",events:["settings"],mount(n){n.addEventListener("click",e=>{let t=e.target.closest("[data-set]");if(t){Ih(t.dataset.set,!qt()[t.dataset.set]),t.dataset.set==="runDefault"&&(u.run=qt().runDefault);return}let i=e.target.closest("[data-act]");if(!i)return;let s=i.dataset.act;s==="cam-reset"&&(nt.yaw=0,nt.pitch=.95,nt.dist=window.innerHeight>window.innerWidth?22:17,A("Camera reset.")),s==="save"&&(Si(),A("Game saved.")),s==="reset"&&(Kh=!0,this.render(n)),s==="reset-cancel"&&(Kh=!1,this.render(n)),s==="reset-confirm"&&(u.noSave=!0,fl(),location.reload())}),n.addEventListener("input",e=>{let t=e.target.closest("[data-slider]");if(!t)return;Ih(t.dataset.slider,parseFloat(t.value));let i=t.parentElement.querySelector(".sv");i&&(i.textContent=n0(t.dataset.slider,parseFloat(t.value)))})},render(n){if(n.contains(document.activeElement)&&document.activeElement.type==="range")return;let e=qt(),t=([r,o])=>`<button class="set-row ${e[r]?"on":""}" data-set="${r}"><span>${o}</span><span class="sw">${e[r]?"ON":"OFF"}</span></button>`,i=([r,o,a,l,c])=>`<label class="set-slider"><span>${o} <b class="sv">${n0(r,e[r])}</b></span><input type="range" min="${a}" max="${l}" step="${c}" value="${e[r]}" data-slider="${r}"></label>`,s=Zn.reduce((r,o)=>r+ae(o.id),0);n.innerHTML=`<div class="tab-title">Account &amp; Settings</div>
      <div class="sub center">Total level ${s} \xB7 Quest points ${ro()}</div>
      ${X1.map(([r,o])=>`<div class="set-h">${r}</div>${(t0[r]||[]).map(i).join("")}${o.map(t).join("")}`).join("")}
      <div class="set-h">Camera</div>${t0.Camera.map(i).join("")}<button class="style-btn" data-act="cam-reset">Reset camera (face north)</button>
      <div class="set-h">Account</div><button class="style-btn" data-act="save">\u{1F4BE} Save now</button>
      ${Kh?'<div class="danger-box">Erase ALL progress? This cannot be undone.<button class="style-btn danger" data-act="reset-confirm">Yes, reset my save</button><button class="style-btn" data-act="reset-cancel">Cancel</button></div>':'<button class="style-btn danger" data-act="reset">Reset save\u2026</button>'}`}}});function $1(n){let e=r0.find(i=>i.id===n),t=u.player;!e||!t||t.path.length||(t.emote={id:n,t:performance.now()/1e3},e.say&&Jt(t,e.say))}var r0,o0,a0=Ae(()=>{wi();Mi();r0=[{id:"yes",name:"Yes",icon:"\u{1F44D}"},{id:"no",name:"No",icon:"\u{1F44E}"},{id:"wave",name:"Wave",icon:"\u{1F44B}"},{id:"bow",name:"Bow",icon:"\u{1F647}"},{id:"dance",name:"Dance",icon:"\u{1F483}"},{id:"cheer",name:"Cheer",icon:"\u{1F64C}"},{id:"clap",name:"Clap",icon:"\u{1F44F}"},{id:"tiphat",name:"Tip hat",icon:"\u{1F920}"},{id:"yeehaw",name:"Yeehaw",icon:"\u{1F40E}",say:"Yeehaw!"},{id:"think",name:"Think",icon:"\u{1F914}",say:"Hmm..."},{id:"laugh",name:"Laugh",icon:"\u{1F606}",say:"Haha!"},{id:"angry",name:"Angry",icon:"\u{1F620}",say:"Grr!"}];o0={id:"emotes",icon:"\u{1F483}",title:"Emotes",events:[],mount(n){n.innerHTML=`<div class="tab-title">Emotes</div><div class="emote-grid">${r0.map(e=>`<button class="emote" data-emote="${e.id}"><span class="p-icon">${e.icon}</span><small>${e.name}</small></button>`).join("")}</div>`,n.addEventListener("click",e=>{let t=e.target.closest("[data-emote]");t&&$1(t.dataset.emote)})}}});function l0(n){Si(),u.loggedOut=!0,u.player&&(u.player.path=[],u.player.action=null),document.getElementById("title-screen").hidden=!1,document.querySelector("#title-screen .title-note").textContent=n||"Your progress has been saved in this browser."}function J1(){u.loggedOut=!1,jh=Date.now(),document.getElementById("title-screen").hidden=!0,A("Welcome back to West-Scape.","system")}var Z1,jh,c0,h0=Ae(()=>{wi();pl();Z1=30*60*1e3,jh=Date.now();c0={id:"logout",icon:"\u{1F6AA}",title:"Logout",events:[],mount(n){n.innerHTML=`<div class="tab-title">Logout</div><div class="sub center">When you have finished playing, log out to save your progress.</div>
      <button class="style-btn logout-btn" data-logout="1">Click here to logout</button><div class="sub center idle-timer"></div>`,n.addEventListener("click",e=>{e.target.closest("[data-logout]")&&l0()}),document.getElementById("title-play").addEventListener("click",J1),["pointerdown","keydown"].forEach(e=>window.addEventListener(e,()=>{jh=Date.now()},!0)),setInterval(()=>{let e=Z1-(Date.now()-jh),t=n.querySelector(".idle-timer");t&&(t.textContent=`Idle logout in ${Math.max(0,Math.floor(e/6e4))}m ${Math.max(0,Math.floor(e/1e3)%60)}s`),e<=0&&!u.loggedOut&&l0("You were logged out after 30 minutes of inactivity. Progress saved.")},1e3)}}});function u0(){let n=Ns("tab-buttons"),e=Ns("tab-content");n.innerHTML="",n.className="tab-row tab-row-1";let t=Ns("tab-buttons-bottom");t||(t=document.createElement("div"),t.id="tab-buttons-bottom",e.after(t)),t.innerHTML="",t.className="tab-row tab-row-2";let i=[n,t];tu.forEach((s,r)=>{let o=document.createElement("button");o.className="tab-btn"+(s.id===eu?" active":""),o.dataset.tab=s.id,o.title=s.title,o.setAttribute("aria-label",s.title),o.textContent=s.icon,o.addEventListener("click",()=>j1(s.id,!0)),i[r<K1?0:1].appendChild(o);let a=Ns("tab-"+s.id);if(a||(a=document.createElement("div"),a.id="tab-"+s.id,a.className="tab-pane",e.appendChild(a)),a.dataset.title=s.title,s.mount&&s.mount(a),s.render)for(let l of s.events||[])We(l,()=>s.render(a))})}function d0(){for(let n of tu)n.render&&n.render(Ns("tab-"+n.id))}function j1(n,e=!1){if(Ns("side-panel").classList.remove("collapsed"),e&&n===eu)return;eu=n,document.querySelectorAll(".tab-btn").forEach(s=>s.classList.toggle("active",s.dataset.tab===n)),document.querySelectorAll(".tab-pane").forEach(s=>s.classList.toggle("active",s.id==="tab-"+n));let i=tu.find(s=>s.id===n);i&&i.render&&i.render(Ns("tab-"+n))}var Qh,tu,K1,Ns,eu,f0=Ae(()=>{at();Bm();Gm();Wm();Xm();jm();s0();a0();h0();Qh=(n,e,t)=>({id:n,icon:e,title:t,builtin:!0}),tu=[Fm,Qh("skills","\u{1F4CA}","Skills"),Qh("quests","\u{1F4DC}","Quests"),Qh("inventory","\u{1F392}","Inventory"),Hm,Vm,Ym,Km,c0,i0,o0],K1=7,Ns=n=>document.getElementById(n),eu="inventory"});function g0(){Ch(),u0(),Q1(),Ot("side-panel").classList.remove("collapsed"),Ot("chat-toggle").addEventListener("click",n=>{n.stopPropagation();let e=Ot("game-root").classList.toggle("chat-min");Ot("chat-toggle").textContent=e?"\u25B4":"\u25BE",Ot("chat-messages").scrollTop=Ot("chat-messages").scrollHeight}),We("inv",nu),We("equip",nu),We("skills",y0),We("quests",v0),We("coins",()=>{Ot("coins-val").textContent=rn(u.coins)}),We("hp",iu),We("skills",iu),We("msg",_0),Ot("skills-list").addEventListener("click",n=>{let e=n.target.closest("[data-skill]");e&&eM(e.dataset.skill)}),Ot("quests-list").addEventListener("click",n=>{let e=n.target.closest("[data-quest]");e&&tM(e.dataset.quest)}),We("settings",m0),m0(),nM()}function x0(){d0(),nu(),y0(),v0(),iu(),Ot("coins-val").textContent=rn(u.coins)}function Q1(){let n=Ot("inv-grid");n.innerHTML="";for(let e=0;e<_i;e++){let t=document.createElement("div");t.className="inv-slot",t.dataset.slot=e;let i=null,s=!1,r=0,o=0,a="mouse";t.addEventListener("pointerdown",l=>{a=l.pointerType,s=!1,r=l.clientX,o=l.clientY,l.pointerType!=="mouse"&&(i=setTimeout(()=>{nl()||(s=!0,p0(e,r,o))},450))}),t.addEventListener("pointermove",l=>{Math.hypot(l.clientX-r,l.clientY-o)>10&&clearTimeout(i)}),t.addEventListener("pointerup",l=>{if(clearTimeout(i),!(l.button===2||s||nl())){if(l.shiftKey&&qt().shiftDrop&&u.inv[e]){au(e);return}if(u.useSlot!==void 0&&u.useSlot!==null){zr({kind:"invslot",slot:e});return}ru(e)}}),t.addEventListener("pointercancel",()=>clearTimeout(i)),t.addEventListener("contextmenu",l=>{l.preventDefault(),!(a!=="mouse"||nl())&&p0(e,l.clientX,l.clientY)}),n.appendChild(t)}il(n,".inv-slot",e=>+e.dataset.slot,(e,t)=>{[u.inv[e],u.inv[t]]=[u.inv[t],u.inv[e]],(u.useSlot===e||u.useSlot===t)&&(u.useSlot=null),K("inv")})}function p0(n,e,t){let i=u.inv[n];if(!i)return;let s=Ot("game-root").getBoundingClientRect();Pr(e-s.left,t-s.top,se[i.id].name,ou(n))}function nu(){let n=Ot("inv-grid").children;for(let e=0;e<_i;e++){let t=u.inv[e],i=n[e];i.classList.toggle("selected",u.useSlot===e),i.innerHTML=t?ni(t.id)+(se[t.id].stack||t.qty>1?`<span class="qty">${yf(t.qty)}</span>`:""):"",i.title=t?se[t.id].name:""}}function y0(){let n=Zn.reduce((e,t)=>e+ae(t.id),0);Ot("skills-list").innerHTML=Zn.map(e=>{let t=ae(e.id),i=u.skills[e.id],s=t<99?yr(t+1):i,r=yr(t),o=t<99?Math.floor(100*(i-r)/(s-r)):100;return`<div class="skill-row" data-skill="${e.id}" title="${e.name}: ${rn(i)} xp"><span class="skill-name">${e.icon} ${e.name}</span><span class="skill-lvl">${Jn(e.id)!==t?`<span class="${Jn(e.id)>t?"boost-up":"boost-down"}">${Jn(e.id)}</span>/`:""}${t}</span><div class="skill-bar"><div style="width:${o}%"></div></div></div>`}).join("")+`<div class="skill-total">Total level: ${n} &nbsp; Combat: ${qi()}</div>`}function eM(n){let e=Hi[n],t=ae(n),i=u.skills[n],s=t<99?`${rn(yr(t+1)-i)} xp to level ${t+1}`:"Maxed!";Lr(`${e.icon} ${e.name} guide`,`<div class="guide-xp">Level ${t} - ${rn(i)} xp. ${s}</div>`+e.guide.map(r=>`<div class="guide-row ${t>=r.lvl?"ok":""}"><b>${r.lvl}</b> ${st(r.text)}</div>`).join(""))}function v0(){Ot("quests-list").innerHTML=`<div class="qp">Quest Points: ${ro()}</div>`+Object.entries(Vi).map(([n,e])=>{let t=Cn(n);return`<div class="quest-item ${t>=e.done?"complete":t>0?"active":""}" data-quest="${n}"><div class="q-name">${st(e.name)}</div><div class="q-status">${t>=e.done?"Completed":t>0?"In progress":"Not started"}</div></div>`}).join("")}function tM(n){let e=Vi[n],t=Cn(n),i=[];for(let r=t===0?0:1;r<=Math.max(t,0);r++)e.journal[r]&&i.push(`<div class="${r<t?"strike":""}">${st(e.journal[r])}</div>`);let s=(e.steps||[]).map((r,o)=>{let a=t>o||t>=e.done,l=t===o+0?t===o:t>0&&t===o+1,c=t>=e.done||t>0&&t>o+1||t>0&&o<t-1,h=!c&&t>0&&o===t-1;return`<div class="guide-row ${c?"ok":""} ${h?"cur":""}"><b>${o+1}.</b> ${st(r)}</div>`}).join("");Lr(e.name+" \u2014 Quest Guide",`<div class="sub">Start: ${st(e.start)} | ${st(e.difficulty)} | QP: ${e.qp}</div>`+(s?`<div class="sub">Steps</div>${s}`:"")+`<div class="sub">Journal</div>${i.join("")}`+(t>=e.done?"":`<div class="sub">Rewards: ${e.rewards.map(st).join(", ")}</div>`))}function iu(){let n=u.player;if(!n)return;let e=ae("hitpoints");Ot("hp-text").textContent=n.hp,Ot("hp-fill").style.height=Math.max(0,100*n.hp/e)+"%"}function _0(n,e="game"){let t=Ot("chat-messages"),i=document.createElement("div");for(i.className="chat-line "+e,i.textContent=n,t.appendChild(i);t.children.length>80;)t.firstChild.remove();t.scrollTop=t.scrollHeight}function m0(){Ot("chatbox").classList.toggle("filtered",!!qt().chatFilter)}function nM(){let n=Ot("chat-input"),e=Ot("chat-input-row"),t=()=>{n.classList.add("visible"),e.classList.add("chatting"),n.focus()},i=()=>{n.classList.remove("visible"),e.classList.remove("chatting"),n.blur()};Ot("chat-prompt").addEventListener("click",t),window.addEventListener("keydown",s=>{s.key==="Enter"&&!(document.activeElement&&document.activeElement.tagName==="INPUT")&&(t(),s.preventDefault())}),n.addEventListener("keydown",s=>{if(s.stopPropagation(),s.key==="Escape"&&i(),s.key!=="Enter")return;let r=n.value.trim();n.value="",i(),r&&(_0("You: "+r,"player"),Promise.resolve().then(()=>(Mi(),Jp)).then(o=>o.overhead(u.player,r)))})}var Ot,su=Ae(()=>{ht();tn();Gi();Ia();$c();at();En();Nr();f0();Dr();Eh();at();En();Ot=n=>document.getElementById(n)});function M0(n){let e=Um[n.def.dialogue];if(!e){A(`${n.def.name} doesn't seem interested in talking.`);return}u.ui.open="dialogue",lu=n,cu(n,e,e.start(Us))}function cu(n,e,t){if(!t||t==="end"){b0();return}let i=e.nodes[t];if(!i){b0();return}let s=i.npc!==void 0?n.def.name:"You",r=i.npc??i.player,o=(i.options||[]).filter(l=>!l.if||l.if(Us)),a=(l,c)=>{c&&c(Us),i.action&&!i._ran&&i.action(Us),cu(n,e,l)};o.length?sn(s,r,o.map(l=>({text:l.text,fn:()=>{i.action&&i.action(Us),l.action&&l.action(Us),cu(n,e,l.next)}}))):sn(s,r,[{text:"Click here to continue",cont:!0,fn:()=>a(i.next)}])}function b0(){if(Et(),u.ui.open==="dialogue"&&(u.ui.open=null),zs){let n=zs;zs=null,n()}}function iM(n){let e=Vi[n];Cn(n)>=e.done||(_r(n,e.done),n==="strongbox_showdown"?(Re("attack",350),Re("ranged",350),Se("coins",500),Us.give("deputy_badge",1)):n==="restless_mesa"?(Re("hitpoints",500),Re("hunter",400),Se("coins",750)):n==="ghost_harvest"&&(Re("prayer",400),Re("farming",400),Se("coins",300)),A(`Congratulations! Quest complete: ${e.name}.`,"quest"),ol(e))}function sM(n){if(u.coins<n){A("You can't afford a room.");return}u.coins-=n,K("coins");let e=document.getElementById("fade"),t=u.player;t.path=[],t.action=null,e.innerHTML='<div class="fade-text">You spend the night upstairs...</div>',e.classList.add("on"),u.traveling=!0,setTimeout(()=>{t.hp=ae("hitpoints"),u.faith=ae("prayer"),K("hp"),K("faith"),A("You spend the night upstairs and wake up refreshed. Your Hitpoints and Faith are fully restored."),setTimeout(()=>{e.classList.remove("on"),u.traveling=!1,setTimeout(()=>{e.innerHTML=""},450)},1200)},500)}var Us,zs,lu,hu=Ae(()=>{ht();Mi();Lh();Ia();zm();Sh();at();su();Rs();dl();Us={stage:n=>Cn(n),setStage:(n,e)=>_r(n,e),has:(n,e=1)=>pe(n,e),remove:(n,e=1)=>rt(n,e),give:(n,e=1)=>{Se(n,e)||(As(n,e,u.player.x,u.player.z),A("Your inventory is full, so it was placed on the ground."))},complete:n=>iM(n),openShop:n=>{zs=()=>Ir(n)},openBank:()=>{zs=()=>kr()},coins:()=>u.coins,rest:n=>{zs=()=>sM(n)},travel:()=>{zs=()=>mo()},say:n=>{lu&&Jt(lu,n)},sellBones:n=>{let e=Kn("bones");if(!e){A("You don't have any bones.");return}rt("bones",e),u.coins+=e*n,K("coins"),A(`Reverend Clay takes ${e} bone${e>1?"s":""} for burial and gives you ${e*n} coins.`)},sellFlakes:n=>{let e=Kn("gold_flakes");if(!e){A("You don't have any gold flakes.");return}rt("gold_flakes",e),u.coins+=e*n,K("coins"),A(`The assayer weighs ${e} gold flake${e>1?"s":""} and pays you ${e*n} coins.`)},buyHorse:()=>Im(),_owned:()=>!!u.ownedHorse,tan:()=>{let n=0,e=0;for(let[t,i]of Object.entries(Op))for(;pe(t)&&u.coins>=i.fee;)rt(t,1),Se(i.to,1),u.coins-=i.fee,e+=i.fee,n++;K("coins"),A(n?`Tanner Jed tans ${n} hide${n>1?"s":""} into leather for ${e} coin${e>1?"s":""}.`:"You don't have any hides to tan (or can't pay the fee).")}},zs=null,lu=null;We("pickup",n=>{n==="strongbox"&&Cn("strongbox_showdown")===2&&(_r("strongbox_showdown",3),A("You found the stolen strongbox! Return it to Sheriff Calloway.","quest")),n==="mesa_fang"&&Cn("restless_mesa")===1&&(_r("restless_mesa",2),A("You claimed a Mesa fang! Show it to Canyon Kate.","quest"))})});function ml(n){let e=se[n];if(!e||!e.pet)return!1;if(u.petNpc)return A("You already have a follower."),!1;let t=u.player;return u.petNpc=Tr({type:e.pet,x:t.x,z:t.z,wander:0}),u.pet=n,!0}function w0(){let n=u.petNpc;if(n){if(!Ie(u.pet)){A("You don't have enough inventory space.");return}Se(u.pet,1),op(n),u.npcs.splice(u.npcs.indexOf(n),1),u.petNpc=null,u.pet=null,A("You pick up your pet.")}}function S0(n){We("petdrop",e=>{u.petNpc?Ie(e)?(Se(e,1),A("You feel something weird sneaking into your backpack.","quest")):As(e,1,u.player.x,u.player.z,3e3):(ml(e),A("You have a funny feeling like you're being followed.","quest"))}),n&&n.pet&&se[n.pet]&&ml(n.pet)}var uu=Ae(()=>{ht();tn();at();Rs();Sn()});var Kp={};Eo(Kp,{clearUse:()=>Os,defaultAction:()=>bo,entName:()=>_o,entityOptions:()=>fu,examine:()=>R0,interact:()=>In,invDrop:()=>au,invOptions:()=>ou,invPrimary:()=>ru,invUseSelected:()=>zr,playerTick:()=>mu,walkTo:()=>vo,worldOptions:()=>Ei});function vo(n,e){let t=yo();if(t.dead)return;if(cl()){A("You're stunned!");return}let i=nh(t.x,t.z,n,e);t.action=null,t.anim=null,t.face=null,Os(),i&&(t.path=i,t.dest=i.length?i[i.length-1]:null)}function In(n,e,t={}){let i=yo();Os(),i.action={type:e,ent:n,...t},i.anim=null,i.path=[],i.dest=null,A0(i)}function rM(n){return n.type==="attack"?so():1}function T0(n,e,t){if(Zi(n,e,t.x,t.z,1))return!0;let i=t.x-n,s=t.z-e;if(Math.abs(i)+Math.abs(s)!==2||i&&s)return!1;let r=jn(n+i/2,e+s/2);return!!(r&&r.def.counter)}function A0(n){let e=n.action,t=e.ent;if(e.type==="take"){let i=nh(n.x,n.z,t.x,t.z);n.path=i||[]}else E0.includes(e.type)&&t.kind==="npc"?n.path=Ba(n.x,n.z,(i,s)=>T0(i,s,t),t.x,t.z)||[]:n.path=zf(n.x,n.z,t.x,t.z,rM(e))||[];e.tx=t.x,e.tz=t.z,n.dest=n.path.length?n.path[n.path.length-1]:null}function du(n,e){let t=e.ent;return e.type==="take"?n.x===t.x&&n.z===t.z:e.type==="attack"?gp(n,t):E0.includes(e.type)&&t.kind==="npc"?T0(n.x,n.z,t):Zi(n.x,n.z,t.x,t.z,1)}function oM(n){let e=n.ent;return e.kind==="npc"?!e.dead:e.kind==="ground"?u.ground.includes(e):e.kind==="object"?!!e.mesh:!0}function R0(n){n.kind==="npc"?A(n.def.examine):n.kind==="object"?A(n.depleted?"It has been depleted. It will be back soon.":n.text||n.def.examine):n.kind==="ground"&&A(se[n.id].examine)}function fu(n){let e=[],t=_o(n),i=(s,r)=>e.push({label:s,html:`${s} <span class="cm-target">${t}</span>`,fn:r});if(u.useSlot!=null&&u.inv[u.useSlot]&&n.kind!=="ground"){let s=se[u.inv[u.useSlot].id];e.push({label:"Use",html:`Use ${s.name} -> <span class="cm-target">${t}</span>`,fn:()=>zr(n)})}if(n.kind==="npc"){n.def.combat&&!n.def.talkFirst&&i("Attack",()=>In(n,"attack"));let s={Milk:"milk","Talk-to":"talk",Trade:"trade",Bank:"bank","Pick-up":"petpickup",Travel:"travel",Pet:"pet",Groom:"groom",Mount:"mount"};for(let r of n.def.options||[])i(r,()=>In(n,s[r]||"talk"));n.def.thievable&&i("Pickpocket",()=>In(n,"pickpocket")),n.def.combat&&n.def.talkFirst&&i("Attack",()=>In(n,"attack"))}else n.kind==="object"?(n.def.gather&&i(n.def.action,()=>In(n,"gather")),n.def.cookable&&i("Cook",()=>In(n,"cook")),n.def.pray&&i("Pray-at",()=>In(n,"pray")),n.def.verb&&i(n.def.verb,()=>In(n,"objuse"))):n.kind==="ground"&&i("Take",()=>In(n,"take"));return e}function _o(n){return n.kind==="npc"?n.def.name+(n.def.combat?` (level-${n.def.combat.level})`:""):n.kind==="object"?n.def.name:n.kind==="ground"?se[n.id].name+(n.qty>1?` (${n.qty})`:""):""}function Ei(n){let e=n.entity?fu(n.entity):[];if(n.tile)for(let t of u.ground)t.x===n.tile.x&&t.z===n.tile.z&&t!==n.entity&&e.push(...fu(t));return n.tile&&e.push({label:"Walk here",fn:()=>vo(n.tile.x,n.tile.z)}),n.entity&&e.push({label:"Examine",html:`Examine <span class="cm-target">${_o(n.entity)}</span>`,fn:()=>R0(n.entity)}),e}function bo(n){let e=Ei(n);return e.length&&!(n.entity&&n.entity.kind==="object"&&!n.entity.def.gather&&!n.entity.def.cookable&&!n.entity.def.pray&&!n.entity.def.verb&&u.useSlot==null)?(e[0].fn(),e[0]):n.tile?(vo(n.tile.x,n.tile.z),{label:"Walk here"}):null}function Os(){u.useSlot!=null&&(u.useSlot=null,K("inv"))}function C0(n){let e=se[n];return e.food?e.food.drink?"Drink":"Eat":e.bury?"Bury":e.pouch?"Open-all":n.startsWith("grimy_")?"Clean":Rr[n]?"Lay":e.equip?e.equip.slot==="weapon"?"Wield":"Wear":e.burn&&pe("tinderbox")?"Light":"Use"}function ru(n){let e=u.inv[n];e&&pu(n,C0(e.id))}function ou(n){let e=u.inv[n],t=se[e.id],i=[C0(e.id)];return i[0]!=="Use"&&i.push("Use"),i.push("Drop","Examine"),i.map(s=>({label:s,html:`${s} <span class="cm-target">${t.name}</span>`,fn:()=>pu(n,s)}))}function pu(n,e){let t=u.inv[n];if(!t)return;let i=se[t.id],s=yo();if(e==="Lay"){Rp(t.id);return}if(e==="Clean"){Wh(t.id,t.id);return}if(e==="Eat"||e==="Drink"){let r=ae("hitpoints"),o=s.hp;Yi(n),(i.food.next||i.food.leaves)&&(u.inv[n]={id:i.food.next||i.food.leaves,qty:1},K("inv")),s.hp=Math.min(r,s.hp+i.food.heal),s.cooldown=Math.max(s.cooldown,3),A(`You ${e==="Drink"?"drink":"eat"} the ${i.name.toLowerCase()}.`+(o<r?" It heals some health.":"")),i.boost&&(Kc(i.boost),A(i.boost.attack<0?"You feel stronger... and a little dizzy.":"You feel reinvigorated.")),K("hp"),K("eat")}else if(e==="Open-all")nm(n);else if(e==="Bury"){Yi(n);let r=Oa(s.x,s.z),o=r&&r.blessed;Re("prayer",i.bury*(o?1.5:1)),A("You dig a hole in the ground... You bury the bones."+(o?" The sanctified ground blesses your offering.":"")),s.cooldown=Math.max(s.cooldown,2)}else e==="Wield"||e==="Wear"?eh(n):e==="Light"?Mh(s,t.id):e==="Use"?(u.useSlot=n,K("inv"),A(`Use ${i.name} with...`,"system")):e==="Drop"&&i.pet?!u.petNpc&&ml(t.id)&&Yi(n):e==="Drop"?(Yi(n),As(t.id,t.qty,s.x,s.z),u.useSlot===n&&Os()):e==="Examine"&&A(i.examine)}function au(n){pu(n,"Drop")}function zr(n){let e=u.useSlot,t=u.inv[e];if(Os(),!t)return;let i=t.id;if(n.kind==="invslot"){let s=u.inv[n.slot]&&u.inv[n.slot].id;if(!s||n.slot===e)return;let r=["bucket_milk","flour","egg"];if(r.includes(i)&&r.includes(s)&&i!==s){hM();return}let o=se[i].burn?i:se[s].burn?s:null;if(o&&(i==="tinderbox"||s==="tinderbox")){Mh(yo(),o);return}if(bm(i,s)||Wh(i,s))return}else if(n.kind==="object"&&n.def.cookable&&se[i].cook){In(n,"cook",{item:i});return}else if(n.kind==="object"&&n.def.use==="smelt"&&Cs[i]){gm(i);return}else if(n.kind==="object"&&n.def.use==="smith"&&i.endsWith("_bar")){Hh();return}A("Nothing interesting happens.")}function mu(){let n=yo();if(n.dead)return;if(n.cooldown>0&&n.cooldown--,cl()){n.path=[];return}let e=n.action;if(e&&e.ent&&!oM(e)&&(n.action=null,n.anim=null),n.action&&n.action.ent){let a=n.action;du(n,a)?n.path=[]:(a.started&&(a.started=!1,n.anim=null),(!n.path.length||a.tx!==a.ent.x||a.tz!==a.ent.z)&&A0(n))}Dm();let t=u.mounted&&ae("riding")>=10,i=(u.run||u.mounted)&&u.runEnergy>0&&n.path.length>1,s=t&&i?3:i?2:1,r=0;for(let a=0;a<s&&n.path.length;a++){let l=n.path[0];if(It(l.x,l.z)){n.path=[];break}if(n.path.shift(),n.x=l.x,n.z=l.z,n.visQ.push({x:l.x,z:l.z}),r++,n.action&&n.action.ent&&du(n,n.action)){n.path=[];break}}if(i&&r>=2){let a=u.mounted?.35:.7;u.runEnergy=Math.max(0,u.runEnergy-a),u.runEnergy<=0&&(u.run=!1,u.mounted||A("You have run out of run energy."),K("settings"))}else u.runEnergy=Math.min(100,u.runEnergy+(u.mounted?.7:.5));r&&(n.moveSpeed=r/.6,(!n.action||n.action.type!=="firemake")&&(n.anim=null)),n.path.length||(n.dest=null);let o=n.action;if(o&&o.type==="firemake"){r||Dp(n);return}if(o&&["smelt","smith","craft","fletch_cut","fletch_attach","herb_clean","farm","agility"].includes(o.type)){r&&o.type,o.type==="smelt"?pm(n):o.type==="smith"?mm(n):o.type==="craft"?vm(n):o.type==="fletch_cut"?Mm(n):o.type==="fletch_attach"?wm(n):o.type==="herb_clean"?Rm(n):o.type==="farm"?Ep(n):o.type==="agility"&&Tm(n);return}if(o&&o.type==="channel"){if(r){n.action=null,n.anim=null;return}--o.timer<=0&&(n.action=null,n.anim=null,o.done());return}if(!(!o||!o.ent||!du(n,o)))switch(n.face=o.ent,o.type){case"attack":n.cooldown<=0&&xp(n,o.ent);break;case"talk":n.action=null,o.ent.face=n,M0(o.ent);break;case"trade":n.action=null,Ir(o.ent.def.shop);break;case"bank":n.action=null,kr();break;case"take":n.action=null,yp(o.ent);break;case"pray":n.action=null,pp();break;case"petpickup":n.action=null,w0();break;case"travel":n.action=null,o.ent.face=n,mo();break;case"objuse":n.action=null,aM(o.ent);break;case"pet":n.action=null,Jt(o.ent,"Neigh!"),A("You pat the horse. It nuzzles your hat.");break;case"groom":n.action=null,lM(o.ent);break;case"milk":n.action=null,cM(o.ent);break;case"pickpocket":n.action=null,Qp(n,o.ent);break;case"mount":n.action=null,o.ent.def.owned||u.ownedHorse?km(o.ent):A("Ask Ellie May about buying a horse.");break;case"gather":o.started?Ip(n,o.ent):Lp(n,o.ent)||(n.action=null,n.anim=null);break;case"cook":o.started?Up(n):Np(n,o.ent,o.item)||(n.action=null);break}}function aM(n){let e=n.def.use;if(n.def.steal){em(u.player,n);return}if(n.def.crack){tm(u.player,n);return}if(e==="coach")mo();else if(e==="smelt")dm();else if(e==="smith")Hh();else if(e==="craft")ym();else if(e==="farm")Sp(u.player,n);else if(e==="agility")u.player.action={type:"agility",ent:n},Em(u.player,n)||(u.player.action=null);else if(e==="bounty")Lm();else if(e==="trap")Cp(u.player,n);else if(e==="herb_pick"){if(!Ie("grimy_sage")){A("Your inventory is too full.");return}if(n.pickedAt&&u.tick-n.pickedAt<40){A("The herbs have been picked clean. They'll grow back.");return}n.pickedAt=u.tick;let t=ae("herblore")>=12&&Math.random()<.35?"grimy_bloom":ae("herblore")>=5&&Math.random()<.4?"grimy_snakeweed":"grimy_sage";Se(t,1),Re("herblore",2),A(`You pick some ${se[t].name.toLowerCase()}.`)}else if(e==="bell")Jt(n.npcProxy||u.player,"DONG! DONG!"),ns("mine"),A("You ring the church bell. Its peal echoes across the desert.");else if(e==="coop"){if(n.eggAt&&u.tick-n.eggAt<50){A("There are no eggs in the coop right now. Check back later.");return}if(!Ie("egg")){A("You don't have enough inventory space.");return}n.eggAt=u.tick,Se("egg",1),A("You find a fresh egg in the coop.")}else e==="stairs"?A("The guest rooms upstairs are rented by Miss Lottie. Ask her about a room for the night."):e==="piano"&&(Jt(u.player,"\u266A \u266B \u266A"),A("You plink out a tune. Ivory Pete winces politely."))}function lM(n){if(!pe("horse_brush")){A("You need a horse brush to groom the horse. Ellie May sells them.");return}if(n.groomedAt&&u.tick-n.groomedAt<100){A("This horse is already gleaming. Try again later.");return}n.groomedAt=u.tick,u.player.anim="chop",setTimeout(()=>{u.player.anim==="chop"&&!u.player.action&&(u.player.anim=null)},1800),Jt(n,"Neigh!"),u.coins+=5,K("coins"),A("You groom the horse until its coat shines. Ellie May tosses you 5 coins.")}function cM(n){if(!pe("bucket")){A("You need an empty bucket to milk the cow. The general store sells them.");return}rt("bucket",1),Se("bucket_milk",1),Jt(n,"Moo!"),A("You milk the cow and fill your bucket with fresh milk.")}function hM(){if(!pe("bucket_milk")||!pe("flour")||!pe("egg")){A("You need a bucket of milk, a pot of flour and an egg to make cake batter.");return}rt("bucket_milk",1),rt("flour",1),rt("egg",1),Se("cake_batter",1),Se("bucket",1),A("You mix the milk, flour and egg into a smooth cake batter.")}var yo,E0,Nr=Ae(()=>{ht();tn();at();ai();Lh();im();Mi();hl();ht();Rs();wh();xm();_m();Sm();Am();Cm();_h();bh();qh();dl();ei();ei();hu();En();ht();Er();uu();yo=()=>u.player;E0=["talk","trade","bank","travel"]});Pa();at();ht();tn();ai();Sn();Rs();wh();Nr();su();Mi();ht();Sn();Nr();En();var Ai=new Map,P0=0,L0=0,Ti=!1,gl=null,Fs=!1,Mo=0,Or={};function D0(n){let e=document.getElementById("game-root"),t=r=>{let o=n.getBoundingClientRect();return{x:r.clientX-o.left,y:r.clientY-o.top}};n.addEventListener("contextmenu",r=>r.preventDefault()),n.addEventListener("pointerdown",r=>{if(n.setPointerCapture(r.pointerId),Ai.set(r.pointerId,{x:r.clientX,y:r.clientY}),rl()){Ls(),Fs=!0;return}if(Ai.size===2){clearTimeout(gl),Ti=!0,Mo=I0();return}if(P0=r.clientX,L0=r.clientY,Ti=!1,Fs=!1,r.button===2){Fs=!0,s(t(r));return}if(r.button===1){Ti=!0;return}r.pointerType!=="mouse"&&(gl=setTimeout(()=>{Fs=!0,s(t(r))},480))}),n.addEventListener("pointermove",r=>{let o=Ai.get(r.pointerId);if(!o)return;let a=r.clientX-o.x,l=r.clientY-o.y;if(Ai.set(r.pointerId,{x:r.clientX,y:r.clientY}),Ai.size===2){let c=I0();Mo>0&&wr(Mo/c),Mo=c;return}!Ti&&Math.hypot(r.clientX-P0,r.clientY-L0)>10&&!Fs&&(Ti=!0,clearTimeout(gl)),Ti&&(r.buttons&1||r.buttons&4||r.pointerType!=="mouse")&&Mr(-a*.008,l*.006)});let i=r=>{let o=Ai.has(r.pointerId);if(Ai.delete(r.pointerId),clearTimeout(gl),Ai.size>0)return;if(Mo=0,!o||Ti||Fs||r.type==="pointercancel"){window.__lastTap={skipped:!0,had:o,dragging:Ti,lpFired:Fs,type:r.type},Ti=!1;return}if(r.button!==0&&r.pointerType==="mouse")return;let a=t(r);u.ui.open&&k0();let l=bo(Ki(a.x,a.y));window.__lastTap={x:a.x,y:a.y,action:l&&l.label},l&&uM(a.x,a.y,l.label==="Walk here"?"yellow":"red")};n.addEventListener("pointerup",i),n.addEventListener("pointercancel",i),n.addEventListener("wheel",r=>{r.preventDefault(),wr(r.deltaY>0?1.1:.9)},{passive:!1}),window.addEventListener("keydown",r=>{document.activeElement&&document.activeElement.tagName==="INPUT"||(Or[r.key]=!0,r.key==="Escape"&&(Ls(),Os(),k0()))}),window.addEventListener("keyup",r=>{Or[r.key]=!1}),e.addEventListener("pointerdown",r=>{rl()&&!r.target.closest("#context-menu")&&r.target!==n&&Ls()});function s(r){let o=Ki(r.x,r.y),a=Ei(o);if(!a.length)return;let l=n.getBoundingClientRect(),c=e.getBoundingClientRect();Pr(r.x+l.left-c.left,r.y+l.top-c.top,o.entity?_o(o.entity):"Choose Option",a)}}function I0(){let[n,e]=[...Ai.values()];return Math.hypot(n.x-e.x,n.y-e.y)||1}function k0(){u.ui.open==="shop"||u.ui.open==="bank"?Promise.resolve().then(()=>(En(),Ph)).then(n=>n.closeTrade()):(u.ui.open==="info"||u.ui.open==="dialogue")&&Promise.resolve().then(()=>(En(),Ph)).then(n=>{n.hideDialogue(),u.ui.open=null})}function N0(n){Or.ArrowLeft&&Mr(-1.8*n,0),Or.ArrowRight&&Mr(1.8*n,0),Or.ArrowUp&&Mr(0,1.2*n),Or.ArrowDown&&Mr(0,-1.2*n)}function uM(n,e,t){let i=document.createElement("div");i.className="click-x "+t,i.textContent="\u2715",i.style.left=n+"px",i.style.top=e+"px",document.getElementById("hitsplats").appendChild(i),setTimeout(()=>i.remove(),400)}pl();hu();Er();Dr();ht();Gi();_s();at();Sn();Er();gh();Dr();hl();Nr();var ft=n=>document.getElementById(n);function gu(n,e,t,i){let s=ft(n);s&&(s.querySelector(".orb-fill").style.height=Math.max(0,Math.min(100,100*e/t))+"%",s.querySelector(".orb-text").textContent=Math.floor(e),s.classList.toggle("active",!!i))}function xl(){gu("faith-orb",u.faith??1,ae("prayer"),u.prayers&&u.prayers.size),gu("run-orb",u.runEnergy??100,100,u.run);let n=Bn(),e=n&&n.equip.spec;ft("spec-orb").classList.toggle("disabled",!e),ft("spec-orb").title=e?`${e.name} (${e.cost}% energy) - tap to arm`:"Your weapon has no special attack",gu("spec-orb",u.spec??100,100,u.specArmed),ft("xp-total").textContent=rn(Object.values(u.skills).reduce((t,i)=>t+i,0)),dM()}function dM(){let n=u.player,e=u.npcs.find(i=>i.def.boss&&!i.dead&&(i.target===n||n.action&&n.action.ent===i)),t=ft("boss-bar");if(!e){t.hidden=!0;return}t.hidden=!1,ft("boss-name").textContent=`${e.def.name} (level-${e.def.combat.level})${e.burrowed?" - burrowed!":""}`,ft("boss-fill").style.width=Math.max(0,100*e.hp/e.maxHp)+"%",ft("boss-num").textContent=`${e.hp} / ${e.maxHp}`}var U0;function fM(n){let e=ft("toast");e.textContent=n,e.classList.add("show"),clearTimeout(U0),U0=setTimeout(()=>e.classList.remove("show"),1800)}function pM(n,e){if(cm(),!qt().levelUpPopups)return;let t=Hi[n],i=ft("levelup-popup");i.innerHTML=`<div class="lu-icon">${t.icon}</div><div class="lu-text">Congratulations, you just advanced a ${t.name} level.<br>Your ${t.name} level is now <b>${e}</b>.</div><div class="lu-hint">Tap to close</div>`,i.hidden=!1,clearTimeout(i._t),i._t=setTimeout(()=>{i.hidden=!0},4e3)}function mM(){let n=ft("wm-canvas"),e=n.getContext("2d"),t=document.getElementById("minimap")._base,i=n.width/96;e.imageSmoothingEnabled=!1,t&&e.drawImage(t,0,0,n.width,n.height),e.font="bold 13px Georgia, serif",e.textAlign="center";for(let r of vr.filter(o=>o.id!=="desert"))e.fillStyle="rgba(0,0,0,0.6)",e.fillText(r.name,(r.x0+r.x1)/2*i+1,(r.z0+r.z1)/2*i+1),e.fillStyle="#ffe080",e.fillText(r.name,(r.x0+r.x1)/2*i,(r.z0+r.z1)/2*i);e.font="10px sans-serif",e.fillStyle="#fff";for(let r of Wi)e.fillText(r.name[0]+r.name.slice(1).toLowerCase(),(r.x+r.w/2)*i,(r.z-.3)*i);let s=u.player;e.fillStyle="#fff",e.strokeStyle="#000",e.beginPath(),e.arc((s.x+.5)*i,(s.z+.5)*i,4,0,Math.PI*2),e.fill(),e.stroke()}function gM(){u.ui.open="map",ft("world-map").hidden=!1,mM()}function xM(){ft("world-map").hidden=!0,u.ui.open==="map"&&(u.ui.open=null)}function O0(){ft("faith-orb").addEventListener("click",()=>{if(u.prayers.size){u.prayers.clear(),K("faith");return}(u.quickPrayers||["thick_hide"]).filter(i=>ji[i]&&ae("prayer")>=ji[i].lvl).forEach(Ka)}),We("faith",()=>{u.prayers.size&&(u.quickPrayers=[...u.prayers])}),ft("run-orb").addEventListener("click",()=>{if(!u.run&&u.runEnergy<1){A("You don't have enough run energy.");return}u.run=!u.run,K("settings"),xl()}),ft("spec-orb").addEventListener("click",()=>{let t=Bn(),i=t&&t.equip.spec;if(!i){A("Your weapon doesn't have a special attack.");return}if(!u.specArmed&&u.spec<i.cost){A("You don't have enough special attack energy.");return}u.specArmed=!u.specArmed,xl()}),ft("compass").addEventListener("click",t=>{t.stopPropagation(),nt.yaw=0}),ft("xp-btn").addEventListener("click",t=>{t.stopPropagation();let i=ft("xp-counter");i.hidden=!i.hidden,ft("xp-btn").classList.toggle("active",!i.hidden)}),ft("xp-btn").classList.add("active"),ft("worldmap-btn").addEventListener("click",gM),ft("zoom-in-btn").addEventListener("click",t=>{t.stopPropagation(),wr(.85)}),ft("zoom-out-btn").addEventListener("click",t=>{t.stopPropagation(),wr(1.18)}),["gesturestart","gesturechange","gestureend"].forEach(t=>document.addEventListener(t,i=>i.preventDefault(),{passive:!1})),ft("wm-close").addEventListener("click",xM),ft("levelup-popup").addEventListener("click",()=>{ft("levelup-popup").hidden=!0});for(let t of["orbs","faith","spec","skills","equip","settings","hit","npcdeath"])We(t,xl);We("levelup",pM),We("saved",()=>{qt().autosaveNotice&&fM("\u{1F4BE} Game saved")}),We("hit",(t,i)=>ns(i>0?"hit":"miss")),We("attackfx",(t,i,s)=>{s&&ns("gun")}),We("eat",()=>ns("eat")),We("pickup",()=>ns("pickup")),We("death",()=>ns("death"));let n=ft("game-canvas"),e=0;n.addEventListener("pointermove",t=>{if(t.pointerType!=="mouse"||!qt().menuHints)return;let i=performance.now();if(i-e<80)return;e=i;let s=n.getBoundingClientRect();z0(Ei(Ki(t.clientX-s.left,t.clientY-s.top)))}),n.addEventListener("pointerdown",t=>{if(t.pointerType==="mouse"||!qt().menuHints)return;let i=n.getBoundingClientRect();z0(Ei(Ki(t.clientX-i.left,t.clientY-i.top)),!0)}),xl()}function z0(n,e){let t=ft("hover-text");if(!n.length){t.innerHTML="";return}let i=n.length-1;t.innerHTML=`${n[0].html||n[0].label}${i>0?` <span class="ht-more">/ ${i} more option${i>1?"s":""}${e?" (long-press)":""}</span>`:""}`}uu();dl();qh();hl();Sn();var vM={model:"human",colors:{shirt:3824266,pants:5917242,hat:9071162,skin:14723192,vest:6965802}},xu=null,F0=performance.now();function _M(){Jc();let n=e0();Zp(n),n||(u.run=qt().runDefault),dp(n);let{spawns:e}=Uf(),t=document.getElementById("game-canvas");tp(t);let i=n&&n.pos&&!It(n.pos.x,n.pos.z)?n.pos:wn,s=u.player={kind:"player",x:i.x,z:i.z,hp:n?Math.max(1,Math.min(n.hp|0,ae("hitpoints"))):ae("hitpoints"),path:[],action:null,cooldown:0,maxHp:()=>ae("hitpoints")};Xa(s,vM),hp(s),window.innerHeight>window.innerWidth&&(nt.dist=22);for(let r of e)Tr(r);S0(n),Nm(n),u.objects=Pn,g0(),Dh(),D0(t),O0(),cp(()=>qt().maxZoom),We("settings",B0),B0(),addEventListener("pointerdown",Bh,{once:!0}),addEventListener("keydown",Bh,{once:!0}),We("equip",H0),H0(),We("attackfx",SM),x0(),A("Welcome to West-Scape.","system"),A(n?"Welcome back, partner. Your progress was loaded.":"Tap to walk. Long-press (or right-click) for more options. Drag to rotate, pinch to zoom.","system"),n||A("Sheriff Calloway might have work for you - his office is on the south side of Main Street.","system"),setInterval(bM,600),setInterval(Si,6e3),addEventListener("pagehide",Si),document.addEventListener("visibilitychange",()=>{document.hidden&&Si()}),document.getElementById("loading").classList.add("hidden"),requestAnimationFrame(G0)}function bM(){try{if(u.tick++,u.loggedOut)return;mu(),fp();for(let i of u.npcs)vp(i);for(let i=Pn.length-1;i>=0;i--)kp(Pn[i]);for(let i=u.ground.length-1;i>=0;i--)u.tick>=u.ground[i].despawnAt&&yh(u.ground[i]);let n=u.player;u.tick%100===0&&n.hp<ae("hitpoints")&&(n.hp++,K("hp")),u.tick%100===0&&jc();let e=Nf(n.x,n.z);e!==u.inBuilding&&(u.inBuilding=e,lh(qt().hideRoofs,e&&e.id)),u.tick%50===0&&u.spec<100&&(u.spec=Math.min(100,u.spec+10),K("spec")),K("orbs");let t=Oa(n.x,n.z);t&&t!==xu&&(xu&&A(`You enter ${t.name}.`,"system"),xu=t,u.region=t.id,hm(t.music)),n.aiming=!!(n.action&&n.action.type==="attack"&&se[u.equip.weapon||"rusty_knife"]?.equip.style==="ranged")}catch(n){console.error(n)}}function G0(){let n=performance.now(),e=Math.min(.1,(n-F0)/1e3);F0=n,N0(e),ap([u.player,...u.npcs],u.player),Nh([u.player,...u.npcs]),Uh(),requestAnimationFrame(G0)}function B0(){let n=qt();lh(n.hideRoofs,u.inBuilding&&u.inBuilding.id),document.getElementById("game-canvas").style.filter=n.brightness!==1?`brightness(${n.brightness})`:"",document.getElementById("minimap-wrap").style.display=n.minimap?"":"none",am({music:n.musicVolume,sfx:n.sfxVolume,sound:n.sound}),nt.dist>n.maxZoom&&(nt.dist=n.maxZoom)}function H0(){dh(u.player,sp(u.equip.weapon))}var MM=new On(.05,.05,.35),wM=new yn({color:16769152});function SM(n,e,t){if(!t)return;let i=new Mt(MM,wM);zt.add(i);let s=performance.now(),r=()=>{let o=(performance.now()-s)/180;if(o>=1){zt.remove(i);return}let a=n.vx+(e.vx-n.vx)*o,l=n.vz+(e.vz-n.vz)*o;i.position.set(a,.9+(n.model.group.position.y+(e.model.group.position.y-n.model.group.position.y)*o),l),i.lookAt(e.vx,i.position.y,e.vz),requestAnimationFrame(r)};r()}window.WS={G:u,S:qt,roofsHidden:ep,invAdd:Se,addXp:Re,emit:K,samplePixels:up,walkTo:vo,interact:In,defaultAction:bo,worldOptions:Ei,invUseSelected:zr,pick:Ki,worldToScreen:$a,cam:nt,objects:Pn,saveGame:Si,resetSave:fl,level:ae,invCount:Kn,tileScreen:(n,e,t=.3)=>$a(n+.5,t,e+.5)};try{_M()}catch(n){console.error(n);let e=document.getElementById("loading");e.textContent="Failed to start: "+n.message}
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
