/*!
 * jQuery JavaScript Library v1.6.1
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu May 12 15:04:36 2011 -0400
 */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!cj[a]){var b=f("<"+a+">").appendTo("body"),d=b.css("display");b.remove();if(d==="none"||d===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),c.body.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write("<!doctype><html><body></body></html>");b=cl.createElement(a),cl.body.appendChild(b),d=f.css(b,"display"),c.body.removeChild(ck)}cj[a]=d}return cj[a]}function cu(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function ct(){cq=b}function cs(){setTimeout(ct,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bF.test(a)?d(a,e):b_(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bU,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bQ),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bD(a,b,c){var d=b==="width"?bx:by,e=b==="width"?a.offsetWidth:a.offsetHeight;if(c==="border")return e;f.each(d,function(){c||(e-=parseFloat(f.css(a,"padding"+this))||0),c==="margin"?e+=parseFloat(f.css(a,"margin"+this))||0:e-=parseFloat(f.css(a,"border"+this+"Width"))||0});return e}function bn(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bm(a){f.nodeName(a,"input")?bl(a):a.getElementsByTagName&&f.grep(a.getElementsByTagName("input"),bl)}function bl(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bk(a){return"getElementsByTagName"in a?a.getElementsByTagName("*"):"querySelectorAll"in a?a.querySelectorAll("*"):[]}function bj(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bi(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c=f.expando,d=f.data(a),e=f.data(b,d);if(d=d[c]){var g=d.events;e=e[c]=f.extend({},d);if(g){delete e.handle,e.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)f.event.add(b,h+(g[h][i].namespace?".":"")+g[h][i].namespace,g[h][i],g[h][i].data)}}}}function bh(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function X(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(S.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function W(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function O(a,b){return(a&&a!=="*"?a+".":"")+b.replace(A,"`").replace(B,"&")}function N(a){var b,c,d,e,g,h,i,j,k,l,m,n,o,p=[],q=[],r=f._data(this,"events");if(!(a.liveFired===this||!r||!r.live||a.target.disabled||a.button&&a.type==="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var s=r.live.slice(0);for(i=0;i<s.length;i++)g=s[i],g.origType.replace(y,"")===a.type?q.push(g.selector):s.splice(i--,1);e=f(a.target).closest(q,a.currentTarget);for(j=0,k=e.length;j<k;j++){m=e[j];for(i=0;i<s.length;i++){g=s[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))&&!m.elem.disabled){h=m.elem,d=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,d=f(a.relatedTarget).closest(g.selector)[0],d&&f.contains(h,d)&&(d=h);(!d||d!==h)&&p.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=p.length;j<k;j++){e=p[j];if(c&&e.level>c)break;a.currentTarget=e.elem,a.data=e.handleObj.data,a.handleObj=e.handleObj,o=e.handleObj.origHandler.apply(e.elem,arguments);if(o===!1||a.isPropagationStopped()){c=e.level,o===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function L(a,c,d){var e=f.extend({},d[0]);e.type=a,e.originalEvent={},e.liveFired=b,f.event.handle.call(c,e),e.isDefaultPrevented()&&d[0].preventDefault()}function F(){return!0}function E(){return!1}function m(a,c,d){var e=c+"defer",g=c+"queue",h=c+"mark",i=f.data(a,e,b,!0);i&&(d==="queue"||!f.data(a,g,b,!0))&&(d==="mark"||!f.data(a,h,b,!0))&&setTimeout(function(){!f.data(a,g,b,!0)&&!f.data(a,h,b,!0)&&(f.removeData(a,e,!0),i.resolve())},0)}function l(a){for(var b in a)if(b!=="toJSON")return!1;return!0}function k(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(j,"$1-$2").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNaN(d)?i.test(d)?f.parseJSON(d):d:parseFloat(d)}catch(g){}f.data(a,c,d)}else d=b}return d}var c=a.document,d=a.navigator,e=a.location,f=function(){function H(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(H,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/\d/,n=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,o=/^[\],:{}\s]*$/,p=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,q=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,r=/(?:^|:|,)(?:\s*\[)+/g,s=/(webkit)[ \/]([\w.]+)/,t=/(opera)(?:.*version)?[ \/]([\w.]+)/,u=/(msie) ([\w.]+)/,v=/(mozilla)(?:.*? rv:([\w.]+))?/,w=d.userAgent,x,y,z,A=Object.prototype.toString,B=Object.prototype.hasOwnProperty,C=Array.prototype.push,D=Array.prototype.slice,E=String.prototype.trim,F=Array.prototype.indexOf,G={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=n.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.6.1",length:0,size:function(){return this.length},toArray:function(){return D.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?C.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),y.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(D.apply(this,arguments),"slice",D.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:C,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;y.resolveWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!y){y=e._Deferred();if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",z,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",z),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&H()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNaN:function(a){return a==null||!m.test(a)||isNaN(a)},type:function(a){return a==null?String(a):G[A.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;if(a.constructor&&!B.call(a,"constructor")&&!B.call(a.constructor.prototype,"isPrototypeOf"))return!1;var c;for(c in a);return c===b||B.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(o.test(b.replace(p,"@").replace(q,"]").replace(r,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(b,c,d){a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b)),d=c.documentElement,(!d||!d.nodeName||d.nodeName==="parsererror")&&e.error("Invalid XML: "+b);return c},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:E?function(a){return a==null?"":E.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?C.call(c,a):e.merge(c,a)}return c},inArray:function(a,b){if(F)return F.call(b,a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=D.call(arguments,2),g=function(){return a.apply(c,f.concat(D.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=s.exec(a)||t.exec(a)||u.exec(a)||a.indexOf("compatible")<0&&v.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){G["[object "+b+"]"]=b.toLowerCase()}),x=e.uaMatch(w),x.browser&&(e.browser[x.browser]=!0,e.browser.version=x.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?z=function(){c.removeEventListener("DOMContentLoaded",z,!1),e.ready()}:c.attachEvent&&(z=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",z),e.ready())});return e}(),g="done fail isResolved isRejected promise then always pipe".split(" "),h=[].slice;f.extend({_Deferred:function(){var a=[],b,c,d,e={done:function(){if(!d){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=f.type(i),j==="array"?e.done.apply(e,i):j==="function"&&a.push(i);k&&e.resolveWith(k[0],k[1])}return this},resolveWith:function(e,f){if(!d&&!b&&!c){f=f||[],c=1;try{while(a[0])a.shift().apply(e,f)}finally{b=[e,f],c=0}}return this},resolve:function(){e.resolveWith(this,arguments);return this},isResolved:function(){return!!c||!!b},cancel:function(){d=1,a=[];return this}};return e},Deferred:function(a){var b=f._Deferred(),c=f._Deferred(),d;f.extend(b,{then:function(a,c){b.done(a).fail(c);return this},always:function(){return b.done.apply(b,arguments).fail.apply(this,arguments)},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,pipe:function(a,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[c,"reject"]},function(a,c){var e=c[0],g=c[1],h;f.isFunction(e)?b[a](function(){h=e.apply(this,arguments),h&&f.isFunction(h.promise)?h.promise().then(d.resolve,d.reject):d[g](h)}):b[a](d[g])})}).promise()},promise:function(a){if(a==null){if(d)return d;d=a={}}var c=g.length;while(c--)a[g[c]]=b[g[c]];return a}}),b.done(c.cancel).fail(b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){function i(a){return function(c){b[a]=arguments.length>1?h.call(arguments,0):c,--e||g.resolveWith(g,h.call(b,0))}}var b=arguments,c=0,d=b.length,e=d,g=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred();if(d>1){for(;c<d;c++)b[c]&&f.isFunction(b[c].promise)?b[c].promise().then(i(c),g.reject):--e;e||g.resolveWith(g,b)}else g!==a&&g.resolveWith(g,d?[a]:[]);return g.promise()}}),f.support=function(){var a=c.createElement("div"),b=c.documentElement,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;a.setAttribute("className","t"),a.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=a.getElementsByTagName("*"),e=a.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};f=c.createElement("select"),g=f.appendChild(c.createElement("option")),h=a.getElementsByTagName("input")[0],j={leadingWhitespace:a.firstChild.nodeType===3,tbody:!a.getElementsByTagName("tbody").length,htmlSerialize:!!a.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55$/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:a.className!=="t",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},h.checked=!0,j.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,j.optDisabled=!g.disabled;try{delete a.test}catch(s){j.deleteExpando=!1}!a.addEventListener&&a.attachEvent&&a.fireEvent&&(a.attachEvent("onclick",function b(){j.noCloneEvent=!1,a.detachEvent("onclick",b)}),a.cloneNode(!0).fireEvent("onclick")),h=c.createElement("input"),h.value="t",h.setAttribute("type","radio"),j.radioValue=h.value==="t",h.setAttribute("checked","checked"),a.appendChild(h),k=c.createDocumentFragment(),k.appendChild(a.firstChild),j.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,a.innerHTML="",a.style.width=a.style.paddingLeft="1px",l=c.createElement("body"),m={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};for(q in m)l.style[q]=m[q];l.appendChild(a),b.insertBefore(l,b.firstChild),j.appendChecked=h.checked,j.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,j.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",j.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",n=a.getElementsByTagName("td"),r=n[0].offsetHeight===0,n[0].style.display="",n[1].style.display="none",j.reliableHiddenOffsets=r&&n[0].offsetHeight===0,a.innerHTML="",c.defaultView&&c.defaultView.getComputedStyle&&(i=c.createElement("div"),i.style.width="0",i.style.marginRight="0",a.appendChild(i),j.reliableMarginRight=(parseInt((c.defaultView.getComputedStyle(i,null)||{marginRight:0}).marginRight,10)||0)===0),l.innerHTML="",b.removeChild(l);if(a.attachEvent)for(q in{submit:1,change:1,focusin:1})p="on"+q,r=p in a,r||(a.setAttribute(p,"return;"),r=typeof a[p]=="function"),j[q+"Bubbles"]=r;return j}(),f.boxModel=f.support.boxModel;var i=/^(?:\{.*\}|\[.*\])$/,j=/([a-z])([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!l(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g=f.expando,h=typeof c=="string",i,j=a.nodeType,k=j?f.cache:a,l=j?a[f.expando]:a[f.expando]&&f.expando;if((!l||e&&l&&!k[l][g])&&h&&d===b)return;l||(j?a[f.expando]=l=++f.uuid:l=f.expando),k[l]||(k[l]={},j||(k[l].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?k[l][g]=f.extend(k[l][g],c):k[l]=f.extend(k[l],c);i=k[l],e&&(i[g]||(i[g]={}),i=i[g]),d!==b&&(i[f.camelCase(c)]=d);if(c==="events"&&!i[c])return i[g]&&i[g].events;return h?i[f.camelCase(c)]:i}},removeData:function(b,c,d){if(!!f.acceptData(b)){var e=f.expando,g=b.nodeType,h=g?f.cache:b,i=g?b[f.expando]:f.expando;if(!h[i])return;if(c){var j=d?h[i][e]:h[i];if(j){delete j[c];if(!l(j))return}}if(d){delete h[i][e];if(!l(h[i]))return}var k=h[i][e];f.support.deleteExpando||h!=a?delete h[i]:h[i]=null,k?(h[i]={},g||(h[i].toJSON=f.noop),h[i][e]=k):g&&(f.support.deleteExpando?delete b[f.expando]:b.removeAttribute?b.removeAttribute(f.expando):b[f.expando]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d=null;if(typeof a=="undefined"){if(this.length){d=f.data(this[0]);if(this[0].nodeType===1){var e=this[0].attributes,g;for(var h=0,i=e.length;h<i;h++)g=e[h].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),k(this[0],g,d[g]))}}return d}if(typeof a=="object")return this.each(function(){f.data(this,a)});var j=a.split(".");j[1]=j[1]?"."+j[1]:"";if(c===b){d=this.triggerHandler("getData"+j[1]+"!",[j[0]]),d===b&&this.length&&(d=f.data(this[0],a),d=k(this[0],a,d));return d===b&&j[1]?this.data(j[0]):d}return this.each(function(){var b=f(this),d=[j[0],c];b.triggerHandler("setData"+j[1]+"!",d),f.data(this,a,c),b.triggerHandler("changeData"+j[1]+"!",d)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,c){a&&(c=(c||"fx")+"mark",f.data(a,c,(f.data(a,c,b,!0)||0)+1,!0))},_unmark:function(a,c,d){a!==!0&&(d=c,c=a,a=!1);if(c){d=d||"fx";var e=d+"mark",g=a?0:(f.data(c,e,b,!0)||1)-1;g?f.data(c,e,g,!0):(f.removeData(c,e,!0),m(c,d,"mark"))}},queue:function(a,c,d){if(a){c=(c||"fx")+"queue";var e=f.data(a,c,b,!0);d&&(!e||f.isArray(d)?e=f.data(a,c,f.makeArray(d),!0):e.push(d));return e||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e;d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),d.call(a,function(){f.dequeue(a,b)})),c.length||(f.removeData(a,b+"queue",!0),m(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){f.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f._Deferred(),!0))h++,l.done(m);m();return d.promise()}});var n=/[\n\t\r]/g,o=/\s+/,p=/\r/g,q=/^(?:button|input)$/i,r=/^(?:button|input|object|select|textarea)$/i,s=/^a(?:rea)?$/i,t=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,u=/\:/,v,w;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.addClass(a.call(this,b,c.attr("class")||""))});if(a&&typeof a=="string"){var b=(a||"").split(o);for(var c=0,d=this.length;c<d;c++){var e=this[c];if(e.nodeType===1)if(!e.className)e.className=a;else{var g=" "+e.className+" ",h=e.className;for(var i=0,j=b.length;i<j;i++)g.indexOf(" "+b[i]+" ")<0&&(h+=" "+b[i]);e.className=f.trim(h)}}}return this},removeClass:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.removeClass(a.call(this,b,c.attr("class")))});if(a&&typeof a=="string"||a===b){var c=(a||"").split(o);for(var d=0,e=this.length;d<e;d++){var g=this[d];if(g.nodeType===1&&g.className)if(a){var h=(" "+g.className+" ").replace(n," ");for(var i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){var d=f(this);d.toggleClass(a.call(this,c,d.attr("class"),b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(o);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if((" "+this[c].className+" ").replace(n," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e=this[0];if(!arguments.length){if(e){c=f.valHooks[e.nodeName.toLowerCase()]||f.valHooks[e.type];if(c&&"get"in c&&(d=c.get(e,"value"))!==b)return d;return(e.value||"").replace(p,"")}return b}var g=f.isFunction(a);return this.each(function(d){var e=f(this),h;if(this.nodeType===1){g?h=a.call(this,d,e.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c=a.selectedIndex,d=[],e=a.options,g=a.type==="select-one";if(c<0)return null;for(var h=g?c:0,i=g?c+1:e.length;h<i;h++){var j=e[h];if(j.selected&&(f.support.optDisabled?!j.disabled:j.getAttribute("disabled")===null)&&(!j.parentNode.disabled||!f.nodeName(j.parentNode,"optgroup"))){b=f(j).val();if(g)return b;d.push(b)}}if(g&&!d.length&&e.length)return f(e[c]).val();return d},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attrFix:{tabindex:"tabIndex"},attr:function(a,c,d,e){var g=a.nodeType;if(!a||g===3||g===8||g===2)return b;if(e&&c in f.attrFn)return f(a)[c](d);if(!("getAttribute"in a))return f.prop(a,c,d);var h,i,j=g!==1||!f.isXMLDoc(a);c=j&&f.attrFix[c]||c,i=f.attrHooks[c],i||(!t.test(c)||typeof d!="boolean"&&d!==b&&d.toLowerCase()!==c.toLowerCase()?v&&(f.nodeName(a,"form")||u.test(c))&&(i=v):i=w);if(d!==b){if(d===null){f.removeAttr(a,c);return b}if(i&&"set"in i&&j&&(h=i.set(a,d,c))!==b)return h;a.setAttribute(c,""+d);return d}if(i&&"get"in i&&j)return i.get(a,c);h=a.getAttribute(c);return h===null?b:h},removeAttr:function(a,b){var c;a.nodeType===1&&(b=f.attrFix[b]||b,f.support.getSetAttribute?a.removeAttribute(b):(f.attr(a,b,""),a.removeAttributeNode(a.getAttributeNode(b))),t.test(b)&&(c=f.propFix[b]||b)in a&&(a[c]=!1))},attrHooks:{type:{set:function(a,b){if(q.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},tabIndex:{get:function(a){var c=a.getAttributeNode("tabIndex");return c&&c.specified?parseInt(c.value,10):r.test(a.nodeName)||s.test(a.nodeName)&&a.href?0:b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e=a.nodeType;if(!a||e===3||e===8||e===2)return b;var g,h,i=e!==1||!f.isXMLDoc(a);c=i&&f.propFix[c]||c,h=f.propHooks[c];return d!==b?h&&"set"in h&&(g=h.set(a,d,c))!==b?g:a[c]=d:h&&"get"in h&&(g=h.get(a,c))!==b?g:a[c]},propHooks:{}}),w={get:function(a,c){return a[f.propFix[c]||c]?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=b),a.setAttribute(c,c.toLowerCase()));return c}},f.attrHooks.value={get:function(a,b){if(v&&f.nodeName(a,"button"))return v.get(a,b);return a.value},set:function(a,b,c){if(v&&f.nodeName(a,"button"))return v.set(a,b,c);a.value=b}},f.support.getSetAttribute||(f.attrFix=f.propFix,v=f.attrHooks.name=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&d.nodeValue!==""?d.nodeValue:b},set:function(a,b,c){var d=a.getAttributeNode(c);if(d){d.nodeValue=b;return b}}},f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})})),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}})),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var x=Object.prototype.hasOwnProperty,y=/\.(.*)$/,z=/^(?:textarea|input|select)$/i,A=/\./g,B=/ /g,C=/[^\w\s.|`]/g,D=function(a){return a.replace(C,"\\$&")};f.event={add:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){if(d===!1)d=E;else if(!d)return;var g,h;d.handler&&(g=d,d=g.handler),d.guid||(d.guid=f.guid++);var i=f._data(a);if(!i)return;var j=i.events,k=i.handle;j||(i.events=j={}),k||(i.handle=k=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.handle.apply(k.elem,arguments):b}),k.elem=a,c=c.split(" ");var l,m=0,n;while(l=c[m++]){h=g?f.extend({},g):{handler:d,data:e},l.indexOf(".")>-1?(n=l.split("."),l=n.shift(),h.namespace=n.slice(0).sort().join(".")):(n=[],h.namespace=""),h.type=l,h.guid||(h.guid=d.guid);var o=j[l],p=f.event.special[l]||{};if(!o){o=j[l]=[];if(!p.setup||p.setup.call(a,e,n,k)===!1)a.addEventListener?a.addEventListener(l,k,!1):a.attachEvent&&a.attachEvent("on"+l,k)}p.add&&(p.add.call(a,h),h.handler.guid||(h.handler.guid=d.guid)),o.push(h),f.event.global[l]=!0}a=null}},global:{},remove:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){d===!1&&(d=E);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=f.hasData(a)&&f._data(a),t=s&&s.events;if(!s||!t)return;c&&c.type&&(d=c.handler,c=c.type);if(!c||typeof c=="string"&&c.charAt(0)==="."){c=c||"";for(h in t)f.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+f.map(m.slice(0).sort(),D).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=t[h];if(!p)continue;if(!d){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))f.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=f.event.special[h]||{};for(j=e||0;j<p.length;j++){q=p[j];if(d.guid===q.guid){if(l||n.test(q.namespace))e==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(e!=null)break}}if(p.length===0||e!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&f.removeEvent(a,h,s.handle),g=null,delete t[h]}if(f.isEmptyObject(t)){var u=s.handle;u&&(u.elem=null),delete s.events,delete s.handle,f.isEmptyObject(s)&&f.removeData(a,b,!0)}}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){var h=c.type||c,i=[],j;h.indexOf("!")>=0&&(h=h.slice(0,-1),j=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if(!!e&&!f.event.customEvent[h]||!!f.event.global[h]){c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.exclusive=j,c.namespace=i.join("."),c.namespace_re=new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)");if(g||!e)c.preventDefault(),c.stopPropagation();if(!e){f.each(f.cache,function(){var a=f.expando,b=this[a];b&&b.events&&b.events[h]&&f.event.trigger(c,d,b.handle.elem
)});return}if(e.nodeType===3||e.nodeType===8)return;c.result=b,c.target=e,d=d?f.makeArray(d):[],d.unshift(c);var k=e,l=h.indexOf(":")<0?"on"+h:"";do{var m=f._data(k,"handle");c.currentTarget=k,m&&m.apply(k,d),l&&f.acceptData(k)&&k[l]&&k[l].apply(k,d)===!1&&(c.result=!1,c.preventDefault()),k=k.parentNode||k.ownerDocument||k===c.target.ownerDocument&&a}while(k&&!c.isPropagationStopped());if(!c.isDefaultPrevented()){var n,o=f.event.special[h]||{};if((!o._default||o._default.call(e.ownerDocument,c)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)){try{l&&e[h]&&(n=e[l],n&&(e[l]=null),f.event.triggered=h,e[h]())}catch(p){}n&&(e[l]=n),f.event.triggered=b}}return c.result}},handle:function(c){c=f.event.fix(c||a.event);var d=((f._data(this,"events")||{})[c.type]||[]).slice(0),e=!c.exclusive&&!c.namespace,g=Array.prototype.slice.call(arguments,0);g[0]=c,c.currentTarget=this;for(var h=0,i=d.length;h<i;h++){var j=d[h];if(e||c.namespace_re.test(j.namespace)){c.handler=j.handler,c.data=j.data,c.handleObj=j;var k=j.handler.apply(this,g);k!==b&&(c.result=k,k===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[f.expando])return a;var d=a;a=f.Event(d);for(var e=this.props.length,g;e;)g=this.props[--e],a[g]=d[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=a.target.ownerDocument||c,i=h.documentElement,j=h.body;a.pageX=a.clientX+(i&&i.scrollLeft||j&&j.scrollLeft||0)-(i&&i.clientLeft||j&&j.clientLeft||0),a.pageY=a.clientY+(i&&i.scrollTop||j&&j.scrollTop||0)-(i&&i.clientTop||j&&j.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:f.proxy,special:{ready:{setup:f.bindReady,teardown:f.noop},live:{add:function(a){f.event.add(this,O(a.origType,a.selector),f.extend({},a,{handler:N,guid:a.handler.guid}))},remove:function(a){f.event.remove(this,O(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!this.preventDefault)return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?F:E):this.type=a,b&&f.extend(this,b),this.timeStamp=f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=F;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=F;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=F,this.stopPropagation()},isDefaultPrevented:E,isPropagationStopped:E,isImmediatePropagationStopped:E};var G=function(a){var b=a.relatedTarget;a.type=a.data;try{if(b&&b!==c&&!b.parentNode)return;while(b&&b!==this)b=b.parentNode;b!==this&&f.event.handle.apply(this,arguments)}catch(d){}},H=function(a){a.type=a.data,f.event.handle.apply(this,arguments)};f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={setup:function(c){f.event.add(this,b,c&&c.selector?H:G,a)},teardown:function(a){f.event.remove(this,b,a&&a.selector?H:G)}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(a,b){if(!f.nodeName(this,"form"))f.event.add(this,"click.specialSubmit",function(a){var b=a.target,c=b.type;(c==="submit"||c==="image")&&f(b).closest("form").length&&L("submit",this,arguments)}),f.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,c=b.type;(c==="text"||c==="password")&&f(b).closest("form").length&&a.keyCode===13&&L("submit",this,arguments)});else return!1},teardown:function(a){f.event.remove(this,".specialSubmit")}});if(!f.support.changeBubbles){var I,J=function(a){var b=a.type,c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?f.map(a.options,function(a){return a.selected}).join("-"):"":f.nodeName(a,"select")&&(c=a.selectedIndex);return c},K=function(c){var d=c.target,e,g;if(!!z.test(d.nodeName)&&!d.readOnly){e=f._data(d,"_change_data"),g=J(d),(c.type!=="focusout"||d.type!=="radio")&&f._data(d,"_change_data",g);if(e===b||g===e)return;if(e!=null||g)c.type="change",c.liveFired=b,f.event.trigger(c,arguments[1],d)}};f.event.special.change={filters:{focusout:K,beforedeactivate:K,click:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(c==="radio"||c==="checkbox"||f.nodeName(b,"select"))&&K.call(this,a)},keydown:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(a.keyCode===13&&!f.nodeName(b,"textarea")||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")&&K.call(this,a)},beforeactivate:function(a){var b=a.target;f._data(b,"_change_data",J(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in I)f.event.add(this,c+".specialChange",I[c]);return z.test(this.nodeName)},teardown:function(a){f.event.remove(this,".specialChange");return z.test(this.nodeName)}},I=f.event.special.change.filters,I.focus=I.beforeactivate}f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){function e(a){var c=f.event.fix(a);c.type=b,c.originalEvent={},f.event.trigger(c,null,c.target),c.isDefaultPrevented()&&a.preventDefault()}var d=0;f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.each(["bind","one"],function(a,c){f.fn[c]=function(a,d,e){var g;if(typeof a=="object"){for(var h in a)this[c](h,d,a[h],e);return this}if(arguments.length===2||d===!1)e=d,d=b;c==="one"?(g=function(a){f(this).unbind(a,g);return e.apply(this,arguments)},g.guid=e.guid||f.guid++):g=e;if(a==="unload"&&c!=="one")this.one(a,d,e);else for(var i=0,j=this.length;i<j;i++)f.event.add(this[i],a,g,d);return this}}),f.fn.extend({unbind:function(a,b){if(typeof a=="object"&&!a.preventDefault)for(var c in a)this.unbind(c,a[c]);else for(var d=0,e=this.length;d<e;d++)f.event.remove(this[d],a,b);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f.data(this,"lastToggle"+a.guid)||0)%d;f.data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var M={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};f.each(["live","die"],function(a,c){f.fn[c]=function(a,d,e,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:f(this.context);if(typeof a=="object"&&!a.preventDefault){for(var o in a)n[c](o,d,a[o],m);return this}if(c==="die"&&!a&&g&&g.charAt(0)==="."){n.unbind(g);return this}if(d===!1||f.isFunction(d))e=d||E,d=b;a=(a||"").split(" ");while((h=a[i++])!=null){j=y.exec(h),k="",j&&(k=j[0],h=h.replace(y,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,M[h]?(a.push(M[h]+k),h=h+k):h=(M[h]||h)+k;if(c==="live")for(var p=0,q=n.length;p<q;p++)f.event.add(n[p],"live."+O(h,m),{data:d,selector:m,handler:e,origType:h,origHandler:e,preType:l});else n.unbind("live."+O(h,m),e)}return this}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0)}),function(){function u(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}if(i.nodeType===1){f||(i.sizcache=c,i.sizset=g);if(typeof b!="string"){if(i===b){j=!0;break}}else if(k.filter(b,[i]).length>0){j=i;break}}i=i[a]}d[g]=j}}}function t(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d=0,e=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){h=!1;return 0});var k=function(b,d,f,g){f=f||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return f;var i,j,n,o,q,r,s,t,u=!0,w=k.isXML(d),x=[],y=b;do{a.exec(""),i=a.exec(y);if(i){y=i[3],x.push(i[1]);if(i[2]){o=i[3];break}}}while(i);if(x.length>1&&m.exec(b))if(x.length===2&&l.relative[x[0]])j=v(x[0]+x[1],d);else{j=l.relative[x[0]]?[d]:k(x.shift(),d);while(x.length)b=x.shift(),l.relative[b]&&(b+=x.shift()),j=v(b,j)}else{!g&&x.length>1&&d.nodeType===9&&!w&&l.match.ID.test(x[0])&&!l.match.ID.test(x[x.length-1])&&(q=k.find(x.shift(),d,w),d=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:p(g)}:k.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),j=q.expr?k.filter(q.expr,q.set):q.set,x.length>0?n=p(j):u=!1;while(x.length)r=x.pop(),s=r,l.relative[r]?s=x.pop():r="",s==null&&(s=d),l.relative[r](n,s,w)}else n=x=[]}n||(n=j),n||k.error(r||b);if(e.call(n)==="[object Array]")if(!u)f.push.apply(f,n);else if(d&&d.nodeType===1)for(t=0;n[t]!=null;t++)n[t]&&(n[t]===!0||n[t].nodeType===1&&k.contains(d,n[t]))&&f.push(j[t]);else for(t=0;n[t]!=null;t++)n[t]&&n[t].nodeType===1&&f.push(j[t]);else p(n,f);o&&(k(o,h,f,g),k.uniqueSort(f));return f};k.uniqueSort=function(a){if(r){g=h,a.sort(r);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},k.matches=function(a,b){return k(a,null,null,b)},k.matchesSelector=function(a,b){return k(b,null,null,[a]).length>0},k.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=l.order.length;e<f;e++){var g,h=l.order[e];if(g=l.leftMatch[h].exec(a)){var j=g[1];g.splice(1,1);if(j.substr(j.length-1)!=="\\"){g[1]=(g[1]||"").replace(i,""),d=l.find[h](g,b,c);if(d!=null){a=a.replace(l.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},k.filter=function(a,c,d,e){var f,g,h=a,i=[],j=c,m=c&&c[0]&&k.isXML(c[0]);while(a&&c.length){for(var n in l.filter)if((f=l.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=l.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;j===i&&(i=[]);if(l.preFilter[n]){f=l.preFilter[n](f,j,d,i,e,m);if(!f)g=o=!0;else if(f===!0)continue}if(f)for(var s=0;(p=j[s])!=null;s++)if(p){o=q(p,f,s,j);var t=e^!!o;d&&o!=null?t?g=!0:j[s]=!1:t&&(i.push(p),g=!0)}if(o!==b){d||(j=i),a=a.replace(l.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)k.error(a);else break;h=a}return j},k.error=function(a){throw"Syntax error, unrecognized expression: "+a};var l=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!j.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&k.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!j.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&k.filter(b,a,!0)}},"":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("parentNode",b,f,a,e,c)},"~":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("previousSibling",b,f,a,e,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(i,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(i,"")},TAG:function(a,b){return a[1].replace(i,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||k.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&k.error(a[0]);a[0]=d++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(i,"");!f&&l.attrMap[g]&&(a[1]=l.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(i,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=k(b[3],null,null,c);else{var g=k.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(l.match.POS.test(b[0])||l.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||k.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}k.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=l.setFilters[e];if(f)return f(a,c,b,d)}}},m=l.match.POS,n=function(a,b){return"\\"+(b-0+1)};for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n));var p=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(q){p=function(a,b){var c=0,d=b||[];if(e.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var f=a.length;c<f;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var r,s;c.documentElement.compareDocumentPosition?r=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(r=function(a,b){if(a===b){g=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(h===i)return s(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k],b,1)},s=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),k.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(l.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(l.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=k,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){k=function(b,e,f,g){e=e||c;if(!g&&!k.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return p(e.getElementsByTagName(b),f);if(h[2]&&l.find.CLASS&&e.getElementsByClassName)return p(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return p([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return p([],f);if(i.id===h[3])return p([i],f)}try{return p(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e,n=e.getAttribute("id"),o=n||d,q=e.parentNode,r=/^\s*[+~]/.test(b);n?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),r&&q&&(e=e.parentNode);try{if(!r||q)return p(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(s){}finally{n||m.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)k[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}k.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(a))try{if(e||!l.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return k(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;l.order.splice(1,0,"CLASS"),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?k.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?k.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:k.contains=function(){return!1},k.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var v=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match.PSEUDO,"");a=l.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)k(a,f[g],d);return k.filter(e,d)};f.find=k,f.expr=k.selectors,f.expr[":"]=f.expr.filters,f.unique=k.uniqueSort,f.text=k.getText,f.isXMLDoc=k.isXML,f.contains=k.contains}();var P=/Until$/,Q=/^(?:parents|prevUntil|prevAll)/,R=/,/,S=/^.[^:#\[\.,]*$/,T=Array.prototype.slice,U=f.expr.match.POS,V={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(X(this,a,!1),"not",a)},filter:function(a){return this.pushStack(X(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(d=0,e=a.length;d<e;d++)i=a[d],j[i]||(j[i]=U.test(i)?f(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:f(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=U.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(l?l.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a||typeof a=="string")return f.inArray(this[0],a?f(a):this.parent().children());return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(W(c[0])||W(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c),g=T.call(arguments);P.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!V[a]?f.unique(e):e,(this.length>1||R.test(d))&&Q.test(a)&&(e=e.reverse());return this.pushStack(e,a,g.join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var Y=/ jQuery\d+="(?:\d+|null)"/g,Z=/^\s+/,$=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,_=/<([\w:]+)/,ba=/<tbody/i,bb=/<|&#?\w+;/,bc=/<(?:script|object|embed|option|style)/i,bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){f(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Y,""):null;if(typeof a=="string"&&!bc.test(a)&&(f.support.leadingWhitespace||!Z.test(a))&&!bg[(_.exec(a)||["",""])[1].toLowerCase()]){a=a.replace($,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bh(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bn)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i=b&&b[0]?b[0].ownerDocument||b[0]:c;a.length===1&&typeof a[0]=="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!bc.test(a[0])&&(f.support.checkClone||!bd.test(a[0]))&&(g=!0,h=f.fragments[a[0]],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[a[0]]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d=a.cloneNode(!0),e,g,h;if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bj(a,d),e=bk(a),g=bk(d);for(h=0;e[h];++h)bj(e[h],g[h])}if(b){bi(a,d);if(c){e=bk(a),g=bk(d);for(h=0;e[h];++h)bi(e[h],g[h])}}return d},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||
b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!bb.test(k))k=b.createTextNode(k);else{k=k.replace($,"<$1></$2>");var l=(_.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=ba.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&Z.test(k)&&o.insertBefore(b.createTextNode(Z.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bm(k[i]);else bm(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.expando,g=f.event.special,h=f.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&f.noData[j.nodeName.toLowerCase()])continue;c=j[f.expando];if(c){b=d[c]&&d[c][e];if(b&&b.events){for(var k in b.events)g[k]?f.event.remove(j,k):f.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[f.expando]:j.removeAttribute&&j.removeAttribute(f.expando),delete d[c]}}}});var bo=/alpha\([^)]*\)/i,bp=/opacity=([^)]*)/,bq=/-([a-z])/ig,br=/([A-Z]|^ms)/g,bs=/^-?\d+(?:px)?$/i,bt=/^-?\d/,bu=/^[+\-]=/,bv=/[^+\-\.\de]+/g,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB,bC=function(a,b){return b.toUpperCase()};f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0,widows:!0,orphans:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d;if(h==="number"&&isNaN(d)||d==null)return;h==="string"&&bu.test(d)&&(d=+d.replace(bv,"")+parseFloat(f.css(a,c))),h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]},camelCase:function(a){return a.replace(bq,bC)}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){a.offsetWidth!==0?e=bD(a,b,d):f.swap(a,bw,function(){e=bD(a,b,d)});if(e<=0){e=bz(a,b,b),e==="0px"&&bB&&(e=bB(a,b,b));if(e!=null)return e===""||e==="auto"?"0px":e}if(e<0||e==null){e=a.style[b];return e===""||e==="auto"?"0px":e}return typeof e=="string"?e:e+"px"}},set:function(a,b){if(!bs.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bp.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle;c.zoom=1;var e=f.isNaN(b)?"":"alpha(opacity="+b*100+")",g=d&&d.filter||c.filter||"";c.filter=bo.test(g)?g.replace(bo,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,c){var d,e,g;c=c.replace(br,"-$1").toLowerCase();if(!(e=a.ownerDocument.defaultView))return b;if(g=e.getComputedStyle(a,null))d=g.getPropertyValue(c),d===""&&!f.contains(a.ownerDocument.documentElement,a)&&(d=f.style(a,c));return d}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!bs.test(d)&&bt.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bE=/%20/g,bF=/\[\]$/,bG=/\r?\n/g,bH=/#.*$/,bI=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bJ=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bK=/^(?:about|app|app\-storage|.+\-extension|file|widget):$/,bL=/^(?:GET|HEAD)$/,bM=/^\/\//,bN=/\?/,bO=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bP=/^(?:select|textarea)/i,bQ=/\s+/,bR=/([?&])_=[^&]*/,bS=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bT=f.fn.load,bU={},bV={},bW,bX;try{bW=e.href}catch(bY){bW=c.createElement("a"),bW.href="",bW=bW.href}bX=bS.exec(bW.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bT)return bT.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bO,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bP.test(this.nodeName)||bJ.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bG,"\r\n")}}):{name:b.name,value:c.replace(bG,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.bind(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?f.extend(!0,a,f.ajaxSettings,b):(b=a,a=f.extend(!0,f.ajaxSettings,b));for(var c in{context:1,url:1})c in b?a[c]=b[c]:c in f.ajaxSettings&&(a[c]=f.ajaxSettings[c]);return a},ajaxSettings:{url:bW,isLocal:bK.test(bX[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML}},ajaxPrefilter:bZ(bU),ajaxTransport:bZ(bV),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a?4:0;var o,r,u,w=l?ca(d,v,l):b,x,y;if(a>=200&&a<300||a===304){if(d.ifModified){if(x=v.getResponseHeader("Last-Modified"))f.lastModified[k]=x;if(y=v.getResponseHeader("Etag"))f.etag[k]=y}if(a===304)c="notmodified",o=!0;else try{r=cb(d,w),c="success",o=!0}catch(z){c="parsererror",u=z}}else{u=c;if(!c||a)c="error",a<0&&(a=0)}v.status=a,v.statusText=c,o?h.resolveWith(e,[r,c,v]):h.rejectWith(e,[v,c,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.resolveWith(e,[v,c]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f._Deferred(),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bI.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.done,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bH,"").replace(bM,bX[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bQ),d.crossDomain==null&&(r=bS.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bX[1]&&r[2]==bX[2]&&(r[3]||(r[1]==="http:"?80:443))==(bX[3]||(bX[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bU,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bL.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bN.test(d.url)?"&":"?")+d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bR,"$1_="+x);d.url=y+(y===d.url?(bN.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", */*; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bV,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){status<2?w(-1,z):f.error(z)}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bE,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq,cr=a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);for(var d=0,e=this.length;d<e;d++)if(this[d].style){var g=f.css(this[d],"display");g!=="none"&&!f._data(this[d],"olddisplay")&&f._data(this[d],"olddisplay",g)}for(d=0;d<e;d++)this[d].style&&(this[d].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return this[e.queue===!1?"each":"queue"](function(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(f.support.inlineBlockNeedsLayout?(j=cv(this.nodeName),j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)):this.style.display="inline-block"))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)k=new f.fx(this,b,i),h=a[i],cm.test(h)?k[h==="toggle"?d?"show":"hide":h]():(l=cn.exec(h),m=k.cur(),l?(n=parseFloat(l[2]),o=l[3]||(f.cssNumber[i]?"":"px"),o!=="px"&&(f.style(this,i,(n||1)+o),m=(n||1)/k.cur()*m,f.style(this,i,m+o)),l[1]&&(n=(l[1]==="-="?-1:1)*n+m),k.custom(m,n,o)):k.custom(m,h,""));return!0})},stop:function(a,b){a&&this.queue([]),this.each(function(){var a=f.timers,c=a.length;b||f._unmark(!0,this);while(c--)a[c].elem===this&&(b&&a[c](!0),a.splice(c,1))}),b||this.dequeue();return this}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default,d.old=d.complete,d.complete=function(a){d.queue!==!1?f.dequeue(this):a!==!1&&f._unmark(this),f.isFunction(d.old)&&d.old.call(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,c){function h(a){return d.step(a)}var d=this,e=f.fx,g;this.startTime=cq||cs(),this.start=a,this.end=b,this.unit=c||this.unit||(f.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,h.elem=this.elem,h()&&f.timers.push(h)&&!co&&(cr?(co=1,g=function(){co&&(cr(g),e.tick())},cr(g)):co=setInterval(e.tick,e.interval))},show:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=cq||cs(),c=!0,d=this.elem,e=this.options,g,h;if(a||b>=e.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),e.animatedProperties[this.prop]=!0;for(g in e.animatedProperties)e.animatedProperties[g]!==!0&&(c=!1);if(c){e.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){d.style["overflow"+b]=e.overflow[a]}),e.hide&&f(d).hide();if(e.hide||e.show)for(var i in e.animatedProperties)f.style(d,i,e.orig[i]);e.complete.call(d)}return!1}e.duration==Infinity?this.now=b:(h=b-this.startTime,this.state=h/e.duration,this.pos=f.easing[e.animatedProperties[this.prop]](this.state,h,0,1,e.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){for(var a=f.timers,b=0;b<a.length;++b)a[b]()||a.splice(b--,1);a.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);f.offset.initialize();var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.offset.doesNotAddBorder&&(!f.offset.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={initialize:function(){var a=c.body,b=c.createElement("div"),d,e,g,h,i=parseFloat(f.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";f.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),d=b.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,this.doesNotAddBorder=e.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,e.style.position="fixed",e.style.top="20px",this.supportsFixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",this.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),f.offset.initialize=f.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.offset.initialize(),f.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){return this[0]?parseFloat(f.css(this[0],d,"padding")):null},f.fn["outer"+c]=function(a){return this[0]?parseFloat(f.css(this[0],d,a?"margin":"border")):null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c];return e.document.compatMode==="CSS1Compat"&&g||e.document.body["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var h=f.css(e,d),i=parseFloat(h);return f.isNaN(i)?h:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f})(window);/*
 * jQuery Templates Plugin 1.0.0pre
 * http://github.com/jquery/jquery-tmpl
 * Requires jQuery 1.4.2
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
(function(a){var r=a.fn.domManip,d="_tmplitem",q=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,b={},f={},e,p={key:0,data:{}},i=0,c=0,l=[];function g(g,d,h,e){var c={data:e||(e===0||e===false)?e:d?d.data:{},_wrap:d?d._wrap:null,tmpl:null,parent:d||null,nodes:[],calls:u,nest:w,wrap:x,html:v,update:t};g&&a.extend(c,g,{nodes:[],parent:d});if(h){c.tmpl=h;c._ctnt=c._ctnt||c.tmpl(a,c);c.key=++i;(l.length?f:b)[i]=c}return c}a.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(f,d){a.fn[f]=function(n){var g=[],i=a(n),k,h,m,l,j=this.length===1&&this[0].parentNode;e=b||{};if(j&&j.nodeType===11&&j.childNodes.length===1&&i.length===1){i[d](this[0]);g=this}else{for(h=0,m=i.length;h<m;h++){c=h;k=(h>0?this.clone(true):this).get();a(i[h])[d](k);g=g.concat(k)}c=0;g=this.pushStack(g,f,i.selector)}l=e;e=null;a.tmpl.complete(l);return g}});a.fn.extend({tmpl:function(d,c,b){return a.tmpl(this[0],d,c,b)},tmplItem:function(){return a.tmplItem(this[0])},template:function(b){return a.template(b,this[0])},domManip:function(d,m,k){if(d[0]&&a.isArray(d[0])){var g=a.makeArray(arguments),h=d[0],j=h.length,i=0,f;while(i<j&&!(f=a.data(h[i++],"tmplItem")));if(f&&c)g[2]=function(b){a.tmpl.afterManip(this,b,k)};r.apply(this,g)}else r.apply(this,arguments);c=0;!e&&a.tmpl.complete(b);return this}});a.extend({tmpl:function(d,h,e,c){var i,k=!c;if(k){c=p;d=a.template[d]||a.template(null,d);f={}}else if(!d){d=c.tmpl;b[c.key]=c;c.nodes=[];c.wrapped&&n(c,c.wrapped);return a(j(c,null,c.tmpl(a,c)))}if(!d)return[];if(typeof h==="function")h=h.call(c||{});e&&e.wrapped&&n(e,e.wrapped);i=a.isArray(h)?a.map(h,function(a){return a?g(e,c,d,a):null}):[g(e,c,d,h)];return k?a(j(c,null,i)):i},tmplItem:function(b){var c;if(b instanceof a)b=b[0];while(b&&b.nodeType===1&&!(c=a.data(b,"tmplItem"))&&(b=b.parentNode));return c||p},template:function(c,b){if(b){if(typeof b==="string")b=o(b);else if(b instanceof a)b=b[0]||{};if(b.nodeType)b=a.data(b,"tmpl")||a.data(b,"tmpl",o(b.innerHTML));return typeof c==="string"?(a.template[c]=b):b}return c?typeof c!=="string"?a.template(null,c):a.template[c]||a.template(null,q.test(c)?c:a(c)):null},encode:function(a){return(""+a).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}});a.extend(a.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){__=__.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(__,$1,$2);__=[];",close:"call=$item.calls();__=call._.concat($item.wrap(call,__));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){__.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){__.push($.encode($1a));}"},"!":{open:""}},complete:function(){b={}},afterManip:function(f,b,d){var e=b.nodeType===11?a.makeArray(b.childNodes):b.nodeType===1?[b]:[];d.call(f,b);m(e);c++}});function j(e,g,f){var b,c=f?a.map(f,function(a){return typeof a==="string"?e.key?a.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+d+'="'+e.key+'" $2'):a:j(a,e,a._ctnt)}):e;if(g)return c;c=c.join("");c.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(f,c,e,d){b=a(e).get();m(b);if(c)b=k(c).concat(b);if(d)b=b.concat(k(d))});return b?b:k(c)}function k(c){var b=document.createElement("div");b.innerHTML=c;return a.makeArray(b.childNodes)}function o(b){return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('"+a.trim(b).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(m,l,k,g,b,c,d){var j=a.tmpl.tag[k],i,e,f;if(!j)throw"Unknown template tag: "+k;i=j._default||[];if(c&&!/\w$/.test(b)){b+=c;c=""}if(b){b=h(b);d=d?","+h(d)+")":c?")":"";e=c?b.indexOf(".")>-1?b+h(c):"("+b+").call($item"+d:b;f=c?e:"(typeof("+b+")==='function'?("+b+").call($item):("+b+"))"}else f=e=i.$1||"null";g=h(g);return"');"+j[l?"close":"open"].split("$notnull_1").join(b?"typeof("+b+")!=='undefined' && ("+b+")!=null":"true").split("$1a").join(f).split("$1").join(e).split("$2").join(g||i.$2||"")+"__.push('"})+"');}return __;")}function n(c,b){c._wrap=j(c,true,a.isArray(b)?b:[q.test(b)?b:a(b).html()]).join("")}function h(a){return a?a.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function s(b){var a=document.createElement("div");a.appendChild(b.cloneNode(true));return a.innerHTML}function m(o){var n="_"+c,k,j,l={},e,p,h;for(e=0,p=o.length;e<p;e++){if((k=o[e]).nodeType!==1)continue;j=k.getElementsByTagName("*");for(h=j.length-1;h>=0;h--)m(j[h]);m(k)}function m(j){var p,h=j,k,e,m;if(m=j.getAttribute(d)){while(h.parentNode&&(h=h.parentNode).nodeType===1&&!(p=h.getAttribute(d)));if(p!==m){h=h.parentNode?h.nodeType===11?0:h.getAttribute(d)||0:0;if(!(e=b[m])){e=f[m];e=g(e,b[h]||f[h]);e.key=++i;b[i]=e}c&&o(m)}j.removeAttribute(d)}else if(c&&(e=a.data(j,"tmplItem"))){o(e.key);b[e.key]=e;h=a.data(j.parentNode,"tmplItem");h=h?h.key:0}if(e){k=e;while(k&&k.key!=h){k.nodes.push(j);k=k.parent}delete e._ctnt;delete e._wrap;a.data(j,"tmplItem",e)}function o(a){a=a+n;e=l[a]=l[a]||g(e,b[e.parent.key+n]||e.parent)}}}function u(a,d,c,b){if(!a)return l.pop();l.push({_:a,tmpl:d,item:this,data:c,options:b})}function w(d,c,b){return a.tmpl(a.template(d),c,b,this)}function x(b,d){var c=b.options||{};c.wrapped=d;return a.tmpl(a.template(b.tmpl),b.data,c,b.item)}function v(d,c){var b=this._wrap;return a.map(a(a.isArray(b)?b.join(""):b).filter(d||"*"),function(a){return c?a.innerText||a.textContent:a.outerHTML||s(a)})}function t(){var b=this.nodes;a.tmpl(null,null,null,this).insertBefore(b[0]);a(b).remove()}})(jQuery);/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
/*
    http://www.JSON.org/json2.js
    2011-02-23

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, strict: false, regexp: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

var JSON;
if (!JSON) {
    JSON = {};
}

(function () {
    "use strict";

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                this.getUTCFullYear()     + '-' +
                f(this.getUTCMonth() + 1) + '-' +
                f(this.getUTCDate())      + 'T' +
                f(this.getUTCHours())     + ':' +
                f(this.getUTCMinutes())   + ':' +
                f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function (key) {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string' ? c :
                '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' : gap ?
                    '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                    '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' : gap ?
                '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
                '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());
/*!
 * jQuery Expander Plugin v1.4.1
 *
 * Date: Mon Feb 06 14:25:11 2012 EST
 * Requires: jQuery v1.3+
 *
 * Copyright 2011, Karl Swedberg
 * Dual licensed under the MIT and GPL licenses (just like jQuery):
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 *
 *
 *
*/

(function($) {
  $.expander = {
    version: '1.4.1',
    defaults: {
      // the number of characters at which the contents will be sliced into two parts.
      slicePoint: 100,

      // whether to keep the last word of the summary whole (true) or let it slice in the middle of a word (false)
      preserveWords: true,

      // a threshold of sorts for whether to initially hide/collapse part of the element's contents.
      // If after slicing the contents in two there are fewer words in the second part than
      // the value set by widow, we won't bother hiding/collapsing anything.
      widow: 4,

      // text displayed in a link instead of the hidden part of the element.
      // clicking this will expand/show the hidden/collapsed text
      expandText: 'read more',
      expandPrefix: '&hellip; ',

      expandAfterSummary: false,

      // class names for summary element and detail element
      summaryClass: 'summary',
      detailClass: 'details',

      // class names for <span> around "read-more" link and "read-less" link
      moreClass: 'read-more',
      lessClass: 'read-less',

      // number of milliseconds after text has been expanded at which to collapse the text again.
      // when 0, no auto-collapsing
      collapseTimer: 0,

      // effects for expanding and collapsing
      expandEffect: 'fadeIn',
      expandSpeed: 250,
      collapseEffect: 'fadeOut',
      collapseSpeed: 200,

      // allow the user to re-collapse the expanded text.
      userCollapse: true,

      // text to use for the link to re-collapse the text
      userCollapseText: 'read less',
      userCollapsePrefix: ' ',


      // all callback functions have the this keyword mapped to the element in the jQuery set when .expander() is called

      onSlice: null, // function() {}
      beforeExpand: null, // function() {},
      afterExpand: null, // function() {},
      onCollapse: null // function(byUser) {}
    }
  };

  $.fn.expander = function(options) {
    var meth = 'init';

    if (typeof options == 'string') {
      meth = options;
      options = {};
    }

    var opts = $.extend({}, $.expander.defaults, options),
        rSelfClose = /^<(?:area|br|col|embed|hr|img|input|link|meta|param).*>$/i,
        rAmpWordEnd = opts.wordEnd || /(&(?:[^;]+;)?|[a-zA-Z\u00C0-\u0100]+)$/,
        rOpenCloseTag = /<\/?(\w+)[^>]*>/g,
        rOpenTag = /<(\w+)[^>]*>/g,
        rCloseTag = /<\/(\w+)>/g,
        rLastCloseTag = /(<\/[^>]+>)\s*$/,
        rTagPlus = /^<[^>]+>.?/,
        delayedCollapse;

    var methods = {
      init: function() {
        this.each(function() {
          var i, l, tmp, newChar, summTagless, summOpens, summCloses,
              lastCloseTag, detailText,
              $thisDetails, $readMore,
              openTagsForDetails = [],
              closeTagsForsummaryText = [],
              defined = {},
              thisEl = this,
              $this = $(this),
              $summEl = $([]),
              o = $.meta ? $.extend({}, opts, $this.data()) : opts,
              hasDetails = !!$this.find('.' + o.detailClass).length,
              hasBlocks = !!$this.find('*').filter(function() {
                var display = $(this).css('display');
                return (/^block|table|list/).test(display);
              }).length,
              el = hasBlocks ? 'div' : 'span',
              detailSelector = el + '.' + o.detailClass,
              moreSelector = 'span.' + o.moreClass,
              expandSpeed = o.expandSpeed || 0,
              allHtml = $.trim( $this.html() ),
              allText = $.trim( $this.text() ),
              summaryText = allHtml.slice(0, o.slicePoint);

          // bail out if we've already set up the expander on this element
          if ( $.data(this, 'expander') ) {
            return;
          }
          $.data(this, 'expander', true);

          // determine which callback functions are defined
          $.each(['onSlice','beforeExpand', 'afterExpand', 'onCollapse'], function(index, val) {
            defined[val] = $.isFunction(o[val]);
          });

          // back up if we're in the middle of a tag or word
          summaryText = backup(summaryText);

          // summary text sans tags length
          summTagless = summaryText.replace(rOpenCloseTag, '').length;

          // add more characters to the summary, one for each character in the tags
          while (summTagless < o.slicePoint) {
            newChar = allHtml.charAt(summaryText.length);
            if (newChar == '<') {
              newChar = allHtml.slice(summaryText.length).match(rTagPlus)[0];
            }
            summaryText += newChar;
            summTagless++;
          }

          summaryText = backup(summaryText, o.preserveWords);

          // separate open tags from close tags and clean up the lists
          summOpens = summaryText.match(rOpenTag) || [];
          summCloses = summaryText.match(rCloseTag) || [];

          // filter out self-closing tags
          tmp = [];
          $.each(summOpens, function(index, val) {
            if ( !rSelfClose.test(val) ) {
              tmp.push(val);
            }
          });
          summOpens = tmp;

          // strip close tags to just the tag name
          l = summCloses.length;
          for (i = 0; i < l; i++) {
            summCloses[i] = summCloses[i].replace(rCloseTag, '$1');
          }

          // tags that start in summary and end in detail need:
          // a). close tag at end of summary
          // b). open tag at beginning of detail
          $.each(summOpens, function(index, val) {
            var thisTagName = val.replace(rOpenTag, '$1');
            var closePosition = $.inArray(thisTagName, summCloses);
            if (closePosition === -1) {
              openTagsForDetails.push(val);
              closeTagsForsummaryText.push('</' + thisTagName + '>');

            } else {
              summCloses.splice(closePosition, 1);
            }
          });

          // reverse the order of the close tags for the summary so they line up right
          closeTagsForsummaryText.reverse();

          // create necessary summary and detail elements if they don't already exist
          if ( !hasDetails ) {

            // end script if there is no detail text or if detail has fewer words than widow option
            detailText = allHtml.slice(summaryText.length);

            if ( detailText === '' || detailText.split(/\s+/).length < o.widow ) {
              return;
            }

            // otherwise, continue...
            lastCloseTag = closeTagsForsummaryText.pop() || '';
            summaryText += closeTagsForsummaryText.join('');
            detailText = openTagsForDetails.join('') + detailText;

          } else {
            // assume that even if there are details, we still need readMore/readLess/summary elements
            // (we already bailed out earlier when readMore el was found)
            // but we need to create els differently

            // remove the detail from the rest of the content
            detailText = $this.find(detailSelector).remove().html();

            // The summary is what's left
            summaryText = $this.html();

            // allHtml is the summary and detail combined (this is needed when content has block-level elements)
            allHtml = summaryText + detailText;

            lastCloseTag = '';
          }
          o.moreLabel = $this.find(moreSelector).length ? '' : buildMoreLabel(o);

          if (hasBlocks) {
            detailText = allHtml;
          }
          summaryText += lastCloseTag;

          // onSlice callback
          o.summary = summaryText;
          o.details = detailText;
          o.lastCloseTag = lastCloseTag;

          if (defined.onSlice) {
            // user can choose to return a modified options object
            // one last chance for user to change the options. sneaky, huh?
            // but could be tricky so use at your own risk.
            tmp = o.onSlice.call(thisEl, o);

          // so, if the returned value from the onSlice function is an object with a details property, we'll use that!
            o = tmp && tmp.details ? tmp : o;
          }

          // build the html with summary and detail and use it to replace old contents
          var html = buildHTML(o, hasBlocks);

          $this.html( html );

          // set up details and summary for expanding/collapsing
          $thisDetails = $this.find(detailSelector);
          $readMore = $this.find(moreSelector);
          $thisDetails.hide();
          $readMore.find('a').unbind('click.expander').bind('click.expander', expand);

          $summEl = $this.find('div.' + o.summaryClass);

          if ( o.userCollapse && !$this.find('span.' + o.lessClass).length ) {
            $this
            .find(detailSelector)
            .append('<span class="' + o.lessClass + '">' + o.userCollapsePrefix + '<a href="#">' + o.userCollapseText + '</a></span>');
          }

          $this
          .find('span.' + o.lessClass + ' a')
          .unbind('click.expander')
          .bind('click.expander', function(event) {
            event.preventDefault();
            clearTimeout(delayedCollapse);
            var $detailsCollapsed = $(this).closest(detailSelector);
            reCollapse(o, $detailsCollapsed);
            if (defined.onCollapse) {
              o.onCollapse.call(thisEl, true);
            }
          });

          function expand(event) {
            event.preventDefault();
            $readMore.hide();
            $summEl.hide();
            if (defined.beforeExpand) {
              o.beforeExpand.call(thisEl);
            }

            $thisDetails.stop(false, true)[o.expandEffect](expandSpeed, function() {
              $thisDetails.css({zoom: ''});
              if (defined.afterExpand) {o.afterExpand.call(thisEl);}
              delayCollapse(o, $thisDetails, thisEl);
            });
          }

        }); // this.each
      },
      destroy: function() {
        if ( !this.data('expander') ) {
          return;
        }
        this.removeData('expander');
        this.each(function() {
          var $this = $(this),
              o = $.meta ? $.extend({}, opts, $this.data()) : opts,
              details = $this.find('.' + o.detailClass).contents();

          $this.find('.' + o.moreClass).remove();
          $this.find('.' + o.summaryClass).remove();
          $this.find('.' + o.detailClass).after(details).remove();
          $this.find('.' + o.lessClass).remove();

        });
      }
    };

    // run the methods (almost always "init")
    if ( methods[meth] ) {
      methods[ meth ].call(this);
    }

    // utility functions
    function buildHTML(o, blocks) {
      var el = 'span',
          summary = o.summary;
      if ( blocks ) {
        el = 'div';
        // if summary ends with a close tag, tuck the moreLabel inside it
        if ( rLastCloseTag.test(summary) && !o.expandAfterSummary) {
          summary = summary.replace(rLastCloseTag, o.moreLabel + '$1');
        } else {
        // otherwise (e.g. if ends with self-closing tag) just add moreLabel after summary
        // fixes #19
          summary += o.moreLabel;
        }

        // and wrap it in a div
        summary = '<div class="' + o.summaryClass + '">' + summary + '</div>';
      } else {
        summary += o.moreLabel;
      }

      return [
        summary,
        '<',
          el + ' class="' + o.detailClass + '"',
        '>',
          o.details,
        '</' + el + '>'
        ].join('');
    }

    function buildMoreLabel(o) {
      var ret = '<span class="' + o.moreClass + '">' + o.expandPrefix;
      ret += '<a href="#">' + o.expandText + '</a></span>';
      return ret;
    }

    function backup(txt, preserveWords) {
      if ( txt.lastIndexOf('<') > txt.lastIndexOf('>') ) {
        txt = txt.slice( 0, txt.lastIndexOf('<') );
      }
      if (preserveWords) {
        txt = txt.replace(rAmpWordEnd,'');
      }
      return txt;
    }

    function reCollapse(o, el) {
      el.stop(true, true)[o.collapseEffect](o.collapseSpeed, function() {
        var prevMore = el.prev('span.' + o.moreClass).show();
        if (!prevMore.length) {
          el.parent().children('div.' + o.summaryClass).show()
            .find('span.' + o.moreClass).show();
        }
      });
    }

    function delayCollapse(option, $collapseEl, thisEl) {
      if (option.collapseTimer) {
        delayedCollapse = setTimeout(function() {
          reCollapse(option, $collapseEl);
          if ( $.isFunction(option.onCollapse) ) {
            option.onCollapse.call(thisEl, false);
          }
        }, option.collapseTimer);
      }
    }

    return this;
  };

  // plugin defaults
  $.fn.expander.defaults = $.expander.defaults;
})(jQuery);
/**
 *	@project Snowblozm
 *	@desc JavaScript Service Computing Platform Kernel
 *
 *	@class Snowblozm
 *	@desc Provides Registry and Kernel functionalities
 *	
 *	@author Vibhaj Rajan <vibhaj8@gmail.com>
 *
 *	@desc Services are generic modules providing resuable stateless functionalities than tranforms blocks
 *
 *	@interface Service {
 *		public function input(){
 *			... returns array of required parameters and object of optional parameters
 *		}
 *		public function run(message, memory){
 *			... uses memory during execution for receiving and returning parameters
 *			... save reference in Registry, if required, instead of returning objects
 *		}
 *		public function output(){
 *			... returns array of parameters to return 
 *		}
 *	}
 *
 *	@format Message {
 *		service : (reference),
 *		... parameters ...
 *	}
 *
 *	@desc Workflows are array of services that use common memory for state management
 *
 *	@format workflow = [{	
 *		service : ...,
 *		( ... params : ... )
 *	}];
 *
 * 	@desc Navigator is compact way of representing messages
 *	@format Navigator root:name=value:name=value
 *
 *	@example #testtab:tabtitle=Krishna:loadurl=test.php
 *
 *	@escapes basic '=' with '~'
 *
 *	@escapes limited for usage in form id
 *	'#' by '_' 
 *	'=' by '.'
 *
 *	@escapes advanced (not implemented yet) using URL encoding
 *	
**/
var Snowblozm = (function(){
	/**
	 *	@var references array
	 *	@desc an array for saving references
	 *	
	 *	references may be accessed through the Registry
	 *
	**/
	var $references = new Array();
	
	/**
	 *	@var navigator roots array
	 *	@desc an array that saves roots to service workflows
	 *
	**/
	var $navigators = new Array();
	
	return {
		/**
		 *	@var Registry object
		 *	@desc manages references and navigator roots
		 *
		**/
		Registry : {
			/**
			 *	@method save
			 *	@desc saves a Reference with index
			 *
			 *	@param index string
			 *	@param reference object or any type
			 *
			**/
			save : function($index, $reference){
				$references[$index] = $reference;
			},
			
			/**
			 *	@method get
			 *	@desc gets the Reference for index
			 *
			 *	@param index string
			 *
			**/
			get : function($index){
				return $references[$index] || false;
			},
			
			/**
			 *	@method remove
			 *	@desc removes a Reference with index
			 *
			 *	@param index string
			 *
			**/
			remove : function($index){
				$references[$index] = 0;
			},
			
			/**
			 *	@method add
			 *	@desc adds a Navigator root 
			 *
			 *	@param root string
			 *	@param workflow object
			 *
			**/
			add : function($root, $workflow){
				$navigators[$root] = $workflow;
			},
			
			/**
			 *	@method load
			 *	@desc loads a Navigator root workflow
			 *
			 *	@param root string
			 *
			 *	@return workflow object
			 *
			**/
			load : function($root){
				if($navigators[$root] || false) 
					return $navigators[$root];
				return false;
			},
			
			/**
			 *	@method removeNavigator
			 *	@desc removes a Navigator root
			 *
			 *	@param root string
			 *
			**/
			removeNavigator : function($root){
				$navigators[$root] = 0;
			}
		},
		
		/**
		 *	@var Kernel object
		 *	
		 *	@desc manages the following tasks
		 *		runs services and workflows when requested
		 *		processes navigators when received and launch workflows
		 *
		**/
		Kernel : {			
			/** 
			 *	@method execute
			 *	@desc executes a workflow with the given definition
			 *
			 *	@param message object Workflow definition
			 *	@param memory object optional default {}
			 *
			**/
			execute : function($workflow, $memory){
				/**
				 *	create a new memory if not passed
				**/
				$memory = $memory || {};
				$memory['valid'] = $memory['valid'] || true;
			
				for(var $i in $workflow){
					var $message = $workflow[$i];
					
					/**
					 *	Check for non strictness
					**/
					var $nonstrict = $message['nonstrict'] || false;
					
					/**
					 *	Continue on invalid state if non-strict
					**/
					if($memory['valid'] !== true && $nonstrict !== true)
						continue;
					
					/**
					 *	run the service with the message and memory
					**/
					$memory = this.run($message, $memory);
				}
				
				return $memory;
			},
			
			/** 
			 *	@method run
			 *	@desc runs a service with the given definition
			 *
			 *	@param message object Service definition
			 *	@param memory object optional default {}
			 *
			**/
			run : function($message, $memory){
				/**
				 *	Read the service instance
				**/
				var $service = $message['service'];
				if($service.run || false){
				} else {
					$service = Snowblozm.Registry.get($message['service']) || false;
					if(!$service){
						window.alert("Invalid Service : " + $message['service']);
					}
				}
				
				/**
				 *	Read the service arguments
				**/
				var $args = $message['args'] || [];
				
				/**
				 *	Copy arguments if necessary
				**/
				for(var $i in $args){
					var $key = $args[$i];
					$message[$key] = $message[$key] || $memory[$key] || false
				}
				
				/**
				 *	Read the service input
				**/
				var $input = $message['input'] || {};
				var $sin = $service.input();
				var $sinreq = $sin['required'] || [];
				var $sinopt = $sin['optional'] || {};
				
				/**
				 *	Copy required input if not exists (return valid false if value not found)
				**/
				for(var $i in $sinreq){
					var $key = $sinreq[$i];
					var $param = $input[$key] || $key;
					$message[$key] = $message[$key] || $memory[$param] || false;
					if($message[$key] === false){
						$memory['valid'] = false;
						if(Snowblozm.debug || false){
							alert("Value not found for " + $key);
						}
						return $memory;
					}
				}
				
				/**
				 *	Copy optional input if not exists
				**/
				for(var $key in $sinopt){
					var $param = $input[$key] || $key;
					$message[$key] = $message[$key] || $memory[$param] || $sinopt[$key];
				}
				
				/**
				 *	Run the service with the message as memory
				**/
				$message = $service.run($message);
				
				/**
				 *	Read the service output and return if not valid
				**/
				var $output = [];
				$memory['valid'] = $message['valid'] || false;
				if($memory['valid']){
					$output = $message['output'] || [];
				}
				else {
					return $memory;
				}
				var $sout = $service.output();
				
				/**
				 *	Copy output
				**/
				for(var $i in $sout){
					var $key = $sout[$i];
					var $param = $output[$key] || $key;
					$memory[$param] = $message[$key] || false;
				}
				
				/**
				 *	Return the memory
				**/
				return $memory;
			},
			
			/**
			 *	@method launch
			 *	@desc processes the navigator received to launch workflows
			 *
			 *	@param navigator string
			 *	@param escaped boolean optional default false
			 *
			**/
			launch : function($navigator, $escaped, $memory){
				
				var $message = {
					navigator : $navigator
				};
				
				/**
				 *	Process escaped navigator
				**/
				if($escaped || false){
					$navigator = $navigator.replace(/_/g, '#');
					$navigator = $navigator.replace(/\./g, '=');
				}
				//$navigator = $navigator.replace(/\+/g, '%20');
				
				switch($navigator.charAt(1)){
					case '/' : 
						/**
						 *	Parse navigator
						**/
						var $parts = $navigator.split('~');
						
						var $path = $parts[0].split('/');
						var $index = $path.shift() + $path.shift();
						
						/**
						 *	Construct message for workflow
						**/
						for(var $j in $path){
							//$path[$j] = unescape($path[$j]);
							$message[$j] = $path[$j];
						}
						
						if($parts[1] || false){
							var $req = $parts[1].split('/');
							for(var $i = 1, $len=$req.length; $i<$len; $i+=2){
								//$req[$i + 1] = unescape($req[$i + 1]);
								$message[$req[$i]] = $req[$i + 1];
							}
						}

						break;
					
					default :
						/**
						 *	Parse navigator
						 **/
						var $req = $navigator.split(':');
						var $index = $req[0];
						
						/**
						 *	Construct message for workflow
						**/
						for(var $i=1, $len=$req.length; $i<$len; $i++){
							var $param = ($req[$i]).split('=');
							var $arg = $param[1];
							$arg = $arg.replace(/~/g, '=');
							//$arg = unescape($arg);
							$message[$param[0]] = $arg;
						}					
						break;

				}
				
				/**
				 *	Run the workflow and return the valid value
				**/
				if($navigators[$index] || false){
					$message['service'] = $navigators[$index];
					$message = this.run($message, $memory || {});
					return $message['valid'];
				}
				
				return false;
			}
		}
	};
})();

/**
 *	@short codes SB
**/
var SB = {
	R : {
		s : Snowblozm.Registry.save,
		g : Snowblozm.Registry.get,
		r : Snowblozm.Registry.remove,
		a : Snowblozm.Registry.add,
		l : Snowblozm.Registry.load,
		rN : Snowblozm.Registry.removeNavigator
	},
	K : {
		e : Snowblozm.Kernel.execute,
		r : Snowblozm.Kernel.run,
		l : Snowblozm.Kernel.launch
	}
};
/**
 * @initialize FireSpark
**/
var FireSpark = {
	core : {
		service : {},
		workflow : {},
		helper : {},
		constant : {}
	},
	ui : {
		service : {},
		workflow : {},
		helper : {},
		constant : {},
		template : {}
	},
	smart : {
		service : {},
		workflow : {},
		helper : {},
		constant : {}
	}
};

var FS = {
	c : {
		s : FireSpark.core.service,
		w : FireSpark.core.workflow,
		h : FireSpark.core.helper,
		c : FireSpark.core.constant
	},
	u : {
		s : FireSpark.ui.service,
		w : FireSpark.ui.workflow,
		h : FireSpark.ui.helper,
		c : FireSpark.ui.constant,
		t : FireSpark.ui.template
	},
	s : {
		s : FireSpark.smart.service,
		w : FireSpark.smart.workflow,
		h : FireSpark.smart.helper,
		c : FireSpark.smart.constant
	}
};

function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function is_numeric(n){
	return !isNaN(Number(n));
}

function unique($array){
   var u = {}, a = [];
   for(var i = 0, l = $array.length; i < l; ++i){
      if($array[i] in u)
         continue;
      a.push($array[i]);
      u[$array[i]] = 1;
   }
   return a;
}
/** *	@helper CheckEmail * *	@param index *	@param element * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.core.helper.CheckEmail = (function(){	var $emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;	return function($index, $el){		if(!$emailRegex.test($(this).val())){			FireSpark.core.service.CheckForm.result = false;			FireSpark.core.helper.checkFail($(this), FireSpark.core.constant.validation_status + '.error');			return false;		}	};})();/** *	@helper CheckFail * *	@param element *	@param selector * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.core.helper.checkFail = function($el, $sel){	return $el.next($sel).stop(true, true).slideDown(1000).delay(5000).fadeOut(1000);}/** *	@service CheckForm *	@desc Validates form input values (required and email) using style class * *	@param form string [memory] *	@param validations array [memory] optional default FireSpark.core.constant.validations *	@param error string [memory] optional default span * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.core.service.CheckForm = {	result : true,		input : function(){		return {			required : ['form'],			optional : { error : 'span', validations : FireSpark.core.constant.validations }		};	},		run : function($memory){		FireSpark.core.service.CheckForm.result = true;		FireSpark.core.constant.validation_status = $memory['error'];				$validations = $memory['validations'];				for(var $i in $validations){			$check = $validations[$i];			$($memory['form'] + ' ' + $check['cls']).each($check['helper']);			if(!FireSpark.core.service.CheckForm.result)				break;		}				$memory['valid'] = FireSpark.core.service.CheckForm.result;		return $memory;	},		output : function(){		return [];	}};/** *	@helper CheckMatch * *	@param index *	@param element * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.core.helper.CheckMatch = (function(){	var $value = false;	return function($index, $el){		if($index && $value && $(this).val()!=$value ){			FireSpark.core.service.CheckForm.result = false;			FireSpark.core.helper.checkFail($(this), FireSpark.core.constant.validation_status + '.error');			return false;		}				$value = $(this).val();	}})();/** *	@helper CheckRequired * *	@param index *	@param element * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.core.helper.CheckRequired = (function(){	return function($index, $el){		if($(this).val() == ''){			FireSpark.core.service.CheckForm.result = false;			FireSpark.core.helper.checkFail($(this), FireSpark.core.constant.validation_status + '.error');			return false;		}	};})();/** *	@helper DataOperate * *	@param value1 *	@param value2 *	@param operator * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.core.helper.dataOperate = function($value1, $value2, $operator){	switch($operator){		case '>' :			return $value1 > $value2;		case '<' :			return $value1 < $value2;		default :			return $value1 == $value2;	}}/** *	@service DataCookie *	@desc Creates a new Cookie * *	@param key string [message] *	@param value string [message] optional default null *	@param expires integer[message] default 1 day *	@param path string [memory] optional default '/' * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.core.service.DataCookie = {	input : function(){		return {			required : ['key'],			optional : { expires : 1, value : null, path : '/' }		};	},		run : function($memory){		$.cookie($memory['key'], null, {			path: $memory['path']		});				$.cookie($memory['key'], $memory['value'], {			expires : $memory['expires'],			path: $memory['path']		});				$memory['valid'] = true;		return $memory;	},		output : function(){		return [];	}};/** *	@service DataEncode *	@desc Encodes data from url-encoded other formats * *	@param type string [memory] optional default 'url' ('url', 'json', 'rest-id') *	@param data string [memory] optional default false *	@param url string [memory] optional default false * *	@return data object [memory] *	@return result string [memory] *	@return mime string [memory] *	@return url string [memory] * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.core.service.DataEncode = {	input : function(){		return {			optional : { type : 'url', data : false, url : '' }		}	},		run : function($memory){		var $data = $memory['data'];		var $type = $memory['type'];		var $mime =  'application/x-www-form-urlencoded';				if($data !== false && $data != ''){			$data = $data.replace(/\+/g, '%20');			if($type != 'url'){				var $params = $data.split('&');				var $result = {};				for(var $i=0, $len=$params.length; $i<$len; $i++){					var $prm = ($params[$i]).split('=');					$result[$prm[0]] = unescape($prm[1]);				}				$memory['data'] = $data = $result;			}						switch($type){				case 'json' :					$data = JSON.stringify($data);					$mime =  'application/json';					break;								case 'rest-id' :					$memory['url'] = $memory['url'] + '/' + $data['id'];									case 'url' :				default :					break;			}		}				$memory['result'] = $data;		$memory['mime'] = $mime;		$memory['valid'] = true;		return $memory;	},		output : function(){		return ['data', 'result', 'mime', 'url'];	}};/** *	@helper DataEquals  * *	@param value1 *	@param value2 * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.core.helper.dataEquals = function($value1, $value2){	return $value1 == $value2;}/** *	@helper DataFind * *	@param data * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.core.helper.dataFind = function($data, $text, $offset){	return $data.indexOf($text, $offset || 0) > -1;}/** *	@helper DataNormal * *	@param data * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.core.helper.dataNormal = function($data, $normal){	return $data != false ? $data : $normal;}/** *	@service DataPush *	@desc Pushes data into another array * *	@param data array [memory] optional default {} *	@param params array [args] optional default [] * *	@param result array [memory] * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.core.service.DataPush = {	input : function(){		return {			optional : { data : {} }		};	},		run : function($memory){		var $data = $memory['data'];		var $params = $memory['args'];				for(var $i in $params){			$value = $params[$i];			$data[$value] = $memory[$value];		}				$memory['result'] = $data;		$memory['valid'] = true;		return $memory;	},		output : function(){		return ['result'];	}};/** *	@service DataRegistry *	@desc Saves a new Reference * *	@param key string [memory] *	@param value object [memory] optional default false *	@param expiry integer [memory] optional default false *	@param check boolean [memory] optional default false * *	@return value object [memory] * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.core.service.DataRegistry = {	input : function(){		return {			required : ['key'],			optional : { value : false, expiry : false, check : false }		};	},		run : function($memory){		if($memory['value'] === false){			$memory['value'] = Snowblozm.Registry.get($memory['key']);		}		else {			if($memory['check'] && (Snowblozm.Registry.get($memory['key']) || false)){				$memory['valid'] = false;				return $memory;			}						Snowblozm.Registry.save($memory['key'], $memory['value']);		}				$memory['valid'] = true;		return $memory;	},		output : function(){		return ['value'];	}};/** *	@service DataSelect *	@desc Selects data from another array * *	@param data array [memory] optional default {} *	@param params array [memory] optional default {} * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.core.service.DataSelect = {	out : [],		input : function(){		return {			optional : { data : {}, params : {} }		};	},		run : function($memory){		var $data = $memory['data'];		var $params = $memory['params'];		FireSpark.core.service.DataSelect.out = [];				for(var $i in $params){			var $value = $params[$i];			$memory[$value] = $data[$i];			FireSpark.core.service.DataSelect.out.push($value);		}				$memory['valid'] = true;		return $memory;	},		output : function(){		return FireSpark.core.service.DataSelect.out;	}};/** *	@helper DataShort * *	@param data * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.core.helper.dataShort = function($data, $size, $short){	var $maxlen = $size || 15;	var $len = $maxlen - 5;	return $short ? ($data.length < $maxlen ? $data : $data.substr(0, $len) + ' ...') : $data;}/** *	@helper DataSplit * *	@param data *	@param separator optional default : * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.core.helper.dataSplit = function($data, $separator){	$separator = $separator || ':';	return $data.split($separator);}/** *	@helper DataStrip * *	@param data * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.core.helper.dataStrip = function($data){	$data = $data.replace(/<\/?[a-z][a-z0-9]*[^<>]*>/ig, "");		var $index = $data.indexOf('<');	if($index > 0){		$data = $data.substring(0, $index);	}		return $data;}/** *	@helper LaunchHash *	@desc Used to launch hash navigator * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.core.helper.LaunchHash = {	idle : true,		current : '',		launch : function($navigator){		if(FireSpark.core.helper.LaunchHash.idle && FireSpark.core.helper.LaunchHash.current != $navigator){			FireSpark.core.helper.LaunchHash.current = $navigator;			return Snowblozm.Kernel.launch(FireSpark.core.helper.LaunchHash.current);		}		return false;	}};/** *	@service LaunchMessage *	@desc Processes data to run workflows * *	@param data object [memory] optional default {} *	@param launch boolean [memory] optional default false *	@param status string [memory] optional default 'valid' *	@param message string [memory] optional default 'message' * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.core.service.LaunchMessage = {	input : function(){		return {			optional : { 				data : {}, 				launch : false, 				status : 'valid', 				message : 'message' 			}		};	},		run : function($memory){		if($memory['launch']){			var $data = $memory['data'] || {};			try {				if($data[$memory['status']] || false){					var $key = $memory['message'];					var $message = $data[$key] || false;					if($message){						$message['service'] = Snowblozm.Registry.load($memory['launch']);						return Snowblozm.Kernel.run($message, {});					}				}			} 			catch ($exception){				return Snowblozm.kernel.launch($memory['launch'], {});			}		}			$memory['valid'] = true;		return $memory;	},		output : function(){		return [];	}};/** *	@service LaunchNavigator *	@desc Processes data to launch navigator * *	@param data array [memory] optional default {} *	@param escaped boolean [memory] optional default false *	@param launch boolean [memory] optional default false * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.core.service.LaunchNavigator = {	input : function(){		return {			optional : { data : [], launch : false, escaped : false }		};	},		run : function($memory){		if($memory['launch']){			$data = $memory['data'];			if($data.length){				for(var $i in $data){					Snowblozm.Kernel.launch($data[$i], $memory['escaped']);				}			}			else {				Snowblozm.Kernel.launch($memory['launch'], $memory['escaped']);			}		}				$memory['valid'] = true;		return $memory;	},		output : function(){		return [];	}};/** *	@service LaunchTrigger *	@desc Initializes navigator launch triggers * *	@param selector string [memory] *	@param event string [memory] optional default 'click' *	@param attribute string [memory] *	@param escaped boolean [memory] optional default false *	@param hash boolean [memory] optional default false * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.core.service.LaunchTrigger = {	input : function(){		return {			required : ['selector', 'attribute'],			optional : { 				event : 'click', 				escaped : false, 				hash : false, 				pathname : false 			}		};	},		run : function($memory){		$($memory['selector']).live($memory['event'], function(){			FireSpark.core.helper.LaunchHash.idle = false;						var $navigator = $root.attr($memory['attribute']);						if($memory['attribute'] == 'href'){				$navigator = unescape($navigator);			}						$result = Snowblozm.Kernel.launch($navigator, $memory['escaped'], { root : $(this) });						if($memory['hash']){				window.location.hash = $navigator;			}						FireSpark.core.helper.LaunchHash.idle = true;			return $result;		});				$memory['valid'] = true;		return $memory;	},		output : function(){		return [];	}};/**
 *	@service LoadAjax
 *	@desc Uses AJAX to load data from server
 *
 *	@param url string [memory]
 *	@param data object [memory] optional default ''
 *	@param type string [memory] optional default 'json'
 *	@param request string [memory] optional default 'POST'
 *	@param process boolean [memory] optional default false
 *	@param mime string [memory] optional default 'application/x-www-form-urlencoded'
 *	@param sync boolean [memory] optional default false
 *
 *	@param workflow Workflow [memory]
 *	@param errorflow	Workflow [memory] optional default false
 *	@param function startfn Start Function [memory] optional default false
 *	@param function endfn End Function [memory] optional default false
 *	@param stop boolean [memory] optional default false
 *	@param validity boolean [memory] optional default false
 *
 *	@return data string [memory]
 *	@return error string [memory] optional
 *
 *	@author Vibhaj Rajan <vibhaj8@gmail.com>
 *
**/
FireSpark.core.service.LoadAjax = {
	input : function(){
		return {
			required : ['url', 'workflow'],
			optional : { 
				data : '', 
				type : 'json', 
				request : 'POST', 
				process : false, 
				mime : 'application/x-www-form-urlencoded' ,
				errorflow : false,
				stop : false,
				validity : false,
				sync : false
			}
		}
	},
	
	run : function($memory){
		
		FireSpark.core.helper.LoadBarrier.start();
		
		var $mem = {};
		for(var $i in $memory){
			$mem[$i] = $memory[$i];
		}
		
		/**
		 *	Load data from server using AJAX
		**/
		$.ajax({
			url: $memory['url'],
			data: $memory['data'],
			dataType : $memory['type'],
			type : $memory['request'],
			processData : $memory['process'],
			contentType : $memory['mime'],
			async : $memory['sync'] ? false : true,
			
			success : function($data, $status, $request){
				$mem['data'] = $data;
				//$mem['status'] = $status;
				
				if($mem['validity'] && ( ($mem['data']['valid'] === false) ||  (($mem['data']['message'] || false) && $mem['data']['message']['valid'] === false) )){
					/**
					 *	Run the errorflow if any
					**/
					try {
						if($memory['errorflow']){
							Snowblozm.Kernel.execute($memory['errorflow'], $mem);
						}
						FireSpark.core.helper.LoadBarrier.end();
					} catch($id) {
						FireSpark.core.helper.LoadBarrier.end();
						if(console || false){
							console.log('Exception : ' + $id);
						}
					}
				}
				else {
					/**
					 *	Run the workflow
					**/
					try {
						Snowblozm.Kernel.execute($memory['workflow'], $mem);
						FireSpark.core.helper.LoadBarrier.end();
					} catch($id) {
						FireSpark.core.helper.LoadBarrier.end();
						if(console || false){
							console.log('Exception : ' + $id);
						}
					}
				}
			},
			
			error : function($request, $status, $error){
				$mem['error'] = $error;
				//$mem['status'] = $status;
				$mem['data'] = FireSpark.core.constant.loaderror + '<span class="hidden"> [Error : ' + $error + ']</span>';
				
				/**
				 *	Run the errorflow if any
				**/
				try {
					if($memory['errorflow']){
						Snowblozm.Kernel.execute($memory['errorflow'], $mem);
					}
					FireSpark.core.helper.LoadBarrier.end();
				} catch($id) {
					FireSpark.core.helper.LoadBarrier.end();
					if(console || false){
						console.log('Exception : ' + $id);
					}
				}
			}
		});
		
		/**
		 *	@return false 
		 *	to stop default browser event
		**/
		return { valid : $memory['stop'] };
	},
	
	output : function(){
		return [];
	}
};
/** *	@helper LoadBarrier *	@desc Used to load barrier * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.core.helper.LoadBarrier = {	requests : 0,	lock : false,		barrier_function : [],	barrier_args : [],		start : function(){		this.requests++;	},		end : function(){		this.requests--;				if(this.requests <= 0){			this.requests = 0;						var $bf = this.barrier_function;			this.barrier_function = [];						var $ba = this.barrier_args;			this.barrier_args = [];						if($bf.length){				for(var $i in $bf){					try {						($bf[$i])($ba[$i]);					} catch($id) {						if(console){							console.log('Exception : ' + $id);						}					}				}			}		}	},		barrier : function($barrier_function, $barrier_args){		this.barrier_function.push($barrier_function);		this.barrier_args.push($barrier_args);	}};/** *	@service LoadBarrier *	@desc Sets barrier workflow * *	@param barrier array [memory] optional default false * *	@return barrier array [memory] default false * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.core.service.LoadBarrier = {	input : function(){		return {			optional : { barrier : false }		};	},		run : function($memory){		if($memory['barrier']){			FireSpark.core.helper.LoadBarrier.barrier(function(){				Snowblozm.Kernel.execute($memory['barrier'], $memory);			});		}				$memory['barrier'] = false;		$memory['valid'] = true;		return $memory;	},		output : function(){		return ['barrier'];	}};/**
 *	@service LoadIframe
 *	@desc Uses IFRAME to load data from server
 *
 *	@param agent string [memory] 
 *	@param type string [memory] optional default 'json' ('json', 'html')
 *
 *	@param workflow Workflow [memory]
 *	@param errorflow	Workflow [memory] optional default false
 *
 *	@return data string [memory]
 *	@return error string [memory] optional
 *
 *	@author Vibhaj Rajan <vibhaj8@gmail.com>
 *
**/
FireSpark.core.service.LoadIframe = {
	input : function(){
		return {
			required : ['agent', 'workflow'],
			optional : { 
				type : 'json', 
				errorflow : false
			}
		}
	},
	
	run : function($memory){
		
		//FireSpark.core.helper.LoadBarrier.start();
		
		var $mem = {};
		for(var $i in $memory){
			$mem[$i] = $memory[$i];
		}
		
		/**
		 *	Genarate unique framename
		**/
		var $d= new Date();
		var $framename = 'firespark_iframe_' + $d.getTime();
		
		/**
		 *	Set target attribute to framename in agent
		**/
		$($memory['agent']).attr('target', $framename);
		
		/**
		 *	Create IFRAME and define callbacks
		**/
		var $iframe = $('<iframe id="' + $framename + '" name="'+ $framename + '" style="width:0;height:0;border:0px solid #fff;"></iframe>')
			.insertAfter($memory['agent'])
			.bind('load', function(){
				try {
					var $frame = FireSpark.core.helper.windowFrame($framename);
					var $data = $frame.document.body.innerHTML;
					switch($memory['type']){
						case 'html' :
							$mem['data'] = $data;
							break;
						case 'json' :
						default :
							$data = $($data).html();
							$mem['data'] = $.parseJSON($data);
							break;
					}
					
					/**
					 *	Run the workflow
					**/
					try {
						Snowblozm.Kernel.execute($memory['workflow'], $mem);
						//FireSpark.core.helper.LoadBarrier.end();
					} catch($id) {
						//FireSpark.core.helper.LoadBarrier.end();
						if(console || false){
							console.log('Exception : ' + $id);
						}
					}
				}
				catch($error){
					if(console || false){
						console.log('Exception : ' + $error);
					}
					
					$mem['error'] = $error.description;
					$mem['result'] = FireSpark.core.constant.loaderror + '<span class="hidden"> [Error :' + $error.description + ']</span>';
					$mem['data'] = {
						valid : false,
						msg : FireSpark.core.constant.loaderror,
						code : 500,
						details : $error.description
					};
					
					/**
					 *	Run the errorflow if any
					**/
					try {
						if($memory['errorflow']){
							Snowblozm.Kernel.execute($memory['errorflow'], $mem);
						}
						//FireSpark.core.helper.LoadBarrier.end();
					} catch($id) {
						//FireSpark.core.helper.LoadBarrier.end();
						if(console || false){
							console.log('Exception : ' + $id);
						}
					}
				}
			})
			.bind('error', function($error){
				$mem['error'] = $error;
				$mem['result'] = FireSpark.core.constant.loaderror;
				
				/**
				 *	Run the errorflow if any
				**/
				try {
					if($memory['errorflow']){
						Snowblozm.Kernel.execute($memory['errorflow'], $mem);
					}
					//FireSpark.core.helper.LoadBarrier.end();
				} catch($id) {
					//FireSpark.core.helper.LoadBarrier.end();
					if(console || false){
						console.log('Exception : ' + $id);
					}
				}
			});
			
		/**
		 *	Remove IFRAME after timeout (150 seconds)
		**/
		window.setTimeout(function(){
			$iframe.remove();
		}, 150000);
		
		/**
		 *	@return true 
		 *	to continue default browser event with target on iframe
		**/
		return { valid : true };
	},
	
	output : function(){
		return [];
	}
};
/**
 *	@helper readControl
 *
 *	@param control Control character
 *
 *	@author Vibhaj Rajan <vibhaj8@gmail.com>
 *
**/
FireSpark.core.helper.readControl = function($control){
	switch($control){
		case 'info' :
			return 'View Entity';
		case 'edit' :
			return 'Edit Entity';
		case 'list' :
			return 'List Children';
		case 'add' :
			return 'Add Children';
		case 'remove' :
			return 'Remove Children';
		default :
			return '';
			break;
	}
}
/** *	@service ReadData *	@desc Serializes div into url-encoded data and reads form submit parameters * *	@param cntr string [memory] *	@param cls string [memory] optional default 'data' * *	@return data object [memory] * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.core.service.ReadData = {	input : function(){		return {			required : ['cntr'],			optional : { cls : 'data' }		};	},		run : function($memory){		var $d = new Date();		var $params = '_ts=' +  $d.getTime();				var serialize = function($index, $el){			if($(this).attr('name') || false){				$params = $params + '&' + $(this).attr('name') + '=' +  $(this).val();			}		}		$($memory['cntr'] + ' .' + $memory['cls']).each(serialize);				$memory['data'] = $params;		$memory['valid'] = true;		return $memory;	},		output : function(){		return ['data'];	}};/** *	@helper ReadDate * *	@param time * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.core.helper.readDate = function($time){	var $d = new Date($time);	return $d.toDateString();}/**
 *	@helper readFileSize
 *
 *	@param size
 *
 *	@author Vibhaj Rajan <vibhaj8@gmail.com>
 *
**/
FireSpark.core.helper.readFileSize = function(size){
	var kb = size/1024.0;
	if(kb > 1024.0){
		var mb = kb/1024.0;
		return mb.toFixed(2) + ' MB';
	}
	return kb.toFixed(2) + ' KB';
}
/** *	@service ReadForm *	@desc Serializes form into url-encoded data and reads form submit parameters * *	@param form string [memory] * *	@return url string [memory] *	@return request string [memory] *	@return data object [memory] * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.core.service.ReadForm = {	input : function(){		return {			required : ['form']		};	},		run : function($memory){		var $form = $($memory['form']);				$memory['url'] = $form.attr('action');		try {			$memory['request'] = $form.attr('method').toUpperCase();		} catch($e) { $memory['request'] = 'POST'; }				var $params = $form.serialize();		var $d= new Date();		$params = $params + '&_ts=' +  $d.getTime();		$memory['data'] = $params;				$memory['valid'] = true;		return $memory;	},		output : function(){		return ['url', 'request', 'data'];	}};/**
 *	@helper readGender 
 *
 *	@param ch gender character
 *
 *	@author Vibhaj Rajan <vibhaj8@gmail.com>
 *
**/
FireSpark.core.helper.readGender = function($ch){
	switch($ch){
		case 'M' :
			return 'Male';
		case 'F' :
			return 'Female';
		case 'N' :
		default :
			return '';
			break;
	}
}
/** *	@helper ReadTime * *	@param time * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.core.helper.readTime = function($time){	var $d = new Date($time);	var $hours = $d.getHours();	if($hours < 10) $hours = '0' + $hours/1;	var $minutes = $d.getMinutes();	if($minutes < 10) $minutes = '0' + $minutes/1;	return $d.toDateString() + ' ' + $hours + ':' + $minutes + ' hrs';}/** *	@service WindowConfirm *	@desc Confirms whether to continue  * *	@param confirm boolean [memory] optional default false *	@param value string [memory] * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.core.service.WindowConfirm = {	input : function(){		return {			required : ['value'],			optional : { confirm : false }		}	},		run : function($memory){		if($memory['confirm']){			$memory['valid'] = confirm($memory['value']);			return $memory;		}		$memory['valid'] = true;		return $memory;	},		output : function(){		return [];	}};/** *	@helper WindowFrame * *	@param name * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.core.helper.windowFrame = function($name){	for (var i = window.frames.length -1; i >= 0; i--){		var $frame = window.frames[i];		if($frame.name || false){			if($frame.name == $name){				return $frame;			}		}	}		return false;}/** *	@workflow WindowLogin *	@desc Sign in using Cookie * *	@param key string [message] optional default 'sessionid' *	@param value string [message] optional default null *	@param expires integer[message] optional default 1 day *	@param path string [memory] optional default '/' *	@param continue string [message] optional default false * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.core.workflow.WindowLogin = {	input : function(){		return {			optional : { key : 'sessionid', value : null, expires : 1, path : '/', 'continue' : false }		}	},		run : function($memory){		return Snowblozm.Kernel.execute([{			service : FireSpark.core.service.DataCookie		},{			service : FireSpark.core.service.WindowReload		}], $memory);	},		output : function(){		return [];	}};/** *	@service WindowReload *	@desc Reloads the window * *	@param continue string [message] optional default false * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.core.service.WindowReload = {	input : function(){		return {			'optional' : { 'continue' : false }		};	},		run : function($memory){		//window.location.hash = '';		if($memory['continue']){			window.location = $memory['continue'];		}		else {			window.location.reload();		}		$memory['valid'] = false;		return $memory;	},		output : function(){		return [];	}};/** *	@helper ContainerPages * *	@param element * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.ui.helper.containerPages = function($total, $pgno, $pgsz){	var $pages = [];	for(var $i = 0, $j = 0; $i < Number($total); $i += Number($pgsz), $j++){		$pages.push($j != Number($pgno));	}	return $pages;}/**
 *	@service ContainerRemove
 *	@desc Used to remove container
 *
 *	@param key string [memory] optional default 'ui-global'
 *	@param id long int [memory] optional default '0'
 *	@param ins string [memory] optional default '#ui-global-0'
 *
 *	@author Vibhaj Rajan <vibhaj8@gmail.com>
 *
**/
FireSpark.ui.service.ContainerRemove = {
	input : function(){
		return {
			optional : { 
				key : 'ui-global', 
				id : '0',
				ins : '#ui-global-0'
			}
		}
	},
	
	run : function($memory){		
		$memory['key'] = $memory[0] || $memory['key'];
		$memory['id'] = $memory[1] || $memory['id'];
		$memory['ins'] = $memory[2] || $memory['ins'];
		
		var $instance = $memory['key']+'-'+$memory['id'];

		$memory = Snowblozm.Kernel.execute([{
			service : FireSpark.ui.service.ElementContent,
			element : '.' + $instance,
			select : true,
			action : 'remove',
			animation : 'none'
		},{
			service : FireSpark.smart.workflow.InterfaceTile,
			input : { cntr : 'ins' }
		}], $memory);
		
		$memory['valid'] = false;
		return $memory;
	},
	
	output : function(){
		return [];
	}
};
/**
 *	@service ContainerRender
 *	@desc Used to render container
 *
 *	@param key string [memory] optional default 'ui-global'
 *	@param id long int [memory] optional default '0'
 *	@param ins string [memory] optional default '#ui-global-0'
 *	@param root object [memory] optional default false
 *	@param bg boolean [memory] optional default false
 *	@param tpl template [memory] optional default [{ '#tpl-default' : '>.bands' }]
 *	@param tile string [memory] optional false
 *	@param act string [memory] optional default 'first' ('all', 'first', 'last', 'remove')
 *	@param data object [memory] optional default {}
 *	@param anm string [memory] optional default 'fadein' ('fadein', 'fadeout', 'slidein', 'slideout')
 *	@param dur integer [memory] optional default 1000
 *	@param dly integer [memory] optional default 0
 *	@param errorflow workflow [memory] optional default { service : FireSpark.ui.workflow.TemplateApply, tpl : 'tpl-default' }
 *	@param mv boolean [memory] optional default FireSpark.smart.constant.moveup
 *	@param mvdur integer [memory] optional default FireSpark.smart.constant.moveduration
 *
 *	@return element element [memory]
 *
 *	@author Vibhaj Rajan <vibhaj8@gmail.com>
 *
**/
FireSpark.ui.service.ContainerRender = {
	input : function(){
		return {
			optional : { 
				key : 'ui-global', 
				id : '0',
				ins : '#ui-global-0',
				root : false,
				bg : false,
				tpl : [{ '#tpl-default' : '>.bands' }],
				tile : false,
				act : 'first',
				data : {},
				anm : 'fadein',
				dur : 1000,
				dly : 0,
				errorflow : { service : FireSpark.ui.workflow.TemplateApply, tpl : 'tpl-default' },
				mv : FireSpark.smart.constant.moveup,
				mvdur : FireSpark.smart.constant.moveduration
			}
		}
	},
	
	run : function($memory){				
		if($memory['data']['valid'] || false){
			if($memory['data']['message'] || false){
				if($memory['data']['message']['id'] || false){
					$memory['id'] = $memory['data']['message']['id'];
				}
			}
			
			var $instance = $memory['key']+'-'+$memory['id'];
			
			FireSpark.smart.helper.dataState(FireSpark.smart.constant.initmsg, true);
			var $workflow = [{
				service : FireSpark.ui.service.ElementContent,
				element : '.' + $instance + FireSpark.ui.constant.replacesel,
				select : true,
				action : 'remove'
			}];
			
			var $tpl = $memory['tpl'];
			for(var $i in $tpl){
				$workflow = $workflow.concat([{
					service : FireSpark.ui.workflow.TemplateApply,
					input : {
						action : 'act',
						duration : 'dur'
					},
					element : $memory['ins'] + $tpl[$i]['sel'],
					select : true,
					template : $tpl[$i]['tpl'],
					animation : 'none',
					delay : 0
				}]);
			}
			
			if($memory['bg'] === false){
				$workflow.push({
					service : FireSpark.smart.workflow.InterfaceTile,
					input : { cntr : 'ins' }
				});
			}
			
			return Snowblozm.Kernel.execute($workflow, $memory);
		}
		else if($memory['errorflow']) {
			/**
			 *	Run the errorflow
			**/
			return Snowblozm.Kernel.execute($memory['errorflow'], $memory);
		}
		else return { valid : false };
	},
	
	output : function(){
		return ['element'];
	}
};
/**
 *	@service ElementContent
 *	@desc Fills element with content and animates it or removes it and returns element in memory
 *
 *	@param element string [memory]
 *	@param select boolean [memory] optional default false
 *	@param data html/text [memory] optional default ''
 *	@param animation string [memory] optional default 'fadein' ('fadein', 'fadeout', 'slidein', 'slideout', 'none')
 *	@param duration integer [memory] optional default 1000
 *	@param delay integer [memory] optional default 0
 *	@param action string [memory] optional default 'all' ('all', 'first', 'last', 'remove', 'replace', 'hide', 'show')
 *
 *	@return element element [memory]
 *
 *	@author Vibhaj Rajan <vibhaj8@gmail.com>
 *
**/
FireSpark.ui.service.ElementContent = {
	input : function(){
		return {
			required : ['element'],
			optional : { 
				select : false,
				data : '',
				animation : 'fadein',
				duration : 1000,
				delay : 0,
				action : 'all'
			}
		};
	},
	
	run : function($memory){
		if($memory['select']){
			var $element = $($memory['element']);
			if(!$element.length && $memory['action'] != 'remove'){
				$element = $(FireSpark.ui.constant.maindiv);
			}
		}
		else {
			$element = $memory['element'];
		}
		
		var $data = $memory['data'];
		var $animation = $memory['animation'];
		var $duration = $memory['duration'];
		
		if($.isPlainObject($data)){
			$data = $("<div/>").html($data['html']).text();
		}
		
		if($animation == 'fadein' || $animation == 'slidein'){
			$element.hide();
		}
		
		switch($memory['action']){
			case 'all' :
				$element = $element.html($data);
				$element.trigger('load');
				break;
			
			case 'first' :
				$element = $element.prepend($data);
				$element.trigger('load');
				break;
			
			case 'last' :
				$element = $element.append($data);
				$element.trigger('load');
				break;
			
			case 'replace' :
				$element = $($data).replaceAll($element);
				$element.trigger('load');
				//$element.children().trigger('load');
				break;
				
			case 'remove' :
				$element.remove();
				break;
				
			default :
				break;
		}
		
		if($memory['action'] != 'remove'){
			$element.stop(true, true).delay($memory['delay']);
			
			switch($animation){
				case 'fadein' :
					$element.fadeIn($duration);
					break;
				case 'fadeout' :
					$element.fadeOut($duration);
					break;
				case 'slidein' :
					$element.slideDown($duration);
					break;
				case 'slideout' :
					$element.slideUp($duration);
					break;
				case 'none' :
					break;
				default :
					$element.html('Animation type not supported').fadeIn($duration);
					break;
			}
		}
		
		$memory['element'] = $element;
		$memory['valid'] = true;
		return $memory;
	},
	
	output : function(){
		return ['element'];
	}
};
/** *	@service ElementLoading *	@desc Enables and disables loader * *	@param element string [memory] optional default false *	@param data string [memory] optional default FireSpark.smart.constant.loadmsg * *	@return loading html [memory] * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.ui.service.ElementLoading = {	input : function(){		return {			optional : { element : false, disabled : false, data : FireSpark.smart.constant.loadmsg }		};	},		run : function($memory){		if($memory['element']){			$memory['loading'] = $($memory['element']).html();			$($memory['element']).html($memory['data']);		}		$memory['valid'] = true;		return $memory;	},		output : function(){		return ['loading'];	}};/**
 *	@service ElementSection
 *	@desc Toggles element with another content and animates it and returns element in memory
 *
 *	@param element string [memory] optional default parent of content
 *	@param select boolean [memory] optional default false
 *	@param content string [memory] optional default false
 *	@param child string [memory] optional default '.tile-content'
 *	@param none boolean [memory] optional default false
 *	@param animation string [memory] optional default 'fadein' ('fadein', 'slidein')
 *	@param duration integer [memory] optional default 1000
 *	@param delay integer [memory] optional default 0
 *
 *	@return element element [memory]
 *
 *	@author Vibhaj Rajan <vibhaj8@gmail.com>
 *
**/
FireSpark.ui.service.ElementSection = {
	input : function(){
		return {
			optional : { 
				element : false,
				select : false,
				content : false,
				child : '.tile-content',
				none : false,
				animation : 'fadein',
				duration : 500,
				delay : 0
			}
		};
	},
	
	run : function($memory){
		if($memory['select'] && $memory['element']){
			var $element = $($memory['element']);
			if(!$element.length){
				return { valid : false };
			}
		}
		else if($memory['select'] && $memory['content']){
			var $element = $($memory['content']).parent();
			if(!$element.length){
				return { valid : false };
			}
		}
		else {
			$element = $memory['element'];
		}
		
		$element.children($memory['child']).hide();
		
		if(!$memory['none']){
			if($memory['content']){
				$element = $element.children($memory['content']);
			}
			else {
				$element = $element.children($memory['child']).eq(0);
			}
			
			var $animation = $memory['animation'];
			var $duration = $memory['duration'];
			
			$element.trigger('load');
			$element.delay($memory['delay']);
			
			switch($animation){
				case 'fadein' :
					$element.fadeIn($duration);
					break;
				case 'slidein' :
					$element.slideDown($duration);
					break;
				default :
					$element.html('Animation type not supported').fadeIn($duration);
					break;
			}
		}
		
		$memory['element'] = $element;
		$memory['valid'] = false;
		return $memory;
	},
	
	output : function(){
		return ['element'];
	}
};
/** *	@service ElementState *	@desc Enables and disables element * *	@param element string [memory] optional default false *	@param disabled boolean [memory] optional default false * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.ui.service.ElementState = {	input : function(){		return {			optional : { element : false, disabled : false }		};	},		run : function($memory){		if($memory['element']){			if($memory['disabled']){				$($memory['element']).attr('disabled', true);			}			else {				$($memory['element']).removeAttr('disabled');			}		}		$memory['valid'] = true;		return $memory;	},		output : function(){		return [];	}};/**
 *	@service ElementTab
 *	@desc Creates a new tab and returns the element
 *
 *	@param tabui string [memory]
 *  @param title string [memory]
 *  @param autoload boolean [memory] optional default false
 *  @param taburl string [memory] optional default false
 *
 *	@return element Element [memory]
 *
 *	@author Vibhaj Rajan <vibhaj8@gmail.com>
 *
**/
FireSpark.ui.service.ElementTab = {
	input : function(){
		return {
			required : ['tabui', 'title'],
			optional : { autoload : false,	taburl : false }
		};
	},
	
	run : function($memory){
		var $tabui = Snowblozm.Registry.get($memory['tabui']);
		$memory['element'] = $tabui.add($memory['title'], $memory['autoload'], $memory['taburl']);
		$memory['valid'] = true;
		return $memory;
	},
	
	output : function(){
		return ['element'];
	}
};
/** *	@service ElementToggle *	@desc Shows and hides element * *	@param element string [memory] optional default false *	@param hide boolean [memory] optional default false * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.ui.service.ElementToggle = {	input : function(){		return {			optional : { element : false, hide : false }		};	},		run : function($memory){		if($memory['element']){			if($memory['hide']){				$($memory['element']).hide();			}			else {				$($memory['element']).show();			}		}		$memory['valid'] = true;		return $memory;	},		output : function(){		return [];	}};/** *	@service ElementTrigger *	@desc Triggers event on element * *	@param element string [memory] optional default false *	@param event string [memory] optional default false * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.ui.service.ElementTrigger = {	input : function(){		return {			optional : { element : false, event : false }		};	},		run : function($memory){		if($memory['element'] && $memory['event']){			$($memory['element']).trigger($memory['event']);		}		$memory['valid'] = true;		return $memory;	},		output : function(){		return [];	}};/**
 *	@template Default
**/
FireSpark.ui.template.Default = $.template('\
	<span class="{{if valid}}success{{else}}error{{/if}}">{{html msg}}</span>\
	<span class="hidden">${details}</span>\
');

Snowblozm.Registry.save('tpl-default', FireSpark.ui.template.Default);
/**
 *	@service TemplateApply
 *	@desc Applies template
 *
 *	@param template Template [memory]
 *	@param data object [memory] optional default {}
 *
 *	@return result html [memory]
 *
 *	@author Vibhaj Rajan <vibhaj8@gmail.com>
 *
**/
FireSpark.ui.service.TemplateApply = {
	input : function(){
		return {
			required : ['template'],
			optional : { data : {} }
		};
	},
	
	run : function($memory){
		$memory['result'] = $.tmpl($memory['template'], $memory['data']);
		$memory['valid'] = true;
		return $memory;
	},
	
	output : function(){
		return ['result'];
	}
};
/** *	@workflow TemplateApply *	@desc Applies template with data * *	@param element string [memory] *	@param template string [memory] optional default FireSpark.ui.constant.defaulttpl *	@param data object [memory] optional default {} * *	@param select boolean [memory] optional default false *	@param animation string [memory] optional default 'fadein' ('fadein', 'fadeout', 'slidein', 'slideout') *	@param duration integer [memory] optional default 1000 *	@param delay integer [memory] optional default 0 *	@param action string [memory] optional default 'all' ('all', 'first', 'last', 'remove', 'hide', 'show') * *	@return element element [memory] * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.ui.workflow.TemplateApply = {	input : function(){		return {			required : ['element'],			optional : { 				data : {}, 				template : 'tpl-default',				select : false, 				animation : 'fadein',				duration : 1000,				delay : 0,				action : 'all'			}		};	},		run : function($memory){		return Snowblozm.Kernel.execute([{			service : FireSpark.ui.service.TemplateRead		},{			service : FireSpark.ui.service.TemplateApply,			input : { template : 'result' }		},{			service : FireSpark.ui.service.ElementContent,			input : { data : 'result' }		}], $memory);	},		output : function(){		return ['element'];	}};/** *	@workflow TemplateBind *	@desc Binds template with data into element * *	@param cntr string [memory] *	@param select boolean [memory] optional default true *	@param anm string [memory] optional default 'fadein' ('fadein', 'fadeout', 'slidein', 'slideout') *	@param dur integer [memory] optional default 1000 *	@param dly integer [memory] optional default 0 *	@param act string [memory] optional default 'all' ('all', 'first', 'last', 'remove', 'hide', 'show') * *	@param tpl string [memory] optional default 'tpl-default' *	@param data string [memory] optional default {} * *	@return element element [memory] * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.ui.workflow.TemplateBind = {	input : function(){		return {			required : ['cntr'],			optional : { 				select : true, 				anm : 'fadein',				dur : 1000,				dly : 0, 				action : 'all',				tpl : 'tpl-default' ,				data : ''			}		};	},		run : function($memory){		$memory = Snowblozm.Kernel.execute([{			service : FireSpark.core.service.DataEncode,			type : 'json'		},{ 			service : FireSpark.ui.workflow.TemplateApply,			input : {				element : 'cntr',				template : 'tpl', 				animation : 'anm',				duration : 'dur',				delay : 'dly',				action : 'act'			}		}], $memory);				$memory['valid'] = true;		return $memory;	},		output : function(){		return ['element'];	}};/**
 *	@service TemplateRead
 *	@desc Reads template definition into memory
 *
 *	@param template string [memory] optional default 'tpl-default' (FireSpark.jquery.template.Default)
 *
 *	@param result Template [memory]
 *
 *	@author Vibhaj Rajan <vibhaj8@gmail.com>
 *
**/
FireSpark.ui.service.TemplateRead = {
	input : function(){
		return {
			optional : { template : 'tpl-default' }
		};
	},
	
	run : function($memory){
		$tpl = $memory['template'];
		$template = Snowblozm.Registry.get($tpl);
		
		if(!$template && $tpl.charAt(0) == '#'){
			$template = $.template($tpl);
			if($template){
				Snowblozm.Registry.save($tpl, $template);
			}
		}
	
		$memory['result'] = $template;
		$memory['valid'] = ($template || false) ? true : false;
		return $memory;
	},
	
	output : function(){
		return ['result'];
	}
};
/**
 *	@template Tiles
**/
FireSpark.ui.template.Tiles = $.template('\
	<ul class="hover-menu horizontal tls-${key}-${id}">\
		<span class="tilehead">\
			${tilehead}\
			{{if FireSpark.core.helper.dataEquals(close, true)}}\
				<a class="launch close hover" href="#/close/${key}/${id}/${ins}/" title="Close"></a>\
			{{/if}}\
		</span>\
		{{each tiles}}\
		<li>\
			{{if FireSpark.core.helper.dataEquals(!privileged || (privileged && admin), true)}}\
				{{if tpl}}\
					{{tmpl tpl}}\
				{{else urlhash}}\
					<a href="${urlhash}" class="navigate tile ${style}">${name}</a>\
				{{else}}\
					<a href="!/view/${tile}-${id}" class="navigate tile ${style}">${name}</a>\
				{{/if}}\
			{{/if}}\
		</li>\
		{{/each}}\
	</ul>\
');

Snowblozm.Registry.save('tpl-tiles', FireSpark.ui.template.Tiles);

/**
 *	@template Bands
**/
FireSpark.ui.template.Bands = $.template('\
	{{each tiles}}\
		<span></span>\
		{{if $value.tiletpl}}\
			{{tmpl $value.tiletpl}}\
		{{/if}}\
	{{/each}}\
');

Snowblozm.Registry.save('tpl-bands', FireSpark.ui.template.Bands);

/**
 *	@template Container
**/
FireSpark.ui.template.Container = $.template('\
	<div class="tiles"></div>\
	{{if inline}}<div class="bands"></div>{{/if}}\
');

Snowblozm.Registry.save('tpl-container', FireSpark.ui.template.Container);
/** *	@helper TransformButton * *	@param element * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.ui.helper.transformButton = function($element, $config){	$element.button();	return $element;}/** *	@helper TransformCKEditor * *	@param element * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.ui.helper.transformCKEditor = function($element, $config){	var $temp = $element;			$element.each(function($index, $el){		var $name = $temp.attr('id') || $temp.attr('name');		var $instance = CKEDITOR.instances[$name] || false;		if($instance){			try {				CKEDITOR.remove($instance);			}			catch(e) {}			delete $instance;		}		$temp = $temp.slice(1);	});		$element.ckeditor();	return $element;}/** *	@helper TransformRobin * *	@param element *	@param selector *	@param total *	@param interval * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.ui.helper.transformRobin = function($element, $config){		(function(){		var $total = $config['total'];		var $current = 0;		window.setInterval(function txrobin(){			$current++;			$current %= $total;			$element.children($config['selector']).stop(true, true).fadeOut(500).eq($current).delay(500).fadeIn(500);		}, $config['interval']);	})();		return $element;}/** *	@helper TransformSmartpanel * *	@param element *	@param config * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.ui.helper.transformSmartpanel = function($element, $config){	return $element.each(function(){				// Settings and variables		var $self = $(this),		$settings = $.extend({			display: '.smart-display',			edit: '.smart-edit',			form: '.smart-form',			cancel: '.smart-cancel',			hover: '.smart-hover'		}, $config || {}, {}),				// Local cache for selectors		$display = $self.find($settings.display),		$edit = $self.find($settings.edit),		$form = $self.find($settings.form),		//$save = $self.find($settings.save),		$cancel = $self.find($settings.cancel);				// Make sure the plugin only get initialized once		if($self.hasClass('smart-panel-done')){			return;		}		$self.addClass('smart-panel-done');				// Edit handler		$edit.bind('click.smart-panel', function(){			$display.hide();			$form.show();			//$edit.hide();			return false;		});				// Cancel Actions		$cancel.bind('click.smart-panel', function(){			$form.hide();			$display.show();			//$edit.show();			return false;		});				// Display Actions		/*$display.bind('click.smart-panel', function(){			$display.hide();			$form.show();			return false;		})		/*.bind( 'mouseenter.smart-panel', function(){			$display.addClass( $settings.hover );		})		.bind( 'mouseleave.smart-panel', function(){			$display.removeClass( $settings.hover );		})*/;			});}/** *	@helper TransformTabpanel * *	@param element * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.ui.helper.transformTabpanel = function($element, $config){	$element.hide();		var $tab = new Array();	var $index = $config['indexstart'];		var $options = {		cache : $config['cache'],		collapsible : $config['collapsible'],		event : $config['event'],		tabTemplate: "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close'>Remove Tab</span></li>",		add: function($event, $ui) {			$tab[$index] = $($ui.panel);		}	};		if($config['tablink']){		$options.load = function($event, $ui) {			$('a', $ui.panel).click(function() {				$($ui.panel).load(this.href);				return false;			});		}	}		var $tabpanel = $element.tabs($options);	$element.fadeIn(1000);		$('.ui-icon-close').live( "click", function() {		var $indx = $("li", $tabpanel).index($(this).parent());		$tabpanel.tabs( "remove", $indx );	});	$index--;		Snowblozm.Registry.save($config['savekey'], {		add : function($tabtitle, $autoload, $taburl){			$index++;			var $url = '#ui-tab-' + $index;			if($autoload || false){				$url = $taburl;			}			$tabpanel.tabs('add', $url, $tabtitle);			$tabpanel.tabs('select', '#ui-tab-' + $index);			return $tab[$index];		}	});	return $element;}/** *	@service TransformTrigger *	@desc Initializes transform triggers * *	@param transforms array [memory] optional default FireSpark.core.constant.transforms * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.ui.service.TransformTrigger = {	input : function(){		return {			optional : { 'transforms' : FireSpark.ui.constant.transforms }		};	},		run : function($memory){		var $transforms = $memory['transforms'];				for(var $i in $transforms){			$tx = $transforms[$i];			$($tx['cls']).live('load', function(){				var $helper = $tx['helper'];				$helper($(this), $tx['config']);			});		}			$memory['valid'] = true;		return $memory;	},		output : function(){		return [];	}};/** *	@helper TransformWysiwyg * *	@param element * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.ui.helper.transformWysiwyg = function($element, $config){	$element.children($config['sel']).wysiwyg();	return $element;}/**
 *	@service DataImport
 *	@desc Uses AJAX to load content from server and saves in dom
 *
 *	@param imports array [memory]
 *	@param workflow Workflow [memory]
 *
 *	@author Vibhaj Rajan <vibhaj8@gmail.com>
 *
**/
FireSpark.smart.service.DataImport = {
	input : function(){
		return {
			required : ['imports', 'workflow']
		}
	},
	
	run : function($memory){
		/**
		 *	Set barrier
		**/
		var $workflow = $memory['workflow'];
		var $imports = $memory['imports'];
		
		FireSpark.core.helper.LoadBarrier.barrier(function($args){
			var $flag = false;
			var $imports = $args['imports'];
			
			for(var $i in $imports){
				var $key = 'FIRESPARK_IMPORT_' + $imports[$i];
				if(Snowblozm.Registry.get($key) || false){
				} else {
					$flag = true;
					break;
				}
			}
				
			if($flag || false){
				FireSpark.smart.helper.dataState(FireSpark.smart.constant.loaderror);
				return { valid : false };
			}
			
			$args['memory']['valid'] = true;
			Snowblozm.Kernel.execute($args['workflow'], $args['memory']);
		}, {
			workflow : $workflow,
			imports : $imports,
			memory : $memory
		});
		
		/**
		 *	Load imports
		**/
		var $barrier = false;
		
		for(var $i in $imports){
			var $key = 'FIRESPARK_IMPORT_' + $imports[$i];
			
			if(Snowblozm.Registry.get($key) || false){
			} else {
				if($barrier === false){
					$barrier = true;
					FireSpark.smart.helper.dataState(FireSpark.smart.constant.loadstatus);
				}
				
				Snowblozm.Kernel.execute([{
					service : FireSpark.core.service.LoadAjax,
					url : $imports[$i],
					type : 'html',
					request : 'GET',
					sync : FireSpark.smart.constant.importsync,
					workflow : [{
						service : FireSpark.core.service.DataRegistry,
						key : $key,
						value : true,
						check : true
					},{
						service : FireSpark.ui.service.ElementContent,
						element : FireSpark.smart.constant.importdiv,
						select : true,
						action : 'last',
						animation : 'none',
						duration : 5
					}]
				}], {});
			}
		}
		
		/**
		 *	Finalize barrier
		**/
		if($barrier){
			return { valid : false };
		} else {
			FireSpark.core.helper.LoadBarrier.end();
			return { valid : false };
			//return Snowblozm.Kernel.execute($workflow, $memory);
		}
	},
	
	output : function(){
		return [];
	}
};
/**
 *	@service DataLoad
 *	@desc Uses AJAX and IFRAME to load data from server and saves in pool
 *
 *	@param url string [memory]
 *	@param data object [memory] optional default ''
 *	@param type string [memory] optional default 'json'
 *	@param request string [memory] optional default 'POST'
 *	@param process boolean [memory] optional default false
 *	@param mime string [memory] optional default 'application/x-www-form-urlencoded'
 *
 *	@param params array [memory] optional default []
 *	@param workflow Workflow [memory]
 *	@param errorflow	Workflow [memory] optional default false
 *	@param stop boolean [memory] optional default false
 *	@param validity boolean [memory] optional default false
 *
 *	@param force boolean [memory] optional default FireSpark.smart.constant.poolforce
 *	@param global boolean [memory] optional default false
 *	@param nocache boolean [memory] optional default false
 *	@param expiry integer [memory] optional default FireSpark.smart.constant.poolexpiry
 *
 *	@param iframe string [memory] optional default false
 *	@param agent string [memory] optional default root
 *	@param root element [memory] optional default false
 *
 *	@return data string [memory]
 *	@return error string [memory] optional
 *
 *	@author Vibhaj Rajan <vibhaj8@gmail.com>
 *
**/
FireSpark.smart.service.DataLoad = {
	input : function(){
		return {
			required : ['url', 'workflow'],
			optional : { 
				data : '', 
				type : 'json', 
				request : 'POST', 
				process : false, 
				mime : 'application/x-www-form-urlencoded' ,
				params : [],
				errorflow : false,
				stop : false,
				validity : false,
				nocache : false,
				expiry : FireSpark.smart.constant.poolexpiry,
				force : FireSpark.smart.constant.poolforce,
				global : false,
				iframe : false,
				agent : false,
				root : false
			}
		}
	},
	
	run : function($memory){
		var $workflow = $memory['workflow'];
		var $key = 'FIRESPARK_SI_DATA_URL_' + $memory['url'] + '_DATA_' + $memory['data'] + '_TYPE_' + $memory['type'] + '_REQUEST_' + $memory['request'];
		//alert($key);
		
		if($memory['data'] === true) {
			$memory['data'] = '';
		}
		
		$workflow.unshift({
			service : FireSpark.core.service.DataPush,
			args : $memory['params'],
			output : { result : 'data' }
		});
		
		
		/**
		 *	Check AJAX
		**/
		if($memory['iframe']){
			$memory['agent'] = $memory['agent'] ? $memory['agent'] : $memory['root'];
			
			return Snowblozm.Kernel.run({
				service : FireSpark.core.service.LoadIframe,
				args : $memory['args']
			}, $memory);
		}
		else if($memory['force'] === false){
			/**
			 *	Check pool
			**/
			var $data = Snowblozm.Registry.get($key);
			
			if($data){
				$memory['data'] = $data;
				if($data['valid'] || false){
					/**
					 *	Run the workflow
					**/
					Snowblozm.Kernel.execute($workflow, $memory);
					return { valid : $memory['stop']};
				}
				else if($memory['errorflow']) {
					/**
					 *	Run the errorflow
					**/
					Snowblozm.Kernel.execute($memory['errorflow'], $memory);
					return { valid : $memory['stop']};
				}
			}
		}
		
		if($memory['nocache'] === false){
			$workflow.unshift({
				service : FireSpark.core.service.DataRegistry,
				input : { value : 'data' },
				key : $key,
				expiry : $memory['expiry']
			});
		}
		
		if($memory['global']){
			var $data = Snowblozm.Registry.get(FireSpark.smart.constant.globalkey);
			
			if($data){
				$memory['data'] = $data;
				if($data['valid'] || false){
					/**
					*	Run the workflow
					**/
					Snowblozm.Kernel.execute($workflow, $memory);
					return { valid : $memory['stop']};
				}
				else if($memory['errorflow']){
					/**
					 *	Run the errorflow
					**/
					Snowblozm.Kernel.execute($memory['errorflow'], $memory);
					return { valid : $memory['stop']};
				}
			}
		}
		
		/**
		 *	Load AJAX
		**/
		return Snowblozm.Kernel.run({
			service : FireSpark.core.service.LoadAjax,
			args : $memory['args'] || false,
			workflow : $workflow
		}, $memory);
	},
	
	output : function(){
		return [];
	}
};
/** *	@helper DataState * *	@param html *	@param state * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.smart.helper.dataState = function($html, $state){	var $el = $(FireSpark.smart.constant.statusdiv);	var $data = $el.html();	$el.html($html).stop(true, true);	if($state || false){		$el.hide().slideDown(500).delay(FireSpark.smart.constant.statusdelay).slideUp(FireSpark.smart.constant.statusduration);	}	else {		$el.hide().slideDown(500);	}}/** *	@service InterfaceCollect *	@desc Initializes navigator, collects data, launch workflows * *	@param selector string [memory] *	@param attribute string [memory] optional default 'href' *	@param event string [memory] optional default 'click' *	@param nav string [memory] optional default false * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.smart.service.InterfaceCollect = {	input : function(){		return {			required : ['selector'],			optional : { 				event : 'click', 				attribute : 'href',				nav : false			}		};	},		run : function($memory){		$($memory['selector']).live($memory['event'], function(){			FireSpark.smart.service.InterfaceUrl.idle = false;						var $block = $(this).parent();			var $url = $(this).attr($memory['attribute']);						var $message = { 				root : $(this) 			};			var $history = { 				root : FireSpark.smart.constant.statusdiv			};						var serialize = function($index, $el){				if($(this).attr('name') || false){					$message[$(this).attr('name')] =  $(this).val();					$history[$(this).attr('name')] =  $(this).val();				}			}			$block.children('input').each(serialize);						/** 			 *	@note SmartURL using HTML5 History 			**/			if($memory['nav'] || false){				try {					window.history.pushState({ 						navigator : $memory['navigator'],						message : $history					},"", $url);				} catch($id){					if(console || false){						console.log('Exception : ' + $id);					}				}				//FireSpark.smart.service.InterfaceUrl.base = $navigator;			}			else {				//window.history.pushState({},"", ' ');			}						var $result = Snowblozm.Kernel.launch($message['navigator'], false, $message);			FireSpark.smart.service.InterfaceUrl.idle = true;			return $result;		});				$memory['valid'] = true;		return $memory;	},		output : function(){		return [];	}};/** *	@service InterfaceHistory *	@desc Initializes navigator launch history triggers * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.smart.service.InterfaceHistory = {	input : function(){		return { };	},		run : function($memory){		window.onpopstate = function(e){			if(e.state){				if(e.state['message'] || false){					Snowblozm.Kernel.launch(e.state['message']['navigator'], false, e.state['message'])				}				else {					Snowblozm.Kernel.run({						service : FireSpark.smart.service.InterfaceUrl,						navigator : e.state['nav'],						escaped : e.state['escaped'],						event : true,						save : e.state['hash'],						nofrc : true					}, {});				}			}		};		$memory['valid'] = true;		return $memory;	},		output : function(){		return [];	}};/** *	@workflow InterfaceLoad *	@desc Processes loading of UI using imports and keys * *	@param key string [memory] optional default 'people.person.info' *	@param id long int [memory] optional default '0' *	@param name string [memory] optional default '' *	@param cntr string [memory] optional default false *	@param ins string [memory] optional default '0' *	@param nav string [memory] optional default false *	@param tile string [memory] optional false * *	@param url URL [memory] optional default FireSpark.smart.constant.defaulturl *	@param tpl string [memory] optional default 'tpl-default' * *	@param select boolean [memory] optional default true *	@param lcntr string [memory] optional default FireSpark.smart.constant.statusdiv *	@param ld string [memory] optional default FireSpark.core.constant.loadstatus *	@param anm string [memory] optional default 'fadein' ('fadein', 'fadeout', 'slidein', 'slideout') *	@param dur integer [memory] optional default 1000 *	@param dly integer [memory] optional default 0 *	@param act string [memory] optional default 'all' ('all', 'first', 'last', 'remove') *	@param bg boolean [memory] optional default false *	@param mv boolean [memory] optional default FireSpark.smart.constant.moveup *	@param mvdur integer [memory] optional default FireSpark.smart.constant.moveduration * *	@param frc boolean [memory] optional default FireSpark.smart.constant.poolforce *	@param glb boolean [memory] optional default false *	@param nch boolean [memory] optional default false *	@param exp integer [memory] optional default FireSpark.smart.constant.poolexpiry * *	@param iframe string [memory] optional default false *	@param agt string [memory] optional default root *	@param root element [memory] optional default false * *	@param data string [memory] optional default '' *	@param type string [memory] optional default 'json' *	@param req string [memory] optional default 'POST' *	@param workflow Workflow [memory] optional default [{ service : FireSpark.ui.service.ContainerRender }] *	@param errorflow Workflow [memory] optional default [{ service : FireSpark.jquery.service.ElementContent, ... }] *	@param params array [memory] optional default [] *	@param stop boolean [memory] optional default false *	@param config array [memory] optional default FireSpark.smart.constant.config *	@param navigator string [memory] optional default '' * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.smart.workflow.InterfaceLoad = {	input : function(){		return {			optional : { 				key : FireSpark.smart.constant.defaultkey, 				id : '0',				name : false,				ins : '0',				cntr : false,				lcntr : FireSpark.smart.constant.statusdiv,				url : FireSpark.smart.constant.defaulturl,				nav : false,				tile : false,				glb : false,				nch : false,				exp : FireSpark.smart.constant.poolexpiry,				frc : FireSpark.smart.constant.poolforce,				iframe : false,				agt : false,				root : false,				bg : false,				select : true,				ld : FireSpark.smart.constant.loadstatus,				anm : 'fadein',				dur : 500,				dly : 0,				act : 'first',				tpl : 'tpl-default' ,				data : '',				type : 'json',				req : 'POST',				workflow : [{ service : FireSpark.ui.service.ContainerRender }],				errorflow :  [{ 					service : FireSpark.ui.service.ElementContent,					args : ['lcntr'],					input : {						element : 'lcntr',						animation : 'anm', 						duration : 'dur',						delay : 'dly'					},					select : true,					act : 'all'				}],				params : [],				stop : false,				config : FireSpark.smart.constant.config,				navigator : '',				mv : FireSpark.smart.constant.moveup,				mvdur : FireSpark.smart.constant.moveduration			}		};	},		run : function($memory){		for(var $max=0; ; $max++){			if($memory[$max] || false){			} else break;		}		var $index = --$max;		$i = $j = 0;		var $data = '';				if($index > 1 && is_numeric($memory[$index])){			$memory['key'] = $memory[$index-1];						$data += ('&' + ($j++) + '=' + $memory[$index]);			$memory['id'] = $memory[$index];						$data += ('&' + ($j++) + '=');			$max = $index-1;		}		else if($index > 1 && is_numeric($memory[$index-1])){			$memory['key'] = $memory[$index-2];						$data += ('&' + ($j++) + '=' + $memory[$index-1]);			$memory['id'] = $memory[$index-1];						$data += ('&' + ($j++) + '=' + $memory[$index]);			//$memory[$j++] = $memory[$index];			$max = $index-2;		}		else {			$memory['key'] = $memory[$i++];						$data += ('&' + ($j++) + '=' + $memory[$i]);			$memory['id'] = $memory[$i++];		}				while($i < $max){			$data += ('&' + ($j++) + '=' + $memory[$i++]);		}		/*var $config = $memory['config'];		for($i=0; $i<$max; $i++){			$data += ('&' + $config[$i] + '=' + $memory[$i]);		}*/		$memory['data'] += $data;				//$memory['key'] = $memory[$i] || $memory['key'];		//$memory['id'] = $memory[$i+1] || $memory['id'];		//$memory['name'] = $memory[$i+2] || $memory['name'] || '';		//if($memory['name'] == '#') $memory['name'] = ''; //$memory['id'];		//$memory['ins'] = $memory[$i+3] || $memory['ins'];				var $key = $memory['key'];		var $instance = $memory['key']+'-'+$memory['id'];		var $workflow = $memory['workflow'];				$memory['key'] = 'ui-' + $key.replace(/\./g, '-');		$memory['ins'] = $memory['cntr'] || FireSpark.smart.constant.tileuiprefix + $memory['ins'];				var $navigator = $memory['navigator'];		$navigator = $navigator.replace(/bg\/true\//g, '');		$memory['navigator'] = $navigator = $navigator.replace(/glb\/true\//g, '');				var $parts = $navigator.split('~');		if($parts[1] || false){			var $req = $parts[1].split('/');			for(var $i = 1, $len=$req.length; $i<$len; $i+=2){				//$req[$i + 1] = unescape($req[$i + 1]);				$memory['data'] += ('&' + $req[$i] + '=' + $req[$i + 1]);			}		}				if($memory['nav']){			$workflow = $workflow.concat([{				service : FireSpark.core.service.LaunchNavigator,				data : [$memory['nav']],				launch : true,				nonstrict : true			}]);		}				return Snowblozm.Kernel.execute([{			service : FireSpark.ui.service.ElementContent,			input : {				element : 'lcntr' ,				animation : 'anm', 				delay : 'dly',				duration : 'dur',				data : 'ld'			},			act : 'all',			select : true		},{			service : FireSpark.smart.service.DataLoad,			url : FireSpark.smart.constant.importroot + $key + FireSpark.smart.constant.importext,			args : ['lcntr', 'act', 'dur', 'dly', 'anm', 'ld'],			request : 'GET',			data : true, 			type : 'json', 			process : false, 			mime : 'application/x-www-form-urlencoded',			params : [],			stop : false,			cache : true,			expiry : false,			workflow : [{				service : FireSpark.core.service.DataSelect,				params : { imports : 'imports', tpl : 'tpl' }			},{				service : FireSpark.smart.service.DataImport,				args : ['tpl', 'lcntr', 'act', 'dur', 'dly', 'anm', 'ld'],				workflow : [{					service : FireSpark.smart.service.DataLoad,					args : ['tpl', 'ins', 'act', 'dur', 'dly', 'anm', 'key', 'id', 'name', 'ins', 'inline', 'bg', 'tile', 'lcntr', 'ld', 'mv', 'mvdur'],					url : $memory['url'],					data : 'service=' + $key + '&navigator=' + $memory['navigator'] + '&' + $memory['data'], 					validity : true,					type : $memory['type'],					request : $memory['req'], 					global : $memory['glb'],					nocache : $memory['nch'],					expiry : $memory['exp'],					force : $memory['frc'],					iframe : $memory['iframe'],					agent : $memory['agt'],					root : $memory['root'],					act : $memory['act'],					dur : $memory['dur'],					dly : $memory['dly'],					anm : $memory['anm'],					bg : $memory['bg'] || $memory['nav'],					mv : $memory['mv'],					mvdur : $memory['mvdur'],					key : $memory['key'],					id : $memory['id'],					name : $memory['name'],					ins : $memory['ins'],					tile : $memory['tile'],					navigator : $memory['navigator'],					params : ($memory['params']).concat(['key', 'id', 'name', 'ins', 'navigator']),					workflow : $workflow,					errorflow : [{ 						service : FireSpark.ui.workflow.TemplateApply,						input : {							animation : 'anm', 							duration : 'dur',							delay : 'dly'						},						element : $memory['lcntr'],						select : true,						act : 'all',						tpl : 'tpl-default'					}]				}],				errorflow : false			}]		}], $memory);	},		output : function(){		return [];	}};/** *	@workflow InterfaceTab *	@desc Loads template with data into new tab in tabui * *	@param tabui string [message] optional default 'tabuipanel' *	@param title string [message] optional default 'Krishna' * *	@param url URL [memory] *	@param cntr string [memory] *	@param tpl string [memory] optional default 'tpl-default' * *	@param select boolean [memory] optional default false *	@param ld string [memory] optional default FireSpark.core.constant.loadmsg *	@param anm string [memory] optional default 'fadein' ('fadein', 'fadeout', 'slidein', 'slideout') *	@param dur integer [memory] optional default 1000 *	@param dly integer [memory] optional default 0 *	@param act string [memory] optional default 'all' ('all', 'first', 'last', 'remove') * *	@param frc boolean [memory] optional default FireSpark.smart.constant.poolforce *	@param nch boolean [memory] optional default false *	@param exp integer [memory] optional default FireSpark.smart.constant.poolexpiry * *	@param iframe string [memory] optional default false *	@param agt string [memory] optional default root *	@param root element [memory] optional default false * *	@param cnf boolean [memory] optional default false *	@param cnfmsg string [memory] optional default FireSpark.smart.constant.cnfmsg * *	@param sel string [memory] optional default false *	@param enc string [memory] optional default 'url' ('url', 'json') * *	@param data string [memory] optional default  *	@param type string [memory] optional default 'json' *	@param req string [memory] optional default 'POST' *	@param workflow Workflow [memory] optional default [{ service : FireSpark.jquery.workflow.TemplateApply, ... }] *	@param errorflow Workflow [memory] optional default [{ service : FireSpark.jquery.service.ElementContent, ... }] *	@param params array [memory] optional default [] *	@param stop boolean [memory] optional default false * *	@param ln boolean [memory] optional default false *	@param status string [memory] optional default 'valid' *	@param message string [memory] optional default 'message' * *	@return element element [memory] * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.smart.workflow.InterfaceTab = {	input : function(){		return {			required : ['cntr', 'url'],			optional : { 				tabui : 'tabuipanel',				title : 'Krishna',				nch : false,				exp : FireSpark.smart.constant.poolexpiry,				frc : FireSpark.smart.constant.poolforce,				iframe : false,				agt : false,				root : false,				select : false,				ld : FireSpark.smart.constant.loadmsg,				anm : 'fadein',				dur : 1000,				dly : 0,				act : 'all',				tpl : 'tpl-default' ,				cnf : false,				cnfmsg : FireSpark.smart.constant.cnfmsg,				sel : false,				enc : 'url',				data : '',				type : 'json',				req : 'POST',				workflow : false,				errorflow :  false,				params : [],				stop : false,				ln : false,				status : 'valid',				message : 'message'			}		};	},		run : function($memory){		return Snowblozm.Kernel.execute([{			service : FireSpark.ui.service.ElementTab		},{			service : FireSpark.smart.workflow.ReadTmpl			//stop : true		}], $memory);	},		output : function(){		return ['element'];	}};/** *	@workflow InterfaceTile *	@desc Shows tile content into parent element * *	@param cntr string [memory] optional default selects closest with FireSpark.smart.constant.tileuicntr || FireSpark.smart.constant.tileuiprefix + ins *	@param ins string [memory] optional default false *	@param child selector [memory] optional default FireSpark.smart.constant.tileuisection *	@param none boolean [memory] optional default false *	@param select boolean [memory] optional default true *	@param tile string [memory] optional false *	@param anm string [memory] optional default 'fadein' ('fadein', 'fadeout', 'slidein', 'slideout') *	@param dur integer [memory] optional default 500 *	@param dly integer [memory] optional default 0 *	@param mv boolean [memory] optional default FireSpark.smart.constant.moveup *	@param mvdur integer [memory] optional default FireSpark.smart.constant.moveduration * *	@return element element [memory] * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.smart.workflow.InterfaceTile = {	input : function(){		return {			optional : { 				cntr : false,				ins : false,				child : FireSpark.smart.constant.tileuisection,				none : false,				select : false, 				tile : false,				anm : 'fadein',				dur : 150,				dly : 0,				mv : FireSpark.smart.constant.moveup,				mvdur : FireSpark.smart.constant.moveduration			}		};	},		run : function($memory){		$memory['cntr'] = $memory['cntr'] || $memory[1];		$memory['tile'] = $memory['tile'] || $memory[0] || false;				if($memory['tile'] === false){			var $ins = ($memory['cntr'] || FireSpark.smart.constant.tileuiprefix + $memory['ins']) + '>' + FireSpark.smart.constant.tileuicntr;		}		var $select = true;		$memory = Snowblozm.Kernel.execute([{				service : FireSpark.ui.service.ElementSection,				element : $ins || false,				input : { 					content : 'tile',					animation : 'anm',					duration : 'dur',					delay : 'dly'				},				select : $select		}], $memory);				if(Number($memory['mv'])){			$('body,html').animate({					scrollTop: 0			}, $memory['mvdur']);		}				return $memory;	},		output : function(){		return ['element'];	}};/** *	@service InterfaceTrigger *	@desc Initializes navigator launch triggers * *	@format #/path/!/view * *	@param selector string [memory] *	@param event string [memory] optional default 'click' *	@param attribute string [memory] *	@param escaped boolean [memory] optional default false *	@param hash boolean [memory] optional default false *	@param nav string [memory] optional default false * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.smart.service.InterfaceTrigger = {	input : function(){		return {			required : ['selector', 'attribute'],			optional : { 				event : 'click', 				escaped : false, 				hash : false, 				nav : false			}		};	},		run : function($memory){		$($memory['selector']).live($memory['event'], function(){			FireSpark.smart.service.InterfaceUrl.idle = false;						var $navigator = $(this).attr($memory['attribute']);			var $cache = FireSpark.smart.constant.uicache ? !($(this).hasClass('force')) : $(this).hasClass('nofrc');						if($memory['attribute'] == 'href'){				$navigator = unescape($navigator);			}						/** 			 *	@note SmartURL using HTML5 History 			**/			if($memory['nav']){				if($memory['nav'] === true){					//window.history.pushState({},"", ' ');				}				else {					window.history.pushState({ 						nav : $memory['nav'] + $navigator, 						escaped : $memory['escaped'],						hash : $memory['hash']					},"", FireSpark.smart.constant.urlstart + $navigator);										$navigator = $memory['nav'] + $navigator;					//FireSpark.smart.service.InterfaceUrl.base = $navigator;				}			}						$result = Snowblozm.Kernel.run({				service : FireSpark.smart.service.InterfaceUrl,				navigator : $navigator,				escaped :$memory['escaped'],				root : $(this),				event : true,				save : $memory['hash'],				nofrc : $cache			}, {});						FireSpark.smart.service.InterfaceUrl.idle = true;			return $result['valid'];		});				$memory['valid'] = true;		return $memory;	},		output : function(){		return [];	}};/** *	@service InterfaceUrl *	@desc Used to launch URL/Hash SmartInterface navigator * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.smart.service.InterfaceUrl = {	idle : true,		current : '',	path : '#',	view : '',		input : function(){		return {			required : ['navigator'],			optional : { 				escaped : false,				root : false,				event : false,				save : false,				nofrc : false			}		}	},		run : function($memory){		$navigator = $memory['navigator']; // === false ?  FireSpark.smart.service.InterfaceUrl.base : $memory['navigator'];		$escaped = $memory['escaped'];		$root = $memory['root'];		$event = $memory['event'];		$save = $memory['save'];		$force = $memory['nofrc'] ? false : true;				if(($event || FireSpark.smart.service.InterfaceUrl.idle) && FireSpark.smart.service.InterfaceUrl.current != $navigator){			if($event){				if($navigator[0] == '!'){					$navigator = FireSpark.smart.service.InterfaceUrl.path + $navigator;				}				else if($navigator[1] == '!'){					$navigator = FireSpark.smart.service.InterfaceUrl.path + $navigator.substring(1);				}			}						if($save || false){				FireSpark.smart.service.InterfaceUrl.current = window.location.hash = $navigator;			}						var $hash = $navigator.split('!');						if(FireSpark.smart.service.InterfaceUrl.path != $hash[0]){				if($save || false){					FireSpark.smart.service.InterfaceUrl.path = $hash[0];				}								var $nav = ($hash[1] || false) ? '#' + $hash[1] : false;				return { valid : Snowblozm.Kernel.launch($hash[0], $escaped, { root : $root, nav : $nav, frc : $force }) };			}			else if($hash[1] || false) {				$hash[1] = '#' + $hash[1];				if($save || false){					FireSpark.smart.service.InterfaceUrl.view = $hash[1];				}								return { valid : Snowblozm.Kernel.launch($hash[1], $escaped, { root : $root }) };			}		}				return { valid : false };	},		output : function(){		return [];	}};/** *	@workflow ReadHtml *	@desc Reads HTML content into element * *	@param url URL [memory] *	@param cntr string [memory] * *	@param select boolean [memory] optional default false *	@param ld string [memory] optional default FireSpark.core.constant.loadmsg *	@param anm string [memory] optional default 'fadein' ('fadein', 'fadeout', 'slidein', 'slideout') *	@param dur integer [memory] optional default 1000 *	@param dly integer [memory] optional default 0 *	@param act string [memory] optional default 'all' ('all', 'first', 'last', 'remove') * *	@param frc boolean [memory] optional default FireSpark.smart.constant.poolforce *	@param nch boolean [memory] optional default false *	@param exp integer [memory] optional default FireSpark.smart.constant.poolexpiry * *	@param iframe string [memory] optional default false *	@param agt string [memory] optional default root *	@param root element [memory] optional default false * *	@return element element [memory] * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.smart.workflow.ReadHtml = {	input : function(){		return {			required : ['url', 'cntr'],			optional : { 				nch : false,				exp : FireSpark.smart.constant.poolexpiry,				frc : FireSpark.smart.constant.poolforce,				iframe : false,				agt : false,				root : false,				select : true, 				ld : FireSpark.smart.constant.loadmsg,				lcntr : FireSpark.smart.constant.statusdiv,				anm : 'fadein',				dur : 150,				dly : 0,				act : 'all'			}		};	},		run : function($memory){			var $workflow = [{			service : FireSpark.ui.service.ElementLoading,			input : { 				data : 'loading',			},			element : $memory['root'] || $memory['lcntr'],		},{			service : FireSpark.ui.service.ElementContent,			input : { 				element : 'cntr',				animation : 'anm', 				duration : 'dur', 				delay : 'dly', 				action : 'act' 			},			select : true		}];				return Snowblozm.Kernel.execute([{			service : FireSpark.ui.service.ElementLoading,			input : { 				data : 'ld',			},			element : $memory['root'] || $memory['lcntr'],		},{			service : FireSpark.smart.service.DataLoad,			type : 'html',			request : 'GET',			args : ['cntr', 'anm', 'dur', 'dly', 'act', 'loading'],			input : {				nocache : 'nch',				expiry : 'exp',				force : 'frc',				agent : 'agt'			},			workflow : $workflow,			errorflow : [{				service : FireSpark.ui.service.ElementLoading,				input : { 					data : 'loading',				},				element : $memory['root'] || $memory['lcntr'],			}]		}], $memory);	},		output : function(){		return ['element'];	}};/** *	@workflow ReadTmpl *	@desc Reads template with data into element * *	@param url URL [memory] optional default FireSpark.smart.constant.defaulturl *	@param cntr string [memory] optional default FireSpark.smart.constant.statusdiv *	@param tpl string [memory] optional default 'tpl-default' * *	@param select boolean [memory] optional default true *	@param ld string [memory] optional default FireSpark.core.constant.loadmsg *	@param anm string [memory] optional default 'fadein' ('fadein', 'fadeout', 'slidein', 'slideout') *	@param dur integer [memory] optional default 1000 *	@param dly integer [memory] optional default 0 *	@param act string [memory] optional default 'all' ('all', 'first', 'last', 'remove') * *	@param frc boolean [memory] optional default FireSpark.smart.constant.poolforce *	@param nch boolean [memory] optional default false *	@param exp integer [memory] optional default FireSpark.smart.constant.poolexpiry * *	@param iframe string [memory] optional default false *	@param agt string [memory] optional default root *	@param root element [memory] optional default false * *	@param cnf boolean [memory] optional default false *	@param cnfmsg string [memory] optional default FireSpark.smart.constant.cnfmsg * *	@param sel string [memory] optional default false *	@param enc string [memory] optional default 'url' ('url', 'json') * *	@param data string [memory] optional default '' *	@param type string [memory] optional default 'json' *	@param req string [memory] optional default 'POST' *	@param workflow Workflow [memory] optional default [{ service : FireSpark.jquery.workflow.TemplateApply, ... }] *	@param errorflow Workflow [memory] optional default [{ service : FireSpark.jquery.service.ElementContent, ... }] *	@param params array [memory] optional default [] *	@param stop boolean [memory] optional default false * *	@param ln boolean [memory] optional default false *	@param status string [memory] optional default 'valid' *	@param message string [memory] optional default 'message' * *	@return element element [memory] * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.smart.workflow.ReadTmpl = {	input : function(){		return {			optional : { 				url : FireSpark.smart.constant.defaulturl,				cntr : FireSpark.smart.constant.statusdiv,				nch : false,				exp : FireSpark.smart.constant.poolexpiry,				frc : FireSpark.smart.constant.poolforce,				iframe : false,				agt : false,				root : false,				select : true,				ld : FireSpark.smart.constant.loadmsg,				anm : 'fadein',				dur : 1000,				dly : 0,				act : 'all',				tpl : 'tpl-default' ,				cnf : false,				cnfmsg : FireSpark.smart.constant.cnfmsg,				sel : false,				enc : 'url',				data : '',				type : 'json',				req : 'POST',				workflow : FireSpark.smart.constant.readflow() || [{ 					service : FireSpark.ui.workflow.TemplateApply, 					input : {						element : 'cntr' ,						template : 'tpl',						animation : 'anm', 						duration : 'dur',						delay : 'dly',						action : 'act' 					},					select : true				}],				errorflow :  [{ 					service : FireSpark.ui.service.ElementContent,					input : {						element : 'cntr' ,						animation : 'anm', 						duration : 'dur',						delay : 'dly',						action : 'act' 					},					select : true				}],				params : [],				stop : false,				ln : false,				status : 'valid',				message : 'message',				vld : false			}		};	},		run : function($memory){		var $workflow = [{			service : FireSpark.ui.service.ElementState,			input : { element : 'sel' }		},{			service : FireSpark.core.service.LaunchMessage,			input : { launch : 'ln' }		}];		$workflow = $workflow.concat($memory['workflow']);				var $errorflow = [{			service : FireSpark.ui.service.ElementState,			input : { element : 'sel' }		}];		$errorflow = $errorflow.concat($memory['errorflow']);				$args = ['cntr', 'sel', 'tpl', 'anm', 'dur', 'dly', 'act', 'ln'];		$args = $args.concat($memory['args']);				return Snowblozm.Kernel.execute([{			service : FireSpark.core.service.WindowConfirm,			input : { confirm : 'cnf', value : 'cnfmsg' }		},{			service : FireSpark.core.service.DataEncode,			input : { type : 'enc' },			output : { result : 'data' }		},{			service : FireSpark.ui.service.ElementState,			input : { element : 'sel' },			disabled : true		},{			service : FireSpark.ui.service.ElementContent,			input : { 				element : 'cntr' ,				data : 'ld',				animation : 'anm'			},			action : 'all',			duration : 5		},{			service : FireSpark.smart.service.DataLoad,			args : $args,			input : {				request : 'req',				nocache : 'nch',				expiry : 'exp',				force : 'frc',				agent : 'agt',				validity : 'vld'			},			workflow : $workflow,			errorflow : $errorflow		}], $memory);	},		output : function(){		return [];	}};/** *	@workflow WriteData *	@desc Submits data using ajax or iframe and loads template with response data into .status in form * *	@param sel form-parent selector string optional default 0 *	@param cls string [memory] optional default 'data' *	@param err string [memory] optional default span * *	@param url URL [memory] optional default FireSpark.smart.constant.defaulturl *	@param cntr string [memory] *	@param pnl string [memory] false *	@param tpl string [memory] optional default FireSpark.ui.constant.defaulttpl *	@param errtpl string [memory] optional default FireSpark.ui.constant.defaulttpl *	@param chng string [optional] default 'none' ('reset', 'hide', 'none') * *	@param select boolean [memory] optional default false *	@param ld string [memory] optional default FireSpark.core.constant.loadmsg *	@param anm string [memory] optional default 'fadein' ('fadein', 'fadeout', 'slidein', 'slideout') *	@param dur integer [memory] optional default 1000 *	@param dly integer [memory] optional default 0 *	@param act string [memory] optional default 'all' ('all', 'first', 'last', 'remove') * *	@param frc boolean [memory] optional default FireSpark.smart.constant.poolforce *	@param nch boolean [memory] optional default false *	@param exp integer [memory] optional default FireSpark.smart.constant.poolexpiry * *	@param iframe string [memory] optional default false *	@param agt string [memory] optional default root *	@param root element [memory] optional default false * *	@param cnf boolean [memory] optional default false *	@param cnfmsg string [memory] optional default FireSpark.smart.constant.cnfmsg * *	@param slr string [memory] optional default false *	@param enc string [memory] optional default 'url' ('url', 'json') * *	@param type string [memory] optional default 'json' *	@param req string [memory] optional default 'POST' *	@param workflow Workflow [memory] optional default [{ service : FireSpark.ui.workflow.TemplateApply, ... }] *	@param errorflow Workflow [memory] optional default [{ service : FireSpark.ui.workflow.TemplateApply, ... }] *	@param params array [memory] optional default [] *	@param stop boolean [memory] optional default false * *	@param ln boolean [memory] optional default false *	@param status string [memory] optional default 'valid' *	@param message string [memory] optional default 'message' * *	@return element element [memory] * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.smart.workflow.WriteData = {	input : function(){		return {			optional : { 				sel : false,				src : 'form',				cntr : false,				pnl : false,				chng : 'none',				url : FireSpark.smart.constant.defaulturl,				cls : 'data',				err : 'span',				nch : true,				exp : FireSpark.smart.constant.poolexpiry,				frc : FireSpark.smart.constant.poolforce,				iframe : false,				agt : false,				root : false,				select : false,				ld : FireSpark.smart.constant.loadmsg,				anm : 'fadein',				dur : 1000,				dly : 0,				act : 'all',				tpl : FireSpark.ui.constant.defaulttpl,				errtpl : FireSpark.ui.constant.defaulttpl,				cnf : false,				cnfmsg : FireSpark.smart.constant.cnfmsg,				slr : false,				enc : 'url',				type :  FireSpark.smart.constant.datatype,				req :  FireSpark.smart.constant.reqtype,				workflow : FireSpark.smart.constant.readflow() || [{ 					service : FireSpark.ui.service.ElementContent,					input : {						element : 'cntr' ,						animation : 'anm', 						duration : 'dur',						delay : 'dly',					},					data : '<span></span>',					action : 'all',					select : true				},{ 					service : FireSpark.ui.workflow.TemplateApply, 					input : {						element : 'pnl' ,						template : 'tpl',						animation : 'anm', 						duration : 'dur',						delay : 'dly',						action : 'act' 					},					select : true				}],				errorflow : [{ 					service : FireSpark.ui.workflow.TemplateApply, 					input : {						element : 'cntr' ,						template : 'errtpl',						animation : 'anm', 						duration : 'dur',						delay : 'dly'					},					action : 'all',					select : true				}],				params : [],				stop : false,				ln : false,				status : 'valid',				message : 'message'			}		};	},		run : function($memory){		$memory['src'] = $memory[0] || $memory['src'];		$memory['sel'] = $memory[1] || $memory['sel'];				$memory['pnl'] = $memory['pnl'] || $memory['cntr'] || $memory['sel'] +' .status:last';				switch($memory['src']){			case 'form' : 				var $form = $memory['sel'] + ' form';				var $readflow = {					service : FireSpark.core.service.ReadForm,					form : $form,					output : { request : 'req' }				};				break;						case 'div' : 				var $form = $memory['sel'];				var $readflow = {					service : FireSpark.core.service.ReadData,					input : { cntr : 'sel' }				};				break;						default :				return { valid : false };		}				switch($memory['chng']){			case 'reset' :				$memory['workflow'] = [{					service : FireSpark.ui.service.ElementTrigger,					element : $form + ' input[type=reset]',					event : 'click',				}].concat($memory['workflow']);				break;						case 'hide' :				$memory['workflow'] = [{					service : FireSpark.ui.service.ElementContent,					element : $form,					action : 'none',					animation : 'fadeout',					duration : 150,					select : true				}].concat($memory['workflow']);				break;						case 'none' :			default : 				break;		}				$memory['workflow'] = [{			service : FireSpark.smart.service.WriteMode,			input : { element : 'pnl' }		}].concat($memory['workflow']);				$memory['errorflow'] = [{			service : FireSpark.smart.service.WriteMode,			input : { element : 'pnl' }		}].concat($memory['errorflow']);				$memory['workflow'] = $memory['workflow'].concat([{			service : FireSpark.smart.service.WriteMode,			input : { element : 'pnl' },			admin : true,			nonstrict : true		}]);				$memory['errorflow'] = $memory['errorflow'].concat([{			service : FireSpark.smart.service.WriteMode,			input : { element : 'pnl' },			admin : true,			nonstrict : true		}]);			return Snowblozm.Kernel.execute([{			service : FireSpark.core.service.CheckForm,			form : $form,			input : { error : 'err' }		},			$readflow		,{			service : FireSpark.smart.workflow.ReadTmpl,			args : ['pnl', 'errtpl'],			cntr : $memory['cntr'] || $memory['sel'] +' .status:last',			sel : $memory['slt'] || $memory['sel'] + ' input[name=submit]',			agt : $memory['agt'] || $memory['sel'] + ' form',			vld : FireSpark.smart.constant.readvld		}], $memory);	},		output : function(){		return ['element'];	}};/** *	@service WriteMode *	@desc Enables and disables admin mode during smart write * *	@param element string [memory] optional default false *	@param admin boolean [memory] optional default false *	@param dtcntr element [memory] optional default false * *	@param dtcntr element [memory] * *	@author Vibhaj Rajan <vibhaj8@gmail.com> ***/FireSpark.smart.service.WriteMode = {	last : false,		input : function(){		return {			optional : { element : false, admin : false, dtcntr : false }		};	},		run : function($memory){		if($memory['dtcntr'] || $memory['element']){			var $el = $memory['dtcntr'] || $($memory['element']).parents(FireSpark.smart.constant.dtclass);			if($el.length){				if($memory['admin']){					$el.dataTable();				}				else {					$el.dataTable().fnDestroy();					$el.removeAttr('style');				}			}		}				$memory['valid'] = true;		$memory['dtcntr'] = $el;		return $memory;	},		output : function(){		return ['dtcntr'];	}};/**
 *	@config FireSpark.core.constant
**/
FireSpark.core.constant = {
	validations : {
		required : {
			cls : '.required',
			helper : FireSpark.core.helper.CheckRequired
		},
		email : {
			cls : '.email',
			helper : FireSpark.core.helper.CheckEmail
		},
		match : {
			cls : '.match',
			helper : FireSpark.core.helper.CheckMatch
		}
	},
	validation_status : 'span',
	loaderror : '<span class="error">Error Loading Data</span>'
}

/**
 *	@config FireSpark.ui.constant
**/
FireSpark.ui.constant = {
	transforms : {
		uibutton : {
			cls : '.uibutton',
			helper : FireSpark.ui.helper.transformButton,
			config : {}
		},
		ckeditor : {
			cls : '.ckeditor',
			helper : FireSpark.ui.helper.transformCKEditor,
			config : {}
		},
		wysiwyg : {
			cls : '.wysiwyg',
			helper : FireSpark.ui.helper.transformWysiwyg,
			config : {}
		},
		uitabpanel : {
			cls : '.uitabpanel',
			helper : FireSpark.ui.helper.transformTabpanel,
			config : { 
				savekey : 'tabpanel',
				select : false, 
				cache : false,	
				collapsible : false, 
				event : 'click', 
				tablink : false, 
				indexstart : 0 
			}
		}
	},
	maindiv : '#ui-global-0',
	replacesel : ', .ui-replace',
	defaulttpl : 'tpl-default'
};

/**
 *	@config FireSpark.smart.constant
**/
FireSpark.smart.constant = {
	urlstart : '', // '?/'
	globalkey : 'ui-global-data',
	statusdiv : '#load-status',
	statusdelay : 1500,
	statusduration : 1500,
	loaderror : '<span class="error">Error Loading Data</span>',
	loadstatus : '<span class="state loading">Loading ...</span>',
	loadmsg : '<span class="loading">Loading ...</span>',
	initmsg : '<span class="state">Initializing ...</span>',
	cnfmsg : 'Are you sure you want to continue ?',
	importdiv : '#ui-imports',
	importroot : 'ui/import/',
	importext : '.json',
	importsync : false,
	defaultkey : 'people.person.info',
	defaulturl : 'run.php',
	tileuiprefix : '#ui-global-',
	tileuicntr : '.bands',
	tileuisection : '.tile-content',
	moveup : false,
	moveduration: 850,
	poolexpiry : 150,
	poolforce : false,
	config : [],
	defaultln : '#sync',
	uicache : true,
	dtclass : '.datatable',
	readflow : function(){ return false; },
	datatype : 'json',
	datareq : 'POST',
	readvld : true
};

/**
 *	@initialization Namespaces
**/
GeoStore = {
	core : {
		service : {}, workflow : {}, helper : {}, constant : {}, template : {}
	}
};

/**
 *	@initialization Session variables
**/
GeoStore.session = {
	user : false,
	pass : false
};

/**
 *	@initialization UI data
**/
GeoStore.data = {
	launch : []
};

/**
 *	@constant loadmsg
 *	@desc HTML content to show while loading content (default '<p class="loading">Loading ...</p>')
 *
**/
GeoStore.core.constant.loadmsg = '<p class="loading">Loading ...</p>';

/**
 *	@constant successmsg
 *	@desc HTML content to indicate successful execution (default '<img src="ui/img/icons/ok.gif">')
 *
**/
GeoStore.core.constant.successimg = '<img src="ui/img/icons/ok.gif">';

/**
 *	@constant errormsg
 *	@desc HTML content to indicate erroneous execution (default '<img src="ui/img/icons/error.gif">')
 *
**/
GeoStore.core.constant.errorimg = '<img src="ui/img/icons/error.gif">';

var CKEDITOR_BASEPATH = 'ui/js/ckeditor/';

/**
 *	@overrides FireSpark constants and helpers
**/
FireSpark.smart.constant.config = ['desk'];
FireSpark.smart.constant.statusdelay = 500;
FireSpark.smart.constant.statusduration = 150;
FireSpark.smart.constant.moveup = true;
FireSpark.smart.constant.moveduration = 1000;
FireSpark.smart.constant.uicache = false;
FireSpark.smart.constant.poolforce = true;
FireSpark.smart.constant.loadmsg = '<span class="loading"></span>';
FireSpark.smart.constant.tileuiprefix = '#kestrelbase'
FireSpark.smart.constant.readflow = function(){ 
	return [{ 
		service : FireSpark.ui.service.ElementContent,
		input : { element : 'cntr', animation : 'anm', duration : 'dur', delay : 'dly' },
		data : '<span></span>',
		action : 'all',
		select : true
	},{ 
		service : FireSpark.ui.service.ElementContent,
		input : { element : 'pnl', animation : 'anm', duration : 'dur', delay : 'dly', action : 'act'  },
		select : true
	}];
}
FireSpark.smart.constant.datatype = 'html'
FireSpark.smart.constant.readvld = false

/**
 *	@initialization Snowblozm and GeoStore
**/
$(document).ready(function(){
	Snowblozm.Registry.add('#tab', FireSpark.smart.workflow.InterfaceTab);
	Snowblozm.Registry.add('#html', FireSpark.smart.workflow.ReadHtml);
	Snowblozm.Registry.add('#read', FireSpark.smart.workflow.ReadTmpl);
	Snowblozm.Registry.add('#write', FireSpark.smart.workflow.WriteData);
	Snowblozm.Registry.add('#bind', FireSpark.ui.workflow.TemplateBind);
	Snowblozm.Registry.add('#ui', FireSpark.smart.workflow.InterfaceLoad);
	Snowblozm.Registry.add('#view', FireSpark.smart.workflow.InterfaceTile);
	Snowblozm.Registry.add('#toggle', FireSpark.ui.service.ElementToggle);
	Snowblozm.Registry.add('#sync', FireSpark.smart.service.InterfaceUrl);
	Snowblozm.Registry.add('#login', FireSpark.core.workflow.WindowLogin);
	Snowblozm.Registry.add('#refresh', FireSpark.core.service.WindowReload);
	Snowblozm.Registry.add('#close', FireSpark.ui.service.ContainerRemove);
	
	Snowblozm.Kernel.execute([{
		service : FireSpark.smart.service.InterfaceCollect,
		selector : 'a.collect',
		event : 'click',
		attribute : 'href',
		nav : true
	},{
		service : FireSpark.smart.service.InterfaceCollect,
		selector : 'a.silent',
		event : 'click',
		attribute : 'href'
	},{
		service : FireSpark.smart.service.InterfaceCollect,
		selector : 'form.collect',
		event : 'submit',
		attribute : 'action'
	},{
		service : FireSpark.smart.service.InterfaceTrigger,
		selector : 'a.navigate',
		event : 'click',
		attribute : 'href',
		escaped : false,
		hash : true
	},{
		service : FireSpark.smart.service.InterfaceTrigger,
		selector : 'a.launch',
		event : 'click',
		attribute : 'href',
		escaped : false,
		nav : true
	},{
		service : FireSpark.smart.service.InterfaceTrigger,
		selector : 'a.ui',
		event : 'click',
		attribute : 'href',
		escaped : false,
		nav : '#/ui/'
	},{
		service : FireSpark.smart.service.InterfaceTrigger,
		selector : 'form.navigate',
		event : 'submit',
		attribute : 'id',
		escaped : true
	},{
		service : FireSpark.smart.service.InterfaceTrigger,
		selector : '.button.navigate',
		event : 'click',
		attribute : 'id',
		escaped : false
	},{
		service : FireSpark.smart.service.InterfaceHistory
	}]);
	
	/*FireSpark.ui.helper.transformRobin($('div.partners a'), {
		selector : '.data',
		interval : 5000,
		total : 1
	});*/
	
	for(var $i in GeoStore.data.launch){
		Snowblozm.Kernel.launch(GeoStore.data.launch[$i]);
	}
	
	/**
	 *	@urlcheck
	**/
	var urlcheck = function(){
		FireSpark.smart.service.InterfaceUrl.run({
			navigator : window.location.hash,
			save : true,
			nofrc : true
		});
	}
	/*window.setInterval(urlcheck, 3500);*/
	//var $el = $('#kestrelbase>.tile-content').eq(0);
	//if(!$el.is(':visible')){
	//	$el.fadeIn(150);
	//}
	urlcheck();
	
	/**
	 *	@scroll top
	**/
	$('span.top a').live('click', function (){
			$('body,html').animate({
				scrollTop: 0
			}, 850);
			return false;
	});
	
	/**
	 *	@datatable dataTable
	**/
	$.extend($.fn.dataTable.defaults, {
		//bSort: false,
		aaSorting : [],
		sPaginationType: "full_numbers",
		iDisplayLength: 50,
		aLengthMenu: [[50, 100, 150, -1], [50, 100, 150, "All"]]
	});
	
	$('.data-table-panel').live('load', function(){
		var $el = $(this).find('table.datatable');
		if(!$el.hasClass('datatable-done')){
			$el.dataTable().addClass('datatable-done');
		}
		return false;
	});
	
	$('.data-table-panel').each(function(){
		var $el = $(this).find('table.datatable');
		if(!$el.hasClass('datatable-done')){
			$el.dataTable().addClass('datatable-done');
		}
		return true
	});
	
	/**
	 *	@editor wysiwyg
	**/
	$('textarea.wysiwyg').live('focusin', function(){
		if(!$(this).hasClass('wysiwyg-done')){
			$(this).wysiwyg().addClass('wysiwyg-done');
		}
	});
	
	/**
	 *	@editor cmnt-text
	**/
	$('textarea.cmnt-text').live('focusin', function(){
		if(!$(this).hasClass('cmnt-text-done')){
			$(this).addClass('cmnt-text-done');
		}
	});
	
	$('.smart-panel').live('load', function(){
		FireSpark.ui.helper.transformSmartpanel($(this).find('.smart-block'));
		FireSpark.ui.helper.transformSmartpanel($(this).find('.inline-block'), {
			display: '.inline-display',
			edit: '.inline-display',
			form: '.inline-form',
			cancel: '.inline-cancel'
		});
		return false;
	});
	
	$('.smart-panel').each(function(){
		FireSpark.ui.helper.transformSmartpanel($(this).find('.smart-block'));
		FireSpark.ui.helper.transformSmartpanel($(this).find('.inline-block'), {
			display: '.inline-display',
			edit: '.inline-display',
			form: '.inline-form',
			cancel: '.inline-cancel'
		});
		return false;
	});
	
	$.expander.defaults = {
		slicePoint: 150,
		preserveWords: true,
		widow: 5,
		expandText: 'show more',
		expandPrefix: '... ',
		summaryClass: 'summary',
		detailClass: 'details',
		moreClass: 'read-more',
		lessClass: 'read-less',
		collapseTimer: 0,
		expandEffect: 'fadeIn',
		expandSpeed: 250,
		collapseEffect: 'fadeOut',
		collapseSpeed: 200,
		userCollapse: true,
		userCollapseText: 'show less',
		userCollapsePrefix: ' '
	};
	
	$('.expander-panel').live('load', function(){
		$(this).find('.expander').expander();
	});
	
	FireSpark.smart.helper.dataState(FireSpark.smart.constant.initmsg, true);

});


