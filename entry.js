!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,r){(function(t){var r,r;!function(t){e.exports=t()}(function(){return function e(t,n,o){function i(u,c){if(!n[u]){if(!t[u]){var f="function"==typeof r&&r;if(!c&&f)return r(u,!0);if(a)return a(u,!0);var s=new Error("Cannot find module '"+u+"'");throw s.code="MODULE_NOT_FOUND",s}var l=n[u]={exports:{}};t[u][0].call(l.exports,function(e){var r=t[u][1][e];return i(r?r:e)},l,l.exports,e,t,n,o)}return n[u].exports}for(var a="function"==typeof r&&r,u=0;u<o.length;u++)i(o[u]);return i}({1:[function(e,t,r){"use strict";function n(){}function o(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=g,this.queue=[],this.outcome=void 0,e!==n&&c(this,e)}function i(e,t,r){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof r&&(this.onRejected=r,this.callRejected=this.otherCallRejected)}function a(e,t,r){h(function(){var n;try{n=t(r)}catch(t){return y.reject(e,t)}n===e?y.reject(e,new TypeError("Cannot resolve promise with itself")):y.resolve(e,n)})}function u(e){var t=e&&e.then;if(e&&"object"==typeof e&&"function"==typeof t)return function(){t.apply(e,arguments)}}function c(e,t){function r(t){i||(i=!0,y.reject(e,t))}function n(t){i||(i=!0,y.resolve(e,t))}function o(){t(n,r)}var i=!1,a=f(o);"error"===a.status&&r(a.value)}function f(e,t){var r={};try{r.value=e(t),r.status="success"}catch(e){r.status="error",r.value=e}return r}function s(e){return e instanceof this?e:y.resolve(new this(n),e)}function l(e){var t=new this(n);return y.reject(t,e)}function d(e){function t(e,t){function n(e){a[t]=e,++u!==o||i||(i=!0,y.resolve(f,a))}r.resolve(e).then(n,function(e){i||(i=!0,y.reject(f,e))})}var r=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var o=e.length,i=!1;if(!o)return this.resolve([]);for(var a=new Array(o),u=0,c=-1,f=new this(n);++c<o;)t(e[c],c);return f}function v(e){function t(e){r.resolve(e).then(function(e){i||(i=!0,y.resolve(u,e))},function(e){i||(i=!0,y.reject(u,e))})}var r=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var o=e.length,i=!1;if(!o)return this.resolve([]);for(var a=-1,u=new this(n);++a<o;)t(e[a]);return u}var h=e(2),y={},p=["REJECTED"],b=["FULFILLED"],g=["PENDING"];t.exports=r=o,o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){if("function"!=typeof e&&this.state===b||"function"!=typeof t&&this.state===p)return this;var r=new this.constructor(n);if(this.state!==g){var o=this.state===b?e:t;a(r,o,this.outcome)}else this.queue.push(new i(r,e,t));return r},i.prototype.callFulfilled=function(e){y.resolve(this.promise,e)},i.prototype.otherCallFulfilled=function(e){a(this.promise,this.onFulfilled,e)},i.prototype.callRejected=function(e){y.reject(this.promise,e)},i.prototype.otherCallRejected=function(e){a(this.promise,this.onRejected,e)},y.resolve=function(e,t){var r=f(u,t);if("error"===r.status)return y.reject(e,r.value);var n=r.value;if(n)c(e,n);else{e.state=b,e.outcome=t;for(var o=-1,i=e.queue.length;++o<i;)e.queue[o].callFulfilled(t)}return e},y.reject=function(e,t){e.state=p,e.outcome=t;for(var r=-1,n=e.queue.length;++r<n;)e.queue[r].callRejected(t);return e},r.resolve=s,r.reject=l,r.all=d,r.race=v},{2:2}],2:[function(e,r,n){(function(e){"use strict";function t(){s=!0;for(var e,t,r=l.length;r;){for(t=l,l=[],e=-1;++e<r;)t[e]();r=l.length}s=!1}function n(e){1!==l.push(e)||s||o()}var o,i=e.MutationObserver||e.WebKitMutationObserver;if(i){var a=0,u=new i(t),c=e.document.createTextNode("");u.observe(c,{characterData:!0}),o=function(){c.data=a=++a%2}}else if(e.setImmediate||"undefined"==typeof e.MessageChannel)o="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var r=e.document.createElement("script");r.onreadystatechange=function(){t(),r.onreadystatechange=null,r.parentNode.removeChild(r),r=null},e.document.documentElement.appendChild(r)}:function(){setTimeout(t,0)};else{var f=new e.MessageChannel;f.port1.onmessage=t,o=function(){f.port2.postMessage(0)}}var s,l=[];r.exports=n}).call(this,"undefined"!=typeof t?t:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],3:[function(e,r,n){(function(t){"use strict";"function"!=typeof t.Promise&&(t.Promise=e(1))}).call(this,"undefined"!=typeof t?t:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{1:1}],4:[function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(e){}}function i(){try{return!!ie&&!("undefined"!=typeof openDatabase&&"undefined"!=typeof navigator&&navigator.userAgent&&/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent))&&ie&&"function"==typeof ie.open&&"undefined"!=typeof IDBKeyRange}catch(e){return!1}}function a(){return"function"==typeof openDatabase}function u(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&localStorage.setItem}catch(e){return!1}}function c(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(i){if("TypeError"!==i.name)throw i;for(var r="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder,n=new r,o=0;o<e.length;o+=1)n.append(e[o]);return n.getBlob(t.type)}}function f(e,t){t&&e.then(function(e){t(null,e)},function(e){t(e)})}function s(e,t,r){"function"==typeof t&&e.then(t),"function"==typeof r&&e.catch(r)}function l(e){for(var t=e.length,r=new ArrayBuffer(t),n=new Uint8Array(r),o=0;o<t;o++)n[o]=e.charCodeAt(o);return r}function d(e){return new ce(function(t){var r=c([""]);e.objectStore(fe).put(r,"key"),e.onabort=function(e){e.preventDefault(),e.stopPropagation(),t(!1)},e.oncomplete=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),r=navigator.userAgent.match(/Edge\//);t(r||!e||parseInt(e[1],10)>=43)}}).catch(function(){return!1})}function v(e){return"boolean"==typeof ae?ce.resolve(ae):d(e).then(function(e){return ae=e})}function h(e){var t=ue[e.name],r={};r.promise=new ce(function(e){r.resolve=e}),t.deferredOperations.push(r),t.dbReady?t.dbReady=t.dbReady.then(function(){return r.promise}):t.dbReady=r.promise}function y(e){var t=ue[e.name],r=t.deferredOperations.pop();r&&r.resolve()}function p(e,t){return new ce(function(r,n){if(e.db){if(!t)return r(e.db);h(e),e.db.close()}var o=[e.name];t&&o.push(e.version);var i=ie.open.apply(ie,o);t&&(i.onupgradeneeded=function(t){var r=i.result;try{r.createObjectStore(e.storeName),t.oldVersion<=1&&r.createObjectStore(fe)}catch(r){if("ConstraintError"!==r.name)throw r;console.warn('The database "'+e.name+'" has been upgraded from version '+t.oldVersion+" to version "+t.newVersion+', but the storage "'+e.storeName+'" already exists.')}}),i.onerror=function(){n(i.error)},i.onsuccess=function(){r(i.result),y(e)}})}function b(e){return p(e,!1)}function g(e){return p(e,!0)}function m(e,t){if(!e.db)return!0;var r=!e.db.objectStoreNames.contains(e.storeName),n=e.version<e.db.version,o=e.version>e.db.version;if(n&&(e.version!==t&&console.warn('The database "'+e.name+"\" can't be downgraded from version "+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||r){if(r){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}function w(e){return new ce(function(t,r){var n=new FileReader;n.onerror=r,n.onloadend=function(r){var n=btoa(r.target.result||"");t({__local_forage_encoded_blob:!0,data:n,type:e.type})},n.readAsBinaryString(e)})}function _(e){var t=l(atob(e.data));return c([t],{type:e.type})}function S(e){return e&&e.__local_forage_encoded_blob}function E(e){var t=this,r=t._initReady().then(function(){var e=ue[t._dbInfo.name];if(e&&e.dbReady)return e.dbReady});return s(r,e,e),r}function I(e){function t(){return ce.resolve()}var r=this,n={db:null};if(e)for(var o in e)n[o]=e[o];ue||(ue={});var i=ue[n.name];i||(i={forages:[],db:null,dbReady:null,deferredOperations:[]},ue[n.name]=i),i.forages.push(r),r._initReady||(r._initReady=r.ready,r.ready=E);for(var a=[],u=0;u<i.forages.length;u++){var c=i.forages[u];c!==r&&a.push(c._initReady().catch(t))}var f=i.forages.slice(0);return ce.all(a).then(function(){return n.db=i.db,b(n)}).then(function(e){return n.db=e,m(n,r._defaultConfig.version)?g(n):e}).then(function(e){n.db=i.db=e,r._dbInfo=n;for(var t=0;t<f.length;t++){var o=f[t];o!==r&&(o._dbInfo.db=n.db,o._dbInfo.version=n.version)}})}function A(e,t){var r=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e));var n=new ce(function(t,n){r.ready().then(function(){var o=r._dbInfo,i=o.db.transaction(o.storeName,"readonly").objectStore(o.storeName),a=i.get(e);a.onsuccess=function(){var e=a.result;void 0===e&&(e=null),S(e)&&(e=_(e)),t(e)},a.onerror=function(){n(a.error)}}).catch(n)});return f(n,t),n}function x(e,t){var r=this,n=new ce(function(t,n){r.ready().then(function(){var o=r._dbInfo,i=o.db.transaction(o.storeName,"readonly").objectStore(o.storeName),a=i.openCursor(),u=1;a.onsuccess=function(){var r=a.result;if(r){var n=r.value;S(n)&&(n=_(n));var o=e(n,r.key,u++);void 0!==o?t(o):r.continue()}else t()},a.onerror=function(){n(a.error)}}).catch(n)});return f(n,t),n}function O(e,t,r){var n=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e));var o=new ce(function(r,o){var i;n.ready().then(function(){return i=n._dbInfo,"[object Blob]"===se.call(t)?v(i.db).then(function(e){return e?t:w(t)}):t}).then(function(t){var n=i.db.transaction(i.storeName,"readwrite"),a=n.objectStore(i.storeName);null===t&&(t=void 0),n.oncomplete=function(){void 0===t&&(t=null),r(t)},n.onabort=n.onerror=function(){var e=u.error?u.error:u.transaction.error;o(e)};var u=a.put(t,e)}).catch(o)});return f(o,r),o}function j(e,t){var r=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e));var n=new ce(function(t,n){r.ready().then(function(){var o=r._dbInfo,i=o.db.transaction(o.storeName,"readwrite"),a=i.objectStore(o.storeName),u=a.delete(e);i.oncomplete=function(){t()},i.onerror=function(){n(u.error)},i.onabort=function(){var e=u.error?u.error:u.transaction.error;n(e)}}).catch(n)});return f(n,t),n}function N(e){var t=this,r=new ce(function(e,r){t.ready().then(function(){var n=t._dbInfo,o=n.db.transaction(n.storeName,"readwrite"),i=o.objectStore(n.storeName),a=i.clear();o.oncomplete=function(){e()},o.onabort=o.onerror=function(){var e=a.error?a.error:a.transaction.error;r(e)}}).catch(r)});return f(r,e),r}function R(e){var t=this,r=new ce(function(e,r){t.ready().then(function(){var n=t._dbInfo,o=n.db.transaction(n.storeName,"readonly").objectStore(n.storeName),i=o.count();i.onsuccess=function(){e(i.result)},i.onerror=function(){r(i.error)}}).catch(r)});return f(r,e),r}function D(e,t){var r=this,n=new ce(function(t,n){return e<0?void t(null):void r.ready().then(function(){var o=r._dbInfo,i=o.db.transaction(o.storeName,"readonly").objectStore(o.storeName),a=!1,u=i.openCursor();u.onsuccess=function(){var r=u.result;return r?void(0===e?t(r.key):a?t(r.key):(a=!0,r.advance(e))):void t(null)},u.onerror=function(){n(u.error)}}).catch(n)});return f(n,t),n}function k(e){var t=this,r=new ce(function(e,r){t.ready().then(function(){var n=t._dbInfo,o=n.db.transaction(n.storeName,"readonly").objectStore(n.storeName),i=o.openCursor(),a=[];i.onsuccess=function(){var t=i.result;return t?(a.push(t.key),void t.continue()):void e(a)},i.onerror=function(){r(i.error)}}).catch(r)});return f(r,e),r}function B(e){var t,r,n,o,i,a=.75*e.length,u=e.length,c=0;"="===e[e.length-1]&&(a--,"="===e[e.length-2]&&a--);var f=new ArrayBuffer(a),s=new Uint8Array(f);for(t=0;t<u;t+=4)r=de.indexOf(e[t]),n=de.indexOf(e[t+1]),o=de.indexOf(e[t+2]),i=de.indexOf(e[t+3]),s[c++]=r<<2|n>>4,s[c++]=(15&n)<<4|o>>2,s[c++]=(3&o)<<6|63&i;return f}function C(e){var t,r=new Uint8Array(e),n="";for(t=0;t<r.length;t+=3)n+=de[r[t]>>2],n+=de[(3&r[t])<<4|r[t+1]>>4],n+=de[(15&r[t+1])<<2|r[t+2]>>6],n+=de[63&r[t+2]];return r.length%3===2?n=n.substring(0,n.length-1)+"=":r.length%3===1&&(n=n.substring(0,n.length-2)+"=="),n}function L(e,t){var r="";if(e&&(r=Ne.call(e)),e&&("[object ArrayBuffer]"===r||e.buffer&&"[object ArrayBuffer]"===Ne.call(e.buffer))){var n,o=ye;e instanceof ArrayBuffer?(n=e,o+=be):(n=e.buffer,"[object Int8Array]"===r?o+=me:"[object Uint8Array]"===r?o+=we:"[object Uint8ClampedArray]"===r?o+=_e:"[object Int16Array]"===r?o+=Se:"[object Uint16Array]"===r?o+=Ie:"[object Int32Array]"===r?o+=Ee:"[object Uint32Array]"===r?o+=Ae:"[object Float32Array]"===r?o+=xe:"[object Float64Array]"===r?o+=Oe:t(new Error("Failed to get type for BinaryArray"))),t(o+C(n))}else if("[object Blob]"===r){var i=new FileReader;i.onload=function(){var r=ve+e.type+"~"+C(this.result);t(ye+ge+r)},i.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(r){console.error("Couldn't convert value into a JSON string: ",e),t(null,r)}}function T(e){if(e.substring(0,pe)!==ye)return JSON.parse(e);var t,r=e.substring(je),n=e.substring(pe,je);if(n===ge&&he.test(r)){var o=r.match(he);t=o[1],r=r.substring(o[0].length)}var i=B(r);switch(n){case be:return i;case ge:return c([i],{type:t});case me:return new Int8Array(i);case we:return new Uint8Array(i);case _e:return new Uint8ClampedArray(i);case Se:return new Int16Array(i);case Ie:return new Uint16Array(i);case Ee:return new Int32Array(i);case Ae:return new Uint32Array(i);case xe:return new Float32Array(i);case Oe:return new Float64Array(i);default:throw new Error("Unkown type: "+n)}}function F(e){var t=this,r={db:null};if(e)for(var n in e)r[n]="string"!=typeof e[n]?e[n].toString():e[n];var o=new ce(function(e,n){try{r.db=openDatabase(r.name,String(r.version),r.description,r.size)}catch(e){return n(e)}r.db.transaction(function(o){o.executeSql("CREATE TABLE IF NOT EXISTS "+r.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],function(){t._dbInfo=r,e()},function(e,t){n(t)})})});return r.serializer=Re,o}function z(e,t){var r=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e));var n=new ce(function(t,n){r.ready().then(function(){var o=r._dbInfo;o.db.transaction(function(r){r.executeSql("SELECT * FROM "+o.storeName+" WHERE key = ? LIMIT 1",[e],function(e,r){var n=r.rows.length?r.rows.item(0).value:null;n&&(n=o.serializer.deserialize(n)),t(n)},function(e,t){n(t)})})}).catch(n)});return f(n,t),n}function M(e,t){var r=this,n=new ce(function(t,n){r.ready().then(function(){var o=r._dbInfo;o.db.transaction(function(r){r.executeSql("SELECT * FROM "+o.storeName,[],function(r,n){for(var i=n.rows,a=i.length,u=0;u<a;u++){var c=i.item(u),f=c.value;if(f&&(f=o.serializer.deserialize(f)),f=e(f,c.key,u+1),void 0!==f)return void t(f)}t()},function(e,t){n(t)})})}).catch(n)});return f(n,t),n}function P(e,t,r){var n=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e));var o=new ce(function(r,o){n.ready().then(function(){void 0===t&&(t=null);var i=t,a=n._dbInfo;a.serializer.serialize(t,function(t,n){n?o(n):a.db.transaction(function(n){n.executeSql("INSERT OR REPLACE INTO "+a.storeName+" (key, value) VALUES (?, ?)",[e,t],function(){r(i)},function(e,t){o(t)})},function(e){e.code===e.QUOTA_ERR&&o(e)})})}).catch(o)});return f(o,r),o}function U(e,t){var r=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e));var n=new ce(function(t,n){r.ready().then(function(){var o=r._dbInfo;o.db.transaction(function(r){r.executeSql("DELETE FROM "+o.storeName+" WHERE key = ?",[e],function(){t()},function(e,t){n(t)})})}).catch(n)});return f(n,t),n}function q(e){var t=this,r=new ce(function(e,r){t.ready().then(function(){var n=t._dbInfo;n.db.transaction(function(t){t.executeSql("DELETE FROM "+n.storeName,[],function(){e()},function(e,t){r(t)})})}).catch(r)});return f(r,e),r}function W(e){var t=this,r=new ce(function(e,r){t.ready().then(function(){var n=t._dbInfo;n.db.transaction(function(t){t.executeSql("SELECT COUNT(key) as c FROM "+n.storeName,[],function(t,r){var n=r.rows.item(0).c;e(n)},function(e,t){r(t)})})}).catch(r)});return f(r,e),r}function Q(e,t){var r=this,n=new ce(function(t,n){r.ready().then(function(){var o=r._dbInfo;o.db.transaction(function(r){r.executeSql("SELECT key FROM "+o.storeName+" WHERE id = ? LIMIT 1",[e+1],function(e,r){var n=r.rows.length?r.rows.item(0).key:null;t(n)},function(e,t){n(t)})})}).catch(n)});return f(n,t),n}function G(e){var t=this,r=new ce(function(e,r){t.ready().then(function(){var n=t._dbInfo;n.db.transaction(function(t){t.executeSql("SELECT key FROM "+n.storeName,[],function(t,r){for(var n=[],o=0;o<r.rows.length;o++)n.push(r.rows.item(o).key);e(n)},function(e,t){r(t)})})}).catch(r)});return f(r,e),r}function K(e){var t=this,r={};if(e)for(var n in e)r[n]=e[n];return r.keyPrefix=r.name+"/",r.storeName!==t._defaultConfig.storeName&&(r.keyPrefix+=r.storeName+"/"),t._dbInfo=r,r.serializer=Re,ce.resolve()}function X(e){var t=this,r=t.ready().then(function(){for(var e=t._dbInfo.keyPrefix,r=localStorage.length-1;r>=0;r--){var n=localStorage.key(r);0===n.indexOf(e)&&localStorage.removeItem(n)}});return f(r,e),r}function V(e,t){var r=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e));var n=r.ready().then(function(){var t=r._dbInfo,n=localStorage.getItem(t.keyPrefix+e);return n&&(n=t.serializer.deserialize(n)),n});return f(n,t),n}function H(e,t){var r=this,n=r.ready().then(function(){for(var t=r._dbInfo,n=t.keyPrefix,o=n.length,i=localStorage.length,a=1,u=0;u<i;u++){var c=localStorage.key(u);if(0===c.indexOf(n)){var f=localStorage.getItem(c);if(f&&(f=t.serializer.deserialize(f)),f=e(f,c.substring(o),a++),void 0!==f)return f}}});return f(n,t),n}function J(e,t){var r=this,n=r.ready().then(function(){var t,n=r._dbInfo;try{t=localStorage.key(e)}catch(e){t=null}return t&&(t=t.substring(n.keyPrefix.length)),t});return f(n,t),n}function Y(e){var t=this,r=t.ready().then(function(){for(var e=t._dbInfo,r=localStorage.length,n=[],o=0;o<r;o++)0===localStorage.key(o).indexOf(e.keyPrefix)&&n.push(localStorage.key(o).substring(e.keyPrefix.length));return n});return f(r,e),r}function Z(e){var t=this,r=t.keys().then(function(e){return e.length});return f(r,e),r}function $(e,t){var r=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e));var n=r.ready().then(function(){var t=r._dbInfo;localStorage.removeItem(t.keyPrefix+e)});return f(n,t),n}function ee(e,t,r){var n=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e));var o=n.ready().then(function(){void 0===t&&(t=null);var r=t;return new ce(function(o,i){var a=n._dbInfo;a.serializer.serialize(t,function(t,n){if(n)i(n);else try{localStorage.setItem(a.keyPrefix+e,t),o(r)}catch(e){"QuotaExceededError"!==e.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==e.name||i(e),i(e)}})})});return f(o,r),o}function te(e,t){e[t]=function(){var r=arguments;return e.ready().then(function(){return e[t].apply(e,r)})}}function re(){for(var e=1;e<arguments.length;e++){var t=arguments[e];if(t)for(var r in t)t.hasOwnProperty(r)&&(Me(t[r])?arguments[0][r]=t[r].slice():arguments[0][r]=t[r])}return arguments[0]}function ne(e){for(var t in Ce)if(Ce.hasOwnProperty(t)&&Ce[t]===e)return!0;return!1}var oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ie=o();"undefined"==typeof Promise&&"undefined"!=typeof e&&e(3);var ae,ue,ce=Promise,fe="local-forage-detect-blob-support",se=Object.prototype.toString,le={_driver:"asyncStorage",_initStorage:I,iterate:x,getItem:A,setItem:O,removeItem:j,clear:N,length:R,key:D,keys:k},de="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ve="~~local_forage_type~",he=/^~~local_forage_type~([^~]+)~/,ye="__lfsc__:",pe=ye.length,be="arbf",ge="blob",me="si08",we="ui08",_e="uic8",Se="si16",Ee="si32",Ie="ur16",Ae="ui32",xe="fl32",Oe="fl64",je=pe+be.length,Ne=Object.prototype.toString,Re={serialize:L,deserialize:T,stringToBuffer:B,bufferToString:C},De={_driver:"webSQLStorage",_initStorage:F,iterate:M,getItem:z,setItem:P,removeItem:U,clear:q,length:W,key:Q,keys:G},ke={_driver:"localStorageWrapper",_initStorage:K,iterate:H,getItem:V,setItem:ee,removeItem:$,clear:X,length:Z,key:J,keys:Y},Be={},Ce={INDEXEDDB:"asyncStorage",LOCALSTORAGE:"localStorageWrapper",WEBSQL:"webSQLStorage"},Le=[Ce.INDEXEDDB,Ce.WEBSQL,Ce.LOCALSTORAGE],Te=["clear","getItem","iterate","key","keys","length","removeItem","setItem"],Fe={description:"",driver:Le.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1},ze={};ze[Ce.INDEXEDDB]=i(),ze[Ce.WEBSQL]=a(),ze[Ce.LOCALSTORAGE]=u();var Me=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},Pe=function(){function e(t){n(this,e),this.INDEXEDDB=Ce.INDEXEDDB,this.LOCALSTORAGE=Ce.LOCALSTORAGE,this.WEBSQL=Ce.WEBSQL,this._defaultConfig=re({},Fe),this._config=re({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver)}return e.prototype.config=function(e){if("object"===("undefined"==typeof e?"undefined":oe(e))){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var t in e)"storeName"===t&&(e[t]=e[t].replace(/\W/g,"_")),this._config[t]=e[t];return"driver"in e&&e.driver&&this.setDriver(this._config.driver),!0}return"string"==typeof e?this._config[e]:this._config},e.prototype.defineDriver=function(e,t,r){var n=new ce(function(t,r){try{var n=e._driver,o=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver"),i=new Error("Custom driver name already in use: "+e._driver);if(!e._driver)return void r(o);if(ne(e._driver))return void r(i);for(var a=Te.concat("_initStorage"),u=0;u<a.length;u++){var c=a[u];if(!c||!e[c]||"function"!=typeof e[c])return void r(o)}var f=ce.resolve(!0);"_support"in e&&(f=e._support&&"function"==typeof e._support?e._support():ce.resolve(!!e._support)),f.then(function(r){ze[n]=r,Be[n]=e,t()},r)}catch(e){r(e)}});return s(n,t,r),n},e.prototype.driver=function(){return this._driver||null},e.prototype.getDriver=function(e,t,r){var n=this,o=ce.resolve().then(function(){if(!ne(e)){if(Be[e])return Be[e];throw new Error("Driver not found.")}switch(e){case n.INDEXEDDB:return le;case n.LOCALSTORAGE:return ke;case n.WEBSQL:return De}});return s(o,t,r),o},e.prototype.getSerializer=function(e){var t=ce.resolve(Re);return s(t,e),t},e.prototype.ready=function(e){var t=this,r=t._driverSet.then(function(){return null===t._ready&&(t._ready=t._initDriver()),t._ready});return s(r,e,e),r},e.prototype.setDriver=function(e,t,r){function n(){i._config.driver=i.driver()}function o(e){return function(){function t(){for(;r<e.length;){var o=e[r];return r++,i._dbInfo=null,i._ready=null,i.getDriver(o).then(function(e){return i._extend(e),n(),i._ready=i._initStorage(i._config),i._ready}).catch(t)}n();var a=new Error("No available storage method found.");return i._driverSet=ce.reject(a),i._driverSet}var r=0;return t()}}var i=this;Me(e)||(e=[e]);var a=this._getSupportedDrivers(e),u=null!==this._driverSet?this._driverSet.catch(function(){return ce.resolve()}):ce.resolve();return this._driverSet=u.then(function(){var e=a[0];return i._dbInfo=null,i._ready=null,i.getDriver(e).then(function(e){i._driver=e._driver,n(),i._wrapLibraryMethodsWithReady(),i._initDriver=o(a)})}).catch(function(){n();var e=new Error("No available storage method found.");return i._driverSet=ce.reject(e),i._driverSet}),s(this._driverSet,t,r),this._driverSet},e.prototype.supports=function(e){return!!ze[e]},e.prototype._extend=function(e){re(this,e)},e.prototype._getSupportedDrivers=function(e){for(var t=[],r=0,n=e.length;r<n;r++){var o=e[r];this.supports(o)&&t.push(o)}return t},e.prototype._wrapLibraryMethodsWithReady=function(){for(var e=0;e<Te.length;e++)te(this,Te[e])},e.prototype.createInstance=function(t){return new e(t)},e}(),Ue=new Pe;t.exports=Ue},{3:3}]},{},[4])(4)})}).call(t,r(1))},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";function n(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,i){try{var a=t[o](i),u=a.value}catch(e){return void r(e)}return a.done?void e(u):Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)})}return n("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=r.n(o),a=function(){function e(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=(()=>{var e=n(function*(e){var t=new URL(e.url),r=/^\/([^\/]+)\/?(.*)$/.exec(t.pathname)||[],n=a(r,3),o=n[1],u=n[2];if(o&&!u){console.log(`appName found!: ${o}`);var f=(yield i.a.getItem(c))||[],s=!0,l=!1,d=void 0;try{for(var v,h=f[Symbol.iterator]();!(s=(v=h.next()).done);s=!0){var y=v.value;if(y.title===o){var p=yield i.a.getItem(y.htmlKey);return new Response(p)}}}catch(e){l=!0,d=e}finally{try{!s&&h.return&&h.return()}finally{if(l)throw d}}}return yield fetch(e)});return function(t){return e.apply(this,arguments)}})(),c="apps";i.a.config({name:"Feeles",storeName:"feeles_alpha_apps"}),self.addEventListener("install",(()=>{var e=n(function*(e){if(console.log("Installed!"),!(yield i.a.getItem(c))){var t=yield fetch("./bin/example.html"),r=yield t.blob(),n=(new Date).getTime(),o={htmlKey:`example_${n}`,title:"example",created:n,size:r.size,updated:n,CORE_VERSION:"beta-1",CORE_CDN_URL:"https://embed.hackforplay.xyz/open-source/core/h4p-beta-1.js"};yield i.a.setItem(o.htmlKey,r),yield i.a.setItem(c,[o]),console.log("Example successfully installed!")}});return function(t){return e.apply(this,arguments)}})()),self.addEventListener("activate",e=>{console.log("Activated!")}),self.addEventListener("fetch",e=>{return console.log(`proxied: ${e.request.url}`),e.request.url.startsWith(self.registration.scope)?void e.respondWith(u(e.request)):void e.respondWith(fetch(e.request))})}]);