var Wm=Object.defineProperty;var Ue=(n,e)=>()=>(n&&(e=n(n=0)),e);var nl=(n,e)=>{for(var t in e)Wm(n,t,{get:e[t],enumerable:!0})};function Wr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function yn(n,e,t){return Math.max(e,Math.min(t,n))}function W0(n,e){return(n%e+e)%e}function ul(n,e,t){return(1-t)*n+t*e}function Lu(n){return(n&n-1)===0&&n!==0}function Vl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Rr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}function Ld(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Fo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function q0(){let n=Fo("canvas");return n.style.display="block",n}function kr(n){n in Iu||(Iu[n]=!0,console.warn(n))}function js(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function pl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Bo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function gl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ki.fromArray(n,r);let a=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),l=e.dot(Ki),c=t.dot(Ki),h=i.dot(Ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function El(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function rg(n,e,t,i,s,r,o,a){let l;if(e.side===vn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Pi,a),l===null)return null;To.copy(a),To.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(To);return c<t.near||c>t.far?null:{distance:c,point:To.clone(),object:n}}function Ao(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Gs),n.getVertexPosition(l,Vs),n.getVertexPosition(c,Ws);let h=rg(n,e,t,i,Gs,Vs,Ws,Eo);if(h){s&&(Mo.fromBufferAttribute(s,a),So.fromBufferAttribute(s,l),wo.fromBufferAttribute(s,c),h.uv=$s.getInterpolation(Eo,Gs,Vs,Ws,Mo,So,wo,new Ye)),r&&(Mo.fromBufferAttribute(r,a),So.fromBufferAttribute(r,l),wo.fromBufferAttribute(r,c),h.uv1=$s.getInterpolation(Eo,Gs,Vs,Ws,Mo,So,wo,new Ye),h.uv2=h.uv1),o&&(qu.fromBufferAttribute(o,a),Xu.fromBufferAttribute(o,l),Yu.fromBufferAttribute(o,c),h.normal=$s.getInterpolation(Eo,Gs,Vs,Ws,qu,Xu,Yu,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new U,materialIndex:0};$s.getNormal(Gs,Vs,Ws,u.normal),h.face=u}return h}function sr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function hn(n){let e={};for(let t=0;t<n.length;t++){let i=sr(n[t]);for(let s in i)e[s]=i[s]}return e}function og(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function kd(n){return n.getRenderTarget()===null?n.outputColorSpace:lt.workingColorSpace}function Dd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function dg(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,f=c.usage,g=u.byteLength,x=n.createBuffer();n.bindBuffer(h,x),n.bufferData(h,u,f),c.onUploadCallback();let v;if(u instanceof Float32Array)v=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=n.SHORT;else if(u instanceof Uint32Array)v=n.UNSIGNED_INT;else if(u instanceof Int32Array)v=n.INT;else if(u instanceof Int8Array)v=n.BYTE;else if(u instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:x,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:g}}function r(c,h,u){let f=h.array,g=h._updateRange,x=h.updateRanges;if(n.bindBuffer(u,c),g.count===-1&&x.length===0&&n.bufferSubData(u,0,f),x.length!==0){for(let v=0,m=x.length;v<m;v++){let d=x[v];t?n.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):n.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}g.count!==-1&&(t?n.bufferSubData(u,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):n.bufferSubData(u,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}function Xy(n,e,t,i,s,r,o){let a=new Ve(0),l=r===!0?0:1,c,h,u=null,f=0,g=null;function x(m,d){let M=!1,y=d.isScene===!0?d.background:null;y&&y.isTexture&&(y=(d.backgroundBlurriness>0?t:e).get(y)),y===null?v(a,l):y&&y.isColor&&(v(y,1),M=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===ha)?(h===void 0&&(h=new mt(new Ln(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:sr(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=lt.getTransfer(y.colorSpace)!==xt,(u!==y||f!==y.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,g=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new mt(new Ii(2,2),new di({name:"BackgroundMaterial",uniforms:sr(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=lt.getTransfer(y.colorSpace)!==xt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,g=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,d){m.getRGB(Co,kd(n)),i.buffers.color.setClear(Co.r,Co.g,Co.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:x}}function Yy(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(I,z,Y,J,Z){let $=!1;if(o){let ee=v(J,Y,z);c!==ee&&(c=ee,g(c.object)),$=d(I,J,Y,Z),$&&M(I,J,Y,Z)}else{let ee=z.wireframe===!0;(c.geometry!==J.id||c.program!==Y.id||c.wireframe!==ee)&&(c.geometry=J.id,c.program=Y.id,c.wireframe=ee,$=!0)}Z!==null&&t.update(Z,n.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,G(I,z,Y,J),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function g(I){return i.isWebGL2?n.bindVertexArray(I):r.bindVertexArrayOES(I)}function x(I){return i.isWebGL2?n.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function v(I,z,Y){let J=Y.wireframe===!0,Z=a[I.id];Z===void 0&&(Z={},a[I.id]=Z);let $=Z[z.id];$===void 0&&($={},Z[z.id]=$);let ee=$[J];return ee===void 0&&(ee=m(f()),$[J]=ee),ee}function m(I){let z=[],Y=[],J=[];for(let Z=0;Z<s;Z++)z[Z]=0,Y[Z]=0,J[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Y,attributeDivisors:J,object:I,attributes:{},index:null}}function d(I,z,Y,J){let Z=c.attributes,$=z.attributes,ee=0,ie=Y.getAttributes();for(let pe in ie)if(ie[pe].location>=0){let K=Z[pe],de=$[pe];if(de===void 0&&(pe==="instanceMatrix"&&I.instanceMatrix&&(de=I.instanceMatrix),pe==="instanceColor"&&I.instanceColor&&(de=I.instanceColor)),K===void 0||K.attribute!==de||de&&K.data!==de.data)return!0;ee++}return c.attributesNum!==ee||c.index!==J}function M(I,z,Y,J){let Z={},$=z.attributes,ee=0,ie=Y.getAttributes();for(let pe in ie)if(ie[pe].location>=0){let K=$[pe];K===void 0&&(pe==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),pe==="instanceColor"&&I.instanceColor&&(K=I.instanceColor));let de={};de.attribute=K,K&&K.data&&(de.data=K.data),Z[pe]=de,ee++}c.attributes=Z,c.attributesNum=ee,c.index=J}function y(){let I=c.newAttributes;for(let z=0,Y=I.length;z<Y;z++)I[z]=0}function A(I){P(I,0)}function P(I,z){let Y=c.newAttributes,J=c.enabledAttributes,Z=c.attributeDivisors;Y[I]=1,J[I]===0&&(n.enableVertexAttribArray(I),J[I]=1),Z[I]!==z&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,z),Z[I]=z)}function C(){let I=c.newAttributes,z=c.enabledAttributes;for(let Y=0,J=z.length;Y<J;Y++)z[Y]!==I[Y]&&(n.disableVertexAttribArray(Y),z[Y]=0)}function R(I,z,Y,J,Z,$,ee){ee===!0?n.vertexAttribIPointer(I,z,Y,Z,$):n.vertexAttribPointer(I,z,Y,J,Z,$)}function G(I,z,Y,J){if(i.isWebGL2===!1&&(I.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let Z=J.attributes,$=Y.getAttributes(),ee=z.defaultAttributeValues;for(let ie in $){let pe=$[ie];if(pe.location>=0){let q=Z[ie];if(q===void 0&&(ie==="instanceMatrix"&&I.instanceMatrix&&(q=I.instanceMatrix),ie==="instanceColor"&&I.instanceColor&&(q=I.instanceColor)),q!==void 0){let K=q.normalized,de=q.itemSize,Se=t.get(q);if(Se===void 0)continue;let Me=Se.buffer,Oe=Se.type,Be=Se.bytesPerElement,Le=i.isWebGL2===!0&&(Oe===n.INT||Oe===n.UNSIGNED_INT||q.gpuType===bd);if(q.isInterleavedBufferAttribute){let tt=q.data,O=tt.stride,an=q.offset;if(tt.isInstancedInterleavedBuffer){for(let Te=0;Te<pe.locationSize;Te++)P(pe.location+Te,tt.meshPerAttribute);I.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Te=0;Te<pe.locationSize;Te++)A(pe.location+Te);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let Te=0;Te<pe.locationSize;Te++)R(pe.location+Te,de/pe.locationSize,Oe,K,O*Be,(an+de/pe.locationSize*Te)*Be,Le)}else{if(q.isInstancedBufferAttribute){for(let tt=0;tt<pe.locationSize;tt++)P(pe.location+tt,q.meshPerAttribute);I.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let tt=0;tt<pe.locationSize;tt++)A(pe.location+tt);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let tt=0;tt<pe.locationSize;tt++)R(pe.location+tt,de/pe.locationSize,Oe,K,de*Be,de/pe.locationSize*tt*Be,Le)}}else if(ee!==void 0){let K=ee[ie];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(pe.location,K);break;case 3:n.vertexAttrib3fv(pe.location,K);break;case 4:n.vertexAttrib4fv(pe.location,K);break;default:n.vertexAttrib1fv(pe.location,K)}}}}C()}function b(){X();for(let I in a){let z=a[I];for(let Y in z){let J=z[Y];for(let Z in J)x(J[Z].object),delete J[Z];delete z[Y]}delete a[I]}}function T(I){if(a[I.id]===void 0)return;let z=a[I.id];for(let Y in z){let J=z[Y];for(let Z in J)x(J[Z].object),delete J[Z];delete z[Y]}delete a[I.id]}function V(I){for(let z in a){let Y=a[z];if(Y[I.id]===void 0)continue;let J=Y[I.id];for(let Z in J)x(J[Z].object),delete J[Z];delete Y[I.id]}}function X(){re(),h=!0,c!==l&&(c=l,g(c.object))}function re(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:X,resetDefaultState:re,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:V,initAttributes:y,enableAttribute:A,disableUnusedAttributes:C}}function $y(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,f){if(f===0)return;let g,x;if(s)g=n,x="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[x](r,h,u,f),t.update(u,r,f)}function c(h,u,f){if(f===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<f;x++)this.render(h[x],u[x]);else{g.multiDrawArraysWEBGL(r,h,0,u,0,f);let x=0;for(let v=0;v<f;v++)x+=u[v];t.update(x,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Zy(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,A=o||e.has("OES_texture_float"),P=y&&A,C=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:M,vertexTextures:y,floatFragmentTextures:A,floatVertexTextures:P,maxSamples:C}}function Jy(n){let e=this,t=null,i=0,s=!1,r=!1,o=new li,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let g=u.length!==0||f||i!==0||s;return s=f,i=u.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,g){let x=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,d=n.get(u);if(!s||x===null||x.length===0||r&&!m)r?h(null):c();else{let M=r?0:i,y=M*4,A=d.clippingState||null;l.value=A,A=h(x,f,y,g);for(let P=0;P!==y;++P)A[P]=t[P];d.clippingState=A,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,g,x){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,x!==!0||m===null){let d=g+v*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,A=g;y!==v;++y,A+=4)o.copy(u[y]).applyMatrix4(M,a),o.normal.toArray(m,A),m[A+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Ky(n){let e=new WeakMap;function t(o,a){return a===zl?o.mapping=er:a===Ol&&(o.mapping=tr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===zl||a===Ol)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Yl(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}function jy(n){let e=[],t=[],i=[],s=n,r=n-Zs+1+$u.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Zs?l=$u[o-n+Zs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],g=6,x=6,v=3,m=2,d=1,M=new Float32Array(v*x*g),y=new Float32Array(m*x*g),A=new Float32Array(d*x*g);for(let C=0;C<g;C++){let R=C%3*2/3-1,G=C>2?0:-1,b=[R,G,0,R+2/3,G,0,R+2/3,G+1,0,R,G,0,R+2/3,G+1,0,R,G+1,0];M.set(b,v*x*C),y.set(f,m*x*C);let T=[C,C,C,C,C,C];A.set(T,d*x*C)}let P=new mn;P.setAttribute("position",new tn(M,v)),P.setAttribute("uv",new tn(y,m)),P.setAttribute("faceIndex",new tn(A,d)),e.push(P),s>Zs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ku(n,e,t){let i=new ui(n,e,t);return i.texture.mapping=ha,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Po(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Qy(n,e,t){let i=new Float32Array(ns),s=new U(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function ju(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Qu(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Mc(){return`

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
	`}function ev(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===zl||l===Ol,h=l===er||l===tr;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Zo(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Zo(n));let f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function tv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function nv(n,e,t,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let x in f.attributes)e.remove(f.attributes[x]);for(let x in f.morphAttributes){let v=f.morphAttributes[x];for(let m=0,d=v.length;m<d;m++)e.remove(v[m])}f.removeEventListener("dispose",o),delete s[f.id];let g=r.get(f);g&&(e.remove(g),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let x in f)e.update(f[x],n.ARRAY_BUFFER);let g=u.morphAttributes;for(let x in g){let v=g[x];for(let m=0,d=v.length;m<d;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(u){let f=[],g=u.index,x=u.attributes.position,v=0;if(g!==null){let M=g.array;v=g.version;for(let y=0,A=M.length;y<A;y+=3){let P=M[y+0],C=M[y+1],R=M[y+2];f.push(P,C,C,R,R,P)}}else if(x!==void 0){let M=x.array;v=x.version;for(let y=0,A=M.length/3-1;y<A;y+=3){let P=y+0,C=y+1,R=y+2;f.push(P,C,C,R,R,P)}}else return;let m=new(Ld(f)?qo:Wo)(f,1);m.version=v;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let g=u.index;g!==null&&f.version<g.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function iv(n,e,t,i){let s=i.isWebGL2,r;function o(g){r=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function h(g,x){n.drawElements(r,x,a,g*l),t.update(x,r,1)}function u(g,x,v){if(v===0)return;let m,d;if(s)m=n,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,x,a,g*l,v),t.update(x,r,v)}function f(g,x,v){if(v===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<v;d++)this.render(g[d]/l,x[d]);else{m.multiDrawElementsWEBGL(r,x,0,a,g,0,v);let d=0;for(let M=0;M<v;M++)d+=x[M];t.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function sv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function rv(n,e){return n[0]-e[0]}function ov(n,e){return Math.abs(e[1])-Math.abs(n[1])}function av(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new Xt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=g!==void 0?g.length:0,v=r.get(h);if(v===void 0||v.count!==x){let I=function(){X.dispose(),r.delete(h),h.removeEventListener("dispose",I)};v!==void 0&&v.texture.dispose();let M=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],G=0;M===!0&&(G=1),y===!0&&(G=2),A===!0&&(G=3);let b=h.attributes.position.count*G,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let V=new Float32Array(b*T*4*x),X=new Go(V,b,T,x);X.type=Ti,X.needsUpdate=!0;let re=G*4;for(let z=0;z<x;z++){let Y=P[z],J=C[z],Z=R[z],$=b*T*4*z;for(let ee=0;ee<Y.count;ee++){let ie=ee*re;M===!0&&(o.fromBufferAttribute(Y,ee),V[$+ie+0]=o.x,V[$+ie+1]=o.y,V[$+ie+2]=o.z,V[$+ie+3]=0),y===!0&&(o.fromBufferAttribute(J,ee),V[$+ie+4]=o.x,V[$+ie+5]=o.y,V[$+ie+6]=o.z,V[$+ie+7]=0),A===!0&&(o.fromBufferAttribute(Z,ee),V[$+ie+8]=o.x,V[$+ie+9]=o.y,V[$+ie+10]=o.z,V[$+ie+11]=Z.itemSize===4?o.w:1)}}v={count:x,texture:X,size:new Ye(b,T)},r.set(h,v),h.addEventListener("dispose",I)}let m=0;for(let M=0;M<f.length;M++)m+=f[M];let d=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",d),u.getUniforms().setValue(n,"morphTargetInfluences",f),u.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{let g=f===void 0?0:f.length,x=i[h.id];if(x===void 0||x.length!==g){x=[];for(let y=0;y<g;y++)x[y]=[y,0];i[h.id]=x}for(let y=0;y<g;y++){let A=x[y];A[0]=y,A[1]=f[y]}x.sort(ov);for(let y=0;y<8;y++)y<g&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(rv);let v=h.morphAttributes.position,m=h.morphAttributes.normal,d=0;for(let y=0;y<8;y++){let A=a[y],P=A[0],C=A[1];P!==Number.MAX_SAFE_INTEGER&&C?(v&&h.getAttribute("morphTarget"+y)!==v[P]&&h.setAttribute("morphTarget"+y,v[P]),m&&h.getAttribute("morphNormal"+y)!==m[P]&&h.setAttribute("morphNormal"+y,m[P]),s[y]=C,d+=C):(v&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let M=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(n,"morphTargetBaseInfluence",M),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function lv(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}function lr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=ed[s];if(r===void 0&&(r=new Float32Array(s),ed[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function da(n,e){let t=td[e];t===void 0&&(t=new Int32Array(e),td[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function cv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function hv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function uv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function dv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function fv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(zt(t,i))return;sd.set(i),n.uniformMatrix2fv(this.addr,!1,sd),Ot(t,i)}}function pv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(zt(t,i))return;id.set(i),n.uniformMatrix3fv(this.addr,!1,id),Ot(t,i)}}function mv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(zt(t,i))return;nd.set(i),n.uniformMatrix4fv(this.addr,!1,nd),Ot(t,i)}}function gv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function yv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function vv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function _v(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function bv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function Mv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function Sv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function wv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Nd:Ud;t.setTexture2D(e||r,s)}function Ev(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Od,s)}function Tv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Fd,s)}function Av(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||zd,s)}function Rv(n){switch(n){case 5126:return cv;case 35664:return hv;case 35665:return uv;case 35666:return dv;case 35674:return fv;case 35675:return pv;case 35676:return mv;case 5124:case 35670:return gv;case 35667:case 35671:return xv;case 35668:case 35672:return yv;case 35669:case 35673:return vv;case 5125:return _v;case 36294:return bv;case 36295:return Mv;case 36296:return Sv;case 35678:case 36198:case 36298:case 36306:case 35682:return wv;case 35679:case 36299:case 36307:return Ev;case 35680:case 36300:case 36308:case 36293:return Tv;case 36289:case 36303:case 36311:case 36292:return Av}}function Cv(n,e){n.uniform1fv(this.addr,e)}function Pv(n,e){let t=lr(e,this.size,2);n.uniform2fv(this.addr,t)}function Lv(n,e){let t=lr(e,this.size,3);n.uniform3fv(this.addr,t)}function Iv(n,e){let t=lr(e,this.size,4);n.uniform4fv(this.addr,t)}function kv(n,e){let t=lr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Dv(n,e){let t=lr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Uv(n,e){let t=lr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Nv(n,e){n.uniform1iv(this.addr,e)}function zv(n,e){n.uniform2iv(this.addr,e)}function Ov(n,e){n.uniform3iv(this.addr,e)}function Fv(n,e){n.uniform4iv(this.addr,e)}function Bv(n,e){n.uniform1uiv(this.addr,e)}function Hv(n,e){n.uniform2uiv(this.addr,e)}function Gv(n,e){n.uniform3uiv(this.addr,e)}function Vv(n,e){n.uniform4uiv(this.addr,e)}function Wv(n,e,t){let i=this.cache,s=e.length,r=da(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ud,r[o])}function qv(n,e,t){let i=this.cache,s=e.length,r=da(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Od,r[o])}function Xv(n,e,t){let i=this.cache,s=e.length,r=da(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Fd,r[o])}function Yv(n,e,t){let i=this.cache,s=e.length,r=da(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||zd,r[o])}function $v(n){switch(n){case 5126:return Cv;case 35664:return Pv;case 35665:return Lv;case 35666:return Iv;case 35674:return kv;case 35675:return Dv;case 35676:return Uv;case 5124:case 35670:return Nv;case 35667:case 35671:return zv;case 35668:case 35672:return Ov;case 35669:case 35673:return Fv;case 5125:return Bv;case 36294:return Hv;case 36295:return Gv;case 36296:return Vv;case 35678:case 36198:case 36298:case 36306:case 35682:return Wv;case 35679:case 36299:case 36307:return qv;case 35680:case 36300:case 36308:case 36293:return Xv;case 36289:case 36303:case 36311:case 36292:return Yv}}function rd(n,e){n.seq.push(e),n.map[e.id]=e}function Zv(n,e,t){let i=n.name,s=i.length;for(kl.lastIndex=0;;){let r=kl.exec(i),o=kl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){rd(t,c===void 0?new $l(a,n,e):new Zl(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Jl(a),rd(t,u)),t=u}}}function od(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function jv(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Qv(n){let e=lt.getPrimaries(lt.workingColorSpace),t=lt.getPrimaries(n),i;switch(e===t?i="":e===zo&&t===No?i="LinearDisplayP3ToLinearSRGB":e===No&&t===zo&&(i="LinearSRGBToLinearDisplayP3"),n){case hi:case ua:return[i,"LinearTransferOETF"];case Lt:case bc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ad(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+jv(n.getShaderSource(e),o)}else return s}function e_(n,e){let t=Qv(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function t_(n,e){let t;switch(e){case v0:t="Linear";break;case _0:t="Reinhard";break;case b0:t="OptimizedCineon";break;case M0:t="ACESFilmic";break;case w0:t="AgX";break;case S0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function n_(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Js).join(`
`)}function i_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Js).join(`
`)}function s_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function r_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Js(n){return n!==""}function ld(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Kl(n){return n.replace(o_,l_)}function l_(n,e){let t=Ge[e];if(t===void 0){let i=a_.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kl(t)}function hd(n){return n.replace(c_,h_)}function h_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ud(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function u_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ym?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function d_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case er:case tr:e="ENVMAP_TYPE_CUBE";break;case ha:e="ENVMAP_TYPE_CUBE_UV";break}return e}function f_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case tr:e="ENVMAP_MODE_REFRACTION";break}return e}function p_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vc:e="ENVMAP_BLENDING_MULTIPLY";break;case x0:e="ENVMAP_BLENDING_MIX";break;case y0:e="ENVMAP_BLENDING_ADD";break}return e}function m_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function g_(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=u_(t),c=d_(t),h=f_(t),u=p_(t),f=m_(t),g=t.isWebGL2?"":n_(t),x=i_(t),v=s_(r),m=s.createProgram(),d,M,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Js).join(`
`),d.length>0&&(d+=`
`),M=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Js).join(`
`),M.length>0&&(M+=`
`)):(d=[ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),M=[g,ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Ri?t_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,e_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Js).join(`
`)),o=Kl(o),o=ld(o,t),o=cd(o,t),a=Kl(a),a=ld(a,t),a=cd(a,t),o=hd(o),a=hd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let A=y+d+o,P=y+M+a,C=od(s,s.VERTEX_SHADER,A),R=od(s,s.FRAGMENT_SHADER,P);s.attachShader(m,C),s.attachShader(m,R),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function G(X){if(n.debug.checkShaderErrors){let re=s.getProgramInfoLog(m).trim(),I=s.getShaderInfoLog(C).trim(),z=s.getShaderInfoLog(R).trim(),Y=!0,J=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,C,R);else{let Z=ad(s,C,"vertex"),$=ad(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+re+`
`+Z+`
`+$)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(I===""||z==="")&&(J=!1);J&&(X.diagnostics={runnable:Y,programLog:re,vertexShader:{log:I,prefix:d},fragmentShader:{log:z,prefix:M}})}s.deleteShader(C),s.deleteShader(R),b=new Qs(s,m),T=r_(s,m)}let b;this.getUniforms=function(){return b===void 0&&G(this),b};let T;this.getAttributes=function(){return T===void 0&&G(this),T};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(m,Jv)),V},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kv++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=R,this}function y_(n,e,t,i,s,r,o){let a=new Or,l=new jl,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,g=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===0?"uv":`uv${b}`}function m(b,T,V,X,re){let I=X.fog,z=re.geometry,Y=b.isMeshStandardMaterial?X.environment:null,J=(b.isMeshStandardMaterial?t:e).get(b.envMap||Y),Z=J&&J.mapping===ha?J.image.height:null,$=x[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));let ee=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ie=ee!==void 0?ee.length:0,pe=0;z.morphAttributes.position!==void 0&&(pe=1),z.morphAttributes.normal!==void 0&&(pe=2),z.morphAttributes.color!==void 0&&(pe=3);let q,K,de,Se;if($){let ln=Zn[$];q=ln.vertexShader,K=ln.fragmentShader}else q=b.vertexShader,K=b.fragmentShader,l.update(b),de=l.getVertexShaderID(b),Se=l.getFragmentShaderID(b);let Me=n.getRenderTarget(),Oe=re.isInstancedMesh===!0,Be=re.isBatchedMesh===!0,Le=!!b.map,tt=!!b.matcap,O=!!J,an=!!b.aoMap,Te=!!b.lightMap,Ne=!!b.bumpMap,ve=!!b.normalMap,Mt=!!b.displacementMap,We=!!b.emissiveMap,E=!!b.metalnessMap,_=!!b.roughnessMap,B=b.anisotropy>0,te=b.clearcoat>0,Q=b.iridescence>0,ne=b.sheen>0,_e=b.transmission>0,he=B&&!!b.anisotropyMap,me=te&&!!b.clearcoatMap,Ce=te&&!!b.clearcoatNormalMap,qe=te&&!!b.clearcoatRoughnessMap,j=Q&&!!b.iridescenceMap,at=Q&&!!b.iridescenceThicknessMap,je=ne&&!!b.sheenColorMap,De=ne&&!!b.sheenRoughnessMap,Ee=!!b.specularMap,ge=!!b.specularColorMap,He=!!b.specularIntensityMap,st=_e&&!!b.transmissionMap,Et=_e&&!!b.thicknessMap,$e=!!b.gradientMap,oe=!!b.alphaMap,L=b.alphaTest>0,le=!!b.alphaHash,ce=!!b.extensions,Ie=!!z.attributes.uv1,Ae=!!z.attributes.uv2,dt=!!z.attributes.uv3,ft=Ri;return b.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(ft=n.toneMapping),{isWebGL2:h,shaderID:$,shaderType:b.type,shaderName:b.name,vertexShader:q,fragmentShader:K,defines:b.defines,customVertexShaderID:de,customFragmentShaderID:Se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Be,instancing:Oe,instancingColor:Oe&&re.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Me===null?n.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:hi,map:Le,matcap:tt,envMap:O,envMapMode:O&&J.mapping,envMapCubeUVHeight:Z,aoMap:an,lightMap:Te,bumpMap:Ne,normalMap:ve,displacementMap:f&&Mt,emissiveMap:We,normalMapObjectSpace:ve&&b.normalMapType===N0,normalMapTangentSpace:ve&&b.normalMapType===Cd,metalnessMap:E,roughnessMap:_,anisotropy:B,anisotropyMap:he,clearcoat:te,clearcoatMap:me,clearcoatNormalMap:Ce,clearcoatRoughnessMap:qe,iridescence:Q,iridescenceMap:j,iridescenceThicknessMap:at,sheen:ne,sheenColorMap:je,sheenRoughnessMap:De,specularMap:Ee,specularColorMap:ge,specularIntensityMap:He,transmission:_e,transmissionMap:st,thicknessMap:Et,gradientMap:$e,opaque:b.transparent===!1&&b.blending===Ks,alphaMap:oe,alphaTest:L,alphaHash:le,combine:b.combine,mapUv:Le&&v(b.map.channel),aoMapUv:an&&v(b.aoMap.channel),lightMapUv:Te&&v(b.lightMap.channel),bumpMapUv:Ne&&v(b.bumpMap.channel),normalMapUv:ve&&v(b.normalMap.channel),displacementMapUv:Mt&&v(b.displacementMap.channel),emissiveMapUv:We&&v(b.emissiveMap.channel),metalnessMapUv:E&&v(b.metalnessMap.channel),roughnessMapUv:_&&v(b.roughnessMap.channel),anisotropyMapUv:he&&v(b.anisotropyMap.channel),clearcoatMapUv:me&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:at&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:je&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:De&&v(b.sheenRoughnessMap.channel),specularMapUv:Ee&&v(b.specularMap.channel),specularColorMapUv:ge&&v(b.specularColorMap.channel),specularIntensityMapUv:He&&v(b.specularIntensityMap.channel),transmissionMapUv:st&&v(b.transmissionMap.channel),thicknessMapUv:Et&&v(b.thicknessMap.channel),alphaMapUv:oe&&v(b.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ve||B),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:Ie,vertexUv2s:Ae,vertexUv3s:dt,pointsUvs:re.isPoints===!0&&!!z.attributes.uv&&(Le||oe),fog:!!I,useFog:b.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:re.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:pe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:ft,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Le&&b.map.isVideoTexture===!0&&lt.getTransfer(b.map.colorSpace)===xt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===zn,flipSided:b.side===vn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:ce&&b.extensions.derivatives===!0,extensionFragDepth:ce&&b.extensions.fragDepth===!0,extensionDrawBuffers:ce&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&b.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function d(b){let T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(let V in b.defines)T.push(V),T.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(M(T,b),y(T,b),T.push(n.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function M(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function y(b,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function A(b){let T=x[b.type],V;if(T){let X=Zn[T];V=ag.clone(X.uniforms)}else V=b.uniforms;return V}function P(b,T){let V;for(let X=0,re=c.length;X<re;X++){let I=c[X];if(I.cacheKey===T){V=I,++V.usedTimes;break}}return V===void 0&&(V=new g_(n,T,b,r),c.push(V)),V}function C(b){if(--b.usedTimes===0){let T=c.indexOf(b);c[T]=c[c.length-1],c.pop(),b.destroy()}}function R(b){l.remove(b)}function G(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:A,acquireProgram:P,releaseProgram:C,releaseShaderCache:R,programs:c,dispose:G}}function v_(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function __(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function dd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function fd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,g,x,v,m){let d=n[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:g,groupOrder:x,renderOrder:u.renderOrder,z:v,group:m},n[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=g,d.groupOrder=x,d.renderOrder=u.renderOrder,d.z=v,d.group=m),e++,d}function a(u,f,g,x,v,m){let d=o(u,f,g,x,v,m);g.transmission>0?i.push(d):g.transparent===!0?s.push(d):t.push(d)}function l(u,f,g,x,v,m){let d=o(u,f,g,x,v,m);g.transmission>0?i.unshift(d):g.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||__),i.length>1&&i.sort(f||dd),s.length>1&&s.sort(f||dd)}function h(){for(let u=e,f=n.length;u<f;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function b_(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new fd,n.set(i,[o])):s>=r.length?(o=new fd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function M_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ve};break;case"SpotLight":t={position:new U,direction:new U,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function S_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function E_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function T_(n,e){let t=new M_,i=S_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);let r=new U,o=new Dt,a=new Dt;function l(h,u){let f=0,g=0,x=0;for(let X=0;X<9;X++)s.probe[X].set(0,0,0);let v=0,m=0,d=0,M=0,y=0,A=0,P=0,C=0,R=0,G=0,b=0;h.sort(E_);let T=u===!0?Math.PI:1;for(let X=0,re=h.length;X<re;X++){let I=h[X],z=I.color,Y=I.intensity,J=I.distance,Z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=z.r*Y*T,g+=z.g*Y*T,x+=z.b*Y*T;else if(I.isLightProbe){for(let $=0;$<9;$++)s.probe[$].addScaledVector(I.sh.coefficients[$],Y);b++}else if(I.isDirectionalLight){let $=t.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity*T),I.castShadow){let ee=I.shadow,ie=i.get(I);ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,s.directionalShadow[v]=ie,s.directionalShadowMap[v]=Z,s.directionalShadowMatrix[v]=I.shadow.matrix,A++}s.directional[v]=$,v++}else if(I.isSpotLight){let $=t.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(z).multiplyScalar(Y*T),$.distance=J,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,s.spot[d]=$;let ee=I.shadow;if(I.map&&(s.spotLightMap[R]=I.map,R++,ee.updateMatrices(I),I.castShadow&&G++),s.spotLightMatrix[d]=ee.matrix,I.castShadow){let ie=i.get(I);ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,s.spotShadow[d]=ie,s.spotShadowMap[d]=Z,C++}d++}else if(I.isRectAreaLight){let $=t.get(I);$.color.copy(z).multiplyScalar(Y),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),s.rectArea[M]=$,M++}else if(I.isPointLight){let $=t.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity*T),$.distance=I.distance,$.decay=I.decay,I.castShadow){let ee=I.shadow,ie=i.get(I);ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,ie.shadowCameraNear=ee.camera.near,ie.shadowCameraFar=ee.camera.far,s.pointShadow[m]=ie,s.pointShadowMap[m]=Z,s.pointShadowMatrix[m]=I.shadow.matrix,P++}s.point[m]=$,m++}else if(I.isHemisphereLight){let $=t.get(I);$.skyColor.copy(I.color).multiplyScalar(Y*T),$.groundColor.copy(I.groundColor).multiplyScalar(Y*T),s.hemi[y]=$,y++}}M>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ae.LTC_FLOAT_1,s.rectAreaLTC2=ae.LTC_FLOAT_2):(s.rectAreaLTC1=ae.LTC_HALF_1,s.rectAreaLTC2=ae.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ae.LTC_FLOAT_1,s.rectAreaLTC2=ae.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ae.LTC_HALF_1,s.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=g,s.ambient[2]=x;let V=s.hash;(V.directionalLength!==v||V.pointLength!==m||V.spotLength!==d||V.rectAreaLength!==M||V.hemiLength!==y||V.numDirectionalShadows!==A||V.numPointShadows!==P||V.numSpotShadows!==C||V.numSpotMaps!==R||V.numLightProbes!==b)&&(s.directional.length=v,s.spot.length=d,s.rectArea.length=M,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=C+R-G,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=b,V.directionalLength=v,V.pointLength=m,V.spotLength=d,V.rectAreaLength=M,V.hemiLength=y,V.numDirectionalShadows=A,V.numPointShadows=P,V.numSpotShadows=C,V.numSpotMaps=R,V.numLightProbes=b,s.version=w_++)}function c(h,u){let f=0,g=0,x=0,v=0,m=0,d=u.matrixWorldInverse;for(let M=0,y=h.length;M<y;M++){let A=h[M];if(A.isDirectionalLight){let P=s.directional[f];P.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),f++}else if(A.isSpotLight){let P=s.spot[x];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),x++}else if(A.isRectAreaLight){let P=s.rectArea[v];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(d),a.identity(),o.copy(A.matrixWorld),o.premultiply(d),a.extractRotation(o),P.halfWidth.set(A.width*.5,0,0),P.halfHeight.set(0,A.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),v++}else if(A.isPointLight){let P=s.point[g];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(d),g++}else if(A.isHemisphereLight){let P=s.hemi[m];P.direction.setFromMatrixPosition(A.matrixWorld),P.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:s}}function pd(n,e){let t=new T_(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function A_(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new pd(n,e),t.set(r,[l])):o>=a.length?(l=new pd(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}function P_(n,e,t){let i=new Fr,s=new Ye,r=new Ye,o=new Xt,a=new ec({depthPacking:U0}),l=new tc,c={},h=t.maxTextureSize,u={[Pi]:vn,[vn]:Pi,[zn]:zn},f=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:R_,fragmentShader:C_}),g=f.clone();g.defines.HORIZONTAL_PASS=1;let x=new mn;x.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new mt(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vd;let d=this.type;this.render=function(C,R,G){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let b=n.getRenderTarget(),T=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),X=n.state;X.setBlending(Ai),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let re=d!==ai&&this.type===ai,I=d===ai&&this.type!==ai;for(let z=0,Y=C.length;z<Y;z++){let J=C[z],Z=J.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let $=Z.getFrameExtents();if(s.multiply($),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,Z.mapSize.y=r.y)),Z.map===null||re===!0||I===!0){let ie=this.type!==ai?{minFilter:un,magFilter:un}:{};Z.map!==null&&Z.map.dispose(),Z.map=new ui(s.x,s.y,ie),Z.map.texture.name=J.name+".shadowMap",Z.camera.updateProjectionMatrix()}n.setRenderTarget(Z.map),n.clear();let ee=Z.getViewportCount();for(let ie=0;ie<ee;ie++){let pe=Z.getViewport(ie);o.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),X.viewport(o),Z.updateMatrices(J,ie),i=Z.getFrustum(),A(R,G,Z.camera,J,this.type)}Z.isPointLightShadow!==!0&&this.type===ai&&M(Z,G),Z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(b,T,V)};function M(C,R){let G=e.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ui(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(R,null,G,f,v,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(R,null,G,g,v,null)}function y(C,R,G,b){let T=null,V=G.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(V!==void 0)T=V;else if(T=G.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let X=T.uuid,re=R.uuid,I=c[X];I===void 0&&(I={},c[X]=I);let z=I[re];z===void 0&&(z=T.clone(),I[re]=z,R.addEventListener("dispose",P)),T=z}if(T.visible=R.visible,T.wireframe=R.wireframe,b===ai?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:u[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,G.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let X=n.properties.get(T);X.light=G}return T}function A(C,R,G,b,T){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&T===ai)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,C.matrixWorld);let re=e.update(C),I=C.material;if(Array.isArray(I)){let z=re.groups;for(let Y=0,J=z.length;Y<J;Y++){let Z=z[Y],$=I[Z.materialIndex];if($&&$.visible){let ee=y(C,$,b,T);C.onBeforeShadow(n,C,R,G,re,ee,Z),n.renderBufferDirect(G,null,re,ee,C,Z),C.onAfterShadow(n,C,R,G,re,ee,Z)}}}else if(I.visible){let z=y(C,I,b,T);C.onBeforeShadow(n,C,R,G,re,z,null),n.renderBufferDirect(G,null,re,z,C,null),C.onAfterShadow(n,C,R,G,re,z,null)}}let X=C.children;for(let re=0,I=X.length;re<I;re++)A(X[re],R,G,b,T)}function P(C){C.target.removeEventListener("dispose",P);for(let G in c){let b=c[G],T=C.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}function L_(n,e,t){let i=t.isWebGL2;function s(){let L=!1,le=new Xt,ce=null,Ie=new Xt(0,0,0,0);return{setMask:function(Ae){ce!==Ae&&!L&&(n.colorMask(Ae,Ae,Ae,Ae),ce=Ae)},setLocked:function(Ae){L=Ae},setClear:function(Ae,dt,ft,Vt,ln){ln===!0&&(Ae*=Vt,dt*=Vt,ft*=Vt),le.set(Ae,dt,ft,Vt),Ie.equals(le)===!1&&(n.clearColor(Ae,dt,ft,Vt),Ie.copy(le))},reset:function(){L=!1,ce=null,Ie.set(-1,0,0,0)}}}function r(){let L=!1,le=null,ce=null,Ie=null;return{setTest:function(Ae){Ae?Be(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(Ae){le!==Ae&&!L&&(n.depthMask(Ae),le=Ae)},setFunc:function(Ae){if(ce!==Ae){switch(Ae){case h0:n.depthFunc(n.NEVER);break;case u0:n.depthFunc(n.ALWAYS);break;case d0:n.depthFunc(n.LESS);break;case Io:n.depthFunc(n.LEQUAL);break;case f0:n.depthFunc(n.EQUAL);break;case p0:n.depthFunc(n.GEQUAL);break;case m0:n.depthFunc(n.GREATER);break;case g0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=Ae}},setLocked:function(Ae){L=Ae},setClear:function(Ae){Ie!==Ae&&(n.clearDepth(Ae),Ie=Ae)},reset:function(){L=!1,le=null,ce=null,Ie=null}}}function o(){let L=!1,le=null,ce=null,Ie=null,Ae=null,dt=null,ft=null,Vt=null,ln=null;return{setTest:function(pt){L||(pt?Be(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(pt){le!==pt&&!L&&(n.stencilMask(pt),le=pt)},setFunc:function(pt,cn,$n){(ce!==pt||Ie!==cn||Ae!==$n)&&(n.stencilFunc(pt,cn,$n),ce=pt,Ie=cn,Ae=$n)},setOp:function(pt,cn,$n){(dt!==pt||ft!==cn||Vt!==$n)&&(n.stencilOp(pt,cn,$n),dt=pt,ft=cn,Vt=$n)},setLocked:function(pt){L=pt},setClear:function(pt){ln!==pt&&(n.clearStencil(pt),ln=pt)},reset:function(){L=!1,le=null,ce=null,Ie=null,Ae=null,dt=null,ft=null,Vt=null,ln=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,f={},g={},x=new WeakMap,v=[],m=null,d=!1,M=null,y=null,A=null,P=null,C=null,R=null,G=null,b=new Ve(0,0,0),T=0,V=!1,X=null,re=null,I=null,z=null,Y=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,$=0,ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ee)[1]),Z=$>=1):ee.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),Z=$>=2);let ie=null,pe={},q=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),de=new Xt().fromArray(q),Se=new Xt().fromArray(K);function Me(L,le,ce,Ie){let Ae=new Uint8Array(4),dt=n.createTexture();n.bindTexture(L,dt),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ft=0;ft<ce;ft++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(le,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(le+ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return dt}let Oe={};Oe[n.TEXTURE_2D]=Me(n.TEXTURE_2D,n.TEXTURE_2D,1),Oe[n.TEXTURE_CUBE_MAP]=Me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Oe[n.TEXTURE_2D_ARRAY]=Me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Oe[n.TEXTURE_3D]=Me(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Be(n.DEPTH_TEST),l.setFunc(Io),We(!1),E(Yh),Be(n.CULL_FACE),ve(Ai);function Be(L){f[L]!==!0&&(n.enable(L),f[L]=!0)}function Le(L){f[L]!==!1&&(n.disable(L),f[L]=!1)}function tt(L,le){return g[L]!==le?(n.bindFramebuffer(L,le),g[L]=le,i&&(L===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=le),L===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=le)),!0):!1}function O(L,le){let ce=v,Ie=!1;if(L)if(ce=x.get(le),ce===void 0&&(ce=[],x.set(le,ce)),L.isWebGLMultipleRenderTargets){let Ae=L.texture;if(ce.length!==Ae.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let dt=0,ft=Ae.length;dt<ft;dt++)ce[dt]=n.COLOR_ATTACHMENT0+dt;ce.length=Ae.length,Ie=!0}}else ce[0]!==n.COLOR_ATTACHMENT0&&(ce[0]=n.COLOR_ATTACHMENT0,Ie=!0);else ce[0]!==n.BACK&&(ce[0]=n.BACK,Ie=!0);Ie&&(t.isWebGL2?n.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function an(L){return m!==L?(n.useProgram(L),m=L,!0):!1}let Te={[ts]:n.FUNC_ADD,[Zm]:n.FUNC_SUBTRACT,[Jm]:n.FUNC_REVERSE_SUBTRACT};if(i)Te[Kh]=n.MIN,Te[jh]=n.MAX;else{let L=e.get("EXT_blend_minmax");L!==null&&(Te[Kh]=L.MIN_EXT,Te[jh]=L.MAX_EXT)}let Ne={[Km]:n.ZERO,[jm]:n.ONE,[Qm]:n.SRC_COLOR,[Ul]:n.SRC_ALPHA,[r0]:n.SRC_ALPHA_SATURATE,[i0]:n.DST_COLOR,[t0]:n.DST_ALPHA,[e0]:n.ONE_MINUS_SRC_COLOR,[Nl]:n.ONE_MINUS_SRC_ALPHA,[s0]:n.ONE_MINUS_DST_COLOR,[n0]:n.ONE_MINUS_DST_ALPHA,[o0]:n.CONSTANT_COLOR,[a0]:n.ONE_MINUS_CONSTANT_COLOR,[l0]:n.CONSTANT_ALPHA,[c0]:n.ONE_MINUS_CONSTANT_ALPHA};function ve(L,le,ce,Ie,Ae,dt,ft,Vt,ln,pt){if(L===Ai){d===!0&&(Le(n.BLEND),d=!1);return}if(d===!1&&(Be(n.BLEND),d=!0),L!==$m){if(L!==M||pt!==V){if((y!==ts||C!==ts)&&(n.blendEquation(n.FUNC_ADD),y=ts,C=ts),pt)switch(L){case Ks:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $h:n.blendFunc(n.ONE,n.ONE);break;case Zh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ks:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $h:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Zh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}A=null,P=null,R=null,G=null,b.set(0,0,0),T=0,M=L,V=pt}return}Ae=Ae||le,dt=dt||ce,ft=ft||Ie,(le!==y||Ae!==C)&&(n.blendEquationSeparate(Te[le],Te[Ae]),y=le,C=Ae),(ce!==A||Ie!==P||dt!==R||ft!==G)&&(n.blendFuncSeparate(Ne[ce],Ne[Ie],Ne[dt],Ne[ft]),A=ce,P=Ie,R=dt,G=ft),(Vt.equals(b)===!1||ln!==T)&&(n.blendColor(Vt.r,Vt.g,Vt.b,ln),b.copy(Vt),T=ln),M=L,V=!1}function Mt(L,le){L.side===zn?Le(n.CULL_FACE):Be(n.CULL_FACE);let ce=L.side===vn;le&&(ce=!ce),We(ce),L.blending===Ks&&L.transparent===!1?ve(Ai):ve(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);let Ie=L.stencilWrite;c.setTest(Ie),Ie&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),B(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Be(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function We(L){X!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),X=L)}function E(L){L!==qm?(Be(n.CULL_FACE),L!==re&&(L===Yh?n.cullFace(n.BACK):L===Xm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),re=L}function _(L){L!==I&&(Z&&n.lineWidth(L),I=L)}function B(L,le,ce){L?(Be(n.POLYGON_OFFSET_FILL),(z!==le||Y!==ce)&&(n.polygonOffset(le,ce),z=le,Y=ce)):Le(n.POLYGON_OFFSET_FILL)}function te(L){L?Be(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function Q(L){L===void 0&&(L=n.TEXTURE0+J-1),ie!==L&&(n.activeTexture(L),ie=L)}function ne(L,le,ce){ce===void 0&&(ie===null?ce=n.TEXTURE0+J-1:ce=ie);let Ie=pe[ce];Ie===void 0&&(Ie={type:void 0,texture:void 0},pe[ce]=Ie),(Ie.type!==L||Ie.texture!==le)&&(ie!==ce&&(n.activeTexture(ce),ie=ce),n.bindTexture(L,le||Oe[L]),Ie.type=L,Ie.texture=le)}function _e(){let L=pe[ie];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function he(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qe(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function je(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function He(L){de.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),de.copy(L))}function st(L){Se.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Se.copy(L))}function Et(L,le){let ce=u.get(le);ce===void 0&&(ce=new WeakMap,u.set(le,ce));let Ie=ce.get(L);Ie===void 0&&(Ie=n.getUniformBlockIndex(le,L.name),ce.set(L,Ie))}function $e(L,le){let Ie=u.get(le).get(L);h.get(le)!==Ie&&(n.uniformBlockBinding(le,Ie,L.__bindingPointIndex),h.set(le,Ie))}function oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ie=null,pe={},g={},x=new WeakMap,v=[],m=null,d=!1,M=null,y=null,A=null,P=null,C=null,R=null,G=null,b=new Ve(0,0,0),T=0,V=!1,X=null,re=null,I=null,z=null,Y=null,de.set(0,0,n.canvas.width,n.canvas.height),Se.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Be,disable:Le,bindFramebuffer:tt,drawBuffers:O,useProgram:an,setBlending:ve,setMaterial:Mt,setFlipSided:We,setCullFace:E,setLineWidth:_,setPolygonOffset:B,setScissorTest:te,activeTexture:Q,bindTexture:ne,unbindTexture:_e,compressedTexImage2D:he,compressedTexImage3D:me,texImage2D:Ee,texImage3D:ge,updateUBOMapping:Et,uniformBlockBinding:$e,texStorage2D:je,texStorage3D:De,texSubImage2D:Ce,texSubImage3D:qe,compressedTexSubImage2D:j,compressedTexSubImage3D:at,scissor:He,viewport:st,reset:oe}}function I_(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(E,_){return g?new OffscreenCanvas(E,_):Fo("canvas")}function v(E,_,B,te){let Q=1;if((E.width>te||E.height>te)&&(Q=te/Math.max(E.width,E.height)),Q<1||_===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let ne=_?Vl:Math.floor,_e=ne(Q*E.width),he=ne(Q*E.height);u===void 0&&(u=x(_e,he));let me=B?x(_e,he):u;return me.width=_e,me.height=he,me.getContext("2d").drawImage(E,0,0,_e,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+_e+"x"+he+")."),me}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function m(E){return Lu(E.width)&&Lu(E.height)}function d(E){return a?!1:E.wrapS!==On||E.wrapT!==On||E.minFilter!==un&&E.minFilter!==Rn}function M(E,_){return E.generateMipmaps&&_&&E.minFilter!==un&&E.minFilter!==Rn}function y(E){n.generateMipmap(E)}function A(E,_,B,te,Q=!1){if(a===!1)return _;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ne=_;if(_===n.RED&&(B===n.FLOAT&&(ne=n.R32F),B===n.HALF_FLOAT&&(ne=n.R16F),B===n.UNSIGNED_BYTE&&(ne=n.R8)),_===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(ne=n.R8UI),B===n.UNSIGNED_SHORT&&(ne=n.R16UI),B===n.UNSIGNED_INT&&(ne=n.R32UI),B===n.BYTE&&(ne=n.R8I),B===n.SHORT&&(ne=n.R16I),B===n.INT&&(ne=n.R32I)),_===n.RG&&(B===n.FLOAT&&(ne=n.RG32F),B===n.HALF_FLOAT&&(ne=n.RG16F),B===n.UNSIGNED_BYTE&&(ne=n.RG8)),_===n.RGBA){let _e=Q?Uo:lt.getTransfer(te);B===n.FLOAT&&(ne=n.RGBA32F),B===n.HALF_FLOAT&&(ne=n.RGBA16F),B===n.UNSIGNED_BYTE&&(ne=_e===xt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function P(E,_,B){return M(E,B)===!0||E.isFramebufferTexture&&E.minFilter!==un&&E.minFilter!==Rn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function C(E){return E===un||E===Qh||E===il?n.NEAREST:n.LINEAR}function R(E){let _=E.target;_.removeEventListener("dispose",R),b(_),_.isVideoTexture&&h.delete(_)}function G(E){let _=E.target;_.removeEventListener("dispose",G),V(_)}function b(E){let _=i.get(E);if(_.__webglInit===void 0)return;let B=E.source,te=f.get(B);if(te){let Q=te[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(E),Object.keys(te).length===0&&f.delete(B)}i.remove(E)}function T(E){let _=i.get(E);n.deleteTexture(_.__webglTexture);let B=E.source,te=f.get(B);delete te[_.__cacheKey],o.memory.textures--}function V(E){let _=E.texture,B=i.get(E),te=i.get(_);if(te.__webglTexture!==void 0&&(n.deleteTexture(te.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(B.__webglFramebuffer[Q]))for(let ne=0;ne<B.__webglFramebuffer[Q].length;ne++)n.deleteFramebuffer(B.__webglFramebuffer[Q][ne]);else n.deleteFramebuffer(B.__webglFramebuffer[Q]);B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[Q])}else{if(Array.isArray(B.__webglFramebuffer))for(let Q=0;Q<B.__webglFramebuffer.length;Q++)n.deleteFramebuffer(B.__webglFramebuffer[Q]);else n.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let Q=0;Q<B.__webglColorRenderbuffer.length;Q++)B.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[Q]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let Q=0,ne=_.length;Q<ne;Q++){let _e=i.get(_[Q]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(_[Q])}i.remove(_),i.remove(E)}let X=0;function re(){X=0}function I(){let E=X;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),X+=1,E}function z(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function Y(E,_){let B=i.get(E);if(E.isVideoTexture&&Mt(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){let te=E.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(B,E,_);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+_)}function J(E,_){let B=i.get(E);if(E.version>0&&B.__version!==E.version){de(B,E,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+_)}function Z(E,_){let B=i.get(E);if(E.version>0&&B.__version!==E.version){de(B,E,_);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+_)}function $(E,_){let B=i.get(E);if(E.version>0&&B.__version!==E.version){Se(B,E,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+_)}let ee={[Fl]:n.REPEAT,[On]:n.CLAMP_TO_EDGE,[Bl]:n.MIRRORED_REPEAT},ie={[un]:n.NEAREST,[Qh]:n.NEAREST_MIPMAP_NEAREST,[il]:n.NEAREST_MIPMAP_LINEAR,[Rn]:n.LINEAR,[E0]:n.LINEAR_MIPMAP_NEAREST,[Ur]:n.LINEAR_MIPMAP_LINEAR},pe={[z0]:n.NEVER,[V0]:n.ALWAYS,[O0]:n.LESS,[Pd]:n.LEQUAL,[F0]:n.EQUAL,[G0]:n.GEQUAL,[B0]:n.GREATER,[H0]:n.NOTEQUAL};function q(E,_,B){if(B?(n.texParameteri(E,n.TEXTURE_WRAP_S,ee[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ee[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ee[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ie[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ie[_.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(_.wrapS!==On||_.wrapT!==On)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,C(_.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,C(_.minFilter)),_.minFilter!==un&&_.minFilter!==Rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,pe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let te=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===un||_.minFilter!==il&&_.minFilter!==Ur||_.type===Ti&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===Nr&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(n.texParameterf(E,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function K(E,_){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",R));let te=_.source,Q=f.get(te);Q===void 0&&(Q={},f.set(te,Q));let ne=z(_);if(ne!==E.__cacheKey){Q[ne]===void 0&&(Q[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[ne].usedTimes++;let _e=Q[E.__cacheKey];_e!==void 0&&(Q[E.__cacheKey].usedTimes--,_e.usedTimes===0&&T(_)),E.__cacheKey=ne,E.__webglTexture=Q[ne].texture}return B}function de(E,_,B){let te=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(te=n.TEXTURE_3D);let Q=K(E,_),ne=_.source;t.bindTexture(te,E.__webglTexture,n.TEXTURE0+B);let _e=i.get(ne);if(ne.version!==_e.__version||Q===!0){t.activeTexture(n.TEXTURE0+B);let he=lt.getPrimaries(lt.workingColorSpace),me=_.colorSpace===Cn?null:lt.getPrimaries(_.colorSpace),Ce=_.colorSpace===Cn||he===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let qe=d(_)&&m(_.image)===!1,j=v(_.image,qe,!1,s.maxTextureSize);j=We(_,j);let at=m(j)||a,je=r.convert(_.format,_.colorSpace),De=r.convert(_.type),Ee=A(_.internalFormat,je,De,_.colorSpace,_.isVideoTexture);q(te,_,at);let ge,He=_.mipmaps,st=a&&_.isVideoTexture!==!0&&Ee!==Ad,Et=_e.__version===void 0||Q===!0,$e=P(_,j,at);if(_.isDepthTexture)Ee=n.DEPTH_COMPONENT,a?_.type===Ti?Ee=n.DEPTH_COMPONENT32F:_.type===Ei?Ee=n.DEPTH_COMPONENT24:_.type===is?Ee=n.DEPTH24_STENCIL8:Ee=n.DEPTH_COMPONENT16:_.type===Ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===ss&&Ee===n.DEPTH_COMPONENT&&_.type!==_c&&_.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=Ei,De=r.convert(_.type)),_.format===nr&&Ee===n.DEPTH_COMPONENT&&(Ee=n.DEPTH_STENCIL,_.type!==is&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=is,De=r.convert(_.type))),Et&&(st?t.texStorage2D(n.TEXTURE_2D,1,Ee,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,Ee,j.width,j.height,0,je,De,null));else if(_.isDataTexture)if(He.length>0&&at){st&&Et&&t.texStorage2D(n.TEXTURE_2D,$e,Ee,He[0].width,He[0].height);for(let oe=0,L=He.length;oe<L;oe++)ge=He[oe],st?t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ge.width,ge.height,je,De,ge.data):t.texImage2D(n.TEXTURE_2D,oe,Ee,ge.width,ge.height,0,je,De,ge.data);_.generateMipmaps=!1}else st?(Et&&t.texStorage2D(n.TEXTURE_2D,$e,Ee,j.width,j.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,j.width,j.height,je,De,j.data)):t.texImage2D(n.TEXTURE_2D,0,Ee,j.width,j.height,0,je,De,j.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){st&&Et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,$e,Ee,He[0].width,He[0].height,j.depth);for(let oe=0,L=He.length;oe<L;oe++)ge=He[oe],_.format!==Fn?je!==null?st?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,ge.width,ge.height,j.depth,je,ge.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,Ee,ge.width,ge.height,j.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,ge.width,ge.height,j.depth,je,De,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,Ee,ge.width,ge.height,j.depth,0,je,De,ge.data)}else{st&&Et&&t.texStorage2D(n.TEXTURE_2D,$e,Ee,He[0].width,He[0].height);for(let oe=0,L=He.length;oe<L;oe++)ge=He[oe],_.format!==Fn?je!==null?st?t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,ge.width,ge.height,je,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,Ee,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ge.width,ge.height,je,De,ge.data):t.texImage2D(n.TEXTURE_2D,oe,Ee,ge.width,ge.height,0,je,De,ge.data)}else if(_.isDataArrayTexture)st?(Et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,$e,Ee,j.width,j.height,j.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,je,De,j.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,j.width,j.height,j.depth,0,je,De,j.data);else if(_.isData3DTexture)st?(Et&&t.texStorage3D(n.TEXTURE_3D,$e,Ee,j.width,j.height,j.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,je,De,j.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,j.width,j.height,j.depth,0,je,De,j.data);else if(_.isFramebufferTexture){if(Et)if(st)t.texStorage2D(n.TEXTURE_2D,$e,Ee,j.width,j.height);else{let oe=j.width,L=j.height;for(let le=0;le<$e;le++)t.texImage2D(n.TEXTURE_2D,le,Ee,oe,L,0,je,De,null),oe>>=1,L>>=1}}else if(He.length>0&&at){st&&Et&&t.texStorage2D(n.TEXTURE_2D,$e,Ee,He[0].width,He[0].height);for(let oe=0,L=He.length;oe<L;oe++)ge=He[oe],st?t.texSubImage2D(n.TEXTURE_2D,oe,0,0,je,De,ge):t.texImage2D(n.TEXTURE_2D,oe,Ee,je,De,ge);_.generateMipmaps=!1}else st?(Et&&t.texStorage2D(n.TEXTURE_2D,$e,Ee,j.width,j.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,je,De,j)):t.texImage2D(n.TEXTURE_2D,0,Ee,je,De,j);M(_,at)&&y(te),_e.__version=ne.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Se(E,_,B){if(_.image.length!==6)return;let te=K(E,_),Q=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+B);let ne=i.get(Q);if(Q.version!==ne.__version||te===!0){t.activeTexture(n.TEXTURE0+B);let _e=lt.getPrimaries(lt.workingColorSpace),he=_.colorSpace===Cn?null:lt.getPrimaries(_.colorSpace),me=_.colorSpace===Cn||_e===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Ce=_.isCompressedTexture||_.image[0].isCompressedTexture,qe=_.image[0]&&_.image[0].isDataTexture,j=[];for(let oe=0;oe<6;oe++)!Ce&&!qe?j[oe]=v(_.image[oe],!1,!0,s.maxCubemapSize):j[oe]=qe?_.image[oe].image:_.image[oe],j[oe]=We(_,j[oe]);let at=j[0],je=m(at)||a,De=r.convert(_.format,_.colorSpace),Ee=r.convert(_.type),ge=A(_.internalFormat,De,Ee,_.colorSpace),He=a&&_.isVideoTexture!==!0,st=ne.__version===void 0||te===!0,Et=P(_,at,je);q(n.TEXTURE_CUBE_MAP,_,je);let $e;if(Ce){He&&st&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Et,ge,at.width,at.height);for(let oe=0;oe<6;oe++){$e=j[oe].mipmaps;for(let L=0;L<$e.length;L++){let le=$e[L];_.format!==Fn?De!==null?He?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L,0,0,le.width,le.height,De,le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L,ge,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L,0,0,le.width,le.height,De,Ee,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L,ge,le.width,le.height,0,De,Ee,le.data)}}}else{$e=_.mipmaps,He&&st&&($e.length>0&&Et++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Et,ge,j[0].width,j[0].height));for(let oe=0;oe<6;oe++)if(qe){He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,j[oe].width,j[oe].height,De,Ee,j[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ge,j[oe].width,j[oe].height,0,De,Ee,j[oe].data);for(let L=0;L<$e.length;L++){let ce=$e[L].image[oe].image;He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L+1,0,0,ce.width,ce.height,De,Ee,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L+1,ge,ce.width,ce.height,0,De,Ee,ce.data)}}else{He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,De,Ee,j[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ge,De,Ee,j[oe]);for(let L=0;L<$e.length;L++){let le=$e[L];He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L+1,0,0,De,Ee,le.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L+1,ge,De,Ee,le.image[oe])}}}M(_,je)&&y(n.TEXTURE_CUBE_MAP),ne.__version=Q.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Me(E,_,B,te,Q,ne){let _e=r.convert(B.format,B.colorSpace),he=r.convert(B.type),me=A(B.internalFormat,_e,he,B.colorSpace);if(!i.get(_).__hasExternalTextures){let qe=Math.max(1,_.width>>ne),j=Math.max(1,_.height>>ne);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,ne,me,qe,j,_.depth,0,_e,he,null):t.texImage2D(Q,ne,me,qe,j,0,_e,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),ve(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,Q,i.get(B).__webglTexture,0,Ne(_)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,Q,i.get(B).__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(E,_,B){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer&&!_.stencilBuffer){let te=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(B||ve(_)){let Q=_.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Ti?te=n.DEPTH_COMPONENT32F:Q.type===Ei&&(te=n.DEPTH_COMPONENT24));let ne=Ne(_);ve(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,te,_.width,_.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,te,_.width,_.height)}else n.renderbufferStorage(n.RENDERBUFFER,te,_.width,_.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(_.depthBuffer&&_.stencilBuffer){let te=Ne(_);B&&ve(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,te,n.DEPTH24_STENCIL8,_.width,_.height):ve(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,n.DEPTH24_STENCIL8,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{let te=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let Q=0;Q<te.length;Q++){let ne=te[Q],_e=r.convert(ne.format,ne.colorSpace),he=r.convert(ne.type),me=A(ne.internalFormat,_e,he,ne.colorSpace),Ce=Ne(_);B&&ve(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,me,_.width,_.height):ve(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,me,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,me,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Be(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y(_.depthTexture,0);let te=i.get(_.depthTexture).__webglTexture,Q=Ne(_);if(_.depthTexture.format===ss)ve(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(_.depthTexture.format===nr)ve(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Le(E){let _=i.get(E),B=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Be(_.__webglFramebuffer,E)}else if(B){_.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[te]),_.__webglDepthbuffer[te]=n.createRenderbuffer(),Oe(_.__webglDepthbuffer[te],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),Oe(_.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function tt(E,_,B){let te=i.get(E);_!==void 0&&Me(te.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Le(E)}function O(E){let _=E.texture,B=i.get(E),te=i.get(_);E.addEventListener("dispose",G),E.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=_.version,o.memory.textures++);let Q=E.isWebGLCubeRenderTarget===!0,ne=E.isWebGLMultipleRenderTargets===!0,_e=m(E)||a;if(Q){B.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[he]=[];for(let me=0;me<_.mipmaps.length;me++)B.__webglFramebuffer[he][me]=n.createFramebuffer()}else B.__webglFramebuffer[he]=n.createFramebuffer()}else{if(a&&_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let he=0;he<_.mipmaps.length;he++)B.__webglFramebuffer[he]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(ne)if(s.drawBuffers){let he=E.texture;for(let me=0,Ce=he.length;me<Ce;me++){let qe=i.get(he[me]);qe.__webglTexture===void 0&&(qe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&ve(E)===!1){let he=ne?_:[_];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let me=0;me<he.length;me++){let Ce=he[me];B.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[me]);let qe=r.convert(Ce.format,Ce.colorSpace),j=r.convert(Ce.type),at=A(Ce.internalFormat,qe,j,Ce.colorSpace,E.isXRRenderTarget===!0),je=Ne(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,je,at,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,B.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Oe(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),q(n.TEXTURE_CUBE_MAP,_,_e);for(let he=0;he<6;he++)if(a&&_.mipmaps&&_.mipmaps.length>0)for(let me=0;me<_.mipmaps.length;me++)Me(B.__webglFramebuffer[he][me],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,me);else Me(B.__webglFramebuffer[he],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);M(_,_e)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){let he=E.texture;for(let me=0,Ce=he.length;me<Ce;me++){let qe=he[me],j=i.get(qe);t.bindTexture(n.TEXTURE_2D,j.__webglTexture),q(n.TEXTURE_2D,qe,_e),Me(B.__webglFramebuffer,E,qe,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),M(qe,_e)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?he=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,te.__webglTexture),q(he,_,_e),a&&_.mipmaps&&_.mipmaps.length>0)for(let me=0;me<_.mipmaps.length;me++)Me(B.__webglFramebuffer[me],E,_,n.COLOR_ATTACHMENT0,he,me);else Me(B.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,he,0);M(_,_e)&&y(he),t.unbindTexture()}E.depthBuffer&&Le(E)}function an(E){let _=m(E)||a,B=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let te=0,Q=B.length;te<Q;te++){let ne=B[te];if(M(ne,_)){let _e=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,he=i.get(ne).__webglTexture;t.bindTexture(_e,he),y(_e),t.unbindTexture()}}}function Te(E){if(a&&E.samples>0&&ve(E)===!1){let _=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],B=E.width,te=E.height,Q=n.COLOR_BUFFER_BIT,ne=[],_e=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(E),me=E.isWebGLMultipleRenderTargets===!0;if(me)for(let Ce=0;Ce<_.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Ce=0;Ce<_.length;Ce++){ne.push(n.COLOR_ATTACHMENT0+Ce),E.depthBuffer&&ne.push(_e);let qe=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(qe===!1&&(E.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),me&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[Ce]),qe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[_e]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_e])),me){let j=i.get(_[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,j,0)}n.blitFramebuffer(0,0,B,te,0,0,B,te,Q,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let Ce=0;Ce<_.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,he.__webglColorRenderbuffer[Ce]);let qe=i.get(_[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function Ne(E){return Math.min(s.maxSamples,E.samples)}function ve(E){let _=i.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Mt(E){let _=o.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function We(E,_){let B=E.colorSpace,te=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Hl||B!==hi&&B!==Cn&&(lt.getTransfer(B)===xt?a===!1?e.has("EXT_sRGB")===!0&&te===Fn?(E.format=Hl,E.minFilter=Rn,E.generateMipmaps=!1):_=Bo.sRGBToLinear(_):(te!==Fn||Q!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),_}this.allocateTextureUnit=I,this.resetTextureUnits=re,this.setTexture2D=Y,this.setTexture2DArray=J,this.setTexture3D=Z,this.setTextureCube=$,this.rebindTextures=tt,this.setupRenderTarget=O,this.updateRenderTargetMipmap=an,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ve}function k_(n,e,t){let i=t.isWebGL2;function s(r,o=Cn){let a,l=lt.getTransfer(o);if(r===Ci)return n.UNSIGNED_BYTE;if(r===Md)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Sd)return n.UNSIGNED_SHORT_5_5_5_1;if(r===T0)return n.BYTE;if(r===A0)return n.SHORT;if(r===_c)return n.UNSIGNED_SHORT;if(r===bd)return n.INT;if(r===Ei)return n.UNSIGNED_INT;if(r===Ti)return n.FLOAT;if(r===Nr)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===R0)return n.ALPHA;if(r===Fn)return n.RGBA;if(r===C0)return n.LUMINANCE;if(r===P0)return n.LUMINANCE_ALPHA;if(r===ss)return n.DEPTH_COMPONENT;if(r===nr)return n.DEPTH_STENCIL;if(r===Hl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===L0)return n.RED;if(r===wd)return n.RED_INTEGER;if(r===I0)return n.RG;if(r===Ed)return n.RG_INTEGER;if(r===Td)return n.RGBA_INTEGER;if(r===sl||r===rl||r===ol||r===al)if(l===xt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===sl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===rl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ol)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===al)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===sl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===rl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ol)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===al)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===eu||r===tu||r===nu||r===iu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===eu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===tu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===nu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===iu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ad)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===su||r===ru)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===su)return l===xt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ru)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ou||r===au||r===lu||r===cu||r===hu||r===uu||r===du||r===fu||r===pu||r===mu||r===gu||r===xu||r===yu||r===vu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ou)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===au)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===lu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===cu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===uu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===du)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===fu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===pu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===mu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===gu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===yu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ll||r===_u||r===bu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===ll)return l===xt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===_u)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===bu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===k0||r===Mu||r===Su||r===wu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===ll)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Mu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Su)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===wu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===is?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}function U_(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,kd(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,M,y,A){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&g(m,d,A)):d.isMeshMatcapMaterial?(r(m,d),x(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,M,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===vn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===vn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let M=e.get(d).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let y=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*y,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=y*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function g(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===vn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){let M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function N_(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,y){let A=y.program;i.uniformBlockBinding(M,A)}function c(M,y){let A=s[M.id];A===void 0&&(x(M),A=h(M),s[M.id]=A,M.addEventListener("dispose",m));let P=y.program;i.updateUBOMapping(M,P);let C=e.render.frame;r[M.id]!==C&&(f(M),r[M.id]=C)}function h(M){let y=u();M.__bindingPointIndex=y;let A=n.createBuffer(),P=M.__size,C=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,P,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,A),A}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let y=s[M.id],A=M.uniforms,P=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let C=0,R=A.length;C<R;C++){let G=Array.isArray(A[C])?A[C]:[A[C]];for(let b=0,T=G.length;b<T;b++){let V=G[b];if(g(V,C,b,P)===!0){let X=V.__offset,re=Array.isArray(V.value)?V.value:[V.value],I=0;for(let z=0;z<re.length;z++){let Y=re[z],J=v(Y);typeof Y=="number"||typeof Y=="boolean"?(V.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,X+I,V.__data)):Y.isMatrix3?(V.__data[0]=Y.elements[0],V.__data[1]=Y.elements[1],V.__data[2]=Y.elements[2],V.__data[3]=0,V.__data[4]=Y.elements[3],V.__data[5]=Y.elements[4],V.__data[6]=Y.elements[5],V.__data[7]=0,V.__data[8]=Y.elements[6],V.__data[9]=Y.elements[7],V.__data[10]=Y.elements[8],V.__data[11]=0):(Y.toArray(V.__data,I),I+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,V.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(M,y,A,P){let C=M.value,R=y+"_"+A;if(P[R]===void 0)return typeof C=="number"||typeof C=="boolean"?P[R]=C:P[R]=C.clone(),!0;{let G=P[R];if(typeof C=="number"||typeof C=="boolean"){if(G!==C)return P[R]=C,!0}else if(G.equals(C)===!1)return G.copy(C),!0}return!1}function x(M){let y=M.uniforms,A=0,P=16;for(let R=0,G=y.length;R<G;R++){let b=Array.isArray(y[R])?y[R]:[y[R]];for(let T=0,V=b.length;T<V;T++){let X=b[T],re=Array.isArray(X.value)?X.value:[X.value];for(let I=0,z=re.length;I<z;I++){let Y=re[I],J=v(Y),Z=A%P;Z!==0&&P-Z<J.boundary&&(A+=P-Z),X.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=A,A+=J.storage}}}let C=A%P;return C>0&&(A+=P-C),M.__size=A,M.__cache={},this}function v(M){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){let y=M.target;y.removeEventListener("dispose",m);let A=o.indexOf(y.__bindingPointIndex);o.splice(A,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(let M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}function Lo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function z_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function xd(){return(typeof performance>"u"?Date:performance).now()}function yd(n,e){return n.distance-e.distance}function xc(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)xc(s[r],e,t,!0)}}var yc,qm,Yh,Xm,vd,Ym,ai,Pi,vn,zn,Ai,Ks,$h,Zh,Jh,$m,ts,Zm,Jm,Kh,jh,Km,jm,Qm,e0,Ul,Nl,t0,n0,i0,s0,r0,o0,a0,l0,c0,h0,u0,d0,Io,f0,p0,m0,g0,vc,x0,y0,Ri,v0,_0,b0,M0,S0,w0,_d,er,tr,zl,Ol,ha,Fl,On,Bl,un,Qh,il,Rn,E0,Ur,Ci,T0,A0,_c,bd,Ei,Ti,Nr,Md,Sd,is,R0,Fn,C0,P0,ss,nr,L0,wd,I0,Ed,Td,sl,rl,ol,al,eu,tu,nu,iu,Ad,su,ru,ou,au,lu,cu,hu,uu,du,fu,pu,mu,gu,xu,yu,vu,ll,_u,bu,k0,Mu,Su,wu,ko,Do,cl,Eu,Tu,Au,Rd,rs,D0,U0,Cd,N0,Cn,Lt,hi,bc,ua,Uo,xt,No,zo,Is,Ru,z0,O0,F0,Pd,B0,H0,G0,V0,Cu,Pu,Hl,ci,Oo,Li,Qt,hl,Gl,Ye,Je,dl,Iu,ku,Du,lo,X0,lt,ks,Bo,Y0,Ho,$0,Pn,Xt,Wl,ui,Go,ql,Jn,U,ml,Uu,os,ni,Dn,co,Ds,Us,Ns,_i,bi,Ji,Cr,ho,uo,Ki,Z0,Pr,xl,zr,ii,yl,fo,Mi,vl,po,_l,Vo,Dt,zs,Un,J0,K0,Si,mo,bn,Nu,zu,ir,Or,j0,Ou,Os,si,go,Lr,Q0,eg,Fu,Bu,Hu,tg,ng,fn,Nn,ri,bl,oi,Fs,Bs,Gu,Ml,Sl,wl,xo,$s,Id,wi,yo,Ve,en,ig,as,pn,kt,vo,tn,Wo,qo,_t,sg,An,Tl,Hs,Mn,Ir,qt,mn,Vu,ji,_o,Wu,Gs,Vs,Ws,Al,bo,Mo,So,wo,qu,Xu,Yu,Eo,To,mt,Ln,ag,lg,cg,di,Xo,dn,qs,Xs,Xl,Yo,Yl,Rl,hg,ug,li,Qi,Ro,Fr,Ii,fg,pg,mg,gg,xg,yg,vg,_g,bg,Mg,Sg,wg,Eg,Tg,Ag,Rg,Cg,Pg,Lg,Ig,kg,Dg,Ug,Ng,zg,Og,Fg,Bg,Hg,Gg,Vg,Wg,qg,Xg,Yg,$g,Zg,Jg,Kg,jg,Qg,ex,tx,nx,ix,sx,rx,ox,ax,lx,cx,hx,ux,dx,fx,px,mx,gx,xx,yx,vx,_x,bx,Mx,Sx,wx,Ex,Tx,Ax,Rx,Cx,Px,Lx,Ix,kx,Dx,Ux,Nx,zx,Ox,Fx,Bx,Hx,Gx,Vx,Wx,qx,Xx,Yx,$x,Zx,Jx,Kx,jx,Qx,ey,ty,ny,iy,sy,ry,oy,ay,ly,cy,hy,uy,dy,fy,py,my,gy,xy,yy,vy,_y,by,My,Sy,wy,Ey,Ty,Ay,Ry,Cy,Py,Ly,Iy,ky,Dy,Uy,Ny,zy,Oy,Fy,By,Hy,Gy,Vy,Wy,qy,Ge,ae,Zn,Co,$o,Zs,$u,ns,Cl,Zu,Pl,Ll,Il,es,Ys,Ju,Zo,Jo,Ud,Nd,zd,Od,Fd,ed,td,nd,id,sd,$l,Zl,Jl,kl,Qs,Jv,Kv,o_,a_,c_,x_,jl,Ql,w_,ec,tc,R_,C_,nc,vt,D_,Dr,ic,Br,sc,Ko,jo,Qo,ea,Hr,ta,Gr,na,ia,sa,rr,or,ar,rc,oc,ac,Bn,ls,lc,cc,hc,Vr,cs,uc,dc,O_,fc,ra,oa,Dl,md,gd,pc,mc,aa,la,Sc,F_,wc,B_,H_,G_,V_,W_,q_,X_,gc,yt,fM,ca,fa=Ue(()=>{yc="160",qm=0,Yh=1,Xm=2,vd=1,Ym=2,ai=3,Pi=0,vn=1,zn=2,Ai=0,Ks=1,$h=2,Zh=3,Jh=4,$m=5,ts=100,Zm=101,Jm=102,Kh=103,jh=104,Km=200,jm=201,Qm=202,e0=203,Ul=204,Nl=205,t0=206,n0=207,i0=208,s0=209,r0=210,o0=211,a0=212,l0=213,c0=214,h0=0,u0=1,d0=2,Io=3,f0=4,p0=5,m0=6,g0=7,vc=0,x0=1,y0=2,Ri=0,v0=1,_0=2,b0=3,M0=4,S0=5,w0=6,_d=300,er=301,tr=302,zl=303,Ol=304,ha=306,Fl=1e3,On=1001,Bl=1002,un=1003,Qh=1004,il=1005,Rn=1006,E0=1007,Ur=1008,Ci=1009,T0=1010,A0=1011,_c=1012,bd=1013,Ei=1014,Ti=1015,Nr=1016,Md=1017,Sd=1018,is=1020,R0=1021,Fn=1023,C0=1024,P0=1025,ss=1026,nr=1027,L0=1028,wd=1029,I0=1030,Ed=1031,Td=1033,sl=33776,rl=33777,ol=33778,al=33779,eu=35840,tu=35841,nu=35842,iu=35843,Ad=36196,su=37492,ru=37496,ou=37808,au=37809,lu=37810,cu=37811,hu=37812,uu=37813,du=37814,fu=37815,pu=37816,mu=37817,gu=37818,xu=37819,yu=37820,vu=37821,ll=36492,_u=36494,bu=36495,k0=36283,Mu=36284,Su=36285,wu=36286,ko=2300,Do=2301,cl=2302,Eu=2400,Tu=2401,Au=2402,Rd=3e3,rs=3001,D0=3200,U0=3201,Cd=0,N0=1,Cn="",Lt="srgb",hi="srgb-linear",bc="display-p3",ua="display-p3-linear",Uo="linear",xt="srgb",No="rec709",zo="p3",Is=7680,Ru=519,z0=512,O0=513,F0=514,Pd=515,B0=516,H0=517,G0=518,V0=519,Cu=35044,Pu="300 es",Hl=1035,ci=2e3,Oo=2001,Li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hl=Math.PI/180,Gl=180/Math.PI;Ye=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(yn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Je=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],g=i[5],x=i[8],v=s[0],m=s[3],d=s[6],M=s[1],y=s[4],A=s[7],P=s[2],C=s[5],R=s[8];return r[0]=o*v+a*M+l*P,r[3]=o*m+a*y+l*C,r[6]=o*d+a*A+l*R,r[1]=c*v+h*M+u*P,r[4]=c*m+h*y+u*C,r[7]=c*d+h*A+u*R,r[2]=f*v+g*M+x*P,r[5]=f*m+g*y+x*C,r[8]=f*d+g*A+x*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,g=c*r-o*l,x=t*u+i*f+s*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return e[0]=u*v,e[1]=(s*c-h*i)*v,e[2]=(a*i-s*o)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=g*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(dl.makeScale(e,t)),this}rotate(e){return this.premultiply(dl.makeRotation(-e)),this}translate(e,t){return this.premultiply(dl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},dl=new Je;Iu={};ku=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Du=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),lo={[hi]:{transfer:Uo,primaries:No,toReference:n=>n,fromReference:n=>n},[Lt]:{transfer:xt,primaries:No,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ua]:{transfer:Uo,primaries:zo,toReference:n=>n.applyMatrix3(Du),fromReference:n=>n.applyMatrix3(ku)},[bc]:{transfer:xt,primaries:zo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Du),fromReference:n=>n.applyMatrix3(ku).convertLinearToSRGB()}},X0=new Set([hi,ua]),lt={enabled:!0,_workingColorSpace:hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!X0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=lo[e].toReference,s=lo[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return lo[n].primaries},getTransfer:function(n){return n===Cn?Uo:lo[n].transfer}};Bo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ks===void 0&&(ks=Fo("canvas")),ks.width=e.width,ks.height=e.height;let i=ks.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ks}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=js(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(js(t[i]/255)*255):t[i]=js(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Y0=0,Ho=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=Wr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(pl(s[o].image)):r.push(pl(s[o]))}else r=pl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};$0=0,Pn=class n extends Li{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=On,s=On,r=Rn,o=Ur,a=Fn,l=Ci,c=n.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=Wr(),this.name="",this.source=new Ho(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===rs?Lt:Cn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_d)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fl:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case Bl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fl:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case Bl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Lt?rs:Rd}set encoding(e){kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===rs?Lt:Cn}};Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=_d;Pn.DEFAULT_ANISOTROPY=1;Xt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],g=l[5],x=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(x+m)<.1&&Math.abs(c+g+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,A=(g+1)/2,P=(d+1)/2,C=(h+f)/4,R=(u+v)/4,G=(x+m)/4;return y>A&&y>P?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=C/i,r=R/i):A>P?A<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),i=C/s,r=G/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=R/r,s=G/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-x)*(m-x)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-x)/M,this.y=(u-v)/M,this.z=(f-h)/M,this.w=Math.acos((c+g+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wl=class extends Li{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(kr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===rs?Lt:Cn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Pn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ho(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ui=class extends Wl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Go=class extends Pn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ql=class extends Pn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Jn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],g=r[o+1],x=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=g,e[t+2]=x,e[t+3]=v;return}if(u!==v||l!==f||c!==g||h!==x){let m=1-a,d=l*f+c*g+h*x+u*v,M=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){let P=Math.sqrt(y),C=Math.atan2(P,d*M);m=Math.sin(m*C)/P,a=Math.sin(a*C)/P}let A=a*M;if(l=l*m+f*A,c=c*m+g*A,h=h*m+x*A,u=u*m+v*A,m===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],g=r[o+2],x=r[o+3];return e[t]=a*x+h*u+l*g-c*f,e[t+1]=l*x+h*f+c*u-a*g,e[t+2]=c*x+h*g+a*f-l*u,e[t+3]=h*x-a*u-l*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),g=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*g*x,this._y=c*g*u-f*h*x,this._z=c*h*x+f*g*u,this._w=c*h*u-f*g*x;break;case"YXZ":this._x=f*h*u+c*g*x,this._y=c*g*u-f*h*x,this._z=c*h*x-f*g*u,this._w=c*h*u+f*g*x;break;case"ZXY":this._x=f*h*u-c*g*x,this._y=c*g*u+f*h*x,this._z=c*h*x+f*g*u,this._w=c*h*u-f*g*x;break;case"ZYX":this._x=f*h*u-c*g*x,this._y=c*g*u+f*h*x,this._z=c*h*x-f*g*u,this._w=c*h*u+f*g*x;break;case"YZX":this._x=f*h*u+c*g*x,this._y=c*g*u+f*h*x,this._z=c*h*x-f*g*u,this._w=c*h*u-f*g*x;break;case"XZY":this._x=f*h*u-c*g*x,this._y=c*g*u-f*h*x,this._z=c*h*x+f*g*u,this._w=c*h*u+f*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(h-l)*g,this._y=(r-c)*g,this._z=(o-s)*g}else if(i>a&&i>u){let g=2*Math.sqrt(1+i-a-u);this._w=(h-l)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+c)/g}else if(a>u){let g=2*Math.sqrt(1+a-i-u);this._w=(r-c)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(l+h)/g}else{let g=2*Math.sqrt(1+u-i-a);this._w=(o-s)/g,this._x=(r+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let g=1-t;return this._w=g*o+t*this._w,this._x=g*i+t*this._x,this._y=g*s+t*this._y,this._z=g*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ml.copy(this).projectOnVector(e),this.sub(ml)}reflect(e){return this.sub(ml.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(yn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ml=new U,Uu=new Jn,os=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),co.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),co.copy(i.boundingBox)),co.applyMatrix4(e.matrixWorld),this.union(co)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),ho.subVectors(this.max,Cr),Ds.subVectors(e.a,Cr),Us.subVectors(e.b,Cr),Ns.subVectors(e.c,Cr),_i.subVectors(Us,Ds),bi.subVectors(Ns,Us),Ji.subVectors(Ds,Ns);let t=[0,-_i.z,_i.y,0,-bi.z,bi.y,0,-Ji.z,Ji.y,_i.z,0,-_i.x,bi.z,0,-bi.x,Ji.z,0,-Ji.x,-_i.y,_i.x,0,-bi.y,bi.x,0,-Ji.y,Ji.x,0];return!gl(t,Ds,Us,Ns,ho)||(t=[1,0,0,0,1,0,0,0,1],!gl(t,Ds,Us,Ns,ho))?!1:(uo.crossVectors(_i,bi),t=[uo.x,uo.y,uo.z],gl(t,Ds,Us,Ns,ho))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ni=[new U,new U,new U,new U,new U,new U,new U,new U],Dn=new U,co=new os,Ds=new U,Us=new U,Ns=new U,_i=new U,bi=new U,Ji=new U,Cr=new U,ho=new U,uo=new U,Ki=new U;Z0=new os,Pr=new U,xl=new U,zr=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Z0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pr.subVectors(e,this.center);let t=Pr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Pr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pr.copy(e.center).add(xl)),this.expandByPoint(Pr.copy(e.center).sub(xl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ii=new U,yl=new U,fo=new U,Mi=new U,vl=new U,po=new U,_l=new U,Vo=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){yl.copy(e).add(t).multiplyScalar(.5),fo.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(yl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(fo),a=Mi.dot(this.direction),l=-Mi.dot(fo),c=Mi.lengthSq(),h=Math.abs(1-o*o),u,f,g,x;if(h>0)if(u=o*l-a,f=o*a-l,x=r*h,u>=0)if(f>=-x)if(f<=x){let v=1/h;u*=v,f*=v,g=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),g=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),g=-u*u+f*(f+2*l)+c;else f<=-x?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),g=-u*u+f*(f+2*l)+c):f<=x?(u=0,f=Math.min(Math.max(-r,-l),r),g=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),g=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),g=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(yl).addScaledVector(fo,f),g}intersectSphere(e,t){ii.subVectors(e.center,this.origin);let i=ii.dot(this.direction),s=ii.dot(ii)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,i,s,r){vl.subVectors(t,e),po.subVectors(i,e),_l.crossVectors(vl,po);let o=this.direction.dot(_l),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,e);let l=a*this.direction.dot(po.crossVectors(Mi,po));if(l<0)return null;let c=a*this.direction.dot(vl.cross(Mi));if(c<0||l+c>o)return null;let h=-a*Mi.dot(_l);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Dt=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,f,g,x,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,f,g,x,v,m)}set(e,t,i,s,r,o,a,l,c,h,u,f,g,x,v,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=g,d[7]=x,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/zs.setFromMatrixColumn(e,0).length(),r=1/zs.setFromMatrixColumn(e,1).length(),o=1/zs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,g=o*u,x=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=g+x*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=x+g*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,g=l*u,x=c*h,v=c*u;t[0]=f+v*a,t[4]=x*a-g,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=g*a-x,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,g=l*u,x=c*h,v=c*u;t[0]=f-v*a,t[4]=-o*u,t[8]=x+g*a,t[1]=g+x*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,g=o*u,x=a*h,v=a*u;t[0]=l*h,t[4]=x*c-g,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=g*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,g=o*c,x=a*l,v=a*c;t[0]=l*h,t[4]=v-f*u,t[8]=x*u+g,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=g*u+x,t[10]=f-v*u}else if(e.order==="XZY"){let f=o*l,g=o*c,x=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=o*h,t[9]=g*u-x,t[2]=x*u-g,t[6]=a*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(J0,e,K0)}lookAt(e,t,i){let s=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Si.crossVectors(i,bn),Si.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Si.crossVectors(i,bn)),Si.normalize(),mo.crossVectors(bn,Si),s[0]=Si.x,s[4]=mo.x,s[8]=bn.x,s[1]=Si.y,s[5]=mo.y,s[9]=bn.y,s[2]=Si.z,s[6]=mo.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],g=i[13],x=i[2],v=i[6],m=i[10],d=i[14],M=i[3],y=i[7],A=i[11],P=i[15],C=s[0],R=s[4],G=s[8],b=s[12],T=s[1],V=s[5],X=s[9],re=s[13],I=s[2],z=s[6],Y=s[10],J=s[14],Z=s[3],$=s[7],ee=s[11],ie=s[15];return r[0]=o*C+a*T+l*I+c*Z,r[4]=o*R+a*V+l*z+c*$,r[8]=o*G+a*X+l*Y+c*ee,r[12]=o*b+a*re+l*J+c*ie,r[1]=h*C+u*T+f*I+g*Z,r[5]=h*R+u*V+f*z+g*$,r[9]=h*G+u*X+f*Y+g*ee,r[13]=h*b+u*re+f*J+g*ie,r[2]=x*C+v*T+m*I+d*Z,r[6]=x*R+v*V+m*z+d*$,r[10]=x*G+v*X+m*Y+d*ee,r[14]=x*b+v*re+m*J+d*ie,r[3]=M*C+y*T+A*I+P*Z,r[7]=M*R+y*V+A*z+P*$,r[11]=M*G+y*X+A*Y+P*ee,r[15]=M*b+y*re+A*J+P*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],g=e[14],x=e[3],v=e[7],m=e[11],d=e[15];return x*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*g-i*l*g)+v*(+t*l*g-t*c*f+r*o*f-s*o*g+s*c*h-r*l*h)+m*(+t*c*u-t*a*g-r*o*u+i*o*g+r*a*h-i*c*h)+d*(-s*a*h-t*l*u+t*a*f+s*o*u-i*o*f+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],g=e[11],x=e[12],v=e[13],m=e[14],d=e[15],M=u*m*c-v*f*c+v*l*g-a*m*g-u*l*d+a*f*d,y=x*f*c-h*m*c-x*l*g+o*m*g+h*l*d-o*f*d,A=h*v*c-x*u*c+x*a*g-o*v*g-h*a*d+o*u*d,P=x*u*l-h*v*l-x*a*f+o*v*f+h*a*m-o*u*m,C=t*M+i*y+s*A+r*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/C;return e[0]=M*R,e[1]=(v*f*r-u*m*r-v*s*g+i*m*g+u*s*d-i*f*d)*R,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*d+i*l*d)*R,e[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*g-i*l*g)*R,e[4]=y*R,e[5]=(h*m*r-x*f*r+x*s*g-t*m*g-h*s*d+t*f*d)*R,e[6]=(x*l*r-o*m*r-x*s*c+t*m*c+o*s*d-t*l*d)*R,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*g+t*l*g)*R,e[8]=A*R,e[9]=(x*u*r-h*v*r-x*i*g+t*v*g+h*i*d-t*u*d)*R,e[10]=(o*v*r-x*a*r+x*i*c-t*v*c-o*i*d+t*a*d)*R,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*g-t*a*g)*R,e[12]=P*R,e[13]=(h*v*s-x*u*s+x*i*f-t*v*f-h*i*m+t*u*m)*R,e[14]=(x*a*s-o*v*s-x*i*l+t*v*l+o*i*m-t*a*m)*R,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*f+t*a*f)*R,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,g=r*h,x=r*u,v=o*h,m=o*u,d=a*u,M=l*c,y=l*h,A=l*u,P=i.x,C=i.y,R=i.z;return s[0]=(1-(v+d))*P,s[1]=(g+A)*P,s[2]=(x-y)*P,s[3]=0,s[4]=(g-A)*C,s[5]=(1-(f+d))*C,s[6]=(m+M)*C,s[7]=0,s[8]=(x+y)*R,s[9]=(m-M)*R,s[10]=(1-(f+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=zs.set(s[0],s[1],s[2]).length(),o=zs.set(s[4],s[5],s[6]).length(),a=zs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Un.copy(this);let c=1/r,h=1/o,u=1/a;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,t.setFromRotationMatrix(Un),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ci){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),g,x;if(a===ci)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Oo)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ci){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),f=(t+e)*c,g=(i+s)*h,x,v;if(a===ci)x=(o+r)*u,v=-2*u;else if(a===Oo)x=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},zs=new U,Un=new Dt,J0=new U(0,0,0),K0=new U(1,1,1),Si=new U,mo=new U,bn=new U,Nu=new Dt,zu=new Jn,ir=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(yn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(yn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-yn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(yn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-yn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Nu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zu.setFromEuler(this),this.setFromQuaternion(zu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ir.DEFAULT_ORDER="XYZ";Or=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},j0=0,Ou=new U,Os=new Jn,si=new Dt,go=new U,Lr=new U,Q0=new U,eg=new Jn,Fu=new U(1,0,0),Bu=new U(0,1,0),Hu=new U(0,0,1),tg={type:"added"},ng={type:"removed"},fn=class n extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=Wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new U,t=new ir,i=new Jn,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Dt},normalMatrix:{value:new Je}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(Fu,e)}rotateY(e){return this.rotateOnAxis(Bu,e)}rotateZ(e){return this.rotateOnAxis(Hu,e)}translateOnAxis(e,t){return Ou.copy(e).applyQuaternion(this.quaternion),this.position.add(Ou.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fu,e)}translateY(e){return this.translateOnAxis(Bu,e)}translateZ(e){return this.translateOnAxis(Hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?go.copy(e):go.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Lr,go,this.up):si.lookAt(go,Lr,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),Os.setFromRotationMatrix(si),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(tg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ng)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,e,Q0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,eg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),g=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};fn.DEFAULT_UP=new U(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Nn=new U,ri=new U,bl=new U,oi=new U,Fs=new U,Bs=new U,Gu=new U,Ml=new U,Sl=new U,wl=new U,xo=!1,$s=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Nn.subVectors(e,t),s.cross(Nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Nn.subVectors(s,t),ri.subVectors(i,t),bl.subVectors(e,t);let o=Nn.dot(Nn),a=Nn.dot(ri),l=Nn.dot(bl),c=ri.dot(ri),h=ri.dot(bl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,g=(c*l-a*h)*f,x=(o*h-a*l)*f;return r.set(1-g-x,x,g)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getUV(e,t,i,s,r,o,a,l){return xo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xo=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static isFrontFacing(e,t,i,s){return Nn.subVectors(i,t),ri.subVectors(e,t),Nn.cross(ri).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Nn.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return xo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xo=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Fs.subVectors(s,i),Bs.subVectors(r,i),Ml.subVectors(e,i);let l=Fs.dot(Ml),c=Bs.dot(Ml);if(l<=0&&c<=0)return t.copy(i);Sl.subVectors(e,s);let h=Fs.dot(Sl),u=Bs.dot(Sl);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Fs,o);wl.subVectors(e,r);let g=Fs.dot(wl),x=Bs.dot(wl);if(x>=0&&g<=x)return t.copy(r);let v=g*c-l*x;if(v<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(i).addScaledVector(Bs,a);let m=h*x-g*u;if(m<=0&&u-h>=0&&g-x>=0)return Gu.subVectors(r,s),a=(u-h)/(u-h+(g-x)),t.copy(s).addScaledVector(Gu,a);let d=1/(m+v+f);return o=v*d,a=f*d,t.copy(i).addScaledVector(Fs,o).addScaledVector(Bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},yo={h:0,s:0,l:0};Ve=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=W0(e,1),t=yn(t,0,1),i=yn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=El(o,r,e+1/3),this.g=El(o,r,e),this.b=El(o,r,e-1/3)}return lt.toWorkingColorSpace(this,s),this}setStyle(e,t=Lt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let i=Id[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}copyLinearToSRGB(e){return this.r=fl(e.r),this.g=fl(e.g),this.b=fl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return lt.fromWorkingColorSpace(en.copy(this),e),Math.round(yn(en.r*255,0,255))*65536+Math.round(yn(en.g*255,0,255))*256+Math.round(yn(en.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(en.copy(this),t);let i=en.r,s=en.g,r=en.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Lt){lt.fromWorkingColorSpace(en.copy(this),e);let t=en.r,i=en.g,s=en.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(yo);let i=ul(wi.h,yo.h,t),s=ul(wi.s,yo.s,t),r=ul(wi.l,yo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new Ve;Ve.NAMES=Id;ig=0,as=class extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=Wr(),this.name="",this.type="Material",this.blending=Ks,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ul,this.blendDst=Nl,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(i.blending=this.blending),this.side!==Pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ul&&(i.blendSrc=this.blendSrc),this.blendDst!==Nl&&(i.blendDst=this.blendDst),this.blendEquation!==ts&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Io&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ru&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},pn=class extends as{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},kt=new U,vo=new Ye,tn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Cu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)vo.fromBufferAttribute(this,t),vo.applyMatrix3(e),this.setXY(t,vo.x,vo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Rr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rr(t,this.array)),t}setX(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rr(t,this.array)),t}setY(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rr(t,this.array)),t}setW(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),i=xn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),i=xn(i,this.array),s=xn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),i=xn(i,this.array),s=xn(s,this.array),r=xn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cu&&(e.usage=this.usage),e}},Wo=class extends tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}},qo=class extends tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}},_t=class extends tn{constructor(e,t,i){super(new Float32Array(e),t,i)}},sg=0,An=new Dt,Tl=new fn,Hs=new U,Mn=new os,Ir=new os,qt=new U,mn=class n extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=Wr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ld(e)?qo:Wo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,i){return An.makeTranslation(e,t,i),this.applyMatrix4(An),this}scale(e,t,i){return An.makeScale(e,t,i),this.applyMatrix4(An),this}lookAt(e){return Tl.lookAt(e),Tl.updateMatrix(),this.applyMatrix4(Tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new _t(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ir.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(Mn.min,Ir.min),Mn.expandByPoint(qt),qt.addVectors(Mn.max,Ir.max),Mn.expandByPoint(qt)):(Mn.expandByPoint(Ir.min),Mn.expandByPoint(Ir.max))}Mn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)qt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)qt.fromBufferAttribute(a,c),l&&(Hs.fromBufferAttribute(e,c),qt.add(Hs)),s=Math.max(s,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<a;T++)c[T]=new U,h[T]=new U;let u=new U,f=new U,g=new U,x=new Ye,v=new Ye,m=new Ye,d=new U,M=new U;function y(T,V,X){u.fromArray(s,T*3),f.fromArray(s,V*3),g.fromArray(s,X*3),x.fromArray(o,T*2),v.fromArray(o,V*2),m.fromArray(o,X*2),f.sub(u),g.sub(u),v.sub(x),m.sub(x);let re=1/(v.x*m.y-m.x*v.y);isFinite(re)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(g,-v.y).multiplyScalar(re),M.copy(g).multiplyScalar(v.x).addScaledVector(f,-m.x).multiplyScalar(re),c[T].add(d),c[V].add(d),c[X].add(d),h[T].add(M),h[V].add(M),h[X].add(M))}let A=this.groups;A.length===0&&(A=[{start:0,count:i.length}]);for(let T=0,V=A.length;T<V;++T){let X=A[T],re=X.start,I=X.count;for(let z=re,Y=re+I;z<Y;z+=3)y(i[z+0],i[z+1],i[z+2])}let P=new U,C=new U,R=new U,G=new U;function b(T){R.fromArray(r,T*3),G.copy(R);let V=c[T];P.copy(V),P.sub(R.multiplyScalar(R.dot(V))).normalize(),C.crossVectors(G,V);let re=C.dot(h[T])<0?-1:1;l[T*4]=P.x,l[T*4+1]=P.y,l[T*4+2]=P.z,l[T*4+3]=re}for(let T=0,V=A.length;T<V;++T){let X=A[T],re=X.start,I=X.count;for(let z=re,Y=re+I;z<Y;z+=3)b(i[z+0]),b(i[z+1]),b(i[z+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let f=0,g=e.count;f<g;f+=3){let x=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,g=t.count;f<g;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),g=0,x=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?g=l[v]*a.data.stride+a.offset:g=l[v]*h;for(let d=0;d<h;d++)f[x++]=c[g++]}return new tn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],g=e(f,i);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let g=c[u];h.push(g.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,g=u.length;f<g;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vu=new Dt,ji=new Vo,_o=new zr,Wu=new U,Gs=new U,Vs=new U,Ws=new U,Al=new U,bo=new U,Mo=new Ye,So=new Ye,wo=new Ye,qu=new U,Xu=new U,Yu=new U,Eo=new U,To=new U,mt=class extends fn{constructor(e=new mn,t=new pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){bo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Al.fromBufferAttribute(u,e),o?bo.addScaledVector(Al,h):bo.addScaledVector(Al.sub(t),h))}t.add(bo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_o.copy(i.boundingSphere),_o.applyMatrix4(r),ji.copy(e.ray).recast(e.near),!(_o.containsPoint(ji.origin)===!1&&(ji.intersectSphere(_o,Wu)===null||ji.origin.distanceToSquared(Wu)>(e.far-e.near)**2))&&(Vu.copy(r).invert(),ji.copy(e.ray).applyMatrix4(Vu),!(i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=f.length;x<v;x++){let m=f[x],d=o[m.materialIndex],M=Math.max(m.start,g.start),y=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let A=M,P=y;A<P;A+=3){let C=a.getX(A),R=a.getX(A+1),G=a.getX(A+2);s=Ao(this,d,e,i,c,h,u,C,R,G),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,g.start),v=Math.min(a.count,g.start+g.count);for(let m=x,d=v;m<d;m+=3){let M=a.getX(m),y=a.getX(m+1),A=a.getX(m+2);s=Ao(this,o,e,i,c,h,u,M,y,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=f.length;x<v;x++){let m=f[x],d=o[m.materialIndex],M=Math.max(m.start,g.start),y=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let A=M,P=y;A<P;A+=3){let C=A,R=A+1,G=A+2;s=Ao(this,d,e,i,c,h,u,C,R,G),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,g.start),v=Math.min(l.count,g.start+g.count);for(let m=x,d=v;m<d;m+=3){let M=m,y=m+1,A=m+2;s=Ao(this,o,e,i,c,h,u,M,y,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};Ln=class n extends mn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,g=0;x("z","y","x",-1,-1,i,t,e,o,r,0),x("z","y","x",1,-1,i,t,-e,o,r,1),x("x","z","y",1,1,e,i,t,s,o,2),x("x","z","y",1,-1,e,i,-t,s,o,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(u,2));function x(v,m,d,M,y,A,P,C,R,G,b){let T=A/R,V=P/G,X=A/2,re=P/2,I=C/2,z=R+1,Y=G+1,J=0,Z=0,$=new U;for(let ee=0;ee<Y;ee++){let ie=ee*V-re;for(let pe=0;pe<z;pe++){let q=pe*T-X;$[v]=q*M,$[m]=ie*y,$[d]=I,c.push($.x,$.y,$.z),$[v]=0,$[m]=0,$[d]=C>0?1:-1,h.push($.x,$.y,$.z),u.push(pe/R),u.push(1-ee/G),J+=1}}for(let ee=0;ee<G;ee++)for(let ie=0;ie<R;ie++){let pe=f+ie+z*ee,q=f+ie+z*(ee+1),K=f+(ie+1)+z*(ee+1),de=f+(ie+1)+z*ee;l.push(pe,q,de),l.push(q,K,de),Z+=6}a.addGroup(g,Z,b),g+=Z,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};ag={clone:sr,merge:hn},lg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,di=class extends as{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lg,this.fragmentShader=cg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sr(e.uniforms),this.uniformsGroups=og(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Xo=class extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},dn=class extends Xo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Gl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(hl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gl*2*Math.atan(Math.tan(hl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(hl*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},qs=-90,Xs=1,Xl=class extends fn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new dn(qs,Xs,e,t);s.layers=this.layers,this.add(s);let r=new dn(qs,Xs,e,t);r.layers=this.layers,this.add(r);let o=new dn(qs,Xs,e,t);o.layers=this.layers,this.add(o);let a=new dn(qs,Xs,e,t);a.layers=this.layers,this.add(a);let l=new dn(qs,Xs,e,t);l.layers=this.layers,this.add(l);let c=new dn(qs,Xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,g),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},Yo=class extends Pn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:er,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Yl=class extends ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(kr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===rs?Lt:Cn),this.texture=new Yo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ln(5,5,5),r=new di({name:"CubemapFromEquirect",uniforms:sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:Ai});r.uniforms.tEquirect.value=t;let o=new mt(s,r),a=t.minFilter;return t.minFilter===Ur&&(t.minFilter=Rn),new Xl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Rl=new U,hg=new U,ug=new Je,li=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Rl.subVectors(i,t).cross(hg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Rl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ug.getNormalMatrix(e),s=this.coplanarPoint(Rl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qi=new zr,Ro=new U,Fr=class{constructor(e=new li,t=new li,i=new li,s=new li,r=new li,o=new li){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ci){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],g=s[8],x=s[9],v=s[10],m=s[11],d=s[12],M=s[13],y=s[14],A=s[15];if(i[0].setComponents(l-r,f-c,m-g,A-d).normalize(),i[1].setComponents(l+r,f+c,m+g,A+d).normalize(),i[2].setComponents(l+o,f+h,m+x,A+M).normalize(),i[3].setComponents(l-o,f-h,m-x,A-M).normalize(),i[4].setComponents(l-a,f-u,m-v,A-y).normalize(),t===ci)i[5].setComponents(l+a,f+u,m+v,A+y).normalize();else if(t===Oo)i[5].setComponents(a,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ro.x=s.normal.x>0?e.max.x:e.min.x,Ro.y=s.normal.y>0?e.max.y:e.min.y,Ro.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Ii=class n extends mn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,g=[],x=[],v=[],m=[];for(let d=0;d<h;d++){let M=d*f-o;for(let y=0;y<c;y++){let A=y*u-r;x.push(A,-M,0),v.push(0,0,1),m.push(y/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){let y=M+c*d,A=M+c*(d+1),P=M+1+c*(d+1),C=M+1+c*d;g.push(y,A,C),g.push(A,P,C)}this.setIndex(g),this.setAttribute("position",new _t(x,3)),this.setAttribute("normal",new _t(v,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},fg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pg=`#ifdef USE_ALPHAHASH
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
#endif`,mg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vg=`#ifdef USE_AOMAP
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
#endif`,_g=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bg=`#ifdef USE_BATCHING
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
#endif`,Mg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Sg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tg=`#ifdef USE_IRIDESCENCE
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
#endif`,Ag=`#ifdef USE_BUMPMAP
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
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ig=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ng=`#define PI 3.141592653589793
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
} // validated`,zg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Og=`vec3 transformedNormal = objectNormal;
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
#endif`,Fg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wg=`
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
}`,qg=`#ifdef USE_ENVMAP
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
#endif`,Xg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yg=`#ifdef USE_ENVMAP
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
#endif`,$g=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zg=`#ifdef USE_ENVMAP
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
#endif`,Jg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ex=`#ifdef USE_GRADIENTMAP
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
}`,tx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,nx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ix=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rx=`uniform bool receiveShadow;
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
#endif`,ox=`#ifdef USE_ENVMAP
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
#endif`,ax=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ux=`PhysicalMaterial material;
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
#endif`,dx=`struct PhysicalMaterial {
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
}`,fx=`
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
#endif`,px=`#if defined( RE_IndirectDiffuse )
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
#endif`,mx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,vx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,_x=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sx=`#if defined( USE_POINTS_UV )
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
#endif`,wx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ex=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ax=`#ifdef USE_MORPHNORMALS
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
#endif`,Rx=`#ifdef USE_MORPHTARGETS
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
#endif`,Cx=`#ifdef USE_MORPHTARGETS
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
#endif`,Px=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ux=`#ifdef USE_NORMALMAP
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
#endif`,Nx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ox=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$x=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kx=`float getShadowMask() {
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
}`,jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qx=`#ifdef USE_SKINNING
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
#endif`,ey=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ty=`#ifdef USE_SKINNING
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
#endif`,ny=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ry=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oy=`#ifdef USE_TRANSMISSION
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
#endif`,ay=`#ifdef USE_TRANSMISSION
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
#endif`,ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fy=`uniform sampler2D t2D;
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
}`,py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,my=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yy=`#include <common>
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
}`,vy=`#if DEPTH_PACKING == 3200
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
}`,_y=`#define DISTANCE
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
}`,by=`#define DISTANCE
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
}`,My=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`uniform float scale;
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
}`,Ey=`uniform vec3 diffuse;
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
}`,Ty=`#include <common>
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
}`,Ay=`uniform vec3 diffuse;
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
}`,Ry=`#define LAMBERT
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
}`,Cy=`#define LAMBERT
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
}`,Py=`#define MATCAP
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
}`,Ly=`#define MATCAP
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
}`,Iy=`#define NORMAL
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
}`,ky=`#define NORMAL
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
}`,Dy=`#define PHONG
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
}`,Uy=`#define PHONG
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
}`,Ny=`#define STANDARD
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
}`,zy=`#define STANDARD
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
}`,Oy=`#define TOON
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
}`,Fy=`#define TOON
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
}`,By=`uniform float size;
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
}`,Hy=`uniform vec3 diffuse;
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
}`,Gy=`#include <common>
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
}`,Vy=`uniform vec3 color;
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
}`,Wy=`uniform float rotation;
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
}`,qy=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:fg,alphahash_pars_fragment:pg,alphamap_fragment:mg,alphamap_pars_fragment:gg,alphatest_fragment:xg,alphatest_pars_fragment:yg,aomap_fragment:vg,aomap_pars_fragment:_g,batching_pars_vertex:bg,batching_vertex:Mg,begin_vertex:Sg,beginnormal_vertex:wg,bsdfs:Eg,iridescence_fragment:Tg,bumpmap_pars_fragment:Ag,clipping_planes_fragment:Rg,clipping_planes_pars_fragment:Cg,clipping_planes_pars_vertex:Pg,clipping_planes_vertex:Lg,color_fragment:Ig,color_pars_fragment:kg,color_pars_vertex:Dg,color_vertex:Ug,common:Ng,cube_uv_reflection_fragment:zg,defaultnormal_vertex:Og,displacementmap_pars_vertex:Fg,displacementmap_vertex:Bg,emissivemap_fragment:Hg,emissivemap_pars_fragment:Gg,colorspace_fragment:Vg,colorspace_pars_fragment:Wg,envmap_fragment:qg,envmap_common_pars_fragment:Xg,envmap_pars_fragment:Yg,envmap_pars_vertex:$g,envmap_physical_pars_fragment:ox,envmap_vertex:Zg,fog_vertex:Jg,fog_pars_vertex:Kg,fog_fragment:jg,fog_pars_fragment:Qg,gradientmap_pars_fragment:ex,lightmap_fragment:tx,lightmap_pars_fragment:nx,lights_lambert_fragment:ix,lights_lambert_pars_fragment:sx,lights_pars_begin:rx,lights_toon_fragment:ax,lights_toon_pars_fragment:lx,lights_phong_fragment:cx,lights_phong_pars_fragment:hx,lights_physical_fragment:ux,lights_physical_pars_fragment:dx,lights_fragment_begin:fx,lights_fragment_maps:px,lights_fragment_end:mx,logdepthbuf_fragment:gx,logdepthbuf_pars_fragment:xx,logdepthbuf_pars_vertex:yx,logdepthbuf_vertex:vx,map_fragment:_x,map_pars_fragment:bx,map_particle_fragment:Mx,map_particle_pars_fragment:Sx,metalnessmap_fragment:wx,metalnessmap_pars_fragment:Ex,morphcolor_vertex:Tx,morphnormal_vertex:Ax,morphtarget_pars_vertex:Rx,morphtarget_vertex:Cx,normal_fragment_begin:Px,normal_fragment_maps:Lx,normal_pars_fragment:Ix,normal_pars_vertex:kx,normal_vertex:Dx,normalmap_pars_fragment:Ux,clearcoat_normal_fragment_begin:Nx,clearcoat_normal_fragment_maps:zx,clearcoat_pars_fragment:Ox,iridescence_pars_fragment:Fx,opaque_fragment:Bx,packing:Hx,premultiplied_alpha_fragment:Gx,project_vertex:Vx,dithering_fragment:Wx,dithering_pars_fragment:qx,roughnessmap_fragment:Xx,roughnessmap_pars_fragment:Yx,shadowmap_pars_fragment:$x,shadowmap_pars_vertex:Zx,shadowmap_vertex:Jx,shadowmask_pars_fragment:Kx,skinbase_vertex:jx,skinning_pars_vertex:Qx,skinning_vertex:ey,skinnormal_vertex:ty,specularmap_fragment:ny,specularmap_pars_fragment:iy,tonemapping_fragment:sy,tonemapping_pars_fragment:ry,transmission_fragment:oy,transmission_pars_fragment:ay,uv_pars_fragment:ly,uv_pars_vertex:cy,uv_vertex:hy,worldpos_vertex:uy,background_vert:dy,background_frag:fy,backgroundCube_vert:py,backgroundCube_frag:my,cube_vert:gy,cube_frag:xy,depth_vert:yy,depth_frag:vy,distanceRGBA_vert:_y,distanceRGBA_frag:by,equirect_vert:My,equirect_frag:Sy,linedashed_vert:wy,linedashed_frag:Ey,meshbasic_vert:Ty,meshbasic_frag:Ay,meshlambert_vert:Ry,meshlambert_frag:Cy,meshmatcap_vert:Py,meshmatcap_frag:Ly,meshnormal_vert:Iy,meshnormal_frag:ky,meshphong_vert:Dy,meshphong_frag:Uy,meshphysical_vert:Ny,meshphysical_frag:zy,meshtoon_vert:Oy,meshtoon_frag:Fy,points_vert:By,points_frag:Hy,shadow_vert:Gy,shadow_frag:Vy,sprite_vert:Wy,sprite_frag:qy},ae={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Zn={basic:{uniforms:hn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:hn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:hn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:hn([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:hn([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:hn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:hn([ae.points,ae.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:hn([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:hn([ae.common,ae.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:hn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:hn([ae.sprite,ae.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:hn([ae.common,ae.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:hn([ae.lights,ae.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Zn.physical={uniforms:hn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};Co={r:0,b:0,g:0};$o=class extends Xo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Zs=4,$u=[.125,.215,.35,.446,.526,.582],ns=20,Cl=new $o,Zu=new Ve,Pl=null,Ll=0,Il=0,es=(1+Math.sqrt(5))/2,Ys=1/es,Ju=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,es,Ys),new U(0,es,-Ys),new U(Ys,0,es),new U(-Ys,0,es),new U(es,Ys,0),new U(-es,Ys,0)],Zo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Pl=this._renderer.getRenderTarget(),Ll=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pl,Ll,Il),e.scissorTest=!1,Po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pl=this._renderer.getRenderTarget(),Ll=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Nr,format:Fn,colorSpace:hi,depthBuffer:!1},s=Ku(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ku(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jy(r)),this._blurMaterial=Qy(r,e,t)}return s}_compileMaterial(e){let t=new mt(this._lodPlanes[0],e);this._renderer.compile(t,Cl)}_sceneToCubeUV(e,t,i,s){let a=new dn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Zu),h.toneMapping=Ri,h.autoClear=!1;let g=new pn({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),x=new mt(new Ln,g),v=!1,m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,v=!0):(g.color.copy(Zu),v=!0);for(let d=0;d<6;d++){let M=d%3;M===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):M===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let y=this._cubeSize;Po(s,M*y,d>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===er||e.mapping===tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ju());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new mt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Po(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Cl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ju[(s-1)%Ju.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new mt(this._lodPlanes[s],c),f=c.uniforms,g=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*ns-1),v=r/x,m=isFinite(r)?1+Math.floor(h*v):ns;m>ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ns}`);let d=[],M=0;for(let R=0;R<ns;++R){let G=R/v,b=Math.exp(-G*G/2);d.push(b),R===0?M+=b:R<m&&(M+=2*b)}for(let R=0;R<d.length;R++)d[R]=d[R]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=x,f.mipInt.value=y-i;let A=this._sizeLods[s],P=3*A*(s>y-Zs?s-y+Zs:0),C=4*(this._cubeSize-A);Po(t,P,C,3*A,2*A),l.setRenderTarget(t),l.render(u,Cl)}};Jo=class extends Pn{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:ss,h!==ss&&h!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ss&&(i=Ei),i===void 0&&h===nr&&(i=is),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ud=new Pn,Nd=new Jo(1,1);Nd.compareFunction=Pd;zd=new Go,Od=new ql,Fd=new Yo,ed=[],td=[],nd=new Float32Array(16),id=new Float32Array(9),sd=new Float32Array(4);$l=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Rv(t.type)}},Zl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$v(t.type)}},Jl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},kl=/(\w+)(\])?(\[|\.)?/g;Qs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Zv(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};Jv=37297,Kv=0;o_=/^[ \t]*#include +<([\w\d./]+)>/gm;a_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);c_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;x_=0,jl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Ql(e),t.set(e,i)),i}},Ql=class{constructor(e){this.id=x_++,this.code=e,this.usedTimes=0}};w_=0;ec=class extends as{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=D0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},tc=class extends as{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},R_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C_=`uniform sampler2D shadow_pass;
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
}`;nc=class extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},vt=class extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},D_={type:"move"},Dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),g=.02,x=.005;c.inputState.pinching&&f>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(D_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new vt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},ic=class extends Li{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,g=null,x=null,v=t.getContextAttributes(),m=null,d=null,M=[],y=[],A=new Ye,P=null,C=new dn;C.layers.enable(1),C.viewport=new Xt;let R=new dn;R.layers.enable(2),R.viewport=new Xt;let G=[C,R],b=new nc;b.layers.enable(1),b.layers.enable(2);let T=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=M[q];return K===void 0&&(K=new Dr,M[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=M[q];return K===void 0&&(K=new Dr,M[q]=K),K.getGripSpace()},this.getHand=function(q){let K=M[q];return K===void 0&&(K=new Dr,M[q]=K),K.getHandSpace()};function X(q){let K=y.indexOf(q.inputSource);if(K===-1)return;let de=M[K];de!==void 0&&(de.update(q.inputSource,q.frame,c||o),de.dispatchEvent({type:q.type,data:q.inputSource}))}function re(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",re),s.removeEventListener("inputsourceschange",I);for(let q=0;q<M.length;q++){let K=y[q];K!==null&&(y[q]=null,M[q].disconnect(K))}T=null,V=null,e.setRenderTarget(m),g=null,f=null,u=null,s=null,d=null,pe.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",re),s.addEventListener("inputsourceschange",I),v.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let K={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),d=new ui(g.framebufferWidth,g.framebufferHeight,{format:Fn,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let K=null,de=null,Se=null;v.depth&&(Se=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=v.stencil?nr:ss,de=v.stencil?is:Ei);let Me={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Me),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new ui(f.textureWidth,f.textureHeight,{format:Fn,type:Ci,depthTexture:new Jo(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let Oe=e.properties.get(d);Oe.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),pe.setContext(s),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function I(q){for(let K=0;K<q.removed.length;K++){let de=q.removed[K],Se=y.indexOf(de);Se>=0&&(y[Se]=null,M[Se].disconnect(de))}for(let K=0;K<q.added.length;K++){let de=q.added[K],Se=y.indexOf(de);if(Se===-1){for(let Oe=0;Oe<M.length;Oe++)if(Oe>=y.length){y.push(de),Se=Oe;break}else if(y[Oe]===null){y[Oe]=de,Se=Oe;break}if(Se===-1)break}let Me=M[Se];Me&&Me.connect(de)}}let z=new U,Y=new U;function J(q,K,de){z.setFromMatrixPosition(K.matrixWorld),Y.setFromMatrixPosition(de.matrixWorld);let Se=z.distanceTo(Y),Me=K.projectionMatrix.elements,Oe=de.projectionMatrix.elements,Be=Me[14]/(Me[10]-1),Le=Me[14]/(Me[10]+1),tt=(Me[9]+1)/Me[5],O=(Me[9]-1)/Me[5],an=(Me[8]-1)/Me[0],Te=(Oe[8]+1)/Oe[0],Ne=Be*an,ve=Be*Te,Mt=Se/(-an+Te),We=Mt*-an;K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(We),q.translateZ(Mt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let E=Be+Mt,_=Le+Mt,B=Ne-We,te=ve+(Se-We),Q=tt*Le/_*E,ne=O*Le/_*E;q.projectionMatrix.makePerspective(B,te,Q,ne,E,_),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function Z(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;b.near=R.near=C.near=q.near,b.far=R.far=C.far=q.far,(T!==b.near||V!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),T=b.near,V=b.far);let K=q.parent,de=b.cameras;Z(b,K);for(let Se=0;Se<de.length;Se++)Z(de[Se],K);de.length===2?J(b,C,R):b.projectionMatrix.copy(C.projectionMatrix),$(q,b,K)};function $(q,K,de){de===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(de.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Gl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=q)};let ee=null;function ie(q,K){if(h=K.getViewerPose(c||o),x=K,h!==null){let de=h.views;g!==null&&(e.setRenderTargetFramebuffer(d,g.framebuffer),e.setRenderTarget(d));let Se=!1;de.length!==b.cameras.length&&(b.cameras.length=0,Se=!0);for(let Me=0;Me<de.length;Me++){let Oe=de[Me],Be=null;if(g!==null)Be=g.getViewport(Oe);else{let tt=u.getViewSubImage(f,Oe);Be=tt.viewport,Me===0&&(e.setRenderTargetTextures(d,tt.colorTexture,f.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(d))}let Le=G[Me];Le===void 0&&(Le=new dn,Le.layers.enable(Me),Le.viewport=new Xt,G[Me]=Le),Le.matrix.fromArray(Oe.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(Oe.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Be.x,Be.y,Be.width,Be.height),Me===0&&(b.matrix.copy(Le.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Se===!0&&b.cameras.push(Le)}}for(let de=0;de<M.length;de++){let Se=y[de],Me=M[de];Se!==null&&Me!==void 0&&Me.update(Se,K,c||o)}ee&&ee(q,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),x=null}let pe=new Dd;pe.setAnimationLoop(ie),this.setAnimationLoop=function(q){ee=q},this.dispose=function(){}}};Br=class{constructor(e={}){let{canvas:t=q0(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;let g=new Uint32Array(4),x=new Int32Array(4),v=null,m=null,d=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Lt,this._useLegacyLights=!1,this.toneMapping=Ri,this.toneMappingExposure=1;let y=this,A=!1,P=0,C=0,R=null,G=-1,b=null,T=new Xt,V=new Xt,X=null,re=new Ve(0),I=0,z=t.width,Y=t.height,J=1,Z=null,$=null,ee=new Xt(0,0,z,Y),ie=new Xt(0,0,z,Y),pe=!1,q=new Fr,K=!1,de=!1,Se=null,Me=new Dt,Oe=new Ye,Be=new U,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function tt(){return R===null?J:1}let O=i;function an(S,D){for(let H=0;H<S.length;H++){let W=S[H],F=t.getContext(W,D);if(F!==null)return F}return null}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yc}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",le,!1),O===null){let D=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&D.shift(),O=an(D,S),O===null)throw an(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Te,Ne,ve,Mt,We,E,_,B,te,Q,ne,_e,he,me,Ce,qe,j,at,je,De,Ee,ge,He,st;function Et(){Te=new tv(O),Ne=new Zy(O,Te,e),Te.init(Ne),ge=new k_(O,Te,Ne),ve=new L_(O,Te,Ne),Mt=new sv(O),We=new v_,E=new I_(O,Te,ve,We,Ne,ge,Mt),_=new Ky(y),B=new ev(y),te=new dg(O,Ne),He=new Yy(O,Te,te,Ne),Q=new nv(O,te,Mt,He),ne=new lv(O,Q,te,Mt),je=new av(O,Ne,E),qe=new Jy(We),_e=new y_(y,_,B,Te,Ne,He,qe),he=new U_(y,We),me=new b_,Ce=new A_(Te,Ne),at=new Xy(y,_,B,ve,ne,f,l),j=new P_(y,ne,Ne),st=new N_(O,Mt,Ne,ve),De=new $y(O,Te,Mt,Ne),Ee=new iv(O,Te,Mt,Ne),Mt.programs=_e.programs,y.capabilities=Ne,y.extensions=Te,y.properties=We,y.renderLists=me,y.shadowMap=j,y.state=ve,y.info=Mt}Et();let $e=new ic(y,O);this.xr=$e,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let S=Te.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Te.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(S){S!==void 0&&(J=S,this.setSize(z,Y,!1))},this.getSize=function(S){return S.set(z,Y)},this.setSize=function(S,D,H=!0){if($e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=S,Y=D,t.width=Math.floor(S*J),t.height=Math.floor(D*J),H===!0&&(t.style.width=S+"px",t.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(z*J,Y*J).floor()},this.setDrawingBufferSize=function(S,D,H){z=S,Y=D,J=H,t.width=Math.floor(S*H),t.height=Math.floor(D*H),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(ee)},this.setViewport=function(S,D,H,W){S.isVector4?ee.set(S.x,S.y,S.z,S.w):ee.set(S,D,H,W),ve.viewport(T.copy(ee).multiplyScalar(J).floor())},this.getScissor=function(S){return S.copy(ie)},this.setScissor=function(S,D,H,W){S.isVector4?ie.set(S.x,S.y,S.z,S.w):ie.set(S,D,H,W),ve.scissor(V.copy(ie).multiplyScalar(J).floor())},this.getScissorTest=function(){return pe},this.setScissorTest=function(S){ve.setScissorTest(pe=S)},this.setOpaqueSort=function(S){Z=S},this.setTransparentSort=function(S){$=S},this.getClearColor=function(S){return S.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(S=!0,D=!0,H=!0){let W=0;if(S){let F=!1;if(R!==null){let fe=R.texture.format;F=fe===Td||fe===Ed||fe===wd}if(F){let fe=R.texture.type,be=fe===Ci||fe===Ei||fe===_c||fe===is||fe===Md||fe===Sd,Re=at.getClearColor(),ke=at.getClearAlpha(),Xe=Re.r,ze=Re.g,Fe=Re.b;be?(g[0]=Xe,g[1]=ze,g[2]=Fe,g[3]=ke,O.clearBufferuiv(O.COLOR,0,g)):(x[0]=Xe,x[1]=ze,x[2]=Fe,x[3]=ke,O.clearBufferiv(O.COLOR,0,x))}else W|=O.COLOR_BUFFER_BIT}D&&(W|=O.DEPTH_BUFFER_BIT),H&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",le,!1),me.dispose(),Ce.dispose(),We.dispose(),_.dispose(),B.dispose(),ne.dispose(),He.dispose(),st.dispose(),_e.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",ln),$e.removeEventListener("sessionend",pt),Se&&(Se.dispose(),Se=null),cn.stop()};function oe(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let S=Mt.autoReset,D=j.enabled,H=j.autoUpdate,W=j.needsUpdate,F=j.type;Et(),Mt.autoReset=S,j.enabled=D,j.autoUpdate=H,j.needsUpdate=W,j.type=F}function le(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ce(S){let D=S.target;D.removeEventListener("dispose",ce),Ie(D)}function Ie(S){Ae(S),We.remove(S)}function Ae(S){let D=We.get(S).programs;D!==void 0&&(D.forEach(function(H){_e.releaseProgram(H)}),S.isShaderMaterial&&_e.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,H,W,F,fe){D===null&&(D=Le);let be=F.isMesh&&F.matrixWorld.determinant()<0,Re=Bm(S,D,H,W,F);ve.setMaterial(W,be);let ke=H.index,Xe=1;if(W.wireframe===!0){if(ke=Q.getWireframeAttribute(H),ke===void 0)return;Xe=2}let ze=H.drawRange,Fe=H.attributes.position,Pt=ze.start*Xe,_n=(ze.start+ze.count)*Xe;fe!==null&&(Pt=Math.max(Pt,fe.start*Xe),_n=Math.min(_n,(fe.start+fe.count)*Xe)),ke!==null?(Pt=Math.max(Pt,0),_n=Math.min(_n,ke.count)):Fe!=null&&(Pt=Math.max(Pt,0),_n=Math.min(_n,Fe.count));let Wt=_n-Pt;if(Wt<0||Wt===1/0)return;He.setup(F,W,Re,H,ke);let ti,St=De;if(ke!==null&&(ti=te.get(ke),St=Ee,St.setIndex(ti)),F.isMesh)W.wireframe===!0?(ve.setLineWidth(W.wireframeLinewidth*tt()),St.setMode(O.LINES)):St.setMode(O.TRIANGLES);else if(F.isLine){let Ze=W.linewidth;Ze===void 0&&(Ze=1),ve.setLineWidth(Ze*tt()),F.isLineSegments?St.setMode(O.LINES):F.isLineLoop?St.setMode(O.LINE_LOOP):St.setMode(O.LINE_STRIP)}else F.isPoints?St.setMode(O.POINTS):F.isSprite&&St.setMode(O.TRIANGLES);if(F.isBatchedMesh)St.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)St.renderInstances(Pt,Wt,F.count);else if(H.isInstancedBufferGeometry){let Ze=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ja=Math.min(H.instanceCount,Ze);St.renderInstances(Pt,Wt,ja)}else St.render(Pt,Wt)};function dt(S,D,H){S.transparent===!0&&S.side===zn&&S.forceSinglePass===!1?(S.side=vn,S.needsUpdate=!0,ao(S,D,H),S.side=Pi,S.needsUpdate=!0,ao(S,D,H),S.side=zn):ao(S,D,H)}this.compile=function(S,D,H=null){H===null&&(H=S),m=Ce.get(H),m.init(),M.push(m),H.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),S!==H&&S.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights(y._useLegacyLights);let W=new Set;return S.traverse(function(F){let fe=F.material;if(fe)if(Array.isArray(fe))for(let be=0;be<fe.length;be++){let Re=fe[be];dt(Re,H,F),W.add(Re)}else dt(fe,H,F),W.add(fe)}),M.pop(),m=null,W},this.compileAsync=function(S,D,H=null){let W=this.compile(S,D,H);return new Promise(F=>{function fe(){if(W.forEach(function(be){We.get(be).currentProgram.isReady()&&W.delete(be)}),W.size===0){F(S);return}setTimeout(fe,10)}Te.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let ft=null;function Vt(S){ft&&ft(S)}function ln(){cn.stop()}function pt(){cn.start()}let cn=new Dd;cn.setAnimationLoop(Vt),typeof self<"u"&&cn.setContext(self),this.setAnimationLoop=function(S){ft=S,$e.setAnimationLoop(S),S===null?cn.stop():cn.start()},$e.addEventListener("sessionstart",ln),$e.addEventListener("sessionend",pt),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&($e.cameraAutoUpdate===!0&&$e.updateCamera(D),D=$e.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,D,R),m=Ce.get(S,M.length),m.init(),M.push(m),Me.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),q.setFromProjectionMatrix(Me),de=this.localClippingEnabled,K=qe.init(this.clippingPlanes,de),v=me.get(S,d.length),v.init(),d.push(v),$n(S,D,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(Z,$),this.info.render.frame++,K===!0&&qe.beginShadows();let H=m.state.shadowsArray;if(j.render(H,S,D),K===!0&&qe.endShadows(),this.info.autoReset===!0&&this.info.reset(),at.render(v,S),m.setupLights(y._useLegacyLights),D.isArrayCamera){let W=D.cameras;for(let F=0,fe=W.length;F<fe;F++){let be=W[F];Hh(v,S,be,be.viewport)}}else Hh(v,S,D);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),S.isScene===!0&&S.onAfterRender(y,S,D),He.resetDefaultState(),G=-1,b=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function $n(S,D,H,W){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||q.intersectsSprite(S)){W&&Be.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Me);let be=ne.update(S),Re=S.material;Re.visible&&v.push(S,be,Re,H,Be.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||q.intersectsObject(S))){let be=ne.update(S),Re=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Be.copy(S.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Be.copy(be.boundingSphere.center)),Be.applyMatrix4(S.matrixWorld).applyMatrix4(Me)),Array.isArray(Re)){let ke=be.groups;for(let Xe=0,ze=ke.length;Xe<ze;Xe++){let Fe=ke[Xe],Pt=Re[Fe.materialIndex];Pt&&Pt.visible&&v.push(S,be,Pt,H,Be.z,Fe)}}else Re.visible&&v.push(S,be,Re,H,Be.z,null)}}let fe=S.children;for(let be=0,Re=fe.length;be<Re;be++)$n(fe[be],D,H,W)}function Hh(S,D,H,W){let F=S.opaque,fe=S.transmissive,be=S.transparent;m.setupLightsView(H),K===!0&&qe.setGlobalState(y.clippingPlanes,H),fe.length>0&&Fm(F,fe,D,H),W&&ve.viewport(T.copy(W)),F.length>0&&oo(F,D,H),fe.length>0&&oo(fe,D,H),be.length>0&&oo(be,D,H),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Fm(S,D,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;let fe=Ne.isWebGL2;Se===null&&(Se=new ui(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?Nr:Ci,minFilter:Ur,samples:fe?4:0})),y.getDrawingBufferSize(Oe),fe?Se.setSize(Oe.x,Oe.y):Se.setSize(Vl(Oe.x),Vl(Oe.y));let be=y.getRenderTarget();y.setRenderTarget(Se),y.getClearColor(re),I=y.getClearAlpha(),I<1&&y.setClearColor(16777215,.5),y.clear();let Re=y.toneMapping;y.toneMapping=Ri,oo(S,H,W),E.updateMultisampleRenderTarget(Se),E.updateRenderTargetMipmap(Se);let ke=!1;for(let Xe=0,ze=D.length;Xe<ze;Xe++){let Fe=D[Xe],Pt=Fe.object,_n=Fe.geometry,Wt=Fe.material,ti=Fe.group;if(Wt.side===zn&&Pt.layers.test(W.layers)){let St=Wt.side;Wt.side=vn,Wt.needsUpdate=!0,Gh(Pt,H,W,_n,Wt,ti),Wt.side=St,Wt.needsUpdate=!0,ke=!0}}ke===!0&&(E.updateMultisampleRenderTarget(Se),E.updateRenderTargetMipmap(Se)),y.setRenderTarget(be),y.setClearColor(re,I),y.toneMapping=Re}function oo(S,D,H){let W=D.isScene===!0?D.overrideMaterial:null;for(let F=0,fe=S.length;F<fe;F++){let be=S[F],Re=be.object,ke=be.geometry,Xe=W===null?be.material:W,ze=be.group;Re.layers.test(H.layers)&&Gh(Re,D,H,ke,Xe,ze)}}function Gh(S,D,H,W,F,fe){S.onBeforeRender(y,D,H,W,F,fe),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(y,D,H,W,S,fe),F.transparent===!0&&F.side===zn&&F.forceSinglePass===!1?(F.side=vn,F.needsUpdate=!0,y.renderBufferDirect(H,D,W,F,S,fe),F.side=Pi,F.needsUpdate=!0,y.renderBufferDirect(H,D,W,F,S,fe),F.side=zn):y.renderBufferDirect(H,D,W,F,S,fe),S.onAfterRender(y,D,H,W,F,fe)}function ao(S,D,H){D.isScene!==!0&&(D=Le);let W=We.get(S),F=m.state.lights,fe=m.state.shadowsArray,be=F.state.version,Re=_e.getParameters(S,F.state,fe,D,H),ke=_e.getProgramCacheKey(Re),Xe=W.programs;W.environment=S.isMeshStandardMaterial?D.environment:null,W.fog=D.fog,W.envMap=(S.isMeshStandardMaterial?B:_).get(S.envMap||W.environment),Xe===void 0&&(S.addEventListener("dispose",ce),Xe=new Map,W.programs=Xe);let ze=Xe.get(ke);if(ze!==void 0){if(W.currentProgram===ze&&W.lightsStateVersion===be)return Wh(S,Re),ze}else Re.uniforms=_e.getUniforms(S),S.onBuild(H,Re,y),S.onBeforeCompile(Re,y),ze=_e.acquireProgram(Re,ke),Xe.set(ke,ze),W.uniforms=Re.uniforms;let Fe=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Fe.clippingPlanes=qe.uniform),Wh(S,Re),W.needsLights=Gm(S),W.lightsStateVersion=be,W.needsLights&&(Fe.ambientLightColor.value=F.state.ambient,Fe.lightProbe.value=F.state.probe,Fe.directionalLights.value=F.state.directional,Fe.directionalLightShadows.value=F.state.directionalShadow,Fe.spotLights.value=F.state.spot,Fe.spotLightShadows.value=F.state.spotShadow,Fe.rectAreaLights.value=F.state.rectArea,Fe.ltc_1.value=F.state.rectAreaLTC1,Fe.ltc_2.value=F.state.rectAreaLTC2,Fe.pointLights.value=F.state.point,Fe.pointLightShadows.value=F.state.pointShadow,Fe.hemisphereLights.value=F.state.hemi,Fe.directionalShadowMap.value=F.state.directionalShadowMap,Fe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Fe.spotShadowMap.value=F.state.spotShadowMap,Fe.spotLightMatrix.value=F.state.spotLightMatrix,Fe.spotLightMap.value=F.state.spotLightMap,Fe.pointShadowMap.value=F.state.pointShadowMap,Fe.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=ze,W.uniformsList=null,ze}function Vh(S){if(S.uniformsList===null){let D=S.currentProgram.getUniforms();S.uniformsList=Qs.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function Wh(S,D){let H=We.get(S);H.outputColorSpace=D.outputColorSpace,H.batching=D.batching,H.instancing=D.instancing,H.instancingColor=D.instancingColor,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphColors=D.morphColors,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents,H.toneMapping=D.toneMapping}function Bm(S,D,H,W,F){D.isScene!==!0&&(D=Le),E.resetTextureUnits();let fe=D.fog,be=W.isMeshStandardMaterial?D.environment:null,Re=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:hi,ke=(W.isMeshStandardMaterial?B:_).get(W.envMap||be),Xe=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ze=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Fe=!!H.morphAttributes.position,Pt=!!H.morphAttributes.normal,_n=!!H.morphAttributes.color,Wt=Ri;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Wt=y.toneMapping);let ti=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,St=ti!==void 0?ti.length:0,Ze=We.get(W),ja=m.state.lights;if(K===!0&&(de===!0||S!==b)){let Tn=S===b&&W.id===G;qe.setState(W,S,Tn)}let Tt=!1;W.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==ja.state.version||Ze.outputColorSpace!==Re||F.isBatchedMesh&&Ze.batching===!1||!F.isBatchedMesh&&Ze.batching===!0||F.isInstancedMesh&&Ze.instancing===!1||!F.isInstancedMesh&&Ze.instancing===!0||F.isSkinnedMesh&&Ze.skinning===!1||!F.isSkinnedMesh&&Ze.skinning===!0||F.isInstancedMesh&&Ze.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ze.instancingColor===!1&&F.instanceColor!==null||Ze.envMap!==ke||W.fog===!0&&Ze.fog!==fe||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==qe.numPlanes||Ze.numIntersection!==qe.numIntersection)||Ze.vertexAlphas!==Xe||Ze.vertexTangents!==ze||Ze.morphTargets!==Fe||Ze.morphNormals!==Pt||Ze.morphColors!==_n||Ze.toneMapping!==Wt||Ne.isWebGL2===!0&&Ze.morphTargetsCount!==St)&&(Tt=!0):(Tt=!0,Ze.__version=W.version);let $i=Ze.currentProgram;Tt===!0&&($i=ao(W,D,F));let qh=!1,Ar=!1,Qa=!1,jt=$i.getUniforms(),Zi=Ze.uniforms;if(ve.useProgram($i.program)&&(qh=!0,Ar=!0,Qa=!0),W.id!==G&&(G=W.id,Ar=!0),qh||b!==S){jt.setValue(O,"projectionMatrix",S.projectionMatrix),jt.setValue(O,"viewMatrix",S.matrixWorldInverse);let Tn=jt.map.cameraPosition;Tn!==void 0&&Tn.setValue(O,Be.setFromMatrixPosition(S.matrixWorld)),Ne.logarithmicDepthBuffer&&jt.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&jt.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,Ar=!0,Qa=!0)}if(F.isSkinnedMesh){jt.setOptional(O,F,"bindMatrix"),jt.setOptional(O,F,"bindMatrixInverse");let Tn=F.skeleton;Tn&&(Ne.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),jt.setValue(O,"boneTexture",Tn.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(jt.setOptional(O,F,"batchingTexture"),jt.setValue(O,"batchingTexture",F._matricesTexture,E));let el=H.morphAttributes;if((el.position!==void 0||el.normal!==void 0||el.color!==void 0&&Ne.isWebGL2===!0)&&je.update(F,H,$i),(Ar||Ze.receiveShadow!==F.receiveShadow)&&(Ze.receiveShadow=F.receiveShadow,jt.setValue(O,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Zi.envMap.value=ke,Zi.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),Ar&&(jt.setValue(O,"toneMappingExposure",y.toneMappingExposure),Ze.needsLights&&Hm(Zi,Qa),fe&&W.fog===!0&&he.refreshFogUniforms(Zi,fe),he.refreshMaterialUniforms(Zi,W,J,Y,Se),Qs.upload(O,Vh(Ze),Zi,E)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Qs.upload(O,Vh(Ze),Zi,E),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&jt.setValue(O,"center",F.center),jt.setValue(O,"modelViewMatrix",F.modelViewMatrix),jt.setValue(O,"normalMatrix",F.normalMatrix),jt.setValue(O,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Tn=W.uniformsGroups;for(let tl=0,Vm=Tn.length;tl<Vm;tl++)if(Ne.isWebGL2){let Xh=Tn[tl];st.update(Xh,$i),st.bind(Xh,$i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $i}function Hm(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function Gm(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,D,H){We.get(S.texture).__webglTexture=D,We.get(S.depthTexture).__webglTexture=H;let W=We.get(S);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,D){let H=We.get(S);H.__webglFramebuffer=D,H.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,H=0){R=S,P=D,C=H;let W=!0,F=null,fe=!1,be=!1;if(S){let ke=We.get(S);ke.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(O.FRAMEBUFFER,null),W=!1):ke.__webglFramebuffer===void 0?E.setupRenderTarget(S):ke.__hasExternalTextures&&E.rebindTextures(S,We.get(S.texture).__webglTexture,We.get(S.depthTexture).__webglTexture);let Xe=S.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(be=!0);let ze=We.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ze[D])?F=ze[D][H]:F=ze[D],fe=!0):Ne.isWebGL2&&S.samples>0&&E.useMultisampledRTT(S)===!1?F=We.get(S).__webglMultisampledFramebuffer:Array.isArray(ze)?F=ze[H]:F=ze,T.copy(S.viewport),V.copy(S.scissor),X=S.scissorTest}else T.copy(ee).multiplyScalar(J).floor(),V.copy(ie).multiplyScalar(J).floor(),X=pe;if(ve.bindFramebuffer(O.FRAMEBUFFER,F)&&Ne.drawBuffers&&W&&ve.drawBuffers(S,F),ve.viewport(T),ve.scissor(V),ve.setScissorTest(X),fe){let ke=We.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,ke.__webglTexture,H)}else if(be){let ke=We.get(S.texture),Xe=D||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,ke.__webglTexture,H||0,Xe)}G=-1},this.readRenderTargetPixels=function(S,D,H,W,F,fe,be){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=We.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&be!==void 0&&(Re=Re[be]),Re){ve.bindFramebuffer(O.FRAMEBUFFER,Re);try{let ke=S.texture,Xe=ke.format,ze=ke.type;if(Xe!==Fn&&ge.convert(Xe)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Fe=ze===Nr&&(Te.has("EXT_color_buffer_half_float")||Ne.isWebGL2&&Te.has("EXT_color_buffer_float"));if(ze!==Ci&&ge.convert(ze)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===Ti&&(Ne.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-W&&H>=0&&H<=S.height-F&&O.readPixels(D,H,W,F,ge.convert(Xe),ge.convert(ze),fe)}finally{let ke=R!==null?We.get(R).__webglFramebuffer:null;ve.bindFramebuffer(O.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(S,D,H=0){let W=Math.pow(2,-H),F=Math.floor(D.image.width*W),fe=Math.floor(D.image.height*W);E.setTexture2D(D,0),O.copyTexSubImage2D(O.TEXTURE_2D,H,0,0,S.x,S.y,F,fe),ve.unbindTexture()},this.copyTextureToTexture=function(S,D,H,W=0){let F=D.image.width,fe=D.image.height,be=ge.convert(H.format),Re=ge.convert(H.type);E.setTexture2D(H,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment),D.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,W,S.x,S.y,F,fe,be,Re,D.image.data):D.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,W,S.x,S.y,D.mipmaps[0].width,D.mipmaps[0].height,be,D.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,W,S.x,S.y,be,Re,D.image),W===0&&H.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(S,D,H,W,F=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let fe=S.max.x-S.min.x+1,be=S.max.y-S.min.y+1,Re=S.max.z-S.min.z+1,ke=ge.convert(W.format),Xe=ge.convert(W.type),ze;if(W.isData3DTexture)E.setTexture3D(W,0),ze=O.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)E.setTexture2DArray(W,0),ze=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);let Fe=O.getParameter(O.UNPACK_ROW_LENGTH),Pt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),_n=O.getParameter(O.UNPACK_SKIP_PIXELS),Wt=O.getParameter(O.UNPACK_SKIP_ROWS),ti=O.getParameter(O.UNPACK_SKIP_IMAGES),St=H.isCompressedTexture?H.mipmaps[F]:H.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,St.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,St.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,S.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,S.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,S.min.z),H.isDataTexture||H.isData3DTexture?O.texSubImage3D(ze,F,D.x,D.y,D.z,fe,be,Re,ke,Xe,St.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(ze,F,D.x,D.y,D.z,fe,be,Re,ke,St.data)):O.texSubImage3D(ze,F,D.x,D.y,D.z,fe,be,Re,ke,Xe,St),O.pixelStorei(O.UNPACK_ROW_LENGTH,Fe),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Pt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,_n),O.pixelStorei(O.UNPACK_SKIP_ROWS,Wt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ti),F===0&&W.generateMipmaps&&O.generateMipmap(ze),ve.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),ve.unbindTexture()},this.resetState=function(){P=0,C=0,R=null,ve.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===bc?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===ua?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Lt?rs:Rd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===rs?Lt:hi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},sc=class extends Br{};sc.prototype.isWebGL1Renderer=!0;Ko=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},jo=class extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Qo=class extends Pn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ea=class n extends mn{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new U,h=new Ye;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let g=i+u/t*s;c.x=e*Math.cos(g),c.y=e*Math.sin(g),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new _t(o,3)),this.setAttribute("normal",new _t(a,3)),this.setAttribute("uv",new _t(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Hr=class n extends mn{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],g=[],x=0,v=[],m=i/2,d=0;M(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new _t(u,3)),this.setAttribute("normal",new _t(f,3)),this.setAttribute("uv",new _t(g,2));function M(){let A=new U,P=new U,C=0,R=(t-e)/i;for(let G=0;G<=r;G++){let b=[],T=G/r,V=T*(t-e)+e;for(let X=0;X<=s;X++){let re=X/s,I=re*l+a,z=Math.sin(I),Y=Math.cos(I);P.x=V*z,P.y=-T*i+m,P.z=V*Y,u.push(P.x,P.y,P.z),A.set(z,R,Y).normalize(),f.push(A.x,A.y,A.z),g.push(re,1-T),b.push(x++)}v.push(b)}for(let G=0;G<s;G++)for(let b=0;b<r;b++){let T=v[b][G],V=v[b+1][G],X=v[b+1][G+1],re=v[b][G+1];h.push(T,V,re),h.push(V,X,re),C+=6}c.addGroup(d,C,0),d+=C}function y(A){let P=x,C=new Ye,R=new U,G=0,b=A===!0?e:t,T=A===!0?1:-1;for(let X=1;X<=s;X++)u.push(0,m*T,0),f.push(0,T,0),g.push(.5,.5),x++;let V=x;for(let X=0;X<=s;X++){let I=X/s*l+a,z=Math.cos(I),Y=Math.sin(I);R.x=b*Y,R.y=m*T,R.z=b*z,u.push(R.x,R.y,R.z),f.push(0,T,0),C.x=z*.5+.5,C.y=Y*.5*T+.5,g.push(C.x,C.y),x++}for(let X=0;X<s;X++){let re=P+X,I=V+X;A===!0?h.push(I,I+1,re):h.push(I+1,I,re),G+=3}c.addGroup(d,G,A===!0?1:2),d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ta=class n extends Hr{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Gr=class n extends mn{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new _t(r,3)),this.setAttribute("normal",new _t(r.slice(),3)),this.setAttribute("uv",new _t(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let y=new U,A=new U,P=new U;for(let C=0;C<t.length;C+=3)g(t[C+0],y),g(t[C+1],A),g(t[C+2],P),l(y,A,P,M)}function l(M,y,A,P){let C=P+1,R=[];for(let G=0;G<=C;G++){R[G]=[];let b=M.clone().lerp(A,G/C),T=y.clone().lerp(A,G/C),V=C-G;for(let X=0;X<=V;X++)X===0&&G===C?R[G][X]=b:R[G][X]=b.clone().lerp(T,X/V)}for(let G=0;G<C;G++)for(let b=0;b<2*(C-G)-1;b++){let T=Math.floor(b/2);b%2===0?(f(R[G][T+1]),f(R[G+1][T]),f(R[G][T])):(f(R[G][T+1]),f(R[G+1][T+1]),f(R[G+1][T]))}}function c(M){let y=new U;for(let A=0;A<r.length;A+=3)y.x=r[A+0],y.y=r[A+1],y.z=r[A+2],y.normalize().multiplyScalar(M),r[A+0]=y.x,r[A+1]=y.y,r[A+2]=y.z}function h(){let M=new U;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];let A=m(M)/2/Math.PI+.5,P=d(M)/Math.PI+.5;o.push(A,1-P)}x(),u()}function u(){for(let M=0;M<o.length;M+=6){let y=o[M+0],A=o[M+2],P=o[M+4],C=Math.max(y,A,P),R=Math.min(y,A,P);C>.9&&R<.1&&(y<.2&&(o[M+0]+=1),A<.2&&(o[M+2]+=1),P<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function g(M,y){let A=M*3;y.x=e[A+0],y.y=e[A+1],y.z=e[A+2]}function x(){let M=new U,y=new U,A=new U,P=new U,C=new Ye,R=new Ye,G=new Ye;for(let b=0,T=0;b<r.length;b+=9,T+=6){M.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),A.set(r[b+6],r[b+7],r[b+8]),C.set(o[T+0],o[T+1]),R.set(o[T+2],o[T+3]),G.set(o[T+4],o[T+5]),P.copy(M).add(y).add(A).divideScalar(3);let V=m(P);v(C,T+0,M,V),v(R,T+2,y,V),v(G,T+4,A,V)}}function v(M,y,A,P){P<0&&M.x===1&&(o[y]=M.x-1),A.x===0&&A.z===0&&(o[y]=P/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},na=class n extends Gr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ia=class n extends Gr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},sa=class n extends Gr{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},rr=class n extends mn{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/s,g=new U,x=new Ye;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){let d=r+m/i*o;g.x=u*Math.cos(d),g.y=u*Math.sin(d),l.push(g.x,g.y,g.z),c.push(0,0,1),x.x=(g.x/t+1)/2,x.y=(g.y/t+1)/2,h.push(x.x,x.y)}u+=f}for(let v=0;v<s;v++){let m=v*(i+1);for(let d=0;d<i;d++){let M=d+m,y=M,A=M+i+1,P=M+i+2,C=M+1;a.push(y,A,C),a.push(A,P,C)}}this.setIndex(a),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},or=class extends as{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cd,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};ar=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},rc=class extends ar{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eu,endingEnd:Eu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Tu:r=e,a=2*t-i;break;case Au:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Tu:o=e,l=2*i-t;break;case Au:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,g=this._weightNext,x=(i-t)/(s-t),v=x*x,m=v*x,d=-f*m+2*f*v-f*x,M=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*x+1,y=(-1-g)*m+(1.5+g)*v+.5*x,A=g*m-g*v;for(let P=0;P!==a;++P)r[P]=d*o[h+P]+M*o[c+P]+y*o[l+P]+A*o[u+P];return r}},oc=class extends ar{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},ac=class extends ar{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Bn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Lo(t,this.TimeBufferType),this.values=Lo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Lo(e.times,Array),values:Lo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ko:t=this.InterpolantFactoryMethodDiscrete;break;case Do:t=this.InterpolantFactoryMethodLinear;break;case cl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ko;case this.InterpolantFactoryMethodLinear:return Do;case this.InterpolantFactoryMethodSmooth:return cl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&z_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===cl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,f=u-i,g=u+i;for(let x=0;x!==i;++x){let v=t[u+x];if(v!==t[f+x]||v!==t[g+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let g=0;g!==i;++g)t[f+g]=t[u+g]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Do;ls=class extends Bn{};ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=ko;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;lc=class extends Bn{};lc.prototype.ValueTypeName="color";cc=class extends Bn{};cc.prototype.ValueTypeName="number";hc=class extends ar{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Jn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Vr=class extends Bn{InterpolantFactoryMethodLinear(e){return new hc(this.times,this.values,this.getValueSize(),e)}};Vr.prototype.ValueTypeName="quaternion";Vr.prototype.DefaultInterpolation=Do;Vr.prototype.InterpolantFactoryMethodSmooth=void 0;cs=class extends Bn{};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=ko;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;uc=class extends Bn{};uc.prototype.ValueTypeName="vector";dc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let g=c[u],x=c[u+1];if(g.global&&(g.lastIndex=0),g.test(h))return x}return null}}},O_=new dc,fc=class{constructor(e){this.manager=e!==void 0?e:O_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};fc.DEFAULT_MATERIAL_NAME="__DEFAULT";ra=class extends fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},oa=class extends ra{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Dl=new Dt,md=new U,gd=new U,pc=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fr,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;md.setFromMatrixPosition(e.matrixWorld),t.position.copy(md),gd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gd),t.updateMatrixWorld(),Dl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},mc=class extends pc{constructor(){super(new $o(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},aa=class extends ra{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new mc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},la=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=xd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};Sc="\\[\\]\\.:\\/",F_=new RegExp("["+Sc+"]","g"),wc="[^"+Sc+"]",B_="[^"+Sc.replace("\\.","")+"]",H_=/((?:WC+[\/:])*)/.source.replace("WC",wc),G_=/(WCOD+)?/.source.replace("WCOD",B_),V_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wc),W_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wc),q_=new RegExp("^"+H_+G_+V_+W_+"$"),X_=["material","materials","bones","map"],gc=class{constructor(e,t,i){let s=i||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},yt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(F_,"")}static parseTrackName(e){let t=q_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);X_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=gc;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];fM=new Float32Array(1),ca=class{constructor(e,t,i=0,s=1/0){this.ray=new Vo(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Or,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return xc(e,this,i,t),i.sort(yd),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)xc(e[s],this,i,t);return i.sort(yd),i}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yc)});function qr(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Y_(n,e){let t=Math.floor(n),i=Math.floor(e),s=n-t,r=e-i,o=s*s*(3-2*s),a=r*r*(3-2*r),l=pa(t,i),c=pa(t+1,i),h=pa(t,i+1),u=pa(t+1,i+1);return l+(c-l)*o+(h-l)*a+(l-c-h+u)*o*a}function cr(n,e,t=3){let i=0,s=.5,r=1,o=0;for(let a=0;a<t;a++)i+=s*Y_(n*r,e*r),o+=s,s*=.5,r*=2;return i/o}function Qe(n,e){(Ac[n]=Ac[n]||[]).push(e)}function se(n,...e){(Ac[n]||[]).forEach(t=>{try{t(...e)}catch(i){console.error(i)}})}var Yt,nn,Kn,Zt,et,Jt,Bd,Tc,pa,Ac,gt=Ue(()=>{Yt=()=>Math.random(),nn=(n,e)=>n+Math.floor(Math.random()*(e-n+1)),Kn=(n,e,t)=>n<e?e:n>t?t:n,Zt=(n,e,t,i)=>Math.max(Math.abs(n-t),Math.abs(e-i)),et=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Jt=n=>Math.floor(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),Bd=n=>n>=1e7?Math.floor(n/1e6)+"M":n>=1e5?Math.floor(n/1e3)+"K":String(n);Tc=new Uint8Array(512);{let n=qr(1849),e=[...Array(256).keys()];for(let t=255;t>0;t--){let i=Math.floor(n()*(t+1));[e[t],e[i]]=[e[i],e[t]]}for(let t=0;t<512;t++)Tc[t]=e[t&255]}pa=(n,e)=>Tc[Tc[n&255]+(e&255)&511]/255;Ac={}});var Hd,xe,In=Ue(()=>{Hd=["head","cape","neck","ammo","weapon","body","shield","legs","hands","feet","ring"],xe={coins:{name:"Coins",icon:"\u{1FA99}",value:1,stack:!0,examine:"Lovely money!"},hatchet:{name:"Hatchet",icon:"\u{1FA93}",value:16,examine:"A woodcutter's hatchet."},pickaxe:{name:"Pickaxe",icon:"\u26CF\uFE0F",value:20,examine:"Used for mining."},small_net:{name:"Small fishing net",icon:"\u{1F578}\uFE0F",value:5,examine:"Useful for catching small fish."},fishing_rod:{name:"Fishing rod",icon:"\u{1F3A3}",value:15,examine:"Useful for catching bigger fish."},bait:{name:"Fishing bait",icon:"\u{1FAB1}",value:3,stack:!0,examine:"Wriggly worms. Fish can't resist."},tinderbox:{name:"Tinderbox",icon:"\u{1F9F0}",value:1,examine:"Useful for lighting a fire."},gold_pan:{name:"Gold pan",icon:"\u{1F958}",value:10,examine:"Swirl river gravel in it to find gold flakes."},gold_flakes:{name:"Gold flakes",icon:"\u2728",value:12,stack:!0,examine:"Tiny flakes of gold. The banker's assayer buys them."},horse_brush:{name:"Horse brush",icon:"\u{1FAAE}",value:6,examine:"Ellie pays a few coins for every horse you groom."},carrot:{name:"Carrot",icon:"\u{1F955}",value:2,examine:"Horses love these.",food:{heal:1}},logs:{name:"Logs",icon:"\u{1FAB5}",value:4,examine:"Dry, dead wood. Burns well.",burn:{lvl:1,xp:40}},mesquite_logs:{name:"Mesquite logs",icon:"\u{1FAB5}",tint:"hue-rotate(-20deg) saturate(1.6)",value:15,examine:"Fragrant mesquite wood.",burn:{lvl:15,xp:60}},cottonwood_logs:{name:"Cottonwood logs",icon:"\u{1FAB5}",tint:"brightness(1.4) saturate(0.6)",value:30,examine:"Pale logs from a riverside cottonwood.",burn:{lvl:30,xp:90}},copper_ore:{name:"Copper ore",icon:"\u{1FAA8}",tint:"sepia(1) saturate(3) hue-rotate(-20deg)",value:5,examine:"This needs refining."},iron_ore:{name:"Iron ore",icon:"\u{1FAA8}",tint:"sepia(0.6) brightness(0.8)",value:17,examine:"This needs refining."},silver_ore:{name:"Silver ore",icon:"\u{1FAA8}",tint:"brightness(1.5) grayscale(1)",value:75,examine:"Shiny! This needs refining."},gold_ore:{name:"Gold ore",icon:"\u{1FAA8}",tint:"sepia(1) saturate(5) brightness(1.3)",value:150,examine:"Gold! Folks have died for less."},raw_crayfish:{name:"Raw crayfish",icon:"\u{1F990}",tint:"grayscale(0.6)",value:3,examine:"I should try cooking this.",cook:{to:"crayfish",burnt:"burnt_fish",lvl:1,xp:30,stop:34}},crayfish:{name:"Crayfish",icon:"\u{1F990}",value:5,examine:"Some nicely cooked crayfish.",food:{heal:2}},raw_sunfish:{name:"Raw sunfish",icon:"\u{1F41F}",tint:"grayscale(0.6)",value:8,examine:"I should try cooking this.",cook:{to:"sunfish",burnt:"burnt_fish",lvl:10,xp:40,stop:40}},sunfish:{name:"Sunfish",icon:"\u{1F41F}",value:12,examine:"A golden sunfish. Smells great.",food:{heal:4}},raw_trout:{name:"Raw trout",icon:"\u{1F41F}",tint:"grayscale(0.4) hue-rotate(90deg)",value:20,examine:"I should try cooking this.",cook:{to:"trout",burnt:"burnt_fish",lvl:20,xp:70,stop:50}},trout:{name:"Trout",icon:"\u{1F41F}",tint:"hue-rotate(90deg)",value:30,examine:"Some nicely cooked trout.",food:{heal:7}},raw_catfish:{name:"Raw catfish",icon:"\u{1F420}",tint:"grayscale(0.6)",value:40,examine:"Whiskers and all.",cook:{to:"catfish",burnt:"burnt_fish",lvl:30,xp:90,stop:63}},catfish:{name:"Catfish",icon:"\u{1F420}",value:60,examine:"Fried catfish. A frontier favourite.",food:{heal:10}},raw_meat:{name:"Raw meat",icon:"\u{1F969}",value:2,examine:"I need to cook this first.",cook:{to:"cooked_meat",burnt:"burnt_meat",lvl:1,xp:30,stop:33}},cooked_meat:{name:"Cooked meat",icon:"\u{1F356}",value:4,examine:"Mmm, this looks tasty.",food:{heal:3}},raw_chicken:{name:"Raw chicken",icon:"\u{1F357}",tint:"grayscale(0.7) brightness(1.2)",value:2,examine:"I need to cook this first.",cook:{to:"cooked_chicken",burnt:"burnt_chicken",lvl:1,xp:30,stop:34}},cooked_chicken:{name:"Cooked chicken",icon:"\u{1F357}",value:4,examine:"Mmm, this looks tasty.",food:{heal:3}},burnt_chicken:{name:"Burnt chicken",icon:"\u{1F357}",tint:"brightness(0.25)",value:1,examine:"Oops! It's charcoal now."},raw_beef:{name:"Raw beef",icon:"\u{1F969}",tint:"saturate(1.6)",value:2,examine:"I need to cook this first.",cook:{to:"cooked_beef",burnt:"burnt_meat",lvl:1,xp:30,stop:34}},cooked_beef:{name:"Cooked beef",icon:"\u{1F356}",tint:"saturate(1.4)",value:4,examine:"A juicy frontier steak.",food:{heal:3}},feather:{name:"Feather",icon:"\u{1FAB6}",value:2,stack:!0,examine:"Useful for fletching... one day."},cowhide:{name:"Cowhide",icon:"\u{1F404}",tint:"grayscale(1) brightness(1.2)",value:20,examine:"I should take this to a tanner."},burnt_fish:{name:"Burnt fish",icon:"\u{1F41F}",tint:"brightness(0.25)",value:1,examine:"Oops!"},burnt_meat:{name:"Burnt meat",icon:"\u{1F356}",tint:"brightness(0.25)",value:1,examine:"Oops!"},bread:{name:"Bread",icon:"\u{1F35E}",value:12,examine:"Nice crusty bread.",food:{heal:5}},beans:{name:"Tin of beans",icon:"\u{1F96B}",value:20,examine:"A cowpoke staple.",food:{heal:6}},whiskey:{name:"Whiskey",icon:"\u{1F943}",value:8,examine:"Rotgut. Puts hair on your chest.",food:{heal:2,drink:!0},boost:{attack:-2,strength:2}},sarsaparilla:{name:"Sarsaparilla",icon:"\u{1F37A}",tint:"hue-rotate(-30deg)",value:6,examine:"Fizzy root beer. A cowboy's favourite.",food:{heal:3,drink:!0}},stew:{name:"Bowl of stew",icon:"\u{1F372}",value:30,examine:"Big Sal's famous chuckwagon stew.",food:{heal:8}},bucket:{name:"Bucket",icon:"\u{1FAA3}",value:2,examine:"An empty bucket. Cows have the stuff to fill it."},bucket_milk:{name:"Bucket of milk",icon:"\u{1F95B}",value:6,examine:"Fresh milk. Drink it, or bake with it.",food:{heal:2,drink:!0,leaves:"bucket"}},flour:{name:"Pot of flour",icon:"\u{1FAD9}",value:10,examine:"Mix with milk and an egg to make cake batter."},egg:{name:"Egg",icon:"\u{1F95A}",value:4,examine:"A prairie chicken egg."},cake_batter:{name:"Cake batter",icon:"\u{1F963}",value:15,examine:"Bake this on a range to make a cake.",cook:{to:"cake",burnt:"burnt_cake",lvl:5,xp:60,stop:40,rangeOnly:!0}},cake:{name:"Cake",icon:"\u{1F382}",value:40,examine:"A whole cake. Three delicious slices.",food:{heal:4,next:"cake_23"}},cake_23:{name:"2/3 cake",icon:"\u{1F370}",value:25,examine:"Two slices left.",food:{heal:4,next:"cake_slice"}},cake_slice:{name:"Slice of cake",icon:"\u{1F370}",tint:"saturate(0.6)",value:10,examine:"The last slice.",food:{heal:4}},burnt_cake:{name:"Burnt cake",icon:"\u{1F382}",tint:"brightness(0.25)",value:1,examine:"Charcoal with icing."},tobacco_pouch:{name:"Tobacco pouch",icon:"\u{1F45D}",value:15,examine:"Half-full of cheap chewing tobacco. Sells for a few coins."},coin_pouch:{name:"Coin pouch",icon:"\u{1F4B0}",value:1,stack:!0,examine:"Lifted from a careless pocket. Open it for coins.",pouch:[3,5]},bones:{name:"Bones",icon:"\u{1F9B4}",value:1,examine:"Bones are for burying!",bury:4.5},snake_skin:{name:"Snake skin",icon:"\u{1F40D}",value:10,examine:"Scaly. The tanner might want it one day."},coyote_pelt:{name:"Coyote pelt",icon:"\u{1F43A}",value:18,examine:"A mangy coyote pelt."},bandana:{name:"Red bandana",icon:"\u{1F9E3}",value:25,examine:"Standard outlaw issue.",equip:{slot:"neck",bonus:{att:1,def:1}}},leather:{name:"Leather",icon:"\u{1F7EB}",value:25,examine:"Tanned leather. Crafters will want this when the Crafting skill arrives next round."},rusty_knife:{name:"Rusty knife",icon:"\u{1F52A}",tint:"sepia(0.8)",value:5,examine:"Barely sharper than a spoon.",equip:{slot:"weapon",style:"melee",speed:4,bonus:{att:4,str:3}}},bowie_knife:{name:"Bowie knife",icon:"\u{1F52A}",value:250,examine:"A big, mean frontier knife.",equip:{slot:"weapon",style:"melee",speed:4,req:{attack:10},bonus:{att:14,str:13},spec:{name:"Gut Punch",cost:25,acc:1.25,dmg:1.1}}},cavalry_sabre:{name:"Cavalry sabre",icon:"\u{1F5E1}\uFE0F",value:900,examine:"A curved blade for mounted soldiers.",equip:{slot:"weapon",style:"melee",speed:4,req:{attack:20},bonus:{att:26,str:25},spec:{name:"Cavalry Charge",cost:50,acc:1.5,dmg:1.15}}},old_revolver:{name:"Old revolver",icon:"\u{1F52B}",tint:"sepia(0.7)",value:20,examine:"It still fires. Mostly.",equip:{slot:"weapon",style:"ranged",speed:4,range:6,bonus:{rng:8,rstr:6}}},six_shooter:{name:"Six-shooter",icon:"\u{1F52B}",value:300,examine:"A reliable six-shot revolver.",equip:{slot:"weapon",style:"ranged",speed:4,range:7,req:{ranged:10},bonus:{rng:18,rstr:14},spec:{name:"Fan the Hammer",cost:75,hits:3,acc:.8,dmg:.8}}},lever_rifle:{name:"Lever-action rifle",icon:"\u{1F52B}",tint:"hue-rotate(180deg)",value:1100,examine:"Fires as fast as you can work the lever.",equip:{slot:"weapon",style:"ranged",speed:5,range:8,req:{ranged:20},bonus:{rng:30,rstr:24},spec:{name:"Quick Draw",cost:50,hits:2,acc:1,dmg:1}}},cowboy_hat:{name:"Cowboy hat",icon:"\u{1F920}",value:15,examine:"Keeps the sun off.",equip:{slot:"head",bonus:{def:2}}},leather_vest:{name:"Leather vest",icon:"\u{1F9BA}",tint:"sepia(1) hue-rotate(-15deg)",value:30,examine:"Sturdy leather.",equip:{slot:"body",bonus:{def:5}}},hide_duster:{name:"Hide duster",icon:"\u{1F9E5}",value:400,examine:"A long coat of thick hide.",equip:{slot:"body",req:{defence:10},bonus:{def:12}}},chaps:{name:"Leather chaps",icon:"\u{1F456}",tint:"sepia(1)",value:25,examine:"Protects the legs from brush.",equip:{slot:"legs",bonus:{def:3}}},poncho:{name:"Wool poncho",icon:"\u{1F9F6}",tint:"hue-rotate(-30deg)",value:18,examine:"Warm at night, cool by day.",equip:{slot:"cape",bonus:{def:1}}},leather_gloves:{name:"Leather gloves",icon:"\u{1F9E4}",tint:"sepia(1)",value:12,examine:"Good for handling rope.",equip:{slot:"hands",bonus:{def:1,att:1}}},buckler:{name:"Iron buckler",icon:"\u{1F6E1}\uFE0F",value:120,examine:"A small round shield.",equip:{slot:"shield",req:{defence:5},bonus:{def:6}}},lucky_ring:{name:"Lucky horseshoe ring",icon:"\u{1F48D}",value:200,examine:"Bent from a lucky horseshoe nail.",equip:{slot:"ring",bonus:{att:2,rng:2}}},bullets:{name:"Lead bullets",icon:"\u2022",value:1,stack:!0,examine:"Phase 2 will make guns need these.",equip:{slot:"ammo",bonus:{rstr:1}}},boots:{name:"Riding boots",icon:"\u{1F462}",value:20,examine:"Spurs not included.",equip:{slot:"feet",bonus:{def:1}}},wyrmscale_vest:{name:"Wyrmscale vest",icon:"\u{1F9BA}",tint:"hue-rotate(10deg) saturate(0.5) brightness(1.2)",value:650,examine:"Overlapping sandy scales, tougher than leather.",equip:{slot:"body",req:{defence:5},bonus:{def:10,rng:2}}},wyrmfang_knife:{name:"Wyrmfang knife",icon:"\u{1F52A}",tint:"sepia(0.4) brightness(1.4)",value:700,examine:"A blade ground from a Dust Wyrm fang.",equip:{slot:"weapon",style:"melee",speed:4,req:{attack:10},bonus:{att:17,str:16},spec:{name:"Venom Slash",cost:50,acc:1.3,dmg:1.2}}},wyrmling:{name:"Wyrmling",icon:"\u{1F409}",tint:"sepia(1) saturate(0.6)",value:0,quest:!0,examine:"A baby Dust Wyrm. It seems to like you.",pet:"wyrmling_pet"},strongbox:{name:"Stolen strongbox",icon:"\u{1F9F3}",value:0,quest:!0,examine:"Property of the Dry Gulch Bank."},deputy_badge:{name:"Deputy badge",icon:"\u2B50",value:50,examine:"Awarded by Sheriff Calloway.",equip:{slot:"neck",bonus:{att:3,def:3,rng:3}}}};for(let[n,e]of Object.entries(xe))e.id=n});var Hn,Gd,ki,Di=Ue(()=>{Hn=[{id:"attack",name:"Attack",icon:"\u2694\uFE0F",guide:[{lvl:1,text:"Rusty knife"},{lvl:10,text:"Bowie knife"},{lvl:20,text:"Cavalry sabre"}]},{id:"strength",name:"Strength",icon:"\u{1F4AA}",guide:[{lvl:1,text:"Train with the Aggressive melee style"}]},{id:"defence",name:"Defence",icon:"\u{1F6E1}\uFE0F",guide:[{lvl:1,text:"Cowboy hat, leather vest, chaps, boots"},{lvl:10,text:"Hide duster"}]},{id:"hitpoints",name:"Hitpoints",icon:"\u2764\uFE0F",start:10,guide:[{lvl:10,text:"Gained through all combat"}]},{id:"prayer",name:"Faith",icon:"\u271D\uFE0F",guide:[{lvl:1,text:"Bury bones (4.5 xp). Thick Hide"},{lvl:4,text:"True Grit"},{lvl:7,text:"Eagle Eye"},{lvl:10,text:"Steady Hand"},{lvl:13,text:"Iron Hide"},{lvl:16,text:"Lawman's Wrath"}]},{id:"ranged",name:"Ranged",icon:"\u{1F3AF}",guide:[{lvl:1,text:"Old revolver"},{lvl:10,text:"Six-shooter"},{lvl:20,text:"Lever-action rifle"}]},{id:"thieving",name:"Thieving",icon:"\u{1F9E4}",guide:[{lvl:1,text:"Pickpocket Cowpokes & Townswomen"},{lvl:5,text:"Bakery stall"},{lvl:20,text:"Fur stall"},{lvl:25,text:"Crack the bank safe"}]},{id:"woodcutting",name:"Woodcutting",icon:"\u{1FA93}",guide:[{lvl:1,text:"Dead tree (logs)"},{lvl:15,text:"Mesquite tree"},{lvl:30,text:"Cottonwood tree"}]},{id:"mining",name:"Mining",icon:"\u26CF\uFE0F",guide:[{lvl:1,text:"Copper rock"},{lvl:15,text:"Iron rock"},{lvl:30,text:"Silver rock"},{lvl:40,text:"Gold rock"}]},{id:"fishing",name:"Fishing",icon:"\u{1F3A3}",guide:[{lvl:1,text:"Crayfish (small net)"},{lvl:10,text:"Sunfish (small net)"},{lvl:20,text:"Trout (fishing rod)"},{lvl:30,text:"Catfish (fishing rod)"}]},{id:"cooking",name:"Cooking",icon:"\u{1F373}",guide:[{lvl:1,text:"Crayfish, raw meat"},{lvl:10,text:"Sunfish"},{lvl:20,text:"Trout"},{lvl:30,text:"Catfish"}]},{id:"firemaking",name:"Firemaking",icon:"\u{1F525}",guide:[{lvl:1,text:"Logs"},{lvl:15,text:"Mesquite logs"},{lvl:30,text:"Cottonwood logs"}]}],Gd=Hn.map(n=>n.id),ki=Object.fromEntries(Hn.map(n=>[n.id,n]))});var Ui,ma=Ue(()=>{Ui={strongbox_showdown:{name:"Strongbox Showdown",start:"Sheriff Calloway in Dry Gulch",difficulty:"Novice",qp:1,done:4,requirements:[],journal:{0:"I can start this quest by talking to Sheriff Calloway at the sheriff's office in Dry Gulch.",1:"Bandits robbed the bank's strongbox. The sheriff wants me to ask Ellie May at the stable whether she saw which way they rode.",2:"Ellie saw the bandits ride east across the river bridge. I should hunt down bandits at their camp and recover the strongbox.",3:"I recovered the stolen strongbox! I should return it to Sheriff Calloway.",4:"QUEST COMPLETE! The sheriff made me an honorary deputy."},rewards:["1 Quest Point","350 Attack XP","350 Ranged XP","500 coins","Deputy badge"]}}});function hr(n){return Rc[Math.max(1,Math.min(99,n))]}function Vd(n){for(let e=99;e>=1;e--)if(n>=Rc[e])return e;return 1}function Wd(n){let e=n.prayer||1,t=n.magic||1,i=.25*(n.defence+n.hitpoints+Math.floor(e/2)),s=.325*(n.attack+n.strength),r=.325*Math.floor(n.ranged*1.5),o=.325*Math.floor(t*1.5);return Math.floor(i+Math.max(s,r,o))}var Rc,Cc=Ue(()=>{Rc=[0,0];{let n=0;for(let e=1;e<99;e++)n+=Math.floor(e+300*Math.pow(2,e/7)),Rc[e+1]=Math.floor(n/4)}});var Sn,qd,hs,ur,Xd,Ni,Yd,$d,Zd,Jd,Kd,jd,Qd,Pc,us=Ue(()=>{Sn={x:45,z:48},qd=n=>74+2.5*Math.sin(n/8),hs=[[73,80],[66,79],[59,76],[52,75],[45,77],[38,79],[31,77],[24,74],[16,75]],ur=[{id:"graveyard",name:"Dry Gulch Churchyard",x0:60,z0:30,x1:66,z1:37,music:"town",blessed:!0},{id:"drygulch",name:"Dry Gulch",x0:28,z0:28,x1:66,z1:60,music:"town"},{id:"copperhills",name:"Copper Hills",x0:34,z0:3,x1:64,z1:24,music:"hills"},{id:"banditcamp",name:"Bandit Camp",x0:78,z0:34,x1:93,z1:58,music:"danger"},{id:"wyrmlair",name:"Dust Wyrm Lair",x0:80,z0:69,x1:93,z1:83,music:"danger",boss:"dust_wyrm"},{id:"creek",name:"Willow Creek",x0:14,z0:72,x1:68,z1:82,music:"river"},{id:"river",name:"Rattler River",x0:68,z0:0,x1:80,z1:96,music:"river"},{id:"desert",name:"Dry Gulch Desert",x0:0,z0:0,x1:96,z1:96,music:"desert"}],Xd=[{x0:18,z0:47,x1:92,z1:49},{x0:49,z0:20,x1:50,z1:47},{x0:51,z0:37,x1:59,z1:38},{x0:50,z0:49,x1:51,z1:84}],Ni=[{id:"bank",name:"BANK",x:35,z:39,w:6,d:5,door:"S",wall:12098160,roof:6961706,npc:"banker",npcAt:[37,40]},{id:"store",name:"GENERAL STORE",x:42,z:39,w:6,d:5,door:"S",wall:10122832,roof:4872762,npc:"storekeeper",npcAt:[43,40]},{id:"gunsmith",name:"GUNSMITH",x:52,z:39,w:6,d:5,door:"S",wall:8018490,roof:3815994,npc:"gunsmith",npcAt:[54,40]},{id:"stable",name:"STABLE",x:35,z:52,w:7,d:5,door:"N",wall:9058858,roof:5909018,npc:"stablehand",npcAt:[38,54]},{id:"saloon",name:"SALOON",x:43,z:52,w:7,d:6,door:"N",wall:10518616,roof:5913120,two:!0,npc:"bartender",npcAt:[45,56]},{id:"sheriff",name:"SHERIFF",x:53,z:52,w:7,d:5,door:"N",wall:12626048,roof:3811866,npc:"sheriff",npcAt:[55,55]},{id:"church",name:"CHURCH",x:53,z:30,w:6,d:7,door:"S",wall:15789280,roof:5921378,steeple:!0,npc:"preacher",npcAt:[56,32]}],Yd=[...[36,37,38].map(n=>({type:"bank_counter",x:n,z:41})),{type:"vault",x:39,z:40},{type:"shelf",x:36,z:40},{type:"counter",x:43,z:41},{type:"counter",x:44,z:41},{type:"shelf",x:45,z:40},{type:"shelf",x:46,z:40},{type:"barrel",x:46,z:42},{type:"counter",x:53,z:41},{type:"counter",x:54,z:41},{type:"workbench",x:53,z:40},{type:"gun_rack",x:55,z:40},{type:"gun_rack",x:56,z:40},{type:"stall",x:37,z:55},{type:"stall",x:39,z:55},{type:"hay",x:36,z:53},{type:"hay",x:40,z:53},{type:"bar_counter",x:44,z:55},{type:"bar_counter",x:45,z:55},{type:"bar_counter",x:46,z:55},{type:"range",x:48,z:56},{type:"piano",x:44,z:53},{type:"saloon_stairs",x:48,z:55},{type:"saloon_table",x:45,z:54},{type:"desk",x:55,z:54},...[53,54,55].map(n=>({type:"jail_bars",x:57,z:n})),{type:"cot",x:58,z:54},{type:"wanted_bart",x:54,z:55,wall:.78},{type:"wanted_kid",x:56,z:55,wall:.78},{type:"altar",x:55,z:31},...[33,34].flatMap(n=>[{type:"pew",x:54,z:n},{type:"pew",x:57,z:n}]),{type:"headstone",x:61,z:32,text:"Here lies Les Moore. Four slugs from a .44 - no Les, no more."},{type:"headstone",x:63,z:32,text:"Ike Clanton. Should have stayed home."},{type:"headstone",x:65,z:32,text:'Martha "Ma" Dunn Sr. Best biscuits west of the Pecos.'},{type:"headstone",x:61,z:35,text:"Unknown cowpoke. Died with his boots on."},{type:"headstone",x:63,z:35,text:"Deputy Hank Ross. He held the line."},{type:"headstone",x:65,z:35,text:"Old Blue, the best hound in Dry Gulch."},{type:"church_bell",x:59,z:37},{type:"bakery_stall",x:40,z:50},{type:"fur_stall",x:32,z:46},{type:"stagecoach",x:63,z:51,rot:Math.PI},{type:"coach_stop",x:61,z:50},{type:"coach_stop",x:52,z:25},{type:"coach_stop",x:78,z:50},{type:"coach_stop",x:77,z:71}],$d=[{type:"pianist",x:45,z:53},{type:"hostess",x:46,z:54},{type:"patron_miner",x:48,z:54},{type:"patron_gambler",x:47,z:53},{type:"horse",x:36,z:55},{type:"horse",x:38,z:55},{type:"horse",x:40,z:55}],Zd=[{type:"well",x:51,z:45},{type:"campfire",x:52,z:59},{type:"signpost",x:61,z:46},{type:"barrel",x:41,z:45},{type:"barrel",x:58,z:44},{type:"barrel",x:52,z:56},{type:"trough",x:32,z:55},{type:"barrel",x:33,z:44},{type:"fence",x:35,z:44},{type:"trough",x:60,z:69},{type:"barrel",x:41,z:67},{type:"chicken_coop",x:41,z:63},{type:"campfire",x:86,z:46},{type:"tent",x:83,z:40},{type:"tent",x:89,z:41},{type:"tent",x:84,z:52},{type:"tent",x:90,z:52},{type:"rock_copper",x:44,z:19},{type:"rock_copper",x:45,z:21},{type:"rock_copper",x:46,z:18},{type:"rock_copper",x:53,z:20},{type:"rock_copper",x:54,z:22},{type:"rock_copper",x:52,z:18},{type:"rock_iron",x:42,z:14},{type:"rock_iron",x:44,z:13},{type:"rock_iron",x:55,z:14},{type:"rock_iron",x:57,z:15},{type:"rock_silver",x:47,z:9},{type:"rock_silver",x:53,z:9},{type:"rock_gold",x:50,z:7},{type:"fish_net",river:!0,z:30},{type:"fish_net",river:!0,z:36},{type:"fish_net",river:!0,z:58},{type:"fish_net",river:!0,z:64},{type:"fish_rod",river:!0,z:22},{type:"fish_rod",river:!0,z:72},{type:"fish_net",creek:!0,x:41},{type:"fish_net",creek:!0,x:57},{type:"pan_spot",creek:!0,x:33},{type:"pan_spot",river:!0,z:42},{type:"pan_spot",river:!0,z:53},{type:"pan_spot",river:!0,z:26}],Jd=[{x0:29,z0:52,x1:34,z1:58,gap:{x:34,z:54}},{x0:60,z0:30,x1:66,z1:37,gap:{x:60,z:36}},{x0:40,z0:62,x1:46,z1:68,gap:{x:46,z:64}},{x0:53,z0:61,x1:63,z1:71,gap:{x:53,z:64}}],Kd=[{x0:37,z0:61,x1:63,z1:72},{x0:78,z0:67,x1:93,z1:85}],jd=[{x:86,z:76,r:6,gaps:[0,Math.PI]}],Qd=[{type:"tree_dead",count:14,x0:20,z0:37,x1:33,z1:46},{type:"tree_dead",count:30,x0:3,z0:3,x1:66,z1:92},{type:"tree_mesquite",count:10,x0:62,z0:10,x1:70,z1:88},{type:"tree_cottonwood",count:8,x0:76,z0:4,x1:82,z1:92},{type:"cactus",count:70,x0:3,z0:3,x1:92,z1:92},{type:"boulder",count:30,x0:3,z0:3,x1:92,z1:92},{type:"boulder",count:12,x0:36,z0:4,x1:62,z1:23},{type:"skull",count:10,x0:3,z0:3,x1:92,z1:92}],Pc=[{type:"townsfolk",x:47,z:46},{type:"dust_wyrm",x:86,z:76},{type:"tanner",x:34,z:45,wander:0},{type:"dairy_cow",x:59,z:69,wander:2},{type:"baker",x:40,z:51,wander:0},{type:"cowpoke",x:40,z:48},{type:"cowpoke_b",x:55,z:48},{type:"townswoman",x:48,z:47},{type:"townswoman_b",x:44,z:49},{type:"cowpoke",x:52,z:48},{type:"driver",x:62,z:50,wander:0},...[[42,64],[44,66],[43,63],[45,65]].map(([n,e])=>({type:"chicken",x:n,z:e,wander:2})),...[[56,64],[58,66],[60,63],[57,69],[61,67]].map(([n,e])=>({type:"cattle",x:n,z:e,wander:3})),...[[30,66],[34,70],[42,85],[56,86],[60,84],[26,60],[66,68],[44,88]].map(([n,e])=>({type:"rattlesnake",x:n,z:e})),...[[12,30],[16,50],[10,70],[22,84],[30,16],[64,30],[20,22]].map(([n,e])=>({type:"coyote",x:n,z:e})),...[[86,43],[88,47],[87,51],[91,44],[89,40]].map(([n,e])=>({type:"bandit",x:n,z:e}))]});function ef(){p.skills={};for(let n of Hn)p.skills[n.id]=hr(n.start||1);p.inv=new Array(zi).fill(null),p.equip={},p.bank=[{id:"bread",qty:5}],p.coins=25,p.quests={},p.style="accurate",p.run=!0,p.runEnergy=100,p.spec=100,p.specArmed=!1,p.autoRetaliate=!0;for(let n of["hatchet","pickaxe","small_net","tinderbox","old_revolver","bread","bread"])it(n,1,!0);p.equip.weapon="rusty_knife"}function N(n,e="game"){se("msg",n,e)}function tf(n){p.boosts=p.boosts||{};for(let[e,t]of Object.entries(n))p.boosts[e]=(p.boosts[e]||0)+t;se("skills")}function nf(){if(!p.boosts)return;let n=!1;for(let e of Object.keys(p.boosts)){let t=p.boosts[e];if(!t){delete p.boosts[e];continue}p.boosts[e]=t-Math.sign(t),n=!0}n&&se("skills")}function Ft(n,e){if(!e)return;let t=we(n);p.skills[n]=Math.min(2e8,(p.skills[n]||0)+e);let i=we(n);if(se("xp",n,e),i>t){let s=Hn.find(r=>r.id===n).name;N(`Congratulations, you just advanced a ${s} level. Your ${s} level is now ${i}.`,"level"),se("levelup",n,i),n==="hitpoints"&&p.player&&(p.player.hp+=i-t)}se("skills")}function Ht(n,e=1){return n==="coins"?!0:xe[n].stack?p.inv.some(i=>i&&i.id===n)||Lc()>0:Lc()>=e}function it(n,e=1,t=!1){if(n==="coins")return p.coins+=e,se("coins"),!0;let i=xe[n];if(!i)return console.warn("unknown item",n),!1;if(!Ht(n,e))return!1;if(i.stack){let s=p.inv.find(r=>r&&r.id===n);s?s.qty+=e:p.inv[p.inv.indexOf(null)]={id:n,qty:e}}else for(let s=0;s<e;s++)p.inv[p.inv.indexOf(null)]={id:n,qty:1};return t||se("inv"),!0}function sn(n,e=1){if(Qn(n)<e)return!1;for(let t=0;t<p.inv.length&&e>0;t++){let i=p.inv[t];if(!i||i.id!==n)continue;let s=Math.min(e,i.qty);i.qty-=s,e-=s,i.qty<=0&&(p.inv[t]=null)}return se("inv"),!0}function fs(n){let e=p.inv[n];return p.inv[n]=null,se("inv"),e}function ps(){let n={att:0,str:0,rng:0,rstr:0,def:0};for(let e of Hd){let t=p.equip[e];if(!t)continue;let i=xe[t].equip.bonus||{};for(let s in i)n[s]+=i[s]}return n}function Gn(){let n=p.equip.weapon;return n?xe[n]:null}function ms(){let n=Gn();return n?n.equip.style:"melee"}function sf(){let n=Gn();return n?n.equip.speed:4}function ga(){let n=Gn();return n&&n.equip.style==="ranged"?n.equip.range:1}function rf(n){let e=p.inv[n];if(!e)return;let t=xe[e.id];if(!t.equip)return;for(let[r,o]of Object.entries(t.equip.req||{}))if(we(r)<o){N(`You need a ${r[0].toUpperCase()+r.slice(1)} level of ${o} to wield this.`);return}let i=t.equip.slot,s=p.equip[i];if(p.inv[n]=s?{id:s,qty:1}:null,p.equip[i]=e.id,i==="weapon"){let r=t.equip.style;r==="ranged"&&!["accurate","rapid"].includes(p.style)&&(p.style="accurate"),r==="melee"&&p.style==="rapid"&&(p.style="accurate")}se("inv"),se("equip")}function Ic(n){let e=p.equip[n];if(e){if(Lc()<1){N("You don't have enough free inventory space to do that.");return}delete p.equip[n],it(e,1),n==="weapon"&&p.style==="rapid"&&(p.style="accurate"),se("equip")}}function xa(n,e){let t=Ui[n],i=Vn(n);p.quests[n]=e,i===0&&e>0&&N(`You have started a new quest: ${t.name}.`,"quest"),se("quests")}var zi,p,we,jn,ds,Qn,Bt,Lc,Vn,ya,It=Ue(()=>{gt();In();Di();ma();Cc();us();zi=28,p={tick:0,player:null,skills:{},inv:new Array(zi).fill(null),equip:{},bank:[],coins:0,quests:{},style:"accurate",run:!0,npcs:[],objects:[],ground:[],ui:{open:null}};we=n=>Vd(p.skills[n]||0),jn=n=>Math.max(1,we(n)+(p.boosts&&p.boosts[n]||0));ds=()=>Wd(Object.fromEntries(Hn.map(n=>[n.id,we(n.id)])));Qn=n=>p.inv.reduce((e,t)=>e+(t&&t.id===n?t.qty:0),0),Bt=(n,e=1)=>Qn(n)>=e,Lc=()=>p.inv.filter(n=>!n).length;Vn=n=>p.quests[n]||0;ya=()=>Object.entries(Ui).reduce((n,[e,t])=>n+(Vn(e)>=t.done?t.qp:0),0)});var kc,of=Ue(()=>{kc={tree_dead:{name:"Dead tree",examine:"A dead, dried-out tree.",model:"tree_dead",blocks:!0,action:"Chop down",gather:{skill:"woodcutting",level:1,xp:25,items:[{id:"logs"}],tool:"hatchet",ticks:4,deplete:.35,respawn:15,verb:"You swing your hatchet at the tree.",got:"You get some logs."}},tree_mesquite:{name:"Mesquite tree",examine:"A tough, thorny desert tree.",model:"tree_mesquite",blocks:!0,action:"Chop down",gather:{skill:"woodcutting",level:15,xp:37.5,items:[{id:"mesquite_logs"}],tool:"hatchet",ticks:4,deplete:.2,respawn:20,verb:"You swing your hatchet at the mesquite.",got:"You get some mesquite logs."}},tree_cottonwood:{name:"Cottonwood tree",examine:"A tall tree that drinks from the river.",model:"tree_cottonwood",blocks:!0,action:"Chop down",gather:{skill:"woodcutting",level:30,xp:67.5,items:[{id:"cottonwood_logs"}],tool:"hatchet",ticks:4,deplete:.15,respawn:30,verb:"You swing your hatchet at the cottonwood.",got:"You get some cottonwood logs."}},rock_copper:{name:"Copper rock",examine:"This rock contains copper.",model:"rock",ore:12611642,blocks:!0,action:"Mine",gather:{skill:"mining",level:1,xp:17.5,items:[{id:"copper_ore"}],tool:"pickaxe",ticks:4,deplete:1,respawn:6,verb:"You swing your pick at the rock.",got:"You manage to mine some copper."}},rock_iron:{name:"Iron rock",examine:"This rock contains iron.",model:"rock",ore:9062970,blocks:!0,action:"Mine",gather:{skill:"mining",level:15,xp:35,items:[{id:"iron_ore"}],tool:"pickaxe",ticks:4,deplete:1,respawn:10,verb:"You swing your pick at the rock.",got:"You manage to mine some iron."}},rock_silver:{name:"Silver rock",examine:"This rock contains silver.",model:"rock",ore:14542062,blocks:!0,action:"Mine",gather:{skill:"mining",level:30,xp:40,items:[{id:"silver_ore"}],tool:"pickaxe",ticks:5,deplete:1,respawn:40,verb:"You swing your pick at the rock.",got:"You manage to mine some silver."}},rock_gold:{name:"Gold rock",examine:"This rock contains gold!",model:"rock",ore:16764976,blocks:!0,action:"Mine",gather:{skill:"mining",level:40,xp:65,items:[{id:"gold_ore"}],tool:"pickaxe",ticks:5,deplete:1,respawn:60,verb:"You swing your pick at the rock.",got:"You manage to mine some gold."}},fish_net:{name:"Fishing spot",examine:"Small fish dart about in the shallows.",model:"fishspot",blocks:!1,water:!0,action:"Net",gather:{skill:"fishing",level:1,xp:10,items:[{id:"raw_crayfish",lvl:1,xp:10},{id:"raw_sunfish",lvl:10,xp:25}],tool:"small_net",ticks:5,deplete:0,verb:"You cast out your net...",got:"You catch some fish."}},fish_rod:{name:"Fishing spot",examine:"Something big is swimming down there.",model:"fishspot",blocks:!1,water:!0,action:"Bait",gather:{skill:"fishing",level:20,xp:50,items:[{id:"raw_trout",lvl:20,xp:50},{id:"raw_catfish",lvl:30,xp:80}],tool:"fishing_rod",bait:"bait",ticks:5,deplete:0,verb:"You cast out your line...",got:"You catch a fish."}},fire:{name:"Fire",examine:"A crackling fire.",model:"fire",blocks:!0,action:"Cook",cookable:!0,temporary:!0},campfire:{name:"Campfire",examine:"A permanent cooking fire. Somebody keeps it fed.",model:"campfire",blocks:!0,action:"Cook",cookable:!0},range:{name:"Cooking range",examine:"A cast-iron range. Food burns less on this than on a fire.",model:"range",blocks:!0,action:"Cook",cookable:!0,range:!0},bank_counter:{name:"Bank counter",examine:"Polished oak, with a brass grille.",model:"bank_counter",blocks:!0,counter:!0},counter:{name:"Counter",examine:"A sturdy shop counter, worn smooth by elbows.",model:"counter",blocks:!0,counter:!0},bar_counter:{name:"Bar",examine:"Sticky. Very sticky.",model:"bar_counter",blocks:!0,counter:!0},desk:{name:"Sheriff's desk",examine:"Piled with wanted posters and cold coffee.",model:"desk",blocks:!0,counter:!0},vault:{name:"Bank safe",examine:"A Mosler safe. A skilled thief might crack it (Thieving 25).",model:"vault",blocks:!0,verb:"Crack",crack:{lvl:25,xp:70,coins:[20,60],extra:[{id:"gold_flakes",qty:[2,6],w:4},{id:"silver_ore",qty:[1,1],w:2},{id:"lucky_ring",qty:[1,1],w:1},{id:"nothing",w:6}],respawn:40,trap:[2,4]}},shelf:{name:"Shelves",examine:"Tins, sacks and bolts of cloth.",model:"shelf",blocks:!0},workbench:{name:"Workbench",examine:"Covered in springs, screws and gun oil.",model:"workbench",blocks:!0},gun_rack:{name:"Gun rack",examine:"Rifles and shotguns - look, don't touch.",model:"gun_rack",blocks:!0},stall:{name:"Stall divider",examine:"Keeps the horses from squabbling.",model:"stall",blocks:!0},hay:{name:"Hay bales",examine:"Fresh hay. Smells like summer.",model:"hay",blocks:!0},piano:{name:"Piano",examine:"An upright piano, slightly out of tune.",model:"piano",blocks:!0,verb:"Play",use:"piano"},chicken_coop:{name:"Chicken coop",examine:"Smells like... chickens. There might be eggs inside.",model:"coop",blocks:!0,verb:"Collect-from",use:"coop"},bakery_stall:{name:"Bakery stall",examine:"Fresh bread and cakes. Baker Bess keeps a sharp eye on it.",model:"stall_bakery",blocks:!0,verb:"Steal-from",steal:{lvl:5,xp:16,loot:[{id:"bread",w:6},{id:"cake_slice",w:3}],respawn:4,owner:"baker",notice:.25}},fur_stall:{name:"Fur stall",examine:"Pelts and hides. Tanner Jed doesn't miss much.",model:"stall_fur",blocks:!0,verb:"Steal-from",steal:{lvl:20,xp:36,loot:[{id:"coyote_pelt",w:5},{id:"cowhide",w:3},{id:"leather",w:2}],respawn:15,owner:"tanner",notice:.3}},saloon_stairs:{name:"Staircase",examine:"Stairs up to the guest rooms. Miss Lottie keeps the keys.",model:"stairs",blocks:!0,verb:"Climb-up",use:"stairs"},saloon_table:{name:"Card table",examine:"A half-finished game of poker. Somebody was bluffing.",model:"saloon_table",blocks:!0},jail_bars:{name:"Jail cell",examine:"Iron bars. The cell is empty - for now.",model:"jail_bars",blocks:!0},cot:{name:"Prison cot",examine:"Lumpy. Deserved, probably.",model:"cot",blocks:!0},wanted_bart:{name:"Wanted poster",examine:'WANTED: "Black Jack" Bart, leader of the river bandits. $500 REWARD.',model:"poster",blocks:!1},wanted_kid:{name:"Wanted poster",examine:'WANTED: The Dust Wyrm. "Big as a train, eats horses." Last seen south-east of the river.',model:"poster",blocks:!1},altar:{name:"Altar",examine:"A simple wooden altar with a brass cross.",model:"altar",blocks:!0,pray:!0},pew:{name:"Pew",examine:"A hard wooden pew. Keeps you awake through the sermon.",model:"pew",blocks:!0},headstone:{name:"Headstone",examine:"A weathered headstone.",model:"headstone",blocks:!0},church_bell:{name:"Church bell",examine:"A bronze bell on a wooden frame.",model:"bell",blocks:!0,verb:"Ring",use:"bell"},stagecoach:{name:"Stagecoach",examine:"The Dry Gulch Overland Mail. Driver Hank will take you places - for a fare.",model:"stagecoach",blocks:!0,verb:"Board",use:"coach"},coach_stop:{name:"Stagecoach stop",examine:"Ring the bell and the stagecoach comes a-runnin'.",model:"coach_stop",blocks:!0,verb:"Travel",use:"coach"},pan_spot:{name:"Gravel bar",examine:"Glints of gold in the shallow gravel.",model:"panspot",blocks:!1,water:!0,action:"Pan",gather:{skill:"mining",level:1,xp:5,items:[{id:"gold_flakes",qty:[1,2]}],tool:"gold_pan",ticks:5,deplete:0,verb:"You swirl gravel in your pan...",got:"You find some gold flakes!"}},cactus:{name:"Cactus",examine:"A saguaro. Do not hug.",model:"cactus",blocks:!0},boulder:{name:"Boulder",examine:"A big sandstone boulder.",model:"boulder",blocks:!0},well:{name:"Well",examine:"The town well. The water tastes of iron.",model:"well",blocks:!0,pray:!0},barrel:{name:"Barrel",examine:"Probably full of nails. Or whiskey.",model:"barrel",blocks:!0},trough:{name:"Water trough",examine:"For thirsty horses.",model:"trough",blocks:!0},fence:{name:"Fence",examine:"A split-rail fence.",model:"fence",blocks:!0},tent:{name:"Bandit tent",examine:"A dirty canvas tent.",model:"tent",blocks:!0},skull:{name:"Cattle skull",examine:"A bleached cattle skull.",model:"skull",blocks:!1},signpost:{name:"Signpost",examine:"Dry Gulch - Pop. 41. East: Bandit Country. North: Copper Hills.",model:"signpost",blocks:!0}};for(let[n,e]of Object.entries(kc))e.id=n});function Oi(n,e,t,i={}){let s=kc[n],r={kind:"object",id:K_++,type:n,def:s,x:e,z:t,depleted:!1,respawnAt:0,mesh:null,...i};return wn.push(r),_a.set(ct(e,t),r),s.blocks&&(ba[ct(e,t)]=1),r}function cf(n){let e=wn.indexOf(n);e>=0&&wn.splice(e,1),_a.get(ct(n.x,n.z))===n&&_a.delete(ct(n.x,n.z)),n.def.blocks&&(ba[ct(n.x,n.z)]=j_(n.x,n.z)?1:0)}function j_(n,e){let t=At[ct(n,e)];return t===ye.WATER||t===ye.CLIFF||t===ye.FLOOR}function Q_(n,e){let t=1e9;for(let i=0;i<hs.length-1;i++){let[s,r]=hs[i],[o,a]=hs[i+1],l=o-s,c=a-r,h=Math.max(0,Math.min(1,((n-s)*l+(e-r)*c)/(l*l+c*c)));t=Math.min(t,Math.hypot(n-s-h*l,e-r-h*c))}return t}function hf(){let n=qr(777);for(let i=0;i<Ut;i++)for(let s=0;s<nt;s++){let r=ye.SAND,o=qd(i),a=Math.abs(s+.5-o);a<1.6?r=ye.WATER:a<4.5+cr(s/4,i/4)*2&&(r=ye.GRASS),va(s,i,{x0:34,z0:3,x1:64,z1:23})&&cr(s/6+10,i/6)>.35&&(r=ye.ROCK);let l=Q_(s+.5,i+.5);l<1.05?r=ye.WATER:l<2.8+cr(s/3,i/3)&&r===ye.SAND&&(r=ye.GRASS),(s<2||i<2||s>=nt-2||i>=Ut-2)&&(r=ye.CLIFF),At[ct(s,i)]=r}for(let i of Xd)for(let s=i.z0;s<=i.z1;s++)for(let r=i.x0;r<=i.x1;r++)xs(r,s)&&(At[ct(r,s)]=At[ct(r,s)]===ye.WATER?ye.BRIDGE:ye.ROAD);for(let i of Ni){i.doorX=i.x+Math.floor(i.w/2),i.doorZ=i.door==="S"?i.z+i.d-1:i.z,i.outZ=i.door==="S"?i.z+i.d:i.z-1;for(let s=i.z;s<i.z+i.d;s++)for(let r=i.x;r<i.x+i.w;r++){let o=r===i.x||r===i.x+i.w-1||s===i.z||s===i.z+i.d-1;At[ct(r,s)]=o&&!(r===i.doorX&&s===i.doorZ)?ye.FLOOR:ye.INDOOR}for(let s=i.x;s<i.x+i.w;s++)At[ct(s,i.outZ)]===ye.SAND&&(At[ct(s,i.outZ)]=ye.ROAD)}for(let i=0;i<nt*Ut;i++){let s=At[i];ba[i]=s===ye.WATER||s===ye.CLIFF||s===ye.FLOOR?1:0}tb();for(let i of Yd)Oi(i.type,i.x,i.z,{text:i.text,wall:i.wall});for(let i of Zd){let s=i.x,r=i.z;if(i.river)for(s=60;s<nt&&At[ct(s,i.z)]!==ye.WATER;)s++;if(i.creek)for(r=68;r<Ut&&At[ct(i.x,r)]!==ye.WATER;)r++;Oi(i.type,s,r,i.rot!==void 0?{rot:i.rot}:{})}for(let i of Jd)for(let s=i.x0;s<=i.x1;s++)for(let r=i.z0;r<=i.z1;r++)!(s===i.x0||s===i.x1||r===i.z0||r===i.z1)||i.gap&&s===i.gap.x&&r===i.gap.z||fi(s,r)||$t(s,r)||Oi("fence",s,r,{rot:r===i.z0||r===i.z1?0:Math.PI/2});for(let i of jd)for(let s=i.z-i.r-1;s<=i.z+i.r+1;s++)for(let r=i.x-i.r-1;r<=i.x+i.r+1;r++){if(!xs(r,s)||$t(r,s))continue;let o=Math.hypot(r-i.x,s-i.z);if(o<=i.r-.5)At[ct(r,s)]=ye.ARENA;else if(o<=i.r+.5){let a=Math.atan2(s-i.z,r-i.x);if(i.gaps.some(l=>Math.abs(Math.atan2(Math.sin(a-l),Math.cos(a-l)))<.35)){At[ct(r,s)]=ye.ARENA;continue}fi(r,s)||Oi((r+s)%4===0?"skull":"boulder",r,s,{rot:(r*7+s)%6,scale:.9})}}for(let i=0;i<hs.length-1;i++){let[s,r]=hs[i],[o,a]=hs[i+1];for(let l of[.3,.75]){let c=Math.round(s+(o-s)*l),h=Math.round(r+(a-r)*l);for(let u of(i+(l>.5?1:0))%2?[-3,3]:[3]){let f=c,g=h+u;xs(f,g)&&!$t(f,g)&&!fi(f,g)&&At[ct(f,g)]!==ye.ROAD&&At[ct(f,g)]!==ye.BRIDGE&&Oi((i+u)%3===0?"tree_cottonwood":"tree_mesquite",f,g,{rot:i*1.3,scale:.9})}}}let e=ur.find(i=>i.id==="drygulch");for(let i of Qd){let s=0,r=0;for(;s<i.count&&r++<i.count*60;){let o=i.x0+Math.floor(n()*(i.x1-i.x0+1)),a=i.z0+Math.floor(n()*(i.z1-i.z0+1));eb(o,a,e,i.type)&&(Oi(i.type,o,a,{rot:n()*Math.PI*2,scale:.85+n()*.3}),s++)}}let t=[...Ni.filter(i=>i.npc).map(i=>({type:i.npc,x:i.npcAt[0],z:i.npcAt[1],wander:0})),...$d.map(i=>({...i,wander:0}))];return{spawns:[...Pc,...t],spawnPoint:Sn}}function eb(n,e,t,i){if(!xs(n,e)||$t(n,e))return!1;let s=At[ct(n,e)];if(s===ye.ROAD||s===ye.BRIDGE||va(n,e,{x0:t.x0-1,z0:t.z0-1,x1:t.x1+1,z1:t.z1+1})||va(n,e,{x0:79,z0:37,x1:93,z1:55})&&i!=="skull")return!1;for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){if(fi(n+o,e+r))return!1;let a=Xr(n+o,e+r);if(a===ye.ROAD||a===ye.BRIDGE||a===ye.WATER)return!1}if(Zt(n,e,Sn.x,Sn.z)<6||Kd.some(r=>va(n,e,r)))return!1;for(let r of Pc)if(r.x===n&&r.z===e)return!1;return!0}function tb(){for(let n=0;n<=Ut;n++)for(let e=0;e<=nt;e++){let t=0,i=0,s=0,r=0,o=0;for(let h=-1;h<=0;h++)for(let u=-1;u<=0;u++){let f=e+u,g=n+h,x=xs(f,g)?At[ct(f,g)]:ye.CLIFF;o++,x===ye.WATER?t++:x===ye.BRIDGE?r++:x===ye.CLIFF?i++:(x===ye.ROAD||x===ye.FLOOR||x===ye.INDOOR)&&s++}let a=(cr(e/9,n/9)-.45)*1.6,l=ur.find(h=>h.id==="drygulch"),c=Math.max(0,Math.max(l.x0-e,e-l.x1-1,l.z0-n,n-l.z1-1));a*=Math.min(1,c/8),s&&(a*=.3),t+r===4?a=-.6:r?a=0:t&&(a=Math.min(a,-.25)),i&&(a=2.2+cr(e/3,n/3)*1.5),gs[n*(nt+1)+e]=a}}function ys(n,e){let t=Math.floor(n),i=Math.floor(e);if(Xr(t,i)===ye.BRIDGE)return .18;let s=Math.max(0,Math.min(nt-.001,n)),r=Math.max(0,Math.min(Ut-.001,e)),o=Math.floor(s),a=Math.floor(r),l=s-o,c=r-a,h=gs[a*(nt+1)+o],u=gs[a*(nt+1)+o+1],f=gs[(a+1)*(nt+1)+o],g=gs[(a+1)*(nt+1)+o+1];return(h*(1-l)+u*l)*(1-c)+(f*(1-l)+g*l)*c}function dr(n,e,t,i){return!($t(n+t,e+i)||t&&i&&($t(n+t,e)||$t(n,e+i)))}function Sa(n,e,t,i,s,r=12e3){if(t(n,e))return[];let o=nt*Ut,a=new Float32Array(o).fill(1/0),l=new Int32Array(o).fill(-1),c=new Uint8Array(o),h=[],u=(M,y)=>{let A=Math.abs(M-i),P=Math.abs(y-s);return Math.max(A,P)+.414*Math.min(A,P)},f=(M,y)=>{h.push([M,y]);let A=h.length-1;for(;A>0;){let P=A-1>>1;if(h[P][0]<=h[A][0])break;[h[P],h[A]]=[h[A],h[P]],A=P}},g=()=>{let M=h[0],y=h.pop();if(h.length){h[0]=y;let A=0;for(;;){let P=2*A+1,C=P+1,R=A;if(P<h.length&&h[P][0]<h[R][0]&&(R=P),C<h.length&&h[C][0]<h[R][0]&&(R=C),R===A)break;[h[R],h[A]]=[h[A],h[R]],A=R}}return M},x=ct(n,e);a[x]=0,f(u(n,e),x);let v=0,m=x,d=u(n,e);for(;h.length&&v<r;){let[,M]=g();if(c[M])continue;c[M]=1,v++;let y=M%nt,A=M/nt|0;if(t(y,A))return af(l,M);let P=u(y,A);P<d&&(d=P,m=M);for(let[C,R]of nb){if(!dr(y,A,C,R))continue;let G=ct(y+C,A+R);if(c[G])continue;let b=a[M]+(C&&R?1.414:1);b<a[G]&&(a[G]=b,l[G]=M,f(b+u(y+C,A+R),G))}}return m!==x?af(l,m):null}function af(n,e){let t=[];for(;n[e]!==-1;)t.push({x:e%nt,z:e/nt|0}),e=n[e];return t.reverse()}function uf(n,e,t,i,s=1){return Sa(n,e,(r,o)=>Fi(r,o,t,i,s),t,i)}function Fi(n,e,t,i,s=1){if(n===t&&e===i)return s>1;if(s===1){let r=t-n,o=i-e;return Math.abs(r)+Math.abs(o)===1?!0:Math.abs(r)===1&&Math.abs(o)===1&&!$t(n+r,e)&&!$t(n,e+o)&&!1}return Zt(n,e,t,i)<=s}function Yr(n,e,t,i){let s=Math.sign(t-n),r=Math.sign(i-e);return(s||r)&&dr(n,e,s,r)?{x:n+s,z:e+r}:s&&dr(n,e,s,0)?{x:n+s,z:e}:r&&dr(n,e,0,r)?{x:n,z:e+r}:null}var nt,Ut,ye,At,ba,gs,_a,wn,ct,xs,$t,Xr,fi,lf,Ma,va,K_,nb,Dc,vs=Ue(()=>{gt();us();of();nt=96,Ut=96,ye={SAND:0,ROAD:1,GRASS:2,WATER:3,BRIDGE:4,ROCK:5,FLOOR:6,CLIFF:7,ARENA:8,INDOOR:9},At=new Uint8Array(nt*Ut),ba=new Uint8Array(nt*Ut),gs=new Float32Array((nt+1)*(Ut+1)),_a=new Map,wn=[],ct=(n,e)=>e*nt+n,xs=(n,e)=>n>=0&&e>=0&&n<nt&&e<Ut,$t=(n,e)=>!xs(n,e)||ba[ct(n,e)]===1,Xr=(n,e)=>xs(n,e)?At[ct(n,e)]:ye.CLIFF,fi=(n,e)=>_a.get(ct(n,e)),lf=(n,e)=>Ni.find(t=>n>t.x&&n<t.x+t.w-1&&e>t.z&&e<t.z+t.d-1)||null,Ma=(n,e)=>ur.find(t=>n>=t.x0&&n<=t.x1&&e>=t.z0&&e<=t.z1),va=(n,e,t)=>n>=t.x0&&n<=t.x1&&e>=t.z0&&e<=t.z1,K_=1;nb=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];Dc=(n,e,t,i)=>Sa(n,e,(s,r)=>s===t&&r===i,t,i)});function w(n,e,t={}){let i=n.index?n.toNonIndexed():n.clone(),s=new Dt().compose(new U(t.x||0,t.y||0,t.z||0),new Jn().setFromEuler(new ir(t.rx||0,t.ry||0,t.rz||0)),new U(t.sx??t.s??1,t.sy??t.s??1,t.sz??t.s??1));i.applyMatrix4(s),wa.set(e);let r=i.attributes.position.count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=wa.r,o[a*3+1]=wa.g,o[a*3+2]=wa.b;i.setAttribute("color",new tn(o,3));for(let a of Object.keys(i.attributes))["position","color"].includes(a)||i.deleteAttribute(a);return i}function ue(n){let e=0;for(let o of n)e+=o.attributes.position.count;let t=new Float32Array(e*3),i=new Float32Array(e*3),s=0;for(let o of n)t.set(o.attributes.position.array,s*3),i.set(o.attributes.color.array,s*3),s+=o.attributes.position.count;let r=new mn;return r.setAttribute("position",new tn(t,3)),r.setAttribute("color",new tn(i,3)),r.computeVertexNormals(),r.computeBoundingSphere(),r}function rt(n){return new mt(n,zc)}function df(n,e){return Uc.has(n)||Uc.set(n,e()),Uc.get(n)}function ff(n){return df("rock"+n,()=>ue([w(Bi(.5),9075306,{y:.3,sy:.75}),w(Bi(.32),8022618,{x:.3,y:.2,z:-.2}),w(rn(.1),n,{x:.15,y:.62,z:.25}),w(rn(.09),n,{x:-.3,y:.42,z:.25}),w(rn(.08),n,{x:.4,y:.35,z:.1})]))}function _s(n){return df(n,ib[n]||Oc[n])}function sb(n){let e=document.createElement("canvas");e.width=256,e.height=64;let t=e.getContext("2d");t.fillStyle="#e8d8b0",t.fillRect(0,0,256,64),t.strokeStyle="#3a2410",t.lineWidth=6,t.strokeRect(3,3,250,58),t.fillStyle="#3a2410",t.font="bold 34px Georgia, serif",t.textAlign="center",t.textBaseline="middle",t.fillText(n,128,34,236);let i=new Qo(e);return i.colorSpace=Lt,i}function pf(n){let e=new vt,t=n.w,i=n.d,s=n.two?2.6:1.8,r=s+.7,o=.7,a=n.wall,l=3811866,c=(n.doorX??n.x+Math.floor(t/2))+.5-(n.x+t/2),h=n.door==="N"?-c:c,u=h-.5-(-t/2-.05),f=t/2+.05-(h+.5),g=[w(k(t-.1,.06,i-.1),8018488,{y:.03}),w(k(u,r,o),a,{x:-t/2-.05+u/2,y:r/2,z:i/2-o/2}),w(k(f,r,o),a,{x:t/2+.05-f/2,y:r/2,z:i/2-o/2}),w(k(1,r-1.25,o),a,{x:h,y:1.25+(r-1.25)/2,z:i/2-o/2}),w(k(1.04,.08,o+.04),l,{x:h,y:1.25,z:i/2-o/2}),w(k(t,s,o),a,{y:s/2,z:-i/2+o/2}),w(k(o,s,i),a,{x:-t/2+o/2,y:s/2}),w(k(o,s,i),a,{x:t/2-o/2,y:s/2}),w(k(t+.2,.12,.25),l,{y:r,z:i/2}),w(k(.06,1.25,.12),l,{x:h-.5,y:.62,z:i/2-o/2}),w(k(.06,1.25,.12),l,{x:h+.5,y:.62,z:i/2-o/2}),w(k(.6,.45,.05),10141904,{x:h<0?t/2-.8:-t/2+.8,y:1,z:i/2+.01}),w(k(t,.08,.9),8018490,{y:.04,z:i/2+.45}),w(k(t+.1,.06,1),n.roof,{y:1.55,z:i/2+.5,rx:.12}),w(k(.08,1.55,.08),l,{x:-t/2+.1,y:.78,z:i/2+.9}),w(k(.08,1.55,.08),l,{x:t/2-.1,y:.78,z:i/2+.9})];n.two&&g.push(w(k(.6,.45,.05),10141904,{x:0,y:2.1,z:i/2+.01}),w(k(t,.08,.5),l,{y:1.95,z:i/2+.25})),n.steeple&&g.push(w(k(1.3,1.6,1.3),a,{y:r+.8,z:i/2-.65}),w(bt(1,1.6,4),n.roof,{y:r+2.4,z:i/2-.65,ry:Math.PI/4}),w(k(.7,.6,1.32),2763312,{y:r+1,z:i/2-.65}),w(bt(.22,.35,8),11569712,{y:r+1.05,z:i/2-.65}),w(k(.08,.6,.08),14200880,{y:r+3.45,z:i/2-.65}),w(k(.36,.08,.08),14200880,{y:r+3.55,z:i/2-.65})),e.add(rt(ue(g)));let x=rt(ue([w(k(t,.12,i),n.roof,{y:s+.06}),w(k(t-.5,.06,i-.5),n.roof,{y:s+.15}),w(k(.25,.5,.25),5917248,{x:t/2-.6,y:s+.35,z:-i/2+.6})]));x.userData.roof=!0,e.add(x),e.userData.roof=x;let v=new mt(new Ii(Math.min(t-.4,3.4),.8),new pn({map:sb(n.name)}));return v.position.set(0,s+.1,i/2+.01),e.add(v),e.position.set(n.x+t/2,0,n.z+i/2),n.door==="N"&&(e.rotation.y=Math.PI),e}function $r(n){let e=rt(ue(n)),t=new vt;return t.add(e),t}function mf(n){return n==="knife"?rt(ue([w(k(.04,.12,.05),4860442,{y:-.06}),w(k(.02,.28,.06),13158608,{y:-.26})])):n==="sabre"?rt(ue([w(k(.04,.12,.05),9071136,{y:-.06}),w(k(.02,.6,.05),14211296,{y:-.42,rz:.08})])):n==="revolver"?rt(ue([w(k(.05,.14,.06),5913120,{y:-.07}),w(k(.06,.08,.3),4210760,{y:-.16,z:.12})])):n==="rifle"?rt(ue([w(k(.06,.1,.35),6965802,{y:-.1,z:-.05}),w(k(.04,.05,.7),3684415,{y:-.08,z:.45})])):null}function gf(n={},e=!1){let t=new vt,i=n.skin??14196848,s=n.shirt??8014378,r=n.pants??3820138,o=n.hat??6965802,a=$r([w(k(.14,.45,.16),r,{y:-.22}),w(k(.15,.1,.22),2759184,{y:-.47,z:.03})]),l=$r([w(k(.14,.45,.16),r,{y:-.22}),w(k(.15,.1,.22),2759184,{y:-.47,z:.03})]);a.position.set(-.09,.5,0),l.position.set(.09,.5,0);let c=[w(k(.36,.45,.2),s,{y:.72}),w(k(.38,.06,.22),2759184,{y:.52})];n.vest&&c.push(w(k(.37,.4,.21),n.vest,{y:.74,sz:1.02,sx:1.01}),w(k(.12,.38,.22),s,{y:.75})),e&&c.push(w(Pe(.2,.28,.3,6),s,{y:.42})),n.badge&&c.push(w(rn(.04),16766720,{x:-.1,y:.82,z:.12})),n.scarf&&c.push(w(k(.22,.1,.05),n.scarf,{y:1,z:.1}));let h=rt(ue(c)),u=$r([w(k(.11,.42,.12),s,{y:-.2}),w(k(.1,.08,.1),i,{y:-.44})]),f=$r([w(k(.11,.42,.12),s,{y:-.2}),w(k(.1,.08,.1),i,{y:-.44})]);u.position.set(-.25,.93,0),f.position.set(.25,.93,0);let g=[w(k(.22,.24,.22),i,{y:1.08}),w(k(.04,.04,.02),2236962,{x:-.05,y:1.1,z:.11}),w(k(.04,.04,.02),2236962,{x:.05,y:1.1,z:.11})];n.beard&&g.push(w(k(.23,.12,.08),14209216,{y:.98,z:.09})),e&&g.push(w(k(.24,.3,.1),6961690,{y:1.02,z:-.1})),n.hat!==null&&g.push(w(Pe(.3,.3,.03,10),o,{y:1.22}),w(Pe(.12,.14,.16,8),o,{y:1.3}));let x=rt(ue(g)),v=new vt;return v.position.set(0,-.44,.04),f.add(v),t.add(a,l,h,u,f,x),{group:t,parts:{legL:a,legR:l,armL:u,armR:f},hand:v,height:1.4}}function xf(n){let e=new vt,t=[];for(let r=0;r<8;r++){let o=rt(ue([w(rn(.07-r*.004),r%2?n.band:n.body,{sx:1.4})]));o.position.set(0,.06,.25-r*.09),e.add(o),t.push(o)}let i=rt(ue([w(k(.12,.07,.15),n.body,{}),w(k(.02,.02,.02),1118481,{x:.04,y:.03,z:.05}),w(k(.02,.02,.02),1118481,{x:-.04,y:.03,z:.05})]));i.position.set(0,.12,.36),e.add(i);let s=rt(ue([w(bt(.04,.12,5),14207136,{rx:-Math.PI/2})]));return s.position.set(0,.15,-.5),e.add(s),{group:e,parts:{segs:t,head:i,rattle:s},height:.4}}function yf(n){let e=new vt;e.add(rt(ue([w(k(.26,.24,.6),n.body,{y:.45}),w(k(.2,.2,.22),n.body,{y:.6,z:.36}),w(k(.1,.1,.18),n.dark,{y:.56,z:.53}),w(bt(.05,.14,4),n.dark,{x:-.07,y:.76,z:.32}),w(bt(.05,.14,4),n.dark,{x:.07,y:.76,z:.32}),w(Pe(.03,.06,.35,5),n.dark,{y:.45,z:-.42,rx:-.9})])));let t=[];for(let[i,s]of[[-.09,.22],[.09,.22],[-.09,-.22],[.09,-.22]]){let r=$r([w(k(.07,.34,.07),n.dark,{y:-.17})]);r.position.set(i,.36,s),e.add(r),t.push(r)}return{group:e,parts:{legs:t},height:.9}}function vf(n){let e=new vt,t=rt(ue([w(rn(.16),n.body,{y:.24,sz:1.3}),w(rn(.09),n.body,{y:.42,z:.14}),w(bt(.03,.08,4),14721056,{y:.41,z:.25,rx:Math.PI/2}),w(k(.03,.06,.08),12591136,{y:.52,z:.14}),w(bt(.1,.18,4),n.dark,{y:.32,z:-.2,rx:-.9})]));e.add(t);let i=[];for(let s of[-.05,.05]){let r=new vt;r.add(rt(ue([w(k(.02,.14,.02),14721056,{y:-.07})]))),r.position.set(s,.14,0),e.add(r),i.push(r)}return{group:e,parts:{legs:i,peck:t},height:.6}}function _f(n){let e=new vt;e.add(rt(ue([w(k(.4,.36,.8),n.body,{y:.62}),w(k(.3,.2,.25),n.dark,{y:.7,z:.1,x:.06,sx:1.4}),w(k(.24,.24,.28),n.body,{y:.78,z:.5}),w(k(.18,.12,.08),14198944,{y:.7,z:.66}),w(Pe(.02,.035,.32,4),15261888,{x:-.22,y:.92,z:.48,rz:1.2}),w(Pe(.02,.035,.32,4),15261888,{x:.22,y:.92,z:.48,rz:-1.2}),w(Pe(.02,.03,.4,4),n.dark,{y:.6,z:-.45,rx:-.3}),w(k(.12,.06,.14),14198944,{y:.44,z:-.1})])));let t=[];for(let[i,s]of[[-.14,.28],[.14,.28],[-.14,-.28],[.14,-.28]]){let r=new vt;r.add(rt(ue([w(k(.1,.46,.1),n.body,{y:-.23}),w(k(.11,.06,.11),2763306,{y:-.45})]))),r.position.set(i,.46,s),e.add(r),t.push(r)}return{group:e,parts:{legs:t},height:1.1}}function bf(n,e=!1){let t=new vt,i=new vt,s=[],r=e?.28:1;t.add(i);for(let a=0;a<9;a++){let l=(.42-a*.03)*r,c=rt(ue([w(Bi(l),a%2?n.dark:n.body,{sz:1.3}),w(bt(l*.35,l*.9,4),n.dark,{y:l*.9}),w(Bi(l*.7),n.belly,{y:-l*.45,sz:1.2})]));c.position.set(0,(.5-a*.02)*r,(.2-a*.42)*r),i.add(c),s.push(c)}let o=rt(ue([w(k(.7,.5,.8),n.body,{}),w(k(.6,.18,.5),n.belly,{y:-.28,z:.15}),w(bt(.06,.32,4),16314592,{x:-.2,y:-.35,z:.42,rx:Math.PI}),w(bt(.06,.32,4),16314592,{x:.2,y:-.35,z:.42,rx:Math.PI}),w(k(.12,.1,.05),16723984,{x:-.22,y:.12,z:.41}),w(k(.12,.1,.05),16723984,{x:.22,y:.12,z:.41}),w(bt(.12,.5,4),n.dark,{y:.4,z:-.2,rx:-.6}),w(bt(.09,.4,4),n.dark,{x:-.3,y:.32,z:-.2,rx:-.6,rz:.5}),w(bt(.09,.4,4),n.dark,{x:.3,y:.32,z:-.2,rx:-.6,rz:-.5})]));return o.scale.setScalar(r),o.position.set(0,1.25*r,.55*r),i.add(o),{group:t,parts:{wyrm:s,head:o,body:i},height:e?.6:2}}function Mf(){let n=new vt,e=new pn({color:16724e3,transparent:!0,opacity:.6,depthWrite:!1}),t=new mt(new rr(.32,.46,10),e);t.rotation.x=-Math.PI/2,n.add(t);let i=new pn({color:2757640,transparent:!0,opacity:.85,depthWrite:!1});for(let s=0;s<6;s++){let r=new mt(new Ii(.06,.5),i);r.rotation.x=-Math.PI/2,r.rotation.z=s*1.05+.3,r.position.y=.01,n.add(r)}return n.userData.mat=e,n}function Nc(n){return[w(k(.95,.7,.55),8016434,{y:.35}),w(k(.06,1.5,.06),4861464,{x:-.45,y:.75,z:-.25}),w(k(.06,1.5,.06),4861464,{x:.45,y:.75,z:-.25}),w(k(1.1,.06,.8),n,{y:1.5,z:.05,rx:.25}),w(k(1.1,.12,.03),15790304,{y:1.42,z:.45})]}function rb(n){return ue(Nc(n))}function Sf(n){let e=new vt;e.add(rt(ue([w(k(.34,.38,.95),n.body,{y:.85}),w(k(.2,.5,.25),n.body,{y:1.15,z:.5,rx:-.5}),w(k(.18,.2,.42),n.body,{y:1.38,z:.75}),w(k(.06,.4,.3),n.dark,{y:1.3,z:.42,rx:-.5}),w(bt(.04,.1,4),n.dark,{x:-.06,y:1.52,z:.62}),w(bt(.04,.1,4),n.dark,{x:.06,y:1.52,z:.62}),w(Pe(.03,.07,.5,5),n.dark,{y:.8,z:-.55,rx:.4})])));let t=[];for(let[i,s]of[[-.11,.36],[.11,.36],[-.11,-.36],[.11,-.36]]){let r=new vt;r.add(rt(ue([w(k(.09,.68,.09),n.body,{y:-.34}),w(k(.1,.07,.1),2763306,{y:-.66})]))),r.position.set(i,.68,s),e.add(r),t.push(r)}return{group:e,parts:{legs:t},height:1.6}}var zc,wa,Uc,k,Pe,bt,rn,Bi,ib,Oc,fr,gn,wf=Ue(()=>{fa();zc=new or({vertexColors:!0,flatShading:!0}),wa=new Ve,Uc=new Map;k=(n,e,t)=>new Ln(n,e,t),Pe=(n,e,t,i=6)=>new Hr(n,e,t,i),bt=(n,e,t=6)=>new ta(n,e,t),rn=(n,e=0)=>new ia(n,e),Bi=n=>new na(n,0);ib={tree_dead:()=>ue([w(Pe(.09,.14,1.4,5),7035461,{y:.7}),w(Pe(.04,.07,.8,4),7035461,{x:.25,y:1.3,rz:-.8}),w(Pe(.04,.07,.7,4),7035461,{x:-.2,y:1.15,rz:.9}),w(Pe(.03,.05,.6,4),6180410,{z:.2,y:1.55,rx:.7})]),tree_mesquite:()=>ue([w(Pe(.1,.16,1,5),5914672,{y:.5}),w(Pe(.06,.08,.7,4),5914672,{x:.2,y:1,rz:-.6}),w(rn(.55),6978106,{y:1.45,sy:.6}),w(rn(.4),8030784,{x:.45,y:1.3,sy:.6}),w(rn(.35),6254389,{x:-.35,y:1.35,z:.2,sy:.6})]),tree_cottonwood:()=>ue([w(Pe(.14,.22,1.8,6),9075304,{y:.9}),w(rn(.75),6986298,{y:2.2}),w(rn(.55),7907392,{x:.5,y:1.9,z:.2}),w(rn(.5),5933621,{x:-.45,y:2,z:-.2}),w(rn(.45),8040520,{y:2.8})]),stump:()=>ue([w(Pe(.16,.2,.3,6),7035461,{y:.15}),w(Pe(.15,.15,.02,6),13150328,{y:.31})]),cactus:()=>ue([w(Pe(.16,.18,1.6,7),4880954,{y:.8}),w(rn(.16),4880954,{y:1.6,sy:.8}),w(Pe(.1,.1,.4,6),4880954,{x:.28,y:.7,rz:Math.PI/2}),w(Pe(.1,.1,.55,6),4880954,{x:.42,y:.98}),w(Pe(.09,.09,.35,6),4880954,{x:-.25,y:.95,rz:Math.PI/2}),w(Pe(.09,.09,.45,6),4880954,{x:-.38,y:1.2})]),boulder:()=>ue([w(Bi(.5),11569760,{y:.3,sy:.7}),w(Bi(.3),10517077,{x:.35,y:.18,z:.2})]),rock_depleted:()=>ue([w(Bi(.45),8024168,{y:.25,sy:.6})]),well:()=>ue([w(Pe(.45,.5,.6,8),9076856,{y:.3}),w(Pe(.38,.38,.05,8),2771562,{y:.55}),w(k(.08,1,.08),7031338,{x:-.4,y:1}),w(k(.08,1,.08),7031338,{x:.4,y:1}),w(bt(.7,.4,4),6961706,{y:1.65,ry:Math.PI/4})]),barrel:()=>ue([w(Pe(.25,.25,.65,8),8018485,{y:.33}),w(Pe(.26,.26,.05,8),3815994,{y:.15}),w(Pe(.26,.26,.05,8),3815994,{y:.5})]),trough:()=>ue([w(k(.9,.35,.45),7031338,{y:.18}),w(k(.8,.02,.35),3828362,{y:.34})]),fence:()=>ue([w(k(.1,.7,.1),8018490,{x:-.45,y:.35}),w(k(.1,.7,.1),8018490,{x:.45,y:.35}),w(k(1,.08,.06),9071173,{y:.55}),w(k(1,.08,.06),9071173,{y:.3})]),tent:()=>ue([w(bt(.9,1.3,4),13154448,{y:.65,ry:Math.PI/4}),w(k(.3,.6,.05),3811866,{y:.3,z:.62})]),skull:()=>ue([w(k(.25,.15,.3),15657176,{y:.08}),w(bt(.05,.3,4),15657176,{x:.2,y:.15,rz:-1.2}),w(bt(.05,.3,4),15657176,{x:-.2,y:.15,rz:1.2})]),signpost:()=>ue([w(k(.1,1.4,.1),7031338,{y:.7}),w(k(.7,.25,.05),10123856,{x:.25,y:1.2}),w(k(.6,.22,.05),10123856,{x:-.2,y:.9,ry:.4})]),campfire:()=>ue([...[0,1,2,3,4,5,6,7].map(n=>w(Bi(.12),6972512,{x:Math.cos(n*.785)*.4,y:.06,z:Math.sin(n*.785)*.4})),w(Pe(.05,.05,.6,4),4861984,{y:.08,rz:Math.PI/2,ry:.5}),w(Pe(.05,.05,.6,4),4861984,{y:.1,rz:Math.PI/2,ry:-.6})]),fire_logs:()=>ue([w(Pe(.05,.05,.5,4),4861984,{y:.06,rz:Math.PI/2,ry:.5}),w(Pe(.05,.05,.5,4),4861984,{y:.08,rz:Math.PI/2,ry:-.6})]),flame:()=>ue([w(bt(.22,.6,5),16742938,{y:.35}),w(bt(.12,.4,5),16764992,{y:.3})])};Oc={};Oc.range=()=>ue([w(k(.85,.6,.6),2763310,{y:.3}),w(k(.9,.05,.65),4868688,{y:.62}),w(k(.35,.25,.02),9058842,{y:.3,z:.31}),w(Pe(.06,.06,.9,6),3815994,{x:.25,y:1.05,z:-.15}),w(Pe(.12,.12,.03,8),1710618,{x:-.2,y:.66}),w(Pe(.12,.12,.03,8),1710618,{x:.15,y:.66,z:.1})]);fr=8016434,gn=4861464;Object.assign(Oc,{bank_counter:()=>ue([w(k(1,.7,.5),fr,{y:.35}),w(k(1.02,.05,.56),10121288,{y:.72}),w(k(.9,.4,.03),13148208,{y:.98,s:1}),...[-.3,0,.3].map(n=>w(k(.03,.4,.04),11569696,{x:n,y:.98}))]),counter:()=>ue([w(k(1,.75,.55),fr,{y:.38}),w(k(1.02,.05,.6),10121288,{y:.77}),w(k(.25,.2,.2),9079440,{x:.25,y:.9})]),bar_counter:()=>ue([w(k(1,.8,.5),gn,{y:.4}),w(k(1.02,.06,.6),9067056,{y:.83}),w(Pe(.04,.04,.22,6),2779690,{x:-.25,y:.97}),w(Pe(.05,.04,.1,6),14209200,{x:.2,y:.91})]),desk:()=>ue([w(k(1,.7,.6),fr,{y:.35}),w(k(.3,.02,.22),15788240,{x:-.2,y:.71,ry:.2}),w(Pe(.05,.05,.1,6),3815994,{x:.3,y:.75})]),vault:()=>ue([w(k(.85,1.1,.75),3816002,{y:.55}),w(Pe(.14,.14,.05,10),13148208,{y:.65,z:.39,rx:Math.PI/2}),w(k(.6,.06,.02),13148208,{y:1,z:.38})]),shelf:()=>ue([w(k(.95,1.5,.35),gn,{y:.75}),...[.35,.8,1.25].map((n,e)=>w(k(.85,.22,.28),[13148256,9058858,5929626][e],{y:n}))]),workbench:()=>ue([w(k(.95,.08,.6),9071170,{y:.7}),...[[-.4,-.25],[.4,-.25],[-.4,.25],[.4,.25]].map(([n,e])=>w(k(.08,.7,.08),gn,{x:n,y:.35,z:e})),w(k(.4,.05,.06),4210760,{y:.77,ry:.4}),w(k(.15,.12,.15),6974064,{x:.3,y:.8})]),gun_rack:()=>ue([w(k(.95,1.3,.15),gn,{y:.65,z:-.3}),...[-.3,-.1,.1,.3].map(n=>w(k(.05,1,.07),3684415,{x:n,y:.75,z:-.18,rz:.06}))]),stall:()=>ue([w(k(.1,.9,1),fr,{y:.45}),w(k(.12,.08,1.02),gn,{y:.92})]),hay:()=>ue([w(k(.8,.4,.5),14205040,{y:.2}),w(k(.7,.38,.48),13415520,{y:.58,ry:.3})]),piano:()=>ue([w(k(.95,1.1,.45),3807760,{y:.55}),w(k(.9,.06,.25),15790320,{y:.72,z:.3}),w(k(.9,.03,.08),1710618,{y:.76,z:.25}),w(k(.4,.4,.3),5909018,{y:.2,z:.7})]),saloon_table:()=>ue([w(Pe(.42,.42,.05,8),2775594,{y:.62}),w(Pe(.06,.1,.6,6),gn,{y:.3}),w(k(.15,.01,.1),15790320,{x:.1,y:.65,ry:.5}),w(Pe(.05,.05,.06,8),13148208,{x:-.15,y:.68})]),jail_bars:()=>ue([w(k(.08,1.6,1),4210760,{x:.45,y:1.55,s:1,sy:.02}),...[-.4,-.2,0,.2,.4].map(n=>w(Pe(.025,.025,1.6,5),4210760,{x:.45,y:.8,z:n})),w(k(.06,.06,1),4210760,{x:.45,y:1.6})]),cot:()=>ue([w(k(.5,.3,.95),gn,{y:.15}),w(k(.45,.08,.9),9079418,{y:.34})]),poster:()=>ue([w(k(.42,.55,.02),15259816,{y:1.15}),w(k(.3,.2,.01),5917242,{y:1.2,z:.012}),w(k(.34,.06,.01),9050650,{y:1.36,z:.012})]),altar:()=>ue([w(k(.9,.8,.55),15789280,{y:.4}),w(k(.95,.04,.6),11542560,{y:.82}),w(k(.06,.45,.04),14200880,{y:1.07}),w(k(.26,.06,.04),14200880,{y:1.17}),w(Pe(.04,.04,.2,6),16314592,{x:.3,y:.94}),w(Pe(.04,.04,.2,6),16314592,{x:-.3,y:.94})]),pew:()=>ue([w(k(.95,.08,.4),fr,{y:.42}),w(k(.95,.5,.06),fr,{y:.7,z:-.2}),w(k(.06,.42,.4),gn,{x:-.44,y:.21}),w(k(.06,.42,.4),gn,{x:.44,y:.21})]),headstone:()=>ue([w(k(.45,.6,.12),10132120,{y:.3}),w(Pe(.225,.225,.12,8,1),10132120,{y:.6,rx:Math.PI/2}),w(k(.5,.06,.8),6982218,{y:.03,z:.4})]),bell:()=>ue([w(k(.1,1.6,.1),gn,{x:-.4,y:.8}),w(k(.1,1.6,.1),gn,{x:.4,y:.8}),w(k(.95,.12,.12),gn,{y:1.6}),w(bt(.25,.4,8),11569712,{y:1.3}),w(rn(.05),5917216,{y:1.08})]),stagecoach:()=>ue([w(k(1.1,.8,1.6),9054746,{y:.95}),w(k(1.15,.08,1.7),3809296,{y:1.38}),w(k(1,.25,.5),5910552,{y:1.5,z:-.4}),w(k(.5,.35,.05),10141904,{x:.56,y:1.05,z:.1,ry:Math.PI/2}),w(k(.5,.35,.05),10141904,{x:-.56,y:1.05,z:.1,ry:Math.PI/2}),w(k(.8,.12,.4),3809296,{y:1.3,z:.95}),...[[-.62,.55],[.62,.55],[-.62,-.55],[.62,-.55]].map(([n,e])=>w(Pe(.42,.42,.08,10),4860432,{x:n,y:.42,z:e,rz:Math.PI/2})),w(k(.05,.05,1.4),gn,{x:-.2,y:.6,z:1.6}),w(k(.05,.05,1.4),gn,{x:.2,y:.6,z:1.6}),...[-.32,.32].flatMap(n=>[w(k(.3,.32,.9),6961690,{x:n,y:.85,z:2}),w(k(.18,.4,.22),6961690,{x:n,y:1.1,z:2.5,rx:-.5}),...[[-.08,1.7],[.08,1.7],[-.08,2.3],[.08,2.3]].map(([e,t])=>w(k(.07,.65,.07),4860432,{x:n+e,y:.33,z:t}))])]),stairs:()=>ue([...[0,1,2,3,4].map(n=>w(k(.9,.22,.2),8016434,{y:.11+n*.22,z:.4-n*.2,sy:1+n*0})),w(k(.9,1.1,.2),4861464,{y:.55,z:-.45}),w(k(.05,1.3,1),4861464,{x:.45,y:.9,rx:.7})]),coop:()=>ue([w(k(.9,.55,.7),10516560,{y:.45}),w(bt(.7,.4,4),6961706,{y:.92,ry:Math.PI/4,sz:.85}),...[[-.38,-.28],[.38,-.28],[-.38,.28],[.38,.28]].map(([n,e])=>w(k(.06,.2,.06),4861464,{x:n,y:.1,z:e})),w(k(.2,.2,.02),2759184,{y:.4,z:.36}),w(k(.1,.03,.4),8016434,{y:.2,z:.55,rx:.5})]),stall_empty:()=>rb(13154448),stall_bakery:()=>ue([...Nc(14198944),w(k(.25,.12,.15),13144136,{x:-.25,y:.82}),w(k(.25,.12,.15),13144136,{x:.05,y:.82}),w(Pe(.14,.14,.12,8),15786224,{x:.3,y:.82})]),stall_fur:()=>ue([...Nc(9083498),w(k(.35,.05,.3),11044442,{x:-.2,y:.79,ry:.3}),w(k(.3,.05,.3),6967360,{x:.22,y:.8,ry:-.2})]),coach_stop:()=>ue([w(k(.1,1.7,.1),gn,{y:.85}),w(k(.8,.35,.05),15259816,{y:1.45,x:.3}),w(k(.6,.06,.04),9050650,{y:1.52,x:.3,z:.03}),w(bt(.08,.15,6),11569712,{x:-.15,y:1.25})])})});function Bc(n,e){for(let t of Aa)t.visible=!n&&t.userData.bid!==e}function Cf(n){Wn=new Br({canvas:n,antialias:!0,powerPreference:"high-performance"}),Wn.setPixelRatio(Math.min(window.devicePixelRatio,window.innerWidth<700?1.75:2)),Wn.outputColorSpace=Lt,Rt=new jo,Rt.background=new Ve(15255704),Rt.fog=new Ko(15255704,22,48),pi=new dn(45,1,.1,200),Rt.add(new oa(16774368,9071168,1.3));let e=new aa(16777215,1.6);e.position.set(-30,50,20),Rt.add(e),ab(),lb(),cb();for(let t of Ni){let i=pf(t);Rt.add(i),i.userData.roof.userData.bid=t.id,Aa.push(i.userData.roof)}for(let t of wn)Wc(t);Af(),window.addEventListener("resize",Af)}function Af(){let n=Wn.domElement.clientWidth||window.innerWidth,e=Wn.domElement.clientHeight||window.innerHeight;Wn.setSize(n,e,!1),pi.aspect=n/e,pi.updateProjectionMatrix()}function ab(){let n=qr(42),e=[],t=[],i=new Ve,s=(o,a)=>[o,gs[a*(nt+1)+o],a];for(let o=0;o<Ut;o++)for(let a=0;a<nt;a++){let l=At[ct(a,o)];i.set(Hc[l]);let c=(n()-.5)*.06;i.offsetHSL(0,0,c);let h=s(a,o),u=s(a+1,o),f=s(a,o+1),g=s(a+1,o+1),x=(v,m,d)=>{e.push(...v,...m,...d);for(let M=0;M<3;M++)t.push(i.r,i.g,i.b)};a+o&1?(x(h,f,u),x(u,f,g)):(x(h,f,g),x(h,g,u))}let r=new mn;r.setAttribute("position",new _t(e,3)),r.setAttribute("color",new _t(t,3)),r.computeVertexNormals(),Zr=new mt(r,zc),Zr.userData.terrain=!0,Rt.add(Zr)}function lb(){let n=new Ii(nt,Ut);n.rotateX(-Math.PI/2),Fc=new mt(n,new or({color:3836592,transparent:!0,opacity:.8})),Fc.position.set(nt/2,-.22,Ut/2),Rt.add(Fc)}function cb(){let n=[];for(let e=0;e<Ut;e++)for(let t=0;t<nt;t++)At[ct(t,e)]===ye.BRIDGE&&(n.push(w(k(1,.1,1),t+e&1?9071170:8018488,{x:t+.5,y:.12,z:e+.5})),Xr(t,e-1)!==ye.BRIDGE&&n.push(w(k(1,.08,.08),5913120,{x:t+.5,y:.6,z:e+.05}),w(k(.08,.5,.08),5913120,{x:t+.5,y:.37,z:e+.05})),Xr(t,e+1)!==ye.BRIDGE&&n.push(w(k(1,.08,.08),5913120,{x:t+.5,y:.6,z:e+.95}),w(k(.08,.5,.08),5913120,{x:t+.5,y:.37,z:e+.95})),n.push(w(k(.15,.9,.15),4861984,{x:t+.5,y:-.3,z:e+.5})));n.length&&Rt.add(rt(ue(n)))}function Gc(n,e){n.userData.entity=e,n.traverse(t=>{t.userData.entity=e}),Ta.push(n)}function Vc(n){let e=Ta.indexOf(n);e>=0&&Ta.splice(e,1)}function Wc(n){let e=new vt;e.position.set(n.x+.5,ys(n.x+.5,n.z+.5),n.z+.5),n.def.water&&(e.position.y=-.16),n.wall&&(e.position.z+=n.wall),e.rotation.y=n.rot||0,n.scale&&e.scale.setScalar(n.scale),n.mesh=e,pr(n),Rt.add(e),(n.def.action||n.def.examine)&&Gc(e,n)}function pr(n){let e=n.mesh;if(!e)return;for(;e.children.length;)e.remove(e.children[0]);let t=n.def.model;if(t==="rock")e.add(rt(n.depleted?_s("rock_depleted"):ff(n.def.ore)));else if(t.startsWith("tree"))e.add(rt(_s(n.depleted?"stump":t)));else if(n.def.steal)e.add(rt(_s(n.depleted?"stall_empty":t)));else if(t==="fishspot"||t==="panspot"){if(t==="panspot")for(let s=0;s<4;s++){let r=new mt(new sa(.05),new pn({color:16764992}));r.position.set(Math.cos(s*1.6)*.25,.05,Math.sin(s*1.6)*.25),r.userData.glint=s,e.add(r)}for(let s=0;s<2;s++){let r=new mt(new rr(.2+s*.15,.26+s*.15,12),new pn({color:16777215,transparent:!0,opacity:.6,side:zn}));r.rotation.x=-Math.PI/2,r.userData.ripple=s,e.add(r)}let i=new mt(new Ln(.9,.4,.9));i.visible=!1,e.add(i)}else if(t==="fire"||t==="campfire"){e.add(rt(_s(t==="fire"?"fire_logs":"campfire")));let i=new mt(_s("flame"),new pn({vertexColors:!0}));i.userData.flame=!0,e.add(i)}else e.add(rt(_s(t)));e.userData.entity&&e.traverse(i=>{i.userData.entity=n})}function Pf(n){n.mesh&&(Rt.remove(n.mesh),Vc(n.mesh),n.mesh=null)}function Lf(n){let e=rt(ue([w(k(.28,.12,.22),n.id==="coins"?16764992:13148256,{y:.06}),w(k(.18,.05,.12),9071152,{y:.14})]));e.position.set(n.x+.5+(Math.random()-.5)*.3,ys(n.x+.5,n.z+.5),n.z+.5+(Math.random()-.5)*.3),n.mesh=e,Rt.add(e),Gc(e,n)}function If(n){n.mesh&&(Rt.remove(n.mesh),Vc(n.mesh),n.mesh=null)}function Ca(n,e){let t;e.model==="snake"?t=xf(e.colors):e.model==="coyote"?t=yf(e.colors):e.model==="chicken"?t=vf(e.colors):e.model==="cow"?t=_f(e.colors):e.model==="wyrm"?t=bf(e.colors,e.small):e.model==="horse"?t=Sf(e.colors):t=gf(e.colors,e.female),n.model=t,n.vx=n.x+.5,n.vz=n.z+.5,n.visQ=[],n.moveSpeed=1/.6,n.yaw=Math.random()*6;let i=new mt(new ea(t.height>1?.3:.25,10),new pn({color:0,transparent:!0,opacity:.25,depthWrite:!1}));if(i.rotation.x=-Math.PI/2,i.position.y=.03,t.group.add(i),n.kind==="npc"){let s=new mt(new Ln(.8,Math.max(.6,t.height),.8));s.position.y=Math.max(.3,t.height/2),s.visible=!1,t.group.add(s),Gc(t.group,n)}e.weapon&&qc(n,e.weapon),Rt.add(t.group)}function qc(n,e){let t=n.model.hand;if(!t)return;for(;t.children.length;)t.remove(t.children[0]);let i=e&&mf(e);i&&(i.rotation.x=Math.PI/2,t.add(i))}function kf(n){return n?n.includes("rifle")?"rifle":n.includes("revolver")||n.includes("shooter")?"revolver":n.includes("sabre")?"sabre":"knife":null}function hb(n,e){let t=n.model;if(!t)return;if(t.group.visible=!n.hidden,n.visQ.length>6){let l=n.visQ[n.visQ.length-1];n.visQ.length=0,n.vx=l.x+.5,n.vz=l.z+.5}let i=!1;if(n.visQ.length){let l=n.visQ[0],c=l.x+.5,h=l.z+.5,u=c-n.vx,f=h-n.vz,g=Math.hypot(u,f),x=n.moveSpeed*e*(g>.9?1.2:1)*(n.visQ.length>3?1.6:1);g<=x?(n.vx=c,n.vz=h,n.visQ.shift()):(n.vx+=u/g*x,n.vz+=f/g*x),g>.01&&(n.targetYaw=Math.atan2(u,f)),i=!0}else if(n.face){let l=n.face,c=l.x+.5-n.vx,h=l.z+.5-n.vz;Math.abs(c)+Math.abs(h)>.01&&(n.targetYaw=Math.atan2(c,h))}if(n.targetYaw!==void 0){let l=n.targetYaw-n.yaw;l=Math.atan2(Math.sin(l),Math.cos(l)),n.yaw+=l*Math.min(1,e*12)}t.group.position.set(n.vx,ys(n.vx,n.vz),n.vz),t.group.rotation.y=n.yaw,n.dying?(n.dyingT=(n.dyingT||0)+e,t.group.rotation.z=Math.min(1.5,n.dyingT*3)):t.group.rotation.z=0;let s=t.parts,r=i?Math.sin(Gt*11)*.7:0,o=n.attackAnimT!==void 0?Kn((Gt-n.attackAnimT)/.4,0,1):1,a=o<1?Math.sin(o*Math.PI):0;if(s.legL){s.legL.rotation.x=r,s.legR.rotation.x=-r,s.armL.rotation.x=-r*.7;let l=r*.7;if(n.anim==="chop"||n.anim==="mine"?l=-1.4+Math.sin(Gt*9)*.9:(n.anim==="fish"||n.anim==="cook")&&(l=-.8+Math.sin(Gt*3)*.1),n.aiming&&(l=-1.5),n.emote&&!i){let c=Gt-n.emote.t,h=n.emote.id;if(c>2.4)n.emote=null;else{let u=Math.sin(c*12);h==="wave"?l=-2.6+u*.4:h==="cheer"||h==="yeehaw"?(l=-2.9,s.armL.rotation.x=-2.9+u*.2,t.group.position.y+=Math.abs(u)*.12):h==="clap"?(l=-1.2+u*.3,s.armL.rotation.x=-1.2-u*.3):h==="tiphat"?l=-2.8:h==="think"?l=-2.2:h==="angry"?(l=-1+u*.6,s.armL.rotation.x=-1-u*.6):h==="dance"?(t.group.rotation.y=n.yaw+c*6,t.group.position.y+=Math.abs(u)*.15,l=-1.5+u,s.armL.rotation.x=-1.5-u):h==="bow"?t.group.rotation.x=Math.sin(Math.min(1,c/1.2)*Math.PI)*.6:h==="yes"||h==="laugh"?t.group.rotation.x=Math.sin(c*10)*.08:h==="no"&&(t.group.rotation.y=n.yaw+Math.sin(c*10)*.25)}}else n.emote&&i&&(n.emote=null);n.emote||(t.group.rotation.x=0),a&&(l=n.aiming?-1.5-a*.4:-2.2*a),s.armR.rotation.x=l}else if(s.segs)s.segs.forEach((l,c)=>{l.position.x=Math.sin(Gt*5+c*.9)*.06*(i?2:1)}),s.head.position.y=.12+a*.15,s.head.position.z=.36+a*.2,s.rattle.rotation.z=Math.sin(Gt*40)*.4;else if(s.wyrm){s.wyrm.forEach((c,h)=>{c.position.x=Math.sin(Gt*3+h*.7)*.12*(i?2:1),c.position.y=c.userData.y0??(c.userData.y0=c.position.y),c.position.y+=Math.sin(Gt*2+h)*.04}),s.head.rotation.x=-a*.5;let l=n.burrowed?-2.4:0;n.sink=(n.sink??0)+(l-(n.sink??0))*Math.min(1,e*5),s.body.position.y=n.sink}else s.legs&&(s.legs.forEach((l,c)=>{l.rotation.x=(c===0||c===3?r:-r)*.8}),s.peck&&(s.peck.rotation.x=i?0:Math.max(0,Math.sin(Gt*3+n.id))*.35),t.group.position.y+=a*.15)}function Df(n,e,t){let i=Mf();i.position.set(e+.5,ys(e+.5,t+.5)+.04,t+.5),Rt.add(i),Ra.set(n,i)}function Xc(n){let e=Ra.get(n);e&&(Rt.remove(e),Ra.delete(n))}function ub(){for(let n of Ra.values())n.userData.mat.opacity=.35+Math.abs(Math.sin(Gt*8))*.5,n.scale.setScalar(1+Math.sin(Gt*8)*.08)}function Uf(n){n.model&&(Rt.remove(n.model.group),Vc(n.model.group))}function Nf(n,e){let t=Math.min(.25,ob.getDelta());Gt+=t;for(let r of n)hb(r,t);ub();for(let r of wn)if(r.mesh)for(let o of r.mesh.children){if(o.userData.flame&&o.scale.set(1+Math.sin(Gt*13+r.x)*.1,1+Math.sin(Gt*17+r.z)*.2,1),o.userData.glint!==void 0){let a=Math.sin(Gt*4+o.userData.glint*1.7);o.visible=a>.2,o.rotation.y=Gt*2}if(o.userData.ripple!==void 0){let a=1+(Gt*.8+o.userData.ripple*.5)%1*.8;o.scale.set(a,a,a),o.material.opacity=.7*(1.8-a)}}e&&(Ke.tx+=(e.vx-Ke.tx)*Math.min(1,t*10),Ke.tz+=(e.vz-Ke.tz)*Math.min(1,t*10));let i=ys(Ke.tx,Ke.tz)+.6,s=Math.cos(Ke.pitch)*Ke.dist;return pi.position.set(Ke.tx+Math.sin(Ke.yaw)*s,i+Math.sin(Ke.pitch)*Ke.dist,Ke.tz+Math.cos(Ke.yaw)*s),pi.lookAt(Ke.tx,i,Ke.tz),Wn.render(Rt,pi),Gt}function mr(n,e){Ke.yaw+=n,Ke.pitch=Kn(Ke.pitch+e,.35,1.35)}function Of(n){zf=n}function Yc(n){Ke.dist=Kn(Ke.dist*n,5,zf())}function Ff(n){Ke.tx=n.vx,Ke.tz=n.vz}function Hi(n,e){let t=Wn.domElement.getBoundingClientRect();Tf.set(n/t.width*2-1,-(e/t.height)*2+1),Ef.setFromCamera(Tf,pi);let i=Ef.intersectObjects([Zr,...Ta],!0),s=null,r=null;for(let o of i)if(!s&&o.object.userData.entity&&!o.object.userData.entity.dead&&(s=o.object.userData.entity),!r&&o.object===Zr&&(r={x:Math.floor(o.point.x),z:Math.floor(o.point.z)}),s&&r)break;return{entity:s,tile:r}}function Pa(n,e,t){Ea.set(n,e,t).project(pi);let i=Wn.domElement.getBoundingClientRect();return{x:(Ea.x+1)/2*i.width,y:(1-Ea.y)/2*i.height,visible:Ea.z<1}}function La(n,e){return Pa(n.vx,ys(n.vx,n.vz)+(e??(n.model?n.model.height+.2:1.5)),n.vz)}function Bf(){Wn.render(Rt,pi);let n=Wn.getContext(),e=n.drawingBufferWidth,t=n.drawingBufferHeight,i=new Uint8Array(4),s=new Set;for(let r=1;r<10;r++)for(let o=1;o<10;o++)n.readPixels(Math.floor(e*r/10),Math.floor(t*o/10),1,1,n.RGBA,n.UNSIGNED_BYTE,i),s.add(i.join(","));return s.size}var Wn,Rt,pi,Ke,Ta,Aa,Rf,Zr,Fc,ob,Gt,Ef,Tf,Hc,Ra,zf,Ea,qn=Ue(()=>{fa();vs();us();wf();gt();Ke={yaw:0,pitch:.95,dist:17,tx:0,tz:0},Ta=[],Aa=[];Rf=()=>Aa.length>0&&Aa.every(n=>!n.visible),ob=new la,Gt=0,Ef=new ca,Tf=new Ye,Hc={[ye.SAND]:14203e3,[ye.ROAD]:11043928,[ye.GRASS]:10135640,[ye.WATER]:6982266,[ye.BRIDGE]:6982266,[ye.ROCK]:11047032,[ye.FLOOR]:8020032,[ye.CLIFF]:12089424,[ye.ARENA]:11565128,[ye.INDOOR]:9071172};Ra=new Map;zf=()=>30;Ea=new U});var $c,Hf=Ue(()=>{$c={rattlesnake:{name:"Rattlesnake",examine:"Listen for the rattle.",model:"snake",colors:{body:10124111,band:4863264},combat:{level:3,hp:5,att:2,str:2,def:2,attBonus:0,defMelee:0,defRanged:0,maxHit:1,speed:4,aggressive:!1},wander:3,respawn:25,drops:{always:[{id:"bones",qty:1}],table:[{id:"snake_skin",qty:[1,1],w:5},{id:"coins",qty:[2,8],w:4},{id:"nothing",w:3}]}},coyote:{name:"Coyote",examine:"A scrawny desert dog with hungry eyes.",model:"coyote",colors:{body:11044442,dark:7033397},combat:{level:9,hp:12,att:7,str:7,def:5,attBonus:4,defMelee:2,defRanged:2,maxHit:2,speed:4,aggressive:!1},wander:5,respawn:30,drops:{always:[{id:"bones",qty:1}],table:[{id:"raw_meat",qty:[1,1],w:6},{id:"coyote_pelt",qty:[1,1],w:4},{id:"coins",qty:[5,15],w:3},{id:"nothing",w:2}]}},bandit:{name:"Bandit",examine:"A desperado. Wanted, probably.",model:"human",colors:{shirt:5906464,pants:2763306,hat:1710618,skin:13011546,scarf:11542560},weapon:"knife",combat:{level:15,hp:20,att:12,str:12,def:10,attBonus:8,defMelee:8,defRanged:4,maxHit:3,speed:4,aggressive:!0,aggroRange:3},wander:4,respawn:40,drops:{always:[{id:"bones",qty:1}],table:[{id:"coins",qty:[10,45],w:8},{id:"bandana",qty:[1,1],w:2},{id:"beans",qty:[1,1],w:3},{id:"old_revolver",qty:[1,1],w:1},{id:"iron_ore",qty:[1,2],w:2},{id:"nothing",w:3}],quest:[{id:"strongbox",quest:"strongbox_showdown",stage:2,chance:.5,unique:!0}]}},chicken:{name:"Prairie chicken",examine:"Yep, definitely a chicken.",model:"chicken",colors:{body:11569754,dark:6965802},combat:{level:1,hp:3,att:1,str:1,def:1,attBonus:-40,defMelee:-30,defRanged:-30,maxHit:1,speed:4,aggressive:!1},wander:3,respawn:15,drops:{always:[{id:"bones",qty:1},{id:"raw_chicken",qty:1},{id:"feather",qty:[5,15]}],table:[{id:"egg",qty:[1,1],w:3},{id:"nothing",w:7}]}},cattle:{name:"Cattle",examine:"A longhorn. Converts grass to beef.",model:"cow",colors:{body:15261904,dark:3811872},combat:{level:2,hp:8,att:1,str:1,def:1,attBonus:-15,defMelee:-21,defRanged:-21,maxHit:1,speed:6,aggressive:!1},wander:4,respawn:20,drops:{always:[{id:"bones",qty:1},{id:"raw_beef",qty:1},{id:"cowhide",qty:1}]}},dust_wyrm:{name:"The Dust Wyrm",examine:"A colossal sand-serpent. The ground trembles when it moves.",model:"wyrm",colors:{body:13148256,dark:9068592,belly:15257760},boss:!0,leash:8,combat:{level:25,hp:60,att:22,str:20,def:16,attBonus:10,defMelee:12,defRanged:8,maxHit:5,speed:5,aggressive:!0,aggroRange:5},special:{type:"burrow",chance:.3,warnTicks:3,minHit:9,maxHit:15,cooldown:4},wander:2,respawn:100,drops:{always:[{id:"bones",qty:1},{id:"coins",qty:[40,120]}],table:[{id:"raw_meat",qty:[2,4],w:10},{id:"coyote_pelt",qty:[2,3],w:8},{id:"bullets",qty:[25,60],w:8},{id:"wyrmscale_vest",qty:[1,1],w:2},{id:"wyrmfang_knife",qty:[1,1],w:2},{id:"nothing",w:2}],rare:[{id:"wyrmling",chance:.02,pet:!0}]}},wyrmling_pet:{name:"Wyrmling",examine:"A baby Dust Wyrm. It follows you everywhere.",model:"wyrm",small:!0,colors:{body:14200944,dark:10121280,belly:15785136},pet:!0,options:["Pick-up"]},dairy_cow:{name:"Dairy cow",examine:"A gentle milk cow. Bring a bucket.",model:"cow",colors:{body:15790314,dark:1710618},options:["Milk"],wander:2},cowpoke:{name:"Cowpoke",examine:"One of the local cowhands.",model:"human",talkFirst:!0,colors:{shirt:10115642,pants:3820138,hat:8018490,skin:14196848},options:["Talk-to"],dialogue:"townsperson",thievable:!0,combat:{level:2,hp:7,att:1,str:1,def:1,attBonus:0,defMelee:0,defRanged:0,maxHit:1,speed:4,aggressive:!1},wander:5,respawn:50,drops:{always:[{id:"bones",qty:1}],table:[{id:"coins",qty:[3,12],w:6},{id:"tobacco_pouch",qty:[1,1],w:2},{id:"bread",qty:[1,1],w:2},{id:"nothing",w:4}]}},cowpoke_b:{name:"Cowpoke",examine:"A trail-weary drover.",model:"human",talkFirst:!0,colors:{shirt:5929562,pants:4864554,hat:3811866,skin:11565136,vest:3811866},options:["Talk-to"],dialogue:"townsperson",thievable:!0,combat:{level:2,hp:7,att:1,str:1,def:1,attBonus:0,defMelee:0,defRanged:0,maxHit:1,speed:4,aggressive:!1},wander:5,respawn:50,drops:{always:[{id:"bones",qty:1}],table:[{id:"coins",qty:[3,12],w:6},{id:"tobacco_pouch",qty:[1,1],w:2},{id:"bread",qty:[1,1],w:2},{id:"nothing",w:4}]}},townswoman:{name:"Townswoman",examine:"A Dry Gulch local going about her day.",model:"human",female:!0,talkFirst:!0,colors:{shirt:5925530,pants:5925530,hat:14207136,skin:15777952},options:["Talk-to"],dialogue:"townsperson",thievable:!0,combat:{level:2,hp:7,att:1,str:1,def:1,attBonus:0,defMelee:0,defRanged:0,maxHit:1,speed:4,aggressive:!1},wander:5,respawn:50,drops:{always:[{id:"bones",qty:1}],table:[{id:"coins",qty:[3,12],w:6},{id:"tobacco_pouch",qty:[1,1],w:2},{id:"bread",qty:[1,1],w:2},{id:"nothing",w:4}]}},townswoman_b:{name:"Townswoman",examine:"She's carrying a basket of laundry.",model:"human",female:!0,talkFirst:!0,colors:{shirt:8010330,pants:8010330,hat:null,skin:13144176},options:["Talk-to"],dialogue:"townsperson",thievable:!0,combat:{level:2,hp:7,att:1,str:1,def:1,attBonus:0,defMelee:0,defRanged:0,maxHit:1,speed:4,aggressive:!1},wander:5,respawn:50,drops:{always:[{id:"bones",qty:1}],table:[{id:"coins",qty:[3,12],w:6},{id:"tobacco_pouch",qty:[1,1],w:2},{id:"bread",qty:[1,1],w:2},{id:"nothing",w:4}]}},baker:{name:"Baker Bess",examine:"Flour to the elbows. Watches her stall like a hawk.",model:"human",female:!0,colors:{shirt:15788248,pants:9071178,hat:15790320,skin:15251608},options:["Talk-to","Trade"],dialogue:"baker",shop:"bakery"},banker:{name:"Banker Hollis",examine:"He counts every coin twice.",model:"human",colors:{shirt:15261896,pants:2763328,hat:3158064,skin:14725264,vest:4206624},options:["Talk-to","Bank"],dialogue:"banker"},storekeeper:{name:"Martha Dunn",examine:"Runs the general store.",model:"human",female:!0,colors:{shirt:6983600,pants:5914672,hat:13152384,skin:15251608},options:["Talk-to","Trade"],dialogue:"storekeeper",shop:"general"},gunsmith:{name:"Gunsmith Abe",examine:"Smells of gun oil and sawdust.",model:"human",colors:{shirt:7031338,pants:3815994,hat:4864554,skin:11565136,vest:2759184},options:["Talk-to","Trade"],dialogue:"gunsmith",shop:"gunsmith"},stablehand:{name:"Ellie May",examine:"Knows every horse in the county.",model:"human",female:!0,colors:{shirt:10504762,pants:4872826,hat:9071162,skin:15777952},options:["Talk-to","Trade"],dialogue:"stablehand",shop:"stable"},sheriff:{name:"Sheriff Calloway",examine:"The law in Dry Gulch.",model:"human",quest:"strongbox_showdown",colors:{shirt:9075290,pants:3813408,hat:2760728,skin:13670512,vest:1710618,badge:!0},options:["Talk-to"],dialogue:"sheriff"},tanner:{name:"Tanner Jed",examine:"Smells like a wet coyote. Knows hides like nobody else.",model:"human",colors:{shirt:9071178,pants:4864554,hat:5914672,skin:13144176,vest:5913120,beard:!0},options:["Talk-to","Trade"],dialogue:"tanner",shop:"tanner"},bartender:{name:"Big Sal",examine:"Runs the Rusty Spur. Nobody argues with Big Sal.",model:"human",female:!0,colors:{shirt:9054794,pants:3811882,hat:null,skin:15249552},options:["Talk-to","Trade"],dialogue:"bartender",shop:"saloon"},pianist:{name:"Ivory Pete",examine:"He only knows three songs, but he plays them with feeling.",model:"human",colors:{shirt:15261904,pants:2763306,hat:2763306,skin:11565136,vest:5904922},options:["Talk-to"],dialogue:"pianist"},patron_miner:{name:"Thirsty Miner",examine:"Covered in rock dust and regret.",model:"human",colors:{shirt:6969930,pants:3816010,hat:5917242,skin:13672576,beard:!0},options:["Talk-to"],dialogue:"patron_miner"},patron_gambler:{name:"Card Sharp Lou",examine:"Has an ace up each sleeve.",model:"human",colors:{shirt:15263976,pants:1710618,hat:1710618,skin:14725264,vest:2767450},options:["Talk-to"],dialogue:"patron_gambler"},hostess:{name:"Miss Lottie",examine:"The saloon hostess, in a velvet gown and feathered hat. She rents the rooms upstairs.",model:"human",female:!0,colors:{shirt:9050666,pants:9050666,hat:2759210,skin:15780008,scarf:1710618},options:["Talk-to"],dialogue:"hostess"},preacher:{name:"Reverend Clay",examine:"A soft-spoken preacher with a hard handshake.",model:"human",colors:{shirt:1710618,pants:1710618,hat:1710618,skin:14198920,scarf:15790320},options:["Talk-to"],dialogue:"preacher"},horse:{name:"Horse",examine:"A sturdy quarter horse. Waiting for a rider.",model:"horse",colors:{body:8014378,dark:2759184},options:["Pet","Groom"],horse:!0},driver:{name:"Driver Hank",examine:"Drives the stagecoach. Has never once been on time.",model:"human",colors:{shirt:5925514,pants:4864554,hat:3811866,skin:13670512,scarf:13148208},options:["Talk-to","Travel"],dialogue:"driver"},townsfolk:{name:"Prospector Pete",examine:"Been digging for gold since '49.",model:"human",colors:{shirt:8022608,pants:4864554,hat:6969914,skin:13672576,beard:!0},options:["Talk-to"],dialogue:"prospector",wander:4}};for(let[n,e]of Object.entries($c))e.id=n});var Ia,Gi,Zc=Ue(()=>{Ia=[{id:"thick_hide",name:"Thick Hide",icon:"\u{1F402}",lvl:1,drain:3,mult:{def:1.05},desc:"+5% Defence"},{id:"true_grit",name:"True Grit",icon:"\u270A",lvl:4,drain:3,mult:{str:1.05},desc:"+5% Strength"},{id:"eagle_eye",name:"Eagle Eye",icon:"\u{1F985}",lvl:7,drain:3,mult:{rng:1.05},desc:"+5% Ranged"},{id:"steady_hand",name:"Steady Hand",icon:"\u270B",lvl:10,drain:3,mult:{att:1.05},desc:"+5% Attack"},{id:"iron_hide",name:"Iron Hide",icon:"\u{1F6E1}\uFE0F",lvl:13,drain:6,mult:{def:1.1},desc:"+10% Defence",excl:"def"},{id:"lawmans_wrath",name:"Lawman's Wrath",icon:"\u2696\uFE0F",lvl:16,drain:6,mult:{att:1.1,str:1.1,rng:1.1},desc:"+10% Attack, Strength and Ranged"}],Gi=Object.fromEntries(Ia.map(n=>[n.id,n]))});function Gf(n){p.prayers=new Set,p.faith=n&&typeof n.faith=="number"?Math.min(n.faith,we("prayer")):we("prayer"),p.faithAcc=0}function gr(n){let e=1;for(let t of p.prayers||[])e*=Gi[t].mult[n]||1;return e}function ka(n){let e=Gi[n];if(p.prayers.has(n)){p.prayers.delete(n),se("faith");return}if(we("prayer")<e.lvl){N(`You need a Faith level of ${e.lvl} to use ${e.name}.`);return}if(p.faith<=0){N("You have run out of Faith points. Pray at the town well to restore them.");return}for(let t of[...p.prayers]){let i=Gi[t];Object.keys(i.mult).some(s=>s in e.mult)&&p.prayers.delete(t)}p.prayers.add(n),se("faith")}function Vf(){if(!p.prayers||!p.prayers.size)return;let n=0;for(let e of p.prayers)n+=Gi[e].drain;for(p.faithAcc+=n;p.faithAcc>=60;)if(p.faithAcc-=60,p.faith=Math.max(0,p.faith-1),p.faith===0){p.prayers.clear(),N("You have run out of Faith points. Pray at the town well to restore them.");break}se("faith")}function Wf(){p.faith=we("prayer"),se("faith"),N("You pray at the well. You feel your faith restored.")}var xr=Ue(()=>{It();Zc();gt()});function Da(n){let e=$c[n.type],t={kind:"npc",id:db++,type:n.type,def:e,x:n.x,z:n.z,sx:n.x,sz:n.z,wander:n.wander??e.wander??0,hp:e.combat?e.combat.hp:10,maxHp:e.combat?e.combat.hp:10,target:null,cooldown:0,dead:!1,respawnAt:0};return p.npcs.push(t),Ca(t,e),t}function qf(n,e){return n>e?1-(e+2)/(2*(n+1)):n/(2*(e+1))}function Jc(){let n=ps();if(ms()==="ranged"){let t=Math.floor(jn("ranged")*gr("rng"))+(p.style==="accurate"?3:0)+8;return Math.floor(.5+t*(n.rstr+64)/640)}let e=Math.floor(jn("strength")*gr("str"))+(p.style==="aggressive"?3:0)+8;return Math.floor(.5+e*(n.str+64)/640)}function fb(){let n=ps();return ms()==="ranged"?(Math.floor(jn("ranged")*gr("rng"))+(p.style==="accurate"?3:0)+8)*(n.rng+64):(Math.floor(jn("attack")*gr("att"))+(p.style==="accurate"?3:0)+8)*(n.att+64)}function Xf(n,e){let t=ga();return t>1?Zt(n.x,n.z,e.x,e.z)<=t&&!(n.x===e.x&&n.z===e.z):Fi(n.x,n.z,e.x,e.z,1)}function Yf(n,e){if(e.burrowed)return;let t=e.def.combat,i=ms()==="ranged";n.cooldown=sf()-(i&&p.style==="rapid"?1:0),n.attackAnimT=performance.now()/1e3,n.attackStamp=!0,n.face=e;let s=Gn(),r=p.specArmed&&s&&s.equip.spec,o=1,a=1,l=1;r&&(p.specArmed=!1,p.spec>=r.cost?(p.spec-=r.cost,o=r.acc||1,a=r.dmg||1,l=r.hits||1,N(`You unleash ${r.name}!`,"combat")):N("You don't have enough special attack energy."),se("spec")),se("attackfx",n,e,i);for(let c=0;c<l&&e.hp>0;c++){let u=Yt()<qf(Math.floor(fb()*o),pb(t,i))?Math.min(e.hp,Math.floor(nn(0,Jc())*a)):0;if(e.hp-=u,se("hit",e,u),u>0){let f=i?"ranged":p.style==="aggressive"?"strength":p.style==="defensive"?"defence":"attack";Ft(f,u*4),Ft("hitpoints",Math.round(u*4/3*10)/10)}}e.target||(e.target=n,e.cooldown=Math.max(e.cooldown,2)),e.hp<=0&&xb(e)}function xb(n){n.dead=!0,n.dying=!0,n.target=null,n.respawnAt=p.tick+n.def.respawn,n.hideAt=p.tick+2,p.player.action&&p.player.action.ent===n&&(p.player.action=null),n.special&&(Xc(n.id),n.special=null,n.burrowed=!1),yb(n),n.def.boss&&(p.kc=p.kc||{},p.kc[n.type]=(p.kc[n.type]||0)+1,N(`Your ${n.def.name.replace(/^The /,"")} kill count is: ${p.kc[n.type]}.`,"quest")),se("npcdeath",n)}function yb(n){let e=n.def.drops;if(!e)return;let t=[...e.always||[]].map(i=>({id:i.id,qty:Array.isArray(i.qty)?nn(i.qty[0],i.qty[1]):i.qty}));if(e.table){let i=e.table.reduce((r,o)=>r+o.w,0),s=Yt()*i;for(let r of e.table)if(s-=r.w,s<0){r.id!=="nothing"&&t.push({id:r.id,qty:nn(r.qty[0],r.qty[1])});break}}for(let i of e.quest||[])Vn(i.quest)===i.stage&&(i.unique&&(Bt(i.id)||p.ground.some(s=>s.id===i.id)||p.bank.some(s=>s.id===i.id))||Yt()<i.chance&&t.push({id:i.id,qty:1}));for(let i of e.rare||[])Yt()>=(p.forceRare?1:i.chance)||(i.pet?se("petdrop",i.id,n):t.push({id:i.id,qty:1}));for(let i of t)bs(i.id,i.qty,n.x,n.z)}function bs(n,e,t,i,s=300){let r={kind:"ground",id:n,qty:e,x:t,z:i,despawnAt:p.tick+s};return p.ground.push(r),Lf(r),se("ground"),r}function $f(n){if(p.ground.includes(n)){if(!Ht(n.id,xe[n.id].stack?1:n.qty)){N("You don't have enough inventory space to hold that item.");return}it(n.id,n.qty),Kc(n),se("pickup",n.id)}}function Kc(n){p.ground.splice(p.ground.indexOf(n),1),If(n),se("ground")}function Zf(n){let e=p.player,t=n.def.combat;if(n.dead){n.hideAt&&p.tick>=n.hideAt&&(n.hidden=!0,n.hideAt=0),p.tick>=n.respawnAt&&(n.dead=!1,n.dying=!1,n.dyingT=0,n.hidden=!1,n.hp=n.maxHp,n.x=n.sx,n.z=n.sz,n.visQ.push({x:n.x,z:n.z}),n.visQ.length=0,n.vx=n.x+.5,n.vz=n.z+.5);return}if(n.cooldown>0&&n.cooldown--,t&&!n.target&&t.aggressive&&!e.dead&&Zt(n.x,n.z,e.x,e.z)<=(t.aggroRange||3)&&ds()<=t.level*2&&(n.target=e,N(`${/^The /.test(n.def.name)?n.def.name:"The "+n.def.name.toLowerCase()} attacks you!`,"combat")),n.def.pet){_b(n);return}if(n.special){vb(n);return}if(n.target){let i=n.target;if(n.def.leash&&Zt(n.x,n.z,n.sx,n.sz)>n.def.leash){n.target=null;let r=Yr(n.x,n.z,n.sx,n.sz);r&&Jr(n,r.x,r.z);return}let s=n.def.special;if(s&&n.cooldown<=0&&(n.specCd||0)<=0&&Fi(n.x,n.z,i.x,i.z,1)&&Yt()<s.chance){n.burrowed=!0,n.specCd=s.cooldown,n.cooldown=t.speed,n.special={x:i.x,z:i.z,at:p.tick+s.warnTicks},Df(n.id,i.x,i.z),N(`${n.def.name} burrows into the sand! The ground cracks beneath you - move!`,"combat");return}if(i.dead||Zt(n.x,n.z,n.sx,n.sz)>14||Zt(n.x,n.z,i.x,i.z)>12){n.target=null;return}if(n.face=i,Fi(n.x,n.z,i.x,i.z,1))n.cooldown<=0&&bb(n,i);else if(n.x===i.x&&n.z===i.z){for(let[r,o]of[[1,0],[-1,0],[0,1],[0,-1]])if(dr(n.x,n.z,r,o)){Jr(n,n.x+r,n.z+o);break}}else{let r=Yr(n.x,n.z,i.x,i.z);r&&Jr(n,r.x,r.z)}return}if(n.face=null,n.wander&&Yt()<.12){let i=n.sx+nn(-n.wander,n.wander),s=n.sz+nn(-n.wander,n.wander),r=Yr(n.x,n.z,i,s);r&&!$t(r.x,r.z)&&Jr(n,r.x,r.z)}}function Jr(n,e,t){n.x=e,n.z=t,n.moveSpeed=1/.6,n.visQ.push({x:e,z:t})}function vb(n){let e=n.def.special,t=p.player,i=n.special;if(!(p.tick<i.at)){if(Xc(n.id),!t.dead&&t.x===i.x&&t.z===i.z){let s=Math.min(t.hp,nn(e.minHit,e.maxHit));t.hp-=s,se("hit",t,s),se("hp"),N(`${n.def.name} erupts beneath you!`,"combat"),t.hp<=0&&Jf()}else N(`You leap clear as ${n.def.name} erupts from the sand!`,"combat");!$t(i.x,i.z)&&Zt(i.x,i.z,n.sx,n.sz)<=(n.def.leash||8)&&(n.x=i.x,n.z=i.z,n.visQ.length=0,n.vx=n.x+.5,n.vz=n.z+.5),n.burrowed=!1,n.special=null,n.cooldown=2}}function _b(n){let e=p.player;if(Zt(n.x,n.z,e.x,e.z)>10){n.x=e.x,n.z=e.z,n.visQ.length=0,n.vx=n.x+.5,n.vz=n.z+.5;return}for(let t=0;t<2&&Zt(n.x,n.z,e.x,e.z)>1;t++){let i=Yr(n.x,n.z,e.x,e.z);if(!i)break;Jr(n,i.x,i.z),n.moveSpeed=2/.6}}function bb(n,e){let t=n.def.combat;n.cooldown=t.speed,n.specCd&&n.specCd--,n.attackAnimT=performance.now()/1e3;let s=Yt()<qf(mb(t),gb())?Math.min(e.hp,nn(0,t.maxHit)):0;e.hp-=s,se("hit",e,s),se("hp"),p.autoRetaliate!==!1&&!e.action&&!e.path.length&&(e.action={type:"attack",ent:n}),e.hp<=0&&Jf()}function Jf(){let n=p.player;N("Oh dear, you are dead!","combat"),se("death");for(let e of p.npcs)e.target===n&&(e.target=null);n.hp=we("hitpoints"),n.x=Sn.x,n.z=Sn.z,n.path=[],n.action=null,n.anim=null,n.visQ.length=0,n.vx=n.x+.5,n.vz=n.z+.5,N("You wake up in Dry Gulch. Your belongings are safe (for now).","system"),se("hp")}var db,pb,mb,gb,yr=Ue(()=>{It();Hf();In();gt();vs();xr();qn();db=1;pb=(n,e)=>(n.def+9)*((e?n.defRanged:n.defMelee)+64),mb=n=>(n.att+9)*(n.attBonus+64),gb=()=>(Math.floor(jn("defence")*gr("def"))+(p.style==="defensive"?3:0)+8)*(ps().def+64)});function Kf(n,e){let t=e.def.gather;return e.depleted?(N(e.def.model==="rock"?"There is currently no ore available in this rock.":"This tree has been cut down."),!1):we(t.skill)<t.level?(N(`You need a ${ki[t.skill].name} level of ${t.level} to do that.`),!1):Bt(t.tool)?Ht(t.items[0].id)?t.bait&&!Bt(t.bait)?(N(`You need ${xe[t.bait].name.toLowerCase()} to fish here.`),!1):(N(t.verb),n.anim=t.skill==="woodcutting"?"chop":t.skill==="mining"?"mine":"fish",n.face=e,n.action.timer=t.ticks,n.action.started=!0,!0):(N("Your inventory is too full to hold any more."),!1):(N(`You need a ${xe[t.tool].name.toLowerCase()} to do that.`),!1)}function jf(n,e){let t=e.def.gather;if(e.depleted||!Bt(t.tool))return Xn(n);if(--n.action.timer>0)return;n.action.timer=t.ticks;let i=we(t.skill),s=t.items.filter(r=>(r.lvl||t.level)<=i).reverse();for(let r of s){let o=r.lvl||t.level,a=Kn(.32+(i-o)*.018,.1,.92);if(!(Yt()>=a)){if(!Ht(r.id))return N("Your inventory is too full to hold any more."),Xn(n);if(t.bait){if(!Bt(t.bait))return N("You have run out of bait."),Xn(n);sn(t.bait,1)}if(it(r.id,Array.isArray(r.qty)?nn(r.qty[0],r.qty[1]):1),Ft(t.skill,r.xp||t.xp),N(t.skill==="fishing"?`You catch ${xe[r.id].name.replace("Raw ","a ").toLowerCase()}.`:t.got),t.deplete&&Yt()<t.deplete)return e.depleted=!0,e.respawnAt=p.tick+t.respawn,pr(e),Xn(n);if(!Ht(r.id))return N("Your inventory is too full to hold any more."),Xn(n);break}}}function Xn(n){n.action=null,n.anim=null}function Qf(n){n.depleted&&p.tick>=n.respawnAt&&(n.depleted=!1,pr(n)),n.expiresAt&&p.tick>=n.expiresAt&&(Pf(n),cf(n),p.player.action&&p.player.action.ent===n&&Xn(p.player))}function jc(n,e){let t=xe[e].burn;if(!Bt("tinderbox")){N("You need a tinderbox to light a fire.");return}if(we("firemaking")<t.lvl){N(`You need a Firemaking level of ${t.lvl} to burn these logs.`);return}if(fi(n.x,n.z)){N("You can't light a fire here.");return}n.path=[],n.action={type:"firemake",item:e,timer:2},n.anim="cook",N("You attempt to light the logs.")}function ep(n){let e=n.action;if(!Bt(e.item))return Xn(n);if(--e.timer>0)return;e.timer=2;let t=Kn(.45+we("firemaking")*.012,.45,1);if(Yt()>=t)return;if(fi(n.x,n.z))return N("You can't light a fire here."),Xn(n);sn(e.item,1);let i=Oi("fire",n.x,n.z,{expiresAt:p.tick+nn(100,180)});Wc(i),Ft("firemaking",xe[e.item].burn.xp),N("The fire catches and the logs begin to burn."),Xn(n);for(let[s,r]of[[-1,0],[1,0],[0,-1],[0,1]])if(!$t(n.x+s,n.z+r)){n.path=[{x:n.x+s,z:n.z+r}];break}n.face=i}function Mb(){let n=p.inv.find(e=>e&&xe[e.id].cook);return n?n.id:null}function tp(n,e,t){if(t=t||Mb(),!t)return N("You have nothing to cook."),!1;let i=xe[t].cook;return i?we("cooking")<i.lvl?(N(`You need a Cooking level of ${i.lvl} to cook this.`),!1):i.rangeOnly&&!e.def.range?(N("You need a proper range to bake this. Try the one in the saloon."),!1):(n.action={type:"cook",ent:e,item:t,timer:1,started:!0},n.anim="cook",n.face=e,!0):(N("You can't cook that."),!1)}function np(n){let e=n.action;if(!e.ent.mesh)return Xn(n);if(--e.timer>0)return;e.timer=4;let t=p.inv.findIndex(o=>o&&o.id===e.item);if(t<0)return N("You have run out of "+xe[e.item].name.replace("Raw ","").toLowerCase()+" to cook."),Xn(n);let i=xe[e.item].cook,s=we("cooking"),r=(s>=i.stop?0:.55*(i.stop-s)/(i.stop-i.lvl+1))*(e.ent.def.range?.75:1);fs(t),Yt()<r?(p.inv[t]={id:i.burnt,qty:1},N(`You accidentally burn the ${xe[i.to].name.toLowerCase()}.`)):(p.inv[t]={id:i.to,qty:1},Ft("cooking",i.xp),N(`You successfully cook the ${xe[i.to].name.toLowerCase().replace(/^cooked /,"")}.`)),se("inv")}var Qc=Ue(()=>{It();In();Di();gt();vs();qn()});var Ua,ip=Ue(()=>{Ua=[{id:"drygulch",name:"Dry Gulch",x:61,z:49,fare:10},{id:"copperhills",name:"Copper Hills",x:51,z:25,fare:15},{id:"river",name:"Rattler River crossing (east bank)",x:78,z:49,fare:10},{id:"wyrm",name:"Dust Wyrm lair (edge)",x:77,z:72,fare:25}]});var Na,sp,eh=Ue(()=>{Na={general:{name:"Dry Gulch General Store",sell:.4,stock:["hatchet","pickaxe","small_net","fishing_rod","tinderbox","bread","beans","cowboy_hat","leather_vest","chaps","boots","poncho","leather_gloves","bullets","gold_pan","bait","bucket","flour"]},gunsmith:{name:"Abe's Guns & Blades",sell:.5,stock:["rusty_knife","bowie_knife","cavalry_sabre","old_revolver","six_shooter","lever_rifle","hide_duster","buckler","lucky_ring"]},bakery:{name:"Bess's Bakery",sell:.4,stock:["bread","cake","flour"]},saloon:{name:"The Rusty Spur Saloon",sell:.4,stock:["whiskey","sarsaparilla","stew"]},stable:{name:"Ellie's Stable Supplies",sell:.4,stock:["horse_brush","carrot"]},tanner:{name:"Jed's Tannery",sell:.85,accepts:["coyote_pelt","cowhide","snake_skin","leather","feather"],stock:["leather"]}},sp={cowhide:{to:"leather",fee:1},coyote_pelt:{to:"leather",fee:1}}});function Oa(n,e,t,i){n.addEventListener("pointerdown",r=>{if(r.button===2)return;let o=r.target.closest(e);!o||!n.contains(o)||t(o)==null||!o.innerHTML.trim()||(ht={container:n,el:o,from:t(o),x:r.clientX,y:r.clientY,id:r.pointerId,active:!1,ghost:null,over:null,itemSelector:e,indexOf:t,onDrop:i})}),n.addEventListener("pointermove",r=>{if(!ht||ht.container!==n||r.pointerId!==ht.id)return;if(!ht.active){if(Math.hypot(r.clientX-ht.x,r.clientY-ht.y)<9)return;ht.active=!0;let l=document.getElementById("context-menu");l&&(l.hidden=!0);try{n.setPointerCapture(r.pointerId)}catch{}let c=ht.el.cloneNode(!0),h=ht.el.getBoundingClientRect();c.classList.add("drag-ghost"),c.style.width=h.width+"px",c.style.height=h.height+"px",document.body.appendChild(c),ht.ghost=c,ht.el.classList.add("drag-src")}r.preventDefault(),ht.ghost.style.left=r.clientX+"px",ht.ghost.style.top=r.clientY+"px";let o=document.elementFromPoint(r.clientX,r.clientY),a=o&&o.closest(e);ht.over&&ht.over!==a&&ht.over.classList.remove("drag-over"),ht.over=a&&n.contains(a)?a:null,ht.over&&ht.over.classList.add("drag-over")});let s=r=>{if(!ht||ht.container!==n||r.pointerId!==ht.id)return;let o=ht;if(ht=null,!o.active)return;if(o.ghost.remove(),o.el.classList.remove("drag-src"),o.over&&o.over.classList.remove("drag-over"),r.type==="pointerup"&&o.over){let l=o.indexOf(o.over);l!=null&&l!==o.from&&o.onDrop(o.from,l)}let a=l=>{l.stopPropagation(),l.preventDefault()};window.addEventListener("click",a,{capture:!0,once:!0}),setTimeout(()=>window.removeEventListener("click",a,{capture:!0}),50)};n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s)}var ht,za,th=Ue(()=>{ht=null,za=()=>!!(ht&&ht.active)});var oh={};nl(oh,{buyItem:()=>op,closeTrade:()=>fp,deposit:()=>sh,depositWorn:()=>up,hideDialogue:()=>ws,hideMenu:()=>Ms,iconHtml:()=>Yn,initModals:()=>rh,menuOpen:()=>Ba,openBank:()=>Sr,openShop:()=>Mr,sellSlot:()=>ap,showDialogue:()=>Ss,showInfo:()=>br,showMenu:()=>_r,showQuestComplete:()=>Ha,withdraw:()=>dp});function _r(n,e,t,i){let s=ot("context-menu");s.innerHTML=`<div class="cm-header">${et(t||"Choose Option")}</div>`;for(let a of[...i,{label:"Cancel",fn:()=>{}}]){let l=document.createElement("button");l.innerHTML=a.html||et(a.label),l.addEventListener("pointerup",c=>{c.stopPropagation(),Ms(),a.fn()}),s.appendChild(l)}s.hidden=!1;let r=s.getBoundingClientRect(),o=ot("game-root").getBoundingClientRect();s.style.left=Math.max(2,Math.min(n-r.width/2,o.width-r.width-2))+"px",s.style.top=Math.max(2,Math.min(e-8,o.height-r.height-2))+"px"}function Ms(){ot("context-menu").hidden=!0}function Ss(n,e,t){ot("dialogue").hidden=!1,ot("dialogue-name").textContent=n,ot("dialogue-text").textContent=e;let i=ot("dialogue-options");i.innerHTML="";for(let s of t){let r=document.createElement("button");r.textContent=s.text,s.cont&&(r.className="cont"),r.addEventListener("click",o=>{o.stopPropagation(),s.fn()}),i.appendChild(r)}}function ws(){ot("dialogue").hidden=!0}function br(n,e){p.ui.open="info",ot("dialogue").hidden=!1,ot("dialogue-name").textContent=n,ot("dialogue-text").innerHTML=e;let t=ot("dialogue-options");t.innerHTML="";let i=document.createElement("button");i.textContent="Close",i.className="cont",i.addEventListener("click",s=>{s.stopPropagation(),ws(),p.ui.open=null}),t.appendChild(i)}function Ha(n){br("Quest Complete!",`<div class="qc-title">You have completed ${et(n.name)}!</div><div>Rewards:</div><ul class="qc-list">${n.rewards.map(e=>`<li>${et(e)}</li>`).join("")}</ul>`)}function Mr(n){Kr=n,p.ui.open="shop",ot("trade-modal").hidden=!1,nh()}function nh(){let n=Na[Kr];ot("trade-title").innerHTML=`${et(n.name)} ${rp(vr,[1,5,10],"sq")}`,ot("trade-left").innerHTML=`<div class="tl-head">Buy ${vr} (tap)</div>`+n.stock.map(t=>{let i=xe[t],s=i.equip&&i.equip.req?Object.entries(i.equip.req).map(([r,o])=>`${r} ${o}`).join(", "):"";return`<div class="trade-item" data-buy="${t}">${Yn(t)}<span class="ti-name">${et(i.name)}${s?`<small> (req ${et(s)})</small>`:""}</span><span class="ti-price">${Jt(i.value)} gp</span></div>`}).join("");let e=p.inv.map((t,i)=>t?{...t,i}:null).filter(Boolean).filter(t=>!xe[t.id].quest&&(!n.accepts||n.accepts.includes(t.id)));ot("trade-right").innerHTML=`<div class="tl-head">Sell ${vr} (tap) - you have ${Jt(p.coins)} gp</div>`+(e.map(t=>{let i=xe[t.id];return`<div class="trade-item" data-sell="${t.i}">${Yn(t.id)}<span class="ti-name">${et(i.name)}${t.qty>1?" x"+t.qty:""}</span><span class="ti-price">${Jt(Math.floor(i.value*n.sell))} gp</span></div>`}).join("")||'<div class="empty">Nothing to sell.</div>')}function op(n,e=1){let t=xe[n],i=0;for(let s=0;s<e;s++){if(p.coins<t.value){N("You don't have enough coins.");break}if(!Ht(n)){N("You don't have enough inventory space.");break}p.coins-=t.value,it(n,1,!0),i++}return i&&(se("inv"),se("coins"),N(`You buy ${i} x ${t.name.toLowerCase()} for ${Jt(t.value*i)} coins.`)),i>0}function ap(n,e=1){let t=p.inv[n];if(!t)return!1;let i=xe[t.id],s=t.id;if(i.quest)return N("You can't sell that."),!1;let r=Na[Kr];if(r.accepts&&!r.accepts.includes(s))return N(`${r.name} won't buy that.`),!1;let o=Math.min(e,Qn(s)),a=Math.floor(i.value*Na[Kr].sell);return sn(s,o),p.coins+=a*o,se("coins"),N(`You sell ${o} x ${i.name.toLowerCase()} for ${Jt(a*o)} coins.`),!0}function Sr(){p.ui.open="bank",ot("trade-modal").hidden=!1,Fa="",cp()}function cp(){ot("trade-title").innerHTML=`Bank of Dry Gulch
    <div class="bank-tools">${rp(Vi,[1,5,10,"x","all"],"bq")}<input id="bank-x" type="number" min="1" max="9999" value="${p.bankX||10}" title="X amount">
    <input id="bank-search" placeholder="Search" value="${et(Fa)}">
    <button id="bank-depinv" class="small-btn">Deposit inventory</button><button id="bank-depworn" class="small-btn">Deposit worn</button></div>`,ot("bank-depinv").onclick=e=>{e.stopPropagation(),p.inv.forEach((t,i)=>t&&sh(i,1/0))},ot("bank-depworn").onclick=e=>{e.stopPropagation(),up()};let n=ot("bank-search");n.oninput=()=>{Fa=n.value,ih()},ot("bank-x").onchange=e=>{p.bankX=Math.max(1,parseInt(e.target.value)||1)},ih()}function ih(){let n=Vi==="all"?"All":Vi==="x"?p.bankX||10:Vi;ot("trade-left").innerHTML=`<div class="tl-head">Inventory (tap: deposit ${n})</div>`+(p.inv.map((i,s)=>i?`<div class="trade-item" data-dep="${s}">${Yn(i.id)}<span class="ti-name">${et(xe[i.id].name)}${i.qty>1?" x"+i.qty:""}</span></div>`:"").join("")||'<div class="empty">Empty.</div>');let e=Fa.trim().toLowerCase(),t=p.bank.map((i,s)=>({...i,i:s})).filter(i=>!e||xe[i.id].name.toLowerCase().includes(e));ot("trade-right").innerHTML=`<div class="tl-head">Bank (tap: withdraw ${n}) - ${p.bank.length} items</div>`+(t.map(i=>`<div class="trade-item" data-wd="${i.i}">${Yn(i.id)}<span class="ti-name">${et(xe[i.id].name)}</span><span class="ti-price">${Jt(i.qty)}</span></div>`).join("")||`<div class="empty">${e?"No matches.":"Your bank is empty."}</div>`)}function hp(n,e){let t=p.bank.find(i=>i.id===n);t?t.qty+=e:p.bank.push({id:n,qty:e})}function sh(n,e=lp()){let t=p.inv[n];if(!t)return;let i=t.id,s=Math.min(e,Qn(i));sn(i,s),hp(i,s),se("bank")}function up(){let n=Object.keys(p.equip);if(!n.length){N("You have nothing equipped.");return}for(let e of n)hp(p.equip[e],1),delete p.equip[e];se("equip"),se("bank")}function dp(n,e=lp()){let t=p.bank[n];if(!t)return;let i=0;for(;i<e&&t.qty>0&&Ht(t.id);){if(xe[t.id].stack){let s=Math.min(e,t.qty);it(t.id,s,!0),t.qty-=s,i+=s;break}it(t.id,1,!0),t.qty--,i++}i||N("You don't have enough inventory space."),t.qty<=0&&p.bank.splice(n,1),se("inv"),se("bank")}function fp(){ot("trade-modal").hidden=!0,(p.ui.open==="shop"||p.ui.open==="bank")&&(p.ui.open=null),Kr=null}function rh(){Oa(ot("trade-right"),"[data-wd]",e=>+e.dataset.wd,(e,t)=>{if(p.ui.open!=="bank")return;let[i]=p.bank.splice(e,1);p.bank.splice(t,0,i),se("bank")}),ot("trade-close").addEventListener("click",fp),ot("trade-modal").addEventListener("click",e=>{let t=e.target.closest("[data-sq],[data-bq]");if(t){t.dataset.sq?(vr=+t.dataset.sq,nh()):(Vi=isNaN(+t.dataset.bq)?t.dataset.bq:+t.dataset.bq,cp());return}let i=e.target.closest("[data-buy],[data-sell],[data-dep],[data-wd]");i&&(i.dataset.buy?op(i.dataset.buy,vr):i.dataset.sell?ap(+i.dataset.sell,vr):i.dataset.dep?sh(+i.dataset.dep):i.dataset.wd&&dp(+i.dataset.wd))});let n=()=>{p.ui.open==="shop"?nh():p.ui.open==="bank"&&ih()};Qe("inv",n),Qe("coins",n),Qe("bank",n)}var ot,Yn,Ba,Kr,vr,rp,Vi,Fa,lp,ei=Ue(()=>{It();In();eh();gt();th();ot=n=>document.getElementById(n),Yn=(n,e="")=>{let t=xe[n];return`<span class="icon ${e}" style="${t.tint?`filter:${t.tint}`:""}">${t.icon}</span>`};Ba=()=>!ot("context-menu").hidden;Kr=null,vr=1;rp=(n,e,t)=>`<div class="qty-bar">${e.map(i=>`<button class="qbtn ${n===i?"on":""}" data-${t}="${i}">${i==="all"?"All":i}</button>`).join("")}</div>`;Vi=1,Fa="";lp=()=>Vi==="x"?Math.max(1,p.bankX||10):Vi==="all"?1/0:Vi});function Sb(n,e){return Ua.reduce((t,i)=>!t||Zt(n,e,i.x,i.z)<Zt(n,e,t.x,t.z)?i:t,null)}function jr(){let n=p.player,e=Sb(n.x,n.z);p.ui.open="dialogue";let t=()=>{ws(),p.ui.open=null};Ss("Stagecoach",`Where to, partner? You're at the ${e.name} stop. You have ${Jt(p.coins)} coins.`,[...Ua.filter(i=>i!==e).map(i=>({text:`${i.name} (${i.fare} coins)`,fn:()=>{t(),wb(i.id)}})),{text:"Never mind.",fn:t}])}function wb(n){let e=Ua.find(s=>s.id===n),t=p.player;if(!e)return!1;if(p.npcs.some(s=>s.target===t&&!s.dead))return N("You can't board the stagecoach while you're in combat!"),!1;if(p.coins<e.fare)return N(`The fare is ${e.fare} coins. You can't afford it.`),!1;p.coins-=e.fare,se("coins"),t.path=[],t.action=null,t.anim=null;let i=document.getElementById("fade");return i.classList.add("on"),p.traveling=!0,setTimeout(()=>{t.x=e.x,t.z=e.z,t.visQ.length=0,t.vx=t.x+.5,t.vz=t.z+.5,se("teleport"),N(`The stagecoach rattles along the trail... You arrive at ${e.name}.`),setTimeout(()=>{i.classList.remove("on"),p.traveling=!1},350)},450),!0}var ah=Ue(()=>{It();ip();gt();ei()});function mp(n){p.settings={...pp,...n&&n.settings||{}}}function lh(n,e){p.settings[n]=e,se("settings",n,e)}var pp,Nt,wr=Ue(()=>{It();gt();pp={hideRoofs:!1,brightness:1,musicVolume:.4,sfxVolume:.6,sound:!0,menuHints:!0,xpDrops:!0,minimap:!0,chatFilter:!1,levelUpPopups:!0,shiftDrop:!0,acceptAid:!1,runDefault:!0,maxZoom:30,autosaveNotice:!0};Nt=()=>p.settings||pp});var gp={};nl(gp,{drawMinimap:()=>dh,initOverlay:()=>hh,overhead:()=>Kt,updateOverlay:()=>uh});function hh(){Qe("hit",(n,e)=>{let t=document.createElement("div");t.className="hitsplat "+(e>0?"damage":"miss"),t.textContent=e,Wi("hitsplats").appendChild(t),Qr.push({el:t,a:n,born:performance.now(),off:Qr.filter(i=>i.a===n).length%3*14}),n.lastHit=performance.now()}),Qe("xp",(n,e)=>{if(!Nt().xpDrops)return;let t=document.createElement("div");t.className="xp-drop",t.innerHTML=`<span>${ki[n].icon}</span> +${Math.round(e*10)/10}`,Wi("xp-drops").appendChild(t),setTimeout(()=>t.remove(),1500)}),Wi("minimap").addEventListener("click",Tb),Eb()}function Kt(n,e){let t=document.createElement("div");t.className="overhead",t.textContent=e,Wi("hitsplats").appendChild(t),Ga.push({el:t,a:n,born:performance.now()})}function uh(n){let e=performance.now();for(let t=Qr.length-1;t>=0;t--){let i=Qr[t];if(e-i.born>1e3){i.el.remove(),Qr.splice(t,1);continue}let s=La(i.a,i.a.model?i.a.model.height*.6:.8);i.el.style.left=s.x+"px",i.el.style.top=s.y-i.off+"px"}for(let t=Ga.length-1;t>=0;t--){let i=Ga[t];if(e-i.born>3e3){i.el.remove(),Ga.splice(t,1);continue}let s=La(i.a,i.a.model?i.a.model.height+.45:1.8);i.el.style.left=s.x+"px",i.el.style.top=s.y+"px"}for(let t of n){let i=t.lastHit&&e-t.lastHit<6e3&&!t.hidden&&t.hp>0,s=ch.get(t);if(!i){s&&(s.remove(),ch.delete(t));continue}s||(s=document.createElement("div"),s.className="hpbar",s.innerHTML="<div></div>",Wi("hitsplats").appendChild(s),ch.set(t,s));let r=t.kind==="player"?t.maxHp():t.maxHp,o=La(t);s.style.left=o.x+"px",s.style.top=o.y+"px",s.firstChild.style.width=Math.max(0,100*t.hp/r)+"%"}}function Eb(){Es=document.createElement("canvas"),Es.width=nt,Es.height=Ut;let n=Es.getContext("2d"),e=n.createImageData(nt,Ut),t={...Hc,[ye.FLOOR]:5913120,[ye.BRIDGE]:9071170,[ye.WATER]:3832496};for(let i=0;i<nt*Ut;i++){let s=t[At[i]];e.data[i*4]=s>>16,e.data[i*4+1]=s>>8&255,e.data[i*4+2]=s&255,e.data[i*4+3]=255}for(let i of wn){let s=i.def.model,r=s.startsWith("tree")?[60,110,40]:s==="rock"?[110,100,90]:s==="cactus"?[70,120,60]:null;if(!r)continue;let o=(i.z*nt+i.x)*4;e.data[o]=r[0],e.data[o+1]=r[1],e.data[o+2]=r[2]}n.putImageData(e,0,0),document.getElementById("minimap")._base=Es}function dh(){let n=Wi("minimap"),e=n.getContext("2d"),t=n.width,i=p.player;if(!Es||!i)return;e.save(),e.fillStyle="#1a1208",e.fillRect(0,0,t,t),e.beginPath(),e.arc(t/2,t/2,t/2-1,0,Math.PI*2),e.clip(),e.translate(t/2,t/2),e.rotate(Ke.yaw),e.scale(Va,Va),e.translate(-i.vx,-i.vz),e.imageSmoothingEnabled=!1,e.drawImage(Es,0,0);let s=(o,a,l,c=.6)=>{e.fillStyle=l,e.beginPath(),e.arc(o,a,c,0,Math.PI*2),e.fill()};for(let o of p.ground)s(o.x+.5,o.z+.5,"#e02020",.45);for(let o of p.npcs)o.hidden||s(o.vx,o.vz,o.def.combat?"#ffe000":"#ffffff",.55);i.dest&&(e.fillStyle="#ff3030",e.fillRect(i.dest.x+.2,i.dest.z+.2,.6,.6)),e.restore(),e.fillStyle="#fff",e.fillRect(t/2-2,t/2-2,4,4);let r=Wi("compass");r.style.transform=`rotate(${Ke.yaw}rad)`}function Tb(n){let e=Wi("minimap"),t=e.getBoundingClientRect(),i=(n.clientX-t.left)*e.width/t.width-e.width/2,s=(n.clientY-t.top)*e.height/t.height-e.height/2;if(Math.hypot(i,s)>e.width/2)return;let r=Ke.yaw,o=Math.cos(r),a=Math.sin(r),l=(i*o+s*a)/Va,c=(-i*a+s*o)/Va,h=Math.floor(p.player.vx+l),u=Math.floor(p.player.vz+c);Promise.resolve().then(()=>(Er(),xp)).then(f=>f.walkTo(h,u))}var Wi,Qr,ch,Ga,Es,Va,qi=Ue(()=>{It();Di();gt();wr();vs();us();qn();Wi=n=>document.getElementById(n),Qr=[],ch=new Map,Ga=[];Va=3});function fh(n,e,t,i){if(n.stunnedUntil=p.tick+e,n.path=[],n.action=null,n.anim=null,t){let s=Math.min(n.hp-1,t);s>0&&(n.hp-=s,se("hit",n,s),se("hp"))}Kt(n,"\u2736 \u2736 \u2736"),N("You have been stunned!","combat"),i&&Kt(i,"What do you think you're doing?!")}function yp(n){let e=n.reduce((i,s)=>i+s.w,0),t=Yt()*e;for(let i of n)if(t-=i.w,t<0)return i;return n[0]}function vp(n,e){if(Wa())return;if(!Ht("coin_pouch")){N("You don't have enough inventory space.");return}let t=we("thieving");N(`You attempt to pick the ${e.def.name.toLowerCase()}'s pocket.`),Yt()<Kn(.55+t*.012,.55,.95)?(it("coin_pouch",1),Ft("thieving",8),N(`You pick the ${e.def.name.toLowerCase()}'s pocket.`)):(N(`You fail to pick the ${e.def.name.toLowerCase()}'s pocket.`),fh(n,4,1,e))}function _p(n,e){let t=e.def.steal;if(we("thieving")<t.lvl){N(`You need a Thieving level of ${t.lvl} to steal from this stall.`);return}if(e.depleted){N("The stall is empty right now.");return}let i=p.npcs.find(o=>o.type===t.owner&&!o.dead&&Zt(o.x,o.z,e.x,e.z)<=5),s=i?Math.max(.05,t.notice-(we("thieving")-t.lvl)*.01):0;if(Yt()<s){Kt(i,"Thief! Hands off my stall!"),N(`${i.def.name} catches you red-handed!`,"combat"),fh(n,3,2,null);return}let r=yp(t.loot);if(!Ht(r.id)){N("You don't have enough inventory space.");return}it(r.id,1),Ft("thieving",t.xp),N(`You steal ${xe[r.id].name.toLowerCase().replace(/^(?=[aeiou])/,"an ").replace(/^(?!an )/,"a ")} from the stall.`),e.depleted=!0,e.respawnAt=p.tick+t.respawn,pr(e)}function bp(n,e){let t=e.def.crack;if(we("thieving")<t.lvl){N(`You need a Thieving level of ${t.lvl} to crack this safe.`);return}if(e.depleted){N("The safe has been emptied. The banker will restock it soon.");return}N("You put your ear to the safe and start turning the dial..."),n.anim="cook",n.action={type:"channel",timer:4,done:()=>{if(Yt()<Kn(.45+(we("thieving")-t.lvl)*.02,.45,.9)){let i=nn(t.coins[0],t.coins[1]);it("coins",i);let s=yp(t.extra);s.id!=="nothing"&&Ht(s.id)&&it(s.id,nn(s.qty[0],s.qty[1])),Ft("thieving",t.xp),N(`You crack the safe and find ${i} coins${s.id!=="nothing"?" and some "+xe[s.id].name.toLowerCase():""}!`),e.depleted=!0,e.respawnAt=p.tick+t.respawn}else N("You set off a trap! A spring-loaded needle jabs your finger.","combat"),fh(n,2,nn(t.trap[0],t.trap[1]),null)}}}function Mp(n){let e=p.inv[n];if(!e)return;let t=xe[e.id],i=e.qty,s=0;for(let r=0;r<i;r++)s+=nn(t.pouch[0],t.pouch[1]);p.inv[n]=null,se("inv"),it("coins",s),N(`You open ${i} coin pouch${i>1?"es":""} and find ${s} coins.`)}var Wa,Sp=Ue(()=>{It();gt();qi();qn();In();Wa=()=>p.player&&p.player.stunnedUntil>p.tick});function mh(){if(wt)return wt;let n=window.AudioContext||window.webkitAudioContext;return n?(wt=new n,Xi=wt.createGain(),Xi.connect(wt.destination),eo=wt.createGain(),eo.connect(wt.destination),Rp(),wt):null}function gh(){let n=mh();n&&n.state==="suspended"&&n.resume(),Lp()}function Ap(n){Object.assign(kn,n),Rp(),kn.music>0&&kn.sound&&Lp()}function Rp(){wt&&(Xi.gain.value=kn.sound?kn.sfx*.5:0,eo.gain.value=kn.sound?kn.music*.25:0)}function on(n,e,t,i="square",s=.3,r=Xi,o=0){let a=wt.createOscillator(),l=wt.createGain();a.type=i,a.frequency.setValueAtTime(n,e),o&&a.frequency.exponentialRampToValueAtTime(Math.max(30,n*o),e+t),l.gain.setValueAtTime(s,e),l.gain.exponentialRampToValueAtTime(.001,e+t),a.connect(l),l.connect(r),a.start(e),a.stop(e+t+.02)}function ph(n,e,t=.3){let i=Math.floor(wt.sampleRate*e),s=wt.createBuffer(1,i,wt.sampleRate),r=s.getChannelData(0);for(let l=0;l<i;l++)r[l]=(Math.random()*2-1)*(1-l/i);let o=wt.createBufferSource(),a=wt.createGain();a.gain.value=t,o.buffer=s,o.connect(a),a.connect(Xi),o.start(n)}function Yi(n){if(!kn.sound||kn.sfx<=0||!mh()||wt.state!=="running")return;let e=wt.currentTime;switch(n){case"hit":on(180,e,.12,"square",.25,Xi,.5);break;case"miss":on(320,e,.08,"triangle",.15);break;case"gun":ph(e,.18,.5),on(90,e,.15,"square",.2,Xi,.4);break;case"chop":on(140,e,.06,"square",.2),ph(e,.05,.15);break;case"mine":on(900,e,.05,"square",.12),on(1300,e+.02,.06,"triangle",.1);break;case"splash":ph(e,.25,.15);break;case"eat":on(220,e,.06,"triangle",.2),on(200,e+.12,.06,"triangle",.2);break;case"click":on(660,e,.03,"triangle",.1);break;case"death":on(300,e,.6,"sawtooth",.2,Xi,.3);break;case"pickup":on(520,e,.05,"triangle",.15),on(780,e+.05,.05,"triangle",.15);break}}function Cp(){if(!kn.sound||!mh()||wt.state!=="running")return;let n=wt.currentTime;[523,659,784,1047].forEach((e,t)=>on(e,n+t*.12,.25,"square",.18)),on(1047,n+.5,.6,"triangle",.2)}function Pp(n){Tp=n}function Lp(){if(wp||!wt)return;let n=0;wp=setInterval(()=>{if(!kn.sound||kn.music<=0||wt.state!=="running")return;let e=Ep[Tp]||Ep.desert,t=wt.currentTime;n%8===0&&on(e[0]/2,t,1.2,"triangle",.25,eo),Math.random()<.7&&on(e[Math.floor(Math.random()*e.length)],t,.5,"triangle",.2,eo),n++},450)}var wt,Xi,eo,wp,Tp,kn,Ep,qa=Ue(()=>{wt=null,wp=null,Tp=null,kn={music:.4,sfx:.6,sound:!0};Ep={town:[196,220,247,294,330,392],desert:[147,175,196,220,262,294],danger:[110,131,147,165,196,208],hills:[165,196,220,247,294,330],river:[220,247,294,330,370,440]}});var Ts,Ip,kp=Ue(()=>{Ts="strongbox_showdown",Ip={sheriff:{start:n=>{let e=n.stage(Ts);return e===3?n.has("strongbox")?"s3":"s3n":["s0","s1","s2","s3","s4"][e]||"s4"},nodes:{s0:{npc:"Howdy, stranger. Name's Calloway. I'm the law in Dry Gulch, for what it's worth these days.",options:[{text:"What's the trouble, Sheriff?",next:"trouble"},{text:"Got any work for a drifter?",next:"trouble"},{text:"Just passing through.",next:"bye"}]},trouble:{npc:"Bandits hit the bank three nights back. Made off with the strongbox - every dollar this town has.",next:"trouble2"},trouble2:{npc:"I'm too old to ride and my deputy quit. Reckon you could track 'em down and bring that box back?",options:[{text:"I'll get your strongbox back.",next:"accept"},{text:"What's in it for me?",next:"reward"},{text:"Sounds dangerous. No thanks.",next:"decline"}]},reward:{npc:"The bank's offering a reward, and I'll pin a deputy's star on you myself.",options:[{text:"Deal. I'll do it.",next:"accept"},{text:"Maybe later.",next:"decline"}]},accept:{npc:"Good. Talk to Ellie May down at the stable - she was up late with a sick mare and might've seen which way they rode.",action:n=>n.setStage(Ts,1),next:"end"},decline:{npc:"Suit yourself. The offer stands.",next:"end"},bye:{npc:"Keep your nose clean, then.",next:"end"},s1:{npc:"Have you talked to Ellie May at the stable yet? She's south of Main Street.",next:"end"},s2:{npc:"East of the river, you say? Then that's where you'll find them. Bring me that strongbox.",options:[{text:"I'm on it.",next:"end"},{text:"Any advice?",next:"advice"}]},advice:{npc:"Bandits are mean. Buy a better shootin' iron from Abe, and bring food. Cook fish on the campfire by the saloon.",next:"end"},s3:{npc:"Is that... the strongbox? Hand it over, partner!",next:"s3b"},s3n:{npc:"You found the strongbox? Well, where is it? Fetch it from wherever you stashed it.",next:"end"},s3b:{player:"Here you go, Sheriff. Those bandits won't be needing it.",action:n=>{n.has("strongbox")&&(n.remove("strongbox"),n.complete(Ts))},next:"s3c"},s3c:{npc:"Well I'll be! Raise your right hand... consider yourself a deputy of Dry Gulch.",next:"end"},s4:{npc:"Morning, Deputy. Town's quieter thanks to you. More work may come down the trail.",next:"end"}}},stablehand:{start:n=>n.stage(Ts)===1?"q1":n.stage(Ts)>=2&&n.stage(Ts)<4?"q2":"hi",nodes:{hi:{npc:"Howdy! These three are boarders - riding lessons start when the Riding skill comes to town. Want to help out meanwhile?",options:[{text:"Can I ride a horse?",next:"horse"},{text:"How can I help?",next:"job"},{text:"What do you sell?",next:"end",action:n=>n.openShop("stable")},{text:"Bye.",next:"end"}]},horse:{npc:"Not yet, sugar. Riding lessons start soon. You can pet 'em though - they love it.",next:"end"},job:{npc:"Buy a horse brush from me and groom the horses. I'll pay you 5 coins a horse. They get dusty again quick, so check back.",next:"end"},q1:{player:"The sheriff sent me. Did you see the bandits who robbed the bank?",next:"q1b"},q1b:{npc:"Sure did! Four of 'em, hollerin' and whoopin', riding hard east over the river bridge. They camp past the far bank.",next:"q1c"},q1c:{npc:"One of 'em had that strongbox tied to his saddle. Be careful out there.",action:n=>n.setStage(Ts,2),next:"end"},q2:{npc:"Bandits camp east over the river bridge. Give 'em what for!",next:"end"}}},banker:{start:()=>"hi",nodes:{hi:{npc:"Good day. Would you like to access your bank account? Our assayer also buys gold flakes.",options:[{text:"Yes please.",next:"end",action:n=>n.openBank()},{text:"Sell my gold flakes.",next:"assay",action:n=>n.sellFlakes(15)},{text:"No thanks.",next:"end"}]},assay:{npc:"Pleasure doing business. Bring more any time.",next:"end"}}},storekeeper:{start:()=>"hi",nodes:{hi:{npc:"Welcome to Dunn's! Tools, grub, and clothes. Want to see what I've got?",options:[{text:"Let's trade.",next:"end",action:n=>n.openShop("general")},{text:"No thanks.",next:"end"}]}}},gunsmith:{start:()=>"hi",nodes:{hi:{npc:"Need iron? I've got pistols, rifles and good steel. Better gear needs more skill, mind.",options:[{text:"Show me your wares.",next:"end",action:n=>n.openShop("gunsmith")},{text:"How do guns work here?",next:"tip"},{text:"Bye.",next:"end"}]},tip:{npc:"Wield a gun and you'll fight from range, training Ranged. Knives and sabres train Attack, Strength or Defence depending on your style.",next:"end"}}},tanner:{start:()=>"hi",nodes:{hi:{npc:"Howdy. I tan hides into good leather - one coin a hide. And I pay better for pelts than Martha ever will.",options:[{text:"Tan all my hides, please.",next:"tan"},{text:"Let's trade.",next:"end",action:n=>n.openShop("tanner")},{text:"What's leather good for?",next:"why"},{text:"No thanks.",next:"end"}]},tan:{npc:"Let's see what you've got...",action:n=>n.tan(),next:"end"},why:{npc:"Crafters turn it into gloves, chaps and the like. Folks say there'll be a Crafting guild in these parts soon.",next:"end"}}},bartender:{start:()=>"hi",nodes:{hi:{npc:"What'll it be, stranger? Whiskey, sarsaparilla, or a bowl of my stew?",options:[{text:"Let's see the menu.",next:"end",action:n=>n.openShop("saloon")},{text:"Heard any rumours?",next:"rumour"},{text:"Can I use your range?",next:"range"},{text:"Just looking.",next:"end"}]},rumour:{npc:"Folks say a giant sand-serpent - the Dust Wyrm - lairs south-east, past the river. And gold glints in the gravel bars if you've got a pan.",next:"end"},range:{npc:"Go ahead, it's in the corner. Food burns less on a proper range than on a campfire.",next:"end"}}},pianist:{start:()=>"hi",nodes:{hi:{npc:"Evenin'. Got a request?",options:[{text:'Play "Oh! Susanna".',next:"song",action:n=>n.say("\u266A Oh! Susanna, don't you cry for me... \u266A")},{text:"Play something sad.",next:"song",action:n=>n.say("\u266A Oh my darlin', Clementine... \u266A")},{text:"How long have you played here?",next:"story"},{text:"No thanks.",next:"end"}]},song:{npc:"Thank you kindly. Tips go in the jar.",next:"end"},story:{npc:"Since the gold rush. Sal pays me in stew. Best deal in the territory.",next:"end"}}},patron_miner:{start:()=>"hi",nodes:{hi:{npc:"Copper's easy, iron's honest, gold's a heartbreaker. Can't afford a pick? Pan the river for flakes instead.",next:"end"}}},patron_gambler:{start:()=>"hi",nodes:{hi:{npc:"Care for a hand of poker? ...No? Smart. Nobody beats Lou.",options:[{text:"Any tips?",next:"tip"},{text:"Bye.",next:"end"}]},tip:{npc:"Train your Strength with the Aggressive style - hits harder, kills faster. And a whiskey before a brawl never hurt. Much.",next:"end"}}},hostess:{start:()=>"hi",nodes:{hi:{npc:"Well, hello there, cowboy. You look like you've ridden a long, dusty trail. Buy a lady a sarsaparilla?",options:[{text:"Spend the night (50 coins)",next:"rest",if:n=>n.coins()>=50},{text:"Spend the night (50 coins)",next:"broke",if:n=>n.coins()<50},{text:"Tell me about the rooms upstairs.",next:"rooms"},{text:"Just being friendly, ma'am.",next:"friendly"},{text:"Goodbye, Miss Lottie.",next:"end"}]},rest:{npc:"Right this way, darlin'. Mind the creaky third step.",action:n=>n.rest(50),next:"end"},broke:{npc:"Oh, sugar, the rooms are 50 coins. Come back when your pockets jingle a little louder.",next:"end"},rooms:{npc:"Clean sheets, a hot bath and the softest feather bed in the territory. You'll wake up feeling brand new.",next:"end"},friendly:{npc:"Aren't you sweet. Most folks in here only talk to their whiskey.",next:"end"}}},preacher:{start:()=>"hi",nodes:{hi:{npc:"Peace be with you, traveller. Welcome to the house of the Lord.",options:[{text:"What is Faith?",next:"faith"},{text:"Will you buy my bones?",next:"bones"},{text:"Any tips for burying bones?",next:"tips"},{text:"Ring the bell for me?",next:"bell"},{text:"Goodbye, Reverend.",next:"end"}]},faith:{npc:"Faith is your inner strength. Bury bones to train it, then open your Faith tab to call on blessings that harden your hide or steady your aim.",next:"faith2"},faith2:{npc:"Blessings drain your Faith points. Pray at this altar and they'll be restored in full.",next:"end"},bones:{npc:"I'll give the departed a proper burial - and 3 coins a bone for your trouble.",action:n=>n.sellBones(3),next:"end"},tips:{npc:"Bury them in the churchyard next door. Sanctified ground blesses your offering - you'll learn half as much again.",next:"end"},bell:{npc:"Ring it yourself, child - the rope's just outside the door.",next:"end"}}},driver:{start:()=>"hi",nodes:{hi:{npc:"All aboard the Overland Mail! I run to Copper Hills, the river crossing, and - if you're brave - the edge of the Dust Wyrm lair.",options:[{text:"Take me somewhere.",next:"end",action:n=>n.travel()},{text:"How do I get back?",next:"back"},{text:"Not today.",next:"end"}]},back:{npc:"Every stop has a sign with a bell. Ring it and I'll come fetch you.",next:"end"}}},townsperson:{start:()=>"l"+Math.floor(Math.random()*8),nodes:{l0:{npc:"Howdy, stranger.",next:"end"},l1:{npc:"Hot enough for ya?",next:"end"},l2:{npc:"Don't drink the well water. Or do. I ain't your ma.",next:"end"},l3:{npc:"I hear the sheriff's lookin' for help with them bandits.",next:"end"},l4:{npc:"Big Sal's stew'll cure anything. Except bein' broke.",next:"end"},l5:{npc:"Mind your pockets around here, friend.",next:"end"},l6:{npc:"That stagecoach ain't never been on time. Not once.",next:"end"},l7:{npc:"Nice hat.",next:"end"}}},baker:{start:()=>"hi",nodes:{hi:{npc:"Fresh bread! Cakes! Don't even think about pinching any - I've got eyes in the back of my bonnet.",options:[{text:"Let's trade.",next:"end",action:n=>n.openShop("bakery")},{text:"I would never!",next:"never"},{text:"Bye.",next:"end"}]},never:{npc:"Mm-hmm. That's what the last fella said. Then the sheriff found crumbs in his saddlebag.",next:"end"}}},prospector:{start:()=>"hi",nodes:{hi:{npc:"Gold in them hills! Copper too, north of town. Iron and silver if you dig deeper, heh.",options:[{text:"Any tips for a new miner?",next:"tip"},{text:"Bye, old-timer.",next:"end"}]},tip:{npc:"Buy a pickaxe from Martha. Mine copper till your arms ache, then try iron at level 15.",next:"end"}}}}});var Dp,mi=Ue(()=>{It();yr();Dp=()=>{try{return Jc()}catch{return"?"}}});var Ab,Rb,Up,Np=Ue(()=>{mi();gt();ei();Ab=[["accurate","Accurate","Attack xp"],["aggressive","Aggressive","Strength xp"],["defensive","Defensive","Defence xp"]],Rb=[["accurate","Accurate","Ranged xp, +accuracy"],["rapid","Rapid","Ranged xp, faster"]],Up={id:"combat",icon:"\u2694\uFE0F",title:"Combat Options",events:["equip","skills","settings"],mount(n){n.addEventListener("click",e=>{let t=e.target.closest("[data-style]");t&&(p.style=t.dataset.style,this.render(n)),e.target.closest('[data-toggle="retaliate"]')&&(p.autoRetaliate=p.autoRetaliate===!1,this.render(n)),e.target.closest('[data-toggle="run"]')&&(p.run=!p.run,this.render(n))})},render(n){let e=Gn(),i=ms()==="melee"?Ab:Rb;n.innerHTML=`<div class="tab-title">${e?Yn(e.id)+" "+et(e.name):"Unarmed"}</div>
      <div class="sub center">Combat level: ${ds()} &nbsp; Max hit: ${Dp()}</div>
      <div class="style-grid">${i.map(([s,r,o])=>`<button class="style-btn ${p.style===s?"on":""}" data-style="${s}"><b>${r}</b><small>${o}</small></button>`).join("")}</div>
      <button class="style-btn ${p.autoRetaliate!==!1?"on":""}" data-toggle="retaliate">Auto Retaliate: ${p.autoRetaliate!==!1?"On":"Off"}</button>
      <button id="run-toggle" class="style-btn ${p.run?"on":""}" data-toggle="run">\u{1F3C3} Run: ${p.run?"On":"Off"}</button>`}}});var Cb,Pb,Lb,zp,Op=Ue(()=>{mi();In();gt();ei();Cb=[[null,"head",null],["cape","neck","ammo"],["weapon","body","shield"],[null,"legs",null],["hands","feet","ring"]],Pb={head:"\u{1FA96}",cape:"\u{1F9E3}",neck:"\u{1F4FF}",ammo:"\u2022",weapon:"\u{1F5E1}\uFE0F",body:"\u{1F455}",shield:"\u{1F6E1}\uFE0F",legs:"\u{1F456}",hands:"\u{1F9E4}",feet:"\u{1F462}",ring:"\u{1F48D}"},Lb=n=>n[0].toUpperCase()+n.slice(1),zp={id:"equipment",icon:"\u{1FA96}",title:"Worn Equipment",events:["equip"],mount(n){n.innerHTML='<div id="equip-slots"></div>',n.addEventListener("click",e=>{let t=e.target.closest("[data-slot]");t&&p.equip[t.dataset.slot]&&Ic(t.dataset.slot)})},render(n){let e=ps(),t=s=>{if(!s)return'<div class="pd-cell pd-blank"></div>';let r=p.equip[s];return`<div class="pd-cell ${r?"filled":""}" data-slot="${s}" title="${r?et(xe[r].name)+" (tap to remove)":Lb(s)}">`+(r?Yn(r):`<span class="pd-empty">${Pb[s]}</span>`)+"</div>"},i=s=>(e[s]>=0?"+":"")+e[s];n.querySelector("#equip-slots").innerHTML=`<div class="tab-title">Worn Equipment</div>
      <div class="paperdoll">${Cb.map(s=>s.map(t).join("")).join("")}</div>
      <div class="bonus-table">
        <div class="bt-h">Attack bonus</div><div>Melee: ${i("att")}</div><div>Ranged: ${i("rng")}</div>
        <div class="bt-h">Defence bonus</div><div>All styles: ${i("def")}</div>
        <div class="bt-h">Other bonuses</div><div>Strength: ${i("str")}</div><div>Ranged str: ${i("rstr")}</div>
      </div>`}}});var Fp,Bp=Ue(()=>{mi();xr();gt();Fp={id:"prayer",icon:"\u{1F64F}",title:"Faith",events:["faith","skills"],mount(n){n.addEventListener("click",e=>{let t=e.target.closest("[data-prayer]");t&&ka(t.dataset.prayer)})},render(n){let e=we("prayer");n.innerHTML=`<div class="tab-title">Faith</div>
      <div class="faith-bar"><div style="width:${Math.round(100*(p.faith||0)/e)}%"></div><span>${p.faith??e} / ${e}</span></div>
      <div class="prayer-grid">${Ia.map(t=>{let i=e<t.lvl,s=p.prayers&&p.prayers.has(t.id);return`<button class="prayer ${i?"locked":""} ${s?"on":""}" data-prayer="${t.id}" title="${et(t.name)} (lvl ${t.lvl}): ${et(t.desc)}">
          <span class="p-icon">${t.icon}</span><span class="p-name">${et(t.name)}</span><small>${i?"Lvl "+t.lvl:et(t.desc)}</small></button>`}).join("")}</div>
      <div class="sub center">Bury bones to train Faith. Pray at the town well to restore points.</div>`}}});var xh,Hp=Ue(()=>{xh=[{id:"home_trail",name:"Home Trail",icon:"\u{1F3E0}",lvl:1,desc:"Ride back to Dry Gulch. 5 minute cooldown.",working:!0},{id:"snake_oil",name:"Snake Oil",icon:"\u{1F9F4}",lvl:5,desc:"Cure poison. (Coming soon)"},{id:"dust_devil",name:"Dust Devil",icon:"\u{1F32A}\uFE0F",lvl:11,desc:"Blind a foe with a gust of sand. (Coming soon)"},{id:"lasso",name:"Lasso",icon:"\u27B0",lvl:17,desc:"Bind a foe in place. (Coming soon)"},{id:"trail_to_mine",name:"Trail to Copper Hills",icon:"\u26CF\uFE0F",lvl:25,desc:"Teleport to the mine. (Coming soon)"},{id:"smoke_signal",name:"Smoke Signal",icon:"\u{1F4A8}",lvl:33,desc:"Call for aid. (Coming soon)"},{id:"thunderclap",name:"Thunderclap",icon:"\u26A1",lvl:45,desc:"Strike foes with lightning. (Coming soon)"}]});function kb(n){let e=xh.find(i=>i.id===n),t=Math.max(1,Math.floor(we("prayer")/2)+Math.floor(we("ranged")/2));if(!e.working){N(`${e.name} requires Frontier Lore level ${e.lvl}. Coming in a later update.`);return}if(e.id==="home_trail"){let i=(p.homeTrailAt||0)+Ib-Date.now();if(i>0){N(`You need to wait another ${Math.ceil(i/6e4)} minute(s) to ride the Home Trail.`);return}let s=p.player;if(p.npcs.some(r=>r.target===s)){N("You can't do that while in combat.");return}s.path=[],s.anim="cook",Kt(s,"Hyah!"),N("You whistle for a ride home..."),s.action={type:"channel",timer:5,done:()=>{s.x=Sn.x,s.z=Sn.z,s.visQ.length=0,s.vx=s.x+.5,s.vz=s.z+.5,p.homeTrailAt=Date.now(),N("You arrive in Dry Gulch."),se("teleport")}}}}var Ib,Gp,Vp=Ue(()=>{mi();Hp();us();gt();qi();Ib=5*60*1e3;Gp={id:"spellbook",icon:"\u{1F4D6}",title:"Remedies & Tricks",events:["skills"],mount(n){n.addEventListener("click",e=>{let t=e.target.closest("[data-spell]");t&&kb(t.dataset.spell)})},render(n){n.innerHTML=`<div class="tab-title">Remedies &amp; Tricks</div><div class="spell-grid">${xh.map(e=>`<button class="spell ${e.working?"":"locked"}" data-spell="${e.id}" title="${et(e.desc)}"><span class="p-icon">${e.icon}</span><span class="p-name">${et(e.name)}</span><small>${e.working?et(e.desc):"Lvl "+e.lvl+" - coming soon"}</small></button>`).join("")}</div>`}}});function Xp(n){let e=Math.floor(Date.now()/9e4);return Math.abs(yh(n+e))%100<55?{online:!0,world:300+Math.abs(yh(n))%20}:{online:!1}}var Wp,qp,yh,Yp,$p=Ue(()=>{mi();gt();Wp=["Dusty Rhodes","Calamity Kate","Two-Gun Tex","Lil Sal","Doc Holloway","Rattler Ray"],qp=["Howdy, partner!","Can't talk, bandits on my tail!","Catfish are bitin' by the bridge.","Meet me at the saloon later.","You seen the sheriff? He owes me two bits.","Just hit 30 Mining, yeehaw!"],yh=n=>[...n].reduce((e,t)=>e*31+t.charCodeAt(0)|0,7);Yp={id:"friends",icon:"\u{1F465}",title:"Friends List",events:["friends"],mount(n){p.friends||(p.friends=[...Wp]),n.addEventListener("click",e=>{let t=e.target.closest("[data-rm]");if(t){p.friends=p.friends.filter(o=>o!==t.dataset.rm),this.render(n);return}if(e.target.closest("[data-add]")){let o=n.querySelector(".friend-input"),a=o.value.trim().slice(0,12);if(!a)return;p.friends.includes(a)?N(`${a} is already on your friends list.`):(p.friends.push(a),N(`${a} was added to your friends list.`)),this.render(n);return}let i=e.target.closest("[data-friend]");if(!i)return;let s=i.dataset.friend;if(!Xp(s).online){N(`${s} is currently offline.`);return}N(`To ${s}: Howdy!`,"player"),setTimeout(()=>N(`From ${s}: ${qp[Math.abs(yh(s+Date.now()))%qp.length]}`,"friend"),1500)}),setInterval(()=>{n.classList.contains("active")&&this.render(n)},15e3)},render(n){if(p.friends||(p.friends=[...Wp]),n.contains(document.activeElement)&&document.activeElement.classList.contains("friend-input"))return;let e=p.friends.map(t=>({n:t,...Xp(t)})).sort((t,i)=>i.online-t.online);n.innerHTML=`<div class="tab-title">Friends List (${e.filter(t=>t.online).length}/${e.length} online)</div>
      ${e.map(t=>`<div class="friend-row" data-friend="${et(t.n)}"><span class="f-name">${et(t.n)}</span><span class="${t.online?"f-on":"f-off"}">${t.online?"World "+t.world:"Offline"}</span><button class="f-rm" data-rm="${et(t.n)}" title="Remove">\u2715</button></div>`).join("")}
      <div class="friend-add"><input class="friend-input" maxlength="12" placeholder="Name"><button class="small-btn" data-add="1">Add</button></div>
      <div class="sub center">Tap an online friend to say howdy. (Simulated until multiplayer.)</div>`}}});function gi(){let n=p.player;if(!n||p.noSave)return!1;let e={v:Zp,t:Date.now(),pos:{x:n.x,z:n.z},hp:n.hp,skills:p.skills,inv:p.inv,equip:p.equip,bank:p.bank,coins:p.coins,quests:p.quests,style:p.style,run:p.run,faith:p.faith,pet:p.pet||null,kc:p.kc||{},settings:p.settings,friends:p.friends,runEnergy:p.runEnergy,spec:p.spec,autoRetaliate:p.autoRetaliate,homeTrailAt:p.homeTrailAt||0};try{return localStorage.setItem(vh,JSON.stringify(e)),p.lastSaved=Date.now(),se("saved"),!0}catch(t){return console.warn("save failed",t),!1}}function Jp(){let n;try{n=JSON.parse(localStorage.getItem(vh)||"null")}catch{return null}if(!n||n.v!==Zp)return null;let e=t=>t&&xe[t];for(let t of Gd)typeof n.skills?.[t]=="number"&&(p.skills[t]=n.skills[t]);p.inv=new Array(zi).fill(null),(n.inv||[]).slice(0,zi).forEach((t,i)=>{t&&e(t.id)&&(p.inv[i]={id:t.id,qty:Math.max(1,t.qty|0)})}),p.equip={};for(let[t,i]of Object.entries(n.equip||{}))e(i)&&xe[i].equip?.slot===t&&(p.equip[t]=i);return p.bank=(n.bank||[]).filter(t=>e(t.id)&&t.qty>0),p.coins=Math.max(0,n.coins|0),p.quests=n.quests||{},p.style=n.style||"accurate",p.run=n.run!==!1,p.autoRetaliate=n.autoRetaliate!==!1,p.homeTrailAt=n.homeTrailAt||0,p.kc=n.kc||{},Array.isArray(n.friends)&&(p.friends=n.friends.filter(t=>typeof t=="string").slice(0,200)),p.runEnergy=typeof n.runEnergy=="number"?n.runEnergy:100,p.spec=typeof n.spec=="number"?n.spec:100,n}function Xa(){localStorage.removeItem(vh)}var vh,Zp,Ya=Ue(()=>{It();In();Di();gt();vh="westscape.save",Zp=1});function jp(n,e){return n==="maxZoom"?e:Math.round(e*100)+"%"}var Db,Kp,_h,Qp,em=Ue(()=>{mi();wr();Ya();qn();It();Di();Db=[["Display",[["hideRoofs","Hide roofs"],["minimap","Show minimap"],["xpDrops","Show XP drops"],["menuHints","Top-left action hints"],["levelUpPopups","Level-up popups"]]],["Audio",[["sound","Sound on"]]],["Gameplay",[["runDefault","Run by default"],["chatFilter","Filter game messages"],["shiftDrop","Shift-click drop (desktop)"],["acceptAid","Accept aid (multiplayer, later)"],["autosaveNotice","Autosave notice"]]]],Kp={Display:[["brightness","Brightness",.6,1.6,.05]],Audio:[["musicVolume","Music volume",0,1,.05],["sfxVolume","Sound effects",0,1,.05]],Camera:[["maxZoom","Max zoom-out",12,30,1]]},_h=!1,Qp={id:"settings",icon:"\u2699\uFE0F",title:"Account & Settings",events:["settings"],mount(n){n.addEventListener("click",e=>{let t=e.target.closest("[data-set]");if(t){lh(t.dataset.set,!Nt()[t.dataset.set]),t.dataset.set==="runDefault"&&(p.run=Nt().runDefault);return}let i=e.target.closest("[data-act]");if(!i)return;let s=i.dataset.act;s==="cam-reset"&&(Ke.yaw=0,Ke.pitch=.95,Ke.dist=window.innerHeight>window.innerWidth?22:17,N("Camera reset.")),s==="save"&&(gi(),N("Game saved.")),s==="reset"&&(_h=!0,this.render(n)),s==="reset-cancel"&&(_h=!1,this.render(n)),s==="reset-confirm"&&(p.noSave=!0,Xa(),location.reload())}),n.addEventListener("input",e=>{let t=e.target.closest("[data-slider]");if(!t)return;lh(t.dataset.slider,parseFloat(t.value));let i=t.parentElement.querySelector(".sv");i&&(i.textContent=jp(t.dataset.slider,parseFloat(t.value)))})},render(n){if(n.contains(document.activeElement)&&document.activeElement.type==="range")return;let e=Nt(),t=([r,o])=>`<button class="set-row ${e[r]?"on":""}" data-set="${r}"><span>${o}</span><span class="sw">${e[r]?"ON":"OFF"}</span></button>`,i=([r,o,a,l,c])=>`<label class="set-slider"><span>${o} <b class="sv">${jp(r,e[r])}</b></span><input type="range" min="${a}" max="${l}" step="${c}" value="${e[r]}" data-slider="${r}"></label>`,s=Hn.reduce((r,o)=>r+we(o.id),0);n.innerHTML=`<div class="tab-title">Account &amp; Settings</div>
      <div class="sub center">Total level ${s} \xB7 Quest points ${ya()}</div>
      ${Db.map(([r,o])=>`<div class="set-h">${r}</div>${(Kp[r]||[]).map(i).join("")}${o.map(t).join("")}`).join("")}
      <div class="set-h">Camera</div>${Kp.Camera.map(i).join("")}<button class="style-btn" data-act="cam-reset">Reset camera (face north)</button>
      <div class="set-h">Account</div><button class="style-btn" data-act="save">\u{1F4BE} Save now</button>
      ${_h?'<div class="danger-box">Erase ALL progress? This cannot be undone.<button class="style-btn danger" data-act="reset-confirm">Yes, reset my save</button><button class="style-btn" data-act="reset-cancel">Cancel</button></div>':'<button class="style-btn danger" data-act="reset">Reset save\u2026</button>'}`}}});function Ub(n){let e=tm.find(i=>i.id===n),t=p.player;!e||!t||t.path.length||(t.emote={id:n,t:performance.now()/1e3},e.say&&Kt(t,e.say))}var tm,nm,im=Ue(()=>{mi();qi();tm=[{id:"yes",name:"Yes",icon:"\u{1F44D}"},{id:"no",name:"No",icon:"\u{1F44E}"},{id:"wave",name:"Wave",icon:"\u{1F44B}"},{id:"bow",name:"Bow",icon:"\u{1F647}"},{id:"dance",name:"Dance",icon:"\u{1F483}"},{id:"cheer",name:"Cheer",icon:"\u{1F64C}"},{id:"clap",name:"Clap",icon:"\u{1F44F}"},{id:"tiphat",name:"Tip hat",icon:"\u{1F920}"},{id:"yeehaw",name:"Yeehaw",icon:"\u{1F40E}",say:"Yeehaw!"},{id:"think",name:"Think",icon:"\u{1F914}",say:"Hmm..."},{id:"laugh",name:"Laugh",icon:"\u{1F606}",say:"Haha!"},{id:"angry",name:"Angry",icon:"\u{1F620}",say:"Grr!"}];nm={id:"emotes",icon:"\u{1F483}",title:"Emotes",events:[],mount(n){n.innerHTML=`<div class="tab-title">Emotes</div><div class="emote-grid">${tm.map(e=>`<button class="emote" data-emote="${e.id}"><span class="p-icon">${e.icon}</span><small>${e.name}</small></button>`).join("")}</div>`,n.addEventListener("click",e=>{let t=e.target.closest("[data-emote]");t&&Ub(t.dataset.emote)})}}});function sm(n){gi(),p.loggedOut=!0,p.player&&(p.player.path=[],p.player.action=null),document.getElementById("title-screen").hidden=!1,document.querySelector("#title-screen .title-note").textContent=n||"Your progress has been saved in this browser."}function zb(){p.loggedOut=!1,bh=Date.now(),document.getElementById("title-screen").hidden=!0,N("Welcome back to West-Scape.","system")}var Nb,bh,rm,om=Ue(()=>{mi();Ya();Nb=30*60*1e3,bh=Date.now();rm={id:"logout",icon:"\u{1F6AA}",title:"Logout",events:[],mount(n){n.innerHTML=`<div class="tab-title">Logout</div><div class="sub center">When you have finished playing, log out to save your progress.</div>
      <button class="style-btn logout-btn" data-logout="1">Click here to logout</button><div class="sub center idle-timer"></div>`,n.addEventListener("click",e=>{e.target.closest("[data-logout]")&&sm()}),document.getElementById("title-play").addEventListener("click",zb),["pointerdown","keydown"].forEach(e=>window.addEventListener(e,()=>{bh=Date.now()},!0)),setInterval(()=>{let e=Nb-(Date.now()-bh),t=n.querySelector(".idle-timer");t&&(t.textContent=`Idle logout in ${Math.max(0,Math.floor(e/6e4))}m ${Math.max(0,Math.floor(e/1e3)%60)}s`),e<=0&&!p.loggedOut&&sm("You were logged out after 30 minutes of inactivity. Progress saved.")},1e3)}}});function am(){let n=As("tab-buttons"),e=As("tab-content");n.innerHTML="",n.className="tab-row tab-row-1";let t=As("tab-buttons-bottom");t||(t=document.createElement("div"),t.id="tab-buttons-bottom",e.after(t)),t.innerHTML="",t.className="tab-row tab-row-2";let i=[n,t];wh.forEach((s,r)=>{let o=document.createElement("button");o.className="tab-btn"+(s.id===Sh?" active":""),o.dataset.tab=s.id,o.title=s.title,o.setAttribute("aria-label",s.title),o.textContent=s.icon,o.addEventListener("click",()=>Fb(s.id,!0)),i[r<Ob?0:1].appendChild(o);let a=As("tab-"+s.id);if(a||(a=document.createElement("div"),a.id="tab-"+s.id,a.className="tab-pane",e.appendChild(a)),a.dataset.title=s.title,s.mount&&s.mount(a),s.render)for(let l of s.events||[])Qe(l,()=>s.render(a))})}function lm(){for(let n of wh)n.render&&n.render(As("tab-"+n.id))}function Fb(n,e=!1){let t=As("side-panel");if(e&&n===Sh&&!t.classList.contains("collapsed")){t.classList.add("collapsed");return}t.classList.remove("collapsed"),Sh=n,document.querySelectorAll(".tab-btn").forEach(s=>s.classList.toggle("active",s.dataset.tab===n)),document.querySelectorAll(".tab-pane").forEach(s=>s.classList.toggle("active",s.id==="tab-"+n));let i=wh.find(s=>s.id===n);i&&i.render&&i.render(As("tab-"+n))}var Mh,wh,Ob,As,Sh,cm=Ue(()=>{gt();Np();Op();Bp();Vp();$p();em();im();om();Mh=(n,e,t)=>({id:n,icon:e,title:t,builtin:!0}),wh=[Up,Mh("skills","\u{1F4CA}","Skills"),Mh("quests","\u{1F4DC}","Quests"),Mh("inventory","\u{1F392}","Inventory"),zp,Fp,Gp,Yp,rm,Qp,nm],Ob=7,As=n=>document.getElementById(n),Sh="inventory"});function dm(){rh(),am(),Bb(),window.matchMedia("(max-width: 600px)").matches&&Ct("side-panel").classList.add("collapsed"),Ct("chat-toggle").addEventListener("click",e=>{e.stopPropagation();let t=Ct("game-root").classList.toggle("chat-min");Ct("chat-toggle").textContent=t?"\u25B4":"\u25BE",Ct("chat-messages").scrollTop=Ct("chat-messages").scrollHeight}),Qe("inv",Eh),Qe("equip",Eh),Qe("skills",pm),Qe("quests",mm),Qe("coins",()=>{Ct("coins-val").textContent=Jt(p.coins)}),Qe("hp",Th),Qe("skills",Th),Qe("msg",gm),Ct("skills-list").addEventListener("click",e=>{let t=e.target.closest("[data-skill]");t&&Hb(t.dataset.skill)}),Ct("quests-list").addEventListener("click",e=>{let t=e.target.closest("[data-quest]");t&&Gb(t.dataset.quest)}),Qe("settings",um),um(),Vb()}function fm(){lm(),Eh(),pm(),mm(),Th(),Ct("coins-val").textContent=Jt(p.coins)}function Bb(){let n=Ct("inv-grid");n.innerHTML="";for(let e=0;e<zi;e++){let t=document.createElement("div");t.className="inv-slot",t.dataset.slot=e;let i=null,s=!1,r=0,o=0,a="mouse";t.addEventListener("pointerdown",l=>{a=l.pointerType,s=!1,r=l.clientX,o=l.clientY,l.pointerType!=="mouse"&&(i=setTimeout(()=>{za()||(s=!0,hm(e,r,o))},450))}),t.addEventListener("pointermove",l=>{Math.hypot(l.clientX-r,l.clientY-o)>10&&clearTimeout(i)}),t.addEventListener("pointerup",l=>{if(clearTimeout(i),!(l.button===2||s||za())){if(l.shiftKey&&Nt().shiftDrop&&p.inv[e]){Ph(e);return}if(p.useSlot!==void 0&&p.useSlot!==null){$a({kind:"invslot",slot:e});return}Rh(e)}}),t.addEventListener("pointercancel",()=>clearTimeout(i)),t.addEventListener("contextmenu",l=>{l.preventDefault(),!(a!=="mouse"||za())&&hm(e,l.clientX,l.clientY)}),n.appendChild(t)}Oa(n,".inv-slot",e=>+e.dataset.slot,(e,t)=>{[p.inv[e],p.inv[t]]=[p.inv[t],p.inv[e]],(p.useSlot===e||p.useSlot===t)&&(p.useSlot=null),se("inv")})}function hm(n,e,t){let i=p.inv[n];if(!i)return;let s=Ct("game-root").getBoundingClientRect();_r(e-s.left,t-s.top,xe[i.id].name,Ch(n))}function Eh(){let n=Ct("inv-grid").children;for(let e=0;e<zi;e++){let t=p.inv[e],i=n[e];i.classList.toggle("selected",p.useSlot===e),i.innerHTML=t?Yn(t.id)+(xe[t.id].stack||t.qty>1?`<span class="qty">${Bd(t.qty)}</span>`:""):"",i.title=t?xe[t.id].name:""}}function pm(){let n=Hn.reduce((e,t)=>e+we(t.id),0);Ct("skills-list").innerHTML=Hn.map(e=>{let t=we(e.id),i=p.skills[e.id],s=t<99?hr(t+1):i,r=hr(t),o=t<99?Math.floor(100*(i-r)/(s-r)):100;return`<div class="skill-row" data-skill="${e.id}" title="${e.name}: ${Jt(i)} xp"><span class="skill-name">${e.icon} ${e.name}</span><span class="skill-lvl">${jn(e.id)!==t?`<span class="${jn(e.id)>t?"boost-up":"boost-down"}">${jn(e.id)}</span>/`:""}${t}</span><div class="skill-bar"><div style="width:${o}%"></div></div></div>`}).join("")+`<div class="skill-total">Total level: ${n} &nbsp; Combat: ${ds()}</div>`}function Hb(n){let e=ki[n],t=we(n),i=p.skills[n],s=t<99?`${Jt(hr(t+1)-i)} xp to level ${t+1}`:"Maxed!";br(`${e.icon} ${e.name} guide`,`<div class="guide-xp">Level ${t} - ${Jt(i)} xp. ${s}</div>`+e.guide.map(r=>`<div class="guide-row ${t>=r.lvl?"ok":""}"><b>${r.lvl}</b> ${et(r.text)}</div>`).join(""))}function mm(){Ct("quests-list").innerHTML=`<div class="qp">Quest Points: ${ya()}</div>`+Object.entries(Ui).map(([n,e])=>{let t=Vn(n);return`<div class="quest-item ${t>=e.done?"complete":t>0?"active":""}" data-quest="${n}"><div class="q-name">${et(e.name)}</div><div class="q-status">${t>=e.done?"Completed":t>0?"In progress":"Not started"}</div></div>`}).join("")}function Gb(n){let e=Ui[n],t=Vn(n),i=[];for(let s=t===0?0:1;s<=Math.max(t,0);s++)e.journal[s]&&i.push(`<div class="${s<t?"strike":""}">${et(e.journal[s])}</div>`);br(e.name,`<div class="sub">Start: ${et(e.start)} | ${et(e.difficulty)}</div>${i.join("")}`+(t>=e.done?"":`<div class="sub">Rewards: ${e.rewards.map(et).join(", ")}</div>`))}function Th(){let n=p.player;if(!n)return;let e=we("hitpoints");Ct("hp-text").textContent=n.hp,Ct("hp-fill").style.height=Math.max(0,100*n.hp/e)+"%"}function gm(n,e="game"){let t=Ct("chat-messages"),i=document.createElement("div");for(i.className="chat-line "+e,i.textContent=n,t.appendChild(i);t.children.length>80;)t.firstChild.remove();t.scrollTop=t.scrollHeight}function um(){Ct("chatbox").classList.toggle("filtered",!!Nt().chatFilter)}function Vb(){let n=Ct("chat-input"),e=Ct("chat-input-row"),t=()=>{n.classList.add("visible"),e.classList.add("chatting"),n.focus()},i=()=>{n.classList.remove("visible"),e.classList.remove("chatting"),n.blur()};Ct("chat-prompt").addEventListener("click",t),window.addEventListener("keydown",s=>{s.key==="Enter"&&!(document.activeElement&&document.activeElement.tagName==="INPUT")&&(t(),s.preventDefault())}),n.addEventListener("keydown",s=>{if(s.stopPropagation(),s.key==="Escape"&&i(),s.key!=="Enter")return;let r=n.value.trim();n.value="",i(),r&&(gm("You: "+r,"player"),Promise.resolve().then(()=>(qi(),gp)).then(o=>o.overhead(p.player,r)))})}var Ct,Ah=Ue(()=>{It();In();Di();ma();Cc();gt();ei();Er();cm();wr();th();gt();ei();Ct=n=>document.getElementById(n)});function ym(n){let e=Ip[n.def.dialogue];if(!e){N(`${n.def.name} doesn't seem interested in talking.`);return}p.ui.open="dialogue",Lh=n,Ih(n,e,e.start(Rs))}function Ih(n,e,t){if(!t||t==="end"){xm();return}let i=e.nodes[t];if(!i){xm();return}let s=i.npc!==void 0?n.def.name:"You",r=i.npc??i.player,o=(i.options||[]).filter(l=>!l.if||l.if(Rs)),a=(l,c)=>{c&&c(Rs),i.action&&!i._ran&&i.action(Rs),Ih(n,e,l)};o.length?Ss(s,r,o.map(l=>({text:l.text,fn:()=>{i.action&&i.action(Rs),l.action&&l.action(Rs),Ih(n,e,l.next)}}))):Ss(s,r,[{text:"Click here to continue",cont:!0,fn:()=>a(i.next)}])}function xm(){if(ws(),p.ui.open==="dialogue"&&(p.ui.open=null),Cs){let n=Cs;Cs=null,n()}}function Wb(n){let e=Ui[n];Vn(n)>=e.done||(xa(n,e.done),n==="strongbox_showdown"&&(Ft("attack",350),Ft("ranged",350),it("coins",500),Rs.give("deputy_badge",1)),N(`Congratulations! Quest complete: ${e.name}.`,"quest"),Ha(e))}function qb(n){if(p.coins<n){N("You can't afford a room.");return}p.coins-=n,se("coins");let e=document.getElementById("fade"),t=p.player;t.path=[],t.action=null,e.innerHTML='<div class="fade-text">You spend the night upstairs...</div>',e.classList.add("on"),p.traveling=!0,setTimeout(()=>{t.hp=we("hitpoints"),p.faith=we("prayer"),se("hp"),se("faith"),N("You spend the night upstairs and wake up refreshed. Your Hitpoints and Faith are fully restored."),setTimeout(()=>{e.classList.remove("on"),p.traveling=!1,setTimeout(()=>{e.innerHTML=""},450)},1200)},500)}var Rs,Cs,Lh,kh=Ue(()=>{It();qi();ah();ma();kp();eh();gt();Ah();yr();Rs={stage:n=>Vn(n),setStage:(n,e)=>xa(n,e),has:(n,e=1)=>Bt(n,e),remove:(n,e=1)=>sn(n,e),give:(n,e=1)=>{it(n,e)||(bs(n,e,p.player.x,p.player.z),N("Your inventory is full, so it was placed on the ground."))},complete:n=>Wb(n),openShop:n=>{Cs=()=>Mr(n)},openBank:()=>{Cs=()=>Sr()},coins:()=>p.coins,rest:n=>{Cs=()=>qb(n)},travel:()=>{Cs=()=>jr()},say:n=>{Lh&&Kt(Lh,n)},sellBones:n=>{let e=Qn("bones");if(!e){N("You don't have any bones.");return}sn("bones",e),p.coins+=e*n,se("coins"),N(`Reverend Clay takes ${e} bone${e>1?"s":""} for burial and gives you ${e*n} coins.`)},sellFlakes:n=>{let e=Qn("gold_flakes");if(!e){N("You don't have any gold flakes.");return}sn("gold_flakes",e),p.coins+=e*n,se("coins"),N(`The assayer weighs ${e} gold flake${e>1?"s":""} and pays you ${e*n} coins.`)},tan:()=>{let n=0,e=0;for(let[t,i]of Object.entries(sp))for(;Bt(t)&&p.coins>=i.fee;)sn(t,1),it(i.to,1),p.coins-=i.fee,e+=i.fee,n++;se("coins"),N(n?`Tanner Jed tans ${n} hide${n>1?"s":""} into leather for ${e} coin${e>1?"s":""}.`:"You don't have any hides to tan (or can't pay the fee).")}},Cs=null,Lh=null;Qe("pickup",n=>{n==="strongbox"&&Vn("strongbox_showdown")===2&&(xa("strongbox_showdown",3),N("You found the stolen strongbox! Return it to Sheriff Calloway.","quest"))})});function Za(n){let e=xe[n];if(!e||!e.pet)return!1;if(p.petNpc)return N("You already have a follower."),!1;let t=p.player;return p.petNpc=Da({type:e.pet,x:t.x,z:t.z,wander:0}),p.pet=n,!0}function vm(){let n=p.petNpc;if(n){if(!Ht(p.pet)){N("You don't have enough inventory space.");return}it(p.pet,1),Uf(n),p.npcs.splice(p.npcs.indexOf(n),1),p.petNpc=null,p.pet=null,N("You pick up your pet.")}}function _m(n){Qe("petdrop",e=>{p.petNpc?Ht(e)?(it(e,1),N("You feel something weird sneaking into your backpack.","quest")):bs(e,1,p.player.x,p.player.z,3e3):(Za(e),N("You have a funny feeling like you're being followed.","quest"))}),n&&n.pet&&xe[n.pet]&&Za(n.pet)}var Dh=Ue(()=>{It();In();gt();yr();qn()});var xp={};nl(xp,{clearUse:()=>Ps,defaultAction:()=>so,entName:()=>io,entityOptions:()=>Nh,examine:()=>wm,interact:()=>En,invDrop:()=>Ph,invOptions:()=>Ch,invPrimary:()=>Rh,invUseSelected:()=>$a,playerTick:()=>Oh,walkTo:()=>no,worldOptions:()=>xi});function no(n,e){let t=to();if(t.dead)return;if(Wa()){N("You're stunned!");return}let i=Dc(t.x,t.z,n,e);t.action=null,t.anim=null,t.face=null,Ps(),i&&(t.path=i,t.dest=i.length?i[i.length-1]:null)}function En(n,e,t={}){let i=to();Ps(),i.action={type:e,ent:n,...t},i.anim=null,i.path=[],i.dest=null,Sm(i)}function Xb(n){return n.type==="attack"?ga():1}function Mm(n,e,t){if(Fi(n,e,t.x,t.z,1))return!0;let i=t.x-n,s=t.z-e;if(Math.abs(i)+Math.abs(s)!==2||i&&s)return!1;let r=fi(n+i/2,e+s/2);return!!(r&&r.def.counter)}function Sm(n){let e=n.action,t=e.ent;if(e.type==="take"){let i=Dc(n.x,n.z,t.x,t.z);n.path=i||[]}else bm.includes(e.type)&&t.kind==="npc"?n.path=Sa(n.x,n.z,(i,s)=>Mm(i,s,t),t.x,t.z)||[]:n.path=uf(n.x,n.z,t.x,t.z,Xb(e))||[];e.tx=t.x,e.tz=t.z,n.dest=n.path.length?n.path[n.path.length-1]:null}function Uh(n,e){let t=e.ent;return e.type==="take"?n.x===t.x&&n.z===t.z:e.type==="attack"?Xf(n,t):bm.includes(e.type)&&t.kind==="npc"?Mm(n.x,n.z,t):Fi(n.x,n.z,t.x,t.z,1)}function Yb(n){let e=n.ent;return e.kind==="npc"?!e.dead:e.kind==="ground"?p.ground.includes(e):e.kind==="object"?!!e.mesh:!0}function wm(n){n.kind==="npc"?N(n.def.examine):n.kind==="object"?N(n.depleted?"It has been depleted. It will be back soon.":n.text||n.def.examine):n.kind==="ground"&&N(xe[n.id].examine)}function Nh(n){let e=[],t=io(n),i=(s,r)=>e.push({label:s,html:`${s} <span class="cm-target">${t}</span>`,fn:r});if(p.useSlot!=null&&p.inv[p.useSlot]&&n.kind!=="ground"){let s=xe[p.inv[p.useSlot].id];e.push({label:"Use",html:`Use ${s.name} -> <span class="cm-target">${t}</span>`,fn:()=>$a(n)})}if(n.kind==="npc"){n.def.combat&&!n.def.talkFirst&&i("Attack",()=>En(n,"attack"));let s={Milk:"milk","Talk-to":"talk",Trade:"trade",Bank:"bank","Pick-up":"petpickup",Travel:"travel",Pet:"pet",Groom:"groom"};for(let r of n.def.options||[])i(r,()=>En(n,s[r]||"talk"));n.def.thievable&&i("Pickpocket",()=>En(n,"pickpocket")),n.def.combat&&n.def.talkFirst&&i("Attack",()=>En(n,"attack"))}else n.kind==="object"?(n.def.gather&&i(n.def.action,()=>En(n,"gather")),n.def.cookable&&i("Cook",()=>En(n,"cook")),n.def.pray&&i("Pray-at",()=>En(n,"pray")),n.def.verb&&i(n.def.verb,()=>En(n,"objuse"))):n.kind==="ground"&&i("Take",()=>En(n,"take"));return e}function io(n){return n.kind==="npc"?n.def.name+(n.def.combat?` (level-${n.def.combat.level})`:""):n.kind==="object"?n.def.name:n.kind==="ground"?xe[n.id].name+(n.qty>1?` (${n.qty})`:""):""}function xi(n){let e=n.entity?Nh(n.entity):[];if(n.tile)for(let t of p.ground)t.x===n.tile.x&&t.z===n.tile.z&&t!==n.entity&&e.push(...Nh(t));return n.tile&&e.push({label:"Walk here",fn:()=>no(n.tile.x,n.tile.z)}),n.entity&&e.push({label:"Examine",html:`Examine <span class="cm-target">${io(n.entity)}</span>`,fn:()=>wm(n.entity)}),e}function so(n){let e=xi(n);return e.length&&!(n.entity&&n.entity.kind==="object"&&!n.entity.def.gather&&!n.entity.def.cookable&&!n.entity.def.pray&&!n.entity.def.verb&&p.useSlot==null)?(e[0].fn(),e[0]):n.tile?(no(n.tile.x,n.tile.z),{label:"Walk here"}):null}function Ps(){p.useSlot!=null&&(p.useSlot=null,se("inv"))}function Em(n){let e=xe[n];return e.food?e.food.drink?"Drink":"Eat":e.bury?"Bury":e.pouch?"Open-all":e.equip?e.equip.slot==="weapon"?"Wield":"Wear":e.burn&&Bt("tinderbox")?"Light":"Use"}function Rh(n){let e=p.inv[n];e&&zh(n,Em(e.id))}function Ch(n){let e=p.inv[n],t=xe[e.id],i=[Em(e.id)];return i[0]!=="Use"&&i.push("Use"),i.push("Drop","Examine"),i.map(s=>({label:s,html:`${s} <span class="cm-target">${t.name}</span>`,fn:()=>zh(n,s)}))}function zh(n,e){let t=p.inv[n];if(!t)return;let i=xe[t.id],s=to();if(e==="Eat"||e==="Drink"){let r=we("hitpoints"),o=s.hp;fs(n),(i.food.next||i.food.leaves)&&(p.inv[n]={id:i.food.next||i.food.leaves,qty:1},se("inv")),s.hp=Math.min(r,s.hp+i.food.heal),s.cooldown=Math.max(s.cooldown,3),N(`You ${e==="Drink"?"drink":"eat"} the ${i.name.toLowerCase()}.`+(o<r?" It heals some health.":"")),i.boost&&(tf(i.boost),N(i.boost.attack<0?"You feel stronger... and a little dizzy.":"You feel reinvigorated.")),se("hp"),se("eat")}else if(e==="Open-all")Mp(n);else if(e==="Bury"){fs(n);let r=Ma(s.x,s.z),o=r&&r.blessed;Ft("prayer",i.bury*(o?1.5:1)),N("You dig a hole in the ground... You bury the bones."+(o?" The sanctified ground blesses your offering.":"")),s.cooldown=Math.max(s.cooldown,2)}else e==="Wield"||e==="Wear"?rf(n):e==="Light"?jc(s,t.id):e==="Use"?(p.useSlot=n,se("inv"),N(`Use ${i.name} with...`,"system")):e==="Drop"&&i.pet?!p.petNpc&&Za(t.id)&&fs(n):e==="Drop"?(fs(n),bs(t.id,t.qty,s.x,s.z),p.useSlot===n&&Ps()):e==="Examine"&&N(i.examine)}function Ph(n){zh(n,"Drop")}function $a(n){let e=p.useSlot,t=p.inv[e];if(Ps(),!t)return;let i=t.id;if(n.kind==="invslot"){let s=p.inv[n.slot]&&p.inv[n.slot].id;if(!s||n.slot===e)return;let r=["bucket_milk","flour","egg"];if(r.includes(i)&&r.includes(s)&&i!==s){Kb();return}let o=xe[i].burn?i:xe[s].burn?s:null;if(o&&(i==="tinderbox"||s==="tinderbox")){jc(to(),o);return}}else if(n.kind==="object"&&n.def.cookable&&xe[i].cook){En(n,"cook",{item:i});return}N("Nothing interesting happens.")}function Oh(){let n=to();if(n.dead)return;if(n.cooldown>0&&n.cooldown--,Wa()){n.path=[];return}let e=n.action;if(e&&e.ent&&!Yb(e)&&(n.action=null,n.anim=null),n.action&&n.action.ent){let o=n.action;Uh(n,o)?n.path=[]:(o.started&&(o.started=!1,n.anim=null),(!n.path.length||o.tx!==o.ent.x||o.tz!==o.ent.z)&&Sm(n))}let t=p.run&&p.runEnergy>0&&n.path.length>1,i=t?2:1,s=0;for(let o=0;o<i&&n.path.length;o++){let a=n.path[0];if($t(a.x,a.z)){n.path=[];break}if(n.path.shift(),n.x=a.x,n.z=a.z,n.visQ.push({x:a.x,z:a.z}),s++,n.action&&n.action.ent&&Uh(n,n.action)){n.path=[];break}}t&&s===2?(p.runEnergy=Math.max(0,p.runEnergy-.7),p.runEnergy<=0&&(p.run=!1,N("You have run out of run energy."),se("settings"))):p.runEnergy=Math.min(100,p.runEnergy+.5),s&&(n.moveSpeed=s/.6,(!n.action||n.action.type!=="firemake")&&(n.anim=null)),n.path.length||(n.dest=null);let r=n.action;if(r&&r.type==="firemake"){s||ep(n);return}if(r&&r.type==="channel"){if(s){n.action=null,n.anim=null;return}--r.timer<=0&&(n.action=null,n.anim=null,r.done());return}if(!(!r||!r.ent||!Uh(n,r)))switch(n.face=r.ent,r.type){case"attack":n.cooldown<=0&&Yf(n,r.ent);break;case"talk":n.action=null,r.ent.face=n,ym(r.ent);break;case"trade":n.action=null,Mr(r.ent.def.shop);break;case"bank":n.action=null,Sr();break;case"take":n.action=null,$f(r.ent);break;case"pray":n.action=null,Wf();break;case"petpickup":n.action=null,vm();break;case"travel":n.action=null,r.ent.face=n,jr();break;case"objuse":n.action=null,$b(r.ent);break;case"pet":n.action=null,Kt(r.ent,"Neigh!"),N("You pat the horse. It nuzzles your hat.");break;case"groom":n.action=null,Zb(r.ent);break;case"milk":n.action=null,Jb(r.ent);break;case"pickpocket":n.action=null,vp(n,r.ent);break;case"gather":r.started?jf(n,r.ent):Kf(n,r.ent)||(n.action=null,n.anim=null);break;case"cook":r.started?np(n):tp(n,r.ent,r.item)||(n.action=null);break}}function $b(n){let e=n.def.use;if(n.def.steal){_p(p.player,n);return}if(n.def.crack){bp(p.player,n);return}if(e==="coach")jr();else if(e==="bell")Kt(n.npcProxy||p.player,"DONG! DONG!"),Yi("mine"),N("You ring the church bell. Its peal echoes across the desert.");else if(e==="coop"){if(n.eggAt&&p.tick-n.eggAt<50){N("There are no eggs in the coop right now. Check back later.");return}if(!Ht("egg")){N("You don't have enough inventory space.");return}n.eggAt=p.tick,it("egg",1),N("You find a fresh egg in the coop.")}else e==="stairs"?N("The guest rooms upstairs are rented by Miss Lottie. Ask her about a room for the night."):e==="piano"&&(Kt(p.player,"\u266A \u266B \u266A"),N("You plink out a tune. Ivory Pete winces politely."))}function Zb(n){if(!Bt("horse_brush")){N("You need a horse brush to groom the horse. Ellie May sells them.");return}if(n.groomedAt&&p.tick-n.groomedAt<100){N("This horse is already gleaming. Try again later.");return}n.groomedAt=p.tick,p.player.anim="chop",setTimeout(()=>{p.player.anim==="chop"&&!p.player.action&&(p.player.anim=null)},1800),Kt(n,"Neigh!"),p.coins+=5,se("coins"),N("You groom the horse until its coat shines. Ellie May tosses you 5 coins.")}function Jb(n){if(!Bt("bucket")){N("You need an empty bucket to milk the cow. The general store sells them.");return}sn("bucket",1),it("bucket_milk",1),Kt(n,"Moo!"),N("You milk the cow and fill your bucket with fresh milk.")}function Kb(){if(!Bt("bucket_milk")||!Bt("flour")||!Bt("egg")){N("You need a bucket of milk, a pot of flour and an egg to make cake batter.");return}sn("bucket_milk",1),sn("flour",1),sn("egg",1),it("cake_batter",1),it("bucket",1),N("You mix the milk, flour and egg into a smooth cake batter.")}var to,bm,Er=Ue(()=>{It();In();gt();vs();ah();Sp();qi();qa();It();yr();Qc();kh();ei();It();xr();Dh();to=()=>p.player;bm=["talk","trade","bank","travel"]});fa();gt();It();In();vs();qn();yr();Qc();Er();Ah();qi();It();qn();Er();ei();var vi=new Map,Tm=0,Am=0,yi=!1,Ja=null,Ls=!1,ro=0,Tr={};function Pm(n){let e=document.getElementById("game-root"),t=r=>{let o=n.getBoundingClientRect();return{x:r.clientX-o.left,y:r.clientY-o.top}};n.addEventListener("contextmenu",r=>r.preventDefault()),n.addEventListener("pointerdown",r=>{if(n.setPointerCapture(r.pointerId),vi.set(r.pointerId,{x:r.clientX,y:r.clientY}),Ba()){Ms(),Ls=!0;return}if(vi.size===2){clearTimeout(Ja),yi=!0,ro=Rm();return}if(Tm=r.clientX,Am=r.clientY,yi=!1,Ls=!1,r.button===2){Ls=!0,s(t(r));return}if(r.button===1){yi=!0;return}r.pointerType!=="mouse"&&(Ja=setTimeout(()=>{Ls=!0,s(t(r))},480))}),n.addEventListener("pointermove",r=>{let o=vi.get(r.pointerId);if(!o)return;let a=r.clientX-o.x,l=r.clientY-o.y;if(vi.set(r.pointerId,{x:r.clientX,y:r.clientY}),vi.size===2){let c=Rm();ro>0&&Yc(ro/c),ro=c;return}!yi&&Math.hypot(r.clientX-Tm,r.clientY-Am)>10&&!Ls&&(yi=!0,clearTimeout(Ja)),yi&&(r.buttons&1||r.buttons&4||r.pointerType!=="mouse")&&mr(-a*.008,l*.006)});let i=r=>{let o=vi.has(r.pointerId);if(vi.delete(r.pointerId),clearTimeout(Ja),vi.size>0)return;if(ro=0,!o||yi||Ls||r.type==="pointercancel"){window.__lastTap={skipped:!0,had:o,dragging:yi,lpFired:Ls,type:r.type},yi=!1;return}if(r.button!==0&&r.pointerType==="mouse")return;let a=t(r);p.ui.open&&Cm();let l=so(Hi(a.x,a.y));window.__lastTap={x:a.x,y:a.y,action:l&&l.label},l&&jb(a.x,a.y,l.label==="Walk here"?"yellow":"red")};n.addEventListener("pointerup",i),n.addEventListener("pointercancel",i),n.addEventListener("wheel",r=>{r.preventDefault(),Yc(r.deltaY>0?1.1:.9)},{passive:!1}),window.addEventListener("keydown",r=>{document.activeElement&&document.activeElement.tagName==="INPUT"||(Tr[r.key]=!0,r.key==="Escape"&&(Ms(),Ps(),Cm()))}),window.addEventListener("keyup",r=>{Tr[r.key]=!1}),e.addEventListener("pointerdown",r=>{Ba()&&!r.target.closest("#context-menu")&&r.target!==n&&Ms()});function s(r){let o=Hi(r.x,r.y),a=xi(o);if(!a.length)return;let l=n.getBoundingClientRect(),c=e.getBoundingClientRect();_r(r.x+l.left-c.left,r.y+l.top-c.top,o.entity?io(o.entity):"Choose Option",a)}}function Rm(){let[n,e]=[...vi.values()];return Math.hypot(n.x-e.x,n.y-e.y)||1}function Cm(){p.ui.open==="shop"||p.ui.open==="bank"?Promise.resolve().then(()=>(ei(),oh)).then(n=>n.closeTrade()):(p.ui.open==="info"||p.ui.open==="dialogue")&&Promise.resolve().then(()=>(ei(),oh)).then(n=>{n.hideDialogue(),p.ui.open=null})}function Lm(n){Tr.ArrowLeft&&mr(-1.8*n,0),Tr.ArrowRight&&mr(1.8*n,0),Tr.ArrowUp&&mr(0,1.2*n),Tr.ArrowDown&&mr(0,-1.2*n)}function jb(n,e,t){let i=document.createElement("div");i.className="click-x "+t,i.textContent="\u2715",i.style.left=n+"px",i.style.top=e+"px",document.getElementById("hitsplats").appendChild(i),setTimeout(()=>i.remove(),400)}Ya();kh();xr();wr();It();Di();us();gt();qn();xr();Zc();wr();qa();Er();var ut=n=>document.getElementById(n);function Fh(n,e,t,i){let s=ut(n);s&&(s.querySelector(".orb-fill").style.height=Math.max(0,Math.min(100,100*e/t))+"%",s.querySelector(".orb-text").textContent=Math.floor(e),s.classList.toggle("active",!!i))}function Ka(){Fh("faith-orb",p.faith??1,we("prayer"),p.prayers&&p.prayers.size),Fh("run-orb",p.runEnergy??100,100,p.run);let n=Gn(),e=n&&n.equip.spec;ut("spec-orb").classList.toggle("disabled",!e),ut("spec-orb").title=e?`${e.name} (${e.cost}% energy) - tap to arm`:"Your weapon has no special attack",Fh("spec-orb",p.spec??100,100,p.specArmed),ut("xp-total").textContent=Jt(Object.values(p.skills).reduce((t,i)=>t+i,0)),Qb()}function Qb(){let n=p.player,e=p.npcs.find(i=>i.def.boss&&!i.dead&&(i.target===n||n.action&&n.action.ent===i)),t=ut("boss-bar");if(!e){t.hidden=!0;return}t.hidden=!1,ut("boss-name").textContent=`${e.def.name} (level-${e.def.combat.level})${e.burrowed?" - burrowed!":""}`,ut("boss-fill").style.width=Math.max(0,100*e.hp/e.maxHp)+"%",ut("boss-num").textContent=`${e.hp} / ${e.maxHp}`}var Im;function eM(n){let e=ut("toast");e.textContent=n,e.classList.add("show"),clearTimeout(Im),Im=setTimeout(()=>e.classList.remove("show"),1800)}function tM(n,e){if(Cp(),!Nt().levelUpPopups)return;let t=ki[n],i=ut("levelup-popup");i.innerHTML=`<div class="lu-icon">${t.icon}</div><div class="lu-text">Congratulations, you just advanced a ${t.name} level.<br>Your ${t.name} level is now <b>${e}</b>.</div><div class="lu-hint">Tap to close</div>`,i.hidden=!1,clearTimeout(i._t),i._t=setTimeout(()=>{i.hidden=!0},4e3)}function nM(){let n=ut("wm-canvas"),e=n.getContext("2d"),t=document.getElementById("minimap")._base,i=n.width/96;e.imageSmoothingEnabled=!1,t&&e.drawImage(t,0,0,n.width,n.height),e.font="bold 13px Georgia, serif",e.textAlign="center";for(let r of ur.filter(o=>o.id!=="desert"))e.fillStyle="rgba(0,0,0,0.6)",e.fillText(r.name,(r.x0+r.x1)/2*i+1,(r.z0+r.z1)/2*i+1),e.fillStyle="#ffe080",e.fillText(r.name,(r.x0+r.x1)/2*i,(r.z0+r.z1)/2*i);e.font="10px sans-serif",e.fillStyle="#fff";for(let r of Ni)e.fillText(r.name[0]+r.name.slice(1).toLowerCase(),(r.x+r.w/2)*i,(r.z-.3)*i);let s=p.player;e.fillStyle="#fff",e.strokeStyle="#000",e.beginPath(),e.arc((s.x+.5)*i,(s.z+.5)*i,4,0,Math.PI*2),e.fill(),e.stroke()}function iM(){p.ui.open="map",ut("world-map").hidden=!1,nM()}function sM(){ut("world-map").hidden=!0,p.ui.open==="map"&&(p.ui.open=null)}function Dm(){ut("faith-orb").addEventListener("click",()=>{if(p.prayers.size){p.prayers.clear(),se("faith");return}(p.quickPrayers||["thick_hide"]).filter(i=>Gi[i]&&we("prayer")>=Gi[i].lvl).forEach(ka)}),Qe("faith",()=>{p.prayers.size&&(p.quickPrayers=[...p.prayers])}),ut("run-orb").addEventListener("click",()=>{if(!p.run&&p.runEnergy<1){N("You don't have enough run energy.");return}p.run=!p.run,se("settings"),Ka()}),ut("spec-orb").addEventListener("click",()=>{let t=Gn(),i=t&&t.equip.spec;if(!i){N("Your weapon doesn't have a special attack.");return}if(!p.specArmed&&p.spec<i.cost){N("You don't have enough special attack energy.");return}p.specArmed=!p.specArmed,Ka()}),ut("compass").addEventListener("click",t=>{t.stopPropagation(),Ke.yaw=0}),ut("xp-btn").addEventListener("click",t=>{t.stopPropagation();let i=ut("xp-counter");i.hidden=!i.hidden,ut("xp-btn").classList.toggle("active",!i.hidden)}),ut("xp-btn").classList.add("active"),ut("worldmap-btn").addEventListener("click",iM),ut("wm-close").addEventListener("click",sM),ut("levelup-popup").addEventListener("click",()=>{ut("levelup-popup").hidden=!0});for(let t of["orbs","faith","spec","skills","equip","settings","hit","npcdeath"])Qe(t,Ka);Qe("levelup",tM),Qe("saved",()=>{Nt().autosaveNotice&&eM("\u{1F4BE} Game saved")}),Qe("hit",(t,i)=>Yi(i>0?"hit":"miss")),Qe("attackfx",(t,i,s)=>{s&&Yi("gun")}),Qe("eat",()=>Yi("eat")),Qe("pickup",()=>Yi("pickup")),Qe("death",()=>Yi("death"));let n=ut("game-canvas"),e=0;n.addEventListener("pointermove",t=>{if(t.pointerType!=="mouse"||!Nt().menuHints)return;let i=performance.now();if(i-e<80)return;e=i;let s=n.getBoundingClientRect();km(xi(Hi(t.clientX-s.left,t.clientY-s.top)))}),n.addEventListener("pointerdown",t=>{if(t.pointerType==="mouse"||!Nt().menuHints)return;let i=n.getBoundingClientRect();km(xi(Hi(t.clientX-i.left,t.clientY-i.top)),!0)}),Ka()}function km(n,e){let t=ut("hover-text");if(!n.length){t.innerHTML="";return}let i=n.length-1;t.innerHTML=`${n[0].html||n[0].label}${i>0?` <span class="ht-more">/ ${i} more option${i>1?"s":""}${e?" (long-press)":""}</span>`:""}`}Dh();qa();qn();var oM={model:"human",colors:{shirt:3824266,pants:5917242,hat:9071162,skin:14723192,vest:6965802}},Bh=null,Um=performance.now();function aM(){ef();let n=Jp();mp(n),n||(p.run=Nt().runDefault),Gf(n);let{spawns:e}=hf(),t=document.getElementById("game-canvas");Cf(t);let i=n&&n.pos&&!$t(n.pos.x,n.pos.z)?n.pos:Sn,s=p.player={kind:"player",x:i.x,z:i.z,hp:n?Math.max(1,Math.min(n.hp|0,we("hitpoints"))):we("hitpoints"),path:[],action:null,cooldown:0,maxHp:()=>we("hitpoints")};Ca(s,oM),Ff(s),window.innerHeight>window.innerWidth&&(Ke.dist=22);for(let r of e)Da(r);_m(n),p.objects=wn,dm(),hh(),Pm(t),Dm(),Of(()=>Nt().maxZoom),Qe("settings",Nm),Nm(),addEventListener("pointerdown",gh,{once:!0}),addEventListener("keydown",gh,{once:!0}),Qe("equip",zm),zm(),Qe("attackfx",uM),fm(),N("Welcome to West-Scape.","system"),N(n?"Welcome back, partner. Your progress was loaded.":"Tap to walk. Long-press (or right-click) for more options. Drag to rotate, pinch to zoom.","system"),n||N("Sheriff Calloway might have work for you - his office is on the south side of Main Street.","system"),setInterval(lM,600),setInterval(gi,6e3),addEventListener("pagehide",gi),document.addEventListener("visibilitychange",()=>{document.hidden&&gi()}),document.getElementById("loading").classList.add("hidden"),requestAnimationFrame(Om)}function lM(){try{if(p.tick++,p.loggedOut)return;Oh(),Vf();for(let i of p.npcs)Zf(i);for(let i=wn.length-1;i>=0;i--)Qf(wn[i]);for(let i=p.ground.length-1;i>=0;i--)p.tick>=p.ground[i].despawnAt&&Kc(p.ground[i]);let n=p.player;p.tick%100===0&&n.hp<we("hitpoints")&&(n.hp++,se("hp")),p.tick%100===0&&nf();let e=lf(n.x,n.z);e!==p.inBuilding&&(p.inBuilding=e,Bc(Nt().hideRoofs,e&&e.id)),p.tick%50===0&&p.spec<100&&(p.spec=Math.min(100,p.spec+10),se("spec")),se("orbs");let t=Ma(n.x,n.z);t&&t!==Bh&&(Bh&&N(`You enter ${t.name}.`,"system"),Bh=t,p.region=t.id,Pp(t.music)),n.aiming=!!(n.action&&n.action.type==="attack"&&xe[p.equip.weapon||"rusty_knife"]?.equip.style==="ranged")}catch(n){console.error(n)}}function Om(){let n=performance.now(),e=Math.min(.1,(n-Um)/1e3);Um=n,Lm(e),Nf([p.player,...p.npcs],p.player),uh([p.player,...p.npcs]),dh(),requestAnimationFrame(Om)}function Nm(){let n=Nt();Bc(n.hideRoofs,p.inBuilding&&p.inBuilding.id),document.getElementById("game-canvas").style.filter=n.brightness!==1?`brightness(${n.brightness})`:"",document.getElementById("minimap-wrap").style.display=n.minimap?"":"none",Ap({music:n.musicVolume,sfx:n.sfxVolume,sound:n.sound}),Ke.dist>n.maxZoom&&(Ke.dist=n.maxZoom)}function zm(){qc(p.player,kf(p.equip.weapon))}var cM=new Ln(.05,.05,.35),hM=new pn({color:16769152});function uM(n,e,t){if(!t)return;let i=new mt(cM,hM);Rt.add(i);let s=performance.now(),r=()=>{let o=(performance.now()-s)/180;if(o>=1){Rt.remove(i);return}let a=n.vx+(e.vx-n.vx)*o,l=n.vz+(e.vz-n.vz)*o;i.position.set(a,.9+(n.model.group.position.y+(e.model.group.position.y-n.model.group.position.y)*o),l),i.lookAt(e.vx,i.position.y,e.vz),requestAnimationFrame(r)};r()}window.WS={G:p,S:Nt,roofsHidden:Rf,invAdd:it,addXp:Ft,emit:se,samplePixels:Bf,walkTo:no,interact:En,defaultAction:so,worldOptions:xi,pick:Hi,worldToScreen:Pa,cam:Ke,objects:wn,saveGame:gi,resetSave:Xa,level:we,invCount:Qn,tileScreen:(n,e,t=.3)=>Pa(n+.5,t,e+.5)};try{aM()}catch(n){console.error(n);let e=document.getElementById("loading");e.textContent="Failed to start: "+n.message}
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
