(self.webpackChunk=self.webpackChunk||[]).push([["mcaptcha-vanilla-glue"],{"./node_modules/@mcaptcha/vanilla-glue/dist/index.js":function(w){(function(m,d){w.exports=d()})(self,()=>{return m={44:function(f){var t;t=()=>(()=>{"use strict";var a={};return{607:function(c,u){var l,s=this&&this.__extends||(l=function(n,e){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(i[o]=r[o])},l(n,e)},function(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=n}l(n,e),n.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(u,"__esModule",{value:!0}),u.ConfigurationError=void 0;var p=function(n){function e(){var i=n!==null&&n.apply(this,arguments)||this;return i.message="Provide either widget link or site key to display mCaptcha widget",i}return s(e,n),e}(Error);u.ConfigurationError=p;var h=function(){function n(e,i){var r=this;if(this.handle=function(o){console.log("message received from ".concat(o.origin," with data: ").concat(o.data.token)),new URL(o.origin).host==r.widgetLink.host?r.updateState(o.data.token):console.error("expected message from ".concat(r.widgetLink.host," but received message from ").concat(o.origin,". Aborting."))},this.updateState=i,e.widgetLink&&e.siteKey)throw new p;if(e.widgetLink)this.widgetLink=e.widgetLink;else{if(!e.siteKey)throw new p;e.siteKey.instanceUrl?(this.widgetLink=e.siteKey.instanceUrl,this.widgetLink.pathname="/widget/",this.widgetLink.search="?sitekey=".concat(e.siteKey.key)):this.widgetLink=new URL("https://demo.mcaptcha.org/widget/?sitekey=".concat(e.siteKey.key))}}return n.prototype.listen=function(){window.addEventListener("message",this.handle)},n.prototype.destroy=function(){window.removeEventListener("message",this.handle)},n}();u.default=h}}[607](0,a),a})(),f.exports=t()},607:function(f,t,a){"use strict";var c=this&&this.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(t,"__esModule",{value:!0}),t.ConfigurationError=t.ID=t.INPUT_NAME=void 0;var u=a(44);Object.defineProperty(t,"ConfigurationError",{enumerable:!0,get:function(){return u.ConfigurationError}});var l=c(a(44));t.INPUT_NAME="mcaptcha__token",t.ID="mcaptcha__widget-container",t.default=function(s){var p=this;this.setToken=function(i){return p.inputElement.value=i},this.receiver=new l.default(s,this.setToken),this.receiver.listen();var h=document.getElementById(t.ID);if(h==null)throw new Error("Element ".concat(t.ID,"'s parent element is undefined"));this.inputElement=document.createElement("input"),this.inputElement.id=t.INPUT_NAME,this.inputElement.name=t.INPUT_NAME,this.inputElement.hidden=!0,this.inputElement.required=!0,h.appendChild(this.inputElement);var n="mcaptcha-widget__iframe",e=document.createElement("iframe");e.title="mCaptcha",e.src=this.receiver.widgetLink.toString(),e.ariaRoleDescription="presentation",e.name=n,e.id=n,e.scrolling="no";try{e.sandbox="allow-same-origin allow-scripts allow-popups"}catch(i){try{e.sandbox.add("allow-same-origin"),e.sandbox.add("allow-scripts"),e.sandbox.add("allow-popups")}catch(r){e.setAttribute("sandbox","allow-same-origin allow-scripts allow-popups")}}e.width="100%",e.height="100%",e.frameBorder="0",h.appendChild(e)}}},d={},function f(t){var a=d[t];if(a!==void 0)return a.exports;var c=d[t]={exports:{}};return m[t].call(c.exports,c,c.exports,f),c.exports}(607);var m,d})}}]);